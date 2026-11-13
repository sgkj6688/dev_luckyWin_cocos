System.register("chunks:///_virtual/ButtonYxxCm.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, MainManager, Common;
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
      MainManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "0d964tZ6qpOcan0USVoPIf7", "ButtonYxxCm", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var ButtonYxxCm = exports('default', (_dec = ccclass("ButtonYxxCm"), _dec2 = menu("game/Yxxgame/ButtonYxxCm"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonYxxCm, _Component);
        function ButtonYxxCm() {
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
        var _proto = ButtonYxxCm.prototype;
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

        return ButtonYxxCm;
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

System.register("chunks:///_virtual/yxxChipObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yxxGameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, tween, Sprite, Component, CMList;
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
      CMList = module.CMList;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "07c132akDJCHYx6tep4DYVR", "yxxChipObject", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var chipObject = exports('default', (_dec = ccclass("YxxChipObject"), _dec2 = menu("game/Yxxgame/chipObject"), _dec3 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
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
          var spritef = this.smallCMArr[CMList[info.value]];
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

System.register("chunks:///_virtual/Yxxgame", ['./ButtonYxxCm.ts', './YxxGameScene.ts', './YxxGameView.ts', './YxxRecordItem.ts', './YxxshowRecord.ts', './YxxHall.ts', './YxxRoomItemInfo.ts', './YxxGameMiniButtonAndChat.ts', './YxxGameMiniHistory.ts', './YxxGameMiniHistoryItem.ts', './YxxGameMiniProxy.ts', './YxxGameMiniView.ts', './yxxChipObject.ts', './yxxGameCtrl.ts', './yxxGameDef.ts', './yxxGameRuleMD5.ts', './yxxModel.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/yxxGameCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './DataManager.ts', './NetManager.ts', './yxxGameDef.ts', './yxxModel.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, assetManager, i18n, GameDef, DataManager, UserKey, NetManager, eProto, eRoomStatus, yxxModel, Common, MainManager;
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
      eRoomStatus = module.eRoomStatus;
    }, function (module) {
      yxxModel = module.yxxModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "15ff36HQn5CurpDORFqKSTH", "yxxGameCtrl", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var yxxGameCtrl = exports('yxxGameCtrl', /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(yxxGameCtrl, _GameDef$BaseCtrl);
        function yxxGameCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this.BUNDLE = "Yxxgame";
          return _this;
        }
        var _proto = yxxGameCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete yxxGameCtrl._instance;
          yxxGameCtrl._instance = null;
          yxxModel.destroy();
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
            gameName: "yxx"
          });
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          //        //
          var emitData = null;
          if (data.Code && data.Code != 0) {
            if (data.Code != 30009) {
              Common.showTip(i18n.errTip(data.Code));
            }
            return;
          }

          //        // gts.Debug.Log("===onRecvData==", data);
          switch (data.cmd) {
            case eProto.getInfo:
              {
                var HD_info = data.Data;
                if (!HD_info) {
                  return;
                }

                //                //获取配置  加入房间
                yxxModel.instance.roomInfo._serverID = HD_info.YxxServerId;
                var procol = yxxModel.instance.roomInfo._serverID + "/" + eProto.enterRoom.split("/")[1];
                this.SendData(procol, {
                  action: "HD_Enter"
                });
                this.SendData(ConfigManager.protocolHall.getWallet, {});
                var strCmd = eProto.getRecordDetails.split("/")[1];
                var cmd = yxxModel.instance.roomInfo._serverID + "/" + strCmd;
                yxxGameCtrl.instance.SendData(cmd, {});
                break;
              }
            case eProto.HD_Md5Ciphertext:
              {
                emitData = data.Data;
                break;
              }
            case eProto.playerInfo:
              {
                //                // gts.Debug.Log("=玩家信息==yxxGameDef.eProto.playerInfo==" + JSON.stringify(data.Data));

                //                //玩家信息
                emitData = {};
                yxxModel.instance.curTablePlayerLast = yxxModel.instance.curTablePlayer;
                yxxModel.instance.updateDeskPlayerByPlayerList(data.Data);

                //                //是否有更新
                if (yxxModel.instance.curTablePlayerLast) {
                  var isUpdate = false;
                  for (var _i3 = 0; _i3 < 6; _i3++) {
                    if (yxxModel.instance.curTablePlayerLast[_i3].UserID != yxxModel.instance.curTablePlayer[_i3].UserID) {
                      isUpdate = true;
                      break;
                    }
                  }
                  emitData = isUpdate ? emitData : null;
                }

                //                // gts.Debug.Log("===yxxGameDef.eProto.playerInfo=curTablePlayer_old=" + JSON.stringify(emitData.curTablePlayer_old));
                //                // gts.Debug.Log("===yxxGameDef.eProto.playerInfo=curTablePlayer_new=" + JSON.stringify(emitData.curTablePlayer_new));
                break;
              }
            case eProto.deskinfo:
              {
                //                // 桌子信息
                emitData = data.Data;
                break;
              }
            case eProto.updatePool: // 刷新奖池
            case eProto.updatePlayerNum: //刷新玩家数量
            case eProto.updatePlayerStatus:
              {
                //                // 刷新玩家状态
                emitData = data.Data;
                break;
              }
            case eProto.updateRoomStatus:
              {
                var switchRoomState = data.Data;
                //                // 刷新房间状态
                yxxModel.instance.roomInfo._curRoomStatus = switchRoomState.RoomState;
                yxxModel.instance.roomInfo._roomid = switchRoomState.EventID;
                if (yxxModel.instance.roomInfo._curRoomStatus == eRoomStatus.startGame) {
                  //                    //此时房间状态 是开始游戏
                  if (yxxModel.instance.resultData) {
                    yxxModel.instance.resultData = null;
                  }
                }
                emitData = switchRoomState;
                break;
              }
            case eProto.updateResult:
              {
                //                // 结算
                emitData = yxxModel.instance.resultData = data.Data;
                break;
              }
            case eProto.HD_OpenResult:
              {
                //                //
                emitData = data.Data;
                break;
              }
            case eProto.DoubleXZ:
              {
                //                // 双倍下注
                var HD_DoubleXiaZhu = data.Data;
                emitData = {
                  HD_DoubleXiaZhu: HD_DoubleXiaZhu,
                  isSelf: HD_DoubleXiaZhu.UserID == DataManager.instance.getUserDataForKey(UserKey.OID),
                  index: yxxModel.instance.getIndexById(HD_DoubleXiaZhu.UserID)
                };
                break;
              }
            case eProto.LastXZ:
              {
                //                // gts.Debug.Log("===服务端返回=====yxxGameDef.eProto.LastXZ===============");

                //                // 上次下注
                var HD_LastXiaZhu = data.Data;
                emitData = {
                  HD_LastXiaZhu: HD_LastXiaZhu,
                  isSelf: HD_LastXiaZhu.UserID == DataManager.instance.getUserDataForKey(UserKey.OID),
                  index: yxxModel.instance.getIndexById(HD_LastXiaZhu.UserID)
                };
                break;
              }
            case eProto.YxxBet:
              {
                //                // 下注
                var HD_XiaZhu = data.Data;
                if (Object.keys(HD_XiaZhu).length > 0) {
                  emitData = {
                    xzType: parseInt(HD_XiaZhu.XiaZhuPos),
                    xiazhuzhi: HD_XiaZhu.XiaZhuV,
                    isSelf: HD_XiaZhu.UserID == DataManager.instance.getUserDataForKey(UserKey.OID),
                    index: yxxModel.instance.getIndexById(HD_XiaZhu.UserID)
                  };
                }
                break;
              }
            case eProto.getBigPoolList:
              {
                //                // 获取大奖记录
                if (data.GameType == "yxx" && data.Data) {
                  emitData = data.Data;
                }
                break;
              }
            case eProto.getRecordDetails:
              {
                //                // 获取游戏开奖记录
                emitData = data.Data;
                break;
              }
            case eProto.getPlayerList:
              {
                //                // 获取玩家列表
                yxxModel.instance.AllPlayerinfo = data.Data;
                emitData = {};
                break;
              }
            case eProto.exitRoom:
              {
                //                //退出房间
                if (data.Code == 0) {
                  emitData = {};
                }
                break;
              }
            case eProto.checkInRoom:
              {
                //                // 检查是否再房间
                var checkPlayerInGame = data.Data;
                emitData = {
                  tableData: checkPlayerInGame.TableInfo,
                  resultData: yxxModel.instance.resultData,
                  isInGame: checkPlayerInGame.InGame
                };
                yxxModel.instance.curTablePlayerLast = yxxModel.instance.curTablePlayer;
                yxxModel.instance.updateDeskPlayerByPlayerList(checkPlayerInGame.PlayerInfo);
                break;
              }
            case eProto.sendShortCut:
              {
                var info = data.Data;
                var userID = DataManager.instance.getUserDataForKey(UserKey.OID);
                var currPlayer = info.UserId == userID;
                if (yxxModel.instance.curTablePlayer != null && currPlayer == null) {
                  for (var i = 0; i < yxxModel.instance.curTablePlayer.length; i++) {
                    if (info.UserId == yxxModel.instance.curTablePlayer[i].UserID) {
                      currPlayer = true;
                      break;
                    }
                  }
                }
                if (!currPlayer) {
                  if (info.type == 1) {
                    yxxModel.instance.chatQueueList.push(info);
                  } else if (info.type == 2) {
                    yxxModel.instance.expressionQueueList.push(info);
                  }
                }
                emitData = {
                  HD_SendShortCut: data.Data,
                  curTablePlayer: yxxModel.instance.curTablePlayer
                };
                break;
              }
            case eProto.getPumping:
              {
                yxxModel.instance.nPummping = data.Data.Pumping;
                emitData = {};
                break;
              }

            //            //////////////////////////////////////////////////////
            //            //获取钱包-推送钱包-断线重连
            case ConfigManager.protocolHall.pushWallet:
            case ConfigManager.protocolHall.getWallet:
            case ConfigManager.protocolHall.login:
              {
                emitData = {};
                break;
              }
          }
          this.emitUpdateView(data.cmd, emitData);
        }
        //    //#endregion
        //    //////////////////////////////////////////////////////////////////
        ;

        _proto.SendData = function SendData(msgid, data) {
          if (yxxModel.instance.curTableID) {
            data["tableID"] = yxxModel.instance.curTableID;
          }
          var log = "\u53D1\u9001\u6D88\u606F\uFF0C msgId:" + msgid + ", data:" + JSON.stringify(data);
          var netMgr = NetManager.instance;
          if (netMgr && netMgr._connect) {
            netMgr.sendOnlineData("" + msgid, data);
          } else {
            gts.Debug.LogInfo("(FAILED): " + log);
          }
        };
        _proto.getInfo = function getInfo() {
          this.SendData(eProto.getInfo, {});
        };
        _proto.sendDoingBet = function sendDoingBet(pos, num) {
          if (yxxModel.instance._curCountDown <= 3) {
            Common.showTip(i18n.lang.disableBet);
            return false;
          }
          this.SendData(yxxModel.instance.roomInfo._serverID + "/" + eProto.YxxBet.split("/")[1], {
            pos: pos,
            num: num,
            action: "HD_XiaZhu"
          });
          return true;
        };
        _proto.Send_ExitRoom = function Send_ExitRoom() {
          var procol = yxxModel.instance.roomInfo._serverID + "/" + eProto.exitRoom.split("/")[1];
          this.SendData(procol, {
            action: "HD_QuitTable"
          });
        };
        _createClass(yxxGameCtrl, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return yxxGameCtrl;
      }(GameDef.BaseCtrl));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yxxGameDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('HD_UpdatePlayerList', void 0);
      cclegacy._RF.push({}, "ab2a9WdO+ZJyrnl/am5yS0A", "yxxGameDef", undefined);
      //gameDef moudle
      var bundle = exports('bundle', "Yxxgame");
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
      var Event = exports('Event', /*#__PURE__*/function (Event) {
        Event["onLoadHall"] = "onLoadHall";
        Event["onLoadGame"] = "onLoadGame";
        Event["onUpdateRecord"] = "onUpdateRecord";
        return Event;
      }({}));
      var eRoomStatus = exports('eRoomStatus', {
        none: 0,
        startGame: 2,
        yxxBet: 3,
        result: 6
      });
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["getInfo"] = "yxx/HD_info";
        eProto["enterRoom"] = "yxx/HD_Enter";
        eProto["exitRoom"] = "yxx/HD_QuitTable";
        eProto["getBigPoolList"] = "yxx/HD_GetPrizeRecord";
        eProto["getRecordDetails"] = "yxx/HD_GetResultsRecord";
        eProto["getPlayerList"] = "yxx/HD_GetPlayerList";
        eProto["checkInRoom"] = "yxx/HD_CheckPlayerInGame";
        eProto["sendShortCut"] = "yxx/HD_SendShortCut";
        eProto["DoubleXZ"] = "yxx/HD_DoubleXiaZhu";
        eProto["LastXZ"] = "yxx/HD_LastXiaZhu";
        eProto["YxxBet"] = "yxx/HD_XiaZhu";
        eProto["deskinfo"] = "yxx/HD_UpdateTableInfo";
        eProto["playerInfo"] = "yxx/HD_UpdatePlayerList";
        eProto["updatePlayerNum"] = "yxx/HD_UpdatePlayerNum";
        eProto["updatePlayerStatus"] = "yxx/HD_UpdatePlayerInfo";
        eProto["updatePool"] = "yxx/HD_RefreshPrizePool";
        eProto["updateRoomStatus"] = "yxx/HD_SwitchRoomState";
        eProto["updateResult"] = "yxx/HD_JieSuan";
        eProto["HD_OpenResult"] = "yxx/HD_OpenResult";
        eProto["getPumping"] = "lobby/HD_GetPumping";
        eProto["HD_GetRoomInfo"] = "yxx/HD_GetRoomInfo";
        eProto["HD_Md5Ciphertext"] = "yxx/HD_Md5Ciphertext";
        return eProto;
      }({}));
      /**md5结果信息 */

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改

      /** 房间列表信息 */

      /** 房间信息 */

      /**大奖信息 */

      /**结果信息 */

      /**大奖信息 */

      /** S2C 网络包结构
       * S2C = {"Data":{},"GameType":"yxx","Action":"HD_UpdatePlayerNum","ErrMsg":"操作成功","Code":0,"cmd":"yxx/HD_UpdatePlayerNum"}
       */

      /**配置信息 */

      /**钱包信息 */

      /**玩家数量 */

      /**下注信息 */

      /**下注信息 */

      /**下注结果 */

      /**更新桌子信息 */

      /**玩家信息 */

      /**更新玩家信息列表 */
      var HD_UpdatePlayerList;

      /**个人玩家的信息及配置 */

      /**玩家下注 */

      /**刷新奖池 */

      /**切换房间状态 */

      /**结算 */

      /**重连检测是否在游戏 */

      /**玩家信息 */

      /**玩家信息列表 */

      /**聊天信息 */

      /**结果记录 */

      /**大奖记录信息 */

      /**上局结果 */

      /**双倍 */

      //一些待处理 问题

      // ==recvData data==={"Data":{"UserID":"62496f2dc4ac29426adcb17e","XiaZhuPos":"6","XiaZhuV":482},"GameType":"yxx","Action":"HD_XiaZhu","ErrMsg":"操作成功","Code":0,"cmd":"yxx/HD_XiaZhu"}
      // builtin-2d-sprite (variant) : Failed to set property [texture], property not found.
      //注： 这个问题由 服务端发送的下注金额 引起，金额不在 CMList整数范围内
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/YxxGameMiniButtonAndChat.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './DataManager.ts', './ViewManager.ts', './BlackWordProxy.ts', './ChatProxy.ts', './yxxGameCtrl.ts', './yxxGameRuleMD5.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, UITransform, instantiate, find, EditBox, RichText, Component, i18n, ProxyMgr, GUtil, DataManager, UserKey, ViewManager, BlackWordProxy, ChatProxy, ChatProxyEvent, yxxGameCtrl, yxxGameRuleMD5, Common, MainManager;
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
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      find = module.find;
      EditBox = module.EditBox;
      RichText = module.RichText;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      ChatProxy = module.default;
      ChatProxyEvent = module.ChatProxyEvent;
    }, function (module) {
      yxxGameCtrl = module.yxxGameCtrl;
    }, function (module) {
      yxxGameRuleMD5 = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "8f8d1IYpPJAGbikYY0UQVi9", "YxxGameMiniButtonAndChat", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var YxxGameMiniButtonAndChat = exports('default', (_dec = ccclass("YxxGameMiniButtonAndChat"), _dec2 = menu("game/YxxgameMini/YxxGameMiniButtonAndChat"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(YxxGameMiniButtonAndChat, _Component);
        function YxxGameMiniButtonAndChat() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // @property(cc.Node)
          //    // node_handsup: cc.Node = null;
          //    // @property(cc.Node)
          //    // node_handsupCancel: cc.Node = null;
          _initializerDefineProperty(_this, "node_chat", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chatItem", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_history", _descriptor3, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // node_betLayer: cc.Node = null;
          _this._chatData = [];
          return _this;
        }
        var _proto = YxxGameMiniButtonAndChat.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onClickClose = function onClickClose() {
          //        // NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.leave, {});
          yxxGameCtrl.instance.Send_ExitRoom();
          ViewManager.instance.closePopGame("YxxMini");
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          ChatProxy.joinChat("yxx");
          ChatProxy.getRecord("yxx");
          ChatProxy.on(ChatProxyEvent.UPDATE_RECORD, function (data) {
            if (data.msg.GroupId != "yxx") {
              return;
            }
            if (data.msgList != null) {
              _this2._chatData = data.msgList;
              if (_this2._chatData.length > 0) {
                _this2.creatChat();
              }
            }
          }, this);
          ChatProxy.on(ChatProxyEvent.RECV_MSG, function (data) {
            if (data.msg.GroupId != "yxx") {
              return;
            }
            _this2.updateChat(data.msg);
          }, this);
          var chatLayer = this.node_chat;
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          scollview_content.content.on(Node.EventType.SIZE_CHANGED, this.onNodeEventSizeChange, this);
        };
        _proto.onNodeEventSizeChange = function onNodeEventSizeChange() {
          var chatLayer = this.node_chat;
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          if (scollview_content.content.getComponent(UITransform).height > scollview_content.node.getComponent(UITransform).height) {
            scollview_content.scrollToBottom(0.2);
          }
        };
        _proto.onDisable = function onDisable() {
          ChatProxy.exitChat("yxx");
          ProxyMgr.close(this);
          var chatLayer = this.node_chat;
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          scollview_content.content.off(Node.EventType.SIZE_CHANGED, this.onNodeEventSizeChange, this);
        };
        _proto.onClickRank = function onClickRank() {
          GUtil.openRank("yxx");
        };
        _proto.onClickChat = function onClickChat() {
          this.node_chat.active = !this.node_chat.active;
          if (this.node_chat.active) {
            ChatProxy.getRecord("yxx");
          }
        }
        //    // onClickHandsUp() {
        //    //     this.node_handsup.active = false;
        //    //     this.node_handsupCancel.active = true;
        //    //     // DxMD5Proxy.handsup = true;
        //    //     // DxMD5Proxy.emit(DxMD5Event.HANDSUP);
        //    // }
        //    // onClickHandsUpCancel() {
        //    //     this.node_handsup.active = true;
        //    //     this.node_handsupCancel.active = false;
        //    //     // DxMD5Proxy.handsup = false;
        //    //     // DxMD5Proxy.emit(DxMD5Event.HANDSUP);
        //    // }
        //    //历史走势
        ;

        _proto.onClickHistory = function onClickHistory() {
          this.node_history.active = !this.node_history.active;
        };
        _proto.onClickRule = function onClickRule() {
          Common.loadPopBuddle("prefab/YxxHelp", yxxGameCtrl.instance.bundle, function () {}, function (dxPathList) {
            var dxPathListLayer = instantiate(dxPathList);
            ViewManager.instance.popNodeView(dxPathListLayer, true);
            dxPathListLayer.getComponent(yxxGameRuleMD5).showType(0);
          }, true);
        }
        //    //下注记录
        ;

        _proto.onClickRecord = function onClickRecord() {
          //        // Common.loadPopBuddle(
          //        //     "prefab/DxMD5RecordLayer",
          //        //     DxMD5Proxy.bundle,
          //        //     () => {},
          //        //     (dxPathList) => {
          //        //         let dxPathListLayer = cc.instantiate(dxPathList);
          //        //         ViewManager.instance.popNodeView(dxPathListLayer, true);
          //        //     },
          //        //     true
          //        // );

          GUtil.openRecord("yxx");
        }
        //    // //下注金额
        //    // onClickBet(sender, data) {
        //    //     DxMD5Proxy.addPreAmount(parseInt(data));
        //    // }
        //    // onClickPreBetBig() {
        //    //     this.node_betLayer.active = true;
        //    //     DxMD5Proxy.preBig();
        //    // }
        //    // onClickPreBetSmall() {
        //    //     this.node_betLayer.active = true;
        //    //     DxMD5Proxy.preSmall();
        //    // }
        //    // onClickSure() {
        //    //     //3秒锁定
        //    //     let time = Math.floor(DxMD5Proxy.timeLeft);
        //    //     if (time <= 3) {
        //    //         Common.showTip(i18n.lang.disableBet);
        //    //         return;
        //    //     }
        //    //     if (DxMD5Proxy.preBetCount == 0) {
        //    //         Common.showTip(i18n.lang.chooseGold);
        //    //         return;
        //    //     }
        //    //     DataManager.instance.instance.isChangeGold = true;
        //    //     let isBig = DxMD5Proxy.preBetBig;
        //    //     NetManager.instance.sendOnlineData(DxMD5Proxy.serverId + "/HD_play", {
        //    //         action: "Bet",
        //    //         big: isBig === PreBetType.BIG ? DxMD5Proxy.preBetCount : 0,
        //    //         small: isBig === PreBetType.SMALL ? DxMD5Proxy.preBetCount : 0,
        //    //     });
        //    //     DxMD5Proxy.preBetCount = 0;
        //    // }
        //    // onClickDouble() {
        //    //     let bet = 0;
        //    //     if (DxMD5Proxy.preBetCount > 0) {
        //    //         bet = DxMD5Proxy.preBetCount;
        //    //     } else if (DxMD5Proxy.hasBet > 0) {
        //    //         bet = DxMD5Proxy.hasBet;
        //    //     } else if (DxMD5Proxy.lastBet > 0) {
        //    //         bet = DxMD5Proxy.lastBet;
        //    //     } else {
        //    //         Common.showTip(i18n.lang.chooseGold);
        //    //         return;
        //    //     }
        //    //     DxMD5Proxy.addPreAmount(bet);
        //    // }
        //    // onClickCancel() {
        //    //     this.node_betLayer.active = false;
        //    //     DxMD5Proxy.resetPreAmount();
        //    // }
        //    // ------------------- 聊天 ---------------------------
        ;

        _proto.onClickCloseChat = function onClickCloseChat() {
          this.node_chat.active = false;
        };
        _proto.onClickSendChat = function onClickSendChat() {
          var boxchat = find("chat_bg/chat_box", this.node).getComponent(EditBox);
          this.scheduleOnce(function () {
            boxchat.focus();
          }, 0.1);
          var chatContent = Common.formatInputContent(boxchat.string);
          if (chatContent.length == 0) return;
          boxchat.string = "";
          var code = Common.judgeInputContent(chatContent);
          var userMoney = parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          if (code != 0) {
            var str = "";
            if (code == -1 || code == 1) {
              str = i18n.lang.chatErr1;
            } else if (code == 2) {
              str = i18n.lang.chatErr2;
            }
            var chadata = {
              Content: "",
              Err: true
            };
            chadata.Content = str;
            this.updateChat(chadata);
            return;
          }
          var date = new Date();
          var msgid = DataManager.instance.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          ChatProxy.sendChat({
            groupId: "yxx",
            content: chatContent,
            msgId: msgid,
            msgType: 1
          });
        };
        _proto.updateChat = function updateChat(data) {
          var chatLayer = this.node_chat;
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          if (scollview_content.content.children.length > 20) {
            scollview_content.content.children[0].destroyFromParent();
          }
          var item = instantiate(this.node_chatItem);
          item.active = true;
          item.parent = scollview_content.content;
          var rext = item.getComponent(RichText);
          rext.maxWidth = 300;
          data.Content = BlackWordProxy.filter(data.Content);
          if (typeof data.Err != "undefined" && data.Err == true) {
            var str = data.Content;
            rext.string = "<color=#ff0000>" + str + "</color>";
          } else {
            var name = DataManager.instance.getUserDataForKey(UserKey.NICKNAME);
            var otherName = data.FromUser;
            var color = name == otherName ? "#8fff44" : "#ff8644";
            if (name) rext.string = "<color=" + color + ">" + data.FromUser + ":" + "</c>" + "<color=#ffffff>" + data.Content + "</color>";
          }
        };
        _proto.creatChat = function creatChat() {
          gts.Debug.Log("creatChat");
          var chatLayer = this.node_chat;
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          scollview_content.content.removeAllChildren();
          for (var i = this._chatData.length - 1; i >= 0; i--) {
            this.updateChat(this._chatData[i]);
          }
          this.scheduleOnce(function () {
            scollview_content.scrollToBottom(0.2);
          });
        };
        return YxxGameMiniButtonAndChat;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_chat", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_chatItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_history", [_dec5], {
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

System.register("chunks:///_virtual/YxxGameMiniHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './yxxGameCtrl.ts', './yxxGameDef.ts', './yxxModel.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, GameDef, yxxGameCtrl, eProto, yxxModel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      yxxGameCtrl = module.yxxGameCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      yxxModel = module.yxxModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b552bS3x7RBkrfJDFQQOlhl", "YxxGameMiniHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var YxxGameMiniHistory = exports('default', (_dec = ccclass("YxxGameMiniHistory"), _dec2 = menu("game/YxxgameMini/YxxGameMiniHistory"), _dec3 = property({
        type: gts.List
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(YxxGameMiniHistory, _GameDef$BaseView);
        function YxxGameMiniHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "room_ScrollView", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = YxxGameMiniHistory.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, yxxGameCtrl.instance);
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);
          this.getRecord();
        };
        _proto.getRecord = function getRecord() {
          //        //获取记录
          var strCmd = eProto.getRecordDetails.split("/")[1];
          var cmd = yxxModel.instance.roomInfo._serverID + "/" + strCmd;
          var data = {};
          yxxGameCtrl.instance.SendData(cmd, data);
        };
        _proto.showRecordByData = function showRecordByData(data) {
          this.room_ScrollView.setData(data.reverse());
          this.room_ScrollView.refresh();
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.getRecordDetails:
              {
                this.showRecordByData(data);
                break;
              }
            case eProto.updateResult:
              {
                //                // 获取游戏开奖记录
                this.getRecord();
                break;
              }
          }
        };
        return YxxGameMiniHistory;
      }(GameDef.BaseView), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "room_ScrollView", [_dec3], {
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

System.register("chunks:///_virtual/YxxGameMiniHistoryItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteFrame, find, Sprite, Component;
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
      SpriteFrame = module.SpriteFrame;
      find = module.find;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "180c41yFvhGmqJ1iHiUDg4U", "YxxGameMiniHistoryItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var YxxGameMiniHistoryItem = exports('default', (_dec = ccclass("YxxGameMiniHistoryItem"), _dec2 = menu("game/YxxgameMini/YxxGameMiniHistoryItem"), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(YxxGameMiniHistoryItem, _Component);
        function YxxGameMiniHistoryItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "icon_green", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon_red", _descriptor2, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = YxxGameMiniHistoryItem.prototype;
        _proto.start = function start() {
          var _this2 = this;
          //        //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
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

          //        //设置背景显示
          //        // this.node.getComponent(cc.Sprite).enabled = count % 2 == 1;

          //        //设置图标
          for (var j = 0; j < tmpdata.Results.length; j++) {
            var sp = find("icon" + j, this.node);
            if (sp) {
              var id = parseInt(tmpdata.Results[j]) - 1;
              if (this.item.itemIndex == 0) {
                sp.getComponent(Sprite).spriteFrame = this.icon_red[id];
              } else {
                sp.getComponent(Sprite).spriteFrame = this.icon_green[id];
              }
            }
          }
        };
        _createClass(YxxGameMiniHistoryItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return YxxGameMiniHistoryItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon_green", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon_red", [_dec4], {
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

System.register("chunks:///_virtual/YxxGameMiniProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ProxyBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ProxyBase = module.ProxyBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b22279rfs1B+5ziFCYPhNA/", "YxxGameMiniProxy", undefined);
      var YxxGameMiniProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(YxxGameMiniProxyMgr, _ProxyBase);
        function YxxGameMiniProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this._serverId = void 0;
          return _this;
        }
        var _proto = YxxGameMiniProxyMgr.prototype;
        _proto.send = function send(cmd, data) {};
        return YxxGameMiniProxyMgr;
      }(ProxyBase);
      var YxxGameMiniProxy = exports('default', new YxxGameMiniProxyMgr("YxxGameMiniProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/YxxGameMiniView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GameDef.ts', './GUtil.ts', './UIClock.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './ChipProxy.ts', './showToast.ts', './ChipItem.ts', './yxxGameCtrl.ts', './yxxGameDef.ts', './yxxModel.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, ProgressBar, SpriteFrame, Label, ScrollView, Prefab, AudioClip, instantiate, Tween, UIOpacity, tween, find, Sprite, v3, sp, TweenSystem, UITransform, sys, isValid, Layout, i18n, ProxyMgr, GameDef, GUtil, UIClock, AudioManager, DataManager, UserKey, NetManager, ViewManager, ChipProxy, ChipEvent, ChipType, showToast, ChipItem, yxxGameCtrl, eProto, eRoomStatus, yxxModel, Common, MainManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      ProgressBar = module.ProgressBar;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      instantiate = module.instantiate;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      find = module.find;
      Sprite = module.Sprite;
      v3 = module.v3;
      sp = module.sp;
      TweenSystem = module.TweenSystem;
      UITransform = module.UITransform;
      sys = module.sys;
      isValid = module.isValid;
      Layout = module.Layout;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      UIClock = module.default;
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
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
      ChipType = module.ChipType;
    }, function (module) {
      showToast = module.default;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      yxxGameCtrl = module.yxxGameCtrl;
    }, function (module) {
      eProto = module.eProto;
      eRoomStatus = module.eRoomStatus;
    }, function (module) {
      yxxModel = module.yxxModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
      cclegacy._RF.push({}, "688b5Wfz29M5a8bPtNCYl/g", "YxxGameMiniView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var YxxGameMiniView = exports('default', (_dec = ccclass("YxxGameMiniView"), _dec2 = menu("game/YxxgameMini/YxxGameMiniView"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(ProgressBar), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(SpriteFrame), _dec12 = property(Label), _dec13 = property(ScrollView), _dec14 = property(Prefab), _dec15 = property(AudioClip), _dec16 = property(AudioClip), _dec17 = property(Node), _dec18 = property(UIClock), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(YxxGameMiniView, _GameDef$BaseView);
        function YxxGameMiniView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BtnLast", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BtnJiabei", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yxxYzlist", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djsProgress", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wanAni", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wankong", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "kajiang", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saList", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saSpriteF", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold_pool", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgMusic", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yxxSound", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dajiangLayer", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clock", _descriptor16, _assertThisInitialized(_this));
          //    // @property(cc.SpriteFrame)
          //    // recordIma: cc.SpriteFrame[] = [];
          //    // @property(cc.Prefab)
          //    // item: cc.Prefab = null;
          //    //筹码分发相关
          _this.betList = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: []
          };
          _this.betselfList = [];
          _this.createBetList = [];
          //    //倒计时 剩余时间
          _this._curCountDown = 0;
          //    //倒计时 总时间
          _this._curTotalTime = 0;
          //    //当前选中 的 下注筹码 序号
          _this._curSelectCm = 0;
          //    //下注筹码列表
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
          _this._curTimes = 0;
          _this.isUpdateDeskPlayer = false;
          return _this;
        }
        var _proto = YxxGameMiniView.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, yxxGameCtrl.instance);
          NetManager.instance.waitServiceSendData();
          this.initEvent();
          this.initGame();
          NetManager.instance.sendOnlineData(eProto.HD_GetRoomInfo, {});
          AudioManager.instance.playGameMusic(this.bgMusic, true);
        };
        _proto.start = function start() {
          //        //添加聊天
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
        };
        _proto.initEvent = function initEvent() {
          //        //button事件
          EventManager.on(ConfigManager.protocolYxx.yxxBetBtn, this.selectCM, this);
          //        // EventManager.instance.on(ConfigManager.instance.protocolYxx.yxxHaveBet, this.betIntoPool, this);

          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);

          //        // this.BindAreaBtns();

          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);

          //        //注册分发事件
          EventManager.on(ConfigManager.protocolYxx.yxxLastYz1, this.LastBet, this);
          EventManager.on(ConfigManager.protocolYxx.yxxLastYz2, this.doubleBet, this);
          EventManager.on(eProto.HD_GetRoomInfo, this.enter, this);
          EventManager.on(ConfigManager.protocolYxx.yxxBigrecord, this.showBigRecord, this);
          EventManager.on(ConfigManager.protocolYxx.yxxJackpotHistory, this.showBigRecord, this);
        };
        _proto.enter = function enter(data) {
          EventManager.off(eProto.HD_GetRoomInfo, this.enter, this);
          if (data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          var msg = data.Data;
          yxxModel.instance.curTableID = msg.TableInfos[0].TableID;
          yxxGameCtrl.instance.SendData(eProto.getInfo, {});
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.gameShow = function gameShow() {
          this.scheduleOnce(function () {
            yxxGameCtrl.instance.SendData(ConfigManager.protocolHall.getWallet, {});
            yxxGameCtrl.instance.SendData(yxxModel.instance.roomInfo._serverID + "/" + eProto.checkInRoom.split("/")[1], {});
          }, 0.1);
        };
        _proto.exitGame = function exitGame() {
          ViewManager.instance.closePopGame("YxxMini");
        };
        _proto.showBigRecord = function showBigRecord(data) {
          var _this2 = this;
          if (data == "before") {
            //            //上一页
            this._curPoolPage = this._curPoolPage - 1;
            if (this._curPoolPage < 1) {
              this._curPoolPage = 1;
            }
            yxxGameCtrl.instance.SendData(eProto.getBigPoolList, {
              Page: this._curPoolPage
            });
            return;
          }
          if (data == "next") {
            //            //下一页
            this._curPoolPage = this._curPoolPage + 1;
            yxxGameCtrl.instance.SendData(eProto.getBigPoolList, {
              Page: this._curPoolPage
            });
            return;
          }
          Common.loadPopBuddle("prefab/YxxBigRecord", yxxGameCtrl.instance.bundle, function () {}, function (YxxBigRecord) {
            var bigRecord = instantiate(YxxBigRecord);
            ViewManager.instance.popNodeView(bigRecord, true);
            _this2._curPoolPage = 1;
            yxxGameCtrl.instance.SendData(eProto.getBigPoolList, {
              Page: 1
            });
          }, true);
        };
        _proto.updateRoom = function updateRoom(tableData, resultData) {
          AudioManager.instance.stopAll();
          AudioManager.instance.playGameMusic(this.bgMusic, true);
          this.clearRoom();
          this.initBet();
          if (tableData.EventID == yxxModel.instance.roomInfo._roomid) {
            //            //同一局
            if (tableData.RoomState == eRoomStatus.result && tableData.Results && !resultData) {
              yxxModel.instance.resultData = tableData.Results;
              this.showResult(tableData.Results);
            }
          } else {
            //            //下一局
            this.initGameData();
          }
          this.updateTableInfo(tableData);
        };
        _proto.clearRoom = function clearRoom() {
          this.djsProgress.node.active = false;
          yxxModel.instance._curCountDown = 0;
          this.unschedule(this.showCountDown);
        };
        _proto.clearAllRoom = function clearAllRoom() {
          this.clearRoom();
          this.initGameData();
        };
        _proto.initGameData = function initGameData() {
          this.unscheduleAllCallbacks();
          this.initBet();
          this.wanAni.active = true;
          this.wankong.active = false;
          for (var i = 0; i < 3; i++) {
            this.saList[i].active = false;
          }
          for (var _iterator = _createForOfIteratorHelperLoose(this.yxxYzlist), _step; !(_step = _iterator()).done;) {
            var node = _step.value;
            var pool = node;
            var _sp = pool.getChildByName("zhong");
            Tween.stopAllByTarget(_sp);
            _sp.getComponent(UIOpacity).opacity = 255;
            _sp.active = false;
            pool.getChildByName("yz_num").active = false;
            pool.getChildByName("yzself_num").active = false;
            var people = pool.getChildByName("people");
            people.getChildByName("txt_count").getComponent(Label).string = "0";
          }
          this.dajiangLayer.active = false;
          yxxModel.instance.resultData = null;
        };
        _proto.initBet = function initBet() {
          this.betList = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: []
          };
          this.betselfList = [];
          this.createBetList = [];
          this.clearSelfBetInfo();
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
        };
        _proto.clearSelfBetInfo = function clearSelfBetInfo() {
          var needSave = false;
          for (var i = 0; i < 6; i++) {
            if (yxxModel.instance.betself[i] > 0) {
              needSave = true;
              break;
            }
          }
          if (needSave) {
            for (var zTYpe = 0; zTYpe < 6; zTYpe++) {
              if (yxxModel.instance.betself[zTYpe] > 0) {
                yxxModel.instance.betselfLast[zTYpe] = yxxModel.instance.betself[zTYpe];
              } else {
                yxxModel.instance.betselfLast[zTYpe] = 0;
              }
            }
          }
          yxxModel.instance.betself = [0, 0, 0, 0, 0, 0];
          yxxModel.instance.betOther = [0, 0, 0, 0, 0, 0];
          yxxModel.instance.betOtherCount = [0, 0, 0, 0, 0, 0];
        };
        _proto.binkNode = function binkNode(node) {
          tween(node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }).union().repeatForever().start();
        };
        _proto.showAddScore = function showAddScore(text) {
          var addScore = find("game_node/addScore", this.node);
          //        // addScore.getChildByName("text").getComponent(cc.Label).string = "+" + Common.numFormat(text);

          addScore.getComponent(showToast).setTipsText("+" + Common.numFormat(text));
          addScore.active = true;
        };
        _proto.emitBet = function emitBet(resultData) {
          if (resultData.TotalBackYxb > 0) {
            this.showAddScore("" + resultData.TotalBackYxb);
          }
        };
        _proto.showResultAni = function showResultAni(Results) {
          if (!Results) {
            return;
          }
          for (var i = 0; i < 3; i++) {
            var result = parseInt(Results[i]) - 1;
            this.saList[i].getComponent(Sprite).spriteFrame = this.saSpriteF[result];
            this.saList[i].active = true;
            var _sp2 = this.yxxYzlist[result].getChildByName("zhong");
            _sp2.active = true;
            this.binkNode(_sp2);
          }
        };
        _proto.wanKai = function wanKai() {
          this.wanAni.active = false;
          this.wankong.active = true;
          this.kajiang.scale = v3(0, 0, 1);
          this.kajiang.getComponent(UIOpacity).opacity = 255;
          this.kajiang.active = true;
          // cc.tween(this.kajiang).to(0.5, { scale: 2 }).to(0.8, { opacity: 0 }).start();
          tween(this.kajiang).to(0.5, {
            scale: v3(2, 2.1)
          })
          // .to(0.8, { opacity: 0 })
          .start();
          tween(this.kajiang.getComponent(UIOpacity)).to(1, {
            opacity: 0
          }).start();
        };
        _proto.playResultSound = function playResultSound(IsPrizePool) {
          var _this3 = this;
          if (this.djsMId != null) ;
          AudioManager.instance.playOneShot(this.yxxSound[3]); // 第一阶段
          if (!IsPrizePool) {
            //            //不是大奖
            this.scheduleOnce(function () {
              AudioManager.instance.playOneShot(_this3.yxxSound[4]); // 第2阶段
            }, 2.3);
            this.scheduleOnce(function () {
              AudioManager.instance.playOneShot(_this3.yxxSound[5]); // 第3阶段
            }, 4);
          }
        };
        _proto.showResult = function showResult(resultData) {
          this.playResultSound(resultData.IsPrizePool);
          if (resultData.IsPrizePool) {
            this.showBigJiangResult(resultData.PrizeResult);
          }
          this.emitBet(resultData);
        };
        _proto.showBigJiangResult = function showBigJiangResult(TotalBackYxb) {
          var _this4 = this;
          this.scheduleOnce(function () {
            var dajiangLayer = _this4.dajiangLayer;
            dajiangLayer.active = true;
            dajiangLayer.getChildByName("score").active = false;
            var dajiangani_1 = dajiangLayer.getChildByName("teixao").getComponent(sp.Skeleton);
            dajiangani_1.setAnimation(0, "dalogo1", false);
            dajiangani_1.addAnimation(0, "dalogo2", true);
            _this4.scheduleOnce(function () {
              var dajiangLayer1 = _this4.dajiangLayer;
              dajiangLayer1.getChildByName("score").active = true;
              dajiangLayer1.getChildByName("score").getComponent(Label).string = Common.numFormat(TotalBackYxb);
            }, 0.5);
          }, 1);
        };
        _proto.betAniLast = function betAniLast(data, isSelf, index) {
          //        // gts.Debug.Log("========betAniLast===============");
          var HD_LastXiaZhu = data;
          var keys = Object.keys(HD_LastXiaZhu.XiaZhuResult);
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var i = _keys[_i];
            var step = Math.floor((HD_LastXiaZhu.XiaZhuResult[i].length + 15) / 15);
            for (var j = 0; j < HD_LastXiaZhu.XiaZhuResult[i].length; j += step) {
              this.betAni(parseInt(i), HD_LastXiaZhu.XiaZhuResult[i][j], isSelf, index);
            }
          }
        };
        _proto.betAni = function betAni(xzType, xiazhuzhi, isSelf, index) {
          if (index == -2) {
            return;
          }
          if (null != isSelf) {
            AudioManager.instance.playOneShot(this.yxxSound[1]);
          }
          var yxx_bg = this.yxxYzlist[xzType - 1];
          if (isSelf) {
            yxxModel.instance.betself[xzType - 1] += xiazhuzhi;
            yxx_bg.getChildByName("yzself_num").active = true;
            yxx_bg.getChildByName("yzself_num").getComponent(Label).string = Common.ChangeMoneyShow(yxxModel.instance.betself[xzType - 1], 2);
            yxxModel.instance.betOther[xzType - 1] += xiazhuzhi;
            yxx_bg.getChildByName("yz_num").active = true;
            yxx_bg.getChildByName("yz_num").getComponent(Label).string = Common.ChangeMoneyShow(yxxModel.instance.betOther[xzType - 1], 2);
            if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.BtnJiabei.node) == 0) {
              Common.setButtonEnableWithGray(this.BtnJiabei, true);
            }
          } else {
            yxxModel.instance.betOther[xzType - 1] += xiazhuzhi;
            yxx_bg.getChildByName("yz_num").active = true;
            yxx_bg.getChildByName("yz_num").getComponent(Label).string = Common.ChangeMoneyShow(yxxModel.instance.betOther[xzType - 1], 2);
          }
          yxxModel.instance.betOtherCount[xzType - 1]++;
          var people = yxx_bg.getChildByName("people");
          people.getChildByName("txt_count").getComponent(Label).string = yxxModel.instance.betOtherCount[xzType - 1] + "";
        };
        _proto.betIntoPool = function betIntoPool(sender, data) {
          if (!this.djsProgress.node.active) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          yxxGameCtrl.instance.sendDoingBet("" + data, "" + this._chip.count);
        };
        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        }
        //    /**
        //     *
        //     * @param data yxxGameDef.HD_RefreshPrizePool
        //     * @returns void
        //     */
        ;

        _proto.updatePool = function updatePool(data) {
          var label = this.gold_pool;
          if (data.CurInPool == 0) {
            this._poolNum = data.PrizePool;
            label.string = Common.numFormat(this._poolNum);
            return;
          }
          this._stepNum = Math.floor(data.CurInPool / 20);
          this._poolNum = data.PrizePool;
          this.schedule(this.addNum, 0.1);
        };
        _proto.addNum = function addNum() {
          var label = this.gold_pool;
          var cur = parseInt(label.string.replace(/,/g, ""));
          cur = cur + this._stepNum;
          if (cur > this._poolNum) {
            cur = this._poolNum;
            this.unschedule(this.addNum);
          }
          label.string = Common.numFormat(cur);
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != yxxGameCtrl.instance.BUNDLE) {
            return;
          }
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
          for (var _iterator3 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            if (i.count < minChip) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            _chip.scale = v3(0.8, 0.8, 1);
            _chip.getComponent(UITransform).width = 105;
            _chip.getComponent(UITransform).height = 105;
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, yxxGameCtrl.instance.BUNDLE);
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step4; !(_step4 = _iterator4()).done;) {
            var _i2 = _step4.value;
            var has = false;
            for (var _iterator5 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step5; !(_step5 = _iterator5()).done;) {
              var j = _step5.value;
              if (j.count == _i2.count) {
                has = true;
                break;
              }
            }
            if (has) {
              continue;
            }
            var _chip2 = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip2);
            _chip2.scale = v3(0.8, 0.8, 1);
            _chip2.getComponent(UITransform).width = 105;
            _chip2.getComponent(UITransform).height = 105;
            _chip2.getComponent(ChipItem).setData(_i2, ChipType.CHIP, yxxGameCtrl.instance.BUNDLE);
          }
          this.scheduleOnce(function () {
            var child = _this5.scrollViewCM.content.children[0];
            child.getComponent(ChipItem).moveUp();
            _this5.scrollViewCM.scrollToLeft();
          });
        };
        _proto.updateTableInfo = function updateTableInfo(data) {
          yxxModel.instance.roomInfo._curRoomStatus = data.RoomState;
          yxxModel.instance.roomInfo._roomid = data.EventID;
          this._curTotalTime = data.XiaZhuTime; //下注总时长

          //        // this.gold_pool.node.active = true;
          this.gold_pool.string = Common.numFormat(data.PrizePool);
          switch (yxxModel.instance.roomInfo._curRoomStatus) {
            case eRoomStatus.startGame:
              {
                //                //此时房间状态 是开始游戏
                this.wanAni.active = true;
                AudioManager.instance.playOneShot(this.yxxSound[0]);
                this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "wan", false);
                break;
              }
            case eRoomStatus.result:
            case eRoomStatus.yxxBet:
              {
                //                //此时房间状态 下注
                if (data.CountDown > 0) {
                  this.createCountDown(data.CountDown);
                  if (this.clock) {
                    this.clock.hideTime = false;
                    this.clock.changeColor = true;
                    this.clock.Open(data.CountDown + 1);
                  }
                }
                this.updateDeskInfo(data);
                break;
              }
          }
        };
        _proto.updateDeskInfo = function updateDeskInfo(data) {
          if (data.XiaZhuTotal.length > 0) {
            for (var _iterator6 = _createForOfIteratorHelperLoose(data.XiaZhuTotal), _step6; !(_step6 = _iterator6()).done;) {
              var betInfo = _step6.value;
              if (betInfo.Pos && betInfo.Money) {
                var i = parseInt(betInfo.Pos);
                var goldnum = betInfo.Money;

                //                    //添加筹码
                this.betAni(i, goldnum);
              }
            }
          }
        };
        _proto.createCountDown = function createCountDown(leftTime) {
          yxxModel.instance._curCountDown = leftTime;
          var per = yxxModel.instance._curCountDown / this._curTotalTime;
          this.djsProgress.node.active = true;
          this.djsProgress.progress = per;
          this._curTimes = sys.now();
          this.schedule(this.showCountDown, 0.1);
        };
        _proto.showCountDown = function showCountDown() {
          var now = sys.now();
          yxxModel.instance._curCountDown -= (now - this._curTimes) / 1000.0;
          this._curTimes = now;
          if (yxxModel.instance._curCountDown <= 3 && this.haveplay == false) {
            //            //倒计时音效
            this.haveplay = true;
            this.djsMId = AudioManager.instance.playOneShot(this.yxxSound[2]);
            ViewManager.instance.showCountDownTip(this.node.getChildByName("game_node"), Math.round(yxxModel.instance._curCountDown), "idle3", 25, -18);
          }
          var curPress = yxxModel.instance._curCountDown / this._curTotalTime;
          if (curPress < 0.000001) {
            curPress = 0;
          }
          this.djsProgress.progress = curPress;
          if (curPress < 0.000001) {
            this.haveplay = false;
            // cc.audioEngine.stopEffect(this.djsMId);
            this.djsProgress.node.active = false;
            this.unschedule(this.showCountDown);
          }
        };
        _proto.getDeskPlayerByPlayerList = function getDeskPlayerByPlayerList(data) {
          var redata = [];
          if (data.length == 0) {
            return redata;
          }
          var curData = data;
          for (var i = 0; i < curData.length; i++) {
            if (curData[i].UserID != DataManager.instance.getUserDataForKey(UserKey.OID)) {
              redata.push(curData[i]);
            }
            if (redata.length == 6) {
              break;
            }
          }
          return redata;
        };
        _proto.getLastIndexById = function getLastIndexById(id) {
          var index = -1;
          for (var i = 0; i < yxxModel.instance.curTablePlayer.length; i++) {
            if (yxxModel.instance.curTablePlayer[i].UserID == id) {
              index = i;
              break;
            }
          }
          return index;
        };
        _proto.initGame = function initGame() {
          this.wanAni.active = true;
          this.wankong.active = false;
          this.djsProgress.node.active = false;
          this.gold_pool.node.active = false;
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          Common.setButtonEnableWithGray(this.BtnLast, false);
          for (var i = 0; i < 6; i++) {
            var yxx_bg = this.yxxYzlist[i];
            yxx_bg.active = true;
            yxx_bg.getChildByName("zhong").active = false;
            yxx_bg.getChildByName("yz_num").active = false;
            yxx_bg.getChildByName("yzself_num").active = false;
          }
        };
        _proto.removeEvent = function removeEvent() {
          //        //button事件
          EventManager.off(ConfigManager.protocolYxx.yxxBetBtn, this.selectCM, this);
          //        // EventManager.instance.off(ConfigManager.instance.protocolYxx.yxxHaveBet, this.betIntoPool, this);

          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          EventManager.off(ConfigManager.protocolYxx.yxxLastYz1, this.LastBet, this);
          EventManager.off(ConfigManager.protocolYxx.yxxLastYz2, this.doubleBet, this);
          EventManager.off(ConfigManager.protocolYxx.yxxBigrecord, this.showBigRecord, this);
          EventManager.off(ConfigManager.protocolYxx.yxxJackpotHistory, this.showBigRecord, this);
          ProxyMgr.close(this);
          EventManager.off(eProto.HD_GetRoomInfo, this.enter, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          this.removeEvent();
        }
        //    //显示大奖记录
        //    // showJackpotHistory_update(data: yxxGameDef.HD_GetPrizeRecord) {
        ;

        _proto.showJackpotHistory = function showJackpotHistory(data) {
          if (data.JackpotCount == 0) return;
          var resultList = {
            1: "Bầu",
            2: "Cua",
            3: "Tôm",
            4: "Cá",
            5: "Gà",
            6: "Nai"
          };
          var xian9 = find("Canvas/YxxBigRecord/bg/content_bg/scrollView_content/view/xian9");
          var view = find("Canvas/YxxBigRecord/bg/content_bg/scrollView_content/view");
          find("Canvas/YxxBigRecord/bg/content_bg/page").getComponent(Label).string = "Trang:" + this._curPoolPage;
          if (this._curPoolPage == 1) {
            find("Canvas/YxxBigRecord/bg/before_btn").active = false;
          } else {
            find("Canvas/YxxBigRecord/bg/before_btn").active = true;
          }
          if (this._curPoolPage < data.JackpotCount) {
            find("Canvas/YxxBigRecord/bg/next_btn").active = true;
          } else {
            find("Canvas/YxxBigRecord/bg/next_btn").active = false;
          }
          for (var i = 0; i < 6; i++) {
            var m = i + 1;
            var label_pre = find("Canvas/YxxBigRecord/bg/label_pre" + m);
            if (!isValid(label_pre)) continue;
            label_pre.getComponent(Label).string = data[m] + "%";
          }
          var JackpotRecord = data.JackpotRecord;
          var item = find("Canvas/YxxBigRecord/bg/content_bg/scrollView_content/view/content/item");
          //        //期号
          item.getChildByName("gameId").getComponent(Label).string = JackpotRecord.JackpotNo;
          //        //创建时间
          var date = Common.getTimeFormat(JackpotRecord.CreateTime);
          item.getChildByName("time_date").getComponent(Label).string = date.date;
          item.getChildByName("time_scond").getComponent(Label).string = date.time;
          item.getChildByName("lbl_result").getComponent(Label).string = resultList[JackpotRecord.Result];
          item.getChildByName("lbl_bigmoney").getComponent(Label).string = Common.numFormat(JackpotRecord.PoolVal);
          var node_prize = find("node_prize", item);
          node_prize.removeAllChildren();
          var addPrizeItem = function addPrizeItem(name, results) {
            if (name === void 0) {
              name = null;
            }
            if (results === void 0) {
              results = null;
            }
            var sub_prize = find("Canvas/YxxBigRecord/bg/content_bg/sub_prize");
            var sub_item = instantiate(sub_prize);
            sub_item.active = true;
            sub_item.parent = node_prize;
            var lbl_name = find("lbl_name", sub_item);
            lbl_name.getComponent(Label).string = "...";
            var lbl_money = find("lbl_money", sub_item);
            lbl_money.getComponent(Label).string = "";
            if (name && results) {
              lbl_name.getComponent(Label).string = name;
              lbl_money.getComponent(Label).string = Common.ChangeMoneyShow(results, 2);
            }
          };
          var btn_details = find("btn_details", item);
          btn_details.targetOff(this);
          btn_details.active = false;
          if (JackpotRecord.PrizeList) {
            var subList = JackpotRecord.PrizeList.slice(0, 4);
            for (var _iterator7 = _createForOfIteratorHelperLoose(subList), _step7; !(_step7 = _iterator7()).done;) {
              var prizeInfo = _step7.value;
              addPrizeItem(prizeInfo.Name, prizeInfo.Results);
            }
            if (JackpotRecord.PrizeList.length > 4) {
              addPrizeItem();
              btn_details.active = true;
            }
          }
          var layout = node_prize.getComponent(Layout);
          layout.updateLayout();
          item.getComponent(UITransform).height = node_prize.getComponent(UITransform).height;
          xian9.getComponent(UITransform).width = node_prize.getComponent(UITransform).height;
          btn_details.on(Node.EventType.TOUCH_END, function (event) {
            btn_details.active = false;
            node_prize.removeAllChildren();
            if (JackpotRecord.PrizeList) {
              for (var _iterator8 = _createForOfIteratorHelperLoose(JackpotRecord.PrizeList), _step8; !(_step8 = _iterator8()).done;) {
                var _prizeInfo = _step8.value;
                addPrizeItem(_prizeInfo.Name, _prizeInfo.Results);
              }
            }
            var layout = node_prize.getComponent(Layout);
            layout.updateLayout();
            item.getComponent(UITransform).height = node_prize.getComponent(UITransform).height;
            xian9.getComponent(UITransform).width = node_prize.getComponent(UITransform).height > view.getComponent(UITransform).height ? view.getComponent(UITransform).height : node_prize.getComponent(UITransform).height;
          }, this);
        }
        //    //IView
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.deskinfo:
              {
                //                // 桌子信息
                Common.showLog("刷新桌子信息");
                this.updateTableInfo(data);
                break;
              }
            case eProto.updatePlayerStatus:
              {
                //                // 刷新玩家状态
                var updatePlayerInfo = data;
                Common.setButtonEnableWithGray(this.BtnLast, this.isLastEnable);
                if (updatePlayerInfo.ChipsList != null) {
                  ChipProxy.initChipList(updatePlayerInfo.ChipsList);
                  this.createChipsList();
                }

                //                //自己的下注信息
                if (updatePlayerInfo.BetInfos) {
                  yxxModel.instance.betself = [0, 0, 0, 0, 0, 0];
                  for (var _iterator9 = _createForOfIteratorHelperLoose(updatePlayerInfo.BetInfos), _step9; !(_step9 = _iterator9()).done;) {
                    var betInfo = _step9.value;
                    var i = parseInt(betInfo.Pos);
                    var goldnum = betInfo.Money;
                    yxxModel.instance.betself[i - 1] += goldnum;
                    if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.BtnJiabei.node) == 0) {
                      Common.setButtonEnableWithGray(this.BtnJiabei, true);
                    }
                    var yxx_bg = this.yxxYzlist[i - 1];
                    yxx_bg.getChildByName("yzself_num").active = true;
                    yxx_bg.getChildByName("yzself_num").getComponent(Label).string = Common.ChangeMoneyShow(yxxModel.instance.betself[i - 1], 2);
                  }
                }
                break;
              }
            case eProto.updatePool:
              {
                //                // 刷新奖池
                this.updatePool(data);
                break;
              }
            case eProto.updateRoomStatus:
              {
                var CountDown = data.CountDown;

                //                // 刷新房间状态
                switch (yxxModel.instance.roomInfo._curRoomStatus) {
                  case eRoomStatus.startGame:
                    {
                      //                        //此时房间状态 是开始游戏
                      this.initGameData();
                      Common.setButtonEnableWithGray(this.BtnLast, this.isLastEnable);
                      this.wanAni.active = true;
                      AudioManager.instance.playSound(this.yxxSound[0], false);
                      this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "wan", false);
                      this.clock.changeColor = false;
                      this.clock.hideTime = true;
                      break;
                    }
                  case eRoomStatus.yxxBet:
                    {
                      //                        //此时房间状态 下注
                      this.createCountDown(CountDown);
                      if (this.clock) {
                        this.clock.hideTime = false;
                        this.clock.changeColor = true;
                        this.clock.Open(CountDown + 1);
                      }
                      break;
                    }
                  case eRoomStatus.result:
                    {
                      //                        //此时房间状态 结算
                      yxxModel.instance._curCountDown = 0;
                      this.clock.changeColor = false;
                      this.clock.hideTime = true;
                      break;
                    }
                }
                break;
              }
            case eProto.updateResult:
              {
                //                // gts.Debug.Log("===updateResult===" + JSON.stringify(data));

                //                // 结算
                this.showResult(data);
                break;
              }
            case eProto.HD_OpenResult:
              {
                this.wanKai();
                this.showResultAni(data);
                break;
              }
            case eProto.DoubleXZ:
              {
                //                // 双倍下注
                var emitData = data;
                this.betAniLast(emitData.HD_DoubleXiaZhu, emitData.isSelf, emitData.index);
                break;
              }
            case eProto.LastXZ:
              {
                //                // 上次下注
                var _emitData = data;
                this.betAniLast(_emitData.HD_LastXiaZhu, _emitData.isSelf, _emitData.index);
                break;
              }
            case eProto.YxxBet:
              {
                //                // 下注
                var _emitData2 = data;

                //                // //务端发送的下注金额 不对
                //                // let lastValue = 100;
                //                // let keys = Object.keys(yxxGameDef.CMList);
                //                // for (const keyValue of keys) {
                //                //     let curValue = parseInt(keyValue);
                //                //     if (curValue > emitData.xiazhuzhi) {
                //                //         emitData.xiazhuzhi = lastValue;
                //                //         break;
                //                //     }
                //                //     lastValue = curValue;
                //                // }

                this.betAni(_emitData2.xzType, _emitData2.xiazhuzhi, _emitData2.isSelf, _emitData2.index);
                break;
              }
            case eProto.getBigPoolList:
              {
                //                // 获取大奖记录
                this.showJackpotHistory(data);
                break;
              }
            //            // case yxxGameDef.eProto.getRecordDetails: {
            //            //     // 获取游戏开奖记录
            //            //     this.showRecordByData(data);
            //            //     break;
            //            // }
            case eProto.getPlayerList:
              {
                //                // 获取玩家列表
                break;
              }
            case eProto.exitRoom:
              {
                //                //退出房间
                this.exitGame();
                break;
              }
            case eProto.checkInRoom:
              {
                //                // 检查是否再房间
                var _emitData3 = data;
                if (_emitData3.isInGame) {
                  //                    //在房间，需要重连
                  this.updateRoom(_emitData3.tableData, _emitData3.resultData);
                } else {
                  NetManager.instance.waitServiceSendData();
                  this.exitGame();
                }
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
        _proto.LastBet = function LastBet() {
          var _this6 = this;
          for (var index = 0; index < 6; index++) {
            var vBet = yxxModel.instance.betselfLast[index];
            if (vBet > 0) {
              if (!yxxGameCtrl.instance.sendDoingBet("" + (index + 1), "" + vBet)) {
                return;
              }
            }
          }
          Common.setButtonEnableWithGray(this.BtnLast, false);
          tween(this.BtnLast.node).delay(2).call(function () {
            Common.setButtonEnableWithGray(_this6.BtnLast, true);
          }).start();
        };
        _proto.doubleBet = function doubleBet() {
          var _this7 = this;
          for (var index = 0; index < 6; index++) {
            var vBet = yxxModel.instance.betself[index];
            if (vBet > 0) {
              if (!yxxGameCtrl.instance.sendDoingBet("" + (index + 1), "" + vBet)) {
                return;
              }
            }
          }
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          tween(this.BtnJiabei.node).delay(2).call(function () {
            Common.setButtonEnableWithGray(_this7.BtnJiabei, true);
          }).start();
        };
        _createClass(YxxGameMiniView, [{
          key: "isLastEnable",
          get: function get() {
            if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.BtnLast.node) > 0) {
              return false;
            }
            for (var index = 0; index < 6; index++) {
              if (yxxModel.instance.betselfLast[index] > 0) {
                return true;
              }
            }
            return false;
          }
        }]);
        return YxxGameMiniView;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "yxxYzlist", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "djsProgress", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wanAni", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "wankong", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "kajiang", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "saList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "saSpriteF", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gold_pool", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "yxxSound", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "dajiangLayer", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "clock", [_dec18], {
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

System.register("chunks:///_virtual/yxxGameRuleMD5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PlatformMgr.ts'], function (exports) {
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
      cclegacy._RF.push({}, "5db91ucsmdHHqF4qMaRpyJc", "yxxGameRuleMD5", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var yxxGameRuleMD5 = exports('default', (_dec = ccclass("YxxGameRuleMD5"), _dec2 = menu("game/Yxxgame/yxxGameRuleMD5"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(yxxGameRuleMD5, _Component);
        function yxxGameRuleMD5() {
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
        var _proto = yxxGameRuleMD5.prototype;
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
        return yxxGameRuleMD5;
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
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/YxxGameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './yxxGameDef.ts', './GameDef.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, isValid, error, instantiate, UIOpacity, tween, Component, NetManager, ViewManager, Common, Event, GameDef, MainManager;
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
      isValid = module.isValid;
      error = module.error;
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
      Event = module.Event;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a580cq3P3VF1qqOCSRuXqWj", "YxxGameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var YxxGameScene = exports('default', (_dec = ccclass("YxxGameScene"), _dec2 = menu("game/Yxxgame/YxxGameScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(YxxGameScene, _Component);
        function YxxGameScene() {
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
          _this._bundle = null;
          _this.viewLoadVersion = 0;
          return _this;
        }
        var _proto = YxxGameScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          this.preload();
          this.onLoadHall();
        };
        _proto.preload = function preload() {
          this._bundle = assetManager.bundles.get(GameDef.Game.Yxxgame);
          if (this._bundle) {
            this._bundle.preloadDir("prefab");
          }
        };
        _proto.onEnable = function onEnable() {
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(Event.onLoadHall, this.onLoadHall, this);
          EventManager.on(Event.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          this.viewLoadVersion++;
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(Event.onLoadHall, this.onLoadHall, this);
          EventManager.off(Event.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDestroy = function onDestroy() {};
        _proto.onLoadHall = function onLoadHall() {
          var _this2 = this;
          var version = ++this.viewLoadVersion;
          console.time("bundle.onLoadHall");
          Common.showWait();
          if (!this.prefab_hall) {
            this._bundle.load("prefab/ui_hall", Prefab, function (cur, total) {}, function (err, prefab) {
              // 只允许最后一次界面切换生效，避免退出后旧请求重新打开房间。
              if (!isValid(_this2, true) || version !== _this2.viewLoadVersion) return;
              if (err || !prefab) {
                error("Yxxgame 大厅加载失败", err);
                Common.closeWait();
                return;
              }
              _this2.prefab_hall = prefab;
              _this2.showHall();
            });
          } else {
            this.showHall();
          }
        };
        _proto.showHall = function showHall() {
          var _this3 = this;
          var version = this.viewLoadVersion;
          if (this.prefab_hall) {
            if (!this._node_hall) {
              this._node_hall = instantiate(this.prefab_hall);
              this.node.addChild(this._node_hall);
            }
            this._node_hall.getComponent(UIOpacity).opacity = 0;
            tween(this._node_hall.getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).call(function () {
              if (!isValid(_this3, true) || version !== _this3.viewLoadVersion) return;
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
          var version = ++this.viewLoadVersion;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            this._bundle.load("prefab/ui_game", Prefab, function (cur, total) {}, function (err, prefab) {
              if (!isValid(_this4, true) || version !== _this4.viewLoadVersion) return;
              if (err || !prefab) {
                error("Yxxgame 房间加载失败", err);
                Common.closeWait();
                return;
              }
              _this4.prefab_game = prefab;
              _this4.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this5 = this;
          var version = this.viewLoadVersion;
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
              if (!isValid(_this5, true) || version !== _this5.viewLoadVersion) return;
              if (_this5._node_hall) {
                _this5._node_hall.removeFromParent();
                _this5._node_hall.destroy();
                _this5._node_hall = null;
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
        return YxxGameScene;
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

System.register("chunks:///_virtual/YxxGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './yxxGameCtrl.ts', './yxxGameDef.ts', './yxxModel.ts', './I18n.ts', './ProxyMgr.ts', './GameDef.ts', './BtnArea.ts', './GUtil.ts', './UIClock.ts', './PlatformMgr.ts', './BlackWordProxy.ts', './ChipProxy.ts', './ChatProxy.ts', './ChipItem.ts', './ChipSmall.ts', './yxxChipObject.ts', './MainManager.ts', './YxxshowRecord.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _extends, _createClass, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Label, ProgressBar, RichText, SpriteFrame, ScrollView, Prefab, AudioClip, assetManager, v2, color, sp, isValid, instantiate, NodePool, resources, error, find, UITransform, Tween, UIOpacity, tween, Sprite, v3, TweenSystem, Vec3, sys, AnimationClip, Animation, SpriteAtlas, Layout, AudioManager, DataManager, UserKey, NetManager, ViewManager, Common, yxxGameCtrl, eProto, eRoomStatus, Event, MAX_CHIP_REWARD, yxxModel, i18n, ProxyMgr, GameDef, BtnArea, GUtil, UIClock, PlatformMgr, BlackWordProxy, ChipProxy, ChipEvent, ChipType, ChatProxy, ChatProxyEvent, ChipItem, ChipSmall, chipObject, MainManager, YxxshowRecord;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
      _createClass = module.createClass;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      RichText = module.RichText;
      SpriteFrame = module.SpriteFrame;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      assetManager = module.assetManager;
      v2 = module.v2;
      color = module.color;
      sp = module.sp;
      isValid = module.isValid;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      resources = module.resources;
      error = module.error;
      find = module.find;
      UITransform = module.UITransform;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Sprite = module.Sprite;
      v3 = module.v3;
      TweenSystem = module.TweenSystem;
      Vec3 = module.Vec3;
      sys = module.sys;
      AnimationClip = module.AnimationClip;
      Animation = module.Animation;
      SpriteAtlas = module.SpriteAtlas;
      Layout = module.Layout;
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
      yxxGameCtrl = module.yxxGameCtrl;
    }, function (module) {
      eProto = module.eProto;
      eRoomStatus = module.eRoomStatus;
      Event = module.Event;
      MAX_CHIP_REWARD = module.MAX_CHIP_REWARD;
    }, function (module) {
      yxxModel = module.yxxModel;
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
      UIClock = module.default;
    }, function (module) {
      PlatformMgr = module.default;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
      ChipType = module.ChipType;
    }, function (module) {
      ChatProxy = module.default;
      ChatProxyEvent = module.ChatProxyEvent;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      chipObject = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      YxxshowRecord = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29;
      cclegacy._RF.push({}, "ad13c+Dr31MB60phCmOeC0y", "YxxGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var YxxGameView = exports('default', (_dec = ccclass("YxxGameView"), _dec2 = menu("game/Yxxgame/YxxGameView"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(ProgressBar), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Label), _dec21 = property(RichText), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(SpriteFrame), _dec26 = property(ScrollView), _dec27 = property(Prefab), _dec28 = property(Prefab), _dec29 = property(AudioClip), _dec30 = property(AudioClip), _dec31 = property(UIClock), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(YxxGameView, _GameDef$BaseView);
        function YxxGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BtnLast", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BtnJiabei", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "players", _descriptor3, _assertThisInitialized(_this));
          _this._playersPos = [];
          _initializerDefineProperty(_this, "selfHead", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerPublic", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerself", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yxxYzlist", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yxxYzPool", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djsProgress", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "renAni", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wanAni", _descriptor13, _assertThisInitialized(_this));
          //    //md5信息栏
          _initializerDefineProperty(_this, "tiao", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5Key", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5Result", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lab_game_No", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_pumping", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wankong", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "kajiang", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saList", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saSpriteF", _descriptor23, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // daJiangAni: cc.Node = null;
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "helpView", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgMusic", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yxxSound", _descriptor28, _assertThisInitialized(_this));
          //    // @property(cc.SpriteFrame)
          //    // recordIma: cc.SpriteFrame[] = [];
          //    // @property(cc.Prefab)
          //    // item: cc.Prefab = null;
          _initializerDefineProperty(_this, "clock", _descriptor29, _assertThisInitialized(_this));
          //    //筹码分发相关
          _this.betList = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: []
          };
          _this.betselfList = [];
          _this.betPublicList = [];
          //{item:,yzType:1}
          _this.createBetList = [];
          //    //此分包
          _this._buddle = void 0;
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
          _this.chipPoolReady = false;
          _this.chipPoolLoading = false;
          _this.pendingChipBets = [];
          _this.isFirst = false;
          _this._curTimes = 0;
          _this.isUpdateDeskPlayer = false;
          return _this;
        }
        var _proto = YxxGameView.prototype;
        _proto.onLoad = function onLoad() {
          this.isFirst = true;
          this._buddle = assetManager.getBundle("Yxxgame");
          this.initChipPool();
          _GameDef$BaseView.prototype.onLoad.call(this, yxxGameCtrl.instance);
          NetManager.instance.waitServiceSendData();
          this.initEvent();
          this.initGame();
          yxxGameCtrl.instance.SendData(eProto.getInfo, {});
          AudioManager.instance.playGameMusic(this.bgMusic, true);
          this.setPlayerPos();
        };
        _proto.setPlayerPos = function setPlayerPos() {
          for (var i = 0; i < this.players.length; i++) {
            this._playersPos[i] = v2(this.players[i].position.x, this.players[i].position.y);
          }
        };
        _proto.start = function start() {
          var _this2 = this;
          //        //添加聊天
          ViewManager.instance.addChatView("yxx", this, yxxModel.instance.curTableID);
          this.clock.setLabelColor(color(246, 236, 78, 255), color(255, 0, 0, 255));
          //        // //添加 菜单
          //        // ViewManager.instance.addBtnMenu(
          //        //     {
          //        //         _curBundle: this._buddle,
          //        //         _helpViewPath: "prefab/YxxHelp",
          //        //         returnDelegate: () => {
          //        //             yxxGameCtrl.instance.Send_ExitRoom();
          //        //             cc.tween(this.node)
          //        //                 .delay(0.5)
          //        //                 .call(() => {
          //        //                     this.exitGame();
          //        //                 })
          //        //                 .start();
          //        //         },
          //        //         recordDelegate: () => {
          //        //             GUtil.openRecord("yxx");
          //        //         },
          //        //     },
          //        //     this
          //        // );

          this.schedule(this.updateDeskPlayer, 1.0);
          var path = "spine/" + yxxModel.instance.curBankerID;
          Common.loadHeguanByType(this.renAni.getComponent(sp.Skeleton), assetManager.bundles.get(GameDef.Game.Yxxgame), path).then(function () {
            if (isValid(_this2.renAni)) _this2.renAni.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
          });
        };
        _proto.onDestroy = function onDestroy() {
          var _this$_chipPool;
          _GameDef$BaseView.prototype.onDestroy.call(this);
          this.pendingChipBets = [];
          (_this$_chipPool = this._chipPool) == null || _this$_chipPool.clear();
        };
        _proto.getChipNode = function getChipNode(chipInfo) {
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
              error("Yxxgame chip load failed", err);
              return;
            }
            for (var i = 0; i < 50; i++) {
              var newNode = instantiate(prefab);
              //                // newNode.scale = 0.8;
              _this3._chipPool.put(newNode);
            }
            _this3.chipPoolReady = true;
            var pending = _this3.pendingChipBets;
            _this3.pendingChipBets = [];
            // 金额在收到下注时已累计，补显示不得再次累计；新快照会清空旧请求。
            if (yxxModel.instance.roomInfo._curRoomStatus == eRoomStatus.yxxBet) {
              for (var _iterator = _createForOfIteratorHelperLoose(pending), _step; !(_step = _iterator()).done;) {
                var config = _step.value;
                _this3.renderChipBet(_extends({}, config, {
                  needAni: false
                }));
              }
            }
          });
        };
        _proto.initEvent = function initEvent() {
          var _this4 = this;
          //        //button事件
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.protocolYxx.yxxBetBtn, this.selectCM, this);
          //        // EventManager.instance.on(ConfigManager.instance.protocolYxx.yxxHaveBet, this.betIntoPool, this);

          EventManager.on(ConfigManager.protocolYxx.YxxplayerInfo, this.showInfo, this);
          EventManager.on(ConfigManager.protocolYxx.YxxPublic, this.showAllPlayerInfo, this);
          EventManager.on(ConfigManager.protocolYxx.yxxBigrecord, this.showBigRecord, this);
          EventManager.on(ConfigManager.protocolYxx.yxxJackpotHistory, this.showBigRecord, this);
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          EventManager.on(ConfigManager.protocolYxx.yxxrecord, this.showRecord, this);
          this.BindAreaBtns();
          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);

          //        //注册分发事件
          EventManager.on(ConfigManager.protocolYxx.yxxLastYz1, this.LastBet, this);
          EventManager.on(ConfigManager.protocolYxx.yxxLastYz2, this.doubleBet, this);
          yxxGameCtrl.instance.reqPumping();
          ChatProxy.on(ChatProxyEvent.RECV_MSG, function (data) {
            _this4.showPlayerChat(data.msg, yxxModel.instance.curTablePlayer);
          }, this);
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.gameShow = function gameShow() {
          Common.showLog("前台");
          this.scheduleOnce(function () {
            yxxGameCtrl.instance.SendData(ConfigManager.protocolHall.getWallet, {});
            // yxxGameCtrl.instance.SendData(yxxModel.instance.roomInfo._serverID + "/" + yxxGameDef.eProto.checkInRoom.split("/")[1], {});
            yxxGameCtrl.instance.SendData(eProto.getInfo, {});
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
        _proto.getPlayerDataByPage = function getPlayerDataByPage() {
          var data = [];
          var redata = yxxModel.instance.AllPlayerinfo.PlayerList;
          var start = (this._PlayerPage - 1) * 12 + 1;
          var end = this._PlayerPage * 12;
          for (var i = 0; i < redata.length; i++) {
            if (i >= start - 1 && i <= end - 1) {
              data.push(redata[i]);
            }
          }
          return data;
        };
        _proto.exitGame = function exitGame() {
          EventManager.emit(Event.onLoadHall);
        };
        _proto.showPublicInfoByPage = function showPublicInfoByPage() {
          var data = yxxModel.instance.AllPlayerinfo;
          var list = [];
          for (var _iterator2 = _createForOfIteratorHelperLoose(data.PlayerList), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            var item = {
              head: i.Head,
              gold: i.Yxb,
              name: i.Name
            };
            list.push(item);
          }
          GUtil.openUserList(list);
        };
        _proto.showAllPlayerInfo = function showAllPlayerInfo(strCode) {
          yxxGameCtrl.instance.SendData(yxxModel.instance.roomInfo._serverID + "/" + eProto.getPlayerList.split("/")[1], {});
        };
        _proto.showDeskPlayerInfo = function showDeskPlayerInfo(data) {
          if (data == "self") {
            var playerInfo = {
              Name: DataManager.instance.getUserDataForKey(UserKey.NICKNAME),
              Yxb: DataManager.instance.getUserDataForKey(UserKey.GOLD),
              Head: DataManager.instance.getUserDataForKey(UserKey.AVATAR)
            };
            this.showPlayerInfo(playerInfo);
          } else {
            var i = parseInt(data);
            this.showPlayerInfo(yxxModel.instance.curTablePlayer[i - 1]);
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
        _proto.showRecord = function showRecord() {
          var _this5 = this;
          var recordLayer = find("Canvas/pathLayer");
          if (recordLayer) {
            recordLayer.getComponent(UITransform).priority = 20000;
            recordLayer.active = true;
          } else {
            this._buddle.load("prefab/pathLayer", function (err, prefab) {
              if (!err && prefab) {
                recordLayer = instantiate(prefab);
                recordLayer.getComponent(YxxshowRecord).isMd5 = _this5.tiao.active;
                recordLayer.getComponent(UITransform).priority = 20000;
                recordLayer.parent = _this5.node;
                recordLayer.active = true;
              }
            });
          }
        };
        _proto.showBigRecord = function showBigRecord(data) {
          var _this6 = this;
          if (data == "before") {
            //            //上一页
            this._curPoolPage = this._curPoolPage - 1;
            if (this._curPoolPage < 1) {
              this._curPoolPage = 1;
            }
            yxxGameCtrl.instance.SendData(eProto.getBigPoolList, {
              Page: this._curPoolPage
            });
            return;
          }
          if (data == "next") {
            //            //下一页
            this._curPoolPage = this._curPoolPage + 1;
            yxxGameCtrl.instance.SendData(eProto.getBigPoolList, {
              Page: this._curPoolPage
            });
            return;
          }
          Common.loadPopBuddle("prefab/YxxBigRecord", this._buddle, function () {}, function (YxxBigRecord) {
            var bigRecord = instantiate(YxxBigRecord);
            ViewManager.instance.popNodeView(bigRecord, true);
            _this6._curPoolPage = 1;
            yxxGameCtrl.instance.SendData(eProto.getBigPoolList, {
              Page: 1
            });
          }, true);
        };
        _proto.updateRoom = function updateRoom(tableData, resultData) {
          AudioManager.instance.stopAll();
          AudioManager.instance.playGameMusic(this.bgMusic, true);
          this.clearRoom();
          if (tableData.EventID == yxxModel.instance.roomInfo._roomid) {
            //            //同一局
            if (tableData.RoomState == eRoomStatus.result && tableData.Results && !resultData) {
              yxxModel.instance.resultData = tableData.Results;
              this.showResult(tableData.Results);
            }
          } else {
            //            //下一局
            this.initGameData();
          }
          this.updateTableInfo(tableData);
          this.showPlayers();
        };
        _proto.clearRoom = function clearRoom() {
          this.djsProgress.node.active = false;
          yxxModel.instance._curCountDown = 0;
          this.unschedule(this.showCountDown);

          // 先通过下注记录归还节点；提前移除父节点会让 initBet 跳过回收。
          this.initBet();
        };
        _proto.clearAllRoom = function clearAllRoom() {
          this.clearRoom();
          this.initGameData();
        };
        _proto.initGameData = function initGameData(delay) {
          var _this7 = this;
          if (delay === void 0) {
            delay = 0;
          }
          Common.showLog("清除上一轮状态");
          this.unscheduleAllCallbacks();
          this.initBet();
          this.wanAni.active = false;
          Common.showLog("66666");
          this.scheduleOnce(function () {
            for (var i = 0; i < 3; i++) {
              _this7.saList[i].active = false;
            }
          }, delay);
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.yxxYzlist), _step3; !(_step3 = _iterator3()).done;) {
            var node = _step3.value;
            var pool = node;
            var _sp = pool.getChildByName("zhong");
            Tween.stopAllByTarget(_sp);
            Tween.stopAllByTarget(_sp.getComponent(UIOpacity));
            _sp.getComponent(UIOpacity).opacity = 255;
            _sp.active = false;
            pool.getChildByName("yz_num").active = false;
            pool.getChildByName("yzself_num").active = false;
          }
          yxxModel.instance.resultData = null;
          this.schedule(this.updateDeskPlayer, 1.0);
        };
        _proto.initBet = function initBet() {
          this.pendingChipBets = [];
          for (var _i = 0, _Object$entries = Object.entries(this.betList); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              i = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            for (var j = 0; j < value.length; j++) {
              var item = value[j].item;
              if (item && item.parent) {
                Tween.stopAllByTarget(item);
                var opacity = item.getComponent(UIOpacity);
                if (opacity) Tween.stopAllByTarget(opacity);
                this._chipPool.put(item);
              }
            }
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.betselfList), _step4; !(_step4 = _iterator4()).done;) {
            var betInfo = _step4.value;
            var _item = betInfo.item;
            if (_item && _item.parent) {
              Tween.stopAllByTarget(_item);
              var _opacity = _item.getComponent(UIOpacity);
              if (_opacity) Tween.stopAllByTarget(_opacity);
              this._chipPool.put(_item);
            }
          }
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.betPublicList), _step5; !(_step5 = _iterator5()).done;) {
            var _betInfo = _step5.value;
            var _item2 = _betInfo.item;
            if (_item2 && _item2.parent) {
              Tween.stopAllByTarget(_item2);
              var _opacity2 = _item2.getComponent(UIOpacity);
              if (_opacity2) Tween.stopAllByTarget(_opacity2);
              this._chipPool.put(_item2);
            }
          }
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.createBetList), _step6; !(_step6 = _iterator6()).done;) {
            var _betInfo2 = _step6.value;
            var _item3 = _betInfo2;
            if (_item3 && _item3.parent) {
              Tween.stopAllByTarget(_item3);
              var _opacity3 = _item3.getComponent(UIOpacity);
              if (_opacity3) Tween.stopAllByTarget(_opacity3);
              this._chipPool.put(_item3);
            }
          }
          this.betList = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: []
          };
          this.betselfList = [];
          this.betPublicList = []; //{item:,yzType:1}
          this.createBetList = [];
          this.clearSelfBetInfo();
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
        };
        _proto.clearSelfBetInfo = function clearSelfBetInfo() {
          var needSave = false;
          for (var i = 0; i < 6; i++) {
            if (yxxModel.instance.betself[i] > 0) {
              needSave = true;
              break;
            }
          }
          if (needSave) {
            for (var zTYpe = 0; zTYpe < 6; zTYpe++) {
              if (yxxModel.instance.betself[zTYpe] > 0) {
                yxxModel.instance.betselfLast[zTYpe] = yxxModel.instance.betself[zTYpe];
              } else {
                yxxModel.instance.betselfLast[zTYpe] = 0;
              }
            }
          }
          yxxModel.instance.betself = [0, 0, 0, 0, 0, 0];
          yxxModel.instance.betOther = [0, 0, 0, 0, 0, 0];
        };
        _proto.binkNode = function binkNode(node) {
          Tween.stopAllByTarget(node.getComponent(UIOpacity));
          tween(node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }).union().repeatForever().start();
        };
        _proto.emitBet = function emitBet(resultData) {
          var _this8 = this;
          this.pendingChipBets = [];
          //        //筹码回收shou cm
          for (var i = 0; i < this.yxxYzPool.length; i++) {
            var havezhong = false;

            //            //是否中奖
            var keys = Object.keys(resultData.Results);
            for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
              var j = _keys[_i2];
              if (parseInt(resultData.Results[j]) == i + 1) {
                havezhong = true;
                break;
              }
            }
            if (havezhong == false) {
              //                //没中奖-筹码回收
              var player = this.yxxYzPool[i];
              var _loop = function _loop() {
                var childNode = _step7.value;
                // put 会立即修改 children，必须遍历快照以免漏回收。
                var nodeArr = childNode.children.slice();
                var pos = {
                  xx: player.getComponent(UITransform).width / 2,
                  yy: player.getComponent(UITransform).height / 2
                };
                var world = _this8.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, -35));
                var posren = player.getComponent(UITransform).convertToNodeSpaceAR(world);
                nodeArr.forEach(function (node, index) {
                  if (index > MAX_CHIP_REWARD) {
                    _this8._chipPool.put(node);
                    return;
                  }
                  tween(node).to(0.3, {
                    position: v3(pos.xx, pos.yy)
                  }).to(0.3, {
                    position: v3(pos.xx, pos.yy + index * 2)
                  }).to(0.5, {
                    position: posren,
                    scale: v3(1, 1, 1)
                  }).call(function () {
                    _this8._chipPool.put(node);
                  }).start();
                  tween(node.getComponent(UIOpacity)).delay(0.6).to(0.3, {
                    opacity: 255
                  }).start();
                });
              };
              for (var _iterator7 = _createForOfIteratorHelperLoose(player.children), _step7; !(_step7 = _iterator7()).done;) {
                _loop();
              }
            }
          }
          this.scheduleOnce(function () {
            //            //发筹码 {item:CMnode,yztype:xzType}
            for (var _i3 = 0, _Object$entries2 = Object.entries(_this8.betList); _i3 < _Object$entries2.length; _i3++) {
              var _Object$entries2$_i = _Object$entries2[_i3],
                _i4 = _Object$entries2$_i[0],
                value = _Object$entries2$_i[1];
              var num = 0;
              var _loop2 = function _loop2() {
                  var obj = value[j];
                  var count = _this8.getNumBet(obj.yztype, resultData.Results);
                  if (count > 0) {
                    num = num + 1;
                    if (num > MAX_CHIP_REWARD) {
                      _this8._chipPool.put(obj.item);
                      return 1; // continue
                    }

                    var yzpool = _this8.yxxYzPool[parseInt(obj.yztype) - 1];
                    var _player = _this8.players[parseInt(_i4) - 1];
                    var positionNode = _player.getChildByName("img_1");
                    var world = positionNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                    var world2 = _player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posren2 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world2);
                    tween(obj.item).to(0.3, {
                      position: v3(posren.x, posren.y + (num - 1) * 2)
                    })
                    // .to(0.6 + num * 0.05, { opacity: 255 })
                    .delay(0.6 + num * 0.05).to(0.3, {
                      position: posren2
                    }).call(function () {
                      _this8._chipPool.put(obj.item);
                    }).start();
                    var worldren = _this8.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, -35));
                    var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                    var maxCount = count > MAX_CHIP_REWARD ? MAX_CHIP_REWARD : count;
                    var _loop3 = function _loop3() {
                      if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                      var itemBet = _this8.getChipNode(obj.item.getComponent(ChipSmall).value);
                      yzpool.addChild(itemBet);
                      itemBet.position = posrento;
                      var positionNode2 = _player.getChildByName("img_" + (m % 2 + 2));
                      var world3 = positionNode2.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
                      //                                        // let positionNode2 = player.getChildByName("img_" + (m + 2));
                      //                                        // let world3 = positionNode2.convertToWorldSpaceAR(cc.v2(0,0));
                      var posre3 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world3);
                      _this8.createBetList.push(itemBet);
                      tween(itemBet).to(0.3, {
                        position: v3(posre3.x, posre3.y + (num - 1) * 2)
                      })
                      // .to(0.6 + num * 0.05, { opacity: 255 })
                      .delay(0.6 + num * 0.05).to(0.3, {
                        position: posren2
                      }).call(function () {
                        _this8._chipPool.put(itemBet);
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
            _this8.emitMyselfBet(resultData.Results);
            _this8.emitPublicBet(resultData.Results);
            _this8.backMoney(resultData);
          }, 1.4);
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
            if (redata.length == 6) {
              break;
            }
          }
          return redata;
        };
        _proto.backMoney = function backMoney(resultData) {
          var _this9 = this;
          this.scheduleOnce(function () {
            if (resultData == null) {
              return;
            }
            if (resultData.PositionInfo == null) {
              return;
            }
            var data = _this9.getDeskPlayerByID(resultData.PositionInfo);
            for (var i = 0; i < _this9.players.length; i++) {
              if (data[i]) {
                var add = data[i].TotalBackYxb;
                if (parseInt(add) > 0) {
                  var player = _this9.players[i];
                  var tips = player.getChildByName("addScore");
                  tips.getChildByName("text").getComponent(Label).string = "+" + Common.ChangeMoneyShow(parseInt(add), 2);
                  tips.active = true;
                }
                _this9.players[i].getChildByName("seat_bg").getChildByName("label_gold").getComponent(Label).string = Common.ChangeMoneyShow(parseInt(data[i].Yxb), 2);
              }
            }
            if (resultData.TotalBackYxb > 0) {
              var _player2 = _this9.playerself;
              var _tips = _player2.getChildByName("addScore");
              _tips.getChildByName("text").getComponent(Label).string = "+" + Common.ChangeMoneyShow(resultData.TotalBackYxb, 2);
              _tips.active = true;
            }
          }, 3);
        };
        _proto.emitMyselfBet = function emitMyselfBet(Results) {
          var _this10 = this;
          var num = 0;
          var _loop4 = function _loop4() {
              var betInfo = _step8.value;
              var obj = betInfo;
              var count = _this10.getNumBet(obj.yztype, Results);
              if (count > 0) {
                num = num + 1;
                if (num > MAX_CHIP_REWARD) {
                  _this10._chipPool.put(obj.item);
                  return 1; // continue
                }

                var yzpool = _this10.yxxYzPool[parseInt(obj.yztype) - 1];
                var player = _this10.playerself;
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
                  _this10._chipPool.put(obj.item);
                }).start();
                var worldren = _this10.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, -35));
                var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                var maxCount = count > MAX_CHIP_REWARD ? MAX_CHIP_REWARD : count;
                var _loop5 = function _loop5() {
                  if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                  var itemBet = _this10.getChipNode(obj.item.getComponent(ChipSmall).value);
                  yzpool.addChild(itemBet);
                  itemBet.position = posrento;
                  var positionNode2 = player.getChildByName("img_" + (m % 2 + 2));
                  var world3 = positionNode2.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                  var posre3 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world3);
                  _this10.createBetList.push(itemBet);
                  tween(itemBet).to(0.3, {
                    position: v3(posre3.x, posre3.y + (num - 1) * 2)
                  })
                  // .to(0.6 + num * 0.05, { opacity: 255 })
                  .delay(0.6 + num * 0.05).to(0.3, {
                    position: posren2
                  }).call(function () {
                    _this10._chipPool.put(itemBet);
                  }).start();
                };
                for (m = 0; m < maxCount; m++) {
                  if (_loop5()) continue;
                }
              }
            },
            m;
          for (var _iterator8 = _createForOfIteratorHelperLoose(this.betselfList), _step8; !(_step8 = _iterator8()).done;) {
            if (_loop4()) continue;
          }
        };
        _proto.emitPublicBet = function emitPublicBet(Results) {
          var _this11 = this;
          var _loop6 = function _loop6() {
            var betInfo = _step9.value;
            var obj = betInfo;
            var count = _this11.getNumBet(obj.yztype, Results);
            if (count > 0) {
              var yzpool = _this11.yxxYzPool[parseInt(obj.yztype) - 1];
              var player = _this11.playerPublic;
              var world = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
              var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
              tween(obj.item).to(0.5, {
                position: posren
              }).call(function () {
                _this11._chipPool.put(obj.item);
              }).start();
              var worldren = _this11.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
              var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
              var maxCount = count > MAX_CHIP_REWARD ? MAX_CHIP_REWARD : count;
              var _loop7 = function _loop7() {
                if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                var itemBet = _this11.getChipNode(obj.item.getComponent(ChipSmall).value);
                yzpool.addChild(itemBet);
                itemBet.position = posrento;
                _this11.createBetList.push(itemBet);
                tween(itemBet).to(0.5, {
                  position: posren
                }).call(function () {
                  _this11._chipPool.put(itemBet);
                }).start();
              };
              for (var m = 0; m < maxCount; m++) {
                if (_loop7()) continue;
              }
            }
          };
          for (var _iterator9 = _createForOfIteratorHelperLoose(this.betPublicList), _step9; !(_step9 = _iterator9()).done;) {
            _loop6();
          }
        };
        _proto.getNumBet = function getNumBet(yztype, Results) {
          var count = 0;
          for (var _iterator10 = _createForOfIteratorHelperLoose(Results), _step10; !(_step10 = _iterator10()).done;) {
            var result = _step10.value;
            if (parseInt(result) == yztype) {
              count = count + 1;
            }
          }
          return count;
        };
        _proto.showResultAni = function showResultAni(Results) {
          if (!Results) {
            return;
          }
          gts.Debug.Log("===showResultAni==" + JSON.stringify(Results));
          for (var i = 0; i < 3; i++) {
            var result = parseInt(Results[i]) - 1;
            this.saList[i].getComponent(Sprite).spriteFrame = this.saSpriteF[result];
            this.saList[i].active = true;
            var _sp2 = this.yxxYzlist[result].getChildByName("zhong");
            _sp2.active = true;
            this.binkNode(_sp2);
          }
        };
        _proto.wanKai = function wanKai() {
          var _this12 = this;
          this.wanAni.active = true;
          this.wankong.active = true;
          this.kajiang.scale = v3(0, 0, 1);
          this.kajiang.getComponent(UIOpacity).opacity = 255;
          this.kajiang.active = true;
          tween(this.kajiang).to(0.5, {
            scale: v3(2, 2, 1)
          }).start();
          tween(this.kajiang.getComponent(UIOpacity)).to(1, {
            opacity: 0
          }).start();

          // cc.tween(this.wanAni)
          //     .to(0.5, { y: this.wanAni.getPosition().y + 250, opacity: 0 })
          //     .call(() => {
          //         this.wanAni.getPosition().y -= 250;
          //         this.wanAni.getComponent(cc.UIOpacity).opacity = 255;
          //         this.wanAni.active = false;
          //     })
          //     .start();

          tween(this.wanAni.getComponent(UIOpacity)).to(0.5, {
            opacity: 0
          }).start();
          tween(this.wanAni).to(0.5, {
            position: v3(this.wanAni.getPosition().x, this.wanAni.getPosition().y + 250)
          }).call(function () {
            _this12.wanAni.setPosition(_this12.wanAni.position.x, _this12.wanAni.position.y - 250);
            _this12.wanAni.getComponent(UIOpacity).opacity = 255;
            _this12.wanAni.active = false;
          }).start();
        };
        _proto.playResultSound = function playResultSound(IsPrizePool) {
          var _this13 = this;
          if (this.djsMId != null) ;
          AudioManager.instance.playOneShot(this.yxxSound[3]); // 第一阶段
          if (!IsPrizePool) {
            //            //不是大奖
            this.scheduleOnce(function () {
              AudioManager.instance.playOneShot(_this13.yxxSound[4]); // 第2阶段
            }, 2.3);
            this.scheduleOnce(function () {
              AudioManager.instance.playOneShot(_this13.yxxSound[5]); // 第3阶段
            }, 4);
          }
        };
        _proto.showResult = function showResult(resultData) {
          this.playResultSound(resultData.IsPrizePool);

          //        // this.wanKai();
          //        // this.showResultAni(resultData.Results);

          //        // if (resultData.IsPrizePool) {
          //        //     this.showBigJiangResult(resultData.PrizeResult);
          //        // }
          this.emitBet(resultData);
          if (resultData.Original != "") {
            this.setMd5Info(resultData.Original, true);
          }
        }
        //    // showBigJiangResult(TotalBackYxb: number) {
        //    //     this.scheduleOnce(() => {
        //    //         // let dajiangLayer = cc.find("dajiangLayer", this.node);
        //    //         // dajiangLayer.active = true;
        //    //         // dajiangLayer.getChildByName("score").active = false;
        //    //         // let dajiangani_1 = dajiangLayer.getChildByName("teixao").getComponent(sp.Skeleton);
        //    //         // dajiangani_1.setAnimation(0, "dalogo1", false);
        //    //         // dajiangani_1.addAnimation(0, "dalogo2", true);
        //    //         // this.scheduleOnce(function () {
        //    //         //     let dajiangLayer1 = cc.find("dajiangLayer", this.node);
        //    //         //     dajiangLayer1.getChildByName("score").active = true;
        //    //         //     Common.showLog("4444");
        //    //         //     dajiangLayer1.getChildByName("score").getComponent(cc.Label).string = Common.numFormat(TotalBackYxb);
        //    //         // }, 0.5);
        //    //     }, 1);
        //    // }
        ;

        _proto.betAniLast = function betAniLast(data, isSelf, index) {
          //        // gts.Debug.Log("========betAniLast===============");
          var HD_LastXiaZhu = data;
          var keys = Object.keys(HD_LastXiaZhu.XiaZhuResult);
          for (var _i5 = 0, _keys2 = keys; _i5 < _keys2.length; _i5++) {
            var i = _keys2[_i5];
            var step = Math.floor((HD_LastXiaZhu.XiaZhuResult[i].length + 15) / 15);
            for (var j = 0; j < HD_LastXiaZhu.XiaZhuResult[i].length; j += step) {
              this.betAni(parseInt(i), HD_LastXiaZhu.XiaZhuResult[i][j], isSelf, index);
            }
          }
        };
        _proto.betAni = function betAni(xzType, xiazhuzhi, isSelf, index) {
          if (index == -2) return;
          // 金额更新不能依赖异步筹码资源是否就绪。
          if (isSelf) {
            yxxModel.instance.betself[xzType - 1] += xiazhuzhi;
            if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.BtnJiabei.node) == 0) {
              Common.setButtonEnableWithGray(this.BtnJiabei, true);
            }
            var yxx_bg = this.yxxYzlist[xzType - 1];
            yxx_bg.getChildByName("yzself_num").active = true;
            yxx_bg.getChildByName("yzself_num").getComponent(Label).string = Common.ChangeMoneyShow(yxxModel.instance.betself[xzType - 1], 2);
            yxxModel.instance.betOther[xzType - 1] += xiazhuzhi;
            yxx_bg.getChildByName("yz_num").active = true;
            yxx_bg.getChildByName("yz_num").getComponent(Label).string = Common.ChangeMoneyShow(yxxModel.instance.betOther[xzType - 1], 2);
          } else {
            yxxModel.instance.betOther[xzType - 1] += xiazhuzhi;
            var _yxx_bg = this.yxxYzlist[xzType - 1];
            _yxx_bg.getChildByName("yz_num").active = true;
            _yxx_bg.getChildByName("yz_num").getComponent(Label).string = Common.ChangeMoneyShow(yxxModel.instance.betOther[xzType - 1], 2);
          }
          var config = {
            xzType: xzType,
            xiazhuzhi: xiazhuzhi,
            isSelf: isSelf,
            index: index
          };
          if (!this.chipPoolReady) {
            this.pendingChipBets.push(config);
            this.initChipPool();
            return;
          }
          this.renderChipBet(config);
        };
        _proto.restoreSelfBets = function restoreSelfBets(bets) {
          // 个人快照只替换自己的筹码，桌面总额由桌面快照更新，不能再次累加。
          this.pendingChipBets = this.pendingChipBets.filter(function (config) {
            return !config.isSelf;
          });
          for (var _iterator11 = _createForOfIteratorHelperLoose(this.betselfList), _step11; !(_step11 = _iterator11()).done;) {
            var bet = _step11.value;
            if (isValid(bet.item, true) && bet.item.parent) {
              Tween.stopAllByTarget(bet.item);
              var opacity = bet.item.getComponent(UIOpacity);
              if (opacity) Tween.stopAllByTarget(opacity);
              this._chipPool.put(bet.item);
            }
          }
          this.betselfList = [];
          yxxModel.instance.betself = [0, 0, 0, 0, 0, 0];
          for (var _iterator12 = _createForOfIteratorHelperLoose(bets), _step12; !(_step12 = _iterator12()).done;) {
            var _bet = _step12.value;
            yxxModel.instance.betself[Number(_bet.Pos) - 1] += Number(_bet.Money);
          }
          for (var i = 0; i < 6; i++) {
            var amount = yxxModel.instance.betself[i];
            var label = this.yxxYzlist[i].getChildByName("yzself_num");
            label.active = amount > 0;
            label.getComponent(Label).string = Common.ChangeMoneyShow(amount, 2);
            if (amount <= 0) continue;
            var config = {
              xzType: i + 1,
              xiazhuzhi: amount,
              isSelf: true,
              needAni: false
            };
            if (this.chipPoolReady) this.renderChipBet(config);else this.pendingChipBets.push(config);
          }
          if (!this.chipPoolReady && this.pendingChipBets.length > 0) this.initChipPool();
          if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.BtnJiabei.node) == 0) {
            Common.setButtonEnableWithGray(this.BtnJiabei, yxxModel.instance.betself.some(function (amount) {
              return amount > 0;
            }));
          }
        };
        _proto.renderChipBet = function renderChipBet(config) {
          var xzType = config.xzType,
            xiazhuzhi = config.xiazhuzhi,
            isSelf = config.isSelf,
            index = config.index;
          var startPos;
          var aniPool = this.yxxYzPool[xzType - 1].getChildByName("" + (isSelf ? "Node_self" : "Node_other"));
          var CMnode = this.getChipNode(xiazhuzhi);
          if (!CMnode) {
            return;
          }
          aniPool.addChild(CMnode);
          if (isSelf) {
            var player = this.playerself;
            var worldPos = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
            this.betselfList.push({
              item: CMnode,
              yztype: xzType
            });
          } else {
            if (index > 0) {
              var _player3 = this.players[index - 1];
              var _worldPos = _player3.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
              startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(_worldPos);
              this.betList[index].push({
                item: CMnode,
                yztype: xzType
              });
            } else {
              var _player4 = this.playerPublic;
              var _worldPos2 = _player4.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
              startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(_worldPos2);
              this.betPublicList.push({
                item: CMnode,
                yztype: xzType
              });
            }
          }
          CMnode.position = startPos;
          var width = aniPool.getComponent(UITransform).width;
          var height = aniPool.getComponent(UITransform).height;
          var len = aniPool.children.length;
          var y = len * 5;
          y = y > 50 ? 50 : y;
          var x = 0;
          if (config.needAni === false) CMnode.setPosition(x, y);else tween(CMnode).to(0.5, {
            position: v3(x, y)
          }, {
            easing: "quadOut"
          }).start();
        };
        _proto.betIntoPool = function betIntoPool(data) {
          if (!this.djsProgress.node.active) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          yxxGameCtrl.instance.sendDoingBet("" + data, "" + this._chip.count);
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
          var _this14 = this;
          yxxGameCtrl.instance.Send_ExitRoom();
          tween(this.node).delay(0.5).call(function () {
            _this14.exitGame();
          }).start();
        };
        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("yxx", 8);
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/YxxHelp", this._buddle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          GUtil.openRecord("yxx");
        }
        //    //////////////////////////////////////////////
        ;

        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.onClickCopy = function onClickCopy() {
          PlatformMgr.p.copyToClipBoard(this.txt_md5.string);
        }
        //    /**
        //     *
        //     * @param data yxxGameDef.HD_RefreshPrizePool
        //     * @returns void
        //     */
        ;

        _proto.updatePool = function updatePool(data) {
          //        // let label = this.daJiangAni.getChildByName("gold_pool").getComponent(cc.Label);
          //        // if (data.CurInPool == 0) {
          //        //     this._poolNum = data.PrizePool;
          //        //     label.string = Common.numFormat(this._poolNum);
          //        //     return;
          //        // }
          //        // this._stepNum = Math.floor(data.CurInPool / 20);
          //        // this._poolNum = data.PrizePool;
          //        // this.schedule(this.addNum, 0.1);
        };
        _proto.addNum = function addNum() {
          //        // let label = this.daJiangAni.getChildByName("gold_pool").getComponent(cc.Label);
          //        // let cur = parseInt(label.string.replace(/,/g, ""));
          //        // cur = cur + this._stepNum;
          //        // if (cur > this._poolNum) {
          //        //     cur = this._poolNum;
          //        //     this.unschedule(this.addNum);
          //        // }
          //        // label.string = Common.numFormat(cur);
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != yxxGameCtrl.instance.BUNDLE) {
            return;
          }
          var children = this.scrollViewCM.content.children;
          for (var _iterator13 = _createForOfIteratorHelperLoose(children), _step13; !(_step13 = _iterator13()).done;) {
            var child = _step13.value;
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
          var _this15 = this;
          this.scrollViewCM.content.destroyAllChildren();
          var minChip = ChipProxy.chipList[0].count;
          for (var _iterator14 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step14; !(_step14 = _iterator14()).done;) {
            var i = _step14.value;
            if (i.count < minChip) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            //            // chip.scale = 0.8;
            //            // chip.width = 105;
            //            // chip.height = 105;
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, yxxGameCtrl.instance.BUNDLE);
          }
          for (var _iterator15 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step15; !(_step15 = _iterator15()).done;) {
            var _i6 = _step15.value;
            var has = false;
            for (var _iterator16 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step16; !(_step16 = _iterator16()).done;) {
              var j = _step16.value;
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
            //            // chip.scale = 0.8;
            //            // chip.width = 105;
            //            // chip.height = 105;
            _chip2.getComponent(ChipItem).setData(_i6, ChipType.CHIP, yxxGameCtrl.instance.BUNDLE);
          }
          this.scheduleOnce(function () {
            var child = _this15.scrollViewCM.content.children[0];
            child.getComponent(ChipItem).moveUp();
            _this15.scrollViewCM.scrollToLeft();
          });
        };
        _proto.updateTableInfo = function updateTableInfo(data) {
          var _this16 = this;
          if (data.RoomState != eRoomStatus.yxxBet) this.pendingChipBets = [];
          yxxModel.instance.roomInfo._curRoomStatus = data.RoomState;
          yxxModel.instance.roomInfo._roomid = data.EventID;
          this._curTotalTime = data.XiaZhuTime; //下注总时长

          this.playerPublic.active = true;
          this.playerPublic.getChildByName("number").getComponent(Label).string = "" + data.PlayerNum;
          //        // this.daJiangAni.getChildByName("gold_pool").active = true;
          //        // this.daJiangAni.getChildByName("gold_pool").getComponent(cc.Label).string = Common.numFormat(data.PrizePool);

          var strMd5 = data.Original.length > 0 ? data.Original : data.Ciphertext.length > 0 ? data.Ciphertext : null;
          if (strMd5) {
            this.setMd5Info(strMd5, data.Original.length > 0);
          }
          this.updateTablePlayer();
          this.lab_game_No.string = Common.setGameNo(data.EventID);
          switch (yxxModel.instance.roomInfo._curRoomStatus) {
            case eRoomStatus.startGame:
              {
                //                //此时房间状态 是开始游戏

                //                // this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "wan", false);
                this.scheduleOnce(function () {
                  AudioManager.instance.playOneShot(_this16.yxxSound[0]);
                  _this16.renAni.getComponent(sp.Skeleton).setAnimation(0, "shake", false);
                  _this16.renAni.getComponent(sp.Skeleton).setCompleteListener(function () {
                    _this16.renAni.getComponent(sp.Skeleton).setCompleteListener(null);
                    _this16.renAni.getComponent(sp.Skeleton).setAnimation(0, "tangshou", false);
                    _this16.renAni.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
                    _this16.wanAni.active = true;
                    _this16.wankong.active = true;
                  });
                }, 0.5);
                break;
              }
            case eRoomStatus.yxxBet:
              {
                this.wanAni.active = true;
                this.wankong.active = true;
              }
            case eRoomStatus.result:
              {
                this.wankong.active = true;
                this.showResultAni(data.Results.Results);
                //                //此时房间状态 下注
                if (data.CountDown > 0) {
                  this.createCountDown(data.CountDown);
                }
                this.updateDeskInfo(data);
                break;
              }
          }
        };
        _proto.updateDeskInfo = function updateDeskInfo(data) {
          if (data.XiaZhuTotal.length > 0) {
            for (var _iterator17 = _createForOfIteratorHelperLoose(data.XiaZhuTotal), _step17; !(_step17 = _iterator17()).done;) {
              var betInfo = _step17.value;
              if (betInfo.Pos && betInfo.Money) {
                var i = parseInt(betInfo.Pos);
                var goldnum = betInfo.Money;

                //                    //添加筹码
                this.betAni(i, goldnum);
              }
            }
            AudioManager.instance.playOneShot(this.yxxSound[1]);
          }
        };
        _proto.createCountDown = function createCountDown(leftTime) {
          Common.showLog("创建倒计时");
          yxxModel.instance._curCountDown = leftTime;
          var per = yxxModel.instance._curCountDown / this._curTotalTime;
          this.djsProgress.node.active = true;
          this.djsProgress.progress = per;
          this._curTimes = sys.now();
          this.schedule(this.showCountDown, 0.1);
          if (this.clock) {
            this.clock.hideTime = false;
            this.clock.changeColor = true;
            this.clock.Open(leftTime + 1);
            this.clock.setLabelPosY(-16);
          }
        };
        _proto.showCountDown = function showCountDown() {
          var now = sys.now();
          yxxModel.instance._curCountDown -= (now - this._curTimes) / 1000.0;
          this._curTimes = now;
          if (yxxModel.instance._curCountDown <= 3 && this.haveplay == false) {
            //            //倒计时音效
            this.haveplay = true;
            this.djsMId = AudioManager.instance.playOneShot(this.yxxSound[2]);
            ViewManager.instance.showCountDownTip(this.node, Math.round(yxxModel.instance._curCountDown), "idle3", 25);
          }
          var curPress = yxxModel.instance._curCountDown / this._curTotalTime;
          if (curPress < 0.000001) {
            curPress = 0;
          }
          this.djsProgress.progress = curPress;
          if (curPress < 0.000001) {
            Common.showLog("倒计时消失");
            this.haveplay = false;
            // cc.audioEngine.stopEffect(this.djsMId);
            this.djsProgress.node.active = false;
            this.unschedule(this.showCountDown);
          }
        };
        _proto.getDeskPlayerByPlayerList = function getDeskPlayerByPlayerList(data) {
          var redata = [];
          if (data.length == 0) {
            return redata;
          }
          var curData = data;
          for (var i = 0; i < curData.length; i++) {
            if (curData[i].UserID != DataManager.instance.getUserDataForKey(UserKey.OID)) {
              redata.push(curData[i]);
            }
            if (redata.length == 6) {
              break;
            }
          }
          return redata;
        };
        _proto.updateDeskPlayer = function updateDeskPlayer() {
          var _this17 = this;
          if (!this.isUpdateDeskPlayer) {
            //            // gts.Debug.Log("=updateDeskPlayer==!this.isUpdateDeskPlayer==");
            return;
          }

          //        // gts.Debug.Log("=updateDeskPlayer====");
          this.isUpdateDeskPlayer = false;

          //        //获取Pos
          var posArr = [];
          for (var i = 0; i < 6; i++) {
            //            //当前序号标记
            Tween.stopAllByTarget(this.players[i]);
            var pos = {
              x: this._playersPos[i].x,
              y: this._playersPos[i].y
            };
            posArr.push(pos);
          }
          this.updateTablePlayer();
          if (yxxModel.instance.curTablePlayerLast && yxxModel.instance.curTablePlayerLast.length > 0) {
            var _loop8 = function _loop8() {
              var curplayer = _this17.players[i];
              //                //获取上局序号
              var lastindex = _this17.getLastIndexById(yxxModel.instance.curTablePlayerLast[i].UserID);

              //                //当前POS
              var poscur = posArr[i];
              if (lastindex != i) {
                //                    //序号不一致 -- 更换位置
                var startpos;
                if (lastindex == -1) {
                  startpos = {
                    x: _this17.playerPublic.getPosition().x,
                    y: _this17.playerPublic.getPosition().y
                  };
                  curplayer.setPosition(startpos.x, startpos.y);
                } else {
                  startpos = {
                    x: _this17._playersPos[lastindex].x,
                    y: _this17._playersPos[lastindex].y
                  };
                  curplayer.setPosition(startpos.x, startpos.y);
                }
                tween(curplayer).to(0.1, {
                  position: v3(poscur.x, poscur.y)
                }).call(function () {
                  curplayer = poscur;
                }).start();
              }
            };
            for (var i = 0; i < yxxModel.instance.curTablePlayer.length; i++) {
              _loop8();
            }
          }
        };
        _proto.showPlayers = function showPlayers() {
          this.isUpdateDeskPlayer = true;
          if (!yxxModel.instance.curTablePlayerLast) {
            this.updateDeskPlayer();
          }
        };
        _proto.getLastIndexById = function getLastIndexById(id) {
          var index = -1;
          for (var i = 0; i < yxxModel.instance.curTablePlayer.length; i++) {
            if (yxxModel.instance.curTablePlayer[i].UserID == id) {
              index = i;
              break;
            }
          }
          return index;
        };
        _proto.updateTablePlayer = function updateTablePlayer() {
          if (yxxModel.instance.curTablePlayer && yxxModel.instance.curTablePlayer.length > 0) {
            for (var i = 0; i < 6; i++) {
              var player = this.players[i];
              player.active = true;
              player.getChildByName("unseat").active = true;
              player.getChildByName("seat_bg").active = false;
            }
            for (var i = 0; i < yxxModel.instance.curTablePlayer.length; i++) {
              var _player5 = this.players[i];
              _player5.getChildByName("unseat").active = false;
              _player5.getChildByName("seat_bg").active = true;
              var seat_bg = _player5.getChildByName("seat_bg");
              Common.nickNameFormatL(seat_bg.getChildByName("label_name"), yxxModel.instance.curTablePlayer[i].Name);
              seat_bg.getChildByName("label_gold").getComponent(Label).string = Common.ChangeMoneyShow(yxxModel.instance.curTablePlayer[i].Yxb, 2);
              var headNode = find("Node_mask/head", seat_bg);
              Common.getHead(yxxModel.instance.curTablePlayer[i].Head, headNode);
            }
          }
        };
        _proto.initGame = function initGame() {
          this.tiao.active = false;
          this.renAni.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
          this.wanAni.active = false;
          this.wankong.active = false;
          this.djsProgress.node.active = false;
          //        // this.daJiangAni.getChildByName("gold_pool").active = false;
          //        // this.daJiangAni.getComponent(sp.Skeleton).setAnimation(0, "xiangzi", true);
          this.playerPublic.active = false;
          Common.setButtonEnableWithGray(this.BtnLast, false);
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          for (var i = 0; i < 6; i++) {
            var player = this.players[i];
            player.active = true;
            player.getChildByName("unseat").active = true;
            player.getChildByName("seat_bg").active = false;
          }
          for (var i = 0; i < 6; i++) {
            var yxx_bg = this.yxxYzlist[i];
            yxx_bg.active = true;
            yxx_bg.getChildByName("zhong").active = false;
            yxx_bg.getChildByName("yz_num").active = false;
            yxx_bg.getChildByName("yzself_num").active = false;
          }
          this.updateSelfInfo(null);
        };
        _proto.updateSelfInfo = function updateSelfInfo(data) {
          if (data == null) {
            var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
            Common.getHead(head_id, this.selfHead);
            Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            this.selfGold.string = Common.numFormat(gold);
          }
        };
        _proto.removeEvent = function removeEvent() {
          //        //button事件
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(ConfigManager.protocolYxx.yxxBetBtn, this.selectCM, this);
          //        // EventManager.instance.off(ConfigManager.instance.protocolYxx.yxxHaveBet, this.betIntoPool, this);

          EventManager.off(ConfigManager.protocolYxx.YxxplayerInfo, this.showInfo, this);
          EventManager.off(ConfigManager.protocolYxx.YxxPublic, this.showAllPlayerInfo, this);
          EventManager.off(ConfigManager.protocolYxx.yxxrecord, this.showRecord, this);
          EventManager.off(ConfigManager.protocolYxx.yxxBigrecord, this.showBigRecord, this);
          EventManager.off(ConfigManager.protocolYxx.yxxJackpotHistory, this.showBigRecord, this);
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          EventManager.off(ConfigManager.protocolYxx.yxxLastYz1, this.LastBet, this);
          EventManager.off(ConfigManager.protocolYxx.yxxLastYz2, this.doubleBet, this);
          ProxyMgr.close(this);
        };
        _proto.onDisable = function onDisable() {
          this.pendingChipBets = [];
          _GameDef$BaseView.prototype.onDisable.call(this);
          this.unschedule(this.updateDeskPlayer);
          this.removeEvent();
        };
        _proto.showPlayerChat = function showPlayerChat(HD_SendShortCut, curTablePlayer) {
          if (!HD_SendShortCut) return;
          if (HD_SendShortCut.GroupId != "yxx" + yxxModel.instance.curTableID) {
            return;
          }
          var currPlayer = null;
          var scale_x = 1;
          var userID = DataManager.instance.getUserDataForKey(UserKey.OID);
          if (HD_SendShortCut.FromUserId == userID) {
            currPlayer = this.playerself;
          }
          if (curTablePlayer != null && currPlayer == null) {
            for (var i = 0; i < curTablePlayer.length; i++) {
              var player = this.players[i];
              if (HD_SendShortCut.FromUserId == curTablePlayer[i].UserID) {
                currPlayer = player;
                scale_x = player.getPosition().x > 0 ? -1 : 1;
                break;
              }
            }
          }
          if (currPlayer && isValid(currPlayer)) {
            if (HD_SendShortCut.MsgType == 1) {
              var node_chat = find("seat_bg/node_chat", currPlayer);
              var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
              HD_SendShortCut.Content = BlackWordProxy.filter(HD_SendShortCut.Content);
              lbl_chat.string = HD_SendShortCut.Content;
              node_chat.scale = v3(0, 0, 1);
              node_chat.active = true;
              tween(node_chat).stop().to(0.2, {
                scale: v3(scale_x, 1, 1)
              }).delay(2.0).call(function () {
                node_chat.active = false;
              }).start();
            } else {
              var node_expression = find("seat_bg/node_expression", currPlayer);
              node_expression.active = true;
              this.loadLocalFrameAnim(HD_SendShortCut.Content, node_expression);
            }
          } else {
            if (HD_SendShortCut.MsgType == 1) {
              yxxModel.instance.chatQueueList.push(HD_SendShortCut);
            } else if (HD_SendShortCut.MsgType == 2) {
              yxxModel.instance.expressionQueueList.push(HD_SendShortCut);
            }
            this.showPublicChat(HD_SendShortCut.MsgType);
          }
        };
        _proto.showPublicChat = function showPublicChat(nType) {
          var _this18 = this;
          if (nType == 1) {
            //            //文本
            if (!yxxModel.instance.chatQueueList || yxxModel.instance.chatQueueList.length < 1) return;
            var _loop9 = function _loop9() {
              var node_chat = find("seat_bg/node_chat" + i, _this18.playerPublic);
              if (!isValid(node_chat)) return 1; // continue
              if (!node_chat.active && yxxModel.instance.chatQueueList.length > 0) {
                node_chat.active = true;
                var data = yxxModel.instance.chatQueueList.shift();
                data.Content = BlackWordProxy.filter(data.Content);
                var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
                lbl_chat.string = data.Content;
                node_chat.scale = v3(0, 0, 1);
                var scale_y = i == 3 ? -1 : 1;
                tween(node_chat).stop().delay(0.1 * i).to(0.2, {
                  scale: v3(-1, scale_y)
                }).delay(2.0).call(function () {
                  node_chat.active = false;
                  _this18.showPublicChat(1);
                }).start();
              }
            };
            for (var i = 1; i < 4; ++i) {
              if (_loop9()) continue;
            }
          } else if (nType == 2) {
            if (!yxxModel.instance.expressionQueueList || yxxModel.instance.expressionQueueList.length < 1) return;
            var node_expression = find("seat_bg/node_expression", this.playerPublic);
            if (!isValid(node_expression)) return;
            if (!node_expression.active) {
              node_expression.active = true;
              node_expression.scale = v3(0, 0, 1);
              var data = yxxModel.instance.expressionQueueList.shift();
              tween(node_expression).stop().call(function () {
                _this18.loadLocalFrameAnim(data.Content, node_expression, function () {
                  node_expression.active = false;
                  _this18.showPublicChat(2);
                });
              }).to(0.5, {
                scale: v3(1, 1, 1)
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
          var _this19 = this;
          resources.load("chat/" + aniName, SpriteAtlas, function (err, sprAtlas) {
            var sprFrmAry = sprAtlas.getSpriteFrames();
            _this19.createAnim(sprFrmAry, aniName, item, callBack);
          });
        }
        //    //显示大奖记录
        //    // showJackpotHistory_update(data: yxxGameDef.HD_GetPrizeRecord) {
        ;

        _proto.showJackpotHistory = function showJackpotHistory(data) {
          if (data.JackpotCount == 0) return;
          var resultList = {
            1: "Cá",
            //鱼
            2: "Tôm",
            //虾
            3: "Cua",
            //螃蟹
            4: "Nai",
            //鹿
            5: "Gà",
            //鸡
            6: "Bầu" //葫芦
          };

          var xian9 = find("Canvas/YxxBigRecord/bg/content_bg/scrollView_content/view/xian9");
          var view = find("Canvas/YxxBigRecord/bg/content_bg/scrollView_content/view");
          find("Canvas/YxxBigRecord/bg/content_bg/page").getComponent(Label).string = "Trang:" + this._curPoolPage;
          if (this._curPoolPage == 1) {
            find("Canvas/YxxBigRecord/bg/before_btn").active = false;
          } else {
            find("Canvas/YxxBigRecord/bg/before_btn").active = true;
          }
          if (this._curPoolPage < data.JackpotCount) {
            find("Canvas/YxxBigRecord/bg/next_btn").active = true;
          } else {
            find("Canvas/YxxBigRecord/bg/next_btn").active = false;
          }
          for (var i = 0; i < 6; i++) {
            var m = i + 1;
            var label_pre = find("Canvas/YxxBigRecord/bg/label_pre" + m);
            if (!isValid(label_pre)) continue;
            label_pre.getComponent(Label).string = data[m] + "%";
          }
          var JackpotRecord = data.JackpotRecord;
          var item = find("Canvas/YxxBigRecord/bg/content_bg/scrollView_content/view/content/item");
          //        //期号
          item.getChildByName("gameId").getComponent(Label).string = JackpotRecord.JackpotNo;
          //        //创建时间
          var date = Common.getTimeFormat(JackpotRecord.CreateTime);
          item.getChildByName("time_date").getComponent(Label).string = date.date;
          item.getChildByName("time_scond").getComponent(Label).string = date.time;
          item.getChildByName("lbl_result").getComponent(Label).string = resultList[JackpotRecord.Result];
          item.getChildByName("lbl_bigmoney").getComponent(Label).string = Common.numFormat(JackpotRecord.PoolVal);
          var node_prize = find("node_prize", item);
          node_prize.removeAllChildren();
          var addPrizeItem = function addPrizeItem(name, results) {
            if (name === void 0) {
              name = null;
            }
            if (results === void 0) {
              results = null;
            }
            var sub_prize = find("Canvas/YxxBigRecord/bg/content_bg/sub_prize");
            var sub_item = instantiate(sub_prize);
            sub_item.active = true;
            sub_item.parent = node_prize;
            var lbl_name = find("lbl_name", sub_item);
            lbl_name.getComponent(Label).string = "...";
            var lbl_money = find("lbl_money", sub_item);
            lbl_money.getComponent(Label).string = "";
            if (name && results) {
              lbl_name.getComponent(Label).string = name;
              lbl_money.getComponent(Label).string = Common.ChangeMoneyShow(results, 2);
            }
          };
          var btn_details = find("btn_details", item);
          btn_details.targetOff(this);
          btn_details.active = false;
          if (JackpotRecord.PrizeList) {
            var subList = JackpotRecord.PrizeList.slice(0, 4);
            for (var _iterator18 = _createForOfIteratorHelperLoose(subList), _step18; !(_step18 = _iterator18()).done;) {
              var prizeInfo = _step18.value;
              addPrizeItem(prizeInfo.Name, prizeInfo.Results);
            }
            if (JackpotRecord.PrizeList.length > 4) {
              addPrizeItem();
              btn_details.active = true;
            }
          }
          var layout = node_prize.getComponent(Layout);
          layout.updateLayout();
          item.getComponent(UITransform).height = node_prize.getComponent(UITransform).height;
          xian9.getComponent(UITransform).width = node_prize.getComponent(UITransform).height;
          btn_details.on(Node.EventType.TOUCH_END, function (event) {
            btn_details.active = false;
            node_prize.removeAllChildren();
            if (JackpotRecord.PrizeList) {
              for (var _iterator19 = _createForOfIteratorHelperLoose(JackpotRecord.PrizeList), _step19; !(_step19 = _iterator19()).done;) {
                var _prizeInfo = _step19.value;
                addPrizeItem(_prizeInfo.Name, _prizeInfo.Results);
              }
            }
            var layout = node_prize.getComponent(Layout);
            layout.updateLayout();
            item.getComponent(UITransform).height = node_prize.getComponent(UITransform).height;
            xian9.getComponent(UITransform).width = node_prize.getComponent(UITransform).height > view.getComponent(UITransform).height ? view.getComponent(UITransform).height : node_prize.getComponent(UITransform).height;
          }, this);
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        }
        //    // update (dt) {}
        ;

        _proto.setMd5Info = function setMd5Info(strInfo, isResult) {
          this.tiao.active = true;
          this.txt_md5.string = strInfo;
          this.txt_md5Key.active = !isResult;
          this.txt_md5Result.active = isResult;
        }
        //    //IView
        ;

        _proto.updateView = function updateView(event, data) {
          var _this20 = this;
          switch (event) {
            case eProto.HD_Md5Ciphertext:
              {
                this.setMd5Info(data, false);
                break;
              }
            case eProto.playerInfo:
              {
                //                //玩家信息
                this.showPlayers();
                break;
              }
            case eProto.deskinfo:
              {
                //                // 桌子信息
                Common.showLog("刷新桌子信息");
                this.updateTableInfo(data);
                break;
              }
            case eProto.updatePlayerNum:
              {
                //                // 刷新玩家数量
                var HD_UpdatePlayerNum = data;
                this.playerPublic.getChildByName("number").getComponent(Label).string = "" + HD_UpdatePlayerNum.PlayerNum;
                break;
              }
            case eProto.updatePlayerStatus:
              {
                //                // 刷新玩家状态
                var updatePlayerInfo = data;
                Common.setButtonEnableWithGray(this.BtnLast, this.isLastEnable);
                if (updatePlayerInfo.ChipsList != null) {
                  ChipProxy.initChipList(updatePlayerInfo.ChipsList);
                  this.createChipsList();
                }

                //                //自己的下注信息
                if (updatePlayerInfo.BetInfos) {
                  this.restoreSelfBets(updatePlayerInfo.BetInfos);
                }
                break;
              }
            case eProto.updatePool:
              {
                //                // 刷新奖池
                this.updatePool(data);
                break;
              }
            case eProto.updateRoomStatus:
              {
                if (yxxModel.instance.roomInfo._curRoomStatus != eRoomStatus.yxxBet) {
                  this.pendingChipBets = [];
                }
                var CountDown = data.CountDown;
                if (this.clock) {
                  this.clock.hideTime = false;
                  this.clock.changeColor = true;
                  this.clock.Open(CountDown + 1);
                  this.clock.setLabelPosY(-16);
                }
                this.lab_game_No.string = Common.setGameNo(data.EventID);

                //                // 刷新房间状态
                switch (yxxModel.instance.roomInfo._curRoomStatus) {
                  case eRoomStatus.startGame:
                    {
                      //                        //此时房间状态 是开始游戏
                      this.initGameData(1.0);
                      Common.setButtonEnableWithGray(this.BtnLast, this.isLastEnable);

                      //                        // this.wankong.active = false;

                      //                        // this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "wan", false);
                      this.scheduleOnce(function () {
                        _this20.wankong.active = false;
                        AudioManager.instance.playSound(_this20.yxxSound[0], false);
                        _this20.renAni.getComponent(sp.Skeleton).setAnimation(0, "shake", false);
                        _this20.renAni.getComponent(sp.Skeleton).setCompleteListener(function () {
                          _this20.renAni.getComponent(sp.Skeleton).setCompleteListener(null);
                          _this20.renAni.getComponent(sp.Skeleton).setAnimation(0, "tangshou", false);
                          _this20.renAni.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
                          _this20.wanAni.active = true;
                          _this20.wankong.active = true;
                        });
                      }, 1);
                      this.clock.changeColor = false;
                      break;
                    }
                  case eRoomStatus.yxxBet:
                    {
                      //                        //此时房间状态 下注
                      this.createCountDown(CountDown);
                      break;
                    }
                  case eRoomStatus.result:
                    {
                      //                        //此时房间状态 结算
                      yxxModel.instance._curCountDown = 0;
                      this.clock.changeColor = false;
                      break;
                    }
                }
                break;
              }
            case eProto.updateResult:
              {
                gts.Debug.Log("===updateResult===" + JSON.stringify(data));
                //                // 结算
                this.showResult(data);

                //                // this.scheduleOnce(() => {
                //                //     EventManager.instance.emit(yxxGameDef.Event.onUpdateRecord);
                //                // }, 0.1);
                break;
              }
            case eProto.HD_OpenResult:
              {
                this.wanKai();
                this.showResultAni(data);
                this.scheduleOnce(function () {
                  EventManager.emit(Event.onUpdateRecord);
                }, 0.1);
                break;
              }
            case eProto.DoubleXZ:
              {
                //                // 双倍下注
                var emitData = data;
                this.betAniLast(emitData.HD_DoubleXiaZhu, emitData.isSelf, emitData.index);
                break;
              }
            case eProto.LastXZ:
              {
                //                // 上次下注
                var _emitData = data;
                this.betAniLast(_emitData.HD_LastXiaZhu, _emitData.isSelf, _emitData.index);
                break;
              }
            case eProto.YxxBet:
              {
                //                // 下注
                var _emitData2 = data;

                //                // //务端发送的下注金额 不对
                //                // let lastValue = 100;
                //                // let keys = Object.keys(yxxGameDef.CMList);
                //                // for (const keyValue of keys) {
                //                //     let curValue = parseInt(keyValue);
                //                //     if (curValue > emitData.xiazhuzhi) {
                //                //         emitData.xiazhuzhi = lastValue;
                //                //         break;
                //                //     }
                //                //     lastValue = curValue;
                //                // }

                this.betAni(_emitData2.xzType, _emitData2.xiazhuzhi, _emitData2.isSelf, _emitData2.index);
                AudioManager.instance.playOneShot(this.yxxSound[1]);
                break;
              }
            case eProto.getBigPoolList:
              {
                //                // 获取大奖记录
                this.showJackpotHistory(data);
                break;
              }
            //            // case yxxGameDef.eProto.getRecordDetails: {
            //            //     // 获取游戏开奖记录
            //            //     this.showRecordByData(data);
            //            //     break;
            //            // }
            case eProto.getPlayerList:
              {
                //                // 获取玩家列表
                this.showPublicInfoByPage();
                break;
              }
            case eProto.exitRoom:
              {
                //                //退出房间
                this.exitGame();
                break;
              }
            case eProto.checkInRoom:
              {
                //                // 检查是否再房间
                var _emitData3 = data;
                if (_emitData3.isInGame) {
                  //                    //在房间，需要重连
                  this.updateRoom(_emitData3.tableData, _emitData3.resultData);
                } else {
                  NetManager.instance.waitServiceSendData();
                  this.exitGame();
                }
                break;
              }
            case eProto.getPumping:
              {
                this.Label_pumping.node.active = yxxModel.instance.nPummping > 0;
                this.Label_pumping.string = "<color=#ffffff >Tr\u1EA3i nghi\u1EC7m ngay v\u1EDBi ch\u1EC9</c><color=#fd6500> " + yxxModel.instance.nPummping + "% </color><color=#ffffff > ti\u1EC1n ph\u1EBF</c>";
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
          var _this21 = this;
          var childs = this.yxxYzlist;
          for (var i = 0; i < childs.length; ++i) {
            var c = childs[i];
            if (!c.getComponent(BtnArea)) {
              continue;
            }
            BtnArea.OnClicked(c, function (btn) {
              _this21.betIntoPool(btn.node.name.replace("yxx_bg", ""));
            }, this);
            //            //}
          }
        };

        _proto.LastBet = function LastBet() {
          var _this22 = this;
          for (var index = 0; index < 6; index++) {
            var vBet = yxxModel.instance.betselfLast[index];
            if (vBet > 0) {
              if (!yxxGameCtrl.instance.sendDoingBet("" + (index + 1), "" + vBet)) {
                return;
              }
            }
          }
          Common.setButtonEnableWithGray(this.BtnLast, false);
          tween(this.BtnLast.node).delay(2).call(function () {
            Common.setButtonEnableWithGray(_this22.BtnLast, true);
          }).start();
        };
        _proto.doubleBet = function doubleBet() {
          var _this23 = this;
          for (var index = 0; index < 6; index++) {
            var vBet = yxxModel.instance.betself[index];
            if (vBet > 0) {
              if (!yxxGameCtrl.instance.sendDoingBet("" + (index + 1), "" + vBet)) {
                return;
              }
            }
          }
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          tween(this.BtnJiabei.node).delay(2).call(function () {
            Common.setButtonEnableWithGray(_this23.BtnJiabei, true);
          }).start();
        };
        _createClass(YxxGameView, [{
          key: "isLastEnable",
          get: function get() {
            if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.BtnLast.node) > 0) {
              return false;
            }
            for (var index = 0; index < 6; index++) {
              if (yxxModel.instance.betselfLast[index] > 0) {
                return true;
              }
            }
            return false;
          }
        }]);
        return YxxGameView;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "players", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selfName", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "selfGold", [_dec8], {
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "yxxYzlist", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "yxxYzPool", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "djsProgress", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "renAni", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "wanAni", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "tiao", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5Key", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5Result", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "lab_game_No", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Label_pumping", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "wankong", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "kajiang", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "saList", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "saSpriteF", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "helpView", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "yxxSound", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "clock", [_dec31], {
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

System.register("chunks:///_virtual/YxxHall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './GameDef.ts', './AutoEventNode.ts', './GUtil.ts', './yxxGameDef.ts', './yxxModel.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Sprite, Node, assetManager, Prefab, instantiate, i18n, AudioManager, DataManager, UserKey, NetManager, ViewManager, Common, GameDef, AutoEventNode, GUtil, eProto, Event, yxxModel, MainManager;
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
      Sprite = module.Sprite;
      Node = module.Node;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      i18n = module.default;
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
      GameDef = module.GameDef;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      eProto = module.eProto;
      Event = module.Event;
    }, function (module) {
      yxxModel = module.yxxModel;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "a57d2kj3+lEwIJqo9JcI7Q5", "YxxHall", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var YxxHall = exports('default', (_dec = ccclass("YxxHall"), _dec2 = menu("game/Yxxgame/YxxHall"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property({
        type: gts.List
      }), _dec7 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(YxxHall, _AutoEventNode);
        function YxxHall() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "userName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userGold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "room_ScrollView", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roomItem", _descriptor5, _assertThisInitialized(_this));
          _this.freshTime = 0;
          _this._index = 0;
          return _this;
        }
        var _proto = YxxHall.prototype;
        _proto.onLoad = function onLoad() {
          yxxModel.instance.curTableID = null;
          yxxModel.instance.curBankerID = null;
          NetManager.instance.waitServiceSendData();
          this.initEvent();
          this.initHall();
          AudioManager.instance.startBgMusic();
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
        };
        _proto.preload = function preload() {
          var bundle = assetManager.bundles.get(GameDef.Game.Yxxgame);
          if (bundle) {
            bundle.preloadDir("prefab");
          }
        };
        _proto.start = function start() {
          var _this2 = this;
          _AutoEventNode.prototype.start.call(this);
          this.OnEvent(eProto.HD_GetRoomInfo, function (data) {
            if (data.Code != 0) {
              Common.showTip(i18n.errTip(data.Code));
              return;
            }
            var msg = data.Data;

            //            // gts.Debug.Log("===HD_getRoomInfo==" + JSON.stringify(msg));
            if (_this2.room_ScrollView) {
              _this2.room_ScrollView.setData(msg.TableInfos);
              _this2.room_ScrollView.refresh();
            }
          });
          this.getRoomInfo();
          this.schedule(this.getRoomInfo, 2.5);
        };
        _proto.OnEventGameShow = function OnEventGameShow() {
          //        // this.scheduleOnce(() => {
          //        //     if (NetManager.instance._connect == true) {
          //        //         this.EmitEvent(BaccaratDef.Event.ON_GAME_SHOW);
          //        //         BMsgSender.Send_EnterRoom();
          //        //         //! 获取即使记录
          //        //         BMsgSender.Send_History();
          //        //     }
          //        // }, 0.1);
        };
        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {
          //        //监听按钮事件 如：关闭弹窗
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          //        //按钮事件
          EventManager.off(ConfigManager.protocolSd.createRoom, this.showcreate, this);

          //        //传输事件
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //断线

          this.unschedule(this.getRoomInfo);
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        }
        //    // //! 收到进入房间消息
        //    // protected OnRecvEnterRoom(msg: BaccaratMsg.IGameState, enterRoom: boolean) {
        //    //     gts.Debug.Log("===OnRecvEnterRoom==" + JSON.stringify(msg));
        //    // }
        ;

        _proto.initHall = function initHall() {
          this.userGold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
          Common.nickNameFormatL(this.userName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var headiconName = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          //        //头像
          Common.getHead(headiconName, this.head.node);
          var grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          if (grade) {
            var Sprite_level = this.userName.node.parent.getChildByName("Sprite_level");
            Common.setGradeCode(Sprite_level, parseInt(grade));
          }
        };
        _proto.initEvent = function initEvent() {
          //        //监听按钮事件 如：关闭弹窗
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          //        //按钮事件
          EventManager.on(ConfigManager.protocolSd.createRoom, this.showcreate, this);

          //        //传输事件
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //断线
        };

        _proto.backHall = function backHall() {
          console.time("bundle.onLoadHall");
          Common.showWait();
          //        //退到大厅
          Common.returnToHall(this, "Yxxgame");
        };
        _proto.showcreate = function showcreate() {
          Common.showTip(i18n.lang["10009"]);
        };
        _proto.onClickRank = function onClickRank() {
          GUtil.openRank("yxx");
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickHelp = function onClickHelp() {
          var bundle = assetManager.bundles.get(GameDef.Game.Yxxgame);
          bundle.load("prefab/YxxHelp", Prefab, function (err, prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          });
        };
        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("yxx");
        };
        _proto.onClickAutoEnter = function onClickAutoEnter() {
          Common.showWait();

          // let room_ScrollView = this.room_ScrollView.node.getComponent(cc.ScrollView);
          var room_ScrollView = this.room_ScrollView._scrollView;
          var randRoom = room_ScrollView.content.children[Math.floor(Math.random() * 1000) % room_ScrollView.content.children.length];
          var roomItemInfo = randRoom.getComponent("YxxRoomItemInfo");
          yxxModel.instance.curTableID = roomItemInfo.node.name;
          yxxModel.instance.curBankerID = roomItemInfo.spineBanker.skeletonData.name;
          EventManager.emit(Event.onLoadGame);
        };
        _proto.onClickCreateRoom = function onClickCreateRoom() {
          Common.showTip(i18n.lang.devTip);
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
        }
        //    /**
        //     * 获取房间信息
        //     */
        ;

        _proto.getRoomInfo = function getRoomInfo() {
          NetManager.instance.sendOnlineData(eProto.HD_GetRoomInfo, {});
        };
        _createClass(YxxHall, [{
          key: "autoReListenMsg",
          get: function get() {
            return true;
          }
        }]);
        return YxxHall;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "room_ScrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "roomItem", [_dec7], {
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

System.register("chunks:///_virtual/yxxModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './DataManager.ts', './yxxGameDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef, DataManager, UserKey, eRoomStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      eRoomStatus = module.eRoomStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a1fa6cWAupD3Zs+kQqM6P8W", "yxxModel", undefined);
      var yxxModel = exports('yxxModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(yxxModel, _GameDef$BaseSington);
        function yxxModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.roomInfo = {
            _curRoomStatus: eRoomStatus.none,
            _serverID: 0,
            _roomid: ""
          };
          _this.curTableID = null;
          _this.curBankerID = null;
          //    //抽水
          _this.nPummping = 0;
          //    /**[ztype:bet] 上一局下注记录 */
          _this.betselfLast = [0, 0, 0, 0, 0, 0];
          //    /**[ztype:bet] 当前局下注记录 每局清零 */
          _this.betself = [0, 0, 0, 0, 0, 0];
          //    /**[ztype:bet] 当前局下注记录 每局清零 */
          _this.betOther = [0, 0, 0, 0, 0, 0];
          //    /**[ztype:bet] 当前局下注记录 每局清零 */
          _this.betOtherCount = [0, 0, 0, 0, 0, 0];
          //    /**倒计时 */
          _this._curCountDown = 0;
          _this.curTablePlayerLast = null;
          //    //桌面玩家信息列表
          _this._curTablePlayer = null;
          //    //结算信息
          _this._resultData = null;
          //    //所有玩家列表
          _this._AllPlayerinfo = null;
          //    //聊天列表-文本
          _this._chatQueueList = [];
          //    //聊天列表-表情
          _this._expressionQueueList = [];
          return _this;
        }
        var _proto = yxxModel.prototype;
        //    /**更新桌面玩家数据 */
        _proto.updateDeskPlayerByPlayerList = function updateDeskPlayerByPlayerList(data) {
          var redata = [];
          if (!data || data.length == 0) {
            return redata;
          }
          for (var i = 0; i < data.length; i++) {
            if (data[i].UserID != DataManager.instance.getUserDataForKey(UserKey.OID)) {
              redata.push(data[i]);
            }
            if (redata.length == 6) {
              break;
            }
          }
          this.curTablePlayer = redata;
          return redata;
        };
        _proto.getIndexById = function getIndexById(id) {
          if (this.curTablePlayer == null) {
            return -2;
          }
          for (var i = 0; i < this.curTablePlayer.length; i++) {
            if (id == this.curTablePlayer[i].UserID) {
              return i + 1;
            }
          }
          return -1;
        };
        _createClass(yxxModel, [{
          key: "curTablePlayer",
          get: function get() {
            return this._curTablePlayer;
          },
          set: function set(playerList) {
            this._curTablePlayer = playerList;
          }
        }, {
          key: "resultData",
          get: function get() {
            return this._resultData;
          },
          set: function set(resultData) {
            this._resultData = resultData;
          }
        }, {
          key: "AllPlayerinfo",
          get: function get() {
            return this._AllPlayerinfo;
          },
          set: function set(AllPlayerinfo) {
            this._AllPlayerinfo = AllPlayerinfo;
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
        return yxxModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/YxxRecordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PlatformMgr.ts', './AItemRenerer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, SpriteFrame, find, Sprite, PlatformMgr, AItemRenderer;
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
      find = module.find;
      Sprite = module.Sprite;
    }, function (module) {
      PlatformMgr = module.default;
    }, function (module) {
      AItemRenderer = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "3c6daUUWDBHEqxceFE2j97q", "YxxRecordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var YxxRecordItem = exports('default', (_dec = ccclass("YxxRecordItem"), _dec2 = menu("game/Yxxgame/YxxRecordItem"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_AItemRenderer) {
        _inheritsLoose(YxxRecordItem, _AItemRenderer);
        function YxxRecordItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AItemRenderer.call.apply(_AItemRenderer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "md5Original", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "md5Ciphertext", _descriptor2, _assertThisInitialized(_this));
          //    //
          _initializerDefineProperty(_this, "Node_md5", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content_label", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_labels", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_num", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordIma", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = YxxRecordItem.prototype;
        _proto.start = function start() {
          //        //将label节点绑定到label root 并跟随原来节点
        }
        //    //item update
        ;

        _proto.dataChanged = function dataChanged() {
          var tmpdata = this.data;
          if (!tmpdata || tmpdata === undefined) {
            this.node.active = false;
            this.Node_labels.active = false;
            return;
          }

          //        // let count = this.item.itemIndex;
          this.Label_num.string = "#" + tmpdata.GameNo;

          //        //设置背景显示
          //        // this.node.getComponent(cc.Sprite).enabled = count % 2 == 1;

          //        //设置图标
          for (var j = 0; j < tmpdata.Results.length; j++) {
            var sp = find("Node_icon/ima" + (j + 1), this.node);
            if (sp) {
              sp.getComponent(Sprite).spriteFrame = this.recordIma[parseInt(tmpdata.Results[j]) - 1];
            }
          }

          //        //添加MD5信息
          if (this.Node_md5) {
            this.md5Original.string = tmpdata.Original;
            this.md5Ciphertext.string = tmpdata.Ciphertext;
          }
        };
        _proto.onClickCopy_md5Ciphertext = function onClickCopy_md5Ciphertext() {
          PlatformMgr.p.copyToClipBoard(this.md5Ciphertext.string);
        };
        _proto.onClickCopy_md5Original = function onClickCopy_md5Original() {
          PlatformMgr.p.copyToClipBoard(this.md5Original.string);
        };
        return YxxRecordItem;
      }(AItemRenderer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "md5Original", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "md5Ciphertext", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_md5", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "content_label", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_labels", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_num", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "recordIma", [_dec9], {
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

System.register("chunks:///_virtual/YxxRoomItemInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AutoChangeParent.ts', './Common.ts', './yxxGameDef.ts', './yxxModel.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, sp, Node, Label, SpriteFrame, UIOpacity, assetManager, Sprite, Component, GameDef, AutoChangeParent, Common, Event, yxxModel, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Node = module.Node;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      assetManager = module.assetManager;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      Event = module.Event;
    }, function (module) {
      yxxModel = module.yxxModel;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "11d8c2LE/FBq7Q1YFz5XHDF", "YxxRoomItemInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var YxxRoomItemInfo = exports('default', (_dec = ccclass("YxxRoomItemInfo"), _dec2 = menu("game/Yxxgame/YxxRoomItemInfo"), _dec3 = property(sp.Skeleton), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(SpriteFrame), _dec8 = property(Label), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(YxxRoomItemInfo, _Component);
        function YxxRoomItemInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spineBanker", _descriptor, _assertThisInitialized(_this));
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_labels", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_players", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_tableBg", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_md5Tag", _descriptor7, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = YxxRoomItemInfo.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {
          this.node.off("click");
        };
        _proto.start = function start() {
          var _this2 = this;
          //        //将label节点绑定到label root 并跟随原来节点
          AutoChangeParent.Bind(this.Node_labels, this.content_label, true).OnUpdateNotify(function (dt) {
            _this2.Node_labels.getComponent(UIOpacity).opacity = _this2.node.getComponent(UIOpacity).opacity;
            _this2.Node_labels.active = _this2.node.active;
            _this2.Node_labels.scale = _this2.node.scale;
          }, this);

          //        //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            //            // //加载荷官
            var bundle = assetManager.bundles.get(GameDef.Game.Yxxgame);
            gts.Debug.Log("=== this.item.itemIndex==" + this.item.itemIndex);
            var index = this.item.itemIndex % 3;
            Common.loadHeguanByType(this.spineBanker, bundle, "spine/heguan" + (18 + index)).then(function () {
              _this2.spineBanker.setAnimation(0, "emoji", true);
            });
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
              _this2.Node_labels.active = false;
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
            this.Node_labels.active = false;
            return;
          }
          this.node.name = "" + tmpdata.TableID;
          this.Label_players.string = "" + tmpdata.PlayerNum;
          this.Sprite_md5Tag.active = tmpdata.IsMd5Table;
          this.node.getComponent(Sprite).spriteFrame = this.spriteFrame_tableBg[this.item.itemIndex % 3];
          if (tmpdata.Records.length > 0) {
            var totalCount = 0;
            var arrCount = [0, 0, 0, 0, 0, 0];
            for (var _iterator = _createForOfIteratorHelperLoose(tmpdata.Records), _step; !(_step = _iterator()).done;) {
              var recordInfo = _step.value;
              for (var _iterator2 = _createForOfIteratorHelperLoose(recordInfo.Results), _step2; !(_step2 = _iterator2()).done;) {
                var info = _step2.value;
                totalCount++;
                arrCount[parseInt(info) - 1]++;
              }
            }
            for (var i = 0; i < arrCount.length; i++) {
              var rate = Math.floor(arrCount[i] * 10000 / totalCount);
              this.Label_rate[i].string = rate / 100 + "%";
            }
          }
        };
        _proto.onClickRoom = function onClickRoom(event) {
          yxxModel.instance.curTableID = this.node.name;
          yxxModel.instance.curBankerID = this.spineBanker.skeletonData.name;
          EventManager.emit(Event.onLoadGame);
        };
        _createClass(YxxRoomItemInfo, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return YxxRoomItemInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spineBanker", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content_label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_labels", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_players", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_tableBg", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_md5Tag", [_dec9], {
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

System.register("chunks:///_virtual/YxxshowRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './yxxGameCtrl.ts', './yxxGameDef.ts', './yxxModel.ts', './MainManager.ts', './AVirtualScrollView.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, UITransform, tween, v3, find, Label, GameDef, yxxGameCtrl, eProto, Event, yxxModel, MainManager, AVirtualScrollView;
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
      Prefab = module.Prefab;
      UITransform = module.UITransform;
      tween = module.tween;
      v3 = module.v3;
      find = module.find;
      Label = module.Label;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      yxxGameCtrl = module.yxxGameCtrl;
    }, function (module) {
      eProto = module.eProto;
      Event = module.Event;
    }, function (module) {
      yxxModel = module.yxxModel;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      AVirtualScrollView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "78840u9G1dIWauBWqllYuDH", "YxxshowRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var YxxshowRecord = exports('default', (_dec = ccclass("YxxshowRecord"), _dec2 = menu("game/Yxxgame/YxxshowRecord"), _dec3 = property(Node), _dec4 = property({
        type: AVirtualScrollView
      }), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(YxxshowRecord, _GameDef$BaseView);
        function YxxshowRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgEvent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "room_ScrollView", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item_0", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item_1", _descriptor4, _assertThisInitialized(_this));
          _this._orginx = void 0;
          _this.isMd5 = false;
          return _this;
        }
        var _proto = YxxshowRecord.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, yxxGameCtrl.instance);
          this.bgEvent.on(Node.EventType.TOUCH_END, this.exitRecord, this);
          if (this.room_ScrollView) {
            this.room_ScrollView.itemRenderer = this.isMd5 ? this.item_1 : this.item_0;
          }
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          _GameDef$BaseView.prototype.onEnable.call(this);
          this.bgEvent.active = true;

          //        //获取记录
          var strCmd = eProto.getRecordDetails.split("/")[1];
          var cmd = yxxModel.instance.roomInfo._serverID + "/" + strCmd;
          var data = {};
          yxxGameCtrl.instance.SendData(cmd, data);
          this.scheduleOnce(function () {
            _this2._orginx = _this2.node.getChildByName("bg").getPosition().x;
            _this2.showRecord();
          });
          EventManager.on(Event.onUpdateRecord, function () {
            //                //获取记录
            var strCmd = eProto.getRecordDetails.split("/")[1];
            var cmd = yxxModel.instance.roomInfo._serverID + "/" + strCmd;
            var data = {};
            yxxGameCtrl.instance.SendData(cmd, data);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.off(Event.onUpdateRecord);
        };
        _proto.showRecord = function showRecord() {
          //        //显示动画
          var direx = this.node.getChildByName("bg").getComponent(UITransform).width;
          var times = Math.abs(this.node.getChildByName("bg").getPosition().x - (this._orginx - direx)) / (2 * this.node.getChildByName("bg").getComponent(UITransform).width);
          tween(this.node.getChildByName("bg")).stop().to(times, {
            position: v3(this._orginx - direx, this.node.getChildByName("bg").position.y)
          }, {
            easing: "backOut"
          }).start();
        };
        _proto.exitRecord = function exitRecord() {
          var _this3 = this;
          var times = Math.abs(this.node.getChildByName("bg").getPosition().x - this._orginx) / (2 * this.node.getChildByName("bg").getComponent(UITransform).width);
          tween(this.node.getChildByName("bg")).stop().to(times, {
            position: v3(this._orginx, this.node.getChildByName("bg").position.y)
          }, {
            easing: "backIn"
          }).call(function () {
            _this3.node.active = false;
          }).start();
          this.bgEvent.active = false;
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.showRecordByData = function showRecordByData(data) {
          //        // let scrollview = this.node.getChildByName("bg").getChildByName("ScrollView_item").getComponent(cc.ScrollView);

          //        //计算百分比
          if (data.length > 0) {
            var totalCount = 0;
            var arrCount = [0, 0, 0, 0, 0, 0];
            for (var _iterator = _createForOfIteratorHelperLoose(data), _step; !(_step = _iterator()).done;) {
              var recordInfo = _step.value;
              for (var _iterator2 = _createForOfIteratorHelperLoose(recordInfo.Results), _step2; !(_step2 = _iterator2()).done;) {
                var result = _step2.value;
                totalCount++;
                arrCount[parseInt(result) - 1]++;
              }
            }
            for (var i = 0; i < arrCount.length; i++) {
              var rate = Math.floor(arrCount[i] * 10000 / totalCount);
              var key = i + 1;
              var label = find("bg/item_bg/label" + key, this.node).getComponent(Label);
              label.string = rate / 100 + "%";
            }
          }
          if (this.room_ScrollView) {
            var dataList = parseInt(data[0].GameNo) > parseInt(data[1].GameNo) ? data : data.reverse();
            this.room_ScrollView.refreshData(dataList);
            // this.room_ScrollView.refresh();
          }
        };

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.getRecordDetails:
              {
                //                // 获取游戏开奖记录
                this.showRecordByData(data);
                break;
              }
          }
        };
        return YxxshowRecord;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgEvent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "room_ScrollView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item_0", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "item_1", [_dec6], {
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
  r('virtual:///prerequisite-imports/Yxxgame', 'chunks:///_virtual/Yxxgame'); 
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