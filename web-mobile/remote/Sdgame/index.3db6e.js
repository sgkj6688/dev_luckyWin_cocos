System.register("chunks:///_virtual/ButtonIndex.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "e0319hUBXFPRpNQFrWlWCX/", "ButtonIndex", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var ButtonIndex = exports('default', (_dec = ccclass("ButtonIndex"), _dec2 = menu("game/Sdgame/ButtonIndex"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonIndex, _Component);
        function ButtonIndex() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "eventName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventType", _descriptor2, _assertThisInitialized(_this));
          _this._index = 0;
          _this._serverId = void 0;
          _this._lock = false;
          _this.isRuning = false;
          return _this;
        }
        var _proto = ButtonIndex.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.dispatchButtonEvent = function dispatchButtonEvent(event, eventData) {
          //        // AudioManager.instance.playbuttonEffect();
          if (ConfigManager[this.eventType][this.eventName]) {
            Common.showLog("相应事件" + ConfigManager[this.eventType][this.eventName]);
            var self = this;
            if (this.isRuning == false) {
              this.isRuning = true;
              this.scheduleOnce(function () {
                self.isRuning = false;
                EventManager.dispatch(ConfigManager[self.eventType][self.eventName], {
                  index: self._index,
                  serId: self._serverId,
                  lock: self._lock
                });
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

        return ButtonIndex;
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
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import AudioManager from "../../../script/manager/AudioManager";
      // import ConfigManager from "../../../script/manager/ConfigManager";
      // import EventManager from "../../../script/manager/EventManager";
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/Sdgame/ButtonIndex")
      // export default class ButtonIndex extends cc.Component {
      //     @property
      //     eventName: string = "事件类型";
      //     @property
      //     eventType: string = "ButtonEvent";
      //     _index: number = 0;
      //     _serverId;
      //     _lock = false;
      //     isRuning = false;
      //     onLoad() {}
      //     start() {}
      //     dispatchButtonEvent(event: cc.Event, eventData: any) {
      //         // AudioManager.instance.playbuttonEffect();
      //         if (ConfigManager.instance[this.eventType][this.eventName]) {
      //             Common.showLog("相应事件" + ConfigManager.instance[this.eventType][this.eventName]);
      //             let self = this;
      //             if (this.isRuning == false) {
      //                 this.isRuning = true;
      //                 this.scheduleOnce(function () {
      //                     self.isRuning = false;
      //                     EventManager.instance.dispatch(ConfigManager.instance[self.eventType][self.eventName], {
      //                         index: self._index,
      //                         serId: self._serverId,
      //                         lock: self._lock,
      //                     });
      //                 }, 0.5);
      //             } else {
      //                 Common.showLog("button speed too fast");
      //             }
      //         } else {
      //             Common.showLog("事件类型" + this.eventName + "未注册");
      //         }
      //     }
      //     initAction() {}
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Sdgame", ['./ButtonIndex.ts', './SdGameAddRoom.ts', './SdGameChipRect.ts', './SdGameCreateRoom.ts', './SdGameDef.ts', './SdGameDeskItems.ts', './SdGameGoldItem.ts', './SdGameHistory.ts', './SdGameHistoryItem.ts', './SdGameRuleMD5.ts', './SdHall.ts', './SdPlayers.ts', './SdProxy.ts', './SdScene.ts', './Sdgame.ts', './SdgameChipRectMgr.ts', './SdgameHallPath.ts', './SdgameHallPath2.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Sdgame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './BlackWordProxy.ts', './Common.ts', './ProxyMgr.ts', './GUtil.ts', './UIClock.ts', './PlatformMgr.ts', './ChipProxy.ts', './ChipItem.ts', './ChipSmall.ts', './SdgameChipRectMgr.ts', './SdGameDef.ts', './ChatProxy.ts', './SdgameHallPath.ts', './SdGameHistory.ts', './SdGameRuleMD5.ts', './SdPlayers.ts', './SdProxy.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _extends, cclegacy, _decorator, Node, Label, ProgressBar, SpriteFrame, ScrollView, Prefab, AudioClip, sp, Button, instantiate, NodePool, resources, isValid, error, Tween, UIOpacity, tween, Sprite, Color, find, UITransform, Vec3, v3, sys, AnimationClip, Animation, SpriteAtlas, Component, i18n, AudioManager, DataManager, UserProxyEvent, UserKey, NetManager, ViewManager, BlackWordProxy, Common, ProxyMgr, GUtil, UIClock, PlatformMgr, ChipProxy, ChipEvent, ChipType, ChipItem, ChipSmall, SdgameChipRectMgr, loadHeguanByType, SdTableType, MAX_CHIP_REWARD, ChatProxy, ChatProxyEvent, SdgameHallPath, SdgameHistory, SdgameRuleMD5, SdPlayers, SdGameProxy, SdGameState, SdGameEvent, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      SpriteFrame = module.SpriteFrame;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      sp = module.sp;
      Button = module.Button;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      resources = module.resources;
      isValid = module.isValid;
      error = module.error;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Sprite = module.Sprite;
      Color = module.Color;
      find = module.find;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      v3 = module.v3;
      sys = module.sys;
      AnimationClip = module.AnimationClip;
      Animation = module.Animation;
      SpriteAtlas = module.SpriteAtlas;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserProxyEvent = module.UserProxyEvent;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      UIClock = module.default;
    }, function (module) {
      PlatformMgr = module.default;
    }, function (module) {
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
      ChipType = module.ChipType;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      SdgameChipRectMgr = module.default;
    }, function (module) {
      loadHeguanByType = module.loadHeguanByType;
      SdTableType = module.SdTableType;
      MAX_CHIP_REWARD = module.MAX_CHIP_REWARD;
    }, function (module) {
      ChatProxy = module.default;
      ChatProxyEvent = module.ChatProxyEvent;
    }, function (module) {
      SdgameHallPath = module.default;
    }, function (module) {
      SdgameHistory = module.default;
    }, function (module) {
      SdgameRuleMD5 = module.default;
    }, function (module) {
      SdPlayers = module.default;
    }, function (module) {
      SdGameProxy = module.default;
      SdGameState = module.SdGameState;
      SdGameEvent = module.SdGameEvent;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "2d6eb9eMbZMx5H/oZK5yn1p", "Sdgame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var Sdgame = exports('default', (_dec = ccclass("Sdgame"), _dec2 = menu("game/Sdgame/Sdgame"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(ProgressBar), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(SpriteFrame), _dec14 = property(ScrollView), _dec15 = property(Prefab), _dec16 = property(AudioClip), _dec17 = property(AudioClip), _dec18 = property(SdgameChipRectMgr), _dec19 = property(UIClock), _dec20 = property(Node), _dec21 = property(Label), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(sp.Skeleton), _dec25 = property(SdgameHallPath), _dec26 = property(SdPlayers), _dec27 = property(Label), _dec28 = property(Button), _dec29 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Sdgame, _Component);
        function Sdgame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "selfHead", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerself", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djsProgress", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "renAni", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wanAni", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wankong", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "kajiang", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saList", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saSpriteF", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgMusic", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sdSound", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipMgr", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clock", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_md5Bg", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5Key", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5Result", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_heguan", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "path_history", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playersMgr", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_id", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BtnLast", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BtnJiabei", _descriptor27, _assertThisInitialized(_this));
          //    //桌面玩家的 下注列表
          _this.betList = {
            1: [],
            //第一个玩家
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: []
          };
          _this.betselfList = [];
          _this.betPublicList = [];
          //{item:,yzType:1}
          _this.createBetList = [];
          _this._buddle = void 0;
          _this._curCountDown = 0;
          _this._curTotalTime = 0;
          _this.haveplay = false;
          _this.djsMId = null;
          _this._chipPool = void 0;
          _this.chipPoolReady = false;
          _this.chipPoolLoading = false;
          _this.pendingChipBets = [];
          _this._isReturnBack = false;
          _this._chip = void 0;
          _this._curTimes = 0;
          return _this;
        }
        var _proto = Sdgame.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this._buddle = SdGameProxy.bundle;
          this.initChipPool();
          this._isReturnBack = false;
          this.initEvent();
          this.initGame();
          loadHeguanByType(this.spine_heguan, SdGameProxy.roomInfo.tableInfo.tableType, SdGameProxy.roomInfo.tableInfo.tableId).then(function () {
            _this2.spine_heguan.setAnimation(0, "idle", true);
          });
        };
        _proto.start = function start() {
          //        //添加聊天
          ViewManager.instance.addChatView("sd", this, SdGameProxy.roomInfo.tableInfo.tableId);

          //        // let helpPath = SdGameProxy.roomInfo.tableInfo.tableType == SdGameDef.SdTableType.NORMAL ? "prefab/SdHelp" : "prefab/SdRuleMD5";

          this.initSelfInfo();
          this.chipMgr.setRate();
          ChipProxy.initChipList(SdGameProxy.roomInfo.baseScoreList);
          this.createChipsList();
        };
        _proto.onDestroy = function onDestroy() {
          this.pendingChipBets = [];
          this._chipPool.clear();
        };
        _proto.getChipNode = function getChipNode(chipInfo) {
          if (this._chipPool.size() > 1) {
            return this._chipPool.get(chipInfo);
          }
          var item = this._chipPool.get(chipInfo);
          if (!item) {
            return null;
          }
          for (var i = 0; i < 10; i++) {
            var newNode = instantiate(item);
            this._chipPool.put(newNode);
          }
          return item;
        };
        _proto.initChipPool = function initChipPool() {
          var _this3 = this;
          if (this.chipPoolReady || this.chipPoolLoading) return;
          if (!this._chipPool) {
            this._chipPool = new NodePool(ChipSmall);
          }
          this.chipPoolLoading = true;
          resources.load("prefab/public/chipSmall", Prefab, function (err, prefab) {
            if (!isValid(_this3, true)) return;
            _this3.chipPoolLoading = false;
            if (err || !prefab) {
              error("Sdgame 筹码资源加载失败", err);
              return;
            }
            for (var i = 0; i < 50; i++) {
              var newNode = instantiate(prefab);
              _this3._chipPool.put(newNode);
            }
            _this3.chipPoolReady = true;
            var pending = _this3.pendingChipBets;
            _this3.pendingChipBets = [];
            // 只补当前下注局的视觉节点，金额已由消息处理更新，不能再次累加。
            for (var _iterator = _createForOfIteratorHelperLoose(pending), _step; !(_step = _iterator()).done;) {
              var bet = _step.value;
              if (SdGameProxy.gameState == SdGameState.BET && bet.issue == SdGameProxy.gameEventID) {
                _this3.betAni(_extends({}, bet.config, {
                  needAni: false
                }), bet.isSelf);
              }
            }
          });
        };
        _proto.recycleChip = function recycleChip(node) {
          // 回池即解除旧下注归属并停止节点及透明度动画，防止复用后被旧结算操作。
          for (var _i = 0, _Object$keys = Object.keys(this.betList); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            this.betList[key] = this.betList[key].filter(function (bet) {
              return bet.item !== node;
            });
          }
          this.betselfList = this.betselfList.filter(function (bet) {
            return bet.item !== node;
          });
          this.betPublicList = this.betPublicList.filter(function (bet) {
            return bet.item !== node;
          });
          this.createBetList = this.createBetList.filter(function (item) {
            return item !== node;
          });
          Tween.stopAllByTarget(node);
          var opacity = node.getComponent(UIOpacity);
          if (opacity) {
            Tween.stopAllByTarget(opacity);
            opacity.opacity = 255;
          }
          this._chipPool.put(node);
        };
        _proto.initEvent = function initEvent() {
          var _this4 = this;
          //        //button事件
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          //        // EventManager.on(ConfigManager.protocolSd.yxxBetBtn, this.selectCM, this);
          EventManager.on(ConfigManager.protocolSd.yxxHaveBet, this.sendBet, this);
          EventManager.on(ConfigManager.protocolSd.SdplayerInfo, this.showInfo, this);
          EventManager.on(ConfigManager.protocolSd.SdPublic, this.showAllPlayerInfo, this);
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
          SdGameProxy.on(SdGameEvent.UPDATE_STATE, this.updateState, this);
          SdGameProxy.on(SdGameEvent.ENTER_ROOM, this.updateRoom, this);
          SdGameProxy.on(SdGameEvent.UPDATE_ROOM, this.updateRoom, this);
          SdGameProxy.on(SdGameEvent.UPDATE_PLAYER_LIST, this.updatePlayer, this);
          SdGameProxy.on(SdGameEvent.UPDATE_USER_LIST, this.showPublicInfoByPage, this);
          SdGameProxy.on(SdGameEvent.BET, this.doingBet, this);
          SdGameProxy.on(SdGameEvent.UPDATE_BET, this.updateBet, this);
          SdGameProxy.on(SdGameEvent.RESULT, this.showResult, this);
          SdGameProxy.on(SdGameEvent.CHECKOUT, this.checkOut, this);
          SdGameProxy.on(SdGameEvent.UPDATE_MD5, this.resetMD5, this);
          SdGameProxy.on(SdGameEvent.UPDATE_HISTORY, this.updatePath, this);
          ChatProxy.on(ChatProxyEvent.RECV_MSG, function (data) {
            _this4.showPlayerChat(data.msg);
          }, this);
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, function () {
            // if (SdGameState.BET == SdGameProxy.gameState) {
            //     let gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            //     this.selfGold.string = Common.numFormat(gold);
            // }
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            _this4.selfGold.string = Common.numFormat(gold);
          }, this);
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.gameShow = function gameShow() {
          this.scheduleOnce(function () {
            Common.showLog("前台");
            if (NetManager.instance._connect == true) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
              NetManager.instance.sendOnlineData(ConfigManager.protocolSd.enterRoom, {
                action: "HD_Enter",
                tableId: SdGameProxy.roomInfo.tableInfo.tableId
              });
            }
          }, 0.1);
        };
        _proto.showInfo = function showInfo(data) {
          if (data == "public") {
            //            //显示全部
            this.showAllPlayerInfo("show");
          } else {
            this.showDeskPlayerInfo(data);
          }
        };
        _proto.showPublicInfoByPage = function showPublicInfoByPage(data) {
          //        // let data: SdGameDef.HD_GetPlayerList = this._model.AllPlayerinfo;

          var list = [];
          for (var _iterator2 = _createForOfIteratorHelperLoose(data), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            var item = {
              head: i.avatar,
              gold: i.yxb,
              name: i.nickName
            };
            list.push(item);
          }
          GUtil.openUserList(list);
        };
        _proto.showAllPlayerInfo = function showAllPlayerInfo(data) {
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.getPlayerList, {});
        };
        _proto.showDeskPlayerInfo = function showDeskPlayerInfo(data) {
          if (data == "self") {
            var item = {
              head: DataManager.instance.getUserDataForKey(UserKey.AVATAR),
              gold: DataManager.instance.getUserDataForKey(UserKey.GOLD),
              name: DataManager.instance.getUserDataForKey(UserKey.NICKNAME)
            };
            GUtil.openPlayer(item);
          } else {
            var i = parseInt(data);
            var player = this.playersMgr.players[i - 1];
            for (var _iterator3 = _createForOfIteratorHelperLoose(SdGameProxy.playerList), _step3; !(_step3 = _iterator3()).done;) {
              var _user = _step3.value;
              if (_user.userId == player.name) {
                var _item = {
                  head: _user.avatar,
                  gold: _user.yxb,
                  name: _user.nickName
                };
                GUtil.openPlayer(_item);
                break;
              }
            }
            //            // let user =
            //            // this.showPlayerInfo(this._model.curTablePlayer[i - 1]);
          }
        };

        _proto.updateState = function updateState(fromEnter) {
          var _this5 = this;
          if (fromEnter === void 0) {
            fromEnter = false;
          }
          if (this.clock) {
            this.clock.hideTime = false;
            this.clock.Open(SdGameProxy.gameDownTime + 1);
          }
          this.txt_id.string = Common.setGameNo(SdGameProxy.gameEventID);
          switch (SdGameProxy.gameState) {
            case SdGameState.START:
              this.clearAllRoom();
              this.clock.changeColor = false;
              //                // this.wanAni.active = true;
              if (!fromEnter) {
                if (SdGameProxy.roomInfo.tableInfo.tableType != SdTableType.NORMAL) {
                  this.wanAni.active = false;
                  var spine = this.renAni.getComponent(sp.Skeleton);
                  spine.setAnimation(0, "shake", false);
                  spine.timeScale = 1.1;
                  AudioManager.instance.playSound(this.sdSound[0], false);
                } else {
                  this.wanAni.active = false;
                  this.wankong.active = true;
                  this.scheduleOnce(function () {
                    _this5.wankong.active = false;
                    _this5.wanAni.active = true;
                    _this5.wanAni.getComponent(sp.Skeleton).setAnimation(0, "intro2", false);
                    _this5.wanAni.getComponent(sp.Skeleton).addAnimation(0, "wan_idle", true);
                  }, 2);
                }

                //                    // spine.setCompleteListener(() => {
                //                    //     spine.setCompleteListener(null);
                //                    //     this.wanAni.active = true;
                //                    //     this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "wan_idle", true);
                //                    // });
                //                    // this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
              }

              break;
            case SdGameState.BET:
              this.clock.changeColor = true;
              this._curCountDown = SdGameProxy.gameDownTime;
              this._curTotalTime = SdGameProxy.betTime;
              this.createCountDown();
              this.wanAni.active = true;
              this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "wan_idle", true);
              this.renAni.getComponent(sp.Skeleton).setAnimation(0, "bet", false);
              this.renAni.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
              break;
            case SdGameState.RESULT:
              this.clock.changeColor = false;
              this._curCountDown = 0;
              break;
          }
        };
        _proto.backHall = function backHall() {
          if (this._isReturnBack) {
            return;
          }
          this._isReturnBack = true;
          //        // this.unscheduleAllCallbacks();
          ViewManager.instance.setGameData(null);
          AudioManager.instance.stopAll();
          SdGameProxy.emit(SdGameEvent.LEAVE_ROOM);
        };
        _proto.updatePlayer = function updatePlayer(data) {
          this.playersMgr.playerPublic.getChildByName("number").getComponent(Label).string = "" + data.playNum;
          this.playersMgr.showPlayers();
        };
        _proto.updateRoom = function updateRoom() {
          var data = SdGameProxy.roomInfo;
          this.playersMgr.showPlayerCount();
          //        // this.chipMgr.resetSelftBet();
          if (SdGameProxy.gameState == SdGameState.BET) {
            this.initBet();
            var list = data.tableInfo.betList;
            for (var _iterator4 = _createForOfIteratorHelperLoose(list), _step4; !(_step4 = _iterator4()).done;) {
              var bet = _step4.value;
              var json = JSON.parse(bet);
              // 恢复时也必须区分自己的筹码，避免混入公共区域后被数量上限回收。
              this.betAni({
                id: json.userId,
                betType: json.betType,
                count: json.betAmount,
                needAni: false
              }, json.userId == DataManager.instance.getUserDataForKey(UserKey.OID));
            }
          }
          this.chipMgr.reset();
          this.chipMgr.updateTotalBet(data.tableInfo.pos);
          this.chipMgr.updateSelfBet(data.userInfo.bets);
          var type = SdGameProxy.roomInfo.tableInfo.tableType;
          switch (type) {
            case SdTableType.NORMAL:
              this.node_md5Bg.active = false;
              break;
            case SdTableType.MD5:
              this.node_md5Bg.active = true;
              break;
            case SdTableType.MD5_PRIZE:
              this.node_md5Bg.active = true;
              break;
          }
          this.txt_md5.string = data.tableInfo.ciphertext;
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.history, {
            tableId: data.tableInfo.tableId,
            size: "64"
          });
          this.updateState(true);
        };
        _proto.clearRoom = function clearRoom() {
          this.djsProgress.node.active = false;
          this._curCountDown = 0;
          this.unschedule(this.showCountDown);
        };
        _proto.clearAllRoom = function clearAllRoom() {
          this.djsProgress.node.active = false;
          this._curCountDown = 0;
          this.unschedule(this.showCountDown);
          this.initGameData();
        };
        _proto.initGameData = function initGameData() {
          this.initBet();

          //        // this._ISdyxxbg.resetStatus();
          this.chipMgr.rememberBet();
          this.chipMgr.reset();
          //        // this._model.resultData = null;
          this.wanAni.active = true;
          this.wankong.active = false;
        };
        _proto.initBet = function initBet() {
          var _this6 = this;
          this.pendingChipBets = [];
          // 回收会移除下注记录，先取快照，确保每个节点只处理一次。
          var nodes = new Set(this.createBetList);
          for (var _i2 = 0, _arr = [].concat(Object.values(this.betList), [this.betselfList, this.betPublicList]); _i2 < _arr.length; _i2++) {
            var bets = _arr[_i2];
            for (var _iterator5 = _createForOfIteratorHelperLoose(bets), _step5; !(_step5 = _iterator5()).done;) {
              var bet = _step5.value;
              nodes.add(bet.item);
            }
          }
          nodes.forEach(function (node) {
            if (node && node.parent) _this6.recycleChip(node);
          });
          for (var _i3 = 0, _Object$keys2 = Object.keys(this.betList); _i3 < _Object$keys2.length; _i3++) {
            var key = _Object$keys2[_i3];
            this.betList[key] = [];
          }
          this.betselfList = [];
          this.betPublicList = [];
          this.createBetList = [];
        };
        _proto.binkNode = function binkNode(node) {
          tween(node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }).union().repeatForever().start();
        };
        _proto.showResultAni = function showResultAni() {
          var data = SdGameProxy.resultData;
          var nums = data.openNum;
          var type = SdGameProxy.roomInfo.tableInfo.tableType;
          if (type != SdTableType.NORMAL) {
            var original = data.original;
            this.txt_md5.string = original;
            this.txt_md5Result.active = false;
            this.txt_md5Key.active = true;
          }
          for (var i = 0; i < 4; i++) {
            var num = nums[i];
            var index = parseInt(num) - 1;
            this.saList[i].getComponent(Sprite).spriteFrame = this.saSpriteF[index];
            this.saList[i].active = true;
            var txt = this.saList[i].getChildByName("txt");
            txt.getComponent(Label).color = index == 0 ? Color.WHITE : Color.BLACK;
          }
          this.chipMgr.showHighLight(SdGameProxy.resultData.prizeResults);
        };
        _proto.emitBet = function emitBet() {
          var _this7 = this;
          //        //shou cm 把没中的区域 筹码收集到庄家
          var nodes = this.chipMgr.getReturnChipParents(SdGameProxy.resultData.prizeResults);
          var _loop = function _loop() {
            var player = nodes[i];
            // 超出动画上限的筹码会立即移出父节点，遍历快照避免漏收。
            var nodeArr = player.children.slice();
            var pos = {
              xx: player.getComponent(UITransform).width / 2,
              yy: player.getComponent(UITransform).height / 2
            };
            var world = _this7.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            var posren = player.getComponent(UITransform).convertToNodeSpaceAR(world);
            nodeArr.forEach(function (node, index) {
              if (index > MAX_CHIP_REWARD) {
                _this7.recycleChip(node);
                return;
              }
              tween(node).to(0.3, {
                position: v3(pos.xx, pos.yy)
              }).to(0.3, {
                position: v3(pos.xx, pos.yy + index * 2)
              }).to(0.5, {
                position: posren
              }).call(function () {
                _this7.recycleChip(node);
              }).start();
              tween(node.getComponent(UIOpacity)).delay(0.6).to(0.3, {
                opacity: 255
              }).start();
            });
          };
          for (var i = 0; i < nodes.length; i++) {
            _loop();
          }
          //        ///////////////////////////
          this.scheduleOnce(function () {
            //            //发筹码 {item:CMnode,yztype:xzType} xzType：下注位置
            for (var _i4 = 0, _Object$entries = Object.entries(_this7.betList); _i4 < _Object$entries.length; _i4++) {
              var _Object$entries$_i = _Object$entries[_i4],
                _i5 = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              //                //玩家
              var num = 0;
              var _loop2 = function _loop2() {
                  //                    //区域
                  var obj = value[j];
                  var count = _this7.getNumBet(obj.yztype);
                  if (count > 0) {
                    num = num + 1;
                    if (num > MAX_CHIP_REWARD) {
                      _this7.recycleChip(obj.item);
                      return 1; // continue
                    }
                    //                        //返还筹码
                    var yzpool = _this7.chipMgr.getChipParent(obj.yztype);
                    var player = _this7.playersMgr.players[parseInt(_i5) - 1];
                    var positionNode = player.getChildByName("img_1");
                    var world = positionNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                    var world2 = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posren2 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world2);
                    var worldren = _this7.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                    tween(obj.item).to(0.3, {
                      position: v3(posren.x, posren.y + (num - 1) * 2)
                    })
                    // .to(0.6 + num * 0.05, { opacity: 255 })
                    .delay(0.6 + num * 0.05).to(0.3, {
                      position: posren2
                    }).call(function () {
                      _this7.recycleChip(obj.item);
                    }).start();

                    //                        //补偿 中奖

                    var maxCount = count > MAX_CHIP_REWARD ? MAX_CHIP_REWARD : count;
                    var _loop3 = function _loop3() {
                      if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                      var itemBet = _this7.getChipNode(obj.item.getComponent(ChipSmall).value);
                      yzpool.addChild(itemBet);
                      itemBet.position = posrento;
                      var positionNode = player.getChildByName("img_1");
                      var posX = positionNode.getPosition().x > 0 ? 40 * (m + 1) : -40 * (m + 1);
                      var world3 = positionNode.getComponent(UITransform).convertToWorldSpaceAR(v3(posX, 0));
                      //                                        // let positionNode2 = player.getChildByName("img_" + (m + 2));
                      //                                        // let world3 = positionNode2.convertToWorldSpaceAR(cc.v2(0,0));
                      var posre3 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world3);
                      _this7.createBetList.push(itemBet);
                      tween(itemBet).to(0.3, {
                        position: v3(posre3.x, posre3.y + (num - 1) * 2)
                      })
                      // .to(0.6 + num * 0.05, { opacity: 255 })
                      .delay(0.6 + num * 0.05).to(0.3, {
                        position: posren2
                      }).call(function () {
                        _this7.recycleChip(itemBet);
                      }).start();
                    };
                    for (m = 0; m < maxCount; m++) {
                      if (_loop3()) continue;
                    }
                  }
                },
                m;
              for (var j = 0; j < value.length; j++) {
                if (_loop2()) continue;
              }
            }
            _this7.emitMyselfBet();
            _this7.emitPublicBet();
            _this7.backMoney();
          }, 1.6);
        };
        _proto.getDeskPlayerByID = function getDeskPlayerByID(data) {
          var redata = [];
          if (data == null) {
            return redata;
          }
          if (data.length == 0) {
            return redata;
          }
          var curData = data;
          for (var i = 0; i < curData.length; i++) {
            if (curData[i].UserID != DataManager.instance.getUserDataForKey(UserKey.OID)) {
              redata.push(curData[i]);
            }
            if (redata.length == this.playersMgr.otherUserCount) {
              break;
            }
          }
          return redata;
        };
        _proto.addScore = function addScore(parent, str) {
          this._buddle.load("prefab/addScore", function (err, assert) {
            var newNode = instantiate(assert);
            newNode.getChildByName("text").getComponent(Label).string = str;
            parent.addChild(newNode);
          });
        };
        _proto.backMoney = function backMoney() {
          var _this8 = this;
          this.scheduleOnce(function () {
            if (SdGameProxy.resultData == null) {
              return;
            }
            for (var i = 0; i < _this8.playersMgr.players.length; i++) {
              var player = _this8.playersMgr.players[i];
              var uid = player.name;
              var data = SdGameProxy.resultData.seatPrize;
              for (var _iterator6 = _createForOfIteratorHelperLoose(data), _step6; !(_step6 = _iterator6()).done;) {
                var item = _step6.value;
                if (item.userId == uid) {
                  var add = item.prizeAmount;
                  if (add > 0) _this8.addScore(player, "+" + Common.ChangeMoneyShow(add, 2));
                  break;
                }
              }
            }
            if (SdGameProxy.resultData.userPrize.prizeAmount > 0) {
              var _player = _this8.playerself;
              var tips = _player.getChildByName("addScore");
              tips.getChildByName("text").getComponent(Label).string = "+" + Common.ChangeMoneyShow(SdGameProxy.resultData.userPrize.prizeAmount, 2);
              tips.active = true;
            }
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            _this8.selfGold.string = Common.numFormat(gold);
          }, 1);
        };
        _proto.emitMyselfBet = function emitMyselfBet() {
          var _this9 = this;
          var num = 0;
          var _loop4 = function _loop4() {
              var betInfo = _step7.value;
              var obj = betInfo;
              var count = _this9.getNumBet(betInfo.yztype);
              if (count > 0) {
                num = num + 1;
                if (num > MAX_CHIP_REWARD) {
                  _this9.recycleChip(obj.item);
                  return 1; // continue
                }

                var yzpool = _this9.chipMgr.getChipParent(obj.yztype, true);
                var player = _this9.playerself;
                var positionNode = player.getChildByName("img_1");
                var world = positionNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                var world2 = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posren2 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world2);
                tween(obj.item).to(0.3, {
                  position: v3(posren.x, posren.y + (num - 1) * 2)
                })
                // .to(0.6 + num * 0.05, { opacity: 255 })
                .delay(0.6 + num * 0.05).to(0.3, {
                  position: posren2
                }).call(function () {
                  _this9.recycleChip(obj.item);
                }).start();
                var worldren = _this9.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                var maxCount = count > MAX_CHIP_REWARD ? MAX_CHIP_REWARD : count;
                var _loop5 = function _loop5() {
                  if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                  var itemBet = _this9.getChipNode(obj.item.getComponent(ChipSmall).value);
                  yzpool.addChild(itemBet);
                  itemBet.position = posrento;
                  var positionNode2 = player.getChildByName("img_" + (m + 2));
                  var world3 = positionNode2.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                  var posre3 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world3);
                  _this9.createBetList.push(itemBet);
                  // cc.tween(itemBet)
                  //     .to(0.3, { x: posre3.getPosition().x, y: posre3.getPosition().y + (num - 1) * 2 })
                  //     .to(0.6 + num * 0.05, { opacity: 255 })
                  //     .to(0.3, { x: posren2.getPosition().x, y: posren2.getPosition().y })
                  //     .call(() => {
                  //         this._chipPool.put(itemBet);
                  //     })
                  //     .start();

                  tween(itemBet).to(0.3, {
                    position: v3(posre3.x, posre3.y + (num - 1) * 2)
                  })
                  // .to(0.6 + num * 0.05, { opacity: 255 })
                  .delay(0.6 + num * 0.05).to(0.3, {
                    position: posren2
                  }).call(function () {
                    _this9.recycleChip(itemBet);
                  }).start();
                };
                for (m = 0; m < maxCount; m++) {
                  if (_loop5()) continue;
                }
              }
            },
            m;
          for (var _iterator7 = _createForOfIteratorHelperLoose(this.betselfList), _step7; !(_step7 = _iterator7()).done;) {
            if (_loop4()) continue;
          }
        };
        _proto.emitPublicBet = function emitPublicBet() {
          var _this10 = this;
          var num = 0;
          var _loop6 = function _loop6() {
              var betInfo = _step8.value;
              var obj = betInfo;
              var count = _this10.getNumBet(obj.yztype);
              if (count > 0) {
                num = num + 1;
                if (num > MAX_CHIP_REWARD) {
                  _this10.recycleChip(obj.item);
                  return 1; // continue
                }

                var yzpool = _this10.chipMgr.getChipParent(obj.yztype);
                var player = _this10.playersMgr.playerPublic;
                var world = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                tween(obj.item).to(0.5, {
                  position: posren
                }).call(function () {
                  _this10.recycleChip(obj.item);
                }).start();
                var worldren = _this10.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                var maxCount = count > MAX_CHIP_REWARD ? MAX_CHIP_REWARD : count;
                var _loop7 = function _loop7() {
                  if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                  var itemBet = _this10.getChipNode(obj.item.getComponent(ChipSmall).value);
                  yzpool.addChild(itemBet);
                  itemBet.position = posrento;
                  _this10.createBetList.push(itemBet);
                  tween(itemBet).to(0.5, {
                    position: posren
                  }).call(function () {
                    _this10.recycleChip(itemBet);
                  }).start();
                };
                for (m = 0; m < maxCount; m++) {
                  if (_loop7()) continue;
                }
              }
            },
            m;
          for (var _iterator8 = _createForOfIteratorHelperLoose(this.betPublicList), _step8; !(_step8 = _iterator8()).done;) {
            if (_loop6()) continue;
          }
        };
        _proto.getNumBet = function getNumBet(yztype) {
          var count = 0;
          for (var _iterator9 = _createForOfIteratorHelperLoose(SdGameProxy.resultData.prizeResults), _step9; !(_step9 = _iterator9()).done;) {
            var PrizeResult = _step9.value;
            if (PrizeResult == yztype) {
              count = count + 1;
            }
          }
          return count;
        };
        _proto.isDajiang = function isDajiang() {
          //        // for (let PrizeResult of this._model.resultData.PrizeResults) {
          //        //     if (temp == null) {
          //        //         temp = PrizeResult;
          //        //     } else {
          //        //         if (temp != PrizeResult) {
          //        //             return false;
          //        //         }
          //        //     }
          //        // }
          return true;
        };
        _proto.wandong = function wandong() {
          this.renAni.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
          this.wanAni.active = true;
          this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "wan_idle", false);
          this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "wan_end", false);
          this.wankong.active = true;
        };
        _proto.playResultSound = function playResultSound() {
          if (this.djsMId != null) ;
          AudioManager.instance.playSound(this.sdSound[3], false); // 第一阶段
          //        // if (!this._model.resultData.IsPrizePool) {
          //        //     //不是大奖
          //        //     let self = this;
          //        //     this.scheduleOnce(() => {
          //        //         AudioManager.instance.playSound(self.sdSound[4], false); // 第2阶段
          //        //     }, 2.3);
          //        //     this.scheduleOnce(() => {
          //        //         AudioManager.instance.playSound(self.sdSound[5], false); // 第3阶段
          //        //     }, 4);
          //        // }
        };

        _proto.updatePath = function updatePath(data) {
          var pathData = [];
          var type = SdGameProxy.roomInfo.tableInfo.tableType;
          for (var _iterator10 = _createForOfIteratorHelperLoose(data), _step10; !(_step10 = _iterator10()).done;) {
            var _item2 = _step10.value;
            var json = JSON.parse(_item2);
            pathData.push(json.num);
          }
          if (pathData.length > 50) {
            pathData = pathData.slice(0, 50);
          }
          var paths = [];
          var length = pathData.length;
          for (var i = length - 1; i >= 0; i--) {
            var item = pathData[i];
            var count1 = parseInt(item[0]) - 1;
            var count2 = parseInt(item[1]) - 1;
            var count3 = parseInt(item[2]) - 1;
            var count4 = parseInt(item[3]) - 1;
            var all = count1 + count2 + count3 + count4;
            paths.push(all % 2);
          }
          this.path_history.setData(paths, 0.8);
        };
        _proto.resetMD5 = function resetMD5(text) {
          this.txt_md5.string = text;
          this.txt_md5Key.active = false;
          this.txt_md5Result.active = true;
        };
        _proto.showKaiJiang = function showKaiJiang() {
          var _this11 = this;
          if (SdGameProxy.roomInfo.tableInfo.tableType == SdTableType.NORMAL) {
            this.wanAni.active = false;
            var _spine = this.renAni.getComponent(sp.Skeleton);
            _spine.setAnimation(0, "shake", false);
            _spine.timeScale = 1.1;
          }
          //        // this.kajiang.scale = 0;
          //        // this.kajiang.opacity = 255;
          //        // this.kajiang.active = true;
          //        // cc.tween(this.kajiang)
          //        //     .to(0.5, { scale: 2 })
          //        //     .to(0.8, { opacity: 0 })
          //        //     .call(() => {
          //        //         this.kajiang.active = false;
          //        //     })
          //        //     .start();

          this.kajiang.active = true;
          var spine = this.kajiang.getComponent(sp.Skeleton);
          spine.setAnimation(0, "idle", false);
          spine.setCompleteListener(function () {
            spine.setCompleteListener(null);
            _this11.kajiang.active = false;
          });
        };
        _proto.checkOut = function checkOut() {
          var _this12 = this;
          var time = 0;
          if (SdGameProxy.roomInfo.tableInfo.tableType == SdTableType.NORMAL) {
            time = 3;
          }
          this.scheduleOnce(function () {
            _this12.emitBet();
          }, time);
        };
        _proto.showResult = function showResult() {
          var _this13 = this;
          this.showKaiJiang();
          var time = 0;
          if (SdGameProxy.roomInfo.tableInfo.tableType == SdTableType.NORMAL) {
            time = 3;
          }
          this.scheduleOnce(function () {
            _this13.playResultSound();
            _this13.wandong();
            _this13.showResultAni();
            //            // this.emitBet();
          }, time);
          this.scheduleOnce(function () {
            NetManager.instance.sendOnlineData(ConfigManager.protocolSd.history, {
              tableId: SdGameProxy.roomInfo.tableInfo.tableId,
              size: "64"
            });
          }, time + 1);
        };
        _proto.showBigJiangResult = function showBigJiangResult() {
          var dajiangLayer = find("Canvas/dajiangLayer");
          dajiangLayer.active = true;
          dajiangLayer.getChildByName("score").active = false;
          var dajiangani = dajiangLayer.getChildByName("teixao").getComponent(sp.Skeleton);
          dajiangani.setAnimation(0, "dalogo1", false);
          dajiangani.addAnimation(0, "dalogo2", true);
          this.scheduleOnce(function () {
            var dajiangLayer1 = find("Canvas/dajiangLayer");
            dajiangLayer1.getChildByName("score").active = true;
            //            // dajiangLayer1.getChildByName("score").getComponent(cc.Label).string = Common.numFormat(this._model.resultData.TotalBackYxb);
          }, 0.5);
        }
        //    /**
        //     * 自己下注
        //     * @param data
        //     */
        ;

        _proto.doingBet = function doingBet(data) {
          var betType = data.pos;
          var count = parseInt(data.betAmount);
          AudioManager.instance.playOneShot(this.sdSound[1]);
          this.betAni({
            id: DataManager.instance.getUserDataForKey(UserKey.OID),
            betType: betType,
            count: count
          }, true);
          this.chipMgr.addBetCount(betType, count, true);
        }
        //    /**
        //     * 同步下注信息
        //     * @param data
        //     */
        ;

        _proto.updateBet = function updateBet(data) {
          for (var i = 0, length = data.length; i < length; i++) {
            var item = data[i];
            var info = JSON.parse(item);
            var id = info.userId;
            var betType = info.betType;
            var count = info.betAmount;
            if (id == DataManager.instance.getUserDataForKey(UserKey.OID)) {
              continue;
            }

            //            // let delay = i / length;
            var delay = 0;
            this.betAni({
              id: id,
              betType: betType,
              count: count,
              delay: delay
            }, false);
            this.chipMgr.addBetCount(betType, count, false);
          }
          AudioManager.instance.playOneShot(this.sdSound[1]);
        };
        _proto.betAni = function betAni(config, isSelf) {
          var _config$needAni,
            _this14 = this;
          if (isSelf === void 0) {
            isSelf = false;
          }
          if (!this.chipPoolReady) {
            this.pendingChipBets.push({
              config: _extends({}, config),
              isSelf: isSelf,
              issue: SdGameProxy.gameEventID
            });
            this.initChipPool();
            return;
          }
          var id = config.id;
          var xzType = config.betType;
          var xiazhuzhi = config.count;
          var delay = config.delay || 0;
          var needAni = (_config$needAni = config.needAni) != null ? _config$needAni : true;
          var startPos;
          var index = this.playersMgr.getLastIndexById(id);
          if (index == -2) {
            return;
          }
          var aniPool = this.chipMgr.getChipParent(xzType, isSelf);
          var CMnode = this.getChipNode(xiazhuzhi);
          if (!CMnode) {
            return;
          }
          aniPool.addChild(CMnode);
          if (id == DataManager.instance.getUserDataForKey(UserKey.OID)) {
            var player = find("player_self", this.node);
            var worldPos = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
            this.betselfList.push({
              item: CMnode,
              yztype: xzType
            });
          } else if (index >= 0) {
            var _player2 = this.playersMgr.players[index];
            var _worldPos = _player2.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(_worldPos);
            this.betList[index + 1].push({
              item: CMnode,
              yztype: xzType
            });
          } else {
            var _player3 = this.playersMgr.playerPublic;
            var _worldPos2 = _player3.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(_worldPos2);
            this.betPublicList.push({
              item: CMnode,
              yztype: xzType
            });
          }
          CMnode.position = v3(startPos.x, startPos.y);
          var len = aniPool.children.length;
          var y = len * 5;
          y = y > 50 ? 50 : y;
          var x = 0;

          // let x = Math.random() * 200 - 100;
          // let y = Math.random() * 60 - 30;

          var max = 20;
          if (needAni) {
            tween(CMnode).delay(delay).to(0.5, {
              position: v3(x, y)
            }, {
              easing: "quadOut"
            }).call(function () {
              if (aniPool.children.length > max) {
                _this14.recycleChip(aniPool.children[0]);
                for (var i = 0; i < aniPool.children.length; i++) {
                  var ny = i * 5;
                  ny = ny > 50 ? 50 : ny;
                  aniPool.children[i].position = v3(0, ny, 0);
                }
              }
            }).start();
          } else {
            CMnode.setPosition(x, y);
            if (aniPool.children.length > max) {
              this.recycleChip(aniPool.children[0]);
              for (var i = 0; i < aniPool.children.length; i++) {
                var ny = i * 5;
                ny = ny > 50 ? 50 : ny;
                aniPool.children[i].position = v3(0, ny, 0);
              }
            }
          }
        };
        _proto.sendBet = function sendBet(data) {
          if (!this.djsProgress.node.active) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          var pos = data;
          var num = "" + this._chip.count;
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.doingBet, {
            pos: pos,
            betAmount: num
          });
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != SdGameProxy.BUNDLE) {
            return;
          }
          var children = this.scrollViewCM.content.children;
          for (var _iterator11 = _createForOfIteratorHelperLoose(children), _step11; !(_step11 = _iterator11()).done;) {
            var child = _step11.value;
            var chipitem = child.getComponent(ChipItem);
            if (chipitem) {
              if (chipitem.data == data) {
                this._chip = data;
              } else {
                chipitem.moveUp(false);
              }
            }
          }
        };
        _proto.createChipsList = function createChipsList() {
          var _this15 = this;
          this.scrollViewCM.content.destroyAllChildren();
          var minChip = ChipProxy.chipList[0].count;
          for (var _iterator12 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step12; !(_step12 = _iterator12()).done;) {
            var i = _step12.value;
            if (i.count < minChip) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            //            // chip.scale = 1.3;
            //            // chip.width = 130;
            //            // chip.height = 130;
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, SdGameProxy.BUNDLE);
          }
          for (var _iterator13 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step13; !(_step13 = _iterator13()).done;) {
            var _i6 = _step13.value;
            var has = false;
            for (var _iterator14 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step14; !(_step14 = _iterator14()).done;) {
              var j = _step14.value;
              if (j.count == _i6.count) {
                has = true;
                break;
              }
            }
            if (has) {
              continue;
            }
            var _chip2 = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip2);
            //            // chip.scale = 1.3;
            //            // chip.width = 130;
            //            // chip.height = 130;
            _chip2.getComponent(ChipItem).setData(_i6, ChipType.CHIP, SdGameProxy.BUNDLE);
          }
          this.scheduleOnce(function () {
            var index = 0;
            if (ChipProxy.diyList.length == 0) {
              index = 2;
            }
            var child = _this15.scrollViewCM.content.children[index];
            child.getComponent(ChipItem).moveUp();
            _this15.scrollViewCM.scrollToLeft();
          });
        };
        _proto.createCountDown = function createCountDown() {
          var per = this._curCountDown / this._curTotalTime;
          this.djsProgress.node.active = true;
          this.djsProgress.progress = per;
          this._curTimes = sys.now();
          this.schedule(this.showCountDown, 0.1);
        };
        _proto.showCountDown = function showCountDown() {
          var now = sys.now();
          this._curCountDown -= (now - this._curTimes) / 1000.0;
          this._curTimes = now;
          if (this._curCountDown <= 3 && this.haveplay == false) {
            //            //倒计时音效
            this.haveplay = true;
            this.djsMId = AudioManager.instance.playSound(this.sdSound[2], false);
            ViewManager.instance.showCountDownTip(this.node, Math.round(this._curCountDown), "idle3", 25);
          }
          if (this._curCountDown < 0.000001) {
            this._curCountDown = 0;
          }
          this.djsProgress.progress = this._curCountDown / this._curTotalTime;
          if (this._curCountDown < 0.000001) {
            this.haveplay = false;
            // cc.audioEngine.stopEffect(this.djsMId);
            this.djsProgress.node.active = false;
            this.unschedule(this.showCountDown);
          }
        };
        _proto.initGame = function initGame() {
          this.wanAni.active = true;
          this.wankong.active = false;
          this.djsProgress.node.active = false;
          AudioManager.instance.playGameMusic(this.bgMusic, true); //播放背景音乐
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.startGame, {});
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
        };
        _proto.initSelfInfo = function initSelfInfo() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.selfHead);
          Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.onClickExit = function onClickExit() {
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.exitRoom, {
            action: "HD_QuitTable"
          });
        };
        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("sd", 8);
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/SdRuleMD5", SdGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (SdGameProxy.roomInfo.tableInfo.tableType != SdTableType.NORMAL) {
              node.getComponent(SdgameRuleMD5).showType(1);
            } else {
              node.getComponent(SdgameRuleMD5).showType(0);
            }
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          Common.loadPopBuddle("prefab/SdHistory", SdGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            node.getComponent(SdgameHistory).setData(SdGameProxy.history, SdGameProxy.roomInfo.tableInfo.tableType);
          }, true);
        };
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
        _proto.onClickCopy = function onClickCopy() {
          PlatformMgr.p.copyToClipBoard(this.txt_md5.string);
        };
        _proto.onClickLastBet = function onClickLastBet() {
          var _this16 = this;
          if (!this.djsProgress.node.active) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          var bets = this.chipMgr.lastBets;
          for (var i in bets) {
            if (bets[i] > 0) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolSd.doingBet, {
                pos: i + "",
                betAmount: bets[i] + ""
              });
            }
          }
          Common.setButtonEnableWithGray(this.BtnLast, false);
          tween(this.BtnLast.node).delay(2).call(function () {
            Common.setButtonEnableWithGray(_this16.BtnLast, true);
          }).start();
        };
        _proto.onClickDoubleBet = function onClickDoubleBet() {
          var _this17 = this;
          if (!this.djsProgress.node.active) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          var bets = this.chipMgr.chipList;
          bets.forEach(function (rect, key) {
            if (rect.selfBet > 0) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolSd.doingBet, {
                pos: rect.pos + "",
                betAmount: rect.selfBet + ""
              });
            }
          });

          // this.BtnJiabei.interactable = false;
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          tween(this.BtnJiabei.node).delay(2).call(function () {
            // this.BtnJiabei.interactable = true;
            Common.setButtonEnableWithGray(_this17.BtnJiabei, true);
          }).start();
        };
        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.onDisable = function onDisable() {
          //        //button事件
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          //        // EventManager.off(ConfigManager.protocolSd.yxxBetBtn, this.selectCM, this);
          EventManager.off(ConfigManager.protocolSd.yxxHaveBet, this.sendBet, this);
          EventManager.off(ConfigManager.protocolSd.SdplayerInfo, this.showInfo, this);
          EventManager.off(ConfigManager.protocolSd.SdPublic, this.showAllPlayerInfo, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连

          ProxyMgr.close(this);
        };
        _proto.showPlayerChat = function showPlayerChat(data) {
          if (!data) return;
          if (data.GroupId != "sd" + SdGameProxy.roomInfo.tableInfo.tableId) return;
          var currPlayer = null;
          var scale_x = 1;
          var userID = DataManager.instance.getUserDataForKey(UserKey.OID);
          var isSelf = data.FromUserId == userID;
          if (isSelf) {
            currPlayer = this.playerself;
            this.addMyChat(currPlayer, data, scale_x);
            return;
          }
          for (var i = 0; i < this.playersMgr.players.length; i++) {
            var player = this.playersMgr.players[i];
            if (data.FromUserId == player.name) {
              currPlayer = player;
              scale_x = player.getPosition().x > 0 ? -1 : 1;
              break;
            }
          }
          if (currPlayer && isValid(currPlayer)) {
            this.addChat(currPlayer, data, scale_x);
          } else {
            if (data.MsgType == 1) {
              SdGameProxy.chatQueueList.push(data);
              this.showPublicChat(1);
            } else if (data.MsgType == 2) {
              SdGameProxy.expressionQueueList.push(data);
              this.showPublicChat(2);
            }
          }
        };
        _proto.addMyChat = function addMyChat(chatRoot, data, scaleX) {
          var node_chat = find("seat_bg/node_chat", chatRoot);
          node_chat.active = data.MsgType == 1;
          var node_expression = find("seat_bg/node_expression", chatRoot);
          node_expression.active = !node_chat.active;
          if (data.MsgType == 1) {
            //            //文字
            var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
            data.Content = BlackWordProxy.filter(data.Content);
            lbl_chat.string = data.Content;
            node_chat.setPosition(node_chat.position.x * scaleX, node_chat.position.y);
            node_chat.scale = v3(0, 0, 1);
            lbl_chat.node.scale = v3(scaleX, lbl_chat.node.scale.y, 1);
            tween(node_chat).stop().to(0.2, {
              scale: v3(scaleX, 1, 1)
            }).delay(2.0).call(function () {
              node_chat.active = false;
            }).start();
          } else {
            this.loadLocalFrameAnim(data.Content, node_expression, function () {
              node_expression.active = false;
            });
          }
        };
        _proto.addChat = function addChat(parent, data, scaleX) {
          var _this18 = this;
          this._buddle.load("prefab/Node_chat", function (err, prefab) {
            if (err) {
              return;
            }
            var chatRoot = instantiate(prefab);
            parent.addChild(chatRoot);
            if (data.MsgType == 1) {
              //                //文字
              var node_chat = chatRoot.getChildByName("node_chat");
              node_chat.active = true;
              var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
              data.Content = BlackWordProxy.filter(data.Content);
              lbl_chat.string = data.Content;
              node_chat.active = true;
              node_chat.setPosition(node_chat.position.x * scaleX, node_chat.position.y);
              node_chat.scale = v3(0, 0, 1);
              lbl_chat.node.scale = v3(scaleX, lbl_chat.node.scale.y, 1);
              tween(node_chat).stop().to(0.2, {
                scale: v3(scaleX, 1, 1)
              }).delay(2.0).call(function () {
                chatRoot.destroyFromParent();
              }).start();
            } else {
              var node_expression = chatRoot.getChildByName("node_expression");
              node_expression.active = true;
              _this18.loadLocalFrameAnim(data.Content, node_expression, function () {
                chatRoot.destroyFromParent();
              });
            }
          });
        };
        _proto.showPublicChat = function showPublicChat(nType) {
          var _this19 = this;
          if (nType == 1) {
            //            //文本
            if (SdGameProxy.chatQueueList.length < 1) return;
            var _loop8 = function _loop8() {
              var node_chat = find("seat_bg/node_chat" + i, _this19.playersMgr.playerPublic);
              if (!isValid(node_chat)) return 1; // continue
              if (!node_chat.active && SdGameProxy.chatQueueList.length > 0) {
                node_chat.active = true;
                var data = SdGameProxy.chatQueueList.shift();
                var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
                data.Content = BlackWordProxy.filter(data.Content);
                lbl_chat.string = data.Content;
                node_chat.scale = v3(0, 0, 1);
                var scale_y = i == 3 ? -1 : 1;
                tween(node_chat).stop().delay(0.1 * i).to(0.2, {
                  scale: v3(-1, scale_y, 1)
                }).delay(2.0).call(function () {
                  node_chat.active = false;
                  _this19.showPublicChat(1);
                }).start();
              }
            };
            for (var i = 1; i < 4; ++i) {
              if (_loop8()) continue;
            }
          } else if (nType == 2) {
            if (!SdGameProxy.expressionQueueList || SdGameProxy.expressionQueueList.length < 1) return;
            var node_expression = find("seat_bg/node_expression", this.playersMgr.playerPublic);
            if (!isValid(node_expression)) return;
            if (!node_expression.active) {
              node_expression.active = true;
              node_expression.scale = v3(0, 0, 1);
              var data = SdGameProxy.expressionQueueList.shift();
              tween(node_expression).stop().call(function () {
                _this19.loadLocalFrameAnim(data.Content, node_expression, function () {
                  node_expression.active = false;
                  _this19.showPublicChat(2);
                });
              }).to(0.5, {
                scale: v3(1.3, 1.3, 1)
              }).start();
            }
          }
        };
        _proto.createAnim = function createAnim(frames, aniName, item, callBack) {
          var clip = AnimationClip.createWithSpriteFrames(frames, frames.length);
          clip.name = "" + aniName;
          clip.speed = 0.8;
          clip.sample = 24;
          // clip.wrapMode = cc.WrapMode.Normal;
          var sprite = item.getComponent(Sprite);
          if (frames[0]) {
            sprite.spriteFrame = frames[0];
          }
          var ani = item.addComponent(Animation);
          ani.addClip(clip);
          ani.play("" + aniName);
          var state = ani.getState("" + aniName);
          state.repeatCount = 2;
          ani.on(Animation.EventType.FINISHED, function () {
            item.active = false;
            if (callBack) {
              sprite.spriteFrame = null;
              callBack();
            }
          }, this);
        };
        _proto.loadLocalFrameAnim = function loadLocalFrameAnim(aniName, item, callBack) {
          var _this20 = this;
          resources.load("chat/" + aniName, SpriteAtlas, function (err, sprAtlas) {
            var sprFrmAry = sprAtlas.getSpriteFrames();
            _this20.createAnim(sprFrmAry, aniName, item, callBack);
          });
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        }
        //    // update (dt) {}
        ;

        return Sdgame;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selfName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selfGold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerself", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "djsProgress", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "renAni", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "wanAni", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "wankong", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "kajiang", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "saList", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "saSpriteF", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "sdSound", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "chipMgr", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "clock", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_md5Bg", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5Key", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5Result", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "spine_heguan", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "path_history", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "playersMgr", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "txt_id", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "BtnLast", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "BtnJiabei", [_dec29], {
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

System.register("chunks:///_virtual/SdGameAddRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Component, i18n, Common, MainManager;
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
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "057aaKVKY5HAYk9EQg99Xwm", "SdGameAddRoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SdgameAddRoom = exports('default', (_dec = ccclass("SdGameAddRoom"), _dec2 = menu("game/Sdgame/SdgameAddRoom"), _dec3 = property(EditBox), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdgameAddRoom, _Component);
        function SdgameAddRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "edit_pass", _descriptor, _assertThisInitialized(_this));
          _this._data = void 0;
          return _this;
        }
        var _proto = SdgameAddRoom.prototype;
        _proto.onLoad = function onLoad() {
          this.edit_pass.focus();
        };
        _proto.setData = function setData(data) {
          this._data = data;
        };
        _proto.onClickSure = function onClickSure() {
          if (this.edit_pass.string.length == 0) {
            Common.showTip(i18n.lang["10033"]);
            return;
          }
          if (this._data) ;
          EventManager.dispatch(ConfigManager.ButtonEvent.closePop);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        return SdgameAddRoom;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "edit_pass", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import i18n from "../../../i18n/I18n";
      // import ConfigManager from "../../../script/manager/ConfigManager";
      // import EventManager from "../../../script/manager/EventManager";
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/Sdgame/SdgameAddRoom")
      // export default class SdgameAddRoom extends cc.Component {
      //     @property(cc.EditBox)
      //     edit_pass: cc.EditBox = null;
      //     _data;
      //     onLoad() {
      //         this.edit_pass.focus();
      //     }
      //
      //     setData(data: phomProto.privateDeskInfo) {
      //         this._data = data;
      //     }
      //
      //     onClickSure() {
      //         if (this.edit_pass.string.length == 0) {
      //             Common.showTip(i18n.lang["10033"]);
      //             return;
      //         }
      //         if (this._data) {
      //             // let procol = this._data.serId + "/" + SdGameDef.eProto_hall.enterRoom.split("/")[1];
      //             // NetManager.instance.sendOnlineData(SdGameDef.eProto_hall.enterRoom, {
      //             //     action: "HD_Enter",
      //             //     TableID: this._data.index + "",
      //             //     passWord: Common.md5(this.edit_pass.string),
      //             // });
      //         }
      //
      //         EventManager.instance.dispatch(ConfigManager.instance.ButtonEvent.closePop);
      //     }
      //
      //     protected onEnable(): void {}
      //
      //     protected onDisable(): void {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdGameChipRect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ContentTypeEx.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, tween, UIOpacity, isValid, Tween, Component, ContentTypeEx, GameContentType, Common, MainManager;
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
      Label = module.Label;
      Node = module.Node;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      isValid = module.isValid;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      ContentTypeEx = module.default;
      GameContentType = module.GameContentType;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "22da8jAU+VJSrMiA4L64olH", "SdGameChipRect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SdgameChipRect = exports('default', (_dec = ccclass("SdGameChipRect"), _dec2 = menu("game/Sdgame/SdgameChipRect"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdgameChipRect, _Component);
        function SdgameChipRect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_otherChip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_selfChip", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_myChip", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_otherChip", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_rate", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_hightLight", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chipSelfBg", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chipOtherBg", _descriptor8, _assertThisInitialized(_this));
          _this._selfChipCount = 0;
          _this._totalChipCount = 0;
          _this._pos = "0";
          return _this;
        }
        var _proto = SdgameChipRect.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          gts.UI.OnClick(this.node, function () {
            EventManager.emit(ConfigManager.protocolSd.yxxHaveBet, _this2._pos);
          }, this);
          var typeRate = this.txt_rate.node.addComponent(ContentTypeEx);
          typeRate.mgrType = GameContentType.BG;
          var typeChip = this.node_otherChip.addComponent(ContentTypeEx);
          typeChip.mgrType = GameContentType.SPRITE;
          var typeNodeOther = this.node_chipOtherBg.addComponent(ContentTypeEx);
          typeNodeOther.mgrType = GameContentType.LABEL;
          var typeNodeSelf = this.node_chipSelfBg.addComponent(ContentTypeEx);
          typeNodeSelf.mgrType = GameContentType.LABEL;
          var typeTxtOther = this.txt_otherChip.addComponent(ContentTypeEx);
          typeTxtOther.mgrType = GameContentType.LABEL2;
          var typeTxtSelf = this.txt_selfChip.addComponent(ContentTypeEx);
          typeTxtSelf.mgrType = GameContentType.LABEL2;
          this.reset();
        };
        _proto.setPos = function setPos(pos) {
          this._pos = pos;
        };
        _proto.showHighLight = function showHighLight() {
          this.stopHighLight();
          this.node_hightLight.active = true;
          tween(this.node_hightLight.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }).union().repeatForever().start();
        };
        _proto.stopHighLight = function stopHighLight() {
          // 退出房间时子节点先销毁，引用非空不代表还能访问其组件。
          if (!isValid(this.node_hightLight, true)) return;
          var opacity = this.node_hightLight.getComponent(UIOpacity);
          if (opacity) {
            Tween.stopAllByTarget(opacity);
            if (isValid(opacity, true)) opacity.opacity = 255;
          }
          this.node_hightLight.active = false;
        };
        _proto.setTotalBet = function setTotalBet(count) {
          if (typeof count == "string") {
            count = parseInt(count);
          }
          this.node_chipOtherBg.active = count > 0;
          this.txt_otherChip.node.active = count > 0;
          this.txt_otherChip.string = Common.ChangeMoneyShow(count, 2);
          this._totalChipCount = count;
        };
        _proto.addTotalBet = function addTotalBet(count) {
          this._totalChipCount += count;
          this.setTotalBet(this._totalChipCount);
        };
        _proto.setSelfBet = function setSelfBet(count) {
          this.node_chipSelfBg.active = count > 0;
          this.txt_selfChip.node.active = count > 0;
          this.txt_selfChip.string = Common.ChangeMoneyShow(count, 2);
          this._selfChipCount = count;
        };
        _proto.addSelfBet = function addSelfBet(count) {
          this._selfChipCount += count;
          this.setSelfBet(this._selfChipCount);
        };
        _proto.setRate = function setRate(str) {
          this.txt_rate.string = str;
        };
        _proto.reset = function reset() {
          this.setTotalBet(0);
          this.setSelfBet(0);
          this.stopHighLight();
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {
          this.stopHighLight();
        };
        _proto.onDestroy = function onDestroy() {
          this.stopHighLight();
        };
        _createClass(SdgameChipRect, [{
          key: "pos",
          get: function get() {
            return this._pos;
          }
        }, {
          key: "selfBet",
          get: function get() {
            return this._selfChipCount;
          }
        }]);
        return SdgameChipRect;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_otherChip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_selfChip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_myChip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_otherChip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_rate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_hightLight", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_chipSelfBg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_chipOtherBg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import ConfigManager from "../../../script/manager/ConfigManager";
      // import EventManager from "../../../script/manager/EventManager";
      // import { GameContentType } from "../../../script/tools/ContentEx";
      // import ContentTypeEx from "../../../script/tools/ContentTypeEx";
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/Sdgame/SdgameChipRect")
      // export default class SdgameChipRect extends cc.Component {
      //     @property(cc.Label)
      //     txt_otherChip = null;
      //
      //     @property(cc.Label)
      //     txt_selfChip: cc.Label = null;
      //
      //     @property(cc.Node)
      //     node_otherChip: cc.Node = null;
      //
      //     @property(cc.Label)
      //     txt_rate: cc.Label = null;
      //
      //     @property(cc.Node)
      //     node_hightLight: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_chipSelfBg: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_chipOtherBg: cc.Node = null;
      //
      //     _selfChipCount = 0;
      //     _totalChipCount = 0;
      //
      //     _pos = "0";
      //
      //     onLoad() {
      //         gts.UI.OnClick(
      //             this.node,
      //             () => {
      //                 EventManager.instance.emit(ConfigManager.instance.protocolSd.yxxHaveBet, this._pos);
      //             },
      //             this
      //         );
      //
      //         let typeRate = this.txt_rate.node.addComponent(ContentTypeEx);
      //         typeRate.mgrType = GameContentType.BG;
      //
      //         let typeChip = this.node_otherChip.addComponent(ContentTypeEx);
      //         typeChip.mgrType = GameContentType.SPRITE;
      //
      //         let typeNodeOther = this.node_chipOtherBg.addComponent(ContentTypeEx);
      //         typeNodeOther.mgrType = GameContentType.LABEL;
      //
      //         let typeNodeSelf = this.node_chipSelfBg.addComponent(ContentTypeEx);
      //         typeNodeSelf.mgrType = GameContentType.LABEL;
      //
      //         let typeTxtOther = this.txt_otherChip.addComponent(ContentTypeEx);
      //         typeTxtOther.mgrType = GameContentType.LABEL2;
      //
      //         let typeTxtSelf = this.txt_selfChip.addComponent(ContentTypeEx);
      //         typeTxtSelf.mgrType = GameContentType.LABEL2;
      //
      //         this.reset();
      //     }
      //
      //     setPos(pos) {
      //         this._pos = pos;
      //     }
      //
      //     get pos() {
      //         return this._pos;
      //     }
      //
      //     showHighLight() {
      //         this.node_hightLight.active = true;
      //         cc.tween(this.node_hightLight).to(0.3, { opacity: 255 }).to(0.3, { opacity: 0 }).union().repeatForever().start();
      //     }
      //
      //     setTotalBet(count: number | string) {
      //         if (typeof count == "string") {
      //             count = parseInt(count);
      //         }
      //         this.node_chipOtherBg.active = count > 0;
      //         this.txt_otherChip.node.active = count > 0;
      //         this.txt_otherChip.string = Common.ChangeMoneyShow(count, 2);
      //         this._totalChipCount = count;
      //     }
      //
      //     addTotalBet(count: number) {
      //         this._totalChipCount += count;
      //         this.setTotalBet(this._totalChipCount);
      //     }
      //
      //     setSelfBet(count: number) {
      //         this.node_chipSelfBg.active = count > 0;
      //         this.txt_selfChip.node.active = count > 0;
      //         this.txt_selfChip.string = Common.ChangeMoneyShow(count, 2);
      //         this._selfChipCount = count;
      //     }
      //
      //     addSelfBet(count: number) {
      //         this._selfChipCount += count;
      //         this.setSelfBet(this._selfChipCount);
      //     }
      //
      //     setRate(str) {
      //         this.txt_rate.string = str;
      //     }
      //
      //     reset() {
      //         this.setTotalBet(0);
      //         this.setSelfBet(0);
      //         this.node_hightLight.active = false;
      //     }
      //
      //     protected onEnable(): void {}
      //
      //     protected onDisable(): void {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdgameChipRectMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ContentEx.ts', './SdGameChipRect.ts', './SdProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Component, ContentEx, SdgameChipRect, SdGameProxy;
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
      Component = module.Component;
    }, function (module) {
      ContentEx = module.default;
    }, function (module) {
      SdgameChipRect = module.default;
    }, function (module) {
      SdGameProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0ea4455AcdE/6FoZRI1CiB2", "SdgameChipRectMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SdgameChipRectMgr = exports('default', (_dec = ccclass("SdgameChipRectMgr"), _dec2 = menu("game/Sdgame/SdgameChipRectMgr"), _dec3 = property(SdgameChipRect), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdgameChipRectMgr, _Component);
        function SdgameChipRectMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "chipList", _descriptor, _assertThisInitialized(_this));
          _this.rectMap = {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null
            //        // 7: null,
            //        // 8: null,
          };

          _this.lastBets = {};
          return _this;
        }
        var _proto = SdgameChipRectMgr.prototype;
        _proto.onLoad = function onLoad() {
          for (var i = 0; i < 6; i++) {
            var pos = "" + (i + 1);
            this.rectMap[pos] = this.chipList[i];
            this.chipList[i].setPos(pos);
            this.lastBets[pos] = 0;
          }

          //        // for (let i = 8; i < 16; i++) {
          //        //     let pos = "" + (i + 3);
          //        //     this.rectMap[pos] = this.chipList[i];
          //        //     this.chipList[i].setPos(pos);
          //        // }
        };

        _proto.start = function start() {
          var _this2 = this;
          this.scheduleOnce(function () {
            var contentEx = _this2.node.getComponent(ContentEx);
            if (contentEx) {
              contentEx.reload();
              contentEx.organize();
            }
          });
        };
        _proto.updateTotalBet = function updateTotalBet(data) {
          for (var key in data) {
            if (this.rectMap[key]) {
              this.rectMap[key].setTotalBet(data[key]);
            }
          }
        };
        _proto.updateSelfBet = function updateSelfBet(data) {
          for (var key in data) {
            if (this.rectMap[key]) {
              this.rectMap[key].setSelfBet(data[key]);
            }
          }
        };
        _proto.showHighLight = function showHighLight(data) {
          for (var _iterator = _createForOfIteratorHelperLoose(data), _step; !(_step = _iterator()).done;) {
            var key = _step.value;
            if (this.rectMap[key]) {
              this.rectMap[key].showHighLight();
            }
          }
        }
        //    //获得所有未中奖节点
        ;

        _proto.getReturnChipParents = function getReturnChipParents(data) {
          var nodes = [];
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.chipList), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            var pos = i.pos;
            var has = false;
            for (var _iterator3 = _createForOfIteratorHelperLoose(data), _step3; !(_step3 = _iterator3()).done;) {
              var key = _step3.value;
              if (key == pos) {
                has = true;
                break;
              }
            }
            // 自己与其他玩家的筹码分属两个容器，未中奖时都需要回收。
            if (!has) nodes.push(i.node_otherChip, i.node_myChip);
          }
          return nodes;
        };
        _proto.getChipParent = function getChipParent(pos, isSelf) {
          if (isSelf === void 0) {
            isSelf = false;
          }
          if (this.rectMap[pos]) {
            return isSelf ? this.rectMap[pos].node_myChip : this.rectMap[pos].node_otherChip;
          }
          return null;
        };
        _proto.setRate = function setRate() {
          //        // console.log(" SdGameProxy.oddList", SdGameProxy.oddList, this.rectMap);
          if (SdGameProxy.oddList) {
            var data = SdGameProxy.oddList;
            for (var key in data) {
              if (this.rectMap[key]) {
                var curRate = Math.floor(data[key] / 100);
                this.rectMap[key].setRate("1:" + curRate);
              }
            }
          }
        };
        _proto.rememberBet = function rememberBet() {
          var needUpdate = false;
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.chipList), _step4; !(_step4 = _iterator4()).done;) {
            var i = _step4.value;
            if (i.selfBet > 0) {
              needUpdate = true;
              break;
            }
          }
          if (needUpdate) {
            for (var t in this.lastBets) {
              this.lastBets[t] = this.rectMap[t].selfBet;
            }
          }
        };
        _proto.addBetCount = function addBetCount(pos, bet, isSelf) {
          if (isSelf === void 0) {
            isSelf = false;
          }
          var chipRect = this.rectMap[pos];
          if (chipRect) {
            if (isSelf) {
              chipRect.addSelfBet(bet);
            }
            chipRect.addTotalBet(bet);
          }
        };
        _proto.reset = function reset() {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.chipList), _step5; !(_step5 = _iterator5()).done;) {
            var i = _step5.value;
            i.reset();
          }
        };
        _proto.resetSelftBet = function resetSelftBet() {
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.chipList), _step6; !(_step6 = _iterator6()).done;) {
            var i = _step6.value;
            i.setSelfBet(0);
          }
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        return SdgameChipRectMgr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "chipList", [_dec3], {
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

System.register("chunks:///_virtual/SdGameCreateRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './NetManager.ts', './SdGameGoldItem.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, EditBox, ScrollView, Prefab, instantiate, Tween, tween, v3, UIOpacity, Component, i18n, NetManager, SdgameGoldItem, Common, MainManager;
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
      EditBox = module.EditBox;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      SdgameGoldItem = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4554cWTKURBeYFLKim1DHzD", "SdGameCreateRoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SdgameCreateRoom = exports('default', (_dec = ccclass("SdGameCreateRoom"), _dec2 = menu("game/Sdgame/SdgameCreateRoom"), _dec3 = property(EditBox), _dec4 = property(ScrollView), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdgameCreateRoom, _Component);
        function SdgameCreateRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "edit_pass", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll_list", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_item", _descriptor3, _assertThisInitialized(_this));
          _this._curIndex = void 0;
          _this.list = void 0;
          _this.posList = void 0;
          _this.itemWidth = 100;
          _this.padding = 270;
          _this.halfWidth = 0;
          _this._num = 9;
          return _this;
        }
        var _proto = SdgameCreateRoom.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.getScoreList);
          this.scroll_list.node.on("scrolling", this.onScrolling, this);
          this.scroll_list.node.on("touch-up", this.onScrollEnd, this);
        };
        _proto.onScrolling = function onScrolling() {
          var x = this.scroll_list.content.getPosition().x;
          for (var i = 0; i < this.posList.length; i++) {
            var pos = this.posList[i];
            if (Math.abs(pos + x) < this.itemWidth / 2) {
              var per = (this.itemWidth / 2 - Math.abs(pos + x)) / (this.itemWidth / 2);
              this.fadeChild(i, per);
            }
          }
        };
        _proto.onScrollEnd = function onScrollEnd() {
          var _this2 = this;
          //@ts-ignore
          var time = this.scroll_list._autoScrollTotalTime;
          var t = time - 1;
          t = t < 0 ? 0 : t;
          this.scheduleOnce(function () {
            _this2.scroll_list.stopAutoScroll();
            var x = _this2.scroll_list.content.getPosition().x;
            for (var i = 0; i < _this2.posList.length; i++) {
              var pos = _this2.posList[i];
              if (Math.abs(pos + x) < _this2.itemWidth / 2) {
                _this2.scrollToIndex(i);
              }
            }
          }, t);
        };
        _proto.onClickSure = function onClickSure() {
          //        // console.log(this._curIndex);
          var pass = "";
          if (this.edit_pass.string.length > 0) {
            pass = Common.md5(this.edit_pass.string);
          }
          if (!this.list[this._curIndex]) {
            Common.showTip(i18n.lang["10039"]);
            return;
          }
          var count = "" + this.list[this._curIndex];
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.createTable, {
            BaseScore: count,
            passWord: pass,
            total: this._num
          });
          EventManager.dispatch(ConfigManager.ButtonEvent.closePop);
        };
        _proto.initScoreList = function initScoreList(data) {
          var _this3 = this;
          this.scroll_list.content.removeAllChildren();
          var list = data.Data;
          this.list = list;
          this.posList = [];
          this.halfWidth = list.length % 2 == 0 ? this.itemWidth / 2 : 0;
          var index = Math.floor(this.list.length / 2);
          var startX = -index * this.itemWidth + this.halfWidth;
          var length = list.length;
          for (var i = 0; i < length; i++) {
            var node = instantiate(this.pre_item);
            this.scroll_list.content.addChild(node);
            node.name = "" + i;
            node.getComponent(SdgameGoldItem).setData(list[i]);
            this.posList.push(startX + i * this.itemWidth);
          }
          this.scheduleOnce(function () {
            _this3.scrollToIndex(index);
          });
        };
        _proto.scrollToIndex = function scrollToIndex(index, percent) {
          if (percent === void 0) {
            percent = 1;
          }
          var pos = this.posList[index];
          var node = this.scroll_list.content;
          this.fadeChild(index, percent);
          Tween.stopAllByTarget(node);
          tween(node).to(0.2, {
            position: v3(-pos, node.position.y)
          }).start();
        };
        _proto.fadeChild = function fadeChild(index, percent) {
          if (percent === void 0) {
            percent = 1;
          }
          this._curIndex = index;
          var start = index - 3;
          var father = this.scroll_list.content;
          var children = father.children;
          var scales = [0.8, 0.9, 1.0, 1.1, 1.0, 0.9, 0.8];
          var opacitys = [125, 175, 200, 255, 200, 175, 125];
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var _child = _step.value;
            _child.scale = v3(1, 1, 1);
            _child.getComponent(UIOpacity).opacity = 255;
          }
          for (var i = 0; i < 7; i++) {
            var name = "" + (start + i);
            var child = father.getChildByName(name);
            if (child) {
              child.scale = v3(1 + (scales[i] - 1) * percent, 1 + (scales[i] - 1) * percent, 1);
              child.getComponent(UIOpacity).opacity = opacitys[i];
            }
          }
        };
        _proto.onEnable = function onEnable() {
          EventManager.on(ConfigManager.protocolSd.getScoreList, this.initScoreList, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.off(ConfigManager.protocolSd.getScoreList, this.initScoreList, this);
        };
        _proto.onClickLeft = function onClickLeft() {
          var index = this._curIndex - 1;
          if (index < 0) {
            return;
          }
          this.scrollToIndex(index);
        };
        _proto.onClickRight = function onClickRight() {
          var index = this._curIndex + 1;
          if (index > this.list.length - 1) {
            return;
          }
          this.scrollToIndex(index);
        };
        _proto.onClickCheck = function onClickCheck(sender) {
          this._num = sender.isChecked ? 9 : 0;
        };
        return SdgameCreateRoom;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "edit_pass", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scroll_list", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pre_item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import i18n from "../../../i18n/I18n";
      // import ConfigManager from "../../../script/manager/ConfigManager";
      // import EventManager from "../../../script/manager/EventManager";
      // import NetManager from "../../../script/manager/NetManager";
      // import SdgameGoldItem from "./SdGameGoldItem";
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/Sdgame/SdgameCreateRoom")
      // export default class SdgameCreateRoom extends cc.Component {
      //     @property(cc.EditBox)
      //     edit_pass: cc.EditBox = null;
      //
      //     @property(cc.ScrollView)
      //     scroll_list: cc.ScrollView = null;
      //
      //     @property(cc.Prefab)
      //     pre_item: cc.Prefab = null;
      //
      //     _curIndex: number;
      //
      //     list: number[];
      //
      //     posList: number[];
      //
      //     itemWidth = 100;
      //     padding = 270;
      //     halfWidth = 0;
      //
      //     _num = 9;
      //
      //     onLoad() {
      //         NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.getScoreList);
      //         this.scroll_list.node.on("scrolling", this.onScrolling, this);
      //         this.scroll_list.node.on("touch-up", this.onScrollEnd, this);
      //     }
      //
      //     onScrolling() {
      //         let x = this.scroll_list.content.x;
      //         for (let i = 0; i < this.posList.length; i++) {
      //             let pos = this.posList[i];
      //             if (Math.abs(pos + x) < this.itemWidth / 2) {
      //                 let per = (this.itemWidth / 2 - Math.abs(pos + x)) / (this.itemWidth / 2);
      //                 this.fadeChild(i, per);
      //             }
      //         }
      //     }
      //     onScrollEnd() {
      //         //@ts-ignore
      //         let time = this.scroll_list._autoScrollTotalTime;
      //
      //         let t = time - 1;
      //         t = t < 0 ? 0 : t;
      //         this.scheduleOnce(() => {
      //             this.scroll_list.stopAutoScroll();
      //             let x = this.scroll_list.content.x;
      //             for (let i = 0; i < this.posList.length; i++) {
      //                 let pos = this.posList[i];
      //                 if (Math.abs(pos + x) < this.itemWidth / 2) {
      //                     this.scrollToIndex(i);
      //                 }
      //             }
      //         }, t);
      //     }
      //
      //     onClickSure() {
      //         // console.log(this._curIndex);
      //         let pass = "";
      //         if (this.edit_pass.string.length > 0) {
      //             pass = Common.md5(this.edit_pass.string);
      //         }
      //         if (!this.list[this._curIndex]) {
      //             Common.showTip(i18n.lang["10039"]);
      //             return;
      //         }
      //         let count = "" + this.list[this._curIndex];
      //         NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.createTable, {
      //             BaseScore: count,
      //             passWord: pass,
      //             total: this._num,
      //         });
      //         EventManager.instance.dispatch(ConfigManager.instance.ButtonEvent.closePop);
      //     }
      //
      //     initScoreList(data) {
      //         this.scroll_list.content.removeAllChildren();
      //         let list: [] = data.Data;
      //         this.list = list;
      //         this.posList = [];
      //         this.halfWidth = list.length % 2 == 0 ? this.itemWidth / 2 : 0;
      //
      //         let index = Math.floor(this.list.length / 2);
      //         let startX = -index * this.itemWidth + this.halfWidth;
      //
      //         let length = list.length;
      //         for (let i = 0; i < length; i++) {
      //             let node = cc.instantiate(this.pre_item);
      //             this.scroll_list.content.addChild(node);
      //             node.name = "" + i;
      //             node.getComponent(SdgameGoldItem).setData(list[i]);
      //             this.posList.push(startX + i * this.itemWidth);
      //         }
      //
      //         this.scheduleOnce(() => {
      //             this.scrollToIndex(index);
      //         });
      //     }
      //
      //     scrollToIndex(index: number, percent = 1) {
      //         let pos = this.posList[index];
      //         let node = this.scroll_list.content;
      //         this.fadeChild(index, percent);
      //         node.stopAllActions();
      //         cc.tween(node).to(0.2, { x: -pos }).start();
      //     }
      //
      //     fadeChild(index: number, percent = 1) {
      //         this._curIndex = index;
      //
      //         let start = index - 3;
      //         let father = this.scroll_list.content;
      //         let children = father.children;
      //
      //         let scales = [0.8, 0.9, 1.0, 1.1, 1.0, 0.9, 0.8];
      //         let opacitys = [125, 175, 200, 255, 200, 175, 125];
      //         for (let child of children) {
      //             child.scale = 1;
      //             child.opacity = 255;
      //         }
      //         for (let i = 0; i < 7; i++) {
      //             let name = "" + (start + i);
      //             let child = father.getChildByName(name);
      //             if (child) {
      //                 child.scale = 1 + (scales[i] - 1) * percent;
      //                 child.opacity = opacitys[i];
      //             }
      //         }
      //     }
      //
      //     protected onEnable(): void {
      //         EventManager.instance.on(ConfigManager.instance.protocolSd.getScoreList, this.initScoreList, this);
      //     }
      //
      //     protected onDisable(): void {
      //         EventManager.instance.off(ConfigManager.instance.protocolSd.getScoreList, this.initScoreList, this);
      //     }
      //
      //     onClickLeft() {
      //         let index = this._curIndex - 1;
      //         if (index < 0) {
      //             return;
      //         }
      //         this.scrollToIndex(index);
      //     }
      //
      //     onClickRight() {
      //         let index = this._curIndex + 1;
      //         if (index > this.list.length - 1) {
      //             return;
      //         }
      //         this.scrollToIndex(index);
      //     }
      //
      //     onClickCheck(sender: cc.Toggle) {
      //         this._num = sender.isChecked ? 9 : 0;
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdGameDef.ts", ['cc', './SdProxy.ts'], function (exports) {
  var cclegacy, Sprite, SpriteFrame, isValid, sp, SdGameProxy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      isValid = module.isValid;
      sp = module.sp;
    }, function (module) {
      SdGameProxy = module.default;
    }],
    execute: function () {
      exports({
        loadHeguanByType: loadHeguanByType,
        loadIconByType: loadIconByType,
        loadItemBgByType: loadItemBgByType
      });
      cclegacy._RF.push({}, "ebeffqzv15K3rAeBfnKpdys", "SdGameDef", undefined);

      /** 单双 */
      var MAX_CHIP_REWARD = exports('MAX_CHIP_REWARD', 50);
      var CMList = exports('CMList', {
        100: 0,
        200: 1,
        500: 2,
        1000: 3,
        2000: 4,
        5000: 5,
        10000: 6,
        20000: 7,
        50000: 8,
        100000: 9,
        200000: 10,
        500000: 11,
        1000000: 12,
        5000000: 13,
        10000000: 14
      });
      var SdTableType = exports('SdTableType', /*#__PURE__*/function (SdTableType) {
        SdTableType[SdTableType["NORMAL"] = 1] = "NORMAL";
        SdTableType[SdTableType["MD5"] = 2] = "MD5";
        SdTableType[SdTableType["MD5_PRIZE"] = 3] = "MD5_PRIZE";
        return SdTableType;
      }({}));
      function loadItemBgByType(node, type, tableId) {
        return new Promise(function (resolve, reject) {
          var name = "textures/hall/1_0_";
          // switch (type) {
          //     case SdTableType.NORMAL:
          //         name = "textures/hall/di_orange";
          //         break;
          //     case SdTableType.MD5:
          //         let id = tableId.slice(2, 3);
          //         if (id == "0") {
          //             name = "textures/hall/di_ho";
          //         } else {
          //             name = "textures/hall/di_long";
          //         }
          //         break;
          //     case SdTableType.MD5_PRIZE:
          //         name = "textures/hall/di_phung";
          //         break;
          // }
          var bundle = SdGameProxy.bundle;
          name = "textures/hall/" + tableId;
          var icon = node instanceof Sprite ? node : node.getComponent(Sprite);
          bundle.load(name + "/spriteFrame", SpriteFrame, function (err, asset) {
            if (err) {
              reject();
              return;
            }
            if (isValid(icon)) icon.spriteFrame = asset;
            resolve();
          });
        });
      }
      function loadIconByType(node, type, tableId) {
        return new Promise(function (resolve, reject) {
          var name = "";
          switch (type) {
            case SdTableType.NORMAL:
              name = "textures/game/gui";
              break;
            case SdTableType.MD5:
              var id = tableId.slice(2, 3);
              if (id == "0") {
                name = "textures/game/hu";
              } else {
                name = "textures/game/long";
              }
              break;
            case SdTableType.MD5_PRIZE:
              name = "textures/game/niao";
              break;
          }
          var bundle = SdGameProxy.bundle;
          var icon = node instanceof Sprite ? node : node.getComponent(Sprite);
          bundle.load(name + "/spriteFrame", SpriteFrame, function (err, asset) {
            if (err) {
              reject();
              return;
            }
            if (isValid(icon)) icon.spriteFrame = asset;
            resolve();
          });
        });
      }
      function loadHeguanByType(node, type, tableId) {
        return new Promise(function (resolve, reject) {
          var name = "";
          var id = tableId.slice(2, 3);
          name = "spine/sexygirl1";
          var num = parseInt(id) + 1;
          if (typeof num == "number") {
            name = "spine/sexygirl" + num;
          }
          // switch (type) {
          //     case SdTableType.NORMAL:
          //         name = "spine/sexygirl1";
          //         break;
          //     case SdTableType.MD5:
          //         let id = tableId.slice(2, 3);
          //         if (id == "0") {
          //             name = "spine/sexygirl2";
          //         } else {
          //             name = "spine/sexygirl3";
          //         }
          //         break;
          //     case SdTableType.MD5_PRIZE:
          //         name = "spine/sexygirl4";
          //         break;
          // }
          var spine = node;
          var bundle = SdGameProxy.bundle;
          bundle.load(name, sp.SkeletonData, function (err, asset) {
            if (err) {
              console.log(err);
              reject();
              return;
            }
            if (isValid(spine)) {
              spine.skeletonData = asset;
            }
            resolve();
          });
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdGameDeskItems.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './SdGameDef.ts', './SdgameHallPath2.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Node, Sprite, sp, SpriteFrame, isValid, Component, NetManager, loadHeguanByType, loadItemBgByType, SdTableType, SdgameHallPath2, MainManager;
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
      Node = module.Node;
      Sprite = module.Sprite;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      loadHeguanByType = module.loadHeguanByType;
      loadItemBgByType = module.loadItemBgByType;
      SdTableType = module.SdTableType;
    }, function (module) {
      SdgameHallPath2 = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "81f21LmeDZEe7xukU7GUw+9", "SdGameDeskItems", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SdGameDeskItem = exports('default', (_dec = ccclass("SdGameDeskItems"), _dec2 = menu("game/Sdgame/SdGameDeskItem"), _dec3 = property(Label), _dec4 = property(SdgameHallPath2), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(sp.Skeleton), _dec10 = property(Sprite), _dec11 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdGameDeskItem, _Component);
        function SdGameDeskItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_player", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "path_ds", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_state", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_jackpot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_jackpot", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "img_bg", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_heguan", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteBg", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrameTag", _descriptor9, _assertThisInitialized(_this));
          _this._data = void 0;
          _this._pathDx = void 0;
          _this._pathDs = void 0;
          return _this;
        }
        var _proto = SdGameDeskItem.prototype;
        _proto.setData = function setData(data, index) {
          var _this2 = this;
          if (index === void 0) {
            index = 0;
          }
          if (!(this._data && this._data.tableType == data.tableType && this._data.tableId == data.tableId)) {
            this.spine_heguan.node.active = false;
            loadHeguanByType(this.spine_heguan, data.tableType, data.tableId).then(function () {
              if (isValid(_this2.spine_heguan)) {
                _this2.spine_heguan.node.active = true;
                _this2.spine_heguan.setAnimation(0, "emoji", true);
              }
            });
            loadItemBgByType(this.img_bg, data.tableType, data.tableId);
          }
          this._data = data;
          this.txt_player.string = "" + data.playerNum;
          if (data.tableType != SdTableType.MD5_PRIZE) {
            this.node_jackpot.active = false;
          }
          this.node_state.active = data.tableType != SdTableType.NORMAL;
          this.updatePath(data.tableType);
          this.spriteBg.spriteFrame = this.arrSpriteFrameTag[index % 6];
        };
        _proto.updatePath = function updatePath(type) {
          if (type === void 0) {
            type = SdTableType.NORMAL;
          }
          var pathData = [];
          if (type != SdTableType.NORMAL) {
            for (var _iterator = _createForOfIteratorHelperLoose(this._data.openNums), _step; !(_step = _iterator()).done;) {
              var item = _step.value;
              var json = JSON.parse(item);
              pathData.push(json.num);
            }
          } else {
            pathData = this._data.openNums;
          }
          if (pathData.length > 68) {
            pathData = pathData.slice(0, 68);
          }
          this._pathDx = [];
          this._pathDs = [];
          var length = pathData.length;
          for (var i = length - 1; i >= 0; i--) {
            var _item = pathData[i];
            var count1 = parseInt(_item[0]) - 1;
            var count2 = parseInt(_item[1]) - 1;
            var count3 = parseInt(_item[2]) - 1;
            var count4 = parseInt(_item[3]) - 1;
            var all = count1 + count2 + count3 + count4;
            this._pathDs.push(all % 2);
            if (all <= 1) {
              this._pathDx.push(0); // 大 红
            } else if (all >= 3) {
              this._pathDx.push(1); // 小 白
            } else {
              this._pathDx.push(2); // 小 白
            }
          }

          this.path_ds.setData(this._pathDs);
        }
        //    // setBg(bg: cc.SpriteFrame) {
        //    //     this.img_bg.spriteFrame = bg;
        //    // }
        ;

        _proto.onClickEnter = function onClickEnter() {
          if (!this._data) {
            //            // console.log("sdgame empty");
            return;
          }
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.enterRoom, {
            action: "HD_Enter",
            tableId: this._data.tableId
          });
        };
        return SdGameDeskItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "path_ds", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_state", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_jackpot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_jackpot", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "img_bg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spine_heguan", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spriteBg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "arrSpriteFrameTag", [_dec11], {
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

System.register("chunks:///_virtual/SdGameGoldItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, Common;
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
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1b0caJACxNNXbyQtB8+gZSE", "SdGameGoldItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SdgameGoldItem = exports('default', (_dec = ccclass("SdGameGoldItem"), _dec2 = menu("game/Sdgame/SdgameGoldItem"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdgameGoldItem, _Component);
        function SdgameGoldItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_count", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SdgameGoldItem.prototype;
        _proto.setData = function setData(count) {
          this.txt_count.string = Common.ChangeMoneyShow(count, 2);
        };
        return SdgameGoldItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_count", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/Sdgame/SdgameGoldItem")
      // export default class SdgameGoldItem extends cc.Component {
      //     @property(cc.Label)
      //     txt_count: cc.Label = null;
      //
      //     setData(count: number) {
      //         this.txt_count.string = Common.ChangeMoneyShow(count, 2);
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdgameHallPath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Node, SpriteFrame, UIOpacity, UITransform, Sprite, instantiate, Tween, v3, tween, Component;
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
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Tween = module.Tween;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "a92fdbUfmJKub06MJFCqFeK", "SdgameHallPath", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_ROW = 5;
      var MAX_COL = 10;
      var SdgameHallPath = exports('default', (_dec = ccclass("SdgameHallPath"), _dec2 = menu("game/Sdgame/HallPath"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdgameHallPath, _Component);
        function SdgameHallPath() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_title1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balls", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SdgameHallPath.prototype;
        _proto.createItem = function createItem(type) {
          var node = new Node();
          node.addComponent(UIOpacity);
          node.addComponent(UITransform);
          var sprite = node.addComponent(Sprite);
          sprite.spriteFrame = this.balls[type];
          return node;
        };
        _proto.updatePath = function updatePath(data, scale) {
          if (scale === void 0) {
            scale = 1;
          }
          this.node_path.removeAllChildren();

          // let length = data.length;
          // let index = children.length - length;

          // let cumstomCount = length;
          // let count1 = 0;
          // let count2 = 0;

          // let startX = 28;
          // let xStep = 51;
          // let ys = [60, 20, -20, -60];
          // for (let i = 0; i < cumstomCount; i++) {
          //     // let item = children[i];
          //     // if (!item) {
          //     //     item = this.createItem(data[i]);
          //     //     let x = startX + Math.floor(i / 4) * xStep;
          //     //     let y = i % 4;
          //     //     if (Math.floor(i / 4) % 2 == 0) {
          //     //         y = 3 - y;
          //     //     }
          //     //     item.setPosition(x, ys[y]);

          //     //     this.node_path.addChild(item);
          //     // } else {
          //     //     item.getComponent(cc.Sprite).spriteFrame = this.balls[data[i]];
          //     // }
          //     if (data[i] == 0) {
          //         count1++;
          //     } else if (data[i] == 1) {
          //         count2++;
          //     }
          // }

          var redata = data.slice();
          var row = 0;
          var col = 0;
          var tempNum = -1;
          var list = [];
          for (var i = 0; i < redata.length; i++) {
            var _result = redata[i];
            var item = {
              result: _result
            };
            item["index"] = redata[i];
            if (tempNum != -1) {
              if (redata[i] == tempNum) {
                row++;
                if (row >= MAX_ROW) {
                  row = 0;
                  list[++col] = [];
                }
              } else {
                row = 0;
                list[++col] = [];
              }
            } else {
              row = 0;
              list[col] = [];
            }
            list[col].push(item);
            tempNum = redata[i];
          }
          var start = list.length - MAX_COL;
          if (start < 0) {
            start = 0;
          }
          var result = list.slice(start, list.length);
          var count1 = 0;
          var count2 = 0;
          for (var _i = 0; _i < result.length; _i++) {
            var _list = result[_i];
            for (var j = 0; j < _list.length; j++) {
              var _item = _list[j];
              var resultItem = this.createItem(_item.index);
              if (_item.index == 0) {
                count1++;
              } else {
                count2++;
              }
              var itemL = instantiate(resultItem);
              this.node_path.addChild(itemL);

              // itemL.getChildByName("num").getComponent(cc.Label).string = item.result + "";
              var pos = this.getPositionByRowCol(j, _i, this.node_path);
              //     itemL.getPosition().x = this.getPositionByRowCol(row, col, pathlist).x;
              //     itemL.getPosition().y = this.getPositionByRowCol(row, col, pathlist).y;
              itemL.setPosition(pos.x, pos.y);
            }
          }
          this.txt_title1.string = "" + count1;
          this.txt_title2.string = "" + count2;
          this.pathAction(this.node_path, scale);
        };
        _proto.getPositionByRowCol = function getPositionByRowCol(row, col, itemBg) {
          var width = itemBg.getComponent(UITransform).width;
          var hight = itemBg.getComponent(UITransform).height;
          var perw = width / MAX_COL;
          var perh = hight / MAX_ROW;
          var x = perw / 2 + col * perw;
          var y = perh / 2 + (MAX_ROW - row - 1) * perh;
          return {
            x: x,
            y: y
          };
        };
        _proto.setData = function setData(data, scale) {
          if (scale === void 0) {
            scale = 1;
          }
          this.updatePath(data, scale);
        };
        _proto.pathAction = function pathAction(node, scale) {
          if (scale === void 0) {
            scale = 1;
          }
          var children = node.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            Tween.stopAllByTarget(i);
            i.scale = v3(scale, scale, 1);
          }
          var child = children[children.length - 1];
          if (child) {
            tween(child).to(0.5, {
              scale: v3(scale, scale, 1)
            }).to(0.5, {
              scale: v3(scale * 0.8, scale * 0.8, 1)
            }).union().repeatForever().start();
          }
        };
        _proto.start = function start() {};
        return SdgameHallPath;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_title1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_title2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_path", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "balls", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/Sdgame/HallPath")
      // export default class SdgameHallPath extends cc.Component {
      //     @property(cc.Label)
      //     txt_title1: cc.Label = null;
      //
      //     @property(cc.Label)
      //     txt_title2: cc.Label = null;
      //
      //     @property(cc.Node)
      //     node_path: cc.Node = null;
      //
      //     @property(cc.SpriteFrame)
      //     balls: cc.SpriteFrame[] = [];
      //
      //     createItem(type: number) {
      //         let node = new cc.Node();
      //         let sprite = node.addComponent(cc.Sprite);
      //         sprite.spriteFrame = this.balls[type];
      //         return node;
      //     }
      //
      //     updatePath(data: number[], scale = 1) {
      //         let children = this.node_path.children;
      //         let length = data.length;
      //         let index = children.length - length;
      //
      //         let cumstomCount = length;
      //         let count1 = 0;
      //         let count2 = 0;
      //
      //         let startX = 10;
      //         let xStep = 45;
      //         let ys = [50, 17, -17, -50];
      //         for (let i = 0; i < cumstomCount; i++) {
      //             let item = children[i];
      //             if (!item) {
      //                 item = this.createItem(data[i]);
      //                 item.scale = scale;
      //                 let x = startX + Math.floor(i / 4) * xStep;
      //                 let y = i % 4;
      //                 if (Math.floor(i / 4) % 2 == 1) {
      //                     y = 3 - y;
      //                 }
      //                 item.x = x;
      //                 item.y = ys[y];
      //                 this.node_path.addChild(item);
      //             } else {
      //                 item.getComponent(cc.Sprite).spriteFrame = this.balls[data[i]];
      //             }
      //             if (data[i] == 0) {
      //                 count1++;
      //             } else if (data[i] == 1) {
      //                 count2++;
      //             }
      //         }
      //         this.txt_title1.string = "" + count1;
      //         this.txt_title2.string = "" + count2;
      //
      //         if (index > 0) {
      //             let len = children.length;
      //             let left = len - index - 1;
      //             for (let i = len - 1; i > left; i--) {
      //                 children[i].removeFromParent();
      //             }
      //         }
      //
      //         this.pathAction(this.node_path, scale);
      //     }
      //
      //     setData(data: number[], scale = 1) {
      //         this.updatePath(data, scale);
      //     }
      //
      //     pathAction(node: cc.Node, scale = 1) {
      //         let children = node.children;
      //         for (let i of children) {
      //             i.stopAllActions();
      //             i.scale = scale;
      //         }
      //         let child = children[children.length - 1];
      //         if (child) {
      //             child.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.5, scale), cc.scaleTo(0.5, scale * 0.8))));
      //         }
      //     }
      //
      //     start() {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdgameHallPath2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, SpriteFrame, UIOpacity, UITransform, Sprite, instantiate, Component;
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
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "b348c6fCrtOoaymYbvQMkVc", "SdgameHallPath2", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_COL = 22;
      var MAX_ROW = 5;
      var SdgameHallPath2 = exports('default', (_dec = ccclass("SdgameHallPath2"), _dec2 = menu("game/Sdgame/HallPath2"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdgameHallPath2, _Component);
        function SdgameHallPath2() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_title1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balls", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SdgameHallPath2.prototype;
        _proto.createItem = function createItem(type) {
          var node = new Node();
          node.addComponent(UIOpacity);
          node.addComponent(UITransform);
          var sprite = node.addComponent(Sprite);
          sprite.spriteFrame = this.balls[type];
          return node;
        };
        _proto.updatePath = function updatePath(data) {
          this.node_path.removeAllChildren();
          var redata = data.slice();
          var row = 0;
          var col = 0;
          var tempNum = -1;
          var list = [];
          for (var i = 0; i < redata.length; i++) {
            var _result = redata[i];
            var item = {
              result: _result
            };
            item["index"] = redata[i];
            if (tempNum != -1) {
              if (redata[i] == tempNum) {
                row++;
                if (row >= MAX_ROW) {
                  row = 0;
                  list[++col] = [];
                }
              } else {
                row = 0;
                list[++col] = [];
              }
            } else {
              row = 0;
              list[col] = [];
            }
            list[col].push(item);
            tempNum = redata[i];
          }
          var start = list.length - MAX_COL;
          if (start < 0) {
            start = 0;
          }
          var result = list.slice(start, list.length);
          var count1 = 0;
          var count2 = 0;
          for (var _i = 0; _i < result.length; _i++) {
            var _list = result[_i];
            for (var j = 0; j < _list.length; j++) {
              var _item = _list[j];
              var resultItem = this.createItem(_item.index);
              if (_item.index == 0) {
                count1++;
              } else {
                count2++;
              }
              var itemL = instantiate(resultItem);
              this.node_path.addChild(itemL);

              // itemL.getChildByName("num").getComponent(cc.Label).string = item.result + "";
              var pos = this.getPositionByRowCol(j, _i, this.node_path);
              //     itemL.getPosition().x = this.getPositionByRowCol(row, col, pathlist).x;
              //     itemL.getPosition().y = this.getPositionByRowCol(row, col, pathlist).y;
              itemL.setPosition(pos.x, pos.y);
            }
          }
          this.txt_title1.string = "" + count1;
          this.txt_title2.string = "" + count2;
        };
        _proto.getPositionByRowCol = function getPositionByRowCol(row, col, itemBg) {
          var width = itemBg.getComponent(UITransform).width;
          var hight = itemBg.getComponent(UITransform).height;
          var perw = width / MAX_COL;
          var perh = hight / MAX_ROW;
          var x = perw / 2 + col * perw;
          var y = perh / 2 + (MAX_ROW - row - 1) * perh;
          return {
            x: x,
            y: y
          };
        };
        _proto.setData = function setData(data) {
          this.updatePath(data);
        };
        _proto.start = function start() {};
        return SdgameHallPath2;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_title1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_title2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_path", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "balls", [_dec6], {
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

System.register("chunks:///_virtual/SdGameHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts', './PlatformMgr.ts', './SdGameDef.ts', './SdProxy.ts', './SdGameHistoryItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, Label, ScrollView, Prefab, UIOpacity, UITransform, Sprite, instantiate, Component, ProxyMgr, PlatformMgr, SdTableType, SdGameProxy, SdGameEvent, SdGameHistoryItem;
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
      Label = module.Label;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      PlatformMgr = module.default;
    }, function (module) {
      SdTableType = module.SdTableType;
    }, function (module) {
      SdGameProxy = module.default;
      SdGameEvent = module.SdGameEvent;
    }, function (module) {
      SdGameHistoryItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "c6e41odT1ZGDqjbYOuCbsZc", "SdGameHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_ROW = 5;
      var SdgameHistory = exports('default', (_dec = ccclass("SdGameHistory"), _dec2 = menu("game/Sdgame/SdgameHistory"), _dec3 = property(SpriteFrame), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(ScrollView), _dec9 = property(ScrollView), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdgameHistory, _Component);
        function SdgameHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "balls", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bottom", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_original", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_issue", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll_ds", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll_his", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_dsItem", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title1", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title2", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_his", _descriptor11, _assertThisInitialized(_this));
          _this._data = void 0;
          _this._type = void 0;
          _this._index = void 0;
          return _this;
        }
        var _proto = SdgameHistory.prototype;
        _proto.onLoad = function onLoad() {
          SdGameProxy.on(SdGameEvent.UPDATE_HISTORY, this.onUpdate, this);
          SdGameProxy.on(SdGameEvent.CLICK_HIS_ITEM, this.onClickItem, this);
        };
        _proto.onClickItem = function onClickItem(index) {
          if (this._data[index]) {
            this._index = index;
            this.txt_md5.string = this._data[index].ciphertext;
            this.txt_original.string = this._data[index].original;
            this.txt_issue.string = this._data[index].issue;
          }
        };
        _proto.createItem = function createItem(type) {
          var node = new Node();
          node.addComponent(UIOpacity);
          node.addComponent(UITransform);
          var sprite = node.addComponent(Sprite);
          sprite.spriteFrame = this.balls[type];
          return node;
        };
        _proto.setData = function setData(data, type, fresh) {
          if (fresh === void 0) {
            fresh = true;
          }
          this._type = type;
          this._data = [];
          if (type != SdTableType.NORMAL) {
            this.node_bottom.active = true;
          } else {
            this.node_bottom.active = false;
          }
          for (var len = data.length, i = len - 1; i >= 0; i--) {
            var item = data[i];
            var json = JSON.parse(item);
            json.realNum = parseInt(json.num[0]) + parseInt(json.num[1]) + parseInt(json.num[2]) + parseInt(json.num[3]) - 4;
            this._data.push(json);
          }
          this.updatePath1(this._data);
          this.updatePath2(this._data);
          if (fresh) {
            this.scroll_ds.scrollToRight();
            this.scroll_his.scrollToRight();
            if (data.length > 0) SdGameProxy.emit(SdGameEvent.CLICK_HIS_ITEM, data.length - 1);
          }
        };
        _proto.onUpdate = function onUpdate(data) {
          this.setData(data, this._type, false);
        };
        _proto.updatePath1 = function updatePath1(data) {
          this.scroll_ds.content.removeAllChildren();
          var redata = data.slice();
          var row = 0;
          var col = 0;
          var tempNum = -1;
          var list = [];
          for (var i = 0; i < redata.length; i++) {
            var _result = redata[i];
            if (tempNum != -1) {
              if (redata[i].realNum % 2 == tempNum) {
                row++;
                if (row >= MAX_ROW) {
                  row = 0;
                  list[++col] = [];
                }
              } else {
                row = 0;
                list[++col] = [];
              }
            } else {
              row = 0;
              list[col] = [];
            }
            list[col].push(_result);
            tempNum = redata[i].realNum % 2;
          }
          var result = list;
          var count1 = 0;
          var count2 = 0;
          for (var _i = 0; _i < result.length; _i++) {
            var _list = result[_i];
            var item = instantiate(this.node_dsItem);
            this.scroll_ds.content.addChild(item);
            item.active = true;
            var num = _list[0].realNum % 2;
            if (num == 0) {
              count1 += _list.length;
            } else {
              count2 += _list.length;
            }
            for (var _i2 = 0; _i2 < item.children.length; _i2++) {
              var node = item.children[_i2];
              node.getComponent(Sprite).spriteFrame = this.balls[num];
              if (_list[_i2]) {
                node.active = true;
              } else {
                node.active = false;
              }
            }
          }
          this.txt_title1.string = "" + count1;
          this.txt_title2.string = "" + count2;
        };
        _proto.updatePath2 = function updatePath2(data) {
          this.scroll_his.content.removeAllChildren();
          for (var i = 0; i < data.length; i++) {
            var item = instantiate(this.prefab_his);
            this.scroll_his.content.addChild(item);
            item.getComponent(SdGameHistoryItem).setData(data[i], i);
          }
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        _proto.onClickCopyMD5 = function onClickCopyMD5() {
          PlatformMgr.p.copyToClipBoard(this.txt_md5.string);
        };
        _proto.onClickCopyMD5Original = function onClickCopyMD5Original() {
          PlatformMgr.p.copyToClipBoard(this.txt_original.string);
        };
        _proto.checkBtnShow = function checkBtnShow() {};
        _proto.start = function start() {};
        return SdgameHistory;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "balls", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_bottom", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_original", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_issue", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scroll_ds", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scroll_his", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_dsItem", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_title1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txt_title2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "prefab_his", [_dec13], {
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

System.register("chunks:///_virtual/SdGameHistoryItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SdProxy.ts', './ProxyMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, SpriteFrame, Component, SdGameProxy, SdGameEvent, ProxyMgr;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      SdGameProxy = module.default;
      SdGameEvent = module.SdGameEvent;
    }, function (module) {
      ProxyMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f4d73OuK5FBXqyJVQtCvgMX", "SdGameHistoryItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SdGameHistoryItem = exports('default', (_dec = ccclass("SdGameHistoryItem"), _dec2 = menu("game/Sdgame/SdGameHistoryItem"), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdGameHistoryItem, _Component);
        function SdGameHistoryItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_light", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_items", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balls", _descriptor3, _assertThisInitialized(_this));
          _this._data = void 0;
          _this._index = void 0;
          return _this;
        }
        var _proto = SdGameHistoryItem.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.node_light.active = false;
          SdGameProxy.on(SdGameEvent.CLICK_HIS_ITEM, function (index) {
            if (index == _this2._index) {
              _this2.node_light.active = true;
            } else {
              _this2.node_light.active = false;
            }
          }, this);
        };
        _proto.setData = function setData(data, index) {
          this._index = index;
          this._data = data;
          for (var i = 0; i < 4; i++) {
            this.sprite_items[i].spriteFrame = this.balls[parseInt(this._data.num[i]) - 1];
          }
        };
        _proto.onClick = function onClick() {
          this.node_light.active = false;
          SdGameProxy.emit(SdGameEvent.CLICK_HIS_ITEM, this._index);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return SdGameHistoryItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_light", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite_items", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "balls", [_dec5], {
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

System.register("chunks:///_virtual/SdGameRuleMD5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PlatformMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, PlatformMgr;
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
    }, function (module) {
      PlatformMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "95048jv5GxLdaFScXUokeFj", "SdGameRuleMD5", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SdgameRuleMD5 = exports('default', (_dec = ccclass("SdGameRuleMD5"), _dec2 = menu("game/Sdgame/RuleMD5"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdgameRuleMD5, _Component);
        function SdgameRuleMD5() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_content1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_content2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_next", _descriptor3, _assertThisInitialized(_this));
          _this.index = 0;
          return _this;
        }
        var _proto = SdgameRuleMD5.prototype;
        _proto.onLoad = function onLoad() {
          this.showContent();
        };
        _proto.onClickUrl = function onClickUrl() {
          PlatformMgr.p.openUrl("https://md5.services/");
        };
        _proto.onClickNext = function onClickNext() {
          this.index += 1;
          if (this.index > 1) {
            this.index = 0;
          }
          this.showContent();
        };
        _proto.showType = function showType(index) {
          if (index === void 0) {
            index = 0;
          }
          this.index = index;
          this.showContent();
          if (index == 0) this.node_next.active = false;
        };
        _proto.showContent = function showContent() {
          this.node_content1.active = this.index == 0;
          this.node_content2.active = this.index != 0;
        };
        return SdgameRuleMD5;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_content1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_next", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import PlatformMgr from "../../../script/platform/PlatformMgr";
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/Sdgame/RuleMD5")
      // export default class SdgameRuleMD5 extends cc.Component {
      //     @property(cc.Node)
      //     node_content1: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_content2: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_next: cc.Node = null;
      //
      //     index = 0;
      //
      //     onLoad() {
      //         this.showContent();
      //     }
      //
      //     onClickUrl() {
      //         PlatformMgr.p.openUrl("https://md5.services/");
      //     }
      //
      //     onClickNext() {
      //         this.index += 1;
      //         if (this.index > 1) {
      //             this.index = 0;
      //         }
      //         this.showContent();
      //     }
      //
      //     showType(index = 0) {
      //         this.index = index;
      //         this.showContent();
      //         if (index == 0) this.node_next.active = false;
      //     }
      //
      //     showContent() {
      //         this.node_content1.active = this.index == 0;
      //         this.node_content2.active = this.index != 0;
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdHall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './ProxyMgr.ts', './GUtil.ts', './SdGameAddRoom.ts', './SdGameDeskItems.ts', './SdProxy.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, ScrollView, Prefab, SpriteFrame, Node, view, UITransform, instantiate, Component, i18n, AudioManager, DataManager, UserKey, UserProxyEvent, NetManager, ViewManager, Common, ProxyMgr, GUtil, SdgameAddRoom, SdGameDeskItem, SdGameProxy, SdGameEvent, MainManager;
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
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      view = module.view;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
      UserProxyEvent = module.UserProxyEvent;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      SdgameAddRoom = module.default;
    }, function (module) {
      SdGameDeskItem = module.default;
    }, function (module) {
      SdGameProxy = module.default;
      SdGameEvent = module.SdGameEvent;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "f3437F7l1lDvqNHV3L741uw", "SdHall", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var FRESH_TIME = 5;
      var SdHall = exports('default', (_dec = ccclass("SdHall"), _dec2 = menu("game/Sdgame/SdHall"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(ScrollView), _dec7 = property(Prefab), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdHall, _Component);
        function SdHall() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "userName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userGold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "RoomScrollView", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemList", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemBg", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label_Mask", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_chongZhi", _descriptor8, _assertThisInitialized(_this));
          _this.freshTime = 0;
          _this._index = 0;
          return _this;
        }
        var _proto = SdHall.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          this.initEvent();
          this.initHall();
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.getInfo, {});
          AudioManager.instance.startBgMusic();
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
          var vSize = view.getVisibleSize();
          var layoutW = (vSize.width - 630) / 2;
          this.label_Mask.getComponent(UITransform).width = layoutW - 110 - 58;
        };
        _proto.initHall = function initHall() {
          this.userGold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
          Common.nickNameFormatL(this.userName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var headiconName = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          //        //头像
          Common.getHead(headiconName, this.head.node);
          var grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          if (grade) {
            var Sprite_level = this.userName.node.parent.getChildByName("headLevel");
            Common.setGradeCode(Sprite_level, parseInt(grade));
          }
          var curl = DataManager.instance.getUserDataForKey(UserKey.CURL);
          this.btn_chongZhi.active = curl && curl.length > 0;
        };
        _proto.updateDesk = function updateDesk() {
          var children = this.RoomScrollView.content.children;
          var roomData = SdGameProxy.tableList;
          var length = roomData.length;
          var index = children.length - length;
          var cumstomCount = length;
          for (var i = 0; i < cumstomCount; i++) {
            var item = children[i];
            if (!item) {
              item = instantiate(this.itemList[0]);
              this.RoomScrollView.content.addChild(item);
              item.setPosition(0, item.position.y);
            }
            //            // item.getChildByName("gold_limit").getComponent(cc.Label).string = Common.ChangeMoneyShow(roomData[i].MinEnterTable, 2);
            var sc = item.getComponent(SdGameDeskItem);
            if (sc) {
              sc.setData(roomData[i], i);
              //                // sc.setBg(this.itemBg[i]);
            }
          }

          if (index > 0) {
            var len = children.length;
            var left = len - index - 1;
            for (var _i = len - 1; _i > left; _i--) {
              children[_i].destroyFromParent();
            }
          }
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          //        //监听按钮事件 如：关闭弹窗
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);

          //        //传输事件
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.on(ConfigManager.protocolSd.joinRoom, this.joinRoom, this);
          SdGameProxy.on(SdGameEvent.UPDATE_TABLE, this.updateDesk, this);
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, function () {
            //                //获取钱包//推送钱包
            _this2.userGold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
          }, this);
        };
        _proto.joinRoom = function joinRoom(data) {
          if (data.lock) {
            var bundle = SdGameProxy.bundle;
            Common.loadPopBuddle("prefab/SdAddRoom", bundle, function () {}, function (prefab) {
              var node = instantiate(prefab);
              ViewManager.instance.popNodeView(node, true);
              node.getComponent(SdgameAddRoom).setData(data);
            }, true);
            return;
          }
          var tableid;
          if (typeof data.index == "undefined") {
            tableid = SdGameProxy.tableList[0].tableId;
          } else {
            tableid = data.index + "";
          }
          //        // Common.showWait();
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.enterRoom, {
            action: "HD_Enter",
            tableId: tableid
          });
        };
        _proto.backHall = function backHall() {
          Common.returnToHall(this, SdGameProxy.BUNDLE);
        };
        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("sd");
        };
        _proto.onClickRank = function onClickRank() {
          GUtil.openRank("sd");
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/SdRuleMD5", SdGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickAutoEnter = function onClickAutoEnter() {
          NetManager.instance.sendOnlineData(ConfigManager.protocolSd.audoEnter, {});
        };
        _proto.onClickCreateRoom = function onClickCreateRoom() {
          Common.showTip(i18n.lang.devTip);
          return;
        };
        _proto.disconnect = function disconnect() {
          //        //断线
          Common.showNetTips();
        };
        _proto.gameShow = function gameShow() {
          this.scheduleOnce(function () {
            if (NetManager.instance._connect == true) {
              NetManager.instance.waitServiceSendData(); // 监听推送
              NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
            }
          }, 0.1);
        };
        _proto.onDisable = function onDisable() {
          //        //监听按钮事件 如：关闭弹窗
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);

          //        //传输事件
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.off(ConfigManager.protocolSd.joinRoom, this.joinRoom, this);
          ProxyMgr.close(this);
        };
        _proto.onDestroy = function onDestroy() {};
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.update = function update(dt) {
          this.freshTime += dt;
          if (this.freshTime > FRESH_TIME) {
            NetManager.instance.sendOnlineData(ConfigManager.protocolSd.getInfo, {});
            this.freshTime = 0;
          }
        };
        return SdHall;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userGold", [_dec4], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "RoomScrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemBg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "label_Mask", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btn_chongZhi", [_dec10], {
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

System.register("chunks:///_virtual/SdPlayers.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './Common.ts', './SdProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, instantiate, Label, Button, v2, Tween, Component, tween, v3, DataManager, UserKey, Common, SdGameProxy;
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
      Label = module.Label;
      Button = module.Button;
      v2 = module.v2;
      Tween = module.Tween;
      Component = module.Component;
      tween = module.tween;
      v3 = module.v3;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      SdGameProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "df86232ArJArohtL8BhcBUI", "SdPlayers", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SdPlayers = exports('default', (_dec = ccclass("SdPlayers"), _dec2 = menu("game/Sdgame/SdPlayers"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdPlayers, _Component);
        function SdPlayers() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "players", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerPublic", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Prefab_seat", _descriptor3, _assertThisInitialized(_this));
          _this.otherUserCount = 6;
          _this._initPlayer = false;
          _this._isHundred = false;
          _this.playersPos = [];
          return _this;
        }
        var _proto = SdPlayers.prototype;
        //    ///////////////////////////////////////////////////////////////
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.init = function init() {
          this.playerPublic.active = false;
          this.playersPos = [];
          for (var i = 0; i < this.players.length; i++) {
            var player = this.players[i];
            player.active = true;
            player.getChildByName("unseat").active = true;
            var seat_bg = instantiate(this.Prefab_seat);
            seat_bg.active = false;
            seat_bg.getChildByName("number").getComponent(Label).string = (i + 1).toString();
            var clickEvent = seat_bg.getComponent(Button).clickEvents[0];
            clickEvent.customEventData = (i + 1).toString();
            player.addChild(seat_bg);
            this.playersPos.push(v2(player.getPosition().x, player.getPosition().y));
          }
        };
        _proto.showPlayerCount = function showPlayerCount() {
          if (this._initPlayer) {
            return;
          }
          this._initPlayer = true;
          this.playerPublic.active = true;
          var deskPlayer = this.getDeskPlayerByPlayerList(SdGameProxy.playerList);
          this.updateTablePlayer(deskPlayer);
        };
        _proto.showPlayers = function showPlayers() {
          var _this2 = this;
          var deskPlayer = this.getDeskPlayerByPlayerList(SdGameProxy.playerList);
          var posArr = [];
          for (var i = 0; i < this.otherUserCount; i++) {
            Tween.stopAllByTarget(this.players[i]);
            var pos = {
              x: this.playersPos[i].x,
              y: this.playersPos[i].y
            };
            posArr.push(pos);
          }
          var _loop = function _loop() {
            var lastindex = _this2.getLastIndexById(deskPlayer[i].userId);
            var poscur = posArr[i];
            var curplayer = _this2.players[i];
            var startpos;
            if (lastindex == -1) {
              startpos = {
                x: _this2.playerPublic.getPosition().x,
                y: _this2.playerPublic.getPosition().y
              };
              curplayer.setPosition(startpos.x, startpos.y);
            } else {
              startpos = {
                x: _this2.players[lastindex].getPosition().x,
                y: _this2.players[lastindex].getPosition().y
              };
              curplayer.setPosition(startpos.x, startpos.y);
            }
            tween(curplayer).to(0.1, {
              position: v3(poscur.x, poscur.y)
            }).call(function () {
              curplayer.setPosition(poscur.x, poscur.y);
            }).start();
          };
          for (var i = 0; i < deskPlayer.length; i++) {
            _loop();
          }
          this.updateTablePlayer(deskPlayer);
        };
        _proto.getDeskPlayerByPlayerList = function getDeskPlayerByPlayerList(data) {
          var redata = [];
          if (data.length == 0) {
            return redata;
          }
          var curData = data;
          for (var i = 0; i < curData.length; i++) {
            if (curData[i].userId != DataManager.instance.getUserDataForKey(UserKey.OID)) {
              redata.push(curData[i]);
            }
            if (redata.length == this.otherUserCount) {
              break;
            }
          }
          return redata;
        };
        _proto.getLastIndexById = function getLastIndexById(id) {
          var index = -1;
          for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].name == id) {
              index = i;
              break;
            }
          }
          return index;
        };
        _proto.updateTablePlayer = function updateTablePlayer(data) {
          var redata;
          redata = data || [];
          for (var i = 0; i < this.otherUserCount; i++) {
            var player = this.players[i];
            player.active = true;
            player.getChildByName("unseat").active = true;
            player.getChildByName("seat_bg").active = false;
          }
          for (var i = 0; i < redata.length; i++) {
            var _player = this.players[i];
            _player.getChildByName("unseat").active = false;
            _player.getChildByName("seat_bg").active = true;
            var seat_bg = _player.getChildByName("seat_bg");
            Common.nickNameFormatL(seat_bg.getChildByName("label_name"), redata[i].nickName);
            seat_bg.getChildByName("label_gold").getComponent(Label).string = Common.ChangeMoneyShow(redata[i].yxb, 2);
            var headNode = seat_bg.getChildByName("head_frame");
            var head = headNode.getChildByName("head");
            Common.getHead(redata[i].avatar, head);
            _player.name = redata[i].userId;
          }
        };
        return SdPlayers;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "players", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerPublic", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Prefab_seat", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import DataManager, { UserKey } from "../../../script/manager/DataManager";
      // import { Common } from "../../../script/tools/Common";
      //
      // import SdGameProxy from "./SdProxy";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/Sdgame/SdPlayers")
      // export default class SdPlayers extends cc.Component {
      //     @property(cc.Node)
      //     players: cc.Node[] = [];
      //
      //     @property(cc.Node)
      //     playerPublic: cc.Node = null;
      //
      //     @property(cc.Prefab)
      //     Prefab_seat: cc.Prefab = null;
      //
      //     otherUserCount = 7;
      //
      //     _initPlayer = false;
      //
      //     _isHundred = false;
      //
      //     playersPos = [];
      //
      //     ///////////////////////////////////////////////////////////////
      //     protected onLoad(): void {
      //         this.init();
      //     }
      //     start() {}
      //
      //     // update (dt) {}
      //     protected init(): void {
      //         this.playerPublic.active = false;
      //         this.playersPos = [];
      //
      //         for (var i = 0; i < this.players.length; i++) {
      //             let player = this.players[i];
      //
      //             player.active = true;
      //             player.getChildByName("unseat").active = true;
      //
      //             let seat_bg = cc.instantiate(this.Prefab_seat);
      //             seat_bg.active = false;
      //             seat_bg.getChildByName("number").getComponent(cc.Label).string = (i + 1).toString();
      //             let clickEvent: cc.Component.EventHandler = seat_bg.getComponent(cc.Button).clickEvents[0];
      //             clickEvent.customEventData = (i + 1).toString();
      //             player.addChild(seat_bg);
      //             this.playersPos.push(cc.v2(player.x, player.y));
      //         }
      //     }
      //
      //     showPlayerCount() {
      //         if (this._initPlayer) {
      //             return;
      //         }
      //         this._initPlayer = true;
      //         this.playerPublic.active = true;
      //
      //         let deskPlayer: sdgameProto.user[] = this.getDeskPlayerByPlayerList(SdGameProxy.playerList);
      //         this.updateTablePlayer(deskPlayer);
      //     }
      //
      //     public showPlayers() {
      //         let deskPlayer: sdgameProto.user[] = this.getDeskPlayerByPlayerList(SdGameProxy.playerList);
      //         let posArr = [];
      //         for (var i = 0; i < this.otherUserCount; i++) {
      //             this.players[i].stopAllActions();
      //             let pos = { x: this.playersPos[i].x, y: this.playersPos[i].y };
      //             posArr.push(pos);
      //         }
      //         for (var i = 0; i < deskPlayer.length; i++) {
      //             let lastindex = this.getLastIndexById(deskPlayer[i].userId);
      //             let poscur = posArr[i];
      //             let curplayer = this.players[i];
      //             let startpos;
      //             if (lastindex == -1) {
      //                 startpos = { x: this.playerPublic.x, y: this.playerPublic.y };
      //                 curplayer.x = startpos.x;
      //                 curplayer.y = startpos.y;
      //             } else {
      //                 startpos = { x: this.players[lastindex].x, y: this.players[lastindex].y };
      //                 curplayer.x = startpos.x;
      //                 curplayer.y = startpos.y;
      //             }
      //             cc.tween(curplayer)
      //                 .to(0.1, { x: poscur.x, y: poscur.y })
      //                 .call(() => {
      //                     curplayer.x = poscur.x;
      //                     curplayer.y = poscur.y;
      //                 })
      //                 .start();
      //         }
      //
      //         this.updateTablePlayer(deskPlayer);
      //     }
      //
      //     private getDeskPlayerByPlayerList(data: sdgameProto.user[]) {
      //         let redata = [];
      //
      //         if (data.length == 0) {
      //             return redata;
      //         }
      //         let curData = data;
      //         for (var i = 0; i < curData.length; i++) {
      //             if (curData[i].userId != DataManager.instance.instance.getUserDataForKey(UserKey.OID)) {
      //                 redata.push(curData[i]);
      //             }
      //             if (redata.length == this.otherUserCount) {
      //                 break;
      //             }
      //         }
      //         return redata;
      //     }
      //     getLastIndexById(id) {
      //         let index = -1;
      //         for (var i = 0; i < this.players.length; i++) {
      //             if (this.players[i].name == id) {
      //                 index = i;
      //                 break;
      //             }
      //         }
      //         return index;
      //     }
      //     private updateTablePlayer(data: sdgameProto.user[]) {
      //         let redata;
      //         redata = data || [];
      //         for (var i = 0; i < this.otherUserCount; i++) {
      //             let player = this.players[i];
      //             player.active = true;
      //             player.getChildByName("unseat").active = true;
      //             player.getChildByName("seat_bg").active = false;
      //         }
      //         for (var i = 0; i < redata.length; i++) {
      //             let player = this.players[i];
      //             player.getChildByName("unseat").active = false;
      //             player.getChildByName("seat_bg").active = true;
      //             let seat_bg = player.getChildByName("seat_bg");
      //             Common.nickNameFormatL(seat_bg.getChildByName("label_name"), redata[i].nickName);
      //             seat_bg.getChildByName("label_gold").getComponent(cc.Label).string = Common.ChangeMoneyShow(redata[i].yxb, 2);
      //             let headNode = seat_bg.getChildByName("head_frame");
      //             let head = headNode.getChildByName("head");
      //             Common.getHead(redata[i].avatar, head);
      //             player.name = redata[i].userId;
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, assetManager, i18n, ProxyBase, ConfigManager, EventManager, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyBase = module.ProxyBase;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f167fHKjpFPDKEUu1aSdOxG", "SdProxy", undefined);
      var SdGameEvent = exports('SdGameEvent', /*#__PURE__*/function (SdGameEvent) {
        SdGameEvent["ENTER_ROOM"] = "enterRoom";
        SdGameEvent["LEAVE_ROOM"] = "leaveRoom";
        SdGameEvent["UPDATE_PLAYER_LIST"] = "playerList";
        SdGameEvent["UPDATE_TABLE"] = "updateTable";
        SdGameEvent["UPDATE_USER_LIST"] = "userList";
        SdGameEvent["CHAT"] = "chat";
        SdGameEvent["BET"] = "doingBet";
        SdGameEvent["UPDATE_BET"] = "updateBet";
        SdGameEvent["UPDATE_STATE"] = "updateState";
        SdGameEvent["UPDATE_ROOM"] = "updateRoom";
        SdGameEvent["UPDATE_MY_INFO"] = "updateMyInfo";
        SdGameEvent["RESULT"] = "result";
        SdGameEvent["UPDATE_MD5"] = "updateMD5";
        SdGameEvent["UPDATE_HISTORY"] = "updateHistory";
        SdGameEvent["CHECKOUT"] = "checkout";
        SdGameEvent["CLICK_HIS_ITEM"] = "clickHisItem";
        return SdGameEvent;
      }({}));
      var SdGameState = exports('SdGameState', /*#__PURE__*/function (SdGameState) {
        SdGameState[SdGameState["NORMAL"] = 0] = "NORMAL";
        SdGameState[SdGameState["START"] = 1] = "START";
        SdGameState[SdGameState["BET"] = 2] = "BET";
        SdGameState[SdGameState["RESULT"] = 3] = "RESULT";
        return SdGameState;
      }({}));
      /**
       * 色蝶数据代理
       */
      var SdGameProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(SdGameProxyMgr, _ProxyBase);
        function SdGameProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          /**
           * 在座玩家列表
           */
          _this.playerList = void 0;
          _this.resultData = null;
          /**桌子列表 */
          _this.tableList = void 0;
          _this.oddList = null;
          //赔率
          /**房间内信息 */
          _this.roomInfo = void 0;
          _this.history = void 0;
          _this.playerCount = 0;
          _this.wsEvents = [ConfigManager.instance.protocolSd.getInfo, ConfigManager.instance.protocolSd.deskinfo, ConfigManager.instance.protocolSd.enterRoom, ConfigManager.instance.protocolSd.audoEnter, ConfigManager.instance.protocolSd.startGame, ConfigManager.instance.protocolSd.updatePlayerNum, ConfigManager.instance.protocolSd.getPlayerList, ConfigManager.instance.protocolSd.sendShortCut, ConfigManager.instance.protocolSd.doingBet, ConfigManager.instance.protocolSd.updateRoomStatus,
          // ConfigManager.instance.protocolSd.updatePlayerStatus,
          ConfigManager.instance.protocolSd.openResult, ConfigManager.instance.protocolSd.betInfo, ConfigManager.instance.protocolSd.exitRoom, ConfigManager.instance.protocolSd.md5Text, ConfigManager.instance.protocolSd.history, ConfigManager.instance.protocolSd.checkout];
          _this.gameState = SdGameState.NORMAL;
          _this.gameEventID = null;
          _this.gameDownTime = 0;
          _this.betTime = 1;
          _this.BUNDLE = "Sdgame";
          //聊天列表-文本
          _this._chatQueueList = [];
          //聊天列表-表情
          _this._expressionQueueList = [];
          /**
           * 所有用户列表
           */
          _this.userList = [];
          return _this;
        }
        var _proto = SdGameProxyMgr.prototype;
        _proto.init = function init() {
          this.initRecv();
        };
        _proto.registSocketEvent = function registSocketEvent() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.wsEvents), _step; !(_step = _iterator()).done;) {
            var event = _step.value;
            EventManager.instance.on(event, this.recvData, this);
          }
        };
        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            EventManager.instance.off(event, this.recvData, this);
          }
        };
        _proto.initRecv = function initRecv() {};
        _proto.recvData = function recvData(data) {
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            if (data.Code == 30009) {
              this.emit(SdGameEvent.LEAVE_ROOM);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.instance.protocolSd.getInfo:
              if (!data.Data) {
                break;
              }
              this.tableList = data.Data;
              this.emit(SdGameEvent.UPDATE_TABLE);
              break;
            case ConfigManager.instance.protocolSd.audoEnter:
            case ConfigManager.instance.protocolSd.enterRoom:
              {
                var info = data.Data;
                this.oddList = info.odds;
                this.roomInfo = info;
                this.gameState = info.tableInfo.state;
                this.gameDownTime = info.tableInfo.countDown;
                this.betTime = info.tableInfo.betTime;
                this.playerCount = info.tableInfo.playNum;
                this.playerList = info.tableInfo.seatPlay;
                this.gameEventID = info.tableInfo.issue;
                this.emit(SdGameEvent.ENTER_ROOM);
                break;
              }
            case ConfigManager.instance.protocolSd.startGame:
              {
                var _info = data.Data;
                this.oddList = _info.odds;
                this.roomInfo = _info;
                this.gameState = _info.tableInfo.state;
                this.gameDownTime = _info.tableInfo.countDown;
                this.playerCount = _info.tableInfo.playNum;
                this.playerList = _info.tableInfo.seatPlay;
                this.emit(SdGameEvent.UPDATE_ROOM);
                break;
              }
            case ConfigManager.instance.protocolSd.updateRoomStatus:
              {
                var _info2 = data.Data;
                this.gameState = _info2.tableState;
                this.gameEventID = _info2.eventID;
                this.gameDownTime = _info2.countDown;
                this.emit(SdGameEvent.UPDATE_STATE);
                break;
              }
            case ConfigManager.instance.protocolSd.updatePlayerNum:
              {
                var _info3 = data.Data;
                this.playerCount = _info3.playNum;
                this.playerList = _info3.seatPlay;
                this.emit(SdGameEvent.UPDATE_PLAYER_LIST, _info3);
                break;
              }
            case ConfigManager.instance.protocolSd.getPlayerList:
              {
                this.emit(SdGameEvent.UPDATE_USER_LIST, data.Data);
                break;
              }
            case ConfigManager.instance.protocolSd.exitRoom:
              {
                this.emit(SdGameEvent.LEAVE_ROOM);
                break;
              }
            case ConfigManager.instance.protocolSd.doingBet:
              {
                var _info4 = data.Data;
                this.emit(SdGameEvent.BET, _info4);
                break;
              }
            case ConfigManager.instance.protocolSd.betInfo:
              {
                var _info5 = data.Data;
                this.emit(SdGameEvent.UPDATE_BET, _info5);
                break;
              }
            case ConfigManager.instance.protocolSd.openResult:
              {
                var _info6 = data.Data;
                if (!this.resultData) this.resultData = {};
                this.resultData.openNum = _info6.openNum;
                this.resultData.prizeResults = _info6.prizeResults;
                this.resultData.ciphertext = _info6.ciphertext;
                this.resultData.original = _info6.original;
                this.emit(SdGameEvent.RESULT, _info6);
                break;
              }
            case ConfigManager.instance.protocolSd.checkout:
              {
                var _info7 = data.Data;
                if (!this.resultData) this.resultData = {};
                this.resultData.seatPrize = _info7.seatPrize;
                this.resultData.userPrize = _info7.userPrize;
                this.emit(SdGameEvent.CHECKOUT, _info7);
                break;
              }
            case ConfigManager.instance.protocolSd.md5Text:
              {
                var _info8 = data.Data;
                this.emit(SdGameEvent.UPDATE_MD5, _info8);
                break;
              }
            case ConfigManager.instance.protocolSd.history:
              {
                var _info9 = data.Data;
                this.history = _info9;
                this.emit(SdGameEvent.UPDATE_HISTORY, _info9);
                break;
              }
            case ConfigManager.instance.protocolSd.sendShortCut:
              {
                var _info10 = data.Data;
                // console.log("info", info);
                this.emit(SdGameEvent.CHAT, _info10);
                break;
              }
          }
        };
        _createClass(SdGameProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }, {
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
        return SdGameProxyMgr;
      }(ProxyBase);
      var SdGameProxy = exports('default', new SdGameProxyMgr("SdGameProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './SdProxy.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, isValid, error, Component, NetManager, ViewManager, SdGameProxy, SdGameEvent, Common, MainManager;
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
      isValid = module.isValid;
      error = module.error;
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      SdGameProxy = module.default;
      SdGameEvent = module.SdGameEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "419f9fcvudCwKH4McsdDyi6", "SdScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SdScene = exports('default', (_dec = ccclass("SdScene"), _dec2 = menu("game/Sdgame/SdScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdScene, _Component);
        function SdScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_desk", _descriptor, _assertThisInitialized(_this));
          // @property(cc.Prefab)
          // pre_room: cc.Prefab = null;
          _this.node_desk = null;
          _this.node_room = null;
          _this.roomLoadToken = null;
          return _this;
        }
        var _proto = SdScene.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
          this.onEvent();
          this.createDesk();
        };
        _proto.start = function start() {
          this.preLoad();
        };
        _proto.preLoad = function preLoad() {
          var bundle = SdGameProxy.bundle;
          bundle.preload("prefab/sdGame", Prefab);
          //        // bundle.preload("prefab/sdPlayers", cc.Prefab);
        };

        _proto.createDesk = function createDesk() {
          if (this.node_desk) {
            return;
          }
          var node = instantiate(this.pre_desk);
          this.node.addChild(node);
          this.node_desk = node;
        };
        _proto.createRoom = function createRoom() {
          var _this2 = this;
          if (this.node_room || this.roomLoadToken || !this.enabledInHierarchy) {
            return;
          }
          var bundle = SdGameProxy.bundle;
          var token = this.roomLoadToken = {};
          bundle.load("prefab/sdGame", function (err, asset) {
            // 退房、停用或再次进房后，旧请求不能创建房间或清除新请求的状态。
            if (_this2.roomLoadToken !== token || !isValid(_this2, true) || !_this2.enabledInHierarchy) {
              return;
            }
            _this2.roomLoadToken = null;
            if (err || !asset) {
              error("Sdgame 房间资源加载失败", err);
              _this2.createDesk();
              return;
            }
            var node = instantiate(asset);
            _this2.node_room = node;
            _this2.node.addChild(node);
          });
        };
        _proto.init = function init() {
          this.reset();
        };
        _proto.onEvent = function onEvent() {
          var _this3 = this;
          SdGameProxy.on(SdGameEvent.ENTER_ROOM, function () {
            if (_this3.node_desk) {
              _this3.node_desk.removeFromParent();
              _this3.node_desk.destroy();
              _this3.node_desk = null;
            }
            _this3.createRoom();
          }, this);
          SdGameProxy.on(SdGameEvent.LEAVE_ROOM, function () {
            _this3.roomLoadToken = null;
            if (_this3.node_room) {
              _this3.node_room.removeFromParent();
              _this3.node_room.destroy();
              _this3.node_room = null;
            }
            _this3.createDesk();
          }, this);
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
          SdGameProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDisable = function onDisable() {
          this.roomLoadToken = null;
          SdGameProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {
          SdGameProxy.targetOff(this);
        };
        return SdScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_desk", [_dec3], {
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

(function(r) {
  r('virtual:///prerequisite-imports/Sdgame', 'chunks:///_virtual/Sdgame'); 
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