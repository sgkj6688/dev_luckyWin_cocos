System.register("chunks:///_virtual/SPeedWinnerDef.ts", ['cc', './SpeedWinnerProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, AudioClip, SpeedWinnerProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      SpeedWinnerProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7f9a0+4/WFK0rL6+MPET14/", "SPeedWinnerDef", undefined);
      var SPeedWinnerDef = exports('SPeedWinnerDef', /*#__PURE__*/function () {
        function SPeedWinnerDef() {}
        SPeedWinnerDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = SpeedWinnerProxy.bundle;
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
        SPeedWinnerDef.palyMusic = function palyMusic(name) {
          var bundle = SpeedWinnerProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return SPeedWinnerDef;
      }());
      SPeedWinnerDef.audio = {
        prizeSmallwin: 'prizeSmallwin',
        //中奖图标高亮 done
        prizeSmallwinReach: 'prizeSmallwinReach',
        //金额收集 done
        symShrink: 'symShrink',
        //消除 done
        prizeInfobarTotalwin: 'prizeInfobarTotalwin',
        //中奖总金额展示 done
        bgm_mg: 'bgm_mg',
        //普通模式背景音乐  done
        bgm_fs: 'bgm_fs',
        //特殊模式背景音乐 done
        spinBtn: 'spinBtn',
        //转动最开始播放 done
        spinStop: 'spinStop',
        //12345轴落下声音 done 没声音
        spinStopQuick: 'spinStopQuick',
        //快速模式落下后播放 done
        symbolWild: 'symWild',
        //界面Wild播放动画声音 done
        symMultiSpawn: 'symMultiSpawn',
        //出现倍数符号的声音 done
        symbolScatter: 'symScatter',
        //界面Scatter播放动画声音 done
        heartbeat: 'heartbeat',
        //期待光效循环播放
        heartbeatNoise: 'heartbeatNoise',
        //期待光效播放 done
        heartbeatSlowdrop: 'heartbeatSlowdrop',
        //期待符号落下 done
        scatterWinHighlight: 'scatterWinHighlight',
        //中免费scatter一起播动画声
        symMultiActivate: 'symMultiActivate',
        //倍数飞起 done
        symMultiCombine: 'symMultiCombine',
        //飞起后相加 done
        uiCollect: 'uiCollect',
        //倍数乘中奖金额 done
        prizeInfobarTotalwinMedMain: 'prizeInfobarTotalwinMedMain',
        //总奖声5倍以上声 done
        prizeInfobarTotalwinMedEnd: 'prizeInfobarTotalwinMedEnd',
        //总奖声5倍以上结束声 done
        fastspinStart: 'fastspinStart',
        //旋转光效按顺序播放这两个音效 done
        fastspinStop: 'fastspinStop',
        //旋转光效没进入成功 done
        fsTrans: 'fsTrans',
        //进入免费入口页播放 done
        uiStart: 'uiStart',
        //点免费入口页按钮这个播放 done
        fsSpin: 'fsSpin',
        //免费模式最后轮的动画 done
        bgm_bigwin_main: 'bgm_bigwin_main',
        //中大奖动画
        bgm_bigwin_end: 'bgm_bigwin_end',
        //中大奖结束动画
        bgm_totalwin_main: 'bgm_totalwin_main',
        //特殊模式总奖播放
        bgm_totalwin_end: 'bgm_totalwin_end',
        //特殊模式总奖结束播放
        uiInfo: 'uiInfo' //符号点击开声 //done
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedWinnerGame", ['./SPeedWinnerDef.ts', './SPeedWinnerWindow.ts', './SpeedWinnerItem.ts', './SpeedWinnerProxy.ts', './SpeedWinnerRun.ts', './SpeedWinnerScene.ts', './SpeedWinnerTranRun.ts', './SpeedWinnerView.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SpeedWinnerItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpeedWinnerProxy.ts', './SPeedWinnerDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, sp, SpriteFrame, UITransform, tween, Vec3, Tween, v3, Component, SpeedWinnerProxy, SpeedWinnerGameEvent, SPeedWinnerDef;
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
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      tween = module.tween;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      SpeedWinnerProxy = module.default;
      SpeedWinnerGameEvent = module.SpeedWinnerGameEvent;
    }, function (module) {
      SPeedWinnerDef = module.SPeedWinnerDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "cf9c7/MPztLMJ+6LBo6oOqu", "SpeedWinnerItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      /*
      SCATTER BonusSymbol = 0
      WILD BonusSymbol = 1
      MULTIPLE BonusSymbol = 2
      CAR BonusSymbol = 3
      WHEEL BonusSymbol = 4
      OILGUN BonusSymbol = 5
      GLOVE BonusSymbol = 6
      TOOL BonusSymbol = 7
      A BonusSymbol = 8
      K BonusSymbol = 9
      Q BonusSymbol = 10
      J BonusSymbol = 11
      TEN BonusSymbol = 12
      */

      var SpeedWinnerItem = exports('SpeedWinnerItem', (_dec = ccclass('SpeedWinnerItem'), _dec2 = menu("game/SpeedWinnerGame/SpeedWinnerItem"), _dec3 = property(Sprite), _dec4 = property(sp.Skeleton), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(Sprite), _dec11 = property(sp.Skeleton), _dec12 = property(Sprite), _dec13 = property(Sprite), _dec14 = property(Sprite), _dec15 = property(sp.Skeleton), _dec16 = property(Sprite), _dec17 = property(sp.SkeletonData), _dec18 = property(SpriteFrame), _dec19 = property(sp.SkeletonData), _dec20 = property(SpriteFrame), _dec21 = property(SpriteFrame), _dec22 = property(SpriteFrame), _dec23 = property(SpriteFrame), _dec24 = property(SpriteFrame), _dec25 = property(SpriteFrame), _dec26 = property(SpriteFrame), _dec27 = property(SpriteFrame), _dec28 = property(SpriteFrame), _dec29 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedWinnerItem, _Component);
        function SpeedWinnerItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "normal", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalIcon", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalSprite", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatterBg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatteIcon", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatteLight", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildIcon", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleBg", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multiple", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleIcon", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleMask", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveMultiple", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBg", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baskMask", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconList", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpriteList", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildList", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numberList", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleList", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatterBgList", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg1", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg2", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg3", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg4", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg5", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg6", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg7", _descriptor27, _assertThisInitialized(_this));
          _this._Sym = void 0;
          _this._cardData = null;
          _this._type = null;
          _this._parentI = null;
          _this._myI = null;
          return _this;
        }
        var _proto = SpeedWinnerItem.prototype;
        _proto.start = function start() {};
        _proto.setCard = function setCard(cardData, type, parentI, myI, end) {
          var _this2 = this;
          if (type === void 0) {
            type = 'top';
          }
          if (parentI === void 0) {
            parentI = 0;
          }
          if (myI === void 0) {
            myI = 0;
          }
          this._cardData = cardData;
          this._type = type;
          this._parentI = parentI;
          this._myI = myI;
          this.node.getComponent(UITransform).height = cardData['Length'] * 126;
          this.winBg.node.active = false;
          this.moveMultiple.node.active = false;
          // this.multipleBg.node.active = true
          // this.multipleBg.node.active = false

          this._Sym = cardData['Sym'];
          if (this._Sym == 0) {
            this.normal.node.active = false;
            this.multipleBg.node.active = false;
            this.wildIcon.node.active = false;
            this.scatterBg.node.active = true;
            if (cardData['Length'] == 1) {
              this.scatterBg.spriteFrame = this.scatterBgList[0];
            } else if (cardData['Length'] == 2) {
              this.scatterBg.spriteFrame = this.scatterBgList[1];
            } else if (cardData['Length'] == 3) {
              this.scatterBg.spriteFrame = this.scatterBgList[2];
            }
            this.scatteIcon.node.active = true;
            this.scatteIcon.setAnimation(0, "spawn", false);
            this.scatteIcon.addAnimation(0, 'idle', true);
            this.scatteIcon.setCompleteListener(function () {
              _this2.scatteIcon.setCompleteListener(null);
              _this2.scatteLight.node.active = true;
            });
            if (end) SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symbolScatter);
          } else if (this._Sym == 1) {
            this.normal.node.active = false;
            this.multipleBg.node.active = false;
            this.scatterBg.node.active = false;
            this.wildIcon.node.active = true;
            this.wildIcon.skeletonData = this.wildList[cardData['Length'] - 1];
            this.scheduleOnce(function () {
              _this2.wildIcon.node.active = true;
              _this2.wildIcon.setAnimation(0, "spawn", false);
              _this2.wildIcon.addAnimation(0, 'idle', true);
            });
            if (end) SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symbolWild);
          } else if (this._Sym == 2) {
            this.normal.node.active = false;
            this.wildIcon.node.active = false;
            this.scatterBg.node.active = false;
            this.multipleBg.node.active = true;
            this.multiple.node.active = true;
            this.multipleIcon.spriteFrame = this.multipleList[cardData['MultipleVal'] - 2];
            this.multipleMask.node.active = false;
            this.multipleBg.getComponent(UITransform).height = 126 * cardData['Length'];
            if (cardData['Length'] == 1) {
              this.multiple.setAnimation(0, "lv1_idle", true);
              this.multipleBg.spriteFrame = this.bg7[0];
            } else if (cardData['Length'] == 2) {
              this.multiple.setAnimation(0, "lv2_idle", true);
              this.multipleBg.spriteFrame = this.bg7[1];
            } else if (cardData['Length'] == 3) {
              this.multiple.setAnimation(0, "lv3_idle", true);
              this.multipleBg.spriteFrame = this.bg7[2];
            }
            if (end) SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symMultiSpawn);
          } else {
            if (this._Sym == 3) {
              this.normal.spriteFrame = this.bg1[cardData['Length'] - 1];
            } else if (this._Sym == 4) {
              this.normal.spriteFrame = this.bg2[cardData['Length'] - 1];
            } else if (this._Sym == 5) {
              this.normal.spriteFrame = this.bg3[cardData['Length'] - 1];
            } else if (this._Sym == 6) {
              this.normal.spriteFrame = this.bg4[cardData['Length'] - 1];
            } else if (this._Sym == 7) {
              this.normal.spriteFrame = this.bg5[cardData['Length'] - 1];
            } else {
              this.normal.spriteFrame = this.bg6[cardData['Length'] - 1];
            }
            this.normal.node.active = true;
            this.normalSprite.spriteFrame = this.iconSpriteList[this._Sym - 3];
            this.normalSprite.node.active = true;
            this.multipleBg.node.active = false;
            this.scatterBg.node.active = false;
            this.wildIcon.node.active = false;
          }
        };
        _proto.showWinRenderCard = function showWinRenderCard(cardData) {
          if (cardData && cardData['IsReward']) {
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.prizeSmallwin);
            if (cardData['Sym'] != 0 && cardData['Sym'] != 1) {
              this.winBg.node.active = true;
              if (this.winBg._objFlags) {
                if (cardData['Length'] == 1) {
                  this.winBg.setAnimation(0, "lv1", false);
                } else if (cardData['Length'] == 2) {
                  this.winBg.setAnimation(0, "lv2", false);
                } else if (cardData['Length'] == 3) {
                  this.winBg.setAnimation(0, "lv3", false);
                }
              }
            }
            if (cardData['Sym'] == 1) {
              this.wildIcon.node.active = true;
              if (this.wildIcon.skeletonData) {
                this.wildIcon.setAnimation(0, "win", true);
              }
            }
          }
        };
        _proto.multipleAnimation = function multipleAnimation() {
          var embedTween = tween(this.multipleIcon.node).to(0.3, {
            scale: new Vec3(1.15, 1.15, 1)
          }).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }).delay(0.5);
          tween(this.multipleIcon.node).repeatForever(embedTween).start();
        };
        _proto.multipleStop = function multipleStop() {
          if (this.multipleBg.node.active) {
            Tween.stopAllByTarget(this.multipleIcon.node);
          }
        };
        _proto.multipleRender = function multipleRender(cardData) {
          this.winBg.node.active = false;
          this.normal.node.active = false;
          this.multipleBg.node.active = false;
          this.scatterBg.node.active = false;
          this.wildIcon.node.active = false;
          this.moveMultiple.node.active = true;
          this.moveMultiple.spriteFrame = this.multipleList[cardData['MultipleVal'] - 2];
        };
        _proto.multipleWinAnimaton = function multipleWinAnimaton(cardData) {
          var _this3 = this;
          if (cardData['Sym'] == 2) {
            this.multiple.node.active = true;
            if (cardData['Length'] == 1) {
              this.multiple.addAnimation(0, "lv1_win", false);
            } else if (cardData['Length'] == 2) {
              this.multipleBg.spriteFrame = this.bg7[1];
              this.multiple.addAnimation(0, "lv2_win", false);
            } else if (cardData['Length'] == 3) {
              this.multipleBg.spriteFrame = this.bg7[2];
              this.multiple.addAnimation(0, "lv3_win", false);
            }
            this.scheduleOnce(function () {
              if (cardData['Length'] == 1) {
                _this3.multiple.setAnimation(0, "lv1_idle", true);
              } else if (cardData['Length'] == 2) {
                _this3.multiple.setAnimation(0, "lv2_idle", true);
              } else if (cardData['Length'] == 3) {
                _this3.multiple.setAnimation(0, "lv3_idle", true);
              }
            }, 0.5);
          }
        };
        _proto.scatterWinAnimation = function scatterWinAnimation() {
          console.log('scatter win');
          this.scatteLight.node.active = true;
          this.scatteLight.setAnimation(0, "win", false);
          this.scatteLight.addAnimation(0, 'idle', true);
        };
        _proto.scatterAndWildAnimation = function scatterAndWildAnimation(cardData) {
          var _this4 = this;
          if (cardData['Sym'] == 0) {
            this.scatterBg.node.active = true;
            this.scatteLight.node.active = true;
            this.scheduleOnce(function () {
              _this4.scatteIcon.node.active = true;
              //this.scatteIcon.setAnimation(0, "win", true);
            });
          }
        };

        _proto.scatterAndWildStop = function scatterAndWildStop(cardData) {
          var _this5 = this;
          if (cardData['Sym'] == 0) {
            this.scatterBg.node.active = true;
            this.scatteLight.node.active = false;
            this.scheduleOnce(function () {
              _this5.scatteIcon.node.active = true;
              _this5.scatteIcon.setAnimation(0, "exit", false);
            });
          } else if (cardData['Sym'] == 1) {
            this.wildIcon.node.active = true;
            this.scheduleOnce(function () {
              _this5.wildIcon.setAnimation(0, "exit", false);
            });
          }
        };
        _proto.hideWinRenderCard = function hideWinRenderCard() {
          this.winBg.node.active = false;
        };
        _proto.onClick = function onClick() {
          SpeedWinnerProxy.emit(SpeedWinnerGameEvent.CLICK_ITEM, {
            _cardData: this._cardData,
            _type: this._type,
            _parentI: this._parentI,
            _myI: this._myI,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        _proto.randCard = function randCard(cardData, type, parentI, myI, end) {
          this.setCard(cardData, type, parentI, myI, end);
        };
        _proto.update = function update(deltaTime) {};
        return SpeedWinnerItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "normalIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scatterBg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scatteIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scatteLight", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "wildIcon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "multipleBg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "multiple", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "multipleIcon", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "multipleMask", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "moveMultiple", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "winBg", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "baskMask", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "iconList", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "iconSpriteList", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "wildList", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "numberList", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "multipleList", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "scatterBgList", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "bg1", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "bg2", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "bg3", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "bg4", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "bg5", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "bg6", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "bg7", [_dec29], {
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

System.register("chunks:///_virtual/SpeedWinnerProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "c0638R9eeFPPb0C8p5Y1/j7", "SpeedWinnerProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SpeedWinnerGameEvent = exports('SpeedWinnerGameEvent', /*#__PURE__*/function (SpeedWinnerGameEvent) {
        SpeedWinnerGameEvent["ENTER_ROOM"] = "enterRoom";
        SpeedWinnerGameEvent["LEAVE_ROOM"] = "leaveRoom";
        SpeedWinnerGameEvent["UPDATE_CONFIG"] = "updateConfig";
        SpeedWinnerGameEvent["UPDATE_BETLIST"] = "updateBetList";
        SpeedWinnerGameEvent["CLOSE_BONUS"] = "closeBonus";
        SpeedWinnerGameEvent["SELECT_BET"] = "selectBet";
        SpeedWinnerGameEvent["START"] = "start";
        SpeedWinnerGameEvent["CLICK_ITEM"] = "clickItem";
        SpeedWinnerGameEvent["HIDEMASK"] = "hidemask";
        SpeedWinnerGameEvent["SHOWMASK"] = "showmask";
        SpeedWinnerGameEvent["ERROR"] = "errorReturn";
        SpeedWinnerGameEvent["SHOW_LIGHT"] = "showLight";
        SpeedWinnerGameEvent["NORMALONEEND"] = "normalOneEnd";
        SpeedWinnerGameEvent["FASTEND"] = "fastEnd";
        return SpeedWinnerGameEvent;
      }({}));

      /*
      SCATTER BonusSymbol = 0
      WILD BonusSymbol = 1
      MULTIPLE BonusSymbol = 2
      CAR BonusSymbol = 3
      WHEEL BonusSymbol = 4
      OILGUN BonusSymbol = 5
      GLOVE BonusSymbol = 6
      TOOL BonusSymbol = 7
      A BonusSymbol = 8
      K BonusSymbol = 9
      Q BonusSymbol = 10
      J BonusSymbol = 11
      TEN BonusSymbol = 12
      */

      // declare namespace SpeedWinnerProto {
      //     export interface result {
      //         FreeInfo;
      //         Res: prizeInfo[];
      //         prizeAmount;
      //         FreeCount: number;
      //     }

      //     export interface prizeInfo {
      //         ExtraOdd: number;
      //         PosMsg: number[];
      //         RewardMoney: number;
      //         RewardPos;
      //         RewardLines;
      //     }
      // }
      var SpeedWinnerProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(SpeedWinnerProxyMgr, _ProxyBase);
        function SpeedWinnerProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "SpeedWinnerGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolSlotSpeedWinner.bet, MainManager.instance.getConfigManager().ProtocolSlotSpeedWinner.info];
          _this.result = null;
          _this.betList = [0.1, 1, 5];
          _this.betMaxCount = 10;
          _this.betRate = 20;
          _this._curBetCount = 0;
          _this._curBetListIndex = 0;
          _this.freeTotalWin = 0;
          _this.a = 0;
          return _this;
        }
        var _proto = SpeedWinnerProxyMgr.prototype;
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(SpeedWinnerGameEvent.SELECT_BET);
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
            if (data.cmd == ConfigManager.ProtocolSlotSpeedWinner.bet) {
              this.emit(SpeedWinnerGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotSpeedWinner.info:
              {
                this.emit(SpeedWinnerGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotSpeedWinner.bet:
              {
                this.result = data.Data;
                if (this.result) {
                  this.result.prizeAmount = 0;
                  for (var i = 0; i < this.result.Res.length; i++) {
                    this.result.prizeAmount += this.result.Res[i].RewardMoney;
                    if (i == this.result.Res.length - 1) {
                      this.result.prizeAmount *= this.result.Res[i].ExtraOdd;
                    }
                  }
                }
                this.emit(SpeedWinnerGameEvent.START);
              }
          }
        };
        _createClass(SpeedWinnerProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return SpeedWinnerProxyMgr;
      }(ProxyBase);
      var SpeedWinnerProxy = exports('default', new SpeedWinnerProxyMgr("SpeedWinnerProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedWinnerRun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpeedWinnerItem.ts', './SpeedWinnerView.ts', './SPeedWinnerDef.ts', './SpeedWinnerProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, sp, instantiate, v3, UITransform, UIOpacity, Component, tween, SpeedWinnerItem, SpeedWinnerView, SPeedWinnerDef, SpeedWinnerProxy, SpeedWinnerGameEvent;
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
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
      tween = module.tween;
    }, function (module) {
      SpeedWinnerItem = module.SpeedWinnerItem;
    }, function (module) {
      SpeedWinnerView = module.SpeedWinnerView;
    }, function (module) {
      SPeedWinnerDef = module.SPeedWinnerDef;
    }, function (module) {
      SpeedWinnerProxy = module.default;
      SpeedWinnerGameEvent = module.SpeedWinnerGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "893e9tkX/BCgbivtq4KzOUs", "SpeedWinnerRun", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CardState = {
        NORMAL: 0,
        DELAY: 1,
        RUN: 2,
        RESULTFAST: 3,
        RESULTNORMAL: 4,
        END: 5,
        SHOWWIN: 6,
        SHOWNEXTWIN: 7
      }; //cc.director._scene
      var SpeedWinnerRun = exports('SpeedWinnerRun', (_dec = ccclass("SpeedWinnerRun"), _dec2 = menu("game/SpeedWinnerGame/SpeedWinnerRun"), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedWinnerRun, _Component);
        function SpeedWinnerRun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "parentNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_light", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "downLight", _descriptor4, _assertThisInitialized(_this));
          _this._winAniTime = 2.2;
          //获奖展示动画
          _this._winShowTime = 0;
          _this._winNextTime = 0.5;
          //二次中奖动画
          _this.runningCard = [];
          //每一竖图片的的集合
          _this._index = 0;
          _this._state = CardState.NORMAL;
          _this.moveStep = 100;
          //每帧移动步长
          _this.fixStep = [];
          _this.runType = "normal";
          _this.result = null;
          _this.isGetResult = false;
          _this.isToEnd = false;
          _this.isShowNextWin = false;
          _this.delayNum = 0;
          //当前已有三个scatter再次出现卡片时，需停顿3秒，展示动画
          _this.downTime = 0;
          //中奖后新卡片下落时间
          _this.RewardMoney = 0;
          _this.showLightIndex = 0;
          _this.multipleMoveList = [-306, -184, -62, 62, 184, 306];
          return _this;
        }
        var _proto = SpeedWinnerRun.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.initCard = function initCard(card, index) {
          var _this2 = this;
          if (card === void 0) {
            card = null;
          }
          this._index = index;
          if (card) {
            var startY = 315;
            var allLength = 0;
            for (var i = 0; i < 5; i++) {
              var node = instantiate(this.pre_card);
              this.parentNode.addChild(node);
              if (!card[i]) {
                var rand = Math.floor(Math.random() * 12);
                rand == 0 ? rand = 3 : rand == 1 ? rand = 4 : rand == 2 ? rand = 5 : "";
                var lengthRand = Math.random() > 0.6 ? 1 : Math.random() > 0.5 ? 2 : 3;
                card[i] = {
                  Sym: rand,
                  Length: lengthRand,
                  height: lengthRand * 126,
                  IsReward: false,
                  MultipleVal: 0
                };
              } else {
                card[i].height = card[i]["Length"] * 126;
              }
              node.setPosition(v3(this.multipleMoveList[this._index], startY - allLength - card[i].height / 2));
              allLength += card[i]["height"] / 2 + card[i].height / 2;
              var com = node.getComponent(SpeedWinnerItem);
              com["cardData"] = card[i];
              this.runningCard.push(com);
            }
            this.scheduleOnce(function () {
              for (var _i = 0; _i < _this2.runningCard.length; _i++) {
                var cardData = card[_i];
                _this2.runningCard[_i].setCard(cardData, "bottom", _this2._index, _i, false);
                if (cardData["Sym"] == 0 || cardData["Sym"] == 1) {
                  //this.runningCard[i].node.setSiblingIndex(100)
                  _this2.runningCard[_i].node.getComponent(UITransform).priority = 98;
                } else {
                  _this2.runningCard[_i].node.getComponent(UITransform).priority = 0;
                }
                if (cardData["Sym"] == 2) {
                  _this2.runningCard[_i].node.getComponent(SpeedWinnerItem).multipleMask.getComponent(UITransform).height = cardData["Length"] * 126;
                  _this2.runningCard[_i].node.getComponent(SpeedWinnerItem).multipleMask.node.active = true;
                  //this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleIcon.node.getComponent(cc.UIOpacity).opacity = 120
                } else {
                  _this2.runningCard[_i].node.getComponent(SpeedWinnerItem).multipleMask.node.active = false;
                  _this2.runningCard[_i].node.getComponent(SpeedWinnerItem).multipleIcon.node.getComponent(UIOpacity).opacity = 255;
                }
              }
            });
          }
        };
        _proto.addCard = function addCard(card, scatteNum, RewardMoney) {
          if (card === void 0) {
            card = null;
          }
          if (scatteNum >= 3) {
            this.delayNum = 1;
          } else {
            this.delayNum = 0;
          }
          var addCardLength = 0;
          //中奖后添加卡片
          this.isShowNextWin = false;
          this.RewardMoney = RewardMoney;
          if (card) {
            var isFirstAdd = true;
            for (var i = 0; i < card.length; i++) {
              if (this.runningCard[i]) {
                card.length - this.runningCard.length + i >= 0 ? this.runningCard[i]["cardData"]["IsReward"] = card[card.length - this.runningCard.length + i]["IsReward"] : "";
                this.runningCard[i]["cardData"]["isNew"] = false;
              } else {
                addCardLength += 1;
                var node = instantiate(this.pre_card);
                this.parentNode.addChild(node);
                var pushIndex = card.length - 1 - i;
                card[pushIndex].height = card[pushIndex]["Length"] * 126;
                var com = node.getComponent(SpeedWinnerItem);
                com["cardData"] = card[pushIndex];
                com["cardData"]["isNew"] = true;
                this.runningCard.unshift(com);
                this.runningCard[0].setCard(card[pushIndex], "bottom", this._index, 0, true);
                if (isFirstAdd) {
                  node.setPosition(v3(this.multipleMoveList[this._index], 315 + com["cardData"]["height"] / 2));
                  isFirstAdd = false;
                } else {
                  node.setPosition(v3(this.multipleMoveList[this._index], this.runningCard[1].node.getPosition().y + this.runningCard[1]["cardData"]["height"] / 2 + com["cardData"]["height"] / 2));
                }
              }
            }
            this.fixStep = [];
            for (var _i2 = 0; _i2 < this.runningCard.length; _i2++) {
              if (_i2 == 0) {
                this.fixStep.push(315 - this.runningCard[_i2].node.getComponent(SpeedWinnerItem)["cardData"].height / 2);
              }
              if (_i2 < this.runningCard.length - 1) {
                this.fixStep.push(this.fixStep[_i2] - this.runningCard[_i2].node.getComponent(SpeedWinnerItem)["cardData"].height / 2 - this.runningCard[_i2 + 1].node.getComponent(SpeedWinnerItem)["cardData"].height / 2);
              }
            }
            addCardLength < 2 ? this.downTime = 0.05 : addCardLength < 4 ? this.downTime = 0.1 : this.downTime = 0.15;
            this.setState(CardState.SHOWNEXTWIN);
          }
        };
        _proto.resetCard = function resetCard() {
          for (var i = 0; i < 5; i++) {
            if (!this.runningCard[i]) {
              var node = instantiate(this.pre_card);
              this.parentNode.addChild(node);
              var rand = Math.floor(Math.random() * 12);
              rand == 0 ? rand = 3 : rand == 1 ? rand = 4 : rand == 2 ? rand = 5 : "";
              var lengthRand = 1;
              var card = {
                Sym: rand,
                Length: lengthRand,
                height: lengthRand * 126,
                IsReward: false,
                MultipleVal: 0
              };
              var nodeY = this.runningCard[i - 1].node.getPosition().y - this.runningCard[i - 1].node.getComponent(SpeedWinnerItem)["cardData"].height / 2 - card.height / 2;
              node.setPosition(v3(this.multipleMoveList[this._index], nodeY));
              var com = node.getComponent(SpeedWinnerItem);
              com["cardData"] = card;
              this.runningCard.push(com);
              this.runningCard[i].setCard(card, "bottom", this._index, i, false);
            }
          }
        };
        _proto.multipleStop = function multipleStop() {
          for (var i = 0; i < this.runningCard.length; i++) {
            //删除缩放动画
            this.runningCard[i].multipleStop();
          }
        }
        //删除scatter或wild动画
        ;

        _proto.scatterAndWildStop = function scatterAndWildStop() {
          for (var i = 0; i < this.runningCard.length; i++) {
            //删除缩放动画
            this.runningCard[i].scatterAndWildStop(this.runningCard[i]["cardData"]);
          }
        };
        _proto.scatterWinAnimation = function scatterWinAnimation() {
          //scatter win动画
          for (var i = 0; i < this.runningCard.length; i++) {
            if (this.runningCard[i]["cardData"]["Sym"] == 0) {
              this.runningCard[i].scatterWinAnimation();
            }
          }
        };
        _proto.run = function run(type) {
          var _this3 = this;
          if (type === void 0) {
            type = "normal";
          }
          this.runType = type;
          if (this.runningCard.length < 5) {
            this.resetCard();
            this.scheduleOnce(function () {
              _this3.setState(CardState.RUN);
              //this.runType == 'normal' ? this.setState(CardState.RUN) : '';
            });
          } else {
            this.setState(CardState.RUN);
            //this.runType == 'normal' ? this.setState(CardState.RUN) : '';
          }
        };

        _proto.showWin = function showWin() {
          var _this4 = this;
          //第一次调用一定是中奖，后面会根据是否中奖在调用
          //遮照层要先出
          SpeedWinnerProxy.emit(SpeedWinnerGameEvent.SHOWMASK);
          this.setState(CardState.SHOWWIN);
          this.scheduleOnce(function () {
            for (var i = 0; i < _this4.runningCard.length; i++) {
              if (_this4.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["IsReward"] || _this4.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 0) {
                _this4.runningCard[i].node.getComponent(UITransform).priority = 100;
                _this4.runningCard[i].showWinRenderCard(_this4.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]);
              } else {
                _this4.runningCard[i].node.getComponent(UITransform).priority = 0;
              }
            }
          }, 0.3);

          //this.setState(CardState.SHOWWIN)
        };

        _proto.hideWin = function hideWin() {
          for (var i = 0; i < this.runningCard.length; i++) {
            this.runningCard[i].hideWinRenderCard();
            if (this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["IsReward"] || this.runningCard[i].node.getPosition().y < -315) {
              //this.parentNode.removeChild(this.runningCard[i].node);
              this.runningCard[i].node.removeFromParent();
              this.runningCard.splice(i, 1);
              SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symShrink);
              i--;
            }
          }
          this.scheduleOnce(function () {
            SpeedWinnerProxy.emit(SpeedWinnerGameEvent.HIDEMASK);
          });
        }
        //倍数获奖动画播放
        ;

        _proto.multipleWinAnimaton = function multipleWinAnimaton() {
          for (var i = 0; i < this.runningCard.length; i++) {
            if (this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 2) {
              this.runningCard[i].multipleWinAnimaton(this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]);
            }
          }
        }

        //获取倍数数据用于复制节点
        ;

        _proto.getMultipleData = function getMultipleData(index) {
          for (var i = 0; i < this.runningCard.length; i++) {
            if (this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 2) {
              var data = {
                MultipleVal: this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["MultipleVal"],
                Sym: this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["Sym"],
                Length: this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["Length"],
                x: this.multipleMoveList[index],
                y: this.runningCard[i].node.getPosition().y - 65
              };
              this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleMask.getComponent(UITransform).height = data["Length"] * 126;
              this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleMask.node.active = true;
              //this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleIcon.node.getComponent(cc.UIOpacity).opacity = 120
              this.node.parent.parent.parent.getComponent(SpeedWinnerView).showMultiple(data);
            } else {
              this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleMask.node.active = false;
              this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleIcon.node.getComponent(UIOpacity).opacity = 255;
            }
          }
        };
        _proto.randCard = function randCard(node, cardData, type, parentI, myI, end) {
          node.randCard(cardData, type, parentI, myI, end);
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.getLightStatue = function getLightStatue() {
          return this.node_light.active;
        };
        _proto.showLight = function showLight() {
          this.node_light.active = true;
        };
        _proto.showResult = function showResult(cardValue) {
          var _this5 = this;
          this.fixStep = [];
          for (var i = 0; i < 5; i++) {
            if (cardValue[i]) {
              cardValue[i].height = cardValue[i].Length * 126;
            } else {
              var rand = Math.floor(Math.random() * 12);
              rand == 0 ? rand = 3 : rand == 1 ? rand = 4 : rand == 2 ? rand = 5 : "";
              //let lengthRand = Math.random() > 0.6 ? 1 : Math.random() > 0.5 ? 2 : 3
              var lengthRand = 1;
              cardValue[i] = {
                Sym: rand,
                Length: lengthRand,
                height: lengthRand * 126,
                IsReward: false,
                MultipleVal: 0
              };
            }
          }
          this.scheduleOnce(function () {
            for (var _i3 = 0; _i3 < 5; _i3++) {
              if (_i3 == 0) {
                _this5.fixStep.push(315 - cardValue[_i3].height / 2);
              }
              if (_i3 < 4) {
                _this5.fixStep.push(_this5.fixStep[_i3] - cardValue[_i3].height / 2 - cardValue[_i3 + 1].height / 2);
              }
            }
            _this5.result = cardValue;
            _this5.isGetResult = true;
            //this.runType == 'fast' ? this.setState(CardState.RESULTFAST) : ''
          }, 0.1);
        };
        _proto.update = function update(dt) {
          var _this6 = this;
          switch (this._state) {
            //图片滚动
            case CardState.RUN:
              {
                this.moveStep = 100;
                var length = this.runningCard.length;
                if (this.runType == "normal") {
                  for (var i = 0; i < length; i++) {
                    var node = this.runningCard[i].node;
                    node.setPosition(this.multipleMoveList[this._index], node.getPosition().y - this.moveStep);
                    if (node.getPosition().y < -(this.runningCard[i]["cardData"]["height"] / 2 + 260)) {
                      //315
                      if (this.isGetResult && i == 4) {
                        //重新设置位置
                        var lastHeight = this.runningCard[0]["cardData"]["height"] / 2;
                        node.setPosition(this.multipleMoveList[this._index], this.runningCard[0].node.getPosition().y + lastHeight + this.result[i]["height"] / 2);
                        this.runningCard[i]["cardData"] = this.result[i];
                        this.randCard(this.runningCard[i], this.result[i], "bottom", this._index, i, true);
                        this.runType == "normal" ? this.setState(CardState.RESULTNORMAL) : this.setState(CardState.RESULTFAST);
                        return;
                      } else {
                        var rand = Math.floor(Math.random() * 12);
                        rand == 0 ? rand = 3 : rand == 1 ? rand = 4 : rand == 2 ? rand = 5 : "";
                        //let lengthRand = Math.floor(Math.random() * 3) + 1
                        var lengthRand = 1;
                        var cardData = {
                          Sym: rand,
                          Length: lengthRand,
                          height: lengthRand * 126,
                          IsReward: false,
                          MultipleVal: 0
                        };
                        //重新设置位置
                        //计算上一个位置存在一个先后顺序问题，即当前item已经移动，但lastIndex的位置还未移动
                        // let lastIndex = i == 4 ? 0 : (i + 1)
                        // if (this.runningCard[lastIndex]) {
                        //     //let lastHeight = this.runningCard[lastIndex]['cardData']['height'] / 2
                        //     //node.setPosition(this.multipleMoveList[this._index], this.runningCard[lastIndex].node.getPosition().y + lastHeight + cardData.height / 2);
                        //     this.runningCard[i]['cardData'] = cardData
                        //     //重新随机生成
                        //     this.randCard(this.runningCard[i], cardData, 'bottom', this._index, i, false);
                        // }
                        //通过高度计算
                        // node.setPosition(this.multipleMoveList[this._index], this.runningCard[i].node.getPosition().y + addHeight - cardData.height);
                        // this.runningCard[i]['cardData'] = cardData
                        // this.randCard(this.runningCard[i], cardData, 'bottom', this._index, i, false);

                        var lastIndex = i == 4 ? 0 : i + 1;
                        if (this.runningCard[lastIndex]) {
                          var _lastHeight = lastIndex == 0 ? this.runningCard[lastIndex]["cardData"]["height"] / 2 : -lengthRand * 35;
                          node.setPosition(this.multipleMoveList[this._index], this.runningCard[lastIndex].node.getPosition().y + _lastHeight + cardData.height / 2);
                          this.runningCard[i]["cardData"] = cardData;
                          //重新随机生成
                          this.randCard(this.runningCard[i], cardData, "bottom", this._index, i, false);
                        }
                      }
                    }
                  }
                } else if (this.runType == "fast" && this.isGetResult) {
                  this.setState(CardState.RESULTFAST);
                }
                break;
              }
            case CardState.RESULTFAST:
              {
                if (!this.isToEnd) {
                  var _length = this.runningCard.length;
                  for (var _i4 = 0; _i4 < _length; _i4++) {
                    var _node = this.runningCard[_i4].node;
                    //node.setPosition(this.multipleMoveList[this._index], node.getPosition().y - this.moveStep);
                    if (_node.getPosition().y < -315) {
                      var _cardData = this.result[_i4];

                      //重新设置位置
                      var _lastIndex = _i4 == 4 ? 0 : _i4 + 1;
                      if (this.runningCard[_lastIndex]) {
                        var _lastHeight2 = this.runningCard[_lastIndex]["cardData"]["height"] / 2;
                        if (_lastIndex == 0) {
                          _node.setPosition(this.multipleMoveList[this._index], this.runningCard[_lastIndex].node.getPosition().y + _lastHeight2 + _cardData["height"] / 2);
                        } else {
                          _node.setPosition(this.multipleMoveList[this._index], this.runningCard[_lastIndex].node.getPosition().y + _lastHeight2 + _cardData["height"] / 2 - 100);
                        }
                        //node.setPosition(this.multipleMoveList[this._index], this.runningCard[lastIndex].node.getPosition().y + lastHeight + cardData['height'] / 2 - 100);

                        this.runningCard[_i4]["cardData"] = _cardData;
                        //重新随机生成
                        this.randCard(this.runningCard[_i4], _cardData, "bottom", this._index, _i4, true);
                      }
                      if (_i4 == 0) {
                        this.isToEnd = true;
                        this.setState(CardState.END);
                      }
                    } else {
                      _node.setPosition(this.multipleMoveList[this._index], _node.getPosition().y - this.moveStep);
                    }
                  }
                }

                // if (!this.isToEnd) {
                //     let length = this.runningCard.length;
                //     for (let i = 0; i < length; i++) {
                //         let node = this.runningCard[i].node;
                //         node.setPosition(this.multipleMoveList[this._index], node.getPosition().y - this.moveStep);
                //         if (node.getPosition().y < -315) {
                //             let cardData = this.result[i]

                //             //重新设置位置
                //             let lastIndex = i == 4 ? 0 : (i + 1)
                //             if (this.runningCard[lastIndex]) {
                //                 let lastHeight = this.runningCard[lastIndex]['cardData']['height'] / 2
                //                 node.setPosition(this.multipleMoveList[this._index], this.runningCard[lastIndex].node.getPosition().y + lastHeight + cardData['height'] / 2);

                //                 this.runningCard[i]['cardData'] = cardData
                //                 //重新生成
                //                 this.randCard(this.runningCard[i], cardData, 'bottom', this._index, i, true);
                //             }
                //             if (i == 0) {
                //                 this.isToEnd = true
                //                 this.setState(CardState.END);
                //             }
                //         }
                //     }
                // }
                break;
              }
            case CardState.RESULTNORMAL:
              {
                this.moveStep -= 10;
                if (this.moveStep < 70) {
                  this.moveStep = 70;
                }
                for (var _i5 = 0; _i5 < this.runningCard.length; _i5++) {
                  var _node2 = this.runningCard[_i5].node;
                  if (_node2.getPosition().y < -280) {
                    var _cardData2 = this.result[_i5];
                    var _lastIndex2 = _i5 == 4 ? 0 : _i5 + 1;
                    if (this.runningCard[_lastIndex2]) {
                      var _lastHeight3 = this.runningCard[_lastIndex2]["cardData"]["height"] / 2;
                      _node2.setPosition(this.multipleMoveList[this._index], this.runningCard[_lastIndex2].node.getPosition().y + _lastHeight3 + _cardData2["height"] / 2 - this.moveStep);
                      this.runningCard[_i5]["cardData"] = _cardData2;
                      //重新生成
                      this.randCard(this.runningCard[_i5], _cardData2, "bottom", this._index, _i5, true);
                    }
                    if (_i5 == 0) {
                      this.isToEnd = true;
                      this.setState(CardState.END);
                    }
                  } else {
                    _node2.setPosition(this.multipleMoveList[this._index], _node2.getPosition().y - this.moveStep);
                  }
                }
                break;
              }
            case CardState.END:
              {
                this.isGetResult = false;
                this.isToEnd = false;
                this.moveStep = 100;
                var _length2 = this.runningCard.length;
                this.isShowNextWin = false;
                if (this.runType == "normal") {
                  var _loop = function _loop(_i6) {
                    var node = _this6.runningCard[_i6].node;
                    var toY = _this6.fixStep[_i6];
                    if (_i6 == _length2 - 1) {
                      SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.spinStop);
                    }
                    tween(node).to(0.05, {
                      position: v3(_this6.multipleMoveList[_this6._index], toY)
                    })
                    //.by(0.05, { position: cc.v3(0, 5) })
                    .call(function () {
                      if (_i6 == _length2 - 1) {
                        SpeedWinnerProxy.emit(SpeedWinnerGameEvent.NORMALONEEND, {
                          index: _this6._index
                        });
                      }
                    }).start();
                  };
                  for (var _i6 = 0; _i6 < _length2; _i6++) {
                    _loop(_i6);
                  }
                  //等全部都落下后在执行动画
                  this.scheduleOnce(function () {
                    _this6.node_light.active = false;
                    SpeedWinnerProxy.emit(SpeedWinnerGameEvent.SHOW_LIGHT, {
                      index: _this6._index + 1
                    });
                    for (var _i7 = 0; _i7 < _length2; _i7++) {
                      if (_this6.runningCard[_i7]["cardData"]["Sym"] == 2) {
                        _this6.runningCard[_i7].multipleAnimation();
                      }

                      //执行动画
                      if (_this6.runningCard[_i7]["cardData"]["Sym"] == 0 || _this6.runningCard[_i7]["cardData"]["Sym"] == 1) {
                        _this6.runningCard[_i7].node.getComponent(UITransform).priority = 98;
                        _this6.runningCard[_i7].scatterAndWildAnimation(_this6.runningCard[_i7]["cardData"]);
                      } else {
                        _this6.runningCard[_i7].node.getComponent(UITransform).priority = 0;
                      }
                    }
                  }, 0.1);
                } else {
                  SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.spinStopQuick);
                  var _loop2 = function _loop2(_i8) {
                    var node = _this6.runningCard[_i8].node;
                    var toY = _this6.fixStep[_i8];
                    tween(node).to(0.01, {
                      position: v3(_this6.multipleMoveList[_this6._index], toY)
                    }).call(function () {
                      _this6.scheduleOnce(function () {
                        if (_this6.runningCard[_i8]["cardData"]["Sym"] == 2) {
                          _this6.runningCard[_i8].multipleAnimation();
                        }
                        //执行动画
                        if (_this6.runningCard[_i8]["cardData"]["Sym"] === 0 || _this6.runningCard[_i8]["cardData"]["Sym"] === 1) {
                          _this6.runningCard[_i8].node.getComponent(UITransform).priority = 98;
                          _this6.runningCard[_i8].scatterAndWildAnimation(_this6.runningCard[_i8]["cardData"]);
                        } else {
                          _this6.runningCard[_i8].node.getComponent(UITransform).priority = 0;
                        }
                      }, 0.15);
                      if (_i8 == _length2 - 1) {
                        SpeedWinnerProxy.emit(SpeedWinnerGameEvent.FASTEND, {
                          index: _this6._index
                        });
                      }
                    }).start();
                  };
                  for (var _i8 = 0; _i8 < _length2; _i8++) {
                    _loop2(_i8);
                  }
                }
                this.setState(CardState.NORMAL);
                break;
              }
            case CardState.SHOWWIN:
              {
                this._winShowTime += dt;
                if (this._winShowTime >= this._winAniTime) {
                  this.setState(CardState.NORMAL);
                  this.hideWin();
                  this._winShowTime = 0;
                  this.delayNum = 0;
                }
                break;
              }
            case CardState.SHOWNEXTWIN:
              {
                if (this.delayNum > 0) {
                  this.delayNum -= dt;
                  var _loop3 = function _loop3(_i9) {
                    var node = _this6.runningCard[_i9].node;
                    var toY = _this6.fixStep[_i9];
                    if (node.getComponent(SpeedWinnerItem)["cardData"] && !node.getComponent(SpeedWinnerItem)["cardData"]["isNew"]) {
                      if (node.getPosition().y != toY) {
                        tween(node).to(_this6.downTime, {
                          position: v3(_this6.multipleMoveList[_this6._index], toY)
                        }).call(function () {
                          if (_this6.runningCard[_i9]["cardData"]["Sym"] == 2) {
                            _this6.runningCard[_i9].multipleAnimation();
                          }
                          if (node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 0 || node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 1) {
                            _this6.runningCard[_i9].node.getComponent(UITransform).priority = 97;
                          } else {
                            _this6.runningCard[_i9].node.getComponent(UITransform).priority = 0;
                          }
                        }).start();
                      }
                    }
                  };
                  for (var _i9 = 0; _i9 < this.runningCard.length; _i9++) {
                    _loop3(_i9);
                  }
                  if (!this.downLight.node.active) {
                    //期待光效
                    SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.heartbeatNoise);
                    this.downLight.node.active = true;
                    this.downLight.setAnimation(0, "animation", true);
                    this.scheduleOnce(function () {
                      //期待符号落下
                      SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.heartbeatSlowdrop);
                    }, this.downTime);
                  }
                  if (this.delayNum <= 0) {
                    var _loop4 = function _loop4(_i10) {
                      var node = _this6.runningCard[_i10].node;
                      var toY = _this6.fixStep[_i10];
                      if (node.getComponent(SpeedWinnerItem)["cardData"]["isNew"]) {
                        //this.scheduleOnce(() => {
                        tween(node).to(_this6.downTime, {
                          position: v3(_this6.multipleMoveList[_this6._index], toY)
                        }).by(0.02, {
                          position: v3(0, 10)
                        }).by(0.02, {
                          position: v3(0, -10)
                        }).by(0.02, {
                          position: v3(0, 5)
                        }).by(0.02, {
                          position: v3(0, -5)
                        }).call(function () {
                          if (_this6.runningCard[_i10]["cardData"]["Sym"] == 2) {
                            _this6.runningCard[_i10].multipleAnimation();
                          }
                          if (node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 0 || node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 1) {
                            _this6.runningCard[_i10].node.getComponent(UITransform).priority = 97;
                          } else {
                            _this6.runningCard[_i10].node.getComponent(UITransform).priority = 0;
                          }
                          // if (i == this.runningCard.length - 1) {
                          //     console.log(new Date(), 'end')
                          // }
                        }).start();
                        //}, this._index * 0.2)
                      } else {
                        if (node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 0 || node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 1) {
                          _this6.runningCard[_i10].node.getComponent(UITransform).priority = 97;
                        }
                      }
                    };
                    for (var _i10 = 0; _i10 < this.runningCard.length; _i10++) {
                      _loop4(_i10);
                    }
                    this.downLight.node.active = false;
                    //this.scheduleOnce(() => {
                    if (!this.isShowNextWin && this.RewardMoney > 0) {
                      this.isShowNextWin = true;
                      this.showWin();
                    } else {
                      this.setState(CardState.NORMAL);
                      this.hideWin();
                      this._winShowTime = 0;
                      this.delayNum = 0;
                    }
                    //}, 0.8)
                  }
                } else {
                  var _loop5 = function _loop5(_i11) {
                    var node = _this6.runningCard[_i11].node;
                    var toY = _this6.fixStep[_i11];
                    if (node.getPosition().y != toY) {
                      tween(node).to(_this6.downTime, {
                        position: v3(_this6.multipleMoveList[_this6._index], toY)
                      }).by(0.03, {
                        position: v3(0, 10)
                      }).by(0.03, {
                        position: v3(0, -10)
                      }).by(0.02, {
                        position: v3(0, 5)
                      }).by(0.02, {
                        position: v3(0, -5)
                      }).call(function () {
                        if (_this6.runningCard[_i11]["cardData"]["Sym"] == 2) {
                          _this6.runningCard[_i11].multipleAnimation();
                        }
                        if (node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 0 || node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 1) {
                          _this6.runningCard[_i11].node.getComponent(UITransform).priority = 97;
                        } else {
                          _this6.runningCard[_i11].node.getComponent(UITransform).priority = 0;
                        }
                      }).start();
                    } else {
                      if (node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 0 || node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 1) {
                        _this6.runningCard[_i11].node.getComponent(UITransform).priority = 97;
                      }
                    }
                  };
                  for (var _i11 = 0; _i11 < this.runningCard.length; _i11++) {
                    _loop5(_i11);
                  }
                  if (!this.isShowNextWin && this.RewardMoney > 0) {
                    this.isShowNextWin = true;
                    this.showWin();
                  } else {
                    this.setState(CardState.NORMAL);
                    this.hideWin();
                    this._winShowTime = 0;
                    this.delayNum = 0;
                  }
                }
                break;
              }
          }
        };
        return SpeedWinnerRun;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_card", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "parentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_light", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "downLight", [_dec6], {
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

System.register("chunks:///_virtual/SpeedWinnerScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './ViewManager.ts', './MainManager.ts', './SpeedWinnerProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, Common, ViewManager, MainManager, SpeedWinnerProxy;
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
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      SpeedWinnerProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "5d1c0uLZhxCT6b0N0x/Hp3s", "SpeedWinnerScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SpeedWinnerScene = exports('default', (_dec = ccclass("SpeedWinnerScene"), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedWinnerScene, _Component);
        function SpeedWinnerScene() {
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
        var _proto = SpeedWinnerScene.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.start = function start() {
          var node = instantiate(this.pre_room);
          this.node.addChild(node);
          if (!sys.isMobile) {
            node.setScale(v3(750 / 1334, 750 / 1334, 1));
          } else {
            node.angle = 90;
          }
        };
        _proto.init = function init() {
          // FortuneElephantDef.palyMusic(FortuneElephantDef.audio.BG);
        };
        _proto.reset = function reset() {};
        _proto.gameShow = function gameShow() {
          Common.closeWait();
          this.init();
        };
        _proto.disConnect = function disConnect() {
          // Common.showWait();
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.onEnable = function onEnable() {
          SpeedWinnerProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          // NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };

        _proto.onDisable = function onDisable() {
          SpeedWinnerProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return SpeedWinnerScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_room", [_dec2], {
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

System.register("chunks:///_virtual/SpeedWinnerTranRun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpeedWinnerItem.ts', './SpeedWinnerView.ts', './SpeedWinnerProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, v3, UITransform, UIOpacity, tween, Component, SpeedWinnerItem, SpeedWinnerView, SpeedWinnerProxy, SpeedWinnerGameEvent;
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
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      SpeedWinnerItem = module.SpeedWinnerItem;
    }, function (module) {
      SpeedWinnerView = module.SpeedWinnerView;
    }, function (module) {
      SpeedWinnerProxy = module.default;
      SpeedWinnerGameEvent = module.SpeedWinnerGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "15ea0GDzNlN8LhGToQtCGgb", "SpeedWinnerTranRun", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CardState = {
        NORMAL: 0,
        DELAY: 1,
        RUN: 2,
        RESULTFAST: 3,
        RESULTNORMAL: 4,
        END: 5,
        SHOWWIN: 6,
        SHOWNEXTWIN: 7
      };
      var SpeedWinnerTranRun = exports('SpeedWinnerTranRun', (_dec = ccclass("SpeedWinnerTranRun"), _dec2 = menu("game/SpeedWinnerGame/SpeedWinnerTranRun"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedWinnerTranRun, _Component);
        function SpeedWinnerTranRun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _this._winAniTime = 2.2;
          //获奖展示动画
          _this._winShowTime = 0;
          _this._winNextTime = 0.5;
          //二次中奖动画
          _this.runningCard = [];
          //每一竖图片的的集合
          _this._state = CardState.NORMAL;
          _this.moveStep = 80;
          //每帧移动步长
          _this.modelWidth = 124;
          _this.runType = "normal";
          _this.result = null;
          _this.isGetResult = false;
          _this.fixStep = [-184, -61.5, 61.5, 184];
          _this.isShowNextWin = false;
          _this.RewardMoney = 0;
          return _this;
        }
        var _proto = SpeedWinnerTranRun.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.initCard = function initCard(card) {
          var _this2 = this;
          if (card === void 0) {
            card = null;
          }
          if (card) {
            for (var i = 0; i < 4; i++) {
              var node = instantiate(this.pre_card);
              this.node.addChild(node);
              node.setPosition(v3(this.fixStep[i], 0));
              var com = node.getComponent(SpeedWinnerItem);
              com["cardData"] = card[i];
              this.runningCard.push(com);
            }
            this.scheduleOnce(function () {
              for (var _i = 0; _i < _this2.runningCard.length; _i++) {
                var cardData = card[_i];
                _this2.runningCard[_i].setCard(cardData, "top", 0, _i, false);
                if (cardData["Sym"] == 0 || cardData["Sym"] == 1) {
                  //this.runningCard[i].node.setSiblingIndex(100)
                  _this2.runningCard[_i].node.getComponent(UITransform).priority = 98;
                } else {
                  _this2.runningCard[_i].node.getComponent(UITransform).priority = 0;
                }
                if (cardData["Sym"] == 2) {
                  _this2.runningCard[_i].node.getComponent(SpeedWinnerItem).multipleMask.node.active = true;
                  //this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleIcon.node.getComponent(cc.UIOpacity).opacity = 120
                } else {
                  _this2.runningCard[_i].node.getComponent(SpeedWinnerItem).multipleIcon.node.getComponent(UIOpacity).opacity = 255;
                  _this2.runningCard[_i].node.getComponent(SpeedWinnerItem).multipleMask.node.active = false;
                }
              }
            });
          }
        };
        _proto.addCard = function addCard(card, scatteNum, RewardMoney) {
          var _this3 = this;
          if (card === void 0) {
            card = null;
          }
          //中奖后添加卡片
          this.isShowNextWin = false;
          this.RewardMoney = RewardMoney;
          this.scheduleOnce(function () {
            if (card && _this3.runningCard.length < 4) {
              var isFirstAdd = true;
              var _loop = function _loop(i) {
                if (_this3.runningCard[i]) {
                  _this3.runningCard[i]["cardData"]["IsReward"] = card[i]["IsReward"];
                } else {
                  var node = instantiate(_this3.pre_card);
                  _this3.node.addChild(node);
                  var com = node.getComponent(SpeedWinnerItem);
                  com["cardData"] = card[i];
                  _this3.runningCard.push(com);
                  _this3.runningCard[i].setCard(card[i], "top", 0, i, true);
                  if (isFirstAdd) {
                    node.setPosition(v3(186 + _this3.modelWidth / 2, 0));
                    isFirstAdd = false;
                  } else {
                    node.setPosition(v3(_this3.runningCard[i - 1].node.getPosition().x + _this3.modelWidth, 0));
                  }
                  _this3.scheduleOnce(function () {
                    if (com["cardData"]["Sym"] == 0 || com["cardData"]["Sym"] == 1) {
                      //this.runningCard[0].node.setSiblingIndex(100)
                      _this3.runningCard[0].node.getComponent(UITransform).priority = 97;
                    } else {
                      _this3.runningCard[i].node.getComponent(UITransform).priority = 0;
                    }
                  });
                }
              };
              for (var i = 0; i < card.length; i++) {
                _loop(i);
              }
            } else if (card && _this3.runningCard.length == 4) {
              for (var _i2 = 0; _i2 < card.length; _i2++) {
                _this3.runningCard[_i2]["cardData"]["IsReward"] = card[_i2]["IsReward"];
              }
            }
            _this3.setState(CardState.SHOWNEXTWIN);
            if (_this3.runningCard[3].node.getPosition().x != 186) {
              for (var _i3 = 0; _i3 < _this3.runningCard.length; _i3++) {
                tween(_this3.runningCard[_i3].node).to(0.1, {
                  position: v3(_this3.fixStep[_i3], _this3.runningCard[_i3].node.position.y)
                }).start();
              }
            }
          }, scatteNum >= 3 ? 1 : 0);
        };
        _proto.run = function run(type) {
          if (type === void 0) {
            type = "normal";
          }
          this.runType = type;
          this.runType == "normal" ? this.setState(CardState.RUN) : "";
          //this.setState(CardState.RUN);
        };

        _proto.showWin = function showWin() {
          var _this4 = this;
          this.scheduleOnce(function () {
            for (var i = 0; i < _this4.runningCard.length; i++) {
              if (_this4.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["IsReward"] || _this4.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 0) {
                _this4.runningCard[i].node.getComponent(UITransform).priority = 100;
                _this4.runningCard[i].showWinRenderCard(_this4.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]);
              } else {
                _this4.runningCard[i].node.getComponent(UITransform).priority = 0;
              }
            }
          }, 0.3);
          this.setState(CardState.SHOWWIN);
        };
        _proto.hideWin = function hideWin() {
          for (var i = 0; i < this.runningCard.length; i++) {
            this.runningCard[i].hideWinRenderCard();
            if (this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["IsReward"]) {
              //this.node.removeChild(this.runningCard[i].node);
              this.runningCard[i].node.removeFromParent();
              this.runningCard.splice(i, 1);
              i--;
              SpeedWinnerProxy.emit(SpeedWinnerGameEvent.HIDEMASK);
            }
          }
        }

        //倍数获奖动画播放
        ;

        _proto.multipleWinAnimaton = function multipleWinAnimaton() {
          for (var i = 0; i < this.runningCard.length; i++) {
            if (this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 2) {
              this.runningCard[i].multipleWinAnimaton(this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]);
            }
          }
        }

        //删除倍数动画
        ;

        _proto.multipleStop = function multipleStop() {
          for (var i = 0; i < this.runningCard.length; i++) {
            //删除缩放动画
            this.runningCard[i].multipleStop();
          }
        }

        //删除scatter或wild动画
        ;

        _proto.scatterAndWildStop = function scatterAndWildStop() {
          for (var i = 0; i < this.runningCard.length; i++) {
            //删除缩放动画
            this.runningCard[i].scatterAndWildStop(this.runningCard[i]["cardData"]);
          }
        };
        _proto.scatterWinAnimation = function scatterWinAnimation() {
          //scatter win动画
          for (var i = 0; i < this.runningCard.length; i++) {
            if (this.runningCard[i]["cardData"]["Sym"] == 0) {
              this.runningCard[i].scatterWinAnimation();
            }
          }
        };
        _proto.getMultipleData = function getMultipleData() {
          for (var i = 0; i < this.runningCard.length; i++) {
            if (this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["Sym"] == 2) {
              var data = {
                MultipleVal: this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["MultipleVal"],
                Sym: this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["Sym"],
                Length: this.runningCard[i].node.getComponent(SpeedWinnerItem)["cardData"]["Length"],
                x: this.runningCard[i].node.getPosition().x,
                y: 320
              };
              this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleMask.node.active = true;
              //this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleIcon.node.getComponent(cc.UIOpacity).opacity = 120
              this.node.parent.parent.parent.getComponent(SpeedWinnerView).showMultiple(data);
            } else {
              this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleIcon.node.getComponent(UIOpacity).opacity = 255;
              this.runningCard[i].node.getComponent(SpeedWinnerItem).multipleMask.node.active = false;
            }
          }
        };
        _proto.randCard = function randCard(node, cardData, type, parentI, myI, end) {
          node.randCard(cardData, type, parentI, myI, end);
        };
        _proto.setState = function setState(state) {
          this._state = state;
        }

        //将某一竖的开奖结果赋值给this.result执行CardState.RESULT（调用resultCard方法）
        ;

        _proto.showResult = function showResult(cardValue) {
          this.result = cardValue;
          this.isGetResult = true;
          this.runType == "fast" ? this.setState(CardState.RESULTFAST) : "";
        };
        _proto.update = function update(dt) {
          var _this5 = this;
          switch (this._state) {
            //图片滚动
            case CardState.RUN:
              {
                var length = this.runningCard.length;
                for (var i = 0; i < length; i++) {
                  var node = this.runningCard[i].node;
                  node.setPosition(node.getPosition().x - this.moveStep, 0);
                  if (node.getPosition().x <= -(this.modelWidth / 2 + this.fixStep[3])) {
                    if (this.isGetResult && i == 3) {
                      node.setPosition(this.fixStep[3], 0);
                      this.randCard(this.runningCard[i], this.result[i], "top", 0, i, true);
                      this.runningCard[i]["cardData"] = this.result[i];
                      this.runType == "normal" ? this.setState(CardState.RESULTNORMAL) : this.setState(CardState.RESULTFAST);
                      return;
                    } else {
                      var rand = Math.floor(Math.random() * 12);
                      rand == 0 ? rand = 3 : rand == 1 ? rand = 4 : rand == 2 ? rand = 5 : "";
                      var cardData = {
                        Sym: rand,
                        Length: 1,
                        IsReward: false,
                        MultipleVal: 0
                      };
                      this.runningCard[i]["cardData"] = cardData;
                      // //重新设置位置
                      // node.setPosition(this.modelWidth / 2 + this.fixStep[3], 0);
                      node.setPosition(i == 0 || i == 2 ? 40 + this.fixStep[3] : this.fixStep[3], 0);

                      //重新随机生成
                      this.randCard(this.runningCard[i], cardData, "top", 0, i, false);
                    }
                  }
                }
                break;
              }
            case CardState.RESULTFAST:
              {
                var _length = this.runningCard.length;
                for (var _i4 = 0; _i4 < _length; _i4++) {
                  var _node = this.runningCard[_i4].node;
                  if (_node.getPosition().x < -(this.modelWidth / 2 + this.fixStep[3])) {
                    var _cardData = {};
                    if (this.result && this.result[_i4]) {
                      _cardData = this.result[_i4];
                      this.runningCard[_i4]["cardData"] = _cardData;
                    }
                    //node.setPosition(this.modelWidth / 2 + this.fixStep[3], 0);
                    _node.setPosition(_i4 == 0 || _i4 == 2 ? 40 + this.fixStep[3] : this.fixStep[3], 0);
                    //重新生成
                    this.randCard(this.runningCard[_i4], _cardData, "top", 0, _i4, true);
                    if (_i4 == 3 && _node.getPosition().x >= this.fixStep[3]) {
                      this.setState(CardState.END);
                    }
                  } else {
                    _node.setPosition(_node.getPosition().x - this.moveStep, 0);
                  }
                }
                break;
              }
            case CardState.RESULTNORMAL:
              {
                this.moveStep -= 70;
                if (this.moveStep < 70) {
                  this.moveStep = 70;
                }
                var _length2 = this.runningCard.length;
                for (var _i5 = 0; _i5 < _length2; _i5++) {
                  var _node2 = this.runningCard[_i5].node;
                  if (_node2.getPosition().x < -(this.modelWidth / 2 + this.fixStep[3])) {
                    var _cardData2 = {};
                    if (this.result && this.result[_i5]) {
                      _cardData2 = this.result[_i5];
                      this.runningCard[_i5]["cardData"] = _cardData2;
                    }
                    //node.setPosition(this.fixStep[3], 0);
                    _node2.setPosition(_i5 == 0 ? this.fixStep[3] - 40 : this.fixStep[3], 0);
                    //重新生成
                    this.randCard(this.runningCard[_i5], _cardData2, "top", 0, _i5, true);
                    if (_i5 == 3 && _node2.getPosition().x >= this.fixStep[3]) {
                      this.setState(CardState.END);
                    }
                  } else {
                    _node2.setPosition(_node2.getPosition().x - this.moveStep, 0);
                  }
                }
                break;
              }
            case CardState.END:
              {
                this.isGetResult = false;
                this.moveStep = 80;
                var _length3 = this.runningCard.length;
                if (this.runType == "normal") {
                  for (var _i6 = 0; _i6 < _length3; _i6++) {
                    var _node3 = this.runningCard[_i6].node;
                    var toX = this.fixStep[_i6] - 20;
                    tween(_node3).to(0.1, {
                      position: v3(toX, 0)
                    }).by(0.1, {
                      position: v3(20, 0)
                    }).start();
                  }
                  //等全部都落下后在执行动画
                  this.scheduleOnce(function () {
                    var _loop2 = function _loop2(_i7) {
                      if (_this5.runningCard[_i7]["cardData"]["Sym"] == 2) {
                        _this5.runningCard[_i7].multipleAnimation();
                      }
                      _this5.scheduleOnce(function () {
                        if (_this5.runningCard[_i7]["cardData"]["Sym"] == 0 || _this5.runningCard[_i7]["cardData"]["Sym"] == 1) {
                          _this5.runningCard[_i7].node.getComponent(UITransform).priority = 98;
                          _this5.runningCard[_i7].scatterAndWildAnimation(_this5.runningCard[_i7]["cardData"]);
                        } else {
                          _this5.runningCard[_i7].node.getComponent(UITransform).priority = 0;
                        }
                      });
                    };
                    for (var _i7 = 0; _i7 < _length3; _i7++) {
                      _loop2(_i7);
                    }
                  }, 1);
                } else {
                  var _loop3 = function _loop3(_i8) {
                    var node = _this5.runningCard[_i8].node;
                    tween(node).to(0.01, {
                      position: v3(_this5.fixStep[_i8], 0)
                    }).call(function () {
                      _this5.scheduleOnce(function () {
                        if (_this5.runningCard[_i8]["cardData"]["Sym"] == 2) {
                          _this5.runningCard[_i8].multipleAnimation();
                        }
                        _this5.scheduleOnce(function () {
                          if (_this5.runningCard[_i8]["cardData"]["Sym"] == 0 || _this5.runningCard[_i8]["cardData"]["Sym"] == 1) {
                            //this.runningCard[i].node.setSiblingIndex(100)
                            _this5.runningCard[_i8].node.getComponent(UITransform).priority = 98;
                            _this5.runningCard[_i8].scatterAndWildAnimation(_this5.runningCard[_i8]["cardData"]);
                          } else {
                            _this5.runningCard[_i8].node.getComponent(UITransform).priority = 0;
                          }
                        });
                      }, 0.1);
                    }).start();
                  };
                  for (var _i8 = 0; _i8 < _length3; _i8++) {
                    _loop3(_i8);
                  }
                }
                this.setState(CardState.NORMAL);
                break;
              }
            case CardState.SHOWWIN:
              {
                this._winShowTime += dt;
                if (this._winShowTime >= this._winAniTime) {
                  this.setState(CardState.NORMAL);
                  this.hideWin();
                  this._winShowTime = 0;
                }
                break;
              }
            case CardState.SHOWNEXTWIN:
              {
                var _loop4 = function _loop4(_i9) {
                  var node = _this5.runningCard[_i9].node;
                  var toX = _this5.fixStep[_i9];
                  tween(node).to(0.1, {
                    position: v3(toX, node.position.y)
                  }).call(function () {
                    if (_this5.runningCard[_i9]["cardData"]["Sym"] == 2) {
                      _this5.runningCard[_i9].multipleAnimation();
                    }
                  }).start();
                };
                for (var _i9 = 0; _i9 < this.runningCard.length; _i9++) {
                  _loop4(_i9);
                }
                if (!this.isShowNextWin) {
                  this.isShowNextWin = true;
                  this.showWin();
                } else {
                  this.setState(CardState.NORMAL);
                  this.hideWin();
                  this._winShowTime = 0;
                }
                break;
              }
          }
        };
        return SpeedWinnerTranRun;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_card", [_dec3], {
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

System.register("chunks:///_virtual/SpeedWinnerView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Common.ts', './SpeedWinnerProxy.ts', './ProxyMgr.ts', './ViewManager.ts', './FortuneHistory.ts', './FortuneRank.ts', './DataManager.ts', './ScrollNumLabel.ts', './FortuneSetBase.ts', './FortuneSetAuto.ts', './MainManager.ts', './NetManager.ts', './SpeedWinnerRun.ts', './SpeedWinnerTranRun.ts', './SpeedWinnerItem.ts', './SPeedWinnerDef.ts', './AddSpineEffect.ts', './AudioManager.ts', './SPeedWinnerWindow.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, SpriteFrame, sp, Label, instantiate, v3, tween, UIOpacity, sys, Vec3, UITransform, Tween, Sprite, color, Color, Component, i18n, Common, SpeedWinnerProxy, SpeedWinnerGameEvent, ProxyMgr, ViewManager, FortuneHistory, FortuneRank, DataManager, UserKey, ScrollNumLabel, FortuneSetBase, FortuneSetAuto, MainManager, NetManager, SpeedWinnerRun, SpeedWinnerTranRun, SpeedWinnerItem, SPeedWinnerDef, AddSpineEffect, AudioManager, SPeedWinnerWindow;
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
      v3 = module.v3;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      sys = module.sys;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Tween = module.Tween;
      Sprite = module.Sprite;
      color = module.color;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      SpeedWinnerProxy = module.default;
      SpeedWinnerGameEvent = module.SpeedWinnerGameEvent;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      ViewManager = module.default;
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
      FortuneSetBase = module.default;
    }, function (module) {
      FortuneSetAuto = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      SpeedWinnerRun = module.SpeedWinnerRun;
    }, function (module) {
      SpeedWinnerTranRun = module.SpeedWinnerTranRun;
    }, function (module) {
      SpeedWinnerItem = module.SpeedWinnerItem;
    }, function (module) {
      SPeedWinnerDef = module.SPeedWinnerDef;
    }, function (module) {
      AddSpineEffect = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      SPeedWinnerWindow = module.SPeedWinnerWindow;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _descriptor66, _descriptor67, _descriptor68;
      cclegacy._RF.push({}, "ea0ddd14ORJZ5TKx1caimUs", "SpeedWinnerView", undefined);
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
        BIG_WIN: 5,
        FREE_WIN: 6,
        SHOWNEXT: 7,
        FREEADD: 8,
        WAIT: 9
      };
      var GETDATA_TIME = 0.3;
      var STOP_TIME = 1;
      var RUNNING_TIME = 0.6;
      var BIG_WIN_TIME1 = 8;
      var BIG_WIN_TIME2 = 10;
      var BIG_WIN_TIME3 = 12;
      var FREE_WIN_TIME = 5;
      var SpeedWinnerView = exports('SpeedWinnerView', (_dec = ccclass("SpeedWinnerView"), _dec2 = menu("game/SpeedWinnerGame/SpeedWinnerView"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(sp.Skeleton), _dec13 = property(sp.Skeleton), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(sp.Skeleton), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(sp.Skeleton), _dec24 = property(Label), _dec25 = property(Label), _dec26 = property(ScrollNumLabel), _dec27 = property(Label), _dec28 = property(sp.Skeleton), _dec29 = property(sp.Skeleton), _dec30 = property(SpriteFrame), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(ScrollNumLabel), _dec36 = property(Label), _dec37 = property(sp.Skeleton), _dec38 = property(Label), _dec39 = property(sp.Skeleton), _dec40 = property(sp.Skeleton), _dec41 = property(SpeedWinnerRun), _dec42 = property(SpeedWinnerTranRun), _dec43 = property(Label), _dec44 = property(Node), _dec45 = property(Label), _dec46 = property(Node), _dec47 = property(Node), _dec48 = property(sp.Skeleton), _dec49 = property(Node), _dec50 = property(sp.Skeleton), _dec51 = property(Node), _dec52 = property(sp.Skeleton), _dec53 = property(ScrollNumLabel), _dec54 = property(sp.Skeleton), _dec55 = property(Label), _dec56 = property(Node), _dec57 = property(Node), _dec58 = property(sp.Skeleton), _dec59 = property(ScrollNumLabel), _dec60 = property(Node), _dec61 = property(Node), _dec62 = property(ScrollNumLabel), _dec63 = property(Node), _dec64 = property(Label), _dec65 = property(Label), _dec66 = property(ScrollNumLabel), _dec67 = property(Label), _dec68 = property(Node), _dec69 = property(Node), _dec70 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedWinnerView, _Component);
        function SpeedWinnerView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_windowItem", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moreBtn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "windowMask", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "windowMask1", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "windowMask2", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalBg", _descriptor8, _assertThisInitialized(_this));
          //普通模式背景图
          _initializerDefineProperty(_this, "freeBg", _descriptor9, _assertThisInitialized(_this));
          //免费模式背景图
          _initializerDefineProperty(_this, "topLight", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomLight", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topBg", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "midBg", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "botBg", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "botFreeBg", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lightBox", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleBox", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleTotal", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleNum", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "copyMultipleNum", _descriptor20, _assertThisInitialized(_this));
          //multipleNum倍数动画使用，层级问题处理
          _initializerDefineProperty(_this, "multipleSpine", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "top_totalNum", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_quick", _descriptor26, _assertThisInitialized(_this));
          //普通/快速切换
          _initializerDefineProperty(_this, "notice_parent", _descriptor27, _assertThisInitialized(_this));
          //中奖头部动画
          _initializerDefineProperty(_this, "notice_frames", _descriptor28, _assertThisInitialized(_this));
          //随机公告
          _initializerDefineProperty(_this, "notice_normal_bg", _descriptor29, _assertThisInitialized(_this));
          //公告位置父节点
          _initializerDefineProperty(_this, "notice_bg", _descriptor30, _assertThisInitialized(_this));
          //公告位置父节点
          _initializerDefineProperty(_this, "notice_title", _descriptor31, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "notice_win", _descriptor32, _assertThisInitialized(_this));
          //公告中奖金额父节点
          _initializerDefineProperty(_this, "notice_win_txt", _descriptor33, _assertThisInitialized(_this));
          //公告中奖总金额
          _initializerDefineProperty(_this, "notice_topWin", _descriptor34, _assertThisInitialized(_this));
          //中奖头部效果
          _initializerDefineProperty(_this, "notice_topWinBg", _descriptor35, _assertThisInitialized(_this));
          //中奖头部动画
          _initializerDefineProperty(_this, "notice_botWin", _descriptor36, _assertThisInitialized(_this));
          //中奖底部金额
          _initializerDefineProperty(_this, "notice_botWin_boom", _descriptor37, _assertThisInitialized(_this));
          //中奖底部金额动画
          _initializerDefineProperty(_this, "turn_start", _descriptor38, _assertThisInitialized(_this));
          //开始按钮
          _initializerDefineProperty(_this, "turn_aniLines", _descriptor39, _assertThisInitialized(_this));
          //转盘每一竖
          _initializerDefineProperty(_this, "turn_aniTran", _descriptor40, _assertThisInitialized(_this));
          //转盘横线
          _initializerDefineProperty(_this, "turn_auto_leftCount", _descriptor41, _assertThisInitialized(_this));
          //剩余自动模式
          _initializerDefineProperty(_this, "free_dialog", _descriptor42, _assertThisInitialized(_this));
          //购买免费弹框
          _initializerDefineProperty(_this, "free_num", _descriptor43, _assertThisInitialized(_this));
          //购买免费弹框数值
          _initializerDefineProperty(_this, "free_buy", _descriptor44, _assertThisInitialized(_this));
          //购买免费弹框按钮
          _initializerDefineProperty(_this, "free_dialog_cancel", _descriptor45, _assertThisInitialized(_this));
          //取消免费弹框
          _initializerDefineProperty(_this, "free_dialog_cancel_spine", _descriptor46, _assertThisInitialized(_this));
          //取消免费弹框
          _initializerDefineProperty(_this, "free_dialog_sure", _descriptor47, _assertThisInitialized(_this));
          //取消免费弹框
          _initializerDefineProperty(_this, "free_dialog_sure_spine", _descriptor48, _assertThisInitialized(_this));
          //取消免费弹框
          _initializerDefineProperty(_this, "big_winBg", _descriptor49, _assertThisInitialized(_this));
          //大额中奖
          _initializerDefineProperty(_this, "big_win", _descriptor50, _assertThisInitialized(_this));
          //大额中奖动画
          _initializerDefineProperty(_this, "big_win_txt", _descriptor51, _assertThisInitialized(_this));
          //大额中奖金额
          _initializerDefineProperty(_this, "free_start", _descriptor52, _assertThisInitialized(_this));
          //免费模式加载页
          _initializerDefineProperty(_this, "free_start_time", _descriptor53, _assertThisInitialized(_this));
          //免费模式次数
          _initializerDefineProperty(_this, "free_start_font", _descriptor54, _assertThisInitialized(_this));
          //免费模式文字
          _initializerDefineProperty(_this, "free_startBtn", _descriptor55, _assertThisInitialized(_this));
          //免费模式加载页按钮
          _initializerDefineProperty(_this, "free_win", _descriptor56, _assertThisInitialized(_this));
          //免费模式赢得总金额页面
          _initializerDefineProperty(_this, "free_winTxt", _descriptor57, _assertThisInitialized(_this));
          //免费模式赢得金额
          _initializerDefineProperty(_this, "free_winBtn", _descriptor58, _assertThisInitialized(_this));
          //免费模式赢得金额返回按钮
          _initializerDefineProperty(_this, "free_bottom", _descriptor59, _assertThisInitialized(_this));
          //免费模式底部
          _initializerDefineProperty(_this, "free_bottom_time", _descriptor60, _assertThisInitialized(_this));
          //免费模式底部次数
          _initializerDefineProperty(_this, "free_add", _descriptor61, _assertThisInitialized(_this));
          //免费模式增加免费次数背景
          _initializerDefineProperty(_this, "free_add_time", _descriptor62, _assertThisInitialized(_this));
          //免费模式增加免费次数
          _initializerDefineProperty(_this, "txt_betFree", _descriptor63, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_winFree", _descriptor64, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_goldFree", _descriptor65, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tranRunMask", _descriptor66, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runMask", _descriptor67, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lightMask", _descriptor68, _assertThisInitialized(_this));
          //光效对应遮照层
          _this._errCount = 0;
          _this._window = null;
          _this._isLock = true;
          _this._autoTimes = 0;
          _this._auto = false;
          _this._bet = 2000;
          _this._isMinBet = true;
          _this._runDelay = 0.1;
          //转盘滚动延迟
          _this._state = RunState.NORMAL;
          _this._runTime = 0;
          _this._current_result = null;
          _this._current_resultIndex = 0;
          _this._total_multiple = 0;
          _this._current_round_multiple = 0;
          _this._scatteNum = 0;
          _this._bottom_result = [];
          _this._top_result = [];
          _this._noticeIndex = 0;
          _this._noticeDelay = 1;
          _this._win_totalMoney = 0;
          _this._isFree = false;
          _this._free_lock = false;
          _this._free_timeLeft = 0;
          //免费倒计时(免费加载页倒计时 10s自动进入到下个页面)
          _this._free_count = 0;
          _this.showLightIndex = 0;
          _this._hasChangeSpeed = false;
          //进入免费模式只能是普通速度，免费模式完成后，恢复之前速度模式
          _this._audioId = 0;
          _this._isEndBigWin = false;
          // 是否提前结束大奖背景
          _this._notice_win_audioId = 0;
          _this._isWinByMultiple = false;
          return _this;
        }
        var _proto = SpeedWinnerView.prototype;
        //是否有倍数
        /*
        priority失效
        */
        _proto.start = function start() {
          var _this2 = this;
          this._init();
          this.updateGoldData();
          this.updateSetData();
          this.initEvent();
          this.checkDownOrUpBet();
          var node = instantiate(this.prefab_windowItem);
          this.node.addChild(node);
          this._window = node.getComponent(SPeedWinnerWindow);
          node.active = false;

          //免费结算页面
          this.free_win.node.on(Node.EventType.TOUCH_END, function () {
            if (!_this2.free_winBtn.active) {
              _this2.free_winTxt.reset(SpeedWinnerProxy.freeTotalWin);
              _this2.free_winBtn.setScale(v3(0.2, 0.2, 1));
              _this2.free_winBtn.active = true;
              tween(_this2.free_winBtn).to(0.1, {
                scale: v3(1, 1, 1)
              }).start();
            }
          });
          //关闭大奖页面
          this.big_winBg.on(Node.EventType.TOUCH_END, function () {
            if (!_this2._isEndBigWin) {
              AudioManager.instance.stopSound(_this2._audioId);
              _this2.big_win_txt.reset(SpeedWinnerProxy.result.prizeAmount);
              _this2._runTime = 5;
              SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.bgm_bigwin_end);
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
            } else {
              _this2.hideBigWin();
            }
          });
          this.windowMask.on(Node.EventType.TOUCH_END, function () {
            _this2.hideWindow();
          });
          this.windowMask1.on(Node.EventType.TOUCH_END, function () {
            _this2.hideWindow();
          });
          this.windowMask2.on(Node.EventType.TOUCH_END, function () {
            _this2.hideWindow();
          });
          this.turn_start.node.on(Node.EventType.MOUSE_ENTER, function () {
            if (_this2._auto) {
              _this2.turn_start.getComponent(AddSpineEffect).animation = "push2";
            } else {
              _this2.turn_start.getComponent(AddSpineEffect).animation = "push1";
            }
          });
        };
        _proto.update = function update(dt) {
          if (this._free_lock) {
            this._free_timeLeft -= dt;
            if (this._free_timeLeft <= 0 && !this.free_win.node.active) {
              //从免费模式首页进入到游戏
              this.onClickEnterFreeScreen();
            } else if (this._free_timeLeft <= 0 && this.free_win.node.active) {
              //从免费模式结束页进入到普通模式
              this.onClickEnterNormalScreen();
            }
          }
          this.updateNotice(dt);
          switch (this._state) {
            case RunState.START:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  //接口延迟处理
                  if (SpeedWinnerProxy.result) {
                    this._current_result = SpeedWinnerProxy.result;
                    this.changeState(RunState.RUNNING);
                  } else {
                    this._runTime = RUNNING_TIME;
                    this._errCount++;
                    if (this._errCount > 3) {
                      this.sendBet(false);
                    }
                  }
                }
                break;
              }
            case RunState.RUNNING:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this._runTime = STOP_TIME;
                  this.changeState(RunState.STOP);
                }
                break;
              }
            case RunState.STOP:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this._runTime = GETDATA_TIME;
                  this.changeState(RunState.NORMAL);
                }
                break;
              }
            case RunState.BIG_WIN:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  AudioManager.instance.stopAllEffect();
                  this._isEndBigWin = false;
                  this.resetTurnAniLines();
                  this.winTotalMoney();
                  this.startGameAni(false);
                  this.changeBtnActive(true);
                  this.clear();
                  this.changeState(RunState.NORMAL);
                }
                break;
              }
            case RunState.NORMAL:
              {
                if (this._auto || this._isFree) {
                  this.preStart();
                }
                break;
              }
            case RunState.WAIT:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.changeState(RunState.NORMAL);
                }
                break;
              }
          }
        };
        _proto.changeState = function changeState(state) {
          var _this3 = this;
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
                break;
              }
            case RunState.STOP:
              {
                this.clickStop();
                break;
              }
            case RunState.BIG_WIN:
              {
                this._state = RunState.BIG_WIN;
                this.big_winBg.active = true;
                this.big_win.node.active = true;
                this._runTime = BIG_WIN_TIME1;
                var odd = this._win_totalMoney / this._bet;
                var aniname = "";
                if (odd >= 20 && odd < 30) {
                  aniname = "bigwin_";
                  this.big_win_txt.stepCount = BIG_WIN_TIME1 * 30;
                  this.big_win.setAnimation(0, aniname + "intro", false);
                }
                if (odd >= 30 && odd < 50) {
                  aniname = "megawin_";
                  this._runTime = BIG_WIN_TIME2;
                  this.big_win_txt.stepCount = BIG_WIN_TIME2 * 30;
                  this.big_win.setAnimation(0, aniname + "intro", false);
                }
                if (odd >= 50) {
                  aniname = "superwin_";
                  this._runTime = BIG_WIN_TIME3;
                  this.big_win_txt.stepCount = BIG_WIN_TIME3 * 30;
                  this.big_win.setAnimation(0, aniname + "intro", false);
                }
                this.big_win_txt.string = Common.numFormat(this._win_totalMoney);
                this.big_win.setCompleteListener(function (trackEntry) {
                  var name = trackEntry.animation ? trackEntry.animation.name : "";
                  if (name.startsWith(aniname)) {
                    _this3.big_win.setCompleteListener(null);
                    _this3.big_win.setAnimation(0, aniname + "idle", true);
                  }
                });
                SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.bgm_bigwin_main, function (id) {
                  _this3._audioId = id;
                });
                break;
              }
            case RunState.FREE_WIN:
              {
                this._state = RunState.FREE_WIN;
                this._runTime = FREE_WIN_TIME;
                this.free_bottom.active = false;
                this.free_winBtn.active = false;
                this.free_win.node.active = true;
                this._free_lock = true;
                this.free_winTxt.stepCount = 60; //1s结束
                this.free_winTxt.reset();
                this.free_winTxt.string = Common.numFormat(SpeedWinnerProxy.freeTotalWin);
                this.free_win.setAnimation(0, "intro", false);
                this.free_win.addAnimation(0, "idle", true);
                this.scheduleOnce(function () {
                  if (!_this3.free_winBtn.active) {
                    _this3.free_winBtn.setScale(v3(0.2, 0.2, 1));
                    _this3.free_winBtn.active = true;
                    tween(_this3.free_winBtn).to(0.1, {
                      scale: v3(1, 1, 1)
                    }).start();
                  }
                }, 1);
                this.txt_winFree.reset();

                //SlotQueenDef.palyAudio(SlotQueenDef.audio.FREE_WIN);
                SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.bgm_totalwin_main, function (id) {
                  _this3._audioId = id;
                  _this3.scheduleOnce(function () {
                    AudioManager.instance.stopSound(id);
                    SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.bgm_totalwin_end, function (id) {
                      _this3._audioId = id;
                    });
                  }, 2);
                });
                break;
              }
          }
        };
        _proto._init = function _init() {
          this.normalBtn.active = true;
          this.moreBtn.active = false;
          this.changeBtnActive(true);

          //mock初始化数据 接口
          //this.getLastData(null)

          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotSpeedWinner.info, {});
        };
        _proto.getLastData = function getLastData(data) {
          //接口

          this._current_result = data;
          if (this._current_result.FreeInfo && this._current_result.FreeInfo.Count > 0) {
            SpeedWinnerProxy.freeTotalWin = this._current_result.FreeInfo.TotalPrizeAmount;
            this.txt_winFree.string = Common.numFormat(this._current_result.FreeInfo.TotalPrizeAmount + "");
            this.changeScene(true, this._current_result.FreeInfo.Count);
            //遗留免费模式，需要初始化倍数
            if (this._current_result.FreeInfo.Multiple == 1) {
              this._current_result.FreeInfo.Multiple = "";
            }
            if (this._current_result.FreeInfo.Multiple > 0) {
              this._total_multiple = this._current_result.FreeInfo.Multiple;
              this.multipleNum.string = "x" + this._total_multiple + "";
              this.multipleNum.fontSize = 100;
              this.multipleTotal.setPosition(v3(0, -190, 0));
              this.multipleTotal.active = true;
            }
            console.log(this._current_result.FreeInfo.Multiple, "Multiple");
          } else {
            this.changeScene(false);
          }
          this.loadAni();
        };
        _proto.checkReady = function checkReady() {
          if (this._state != RunState.NORMAL && this._state != RunState.WAIT) return false;
          return true;
        };
        _proto.changeScene = function changeScene(isEnter, freeCount, isToHome) {
          var _this4 = this;
          if (isEnter === void 0) {
            isEnter = true;
          }
          if (freeCount === void 0) {
            freeCount = 0;
          }
          if (isToHome === void 0) {
            isToHome = false;
          }
          this.multipleTotal.active = false;
          this.multipleTotal.setPosition(v3(0, 140, 0));
          if (isEnter) {
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.fsTrans);
            SPeedWinnerDef.palyMusic(SPeedWinnerDef.audio.bgm_fs);
            this.hideWindow();
            this._free_lock = true;
            this._free_timeLeft = 10;
            this.free_start_time.fontSize = 20;
            this.free_start_font.setScale(v3(0.2, 0.2, 1));
            this.free_startBtn.setScale(v3(0.2, 0.2, 1));
            this.free_start.node.active = true;
            this.free_start.setAnimation(0, "intro", false);
            tween(this.free_start_time.getComponent(Label)).to(0.3, {
              fontSize: 300
            }).call(function () {
              tween(_this4.free_start_time.getComponent(Label)).to(0.2, {
                fontSize: 250
              }).start();
            }).start();
            tween(this.free_startBtn).to(0.3, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              tween(_this4.free_startBtn).to(0.2, {
                scale: v3(1, 1, 1)
              }).start();
            }).start();
            tween(this.free_start_font).to(0.3, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              tween(_this4.free_start_font).to(0.2, {
                scale: v3(1, 1, 1)
              }).start();
            }).start();
            this.free_start.setCompleteListener(function (trackEntry) {
              _this4.free_start.setAnimation(0, "idle", true);
            });
            this._free_count = freeCount;
            this.free_start_time.string = Common.numFormat(this._free_count + "");
            this.free_winTxt.string = Common.numFormat(this._free_count + "");
            this.free_buy.active = false;
          } else {
            SPeedWinnerDef.palyMusic(SPeedWinnerDef.audio.bgm_mg);
            this.notice_win.active = false;
            this.notice_normal_bg.active = true;
            this.notice_bg.active = true;
            this._free_lock = false;
            this.free_start.node.active = false;
            this._free_count = freeCount;
            this.free_winTxt.string = Common.numFormat(this._free_count + "");
            this._isFree = false;
            this.free_win.node.active = false;
            this.free_bottom.active = false;
            this.free_buy.active = true;
            if (isToHome) {
              this.changeState(RunState.NORMAL);
            }
            this.changeModeBg();
          }
        }

        //免费模式进入到转盘
        ;

        _proto.onClickEnterFreeScreen = function onClickEnterFreeScreen() {
          this.free_start.node.active = false;
          this.free_bottom.active = true;
          this._free_lock = false;
          this._free_timeLeft = 0;
          this._isFree = true;
          this._runTime = 0.5; //0.5s后将状态由RunState.WAIT改成RunState.NORMAL
          //SpeedWinnerProxy.freeTotalWin = 0
          SpeedWinnerProxy.freeTotalWin = this._current_result.FreeInfo.TotalPrizeAmount;
          this.txt_winFree.reset(this._current_result.FreeInfo.TotalPrizeAmount);
          SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.uiStart);
          AudioManager.instance.stopAllEffect();
          this._audioId = 0;
          this.changeModeBg();
          if (this._free_count > 1) {
            this.free_bottom.getChildByName("noLastOne").active = true;
            this.free_bottom.getChildByName("lastOne").active = false;
            this.free_bottom_time.string = Common.numFormat(this._free_count + "");
          } else {
            this.free_bottom.getChildByName("lastOne").active = true;
            this.free_bottom.getChildByName("noLastOne").active = false;
          }
        }
        //免费模式结算页返回普通模式
        ;

        _proto.onClickEnterNormalScreen = function onClickEnterNormalScreen() {
          //从免费模式结束页进入到普通模式
          this.changeScene(false, 0, true);
          if (SpeedWinnerProxy.freeTotalWin > 0) {
            this.notice_bg.active = false;
            this.notice_normal_bg.active = false;
            this.notice_win_txt.reset(SpeedWinnerProxy.freeTotalWin);
            this.notice_win.active = true;
            this.txt_win.reset(SpeedWinnerProxy.freeTotalWin);
            this.changeNoticeParentAni(SpeedWinnerProxy.freeTotalWin);
          }
          AudioManager.instance.stopAllEffect();
          SpeedWinnerProxy.freeTotalWin = 0;
          this._audioId = 0;
          this.checkDownOrUpBet();
          if (this._auto) {
            this.turn_start.setAnimation(0, "auto", true);
          } else {
            this.turn_start.timeScale = 1;
            this.turn_start.setAnimation(0, "idle", true);
          }
        }

        //设置免费次数
        ;

        _proto.setFreeCount = function setFreeCount(count) {
          this._free_count = count;
          console.log(count, "count");
          if (this._isFree) {
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.fsSpin);
          }
          if (this._free_count >= 1) {
            // if (this._free_count != SpeedWinnerProxy.result.FreeInfo.Count) {

            // }
            this.free_bottom.getChildByName("lastOne").active = false;
            this.free_bottom.getChildByName("noLastOne").active = true;
            tween(this.free_bottom_time.node).by(0.1, {
              position: v3(0, 20, 0)
            }).by(0.1, {
              position: v3(0, -20, 0)
            }).start();
            tween(this.free_bottom_time.node).to(0.1, {
              scale: v3(1.2, 1.2, 1.2)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
            this.free_bottom_time.string = Common.numFormat(this._free_count + "");
          } else {
            this.free_bottom.getChildByName("noLastOne").active = false;
            this.free_bottom.getChildByName("lastOne").active = true;
          }
        }

        //初始化转盘
        ;

        _proto.loadAni = function loadAni() {
          if (this._current_result && this._current_result.Res.length > 0) {
            this.renderCurrentResult("init");
            this._isLock = false;
            for (var i = 0; i < this.turn_aniLines.length; i++) {
              this.turn_aniLines[i].initCard(this._bottom_result[i], i);
            }
            this.turn_aniTran.initCard(this._top_result);
            this.changeRunHeight(true);
            this.setTotalNum(true, true);
          }
        }
        //点击开始游戏按钮
        ;

        _proto.clickStartGame = function clickStartGame() {
          //当自动模式下点击开始按钮，切换成手动模式
          if (this._auto) {
            this.setAuto(0);
            if (this._isLock) {
              this.turn_start.setAnimation(0, "stop", true);
            }
            if (!this._isLock) {
              if (SpeedWinnerProxy.getBet() == 2000) {
                this.normalBtn.getChildByName("increase").getComponent(UIOpacity).opacity = 100;
                this._isMinBet = true;
              } else {
                this.normalBtn.getChildByName("increase").getComponent(UIOpacity).opacity = 255;
                this._isMinBet = false;
              }
              this.normalBtn.getChildByName("add").getComponent(UIOpacity).opacity = 255;
              this.normalBtn.getChildByName("auto").getComponent(UIOpacity).opacity = 255;
            }
            return;
          }
          this.preStart();
        };
        _proto.preStart = function preStart(buyFree) {
          if (buyFree === void 0) {
            buyFree = false;
          }
          if (this._isLock) return;
          if (!this.checkReady()) return;
          if (this._auto) {
            this.turn_start.getComponent(AddSpineEffect).animation = "push2";
          } else {
            this.turn_start.getComponent(AddSpineEffect).animation = "push1";
          }

          //免费模式最后一轮中大奖兼容处理
          if (this._isFree && this._current_result.FreeInfo.Count == 0) {
            this.changeScene(false);
            this._free_timeLeft = 10;
            this.changeState(RunState.FREE_WIN);
            return;
          } else {
            if (this._isFree && this._current_result.FreeInfo.Count > 0) {
              this._free_count = this._current_result.FreeInfo.Count;
            }
            this.notice_win.active = false;
            this.notice_win_txt.reset();
            this.notice_normal_bg.active = true;
            this.notice_bg.active = true;
            //this.txt_win.string = "0";
            this.txt_win.reset(0);

            //接口
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            if (!this._isFree && gold < this._bet) {
              Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
              this.setAuto(0);
              return;
            }
            if (!this._isFree && !buyFree) this.updateGoldData(-this._bet);
            this.setTotalNum(false);

            //结束倍数图标缩放效果以及 scartter效果
            for (var i = 0; i < this.turn_aniLines.length; i++) {
              this.turn_aniLines[i].multipleStop();
              this.turn_aniLines[i].scatterAndWildStop();
            }
            this.turn_aniTran.multipleStop();
            this.turn_aniTran.scatterAndWildStop();
            this.notice_parent.node.active = true;
            this.notice_parent.setAnimation(0, "normal_idle", true);
            this.startGameAni(true);
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.spinBtn);
            this.free_buy.getComponent(UIOpacity).opacity = 100;
            this.sendBet(buyFree);
            this._state = RunState.START;
            this._current_resultIndex = 0;
            this._runTime = GETDATA_TIME;
          }
        };
        _proto.clickRun = function clickRun() {
          var _this5 = this;
          this.changeRunHeight(false);
          this.setFreeCount(this._free_count - 1);
          if (this._free_count < 0) {
            this._free_count = 0;
          }
          this._isLock = true;
          this.checkAuto();
          this.changeBtnActive(false);
          this.isMultiple();
          this.showLightIndex = 0;
          if (this._runDelay != 0) {
            var _loop = function _loop(i) {
              _this5.scheduleOnce(function () {
                _this5.turn_aniLines[i].run("normal");
              }, _this5._runDelay * i);
            };
            for (var i = 0; i < this.turn_aniLines.length; i++) {
              _loop(i);
            }
            this.turn_aniTran.run("normal");
          } else {
            //this.scheduleOnce(() => {
            for (var _i = 0; _i < this.turn_aniLines.length; _i++) {
              this.turn_aniLines[_i].run("fast");
            }
            //})
            this.turn_aniTran.run("fast");
          }
          // for (let i = 0; i < this.turn_aniLines.length; i++) {
          //     this.scheduleOnce(() => {
          //         this.turn_aniLines[i].run(this._runDelay == 0 ? "fast" : "normal");
          //     }, this._runDelay * i);
          // }
          // this.turn_aniTran.run(this._runDelay == 0 ? "fast" : "normal");

          if (this._current_result && this._current_result.Res.length > 0) {
            this._runDelay == 0 ? this._runTime = RUNNING_TIME : this._runTime = RUNNING_TIME + 1.2;
            this._scatteNum = 0;
            this.renderCurrentResult("update");
            this._top_result.map(function (item) {
              if (item.Sym == 0) {
                _this5._scatteNum++;
              }
            });
            this._bottom_result.map(function (item, index) {
              item.map(function (item1) {
                if (item1.Sym == 0) {
                  _this5._scatteNum++;
                  if (_this5._scatteNum == 3) {
                    _this5.showLightIndex = index + 1;
                  }
                }
              });
            });
            if (this._runDelay == 0) {
              for (var _i2 = 0; _i2 < this.turn_aniLines.length; _i2++) {
                this.turn_aniLines[_i2].showResult(this._bottom_result[_i2]);
              }
              this.scheduleOnce(function () {
                _this5.turn_aniTran.showResult(_this5._top_result);
              }, 0.2);
            } else {
              if (this.showLightIndex > 0 && this.showLightIndex <= 5) {
                this.scheduleOnce(function () {
                  _this5.turn_aniTran.showResult(_this5._top_result);
                }, this._runDelay + 1);
                var _loop2 = function _loop2(_i3) {
                  _this5.scheduleOnce(function () {
                    _this5.turn_aniLines[_i3].showResult(_this5._bottom_result[_i3]);
                  }, _i3 < _this5.showLightIndex ? _this5._runDelay * _i3 : 1.2 * (_i3 - _this5.showLightIndex + 1));
                  //展示光线，延迟开奖时间
                  _i3 >= _this5.showLightIndex ? _this5._runTime += 1 : "";
                };
                for (var _i3 = 0; _i3 < this.turn_aniLines.length; _i3++) {
                  _loop2(_i3);
                }
              } else {
                this.scheduleOnce(function () {
                  _this5.turn_aniTran.showResult(_this5._top_result);
                }, this._runDelay + 0.2);
                var _loop3 = function _loop3(_i4) {
                  _this5.scheduleOnce(function () {
                    _this5.turn_aniLines[_i4].showResult(_this5._bottom_result[_i4]);
                  }, _this5._runDelay * _i4 + 0.2);
                };
                for (var _i4 = 0; _i4 < this.turn_aniLines.length; _i4++) {
                  _loop3(_i4);
                }
              }
            }
          }
        };
        _proto.clickStop = function clickStop() {
          var _this6 = this;
          if (this._runDelay != 0) {
            //隐藏光效的遮照层
            this.turnLightMask(false, null);
          }

          //隐藏scatte的光效
          if (this._scatteNum >= 0) {
            //普通模式
            this.lightBox.children.map(function (item) {
              item.active = false;
            });
          }

          //判断中奖效果
          if (this._current_result && this._current_result.Res[this._current_resultIndex].RewardMoney > 0) {
            var RewardMoney = this._current_result.Res[this._current_resultIndex].RewardMoney;
            this._win_totalMoney += RewardMoney;
            SpeedWinnerProxy.freeTotalWin += this._isFree ? RewardMoney : 0;
            //中奖遮照
            this.turnRunMask("show");
            for (var i = 0; i < this.turn_aniLines.length; i++) {
              this.turn_aniLines[i].showWin();
            }
            this.turn_aniTran.showWin();
            this.showNext();
          } else {
            //普通模式只有中奖倍数才相加
            //免费模式不管有没有中奖倍数都相加
            if (this._isFree && this._isWinByMultiple) {
              this.scheduleOnce(function () {
                //倍数获奖动画播放
                _this6.multipleWinAnimaton();
                _this6.scheduleOnce(function () {
                  //移动倍数
                  _this6.getMultipleData();
                }, 0.5);
              }, 0.5);
              this.scheduleOnce(function () {
                //结束当前
                _this6.showEnd();
                _this6.clear();
              }, 3);
            } else {
              //结束当前
              this.showEnd();
              this.clear();
            }
          }
        }
        //是否有倍数
        ;

        _proto.isMultiple = function isMultiple() {
          var _this7 = this;
          this._isWinByMultiple = false;
          if (this._current_result.Res.length >= 1) {
            //判断最后是否有倍数出现
            this._current_result.Res[this._current_result.Res.length - 1].AllPosMsg.map(function (item) {
              item.map(function (item1) {
                if (item1.MultipleVal > 0) {
                  _this7._isWinByMultiple = true;
                }
              });
            });
          }
        }
        //获取倍数的信息 && 调用倍数动画
        ;

        _proto.getMultipleData = function getMultipleData() {
          var _this8 = this;
          for (var i = 0; i < this.turn_aniLines.length; i++) {
            this.turn_aniLines[i].getMultipleData(i);
          }
          this.turn_aniTran.getMultipleData();
          this.scheduleOnce(function () {
            if (_this8._isFree) {
              _this8.freeMoveMultiple();
            } else {
              _this8.moveMultiple();
            }
          }, 0.5);
        };
        _proto.multipleWinAnimaton = function multipleWinAnimaton() {
          for (var i = 0; i < this.turn_aniLines.length; i++) {
            this.turn_aniLines[i].multipleWinAnimaton();
          }
          this.turn_aniTran.multipleWinAnimaton();
        };
        _proto.showMultiple = function showMultiple(data) {
          var node = instantiate(this.pre_card);
          this.multipleBox.addChild(node);
          this._total_multiple += data.MultipleVal;
          this._current_round_multiple = data.MultipleVal;
          data.height = data["Length"] * 126;
          node.setPosition(v3(data.x, data.y));
          var com = node.getComponent(SpeedWinnerItem);
          com["cardData"] = data;
          com.multipleRender(data);
        };
        _proto.moveMultiple = function moveMultiple() {
          var _this9 = this;
          SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symMultiActivate);
          //结束倍数图标缩放效果
          for (var i = 0; i < this.turn_aniLines.length; i++) {
            this.turn_aniLines[i].multipleStop();
          }
          this.turn_aniTran.multipleStop();
          this.multipleBox.children.map(function (item, index) {
            tween(item).to(0.2, {
              scale: new Vec3(2, 2, 1)
            }).to(0.2, {
              position: v3(0, -50, 0)
            }).call(function () {
              item.destroyFromParent();
              if (_this9.multipleBox.children.length == 0) {
                _this9.multipleNum.fontSize = 20;
                SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symMultiCombine);
                _this9.multipleNum.string = "x" + _this9._total_multiple + "";
                SpeedWinnerProxy.freeTotalWin = SpeedWinnerProxy.freeTotalWin + _this9._win_totalMoney * (_this9._total_multiple - 1);
                //SpeedWinnerProxy.freeTotalWin = this._current_result.FreeInfo.TotalPrizeAmount
                _this9._win_totalMoney *= _this9._total_multiple;
                _this9.multipleTotal.active = true;
                _this9.multipleSpine.node.active = true;
                _this9.multipleSpine.setAnimation(0, "big", false);
                tween(_this9.multipleNum).to(0.3, {
                  fontSize: 180
                }).delay(0.2).call(function () {
                  _this9.multipleSpine.setAnimation(0, "", false);
                  _this9.multipleSpine.node.active = false;
                  tween(_this9.multipleTotal).to(0.3, {
                    position: v3(0, -300, 0)
                  }).call(function () {
                    _this9.multipleTotal.active = false;
                    _this9.multipleTotal.setPosition(v3(0, 140, 0));
                    SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.uiCollect); //倍数乘中奖金额
                    //修改奖金
                    _this9.txt_win.string = Common.numFormat(_this9._win_totalMoney + "");
                    _this9.txt_winFree.string = Common.numFormat(SpeedWinnerProxy.freeTotalWin + "");
                    _this9.notice_botWin.string = Common.numFormat(_this9._win_totalMoney + "");
                    SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.prizeSmallwinReach); //金额收集
                    //动画
                    _this9.changeNoticeParentAni();
                    _this9.notice_botWin_boom.node.active = true;
                    _this9.notice_botWin_boom.setAnimation(0, "boom", false);
                    _this9.scheduleOnce(function () {
                      _this9.notice_botWin_boom.node.active = false;
                      _this9.notice_botWin_boom.setAnimation(0, "", false);
                    }, 0.2);
                  }).start();
                }).start();
              }
            }).start();
          });
        };
        _proto.freeMoveMultiple = function freeMoveMultiple() {
          var _this10 = this;
          //结束倍数图标缩放效果
          for (var i = 0; i < this.turn_aniLines.length; i++) {
            this.turn_aniLines[i].multipleStop();
          }
          this.turn_aniTran.multipleStop();
          if (!this.multipleTotal.active) {
            //免费模式第一次出现倍数

            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symMultiActivate);
            this.multipleBox.children.map(function (item, index) {
              tween(item).to(0.3, {
                scale: new Vec3(2, 2, 1)
              }).to(0.3, {
                position: v3(0, -50, 0)
              }).call(function () {
                item.destroyFromParent();
                if (_this10.multipleBox.children.length == 0) {
                  _this10.multipleNum.fontSize = 20;
                  SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symMultiCombine);
                  if (_this10._current_result.FreeInfo.Multiple > 0) {
                    _this10.multipleNum.string = "x" + _this10._current_result.FreeInfo.Multiple + "";
                    SpeedWinnerProxy.freeTotalWin = SpeedWinnerProxy.freeTotalWin + _this10._win_totalMoney * (_this10._current_result.FreeInfo.Multiple - 1);
                  } else {
                    _this10.multipleNum.string = "x" + _this10._total_multiple + "";
                    SpeedWinnerProxy.freeTotalWin = SpeedWinnerProxy.freeTotalWin + _this10._win_totalMoney * (_this10._total_multiple - 1);
                  }

                  // SpeedWinnerProxy.freeTotalWin = SpeedWinnerProxy.freeTotalWin + this._win_totalMoney * this._current_round_multiple;
                  // this._win_totalMoney *= this._current_round_multiple;
                  _this10._win_totalMoney *= _this10._total_multiple;
                  _this10.multipleTotal.active = true;
                  _this10.multipleSpine.node.active = true;
                  _this10.multipleSpine.setAnimation(0, "big", false);
                  tween(_this10.multipleNum).to(0.3, {
                    fontSize: 180
                  }).call(function () {
                    _this10.multipleSpine.setAnimation(0, "", false);
                    _this10.multipleSpine.node.active = false;
                    tween(_this10.multipleNum).to(0.3, {
                      fontSize: 100
                    }).start();
                    tween(_this10.multipleTotal).to(0.3, {
                      position: v3(0, -190, 0)
                    }).call(function () {
                      SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.uiCollect); //倍数乘中奖金额
                      //修改奖金
                      _this10.txt_win.string = Common.numFormat(_this10._win_totalMoney + "");
                      _this10.txt_winFree.string = Common.numFormat(SpeedWinnerProxy.freeTotalWin + "");
                      _this10.notice_botWin.string = Common.numFormat(_this10._win_totalMoney + "");
                      SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.prizeSmallwinReach); //金额收集
                      //动画
                      _this10.changeNoticeParentAni();

                      //有金额在展示
                      if (_this10._win_totalMoney) {
                        _this10.notice_botWin_boom.node.active = true;
                        _this10.notice_botWin_boom.setAnimation(0, "boom", false);
                        _this10.scheduleOnce(function () {
                          _this10.notice_botWin_boom.node.active = false;
                          _this10.notice_botWin_boom.setAnimation(0, "", false);
                        }, 0.2);
                      }
                    }).start();
                  }).start();
                }
              }).start();
            });
          } else {
            //如果此时有中奖金额，倍数相加后直接打到中奖金额扩大消失，从后面在出现
            //如果此时没有中奖金额，倍数相加后移动到通知栏上面不动
            //免费模式多次出现倍数
            tween(this.multipleNum).to(0.4, {
              fontSize: 120
            }).call(function () {
              tween(_this10.multipleTotal).to(0.4, {
                position: v3(0, 140, 0)
              }).start();
            }).start();
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symMultiActivate);
            this.multipleBox.children.map(function (item, index) {
              tween(item).to(0.3, {
                scale: new Vec3(2, 2, 1)
              }).to(0.3, {
                position: v3(0, -50, 0)
              }).call(function () {
                item.destroyFromParent();
                if (_this10.multipleBox.children.length == 0) {
                  _this10.multipleNum.fontSize = 0;
                  SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symMultiCombine);
                  if (_this10._current_result.FreeInfo.Multiple > 0) {
                    _this10.multipleNum.string = "x" + _this10._current_result.FreeInfo.Multiple + "";
                    SpeedWinnerProxy.freeTotalWin = SpeedWinnerProxy.freeTotalWin + _this10._win_totalMoney * (_this10._current_result.FreeInfo.Multiple - 1);
                  } else {
                    _this10.multipleNum.string = "x" + _this10._total_multiple + "";
                    SpeedWinnerProxy.freeTotalWin = SpeedWinnerProxy.freeTotalWin + _this10._win_totalMoney * (_this10._total_multiple - 1);
                  }
                  // this.multipleNum.string = "x" + this._total_multiple + "";
                  // SpeedWinnerProxy.freeTotalWin = SpeedWinnerProxy.freeTotalWin + this._win_totalMoney * (this._total_multiple - 1);
                  _this10._win_totalMoney *= _this10._total_multiple;
                  _this10.multipleSpine.node.active = true;
                  _this10.multipleSpine.setAnimation(0, "big", false);
                  //当前有中奖金额
                  if (_this10._win_totalMoney > 0) {
                    tween(_this10.multipleNum).to(0.3, {
                      fontSize: 180
                    }).call(function () {
                      _this10.multipleSpine.setAnimation(0, "", false);
                      _this10.multipleSpine.node.active = false;
                      tween(_this10.multipleNum).to(0.3, {
                        fontSize: 100
                      }).start();
                      tween(_this10.multipleTotal).to(0.3, {
                        position: v3(0, -300, 0)
                      }).call(function () {
                        SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.uiCollect); //倍数乘中奖金额
                        //倍数扩大消失
                        tween(_this10.multipleTotal).to(0.2, {
                          scale: v3(1.5, 1.5, 1)
                        }).start();
                        tween(_this10.multipleTotal.getComponent(UIOpacity)).to(0.2, {
                          opacity: 0
                        }).call(function () {
                          _this10.multipleTotal.active = false;
                          _this10.multipleTotal.setScale(1, 1, 1);
                          _this10.multipleTotal.getComponent(UIOpacity).opacity = 255;
                          _this10.multipleTotal.setPosition(v3(0, -190));
                          _this10.copyMultipleNum.string = _this10.multipleNum.string;
                          tween(_this10.copyMultipleNum.node).to(0.2, {
                            position: v3(0, 270)
                          }).call(function () {
                            _this10.multipleTotal.active = true;
                            _this10.copyMultipleNum.node.active = false;
                            _this10.copyMultipleNum.node.setPosition(v3(0, 190));
                          }).start();
                        }).start();
                        //修改奖金
                        _this10.txt_win.string = Common.numFormat(_this10._win_totalMoney + "");
                        _this10.txt_winFree.string = Common.numFormat(SpeedWinnerProxy.freeTotalWin + "");
                        _this10.notice_botWin.string = Common.numFormat(_this10._win_totalMoney + "");
                        SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.prizeSmallwinReach); //金额收集
                        //动画
                        _this10.changeNoticeParentAni();
                        _this10.notice_botWin_boom.node.active = true;
                        _this10.notice_botWin_boom.setAnimation(0, "boom", false);
                        _this10.scheduleOnce(function () {
                          _this10.notice_botWin_boom.node.active = false;
                          _this10.notice_botWin_boom.setAnimation(0, "", false);
                        }, 0.2);
                      }).start();
                    }).start();
                  } else {
                    //当前没有中奖金额
                    tween(_this10.multipleNum).to(0.4, {
                      fontSize: 180
                    }).call(function () {
                      _this10.multipleSpine.setAnimation(0, "", false);
                      _this10.multipleSpine.node.active = false;
                      tween(_this10.multipleNum).to(0.4, {
                        fontSize: 100
                      }).start();
                      tween(_this10.multipleTotal).to(0.4, {
                        position: v3(0, -190, 0)
                      }).call(function () {
                        //修改奖金
                        _this10.txt_win.string = Common.numFormat(_this10._win_totalMoney + "");
                        _this10.txt_winFree.string = Common.numFormat(SpeedWinnerProxy.freeTotalWin + "");
                      }).start();
                    }).start();
                  }
                }
              }).start();
            });
          }
        }

        //免费模式下上一局有倍数
        //有金额 & 有新增倍数 倍数扩大后，从底部移动上来（freeMoveMultiple），有金额 & 没新增倍数 倍数扩大后消失（freeLastMultipleMove）
        ;

        _proto.freeLastMultipleMove = function freeLastMultipleMove() {
          var _this11 = this;
          var originalNode = this.multipleTotal.getChildByName("multipleNum");
          var cloneNode = instantiate(originalNode);
          cloneNode.setPosition(v3(originalNode.getPosition().x, originalNode.getPosition().y, 0));
          cloneNode.parent = this.multipleTotal;
          SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.symMultiCombine);
          var multipleNum = parseInt(this.multipleNum.string.substring(1));
          tween(cloneNode).to(0.1, {
            scale: new Vec3(2, 2, 1)
          }).to(0.1, {
            position: v3(0, -100, 0)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).to(0.1, {
            scale: new Vec3(3, 3, 1)
          }).call(function () {
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.uiCollect); //倍数乘中奖金额
            SpeedWinnerProxy.freeTotalWin = SpeedWinnerProxy.freeTotalWin + _this11._win_totalMoney * (multipleNum - 1);
            _this11._win_totalMoney *= multipleNum;
            //修改奖金
            _this11.txt_win.string = Common.numFormat(_this11._win_totalMoney + "");
            _this11.txt_winFree.string = Common.numFormat(SpeedWinnerProxy.freeTotalWin + "");
            _this11.notice_botWin.string = Common.numFormat(_this11._win_totalMoney + "");
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.prizeSmallwinReach); //金额收集
            //动画
            _this11.changeNoticeParentAni();
            _this11.notice_botWin_boom.node.active = true;
            _this11.notice_botWin_boom.setAnimation(0, "boom", false);
            _this11.scheduleOnce(function () {
              _this11.notice_botWin_boom.node.active = false;
              _this11.notice_botWin_boom.setAnimation(0, "", false);
            }, 0.2);
            cloneNode.destroyFromParent();
          }).start();
          tween(cloneNode.getComponent(UIOpacity)).to(0.2, {
            opacity: 200
          }).delay(0.1).to(0.1, {
            opacity: 80
          }).start();
        };
        _proto.showNext = function showNext() {
          var _this12 = this;
          this.winDownMoney();
          if (this._current_result.Res[this._current_resultIndex + 1]) {
            this._current_resultIndex += 1;
            var RewardMoney = this._current_result.Res[this._current_resultIndex].RewardMoney;
            this._win_totalMoney += RewardMoney;
            SpeedWinnerProxy.freeTotalWin += this._isFree ? RewardMoney : 0;
            this.scheduleOnce(function () {
              _this12.setTotalNum(true, false, _this12._current_resultIndex);
              _this12.renderCurrentResult("update");
              for (var i = 0; i < _this12.turn_aniLines.length; i++) {
                _this12.turn_aniLines[i].addCard(_this12._bottom_result[i], _this12._scatteNum, RewardMoney);
              }
              _this12.turn_aniTran.addCard(_this12._top_result, _this12._scatteNum, RewardMoney);
              //转盘还需要转动
              _this12.changeRunHeight(false);
              _this12.scheduleOnce(function () {
                _this12.scheduleOnce(function () {
                  _this12.changeRunHeight(true);
                }, 0.5);
                if (_this12._current_result.Res[_this12._current_resultIndex + 1]) {
                  _this12.showNext();
                } else {
                  //判断是否是有倍数的中奖
                  if (_this12._isWinByMultiple) {
                    _this12.scheduleOnce(function () {
                      //倍数获奖动画播放
                      _this12.multipleWinAnimaton();
                      _this12.scheduleOnce(function () {
                        //移动倍数
                        _this12.getMultipleData();
                      }, 0.5);
                    }, 0.5);
                    _this12.scheduleOnce(function () {
                      //判断是否中大奖
                      if (_this12._win_totalMoney / _this12._bet >= 20) {
                        _this12.changeState(RunState.BIG_WIN);
                      } else {
                        _this12.scheduleOnce(function () {
                          _this12.winTotalMoney();
                        }, 1.2);
                        _this12.scheduleOnce(function () {
                          _this12.resetTurnAniLines();
                          _this12.showEnd();
                          _this12.clear();
                        }, 1.5);
                      }
                    }, 3);
                  } else if (_this12.multipleTotal.active && _this12._isFree) {
                    //免费模式下已经存在倍数
                    _this12.freeLastMultipleMove();
                    _this12.scheduleOnce(function () {
                      //判断是否中大奖
                      if (_this12._win_totalMoney / _this12._bet >= 20) {
                        _this12.changeState(RunState.BIG_WIN);
                      } else {
                        _this12.scheduleOnce(function () {
                          _this12.winTotalMoney();
                        }, 1.2);
                        _this12.scheduleOnce(function () {
                          _this12.resetTurnAniLines();
                          _this12.showEnd();
                          _this12.clear();
                        }, 2);
                      }
                    }, 1);
                  } else {
                    //判断是否中大奖
                    if (_this12._win_totalMoney / _this12._bet >= 20) {
                      _this12.changeState(RunState.BIG_WIN);
                    } else {
                      _this12.scheduleOnce(function () {
                        _this12.winTotalMoney();
                      }, 1.2);
                      _this12.scheduleOnce(function () {
                        _this12.resetTurnAniLines();
                        _this12.showEnd();
                        _this12.clear();
                      }, 2);
                    }
                  }
                }
              }, _this12._scatteNum >= 3 ? 1 : 0);
            }, 2.5);
          } else {
            //判断是否是有倍数的中奖
            if (this._isWinByMultiple) {
              this.scheduleOnce(function () {
                //倍数获奖动画播放
                _this12.multipleWinAnimaton();
                _this12.scheduleOnce(function () {
                  //移动倍数
                  _this12.getMultipleData();
                }, 0.5);
              }, 0.5);
              this.scheduleOnce(function () {
                //判断是否中大奖
                if (_this12._win_totalMoney / _this12._bet >= 20) {
                  _this12.changeState(RunState.BIG_WIN);
                } else {
                  _this12.scheduleOnce(function () {
                    _this12.winTotalMoney();
                  }, 1.2);
                  _this12.scheduleOnce(function () {
                    _this12.resetTurnAniLines();
                    _this12.showEnd();
                    _this12.clear();
                  }, 2);
                }
              }, 3);
            } else if (this.multipleTotal.active && this._isFree) {
              //免费模式下已经存在倍数
              this.freeLastMultipleMove();
              this.scheduleOnce(function () {
                //判断是否中大奖
                if (_this12._win_totalMoney / _this12._bet >= 20) {
                  _this12.changeState(RunState.BIG_WIN);
                } else {
                  _this12.scheduleOnce(function () {
                    _this12.winTotalMoney();
                  }, 1.2);
                  _this12.scheduleOnce(function () {
                    _this12.resetTurnAniLines();
                    _this12.showEnd();
                    _this12.clear();
                  }, 2);
                }
              }, 1);
            } else {
              //判断是否中大奖
              if (this._win_totalMoney / this._bet >= 20) {
                this.changeState(RunState.BIG_WIN);
              } else {
                this.scheduleOnce(function () {
                  _this12.winTotalMoney();
                });
                this.scheduleOnce(function () {
                  _this12.resetTurnAniLines();
                  _this12.showEnd();
                  _this12.clear();
                }, 1.2);
              }
            }
          }
        }

        //判断是否进入免费模式
        ;

        _proto.showEnd = function showEnd() {
          var _this13 = this;
          //更新分数
          this.updateGoldData();

          //修改按钮动画
          this.startGameAni(false);
          this.changeBtnActive(true);
          this._state = RunState.WAIT;
          this._runTime = GETDATA_TIME + 0.5;
          if (this._scatteNum > 0 && this._scatteNum < 3 && !this._isFree) {
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.fastspinStop);
          }
          if (SpeedWinnerProxy.result.FreeInfo.Count) {
            //判断免费模式下是否还中免费模式
            if (this._isFree && this._free_count < SpeedWinnerProxy.result.FreeInfo.Count) {
              this._free_count = SpeedWinnerProxy.result.FreeInfo.Count;
            }
            if (!this._isFree) {
              for (var i = 0; i < this.turn_aniLines.length; i++) {
                this.turn_aniLines[i].scatterWinAnimation();
              }
              this.turn_aniTran.scatterWinAnimation();
              if (this._runDelay == 0) {
                this._hasChangeSpeed = true;
                this._runDelay = 0.15;
              }
              //初次进入免费拉长RunState.WAIT的时间，当点击免费加载页的时候再将状态改成RunState.NORNAL(防止自动模式下进入免费，转盘会提前转动)
              this._runTime = 100;
              this.scheduleOnce(function () {
                _this13.changeScene(true, SpeedWinnerProxy.result.FreeInfo.Count);
              }, 2);
            }
            this._free_count = SpeedWinnerProxy.result.FreeInfo.Count;
            return;
          }
          //判断是否结束免费模式
          if (this._free_count <= 0) {
            if (this._isFree) {
              if (this._hasChangeSpeed) {
                this._hasChangeSpeed = false;
                this._runDelay = 0;
              }
              this.changeScene(false);
              this._free_timeLeft = 10;
              this.changeState(RunState.FREE_WIN);
            }
          }
        }

        //自动下单回调
        ;

        _proto.setAuto = function setAuto(times) {
          this._autoTimes = times;
          this.turn_auto_leftCount.string = "" + this._autoTimes;
          if (times > 0) {
            this.changeBtnActive(false);
            this._auto = true;
            this.free_buy.getComponent(UIOpacity).opacity = 100;
            this.turn_start.getComponent(AddSpineEffect).animation = "push2";
            this.turn_start.setAnimation(0, "auto", true);
          } else {
            this._auto = false;
            if (!this._isLock) {
              tween(this.free_buy.getComponent(UIOpacity)).to(0.1, {
                opacity: 255
              }).start();
            }
            this.turn_start.getComponent(AddSpineEffect).animation = "push1";
            this.turn_start.setAnimation(0, "idle", true);
          }
          this.turn_auto_leftCount.node.active = this._auto;
        };
        _proto.checkAuto = function checkAuto() {
          if (this._isFree) return;
          if (this._auto) {
            this.normalBtn.getChildByName("increase").getComponent(UIOpacity).opacity = 100;
            this.normalBtn.getChildByName("add").getComponent(UIOpacity).opacity = 100;
            this.normalBtn.getChildByName("auto").getComponent(UIOpacity).opacity = 100;
            this._autoTimes--;
            this.turn_auto_leftCount.string = "" + this._autoTimes;
            if (this._autoTimes <= 0) {
              this.setAuto(0);
            }
          } else {
            if (this._isLock) return;
            if (SpeedWinnerProxy.getBet() == 2000) {
              this.normalBtn.getChildByName("increase").getComponent(UIOpacity).opacity = 100;
              this._isMinBet = true;
            } else {
              this.normalBtn.getChildByName("increase").getComponent(UIOpacity).opacity = 255;
              this._isMinBet = false;
            }
            this.normalBtn.getChildByName("add").getComponent(UIOpacity).opacity = 255;
            this.normalBtn.getChildByName("auto").getComponent(UIOpacity).opacity = 255;
          }
        }

        //中奖后金额变化效果
        ;

        _proto.winDownMoney = function winDownMoney() {
          var _this14 = this;
          this.notice_normal_bg.active = false;
          this.notice_bg.active = false;
          this.notice_topWin.string = Common.numFormat(this._current_result.Res[this._current_resultIndex].RewardMoney + "");
          this.notice_topWin.fontSize = 20;
          this.notice_topWin.node.active = true;
          this.txt_win.string = Common.numFormat(this._win_totalMoney + "");
          this.txt_winFree.string = Common.numFormat(SpeedWinnerProxy.freeTotalWin + "");
          this.notice_topWinBg.node.active = true;
          this.notice_topWinBg.setAnimation(0, "idle", false);
          this.scheduleOnce(function () {
            _this14.notice_topWinBg.setAnimation(0, "", false);
            _this14.notice_topWinBg.node.active = false;
          }, 0.3);
          tween(this.notice_topWin).to(0.3, {
            fontSize: 100
          }).to(0.1, {
            fontSize: 90
          }).to(0.1, {
            fontSize: 100
          }).call(function () {
            tween(_this14.notice_topWin.node).to(0.2, {
              position: v3(0, -270)
            }).call(function () {
              tween(_this14.notice_topWin.node).to(0.2, {
                scale: v3(1.5, 1.5, 1)
              }).start();
              tween(_this14.notice_topWin.node.getComponent(UIOpacity)).to(0.2, {
                opacity: 60
              }).call(function () {
                _this14.notice_topWin.node.active = false;
                _this14.notice_topWin.node.setPosition(v3(0, -70));
                _this14.notice_topWin.node.setScale(v3(1, 1, 1));
                _this14.notice_topWin.node.getComponent(UIOpacity).opacity = 255;
                _this14.notice_botWin.node.active = true;
                _this14.notice_botWin_boom.node.active = true;
                _this14.notice_botWin_boom.setAnimation(0, "boom", false);

                //动画
                _this14.changeNoticeParentAni();
                tween(_this14.notice_botWin).to(0.2, {
                  fontSize: 0
                }).call(function () {
                  _this14.notice_botWin.string = Common.numFormat(parseInt(_this14.notice_botWin.string.replace(/,/g, "")) + parseInt(_this14.notice_topWin.string.replace(/,/g, "")) + "");
                  SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.prizeSmallwinReach);
                  _this14.notice_botWin_boom.node.active = false;
                  _this14.notice_botWin_boom.setAnimation(0, "", false);
                }).to(0.1, {
                  fontSize: 45
                }).start();
              }).start();
            }).start();
          }).start();
        }

        //中奖后总金额展示
        ;

        _proto.winTotalMoney = function winTotalMoney() {
          var _this15 = this;
          this.notice_botWin.string = "0";
          this.notice_topWin.node.active = false;
          this.notice_botWin.node.active = false;
          this.notice_win.active = true;
          if (SpeedWinnerProxy.result && SpeedWinnerProxy.result.prizeAmount / this._bet < 5) {
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.prizeInfobarTotalwin);
            this.txt_win.string = Common.numFormat(SpeedWinnerProxy.result.prizeAmount + "");
            //5倍以下直接显示
            this.notice_win_txt.reset(SpeedWinnerProxy.result.prizeAmount);
            this.txt_winFree.string = Common.numFormat(SpeedWinnerProxy.freeTotalWin + "");
          } else {
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.prizeInfobarTotalwinMedMain, function (id) {
              _this15._notice_win_audioId = id;
              if (SpeedWinnerProxy.result) {
                _this15.txt_win.string = Common.numFormat(SpeedWinnerProxy.result.prizeAmount + "");
                _this15.notice_win_txt.string = Common.numFormat(SpeedWinnerProxy.result.prizeAmount + "");
              }
              _this15.txt_winFree.string = Common.numFormat(SpeedWinnerProxy.freeTotalWin + "");
              _this15.scheduleOnce(function () {
                AudioManager.instance.stopSound(_this15._notice_win_audioId);
                _this15._notice_win_audioId = 0;
                SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.prizeInfobarTotalwinMedEnd);
              }, _this15._auto ? 0.4 : 1);
            });
          }
          this.changeNoticeParentAni();
        }

        //中奖栏背景动画修改
        ;

        _proto.changeNoticeParentAni = function changeNoticeParentAni(money) {
          if (money === void 0) {
            money = 0;
          }
          var mui = money ? money / this._bet : this._win_totalMoney / this._bet;
          this.notice_parent.node.active = true;
          if (mui < 5) {
            this.notice_parent.setAnimation(0, "normal_win", false);
            this.notice_parent.addAnimation(0, "normal_idle", true);
          } else if (mui >= 5 && mui <= 60) {
            this.notice_parent.setAnimation(0, "bigwin_win", false);
            this.notice_parent.addAnimation(0, "bigwin_idle", true);
          } else {
            this.notice_parent.setAnimation(0, "bigwin2_win", false);
            this.notice_parent.addAnimation(0, "bigwin2_idle", true);
          }
        }

        //中奖转盘遮照层处理
        ;

        _proto.turnRunMask = function turnRunMask(type) {
          if (type) {
            if (!this.runMask.active) {
              this.runMask.active = true;
              this.tranRunMask.active = true;
              this.runMask.getComponent(UITransform).priority = 99;
              this.tranRunMask.getComponent(UITransform).priority = 99;
            }
          } else {
            if (this.runMask.active) {
              this.runMask.active = false;
              this.tranRunMask.active = false;
            }
          }
        }

        //出现光效遮照层处理
        ;

        _proto.turnLightMask = function turnLightMask(type, showIndex) {
          if (type) {
            if (!this.tranRunMask.active) {
              this.tranRunMask.active = true;
              this.tranRunMask.getComponent(UITransform).priority = 97;
            }
            this.lightMask.map(function (item, index) {
              if (showIndex === index) {
                item.active = false;
              } else {
                item.active = true;
                item.getComponent(UITransform).priority = 97;
              }
            });
          } else {
            if (this.tranRunMask.active) {
              this.tranRunMask.active = false;
              this.lightMask.map(function (item) {
                item.active = false;
              });
            }
          }
        }

        //多次中奖后竖线重置转盘
        ;

        _proto.resetTurnAniLines = function resetTurnAniLines() {
          for (var i = 0; i < this.turn_aniLines.length; i++) {
            this.turn_aniLines[i].resetCard();
          }
        };
        _proto.onClickChangeBottomBtn = function onClickChangeBottomBtn() {
          if (this.normalBtn.active) {
            this.moreBtn.active = true;
            this.normalBtn.active = false;
          } else {
            this.moreBtn.active = false;
            this.normalBtn.active = true;
          }
        };
        _proto.renderCurrentResult = function renderCurrentResult(type) {
          var _this16 = this;
          if (type === void 0) {
            type = "init";
          }
          //type init 初始化  update 更新
          var newPos = [];
          type == "init" ? newPos = this._current_result.Res[this._current_result.Res.length - 1].AllPosMsg : newPos = this._current_result.Res[this._current_resultIndex].AllPosMsg;
          this._bottom_result = [];
          this._top_result = [];
          newPos.map(function (item, index) {
            _this16._bottom_result.push([]);
            item.map(function (item1, index1) {
              if (index1 == item.length - 1 && index != 0 && index != 5) {
                _this16._top_result.push(item1);
              } else {
                _this16._bottom_result[index].push(item1);
              }
            });
            _this16._bottom_result[index].reverse();
          });
        }
        //修改转轴高度(供scatter溢出使用)
        ;

        _proto.changeRunHeight = function changeRunHeight(isOverflow) {
          if (isOverflow === void 0) {
            isOverflow = false;
          }
          if (isOverflow) {
            //this.midBg.getChildByName('nodeTranRun').getComponent(cc.UITransform).height = 150
            this.midBg.getChildByName("nodeTranRun").getComponent(UITransform).height = 240;
            this.midBg.getChildByName("nodeTranRun").getComponent(UITransform).width = 600;
            this.midBg.getChildByName("nodeRun").getComponent(UITransform).height = 750;
          } else {
            this.midBg.getChildByName("nodeTranRun").getComponent(UITransform).height = 127;
            this.midBg.getChildByName("nodeTranRun").getComponent(UITransform).width = 490;
            this.midBg.getChildByName("nodeRun").getComponent(UITransform).height = 630;
          }
        }
        //下单接口调用
        ;

        _proto.sendBet = function sendBet(buyFree) {
          //接口
          this._errCount = 0;
          SpeedWinnerProxy.result = null;
          if (buyFree) {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotSpeedWinner.bet, {
              betAmount: this._bet,
              buyFree: true
            });
          } else {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotSpeedWinner.bet, {
              betAmount: this._bet
            });
          }
        }
        //事件监听
        ;

        _proto.initEvent = function initEvent() {
          var _this17 = this;
          //进入页面获取上次数据
          SpeedWinnerProxy.on(SpeedWinnerGameEvent.UPDATE_BETLIST, this.getLastData, this);

          //更新下注金额
          SpeedWinnerProxy.on(SpeedWinnerGameEvent.SELECT_BET, function (count) {
            _this17.updateSetData();
            Tween.stopAllByTarget(_this17.txt_bet.node);
            tween(_this17.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }, this);

          //展示光线
          SpeedWinnerProxy.on(SpeedWinnerGameEvent.SHOW_LIGHT, function (data) {
            if (_this17.turn_aniLines[data.index] && _this17.showLightIndex > 0 && data.index >= _this17.showLightIndex) {
              if (_this17._runDelay != 0 && !_this17.turn_aniLines[data.index].getLightStatue()) {
                var _audioId = 0;
                SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.fastspinStart, function (id) {
                  _audioId = id;
                });
                _this17.turn_aniLines[data.index].showLight();
                _this17.turnLightMask(true, data.index);
                _this17.scheduleOnce(function () {
                  AudioManager.instance.stopSound(_audioId);
                }, 1.4);
              }
            }
          }, this);

          //转盘隐藏遮照层
          SpeedWinnerProxy.on(SpeedWinnerGameEvent.HIDEMASK, function () {
            _this17.turnRunMask(false);
          }, this);
          //转盘显示遮照层
          SpeedWinnerProxy.on(SpeedWinnerGameEvent.SHOWMASK, function () {
            _this17.turnRunMask(true);
          }, this);

          //普通速度每一栏到达终点
          SpeedWinnerProxy.on(SpeedWinnerGameEvent.NORMALONEEND, function (data) {
            _this17.normalSetTotalNum(data.index);
            if (data.index == 5) {
              //普通模式停下来模块宽度变化
              _this17.changeRunHeight(true);
            }
          }, this);
          //快速模式到达终点
          SpeedWinnerProxy.on(SpeedWinnerGameEvent.FASTEND, function (data) {
            if (data.index == 5) {
              //快速模式停下来模块宽度变化
              //快速模式头部数量显示
              _this17.setTotalNum(true, false, 0);
              //快速模式停下来模块宽度变化
              _this17.changeRunHeight(true);
            }
          }, this);

          //转盘提示
          SpeedWinnerProxy.on(SpeedWinnerGameEvent.CLICK_ITEM, function (data) {
            if (_this17._auto) return;
            if (_this17._isFree) return;
            if (data.pos.y > 300) {
              _this17._window.node.scale = v3(1, 1, 1);
              _this17._window.node.active = true;
              _this17._window.showCard(data);
              _this17.windowMask.active = true;
              _this17.windowMask1.active = true;
              _this17.windowMask2.active = true;
              var pos = data.pos;
              pos = _this17.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
              if (data._parentI <= 2) {
                pos.x += 61;
              } else {
                pos.x -= 61;
              }
              _this17._window.node.setPosition(pos.x, pos.y);
            }
          }, this);
          SpeedWinnerProxy.on(SpeedWinnerGameEvent.ERROR, function () {
            _this17._auto = false;
            _this17._isFree = false;
            _this17.changeState(RunState.NORMAL);
          }, this);
          this.free_dialog_cancel.on(Node.EventType.MOUSE_ENTER, function () {
            if (!_this17.free_dialog_cancel_spine.node.active) {
              _this17.free_dialog_cancel_spine.node.active = true;
            }
          }, this);
          this.free_dialog_cancel.on(Node.EventType.MOUSE_LEAVE, function () {
            if (_this17.free_dialog_cancel_spine.node.active) {
              _this17.free_dialog_cancel_spine.node.active = false;
            }
          }, this);
          this.free_dialog_sure.on(Node.EventType.MOUSE_ENTER, function () {
            if (!_this17.free_dialog_sure_spine.node.active) {
              _this17.free_dialog_sure_spine.node.active = true;
            }
          }, this);
          this.free_dialog_sure.on(Node.EventType.MOUSE_LEAVE, function () {
            if (_this17.free_dialog_sure_spine.node.active) {
              _this17.free_dialog_sure_spine.node.active = false;
            }
          }, this);

          //修改下注金额
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.on(ConfigManager.eventTransform.setQuick, this.clickChangeQuick, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);

          //大奖金额变化
          EventManager.on(ConfigManager.eventTransform.scrollNumberEvent, this.bigWinEnd, this);
        }
        //关闭大奖动画
        ;

        _proto.hideBigWin = function hideBigWin() {
          if (this._state == RunState.BIG_WIN) {
            //在update中关闭大奖状态
            this._runTime = 0.5;
          }
        }
        //金额到达终点
        ;

        _proto.bigWinEnd = function bigWinEnd() {
          if (this.big_win.node.active && !this._isEndBigWin && SpeedWinnerProxy.result.prizeAmount - 200 <= parseInt(this.big_win_txt.string.replace(/,/g, "")) && parseInt(this.big_win_txt.string.replace(/,/g, "")) <= SpeedWinnerProxy.result.prizeAmount + 200) {
            AudioManager.instance.stopSound(this._audioId);
            this._isEndBigWin = true;
            this._runTime = 5;
            SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.bgm_bigwin_end);
          }
        }

        //隐藏介绍图
        ;

        _proto.hideWindow = function hideWindow() {
          this.windowMask.active = false;
          this.windowMask1.active = false;
          this.windowMask2.active = false;
          this._window.hideCard();
        }

        //普通模式/免费模式背景图切换
        ;

        _proto.changeModeBg = function changeModeBg() {
          if (this._isFree) {
            this.topLight.setAnimation(0, "free_up", true);
            this.bottomLight.setAnimation(0, "free_down", true);
            this.botFreeBg.node.active = true;
            this.topBg.getComponent(Sprite).spriteFrame = this.freeBg[0];
            this.midBg.getComponent(Sprite).spriteFrame = this.freeBg[1];
            this.botBg.getComponent(Sprite).spriteFrame = this.freeBg[2];
          } else {
            this.topLight.setAnimation(0, "normal_up", true);
            this.bottomLight.setAnimation(0, "normal_down", true);
            this.botFreeBg.node.active = false;
            this.topBg.getComponent(Sprite).spriteFrame = this.normalBg[0];
            this.midBg.getComponent(Sprite).spriteFrame = this.normalBg[1];
            this.botBg.getComponent(Sprite).spriteFrame = this.normalBg[2];
          }
        }

        //普通模式开启游戏按钮动画
        ;

        _proto.startGameAni = function startGameAni(isMove) {
          var _this18 = this;
          if (this._auto) return;
          if (this._isFree) return;
          if (isMove) {
            this.turn_start.setAnimation(0, "star", false);
            this.scheduleOnce(function () {
              if (SpeedWinnerProxy.result && SpeedWinnerProxy.result.prizeAmount > 0) {
                _this18.turn_start.addAnimation(0, "stop", true);
              } else {
                _this18.turn_start.addAnimation(0, "idle", true);
              }
            }, 1);
          } else {
            this.turn_start.timeScale = 1;
            this.turn_start.setAnimation(0, "idle", true);
          }
        };
        _proto.clear = function clear() {
          var _this19 = this;
          //3.8.3spine 回调泄漏问题临时处理
          if (window["TrackEntryListeners"]) {
            window["TrackEntryListeners"]._listenerSet.clear();
          }
          if (!this._auto) {
            tween(this.free_buy.getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
          } else {
            this.free_buy.getComponent(UIOpacity).opacity = 100;
          }

          //this.txt_win.reset();

          this.updateGoldData();
          this._free_count == 0 ? this._total_multiple = 0 : "";
          this._win_totalMoney = 0;
          this._scatteNum = 0;
          this.big_win.node.active = false;
          this.big_winBg.active = false;
          this.big_win_txt.reset();

          //this._current_result = null;
          if (this._current_result.FreeInfo.Count > 0 && !this._isFree) {
            this.scheduleOnce(function () {
              _this19._isLock = false;
            }, 2.5);
          } else {
            this._isLock = false;
          }
          this._current_resultIndex = 0;
          this.checkDownOrUpBet();
        }

        //普通模式计算卡片个数
        ;

        _proto.normalSetTotalNum = function normalSetTotalNum(index) {
          if (this._current_result.Res) {
            if (this.top_totalNum.string == "...") {
              this.top_totalNum.string = this._current_result.Res[this._current_resultIndex].AllPosMsg[index].length;
            } else {
              var totalNum = parseInt(this.top_totalNum.string) * this._current_result.Res[this._current_resultIndex].AllPosMsg[index].length;
              this.top_totalNum.string = totalNum + "";
            }
          }
        }

        //计算头部总卡片个数
        ;

        _proto.setTotalNum = function setTotalNum(isGet, isInit, index) {
          var _this20 = this;
          if (isGet === void 0) {
            isGet = false;
          }
          if (isInit === void 0) {
            isInit = false;
          }
          if (index === void 0) {
            index = 0;
          }
          //index != 0 递增模式
          var totalNum = 1;
          if (isGet) {
            var res = this._current_result.Res[this._current_resultIndex].AllPosMsg;
            if (isInit) {
              res = this._current_result.Res[this._current_result.Res.length - 1].AllPosMsg;
              for (var i = 0; i < res.length; i++) {
                totalNum *= res[i].length;
              }
              this.top_totalNum.string = totalNum + "";
            } else if (index == 0) {
              if (this._runDelay == 0) {
                for (var _i5 = 0; _i5 < res.length; _i5++) {
                  totalNum *= res[_i5].length;
                }
                this.top_totalNum.string = totalNum + "";
              } else {
                var data = [];
                for (var _i6 = 0; _i6 < res.length; _i6++) {
                  data.push(res[_i6].length);
                }
                data.map(function (item, index) {
                  _this20.scheduleOnce(function () {
                    totalNum *= item;
                    _this20.top_totalNum.string = totalNum + "";
                  }, index / 10);
                });
              }
            } else {
              for (var _i7 = 0; _i7 < res.length; _i7++) {
                totalNum *= res[_i7].length;
              }
              var disparity = totalNum - parseInt(this.top_totalNum.string);
              var time = 0.5 / Math.abs(disparity) * 150;
              var timer = function timer() {
                if (disparity > 0) {
                  _this20.top_totalNum.string = parseInt(_this20.top_totalNum.string) + 150 + "";
                  if (parseInt(_this20.top_totalNum.string) >= totalNum) {
                    _this20.top_totalNum.string = totalNum + "";
                    _this20.unschedule(timer);
                  }
                } else {
                  _this20.top_totalNum.string = parseInt(_this20.top_totalNum.string) - 150 + "";
                  if (parseInt(_this20.top_totalNum.string) <= totalNum) {
                    _this20.top_totalNum.string = totalNum + "";
                    _this20.unschedule(timer);
                  }
                }
              };
              this.schedule(timer, time);
            }
          } else {
            this.top_totalNum.string = "...";
          }
        };
        _proto.clickBigWinClick = function clickBigWinClick() {
          if (this.big_win_txt.string != this._win_totalMoney + "") {
            this.big_win_txt.stepCount = 0.1;
            this.big_win_txt.reset(this._win_totalMoney);
            //动画直接跳到对应的最终动画
            var aniname = "";
            var odd = this._win_totalMoney / this._bet;
            if (odd >= 20 && odd < 30) {
              aniname = "bigwin_";
            } else if (odd >= 30 && odd < 50) {
              aniname = "megawin_";
            } else if (odd >= 50) {
              aniname = "superwin_";
            }
            this.big_win.setAnimation(0, aniname + "idle", true);
          }
          this._isEndBigWin = true;
          if (this._runTime > 2) this._runTime = 2;
        }

        //展示购买免费弹框
        ;

        _proto.clickShowBuyFree = function clickShowBuyFree() {
          var _this21 = this;
          if (!this._isLock && !this._auto) {
            this.scheduleOnce(function () {
              _this21.free_num.string = Common.numFormat(50 * _this21._bet + "");
              _this21.turn_start.setAnimation(0, "stop", true);
              _this21.free_dialog.active = true;
            }, 0.1);
          }
        };
        _proto.clickHideBuyFree = function clickHideBuyFree() {
          var _this22 = this;
          this.scheduleOnce(function () {
            _this22.free_dialog.active = false;
            _this22.turn_start.setAnimation(0, "idle", true);
          }, 0.1);
        };
        _proto.clickSubmitBuyFree = function clickSubmitBuyFree() {
          this.free_dialog.active = false;
          this.preStart(true);
        }

        //底部按钮和金额样式修改
        ;

        _proto.changeBtnActive = function changeBtnActive(b) {
          if (this._auto) {
            return;
          }
          if (b) {
            if (SpeedWinnerProxy.getBet() == 2000) {
              this.normalBtn.getChildByName("increase").getComponent(UIOpacity).opacity = 100;
              this._isMinBet = true;
            } else {
              this.normalBtn.getChildByName("increase").getComponent(UIOpacity).opacity = 255;
              this._isMinBet = false;
            }
            this.normalBtn.getChildByName("add").getComponent(UIOpacity).opacity = 255;
            this.normalBtn.getChildByName("auto").getComponent(UIOpacity).opacity = 255;
          } else {
            this.normalBtn.getChildByName("increase").getComponent(UIOpacity).opacity = 100;
            this.normalBtn.getChildByName("add").getComponent(UIOpacity).opacity = 100;
            this.normalBtn.getChildByName("auto").getComponent(UIOpacity).opacity = 100;
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

        //是否启动加速
        ;

        _proto.clickChangeQuick = function clickChangeQuick() {
          if (this._runDelay == 0) {
            this._runDelay = 0.2;
            this.spine_quick.setAnimation(0, "off", true);
          } else {
            this._runDelay = 0;
            this.spine_quick.setAnimation(0, "intro_on", false);
            this.spine_quick.addAnimation(0, "on", true);
          }
        }

        //展示下注金额
        ;

        _proto.clickShowBet = function clickShowBet() {
          // if (this._auto) return;
          // if (!this.checkReady()) return;
          if (!this._isLock && !this._auto) {
            Common.loadPopPublic("prefab/fortuneCommon/FortuneSetBase", function () {}, function (prefab) {
              var node = instantiate(prefab);
              ViewManager.instance.popNodeView(node, true);
              if (!sys.isMobile) {
                node.scale = v3(750 / 1334, 750 / 1334, 1);
              } else {
                node.angle = 90;
              }
              node.getComponent(FortuneSetBase).setData({
                _curBetListIndex: SpeedWinnerProxy._curBetListIndex,
                _curBetCount: SpeedWinnerProxy._curBetCount,
                betMaxCount: SpeedWinnerProxy.betMaxCount,
                betList: SpeedWinnerProxy.betList,
                betRate: SpeedWinnerProxy.betRate
              });
            }, true);
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
          this._bet = SpeedWinnerProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet);
          this.txt_betFree.string = Common.numFormat(this._bet);
        }
        //更新下注金额
        ;

        _proto.setBet = function setBet(betListIndex, betCount) {
          SpeedWinnerProxy.setBet(betListIndex, betCount);
          this.checkDownOrUpBet();
        }
        //按钮减少下注金额
        ;

        _proto.clickDownBet = function clickDownBet() {
          if (this._isMinBet) return;
          if (this._auto) return;
          if (this._isLock) return;
          SpeedWinnerProxy._curBetCount--;
          if (SpeedWinnerProxy._curBetCount < 0) {
            SpeedWinnerProxy._curBetListIndex--;
            if (SpeedWinnerProxy._curBetListIndex < 0) {
              SpeedWinnerProxy._curBetListIndex++;
              SpeedWinnerProxy._curBetCount++;
            } else {
              SpeedWinnerProxy._curBetCount = SpeedWinnerProxy.betMaxCount - 1;
              SpeedWinnerProxy.setBet(SpeedWinnerProxy._curBetListIndex, SpeedWinnerProxy._curBetCount);
            }
          } else {
            SpeedWinnerProxy.setBet(SpeedWinnerProxy._curBetListIndex, SpeedWinnerProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //按钮增加下注金额
        ;

        _proto.clickUpBet = function clickUpBet() {
          if (this._auto) return;
          if (this._isLock) return;
          // if (!this.checkReady()) return;

          SpeedWinnerProxy._curBetCount++;
          if (SpeedWinnerProxy._curBetCount >= SpeedWinnerProxy.betMaxCount) {
            SpeedWinnerProxy._curBetListIndex++;
            if (SpeedWinnerProxy._curBetListIndex >= SpeedWinnerProxy.betList.length) {
              SpeedWinnerProxy._curBetListIndex--;
              SpeedWinnerProxy._curBetCount--;
            } else {
              SpeedWinnerProxy._curBetCount = 0;
              SpeedWinnerProxy.setBet(SpeedWinnerProxy._curBetListIndex, SpeedWinnerProxy._curBetCount);
            }
          } else {
            SpeedWinnerProxy.setBet(SpeedWinnerProxy._curBetListIndex, SpeedWinnerProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }

        //确定下注金额是否可以减少/增加
        ;

        _proto.checkDownOrUpBet = function checkDownOrUpBet() {
          if (this._auto) return;
          if (this._isLock) return;
          if (SpeedWinnerProxy.getBet() == 2000) {
            this.normalBtn.getChildByName("increase").getComponent(UIOpacity).opacity = 100;
            this._isMinBet = true;
          } else {
            this.normalBtn.getChildByName("increase").getComponent(UIOpacity).opacity = 255;
            this._isMinBet = false;
          }
          if (SpeedWinnerProxy.getBet() == 1000000) {
            this.normalBtn.getChildByName("add").getComponent(UIOpacity).opacity = 100;
          } else {
            this.normalBtn.getChildByName("add").getComponent(UIOpacity).opacity = 255;
          }
        }
        //展示自动下注弹出框
        ;

        _proto.clickShowAutoBet = function clickShowAutoBet() {
          var _this23 = this;
          if (!this._isLock && !this._auto && !this._isFree) {
            Common.loadPopPublic("prefab/fortuneCommon/FortuneSetAuto", function () {}, function (prefab) {
              var node = instantiate(prefab);
              ViewManager.instance.popNodeView(node, true);
              if (!sys.isMobile) {
                node.scale = v3(750 / 1334, 750 / 1334, 1);
              } else {
                node.angle = 90;
              }
              node.getComponent(FortuneSetAuto).setData({
                gold: parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)),
                bet: _this23._bet,
                win: 0
              });
            }, true);
          }
        }
        //底部返回首页
        ;

        _proto.clickBottomBackHome = function clickBottomBackHome() {
          Common.returnToHall(this, SpeedWinnerProxy.BUNDLE);
        }
        //展示规则
        ;

        _proto.clickShowRule = function clickShowRule() {
          Common.loadPopBuddle("prefab/SpeedWinnerHelp", SpeedWinnerProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.setScale(v3(750 / 1334, 750 / 1334, 1));
            } else {
              node.angle = 90;
            }
          }, true);
        }
        //展示历史记录
        ;

        _proto.clickShowHistory = function clickShowHistory() {
          if (!this._isLock && !this._auto && !this._isFree) {
            Common.loadPopPublic("prefab/fortuneCommon/FortuneHistory", function () {}, function (prefab) {
              var node = instantiate(prefab);
              ViewManager.instance.popNodeView(node, true);
              if (!sys.isMobile) {
                node.scale = v3(750 / 1334, 750 / 1334, 1);
              } else {
                node.angle = 90;
              }
              node.getComponent(FortuneHistory).setGameType("slotSpeedWinner");
            }, true);
          }
        }

        //展示排行榜
        ;

        _proto.clickShowRank = function clickShowRank() {
          Common.loadPopPublic("prefab/fortuneCommon/FortuneRank", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneRank).send("slotSpeedWinner");
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
          EventManager.off(ConfigManager.eventTransform.scrollNumberEvent, this.bigWinEnd, this);
        };
        return SpeedWinnerView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_card", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_windowItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "moreBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "windowMask", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "windowMask1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "windowMask2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "normalBg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "freeBg", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "topLight", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bottomLight", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "topBg", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "midBg", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "botBg", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "botFreeBg", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lightBox", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "multipleBox", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "multipleTotal", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "multipleNum", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "copyMultipleNum", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "multipleSpine", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "top_totalNum", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "spine_quick", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "notice_parent", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "notice_normal_bg", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "notice_bg", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "notice_win", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "notice_win_txt", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "notice_topWin", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "notice_topWinBg", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "notice_botWin", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "notice_botWin_boom", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "turn_start", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "turn_aniLines", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "turn_aniTran", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "turn_auto_leftCount", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "free_dialog", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "free_num", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "free_buy", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "free_dialog_cancel", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "free_dialog_cancel_spine", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "free_dialog_sure", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "free_dialog_sure_spine", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "big_winBg", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "big_win", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "big_win_txt", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "free_start", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "free_start_time", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "free_start_font", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "free_startBtn", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "free_win", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "free_winTxt", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, "free_winBtn", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor59 = _applyDecoratedDescriptor(_class2.prototype, "free_bottom", [_dec61], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor60 = _applyDecoratedDescriptor(_class2.prototype, "free_bottom_time", [_dec62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor61 = _applyDecoratedDescriptor(_class2.prototype, "free_add", [_dec63], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor62 = _applyDecoratedDescriptor(_class2.prototype, "free_add_time", [_dec64], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor63 = _applyDecoratedDescriptor(_class2.prototype, "txt_betFree", [_dec65], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor64 = _applyDecoratedDescriptor(_class2.prototype, "txt_winFree", [_dec66], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor65 = _applyDecoratedDescriptor(_class2.prototype, "txt_goldFree", [_dec67], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor66 = _applyDecoratedDescriptor(_class2.prototype, "tranRunMask", [_dec68], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor67 = _applyDecoratedDescriptor(_class2.prototype, "runMask", [_dec69], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor68 = _applyDecoratedDescriptor(_class2.prototype, "lightMask", [_dec70], {
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

System.register("chunks:///_virtual/SPeedWinnerWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SPeedWinnerDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, sp, Sprite, v3, UITransform, Label, Component, SPeedWinnerDef;
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
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SPeedWinnerDef = module.SPeedWinnerDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
      cclegacy._RF.push({}, "f6373BNb6VHr5IRSGmldaHK", "SPeedWinnerWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /*
      SCATTER BonusSymbol = 0
      WILD BonusSymbol = 1
      MULTIPLE BonusSymbol = 2
      CAR BonusSymbol = 3
      WHEEL BonusSymbol = 4
      OILGUN BonusSymbol = 5
      GLOVE BonusSymbol = 6
      TOOL BonusSymbol = 7
      A BonusSymbol = 8
      K BonusSymbol = 9
      Q BonusSymbol = 10
      J BonusSymbol = 11
      TEN BonusSymbol = 12
      */
      var betList = {
        CAR: [50, 40, 25, 20],
        WHEEL: [40, 30, 20, 10],
        OILGUN: [30, 20, 15, 8],
        GLOVE: [15, 12, 10, 6],
        TOOL: [15, 12, 10, 6],
        A: [10, 8, 6, 4],
        K: [10, 8, 6, 4],
        Q: [4, 3, 2, 1],
        J: [4, 3, 2, 1],
        TEN: [4, 3, 2, 1]
      };
      var scatterContent = '4 biểu tượng Scatter sẽ kích hoạt vòng quay miễn phí';
      var wildContent = 'Biểu tượng Wild thay thế cho tất cả các biểu tượng trừ các  biểu tượng Scatter.';
      var multiplContent = 'Biểu tượng Số nhân';
      var SPeedWinnerWindow = exports('SPeedWinnerWindow', (_dec = ccclass('SPeedWinnerWindow'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(sp.SkeletonData), _dec15 = property(SpriteFrame), _dec16 = property(SpriteFrame), _dec17 = property(sp.Skeleton), _dec18 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SPeedWinnerWindow, _Component);
        function SPeedWinnerWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgLeft", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgRight", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "SCATTERBgList", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WILDBgList", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "MULTIPLEBgList", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "CARBgList", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WHEELBgList", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "OILGUNBgList", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "GLOVEBgList", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "TOOLBgList", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "OTHERBgList", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildList", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconList", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "doubleList", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildLeft", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildRight", _descriptor17, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SPeedWinnerWindow.prototype;
        _proto.start = function start() {};
        _proto.showCard = function showCard(data) {
          //console.log(data)
          if (data._type == 'bottom') {
            if (data._parentI <= 2) {
              this.bgLeft.active = true;
              this.bgRight.active = false;
              this.bgLeft.getComponent(Sprite).spriteFrame = this.bgList[data._cardData.Length - 1];
              this.cardDetail(data._cardData, 'left');
            } else {
              this.bgLeft.active = false;
              this.bgRight.active = true;
              this.bgRight.getComponent(Sprite).spriteFrame = this.bgList[data._cardData.Length - 1];
              this.cardDetail(data._cardData, 'right');
            }
          } else {
            if (data._myI <= 1) {
              this.bgLeft.active = true;
              this.bgRight.active = false;
              this.bgLeft.getComponent(Sprite).spriteFrame = this.bgList[data._cardData.Length - 1];
              this.cardDetail(data._cardData, 'left');
            } else {
              this.bgLeft.active = false;
              this.bgRight.active = true;
              this.bgRight.getComponent(Sprite).spriteFrame = this.bgList[data._cardData.Length - 1];
              this.cardDetail(data._cardData, 'right');
            }
          }
          SPeedWinnerDef.palyAudio(SPeedWinnerDef.audio.uiInfo);
          this.node.active = true;
        };
        _proto.cardDetail = function cardDetail(data, type) {
          var target = null;
          if (type == 'left') {
            target = this.node.getChildByName('bgLeft');
            target.getChildByName('content').setPosition(v3(75, 0, 0));
          } else {
            target = this.node.getChildByName('bgRight');
            target.getChildByName('content').setPosition(v3(-65, 0, 0));
          }
          target.getChildByName('content').getComponent(UITransform).width = 130;
          target.getComponent(UITransform).width = 263;
          if (data.Sym == 0) {
            target.getComponent(UITransform).width = 300;
            target.getChildByName('icon').active = false;
            target.getChildByName('bet').active = false;
            target.getChildByName('content').active = true;
            target.getChildByName('wild').active = false;
            target.getChildByName('double').active = false;
            target.getChildByName('scatterBg').getComponent(Sprite).spriteFrame = this.CARBgList[data.Length - 1];
            target.getChildByName('scatterBg').active = true;
            target.getChildByName('iconBg').active = false;
            target.getChildByName('scatter').active = true;
            target.getChildByName('content').getComponent(Label).string = scatterContent;
          } else if (data.Sym == 1) {
            target.getComponent(UITransform).width = 300;
            target.getChildByName('iconBg').active = false;
            target.getChildByName('icon').active = false;
            target.getChildByName('scatterBg').active = false;
            target.getChildByName('bet').active = false;
            target.getChildByName('double').active = false;
            target.getChildByName('content').active = true;
            target.getChildByName('scatter').active = false;
            target.getChildByName('wild').active = true;
            if (type == 'left') {
              target.getChildByName('content').setPosition(v3(70, 0, 0));
              this.wildLeft.node.active = true;
              this.wildLeft.skeletonData = this.wildList[data.Length - 1];
            } else {
              target.getChildByName('content').setPosition(v3(-70, 0, 0));
              this.wildRight.node.active = true;
              this.wildRight.skeletonData = this.wildList[data.Length - 1];
            }
            target.getChildByName('content').getComponent(Label).string = wildContent;
          } else if (data.Sym == 2) {
            target.getComponent(UITransform).width = 300;
            target.getChildByName('bet').active = false;
            target.getChildByName('content').active = true;
            target.getChildByName('scatter').active = false;
            target.getChildByName('wild').active = false;
            target.getChildByName('iconBg').active = false;
            target.getChildByName('icon').active = false;
            target.getChildByName('content').getComponent(UITransform).width = 175;
            type == 'left' ? target.getChildByName('content').setPosition(68, 0) : '';
            target.getChildByName('content').getComponent(Label).string = multiplContent;
            target.getChildByName('scatterBg').getComponent(Sprite).spriteFrame = this.MULTIPLEBgList[data.Length - 1];
            target.getChildByName('scatterBg').active = true;
            target.getChildByName('double').getComponent(Sprite).spriteFrame = this.doubleList[data.MultipleVal - 2];
            target.getChildByName('double').active = true;
          } else {
            target.getComponent(UITransform).width = 263;
            target.getChildByName('content').active = false;
            target.getChildByName('scatter').active = false;
            target.getChildByName('wild').active = false;
            target.getChildByName('scatterBg').active = false;
            target.getChildByName('double').active = false;
            if (data.Sym == 3) {
              target.getChildByName('iconBg').getComponent(Sprite).spriteFrame = this.CARBgList[data.Length - 1];
              target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[0];
              target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList['CAR'][0] + '';
              target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList['CAR'][1] + '';
              target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList['CAR'][2] + '';
              target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList['CAR'][3] + '';
            } else if (data.Sym == 4) {
              target.getChildByName('iconBg').getComponent(Sprite).spriteFrame = this.WHEELBgList[data.Length - 1];
              target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[1];
              target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList['WHEEL'][0] + '';
              target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList['WHEEL'][1] + '';
              target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList['WHEEL'][2] + '';
              target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList['WHEEL'][3] + '';
            } else if (data.Sym == 5) {
              target.getChildByName('iconBg').getComponent(Sprite).spriteFrame = this.OILGUNBgList[data.Length - 1];
              target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[2];
              target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList['OILGUN'][0] + '';
              target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList['OILGUN'][1] + '';
              target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList['OILGUN'][2] + '';
              target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList['OILGUN'][3] + '';
            } else if (data.Sym == 6) {
              target.getChildByName('iconBg').getComponent(Sprite).spriteFrame = this.GLOVEBgList[data.Length - 1];
              target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[3];
              target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList['GLOVE'][0] + '';
              target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList['GLOVE'][1] + '';
              target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList['GLOVE'][2] + '';
              target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList['GLOVE'][3] + '';
            } else if (data.Sym == 7) {
              target.getChildByName('iconBg').getComponent(Sprite).spriteFrame = this.TOOLBgList[data.Length - 1];
              target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[4];
              target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList['TOOL'][0] + '';
              target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList['TOOL'][1] + '';
              target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList['TOOL'][2] + '';
              target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList['TOOL'][3] + '';
            } else if (data.Sym == 8) {
              target.getChildByName('iconBg').getComponent(Sprite).spriteFrame = this.OTHERBgList[data.Length - 1];
              target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[5];
              target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList['A'][0] + '';
              target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList['A'][1] + '';
              target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList['A'][2] + '';
              target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList['A'][3] + '';
            } else if (data.Sym == 9) {
              target.getChildByName('iconBg').getComponent(Sprite).spriteFrame = this.OTHERBgList[data.Length - 1];
              target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[6];
              target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList['K'][0] + '';
              target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList['K'][1] + '';
              target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList['K'][2] + '';
              target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList['K'][3] + '';
            } else if (data.Sym == 10) {
              target.getChildByName('iconBg').getComponent(Sprite).spriteFrame = this.OTHERBgList[data.Length - 1];
              target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[7];
              target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList['Q'][0] + '';
              target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList['Q'][1] + '';
              target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList['Q'][2] + '';
              target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList['Q'][3] + '';
            } else if (data.Sym == 11) {
              target.getChildByName('iconBg').getComponent(Sprite).spriteFrame = this.OTHERBgList[data.Length - 1];
              target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[8];
              target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList['J'][0] + '';
              target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList['J'][1] + '';
              target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList['J'][2] + '';
              target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList['J'][3] + '';
            } else if (data.Sym == 12) {
              target.getChildByName('iconBg').getComponent(Sprite).spriteFrame = this.OTHERBgList[data.Length - 1];
              target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[9];
              target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList['TEN'][0] + '';
              target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList['TEN'][1] + '';
              target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList['TEN'][2] + '';
              target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList['TEN'][3] + '';
            }
            target.getChildByName('bet').active = true;
            target.getChildByName('iconBg').active = true;
            target.getChildByName('icon').active = true;
          }
        };
        _proto.hideCard = function hideCard() {
          this.node.active = false;
        };
        return SPeedWinnerWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgLeft", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgRight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SCATTERBgList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "WILDBgList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "MULTIPLEBgList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "CARBgList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "WHEELBgList", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "OILGUNBgList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "GLOVEBgList", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "TOOLBgList", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "OTHERBgList", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "wildList", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "iconList", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "doubleList", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "wildLeft", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "wildRight", [_dec18], {
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
  r('virtual:///prerequisite-imports/SpeedWinnerGame', 'chunks:///_virtual/SpeedWinnerGame'); 
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