System.register("chunks:///_virtual/CsAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Component, EventManager, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "3006dGvf1hPuof03WA2wZxL", "CsAuto", undefined);
      var ccclass = _decorator.ccclass;
      var CsAuto = exports('default', (_dec = ccclass("CsAuto"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CsAuto, _Component);
        function CsAuto() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = CsAuto.prototype;
        _proto.onLoad = function onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        };
        _proto.showAuto = function showAuto() {
          Common.showLog("auto");
          EventManager.instance.dispatch("auto", null);
        };
        _proto.touchStart = function touchStart() {
          Common.showLog("start1");
          this.scheduleOnce(this.showAuto, 2);
        };
        _proto.touchMove = function touchMove() {
          Common.showLog("start2");
        };
        _proto.touchEnd = function touchEnd() {
          Common.showLog("start3");
          this.unschedule(this.showAuto);
        };
        _proto.touchCancel = function touchCancel() {
          Common.showLog("start4");
          this.unschedule(this.showAuto);
        }
        //    // update (dt) {}
        ;

        return CsAuto;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CsdBigRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './CsdGameCtrl.ts', './CsdGameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, find, Label, isValid, instantiate, GameDef, ConfigManager, EventManager, NetManager, CsdGameCtrl, eProto, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      Label = module.Label;
      isValid = module.isValid;
      instantiate = module.instantiate;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      CsdGameCtrl = module.CsdGameCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "e835bilZtxJ37moFyhhnSkT", "CsdBigRecord", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu;
      var CsdBigRecord = exports('default', (_dec = ccclass("CsdBigRecord"), _dec2 = menu("game/CsdGame/CsdBigRecord"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(CsdBigRecord, _GameDef$BaseView);
        function CsdBigRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _this._netManager = null;
          //    // override onDestroy(): void {
          //    //     super.onDestroy();
          //    // }
          //    ////////////////////////////////////////////////////////
          _this._curPoolPage = 1;
          return _this;
        }
        var _proto = CsdBigRecord.prototype;
        //    ////////////////////////////////////////
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, CsdGameCtrl.instance);
          this._netManager = NetManager.instance;
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);
          EventManager.instance.on(ConfigManager.instance.protocolCsd.CsdJackpotHistory, this.onFlipPage, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          EventManager.instance.off(ConfigManager.instance.protocolCsd.CsdJackpotHistory, this.onFlipPage, this);
        };
        //    ///////////////////////////////////////////////
        _proto.onFlipPage = function onFlipPage(data) {
          if (data == "before") {
            //            //上一页
            this._curPoolPage = this._curPoolPage - 1;
            if (this._curPoolPage < 1) {
              this._curPoolPage = 1;
            }
            var start = (this._curPoolPage - 1) * 6;
            this._netManager.sendOnlineData(eProto.CsdGetBigPoolList, {
              Offset: start,
              PageSize: 6
            });
            return;
          }
          if (data == "next") {
            //            //下一页
            this._curPoolPage = this._curPoolPage + 1;
            var _start = (this._curPoolPage - 1) * 6;
            this._netManager.sendOnlineData(eProto.CsdGetBigPoolList, {
              Offset: _start,
              PageSize: 6
            });
            return;
          }
        }
        //    //显示大奖记录
        ;

        _proto.updateRecord = function updateRecord(data) {
          if (data.JackpotRecord.length == 0) {
            return;
          }
          find("Canvas/CsdBigRecord/bg/page").getComponent(Label).string = "Trang:" + this._curPoolPage;
          if (this._curPoolPage == 1) {
            find("Canvas/CsdBigRecord/bg/before_btn").active = false;
          } else {
            find("Canvas/CsdBigRecord/bg/before_btn").active = true;
          }
          if (this._curPoolPage * 6 < data.TotalNum) {
            find("Canvas/CsdBigRecord/bg/next_btn").active = true;
          } else {
            find("Canvas/CsdBigRecord/bg/next_btn").active = false;
          }
          var content = find("Canvas/CsdBigRecord/bg/content_bg/scrollView_content/view/content");
          if (isValid(content)) {
            content.removeAllChildren();
            var prefab = find("Canvas/CsdBigRecord/bg/content_bg/item");
            for (var i = 0; i < data.JackpotRecord.length; i++) {
              var sdata = data.JackpotRecord[i];
              var item = instantiate(prefab);
              item.active = true;
              item.parent = content;
              item.getChildByName("time_date").getComponent(Label).string = sdata.CreateAt.split("T")[0];
              item.getChildByName("time_scond").getComponent(Label).string = sdata.CreateAt.split("T")[1].split(".")[0];
              item.getChildByName("lbl_name").getComponent(Label).string = sdata.NickName;
              item.getChildByName("lbl_bigmoney").getComponent(Label).string = Common.numFormat(sdata.BetV);
              item.getChildByName("lbl_result").getComponent(Label).string = Common.numFormat(sdata.GetJackpot);
              if (i == data.JackpotRecord.length - 1) {
                item.getChildByName("xian").active = false;
              }
            }
          }
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.CsdGetBigPoolList:
              {
                //                //大奖记录
                this.updateRecord(data);
                break;
              }
          }
        };
        return CsdBigRecord;
      }(GameDef.BaseView)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CsdGame", ['./CsAuto.ts', './CsdBigRecord.ts', './CsdGameCtrl.ts', './CsdGameDef.ts', './CsdGameHelp.ts', './CsdGameMenu.ts', './CsdGameModel.ts', './CsdGameScene.ts', './CsdGameView.ts', './CsdShowToast.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/CsdGameCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './I18n.ts', './GameDef.ts', './CsdGameDef.ts', './CsdGameModel.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ConfigManager, UserKey, DataManager, EventManager, NetManager, i18n, GameDef, eProto, CsdGameModel, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      UserKey = module.UserKey;
      DataManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      CsdGameModel = module.CsdGameModel;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6c4ecx00hlO3ZopKRsku3B0", "CsdGameCtrl", undefined);
      var CsdGameCtrl = exports('CsdGameCtrl', /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(CsdGameCtrl, _GameDef$BaseCtrl);
        function CsdGameCtrl() {
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
          _this._model = CsdGameModel.instance;
          return _this;
        }
        var _proto = CsdGameCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete CsdGameCtrl._instance;
          CsdGameCtrl._instance = null;
          CsdGameModel.destroy();
        };
        _proto.initProto = function initProto() {
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
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // gts.Debug.Log("==onRecvData==", data);
          var emitData = {};
          switch (data.cmd) {
            case eProto.CsdEnter:
              {
                //                // 进入游戏
                var HD_Enter = data.Data;
                this._model._lineType = HD_Enter.CoinValue;
                this._model._coinList = HD_Enter.CoinNum;
                this._model._zzList = HD_Enter.ReelsList;
                this._model._zzTryList = HD_Enter.ReelsListTrial;
                this._model._curFreeTimes = HD_Enter.FreeRemainTimes;
                this._model._linePos = HD_Enter.LineCoordinates;
                this._model._posList = HD_Enter.InitSymbol;
                this._model._curList = HD_Enter.ReelsList;
                this._model._rateList = HD_Enter.OddsList;
                break;
              }
            case eProto.CsdGetInfo:
              {
                //                // 获取游戏配置
                this._model._serverId = data.Data.slotCsServerId;
                var procol = this._model._serverId + "/" + eProto.CsdEnter.split("/")[1];
                this._netManager.sendOnlineData(procol, {});
                break;
              }
            case eProto.CsdGetJackpot:
              {
                //                // 大奖池
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                if (data.Data) {
                  this._model._bigjackPotNum = data.Data.Jackpot;
                }
                break;
              }
            case eProto.CsdRun:
              {
                //                // run
                Common.showTip(i18n.errTip(data.Code));
                break;
              }
            case eProto.CsdShowResult:
              {
                //                // run
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                this._model._resultData = data.Data;
                break;
              }
            case eProto.CsdEnterBonus:
              {
                //                // enter bonus
                this._model.BonusSymbolList = data.Data.BonusSymbolList;
                break;
              }
            case eProto.CsdChangeTry:
              {
                //                // enter bonus
                if (this._model._tyrGame == true) {
                  this._model._curList = data.Data.ReelsListTrial;
                  this._model._curGold = data.Data.TrialConf.VndBalance;
                }
                this._model._posList = data.Data.InitSymbol;
                break;
              }
            case eProto.CsdCheckInRoom:
              {
                //                // 检查是否再房间
                if (data.Data.InGame) {
                  return;
                }
                break;
              }
            case eProto.CsdExitGame:
            case eProto.CsdGetBigPoolList: //大奖记录
            case eProto.CsdSelectMini:
            case eProto.CsdEnterMini:
            case eProto.CsdSelectBeishu:
            case eProto.CsdSelect:
              {
                //                // enter bonus
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                emitData = data.Data;
                break;
              }

            //            ///////////////////////////////////////////////////////////////////////////
            case this._configManager.protocolHall.getWallet:
            case this._configManager.protocolHall.pushWallet:
              {
                var wallet = data.Wallet || data.Data.wallet;
                this._dataManager.setUserDataForKey(UserKey.GOLD, wallet.VndBalance);
                this._model._curGold = wallet.VndBalance;
                break;
              }
            case this._configManager.protocolHall.login:
              {
                var _procol = this._model._serverId + "/" + eProto.CsdCheckInRoom.split("/")[1];
                this._netManager.sendOnlineData(_procol, {});
                Common.closeNetTips();
                break;
              }
          }
          if (emitData != null) {
            // 基类统一遍历 Set，避免 ES5 未启用 downlevelIteration 时 for...of 静默跳过视图。
            this.emitUpdateView(data.cmd, emitData);
          }
        };
        return CsdGameCtrl;
      }(GameDef.BaseCtrl));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CsdGameDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a5384zBZflBBqvIUU4HyHde", "CsdGameDef", undefined);
      var bundle = exports('bundle', "CsdGame");
      var musicName = exports('musicName', /*#__PURE__*/function (musicName) {
        musicName[musicName["bg"] = 0] = "bg";
        musicName[musicName["zd1"] = 1] = "zd1";
        musicName[musicName["zd2"] = 2] = "zd2";
        musicName[musicName["pop"] = 3] = "pop";
        musicName[musicName["small"] = 4] = "small";
        musicName[musicName["big"] = 5] = "big";
        musicName[musicName["nomal"] = 6] = "nomal";
        musicName[musicName["bonusBg"] = 7] = "bonusBg";
        musicName[musicName["bonus1"] = 8] = "bonus1";
        musicName[musicName["bonus2"] = 9] = "bonus2";
        musicName[musicName["bonus3"] = 10] = "bonus3";
        musicName[musicName["bonus4"] = 11] = "bonus4";
        return musicName;
      }({}));
      var spName = exports('spName', {
        "10": 0,
        J: 1,
        Q: 2,
        K: 3,
        A: 4,
        WALLET: 5,
        TREE: 6,
        JACKPOT: 7,
        WILD: 8,
        SCATTER: 9,
        BONUS: 10
      });

      //网络消息
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["CsdGetInfo"] = "slotCs/HD_info";
        eProto["CsdEnter"] = "slotCs/HD_Enter";
        eProto["CsdExitGame"] = "slotCs/HD_QuitTable";
        eProto["CsdGetJackpot"] = "slotCs/HD_GetJackpot";
        eProto["CsdRun"] = "slotCs/HD_Spin";
        eProto["CsdShowResult"] = "slotCs/HD_JieSuan";
        eProto["CsdEnterBonus"] = "slotCs/HD_EnterBonusGame";
        eProto["CsdSelect"] = "slotCs/HD_SelectBonusSymbol";
        eProto["CsdSelectBeishu"] = "slotCs/HD_SelectBonusTimes";
        eProto["CsdChangeTry"] = "slotCs/HD_SwitchMode";
        eProto["CsdCheckInRoom"] = "slotCs/HD_CheckPlayerInGame";
        eProto["CsdEnterMini"] = "slotCs/HD_EnterMiniGame";
        eProto["CsdSelectMini"] = "slotCs/HD_SelectMiniSymbol";
        eProto["CsdGetBigPoolList"] = "slotCs/HD_GetJackpotRecord";
        return eProto;
      }({}));

      //获取游戏配置

      //进入游戏

      //返回大厅

      //获取大奖池

      //run

      //结算

      //wallet

      //获取bonus

      //选择图案返回

      //切换试玩

      //检查是否再房间

      //进入迷你

      //选择mini

      //获取大奖数据
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CsdGameHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, find, Label, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "55540YEGFxHnY7XAkMttjeN", "CsdGameHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CsdGameHelp = exports('default', (_dec = ccclass("CsdGameHelp"), _dec2 = menu("game/CsdGame/CsdGameHelp"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CsdGameHelp, _Component);
        function CsdGameHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._rateList = void 0;
          _this._helpIndex = 1;
          return _this;
        }
        var _proto = CsdGameHelp.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          for (var i = 0; i < 3; i++) {
            find("/bg/help" + (i + 1), this.node).active = i + 1 == this._helpIndex;
          }
          if (this._rateList) {
            var help2 = find("/bg/help2", this.node);
            for (var _i = 0, _Object$entries = Object.entries(this._rateList); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _Object$entries[_i],
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              var startKey = 3;
              if (key == "JACKPOT") {
                startKey = 2;
              }
              var Label_rate = find("Node_" + key + "/Label_0", help2).getComponent(Label).string = "*" + Math.floor(value[startKey] / 100);
              Label_rate = find("Node_" + key + "/Label_1", help2).getComponent(Label).string = "*" + Math.floor(value[startKey + 1] / 100);
              Label_rate = find("Node_" + key + "/Label_2", help2).getComponent(Label).string = "*" + Math.floor(value[startKey + 2] / 100);
            }
          }
        };
        _proto.onClickNext = function onClickNext() {
          this._helpIndex = this._helpIndex + 1;
          if (this._helpIndex > 3) {
            this._helpIndex = 1;
          }
          for (var i = 0; i < 3; i++) {
            find("/bg/help" + (i + 1), this.node).active = i + 1 == this._helpIndex;
          }
        };
        _proto.onClickBefore = function onClickBefore() {
          this._helpIndex = this._helpIndex - 1;
          if (this._helpIndex <= 0) {
            this._helpIndex = 3;
          }
          for (var i = 0; i < 3; i++) {
            find("/bg/help" + (i + 1), this.node).active = i + 1 == this._helpIndex;
          }
        };
        return CsdGameHelp;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CsdGameMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './NetManager.ts', './ViewManager.ts', './CsdGameDef.ts', './CsdGameHelp.ts', './CsdGameModel.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, find, tween, assetManager, instantiate, Component, GUtil, NetManager, ViewManager, eProto, bundle, CsdGameHelp, CsdGameModel, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      tween = module.tween;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      bundle = module.bundle;
    }, function (module) {
      CsdGameHelp = module.default;
    }, function (module) {
      CsdGameModel = module.CsdGameModel;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "9efe81yMy1Gr7pIaJL8Hz30", "CsdGameMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CsdGameMenu = exports('default', (_dec = ccclass("CsdGameMenu"), _dec2 = menu("game/CsdGame/CsdGameMenu"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CsdGameMenu, _Component);
        function CsdGameMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.node_buttons = null;
          _this.node_back = null;
          _this.node_Bg = null;
          _this.node_action = null;
          return _this;
        }
        var _proto = CsdGameMenu.prototype;
        _proto.onLoad = function onLoad() {
          this.node_action = find("node_action", this.node);
          this.node_buttons = find("buttons", this.node_action);
          this.node_back = find("btn_menu", this.node);
          this.node_Bg = find("node_bg", this.node);
          this.node_Bg.active = false;
          this.node_action.active = false;
        };
        _proto.start = function start() {};
        _proto.onClickExit = function onClickExit(sender) {
          var _this2 = this;
          var procol = CsdGameModel.instance._serverId + "/" + eProto.CsdExitGame.split("/")[1];
          NetManager.instance.sendOnlineData(procol, {
            action: "HD_QuitTable"
          });
          tween(this.node).delay(1.0).call(function () {
            Common.returnToHall(_this2);
          }).start();
        };
        _proto.onClickSetting = function onClickSetting(sender) {
          GUtil.openSetting();
        };
        _proto.onClickRule = function onClickRule(sender) {
          Common.loadPopBuddle("prefab/CsdHelp", assetManager.getBundle(bundle), function () {}, function (helpLayer) {
            var helpLayerNode = instantiate(helpLayer);
            ViewManager.instance.popNodeView(helpLayerNode, true);
            helpLayerNode.getComponent(CsdGameHelp)._rateList = CsdGameModel.instance._rateList;
          }, true);
        };
        _proto.onClickRecord = function onClickRecord(sender) {
          GUtil.openRecord("slotCs");
        };
        _proto.onClickMenu = function onClickMenu() {
          this.node_action.active = !this.node_action.active;
        };
        _proto.onClickBg = function onClickBg() {};
        _proto.onDestroy = function onDestroy() {};
        return CsdGameMenu;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CsdGameModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "25d22nZvJFOvr+QiKe5WoZe", "CsdGameModel", undefined);
      var CsdGameModel = exports('CsdGameModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(CsdGameModel, _GameDef$BaseSington);
        function CsdGameModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this._serverId = "";
          //    //IHD_Enter
          _this._lineType = null;
          _this._coinList = null;
          _this._zzList = null;
          _this._zzTryList = null;
          _this._curFreeTimes = 0;
          _this._linePos = null;
          _this._posList = null;
          _this._curList = null;
          _this._curGold = 0;
          _this._bigjackPotNum = 0;
          _this._resultData = null;
          _this.BonusSymbolList = null;
          _this._tyrGame = false;
          _this._rateList = null;
          return _this;
        }
        var _proto = CsdGameModel.prototype;
        _proto.getPicturesData = function getPicturesData() {
          //        //根据卷轴位置 获取当前每个点的图案id
          var curdata = [];
          for (var i = 0; i < this._posList.length; i++) {
            var value1 = this._posList[i];
            var value0 = value1 == 0 ? this._curList[i].length - 1 : value1 - 1;
            var value2 = value1 + 1 == this._curList[i].length ? 0 : value1 + 1;
            var value3 = value2 + 1 == this._curList[i].length ? 0 : value2 + 1;
            curdata[i] = this._curList[i][value0];
            curdata[5 * 1 + i] = this._curList[i][value1];
            curdata[5 * 2 + i] = this._curList[i][value2];
            curdata[5 * 3 + i] = this._curList[i][value3];
          }
          return curdata;
        };
        return CsdGameModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CsdGameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './CsdGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ProgressBar, Node, assetManager, Prefab, instantiate, Component, ConfigManager, EventManager, NetManager, bundle;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      bundle = module.bundle;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e43745eGy5IVJEnRbFeBUQj", "CsdGameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CsdGameScene = exports('default', (_dec = ccclass("CsdGameScene"), _dec2 = menu("game/CsdGame/CsdGameScene"), _dec3 = property(ProgressBar), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CsdGameScene, _Component);
        function CsdGameScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._configManager = null;
          _this._eventManager = null;
          _this._netManager = null;
          _initializerDefineProperty(_this, "loding", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingRoot", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CsdGameScene.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this._configManager = ConfigManager.instance;
          this._eventManager = EventManager.instance;
          this._netManager = NetManager.instance;
          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台

          var _buddle = assetManager.getBundle(bundle);
          _buddle.load("prefab/CsdGameView", Prefab, function (cur, total) {
            var percent = cur / total;
            if (percent > 1) {
              percent = 1;
            }
            _this2.loding.progress = percent;
          }, function (err, gameRoot) {
            var gameView = instantiate(gameRoot);
            _this2.node.addChild(gameView);
            _this2.loadingRoot.active = false;
          });
        };
        _proto.gameShow = function gameShow() {
          this._netManager.waitServiceSendData();
        };
        _proto.onDisable = function onDisable() {
          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
        };

        return CsdGameScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loding", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingRoot", [_dec4], {
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

System.register("chunks:///_virtual/CsdGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './BtnArea.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './CsdGameCtrl.ts', './CsdGameDef.ts', './CsdGameModel.ts', './Common.ts', './GUtil.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Prefab, SpriteFrame, AudioClip, find, UITransform, Vec3, assetManager, sys, Button, Sprite, tween, UIOpacity, sp, Tween, v3, Color, instantiate, UIRenderer, v2, RichText, i18n, GameDef, BtnArea, AudioManager, ConfigManager, DataManager, UserKey, EventManager, NetManager, ViewManager, CsdGameCtrl, bundle, eProto, musicName, spName, CsdGameModel, Common, GUtil;
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
      Node = module.Node;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      AudioClip = module.AudioClip;
      find = module.find;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      assetManager = module.assetManager;
      sys = module.sys;
      Button = module.Button;
      Sprite = module.Sprite;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      sp = module.sp;
      Tween = module.Tween;
      v3 = module.v3;
      Color = module.Color;
      instantiate = module.instantiate;
      UIRenderer = module.UIRenderer;
      v2 = module.v2;
      RichText = module.RichText;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      BtnArea = module.default;
    }, function (module) {
      AudioManager = module.default;
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
      CsdGameCtrl = module.CsdGameCtrl;
    }, function (module) {
      bundle = module.bundle;
      eProto = module.eProto;
      musicName = module.musicName;
      spName = module.spName;
    }, function (module) {
      CsdGameModel = module.CsdGameModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "f0ac9gzbXxEkZFJty6+AqYZ", "CsdGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BTN_FRAMES_NAME = "sprite";
      var CsdGameView = exports('default', (_dec = ccclass("CsdGameView"), _dec2 = menu("game/CsdGame/CsdGameView"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Prefab), _dec14 = property(Node), _dec15 = property(SpriteFrame), _dec16 = property(SpriteFrame), _dec17 = property(AudioClip), _dec18 = property(SpriteFrame), _dec19 = property(SpriteFrame), _dec20 = property(Node), _dec21 = property(Prefab), _dec22 = property(Prefab), _dec23 = property(SpriteFrame), _dec24 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(CsdGameView, _GameDef$BaseView);
        function CsdGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _this.isMain = true;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._dataManager = void 0;
          _this._viewManager = void 0;
          _this._audioManager = void 0;
          _this._model = null;
          _this._buddle = void 0;
          _initializerDefineProperty(_this, "bigPot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineNum", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "CoinNum", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreNum", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tip", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tip_auto", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeLayer", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniBtn", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "items", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemsp", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineSp", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicRes", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bonusItems", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "beishu", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startBtn", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_line", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_lineShort", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnFrames", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_rewardTip", _descriptor22, _assertThisInitialized(_this));
          _this._helpIndex = 1;
          _this._coinIndex = 1;
          _this._lineIndex = 1;
          _this._curLine = 1;
          _this._curRunType = 1;
          _this._curCoin = 100;
          _this._curBase = 100;
          _this._curType = 1;
          _this._stepJackPotNum = 0;
          _this._startPosList = [];
          _this._isStart = false;
          _this._runTime = 0;
          _this._rowIndex = 0;
          _this._step = 50;
          _this.speedShowRe = false;
          _this._lineArr = [];
          _this._itemArr = [];
          _this._singleIndex = 0;
          _this._resultNum = 0;
          _this._resultStep = 0;
          _this._reslutLabel = null;
          _this._bonusIndex = 0;
          _this._inRe = false;
          _this._freeTimes = 0;
          _this._isAuto = false;
          _this._changeAuto = false;
          _this.reOpen = false;
          _this.reOpenTime = 0;
          _this.reOpenTryTimes = 0;
          _this.arrPos = [];
          _this._audioID_run = null;
          _this.autoSelect = false;
          return _this;
        }
        var _proto = CsdGameView.prototype;
        _proto.setArrPos = function setArrPos() {
          var lineLayer = find("gameLayer/lineLayer", this.node);
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item != null) {
              var world = item.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
              var pos = lineLayer.getComponent(UITransform).convertToNodeSpaceAR(world);
              this.arrPos[i] = pos;
            }
          }
        };
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, CsdGameCtrl.instance);
          this._configManager = ConfigManager.instance;
          this._eventManager = EventManager.instance;
          this._netManager = NetManager.instance;
          this._dataManager = DataManager.instance;
          this._viewManager = ViewManager.instance;
          this._audioManager = AudioManager.instance;
          this._model = CsdGameModel.instance;
          this._buddle = assetManager.getBundle(bundle);
          this._netManager.waitServiceSendData();
          this.initEvent();
          this.initGame();
          this._netManager.sendOnlineData(eProto.CsdGetInfo, {});
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);
          AudioManager.instance.playGameMusic(this.musicRes[musicName.bg], true);
          this.setArrPos();
        };
        _proto.playSound = function playSound(name, isloop) {
          if (isloop) return this._audioManager.playSound(this.musicRes[musicName[name]], isloop);else {
            this._audioManager.playOneShot(this.musicRes[musicName[name]]);
          }
        };
        _proto.stopSound = function stopSound(audioID) {
          return this._audioManager.stopSound(audioID);
        };
        _proto.initGame = function initGame() {
          var line = sys.localStorage.getItem("CsLineType");
          var lineIndex = sys.localStorage.getItem("CsLineIndex");
          var coin = sys.localStorage.getItem("CsCoinNum");
          var CoinIndex = sys.localStorage.getItem("CsCoinIndex");
          var type = sys.localStorage.getItem("CsRunType");
          this._lineIndex = parseInt(lineIndex) ? parseInt(lineIndex) : this._lineIndex;
          this._curLine = parseInt(line) ? parseInt(line) : this._curLine;
          this._curCoin = parseInt(coin) ? parseInt(coin) : this._curCoin;
          this._coinIndex = parseInt(CoinIndex) ? parseInt(CoinIndex) : this._coinIndex;
          this._curRunType = parseInt(type) ? parseInt(type) : this._curRunType;
          this._curBase = this._curCoin * this._curLine;
          this._model._curGold = this._dataManager.getUserDataForKey(UserKey.GOLD);
          this.bigPot.string = "0";
          this.gold.string = Common.numFormat(this._model._curGold);
          this.lineNum.string = this._curLine + "";
          this.baseNum.string = Common.ChangeMoneyShow(this._curBase, 1);
          this.CoinNum.string = Common.ChangeMoneyShow(this._curCoin, 1);
          this.scoreNum.string = "";
          this.tip.active = this._curRunType == 2;
          this.miniBtn.getComponent(Button).interactable = false;
          this.tip_auto.active = this._isAuto;
          var lineClass = find("gameLayer/lineClass", this.node);
          for (var i = 0; i < 25; i++) {
            var item = find("line" + (i + 1), lineClass);
            item.getChildByName("text").getComponent(Label).string = i + 1 + "";
            item.off(Node.EventType.TOUCH_END, this.onNodeTouchEnd, this);
            item.on(Node.EventType.TOUCH_END, this.onNodeTouchEnd, this);
            var node = new Node();
            node.name = BTN_FRAMES_NAME;
            var sprite = node.addComponent(Sprite);
            sprite.spriteFrame = this.btnFrames[1];
            item.addChild(node);
            node.active = false;
            tween(node.getComponent(UIOpacity)).repeatForever(tween().to(0.5, {
              opacity: 0
            }).to(0.5, {
              opacity: 255
            }).start()).start();
            //            // let action = node.addComponent(ActionFade);
            //            // action.playTime = 1;
            //            // action.callback = () => {
            //            //     node.active = false;
            //            // };
          }

          for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
            this._startPosList[i] = {
              x: this.items[i].getPosition().x,
              y: this.items[i].getPosition().y
            };
          }
          find("publicLayer/tryBtn", this.node).active = !this._model._tyrGame;
          find("publicLayer/nomalBtn", this.node).active = this._model._tyrGame;
          this.startBtn.getComponent(sp.Skeleton).setAnimation(0, "normal", true);
        };
        _proto.onNodeTouchEnd = function onNodeTouchEnd(event) {
          gts.Debug.Log("==onNodeTouchEnd==" + event.target.name);
          var curLineIndex = parseInt(event.target.name.replace("line", "")) - 1;
          this.drawLineSingle(curLineIndex, true);
        };
        _proto.initGameData = function initGameData() {
          if (!this._model._tyrGame) {
            this.initJackPot();
          }
          if (this._model._curFreeTimes > 0) {
            this.freeLayer.active = true;
            this.freeLayer.getChildByName("freetimes").getComponent(Label).string = this._model._curFreeTimes + "";
          } else {
            this.freeLayer.active = false;
          }
          this.drawSPByData();
        };
        _proto.drawSPByData = function drawSPByData() {
          //        //根据卷轴位置绘制 当前显示图案
          var curPageData = this._model.getPicturesData();
          for (var i = 0; i < curPageData.length; i++) {
            this.items[i].active = true;
            this.items[i].getComponent(Sprite).spriteFrame = this.itemsp[spName[curPageData[i]]];
            this.items[i].setPosition(this._startPosList[i].x, this._startPosList[i].y);
          }
        };
        _proto.onClick_auto = function onClick_auto() {
          var _this2 = this;
          if (this._model._tyrGame == false && this._curCoin * this._curLine > parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD)) && this._model._curFreeTimes <= 0) {
            Common.showTip(i18n.lang[10001]);
            return;
          }
          if (this._model._tyrGame == true && this._curCoin * this._curLine > this._model._curGold && this._model._curFreeTimes <= 0) {
            Common.showTip(i18n.lang[10001]);
            return;
          }
          this._isAuto = !this._isAuto;
          this.tip_auto.active = this._isAuto;
          this._dataManager.setAuto(this._isAuto);
          if (!this._isStart) {
            this.startBtn.getComponent(sp.Skeleton).setAnimation(0, "click", false);
            this.startBtn.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
            this.scheduleOnce(function () {
              _this2.CsdRunBtn("auto");
            }, 1);
          }
        };
        _proto.changeAuto = function changeAuto() {
          if (this._model._tyrGame == false && this._curCoin * this._curLine > parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD)) && this._model._curFreeTimes <= 0) {
            Common.showTip(i18n.lang[10001]);
            return;
          }
          if (this._model._tyrGame == true && this._curCoin * this._curLine > this._model._curGold && this._model._curFreeTimes <= 0) {
            Common.showTip(i18n.lang[10001]);
            return;
          }
          if (this._isAuto == false && this._isStart == false) {
            this._isAuto = true;
            this._changeAuto = true;
            this._dataManager.setAuto(this._isAuto);
            this.startBtn.getComponent(sp.Skeleton).setAnimation(0, "click", false);
            this.startBtn.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
            this.tip_auto.active = true;
            this.scheduleOnce(function () {
              this.CsdRunBtn("auto");
            }, 1);
          }
        };
        _proto.CsdSelectMiniBtn = function CsdSelectMiniBtn(data) {
          this.playSound("bonus1", false);
          var procol = this._model._serverId + "/" + eProto.CsdSelectMini.split("/")[1];
          this._netManager.sendOnlineData(procol, {
            Serial: parseInt(data)
          });
        };
        _proto.CsdMini = function CsdMini(data) {
          if (this._inRe == true || this._isAuto == true) {
            return;
          }
          if (data == "show" || data == "continue") {
            this.miniBtn.getComponent(Button).interactable = false;
            var procol = this._model._serverId + "/" + eProto.CsdEnterMini.split("/")[1];
            this._netManager.sendOnlineData(procol, {});
            return;
          }
          if (data == "rule") {
            var miniRule = find("MiniRule", this.node);
            miniRule.active = true;
            return;
          }
          if (data == "closeMini") {
            var minilayer = find("MiniGameLayer", this.node);
            minilayer.active = false;
            return;
          }
          if (data == "closeRule") {
            var _miniRule = find("MiniRule", this.node);
            _miniRule.active = false;
            return;
          }
        };
        _proto.CsdMiniSelectLayer = function CsdMiniSelectLayer(data) {
          var minilayer = find("MiniGameLayer", this.node);
          minilayer.active = true;
          var bg = minilayer.getChildByName("bg");
          var bg2 = minilayer.getChildByName("bg2");
          bg2.active = false;
          bg.getChildByName("tip1").active = true;
          bg.getChildByName("tip2").active = false;
          bg.getChildByName("tip3").active = false;
          bg.getChildByName("closeBtn1").active = true;
          bg.getChildByName("closeBtn2").active = false;
          bg.getChildByName("continueBtn").active = false;
          bg.getChildByName("scorebg1").getChildByName("score").getComponent(Label).string = Common.numFormat(data.XiaZhu);
          bg.getChildByName("scorebg2").getChildByName("score").getComponent(Label).string = Common.numFormat(data.Get);
          for (var i = 0; i < 4; i++) {
            var item = bg.getChildByName("miniItem" + (i + 1));
            item.getChildByName("nomal").active = true;
            item.getChildByName("ybNomal").active = false;
            item.getChildByName("ybzhong").active = false;
            item.getChildByName("stNomal").active = false;
            item.getChildByName("stzhong").active = false;
            item.getComponent(Button).interactable = true;
          }
        };
        _proto.CsdMiniSelectLayer2 = function CsdMiniSelectLayer2(data) {
          var minilayer = find("MiniGameLayer", this.node);
          minilayer.active = true;
          var bg = minilayer.getChildByName("bg");
          var bg2 = minilayer.getChildByName("bg2");
          bg2.active = false;
          bg.getChildByName("tip1").active = false;
          bg.getChildByName("tip2").active = data.State == 1;
          bg.getChildByName("tip3").active = data.State != 1;
          bg.getChildByName("closeBtn1").active = data.State != 1;
          bg.getChildByName("closeBtn2").active = data.State == 1;
          bg.getChildByName("continueBtn").active = data.State == 1;
          this.scoreNum.string = Common.numFormat(data.TotalSymbolScore);
          this.actScore();
          for (var i = 0; i < 4; i++) {
            var item = bg.getChildByName("miniItem" + (i + 1));
            item.getComponent(Button).interactable = false;
            item.getChildByName("nomal").active = false;
            if (i == data.Serial) {
              item.getChildByName("ybNomal").active = false;
              item.getChildByName("ybzhong").active = data.SymbolList[i] == 1;
              item.getChildByName("stNomal").active = false;
              item.getChildByName("stzhong").active = data.SymbolList[i] == 0;
            } else {
              item.getChildByName("ybNomal").active = data.SymbolList[i] == 1;
              item.getChildByName("ybzhong").active = false;
              item.getChildByName("stNomal").active = data.SymbolList[i] == 0;
              item.getChildByName("stzhong").active = false;
            }
          }
          if (data.ClickNum == 3) {
            //            // bg.getChildByName("closeBtn1").getComponent(cc.Button).interactable=false;
            //            // bg.getChildByName("closeBtn2").getComponent(cc.Button).interactable=false;
            //            // bg.getChildByName("continueBtn").getComponent(cc.Button).interactable=false;
            var self = this;
            this.scheduleOnce(function () {
              bg2.active = true;
              bg2.getChildByName("bg").getChildByName("scoreNum").getComponent(Label).string = Common.numFormat(data.TotalSymbolScore);
              self.scheduleOnce(function () {
                minilayer.active = false;
              }, 1);
            }, 0.5);
          }
        };
        _proto.CsdTryBtn = function CsdTryBtn(data) {
          if (this._isStart == true || this._inRe == true || this._isAuto == true) {
            return;
          }
          this._model._tyrGame = data == 1 ? true : false;
          find("publicLayer/tryBtn", this.node).active = this._model._tyrGame == false;
          find("publicLayer/nomalBtn", this.node).active = this._model._tyrGame == true;
          if (this._model._tyrGame == true) {
            this.clearStatus();
            this._isStart = false;
            this.scoreNum.string = "";
            this._freeTimes = this._model._curFreeTimes;
            this._model._curFreeTimes = 0;
            this.initJackPot();
            if (this._model._curFreeTimes > 0) {
              this.freeLayer.active = true;
              this.freeLayer.getChildByName("freetimes").getComponent(Label).string = this._model._curFreeTimes + "";
            } else {
              this.freeLayer.active = false;
            }
            var procol = this._model._serverId + "/" + eProto.CsdChangeTry.split("/")[1];
            this._netManager.sendOnlineData(procol, {
              modeType: "trial"
            });
          } else {
            this.clearStatus();
            this._isStart = false;
            this.initGame();
            this._model._curFreeTimes = this._freeTimes;
            this._model._curList = this._model._zzList;
            this._model._curGold = this._dataManager.getUserDataForKey(UserKey.GOLD);
            this.scoreNum.string = "";
            this.gold.string = Common.numFormat(this._model._curGold);
            this.initJackPot();
            if (this._model._curFreeTimes > 0) {
              this.freeLayer.active = true;
              this.freeLayer.getChildByName("freetimes").getComponent(Label).string = this._model._curFreeTimes + "";
            } else {
              this.freeLayer.active = false;
            }
            var _procol = this._model._serverId + "/" + eProto.CsdChangeTry.split("/")[1];
            this._netManager.sendOnlineData(_procol, {
              modeType: "normal"
            });
          }
        };
        _proto.CsdRunBtn = function CsdRunBtn(data) {
          if (data == "run" && this._changeAuto) {
            this._changeAuto = false;
            return;
          }
          if (data == "run" && this._isAuto == true) {
            this._isAuto = false;
            this._dataManager.setAuto(this._isAuto);
            this.tip_auto.active = this._isAuto;
          }
          if (this._inRe == true) {
            return;
          }
          if (this._isStart == false) {
            //            //没有开始滚动时
            if (this._model._tyrGame == false && this._curCoin * this._curLine > parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD)) && this._model._curFreeTimes <= 0) {
              this._isAuto = false;
              this.startBtn.getComponent(sp.Skeleton).setAnimation(0, "normal", true);
              Common.showTip(i18n.lang[10001]);
              return;
            }
            if (this._model._tyrGame == true && this._curCoin * this._curLine > this._model._curGold && this._model._curFreeTimes <= 0) {
              this._isAuto = false;
              this.startBtn.getComponent(sp.Skeleton).setAnimation(0, "normal", true);
              Common.showTip(i18n.lang[10001]);
              return;
            }
            if (!this._isAuto) {
              this.startBtn.getComponent(sp.Skeleton).setAnimation(0, "click", false);
              this.startBtn.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
            }
            if (this._model._curFreeTimes <= 0) {
              this._model._curGold = this._model._curGold - this._curCoin * this._curLine;
              this.gold.string = Common.numFormat(this._model._curGold);
            } else {
              this._model._curFreeTimes = this._model._curFreeTimes - 1;
              this.freeLayer.getChildByName("freetimes").getComponent(Label).string = this._model._curFreeTimes + "";
            }
            this.freeLayer.active = this._model._curFreeTimes > 0;
            this.clearStatus();
            this._audioID_run = this.playSound("zd1", true);

            //            // this.startAni();
            this.doingBet();
          } //已经开始滚动
          else {
            Common.showLog("已经开始滚动");
            if (this._model._resultData != null) {
              if (this._curType == 1) {
                this._runTime = 1;
                this.speedShowRe = true;
              } else {
                this._runTime = 1;
              }
            }
          }
        };
        _proto.getItemIndex = function getItemIndex(row, col) {
          return (row + 1) * 5 + col;
        };
        _proto.actScore = function actScore() {
          Tween.stopAllByTarget(this.scoreNum.node);
          this.scoreNum.node.scale = v3(1, 1, 1);
          tween(this.scoreNum.node).repeatForever(tween(this.scoreNum.node).to(0.3, {
            scale: v3(0.9, 0.9, 1)
          }).to(0.3, {
            scale: v3(1.1, 1.1, 1)
          }).start()).start();
        };
        _proto.drawLineShow = function drawLineShow() {
          var lineLayer = find("gameLayer/lineLayer", this.node);
          //        // lineLayer.removeAllChildren();
          for (var _i = lineLayer.children.length - 1; _i >= 0; _i--) {
            var childNode = lineLayer.children[_i];
            if (-1 != childNode.name.indexOf("lineNode_")) {
              childNode.destroyFromParent();
            }
          }
          for (var i = 0; i < this._lineIndex; i++) {
            this.drawLineSingle(i);
          }
        };
        _proto.drawLineSingle = function drawLineSingle(lineIndex, isCheck) {
          var _this3 = this;
          if (isCheck === void 0) {
            isCheck = false;
          }
          //        //#region new
          var lineLayer = find("gameLayer/lineLayer", this.node);
          var nameTemp = isCheck ? "lineNode_check_" + lineIndex : "lineNode_" + lineIndex;
          if (isCheck) {
            var isExist = false;
            lineLayer.walk(function (childNode) {
              if (childNode.name == nameTemp) {
                Tween.stopAllByTarget(childNode);
                tween(childNode).delay(0).removeSelf().start();
                isExist = true;
              }
            }, null);
            if (isExist) {
              return;
            }
          }
          var showTimes = 3.0;
          var linetype = lineIndex + 1;
          var lastIndex = null;
          var linePosValues = Object.values(this._model._linePos[linetype]);
          var _loop = function _loop() {
            var infoValue = linePosValues[jIndex];
            var index = _this3.getItemIndex(infoValue.Row, infoValue.Col);
            if (lastIndex != null) {
              var _pos = v3(_this3.arrPos[lastIndex]);
              var _pos2 = v3(_this3.arrPos[index]);
              var _lineNode = _this3.createLine(Color.WHITE, false);
              _lineNode.name = nameTemp;
              lineLayer.addChild(_lineNode);
              _lineNode.getComponent(UITransform).anchorX = 0;
              _lineNode.getComponent(UITransform).anchorY = 0.5;
              var _distance = GUtil.GetDistance(_pos, _pos2);
              _lineNode.getComponent(UITransform).width = _distance;
              _lineNode.position = _pos;
              _lineNode.angle = -_this3.getAngle(_pos, _pos2);
              tween(_lineNode.getComponent(UIOpacity)).to(showTimes, {
                opacity: 255
              }).to(1, {
                opacity: 0
              }).call(function () {
                _lineNode.destroyFromParent();
              }).start();
            }
            lastIndex = index;
          };
          for (var jIndex = 0; jIndex < linePosValues.length; jIndex++) {
            _loop();
          }
          if (linetype % 2 != 0) {
            lastIndex = this.getItemIndex(linePosValues[0].Row, linePosValues[0].Col);
          }
          var item = find("gameLayer/lineClass/line" + linetype, this.node);
          var world2 = item.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
          var pos1 = v3(this.arrPos[lastIndex]);
          var pos2 = lineLayer.getComponent(UITransform).convertToNodeSpaceAR(world2);
          if (pos1.x > pos2.x) {
            var tempx = pos1.x;
            var tempy = pos1.y;
            pos1.x = pos2.x;
            pos1.y = pos2.y;
            pos2.x = tempx;
            pos2.y = tempy;
          }
          var lineNode = this.createLine(Color.GREEN, false);
          lineNode.name = nameTemp;
          lineLayer.addChild(lineNode);
          lineNode.getComponent(UITransform).anchorX = 0;
          lineNode.getComponent(UITransform).anchorY = 0.5;
          var distance = GUtil.GetDistance(pos1, pos2);
          lineNode.getComponent(UITransform).width = distance;
          lineNode.position = pos1;
          lineNode.angle = -this.getAngle(pos1, pos2);
          tween(lineNode.getComponent(UIOpacity)).to(showTimes, {
            opacity: 255
          }).to(1, {
            opacity: 0
          }).call(function () {
            lineNode.destroyFromParent();
          }).start();
        };
        _proto.createLine = function createLine(color, isLighting) {
          if (color === void 0) {
            color = Color.WHITE;
          }
          if (isLighting === void 0) {
            isLighting = true;
          }
          //        // let lineNode: cc.Node = new cc.Node();
          //        // lineNode.addComponent(cc.Sprite);
          //        // lineNode.getComponent(cc.Sprite).spriteFrame = this.lineSp;

          if (!color.equals(Color.WHITE)) {
            var _lineNode2 = instantiate(this.pre_lineShort);
            //            // lineNode.color = color;

            var sprite = _lineNode2.getComponent(Sprite);
            var materials = sprite.materials;
            sprite.setMaterial(materials[1], 0);
            return _lineNode2;
          }
          var lineNode = instantiate(this.pre_line);
          lineNode.getComponent(UIRenderer).color = color;
          if (!isLighting) {
            var _sprite = lineNode.getComponent(Sprite);
            var _materials = _sprite.materials;
            _sprite.setMaterial(_materials[1], 0);
          }
          return lineNode;
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
        _proto.drawLine = function drawLine() {
          if (this._model._resultData.Result == null) {
            return;
          }
          var keys_Result = Object.keys(this._model._resultData.Result);
          for (var _i2 = 0, _keys_Result = keys_Result; _i2 < _keys_Result.length; _i2++) {
            var key = _keys_Result[_i2];
            var linetype = this._model._resultData.Result[key].LineSerial;
            var lineCount = this._model._resultData.Result[key].LineType;
            var redata = [];
            var lineArr = [];
            var temp = null;
            var lineLayer = find("gameLayer/lineLayer", this.node);
            for (var j = 0; j < this._model._linePos[linetype].length; j++) {
              var index = this.getItemIndex(this._model._linePos[linetype][j].Row, this._model._linePos[linetype][j].Col);
              var _item = this.items[index];
              if (redata.length < lineCount) {
                redata.push(_item);
              }
              if (temp != null) {
                var _world = temp.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var _world2 = _item.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var _pos3 = lineLayer.getComponent(UITransform).convertToNodeSpaceAR(_world);
                var _pos4 = lineLayer.getComponent(UITransform).convertToNodeSpaceAR(_world2);
                var _lineNode3 = this.createLine();
                lineLayer.addChild(_lineNode3);
                _lineNode3.getComponent(UITransform).anchorX = 0;
                _lineNode3.getComponent(UITransform).anchorY = 0.5;
                var _distance2 = GUtil.GetDistance(_pos3, _pos4);
                _lineNode3.getComponent(UITransform).width = _distance2;
                _lineNode3.position = _pos3;
                _lineNode3.angle = -this.getAngle(_pos3, _pos4);
                lineArr.push(_lineNode3);
              }
              temp = _item;
            }
            if (parseInt(linetype) % 2 != 0) {
              var _index = this.getItemIndex(this._model._linePos[linetype][0].Row, this._model._linePos[linetype][0].Col);
              temp = this.items[_index];
            }
            var item = find("gameLayer/lineClass/line" + linetype, this.node);
            //            // item.getComponent(cc.Sprite).spriteFrame = this.btnFrames[1];
            var sprite = item.getChildByName(BTN_FRAMES_NAME);
            if (sprite) {
              sprite.active = true;
              // sprite.getComponent(cc.UITransform).priority = 0;
              sprite.setSiblingIndex(0);
            }
            var world1 = temp.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            var world2 = item.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            var pos1 = lineLayer.getComponent(UITransform).convertToNodeSpaceAR(world1);
            var pos2 = lineLayer.getComponent(UITransform).convertToNodeSpaceAR(world2);
            if (pos1.x > pos2.x) {
              var tempx = pos1.x;
              var tempy = pos1.y;
              pos1.x = pos2.x;
              pos1.y = pos2.y;
              pos2.x = tempx;
              pos2.y = tempy;
            }
            var lineNode = this.createLine(Color.GREEN);
            lineLayer.addChild(lineNode);
            lineNode.getComponent(UITransform).anchorX = 0;
            lineNode.getComponent(UITransform).anchorY = 0.5;
            var distance = GUtil.GetDistance(pos1, pos2);
            lineNode.getComponent(UITransform).width = distance;
            lineNode.position = pos1;
            lineNode.angle = -this.getAngle(pos1, pos2);
            redata.push(item);
            lineArr.push(lineNode);
            this._lineArr.push(lineArr);
            this._itemArr.push(redata);
          }
          this._singleIndex = 0;
          this.schedule(this.showSingleLine, 2.5);
        };
        _proto.showSingleLine = function showSingleLine() {
          for (var i = 0; i < this._lineArr.length; i++) {
            for (var m = 0; m < this._lineArr[i].length; m++) {
              //                // this._lineArr[i][m].active = false;
              this._lineArr[i][m].scale = v3(1, 1, 1);
              this._lineArr[i][m].getComponent(UIOpacity).opacity = 0;
            }
            for (var _m = 0; _m < this._itemArr[i].length; _m++) {
              Tween.stopAllByTarget(this._itemArr[i][_m]);
              this._itemArr[i][_m].scale = v3(1, 1, 1);
            }
          }
          if (this._singleIndex > this._lineArr.length - 1) {
            this._singleIndex = 0;
            //            // this.unschedule(this.showSingleLine);
            //            // return;
          }

          for (var _i3 = 0; _i3 < this._lineArr.length; _i3++) {
            if (_i3 == this._singleIndex) {
              for (var _m2 = 0; _m2 < this._lineArr[_i3].length; _m2++) {
                //                    // this._lineArr[i][m].active = true;
                tween(this._lineArr[_i3][_m2]).to(0.4, {
                  scale: v3(1, 1.75, 1)
                }).to(0.15, {
                  scale: v3(1, 1, 1)
                }).to(0.4, {
                  scale: v3(1, 1.75, 1)
                }).to(0.15, {
                  scale: v3(1, 1, 1)
                }).start();
                this._lineArr[_i3][_m2].getComponent(UIOpacity).opacity = 255;
              }
              for (var _m3 = 0; _m3 < this._itemArr[_i3].length; _m3++) {
                tween(this._itemArr[_i3][_m3]).to(0.4, {
                  scale: v3(1.2, 1.2, 1)
                }).to(0.15, {
                  scale: v3(1, 1, 1)
                }).to(0.4, {
                  scale: v3(1.2, 1.2, 1)
                }).to(0.15, {
                  scale: v3(1, 1, 1)
                }).start();
                //                    // if (m == this._itemArr[i].length - 1) {
                //                    //     let node = this._itemArr[i][m].getChildByName(BTN_FRAMES_NAME);
                //                    //     if (node) {
                //                    //         node.active = true;
                //                    //     }
                //                    // }
              }

              this.showRewardTip();
            }
          }
          this._singleIndex = this._singleIndex + 1;
        };
        _proto.showRewardTip = function showRewardTip() {
          var data = this._model._resultData.Result[this._singleIndex];
          if (this.node_rewardTip.active == false || this._model._resultData.Result.length > 1) {
            this.node_rewardTip.active = true;
            var totalNum = data.CoinValue * data.SymbolScore;
            var baseNum = data.SymbolScore;
            var richtext = this.node_rewardTip.getChildByName("zhongText").getComponent(RichText);
            richtext.string = "";
            if (data.Symbol == "SCATTER") {
              richtext.string = richtext.string + "<img src=" + "'" + data.Symbol + "'" + " width=30 height=26/>" + "<color=#6f4209>" + " xSCATTER=Guay Miễn Phí " + "</color>";
            } else if (data.Symbol == "BONUS") {
              richtext.string = richtext.string + "<img src=" + "'" + data.Symbol + "'" + " width=30 height=26/>" + "<color=#6f4209>" + " xbonus=MiniGame " + "</color>";
            } else {
              richtext.string = richtext.string + "<color=#6f4209>" + data.LineType + " " + "</c>" + "<img src=" + "'" + data.Symbol + "'" + " width=30 height=26/>" + "<color=#6f4209>" + " trúng " + Common.numFormat(data.SymbolScore) + " " + "=" + " " + Common.numFormat(baseNum) + " " + "x" + " " + Common.numFormat(data.CoinValue) + " " + "=" + " " + Common.numFormat(totalNum) + "</color>";
            }
          }
        };
        _proto.clearStatus = function clearStatus() {
          this.miniBtn.getComponent(Button).interactable = false;
          this.scoreNum.string = "";
          Tween.stopAllByTarget(this.scoreNum.node);
          this.scoreNum.node.scale = v3(1, 1, 1);
          this._model._resultData = null;
          this._isStart = true;
          this._runTime = 0;
          this._rowIndex = 0;
          this._step = 50;
          this.speedShowRe = false;
          this._curType = this._curRunType;
          this.node_rewardTip.active = false;
          this.unscheduleAllCallbacks(); //清理所有定时器
          if (this._model._tyrGame == false) {
            this.showPotNum();
          }
          for (var _i4 = 0; _i4 < this._lineArr.length; _i4++) {
            for (var m = 0; m < this._lineArr[_i4].length; m++) {
              this._lineArr[_i4][m].active = false;
            }
            if (this._itemArr[_i4]) {
              for (var _m4 = 0; _m4 < this._itemArr[_i4].length; _m4++) {
                Tween.stopAllByTarget(this._itemArr[_i4][_m4]);
                this._itemArr[_i4][_m4].scale = v3(1, 1, 1);
              }
            }
          }
          var lineClass = find("gameLayer/lineClass", this.node);
          for (var i = 0; i < 25; i++) {
            var item = find("line" + (i + 1), lineClass);
            //            // item.getComponent(cc.Sprite).spriteFrame = this.btnFrames[0];
            var node = item.getChildByName(BTN_FRAMES_NAME);
            if (node) {
              node.active = false;
            }
          }
          this._lineArr = [];
          this._itemArr = [];
          find("gameLayer/lineLayer", this.node).removeAllChildren();
          var smallAni = find("publicLayer/smallAni", this.node);
          smallAni.active = false;
          var bigLayer = find("publicLayer/bigAni", this.node);
          bigLayer.active = false;
          this.unschedule(this.autoSelectBonus);
        };
        _proto.showResult = function showResult() {
          if (!this._isAuto) {
            this.startBtn.getComponent(sp.Skeleton).setAnimation(0, "normal", true);
          }
          this._isStart = false;
          this._inRe = true;
          this.drawLine();
          if (this._model._resultData.TotalBackScore > 0) {
            this.scoreNum.string = Common.numFormat(this._model._resultData.TotalBackScore);
            this.actScore();
          } else {
            //            // this._inRe=false;
            this.scoreNum.string = "";
          }
          if (this._model._tyrGame == false) {
            this.gold.string = Common.numFormat(this._model._curGold);
          }
          this.playSoundEffect(1);
          if (this._model._tyrGame == true) {
            this._model._curGold = this._model._resultData.TrialData.VndBalance;
            this.gold.string = Common.numFormat(this._model._curGold);
          }
          if (this._model._tyrGame == false && this._model._resultData.TotalBackScore > 0) {
            this.miniBtn.getComponent(Button).interactable = true;
          }
        };
        _proto.playSoundEffect = function playSoundEffect(idx) {
          if (idx == 1) {
            this.showDjAni();
          } else if (idx == 2) {
            this.showBonus();
          } else if (idx == 3) {
            this.showNomal();
          }
        };
        _proto.showNomal = function showNomal() {
          if (this._model._resultData.MusicType == "NORMAL") {
            this.playSound("nomal", false);
          }
          if (this._model._resultData.FreeGame == true) {
            this.playSound("pop", false);
            var freeAni = find("publicLayer/freeAni", this.node);
            freeAni.active = true;
            freeAni.getComponent(sp.Skeleton).setAnimation(0, "FS", false);
            freeAni.getComponent(sp.Skeleton).addAnimation(0, "FS2", true);
            var self = this;
            this.scheduleOnce(function () {
              self._inRe = false;
              freeAni.active = false;
              self.checkAuto();
            }, 2);
            this._model._curFreeTimes = this._model._resultData.FreeRemainTimes;
            this.freeLayer.active = true;
            this.freeLayer.getChildByName("freetimes").getComponent(Label).string = this._model._curFreeTimes + "";
          } else {
            this._inRe = false;
            this.checkAuto();
          }
        };
        _proto.checkAuto = function checkAuto() {
          if (this._isAuto == true) {
            var self = this;
            this.scheduleOnce(function () {
              self.CsdRunBtn("auto");
            }, 1);
          }
        };
        _proto.showBonus = function showBonus() {
          if (this._model._resultData.BonusGame == true) {
            this.playSound("pop", false);
            var freeAni = find("publicLayer/freeAni", this.node);
            freeAni.active = true;
            freeAni.getComponent(sp.Skeleton).setAnimation(0, "BG2", false);
            freeAni.getComponent(sp.Skeleton).addAnimation(0, "BG", true);
            this.scheduleOnce(function () {
              freeAni.active = false;
              var procol1 = this._model._serverId + "/" + eProto.CsdEnterBonus.split("/")[1];
              this._netManager.sendOnlineData(procol1, {});
            }, 2);
          } else {
            this.playSoundEffect(3);
          }
        };
        _proto.showSelectBonus = function showSelectBonus(data) {
          var _this4 = this;
          var bonues = find("BonusLayer", this.node);
          var bg1 = bonues.getChildByName("bg1");
          var item = bg1.getChildByName("bonusItem" + (this._bonusIndex + 1));
          if (!item) {
            this.showBeishuLayer(null);
            return;
          }
          item.getChildByName("img").active = false;
          if (data.State == 1) {
            item.getChildByName("shitou").active = false;
            item.getChildByName("score").active = true;
            item.getChildByName("score").getComponent(Label).string = "+" + Common.numFormat(data.CurSymbolScore);
            item.getComponent(Button).interactable = false;
            if (this.autoSelect) {
              this.CsdSelectBonus(Math.floor(Math.random() * 12));
            }
          } else {
            this.autoSelect = false;
            for (var i = 0; i < 12; i++) {
              var item1 = bg1.getChildByName("bonusItem" + (i + 1));
              item1.getComponent(Button).interactable = false;
            }
            this.playSound("bonus2", false);
            item.getChildByName("shitou").active = true;
            item.getChildByName("score").active = false;
            this.scheduleOnce(function () {
              bg1.active = false;
              _this4.showBeishuLayer(null);
            }, 1);
          }
          bonues.getChildByName("scoreBg").getChildByName("scoreNum").getComponent(Label).string = Common.numFormat(data.TotalSymbolScore);
        };
        _proto.autoSelectBonus = function autoSelectBonus() {
          this.autoSelect = true;
          this.CsdSelectBonus("" + (Math.floor(Math.random() * 12) + 1));
        };
        _proto.autoSelectBeiShu = function autoSelectBeiShu() {
          this.autoSelect = true;
          this.CsdSelectBeishu("" + Math.floor(Math.random() * 3));
        };
        _proto.CsdSelectBonus = function CsdSelectBonus(data) {
          if (data === void 0) {
            data = null;
          }
          this.playSound("bonus1", false);
          this._bonusIndex = parseInt(data) - 1;
          gts.Debug.Log("=CsdSelectBonus=this._bonusIndex==" + this._bonusIndex);
          var procol1 = this._model._serverId + "/" + eProto.CsdSelect.split("/")[1];
          this._netManager.sendOnlineData(procol1, {});
          if (!this.autoSelect) {
            this.unschedule(this.autoSelectBonus);
          }
        };
        _proto.CsdSelectBeishu = function CsdSelectBeishu(data) {
          this.playSound("bonus1", false);
          this._bonusIndex = parseInt(data);
          gts.Debug.Log("=CsdSelectBeishu=this._bonusIndex==" + this._bonusIndex);
          var procol1 = this._model._serverId + "/" + eProto.CsdSelectBeishu.split("/")[1];
          this._netManager.sendOnlineData(procol1, {
            Serial: this._bonusIndex
          });
          if (!this.autoSelect) {
            this.unschedule(this.autoSelectBeiShu);
          }
          this.autoSelect = false;
        };
        _proto.showBeishuLayer = function showBeishuLayer(data) {
          var _this5 = this;
          var bonues = find("BonusLayer", this.node);
          bonues.active = true;
          var bg1 = bonues.getChildByName("bg1");
          bg1.active = false;
          var bg2 = bonues.getChildByName("bg2");
          bg2.active = true;
          var bg3 = bonues.getChildByName("bg3");
          bg3.active = false;
          if (data == null) {
            for (var i = 0; i < 3; i++) {
              bg2.getChildByName("beishu" + (i + 1)).active = false;
              bg2.getChildByName("bonusItem" + (i + 1)).getChildByName("img1").active = true;
              bg2.getChildByName("bonusItem" + (i + 1)).getChildByName("img2").active = false;
              bg2.getChildByName("bonusItem" + (i + 1)).getComponent(Button).interactable = true;
            }
            this.scheduleOnce(this.autoSelectBeiShu, 8.0);
          } else {
            this.playSound("bonus3", false);
            for (var i = 0; i < 3; i++) {
              bg2.getChildByName("beishu" + (i + 1)).active = true;
              bg2.getChildByName("beishu" + (i + 1)).getComponent(Sprite).spriteFrame = this.beishu[data.TimesList[i] - 1];
              bg2.getChildByName("bonusItem" + (i + 1)).getComponent(Button).interactable = false;
              bg2.getChildByName("bonusItem" + (i + 1)).getChildByName("img1").active = false;
              bg2.getChildByName("bonusItem" + (i + 1)).getChildByName("img2").active = true;
              var y = bg2.getChildByName("beishu" + (i + 1)).getPosition().y;
              bg2.getChildByName("beishu" + (i + 1)).setPosition(bg2.getChildByName("beishu" + (i + 1)).position.x, y + 170);
              tween(bg2.getChildByName("beishu" + (i + 1))).to(0.5, {
                position: v3(bg2.getChildByName("beishu" + (i + 1)).position.x, y)
              }).start();
            }
            this.scheduleOnce(function () {
              _this5.playSound("bonus4", false);
              bg1.active = false;
              bg2.active = false;
              bg3.active = true;
              bonues.getChildByName("scoreBg").active = false;
              bg3.getChildByName("scoreNum").getComponent(Label).string = Common.numFormat(data.TotalSymbolScore);
              _this5.scoreNum.string = Common.numFormat(_this5._model._resultData.TotalBackScore + data.TotalSymbolScore);
              _this5.actScore();
              if (_this5._model._tyrGame == true) {
                _this5._model._curGold = _this5._model._curGold + data.TotalSymbolScore;
                _this5.gold.string = Common.numFormat(_this5._model._curGold);
              }
              _this5.scheduleOnce(function () {
                _this5._audioManager.playGameMusic(_this5.musicRes[musicName.bg], true);
                bonues.active = false;
                _this5.playSoundEffect(3);
              }, 2);
            }, 2);
          }
        };
        _proto.showBonusLayer = function showBonusLayer() {
          this._audioManager.playGameMusic(this.musicRes[musicName.bonusBg], true);
          var bonues = find("BonusLayer", this.node);
          bonues.active = true;
          var bg1 = bonues.getChildByName("bg1");
          bg1.active = true;
          var bg2 = bonues.getChildByName("bg2");
          bg2.active = false;
          var bg3 = bonues.getChildByName("bg3");
          bg3.active = false;
          bonues.getChildByName("bg2").active = false;
          bonues.getChildByName("bg3").active = false;
          bonues.getChildByName("scoreBg").active = true;
          bonues.getChildByName("scoreBg").getChildByName("scoreNum").getComponent(Label).string = "";
          for (var i = 0; i < 12; i++) {
            var item = bg1.getChildByName("bonusItem" + (i + 1));
            item.getChildByName("img").getComponent(Sprite).spriteFrame = this.bonusItems[this._model.BonusSymbolList[i] - 1];
            item.getChildByName("img").active = true;
            item.getChildByName("shitou").active = false;
            item.getChildByName("score").active = false;
            item.getComponent(Button).interactable = true;
          }
          this.scheduleOnce(this.autoSelectBonus, 8.0);
        };
        _proto.addScore = function addScore() {
          var curNum = parseInt(this._reslutLabel.getComponent(Label).string.replace(/,/g, ""));
          curNum = curNum + this._resultStep;
          if (curNum >= this._resultNum) {
            curNum = this._resultNum;
          }
          this._reslutLabel.getComponent(Label).string = Common.numFormat(curNum);
          if (curNum == this._resultNum) {
            this.unschedule(this.addScore);
            this._reslutLabel = null;
            this._resultStep = 0;
            this._resultNum = 0;
            var self = this;
            this.scheduleOnce(function () {
              var smallAni = find("publicLayer/smallAni", this.node);
              smallAni.active = false;
              var bigLayer = find("publicLayer/bigAni", this.node);
              bigLayer.active = false;
              self.playSoundEffect(2);
            }, 4);
          }
        };
        _proto.showDjAni = function showDjAni() {
          if (this._model._resultData.MusicType == "JACKPOT") {
            this.playSound("big", false);
            var bigLayer = find("publicLayer/bigAni", this.node);
            bigLayer.active = true;
            var caishen = bigLayer.getChildByName("caishen");
            caishen.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            caishen.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
            var scorenum = bigLayer.getChildByName("bigNum");
            scorenum.active = true;
            scorenum.getComponent(Label).string = "0";
            this._reslutLabel = scorenum;
            this._resultNum = this._model._resultData.TotalBackScore;
            this._resultStep = Math.floor(this._resultNum / 97);
            this.schedule(this.addScore, 0.03);
          } else if (this._model._resultData.MusicType == "500") {
            this.playSound("small", false);
            var smallAni = find("publicLayer/smallAni", this.node);
            smallAni.active = true;
            var _caishen = smallAni.getChildByName("smallpot");
            _caishen.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
            _caishen.getComponent(sp.Skeleton).addAnimation(0, "animation", true);
            var _scorenum = smallAni.getChildByName("smallNum");
            _scorenum.active = true;
            _scorenum.getComponent(Label).string = "0";
            this._reslutLabel = _scorenum;
            this._resultNum = this._model._resultData.TotalBackScore;
            this._resultStep = Math.floor(this._resultNum / 97);
            this.schedule(this.addScore, 0.03);
          } else {
            this.playSoundEffect(2);
          }
        };
        _proto.startAni = function startAni() {
          if (this._curType == 2) {
            //            //快速滚动
            this.schedule(this.runItems, 0.01);
          } else {
            this.schedule(this.runItems2, 0.01);
          }
        };
        _proto.runItems2 = function runItems2(dt) {
          this._runTime = this._runTime + 0.01;
          for (var i = 0; i < this.items.length; i++) {
            var col = i % 5;
            if (col > this._rowIndex - 1) {
              this.items[i].setPosition(this.items[i].position.x, this.items[i].getPosition().y - this._step);
              if (i == 4) {
                if (this.items[i].getPosition().y <= this._startPosList[5].y) {
                  this.reSetItem();
                }
              }
            }
          }
          //        // if (this._runTime >= 0.6 && this._model._resultData != null && this._curType == 1) {
          if (this._runTime >= 0.6 && this._curType == 1) {
            if (this._model._resultData != null) {
              this._runTime = 0.3;
              this._step = 50;
              this._rowIndex = this._rowIndex + 1;
              //                //  this._audioManager.playSound(this.gunlun,false)
              this.drawSPByRowData(null); //绘制一列
              if (this._rowIndex >= 5 || this.speedShowRe == true) {
                if (this._rowIndex + 1 <= 5) {
                  for (var i = this._rowIndex + 1; i <= 5; i++) {
                    this.drawSPByRowData(i);
                  }
                }
                this._model._posList = this._model._resultData.ResultPositions;
                var that = this;
                if (this._audioID_run) {
                  this.stopSound(this._audioID_run);
                  this._audioID_run = null;
                }
                this.scheduleOnce(function () {
                  //                        // that._audioManager.stopAllEffect();

                  //                        // cc.audioEngine.setMusicVolume(0.0);
                  //                        // let curSoundID = that.playSound("zd2", false);
                  //                        // if (curSoundID) {
                  //                        //     cc.audioEngine.setFinishCallback(curSoundID, () => {
                  //                        //         cc.audioEngine.setMusicVolume(1);
                  //                        //     });
                  //                        // }

                  that.showResult();
                }, 0.2);
                this.unschedule(this.runItems2);
              }
            }
            //            //  else if (this._runTime >= 2.0) {
            //            //     this._runTime = 0.6;
            //            //     //预防-没有结果空转
            //            //     let procol = this._model._serverId + "/" + CsdGameDef.eProto.CsdRun.split("/")[1];
            //            //     this._netManager.sendOnlineData(procol, { action: "HD_Spin", CoinValue: this._curCoin, CoinNum: this._curLine });
            //            // }
          }
        };

        _proto.runItems = function runItems(dt) {
          this._runTime = this._runTime + 0.01;
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].setPosition(this.items[i].position.x, this.items[i].getPosition().y - 50);
            if (i == 0) {
              if (this.items[i].getPosition().y <= this._startPosList[5].y) {
                this.reSetItem();
              }
            }
          }
          if (this._runTime >= 0.5) {
            if (this._model._resultData != null) {
              this._model._posList = this._model._resultData.ResultPositions;
              this.drawSPByData2(); //绘制最终结果图片
              var that = this;
              //                //   this._audioManager.playSound(this.gunlun,false)

              if (this._audioID_run) {
                this.stopSound(this._audioID_run);
                this._audioID_run = null;
              }
              this.scheduleOnce(function () {
                //                    // cc.audioEngine.setMusicVolume(0.0);
                //                    // let curSoundID = that.playSound("zd2", false);
                //                    // if (curSoundID) {
                //                    //     cc.audioEngine.setFinishCallback(curSoundID, () => {
                //                    //         cc.audioEngine.setMusicVolume(1);
                //                    //     });
                //                    // }

                that.showResult();
              }, 0.2);
              this.unschedule(this.runItems);
            }
            //            //  else if (this._runTime >= 2.0) {
            //            //     this._runTime = 0.5;

            //            //     //预防-没有结果空转
            //            //     let procol = this._model._serverId + "/" + CsdGameDef.eProto.CsdRun.split("/")[1];
            //            //     this._netManager.sendOnlineData(procol, { action: "HD_Spin", CoinValue: this._curCoin, CoinNum: this._curLine });
            //            // }
          }
        };

        _proto.update = function update(dt) {
          if (this.reOpen) {
            this.checkReOpen(dt);
          }
        };
        _proto.doingBet = function doingBet() {
          this.reOpen = true;
          var procol = this._model._serverId + "/" + eProto.CsdRun.split("/")[1];
          this._netManager.sendOnlineData(procol, {
            action: "HD_Spin",
            CoinValue: this._curCoin,
            CoinNum: this._curLine
          });
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
            this.doingBet();
          }
        };
        _proto.clearReOpen = function clearReOpen() {
          this.reOpen = false;
          this.reOpenTime = 0;
          this.reOpenTryTimes = 0;
        };
        _proto.reSetItem = function reSetItem() {
          this.changePosList();
          this.drawSPByData1();
        };
        _proto.changePosList = function changePosList() {
          for (var i = 0; i < this._model._posList.length; i++) {
            if (this._curType == 2 || this._curType == 1 && i > this._rowIndex - 1) {
              if (this._model._posList[i] == 0) {
                this._model._posList[i] = this._model._curList[i].length - 1;
              } else {
                this._model._posList[i] = this._model._posList[i] - 1;
              }
            }
          }
        };
        _proto.getColData = function getColData(data, curindex //根据卷轴位置 获取当前每个点的图案id
        ) {
          var value1 = data;
          var value0 = value1 == 0 ? this._model._curList[curindex - 1].length - 1 : value1 - 1;
          var value2 = value1 + 1 == this._model._curList[curindex - 1].length ? 0 : value1 + 1;
          var value3 = value2 + 1 == this._model._curList[curindex - 1].length ? 0 : value2 + 1;
          return [this._model._curList[curindex - 1][value0], this._model._curList[curindex - 1][value1], this._model._curList[curindex - 1][value2], this._model._curList[curindex - 1][value3]];
        };
        _proto.drawSPByData1 = function drawSPByData1() {
          //        //滚动时  根据卷轴位置绘制 当前显示图案 可能只显示4 3 2 1列
          var curPageData = this._model.getPicturesData();
          for (var i = 0; i < curPageData.length; i++) {
            if (i % 5 > this._rowIndex - 1) {
              this.items[i].active = true;
              var spritef = void 0;
              spritef = this.itemsp[spName[curPageData[i]]];
              this.items[i].getComponent(Sprite).spriteFrame = spritef;
              this.items[i].setPosition(this._startPosList[i].x, this._startPosList[i].y);
            }
          }
        };
        _proto.drawSPByData2 = function drawSPByData2() {
          //        //快速模式时 结束滚动重新绘制
          var curPageData = this._model.getPicturesData();
          for (var i = 0; i < curPageData.length; i++) {
            this.items[i].active = true;
            var spritef = void 0;
            spritef = this.itemsp[spName[curPageData[i]]];
            this.items[i].getComponent(Sprite).spriteFrame = spritef;
            this.items[i].setPosition(this._startPosList[i].x, this._startPosList[i].y);
            tween(this.items[i]).to(0.1, {
              position: v3(this.items[i].position.x, this._startPosList[i].y - 50)
            }).to(0.1, {
              position: v3(this.items[i].position.x, this._startPosList[i].y)
            }).start();
          }
        };
        _proto.drawSPByRowData = function drawSPByRowData(curindex //根据卷轴位置绘制 一列的图案 //一列一列
        ) {
          var curIdx = curindex == null ? this._rowIndex : curindex;
          var data = this.getColData(this._model._resultData.ResultPositions[curIdx - 1], curIdx);
          for (var i = 0; i < data.length; i++) {
            var index = 5 * i + curIdx - 1;
            var spritef = void 0;
            spritef = this.itemsp[spName[data[i]]];
            this.items[index].getComponent(Sprite).spriteFrame = spritef;
            this.items[index].setPosition(this._startPosList[index].x, this._startPosList[index].y);
            tween(this.items[index]).to(0.1, {
              position: v3(this.items[index].position.x, this._startPosList[index].y - 50)
            }).to(0.1, {
              position: v3(this.items[index].position.x, this._startPosList[index].y)
            }).start();
          }
        };
        _proto.changeRun = function changeRun(data) {
          this._curRunType = this._curRunType == 1 ? 2 : 1;
          this.tip.active = this._curRunType == 2;
        };
        _proto.changeCoin = function changeCoin(data) {
          if (this._model._curFreeTimes > 0 || this._isStart == true || this._isAuto == true) {
            return;
          }
          this._coinIndex = this._coinIndex + 1;
          if (this._coinIndex > this._model._coinList.length) {
            this._coinIndex = 1;
          }
          this._curCoin = this._model._coinList[this._coinIndex - 1];
          this.CoinNum.string = Common.ChangeMoneyShow(this._curCoin, 1);
          this.baseNum.string = Common.ChangeMoneyShow(this._curCoin * this._curLine, 1);
          if (this._model._tyrGame == false) {
            sys.localStorage.setItem("CsCoinNum", this._curCoin);
            sys.localStorage.setItem("CsCoinIndex", this._coinIndex);
          }
          this.bigPot.string = "0";
          this.initJackPot();
        };
        _proto.changeLine = function changeLine(data) {
          if (this._model._curFreeTimes > 0 || this._isStart == true || this._isAuto == true) {
            return;
          }
          var isAdd = data == "add";
          var lineCount = 0;
          var lineLayer = find("gameLayer/lineLayer", this.node);
          for (var i = lineLayer.children.length - 1; i >= 0; i--) {
            var childNode = lineLayer.children[i];
            if (-1 != childNode.name.indexOf("lineNode_") && -1 == childNode.name.indexOf("lineNode_check_")) {
              lineCount = isAdd ? lineCount++ : lineCount--;
            }
          }
          if (lineCount != this._lineIndex) {
            this._lineIndex = isAdd ? this._lineIndex + 1 : this._lineIndex - 1;
            if (this._lineIndex > 25) {
              this._lineIndex = 1;
            } else if (this._lineIndex < 1) {
              this._lineIndex = 25;
            }
          }
          this._curLine = this._model._lineType[this._lineIndex - 1];
          this.lineNum.string = this._curLine + "";
          this.baseNum.string = Common.ChangeMoneyShow(this._curCoin * this._curLine, 1);
          if (this._model._tyrGame == false) {
            sys.localStorage.setItem("CsLineType", this._curLine);
            sys.localStorage.setItem("CsLineIndex", this._lineIndex);
          }
          this.drawLineShow();
        };
        _proto.initJackPot = function initJackPot() {
          var procol1 = this._model._serverId + "/" + eProto.CsdGetJackpot.split("/")[1];
          this._netManager.sendOnlineData(procol1, {
            CoinNum: this._curCoin
          });
        };
        _proto.showPotNum = function showPotNum() {
          var curNum = parseInt(this.bigPot.string.replace(/,/g, ""));
          this._stepJackPotNum = Math.floor((this._model._bigjackPotNum - curNum) / 167);
          this.unschedule(this.addPotNum);
          if (this._stepJackPotNum > 0) {
            this.schedule(this.addPotNum, 0.03);
          } else {
            var self = this;
            var times = Math.random() * 3;
            this.scheduleOnce(function () {
              self.unschedule(self.addPotNum);
              var procol = this._model._serverId + "/" + eProto.CsdGetJackpot.split("/")[1];
              self._netManager.sendOnlineData(procol, {
                CoinNum: self._curCoin
              });
            }, times);
          }
        };
        _proto.addPotNum = function addPotNum() {
          var curNum = parseInt(this.bigPot.string.replace(/,/g, ""));
          curNum = curNum + this._stepJackPotNum;
          if (curNum >= this._model._bigjackPotNum) {
            curNum = this._model._bigjackPotNum;
            this.unschedule(this.addPotNum);
            this.showPotNum();
          }
          this.bigPot.string = Common.numFormat(curNum);
        };
        _proto.closePop = function closePop() {
          this._viewManager.closePopView();
        };
        _proto.disconnect = function disconnect() {
          Common.showNetTips();
        };
        _proto.gameHide = function gameHide() {
          this._netManager.waitServiceSendData();
        };
        _proto.gameShow = function gameShow() {
          this._netManager.waitServiceSendData();
        };
        _proto.setMusic = function setMusic(data) {
          var CsdSetting = find("Canvas/CsdSetting");
          if (data == "yinyue") {
            //            //音乐
            this._audioManager.setMusicStatus(!this._audioManager._soundMusic);
            this._audioManager.playGameMusic(this.musicRes[musicName.bg], true);
            var open = find("tip_bg/yue_sound/open", CsdSetting);
            open.active = !open.active;
            var close = find("tip_bg/yue_sound/close", CsdSetting);
            close.active = !open.active;
          } else if (data == "yinxiao") {
            //            //音效
            this._audioManager.setSoundStatus(!this._audioManager._soundEffect);
            var _open = find("tip_bg/xiao_sound/open", CsdSetting);
            _open.active = !_open.active;
            var _close = find("tip_bg/xiao_sound/close", CsdSetting);
            _close.active = !_open.active;
          }
        };
        _proto.showBigRecord = function showBigRecord() {
          var _this6 = this;
          Common.loadPopBuddle("prefab/CsdBigRecord", this._buddle, function () {}, function (csdBigRecord) {
            var bigRecord = instantiate(csdBigRecord);
            _this6._viewManager.popNodeView(bigRecord, true);
            _this6._netManager.sendOnlineData(eProto.CsdGetBigPoolList, {
              Offset: 0,
              PageSize: 6
            });
          }, true);
        };
        _proto.initEvent = function initEvent() {
          var _this7 = this;
          //        // 监听网络协议
          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.on(this._configManager.eventTransform.disConnect, this.disconnect, this); //断线
          this._eventManager.on(this._configManager.eventTransform.gameHide, this.gameHide, this); //切到后台

          //        // 监听按钮
          this._eventManager.on(this._configManager.ButtonEvent.closePop, this.closePop, this); //显示规则
          this._eventManager.on(this._configManager.protocolCsd.CsdLine, this.changeLine, this); //xian type
          this._eventManager.on(this._configManager.protocolCsd.CsdCoin, this.changeCoin, this); //yingbi
          this._eventManager.on(this._configManager.protocolCsd.CsdRunType, this.changeRun, this); //speed

          this._eventManager.on(this._configManager.protocolCsd.CsdBigrecord, this.showBigRecord, this);
          this._eventManager.on(this._configManager.protocolCsd.CsdAutoRun, this.onClick_auto, this); //自动玩
          this._eventManager.on(this._configManager.protocolCsd.CsdRunBtn, this.CsdRunBtn, this); //speed
          this._eventManager.on(this._configManager.protocolCsd.CsdSelectBonus, this.CsdSelectBonus, this); //speed
          this._eventManager.on(this._configManager.protocolCsd.CsdSelectBsBtn, this.CsdSelectBeishu, this); //speed

          this._eventManager.on(this._configManager.protocolCsd.sound, this.setMusic, this);
          this._eventManager.on(this._configManager.protocolCsd.CsdTryBtn, this.CsdTryBtn, this);
          this._eventManager.on(this._configManager.protocolCsd.CsdMini, this.CsdMini, this);
          this._eventManager.on(this._configManager.protocolCsd.CsdSelectMiniBtn, this.CsdSelectMiniBtn, this);

          //        // this._eventManager.on("auto", this.changeAuto, this);

          BtnArea.OnClicked(this.startBtn.parent, function (btn) {
            _this7.CsdRunBtn("run");
          }, this);
        };
        _proto.removeEvent = function removeEvent() {
          //        // 监听网络协议
          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.off(this._configManager.eventTransform.disConnect, this.disconnect, this); //断线
          this._eventManager.off(this._configManager.eventTransform.gameHide, this.gameHide, this); //切到后台

          //        // 监听按钮
          this._eventManager.off(this._configManager.ButtonEvent.closePop, this.closePop, this); //显示规则
          this._eventManager.off(this._configManager.protocolCsd.CsdLine, this.changeLine, this); //xian type
          this._eventManager.off(this._configManager.protocolCsd.CsdCoin, this.changeCoin, this); //yingbi
          this._eventManager.off(this._configManager.protocolCsd.CsdRunType, this.changeRun, this); //speed

          this._eventManager.off(this._configManager.protocolCsd.CsdBigrecord, this.showBigRecord, this);
          this._eventManager.off(this._configManager.protocolCsd.CsdRunBtn, this.CsdRunBtn, this); //speed
          this._eventManager.off(this._configManager.protocolCsd.CsdSelectBonus, this.CsdSelectBonus, this); //speed
          this._eventManager.off(this._configManager.protocolCsd.CsdSelectBsBtn, this.CsdSelectBeishu, this); //speed

          this._eventManager.off(this._configManager.protocolCsd.sound, this.setMusic, this);
          this._eventManager.off(this._configManager.protocolCsd.CsdTryBtn, this.CsdTryBtn, this);
          this._eventManager.off(this._configManager.protocolCsd.CsdMini, this.CsdMini, this);
          this._eventManager.off(this._configManager.protocolCsd.CsdSelectMiniBtn, this.CsdSelectMiniBtn, this);

          //        // this._eventManager.off("auto", this.changeAuto, this);
          this._eventManager.off(this._configManager.protocolCsd.CsdAutoRun, this.onClick_auto, this); //自动玩
        };

        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          this.removeEvent();
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case this._configManager.protocolHall.getWallet:
            case this._configManager.protocolHall.pushWallet:
              {
                if (this._isStart == false) {
                  this.gold.string = Common.numFormat(this._model._curGold);
                }
                break;
              }
            case eProto.CsdExitGame:
              {
                Common.returnToHall(this);
                break;
              }
            case eProto.CsdEnter:
              {
                //                // 进入游戏
                this.initGameData();
                break;
              }
            case eProto.CsdGetJackpot:
              {
                //                // 大奖池
                this.showPotNum();
                break;
              }
            case eProto.CsdEnterBonus:
              {
                //                // enter bonus
                this.showBonusLayer();
                break;
              }
            case eProto.CsdSelect:
              {
                //                // enter bonus
                this.showSelectBonus(data);
                break;
              }
            case eProto.CsdSelectBeishu:
              {
                //                // enter bonus
                this.showBeishuLayer(data);
                break;
              }
            case eProto.CsdChangeTry:
              {
                //                // enter bonus
                if (this._model._tyrGame == true) {
                  this.gold.string = Common.numFormat(this._model._curGold);
                }
                this.drawSPByData();
                break;
              }
            case eProto.CsdCheckInRoom:
              {
                //                // 检查是否再房间
                Common.returnToHall(this);
                break;
              }
            case eProto.CsdEnterMini:
              {
                //                // enter mini
                this.CsdMiniSelectLayer(data);
                break;
              }
            case eProto.CsdSelectMini:
              {
                //                // enter mini
                this.CsdMiniSelectLayer2(data);
                break;
              }
            case eProto.CsdShowResult:
              {
                this.clearReOpen();
                this.startAni();
                break;
              }
            case eProto.CsdRun:
              {
                this.clearReOpen();
                break;
              }
          }
        };
        return CsdGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bigPot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lineNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "baseNum", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "CoinNum", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scoreNum", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tip", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tip_auto", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "freeLayer", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "miniBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "itemsp", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lineSp", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "musicRes", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bonusItems", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "beishu", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "startBtn", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "pre_line", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "pre_lineShort", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "btnFrames", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_rewardTip", [_dec24], {
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

System.register("chunks:///_virtual/CsdShowToast.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Tween, UIOpacity, tween, v3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ee169rJCmhB5KPYQ7Oqd/T+", "CsdShowToast", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CsdShowToast = exports('default', (_dec = ccclass("CsdShowToast"), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CsdShowToast, _Component);
        function CsdShowToast() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "moveByNum", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "time1", _descriptor2, _assertThisInitialized(_this));
          _this._orginY = void 0;
          return _this;
        }
        var _proto = CsdShowToast.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          this._orginY = this.node.getPosition().y;
        };
        _proto.onEnable = function onEnable() {
          Tween.stopAllByTarget(this.node);
          this.node.setPosition(this.node.position.x, this._orginY - this.moveByNum);
          this.node.getComponent(UIOpacity).opacity = 255;
          tween(this.node).to(this.time1, {
            position: v3(this.node.position.x, this._orginY)
          }).to(1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        _proto.onDisable = function onDisable() {
          Tween.stopAllByTarget(this.node);
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return CsdShowToast;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveByNum", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "time1", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/CsdGame', 'chunks:///_virtual/CsdGame'); 
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