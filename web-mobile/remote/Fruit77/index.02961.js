System.register("chunks:///_virtual/Fruit77", ['./Fruit77Ctrl.ts', './Fruit77Def.ts', './Fruit77GameBtn.ts', './Fruit77MainView.ts', './Fruit77Model.ts', './Fruit77Utils.ts', './FruitSelfRecord.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Fruit77Ctrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './Fruit77Model.ts', './I18n.ts', './ViewManager.ts', './Fruit77Def.ts', './Fruit77Utils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, Fruit77Model, i18n, ViewManager, eProto, maxRecords, Fruit77Utils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
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
      Fruit77Model = module.Fruit77Model;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      maxRecords = module.maxRecords;
    }, function (module) {
      Fruit77Utils = module.Fruit77Utils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5c06fmNeYRGn5B34y/HVlzN", "Fruit77Ctrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Fruit77Ctrl = exports('Fruit77Ctrl', (_dec = ccclass("Fruit77Ctrl"), _dec(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(Fruit77Ctrl, _GameDef$BaseCtrl);
        function Fruit77Ctrl() {
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
          _this._model = Fruit77Model.instance;
          return _this;
        }
        var _proto = Fruit77Ctrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete Fruit77Ctrl._instance;
          Fruit77Ctrl._instance = null;
          Fruit77Model.destroy();
          Fruit77Utils.destroy();
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
        }
        //    /**请求进入 */
        ;

        _proto.reqEnter = function reqEnter() {
          NetManager.instance.sendOnlineData(eProto.HD_Enter, {});
        }
        //    /**请求退出 */
        ;

        _proto.reqLeave = function reqLeave() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }
        //    /**
        //     * 请求下注
        //     * @param data ==
        //     */
        ;

        _proto.reqBet = function reqBet() {
          var betInfo = [];
          var _baseScore = Fruit77Model.instance.baseScore;
          for (var i = 0; i < 8; i++) {
            var bet = Fruit77Model.instance.betList[i];
            betInfo[i] = bet * _baseScore;
          }
          DataManager.instance.isChangeGold = false;
          Fruit77Model.instance.userGold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            Bet: betInfo
          });
        }
        //    /**
        //     * 请求个人下注记录
        //     * @param idx 1++
        //     */
        ;

        _proto.reqSelfRecord = function reqSelfRecord(idx) {
          if (idx === void 0) {
            idx = 1;
          }
          NetManager.instance.sendOnlineData(eProto.HD_GetLastRecord, {
            idx: idx
          });
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.Log("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            //            //提示错误
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          var emitData = data.Data;
          switch (data.cmd) {
            case eProto.HD_Enter:
              {
                ViewManager.instance.closeWait();
                var enterData = data.Data;
                Fruit77Model.instance.posSymbol = enterData.posSymbol;
                Fruit77Model.instance.baseScoreCFG = enterData.coinVal;
                if (enterData.todayRecords) {
                  if (enterData.todayRecords.length > maxRecords) {
                    Fruit77Model.instance.recordList = enterData.todayRecords.slice(enterData.todayRecords.length - maxRecords);
                  } else {
                    Fruit77Model.instance.recordList = enterData.todayRecords;
                  }
                }
                break;
              }
            case eProto.HD_Bet:
              {
                var betData = data.Data;
                Fruit77Model.instance.betResult = betData;

                //                // Fruit77Model.instance.betResult.rewardType = "RewardBar";
                //                // Fruit77Model.instance.betResult.rewardPos = [6, 20, 14, 4];
                //                // //test
                //                // if (Fruit77Model.instance.betResult.rewardType == "RewardNormal") {
                //                //     Fruit77Model.instance.betResult.rewardType = "RewardBar";

                //                //     // //开火车
                //                //     // let istart = Math.floor(Math.random() * 23);
                //                //     // for (let i = 0; i < Math.floor(Math.random() * 6 + 6); i++) {
                //                //     //     Fruit77Model.instance.betResult.rewardPos.push((--istart + 24) % 24);
                //                //     // }

                //                //     // for (let i = 0; i < Math.floor(Math.random() * 10 + 3); i++) {
                //                //     //     Fruit77Model.instance.betResult.rewardPos.push(Math.floor(Math.random() * 23));
                //                //     // }

                //                //     for (let i = 1; i < 6; i++) {
                //                //         Fruit77Model.instance.betResult.rewardPos.push((this._curLightPos + i) % 24);
                //                //     }

                //                //     //大满贯
                //                //     // for (let i = 1; i < 24; i++) {
                //                //     //     Fruit77Model.instance.betResult.rewardPos.push((this._curLightPos + i) % 24);
                //                //     // }

                //                //     gts.Debug.Log("==self.rewardPos==" + JSON.stringify(Fruit77Model.instance.betResult.rewardPos));
                //                // }

                break;
              }
            case eProto.HD_Leave:
              {
                ViewManager.instance.closePopGame(GameDef.Game.Fruit77);
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                //                // 断线重连
                Common.closeWait();
                //                // NetManager.instance.removeWaitServicePush();

                this.reqEnter();
                break;
              }
          }
          this.emitUpdateView(data.cmd, emitData);
        };
        return Fruit77Ctrl;
      }(GameDef.BaseCtrl)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Fruit77Def.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "069aaARoENI9q6PAntdAHG2", "Fruit77Def", undefined);
      var cBundle = exports('cBundle', "Fruit77");
      var maxRecords = exports('maxRecords', 10);
      var addTimes = exports('addTimes', 4);
      var redusTimes = exports('redusTimes', 5);
      var nomalStarDelay = exports('nomalStarDelay', 0.25); //ms
      var nomalEndDelay = exports('nomalEndDelay', 0.75); //ms
      var nomalSpeed = exports('nomalSpeed', 24 / 1000); //ms
      var addSpeed = exports('addSpeed', (nomalStarDelay - nomalSpeed) / addTimes);
      var redusSpeed = exports('redusSpeed', (nomalEndDelay - nomalSpeed) / redusTimes);

      /**音效 */
      var eSound = exports('eSound', /*#__PURE__*/function (eSound) {
        eSound["run_0"] = "sound/run_0";
        eSound["run_1"] = "sound/run_1";
        eSound["run_2"] = "sound/run_2";
        eSound["run_3"] = "sound/run_3";
        eSound["run_4"] = "sound/run_4";
        eSound["run_start"] = "sound/run_start";
        eSound["run_end"] = "sound/run_end";
        eSound["run_list"] = "sound/run_list";
        return eSound;
      }({}));
      var eRewardType = exports('eRewardType', /*#__PURE__*/function (eRewardType) {
        eRewardType[eRewardType["RewardNormal"] = 0] = "RewardNormal";
        eRewardType[eRewardType["RewardXiaoSanYuan"] = 1] = "RewardXiaoSanYuan";
        eRewardType[eRewardType["RewardDaSanYuan"] = 2] = "RewardDaSanYuan";
        eRewardType[eRewardType["RewardDaSiXi"] = 3] = "RewardDaSiXi";
        eRewardType[eRewardType["RewardZhongHengSiHai"] = 4] = "RewardZhongHengSiHai";
        eRewardType[eRewardType["RewardXianNvSanHua"] = 5] = "RewardXianNvSanHua";
        eRewardType[eRewardType["RewardTianLongBaBu"] = 6] = "RewardTianLongBaBu";
        eRewardType[eRewardType["RewardJiuLianBaoDeng"] = 7] = "RewardJiuLianBaoDeng";
        eRewardType[eRewardType["RewardChaoJiDaManGuan"] = 8] = "RewardChaoJiDaManGuan";
        eRewardType[eRewardType["RewardKaiHuoChe"] = 9] = "RewardKaiHuoChe";
        eRewardType[eRewardType["RewardLucky"] = 10] = "RewardLucky";
        eRewardType[eRewardType["RewardBar"] = 11] = "RewardBar";
        return eRewardType;
      }({})); //bar
      var arrLightPos = exports('arrLightPos', [{
        x: -297,
        y: 53
      }, {
        x: -297,
        y: 129
      }, {
        x: -297,
        y: 203
      }, {
        x: -221,
        y: 203
      }, {
        x: -147,
        y: 203
      }, {
        x: -71,
        y: 203
      }, {
        x: 6,
        y: 203
      }, {
        x: 82,
        y: 203
      }, {
        x: 158,
        y: 203
      }, {
        x: 234,
        y: 203
      }, {
        x: 310,
        y: 203
      }, {
        x: 310,
        y: 129
      }, {
        x: 310,
        y: 53
      }, {
        x: 310,
        y: -25
      }, {
        x: 310,
        y: -99
      }, {
        x: 234,
        y: -99
      }, {
        x: 158,
        y: -99
      }, {
        x: 82,
        y: -99
      }, {
        x: 6,
        y: -99
      }, {
        x: -71,
        y: -99
      }, {
        x: -147,
        y: -99
      }, {
        x: -221,
        y: -99
      }, {
        x: -297,
        y: -99
      }, {
        x: -297,
        y: -25
      }]);
      var eGameStatus = exports('eGameStatus', /*#__PURE__*/function (eGameStatus) {
        eGameStatus[eGameStatus["NONE"] = 0] = "NONE";
        eGameStatus[eGameStatus["BET"] = 1] = "BET";
        eGameStatus[eGameStatus["RUNING"] = 2] = "RUNING";
        eGameStatus[eGameStatus["END"] = 3] = "END";
        return eGameStatus;
      }({}));
      var eRunType = exports('eRunType', /*#__PURE__*/function (eRunType) {
        eRunType[eRunType["NONE"] = 0] = "NONE";
        eRunType[eRunType["nomal"] = 1] = "nomal";
        eRunType[eRunType["foward"] = 2] = "foward";
        eRunType[eRunType["reverse"] = 3] = "reverse";
        eRunType[eRunType["zhsh"] = 4] = "zhsh";
        eRunType[eRunType["dmg"] = 5] = "dmg";
        eRunType[eRunType["train"] = 6] = "train";
        return eRunType;
      }({})); //开火车

      // coinVal:[100 1000 10000]
      // posSymbol:[leftLucky apple smallBell bigOrange bigBell middleBar bigBar
      //     smallBar apple bigLemon bigWaterMelon smallWatermelon rightLucky apple
      //     smallOrange bigOrange bigBell smallSeven bigSeven apple smallLemon bigLemon bigStar smallStar
      // ]
      // todayRecords:[]]

      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["checkInRoom"] = "slotFruit/HD_CheckPlayerInGame";
        eProto["HD_Enter"] = "slotFruit/HD_Enter";
        eProto["HD_Bet"] = "slotFruit/HD_Bet";
        eProto["HD_Leave"] = "slotFruit/HD_Leave";
        eProto["HD_GetLastRecord"] = "slotFruit/HD_GetLastRecord";
        return eProto;
      }({}));
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["update_betInfo"] = "update_betInfo";
        eEvent["update_baseScore"] = "update_baseScore";
        return eEvent;
      }({}));
      var mapSymbol = exports('mapSymbol', ["leftLucky", "apple", "bigBell", "bigOrange", "bigBell", "bar", "bar", "bar", "apple", "bigLemon", "bigWaterMelon", "bigWaterMelon", "leftLucky", "apple", "bigOrange", "bigOrange", "bigBell", "bigSeven", "bigSeven", "apple", "bigLemon", "bigLemon", "bigStar", "bigStar"]);
      var symbolRate = exports('symbolRate', [0, 5, 3, 10, 20, 50, 120, 25, 5, 15, 20, 3, 0, 5, 3, 10, 20, 3, 40, 5, 3, 15, 30, 3]);
      var mapBetIndex = exports('mapBetIndex', ["bar", "bigSeven", "bigStar", "bigWaterMelon", "bigBell", "bigLemon", "bigOrange", "apple"]);
      /**
       * 游戏配置
       */

      /**
       *下注
       */
      ////////////////////////////
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Fruit77GameBtn.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './GUtil.ts', './ViewManager.ts', './Common.ts', './Fruit77Utils.ts', './Fruit77Def.ts', './Fruit77Model.ts', './EventManager.ts', './Fruit77Ctrl.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Button, find, sp, instantiate, Component, GameDef, GUtil, ViewManager, Common, Fruit77Utils, eSound, eEvent, Fruit77Model, EventManager, Fruit77Ctrl, i18n;
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
      Button = module.Button;
      find = module.find;
      sp = module.sp;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      Fruit77Utils = module.Fruit77Utils;
    }, function (module) {
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      Fruit77Model = module.Fruit77Model;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Fruit77Ctrl = module.Fruit77Ctrl;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4c9c6fGvjJPz45sB+GbGUOQ", "Fruit77GameBtn", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Fruit77GameBtn = exports('default', (_dec = ccclass("Fruit77GameBtn"), _dec2 = menu("game/Fruit77/Fruit77GameBtn"), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Fruit77GameBtn, _Component);
        function Fruit77GameBtn() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "Layout_bet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_autoRun", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Fruit77GameBtn.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          //        // for (const btnNode of this.Layout_bet.children) {
          //        //     btnNode.on("click", this.onBtnBet, this);
          //        // }
          for (var _iterator = _createForOfIteratorHelperLoose(this.Layout_bet.children), _step; !(_step = _iterator()).done;) {
            var btnNode = _step.value;
            btnNode.on(Node.EventType.TOUCH_START, this.onBtnBet, this);
          }
        };
        _proto.onDisable = function onDisable() {
          //        // for (const btnNode of this.Layout_bet.children) {
          //        //     btnNode.off("click", this.onBtnBet, this);
          //        // }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.Layout_bet.children), _step2; !(_step2 = _iterator2()).done;) {
            var btnNode = _step2.value;
            btnNode.off("click", this.onBtnBet, this);
          }
        };
        _proto.start = function start() {};
        _proto.btnDelayEnable = function btnDelayEnable(btnNode) {
          var spine = find("Background", btnNode.node).getComponent(sp.Skeleton);
          spine.setAnimation(0, "quay", false);
          btnNode.interactable = false;
          this.scheduleOnce(function () {
            if (!Fruit77Model.instance.isRuning) {
              btnNode.interactable = true;
              spine.setAnimation(0, "idle", false);
            }
          }, 2.0);
        }
        //    // update (dt) {}
        //    //Node_gameBtn//////////////////////////////////////
        //    /**
        //     *开始
        //     */
        ;

        _proto.onBtnStartRun = function onBtnStartRun() {
          if (Fruit77Model.instance.totalBet == 0) {
            Common.showTip(i18n.lang[10011]);
            return;
          }
          if (Fruit77Model.instance.isRuning) {
            Common.showTip(i18n.lang[10010]);
            return;
          }
          this.btnDelayEnable(this.Button_run);
          Fruit77Ctrl.instance.reqBet();
        }
        //    /**
        //     *自动开始
        //     */
        ;

        _proto.onBtnAutoRun = function onBtnAutoRun() {
          if (Fruit77Model.instance.totalBet == 0) {
            Common.showTip(i18n.lang[10011]);
            this.autoBtnCheck(false);
            return;
          }
          if (!Fruit77Model.instance.isRuning && !Fruit77Model.instance.isAutoRun) {
            this.Button_run.interactable = false;
            Fruit77Ctrl.instance.reqBet();
          }
          Fruit77Model.instance.isAutoRun = !Fruit77Model.instance.isAutoRun;
          this.autoBtnCheck(Fruit77Model.instance.isAutoRun);
        };
        _proto.autoBtnCheck = function autoBtnCheck(isCheck) {
          var spine = find("Background", this.Button_autoRun.node).getComponent(sp.Skeleton);
          if (isCheck) {
            spine.setAnimation(0, "life", true);
          } else {
            spine.setAnimation(0, "idle", true);
          }
          if (!Fruit77Model.instance.isRuning && !Fruit77Model.instance.isAutoRun) {
            this.Button_run.interactable = true;
          }
        }
        //    /**
        //     *下注
        //     */
        ;

        _proto.onBtnBet = function onBtnBet(event) {
          if (Fruit77Model.instance.isRuning) {
            Common.showTip(i18n.lang[10010]);
            return;
          }
          var index = null;
          var nodeName = event.target.name;
          switch (nodeName) {
            case "Button_all":
              {
                for (var i = 0; i < 8; i++) {
                  Fruit77Model.instance.betList[i]++;
                  if (Fruit77Model.instance.betList[i] > 99) {
                    Fruit77Model.instance.betList[i] = 99;
                    //                        //tishi
                  }
                }

                Fruit77Utils.instance.playSound(eSound["run_2"]);
                break;
              }
            default:
              {
                index = parseInt(nodeName.replace("Button_", ""));
                Fruit77Model.instance.betList[index]++;
                if (Fruit77Model.instance.betList[index] > 99) {
                  Fruit77Model.instance.betList[index] = 99;
                  //                    //tishi
                }

                Fruit77Utils.instance.playSound(eSound["run_" + index % 5]);
                break;
              }
          }
          EventManager.instance.emit(eEvent.update_betInfo, index);
        }
        //    /**
        //     *清除下注
        //     */
        ;

        _proto.onBtnClearBet = function onBtnClearBet() {
          if (Fruit77Model.instance.isRuning) {
            Common.showTip(i18n.lang[10010]);
            return;
          }
          Fruit77Model.instance.clearBet();
          this.autoBtnCheck(false);
          EventManager.instance.emit(eEvent.update_betInfo);
          if (Fruit77Model.instance.isAutoRun) {
            Fruit77Model.instance.isAutoRun = false;
            this.Button_run.interactable = true;
          }
        }
        //    /**
        //     *底注++
        //     */
        ;

        _proto.onBtnBaseScoreAdd = function onBtnBaseScoreAdd() {
          if (Fruit77Model.instance.isRuning) {
            Common.showTip(i18n.lang[10010]);
            return;
          }
          Fruit77Model.instance.baseScoreIndex++;
          if (Fruit77Model.instance.baseScoreIndex >= Fruit77Model.instance.baseScoreCFG.length) {
            Fruit77Model.instance.baseScoreIndex = 0;
          }
          EventManager.instance.emit(eEvent.update_baseScore);
        }
        //    /**
        //     *底注--
        //     */
        ;

        _proto.onBtnBaseScoreRedus = function onBtnBaseScoreRedus() {
          if (Fruit77Model.instance.isRuning) {
            Common.showTip(i18n.lang[10010]);
            return;
          }
          Fruit77Model.instance.baseScoreIndex--;
          if (Fruit77Model.instance.baseScoreIndex < 0) {
            Fruit77Model.instance.baseScoreIndex = Fruit77Model.instance.baseScoreCFG.length - 1;
          }
          EventManager.instance.emit(eEvent.update_baseScore);
        }
        //    //////////////////////////////
        //    //Node_uiBtn/////////////////////
        //    /**
        //     *关闭
        //     */
        ;

        _proto.onBtnClose = function onBtnClose() {
          ViewManager.instance.closePopGame(GameDef.Game.Fruit77);
          Fruit77Ctrl.instance.reqLeave();
        }
        //    //////////////////////////////
        //    //显示游戏规则
        ;

        _proto.onBtnRule = function onBtnRule() {
          Common.showLog("显示游戏规则");
          Common.loadPopBuddle("prefab/Help", Fruit77Utils.instance.bundle, function () {}, function (help) {
            var helpLayer = instantiate(help);
            ViewManager.instance.popNodeView(helpLayer, true);
          }, true);
        }
        //    //路单
        ;

        _proto.onBtnPath = function onBtnPath() {
          //        // let self = this;
          //        // Common.loadPopBuddle(
          //        //     "prefab/pathList",
          //        //     Fruit77Utils.instance.bundle,
          //        //     () => {},
          //        //     (pathList) => {
          //        //         let pathListLayer = cc.instantiate(pathList);
          //        //         ViewManager.instance.popNodeView(pathListLayer, true);
          //        //     },
          //        //     true
          //        // );
        }
        //    //显示排行榜
        ;

        _proto.onBtnRank = function onBtnRank() {
          GUtil.openRank("slotFruit");
        }
        //    //个人下注记录
        ;

        _proto.onBtnRecord = function onBtnRecord() {
          //        // GUtil.openRecord("slotFruit");

          GUtil.openRecord("slotFruit");
        }
        //    //开奖详情
        ;

        _proto.onBtnGameRecord = function onBtnGameRecord() {
          Fruit77Utils.instance.loadPopView("selfRecord");
        };
        return Fruit77GameBtn;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Layout_bet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_autoRun", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec5], {
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

System.register("chunks:///_virtual/Fruit77MainView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './Fruit77Ctrl.ts', './Fruit77Model.ts', './Fruit77Def.ts', './EventManager.ts', './Fruit77Utils.ts', './NetManager.ts', './ConfigManager.ts', './DataManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, sp, v3, instantiate, Tween, UIOpacity, Sprite, tween, GameDef, Fruit77Ctrl, Fruit77Model, eEvent, eProto, arrLightPos, maxRecords, eRunType, eRewardType, nomalStarDelay, nomalSpeed, addSpeed, redusTimes, redusSpeed, eSound, EventManager, Fruit77Utils, NetManager, ConfigManager, DataManager, UserProxyEvent, UserKey, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      sp = module.sp;
      v3 = module.v3;
      instantiate = module.instantiate;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      tween = module.tween;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Fruit77Ctrl = module.Fruit77Ctrl;
    }, function (module) {
      Fruit77Model = module.Fruit77Model;
    }, function (module) {
      eEvent = module.eEvent;
      eProto = module.eProto;
      arrLightPos = module.arrLightPos;
      maxRecords = module.maxRecords;
      eRunType = module.eRunType;
      eRewardType = module.eRewardType;
      nomalStarDelay = module.nomalStarDelay;
      nomalSpeed = module.nomalSpeed;
      addSpeed = module.addSpeed;
      redusTimes = module.redusTimes;
      redusSpeed = module.redusSpeed;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Fruit77Utils = module.Fruit77Utils;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserProxyEvent = module.UserProxyEvent;
      UserKey = module.UserKey;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "4e968gr+oNK5bMF50rPIomi", "Fruit77MainView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Fruit77MainView = exports('default', (_dec = ccclass("Fruit77MainView"), _dec2 = menu("game/Fruit77/Fruit77MainView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Button), _dec15 = property(sp.Skeleton), _dec16 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Fruit77MainView, _GameDef$BaseView);
        function Fruit77MainView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          //    // @property(cc.Node)
          //    // Node_gameIcon: cc.Node = null;
          _initializerDefineProperty(_this, "Node_record", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_itemTemp", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "NodeLight", _descriptor3, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // NodeLightTagRoot: cc.Node = null;
          _initializerDefineProperty(_this, "Sprite_light", _descriptor4, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // Sprite_lightTag: cc.Node = null;
          _initializerDefineProperty(_this, "Label_totalBet", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_baseScore", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_IssueNo", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betInfo", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_light_bonus", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bonusTip", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_centerEffect", _descriptor14, _assertThisInitialized(_this));
          _this.runType = eRunType.NONE;
          _this.endPos = 0;
          _this.dtTimes = 0;
          _this.curDelayTimes = 0;
          _this.totalTimes = 0;
          _this._curLightPos = 0;
          _this.rewardIndex = 0;
          return _this;
        }
        var _proto = Fruit77MainView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // arrLightPos: cc.Vec2[] = [];
        //    // arrLightTagPos: cc.Vec2[] = [];
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, Fruit77Ctrl.instance);

          //        // let children = this.Node_gameIcon.children;
          //        // for (let i = 0; i < children.length; i++) {
          //        //     this.arrLightPos.push(cc.v2(children[i].position));
          //        // }

          //        // let Node_lgihtTag = this.Node_gameIcon.parent.getChildByName("Node_lgihtTag");
          //        // children = Node_lgihtTag.children;
          //        // for (let i = 0; i < children.length; i++) {
          //        //     this.arrLightTagPos.push(cc.v2(children[i].position));
          //        // }

          var children = this.Node_betInfo.children;
          for (var i = 0; i < 8; i++) {
            children[i].getComponent(Label).string = "00";
          }
          Fruit77Utils.instance.loadSymbol(function () {
            Common.showWait();
            Fruit77Ctrl.instance.reqEnter();
          });
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);
          //        //
          EventManager.instance.on(eEvent.update_baseScore, this.onEvent_updateBaseScore, this);
          EventManager.instance.on(eEvent.update_betInfo, this.onEvent_updateBetInfo, this);
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, this.setGold, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          EventManager.instance.off(eEvent.update_baseScore, this.onEvent_updateBaseScore, this);
          EventManager.instance.off(eEvent.update_betInfo, this.onEvent_updateBetInfo, this);
          DataManager.instance.off(UserProxyEvent.CHANGE_GOLD, this.setGold, this);
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
          DataManager.instance.isChangeGold = true;
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_Enter:
              {
                this.initGame(data);
                break;
              }
            case eProto.HD_Bet:
              {
                this.startRun(data);
                break;
              }
          }
        }
        //    /**初始化游戏 */
        ;

        _proto.initGame = function initGame(data) {
          //        //开奖记录
          this.updateRecord();

          //        //
          this.onEvent_updateBaseScore();

          //        //设置上一局亮灯位置
          this._curLightPos = Fruit77Model.instance.recordList && Fruit77Model.instance.recordList.length > 0 ? Fruit77Model.instance.recordList[Fruit77Model.instance.recordList.length - 1] : 0;
          this.Sprite_light.position = v3(arrLightPos[this._curLightPos].x, arrLightPos[this._curLightPos].y);
          //        // this.Sprite_lightTag.position = cc.v3(this.arrLightTagPos[this._curLightPos]);

          //        //金币更新
          this.setGold();
          this.blinkLast();
        };
        _proto.onEvent_updateBetInfo = function onEvent_updateBetInfo(index) {
          var children = this.Node_betInfo.children;
          if (!index) {
            for (var i = 0; i < 8; i++) {
              var bet = Fruit77Model.instance.betList[i];
              var strBet = bet < 10 ? "0" + bet : "" + bet;
              children[i].getComponent(Label).string = strBet;
            }
          } else {
            var _bet = Fruit77Model.instance.betList[index];
            var _strBet = _bet < 10 ? "0" + _bet : "" + _bet;
            children[index].getComponent(Label).string = _strBet;
          }
          this.Label_totalBet.string = Common.ChangeMoneyShow(Fruit77Model.instance.totalBet, 2);
        };
        _proto.onEvent_updateBaseScore = function onEvent_updateBaseScore() {
          this.Label_baseScore.string = Common.ChangeMoneyShow(Fruit77Model.instance.baseScore, 0);
          this.Label_totalBet.string = Common.ChangeMoneyShow(Fruit77Model.instance.totalBet, 2);
        };
        _proto.updateRecord = function updateRecord() {
          if (!Fruit77Model.instance.recordList) {
            return;
          }
          for (var i = 0; i < Fruit77Model.instance.recordList.length; i++) {
            var itemTemp = this.Node_record.children[i];
            if (!itemTemp) {
              itemTemp = instantiate(this.Node_itemTemp);
              this.Node_record.addChild(itemTemp);
            }
            itemTemp.active = true;
            var Sprite_icon = itemTemp.getChildByName("Sprite_icon");
            Tween.stopAllByTarget(Sprite_icon);
            Tween.stopAllByTarget(Sprite_icon.getComponent(UIOpacity));
            var recordPos = Fruit77Model.instance.recordList[i];
            var strRecord = Fruit77Model.instance.posSymbol[recordPos];
            Sprite_icon.getComponent(Sprite).spriteFrame = Fruit77Utils.instance.symbol[strRecord];
            Sprite_icon.getComponent(UIOpacity).opacity = 255;
          }
        };
        _proto.addRecord = function addRecord(rewardPos) {
          if (!Fruit77Model.instance.recordList) {
            return;
          }

          //        //
          if (Fruit77Model.instance.recordList.length > maxRecords - 1) {
            Fruit77Model.instance.recordList.shift();
            this.Node_record.children.shift().removeFromParent();
          }
          var itemTemp = this.Node_record.children[Fruit77Model.instance.recordList.length];
          if (!itemTemp) {
            itemTemp = instantiate(this.Node_itemTemp);
            itemTemp.name = Fruit77Model.instance.betResult.gameNo;
            this.Node_record.addChild(itemTemp);
          }
          itemTemp.active = true;
          var Sprite_icon = itemTemp.getChildByName("Sprite_icon");
          var strRecord = Fruit77Model.instance.posSymbol[rewardPos];
          Sprite_icon.getComponent(Sprite).spriteFrame = Fruit77Utils.instance.symbol[strRecord];
          Fruit77Model.instance.recordList.push(rewardPos);
        };
        _proto.blinkNew = function blinkNew(delayTime) {
          var _this2 = this;
          if (delayTime === void 0) {
            delayTime = 1.0;
          }
          tween(this.NodeLight).stop().delay(delayTime).call(function () {
            //                // if (!Fruit77Model.instance.isAutoRun) {
            for (var i = 0; i < _this2.NodeLight.children.length; i++) {
              Tween.stopAllByTarget(_this2.NodeLight.children[i].getComponent(UIOpacity));
              _this2.NodeLight.children[i].getComponent(UIOpacity).opacity = 255;
              tween(_this2.NodeLight.children[i].getComponent(UIOpacity)).blink(1.0, 1).repeatForever().start();
            }
            //                // }
          }).call(function () {
            for (var i = 0; i < Fruit77Model.instance.betResult.rewardPos.length; i++) {
              _this2.addRecord(Fruit77Model.instance.betResult.rewardPos[i]);
            }

            //                // if (!Fruit77Model.instance.isAutoRun) {
            for (var _iterator = _createForOfIteratorHelperLoose(_this2.Node_record.children), _step; !(_step = _iterator()).done;) {
              var recordNode = _step.value;
              if (recordNode.name == Fruit77Model.instance.betResult.gameNo) {
                var icon = recordNode.getChildByName("Sprite_icon");
                Tween.stopAllByTarget(icon.getComponent(UIOpacity));
                tween(icon.getComponent(UIOpacity)).blink(1.0, 1).repeatForever().start();
              }
            }
            //                // }
          }).start();
        };
        _proto.stopBlink = function stopBlink() {
          for (var i = 0; i < this.Node_record.children.length; i++) {
            var childNode = this.Node_record.children[i];
            var Sprite_icon = childNode.getChildByName("Sprite_icon");
            Tween.stopAllByTarget(Sprite_icon.getComponent(UIOpacity));
            Tween.stopAllByTarget(Sprite_icon);
            Sprite_icon.getComponent(UIOpacity).opacity = 255;
          }

          //        //清理亮灯
          this.NodeLight.destroyAllChildren();
          //        // this.NodeLightTagRoot.removeAllChildren();

          this.Sprite_light.active = true;
          Tween.stopAllByTarget(this.Sprite_light);
          Tween.stopAllByTarget(this.Sprite_light.getComponent(UIOpacity));
          this.Sprite_light.getComponent(UIOpacity).opacity = 255;
        };
        _proto.blinkLast = function blinkLast() {
          var _this3 = this;
          this.scheduleOnce(function () {
            _this3.Sprite_light.active = true;
            Tween.stopAllByTarget(_this3.Sprite_light);
            Tween.stopAllByTarget(_this3.Sprite_light.getComponent(UIOpacity));
            _this3.Sprite_light.getComponent(UIOpacity).opacity = 255;
            tween(_this3.Sprite_light.getComponent(UIOpacity)).blink(1.5, 1).repeatForever().start();

            //            // this.Sprite_lightTag.active = true;

            var lastRecord = _this3.Node_record.children[_this3.Node_record.children.length - 1];
            var Sprite_icon = lastRecord.getChildByName("Sprite_icon");
            Tween.stopAllByTarget(Sprite_icon);
            Tween.stopAllByTarget(Sprite_icon.getComponent(UIOpacity));
            Sprite_icon.getComponent(UIOpacity).opacity = 255;
            tween(Sprite_icon.getComponent(UIOpacity)).blink(1.5, 1).repeatForever().start();
          }, 0.1);
        };
        _proto.reset = function reset() {
          for (var i = 0; i < this.Node_record.children.length - 1; i++) {
            var childNode = this.Node_record.children[i];
            var Sprite_icon = childNode.getChildByName("Sprite_icon");
            Tween.stopAllByTarget(Sprite_icon);
            Tween.stopAllByTarget(Sprite_icon.getComponent(UIOpacity));
            Sprite_icon.getComponent(UIOpacity).opacity = 255;
          }

          //        //清理亮灯
          this.NodeLight.destroyAllChildren();
          //        // this.NodeLightTagRoot.removeAllChildren();

          this.Node_winTip.active = false;
          this.Sprite_light.active = true;
          Tween.stopAllByTarget(this.Sprite_light.getComponent(UIOpacity));
          Tween.stopAllByTarget(this.Sprite_light);
          this.Sprite_light.getComponent(UIOpacity).opacity = 255;
          if (!Fruit77Model.instance.isAutoRun) {
            tween(this.Sprite_light.getComponent(UIOpacity)).blink(1.5, 1).repeatForever().start();
          }

          //        // this.Sprite_lightTag.active = true;

          this.Sprite_light_bonus.active = false;
        };
        _proto.doReqBet = function doReqBet() {
          this.reset();
          Fruit77Ctrl.instance.reqBet();
          this.schedule(Fruit77Ctrl.instance.reqBet, 3);
        };
        _proto.startRun = function startRun(data) {
          this.unschedule(Fruit77Ctrl.instance.reqBet);

          //        //更新金币
          this.updateGold(true);
          this.Node_centerEffect.setAnimation(0, "idle", true);
          this.Node_bonusTip.setCompleteListener(null);
          this.Node_bonusTip.node.active = false;
          Fruit77Model.instance.isRuning = true;
          if (!Fruit77Model.instance.isAutoRun) {
            this.reset();
          }
          this.stopBlink();
          Tween.stopAllByTarget(this.Node_winTip);
          Tween.stopAllByTarget(this.Node_winTip.getComponent(UIOpacity));
          this.Node_winTip.active = false;

          //        //显示期号
          this.Label_IssueNo.string = "#" + data.gameNo;
          this.doLightRun(this._curLightPos, data.rewardPos[0], eRunType.nomal);
          gts.Debug.Log("==self._curLightPos==" + this._curLightPos);
          gts.Debug.Log("==self.rewardPos==" + data.rewardPos[0]);
        };
        _proto.setGold = function setGold() {
          this.Label_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
        };
        _proto.updateGold = function updateGold(isBet) {
          if (isBet === void 0) {
            isBet = false;
          }
          if (isBet) {
            DataManager.instance.setUserDataForKey(UserKey.GOLD, Fruit77Model.instance.userGold - Fruit77Model.instance.totalBet);
            DataManager.instance.isChangeGold = true;
            DataManager.instance.emit(UserProxyEvent.CHANGE_GOLD);
            DataManager.instance.isChangeGold = false;
          } else {
            DataManager.instance.isChangeGold = true;
            NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          }
        };
        _proto.endRun = function endRun() {
          var _this4 = this;
          var isBonus = false;
          //        //大奖效果
          var rewardType = eRewardType[Fruit77Model.instance.betResult.rewardType];
          if (rewardType > eRewardType.RewardNormal && rewardType <= eRewardType.RewardBar) {
            switch (rewardType) {
              case eRewardType.RewardChaoJiDaManGuan:
                {
                  this.Node_centerEffect.setAnimation(0, "lv3", true);
                  break;
                }
              case eRewardType.RewardKaiHuoChe:
                {
                  this.Node_centerEffect.setAnimation(0, "lv2", true);
                  break;
                }
              default:
                {
                  this.Node_centerEffect.setAnimation(0, "lv1", true);
                  break;
                }
            }
            isBonus = true;
            this.Node_bonusTip.node.active = true;
            rewardType = rewardType > 9 ? rewardType % 10 + 1 : rewardType;
            this.Node_bonusTip.setAnimation(0, "win" + rewardType, false);
            this.Node_bonusTip.setCompleteListener(null);
            this.Node_bonusTip.setCompleteListener(function () {
              _this4.Node_bonusTip.node.active = false;
              if (Fruit77Model.instance.isAutoRun) {
                _this4.doReqBet();
              }
            });
            var Label_win = this.Node_bonusTip.node.getChildByName("Label_win");
            Label_win.getComponent(Label).string = "+" + Common.numFormat(Fruit77Model.instance.betResult.rewardMoney);
            Label_win.scale = v3(0.1, 0.1, 1);
            Label_win.getComponent(UIOpacity).opacity = 100;
            tween(Label_win).stop().to(0.5, {
              scale: v3(1, 1, 1)
            }).start();
            tween(Label_win.getComponent(UIOpacity)).stop().to(0.5, {
              opacity: 255
            }).start();
          } else {
            //            //中奖提示
            if (Fruit77Model.instance.betResult.rewardMoney > 0) {
              var _Label_win = this.Node_winTip.getChildByName("Label_win");
              _Label_win.getComponent(Label).string = "+" + Common.numFormat(Fruit77Model.instance.betResult.rewardMoney);
              this.Node_winTip.setPosition(this.Node_winTip.position.x, 0);
              this.Node_winTip.getComponent(UIOpacity).opacity = 100;
              tween(this.Node_winTip).stop().to(0.5, {
                position: v3(this.Node_winTip.position.x, 135)
              }).delay(3.0).start();
              tween(this.Node_winTip.getComponent(UIOpacity)).stop().to(0.5, {
                opacity: 255
              }).delay(3.0).to(0.25, {
                opacity: 0
              }).start();
              this.Node_winTip.active = true;
            }
          }

          //        //更新金币
          this.updateGold(false);
          var delay = Fruit77Model.instance.isAutoRun ? 1.0 : 0.5;
          this.blinkNew(delay - 0.25);
          this.scheduleOnce(function () {
            Fruit77Model.instance.isRuning = false;
            if (Fruit77Model.instance.isAutoRun) {
              if (!isBonus) {
                _this4.doReqBet();
              }
            } else {
              _this4.Button_run.interactable = true;
            }
          }, delay);
        };
        _proto.doLightRun = function doLightRun(startPos, endPos, runType) {
          this.dtTimes = 0;
          this.runType = runType ? runType : this.runType;
          switch (this.runType) {
            case eRunType.nomal:
              {
                this.endPos = endPos;
                var dis = endPos - startPos;
                var rounds = 2;
                this.totalTimes = rounds * 24 + (dis > 0 ? dis : dis + 24);
                this.curDelayTimes = nomalStarDelay;

                //                // gts.Debug.Log("==self.totalTimes==" + this.totalTimes);

                this.schedule(this.updatelight_nomal);
                this.rewardIndex = 0;
                break;
              }
            case eRunType.foward:
            case eRunType.reverse:
              {
                this.endPos = endPos;
                var _dis = runType == eRunType.foward ? endPos - startPos : startPos - endPos;
                var _rounds = 1;
                this.totalTimes = _rounds * 24 + (_dis > 0 ? _dis : _dis + 24);
                this.curDelayTimes = nomalSpeed;

                //                // gts.Debug.Log("==self.totalTimes==" + this.totalTimes);

                this.rewardIndex++;
                this.schedule(this.updatelight_reverse);
                break;
              }
            case eRunType.zhsh:
              {
                this.endPos = endPos;
                this.totalTimes = Fruit77Model.instance.betResult.rewardPos.length - 1;
                this.curDelayTimes = 0.25;
                gts.Debug.Log("==self.totalTimes=zhsh=" + this.totalTimes);
                this.rewardIndex++;
                this.schedule(this.updatelight_zhsh);
                break;
              }
            case eRunType.dmg:
              {
                this.endPos = endPos;
                this.totalTimes = Fruit77Model.instance.betResult.rewardPos.length - 1;
                this.curDelayTimes = nomalSpeed;

                //                // gts.Debug.Log("==self.totalTimes==" + this.totalTimes);

                this.rewardIndex++;
                this.schedule(this.updatelight_dmg);
                break;
              }
            case eRunType.train:
              {
                this.endPos = endPos;
                var _dis2 = endPos - startPos;
                var _rounds2 = 2;
                this.totalTimes = _rounds2 * 24 + (_dis2 > 0 ? _dis2 : _dis2 + 24);
                this.curDelayTimes = nomalStarDelay;

                //                // gts.Debug.Log("==self.totalTimes==" + this.totalTimes);

                this.schedule(this.updatelight_train);
                break;
              }
          }
        };
        _proto.updatelight_nomal = function updatelight_nomal(dt) {
          var _this5 = this;
          this.dtTimes += dt;
          if (this.dtTimes > this.curDelayTimes) {
            this.dtTimes -= this.curDelayTimes;
            this.Sprite_light_bonus.active = !this.Sprite_light_bonus.active;

            //            //更新延迟时间
            if (this.totalTimes > 24 && this.curDelayTimes > nomalSpeed) {
              var curDelayTimes = this.curDelayTimes - addSpeed;
              this.curDelayTimes = curDelayTimes < nomalSpeed ? nomalSpeed : curDelayTimes;
            } else if (this.totalTimes < redusTimes) {
              this.curDelayTimes += redusSpeed;
            } else {
              this.curDelayTimes = nomalSpeed;
            }

            //            // gts.Debug.Log("==self.curDelayTimes==" + this.curDelayTimes);

            //            //更新POS
            this._curLightPos = ++this._curLightPos % 24;
            this.Sprite_light.position = v3(arrLightPos[this._curLightPos].x, arrLightPos[this._curLightPos].y);

            //            //停止判断
            this.totalTimes--;
            if (this.totalTimes <= 0 && this._curLightPos == this.endPos) {
              this.unschedule(this.updatelight_nomal);
              Fruit77Utils.instance.playOneShot(eSound.run_end);
              var newSprite_light = instantiate(this.Sprite_light);
              this.NodeLight.addChild(newSprite_light);
              this.Sprite_light.active = false;
              //                //
              gts.Debug.Log("==self._curLightPos==" + this._curLightPos);
              var nextPos = Fruit77Model.instance.betResult.rewardPos[this.rewardIndex + 1];
              if (nextPos >= 0) {
                this.Sprite_light_bonus.active = true;
                this.scheduleOnce(function () {
                  _this5.Sprite_light.active = true;
                  Tween.stopAllByTarget(newSprite_light.getComponent(UIOpacity));
                  Tween.stopAllByTarget(newSprite_light);
                  newSprite_light.getComponent(UIOpacity).opacity = 255;
                  var rewardType = eRewardType[Fruit77Model.instance.betResult.rewardType];
                  switch (rewardType) {
                    case eRewardType.RewardZhongHengSiHai:
                      {
                        nextPos = Fruit77Model.instance.betResult.rewardPos[Fruit77Model.instance.betResult.rewardPos.length - 1];
                        _this5.doLightRun(_this5._curLightPos, nextPos, eRunType.zhsh);
                        break;
                      }
                    case eRewardType.RewardChaoJiDaManGuan:
                      {
                        nextPos = Fruit77Model.instance.betResult.rewardPos[Fruit77Model.instance.betResult.rewardPos.length - 1];
                        _this5.doLightRun(_this5._curLightPos, nextPos, eRunType.dmg);
                        break;
                      }
                    case eRewardType.RewardKaiHuoChe:
                      {
                        nextPos = Fruit77Model.instance.betResult.rewardPos[1];
                        _this5.doLightRun(_this5._curLightPos, nextPos, eRunType.train);
                        break;
                      }
                    default:
                      {
                        _this5.doLightRun(_this5._curLightPos, nextPos, eRunType.foward);
                        break;
                      }
                  }
                }, 0.5);
              } else {
                this.Sprite_light_bonus.active = false;
                this.endRun();
              }
            } else {
              Fruit77Utils.instance.playOneShot(eSound.run_0);
            }
          }
        }
        //    /**正反跑灯 */
        ;

        _proto.updatelight_reverse = function updatelight_reverse(dt) {
          var _this6 = this;
          this.dtTimes += dt;
          if (this.dtTimes > this.curDelayTimes) {
            this.dtTimes -= this.curDelayTimes;

            //            //更新POS
            this._curLightPos = this.runType == eRunType.foward ? ++this._curLightPos % 24 : (--this._curLightPos + 24) % 24;
            this.Sprite_light.position = v3(arrLightPos[this._curLightPos].x, arrLightPos[this._curLightPos].y);

            //            //停止判断
            this.totalTimes--;
            if (this.totalTimes <= 0 && this._curLightPos == this.endPos) {
              this.unschedule(this.updatelight_reverse);
              Fruit77Utils.instance.playOneShot(eSound.run_end);
              var newSprite_light = instantiate(this.Sprite_light);
              this.NodeLight.addChild(newSprite_light);
              this.Sprite_light.active = false;

              //                //runEnd
              var nextPos = Fruit77Model.instance.betResult.rewardPos[this.rewardIndex + 1];
              if (nextPos >= 0) {
                this.scheduleOnce(function () {
                  _this6.Sprite_light.active = true;
                  //                        //
                  _this6.doLightRun(_this6._curLightPos, nextPos, _this6.rewardIndex % 2 == 0 ? eRunType.foward : eRunType.reverse);
                }, 0.5);
              } else {
                //                    //显示结算
                this.endRun();
              }
            } else {
              eRunType.foward ? Fruit77Utils.instance.playOneShot(eSound.run_0) : Fruit77Utils.instance.playOneShot(eSound.run_1);
            }
          }
        }
        //    /**纵横四海 */
        ;

        _proto.updatelight_zhsh = function updatelight_zhsh(dt) {
          this.dtTimes += dt;
          if (this.dtTimes > this.curDelayTimes) {
            this.dtTimes -= this.curDelayTimes;
            if (this.rewardIndex > 1) {
              var newSprite_light = instantiate(this.Sprite_light);
              Tween.stopAllByTarget(newSprite_light);
              Tween.stopAllByTarget(newSprite_light.getComponent(UIOpacity));
              newSprite_light.getComponent(UIOpacity).opacity = 255;
              this.NodeLight.addChild(newSprite_light);
            }

            //            //更新POS
            this._curLightPos = ++this._curLightPos % 24;
            this.Sprite_light.position = v3(arrLightPos[this._curLightPos].x, arrLightPos[this._curLightPos].y);
            this.rewardIndex++;

            //            //停止判断
            this.totalTimes--;
            if (this.totalTimes <= 0 && this._curLightPos == this.endPos) {
              this.unschedule(this.updatelight_zhsh);
              Fruit77Utils.instance.playOneShot(eSound.run_end);
              var _newSprite_light = instantiate(this.Sprite_light);
              Tween.stopAllByTarget(_newSprite_light);
              Tween.stopAllByTarget(_newSprite_light.getComponent(UIOpacity));
              _newSprite_light.getComponent(UIOpacity).opacity = 255;
              this.NodeLight.addChild(_newSprite_light);
              Tween.stopAllByTarget(this.Sprite_light);
              Tween.stopAllByTarget(this.Sprite_light.getComponent(UIOpacity));
              this.Sprite_light.getComponent(UIOpacity).opacity = 255;
              this.Sprite_light.active = false;
              this.endRun();
            } else {
              var strSound = "run_" + (this.rewardIndex % 4 + 1);
              Fruit77Utils.instance.playOneShot(eSound[strSound]);
            }
          }
        }
        //    /**超级大满贯 */
        ;

        _proto.updatelight_dmg = function updatelight_dmg(dt) {
          this.dtTimes += dt;
          if (this.dtTimes > this.curDelayTimes) {
            this.dtTimes -= this.curDelayTimes;

            //            //更新POS
            this._curLightPos = ++this._curLightPos % 24;
            this.Sprite_light.position = v3(arrLightPos[this._curLightPos].x, arrLightPos[this._curLightPos].y);
            var newSprite_light = instantiate(this.Sprite_light);
            this.NodeLight.addChild(newSprite_light);
            this.rewardIndex++;

            //            //停止判断
            this.totalTimes--;
            if (this.totalTimes <= 0 && this._curLightPos == this.endPos) {
              this.unschedule(this.updatelight_dmg);
              Fruit77Utils.instance.playOneShot(eSound.run_end);
              this.Sprite_light.active = false;
              this.endRun();
            } else {
              var strSound = "run_" + (this.rewardIndex % 4 + 1);
              Fruit77Utils.instance.playSound(eSound[strSound]);
            }
          }
        }
        //    /**开火车 */
        ;

        _proto.updatelight_train = function updatelight_train(dt) {
          this.dtTimes += dt;
          if (this.dtTimes > this.curDelayTimes) {
            this.dtTimes -= this.curDelayTimes;

            //            //更新延迟时间
            if (this.totalTimes > 24 && this.curDelayTimes > nomalSpeed) {
              var curDelayTimes = this.curDelayTimes - addSpeed;
              this.curDelayTimes = curDelayTimes < nomalSpeed ? nomalSpeed : curDelayTimes;
            } else if (this.totalTimes < redusTimes + 1) {
              this.curDelayTimes += redusSpeed;
            } else {
              this.curDelayTimes = nomalSpeed;
            }

            //            //更新POS
            this._curLightPos = ++this._curLightPos % 24;
            this.Sprite_light.position = v3(arrLightPos[this._curLightPos].x, arrLightPos[this._curLightPos].y);

            //            //添加火车灯
            if (this._curLightPos != Fruit77Model.instance.betResult.rewardPos[0] && this.NodeLight.children.length < Fruit77Model.instance.betResult.rewardPos.length - 1) {
              var newSprite_light = instantiate(this.Sprite_light);
              newSprite_light.getComponent(UIOpacity).opacity = 255 / (Fruit77Model.instance.betResult.rewardPos.length - 1);
              this.NodeLight.addChild(newSprite_light);

              //                //更新火车opacity
              for (var i = 1; i < this.NodeLight.children.length; i++) {
                if (this.NodeLight.children[i].getComponent(UIOpacity).opacity < 255) {
                  this.NodeLight.children[i].getComponent(UIOpacity).opacity += 255 / (Fruit77Model.instance.betResult.rewardPos.length - 1);
                }
              }
            }

            //            // gts.Debug.Log("==this.this.NodeLight.children.length==" + this.NodeLight.children.length);

            //            // gts.Debug.Log("==this.Fruit77Model.instance.betResult.rewardPos.length==" + Fruit77Model.instance.betResult.rewardPos.length);

            //            // gts.Debug.Log("==this._curLightPos==" + this._curLightPos);
            //            //更新火车Pos
            for (var _i = 1; _i < this.NodeLight.children.length; _i++) {
              var posIndex = (this._curLightPos - _i + 24) % 24;
              //                // gts.Debug.Log("==posIndex==" + posIndex);
              this.NodeLight.children[_i].position = v3(arrLightPos[posIndex].x, arrLightPos[posIndex].y);
            }

            //            //停止判断
            this.totalTimes--;
            if (this.totalTimes <= 0 && this._curLightPos == this.endPos) {
              this.unschedule(this.updatelight_train);
              Fruit77Utils.instance.playSound(eSound.run_list);

              //                // gts.Debug.Log("==this.NodeLight.children.length=11=" + this.NodeLight.children.length);
              var _newSprite_light2 = instantiate(this.Sprite_light);
              this.NodeLight.addChild(_newSprite_light2);
              this.Sprite_light.active = false;

              //                // gts.Debug.Log("==this.NodeLight.children.length=22=" + this.NodeLight.children.length);

              this.endRun();
            } else {
              var strSound = "run_" + (this.rewardIndex % 4 + 1);
              Fruit77Utils.instance.playSound(eSound[strSound]);
            }
          }
        };
        return Fruit77MainView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_record", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_itemTemp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "NodeLight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_light", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalBet", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_baseScore", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_IssueNo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_betInfo", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_light_bonus", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_winTip", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Node_bonusTip", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_centerEffect", [_dec16], {
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

System.register("chunks:///_virtual/Fruit77Model.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, _createForOfIteratorHelperLoose, cclegacy, GameDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2c10aJ+X7ZP/qLsHymyV78+", "Fruit77Model", undefined);
      var Fruit77Model = exports('Fruit77Model', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(Fruit77Model, _GameDef$BaseSington);
        function Fruit77Model() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          //    /////////////////////////
          _this._serverId = "";
          _this.userGold = 0;
          //    /**当前底注 */
          _this.baseScoreCFG = [];
          _this.baseScoreIndex = 0;
          //    /**当前下注 */
          _this.betList = [0, 0, 0, 0, 0, 0, 0, 0];
          _this.isAutoRun = false;
          _this.posSymbol = null;
          _this.recordList = [];
          _this.betResult = null;
          _this.isRuning = false;
          return _this;
        }
        //    ////////////////////////////////////////////
        Fruit77Model.destory = function destory() {
          delete this._instance;
          this._instance = null;
        }
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 清理下注信息
        //     */
        ;

        var _proto = Fruit77Model.prototype;
        _proto.clearBet = function clearBet() {
          this.betList = [0, 0, 0, 0, 0, 0, 0, 0];
        }
        //    ////////////////////////////////////////////////////////////
        ;

        _createClass(Fruit77Model, [{
          key: "baseScore",
          get: function get() {
            return this.baseScoreCFG[this.baseScoreIndex];
          }
        }, {
          key: "totalBet",
          get: function get() {
            var _total = 0;
            var _baseScore = this.baseScore;
            for (var _iterator = _createForOfIteratorHelperLoose(this.betList), _step; !(_step = _iterator()).done;) {
              var bet = _step.value;
              _total += bet * _baseScore;
            }
            return _total;
          }
        }]);
        return Fruit77Model;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Fruit77Utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './ViewManager.ts', './Common.ts', './Fruit77Def.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, AudioClip, instantiate, SpriteFrame, assetManager, GameDef, AudioManager, ViewManager, Common, cBundle;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
      instantiate = module.instantiate;
      SpriteFrame = module.SpriteFrame;
      assetManager = module.assetManager;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      cBundle = module.cBundle;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8dc07Rpi7RL5qPCnQgG4/7p", "Fruit77Utils", undefined);
      var Fruit77Utils = exports('Fruit77Utils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(Fruit77Utils, _GameDef$BaseSington);
        function Fruit77Utils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this._bundle = null;
          _this.symbol = {};
          return _this;
        }
        var _proto = Fruit77Utils.prototype;
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this._bundle.preloadDir("sound");
        };
        _proto.playBgMusic = function playBgMusic() {
          AudioManager.instance.playBgMusic();
          // cc.audioEngine.setMusicVolume(0.4);
        };

        _proto.playSound = function playSound(soundPath) {
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err) {
              return;
            }
            AudioManager.instance.playSound(audioClip, false);
            // cc.audioEngine.setEffectsVolume(1);
          });
        };

        _proto.playOneShot = function playOneShot(soundPath) {
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err) {
              return;
            }
            AudioManager.instance.playOneShot(audioClip);
            // cc.audioEngine.setEffectsVolume(1);
          });
        };

        _proto.loadPopView = function loadPopView(path) {
          //        // AudioManager.instance.playbuttonEffect();
          if (!this._bundle) {
            gts.Debug.Log("this._bundle error");
            return;
          }
          path = "prefab/" + path;
          Common.loadPopBuddle(path, this._bundle, function () {}, function (prefab) {
            var popLayer = instantiate(prefab);
            popLayer.active = true;
            ViewManager.instance.popNodeView(popLayer, true);
          }, true);
        };
        _proto.loadSymbol = function loadSymbol(bCall) {
          var _this2 = this;
          this.bundle.loadDir("textures/symbol", SpriteFrame, function (error, arrAssert) {
            for (var _iterator = _createForOfIteratorHelperLoose(arrAssert), _step; !(_step = _iterator()).done;) {
              var assert = _step.value;
              _this2.symbol[assert.name] = assert;
            }
            if (bCall) {
              bCall();
            }
          });
        };
        _createClass(Fruit77Utils, [{
          key: "bundle",
          get: function get() {
            if (!this._bundle) {
              this._bundle = assetManager.getBundle(cBundle);
              this.preLoad();
            }
            return this._bundle;
          }
        }]);
        return Fruit77Utils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FruitSelfRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './EventManager.ts', './Common.ts', './Fruit77Ctrl.ts', './Fruit77Def.ts', './Fruit77Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, ScrollView, find, instantiate, Sprite, Component, i18n, EventManager, Common, Fruit77Ctrl, eProto, mapSymbol, mapBetIndex, symbolRate, Fruit77Utils;
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
      ScrollView = module.ScrollView;
      find = module.find;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      Fruit77Ctrl = module.Fruit77Ctrl;
    }, function (module) {
      eProto = module.eProto;
      mapSymbol = module.mapSymbol;
      mapBetIndex = module.mapBetIndex;
      symbolRate = module.symbolRate;
    }, function (module) {
      Fruit77Utils = module.Fruit77Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "e1bbcePcwBAj6tjqCyQTAKV", "FruitSelfRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FruitSelfRecord = exports('default', (_dec = ccclass("FruitSelfRecord"), _dec2 = menu("game/Fruit77/FruitSelfRecord"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(ScrollView), _dec7 = property(ScrollView), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FruitSelfRecord, _Component);
        function FruitSelfRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_rate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_recordInfo", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_trang", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_myBet", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_result", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item_0", _descriptor6, _assertThisInitialized(_this));
          _this.curIndex = 1;
          _this.totalNum = 0;
          return _this;
        }
        var _proto = FruitSelfRecord.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          Fruit77Ctrl.instance.reqSelfRecord();
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eProto.HD_GetLastRecord, this.onRecvData, this); //断线重连
        };

        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eProto.HD_GetLastRecord); //断线重连
        };

        _proto.onBtnClick = function onBtnClick(event, data) {
          var reqIndex = this.curIndex;
          switch (event.target.name) {
            case "Button_right":
              {
                if (this.curIndex == this.totalNum) {
                  return;
                }
                reqIndex++;
                break;
              }
            case "Button_left":
              {
                if (this.curIndex == 0) {
                  return;
                }
                reqIndex--;
                break;
              }
          }
          Fruit77Ctrl.instance.reqSelfRecord(reqIndex);
        };
        _proto.onRecvData = function onRecvData(data) {
          //        //:Fruit77Def.IRecord
          gts.Debug.Log("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            //            //提示错误
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          var recordData = data.Data;

          //        //     totalNum: number;
          //        // curIndex: number;
          if (recordData.totalNum == 0) {
            return;
          }
          this.totalNum = recordData.totalNum;
          this.curIndex = recordData.curIndex;
          this.Label_trang.string = "TRANG " + recordData.curIndex + "/" + recordData.totalNum;
          var Button_right = find("bg/Button_right", this.node);
          Button_right.active = this.curIndex < this.totalNum;
          var Button_left = find("bg/Button_left", this.node);
          Button_left.active = this.curIndex > 1;
          this.updateRecordInfo(recordData.record);

          //        //更新概率
          this.updateRate(recordData.openArr);
        };
        _proto.updateRate = function updateRate(openArr) {
          if (!openArr) {
            return;
          }
          var rate = {
            bar: 0,
            leftLucky: 0,
            bigOrange: 0,
            bigBell: 0,
            bigLemon: 0,
            apple: 0,
            bigWaterMelon: 0,
            bigStar: 0,
            bigSeven: 0
          };
          var total = openArr.length;
          for (var _iterator = _createForOfIteratorHelperLoose(openArr), _step; !(_step = _iterator()).done;) {
            var index = _step.value;
            rate[mapSymbol[index]]++;
          }
          for (var _i = 0, _Object$entries = Object.entries(rate); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            var curRate = Math.floor(value / total * 10000) / 100;
            this.Node_rate.getChildByName(key).getComponent(Label).string = curRate + "%";
          }
        };
        _proto.updateRecordInfo = function updateRecordInfo(record) {
          var Label_phong = find("Node_betInfo/Label_phong", this.Node_recordInfo);
          var Label_time = find("Node_betInfo/Label_time", this.Node_recordInfo);
          var Label_bet = find("Node_betInfo/Label_bet", this.Node_recordInfo);
          var Label_win = find("Node_betInfo/Label_win", this.Node_recordInfo);
          Label_phong.getComponent(Label).string = "#" + record.GameNo;
          Label_time.getComponent(Label).string = record.BetTime;
          Label_bet.getComponent(Label).string = "" + record.BetAmount;
          Label_win.getComponent(Label).string = "" + record.PrintMoney;
          var BetDetails = JSON.parse(record.BetDetails);
          var PrizeNum = JSON.parse(record.PrizeNum);
          var Node_label = find("Node_label", this.ScrollView_myBet.node.parent);
          Node_label.removeAllChildren();

          //        //betInfo
          this.ScrollView_myBet.content.removeAllChildren();
          for (var index = 0; index < 8; index++) {
            var betScore = BetDetails[index];
            if (betScore > 0) {
              var item = instantiate(this.item_0);
              this.ScrollView_myBet.content.addChild(item);
              item.active = true;
              var iconName = mapBetIndex[index];
              var Sprite_icon = item.getChildByName("Sprite_icon");
              Sprite_icon.getComponent(Sprite).spriteFrame = Fruit77Utils.instance.symbol[iconName];
              var Label_score = item.getChildByName("Label_score");
              Label_score.getComponent(Label).string = "X" + Common.ChangeMoneyShow(betScore, 2);
            }
          }

          //        //result
          this.ScrollView_result.content.removeAllChildren();
          if (typeof PrizeNum == "object") {
            for (var _index = 0; _index < PrizeNum.RewardPos.length; _index++) {
              var _item = instantiate(this.item_0);
              this.ScrollView_result.content.addChild(_item);
              _item.active = true;
              var rPos = PrizeNum.RewardPos[_index];
              var _iconName = mapSymbol[rPos];
              var _Sprite_icon = _item.getChildByName("Sprite_icon");
              _Sprite_icon.getComponent(Sprite).spriteFrame = Fruit77Utils.instance.symbol[_iconName];
              var rate = symbolRate[rPos];
              var _Label_score = _item.getChildByName("Label_score");
              _Label_score.getComponent(Label).string = "X" + rate;
              _Label_score.active = rate > 0;
            }
          } else {
            for (var _index2 = 0; _index2 < PrizeNum.length; _index2++) {
              var _item2 = instantiate(this.item_0);
              this.ScrollView_result.content.addChild(_item2);
              _item2.active = true;
              var _rPos = PrizeNum[_index2];
              var _iconName2 = mapSymbol[_rPos];
              var _Sprite_icon2 = _item2.getChildByName("Sprite_icon");
              _Sprite_icon2.getComponent(Sprite).spriteFrame = Fruit77Utils.instance.symbol[_iconName2];
              var _rate = symbolRate[_rPos];
              var _Label_score2 = _item2.getChildByName("Label_score");
              _Label_score2.getComponent(Label).string = "X" + _rate;
              _Label_score2.active = _rate > 0;
            }
          }
        };
        return FruitSelfRecord;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_rate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_recordInfo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_trang", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_myBet", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_result", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "item_0", [_dec8], {
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
  r('virtual:///prerequisite-imports/Fruit77', 'chunks:///_virtual/Fruit77'); 
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