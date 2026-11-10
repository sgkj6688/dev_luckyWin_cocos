System.register("chunks:///_virtual/slotWildBanditoDef.ts", ['cc', './slotWildBanditoProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, AudioClip, slotWildBanditoProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      slotWildBanditoProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "00f9c8eW5dM3aSKscudniej", "slotWildBanditoDef", undefined);
      var slotWildBanditoDef = exports('slotWildBanditoDef', /*#__PURE__*/function () {
        function slotWildBanditoDef() {}
        slotWildBanditoDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = slotWildBanditoProxy.bundle;
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
        slotWildBanditoDef.palyMusic = function palyMusic(name) {
          var bundle = slotWildBanditoProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return slotWildBanditoDef;
      }());
      slotWildBanditoDef.audio = {
        prizeSmallwin: 'prizeSmallwin',
        //消除播放 done
        menSound01: 'menSound01',
        //消除同时播放 done
        menSound02: 'menSound02',
        //消除同时播放 done
        menSound03: 'menSound03',
        //消除同时播放 done
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
        symWild: 'symWild',
        //界面Wild播放动画声音 done
        symScatter: 'symScatter',
        //界面Scatter播放动画声音 done
        multiUp01: 'multiUp01',
        //倍数变化的声音 done
        multiUp02: 'multiUp02',
        //倍数变化的声音 done
        multiUp03: 'multiUp03',
        //倍数变化的声音 done
        multiUp04: 'multiUp04',
        //倍数变化的声音 done
        multiUp05: 'multiUp05',
        //倍数变化的声音 done
        prizeInfobarTotalwinMedMain: 'prizeInfobarTotalwinMedMain',
        //总奖声5倍以上声 done
        prizeInfobarTotalwinMedEnd: 'prizeInfobarTotalwinMedEnd',
        //总奖声5倍以上结束声 done
        fastspinStart: 'fastspinStart',
        //旋转光效 done
        fsTrans: 'fsTrans',
        //免费加载页 done
        uiStart: 'uiStart',
        //免费加载页按钮 done
        fsReset: 'fsReset',
        //免费中间光效时候 done
        bgm_bigwin_main: 'bgm_bigwin_main',
        //中大奖动画 done
        bgm_bigwin_end: 'bgm_bigwin_end',
        //中大奖结束动画 done
        bgm_totalwin_main: 'bgm_totalwin_main',
        //特殊模式总奖播放
        bgm_totalwin_end: 'bgm_totalwin_end',
        //特殊模式总奖结束播放
        tune: 'tune',
        //转动声 done
        spinBtn: 'spinBtn',
        //点击投注声 done
        uiInfo: 'uiInfo' //
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotWildBanditoGame", ['./slotWildBanditoDef.ts', './slotWildBanditoItem.ts', './slotWildBanditoProxy.ts', './slotWildBanditoRun.ts', './slotWildBanditoScene.ts', './slotWildBanditoView.ts', './slotWildBanditoWindow.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/slotWildBanditoItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotWildBanditoProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, sp, Sprite, UITransform, v3, UIOpacity, Component, slotWildBanditoProxy, slotWildBanditoGameEvent;
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
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      slotWildBanditoProxy = module.default;
      slotWildBanditoGameEvent = module.slotWildBanditoGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "f0562Gpr/xJJ7xux6ztXfY/", "slotWildBanditoItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      //import { slotWildBountyShowdownDef } from "./slotWildBountyShowdownDef";

      var slotWildBanditoItem = exports('slotWildBanditoItem', (_dec = ccclass('slotWildBanditoItem'), _dec2 = menu("game/slotWildBanditoItemGame/slotWildBanditoItem"), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(sp.SkeletonData), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(Sprite), _dec9 = property(sp.Skeleton), _dec10 = property(Sprite), _dec11 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWildBanditoItem, _Component);
        function slotWildBanditoItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "iconList", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBlurList", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpineList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wild", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpine", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iframe", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bong", _descriptor9, _assertThisInitialized(_this));
          /*
          Blank   int = 0 //空白,被消除占位
          Robber  int = 1 //强盗
          Guitar  int = 2 //吉他
          Tea     int = 3 //柠檬茶
          Hammer  int = 4 //沙锤
          A       int = 5
          K       int = 6
          Q       int = 7
          J       int = 8
          Ten     int = 9
          Scatter int = 10 //特殊符号 免费
          Wild    int = 11 //万能
          
          */
          _this._cardData = null;
          _this._parentIndex = 0;
          _this.isCanClick = true;
          return _this;
        }
        var _proto = slotWildBanditoItem.prototype;
        //最顶部的icon不允许点击
        _proto.start = function start() {};
        _proto.initCard = function initCard(data, parentIndex, isClear, _isCanClick) {
          if (isClear === void 0) {
            isClear = false;
          }
          if (_isCanClick === void 0) {
            _isCanClick = true;
          }
          if (data) {
            this._cardData = data;
            this._parentIndex = parentIndex;
            this.isCanClick = _isCanClick;
            if (data.num == 10) {
              if (isClear) {
                this.scatter.node.active = true;
                this.icon.node.active = false;
                this.iframe.node.active = false;
                this.wild.node.active = false;
                this.scatter.setAnimation(0, 'idle', true);
                this.node.getComponent(UITransform).priority = 24;
              } else {
                this.icon.node.scale = v3(1.3, 1.3);
                this.icon.getComponent(Sprite).spriteFrame = this.iconBlurList[data.num - 1];
                this.icon.node.active = true;
              }
            } else if (data.num == 10) {
              if (isClear) {
                this.scatter.node.active = false;
                this.icon.node.active = false;
                this.iframe.node.active = false;
                this.wild.node.active = true;
                this.wild.setAnimation(0, 'idle', true);
                this.node.getComponent(UITransform).priority = 24;
              } else {
                this.icon.node.scale = v3(1.3, 1.3);
                this.icon.getComponent(Sprite).spriteFrame = this.iconBlurList[data.num - 1];
                this.icon.node.active = true;
              }
            } else {
              this.scatter.node.active = false;
              this.wild.node.active = false;
              this.node.getComponent(UITransform).priority = 1;
              this.iframe.node.active = true;
              if (data.type == 1) {
                this.iframe.node.active = true;
              } else {
                this.iframe.node.active = false;
              }
              if (isClear) {
                this.icon.node.scale = v3(0.65, 0.65);
                this.icon.getComponent(Sprite).spriteFrame = this.iconList[data.num - 1];
              } else {
                this.icon.node.scale = v3(1.3, 1.3);
                this.icon.getComponent(Sprite).spriteFrame = this.iconBlurList[data.num - 1];
              }
              this.icon.node.active = true;
            }
          }
        };
        _proto.showWin = function showWin(type) {
          var _this2 = this;
          //type == 0 消除 type == 1 变成wild
          this.node.getComponent(UITransform).priority = 101;
          this.bong.node.active = true;
          this.bong.setAnimation(0, 'idle', false);
          this.bong.setCompleteListener(function () {
            _this2.bong.setCompleteListener(null);
            _this2.bong.node.active = false;
          });
          //Scatter不会出现在这里
          if (this._cardData['num'] == 11) {
            this.wild.node.active = true;
            this.wild.setAnimation(0, 'win', true);
          } else {
            this.icon.node.active = false;
            this.iconSpine.skeletonData = this.iconSpineList[this._cardData['num'] - 1];
            this.iconSpine.node.active = true;
            this.iconSpine.setAnimation(0, 'win', true);
          }
          if (type == 0) {
            this.scheduleOnce(function () {
              if (_this2._cardData['num'] == 11) {
                _this2.wild.getComponent(UIOpacity).opacity = 100;
                _this2.scheduleOnce(function () {
                  _this2.wild.getComponent(UIOpacity).opacity = 0;
                }, 0.1);
              } else {
                _this2.iconSpine.getComponent(UIOpacity).opacity = 100;
                _this2.scheduleOnce(function () {
                  _this2.iconSpine.getComponent(UIOpacity).opacity = 0;
                }, 0.1);
              }
            }, 0.5);
          } else {
            this.scheduleOnce(function () {
              _this2.iconSpine.node.active = false;
              _this2.iframe.node.active = false;
              _this2.wild.node.active = true;
              _this2.wild.setAnimation(0, 'win', true);
            }, 0.8);
          }
        }

        //针对scatter的动画
        ;

        _proto.scatteItemWin = function scatteItemWin() {
          this.node.getComponent(UITransform).priority = 52;
          this.scatter.setAnimation(0, 'win', true);
        }
        //针对scatter的收缩
        ;

        _proto.scatteItemWinToSpawn = function scatteItemWinToSpawn() {
          this.scatter.setAnimation(0, 'spawn', true);
        }
        //针对scatter的恢复普通动画
        ;

        _proto.scatteItemWinToIdle = function scatteItemWinToIdle() {
          this.scatter.setAnimation(0, 'idle', true);
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
          if (this.isCanClick) {
            slotWildBanditoProxy.emit(slotWildBanditoGameEvent.CLICK_ITEM, {
              _cardData: this._cardData,
              _parentIndex: this._parentIndex,
              pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
            });
          }
        };
        return slotWildBanditoItem;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wild", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec8], {
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "iframe", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bong", [_dec11], {
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

System.register("chunks:///_virtual/slotWildBanditoProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "61684RM5BZINLtOxrrncWcz", "slotWildBanditoProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotWildBanditoGameEvent = exports('slotWildBanditoGameEvent', /*#__PURE__*/function (slotWildBanditoGameEvent) {
        slotWildBanditoGameEvent["ENTER_ROOM"] = "enterRoom";
        slotWildBanditoGameEvent["LEAVE_ROOM"] = "leaveRoom";
        slotWildBanditoGameEvent["UPDATE_CONFIG"] = "updateConfig";
        slotWildBanditoGameEvent["UPDATE_BETLIST"] = "updateBetList";
        slotWildBanditoGameEvent["CLOSE_BONUS"] = "closeBonus";
        slotWildBanditoGameEvent["SELECT_BET"] = "selectBet";
        slotWildBanditoGameEvent["START"] = "start";
        slotWildBanditoGameEvent["CLICK_ITEM"] = "clickItem";
        slotWildBanditoGameEvent["ERROR"] = "errorReturn";
        slotWildBanditoGameEvent["END"] = "END";
        slotWildBanditoGameEvent["SHOWNEXT"] = "showNext";
        slotWildBanditoGameEvent["SHOWNEXTEND"] = "showNextEnd";
        slotWildBanditoGameEvent["CHANGETOPODD"] = "changeTopOdd";
        slotWildBanditoGameEvent["NOTICESHOWANI"] = "noticeShowAni";
        slotWildBanditoGameEvent["NOTICEHIDEANI"] = "noticeHideAni";
        return slotWildBanditoGameEvent;
      }({}));
      var slotWildBanditoProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(slotWildBanditoProxyMgr, _ProxyBase);
        function slotWildBanditoProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "slotWildBanditoGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolSlotWildBandito.bet, MainManager.instance.getConfigManager().ProtocolSlotWildBandito.info];
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
        var _proto = slotWildBanditoProxyMgr.prototype;
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(slotWildBanditoGameEvent.SELECT_BET);
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
            if (data.cmd == ConfigManager.ProtocolSlotWildBandito.bet) {
              this.emit(slotWildBanditoGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotWildBandito.info:
              {
                this.emit(slotWildBanditoGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotWildBandito.bet:
              {
                this.result = data.Data;
                this.result.prizeAmount = 0;
                for (var i = 0; i < this.result.OpenNums.length; i++) {
                  this.result.prizeAmount += this.result.OpenNums[i].prizeAmount;
                }
                //console.log(this.result)
                // console.log(JSON.stringify(this.result))

                this.emit(slotWildBanditoGameEvent.START);
                break;
              }
          }
        };
        _createClass(slotWildBanditoProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return slotWildBanditoProxyMgr;
      }(ProxyBase);
      var slotWildBanditoProxy = exports('default', new slotWildBanditoProxyMgr("slotWildBanditoProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotWildBanditoRun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotWildBanditoItem.ts', './slotWildBanditoProxy.ts', './slotWildBanditoDef.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, sp, instantiate, v3, tween, UITransform, Component, UIOpacity, slotWildBanditoItem, slotWildBanditoProxy, slotWildBanditoGameEvent, slotWildBanditoDef, AudioManager;
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
      Component = module.Component;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      slotWildBanditoItem = module.slotWildBanditoItem;
    }, function (module) {
      slotWildBanditoProxy = module.default;
      slotWildBanditoGameEvent = module.slotWildBanditoGameEvent;
    }, function (module) {
      slotWildBanditoDef = module.slotWildBanditoDef;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "8803ft8+AJM6ogqHJRutu6m", "slotWildBanditoRun", undefined);
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
      var slotWildBanditoRun = exports('slotWildBanditoRun', (_dec = ccclass("slotWildBanditoRun"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWildBanditoRun, _Component);
        function slotWildBanditoRun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run_mask", _descriptor2, _assertThisInitialized(_this));
          //转盘遮照层demo
          _initializerDefineProperty(_this, "light1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light3", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light4", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light5", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineMask", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBg", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turnSpeBox", _descriptor10, _assertThisInitialized(_this));
          _this._positionX = [-300, -150, 0, 150, 300];
          //width:145
          _this._positionY = [305, 170, 45, -80, -205];
          //height:125
          _this.lineMaskPostion = [-300, -150, 0, 150, 300];
          _this._runType = "normal";
          _this._itemHeight = 125;
          _this._moveSteps = 100;
          _this._moveNormalSteps = [100, 100, 100, 100, 100];
          _this._dataList = [[], [], [], [], []];
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
          _this._resultTime = [0.2, 0.4, 0.6, 0.8, 1];
          _this._run_mask = null;
          _this._topData = [];
          _this._getResultNum = 0;
          _this._isShowThirdLight = false;
          return _this;
        }
        var _proto = slotWildBanditoRun.prototype;
        _proto.start = function start() {
          this.node.removeAllChildren();
        };
        _proto.initPage = function initPage(data) {
          var _this2 = this;
          if (data && data.length == 5) {
            data.map(function (item, index) {
              if (item.length == 4) {
                item.unshift({
                  num: Math.floor(Math.random() * 9) + 1,
                  type: 0
                });
              }
              item.map(function (item1, index1) {
                var node = instantiate(_this2.pre_card);
                var com = node.getComponent(slotWildBanditoItem);
                node.parent = _this2.node;
                com["cardData"] = item;
                com.initCard(item1, index, true, index1 == 0 ? false : true);
                _this2._dataList[index].push(com);
                node.setPosition(v3(_this2._positionX[index], _this2._positionY[index1]));
              });
            });
          }
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.run = function run(type, isShowThirdLight) {
          var _this3 = this;
          this._runType = type;
          this._isShowThirdLight = isShowThirdLight;
          this._dataList.map(function (item, index) {
            // item.map((item1 => {
            //     if (item1['cardData'] && item1['cardData'].num == 1) {
            //         item1.node.getComponent(slotWildBanditoItem).scatterOrWildAniStop(1)
            //     } else if (item1['cardData'] && item1['cardData'].num == 2) {
            //         item1.node.getComponent(slotWildBanditoItem).scatterOrWildAniStop(2)
            //     }
            // }))
          });
          this.scheduleOnce(function () {
            _this3._runType == "fast" ? _this3.setState(CardState.RUNFAST) : _this3.setState(CardState.RUNNORMAL);
            if (_this3._isShowThirdLight) {
              _this3.thirdShow();
            }
          }, 0.2);
        };
        _proto.runOne = function runOne(currentIndex) {
          var _this4 = this;
          this._dataList[currentIndex].map(function (item, index) {
            item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y - _this4._moveNormalSteps[currentIndex], 0));
            if (item.node.getPosition().y <= -270) {
              if (_this4._isGetResult) {
                _this4.setState(CardState.RESULTNORMAL);
              } else {
                //随机重新生成卡片以及设置位置
                var cardData = {
                  num: Math.floor(Math.random() * 9) + 1,
                  type: 0
                };
                item.node.setPosition(v3(_this4._positionX[currentIndex], item.node.getPosition().y + _this4._itemHeight * 5));
                item["cardData"] = cardData;
                item.initCard(cardData, currentIndex, false);
              }
            }
          });
        };
        _proto.resultOne = function resultOne(currentIndex) {
          var _this5 = this;
          if (!this._normalGetResult[currentIndex]) {
            this._moveNormalSteps[currentIndex] -= 10;
            if (this._moveNormalSteps[currentIndex] <= 70) {
              this._moveNormalSteps[currentIndex] = 70;
            }
            if (this._dataList[currentIndex]) {
              this._dataList[currentIndex].map(function (item, index) {
                item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y - _this5._moveNormalSteps[currentIndex], 0));
                if (item.node.getPosition().y <= -270) {
                  item.node.setPosition(v3(_this5._positionX[currentIndex], item.node.getPosition().y + _this5._itemHeight * 5));
                  if (item["cardData"]) {
                    if (index != 0) {
                      if (_this5._result[currentIndex][index - 1]) {
                        item["cardData"] = _this5._result[currentIndex][index - 1];
                        item.initCard(item["cardData"], currentIndex, true);
                      }
                    } else {
                      item["cardData"] = _this5._topData[currentIndex][0];
                      item.initCard(item["cardData"], currentIndex, true);
                    }
                  }
                }
                if (index == _this5._dataList[currentIndex].length - 1 && _this5._resultTime[currentIndex] <= 0 && item.node.getPosition().y <= -200) {
                  _this5.hideLight(currentIndex);
                  _this5._normalGetResult[currentIndex] = true;
                  _this5._moveNormalSteps[currentIndex] = 0;
                  slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.spinStop);
                  _this5._dataList[currentIndex].map(function (item, index) {
                    if (item && item["cardData"]) {
                      tween(item.node).to(0.02, {
                        position: v3(_this5._positionX[currentIndex], _this5._positionY[index], 0)
                      }).by(0.04, {
                        position: v3(0, 3)
                      }).by(0.04, {
                        position: v3(0, -3)
                      }).call(function () {
                        if (currentIndex != 0) {
                          if (_this5._showLineIndex != 0 && _this5._showLineIndex <= currentIndex + 1) {
                            _this5.showLight(currentIndex + 1);
                            //获取当前以及当前之前的线的scatter
                            for (var i = 0; i < currentIndex + 1; i++) {
                              _this5._dataList[i].map(function (data) {
                                if (data["cardData"] && data["cardData"]["num"] == 10) {
                                  data.node.getComponent(slotWildBanditoItem).scatteItemWin();
                                }
                              });
                            }
                          }
                          if (item["cardData"] && item["cardData"]["num"] == 10) {
                            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.symScatter);
                          } else if (item["cardData"] && item["cardData"]["num"] == 11) {
                            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.symWild);
                          }
                        }
                      }).start();
                    }
                  });
                  if (currentIndex == 4) {
                    if (_this5._showLineIndex != 0) {
                      if (_this5.node.getChildByName("line0")) {
                        _this5.node.getChildByName("line0").destroy();
                      }
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
                      //获取所有线的scatter
                      if (_this5._scatterNum < 3) {
                        _this5.scheduleOnce(function () {
                          _this5._dataList.map(function (data) {
                            data.map(function (data1) {
                              if (data1["cardData"] && data1["cardData"]["num"] == 10) {
                                data1.node.getComponent(slotWildBanditoItem).scatteItemWinToIdle();
                              }
                            });
                          });
                        }, 0.2);
                      }
                      _this5.scheduleOnce(function () {
                        _this5.hideLight(4);
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
        _proto.showLight = function showLight(index) {
          var _this6 = this;
          if (index == 1 && !this.light2.node.active) {
            this.light2.node.active = true;
            if (this.node.getChildByName("line1")) {
              this.node.getChildByName("line1").destroy();
            }
            if (!this.node.getChildByName("line0")) {
              var node = instantiate(this.lineMask);
              node.name = "line0";
              node.parent = this.node;
              node.setPosition(v3(this.lineMaskPostion[0], 0));
              node.active = true;
              node.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line2")) {
              var _node = instantiate(this.lineMask);
              _node.name = "line2";
              _node.parent = this.node;
              _node.setPosition(v3(this.lineMaskPostion[2], 0));
              _node.active = true;
              _node.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line3")) {
              var _node2 = instantiate(this.lineMask);
              _node2.name = "line3";
              _node2.parent = this.node;
              _node2.setPosition(v3(this.lineMaskPostion[3], 0));
              _node2.active = true;
              _node2.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line4")) {
              var _node3 = instantiate(this.lineMask);
              _node3.name = "line4";
              _node3.parent = this.node;
              _node3.setPosition(v3(this.lineMaskPostion[3], 0));
              _node3.active = true;
              _node3.getComponent(UITransform).priority = 50;
            }
            var _audioId = 0;
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.fastspinStart, function (id) {
              _audioId = id;
              _this6.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId);
              }, 1.2);
            });
          } else if (index == 2 && !this.light3.node.active) {
            this.light3.node.active = true;
            this.light3.setAnimation(0, "idle1", true);
            if (this.node.getChildByName("line2")) {
              this.node.getChildByName("line2").destroy();
            }
            if (!this.node.getChildByName("line0")) {
              var _node4 = instantiate(this.lineMask);
              _node4.name = "line0";
              _node4.parent = this.node;
              _node4.setPosition(v3(this.lineMaskPostion[0], 0));
              _node4.active = true;
              _node4.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line1")) {
              var _node5 = instantiate(this.lineMask);
              _node5.name = "line1";
              _node5.parent = this.node;
              _node5.setPosition(v3(this.lineMaskPostion[1], 0));
              _node5.active = true;
              _node5.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line3")) {
              var _node6 = instantiate(this.lineMask);
              _node6.name = "line3";
              _node6.parent = this.node;
              _node6.setPosition(v3(this.lineMaskPostion[3], 0));
              _node6.active = true;
              _node6.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line4")) {
              var _node7 = instantiate(this.lineMask);
              _node7.name = "line4";
              _node7.parent = this.node;
              _node7.setPosition(v3(this.lineMaskPostion[3], 0));
              _node7.active = true;
              _node7.getComponent(UITransform).priority = 50;
            }
            var _audioId2 = 0;
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.fastspinStart, function (id) {
              _audioId2 = id;
              _this6.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId2);
              }, 1.2);
            });
          } else if (index == 3 && !this.light4.node.active) {
            this.light4.node.active = true;
            if (this.node.getChildByName("line3")) {
              this.node.getChildByName("line3").destroy();
            }
            if (!this.node.getChildByName("line0")) {
              var _node8 = instantiate(this.lineMask);
              _node8.name = "line0";
              _node8.parent = this.node;
              _node8.setPosition(v3(this.lineMaskPostion[0], 0));
              _node8.active = true;
              _node8.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line1")) {
              var _node9 = instantiate(this.lineMask);
              _node9.name = "line1";
              _node9.parent = this.node;
              _node9.setPosition(v3(this.lineMaskPostion[1], 0));
              _node9.active = true;
              _node9.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line2")) {
              var _node10 = instantiate(this.lineMask);
              _node10.name = "line2";
              _node10.parent = this.node;
              _node10.setPosition(v3(this.lineMaskPostion[2], 0));
              _node10.active = true;
              _node10.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line4")) {
              var _node11 = instantiate(this.lineMask);
              _node11.name = "line4";
              _node11.parent = this.node;
              _node11.setPosition(v3(this.lineMaskPostion[3], 0));
              _node11.active = true;
              _node11.getComponent(UITransform).priority = 50;
            }
            var _audioId3 = 0;
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.fastspinStart, function (id) {
              _audioId3 = id;
              _this6.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId3);
              }, 1.2);
            });
          } else if (index == 4 && !this.light4.node.active) {
            this.light5.node.active = true;
            if (this.node.getChildByName("line4")) {
              this.node.getChildByName("line4").destroy();
            }
            if (!this.node.getChildByName("line0")) {
              var _node12 = instantiate(this.lineMask);
              _node12.name = "line0";
              _node12.parent = this.node;
              _node12.setPosition(v3(this.lineMaskPostion[0], 0));
              _node12.active = true;
              _node12.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line1")) {
              var _node13 = instantiate(this.lineMask);
              _node13.name = "line1";
              _node13.parent = this.node;
              _node13.setPosition(v3(this.lineMaskPostion[1], 0));
              _node13.active = true;
              _node13.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line2")) {
              var _node14 = instantiate(this.lineMask);
              _node14.name = "line2";
              _node14.parent = this.node;
              _node14.setPosition(v3(this.lineMaskPostion[2], 0));
              _node14.active = true;
              _node14.getComponent(UITransform).priority = 50;
            }
            if (!this.node.getChildByName("line3")) {
              var _node15 = instantiate(this.lineMask);
              _node15.name = "line3";
              _node15.parent = this.node;
              _node15.setPosition(v3(this.lineMaskPostion[3], 0));
              _node15.active = true;
              _node15.getComponent(UITransform).priority = 50;
            }
            var _audioId4 = 0;
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.fastspinStart, function (id) {
              _audioId4 = id;
              _this6.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId4);
              }, 1.2);
            });
          }
        };
        _proto.hideLight = function hideLight(index) {
          index == 1 ? this.light2.node.active = false : index == 2 ? this.light3.node.active = false : index == 3 ? this.light4.node.active = false : index == 4 ? this.light5.node.active = false : "";
        }

        //中奖图标删除
        ;

        _proto.deleteItem = function deleteItem(arr) {
          var _this7 = this;
          this._run_mask = instantiate(this.run_mask);
          this._run_mask.getComponent(UITransform).priority = 100;
          this._run_mask.name = "run_mask";
          this._run_mask.parent = this.node;
          this._run_mask.active = true;
          arr.map(function (item, index) {
            if (_this7._dataList[item.parentIndex][item.childIndex]) {
              _this7._dataList[item.parentIndex][item.childIndex].getComponent(slotWildBanditoItem).showWin(_this7._dataList[item.parentIndex][item.childIndex]["cardData"]["type"]);
              if (_this7._dataList[item.parentIndex][item.childIndex]["cardData"]["type"] == 0 || _this7._dataList[item.parentIndex][item.childIndex]["cardData"]["num"] == 11) {
                _this7._dataList[item.parentIndex][item.childIndex]["isDelete"] = true;
              }
              if (_this7._dataList[item.parentIndex][item.childIndex]["cardData"]["type"] == 1) {
                _this7._dataList[item.parentIndex][item.childIndex]["cardData"]["type"] = 0;
                _this7._dataList[item.parentIndex][item.childIndex]["cardData"]["num"] = 11;
              }
            }
          });
          slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.prizeSmallwin);
          var random = Math.floor(Math.random() * 3) + 1;
          slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio["menSound0" + random]);
          this.scheduleOnce(function () {
            //showWin整个动画时间
            _this7._run_mask.active = false;
            arr.map(function (item, index) {
              if (_this7._dataList[item.parentIndex][item.childIndex]["isDelete"]) {
                var node = _this7._dataList[item.parentIndex][item.childIndex].node;
                node.destroyFromParent();
                //this.node.removeChild(this._dataList[item.parentIndex][item.childIndex].node);
              }
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
          }, 1.5);
        };
        _proto.changePostionItem = function changePostionItem() {
          var _this8 = this;
          this._dataList.map(function (item, index) {
            var isDelete = false;
            item.map(function (item1, index1) {
              if (item1.node.getPosition().y != _this8._positionY[5 - item.length + index1]) {
                //删除一次头部图标
                if (!isDelete) {
                  isDelete = true;
                  _this8._topData[index].splice(0, 1);
                }
                tween(item1.node).delay(index / 10).to(0.1, {
                  position: v3(_this8._positionX[index], _this8._positionY[5 - item.length + index1])
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
            });
          });
          slotWildBanditoProxy.emit(slotWildBanditoGameEvent.SHOWNEXT);
          // this.scheduleOnce(() => {
          //     slotWildBanditoProxy.emit(slotWildBanditoGameEvent.SHOWNEXT);
          // }, 0.2)
        }
        //中奖后新item渲染
        ;

        _proto.renderNewItem = function renderNewItem(result, scatterNum) {
          var _this9 = this;
          var needAddItemNum = 0; //有几竖需要补充新item
          if (result.length == 5) {
            result.map(function (item, index) {
              //为了实现错开掉落
              if (_this9._dataList[index].length != 5) {
                needAddItemNum += 1;
              }
              if (_this9._dataList[index].length != 5) {
                var length = _this9._dataList[index].length;
                for (var i = 0; i < 5 - length; i++) {
                  var node = instantiate(_this9.pre_card);
                  var com = node.getComponent(slotWildBanditoItem);
                  node.parent = _this9.node;
                  if (_this9._dataList[index].length != 4) {
                    _this9._dataList[index].splice(i, 0, com);
                    com["cardData"] = item[i];
                  } else {
                    com["cardData"] = _this9._topData[index][0];
                    _this9._dataList[index].unshift(com);
                  }
                  var initY = _this9._positionY[0] + (i + 1) * 125;
                  node.setPosition(v3(_this9._positionX[index], initY));
                  com.initCard(com["cardData"], index, true);
                }
              }
            });
          }
          this.scheduleOnce(function () {
            _this9._dataList.map(function (item, index) {
              item.map(function (item1, index1) {
                if (item1.node.getPosition().y > _this9._positionY[index1] + 3 || item1.node.getPosition().y < _this9._positionY[index1] - 3) {
                  tween(item1.node).delay(needAddItemNum >= index ? index / 15 : 0).to(0.1, {
                    position: v3(_this9._positionX[index], _this9._positionY[index1])
                  }).by(0.02, {
                    position: v3(0, 10)
                  }).by(0.02, {
                    position: v3(0, -10)
                  }).call(function () {
                    if (item1["cardData"] && item1["cardData"]["num"] == 10) {
                      slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.symScatter);
                    } else if (item1["cardData"] && item1["cardData"]["Sym"] == 11) {
                      slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.symWild);
                    }
                  }).start();
                }
              });
            });
            _this9.scheduleOnce(function () {
              slotWildBanditoProxy.emit(slotWildBanditoGameEvent.SHOWNEXTEND);
            }, needAddItemNum / 10 + 0.05);
          }, 0.1);
        };
        _proto.getResult = function getResult(data, showLineIndex, topData) {
          var _this10 = this;
          if (showLineIndex === void 0) {
            showLineIndex = 0;
          }
          this._result = data;
          this._showLineIndex = showLineIndex;
          this._topData = topData;
          if (this._isShowThirdLight) {
            this.scheduleOnce(function () {
              if (_this10._showLineIndex != 0) {
                _this10._resultTime.map(function (item, index) {
                  if (index >= _this10._showLineIndex) {
                    _this10._resultTime[index] = item + (index + 1 - showLineIndex) / 2;
                  }
                });
              }
              _this10.thirdHide();
              _this10._isGetResult = true;
            }, 2);
          } else {
            if (this._showLineIndex != 0) {
              this._resultTime.map(function (item, index) {
                if (index >= _this10._showLineIndex) {
                  _this10._resultTime[index] = item + (index + 1 - showLineIndex) / 2;
                }
              });
            }
            this._isGetResult = true;
          }
        }

        //scatter获胜
        ;

        _proto.scatterWin = function scatterWin() {
          this._dataList.map(function (item) {
            item.map(function (item1) {
              if (item1["cardData"] && item1["cardData"]["num"] == 10) {
                item1.getComponent(slotWildBanditoItem).scatteItemWin();
              }
            });
          });
        }

        //scatter收缩
        ;

        _proto.scatterNormal = function scatterNormal() {
          this._dataList.map(function (item) {
            item.map(function (item1) {
              if (item1["cardData"] && item1["cardData"]["num"] == 10) {
                item1.getComponent(slotWildBanditoItem).scatteItemWinToSpawn();
              }
            });
          });
        }

        //第三轴特殊展示
        ;

        _proto.thirdShow = function thirdShow() {
          var _this11 = this;
          this.light3.node.active = true;
          this.light3.setAnimation(0, "idle2", true);
          this.light3.timeScale = 0.75;
          slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.fsReset);
          if (!this.node.getChildByName("line0")) {
            var node = instantiate(this.lineMask);
            node.name = "line0";
            node.parent = this.node;
            node.setPosition(v3(this.lineMaskPostion[0], 0));
            node.active = true;
            node.getComponent(UITransform).priority = 50;
          }
          if (!this.node.getChildByName("line1")) {
            var _node16 = instantiate(this.lineMask);
            _node16.name = "line1";
            _node16.parent = this.node;
            _node16.setPosition(v3(this.lineMaskPostion[1], 0));
            _node16.active = true;
            _node16.getComponent(UITransform).priority = 50;
          }
          if (!this.node.getChildByName("line3")) {
            var _node17 = instantiate(this.lineMask);
            _node17.name = "line3";
            _node17.parent = this.node;
            _node17.setPosition(v3(this.lineMaskPostion[3], 0));
            _node17.active = true;
            _node17.getComponent(UITransform).priority = 50;
          }
          if (!this.node.getChildByName("line4")) {
            var _node18 = instantiate(this.lineMask);
            _node18.name = "line4";
            _node18.parent = this.node;
            _node18.setPosition(v3(this.lineMaskPostion[4], 0));
            _node18.active = true;
            _node18.getComponent(UITransform).priority = 50;
          }
          this.scheduleOnce(function () {
            var _loop = function _loop() {
              var node = instantiate(_this11.iconBg);
              node.parent = _this11.turnSpeBox;
              node.setPosition(v3(0, _this11._positionY[i + 1]));
              node.getComponent(UIOpacity).opacity = 0;
              node.setScale(3, 3);
              _this11.scheduleOnce(function () {
                node.active = true;
                tween(node.getComponent(UIOpacity)).to(0.2, {
                  opacity: 180
                }).start();
                tween(node).to(0.2, {
                  scale: v3(0.8, 0.8)
                }).start();
              }, (3 - i) / 5);
            };
            for (var i = 3; i >= 0; i--) {
              _loop();
            }
            _this11.scheduleOnce(function () {
              var _loop2 = function _loop2(_i) {
                _this11.scheduleOnce(function () {
                  if (_this11.turnSpeBox.children[_i]) {
                    tween(_this11.turnSpeBox.children[_i].getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).start();
                  }
                }, _i / 4);
              };
              for (var _i = _this11.turnSpeBox.children.length - 1; _i >= 0; _i--) {
                _loop2(_i);
              }
              _this11.scheduleOnce(function () {
                _this11.turnSpeBox.removeAllChildren();
              }, 1);
              // this.turnSpeBox.children.map((item,index) => {
              //     this.scheduleOnce(() => {
              //         cc.tween(item.getComponent(cc.UIOpacity)).to(0.2, { opacity: 0 }).call(() => {
              //             item.destroy()
              //         }).start()
              //     })

              // })
            }, 0.6);
          }, 0.8);
        };
        _proto.thirdHide = function thirdHide() {
          this.light3.timeScale = 1;
          if (this.node.getChildByName("line0")) {
            this.node.getChildByName("line0").destroy();
          }
          if (this.node.getChildByName("line1")) {
            this.node.getChildByName("line1").destroy();
          }
          if (this.node.getChildByName("line3")) {
            this.node.getChildByName("line3").destroy();
          }
          if (this.node.getChildByName("line4")) {
            this.node.getChildByName("line4").destroy();
          }
        };
        _proto.update = function update(dt) {
          var _this12 = this;
          switch (this._state) {
            case CardState.RUNFAST:
              {
                this._dataList.map(function (item, index) {
                  item.map(function (item1, index1) {
                    item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this12._moveSteps, 0));
                    if (item1.node.getPosition().y <= -270) {
                      if (_this12._isGetResult) {
                        _this12.setState(CardState.RESULTFAST);
                      } else {
                        //随机重新生成卡片以及设置位置
                        var cardData = {
                          num: Math.floor(Math.random() * 9) + 1,
                          type: 0
                        };
                        item1.node.setPosition(v3(_this12._positionX[index], item1.node.getPosition().y + _this12._itemHeight * 5));
                        item1["cardData"] = cardData;
                        item1.initCard(cardData, index, false);
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
                    item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this12._moveSteps, 0));
                    if (item1.node.getPosition().y <= -270) {
                      item1.node.setPosition(v3(_this12._positionX[index], item1.node.getPosition().y + _this12._itemHeight * _this12._dataList[index].length));
                      if (index1 != 0) {
                        _this12._getResultNum += 1;
                        item1["cardData"] = _this12._result[index][index1 - 1];
                        item1.initCard(item1["cardData"], index, true);
                      } else {
                        item1["cardData"] = _this12._topData[index][0];
                        item1.initCard(item1["cardData"], index, true);
                      }
                    }
                    if (index == 4 && index1 == 4 && item1.node.getPosition().y < -200 && _this12._getResultNum > 24) {
                      _this12.setState(CardState.END);
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
                break;
              }
            case CardState.RESULTNORMAL:
              {
                this.resultOne(0);
                this.resultOne(1);
                this.resultOne(2);
                this.resultOne(3);
                this.resultOne(4);
                this._resultTime[0] > 0 ? this._resultTime[0] -= dt : "";
                this._resultTime[1] > 0 ? this._resultTime[1] -= dt : "";
                this._resultTime[2] > 0 ? this._resultTime[2] -= dt : "";
                this._resultTime[3] > 0 ? this._resultTime[3] -= dt : "";
                this._resultTime[4] > 0 ? this._resultTime[4] -= dt : "";
                break;
              }
            case CardState.END:
              {
                if (this._runType == "fast") {
                  this._dataList.map(function (item, index) {
                    item.map(function (item1, index1) {
                      if (item1 && item1["cardData"]) {
                        tween(item1.node).to(0.04, {
                          position: v3(_this12._positionX[index], _this12._positionY[index1])
                        }).by(0.04, {
                          position: v3(0, 3)
                        }).by(0.04, {
                          position: v3(0, -3)
                        }).call(function () {
                          if (item1["cardData"] && item1["cardData"]["num"] == 10) {
                            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.symScatter);
                          } else if (item1["cardData"] && item1["cardData"]["num"] == 11) {
                            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.symWild);
                          }
                        }).start();
                      }
                    });
                  });
                  slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.spinStopQuick);
                } else {
                  this._dataList.map(function (item, index) {
                    item.map(function (item1, index1) {
                      if (item1 && item1["cardData"]) ;
                    });
                  });
                }
                this._normalGetResult = [false, false, false, false, false];
                this._isGetResult = false;
                this._time1 = 0.05;
                this._time2 = 0.1;
                this._time3 = 0.15;
                this._time4 = 0.2;
                this._resultTime = [0.2, 0.4, 0.6, 0.8, 1];
                this._moveNormalSteps = [100, 100, 100, 100, 100];
                this._isGetResult = false;
                this._getResultNum = 0;
                this.setState(CardState.NORMAL);
                slotWildBanditoProxy.emit(slotWildBanditoGameEvent.END);
                slotWildBanditoProxy.emit(slotWildBanditoGameEvent.NOTICEHIDEANI);
                break;
              }
          }
        };
        return slotWildBanditoRun;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "light1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "light2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "light3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "light4", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "light5", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lineMask", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "iconBg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "turnSpeBox", [_dec11], {
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

System.register("chunks:///_virtual/slotWildBanditoScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './MainManager.ts', './slotWildBanditoProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, ViewManager, Common, MainManager, slotWildBanditoProxy;
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
      slotWildBanditoProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "bf24e324DlMWJMXicEA8ei4", "slotWildBanditoScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotWildBanditoScene = exports('default', (_dec = ccclass("slotWildBanditoScene"), _dec2 = menu("game/slotWildBandito/slotWildBanditoScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWildBanditoScene, _Component);
        function slotWildBanditoScene() {
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
        var _proto = slotWildBanditoScene.prototype;
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
          slotWildBanditoProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          slotWildBanditoProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return slotWildBanditoScene;
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

System.register("chunks:///_virtual/slotWildBanditoView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Common.ts', './ProxyMgr.ts', './ViewManager.ts', './slotWildBanditoProxy.ts', './FortuneHistory.ts', './FortuneRank.ts', './DataManager.ts', './ScrollNumLabel.ts', './FortuneSetBase.ts', './MainManager.ts', './NetManager.ts', './AddSpineEffect.ts', './slotWildBanditoWindow.ts', './slotWildBanditoRun.ts', './slotWildBanditoDef.ts', './AudioManager.ts', './FortuneSetAutobyGreen.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, SpriteFrame, sp, Label, instantiate, sys, v3, tween, Sprite, Tween, UITransform, UIOpacity, color, Color, Component, i18n, Common, ProxyMgr, ViewManager, slotWildBanditoProxy, slotWildBanditoGameEvent, FortuneHistory, FortuneRank, DataManager, UserKey, ScrollNumLabel, FortuneSetBase, MainManager, NetManager, AddSpineEffect, slotWildBanditoWindow, slotWildBanditoRun, slotWildBanditoDef, AudioManager, FortuneSetAutoByGreen;
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
      sys = module.sys;
      v3 = module.v3;
      tween = module.tween;
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
      slotWildBanditoProxy = module.default;
      slotWildBanditoGameEvent = module.slotWildBanditoGameEvent;
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
      MainManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      AddSpineEffect = module.default;
    }, function (module) {
      slotWildBanditoWindow = module.slotWildBanditoWindow;
    }, function (module) {
      slotWildBanditoRun = module.slotWildBanditoRun;
    }, function (module) {
      slotWildBanditoDef = module.slotWildBanditoDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      FortuneSetAutoByGreen = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56;
      cclegacy._RF.push({}, "2dba1EQS6BD3qcFK/QEy1Ps", "slotWildBanditoView", undefined);
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
      var slotWildBanditoView = exports('slotWildBanditoView', (_dec = ccclass("slotWildBanditoView"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(Node), _dec11 = property(SpriteFrame), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(ScrollNumLabel), _dec18 = property(sp.Skeleton), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(sp.Skeleton), _dec27 = property(ScrollNumLabel), _dec28 = property(Label), _dec29 = property(ScrollNumLabel), _dec30 = property(Label), _dec31 = property(Label), _dec32 = property(ScrollNumLabel), _dec33 = property(Label), _dec34 = property(sp.Skeleton), _dec35 = property(Label), _dec36 = property(Node), _dec37 = property(sp.Skeleton), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(Node), _dec42 = property(sp.Skeleton), _dec43 = property(ScrollNumLabel), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(Node), _dec48 = property(Node), _dec49 = property(Node), _dec50 = property(Node), _dec51 = property(Node), _dec52 = property(Node), _dec53 = property(Node), _dec54 = property(sp.Skeleton), _dec55 = property(Node), _dec56 = property(Node), _dec57 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWildBanditoView, _Component);
        function slotWildBanditoView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab_windowItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "windowMask", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalBtn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moreBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "game_type", _descriptor7, _assertThisInitialized(_this));
          //普通/快速切换
          _initializerDefineProperty(_this, "notice_spine", _descriptor8, _assertThisInitialized(_this));
          //公告栏
          _initializerDefineProperty(_this, "notice_bg", _descriptor9, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "notice_frames", _descriptor10, _assertThisInitialized(_this));
          //随机公告
          _initializerDefineProperty(_this, "notice_title", _descriptor11, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "run_box", _descriptor12, _assertThisInitialized(_this));
          //转盘
          _initializerDefineProperty(_this, "window_run_mask", _descriptor13, _assertThisInitialized(_this));
          //转盘遮照层demo
          _initializerDefineProperty(_this, "one_win", _descriptor14, _assertThisInitialized(_this));
          //一次获取
          _initializerDefineProperty(_this, "all_win", _descriptor15, _assertThisInitialized(_this));
          //全局获取
          _initializerDefineProperty(_this, "all_win_number", _descriptor16, _assertThisInitialized(_this));
          //全局获取
          _initializerDefineProperty(_this, "odd_spine", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "odd1", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "odd2", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "odd3", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "odd4", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "odd5", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "odd6", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win_box", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win_txt", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betFree", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_winFree", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_goldFree", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_start", _descriptor33, _assertThisInitialized(_this));
          //开始按钮
          _initializerDefineProperty(_this, "turn_auto_leftCount", _descriptor34, _assertThisInitialized(_this));
          //剩余自动模式
          _initializerDefineProperty(_this, "enter_free", _descriptor35, _assertThisInitialized(_this));
          //免费模式初始页
          _initializerDefineProperty(_this, "enter_free_spine", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free_time", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free_btn", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free_btn_name", _descriptor39, _assertThisInitialized(_this));
          // @property(sp.Skeleton)
          // enter_free_btn_spine: sp.Skeleton = null;
          _initializerDefineProperty(_this, "free_end", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_spine", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_cash", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_btn", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_btn_name", _descriptor44, _assertThisInitialized(_this));
          // @property(sp.Skeleton)
          // free_end_btn_spine: sp.Skeleton = null;
          _initializerDefineProperty(_this, "free_end_time", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_normal_box", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box_last", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box_noLast", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box_time", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_bot_normal", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_bot_free", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fire_spine", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_lazhu", _descriptor54, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_normal_bg", _descriptor55, _assertThisInitialized(_this));
          //转盘普通背景
          _initializerDefineProperty(_this, "turn_spe_bg", _descriptor56, _assertThisInitialized(_this));
          //转盘中奖背景
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
          _this._oddCurrentIndex = 0;
          //头部倍数当前转到哪里
          _this._cal_current_result = {
            result: null,
            scatterNum: 0,
            showLineIndex: 0,
            win: []
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
          _this._isShowThirdLight = false;
          _this._audioId = null;
          _this._totalCashAudioId = null;
          _this._tuneId = null;
          _this._tuneTimer = null;
          return _this;
        }
        var _proto = slotWildBanditoView.prototype;
        _proto.start = function start() {
          var _this2 = this;
          var node = instantiate(this.prefab_windowItem);
          this.node.addChild(node);
          this._window = node.getComponent(slotWildBanditoWindow);
          node.active = false;
          this.windowMask.on(Node.EventType.TOUCH_END, function () {
            _this2.hideWindow();
          });
          this.init();
          this.run_box.removeAllChildren();
          this.turn_start.node.on(Node.EventType.TOUCH_END, function () {
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.spinBtn);
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
              slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.bgm_bigwin_end, function (id) {
                _this2._audioId = id;
              });
            } else {
              _this2.clickHideBigWin();
            }
          });

          //免费初始页进入到免费模式
          // this.enter_free_btn_spine.node.on(cc.Node.EventType.TOUCH_END, () => {
          //     slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.uiStart);
          //     this.enterFreePage()
          // })

          this.enter_free_btn.on(Node.EventType.TOUCH_END, function () {
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.uiStart);
            _this2.enterFreePage();
          });
          this.enter_free_btn_name.on(Node.EventType.TOUCH_END, function () {
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.uiStart);
            _this2.enterFreePage();
          });

          //免费结束页进入到普通模式
          // this.free_end_btn_spine.node.on(cc.Node.EventType.TOUCH_END, () => {
          //     slotWinWinFishPrawnCrabDef.palyAudio(slotWinWinFishPrawnCrabDef.audio.uiStart);
          //     this.endNormal()
          // })

          this.free_end_btn.on(Node.EventType.TOUCH_END, function () {
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.uiStart);
            _this2.endNormal();
          });
          this.free_end_btn_name.on(Node.EventType.TOUCH_END, function () {
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.uiStart);
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
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.bgm_bigwin_end, function (id) {
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
                if (slotWildBanditoProxy.result && !this._isGetResult) {
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
                if (slotWildBanditoProxy.result["OpenNums"][this._current_index]["prizeAmount"] > 0) {
                  this._win_totalMoney += slotWildBanditoProxy.result["OpenNums"][this._current_index]["prizeAmount"];
                  if (this._isFree) {
                    slotWildBanditoProxy.freeTotalWin += slotWildBanditoProxy.result["OpenNums"][this._current_index]["prizeAmount"];
                    this.txt_winFree.string = Common.numFormat(slotWildBanditoProxy.freeTotalWin + "");
                  }
                  this.txt_win.string = Common.numFormat(this._win_totalMoney + "");
                  this.run_box.getComponent(slotWildBanditoRun).deleteItem(this._cal_current_result.win);
                  this.scheduleOnce(function () {
                    _this4.oddChange(false);
                  }, 0.5);
                  this.rendOneWin();
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
          this.initEvent();
          this.updateGoldData();
          this.updateSetData();
          this.checkDownOrUpBet();
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotWildBandito.info, {});
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
            } else {
              this.updateGoldData(-this._bet);
            }
          }
          if (this._isFree && this._freeLastTime > 0 || !this._isFree) {
            if (this._isFree) {
              this.setFreeCount(this._freeLastTime - 1);
            } else {
              this.lastTimeIsWin && this.oddChange(true);
            }
            this._lock = true;
            this.one_win.active = false;
            this.all_win.active = false;
            this.all_win_number.reset();
            this.notice_bg.active = true;
            this.notice_spine.setAnimation(0, "normal_idle", true);
            this.txt_win.reset();
            slotWildBanditoProxy.result = null;
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
          this._isGetResult = false;
          this.checkAuto();
          this.changeBtnActive(false);
          this.run_box.getComponent(slotWildBanditoRun).run(this._runDelay != 0 || this._isFree ? "normal" : "fast", this._isFree ? this._isShowThirdLight : false);
          this._tuneTimer = function () {
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.tune, function (id) {
              _this5._tuneId = id;
            });
          };
          this.schedule(this._tuneTimer, 1);
        };
        _proto.clickRunning = function clickRunning() {
          var _this6 = this;
          this._isGetResult = true;
          this.calResult(function () {
            _this6.getTopResult();
            if (_this6._runDelay != 0 || _this6._isFree) {
              _this6.scheduleOnce(function () {
                _this6.run_box.getComponent(slotWildBanditoRun).getResult(_this6._cal_current_result.result, _this6._cal_current_result.showLineIndex, _this6._topData);
              }, 0.4);
            } else {
              _this6.scheduleOnce(function () {
                _this6.run_box.getComponent(slotWildBanditoRun).getResult(_this6._cal_current_result.result, 0, _this6._topData);
              }, 0.2);
            }
          });
        };
        _proto.clickStop = function clickStop() {
          var _this7 = this;
          this.unschedule(this._tuneTimer);
          AudioManager.instance.stopSound(this._tuneId);
          this._tuneId = null;
          //判断第一轮中奖结果
          if (slotWildBanditoProxy.result && slotWildBanditoProxy.result["OpenNums"][this._current_index]["prizeAmount"] > 0) {
            this.lastTimeIsWin = true;
            this.startGameAni(false);
            this._win_totalMoney = slotWildBanditoProxy.result["OpenNums"][this._current_index]["prizeAmount"];
            this.txt_win.string = Common.numFormat(this._win_totalMoney);
            this.run_box.getComponent(slotWildBanditoRun).deleteItem(this._cal_current_result.win);
            if (this._isFree) {
              slotWildBanditoProxy.freeTotalWin += slotWildBanditoProxy.result["OpenNums"][this._current_index]["prizeAmount"];
              this.txt_winFree.string = Common.numFormat(slotWildBanditoProxy.freeTotalWin + "");
            }
            this.scheduleOnce(function () {
              _this7.oddChange(false);
            }, 0.5);
            this.rendOneWin();
            if (!this._isFree && !this._auto) {
              this.turn_start.setAnimation(0, "stop", true);
            }
          } else {
            this.lastTimeIsWin = false;
            this.startGameAni(false);
            this.allEnd();
          }
        };
        _proto.showNext = function showNext() {
          var _this8 = this;
          this._current_index += 1;
          this.calResult(function () {
            _this8.scheduleOnce(function () {
              _this8.run_box.getComponent(slotWildBanditoRun).renderNewItem(_this8._cal_current_result.result, _this8._cal_current_result.scatterNum);
            }, 0.2);
          });
        };
        _proto.sendBet = function sendBet() {
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotWildBandito.bet, {
            betAmount: this._bet + ""
          });
        }

        //单次金额渲染
        ;

        _proto.rendOneWin = function rendOneWin() {
          var _this9 = this;
          this.notice_bg.active = false;
          this.one_win.active = false;
          this.one_win.getChildByName("number").getComponent(Label).string = Common.numFormat(slotWildBanditoProxy.result["OpenNums"][this._current_index]["prizeAmount"] + "");
          this.notice_spine.setAnimation(0, "normal_win", false);
          this.notice_spine.setCompleteListener(function () {
            _this9.notice_spine.setCompleteListener(null);
            _this9.notice_spine.setAnimation(0, "normal_idle", true);
          });
          this.one_win.setScale(v3(1.3, 1.3));
          this.one_win.active = true;
          tween(this.one_win).to(0.3, {
            scale: v3(1, 1)
          }).start();
        }

        //头部获取总金额
        ;

        _proto.changeTopTotalCash = function changeTopTotalCash() {
          var _this10 = this;
          this.one_win.active = false;
          this.all_win.setScale(v3(1.3, 1.3));
          var odd = this._win_totalMoney / this._bet;
          if (odd <= 5) {
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.prizeInfobarTotalwin);
            this.all_win.getChildByName("number").getComponent(Label).string = Common.numFormat(this._win_totalMoney + "");
          } else {
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.prizeInfobarTotalwinMedMain, function (id) {
              _this10._totalCashAudioId = id;
            });
            this.all_win_number.string = Common.numFormat(this._win_totalMoney + "");
            this.scheduleOnce(function () {
              AudioManager.instance.stopSound(_this10._totalCashAudioId);
              slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.prizeInfobarTotalwinMedEnd);
            }, 0.4);
          }
          this.all_win.active = true;
          this.changeAdBg(odd);
          //金额
          tween(this.all_win).to(0.5, {
            scale: v3(1, 1)
          }).start();
        }

        //广告栏背景动画变化
        ;

        _proto.changeAdBg = function changeAdBg(odd) {
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

        //倍数修改
        ;

        _proto.oddChange = function oddChange(init, setOdd) {
          var _this11 = this;
          if (setOdd === void 0) {
            setOdd = 0;
          }
          if (init) {
            this.odd1.active = false;
            this.odd2.active = false;
            this.odd3.active = false;
            this.odd4.active = false;
            this.odd5.active = false;
            this.odd6.active = false;
            this.odd1.setPosition(v3(0, 40));
            this.odd2.setPosition(v3(-125, -25));
            this.odd3.setPosition(v3(-125, -185));
            this.odd4.setPosition(v3(0, -240));
            this.odd5.setPosition(v3(125, -185));
            this.odd6.setPosition(v3(125, -25));
            this._oddCurrentIndex = 0;
            this.odd_spine.timeScale = 2;
            this.odd_spine.setAnimation(0, "normal_6to1_spin", false);
            this.odd_spine.setCompleteListener(function () {
              _this11.odd_spine.setCompleteListener(null);
              _this11.odd_spine.timeScale = 1;
              _this11._isFree ? _this11.odd_spine.setAnimation(0, "free_1_idle", true) : _this11.odd_spine.setAnimation(0, "normal_1_idle", true);
              _this11.odd1.active = true;
              _this11.odd2.active = true;
              _this11.odd3.active = true;
              _this11.odd4.active = true;
              _this11.odd5.active = true;
              _this11.odd6.active = true;
              if (setOdd == 0) {
                _this11.odd1.getChildByName("label").getComponent(Label).string = "x1";
                _this11.odd1.getChildByName("mask").active = false;
                _this11.odd2.getChildByName("label").getComponent(Label).string = "∞";
                _this11.odd2.getChildByName("mask").active = true;
                _this11.odd3.getChildByName("label").getComponent(Label).string = "x5";
                _this11.odd3.getChildByName("mask").active = true;
                _this11.odd4.getChildByName("label").getComponent(Label).string = "x4";
                _this11.odd4.getChildByName("mask").active = true;
                _this11.odd5.getChildByName("label").getComponent(Label).string = "x3";
                _this11.odd5.getChildByName("mask").active = true;
                _this11.odd6.getChildByName("label").getComponent(Label).string = "x2";
                _this11.odd6.getChildByName("mask").active = true;
              } else {
                _this11.odd1.getChildByName("label").getComponent(Label).string = "x" + setOdd;
                _this11.odd1.getChildByName("mask").active = false;
                _this11.odd2.getChildByName("label").getComponent(Label).string = "x" + (setOdd + 5);
                _this11.odd2.getChildByName("mask").active = true;
                _this11.odd3.getChildByName("label").getComponent(Label).string = "x" + (setOdd + 4);
                _this11.odd3.getChildByName("mask").active = true;
                _this11.odd4.getChildByName("label").getComponent(Label).string = "x" + (setOdd + 3);
                _this11.odd4.getChildByName("mask").active = true;
                _this11.odd5.getChildByName("label").getComponent(Label).string = "x" + (setOdd + 2);
                _this11.odd5.getChildByName("mask").active = true;
                _this11.odd6.getChildByName("label").getComponent(Label).string = "x" + (setOdd + 1);
                _this11.odd6.getChildByName("mask").active = true;
              }
            });
          } else {
            this.odd1.getChildByName("mask").active = false;
            this.odd2.getChildByName("mask").active = false;
            this.odd3.getChildByName("mask").active = false;
            this.odd4.getChildByName("mask").active = false;
            this.odd5.getChildByName("mask").active = false;
            this.odd6.getChildByName("mask").active = false;
            var nowAngleList = [90, 150, 210, 270, -30, 30];
            var targetAngleList = [150, 210, 270, 330, 30, 90];
            var radius = 150;
            if (this._oddCurrentIndex == 0) {
              var oddPostionChange = function oddPostionChange() {
                if (nowAngleList[0] < targetAngleList[0]) {
                  for (var i = 0; i < nowAngleList.length; i++) {
                    nowAngleList[i] = nowAngleList[i] + 5;
                  }
                  _this11.odd1.setPosition(Math.cos(nowAngleList[0] * Math.PI / 180) * radius, Math.sin(nowAngleList[0] * Math.PI / 180) * radius - 100);
                  _this11.odd2.setPosition(Math.cos(nowAngleList[1] * Math.PI / 180) * radius, Math.sin(nowAngleList[1] * Math.PI / 180) * radius - 100);
                  _this11.odd3.setPosition(Math.cos(nowAngleList[2] * Math.PI / 180) * radius, Math.sin(nowAngleList[2] * Math.PI / 180) * radius - 100);
                  _this11.odd4.setPosition(Math.cos(nowAngleList[3] * Math.PI / 180) * radius, Math.sin(nowAngleList[3] * Math.PI / 180) * radius - 100);
                  _this11.odd5.setPosition(Math.cos(nowAngleList[4] * Math.PI / 180) * radius, Math.sin(nowAngleList[4] * Math.PI / 180) * radius - 100);
                  _this11.odd6.setPosition(Math.cos(nowAngleList[5] * Math.PI / 180) * radius, Math.sin(nowAngleList[5] * Math.PI / 180) * radius - 100);
                } else {
                  _this11.odd1.getChildByName("mask").active = true;
                  _this11.odd2.getChildByName("mask").active = true;
                  _this11.odd3.getChildByName("mask").active = true;
                  _this11.odd4.getChildByName("mask").active = true;
                  _this11.odd5.getChildByName("mask").active = true;
                  _this11.unschedule(oddPostionChange);
                }
              };
              this.schedule(oddPostionChange, 0.02);
              if (slotWildBanditoProxy.result["OpenNums"][this._current_index].roundOdd > 5) {
                slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.multiUp05);
              } else {
                slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.multiUp01);
              }
              this.scheduleOnce(function () {
                _this11.odd2.getChildByName("label").getComponent(Label).string = "x" + (parseInt(_this11.odd3.getChildByName("label").getComponent(Label).string.replace(/x/g, "")) + 1);
              }, 0.5);
            } else if (this._oddCurrentIndex == 1) {
              var _oddPostionChange = function _oddPostionChange() {
                if (nowAngleList[0] < targetAngleList[0]) {
                  for (var i = 0; i < nowAngleList.length; i++) {
                    nowAngleList[i] = nowAngleList[i] + 5;
                  }
                  _this11.odd6.setPosition(Math.cos(nowAngleList[0] * Math.PI / 180) * radius, Math.sin(nowAngleList[0] * Math.PI / 180) * radius - 100);
                  _this11.odd1.setPosition(Math.cos(nowAngleList[1] * Math.PI / 180) * radius, Math.sin(nowAngleList[1] * Math.PI / 180) * radius - 100);
                  _this11.odd2.setPosition(Math.cos(nowAngleList[2] * Math.PI / 180) * radius, Math.sin(nowAngleList[2] * Math.PI / 180) * radius - 100);
                  _this11.odd3.setPosition(Math.cos(nowAngleList[3] * Math.PI / 180) * radius, Math.sin(nowAngleList[3] * Math.PI / 180) * radius - 100);
                  _this11.odd4.setPosition(Math.cos(nowAngleList[4] * Math.PI / 180) * radius, Math.sin(nowAngleList[4] * Math.PI / 180) * radius - 100);
                  _this11.odd5.setPosition(Math.cos(nowAngleList[5] * Math.PI / 180) * radius, Math.sin(nowAngleList[5] * Math.PI / 180) * radius - 100);
                } else {
                  _this11.odd1.getChildByName("mask").active = true;
                  _this11.odd2.getChildByName("mask").active = true;
                  _this11.odd3.getChildByName("mask").active = true;
                  _this11.odd4.getChildByName("mask").active = true;
                  _this11.odd6.getChildByName("mask").active = true;
                  _this11.unschedule(_oddPostionChange);
                }
              };
              this.schedule(_oddPostionChange, 0.02);
              if (slotWildBanditoProxy.result["OpenNums"][this._current_index].roundOdd > 5) {
                slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.multiUp05);
              } else {
                slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.multiUp02);
              }
              this.scheduleOnce(function () {
                _this11.odd1.getChildByName("label").getComponent(Label).string = "x" + (parseInt(_this11.odd2.getChildByName("label").getComponent(Label).string.replace(/x/g, "")) + 1);
              }, 0.5);
            } else if (this._oddCurrentIndex == 2) {
              var _oddPostionChange2 = function _oddPostionChange2() {
                if (nowAngleList[0] < targetAngleList[0]) {
                  for (var i = 0; i < nowAngleList.length; i++) {
                    nowAngleList[i] = nowAngleList[i] + 5;
                  }
                  _this11.odd5.setPosition(Math.cos(nowAngleList[0] * Math.PI / 180) * radius, Math.sin(nowAngleList[0] * Math.PI / 180) * radius - 100);
                  _this11.odd6.setPosition(Math.cos(nowAngleList[1] * Math.PI / 180) * radius, Math.sin(nowAngleList[1] * Math.PI / 180) * radius - 100);
                  _this11.odd1.setPosition(Math.cos(nowAngleList[2] * Math.PI / 180) * radius, Math.sin(nowAngleList[2] * Math.PI / 180) * radius - 100);
                  _this11.odd2.setPosition(Math.cos(nowAngleList[3] * Math.PI / 180) * radius, Math.sin(nowAngleList[3] * Math.PI / 180) * radius - 100);
                  _this11.odd3.setPosition(Math.cos(nowAngleList[4] * Math.PI / 180) * radius, Math.sin(nowAngleList[4] * Math.PI / 180) * radius - 100);
                  _this11.odd4.setPosition(Math.cos(nowAngleList[5] * Math.PI / 180) * radius, Math.sin(nowAngleList[5] * Math.PI / 180) * radius - 100);
                } else {
                  _this11.odd1.getChildByName("mask").active = true;
                  _this11.odd2.getChildByName("mask").active = true;
                  _this11.odd3.getChildByName("mask").active = true;
                  _this11.odd5.getChildByName("mask").active = true;
                  _this11.odd6.getChildByName("mask").active = true;
                  _this11.unschedule(_oddPostionChange2);
                }
              };
              this.schedule(_oddPostionChange2, 0.02);
              if (slotWildBanditoProxy.result["OpenNums"][this._current_index].roundOdd > 5) {
                slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.multiUp05);
              } else {
                slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.multiUp03);
              }
              this.scheduleOnce(function () {
                _this11.odd6.getChildByName("label").getComponent(Label).string = "x" + (parseInt(_this11.odd1.getChildByName("label").getComponent(Label).string.replace(/x/g, "")) + 1);
              }, 0.5);
            } else if (this._oddCurrentIndex == 3) {
              var _oddPostionChange3 = function _oddPostionChange3() {
                if (nowAngleList[0] < targetAngleList[0]) {
                  for (var i = 0; i < nowAngleList.length; i++) {
                    nowAngleList[i] = nowAngleList[i] + 5;
                  }
                  _this11.odd4.setPosition(Math.cos(nowAngleList[0] * Math.PI / 180) * radius, Math.sin(nowAngleList[0] * Math.PI / 180) * radius - 100);
                  _this11.odd5.setPosition(Math.cos(nowAngleList[1] * Math.PI / 180) * radius, Math.sin(nowAngleList[1] * Math.PI / 180) * radius - 100);
                  _this11.odd6.setPosition(Math.cos(nowAngleList[2] * Math.PI / 180) * radius, Math.sin(nowAngleList[2] * Math.PI / 180) * radius - 100);
                  _this11.odd1.setPosition(Math.cos(nowAngleList[3] * Math.PI / 180) * radius, Math.sin(nowAngleList[3] * Math.PI / 180) * radius - 100);
                  _this11.odd2.setPosition(Math.cos(nowAngleList[4] * Math.PI / 180) * radius, Math.sin(nowAngleList[4] * Math.PI / 180) * radius - 100);
                  _this11.odd3.setPosition(Math.cos(nowAngleList[5] * Math.PI / 180) * radius, Math.sin(nowAngleList[5] * Math.PI / 180) * radius - 100);
                } else {
                  _this11.odd1.getChildByName("mask").active = true;
                  _this11.odd2.getChildByName("mask").active = true;
                  _this11.odd4.getChildByName("mask").active = true;
                  _this11.odd5.getChildByName("mask").active = true;
                  _this11.odd6.getChildByName("mask").active = true;
                  _this11.unschedule(_oddPostionChange3);
                }
              };
              this.schedule(_oddPostionChange3, 0.02);
              if (slotWildBanditoProxy.result["OpenNums"][this._current_index].roundOdd > 5) {
                slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.multiUp05);
              } else {
                slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.multiUp04);
              }
              this.scheduleOnce(function () {
                _this11.odd5.getChildByName("label").getComponent(Label).string = "x" + (parseInt(_this11.odd6.getChildByName("label").getComponent(Label).string.replace(/x/g, "")) + 1);
              }, 0.5);
            } else if (this._oddCurrentIndex == 4) {
              var _oddPostionChange4 = function _oddPostionChange4() {
                if (nowAngleList[0] < targetAngleList[0]) {
                  for (var i = 0; i < nowAngleList.length; i++) {
                    nowAngleList[i] = nowAngleList[i] + 5;
                  }
                  _this11.odd3.setPosition(Math.cos(nowAngleList[0] * Math.PI / 180) * radius, Math.sin(nowAngleList[0] * Math.PI / 180) * radius - 100);
                  _this11.odd4.setPosition(Math.cos(nowAngleList[1] * Math.PI / 180) * radius, Math.sin(nowAngleList[1] * Math.PI / 180) * radius - 100);
                  _this11.odd5.setPosition(Math.cos(nowAngleList[2] * Math.PI / 180) * radius, Math.sin(nowAngleList[2] * Math.PI / 180) * radius - 100);
                  _this11.odd6.setPosition(Math.cos(nowAngleList[3] * Math.PI / 180) * radius, Math.sin(nowAngleList[3] * Math.PI / 180) * radius - 100);
                  _this11.odd1.setPosition(Math.cos(nowAngleList[4] * Math.PI / 180) * radius, Math.sin(nowAngleList[4] * Math.PI / 180) * radius - 100);
                  _this11.odd2.setPosition(Math.cos(nowAngleList[5] * Math.PI / 180) * radius, Math.sin(nowAngleList[5] * Math.PI / 180) * radius - 100);
                } else {
                  _this11.odd1.getChildByName("mask").active = true;
                  _this11.odd3.getChildByName("mask").active = true;
                  _this11.odd4.getChildByName("mask").active = true;
                  _this11.odd5.getChildByName("mask").active = true;
                  _this11.odd6.getChildByName("mask").active = true;
                  _this11.unschedule(_oddPostionChange4);
                }
              };
              this.schedule(_oddPostionChange4, 0.02);
              slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.multiUp05);
              this.scheduleOnce(function () {
                _this11.odd4.getChildByName("label").getComponent(Label).string = "x" + (parseInt(_this11.odd5.getChildByName("label").getComponent(Label).string.replace(/x/g, "")) + 1);
              }, 0.5);
            } else if (this._oddCurrentIndex == 5) {
              var _oddPostionChange5 = function _oddPostionChange5() {
                if (nowAngleList[0] < targetAngleList[0]) {
                  for (var i = 0; i < nowAngleList.length; i++) {
                    nowAngleList[i] = nowAngleList[i] + 5;
                  }
                  _this11.odd2.setPosition(Math.cos(nowAngleList[0] * Math.PI / 180) * radius, Math.sin(nowAngleList[0] * Math.PI / 180) * radius - 100);
                  _this11.odd3.setPosition(Math.cos(nowAngleList[1] * Math.PI / 180) * radius, Math.sin(nowAngleList[1] * Math.PI / 180) * radius - 100);
                  _this11.odd4.setPosition(Math.cos(nowAngleList[2] * Math.PI / 180) * radius, Math.sin(nowAngleList[2] * Math.PI / 180) * radius - 100);
                  _this11.odd5.setPosition(Math.cos(nowAngleList[3] * Math.PI / 180) * radius, Math.sin(nowAngleList[3] * Math.PI / 180) * radius - 100);
                  _this11.odd6.setPosition(Math.cos(nowAngleList[4] * Math.PI / 180) * radius, Math.sin(nowAngleList[4] * Math.PI / 180) * radius - 100);
                  _this11.odd1.setPosition(Math.cos(nowAngleList[5] * Math.PI / 180) * radius, Math.sin(nowAngleList[5] * Math.PI / 180) * radius - 100);
                } else {
                  _this11.odd2.getChildByName("mask").active = true;
                  _this11.odd3.getChildByName("mask").active = true;
                  _this11.odd4.getChildByName("mask").active = true;
                  _this11.odd5.getChildByName("mask").active = true;
                  _this11.odd6.getChildByName("mask").active = true;
                  _this11.unschedule(_oddPostionChange5);
                }
              };
              slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.multiUp05);
              this.schedule(_oddPostionChange5, 0.02);
              this.scheduleOnce(function () {
                _this11.odd3.getChildByName("label").getComponent(Label).string = "x" + (parseInt(_this11.odd4.getChildByName("label").getComponent(Label).string.replace(/x/g, "")) + 1);
              }, 0.5);
            }
            this._oddCurrentIndex == 5 ? this._oddCurrentIndex = 0 : this._oddCurrentIndex += 1;
            this._isFree ? this.odd_spine.setAnimation(0, "free_1to2_spin", false) : this.odd_spine.setAnimation(0, "normal_1to2_spin", false);
            this.odd_spine.setCompleteListener(function () {
              _this11.odd_spine.setCompleteListener(null);
              _this11._isFree ? _this11.odd_spine.setAnimation(0, "free_1_win", false) : _this11.odd_spine.setAnimation(0, "normal_1_win", false);
              _this11.odd_spine.setCompleteListener(function () {
                _this11.odd_spine.setCompleteListener(null);
                _this11._isFree ? _this11.odd_spine.setAnimation(0, "free_1_idle", false) : _this11.odd_spine.setAnimation(0, "normal_1_idle", false);
              });
            });
          }
        }
        //进入免费模式初始页
        ;

        _proto.enterFreeMode = function enterFreeMode() {
          var _this12 = this;
          this.run_box.getComponent(slotWildBanditoRun).scatterWin();
          this.scheduleOnce(function () {
            _this12.run_box.getComponent(slotWildBanditoRun).scatterNormal();
          }, 1.5);
          this.scheduleOnce(function () {
            _this12.hideWindow();
            _this12._isInitReadyIntoFree = false;
            _this12._startFreeTime = 5;
            AudioManager.instance.stopAllEffect();
            slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.fsTrans);
            slotWildBanditoDef.palyMusic(slotWildBanditoDef.audio.bgm_fs);
            _this12.enter_free_time.setScale(0, 0);
            _this12.enter_free_btn.setScale(0, 0);
            _this12.enter_free_btn_name.setScale(0, 0);
            _this12.enter_free_time.getComponent(Label).string = slotWildBanditoProxy.result.freeInfo.surplusFreeCount + "";
            if (slotWildBanditoProxy.result["OpenNums"][slotWildBanditoProxy.result["OpenNums"].length - 1]["roundOdd"] == 1) {
              _this12.oddChange(true);
            } else {
              _this12.oddChange(true, slotWildBanditoProxy.result["OpenNums"][slotWildBanditoProxy.result["OpenNums"].length - 1]["roundOdd"]);
            }

            //this.enter_free_btn_spine.node.setScale(0, 0)
            _this12.enter_free.active = true;
            _this12.enter_free_spine.node.active = true;
            _this12.enter_free_spine.setAnimation(0, "intro", false);
            _this12.enter_free_spine.setCompleteListener(function () {
              _this12.enter_free_spine.setCompleteListener(null);
              _this12.enter_free_spine.setAnimation(0, "idle", true);
            });
            _this12.scheduleOnce(function () {
              tween(_this12.enter_free_btn).to(0.2, {
                scale: v3(1.3, 1.3, 1)
              }).start();
              tween(_this12.enter_free_time).to(0.2, {
                scale: v3(1, 1, 1)
              }).start();
              tween(_this12.enter_free_btn_name).to(0.2, {
                scale: v3(1.1, 1.1, 1)
              }).start();
              //cc.tween(this.enter_free_btn_spine.node).to(0.2, { scale: cc.v3(1.4, 1.4, 1) }).start()
            }, 0.2);
          }, 2);
        }
        //进入免费游戏
        ;

        _proto.enterFreePage = function enterFreePage() {
          var _this13 = this;
          this._startFreeTime = 0;
          this.topBg.getComponent(Sprite).spriteFrame = this.bgList[1];
          this.enter_free.active = false;
          this.enter_free_spine.node.active = false;
          this.free_lazhu.active = true;
          this.odd_spine.setAnimation(0, "free_1_idle");
          this.fire_spine.setAnimation(0, "free_idle", true);
          this.bg_bot_normal.active = false;
          this.bg_bot_free.active = true;
          this.turn_normal_box.active = false;
          this.turn_free_box.active = true;
          this.turn_normal_bg.active = false;
          this.turn_spe_bg.active = true;
          if (slotWildBanditoProxy.result) {
            this.setFreeCount(slotWildBanditoProxy.result.freeInfo.surplusFreeCount);
          }
          this.scheduleOnce(function () {
            _this13.changeState(RunState.NORMAL);
            _this13._lock = false;
            _this13._isFree = true;
            _this13._isShowThirdLight = true;
          }, 0.5);
        }
        //进入结束免费模式页面
        ;

        _proto.endFree = function endFree() {
          var _this14 = this;
          this.free_end_cash.reset(0);
          this.topBg.getComponent(Sprite).spriteFrame = this.bgList[0];
          this.free_lazhu.active = false;
          this.odd_spine.setAnimation(0, "normal_1_idle");
          this.fire_spine.setAnimation(0, "normal_idle", true);
          this.free_end_time.getComponent(Label).string = slotWildBanditoProxy.result.freeInfo.totalFreePrizeCount + "";
          this.free_end_time.setScale(v3(0, 0, 0));
          this.free_end_cash.node.setScale(v3(0, 0, 0));
          this.bg_bot_normal.active = true;
          this.bg_bot_free.active = false;
          this.turn_normal_box.active = true;
          this.turn_free_box.active = false;
          this.turn_normal_bg.active = true;
          this.turn_spe_bg.active = false;
          this._isFree = false;
          this.oddChange(true);
          this.free_end.active = true;
          this.free_end_spine.node.active = true;
          this.free_end_spine.setAnimation(0, "intro", false);
          this.scheduleOnce(function () {
            tween(_this14.free_end_time).to(0.3, {
              scale: v3(1, 1, 1)
            }).start();
            tween(_this14.free_end_cash.node).to(0.3, {
              scale: v3(1, 1, 1)
            }).start();
          }, 0.2);
          this.free_end_spine.addAnimation(0, "idle", true);
          this.free_end_cash.string = Common.numFormat(slotWildBanditoProxy.freeTotalWin + "");
          this.free_end_btn.setScale(0, 0);
          this.free_end_btn_name.setScale(0, 0);
          //this.free_end_btn_spine.node.setScale(0, 0)

          //头部金额设置成免费模式总金额
          this.changeAdBg(slotWildBanditoProxy.freeTotalWin);
          this.all_win_number.reset(slotWildBanditoProxy.freeTotalWin);

          //免费模式结束音乐
          slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.bgm_totalwin_main, function (id) {
            _this14._audioId = id;
            _this14.scheduleOnce(function () {
              AudioManager.instance.stopSound(id);
              slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.bgm_totalwin_end, function (id) {
                _this14._audioId = id;
              });
            }, 3);
          });
          this.scheduleOnce(function () {
            tween(_this14.free_end_cash.node).to(0.2, {
              scale: v3(1.2, 1.2, 1)
            }).start();
            tween(_this14.free_end_btn).to(0.2, {
              scale: v3(1.3, 1.3, 1)
            }).call(function () {
              _this14._endFreeTime = 5;
            }).start();
            tween(_this14.free_end_btn_name).to(0.2, {
              scale: v3(1.1, 1.1, 1)
            }).start();
            // cc.tween(this.free_end_btn_spine.node).to(0.2, { scale: cc.v3(1.4, 1.4, 1) }).call(() => {
            //     this._endFreeTime = 5
            // }).start()
          }, 1.3);
        }

        //免费模式结束进入到普通模式
        ;

        _proto.endNormal = function endNormal() {
          if (slotWildBanditoProxy.freeTotalWin > 0) {
            this.all_win.active = true;
            this.all_win_number.reset(slotWildBanditoProxy.freeTotalWin);
            this.txt_win.reset(slotWildBanditoProxy.freeTotalWin);
            this.notice_bg.active = false;
          } else {
            this.txt_win.reset(0);
            this.notice_bg.active = true;
            this.all_win.active = false;
          }
          this.txt_winFree.reset(0);
          AudioManager.instance.stopAllEffect();
          slotWildBanditoDef.palyMusic(slotWildBanditoDef.audio.bgm_mg);
          this.free_end.active = false;
          this._endFreeTime = 0;
          this._lock = false;
          this.changeState(RunState.NORMAL);
          slotWildBanditoProxy.freeTotalWin = 0;
          this.startGameAni(false);
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
        _proto.allEnd = function allEnd(isBigWinEnd) {
          var _this15 = this;
          if (isBigWinEnd === void 0) {
            isBigWinEnd = false;
          }
          if (this._isFree && slotWildBanditoProxy.result.freeInfo.surplusFreeCount != this._freeLastTime) {
            this.setFreeCount(slotWildBanditoProxy.result.freeInfo.surplusFreeCount);
          }
          if (isBigWinEnd) {
            console.log("大奖动画结束");
            //大奖金额到达目标或点击大奖动画
            this.scheduleOnce(function () {
              _this15._isEndBigWin = false;
              _this15._win_totalMoney = 0;
              _this15._current_index = 0;
              _this15._cal_current_result = {
                result: null,
                scatterNum: 0,
                showLineIndex: 0,
                win: []
              };
              _this15.changeBtnActive(true);
              _this15.updateGoldData();
              if (!_this15._isFree && !_this15._auto) {
                _this15.turn_start.setAnimation(0, "idle", true);
              }
              if (!_this15._isFree && slotWildBanditoProxy.result.freeInfo.surplusFreeCount > 0) {
                _this15.enterFreeMode();
              } else {
                if (_this15._isFree && slotWildBanditoProxy.result.freeInfo.surplusFreeCount == 0) {
                  //结束免费模式
                  _this15.scheduleOnce(function () {
                    _this15.endFree();
                  }, 0.3);
                } else {
                  _this15._lock = false;
                  _this15.changeState(RunState.NORMAL);
                }
              }
            }, 0);
          } else {
            if (this._win_totalMoney > 0) {
              this.changeTopTotalCash();
              this._isShowThirdLight = true;
            } else {
              this._isShowThirdLight = false;
            }
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
              this.big_win.setAnimation(0, aniname + "intro", false);
              this.big_win.addAnimation(0, aniname + "idle", true);
            }
            if (odd >= 50) {
              this.big_win_box.active = true;
              aniname = "superwin_";
              this.big_win_txt.stepCount = BIG_WIN_TIME3 * 30;
              this.big_win.setAnimation(0, aniname + "intro", false);
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
              this.scheduleOnce(function () {
                _this15._isEndBigWin = false;
                _this15._win_totalMoney = 0;
                _this15._current_index = 0;
                _this15._cal_current_result = {
                  result: null,
                  scatterNum: 0,
                  showLineIndex: 0,
                  win: []
                };
                _this15.changeBtnActive(true);
                _this15.updateGoldData();
                if (!_this15._isFree && !_this15._auto) {
                  _this15.turn_start.setAnimation(0, "idle", true);
                }
                if (!_this15._isFree && slotWildBanditoProxy.result.freeInfo.surplusFreeCount > 0) {
                  _this15.enterFreeMode();
                } else {
                  if (_this15._isFree && slotWildBanditoProxy.result.freeInfo.surplusFreeCount == 0) {
                    //结束免费模式
                    _this15.scheduleOnce(function () {
                      _this15.endFree();
                    }, 0.3);
                  } else {
                    _this15._lock = false;
                    _this15.changeState(RunState.NORMAL);
                  }
                }
              }, time);
            } else {
              console.log("结束，播放大奖");
              slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.bgm_bigwin_main, function (id) {
                _this15._audioId = id;
              });
            }
          }
        };
        _proto.initPage = function initPage(data) {
          var _this16 = this;
          if (data && data.OpenNums) {
            var lastWin = 0;
            data.OpenNums.map(function (item) {
              lastWin += item.prizeAmount;
            });
            this.txt_win.reset(lastWin);
            slotWildBanditoProxy.result = data;
            this._cal_current_result.result = [[], [], [], [], []];
            slotWildBanditoProxy.result["OpenNums"][slotWildBanditoProxy.result["OpenNums"].length - 1]["openNum"].map(function (item, index) {
              if (index < 4) {
                _this16._cal_current_result.result[0].push(item);
              } else if (index < 8) {
                _this16._cal_current_result.result[1].push(item);
              } else if (index < 12) {
                _this16._cal_current_result.result[2].push(item);
              } else if (index < 16) {
                _this16._cal_current_result.result[3].push(item);
              } else {
                _this16._cal_current_result.result[4].push(item);
              }
            });
            this.run_box.getComponent(slotWildBanditoRun).initPage(this._cal_current_result.result);
            if (!this._isFree && data.freeInfo.surplusFreeCount > 0) {
              this._isInitReadyIntoFree = true;
              this.txt_winFree.getComponent(Label).string = Common.numFormat(data.freeInfo["totalFreePrizeAmount"] + "");
              slotWildBanditoProxy.freeTotalWin = data.freeInfo["totalFreePrizeAmount"];
              this.enterFreeMode();
            } else {
              slotWildBanditoDef.palyMusic(slotWildBanditoDef.audio.bgm_mg);
            }
          } else {
            this._isError = true;
          }
        }

        //点击直接结束大奖动画
        ;

        _proto.clickHideBigWin = function clickHideBigWin() {
          var _this17 = this;
          if (!this._isTrueBigWin) return;
          this._isTrueBigWin = true;
          this.big_win_txt.reset(this._win_totalMoney);
          // let odd = this._win_totalMoney / this._bet;
          // if (odd >= 20 && odd < 30) {
          //     this.big_win.addAnimation(0, "bigwin_idle", true)
          // } else if (odd >= 30 && odd < 50) {
          //     this.big_win.addAnimation(0, "megawin_idle", true)
          // } else if (odd >= 50) {
          //     this.big_win.addAnimation(0, "superwin_idle", true)
          // }
          this.scheduleOnce(function () {
            _this17.big_win_txt.reset();
            _this17.big_win_box.active = false;
            _this17.big_win.setAnimation(0, "", true);
            _this17.allEnd(true);
            console.log("clickHideBigWin");

            // AudioManager.instance.stopSound(this._audioId);
            // this._audioId = null
          }, 1);
        }

        //事件监听
        ;

        _proto.initEvent = function initEvent() {
          var _this18 = this;
          //进入页面获取上次数据
          slotWildBanditoProxy.on(slotWildBanditoGameEvent.UPDATE_BETLIST, this.initPage, this);
          slotWildBanditoProxy.on(slotWildBanditoGameEvent.SELECT_BET, function (count) {
            _this18.updateSetData();
            Tween.stopAllByTarget(_this18.txt_bet.node);
            tween(_this18.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }, this);

          // //第一轮结束
          slotWildBanditoProxy.on(slotWildBanditoGameEvent.END, function () {
            _this18.changeState(RunState.STOP);
          }, this);

          //中奖后号码补充
          slotWildBanditoProxy.on(slotWildBanditoGameEvent.SHOWNEXT, function () {
            _this18.changeState(RunState.SHOWNEXT);
          }, this);

          //补充新一轮号码结束
          slotWildBanditoProxy.on(slotWildBanditoGameEvent.SHOWNEXTEND, function () {
            _this18.changeState(RunState.SHOWNEXTEND);
          }, this);

          // //转盘提示
          slotWildBanditoProxy.on(slotWildBanditoGameEvent.CLICK_ITEM, function (data) {
            if (_this18._isFree) return;
            if (_this18._auto) return;
            if (_this18._lock) return;
            _this18._window.node.scale = v3(1, 1, 1);
            _this18._window.node.active = true;
            _this18._window.showCard(data._cardData.num, data._parentIndex);
            _this18.window_run_mask.active = true;
            _this18.windowMask.active = true;
            var pos = data.pos;
            pos = _this18.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
            if (data._cardData.num == 10 || data._cardData.num == 11) {
              if (data._parentIndex <= 2) {
                pos.x = pos.x + 110;
              } else {
                pos.x = pos.x - 110;
              }
            } else {
              if (data._parentIndex <= 2) {
                pos.x = pos.x + 70;
              } else {
                pos.x = pos.x - 70;
              }
            }
            _this18._window.node.setPosition(pos.x, pos.y);
          }, this);

          //修改下注金额
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.on(ConfigManager.eventTransform.setQuick, this.clickChangeQuick, this);
        };
        _proto.calResult = function calResult(call) {
          var _this19 = this;
          this._cal_current_result.scatterNum = 0;
          this._cal_current_result.showLineIndex = 0;
          this._cal_current_result.result = [[], [], [], [], []];
          var openNum = slotWildBanditoProxy.result["OpenNums"][this._current_index]["openNum"];
          var prizeIdx = slotWildBanditoProxy.result["OpenNums"][this._current_index]["prizeIdx"];
          //针对第一轮的每束的期待动画和全局的期待动画
          if (this._current_index == 0) {
            openNum.map(function (item, index) {
              if (index < 4) {
                _this19._cal_current_result.result[0].push(item);
              } else if (index < 8) {
                _this19._cal_current_result.result[1].push(item);
              } else if (index < 12) {
                _this19._cal_current_result.result[2].push(item);
              } else if (index < 16) {
                _this19._cal_current_result.result[3].push(item);
              } else {
                _this19._cal_current_result.result[4].push(item);
              }
            });
            this._cal_current_result.result.map(function (item, index) {
              item.map(function (item1, index1) {
                if (item1.num == "10") {
                  _this19._cal_current_result.scatterNum += 1;
                  if (_this19._cal_current_result.scatterNum == 2) {
                    _this19._cal_current_result.showLineIndex = index + 1;
                  }
                }
              });
            });
          } else {
            openNum.map(function (item, index) {
              if (index < 4) {
                _this19._cal_current_result.result[0].push(item);
              } else if (index < 8) {
                _this19._cal_current_result.result[1].push(item);
              } else if (index < 12) {
                _this19._cal_current_result.result[2].push(item);
              } else if (index < 16) {
                _this19._cal_current_result.result[3].push(item);
              } else {
                _this19._cal_current_result.result[4].push(item);
              }
            });
            //不是第一轮，计算上一轮一共多少satter，确定这一轮是否展示全局期待动画
            slotWildBanditoProxy.result["OpenNums"][this._current_index - 1]["openNum"].map(function (item, index) {
              if (item.num == "10") {
                _this19._cal_current_result.scatterNum += 1;
              }
            });
          }
          this._cal_current_result.win = [];
          if (prizeIdx) {
            prizeIdx.map(function (item) {
              item.map(function (item1) {
                var childIndex = 0,
                  parentIndex = 0;
                parentIndex = Math.floor(item1 / 4);
                childIndex = item1 % 4;
                _this19._cal_current_result.win.push({
                  parentIndex: parentIndex,
                  childIndex: childIndex + 1
                }); //计算的是按照每竖有4个，其实每竖有5个
              });
            });
          }

          call && call();
        }

        //获取第一个展示的图标（数组）
        ;

        _proto.getTopResult = function getTopResult() {
          var _this20 = this;
          this._topData = [[], [], [], [], []];
          if (slotWildBanditoProxy.result["OpenNums"][this._current_index + 1]) {
            var _loop = function _loop(i) {
              var data = slotWildBanditoProxy.result["OpenNums"][i];
              if (data.prizeIdx) {
                var prizeIdx = [];
                prizeIdx = Array.from(new Set(data.prizeIdx.flat()));
                var prizeIdxSetTeam = [[], [], [], [], []];
                for (var k = 0; k < prizeIdx.length; k++) {
                  if (slotWildBanditoProxy.result["OpenNums"][i]["openNum"][parseInt(prizeIdx[k])]["type"] == 0) {
                    if (parseInt(prizeIdx[k]) < 4) {
                      prizeIdxSetTeam[0].push(parseInt(prizeIdx[k]));
                    } else if (parseInt(prizeIdx[k]) < 8) {
                      prizeIdxSetTeam[1].push(parseInt(prizeIdx[k]));
                    } else if (parseInt(prizeIdx[k]) < 12) {
                      prizeIdxSetTeam[2].push(parseInt(prizeIdx[k]));
                    } else if (parseInt(prizeIdx[k]) < 16) {
                      prizeIdxSetTeam[3].push(parseInt(prizeIdx[k]));
                    } else {
                      prizeIdxSetTeam[4].push(parseInt(prizeIdx[k]));
                    }
                  }
                }
                prizeIdxSetTeam.map(function (item, index) {
                  if (item.length > 0) {
                    var openNumIndex = index == 0 ? 0 : index == 1 ? 4 : index == 2 ? 8 : index == 3 ? 12 : 16;
                    _this20._topData[index].push(slotWildBanditoProxy.result["OpenNums"][i + 1]["openNum"][openNumIndex + item.length - 1]);
                  }
                });
              }
            };
            for (var i = 0; i < slotWildBanditoProxy.result["OpenNums"].length; i++) {
              _loop(i);
            }
            for (var _i = 0; _i < 5; _i++) {
              this._topData[_i].push({
                num: Math.floor(Math.random() * 9) + 1,
                type: this._isFree && _i == 2 ? 1 : 0
              });
            }
          } else {
            //没有下一轮，可以随机设置
            for (var _i2 = 0; _i2 < 5; _i2++) {
              this._topData[_i2].push({
                num: Math.floor(Math.random() * 9) + 1,
                type: this._isFree && _i2 == 2 ? 1 : 0
              });
            }
          }
        }

        //普通模式开启游戏按钮动画
        ;

        _proto.startGameAni = function startGameAni(isMove) {
          var _this21 = this;
          if (this._auto) return;
          if (this._isFree) return;
          if (isMove) {
            this.turn_start.setAnimation(0, "spin", false);
            this.turn_start.setCompleteListener(function () {
              _this21.turn_start.setCompleteListener(null);
              if (slotWildBanditoProxy.result && slotWildBanditoProxy.result.prizeAmount > 0) {
                _this21.turn_start.setAnimation(0, "stop", true);
              } else {
                if (_this21._lock) {
                  _this21.turn_start.timeScale = 200;
                } else {
                  _this21.turn_start.timeScale = 1;
                }
                _this21.turn_start.setAnimation(0, "idle", true);
              }
            });
          } else {
            this.turn_start.timeScale = 1;
            this.turn_start.setAnimation(0, "idle", true);
          }
        }

        //隐藏介绍图
        ;

        _proto.hideWindow = function hideWindow() {
          this.windowMask.active = false;
          this.window_run_mask.active = false;
          this._window.hideCard();
        }

        //自动下单回调
        ;

        _proto.setAuto = function setAuto(times) {
          var _this22 = this;
          this._autoTimes = times;
          this.turn_auto_leftCount.string = "" + this._autoTimes;
          if (times > 0) {
            this.changeBtnActive(false);
            this._auto = true;
            this.turn_start.getComponent(AddSpineEffect).animation = "push2";
            this.turn_start.setAnimation(0, "auto", true);
            this.scheduleOnce(function () {
              _this22.turn_start.setAnimation(0, "auto", true);
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
            if (slotWildBanditoProxy.getBet() == 2000) {
              this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 60;
              this._isMinBet = true;
            } else {
              this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
              this._isMinBet = false;
            }
            if (slotWildBanditoProxy.getBet() == 1000000) {
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
          this._bet = slotWildBanditoProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet + "");
          this.txt_betFree.string = Common.numFormat(this._bet + "");
        }
        //更新下注金额
        ;

        _proto.setBet = function setBet(betListIndex, betCount) {
          slotWildBanditoProxy.setBet(betListIndex, betCount);
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
          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetBaseByGreen", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1900, 1080 / 1900, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneSetBase).setData({
              _curBetListIndex: slotWildBanditoProxy._curBetListIndex,
              _curBetCount: slotWildBanditoProxy._curBetCount,
              betMaxCount: slotWildBanditoProxy.betMaxCount,
              betList: slotWildBanditoProxy.betList,
              betRate: slotWildBanditoProxy.betRate
            });
          }, true);
        }
        //按钮减少下注金额
        ;

        _proto.clickDownBet = function clickDownBet() {
          if (this._isMinBet) return;
          if (this._auto) return;
          if (this._lock) return;
          slotWildBanditoProxy._curBetCount--;
          if (slotWildBanditoProxy._curBetCount < 0) {
            slotWildBanditoProxy._curBetListIndex--;
            if (slotWildBanditoProxy._curBetListIndex < 0) {
              slotWildBanditoProxy._curBetListIndex++;
              slotWildBanditoProxy._curBetCount++;
            } else {
              slotWildBanditoProxy._curBetCount = slotWildBanditoProxy.betMaxCount - 1;
              slotWildBanditoProxy.setBet(slotWildBanditoProxy._curBetListIndex, slotWildBanditoProxy._curBetCount);
            }
          } else {
            slotWildBanditoProxy.setBet(slotWildBanditoProxy._curBetListIndex, slotWildBanditoProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //按钮增加下注金额
        ;

        _proto.clickUpBet = function clickUpBet() {
          if (this._auto) return;
          if (this._lock) return;
          slotWildBanditoProxy._curBetCount++;
          if (slotWildBanditoProxy._curBetCount >= slotWildBanditoProxy.betMaxCount) {
            slotWildBanditoProxy._curBetListIndex++;
            if (slotWildBanditoProxy._curBetListIndex >= slotWildBanditoProxy.betList.length) {
              slotWildBanditoProxy._curBetListIndex--;
              slotWildBanditoProxy._curBetCount--;
            } else {
              slotWildBanditoProxy._curBetCount = 0;
              slotWildBanditoProxy.setBet(slotWildBanditoProxy._curBetListIndex, slotWildBanditoProxy._curBetCount);
            }
          } else {
            slotWildBanditoProxy.setBet(slotWildBanditoProxy._curBetListIndex, slotWildBanditoProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //确定下注金额是否可以减少/增加
        ;

        _proto.checkDownOrUpBet = function checkDownOrUpBet() {
          if (slotWildBanditoProxy.getBet() == 2000) {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 60;
            this._isMinBet = true;
          } else {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
            this._isMinBet = false;
          }
          if (slotWildBanditoProxy.getBet() == 1000000) {
            this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 60;
          } else {
            this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 255;
          }
        }
        //展示自动下注弹出框
        ;

        _proto.clickShowAutoBet = function clickShowAutoBet() {
          var _this23 = this;
          if (this._lock) return;
          if (this._isInitReadyIntoFree) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._bet) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.setAuto(0);
            return;
          }
          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetAutoByGreen", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1900, 1080 / 1900, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneSetAutoByGreen).setData({
              gold: parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)),
              bet: _this23._bet,
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
          Common.returnToHall(this, slotWildBanditoProxy.BUNDLE);
        }
        //展示规则
        ;

        _proto.clickShowRule = function clickShowRule() {
          if (this._isInitReadyIntoFree) return;
          Common.loadPopBuddle("prefab/slotWildBanditoHelp", slotWildBanditoProxy.bundle, function () {}, function (prefab) {
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
            node.getComponent(FortuneHistory).setGameType("slotWildBandito");
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
            node.getComponent(FortuneRank).send("slotWildBandito");
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

        return slotWildBanditoView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab_windowItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "topBg", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "windowMask", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "normalBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "moreBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "game_type", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "notice_spine", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "notice_bg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "run_box", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "window_run_mask", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "one_win", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "all_win", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "all_win_number", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "odd_spine", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "odd1", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "odd2", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "odd3", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "odd4", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "odd5", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "odd6", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "big_win_box", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "big_win", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "big_win_txt", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "txt_betFree", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "txt_winFree", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "txt_goldFree", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "turn_start", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "turn_auto_leftCount", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "enter_free", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_spine", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_time", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_btn", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_btn_name", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "free_end", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "free_end_spine", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "free_end_cash", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "free_end_btn", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "free_end_btn_name", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "free_end_time", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "turn_normal_box", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box_last", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box_noLast", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box_time", [_dec51], {
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
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "fire_spine", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "free_lazhu", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "turn_normal_bg", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "turn_spe_bg", [_dec57], {
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

System.register("chunks:///_virtual/slotWildBanditoWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "f407bGO23BF4LutvapnrVEY", "slotWildBanditoWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /*
      Blank   int = 0 //空白,被消除占位
      Robber  int = 1 //强盗
      Guitar  int = 2 //吉他
      Tea     int = 3 //柠檬茶
      Hammer  int = 4 //沙锤
      A       int = 5
      K       int = 6
      Q       int = 7
      J       int = 8
      Ten     int = 9
      Scatter int = 10 //特殊符号 免费
      Wild    int = 11 //万能
        */

      var betList = [[50, 25, 10], [40, 20, 8], [30, 15, 6], [15, 10, 5], [12, 5, 3], [12, 5, 3], [10, 4, 2], [6, 3, 1], [6, 3, 1]];
      var content1 = '3 biểu tượng Scatter sẽ kích hoạt vòng quay miễn phí.';
      var content2 = 'Biểu tượng Wild thay thế cho tất cả c ác biểu tượng trừ các biểu tượng Scatter.';
      var slotWildBanditoWindow = exports('slotWildBanditoWindow', (_dec = ccclass('slotWildBanditoWindow'), _dec2 = property(SpriteFrame), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotWildBanditoWindow, _Component);
        function slotWildBanditoWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "icon_list", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "left", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "left_wild", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "left_scatter", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right_wild", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right_scatter", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = slotWildBanditoWindow.prototype;
        _proto.showCard = function showCard(sym, postion) {
          console.log(sym, postion, 'position');
          this.left.getChildByName('icon').active = false;
          this.left.getChildByName('odd').active = false;
          this.left.getChildByName('content').active = false;
          this.left_wild.node.active = false;
          this.left_scatter.node.active = false;
          this.right.getChildByName('icon').active = false;
          this.right.getChildByName('odd').active = false;
          this.right.getChildByName('content').active = false;
          this.right_wild.node.active = false;
          this.right_scatter.node.active = false;
          if (postion <= 2) {
            this.left.active = true;
            this.right.active = false;
            this.cardDetail(sym, 'left');
          } else {
            this.left.active = false;
            this.right.active = true;
            this.cardDetail(sym, 'right');
          }
        };
        _proto.cardDetail = function cardDetail(sym, postion) {
          var target = null;
          if (postion == 'left') {
            target = this.left;
          } else {
            target = this.right;
          }
          if (sym == 10) {
            target.getChildByName('bg').getComponent(UITransform).width = 400;
            target.setScale(0.75, 0.75);
            if (postion == 'left') {
              this.left_scatter.node.active = true;
              this.left_scatter.setAnimation(0, 'idle', true);
            } else {
              this.right_scatter.node.active = true;
              this.right_scatter.setAnimation(0, 'idle', true);
            }
            target.getChildByName('content').getComponent(Label).string = content1;
            target.getChildByName('content').active = true;
          } else if (sym == 11) {
            target.getChildByName('bg').getComponent(UITransform).width = 400;
            target.setScale(0.75, 0.75);
            if (postion == 'left') {
              this.left_wild.node.active = true;
              this.left_wild.setAnimation(0, 'idle', true);
            } else {
              this.right_wild.node.active = true;
              this.right_wild.setAnimation(0, 'idle', true);
            }
            target.getChildByName('content').getComponent(Label).string = content2;
            target.getChildByName('content').active = true;
          } else {
            target.getChildByName('bg').getComponent(UITransform).width = 300;
            target.setScale(0.75, 0.75);
            target.getChildByName('icon').active = true;
            target.getChildByName('odd').active = true;
            target.getChildByName('odd').getChildByName('odd2').getComponent(Label).string = betList[sym - 1][0];
            target.getChildByName('odd').getChildByName('odd3').getComponent(Label).string = betList[sym - 1][1];
            target.getChildByName('odd').getChildByName('odd4').getComponent(Label).string = betList[sym - 1][2];
            target.getChildByName('icon').getComponent(Sprite).spriteFrame = this.icon_list[sym - 1];
          }
        };
        _proto.hideCard = function hideCard() {
          this.node.active = false;
        };
        return slotWildBanditoWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon_list", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "left_wild", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "left_scatter", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "right_wild", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "right_scatter", [_dec8], {
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
  r('virtual:///prerequisite-imports/slotWildBanditoGame', 'chunks:///_virtual/slotWildBanditoGame'); 
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