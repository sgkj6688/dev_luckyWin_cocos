System.register("chunks:///_virtual/BcbmChipObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BcbmModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, tween, Sprite, Component, BcbmModel;
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
      BcbmModel = module.BcbmModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1e706zRoJRBP6uY9+W2T9y4", "BcbmChipObject", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var chipObject = exports('default', (_dec = ccclass("BcbmChipObject"), _dec2 = menu("game/Bcbmgame/chipObject"), _dec3 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
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
          var spritef = this.smallCMArr[BcbmModel.instance.chipList[info.value]];
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

System.register("chunks:///_virtual/BcbmCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './NetManager.ts', './BcbmDef.ts', './BcbmModel.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, assetManager, i18n, GameDef, NetManager, eProto, BcbmModel, Common, MainManager;
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
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      BcbmModel = module.BcbmModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e2adcesojJBe7AO/UiDNL0v", "BcbmCtrl", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var BcbmGameCtrl = exports('BcbmGameCtrl', /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(BcbmGameCtrl, _GameDef$BaseCtrl);
        function BcbmGameCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this.BUNDLE = "BcbmGame";
          return _this;
        }
        var _proto = BcbmGameCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete BcbmGameCtrl._instance;
          BcbmGameCtrl._instance = null;
          BcbmModel.destroy();
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
            EventManager.on(value, this.onRecvData, this);
          }

          //        //注册网络监听--大厅
          EventManager.on(ConfigManager.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.on(ConfigManager.protocolHall.getWallet, this.onRecvData, this);
          EventManager.on(ConfigManager.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.removeProto = function removeProto() {
          //        //注册网络监听--本游戏
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.off(value, this.onRecvData, this);
          }

          //        //注册网络监听--大厅
          EventManager.off(ConfigManager.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.off(ConfigManager.protocolHall.getWallet, this.onRecvData, this);
          EventManager.off(ConfigManager.protocolHall.pushWallet, this.onRecvData, this);
        };
        //    /**请求抽水 */
        _proto.reqPumping = function reqPumping() {
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getPumping, {
            gameName: "carRoulette"
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
                BcbmModel.instance.gameInfo = data.Data;
                BcbmModel.instance.chipList = BcbmModel.instance.gameInfo.Chips;
                BcbmModel.instance.gameNo = BcbmModel.instance.gameInfo.GameNo;
                BcbmModel.instance.BetSecond = BcbmModel.instance.gameInfo.BetSecond;
                BcbmModel.instance.TotalSecond = BcbmModel.instance.gameInfo.TotalSecond;
                BcbmModel.instance.countDown = BcbmModel.instance.gameInfo.Countdown;
                BcbmModel.instance.lightPos = BcbmModel.instance.gameInfo.OpenNum || 0;
                BcbmModel.instance.history = BcbmModel.instance.gameInfo.Results.slice();
                BcbmModel.instance.PosMaxBet = BcbmModel.instance.gameInfo.PosMaxBet;
                BcbmModel.instance.myBetList = data.Data.MyTotalBet;
                BcbmModel.instance.totalBetList = data.Data.TotalBet;
                var keys = Object.keys(BcbmModel.instance.gameInfo.PosOdds);
                for (var i = 0; i < keys.length; i++) {
                  var odds = BcbmModel.instance.gameInfo.PosOdds[keys[i]];
                  BcbmModel.instance.Rate[i] = odds;
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
            case eProto.HD_bet:
              {
                BcbmModel.instance.myBetList[data.Data.Pos] += data.Data.Amount;
                break;
              }
            case eProto.open:
              {
                BcbmModel.instance.result = {
                  OpenNum: data.Data.OpenNum,
                  WinPos: data.Data.WinPos[0]
                };
                BcbmModel.instance.history.unshift(BcbmModel.instance.result.OpenNum);
                break;
              }
            case eProto.prize:
              {
                BcbmModel.instance.prize = data.Data;
                break;
              }
            case eProto.getPumping:
              {
                BcbmModel.instance.nPummping = data.Data.Pumping;
                break;
              }

            //            //////////////////////////////////////////////////////
            //            //获取钱包-推送钱包-断线重连
            case ConfigManager.protocolHall.pushWallet:
            case ConfigManager.protocolHall.getWallet:
            case ConfigManager.protocolHall.login:
              {
                // emitData = {};
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
          // this.SendData(BcbmDef.eProto.getInfo, {});
        };
        _proto.sendDoingBet = function sendDoingBet(pos, num) {
          if (BcbmModel.instance.countDown < 3) {
            Common.showTip(i18n.lang.disableBet);
            return false;
          }
          if (BcbmModel.instance.myBetList[pos] + num > BcbmModel.instance.PosMaxBet["" + pos]) {
            Common.showTip(i18n.lang[10064].replace("{0}", "" + Common.ChangeMoneyFormat(BcbmModel.instance.PosMaxBet["" + pos], 3)));
            return false;
          }
          this.SendData(eProto.HD_bet, {
            pos: pos,
            amount: num,
            gameNo: BcbmModel.instance.gameNo
          });
          return true;
        };
        _proto.Send_ExitRoom = function Send_ExitRoom() {
          this.SendData(eProto.HD_leave);
        };
        _createClass(BcbmGameCtrl, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return BcbmGameCtrl;
      }(GameDef.BaseCtrl));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BcbmDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "090ccSOQBNDaZIBRfPWdT2t", "BcbmDef", undefined);
      //gameDef moudle
      var cBundle = exports('cBundle', "BcbmGame");
      var Event = exports('Event', /*#__PURE__*/function (Event) {
        Event["onLoadHall"] = "onLoadHall";
        Event["onLoadGame"] = "onLoadGame";
        Event["onUpdateRecord"] = "onUpdateRecord";
        return Event;
      }({}));
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
      //xy:pos  z:zRotation
      var arrCarPos = exports('arrCarPos', [{
        x: 0,
        y: 418,
        z: 0
      }, {
        x: 148,
        y: 418,
        z: 0
      }, {
        x: 296,
        y: 418,
        z: 0
      }, {
        x: 479,
        y: 408,
        z: -14
      }, {
        x: 656,
        y: 322,
        z: -40
      }, {
        x: 765,
        y: 182,
        z: -64
      }, {
        x: 809,
        y: 0,
        z: -90
      }, {
        x: 765,
        y: -182,
        z: -113
      }, {
        x: 658,
        y: -324,
        z: -138
      }, {
        x: 475,
        y: -408,
        z: -166
      }, {
        x: 297,
        y: -418,
        z: -180
      }, {
        x: 148,
        y: -418,
        z: -180
      }, {
        x: 0,
        y: -418,
        z: -180
      }, {
        x: -151,
        y: -418,
        z: -180
      }, {
        x: -299,
        y: -418,
        z: -180
      }, {
        x: -484,
        y: -408,
        z: -195
      }, {
        x: -655,
        y: -325,
        z: -221
      }, {
        x: -768,
        y: -182,
        z: -244
      }, {
        x: -807,
        y: 0,
        z: -270
      }, {
        x: -768,
        y: 182,
        z: -295
      }, {
        x: -655,
        y: 325,
        z: -319
      }, {
        x: -484,
        y: 408,
        z: -346
      }, {
        x: -299,
        y: 418,
        z: -360
      }, {
        x: -152,
        y: 418,
        z: -360
      }]);
      var areaMap = exports('areaMap', {
        "0": 0,
        "1": 7,
        "2": 2,
        "3": 1,
        "4": 5,
        "5": 3,
        "6": 0,
        "7": 6,
        "8": 2,
        "9": 1,
        "10": 4,
        "11": 3,
        "12": 0,
        "13": 7,
        "14": 2,
        "15": 1,
        "16": 5,
        "17": 3,
        "18": 0,
        "19": 6,
        "20": 2,
        "21": 1,
        "22": 4,
        "23": 3
      });
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_enter"] = "carRoulette/HD_enter";
        eProto["HD_leave"] = "carRoulette/HD_leave";
        eProto["HD_history"] = "carRoulette/HD_history";
        eProto["HD_bet"] = "carRoulette/HD_bet";
        eProto["gameStart"] = "carRoulette/gameStart";
        eProto["allBet"] = "carRoulette/allBet";
        eProto["open"] = "carRoulette/open";
        eProto["prize"] = "carRoulette/prize";
        eProto["getPumping"] = "lobby/HD_GetPumping";
        return eProto;
      }({})); //抽水

      /**音效 */
      var eSound = exports('eSound', {
        bg: "sound/bg",
        bet: "sound/bet",
        carRun: "sound/carRun",
        countDown: "sound/countDown",
        warning: "sound/warning",
        chip: "sound/result3",
        chipIn: "sound/chipIn",
        chipsSound: "sound/chipsSound",
        timeUp: "sound/timeUp"
      });

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改

      /////////////////////////////////////
      //一些待处理 问题

      // ==recvData data==={"Data":{"UserID":"62496f2dc4ac29426adcb17e","XiaZhuPos":"6","XiaZhuV":482},"GameType":"carRoulette","Action":"HD_XiaZhu","ErrMsg":"操作成功","Code":0,"cmd":"carRoulette/HD_XiaZhu"}
      // builtin-2d-sprite (variant) : Failed to set property [texture], property not found.
      //注： 这个问题由 服务端发送的下注金额 引起，金额不在 CMList整数范围内
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BcbmGame", ['./BcbmCtrl.ts', './BcbmDef.ts', './BcbmGameView.ts', './BcbmModel.ts', './BcbmScene.ts', './BcbmUtils.ts', './BcbRecord.ts', './BcbmChipObject.ts', './BcbmHelp.ts', './ButtonBcbmCm.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BcbmGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './BcbmCtrl.ts', './BcbmDef.ts', './BcbmModel.ts', './I18n.ts', './ProxyMgr.ts', './GameDef.ts', './BtnArea.ts', './GUtil.ts', './ChipProxy.ts', './ChipItem.ts', './ChipSmall.ts', './BcbmChipObject.ts', './MainManager.ts', './BcbmUtils.ts', './BcbRecord.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Label, ScrollView, Prefab, AudioClip, SpriteFrame, sp, instantiate, NodePool, resources, tween, UIOpacity, UITransform, Tween, v3, Sprite, AudioManager, DataManager, UserKey, NetManager, ViewManager, Common, BcbmGameCtrl, eProto, Event, eStatus, eSound, areaMap, arrCarPos, BcbmModel, i18n, ProxyMgr, GameDef, BtnArea, GUtil, ChipProxy, ChipEvent, ChipType, ChipItem, ChipSmall, chipObject, MainManager, BcbmUtils, BcbRecord;
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
      Sprite = module.Sprite;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      BcbmGameCtrl = module.BcbmGameCtrl;
    }, function (module) {
      eProto = module.eProto;
      Event = module.Event;
      eStatus = module.eStatus;
      eSound = module.eSound;
      areaMap = module.areaMap;
      arrCarPos = module.arrCarPos;
    }, function (module) {
      BcbmModel = module.BcbmModel;
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
      MainManager = module.default;
    }, function (module) {
      BcbmUtils = module.BcbmUtils;
    }, function (module) {
      BcbRecord = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26;
      cclegacy._RF.push({}, "e10aan/aklPM4KgTOShPET6", "BcbmGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var BcbmGameView = exports('default', (_dec = ccclass("BcbmGameView"), _dec2 = menu("game/Bcbmgame/BcbmGameView"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(ScrollView), _dec18 = property(Prefab), _dec19 = property(Prefab), _dec20 = property(AudioClip), _dec21 = property(SpriteFrame), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(sp.Skeleton), _dec27 = property(sp.Skeleton), _dec28 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(BcbmGameView, _GameDef$BaseView);
        function BcbmGameView() {
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
          _initializerDefineProperty(_this, "Label_totalBet", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_myBet", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "helpView", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgMusic", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordIma", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_pointRoot", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lightRoot", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_light", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_car", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tishi", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "biao", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_num", _descriptor26, _assertThisInitialized(_this));
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
        var _proto = BcbmGameView.prototype;
        _proto.onLoad = function onLoad() {
          this.isFirst = true;
          _GameDef$BaseView.prototype.onLoad.call(this, BcbmGameCtrl.instance);
          NetManager.instance.waitServiceSendData();
          this.initEvent();
          this.initGame();
          this.initChipPool(function () {
            BcbmGameCtrl.instance.SendData(eProto.HD_enter);
          });
          AudioManager.instance.playGameMusic(this.bgMusic, true);
          console.timeEnd("=======bundle.onLoad========11=====");
          this.tishi.node.active = false;
        };
        _proto.start = function start() {
          Common.setButtonEnableWithGray(this.BtnLast, false);
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          this.scheduleOnce(this.initLight, 0.5);
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
          if (this._chipPool) {
            this._chipPool.clear();
          }
        };
        _proto.initLight = function initLight() {
          var _this2 = this;
          var i = 0;
          var _loop = function _loop() {
            var Node_point = _step.value;
            var newLight = instantiate(_this2.Sprite_light);
            newLight.active = true;
            newLight.position = v3(0);
            Node_point.addChild(newLight);
            newLight.getComponent(UIOpacity).opacity = 0;
            tween(newLight.getComponent(UIOpacity)).delay(i * 0.01).to(0.01, {
              opacity: 255
            }).delay(i * 0.01 + 24 * 0.01).to(0.01, {
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
            for (var i = 0; i < 10; i++) {
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
          var _this3 = this;
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
              _this3._chipPool.put(newNode);
            }
            if (finishCall) {
              finishCall();
            }
          });
        };
        _proto.initEvent = function initEvent() {
          //        //button事件
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);

          // EventManager.on(ConfigManager.protocolYxx.yxxBetBtn, this.selectCM, this);
          // EventManager.on(ConfigManager.protocolBcbm.BcbmplayerInfo, this.showInfo, this);
          // EventManager.on(ConfigManager.protocolBcbm.BcbmPublic, this.showAllPlayerInfo, this);
          // EventManager.on(ConfigManager.protocolBcbm.BcbmBigrecord, this.showBigRecord, this);
          // EventManager.on(ConfigManager.protocolBcbm.BcbmJackpotHistory, this.showBigRecord, this);
          // EventManager.on(ConfigManager.protocolBcbm.Bcbmrecord, this.showRecord, this);

          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          this.BindAreaBtns();
          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);

          //注册分发事件
          EventManager.on(ConfigManager.protocolYxx.yxxLastYz1, this.LastBet, this);
          EventManager.on(ConfigManager.protocolYxx.yxxLastYz2, this.doubleBet, this);
          BcbmGameCtrl.instance.reqPumping();
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.gameShow = function gameShow() {
          Common.showLog("前台");
          this.scheduleOnce(function () {
            this.doClearChip();
            BcbmGameCtrl.instance.SendData(ConfigManager.protocolHall.getWallet, {});
            BcbmGameCtrl.instance.SendData(eProto.HD_enter, {});
          }, 0.1);
        };
        _proto.exitGame = function exitGame() {
          EventManager.emit(Event.onLoadHall);
        }
        // getPlayerDataByPage() {
        //     let data = [];
        //     let redata = BcbmModel.instance.AllPlayerinfo.PlayerList;
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
        //     let data = BcbmModel.instance.AllPlayerinfo;

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
        //     // BcbmGameCtrl.instance.SendData(BcbmModel.instance.roomInfo._serverID + "/" + BcbmDef.eProto.getPlayerList.split("/")[1], {});
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
          if (BcbmModel.instance.gameStatus != eStatus.Bet || BcbmModel.instance.countDown <= 3) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          BcbmUtils.instance.playOneShot(eSound.chipIn);
          var pos = parseInt(data);
          var amount = this._chip.count;
          if (BcbmGameCtrl.instance.sendDoingBet(pos, amount)) {
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
          var _this4 = this;
          BcbmGameCtrl.instance.Send_ExitRoom();
          tween(this.node).delay(0.5).call(function () {
            _this4.exitGame();
          }).start();
        };
        _proto.onClickRecord = function onClickRecord() {
          Common.loadPopBuddle("prefab/BcbmRecord", BcbmUtils.instance.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            node.getComponent(BcbRecord).setGameType("carRoulette", 8);
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/BcbmHelp", BcbmUtils.instance.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          GUtil.openRecord("carRoulette");
        }
        //    //////////////////////////////////////////////
        ;

        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != BcbmGameCtrl.instance.BUNDLE) {
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
          var _this5 = this;
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
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, BcbmGameCtrl.instance.BUNDLE);
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
            _chip2.getComponent(ChipItem).setData(_i, ChipType.CHIP, BcbmGameCtrl.instance.BUNDLE);
          }
          this.scheduleOnce(function () {
            var child = _this5.scrollViewCM.content.children[diyNums];
            child.getComponent(ChipItem).moveUp();
            _this5.scrollViewCM.scrollToLeft();
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
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(ConfigManager.protocolYxx.yxxLastYz1, this.LastBet, this);
          EventManager.off(ConfigManager.protocolYxx.yxxLastYz2, this.doubleBet, this);
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
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
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            var countDown = BcbmModel.instance.countDown;
            Tween.stopAllByTarget(_this6.lab_timer.node);
            _this6.lab_timer.string = "" + countDown;
            tween(_this6.lab_timer.node).delay(1).call(function () {
              BcbmModel.instance.countDown--;
              _this6.lab_timer.string = "" + BcbmModel.instance.countDown;
              switch (BcbmModel.instance.gameStatus) {
                case eStatus.Bet:
                  {
                    BcbmModel.instance.countDown <= 3 ? BcbmUtils.instance.playOneShot(eSound.countDown) : BcbmUtils.instance.playOneShot(eSound.timeUp);
                    if (BcbmModel.instance.countDown == 3 && _this6.tishi.animation != "stop") {
                      _this6.tishi.node.active = true;
                      _this6.tishi.setAnimation(0, "stop", false);
                      _this6.tishi.setCompleteListener(function () {
                        _this6.tishi.setCompleteListener(null);
                        _this6.tishi.node.active = false;
                      });
                      _this6.scheduleOnce(function () {
                        BcbmUtils.instance.playOneShot(eSound.warning);
                      }, 3.25);
                      Common.setButtonEnableWithGray(_this6.BtnLast, false);
                      Common.setButtonEnableWithGray(_this6.BtnJiabei, false);
                    }
                    break;
                  }
                case eStatus.running:
                  {
                    if (BcbmModel.instance.countDown < 5) {
                      BcbmModel.instance.gameStatus = eStatus.result;
                      _this6.updatePath();
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
                  _context.t0 = BcbmModel.instance.gameStatus;
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
          var _doSendChip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pos, amount, isSelf) {
            var _this7 = this;
            var CMnode, Node_betArea, chipRoot, startNode, startPos, counts, toPos;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (isSelf === void 0) {
                    isSelf = true;
                  }
                  CMnode = this.getChipNode(amount);
                  if (CMnode) {
                    _context2.next = 4;
                    break;
                  }
                  return _context2.abrupt("return");
                case 4:
                  Node_betArea = this.Node_betArea.getChildByName("Node_betArea_" + pos);
                  chipRoot = Node_betArea.getChildByName(isSelf ? "Node_selfChip" : "Node_otherChip");
                  chipRoot.addChild(CMnode);
                  startNode = isSelf ? this.playerself : this.playerPublic;
                  startPos = startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  startPos = chipRoot.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                  CMnode.position = startPos;
                  counts = chipRoot.children.length > 5 ? 5 : chipRoot.children.length;
                  toPos = v3(0, (counts - 1) * 5, 0);
                  tween(CMnode)
                  // .delay(index * 0.01)
                  .to(0.5, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this7.mergeChip(chipRoot);
                  }).start();
                case 14:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doSendChip(_x, _x2, _x3) {
            return _doSendChip.apply(this, arguments);
          }
          return doSendChip;
        }();
        _proto.doClearChip = function doClearChip() {
          this.BtnJiabei.interactable = false;
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          BcbmModel.instance.result = null;
          BcbmModel.instance.prize = 0;
          for (var i = 0; i < 8; i++) {
            var childNode = this.Node_betArea.getChildByName("Node_betArea_" + i);
            var Node_selfChip = childNode.getChildByName("Node_selfChip");
            var Node_otherChip = childNode.getChildByName("Node_otherChip");
            for (var _iterator6 = _createForOfIteratorHelperLoose(Node_selfChip.children), _step6; !(_step6 = _iterator6()).done;) {
              var _chip3 = _step6.value;
              _chip3.active = false;
              this._chipPool.put(_chip3);
            }
            for (var _iterator7 = _createForOfIteratorHelperLoose(Node_otherChip.children), _step7; !(_step7 = _iterator7()).done;) {
              var _chip4 = _step7.value;
              _chip4.active = false;
              this._chipPool.put(_chip4);
            }
            var zhong = childNode.getChildByName("zhong");
            zhong.active = false;
            var childNode_label = this.Node_betArea_label.getChildByName("Node_betArea_" + i);
            var yzself_num = childNode_label.getChildByName("yzself_num");
            var yz_num = childNode_label.getChildByName("yz_num");
            yz_num.getComponent(Label).string = "";
            yz_num.active = false;
            yzself_num.getComponent(Label).string = "";
            yzself_num.active = false;
          }
          this.Sprite_light.removeAllChildren();
          for (var _i2 = 0; _i2 < 5; _i2++) {
            var Sprite_light = this.Node_lightRoot.children[_i2];
            Sprite_light.getComponent(UIOpacity).opacity = 0;
            Tween.stopAllByTarget(Sprite_light.getComponent(UIOpacity));
          }
          this.Label_totalBet.string = "0K";
          this.Label_myBet.string = "0K";
          BcbmModel.instance.betselfLast = BcbmModel.instance.myBetList.slice();
          BcbmModel.instance.myBetList = [0, 0, 0, 0, 0, 0, 0, 0];
          BcbmModel.instance.totalBetList = [0, 0, 0, 0, 0, 0, 0, 0];
          if (BcbmModel.instance.myTotalBet > 0) {
            BcbmModel.instance.myTotalBet = 0;
            Common.setButtonEnableWithGray(this.BtnLast, true);
          }
        };
        _proto.mergeChip = function mergeChip(node) {
          if (node.children.length > 5) {
            this._chipPool.put(node.children[0]);
            var i = 0;
            for (var _iterator8 = _createForOfIteratorHelperLoose(node.children), _step8; !(_step8 = _iterator8()).done;) {
              var child = _step8.value;
              child.position = v3(0, (i - 1) * 5, 0);
              i++;
            }
          }
        };
        _proto.updatePath = function updatePath() {
          var item = this.Node_record_content.children[0];
          var history = BcbmModel.instance.history.slice(0, 20);
          gts.Debug.Log("===BcbmModel.instance.history==", JSON.stringify(BcbmModel.instance.history));
          for (var i = 0; i < history.length; i++) {
            var newItem = this.Node_record_content.children[i];
            if (!newItem) {
              newItem = instantiate(item);
              this.Node_record_content.addChild(newItem);
            }
            newItem.active = true;
            newItem.children[0].active = i == 0;
            if (history[i] == 1 || history[i] == 10 || history[i] == 4 || history[i] == 19) ;
            newItem.getComponent(Sprite).spriteFrame = this.recordIma[areaMap["" + history[i]]];
          }
        };
        _proto.updateBet_other = function updateBet_other(data) {
          if (data === void 0) {
            data = null;
          }
          //更新总下注
          var total = 0;
          var isBet = false;
          for (var i = 0; i < 8; i++) {
            var lastBetAmount = BcbmModel.instance.totalBetList[i];
            var BetAmount = data ? data[i] - lastBetAmount : lastBetAmount;
            var curBetAmount = data ? data[i] : lastBetAmount;
            if (BetAmount > 0) {
              isBet = true;
              var Node_betArea = this.Node_betArea_label.getChildByName("Node_betArea_" + i);
              var yz_num = Node_betArea.getChildByName("yz_num");
              yz_num.active = true;
              yz_num.getComponent(Label).string = Common.ChangeMoneyFormat(curBetAmount, 3);
              this.doSendChip(i, BetAmount, false);
            }
            total += data ? data[i] : BetAmount;
          }
          if (isBet) {
            BcbmUtils.instance.playOneShot(eSound.bet);
            BcbmModel.instance.totalBetList = data ? data.slice() : BcbmModel.instance.totalBetList;
            this.Label_totalBet.string = total > 0 ? Common.ChangeMoneyFormat(total, 3) : "0K";
          }
        };
        _proto.updateBet_self = function updateBet_self(isDoSendChip) {
          if (isDoSendChip === void 0) {
            isDoSendChip = false;
          }
          gts.Debug.Log("=====updateBet_self====" + JSON.stringify(BcbmModel.instance.myBetList));
          //更新下注
          BcbmModel.instance.myTotalBet = 0;
          for (var i = 0; i < 8; i++) {
            var BetAmount = BcbmModel.instance.myBetList[i];
            if (BetAmount > 0) {
              var Node_betArea = this.Node_betArea_label.getChildByName("Node_betArea_" + i);
              var yzself_num = Node_betArea.getChildByName("yzself_num");
              yzself_num.active = true;
              yzself_num.getComponent(Label).string = Common.ChangeMoneyFormat(BetAmount, 3);
              BcbmModel.instance.myTotalBet += BetAmount;
              if (isDoSendChip) {
                this.doSendChip(i, BetAmount);
              }
            }
          }
          if (!this.BtnJiabei.interactable && BcbmModel.instance.myTotalBet > 0) {
            Common.setButtonEnableWithGray(this.BtnJiabei, true);
          }
          this.Label_myBet.string = BcbmModel.instance.myTotalBet > 0 ? Common.ChangeMoneyFormat(BcbmModel.instance.myTotalBet, 3) : "0K";
        };
        _proto.doRunningStart = function doRunningStart() {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            Tween.stopAllByTarget(_this8.Sprite_light.getComponent(UIOpacity));
            _this8.Sprite_light.position = _this8.Node_pointRoot.children[BcbmModel.instance.lightPos].position;
            _this8.Sprite_light.getComponent(UIOpacity).opacity = 0;
            var lightNum = 0;
            tween(_this8.Sprite_light.getComponent(UIOpacity)).to(0.05, {
              opacity: 255
            }).delay(0.025).to(0.01, {
              opacity: 0
            }).call(function () {
              BcbmModel.instance.lightPos = ++BcbmModel.instance.lightPos % 24;
              _this8.Sprite_light.position = _this8.Node_pointRoot.children[BcbmModel.instance.lightPos].position;
              lightNum = ++lightNum < 5 ? lightNum : 5;
              for (var i = 1; i < lightNum; i++) {
                var Sprite_light = _this8.Node_lightRoot.children[i];
                Sprite_light.getComponent(UIOpacity).opacity = 255 - 50 * i;
                var startPos = BcbmModel.instance.lightPos - i;
                startPos = startPos < 0 ? 23 : startPos;
                Sprite_light.position = _this8.Node_pointRoot.children[startPos].position;
              }

              //updateCarPos
              _this8.doCarRunning(BcbmModel.instance.lightPos, 0.076);
              if (lightNum == 5) {
                Tween.stopAllByTarget(_this8.Sprite_light.getComponent(UIOpacity));
                return resolve(true);
              }
            }).union().repeatForever().start();

            //updateCarPos
            var startPosCar = arrCarPos[BcbmModel.instance.lightPos];
            _this8.Sprite_car.position = v3(startPosCar.x, startPosCar.y, 0);
            _this8.Sprite_car.eulerAngles = v3(0, 0, startPosCar.z);
            _this8.biao.setAnimation(0, "run_star", false);
            BcbmUtils.instance.playSound(eSound.carRun, true);
          });
        };
        _proto.doRunningNormal = function doRunningNormal() {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            Tween.stopAllByTarget(_this9.Sprite_light.getComponent(UIOpacity));
            _this9.Sprite_light.position = _this9.Node_pointRoot.children[BcbmModel.instance.lightPos].position;
            _this9.Sprite_light.getComponent(UIOpacity).opacity = 255;
            var disPos = 0;
            var totalPos = 0;
            var rounds = 2;
            tween(_this9.Sprite_light.getComponent(UIOpacity)).delay(0.05).call(function () {
              BcbmModel.instance.lightPos = ++BcbmModel.instance.lightPos % 24;
              _this9.Sprite_light.position = _this9.Node_pointRoot.children[BcbmModel.instance.lightPos].position;
              for (var i = 1; i < 4; i++) {
                var _Sprite_light = _this9.Node_lightRoot.children[i];
                _Sprite_light.getComponent(UIOpacity).opacity = 255 - 50 * i;
                var _startPos = BcbmModel.instance.lightPos - i;
                _startPos = _startPos < 0 ? 23 : _startPos;
                _Sprite_light.position = _this9.Node_pointRoot.children[_startPos].position;
              }
              var Sprite_light = _this9.Node_lightRoot.children[4];
              Sprite_light.getComponent(UIOpacity).opacity = 100;
              var startPos = BcbmModel.instance.lightPos + 1;
              startPos = startPos % 24;
              Sprite_light.position = _this9.Node_pointRoot.children[startPos].position;

              //updateCarPos
              _this9.doCarRunning(BcbmModel.instance.lightPos, 0.05);
              if (disPos == 0) {
                if (BcbmModel.instance.result && totalPos > 24 * rounds) {
                  if (BcbmModel.instance.result.OpenNum > BcbmModel.instance.lightPos) {
                    disPos = BcbmModel.instance.result.OpenNum - BcbmModel.instance.lightPos;
                  } else {
                    disPos = BcbmModel.instance.result.OpenNum + 24 - BcbmModel.instance.lightPos;
                  }
                  disPos = disPos < 10 ? disPos + 24 : disPos;
                }
              } else {
                disPos--;
                if (disPos < 6) {
                  Tween.stopAllByTarget(_this9.Sprite_light.getComponent(UIOpacity));
                  return resolve(true);
                }
              }
              totalPos++;
            }).union().repeatForever().start();

            // //updateCarPos
            // let nextLightPos = BcbmModel.instance.lightPos + 1;
            // nextLightPos = nextLightPos % 24;
            // this.doCarRunning(nextLightPos, 0.05);
          });
        };

        _proto.doRunningEnd = function doRunningEnd() {
          var _this10 = this;
          return new Promise(function (resolve, reject) {
            var disPos = 0;
            if (BcbmModel.instance.result.OpenNum > BcbmModel.instance.lightPos) {
              disPos = BcbmModel.instance.result.OpenNum - BcbmModel.instance.lightPos;
            } else {
              disPos = BcbmModel.instance.result.OpenNum + 24 - BcbmModel.instance.lightPos;
            }
            Tween.stopAllByTarget(_this10.Sprite_light.getComponent(UIOpacity));
            _this10.Sprite_light.position = _this10.Node_pointRoot.children[BcbmModel.instance.lightPos].position;
            _this10.Sprite_light.getComponent(UIOpacity).opacity = 255;
            var lightNum = 0;
            var sDelay = 0.065;
            var runningEnd = function runningEnd(delay) {
              tween(_this10.Sprite_light.getComponent(UIOpacity)).delay(delay).call(function () {
                if (disPos == 0) {
                  for (var i = 1; i < 5; i++) {
                    var Sprite_light = _this10.Node_lightRoot.children[i];
                    Sprite_light.getComponent(UIOpacity).opacity = 0;
                  }
                  Tween.stopAllByTarget(_this10.Sprite_light.getComponent(UIOpacity));
                  BcbmModel.instance.lightPos = BcbmModel.instance.result.OpenNum;
                  _this10.Sprite_light.position = _this10.Node_pointRoot.children[BcbmModel.instance.result.OpenNum].position;
                  BcbmUtils.instance.stopSound(eSound.carRun);
                  return resolve(true);
                }
                BcbmModel.instance.lightPos = ++BcbmModel.instance.lightPos % 24;
                _this10.Sprite_light.position = _this10.Node_pointRoot.children[BcbmModel.instance.lightPos].position;

                //updateCarPos
                _this10.doCarRunning(BcbmModel.instance.lightPos, 0.15);
                var max = 4 - lightNum;
                var counts = max - 1;
                if (lightNum < 5) {
                  for (var _i3 = 1; _i3 < max; _i3++) {
                    var _Sprite_light2 = _this10.Node_lightRoot.children[_i3];
                    _Sprite_light2.getComponent(UIOpacity).opacity = 255 - _i3 * 255 / counts;
                    var _startPos2 = BcbmModel.instance.lightPos - _i3;
                    _startPos2 = _startPos2 < 0 ? 23 : _startPos2;
                    _Sprite_light2.position = _this10.Node_pointRoot.children[_startPos2].position;
                  }
                  for (var _i4 = 1 + lightNum; _i4 < 4; _i4++) {
                    var _Sprite_light3 = _this10.Node_lightRoot.children[_i4];
                    _Sprite_light3.getComponent(UIOpacity).opacity = 0;
                  }
                  var _Sprite_light4 = _this10.Node_lightRoot.children[4];
                  _Sprite_light4.getComponent(UIOpacity).opacity = 100;
                  var startPos = BcbmModel.instance.lightPos + 1;
                  startPos = startPos % 24;
                  _Sprite_light4.position = _this10.Node_pointRoot.children[startPos].position;
                } else {
                  var _Sprite_light5 = _this10.Node_lightRoot.children[4];
                  _Sprite_light5.getComponent(UIOpacity).opacity = 0;
                }
                lightNum++;
                disPos--;
              }).call(function () {
                sDelay += 0.01;
                runningEnd(sDelay);
              }).start();
            };
            runningEnd(sDelay);
          });
        };
        _proto.doCarRunning = function doCarRunning(toPos, duration) {
          Tween.stopAllByTarget(this.Sprite_car);
          var toPosCar = arrCarPos[toPos];
          if (this.Sprite_car.eulerAngles.z < 0 && toPosCar.z == 0) {
            this.Sprite_car.eulerAngles = v3(0, 0, 0);
          }
          tween(this.Sprite_car).to(duration, {
            position: v3(toPosCar.x, toPosCar.y, 0),
            eulerAngles: v3(0, 0, toPosCar.z)
          }).start();
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
                  this.biao.setAnimation(0, "normal_idle", true);
                  this.showResult();
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
          var _this11 = this;
          var wPos = this.Node_betArea.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 500, 0));
          var result = BcbmModel.instance.result;
          var winArea = this.Node_betArea.getChildByName("Node_betArea_" + result.WinPos);
          var wWinPos = winArea.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
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
          var wPosSelf = this.playerself.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          var wPosPublic = this.playerPublic.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          for (var _i5 = 0; _i5 < 8; _i5++) {
            var childNode = this.Node_betArea.getChildByName("Node_betArea_" + _i5);
            var Node_selfChip = childNode.getChildByName("Node_selfChip");
            var Node_otherChip = childNode.getChildByName("Node_otherChip");
            if (_i5 != result.WinPos) {
              var index = 0;
              var _loop2 = function _loop2() {
                var chip = _step9.value;
                var toPos = Node_selfChip.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                var toPosSelf = Node_selfChip.getComponent(UITransform).convertToNodeSpaceAR(wPosSelf);
                var toPosPublic = Node_selfChip.getComponent(UITransform).convertToNodeSpaceAR(wPosPublic);
                var toPosPlayer = Math.random() > 0.5 && BcbmModel.instance.prize > 0 ? toPosSelf : toPosPublic;
                if (index % 2 == 0) {
                  var toWinPos = Node_selfChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos);
                  toWinPos = v3(toWinPos.x + Math.random() * 100 - 50, toWinPos.y + Math.random() * 100 - 50, toWinPos.z);
                  tween(chip).delay(index * 0.02).to(0.75, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).delay(index * 0.02).to(0.75, {
                    position: toWinPos
                  }, {
                    easing: "cubicOut"
                  }).delay(index * 0.02).to(0.75, {
                    position: toPosPlayer
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this11._chipPool.put(chip);
                  }).start();
                } else {
                  tween(chip).delay(index * 0.02).to(0.75, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this11._chipPool.put(chip);
                  }).start();
                }
                index++;
              };
              for (var _iterator9 = _createForOfIteratorHelperLoose(Node_selfChip.children), _step9; !(_step9 = _iterator9()).done;) {
                _loop2();
              }
              index = 0;
              var _loop3 = function _loop3() {
                var chip = _step10.value;
                var toPos = Node_otherChip.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                var toPosSelf = Node_otherChip.getComponent(UITransform).convertToNodeSpaceAR(wPosSelf);
                var toPosPublic = Node_otherChip.getComponent(UITransform).convertToNodeSpaceAR(wPosPublic);
                var toPosPlayer = Math.random() > 0.5 && BcbmModel.instance.prize > 0 ? toPosSelf : toPosPublic;
                if (index % 2 == 0) {
                  var toWinPos = Node_otherChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos);
                  toWinPos = v3(toWinPos.x + Math.random() * 100 - 50, toWinPos.y + Math.random() * 100 - 50, toWinPos.z);
                  tween(chip).delay(index * 0.02).to(0.75, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).delay(index * 0.02).to(0.75, {
                    position: toWinPos
                  }, {
                    easing: "cubicOut"
                  }).delay(index * 0.02).to(0.75, {
                    position: toPosPlayer
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this11._chipPool.put(chip);
                  }).start();
                } else {
                  tween(chip).delay(index * 0.02).to(0.75, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this11._chipPool.put(chip);
                  }).start();
                }
                index++;
              };
              for (var _iterator10 = _createForOfIteratorHelperLoose(Node_otherChip.children), _step10; !(_step10 = _iterator10()).done;) {
                _loop3();
              }
            } else {
              var zhong = childNode.getChildByName("zhong");
              zhong.active = true;
              tween(zhong.getComponent(UIOpacity)).to(0.25, {
                opacity: 0
              }).to(0.25, {
                opacity: 255
              }).union().repeatForever().start();
              var _index = 0;
              var _loop4 = function _loop4() {
                var chip = _step11.value;
                var toPosPublic = Node_otherChip.getComponent(UITransform).convertToNodeSpaceAR(wPosPublic);
                tween(chip).delay(1.5 + _index * 0.02).to(0.75, {
                  position: toPosPublic
                }, {
                  easing: "cubicOut"
                }).call(function () {
                  _this11._chipPool.put(chip);
                  BcbmUtils.instance.playOneShot(eSound.chipsSound);
                }).start();
                _index++;
              };
              for (var _iterator11 = _createForOfIteratorHelperLoose(Node_otherChip.children), _step11; !(_step11 = _iterator11()).done;) {
                _loop4();
              }
              _index = 0;
              var _loop5 = function _loop5() {
                var chip = _step12.value;
                var toPosSelf = Node_selfChip.getComponent(UITransform).convertToNodeSpaceAR(wPosSelf);
                var toPosPublic = Node_selfChip.getComponent(UITransform).convertToNodeSpaceAR(wPosPublic);
                var toPosPlayer = Math.random() > 0.5 && BcbmModel.instance.prize > 0 ? toPosSelf : toPosPublic;
                tween(chip).delay(1.5 + _index * 0.02).to(0.5, {
                  position: toPosPlayer
                }, {
                  easing: "cubicOut"
                }).call(function () {
                  _this11._chipPool.put(chip);
                  BcbmUtils.instance.playOneShot(eSound.chipsSound);
                }).start();
                _index++;
              };
              for (var _iterator12 = _createForOfIteratorHelperLoose(Node_selfChip.children), _step12; !(_step12 = _iterator12()).done;) {
                _loop5();
              }
            }
          }
          if (BcbmModel.instance.prize > 0) {
            this.scheduleOnce(function () {
              var addScore = _this11.playerself.getChildByName("addScore");
              addScore.active = true;
              var text = addScore.getChildByName("text").getComponent(Label);
              text.string = "+" + Common.ChangeMoneyFormat(BcbmModel.instance.prize, 3);
              tween(addScore).to(0.5, {
                position: v3(38, 70, 0)
              }).delay(2.0).call(function () {
                text.string = "";
                addScore.active = false;
                addScore.position = v3(38, -30, 0);
              }).start();
              BcbmUtils.instance.playOneShot(eSound.chipsSound);
            }, 1.75);
          }
        }

        //    //IView
        ;

        _proto.updateView = function updateView(event, data) {
          var _this12 = this;
          switch (event) {
            case eProto.HD_enter:
              {
                ChipProxy.initChipList(BcbmModel.instance.chipList);
                this.createChipsList();
                for (var i = 0; i < this.Node_betArea_label.children.length; i++) {
                  var childNode_label = this.Node_betArea_label.children[i];
                  var Label_rate = childNode_label.getChildByName("rate");
                  Label_rate.getComponent(Label).string = "x" + BcbmModel.instance.Rate[i];
                }
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  var betTime;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        //10=25-15
                        betTime = BcbmModel.instance.TotalSecond - BcbmModel.instance.BetSecond;
                        if (!(BcbmModel.instance.countDown < betTime)) {
                          _context4.next = 7;
                          break;
                        }
                        BcbmModel.instance.gameStatus = eStatus.result;
                        _this12.showCountDown();
                        _this12.updateStatus();
                        _context4.next = 17;
                        break;
                      case 7:
                        BcbmModel.instance.countDown = BcbmModel.instance.gameInfo.Countdown - betTime;
                        BcbmModel.instance.gameStatus = eStatus.Bet;

                        // BcbmUtils.instance.playOneShot(BcbmDef.eSound.warning);
                        // this.tishi.node.active = true;
                        // this.tishi.setAnimation(0, "start", false);
                        // this.tishi.setCompleteListener(() => {
                        //     this.tishi.setCompleteListener(null);
                        //     this.tishi.node.active = false;
                        // });

                        _this12.updateStatus();
                        _context4.next = 12;
                        return _this12.showCountDown();
                      case 12:
                        BcbmModel.instance.gameStatus = eStatus.running;
                        BcbmModel.instance.countDown = betTime;
                        _this12.showCountDown();
                        _this12.updateStatus();
                        _this12.doRunning();
                      case 17:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }))();
                var startPosCar = arrCarPos[BcbmModel.instance.lightPos];
                this.Sprite_car.position = v3(startPosCar.x, startPosCar.y, 0);
                this.Sprite_car.eulerAngles = v3(0, 0, startPosCar.z);
                this.publicPlayerNum.string = "" + BcbmModel.instance.gameInfo.PlayerCount;
                this.updatePath();
                this.updateBet_other();
                this.updateBet_self(true);

                // BcbmModel.instance.lightPos = 0;
                this.Label_num.string = "" + BcbmModel.instance.gameNo;
                break;
              }
            case eProto.gameStart:
              {
                this.doClearChip();
                BcbmModel.instance.gameInfo = data;
                BcbmModel.instance.chipList = BcbmModel.instance.gameInfo.Chips;
                BcbmModel.instance.gameNo = BcbmModel.instance.gameInfo.GameNo;
                BcbmModel.instance.BetSecond = BcbmModel.instance.gameInfo.BetSecond;
                BcbmModel.instance.TotalSecond = BcbmModel.instance.gameInfo.TotalSecond;
                this.Label_num.string = "" + BcbmModel.instance.gameNo;
                this.publicPlayerNum.string = "" + BcbmModel.instance.gameInfo.PlayerCount;
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  var betTime;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        BcbmModel.instance.gameStatus = eStatus.Bet;
                        BcbmModel.instance.countDown = BcbmModel.instance.BetSecond;
                        _this12.updateStatus();
                        BcbmUtils.instance.playOneShot(eSound.warning);
                        _this12.tishi.node.active = true;
                        _this12.tishi.setAnimation(0, "start", false);
                        _this12.tishi.setCompleteListener(function () {
                          _this12.tishi.setCompleteListener(null);
                          _this12.tishi.node.active = false;
                        });

                        //10=25-15
                        _context5.next = 9;
                        return _this12.showCountDown();
                      case 9:
                        Common.setButtonEnableWithGray(_this12.BtnLast, false);
                        Common.setButtonEnableWithGray(_this12.BtnJiabei, false);
                        betTime = BcbmModel.instance.TotalSecond - BcbmModel.instance.BetSecond;
                        BcbmModel.instance.gameStatus = eStatus.running;
                        BcbmModel.instance.countDown = betTime;
                        _this12.showCountDown();
                        _this12.updateStatus();
                        _this12.doRunning();
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
                this.updateBet_self();
                break;
              }
            case eProto.open:
              {
                break;
              }
            case eProto.getPumping:
              {
                // this.Label_pumping.node.active = BcbmModel.instance.nPummping > 0;
                // this.Label_pumping.string = `<color=#ffffff >Trải nghiệm ngay với chỉ</c><color=#fd6500> ${BcbmModel.instance.nPummping}% </color><color=#ffffff > tiền phế</c>`;
                break;
              }

            //            //////////////////////////////////////////////////////
            case ConfigManager.protocolHall.getWallet:
              {
                //                //获取钱包
                this.selfGold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)));
                break;
              }
            case ConfigManager.protocolHall.pushWallet:
              {
                //                //推送钱包
                this.selfGold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)));
                break;
              }
            case ConfigManager.protocolHall.login:
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
          var _this13 = this;
          for (var _iterator13 = _createForOfIteratorHelperLoose(this.Node_betArea.children), _step13; !(_step13 = _iterator13()).done;) {
            var c = _step13.value;
            if (!c.getComponent(BtnArea)) {
              continue;
            }
            BtnArea.OnClicked(c, function (btn) {
              gts.Debug.Log("====BtnArea.OnClicked===" + btn.node.name);
              _this13.betIntoPool(btn.node.name.replace("Node_betArea_", ""));
            }, this);
          }
        };
        _proto.LastBet = function LastBet() {
          var _this14 = this;
          if (BcbmModel.instance.gameStatus != eStatus.Bet) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          BcbmUtils.instance.playOneShot(eSound.chipIn);
          for (var index = 0; index < 8; index++) {
            var vBet = BcbmModel.instance.betselfLast[index];
            if (vBet > 0) {
              if (BcbmGameCtrl.instance.sendDoingBet(index, vBet)) {
                this.doSendChip(index, vBet);
              }
            }
          }
          Common.setButtonEnableWithGray(this.BtnLast, false);
          tween(this.BtnLast.node).delay(0.5).call(function () {
            Common.setButtonEnableWithGray(_this14.BtnLast, true);
          }).start();
        };
        _proto.doubleBet = function doubleBet() {
          var _this15 = this;
          if (BcbmModel.instance.gameStatus != eStatus.Bet) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          BcbmUtils.instance.playOneShot(eSound.chipIn);
          for (var index = 0; index < 8; index++) {
            var vBet = BcbmModel.instance.myBetList[index];
            if (vBet > 0) {
              if (BcbmGameCtrl.instance.sendDoingBet(index, vBet)) {
                this.doSendChip(index, vBet);
              }
            }
          }
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          tween(this.BtnJiabei.node).delay(0.5).call(function () {
            Common.setButtonEnableWithGray(_this15.BtnJiabei, true);
          }).start();
        };
        return BcbmGameView;
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
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalBet", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_myBet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "helpView", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "recordIma", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_pointRoot", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_lightRoot", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_light", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_car", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "tishi", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "biao", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Label_num", [_dec28], {
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

System.register("chunks:///_virtual/BcbmHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BcbmModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, BcbmModel;
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
      BcbmModel = module.BcbmModel;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "79f29inX2VOkZTCmZWWMX/j", "BcbmHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BcbmHelp = exports('BcbmHelp', (_dec = ccclass("BcbmHelp"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BcbmHelp, _Component);
        function BcbmHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "helpRate", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BcbmHelp.prototype;
        /////////////////////////////
        _proto.start = function start() {
          for (var i = 0; i < this.helpRate.children.length; i++) {
            var Label_rate = this.helpRate.children[i];
            Label_rate.getComponent(Label).string = "X" + BcbmModel.instance.Rate[i];
          }
        };
        return BcbmHelp;
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

System.register("chunks:///_virtual/BcbmModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "d938bOB6wJDXouuMbuvbO4L", "BcbmModel", undefined);
      var BcbmModel = exports('BcbmModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(BcbmModel, _GameDef$BaseSington);
        function BcbmModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
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
          _this.myBetList = [0, 0, 0, 0, 0, 0, 0, 0];
          _this.totalBetList = [0, 0, 0, 0, 0, 0, 0, 0];
          _this.betselfLast = [0, 0, 0, 0, 0, 0, 0, 0];
          _this.PosMaxBet = null;
          _this.history = [];
          _this.Rate = [];
          _this.myTotalBet = 0;
          _this.result = null;
          _this.prize = 0;
          _this.lightPos = 0;
          //    //聊天列表-文本
          _this._chatQueueList = [];
          //    //聊天列表-表情
          _this._expressionQueueList = [];
          return _this;
        }
        _createClass(BcbmModel, [{
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
        return BcbmModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BcbmScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './BcbmDef.ts', './ConfigManager.ts', './EventManager.ts', './BcbmUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, instantiate, UIOpacity, tween, Component, NetManager, ViewManager, Common, cBundle, Event, ConfigManager, EventManager, BcbmUtils;
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
      BcbmUtils = module.BcbmUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a951ePF7AhL1obJf2zgAvIb", "BcbmScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BcbmScene = exports('default', (_dec = ccclass("BcbmScene"), _dec2 = menu("game/Bcbmgame/BcbmScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BcbmScene, _Component);
        function BcbmScene() {
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
        var _proto = BcbmScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          BcbmUtils.instance.bundle = assetManager.getBundle(cBundle);
          BcbmUtils.instance.preLoad();
          BcbmUtils.instance.playBgMusic();
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
        _proto.onLoadHall = function onLoadHall() {
          console.time("bundle.onLoadHall");
          Common.showWait();
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
            Common.closeWait();
            console.timeEnd("bundle.onLoadHall");
          }
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this3 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            BcbmUtils.instance.bundle.load("prefab/ui_game", Prefab, function (cur, total) {}, function (err, prefab) {
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
              Common.closeWait();
            }).start();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return BcbmScene;
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

System.register("chunks:///_virtual/BcbmUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './BcbmDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, GameDef, AudioManager, eSound, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
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
      cclegacy._RF.push({}, "33e1044C8RAO6EFXmHvZmt0", "BcbmUtils", undefined);
      var BcbmUtils = exports('BcbmUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(BcbmUtils, _GameDef$BaseSington);
        function BcbmUtils() {
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
        var _proto = BcbmUtils.prototype;
        //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/BcbmGameView");
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
            var arrHLoad;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrHLoad = []; // arrHLoad.push(
                  //     this.asyncLoadDir("spine/icon", sp.SkeletonData, (err, arrSpineData: sp.SkeletonData[]) => {
                  //         if (!err) {
                  //             for (const spineData of arrSpineData) {
                  //                 this.arrSkeletonData[spineData.name] = spineData;
                  //             }
                  //         }
                  //     })
                  // );
                  // arrHLoad.push(
                  //     this.asyncLoadDir("spine/effect/dynamic", sp.SkeletonData, (err, arrSpineData: sp.SkeletonData[]) => {
                  //         if (!err) {
                  //             for (const spineData of arrSpineData) {
                  //                 this.arrSkeletonData[spineData.name] = spineData;
                  //             }
                  //         }
                  //     })
                  // );
                  _context3.next = 3;
                  return Promise.all(arrHLoad);
                case 3:
                  if (cb) {
                    cb();
                  }
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function loadRes_icon(_x7) {
            return _loadRes_icon.apply(this, arguments);
          }
          return loadRes_icon;
        }();
        _proto.loadPopBuddle = function loadPopBuddle(path, callback1, callback2, isshowWait) {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            if (isshowWait) {
              Common.showWait();
            }
            _this4.bundle.load(path, Prefab, function (cur, total) {
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
          var _this5 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (cb === void 0) {
            cb = null;
          }
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err || _this5.soundIDList[soundPath]) {
              return;
            }
            var soundID = AudioManager.instance.playSound(audioClip, isLoop);
            _this5.soundIDList[soundPath] = soundID;
            AudioManager.instance.setFinishCallback(soundID, function () {
              _this5.soundIDList[soundPath] = null;
              delete _this5.soundIDList[soundPath];
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
          var _this6 = this;
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
            var digit = isFloatFormat ? _this6.numberFormatFloatD(curWin / 1000, 2.0) : _this6.numberFormatD(curWin / 1000, 2.0);
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
            label.string = isFloatFormat ? _this7.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this7.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this8 = this;
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
            label.string = isFloatFormat ? "" + _this8.numberFormatFloat(curWin, 0) : "" + _this8.numberFormat(curWin, 0);
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
        _proto.getSkeletonData = function getSkeletonData(index, isHorizontal) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = "icon";
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
        return BcbmUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BcbRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './EventManager.ts', './ConfigManager.ts', './NetManager.ts', './DataManager.ts', './BcbmDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, find, view, v3, Label, instantiate, color, Sprite, Component, Common, EventManager, ConfigManager, NetManager, DataManager, UserKey, areaMap;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f69132mZ3JAzov9oHisxJHM", "BcbRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BcbRecord = exports('default', (_dec = ccclass("BcbRecord"), _dec2 = menu("BcbRecord"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BcbRecord, _Component);
        function BcbRecord() {
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
        var _proto = BcbRecord.prototype;
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
            item.getChildByName("icon").getComponent(Sprite).spriteFrame = this.recordIma[areaMap[sdata.GameResult]];
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
        return BcbRecord;
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

System.register("chunks:///_virtual/ButtonBcbmCm.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "8fcd0RWKQpG+LOXWZYME+NM", "ButtonBcbmCm", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var ButtonBcbmCm = exports('default', (_dec = ccclass("ButtonBcbmCm"), _dec2 = menu("game/Bcbmgame/ButtonBcbmCm"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonBcbmCm, _Component);
        function ButtonBcbmCm() {
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
        var _proto = ButtonBcbmCm.prototype;
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

        return ButtonBcbmCm;
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

(function(r) {
  r('virtual:///prerequisite-imports/BcbmGame', 'chunks:///_virtual/BcbmGame'); 
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