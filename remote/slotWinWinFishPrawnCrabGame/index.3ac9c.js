System.register("chunks:///_virtual/slotWinWinFishPrawnCrabDef.ts", ['cc', './slotWinWinFishPrawnCrabProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, AudioClip, slotWinWinFishPrawnCrabProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      slotWinWinFishPrawnCrabProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "12528Od0uVAkK8dgIYvPAQo", "slotWinWinFishPrawnCrabDef", undefined);
      var slotWinWinFishPrawnCrabDef = exports('slotWinWinFishPrawnCrabDef', /*#__PURE__*/function () {
        function slotWinWinFishPrawnCrabDef() {}
        slotWinWinFishPrawnCrabDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = slotWinWinFishPrawnCrabProxy.bundle;
          var path = "sound/" + name;
          //console.log(name, 'a')
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
        slotWinWinFishPrawnCrabDef.palyMusic = function palyMusic(name) {
          var bundle = slotWinWinFishPrawnCrabProxy.bundle;
          var path = "sound/" + name;
          //console.log(name, 'm')
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return slotWinWinFishPrawnCrabDef;
      }());
      slotWinWinFishPrawnCrabDef.audio = {
        prizeSmallwin: "prizeSmallwin",
        //消除播放 done
        prizeSmallwinMultiplied: "prizeSmallwinMultiplied",
        //普通模式倍数相乘金额播放 done
        symShrink: "symShrink",
        //消失声 done
        prizeInfobarTotalwin: "prizeInfobarTotalwin",
        //5倍以下总金额播放 done
        bgm_mg: "bgmMg",
        //普通模式背景音乐 done
        bgm_fs: "bgmFs",
        //特殊模式背景音乐  done
        spinBtn: "spinBtn",
        //转动最开始播放  done
        spinStop: "spinStop",
        //12345轴落下声音   done
        spinStopQuick: "spinStopQuick",
        //快速模式落下后播放  done
        symWild: "symWild",
        //界面Wild播放动画声音 done
        multiUp: "multiUp",
        //倍数变化的声音 done
        symScatter: "symScatter",
        //界面Scatter播放动画声音 done
        heartbeat: "heartbeat",
        //期待光效循环播放
        heartbeatNoise: "heartbeatNoise",
        //期待光效播放  done
        heartbeatSlowdrop: "heartbeatSlowdrop",
        //期待符号落下  done
        scatterWinHighlight: "scatterWinHighlight",
        //中免费scatter一起播动画声  done
        prizeInfobarTotalwinMedMain: "prizeInfobarTotalwinMedMain",
        //总奖金5倍以上声  done
        prizeInfobarTotalwinMedEnd: "prizeInfobarTotalwinMedEnd",
        //总奖金5倍以上声结束   done
        fastspinStart: "fastspinStart",
        //旋转光效按顺序播放 done
        fastsipnEnd: "fastsipnEnd",
        //旋转光效没进入成功
        fsTrans: "fsTrans",
        //免费加载页  done
        uiStart: "uiStart",
        //免费弹出框按钮点击  done
        fsReset: "fsReset",
        //收集生命播放 done
        fsCount: "fsCount",
        //免费模式轮数有变化播放 done
        multiFly: "multiFly",
        //免费模式倍数乘以金额播放 done
        bgmBigwinMain: "bgmBigwinMain",
        //中大奖动画   done
        bgmBigwinEnd: "bgmBigwinEnd",
        //中大奖结束动画  done
        bgmTotalwinMain: "bgmTotalwinMain",
        //免费模式总奖播放 done
        bgmTotalwinEnd: "bgmTotalwinEnd",
        //免费模式总奖结束播放 done
        uiInfo: "uiInfo" //符号点击开声 done
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotWinWinFishPrawnCrabGame", ['./slotWinWinFishPrawnCrabDef.ts', './slotWinWinFishPrawnCrabItem.ts', './slotWinWinFishPrawnCrabProxy.ts', './slotWinWinFishPrawnCrabScene.ts', './slotWinWinFishPrawnCrabView.ts', './slotWinWinFishPrawnCrabViewRun.ts', './slotWinWinFishPrawnCrabWindow.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/slotWinWinFishPrawnCrabItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotWinWinFishPrawnCrabProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, sp, UITransform, Sprite, v3, Component, slotWinWinFishPrawnCrabProxy, slotWinWinFishPrawnCrabGameEvent;
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
      Node = module.Node;
      sp = module.sp;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      slotWinWinFishPrawnCrabProxy = module.default;
      slotWinWinFishPrawnCrabGameEvent = module.slotWinWinFishPrawnCrabGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "139e9jtHBFEnqFbbycHtK01", "slotWinWinFishPrawnCrabItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /*
      SCATTER BonusSymbol = 1
      WILD BonusSymbol = 2
      JI BonusSymbol = 3
      XIE BonusSymbol = 4
      TONGBI BonusSymbol = 5
      HULU BonusSymbol = 6
      XIA BonusSymbol = 7
      YU BonusSymbol = 8
      A BonusSymbol = 9
      K BonusSymbol = 10
      Q BonusSymbol = 11
      J BonusSymbol = 12
        纯白：a,k,q,j 
      蓝：蟹 
      绿：虾
      红：鱼
      白镶边：鸡，葫芦，铜
      */

      var slotWinWinFishPrawnCrabItem = exports('slotWinWinFishPrawnCrabItem', (_dec = ccclass("slotWinWinFishPrawnCrabItem"), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(sp.Skeleton), _dec11 = property(sp.Skeleton), _dec12 = property(sp.Skeleton), _dec13 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWinWinFishPrawnCrabItem, _Component);
        function slotWinWinFishPrawnCrabItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "iconBg_list", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon_list", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBg_blur_list", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon_blur_list", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBg", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wild", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatterBg", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatterWait", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatterWait1", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zhaSpine", _descriptor12, _assertThisInitialized(_this));
          _this._sym = null;
          _this._parentIndex = null;
          return _this;
        }
        var _proto = slotWinWinFishPrawnCrabItem.prototype;
        _proto.start = function start() {}
        //parentIndex : 父节点索引 isClear:是否用清晰的图  isInit针对scatter和wild
        ;

        _proto.initItem = function initItem(sym, parentIndex, isClear, gameTime, isInit) {
          if (isClear === void 0) {
            isClear = true;
          }
          if (gameTime === void 0) {
            gameTime = 10;
          }
          if (isInit === void 0) {
            isInit = false;
          }
          this._sym = sym;
          this._parentIndex = parentIndex;
          this.scatter.node.active = false;
          this.wild.node.active = false;
          this.icon.active = false;
          this.iconBg.active = false;
          if (sym == 1) {
            this.scatter.timeScale = 1;
            if (isInit) {
              this.scatter.node.active = true;
              this.scatter.setAnimation(0, "idle", true);
              this.node.getComponent(UITransform).priority = 90;
            } else {
              this.icon.active = true;
              this.icon.getComponent(Sprite).spriteFrame = this.icon_list[sym - 1];
            }
          } else if (sym == 2) {
            if (isInit) {
              this.wild.node.active = true;
              this.wild.setAnimation(0, "idle", true);
              this.node.getComponent(UITransform).priority = 90;
            } else {
              this.icon.active = true;
              this.icon.getComponent(Sprite).spriteFrame = this.icon_list[sym - 1];
            }
          } else {
            isClear ? this.icon.getComponent(Sprite).spriteFrame = this.icon_list[sym - 1] : this.icon.getComponent(Sprite).spriteFrame = this.icon_blur_list[sym - 1];
            if (sym == 9 || sym == 10 || sym == 11 || sym == 12) {
              isClear ? this.iconBg.getComponent(Sprite).spriteFrame = this.iconBg_list[4] : this.iconBg.getComponent(Sprite).spriteFrame = this.iconBg_blur_list[4];
            } else if (sym == 3 || sym == 5 || sym == 6) {
              isClear ? this.iconBg.getComponent(Sprite).spriteFrame = this.iconBg_list[0] : this.iconBg.getComponent(Sprite).spriteFrame = this.iconBg_blur_list[0];
            } else if (sym == 4) {
              isClear ? this.iconBg.getComponent(Sprite).spriteFrame = this.iconBg_list[1] : this.iconBg.getComponent(Sprite).spriteFrame = this.iconBg_blur_list[1];
            } else if (sym == 7) {
              isClear ? this.iconBg.getComponent(Sprite).spriteFrame = this.iconBg_list[3] : this.iconBg.getComponent(Sprite).spriteFrame = this.iconBg_blur_list[3];
            } else if (sym == 8) {
              isClear ? this.iconBg.getComponent(Sprite).spriteFrame = this.iconBg_list[2] : this.iconBg.getComponent(Sprite).spriteFrame = this.iconBg_blur_list[2];
            }
            this.icon.active = true;
            this.iconBg.active = true;
            this.node.getComponent(UITransform).priority = gameTime;
          }
        };
        _proto.scatterOrWildAni = function scatterOrWildAni(sym) {
          this.icon.active = false;
          if (sym == 1) {
            if (!this.scatter.node.active) {
              this.scatter.node.active = true;
              this.scatter.setAnimation(0, "spawn", false);
              this.scatter.addAnimation(0, "idle", true);
              this.node.getComponent(UITransform).priority = 90;
              this.scatterBg.node.active = true;
              this.scatterBg.setAnimation(0, "animation", true);
            }
          } else if (sym == 2) {
            if (!this.wild.node.active) {
              this.wild.node.active = true;
              this.wild.setAnimation(0, "spawn", false);
              this.wild.addAnimation(0, "idle", true);
              this.node.getComponent(UITransform).priority = 90;
            }
          }
        };
        _proto.scatterShowBg = function scatterShowBg() {
          this.scatter.addAnimation(0, "idle", true);
          this.scatterBg.node.active = true;
          this.scatterBg.setAnimation(0, "idle", true);
        };
        _proto.scatterHideBg = function scatterHideBg() {
          this.scatterBg.node.active = false;
        };
        _proto.scatterWaitTwoShow = function scatterWaitTwoShow() {
          if (!this.scatterWait.node.active) {
            this.scatter.node.active = true;
            this.scatter.setAnimation(0, "fastspin_start", true);
            this.node.getComponent(UITransform).priority = 90;
            this.scatter.timeScale = 1;
            this.scatterWait.node.active = true;
            this.scatterWait.setAnimation(0, "animation", true);
            this.scatterHideBg();
          }
        };
        _proto.scatterWaitTwoHide = function scatterWaitTwoHide() {
          if (this.scatterWait.node.active) {
            this.scatterWait.node.active = false;
            this.scatterShowBg();
          }
        };
        _proto.scatterWaitThreeShow = function scatterWaitThreeShow() {
          if (!this.scatterWait1.node.active) {
            this.scatter.node.active = true;
            this.scatter.setAnimation(0, "fastspin_start", true);
            this.node.getComponent(UITransform).priority = 90;
            this.scatter.timeScale = 1;
            this.scatterWait1.node.active = true;
            this.scatterWait1.setAnimation(0, "idle", true);
            this.scatterHideBg();
          }
        };
        _proto.scatterWaitThreeHide = function scatterWaitThreeHide() {
          if (this.scatterWait1.node.active) {
            this.scatterWait1.node.active = false;
            this.scatterShowBg();
          }
        };
        _proto.scatterOrWildAniStop = function scatterOrWildAniStop(sym) {
          if (sym == 1) {
            this.scatterBg.node.active = false;
            this.scatter.setAnimation(0, "exit", false);
            if (this.scatterWait1.node.active) {
              this.scatterWait1.node.active = false;
            }
          } else if (sym == 2) {
            this.wild.node.active = true;
            this.wild.setAnimation(0, "exit", false);
          }
        };
        _proto.showWin = function showWin() {
          var _this2 = this;
          this.node.getComponent(UITransform).priority = 101;
          this.zhaSpine.node.active = true;
          this.zhaSpine.setAnimation(0, "idle", false);
          this.zhaSpine.setCompleteListener(function () {
            _this2.zhaSpine.setCompleteListener(null);
            _this2.zhaSpine.node.active = false;
          });
          if (this._sym == 2) {
            this.wild.node.active = true;
            this.wild.setAnimation(0, "win", true);
            this.node.setScale(v3(1.15, 1.15));
            this.scheduleOnce(function () {
              _this2.wild.node.setScale(v3(1.16, 1.16));
              _this2.iconBg.setScale(v3(1.16, 1.16));
              _this2.scheduleOnce(function () {
                _this2.wild.node.setScale(v3(1.17, 1.17));
                _this2.scheduleOnce(function () {
                  _this2.wild.node.setScale(v3(0.8, 0.8));
                  _this2.scheduleOnce(function () {
                    _this2.wild.node.setScale(v3(0.3, 0.3));
                    _this2.scheduleOnce(function () {
                      _this2.wild.node.active = false;
                    }, 0.06);
                  }, 0.06);
                }, 0.06);
              }, 0.06);
            }, 0.9);
          } else {
            this.node.setScale(v3(1.15, 1.15));
            this.scheduleOnce(function () {
              _this2.icon.setScale(v3(1.16, 1.16));
              _this2.iconBg.setScale(v3(1.16, 1.16));
              _this2.scheduleOnce(function () {
                _this2.icon.setScale(v3(1.17, 1.17));
                _this2.iconBg.setScale(v3(1.17, 1.17));
                _this2.scheduleOnce(function () {
                  _this2.icon.setScale(v3(0.8, 0.8));
                  _this2.iconBg.setScale(v3(0.8, 0.8));
                  _this2.scheduleOnce(function () {
                    _this2.icon.setScale(v3(0.3, 0.3));
                    _this2.iconBg.setScale(v3(0.3, 0.3));
                    _this2.scheduleOnce(function () {
                      _this2.icon.active = false;
                      _this2.iconBg.active = false;
                    }, 0.06);
                  }, 0.06);
                }, 0.06);
              }, 0.06);
            }, 0.9);
          }
        }
        //针对scatter的动画
        ;

        _proto.animationRunFast = function animationRunFast() {
          this.scatter.timeScale = 3;
          this.scatterBg.node.active = true;
          this.scatterBg.setAnimation(0, "animation", false);
          if (!this.scatterWait1.node.active) {
            this.scatterWait1.node.active = true;
            this.scatterWait1.setAnimation(0, "idle", true);
          }
        }

        //针对scatter的动画
        ;

        _proto.animationRunNormal = function animationRunNormal() {
          this.scatter.timeScale = 1;
          this.scatterBg.node.active = false;
          if (this.scatterWait1.node.active) {
            this.scatterWait1.node.active = false;
          }
        };
        _proto.onClick = function onClick() {
          slotWinWinFishPrawnCrabProxy.emit(slotWinWinFishPrawnCrabGameEvent.CLICK_ITEM, {
            sym: this._sym,
            parentIndex: this._parentIndex,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        _proto.update = function update(deltaTime) {};
        return slotWinWinFishPrawnCrabItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconBg_list", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon_list", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconBg_blur_list", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "icon_blur_list", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconBg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "wild", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scatter", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scatterBg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "scatterWait", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "scatterWait1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "zhaSpine", [_dec13], {
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

System.register("chunks:///_virtual/slotWinWinFishPrawnCrabProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "20671AQx6xLg6MEljUzy9u3", "slotWinWinFishPrawnCrabProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotWinWinFishPrawnCrabGameEvent = exports('slotWinWinFishPrawnCrabGameEvent', /*#__PURE__*/function (slotWinWinFishPrawnCrabGameEvent) {
        slotWinWinFishPrawnCrabGameEvent["ENTER_ROOM"] = "enterRoom";
        slotWinWinFishPrawnCrabGameEvent["LEAVE_ROOM"] = "leaveRoom";
        slotWinWinFishPrawnCrabGameEvent["UPDATE_CONFIG"] = "updateConfig";
        slotWinWinFishPrawnCrabGameEvent["UPDATE_BETLIST"] = "updateBetList";
        slotWinWinFishPrawnCrabGameEvent["CLOSE_BONUS"] = "closeBonus";
        slotWinWinFishPrawnCrabGameEvent["SELECT_BET"] = "selectBet";
        slotWinWinFishPrawnCrabGameEvent["START"] = "start";
        slotWinWinFishPrawnCrabGameEvent["CLICK_ITEM"] = "clickItem";
        slotWinWinFishPrawnCrabGameEvent["ERROR"] = "errorReturn";
        slotWinWinFishPrawnCrabGameEvent["END"] = "END";
        slotWinWinFishPrawnCrabGameEvent["SHOWNEXT"] = "showNext";
        slotWinWinFishPrawnCrabGameEvent["SHOWNEXTEND"] = "showNextEnd";
        slotWinWinFishPrawnCrabGameEvent["CHANGETOPODD"] = "changeTopOdd";
        slotWinWinFishPrawnCrabGameEvent["NOTICESHOWANI"] = "noticeShowAni";
        slotWinWinFishPrawnCrabGameEvent["NOTICEHIDEANI"] = "noticeHideAni";
        return slotWinWinFishPrawnCrabGameEvent;
      }({}));
      var slotWinWinFishPrawnCrabProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(slotWinWinFishPrawnCrabProxyMgr, _ProxyBase);
        function slotWinWinFishPrawnCrabProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "slotWinWinFishPrawnCrabGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolSlotWinWinFishPrawnCrab.bet, MainManager.instance.getConfigManager().ProtocolSlotWinWinFishPrawnCrab.info];
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
        var _proto = slotWinWinFishPrawnCrabProxyMgr.prototype;
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(slotWinWinFishPrawnCrabGameEvent.SELECT_BET);
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
            if (data.cmd == ConfigManager.ProtocolSlotWinWinFishPrawnCrab.bet) {
              this.emit(slotWinWinFishPrawnCrabGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotWinWinFishPrawnCrab.info:
              {
                //console.log(JSON.stringify(data.Data))
                this.emit(slotWinWinFishPrawnCrabGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotWinWinFishPrawnCrab.bet:
              {
                this.result = data.Data;
                this.result.prizeAmount = 0;
                for (var i = 0; i < this.result.Res.length; i++) {
                  this.result.prizeAmount += this.result.Res[i].RewardMoney;
                }
                //console.log(this.result)
                // console.log(JSON.stringify(this.result));

                this.emit(slotWinWinFishPrawnCrabGameEvent.START);
                break;
              }
            // case ConfigManager.ProtocolSlotWinWinFishPrawnCrab.buyFree: {

            //     this.result = data.Data;
            //     this.result.prizeAmount = 0;
            //     for (let i = 0; i < this.result.OpenNums.length; i++) {
            //         this.result.prizeAmount += this.result.OpenNums[i].prizeAmount;
            //     }

            //     this.emit(slotWinWinFishPrawnCrabGameEvent.START);
            //     break
            // }
          }
        };

        _createClass(slotWinWinFishPrawnCrabProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return slotWinWinFishPrawnCrabProxyMgr;
      }(ProxyBase);
      var slotWinWinFishPrawnCrabProxy = exports('default', new slotWinWinFishPrawnCrabProxyMgr("slotWinWinFishPrawnCrabProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotWinWinFishPrawnCrabScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './MainManager.ts', './slotWinWinFishPrawnCrabProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, ViewManager, Common, MainManager, slotWinWinFishPrawnCrabProxy;
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
      slotWinWinFishPrawnCrabProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b98fcdpD5NFlr25Sje2ukSj", "slotWinWinFishPrawnCrabScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotWinWinFishPrawnCrabScene = exports('default', (_dec = ccclass("slotWinWinFishPrawnCrabScene"), _dec2 = menu("game/slotWinWinFishPrawnCrab/slotWinWinFishPrawnCrabScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWinWinFishPrawnCrabScene, _Component);
        function slotWinWinFishPrawnCrabScene() {
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
        var _proto = slotWinWinFishPrawnCrabScene.prototype;
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
            node.scale = v3(1080 / 1920, 1080 / 1920, 1);
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
          slotWinWinFishPrawnCrabProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          slotWinWinFishPrawnCrabProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return slotWinWinFishPrawnCrabScene;
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

System.register("chunks:///_virtual/slotWinWinFishPrawnCrabView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Common.ts', './ProxyMgr.ts', './ViewManager.ts', './slotWinWinFishPrawnCrabProxy.ts', './FortuneHistory.ts', './FortuneRank.ts', './DataManager.ts', './ScrollNumLabel.ts', './FortuneSetBase.ts', './FortuneSetAuto.ts', './MainManager.ts', './NetManager.ts', './AddSpineEffect.ts', './slotWinWinFishPrawnCrabViewRun.ts', './slotWinWinFishPrawnCrabWindow.ts', './AudioManager.ts', './slotWinWinFishPrawnCrabDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, sp, SpriteFrame, Label, instantiate, sys, UIOpacity, tween, v3, Sprite, Tween, UITransform, color, Color, Component, i18n, Common, ProxyMgr, ViewManager, slotWinWinFishPrawnCrabProxy, slotWinWinFishPrawnCrabGameEvent, FortuneHistory, FortuneRank, DataManager, UserKey, ScrollNumLabel, FortuneSetBase, FortuneSetAuto, MainManager, NetManager, AddSpineEffect, slotWinWinFishPrawnCrabViewRun, slotWinWinFishPrawnCrabWindow, AudioManager, slotWinWinFishPrawnCrabDef;
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
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      instantiate = module.instantiate;
      sys = module.sys;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      v3 = module.v3;
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
      slotWinWinFishPrawnCrabProxy = module.default;
      slotWinWinFishPrawnCrabGameEvent = module.slotWinWinFishPrawnCrabGameEvent;
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
      AddSpineEffect = module.default;
    }, function (module) {
      slotWinWinFishPrawnCrabViewRun = module.slotWinWinFishPrawnCrabViewRun;
    }, function (module) {
      slotWinWinFishPrawnCrabWindow = module.slotWinWinFishPrawnCrabWindow;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      slotWinWinFishPrawnCrabDef = module.slotWinWinFishPrawnCrabDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55;
      cclegacy._RF.push({}, "58614YvhDNAUKpQDiyTKjSy", "slotWinWinFishPrawnCrabView", undefined);
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
      var BIG_WIN_TIME1 = 10;
      var BIG_WIN_TIME2 = 14;
      var BIG_WIN_TIME3 = 18;

      /*
      SCATTER BonusSymbol = 1
      WILD BonusSymbol = 2
      JI BonusSymbol = 3
      XIE BonusSymbol = 4
      TONGBI BonusSymbol = 5
      HULU BonusSymbol = 6
      XIA BonusSymbol = 7
      YU BonusSymbol = 8
      A BonusSymbol = 9
      K BonusSymbol = 10
      Q BonusSymbol = 11
      J BonusSymbol = 12
      */
      var slotWinWinFishPrawnCrabView = exports('slotWinWinFishPrawnCrabView', (_dec = ccclass("slotWinWinFishPrawnCrabView"), _dec2 = menu("game/slotWinWinFishPrawnCrab/slotWinWinFishPrawnCrabView"), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(Node), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(Node), _dec14 = property(SpriteFrame), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(ScrollNumLabel), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(ScrollNumLabel), _dec21 = property(Label), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(sp.Skeleton), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(ScrollNumLabel), _dec33 = property(sp.Skeleton), _dec34 = property(Label), _dec35 = property(Node), _dec36 = property(sp.Skeleton), _dec37 = property(ScrollNumLabel), _dec38 = property(Node), _dec39 = property(sp.Skeleton), _dec40 = property(Node), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property(sp.Skeleton), _dec44 = property(Node), _dec45 = property(sp.Skeleton), _dec46 = property(SpriteFrame), _dec47 = property(Node), _dec48 = property(Node), _dec49 = property(Label), _dec50 = property(Label), _dec51 = property(sp.Skeleton), _dec52 = property(Node), _dec53 = property(sp.Skeleton), _dec54 = property(Label), _dec55 = property(ScrollNumLabel), _dec56 = property(Node), _dec57 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWinWinFishPrawnCrabView, _Component);
        function slotWinWinFishPrawnCrabView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab_windowItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "windowMask", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moreBtn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "game_type", _descriptor5, _assertThisInitialized(_this));
          //普通/快速切换
          _initializerDefineProperty(_this, "notice_spine", _descriptor6, _assertThisInitialized(_this));
          //公告栏
          _initializerDefineProperty(_this, "notice_waitingFree_spine", _descriptor7, _assertThisInitialized(_this));
          //期待公告栏
          _initializerDefineProperty(_this, "notice_bg", _descriptor8, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "notice_frames", _descriptor9, _assertThisInitialized(_this));
          //随机公告
          _initializerDefineProperty(_this, "notice_frames_free", _descriptor10, _assertThisInitialized(_this));
          //免费时随机公告
          _initializerDefineProperty(_this, "notice_free", _descriptor11, _assertThisInitialized(_this));
          //免费公告内容
          _initializerDefineProperty(_this, "notice_frames_wait", _descriptor12, _assertThisInitialized(_this));
          //期待公告
          _initializerDefineProperty(_this, "notice_title", _descriptor13, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "txt_bet", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betFree", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_winFree", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_goldFree", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run_box", _descriptor20, _assertThisInitialized(_this));
          //转盘
          _initializerDefineProperty(_this, "run_mask", _descriptor21, _assertThisInitialized(_this));
          //转盘遮照层demo
          _initializerDefineProperty(_this, "top_normal_wan", _descriptor22, _assertThisInitialized(_this));
          //头部碗
          _initializerDefineProperty(_this, "top_free_wan", _descriptor23, _assertThisInitialized(_this));
          //头部碗
          _initializerDefineProperty(_this, "top_odd_box", _descriptor24, _assertThisInitialized(_this));
          //头部倍数
          _initializerDefineProperty(_this, "current_odd", _descriptor25, _assertThisInitialized(_this));
          //当前倍数
          _initializerDefineProperty(_this, "add_odd", _descriptor26, _assertThisInitialized(_this));
          //新倍数
          _initializerDefineProperty(_this, "odd_spine", _descriptor27, _assertThisInitialized(_this));
          //倍数动画
          _initializerDefineProperty(_this, "one_win", _descriptor28, _assertThisInitialized(_this));
          //一次获取
          _initializerDefineProperty(_this, "all_win", _descriptor29, _assertThisInitialized(_this));
          //全局获取
          _initializerDefineProperty(_this, "all_win_number", _descriptor30, _assertThisInitialized(_this));
          //全局获取
          _initializerDefineProperty(_this, "turn_start", _descriptor31, _assertThisInitialized(_this));
          //开始按钮
          _initializerDefineProperty(_this, "turn_auto_leftCount", _descriptor32, _assertThisInitialized(_this));
          //剩余自动模式
          _initializerDefineProperty(_this, "big_win_box", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win_txt", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_bot", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_spine", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_free", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_bot_free", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free", _descriptor40, _assertThisInitialized(_this));
          //免费模式初始页
          _initializerDefineProperty(_this, "enter_free_spine", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free_btn", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free_btn_spine", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_heart_box", _descriptor44, _assertThisInitialized(_this));
          //心跳图片列表
          _initializerDefineProperty(_this, "free_heart_frame", _descriptor45, _assertThisInitialized(_this));
          //心跳框
          _initializerDefineProperty(_this, "free_heart_instance", _descriptor46, _assertThisInitialized(_this));
          //心跳数
          _initializerDefineProperty(_this, "free_total_time", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_total_old_time", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_total_time_spine", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_spine", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_time", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_cash", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_btn", _descriptor54, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_btn_spine", _descriptor55, _assertThisInitialized(_this));
          _this._window = null;
          _this._bet = 0;
          _this._isMinBet = false;
          _this._auto = false;
          _this._lock = false;
          _this._runDelay = 0.1;
          _this._isFree = false;
          _this._freeLastTime = 0;
          _this._noticeIndex = 0;
          _this._noticeDelay = 1;
          _this._current_result = null;
          _this._current_result_index = 0;
          _this._state = RunState.NORMAL;
          _this._runTime = 0;
          _this._autoTimes = 0;
          _this._errCount = 0;
          _this._win_totalMoney = 0;
          //每局获取金额
          _this._current_index = 0;
          _this._cal_current_result = {
            result: null,
            scatterNum: 0,
            showLineIndex: 0,
            win: []
          };
          _this._isEndBigWin = false;
          //是否已经点击到底金额终点
          _this._isTrueBigWin = false;
          //手动点击金额后会停留0.5秒展示最终金额,防止这0.5supdate的触发
          _this._audioId = null;
          _this._totalCashAudioId = null;
          _this._endBigTime = 0;
          _this._endFreeTime = 0;
          _this._startFreeTime = 0;
          _this.heartPostion = [[-85, 0, 85], [-125, -45, 45, 125], [-165, -82.5, 0, 82.5, 165]];
          _this._freeNum = 0;
          _this.isGetResult = false;
          _this.isError = false;
          _this.isInitReadyIntoFree = false;
          _this._bgLightTime = 0;
          return _this;
        }
        var _proto = slotWinWinFishPrawnCrabView.prototype;
        _proto.start = function start() {
          var _this2 = this;
          var node = instantiate(this.prefab_windowItem);
          this.node.addChild(node);
          this._window = node.getComponent(slotWinWinFishPrawnCrabWindow);
          node.active = false;
          this.windowMask.on(Node.EventType.TOUCH_END, function () {
            _this2.hideWindow();
          });
          this.turn_start.node.on(Node.EventType.TOUCH_END, function () {
            _this2.clickStartGame();
          });

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
              slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.bgmBigwinEnd, function (id) {
                _this2._audioId = id;
              });
            } else {
              _this2.clickHideBigWin();
            }
          });

          //免费初始页进入到免费模式
          this.enter_free_btn_spine.node.on(Node.EventType.TOUCH_END, function () {
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.uiStart);
            _this2.enterFreePage();
          });
          this.enter_free_btn.on(Node.EventType.TOUCH_END, function () {
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.uiStart);
            _this2.enterFreePage();
          });

          //免费结束页进入到普通模式
          this.free_end_btn_spine.node.on(Node.EventType.TOUCH_END, function () {
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.uiStart);
            _this2.endNormal();
          });
          this.free_end_btn.on(Node.EventType.TOUCH_END, function () {
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.uiStart);
            _this2.endNormal();
          });
          this.init();
          this.initEvent();
          this.updateGoldData();
          this.updateSetData();
          this.checkDownOrUpBet();
          this._isFree ? this.bg_spine.setAnimation(0, "free_idle", false) : this.bg_spine.setAnimation(0, "normal_idle", false);
          this.bg_spine.setCompleteListener(function () {
            _this2.bg_spine.setCompleteListener(null);
            _this2.bg_spine.node.active = false;
            _this2._bgLightTime = 5;
          });
          // this.scheduleOnce(() => {
          //     this.endFree()
          // }, 2)
        };

        _proto.update = function update(dt) {
          var _this3 = this;
          //背景光定时展示
          if (this._bgLightTime > 0) {
            this._bgLightTime -= dt;
            if (this._bgLightTime <= 0) {
              this.bg_spine.node.active = true;
              this._isFree ? this.bg_spine.setAnimation(0, "free_idle", false) : this.bg_spine.setAnimation(0, "normal_idle", false);
              this.bg_spine.setCompleteListener(function () {
                _this3.bg_spine.setCompleteListener(null);
                _this3.bg_spine.node.active = false;
                _this3._bgLightTime = 5;
              });
            }
          }
          //自动关闭大奖
          if (this.big_win_box.active && !this._isEndBigWin && this._win_totalMoney - 100 <= parseInt(this.big_win_txt.string.replace(/,/g, "")) && parseInt(this.big_win_txt.string.replace(/,/g, "")) <= this._win_totalMoney + 100) {
            this._isEndBigWin = true;
            this._endBigTime = 2;
            AudioManager.instance.stopSound(this._audioId);
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.bgmBigwinEnd, function (id) {
              _this3._audioId = id;
            });
          }
          this.updateNotice(dt);

          //大奖结束
          if (this._endBigTime > 0) {
            this._endBigTime -= dt;
            if (this._endBigTime <= 0 && this.big_win_box.active && !this._isTrueBigWin) {
              this.big_win_txt.reset();
              this.big_win_box.active = false;
              AudioManager.instance.stopSound(this._audioId);
              this._audioId = null;
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
                // this._runTime -= dt;
                // if (this._runTime <= 0) {
                //     if (slotWinWinFishPrawnCrabProxy.result) {
                //         this._current_result = slotWinWinFishPrawnCrabProxy.result
                //         this._freeLastTime = slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount
                //         this.startGameAni(true)
                //         this.changeState(RunState.RUNNING);
                //     } else {
                //         this._runTime = RUNNING_TIME;
                //         this._errCount++;
                //         if (this._errCount > 3) {
                //             this._state = RunState.NORMAL;
                //             this._lock = false
                //             //this.sendBet();
                //         }
                //     }
                // }
                break;
              }
            case RunState.RUNNING:
              {
                if (slotWinWinFishPrawnCrabProxy.result && !this.isGetResult) {
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
        _proto.changeState = function changeState(state) {
          var _this4 = this;
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
                if (this._current_result["Res"][this._current_index]["RewardMoney"] > 0) {
                  this._win_totalMoney += this._current_result["Res"][this._current_index]["RewardMoney"];
                  this.run_box.getComponent(slotWinWinFishPrawnCrabViewRun).deleteItem(this._current_result.win);
                  this.scheduleOnce(function () {
                    _this4.changeTopCash();
                  }, 0.3);
                } else {
                  this.startGameAni(false);
                  this.allEnd();
                }
                break;
              }
          }
        };
        _proto.init = function init() {
          this.normalBtn.active = true;
          this.moreBtn.active = false;
          this.changeBtnActive(true);

          //接口
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotWinWinFishPrawnCrab.info, {});
        };
        _proto.initPage = function initPage(data) {
          if (data && data.Res) {
            var reverseData = [];
            data.Res[data.Res.length - 1]["AllPosMsg"].map(function (item, index) {
              var itemCache = JSON.parse(JSON.stringify(item));
              reverseData[index] = itemCache.reverse();
            });
            var lastWin = 0;
            data.Res.map(function (item) {
              lastWin += item.RewardMoney;
            });
            this.txt_win.reset(lastWin);
            this.run_box.getComponent(slotWinWinFishPrawnCrabViewRun).initPage(reverseData);
            if (!this._isFree && data.FreeInfo.RemainCount > 0) {
              this.isInitReadyIntoFree = true;
              slotWinWinFishPrawnCrabProxy.result = data;
              this.current_odd.getComponent(Label).string = "x" + data.FreeInfo["Multiple"];
              if (data.FreeInfo["Multiple"] > 1) {
                this.odd_spine.node.active = true;
                this.odd_spine.setAnimation(0, "level_up_idle", true);
              }
              this.txt_winFree.getComponent(Label).string = data.FreeInfo["TotalPrizeAmount"];
              slotWinWinFishPrawnCrabProxy.freeTotalWin = data.FreeInfo["TotalPrizeAmount"];
              this.enterFreeMode();
            } else {
              this.odd_spine.node.active = false;
              slotWinWinFishPrawnCrabDef.palyMusic(slotWinWinFishPrawnCrabDef.audio.bgm_mg);
            }
          } else {
            this.isError = true;
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
        _proto.preStart = function preStart() {
          if (this._lock) return;
          if (this.isError) return;
          if (this.isInitReadyIntoFree) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._isFree) {
            if (gold < this._bet) {
              Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
              this.setAuto(0);
              return;
            } else {
              this.updateGoldData(-this._bet);
            }
          }
          if (this._isFree && this._freeLastTime > 0 || !this._isFree) {
            this._lock = true;
            this.one_win.active = false;
            this.all_win.active = false;
            this.all_win_number.reset();
            !this._isFree ? this.notice_bg.active = true : this.notice_free.active = true;
            this.notice_spine.setAnimation(0, "normal_p", true);
            this.txt_win.reset();
            slotWinWinFishPrawnCrabProxy.result = null;
            this.sendBet();
            this._cal_current_result = {
              result: [[], [], [], [], [], []],
              scatterNum: 0,
              showLineIndex: 0,
              win: []
            };
            this._state = RunState.START;
            this._runTime = GETDATA_TIME;
          }
        };
        _proto.clickRun = function clickRun() {
          var _this5 = this;
          this._isTrueBigWin = false;
          this.isGetResult = false;
          if (!this._isFree) {
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.spinBtn);
            this.current_odd.getComponent(Label).string = "x1";
            this.odd_spine.node.active = false;
            this.current_odd.getComponent(UIOpacity).opacity = 200;
          }
          this.all_win.active = false;
          !this._isFree ? this.notice_bg.active = true : this.notice_free.active = true;
          this.txt_win.reset();
          this.checkAuto();
          this.changeBtnActive(false);
          this.bg_spine.node.active = true;
          this._isFree ? this.bg_spine.setAnimation(0, "free_idle", false) : this.bg_spine.setAnimation(0, "normal_idle", false);
          this.bg_spine.setCompleteListener(function () {
            _this5.bg_spine.setCompleteListener(null);
            _this5.bg_spine.node.active = false;
            _this5._bgLightTime = 5;
          });
          this.scheduleOnce(function () {
            _this5.run_box.getComponent(slotWinWinFishPrawnCrabViewRun).run(_this5._runDelay != 0 || _this5._isFree ? "normal" : "fast");
          }, this._isFree ? 0.4 : 0); //消除心跳时间
        };

        _proto.clickRunning = function clickRunning() {
          var _this6 = this;
          this._current_result = slotWinWinFishPrawnCrabProxy.result;
          this._freeLastTime = slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount;
          this.isGetResult = true;
          if (this._isFree) {
            //总次数变化
            this.free_total_old_time.node.active = false;
            this.free_total_time_spine.node.active = true;
            this.free_total_time_spine.setAnimation(0, "animation", false);
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.fsCount);
            tween(this.free_total_time.node).to(0.2, {
              scale: v3(0.3, 0.3)
            }).call(function () {
              _this6.free_total_time.node.active = false;
            }).start();
            this.scheduleOnce(function () {
              _this6.free_total_old_time.getComponent(Label).string = slotWinWinFishPrawnCrabProxy.result.FreeInfo.TotalCount + "";
              _this6.free_total_old_time.getComponent(UIOpacity).opacity = 100;
              tween(_this6.free_total_old_time.node).to(0.15, {
                scale: v3(1.3, 1.3)
              }).call(function () {
                tween(_this6.free_total_old_time.node).to(0.15, {
                  scale: v3(1, 1)
                }).start();
              }).start();
              tween(_this6.free_total_old_time.getComponent(UIOpacity)).to(0.3, {
                opacity: 255
              }).call(function () {
                _this6.free_total_time.node.setScale(v3(1, 1));
                _this6.free_total_time.getComponent(Label).string = slotWinWinFishPrawnCrabProxy.result.FreeInfo.TotalCount + "";
                _this6.free_total_time.node.active = true;
              }).start();
            }, 0.1);
            //心跳消除一个
            if (this.free_heart_frame.children.length > 0) {
              tween(this.free_heart_frame.children[this.free_heart_frame.children.length - 1].getComponent(UIOpacity)).to(0.3, {
                opacity: 0
              }).call(function () {
                _this6.free_heart_frame.children[_this6.free_heart_frame.children.length - 1].destroy();
                if (_this6.free_heart_frame.children[_this6.free_heart_frame.children.length - 2]) {
                  _this6.free_heart_frame.children[_this6.free_heart_frame.children.length - 2].getChildByName("heartSpine").getComponent(sp.Skeleton).setAnimation(0, "love_idle2", true);
                }
              }).start();
            }
          }
          this.scheduleOnce(function () {
            _this6.calResult(function () {
              if (_this6._runDelay != 0 || _this6._isFree) {
                //每条间隔0.2s，总共1.2
                _this6.scheduleOnce(function () {
                  _this6.run_box.getComponent(slotWinWinFishPrawnCrabViewRun).getResult(_this6._cal_current_result.result, _this6._cal_current_result.showLineIndex);
                }, 0.2);
              } else {
                _this6.scheduleOnce(function () {
                  _this6.run_box.getComponent(slotWinWinFishPrawnCrabViewRun).getResult(_this6._cal_current_result.result);
                }, 0.2);
              }
            });
          }, this._isFree ? 0.4 : 0);
        };
        _proto.clickStop = function clickStop() {
          var _this7 = this;
          //判断第一轮中奖结果
          if (this._current_result && this._current_result["Res"][this._current_index]["RewardMoney"] > 0) {
            this.startGameAni(false);
            this._win_totalMoney = this._current_result["Res"][this._current_index]["RewardMoney"];
            this.run_box.getComponent(slotWinWinFishPrawnCrabViewRun).deleteItem(this._current_result.win);
            this.scheduleOnce(function () {
              _this7.changeTopCash();
            }, 0.3);
            if (!this._isFree && !this._auto) {
              this.turn_start.setAnimation(0, "stop", true);
            }
          } else {
            this.startGameAni(false);
            this.allEnd();
          }
        };
        _proto.showNext = function showNext() {
          var _this8 = this;
          if (slotWinWinFishPrawnCrabProxy.result["Res"][this._current_index + 1]) {
            this._current_index += 1;
            this.calResult(function () {
              _this8.run_box.getComponent(slotWinWinFishPrawnCrabViewRun).renderNewItem(_this8._cal_current_result.result, _this8._cal_current_result.scatterNum);
            });
          }
        };
        _proto.sendBet = function sendBet() {
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotWinWinFishPrawnCrab.bet, {
            betAmount: Math.floor(this._bet)
          });

          // if (this._freeNum == 0) {
          //     NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotWinWinFishPrawnCrab.bet, { betAmount: Math.floor(this._bet), testFree: true });
          // } else {
          //     NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotWinWinFishPrawnCrab.bet, { betAmount: Math.floor(this._bet) });
          // }
          // this._freeNum += 1
          // this.scheduleOnce(() => {
          //     slotWinWinFishPrawnCrabProxy.result = { "BetAmount": 2000, "FreeInfo": { "HeartCount": 0, "Multiple": 0, "RemainCount": 0, "TotalCount": 0, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "Sym": 7 }, { "Sym": 5 }, { "Sym": 7 }, { "Sym": 7 }], [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 7 }, { "Sym": 8 }, { "Sym": 8 }], [{ "Sym": 10 }, { "Sym": 10 }, { "Sym": 4 }, { "Sym": 8 }, { "Sym": 9 }], [{ "Sym": 10 }, { "Sym": 8 }, { "Sym": 7 }, { "Sym": 1 }, { "Sym": 10 }], [{ "Sym": 8 }, { "Sym": 3 }, { "Sym": 7 }, { "Sym": 9 }, { "Sym": 5 }], [{ "Sym": 5 }, { "Sym": 7 }, { "Sym": 8 }, { "Sym": 7 }]], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null }], "prizeAmount": 0 }

          // }, 0.3)
          //slotWinWinFishPrawnCrabProxy.result = { "BetAmount": 1000000, "FreeInfo": { "HeartCount": 0, "Multiple": 0, "RemainCount": 0, "TotalCount": 0, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "Sym": 3 }, { "Sym": 4 }, { "Sym": 6 }, { "Sym": 5 }], [{ "Sym": 6 }, { "Sym": 2 }, { "Sym": 6 }, { "Sym": 9 }, { "Sym": 7 }], [{ "Sym": 6 }, { "Sym": 6 }, { "Sym": 1 }, { "Sym": 2 }, { "Sym": 8 }], [{ "Sym": 7 }, { "Sym": 6 }, { "Sym": 5 }, { "Sym": 1 }, { "Sym": 9 }], [{ "Sym": 9 }, { "Sym": 7 }, { "Sym": 8 }, { "Sym": 5 }, { "Sym": 9 }], [{ "Sym": 10 }, { "Sym": 9 }, { "Sym": 2 }, { "Sym": 10 }]], "ExtraOdd": 1, "RewardMoney": 3150000, "RewardPos": [[0, 1, 3], [1, 1, 3], [2, 0, 0, 1], [2, 1, 0, 1], [2, 2, 0, 1], [2, 0, 1, 1], [2, 1, 1, 1], [2, 2, 1, 1], [2, 0, 3, 1], [2, 1, 3, 1], [2, 2, 3, 1], [3, 1, 3, 2, 3, 2]] }, { "AllPosMsg": [[{ "Sym": 7 }, { "Sym": 4 }, { "Sym": 10 }, { "Sym": 5 }], [{ "Sym": 9 }, { "Sym": 7 }, { "Sym": 8 }, { "Sym": 9 }, { "Sym": 8 }], [{ "Sym": 1 }, { "Sym": 8 }, { "Sym": 10 }, { "Sym": 5 }, { "Sym": 9 }], [{ "Sym": 7 }, { "Sym": 1 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 7 }], [{ "Sym": 9 }, { "Sym": 7 }, { "Sym": 8 }, { "Sym": 9 }, { "Sym": 9 }], [{ "Sym": 10 }, { "Sym": 9 }, { "Sym": 10 }, { "Sym": 10 }]], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null }], "prizeAmount": 3150000 }
          //没中奖 && 期待
          //slotWinWinFishPrawnCrabProxy.result = { "BetAmount": 2000, "FreeInfo": { "HeartCount": 0, "Multiple": 0, "RemainCount": 0, "TotalCount": 0, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "Sym": 4 }, { "Sym": 5 }, { "Sym": 1 }, { "Sym": 7 }], [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 1 }], [{ "Sym": 10 }, { "Sym": 8 }, { "Sym": 9 }, { "Sym": 10 }, { "Sym": 4 }], [{ "Sym": 8 }, { "Sym": 10 }, { "Sym": 6 }, { "Sym": 10 }, { "Sym": 6 }], [{ "Sym": 7 }, { "Sym": 7 }, { "Sym": 5 }, { "Sym": 7 }, { "Sym": 6 }], [{ "Sym": 2 }, { "Sym": 6 }, { "Sym": 7 }, { "Sym": 8 }]], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null }], "prizeAmount": 0 }
          //大奖
          //slotWinWinFishPrawnCrabProxy.result = { "BetAmount": 2000, "FreeInfo": { "HeartCount": 3, "Multiple": 1, "RemainCount": 0, "TotalCount": 10, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "Sym": 1 }, { "Sym": 7 }, { "Sym": 4 }, { "Sym": 7 }], [{ "Sym": 9 }, { "Sym": 7 }, { "Sym": 1 }, { "Sym": 4 }, { "Sym": 8 }], [{ "Sym": 8 }, { "Sym": 7 }, { "Sym": 10 }, { "Sym": 6 }, { "Sym": 9 }], [{ "Sym": 10 }, { "Sym": 8 }, { "Sym": 10 }, { "Sym": 10 }, { "Sym": 6 }], [{ "Sym": 10 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 8 }, { "Sym": 7 }], [{ "Sym": 5 }, { "Sym": 9 }, { "Sym": 7 }, { "Sym": 5 }]], "ExtraOdd": 1, "RewardMoney": 12000, "RewardPos": [[1, 1, 1], [3, 1, 1]] }, { "AllPosMsg": [[{ "Sym": 1 }, { "Sym": 4 }, { "Sym": 10 }, { "Sym": 8 }], [{ "Sym": 9 }, { "Sym": 1 }, { "Sym": 4 }, { "Sym": 8 }, { "Sym": 9 }], [{ "Sym": 8 }, { "Sym": 10 }, { "Sym": 6 }, { "Sym": 9 }, { "Sym": 8 }], [{ "Sym": 10 }, { "Sym": 8 }, { "Sym": 10 }, { "Sym": 10 }, { "Sym": 6 }], [{ "Sym": 10 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 8 }, { "Sym": 7 }], [{ "Sym": 5 }, { "Sym": 9 }, { "Sym": 7 }, { "Sym": 5 }]], "ExtraOdd": 2, "RewardMoney": 40000, "RewardPos": [[3, 3, 0, 1, 3], [3, 3, 4, 1, 3]] }, { "AllPosMsg": [[{ "Sym": 1 }, { "Sym": 4 }, { "Sym": 10 }, { "Sym": 7 }], [{ "Sym": 9 }, { "Sym": 1 }, { "Sym": 4 }, { "Sym": 9 }, { "Sym": 6 }], [{ "Sym": 10 }, { "Sym": 6 }, { "Sym": 9 }, { "Sym": 5 }, { "Sym": 6 }], [{ "Sym": 10 }, { "Sym": 10 }, { "Sym": 10 }, { "Sym": 6 }, { "Sym": 8 }], [{ "Sym": 10 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 7 }, { "Sym": 8 }], [{ "Sym": 5 }, { "Sym": 9 }, { "Sym": 7 }, { "Sym": 5 }]], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null }], "prizeAmount": 52000 }
          //没中奖
          //slotWinWinFishPrawnCrabProxy.result = { "BetAmount": 2000, "FreeInfo": { "HeartCount": 0, "Multiple": 0, "RemainCount": 0, "TotalCount": 0, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "Sym": 4 }, { "Sym": 2 }, { "Sym": 5 }, { "Sym": 5 }], [{ "Sym": 6 }, { "Sym": 7 }, { "Sym": 6 }, { "Sym": 8 }, { "Sym": 8 }], [{ "Sym": 6 }, { "Sym": 3 }, { "Sym": 10 }, { "Sym": 7 }, { "Sym": 5 }], [{ "Sym": 10 }, { "Sym": 10 }, { "Sym": 9 }, { "Sym": 8 }, { "Sym": 10 }], [{ "Sym": 9 }, { "Sym": 8 }, { "Sym": 8 }, { "Sym": 9 }, { "Sym": 8 }], [{ "Sym": 9 }, { "Sym": 8 }, { "Sym": 5 }, { "Sym": 7 }]], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null }], "prizeAmount": 0 }
          //中五个免费
          //slotWinWinFishPrawnCrabProxy.result = { "BetAmount": 2000, "FreeInfo": { "HeartCount": 5, "Multiple": 1, "RemainCount": 5, "TotalCount": 0, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "Sym": 1 }, { "Sym": 5 }, { "Sym": 10 }, { "Sym": 1 }], [{ "Sym": 10 }, { "Sym": 6 }, { "Sym": 6 }, { "Sym": 4 }, { "Sym": 9 }], [{ "Sym": 6 }, { "Sym": 6 }, { "Sym": 8 }, { "Sym": 8 }, { "Sym": 1 }], [{ "Sym": 9 }, { "Sym": 10 }, { "Sym": 6 }, { "Sym": 1 }, { "Sym": 7 }], [{ "Sym": 8 }, { "Sym": 1 }, { "Sym": 5 }, { "Sym": 9 }, { "Sym": 1 }], [{ "Sym": 8 }, { "Sym": 10 }, { "Sym": 7 }, { "Sym": 7 }]], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null }], "prizeAmount": 0 }
          //头部金额递增
          //slotWinWinFishPrawnCrabProxy.result = { "BetAmount": 2000, "FreeInfo": { "HeartCount": 0, "Multiple": 0, "RemainCount": 0, "TotalCount": 0, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "Sym": 10 }, { "Sym": 10 }, { "Sym": 4 }, { "Sym": 4 }], [{ "Sym": 10 }, { "Sym": 6 }, { "Sym": 3 }, { "Sym": 9 }, { "Sym": 10 }], [{ "Sym": 10 }, { "Sym": 10 }, { "Sym": 10 }, { "Sym": 3 }, { "Sym": 8 }], [{ "Sym": 7 }, { "Sym": 10 }, { "Sym": 2 }, { "Sym": 9 }, { "Sym": 6 }], [{ "Sym": 9 }, { "Sym": 10 }, { "Sym": 10 }, { "Sym": 10 }, { "Sym": 5 }], [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 5 }, { "Sym": 7 }]], "ExtraOdd": 1, "RewardMoney": 28800, "RewardPos": [[0, 0, 0, 1, 1], [0, 4, 0, 1, 1], [0, 0, 1, 1, 1], [0, 4, 1, 1, 1], [0, 0, 2, 1, 1], [0, 4, 2, 1, 1], [0, 0, 0, 2, 1], [0, 4, 0, 2, 1], [0, 0, 1, 2, 1], [0, 4, 1, 2, 1], [0, 0, 2, 2, 1], [0, 4, 2, 2, 1], [0, 0, 0, 1, 2], [0, 4, 0, 1, 2], [0, 0, 1, 1, 2], [0, 4, 1, 1, 2], [0, 0, 2, 1, 2], [0, 4, 2, 1, 2], [0, 0, 0, 2, 2], [0, 4, 0, 2, 2], [0, 0, 1, 2, 2], [0, 4, 1, 2, 2], [0, 0, 2, 2, 2], [0, 4, 2, 2, 2], [0, 0, 0, 1, 3], [0, 4, 0, 1, 3], [0, 0, 1, 1, 3], [0, 4, 1, 1, 3], [0, 0, 2, 1, 3], [0, 4, 2, 1, 3], [0, 0, 0, 2, 3], [0, 4, 0, 2, 3], [0, 0, 1, 2, 3], [0, 4, 1, 2, 3], [0, 0, 2, 2, 3], [0, 4, 2, 2, 3], [1, 0, 0, 1, 1], [1, 4, 0, 1, 1], [1, 0, 1, 1, 1], [1, 4, 1, 1, 1], [1, 0, 2, 1, 1], [1, 4, 2, 1, 1], [1, 0, 0, 2, 1], [1, 4, 0, 2, 1], [1, 0, 1, 2, 1], [1, 4, 1, 2, 1], [1, 0, 2, 2, 1], [1, 4, 2, 2, 1], [1, 0, 0, 1, 2], [1, 4, 0, 1, 2], [1, 0, 1, 1, 2], [1, 4, 1, 1, 2], [1, 0, 2, 1, 2], [1, 4, 2, 1, 2], [1, 0, 0, 2, 2], [1, 4, 0, 2, 2], [1, 0, 1, 2, 2], [1, 4, 1, 2, 2], [1, 0, 2, 2, 2], [1, 4, 2, 2, 2], [1, 0, 0, 1, 3], [1, 4, 0, 1, 3], [1, 0, 1, 1, 3], [1, 4, 1, 1, 3], [1, 0, 2, 1, 3], [1, 4, 2, 1, 3], [1, 0, 0, 2, 3], [1, 4, 0, 2, 3], [1, 0, 1, 2, 3], [1, 4, 1, 2, 3], [1, 0, 2, 2, 3], [1, 4, 2, 2, 3]] }, { "AllPosMsg": [[{ "Sym": 4 }, { "Sym": 4 }, { "Sym": 4 }, { "Sym": 3 }], [{ "Sym": 6 }, { "Sym": 3 }, { "Sym": 9 }, { "Sym": 2 }, { "Sym": 9 }], [{ "Sym": 3 }, { "Sym": 8 }, { "Sym": 10 }, { "Sym": 9 }, { "Sym": 10 }], [{ "Sym": 7 }, { "Sym": 9 }, { "Sym": 6 }, { "Sym": 1 }, { "Sym": 9 }], [{ "Sym": 9 }, { "Sym": 5 }, { "Sym": 7 }, { "Sym": 7 }, { "Sym": 10 }], [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 5 }, { "Sym": 7 }]], "ExtraOdd": 2, "RewardMoney": 2000, "RewardPos": [[3, 1, 0], [3, 3, 0]] }, { "AllPosMsg": [[{ "Sym": 4 }, { "Sym": 4 }, { "Sym": 4 }, { "Sym": 10 }], [{ "Sym": 6 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 6 }, { "Sym": 3 }], [{ "Sym": 8 }, { "Sym": 10 }, { "Sym": 9 }, { "Sym": 10 }, { "Sym": 3 }], [{ "Sym": 7 }, { "Sym": 9 }, { "Sym": 6 }, { "Sym": 1 }, { "Sym": 9 }], [{ "Sym": 9 }, { "Sym": 5 }, { "Sym": 7 }, { "Sym": 7 }, { "Sym": 10 }], [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 5 }, { "Sym": 7 }]], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null }], "prizeAmount": 30800 }
          // slotWinWinFishPrawnCrabProxy.result = {
          //     "BetAmount": 2000,
          //     "FreeInfo": { "HeartCount": 0, "Multiple": 0, "RemainCount": 0, "TotalCount": 0, "TotalPrizeAmount": 0 },
          //     "Res": [
          //         {
          //             "AllPosMsg": [
          //                 [{ "Sym": 7 }, { "Sym": 4 }, { "Sym": 4 }, { "Sym": 7 }],
          //                 [{ "Sym": 8 }, { "Sym": 6 }, { "Sym": 6 }, { "Sym": 9 }, { "Sym": 7 }],
          //                 [{ "Sym": 10 }, { "Sym": 8 }, { "Sym": 10 }, { "Sym": 9 }, { "Sym": 7 }],
          //                 [{ "Sym": 9 }, { "Sym": 10 }, { "Sym": 7 }, { "Sym": 8 }, { "Sym": 10 }],
          //                 [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 7 }, { "Sym": 7 }],
          //                 [{ "Sym": 8 }, { "Sym": 4 }, { "Sym": 9 }, { "Sym": 1 }]],
          //             "ExtraOdd": 1, "RewardMoney": 40000,
          //             "RewardPos": [[0, 4, 4, 2, 3], [0, 4, 4, 2, 4], [3, 4, 4, 2, 3], [3, 4, 4, 2, 4]]
          //         },
          //         {
          //             "AllPosMsg": [
          //                 [{ "Sym": 4 }, { "Sym": 4 }, { "Sym": 8 }, { "Sym": 4 }],
          //                 [{ "Sym": 8 }, { "Sym": 6 }, { "Sym": 6 }, { "Sym": 9 }, { "Sym": 8 }],
          //                 [{ "Sym": 10 }, { "Sym": 8 }, { "Sym": 10 }, { "Sym": 9 }, { "Sym": 6 }],
          //                 [{ "Sym": 9 }, { "Sym": 10 }, { "Sym": 8 }, { "Sym": 10 }, { "Sym": 7 }],
          //                 [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 1 }, { "Sym": 9 }],
          //                 [{ "Sym": 8 }, { "Sym": 4 }, { "Sym": 9 }, { "Sym": 1 }]],
          //             "ExtraOdd": 2, "RewardMoney": 32000,
          //             "RewardPos": [[2, 0, 1, 2], [2, 4, 1, 2]]
          //         },
          //         {
          //             "AllPosMsg": [
          //                 [{ "Sym": 4 }, { "Sym": 4 }, { "Sym": 4 }, { "Sym": 6 }],
          //                 [{ "Sym": 6 }, { "Sym": 6 }, { "Sym": 9 }, { "Sym": 6 }, { "Sym": 9 }],
          //                 [{ "Sym": 10 }, { "Sym": 10 }, { "Sym": 9 }, { "Sym": 6 }, { "Sym": 7 }],
          //                 [{ "Sym": 9 }, { "Sym": 10 }, { "Sym": 10 }, { "Sym": 7 }, { "Sym": 3 }],
          //                 [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 1 }, { "Sym": 9 }],
          //                 [{ "Sym": 8 }, { "Sym": 4 }, { "Sym": 9 }, { "Sym": 1 }]],
          //             "ExtraOdd": 3, "RewardMoney": 72000,
          //             "RewardPos": [[3, 0, 3], [3, 1, 3], [3, 3, 3]]
          //         },
          //         {
          //             "AllPosMsg": [
          //                 [{ "Sym": 4 }, { "Sym": 4 }, { "Sym": 4 }, { "Sym": 10 }],
          //                 [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 6 }, { "Sym": 4 }],
          //                 [{ "Sym": 10 }, { "Sym": 10 }, { "Sym": 9 }, { "Sym": 7 }, { "Sym": 7 }],
          //                 [{ "Sym": 9 }, { "Sym": 10 }, { "Sym": 10 }, { "Sym": 7 }, { "Sym": 3 }],
          //                 [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 1 }, { "Sym": 9 }],
          //                 [{ "Sym": 8 }, { "Sym": 4 }, { "Sym": 9 }, { "Sym": 1 }]
          //             ], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null
          //         }], "prizeAmount": 144000
          // }

          //期待进入免费
          // slotWinWinFishPrawnCrabProxy.result = {
          //     "BetAmount": 2000,
          //     "FreeInfo": { "HeartCount": 3, "Multiple": 1, "RemainCount": 3, "TotalCount": 0, "TotalPrizeAmount": 0 },
          //     "Res": [
          //         {
          //             "AllPosMsg": [
          //                 [{ "Sym": 10 }, { "Sym": 1 }, { "Sym": 6 }, { "Sym": 10 }],
          //                 [{ "Sym": 8 }, { "Sym": 8 }, { "Sym": 8 }, { "Sym": 1 }, { "Sym": 10 }],
          //                 [{ "Sym": 10 }, { "Sym": 4 }, { "Sym": 10 }, { "Sym": 9 }, { "Sym": 7 }],
          //                 [{ "Sym": 9 }, { "Sym": 10 }, { "Sym": 7 }, { "Sym": 10 }, { "Sym": 3 }],
          //                 [{ "Sym": 5 }, { "Sym": 5 }, { "Sym": 6 }, { "Sym": 9 }, { "Sym": 7 }],
          //                 [{ "Sym": 5 }, { "Sym": 7 }, { "Sym": 9 }, { "Sym": 1 }]
          //             ],
          //             "ExtraOdd": 1, "RewardMoney": 8000,
          //             "RewardPos": [[0, 4, 0, 1], [0, 4, 2, 1], [0, 4, 0, 3], [0, 4, 2, 3], [3, 4, 0, 1], [3, 4, 2, 1], [3, 4, 0, 3], [3, 4, 2, 3]]
          //         },
          //         {
          //             "AllPosMsg": [
          //                 [{ "Sym": 1 }, { "Sym": 6 }, { "Sym": 5 }, { "Sym": 1 }],
          //                 [{ "Sym": 8 }, { "Sym": 8 }, { "Sym": 8 }, { "Sym": 1 }, { "Sym": 5 }],
          //                 [{ "Sym": 4 }, { "Sym": 9 }, { "Sym": 7 }, { "Sym": 10 }, { "Sym": 8 }],
          //                 [{ "Sym": 9 }, { "Sym": 7 }, { "Sym": 3 }, { "Sym": 4 }, { "Sym": 10 }],
          //                 [{ "Sym": 5 }, { "Sym": 5 }, { "Sym": 6 }, { "Sym": 9 }, { "Sym": 7 }],
          //                 [{ "Sym": 5 }, { "Sym": 7 }, { "Sym": 9 }, { "Sym": 8 }]
          //             ], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null
          //         }], "prizeAmount": 8000
          // }

          //直接进入免费
          // slotWinWinFishPrawnCrabProxy.result = {
          //     "BetAmount": 2000,
          //     "FreeInfo": { "HeartCount": 5, "Multiple": 1, "RemainCount": 5, "TotalCount": 0, "TotalPrizeAmount": 0 },
          //     "Res": [
          //         {
          //             "AllPosMsg": [
          //                 [{ "Sym": 6 }, { "Sym": 7 }, { "Sym": 6 }, { "Sym": 7 }],
          //                 [{ "Sym": 9 }, { "Sym": 5 }, { "Sym": 3 }, { "Sym": 6 }, { "Sym": 6 }],
          //                 [{ "Sym": 9 }, { "Sym": 8 }, { "Sym": 1 }, { "Sym": 9 }, { "Sym": 7 }],
          //                 [{ "Sym": 8 }, { "Sym": 10 }, { "Sym": 7 }, { "Sym": 7 }, { "Sym": 1 }],
          //                 [{ "Sym": 9 }, { "Sym": 6 }, { "Sym": 8 }, { "Sym": 10 }, { "Sym": 7 }],
          //                 [{ "Sym": 9 }, { "Sym": 10 }, { "Sym": 1 }, { "Sym": 3 }]
          //             ], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null
          //         }], "prizeAmount": 0
          // }

          //模拟免费模式
          // if (this._freeNum == 0) {
          //     slotWinWinFishPrawnCrabProxy.result = {
          //         "BetAmount": 2000,
          //         "FreeInfo": { "HeartCount": 5, "Multiple": 1, "RemainCount": 5, "TotalCount": 0, "TotalPrizeAmount": 0 },
          //         "Res": [
          //             {
          //                 "AllPosMsg": [
          //                     [{ "Sym": 6 }, { "Sym": 7 }, { "Sym": 6 }, { "Sym": 7 }],
          //                     [{ "Sym": 9 }, { "Sym": 5 }, { "Sym": 3 }, { "Sym": 6 }, { "Sym": 6 }],
          //                     [{ "Sym": 9 }, { "Sym": 8 }, { "Sym": 1 }, { "Sym": 9 }, { "Sym": 7 }],
          //                     [{ "Sym": 8 }, { "Sym": 10 }, { "Sym": 7 }, { "Sym": 7 }, { "Sym": 1 }],
          //                     [{ "Sym": 9 }, { "Sym": 6 }, { "Sym": 8 }, { "Sym": 10 }, { "Sym": 7 }],
          //                     [{ "Sym": 9 }, { "Sym": 10 }, { "Sym": 1 }, { "Sym": 3 }]
          //                 ], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null
          //             }], "prizeAmount": 0
          //     }
          // }
          // else {
          //     slotWinWinFishPrawnCrabProxy.result = { "BetAmount": 2000, "FreeInfo": { "HeartCount": 5, "Multiple": this._freeNum, "RemainCount": 5 - this._freeNum, "TotalCount": this._freeNum, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "Sym": 5 }, { "Sym": 9 }, { "Sym": 10 }, { "Sym": 10 }], [{ "Sym": 8 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 8 }, { "Sym": 10 }], [{ "Sym": 9 }, { "Sym": 7 }, { "Sym": 10 }, { "Sym": 8 }, { "Sym": 5 }], [{ "Sym": 8 }, { "Sym": 8 }, { "Sym": 7 }, { "Sym": 7 }, { "Sym": 7 }], [{ "Sym": 6 }, { "Sym": 10 }, { "Sym": 4 }, { "Sym": 10 }, { "Sym": 9 }], [{ "Sym": 9 }, { "Sym": 3 }, { "Sym": 6 }, { "Sym": 7 }]], "ExtraOdd": 1, "RewardMoney": 60000, "RewardPos": [[1, 1, 0], [1, 2, 0], [2, 4, 2], [3, 4, 2]] }, { "AllPosMsg": [[{ "Sym": 5 }, { "Sym": 4 }, { "Sym": 5 }, { "Sym": 7 }], [{ "Sym": 8 }, { "Sym": 8 }, { "Sym": 6 }, { "Sym": 1 }, { "Sym": 9 }], [{ "Sym": 7 }, { "Sym": 8 }, { "Sym": 5 }, { "Sym": 5 }, { "Sym": 7 }], [{ "Sym": 8 }, { "Sym": 8 }, { "Sym": 7 }, { "Sym": 7 }, { "Sym": 7 }], [{ "Sym": 6 }, { "Sym": 10 }, { "Sym": 4 }, { "Sym": 10 }, { "Sym": 9 }], [{ "Sym": 9 }, { "Sym": 3 }, { "Sym": 6 }, { "Sym": 7 }]], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null }], "prizeAmount": 16000 }
          //     //slotWinWinFishPrawnCrabProxy.result = { "BetAmount": 2000, "FreeInfo": { "HeartCount": 5, "Multiple": this._freeNum, "RemainCount": 5 - this._freeNum, "TotalCount": this._freeNum, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "Sym": 4 }, { "Sym": 2 }, { "Sym": 5 }, { "Sym": 5 }], [{ "Sym": 6 }, { "Sym": 7 }, { "Sym": 6 }, { "Sym": 8 }, { "Sym": 8 }], [{ "Sym": 6 }, { "Sym": 3 }, { "Sym": 10 }, { "Sym": 7 }, { "Sym": 5 }], [{ "Sym": 10 }, { "Sym": 10 }, { "Sym": 9 }, { "Sym": 8 }, { "Sym": 10 }], [{ "Sym": 9 }, { "Sym": 8 }, { "Sym": 8 }, { "Sym": 9 }, { "Sym": 8 }], [{ "Sym": 9 }, { "Sym": 8 }, { "Sym": 5 }, { "Sym": 7 }]], "ExtraOdd": 0, "RewardMoney": 0, "RewardPos": null }], "prizeAmount": 0 }

          // }
          // this._freeNum++

          //---------

          //slotWinWinFishPrawnCrabProxy.result = { "BetAmount": 2000, "FreeInfo": { "HeartCount": 0, "Multiple": 0, "RemainCount": 0, "TotalCount": 0, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "Sym": 11 }, { "Sym": 1 }, { "Sym": 9 }, { "Sym": 12 }], [{ "Sym": 9 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 6 }, { "Sym": 10 }], [{ "Sym": 6 }, { "Sym": 6 }, { "Sym": 9 }, { "Sym": 8 }, { "Sym": 6 }], [{ "Sym": 11 }, { "Sym": 12 }, { "Sym": 3 }, { "Sym": 5 }, { "Sym": 12 }], [{ "Sym": 11 }, { "Sym": 7 }, { "Sym": 7 }, { "Sym": 10 }, { "Sym": 10 }], [{ "Sym": 8 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 11 }]], "ExtraOdd": 1, "RewardMoney": 14000, "RewardMsg": { "9": [3, 3] } }, { "AllPosMsg": [[{ "Sym": 11 }, { "Sym": 1 }, { "Sym": 12 }, { "Sym": 8 }], [{ "Sym": 6 }, { "Sym": 10 }, { "Sym": 11 }, { "Sym": 5 }, { "Sym": 9 }], [{ "Sym": 6 }, { "Sym": 6 }, { "Sym": 8 }, { "Sym": 6 }, { "Sym": 12 }], [{ "Sym": 11 }, { "Sym": 12 }, { "Sym": 3 }, { "Sym": 5 }, { "Sym": 12 }], [{ "Sym": 11 }, { "Sym": 7 }, { "Sym": 7 }, { "Sym": 10 }, { "Sym": 10 }], [{ "Sym": 8 }, { "Sym": 9 }, { "Sym": 9 }, { "Sym": 11 }]], "ExtraOdd": 0, "RewardMoney": 0, "RewardMsg": null }], "prizeAmount": 14000 }
        };

        _proto.allEnd = function allEnd(isBigWinEnd) {
          var _this9 = this;
          if (isBigWinEnd === void 0) {
            isBigWinEnd = false;
          }
          if (isBigWinEnd) {
            console.log("大奖动画结束");
            //大奖金额到达目标或点击大奖动画
            this.scheduleOnce(function () {
              _this9._isEndBigWin = false;
              _this9._win_totalMoney = 0;
              _this9._current_index = 0;
              _this9._current_result = null;
              _this9._cal_current_result = {
                result: null,
                scatterNum: 0,
                showLineIndex: 0,
                win: []
              };
              _this9.changeBtnActive(true);
              _this9.updateGoldData();
              if (!_this9._isFree && !_this9._auto) {
                _this9.turn_start.setAnimation(0, "idle", true);
              }
              if (!_this9._isFree && slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount > 0) {
                _this9.enterFreeMode();
              } else {
                //免费模式下增加心跳次数
                if (_this9._isFree && slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount > 0 && slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount != _this9.free_heart_frame.children.length) {
                  var times = slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount - _this9.free_heart_frame.children.length;

                  //渲染心跳
                  for (var i = 0; i < times; i++) {
                    var node = instantiate(_this9.free_heart_instance);
                    node.name = "heart" + i;
                    node.parent = _this9.free_heart_frame;
                    node.active = true;
                    node.getChildByName("num").getComponent(Label).string = _this9.free_heart_frame.children.length + "";
                    node.setPosition(v3(_this9.heartPostion[slotWinWinFishPrawnCrabProxy.result.FreeInfo.HeartCount - 3][_this9.free_heart_frame.children.length - 1], 0));
                    node.getChildByName("heartSpine").getComponent(sp.Skeleton).setAnimation(0, "love_intro", false);
                    if (_this9.free_heart_frame.children.length == slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount) {
                      node.getChildByName("heartSpine").getComponent(sp.Skeleton).addAnimation(0, "love_idle2", true);
                    } else {
                      node.getChildByName("heartSpine").getComponent(sp.Skeleton).addAnimation(0, "love_idle1", true);
                    }
                  }
                  for (var _i = 0; _i < _this9.free_heart_frame.children.length; _i++) {
                    if (_i != _this9.free_heart_frame.children.length - 1) {
                      _this9.free_heart_frame.children[_i].getChildByName("heartSpine").getComponent(sp.Skeleton).setAnimation(0, "love_idle1", true);
                    }
                  }
                  slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.fsReset);
                  _this9.scheduleOnce(function () {
                    _this9._lock = false;
                    _this9.changeState(RunState.NORMAL);
                  }, 0.3);
                } else if (_this9._isFree && slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount == 0) {
                  //结束免费模式
                  _this9.scheduleOnce(function () {
                    _this9.endFree();
                  }, 0.3);
                } else {
                  _this9._lock = false;
                  _this9.changeState(RunState.NORMAL);
                }
              }
            }, 0);
          } else {
            if (this._win_totalMoney > 0) {
              this.changeTopTotalCash();
            }

            //判断是否需要展示大奖动画
            var odd = this._win_totalMoney / this._bet;
            var aniname = "";
            //60,100,
            if (odd >= 20 && odd < 30) {
              this.big_win_box.active = true;
              aniname = "bigwin_";
              this.big_win_txt.stepCount = BIG_WIN_TIME1 * 30;
              this.big_win.setAnimation(0, aniname + "intro", false);
            }
            if (odd >= 30 && odd < 50) {
              this.big_win_box.active = true;
              aniname = "megawin_";
              this.big_win_txt.stepCount = BIG_WIN_TIME2 * 30;
              this.big_win.setAnimation(0, aniname + "intro", false);
            }
            if (odd >= 50) {
              this.big_win_box.active = true;
              aniname = "superwin_";
              this.big_win_txt.stepCount = BIG_WIN_TIME3 * 30;
              this.big_win.setAnimation(0, aniname + "intro", false);
            }
            this.big_win_txt.string = Common.numFormat(this._win_totalMoney);

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
              this.scheduleOnce(function () {
                _this9._isEndBigWin = false;
                _this9._win_totalMoney = 0;
                _this9._current_index = 0;
                _this9._current_result = null;
                _this9._cal_current_result = {
                  result: null,
                  scatterNum: 0,
                  showLineIndex: 0,
                  win: []
                };
                _this9.changeBtnActive(true);
                _this9.updateGoldData();
                if (!_this9._isFree && !_this9._auto) {
                  _this9.turn_start.setAnimation(0, "idle", true);
                }
                if (!_this9._isFree && slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount > 0) {
                  _this9.enterFreeMode();
                } else {
                  //免费模式下增加心跳次数
                  if (_this9._isFree && slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount != _this9.free_heart_frame.children.length) {
                    var times = slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount - _this9.free_heart_frame.children.length;

                    //渲染心跳
                    for (var i = 0; i < times; i++) {
                      var node = instantiate(_this9.free_heart_instance);
                      node.name = "heart" + i;
                      node.parent = _this9.free_heart_frame;
                      node.active = true;
                      node.getChildByName("num").getComponent(Label).string = _this9.free_heart_frame.children.length + "";
                      node.setPosition(v3(_this9.heartPostion[slotWinWinFishPrawnCrabProxy.result.FreeInfo.HeartCount - 3][_this9.free_heart_frame.children.length - 1], 0));
                      node.getChildByName("heartSpine").getComponent(sp.Skeleton).setAnimation(0, "love_intro", false);
                      if (_this9.free_heart_frame.children.length == slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount) {
                        node.getChildByName("heartSpine").getComponent(sp.Skeleton).addAnimation(0, "love_idle2", true);
                      } else {
                        node.getChildByName("heartSpine").getComponent(sp.Skeleton).addAnimation(0, "love_idle1", true);
                      }
                    }
                    for (var _i2 = 0; _i2 < _this9.free_heart_frame.children.length; _i2++) {
                      if (_i2 != _this9.free_heart_frame.children.length - 1) {
                        _this9.free_heart_frame.children[_i2].getChildByName("heartSpine").getComponent(sp.Skeleton).setAnimation(0, "love_idle1", true);
                      }
                    }
                    slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.fsReset);
                    _this9.scheduleOnce(function () {
                      _this9._lock = false;
                      _this9.changeState(RunState.NORMAL);
                    }, 0.3);
                  } else if (_this9._isFree && slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount == 0) {
                    //结束免费模式
                    _this9.scheduleOnce(function () {
                      _this9.endFree();
                    }, 0.3);
                  } else {
                    _this9._lock = false;
                    _this9.changeState(RunState.NORMAL);
                  }
                }
              }, time);
            } else {
              console.log("结束，播放大奖");
              slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.bgmBigwinMain, function (id) {
                _this9._audioId = id;
              });
            }
          }
        }

        //进入免费模式初始页
        ;

        _proto.enterFreeMode = function enterFreeMode() {
          var _this10 = this;
          this.run_box.getComponent(slotWinWinFishPrawnCrabViewRun).scatterRunFast();
          this.scheduleOnce(function () {
            _this10.hideWindow();
            _this10.isInitReadyIntoFree = false;
            _this10._startFreeTime = 5;
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.scatterWinHighlight);
            AudioManager.instance.stopAllEffect();
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.fsTrans);
            slotWinWinFishPrawnCrabDef.palyMusic(slotWinWinFishPrawnCrabDef.audio.bgm_fs);
            _this10.enter_free_btn.setScale(0, 0);
            _this10.enter_free_btn_spine.node.setScale(0, 0);
            _this10.enter_free.active = true;
            _this10.enter_free_spine.node.active = true;
            //确定公告栏需要播放的广告
            if (slotWinWinFishPrawnCrabProxy.result.FreeInfo.HeartCount == 3) {
              _this10.enter_free_spine.setAnimation(0, "3_intro", false);
              _this10.enter_free_spine.addAnimation(0, "3_idle", true);
              _this10.notice_free.getChildByName("free").getComponent(Sprite).spriteFrame = _this10.notice_frames_free[0];
            } else if (slotWinWinFishPrawnCrabProxy.result.FreeInfo.HeartCount == 4) {
              _this10.enter_free_spine.setAnimation(0, "4_intro", false);
              _this10.enter_free_spine.addAnimation(0, "4_idle", true);
              _this10.notice_free.getChildByName("free").getComponent(Sprite).spriteFrame = _this10.notice_frames_free[1];
            } else {
              _this10.enter_free_spine.setAnimation(0, "5_intro", false);
              _this10.enter_free_spine.addAnimation(0, "5_idle", true);
              _this10.notice_free.getChildByName("free").getComponent(Sprite).spriteFrame = _this10.notice_frames_free[2];
            }
            _this10.scheduleOnce(function () {
              tween(_this10.enter_free_btn).to(0.2, {
                scale: v3(1.4, 1.4, 1)
              }).start();
              tween(_this10.enter_free_btn_spine.node).to(0.2, {
                scale: v3(1.4, 1.4, 1)
              }).start();
            }, 0.2);
            _this10.run_box.getComponent(slotWinWinFishPrawnCrabViewRun).scatterRunNormal();
            _this10.notice_free.active = true;
          }, 2);
        }
        //进入免费游戏
        ;

        _proto.enterFreePage = function enterFreePage() {
          var _this11 = this;
          this._startFreeTime = 0;
          this.enter_free.active = false;
          this.enter_free_spine.node.active = false;
          this.top_normal_wan.active = false;
          this.top_free_wan.active = true;
          this.bg_bot_free.active = true;
          this.free_heart_instance.active = false;
          this.free_total_time_spine.node.active = false;
          this.bg_bot.active = false;
          //this.bg_spine.node.active = false
          this.bg_free.active = true;
          this._freeLastTime = slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount;
          this.free_heart_frame.getComponent(Sprite).spriteFrame = this.free_heart_box[slotWinWinFishPrawnCrabProxy.result.FreeInfo.HeartCount - 3];
          this.free_total_time.getComponent(Label).string = slotWinWinFishPrawnCrabProxy.result.FreeInfo.TotalCount + "";
          this.free_total_old_time.getComponent(Label).string = slotWinWinFishPrawnCrabProxy.result.FreeInfo.TotalCount + "";
          //渲染心跳
          for (var i = 0; i < slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount; i++) {
            var node = instantiate(this.free_heart_instance);
            node.getChildByName("num").getComponent(Label).string = i + 1 + "";
            node.name = "heart" + i;
            node.parent = this.free_heart_frame;
            node.active = true;
            node.setPosition(v3(this.heartPostion[slotWinWinFishPrawnCrabProxy.result.FreeInfo.HeartCount - 3][i], 0));
            if (i == slotWinWinFishPrawnCrabProxy.result.FreeInfo.RemainCount - 1) {
              node.getChildByName("heartSpine").getComponent(sp.Skeleton).setAnimation(0, "love_idle2", true);
            } else {
              node.getChildByName("heartSpine").getComponent(sp.Skeleton).setAnimation(0, "love_idle1", true);
            }
          }
          //初次进入到免费模式，scatter需要闪几次
          if (slotWinWinFishPrawnCrabProxy.freeTotalWin == 0) {
            this.run_box.getComponent(slotWinWinFishPrawnCrabViewRun).scatterRunFast();
            this.scheduleOnce(function () {
              _this11.changeState(RunState.NORMAL);
              _this11._lock = false;
              _this11._isFree = true;
            }, 0.5);
          } else {
            this.changeState(RunState.NORMAL);
            this._lock = false;
            this._isFree = true;
          }
        }
        //进入结束免费模式页面
        ;

        _proto.endFree = function endFree() {
          var _this12 = this;
          this.free_end_cash.reset();
          this.notice_free.active = false;
          this.top_normal_wan.active = true;
          this.top_free_wan.active = false;
          this.bg_bot_free.active = false;
          this.bg_bot.active = true;
          //this.bg_spine.node.active = true
          this.bg_free.active = false;
          this._isFree = false;
          this.free_end.active = true;
          this.free_end_spine.node.active = true;
          this.free_end_spine.setAnimation(0, "intro", false);
          this.free_end_spine.addAnimation(0, "idle", true);
          this.free_end_cash.string = Common.numFormat(slotWinWinFishPrawnCrabProxy.freeTotalWin);
          this.free_end_time.getComponent(UIOpacity).opacity = 0;
          this.free_end_time.getComponent(Label).string = this.free_total_time.getComponent(Label).string;
          tween(this.free_end_time.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).start();
          this.free_end_btn.setScale(0, 0);
          this.free_end_btn_spine.node.setScale(0, 0);

          //头部金额设置成免费模式总金额
          this.changeAdBg(slotWinWinFishPrawnCrabProxy.freeTotalWin);
          this.all_win_number.reset(slotWinWinFishPrawnCrabProxy.freeTotalWin);

          //免费模式结束音乐
          slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.bgmTotalwinMain, function (id) {
            _this12._audioId = id;
            _this12.scheduleOnce(function () {
              AudioManager.instance.stopSound(id);
              slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.bgmTotalwinEnd, function (id) {
                _this12._audioId = id;
              });
            }, 3);
          });
          this.scheduleOnce(function () {
            tween(_this12.free_end_cash.node).to(0.2, {
              scale: v3(1.2, 1.2, 1)
            }).start();
            tween(_this12.free_end_btn).to(0.2, {
              scale: v3(1.4, 1.4, 1)
            }).start();
            tween(_this12.free_end_btn_spine.node).to(0.2, {
              scale: v3(1.4, 1.4, 1)
            }).call(function () {
              _this12._endFreeTime = 5;
            }).start();
          }, 1.3);
        }
        //免费模式结束进入到普通模式
        ;

        _proto.endNormal = function endNormal() {
          if (slotWinWinFishPrawnCrabProxy.freeTotalWin > 0) {
            this.all_win.active = true;
            this.all_win_number.reset(slotWinWinFishPrawnCrabProxy.freeTotalWin);
            this.txt_win.reset(slotWinWinFishPrawnCrabProxy.freeTotalWin);
            this.notice_bg.active = false;
          } else {
            this.txt_win.reset(0);
            this.notice_bg.active = true;
            this.all_win.active = false;
          }
          AudioManager.instance.stopAllEffect();
          slotWinWinFishPrawnCrabDef.palyMusic(slotWinWinFishPrawnCrabDef.audio.bgm_mg);
          this.free_end.active = false;
          this._endFreeTime = 0;
          this._lock = false;
          this.changeState(RunState.NORMAL);
          slotWinWinFishPrawnCrabProxy.freeTotalWin = 0;
          this.startGameAni(false);
        }
        //头部倍数移动 && 金额变化
        ;

        _proto.changeTopCash = function changeTopCash() {
          var _this13 = this;
          if (this.notice_bg.active) {
            this.notice_bg.active = false;
          }
          if (this.notice_free.active) {
            this.notice_free.active = false;
          }
          var current_odd = parseInt(this.current_odd.getComponent(Label).string.replace(/x/g, ""));
          if (current_odd == 1) {
            this.one_win.setPosition(v3(0, -60));
            this.one_win.getComponent(UIOpacity).opacity = 0;
            this.one_win.getChildByName("number").getComponent(Label).string = Common.numFormat(this._current_result["Res"][this._current_index]["RewardMoney"] + "");
            this.one_win.active = true;
            tween(this.one_win).to(0.3, {
              position: v3(0, 0)
            }).start();
            tween(this.one_win.getComponent(UIOpacity)).to(0.3, {
              opacity: 255
            }).call(function () {
              _this13.changeAdBg(parseInt(_this13.one_win.getChildByName("number").getComponent(Label).string.replace(/,/g, "")));
            }).start();

            //1倍
            slotWinWinFishPrawnCrabProxy.freeTotalWin += this._isFree ? this._current_result["Res"][this._current_index]["RewardMoney"] : 0;
            this.txt_win.string = Common.numFormat(this._current_result["Res"][this._current_index]["RewardMoney"] + "");
            this.txt_winFree.string = Common.numFormat(slotWinWinFishPrawnCrabProxy.freeTotalWin + "");
          } else {
            var oneAddCash = Math.floor(this._current_result["Res"][this._current_index]["RewardMoney"] / current_odd);
            var twoAddCash = this._current_result["Res"][this._current_index]["RewardMoney"] - oneAddCash;
            this.one_win.active = true;
            this.one_win.setPosition(v3(0, 0));
            this.one_win.getComponent(UIOpacity).opacity = 255;
            this.one_win.getChildByName("Sprite").getComponent(UIOpacity).opacity = 0;
            this.one_win.getChildByName("number").getComponent(Label).string = Common.numFormat(oneAddCash + "");
            this.changeAdBg(parseInt(this.one_win.getChildByName("number").getComponent(Label).string.replace(/,/g, "")));
            //大于1倍先添加部分
            slotWinWinFishPrawnCrabProxy.freeTotalWin += this._isFree ? oneAddCash : 0;
            this.txt_win.string = Common.numFormat(parseInt(this.txt_win.getComponent(Label).string.replace(/,/g, "")) + oneAddCash + "");
            this.txt_winFree.string = Common.numFormat(slotWinWinFishPrawnCrabProxy.freeTotalWin + "");

            //倍数移动到金额
            var oddCopy = instantiate(this.current_odd);
            oddCopy.parent = this.top_odd_box;
            oddCopy.name = "oddCopy";
            tween(oddCopy).to(0.2, {
              scale: v3(1.5, 1.5)
            }).to(0.3, {
              position: v3(0, -220),
              scale: v3(0.6, 0.6)
            }).start();
            tween(oddCopy.getComponent(UIOpacity)).delay(0.2).to(0.3, {
              opacity: 80
            }).call(function () {
              //隐藏没乘倍数金额样式
              _this13.one_win.getChildByName("Sprite").getComponent(UIOpacity).opacity = 0;
              _this13.one_win.getChildByName("number").getComponent(UIOpacity).opacity = 0;
              //金额变化声音
              if (_this13._isFree) {
                slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.multiFly);
              } else {
                slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.prizeSmallwinMultiplied);
              }
              _this13.scheduleOnce(function () {
                //显示乘倍数金额样式
                _this13.one_win.setPosition(v3(0, -60));
                _this13.one_win.getComponent(UIOpacity).opacity = 0;
                _this13.one_win.getChildByName("number").getComponent(Label).string = Common.numFormat(_this13._current_result["Res"][_this13._current_index]["RewardMoney"] + "");
                _this13.one_win.getChildByName("Sprite").getComponent(UIOpacity).opacity = 255;
                _this13.one_win.getChildByName("number").getComponent(UIOpacity).opacity = 255;
                _this13.top_odd_box.removeChild(_this13.top_odd_box.getChildByName("oddCopy"));
                tween(_this13.one_win).to(0.2, {
                  position: v3(0, 0)
                }).call(function () {
                  _this13.changeAdBg(parseInt(_this13.one_win.getChildByName("number").getComponent(Label).string.replace(/,/g, "")));
                }).start();
                tween(_this13.one_win.getComponent(UIOpacity)).to(0.2, {
                  opacity: 255
                }).start();

                //大于1倍添加剩余部分
                slotWinWinFishPrawnCrabProxy.freeTotalWin += _this13._isFree ? twoAddCash : 0;
                _this13.txt_win.string = Common.numFormat(parseInt(_this13.txt_win.getComponent(Label).string.replace(/,/g, "")) + twoAddCash + "");
                _this13.txt_winFree.string = Common.numFormat(slotWinWinFishPrawnCrabProxy.freeTotalWin + "");
              }, 0.1);
            }).start();
          }
        }
        //头部获取总金额
        ;

        _proto.changeTopTotalCash = function changeTopTotalCash() {
          var _this14 = this;
          this.one_win.active = false;
          this.all_win.setPosition(v3(0, -60));
          this.all_win.getComponent(UIOpacity).opacity = 0;
          var odd = this._win_totalMoney / this._bet;
          if (odd <= 5) {
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.prizeInfobarTotalwin);
            this.all_win.getChildByName("number").getComponent(Label).string = Common.numFormat(this._win_totalMoney + "");
          } else {
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.prizeInfobarTotalwinMedMain, function (id) {
              _this14._totalCashAudioId = id;
            });
            this.all_win_number.string = Common.numFormat(this._win_totalMoney + "");
            this.scheduleOnce(function () {
              AudioManager.instance.stopSound(_this14._totalCashAudioId);
              slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.prizeInfobarTotalwinMedEnd);
            }, 0.5);
          }
          this.all_win.active = true;
          //金额
          tween(this.all_win).to(0.3, {
            position: v3(0, 0)
          }).call(function () {
            _this14.changeAdBg(_this14._win_totalMoney);
          }).start();
          tween(this.all_win.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).start();
        }
        //头部渲染新倍数
        ;

        _proto.changeTopOdd = function changeTopOdd() {
          var _this15 = this;
          if (this._isFree) {
            if (parseInt(this.current_odd.getComponent(Label).string.replace(/x/g, "")) <= slotWinWinFishPrawnCrabProxy.result.FreeInfo["Multiple"]) {
              this.add_odd.getComponent(Label).string = "x" + (parseInt(this.current_odd.getComponent(Label).string.replace(/x/g, "")) + 1 + "");
              this.add_odd.setPosition(v3(0, -60));
              this.add_odd.getComponent(UIOpacity).opacity = 0;
              this.add_odd.active = true;
              tween(this.add_odd).to(0.5, {
                position: v3(0, 0)
              }).start();
              tween(this.add_odd.getComponent(UIOpacity)).to(0.5, {
                opacity: 255
              }).start();
              tween(this.current_odd).to(0.5, {
                position: v3(0, 60)
              }).start();
              tween(this.current_odd.getComponent(UIOpacity)).to(0.5, {
                opacity: 0
              }).call(function () {
                //倍数变化
                if (parseInt(_this15.add_odd.getComponent(Label).string.replace(/x/g, "")) > 1) {
                  _this15.odd_spine.node.active = true;
                  _this15.odd_spine.setAnimation(0, "level_up_intro", false);
                  _this15.odd_spine.addAnimation(0, "level_up_idle", true);
                }
                slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.multiUp);
                _this15.current_odd.setPosition(v3(0, 0));
                _this15.current_odd.getComponent(Label).string = "x" + (parseInt(_this15.current_odd.getComponent(Label).string.replace(/x/g, "")) + 1 + "");
                _this15.current_odd.getComponent(UIOpacity).opacity = 255;
                _this15.add_odd.active = false;
              }).start();
            }
          } else {
            this.add_odd.getComponent(Label).string = "x" + (parseInt(this.current_odd.getComponent(Label).string.replace(/x/g, "")) + 1 + "");
            this.add_odd.setPosition(v3(0, -60));
            this.add_odd.getComponent(UIOpacity).opacity = 0;
            this.add_odd.active = true;
            tween(this.add_odd).to(0.5, {
              position: v3(0, 0)
            }).start();
            tween(this.add_odd.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).start();
            tween(this.current_odd).to(0.5, {
              position: v3(0, 60)
            }).start();
            tween(this.current_odd.getComponent(UIOpacity)).to(0.5, {
              opacity: 0
            }).call(function () {
              //倍数变化
              _this15.odd_spine.node.active = true;
              _this15.odd_spine.setAnimation(0, "level_up_intro", false);
              _this15.odd_spine.addAnimation(0, "level_up_idle", true);
              slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.multiUp);
              _this15.current_odd.setPosition(v3(0, 0));
              _this15.current_odd.getComponent(Label).string = "x" + (parseInt(_this15.current_odd.getComponent(Label).string.replace(/x/g, "")) + 1 + "");
              _this15.current_odd.getComponent(UIOpacity).opacity = 255;
              _this15.add_odd.active = false;
            }).start();
          }
        }

        //广告栏背景动画变化
        ;

        _proto.changeAdBg = function changeAdBg(num) {
          var odd = num / this._bet;
          if (odd <= 5) {
            this.notice_spine.setAnimation(0, "normal_win", false);
            this.notice_spine.addAnimation(0, "normal_idle", true);
          } else if (odd > 5 && odd < 60) {
            this.notice_spine.setAnimation(0, "bigwin_win", false);
            this.notice_spine.addAnimation(0, "bigwin_idle", true);
          } else {
            this.notice_spine.setAnimation(0, "bigwin2_win", false);
            this.notice_spine.addAnimation(0, "bigwin2_idle", true);
          }
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
            console.log("clickHideBigWin");
            AudioManager.instance.stopSound(_this16._audioId);
            _this16._audioId = null;
          }, 1);
        }

        //计算结果
        ;

        _proto.calResult = function calResult(call) {
          var _this17 = this;
          this._cal_current_result.scatterNum = 0;
          this._cal_current_result.showLineIndex = 0;
          //针对第一轮的每束的期待动画和全局的期待动画
          if (this._current_index == 0) {
            if (this._current_result["Res"]) {
              this._current_result["Res"][this._current_index]["AllPosMsg"].map(function (item, index) {
                var itemCache = JSON.parse(JSON.stringify(item));
                _this17._cal_current_result.result[index] = itemCache.reverse();
                item.map(function (item1, index1) {
                  if (item1.Sym == "1") {
                    _this17._cal_current_result.scatterNum += 1;
                    if (_this17._cal_current_result.scatterNum == 2) {
                      _this17._cal_current_result.showLineIndex = index + 1;
                    }
                  }
                });
              });
            }
          } else {
            if (this._current_result["Res"]) {
              this._current_result["Res"][this._current_index]["AllPosMsg"].map(function (item, index) {
                var itemCache = JSON.parse(JSON.stringify(item));
                _this17._cal_current_result.result[index] = itemCache.reverse();
              });
              //不是第一轮，计算上一轮一共多少satter，确定这一轮是否展示全局期待动画
              this._current_result["Res"][this._current_index - 1]["AllPosMsg"].map(function (item, index) {
                item.map(function (item1, index1) {
                  if (item1.Sym == "1") {
                    _this17._cal_current_result.scatterNum += 1;
                  }
                });
              });
            }
          }
          this._current_result.win = [];
          // if (this._current_result['Res'][this._current_index]['RewardPos']) {
          //     this._current_result['Res'][this._current_index]['RewardPos'].map((item, index) => {
          //         item.map((item1, index1) => {
          //             let childIndex = 0
          //             if (index1 == 0 || index1 == 5) {
          //                 item1 == 0 ? childIndex = 3 : item1 == 1 ? childIndex = 2 : item1 == 2 ? childIndex = 1 : childIndex = 0
          //             } else {
          //                 item1 == 0 ? childIndex = 4 : item1 == 1 ? childIndex = 3 : item1 == 2 ? childIndex = 2 : item1 == 3 ? childIndex = 1 : childIndex = 0
          //             }
          //             this._current_result.win.push({ parentIndex: index1, childIndex: childIndex })
          //         })
          //     })
          // }

          if (this._current_result["Res"] && this._current_result["Res"][this._current_index]["RewardMsg"]) {
            var RewardMsg = this._current_result["Res"][this._current_index]["RewardMsg"];
            var _loop = function _loop(i) {
              _this17._cal_current_result.result.map(function (item, index) {
                item.map(function (item1, index1) {
                  if ((item1.Sym == i || item1.Sym == 2) && index <= RewardMsg[i][0] - 1) {
                    _this17._current_result.win.push({
                      parentIndex: index,
                      childIndex: index1
                    });
                  }
                });
              });
            };
            for (var i in RewardMsg) {
              _loop(i);
            }
          }
          call && call();
        }

        //事件监听
        ;

        _proto.initEvent = function initEvent() {
          var _this18 = this;
          //进入页面获取上次数据
          slotWinWinFishPrawnCrabProxy.on(slotWinWinFishPrawnCrabGameEvent.UPDATE_BETLIST, this.initPage, this);
          slotWinWinFishPrawnCrabProxy.on(slotWinWinFishPrawnCrabGameEvent.SELECT_BET, function (count) {
            _this18.updateSetData();
            Tween.stopAllByTarget(_this18.txt_bet.node);
            tween(_this18.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }, this);

          //第一轮结束
          slotWinWinFishPrawnCrabProxy.on(slotWinWinFishPrawnCrabGameEvent.END, function () {
            _this18.changeState(RunState.STOP);
          }, this);

          //中奖号码消失动画结束
          slotWinWinFishPrawnCrabProxy.on(slotWinWinFishPrawnCrabGameEvent.SHOWNEXT, function () {
            _this18.changeState(RunState.SHOWNEXT);
          }, this);

          //补充新一轮号码结束
          slotWinWinFishPrawnCrabProxy.on(slotWinWinFishPrawnCrabGameEvent.SHOWNEXTEND, function () {
            _this18.changeState(RunState.SHOWNEXTEND);
          }, this);

          //渲染新的倍数
          slotWinWinFishPrawnCrabProxy.on(slotWinWinFishPrawnCrabGameEvent.CHANGETOPODD, function () {
            _this18.changeTopOdd();
          }, this);

          //期待光线-》公告栏展示对应公告
          slotWinWinFishPrawnCrabProxy.on(slotWinWinFishPrawnCrabGameEvent.NOTICESHOWANI, function () {
            _this18.notice_spine.node.active = false;
            _this18.notice_waitingFree_spine.node.active = true;
          }, this);
          //隐藏期待光线-》公告栏隐藏对应公告
          slotWinWinFishPrawnCrabProxy.on(slotWinWinFishPrawnCrabGameEvent.NOTICEHIDEANI, function () {
            _this18.notice_spine.node.active = true;
            _this18.notice_waitingFree_spine.node.active = false;
          }, this);

          //转盘提示
          slotWinWinFishPrawnCrabProxy.on(slotWinWinFishPrawnCrabGameEvent.CLICK_ITEM, function (data) {
            if (_this18._isFree) return;
            if (_this18._auto) return;
            if (_this18._lock) return;
            _this18._window.node.scale = v3(1, 1, 1);
            _this18._window.node.active = true;
            _this18._window.showCard(data.sym, data.parentIndex);
            var node = instantiate(_this18.run_mask);
            node.getComponent(UITransform).priority = 100;
            node.name = "run_mask_instance";
            node.parent = _this18.run_box;
            node.active = true;
            _this18.windowMask.active = true;
            var pos = data.pos;
            pos = _this18.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
            if (data.parentIndex <= 2) {
              if (data.sym == 1) {
                pos.x = pos.x + 230;
              } else {
                pos.x = pos.x + 170;
              }
            } else {
              if (data.sym == 1) {
                pos.x = pos.x - 230;
              } else {
                pos.x = pos.x - 170;
              }
            }
            _this18._window.node.setPosition(pos.x, pos.y);
          }, this);

          //修改下注金额
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.on(ConfigManager.eventTransform.setQuick, this.clickChangeQuick, this);
        }

        //隐藏介绍图
        ;

        _proto.hideWindow = function hideWindow() {
          if (this.run_box.getChildByName("run_mask_instance")) {
            this.run_box.getChildByName("run_mask_instance").removeFromParent();
          }
          this.windowMask.active = false;
          this._window.hideCard();
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
              if (slotWinWinFishPrawnCrabProxy.result.prizeAmount > 0) {
                _this19.turn_start.addAnimation(0, "stop", true);
              } else {
                _this19.turn_start.addAnimation(0, "idle", true);
              }
            });
          } else {
            this.turn_start.setAnimation(0, "idle", true);
          }
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
            this.turn_start.getComponent(AddSpineEffect).animation = "push2";
            this.turn_start.setAnimation(0, "auto", true);
            this.scheduleOnce(function () {
              _this20.turn_start.setAnimation(0, "auto", true);
            });
            this.turn_start.setAnimation(0, "auto", true);
          } else {
            this._auto = false;
            //this.changeBtnActive(false)
            this.turn_start.getComponent(AddSpineEffect).animation = "push1";
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
            if (slotWinWinFishPrawnCrabProxy.getBet() == 2000) {
              this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 60;
              this._isMinBet = true;
            } else {
              this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
              this._isMinBet = false;
            }
            if (slotWinWinFishPrawnCrabProxy.getBet() == 1000000) {
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
          this._bet = slotWinWinFishPrawnCrabProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet);
          this.txt_betFree.string = Common.numFormat(this._bet);
        }
        //更新下注金额
        ;

        _proto.setBet = function setBet(betListIndex, betCount) {
          slotWinWinFishPrawnCrabProxy.setBet(betListIndex, betCount);
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
          if (this.isInitReadyIntoFree) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetBase", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            console.log(sys.isMobile, "aaa");
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1334, 1080 / 1334, 1);
            } else {
              node.scale = v3(1.45, 1.45, 1);
              node.angle = 90;
            }
            node.getComponent(FortuneSetBase).setData({
              _curBetListIndex: slotWinWinFishPrawnCrabProxy._curBetListIndex,
              _curBetCount: slotWinWinFishPrawnCrabProxy._curBetCount,
              betMaxCount: slotWinWinFishPrawnCrabProxy.betMaxCount,
              betList: slotWinWinFishPrawnCrabProxy.betList,
              betRate: slotWinWinFishPrawnCrabProxy.betRate
            });
          }, true);
        }
        //按钮减少下注金额
        ;

        _proto.clickDownBet = function clickDownBet() {
          if (this._isMinBet) return;
          if (this._auto) return;
          if (this._lock) return;
          slotWinWinFishPrawnCrabProxy._curBetCount--;
          if (slotWinWinFishPrawnCrabProxy._curBetCount < 0) {
            slotWinWinFishPrawnCrabProxy._curBetListIndex--;
            if (slotWinWinFishPrawnCrabProxy._curBetListIndex < 0) {
              slotWinWinFishPrawnCrabProxy._curBetListIndex++;
              slotWinWinFishPrawnCrabProxy._curBetCount++;
            } else {
              slotWinWinFishPrawnCrabProxy._curBetCount = slotWinWinFishPrawnCrabProxy.betMaxCount - 1;
              slotWinWinFishPrawnCrabProxy.setBet(slotWinWinFishPrawnCrabProxy._curBetListIndex, slotWinWinFishPrawnCrabProxy._curBetCount);
            }
          } else {
            slotWinWinFishPrawnCrabProxy.setBet(slotWinWinFishPrawnCrabProxy._curBetListIndex, slotWinWinFishPrawnCrabProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //按钮增加下注金额
        ;

        _proto.clickUpBet = function clickUpBet() {
          if (this._auto) return;
          if (this._lock) return;
          slotWinWinFishPrawnCrabProxy._curBetCount++;
          if (slotWinWinFishPrawnCrabProxy._curBetCount >= slotWinWinFishPrawnCrabProxy.betMaxCount) {
            slotWinWinFishPrawnCrabProxy._curBetListIndex++;
            if (slotWinWinFishPrawnCrabProxy._curBetListIndex >= slotWinWinFishPrawnCrabProxy.betList.length) {
              slotWinWinFishPrawnCrabProxy._curBetListIndex--;
              slotWinWinFishPrawnCrabProxy._curBetCount--;
            } else {
              slotWinWinFishPrawnCrabProxy._curBetCount = 0;
              slotWinWinFishPrawnCrabProxy.setBet(slotWinWinFishPrawnCrabProxy._curBetListIndex, slotWinWinFishPrawnCrabProxy._curBetCount);
            }
          } else {
            slotWinWinFishPrawnCrabProxy.setBet(slotWinWinFishPrawnCrabProxy._curBetListIndex, slotWinWinFishPrawnCrabProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //确定下注金额是否可以减少/增加
        ;

        _proto.checkDownOrUpBet = function checkDownOrUpBet() {
          if (slotWinWinFishPrawnCrabProxy.getBet() == 2000) {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 60;
            this._isMinBet = true;
          } else {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
            this._isMinBet = false;
          }
          if (slotWinWinFishPrawnCrabProxy.getBet() == 1000000) {
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
          if (this.isInitReadyIntoFree) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._bet) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.setAuto(0);
            return;
          }
          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetAuto", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1334, 1080 / 1334, 1);
            } else {
              node.scale = v3(1.45, 1.45, 1);
              node.angle = 90;
            }
            node.getComponent(FortuneSetAuto).setData({
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
          Common.returnToHall(this, slotWinWinFishPrawnCrabProxy.BUNDLE);
        }
        //展示规则
        ;

        _proto.clickShowRule = function clickShowRule() {
          if (this.isInitReadyIntoFree) return;
          Common.loadPopBuddle("prefab/slotWinWinFishPrawnCrabHelp", slotWinWinFishPrawnCrabProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.setScale(v3(1080 / 1334, 1080 / 1334, 1));
            } else {
              node.scale = v3(1.45, 1.45, 1);
              node.angle = 90;
            }
          }, true);
        }
        //展示历史记录
        ;

        _proto.clickShowHistory = function clickShowHistory() {
          if (this._lock) return;
          if (this.isInitReadyIntoFree) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneHistory", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1334, 1080 / 1334, 1);
            } else {
              node.scale = v3(1.45, 1.45, 1);
              node.angle = 90;
            }
            node.getComponent(FortuneHistory).setGameType("slotWinWinFishPrawnCrab");
          }, true);
        }

        //展示排行榜
        ;

        _proto.clickShowRank = function clickShowRank() {
          if (this.isInitReadyIntoFree) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneRank", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1334, 1080 / 1334, 1);
            } else {
              node.scale = v3(1.45, 1.45, 1);
              node.angle = 90;
            }
            node.getComponent(FortuneRank).send("slotWinWinFishPrawnCrab");
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

        return slotWinWinFishPrawnCrabView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab_windowItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "windowMask", [_dec4], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "game_type", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "notice_spine", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "notice_waitingFree_spine", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "notice_bg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames_free", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "notice_free", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames_wait", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "txt_betFree", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "txt_winFree", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "txt_goldFree", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "run_box", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "run_mask", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "top_normal_wan", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "top_free_wan", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "top_odd_box", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "current_odd", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "add_odd", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "odd_spine", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "one_win", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "all_win", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "all_win_number", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "turn_start", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "turn_auto_leftCount", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "big_win_box", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "big_win", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "big_win_txt", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "bg_bot", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "bg_spine", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "bg_free", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "bg_bot_free", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "enter_free", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_spine", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_btn", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_btn_spine", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "free_heart_box", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "free_heart_frame", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "free_heart_instance", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "free_total_time", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "free_total_old_time", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "free_total_time_spine", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "free_end", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "free_end_spine", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "free_end_time", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "free_end_cash", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "free_end_btn", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "free_end_btn_spine", [_dec57], {
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

System.register("chunks:///_virtual/slotWinWinFishPrawnCrabViewRun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotWinWinFishPrawnCrabItem.ts', './slotWinWinFishPrawnCrabProxy.ts', './AudioManager.ts', './slotWinWinFishPrawnCrabDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, sp, Mask, instantiate, v3, tween, UITransform, Component, slotWinWinFishPrawnCrabItem, slotWinWinFishPrawnCrabProxy, slotWinWinFishPrawnCrabGameEvent, AudioManager, slotWinWinFishPrawnCrabDef;
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
      Mask = module.Mask;
      instantiate = module.instantiate;
      v3 = module.v3;
      tween = module.tween;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      slotWinWinFishPrawnCrabItem = module.slotWinWinFishPrawnCrabItem;
    }, function (module) {
      slotWinWinFishPrawnCrabProxy = module.default;
      slotWinWinFishPrawnCrabGameEvent = module.slotWinWinFishPrawnCrabGameEvent;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      slotWinWinFishPrawnCrabDef = module.slotWinWinFishPrawnCrabDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "89432HGTVJByaexariM4nK6", "slotWinWinFishPrawnCrabViewRun", undefined);
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
      var slotWinWinFishPrawnCrabViewRun = exports('slotWinWinFishPrawnCrabViewRun', (_dec = ccclass("slotWinWinFishPrawnCrabViewRun"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWinWinFishPrawnCrabViewRun, _Component);
        function slotWinWinFishPrawnCrabViewRun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run_mask", _descriptor2, _assertThisInitialized(_this));
          //转盘遮照层demo
          _initializerDefineProperty(_this, "wait_light", _descriptor3, _assertThisInitialized(_this));
          //全部期待光效
          _initializerDefineProperty(_this, "light1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light3", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light4", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light5", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "line1", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "line2", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "line3", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "line4", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "line5", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "line6", _descriptor14, _assertThisInitialized(_this));
          _this._positionX = [-415, -249, -83, 83, 249, 415];
          //width:166
          _this._positionY1 = [430, 260, 90, -80, -250];
          //height:170
          _this._positionY2 = [508, 338, 168, -2, -172, -342];
          _this._runType = "normal";
          _this._itemHeight = 170;
          _this._moveSteps1 = 100;
          _this._moveSteps2 = 120;
          _this._normalMoveStep = [100, 120, 120, 120, 120, 100];
          //426 505
          _this._state = CardState.NORMAL;
          _this._dataList = [[], [], [], [], [], []];
          _this._result = [[], [], [], [], [], []];
          _this._isGetResult = false;
          _this._showLineIndex = 0;
          _this._scatterNum = 0;
          _this._normalGetResult = [false, false, false, false, false, false];
          _this._time1 = 0.05;
          _this._time2 = 0.1;
          _this._time3 = 0.15;
          _this._time4 = 0.2;
          _this._time5 = 0.25;
          _this._resultTime = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
          _this._run_mask = null;
          _this.gameTime = 20;
          //消除后模块层级处理 递减
          _this._getResultNum = 0;
          return _this;
        }
        var _proto = slotWinWinFishPrawnCrabViewRun.prototype;
        /* 
        1 递减 5； 
        2 递减 2； 缩放 0.96 递增0.01
        3 递减 1； 缩放 0.96 递增0.01
        4 递增 1； 缩放 0.96 递增0.01
        5 递增 2； 缩放 0.96 递增0.01
        6 递增 5
        */
        _proto.start = function start() {
          this.node.removeAllChildren();
        };
        _proto.initPage = function initPage(data) {
          var _this2 = this;
          if (data && data.length == 6) {
            this.node.getComponent(Mask).enabled = false;
            data.map(function (item, index) {
              item.map(function (item1, index1) {
                var node = instantiate(_this2.pre_card);
                var com = node.getComponent(slotWinWinFishPrawnCrabItem);
                node.parent = _this2.node;
                com["cardData"] = item;
                com.initItem(item1.Sym, index, true, _this2.gameTime + index1, true);
                var positionX = 0;
                var scaleX = 1;
                if (index == 0) {
                  positionX = _this2._positionX[index] - index1 * 5;
                } else if (index == 1) {
                  positionX = _this2._positionX[index] - index1 * 2;
                } else if (index == 2) {
                  positionX = _this2._positionX[index] - index1 * 1;
                } else if (index == 3) {
                  positionX = _this2._positionX[index] + index1 * 1;
                } else if (index == 4) {
                  positionX = _this2._positionX[index] + index1 * 2;
                } else if (index == 5) {
                  positionX = _this2._positionX[index] + index1 * 5;
                }
                if (index != 0 && index != 5) {
                  scaleX -= (4 - index1) * 0.01;
                }
                _this2._dataList[index].push(com);
                node.setPosition(v3(positionX, index == 0 || index == 5 ? _this2._positionY1[index1 + 1] : _this2._positionY2[index1 + 1]));
                node.getChildByName("bg").setScale(v3(scaleX, 1, 1));
              });
            });
          }
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.run = function run(type) {
          var _this3 = this;
          this._dataList.map(function (item, index) {
            if (index == 0 || index == 5) {
              if (item.length > 4) {
                for (var i = 0; i < item.length - 4; i++) {
                  //this.node.removeChild(item[i].node)
                  item[i].node.removeFromParent();
                }
                item.splice(0, item.length - 4);
                var positionX = 0;
                item.map(function (item1, index1) {
                  if (index == 0) {
                    positionX = _this3._positionX[index] - index1 * 5;
                  } else if (index == 5) {
                    positionX = _this3._positionX[index] + index1 * 5;
                  }
                  item1.node.setPosition(v3(positionX, _this3._positionY1[index1 + 1]));
                });
              }
            } else {
              if (item.length > 5) {
                for (var _i = 0; _i < item.length - 5; _i++) {
                  //this.node.removeChild(item[i].node)
                  item[_i].node.removeFromParent();
                }
                item.splice(0, item.length - 5);
                var _positionX = 0;
                item.map(function (item1, index1) {
                  if (index == 1) {
                    _positionX = _this3._positionX[index] - index1 * 2;
                  } else if (index == 2) {
                    _positionX = _this3._positionX[index] - index1 * 1;
                  } else if (index == 3) {
                    _positionX = _this3._positionX[index] + index1 * 1;
                  } else if (index == 4) {
                    _positionX = _this3._positionX[index] + index1 * 2;
                  }
                  item1.node.setPosition(v3(_positionX, _this3._positionY1[index1 + 1]));
                });
              }
            }
          });
          this._runType = type;
          this.node.getComponent(Mask).enabled = true;
          this._dataList.map(function (item, index) {
            item.map(function (item1) {
              if (item1["cardData"] && item1["cardData"].Sym == 1) {
                item1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterOrWildAniStop(1);
              } else if (item1["cardData"] && item1["cardData"].Sym == 2) {
                item1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterOrWildAniStop(2);
              }
            });
            var cardData = {
              Sym: Math.floor(Math.random() * 10) + 3
            };
            var node = instantiate(_this3.pre_card);
            var com = node.getComponent(slotWinWinFishPrawnCrabItem);
            //com.getComponent(cc.UIOpacity).opacity = 0
            com["cardData"] = cardData;
            node.parent = _this3.node;
            node.setPosition(v3(_this3._positionX[index], index == 0 || index == 5 ? _this3._positionY1[0] : _this3._positionY2[0]));
            com.initItem(cardData.Sym, index, false);
            item.unshift(com);
          });
          this.scheduleOnce(function () {
            _this3._runType == "fast" ? _this3.setState(CardState.RUNFAST) : _this3.setState(CardState.RUNNORMAL);
          }, 0.2);
        };
        _proto.runOne = function runOne(currentIndex) {
          var _this4 = this;
          this._dataList[currentIndex].map(function (item, index) {
            var bottomY = currentIndex == 0 || currentIndex == 5 ? -250 : -345;
            var moveSteps = currentIndex == 0 || currentIndex == 5 ? _this4._moveSteps1 : _this4._moveSteps2;
            if (currentIndex == 0) {
              item.node.setPosition(v3(item.node.getPosition().x - 1.8, item.node.getPosition().y - moveSteps, 0));
            } else if (currentIndex == 1) {
              item.node.setPosition(v3(item.node.getPosition().x - 1, item.node.getPosition().y - moveSteps, 0));
            } else if (currentIndex == 2) {
              item.node.setPosition(v3(item.node.getPosition().x - 0.5, item.node.getPosition().y - moveSteps, 0));
            } else if (currentIndex == 3) {
              item.node.setPosition(v3(item.node.getPosition().x + 0.5, item.node.getPosition().y - moveSteps, 0));
            } else if (currentIndex == 4) {
              item.node.setPosition(v3(item.node.getPosition().x + 1, item.node.getPosition().y - moveSteps, 0));
            } else if (currentIndex == 5) {
              item.node.setPosition(v3(item.node.getPosition().x + 1.8, item.node.getPosition().y - moveSteps, 0));
            }
            if (item.node.getPosition().y <= bottomY - _this4._itemHeight) {
              if (_this4._isGetResult) {
                _this4.setState(CardState.RESULTNORMAL);
              } else {
                //随机重新生成卡片以及设置位置
                var cardData = {
                  Sym: Math.floor(Math.random() * 10) + 3
                };
                item.node.setPosition(v3(_this4._positionX[currentIndex], item.node.getPosition().y + _this4._itemHeight * _this4._dataList[currentIndex].length));
                item["cardData"] = cardData;
                item.initItem(cardData.Sym, currentIndex, false);
              }
            }
          });
        };
        _proto.resultOne = function resultOne(currentIndex) {
          var _this5 = this;
          if (!this._normalGetResult[currentIndex]) {
            if (currentIndex == 0 || currentIndex == 5) {
              this._normalMoveStep[currentIndex] -= 10;
              if (this._normalMoveStep[currentIndex] <= 50) {
                this._normalMoveStep[currentIndex] = 70;
              }
            } else {
              this._normalMoveStep[currentIndex] -= 12;
              if (this._normalMoveStep[currentIndex] <= 56) {
                this._normalMoveStep[currentIndex] = 84;
              }
            }
            if (this._dataList[currentIndex]) {
              this._dataList[currentIndex].map(function (item, index) {
                var bottomY = currentIndex == 0 || currentIndex == 5 ? -250 : -345;
                if (currentIndex == 0) {
                  item.node.setPosition(v3(item.node.getPosition().x - _this5._normalMoveStep[currentIndex] / 80 * 1.8, item.node.getPosition().y - _this5._normalMoveStep[currentIndex], 0));
                } else if (currentIndex == 1) {
                  item.node.setPosition(v3(item.node.getPosition().x - _this5._normalMoveStep[currentIndex] / 96 * 1, item.node.getPosition().y - _this5._normalMoveStep[currentIndex], 0));
                } else if (currentIndex == 2) {
                  item.node.setPosition(v3(item.node.getPosition().x - _this5._normalMoveStep[currentIndex] / 96 * 0.5, item.node.getPosition().y - _this5._normalMoveStep[currentIndex], 0));
                } else if (currentIndex == 3) {
                  item.node.setPosition(v3(item.node.getPosition().x + _this5._normalMoveStep[currentIndex] / 96 * 0.5, item.node.getPosition().y - _this5._normalMoveStep[currentIndex], 0));
                } else if (currentIndex == 4) {
                  item.node.setPosition(v3(item.node.getPosition().x + _this5._normalMoveStep[currentIndex] / 96 * 1, item.node.getPosition().y - _this5._normalMoveStep[currentIndex], 0));
                } else if (currentIndex == 5) {
                  item.node.setPosition(v3(item.node.getPosition().x + _this5._normalMoveStep[currentIndex] / 80 * 1.8, item.node.getPosition().y - _this5._normalMoveStep[currentIndex], 0));
                }
                if (item.node.getPosition().y <= bottomY - _this5._itemHeight) {
                  item.node.setPosition(v3(_this5._positionX[currentIndex], item.node.getPosition().y + _this5._itemHeight * _this5._dataList[currentIndex].length));
                  if (item["cardData"]) {
                    if (index != 0) {
                      if (_this5._result[currentIndex][index - 1]) {
                        item["cardData"] = _this5._result[currentIndex][index - 1];
                        item.initItem(item["cardData"].Sym, currentIndex, true, _this5.gameTime + index);
                      }
                    } else {
                      item["cardData"] = {
                        Sym: Math.floor(Math.random() * 10) + 3
                      };
                      item.initItem(item["cardData"].Sym, currentIndex, false);
                    }
                  }
                }
                if (index == _this5._dataList[currentIndex].length - 1 && _this5._resultTime[currentIndex] <= 0 && item.node.getPosition().y <= bottomY) {
                  _this5._normalGetResult[currentIndex] = true;
                  _this5._normalMoveStep[currentIndex] = 0;

                  //删除第一个
                  //this.node.removeChild(this._dataList[currentIndex][0].node)
                  _this5._dataList[currentIndex][0].node.removeFromParent();
                  _this5._dataList[currentIndex].splice(0, 1);
                  slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.spinStop);
                  _this5._dataList[currentIndex].map(function (item, index) {
                    if (item && item["cardData"]) {
                      var positionX = 0;
                      var scaleX = 1;
                      if (currentIndex == 0) {
                        positionX = _this5._positionX[currentIndex] - index * 5;
                      } else if (currentIndex == 1) {
                        positionX = _this5._positionX[currentIndex] - index * 2;
                      } else if (currentIndex == 2) {
                        positionX = _this5._positionX[currentIndex] - index * 1;
                      } else if (currentIndex == 3) {
                        positionX = _this5._positionX[currentIndex] + index * 1;
                      } else if (currentIndex == 4) {
                        positionX = _this5._positionX[currentIndex] + index * 2;
                      } else if (currentIndex == 5) {
                        positionX = _this5._positionX[currentIndex] + index * 5;
                      }
                      _this5.hideLight(currentIndex);
                      tween(item.node).to(0.02, {
                        position: v3(positionX, currentIndex == 0 || currentIndex == 5 ? _this5._positionY1[index + 1] : _this5._positionY2[index + 1], 0)
                      }).call(function () {
                        if (currentIndex != 0 && currentIndex != 5) {
                          index == 0 ? scaleX = 0.96 : index == 1 ? scaleX = 0.97 : index == 2 ? scaleX = 0.98 : index == 3 ? scaleX = 0.99 : scaleX = 1;
                          if (_this5._showLineIndex != 0 && _this5._showLineIndex <= currentIndex + 1) {
                            _this5.showLight(currentIndex + 1);
                            //获取当前以及当前之前的线的scatter
                            for (var i = 0; i < currentIndex + 1; i++) {
                              _this5._dataList[i].map(function (data) {
                                if (data["cardData"] && data["cardData"]["Sym"] == 1) {
                                  data.node.getComponent(slotWinWinFishPrawnCrabItem).scatterWaitTwoShow();
                                }
                              });
                            }
                          }
                          if (item["cardData"] && item["cardData"]["Sym"] == 1) {
                            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.symScatter);
                          } else if (item["cardData"] && item["cardData"]["Sym"] == 2) {
                            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.symWild);
                          }
                        }
                        item.node.getChildByName("bg").setScale(v3(scaleX, 1, 1));
                      }).start();
                    }
                  });
                  if (currentIndex == 5) {
                    if (_this5._showLineIndex != 0) {
                      if (_this5.node.getChildByName("line1")) {
                        _this5.node.getChildByName("line1").destroy();
                      }
                      if (_this5.node.getChildByName("line2")) {
                        _this5.node.getChildByName("line2").destroy();
                      }
                      if (_this5.node.getChildByName("line3")) {
                        _this5.node.getChildByName("line3").destroy();
                      }
                      if (_this5.node.getChildByName("line4")) {
                        _this5.node.getChildByName("line4").destroy();
                      }
                      if (_this5.node.getChildByName("line5")) {
                        _this5.node.getChildByName("line5").destroy();
                      }
                      if (_this5.node.getChildByName("line6")) {
                        _this5.node.getChildByName("line6").destroy();
                      }

                      //获取所有线的scatter
                      _this5._dataList.map(function (data) {
                        data.map(function (data1) {
                          if (data1["cardData"] && data1["cardData"]["Sym"] == 1) {
                            data1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterWaitTwoHide();
                          }
                        });
                      });
                      _this5.scheduleOnce(function () {
                        _this5.setState(CardState.END);
                      }, 0.8);
                    } else {
                      _this5.scheduleOnce(function () {
                        _this5.setState(CardState.END);
                      }, 0.1);
                    }
                  }
                }
              });
            }
          }
        };
        _proto.getResult = function getResult(data, showLineIndex) {
          var _this6 = this;
          if (showLineIndex === void 0) {
            showLineIndex = 0;
          }
          this.gameTime = 20;
          this._result = data;
          this._showLineIndex = showLineIndex;
          if (this._showLineIndex != 0) {
            this._resultTime.map(function (item, index) {
              if (index >= _this6._showLineIndex) {
                _this6._resultTime[index] = item + (index + 1 - showLineIndex) / 2;
              }
            });
          }
          this._isGetResult = true;
        };
        _proto.showLight = function showLight(index) {
          var _this7 = this;
          if (index == 1 && !this.light1.node.active) {
            if (this.node.getChildByName("line2")) {
              this.node.getChildByName("line2").destroy();
            }
            if (!this.node.getChildByName("line1")) {
              var node1 = instantiate(this.line1);
              node1.name = "line1";
              node1.parent = this.node;
              node1.active = true;
              node1.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line3")) {
              var node3 = instantiate(this.line3);
              node3.name = "line3";
              node3.parent = this.node;
              node3.active = true;
              node3.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line4")) {
              var node4 = instantiate(this.line4);
              node4.name = "line4";
              node4.parent = this.node;
              node4.active = true;
              node4.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line5")) {
              var node5 = instantiate(this.line5);
              node5.name = "line5";
              node5.parent = this.node;
              node5.active = true;
              node5.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line6")) {
              var node6 = instantiate(this.line6);
              node6.name = "line6";
              node6.parent = this.node;
              node6.active = true;
              node6.getComponent(UITransform).priority = 50;
            }
            var _audioId = 0;
            this.light1.node.active = true;
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.fastspinStart, function (id) {
              _audioId = id;
              _this7.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId);
              }, 1.2);
            });
          }
          if (index == 2 && !this.light2.node.active) {
            if (this.node.getChildByName("line3")) {
              this.node.getChildByName("line3").destroy();
            }
            if (!this.node.getChildByName("line1")) {
              var _node = instantiate(this.line1);
              _node.name = "line1";
              _node.parent = this.node;
              _node.active = true;
              _node.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line2")) {
              var node2 = instantiate(this.line2);
              node2.name = "line2";
              node2.parent = this.node;
              node2.active = true;
              node2.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line4")) {
              var _node2 = instantiate(this.line4);
              _node2.name = "line4";
              _node2.parent = this.node;
              _node2.active = true;
              _node2.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line5")) {
              var _node3 = instantiate(this.line5);
              _node3.name = "line5";
              _node3.parent = this.node;
              _node3.active = true;
              _node3.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line6")) {
              var _node4 = instantiate(this.line6);
              _node4.name = "line6";
              _node4.parent = this.node;
              _node4.active = true;
              _node4.getComponent(UITransform).priority = 50;
            }
            var _audioId2 = 0;
            this.light2.node.active = true;
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.fastspinStart, function (id) {
              _audioId2 = id;
              _this7.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId2);
              }, 1.2);
            });
          }
          if (index == 3 && !this.light3.node.active) {
            if (this.node.getChildByName("line4")) {
              this.node.getChildByName("line4").destroy();
            }
            if (!this.node.getChildByName("line1")) {
              var _node5 = instantiate(this.line1);
              _node5.name = "line1";
              _node5.parent = this.node;
              _node5.active = true;
              _node5.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line2")) {
              var _node6 = instantiate(this.line2);
              _node6.name = "line2";
              _node6.parent = this.node;
              _node6.active = true;
              _node6.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line3")) {
              var _node7 = instantiate(this.line3);
              _node7.name = "line3";
              _node7.parent = this.node;
              _node7.active = true;
              _node7.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line5")) {
              var _node8 = instantiate(this.line5);
              _node8.name = "line5";
              _node8.parent = this.node;
              _node8.active = true;
              _node8.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line6")) {
              var _node9 = instantiate(this.line6);
              _node9.name = "line6";
              _node9.parent = this.node;
              _node9.active = true;
              _node9.getComponent(UITransform).priority = 50;
            }
            var _audioId3 = 0;
            this.light3.node.active = true;
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.fastspinStart, function (id) {
              _audioId3 = id;
              _this7.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId3);
              }, 1.2);
            });
          }
          if (index == 4 && !this.light4.node.active) {
            if (this.node.getChildByName("line5")) {
              this.node.getChildByName("line5").destroy();
            }
            if (!this.node.getChildByName("line1")) {
              var _node10 = instantiate(this.line1);
              _node10.name = "line1";
              _node10.parent = this.node;
              _node10.active = true;
              _node10.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line2")) {
              var _node11 = instantiate(this.line2);
              _node11.name = "line2";
              _node11.parent = this.node;
              _node11.active = true;
              _node11.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line3")) {
              var _node12 = instantiate(this.line3);
              _node12.name = "line3";
              _node12.parent = this.node;
              _node12.active = true;
              _node12.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line4")) {
              var _node13 = instantiate(this.line4);
              _node13.name = "line4";
              _node13.parent = this.node;
              _node13.active = true;
              _node13.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line6")) {
              var _node14 = instantiate(this.line6);
              _node14.name = "line6";
              _node14.parent = this.node;
              _node14.active = true;
              _node14.getComponent(UITransform).priority = 50;
            }
            var _audioId4 = 0;
            this.light4.node.active = true;
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.fastspinStart, function (id) {
              _audioId4 = id;
              _this7.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId4);
              }, 1.2);
            });
          }
          if (index == 5 && !this.light5.node.active) {
            if (this.node.getChildByName("line6")) {
              this.node.getChildByName("line6").destroy();
            }
            if (!this.node.getChildByName("line1")) {
              var _node15 = instantiate(this.line1);
              _node15.name = "line1";
              _node15.parent = this.node;
              _node15.active = true;
              _node15.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line2")) {
              var _node16 = instantiate(this.line2);
              _node16.name = "line2";
              _node16.parent = this.node;
              _node16.active = true;
              _node16.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line3")) {
              var _node17 = instantiate(this.line3);
              _node17.name = "line3";
              _node17.parent = this.node;
              _node17.active = true;
              _node17.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line4")) {
              var _node18 = instantiate(this.line4);
              _node18.name = "line4";
              _node18.parent = this.node;
              _node18.active = true;
              _node18.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line5")) {
              var _node19 = instantiate(this.line5);
              _node19.name = "line5";
              _node19.parent = this.node;
              _node19.active = true;
              _node19.getComponent(UITransform).priority = 50;
            }
            var _audioId5 = 0;
            this.light5.node.active = true;
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.fastspinStart, function (id) {
              _audioId5 = id;
              _this7.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId5);
              }, 1.2);
            });
          }
        };
        _proto.hideLight = function hideLight(index) {
          index == 1 ? this.light1.node.active = false : index == 2 ? this.light2.node.active = false : index == 3 ? this.light3.node.active = false : index == 4 ? this.light4.node.active = false : index == 5 ? this.light5.node.active = false : "";
        }

        //中奖图标删除
        ;

        _proto.deleteItem = function deleteItem(arr) {
          var _this8 = this;
          this._run_mask = instantiate(this.run_mask);
          this._run_mask.getComponent(UITransform).priority = 100;
          this._run_mask.name = "run_mask";
          this._run_mask.parent = this.node;
          this._run_mask.active = true;
          arr.map(function (item, index) {
            _this8._dataList[item.parentIndex][item.childIndex].getComponent(slotWinWinFishPrawnCrabItem).showWin();
            _this8._dataList[item.parentIndex][item.childIndex]["isDelete"] = true;
          });
          slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.prizeSmallwin);
          this.scheduleOnce(function () {
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.symShrink);
          }, 1);
          this.scheduleOnce(function () {
            //showWin整个动画时间
            _this8._run_mask.active = false;
            arr.map(function (item, index) {
              if (_this8._dataList[item.parentIndex][item.childIndex]) {
                _this8._dataList[item.parentIndex][item.childIndex].node.removeFromParent();
              }
              //this.node.removeChild(this._dataList[item.parentIndex][item.childIndex].node)
            });

            _this8._dataList.map(function (item, index) {
              for (var i = 0; i < item.length; i++) {
                if (item[i]["isDelete"]) {
                  item.splice(i, 1);
                  i--;
                }
              }
            });
            _this8.changePostionItem();
          }, 1.5);
        }
        //中奖后移动旧item位置
        ;

        _proto.changePostionItem = function changePostionItem() {
          var _this9 = this;
          //渲染新的倍数
          slotWinWinFishPrawnCrabProxy.emit(slotWinWinFishPrawnCrabGameEvent.CHANGETOPODD);
          this._dataList.map(function (item, index) {
            item.map(function (item1, index1) {
              var positionX = 0;
              var scaleX = 1;
              var _positionY = index == 0 || index == 5 ? _this9._positionY1[_this9._positionY1.length - item.length + index1] : _this9._positionY2[_this9._positionY2.length - item.length + index1];
              //_positionX = [-415, -249, -83, 83, 249, 415]
              if (index == 0) {
                positionX = _this9._positionX[index] - (_this9._positionY1.length - item.length + index1 - 1) * 5;
              } else if (index == 1) {
                positionX = _this9._positionX[index] - (_this9._positionY2.length - item.length + index1 - 1) * 2;
              } else if (index == 2) {
                positionX = _this9._positionX[index] - (_this9._positionY2.length - item.length + index1 - 1) * 1;
              } else if (index == 3) {
                positionX = _this9._positionX[index] + (_this9._positionY2.length - item.length + index1 - 1) * 1;
              } else if (index == 4) {
                positionX = _this9._positionX[index] + (_this9._positionY2.length - item.length + index1 - 1) * 2;
              } else if (index == 5) {
                positionX = _this9._positionX[index] + (_this9._positionY1.length - item.length + index1 - 1) * 5;
              }
              if (index != 0 && index != 5) {
                scaleX -= (4 - (_this9._positionY2.length - item.length + index1)) * 0.01;
              }
              if (item1.node.getPosition().y != _positionY) {
                tween(item1.node).delay(index / 10).to(0.1, {
                  position: v3(positionX, _positionY)
                }).by(0.04, {
                  position: v3(0, 12)
                }).by(0.04, {
                  position: v3(0, -12)
                }).by(0.02, {
                  position: v3(0, 5)
                }).by(0.02, {
                  position: v3(0, -5)
                }).call(function () {
                  if (index != 0 && index != 5) {
                    scaleX -= (4 - (_this9._positionY2.length - item.length + index1)) * 0.01;
                    item1.node.getChildByName("bg").setScale(v3(scaleX, 1, 1));
                  }
                }).start();
              }
            });
          });
          this.scheduleOnce(function () {
            slotWinWinFishPrawnCrabProxy.emit(slotWinWinFishPrawnCrabGameEvent.SHOWNEXT);
          }, 0.6);
        }

        //中奖后新item渲染
        ;

        _proto.renderNewItem = function renderNewItem(result, scatterNum) {
          var _this10 = this;
          this.gameTime--;
          this._scatterNum = scatterNum;
          this.node.getComponent(Mask).enabled = true;
          if (this._scatterNum >= 2) {
            //this._run_mask.active = true

            this.wait_light.node.active = true;
            this.wait_light.setAnimation(0, "idle", true);
            slotWinWinFishPrawnCrabProxy.emit(slotWinWinFishPrawnCrabGameEvent.NOTICESHOWANI);
            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.heartbeatNoise);

            //获取所有线的scatter
            this._dataList.map(function (data) {
              data.map(function (data1) {
                if (data1["cardData"] && data1["cardData"]["Sym"] == 1) {
                  _this10._scatterNum == 2 ? data1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterWaitTwoShow() : data1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterWaitThreeShow();
                }
              });
            });
          }
          this.scheduleOnce(function () {
            _this10.wait_light.node.active = false;
            slotWinWinFishPrawnCrabProxy.emit(slotWinWinFishPrawnCrabGameEvent.NOTICEHIDEANI);
            _this10._run_mask.active = false;

            //获取所有线的scatter
            _this10._dataList.map(function (data) {
              data.map(function (data1) {
                if (data1["cardData"] && data1["cardData"]["Sym"] == 1) {
                  _this10._scatterNum == 2 ? data1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterWaitTwoHide() : data1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterWaitThreeHide();
                }
              });
            });
            var needAddItemNum = 0; //有几竖需要补充新item
            if (result.length == 6) {
              result.map(function (item, index) {
                var teamAddNum = 0;
                //为了实现错开掉落
                if (item.length != _this10._dataList[index].length) {
                  needAddItemNum += 1;
                }
                item.map(function (item1, index1) {
                  if (_this10._dataList[index].length != item.length) {
                    teamAddNum += 1;
                    var node = instantiate(_this10.pre_card);
                    var com = node.getComponent(slotWinWinFishPrawnCrabItem);
                    com["cardData"] = item1;
                    node.parent = _this10.node;
                    _this10._dataList[index].splice(index1, 0, com);
                    var initY = index == 0 || index == 5 ? _this10._positionY1[0] + (teamAddNum - 1) * 170 : _this10._positionY2[0] + (teamAddNum - 1) * 170;
                    node.setPosition(v3(_this10._positionX[index], initY));
                    com.initItem(item1.Sym, index, true, _this10.gameTime);
                  }
                });
              });
            }
            _this10.scheduleOnce(function () {
              _this10._dataList.map(function (item, index) {
                item.map(function (item1, index1) {
                  var positionX = 0;
                  var scaleX = 1;
                  var _positionY = index == 0 || index == 5 ? _this10._positionY1[_this10._positionY1.length - item.length + index1] : _this10._positionY2[_this10._positionY2.length - item.length + index1];
                  if (index == 0) {
                    positionX = _this10._positionX[index] - (_this10._positionY1.length - item.length + index1 - 1) * 5;
                  } else if (index == 1) {
                    positionX = _this10._positionX[index] - (_this10._positionY2.length - item.length + index1 - 1) * 2;
                  } else if (index == 2) {
                    positionX = _this10._positionX[index] - (_this10._positionY2.length - item.length + index1 - 1) * 1;
                  } else if (index == 3) {
                    positionX = _this10._positionX[index] + (_this10._positionY2.length - item.length + index1 - 1) * 1;
                  } else if (index == 4) {
                    positionX = _this10._positionX[index] + (_this10._positionY2.length - item.length + index1 - 1) * 2;
                  } else if (index == 5) {
                    positionX = _this10._positionX[index] + (_this10._positionY1.length - item.length + index1 - 1) * 5;
                  }
                  if (index != 0 && index != 5) {
                    scaleX -= (4 - (_this10._positionY2.length - item.length + index1)) * 0.01;
                  }
                  if (item1.node.getPosition().y > _positionY + 1 || item1.node.getPosition().y < _positionY - 1) {
                    tween(item1.node).delay(needAddItemNum >= index ? index / 15 : 0).to(0.1, {
                      position: v3(positionX, _positionY)
                    }).by(0.04, {
                      position: v3(0, 12)
                    }).by(0.04, {
                      position: v3(0, -12)
                    }).by(0.02, {
                      position: v3(0, 5)
                    }).by(0.02, {
                      position: v3(0, -5)
                    }).call(function () {
                      if (index != 0 && index != 5) {
                        scaleX -= (4 - (_this10._positionY2.length - item.length + index1)) * 0.01;
                        item1.node.getChildByName("bg").setScale(v3(scaleX, 1, 1));
                      }
                      if (item1["cardData"] && item1["cardData"]["Sym"] == 1) {
                        item1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterOrWildAni(1);
                        slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.symScatter);
                      } else if (item1["cardData"] && item1["cardData"]["Sym"] == 2) {
                        item1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterOrWildAni(2);
                        slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.symWild);
                      }
                    }).start();
                  }
                });
              });
              _this10.scheduleOnce(function () {
                _this10.node.getComponent(Mask).enabled = false;
                slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.heartbeatSlowdrop);
                slotWinWinFishPrawnCrabProxy.emit(slotWinWinFishPrawnCrabGameEvent.SHOWNEXTEND);
              }, needAddItemNum / 10 + 0.2);
            }, 0.1);
          }, this._scatterNum >= 2 ? 1.5 : 0);
        }

        //scatter动画加速
        ;

        _proto.scatterRunFast = function scatterRunFast() {
          this._dataList.map(function (item) {
            item.map(function (item1) {
              if (item1["cardData"] && item1["cardData"]["Sym"] == 1) {
                item1.getComponent(slotWinWinFishPrawnCrabItem).animationRunFast();
              }
            });
          });
        }

        //scatter动画加速
        ;

        _proto.scatterRunNormal = function scatterRunNormal() {
          this._dataList.map(function (item) {
            item.map(function (item1) {
              if (item1["cardData"] && item1["cardData"]["Sym"] == 1) {
                item1.getComponent(slotWinWinFishPrawnCrabItem).animationRunNormal();
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
                  var bottomY = index == 0 || index == 5 ? -250 : -345;
                  var moveSteps = index == 0 || index == 5 ? _this11._moveSteps1 : _this11._moveSteps2;
                  item.map(function (item1, index1) {
                    if (index == 0) {
                      item1.node.setPosition(v3(item1.node.getPosition().x - 1.8, item1.node.getPosition().y - moveSteps, 0));
                    } else if (index == 1) {
                      item1.node.setPosition(v3(item1.node.getPosition().x - 1, item1.node.getPosition().y - moveSteps, 0));
                    } else if (index == 2) {
                      item1.node.setPosition(v3(item1.node.getPosition().x - 0.5, item1.node.getPosition().y - moveSteps, 0));
                    } else if (index == 3) {
                      item1.node.setPosition(v3(item1.node.getPosition().x + 0.5, item1.node.getPosition().y - moveSteps, 0));
                    } else if (index == 4) {
                      item1.node.setPosition(v3(item1.node.getPosition().x + 1, item1.node.getPosition().y - moveSteps, 0));
                    } else if (index == 5) {
                      item1.node.setPosition(v3(item1.node.getPosition().x + 1.8, item1.node.getPosition().y - moveSteps, 0));
                    }
                    if (item1.node.getPosition().y <= bottomY - _this11._itemHeight) {
                      if (_this11._isGetResult) {
                        _this11.setState(CardState.RESULTFAST);
                      } else {
                        //随机重新生成卡片以及设置位置
                        var cardData = {
                          Sym: Math.floor(Math.random() * 10) + 3
                        };
                        item1.node.setPosition(v3(_this11._positionX[index], item1.node.getPosition().y + _this11._itemHeight * _this11._dataList[index].length));
                        item1["cardData"] = cardData;
                        item1.initItem(cardData.Sym, index, false);
                      }
                    }
                  });
                });
                break;
              }
            case CardState.RESULTFAST:
              {
                this._dataList.map(function (item, index) {
                  var bottomY = index == 0 || index == 5 ? -250 : -345;
                  var moveSteps = index == 0 || index == 5 ? _this11._moveSteps1 : _this11._moveSteps2;
                  item.map(function (item1, index1) {
                    if (index == 0) {
                      item1.node.setPosition(v3(item1.node.getPosition().x - 1.8, item1.node.getPosition().y - moveSteps, 0));
                    } else if (index == 1) {
                      item1.node.setPosition(v3(item1.node.getPosition().x - 1, item1.node.getPosition().y - moveSteps, 0));
                    } else if (index == 2) {
                      item1.node.setPosition(v3(item1.node.getPosition().x - 0.5, item1.node.getPosition().y - moveSteps, 0));
                    } else if (index == 3) {
                      item1.node.setPosition(v3(item1.node.getPosition().x + 0.5, item1.node.getPosition().y - moveSteps, 0));
                    } else if (index == 4) {
                      item1.node.setPosition(v3(item1.node.getPosition().x + 1, item1.node.getPosition().y - moveSteps, 0));
                    } else if (index == 5) {
                      item1.node.setPosition(v3(item1.node.getPosition().x + 1.8, item1.node.getPosition().y - moveSteps, 0));
                    }
                    if (item1.node.getPosition().y <= bottomY - _this11._itemHeight) {
                      item1.node.setPosition(v3(_this11._positionX[index], item1.node.getPosition().y + _this11._itemHeight * _this11._dataList[index].length));
                      if (index1 != 0) {
                        _this11._getResultNum += 1;
                        item1["cardData"] = _this11._result[index][index1 - 1];
                        item1.initItem(item1["cardData"].Sym, index, true, _this11.gameTime + index1);
                      } else {
                        item1["cardData"] = {
                          Sym: Math.floor(Math.random() * 10) + 3
                        };
                        item1.initItem(item1["cardData"].Sym, index, false);
                      }
                    }
                    if (index == 5 && index1 == 4 && item1.node.getPosition().y < -200 && _this11._getResultNum > 27) {
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
                  this._dataList.map(function (item) {
                    //this.node.removeChild(item[0].node)
                    item[0].node.removeFromParent();
                    item.splice(0, 1);
                  });
                  this._dataList.map(function (item, index) {
                    item.map(function (item1, index1) {
                      if (item1 && item1["cardData"]) {
                        var positionX = 0;
                        var scaleX = 1;
                        if (index == 0) {
                          positionX = _this11._positionX[index] - index1 * 5;
                        } else if (index == 1) {
                          positionX = _this11._positionX[index] - index1 * 2;
                        } else if (index == 2) {
                          positionX = _this11._positionX[index] - index1 * 1;
                        } else if (index == 3) {
                          positionX = _this11._positionX[index] + index1 * 1;
                        } else if (index == 4) {
                          positionX = _this11._positionX[index] + index1 * 2;
                        } else if (index == 5) {
                          positionX = _this11._positionX[index] + index1 * 5;
                        }
                        tween(item1.node).to(0.02, {
                          position: v3(positionX, index == 0 || index == 5 ? _this11._positionY1[index1 + 1] : _this11._positionY2[index1 + 1], 0)
                        }).call(function () {
                          if (index != 0 && index != 5) {
                            index1 == 0 ? scaleX = 0.96 : index1 == 1 ? scaleX = 0.97 : index1 == 2 ? scaleX = 0.98 : index1 == 3 ? scaleX = 0.99 : scaleX = 1;
                          }
                          item1.node.getChildByName("bg").setScale(v3(scaleX, 1, 1));
                          if (item1["cardData"] && item1["cardData"]["Sym"] == 1) {
                            item1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterOrWildAni(1);
                            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.symScatter);
                          } else if (item1["cardData"] && item1["cardData"]["Sym"] == 2) {
                            item1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterOrWildAni(2);
                            slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.symWild);
                          }
                        }).start();
                      }
                    });
                  });
                  slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.spinStopQuick);
                } else {
                  this._dataList.map(function (item, index) {
                    item.map(function (item1, index1) {
                      if (item1 && item1["cardData"]) {
                        if (item1["cardData"]["Sym"] == 1) {
                          item1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterOrWildAni(1);
                        } else if (item1["cardData"]["Sym"] == 2) {
                          item1.node.getComponent(slotWinWinFishPrawnCrabItem).scatterOrWildAni(2);
                        }
                      }
                    });
                  });
                }
                this._normalGetResult = [false, false, false, false, false, false];
                this._isGetResult = false;
                this._time1 = 0.05;
                this._time2 = 0.1;
                this._time3 = 0.15;
                this._time4 = 0.2;
                this._time5 = 0.25;
                this._resultTime = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
                this._normalMoveStep = [100, 120, 120, 120, 120, 100];
                this._isGetResult = false;
                this._getResultNum = 0;
                this.setState(CardState.NORMAL);
                // this.scheduleOnce(() => {
                //     this.node.getComponent(cc.Mask).enabled = false
                // }, 0.1)
                this.node.getComponent(Mask).enabled = false;
                slotWinWinFishPrawnCrabProxy.emit(slotWinWinFishPrawnCrabGameEvent.END);
                slotWinWinFishPrawnCrabProxy.emit(slotWinWinFishPrawnCrabGameEvent.NOTICEHIDEANI);
                break;
              }
          }
        };
        return slotWinWinFishPrawnCrabViewRun;
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "line1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "line2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "line3", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "line4", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "line5", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "line6", [_dec15], {
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

System.register("chunks:///_virtual/slotWinWinFishPrawnCrabWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, sp, UITransform, Label, Sprite, Component;
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
      Node = module.Node;
      sp = module.sp;
      UITransform = module.UITransform;
      Label = module.Label;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "e543cpk0rdKnLqpvdeXWWtz", "slotWinWinFishPrawnCrabWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /*
      SCATTER BonusSymbol = 1
      WILD BonusSymbol = 2
      JI BonusSymbol = 3
      XIE BonusSymbol = 4
      TONGBI BonusSymbol = 5
      HULU BonusSymbol = 6
      XIA BonusSymbol = 7
      YU BonusSymbol = 8
      A BonusSymbol = 9
      K BonusSymbol = 10
      Q BonusSymbol = 11
      J BonusSymbol = 12
        纯白：a,k,q,j 
      蓝：蟹 
      绿：虾
      红：鱼
      白镶边：鸡，葫芦，铜
      */

      var betList = [[40, 20, 15, 10], [20, 15, 10, 5], [15, 10, 8, 5], [8, 6, 5, 4], [8, 6, 5, 4], [6, 5, 4, 3], [6, 5, 4, 3], [5, 4, 3, 2], [5, 4, 3, 2], [4, 3, 2, 1], [4, 3, 2, 1]];
      //const content = '3 biểu tượng FreeSpins trở lên sẽ kích hoạt vòng quay miễn phí.'

      var slotWinWinFishPrawnCrabWindow = exports('slotWinWinFishPrawnCrabWindow', (_dec = ccclass("slotWinWinFishPrawnCrabWindow"), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(sp.Skeleton), _dec11 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWinWinFishPrawnCrabWindow, _Component);
        function slotWinWinFishPrawnCrabWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "iconBg_list", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon_list", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "left", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "left_wild", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "left_scatter", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "left_scatter_light", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right_wild", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right_scatter", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right_scatter_light", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = slotWinWinFishPrawnCrabWindow.prototype;
        _proto.showCard = function showCard(sym, postion) {
          console.log(postion, "position");
          this.left.getChildByName("iconBg").active = false;
          this.left.getChildByName("odd").active = false;
          this.left.getChildByName("content").active = false;
          this.left_wild.node.active = false;
          this.left_scatter.node.active = false;
          this.left_scatter_light.node.active = false;
          this.right.getChildByName("iconBg").active = false;
          this.right.getChildByName("odd").active = false;
          this.right.getChildByName("content").active = false;
          this.right_wild.node.active = false;
          this.right_scatter.node.active = false;
          this.right_scatter_light.node.active = false;
          if (postion <= 2) {
            this.left.active = true;
            this.right.active = false;
            this.cardDetail(sym, "left");
          } else {
            this.left.active = false;
            this.right.active = true;
            this.cardDetail(sym, "right");
          }
        };
        _proto.cardDetail = function cardDetail(sym, postion) {
          var target = null;
          if (postion == "left") {
            target = this.left;
          } else {
            target = this.right;
          }
          if (sym == 1) {
            target.getComponent(UITransform).width = 645;
            if (postion == "left") {
              this.left_scatter.node.active = true;
              this.left_scatter_light.node.active = true;
              this.left_scatter.setAnimation(0, "idle", true);
              this.left_scatter_light.setAnimation(0, "idle", true);
            } else {
              this.right_scatter.node.active = true;
              this.right_scatter_light.node.active = true;
              this.right_scatter.setAnimation(0, "idle", true);
              this.right_scatter_light.setAnimation(0, "idle", true);
            }
            target.getChildByName("content").active = true;
          } else {
            target.getComponent(UITransform).width = 545;
            target.getChildByName("odd").active = true;
            if (sym == 2) {
              if (postion == "left") {
                this.left_wild.node.active = true;
                this.left_wild.setAnimation(0, "idle", true);
              } else {
                this.right_wild.node.active = true;
                this.right_wild.setAnimation(0, "idle", true);
              }
              target.getChildByName("odd").getChildByName("odd1").getComponent(Label).string = betList[0][0];
              target.getChildByName("odd").getChildByName("odd2").getComponent(Label).string = betList[0][1];
              target.getChildByName("odd").getChildByName("odd3").getComponent(Label).string = betList[0][2];
              target.getChildByName("odd").getChildByName("odd4").getComponent(Label).string = betList[0][3];
            } else {
              target.getChildByName("iconBg").active = true;
              target.getChildByName("odd").active = true;
              target.getChildByName("odd").getChildByName("odd1").getComponent(Label).string = betList[sym - 2][0];
              target.getChildByName("odd").getChildByName("odd2").getComponent(Label).string = betList[sym - 2][1];
              target.getChildByName("odd").getChildByName("odd3").getComponent(Label).string = betList[sym - 2][2];
              target.getChildByName("odd").getChildByName("odd4").getComponent(Label).string = betList[sym - 2][3];
              target.getChildByName("iconBg").getChildByName("icon").getComponent(Sprite).spriteFrame = this.icon_list[sym - 1];
              if (sym == 9 || sym == 10 || sym == 11 || sym == 12) {
                target.getChildByName("iconBg").getComponent(Sprite).spriteFrame = this.iconBg_list[4];
              } else if (sym == 3 || sym == 5 || sym == 6) {
                target.getChildByName("iconBg").getComponent(Sprite).spriteFrame = this.iconBg_list[0];
              } else if (sym == 4) {
                target.getChildByName("iconBg").getComponent(Sprite).spriteFrame = this.iconBg_list[1];
              } else if (sym == 7) {
                target.getChildByName("iconBg").getComponent(Sprite).spriteFrame = this.iconBg_list[3];
              } else if (sym == 8) {
                target.getChildByName("iconBg").getComponent(Sprite).spriteFrame = this.iconBg_list[2];
              }
            }
          }
        };
        _proto.hideCard = function hideCard() {
          this.node.active = false;
        };
        return slotWinWinFishPrawnCrabWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconBg_list", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon_list", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "left_wild", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "left_scatter", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "left_scatter_light", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "right_wild", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "right_scatter", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "right_scatter_light", [_dec11], {
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
  r('virtual:///prerequisite-imports/slotWinWinFishPrawnCrabGame', 'chunks:///_virtual/slotWinWinFishPrawnCrabGame'); 
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