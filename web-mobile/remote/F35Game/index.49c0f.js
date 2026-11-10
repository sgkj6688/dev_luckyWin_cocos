System.register("chunks:///_virtual/F35Ctrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './F35Model.ts', './I18n.ts', './ViewManager.ts', './F35Def.ts', './F35Utils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sys, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, F35Model, i18n, ViewManager, eProto, eEvent, eGameStatus, F35Utils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
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
      F35Model = module.F35Model;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eGameStatus = module.eGameStatus;
    }, function (module) {
      F35Utils = module.F35Utils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6a1c4JLQRlKVoEp3PzMuCQY", "F35Ctrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var F35Ctrl = exports('F35Ctrl', (_dec = ccclass("F35Ctrl"), _dec(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(F35Ctrl, _GameDef$BaseCtrl);
        function F35Ctrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._dataManager = void 0;
          _this._model = null;
          _this._configManager = ConfigManager.instance;
          _this._eventManager = EventManager.instance;
          _this._netManager = NetManager.instance;
          _this._dataManager = DataManager.instance;
          _this._model = F35Model.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = F35Ctrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete F35Ctrl._instance;
          F35Ctrl._instance = null;
          F35Model.destroy();
          F35Utils.destroy();
        };
        _proto.initProto = function initProto() {
          _GameDef$BaseCtrl.prototype.initProto.call(this);

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
          EventManager.instance.on(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.removeProto = function removeProto() {
          _GameDef$BaseCtrl.prototype.removeProto.call(this);

          //        //注册网络监听--本游戏values
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.instance.off(value, this.onRecvData, this);
          }

          //        // //注册网络监听--大厅
          this._eventManager.off(this._configManager.protocolHall.login, this.onRecvData, this); //断线重连
          this._eventManager.off(this._configManager.protocolHall.getWallet, this.onRecvData, this);
          this._eventManager.off(this._configManager.protocolHall.pushWallet, this.onRecvData, this);
        }
        //    /**
        //     * 请求下注
        //     * @param data
        //     */
        ;

        _proto.reqBet = function reqBet(BetAmount) {
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            BetAmount: BetAmount
          });
        }
        //    /**请求下车 */
        ;

        _proto.reqStop = function reqStop() {
          NetManager.instance.sendOnlineData(eProto.HD_Stop, {});
        };
        _proto.reqAutoStop = function reqAutoStop(autoRate) {
          NetManager.instance.sendOnlineData(eProto.HD_AutoStop, {
            AutoStopVal: autoRate
          });
        };
        _proto.reqCancelAutoStop = function reqCancelAutoStop() {
          NetManager.instance.sendOnlineData(eProto.HD_CancelAutoStop, {});
        }
        //    /**请求突出房间 */
        ;

        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {
            tableId: F35Model.instance.curTableID
          });
        }
        //    /**请求历史记录 */
        ;

        _proto.reqHistory = function reqHistory() {
          NetManager.instance.sendOnlineData(eProto.HD_History, {});
        }
        //    /**请求大奖记录 */
        ;

        _proto.reqJackpotRecord = function reqJackpotRecord(Page, Limit) {
          if (Page === void 0) {
            Page = 1;
          }
          if (Limit === void 0) {
            Limit = 9;
          }
          NetManager.instance.sendOnlineData(eProto.HD_GetJackpotRecord, {
            Limit: Limit,
            Page: Page
          });
        }
        //    /**重新进入 */
        ;

        _proto.reEnterRoom = function reEnterRoom() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          NetManager.instance.sendOnlineData(eProto.HD_Enter, {
            action: "HD_Enter",
            reEnter: true,
            tableId: F35Model.instance.curTableID
          });
        }
        //    /**请求进入房间 */
        ;

        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_Enter, {
            tableId: F35Model.instance.curTableID
          });
        };
        _proto.reqRoomList = function reqRoomList() {
          NetManager.instance.sendOnlineData(eProto.HD_GetTableList, {});
        }
        //    //////////////////////////////////////////
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.Log("==onRecvData==" + sys.now() + JSON.stringify(data));
          if (data.cmd != eProto.HD_UpdateOddNum) {
            gts.Debug.Log("==onRecvData==" + sys.now() + JSON.stringify(data));
          }
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code));
            }
            if (data.cmd == eProto.HD_Enter || data.Code == 402 && F35Model.instance.gameState.GameNo != F35Model.instance._myBetGameNO) {
              //                //退出到大厅
              EventManager.instance.emit(eEvent.onLoadHall);
              return;
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_GetTableList:
              {
                F35Model.instance.tableList = data.Data;
                break;
              }
            case eProto.HD_QuitTable:
              {
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case eProto.HD_Enter:
              {
                ViewManager.instance.closeWait();
                F35Model.instance.clearGameData();
                var enterData = data.Data;
                F35Model.instance.gameState = enterData.GameState;
                F35Model.instance.history = enterData.History || [];
                F35Model.instance.curRate = enterData.GameState.OddNum;
                if (enterData.AutoStop > 0) {
                  F35Model.instance.isAutoDown = true;
                  F35Model.instance.autoRate = enterData.AutoStop;
                }
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                F35Model.instance.gameState = data.Data;
                F35Model.instance.curRate = F35Model.instance.gameState.OddNum;
                switch (F35Model.instance.gameState.State) {
                  case eGameStatus.Checkout:
                    {
                      F35Model.instance.history = F35Model.instance.history || [];
                      F35Model.instance.history.push(F35Model.instance.curRate);
                      break;
                    }
                }
                break;
              }
            case eProto.HD_UpdateOddNum:
              {
                //                // gts.Debug.Log("==onRecvData==" + JSON.stringify(data));

                F35Model.instance.curRate = data.Data;
                break;
              }
            case eProto.HD_History:
              {
                F35Model.instance.history = data.Data || [];
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_BroadcastBet:
              {
                emitData = data.Data.Uid;
                F35Model.instance.gameState.TotalBetAmount += data.Data.BetAmount;
                F35Model.instance.updatePlayerInfo(data.Data);
                break;
              }
            case eProto.HD_Bet:
              {
                F35Model.instance._myBetGameNO = F35Model.instance.gameState.GameNo;
                break;
              }
            case eProto.HD_Stop:
              {
                emitData = data.Data.Player;
                if (data.Data.Prize) {
                  data.Data.Player.Prize = data.Data.Prize;
                }
                F35Model.instance.updatePlayerInfo(data.Data.Player);
                break;
              }
            case eProto.checkInRoom:
              {
                if (data.Data.InGame) {
                  return;
                }
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case eProto.HD_GetJackpotRecord:
              {
                F35Model.instance.JackpotRecord = data.Data;
                break;
              }
            case eProto.HD_JackpotReward:
              {
                F35Model.instance.jackpotReward = data.Data;
                break;
              }
            case eProto.HD_ChangeJackpot:
              {
                var nData = data.Data;
                F35Model.instance.gameState.PoolType = nData.PoolType;
                F35Model.instance.gameState.PoolVal = nData.PoolVal;
                if (F35Model.instance.prizePool) {
                  F35Model.instance.prizePool.AddVal = 0;
                  F35Model.instance.prizePool.AfterVal = 0;
                }
                break;
              }
            case eProto.HD_RefreshPrizePool:
              {
                var _nData = data.Data;
                if (!F35Model.instance.prizePool) {
                  F35Model.instance.prizePool = data.Data;
                } else {
                  F35Model.instance.prizePool.AddVal += _nData.AddVal;
                  F35Model.instance.prizePool.AfterVal = _nData.AfterVal;
                }
                break;
              }

            //            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==F35=getWallet==" + HD_Wallet.wallet.VndBalance);
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==F35=pushWallet==" + _HD_Wallet.VndBalance);

                //                // DataManager.instance.setUserDataForKey(UserKey.GOLD, 950);
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
          this.emitUpdateView(data.cmd, emitData);
        };
        return F35Ctrl;
      }(GameDef.BaseCtrl)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/F35Def.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a7278qNylJPwZ02ho99a/Z5", "F35Def", undefined);
      var cBundle = exports('cBundle', "F35Game");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_Enter"] = "f35/HD_Enter";
        eProto["HD_Bet"] = "f35/HD_Bet";
        eProto["HD_BroadcastBet"] = "f35/HD_BroadcastBet";
        eProto["HD_Stop"] = "f35/HD_Stop";
        eProto["HD_Leave"] = "f35/HD_Leave";
        eProto["HD_History"] = "f35/HD_History";
        eProto["checkInRoom"] = "f35/checkInRoom";
        eProto["HD_GetJackpotRecord"] = "f35/HD_GetJackpotRecord";
        eProto["HD_SwitchRoomState"] = "f35/HD_SwitchRoomState";
        eProto["HD_UpdateOddNum"] = "f35/HD_UpdateOddNum";
        eProto["HD_JackpotReward"] = "f35/HD_JackpotReward";
        eProto["HD_RefreshPrizePool"] = "f35/HD_RefreshPrizePool";
        eProto["HD_ChangeJackpot"] = "f35/HD_ChangeJackpot";
        eProto["HD_QuitTable"] = "f35/HD_QuitTable";
        eProto["HD_AutoStop"] = "f35/HD_AutoStop";
        eProto["HD_CancelAutoStop"] = "f35/HD_CancelAutoStop";
        eProto["HD_GetTableList"] = "f35/HD_GetTableList";
        return eProto;
      }({})); //

      // export const CMaxBetBase = [100000, 100000000, 500000000];
      var CBetBase = exports('CBetBase', [[1000, 2000, 5000, 10000, 20000, 50000], [50000, 100000, 150000, 200000, 500000, 1000000], [1000000, 5000000, 10000000, 15000000, 20000000, 25000000]]);
      var eAutoRateType = exports('eAutoRateType', Enum({
        integer: 0,
        decimal: 1
      }));
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["autoSetUpdateRate"] = "autoSetUpdateRate";
        eEvent["openBonusDetail"] = "openBonusDetail";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bg: "sound/bgm",
        boom: "sound/boom",
        dainji: "sound/dainji",
        loading: "sound/loading",
        jieguo: "sound/jieguo",
        touzhu: "sound/touzhu",
        qifei: "sound/qifei",
        closeDoor: "sound/guanmenn"
      });
      var eGameStatus = exports('eGameStatus', {
        NONE: "NONE",
        Ready: "Ready",
        ReadyEnd: "ReadyEnd",
        Start: "Start",
        Checkout: "Checkout"
      });

      /**下注状态*/
      var eBetStatus = exports('eBetStatus', /*#__PURE__*/function (eBetStatus) {
        eBetStatus[eBetStatus["NONE"] = 0] = "NONE";
        eBetStatus[eBetStatus["REBET"] = 1] = "REBET";
        eBetStatus[eBetStatus["BETING"] = 2] = "BETING";
        eBetStatus[eBetStatus["BETED"] = 3] = "BETED";
        eBetStatus[eBetStatus["STOP"] = 4] = "STOP";
        return eBetStatus;
      }({})); //下车

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/F35Game", ['./F35Ctrl.ts', './F35Def.ts', './F35Model.ts', './F35Scene.ts', './F35Utils.ts', './F35GameView.ts', './F35HallView.ts', './uiAutoSet.ts', './uiBetView.ts', './uiBonus.ts', './uiBonusItem.ts', './uiBonusRankItem.ts', './uiChat.ts', './uiGameInfo.ts', './uiHistory.ts', './uiPlayerItemInfo.ts', './uiRecord.ts', './uiRecordItem.ts', './uiRoomItem.ts', './uiScrollView_num.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/F35GameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './F35Def.ts', './F35Model.ts', './F35Ctrl.ts', './ViewManager.ts', './F35Utils.ts', './GUtil.ts', './uiGameInfo.ts', './uiBetView.ts', './uiRecord.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createClass, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, sp, Prefab, Label, UITransform, UIOpacity, v3, tween, instantiate, Tween, Sprite, v2, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, eGameStatus, eSound, eEvent, eProto, F35Model, F35Ctrl, ViewManager, F35Utils, GUtil, uiGameInfo, uiBetView, uiRecord, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      sp = module.sp;
      Prefab = module.Prefab;
      Label = module.Label;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      Tween = module.Tween;
      Sprite = module.Sprite;
      v2 = module.v2;
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
      eGameStatus = module.eGameStatus;
      eSound = module.eSound;
      eEvent = module.eEvent;
      eProto = module.eProto;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      F35Ctrl = module.F35Ctrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      F35Utils = module.F35Utils;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      uiGameInfo = module.default;
    }, function (module) {
      uiBetView = module.default;
    }, function (module) {
      uiRecord = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "8155aa1O61IaqnvohEwjFyG", "F35GameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var F35GameView = exports('default', (_dec = ccclass("F35GameView"), _dec2 = menu("game/F35Game/F35GameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(sp.Skeleton), _dec7 = property(Node), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Label), _dec13 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(F35GameView, _GameDef$BaseView);
        function F35GameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Button_menu", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_history", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_main", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_countDown", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_gameInfo", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Prefab_chat", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Prefab_betView", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Prefab_result", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_coin", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_noho", _descriptor11, _assertThisInitialized(_this));
          _this._curStatus = eGameStatus.NONE;
          return _this;
        }
        var _proto = F35GameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, F35Ctrl.instance);
          this.initUIView();
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          this.Button_menu.getComponent(UITransform).priority = 1001;
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          this.Node_countDown.node.active = false;
          this.unschedule(this.updateReadyTimer);
          F35Model.instance.clearGameData();
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
        };
        _proto.start = function start() {};
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
            if (NetManager.instance._connect == true) {
              F35Ctrl.instance.reEnterRoom();
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.initUIView = function initUIView() {
          var _this2 = this;
          //        // DataManager.instance.setUserDataForKey(UserKey.GOLD, 1950);

          this.Node_main.active = true;
          this.Node_main.getComponent(UIOpacity).opacity = 0;
          this.Node_main.scale = v3(3.0, 3.0, 1);
          tween(this.Node_main).stop().to(0.2, {
            scale: v3(0.9, 0.9, 1)
          }).to(0.05, {
            scale: v3(1, 1, 1)
          }).call(function () {
            var Node_gold = _this2.Node_main.getChildByName("Node_gold");
            var Node_goldPos = v3(Node_gold.position);
            Node_gold.setPosition(Node_gold.position.x, -500);
            Node_gold.active = true;
            tween(Node_gold).to(0.2, {
              position: Node_goldPos
            }).start();
          }).start();
          tween(this.Node_main.getComponent(UIOpacity)).stop().to(0.2, {
            opacity: 255
          }).start();
          var Node_gameInfoPos = v3(this.Node_gameInfo.position);
          this.Node_gameInfo.setPosition(this.Node_gameInfo.position.x, this.Node_gameInfo.position.y + 800);
          this.Node_gameInfo.active = true;
          tween(this.Node_gameInfo).delay(0.35).to(0.2, {
            position: Node_gameInfoPos
          }).start();
          if (this.Prefab_betView) {
            var Node_betView = instantiate(this.Prefab_betView);
            this.node.addChild(Node_betView);
            var Node_betViewPos = v3(Node_betView.position);
            Node_betView.setPosition(Node_betView.position.x, Node_betView.position.y + 1200);
            tween(Node_betView).delay(0.25).to(0.2, {
              position: Node_betViewPos
            }).start();
          } else {
            F35Utils.instance.bundle.load("prefab/Node_betView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this2.Prefab_betView = prefab;
              var Node_betView = instantiate(_this2.Prefab_betView);
              _this2.node.addChild(Node_betView);
              var Node_betViewPos = v3(Node_betView.position);
              Node_betView.setPosition(Node_betView.position.x, Node_betView.position.y + 1200);
              tween(Node_betView).delay(0.25).to(0.2, {
                position: Node_betViewPos
              }).start();
            });
          }
          var Button_menuPos = v3(this.Button_menu.position);
          this.Button_menu.setPosition(this.Button_menu.position.x, this.Button_menu.position.y + 150);
          this.Button_menu.active = true;
          tween(this.Button_menu).delay(0.5).to(0.2, {
            position: Button_menuPos
          }).start();
          var Node_historyPos = v3(this.Node_history.position);
          this.Node_history.setPosition(this.Node_history.position.x, this.Node_history.position.y + 150);
          this.Node_history.active = true;
          tween(this.Node_history).delay(0.5).to(0.2, {
            position: Node_historyPos
          }).call(F35Ctrl.instance.reqEnterRoom).start();
          if (this.Prefab_chat) {
            var Node_chat = instantiate(this.Prefab_chat);
            this.node.addChild(Node_chat);
            var Node_chatPos = v3(Node_chat.position);
            Node_chat.setPosition(Node_chat.position.x, Node_chat.position.y + 1200);
            tween(Node_chat).delay(0.25).to(0.2, {
              position: Node_chatPos
            }).start();
          } else {
            F35Utils.instance.bundle.load("prefab/Node_chat", Prefab, function (cur, total) {}, function (err, prefab) {
              _this2.Prefab_chat = prefab;
              var Node_chat = instantiate(_this2.Prefab_chat);
              _this2.node.addChild(Node_chat);
              var Node_chatPos = v3(Node_chat.position);
              Node_chat.setPosition(Node_chat.position.x, Node_chat.position.y + 1200);
              tween(Node_chat).delay(0.25).to(0.2, {
                position: Node_chatPos
              }).start();
            });
          }
        };
        _proto.initGame = function initGame() {
          //        //Node_main
          switch (F35Model.instance.gameState.State) {
            case eGameStatus.Ready:
              {
                this.doReady();
                break;
              }
            case eGameStatus.Start:
              {
                this.doRuning();
                break;
              }
            case eGameStatus.Checkout:
              {
                this.doResult();
                break;
              }
          }

          //        //Node_gameInfo
          var comUiGameInfo = this.Node_gameInfo.getComponent(uiGameInfo);
          comUiGameInfo.updateInfo();
          comUiGameInfo.updatePlayerList();

          //        //history
          var comuiRecord = this.Node_history.getComponent(uiRecord);
          comuiRecord.updateRecord();

          //        //
          this.updatePrizePool();
          //        //
          this.updateGold();

          //        //
          var Node_rate = this.Node_main.getChildByName("Node_rate");
          var myInfo = F35Model.instance.getMyInfo();
          Node_rate.active = myInfo && myInfo.BetAmount > 0;
          if (Node_rate.active && myInfo) {
            var Label_bet = Node_rate.getChildByName("Label_bet").getComponent(Label);
            Label_bet.string = Common.ChangeMoneyShow(myInfo.BetAmount, 3);
          }
        }
        //    ///////////////////////////////////////////////////////////////////////////
        ;

        _proto.updateGold = function updateGold() {
          var gold = Common.numFormat(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          this.Label_gold.string = gold;
        };
        _proto.updatePrizePool = function updatePrizePool() {
          //        //切换类型
          var Node_bonus = this.Node_main.getChildByName("Node_bonus").getComponent(sp.Skeleton);
          var aniName = F35Model.instance.gameState.PoolType == 1 ? "le" : "chan";
          if (aniName != Node_bonus.animation) {
            Node_bonus.setAnimation(0, aniName, true);
          }

          //        //更新数值
          if (F35Model.instance.prizePool && F35Model.instance.prizePool.AddVal > 0) {
            var Label_bonus = this.Node_main.getChildByName("Label_bonus").getComponent(Label);
            Tween.stopAllByTarget(Label_bonus.node);
            tween(Label_bonus.node).repeatForever(tween(Label_bonus.node).delay(0.05).call(function () {
              if (F35Model.instance.prizePool.AddVal == 0 || F35Model.instance.prizePool.AfterVal == F35Model.instance.gameState.PoolVal) {
                F35Model.instance.gameState.PoolVal = F35Model.instance.prizePool.AfterVal;
                Tween.stopAllByTarget(Label_bonus.node);
                Label_bonus.string = "" + Common.numFormat(F35Model.instance.gameState.PoolVal);
                return;
              }
              var disNum = F35Model.instance.prizePool.AddVal > 100 ? F35Model.instance.prizePool.AddVal / 100 : 1;
              F35Model.instance.prizePool.AddVal -= disNum;
              F35Model.instance.gameState.PoolVal += disNum;
              Label_bonus.string = "" + Common.numFormat(F35Model.instance.gameState.PoolVal);
            })).start();
          } else {
            var _Label_bonus = this.Node_main.getChildByName("Label_bonus").getComponent(Label);
            _Label_bonus.string = "" + Common.numFormat(F35Model.instance.gameState.PoolVal);
          }
        };
        _proto.updateReadyTimer = function updateReadyTimer(dt) {
          var Node_progress = this.Node_main.getChildByName("Node_progress").getChildByName("bar");
          F35Model.instance.gameState.StateTime -= dt;
          var fillRange = 1 - F35Model.instance.gameState.StateTime / 5.0;
          Node_progress.getComponent(Sprite).fillRange = fillRange;
          if (F35Model.instance.gameState.StateTime < 0.25 && !this.Node_countDown.node.active) {
            this.Node_countDown.node.active = true;
            this.Node_countDown.setAnimation(0, "animation", false);
            F35Model.instance.gameState.State = eGameStatus.ReadyEnd;
            var comuiBetView = this.node.getChildByName("Node_betView").getComponent(uiBetView);
            comuiBetView.setReadyEnd();
          } else if (F35Model.instance.gameState.StateTime < 3 && F35Model.instance.gameState.StateTime >= 0) {
            //            //如果有预下注 则发送下注信息
            var _comuiBetView = this.node.getChildByName("Node_betView").getComponent(uiBetView);
            _comuiBetView.doBet();
          }
        };
        _proto.doShowNoHo = function doShowNoHo(rate, bonus) {
          var _this3 = this;
          this.Node_noho.node.active = true;
          this.Node_noho.node.getComponent(UITransform).priority = 1000;
          this.scheduleOnce(function () {
            var Label_rate = _this3.Node_noho.node.getChildByName("Label_rate");
            var Label_bonus = _this3.Node_noho.node.getChildByName("Label_bonus");
            Label_rate.active = true;
            Label_bonus.active = true;
            Label_rate.getComponent(Label).string = F35Utils.instance.numberFormat(rate, 2) + "X";
            Label_bonus.getComponent(Label).string = "" + Common.ChangeMoneyShow(bonus, 3);
            Label_rate.getComponent(UIOpacity).opacity = 0;
            Label_bonus.getComponent(UIOpacity).opacity = 0;
            tween(Label_rate.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }).start();
            tween(Label_bonus.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }).start();
          }, 4.0);
          this.Node_noho.setAnimation(0, "intro", false);
          this.Node_noho.setCompleteListener(function () {
            _this3.Node_noho.setCompleteListener(null);
            var Label_rate = _this3.Node_noho.node.getChildByName("Label_rate");
            var Label_bonus = _this3.Node_noho.node.getChildByName("Label_bonus");
            Label_rate.active = false;
            Label_bonus.active = false;
            _this3.Node_noho.node.active = false;
          });
        };
        _proto.doShowResult = function doShowResult(isShow) {
          var _this4 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          var Node_result = this.Node_main.getChildByName("Node_result");
          if (!isShow) {
            if (Node_result) {
              tween(Node_result.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                Node_result.destroyFromParent();
              }).start();
            }
            return;
          }
          if (Node_result) {
            return;
          }
          var doShow = function doShow() {
            Node_result = instantiate(_this4.Prefab_result);
            _this4.Node_main.addChild(Node_result);
            Node_result.getComponent(UIOpacity).opacity = 0;
            tween(Node_result.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }).call(function () {
              //                    //自己的得分
            }).start();
            var Label_disTance = Node_result.getChildByName("Label_disTance").getComponent(Label);
            Label_disTance.string = F35Utils.instance.numberFormat(F35Model.instance.curRate, 2) + "X";

            //            //Node_luckyPlayer
            var Node_luckyPlayer = Node_result.getChildByName("Node_luckyPlayer");
            var playerList = F35Model.instance.gameState.PlayerInfos ? F35Model.instance.gameState.PlayerInfos.slice() : [];
            playerList.sort(function (a, b) {
              return b.StopVal - a.StopVal;
            });
            for (var i = 0; i < 3; i++) {
              var player = playerList[i];
              var nodeItem = Node_luckyPlayer.getChildByName("Node_" + i);
              nodeItem.active = player && player.Stop ? true : false;
              var Label_nickName = nodeItem.getChildByName("Label_nickName").getComponent(Label);
              Label_nickName.string = player ? Common.nickNameFormat(player.Nickname, 6) : "-";
              var Label_bet = nodeItem.getChildByName("Label_bet").getComponent(Label);
              Label_bet.string = player ? Common.ChangeMoneyShow(player.BetAmount, 3) : "-";
              var Label_rate = nodeItem.getChildByName("Label_rate").getComponent(Label);
              Label_rate.string = player ? F35Utils.instance.numberFormat(player.StopVal, 2) + "X" : "-";
              var Label_win = nodeItem.getChildByName("Label_win").getComponent(Label);
              Label_win.string = player ? Common.ChangeMoneyShow(F35Utils.instance.FxF(player.BetAmount, player.StopVal), 3) : "-";
              var Label_texWin = nodeItem.getChildByName("Label_texWin").getComponent(Label);
              Label_texWin.string = player ? "WIN" : "-";
            }
            playerList = null;
          };
          if (this.Prefab_result) {
            doShow();
          } else {
            F35Utils.instance.bundle.load("prefab/Node_result", Prefab, function (cur, total) {}, function (err, prefab) {
              _this4.Prefab_result = prefab;
              doShow();
            });
          }
        };
        _proto.doPlaneSpeedUp = function doPlaneSpeedUp() {
          var _this5 = this;
          if (F35Model.instance.gameState.State != eGameStatus.Start) {
            return;
          }
          var Node_plane = this.Node_main.getChildByName("Node_plane").getComponent(sp.Skeleton);
          if (Node_plane.node.active) {
            tween(Node_plane).delay(Math.random() * 3 + 3).call(function () {
              if (Node_plane.node.active && F35Model.instance.gameState.State == eGameStatus.Start) {
                var Node_bg = _this5.Node_main.getChildByName("Node_bg").getComponent(sp.Skeleton);
                Node_bg.timeScale = 2.0;
                F35Utils.instance.playSound(eSound.qifei);
                Node_plane.setMix("idle", "fast", 5.33);
                Node_plane.setAnimation(0, "fast", false);
                Node_plane.setCompleteListener(function () {
                  Node_plane.setCompleteListener(null);
                  Node_plane.setMix("fast", "idle", 2.66);
                  Node_plane.addAnimation(0, "idle", true);
                  F35Utils.instance.stopSoundQiFei();
                  Node_bg.timeScale = 1.0;
                  _this5.doPlaneSpeedUp();
                });
              }
            }).start();
          }
        };
        _proto.doStart = function doStart() {
          var _this6 = this;
          this.doShowResult(false);
          this.Node_countDown.node.active = false;
          var Node_progress = this.Node_main.getChildByName("Node_progress");
          Node_progress.active = false;
          this.unschedule(this.updateReadyTimer);

          //        //Node_rate
          var Node_rate = this.Node_main.getChildByName("Node_rate");
          var myInfo = F35Model.instance.getMyInfo();
          Node_rate.active = myInfo && myInfo.BetAmount > 0;
          if (Node_rate.active && myInfo) {
            var Label_bet = Node_rate.getChildByName("Label_bet").getComponent(Label);
            Label_bet.string = Common.ChangeMoneyShow(myInfo.BetAmount, 3);
            var Label_win = Node_rate.getChildByName("Label_win").getComponent(Label);
            Label_win.string = Common.numFormat(F35Utils.instance.FxF(myInfo.BetAmount, F35Model.instance.curRate));
          }

          //        //Node_bg
          var Node_bg = this.Node_main.getChildByName("Node_bg").getComponent(sp.Skeleton);
          Node_bg.timeScale = 1.0;
          Node_bg.paused = false;
          Node_bg.setAnimation(0, "star", false);
          Node_bg.setCompleteListener(function () {
            Node_bg.setCompleteListener(null);
            Node_bg.setAnimation(0, "idle", true);
          });

          //        //Node_door
          var Node_door = this.Node_main.getChildByName("Node_door").getComponent(sp.Skeleton);
          Node_door.node.active = true;
          Node_door.setAnimation(0, "open", false);
          F35Utils.instance.playSound(eSound.qifei);

          //        //Node_plane
          this.scheduleOnce(function () {
            var Node_plane = _this6.Node_main.getChildByName("Node_plane").getComponent(sp.Skeleton);
            Node_plane.node.active = true;
            Node_plane.setAnimation(0, "start", false);
            Node_plane.setCompleteListener(function () {
              Node_plane.setCompleteListener(null);
              Node_plane.addAnimation(0, "idle", true);
              _this6.doPlaneSpeedUp();
            });
          }, 0.5);
          this.curRate = 0;

          //        //rateInfo
          var Label_rate = this.Node_main.getChildByName("Label_rate");
          Label_rate.getComponent(Label).string = "0.0X";

          //        //更新玩家列表
          var comUiGameInfo = this.Node_gameInfo.getComponent(uiGameInfo);
          comUiGameInfo.updateInfo();
          comUiGameInfo.updatePlayerList();
        };
        _proto.doEnd = function doEnd() {
          var _this7 = this;
          var Node_bg = this.Node_main.getChildByName("Node_bg").getComponent(sp.Skeleton);
          Node_bg.timeScale = 1.0;

          //        //Node_plane
          var Node_plane = this.Node_main.getChildByName("Node_plane").getComponent(sp.Skeleton);
          Node_plane.node.active = true;
          Node_plane.setCompleteListener(null);
          Node_plane.setAnimation(0, "boom", false);
          Node_plane.setCompleteListener(function () {
            Node_plane.setCompleteListener(null);
            Node_plane.node.active = false;
            _this7.scheduleOnce(function () {
              //                //Node_bg
              Node_bg.paused = true;

              //                //Node_door
              var Node_door = _this7.Node_main.getChildByName("Node_door").getComponent(sp.Skeleton);
              Node_door.node.active = true;
              Node_door.setAnimation(0, "close", false);
              Node_door.setCompleteListener(function () {
                Node_door.setCompleteListener(null);
                Node_door.addAnimation(0, "quite", true);

                //                    //showResult
                _this7.doShowResult();
              });
            }, 1);
          });
          this.scheduleOnce(function () {
            F35Utils.instance.playOneShot(eSound.closeDoor);
          }, 0.2);
          F35Utils.instance.playOneShot(eSound.boom);

          //        //history
          var comuiRecord = this.Node_history.getComponent(uiRecord);
          comuiRecord.updateRecord();
        };
        _proto.doReady = function doReady() {
          //        //Node_bg
          var Node_bg = this.Node_main.getChildByName("Node_bg").getComponent(sp.Skeleton);
          Node_bg.timeScale = 1.0;
          Node_bg.paused = true;

          //        //Node_door
          var Node_door = this.Node_main.getChildByName("Node_door").getComponent(sp.Skeleton);
          Node_door.node.active = true;
          Node_door.setAnimation(0, "quite", true);

          //        //Node_plane
          var Node_plane = this.Node_main.getChildByName("Node_plane");
          Node_plane.active = false;

          //        //
          this.doShowResult(false);

          //        //倒计时
          var Node_progress = this.Node_main.getChildByName("Node_progress");
          Node_progress.active = true;
          Node_progress.getChildByName("bar").getComponent(Sprite).fillRange = 1 - F35Model.instance.gameState.StateTime / 5.0;
          this.schedule(this.updateReadyTimer);
          F35Utils.instance.playSound(eSound.loading);

          //        //更新玩家列表
          var comUiGameInfo = this.Node_gameInfo.getComponent(uiGameInfo);
          comUiGameInfo.updateInfo();
          comUiGameInfo.updatePlayerList();
          this.curRate = 0;
        };
        _proto.doRuning = function doRuning() {
          this.doShowResult(false);
          this.Node_countDown.node.active = false;
          var Node_progress = this.Node_main.getChildByName("Node_progress");
          Node_progress.active = false;
          this.unschedule(this.updateReadyTimer);

          //        //Node_bg
          var Node_bg = this.Node_main.getChildByName("Node_bg").getComponent(sp.Skeleton);
          Node_bg.timeScale = 1.0;
          Node_bg.paused = false;
          Node_bg.setAnimation(0, "idle", true);

          //        //Node_door
          var Node_door = this.Node_main.getChildByName("Node_door").getComponent(sp.Skeleton);
          Node_door.node.active = false;

          //        //Node_plane
          var Node_plane = this.Node_main.getChildByName("Node_plane").getComponent(sp.Skeleton);
          Node_plane.node.active = true;
          Node_plane.setAnimation(0, "idle", true);
          this.doPlaneSpeedUp();
          this.curRate = F35Model.instance.curRate;
        };
        _proto.doResult = function doResult() {
          //        //Node_bg
          var Node_bg = this.Node_main.getChildByName("Node_bg").getComponent(sp.Skeleton);
          Node_bg.timeScale = 1.0;
          Node_bg.paused = true;

          //        //Node_door
          var Node_door = this.Node_main.getChildByName("Node_door").getComponent(sp.Skeleton);
          Node_door.node.active = true;
          Node_door.setAnimation(0, "quite", true);

          //        //Node_plane
          var Node_plane = this.Node_main.getChildByName("Node_plane");
          Node_plane.active = false;

          //        //showResult
          this.doShowResult();
        }
        //    ///////////////////////////////////////////////////////////////////////////
        //    ///////////////////////////////////////////////////////////////////////////
        ;

        _proto.doMenuShow = function doMenuShow(isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          var Node_menu = this.node.getChildByName("Node_menu");
          // Node_menu.getComponent(cc.UITransform).priority = 1000;
          Node_menu.getComponent(UITransform).priority = 1000;

          // this.Button_menu.getComponent(cc.UITransform).priority = 1001;
          if (isShow) {
            Node_menu.active = true;
            Node_menu.setScale(0, Node_menu.scale.y, 1);
            Node_menu.getComponent(UIOpacity).opacity = 50;
            tween(Node_menu).stop().to(0.2, {
              scale: v3(1, Node_menu.scale.y, 1)
            }).start();
            tween(Node_menu.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: 255
            }).start();
          } else {
            tween(Node_menu).stop().to(0.2, {
              scale: v3(0, Node_menu.scale.y, 1)
            }).call(function () {
              Node_menu.active = false;
            }).start();
            tween(Node_menu.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: 50
            }).start();
          }
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            //            //返回
            case "Button_menu":
              {
                var Node_menu = this.node.getChildByName("Node_menu");
                this.doMenuShow(!Node_menu.active);
                break;
              }
            case "Button_return":
              {
                F35Ctrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                this.doMenuShow(false);
                break;
              }
            case "Button_rank":
              {
                GUtil.openRank("f35");
                this.doMenuShow(false);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", F35Utils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                this.doMenuShow(false);
                break;
              }
            case "Node_bonus":
              {
                //                //打开彩金界面
                Common.loadPopBuddle("prefab/Node_bonus", F35Utils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                break;
              }
          }
        };
        _proto.showCoinEffect = function showCoinEffect() {
          var _this8 = this;
          var maxCounts = 20;
          var _loop = function _loop() {
            var startPos = v2(508 + Math.random() * 80 - 40, -155 + Math.random() * 80 - 40);
            var endPos = v2(-95, -340);
            var coin = instantiate(_this8.prefab_coin);
            coin.getComponent(UIOpacity).opacity = 255;
            coin.getComponent(UITransform).priority = 1000;
            coin.position = v3(startPos.x, startPos.y);
            _this8.node.addChild(coin);
            tween(coin).delay(i * 0.01).parallel(tween(coin).bezierTo(+Math.random() * 0.4 + 0.5, v2(startPos.x, (startPos.y + endPos.y) / 2), v2(endPos.x, -(startPos.y + endPos.y) / 2), endPos).start(), tween(coin).to(0.2, {
              scale: v3(0.75, 0.75, 1)
            }).start()).call(function () {
              tween(coin.getComponent(UIOpacity)).to(0.1, {
                opacity: 0
              }).start();
            }).delay(0.1).call(function () {
              if (maxCounts > 0) {
                maxCounts = 0;
                F35Utils.instance.playOneShot(eSound.touzhu);
                var myInfo = F35Model.instance.getMyInfo();
                //                        //tisi
                Common.showTip("WIN:" + Common.numFormat(myInfo.Prize));
              }
            }).removeSelf().start();
          };
          for (var i = 0; i < maxCounts; i++) {
            _loop();
          }
        };
        _proto.doDrop = function doDrop(rate) {
          var Node_manRoot = this.Node_main.getChildByName("Node_manRoot");
          var Node_man = this.Node_main.getChildByName("Node_man");
          var newMan = instantiate(Node_man);
          Node_manRoot.addChild(newMan);
          newMan.active = true;
          newMan.position = v3(0);
          var Label_rate = newMan.getChildByName("Label_rate").getComponent(Label);
          Label_rate.string = rate + "X";
          newMan.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          newMan.getComponent(sp.Skeleton).setCompleteListener(function () {
            newMan.getComponent(sp.Skeleton).setCompleteListener(null);
            Label_rate.node.active = false;
            newMan.destroyFromParent();
          });
          var toX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 200 + 100);
          var toY = Math.random() * 100 - 250;
          tween(newMan).bezierTo(2.0, v2(toX, 0), v2(toX * 0.75, 100), v2(toX, toY)).start();
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this9 = this;
          switch (event) {
            case eProto.HD_Enter:
              {
                this.initGame();
                break;
              }
            case eProto.HD_BroadcastBet:
              {
                //                //更新玩家列表
                var comUiGameInfo = this.Node_gameInfo.getComponent(uiGameInfo);
                comUiGameInfo.updateInfo();
                comUiGameInfo.updatePlayerList();
                break;
              }
            case eProto.HD_Stop:
              {
                //                //更新玩家列表
                var _comUiGameInfo = this.Node_gameInfo.getComponent(uiGameInfo);
                _comUiGameInfo.updateInfo();
                _comUiGameInfo.updatePlayerList();
                var Uid = data.Uid;
                if (F35Model.instance.isMySelf(Uid)) {
                  this.showCoinEffect();
                }
                this.doDrop(data.StopVal);
                break;
              }
            case eProto.HD_UpdateOddNum:
              {
                this.curRate = F35Model.instance.curRate;
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                switch (F35Model.instance.gameState.State) {
                  case eGameStatus.Ready:
                    {
                      this.doReady();
                      break;
                    }
                  case eGameStatus.Start:
                    {
                      this.doStart();
                      break;
                    }
                  case eGameStatus.Checkout:
                    {
                      this.curRate = F35Model.instance.curRate;
                      var Node_manRoot = this.Node_main.getChildByName("Node_manRoot");
                      Node_manRoot.removeAllChildren();
                      this.scheduleOnce(function () {
                        var Node_rate = _this9.Node_main.getChildByName("Node_rate");
                        Node_rate.active = false;
                        var comUiGameInfo = _this9.Node_gameInfo.getComponent(uiGameInfo);
                        comUiGameInfo.updateInfo();
                        comUiGameInfo.updatePlayerList();
                        _this9.doEnd();
                      });
                      break;
                    }
                }
                break;
              }
            case eProto.HD_History:
              {
                break;
              }
            case eProto.HD_JackpotReward:
              {
                //                //弹出爆炸中奖特效
                this.doShowNoHo(F35Model.instance.curRate, F35Model.instance.jackpotReward);
                break;
              }
            case eProto.HD_ChangeJackpot:
            case eProto.HD_RefreshPrizePool:
              {
                this.updatePrizePool();
                break;
              }
            //            //////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();
                var comuiBetView = this.node.getChildByName("Node_betView").getComponent(uiBetView);
                comuiBetView.checkGold();
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
            case eProto.checkInRoom:
              {
                //                // 检查是否再房间
                if (data.InGame) {
                  //                    //在房间，需要重连
                  F35Ctrl.instance.reEnterRoom();
                } else {
                  //                    //退出到大厅
                  EventManager.instance.emit(eEvent.onLoadHall);
                }
                break;
              }
          }
        };
        _createClass(F35GameView, [{
          key: "curRate",
          get: function get() {
            return F35Model.instance.curRate;
          },
          set: function set(rate) {
            var disRate = rate - F35Model.instance.curRate;
            F35Model.instance.curRate = rate;
            var Label_rate = this.Node_main.getChildByName("Label_rate");
            Label_rate.getComponent(Label).string = F35Utils.instance.numberFormat(F35Model.instance.curRate, 3) + "X";
            var myInfo = F35Model.instance.getMyInfo();
            var Node_rate = this.Node_main.getChildByName("Node_rate");
            if (Node_rate.active && myInfo && !myInfo.Stop) {
              var Label_win = Node_rate.getChildByName("Label_win").getComponent(Label);
              Label_win.string = Common.numFormat(F35Utils.instance.FxF(myInfo.BetAmount, F35Model.instance.curRate));
            }
            var Node_bg = this.Node_main.getChildByName("Node_bg").getComponent(sp.Skeleton);
            if (disRate > 0.09 && Node_bg.timeScale != 2.0) {
              Node_bg.timeScale = 2.0;
            }

            //        // gts.Debug.Log("==curRate==" + F35Model.instance.curRate);
          }
        }]);

        return F35GameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_history", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_main", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_countDown", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_gameInfo", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Prefab_chat", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Prefab_betView", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Prefab_result", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "prefab_coin", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_noho", [_dec13], {
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

System.register("chunks:///_virtual/F35HallView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './GUtil.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './F35Ctrl.ts', './F35Def.ts', './F35Model.ts', './F35Utils.ts', './uiRoomItem.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Prefab, instantiate, GameDef, GUtil, ConfigManager, DataManager, UserKey, EventManager, NetManager, ViewManager, F35Ctrl, eEvent, cBundle, eProto, F35Model, F35Utils, uiRoomItem, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      GUtil = module.default;
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
      ViewManager = module.default;
    }, function (module) {
      F35Ctrl = module.F35Ctrl;
    }, function (module) {
      eEvent = module.eEvent;
      cBundle = module.cBundle;
      eProto = module.eProto;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      F35Utils = module.F35Utils;
    }, function (module) {
      uiRoomItem = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "3aa45mrZtRMT4AmlB8Kf0FB", "F35HallView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var F35HallView = exports('default', (_dec = ccclass("F35HallView"), _dec2 = menu("game/F35Game/F35HallView"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(uiRoomItem), _dec7 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(F35HallView, _GameDef$BaseView);
        function F35HallView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          //    //player info
          _initializerDefineProperty(_this, "Label_name", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roomList", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "helpView", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = F35HallView.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, F35Ctrl.instance);
          if (DataManager.instance.serverID) {
            DataManager.instance.serverID = "";
            this.scheduleOnce(function () {
              if (NetManager.instance._connect == true) {
                F35Ctrl.instance.reEnterRoom();
              }
            }, 0.1);
          }
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          F35Ctrl.instance.reqRoomList();
          //        //定时更新房间列表
          this.schedule(F35Ctrl.instance.reqRoomList, 3);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        // this.unschedule(F35Ctrl.instance.reqRoomList);
          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
        };

        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
          this.unscheduleAllCallbacks();
        };
        _proto.start = function start() {
          //        //玩家信息
          this.Label_gold.string = "$" + Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)));
          Common.nickNameFormatL(this.Label_name, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var headiconName = DataManager.instance.getUserDataForKey(UserKey.AVATAR);

          //        //头像
          Common.getHead(headiconName, this.head.node);
          var grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          if (grade) {
            var Sprite_level = this.Label_name.node.parent.getChildByName("Sprite_level");
            Common.setGradeCode(Sprite_level, parseInt(grade));
          }
        }
        //    // update (dt) {}
        ;

        _proto.onBtnClick = function onBtnClick(event, eventData) {
          //        // gts.Debug.Log("=onBtnClick=eventData=" + eventData);
          switch (eventData) {
            case "BackHall":
              {
                Common.showWait();
                Common.returnToHall(this, cBundle);
                break;
              }
            case "Btn_joinRoom":
              {
                //                //随机加入
                F35Model.instance.curTableID = "" + Math.floor(Math.random() * 3 + 1);
                EventManager.instance.emit(eEvent.onLoadGame);
                break;
              }
            //            ///////////
            case "Btn_help":
              {
                Common.loadPopBuddle("prefab/Node_help", F35Utils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                break;
              }
            case "Btn_rank":
              {
                GUtil.openRank("f35");
                break;
              }
            case "Btn_record":
              {
                GUtil.openRecord("f35");
                break;
              }
          }
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
        //    ///////////////////////////////
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_GetTableList:
              {
                for (var i = 0; i < 3; i++) {
                  this.roomList[i].updateInfo(i);
                }
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
                this.Label_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
                break;
              }
          }
        };
        return F35HallView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_name", [_dec3], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "roomList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "helpView", [_dec7], {
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

System.register("chunks:///_virtual/F35Model.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './DataManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, GameDef, DataManager, UserKey;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }],
    execute: function () {
      cclegacy._RF.push({}, "988a2Q822NJfKNcjVzmIRSI", "F35Model", undefined);
      var F35Model = exports('F35Model', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(F35Model, _GameDef$BaseSington);
        function F35Model() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.tableList = [];
          _this.curTableID = "1";
          _this.curRate = 0;
          _this.prizePool = null;
          _this.gameState = null;
          _this.history = null;
          _this.jackpotReward = 0;
          _this.JackpotRecord = null;
          _this.isAutoBet = false;
          _this.isAutoDown = false;
          _this.isBetted = false;
          _this.autoRate = 2.0;
          _this._myBetGameNO = "";
          return _this;
        }
        F35Model.destory = function destory() {
          delete this._instance;
          this._instance = null;
        };
        var _proto = F35Model.prototype;
        _proto.updateTotalBet = function updateTotalBet() {
          var totalBet = 0;
          var playerList = this.gameState.PlayerInfos;
          if (playerList) {
            for (var _iterator = _createForOfIteratorHelperLoose(playerList), _step; !(_step = _iterator()).done;) {
              var player = _step.value;
              totalBet += player.BetAmount;
            }
            this.gameState.TotalBetAmount = totalBet;
          }
        };
        _proto.updatePlayerInfo = function updatePlayerInfo(data) {
          var isPlayerExist = false;
          var playerList = this.gameState.PlayerInfos;
          if (playerList) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(playerList), _step2; !(_step2 = _iterator2()).done;) {
              var player = _step2.value;
              if (player.Uid == data.Uid) {
                player.Stop = data.Stop;
                player.StopVal = data.StopVal;
                player.OtherId = data.BetAmount;
                player.OtherId = data.OtherId;
                if (data.Prize) {
                  player.Prize = data.Prize;
                }
                isPlayerExist = true;
                break;
              }
            }
          }
          if (!isPlayerExist) {
            this.gameState.PlayerInfos = this.gameState.PlayerInfos || [];
            this.gameState.PlayerInfos.push(data);
          }
        };
        _proto.getMyInfo = function getMyInfo() {
          var myUID = DataManager.instance.getUserDataForKey(UserKey.OID);
          if (!this.gameState || !this.gameState.PlayerInfos) {
            return null;
          }
          var playerList = this.gameState.PlayerInfos;
          for (var _iterator3 = _createForOfIteratorHelperLoose(playerList), _step3; !(_step3 = _iterator3()).done;) {
            var player = _step3.value;
            if (player.Uid == myUID) {
              return player;
            }
          }
          return null;
        };
        _proto.isMySelf = function isMySelf(uid) {
          return uid == DataManager.instance.getUserDataForKey(UserKey.OID);
        };
        _proto.getTableInfo = function getTableInfo() {
          return this.tableList[this.tableIndex];
        }
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        ;

        _proto.clearGameData = function clearGameData() {
          this.curRate = 0;
          this.prizePool = null;
          this.gameState = null;
          this.history = null;
          this.jackpotReward = 0;
          this.JackpotRecord = null;
          this.isAutoBet = false;
          this.isAutoDown = false;
          this.isBetted = false;
          this.autoRate = 2.0;
          this._myBetGameNO = "";
        };
        _createClass(F35Model, [{
          key: "tableIndex",
          get: function get() {
            return parseInt(this.curTableID) - 1;
          }
        }]);
        return F35Model;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/F35Scene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './F35Def.ts', './F35Utils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, instantiate, UIOpacity, tween, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, F35Utils, Common;
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
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
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
      F35Utils = module.F35Utils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "7811e0jgaJCDoYpsiXSkHmR", "F35Scene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var F35Scene = exports('default', (_dec = ccclass("F35Scene"), _dec2 = menu("game/F35Game/F35Scene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(F35Scene, _Component);
        function F35Scene() {
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
          return _this;
        }
        var _proto = F35Scene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          F35Utils.instance.bundle = assetManager.getBundle(cBundle);
          F35Utils.instance.preLoad();
          F35Utils.instance.playBgMusic();
          this.onLoadHall();
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onLoadHall = function onLoadHall() {
          var _this2 = this;
          console.time("bundle.onLoadHall");
          Common.showWait();
          if (!this.prefab_hall) {
            F35Utils.instance.bundle.load("prefab/F35Hall", Prefab, function (cur, total) {}, function (err, prefab) {
              _this2.prefab_hall = prefab;
              _this2.showHall();
            });
          } else {
            this.showHall();
          }
        };
        _proto.showHall = function showHall() {
          var _this3 = this;
          if (this.prefab_hall) {
            if (!this._node_hall) {
              this._node_hall = instantiate(this.prefab_hall);
              this.node.addChild(this._node_hall);
            }
            this._node_hall.getComponent(UIOpacity).opacity = 0;
            tween(this._node_hall.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).call(function () {
              if (_this3.firstNode) {
                _this3.firstNode.removeFromParent();
                _this3.firstNode.destroy();
                _this3.firstNode = null;
              }
              if (_this3._node_Game) {
                _this3._node_Game.removeFromParent();
                _this3._node_Game.destroy();
                _this3._node_Game = null;
              }
            }).start();
            Common.closeWait();
            console.timeEnd("bundle.onLoadHall");
          }
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this4 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            F35Utils.instance.bundle.load("prefab/F35GameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this4.prefab_game = prefab;
              _this4.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          if (this.prefab_game) {
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
            }
            if (this._node_hall) {
              this._node_hall.removeFromParent();
              this._node_hall.destroy();
              this._node_hall = null;
            }

            //            // cc.tween(this._node_Game)
            //            //     .stop()
            //            //     .to(fadeInTimes, { opacity: 255 })
            //            //     .call(() => {
            //            //         Common.closeWait();
            //            //     })
            //            //     .start();

            Common.closeWait();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return F35Scene;
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

System.register("chunks:///_virtual/F35Utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './F35Def.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AudioClip, GameDef, AudioManager, eSound;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSound = module.eSound;
    }],
    execute: function () {
      cclegacy._RF.push({}, "78150QBUp5A24MYeIC0mSbo", "F35Utils", undefined);
      var F35Utils = exports('F35Utils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(F35Utils, _GameDef$BaseSington);
        function F35Utils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.soundID_qifei = null;
          return _this;
        }
        var _proto = F35Utils.prototype;
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/F35GameView");
          this.bundle.preloadDir("prefab");
          this.bundle.preloadDir("sound");
        };
        _proto.playBgMusic = function playBgMusic() {
          AudioManager.instance.playBgMusic(eSound.bg, this.bundle, true);
          // cc.audioEngine.setMusicVolume(0.5);
        };

        _proto.playSound = function playSound(soundPath) {
          var _this2 = this;
          if (this.soundID_qifei && soundPath == eSound.boom) {
            AudioManager.instance.stopSound(this.soundID_qifei);
            this.soundID_qifei = null;
          }
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err) {
              return;
            }
            var soundID = AudioManager.instance.playSound(audioClip, false);
            if (soundPath == eSound.qifei) {
              _this2.soundID_qifei = soundID;

              // setTimeout(() => {
              //     if (this.soundID_qifei) {
              //         AudioManager.instance.stopSound(this.soundID_qifei);
              //         this.soundID_qifei = null;
              //     }
              // }, cc.audioEngine.getDuration(soundID) * 1000);
            }
            // cc.audioEngine.setEffectsVolume(1);
          });
        };

        _proto.playOneShot = function playOneShot(soundPath, isLoop, cb) {
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err) {
              return;
            }
            AudioManager.instance.playOneShot(audioClip);
          });
        };
        _proto.stopSoundQiFei = function stopSoundQiFei() {
          if (this.soundID_qifei) {
            AudioManager.instance.stopSound(this.soundID_qifei);
            this.soundID_qifei = null;
          }
        };
        _proto.numberFormat = function numberFormat(num, digits) {
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
        return F35Utils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/uiAutoSet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './F35Model.ts', './F35Def.ts', './ViewManager.ts', './EventManager.ts', './uiScrollView_num.ts', './F35Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, F35Model, eEvent, ViewManager, EventManager, uiScrollView_num, F35Utils;
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
      Component = module.Component;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      uiScrollView_num = module.default;
    }, function (module) {
      F35Utils = module.F35Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "5e5f4SqfdVN9L0toyISBT6w", "uiAutoSet", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var uiAutoSet = exports('default', (_dec = ccclass("UiAutoSet"), _dec2 = menu("game/F35Game/uiAutoSet"), _dec3 = property(Label), _dec4 = property(uiScrollView_num), _dec5 = property(uiScrollView_num), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uiAutoSet, _Component);
        function uiAutoSet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_rate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiScrollView_num_0", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiScrollView_num_1", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = uiAutoSet.prototype;
        //    // onLoad() {}
        _proto.onEnable = function onEnable() {
          this.schedule(this.updateRate, 0.05);
        };
        _proto.onDisable = function onDisable() {
          this.unschedule(this.updateRate);
        };
        _proto.start = function start() {};
        _proto.updateRate = function updateRate() {
          var curRate = this.uiScrollView_num_0.getCurRate() + this.uiScrollView_num_1.getCurRate();
          this.Label_rate.string = F35Utils.instance.numberFormat(curRate, 2) + "X";
        };
        _proto.onBtnClick_reset = function onBtnClick_reset(event) {
          this.uiScrollView_num_0.doReset();
          this.uiScrollView_num_1.doReset();
        };
        _proto.onBtnClick_ok = function onBtnClick_ok(event) {
          F35Model.instance.autoRate = parseFloat(this.Label_rate.string);
          F35Model.instance.autoRate = F35Model.instance.autoRate > 1.0 ? F35Model.instance.autoRate : 1.01;
          EventManager.instance.emit(eEvent.autoSetUpdateRate);
          ViewManager.instance.closePopView();
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return uiAutoSet;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_rate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiScrollView_num_0", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uiScrollView_num_1", [_dec5], {
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

System.register("chunks:///_virtual/uiBetView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './DataManager.ts', './F35Ctrl.ts', './F35Model.ts', './F35Def.ts', './GameDef.ts', './F35Utils.ts', './ViewManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createClass, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Node, Toggle, Label, Button, tween, v3, find, instantiate, i18n, DataManager, UserKey, F35Ctrl, F35Model, eBetStatus, eEvent, CBetBase, eGameStatus, eProto, eSound, GameDef, F35Utils, ViewManager, EventManager, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Node = module.Node;
      Toggle = module.Toggle;
      Label = module.Label;
      Button = module.Button;
      tween = module.tween;
      v3 = module.v3;
      find = module.find;
      instantiate = module.instantiate;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      F35Ctrl = module.F35Ctrl;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      eBetStatus = module.eBetStatus;
      eEvent = module.eEvent;
      CBetBase = module.CBetBase;
      eGameStatus = module.eGameStatus;
      eProto = module.eProto;
      eSound = module.eSound;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      F35Utils = module.F35Utils;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "967051h1ChMPp9USwGBmDaf", "uiBetView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      // // const maxBet = 50000000;
      // // const cBaseScore = [
      // //     [1000,2000,5000,1]
      // // ]
      var uiBetView = exports('default', (_dec = ccclass("UiBetView"), _dec2 = menu("game/F35Game/uiBetView"), _dec3 = property(sp.Skeleton), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Toggle), _dec7 = property(Toggle), _dec8 = property(Toggle), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(uiBetView, _GameDef$BaseView);
        function uiBetView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          //    /////////
          _initializerDefineProperty(_this, "spine_bet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_auto", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_baseList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggle_auto", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Toggle_autoCuoc", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Toggle_autoDung", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalBet", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoSet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWin", _descriptor9, _assertThisInitialized(_this));
          //    // onLoad () {}
          //    ///////////
          _this._curDisScore = 0;
          _this._curBet = 0;
          _this._reBet = 0;
          _this._curGameNo = "";
          _this._betStatus = eBetStatus.NONE;
          return _this;
        }
        var _proto = uiBetView.prototype;
        _proto.checkGold = function checkGold() {
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._curBet) {
            //            //余额不足-检测最低
            var _curBet = gold > this._curDisScore ? Math.floor(gold / this._curDisScore) * this._curDisScore : 0;
            if (_curBet == 0 && this._curDisScore > 1000) {
              _curBet = gold > 1000 ? Math.floor(gold / 1000) * 1000 : 0;
            }
            this._curBet = _curBet;
          }
          if (this._curBet == 0) {
            //            //禁用下注和自动下注
            if (this._betStatus == eBetStatus.NONE || this._betStatus == eBetStatus.STOP) {
              this._betStatus = eBetStatus.NONE;
              this.spine_bet.setAnimation(0, "bet", false);
              this.spine_bet.node.parent.getComponent(Button).interactable = false;
              this.setBtnBetGray(true);
            }
            this.Toggle_autoCuoc.isChecked = false;
            F35Model.instance.isAutoBet = false;
            Common.showTip(i18n.errTip(30003));
          }
          this.Label_totalBet.string = Common.numFormat(this._curBet);
          tween(this.Label_totalBet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
          return this._curBet != 0;
        };
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, F35Ctrl.instance);
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          _GameDef$BaseView.prototype.onEnable.call(this);
          EventManager.instance.on(eEvent.autoSetUpdateRate, function () {
            _this2.Label_autoSet.string = F35Utils.instance.numberFormat(F35Model.instance.autoRate, 2) + "X";
            if (F35Model.instance.isAutoDown) {
              F35Ctrl.instance.reqAutoStop(F35Model.instance.autoRate);
              var myInfo = F35Model.instance.getMyInfo();
              if (_this2._betStatus == eBetStatus.BETED && myInfo && F35Model.instance.curRate >= F35Model.instance.autoRate) {
                F35Ctrl.instance.reqStop();
              }
            }
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          EventManager.instance.off(eEvent.autoSetUpdateRate, this);
        };
        _proto.start = function start() {
          var tableInfo = F35Model.instance.getTableInfo();
          this._curDisScore = tableInfo.BetCoinConf.MinCoin;
          this._curBet = tableInfo.BetCoinConf.MinCoin;
          this.checkGold();

          //        // let disCoin = (tableInfo.BetCoinConf.MaxCoin - tableInfo.BetCoinConf.MinCoin) / 5;
          var cBetBase = CBetBase[F35Model.instance.tableIndex];
          var baseList = this.Node_baseList.children;
          for (var i = 0; i < 6; i++) {
            var Label_bet = find("Background/Label_bet", baseList[i]);
            Label_bet.getComponent(Label).string = Common.ChangeMoneyShow(cBetBase[i], 2);
          }
          this.Label_autoSet.string = F35Utils.instance.numberFormat(F35Model.instance.autoRate, 2) + "X";
        }
        //    // update (dt) {}
        //    /////////////
        ;

        _proto.updateTotalWin = function updateTotalWin() {
          var myInfo = F35Model.instance.getMyInfo();
          if (this._betStatus == eBetStatus.BETED && myInfo) {
            var _rate = F35Model.instance.curRate;

            //            //更新 当前的win
            this.Label_totalWin.string = Common.numFormat(F35Utils.instance.FxF(myInfo.BetAmount, _rate));
          } else if (this.Label_totalWin.node.active) {
            this.Label_totalWin.node.active = false;
          }
        };
        _proto.initView = function initView() {
          switch (F35Model.instance.gameState.State) {
            case eGameStatus.Ready:
              {
                this.doPreBet(this.Toggle_autoCuoc.isChecked);
                break;
              }
            case eGameStatus.Start:
              {
                var myInfo = F35Model.instance.getMyInfo();
                if (myInfo && myInfo.BetAmount > 0) {
                  this.spine_bet.node.parent.getComponent(Button).interactable = true;
                  if (!myInfo.Stop) {
                    this._betStatus = eBetStatus.BETED;

                    //                        //如果有下注则切换按钮到开始状态
                    this.setBtnBetGray(false);
                    this.setBtnEnable(false);
                    this.spine_bet.setAnimation(0, "dung", true);

                    //                        //更新 当前的win
                    this.Label_totalWin.node.active = true;
                    this.Label_totalWin.string = Common.numFormat(F35Utils.instance.FxF(myInfo.BetAmount, F35Model.instance.curRate));
                  } else {
                    this._betStatus = eBetStatus.STOP;
                    this.Label_totalWin.node.active = false;
                    this.doPreBet(F35Model.instance.isAutoBet);
                  }
                }
                break;
              }
            case eGameStatus.Checkout:
              {
                var _myInfo = F35Model.instance.getMyInfo();
                if (_myInfo && _myInfo.BetAmount > 0) {
                  this._betStatus = eBetStatus.BETED;
                  this.spine_bet.node.parent.getComponent(Button).interactable = true; //!F35Model.instance.isAutoDown;

                  this.Label_totalWin.node.active = false;
                  this.doPreBet(F35Model.instance.isAutoBet);
                }
                break;
              }
          }

          //        //设置自动下车
          if (F35Model.instance.isAutoDown) {
            this.toggle_auto.isChecked = true;
            this.Node_auto.active = true;
            this.Toggle_autoDung.isChecked = true;
            this.Label_autoSet.string = F35Utils.instance.numberFormat(F35Model.instance.autoRate, 2) + "X";
            if (this._betStatus == eBetStatus.BETED) {
              this.spine_bet.node.parent.getComponent(Button).interactable = true; //false;
            }
          }
        };

        _proto.updateView = function updateView(event, data) {
          var _this3 = this;
          switch (event) {
            case eProto.HD_Enter:
              {
                this.initView();
                break;
              }
            case eProto.HD_AutoStop:
              {
                F35Model.instance.isAutoDown = true;
                if (this._betStatus == eBetStatus.BETED) {
                  this.spine_bet.node.parent.getComponent(Button).interactable = true; //false;
                }

                break;
              }
            case eProto.HD_CancelAutoStop:
              {
                F35Model.instance.isAutoDown = false;
                break;
              }
            case eProto.HD_UpdateOddNum:
              {
                this.updateTotalWin();
                break;
              }
            case eProto.HD_BroadcastBet:
              {
                gts.Debug.Log("====updateView==HD_BroadcastBet==");
                break;
              }
            case eProto.HD_Bet:
              {
                gts.Debug.Log("====updateView==HD_Bet==");
                F35Utils.instance.playSound(eSound.touzhu);
                this._betStatus = eBetStatus.BETED;
                this._reBet = 0;

                //                //置灰，下注按钮禁用
                this.setBtnEnable(false);
                this.setBtnBetGray(true);
                this.spine_bet.node.parent.getComponent(Button).interactable = false;
                break;
              }
            case eProto.HD_Stop:
              {
                //                //切换下注按钮的状态  下车
                if (F35Model.instance.isMySelf(data.Uid)) {
                  F35Utils.instance.playSound(eSound.jieguo);
                  this._betStatus = eBetStatus.STOP;
                  this.scheduleOnce(function () {
                    if (_this3.checkGold()) {
                      _this3.Label_totalWin.node.active = false;
                      _this3.setBtnBetGray(false);
                      _this3.spine_bet.node.parent.getComponent(Button).interactable = true;
                      _this3.doPreBet(F35Model.instance.isAutoBet);
                    }
                  }, 0.25);
                }
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                if (this._curGameNo != F35Model.instance.gameState.GameNo) {
                  this._curGameNo = F35Model.instance.gameState.GameNo;
                }
                switch (F35Model.instance.gameState.State) {
                  case eGameStatus.Start:
                    {
                      gts.Debug.Log("====updateView==HD_SwitchRoomState=eGameStatus.Start=");
                      this.setBtnBetGray(false);
                      this.spine_bet.node.parent.getComponent(Button).interactable = true;
                      this.Toggle_autoCuoc.interactable = true;
                      if (this._betStatus == eBetStatus.BETED) {
                        //                            //如果有下注则切换按钮到开始状态
                        //                            // this.setBtnBetGray(false);
                        //                            // this.spine_bet.node.parent.getComponent(cc.Button).interactable = true; //!F35Model.instance.isAutoDown;

                        if (this.spine_bet.animation != "start") {
                          this.spine_bet.setAnimation(0, "start", false);
                          this.spine_bet.addAnimation(0, "dung", true);
                          this.scheduleOnce(function () {
                            _this3.Label_totalWin.node.active = true;
                            _this3.Label_totalWin.string = "0.00";
                          }, 0.4);
                        }
                      }
                      break;
                    }
                  case eGameStatus.Checkout:
                    {
                      if (this._betStatus == eBetStatus.BETED) {
                        this.spine_bet.node.parent.getComponent(Button).interactable = !F35Model.instance.isAutoBet;
                        this.scheduleOnce(function () {
                          _this3.Label_totalWin.node.active = false;
                          _this3.setBtnBetGray(false);
                          _this3.doPreBet(F35Model.instance.isAutoBet);
                          _this3.checkGold();
                        }, 0.5);
                      }
                      break;
                    }
                }
                break;
              }
          }
        }
        //    //////////
        ;

        _proto.setReadyEnd = function setReadyEnd() {
          var parentNode = this.spine_bet.node.parent.getComponent(Button);
          // this.spine_bet.setMaterial(parentNode.grayMaterial, 0);
          this.setBtnBetGray(true);
          this.spine_bet.node.parent.getComponent(Button).interactable = false;
          this.Toggle_autoCuoc.interactable = false;
        };
        _proto.setBtnBetGray = function setBtnBetGray(isGray) {
          // let parentNode = this.spine_bet.node.parent.getComponent(cc.Button);
          // isGray ? this.spine_bet.setMaterial(parentNode.grayMaterial, 0) : this.spine_bet.setMaterial(parentNode.normalMaterial, 0);

          Common.changeRenderGray(this.spine_bet.node, isGray);
        };
        _proto.setBtnEnable = function setBtnEnable(isEnable) {
          if (isEnable === void 0) {
            isEnable = true;
          }
          //        //Node_betBase
          var btn = find("Node_betBase/Button_add", this.node).getComponent(Button);
          Common.setButtonEnableWithGray(btn, isEnable);
          btn = find("Node_betBase/Button_reduce", this.node).getComponent(Button);
          Common.setButtonEnableWithGray(btn, isEnable);
          for (var i = 0; i < 6; i++) {
            btn = find("Node_baseList/Button_base_" + i, this.node).getComponent(Button);
            Common.setButtonEnableWithGray(btn, isEnable);
          }
        };
        _proto.doReqBet = function doReqBet() {
          if (this._betStatus == eBetStatus.BETING && this._reBet > 0) {
            F35Ctrl.instance.reqBet(this._reBet);
            gts.Debug.Log("====F35Ctrl.instance.reqBet====");
          }
        };
        _proto.doBet = function doBet() {
          if (this._betStatus == eBetStatus.REBET) {
            this._betStatus = eBetStatus.BETING;
            this.doReqBet();
          }
        };
        _proto.doPreBet = function doPreBet(isPreBet) {
          if (isPreBet === void 0) {
            isPreBet = true;
          }
          if (!F35Model.instance.gameState) {
            return;
          }
          if (isPreBet) {
            this._reBet = this.curBet;
            if (this._reBet == 0) {
              return;
            }
            this.setBtnEnable(false);
            this.spine_bet.setAnimation(0, "cancel", true);
            this._betStatus = eBetStatus.REBET;
            this.setBtnBetGray(false);
            this.spine_bet.node.parent.getComponent(Button).interactable = !F35Model.instance.isAutoBet;
          } else {
            this._reBet = 0;
            this._betStatus = eBetStatus.NONE;
            if (this.checkGold()) {
              this.setBtnEnable(true);
              this.spine_bet.setAnimation(0, "bet", true);
              this.spine_bet.node.parent.getComponent(Button).interactable = true;
            }
            F35Utils.instance.playOneShot(eSound.dainji);
          }
        }
        //    //////////{}
        ;

        _proto.onBtnClick_autoSet = function onBtnClick_autoSet(event) {
          var node = event.target;
          Common.loadPopBuddle("prefab/Node_autoSet", F35Utils.instance.bundle, function () {}, function (autoSet) {
            var autoSetLayer = instantiate(autoSet);
            ViewManager.instance.popNodeView(autoSetLayer, true);
          }, true);
        };
        _proto.onBetTypeClick = function onBetTypeClick(toggle) {
          var node = toggle.node;
          this.Node_auto.active = node.name == "toggle_auto" ? true : false;
          gts.Debug.Log("====onBtnClick====" + node.name);
        }
        //    //自动下注
        ;

        _proto.onToggle_autoCuoc = function onToggle_autoCuoc(toggle) {
          if (F35Model.instance.gameState.State == eGameStatus.ReadyEnd) {
            F35Model.instance.isAutoBet = toggle.isChecked;
            return;
          }
          if (this.checkGold()) {
            F35Model.instance.isAutoBet = toggle.isChecked;

            //            ///
            switch (this._betStatus) {
              case eBetStatus.NONE:
                {
                  if (toggle.isChecked) {
                    this.doPreBet(true);
                  }
                  break;
                }
              case eBetStatus.BETING:
                {
                  if (F35Model.instance.gameState.State == eGameStatus.Ready || F35Model.instance.gameState.State == eGameStatus.ReadyEnd) {
                    break;
                  }
                }
              case eBetStatus.REBET:
                {
                  if (!toggle.isChecked) {
                    this.doPreBet(false);
                  }
                  this.spine_bet.node.parent.getComponent(Button).interactable = !toggle.isChecked;
                  break;
                }
            }
            //            ///
          } else {
            Common.showTip(i18n.errTip(30003));
          }
        }
        //    //自动下车
        ;

        _proto.onToggle_autoDung = function onToggle_autoDung(toggle) {
          var node = toggle.node;
          if (toggle.isChecked) {
            F35Ctrl.instance.reqAutoStop(F35Model.instance.autoRate);
          } else {
            F35Ctrl.instance.reqCancelAutoStop();
          }
          gts.Debug.Log("====onBtnClick====" + node.name);
        };
        _proto.onBtnClick_bet = function onBtnClick_bet(event) {
          var node = event.target;
          if (F35Model.instance.gameState.State == eGameStatus.ReadyEnd) {
            return;
          }
          switch (this._betStatus) {
            case eBetStatus.NONE:
              {
                //                //预下注
                if (this.curBet > 0) {
                  this.doPreBet(true);
                }
                break;
              }
            case eBetStatus.REBET:
              {
                //                //取消预下注
                this.doPreBet(false);
                break;
              }
            case eBetStatus.BETED:
              {
                //                //下车
                F35Ctrl.instance.reqStop();
                break;
              }
          }
          F35Utils.instance.playOneShot(eSound.dainji);
          gts.Debug.Log("====onBtnClick====" + node.name);
        };
        _proto.onBtnClick_add = function onBtnClick_add(event) {
          var node = event.target;
          this._curBet += this._curDisScore;
          var tableInfo = F35Model.instance.getTableInfo();
          var maxBet = tableInfo.BetCoinConf.MaxCoin;
          //        //最大下注金额
          if (this._curBet > maxBet) {
            this._curBet = maxBet;
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._curBet) {
            //            //余额不足-检测最低
            this._curBet = gold > this._curDisScore ? Math.floor(gold / this._curDisScore) * this._curDisScore : 0;
            if (this._curBet == 0) {
              //                //禁用下注和自动下注
              this._betStatus = eBetStatus.NONE;
              this.spine_bet.setAnimation(0, "bet", false);
              this.spine_bet.node.parent.getComponent(Button).interactable = false;
              this.setBtnBetGray(true);
              this.Toggle_autoCuoc.isChecked = false;
              F35Model.instance.isAutoBet = false;
            }
          }
          this.Label_totalBet.string = Common.numFormat(this._curBet);
          tween(this.Label_totalBet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
          F35Utils.instance.playOneShot(eSound.dainji);
          gts.Debug.Log("====onBtnClick====" + node.name);
        };
        _proto.onBtnClick_reduce = function onBtnClick_reduce(event) {
          var node = event.target;
          this._curBet -= this._curDisScore;
          if (this._curBet < this._curDisScore) {
            this._curBet = this._curDisScore;
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._curBet) {
            //            //余额不足-检测最低
            this._curBet = gold > this._curDisScore ? Math.floor(gold / this._curDisScore) * this._curDisScore : 0;
            if (this._curBet == 0) {
              //                //禁用下注和自动下注
              this._betStatus = eBetStatus.NONE;
              this.spine_bet.setAnimation(0, "bet", false);
              this.spine_bet.node.parent.getComponent(Button).interactable = false;
              this.setBtnBetGray(true);
              this.Toggle_autoCuoc.isChecked = false;
              F35Model.instance.isAutoBet = false;
            }
          }
          this.Label_totalBet.string = Common.numFormat(this._curBet);
          tween(this.Label_totalBet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
          F35Utils.instance.playOneShot(eSound.dainji);
          gts.Debug.Log("====onBtnClick====" + node.name);
        };
        _proto.onBtnClick_baseScore = function onBtnClick_baseScore(event) {
          var node = event.target;

          //        // let baseScore = [10000, 50000, 100000, 500000, 1000000, 5000000];
          //        // let disScore = [10, 5, 10, 5, 10, 5];
          var index = parseInt(node.name.replace("Button_base_", ""));
          var cBetBase = CBetBase[F35Model.instance.tableIndex];
          this._curBet = cBetBase[index];
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._curBet) {
            //            //余额不足-检测最低
            this._curBet = gold > this._curDisScore ? Math.floor(gold / this._curDisScore) * this._curDisScore : 0;
            if (this._curBet == 0) {
              //                //禁用下注和自动下注
              this._betStatus = eBetStatus.NONE;
              this.spine_bet.setAnimation(0, "bet", false);
              this.spine_bet.node.parent.getComponent(Button).interactable = false;
              this.setBtnBetGray(true);
              this.Toggle_autoCuoc.isChecked = false;
              F35Model.instance.isAutoBet = false;
            }
          }
          this.Label_totalBet.string = Common.numFormat(this._curBet);
          tween(this.Label_totalBet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
          F35Utils.instance.playOneShot(eSound.dainji);
          gts.Debug.Log("====onBtnClick====" + node.name);
        };
        _createClass(uiBetView, [{
          key: "curBet",
          get: function get() {
            this.checkGold();
            return this._curBet;
          },
          set: function set(bet) {
            this._curBet = bet;
            this.checkGold();
            this.Label_totalBet.string = Common.numFormat(this._curBet);
            tween(this.Label_totalBet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
          }
        }]);
        return uiBetView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine_bet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_auto", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_baseList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toggle_auto", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Toggle_autoCuoc", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Toggle_autoDung", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalBet", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoSet", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWin", [_dec11], {
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

System.register("chunks:///_virtual/uiBonus.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './F35Ctrl.ts', './F35Model.ts', './F35Def.ts', './GameDef.ts', './ViewManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, tween, UIOpacity, F35Ctrl, F35Model, eEvent, eProto, GameDef, ViewManager, EventManager, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      F35Ctrl = module.F35Ctrl;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      eEvent = module.eEvent;
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "7e95a8cCxJCTZDM1mXmtr1F", "uiBonus", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var pageSize = 9;
      // // @inspector("packages://autoproperty/inspector.js")
      var uiBonus = exports('default', (_dec = ccclass("UiBonus"), _dec2 = menu("game/F35Game/uiBonus"), _dec3 = property(gts.List), _dec4 = property(gts.List), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(uiBonus, _GameDef$BaseView);
        function uiBonus() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ScrollView_bonus", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_rank", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_last", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_next", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bonusList", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rank", _descriptor6, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._totalPage = 0;
          _this._lastPage = 1;
          return _this;
        }
        var _proto = uiBonus.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, F35Ctrl.instance);
          F35Ctrl.instance.reqJackpotRecord();
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);
          EventManager.instance.on(eEvent.openBonusDetail, this.doOpenDetail, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          EventManager.instance.off(eEvent.openBonusDetail, this.doOpenDetail, this);
        };
        _proto.onBefore = function onBefore() {
          this._lastPage = this._curPage;

          //        //上一页
          this._lastPage--;
          if (this._lastPage < 1) {
            this._lastPage = 1;
          }
          F35Ctrl.instance.reqJackpotRecord(this._lastPage);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;

          //        //上一页
          this._lastPage++;
          if (this._lastPage > this._totalPage) {
            this._lastPage = this._totalPage;
          }
          F35Ctrl.instance.reqJackpotRecord(this._lastPage);
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_GetJackpotRecord:
              {
                Common.closeWait();
                this._curPage = this._lastPage;
                this._totalPage = Math.ceil(F35Model.instance.JackpotRecord.Total / pageSize);
                this.ScrollView_bonus.setData(F35Model.instance.JackpotRecord.Records);
                this.ScrollView_bonus.refresh();
                this.Button_last.active = this._curPage > 1;
                this.Button_next.active = this._totalPage > this._curPage;
                break;
              }
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          var _this2 = this;
          if (this.Node_rank.active) {
            tween(this.Node_rank.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: 0
            }).call(function () {
              _this2.Node_rank.active = false;
            }).start();
            this.Node_bonusList.active = true;
            tween(this.Node_bonusList.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: 255
            }).start();
          } else if (this.Node_bonusList.active) {
            ViewManager.instance.closePopView();
          }
        };
        _proto.doOpenDetail = function doOpenDetail(iIndex) {
          var _this3 = this;
          var recordInfo = F35Model.instance.JackpotRecord.Records[iIndex];
          if (recordInfo.UserRewards.length == 0) {
            return;
          }
          this.Node_rank.active = true;
          this.Node_rank.getComponent(UIOpacity).opacity = 0;
          tween(this.Node_rank.getComponent(UIOpacity)).stop().to(0.2, {
            opacity: 255
          }).start();
          this.ScrollView_rank.setData(recordInfo.UserRewards);
          this.ScrollView_rank.refresh();
          tween(this.Node_bonusList.getComponent(UIOpacity)).stop().to(0.2, {
            opacity: 0
          }).call(function () {
            _this3.Node_bonusList.active = false;
          }).start();
        };
        return uiBonus;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_bonus", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_rank", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_last", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Button_next", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_bonusList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_rank", [_dec8], {
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

System.register("chunks:///_virtual/uiBonusItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './EventManager.ts', './F35Utils.ts', './F35Def.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, Component, AutoChangeParent, EventManager, F35Utils, eEvent, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      F35Utils = module.F35Utils;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "49f6cVOJolLUaWtoAlxr3uT", "uiBonusItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var uiBonusItem = exports('default', (_dec = ccclass("UiBonusItem"), _dec2 = menu("game/F35Game/uiBonusItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uiBonusItem, _Component);
        function uiBonusItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_time", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bonus", _descriptor6, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = uiBonusItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          this.Node_label.active = true;
        };
        _proto.onDisable = function onDisable() {};
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
          var tmpdata = this.item.data;
          if (!tmpdata || tmpdata === undefined) {
            this.node.active = false;
            this.Node_label.active = false;
            return;
          }
          this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
          var date = Common.getTimeFormat(tmpdata.CreateAt);
          this.Label_time.string = date.date + " " + date.time;
          tmpdata.OddNum = Math.round(tmpdata.OddNum * 1000) / 1000;
          this.Label_rate.string = F35Utils.instance.numberFormat(tmpdata.OddNum, 2) + "X";
          this.Label_bonus.string = Common.numFormat(tmpdata.PoolVal);
          this.node.getChildByName("Button_detail").active = tmpdata.UserRewards.length > 0;
        };
        _proto.onBtnClick = function onBtnClick(event) {
          EventManager.instance.emit(eEvent.openBonusDetail, this.item.itemIndex);
        };
        _createClass(uiBonusItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return uiBonusItem;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_time", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_bonus", [_dec8], {
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

System.register("chunks:///_virtual/uiBonusRankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, Component, AutoChangeParent, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "5d912KD/btC4bmhGz4BB/tg", "uiBonusRankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var uiBonusRankItem = exports('default', (_dec = ccclass("UiBonusRankItem"), _dec2 = menu("game/F35Game/uiBonusRankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uiBonusRankItem, _Component);
        function uiBonusRankItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rank", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_nickName", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bonus", _descriptor5, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = uiBonusRankItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          this.Node_label.active = true;
        };
        _proto.onDisable = function onDisable() {};
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
          var tmpdata = this.item.data;
          if (!tmpdata || tmpdata === undefined) {
            this.node.active = false;
            return;
          }
          this.Label_rank.string = "" + (this.item.itemIndex + 1);
          this.Label_nickName.string = tmpdata.NickName;
          this.Label_bonus.string = Common.numFormat(tmpdata.RewardVal);
        };
        _createClass(uiBonusRankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return uiBonusRankItem;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_rank", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_nickName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_bonus", [_dec7], {
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

System.register("chunks:///_virtual/uiChat.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './DataManager.ts', './BlackWordProxy.ts', './ChatProxy.ts', './EventManager.ts', './ConfigManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, RichText, Widget, ScrollView, Prefab, Node, UITransform, tween, instantiate, Component, Sprite, director, find, Button, v3, UIOpacity, assetManager, SpriteFrame, isValid, i18n, ProxyMgr, DataManager, UserKey, BlackWordProxy, ChatProxy, ChatProxyEvent, EventManager, ConfigManager, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      RichText = module.RichText;
      Widget = module.Widget;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      Node = module.Node;
      UITransform = module.UITransform;
      tween = module.tween;
      instantiate = module.instantiate;
      Component = module.Component;
      Sprite = module.Sprite;
      director = module.director;
      find = module.find;
      Button = module.Button;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      isValid = module.isValid;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      ChatProxy = module.default;
      ChatProxyEvent = module.ChatProxyEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "549f3uNIqRF7YLj4zPqdNKf", "uiChat", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var uiChat = exports('default', (_dec = ccclass("UiChat"), _dec2 = menu("game/F35Game/uiChat"), _dec3 = property(EditBox), _dec4 = property(RichText), _dec5 = property(Widget), _dec6 = property(ScrollView), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uiChat, _Component);
        function uiChat() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "EditBox_msg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemChat", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_scale", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_chatList", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_chatContent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "NodePop", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_topMsg", _descriptor7, _assertThisInitialized(_this));
          _this._chatData = null;
          return _this;
        }
        var _proto = uiChat.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          ChatProxy.joinChat("f35");
          ChatProxy.getRecord("f35");
          ChatProxy.on(ChatProxyEvent.UPDATE_RECORD, function (data) {
            if (data.msg.GroupId != "f35") {
              return;
            }
            if (data.msgList != null) {
              _this2._chatData = data.msgList;
              if (_this2._chatData.length > 0) {
                _this2.initChatMsg();
              }
            }
            if (data.topMsg != null) {
              _this2.addChatMsg(data.topMsg);
            } else {
              _this2.Node_topMsg.active = false;
            }
          }, this);
          ChatProxy.on(ChatProxyEvent.RECV_MSG, function (data) {
            if (data.msg.GroupId != "f35") {
              return;
            }
            _this2.addChatMsg(data.msg);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          ChatProxy.exitChat("f35");
          ProxyMgr.close(this);
        };
        _proto.onBtnClick_send = function onBtnClick_send() {
          var _this3 = this;
          this.sendChatContent();
          this.scheduleOnce(function () {
            _this3.EditBox_msg.focus();
          }, 0.1);
        };
        _proto.onBtnClick_scale = function onBtnClick_scale() {
          var _this4 = this;
          this.Button_scale.top = 19;
          //        // this.Button_scale.updateAlignment();
          if (this.node.getComponent(UITransform).height != 216) {
            tween(this.node.getComponent(UITransform)).to(0.25, {
              height: 216
            }).call(function () {
              _this4.Button_scale.node.setScale(_this4.Button_scale.node.scale.x, 1, 1);
              _this4.doAllion();
            }).start();
          } else {
            tween(this.node.getComponent(UITransform)).to(0.25, {
              height: 216 + 370
            }).call(function () {
              _this4.Button_scale.node.setScale(_this4.Button_scale.node.scale.x, -1, 1);
              _this4.doAllion();
            }).start();
          }
        };
        _proto.editingDidEnded = function editingDidEnded(event, customData) {
          this.checkChatContent();
        };
        _proto.checkChatContent = function checkChatContent() {
          var chatContent = Common.formatInputContent(this.EditBox_msg.string);
          if (chatContent.length == 0) {
            this.EditBox_msg.string = "";
            return false;
          }
          this.EditBox_msg.string = chatContent;
          var code = Common.judgeInputContent(chatContent);
          var userMoney = parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          if (code != 0) {
            var str = "";
            if (code == -1 || code == 1) {
              str = i18n.lang.chatErr1;
            } else if (code == 2) {
              str = i18n.lang.chatErr2;
            }
            Common.showTip(str);
            this.EditBox_msg.string = "";
            return false;
          }
          return true;
        };
        _proto.sendChatContent = function sendChatContent() {
          if (!this.checkChatContent()) {
            return;
          }
          var date = new Date();
          var msgid = DataManager.instance.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          ChatProxy.sendChat({
            groupId: "f35",
            content: this.EditBox_msg.string,
            msgType: 1,
            msgId: msgid
          });
          this.EditBox_msg.string = "";
        };
        _proto.addChatMsg = function addChatMsg(data) {
          var _this5 = this;
          if (data.GroupId != "f35") {
            return;
          }
          var objContent = Common.getChatContent(data.Content);

          //        //MsgType:0-ROBOT 1:PLAYER 2:MGR 3MGR_TOP
          if (data.MsgType == 3) {
            //            //置顶消息
            this.Node_topMsg.active = true;
            EventManager.instance.emit(ConfigManager.instance.eventTransform.onChatTopMsg + "f35", objContent);
            return;
          }
          if (data.isCancelTop && this.Node_topMsg.active) {
            this.Node_topMsg.active = false;
            return;
          }
          var item = instantiate(this.Node_chatContent);
          item.active = true;
          var rext = item.getChildByName("richText").getComponent(RichText);
          rext.node.active = true;
          var Node_imgRoot = item.getChildByName("Node_imgRoot");
          Node_imgRoot.active = objContent.img != null;
          if (Node_imgRoot.active) {
            var addImg = function addImg(Sprite_img, imgUrl) {
              Sprite_img.active = imgUrl != null;
              if (Sprite_img.active) {
                //                    //添加图片
                Sprite_img.on("click", function (event) {
                  var spriteFrame = event.node.getComponent(Sprite).spriteFrame;
                  var newPop = instantiate(_this5.NodePop);
                  newPop.active = true;
                  director.getScene().getChildByName("Canvas").addChild(newPop);
                  newPop.getComponent(UITransform).priority = 100000;
                  var onPopClose = function onPopClose(popNode) {
                    tween(popNode).to(0.05, {
                      scale: 1.2
                    }).to(0.1, {
                      scale: 0.25,
                      opacity: 25
                    }).call(function () {
                      popNode.destroyFromParent();
                    }).start();
                  };
                  var btnClose = find("Sprite_icon/Button_close", newPop);
                  btnClose.on("click", function () {
                    onPopClose(newPop);
                  }, _this5);
                  var mask = find("mask", newPop);
                  mask.on(Node.EventType.TOUCH_END, function () {
                    onPopClose(newPop);
                  }, _this5);
                  var Sprite_icon = find("Sprite_icon", newPop);
                  Sprite_icon.removeComponent(Button);
                  Sprite_icon.getComponent(Sprite).spriteFrame = spriteFrame;
                  Sprite_icon.scale = v3(0.25, 0.25, 1);
                  Sprite_icon.getComponent(UIOpacity).opacity = 0;
                  var maxH = 650;
                  if (Sprite_icon.getComponent(UITransform).height > maxH) {
                    Sprite_icon.getComponent(UITransform).width = Sprite_icon.getComponent(UITransform).width * maxH / Sprite_icon.getComponent(UITransform).height;
                    Sprite_icon.getComponent(UITransform).height = maxH;
                  }
                  newPop.active = true;
                  var Label_content = find("Sprite_icon/Label_content", newPop);
                  Label_content.active = rext.node.active;
                  if (Label_content.active) {
                    Label_content.getComponent(RichText).string = rext.string;
                  }
                  tween(Sprite_icon).to(0.3, {
                    scale: v3(1.2, 1.2, 1)
                  }).to(0.1, {
                    scale: v3(1, 1, 1)
                  }).start();
                  tween(Sprite_icon.getComponent(UIOpacity)).to(0.3, {
                    opacity: 255
                  }).start();
                }, _this5);
                assetManager.loadRemote(imgUrl, {
                  ext: ".png"
                }, function (err, tex) {
                  if (!err && tex) {
                    var spriteFrame = DataManager.instance.loadRemoteMap[imgUrl];
                    if (!spriteFrame) {
                      DataManager.instance.loadRemoteMap[imgUrl] = SpriteFrame.createWithImage(tex);
                      spriteFrame = DataManager.instance.loadRemoteMap[imgUrl];
                    }
                    // spriteFrame.texture = tex;
                    if (Sprite_img && isValid(Sprite_img)) {
                      Sprite_img.getComponent(Sprite).spriteFrame = spriteFrame;
                    }
                  }
                });
              }
            };
            var Sprite_imgTemp = Node_imgRoot.getChildByName("Sprite_img_0");
            for (var i = 0; i < objContent.img.length; i++) {
              var Sprite_img = Node_imgRoot.getChildByName("Sprite_img_" + i);
              if (!Sprite_img) {
                Sprite_img = instantiate(Sprite_imgTemp);
                Sprite_img.name = "Sprite_img_" + i;
                Node_imgRoot.addChild(Sprite_img);
              }
              Sprite_img.active = true;
              addImg(Sprite_img, objContent.img[i]);
            }
            if (Node_imgRoot.children.length > objContent.img.length) {
              for (var _i = objContent.img.length; _i < Node_imgRoot.children.length; _i++) {
                Node_imgRoot.children[_i].destroyFromParent();
              }
            }
          }

          //        //添加文本
          item.getComponent(UITransform).width = 280;
          Node_imgRoot.getComponent(UITransform).width = 340;
          rext.maxWidth = 280;
          data.Content = objContent.text ? BlackWordProxy.filter(objContent.text.toString()) : "";
          if (typeof data.Err != "undefined" && data.Err == true) {
            rext.string = "<color=#ff0000>" + data.Content + "</color>";
          } else {
            var _myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
            var strColor = data.FromUserId == _myUid ? "#8fff44" : "#ff6500";
            var imgTag = "<img src=\"icon_V" + data.GradeCode + "\"/>";
            //            // let imgTag = ``;
            if (data.MsgType > 1) {
              strColor = "#00ff00";
              imgTag = "<img src=\"icon_guanliyuan\"/>";
            }
            rext.string = imgTag + " <color=" + strColor + ">" + data.FromUser + ":</c><color=#ffffff>" + data.Content + "</color>";
          }
          this.ScrollView_chatList.content.addChild(item);
          this.doAllion();
        };
        _proto.initChatMsg = function initChatMsg() {
          this.ScrollView_chatList.content.removeAllChildren();
          for (var i = this._chatData.length - 1; i >= 0; i--) {
            var data = this._chatData[i];
            if (data.MsgType == 3) {
              continue;
            }
            this.addChatMsg(data);
          }
          this.scheduleOnce(this.doAllion, 0.1);
        };
        _proto.doAllion = function doAllion() {
          if (this.node.getComponent(UITransform).height <= 300 && this.ScrollView_chatList.content.getComponent(UITransform).height > 130 || this.node.getComponent(UITransform).height > 300 && this.ScrollView_chatList.content.getComponent(UITransform).height > 490) {
            this.ScrollView_chatList.scrollToBottom();
          }
        };
        return uiChat;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "EditBox_msg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemChat", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_scale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_chatList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_chatContent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "NodePop", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_topMsg", [_dec9], {
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

System.register("chunks:///_virtual/uiGameInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './F35Model.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Component, F35Model, Common;
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
      Component = module.Component;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b3135QUFixK5IheiQDHEMQl", "uiGameInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var uiGameInfo = exports('default', (_dec = ccclass("UiGameInfo"), _dec2 = menu("game/F35Game/uiGameInfo"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uiGameInfo, _Component);
        function uiGameInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalBet", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curNum", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_playerList", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = uiGameInfo.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.updateInfo = function updateInfo() {
          this.Label_gameNo.string = "#" + F35Model.instance.gameState.GameNo;
          this.Label_totalBet.string = Common.numFormat(F35Model.instance.gameState.TotalBetAmount);
        };
        _proto.updatePlayerList = function updatePlayerList() {
          var PlayerInfos = F35Model.instance.gameState.PlayerInfos || [];
          var stopNum = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(PlayerInfos), _step; !(_step = _iterator()).done;) {
            var info = _step.value;
            stopNum = info.Stop ? stopNum + 1 : stopNum;
          }
          this.Label_curNum.string = "" + stopNum;
          this.Label_totalNum.string = "" + PlayerInfos.length;
          PlayerInfos = PlayerInfos.sort(function (a, b) {
            return b.BetAmount - a.BetAmount;
          });
          this.ScrollView_playerList.setData(PlayerInfos);
          this.ScrollView_playerList.refresh();
        };
        return uiGameInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalBet", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_curNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalNum", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_playerList", [_dec7], {
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

System.register("chunks:///_virtual/uiHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './F35Ctrl.ts', './F35Model.ts', './uiRecordItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Graphics, UITransform, instantiate, v3, Component, F35Ctrl, F35Model, uiRecordItem;
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
      Graphics = module.Graphics;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      F35Ctrl = module.F35Ctrl;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      uiRecordItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a5fe2GGBCZLyIpbdKcHnh+t", "uiHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var uiHistory = exports('default', (_dec = ccclass("UiHistory"), _dec2 = menu("game/F35Game/uiHistory"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Graphics), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uiHistory, _Component);
        function uiHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_item", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layout_history", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineGraphics", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = uiHistory.prototype;
        _proto.onLoad = function onLoad() {
          F35Ctrl.instance.reqHistory();
        };
        _proto.updateHistory = function updateHistory() {
          var _this2 = this;
          if (!F35Model.instance.history) {
            return;
          }
          var startPos = F35Model.instance.history.length > 50 ? F35Model.instance.history.length - 50 : 0;
          var history = F35Model.instance.history.slice(startPos).reverse();
          //        // gts.Debug.Log("==updateHistory=history=" + JSON.stringify(history));
          var col = 10;
          var startX = this.Node_item.getComponent(UITransform).width / 2.0 + 13;
          var startY = this.Node_item.getComponent(UITransform).height / 2.0;
          var spaceX = this.Node_item.getComponent(UITransform).width - 9;
          var spaceY = this.Node_item.getComponent(UITransform).height;
          this.lineGraphics.clear();
          for (var iIndex = 0; iIndex < history.length; iIndex++) {
            var iRow = Math.floor(iIndex / col);
            var iCol = history.length > col ? iRow % 2 == 0 ? col - iIndex % col - 1 : iIndex % col : history.length - iIndex - 1;
            var itemTemp = this.Layout_history.getChildByName("Node_item" + iIndex);
            if (!itemTemp) {
              itemTemp = instantiate(this.Node_item);
              itemTemp.name = "Node_item" + iIndex;
              this.Layout_history.addChild(itemTemp);
            }
            var pos = v3(startX + iCol * spaceX, -(startY + iRow * spaceY));
            if (iIndex == 0) {
              //                //画三角形
              this.lineGraphics.moveTo(pos.x + 40, pos.y - 10);
              this.lineGraphics.lineTo(pos.x + 40, pos.y + 10);
              this.lineGraphics.lineTo(pos.x + 60, pos.y);
              this.lineGraphics.lineTo(pos.x + 40, pos.y - 10);
              this.lineGraphics.fill();
              this.lineGraphics.moveTo(pos.x + 40, pos.y);
            } else if (iIndex > 1 && ((iIndex + 1) % 10 == 0 || iIndex % 10 == 0)) {
              var disX = pos.x > itemTemp.getComponent(UITransform).width ? 60 : -60;
              this.lineGraphics.lineTo(pos.x + disX, pos.y);
              if (iIndex == history.length - 1) {
                this.lineGraphics.lineTo(pos.x, pos.y);
              }
            } else {
              this.lineGraphics.lineTo(pos.x, pos.y);
            }
            itemTemp.position = pos;
            itemTemp.active = true;
            itemTemp.getComponent(uiRecordItem).doBlink(false);
            itemTemp.getComponent(uiRecordItem).updateInfo(history[iIndex]);
          }
          this.lineGraphics.stroke();
          this.Layout_history.getChildByName("Sprite_bg").getComponent(UITransform).height = Math.ceil(history.length / col) * this.Node_item.getComponent(UITransform).height + 25;
          this.scheduleOnce(function () {
            var lastNode = _this2.Layout_history.getChildByName("Node_item" + 0);
            lastNode.getComponent(uiRecordItem).doBlink();
          }, 1.0);
        };
        return uiHistory;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Layout_history", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lineGraphics", [_dec5], {
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

System.register("chunks:///_virtual/uiPlayerItemInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './F35Model.ts', './F35Utils.ts', './F35Def.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, SpriteFrame, UIOpacity, Sprite, Component, AutoChangeParent, F35Model, F35Utils, eGameStatus, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      F35Utils = module.F35Utils;
    }, function (module) {
      eGameStatus = module.eGameStatus;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "389a0sx13FDdIRVpCAuNmzg", "uiPlayerItemInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var LiengRoomItemInfo = exports('default', (_dec = ccclass("UiPlayerItemInfo"), _dec2 = menu("game/F35Game/uiPlayerItemInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LiengRoomItemInfo, _Component);
        function LiengRoomItemInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_nickName", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateTip", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player_blue", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player_green", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player_red", _descriptor10, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = LiengRoomItemInfo.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
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
          var tmpdata = this.item.data;
          if (!tmpdata || tmpdata === undefined) {
            this.node.active = false;
            this.Node_label.active = false;
            return;
          }
          this.Label_nickName.string = Common.nickNameFormat(tmpdata.Nickname, 6);
          this.Label_bet.string = Common.ChangeMoneyShow(tmpdata.BetAmount, 2);
          this.Label_rate.string = tmpdata.Stop ? tmpdata.StopVal + "X" : "-";
          var winNum = F35Utils.instance.FxF(tmpdata.BetAmount, tmpdata.StopVal);
          this.Label_win.string = tmpdata.Stop ? "" + Common.ChangeMoneyShow(winNum, 2) : "-";
          if (tmpdata.Stop) {
            this.node.getChildByName("Node_rateTip").active = true;
            this.node.getComponent(Sprite).spriteFrame = this.player_green;
          } else {
            this.node.getChildByName("Node_rateTip").active = false;
            switch (F35Model.instance.gameState.State) {
              case eGameStatus.Checkout:
                {
                  this.node.getComponent(Sprite).spriteFrame = this.player_red;
                  break;
                }
              default:
                {
                  this.node.getComponent(Sprite).spriteFrame = this.player_blue;
                  break;
                }
            }
          }
        };
        _createClass(LiengRoomItemInfo, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return LiengRoomItemInfo;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_nickName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateTip", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "player_blue", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "player_green", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "player_red", [_dec12], {
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

System.register("chunks:///_virtual/uiRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './F35Model.ts', './uiRecordItem.ts', './uiHistory.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, UITransform, instantiate, tween, v3, Component, F35Model, uiRecordItem, uiHistory;
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
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      uiRecordItem = module.default;
    }, function (module) {
      uiHistory = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "ab759PriRRBDJrk96Zjm7f+", "uiRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var uiRecord = exports('default', (_dec = ccclass("UiRecord"), _dec2 = menu("game/F35Game/uiRecord"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uiRecord, _Component);
        function uiRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_item", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layout_record", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_history", _descriptor4, _assertThisInitialized(_this));
          _this.Node_history = null;
          _initializerDefineProperty(_this, "prefab_history", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = uiRecord.prototype;
        _proto.onLoad = function onLoad() {
          this.Button_history.getComponent(UITransform).priority = 200;
        };
        _proto.onBtnHistory = function onBtnHistory(toggle) {
          if (!F35Model.instance.history || F35Model.instance.history.length == 0) {
            return;
          }
          if (toggle.isChecked) {
            toggle.node.getChildByName("Background").active = false;
            toggle.target = toggle.node.getChildByName("checkmark");
          } else {
            toggle.node.getChildByName("Background").active = true;
            toggle.target = toggle.node.getChildByName("Background");
          }
          this.Layout_record.active = !this.Layout_record.active;
          this.Node_label.active = this.Layout_record.active;
          if (!this.Node_history) {
            this.Node_history = instantiate(this.prefab_history);
            this.node.parent.addChild(this.Node_history);
          }
          this.Node_history.active = !this.Layout_record.active;
          if (this.Node_history.active) {
            var comuiHistory = this.Node_history.getComponent(uiHistory);
            comuiHistory.updateHistory();
            this.Node_history.setScale(this.Node_history.scale.x, 0, 1);
            tween(this.Node_history).to(0.2, {
              scale: v3(this.Node_history.scale.x, 1, 1)
            }).start();
          } else {
            tween(this.Node_history).to(0.2, {
              scale: v3(this.Node_history.scale.x, 0, 1)
            }).start();
          }
        };
        _proto.updateRecord = function updateRecord() {
          if (!F35Model.instance.history) {
            return;
          }
          var history = null;
          if (F35Model.instance.history.length > 10) {
            history = F35Model.instance.history.slice(F35Model.instance.history.length - 10);
          } else {
            history = F35Model.instance.history;
          }

          //        // gts.Debug.Log("==history==" + JSON.stringify(history));

          for (var i = 0; i < history.length; i++) {
            var itemTemp = this.Layout_record.children[i];
            if (!itemTemp) {
              itemTemp = instantiate(this.Node_item);
              this.Layout_record.addChild(itemTemp);
            }
            itemTemp.active = true;
            itemTemp.getComponent(uiRecordItem).doBlink(false);
            itemTemp.getComponent(uiRecordItem).updateInfo(history[i]);
          }
          var lastNode = this.Layout_record.children[this.Layout_record.children.length - 1];
          if (lastNode) {
            lastNode.getComponent(uiRecordItem).doBlink();
          }
          if (this.Node_history && this.Node_history.active) {
            var comuiHistory = this.Node_history.getComponent(uiHistory);
            comuiHistory.updateHistory();
          }
        };
        return uiRecord;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Layout_record", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_label", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Button_history", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "prefab_history", [_dec7], {
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

System.register("chunks:///_virtual/uiRecordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './F35Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, tween, UIOpacity, Tween, Sprite, Label, Component, F35Utils;
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
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      Sprite = module.Sprite;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      F35Utils = module.F35Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c663d4ZplJGcp1gve6R05xR", "uiRecordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var uiRecordItem = exports('default', (_dec = ccclass("UiRecordItem"), _dec2 = menu("game/F35Game/uiRecordItem"), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uiRecordItem, _Component);
        function uiRecordItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_rate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = uiRecordItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.update = function update(dt) {};
        _proto.doBlink = function doBlink(isBlink) {
          if (isBlink === void 0) {
            isBlink = true;
          }
          if (isBlink) {
            tween(this.node.getComponent(UIOpacity)).blink(1, 1).repeatForever().start();
            tween(this.Label_rate.getComponent(UIOpacity)).blink(1, 1).repeatForever().start();
          } else {
            Tween.stopAllByTarget(this.node.getComponent(UIOpacity));
            Tween.stopAllByTarget(this.Label_rate.getComponent(UIOpacity));
            this.node.getComponent(UIOpacity).opacity = 255;
            this.Label_rate.getComponent(UIOpacity).opacity = 255;
          }
        };
        _proto.updateInfo = function updateInfo(history) {
          var arrIndex = [1.5, 2, 3, 10, 20, 40, 80];
          var index = arrIndex.length;
          for (var i = 0; i < arrIndex.length; i++) {
            if (history < arrIndex[i]) {
              index = i;
              break;
            }
          }
          this.node.getComponent(Sprite).spriteFrame = this.bgFrame[index];
          history = Math.round(history * 1000) / 1000;
          var rate = F35Utils.instance.numberFormat(history, 2);
          this.Label_rate.getComponent(Label).string = rate + "X";
        };
        return uiRecordItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_rate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgFrame", [_dec4], {
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

System.register("chunks:///_virtual/uiRoomItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './F35Model.ts', './F35Def.ts', './EventManager.ts', './I18nLocal.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Node, SpriteFrame, tween, v3, Component, F35Model, eEvent, cBundle, EventManager, I18nLocal, Common;
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
      Sprite = module.Sprite;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      eEvent = module.eEvent;
      cBundle = module.cBundle;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "eee25aepEFEf4b2jLTQ8yI+", "uiRoomItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var uiRoomItem = exports('default', (_dec = ccclass("UiRoomItem"), _dec2 = menu("game/F35Game/uiRoomItem"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uiRoomItem, _Component);
        function uiRoomItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_base", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_pool", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_players", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_poolIcon", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_plane", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "poolIcon", _descriptor6, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _this.tableID = "1";
          return _this;
        }
        var _proto = uiRoomItem.prototype;
        //    // onLoad () {}
        _proto.start = function start() {
          tween(this.Node_plane).repeatForever(tween(this.Node_plane).to(5, {
            position: v3(this.Node_plane.position.x, 90),
            scale: v3(1.03, 1.03, 1)
          }).to(5, {
            position: v3(this.Node_plane.position.x, 65),
            scale: v3(1.0, 1.0, 1)
          })).start();
        };
        _proto.onBtnClick = function onBtnClick() {
          F35Model.instance.curTableID = this.tableID;
          EventManager.instance.emit(eEvent.onLoadGame);
        };
        _proto.updateInfo = function updateInfo(iIndex) {
          var _this2 = this;
          var roomInfo = F35Model.instance.tableList[iIndex];
          this.tableID = roomInfo.TableId;
          var betConf = roomInfo.BetCoinConf;
          this.Label_base.string = Common.ChangeMoneyShow(betConf.MinCoin, 2) + "-" + Common.ChangeMoneyShow(betConf.MaxCoin, 2);
          this.Label_pool.string = Common.numFormat(roomInfo.PoolConf.PoolVal);
          I18nLocal.getLocalRes(cBundle, this.poolIcon[roomInfo.PoolConf.PoolType == 1 ? 1 : 0].name).then(function (sprFrame) {
            _this2.Sprite_poolIcon.getComponent(Sprite).spriteFrame = sprFrame;
          });

          // this.Sprite_poolIcon.spriteFrame = roomInfo.PoolConf.PoolType == 1 ? this.poolIcon[1] : this.poolIcon[0];
          this.Label_players.string = "" + roomInfo.PlayerCount;
        };
        return uiRoomItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_base", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_pool", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_players", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_poolIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_plane", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "poolIcon", [_dec8], {
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

System.register("chunks:///_virtual/uiScrollView_num.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './F35Model.ts', './F35Def.ts', './F35Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, UIRenderer, color, F35Model, eAutoRateType, F35Utils;
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
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
      UITransform = module.UITransform;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      UIRenderer = module.UIRenderer;
      color = module.color;
    }, function (module) {
      F35Model = module.F35Model;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      F35Utils = module.F35Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "588484pA8RD05ouqAVk6sej", "uiScrollView_num", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var uiScrollView_num = exports('default', (_dec = ccclass("UiScrollViewNum"), _dec2 = menu("game/F35Game/uiScrollView_num"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec6 = property(ScrollView), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uiScrollView_num, _Component);
        function uiScrollView_num() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCounts", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_numbers", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_left", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_right", _descriptor6, _assertThisInitialized(_this));
          _this._curIndex = 0;
          _this._maxIndex = 0;
          _this._hTouch = null;
          _this._isLongTouch = false;
          return _this;
        }
        var _proto = uiScrollView_num.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          //        //init
          this._maxIndex = this.itemCounts - 1;
          this._curIndex = 0;
          if (F35Model.instance.autoRate > 0) {
            switch (this.type) {
              case eAutoRateType.integer:
                {
                  if (F35Model.instance.autoRate > 0) {
                    this._curIndex = Math.floor(F35Model.instance.autoRate - 1);
                  }
                  break;
                }
              case eAutoRateType.decimal:
                {
                  var ret = (F35Model.instance.autoRate - Math.floor(F35Model.instance.autoRate)) * 100;
                  this._curIndex = ret;
                  break;
                }
            }
          }
          for (var index = 0; index < this.itemCounts; index++) {
            var curNum = index + 1 + ".";
            if (this.type == eAutoRateType.decimal) {
              var strDecimal = F35Utils.instance.numberFormat(0.01 * index, 2);
              var arrStr = strDecimal.split(".");
              curNum = "." + arrStr[1];
            }
            var item = this.ScrollView_numbers.content.children[index];
            if (!item) {
              item = instantiate(this.item);
              this.ScrollView_numbers.content.addChild(item);
            }
            item.active = true;
            item.name = "item_" + index;
            item.getComponent(Label).string = curNum;
          }

          //        //注册ScrollView_numbers滚动效果
          this.ScrollView_numbers.node.on("touch-up", function () {
            _this2.onScrollTouchUp();
          }, this);
          this.ScrollView_numbers.node.on("touchcancel", function () {
            _this2.onScrollTouchUp();
          }, this);
          var setItem = function setItem() {
            for (var _index = 0; _index < _this2.ScrollView_numbers.content.children.length; _index++) {
              var itemNode = _this2.ScrollView_numbers.content.children[_index];
              var curPos = itemNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
              curPos = _this2.ScrollView_numbers.node.getComponent(UITransform).convertToNodeSpaceAR(curPos);
              var hW = _this2.ScrollView_numbers.node.getComponent(UITransform).width / 2.0;
              if (Math.abs(curPos.x) < hW) {
                itemNode.getComponent(UIOpacity).opacity = 255 * (1 - Math.abs(curPos.x) / hW);
                if (Math.abs(curPos.x) < itemNode.getComponent(UITransform).width) {
                  itemNode.scale = v3(1 + 0.5 * (1 - Math.abs(curPos.x) / itemNode.getComponent(UITransform).width), 1 + 0.5 * (1 - Math.abs(curPos.x) / itemNode.getComponent(UITransform).width), 1);
                } else {
                  itemNode.scale = v3(1, 1, 1);
                }
              } else {
                itemNode.getComponent(UIOpacity).opacity = 0;
                itemNode.scale = v3(1, 1, 1);
              }
              itemNode.getComponent(UIRenderer).color = itemNode.scale.x > 1.25 ? color(255, 255, 255) : color(100, 120, 180);
              if (itemNode.scale.x > 1.25) {
                _this2._curIndex = _index;
              }
            }
          };
          this.ScrollView_numbers.node.on("scroll-ended", setItem, this);
          this.ScrollView_numbers.node.on("scrolling", setItem, this);
          this.Button_left.on(Node.EventType.TOUCH_START, function () {
            _this2._isLongTouch = false;
            if (!_this2._hTouch) {
              _this2._hTouch = setTimeout(function () {
                _this2._isLongTouch = true;
                var times = -_this2.ScrollView_numbers.getScrollOffset().x / 1000;
                _this2.ScrollView_numbers.scrollToLeft(times, false);
              }, 250);
            }
          }, this);
          this.Button_left.on(Node.EventType.TOUCH_CANCEL, function (event) {
            _this2._isLongTouch = false;
            if (_this2._hTouch) {
              clearTimeout(_this2._hTouch);
              _this2._hTouch = null;
            }
            _this2.onScrollTouchUp(0.1);
          }, this);
          this.Button_right.on(Node.EventType.TOUCH_START, function () {
            _this2._isLongTouch = false;
            if (!_this2._hTouch) {
              _this2._hTouch = setTimeout(function () {
                _this2._isLongTouch = true;
                var times = (_this2.ScrollView_numbers.getMaxScrollOffset().x + _this2.ScrollView_numbers.getScrollOffset().x) / 1000;
                _this2.ScrollView_numbers.scrollToRight(times, false);
              }, 250);
            }
          }, this);
          this.Button_right.on(Node.EventType.TOUCH_CANCEL, function () {
            _this2._isLongTouch = false;
            if (_this2._hTouch) {
              clearTimeout(_this2._hTouch);
              _this2._hTouch = null;
            }
            _this2.onScrollTouchUp(0.1);
          }, this);
        };
        _proto.start = function start() {
          var _this3 = this;
          //        //滚动到指定位置
          setTimeout(function () {
            if (_this3.ScrollView_numbers) {
              _this3.ScrollView_numbers.scrollToPercentHorizontal(_this3._curIndex / _this3._maxIndex, 0.15, true);
            }
          }, 300);
        };
        _proto.onDisable = function onDisable() {
          if (this._hTouch) {
            clearTimeout(this._hTouch);
          }
        }
        //    //滚动触摸离开--停止滚动触摸
        ;

        _proto.onScrollTouchUp = function onScrollTouchUp(delay) {
          var _this4 = this;
          if (delay === void 0) {
            delay = 0.7;
          }
          this.scheduleOnce(function () {
            var getScrollOffset = _this4.ScrollView_numbers.getScrollOffset();
            _this4._curIndex = Math.round(Math.abs(getScrollOffset.x) / 80);
            _this4.ScrollView_numbers.stopAutoScroll();
            _this4._curIndex = _this4._curIndex < 0 ? 0 : _this4._curIndex > _this4._maxIndex ? _this4._maxIndex : _this4._curIndex;
            _this4.ScrollView_numbers.scrollToPercentHorizontal(_this4._curIndex / _this4._maxIndex, 0.1, true);
          }, delay);
        }
        //    //btn click 回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "Button_left":
              {
                if (this._hTouch) {
                  clearTimeout(this._hTouch);
                  this._hTouch = null;
                }
                if (!this._isLongTouch) {
                  if (this._curIndex > 0) {
                    this._curIndex--;
                  }
                  this.ScrollView_numbers.scrollToPercentHorizontal(this._curIndex / this._maxIndex, 0.1, true);
                } else {
                  this.onScrollTouchUp(0.1);
                }
                break;
              }
            case "Button_right":
              {
                if (this._hTouch) {
                  clearTimeout(this._hTouch);
                  this._hTouch = null;
                }
                if (!this._isLongTouch) {
                  if (this._curIndex < this._maxIndex) {
                    this._curIndex++;
                  }
                  this.ScrollView_numbers.scrollToPercentHorizontal(this._curIndex / this._maxIndex, 0.1, true);
                } else {
                  this.onScrollTouchUp(0.1);
                }
                break;
              }
          }
        };
        _proto.getCurRate = function getCurRate() {
          if (this.type == eAutoRateType.decimal) {
            return 0.01 * this._curIndex;
          }
          return this._curIndex + 1;
        };
        _proto.doReset = function doReset() {
          this._curIndex = 0;
          this.ScrollView_numbers.scrollToPercentHorizontal(0, 0.1, true);
        };
        return uiScrollView_num;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return eAutoRateType.integer;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemCounts", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_numbers", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Button_left", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Button_right", [_dec8], {
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
  r('virtual:///prerequisite-imports/F35Game', 'chunks:///_virtual/F35Game'); 
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