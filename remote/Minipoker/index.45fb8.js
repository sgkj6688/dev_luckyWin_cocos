System.register("chunks:///_virtual/miniGameCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './Common.ts', './I18n.ts', './miniGameDef.ts', './miniModel.ts'], function (exports) {
  var _createClass, cclegacy, ConfigManager, EventManager, Common, i18n, eProto, eEvent, miniModel;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      miniModel = module.miniModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "232d1jnILVEJontItVYt75P", "miniGameCtrl", undefined);
      var miniGameCtrl = exports('miniGameCtrl', /*#__PURE__*/function () {
        function miniGameCtrl() {}
        var _proto = miniGameCtrl.prototype;
        _proto.regist = function regist() {
          //        //注册网络监听--本游戏
          for (var _i = 0, _Object$entries = Object.entries(eProto); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            EventManager.instance.on(value, this.onRecvData, this);
          }

          //        // //注册网络监听--大厅
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
        };
        _proto.unRegist = function unRegist() {
          //        //注册网络监听--本游戏
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.instance.off(value, this.onRecvData, this);
          }
          //        // //注册网络监听--大厅
          EventManager.instance.off(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          //        //
          var emitData = null;
          switch (data.cmd) {
            //            //获取配置信息
            case eProto.GET_INFO:
              {
                //                //获取配置
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                if (data.Data == undefined) return;
                miniModel.Instance.HD_info = data.Data;
                emitData = {};
                break;
              }
            //            /** 开牌*/
            case eProto.GET_OPEN:
              {
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                if (data.Data == undefined) return;
                if (miniModel.Instance.HD_open && miniModel.Instance.HD_open.Pokers) {
                  miniModel.Instance.HD_info.Pokers = [].concat(miniModel.Instance.HD_open.Pokers);
                }
                miniModel.Instance.HD_open = data.Data;
                emitData = {};
                break;
              }
            //            //排行榜
            case eProto.GET_RANKING:
              {
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                emitData = data.Data.list;
                break;
              }
            //            //自己的下注记录
            case eProto.GET_RECORD:
              {
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                if (data.Data.list.length > 0) {
                  miniModel.Instance.recordList = miniModel.Instance.recordList || [];
                  for (var i = 0; i < data.Data.list.length; ++i) {
                    miniModel.Instance.recordList.push(data.Data.list[i]);
                  }
                }
                emitData = data;
                break;
              }
            //            //大奖
            case eProto.GET_PRIZE:
              {
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                if (data.Data.list.length > 0) {
                  miniModel.Instance.recordList_prize = miniModel.Instance.recordList_prize || [];
                  for (var _i3 = 0; _i3 < data.Data.list.length; ++_i3) {
                    miniModel.Instance.recordList_prize.push(data.Data.list[_i3]);
                  }
                }
                emitData = data;
                break;
              }
            //            //实时奖池数据
            case eProto.S2C_GET_JACKPOT:
              {
                if (miniModel.Instance.HD_info.PrizePool == undefined) miniModel.Instance.HD_info.PrizePool = [];
                miniModel.Instance.HD_info.PrizePool = data.Data;
                emitData = {};
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                //                // 断线重连
                Common.closeWait();
                break;
              }
          }
          if (emitData != null) {
            EventManager.instance.emit(eEvent.updateView, data.cmd, emitData);
          }
        };
        _createClass(miniGameCtrl, null, [{
          key: "Instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new miniGameCtrl();
              miniModel.Instance.init();
            }
            return this._instance;
          }
        }]);
        return miniGameCtrl;
      }());
      miniGameCtrl._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/miniGameDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "733a7X/+o1Alqgil1TMhY7N", "miniGameDef", undefined);
      //gameDef moudle
      /** 小扑克 */
      var cBundle = exports('cBundle', "Minipoker");
      var CMList = exports('CMList', {
        100: 0
      });
      var eRoomStatus = exports('eRoomStatus', {
        none: 0,
        startGame: 2,
        yxxBet: 3,
        result: 6
      });

      //网络消息 C2S_:表示send S2C_:recv  没有标识:send&&recv
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["GET_INFO"] = "mini_poker/HD_info";
        eProto["GET_OPEN"] = "mini_poker/HD_open";
        eProto["GET_RANKING"] = "mini_poker/HD_leaderBoard";
        eProto["GET_RECORD"] = "mini_poker/HD_record";
        eProto["GET_PRIZE"] = "mini_poker/HD_bigPrize";
        eProto["S2C_GET_JACKPOT"] = "mini_poker/increasePrize";
        eProto["C2S_SEND_EXIT"] = "mini_poker/HD_leave";
        return eProto;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["updateView"] = "mini_updateView";
        eEvent["resetData"] = "mini_resetData";
        return eEvent;
      }({})); //

      //////////////////////////////////////////////
      /** S2C 网络包结构
       * S2C = {"Data":{},"GameType":"yxx","Action":"HD_UpdatePlayerNum","ErrMsg":"操作成功","Code":0,"cmd":"yxx/HD_UpdatePlayerNum"}
       */
      /**配置信息 */
      /**大奖信息 */
      /** 大奖列表 */
      /**记录信息 */
      /**记录列表 */
      /**钱包信息 */
      /**结果信息 */
      //排行榜
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/miniModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ad738inS8RBVY11uOVc87uE", "miniModel", undefined);
      var miniModel = exports('miniModel', /*#__PURE__*/function () {
        function miniModel() {
          this._hd_info = void 0;
          this._HD_open = void 0;
          this._recordList_prize = [];
          this._recordList = [];
        }
        var _proto = miniModel.prototype;
        _proto.init = function init() {};
        _createClass(miniModel, [{
          key: "HD_info",
          get: function get() {
            return this._hd_info;
          },
          set: function set(info) {
            this._hd_info = info;
          }
        }, {
          key: "HD_open",
          get: function get() {
            return this._HD_open;
          },
          set: function set(info) {
            this._HD_open = info;
          }
        }, {
          key: "recordList_prize",
          get: function get() {
            return this._recordList_prize;
          },
          set: function set(info) {
            this._recordList_prize = info;
          }
        }, {
          key: "recordList",
          get: function get() {
            return this._recordList;
          },
          set: function set(info) {
            this._recordList = info;
          }
        }], [{
          key: "Instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new miniModel();
            }
            return this._instance;
          }
        }]);
        return miniModel;
      }());
      miniModel._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Minipoker", ['./MiniPokerHelp.ts', './MiniPokerMainView.ts', './MiniPokerPrize.ts', './MiniPokerRanking.ts', './MiniPokerRecord.ts', './MiniPokerReel.ts', './MiniPokerReelContainer.ts', './miniGameCtrl.ts', './miniGameDef.ts', './miniModel.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MiniPokerHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, isValid, UIOpacity, v3, tween, Component, MainManager;
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
      isValid = module.isValid;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "869383YwVpPDpc4RaXuz1Sy", "MiniPokerHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MiniPokerHelp = exports('default', (_dec = ccclass("MiniPokerHelp"), _dec2 = menu("game/Minipoker/MiniPokerHelp"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniPokerHelp, _Component);
        function MiniPokerHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sub_main", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spr_content", _descriptor2, _assertThisInitialized(_this));
          _this._mainManager = void 0;
          return _this;
        }
        var _proto = MiniPokerHelp.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.start = function start() {
          if (!isValid(this.sub_main)) return;
          this.sub_main.getComponent(UIOpacity).opacity = 0;
          this.sub_main.scale = v3(0, 0, 1);
          tween(this.sub_main).stop().to(0.3, {
            scale: v3(1, 1, 1)
          }, {
            easing: "backOut"
          }).start();
          tween(this.sub_main.getComponent(UIOpacity)).stop().to(0.3, {
            opacity: 255
          }, {
            easing: "backOut"
          }).start();

          //        // if (miniModel.Instance.HD_info.Plays) {
          //        //     //1-4
          //        //     for (let i = 1; i < 5; i++) {
          //        //         let rateInfo = miniModel.Instance.HD_info.Plays[i];
          //        //         let node = cc.find(`Node_${i - 1}`, this.spr_content);

          //        //         let Label = node.getChildByName("Label_0").getComponent(cc.Label);
          //        //         Label.string = Common.numFormat2(rateInfo.Odds);
          //        //         Label = node.getChildByName("Label_1").getComponent(cc.Label);
          //        //         Label.string = Common.numFormat2(rateInfo.Odds * 10);
          //        //         Label = node.getChildByName("Label_2").getComponent(cc.Label);
          //        //         Label.string = Common.numFormat2(rateInfo.Odds * 100);
          //        //     }

          //        //     //X2
          //        //     let Node_4 = cc.find(`Node_4`, this.spr_content);
          //        //     for (let i = 0; i < 4; i++) {
          //        //         let rateInfo = miniModel.Instance.HD_info.Plays[i + 5];
          //        //         let Label_rate = Node_4.getChildByName(`Label_${i}`).getComponent(cc.Label);
          //        //         Label_rate.string = `X${Math.floor(rateInfo.Odds / 100)}`;
          //        //     }
          //        // }
        };

        _proto.initEvent = function initEvent() {};
        _proto.removeEvent = function removeEvent() {};
        _proto.onDestroy = function onDestroy() {
          this.removeEvent();
        }
        //    //关闭
        ;

        _proto.closePop = function closePop() {
          var _this2 = this;
          //        // this._mainManager.getAudioManager().playbuttonEffect();
          tween(this.sub_main).stop().to(0.3, {
            scale: v3(0, 0, 1)
          }, {
            easing: "backIn"
          }).call(function () {
            _this2.node.removeFromParent();
            _this2.node.destroy();
          }).start();
        };
        return MiniPokerHelp;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sub_main", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spr_content", [_dec4], {
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

System.register("chunks:///_virtual/MiniPokerMainView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts', './I18n.ts', './ProxyMgr.ts', './GameDef.ts', './GUtil.ts', './ViewManager.ts', './miniGameCtrl.ts', './miniGameDef.ts', './miniModel.ts', './MiniPokerReelContainer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteAtlas, Prefab, AudioClip, Label, sp, assetManager, instantiate, isValid, find, Sprite, Tween, tween, v3, Button, Component, AudioManager, ConfigManager, DataManager, UserProxyEvent, UserKey, EventManager, NetManager, Common, i18n, ProxyMgr, GameDef, GUtil, ViewManager, miniGameCtrl, cBundle, eProto, eEvent, miniModel, MiniPokerReelContainer;
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
      SpriteAtlas = module.SpriteAtlas;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      Label = module.Label;
      sp = module.sp;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      isValid = module.isValid;
      find = module.find;
      Sprite = module.Sprite;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserProxyEvent = module.UserProxyEvent;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      miniGameCtrl = module.miniGameCtrl;
    }, function (module) {
      cBundle = module.cBundle;
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      miniModel = module.miniModel;
    }, function (module) {
      MiniPokerReelContainer = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "1364136epNGi6ApcA7LGC2b", "MiniPokerMainView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MiniPokerMainView = exports('default', (_dec = ccclass("MiniPokerMainView"), _dec2 = menu("game/Minipoker/MiniPokerMainView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(SpriteAtlas), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(AudioClip), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(sp.Skeleton), _dec15 = property(sp.Skeleton), _dec16 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniPokerMainView, _Component);
        function MiniPokerMainView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cards", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrolls", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlasItem", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_shake", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reelContainer", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_reelContainer", _descriptor7, _assertThisInitialized(_this));
          _this.node_reelContainer = null;
          _initializerDefineProperty(_this, "sound", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_jackpot", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_toggles", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_bg", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_continue", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_accelerate", _descriptor14, _assertThisInitialized(_this));
          _this._bundle = void 0;
          _this._runing = false;
          _this._selectBetIndex = 0;
          //默认的筹码选择
          _this._inPrizeAni = false;
          //是否在播放简历动画
          _this.isContinue = false;
          _this.isAccelerate = false;
          //    // _goldCount = 0;
          _this.jackpotCount = 0;
          _this.reOpen = false;
          _this.reOpenTime = 0;
          _this.reOpenTryTimes = 0;
          return _this;
        }
        var _proto = MiniPokerMainView.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this._bundle = assetManager.getBundle(cBundle);
          if (!this._bundle) {
            assetManager.loadBundle(cBundle, function (err, bundle) {
              if (bundle) {
                _this2._bundle = bundle;
                _this2.onLoadBundleCompleted();
              } else {
                gts.Debug.LogErr("" + err);
              }
            });
          } else {
            this.onLoadBundleCompleted();
          }

          //        // this._goldCount = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.showGold();
          DataManager.instance.isChangeGold = false;
        };
        _proto.onDestroy = function onDestroy() {
          DataManager.instance.isChangeGold = true;
          NetManager.instance.sendOnlineData(eProto.C2S_SEND_EXIT, {});
        };
        _proto.onLoadBundleCompleted = function onLoadBundleCompleted() {
          var node = instantiate(this.prefab_reelContainer);
          this.reelContainer.addChild(node);
          this.node_reelContainer = node;
          NetManager.instance.waitServiceSendData(); //监听服务端推送
          NetManager.instance.sendOnlineData(eProto.GET_INFO, {
            action: "HD_info"
          });

          //        /** 初始化数据管理器 */
          this.initEvent();
          this.scrollInit(this.scrolls[0]);
          this.scrollInit(this.scrolls[1]);
          this.scrollInit(this.scrolls[2]);
          this.scrollInit(this.scrolls[3]);
          this.scrollInit(this.scrolls[4]);
        };
        _proto.initEvent = function initEvent() {
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);

          //        //网络消息
          miniGameCtrl.Instance.regist();
          EventManager.instance.on(eEvent.updateView, this.updateView, this);
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, this.showGold, this);
        };
        _proto.showGold = function showGold() {
          this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)));
          //        // this._goldCount = DataManager.instance.getUserDataForKey(UserKey.GOLD);
        };

        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.gameShow = function gameShow() {
          Common.showLog("前台");
          NetManager.instance.waitServiceSendData();
        };
        _proto.initData = function initData() {
          this.cardInit();
          this.betInit();
          if (miniModel.Instance.HD_info.PrizePool) {
            if (miniModel.Instance.HD_info.Amounts && miniModel.Instance.HD_info.Amounts[this._selectBetIndex]) {
              var index = miniModel.Instance.HD_info.Amounts[this._selectBetIndex];
              this.numberScrollRefresh(miniModel.Instance.HD_info.PrizePool[index]);
            }
          }
        }
        //    //初始化筹码区域
        ;

        _proto.betInit = function betInit() {
          var HD_info = miniModel.Instance.HD_info;
          if (!miniModel.Instance.HD_info.Amounts || miniModel.Instance.HD_info.Amounts.length == 0) {
            return;
          }
          //        // let toggleContainer = cc.find("toggleContainer", this.scroll_bet);
          //        // for (let i = 0; i < toggleContainer.childrenCount; ++i) {
          //        //     let toggle = toggleContainer.children[i];
          //        //     if (!cc.isValid(toggle)) continue;
          //        //     if (!miniModel.Instance.HD_info.Amounts[i]) {
          //        //         toggle.active = false;
          //        //     }
          //        //     toggle.getComponent(cc.Toggle).isChecked = i == this._selectBetIndex ? true : false;
          //        //     let lbl_title = cc.find("Background/lbl_title", toggle).getComponent(cc.Label);
          //        //     lbl_title.string = "" + Common.ChangeMoneyShow(miniModel.Instance.HD_info.Amounts[i], 2);
          //        //     lbl_title = cc.find("checkmark/lbl_title", toggle).getComponent(cc.Label);
          //        //     lbl_title.string = "" + Common.ChangeMoneyShow(miniModel.Instance.HD_info.Amounts[i], 2);
          //        // }
        }
        //    //初始化牌面
        ;

        _proto.cardInit = function cardInit() {
          if (!miniModel.Instance.HD_info.Pokers || miniModel.Instance.HD_info.Pokers.length == 0) {
            return;
          }
          for (var i = 0; i < miniModel.Instance.HD_info.Pokers.length; ++i) {
            var node = this.cards[i];
            if (!isValid(node)) continue;
            node.active = true;
            this.initCardAttri(node, miniModel.Instance.HD_info.Pokers[i]);
          }
        };
        _proto.scrollInit = function scrollInit(node) {
          //        //随机8张不重复的牌
          var array = new Array(52).fill(0).map(function (v, i) {
            return i + 1;
          }).sort(function () {
            return 0.5 - Math.random();
          }).filter(function (v, i) {
            return i < 8;
          });
          for (var i = 0; i < array.length; ++i) {
            var card = instantiate(this.prefab);
            card.active = true;
            card.parent = node;
            var randomNum = array[i];
            if (randomNum < 1) randomNum = 1;
            this.initCardAttri(card, randomNum);
          }
        };
        _proto.initCardAttri = function initCardAttri(cardNode, cardValue) {
          var cardData = this.getCardValue(cardValue);
          var cardNum = find("num", cardNode).getComponent(Sprite);
          var spr_type1 = find("spr_type1", cardNode).getComponent(Sprite);
          var spr_type2 = find("spr_type2", cardNode).getComponent(Sprite);
          var spr_type3 = find("spr_type3", cardNode).getComponent(Sprite);
          spr_type1.node.active = true;
          spr_type2.node.active = false;
          spr_type3.node.active = true;
          var cardColor = cardData.cardType == 1 || cardData.cardType == 3 ? "red" : "black";
          if (cardData.cardValue < 11) {
            spr_type1.spriteFrame = this.atlasItem.getSpriteFrame("cardtype" + cardData.cardType);
            spr_type2.spriteFrame = this.atlasItem.getSpriteFrame("cardtype" + cardData.cardType);
            spr_type2.node.active = true;
            spr_type3.node.active = false;
          } else if (cardData.cardValue > 10 && cardData.cardValue < 14) {
            spr_type1.spriteFrame = this.atlasItem.getSpriteFrame("cardtype" + cardData.cardType);
            spr_type3.spriteFrame = this.atlasItem.getSpriteFrame("kid_" + cardData.cardType + "_" + cardData.cardValue);
          } else if (cardData.cardValue > 13 && cardData.cardValue < 16) {
            cardColor = "";
            spr_type3.spriteFrame = this.atlasItem.getSpriteFrame("kid_" + cardData.cardType);
            spr_type1.node.active = false;
          }
          cardNum.spriteFrame = this.atlasItem.getSpriteFrame("num_" + cardColor + cardData.cardValue);
        };
        _proto.runScrollAnimation = function runScrollAnimation(index, callback, isAccel) {
          var _this3 = this;
          if (!miniModel.Instance.HD_open.Pokers || miniModel.Instance.HD_open.Pokers.length == 0) {
            gts.Debug.Log("开奖结果异常。。。。。。。。。。。。。");
            return;
          }
          var node = this.cards[index];
          var scroll = this.scrolls[index];
          var length = scroll.children.length;
          var startY = this.getY(1);
          var endY = this.getY(length - 2);
          this.initCardAttri(node, miniModel.Instance.HD_info.Pokers[index]);
          var target = scroll.children[1];
          this.initCardAttri(target, miniModel.Instance.HD_open.Pokers[index]);
          var nowNode = scroll.children[length - 2];
          this.initCardAttri(nowNode, miniModel.Instance.HD_info.Pokers[index]);

          // scroll.getPosition().y = startY;
          // scroll.getPosition().x = node.getPosition().x;
          scroll.setPosition(node.position.x, startY);
          scroll.active = true;
          node.active = false;
          var delay = 1 + 0.1 * (1 + index);
          if (isAccel && index == 0) delay = 1.6;
          Tween.stopAllByTarget(scroll);
          tween(scroll).parallel(tween(scroll).to(1.5, {
            position: v3(scroll.position.x, endY)
          }, {
            easing: "cubicInOut"
          }), tween(scroll).delay(delay).call(function () {
            if (isAccel) {
              if (index == 0) {
                AudioManager.instance.stopSound();
                AudioManager.instance.playOneShot(_this3.sound[2]);
              }
            } else {
              AudioManager.instance.playOneShot(_this3.sound[2]);
            }
          })).call(function () {
            if (typeof callback === "function") callback();
          }).start();
          // scroll.runAction(
          //     cc.sequence(
          //         cc.spawn(
          //             cc.moveTo(1.5, scroll.getPosition().x, endY).easing(cc.easeCubicActionInOut()),
          //             cc.sequence(
          //                 cc.delayTime(delay),
          //                 cc.callFunc(() => {
          //                     if (isAccel) {
          //                         if (index == 0) {
          //                             AudioManager.instance.stopSound();
          //                             AudioManager.instance.playSound(this.sound[2], false);
          //                         }
          //                     } else {
          //                         AudioManager.instance.playSound(this.sound[2], false);
          //                     }
          //                 })
          //             )
          //         ),
          //         //                //cc.moveTo(2, scroll.x, endY).easing(cc.easeQuarticActionInOut()),
          //         cc.callFunc(() => {
          //             if (typeof callback === "function") callback();
          //             //                    // miniModel.Instance.HD_info.Pokers = miniModel.Instance.HD_open.Pokers;
          //             //                    // this.initCardAttri(node, miniModel.Instance.HD_open.Pokers[index]);
          //             //                    // scroll.active = false;
          //             //                    // node.active = true;
          //         })
          //     )
          // );

          if (typeof callback === "function") {
            this.scheduleOnce(function () {
              _this3.btn_shake.getComponent(Button).interactable = true;
              _this3.spine_bg.setAnimation(0, "idle", true);
            }, 1.0);
          }
        };
        _proto.startScroll = function startScroll() {
          var _this4 = this;
          //        // this.skeleton_shake.getComponent(sp.Skeleton).setAnimation(0, "yao", false);
          //        // this.skeleton_shake.getComponent(sp.Skeleton).addAnimation(0, "jingzhi", true);
          //        // AudioManager.instance.playSound(this.sound[1], false);

          var length = 5;
          var isAccel = this.isAccelerate;
          var action = tween(this.node);
          var _loop = function _loop(i) {
            var callback;
            if (i === length - 1) {
              callback = function callback() {
                //                    // 显示结果
                _this4.showRewards();
                _this4.onScrollEnd();
              };
            }
            action = action.call(function () {
              _this4.runScrollAnimation(i, callback, isAccel);
            });
            if (!isAccel) {
              action = action.delay(0.3);
            }
          };
          for (var i = 0; i < length; ++i) {
            _loop(i);
          }
          this._runing = true;
          // this.node.runAction(cc.sequence(actions));
          action.start();
        };
        _proto.showRewards = function showRewards() {
          var _this5 = this;
          var lbl_number = find("reborn_shake/lbl_number", this.node);
          if (isValid(lbl_number)) {
            lbl_number.getComponent(Label).string = Common.setGameNo(miniModel.Instance.HD_open.Number);
          }
          if (miniModel.Instance.HD_open.PrizeType == 0) {
            gts.Debug.Log("======nstance.HD_open.PrizeType == 0====");
            return;
          }

          //        //
          var node_prize = find("reborn_shake/node_prize", this.node);
          if (!isValid(node_prize)) return;
          node_prize.active = true;

          //        // for (let i = 1; i < 10; ++i) {
          //        //     let skeleton = cc.find(`reborn_shake/node_prize${i}`, this.node);
          //        //     skeleton.active = false;
          //        // }
          //        // let skeleton = cc.find(`reborn_shake/node_prize${miniModel.Instance.HD_open.PrizeType}`, this.node);
          //        // if (!cc.isValid(skeleton)) return;
          //        // let self = this;
          //        // skeleton.active = true;

          //        // let PrizeType = Math.floor(Math.random() * 9);
          //        // gts.Debug.Log("======miniModel.Instance.HD_open.PrizeType====" + PrizeType);

          this._inPrizeAni = true;
          AudioManager.instance.playOneShot(this.sound[3]);
          //        // let isContinuation: boolean = this.isContinue;

          var aniList = ["idle_yidui", "idle_liangdui", "idle_sanzhang", "idle_shunzi", "idle_tonghua", "idle_hulu", "idle_zhadan", "idle_ths", "idle_thsj"];
          node_prize.getComponent(sp.Skeleton).setAnimation(0, aniList[miniModel.Instance.HD_open.PrizeType - 1], false);
          //        // node_prize.getComponent(sp.Skeleton).setAnimation(0, aniList[PrizeType], false);

          node_prize.getComponent(sp.Skeleton).timeScale = 2.5; //加速
          node_prize.getComponent(sp.Skeleton).setCompleteListener(function () {
            node_prize.active = false;
            _this5._inPrizeAni = false;
            if (_this5.checkStart()) {
              _this5.startShake();
            }
          });
          var llb_money = find("llb_money", node_prize).getComponent(Label);
          llb_money.string = "+" + miniModel.Instance.HD_open.Bonus;

          //        //中奖-更新
          var delayTimes = this.isContinue ? 0 : 0.5;
          this.scheduleOnce(function () {
            DataManager.instance.isChangeGold = true;
            DataManager.instance.emit(UserProxyEvent.CHANGE_GOLD);
            DataManager.instance.isChangeGold = false;
          }, delayTimes);
        };
        _proto.checkStart = function checkStart() {
          return this.isContinue && this.btn_shake.getComponent(Button).interactable;
        };
        _proto.startShake = function startShake() {
          if (!miniModel.Instance.HD_info) {
            Common.showTip(i18n.lang["10001"]);
            return;
          }
          AudioManager.instance.playOneShot(this.sound[0]);
          if (!miniModel.Instance.HD_info.Amounts || !miniModel.Instance.HD_info.Amounts[this._selectBetIndex]) return;
          var userMoney = parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          if (userMoney < miniModel.Instance.HD_info.Amounts[this._selectBetIndex]) {
            Common.showTip(i18n.lang["10001"]);
            if (this.isContinue) {
              this.onClickContinuation();
            }
            return;
          }
          var node_prize = find("reborn_shake/node_prize", this.node);
          node_prize.active = false;
          this.btn_shake.getComponent(Button).interactable = false;
          this.spine_bg.setAnimation(0, "spin", true);
          var isContinuation = this.isContinue;
          NetManager.instance.sendOnlineData(eProto.GET_OPEN, {
            action: "HD_open",
            BetAmount: miniModel.Instance.HD_info.Amounts[this._selectBetIndex]
          });
          this.reOpen = true;
          AudioManager.instance.playOneShot(this.sound[1]);

          //        //下注-更新
          userMoney -= miniModel.Instance.HD_info.Amounts[this._selectBetIndex];
          DataManager.instance.setUserDataForKey(UserKey.GOLD, userMoney);
          DataManager.instance.isChangeGold = true;
          DataManager.instance.emit(UserProxyEvent.CHANGE_GOLD);
          DataManager.instance.isChangeGold = false;
        };
        _proto.onScrollEnd = function onScrollEnd() {
          this._runing = false;
          var isContinuation = this.isContinue;
          if (this.checkStart() && miniModel.Instance.HD_open.PrizeType == 0) {
            this.startShake();
          }
        }
        //    //点击开始
        ;

        _proto.onClickShake = function onClickShake(event) {
          var btnNode = event.target;
          if (btnNode.getComponent(Button).interactable) {
            gts.Debug.Log("======点击开始====");
            this.startShake();
          }
        };
        _proto.onToggled = function onToggled(event) {
          //        // AudioManager.instance.playbuttonEffect();
          var toggle_name = event.node.name;
          var index = parseInt(toggle_name.substring(7, toggle_name.length));
          if (this._selectBetIndex == index) return;
          for (var _iterator = _createForOfIteratorHelperLoose(this.node_toggles), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.getChildByName("Background").active = true;
          }
          event.node.getChildByName("Background").active = false;
          this._selectBetIndex = index;
          if (miniModel.Instance.HD_info.PrizePool) {
            if (miniModel.Instance.HD_info.Amounts && miniModel.Instance.HD_info.Amounts[this._selectBetIndex]) {
              var num_index = miniModel.Instance.HD_info.Amounts[this._selectBetIndex];
              this.numberScrollRefresh(miniModel.Instance.HD_info.PrizePool[num_index]);
            }
          }
        };
        _proto.numberScrollRefresh = function numberScrollRefresh(num) {
          if (typeof num == "undefined") {
            return;
          }
          if (num < 0) num = 0;
          var comp = this.node_reelContainer.getComponent(MiniPokerReelContainer);
          if (isValid(comp)) {
            comp.refresh(num);
          }
          //        // this.txt_jackpot.string = "" + num;
        }
        //    //点击加速
        ;

        _proto.onClickAccelerate = function onClickAccelerate() {
          this.isAccelerate = !this.isAccelerate;
          if (this.isAccelerate) {
            this.spine_accelerate.setAnimation(0, "btn_accelerateSel", true);
          } else {
            this.spine_accelerate.setAnimation(0, "btn_accelerateNor", true);
          }
        }
        //    //连续
        ;

        _proto.onClickContinuation = function onClickContinuation() {
          this.isContinue = !this.isContinue;
          //        // AudioManager.instance.playbuttonEffect();
          if (this.isContinue) {
            this.spine_continue.setAnimation(0, "btn_continuationSel", true);
          } else {
            this.spine_continue.setAnimation(0, "btn_continuationNor", true);
          }
          if (this.isContinue && !this._runing) this.startShake();
          if (!this.btn_shake.getComponent(Button).interactable) {
            return; //正在播放动画return
          } else {
            this.btn_shake.getComponent(Button).interactable = true;
            this.spine_bg.setAnimation(0, "idle", true);
          }
        }
        //    //打开排行榜
        ;

        _proto.onClickRanking = function onClickRanking() {
          //        // this.loadPopView("MiniPokerRanking");
          GUtil.openRank("mini_poker");
        }
        //    //打开自己的记录
        ;

        _proto.onClickRecord = function onClickRecord() {
          this.loadPopView("MiniPokerRecord");

          //        // GUtil.openRecord("mini_poker");
        }
        //    //打开大奖界面
        ;

        _proto.onClickPrize = function onClickPrize() {
          this.loadPopView("MiniPokerPrize");
        }
        //    //打开帮助界面
        ;

        _proto.onClickHelp = function onClickHelp() {
          this.loadPopView("MiniPokerHelp");
        };
        _proto.loadPopView = function loadPopView(path) {
          var _this6 = this;
          //        // AudioManager.instance.playbuttonEffect();
          if (!this._bundle) {
            gts.Debug.Log("this._bundle error");
            return;
          }
          path = "prefab/" + path;
          Common.loadPopBuddle(path, this._bundle, function () {}, function (prefab) {
            var popLayer = instantiate(prefab);
            popLayer.active = true;
            popLayer.parent = _this6.node;
          }, true);
        };
        _proto.getCardValue = function getCardValue(value) {
          var cardValue = 1;
          var cardType = 1; //(1.方块，2.梅花，3.红桃，4.黑桃)
          var tempValue = value % 13;
          cardValue = tempValue == 0 ? 13 : tempValue;
          if (value >= 1 && value <= 13) cardType = 1;else if (value >= 14 && value <= 26) cardType = 2;else if (value >= 27 && value <= 39) cardType = 3;else if (value >= 40 && value <= 52) cardType = 4;
          if (value == 53) cardValue = 14; // 小王
          if (value == 54) cardValue = 15; // 大王

          return {
            cardValue: cardValue,
            cardType: cardType
          };
        };
        _proto.getY = function getY(n) {
          return -122 - 209 * n;
        };
        _proto.removeEvent = function removeEvent() {
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);

          //        //网络消息
          miniGameCtrl.Instance.unRegist();
          EventManager.instance.off(eEvent.updateView, this.updateView, this);
          ProxyMgr.close(this);
          miniModel.Instance.HD_open = null;
        };
        _proto.checkReOpen = function checkReOpen(dt) {
          this.reOpenTime += dt;
          var time = 0;
          if (this.reOpenTryTimes > 1) {
            time = Math.pow(2, this.reOpenTryTimes - 1) * 6;
          } else {
            time = 6;
          }
          if (this.reOpenTime >= time) {
            this.reOpenTryTimes++;
            this.reOpenTime = 0;
            NetManager.instance.sendOnlineData(eProto.GET_OPEN, {
              action: "HD_open",
              BetAmount: miniModel.Instance.HD_info.Amounts[this._selectBetIndex]
            });
          }
        };
        _proto.clearReOpen = function clearReOpen() {
          this.reOpen = false;
          this.reOpenTime = 0;
          this.reOpenTryTimes = 0;
        };
        _proto.update = function update(dt) {
          if (this.reOpen) {
            this.checkReOpen(dt);
          }
        };
        _proto.onDisable = function onDisable() {
          this.removeEvent();
        }
        //    //关闭
        ;

        _proto.closePop = function closePop() {
          //        // AudioManager.instance.playbuttonEffect();
          //        // NetManager.instance.sendOnlineData(miniGameDef.eProto.C2S_SEND_EXIT, {
          //        //     groupId: miniModel.Instance.HD_info ? miniModel.Instance.HD_info.GroupId : "",
          //        // });
          //        // AudioManager.instance.stopAll();
          ViewManager.instance.closePopGame(GameDef.Game.Minipoker);
        }
        //    /**
        //     * 界面更新
        //     * @param event
        //     * @param data
        //     * @returns
        //     */
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.GET_INFO:
              {
                //                //获取配置
                this.initData();
                break;
              }
            case eProto.GET_OPEN:
              {
                this.startScroll();
                this.clearReOpen();
                break;
              }
            case eProto.S2C_GET_JACKPOT:
              {
                //                //奖池数据
                if (miniModel.Instance.HD_info.PrizePool) {
                  if (miniModel.Instance.HD_info.Amounts && miniModel.Instance.HD_info.Amounts[this._selectBetIndex]) {
                    var index = miniModel.Instance.HD_info.Amounts[this._selectBetIndex];
                    this.numberScrollRefresh(miniModel.Instance.HD_info.PrizePool[index]);
                  }
                }
                break;
              }
          }
        };
        return MiniPokerMainView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cards", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrolls", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "atlasItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn_shake", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "reelContainer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "prefab_reelContainer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sound", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txt_jackpot", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_toggles", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "spine_bg", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "spine_continue", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "spine_accelerate", [_dec16], {
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

System.register("chunks:///_virtual/MiniPokerPrize.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './NetManager.ts', './Common.ts', './miniGameDef.ts', './miniModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, isValid, UIOpacity, v3, tween, instantiate, find, color, Component, EventManager, NetManager, Common, eProto, eEvent, miniModel;
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
      isValid = module.isValid;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      find = module.find;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      miniModel = module.miniModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "8811aSN2WJMNq7VVbICNAMU", "MiniPokerPrize", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MiniPokerPrize = exports('default', (_dec = ccclass("MiniPokerPrize"), _dec2 = menu("game/Minipoker/MiniPokerPrize"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniPokerPrize, _Component);
        function MiniPokerPrize() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl_page", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sub_main", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_pre", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_next", _descriptor6, _assertThisInitialized(_this));
          _this._currPage = 0;
          _this._currIndex = 0;
          _this._lastPage = 0;
          return _this;
        }
        var _proto = MiniPokerPrize.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.sendOnlineData(eProto.GET_PRIZE, {
            action: "HD_record",
            Limit: 6,
            Offset: 0
          });
          this.initEvent();
        };
        _proto.start = function start() {
          if (!isValid(this.sub_main)) return;
          this.sub_main.getComponent(UIOpacity).opacity = 0;
          this.sub_main.scale = v3(0, 0, 1);
          tween(this.sub_main).stop().to(0.3, {
            scale: v3(1, 1, 1)
          }, {
            easing: "backOut"
          }).start();
          tween(this.sub_main.getComponent(UIOpacity)).stop().to(0.3, {
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
          this._currIndex = 1;
          this.lbl_page.string = "Trang:" + this._currIndex;
        };
        _proto.initEvent = function initEvent() {
          EventManager.instance.on(eEvent.updateView, this.updateView, this);
        }
        //    /**
        //     * 界面更新
        //     * @param event
        //     * @param data
        //     * @returns
        //     */
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.GET_PRIZE:
              {
                //                //自己的下注记录
                if (!data.Data) {
                  this._lastPage = this._currPage;
                  this._currIndex = this._lastPage;
                  this.lbl_page.string = "Trang:" + this._currIndex;
                  this.btn_next.active = false;
                  return;
                }
                var emitData = data.Data.list;
                this._currPage++;
                if (emitData.length < 6) {
                  this._lastPage = this._currPage;
                }
                if (emitData.length > 0) {
                  this.updateContent(emitData);
                }
                break;
              }
          }
        }
        //    /**
        //     * 初始化房间信息
        //     * @param dataList
        //     */
        ;

        _proto.updateContent = function updateContent(dataList) {
          if (!dataList) return;
          this.clearHistoryNodes(this.content);
          for (var i = 0; i < dataList.length; ++i) {
            var item = instantiate(this.recordPrefab);
            item.active = true;
            item.parent = this.content;
            var tempData = dataList[i];
            var spr_line = find("spr_line", item);
            if (spr_line) {
              if (i % 6 == 5) {
                spr_line.active = false;
              }
            }
            var lbl_time = find("lbl_time", item).getComponent(Label); //下注时间
            var lbl_date = find("lbl_date", item).getComponent(Label); //下注时间
            var date = Common.getTimeFormat(tempData.CreateAt);
            lbl_time.string = date.time;
            lbl_date.string = date.date;
            var lbl_name = find("lbl_name", item).getComponent(Label); //名字
            lbl_name.string = tempData.NickName;
            var lbl_bet = find("lbl_bet", item).getComponent(Label); //底注
            lbl_bet.string = "" + Common.numFormat(tempData.BetAmount);

            //            // let lbl_bonus = cc.find("lbl_bonus", item).getComponent(cc.Label); //底注
            //            // lbl_bonus.string = "" + Common.numFormat(tempData.Bonus);

            //            // let lbl_result = cc.find("lbl_result", item).getComponent(cc.Label); //状态
            //            // lbl_result.string = "Nổ hũ";

            var lbl_result = find("lbl_result", item).getComponent(Label); //盈利
            var str = "";
            if (tempData.Bonus > 0) {
              str = "+" + Common.numFormat(tempData.Bonus);
              lbl_result.color = color(255, 0, 0, 255);
            } else if (tempData.Bonus <= 0) {
              str = "" + Common.numFormat(tempData.Bonus);
              lbl_result.color = color(0x68, 0xf5, 0x01, 255);
            }
            lbl_result.string = str;
            var lbl_lo = find("lbl_lo", item).getComponent(Label); //状态
            lbl_lo.string = "Nổ hũ";
          }
        }
        //    /**
        //     * 点击上一页
        //     */
        ;

        _proto.onClickPre = function onClickPre() {
          //        // AudioManager.instance.playbuttonEffect();
          if (this._currIndex == 1) return;
          if (miniModel.Instance.recordList_prize.length == 0) return;
          this.btn_next.active = true;
          this._currIndex--;
          if (this._currIndex < 1) {
            this._currIndex = 1;
          }
          var list = [];
          for (var i = (this._currIndex - 1) * 6; i < this._currIndex * 6; ++i) {
            if (miniModel.Instance.recordList_prize[i]) {
              list.push(miniModel.Instance.recordList_prize[i]);
            }
          }
          this.updateContent(list);
          this.lbl_page.string = "Trang:" + this._currIndex;
          if (this._currIndex == 1) {
            this.btn_pre.active = false;
          }
        }
        //    /**
        //     * 点击下一页
        //     */
        ;

        _proto.onClickNext = function onClickNext() {
          //        // AudioManager.instance.playbuttonEffect();
          if (this._currIndex == this._lastPage) return;
          if (miniModel.Instance.recordList_prize.length == 0) return;
          this.btn_pre.active = true;
          this._currIndex++;
          var list = [];
          for (var i = (this._currIndex - 1) * 6; i < this._currIndex * 6; ++i) {
            if (miniModel.Instance.recordList_prize[i]) {
              list.push(miniModel.Instance.recordList_prize[i]);
            }
          }
          if (list.length > 0) {
            this.updateContent(list);
          } else {
            NetManager.instance.sendOnlineData(eProto.GET_PRIZE, {
              action: "HD_getBetrecordList_prize",
              Limit: 6,
              Offset: (this._currIndex - 1) * 6
            });
          }
          this.lbl_page.string = "Trang:" + this._currIndex;
          if (this._currIndex == this._lastPage) {
            this.btn_next.active = false;
          }
        };
        _proto.removeEvent = function removeEvent() {
          EventManager.instance.off(eEvent.updateView, this.updateView, this);
        };
        _proto.onDestroy = function onDestroy() {
          this.removeEvent();
        }
        //    //关闭
        ;

        _proto.closePop = function closePop() {
          var _this2 = this;
          //        // AudioManager.instance.playbuttonEffect();
          tween(this.sub_main).stop().to(0.3, {
            scale: v3(0, 0, 1)
          }, {
            easing: "backIn"
          }).call(function () {
            _this2.node.removeFromParent();
            _this2.node.destroy();
          }).start();
        };
        _proto.clearHistoryNodes = function clearHistoryNodes(parent) {
          // 列表条目不复用，先摘除再销毁，避免同帧统计包含待销毁节点。
          for (var _iterator = _createForOfIteratorHelperLoose(parent.children.slice()), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.removeFromParent();
            child.destroy();
          }
        };
        return MiniPokerPrize;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "recordPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_page", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sub_main", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn_pre", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btn_next", [_dec8], {
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

System.register("chunks:///_virtual/MiniPokerRanking.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './NetManager.ts', './Common.ts', './miniGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, SpriteAtlas, isValid, UIOpacity, v3, tween, instantiate, find, Label, Sprite, color, Component, EventManager, NetManager, Common, eProto, eEvent;
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
      ScrollView = module.ScrollView;
      SpriteAtlas = module.SpriteAtlas;
      isValid = module.isValid;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      find = module.find;
      Label = module.Label;
      Sprite = module.Sprite;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "3776cL81ZZCUJ5XpuVu0IpB", "MiniPokerRanking", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MiniPokerRanking = exports('default', (_dec = ccclass("MiniPokerRanking"), _dec2 = menu("game/Minipoker/MiniPokerRanking"), _dec3 = property(Node), _dec4 = property(ScrollView), _dec5 = property(SpriteAtlas), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniPokerRanking, _Component);
        function MiniPokerRanking() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "item_rank", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlasItem", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sub_main", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MiniPokerRanking.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.sendOnlineData(eProto.GET_RANKING, {
            action: "HD_leaderBoard",
            Limit: 20,
            Offset: 0
          });

          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.start = function start() {
          if (!isValid(this.sub_main)) return;
          this.sub_main.getComponent(UIOpacity).opacity = 0;
          this.sub_main.scale = v3(0, 0, 1);
          tween(this.sub_main).stop().to(0.3, {
            scale: v3(1, 1, 1)
          }, {
            easing: "backOut"
          }).start();
          tween(this.sub_main.getComponent(UIOpacity)).stop().to(0.3, {
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
        };
        _proto.onEnable = function onEnable() {};
        _proto.initEvent = function initEvent() {
          EventManager.instance.on(eEvent.updateView, this.updateView, this);
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.GET_RANKING:
              {
                //                //获取排行榜
                this.initData(data);
                break;
              }
          }
        };
        _proto.initData = function initData(data) {
          if (!data || data.length == 0) return;
          for (var i = 0; i < data.length; ++i) {
            var tempData = data[i];
            if (!tempData) continue;
            var item = instantiate(this.item_rank);
            item.active = true;
            item.parent = this.scrollView.content;
            var lbl_rank = find("lbl_rank", item).getComponent(Label);
            lbl_rank.string = "" + (i + 1);
            var lbl_name = find("lbl_name", item).getComponent(Label);
            lbl_name.string = "" + tempData._id;
            var spr_cup = find("spr_cup", item).getComponent(Sprite);
            if (i < 3) {
              spr_cup.spriteFrame = this.atlasItem.getSpriteFrame("rank_" + (i + 1));
              spr_cup.node.active = true;
              lbl_rank.node.active = false;
            }
            if (i == 0) {
              lbl_name.color = color(255, 0, 0, 255);
            } else if (i == 1) {
              lbl_name.color = color(253, 47, 255, 255);
            } else if (i == 2) {
              lbl_name.color = color(13, 238, 18, 255);
            } else {
              lbl_name.color = color(255, 255, 255, 255);
              spr_cup.node.active = false;
              lbl_rank.node.active = true;
            }
            var lbl_money = find("lbl_money", item).getComponent(Label);
            lbl_money.string = "" + Common.numFormat(tempData.TotalProfit);
          }
        };
        _proto.removeEvent = function removeEvent() {
          EventManager.instance.off(eEvent.updateView, this.updateView, this);
        };
        _proto.onDestroy = function onDestroy() {
          this.removeEvent();
        }
        //    //关闭
        ;

        _proto.closePop = function closePop() {
          var _this2 = this;
          //        // AudioManager.instance.playbuttonEffect();
          tween(this.sub_main).stop().to(0.3, {
            scale: v3(0, 0, 1)
          }, {
            easing: "backIn"
          }).call(function () {
            _this2.node.removeFromParent();
            _this2.node.destroy();
          }).start();
        };
        return MiniPokerRanking;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item_rank", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "atlasItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sub_main", [_dec6], {
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

System.register("chunks:///_virtual/MiniPokerRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './MainManager.ts', './miniGameDef.ts', './miniModel.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, SpriteAtlas, isValid, UIOpacity, v3, tween, instantiate, find, color, Sprite, Component, EventManager, MainManager, eProto, eEvent, miniModel, Common;
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
      SpriteAtlas = module.SpriteAtlas;
      isValid = module.isValid;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      find = module.find;
      color = module.color;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      miniModel = module.miniModel;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "9487eT+EFFIjpZxPKoB2OIw", "MiniPokerRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MiniPokerRecord = exports('default', (_dec = ccclass("MiniPokerRecord"), _dec2 = menu("game/Minipoker/MiniPokerRecord"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(SpriteAtlas), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniPokerRecord, _Component);
        function MiniPokerRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl_page", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlasItem", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_pre", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_next", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sub_main", _descriptor7, _assertThisInitialized(_this));
          _this._mainManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._viewManager = void 0;
          _this._dataManager = void 0;
          _this._audioManager = void 0;
          //    // _recordList: any[];
          _this._currPage = 0;
          _this._currIndex = 0;
          _this._lastPage = 0;
          return _this;
        }
        var _proto = MiniPokerRecord.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._netManager = this._mainManager.getNetManager();
          this._viewManager = this._mainManager.getViewManager();
          this._dataManager = this._mainManager.getDataManager();
          this._audioManager = this._mainManager.getAudioManager();
          this._netManager.sendOnlineData(eProto.GET_RECORD, {
            action: "HD_record",
            Limit: 6,
            Offset: 0
          });
          this.initEvent();
        };
        _proto.start = function start() {
          if (!isValid(this.sub_main)) return;
          this.sub_main.getComponent(UIOpacity).opacity = 0;
          this.sub_main.scale = v3(0, 0, 1);
          tween(this.sub_main).stop().to(0.3, {
            scale: v3(1, 1, 1)
          }, {
            easing: "backOut"
          }).start();
          tween(this.sub_main.getComponent(UIOpacity)).stop().to(0.3, {
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
          this._currIndex = 1;
          this.lbl_page.string = "Trang:" + this._currIndex;
        };
        _proto.initEvent = function initEvent() {
          EventManager.instance.on(eEvent.updateView, this.updateView, this);
        }
        //    /**
        //     * 界面更新
        //     * @param event
        //     * @param data
        //     * @returns
        //     */
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.GET_RECORD:
              {
                if (!data.Data) {
                  this._lastPage = this._currPage;
                  this._currIndex = this._lastPage;
                  this.lbl_page.string = "Trang:" + this._currIndex;
                  this.btn_next.active = false;
                  return;
                }
                var emitData = data.Data.list;
                if (emitData.length > 0) {
                  this._currPage++;
                  if (emitData.length < 6) {
                    this._lastPage = this._currPage;
                  }
                  this.updateContent(emitData);
                } else {
                  this._currIndex--;
                  this.lbl_page.string = "Trang:" + this._currIndex;
                  this._lastPage = this._currPage;
                }
              }
          }
        }
        //    /**
        //     * 初始化房间信息
        //     * @param dataList
        //     */
        ;

        _proto.updateContent = function updateContent(dataList) {
          if (!dataList) return;
          this.clearHistoryNodes(this.content);
          for (var i = 0; i < dataList.length; ++i) {
            var item = instantiate(this.recordPrefab);
            item.active = true;
            item.parent = this.content;
            var tempData = dataList[i];
            var lbl_num = find("lbl_num", item).getComponent(Label); //期号
            lbl_num.string = Common.setGameNo(tempData.Number);
            var lbl_time = find("lbl_time", item).getComponent(Label); //下注时间
            var lbl_date = find("lbl_date", item).getComponent(Label); //下注时间
            var date = Common.getTimeFormat(tempData.CreateAt);
            lbl_time.string = date.time;
            lbl_date.string = date.date;
            //            // lbl_time.string = tempData.CreateAt;

            var spr_line = find("spr_line", item);
            if (spr_line) {
              if (i % 6 == 5) {
                spr_line.active = false;
              }
            }
            var lbl_bet = find("lbl_bet", item).getComponent(Label); //底注
            lbl_bet.string = "" + Common.numFormat(tempData.BetAmount);
            var lbl_result = find("lbl_result", item).getComponent(Label); //盈利
            var str = "";
            if (tempData.Bonus > 0) {
              str = "+" + Common.numFormat(tempData.Bonus);
              lbl_result.color = color(255, 0, 0, 255);
            } else if (tempData.Bonus <= 0) {
              str = "" + Common.numFormat(tempData.Bonus);
              lbl_result.color = color(0x68, 0xf5, 0x01, 255);
            }
            lbl_result.string = str;
            for (var j = 0; j < tempData.Pokers.length; ++j) {
              var _str = "spr_card" + j;
              var cardNode = find(_str, item);
              if (isValid(cardNode)) {
                this.initCardAttri(cardNode, tempData.Pokers[j]);
              }
            }
          }
        };
        _proto.initCardAttri = function initCardAttri(cardNode, cardValue) {
          var cardData = this.getCardValue(cardValue);
          var cardNum = find("num", cardNode).getComponent(Sprite);
          var spr_type1 = find("spr_type1", cardNode).getComponent(Sprite);
          var spr_type2 = find("spr_type2", cardNode).getComponent(Sprite);
          var spr_type3 = find("spr_type3", cardNode).getComponent(Sprite);
          spr_type1.node.active = true;
          spr_type2.node.active = false;
          spr_type3.node.active = true;
          var cardColor = cardData.cardType == 1 || cardData.cardType == 3 ? "red" : "black";
          if (cardData.cardValue < 11) {
            spr_type1.spriteFrame = this.atlasItem.getSpriteFrame("cardtype" + cardData.cardType);
            spr_type2.spriteFrame = this.atlasItem.getSpriteFrame("cardtype" + cardData.cardType);
            spr_type2.node.active = true;
            spr_type3.node.active = false;
          } else if (cardData.cardValue > 10 && cardData.cardValue < 14) {
            spr_type1.spriteFrame = this.atlasItem.getSpriteFrame("cardtype" + cardData.cardType);
            spr_type3.spriteFrame = this.atlasItem.getSpriteFrame("kid_" + cardData.cardType + "_" + cardData.cardValue);
          } else if (cardData.cardValue > 13 && cardData.cardValue < 16) {
            cardColor = "";
            spr_type3.spriteFrame = this.atlasItem.getSpriteFrame("kid_" + cardData.cardType);
            spr_type1.node.active = false;
          }
          cardNum.spriteFrame = this.atlasItem.getSpriteFrame("num_" + cardColor + cardData.cardValue);
        };
        _proto.getCardValue = function getCardValue(value) {
          var cardValue = 1;
          var cardType = 1; //(1.方块，2.梅花，3.红桃，4.黑桃)
          var tempValue = value % 13;
          cardValue = tempValue == 0 ? 13 : tempValue;
          if (value >= 1 && value <= 13) cardType = 1;else if (value >= 14 && value <= 26) cardType = 2;else if (value >= 27 && value <= 39) cardType = 3;else if (value >= 40 && value <= 52) cardType = 4;
          if (value == 53) cardValue = 14; // 小王
          if (value == 54) cardValue = 15; // 大王

          return {
            cardValue: cardValue,
            cardType: cardType
          };
        }
        //    /**
        //     * 点击上一页
        //     */
        ;

        _proto.onClickPre = function onClickPre() {
          //        // this._mainManager.getAudioManager().playbuttonEffect();
          if (this._currIndex == 1) return;
          if (miniModel.Instance.recordList.length == 0) return;
          this.btn_next.active = true;
          this._currIndex--;
          if (this._currIndex < 1) {
            this._currIndex = 1;
          }
          var list = [];
          for (var i = (this._currIndex - 1) * 6; i < this._currIndex * 6; ++i) {
            if (miniModel.Instance.recordList[i]) {
              list.push(miniModel.Instance.recordList[i]);
            }
          }
          this.updateContent(list);
          this.lbl_page.string = "Trang:" + this._currIndex;
          if (this._currIndex == 1) {
            this.btn_pre.active = false;
          }
        }
        //    /**
        //     * 点击下一页
        //     */
        ;

        _proto.onClickNext = function onClickNext() {
          //        // this._mainManager.getAudioManager().playbuttonEffect();
          if (this._currIndex == this._lastPage) return;
          if (miniModel.Instance.recordList.length == 0) return;
          this.btn_pre.active = true;
          this._currIndex++;
          var list = [];
          for (var i = (this._currIndex - 1) * 6; i < this._currIndex * 6; ++i) {
            if (miniModel.Instance.recordList[i]) {
              list.push(miniModel.Instance.recordList[i]);
            }
          }
          if (list.length > 0) {
            this.updateContent(list);
          } else {
            this._netManager.sendOnlineData(eProto.GET_RECORD, {
              action: "HD_getBetRecordList",
              Limit: 6,
              Offset: (this._currIndex - 1) * 6
            });
          }
          this.lbl_page.string = "Trang:" + this._currIndex;
          if (this._currIndex == this._lastPage) {
            this.btn_next.active = false;
          }
        };
        _proto.removeEvent = function removeEvent() {
          EventManager.instance.off(eEvent.updateView, this.updateView, this);
        };
        _proto.onDestroy = function onDestroy() {
          miniModel.Instance.recordList = [];
          this.removeEvent();
        }
        //    //关闭
        ;

        _proto.closePop = function closePop() {
          var _this2 = this;
          //        // this._mainManager.getAudioManager().playbuttonEffect();
          tween(this.sub_main).stop().to(0.3, {
            scale: v3(0, 0, 1)
          }, {
            easing: "backIn"
          }).call(function () {
            _this2.node.removeFromParent();
            _this2.node.destroy();
          }).start();
        };
        _proto.clearHistoryNodes = function clearHistoryNodes(parent) {
          // 列表条目不复用，先摘除再销毁，避免同帧统计包含待销毁节点。
          for (var _iterator = _createForOfIteratorHelperLoose(parent.children.slice()), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.removeFromParent();
            child.destroy();
          }
        };
        return MiniPokerRecord;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "recordPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_page", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "atlasItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn_pre", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btn_next", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sub_main", [_dec9], {
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

System.register("chunks:///_virtual/MiniPokerReel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "33337l+QsZOVpaDQ3x2NkzA", "MiniPokerReel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MiniPokerReel = exports('default', (_dec = ccclass("MiniPokerReel"), _dec2 = menu("game/Minipoker/MiniPokerReel"), _dec3 = property([Node]), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniPokerReel, _Component);
        function MiniPokerReel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_nums", _descriptor, _assertThisInitialized(_this));
          _this.stepHeight = 40;
          //数字高度
          _this._startMove = false;
          _this.standNum = 0;
          //展示结果
          _this.delayTime = 0;
          //动画延迟
          _this.moveStep = 8;
          return _this;
        }
        var _proto = MiniPokerReel.prototype;
        //每帧移动步长
        _proto.run = function run(num, delayTime) {
          if (delayTime === void 0) {
            delayTime = 0;
          }
          if (this.standNum === num) {
            return;
          }
          this._startMove = true;
          this.delayTime = delayTime;
          this.standNum = num;
        };
        _proto.update = function update(dt) {
          if (this.delayTime > 0) {
            this.delayTime -= dt;
            return;
          }
          if (!this._startMove) {
            return;
          }
          //        // console.time("ut");
          var length = this.node_nums.length;
          var stop = false;
          var fixStep = 0; //步长调整
          for (var i = 0; i < length; i++) {
            var node = this.node_nums[i];
            node.setPosition(node.position.x, node.position.y - this.moveStep);
            if (node.getPosition().y < -this.stepHeight) {
              node.setPosition(node.position.x, this.stepHeight * 9);
            }

            //            //目标临近
            if (i == this.standNum && node.getPosition().y < 0 && node.getPosition().y > -2 * this.moveStep) {
              stop = true;
              fixStep = node.getPosition().y;
            }
          }
          if (stop) {
            this._startMove = false;
            for (var _i = 0; _i < length; _i++) {
              var _node = this.node_nums[_i];
              _node.setPosition(_node.position.x, _node.position.y - fixStep);
            }
          }
          //        // console.timeEnd("ut");
        };

        return MiniPokerReel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_nums", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiniPokerReelContainer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MiniPokerReel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, instantiate, Component, MiniPokerReel;
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
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      MiniPokerReel = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "fd5aaq7CGROeJ44eKy4THmG", "MiniPokerReelContainer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MiniPokerReelContainer = exports('default', (_dec = ccclass("MiniPokerReelContainer"), _dec2 = menu("game/Minipoker/MiniPokerReelContainer"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniPokerReelContainer, _Component);
        function MiniPokerReelContainer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_reel", _descriptor2, _assertThisInitialized(_this));
          _this._maxNum = 0;
          _this._inited = false;
          _this._digitLimit = 0;
          _this._loaded = false;
          _this.miniReels = [];
          return _this;
        }
        var _proto = MiniPokerReelContainer.prototype;
        _proto.onLoad = function onLoad() {
          this._loaded = true;
          var x = -150;
          for (var i = 0; i < 10; i++) {
            var node = instantiate(this.prefab_reel);
            this.content.addChild(node);
            node.setPosition(x + i * 25, 0);
            var comp = node.getComponent(MiniPokerReel);
            this.miniReels.push(comp);
          }
          this.init();
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {};
        _proto.init = function init() {
          this._inited = true;
          this._digitLimit = this.content.children.length;
          this._maxNum = Math.pow(10, this._digitLimit) - 1;
        };
        _proto.refresh = function refresh(number) {
          if (!this._loaded) {
            return;
          }
          if (!this._inited) {
            this.init();
          }
          if (number > this._maxNum) number = this._maxNum;
          var length = this.miniReels.length;
          for (var i = 0; i < length; i++) {
            var digitNum = Math.floor(number / Math.pow(10, i)) % 10;
            var comp = this.miniReels[length - 1 - i];
            comp.run(digitNum);
          }
        };
        return MiniPokerReelContainer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_reel", [_dec4], {
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
  r('virtual:///prerequisite-imports/Minipoker', 'chunks:///_virtual/Minipoker'); 
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