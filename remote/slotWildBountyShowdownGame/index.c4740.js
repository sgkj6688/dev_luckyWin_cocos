System.register("chunks:///_virtual/slotWildBountyShowdownDef.ts", ['cc', './slotWildBountyShowdownProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, director, AudioClip, isValid, slotWildBountyShowdownProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      AudioClip = module.AudioClip;
      isValid = module.isValid;
    }, function (module) {
      slotWildBountyShowdownProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d79c8KOc4pDoa9mxDukFKOM", "slotWildBountyShowdownDef", undefined);
      var slotWildBountyShowdownDef = exports('slotWildBountyShowdownDef', /*#__PURE__*/function () {
        function slotWildBountyShowdownDef() {}
        slotWildBountyShowdownDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = slotWildBountyShowdownProxy.bundle;
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            // 离场后的旧音频不能覆盖新场景音乐或重新发声。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
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
        slotWildBountyShowdownDef.palyMusic = function palyMusic(name) {
          var bundle = slotWildBountyShowdownProxy.bundle;
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            // 离场后的旧音频不能覆盖新场景音乐或重新发声。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return slotWildBountyShowdownDef;
      }());
      slotWildBountyShowdownDef.audio = {
        prizeSmallwin: 'prizeSmallwin',
        //中奖图标高亮 done
        symShrink: 'symShrink',
        //消除 done
        prizeInfobarTotalwin: 'prizeInfobarTotalwin',
        //中奖总金额展示 done
        multiUp1: 'multiUp1',
        //倍数上升 done
        multiFly: 'multiFly',
        //倍数飞下来声音 done
        prizeSmallwinMultipliedCrowd1: 'prizeSmallwinMultipliedCrowd1',
        //中奖x倍数后随机播  done
        prizeSmallwinMultipliedCrowd2: 'prizeSmallwinMultipliedCrowd2',
        //中奖x倍数后随机播  done
        prizeSmallwinMultipliedCrowd3: 'prizeSmallwinMultipliedCrowd3',
        //中奖x倍数后随机播  done
        featureBuyHover: 'featureBuyHover',
        //鼠标经过买游戏的按钮播放 
        featureBuyCancel: 'featureBuyCancel',
        featureBuyStart: 'featureBuyStart',
        bgm_intro: 'bgm_intro',
        //进入游戏的时候播一遍 
        bgm_mg: 'bgm_mg',
        //普通模式背景音乐  done
        bgm_fs: 'bgm_fs',
        //特殊模式背景音乐  done
        spinBtn: 'spinBtn',
        //转动最开始播放  done
        spinStop: 'spinStop',
        //12345轴落下声音  done
        spinStopQuick: 'spinStopQuick',
        //快速模式落下后播放  done
        symbolWild: 'symWild',
        //界面Wild播放动画声音  done
        symbolScatter: 'symScatter',
        //界面Scatter播放动画声音  done
        heartbeat: 'heartBeat',
        //期待光效循环播放 
        heartbeatNoise: 'heartBeatNoise',
        //期待光效播放  done
        heartbeatSlowdrop: 'heartBeatSlowdrop',
        //期待符号落下  done
        scatterWinHighlight: 'scatterWinHighlight',
        //中免费scatter一起播动画声 done
        uiCollect: 'uiCollect',
        //倍数乘中奖金额
        prizeInfobarTotalwinMedMain: 'prizeInfobarTotalwinMedMain',
        //总奖声5倍以上声 done
        prizeInfobarTotalwinMedCoins: 'prizeInfobarTotalwinMedCoins',
        //不知道是什么
        prizeInfobarTotalwinMedEnd: 'prizeInfobarTotalwinMedEnd',
        //总奖声5倍以上声结束   done
        fastspinStart: 'fastspinStart',
        //旋转光效按顺序播放这两个音效  done
        fastspinStop: 'fastspinStop',
        //旋转光效没进入成功 done
        fsTrans: 'fsTrans',
        //免费加载页 done
        fsIntroStart: 'fsIntroStart',
        //板子落下来播放 done
        fsIntroShift: 'fsIntroShift',
        //免费模式板子消除1，2，4 done
        fsIntroEnd: 'fsIntroEnd',
        //板子收回去播放 done
        fsIntroChange: 'fsIntroChange',
        //板子倍数变化 done
        uiStart: 'uiStart',
        //免费弹出框 done
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
        uiInfo: 'uiInfo' //符号点击开声  done
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotWildBountyShowdownGame", ['./slotWildBountyShowdownDef.ts', './slotWildBountyShowdownItem.ts', './slotWildBountyShowdownProxy.ts', './slotWildBountyShowdownRun.ts', './slotWildBountyShowdownScene.ts', './slotWildBountyShowdownView.ts', './slotWildBountyShowdownWindow.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/slotWildBountyShowdownItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotWildBountyShowdownProxy.ts', './slotWildBountyShowdownDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, sp, Sprite, UITransform, v3, tween, UIOpacity, Vec3, Component, slotWildBountyShowdownProxy, slotWildBountyShowdownGameEvent, slotWildBountyShowdownDef;
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
      sp = module.sp;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      v3 = module.v3;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      slotWildBountyShowdownProxy = module.default;
      slotWildBountyShowdownGameEvent = module.slotWildBountyShowdownGameEvent;
    }, function (module) {
      slotWildBountyShowdownDef = module.slotWildBountyShowdownDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "45d10WFI2JFzIad5SdAA49V", "slotWildBountyShowdownItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var slotWildBountyShowdownItem = exports('slotWildBountyShowdownItem', (_dec = ccclass('slotWildBountyShowdownItem'), _dec2 = menu("game/slotWildBountyShowdownGame/slotWildBountyShowdownItem"), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(sp.SkeletonData), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(Sprite), _dec11 = property(sp.Skeleton), _dec12 = property(Sprite), _dec13 = property(sp.Skeleton), _dec14 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWildBountyShowdownItem, _Component);
        function slotWildBountyShowdownItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "iconList", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBlurList", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpineList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatterBg", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatterBong", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wild", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpine", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iframe", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ani1", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ani2", _descriptor12, _assertThisInitialized(_this));
          /*
          -310 130 / -310 0 / -310 130
          -185 185 / -185 55 / -185 -85 / -185 220
          -55 225 / -55 105 / -55 -25 / -55 -150 / -55 -260
          70 225 / -55 105 / -55 -25 / -55 -150 / -55 -260
          195 185 / 195 55 / 195 -85 /195 220
          310 130 / 310 0 / 310 130
          Robber int = 1 //强盗
          Pistol int = 2 //手枪
          Hat int = 3 //帽子
          Liquor int = 4 //酒
          A int = 5
          K int = 6
          Q int = 7
          J int = 8
          Scatter int = 9 //免费
          Wild int = 10 //万能
          */
          _this._cardData = null;
          _this._parentIndex = 0;
          return _this;
        }
        var _proto = slotWildBountyShowdownItem.prototype;
        _proto.start = function start() {}

        //中奖动画报错
        ;

        _proto.onLoad = function onLoad() {
          //默认打开，否则报错
          this.scatterBg.node.active = false;
          this.scatterBong.node.active = false;
          this.iconSpine.node.active = false;
        }

        //setSiblingIndex没有效果
        ;

        _proto.initCard = function initCard(data, parentIndex, isWin, isEnd, isInit) {
          var _this2 = this;
          if (isWin === void 0) {
            isWin = false;
          }
          if (isEnd === void 0) {
            isEnd = false;
          }
          if (isInit === void 0) {
            isInit = false;
          }
          if (data) {
            this._cardData = data;
            this._parentIndex = parentIndex;
            if (data.num == 9) {
              if (isEnd || isInit || isWin) {
                this.scatter.node.active = true;
                this.scatterBg.node.active = false;
                this.scatterBong.node.active = false;
                this.icon.node.active = false;
                this.iframe.node.active = false;
                this.wild.node.active = false;
                this.scatter.setAnimation(0, 'idle', true);
                this.node.getComponent(UITransform).priority = 24;
                // if (isEnd) {
                //     slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolScatter)
                // }
              } else {
                this.icon.node.scale = v3(1.3, 1.3);
                this.icon.getComponent(Sprite).spriteFrame = this.iconBlurList[data.num - 1];
                this.icon.node.active = true;
              }
            } else if (data.num == 10) {
              if (isEnd || isInit || isWin) {
                this.scatter.node.active = false;
                this.scatterBg.node.active = false;
                this.scatterBong.node.active = false;
                this.icon.node.active = false;
                this.iframe.node.active = false;
                this.wild.node.active = true;
                this.wild.setAnimation(0, 'idle', true);
                this.node.getComponent(UITransform).priority = 24;
                // if (isEnd) {
                //     slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolWild)
                // }
              } else {
                this.icon.node.scale = v3(1.3, 1.3);
                this.icon.getComponent(Sprite).spriteFrame = this.iconBlurList[data.num - 1];
                this.icon.node.active = true;
              }
            } else {
              this.scatter.node.active = false;
              this.scatterBg.node.active = false;
              this.scatterBong.node.active = false;
              this.wild.node.active = false;
              if (data.type == 1) {
                this.iframe.node.active = true;
              } else {
                this.iframe.node.active = false;
              }
              if (isEnd || isInit || isWin) {
                this.icon.node.scale = v3(0.65, 0.65);
                this.icon.getComponent(Sprite).spriteFrame = this.iconList[data.num - 1];
              } else {
                this.icon.node.scale = v3(1.3, 1.3);
                this.icon.getComponent(Sprite).spriteFrame = this.iconBlurList[data.num - 1];
              }
              this.icon.node.active = true;
            }
            if (isWin) {
              this.scheduleOnce(function () {
                if (data.num == 9) {
                  tween(_this2.scatter.getComponent(UIOpacity)).to(0.5, {
                    opacity: 0
                  }).start();
                } else if (data.num == 10) {
                  tween(_this2.wild.getComponent(UIOpacity)).to(0.5, {
                    opacity: 0
                  }).start();
                } else {
                  tween(_this2.icon.getComponent(UIOpacity)).to(0.5, {
                    opacity: 0
                  }).start();
                }
              }, 1.3);
              // if (data.num != 9 || data.num != 10) {
              //     this.iconSpine.skeletonData = this.iconSpineList[data.num - 1]
              //     this.iconSpine.node.active = true
              //     this.icon.node.active = false
              //     this.iconSpine.setAnimation(0, 'win', true)
              // }
              this.node.scale = new Vec3(1.2, 1.2, 1);
              this.ani1.node.active = true;
              this.ani2.node.active = true;
              this.ani1.setAnimation(0, '1', false);
              this.ani2.setAnimation(0, '2', false);
              //slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.prizeSmallwin)
              if (data.num == 9) {
                slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.scatterWinHighlight);
              }
            } else {
              this.iconSpine.node.active = false;
              this.ani1.node.active = false;
              this.ani2.node.active = false;
            }
          }
        }

        //scatter/wild停止时展示的动画
        ;

        _proto.scatterShow = function scatterShow(isShowBong) {
          if (isShowBong === void 0) {
            isShowBong = false;
          }
          this.scatterBg.node.active = true;
          if (this.scatterBg.node && this.scatterBg.node.active) {
            this.scatterBg.setAnimation(0, 'idle', true);
          }
          if (isShowBong) {
            this.scatterBong.node.active = true;
            if (this.scatterBong.node && this.scatterBong.node.active) {
              this.scatterBong.setAnimation(0, 'idle', false);
            }
          }
        }
        //其他图标展示spawn动画
        ;

        _proto.iconShow = function iconShow(num) {
          var _this3 = this;
          this.iconSpine.node.active = true;
          this.icon.node.active = false;
          this.iconSpine.skeletonData = this.iconSpineList[num - 1];
          if (this.iconSpine.skeletonData) {
            this.iconSpine.setAnimation(0, 'spawn', false);
            this.iconSpine.setCompleteListener(function () {
              _this3.iconSpine.setCompleteListener(null);
            });
          }
        }

        //转动前wild修改动画
        ;

        _proto.wildChangeAni = function wildChangeAni() {
          this.wild.node.active = true;
          this.wild.setAnimation(0, 'exit', false);
        };
        _proto.onClick = function onClick() {
          slotWildBountyShowdownProxy.emit(slotWildBountyShowdownGameEvent.CLICK_ITEM, {
            _cardData: this._cardData,
            _parentIndex: this._parentIndex,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return slotWildBountyShowdownItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconBlurList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconSpineList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scatter", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scatterBg", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scatterBong", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "wild", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "iconSpine", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "iframe", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "ani1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "ani2", [_dec14], {
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

System.register("chunks:///_virtual/slotWildBountyShowdownProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "9c8c7WfNx9HhJi/sg7RzJoh", "slotWildBountyShowdownProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotWildBountyShowdownGameEvent = exports('slotWildBountyShowdownGameEvent', /*#__PURE__*/function (slotWildBountyShowdownGameEvent) {
        slotWildBountyShowdownGameEvent["ENTER_ROOM"] = "enterRoom";
        slotWildBountyShowdownGameEvent["LEAVE_ROOM"] = "leaveRoom";
        slotWildBountyShowdownGameEvent["UPDATE_CONFIG"] = "updateConfig";
        slotWildBountyShowdownGameEvent["UPDATE_BETLIST"] = "updateBetList";
        slotWildBountyShowdownGameEvent["CLOSE_BONUS"] = "closeBonus";
        slotWildBountyShowdownGameEvent["SELECT_BET"] = "selectBet";
        slotWildBountyShowdownGameEvent["START"] = "start";
        slotWildBountyShowdownGameEvent["CLICK_ITEM"] = "clickItem";
        slotWildBountyShowdownGameEvent["ERROR"] = "errorReturn";
        slotWildBountyShowdownGameEvent["END"] = "END";
        slotWildBountyShowdownGameEvent["SHOWNEXT"] = "showNext";
        slotWildBountyShowdownGameEvent["NOTICESHOWANI"] = "noticeShowAni";
        slotWildBountyShowdownGameEvent["NOTICEHIDEANI"] = "noticeHideAni";
        return slotWildBountyShowdownGameEvent;
      }({}));

      /*
      Robber int = 1 //强盗
      Pistol int = 2 //手枪
      Hat int = 3 //帽子
      Liquor int = 4 //酒
      A int = 5
      K int = 6
      Q int = 7
      J int = 8
      Scatter int = 9 //免费
      Wild int = 10 //万能
      */
      var slotWildBountyShowdownProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(slotWildBountyShowdownProxyMgr, _ProxyBase);
        function slotWildBountyShowdownProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "slotWildBountyShowdownGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolSlotWildBountyShowdown.bet, MainManager.instance.getConfigManager().ProtocolSlotWildBountyShowdown.buyFree, MainManager.instance.getConfigManager().ProtocolSlotWildBountyShowdown.info];
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
        var _proto = slotWildBountyShowdownProxyMgr.prototype;
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(slotWildBountyShowdownGameEvent.SELECT_BET);
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
            if (data.cmd == ConfigManager.ProtocolSlotWildBountyShowdown.bet) {
              this.emit(slotWildBountyShowdownGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotWildBountyShowdown.info:
              {
                this.emit(slotWildBountyShowdownGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotWildBountyShowdown.bet:
              {
                this.result = data.Data;
                //测试免费模式中大奖
                // if (this.a == 1) {
                //     this.result = {
                //         "OpenNums": [
                //             { "openNum": [{ "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 1 }, { "num": 8, "type": 0 }, { "num": 5, "type": 1 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 1 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 9, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 12000, "prizeIdx": [[2, 5, 11, 12, 16, 19, 20]] },
                //             { "openNum": [{ "num": 8, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 1 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 10, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 9, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 400, "prizeIdx": [[0, 3, 9, 13]] },
                //             { "openNum": [{ "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 10, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 9, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 64000, "prizeIdx": [[1, 2, 3, 4, 9, 12, 13, 19, 22]] },
                //             { "openNum": [{ "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 9, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 1600, "prizeIdx": [[1, 5, 8]] },
                //             { "openNum": [{ "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 5, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 9, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }],
                //         "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 108000
                //     }
                // } else {
                //     this.result = data.Data;
                // }
                // this.a += 1
                //连续中奖
                //this.result = { "OpenNums": [{ "openNum": [{ "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 8, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 1 }, { "num": 8, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 800, "prizeIdx": [[0, 6, 8, 14, 16]] }, { "openNum": [{ "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 600, "prizeIdx": [[2, 3, 9, 15, 20]] }, { "openNum": [{ "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 4800, "prizeIdx": [[0, 3, 5, 6, 9, 12]] }, { "openNum": [{ "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 20800, "prizeIdx": [[0, 6, 10, 15], [2, 3, 7, 14, 16, 18]] }, { "openNum": [{ "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 27000 }
                //中大奖
                // this.result = {
                //     "OpenNums": [
                //         { "openNum": [{ "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 1 }, { "num": 8, "type": 0 }, { "num": 5, "type": 1 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 1 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 9, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 12000, "prizeIdx": [[2, 5, 11, 12, 16, 19, 20]] },
                //         { "openNum": [{ "num": 8, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 1 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 10, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 9, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 400, "prizeIdx": [[0, 3, 9, 13]] },
                //         { "openNum": [{ "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 10, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 9, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 64000, "prizeIdx": [[1, 2, 3, 4, 9, 12, 13, 19, 22]] },
                //         { "openNum": [{ "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 9, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 1600, "prizeIdx": [[1, 5, 8]] },
                //         { "openNum": [{ "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 5, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 9, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }],
                //     "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 98000
                // }
                //1024倍大奖
                //this.result = { "OpenNums": [{ "openNum": [{ "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 1 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }], "prizeAmount": 600, "prizeIdx": [[2, 4, 8, 12, 13, 15]] }, { "openNum": [{ "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 10, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }], "prizeAmount": 1800, "prizeIdx": [[2, 3, 11, 14, 17, 18, 19]] }, { "openNum": [{ "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }], "prizeAmount": 1600, "prizeIdx": [[0, 4, 10, 15]] }, { "openNum": [{ "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }], "prizeAmount": 40000, "prizeIdx": [[1, 5, 7, 16, 19, 21]] }, { "openNum": [{ "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }], "prizeAmount": 6400, "prizeIdx": [[1, 3, 4, 7]] }, { "openNum": [{ "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 2, "type": 0 }, { "num": 5, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }], "prizeAmount": 102400, "prizeIdx": [[0, 3, 6, 8, 11]] }, { "openNum": [{ "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }], "prizeAmount": 76800, "prizeIdx": [[1, 3, 5, 7, 12, 13, 15]] }, { "openNum": [{ "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }], "prizeAmount": 512000, "prizeIdx": [[0, 4, 5, 10, 14, 20, 23]] }, { "openNum": [{ "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 2099200, "prizeIdx": [[0, 5, 6, 8, 10, 11, 15, 16, 17], [1, 4, 9]] }, { "openNum": [{ "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 409600, "prizeIdx": [[0, 4, 10]] }, { "openNum": [{ "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 1, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 204800, "prizeIdx": [[1, 4, 5, 7]] }, { "openNum": [{ "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 2048000, "prizeIdx": [[0, 5, 8]] }, { "openNum": [{ "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 24576000, "prizeIdx": [[0, 3, 4, 6, 8, 12, 16, 18, 21]] }, { "openNum": [{ "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 49152000, "prizeIdx": [[2, 3, 10, 13, 15, 17, 20]] }, { "openNum": [{ "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 79231200 }
                //期待光效
                //this.result = { "OpenNums": [{ "openNum": [{ "num": 2, "type": 0 }, { "num": 9, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 9, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }], "prizeAmount": 0, "prizeIdx": null }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": true, "prizeAmount": 0 }
                //连续中奖
                // if (this.a == 0) {
                //     this.result = { "OpenNums": [{ "openNum": [{ "num": 5, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 1 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }], "prizeAmount": 800, "prizeIdx": [[1, 6, 8]] }, { "openNum": [{ "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 10, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }], "prizeAmount": 4600, "prizeIdx": [[0, 4, 7, 8, 10], [1, 3, 5, 8, 16, 19, 22]] }, { "openNum": [{ "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }], "prizeAmount": 57600, "prizeIdx": [[0, 1, 2, 5, 7, 11, 15, 16, 18, 19]] }, { "openNum": [{ "num": 5, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }], "prizeAmount": 1600, "prizeIdx": [[0, 3, 9]] }, { "openNum": [{ "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 64600 }
                //     this.a++
                // }
                //this.result = { "OpenNums": [{ "openNum": [{ "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 8, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }], "prizeAmount": 2000, "prizeIdx": [[0, 3, 11, 14, 15]] }, { "openNum": [{ "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 8, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 2000 }

                //this.result = { "OpenNums": [{ "openNum": [{ "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 9, "type": 0 }, { "num": 8, "type": 0 }], "prizeAmount": 6400, "prizeIdx": [[2, 5, 7, 9, 15]] }, { "openNum": [{ "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 9, "type": 0 }, { "num": 8, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 163200, "totalFreePrizeCount": 10 }, "freePrize": false, "prizeAmount": 6400 }
                // this.result = {
                //     "OpenNums": [
                //         { "openNum": [{ "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 400, "prizeIdx": [[1, 4, 9, 10], [2, 3, 5, 11]] },
                //         { "openNum": [{ "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 800, "prizeIdx": [[0, 5, 10, 16]] },
                //         { "openNum": [{ "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 1200
                // }
                //没中奖
                //this.result = { "OpenNums": [{ "openNum": [{ "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 1 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 1 }, { "num": 8, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 1, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 0 }
                //中一次奖
                //this.result = { "OpenNums": [{ "openNum": [{ "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 1 }, { "num": 5, "type": 0 }, { "num": 1, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 1 }, { "num": 5, "type": 1 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 1000, "prizeIdx": [[0, 4, 11]] }, { "openNum": [{ "num": 4, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 1 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 6, "type": 1 }, { "num": 5, "type": 1 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 1000 }

                // this.result = {
                //     "OpenNums": [
                //         {
                //             "openNum": [
                //                 { "num": 5, "type": 0 }, { "num": 5, "type": 0 }, { "num": 8, "type": 0 },
                //                 { "num": 6, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 },
                //                 { "num": 4, "type": 0 }, { "num": 8, "type": 1 }, { "num": 3, "type": 1 }, { "num": 4, "type": 1 }, { "num": 8, "type": 0 },
                //                 { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 1 }, { "num": 4, "type": 0 },
                //                 { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 },
                //                 { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }
                //             ], "prizeAmount": 1200, "prizeIdx": [[2, 5, 6, 8, 11, 12, 18]]
                //         }, {
                //             "openNum": [
                //                 { "num": 4, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 },
                //                 { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 0 },
                //                 { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 10, "type": 1 }, { "num": 3, "type": 1 }, { "num": 4, "type": 0 },
                //                 { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 1 }, { "num": 4, "type": 0 },
                //                 { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 },
                //                 { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }],
                //             "prizeAmount": 9000, "prizeIdx": [[0, 6, 8, 9, 11, 16, 17]]
                //         }, {
                //             "openNum": [
                //                 { "num": 2, "type": 0 }, { "num": 5, "type": 0 }, { "num": 5, "type": 0 },
                //                  { "num": 5, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, 
                //                  { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 10, "type": 1 }, { "num": 3, "type": 0 }, 
                //                  { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 1 }, { "num": 2, "type": 0 }, 
                //                  { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, 
                //                  { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }], 
                //                  "prizeAmount": 17600, "prizeIdx": [[0, 5, 9, 10, 16, 19], [1, 2, 3, 10]]
                //         }, {
                //             "openNum": [{ "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 6, "type": 0 }, { "num": 10, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 1 }, { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }], "prizeAmount": 25600, "prizeIdx": [[1, 4, 6, 9, 10, 13, 14]]
                //         }, {
                //             "openNum": [{ "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 1, "type": 0 }, { "num": 5, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 8, "type": 0 }, { "num": 3, "type": 0 }, { "num": 3, "type": 1 }, { "num": 7, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }], "prizeAmount": 0, "prizeIdx": []
                //         }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 53400
                // }

                //this.result = { "OpenNums": [{ "openNum": [{ "num": 5, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 1 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 3, "type": 1 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 5, "type": 0 }], "prizeAmount": 8000, "prizeIdx": [[1, 6, 11, 15]] }, { "openNum": [{ "num": 6, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 5, "type": 0 }, { "num": 6, "type": 0 }, { "num": 4, "type": 1 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 10, "type": 0 }, { "num": 5, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 5, "type": 0 }], "prizeAmount": 12800, "prizeIdx": [[0, 3, 6, 11], [1, 5, 11, 12]] }, { "openNum": [{ "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, { "num": 6, "type": 0 }, { "num": 2, "type": 0 }, { "num": 7, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 1 }, { "num": 1, "type": 0 }, { "num": 7, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 7, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 0 }, { "num": 2, "type": 0 }, { "num": 8, "type": 0 }, { "num": 5, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 4, "totalFreePrizeAmount": 1528800, "totalFreePrizeCount": 10 }, "freePrize": false, "prizeAmount": 20800 }

                //this.result = { "OpenNums": [{ "openNum": [{ "num": 1, "type": 0 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 6, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 7, "type": 0 }, { "num": 4, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 8, "type": 0 }, { "num": 2, "type": 1 }, { "num": 3, "type": 0 }, { "num": 2, "type": 0 }, { "num": 4, "type": 1 }, { "num": 2, "type": 0 }, { "num": 1, "type": 0 }, { "num": 6, "type": 0 }, { "num": 3, "type": 0 }, { "num": 4, "type": 0 }, { "num": 3, "type": 0 }, { "num": 1, "type": 0 }, { "num": 9, "type": 0 }, { "num": 1, "type": 0 }], "prizeAmount": 0, "prizeIdx": [] }], "betAmount": 2000, "freeInfo": { "surplusFreeCount": 0, "totalFreePrizeAmount": 0, "totalFreePrizeCount": 0 }, "freePrize": false, "prizeAmount": 0 
                this.result.prizeAmount = 0;
                for (var i = 0; i < this.result.OpenNums.length; i++) {
                  this.result.prizeAmount += this.result.OpenNums[i].prizeAmount;
                }
                //console.log(this.result)
                //console.log(JSON.stringify(this.result))

                this.emit(slotWildBountyShowdownGameEvent.START);
                break;
              }
            case ConfigManager.ProtocolSlotWildBountyShowdown.buyFree:
              {
                this.result = data.Data;
                this.result.prizeAmount = 0;
                for (var _i = 0; _i < this.result.OpenNums.length; _i++) {
                  this.result.prizeAmount += this.result.OpenNums[_i].prizeAmount;
                }
                this.emit(slotWildBountyShowdownGameEvent.START);
                break;
              }
          }
        };
        _createClass(slotWildBountyShowdownProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return slotWildBountyShowdownProxyMgr;
      }(ProxyBase);
      var slotWildBountyShowdownProxy = exports('default', new slotWildBountyShowdownProxyMgr("slotWildBountyShowdownProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotWildBountyShowdownRun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotWildBountyShowdownItem.ts', './slotWildBountyShowdownProxy.ts', './slotWildBountyShowdownDef.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, sp, instantiate, v3, UIOpacity, tween, Vec3, UITransform, Component, slotWildBountyShowdownItem, slotWildBountyShowdownProxy, slotWildBountyShowdownGameEvent, slotWildBountyShowdownDef, AudioManager;
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
      Prefab = module.Prefab;
      Node = module.Node;
      sp = module.sp;
      instantiate = module.instantiate;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      slotWildBountyShowdownItem = module.slotWildBountyShowdownItem;
    }, function (module) {
      slotWildBountyShowdownProxy = module.default;
      slotWildBountyShowdownGameEvent = module.slotWildBountyShowdownGameEvent;
    }, function (module) {
      slotWildBountyShowdownDef = module.slotWildBountyShowdownDef;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "f3692CQPKpMt54NEiBplmiY", "slotWildBountyShowdownRun", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CardState = {
        NORMAL: 0,
        DELAY: 1,
        RUNFAST: 2,
        RUNNORMAL: 3,
        RESULTFAST: 4,
        RESULTNORMAL: 5,
        END: 6,
        SHOWWIN: 7,
        SHOWNEXTWIN: 8
      };
      /*
      -310 270 / -310 130 / -310 0 / -310 130
      -185 360 / -185 185 / -185 55 / -185 -85 / -185 220
      -55 360 / -55 225 / -55 105 / -55 -25 / -55 -150 / -55 -260
      70 360 / 70 225 / 70 105 / 70 -25 / 70 -150 / 70 -260
      195 360 / 195 185 / 195 55 / 195 -85 /195 220
      310 270 / 310 130 / 310 0 / 310 130
      Robber int = 1 //强盗
      Pistol int = 2 //手枪
      Hat int = 3 //帽子
      Liquor int = 4 //酒
      A int = 5
      K int = 6
      Q int = 7
      J int = 8
      Scatter int = 9 //免费
      Wild int = 10 //万能
        { "openNum": 
          [{ "num": 3, "type": 0 }, { "num": 7, "type": 0 }, { "num": 9, "type": 0 },
          { "num": 8, "type": 0 }, { "num": 1, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 },
          { "num": 6, "type": 1 }, { "num": 9, "type": 0 }, { "num": 1, "type": 0 }, { "num": 8, "type": 1 }, { "num": 3, "type": 1 }, 
          { "num": 7, "type": 1 }, { "num": 9, "type": 0 }, { "num": 5, "type": 0 }, { "num": 4, "type": 0 }, { "num": 6, "type": 0 }, 
          { "num": 8, "type": 0 }, { "num": 8, "type": 0 }, { "num": 4, "type": 0 }, { "num": 4, "type": 0 }, 
          { "num": 5, "type": 0 }, { "num": 8, "type": 0 }, { "num": 8, "type": 0 }
      ]
      390
      520
      650
      */
      var slotWildBountyShowdownRun = exports('slotWildBountyShowdownRun', (_dec = ccclass("slotWildBountyShowdownRun"), _dec2 = menu("game/slotWildBountyShowdownGame/slotWildBountyShowdownRun"), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWildBountyShowdownRun, _Component);
        function slotWildBountyShowdownRun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win_card_box", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waiting_spine", _descriptor3, _assertThisInitialized(_this));
          //期待动画
          _initializerDefineProperty(_this, "light1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light3", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light4", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light5", _descriptor8, _assertThisInitialized(_this));
          _this._linePosition = [[[-310, 240], [-310, 120], [-310, 0], [-310, -120]], [[-186, 295], [-186, 175], [-186, 55], [-186, -65], [-186, -185]], [[-62, 365], [-62, 245], [-62, 125], [-62, 5], [-62, -115], [-62, -235]], [[62, 365], [62, 245], [62, 125], [62, 5], [62, -115], [62, -235]], [[186, 295], [186, 175], [186, 55], [186, -65], [186, -185]], [[310, 240], [310, 120], [310, 0], [310, -120]]];
          _this.xPostionList = [-310, -186, -62, 62, 186, 310];
          _this._dataList = [[], [], [], [], [], []];
          _this._runType = "";
          _this._state = CardState.NORMAL;
          _this._itemHeight = 155;
          //_normalMoveStep = [80, 80, 80, 80, 80, 80]
          _this._normalMoveStep = [100, 100, 100, 100, 100, 100];
          //_normalMoveStep = [78, 104, 130, 130, 104, 78]
          _this._fastMoveSteps1 = [78, 104, 130, 130, 104, 78];
          //_fastMoveSteps = [110, 120, 130, 130, 120, 110]
          _this._fastMoveSteps = [120, 120, 120, 120, 120, 120];
          _this._normalGetResult = [false, false, false, false, false, false];
          _this._isGetResult = false;
          _this._result = [[], [], [], [], [], []];
          _this._time1 = 0.3;
          _this._time2 = 0.6;
          _this._time3 = 0.9;
          _this._time4 = 1.2;
          _this._time5 = 1.5;
          _this._resultTime = [0.3, 0.6, 0.9, 1.2, 1.5, 1.8];
          _this._showLineIndex = 0;
          _this._target = [];
          return _this;
        }
        var _proto = slotWildBountyShowdownRun.prototype;
        _proto.start = function start() {};
        _proto.initRunCard = function initRunCard(data) {
          var _this2 = this;
          if (data === void 0) {
            data = null;
          }
          if (!data) {
            data = [];
            for (var i = 0; i < 24; i++) {
              data.push({
                num: Math.floor(Math.random() * 8) + 1,
                type: 0,
                index: i
              });
            }
          }
          //this.node.removeAllChildren()
          if (data && data.length == 24) {
            data.map(function (item, index) {
              var node = instantiate(_this2.pre_card);
              var com = node.getComponent(slotWildBountyShowdownItem);
              com["cardData"] = item;
              node.parent = _this2.node;
              if (index < 3) {
                _this2._dataList[0].push(com);
                node.setPosition(v3(_this2._linePosition[0][_this2._dataList[0].length][0], _this2._linePosition[0][_this2._dataList[0].length][1]));
                com.initCard(item, 0, false, false, true);
              } else if (index < 7) {
                _this2._dataList[1].push(com);
                node.setPosition(v3(_this2._linePosition[1][_this2._dataList[1].length][0], _this2._linePosition[1][_this2._dataList[1].length][1]));
                com.initCard(item, 1, false, false, true);
              } else if (index < 12) {
                _this2._dataList[2].push(com);
                node.setPosition(v3(_this2._linePosition[2][_this2._dataList[2].length][0], _this2._linePosition[2][_this2._dataList[2].length][1]));
                com.initCard(item, 2, false, false, true);
              } else if (index < 17) {
                _this2._dataList[3].push(com);
                node.setPosition(v3(_this2._linePosition[3][_this2._dataList[3].length][0], _this2._linePosition[3][_this2._dataList[3].length][1]));
                com.initCard(item, 3, false, false, true);
              } else if (index < 21) {
                _this2._dataList[4].push(com);
                node.setPosition(v3(_this2._linePosition[4][_this2._dataList[4].length][0], _this2._linePosition[4][_this2._dataList[4].length][1]));
                com.initCard(item, 4, false, false, true);
              } else {
                _this2._dataList[5].push(com);
                node.setPosition(v3(_this2._linePosition[5][_this2._dataList[5].length][0], _this2._linePosition[5][_this2._dataList[5].length][1]));
                com.initCard(item, 5, false, false, true);
              }
              if (item.num == 9 || item.num == 10) {
                com.scatterShow();
              }
            });
          }
        };
        _proto.run = function run(type) {
          var _this3 = this;
          this._runType = type;
          this._dataList.map(function (item, index) {
            if ((index == 0 || index == 5) && item.length < 4 || (index == 1 || index == 4) && item.length < 5 || (index == 2 || index == 3) && item.length < 6) {
              var cardData = {
                num: Math.floor(Math.random() * 8) + 1,
                type: 0
              };
              var node = instantiate(_this3.pre_card);
              var com = node.getComponent(slotWildBountyShowdownItem);
              com.getComponent(UIOpacity).opacity = 0;
              com["cardData"] = cardData;
              node.parent = _this3.node;
              node.setPosition(v3(_this3._linePosition[index][0][0], _this3._linePosition[index][0][1]));
              com.initCard(cardData, index);
              item.unshift(com);
              item.map(function (item1) {
                if (item1["cardData"] && item1["cardData"]["num"] == 10) {
                  item1.wildChangeAni();
                }
              });
            }
          });
          this.scheduleOnce(function () {
            _this3._runType == "fast" ? _this3.setState(CardState.RUNFAST) : _this3.setState(CardState.RUNNORMAL);
          }, 0.2);
        };
        _proto.runOne = function runOne(currentIndex) {
          var _this4 = this;
          this._dataList[currentIndex].map(function (item, index) {
            item.node.getComponent(UIOpacity).opacity = 255;
            item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y - _this4._normalMoveStep[currentIndex], 0));
            if (item.node.getPosition().y <= _this4._linePosition[currentIndex][_this4._linePosition[currentIndex].length - 1][1] - _this4._itemHeight / 2) {
              if (_this4._isGetResult && currentIndex == 5) {
                _this4.setState(CardState.RESULTNORMAL);
              } else {
                //随机重新生成卡片以及设置位置
                var cardData = {
                  num: Math.floor(Math.random() * 8) + 1,
                  type: 0
                };
                if (currentIndex == 2 || currentIndex == 3) {
                  item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y + _this4._itemHeight * (_this4._dataList[currentIndex].length - 1) - 40, 0));
                } else {
                  item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y + _this4._itemHeight * (_this4._dataList[currentIndex].length - 1), 0));
                }
                //item.node.setPosition(cc.v3(item.node.getPosition().x, item.node.getPosition().y + this._itemHeight * (this._dataList[currentIndex].length - 1), 0))
                item["cardData"] = cardData;
                item.initCard(cardData, currentIndex);
              }
            }
            // else {
            //     item.node.setPosition(cc.v3(item.node.getPosition().x, item.node.getPosition().y - this._normalMoveStep[currentIndex], 0))
            // }
          });
        };

        _proto.resultOne = function resultOne(currentIndex) {
          var _this5 = this;
          if (!this._normalGetResult[currentIndex]) {
            this._normalMoveStep[currentIndex] -= 10;
            if (this._normalMoveStep[currentIndex] <= 70) {
              this._normalMoveStep[currentIndex] = 70;
            }
            //console.log(this._normalMoveStep)
            if (this._dataList[currentIndex]) {
              this._dataList[currentIndex].map(function (item, index) {
                item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y - _this5._normalMoveStep[currentIndex], 0));
                if (item.node.getPosition().y <= _this5._linePosition[currentIndex][_this5._linePosition[currentIndex].length - 1][1] - _this5._itemHeight / 2) {
                  item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y + _this5._itemHeight * (_this5._dataList[currentIndex].length - 1)));
                  if (index != 0) {
                    item["cardData"] = _this5._result[currentIndex][index - 1];
                    item.initCard(item["cardData"], currentIndex, false, true);
                  } else {
                    item["cardData"] = {
                      num: Math.floor(Math.random() * 8) + 1,
                      type: 0
                    };
                    item.initCard(item["cardData"], currentIndex);
                  }
                }
                // else {
                //     item.node.setPosition(cc.v3(item.node.getPosition().x, item.node.getPosition().y - this._normalMoveStep[currentIndex], 0))

                // }
                if (index == _this5._dataList[currentIndex].length - 1 && _this5._resultTime[currentIndex] <= 0 && item.node.getPosition().y <= _this5._linePosition[currentIndex][_this5._linePosition[currentIndex].length - 1][1]) {
                  _this5._normalGetResult[currentIndex] = true;
                  _this5._normalMoveStep[currentIndex] = 0;
                  _this5._dataList[currentIndex].map(function (item, index) {
                    if (_this5._linePosition[currentIndex][index]) {
                      tween(item.node).to(0.1, {
                        position: v3(item.node.getPosition().x, _this5._linePosition[currentIndex][index][1] - 20)
                      }).by(0.1, {
                        position: v3(0, 20)
                      }).call(function () {
                        if (item["cardData"]["num"] == 9) {
                          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolScatter);
                          item.scatterShow(true);
                        } else if (item["cardData"]["num"] == 10) {
                          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolWild);
                          item.scatterShow();
                        } else {
                          item.iconShow(item["cardData"]["num"]);
                        }
                      }).start();
                    }
                  });
                  _this5.scheduleOnce(function () {
                    //删除第一个
                    //this.node.removeChild(this._dataList[currentIndex][0].node)
                    _this5._dataList[currentIndex][0].node.destroyFromParent();
                    _this5._dataList[currentIndex].splice(0, 1);
                    _this5.hideLight(currentIndex);
                    if (_this5._showLineIndex == currentIndex + 1) {
                      tween(_this5.node.parent.parent).to(0.3, {
                        scale: new Vec3(0.9, 0.9, 1)
                      }, {
                        easing: "quintOut"
                      }).start();
                    }
                    if (_this5._showLineIndex != 0 && _this5._showLineIndex <= currentIndex + 1) {
                      _this5.showLight(currentIndex + 1);
                    }
                    slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.spinStop);
                  }, 0.2);
                  if (currentIndex == 5) {
                    if (_this5._showLineIndex != 0) {
                      _this5.node.parent.parent.setScale(new Vec3(1, 1, 1));
                      _this5.scheduleOnce(function () {
                        _this5.setState(CardState.END);
                      }, 0.8);
                    } else {
                      _this5.scheduleOnce(function () {
                        _this5.setState(CardState.END);
                      }, 0.2);
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
          this._result = data;
          //console.log(this._result, '_result', showLineIndex)
          this._showLineIndex = showLineIndex;
          if (this._runType == "fast") {
            this._isGetResult = true;
          } else {
            //光效处理 & 放大缩小处理
            if (this._showLineIndex != 0) {
              this._resultTime.map(function (item, index) {
                if (index == _this6._showLineIndex) {
                  _this6._resultTime[index] += 0.5;
                } else if (index > _this6._showLineIndex) {
                  _this6._resultTime[index] = _this6._resultTime[index - 1] + 0.8;
                }
              });
              this.scheduleOnce(function () {
                _this6._isGetResult = true;
              });
            } else {
              this._isGetResult = true;
            }
          }
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.showLight = function showLight(index) {
          var _this7 = this;
          var _audioId = 0;
          index == 1 ? this.light1.node.active = true : index == 2 ? this.light2.node.active = true : index == 3 ? this.light3.node.active = true : index == 4 ? this.light4.node.active = true : index == 5 ? this.light5.node.active = true : "";
          slotWildBountyShowdownProxy.emit(slotWildBountyShowdownGameEvent.NOTICESHOWANI);
          if (index <= 5) {
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fastspinStart, function (id) {
              _audioId = id;
              _this7.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId);
              }, 1.2);
            });
          }
        };
        _proto.hideLight = function hideLight(index) {
          index == 1 ? this.light1.node.active = false : index == 2 ? this.light2.node.active = false : index == 3 ? this.light3.node.active = false : index == 4 ? this.light4.node.active = false : index == 5 ? this.light5.node.active = false : "";
        }
        //删除中奖号码
        ;

        _proto.deleteItem = function deleteItem(target) {
          var _this8 = this;
          var _cache = []; //需要删除的卡片索引
          this._target = []; //需要删除的卡片分成6组
          var isPlayWin = false;
          this.node.getChildByName("mask").getComponent(UITransform).priority = 25;
          this.node.getChildByName("mask").active = true;
          target.map(function (item) {
            item.map(function (item1) {
              if (_cache.indexOf(item1) < 0) {
                _cache.push(item1);
              }
            });
          });
          _cache.map(function (item) {
            if (item < 3) {
              _this8._target.push([0, item]);
            } else if (item < 7) {
              _this8._target.push([1, item - 3, item]);
            } else if (item < 12) {
              _this8._target.push([2, item - 7, item]);
            } else if (item < 17) {
              _this8._target.push([3, item - 12, item]);
            } else if (item < 21) {
              _this8._target.push([4, item - 17, item]);
            } else {
              _this8._target.push([5, item - 21, item]);
            }
          });

          //需要删除的卡片生成动画效果，插入win_card_box中
          this._target.map(function (item) {
            var targetItem = _this8._dataList[item[0]][item[1]];
            var node = instantiate(_this8.pre_card);
            var com = node.getComponent(slotWildBountyShowdownItem);
            com["cardData"] = targetItem["cardData"];
            node.parent = _this8.win_card_box;
            node.setPosition(v3(_this8._linePosition[item[0]][item[1] + 1][0], _this8._linePosition[item[0]][item[1] + 1][1]));
            com.initCard(com["cardData"], item[0], true);
            targetItem.getComponent(UIOpacity).opacity = 0;
          });
          if (!isPlayWin) {
            isPlayWin = true;
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.prizeSmallwin);
            this.scheduleOnce(function () {
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symShrink);
            }, 1);
          }
          //需要判断有带背景转成万能
          this.scheduleOnce(function () {
            _this8.clearTransientNodes(_this8.win_card_box);
            _this8._target.map(function (item) {
              if (item && _this8._dataList[item[0]] && _this8._dataList[item[0]][item[1]]) {
                var targetItem = _this8._dataList[item[0]][item[1]];
                if (targetItem["cardData"]["type"] == 1 && targetItem["cardData"]["num"] != 9 && targetItem["cardData"]["num"] != 10) {
                  targetItem.getComponent(UIOpacity).opacity = 255;
                  targetItem["cardData"]["num"] = 10;
                  targetItem.node.getComponent(slotWildBountyShowdownItem).initCard(targetItem["cardData"], item[0], false, true);
                  targetItem.scatterShow();
                } else {
                  targetItem["isDelete"] = true;

                  //this.node.removeChild(targetItem.node)
                  targetItem.node.destroyFromParent();
                }
              }
            });
            _this8._dataList.map(function (item, index) {
              for (var i = 0; i < item.length; i++) {
                if (item[i]["isDelete"]) {
                  item.splice(i, 1);
                  i--;
                }
              }
            });
            _this8.scheduleOnce(function () {
              _this8.node.getChildByName("mask").getComponent(UITransform).priority = 1;
              _this8.node.getChildByName("mask").active = false;
              _this8.changePostionItem();
            });
          }, 1.8); //时间要和initCard参数win一致
        }

        //中奖后移动item位置
        ;

        _proto.changePostionItem = function changePostionItem() {
          var _this9 = this;
          this._dataList.map(function (item, index) {
            item.map(function (item1, index1) {
              item1.node.getComponent(UIOpacity).opacity = 255;
              if (_this9._linePosition[index][_this9._linePosition[index].length - item.length + index1]) {
                if (item1.node.getPosition().y != _this9._linePosition[index][_this9._linePosition[index].length - item.length + index1][1]) {
                  tween(item1.node).to(0.08, {
                    position: v3(item1.node.getPosition().x, _this9._linePosition[index][_this9._linePosition[index].length - item.length + index1][1])
                  }).by(0.02, {
                    position: v3(0, 10)
                  }).by(0.02, {
                    position: v3(0, -10)
                  }).by(0.02, {
                    position: v3(0, 5)
                  }).by(0.02, {
                    position: v3(0, -5)
                  }).start();
                } else {
                  tween(item1.node).to(0.08, {
                    position: v3(item1.node.getPosition().x, _this9._linePosition[index][_this9._linePosition[index].length - item.length + index1][1])
                  }).start();
                }
              }
            });
          });
          slotWildBountyShowdownProxy.emit(slotWildBountyShowdownGameEvent.SHOWNEXT);
        }

        //渲染新的card
        ;

        _proto.renderItem = function renderItem(data, scatterNum, isFree) {
          var _this10 = this;
          //scatterNum >= 2时，需要播放期待动画
          if (data.length == 6) {
            data.map(function (item, index) {
              var teamAddNum = 0;
              item.map(function (item1, index1) {
                if (_this10._dataList[index].length != item.length) {
                  teamAddNum += 1;
                  var node = instantiate(_this10.pre_card);
                  var com = node.getComponent(slotWildBountyShowdownItem);
                  com["cardData"] = item1;
                  node.parent = _this10.node;
                  _this10._dataList[index].splice(index1, 0, com);
                  var initY = _this10._linePosition[index][0][1] + (teamAddNum - 1) * 155;
                  node.setPosition(v3(_this10._linePosition[index][index1][0], initY));
                  com.initCard(item1, index, false, true);
                  if (com["cardData"]["num"] == 9) {
                    com.scatterShow(true);
                  } else if (com["cardData"]["num"] == 10) {
                    com.scatterShow();
                  } else {
                    com.iconShow(com["cardData"]["num"]);
                  }
                }
              });
            });
          }
          if (scatterNum >= 2) {
            this.waiting_spine.node.active = true;
            slotWildBountyShowdownProxy.emit(slotWildBountyShowdownGameEvent.NOTICESHOWANI);
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.heartbeatNoise);
            this.waiting_spine.setAnimation(0, isFree ? "free_idle" : "normal_idle", true);
            this.scheduleOnce(function () {
              _this10._dataList.map(function (item, index) {
                _this10.scheduleOnce(function () {
                  item.map(function (item1, index1) {
                    if (_this10._linePosition[index][index1 + 1]) {
                      if (item1.node.getPosition().y != _this10._linePosition[index][index1 + 1][1]) {
                        tween(item1.node).to(0.08, {
                          position: v3(item1.node.getPosition().x, _this10._linePosition[index][index1 + 1][1])
                        }).by(0.02, {
                          position: v3(0, 10)
                        }).by(0.02, {
                          position: v3(0, -10)
                        }).by(0.02, {
                          position: v3(0, 5)
                        }).by(0.02, {
                          position: v3(0, -5)
                        }).call(function () {
                          if (item1["cardData"]["num"] == 9) {
                            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolScatter);
                          } else if (item1["cardData"]["num"] == 10) {
                            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolWild);
                          }
                        }).start();
                      } else {
                        tween(item1.node).to(0.08, {
                          position: v3(item1.node.getPosition().x, _this10._linePosition[index][index1 + 1][1])
                        }).call(function () {
                          if (item1["cardData"]["num"] == 9) {
                            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolScatter);
                          } else if (item1["cardData"]["num"] == 10) {
                            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolWild);
                          }
                        }).start();
                      }
                    }
                  });
                }, 0.15);
              });
            }, 1);
            this.scheduleOnce(function () {
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.heartbeatSlowdrop);
              _this10.waiting_spine.node.active = false;
              slotWildBountyShowdownProxy.emit(slotWildBountyShowdownGameEvent.NOTICEHIDEANI);
            }, 1.5);
          } else {
            this.scheduleOnce(function () {
              _this10._dataList.map(function (item, index) {
                item.map(function (item1, index1) {
                  if (_this10._linePosition[index][index1 + 1]) {
                    if (item1.node.getPosition().y != _this10._linePosition[index][index1 + 1][1]) {
                      tween(item1.node).to(0.08, {
                        position: v3(item1.node.getPosition().x, _this10._linePosition[index][index1 + 1][1])
                      }).by(0.02, {
                        position: v3(0, 10)
                      }).by(0.02, {
                        position: v3(0, -10)
                      }).by(0.02, {
                        position: v3(0, 5)
                      }).by(0.02, {
                        position: v3(0, -5)
                      }).call(function () {
                        if (item1["cardData"]["num"] == 9) {
                          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolScatter);
                        } else if (item1["cardData"]["num"] == 10) {
                          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolWild);
                        }
                      }).start();
                    } else {
                      tween(item1.node).to(0.08, {
                        position: v3(item1.node.getPosition().x, _this10._linePosition[index][index1 + 1][1])
                      }).call(function () {
                        if (item1["cardData"]["num"] == 9) {
                          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolScatter);
                        } else if (item1["cardData"]["num"] == 10) {
                          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolWild);
                        }
                      }).start();
                    }
                  }
                });
              });
            }, 0.1);
          }
        };
        _proto.update = function update(dt) {
          var _this11 = this;
          switch (this._state) {
            case CardState.RUNFAST:
              {
                this._dataList.map(function (item, index) {
                  item.map(function (item1, index1) {
                    item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this11._fastMoveSteps[index], 0));
                    if (item1.node.getPosition().y <= _this11._linePosition[index][_this11._linePosition[index].length - 1][1] - _this11._itemHeight / 2) {
                      if (_this11._isGetResult) {
                        _this11.setState(CardState.RESULTFAST);
                        //}
                      } else {
                        //随机重新生成卡片以及设置位置
                        var cardData = {
                          num: Math.floor(Math.random() * 8) + 1,
                          type: 0
                        };
                        item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y + _this11._itemHeight * (_this11._dataList[index].length - 1)));
                        item1["cardData"] = cardData;
                        item1.initCard(cardData, index);
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
                    item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this11._fastMoveSteps1[index], 0));
                    if (item1.node.getPosition().y <= _this11._linePosition[index][_this11._linePosition[index].length - 1][1] - _this11._itemHeight / 2) {
                      item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y + _this11._itemHeight * (_this11._dataList[index].length - 1) - _this11._fastMoveSteps1[index]));
                      if (index1 != 0) {
                        item1["cardData"] = _this11._result[index][index1 - 1];
                        item1.initCard(item1["cardData"], index, false, true);
                      } else {
                        item1["cardData"] = {
                          num: Math.floor(Math.random() * 8) + 1,
                          type: 0
                        };
                        item1.initCard(item1["cardData"], index);
                      }
                    }
                    // else {
                    //     item1.node.setPosition(cc.v3(item1.node.getPosition().x, item1.node.getPosition().y - this._fastMoveSteps1[index], 0))

                    // }
                    if (index == 5 && index1 == 3 && item1.node.getPosition().y < _this11._linePosition[index][_this11._linePosition[index].length - 1][1]) {
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
                    item[0].node.destroyFromParent();
                    item.splice(0, 1);
                  });
                  this._dataList.map(function (item, index) {
                    item.map(function (item1, index1) {
                      if (item1 && item1["cardData"]) {
                        tween(item1.node).to(0.02, {
                          position: v3(item1.node.getPosition().x, _this11._linePosition[index][index1 + 1][1], 0)
                        }).call(function () {
                          if (item1["cardData"]["num"] == 9) {
                            item1.scatterShow(true);
                            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolScatter);
                          } else if (item1["cardData"]["num"] == 10) {
                            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.symbolWild);
                            item1.scatterShow();
                          } else {
                            item1.iconShow(item1["cardData"]["num"]);
                          }
                        }).start();
                      }
                    });
                  });
                  slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.spinStopQuick);
                }
                this._normalMoveStep = [80, 80, 80, 80, 80, 80];
                this._normalGetResult = [false, false, false, false, false, false];
                this._isGetResult = false;
                this._time1 = 0.3;
                this._time2 = 0.6;
                this._time3 = 0.9;
                this._time4 = 1.2;
                this._time5 = 1.5;
                this._resultTime = [0.3, 0.6, 0.9, 1.2, 1.5, 1.8];
                this.setState(CardState.NORMAL);
                slotWildBountyShowdownProxy.emit(slotWildBountyShowdownGameEvent.END);
                slotWildBountyShowdownProxy.emit(slotWildBountyShowdownGameEvent.NOTICEHIDEANI);
                break;
              }
          }
        };
        _proto.clearTransientNodes = function clearTransientNodes(parent) {
          // 这些获奖特效每次重新创建，不能仅摘除后遗留节点及动画资源。
          for (var _iterator = _createForOfIteratorHelperLoose(parent.children.slice()), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.removeFromParent();
            child.destroy();
          }
        };
        return slotWildBountyShowdownRun;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_card", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "win_card_box", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "waiting_spine", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "light1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "light2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "light3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "light4", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "light5", [_dec10], {
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

System.register("chunks:///_virtual/slotWildBountyShowdownScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './MainManager.ts', './slotWildBountyShowdownProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, ViewManager, Common, MainManager, slotWildBountyShowdownProxy;
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
      slotWildBountyShowdownProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f77e4Cy209Lw7e5uaharowz", "slotWildBountyShowdownScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotWildBountyShowdownScene = exports('default', (_dec = ccclass("slotWildBountyShowdownScene"), _dec2 = menu("game/slotWildBountyShowdown/slotWildBountyShowdownScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWildBountyShowdownScene, _Component);
        function slotWildBountyShowdownScene() {
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
        var _proto = slotWildBountyShowdownScene.prototype;
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
          slotWildBountyShowdownProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          slotWildBountyShowdownProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return slotWildBountyShowdownScene;
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

System.register("chunks:///_virtual/slotWildBountyShowdownView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Common.ts', './ProxyMgr.ts', './ViewManager.ts', './slotWildBountyShowdownProxy.ts', './FortuneHistory.ts', './FortuneRank.ts', './DataManager.ts', './ScrollNumLabel.ts', './FortuneSetBase.ts', './FortuneSetAuto.ts', './MainManager.ts', './NetManager.ts', './AddSpineEffect.ts', './slotWildBountyShowdownRun.ts', './slotWildBountyShowdownWindow.ts', './AudioManager.ts', './slotWildBountyShowdownDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, sp, SpriteFrame, Label, instantiate, tween, Vec3, sys, v3, Sprite, Tween, UITransform, UIOpacity, color, Color, Component, i18n, Common, ProxyMgr, ViewManager, slotWildBountyShowdownProxy, slotWildBountyShowdownGameEvent, FortuneHistory, FortuneRank, DataManager, UserKey, ScrollNumLabel, FortuneSetBase, FortuneSetAuto, MainManager, NetManager, AddSpineEffect, slotWildBountyShowdownRun, slotWildBountyShowdownWindow, AudioManager, slotWildBountyShowdownDef;
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
      tween = module.tween;
      Vec3 = module.Vec3;
      sys = module.sys;
      v3 = module.v3;
      Sprite = module.Sprite;
      Tween = module.Tween;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
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
      slotWildBountyShowdownProxy = module.default;
      slotWildBountyShowdownGameEvent = module.slotWildBountyShowdownGameEvent;
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
      slotWildBountyShowdownRun = module.slotWildBountyShowdownRun;
    }, function (module) {
      slotWildBountyShowdownWindow = module.slotWildBountyShowdownWindow;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      slotWildBountyShowdownDef = module.slotWildBountyShowdownDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57;
      cclegacy._RF.push({}, "fc02bVI68xCSoRgZ7VSy+9J", "slotWildBountyShowdownView", undefined);
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
        WAIT: 9
      };
      var GETDATA_TIME = 0.4;
      var RUNNING_TIME = 1;
      var BIG_WIN_TIME1 = 8;
      var BIG_WIN_TIME2 = 10;
      var BIG_WIN_TIME3 = 12;
      var slotWildBountyShowdownView = exports('slotWildBountyShowdownView', (_dec = ccclass('slotWildBountyShowdownView'), _dec2 = menu("game/slotWildBountyShowdownGame/slotWildBountyShowdownView"), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(sp.Skeleton), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(SpriteFrame), _dec10 = property(sp.Skeleton), _dec11 = property(Node), _dec12 = property(SpriteFrame), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(SpriteFrame), _dec16 = property(Node), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(ScrollNumLabel), _dec21 = property(Label), _dec22 = property(ScrollNumLabel), _dec23 = property(Label), _dec24 = property(Node), _dec25 = property(sp.Skeleton), _dec26 = property(ScrollNumLabel), _dec27 = property(Label), _dec28 = property(ScrollNumLabel), _dec29 = property(Label), _dec30 = property(sp.Skeleton), _dec31 = property(Node), _dec32 = property(sp.Skeleton), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(sp.Skeleton), _dec38 = property(sp.Skeleton), _dec39 = property(sp.Skeleton), _dec40 = property(slotWildBountyShowdownRun), _dec41 = property(sp.Skeleton), _dec42 = property(Label), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(sp.Skeleton), _dec47 = property(Label), _dec48 = property(Node), _dec49 = property(Node), _dec50 = property(sp.Skeleton), _dec51 = property(ScrollNumLabel), _dec52 = property(Node), _dec53 = property(Node), _dec54 = property(Node), _dec55 = property(Node), _dec56 = property(Node), _dec57 = property(sp.Skeleton), _dec58 = property(ScrollNumLabel), _dec59 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWildBountyShowdownView, _Component);
        function slotWildBountyShowdownView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab_windowItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pageNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "initZidan", _descriptor3, _assertThisInitialized(_this));
          //初始化子弹效果
          _initializerDefineProperty(_this, "windowMask", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalBtn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moreBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modeBgList", _descriptor7, _assertThisInitialized(_this));
          //不同模式不一样的遮照层
          _initializerDefineProperty(_this, "notice", _descriptor8, _assertThisInitialized(_this));
          //公告栏
          _initializerDefineProperty(_this, "notice_bg", _descriptor9, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "notice_frames", _descriptor10, _assertThisInitialized(_this));
          //随机公告
          _initializerDefineProperty(_this, "notice_title", _descriptor11, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "notice_bg_wait", _descriptor12, _assertThisInitialized(_this));
          //等待公告内容
          _initializerDefineProperty(_this, "notice_frames_wait", _descriptor13, _assertThisInitialized(_this));
          //随机公告
          _initializerDefineProperty(_this, "notice_title_wait", _descriptor14, _assertThisInitialized(_this));
          //等待公告内容
          _initializerDefineProperty(_this, "notice_init_win", _descriptor15, _assertThisInitialized(_this));
          //倍数大于1时，初始获取的金额
          _initializerDefineProperty(_this, "notice_one_win", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_total_win", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_total_win_txt", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win_box", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win_txt", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betFree", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_winFree", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_goldFree", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "game_type", _descriptor28, _assertThisInitialized(_this));
          //普通/快速切换
          _initializerDefineProperty(_this, "buyFreeBtn", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buyFreeBtnHover", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buyFreeDialog", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buyFreeBtnCancel", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buyFreeBtnSure", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "top_double", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "top_double_spine", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "top_double_delete1", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "top_double_delete2", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_parent", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_start", _descriptor39, _assertThisInitialized(_this));
          //开始按钮
          _initializerDefineProperty(_this, "turn_auto_leftCount", _descriptor40, _assertThisInitialized(_this));
          //剩余自动模式
          _initializerDefineProperty(_this, "win_card_box", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_content", _descriptor42, _assertThisInitialized(_this));
          //免费模式加载页
          _initializerDefineProperty(_this, "free_start_box", _descriptor43, _assertThisInitialized(_this));
          //免费模式加载页
          _initializerDefineProperty(_this, "free_start_spine", _descriptor44, _assertThisInitialized(_this));
          //免费模式动画
          _initializerDefineProperty(_this, "free_start_time", _descriptor45, _assertThisInitialized(_this));
          //免费模式次数
          _initializerDefineProperty(_this, "free_start_btn", _descriptor46, _assertThisInitialized(_this));
          //免费模式加载页
          _initializerDefineProperty(_this, "free_win_box", _descriptor47, _assertThisInitialized(_this));
          //免费模式赢得总金额页面
          _initializerDefineProperty(_this, "free_win_spine", _descriptor48, _assertThisInitialized(_this));
          //免费模式赢得总金额页面动画
          _initializerDefineProperty(_this, "free_winTxt", _descriptor49, _assertThisInitialized(_this));
          //免费模式赢得金额
          _initializerDefineProperty(_this, "free_win_btn", _descriptor50, _assertThisInitialized(_this));
          //免费模式赢得总金额页面
          _initializerDefineProperty(_this, "free_box", _descriptor51, _assertThisInitialized(_this));
          //免费模式底部
          _initializerDefineProperty(_this, "free_init_mask1", _descriptor52, _assertThisInitialized(_this));
          //免费模式初始化遮照层
          _initializerDefineProperty(_this, "free_init_mask2", _descriptor53, _assertThisInitialized(_this));
          //免费模式初始化遮照层
          _initializerDefineProperty(_this, "free_init_mask3", _descriptor54, _assertThisInitialized(_this));
          //免费模式初始化遮照层
          _initializerDefineProperty(_this, "free_box_light", _descriptor55, _assertThisInitialized(_this));
          //免费模式底部光效
          _initializerDefineProperty(_this, "free_box_time", _descriptor56, _assertThisInitialized(_this));
          //免费模式底部次数
          _initializerDefineProperty(_this, "free_box_addTime", _descriptor57, _assertThisInitialized(_this));
          //免费模式次数增加
          _this._bet = 0;
          _this._isMinBet = false;
          _this._auto = false;
          _this._current_result = null;
          _this._current_index = 0;
          _this._cal_current_result = {
            result: null,
            scatterNum: 0,
            showLineIndex: 0
          };
          _this._win_totalMoney = 0;
          _this._total_scatterNum = 0;
          _this._currentOdd = 1;
          _this._noticeIndex = 0;
          _this._noticeDelay = 1;
          _this._runDelay = 0.1;
          _this._isFree = false;
          _this._freeCount = 0;
          //接口
          //_freeCount = 5
          _this._state = RunState.NORMAL;
          _this._lock = false;
          _this._runTime = 0;
          _this._autoTimes = 0;
          _this._window = null;
          _this._hasChangeSpeed = false;
          //进入免费模式只能是普通速度，免费模式完成后，恢复之前速度模式
          _this._endFreeTime = 0;
          //免费结算页或大奖倒计时
          _this._initFreeTime = 0;
          //免费加载页倒计时
          _this._endBigTime = 0;
          //大奖倒计时
          _this._audioId = 0;
          _this._isEndBigWin = false;
          // 是否提前结束大奖背景
          _this._isEndFree = false;
          // 免费模式结算页按钮是否点击
          _this._errCount = 0;
          _this._waitNoticeShowTime = 0;
          _this._waitNoticeIndex = 0;
          _this._waitNoticeFn = null;
          _this._waitNoticeHideTarget = '';
          //
          _this._getResultIndex = false;
          return _this;
        }
        var _proto = slotWildBountyShowdownView.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          var _this2 = this;
          //免费模式 y:15 普通模式 y:97
          console.log('6');
          var node = instantiate(this.prefab_windowItem);
          this.node.addChild(node);
          this._window = node.getComponent(slotWildBountyShowdownWindow);
          node.active = false;
          this.windowMask.on(Node.EventType.TOUCH_END, function () {
            _this2.hideWindow();
          });

          //展示购买免费弹出框点击
          this.buyFreeBtn.on(Node.EventType.TOUCH_END, function () {
            _this2.clickShowBuyFree();
            tween(_this2.buyFreeBtn).to(0.05, {
              scale: new Vec3(1.2, 1.2, 1)
            }).to(0.05, {
              scale: new Vec3(1, 1, 1)
            }).start();
          });

          //展示购买免费弹出框移入
          this.buyFreeBtn.on(Node.EventType.MOUSE_ENTER, function () {
            _this2.buyFreeBtnHover.node.active = true;
            tween(_this2.buyFreeBtn.getChildByName('name')).to(0.2, {
              scale: new Vec3(1.1, 1.1, 1)
            }).start();
            _this2.buyFreeBtnHover.setAnimation(0, "push", true);
          });
          //展示购买免费弹出框移出
          this.buyFreeBtn.on(Node.EventType.MOUSE_LEAVE, function () {
            tween(_this2.buyFreeBtn.getChildByName('name')).to(0.2, {
              scale: new Vec3(1, 1, 1)
            }).start();
            _this2.buyFreeBtnHover.node.active = false;
          }, this);
          //购买免费弹出框隐藏
          this.buyFreeBtnCancel.on(Node.EventType.TOUCH_END, function () {
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.featureBuyCancel);
            tween(_this2.buyFreeBtnCancel).to(0.15, {
              scale: new Vec3(1.2, 1.2, 1)
            }).to(0.15, {
              scale: new Vec3(1, 1, 1)
            }).call(function () {
              _this2.clickHideBuyFree();
            }).start();
          });
          //购买免费弹出框隐藏移入
          this.buyFreeBtnCancel.on(Node.EventType.MOUSE_ENTER, function () {
            tween(_this2.buyFreeBtnCancel).to(0.15, {
              scale: new Vec3(1.07, 1.07, 1)
            }).start();
          });
          //购买免费弹出框隐藏移出
          this.buyFreeBtnCancel.on(Node.EventType.MOUSE_LEAVE, function () {
            tween(_this2.buyFreeBtnCancel).to(0.15, {
              scale: new Vec3(1, 1, 1)
            }).start();
          });

          //购买免费弹出框确定
          this.buyFreeBtnSure.on(Node.EventType.TOUCH_END, function () {
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.featureBuyStart);
            tween(_this2.buyFreeBtnSure).to(0.15, {
              scale: new Vec3(1.3, 1.3, 1)
            }).to(0.15, {
              scale: new Vec3(1, 1, 1)
            }).call(function () {
              _this2.clickBuyFree();
            }).start();
          });

          //购买免费弹出框确定移入
          this.buyFreeBtnSure.on(Node.EventType.MOUSE_ENTER, function () {
            tween(_this2.buyFreeBtnSure).to(0.15, {
              scale: new Vec3(1.07, 1.07, 1)
            }).start();
          });
          //购买免费弹出框确定移出
          this.buyFreeBtnSure.on(Node.EventType.MOUSE_LEAVE, function () {
            tween(_this2.buyFreeBtnSure).to(0.15, {
              scale: new Vec3(1, 1, 1)
            }).start();
          });

          //大奖关闭
          this.big_win_box.on(Node.EventType.TOUCH_END, function () {
            if (!_this2._isEndBigWin) {
              AudioManager.instance.stopSound(_this2._audioId);
              _this2.big_win_txt.reset(slotWildBountyShowdownProxy.result.prizeAmount);
              _this2._endBigTime = 5;
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.bgm_bigwin_end, function (id) {
                _this2._audioId = id;
              });
              _this2._isEndBigWin = true;
              //动画直接跳到对应的最终动画
              var aniname = '';
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
              _this2.clickHideBigWin();
            }
          });

          //免费模式初始页进入转盘
          this.free_start_btn.on(Node.EventType.TOUCH_END, function () {
            _this2.initFreePage();
          }, false);
          //免费模式结束页进入普通模式
          this.free_win_btn.on(Node.EventType.TOUCH_END, function () {
            // this.scheduleOnce(() => {
            //     AudioManager.instance.stopAllEffect();
            //     this.initNormalPage()
            // }, 0.1)
            if (!_this2._isEndFree) {
              _this2._isEndFree = true;
              AudioManager.instance.stopAllEffect();
              _this2.initNormalPage();
            }
          });
          this.init();
          this.updateGoldData();
          this.updateSetData();
          this.initEvent();
          this.checkDownOrUpBet();

          // this.scheduleOnce(() => {
          //     this.waitNotice('show')
          //     this.scheduleOnce(() => {
          //         console.log('end')
          //         this.waitNotice('hide')
          //     }, 10)

          // }, 2)

          // this.scheduleOnce(() => {
          //     this.initFreeLoadPage(3)
          // }, 2)
        };

        _proto.update = function update(dt) {
          this.updateNotice(dt);
          this.bigWinEnd();

          //免费结算页->普通模式
          if (this._endFreeTime > 0) {
            this._endFreeTime -= dt;
            if (this._endFreeTime <= 0 && this.free_win_box.active) {
              this._endFreeTime = 0;
              this.initNormalPage();
            }
          }

          //普通模式-》免费加载页面
          if (this._initFreeTime > 0) {
            this._initFreeTime -= dt;
            if (this._initFreeTime <= 0 && this.free_start_box.active) {
              this._initFreeTime = 0;
              this.initFreePage();
            }
          }
          //大奖结束
          if (this._endBigTime > 0) {
            this._endBigTime -= dt;
            if (this._endBigTime <= 0) {
              this._endBigTime = 0;
              if (this.big_win_box.active) {
                this.big_win_txt.reset();
                this.big_win_box.active = false;
                AudioManager.instance.stopSound(this._audioId);
                this._audioId = null;
                this.allEnd();
              }
            }
          }
          switch (this._state) {
            case RunState.START:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (slotWildBountyShowdownProxy.result) {
                    this._current_result = slotWildBountyShowdownProxy.result;
                    this.startGameAni(true);
                    this.changeState(RunState.RUNNING);
                  } else {
                    this._runTime = RUNNING_TIME;
                    this._errCount++;
                    if (this._errCount === 4) {
                      // 等待超时不代表下注失败；保留原请求，禁止重新发送扣款请求。
                      Common.showTip(i18n.lang.betResultUnknown);
                    }
                  }
                }
                break;
              }
            case RunState.RUNNING:
              {
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
          }
        };
        _proto.init = function init() {
          this.normalBtn.active = true;
          this.moreBtn.active = false;
          this.buyFreeDialog.active = false;
          this.changeBtnActive(true);

          //mock初始化数据 接口
          //this.initPage(null)
          //接口
          // this._lock = true
          // this.scheduleOnce(() => {
          //     this._isFree = true
          //     this._currentOdd = 8
          //     this.doubleChangeToFree()
          //     this.initFreePage()
          // }, 3)

          //接口
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotWildBountyShowdown.info, {});
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
        }
        //开始游戏校验（初始化页面 & 请求开奖结果）
        ;

        _proto.preStart = function preStart(buyFree) {
          var _this3 = this;
          if (buyFree === void 0) {
            buyFree = false;
          }
          if (this._lock) return;

          //接口
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._isFree) {
            if (!buyFree && gold < this._bet) {
              Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
              this.setAuto(0);
              return;
            }
            if (buyFree && gold < this._bet * 75) {
              Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
              this.setAuto(0);
              return;
            }
          }
          this._lock = true;
          if (!this._isFree) {
            !buyFree && this.updateGoldData(-this._bet);
            buyFree && this.updateGoldData(-this._bet * 75);
          }
          if (!this._isFree && this._currentOdd != 1) {
            this.doubleMove(1, function () {
              _this3._currentOdd = 1;
            });
          }
          this.notice_one_win.active = false;
          this.notice_total_win.active = false;
          this.notice_bg.active = true;
          this.notice.setAnimation(0, 'normal_p', true);
          this.txt_win.reset();
          slotWildBountyShowdownProxy.result = null;
          this.sendBet(buyFree);
          this._state = RunState.START;
          this._runTime = GETDATA_TIME;
          // this.scheduleOnce(() => {
          //     this.startGameAni(true)
          // }, 0.1)
        };

        _proto.clickRun = function clickRun() {
          var _this4 = this;
          this.setFreeCount(this._freeCount - 1);
          if (this._freeCount < 0) {
            this._freeCount = 0;
          }
          this.changeBtnActive(false);
          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.spinBtn);
          this.checkAuto();
          //隐藏免费按钮
          if (this.buyFreeBtn.active) {
            this.buyFreeBtnChange('hide');
          }
          this.turn_parent.run(this._runDelay == 0 ? 'fast' : 'normal');
          this.calResult();
          if (this._runDelay == 0) {
            this.scheduleOnce(function () {
              _this4.turn_parent.getResult(_this4._cal_current_result.result);
            }, 0.1);
          } else {
            //每条间隔0.3s，总共1.5
            this.scheduleOnce(function () {
              _this4.turn_parent.getResult(_this4._cal_current_result.result, _this4._cal_current_result.showLineIndex);
            }, 0.5);
          }
        };
        _proto.clickStop = function clickStop() {
          var _this5 = this;
          //判断第一轮中奖结果
          if (this._current_result && this._current_result['OpenNums'][this._current_index]['prizeAmount'] > 0) {
            this.startGameAni(false);
            this._win_totalMoney = this._current_result['OpenNums'][this._current_index]['prizeAmount'];
            slotWildBountyShowdownProxy.freeTotalWin += this._isFree ? this._current_result['OpenNums'][this._current_index]['prizeAmount'] : 0;
            this.scheduleOnce(function () {
              _this5.txt_win.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + '');
              _this5.txt_winFree.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + '');
            }, 1);
            this.turn_parent.deleteItem(this._current_result['OpenNums'][this._current_index]['prizeIdx']);
            if (!this._isFree && !this._auto) {
              this.turn_start.setAnimation(0, 'stop', true);
            }
          } else {
            this.startGameAni(false);
            this.allEnd();
          }
        }
        //设置免费次数
        ;

        _proto.setFreeCount = function setFreeCount(count) {
          this._freeCount = count;
          if (this._isFree) {
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fsSpin);
          }
          if (this._freeCount >= 1) {
            this.free_box.getChildByName('bottom').getChildByName("lastTime").active = false;
            this.free_box.getChildByName('bottom').getChildByName("timeBg").active = true;
            this.free_box_time.node.active = true;
            this.free_box_time.string = Common.numFormat(this._freeCount + "");
          } else {
            this.free_box.getChildByName('bottom').getChildByName("timeBg").active = false;
            this.free_box.getChildByName('bottom').getChildByName("lastTime").active = true;
            this.free_box_time.node.active = false;
          }
        }
        //补充新一轮号码 & 中奖金额倍数动画
        ;

        _proto.showNext = function showNext() {
          var _this6 = this;
          this.winResult();
          if (this._current_result['OpenNums'][this._current_index + 1]) {
            this._current_index += 1;
            this.calResult();
            this._total_scatterNum = this._cal_current_result.scatterNum;
            this.turn_parent.renderItem(this._cal_current_result.result, this._total_scatterNum, this._isFree);
            var renderTime = this._total_scatterNum >= 2 ? 2 : 0.5;
            this.scheduleOnce(function () {
              //本轮结束
              if (_this6._current_result && _this6._current_result['OpenNums'][_this6._current_index]['prizeAmount'] == 0) {
                _this6.scheduleOnce(function () {
                  _this6.notice_one_win.getChildByName('win').getComponent(Label).string = '0';
                  _this6.notice_one_win.active = false;
                  _this6.notice_total_win.setScale(v3(0.2, 0.2, 1));
                  _this6.notice_total_win.active = true;
                  slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.prizeInfobarTotalwin);
                  //this.notice_total_win.getChildByName('win').getComponent(cc.Label).string = Common.numFormat(this._win_totalMoney + "");
                  _this6.winTotalMoney();
                  tween(_this6.notice_total_win).to(0.1, {
                    scale: v3(1, 1, 1)
                  }).start();
                }, 1);
                //判断是否中大奖
                var odd = _this6._win_totalMoney / _this6._bet;
                var big_win_time = 1.8;
                if (odd >= 20 && odd < 30) {
                  _this6.big_win_box.active = true;
                  big_win_time = BIG_WIN_TIME1;
                  _this6.big_win_txt.stepCount = BIG_WIN_TIME1 * 25;
                  //this.big_win.setAnimation(0, aniname + "intro", false);
                }

                if (odd >= 30 && odd < 50) {
                  _this6.big_win_box.active = true;
                  big_win_time = BIG_WIN_TIME2;
                  _this6.big_win_txt.stepCount = BIG_WIN_TIME2 * 25;
                  //this.big_win.setAnimation(0, aniname + "intro", false);
                }

                if (odd >= 50) {
                  _this6.big_win_box.active = true;
                  big_win_time = BIG_WIN_TIME3;
                  _this6.big_win_txt.stepCount = BIG_WIN_TIME3 * 25;
                  //this.big_win.setAnimation(0, aniname + "intro", false);
                }

                _this6.big_win_txt.string = Common.numFormat(_this6._win_totalMoney);
                // this.big_win.setCompleteListener((trackEntry: sp.spine.TrackEntry) => {
                //     let name = trackEntry.animation ? trackEntry.animation.name : "";
                //     if (name.startsWith(aniname)) {
                //         this.big_win.setCompleteListener(null);
                //         this.big_win.setAnimation(0, aniname + "idle", true);
                //     }
                // });
                if (_this6.big_win_box.active) {
                  slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.bgm_bigwin_main, function (id) {
                    _this6._audioId = id;
                  });
                }
                if (big_win_time == 1.8) {
                  _this6.scheduleOnce(function () {
                    _this6.allEnd();
                  }, big_win_time);
                } else {
                  _this6.scheduleOnce(function () {
                    if (_this6.big_win_box.active) {
                      _this6.big_win_txt.reset();
                      _this6.big_win_box.active = false;
                      _this6.allEnd();
                    }
                  }, big_win_time);
                }
              } else {
                //继续中奖
                _this6.scheduleOnce(function () {
                  _this6._win_totalMoney += _this6._current_result['OpenNums'][_this6._current_index]['prizeAmount'];
                  slotWildBountyShowdownProxy.freeTotalWin += _this6._isFree ? _this6._current_result['OpenNums'][_this6._current_index]['prizeAmount'] : 0;
                  _this6.turn_parent.deleteItem(_this6._current_result['OpenNums'][_this6._current_index]['prizeIdx']);
                }, 1);
              }
            }, renderTime);
          }
        }

        //大奖金额到达终点
        ;

        _proto.bigWinEnd = function bigWinEnd() {
          var _this7 = this;
          if (this.big_win_box.active && !this._isEndBigWin && slotWildBountyShowdownProxy.result && slotWildBountyShowdownProxy.result.prizeAmount - 200 <= parseInt(this.big_win_txt.string.replace(/,/g, '')) && parseInt(this.big_win_txt.string.replace(/,/g, '')) <= slotWildBountyShowdownProxy.result.prizeAmount + 200) {
            AudioManager.instance.stopSound(this._audioId);
            this._isEndBigWin = true;
            this._endBigTime = 5;
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.bgm_bigwin_end, function (id) {
              _this7._audioId = id;
            });
          }
          if (this.big_win_box.active) {
            var big_win = parseInt(this.big_win_txt.string.replace(/,/g, ''));
            var odd = big_win / this._bet;
            if (odd < 30 && this.big_win.animation != 'bigwin_intro' && this.big_win.animation != 'bigwin_idle') {
              this.big_win.setAnimation(0, "bigwin_intro", false);
              this.scheduleOnce(function () {
                _this7.big_win.setAnimation(0, "bigwin_idle", true);
              }, 0.5);
            }
            if (odd >= 30 && odd < 50 && this.big_win.animation != 'megawin_intro' && this.big_win.animation != 'megawin_idle') {
              this.big_win.setAnimation(0, "megawin_intro", false);
              this.scheduleOnce(function () {
                _this7.big_win.setAnimation(0, "megawin_idle", true);
              }, 0.5);
            }
            if (odd >= 50 && this.big_win.animation != 'superwin_intro' && this.big_win.animation != 'superwin_idle') {
              this.big_win.setAnimation(0, "superwin_intro", false);
              this.scheduleOnce(function () {
                _this7.big_win.setAnimation(0, "superwin_idle", true);
              }, 0.5);
            }
          }
        }

        //中奖金额总效果控制
        ;

        _proto.winResult = function winResult() {
          var _this8 = this;
          this._isFree ? this.txt_win.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + '') : this.txt_win.string = Common.numFormat(this._win_totalMoney + "");
          this.notice_bg.active = false;

          //只有倍数是1底部金额直接变化，其他的都有倍数动画效果
          if (this._currentOdd == 1) {
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fsIntroChange);
            this.doubleMove(2, function () {
              _this8._currentOdd = 2;
            });
            this.notice_one_win.getChildByName('win').getComponent(Label).string = Common.numFormat(this._current_result['OpenNums'][this._current_index]['prizeAmount'] + '');
            this.notice_one_win.active = true;
            var num = parseInt(this.notice_one_win.getChildByName('win').getComponent(Label).string.replace(/,/g, ''));
            if (num / this._bet < 20) {
              this.notice.setAnimation(0, 'normal_win', false);
              this.notice.addAnimation(0, 'normal_idle', true);
            } else if (num / this._bet >= 20 && num / this._bet < 30) {
              this.notice.setAnimation(0, 'bigwin_win', false);
              this.notice.addAnimation(0, 'bigwin_idle', true);
            } else if (num / this._bet >= 30) {
              this.notice.setAnimation(0, 'bigwin2_win', false);
              this.notice.addAnimation(0, 'bigwin2_idle', true);
            }
          } else {
            this.notice_one_win.active = false;
            this.notice_one_win.setScale(v3(0.2, 0.2, 1));
            var prizeAmount = this._current_result['OpenNums'][this._current_index]['prizeAmount'];
            var firstWin = prizeAmount / this._currentOdd;
            this.notice_init_win.getComponent(Label).string = Common.numFormat(firstWin + '');
            this.notice_init_win.node.active = true;
            tween(this.notice_init_win).to(0.3, {
              fontSize: 45
            }).start();
            //this.doubleMove 0.1s结束动画
            this.doubleToWin(function () {
              if (_this8._currentOdd <= 512) {
                slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fsIntroChange);
                _this8.doubleMove(_this8._currentOdd * 2, function () {
                  _this8._currentOdd = _this8._currentOdd * 2;
                });
              } else {
                _this8.doubleMove(_this8._currentOdd);
              }
            });

            //this.doubleToWin0.4s会移动到金额位置,0.2s变淡消失
            this.scheduleOnce(function () {
              _this8.notice_one_win.getChildByName('win').getComponent(Label).string = Common.numFormat(prizeAmount + '');
              _this8.notice_one_win.active = true;
              var num = parseInt(_this8.notice_one_win.getChildByName('win').getComponent(Label).string.replace(/,/g, ''));
              if (num / _this8._bet < 20) {
                _this8.notice.setAnimation(0, 'normal_win', false);
                _this8.notice.addAnimation(0, 'normal_idle', true);
              } else if (num / _this8._bet >= 20 && num / _this8._bet < 30) {
                _this8.notice.setAnimation(0, 'bigwin_win', false);
                _this8.notice.addAnimation(0, 'bigwin_idle', true);
              } else if (num / _this8._bet >= 30) {
                _this8.notice.setAnimation(0, 'bigwin2_win', false);
                _this8.notice.addAnimation(0, 'bigwin2_idle', true);
              }
              _this8.notice_init_win.node.active = false;
              _this8.notice_init_win.getComponent(Label).fontSize = 20;
              tween(_this8.notice_one_win).to(0.3, {
                scale: v3(1, 1, 1)
              }).start();
            }, 1);
          }
        }

        //免费模式加载页
        ;

        _proto.initFreeLoadPage = function initFreeLoadPage(surplusFreeCount, totalFreePrizeAmount) {
          if (surplusFreeCount === void 0) {
            surplusFreeCount = 0;
          }
          if (totalFreePrizeAmount === void 0) {
            totalFreePrizeAmount = 0;
          }
          this._initFreeTime = 10;
          AudioManager.instance.stopAllEffect();
          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fsTrans);
          slotWildBountyShowdownDef.palyMusic(slotWildBountyShowdownDef.audio.bgm_fs);
          this._freeCount = surplusFreeCount || slotWildBountyShowdownProxy.result.freeInfo.surplusFreeCount;
          slotWildBountyShowdownProxy.freeTotalWin = totalFreePrizeAmount;
          if (totalFreePrizeAmount) {
            this.txt_winFree.string = Common.numFormat(totalFreePrizeAmount + '');
          } else {
            slotWildBountyShowdownProxy.result ? this.txt_winFree.string = Common.numFormat(slotWildBountyShowdownProxy.result.freeInfo.totalFreePrizeAmount + '') : this.txt_winFree.string = '0';
          }
          this.free_start_time.getComponent(Label).string = this._freeCount + '';
          this.free_start_box.active = true;
          this.free_start_spine.node.active = true;
          this.free_start_spine.setAnimation(0, 'intro', false);
          this.free_start_spine.addAnimation(0, 'idle', true);
        }

        //初始化免费模式界面
        ;

        _proto.initFreePage = function initFreePage() {
          this._initFreeTime = 10;
          this.txt_winFree.reset(slotWildBountyShowdownProxy.freeTotalWin);
          this.buyFreeBtnChange('hide');
          this.free_start_box.active = false;
          this.notice.setAnimation(0, 'normal_p', false);
          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.uiStart);
          if (this._freeCount == 1) {
            this.free_box.getChildByName('bottom').getChildByName('lastTime').active = true;
            this.free_box.getChildByName('bottom').getChildByName('timeBg').active = false;
            this.free_box_time.node.active = false;
          } else {
            this.free_box.getChildByName('bottom').getChildByName('lastTime').active = false;
            this.free_box.getChildByName('bottom').getChildByName('timeBg').active = true;
            this.free_box_time.string = this._freeCount + '';
            this.free_box_time.node.active = true;
          }
          this.turn_parent.getComponent(Sprite).spriteFrame = this.modeBgList[1];
          this.notice_total_win.active = false;
          this.notice_bg.active = true;
          this.turn_parent.node.setPosition(v3(this.turn_parent.node.getPosition().x, this.turn_parent.node.getPosition().y - 67));
          this.win_card_box.setPosition(v3(this.win_card_box.getPosition().x, this.win_card_box.getPosition().y - 67));
          //this.notice.node.setPosition(cc.v3(this.win_card_box.getPosition().x, this.notice.node.getPosition().y - 30))
          this.free_content.active = true;
          this.free_box.active = true;
          this._currentOdd = 8;
          this.doubleChangeToFree();
        }
        //免费模式结算页
        ;

        _proto.freeTotalPage = function freeTotalPage() {
          var _this9 = this;
          this._endFreeTime = 10;
          this.free_content.active = false;
          this.free_box.active = false;
          this.turn_parent.getComponent(Sprite).spriteFrame = this.modeBgList[0];
          this.turn_parent.node.setPosition(v3(this.turn_parent.node.getPosition().x, this.turn_parent.node.getPosition().y + 67));
          this.win_card_box.setPosition(v3(this.win_card_box.getPosition().x, this.win_card_box.getPosition().y + 67));
          //this.notice.node.setPosition(cc.v3(this.win_card_box.getPosition().x, this.notice.node.getPosition().y - 30))
          this.txt_winFree.string = '0';
          this.txt_win.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + "");
          this.free_win_btn.active = false;
          this.free_win_box.active = true;
          this.free_win_spine.node.active = true;
          this.free_winTxt.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + "");
          this.free_win_spine.setAnimation(0, 'intro', false);
          this.free_win_spine.addAnimation(0, 'idle', true);

          //免费模式结束音乐
          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.bgm_totalwin_main, function (id) {
            _this9._audioId = id;
            _this9.scheduleOnce(function () {
              AudioManager.instance.stopSound(id);
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.bgm_totalwin_end, function (id) {
                _this9._audioId = id;
              });
            }, 2);
          });
          this.scheduleOnce(function () {
            if (!_this9.free_win_btn.active) {
              _this9.free_win_btn.setScale(v3(0.2, 0.2, 1));
              _this9.free_win_btn.active = true;
              tween(_this9.free_win_btn).to(0.1, {
                scale: v3(0.7, 0.7, 1)
              }).start();
            }
          }, 2);
        }
        //免费模式结算页到普通模式
        ;

        _proto.initNormalPage = function initNormalPage() {
          var _this10 = this;
          AudioManager.instance.stopAllEffect();
          slotWildBountyShowdownDef.palyMusic(slotWildBountyShowdownDef.audio.bgm_mg);
          //this._endFreeTime = 1
          this.notice_total_win.active = true;
          //this.notice_total_win.getChildByName('win').getComponent(cc.Label).string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + "");
          this.winTotalMoney(true);
          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.prizeInfobarTotalwin);
          if (!this._auto) {
            this.buyFreeBtnChange('show');
            this.turn_start.timeScale = 1;
            this.turn_start.setAnimation(0, 'idle', true);
          }
          //顶部倍数不变，处理x512x1024对象
          this.doubleMove(this._currentOdd);
          this.scheduleOnce(function () {
            var num = slotWildBountyShowdownProxy.freeTotalWin;
            if (num / _this10._bet < 20) {
              _this10.notice.setAnimation(0, 'normal_win', false);
              _this10.notice.addAnimation(0, 'normal_idle', true);
            } else if (num / _this10._bet >= 20 && num / _this10._bet < 30) {
              _this10.notice.setAnimation(0, 'bigwin_win', false);
              _this10.notice.addAnimation(0, 'bigwin_idle', true);
            } else if (num / _this10._bet >= 30) {
              _this10.notice.setAnimation(0, 'bigwin2_win', false);
              _this10.notice.addAnimation(0, 'bigwin2_idle', true);
            }

            // this.notice.setAnimation(0, 'bigwin_win', false)
            // this.notice.addAnimation(0, 'bigwin_idle', true)
            _this10.notice_bg.active = false;
            slotWildBountyShowdownProxy.freeTotalWin = 0;
            _this10.free_win_box.active = false;
            _this10._isEndFree = false;
            _this10.free_winTxt.reset(0);
            _this10.scheduleOnce(function () {
              _this10._lock = false;
              _this10.changeState(RunState.NORMAL);
            }, 0.5);
          }, 1);
        }

        //该局结束
        ;

        _proto.allEnd = function allEnd() {
          var _this11 = this;
          console.log('结束');
          this._total_scatterNum = 0;
          this._current_index = 0;
          this._errCount = 0;
          this._isEndBigWin = false;
          if (this._total_scatterNum > 0 && this._total_scatterNum < 3 && !this._isFree) {
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fastspinStop);
          }
          this.changeBtnActive(true);
          this.updateGoldData();
          if (!this._isFree && !this._auto) {
            this.turn_start.setAnimation(0, 'idle', true);
            if (this.buyFreeBtn.getPosition().x == 550) {
              this.buyFreeBtnChange('show');
            }
          }
          if (this._isFree) {
            var time = 0;
            if (slotWildBountyShowdownProxy.result && slotWildBountyShowdownProxy.result.freeInfo.surplusFreeCount > this._freeCount) {
              //免费模式下免费次数添加

              this.free_box_addTime.string = slotWildBountyShowdownProxy.result.freeInfo.surplusFreeCount - this._freeCount + '';
              this._freeCount = slotWildBountyShowdownProxy.result.freeInfo.surplusFreeCount;
              this.free_box_addTime.node.active = true;
              tween(this.free_box_addTime.node).to(time, {
                position: v3(0, -430)
              }).start();
              tween(this.free_box_addTime).to(time, {
                fontSize: 120
              }).call(function () {
                _this11.free_box_addTime.node.active = false;
                _this11.free_box_addTime.fontSize = 20;
                _this11.free_box_addTime.node.setPosition(v3(0, 100));
                _this11.free_box_time.string = Common.numFormat(slotWildBountyShowdownProxy.result.freeInfo.surplusFreeCount + "");
              }).start();

              //使用接口时调用
              this.free_box_time.string = Common.numFormat(slotWildBountyShowdownProxy.result.freeInfo.surplusFreeCount + "");
              this._freeCount = slotWildBountyShowdownProxy.result.freeInfo.surplusFreeCount;
            }
            //this.scheduleOnce(() => {
            console.log(this._freeCount, 'count');
            if (this._freeCount == 0) {
              this._isFree = false;
              if (this._hasChangeSpeed) {
                this._hasChangeSpeed = false;
                this._runDelay = 0;
              }
              this.freeTotalPage();
              this.changeState(RunState.WAIT);
            } else {
              this.doubleMove(8, function () {
                _this11._currentOdd = 8;
              });
              this.scheduleOnce(function () {
                _this11._lock = false;
                _this11.changeState(RunState.NORMAL);
              }, GETDATA_TIME);
            }
            //})
          } else {
            if (slotWildBountyShowdownProxy.result.freeInfo && slotWildBountyShowdownProxy.result.freeInfo.surplusFreeCount > 0) {
              var _time = 1.5;
              //当前有倍数
              if (this._currentOdd != 1) {
                _time = 1.5;
              }
              this.scheduleOnce(function () {
                //刚开始进入免费模式加载页
                _this11.initFreeLoadPage();
              }, _time);
            } else {
              //没中奖
              this._lock = false;
              this.changeState(RunState.NORMAL);
            }
          }
        }

        //中奖后总金额展示
        ;

        _proto.winTotalMoney = function winTotalMoney(isFreeEnd) {
          if (isFreeEnd === void 0) {
            isFreeEnd = false;
          }
          //免费模式结束后，中奖金额没展示
          //this.notice_total_win_txt.reset(0)
          var num = 0;
          if (isFreeEnd) {
            num = slotWildBountyShowdownProxy.freeTotalWin;
            if (slotWildBountyShowdownProxy.freeTotalWin / this._bet < 5) {
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.prizeInfobarTotalwin);
              this.txt_win.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + "");
              //5倍以下直接显示
              this.notice_total_win_txt.reset(slotWildBountyShowdownProxy.freeTotalWin);
              this.txt_winFree.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + "");
            } else {
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.prizeInfobarTotalwinMedMain);
              this.txt_win.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + "");
              this.notice_total_win_txt.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + "");
              this.txt_winFree.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + "");
              this.scheduleOnce(function () {
                slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.prizeInfobarTotalwinMedEnd);
              }, 1);
            }
          } else {
            num = slotWildBountyShowdownProxy.result.prizeAmount;
            if (slotWildBountyShowdownProxy.result.prizeAmount / this._bet < 5) {
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.prizeInfobarTotalwin);
              this.txt_win.string = Common.numFormat(slotWildBountyShowdownProxy.result.prizeAmount + "");
              //5倍以下直接显示
              this.notice_total_win_txt.reset(slotWildBountyShowdownProxy.result.prizeAmount);
              this.txt_winFree.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + "");
            } else {
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.prizeInfobarTotalwinMedMain);
              this.txt_win.string = Common.numFormat(slotWildBountyShowdownProxy.result.prizeAmount + "");
              this.notice_total_win_txt.string = Common.numFormat(slotWildBountyShowdownProxy.result.prizeAmount + "");
              this.txt_winFree.string = Common.numFormat(slotWildBountyShowdownProxy.freeTotalWin + "");
              this.scheduleOnce(function () {
                slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.prizeInfobarTotalwinMedEnd);
              }, 1);
            }
          }
          if (num / this._bet < 20) {
            this.notice.setAnimation(0, 'normal_win', false);
            this.notice.addAnimation(0, 'normal_idle', true);
          } else if (num / this._bet >= 20 && num / this._bet < 30) {
            this.notice.setAnimation(0, 'bigwin_win', false);
            this.notice.addAnimation(0, 'bigwin_idle', true);
          } else if (num / this._bet >= 30) {
            this.notice.setAnimation(0, 'bigwin2_win', false);
            this.notice.addAnimation(0, 'bigwin2_idle', true);
          }
        }

        //点击直接结束大奖动画
        ;

        _proto.clickHideBigWin = function clickHideBigWin() {
          var _this12 = this;
          this.big_win_txt.reset(this._win_totalMoney);
          this.scheduleOnce(function () {
            _this12.big_win_txt.reset();
            _this12.big_win_box.active = false;
            _this12.big_win.setAnimation(0, '', true);
            _this12.allEnd();
            console.log('clickHideBigWin');
            AudioManager.instance.stopSound(_this12._audioId);
            _this12._audioId = null;
          }, 0.5);
        }

        //事件监听
        ;

        _proto.initEvent = function initEvent() {
          var _this13 = this;
          //进入页面获取上次数据
          slotWildBountyShowdownProxy.on(slotWildBountyShowdownGameEvent.UPDATE_BETLIST, this.initPage, this);
          slotWildBountyShowdownProxy.on(slotWildBountyShowdownGameEvent.SELECT_BET, function (count) {
            _this13.updateSetData();
            Tween.stopAllByTarget(_this13.txt_bet.node);
            tween(_this13.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }, this);

          //第一轮结束
          slotWildBountyShowdownProxy.on(slotWildBountyShowdownGameEvent.END, function () {
            _this13.changeState(RunState.STOP);
          }, this);

          //中奖号码消失动画结束=》补充新一轮号码 & 中奖金额倍数动画
          slotWildBountyShowdownProxy.on(slotWildBountyShowdownGameEvent.SHOWNEXT, function () {
            _this13.changeState(RunState.SHOWNEXT);
          }, this);

          //转盘提示
          slotWildBountyShowdownProxy.on(slotWildBountyShowdownGameEvent.CLICK_ITEM, function (data) {
            if (_this13._isFree) return;
            if (_this13._auto) return;
            if (_this13._lock) return;
            _this13._window.node.scale = v3(1, 1, 1);
            _this13._window.node.active = true;
            _this13._window.showCard(data);
            _this13.windowMask.active = true;
            var pos = data.pos;
            pos = _this13.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
            if (pos.x > 190) {
              pos.x = 190;
            }
            if (pos.x < -190) {
              pos.x = -190;
            }
            _this13._window.node.setPosition(pos.x, pos.y);
          }, this);
          slotWildBountyShowdownProxy.on(slotWildBountyShowdownGameEvent.ERROR, function () {
            _this13._auto = false;
            _this13._isFree = false;
            _this13.changeState(RunState.NORMAL);
          }, this);

          //期待动画公告缩放动画
          slotWildBountyShowdownProxy.on(slotWildBountyShowdownGameEvent.NOTICESHOWANI, function () {
            if (!_this13.notice_bg_wait.active && _this13.notice_bg.active) {
              _this13.waitNotice('show', 'notice_bg');
            } else if (!_this13.notice_bg_wait.active && _this13.notice_one_win.active) {
              _this13.waitNotice('show', 'notice_one_win');
            }
          }, this);

          //期待动画公告缩放动画
          slotWildBountyShowdownProxy.on(slotWildBountyShowdownGameEvent.NOTICEHIDEANI, function () {
            if (_this13.notice_bg_wait.active) {
              _this13.waitNotice('hide', '');
            }
          }, this);

          //修改下注金额
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.on(ConfigManager.eventTransform.setQuick, this.clickChangeQuick, this);

          //EventManager.on(ConfigManager.eventTransform.scrollNumberEvent, this.bigWinEnd, this);
        }

        //下单接口调用
        ;

        _proto.sendBet = function sendBet(buyFree) {
          //更改_state状态开始转动
          if (buyFree) {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotWildBountyShowdown.buyFree, {
              betAmount: Math.floor(this._bet) + ''
            });
          } else {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotWildBountyShowdown.bet, {
              betAmount: Math.floor(this._bet) + ''
            });
          }
        }

        //自动下单回调
        ;

        _proto.setAuto = function setAuto(times) {
          var _this14 = this;
          this._autoTimes = times;
          this.turn_auto_leftCount.string = "" + this._autoTimes;
          if (times > 0) {
            this.changeBtnActive(false);
            this._auto = true;
            this.turn_start.getComponent(AddSpineEffect).animation = 'push2';
            this.turn_start.setAnimation(0, "auto", true);
            this.scheduleOnce(function () {
              _this14.turn_start.setAnimation(0, "auto", true);
            });
            this.turn_start.setAnimation(0, "auto", true);
          } else {
            this._auto = false;
            //this.changeBtnActive(false)
            this.turn_start.getComponent(AddSpineEffect).animation = 'push1';
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

        //头部倍数动画(根据_isFree区分模式)
        ;

        _proto.doubleMove = function doubleMove(odd, call) {
          var _this15 = this;
          if (odd === void 0) {
            odd = 1;
          }
          if (call === void 0) {
            call = null;
          }
          var doubleParent = this.top_double.getChildByName('mask');
          //base -275,25 -370,60 -525,105
          //other -405,60,-20 | -275,25,-20 | -145,-10,-20 | -30,0,0 | 145,-10,20 | 275,25,20 | 405,60,20
          // 8 16 32需区分普通模式还是免费模式
          if (odd == 1) {
            tween(doubleParent.getChildByName('base')).to(0.1, {
              position: v3(-275, 35)
            }).start();
            tween(doubleParent.getChildByName('1')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('1').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('1').getComponent(Label)).to(0.1, {
              fontSize: 70
            }).call(function () {
              _this15.doubleSpine(false);
            }).start();
            tween(doubleParent.getChildByName('2')).to(0.1, {
              position: v3(145, -10),
              eulerAngles: v3(0, 0, 15)
            }).start();
            tween(doubleParent.getChildByName('4')).to(0.1, {
              position: v3(275, 25),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('2').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('4').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('2').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('4').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('8').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('16').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('32').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('64').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('128').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('256').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('512').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('1024').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            doubleParent.getChildByName('8').setPosition(v3(405, 60));
            doubleParent.getChildByName('16').setPosition(v3(405, 60));
            doubleParent.getChildByName('32').setPosition(v3(405, 60));
            doubleParent.getChildByName('64').setPosition(v3(405, 60));
            doubleParent.getChildByName('128').setPosition(v3(405, 60));
            doubleParent.getChildByName('256').setPosition(v3(405, 60));
            doubleParent.getChildByName('512').setPosition(v3(405, 60));
            doubleParent.getChildByName('1024').setPosition(v3(405, 60));
          } else if (odd == 2) {
            tween(doubleParent.getChildByName('base')).to(0.1, {
              position: v3(-370, 70)
            }).start();
            tween(doubleParent.getChildByName('1')).to(0.1, {
              position: v3(-145, -10),
              eulerAngles: v3(0, 0, -15)
            }).start();
            tween(doubleParent.getChildByName('1').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('1').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('2')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('2').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('2').getComponent(Label)).to(0.1, {
              fontSize: 70
            }).call(function () {
              _this15.doubleSpine(true);
            }).start();
            tween(doubleParent.getChildByName('4')).to(0.1, {
              position: v3(145, -10),
              eulerAngles: v3(0, 0, 15)
            }).start();
            tween(doubleParent.getChildByName('4').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('8')).to(0.1, {
              position: v3(275, 25),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('8').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
          } else if (odd == 4) {
            tween(doubleParent.getChildByName('base')).to(0.1, {
              position: v3(-525, 105)
            }).start();
            tween(doubleParent.getChildByName('1')).to(0.1, {
              position: v3(-275, 25),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('2')).to(0.1, {
              position: v3(-145, -10),
              eulerAngles: v3(0, 0, -15)
            }).start();
            tween(doubleParent.getChildByName('2').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('2').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('4')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('4').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('4').getComponent(Label)).to(0.1, {
              fontSize: 70
            }).call(function () {
              _this15.doubleSpine(true);
            }).start();
            tween(doubleParent.getChildByName('8')).to(0.1, {
              position: v3(145, -10),
              eulerAngles: v3(0, 0, 15)
            }).start();
            tween(doubleParent.getChildByName('8').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('16')).to(0.1, {
              position: v3(275, 25),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('16').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
          } else if (odd == 8) {
            if (this._isFree) {
              tween(doubleParent.getChildByName('base')).to(0.1, {
                position: v3(-275, 35)
              }).start();
              tween(doubleParent.getChildByName('16').getComponent(Label)).to(0.1, {
                fontSize: 40
              }).start();
              tween(doubleParent.getChildByName('32').getComponent(Label)).to(0.1, {
                fontSize: 40
              }).start();
              tween(doubleParent.getChildByName('64').getComponent(Label)).to(0.1, {
                fontSize: 40
              }).start();
              tween(doubleParent.getChildByName('128').getComponent(Label)).to(0.1, {
                fontSize: 40
              }).start();
              tween(doubleParent.getChildByName('256').getComponent(Label)).to(0.1, {
                fontSize: 40
              }).start();
              tween(doubleParent.getChildByName('512').getComponent(Label)).to(0.1, {
                fontSize: 40
              }).start();
              tween(doubleParent.getChildByName('1024').getComponent(Label)).to(0.1, {
                fontSize: 40
              }).start();
            } else {
              tween(doubleParent.getChildByName('base')).to(0.1, {
                position: v3(-525, 105)
              }).start();
              tween(doubleParent.getChildByName('1')).to(0.1, {
                position: v3(-405, 60),
                eulerAngles: v3(0, 0, -20)
              }).start();
              tween(doubleParent.getChildByName('2')).to(0.1, {
                position: v3(-275, 25),
                eulerAngles: v3(0, 0, -20)
              }).start();
              tween(doubleParent.getChildByName('4')).to(0.1, {
                position: v3(-145, -10),
                eulerAngles: v3(0, 0, -15)
              }).start();
              tween(doubleParent.getChildByName('4').getComponent(UIOpacity)).to(0.1, {
                opacity: 150
              }).start();
              tween(doubleParent.getChildByName('4').getComponent(Label)).to(0.1, {
                fontSize: 40
              }).start();
            }
            tween(doubleParent.getChildByName('8')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('8').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('8').getComponent(Label)).to(0.1, {
              fontSize: 70
            }).call(function () {
              _this15.doubleSpine(true);
            }).start();
            tween(doubleParent.getChildByName('16')).to(0.1, {
              position: v3(145, -10),
              eulerAngles: v3(0, 0, 15)
            }).start();
            tween(doubleParent.getChildByName('16').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('32')).to(0.1, {
              position: v3(275, 25),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('32').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('64')).to(0.1, {
              position: v3(405, 60),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('128')).to(0.1, {
              position: v3(405, 60),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('256')).to(0.1, {
              position: v3(405, 60),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('512')).to(0.1, {
              position: v3(405, 60),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('1024')).to(0.1, {
              position: v3(405, 60),
              eulerAngles: v3(0, 0, 20)
            }).start();
          } else if (odd == 16) {
            if (this._isFree) {
              tween(doubleParent.getChildByName('base')).to(0.1, {
                position: v3(-370, 70)
              }).start();
            } else {
              tween(doubleParent.getChildByName('base')).to(0.1, {
                position: v3(-525, 105)
              }).start();
              tween(doubleParent.getChildByName('2')).to(0.1, {
                position: v3(-405, 60),
                eulerAngles: v3(0, 0, -20)
              }).start();
              tween(doubleParent.getChildByName('4')).to(0.1, {
                position: v3(-275, 25),
                eulerAngles: v3(0, 0, -20)
              }).start();
            }
            tween(doubleParent.getChildByName('8')).to(0.1, {
              position: v3(-145, -10),
              eulerAngles: v3(0, 0, -15)
            }).start();
            tween(doubleParent.getChildByName('8').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('8').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('16')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('16').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('16').getComponent(Label)).to(0.1, {
              fontSize: 70
            }).call(function () {
              _this15.doubleSpine(true);
            }).start();
            tween(doubleParent.getChildByName('32')).to(0.1, {
              position: v3(145, -10),
              eulerAngles: v3(0, 0, 15)
            }).start();
            tween(doubleParent.getChildByName('32').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('64')).to(0.1, {
              position: v3(275, 25),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('64').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
          } else if (odd == 32) {
            if (this._isFree) {
              tween(doubleParent.getChildByName('base')).to(0.1, {
                position: v3(-525, 105)
              }).start();
            } else {
              tween(doubleParent.getChildByName('base')).to(0.1, {
                position: v3(-525, 105)
              }).start();
              tween(doubleParent.getChildByName('4')).to(0.1, {
                position: v3(-405, 60),
                eulerAngles: v3(0, 0, -20)
              }).start();
            }
            tween(doubleParent.getChildByName('8')).to(0.1, {
              position: v3(-275, 25),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('16')).to(0.1, {
              position: v3(-145, -10),
              eulerAngles: v3(0, 0, -15)
            }).start();
            tween(doubleParent.getChildByName('16').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('16').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('32')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('32').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('32').getComponent(Label)).to(0.1, {
              fontSize: 70
            }).call(function () {
              _this15.doubleSpine(true);
            }).start();
            tween(doubleParent.getChildByName('64')).to(0.1, {
              position: v3(145, -10),
              eulerAngles: v3(0, 0, 15)
            }).start();
            tween(doubleParent.getChildByName('64').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('128')).to(0.1, {
              position: v3(275, 25),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('128').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
          } else if (odd == 64) {
            tween(doubleParent.getChildByName('8')).to(0.1, {
              position: v3(-405, 60),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('16')).to(0.1, {
              position: v3(-275, 25),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('32')).to(0.1, {
              position: v3(-145, -10),
              eulerAngles: v3(0, 0, -15)
            }).start();
            tween(doubleParent.getChildByName('32').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('32').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('64')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('64').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('64').getComponent(Label)).to(0.1, {
              fontSize: 70
            }).call(function () {
              _this15.doubleSpine(true);
            }).start();
            tween(doubleParent.getChildByName('128')).to(0.1, {
              position: v3(145, -10),
              eulerAngles: v3(0, 0, 15)
            }).start();
            tween(doubleParent.getChildByName('128').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('256')).to(0.1, {
              position: v3(275, 25),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('256').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
          } else if (odd == 128) {
            tween(doubleParent.getChildByName('16')).to(0.1, {
              position: v3(-405, 60),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('32')).to(0.1, {
              position: v3(-275, 25),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('64')).to(0.1, {
              position: v3(-145, -10),
              eulerAngles: v3(0, 0, -15)
            }).start();
            tween(doubleParent.getChildByName('64').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('64').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('128')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('128').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('128').getComponent(Label)).to(0.1, {
              fontSize: 60
            }).call(function () {
              _this15.doubleSpine(true);
            }).start();
            tween(doubleParent.getChildByName('256')).to(0.1, {
              position: v3(145, -10),
              eulerAngles: v3(0, 0, 15)
            }).start();
            tween(doubleParent.getChildByName('256').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('512')).to(0.1, {
              position: v3(275, 25),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('512').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
          } else if (odd == 256) {
            tween(doubleParent.getChildByName('32')).to(0.1, {
              position: v3(-405, 60),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('64')).to(0.1, {
              position: v3(-275, 25),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('128')).to(0.1, {
              position: v3(-145, -10),
              eulerAngles: v3(0, 0, -15)
            }).start();
            tween(doubleParent.getChildByName('128').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('128').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('256')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('256').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('256').getComponent(Label)).to(0.1, {
              fontSize: 60
            }).call(function () {
              _this15.doubleSpine(true);
            }).start();
            tween(doubleParent.getChildByName('512')).to(0.1, {
              position: v3(145, -10),
              eulerAngles: v3(0, 0, 15)
            }).start();
            tween(doubleParent.getChildByName('512').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('1024')).to(0.1, {
              position: v3(275, 25),
              eulerAngles: v3(0, 0, 20)
            }).start();
            tween(doubleParent.getChildByName('1024').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
          } else if (odd == 512) {
            tween(doubleParent.getChildByName('64')).to(0.1, {
              position: v3(-405, 60),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('128')).to(0.1, {
              position: v3(-275, 25),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('256')).to(0.1, {
              position: v3(-145, -10),
              eulerAngles: v3(0, 0, -15)
            }).start();
            tween(doubleParent.getChildByName('256').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('256').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('512')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('512').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('512').getComponent(Label)).to(0.1, {
              fontSize: 60
            }).call(function () {
              _this15.doubleSpine(true);
            }).start();
            tween(doubleParent.getChildByName('1024')).to(0.1, {
              position: v3(145, -10),
              eulerAngles: v3(0, 0, 15)
            }).start();
          } else if (odd == 1024) {
            tween(doubleParent.getChildByName('128')).to(0.1, {
              position: v3(-405, 60),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('256')).to(0.1, {
              position: v3(-275, 25),
              eulerAngles: v3(0, 0, -20)
            }).start();
            tween(doubleParent.getChildByName('512')).to(0.1, {
              position: v3(-145, -10),
              eulerAngles: v3(0, 0, -15)
            }).start();
            tween(doubleParent.getChildByName('512').getComponent(UIOpacity)).to(0.1, {
              opacity: 150
            }).start();
            tween(doubleParent.getChildByName('512').getComponent(Label)).to(0.1, {
              fontSize: 40
            }).start();
            tween(doubleParent.getChildByName('1024')).to(0.1, {
              position: v3(0, -30),
              eulerAngles: v3(0, 0, 0)
            }).start();
            tween(doubleParent.getChildByName('1024').getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
            tween(doubleParent.getChildByName('1024').getComponent(Label)).to(0.1, {
              fontSize: 60
            }).call(function () {
              _this15.doubleSpine(true);
            }).start();
          }
          if (this._currentOdd < odd) {
            this.scheduleOnce(function () {
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.multiUp1);
            });
          }
          if (call) {
            this.scheduleOnce(function () {
              call();
            }, 0.2);
          }
        }

        //倍数特效 & 移动到积分
        ;

        _proto.doubleToWin = function doubleToWin(call) {
          var _this16 = this;
          if (call === void 0) {
            call = null;
          }
          var newNode = instantiate(this.top_double.getChildByName('mask').getChildByName(this._currentOdd + ''));
          this.top_double.getChildByName('copy').addChild(newNode);
          this.top_double.getChildByName('copy').active = true;
          this.top_double_spine.node.active = true;
          this.top_double_spine.setAnimation(0, 'intro', false);
          this.top_double_spine.addAnimation(0, 'idle', true);
          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.multiFly);
          // cc.tween(this.top_double.getChildByName('copy')).to(0.2, { position: v3(0, -1250, 0) }).start()
          tween(this.top_double.getChildByName('copy')).to(0.2, {
            position: v3(0, -800, 0)
          }).delay(0.2).call(function () {
            tween(_this16.top_double.getChildByName('copy')).to(0.2, {
              position: v3(0, -1200, 0)
            }).start();
            _this16.notice.setAnimation(0, 'normal_win', false);
            _this16.notice.addAnimation(0, 'normal_idle', true);
          }).start();
          tween(newNode.getComponent(Label)).to(0.2, {
            fontSize: 200
          }).delay(0.2).call(function () {
            tween(newNode.getComponent(Label)).to(0.2, {
              fontSize: 60
            }).call(function () {
              tween(newNode.getComponent(Label)).to(0.2, {
                fontSize: 150
              }).start();
              tween(newNode.getComponent(UIOpacity)).to(0.2, {
                opacity: 80
              }).call(function () {
                var random = Math.floor(Math.random() * 3);
                slotWildBountyShowdownDef.palyAudio(random == 0 ? slotWildBountyShowdownDef.audio.prizeSmallwinMultipliedCrowd1 : random == 1 ? slotWildBountyShowdownDef.audio.prizeSmallwinMultipliedCrowd2 : slotWildBountyShowdownDef.audio.prizeSmallwinMultipliedCrowd3);
                //slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.uiCollect)
                _this16.top_double.getChildByName('copy').active = false;
                _this16.top_double.getChildByName('copy').setPosition(v3(0, -380, 0));
                _this16.top_double_spine.node.active = false;
                _this16.top_double.getChildByName('copy').removeChild(newNode);
                if (call) {
                  call();
                }
              }).start();
            }).start();
          }).start();
        }

        //倍数闪光特效
        ;

        _proto.doubleSpine = function doubleSpine(isShow) {
          if (isShow === void 0) {
            isShow = false;
          }
          if (isShow) {
            this.top_double.getChildByName('copy').active = true;
            this.top_double_spine.node.active = true;
            this.top_double_spine.setAnimation(0, 'intro', false);
            this.top_double_spine.addAnimation(0, 'idle', true);
          } else {
            this.top_double.getChildByName('copy').active = false;
            this.top_double_spine.node.active = false;
          }
        }
        //倍数模式转换成免费模式
        ;

        _proto.doubleChangeToFree = function doubleChangeToFree() {
          var _this17 = this;
          this.free_init_mask1.active = true;
          this.free_init_mask2.active = true;
          this.free_init_mask3.active = true;
          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fsIntroStart);
          tween(this.top_double).to(0.2, {
            position: v3(0, 400, 0)
          }).call(function () {
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fsIntroShift);
            _this17.doubleMove(2, function () {
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fsIntroShift);
              _this17.doubleMove(4, function () {
                slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fsIntroShift);
                _this17.doubleMove(8, function () {
                  _this17.top_double_delete1.node.active = true;
                  _this17.top_double_delete2.node.active = true;
                  _this17.top_double_delete1.setAnimation(0, 'idle', false);
                  _this17.top_double_delete2.setAnimation(0, 'idle', false);
                  _this17.top_double.getChildByName('mask').getChildByName('1').setPosition(v3(-405, 60));
                  _this17.top_double.getChildByName('mask').getChildByName('2').setPosition(v3(-405, 60));
                  _this17.top_double.getChildByName('mask').getChildByName('4').setPosition(v3(-405, 60));
                  _this17.top_double_delete1.setCompleteListener(function (trackEntry) {
                    _this17.top_double_delete1.setCompleteListener(null);
                    _this17.top_double_delete2.setCompleteListener(null);
                    _this17.top_double_delete1.node.active = false;
                    _this17.top_double_delete2.node.active = false;
                    tween(_this17.top_double.getChildByName('mask').getChildByName('base')).to(0.1, {
                      position: v3(-275, 35)
                    }).call(function () {
                      slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.fsIntroEnd);
                      //this.top_double 免费模式和普通模式高度不一样
                      tween(_this17.top_double).to(0.2, {
                        position: v3(0, 900, 0)
                      }).call(function () {
                        _this17._isFree = true;
                        _this17._lock = false;
                        if (_this17._runDelay == 0) {
                          _this17._hasChangeSpeed = true;
                          _this17._runDelay = 0.1;
                        }
                        _this17.free_init_mask1.active = false;
                        _this17.free_init_mask2.active = false;
                        _this17.free_init_mask3.active = false;
                        _this17.changeState(RunState.NORMAL);
                      }).start();
                    }).start();
                  });
                });
              });
            });
          }).start();
        }
        //计算结果
        ;

        _proto.calResult = function calResult() {
          var _this18 = this;
          this._cal_current_result = {
            result: [[], [], [], [], [], []],
            scatterNum: 0,
            showLineIndex: 0
          };
          this._current_result['OpenNums'][this._current_index]['openNum'].map(function (item, index) {
            if (item.num == 9) {
              _this18._cal_current_result.scatterNum++;
            }
            if (index < 3) {
              _this18._cal_current_result.result[0].push(item);
              if (_this18._cal_current_result.scatterNum >= 2) {
                _this18._cal_current_result.showLineIndex = 1;
              }
            } else if (index < 7) {
              _this18._cal_current_result.result[1].push(item);
              if (_this18._cal_current_result.scatterNum >= 2 && _this18._cal_current_result.showLineIndex == 0) {
                _this18._cal_current_result.showLineIndex = 2;
              }
            } else if (index < 12) {
              _this18._cal_current_result.result[2].push(item);
              if (_this18._cal_current_result.scatterNum >= 2 && _this18._cal_current_result.showLineIndex == 0) {
                _this18._cal_current_result.showLineIndex = 3;
              }
            } else if (index < 17) {
              _this18._cal_current_result.result[3].push(item);
              if (_this18._cal_current_result.scatterNum >= 2 && _this18._cal_current_result.showLineIndex == 0) {
                _this18._cal_current_result.showLineIndex = 4;
              }
            } else if (index < 21) {
              _this18._cal_current_result.result[4].push(item);
              if (_this18._cal_current_result.scatterNum >= 2 && _this18._cal_current_result.showLineIndex == 0) {
                _this18._cal_current_result.showLineIndex = 5;
              }
            } else {
              _this18._cal_current_result.result[5].push(item);
            }
          });
        }

        //初始化界面
        ;

        _proto.initPage = function initPage(data) {
          var _this19 = this;
          if (data['OpenNums'] && data['OpenNums'].length > 0) {
            slotWildBountyShowdownProxy.result = data;
            var openNum = data['OpenNums'][data['OpenNums'].length - 1]['openNum'];
            this.turn_parent.initRunCard(openNum);
            if (data.freeInfo && data.freeInfo.surplusFreeCount > 0) {
              //刚开始进入免费模式加载页
              this.initFreeLoadPage(data.freeInfo.surplusFreeCount, data.freeInfo.totalFreePrizeAmount);
            } else {
              //页面初始化
              this.pageNode.scale = new Vec3(0.8, 0.8, 1);
              this.initZidan.node.active = true;
              slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.bgm_intro);
              tween(this.pageNode).to(1, {
                scale: new Vec3(1, 1, 1)
              }).call(function () {
                tween(_this19.top_double).to(0.4, {
                  position: v3(0, 900, 0)
                }).start();
                _this19.scheduleOnce(function () {
                  _this19.buyFreeBtnChange('show');
                }, 0.2);
                _this19.initZidan.node.active = false;
              }).start();
              slotWildBountyShowdownDef.palyMusic(slotWildBountyShowdownDef.audio.bgm_mg);
            }
          } else {
            //页面初始化
            this.turn_parent.initRunCard();
            this.pageNode.scale = new Vec3(0.8, 0.8, 1);
            this.initZidan.node.active = true;
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.bgm_intro);
            tween(this.pageNode).to(1, {
              scale: new Vec3(1, 1, 1)
            }).delay(0.3).call(function () {
              tween(_this19.top_double).to(0.4, {
                position: v3(0, 900, 0)
              }).start();
              _this19.scheduleOnce(function () {
                _this19.buyFreeBtnChange('show');
              }, 0.2);
              _this19.initZidan.node.active = false;
            }).start();
            slotWildBountyShowdownDef.palyMusic(slotWildBountyShowdownDef.audio.bgm_mg);
          }
        }

        //隐藏介绍图
        ;

        _proto.hideWindow = function hideWindow() {
          this.windowMask.active = false;
          this._window.hideCard();
        }

        //普通模式开启游戏按钮动画
        ;

        _proto.startGameAni = function startGameAni(isMove) {
          var _this20 = this;
          if (this._auto) return;
          if (this._isFree) return;
          if (isMove) {
            this.turn_start.setAnimation(0, 'star', false);
            this.turn_start.setCompleteListener(function () {
              _this20.turn_start.setCompleteListener(null);
              if (slotWildBountyShowdownProxy.result.prizeAmount > 0) {
                _this20.turn_start.addAnimation(0, "stop", true);
              } else {
                if (_this20._lock) {
                  _this20.turn_start.timeScale = 200;
                } else {
                  _this20.turn_start.timeScale = 1;
                }
                _this20.turn_start.addAnimation(0, "idle", true);
              }
            });
          } else {
            this.turn_start.timeScale = 1;
            this.turn_start.setAnimation(0, 'idle', true);
          }
        }

        //展示免费购买弹出框
        ;

        _proto.clickShowBuyFree = function clickShowBuyFree() {
          //防止进入免费模式瞬间点击
          if (!slotWildBountyShowdownProxy.result || slotWildBountyShowdownProxy.result.freeInfo.surplusFreeCount <= 0) {
            slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.uiStart);
            this.buyFreeDialog.getChildByName('bg').getChildByName('number').getComponent(Label).string = Common.numFormat(75 * this._bet + '');
            this.buyFreeDialog.getComponent(UIOpacity).opacity = 0;
            this.buyFreeDialog.active = true;
            tween(this.buyFreeDialog.getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).start();
          }
        }
        //隐藏免费购买框
        ;

        _proto.clickHideBuyFree = function clickHideBuyFree() {
          this.buyFreeDialog.active = false;
        }
        //购买免费
        ;

        _proto.clickBuyFree = function clickBuyFree() {
          this.buyFreeDialog.active = false;
          this.preStart(true);
        }
        //免费按钮显示隐藏
        ;

        _proto.buyFreeBtnChange = function buyFreeBtnChange(type) {
          if (type == 'show') {
            tween(this.buyFreeBtn).to(0.1, {
              position: v3(260, 440, 0)
            }).start();
          } else {
            tween(this.buyFreeBtn).to(0.1, {
              position: v3(550, 440, 0)
            }).start();
          }
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
        //底部按钮和金额样式修改
        ;

        _proto.changeBtnActive = function changeBtnActive(b) {
          if (this._auto) {
            return;
          }
          if (b) {
            if (slotWildBountyShowdownProxy.getBet() == 2000) {
              this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 60;
              this._isMinBet = true;
            } else {
              this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
              this._isMinBet = false;
            }
            this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 255;
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

        //展示下注金额
        ;

        _proto.clickShowBet = function clickShowBet() {
          if (this._lock) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetBase", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneSetBase).setData({
              _curBetListIndex: slotWildBountyShowdownProxy._curBetListIndex,
              _curBetCount: slotWildBountyShowdownProxy._curBetCount,
              betMaxCount: slotWildBountyShowdownProxy.betMaxCount,
              betList: slotWildBountyShowdownProxy.betList,
              betRate: slotWildBountyShowdownProxy.betRate
            });
          }, true);
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
          this._bet = slotWildBountyShowdownProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet);
          this.txt_betFree.string = Common.numFormat(this._bet);
        }
        //更新下注金额
        ;

        _proto.setBet = function setBet(betListIndex, betCount) {
          slotWildBountyShowdownProxy.setBet(betListIndex, betCount);
          this.checkDownOrUpBet();
        }
        //按钮减少下注金额
        ;

        _proto.clickDownBet = function clickDownBet() {
          if (this._isMinBet) return;
          if (this._auto) return;
          if (this._lock) return;
          // if (!this.checkReady()) return;
          slotWildBountyShowdownProxy._curBetCount--;
          if (slotWildBountyShowdownProxy._curBetCount < 0) {
            slotWildBountyShowdownProxy._curBetListIndex--;
            if (slotWildBountyShowdownProxy._curBetListIndex < 0) {
              slotWildBountyShowdownProxy._curBetListIndex++;
              slotWildBountyShowdownProxy._curBetCount++;
            } else {
              slotWildBountyShowdownProxy._curBetCount = slotWildBountyShowdownProxy.betMaxCount - 1;
              slotWildBountyShowdownProxy.setBet(slotWildBountyShowdownProxy._curBetListIndex, slotWildBountyShowdownProxy._curBetCount);
            }
          } else {
            slotWildBountyShowdownProxy.setBet(slotWildBountyShowdownProxy._curBetListIndex, slotWildBountyShowdownProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //按钮增加下注金额
        ;

        _proto.clickUpBet = function clickUpBet() {
          if (this._auto) return;
          if (this._lock) return;
          slotWildBountyShowdownProxy._curBetCount++;
          if (slotWildBountyShowdownProxy._curBetCount >= slotWildBountyShowdownProxy.betMaxCount) {
            slotWildBountyShowdownProxy._curBetListIndex++;
            if (slotWildBountyShowdownProxy._curBetListIndex >= slotWildBountyShowdownProxy.betList.length) {
              slotWildBountyShowdownProxy._curBetListIndex--;
              slotWildBountyShowdownProxy._curBetCount--;
            } else {
              slotWildBountyShowdownProxy._curBetCount = 0;
              slotWildBountyShowdownProxy.setBet(slotWildBountyShowdownProxy._curBetListIndex, slotWildBountyShowdownProxy._curBetCount);
            }
          } else {
            slotWildBountyShowdownProxy.setBet(slotWildBountyShowdownProxy._curBetListIndex, slotWildBountyShowdownProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //确定下注金额是否可以减少/增加
        ;

        _proto.checkDownOrUpBet = function checkDownOrUpBet() {
          if (slotWildBountyShowdownProxy.getBet() == 2000) {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 60;
            this._isMinBet = true;
          } else {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
            this._isMinBet = false;
          }
          if (slotWildBountyShowdownProxy.getBet() == 1000000) {
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
              bet: _this21._bet,
              win: 0
            });
          }, true);
        };
        _proto.onClickChangeBottomBtn = function onClickChangeBottomBtn() {
          if (this.normalBtn.active) {
            this.moreBtn.active = true;
            this.normalBtn.active = false;
            this.buyFreeBtnChange('hide');
          } else {
            this.moreBtn.active = false;
            this.normalBtn.active = true;
            this.buyFreeBtnChange('show');
          }
        }
        //底部返回首页
        ;

        _proto.clickBottomBackHome = function clickBottomBackHome() {
          Common.returnToHall(this, slotWildBountyShowdownProxy.BUNDLE);
        }
        //展示规则
        ;

        _proto.clickShowRule = function clickShowRule() {
          Common.loadPopBuddle("prefab/slotWildBountyShowdownHelp", slotWildBountyShowdownProxy.bundle, function () {}, function (prefab) {
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
          if (this._lock) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneHistory", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneHistory).setGameType("slotWildBountyShowdown");
          }, true);
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
            node.getComponent(FortuneRank).send("slotWildBountyShowdown");
          }, true);
        }
        //等待公告
        ;

        _proto.waitNotice = function waitNotice(type, hideTarget) {
          var _this22 = this;
          if (type == 'show') {
            this._waitNoticeHideTarget = hideTarget;
            this._waitNoticeHideTarget == 'notice_bg' ? this.notice_bg.active = false : this.notice_one_win.active = false;
            this.notice_bg_wait.active = true;
            this.notice_title_wait.active = true;
            this.notice_title_wait.getComponent(Sprite).spriteFrame = this.notice_frames_wait[this._waitNoticeIndex];
            this._waitNoticeFn = this.schedule(function () {
              _this22._waitNoticeShowTime += 1;
              if (_this22._waitNoticeShowTime == 5) {
                _this22._waitNoticeIndex == 0 ? _this22._waitNoticeIndex = 1 : _this22._waitNoticeIndex = 0;
                _this22.notice_title_wait.getComponent(Sprite).spriteFrame = _this22.notice_frames_wait[_this22._waitNoticeIndex];
                _this22._waitNoticeShowTime = 0;
              }
              _this22.waitNoticeAni();
            }, 0.7);
          } else {
            this.notice_bg_wait.active = false;
            this.notice_title_wait.active = false;
            this._waitNoticeIndex = 0;
            this._waitNoticeShowTime = 0;
            this.unschedule(this._waitNoticeFn);
            this._waitNoticeHideTarget == 'notice_bg' ? this.notice_bg.active = true : this.notice_one_win.active = true;
          }
        };
        _proto.waitNoticeAni = function waitNoticeAni() {
          tween(this.notice_title_wait).to(0.05, {
            scale: v3(1.1, 1.1, 1)
          }).delay(0.3).to(0.05, {
            scale: v3(1, 1, 1)
          }).delay(0.3).start();
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

        return slotWildBountyShowdownView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab_windowItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pageNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "initZidan", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "windowMask", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "normalBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "moreBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "modeBgList", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "notice", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "notice_bg", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "notice_bg_wait", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames_wait", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "notice_title_wait", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "notice_init_win", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "notice_one_win", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "notice_total_win", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "notice_total_win_txt", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "big_win_box", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "big_win", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "big_win_txt", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "txt_betFree", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "txt_winFree", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "txt_goldFree", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "game_type", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "buyFreeBtn", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "buyFreeBtnHover", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "buyFreeDialog", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "buyFreeBtnCancel", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "buyFreeBtnSure", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "top_double", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "top_double_spine", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "top_double_delete1", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "top_double_delete2", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "turn_parent", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "turn_start", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "turn_auto_leftCount", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "win_card_box", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "free_content", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "free_start_box", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "free_start_spine", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "free_start_time", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "free_start_btn", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "free_win_box", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "free_win_spine", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "free_winTxt", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "free_win_btn", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "free_box", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "free_init_mask1", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "free_init_mask2", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "free_init_mask3", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "free_box_light", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "free_box_time", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "free_box_addTime", [_dec59], {
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

System.register("chunks:///_virtual/slotWildBountyShowdownWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotWildBountyShowdownDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, sp, Label, Sprite, Component, slotWildBountyShowdownDef;
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
      Label = module.Label;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      slotWildBountyShowdownDef = module.slotWildBountyShowdownDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "9d6697ZrHJBkYJDcQZLPiys", "slotWildBountyShowdownWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var betList = [[50, 30, 20, 10], [30, 20, 15, 8], [20, 15, 10, 5], [20, 15, 10, 5], [10, 6, 4, 2], [10, 6, 4, 2], [5, 3, 2, 1], [5, 3, 2, 1]];
      var scatterContent = '3 biểu tượng Scatter sẽ 3kích hoạt vòng quay miễn phí';
      var wildContent = 'Biểu tượng Wild thay thế cho tất cả các biểu tượng trừ các biểu tượng Scatter';
      /*
      Robber int = 1 //强盗
      Pistol int = 2 //手枪
      Hat int = 3 //帽子
      Liquor int = 4 //酒
      A int = 5
      K int = 6
      Q int = 7
      J int = 8
      Scatter int = 9 //免费
      Wild int = 10 //万能
      */
      var slotWildBountyShowdownWindow = exports('slotWildBountyShowdownWindow', (_dec = ccclass('slotWildBountyShowdownWindow'), _dec2 = menu("game/slotWildBountyShowdown/slotWildBountyShowdownWindow"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec6 = property(sp.SkeletonData), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWildBountyShowdownWindow, _Component);
        function slotWildBountyShowdownWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "left", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spineList", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spineLeft", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spineRight", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = slotWildBountyShowdownWindow.prototype;
        _proto.start = function start() {};
        _proto.showCard = function showCard(data) {
          if (data._parentIndex <= 2) {
            this.left.active = true;
            this.right.active = false;
            this.cardDetail(data._cardData, 'left');
          } else {
            this.left.active = false;
            this.right.active = true;
            this.cardDetail(data._cardData, 'right');
          }
          slotWildBountyShowdownDef.palyAudio(slotWildBountyShowdownDef.audio.uiInfo);
        };
        _proto.cardDetail = function cardDetail(data, type) {
          var target = null;
          if (type == 'left') {
            target = this.left;
          } else {
            target = this.right;
          }
          if (data.num == 9) {
            target.getChildByName('icon').active = false;
            target.getChildByName('bet').active = false;
            target.getChildByName('content').getComponent(Label).string = scatterContent;
            target.getChildByName('content').active = true;
            if (type == 'left') {
              this.spineLeft.node.active = true;
              this.spineLeft.skeletonData = this.spineList[0];
              if (this.spineLeft.skeletonData) {
                this.spineLeft.setAnimation(0, 'idle', true);
              }
            } else {
              this.spineRight.node.active = true;
              this.spineRight.skeletonData = this.spineList[0];
              if (this.spineRight.skeletonData) {
                this.spineRight.setAnimation(0, 'idle', true);
              }
            }
          } else if (data.num == 10) {
            target.getChildByName('icon').active = false;
            target.getChildByName('bet').active = false;
            target.getChildByName('content').getComponent(Label).string = wildContent;
            target.getChildByName('content').active = true;
            if (type == 'left') {
              this.spineLeft.node.active = true;
              this.spineLeft.skeletonData = this.spineList[1];
              if (this.spineLeft.skeletonData) {
                this.spineLeft.setAnimation(0, 'idle', true);
              }
            } else {
              this.spineRight.node.active = true;
              this.spineRight.skeletonData = this.spineList[1];
              if (this.spineRight.skeletonData) {
                this.spineRight.setAnimation(0, 'idle', true);
              }
            }
          } else {
            this.spineLeft.node.active = false;
            this.spineRight.node.active = false;
            target.getChildByName('content').active = false;
            target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.iconList[data.num - 1];
            target.getChildByName('bet').getChildByName('bet1').getComponent(Label).string = betList[data.num - 1][0] + '';
            target.getChildByName('bet').getChildByName('bet2').getComponent(Label).string = betList[data.num - 1][1] + '';
            target.getChildByName('bet').getChildByName('bet3').getComponent(Label).string = betList[data.num - 1][2] + '';
            target.getChildByName('bet').getChildByName('bet4').getComponent(Label).string = betList[data.num - 1][3] + '';
            target.getChildByName('icon').active = true;
            target.getChildByName('bet').active = true;
          }
        };
        _proto.hideCard = function hideCard() {
          this.node.active = false;
        };
        return slotWildBountyShowdownWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spineList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spineLeft", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spineRight", [_dec8], {
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
  r('virtual:///prerequisite-imports/slotWildBountyShowdownGame', 'chunks:///_virtual/slotWildBountyShowdownGame'); 
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