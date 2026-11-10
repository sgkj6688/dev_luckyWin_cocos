System.register("chunks:///_virtual/DwslButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, Common, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "39bccRiWsFHKJXAPHLWpFlM", "DwslButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var DwslButton = exports('default', (_dec = ccclass("DwslButton"), _dec2 = menu("game/Dwslgame/DwslButton"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DwslButton, _Component);
        function DwslButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "eventName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventType", _descriptor2, _assertThisInitialized(_this));
          _this._eventData = "";
          _this._index = 0;
          _this.isRuning = false;
          return _this;
        }
        var _proto = DwslButton.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.dispatchButtonEvent = function dispatchButtonEvent(event, eventData) {
          //        // AudioManager.instance.playbuttonEffect();
          if (ConfigManager[this.eventType][this.eventName]) {
            Common.showLog("相应事件" + ConfigManager[this.eventType][this.eventName]);
            var self = this;
            if (this.isRuning == false) {
              this.isRuning = true;
              EventManager.dispatch(ConfigManager[self.eventType][self.eventName], {
                index: self._index
              });
              this.scheduleOnce(function () {
                self.isRuning = false;
              }, 0.5);
            } else {
              Common.showLog("button speed too fast");
            }
          } else {
            Common.showLog("事件类型" + this.eventName + "未注册");
          }
        };
        _proto.initAction = function initAction() {}
        //    // update (dt) {}
        ;

        return DwslButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "eventName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "事件类型";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "eventType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "ButtonEvent";
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DwslChipObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DwslModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, tween, Sprite, Component, DwslModel;
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
      tween = module.tween;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      DwslModel = module.DwslModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a37c9+W115Fbo5ODLaHdMKC", "DwslChipObject", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var chipObject = exports('default', (_dec = ccclass("DwslChipObject"), _dec2 = menu("game/Dwslgame/chipObject"), _dec3 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(chipObject, _Component);
        function chipObject() {
          var _this;
          _this = _Component.call(this) || this;
          _initializerDefineProperty(_this, "smallCMArr", _descriptor, _assertThisInitialized(_this));
          _this._chipInfo = null;
          _this._chipInfo = null;
          return _this;
        }
        var _proto = chipObject.prototype;
        _proto.getchipInfo = function getchipInfo() {
          return this._chipInfo;
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          //        //下注
          this.node.on("doBet", function (toPos) {
            tween(_this2.node).to(0.2, toPos, {
              easing: "quadOut"
            }).start();
          }, this);
        };
        _proto.start = function start() {};
        _proto.reuse = function reuse(info) {
          this.node.active = true;
          this._chipInfo = info;

          //        //
          var spritef = this.smallCMArr[DwslModel.instance.chipList[info.value]];
          this.node.getComponent(Sprite).spriteFrame = spritef;
        };
        _proto.unuse = function unuse() {
          this._chipInfo = null;
          this.node.active = false;
        };
        return chipObject;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "smallCMArr", [_dec3], {
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

System.register("chunks:///_virtual/DwslCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './DataManager.ts', './NetManager.ts', './DwslDef.ts', './DwslModel.ts', './Common.ts', './EventManager.ts', './ConfigManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, assetManager, i18n, GameDef, DataManager, UserKey, NetManager, eProto, DwslModel, Common, EventManager, ConfigManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      DwslModel = module.DwslModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0fa28orw/dOjKWj9FG5XPp7", "DwslCtrl", undefined);
      var DwslGameCtrl = exports('DwslGameCtrl', /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(DwslGameCtrl, _GameDef$BaseCtrl);
        function DwslGameCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this.BUNDLE = "DwslGame";
          return _this;
        }
        var _proto = DwslGameCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete DwslGameCtrl._instance;
          DwslGameCtrl._instance = null;
          DwslModel.destroy();
        }
        //    //baseCtrl/////////////////////////////////////
        //    //#region baseCtrl
        ;

        _proto.initProto = function initProto() {
          //        //注册网络监听--本游戏
          for (var _i = 0, _Object$entries = Object.entries(eProto); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            EventManager.instance.on(value, this.onRecvData, this);
          }

          //        //注册网络监听--大厅
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.on(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.removeProto = function removeProto() {
          //        //注册网络监听--本游戏
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.instance.off(value, this.onRecvData, this);
          }

          //        //注册网络监听--大厅
          EventManager.instance.off(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.off(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.off(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        //    /**请求抽水 */
        _proto.reqPumping = function reqPumping() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getPumping, {
            gameName: "zooRoulette"
          });
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.Log("===onRecvData==", JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            if (data.Code != 30009) {
              Common.showTip(i18n.errTip(data.Code));
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_enter:
              {
                DwslModel.instance.gameInfo = data.Data;
                DwslModel.instance.chipList = DwslModel.instance.gameInfo.Chips;
                DwslModel.instance.gameNo = DwslModel.instance.gameInfo.GameNo;
                DwslModel.instance.BetSecond = DwslModel.instance.gameInfo.BetSecond;
                DwslModel.instance.TotalSecond = DwslModel.instance.gameInfo.TotalSecond;
                DwslModel.instance.countDown = DwslModel.instance.gameInfo.Countdown;
                DwslModel.instance.lightPos = DwslModel.instance.gameInfo.OpenNum || 0;
                DwslModel.instance.history = DwslModel.instance.gameInfo.Results.slice();
                DwslModel.instance.PosMaxBet = DwslModel.instance.gameInfo.PosMaxBet;
                DwslModel.instance.PlayerCount = DwslModel.instance.gameInfo.PlayerCount;
                DwslModel.instance.myBetList = data.Data.MyTotalBet;
                DwslModel.instance.totalBetList = data.Data.TotalBet;
                DwslModel.instance.PlayerInfos = data.Data.PlayerInfos.slice();
                DwslModel.instance.result = data.Data.OpenInfo;
                var keys = Object.keys(DwslModel.instance.gameInfo.PosOdds);
                for (var i = 0; i < keys.length; i++) {
                  var odds = DwslModel.instance.gameInfo.PosOdds[keys[i]];
                  DwslModel.instance.Rate[i] = odds;
                }
                break;
              }
            case eProto.gameStart:
              {
                emitData = data.Data;
                break;
              }
            case eProto.allBet:
              {
                emitData = data.Data;
                break;
              }
            case eProto.Bet:
              {
                emitData = data.Data;
                break;
              }
            case eProto.HD_bet:
              {
                emitData = data.Data;
                DwslModel.instance.myBetList[data.Data.Pos] += data.Data.Amount;
                break;
              }
            case eProto.open:
              {
                DwslModel.instance.result = {
                  OpenNum: data.Data.OpenNum,
                  WinPos: data.Data.WinPos
                };
                DwslModel.instance.history.unshift(DwslModel.instance.result.OpenNum);
                break;
              }
            case eProto.prize:
              {
                DwslModel.instance.prize = data.Data;
                break;
              }
            case eProto.getPumping:
              {
                DwslModel.instance.nPummping = data.Data.Pumping;
                break;
              }

            //            //////////////////////////////////////////////////////
            //            //获取钱包-推送钱包-断线重连
            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==Dwsl=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (DwslModel.instance.curBalance > 0) {
                  DwslModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                DwslModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Dwsl=pushWallet==" + _HD_Wallet.VndBalance);
                if (DwslModel.instance.curBalance > 0) {
                  DwslModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                DwslModel.instance.curBalance = _HD_Wallet.VndBalance;
                emitData = {};
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                // 断线重连
                Common.closeWait();
                break;
              }
          }
          this.emitUpdateView(data.cmd, emitData);
        }
        //    //#endregion
        //    //////////////////////////////////////////////////////////////////
        ;

        _proto.SendData = function SendData(msgid, data) {
          if (data === void 0) {
            data = {};
          }
          var log = "\u53D1\u9001\u6D88\u606F\uFF0C msgId:" + msgid + ", data:" + JSON.stringify(data);
          if (NetManager.instance._connect) {
            gts.Debug.Log("==SendData== " + log);
            NetManager.instance.sendOnlineData("" + msgid, data);
          } else {
            gts.Debug.Log("(FAILED): " + log);
          }
        };
        _proto.getInfo = function getInfo() {
          // this.SendData(DwslDef.eProto.getInfo, {});
        };
        _proto.sendDoingBet = function sendDoingBet(pos, num) {
          if (DwslModel.instance.countDown < 3) {
            Common.showTip(i18n.lang.disableBet);
            return false;
          }
          if (DwslModel.instance.myBetList[pos] + num > DwslModel.instance.PosMaxBet["" + pos]) {
            Common.showTip(i18n.lang[10064].replace("{0}", "" + Common.ChangeMoneyFormat(DwslModel.instance.PosMaxBet["" + pos], 2)));
            return false;
          }
          this.SendData(eProto.HD_bet, {
            pos: pos,
            amount: num,
            gameNo: DwslModel.instance.gameNo
          });
          return true;
        };
        _proto.Send_ExitRoom = function Send_ExitRoom() {
          this.SendData(eProto.HD_leave);
        };
        _createClass(DwslGameCtrl, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return DwslGameCtrl;
      }(GameDef.BaseCtrl));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DwslDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ee3b5+JP81NGKptt530yUVs", "DwslDef", undefined);
      //gameDef moudle
      var cBundle = exports('cBundle', "DwslGame");
      var Event = exports('Event', /*#__PURE__*/function (Event) {
        Event["onLoadHall"] = "onLoadHall";
        Event["onLoadGame"] = "onLoadGame";
        Event["onUpdateRecord"] = "onUpdateRecord";
        return Event;
      }({}));
      var cLight = exports('cLight', 28);
      var eStatus = exports('eStatus', {
        none: 0,
        Bet: 1,
        running: 2,
        result: 3
      });
      var arrLightPos = exports('arrLightPos', [{
        x: 0,
        y: 326
      }, {
        x: 148,
        y: 326
      }, {
        x: 296,
        y: 326
      }, {
        x: 447,
        y: 318
      }, {
        x: 581,
        y: 255
      }, {
        x: 672,
        y: 140
      }, {
        x: 704,
        y: 2
      }, {
        x: 672,
        y: -147
      }, {
        x: 582,
        y: -261
      }, {
        x: 448,
        y: -324
      }, {
        x: 297,
        y: -333
      }, {
        x: 148,
        y: -333
      }, {
        x: 0,
        y: -333
      }, {
        x: -151,
        y: -333
      }, {
        x: -299,
        y: -333
      }, {
        x: -451,
        y: -325
      }, {
        x: -585,
        y: -262
      }, {
        x: -675,
        y: -146
      }, {
        x: -716,
        y: 0
      }, {
        x: -675,
        y: 139
      }, {
        x: -585,
        y: 255
      }, {
        x: -450,
        y: 317
      }, {
        x: -299,
        y: 326
      }, {
        x: -152,
        y: 326
      }]);
      var areaMap = exports('areaMap', {
        "0": 10,
        "1": 8,
        "2": 8,
        "3": 8,
        "4": 6,
        "5": 6,
        "6": 6,
        "7": 11,
        "8": 5,
        "9": 5,
        "10": 5,
        "11": 7,
        "12": 7,
        "13": 7,
        "14": 9,
        "15": 4,
        "16": 4,
        "17": 4,
        "18": 2,
        "19": 2,
        "20": 2,
        "21": 12,
        "22": 1,
        "23": 1,
        "24": 1,
        "25": 3,
        "26": 3,
        "27": 3
      });
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_enter"] = "zooRoulette/HD_enter";
        eProto["HD_leave"] = "zooRoulette/HD_leave";
        eProto["HD_history"] = "zooRoulette/HD_history";
        eProto["allBet"] = "zooRoulette/allBet";
        eProto["HD_bet"] = "zooRoulette/HD_bet";
        eProto["Bet"] = "zooRoulette/bet";
        eProto["RECORD"] = "zooRoulette/HD_Record";
        eProto["HD_QueryBetRecord"] = "lobby/HD_QueryBetRecord";
        eProto["gameStart"] = "zooRoulette/gameStart";
        eProto["open"] = "zooRoulette/open";
        eProto["prize"] = "zooRoulette/prize";
        eProto["getPumping"] = "lobby/HD_GetPumping";
        return eProto;
      }({})); //抽水

      /**音效 */
      var eSound = exports('eSound', /*#__PURE__*/function (eSound) {
        eSound["bg"] = "sound/bg";
        eSound["bet"] = "sound/bet";
        eSound["countDown"] = "sound/countDown";
        eSound["warning"] = "sound/warning";
        eSound["chipIn"] = "sound/chipIn";
        eSound["timeUp"] = "sound/timeUp";
        eSound["winBoom"] = "sound/winBoom";
        eSound["winbox"] = "sound/winbox";
        eSound["winEffect"] = "sound/winEffect";
        eSound["winNomal"] = "sound/winNomal";
        return eSound;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改

      /////////////////////////////////////
      //一些待处理 问题

      // ==recvData data==={"Data":{"UserID":"62496f2dc4ac29426adcb17e","XiaZhuPos":"6","XiaZhuV":482},"GameType":"zooRoulette","Action":"HD_XiaZhu","ErrMsg":"操作成功","Code":0,"cmd":"zooRoulette/HD_XiaZhu"}
      // builtin-2d-sprite (variant) : Failed to set property [texture], property not found.
      //注： 这个问题由 服务端发送的下注金额 引起，金额不在 CMList整数范围内
      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DwslGame", ['./DwslCtrl.ts', './DwslDef.ts', './DwslGameView.ts', './DwslModel.ts', './DwslScene.ts', './DwslUtils.ts', './DwslButton.ts', './DwslChipObject.ts', './DwslHelp.ts', './DwslPath.ts', './DwslPathItem.ts', './DwslRecord.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/DwslGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ConfigManager.ts', './EventManager.ts', './ViewManager.ts', './Common.ts', './DwslCtrl.ts', './DwslDef.ts', './DwslModel.ts', './I18n.ts', './ProxyMgr.ts', './GameDef.ts', './BtnArea.ts', './GUtil.ts', './ChipProxy.ts', './ChipItem.ts', './ChipSmall.ts', './DwslChipObject.ts', './DwslUtils.ts', './DwslRecord.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Label, ScrollView, Prefab, AudioClip, SpriteFrame, sp, instantiate, NodePool, resources, tween, UIOpacity, UITransform, Tween, v3, find, Sprite, AudioManager, DataManager, UserKey, NetManager, ConfigManager, EventManager, ViewManager, Common, DwslGameCtrl, eProto, Event, eStatus, eSound, areaMap, cLight, DwslModel, i18n, ProxyMgr, GameDef, BtnArea, GUtil, ChipProxy, ChipEvent, ChipType, ChipItem, ChipSmall, chipObject, DwslUtils, DwslRecord;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      resources = module.resources;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Tween = module.Tween;
      v3 = module.v3;
      find = module.find;
      Sprite = module.Sprite;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      DwslGameCtrl = module.DwslGameCtrl;
    }, function (module) {
      eProto = module.eProto;
      Event = module.Event;
      eStatus = module.eStatus;
      eSound = module.eSound;
      areaMap = module.areaMap;
      cLight = module.cLight;
    }, function (module) {
      DwslModel = module.DwslModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      BtnArea = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
      ChipType = module.ChipType;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      chipObject = module.default;
    }, function (module) {
      DwslUtils = module.DwslUtils;
    }, function (module) {
      DwslRecord = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26;
      cclegacy._RF.push({}, "dc775roPllCrb3owpZn3IX+", "DwslGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DwslGameView = exports('default', (_dec = ccclass("DwslGameView"), _dec2 = menu("game/Dwslgame/DwslGameView"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(ScrollView), _dec17 = property(Prefab), _dec18 = property(AudioClip), _dec19 = property(SpriteFrame), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(sp.Skeleton), _dec25 = property(Label), _dec26 = property(Node), _dec27 = property(Prefab), _dec28 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(DwslGameView, _GameDef$BaseView);
        function DwslGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BtnLast", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BtnJiabei", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfHead", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "publicPlayerNum", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerPublic", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerself", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betArea", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betArea_label", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_record_content", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lab_timer", _descriptor12, _assertThisInitialized(_this));
          // @property(Label)
          // Label_totalBet: Label = null;
          _initializerDefineProperty(_this, "Label_myBet", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgMusic", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordIma", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_pointRoot", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lightRoot", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_light", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_deskPlayer", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tishi", _descriptor22, _assertThisInitialized(_this));
          // @property(sp.Skeleton)
          // biao: sp.Skeleton = null;
          _initializerDefineProperty(_this, "Label_num", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_star", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor26, _assertThisInitialized(_this));
          //    //倒计时 剩余时间
          _this._curCountDown = 0;
          //    //倒计时 总时间
          _this._curTotalTime = 0;
          //    //当前选中 的 下注筹码 序号
          _this._curSelectCm = 0;
          //    //下注筹码列表
          _this._CMObjList = [];
          //    //大奖相关
          _this._stepNum = 0;
          _this._poolNum = 0;
          _this._PlayerPage = 1;
          _this._curPoolPage = 0;
          //    //是否播放倒计时
          _this.haveplay = false;
          //    //倒计时音效ID
          _this.djsMId = void 0;
          _this._chip = void 0;
          _this._chipPool = void 0;
          _this.isFirst = false;
          return _this;
        }
        var _proto = DwslGameView.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.isFirst = true;
          _GameDef$BaseView.prototype.onLoad.call(this, DwslGameCtrl.instance);
          NetManager.instance.waitServiceSendData();
          this.initEvent();
          this.initGame();
          DwslUtils.instance.loadRes_icon(function () {
            _this2.initChipPool(function () {
              NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
              DwslGameCtrl.instance.SendData(eProto.HD_enter);
            });
          });
          AudioManager.instance.playGameMusic(this.bgMusic, true);
          console.timeEnd("=======bundle.onLoad========11=====");
          this.tishi.node.active = false;
        };
        _proto.start = function start() {
          Common.setButtonEnableWithGray(this.BtnLast, false);
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          this.scheduleOnce(this.initLight, 0.5);
          // Common.closeWait();
        };

        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
          if (this._chipPool) {
            this._chipPool.clear();
          }
        };
        _proto.initLight = function initLight() {
          var _this3 = this;
          var i = 0;
          var _loop = function _loop() {
            var Node_point = _step.value;
            var newLight = instantiate(_this3.Sprite_light);
            newLight.active = true;
            newLight.position = v3(0);
            Node_point.addChild(newLight);
            newLight.getComponent(UIOpacity).opacity = 0;
            tween(newLight.getComponent(UIOpacity)).delay(i * 0.01).to(0.01, {
              opacity: 255
            }).delay(i * 0.01 + cLight * 0.01).to(0.01, {
              opacity: 0
            }).call(function () {
              newLight.destroyFromParent();
            }).start();
            i++;
          };
          for (var _iterator = _createForOfIteratorHelperLoose(this.Node_pointRoot.children), _step; !(_step = _iterator()).done;) {
            _loop();
          }
        };
        _proto.getChipNode = function getChipNode(chipInfo, isSelf) {
          if (this._chipPool.size() > 1) {
            var node = this._chipPool.get(chipInfo);
            //            // node.scale = 0.8;
            return node;
          }
          var item = this._chipPool.get(chipInfo);
          if (item) {
            for (var i = 0; i < 11; i++) {
              var newNode = instantiate(item);
              //                // newNode.scale = 0.8;
              this._chipPool.put(newNode);
            }
          }
          return item;
        };
        _proto.getHandlerComp = function getHandlerComp(chipNode) {
          return chipNode.getComponent(chipObject);
        };
        _proto.initChipPool = function initChipPool(finishCall) {
          var _this4 = this;
          if (finishCall === void 0) {
            finishCall = null;
          }
          if (!this._chipPool) {
            this._chipPool = new NodePool(ChipSmall);
          }
          resources.load("prefab/public/chipSmall", Prefab, function (err, prefab) {
            for (var i = 0; i < 50; i++) {
              var newNode = instantiate(prefab);
              // newNode.scale = 0.8;
              _this4._chipPool.put(newNode);
            }
            if (finishCall) {
              finishCall();
            }
          });
        };
        _proto.initEvent = function initEvent() {
          //        //button事件
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);

          // EventManager.instance.on(ConfigManager.instance.protocolYxx.yxxBetBtn, this.selectCM, this);
          // EventManager.instance.on(ConfigManager.instance.protocolDwsl.DwslplayerInfo, this.showInfo, this);
          // EventManager.instance.on(ConfigManager.instance.protocolDwsl.DwslPublic, this.showAllPlayerInfo, this);
          // EventManager.instance.on(ConfigManager.instance.protocolDwsl.DwslBigrecord, this.showBigRecord, this);
          // EventManager.instance.on(ConfigManager.instance.protocolDwsl.DwslJackpotHistory, this.showBigRecord, this);
          // EventManager.instance.on(ConfigManager.instance.protocolDwsl.Dwslrecord, this.showRecord, this);

          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
          this.BindAreaBtns();
          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);

          //注册分发事件
          EventManager.instance.on(ConfigManager.instance.protocolYxx.yxxLastYz1, this.LastBet, this);
          EventManager.instance.on(ConfigManager.instance.protocolYxx.yxxLastYz2, this.doubleBet, this);
          DwslGameCtrl.instance.reqPumping();
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.gameShow = function gameShow() {
          Common.showLog("前台");
          this.scheduleOnce(function () {
            this.doClearChip();
            DwslGameCtrl.instance.SendData(ConfigManager.instance.protocolHall.getWallet, {});
            DwslGameCtrl.instance.SendData(eProto.HD_enter, {});
          }, 0.1);
        };
        _proto.exitGame = function exitGame() {
          EventManager.instance.emit(Event.onLoadHall);
        }
        // getPlayerDataByPage() {
        //     let data = [];
        //     let redata = DwslModel.instance.AllPlayerinfo.PlayerList;
        //     let start = (this._PlayerPage - 1) * 12 + 1;
        //     let end = this._PlayerPage * 12;
        //     for (var i = 0; i < redata.length; i++) {
        //         if (i >= start - 1 && i <= end - 1) {
        //             data.push(redata[i]);
        //         }
        //     }
        //     return data;
        // }
        // showPublicInfoByPage() {
        //     let data = DwslModel.instance.AllPlayerinfo;

        //     let list = [];
        //     for (let i of data.PlayerList) {
        //         let item = {
        //             head: i.Head,
        //             gold: i.Yxb,
        //             name: i.Name,
        //         } as hallProto.userItem;
        //         list.push(item);
        //     }
        //     GUtil.openUserList(list);
        // }
        // showAllPlayerInfo(strCode: string) {
        //     // DwslGameCtrl.instance.SendData(DwslModel.instance.roomInfo._serverID + "/" + DwslDef.eProto.getPlayerList.split("/")[1], {});
        // }
        ;

        _proto.showDeskPlayerInfo = function showDeskPlayerInfo(data) {
          if (data == "self") {
            var playerInfo = {
              Name: DataManager.instance.getUserDataForKey(UserKey.NICKNAME),
              Yxb: DataManager.instance.getUserDataForKey(UserKey.GOLD),
              Head: DataManager.instance.getUserDataForKey(UserKey.AVATAR)
            };
            this.showPlayerInfo(playerInfo);
          }
        }
        //    /**
        //     * 显示玩家信息
        //     * @param playerInfo :{Name:string, Yxb:string, Head:string}
        //     */
        ;

        _proto.showPlayerInfo = function showPlayerInfo(playerInfo) {
          var item = {
            head: playerInfo.Head,
            gold: playerInfo.Yxb,
            name: playerInfo.Name
          };
          GUtil.openPlayer(item);
        };
        _proto.binkNode = function binkNode(node) {
          tween(node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }).union().repeatForever().start();
        };
        _proto.betIntoPool = function betIntoPool(data) {
          if (DwslModel.instance.gameStatus != eStatus.Bet || DwslModel.instance.countDown <= 3) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          DwslUtils.instance.playOneShot(eSound.chipIn);
          var pos = parseInt(data);
          var amount = this._chip.count;
          if (DwslGameCtrl.instance.sendDoingBet(pos, amount)) {
            this.doSendChip(pos, amount);
          }
        }
        //    ///////////////////////////////////////////////
        ;

        _proto.onClickLeft = function onClickLeft() {
          var node = this.scrollViewCM.content;
          var count = node.children.length;
          if (count <= 0) return;
          var width = node.getComponent(UITransform).width;
          var posX = this.scrollViewCM.content.getPosition().x;
          var move = width / count;
          var pos = posX + move;
          if (pos > 0) {
            pos = 0;
          }
          Tween.stopAllByTarget(node);
          tween(node).to(0.2, {
            position: v3(pos, node.position.y)
          }).start();
        };
        _proto.onClickRight = function onClickRight() {
          var node = this.scrollViewCM.content;
          var count = node.children.length;
          if (count <= 0) return;
          var width = node.getComponent(UITransform).width;
          var posX = this.scrollViewCM.content.getPosition().x;
          var move = width / count;
          var pos = posX - move;
          var max = this.scrollViewCM.node.getComponent(UITransform).width - width;
          if (pos < max) {
            pos = max;
          }
          Tween.stopAllByTarget(node);
          tween(node).to(0.2, {
            position: v3(pos, node.position.y)
          }).start();
        };
        _proto.onClickExit = function onClickExit() {
          var _this5 = this;
          DwslGameCtrl.instance.Send_ExitRoom();
          tween(this.node).delay(0.5).call(function () {
            _this5.exitGame();
          }).start();
        };
        _proto.onClickRecord = function onClickRecord() {
          Common.loadPopBuddle("prefab/DwslRecord", DwslUtils.instance.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            node.getComponent(DwslRecord).setGameType("zooRoulette", 8);
          }, true);
        };
        _proto.onClickPath = function onClickPath() {
          Common.loadPopBuddle("prefab/DwslPath", DwslUtils.instance.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/DwslHelp", DwslUtils.instance.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          GUtil.openRecord("zooRoulette");
        }
        //    //////////////////////////////////////////////
        ;

        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != DwslGameCtrl.instance.BUNDLE) {
            return;
          }
          gts.Debug.Log("=====selectCM====" + JSON.stringify(data));
          var children = this.scrollViewCM.content.children;
          for (var _iterator2 = _createForOfIteratorHelperLoose(children), _step2; !(_step2 = _iterator2()).done;) {
            var child = _step2.value;
            var chipitem = child.getComponent(ChipItem);
            if (chipitem) {
              if (chipitem.data == data) {
                this._chip = data;
              } else {
                chipitem.moveUp(false);
              }
            }
          }
        }
        //    /**
        //     * 创建下注筹码 按钮
        //     * @param data number[]
        //     */
        ;

        _proto.createChipsList = function createChipsList() {
          var _this6 = this;
          this.scrollViewCM.content.destroyAllChildren();
          var minChip = ChipProxy.chipList[0].count;
          var diyNums = 0;
          for (var _iterator3 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            if (i.count < minChip) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            //            // chip.scale = 0.8;
            //            // chip.width = 105;
            //            // chip.height = 105;
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, DwslGameCtrl.instance.BUNDLE);
            diyNums++;
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step4; !(_step4 = _iterator4()).done;) {
            var _i = _step4.value;
            var has = false;
            for (var _iterator5 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step5; !(_step5 = _iterator5()).done;) {
              var j = _step5.value;
              if (j.count == _i.count) {
                has = true;
                break;
              }
            }
            if (has) {
              continue;
            }
            var _chip2 = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip2);
            //            // chip.scale = 0.8;
            //            // chip.width = 105;
            //            // chip.height = 105;
            _chip2.getComponent(ChipItem).setData(_i, ChipType.CHIP, DwslGameCtrl.instance.BUNDLE);
          }
          this.scheduleOnce(function () {
            var child = _this6.scrollViewCM.content.children[diyNums];
            child.getComponent(ChipItem).moveUp();
            _this6.scrollViewCM.scrollToLeft();
          });
        };
        _proto.initGame = function initGame() {
          this.updateSelfInfo();
        };
        _proto.updateSelfInfo = function updateSelfInfo() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.selfHead);
          Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.removeEvent = function removeEvent() {
          //        //button事件
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(ConfigManager.instance.protocolYxx.yxxLastYz1, this.LastBet, this);
          EventManager.instance.off(ConfigManager.instance.protocolYxx.yxxLastYz2, this.doubleBet, this);
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
          ProxyMgr.close(this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          this.removeEvent();
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.showCountDown = function showCountDown() {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            var countDown = DwslModel.instance.countDown;
            Tween.stopAllByTarget(_this7.lab_timer.node);
            _this7.lab_timer.string = "" + countDown;
            tween(_this7.lab_timer.node).delay(1).call(function () {
              DwslModel.instance.countDown--;
              _this7.lab_timer.string = "" + DwslModel.instance.countDown;
              switch (DwslModel.instance.gameStatus) {
                case eStatus.Bet:
                  {
                    DwslModel.instance.countDown <= 3 ? DwslUtils.instance.playOneShot(eSound.countDown) : DwslUtils.instance.playOneShot(eSound.timeUp);
                    if (DwslModel.instance.countDown == 3 && _this7.tishi.animation != "stop") {
                      _this7.tishi.node.active = true;
                      _this7.tishi.setAnimation(0, "stop", false);
                      _this7.tishi.setCompleteListener(function () {
                        _this7.tishi.setCompleteListener(null);
                        _this7.tishi.node.active = false;
                      });
                      _this7.scheduleOnce(function () {
                        DwslUtils.instance.playOneShot(eSound.warning);
                      }, 3.25);
                      Common.setButtonEnableWithGray(_this7.BtnLast, false);
                      Common.setButtonEnableWithGray(_this7.BtnJiabei, false);
                    }
                    break;
                  }
                case eStatus.running:
                  {
                    if (DwslModel.instance.countDown < 5) {
                      DwslModel.instance.gameStatus = eStatus.result;
                      _this7.updatePath();
                    }
                    break;
                  }
              }
            }).union().repeat(countDown).call(resolve).start();
          });
        };
        _proto.updateStatus = /*#__PURE__*/function () {
          var _updateStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = DwslModel.instance.gameStatus;
                  _context.next = _context.t0 === eStatus.Bet ? 3 : _context.t0 === eStatus.running ? 4 : _context.t0 === eStatus.result ? 5 : 6;
                  break;
                case 3:
                  return _context.abrupt("break", 6);
                case 4:
                  return _context.abrupt("break", 6);
                case 5:
                  return _context.abrupt("break", 6);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function updateStatus() {
            return _updateStatus.apply(this, arguments);
          }
          return updateStatus;
        }();
        _proto.doSendChip = /*#__PURE__*/function () {
          var _doSendChip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(posIndex, amount, startNode) {
            var _this8 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (startNode === void 0) {
                    startNode = null;
                  }
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    var CMnode = _this8.getChipNode(amount);
                    if (!CMnode) {
                      return resolve(false);
                    }
                    var Node_betArea = _this8.Node_betArea_label.getChildByName("Node_betArea_" + posIndex);
                    Node_betArea.addChild(CMnode);
                    CMnode.getComponent(UIOpacity).opacity = 255;
                    if (startNode) {
                      var pBack = startNode.position;
                      tween(startNode).shake(0.25, 3, 3).call(function () {
                        startNode.position = pBack;
                      }).start();
                    }
                    startNode = startNode != null ? startNode : _this8.playerself;
                    var startPos = startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                    startPos = Node_betArea.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                    CMnode.position = startPos;
                    tween(CMnode).to(0.5, {
                      position: v3(0, 0, 0)
                    }, {
                      easing: "cubicOut"
                    }).call(function () {
                      _this8._chipPool.put(CMnode);
                      return resolve(true);
                    }).start();
                  }));
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function doSendChip(_x, _x2, _x3) {
            return _doSendChip.apply(this, arguments);
          }
          return doSendChip;
        }();
        _proto.doClearChip = function doClearChip() {
          this.BtnJiabei.interactable = false;
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          DwslModel.instance.result = null;
          DwslModel.instance.prize = null;
          this.Node_result.active = false;
          var headEffect = this.playerself.getChildByName("headEffect");
          headEffect.active = false;
          var Sprite_Label_winAdd = find("Sprite_Label_winAdd", this.playerself);
          Sprite_Label_winAdd.active = false;
          for (var i = 0; i < this.Node_deskPlayer.children.length; i++) {
            var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", this.Node_deskPlayer);
            var _headEffect = Node_headInfo.getChildByName("headEffect");
            _headEffect.active = false;
            var _Sprite_Label_winAdd = Node_headInfo.getChildByName("Sprite_Label_winAdd");
            _Sprite_Label_winAdd.active = false;
          }
          for (var _i2 = 0; _i2 < 11; _i2++) {
            var betArea = this.Node_betArea.getChildByName("Node_betArea_" + _i2);
            var zhong = betArea.getChildByName("zhong");
            zhong.active = false;
            var childNode_label = this.Node_betArea_label.getChildByName("Node_betArea_" + _i2);
            var yzself_num = childNode_label.getChildByName("yzself_num");
            var yz_num = childNode_label.getChildByName("yz_num");
            yz_num.getComponent(Label).string = "";
            yz_num.active = false;
            yzself_num.getComponent(Label).string = "";
            yzself_num.active = false;
          }
          this.Node_effectRoot.removeAllChildren();
          this.Sprite_light.removeAllChildren();
          for (var _i3 = 0; _i3 < 5; _i3++) {
            var Sprite_light = this.Node_lightRoot.children[_i3];
            Sprite_light.getComponent(UIOpacity).opacity = 0;
            Tween.stopAllByTarget(Sprite_light.getComponent(UIOpacity));
          }

          // this.Label_totalBet.string = "0K";
          this.Label_myBet.string = "0K";
          DwslModel.instance.totalBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          if (DwslModel.instance.myTotalBet > 0) {
            DwslModel.instance.myTotalBet = 0;
            DwslModel.instance.betselfLast = DwslModel.instance.myBetList.slice();
            DwslModel.instance.myBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
          var isLastBtnEnable = false;
          for (var _iterator6 = _createForOfIteratorHelperLoose(DwslModel.instance.betselfLast), _step6; !(_step6 = _iterator6()).done;) {
            var betAmount = _step6.value;
            if (betAmount > 0) {
              isLastBtnEnable = true;
              break;
            }
          }
          Common.setButtonEnableWithGray(this.BtnLast, isLastBtnEnable);
        };
        _proto.mergeChip = function mergeChip(node) {
          if (node.children.length > 5) {
            this._chipPool.put(node.children[0]);
            var i = 0;
            for (var _iterator7 = _createForOfIteratorHelperLoose(node.children), _step7; !(_step7 = _iterator7()).done;) {
              var child = _step7.value;
              child.position = v3(0, (i - 1) * 5, 0);
              i++;
            }
          }
        };
        _proto.onUpdatePlayers = function onUpdatePlayers() {
          this.publicPlayerNum.string = "" + DwslModel.instance.PlayerCount;
          for (var i = 0; i < this.Node_deskPlayer.children.length; i++) {
            var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", this.Node_deskPlayer);
            var playerInfo = DwslModel.instance.PlayerInfos[i];
            Node_headInfo.active = playerInfo != null;
            if (Node_headInfo.active) {
              var head = find("mask/head", Node_headInfo);
              var Label_gold = Node_headInfo.getChildByName("Label_gold");
              var Label_nickName = Node_headInfo.getChildByName("Label_nickName");
              Common.getHead(playerInfo.Avatar, head);
              Common.nickNameFormatL(Label_nickName, playerInfo.Nickname);
              Label_gold.getComponent(Label).string = Common.numFormat(playerInfo.Prize);
            }
          }
        };
        _proto.updatePath = function updatePath() {
          var item = this.Node_record_content.children[0];
          var history = DwslModel.instance.history.slice(0, 20);
          gts.Debug.Log("===DwslModel.instance.history==", JSON.stringify(DwslModel.instance.history));
          for (var i = 0; i < history.length; i++) {
            var newItem = this.Node_record_content.children[i];
            if (!newItem) {
              newItem = instantiate(item);
              this.Node_record_content.addChild(newItem);
            }
            newItem.active = true;
            newItem.children[0].active = i == 0;
            // if (history[i] == 1 || history[i] == 10 || history[i] == 4 || history[i] == 19) {
            //     let a = 0;
            // }
            newItem.getComponent(Sprite).spriteFrame = this.recordIma[areaMap["" + history[i]] - 1];
          }
          EventManager.instance.emit(Event.onUpdateRecord);
        };
        _proto.updateBet_other = function updateBet_other(data) {
          var _this9 = this;
          if (data === void 0) {
            data = null;
          }
          //更新总下注
          var total = 0;
          var isBet = false;
          var _loop2 = function _loop2(i) {
            var lastBetAmount = DwslModel.instance.totalBetList[i];
            var BetAmount = data ? data[i] - lastBetAmount : lastBetAmount;
            var totalAmount = data ? data[i] : BetAmount;
            if (BetAmount > 0) {
              isBet = true;
              _this9.doSendChip(i, BetAmount, _this9.playerPublic).then(function (isSend) {
                if (isSend) {
                  var Node_betArea = _this9.Node_betArea_label.getChildByName("Node_betArea_" + i);
                  var yz_num = Node_betArea.getChildByName("yz_num");
                  yz_num.active = true;
                  tween(yz_num).to(0.2, {
                    scale: v3(1.2, 1.2, 1.2)
                  }).call(function () {
                    yz_num.getComponent(Label).string = totalAmount > 0 ? Common.ChangeMoneyFormat(totalAmount, 2) : "";
                  }).to(0.2, {
                    scale: v3(1.0, 1.0, 1.0)
                  }).start();
                }
              });
            }
            total += data ? data[i] : BetAmount;
          };
          for (var i = 0; i < 11; i++) {
            _loop2(i);
          }
          if (isBet) {
            DwslUtils.instance.playOneShot(eSound.bet);
            DwslModel.instance.totalBetList = data ? data.slice() : DwslModel.instance.totalBetList;
            // this.Label_totalBet.string = total > 0 ? Common.ChangeMoneyFormat(total, 2) : "0K";
          }
        };

        _proto.updateBet_self = function updateBet_self(isDoSendChip) {
          var _this10 = this;
          if (isDoSendChip === void 0) {
            isDoSendChip = false;
          }
          gts.Debug.Log("=====updateBet_self====" + JSON.stringify(DwslModel.instance.myBetList));
          //更新下注
          DwslModel.instance.myTotalBet = 0;
          var myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
          var isMyFirst = myUid == DwslModel.instance.PlayerInfos[0].Uid;
          var _loop3 = function _loop3(i) {
            var BetAmount = DwslModel.instance.myBetList[i];
            if (BetAmount > 0) {
              DwslModel.instance.myTotalBet += BetAmount;
              if (isDoSendChip) {
                _this10.doSendChip(i, BetAmount, _this10.playerPublic).then(function (isSend) {
                  if (isSend) {
                    var Node_betArea = _this10.Node_betArea_label.getChildByName("Node_betArea_" + i);
                    var yzself_num = Node_betArea.getChildByName("yzself_num");
                    yzself_num.active = true;
                    tween(yzself_num).to(0.2, {
                      scale: v3(1.2, 1.2, 1.2)
                    }).call(function () {
                      yzself_num.getComponent(Label).string = Common.ChangeMoneyFormat(BetAmount, 2);
                    }).to(0.2, {
                      scale: v3(1.0, 1.0, 1.0)
                    }).start();
                  }
                });
              } else {
                var Node_betArea = _this10.Node_betArea_label.getChildByName("Node_betArea_" + i);
                var yzself_num = Node_betArea.getChildByName("yzself_num");
                yzself_num.active = true;
                tween(yzself_num).to(0.2, {
                  scale: v3(1.2, 1.2, 1.2)
                }).call(function () {
                  yzself_num.getComponent(Label).string = Common.ChangeMoneyFormat(BetAmount, 2);
                }).to(0.2, {
                  scale: v3(1.0, 1.0, 1.0)
                }).start();
              }
              if (isMyFirst) {
                _this10.doSendStar(i);
              }
            }
          };
          for (var i = 0; i < 11; i++) {
            _loop3(i);
          }
          if (!this.BtnJiabei.interactable && DwslModel.instance.myTotalBet > 0) {
            Common.setButtonEnableWithGray(this.BtnJiabei, true);
          }
          this.Label_myBet.string = DwslModel.instance.myTotalBet > 0 ? Common.ChangeMoneyFormat(DwslModel.instance.myTotalBet, 2) : "0K";
        };
        _proto.doRunningStart = function doRunningStart() {
          var _this11 = this;
          return new Promise(function (resolve, reject) {
            Tween.stopAllByTarget(_this11.Sprite_light.getComponent(UIOpacity));
            _this11.Sprite_light.position = _this11.Node_pointRoot.children[DwslModel.instance.lightPos].position;
            _this11.Sprite_light.getComponent(UIOpacity).opacity = 0;
            var lightNum = 0;
            tween(_this11.Sprite_light.getComponent(UIOpacity)).call(function () {
              // DwslUtils.instance.playOneShot(DwslDef.eSound[`run_${lightNum % 5}`]);
              DwslUtils.instance.playOneShot(eSound.winEffect);
              var Node_icon = _this11.Node_pointRoot.children[DwslModel.instance.lightPos];
              Node_icon.scale = v3(0.9, 0.9, 0.9);
            }).to(0.05, {
              opacity: 255
            }).delay(0.025).call(function () {
              var Node_icon = _this11.Node_pointRoot.children[DwslModel.instance.lightPos];
              Node_icon.scale = v3(1, 1, 1);
            }).to(0.01, {
              opacity: 0
            }).call(function () {
              DwslModel.instance.lightPos = ++DwslModel.instance.lightPos % cLight;
              var Node_icon = _this11.Node_pointRoot.children[DwslModel.instance.lightPos];
              _this11.Sprite_light.position = _this11.Node_pointRoot.children[DwslModel.instance.lightPos].position;
              lightNum = ++lightNum < 5 ? lightNum : 5;
              for (var i = 1; i < lightNum; i++) {
                var Sprite_light = _this11.Node_lightRoot.children[i];
                Sprite_light.getComponent(UIOpacity).opacity = 255 - 50 * i;
                var startPos = DwslModel.instance.lightPos - i;
                startPos = startPos < 0 ? cLight - 1 : startPos;
                Sprite_light.position = _this11.Node_pointRoot.children[startPos].position;
              }

              //updateCarPos
              // this.doCarRunning(DwslModel.instance.lightPos, 0.076);

              if (lightNum == 5) {
                Tween.stopAllByTarget(_this11.Sprite_light.getComponent(UIOpacity));
                return resolve(true);
              }
            }).union().repeatForever().start();

            //updateCarPos
            // let startPosCar = DwslDef.arrCarPos[DwslModel.instance.lightPos];
            // this.Sprite_car.position = v3(startPosCar.x, startPosCar.y, 0);
            // this.Sprite_car.eulerAngles = v3(0, 0, startPosCar.z);

            // this.biao.setAnimation(0, "run_star", false);
          });
        };

        _proto.doRunningNormal = function doRunningNormal() {
          var _this12 = this;
          return new Promise(function (resolve, reject) {
            Tween.stopAllByTarget(_this12.Sprite_light.getComponent(UIOpacity));
            _this12.Sprite_light.position = _this12.Node_pointRoot.children[DwslModel.instance.lightPos].position;
            _this12.Sprite_light.getComponent(UIOpacity).opacity = 255;
            var disPos = 0;
            var totalPos = 0;
            var rounds = 2;
            tween(_this12.Sprite_light.getComponent(UIOpacity)).call(function () {
              // DwslUtils.instance.playOneShot(DwslDef.eSound[`run_${DwslModel.instance.lightPos % 5}`]);
              DwslUtils.instance.playOneShot(eSound.winEffect);
              var Node_icon = _this12.Node_pointRoot.children[DwslModel.instance.lightPos];
              Node_icon.scale = v3(0.9, 0.9, 0.9);
            }).delay(0.02).call(function () {
              var Node_icon = _this12.Node_pointRoot.children[DwslModel.instance.lightPos];
              Node_icon.scale = v3(1, 1, 1);
              DwslModel.instance.lightPos = ++DwslModel.instance.lightPos % cLight;
              _this12.Sprite_light.position = _this12.Node_pointRoot.children[DwslModel.instance.lightPos].position;
              for (var i = 1; i < 4; i++) {
                var _Sprite_light = _this12.Node_lightRoot.children[i];
                _Sprite_light.getComponent(UIOpacity).opacity = 255 - 50 * i;
                var _startPos = DwslModel.instance.lightPos - i;
                _startPos = _startPos < 0 ? cLight - 1 : _startPos;
                _Sprite_light.position = _this12.Node_pointRoot.children[_startPos].position;
              }
              var Sprite_light = _this12.Node_lightRoot.children[4];
              Sprite_light.getComponent(UIOpacity).opacity = 100;
              var startPos = DwslModel.instance.lightPos + 1;
              startPos = startPos % cLight;
              Sprite_light.position = _this12.Node_pointRoot.children[startPos].position;

              //updateCarPos
              // this.doCarRunning(DwslModel.instance.lightPos, 0.05);

              if (disPos == 0) {
                if (DwslModel.instance.result && totalPos > cLight * rounds) {
                  if (DwslModel.instance.result.OpenNum > DwslModel.instance.lightPos) {
                    disPos = DwslModel.instance.result.OpenNum - DwslModel.instance.lightPos;
                  } else {
                    disPos = DwslModel.instance.result.OpenNum + cLight - DwslModel.instance.lightPos;
                  }
                  disPos = disPos < 20 ? disPos + cLight : disPos;
                }
              } else {
                disPos--;
                if (disPos < 12) {
                  Tween.stopAllByTarget(_this12.Sprite_light.getComponent(UIOpacity));
                  return resolve(true);
                }
              }
              totalPos++;
            }).union().repeatForever().start();

            // //updateCarPos
            // let nextLightPos = DwslModel.instance.lightPos + 1;
            // nextLightPos = nextLightPos % DwslDef.cLight;
            // this.doCarRunning(nextLightPos, 0.05);
          });
        };

        _proto.doRunningEnd = function doRunningEnd() {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            var disPos = 0;
            if (DwslModel.instance.result.OpenNum > DwslModel.instance.lightPos) {
              disPos = DwslModel.instance.result.OpenNum - DwslModel.instance.lightPos;
            } else {
              disPos = DwslModel.instance.result.OpenNum + cLight - DwslModel.instance.lightPos;
            }
            Tween.stopAllByTarget(_this13.Sprite_light.getComponent(UIOpacity));
            _this13.Sprite_light.position = _this13.Node_pointRoot.children[DwslModel.instance.lightPos].position;
            _this13.Sprite_light.getComponent(UIOpacity).opacity = 255;
            var lightNum = 0;
            var sDelay = 0.065;
            var runningEnd = function runningEnd(delay) {
              gts.Debug.Log("====runningEnd===");
              // DwslUtils.instance.playOneShot(DwslDef.eSound[`run_${DwslModel.instance.lightPos % 5}`]);
              DwslUtils.instance.playOneShot(eSound.winEffect);
              tween(_this13.Sprite_light.getComponent(UIOpacity)).delay(delay).call(function () {
                if (disPos == 0) {
                  for (var i = 1; i < 5; i++) {
                    var Sprite_light = _this13.Node_lightRoot.children[i];
                    Sprite_light.getComponent(UIOpacity).opacity = 0;
                  }
                  Tween.stopAllByTarget(_this13.Sprite_light.getComponent(UIOpacity));
                  DwslModel.instance.lightPos = DwslModel.instance.result.OpenNum;
                  _this13.Sprite_light.position = _this13.Node_pointRoot.children[DwslModel.instance.result.OpenNum].position;
                  var Node_icon = _this13.Node_pointRoot.children[DwslModel.instance.lightPos];
                  Node_icon.scale = v3(1, 1, 1);
                  gts.Debug.Log("====run_end===");
                  return resolve(true);
                }
                DwslModel.instance.lightPos = ++DwslModel.instance.lightPos % cLight;
                _this13.Sprite_light.position = _this13.Node_pointRoot.children[DwslModel.instance.lightPos].position;

                //updateCarPos
                // this.doCarRunning(DwslModel.instance.lightPos, 0.15);

                var max = 4 - lightNum;
                var counts = max - 1;
                if (lightNum < 5) {
                  for (var _i4 = 1; _i4 < max; _i4++) {
                    var _Sprite_light2 = _this13.Node_lightRoot.children[_i4];
                    _Sprite_light2.getComponent(UIOpacity).opacity = 255 - _i4 * 255 / counts;
                    var _startPos2 = DwslModel.instance.lightPos - _i4;
                    _startPos2 = _startPos2 < 0 ? cLight - 1 : _startPos2;
                    _Sprite_light2.position = _this13.Node_pointRoot.children[_startPos2].position;
                  }
                  for (var _i5 = 1 + lightNum; _i5 < 4; _i5++) {
                    var _Sprite_light3 = _this13.Node_lightRoot.children[_i5];
                    _Sprite_light3.getComponent(UIOpacity).opacity = 0;
                  }
                  var _Sprite_light4 = _this13.Node_lightRoot.children[4];
                  _Sprite_light4.getComponent(UIOpacity).opacity = 100;
                  var startPos = DwslModel.instance.lightPos + 1;
                  startPos = startPos % cLight;
                  _Sprite_light4.position = _this13.Node_pointRoot.children[startPos].position;
                } else {
                  var _Sprite_light5 = _this13.Node_lightRoot.children[4];
                  _Sprite_light5.getComponent(UIOpacity).opacity = 0;
                }
                lightNum++;
              }).call(function () {
                disPos--;
                if (disPos >= 0) {
                  sDelay += 0.03;
                  runningEnd(sDelay);
                }
              }).start();
            };
            runningEnd(sDelay);
          });
        }

        // doCarRunning(toPos, duration) {
        //     Tween.stopAllByTarget(this.Sprite_car);
        //     let toPosCar = DwslDef.arrCarPos[toPos];
        //     if (this.Sprite_car.eulerAngles.z < 0 && toPosCar.z == 0) {
        //         this.Sprite_car.eulerAngles = v3(0, 0, 0);
        //     }
        //     tween(this.Sprite_car)
        //         .to(duration, { position: v3(toPosCar.x, toPosCar.y, 0), eulerAngles: v3(0, 0, toPosCar.z) })
        //         .start();
        // }
        ;

        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(DwslModel.instance.curBalance);
          if (strGold != this.selfGold.string) {
            DwslUtils.instance.updateLabel(this.selfGold, strGold);
          }
        };
        _proto.doRunning = /*#__PURE__*/function () {
          var _doRunning = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dest) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 3;
                  return this.doRunningStart();
                case 3:
                  _context3.next = 5;
                  return this.doRunningNormal();
                case 5:
                  _context3.next = 7;
                  return this.doRunningEnd();
                case 7:
                  this.showResult();
                  this.showPrize();
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function doRunning(_x4) {
            return _doRunning.apply(this, arguments);
          }
          return doRunning;
        }();
        _proto.showResult = function showResult() {
          var _this14 = this;
          var result = DwslModel.instance.result;
          switch (result.OpenNum) {
            case 7:
              {
                DwslUtils.instance.playOneShot(eSound.winBoom);
                break;
              }
            case 21:
              {
                DwslUtils.instance.playOneShot(eSound.winbox);
                break;
              }
            default:
              {
                DwslUtils.instance.playOneShot(eSound.winNomal);
                break;
              }
          }

          //显示中奖区域
          for (var i = 0; i < 6; i++) {
            var newLight = instantiate(this.Sprite_light);
            newLight.position = v3(0);
            this.Sprite_light.addChild(newLight);
            tween(newLight).delay(i * 0.5).to(1 + i * 0.55, {
              scale: v3(2.0, 2.0, 2.0)
            }).removeSelf().start();
            newLight.getComponent(UIOpacity).opacity = 0;
            tween(newLight.getComponent(UIOpacity)).delay(i * 0.5).to(0.3, {
              opacity: 255
            }).to(0.7 + i * 0.5, {
              opacity: 0
            }).start();
          }
          for (var _iterator8 = _createForOfIteratorHelperLoose(result.WinPos), _step8; !(_step8 = _iterator8()).done;) {
            var posIndex = _step8.value;
            var childNode = this.Node_betArea.getChildByName("Node_betArea_" + posIndex);
            var zhong = childNode.getChildByName("zhong");
            zhong.active = true;
            tween(zhong.getComponent(UIOpacity)).to(0.25, {
              opacity: 0
            }).to(0.25, {
              opacity: 255
            }).union().repeatForever().start();
          }
          this.scheduleOnce(function () {
            //显示结果
            var animalIndex = areaMap["" + result.OpenNum] - 1;
            _this14.Node_result.active = true;
            var Node_result = _this14.Node_result.getChildByName("result_ani");
            var Label_rate_0 = _this14.Node_result.getChildByName("Label_rate_0");
            var Label_rate_1 = _this14.Node_result.getChildByName("Label_rate_1");
            Label_rate_0.active = false;
            Label_rate_1.active = false;
            var result_ani = Node_result.getComponent(sp.Skeleton);
            var rateIndex = result.OpenNum == 0 ? 11 : result.OpenNum == 14 ? 10 : animalIndex < 4 ? animalIndex : animalIndex + 1;
            var strRate = "x" + DwslModel.instance.Rate[rateIndex];
            Label_rate_0.getComponent(Label).string = strRate;
            Label_rate_1.getComponent(Label).string = strRate;
            result_ani.skeletonData = DwslUtils.instance.getSkeletonData(animalIndex);
            _this14.scheduleOnce(function () {
              result_ani.setAnimation(0, "idle", false);
              result_ani.setCompleteListener(function () {
                result_ani.setCompleteListener(null);
                Label_rate_0.active = false;
                Label_rate_1.active = false;
                _this14.Node_result.active = false;
              });
            });
            _this14.scheduleOnce(function () {
              if (animalIndex < 10) {
                Label_rate_0.active = true;
                Label_rate_1.active = true;
              }
            }, 0.25);
          }, 0.5);
        };
        _proto.showPrize = function showPrize() {
          var _this15 = this;
          if (!DwslModel.instance.prize) {
            return;
          }
          if (DwslModel.instance.result.OpenNum == 7) {
            if (DwslModel.instance.myTotalBet > 0) {
              var headEffect = this.playerself.getChildByName("headEffect");
              headEffect.active = true;
              var aniHeadEffect = headEffect.getComponent(sp.Skeleton);
              aniHeadEffect.setAnimation(0, "takeall", true);

              // aniHeadEffect.setCompleteListener(() => {
              //     aniHeadEffect.setCompleteListener(null);
              //     headEffect.active = false;
              // });
            }

            for (var i = 0; i < this.Node_deskPlayer.children.length; i++) {
              var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", this.Node_deskPlayer);
              if (Node_headInfo.active) {
                var _headEffect2 = Node_headInfo.getChildByName("headEffect");
                _headEffect2.active = true;
                var _aniHeadEffect = _headEffect2.getComponent(sp.Skeleton);
                _aniHeadEffect.setAnimation(0, "takeall", true);

                // aniHeadEffect.setCompleteListener(() => {
                //     aniHeadEffect.setCompleteListener(null);
                //     headEffect.active = false;
                // });
              }
            }

            tween(this.node).delay(1.75).shake(0.5, 10, 10).call(function () {
              _this15.node.position = v3(0);
            }).start();
            return;
          }
          if (DwslModel.instance.prize.myPrize > 0) {
            // DwslUtils.instance.playSound(DwslDef.eSound.coin);
            var _headEffect3 = this.playerself.getChildByName("headEffect");
            _headEffect3.active = true;
            _headEffect3.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", this.playerself);
            Label_winAdd.parent.active = true;
            Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyShow(DwslModel.instance.prize.myPrize, 3);
            if (DwslModel.instance.endBalance > 0) {
              DwslModel.instance.curBalance = DwslModel.instance.endBalance;
              DwslModel.instance.endBalance = 0;
              this.updateGold();
            }
          }
          for (var _i6 = 0; _i6 < this.Node_deskPlayer.children.length; _i6++) {
            var _Node_headInfo = find("Node_head_" + _i6 + "/Node_headInfo", this.Node_deskPlayer);
            var playerInfo = DwslModel.instance.PlayerInfos[_i6];
            for (var _iterator9 = _createForOfIteratorHelperLoose(DwslModel.instance.prize.seatPrize), _step9; !(_step9 = _iterator9()).done;) {
              var prizeInfo = _step9.value;
              if (prizeInfo.Uid == playerInfo.Uid) {
                var _headEffect4 = _Node_headInfo.getChildByName("headEffect");
                if (prizeInfo.Prize > 0) {
                  _headEffect4.active = true;
                  _headEffect4.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                  var _Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", _Node_headInfo);
                  _Label_winAdd.parent.active = true;
                  _Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyShow(prizeInfo.Prize, 3);
                }
                break;
              }
            }
          }
        };
        _proto.doSendStar = function doSendStar(pos, index) {
          if (index === void 0) {
            index = 0;
          }
          var Node_root = this.Node_deskPlayer.getChildByName("Node_head_" + 0);
          var Node_star = find("Node_betArea_" + pos + "/Node_star", this.Node_betArea); //this.Node_betArea.getChildByName(`Node_area_${areaIndex}`);

          var newStar = this.Node_effectRoot.getChildByName("newStar" + pos);
          if (newStar) {
            return;
          }
          newStar = instantiate(this.Node_star);
          newStar.name = "newStar" + pos;
          newStar.getChildByName("lizi").active = true;
          this.Node_effectRoot.addChild(newStar);
          var startPos = Node_root.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          newStar.position = this.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(startPos);
          var toPos = Node_star.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          toPos = this.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);

          // DwslUtils.instance.playSound(DwslDef.eSound.star);
          tween(newStar).delay(index * 0.01).to(0.4, {
            position: toPos,
            scale: v3(0.5, 0.5, 0.5)
          }, {
            easing: "cubicOut"
          }).call(function () {
            newStar.getChildByName("lizi").active = false;
          }).start();
        }

        //    //IView
        ;

        _proto.updateView = function updateView(event, data) {
          var _this16 = this;
          switch (event) {
            case eProto.HD_enter:
              {
                Common.closeWait();
                ChipProxy.initChipList(DwslModel.instance.chipList);
                this.createChipsList();
                for (var i = 0; i < this.Node_betArea_label.children.length; i++) {
                  var childNode_label = this.Node_betArea_label.children[i];
                  var Label_rate = childNode_label.getChildByName("rate");
                  Label_rate.getComponent(Label).string = "x" + DwslModel.instance.Rate[i];
                }
                var Node_point_0_rate = find("Node_point_0/rate", this.Node_pointRoot).getComponent(Label);
                Node_point_0_rate.string = "X" + DwslModel.instance.Rate[11];
                var Node_point_14_rate = find("Node_point_14/rate", this.Node_pointRoot).getComponent(Label);
                Node_point_14_rate.string = "X" + DwslModel.instance.Rate[10];
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  var betTime;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        //10=25-15
                        betTime = DwslModel.instance.TotalSecond - DwslModel.instance.BetSecond;
                        if (!(DwslModel.instance.countDown < betTime)) {
                          _context4.next = 14;
                          break;
                        }
                        DwslModel.instance.gameStatus = eStatus.result;
                        Tween.stopAllByTarget(_this16.Sprite_light.getComponent(UIOpacity));
                        DwslModel.instance.lightPos = DwslModel.instance.result.OpenNum;
                        _this16.Sprite_light.active = true;
                        _this16.Sprite_light.getComponent(UIOpacity).opacity = 255;
                        _this16.Sprite_light.position = _this16.Node_pointRoot.children[DwslModel.instance.result.OpenNum].position;
                        _this16.showCountDown();
                        _this16.updateStatus();
                        _this16.showResult();
                        _this16.showPrize();
                        _context4.next = 24;
                        break;
                      case 14:
                        DwslModel.instance.countDown = DwslModel.instance.gameInfo.Countdown - betTime;
                        DwslModel.instance.gameStatus = eStatus.Bet;

                        // DwslUtils.instance.playOneShot(DwslDef.eSound.warning);
                        // this.tishi.node.active = true;
                        // this.tishi.setAnimation(0, "start", false);
                        // this.tishi.setCompleteListener(() => {
                        //     this.tishi.setCompleteListener(null);
                        //     this.tishi.node.active = false;
                        // });

                        _this16.updateStatus();
                        _context4.next = 19;
                        return _this16.showCountDown();
                      case 19:
                        DwslModel.instance.gameStatus = eStatus.running;
                        DwslModel.instance.countDown = betTime;
                        _this16.showCountDown();
                        _this16.updateStatus();
                        _this16.doRunning();
                      case 24:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }))();

                // let startPosCar = DwslDef.arrCarPos[DwslModel.instance.lightPos];
                // this.Sprite_car.position = v3(startPosCar.x, startPosCar.y, 0);
                // this.Sprite_car.eulerAngles = v3(0, 0, startPosCar.z);

                this.onUpdatePlayers();
                this.publicPlayerNum.string = "" + DwslModel.instance.PlayerCount;
                this.updatePath();
                this.updateBet_other();
                this.updateBet_self(true);

                // DwslModel.instance.lightPos = 0;
                this.Label_num.string = "" + DwslModel.instance.gameNo;
                break;
              }
            case eProto.gameStart:
              {
                this.doClearChip();
                DwslModel.instance.chipList = data.Chips;
                DwslModel.instance.gameNo = data.GameNo;
                DwslModel.instance.BetSecond = data.BetSecond;
                DwslModel.instance.TotalSecond = data.TotalSecond;
                DwslModel.instance.TotalSecond = data.TotalSecond;
                DwslModel.instance.PlayerCount = data.PlayerCount;
                DwslModel.instance.PlayerInfos = data.PlayerInfos.slice();
                this.onUpdatePlayers();
                this.Label_num.string = "" + DwslModel.instance.gameNo;
                this.publicPlayerNum.string = "" + DwslModel.instance.PlayerCount;
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  var betTime;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        DwslModel.instance.gameStatus = eStatus.Bet;
                        DwslModel.instance.countDown = DwslModel.instance.BetSecond;
                        _this16.updateStatus();
                        DwslUtils.instance.playOneShot(eSound.warning);
                        _this16.tishi.node.active = true;
                        _this16.tishi.setAnimation(0, "start", false);
                        _this16.tishi.setCompleteListener(function () {
                          _this16.tishi.setCompleteListener(null);
                          _this16.tishi.node.active = false;
                        });

                        //10=25-15
                        _context5.next = 9;
                        return _this16.showCountDown();
                      case 9:
                        Common.setButtonEnableWithGray(_this16.BtnLast, false);
                        Common.setButtonEnableWithGray(_this16.BtnJiabei, false);
                        betTime = DwslModel.instance.TotalSecond - DwslModel.instance.BetSecond;
                        DwslModel.instance.gameStatus = eStatus.running;
                        DwslModel.instance.countDown = betTime;
                        _this16.showCountDown();
                        _this16.updateStatus();
                        _this16.doRunning();
                      case 17:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }))();
                break;
              }
            case eProto.allBet:
              {
                this.updateBet_other(data);
                break;
              }
            case eProto.HD_bet:
              {
                DwslModel.instance.curBalance -= data.Amount;
                this.updateGold();
                this.updateBet_self();
                break;
              }
            case eProto.Bet:
              {
                var betInfo = data;
                if (betInfo.Uid == DwslModel.instance.PlayerInfos[0].Uid) {
                  this.doSendStar(betInfo.Pos);
                }
                for (var _i7 = 0; _i7 < DwslModel.instance.PlayerInfos.length; _i7++) {
                  var playerInfo = DwslModel.instance.PlayerInfos[_i7];
                  var Node_root = this.Node_deskPlayer.getChildByName("Node_head_" + _i7);
                  if (betInfo.Uid == playerInfo.Uid && Node_root) {
                    this.doSendChip(betInfo.Pos, betInfo.Amount, Node_root).then(function (isSend) {
                      if (isSend) {
                        var Node_betArea = _this16.Node_betArea_label.getChildByName("Node_betArea_" + betInfo.Pos);
                        var yz_num = Node_betArea.getChildByName("yz_num");
                        yz_num.active = true;
                        tween(yz_num).to(0.2, {
                          scale: v3(1.2, 1.2, 1.2)
                        }).call(function () {
                          var totalAmount = DwslModel.instance.totalBetList[betInfo.Pos];
                          yz_num.getComponent(Label).string = totalAmount > 0 ? Common.ChangeMoneyFormat(totalAmount, 2) : "";
                        }).to(0.2, {
                          scale: v3(1.0, 1.0, 1.0)
                        }).start();
                      }
                    });
                    break;
                  }
                }
                break;
              }
            case eProto.getPumping:
              {
                // this.Label_pumping.node.active = DwslModel.instance.nPummping > 0;
                // this.Label_pumping.string = `<color=#ffffff >Trải nghiệm ngay với chỉ</c><color=#fd6500> ${DwslModel.instance.nPummping}% </color><color=#ffffff > tiền phế</c>`;
                break;
              }

            //            //////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                //                // 断线重连
                Common.closeWait();
                //                // NetManager.instance.removeWaitServicePush();
                this.gameShow();
                break;
              }
          }
        };
        _proto.BindAreaBtns = function BindAreaBtns() {
          var _this17 = this;
          for (var _iterator10 = _createForOfIteratorHelperLoose(this.Node_betArea.children), _step10; !(_step10 = _iterator10()).done;) {
            var c = _step10.value;
            if (!c.getComponent(BtnArea)) {
              continue;
            }
            BtnArea.OnClicked(c, function (btn) {
              gts.Debug.Log("====BtnArea.OnClicked===" + btn.node.name);
              _this17.betIntoPool(btn.node.name.replace("Node_betArea_", ""));
            }, this);
          }
        };
        _proto.LastBet = function LastBet() {
          var _this18 = this;
          if (DwslModel.instance.gameStatus != eStatus.Bet) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          DwslUtils.instance.playOneShot(eSound.chipIn);
          for (var index = 0; index < 11; index++) {
            var vBet = DwslModel.instance.betselfLast[index];
            if (vBet > 0) {
              if (DwslGameCtrl.instance.sendDoingBet(index, vBet)) {
                this.doSendChip(index, vBet);
              }
            }
          }
          Common.setButtonEnableWithGray(this.BtnLast, false);
          tween(this.BtnLast.node).delay(0.5).call(function () {
            Common.setButtonEnableWithGray(_this18.BtnLast, true);
          }).start();
        };
        _proto.doubleBet = function doubleBet() {
          var _this19 = this;
          if (DwslModel.instance.gameStatus != eStatus.Bet) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          DwslUtils.instance.playOneShot(eSound.chipIn);
          for (var index = 0; index < 11; index++) {
            var vBet = DwslModel.instance.myBetList[index];
            if (vBet > 0) {
              if (DwslGameCtrl.instance.sendDoingBet(index, vBet)) {
                this.doSendChip(index, vBet);
              }
            }
          }
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          tween(this.BtnJiabei.node).delay(0.5).call(function () {
            Common.setButtonEnableWithGray(_this19.BtnJiabei, true);
          }).start();
        };
        return DwslGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BtnLast", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BtnJiabei", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selfName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selfGold", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "publicPlayerNum", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "playerPublic", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "playerself", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_betArea", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_betArea_label", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_record_content", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lab_timer", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_myBet", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "recordIma", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Node_pointRoot", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Node_lightRoot", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_light", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_deskPlayer", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "tishi", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Label_num", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Node_result", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Node_star", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec28], {
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

System.register("chunks:///_virtual/DwslHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DwslModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, DwslModel;
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
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      DwslModel = module.DwslModel;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ceb7fg6s8BJ9ZSawupK6gU9", "DwslHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DwslHelp = exports('DwslHelp', (_dec = ccclass("DwslHelp"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DwslHelp, _Component);
        function DwslHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "helpRate", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DwslHelp.prototype;
        /////////////////////////////
        _proto.start = function start() {
          for (var i = 0; i < this.helpRate.children.length; i++) {
            var Label_rate = this.helpRate.children[i];
            Label_rate.getComponent(Label).string = "X" + DwslModel.instance.Rate[i];
          }
        };
        return DwslHelp;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "helpRate", [_dec2], {
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

System.register("chunks:///_virtual/DwslModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "86373tqqAxNaLWskBDX9l0/", "DwslModel", undefined);
      var DwslModel = exports('DwslModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(DwslModel, _GameDef$BaseSington);
        function DwslModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          //    //抽水
          _this.nPummping = 0;
          _this.curBet = 0;
          _this.countDown = 0;
          _this.chipList = [];
          _this.gameNo = null;
          _this.BetSecond = 0;
          _this.TotalSecond = 0;
          _this.gameStatus = void 0;
          _this.gameInfo = null;
          _this.myBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          _this.totalBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          _this.betselfLast = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          _this.PosMaxBet = null;
          _this.history = [];
          _this.Rate = [];
          _this.myTotalBet = 0;
          _this.result = null;
          _this.prize = null;
          _this.PlayerCount = 0;
          _this.PlayerInfos = null;
          _this.lightPos = 0;
          //    //聊天列表-文本
          _this._chatQueueList = [];
          //    //聊天列表-表情
          _this._expressionQueueList = [];
          return _this;
        }
        _createClass(DwslModel, [{
          key: "chatQueueList",
          get: function get() {
            return this._chatQueueList;
          },
          set: function set(chatQueueList) {
            this._chatQueueList = chatQueueList;
          }
        }, {
          key: "expressionQueueList",
          get: function get() {
            return this._expressionQueueList;
          },
          set: function set(expressionQueueList) {
            this._expressionQueueList = expressionQueueList;
          }
        }]);
        return DwslModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DwslPath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './EventManager.ts', './DwslDef.ts', './DwslModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, view, v3, Component, Common, EventManager, areaMap, Event, DwslModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      areaMap = module.areaMap;
      Event = module.Event;
    }, function (module) {
      DwslModel = module.DwslModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "aa3c0wo7iFJ5b50o2xaNFWH", "DwslPath", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DwslPath = exports('default', (_dec = ccclass("DwslPath"), _dec2 = menu("DwslPath"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DwslPath, _Component);
        function DwslPath() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_list", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DwslPath.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          var size = view.getVisibleSize();
          if (!Common.checkStandard()) {
            this.node.scale = v3(750 / 1080, 750 / 1080, 1);
          }
          this.updatePath();
        };
        _proto.updatePath = function updatePath() {
          var _this2 = this;
          var history = DwslModel.instance.history.slice();
          for (var i = history.length - 1; i >= 0; i--) {
            if (history[i] == 7 || history[i] == 21) {
              history.splice(i, 1);
            }
          }
          history = history.slice(0, 60).reverse();
          var hList = [];
          var loseCounts = [];
          for (var _i = 0; _i < 10; _i++) {
            loseCounts[_i] = 0;
          }
          for (var _i2 = 0; _i2 < history.length; _i2++) {
            var openNum = history[_i2];
            var nextOpenIndex = _i2 < history.length - 1 ? areaMap["" + history[_i2 + 1]] - 1 : null;
            var index = areaMap["" + openNum] - 1;
            for (var _i3 = 0; _i3 < 10; _i3++) {
              loseCounts[_i3] = index == _i3 ? 0 : loseCounts[_i3] + 1;
            }
            hList.push({
              openNum: openNum,
              loseCounts: loseCounts.slice(),
              nextOpenIndex: nextOpenIndex
            });
          }
          this.scrollView_list.setData(hList, function () {
            _this2.scrollView_list.scrollView.scrollToRight(0.5);
          });
          this.scrollView_list.refresh();
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(Event.onUpdateRecord, this.updatePath, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(Event.onUpdateRecord, this.updatePath, this);
        };
        return DwslPath;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_list", [_dec3], {
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

System.register("chunks:///_virtual/DwslPathItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './DwslDef.ts', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, v3, UITransform, v2, Component, AutoChangeParent, areaMap, GUtil;
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
      Sprite = module.Sprite;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      UITransform = module.UITransform;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      areaMap = module.areaMap;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "88a33tazalG0q2PQbgRbfT0", "DwslPathItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var DwslPathItem = exports('default', (_dec = ccclass("DwslPathItem"), _dec2 = menu("game/Dwslgame/DwslPathItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DwslPathItem, _Component);
        function DwslPathItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_line", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_icon", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_icon", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpriteFrame", _descriptor8, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = DwslPathItem.prototype;
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
          var tempData = this.item.data;
          this.Sprite_icon.node.active = true;
          this.Sprite_icon.spriteFrame = this.iconSpriteFrame[areaMap[tempData.openNum] - 1];
          this.Sprite_line.active = tempData.nextOpenIndex != null;
          var posY = [-0.5, 68.3, 137.1, -69.3, -206.9, -275.7, -344.5, -138.1, 205.9, 274.7];
          this.Label_gameNo.string = "" + (this.item.itemIndex + 1);
          for (var i = 0; i < 10; i++) {
            var counts = tempData.loseCounts[i];
            if (counts == 0) {
              var curPos = v3(0, posY[i], 0);
              this.Label_icon[i].node.active = false;
              this.Sprite_icon.node.position = curPos;
              this.Sprite_line.position = curPos;
              if (this.Sprite_line.active) {
                var nextPos = v3(100, posY[tempData.nextOpenIndex], 0);
                this.Sprite_line.angle = this.getAngle(curPos, nextPos);
                this.Sprite_line.getComponent(UITransform).width = GUtil.GetDistance(curPos, nextPos);
              }
            } else {
              this.Label_icon[i].node.active = true;
              this.Label_icon[i].string = "" + counts;
            }
          }

          // this.Sprite_bg.active = this.item.itemIndex % 2 != 0;

          // this.Label_gameNo.string = Common.setGameNo(tempData.GameNo);

          // //        //改为开奖结果
          // let strResult = Common.getRecordResult(tempData);
          // this.Label_gold.string = strResult;

          // let date = Common.getTimeFormat(tempData.CreateAt);
          // this.Label_time.string = date.time;
          // this.Label_date.string = date.date;
          // this.Label_bet.string = SlotPigUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";

          // let str: string = "";
          // if (tempData.Income > 0) {
          //     str = "+" + SlotPigUtils.instance.numberFormat(tempData.Income / 1000, 2);
          //     this.Label_win.color = color(255, 0, 0, 255);
          // } else if (tempData.Income <= 0) {
          //     str = "" + SlotPigUtils.instance.numberFormat(tempData.Income / 1000, 2);
          //     this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          // }
          // this.Label_win.string = str + "K";
        };

        _proto.getAngle = function getAngle(start, end) {
          //        //计算出朝向
          var Keno = end.x - start.x;
          var dy = end.y - start.y;
          var dir = v2(Keno, dy);

          //        //根据朝向计算出夹角弧度
          var angle = dir.signAngle(v2(1, 0));

          //        //将弧度转换为欧拉角
          var degree = angle / Math.PI * 180;
          return -degree;
        };
        _createClass(DwslPathItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return DwslPathItem;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_line", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_icon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_icon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "iconSpriteFrame", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      // this.line.getComponent(UITransform).width = distance;
      // this.line.angle = -this.getAngle(curPos, nextPos);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DwslRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './EventManager.ts', './ConfigManager.ts', './NetManager.ts', './DataManager.ts', './DwslDef.ts', './DwslModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, find, view, v3, Label, instantiate, color, Sprite, Component, Common, EventManager, ConfigManager, NetManager, DataManager, UserKey, areaMap, DwslModel;
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
      find = module.find;
      view = module.view;
      v3 = module.v3;
      Label = module.Label;
      instantiate = module.instantiate;
      color = module.color;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      areaMap = module.areaMap;
    }, function (module) {
      DwslModel = module.DwslModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "58e75yaZPFOE6960ENQBjWR", "DwslRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DwslRecord = exports('default', (_dec = ccclass("DwslRecord"), _dec2 = menu("DwslRecord"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DwslRecord, _Component);
        function DwslRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_item", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordIma", _descriptor3, _assertThisInitialized(_this));
          _this._gameType = void 0;
          _this._curPage = 1;
          _this._pageSize = 6;
          _this._lastPage = 1;
          _this.next_btn = null;
          _this.before_btn = null;
          return _this;
        }
        var _proto = DwslRecord.prototype;
        _proto.onLoad = function onLoad() {
          this.next_btn = find("bg/next_btn", this.node);
          this.before_btn = find("bg/before_btn", this.node);
        };
        _proto.start = function start() {
          var size = view.getVisibleSize();
          if (!Common.checkStandard()) {
            this.node.scale = v3(750 / 1080, 750 / 1080, 1);
          }
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
        };
        _proto.setGameType = function setGameType(gameType, pageSize) {
          if (pageSize === void 0) {
            pageSize = 8;
          }
          this._gameType = gameType;
          this._pageSize = pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: 0,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onBefore = function onBefore() {
          this._lastPage = this._curPage;

          //        //上一页
          this._curPage = this._curPage - 1;
          if (this._curPage < 1) {
            this._curPage = 1;
          }
          var start = (this._curPage - 1) * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage = this._curPage + 1;
          var start = (this._curPage - 1) * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.showRecordLayerByPage = function showRecordLayerByPage(data) {
          if (!data || !data.BetRecord || data.BetRecord.length == 0) {
            this._curPage = this._lastPage;
            this.next_btn.active = false;
            return;
          }
          find("bg/content_bg/page", this.node).getComponent(Label).string = "PAGE: " + this._curPage;
          this.before_btn.active = this._curPage != 1;
          this.next_btn.active = data.NextPage;
          gts.Debug.Log("=Record dataList=" + JSON.stringify(data));
          this.content.removeAllChildren();
          var dataList = data.BetRecord;
          for (var i = 0; i < dataList.length; ++i) {
            var item = instantiate(this.node_item);
            item.active = true;
            item.parent = this.content;
            var sdata = dataList[i];
            var bg = find("bg", item);
            bg.active = i % 2 == 1;
            var date = Common.getTimeFormat(sdata.CreateAt);
            item.getChildByName("bg").active = i % 2 == 1;
            item.getChildByName("time_date").getComponent(Label).string = date.date;
            item.getChildByName("time_scond").getComponent(Label).string = date.time;
            item.getChildByName("winNum").getComponent(Label).string = Common.numFormat(sdata.Income);
            if (sdata.Income > 0) {
              item.getChildByName("winNum").getComponent(Label).string = "+" + item.getChildByName("winNum").getComponent(Label).string;
            }
            item.getChildByName("winNum").getComponent(Label).color = sdata.Income > 0 ? color(0xff, 0, 0, 255) : color(0x68, 0xf5, 0x01, 255);
            item.getChildByName("touzhu_num").getComponent(Label).string = Common.numFormat(sdata.BetAmount);

            //改为开奖结果
            var GameResult = JSON.parse(sdata.GameResult);
            item.getChildByName("icon").getComponent(Sprite).spriteFrame = this.recordIma[areaMap[GameResult.OpenNum] - 1];
            var rate = item.getChildByName("icon").getChildByName("rate");
            if (GameResult.OpenNum == 0 || GameResult.OpenNum == 14) {
              rate.active = true;
              rate.getComponent(Label).string = GameResult.OpenNum == 0 ? "X" + DwslModel.instance.Rate[11] : "X" + DwslModel.instance.Rate[10];
            }
            item.getChildByName("platform").getComponent(Label).string = DataManager.instance.getUserDataForKey(UserKey.PLATFORM) || "";
            item.getChildByName("gameId").getComponent(Label).string = sdata.GameNo;
          }
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.getInstance().protocolHall.getRecord) {
            if (data.Data.RecordType == this._gameType) {
              this.showRecordLayerByPage(data.Data);
            }
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
        };
        return DwslRecord;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "recordIma", [_dec5], {
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

System.register("chunks:///_virtual/DwslScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './DwslDef.ts', './ConfigManager.ts', './EventManager.ts', './DwslUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, instantiate, UIOpacity, tween, Component, NetManager, ViewManager, Common, cBundle, Event, ConfigManager, EventManager, DwslUtils;
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
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      cBundle = module.cBundle;
      Event = module.Event;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      DwslUtils = module.DwslUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ec58ewydgNHzYTO07UZH9/C", "DwslScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DwslScene = exports('default', (_dec = ccclass("DwslScene"), _dec2 = menu("game/Dwslgame/DwslScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DwslScene, _Component);
        function DwslScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_hall", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor3, _assertThisInitialized(_this));
          _this._node_hall = null;
          _this._node_Game = null;
          return _this;
        }
        var _proto = DwslScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          DwslUtils.instance.bundle = assetManager.getBundle(cBundle);
          DwslUtils.instance.preLoad();
          DwslUtils.instance.playBgMusic();
          this.onLoadGame();
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(Event.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(Event.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(Event.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(Event.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDestroy = function onDestroy() {};
        _proto.start = function start() {
          Common.showWait();
        };
        _proto.onLoadHall = function onLoadHall() {
          console.time("bundle.onLoadHall");
          // Common.showWait();
          if (ViewManager.instance.miniLayer) {
            ViewManager.instance.miniLayer.getChildByName("miniGame").angle = 0;
          }
          //        //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.showHall = function showHall() {
          var _this2 = this;
          if (this.prefab_hall) {
            if (!this._node_hall) {
              this._node_hall = instantiate(this.prefab_hall);
              this.node.addChild(this._node_hall);
            }
            this._node_hall.getComponent(UIOpacity).opacity = 0;
            tween(this._node_hall.getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).call(function () {
              if (_this2.firstNode) {
                _this2.firstNode.removeFromParent();
                _this2.firstNode.destroy();
                _this2.firstNode = null;
              }
              if (_this2._node_Game) {
                _this2._node_Game.removeFromParent();
                _this2._node_Game.destroy();
                _this2._node_Game = null;
              }
            }).start();

            // Common.closeWait();

            console.timeEnd("bundle.onLoadHall");
          }
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this3 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            // Common.showWait();
            DwslUtils.instance.bundle.load("prefab/ui_game", Prefab, function (cur, total) {}, function (err, prefab) {
              _this3.prefab_game = prefab;
              _this3.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this4 = this;
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              this._node_Game.getComponent(UIOpacity).opacity = 0;
              fadeInTimes = 0.15;
            }
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              if (_this4._node_hall) {
                _this4._node_hall.removeFromParent();
                _this4._node_hall.destroy();
                _this4._node_hall = null;
              }

              // Common.closeWait();
            }).start();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return DwslScene;
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

System.register("chunks:///_virtual/DwslUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './DwslDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, sp, GameDef, AudioManager, eSound, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      Node = module.Node;
      Label = module.Label;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      UIRenderer = module.UIRenderer;
      Button = module.Button;
      sys = module.sys;
      sp = module.sp;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSound = module.eSound;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8b283vudzdLSpSPjT41pGhJ", "DwslUtils", undefined);
      var arrSkeletonDataName = ["result_Pigeon", "result_Peacock", "result_Bird", "result_Eagle", "result_panda", "result_monkey", "result_lion", "result_Rabbit", "result_Shark", "result_GoldShark", "result_TakeAll", "result_WinMore"];
      var DwslUtils = exports('DwslUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(DwslUtils, _GameDef$BaseSington);
        function DwslUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = DwslUtils.prototype;
        //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/DwslGameView");
          this.bundle.preloadDir("prefab");
          this.bundle.preloadDir("sound");
        };
        _proto.asyncLoad = /*#__PURE__*/function () {
          var _asyncLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(parth, type, onComplete) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this2.bundle.load(parth, type, function (error, assets) {
                      onComplete(error, assets);
                      error ? reject(false) : resolve(true);
                    });
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function asyncLoad(_x, _x2, _x3) {
            return _asyncLoad.apply(this, arguments);
          }
          return asyncLoad;
        }();
        _proto.asyncLoadDir = /*#__PURE__*/function () {
          var _asyncLoadDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(parth, type, onComplete) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    _this3.bundle.loadDir(parth, type, function (error, assets) {
                      onComplete(error, assets);
                      error ? reject(false) : resolve(true);
                    });
                  }));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function asyncLoadDir(_x4, _x5, _x6) {
            return _asyncLoadDir.apply(this, arguments);
          }
          return asyncLoadDir;
        }();
        _proto.loadRes_icon = /*#__PURE__*/function () {
          var _loadRes_icon = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cb) {
            var _this4 = this;
            var arrHLoad;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (cb === void 0) {
                    cb = null;
                  }
                  arrHLoad = [];
                  arrHLoad.push(this.asyncLoadDir("spine/resultAnimal", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpineData), _step; !(_step = _iterator()).done;) {
                        var spineData = _step.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));

                  // arrHLoad.push(
                  //     this.asyncLoadDir("spine/effect/dynamic", sp.SkeletonData, (err, arrSpineData: sp.SkeletonData[]) => {
                  //         if (!err) {
                  //             for (const spineData of arrSpineData) {
                  //                 this.arrSkeletonData[spineData.name] = spineData;
                  //             }
                  //         }
                  //     })
                  // );
                  _context3.next = 5;
                  return Promise.all(arrHLoad);
                case 5:
                  if (cb) {
                    cb();
                  }
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function loadRes_icon(_x7) {
            return _loadRes_icon.apply(this, arguments);
          }
          return loadRes_icon;
        }();
        _proto.loadPopBuddle = function loadPopBuddle(path, callback1, callback2, isshowWait) {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            if (isshowWait) {
              Common.showWait();
            }
            _this5.bundle.load(path, Prefab, function (cur, total) {
              callback1(cur, total);
            }, function (err, GameLayer) {
              if (isshowWait) {
                Common.closeWait();
              }
              callback2(GameLayer);
              err ? reject(false) : resolve(true);
            });
          });
        };
        _proto.playBgMusic = function playBgMusic(soundPath) {
          if (soundPath === void 0) {
            soundPath = eSound.bg;
          }
          AudioManager.instance.playBgMusic(soundPath, this.bundle, true);
        };
        _proto.playSound = function playSound(soundPath, isLoop, cb) {
          var _this6 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (cb === void 0) {
            cb = null;
          }
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err || _this6.soundIDList[soundPath]) {
              return;
            }
            var soundID = AudioManager.instance.playSound(audioClip, isLoop);
            _this6.soundIDList[soundPath] = soundID;
            AudioManager.instance.setFinishCallback(soundID, function () {
              _this6.soundIDList[soundPath] = null;
              delete _this6.soundIDList[soundPath];
              if (cb) {
                cb();
              }
            });
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
        _proto.stopSound = function stopSound(soundPath) {
          var curSoundID = this.soundIDList[soundPath];
          if (curSoundID) {
            AudioManager.instance.stopSound(curSoundID);
            this.soundIDList[soundPath] = null;
            delete this.soundIDList[soundPath];
          }
        };
        _proto.stopAllSound = function stopAllSound() {
          var keys = Object.keys(this.soundIDList);
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var key = _keys[_i];
            AudioManager.instance.stopSound(this.soundIDList[key]);
          }
        };
        _proto.numberFormatDI = function numberFormatDI(num, digits, isFloat) {
          if (isFloat === void 0) {
            isFloat = true;
          }
          var inter = Common.numFormatInt(num);
          var digit = isFloat ? this.numberFormatFloatD(num, digits) : this.numberFormatD(num, digits);
          return "" + inter + digit + "K";
        };
        _proto.numberFormatD = function numberFormatD(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          var digit = num - Math.floor(num);
          if (!arrRate[1] || digit < 1 / Math.pow(10, digits)) {
            return "";
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
          }
          return "." + arrRate[1];
        };
        _proto.numberFormatFloatD = function numberFormatFloatD(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          if (!arrRate[1]) {
            return ".00";
          } else if (arrRate[1].length < digits) {
            while (arrRate[1].length < digits) {
              arrRate[1] = arrRate[1].concat("0");
            }
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
          }
          return "." + arrRate[1];
        };
        _proto.numberFormat = function numberFormat(num, digits) {
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
        };
        _proto.numberFormatFloat = function numberFormatFloat(num, digits) {
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
        _proto.updateLabel = function updateLabel(label, num) {
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            labelCom.string = "" + num;
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.updateLabelAddNf = function updateLabelAddNf(label, nums, isFloatFormat, curNums) {
          var _this7 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          if (curNums === void 0) {
            curNums = 0;
          }
          var destWin = nums;
          var curWin = curNums;
          var disWin = (nums - curWin) / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this7.numberFormatFloatD(curWin / 1000, 2.0) : _this7.numberFormatD(curWin / 1000, 2.0);
            label.string = "" + inter + digit + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        };
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat, curNums) {
          var _this8 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          if (curNums === void 0) {
            curNums = 0;
          }
          var destWin = nums;
          var curWin = curNums;
          var disWin = (nums - curWin) / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this8.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this8.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this9 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this9.numberFormatFloat(curWin, 0) : "" + _this9.numberFormat(curWin, 0);
          })).delay(2.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        }
        //////////////////////////
        ;

        _proto.getFontData = function getFontData(name) {
          if (!this.arrFontData) {
            return null;
          }
          return this.arrFontData[name];
        };
        _proto.getSkeletonData = function getSkeletonData(index) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = arrSkeletonDataName[index];
          var ret = this.arrSkeletonData[strAni];
          if (!ret) {
            return null;
          }
          return ret;
        };
        _proto.setBtnBetGray = function setBtnBetGray(btnNode, isGray) {
          var RenderComponent = btnNode.getComponent(UIRenderer);
          if (!RenderComponent) {
            return;
          }
          var parentNode = btnNode.parent.getComponent(Button);
          isGray ? RenderComponent.setMaterial(0, parentNode.grayMaterial) : RenderComponent.setMaterial(0, parentNode.normalMaterial);
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        };
        return DwslUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/DwslGame', 'chunks:///_virtual/DwslGame'); 
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