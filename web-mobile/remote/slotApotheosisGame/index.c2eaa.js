System.register("chunks:///_virtual/slotApotheosisDef.ts", ['cc', './slotApotheosisProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, AudioClip, slotApotheosisProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      slotApotheosisProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9663bF88tVIkJvxt55H61t1", "slotApotheosisDef", undefined);
      var slotApotheosisDef = exports('slotApotheosisDef', /*#__PURE__*/function () {
        function slotApotheosisDef() {}
        slotApotheosisDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = slotApotheosisProxy.bundle;
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
        slotApotheosisDef.palyMusic = function palyMusic(name) {
          var bundle = slotApotheosisProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return slotApotheosisDef;
      }());
      slotApotheosisDef.audio = {
        main: 'main',
        //普通模式时播放的背景音乐 1
        Bonus: 'BONUS',
        //免费模式时播放的背景音乐 1
        BonusGame_Start: 'BonusGame_Start',
        //进入免费模式前，配合流星下落出现宫殿动画时播放 1
        BonusGame_End: 'BonusGame_End',
        //免费模式结束时，配合congratulation卷轴动画时播放 1
        SH_Line_special: 'SH_Line_special',
        //旋转出现6个免费图标闪缩时播放 1
        NearWin: 'NearWin',
        //配合期待出现最后一个免费符号时播放 1
        Combo1: 'Combo1',
        //消除1次音效
        Combo2: 'Combo2',
        //消除1次音效
        Combo3: 'Combo3',
        //消除1次音效
        Combo4: 'Combo4',
        //消除1次音效
        Combo5: 'Combo5',
        //消除1次音效
        Combo6: 'Combo6',
        //消除1次音效
        Combo7: 'Combo7',
        //消除1次音效
        Combo8: 'Combo8',
        //消除1次音效
        Combo9: 'Combo9',
        //消除1次音效
        Combo10: 'Combo10',
        //消除1次音效
        M_FreeSpin_stop01: 'M_FreeSpin_stop01',
        //旋转出现第1个免费图标时播放 1
        M_FreeSpin_stop02: 'M_FreeSpin_stop02',
        //旋转出现第2个免费图标时播放 1
        M_FreeSpin_stop03: 'M_FreeSpin_stop03',
        //旋转出现第3个免费图标时播放 1
        M_FreeSpin_stop04: 'M_FreeSpin_stop04',
        //旋转出现第4个免费图标时播放 1
        M_FreeSpin_stop05: 'M_FreeSpin_stop05',
        //旋转出现第5个免费图标时播放 1
        RC_Reel_stop: 'RC_Reel_stop',
        //每一轴停止旋转时播放 1
        Spin: 'Spin',
        //点击旋转按钮时播放 1
        Symbol3: 'Symbol3',
        //姜子牙图标消除时播放 1
        SymbolFarme: 'SymbolFarme',
        //图标消除时播放 1
        WildBome: 'WildBome',
        //免费模式中，人物图标变换成WILD图标成功时播放 1
        WildBome1: 'WildBome1',
        //免费模式中，WILD图标光效飞向顶部倍数时播放 1
        WildBome2: 'WildBome2',
        //免费模式中，倍数增加时播放 1
        wildFake: 'wildFake',
        //免费模式中，人物图标变换成WILD图标失败时播放 
        Common_coin_medium: 'Common_coin_medium' //金币大奖飞起时播放 1
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotApotheosisGame", ['./slotApotheosisDef.ts', './slotApotheosisItem.ts', './slotApotheosisProxy.ts', './slotApotheosisRun.ts', './slotApotheosisScene.ts', './slotApotheosisSetBase.ts', './slotApotheosisUtils.ts', './slotApotheosisView.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/slotApotheosisItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Node, v3, Component;
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
      Node = module.Node;
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8b700gpxMlCEIJWqlSoNAZZ", "slotApotheosisItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var slotApotheosisItem = exports('slotApotheosisItem', (_dec = ccclass('slotApotheosisItem'), _dec2 = property(sp.Skeleton), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotApotheosisItem, _Component);
        function slotApotheosisItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /*
          姜子牙 1 妲己 2 二郎神 3 哪咤 4
          a 5 k 6 q 7 j 8 bonus 9 wild 10
          */
          _initializerDefineProperty(_this, "item_Skeleton", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "myBg", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = slotApotheosisItem.prototype;
        _proto.start = function start() {};
        _proto.initItemCard = function initItemCard(item) {
          if (item == 1) {
            this.item_Skeleton.setAnimation(0, 'jiangziya_idle', false);
          } else if (item == 2) {
            this.item_Skeleton.setAnimation(0, 'daji_idle', false);
          } else if (item == 3) {
            this.item_Skeleton.setAnimation(0, 'yangjian_idle', false);
          } else if (item == 4) {
            this.item_Skeleton.setAnimation(0, 'neza_idle', false);
          } else if (item == 5) {
            this.item_Skeleton.setAnimation(0, 'a_idle', false);
          } else if (item == 6) {
            this.item_Skeleton.setAnimation(0, 'k_idle', false);
          } else if (item == 7) {
            this.item_Skeleton.setAnimation(0, 'q_idle', false);
          } else if (item == 8) {
            this.item_Skeleton.setAnimation(0, 'j_idle', false);
          } else if (item == 9) {
            this.item_Skeleton.setAnimation(0, 'bonus_idle', false);
          } else if (item == 10) {
            //问题
            //this.node.getComponent(cc.UITransform).priority = 95
            this.item_Skeleton.setAnimation(0, 'wild_idle', false);
          }
        }

        //中奖动画
        ;

        _proto.winItemCard = function winItemCard(oldItem, newItem) {
          if (oldItem == 1) {
            this.item_Skeleton.setAnimation(0, 'jiangziya_win', false);
          } else if (oldItem == 2) {
            this.item_Skeleton.setAnimation(0, 'daji_win', false);
          } else if (oldItem == 3) {
            this.item_Skeleton.setAnimation(0, 'yangjian_win', false);
          } else if (oldItem == 4) {
            this.item_Skeleton.setAnimation(0, 'neza_win', false);
          } else if (oldItem == 5) {
            this.item_Skeleton.setAnimation(0, 'a_win', false);
          } else if (oldItem == 6) {
            this.item_Skeleton.setAnimation(0, 'k_win', false);
          } else if (oldItem == 7) {
            this.item_Skeleton.setAnimation(0, 'q_win', false);
          } else if (oldItem == 8) {
            this.item_Skeleton.setAnimation(0, 'j_win', false);
          } else if (oldItem == 9) {
            this.item_Skeleton.setAnimation(0, 'bonus_win', false);
          } else if (oldItem == 10) {
            this.item_Skeleton.setAnimation(0, 'wild_win', false);
          }
          // this.scheduleOnce(() => {
          //     if (oldItem == 1) {
          //         slotApotheosisDef.palyAudio(slotApotheosisDef.audio.Symbol3)
          //     } else {
          //         slotApotheosisDef.palyAudio(slotApotheosisDef.audio.SymbolFarme)
          //     }
          // }, 1)
          if (newItem == 1) {
            this.item_Skeleton.addAnimation(0, 'jiangziya_fall', false);
            this.item_Skeleton.addAnimation(0, 'jiangziya_idle', false);
          } else if (newItem == 2) {
            this.item_Skeleton.addAnimation(0, 'daji_fall', false);
            this.item_Skeleton.addAnimation(0, 'daji_idle', false);
          } else if (newItem == 3) {
            this.item_Skeleton.addAnimation(0, 'yangjian_fall', false);
            this.item_Skeleton.addAnimation(0, 'yangjian_idle', false);
          } else if (newItem == 4) {
            this.item_Skeleton.addAnimation(0, 'neza_fall', false);
            this.item_Skeleton.addAnimation(0, 'neza_idle', false);
          } else if (newItem == 5) {
            this.item_Skeleton.addAnimation(0, 'a_fall', false);
            this.item_Skeleton.addAnimation(0, 'a_idle', false);
          } else if (newItem == 6) {
            this.item_Skeleton.addAnimation(0, 'k_fall', false);
            this.item_Skeleton.addAnimation(0, 'k_idle', false);
          } else if (newItem == 7) {
            this.item_Skeleton.addAnimation(0, 'q_fall', false);
            this.item_Skeleton.addAnimation(0, 'q_idle', false);
          } else if (newItem == 8) {
            this.item_Skeleton.addAnimation(0, 'j_fall', false);
            this.item_Skeleton.addAnimation(0, 'j_idle', false);
          } else if (newItem == 9) {
            this.item_Skeleton.addAnimation(0, 'bonus_fall', false);
            this.item_Skeleton.addAnimation(0, 'bonus_idle', false);
          } else if (newItem == 10) {
            this.item_Skeleton.addAnimation(0, 'wild_fall', false);
            this.item_Skeleton.addAnimation(0, 'wild_idle', false);
          }
        }

        //bonus动画
        ;

        _proto.bonusWinAnimation = function bonusWinAnimation() {
          this.node.scale = v3(1.1, 1.1, 1);
          this.item_Skeleton.setAnimation(0, 'bonus_win', true);
        };
        _proto.bonusNormalAnimation = function bonusNormalAnimation() {
          this.node.scale = v3(1, 1, 1);
          this.item_Skeleton.setAnimation(0, 'bonus_idle', true);
        }

        //wild转化动画添加
        ;

        _proto.addWildAnimation = function addWildAnimation() {
          this.item_Skeleton.setAnimation(0, 'wild_change', false);
          this.item_Skeleton.addAnimation(0, 'wild_idle', true);
        };
        _proto.addWildFailAnimation = function addWildFailAnimation() {
          this.item_Skeleton.setAnimation(0, 'wild_changefault', false);
        };
        _proto.update = function update(deltaTime) {};
        return slotApotheosisItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item_Skeleton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myBg", [_dec3], {
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

System.register("chunks:///_virtual/slotApotheosisProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "0b347qOordDZo5dlC3xNDEM", "slotApotheosisProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotApotheosisGameEvent = exports('slotApotheosisGameEvent', /*#__PURE__*/function (slotApotheosisGameEvent) {
        slotApotheosisGameEvent["ENTER_ROOM"] = "enterRoom";
        slotApotheosisGameEvent["LEAVE_ROOM"] = "leaveRoom";
        slotApotheosisGameEvent["UPDATE_CONFIG"] = "updateConfig";
        slotApotheosisGameEvent["UPDATE_BETLIST"] = "updateBetList";
        slotApotheosisGameEvent["CLOSE_BONUS"] = "closeBonus";
        slotApotheosisGameEvent["SELECT_BET"] = "selectBet";
        slotApotheosisGameEvent["START"] = "start";
        slotApotheosisGameEvent["CLICK_ITEM"] = "clickItem";
        slotApotheosisGameEvent["ERROR"] = "errorReturn";
        slotApotheosisGameEvent["END"] = "END";
        slotApotheosisGameEvent["SHOWNEXT"] = "showNext";
        slotApotheosisGameEvent["PARTICLE2D"] = "particle2d";
        slotApotheosisGameEvent["UPDATEBASEBET"] = "updateBaseBet";
        return slotApotheosisGameEvent;
      }({}));
      var slotApotheosisProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(slotApotheosisProxyMgr, _ProxyBase);
        function slotApotheosisProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "slotApotheosisGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolSlotApotheosis.bet, MainManager.instance.getConfigManager().ProtocolSlotApotheosis.buyFree, MainManager.instance.getConfigManager().ProtocolSlotApotheosis.info];
          _this.result = null;
          _this.curBet = 0.5;
          _this.freeTotalWin = 0;
          _this.arrBetList = [500, 1000, 2000, 3000, 5000, 10000, 20000, 30000, 40000, 50000, 80000, 100000, 200000, 500000, 1000000];
          return _this;
        }
        var _proto = slotApotheosisProxyMgr.prototype;
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
            if (data.cmd == ConfigManager.ProtocolSlotApotheosis.bet) {
              this.emit(slotApotheosisGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotApotheosis.info:
              {
                this.emit(slotApotheosisGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotApotheosis.bet:
              {
                this.result = data.Data;
                this.result.prizeAmount = 0;
                for (var i = 0; i < this.result.OpenNums.length; i++) {
                  this.result.prizeAmount += this.result.OpenNums[i].prizeAmount;
                }
                //console.log(JSON.stringify(this.result))

                this.emit(slotApotheosisGameEvent.START);
                break;
              }
            case ConfigManager.ProtocolSlotApotheosis.buyFree:
              {
                this.result = data.Data;
                this.result.prizeAmount = 0;
                for (var _i = 0; _i < this.result.OpenNums.length; _i++) {
                  this.result.prizeAmount += this.result.OpenNums[_i].prizeAmount;
                }
                this.emit(slotApotheosisGameEvent.START);
                break;
              }
          }
        };
        _createClass(slotApotheosisProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return slotApotheosisProxyMgr;
      }(ProxyBase);
      var slotApotheosisProxy = exports('default', new slotApotheosisProxyMgr("slotWildBountyShowdownProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotApotheosisRun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotApotheosisItem.ts', './slotApotheosisProxy.ts', './slotApotheosisDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, sp, Node, instantiate, v3, tween, UITransform, Component, slotApotheosisItem, slotApotheosisProxy, slotApotheosisGameEvent, slotApotheosisDef;
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
      sp = module.sp;
      Node = module.Node;
      instantiate = module.instantiate;
      v3 = module.v3;
      tween = module.tween;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      slotApotheosisItem = module.slotApotheosisItem;
    }, function (module) {
      slotApotheosisProxy = module.default;
      slotApotheosisGameEvent = module.slotApotheosisGameEvent;
    }, function (module) {
      slotApotheosisDef = module.slotApotheosisDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "95239Mk+iBEIIKAEofXEAiN", "slotApotheosisRun", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CardState = {
        NORMAL: 0,
        RUNFAST: 1,
        RUNNORMAL: 2,
        RESULTFAST: 3,
        RESULTNORMAL: 4,
        END: 5,
        SHOWWIN: 6,
        SHOWNEXTWIN: 7
      };
      var slotApotheosisRun = exports('slotApotheosisRun', (_dec = ccclass("slotApotheosisRun"), _dec2 = property(Prefab), _dec3 = property(sp.Skeleton), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotApotheosisRun, _Component);
        function slotApotheosisRun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cardItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showLight", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run_mask", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trun_start_mask", _descriptor4, _assertThisInitialized(_this));
          _this._positionX = [-386, -232, -77, 77, 230, 386];
          _this._positionY = [275, 165, 55, -55, -165];
          _this._runCards = [[], [], [], [], [], []];
          _this._runType = "";
          _this._state = CardState.NORMAL;
          _this._moveSteps = 70;
          _this._isGetResult = false;
          _this._result = [[], [], [], [], [], []];
          _this._normalGetResult = [false, false, false, false, false, false];
          _this._time1 = 0.1;
          _this._time2 = 0.2;
          _this._time3 = 0.3;
          _this._time4 = 0.4;
          _this._time5 = 0.5;
          _this._resultTime = [0.4, 0.7, 1, 1.3, 1.6, 1.9];
          _this._playWildAudio = [false, false, false, false, false, false];
          _this._isShowLight = false;
          _this._wilds = null;
          _this._fakeWilds = null;
          _this._showLightAudioNum = null;
          _this._isGetWildChange = false;
          _this._isToEnd = false;
          return _this;
        }
        var _proto = slotApotheosisRun.prototype;
        _proto.start = function start() {};
        _proto.initCard = function initCard(card) {
          var _this2 = this;
          var _dataList = [[], [], [], [], [], []];
          card.map(function (item, index) {
            if (index < 4) {
              _dataList[0].push(item);
            } else if (index < 8) {
              _dataList[1].push(item);
            } else if (index < 12) {
              _dataList[2].push(item);
            } else if (index < 16) {
              _dataList[3].push(item);
            } else if (index < 20) {
              _dataList[4].push(item);
            } else {
              _dataList[5].push(item);
            }
          });
          _dataList.map(function (item, index) {
            item.map(function (item1, index1) {
              var node = instantiate(_this2.cardItem);
              var com = node.getComponent(slotApotheosisItem);
              com["cardData"] = item1;
              node.parent = _this2.node;
              node.setPosition(v3(_this2._positionX[index], _this2._positionY[index1 + 1]));
              com.initItemCard(item1);
              _this2._runCards[index].push(com);
            });
          });
        };
        _proto.run = function run(type) {
          var _this3 = this;
          this._runType = type;
          this._runCards.map(function (item, index) {
            var random = Math.floor(Math.random() * 9);
            var node = instantiate(_this3.cardItem);
            var com = node.getComponent(slotApotheosisItem);
            node.parent = _this3.node;
            node.setPosition(v3(_this3._positionX[index], _this3._positionY[0]));
            com.initItemCard(random);
            item.unshift(com);
          });
          this.scheduleOnce(function () {
            _this3._runType == "fast" ? _this3.setState(CardState.RUNFAST) : _this3.setState(CardState.RUNNORMAL);
          }, 0.1);
        };
        _proto.runOne = function runOne(currentIndex) {
          var _this4 = this;
          this._runCards[currentIndex].map(function (item, index) {
            item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y - _this4._moveSteps, 0));
            if (item.node.getPosition().y <= -(165 + 82)) {
              if (_this4._isGetResult && currentIndex == 5) {
                _this4.setState(CardState.RESULTNORMAL);
              } else {
                //随机重新生成卡片以及设置位置
                var random = Math.floor(Math.random() * 8) + 1;
                item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y + 165 * 3.5));
                item["cardData"] = random;
                item.initItemCard(random);
              }
            }
          });
        };
        _proto.resultOne = function resultOne(currentIndex) {
          var _this5 = this;
          if (!this._normalGetResult[currentIndex]) {
            this._moveSteps -= 10;
            if (this._moveSteps <= 50) {
              this._moveSteps = 50;
            }
            if (this._runCards[currentIndex]) {
              this._runCards[currentIndex].map(function (item, index) {
                item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y - _this5._moveSteps, 0));
                if (item.node.getPosition().y <= -(165 + 82)) {
                  item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y + 165 * 3.5));
                  if (index != 0) {
                    item["cardData"] = _this5._result[currentIndex][index - 1];
                    item["cardIndex"] = currentIndex * 4 + index - 1;
                    item.initItemCard(item["cardData"]);
                  } else {
                    item["cardData"] = Math.floor(Math.random() * 8) + 1;
                    item.initItemCard(item["cardData"]);
                  }
                }

                //this.scheduleOnce(() => {
                if (!_this5._isToEnd) {
                  _this5._isToEnd = true;
                  if (_this5._wilds && _this5._wilds.length > 0 || _this5._fakeWilds && _this5._fakeWilds.length > 0) {
                    if (!_this5._isGetWildChange) {
                      _this5.changeWildIcon(function () {
                        slotApotheosisProxy.emit(slotApotheosisGameEvent.END);
                        _this5._isGetWildChange = false;
                        _this5._isToEnd = false;
                      });
                    }
                  } else {
                    _this5.scheduleOnce(function () {
                      _this5._isToEnd = false;
                      slotApotheosisProxy.emit(slotApotheosisGameEvent.END);
                    }, _this5._isShowLight ? 4 : 2.5);
                  }
                }

                //期待光效处理
                if (_this5._isShowLight && index == _this5._result[currentIndex].length - 1 && _this5._resultTime[currentIndex] <= 0 && currentIndex == 4 && _this5._runCards[currentIndex][4].node.getPosition().y <= -165) {
                  _this5.showLight.node.active = true;
                  slotApotheosisDef.palyAudio(slotApotheosisDef.audio.NearWin);
                }
                //注：this._runCards[i]内有5个，this._result[i]内只有最终结果的4个
                if (index == _this5._result[currentIndex].length - 1 && _this5._resultTime[currentIndex] <= 0 && _this5._runCards[currentIndex][4].node.getPosition().y <= -165) {
                  _this5._normalGetResult[currentIndex] = true;
                  //console.log(index, this._result[currentIndex], item['cardData'])
                  _this5._runCards[currentIndex].map(function (item, index) {
                    tween(item.node).to(0.1, {
                      position: v3(item.node.getPosition().x, _this5._positionY[index] - 20)
                    }).by(0.1, {
                      position: v3(0, 20)
                    }).call(function () {}).start();
                  });
                  if (_this5._playWildAudio[currentIndex]) {
                    slotApotheosisDef.palyAudio(slotApotheosisDef.audio["M_FreeSpin_stop0" + currentIndex]);
                  }
                  slotApotheosisDef.palyAudio(slotApotheosisDef.audio.RC_Reel_stop);
                  if (currentIndex == 5) {
                    _this5.setState(CardState.END);
                  }
                }
              });
            }
          }
        };
        _proto.getResult = function getResult(card, isShowLight, wilds, showLightAudioNum, _fakeWilds) {
          var _this6 = this;
          if (isShowLight === void 0) {
            isShowLight = false;
          }
          if (wilds === void 0) {
            wilds = null;
          }
          if (showLightAudioNum === void 0) {
            showLightAudioNum = null;
          }
          if (_fakeWilds === void 0) {
            _fakeWilds = null;
          }
          this._isShowLight = isShowLight;
          this._result = [[], [], [], [], [], []];
          this._playWildAudio = [false, false, false, false, false, false];
          this._wilds = wilds;
          this._fakeWilds = _fakeWilds;
          this._showLightAudioNum = showLightAudioNum;
          card.map(function (item, index) {
            if (index < 4) {
              _this6._result[0].push(item);
            } else if (index < 8) {
              _this6._result[1].push(item);
            } else if (index < 12) {
              _this6._result[2].push(item);
            } else if (index < 16) {
              _this6._result[3].push(item);
            } else if (index < 20) {
              _this6._result[4].push(item);
            } else {
              _this6._result[5].push(item);
            }
          });
          var isGetSound = false;
          this._result[0].map(function (item) {
            if (item == 9) {
              isGetSound = true;
            }
          });
          if (isGetSound) {
            this._result.map(function (item, index) {
              if (index != 0) {
                if (index == 1) {
                  item.map(function (item1) {
                    if (item1 == 9) {
                      _this6._playWildAudio[index] = true;
                    }
                  });
                } else if (_this6._playWildAudio[index - 1] == true) {
                  item.map(function (item1) {
                    if (item1 == 9) {
                      _this6._playWildAudio[index] = true;
                    }
                  });
                }
              }
            });
          }
          this._isGetResult = true;
          //有期待动画 延迟获取结果时间
          if (this._isShowLight && this._runType == "normal") {
            this._resultTime[5] = 3.5;
          }
        };
        _proto.setState = function setState(state) {
          this._state = state;
        }
        //免费模式图标替换成wild（先转换在获取金额）
        ;

        _proto.changeWildIcon = function changeWildIcon(call) {
          var _this7 = this;
          if (this._wilds && this._wilds.length > 0) {
            this.trun_start_mask.active = true;
            slotApotheosisDef.palyAudio(slotApotheosisDef.audio.WildBome);
            this._wilds.map(function (item) {
              var node = instantiate(_this7.cardItem);
              var com = node.getComponent(slotApotheosisItem);
              var parentI = Math.floor(item / 4);
              var myI = item % 4;
              //let oldItem = this._runCards[parentI][myI]
              var _positionX = _this7._positionX[parentI];
              var _positionY = _this7._positionY[item % 4 + 1];
              node.parent = _this7.node;
              com["cardData"] = 10;
              //com['cardIndex'] = oldItem['cardIndex']
              node.setPosition(v3(_positionX, _positionY));
              node.getComponent(UITransform).priority = 99;
              com.addWildAnimation();
              _this7.scheduleOnce(function () {
                var oldItem = _this7._runCards[parentI][myI];
                com["cardIndex"] = oldItem["cardIndex"];
                //this.node.removeChild(oldItem.node);
                oldItem.node.destroyFromParent();
                _this7._runCards[Math.floor(item / 4)].splice(item % 4, 1, com);
                _this7.scheduleOnce(function () {
                  node.getComponent(UITransform).priority = 1;
                  //生成粒子效果，倍数增加
                  slotApotheosisProxy.emit(slotApotheosisGameEvent.PARTICLE2D, {
                    x: _positionX,
                    y: _positionY,
                    parentI: parentI
                  });
                }, 1);
              }, 3);
            });
          }
          if (this._fakeWilds && this._fakeWilds.length > 0) {
            this.trun_start_mask.active = true;
            slotApotheosisDef.palyAudio(slotApotheosisDef.audio.wildFake);
            this._fakeWilds.map(function (item) {
              var node = instantiate(_this7.cardItem);
              var com = node.getComponent(slotApotheosisItem);
              var parentI = Math.floor(item / 4);
              var _positionX = _this7._positionX[parentI];
              var _positionY = _this7._positionY[item % 4 + 1];
              node.parent = _this7.node;
              com["cardData"] = 10;
              node.setPosition(v3(_positionX, _positionY));
              node.getComponent(UITransform).priority = 99;
              com.addWildFailAnimation();
              _this7.scheduleOnce(function () {
                //this.node.removeChild(node);
                node.destroyFromParent();
              }, 2);
            });
          }
          this.scheduleOnce(function () {
            //要加入粒子移动到倍数，倍数增加的动画时间，一共0.8s
            _this7.run_mask.active = false;
            _this7.trun_start_mask.active = false;
            call && call();
          }, this._wilds && this._wilds.length > 0 ? 5 : 2.5);
        }
        //获奖icon转换成新icon
        ;

        _proto.changeItem = function changeItem(arr) {
          var _this8 = this;
          this._runCards.map(function (item, index) {
            item.map(function (item1, index1) {
              item1.getComponent(UITransform).priority = 1;
              item1.myBg.active = false;
            });
          });
          var winNotJiang = false;
          var winJiang = false;
          this.trun_start_mask.active = true;
          this._runCards.map(function (item, index) {
            item.map(function (item1, index1) {
              for (var i in arr) {
                if (item1["cardIndex"] == i) {
                  arr[i] == 10 ? item1.getComponent(UITransform).priority = 100 : item1.getComponent(UITransform).priority = 99;
                  item1.myBg.active = true;
                  item1.winItemCard(item1["cardData"], arr[i]);
                  if (item1["cardData"] == 1 && !winJiang) {
                    winJiang = true;
                    _this8.scheduleOnce(function () {
                      slotApotheosisDef.palyAudio(slotApotheosisDef.audio.Symbol3);
                    }, 1);
                  }
                  if (item1["cardData"] != 1 && !winNotJiang) {
                    winNotJiang = true;
                    _this8.scheduleOnce(function () {
                      slotApotheosisDef.palyAudio(slotApotheosisDef.audio.SymbolFarme);
                    }, 1);
                  }
                  item1["cardData"] = arr[i];
                }
              }
            });
          });
          this.scheduleOnce(function () {
            _this8.trun_start_mask.active = false;
            slotApotheosisProxy.emit(slotApotheosisGameEvent.SHOWNEXT);
          }, 2.5);
        };
        _proto.removeItemBg = function removeItemBg() {
          this._runCards.map(function (item, index) {
            item.map(function (item1, index1) {
              item1.getComponent(UITransform).priority = 1;
              item1.myBg.active = false;
            });
          });
        }

        //进入免费前的效果展示
        ;

        _proto.toFreeAnimation = function toFreeAnimation() {
          var _this9 = this;
          this.scheduleOnce(function () {
            slotApotheosisDef.palyAudio(slotApotheosisDef.audio.SH_Line_special);
          }, 0.5);
          this._runCards.map(function (item, index) {
            item.map(function (item1, index1) {
              if (item1["cardData"] == 9) {
                item1.getComponent(UITransform).priority = 99;
                item1.bonusWinAnimation();
              } else {
                item1.getComponent(UITransform).priority = 1;
              }
            });
          });
          this.scheduleOnce(function () {
            _this9._runCards.map(function (item, index) {
              item.map(function (item1, index1) {
                item1.getComponent(UITransform).priority = 1;
                if (item1["cardData"] == 9) {
                  item1.bonusNormalAnimation();
                }
              });
            });
          }, 2);
        };
        _proto.update = function update(dt) {
          var _this10 = this;
          switch (this._state) {
            case CardState.RUNNORMAL:
              {
                this.runOne(0);
                this.runOne(1);
                this.runOne(2);
                this.runOne(3);
                this.runOne(4);
                this.runOne(5);
                // this._time1 > 0 ? this._time1 -= dt : ''
                // this._time2 > 0 ? this._time2 -= dt : ''
                // this._time3 > 0 ? this._time3 -= dt : ''
                // this._time4 > 0 ? this._time4 -= dt : ''
                // this._time5 > 0 ? this._time5 -= dt : ''
                // if (this._time1 <= 0) {
                //     this.runOne(1)
                // }
                // if (this._time2 <= 0) {
                //     this.runOne(2)
                // }
                // if (this._time3 <= 0) {
                //     this.runOne(3)
                // }
                // if (this._time4 <= 0) {
                //     this.runOne(4)
                // }
                // if (this._time5 <= 0) {
                //     this.runOne(5)
                // }
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
            case CardState.RUNFAST:
              {
                this._runCards.map(function (item, index) {
                  item.map(function (item1, index1) {
                    item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this10._moveSteps, 0));
                    if (item1.node.getPosition().y <= -(165 + 96)) {
                      if (_this10._isGetResult) {
                        _this10.setState(CardState.RESULTFAST);
                      } else {
                        //随机重新生成卡片以及设置位置
                        var cardData = Math.floor(Math.random() * 8) + 1;
                        item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y + 165 * 3));
                        item1["cardData"] = cardData;
                        item1.initItemCard(cardData);
                      }
                    }
                  });
                });
                break;
              }
            case CardState.RESULTFAST:
              {
                this._runCards.map(function (item, index) {
                  item.map(function (item1, index1) {
                    if (item1.node.getPosition().y <= -(165 + 96)) {
                      item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y + 165 * 3));
                      if (index1 != 0) {
                        item1["cardData"] = _this10._result[index][index1 - 1];
                        item1["cardIndex"] = index * 4 + index1 - 1;
                        item1.initItemCard(_this10._result[index][index1 - 1]);
                      } else {
                        var random = Math.floor(Math.random() * 8) + 1;
                        item1["cardData"] = random;
                        item1.initItemCard(random);
                      }
                    } else {
                      item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this10._moveSteps, 0));
                    }
                    if (index == 5 && index1 == 4 && item1.node.getPosition().y < -165) {
                      _this10.setState(CardState.END);
                    }
                  });
                });
                break;
              }
            case CardState.END:
              {
                this._moveSteps = 70;
                this._normalGetResult = [false, false, false, false, false, false];
                this._isGetResult = false;
                this._time1 = 0.1;
                this._time2 = 0.2;
                this._time3 = 0.3;
                this._time4 = 0.4;
                this._time5 = 0.5;
                this._resultTime = [0.4, 0.7, 1, 1.3, 1.6, 1.9];
                this.setState(CardState.NORMAL);
                if (this._isShowLight) {
                  this.showLight.node.active = false;
                  this._isShowLight = false;
                }
                if (this._runType == "fast") {
                  this._runCards.map(function (item) {
                    //this.node.removeChild(item[0].node);
                    item[0].node.destroyFromParent();
                    item.splice(0, 1);
                    _this10.scheduleOnce(function () {
                      slotApotheosisDef.palyAudio(slotApotheosisDef.audio.RC_Reel_stop);
                    }, 0.05);
                  });
                  this._runCards.map(function (item, index) {
                    item.map(function (item1, index1) {
                      tween(item1.node).to(0.05, {
                        position: v3(item1.node.getPosition().x, _this10._positionY[index1 + 1], 0)
                      }).start();
                    });
                  });
                  this.scheduleOnce(function () {
                    slotApotheosisProxy.emit(slotApotheosisGameEvent.END);
                  });
                } else {
                  //删除每一列最后一个
                  this._runCards.map(function (item, index) {
                    //this.node.removeChild(item[0].node);
                    item[0].node.destroyFromParent();
                    item.splice(0, 1);
                  });
                }
                if (this._wilds && this._wilds.length > 0 || this._fakeWilds && this._fakeWilds.length > 0) {
                  this.run_mask.active = true;
                  this.run_mask.getComponent(UITransform).priority = 97;
                }
                break;
              }
          }
        };
        return slotApotheosisRun;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "showLight", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "trun_start_mask", [_dec5], {
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

System.register("chunks:///_virtual/slotApotheosisScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './ViewManager.ts', './MainManager.ts', './NetManager.ts', './slotApotheosisProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, Common, ViewManager, MainManager, NetManager, slotApotheosisProxy;
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
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      slotApotheosisProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a1ef5Hee/9P0o9bGSkDZp6D", "slotApotheosisScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      //import SpeedWinnerProxy from "./SpeedWinnerProxy";
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotApotheosisScene = exports('default', (_dec = ccclass("slotApotheosisScene"), _dec2 = menu("game/slotApotheosis/slotApotheosisScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotApotheosisScene, _Component);
        function slotApotheosisScene() {
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
        var _proto = slotApotheosisScene.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.start = function start() {
          var node = instantiate(this.pre_room);
          this.node.addChild(node);
          // if (!sys.isMobile) {
          //     node.setScale(v3(750 / 1334, 750 / 1334, 1));
          // } else {
          //     node.angle = 90;
          // }
        };

        _proto.init = function init() {
          // FortuneElephantDef.palyMusic(FortuneElephantDef.audio.BG);
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
          slotApotheosisProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          slotApotheosisProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        return slotApotheosisScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_room", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      /*
      没中奖
      {"OpenNums":[{"openNum":[8,7,8,5,5,3,10,2,3,2,4,4,1,1,4,5,5,5,8,10,1,1,7,5],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":8,"odds":3,"wilds":[]},"prizeAmount":0,"betAmount":10000,"replace":[],"prizeAmounts":[0]}
            {"OpenNums":[{"openNum":[3,3,8,5,1,9,8,8,8,10,4,1,5,6,7,1,3,9,9,1,9,7,10,6],"prizeAmount":80000,"prizeIdx":[[2,6,7,8,9]]},{"openNum":[3,3,8,5,1,9,5,10,2,3,4,1,5,6,7,1,3,9,9,1,9,7,10,6],"prizeAmount":600000,"prizeIdx":[[0,1,7,9]]},{"openNum":[2,9,8,5,1,9,5,8,2,10,4,1,5,6,7,1,3,9,9,1,9,7,10,6],"prizeAmount":260000,"prizeIdx":[[2,7,9],[3,6,9,12]]},{"openNum":[2,9,3,5,1,9,7,2,2,7,4,1,1,6,7,1,3,9,9,1,9,7,10,6],"prizeAmount":400000,"prizeIdx":[[0,7,8]]},{"openNum":[3,9,3,5,1,9,7,3,10,7,4,1,1,6,7,1,3,9,9,1,9,7,10,6],"prizeAmount":600000,"prizeIdx":[[0,2,7,8]]},{"openNum":[1,9,7,5,1,9,7,7,9,7,4,1,1,6,7,1,3,9,9,1,9,7,10,6],"prizeAmount":20120000,"prizeIdx":[[0,4,11,12,15,19,22],[2,6,7,9,14]]},{"openNum":[7,9,2,5,1,9,8,1,9,6,4,9,10,6,6,9,3,9,9,6,9,7,4,6],"prizeAmount":0,"prizeIdx":[]}],"freePrize":true,"freeInfo":{"surplusFreeCount":10,"odds":1,"wilds":[]},"prizeAmount":22060000,"betAmount":10000,"replace":[{"2":8,"6":5,"7":10,"8":2,"9":3},{"0":2,"1":9,"7":8,"9":10},{"12":1,"2":3,"3":5,"6":7,"7":2,"9":7},{"0":3,"7":3,"8":10},{"0":1,"2":7,"7":7,"8":9},{"0":7,"11":9,"12":10,"14":6,"15":9,"19":6,"2":2,"22":4,"4":1,"6":8,"7":1,"9":6}],"prizeAmounts":[80000,600000,260000,400000,600000,20120000,0]}
        {"OpenNums":[{"openNum":[4,6,4,7,10,10,7,7,1,4,6,3,7,4,7,1,8,8,7,8,4,5,10,4],"prizeAmount":7680000,"prizeIdx":[[0,2,4,5,9,13],[1,4,5,10]]},{"openNum":[2,5,7,7,3,1,7,7,1,4,8,3,7,2,7,1,8,8,7,8,4,5,10,4],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":9,"odds":3,"wilds":[4,5]},"prizeAmount":7680000,"betAmount":10000,"replace":[{"0":2,"1":5,"10":8,"13":2,"2":7,"4":3,"5":1,"9":4}],"prizeAmounts":[7680000,0]}
      {"OpenNums":[{"openNum":[3,1,3,1,3,3,4,8,6,8,10,7,6,10,4,1,5,4,3,7,5,2,6,10],"prizeAmount":72000000,"prizeIdx":[[0,2,4,5,10,13,18,23]]},{"openNum":[2,1,2,1,8,3,4,8,6,8,4,7,6,8,4,1,5,4,1,7,5,2,6,8],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":7,"odds":3,"wilds":[]},"prizeAmount":72000000,"betAmount":10000,"replace":[{"0":2,"10":4,"13":8,"18":1,"2":2,"23":8,"4":8,"5":3}],"prizeAmounts":[72000000,0]}
      {"OpenNums":[{"openNum":[4,2,4,6,10,10,10,4,2,5,4,4,5,1,4,5,6,2,8,6,6,6,10,3],"prizeAmount":54000000,"prizeIdx":[[0,2,4,5,6,7,10,11,14],[1,4,5,6,8]]},{"openNum":[1,7,2,6,3,7,7,8,7,5,3,3,5,1,7,5,6,2,8,6,6,6,10,3],"prizeAmount":600000,"prizeIdx":[[1,5,6,8,14]]},{"openNum":[1,3,2,6,3,3,2,8,5,5,3,3,5,1,2,5,6,2,8,6,6,6,10,3],"prizeAmount":6000000,"prizeIdx":[[1,4,5,10,11]]},{"openNum":[1,3,2,6,3,3,2,8,5,5,4,2,5,1,2,5,6,2,8,6,6,6,10,3],"prizeAmount":40000000,"prizeIdx":[[2,6,11,14,17,22]]},{"openNum":[1,3,3,6,3,3,7,8,5,5,4,4,5,1,1,5,6,3,8,6,6,6,2,3],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":6,"odds":5,"wilds":[5,6]},"prizeAmount":100600000,"betAmount":10000,"replace":[{"0":1,"1":7,"10":3,"11":3,"14":7,"2":2,"4":3,"5":7,"6":7,"7":8,"8":7},{"1":3,"14":2,"5":3,"6":2,"8":5},{"1":3,"10":4,"11":2,"4":3,"5":3},{"11":4,"14":1,"17":3,"2":3,"22":2,"6":7}],"prizeAmounts":[54000000,600000,6000000,40000000,0]}
      {"OpenNums":[{"openNum":[1,8,2,4,10,6,8,8,10,4,2,3,5,7,1,10,5,8,2,8,5,10,6,8],"prizeAmount":175000000,"prizeIdx":[[0,4,8,14,15],[1,4,6,7,8,15,17,19,21,23],[2,4,8,10,15,18,21],[3,4,8,9,15]]},{"openNum":[5,8,2,7,2,6,8,7,4,7,6,3,5,7,8,4,5,3,7,4,5,5,6,1],"prizeAmount":840000,"prizeIdx":[[3,7,9,13,18]]},{"openNum":[5,8,2,7,2,6,8,4,4,6,6,3,5,8,8,4,5,3,2,4,5,5,6,1],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":5,"odds":7,"wilds":[4,8]},"prizeAmount":175840000,"betAmount":10000,"replace":[{"0":5,"1":8,"10":6,"14":8,"15":4,"17":3,"18":7,"19":4,"2":2,"21":5,"23":1,"3":7,"4":2,"6":8,"7":7,"8":4,"9":7},{"13":8,"18":2,"3":7,"7":4,"9":6}],"prizeAmounts":[175000000,840000,0]}
      {"OpenNums":[{"openNum":[4,3,3,4,7,10,10,10,4,10,5,10,3,4,1,4,3,5,10,10,2,10,1,10],"prizeAmount":10080000000,"prizeIdx":[[0,3,5,6,7,8,9,11,13,15,18,19,21,23],[1,2,5,6,7,9,11,12,16,18,19,21,23]]},{"openNum":[3,7,4,4,7,10,10,6,3,1,5,3,10,5,1,4,7,5,7,6,2,3,1,1],"prizeAmount":36000000,"prizeIdx":[[0,5,6,8,11,12]]},{"openNum":[8,7,4,4,7,8,10,6,7,1,5,10,6,5,1,4,7,5,7,6,2,3,1,1],"prizeAmount":13200000,"prizeIdx":[[0,5,6,11],[1,4,6,8,11],[2,3,6,11,15]]},{"openNum":[7,8,3,6,6,3,10,6,10,1,5,8,6,5,1,8,7,5,7,6,2,3,1,1],"prizeAmount":21800000,"prizeIdx":[[0,6,8],[1,6,8,11,15],[2,5,6,8],[3,4,6,7,8,12,19]]},{"openNum":[1,3,7,1,7,1,3,1,2,1,5,8,7,5,1,1,7,5,7,1,2,3,1,1],"prizeAmount":1600000000,"prizeIdx":[[0,3,5,7,9,14,15,19,22,23]]},{"openNum":[5,3,7,2,7,8,3,8,2,7,5,8,7,5,4,8,7,5,7,10,2,3,7,1],"prizeAmount":12000000,"prizeIdx":[[2,4,9,12,16,18,19,22]]},{"openNum":[5,3,1,2,4,8,3,8,2,2,5,8,2,5,4,8,2,5,6,1,2,3,4,1],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":4,"odds":10,"wilds":[5,6,7]},"prizeAmount":11763000000,"betAmount":10000,"replace":[{"0":3,"1":7,"11":3,"12":10,"13":5,"15":4,"16":7,"18":7,"19":6,"2":4,"21":3,"23":1,"3":4,"5":10,"6":10,"7":6,"8":3,"9":1},{"0":8,"11":10,"12":6,"5":8,"6":10,"8":7},{"0":7,"1":8,"11":8,"15":8,"2":3,"3":6,"4":6,"5":3,"6":10,"8":10},{"0":1,"1":3,"11":8,"12":7,"15":1,"19":1,"2":7,"3":1,"4":7,"5":1,"6":3,"7":1,"8":2},{"0":5,"14":4,"15":8,"19":10,"22":7,"23":1,"3":2,"5":8,"7":8,"9":7},{"12":2,"16":2,"18":6,"19":1,"2":1,"22":4,"4":4,"9":2}],"prizeAmounts":[10080000000,36000000,13200000,21800000,1600000000,12000000,0]}
      {"OpenNums":[{"openNum":[5,1,8,2,10,8,10,2,4,8,5,5,1,4,3,7,4,5,1,2,6,3,2,2],"prizeAmount":4560000,"prizeIdx":[[0,4,6,10,11],[2,4,5,6,9]]},{"openNum":[6,1,7,2,3,6,6,2,4,1,4,4,1,4,3,7,4,5,1,2,6,3,2,2],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":3,"odds":12,"wilds":[4,6]},"prizeAmount":4560000,"betAmount":10000,"replace":[{"0":6,"10":4,"11":4,"2":7,"4":3,"5":6,"6":6,"9":1}],"prizeAmounts":[4560000,0]}
      {"OpenNums":[{"openNum":[3,4,6,6,2,10,3,4,7,1,1,2,3,1,7,4,2,1,5,10,8,3,2,4],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":2,"odds":12,"wilds":[]},"prizeAmount":0,"betAmount":10000,"replace":[],"prizeAmounts":[0]}
      {"OpenNums":[{"openNum":[8,2,4,7,10,6,2,8,10,2,4,3,6,6,2,5,4,10,5,3,3,2,2,4],"prizeAmount":837980000,"prizeIdx":[[0,4,7,8],[1,4,6,8,9,14,17,21,22],[2,4,8,10],[3,4,8]]},{"openNum":[3,2,4,4,2,6,1,4,2,2,3,3,6,6,2,5,4,7,5,3,3,6,4,4],"prizeAmount":31200000,"prizeIdx":[[1,4,8,9,14]]},{"openNum":[3,6,4,4,8,6,1,4,2,7,3,3,6,6,10,5,4,7,5,3,3,6,4,4],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":1,"odds":13,"wilds":[4]},"prizeAmount":869180000,"betAmount":10000,"replace":[{"0":3,"1":2,"10":3,"14":2,"17":7,"2":4,"21":6,"22":4,"3":4,"4":2,"6":1,"7":4,"8":2,"9":2},{"1":6,"14":10,"4":8,"8":2,"9":7}],"prizeAmounts":[837980000,31200000,0]}
      {"OpenNums":[{"openNum":[9,1,2,9,7,9,1,3,8,9,5,5,2,8,9,7,10,4,2,9,9,7,5,6],"prizeAmount":0,"prizeIdx":[]}],"freePrize":true,"freeInfo":{"surplusFreeCount":10,"odds":1,"wilds":[]},"prizeAmount":0,"betAmount":10000,"replace":[],"prizeAmounts":[0]}
      {"OpenNums":[{"openNum":[6,8,4,1,10,8,6,10,2,6,6,3,6,4,8,2,7,3,4,10,6,4,6,3],"prizeAmount":57600000,"prizeIdx":[[0,4,6,7,9,10,12,19,20,22]]},{"openNum":[3,8,4,1,3,8,3,5,2,7,3,3,6,4,8,2,7,3,4,3,2,4,2,3],"prizeAmount":3600000,"prizeIdx":[[0,4,6,10,11]]},{"openNum":[4,8,4,1,10,8,4,5,2,7,10,2,6,4,8,2,7,3,4,3,2,4,2,3],"prizeAmount":49860000,"prizeIdx":[[0,2,4,6,10,13,18,21],[1,4,5,10,14],[3,4,10]]},{"openNum":[8,8,3,4,2,7,4,5,2,7,4,2,6,7,8,2,7,3,2,3,2,2,2,3],"prizeAmount":600000,"prizeIdx":[[3,6,10]]},{"openNum":[8,8,3,7,2,7,2,5,2,7,4,2,6,7,8,2,7,3,2,3,2,2,2,3],"prizeAmount":360000,"prizeIdx":[[3,5,9,13,16]]},{"openNum":[8,8,3,7,2,8,2,5,2,2,4,2,6,2,8,2,3,3,2,3,2,2,2,3],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":9,"odds":3,"wilds":[4,7]},"prizeAmount":112020000,"betAmount":10000,"replace":[{"0":3,"10":3,"12":6,"19":3,"20":2,"22":2,"4":3,"6":3,"7":5,"9":7},{"0":4,"10":10,"11":2,"4":10,"6":4},{"0":8,"1":8,"10":4,"13":7,"14":8,"18":2,"2":3,"21":2,"3":4,"4":2,"5":7,"6":4},{"10":4,"3":7,"6":2},{"13":2,"16":3,"3":7,"5":8,"9":2}],"prizeAmounts":[57600000,3600000,49860000,600000,360000,0]}
      {"OpenNums":[{"openNum":[3,7,8,1,6,5,10,10,10,2,6,2,2,2,4,8,7,4,5,10,2,7,5,6],"prizeAmount":9400000,"prizeIdx":[[0,6,7,8],[1,6,7,8],[2,6,7,8,15,19],[3,6,7,8]]},{"openNum":[8,8,8,4,6,5,6,1,6,2,6,2,2,2,4,1,7,4,5,8,2,7,5,6],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":8,"odds":5,"wilds":[7,8]},"prizeAmount":9400000,"betAmount":10000,"replace":[{"0":8,"1":8,"15":1,"19":8,"2":8,"3":4,"6":6,"7":1,"8":6}],"prizeAmounts":[9400000,0]}
      {"OpenNums":[{"openNum":[7,5,8,5,10,5,8,7,5,7,4,6,2,4,6,4,7,3,3,1,3,2,6,2],"prizeAmount":2160000,"prizeIdx":[[0,4,7,9],[1,3,4,5,8]]},{"openNum":[4,3,8,3,8,5,8,5,5,1,4,6,2,4,6,4,7,3,3,1,3,2,6,2],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":7,"odds":6,"wilds":[4]},"prizeAmount":2160000,"betAmount":10000,"replace":[{"0":4,"1":3,"3":3,"4":8,"5":5,"7":5,"8":5,"9":1}],"prizeAmounts":[2160000,0]}
      {"OpenNums":[{"openNum":[3,1,4,1,10,6,2,10,3,3,7,1,5,5,8,4,2,3,5,5,2,1,7,6],"prizeAmount":22400000,"prizeIdx":[[0,4,7,8,9],[1,3,4,7,11]]},{"openNum":[8,4,4,2,4,6,2,8,6,6,7,4,5,5,8,4,2,3,5,5,2,1,7,6],"prizeAmount":8400000,"prizeIdx":[[1,2,4,11,15]]},{"openNum":[8,2,3,2,8,6,2,8,6,6,7,1,5,5,8,8,2,3,5,5,2,1,7,6],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":6,"odds":7,"wilds":[4]},"prizeAmount":30800000,"betAmount":10000,"replace":[{"0":8,"1":4,"11":4,"3":2,"4":4,"7":8,"8":6,"9":6},{"1":2,"11":1,"15":8,"2":3,"4":8}],"prizeAmounts":[22400000,8400000,0]}
      {"OpenNums":[{"openNum":[5,4,4,8,10,10,5,8,8,4,1,7,10,6,8,6,4,4,10,1,8,1,6,10],"prizeAmount":475200000,"prizeIdx":[[1,2,4,5,9,12,16,17,18,23],[3,4,5,7,8,12,14,18,20,23]]},{"openNum":[5,2,6,4,10,10,5,10,8,6,1,7,7,6,4,6,7,2,4,1,3,1,6,10],"prizeAmount":12960000,"prizeIdx":[[2,4,5,7,9,13,15]]},{"openNum":[5,2,4,4,8,2,5,6,8,2,1,7,7,3,4,2,7,2,4,1,3,1,6,10],"prizeAmount":72000000,"prizeIdx":[[1,5,9,15,17,23]]},{"openNum":[5,6,4,4,8,3,5,6,8,5,1,7,7,3,4,7,7,2,4,1,3,1,6,2],"prizeAmount":720000,"prizeIdx":[[0,6,9]]},{"openNum":[3,6,4,4,8,3,3,6,8,7,1,7,7,3,4,7,7,2,4,1,3,1,6,2],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":5,"odds":9,"wilds":[4,5]},"prizeAmount":560880000,"betAmount":10000,"replace":[{"1":2,"12":7,"14":4,"16":7,"17":2,"18":4,"2":6,"20":3,"23":10,"3":4,"4":10,"5":10,"7":10,"8":8,"9":6},{"13":3,"15":2,"2":4,"4":8,"5":2,"7":6,"9":2},{"1":6,"15":7,"17":2,"23":2,"5":3,"9":5},{"0":3,"6":3,"9":7}],"prizeAmounts":[475200000,12960000,72000000,720000,0]}
      {"OpenNums":[{"openNum":[6,7,1,3,8,6,10,10,10,10,3,10,7,3,8,6,5,10,6,5,5,7,3,8],"prizeAmount":744480000,"prizeIdx":[[0,5,6,7,8,9,11,15,17,18],[1,6,7,8,9,11,12,17,21],[2,6,7,8,9,11],[3,6,7,8,9,10,11,13,17,22]]},{"openNum":[4,1,8,7,8,1,8,7,3,4,2,3,4,7,8,7,5,4,8,5,5,2,6,8],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":4,"odds":12,"wilds":[7,8,9]},"prizeAmount":744480000,"betAmount":10000,"replace":[{"0":4,"1":1,"10":2,"11":3,"12":4,"13":7,"15":7,"17":4,"18":8,"2":8,"21":2,"22":6,"3":7,"5":1,"6":8,"7":7,"8":3,"9":4}],"prizeAmounts":[744480000,0]}
      {"OpenNums":[{"openNum":[7,6,3,3,10,10,5,5,10,6,7,8,1,10,1,5,10,7,5,1,10,5,7,3],"prizeAmount":790400000,"prizeIdx":[[0,4,5,8,10,13,16,17,20,22],[1,4,5,8,9,13,16,20],[2,3,4,5,8,13,16,20,23]]},{"openNum":[4,7,4,4,4,7,5,5,8,5,8,8,1,2,1,5,1,8,5,1,10,5,10,8],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":3,"odds":13,"wilds":[8]},"prizeAmount":790400000,"betAmount":10000,"replace":[{"0":4,"1":7,"10":8,"13":2,"16":1,"17":8,"2":4,"20":10,"22":10,"23":8,"3":4,"4":4,"5":7,"8":8,"9":5}],"prizeAmounts":[790400000,0]}
      {"OpenNums":[{"openNum":[6,6,1,7,10,10,5,5,5,4,4,5,10,7,6,1,1,10,6,4,2,8,7,5],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":2,"odds":15,"wilds":[4,5]},"prizeAmount":0,"betAmount":10000,"replace":[],"prizeAmounts":[0]}
      {"OpenNums":[{"openNum":[1,3,2,4,5,10,10,2,5,3,6,4,2,1,2,1,4,5,4,8,4,10,2,5],"prizeAmount":17000000,"prizeIdx":[[1,5,6,9],[3,5,6,11]]},{"openNum":[1,6,2,8,5,8,1,2,5,10,6,1,2,1,2,1,4,5,4,8,4,10,2,5],"prizeAmount":143140000,"prizeIdx":[[0,6,9,11,13,15],[2,7,9,12,14],[3,5,9]]},{"openNum":[7,6,4,8,5,5,3,5,5,8,6,1,8,4,6,5,4,5,4,8,4,10,2,5],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":1,"odds":17,"wilds":[5,6]},"prizeAmount":160140000,"betAmount":10000,"replace":[{"1":6,"11":1,"3":8,"5":8,"6":1,"9":10},{"0":7,"11":1,"12":8,"13":4,"14":6,"15":5,"2":4,"3":8,"5":5,"6":3,"7":5,"9":8}],"prizeAmounts":[17000000,143140000,0]}
      {"OpenNums":[{"openNum":[5,6,9,4,7,9,5,7,5,9,7,2,7,7,9,4,1,9,2,9,4,10,3,9],"prizeAmount":80000,"prizeIdx":[[0,6,8]]},{"openNum":[3,6,9,4,7,9,6,7,4,9,7,2,7,7,9,4,1,9,2,9,4,10,3,9],"prizeAmount":0,"prizeIdx":[]}],"freePrize":true,"freeInfo":{"surplusFreeCount":10,"odds":1,"wilds":[]},"prizeAmount":80000,"betAmount":10000,"replace":[{"0":3,"6":6,"8":4}],"prizeAmounts":[80000,0]}
      {"OpenNums":[{"openNum":[1,7,5,7,5,3,6,2,6,5,4,7,8,6,7,5,6,3,2,5,5,4,10,1],"prizeAmount":3200000,"prizeIdx":[[2,4,9,15,19,20,22]]},{"openNum":[1,7,4,7,1,3,6,2,6,2,4,7,8,6,7,2,6,3,2,1,7,4,1,1],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":9,"odds":1,"wilds":[]},"prizeAmount":3200000,"betAmount":10000,"replace":[{"15":2,"19":1,"2":4,"20":7,"22":1,"4":1,"9":2}],"prizeAmounts":[3200000,0]}
      {"OpenNums":[{"openNum":[3,8,4,1,7,10,5,7,10,4,2,7,6,3,1,2,8,8,5,7,8,4,1,5],"prizeAmount":8460000,"prizeIdx":[[0,5,8,13],[1,5,8],[2,5,8,9],[3,5,8,14]]},{"openNum":[3,6,1,3,7,1,5,7,5,2,2,7,6,4,4,2,8,8,5,7,8,4,1,5],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":8,"odds":3,"wilds":[5,8]},"prizeAmount":8460000,"betAmount":10000,"replace":[{"0":3,"1":6,"13":4,"14":4,"2":1,"3":3,"5":1,"8":5,"9":2}],"prizeAmounts":[8460000,0]}
      {"OpenNums":[{"openNum":[2,6,8,2,8,6,7,10,10,10,10,3,10,2,10,3,7,6,8,5,2,4,6,2],"prizeAmount":211200000,"prizeIdx":[[0,3,7,8,9,10,12,13,14],[1,5,7,8,9,10,12,14,17,22],[2,4,7,8,9,10,12,14,18]]},{"openNum":[1,5,7,5,3,4,7,4,5,8,1,3,8,5,10,3,7,1,2,5,2,4,10,2],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":7,"odds":5,"wilds":[9,10]},"prizeAmount":211200000,"betAmount":10000,"replace":[{"0":1,"1":5,"10":1,"12":8,"13":5,"14":10,"17":1,"18":2,"2":7,"22":10,"3":5,"4":3,"5":4,"7":4,"8":5,"9":8}],"prizeAmounts":[211200000,0]}
      {"OpenNums":[{"openNum":[4,2,2,3,5,5,4,8,1,2,3,3,8,7,6,5,5,3,7,5,6,5,10,2],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":6,"odds":5,"wilds":[]},"prizeAmount":0,"betAmount":10000,"replace":[],"prizeAmounts":[0]}
      {"OpenNums":[{"openNum":[6,2,6,7,7,7,6,5,5,6,8,10,7,7,5,7,4,3,5,1,6,1,3,6],"prizeAmount":4080000,"prizeIdx":[[0,2,6,9,11],[3,4,5,11,12,13,15]]},{"openNum":[4,2,1,2,5,3,3,5,5,8,8,10,5,6,5,1,4,3,5,1,6,1,3,6],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":5,"odds":6,"wilds":[11]},"prizeAmount":4080000,"betAmount":10000,"replace":[{"0":4,"11":10,"12":5,"13":6,"15":1,"2":1,"3":2,"4":5,"5":3,"6":3,"9":8}],"prizeAmounts":[4080000,0]}
      {"OpenNums":[{"openNum":[8,5,3,3,10,6,10,8,6,3,6,2,3,5,10,6,4,1,2,6,8,4,3,6],"prizeAmount":57600000,"prizeIdx":[[2,3,4,6,9,12,14]]},{"openNum":[8,5,1,8,3,6,5,8,6,1,6,2,6,5,5,6,4,1,2,6,8,4,3,6],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":4,"odds":8,"wilds":[4,6]},"prizeAmount":57600000,"betAmount":10000,"replace":[{"12":6,"14":5,"2":1,"3":8,"4":3,"6":5,"9":1}],"prizeAmounts":[57600000,0]}
      {"OpenNums":[{"openNum":[2,4,6,8,10,5,10,10,2,8,8,4,1,8,4,2,7,8,8,1,4,4,3,3],"prizeAmount":61560000,"prizeIdx":[[0,4,6,7,8,15],[1,4,6,7,11,14],[3,4,6,7,9,10,13,17,18]]},{"openNum":[5,5,6,3,4,5,8,6,6,4,4,2,1,8,6,1,7,5,3,1,4,4,3,3],"prizeAmount":2160000,"prizeIdx":[[2,7,8,14]]},{"openNum":[5,5,2,3,4,5,8,2,8,4,4,2,1,8,7,1,7,5,3,1,4,4,3,3],"prizeAmount":3600000,"prizeIdx":[[2,7,11]]},{"openNum":[5,5,1,3,4,5,8,7,8,4,4,2,1,8,7,1,7,5,3,1,4,4,3,3],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":3,"odds":9,"wilds":[4]},"prizeAmount":67320000,"betAmount":10000,"replace":[{"0":5,"1":5,"10":4,"11":2,"13":8,"14":6,"15":1,"17":5,"18":3,"3":3,"4":4,"6":8,"7":6,"8":6,"9":4},{"14":7,"2":2,"7":2,"8":8},{"11":2,"2":1,"7":7}],"prizeAmounts":[61560000,2160000,3600000,0]}
      {"OpenNums":[{"openNum":[6,4,4,6,3,3,4,1,7,10,4,5,8,1,7,8,7,6,5,7,3,3,2,1],"prizeAmount":7200000,"prizeIdx":[[1,2,6,9,10]]},{"openNum":[6,8,7,6,3,3,10,1,7,8,4,5,8,1,7,8,7,6,5,7,3,3,2,1],"prizeAmount":3240000,"prizeIdx":[[1,6,9,12,15],[2,6,8,14,16,19]]},{"openNum":[6,8,1,6,3,3,10,1,10,2,4,5,6,1,5,4,2,6,5,8,3,3,2,1],"prizeAmount":35820000,"prizeIdx":[[0,3,6,8,12,17],[1,6,8],[2,6,7,8,13]]},{"openNum":[5,7,7,3,3,3,7,10,5,2,4,5,8,7,5,4,2,5,5,8,3,3,2,1],"prizeAmount":17280000,"prizeIdx":[[0,7,8,11,14,17,18]]},{"openNum":[5,7,7,3,3,3,7,1,4,2,4,5,8,7,4,4,2,8,2,8,3,3,2,1],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":2,"odds":9,"wilds":[]},"prizeAmount":63540000,"betAmount":10000,"replace":[{"1":8,"10":4,"2":7,"6":10,"9":8},{"1":8,"12":6,"14":5,"15":4,"16":2,"19":8,"2":1,"6":10,"8":10,"9":2},{"0":5,"1":7,"12":8,"13":7,"17":5,"2":7,"3":3,"6":7,"7":10,"8":5},{"0":5,"11":5,"14":4,"17":8,"18":2,"7":1,"8":4}],"prizeAmounts":[7200000,3240000,35820000,17280000,0]}
      {"OpenNums":[{"openNum":[7,6,6,8,10,10,7,10,8,10,6,2,8,2,2,2,5,1,8,4,1,4,6,1],"prizeAmount":21120000,"prizeIdx":[[0,4,5,6,7,9],[1,2,4,5,7,9,10],[3,4,5,7,8,9,12,18]]},{"openNum":[1,2,3,2,1,6,3,6,7,1,8,2,1,2,2,2,5,1,6,4,1,4,6,1],"prizeAmount":240000000,"prizeIdx":[[0,4,9,12,17,20,23]]},{"openNum":[1,2,3,2,3,6,3,6,7,1,8,2,1,2,2,2,5,5,6,4,10,4,6,10],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":1,"odds":12,"wilds":[4,5,7]},"prizeAmount":261120000,"betAmount":10000,"replace":[{"0":1,"1":2,"10":8,"12":1,"18":6,"2":3,"3":2,"4":1,"5":6,"6":3,"7":6,"8":7,"9":1},{"0":1,"12":1,"17":5,"20":10,"23":10,"4":3,"9":1}],"prizeAmounts":[21120000,240000000,0]}
      {"OpenNums":[{"openNum":[1,8,7,9,9,8,7,9,3,10,2,1,10,2,1,9,5,8,3,9,9,2,2,6],"prizeAmount":180000,"prizeIdx":[[1,5,9,12,17],[2,6,9,12]]},{"openNum":[1,3,2,9,9,6,3,9,3,10,2,1,8,2,1,9,5,8,3,9,9,2,2,6],"prizeAmount":600000,"prizeIdx":[[1,6,8,9]]},{"openNum":[1,8,2,9,9,6,1,9,7,9,2,1,8,2,1,9,5,8,3,9,9,2,2,6],"prizeAmount":1500000,"prizeIdx":[[0,6,11,14]]},{"openNum":[4,8,2,9,9,6,10,9,7,9,2,2,8,2,2,9,5,8,3,9,9,2,2,6],"prizeAmount":4800000,"prizeIdx":[[2,6,10,11,13,14]]},{"openNum":[4,8,6,9,9,6,9,9,7,9,4,1,8,10,9,9,5,8,3,9,9,2,2,6],"prizeAmount":0,"prizeIdx":[]}],"freePrize":true,"freeInfo":{"surplusFreeCount":10,"odds":1,"wilds":[]},"prizeAmount":7080000,"betAmount":10000,"replace":[{"1":3,"12":8,"17":8,"2":2,"5":6,"6":3,"9":10},{"1":8,"6":1,"8":7,"9":9},{"0":4,"11":2,"14":2,"6":10},{"10":4,"11":1,"13":10,"14":9,"2":6,"6":9}],"prizeAmounts":[180000,600000,1500000,4800000,0]}
      {"OpenNums":[{"openNum":[5,4,5,3,7,5,7,10,5,7,10,1,6,4,2,8,6,1,8,10,6,10,5,10],"prizeAmount":17880000,"prizeIdx":[[0,2,5,7,8,10],[1,7,10,13,19,21,23],[3,7,10]]},{"openNum":[2,3,3,2,7,5,7,1,6,7,2,1,6,6,2,8,6,1,8,6,6,1,5,2],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":9,"odds":2,"wilds":[7]},"prizeAmount":17880000,"betAmount":10000,"replace":[{"0":2,"1":3,"10":2,"13":6,"19":6,"2":3,"21":1,"23":2,"3":2,"5":5,"7":1,"8":6}],"prizeAmounts":[17880000,0]}
      {"OpenNums":[{"openNum":[8,6,3,6,1,7,10,5,8,1,2,4,6,8,6,5,8,2,4,4,8,4,5,1],"prizeAmount":800000,"prizeIdx":[[0,6,8,13,16,20]]},{"openNum":[6,6,3,6,1,7,10,5,2,1,2,4,6,3,6,5,4,2,4,4,4,4,5,1],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":8,"odds":2,"wilds":[]},"prizeAmount":800000,"betAmount":10000,"replace":[{"0":6,"13":3,"16":4,"20":4,"6":10,"8":2}],"prizeAmounts":[800000,0]}
      {"OpenNums":[{"openNum":[3,4,4,1,10,6,6,5,6,8,2,1,4,10,8,7,3,3,6,1,2,8,4,4],"prizeAmount":9000000,"prizeIdx":[[3,4,11,13,19]]},{"openNum":[3,4,4,4,5,6,6,5,6,8,2,8,4,6,8,7,3,3,6,3,2,8,4,4],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":7,"odds":3,"wilds":[4]},"prizeAmount":9000000,"betAmount":10000,"replace":[{"11":8,"13":6,"19":3,"3":4,"4":5}],"prizeAmounts":[9000000,0]}
      {"OpenNums":[{"openNum":[6,1,3,3,4,1,4,6,1,5,6,1,7,7,10,2,1,1,8,4,1,4,5,3],"prizeAmount":120720000,"prizeIdx":[[0,7,10,14],[1,5,8,11,14,16,17,20]]},{"openNum":[7,2,3,3,4,1,4,4,2,5,1,2,7,7,6,2,5,10,8,4,1,4,5,3],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":6,"odds":3,"wilds":[]},"prizeAmount":120720000,"betAmount":10000,"replace":[{"0":7,"1":2,"10":1,"11":2,"14":6,"16":5,"17":10,"20":1,"5":1,"7":4,"8":2}],"prizeAmounts":[120720000,0]}
      {"OpenNums":[{"openNum":[3,4,5,3,10,10,7,7,5,10,10,1,10,7,2,2,8,5,10,2,5,5,1,7],"prizeAmount":288000000,"prizeIdx":[[0,3,4,5,9,10,12,18],[1,4,5,9,10,12,18],[2,4,5,8,9,10,12,17,18,20,21]]},{"openNum":[8,2,5,5,7,6,7,7,1,8,1,1,3,7,2,2,8,5,5,2,3,2,1,7],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":5,"odds":5,"wilds":[9,10]},"prizeAmount":288000000,"betAmount":10000,"replace":[{"0":8,"1":2,"10":1,"12":3,"17":5,"18":5,"2":5,"20":3,"21":2,"3":5,"4":7,"5":6,"8":1,"9":8}],"prizeAmounts":[288000000,0]}
      {"OpenNums":[{"openNum":[2,7,8,1,10,8,5,10,2,6,1,7,8,5,10,1,4,10,4,5,4,10,2,4],"prizeAmount":509600000,"prizeIdx":[[0,4,7,8,14,17,21,22],[1,4,7,11,14,17,21],[3,4,7,10,14,15,17,21]]},{"openNum":[8,3,8,2,6,8,5,8,10,6,2,3,8,5,2,1,4,3,4,5,4,4,2,4],"prizeAmount":1680000,"prizeIdx":[[0,2,5,7,8,12]]},{"openNum":[4,3,7,2,6,4,5,7,5,6,2,3,6,5,2,1,4,3,4,5,4,4,2,4],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":4,"odds":7,"wilds":[4,7]},"prizeAmount":511280000,"betAmount":10000,"replace":[{"0":8,"1":3,"10":2,"11":3,"14":2,"15":1,"17":3,"21":4,"22":2,"3":2,"4":6,"7":8,"8":10},{"0":4,"12":6,"2":7,"5":4,"7":7,"8":5}],"prizeAmounts":[509600000,1680000,0]}
      {"OpenNums":[{"openNum":[1,4,3,5,10,3,2,1,4,7,6,4,1,5,10,1,3,2,5,8,5,5,3,6],"prizeAmount":9600000,"prizeIdx":[[1,4,8,11,14]]},{"openNum":[1,2,3,5,7,3,2,1,4,7,6,2,1,5,4,1,3,2,5,8,5,5,3,6],"prizeAmount":3200000,"prizeIdx":[[1,6,11]]},{"openNum":[1,8,3,5,7,3,3,1,4,7,6,5,1,5,4,1,3,2,5,8,5,5,3,6],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":3,"odds":8,"wilds":[4]},"prizeAmount":12800000,"betAmount":10000,"replace":[{"1":2,"11":2,"14":4,"4":7,"8":4},{"1":8,"11":5,"6":3}],"prizeAmounts":[9600000,3200000,0]}
      {"OpenNums":[{"openNum":[7,6,1,3,7,10,10,1,5,2,1,8,10,3,6,2,5,4,6,4,8,3,4,4],"prizeAmount":45000000,"prizeIdx":[[2,5,6,7,10,12]]},{"openNum":[7,6,6,3,7,3,4,5,5,2,4,8,1,3,6,2,5,4,6,4,8,3,4,4],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":2,"odds":10,"wilds":[5,6]},"prizeAmount":45000000,"betAmount":10000,"replace":[{"10":4,"12":1,"2":6,"5":3,"6":4,"7":5}],"prizeAmounts":[45000000,0]}
      {"OpenNums":[{"openNum":[4,7,2,6,10,3,2,6,1,8,5,1,10,4,3,8,4,4,2,6,5,7,5,2],"prizeAmount":0,"prizeIdx":[]}],"freePrize":false,"freeInfo":{"surplusFreeCount":1,"odds":11,"wilds":[4]},"prizeAmount":0,"betAmount":10000,"replace":[],"prizeAmounts":[0]}
      */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotApotheosisSetBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotApotheosisProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, instantiate, Label, Toggle, UIOpacity, tween, Component, slotApotheosisProxy, slotApotheosisGameEvent;
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
      v3 = module.v3;
      instantiate = module.instantiate;
      Label = module.Label;
      Toggle = module.Toggle;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      slotApotheosisProxy = module.default;
      slotApotheosisGameEvent = module.slotApotheosisGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "bfdc15N+tZN9KnsV7nHpfgs", "slotApotheosisSetBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var slotApotheosisSetBase = exports('default', (_dec = ccclass("slotApotheosisSetBase"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotApotheosisSetBase, _Component);
        function slotApotheosisSetBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "toggleTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ToggleContainer", _descriptor2, _assertThisInitialized(_this));
          _this.firstSet = true;
          return _this;
        }
        var _proto = slotApotheosisSetBase.prototype;
        _proto.onLoad = function onLoad() {
          this.node.scale = v3(this.node.scale.x, 0, this.node.scale.z);
          for (var i = 0; i < 15; i++) {
            var toggleTemp = this.ToggleContainer.getChildByName("" + i);
            if (!toggleTemp) {
              toggleTemp = instantiate(this.toggleTemp);
              toggleTemp.name = "" + i;
              this.ToggleContainer.addChild(toggleTemp);
            }
            var base = slotApotheosisProxy.arrBetList[i] / 1000;
            toggleTemp.getChildByName("Label_score").getComponent(Label).string = base + "K";
          }
          var mask = this.node.getChildByName("mask");
          mask.on(Node.EventType.TOUCH_END, this.hide, this);
        };
        _proto.start = function start() {
          var baseBetIndex = this.getBaseIndex();
          var curToggle = this.ToggleContainer.getChildByName("" + baseBetIndex);
          curToggle.getComponent(Toggle).isChecked = true;
          this.firstSet = false;
        };
        _proto.onEnable = function onEnable() {
          this.node.scale = v3(this.node.scale.x, 0, this.node.scale.z);
          this.node.getComponent(UIOpacity).opacity = 0;
          tween(this.node.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          tween(this.node).to(0.1, {
            scale: v3(this.node.scale.x, 1.3, this.node.scale.z)
          }, {
            easing: "quadOut"
          }).to(0.05, {
            scale: v3(this.node.scale.x, 1.25, this.node.scale.z)
          }, {
            easing: "quadIn"
          }).start();
        };
        _proto.hide = function hide() {
          var _this2 = this;
          slotApotheosisProxy.emit(slotApotheosisGameEvent.UPDATEBASEBET);
          tween(this.node.getComponent(UIOpacity)).to(0.05, {
            opacity: 0
          }).start();
          tween(this.node).to(0.05, {
            scale: v3(this.node.scale.x, 1.3, this.node.scale.z)
          }, {
            easing: "quadOut"
          }).to(0.1, {
            scale: v3(this.node.scale.x, 0, this.node.scale.z)
          }, {
            easing: "quadIn"
          }).call(function () {
            _this2.node.active = false;
          }).start();
        };
        _proto.getBaseIndex = function getBaseIndex() {
          for (var index = 0; index < slotApotheosisProxy.arrBetList.length; index++) {
            if (Math.floor(slotApotheosisProxy.arrBetList[index] / 1000) == slotApotheosisProxy.curBet) {
              return index;
            }
          }
          return 0;
        };
        _proto.onToggleClick = function onToggleClick(toggle) {
          if (this.firstSet) {
            return;
          }
          var iIndex = parseInt(toggle.node.name);
          gts.Debug.Log("==baseScore==" + slotApotheosisProxy.arrBetList[iIndex]);
          slotApotheosisProxy.curBet = slotApotheosisProxy.arrBetList[iIndex] / 1000;
          this.hide();
        };
        return slotApotheosisSetBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleTemp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ToggleContainer", [_dec3], {
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

System.register("chunks:///_virtual/slotApotheosisUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bd872b3eDREwKOGxNxJ4Mdu", "slotApotheosisUtils", undefined);
      var numberFormat = exports('numberFormat', function numberFormat(num, digits) {
        var rate = "" + num;
        var arrRate = rate.split(".");
        var digit = num - Math.floor(num);
        if (!arrRate[1] || digit < 1 / Math.pow(10, digits)) {
          rate = "" + arrRate[0];
        } else if (arrRate[1].length < digits) {
          rate = arrRate[0] + "." + arrRate[1];
        } else if (arrRate[1].length > digits) {
          arrRate[1] = arrRate[1].substring(0, digits);
          rate = arrRate[0] + "." + arrRate[1];
        }
        return rate;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotApotheosisView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './slotApotheosisProxy.ts', './slotApotheosisDef.ts', './ViewManager.ts', './GUtil.ts', './MainManager.ts', './NetManager.ts', './slotApotheosisUtils.ts', './slotApotheosisRun.ts', './DataManager.ts', './I18n.ts', './ScrollNumLabel.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, sp, Label, sys, UITransform, tween, v3, instantiate, UIOpacity, Component, Common, slotApotheosisProxy, slotApotheosisGameEvent, slotApotheosisDef, ViewManager, GUtil, MainManager, NetManager, numberFormat, slotApotheosisRun, DataManager, UserKey, i18n, ScrollNumLabel, AudioManager;
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
      Label = module.Label;
      sys = module.sys;
      UITransform = module.UITransform;
      tween = module.tween;
      v3 = module.v3;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      slotApotheosisProxy = module.default;
      slotApotheosisGameEvent = module.slotApotheosisGameEvent;
    }, function (module) {
      slotApotheosisDef = module.slotApotheosisDef;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      numberFormat = module.numberFormat;
    }, function (module) {
      slotApotheosisRun = module.slotApotheosisRun;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ScrollNumLabel = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25;
      cclegacy._RF.push({}, "f0e68jv0itIc44cA9szzGXK", "slotApotheosisView", undefined);
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
        WAIT: 9
      };
      var GETDATA_TIME = 0.5;
      var slotApotheosisView = exports('slotApotheosisView', (_dec = ccclass('slotApotheosisView'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(Node), _dec8 = property(sp.Skeleton), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(sp.Skeleton), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(sp.Skeleton), _dec23 = property(sp.Skeleton), _dec24 = property(Label), _dec25 = property(ScrollNumLabel), _dec26 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotApotheosisView, _Component);
        function slotApotheosisView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "particleSystem2D", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "menu_more", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "menu_setBet_Skeleton", _descriptor3, _assertThisInitialized(_this));
          //修改金额按钮
          _initializerDefineProperty(_this, "menu_setAuto_Skeleton", _descriptor4, _assertThisInitialized(_this));
          //修改自动模式按钮
          _initializerDefineProperty(_this, "baseBg_Skeleton", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottom_box", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "intoFree_Skeleton", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trun_start", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trun_start_mask", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normal_bg", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_bg", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_bg_count", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_bg_odd", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_Skeleton", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_num", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_bottom", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run_box", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run_btn", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winData", _descriptor20, _assertThisInitialized(_this));
          //中奖次数
          _initializerDefineProperty(_this, "winCombo", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold_coins_Skeleton1", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor25, _assertThisInitialized(_this));
          _this._bet = 500;
          _this._lock = false;
          _this._isAuto = false;
          _this._isFree = false;
          _this._freeCount = 0;
          _this._freeOdd = 0;
          _this._state = RunState.NORMAL;
          _this._runTime = 0;
          _this._runDelay = 0.1;
          _this._runDelayCache = 0.1;
          _this._current_result = null;
          _this._current_index = 0;
          _this._errCount = 0;
          _this._particleList = [-450, -280, -100, 100, 280, 450];
          _this._showLightAudioNum = null;
          _this._isAutoNotBet = false;
          _this._testNum = 0;
          return _this;
        }
        var _proto = slotApotheosisView.prototype;
        //转盘转动下，什么按钮不可以点击
        _proto.start = function start() {
          var _this2 = this;
          console.log('5');
          this.menu_more.getChildByName('mask').on(Node.EventType.TOUCH_END, function () {
            _this2.menu_more.active = !_this2.menu_more.active;
          });
          this.trun_start.on(Node.EventType.TOUCH_END, function () {
            if (_this2._lock) return;
            _this2.trun_start_mask.active = true;
            slotApotheosisDef.palyAudio(slotApotheosisDef.audio.Spin);
            _this2.preStart();
          });
          this.initEvent();

          //初始化
          //this.initPage()

          this.updateGoldData();

          //接口
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotApotheosis.info, {});
          // this.scheduleOnce(() => {
          //     this.intoFreeOrNormal(true)
          // }, 2)
        };

        _proto.update = function update(dt) {
          var _this3 = this;
          switch (this._state) {
            case RunState.START:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (slotApotheosisProxy.result) {
                    this.calResult();
                    this.changeState(RunState.RUNNING);
                  } else {
                    this._runTime = GETDATA_TIME;
                    this._errCount++;
                    if (this._errCount > 3) {
                      if (this._lock) {
                        this._errCount = 0;
                        this.changeState(RunState.NORMAL);
                        NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
                        this.scheduleOnce(function () {
                          _this3.updateGoldData();
                        }, 1);
                        this._lock = false;
                        this.trun_start_mask.active = false;
                      }
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
                if (this._isAuto && !this._isAutoNotBet || this._isFree) {
                  this.preStart();
                }
                break;
              }
          }
        };
        _proto.changeState = function changeState(state) {
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
        _proto.initEvent = function initEvent() {
          var _this4 = this;
          //进入页面获取上次数据
          slotApotheosisProxy.on(slotApotheosisGameEvent.UPDATE_BETLIST, this.initPage, this);

          //更新基础倍数
          slotApotheosisProxy.on(slotApotheosisGameEvent.UPDATEBASEBET, this.updateBaseBet, this);

          //第一轮结束
          slotApotheosisProxy.on(slotApotheosisGameEvent.END, function () {
            _this4.changeState(RunState.STOP);
          }, this);

          //生成粒子效果，增加倍数
          slotApotheosisProxy.on(slotApotheosisGameEvent.PARTICLE2D, function (data) {
            _this4.particle2dAnimation(data);
          }, this);

          //消除动画结束
          slotApotheosisProxy.on(slotApotheosisGameEvent.SHOWNEXT, function () {
            _this4.showNext();
          }, this);
        }

        //开始游戏校验（初始化页面 & 请求开奖结果）
        ;

        _proto.preStart = function preStart() {
          if (this._lock) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._bet && !this._isAuto && !this._isFree) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.trun_start_mask.active = false;
            return;
          }
          if (gold < this._bet && this._isAuto && !this._isFree && !this._isAutoNotBet) {
            this._isAutoNotBet = true;
            this._isAuto = false;
            this.menu_setAuto_Skeleton.setAnimation(0, 'idle', true);
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.trun_start_mask.active = false;
            return;
          }
          if (!this._isAutoNotBet) {
            this._lock = true;
            !this._isFree && this.txt_win.reset(0);
            this._state = RunState.START;
            this._runTime = GETDATA_TIME;
            !this._isFree && this.updateGoldData(-this._bet);
            this._runDelayCache = this._runDelay;
            this.sendBet();
          }
        };
        _proto.clickRun = function clickRun() {
          var _this5 = this;
          if (this.gold_coins_Skeleton1.node.active) {
            this.gold_coins_Skeleton1.node.active = false;
          }
          if (this._isFree) {
            this._freeCount -= 1;
            this._freeCount <= 0 ? this._freeCount = 0 : '';
            this.free_bg_count.string = this._freeCount + '';
          }
          if (this._isFree) {
            this.run_box.getComponent(slotApotheosisRun).run('normal');
          } else {
            this.run_box.getComponent(slotApotheosisRun).run(this._runDelayCache == 0 ? 'fast' : 'normal');
          }
          this.run_box.getComponent(UITransform).height = 440;
          if (this._runDelayCache == 0 && !this._isFree) {
            this.scheduleOnce(function () {
              _this5.trun_start_mask.active = false;
              _this5.run_box.getComponent(slotApotheosisRun).getResult(_this5._current_result._openNumbers, false, _this5._current_result._wilds, _this5._showLightAudioNum, _this5._current_result._fakeWilds);
            }, 0.1);
          } else {
            //每条间隔0.1s，总共0.5
            this.scheduleOnce(function () {
              _this5.trun_start_mask.active = false;
              _this5.run_box.getComponent(slotApotheosisRun).getResult(_this5._current_result._openNumbers, _this5._current_result._showLight, _this5._current_result._wilds, _this5._showLightAudioNum, _this5._current_result._fakeWilds);
            }, 1.2);
          }
        };
        _proto.clickStop = function clickStop() {
          var _this6 = this;
          //判断第一轮中奖结果
          //高度增加为了展示效果
          this.run_box.getComponent(UITransform).height = 560;
          if (this._current_result && this._current_result['_prizeAmounts'] && this._current_result['_prizeAmounts'][this._current_index] > 0) {
            //展示遮照层
            this.run_box.getChildByName('mask').active = true;
            this.run_box.getChildByName('mask').getComponent(UITransform).priority = 97;
            this.run_box.getComponent(slotApotheosisRun).changeItem(this._current_result['_replace'][this._current_index]);
            this.scheduleOnce(function () {
              _this6.winData.getChildByName('win').getComponent(Label).string = _this6._current_result['_prizeAmounts'] ? Common.numFormat(_this6._current_result['_prizeAmounts'][_this6._current_index] + '') : '';
              _this6.winData.getChildByName('win').setScale(1, 1, 1);
              _this6.winData.active = true;
              _this6.winCombo.node.active = true;
              _this6.winCombo.setAnimation(0, 'combo' + (_this6._current_index + 1), false);
              slotApotheosisDef.palyAudio(slotApotheosisDef.audio['Combo' + (_this6._current_index + 1)]);
              tween(_this6.winData.getChildByName('win')).delay(0.07).to(0.09, {
                scale: v3(1.5, 1.5, 1)
              }).to(0.09, {
                scale: v3(1.2, 1.2, 1)
              }).start();
            }, 0.5);
            tween(this.txt_win.node).to(0.3, {
              scale: v3(1.2, 1.2, 1)
            }).delay(0.4).to(0.3, {
              scale: v3(1, 1, 1)
            }).start();
            if (this.txt_win.string) {
              this.txt_win.string = Common.numFormat(parseInt(this.txt_win.string.replace(/,/g, '')) + this._current_result['_prizeAmounts'][this._current_index] + '');
            } else {
              this.txt_win.string = Common.numFormat(this._current_result['_prizeAmounts'][this._current_index] + '');
            }
          } else if (!this._isFree && this._current_result && this._current_result._freeInfo && this._current_result._freeInfo.surplusFreeCount > 0) {
            this.enterFreeAnimation();
          } else {
            //时间需要和免费模式下wild动画时间一致?
            this.scheduleOnce(function () {
              _this6.run_box.getChildByName('mask').active = false;
              _this6.allEnd();
            });
          }
        };
        _proto.showNext = function showNext() {
          var _this7 = this;
          this._current_index += 1;
          if (this._current_result && this._current_result['_prizeAmounts'][this._current_index] > 0) {
            this.run_box.getComponent(slotApotheosisRun).changeItem(this._current_result['_replace'][this._current_index]);
            tween(this.txt_win.node).to(0.3, {
              scale: v3(1.2, 1.2, 1)
            }).delay(0.4).to(0.3, {
              scale: v3(1, 1, 1)
            }).start();
            if (this.txt_win.string) {
              this.txt_win.string = Common.numFormat(parseInt(this.txt_win.string.replace(/,/g, '')) + this._current_result['_prizeAmounts'][this._current_index] + '');
            } else {
              this.txt_win.string = Common.numFormat(this._current_result['_prizeAmounts'][this._current_index] + '');
            }
            this.scheduleOnce(function () {
              tween(_this7.winData).delay(0.07).to(0.1, {
                scale: v3(1, 1, 1)
              }).call(function () {
                _this7.winCombo.setAnimation(0, 'combo' + (_this7._current_index + 1), false);
                slotApotheosisDef.palyAudio(slotApotheosisDef.audio['Combo' + (_this7._current_index + 1)]);
                _this7.winData.getChildByName('win').getComponent(Label).string = _this7._current_result['_prizeAmounts'] ? Common.numFormat(_this7._current_result['_prizeAmounts'][_this7._current_index] + '') : '';
                tween(_this7.winData.getChildByName('win')).to(0.09, {
                  scale: v3(1.5, 1.5, 1)
                }).to(0.09, {
                  scale: v3(1.2, 1.2, 1)
                }).start();
              }).start();
            }, 0.5);
          } else if (!this._isFree && this._current_result && this._current_result._freeInfo && this._current_result._freeInfo.surplusFreeCount > 0) {
            this.enterFreeAnimation();
          } else {
            //时间需要和免费模式下wild动画时间一致?
            this.scheduleOnce(function () {
              _this7.run_box.getChildByName('mask').active = false;
              _this7.allEnd();
            });
          }
        };
        _proto.initPage = function initPage(data) {
          var _this8 = this;
          //let data = { "OpenNums": [{ "openNum": [2, 1, 2, 5, 7, 9, 1, 3, 8, 7, 5, 5, 2, 8, 3, 7, 10, 4, 2, 3, 8, 7, 5, 6], "prizeAmount": 0, "prizeIdx": [] }], "freePrize": true, "freeInfo": { "surplusFreeCount": 10, "odds": 1, "wilds": [] }, "prizeAmount": 0, "betAmount": 10000, "replace": [], "prizeAmounts": [0] }
          var card = [];
          if (data && data.OpenNums && data.OpenNums.length > 0) {
            if (data.freeInfo && data.freeInfo.surplusFreeCount > 0) {
              slotApotheosisProxy.result = data;
              this.txt_win.string = Common.numFormat(data.freeInfo.totalPrizeAmount + '');
              this.calResult();
              this.intoFreeOrNormal(true, false);
              this.scheduleOnce(function () {
                _this8._isFree = true;
                _this8._freeCount = data.freeInfo.surplusFreeCount;
                _this8._freeOdd = data.freeInfo.odds;
                _this8._current_result = null;
                slotApotheosisProxy.result = null;
                _this8._current_index = 0;
                _this8._lock = false;
              }, 3);
            }
            slotApotheosisDef.palyMusic(slotApotheosisDef.audio.main);
            card = data.OpenNums[data.OpenNums.length - 1]['openNum'];
          } else {
            slotApotheosisDef.palyMusic(slotApotheosisDef.audio.main);
            for (var i = 0; i < 24; i++) {
              var random = Math.floor(Math.random() * 8) + 1;
              card.push(random);
            }
          }
          this.run_box.getComponent(slotApotheosisRun).initCard(card);
        };
        _proto.sendBet = function sendBet() {
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotApotheosis.bet, {
            betAmount: Math.floor(this._bet) + ''
          });

          // if (this._testNum == 0) {
          //     NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotApotheosis.buyFree, { betAmount: Math.floor(this._bet) + '' });
          // } else {
          //     NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotApotheosis.bet, { betAmount: Math.floor(this._bet) + '' });
          // }
          // this._testNum += 1

          //没中奖
          // slotApotheosisProxy.result = { "OpenNums": [{ "openNum": [8, 7, 8, 5, 5, 3, 10, 2, 3, 2, 4, 4, 1, 1, 4, 5, 5, 5, 8, 10, 1, 1, 7, 5], "prizeAmount": 0, "prizeIdx": [] }], "freePrize": false, "freeInfo": { "surplusFreeCount": 0, "odds": 1, "wilds": [] }, "prizeAmount": 0, "betAmount": 10000, "replace": [], "prizeAmounts": [0] }
          // //连续中奖
          // slotApotheosisProxy.result =
          // {
          //     "OpenNums": [
          //         { "openNum": [6, 4, 4, 6, 3, 3, 4, 1, 7, 10, 4, 5, 8, 1, 7, 8, 7, 6, 5, 7, 3, 3, 2, 1], "prizeAmount": 7200000, "prizeIdx": [[1, 2, 6, 9, 10]] }],
          //     "freePrize": false, "freeInfo": { "surplusFreeCount": 2, "odds": 9, "wilds": [] }, "prizeAmount": 63540000, "betAmount": 10000,
          //     "replace": [
          //         { "1": 8, "10": 4, "2": 7, "6": 10, "9": 8 },
          //         { "1": 8, "12": 6, "14": 5, "15": 4, "16": 2, "19": 8, "2": 1, "6": 10, "8": 10, "9": 2 },
          //         { "0": 5, "1": 7, "12": 8, "13": 7, "17": 5, "2": 7, "3": 3, "6": 7, "7": 10, "8": 5 },
          //         { "0": 5, "11": 5, "14": 4, "17": 8, "18": 2, "7": 1, "8": 4 }], "prizeAmounts": [7200000, 3240000, 35820000, 17280000, 0]
          // }
          //中一次奖
          // slotApotheosisProxy.result = {
          //     "OpenNums": [
          //         { "openNum": [4, 6, 4, 7, 10, 10, 7, 7, 1, 4, 6, 3, 7, 4, 7, 1, 8, 8, 7, 8, 4, 5, 10, 4], "prizeAmount": 7680000, "prizeIdx": [[0, 2, 4, 5, 9, 13], [1, 4, 5, 10]] },
          //         { "openNum": [2, 5, 7, 7, 3, 1, 7, 7, 1, 4, 8, 3, 7, 2, 7, 1, 8, 8, 7, 8, 4, 5, 10, 4], "prizeAmount": 0, "prizeIdx": [] }],
          //     "freePrize": false, "freeInfo": { "surplusFreeCount": 0, "odds": 3, "wilds": [4, 5] }, "prizeAmount": 7680000, "betAmount": 10000,
          //     "replace": [{ "0": 2, "1": 5, "10": 8, "13": 2, "2": 7, "4": 3, "5": 1, "9": 4 }], "prizeAmounts": [7680000, 0]
          // }

          //期待动画
          //slotApotheosisProxy.result = { "OpenNums": [{ "openNum": [8, 7, 9, 5, 5, 3, 10, 9, 3, 2, 4, 9, 1, 9, 4, 5, 5, 5, 8, 9, 1, 1, 7, 5], "prizeAmount": 0, "prizeIdx": [] }], "freePrize": false, "freeInfo": { "surplusFreeCount": 0, "odds": 1, "wilds": [] }, "prizeAmount": 0, "betAmount": 10000, "replace": [], "prizeAmounts": [0] }

          //进入免费
          // slotApotheosisProxy.result = {
          //     "OpenNums": [
          //         { "openNum": [8, 7, 9, 5, 5, 3, 10, 9, 3, 2, 4, 9, 1, 9, 4, 5, 5, 5, 8, 9, 1, 9, 7, 5], "prizeAmount": 0, "prizeIdx": [] }],
          //     "freePrize": false, "freeInfo": { "surplusFreeCount": 10, "odds": 1, "wilds": [] },
          //     "prizeAmount": 0, "betAmount": 10000, "replace": [], "prizeAmounts": [0]
          // }

          //测试wild效果
          // slotApotheosisProxy.result = {
          //     "OpenNums": [{ "openNum": [8, 7, 10, 5, 5, 3, 3, 2, 3, 2, 1, 4, 1, 1, 4, 5, 5, 5, 8, 3, 1, 1, 7, 5], "prizeAmount": 0, "prizeIdx": [] }], "freePrize": false,
          //     "freeInfo": { "surplusFreeCount": 0, "odds": 1, "wilds": [2, 8, 12, 23] }, "prizeAmount": 0, "betAmount": 10000, "replace": [], "prizeAmounts": [0]
          // }

          // slotApotheosisProxy.result =
          // {
          //     "OpenNums": [
          //         { "openNum": [3, 7, 4, 8, 7, 8, 4, 4, 8, 8, 2, 7, 5, 7, 9, 2, 3, 3, 10, 2, 1, 3, 3, 5], "prizeAmount": 160, "prizeIdx": [[1, 4, 11, 13, 18], [3, 5, 8, 9]] },
          //         { "openNum": [3, 5, 4, 1, 6, 4, 4, 4, 3, 6, 2, 4, 5, 7, 9, 2, 3, 3, 9, 2, 1, 3, 3, 5], "prizeAmount": 600, "prizeIdx": [[2, 5, 6, 7, 11]] },
          //         { "openNum": [3, 5, 1, 1, 6, 9, 4, 10, 3, 6, 2, 2, 5, 7, 9, 2, 3, 3, 9, 2, 1, 3, 3, 5], "prizeAmount": 300, "prizeIdx": [[0, 7, 8]] },
          //         { "openNum": [2, 5, 1, 1, 6, 9, 4, 2, 9, 6, 2, 2, 5, 7, 9, 2, 3, 3, 9, 2, 1, 3, 3, 5], "prizeAmount": 4800, "prizeIdx": [[0, 7, 10, 11, 15, 19]] },
          //         { "openNum": [6, 5, 1, 1, 6, 9, 4, 6, 9, 6, 1, 3, 5, 7, 9, 6, 3, 3, 9, 9, 1, 3, 3, 5], "prizeAmount": 480, "prizeIdx": [[0, 4, 7, 9, 15]] },
          //         { "openNum": [4, 5, 1, 1, 9, 9, 4, 5, 9, 10, 1, 3, 5, 7, 9, 1, 3, 3, 9, 9, 1, 3, 3, 5], "prizeAmount": 440, "prizeIdx": [[0, 6, 9], [1, 7, 9, 12]] },
          //         { "openNum": [4, 8, 1, 1, 9, 9, 3, 1, 9, 4, 1, 3, 5, 7, 9, 1, 3, 3, 9, 9, 1, 3, 3, 5], "prizeAmount": 3000, "prizeIdx": [[2, 3, 7, 10, 15]] },
          //         { "openNum": [4, 8, 1, 2, 9, 9, 3, 5, 9, 4, 4, 3, 5, 7, 9, 2, 3, 3, 9, 9, 1, 3, 3, 5], "prizeAmount": 0, "prizeIdx": [] }],
          //     "freePrize": false, "freeInfo": { "surplusFreeCount": 0, "odds": 0, "wilds": [] }, "prizeAmount": 9780, "betAmount": 1000,
          //     "replace": [{ "1": 5, "11": 4, "13": 7, "18": 9, "3": 1, "4": 6, "5": 4, "8": 3, "9": 6 }, { "11": 2, "2": 1, "5": 9, "6": 4, "7": 10 }, { "0": 2, "7": 2, "8": 9 }, { "0": 6, "10": 1, "11": 3, "15": 6, "19": 9, "7": 6 }, { "0": 4, "15": 1, "4": 9, "7": 5, "9": 10 }, { "0": 4, "1": 8, "12": 5, "6": 3, "7": 1, "9": 4 }, { "10": 4, "15": 2, "2": 1, "3": 2, "7": 5 }],
          //     "prizeAmounts": [160, 600, 300, 4800, 480, 440, 3000, 0]
          // }

          // slotApotheosisProxy.result = {
          //     "OpenNums": [
          //         { "openNum": [2, 7, 9, 7, 7, 4, 10, 8, 5, 1, 10, 2, 2, 4, 10, 9, 2, 8, 7, 7, 10, 2, 7, 5], "prizeAmount": 35200, "prizeIdx": [[0, 6, 10, 11, 12, 14, 16, 20, 21], [1, 3, 4, 6, 10, 14, 18, 19, 20, 22]] },
          //         { "openNum": [9, 7, 9, 1, 10, 4, 3, 8, 5, 1, 2, 4, 7, 4, 3, 9, 1, 8, 7, 1, 10, 8, 1, 5], "prizeAmount": 250, "prizeIdx": [[3, 4, 9]] },
          //         { "openNum": [9, 7, 9, 4, 8, 4, 3, 8, 5, 7, 2, 4, 7, 4, 3, 9, 1, 8, 7, 1, 10, 8, 1, 5], "prizeAmount": 300, "prizeIdx": [[3, 5, 11, 13]] },
          //         { "openNum": [9, 7, 9, 9, 8, 2, 3, 8, 5, 7, 2, 1, 7, 8, 3, 9, 1, 8, 7, 1, 10, 8, 1, 5], "prizeAmount": 0, "prizeIdx": [] }],
          //     "freePrize": false, "freeInfo": { "surplusFreeCount": 0, "odds": 0, "wilds": [], "fakeWilds": null, "totalPrizeAmount": 0 },
          //     "prizeAmount": 35750, "betAmount": 500,
          //     "replace": [{ "0": 9, "1": 7, "10": 2, "11": 4, "12": 7, "14": 3, "16": 1, "18": 7, "19": 1, "20": 10, "21": 8, "22": 1, "3": 1, "4": 10, "6": 3 }, { "3": 4, "4": 8, "9": 7 }, { "11": 1, "13": 8, "3": 9, "5": 2 }],
          //     "prizeAmounts": [35200, 250, 300, 0]
          // }

          // if (this._testNum == 0) {
          //     slotApotheosisProxy.result = { "OpenNums": [{ "openNum": [3, 3, 3, 9, 6, 9, 9, 6, 7, 9, 4, 8, 5, 7, 6, 10, 9, 8, 10, 4, 2, 3, 3, 2], "prizeAmount": 0, "prizeIdx": [] }], "freePrize": false, "freeInfo": { "surplusFreeCount": 0, "odds": 0, "wilds": [], "fakeWilds": null, "totalPrizeAmount": 0 }, "prizeAmount": 0, "betAmount": 500, "replace": [], "prizeAmounts": [0] }
          // } else if (this._testNum == 1) {
          //     slotApotheosisProxy.result = { "OpenNums": [{ "openNum": [1, 7, 7, 5, 8, 8, 10, 2, 7, 6, 9, 10, 9, 9, 7, 2, 6, 4, 9, 8, 7, 2, 6, 1], "prizeAmount": 410, "prizeIdx": [[0, 6, 11], [1, 2, 6, 8, 11, 14], [3, 6, 11]] }, { "openNum": [6, 4, 4, 5, 8, 8, 9, 2, 9, 6, 9, 7, 9, 9, 7, 2, 6, 4, 9, 8, 7, 2, 6, 1], "prizeAmount": 0, "prizeIdx": [] }], "freePrize": false, "freeInfo": { "surplusFreeCount": 0, "odds": 0, "wilds": [], "fakeWilds": null, "totalPrizeAmount": 0 }, "prizeAmount": 410, "betAmount": 500, "replace": [{ "0": 6, "1": 4, "11": 7, "14": 7, "2": 4, "3": 5, "6": 9, "8": 9 }], "prizeAmounts": [410, 0] }
          // } else if (this._testNum == 2) {
          //     slotApotheosisProxy.result = { "OpenNums": [{ "openNum": [3, 8, 4, 9, 7, 2, 4, 3, 10, 9, 9, 9, 3, 3, 10, 4, 6, 2, 5, 8, 10, 5, 1, 1], "prizeAmount": 1950, "prizeIdx": [[0, 7, 8, 12, 13, 14], [2, 6, 8, 14, 15]] }, { "openNum": [9, 8, 4, 9, 7, 2, 6, 6, 7, 9, 9, 9, 1, 10, 10, 3, 6, 2, 5, 8, 10, 5, 1, 1], "prizeAmount": 0, "prizeIdx": [] }], "freePrize": false, "freeInfo": { "surplusFreeCount": 0, "odds": 0, "wilds": [], "fakeWilds": null, "totalPrizeAmount": 0 }, "prizeAmount": 1950, "betAmount": 500, "replace": [{ "0": 9, "12": 1, "13": 10, "14": 10, "15": 3, "2": 4, "6": 6, "7": 6, "8": 7 }], "prizeAmounts": [1950, 0] }
          // } else if (this._testNum == 3) {
          //     slotApotheosisProxy.result = {
          //         "OpenNums": [
          //             { "openNum": [2, 7, 9, 7, 7, 4, 10, 8, 5, 1, 10, 2, 2, 4, 10, 9, 2, 8, 7, 7, 10, 2, 7, 5], "prizeAmount": 35200, "prizeIdx": [[0, 6, 10, 11, 12, 14, 16, 20, 21], [1, 3, 4, 6, 10, 14, 18, 19, 20, 22]] },
          //             { "openNum": [9, 7, 9, 1, 10, 4, 3, 8, 5, 1, 2, 4, 7, 4, 3, 9, 1, 8, 7, 1, 10, 8, 1, 5], "prizeAmount": 250, "prizeIdx": [[3, 4, 9]] },
          //             { "openNum": [9, 7, 9, 4, 8, 4, 3, 8, 5, 7, 2, 4, 7, 4, 3, 9, 1, 8, 7, 1, 10, 8, 1, 5], "prizeAmount": 300, "prizeIdx": [[3, 5, 11, 13]] },
          //             { "openNum": [9, 7, 9, 9, 8, 2, 3, 8, 5, 7, 2, 1, 7, 8, 3, 9, 1, 8, 7, 1, 10, 8, 1, 5], "prizeAmount": 0, "prizeIdx": [] }],
          //         "freePrize": false, "freeInfo": { "surplusFreeCount": 0, "odds": 0, "wilds": [], "fakeWilds": null, "totalPrizeAmount": 0 },
          //         "prizeAmount": 35750, "betAmount": 500,
          //         "replace": [{ "0": 9, "1": 7, "10": 2, "11": 4, "12": 7, "14": 3, "16": 1, "18": 7, "19": 1, "20": 10, "21": 8, "22": 1, "3": 1, "4": 10, "6": 3 }, { "3": 4, "4": 8, "9": 7 }, { "11": 1, "13": 8, "3": 9, "5": 2 }],
          //         "prizeAmounts": [35200, 250, 300, 0]
          //     }
          // } else {
          //     NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotApotheosis.bet, { betAmount: Math.floor(this._bet) + '' });
          // }
          // this._testNum += 1
        }

        //免费模式增加倍数效果
        ;

        _proto.particle2dAnimation = function particle2dAnimation(data) {
          var _this9 = this;
          var node = instantiate(this.particleSystem2D);
          this.node.addChild(node);
          node.setPosition(v3(this._particleList[data.parentI], data.y));
          slotApotheosisDef.palyAudio(slotApotheosisDef.audio.WildBome1);
          tween(node).to(0.4, {
            position: v3(185, 310)
          }).call(function () {
            tween(_this9.free_bg_odd.node).to(0.2, {
              scale: v3(1.7, 1.7)
            }).call(function () {
              node.destroy();
              slotApotheosisDef.palyAudio(slotApotheosisDef.audio.WildBome2);
              _this9.free_bg_odd.string = parseInt(_this9.free_bg_odd.string) + 1 + '';
            }).delay(0.1).to(0.1, {
              scale: v3(1, 1)
            }).start();
          }).start();
        }

        //进入免费模式前的效果
        ;

        _proto.enterFreeAnimation = function enterFreeAnimation() {
          var _this10 = this;
          this.run_box.getChildByName('mask').active = true;
          this.run_box.getChildByName('mask').getComponent(UITransform).priority = 97;
          this.run_box.getComponent(slotApotheosisRun).toFreeAnimation();
          this.scheduleOnce(function () {
            _this10.run_box.getChildByName('mask').active = false;
            _this10.intoFreeOrNormal(true);
          }, 2);
        };
        _proto.allEnd = function allEnd() {
          var _this11 = this;
          console.log('结束');
          //针对第一行出现bonus的兼容处理
          this.run_box.getComponent(UITransform).height = 520;
          this.run_box.getComponent(slotApotheosisRun).removeItemBg();
          this._errCount = 0;

          //喷出金币效果
          if (parseInt(this.txt_win.string.replace(/,/g, '')) / this._bet >= 3 && !this._isFree) {
            slotApotheosisDef.palyAudio(slotApotheosisDef.audio.Common_coin_medium);
            this.gold_coins_Skeleton1.node.active = true;
            this.gold_coins_Skeleton1.setAnimation(0, 'win', false);
            this.scheduleOnce(function () {
              if (_this11.gold_coins_Skeleton1.node.active) {
                _this11.gold_coins_Skeleton1.node.active = false;
              }
            }, 1.8);
          }
          if (!this._isFree && this._freeCount > 0) {
            if (parseInt(this.txt_win.string.replace(/,/g, '')) / this._bet >= 3 && this._isAuto) {
              this.scheduleOnce(function () {
                _this11._isFree = true;
              }, 1.8);
            } else {
              this._isFree = true;
            }
          }
          if (this._isFree && this._freeCount == 0) {
            this._isFree = false;
            this._freeOdd = 1;
            this.free_end.active = true;
            this.free_end_num.node.active = false;
            this.free_end_num.string = Common.numFormat(parseInt(this.txt_win.string.replace(/,/g, '')) + '');
            this.free_end_Skeleton.node.active = true;
            //免费结束效果
            slotApotheosisDef.palyAudio(slotApotheosisDef.audio.BonusGame_End);
            this.free_end_Skeleton.setAnimation(0, 'intro', false);
            this.scheduleOnce(function () {
              _this11.free_end_num.node.getComponent(UIOpacity).opacity = 100;
              _this11.free_end_num.node.active = true;
              tween(_this11.free_end_num.node.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
            }, 0.6);
            this.free_end_Skeleton.setCompleteListener(function () {
              _this11.free_end_Skeleton.setCompleteListener(null);
              _this11.free_end_Skeleton.setAnimation(0, 'idle', false);
              _this11.scheduleOnce(function () {
                tween(_this11.free_end_num.node.getComponent(UIOpacity)).to(0.3, {
                  opacity: 0
                }).call(function () {
                  _this11.free_end_num.node.active = false;
                  _this11.free_end_num.node.getComponent(UIOpacity).opacity = 255;
                }).start();
                _this11.free_end_Skeleton.setAnimation(0, 'end', false);
                _this11.free_end_Skeleton.setCompleteListener(function () {
                  _this11.free_end_Skeleton.setCompleteListener(null);
                  _this11.free_end.active = false;
                  _this11.free_end_Skeleton.node.active = false;
                  _this11._current_result = null;
                  slotApotheosisProxy.result = null;
                  _this11._current_index = 0;
                  _this11._lock = false;
                  _this11.txt_win.reset(0);
                  _this11.winCombo.node.active = false;
                  _this11.winData.active = false;
                  _this11.updateGoldData();
                  _this11.baseBg_Skeleton.setAnimation(0, 'normal_idle', true);
                  _this11.intoFree_Skeleton.node.active = false;
                  _this11.normal_bg.active = true;
                  _this11.free_bg.active = false;
                  //this.free_bottom.active = false
                  // this.bottom_box.getChildByName('menu').active = true
                  // this.bottom_box.getChildByName('goldTxt').active = true
                  // this.bottom_box.getChildByName('winTxt').getChildByName('title').active = true

                  slotApotheosisDef.palyMusic(slotApotheosisDef.audio.main);
                });
              }, 2);
            });
          } else {
            if (parseInt(this.txt_win.string.replace(/,/g, '')) / this._bet >= 3 && this._isAuto) {
              this.scheduleOnce(function () {
                _this11._current_result = null;
                slotApotheosisProxy.result = null;
                _this11._current_index = 0;
                _this11._lock = false;
                _this11.winCombo.node.active = false;
                _this11.winData.active = false;
                _this11.updateGoldData();
              }, 1.8);
            } else {
              this._current_result = null;
              slotApotheosisProxy.result = null;
              this._current_index = 0;
              this._lock = false;
              this.winCombo.node.active = false;
              this.winData.active = false;
              this.updateGoldData();
            }
          }
        }

        //进入免费模式或普通模式
        ;

        _proto.intoFreeOrNormal = function intoFreeOrNormal(isEnter, isInit) {
          var _this12 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (isInit === void 0) {
            isInit = true;
          }
          if (isEnter) {
            this.baseBg_Skeleton.setAnimation(0, 'free_idle', true);
            slotApotheosisDef.palyAudio(slotApotheosisDef.audio.BonusGame_Start);
            this.intoFree_Skeleton.node.active = true;
            this.intoFree_Skeleton.setAnimation(0, 'idle', false);
            this.normal_bg.active = false;
            this.free_bg.active = true;
            this.intoFree_Skeleton.setCompleteListener(function () {
              _this12.intoFree_Skeleton.setCompleteListener(null);
              _this12.intoFree_Skeleton.node.active = false;
              _this12._current_result ? _this12._freeCount = _this12._current_result._freeInfo.surplusFreeCount : '';
              _this12._current_result ? _this12._freeOdd = _this12._current_result._freeInfo.odds : '';
              _this12.free_bg_count.string = _this12._freeCount + '';
              _this12.free_bg_odd.string = _this12._freeOdd + '';
              AudioManager.instance.stopAllEffect();
              slotApotheosisDef.palyMusic(slotApotheosisDef.audio.Bonus);

              // this.bottom_box.getChildByName('menu').active = false
              // this.bottom_box.getChildByName('goldTxt').active = false
              // this.bottom_box.getChildByName('winTxt').getChildByName('title').active = false
              //this.free_bottom.active = true
              isInit && _this12.txt_win.reset(0);
              isInit && _this12.allEnd();
            });
          } else {
            slotApotheosisDef.palyMusic(slotApotheosisDef.audio.main);
            this.baseBg_Skeleton.setAnimation(0, 'normal_idle', true);
            this.intoFree_Skeleton.node.active = false;
            this.normal_bg.active = true;
            this.free_bg.active = false;

            //this.free_bottom.active = false
            // this.bottom_box.getChildByName('menu').active = true
            // this.bottom_box.getChildByName('goldTxt').active = true
            // this.bottom_box.getChildByName('winTxt').getChildByName('title').active = true

            this.allEnd();
          }
        }

        //自动模式切换
        ;

        _proto.clickChangeAuto = function clickChangeAuto() {
          if (this._isFree) return;
          if (!this._isAuto && DataManager.instance.getUserDataForKey(UserKey.GOLD) < this._bet) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            return;
          }
          if (this._isAutoNotBet) return;
          if (!this._isAuto) {
            this._isAuto = true;
            this.menu_setAuto_Skeleton.setAnimation(0, 'on', true);
          } else {
            this._isAuto = false;
            this.menu_setAuto_Skeleton.setAnimation(0, 'idle', true);
          }
        }

        //获取总金额
        ;

        _proto.updateGoldData = function updateGoldData(used) {
          if (used === void 0) {
            used = 0;
          }
          this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
          //this.txt_goldFree.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
        }

        //是否启动加速
        ;

        _proto.clickChangeQuick = function clickChangeQuick() {
          if (this._isFree) return;
          if (this._runDelay == 0) {
            this._runDelay = 0.1;
          } else {
            this._runDelay = 0;
          }
        }
        //计算结果
        ;

        _proto.calResult = function calResult() {
          var _this13 = this;
          var card = slotApotheosisProxy.result.OpenNums[0]['openNum'];
          var _dataList = [[], [], [], [], [], []];
          var showLightList = [false, false, false, false, false];
          var showLightNum = 0;
          this._showLightAudioNum = null;
          card.map(function (item, index) {
            if (index < 4) {
              _dataList[0].push(item);
            } else if (index < 8) {
              _dataList[1].push(item);
            } else if (index < 12) {
              _dataList[2].push(item);
            } else if (index < 16) {
              _dataList[3].push(item);
            } else if (index < 20) {
              _dataList[4].push(item);
            } else {
              _dataList[5].push(item);
            }
          });
          _dataList.map(function (item, index) {
            if (index < 5) {
              item.map(function (item1) {
                if (item1 == 9) {
                  showLightList[index] = true;
                }
              });
            }
          });
          showLightList.map(function (item, index) {
            if (item) {
              showLightNum++;
              if (index == 0 && _this13._showLightAudioNum === null) {
                _this13._showLightAudioNum = 0;
              } else if (_this13._showLightAudioNum + 1 == index) {
                _this13._showLightAudioNum++;
              }
            }
          });
          //测试wild替换效果
          // let openNum = slotApotheosisProxy.result.OpenNums[0]['openNum']
          // if (slotApotheosisProxy.result.freeInfo.wilds && slotApotheosisProxy.result.freeInfo.wilds.length > 0) {
          //     slotApotheosisProxy.result.freeInfo.wilds.map(item => {
          //         openNum[item] = Math.floor(Math.random() * 9)
          //     })
          // }
          // this._current_result = {
          //     _openNumbers: openNum,
          //     _replace: slotApotheosisProxy.result.replace,
          //     _prizeAmounts: slotApotheosisProxy.result.prizeAmounts,
          //     _showLight: showLightNum == 5,
          //     _freeInfo: slotApotheosisProxy.result.freeInfo,
          //     _wilds: slotApotheosisProxy.result.freeInfo.wilds
          // }

          //免费模式第一轮需要替换wilds
          if (this._isFree) {
            this._current_result = {
              _openNumbers: slotApotheosisProxy.result.OpenNums[0]['openNum'],
              _replace: slotApotheosisProxy.result.replace,
              _prizeAmounts: slotApotheosisProxy.result.prizeAmounts,
              _showLight: showLightNum == 5,
              _freeInfo: slotApotheosisProxy.result.freeInfo,
              _wilds: null,
              _fakeWilds: null
            };
            if (slotApotheosisProxy.result.freeInfo.wilds && slotApotheosisProxy.result.freeInfo.wilds.length > 0) {
              slotApotheosisProxy.result.freeInfo.wilds.map(function (item) {
                slotApotheosisProxy.result.OpenNums[0]['openNum'][item] = Math.floor(Math.random() * 4) + 1;
              });
              this._current_result._wilds = slotApotheosisProxy.result.freeInfo.wilds;
            }
            if (slotApotheosisProxy.result.freeInfo.fakeWilds && slotApotheosisProxy.result.freeInfo.fakeWilds.length > 0) {
              this._current_result._fakeWilds = slotApotheosisProxy.result.freeInfo.fakeWilds;
            }
          } else {
            this._current_result = {
              _openNumbers: slotApotheosisProxy.result.OpenNums[0]['openNum'],
              _replace: slotApotheosisProxy.result.replace,
              _prizeAmounts: slotApotheosisProxy.result.prizeAmounts,
              _showLight: showLightNum == 5,
              _freeInfo: slotApotheosisProxy.result.freeInfo,
              _wilds: null,
              fakeWilds: null
            };
          }
          // if (this._isFree && slotApotheosisProxy.result.freeInfo.wilds && slotApotheosisProxy.result.freeInfo.wilds.length > 0) {
          //     slotApotheosisProxy.result.freeInfo.wilds.map(item => {
          //         slotApotheosisProxy.result.OpenNums[0]['openNum'][item] = Math.floor(Math.random() * 9)
          //     })
          //     this._current_result = {
          //         _openNumbers: slotApotheosisProxy.result.OpenNums[0]['openNum'],
          //         _replace: slotApotheosisProxy.result.replace,
          //         _prizeAmounts: slotApotheosisProxy.result.prizeAmounts,
          //         _showLight: showLightNum == 5,
          //         _freeInfo: slotApotheosisProxy.result.freeInfo,
          //         _wilds: slotApotheosisProxy.result.freeInfo.wilds,
          //         fakeWilds: slotApotheosisProxy.result.fakeWilds
          //     }
          // } else {
          //     this._current_result = {
          //         _openNumbers: slotApotheosisProxy.result.OpenNums[0]['openNum'],
          //         _replace: slotApotheosisProxy.result.replace,
          //         _prizeAmounts: slotApotheosisProxy.result.prizeAmounts,
          //         _showLight: showLightNum == 5,
          //         _freeInfo: slotApotheosisProxy.result.freeInfo,
          //         _wilds: null,
          //         fakeWilds: null
          //     }
          // }
        }

        //更新下单数
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this14 = this;
          if (slotApotheosisProxy.curBet * 1000 != this._bet) {
            this.menu_setBet_Skeleton.setAnimation(0, "intro", false);
            this.menu_setBet_Skeleton.addAnimation(0, "off", true);
            tween(this.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              _this14.txt_bet.string = numberFormat(slotApotheosisProxy.curBet, 2.0) + "K";
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
          }
          this._bet = slotApotheosisProxy.curBet * 1000;
          this._isAutoNotBet = false;
        };
        _proto.onClickShowBet = function onClickShowBet() {
          // if (
          //     NightCityModel.instance.gameStatus != NightCityDef.eRunStatus.NONE ||
          //     NightCityModel.instance.isAuto ||
          //     NightCityModel.instance.freeStatus != NightCityDef.eRunStatus.NONE
          // ) {
          //     return;
          // }
          if (this._isFree) return;
          if (this._lock) return;
          //this.menu_setBet_Skeleton.setAnimation(0, "intro", false);
          Common.loadPopBuddle("prefab/slotApotheosisSetBase", slotApotheosisProxy.bundle, function () {}, function (prefab) {
            //this.menu_setBet_Skeleton.addAnimation(0, "off", true);

            var setBase = instantiate(prefab);
            ViewManager.instance.popNodeView(setBase, true);
          }, true);
        };
        _proto.onClickMenu = function onClickMenu() {
          // if (this._isFree) return
          // if (this._lock) return
          this.menu_more.active = !this.menu_more.active;
        };
        _proto.onClickReturn = function onClickReturn() {
          Common.returnToHall(this, slotApotheosisProxy.BUNDLE);
        };
        _proto.onClickHelp = function onClickHelp() {
          this.menu_more.active = !this.menu_more.active;
          Common.loadPopBuddle("prefab/slotApotheosisHelp", slotApotheosisProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          this.menu_more.active = !this.menu_more.active;
          GUtil.openRecord("slotApotheosis");
        };
        _proto.onClickRank = function onClickRank() {
          this.menu_more.active = !this.menu_more.active;
          GUtil.openRank("slotApotheosis");
        };
        _proto.onDestroy = function onDestroy() {
          //ProxyMgr.close(this);
          EventManager.off(slotApotheosisGameEvent.UPDATEBASEBET, this.updateBaseBet, this);
        };
        return slotApotheosisView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "particleSystem2D", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "menu_more", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "menu_setBet_Skeleton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "menu_setAuto_Skeleton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "baseBg_Skeleton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bottom_box", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "intoFree_Skeleton", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "trun_start", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "trun_start_mask", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "normal_bg", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "free_bg", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "free_bg_count", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "free_bg_odd", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "free_end", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "free_end_Skeleton", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "free_end_num", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "free_bottom", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "run_box", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "run_btn", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "winData", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "winCombo", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "gold_coins_Skeleton1", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec26], {
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
  r('virtual:///prerequisite-imports/slotApotheosisGame', 'chunks:///_virtual/slotApotheosisGame'); 
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