System.register("chunks:///_virtual/DxVipCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './DxVipModel.ts', './I18n.ts', './ViewManager.ts', './DxVipDef.ts', './DxVipUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _extends, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, DxVipModel, i18n, ViewManager, eProto, eRunStatus, eEvent, DxVipUtils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
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
      DxVipModel = module.DxVipModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
    }, function (module) {
      DxVipUtils = module.DxVipUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "c765fWUNkRP7LFnJ6JVYj20", "DxVipCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DxVipCtrl = exports('DxVipCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(DxVipCtrl, _GameDef$BaseCtrl);
        function DxVipCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._dataManager = void 0;
          _this._model = null;
          _this.isReqBet = false;
          _this.betResultUnknown = false;
          _this.betAttempt = 0;
          _this.disposed = false;
          _this.cancelBetRequest = null;
          _this.submittedBetList = null;
          _this._configManager = ConfigManager.instance;
          _this._eventManager = EventManager.instance;
          _this._netManager = NetManager.instance;
          _this._dataManager = DataManager.instance;
          _this._model = DxVipModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = DxVipCtrl.prototype;
        _proto.destroy = function destroy() {
          this.cancelBetWait();
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete DxVipCtrl._instance;
          DxVipCtrl._instance = null;
          DxVipModel.destroy();
          DxVipUtils.destroy();
        };
        _proto.cancelBetWait = function cancelBetWait() {
          this.disposed = true;
          this.betAttempt++;
          var cancel = this.cancelBetRequest;
          this.cancelBetRequest = null;
          // 只取消本地等待，不能撤销已经提交到服务端的下注。
          if (cancel) cancel();
        };
        _proto.initProto = function initProto() {
          _GameDef$BaseCtrl.prototype.initProto.call(this);

          //注册网络监听--本游戏
          for (var _i = 0, _Object$entries = Object.entries(eProto); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            EventManager.instance.on(value, this.onRecvData, this);
          }

          // //注册网络监听--大厅
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.on(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.removeProto = function removeProto() {
          _GameDef$BaseCtrl.prototype.removeProto.call(this);

          //注册网络监听--本游戏values
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.instance.off(value, this.onRecvData, this);
          }

          // //注册网络监听--大厅
          this._eventManager.off(this._configManager.protocolHall.login, this.onRecvData, this); //断线重连
          this._eventManager.off(this._configManager.protocolHall.getWallet, this.onRecvData, this);
          this._eventManager.off(this._configManager.protocolHall.pushWallet, this.onRecvData, this);
        };
        /** 返回 true 仅表示进入提交流程，不代表服务端下注成功。 */
        _proto.reqBet = function reqBet() {
          var _this2 = this;
          if (this.disposed || this.isReqBet || this.betResultUnknown || this._model.gameStatus !== eRunStatus.NONE || !this._model.gameInfo) {
            return false;
          }
          var betArr = [];
          var totalBet = 0;
          for (var betPos = 0; betPos < 10; betPos++) {
            var arrBetList = DxVipModel.instance.betList[betPos];
            if (!arrBetList) {
              continue;
            }
            var betInfo = {
              pos: betPos,
              Amount: 0
            };
            for (var _iterator = _createForOfIteratorHelperLoose(arrBetList), _step; !(_step = _iterator()).done;) {
              var count = _step.value;
              betInfo.Amount += count;
              totalBet += count;
            }
            betArr.push(betInfo);
          }
          if (totalBet < DxVipModel.instance.gameInfo.TotalBetMin) {
            var tip = Common.strFormat(i18n.lang["10063"], Common.ChangeMoneyShow(DxVipModel.instance.gameInfo.TotalBetMin, 2));
            Common.showTip(tip);
            return false;
          }
          var model = this._model;
          var net = this._netManager;
          var session = net.hallSession();
          var attempt = ++this.betAttempt;
          // 等待期间冻结本次筹码快照；响应不得使用之后被编辑的数组。
          this.submittedBetList = model.betList.map(function (list) {
            return list ? list.slice() : null;
          });
          model.curTotalBet = totalBet;
          // 下注前的钱包缓存不属于本局，不能在结果展示结束时重新覆盖扣注余额。
          model.endBalance = 0;
          model.gameStatus = eRunStatus.START;
          this.isReqBet = true;
          var current = function current() {
            return !_this2.disposed && attempt === _this2.betAttempt && session === net.hallSession();
          };
          var unknown = function unknown() {
            if (!current() || !_this2.isReqBet || _this2.betResultUnknown) return;
            _this2.cancelBetRequest = null;
            // 本地等待结束不能证明服务端未下注；保留锁，不退款、不重发。
            _this2.betResultUnknown = true;
            _this2.emitUpdateView(eEvent.onBetStateChanged, {});
            Common.showTip(i18n.lang.betResultUnknown);
          };
          this.emitUpdateView(eEvent.onBetStateChanged, {});
          try {
            var cancel = net.sendOnlineData(eProto.HD_Bet, {
              betMsg: JSON.stringify(betArr)
            }, function (response) {
              // 当前和旧响应都由本次调用消费，避免广播污染重新进入后的实例。
              if (!current() || !_this2.isReqBet || _this2.betResultUnknown) return false;
              _this2.cancelBetRequest = null;
              if (!response || response.Code == 302 || response.Code == 401) {
                unknown();
                return false;
              }
              if (!(response.Code && response.Code != 0)) {
                var result = response.Data;
                if (!result || !Array.isArray(result.Dices) || result.Dices.length !== 3 || !result.Dices.every(function (point) {
                  return Number.isInteger(point) && point >= 1 && point <= 6;
                }) || typeof result.Reward !== "number" || !Number.isFinite(result.Reward) || result.Reward < 0) {
                  unknown();
                  return false;
                }
              }
              _this2.onRecvData(_extends({}, response, {
                cmd: eProto.HD_Bet
              }));
              return false;
            }, unknown);
            if (current() && this.isReqBet && !this.betResultUnknown) {
              this.cancelBetRequest = cancel || null;
            } else if (cancel) {
              cancel();
            }
          } catch (_) {
            unknown();
          }
          return true;
        }

        /**请求退出房间 */;
        _proto.reqExit = function reqExit() {
          this.cancelBetWait();
          DxVipUtils.destroy();
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotAlibaba"
          });
        }

        // /**请求历史记录 */
        // reqHistory(offset = 0, pageSize = 13) {
        //     NetManager.instance.sendOnlineData(DxVipDef.eProto.HD_History, {
        //         Offset: offset,
        //         PageSize: pageSize,
        //         RecordType: "slotAlibaba",
        //     });
        // }

        /**请求记录 */;
        _proto.reqRecord = function reqRecord(offset, pageSize) {
          if (offset === void 0) {
            offset = 0;
          }
          if (pageSize === void 0) {
            pageSize = 13;
          }
          NetManager.instance.sendOnlineData(eProto.Record, {
            Offset: offset,
            PageSize: pageSize,
            RecordType: "slotAlibaba"
          });
        }

        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          if (this.disposed) return;
          if (data.cmd === eProto.HD_Bet && (!this.isReqBet || this.betResultUnknown)) return;
          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code));
            }
            switch (data.cmd) {
              case eProto.HD_Bet:
                {
                  this.isReqBet = false;
                  this._model.gameStatus = eRunStatus.NONE;
                  this.emitUpdateView(eEvent.onBetStateChanged, {});
                  break;
                }
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                DxVipModel.instance.gameInfo = data.Data;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                this._model.betListBack = this.submittedBetList.map(function (list) {
                  return list ? list.slice() : null;
                });
                this._model.betList = this.submittedBetList.map(function (list) {
                  return list ? list.slice() : null;
                });
                // 视图暂时停用时仍记录已确认状态，重新启用可按权威结果完成展示。
                this._model.gameStatus = eRunStatus.SHAKE;
                DxVipModel.instance.betResult = data.Data;
                break;
              }
            case eProto.HD_History:
              {
                this._model.mergeHistory(data.Data.history || []);
                break;
              }
            case eProto.HD_Rank:
              {
                emitData = data.Data;
                break;
              }
            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==DxVip=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (DxVipModel.instance.curBalance > 0) {
                  DxVipModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                DxVipModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==DxVip=pushWallet==" + _HD_Wallet.VndBalance);
                if (DxVipModel.instance.curBalance > 0) {
                  DxVipModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                DxVipModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        };
        return DxVipCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxVipDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6f071IeEPxEHrKwabO5AE5t", "DxVipDef", undefined);
      var cBundle = exports('cBundle', "DxVipGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "dxVip/HD_info";
        eProto["HD_Bet"] = "dxVip/HD_Bet";
        eProto["HD_History"] = "dxVip/HD_History";
        eProto["HD_Leave"] = "dxVip/HD_Leave";
        eProto["Record"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({}));
      var eZindex = exports('eZindex', {
        NONE: 0,
        MASK: 1000,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        cSymbolW: 192,
        cSymbolH: 180
      });
      var arrBetList = exports('arrBetList', [10000, 50000, 100000, 500000, 1000000, 5000000, 10000000]);
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        START: 1,
        SHAKE: 2,
        END: 3
      });
      var eRunType = exports('eRunType', {
        NONE: 0,
        SPECIAL: 1
      });
      var cRate = exports('cRate', {
        "2": {
          3: 50,
          4: 100,
          5: 150,
          6: 200
        }
      });
      var eAutoRateType = exports('eAutoRateType', Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      }));
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onShakeStart"] = "onShakeStart";
        eEvent["onShakeEnd"] = "onShakeEnd";
        eEvent["onBetStateChanged"] = "dxVip/betStateChanged";
        eEvent["updateWin"] = "updateWin";
        eEvent["onUpdatePath"] = "onUpdatePath";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bgm: "sound/BGM",
        Begin: "sound/Begin",
        Bet: "sound/Bet",
        Cancel: "sound/Cancel",
        Coins: "sound/Coins",
        Double: "sound/Double",
        Reward: "sound/Reward",
        Roll: "sound/Roll",
        Win: "sound/Win",
        CoinsBoom: "sound/CoinsBoom",
        Stop: "sound/Stop"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxVipDiceCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './DxVipDef.ts', './DxVipModel.ts', './DxVipUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Camera, Node, Animation, MeshCollider, v3, Tween, RigidBody, isValid, v2, Vec2, TweenSystem, tween, Component, EventManager, eRunStatus, eEvent, eSound, DxVipModel, DxVipUtils;
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
      Camera = module.Camera;
      Node = module.Node;
      Animation = module.Animation;
      MeshCollider = module.MeshCollider;
      v3 = module.v3;
      Tween = module.Tween;
      RigidBody = module.RigidBody;
      isValid = module.isValid;
      v2 = module.v2;
      Vec2 = module.Vec2;
      TweenSystem = module.TweenSystem;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      DxVipModel = module.DxVipModel;
    }, function (module) {
      DxVipUtils = module.DxVipUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "c0173Lq3q9G7KoEhbkr8nu+", "DxVipDiceCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DxVipDiceCtrl = exports('DxVipDiceCtrl', (_dec = ccclass("DxVipGame/DxVipDiceCtrl"), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Animation), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxVipDiceCtrl, _Component);
        function DxVipDiceCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "diceButtom", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrDice", _descriptor3, _assertThisInitialized(_this));
          _this.arrLastPos = [];
          _initializerDefineProperty(_this, "ani_result", _descriptor4, _assertThisInitialized(_this));
          _this.roundGeneration = 0;
          _this.shakeRunning = false;
          _this.soundOwner = null;
          _this.resultAnimationFinished = null;
          _this.settledResult = null;
          _this.completedResult = null;
          _this.finalAngles = [];
          _this.shakeStatus = -1;
          _this.resultInfo = null;
          return _this;
        }
        var _proto = DxVipDiceCtrl.prototype;
        ////////////////////////////////////////////
        _proto.onEnable = function onEnable() {
          this.diceButtom.getComponent(MeshCollider).on("onCollisionStay", this.onCollisionStay, this);
          var model = DxVipModel.instance;
          var recover = model.betResult && (model.gameStatus === eRunStatus.SHAKE || model.gameStatus === eRunStatus.END);
          if (!recover) {
            for (var _iterator = _createForOfIteratorHelperLoose(this.arrDice), _step; !(_step = _iterator()).done;) {
              var dice = _step.value;
              // dice.getComponent(RigidBody).type = ERigidBodyType.KINEMATIC;
              // dice.getComponent(BoxCollider).on("onCollisionExit", this.onCollisionExit, this);
              // dice.getComponent(BoxCollider).on("onCollisionStay", this.onCollisionStay, this);
              // dice.getComponent(BoxCollider).on("onCollisionEnter", this.onCollisionEnter, this);

              dice.eulerAngles = v3(Math.random() * 360, Math.random() * 360, Math.random() * 360);
              dice.position = v3(Math.random() * 0.1 - 0.05, Math.random() * 0.07 + 0.78, Math.random() * 0.1 + 0.35);
            }
          }
          EventManager.instance.on(eEvent.onShakeStart, this.onShakeStart, this);
          if (recover) this.resumeConfirmedResult();
        };
        _proto.onDisable = function onDisable() {
          // 停用时清除排程和本轮 Tween，防止重新启用后续跑旧轮。
          this.roundGeneration++;
          this.shakeRunning = false;
          this.settledResult = null;
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.diceButtom);
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.arrDice), _step2; !(_step2 = _iterator2()).done;) {
            var dice = _step2.value;
            Tween.stopAllByTarget(dice);
          }
          var collider = this.diceButtom.getComponent(MeshCollider);
          collider.off("onCollisionStay", this.onCollisionStay, this);
          collider.off("onCollisionEnter", this.onCollisionEnter, this);
          if (this.resultAnimationFinished) {
            this.ani_result.off(Animation.EventType.FINISHED, this.resultAnimationFinished, this);
            this.resultAnimationFinished = null;
          }
          this.ani_result.stop();
          this.ani_result.node.active = false;
          if (this.soundOwner) this.soundOwner.stopSound(eSound.Roll);
          this.soundOwner = null;
          EventManager.instance.off(eEvent.onShakeStart, this.onShakeStart, this);
        };
        _proto.onLoad = function onLoad() {
          // let center = v3(0, 0.772, 0.4);
          var dis = 0.034;
          var startX = -0.048;
          var startZ = 0.35;
          for (var iRow = 0; iRow < 4; iRow++) {
            for (var iCol = 0; iCol < 4; iCol++) {
              if (iRow == 0 && iCol == 0 || iRow == 0 && iCol == 3 || iRow == 3 && iCol == 0 || iRow == 3 && iCol == 3) {
                continue;
              }
              var pos = v3(startX + iCol * dis, 0.772, startZ + iRow * dis);
              this.arrLastPos.push(pos);
            }
          }
        };
        _proto.onCollisionStay = function onCollisionStay(event) {
          var dice = event.otherCollider.node;
          var other = event.selfCollider.node;
          if (DxVipModel.instance.gameStatus != eRunStatus.SHAKE || other.name != "X_shaizidibu1") {
            return;
          }
          // console.log(`=====onCollisionStay=other.name==${event.otherCollider.node.name}==`);
          // console.log(`=====onCollisionStay=selfCollider.name==${event.selfCollider.node.name}==`);

          if (this.resultInfo && this.resultInfo.length > 0) {
            var lineV = v3(0);
            var AngularV = v3(0);
            dice.getComponent(RigidBody).getLinearVelocity(lineV);
            dice.getComponent(RigidBody).getAngularVelocity(AngularV);
            if (Math.abs(lineV.x + lineV.y + lineV.z) < 0.05) {
              //v3(Math.random() * 3 - 1.5, Math.random() * 3 + 3, Math.random() * 3 - 1.5);
              var force = v3(Math.random() * 12 - 6, Math.random() * 10 + 25, Math.random() * 12 - 6);
              var point = v3(Math.random() * 0.06 - 0.03, Math.random() * 0.04, Math.random() * 0.06 - 0.03);
              dice.getComponent(RigidBody).applyForce(force, point);
            }
          }
        };
        _proto.onCollisionEnter = function onCollisionEnter(event) {
          // console.log(`=====onCollisionEnter=other.name==${event.otherCollider.node.name}==`);
          // console.log(`=====onCollisionEnter=selfCollider.name==${event.selfCollider.node.name}==`);
        };
        _proto.onCollisionExit = function onCollisionExit(event) {
          var dice = event.otherCollider.node;
          var other = event.selfCollider.node;
          if (other.name != "X_shaizidibu1") {
            return;
          }
        };
        _proto.onShakeStart = function onShakeStart() {
          var _this2 = this;
          if (this.shakeRunning || !this.enabledInHierarchy || !isValid(this.node, true)) return;
          var model = DxVipModel.instance;
          var result = model.betResult;
          if (!result || model.gameStatus !== eRunStatus.SHAKE || this.settledResult === result) return;
          var dices = result.Dices.slice();
          var generation = ++this.roundGeneration;
          var current = function current() {
            return generation === _this2.roundGeneration && _this2.enabledInHierarchy && isValid(_this2.node, true);
          };
          this.shakeRunning = true;
          ////////////////////////
          //////////////////////
          this.resultInfo = [];
          for (var i = 0; i < 3; i++) {
            this.resultInfo[i] = {
              point: dices[i],
              status: 0,
              isExit: false
            };
          }

          /////////////////////////////////////////////
          this.shakeStatus = 0;
          this.diceButtom.getComponent(MeshCollider).on("onCollisionEnter", this.onCollisionEnter, this);
          this.diceButtom.getComponent(MeshCollider).on("onCollisionStay", this.onCollisionStay, this);
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.arrDice), _step3; !(_step3 = _iterator3()).done;) {
            var dice = _step3.value;
            // dice.getComponent(BoxCollider).on("onCollisionExit", this.onCollisionExit, this);

            // dice.getComponent(RigidBody).wakeUp();
            // dice.getComponent(BoxCollider).on("onCollisionStay", this.onCollisionStay, this);
            // dice.getComponent(BoxCollider).on("onCollisionEnter", this.onCollisionEnter, this);

            // let force = v3(Math.random() * 12 - 6, Math.random() * 20 + 40, Math.random() * 12 - 6);
            // let point = v3(Math.random() * 0.3 - 0.15, Math.random() * 0.3, Math.random() * 0.3 - 0.15);
            // dice.getComponent(RigidBody).applyForce(force, point);
            var pos_0 = v2(0, 0.4);
            var pos_1 = v2(dice.position.x, dice.position.z);
            var dis = Vec2.distance(pos_0, pos_1);
            var force = v3(Math.random() * 500 * dis - 500 * dis / 2, Math.random() * 30 + 200 * (0.1 - dis), Math.random() * 500 * dis - 500 * dis / 2);
            var point = v3(0); //v3(Math.random() * 0.2 - 0.1, Math.random() * 0.1, Math.random() * 0.2 - 0.1);

            dice.getComponent(RigidBody).applyForce(force, point);
          }
          var soundOwner = this.soundOwner = DxVipUtils.instance;
          soundOwner.playSound(eSound.Roll, true);

          // Tween.stopAllByTarget(this.diceButtom);
          if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.diceButtom) == 0) {
            tween(this.diceButtom).to(0.04, {
              position: v3(this.diceButtom.position.x, 0.76, this.diceButtom.position.z)
              // eulerAngles: v3(-90, 0, Math.random() * 4 - 2),
            }).to(0.04, {
              position: v3(this.diceButtom.position.x, 0.77, this.diceButtom.position.z)
              // eulerAngles: v3(-90, 0, Math.random() * 4 - 2),
            }).union().repeat(35).call(function () {
              if (!current()) return;
              _this2.shakeStatus = 1;
              _this2.diceButtom.getComponent(MeshCollider).off("onCollisionStay", _this2.onCollisionStay, _this2);
              var diceFinished = false;
              var trayFinished = false;
              // 骰子朝向和底盘尾段都完成后才开奖，取消只作废回调，不伪报成功。
              var finishRound = function finishRound() {
                if (!current() || !_this2.shakeRunning || !diceFinished || !trayFinished) return;
                _this2.completeSettlement(result);
              };
              _this2.settleDices(result, generation, function () {
                diceFinished = true;
                finishRound();
              });
              _this2.scheduleOnce(function () {
                if (!current()) return;
                _this2.ani_result.node.active = true;
                _this2.ani_result.play("ani_result2");
                soundOwner.playSound(eSound.Stop);
                _this2.resultAnimationFinished = function () {
                  if (!current()) return;
                  _this2.resultAnimationFinished = null;
                  _this2.ani_result.stop();
                  _this2.ani_result.node.active = false;
                };
                _this2.ani_result.once(Animation.EventType.FINISHED, _this2.resultAnimationFinished, _this2);
              });
              tween(_this2.diceButtom).to(0.1, {
                position: v3(_this2.diceButtom.position.x, 0.76, _this2.diceButtom.position.z)
              }).to(0.1, {
                position: v3(_this2.diceButtom.position.x, 0.77, _this2.diceButtom.position.z)
              }).call(function () {
                if (current()) soundOwner.stopSound(eSound.Roll);
              }).union().repeat(2).delay(0.5).call(function () {
                trayFinished = true;
                finishRound();
              }).start();
            }).start();
          }
        }

        /** true 表示当前服务端点数已落定；false 时调用方继续等待，不代表下注失败。 */;
        _proto.resumeConfirmedResult = function resumeConfirmedResult() {
          var _this3 = this;
          if (!this.enabledInHierarchy || !isValid(this.node, true)) return false;
          var model = DxVipModel.instance;
          var result = model.betResult;
          if (!result) return false;
          if (this.settledResult === result) return true;
          if (this.shakeRunning || model.gameStatus !== eRunStatus.SHAKE && model.gameStatus !== eRunStatus.END) return false;
          var generation = ++this.roundGeneration;
          this.shakeRunning = true;
          // 恢复仅重做已确认点数的落位，不重发下注，也不从随机初始姿态直接展示结果。
          this.diceButtom.getComponent(MeshCollider).off("onCollisionStay", this.onCollisionStay, this);
          this.diceButtom.setPosition(this.diceButtom.position.x, 0.77, this.diceButtom.position.z);
          this.settleDices(result, generation, function () {
            return _this3.completeSettlement(result);
          });
          return false;
        };
        _proto.settleDices = function settleDices(result, generation, onComplete) {
          var _this4 = this;
          var positions = this.arrLastPos.slice();
          this.finalAngles = [];
          var remaining = this.arrDice.length;
          var _loop = function _loop() {
            var dice = _step4.value;
            var body = dice.getComponent(RigidBody);
            body.clearState();
            body.clearForces();
            body.sleep();
            _this4.scheduleOnce(function () {
              if (generation !== _this4.roundGeneration || !_this4.enabledInHierarchy || !isValid(_this4.node, true) || DxVipModel.instance.betResult !== result) return;
              var slot = Math.floor(Math.random() * positions.length);
              var position = positions.splice(slot, 1)[0];
              var index = dice.name === "X_touzi1" ? 1 : dice.name === "X_touzi2" ? 2 : 0;
              var angles = _this4.getArrEulerAngle(result.Dices[index]);
              _this4.finalAngles[index] = v3(angles[1].x, angles[1].y, angles[1].z);
              _this4.doDiceAction(dice, position, angles[0], angles[1], function () {
                if (--remaining === 0) onComplete();
              });
            });
          };
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.arrDice), _step4; !(_step4 = _iterator4()).done;) {
            _loop();
          }
        };
        _proto.completeSettlement = function completeSettlement(result) {
          // 先落定的骰子可能在等待其余动作时被动态物理回写；发布前同步封口三骰姿态。
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.arrDice), _step5; !(_step5 = _iterator5()).done;) {
            var dice = _step5.value;
            Tween.stopAllByTarget(dice);
            var index = dice.name === "X_touzi1" ? 1 : dice.name === "X_touzi2" ? 2 : 0;
            var body = dice.getComponent(RigidBody);
            body.clearState();
            body.clearForces();
            dice.eulerAngles = this.finalAngles[index];
            body.sleep();
          }
          this.shakeRunning = false;
          this.settledResult = result;
          // 同一局恢复姿态不重复发布完成；UI 通过恢复接口补领错过的就绪状态。
          if (this.completedResult !== result) {
            this.completedResult = result;
            EventManager.instance.emit(eEvent.onShakeEnd);
          }
        };
        _proto.getEulerAngle = function getEulerAngle(point) {
          var arrRotationInfo = [v3(Math.random() * 30 - 15 - 90, Math.random() * 360, 0),
          //1
          v3(Math.random() * 30 - 15, Math.random() * 360, 0),
          //2
          v3(Math.random() * 360, Math.random() * 360, Math.random() * 30 - 15 - 90),
          //3
          v3(Math.random() * 360, Math.random() * 360, Math.random() * 30 - 15 - 270),
          //4
          v3(0, Math.random() * 360, Math.random() * 30 - 15 - 180),
          //5
          v3(Math.random() * 30 - 15 - 270, Math.random() * 360, 0) //6
          ];

          var eulerAngles = arrRotationInfo[point - 1];
          return eulerAngles;
        };
        _proto.getEulerAngleLast = function getEulerAngleLast(point) {
          var arrRotationInfo = [v3(-90, Math.random() * 360, 0),
          //1
          v3(0, Math.random() * 360, 0),
          //2
          v3(Math.random() * 360, Math.random() * 360, -90),
          //3
          v3(Math.random() * 360, Math.random() * 360, -270),
          //4
          v3(0, Math.random() * 360, -180),
          //5
          v3(-270, Math.random() * 360, 0) //6
          ];

          var eulerAngles = arrRotationInfo[point - 1];
          return eulerAngles;
        };
        _proto.getArrEulerAngle = function getArrEulerAngle(point) {
          var arrRotationInfo = [v3(Math.random() * 30 - 15 - 90, Math.random() * 360, 0),
          //1
          v3(Math.random() * 30 - 15, Math.random() * 360, 0),
          //2
          v3(Math.random() * 360, Math.random() * 360, Math.random() * 30 - 15 - 90),
          //3
          v3(Math.random() * 360, Math.random() * 360, Math.random() * 30 - 15 - 270),
          //4
          v3(0, Math.random() * 360, Math.random() * 30 - 15 - 180),
          //5
          v3(Math.random() * 30 - 15 - 270, Math.random() * 360, 0) //6
          ];

          var arrRotationInfoLast = [v3(-90, arrRotationInfo[point - 1].y, 0),
          //1
          v3(0, arrRotationInfo[point - 1].y, 0),
          //2
          v3(arrRotationInfo[point - 1].x, arrRotationInfo[point - 1].y, -90),
          //3
          v3(arrRotationInfo[point - 1].x, arrRotationInfo[point - 1].y, -270),
          //4
          v3(0, arrRotationInfo[point - 1].y, -180),
          //5
          v3(-270, arrRotationInfo[point - 1].y, 0) //6
          ];

          return [arrRotationInfo[point - 1], arrRotationInfoLast[point - 1]];
        };
        _proto.getDistance = function getDistance(startPos, endPos) {
          var diff_x = startPos.x - endPos.x;
          var diff_z = startPos.z - endPos.z;
          var distance = Math.pow(diff_x * diff_x + diff_z * diff_z, 0.5);
          return distance;
        };
        _proto.updatePosition = function updatePosition(node1, node2) {
          var list = [v3(-0.03, 0, 0.4), v3(0.03, 0, 0.4), v3(0, 0, 0.37), v3(0, 0, 0.43)];
          for (var _i = 0, _list = list; _i < _list.length; _i++) {
            var temp = _list[_i];
            var len = this.getDistance(node1.position, temp);
            if (len > 0.025) {
              node2.setPosition(temp.x, node2.position.y, temp.z);
              break;
            }
          }
        };
        _proto.updatePositionByIndex = function updatePositionByIndex(index) {
          var _this5 = this;
          var list = [v3(-0.03, 0, 0.4), v3(0.03, 0, 0.4), v3(0, 0, 0.37), v3(0, 0, 0.43), v3(-0.05, 0, 0.4), v3(0.05, 0, 0.4), v3(0, 0, 0.35), v3(0, 0, 0.45)];
          list.sort(function (a, b) {
            return _this5.getDistance(a, _this5.arrDice[index].position) - _this5.getDistance(b, _this5.arrDice[index].position);
          });
          if (index == 1) {
            for (var _iterator6 = _createForOfIteratorHelperLoose(list), _step6; !(_step6 = _iterator6()).done;) {
              var temp = _step6.value;
              var len1 = this.getDistance(this.arrDice[0].position, temp);
              var len2 = this.getDistance(this.arrDice[2].position, temp);
              if (len1 > 0.034 && len2 > 0.034) {
                this.arrDice[index].setPosition(temp.x, this.arrDice[index].position.y, temp.z);
                break;
              }
            }
          } else if (index == 2) {
            for (var _iterator7 = _createForOfIteratorHelperLoose(list), _step7; !(_step7 = _iterator7()).done;) {
              var _temp = _step7.value;
              var _len2 = this.getDistance(this.arrDice[0].position, _temp);
              var _len3 = this.getDistance(this.arrDice[1].position, _temp);
              if (_len2 > 0.034 && _len3 > 0.034) {
                this.arrDice[index].setPosition(_temp.x, this.arrDice[index].position.y, _temp.z);
                break;
              }
            }
          }
        };
        _proto.checkDistance = function checkDistance() {
          var indexs = [[0, 1], [0, 2], [2, 1]];
          for (var _i2 = 0, _indexs = indexs; _i2 < _indexs.length; _i2++) {
            var temp = _indexs[_i2];
            var len = this.getDistance(this.arrDice[temp[0]].position, this.arrDice[temp[1]].position);
            // console.log("len", len, this.arrDice[temp[0]].position, this.arrDice[temp[1]].position);
            if (len < 0.034) {
              // console.log("before", temp, this.arrDice[temp[0]].position, this.arrDice[temp[1]].position, len);
              // this.updatePosition(this.arrDice[temp[0]], this.arrDice[temp[1]]);
              this.updatePositionByIndex(temp[1]);
              // console.log("end", this.arrDice[temp[0]].position, this.arrDice[temp[1]].position, len);
            }
          }
        };

        _proto.update = function update(deltaTime) {
          for (var _iterator8 = _createForOfIteratorHelperLoose(this.arrDice), _step8; !(_step8 = _iterator8()).done;) {
            var dice = _step8.value;
            if (dice.position.y < 0.772) {
              dice.position = v3(dice.position.x, 0.772, dice.position.z);
            }
          }
        };
        _proto.doDiceAction = function doDiceAction(dice, toPos, eulerAngles, eulerAnglesLast, onComplete) {
          var _this6 = this;
          if (toPos === void 0) {
            toPos = null;
          }
          if (eulerAngles === void 0) {
            eulerAngles = null;
          }
          if (eulerAnglesLast === void 0) {
            eulerAnglesLast = null;
          }
          if (onComplete === void 0) {
            onComplete = null;
          }
          var generation = this.roundGeneration;
          var cpY = Math.random() * 0.075 + 0.825;
          var duration = (cpY - 0.772) / 0.3;

          // Tween 时长以秒计，不能再乘 deltaTime，低帧率也要保持相同落定节奏。
          return tween(dice).parallel(tween(dice).bezierTo3(duration, dice.position, v3(dice.position.x + Math.random() * 0.04, cpY, (dice.position.z + toPos.z) / 2.0),
          //Math.random() * 0.1 +
          v3(toPos.x - Math.random() * 0.04, cpY, (dice.position.z + toPos.z) / 2.0), toPos), tween(dice).to(duration + 0.1, {
            eulerAngles: eulerAngles
          }, {
            easing: "cubicOut"
          })).to(0.2, {
            eulerAngles: eulerAnglesLast
          }, {
            easing: "cubicOut"
          }).call(function () {
            // 点数朝向到位即参与开奖汇合，后续保持段只稳定画面。
            if (generation === _this6.roundGeneration && _this6.enabledInHierarchy && isValid(_this6.node, true) && onComplete) onComplete();
          }).to(0.5, {
            eulerAngles: eulerAnglesLast
          }, {
            easing: "cubicOut"
          }).start();
        };
        return DxVipDiceCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "diceButtom", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrDice", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ani_result", [_dec5], {
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

System.register("chunks:///_virtual/DxVipGame", ['./DxVipCtrl.ts', './DxVipDef.ts', './DxVipModel.ts', './DxVipScene.ts', './DxVipUtils.ts', './DxVipDiceCtrl.ts', './DxVipGameView.ts', './first-person-camera2.ts', './DxVipGamePath.ts', './DxVipHallPath.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/DxVipGamePath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './DxVipDef.ts', './Common.ts', './ContentEx.ts', './GUtil.ts', './DxVipModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, SpriteFrame, ScrollView, Node, find, UIOpacity, Label, instantiate, UITransform, Sprite, v2, Component, EventManager, eEvent, Common, ContentEx, GUtil, DxVipModel;
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
      SpriteFrame = module.SpriteFrame;
      ScrollView = module.ScrollView;
      Node = module.Node;
      find = module.find;
      UIOpacity = module.UIOpacity;
      Label = module.Label;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ContentEx = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      DxVipModel = module.DxVipModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "b2208m6OI5HnouUW6IyXNic", "DxVipGamePath", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_ROW = 5;
      var DxVipGamePath = exports('default', (_dec = ccclass("DxVipGamePath"), _dec2 = menu("game/DxVipGame/DxVipGamePath"), _dec3 = property(Prefab), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(ScrollView), _dec14 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxVipGamePath, _Component);
        function DxVipGamePath() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "arrItem", _descriptor, _assertThisInitialized(_this));
          //    // @property(cc.Prefab)
          //    // dItem: cc.Prefab = null;
          //    // @property(cc.Prefab)
          //    // xItem: cc.Prefab = null;
          //    // @property(cc.Prefab)
          //    // chanItem: cc.Prefab = null;
          //    // @property(cc.Prefab)
          //    // leItem: cc.Prefab = null;
          _initializerDefineProperty(_this, "sa1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sa2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sa3", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jiantou", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian1", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian2", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian3", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian4", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian5", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll_his", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_hisItem", _descriptor12, _assertThisInitialized(_this));
          _this._curpage = 0;
          _this._curData = void 0;
          _this.showType = 0;
          return _this;
        }
        var _proto = DxVipGamePath.prototype;
        _proto.onLoad = function onLoad() {
          var btnshow1 = find("bg/content_bg/layer1/btn_1show", this.node);
          var btnunshow1 = find("bg/content_bg/layer1/btn_1unshow", this.node);
          var btnshow2 = find("bg/content_bg/layer1/btn_2show", this.node);
          var btnunshow2 = find("bg/content_bg/layer1/btn_2unshow", this.node);
          var btnshow3 = find("bg/content_bg/layer1/btn_3show", this.node);
          var btnunshow3 = find("bg/content_bg/layer1/btn_3unshow", this.node);
          btnshow1.active = true;
          btnunshow1.active = false;
          btnshow2.active = true;
          btnunshow2.active = false;
          btnshow3.active = true;
          btnunshow3.active = false;
          this.showPathByIndex(null, "show1");
          this.showPathByIndex(null, "show2");
          this.showPathByIndex(null, "show3");
          this.onArrow();
        };
        _proto.onEnable = function onEnable() {
          // NetManager.instance.sendOnlineData(DxVipDef.eProto.HD_History, {
          //     size: 100,
          // });
          // EventManager.instance.on(DxVipDef.eProto.HD_History, this.recvData, this);

          this._curData = DxVipModel.instance.gameRecord.slice();
          if (this._curData.length > 100) {
            this._curData = this._curData.slice(0, 100);
          }
          this.drawPathList();
          EventManager.instance.on(eEvent.onUpdatePath, this.onUpdate, this);
        };
        _proto.onUpdate = function onUpdate(gameRecord) {
          this._curData = gameRecord.slice();
          if (this._curData.length > 100) {
            this._curData = this._curData.slice(0, 100);
          }
          this.drawPathList();
        };
        _proto.onDisable = function onDisable() {
          // EventManager.instance.off(DxVipDef.eProto.HD_History, this.recvData, this);

          EventManager.instance.off(eEvent.onUpdatePath, this.onUpdate, this);
        };
        //0:大小 1:单双
        _proto.onTypeChange = function onTypeChange(event) {
          switch (event.node.name) {
            case "toggle_taiXiu":
              {
                //                //大小
                this.showType = 0;
                break;
              }
            case "toggle_chanLe":
              {
                //                //单双
                this.showType = 1;
                break;
              }
          }
          this.drawPathList();
          //        // cc.log("====event.node.name=====" + event.node.name);
        };

        _proto.showPathByIndex = function showPathByIndex(event, data) {
          var pathLayer1 = find("bg/content_bg/layer1/path_bg2/sa1Layer", this.node);
          var pathLayer2 = find("bg/content_bg/layer1/path_bg2/sa2Layer", this.node);
          var pathLayer3 = find("bg/content_bg/layer1/path_bg2/sa3Layer", this.node);
          var btnshow1 = find("bg/content_bg/layer1/btn_1show", this.node);
          var btnunshow1 = find("bg/content_bg/layer1/btn_1unshow", this.node);
          var btnshow2 = find("bg/content_bg/layer1/btn_2show", this.node);
          var btnunshow2 = find("bg/content_bg/layer1/btn_2unshow", this.node);
          var btnshow3 = find("bg/content_bg/layer1/btn_3show", this.node);
          var btnunshow3 = find("bg/content_bg/layer1/btn_3unshow", this.node);
          switch (data) {
            case "show1":
              {
                btnshow1.active = true;
                btnunshow1.active = false;
                pathLayer1.getComponent(UIOpacity).opacity = 255;
                break;
              }
            case "unshow1":
              {
                btnshow1.active = false;
                btnunshow1.active = true;
                pathLayer1.getComponent(UIOpacity).opacity = 0;
                break;
              }
            case "show2":
              {
                btnshow2.active = true;
                btnunshow2.active = false;
                pathLayer2.getComponent(UIOpacity).opacity = 255;
                break;
              }
            case "unshow2":
              {
                btnshow2.active = false;
                btnunshow2.active = true;
                pathLayer2.getComponent(UIOpacity).opacity = 0;
                break;
              }
            case "show3":
              {
                btnshow3.active = true;
                btnunshow3.active = false;
                pathLayer3.getComponent(UIOpacity).opacity = 255;
                break;
              }
            case "unshow3":
              {
                btnshow3.active = false;
                btnunshow3.active = true;
                pathLayer3.getComponent(UIOpacity).opacity = 0;
                break;
              }
          }
        };
        _proto.drawPathList = function drawPathList() {
          if (this._curpage === 0) {
            this.drawPathLayer1();
          } else {
            this.drawPathLayer2();
          }
        };
        _proto.drawPathLayer1 = function drawPathLayer1() {
          if (!this._curData) {
            return;
          }
          var label_roomid = find("bg/content_bg/layer1/label_roomid", this.node);
          var label_zuixin = find("bg/content_bg/layer1/labe2", this.node);
          if (!this._curData || this._curData.length == 0) {
            label_roomid.getComponent(Label).string = "-";
            label_zuixin.getComponent(Label).string = "-";
            return;
          }
          var redata = this._curData.slice(0, 21);

          //        //最新一期信息
          var newData = redata[0];
          var newResult = newData.Dices[0] + newData.Dices[1] + newData.Dices[2];
          var strResult = "";
          if (this.showType == 1) {
            //            //单双
            strResult = newResult % 2 == 0 ? "CHẴN" : "LẺ";
          } else {
            //            //大11-18 小3-10
            strResult = newResult > 10 ? "TÀI" : "XỈU";
          }
          label_roomid.getComponent(Label).string = Common.setGameNo(redata[0].GameNo);
          label_zuixin.getComponent(Label).string = strResult + "(" + newData.Dices[0] + "-" + newData.Dices[1] + "-" + newData.Dices[2] + ")";

          //        //重绘清理
          var self = this;
          var tempI = null;
          var tempI1 = null;
          var tempI2 = null;
          var tempI3 = null;
          var pathlist1 = find("bg/content_bg/layer1/path_bg1", this.node);
          pathlist1.removeAllChildren();
          var p_layer1 = find("bg/content_bg/layer1/path_bg2/sa1Layer", this.node);
          var p_layer2 = find("bg/content_bg/layer1/path_bg2/sa2Layer", this.node);
          var p_layer3 = find("bg/content_bg/layer1/path_bg2/sa3Layer", this.node);
          p_layer1.removeAllChildren();
          p_layer2.removeAllChildren();
          p_layer3.removeAllChildren();

          //        //
          for (var i = 0; i < redata.length; i++) {
            if (i >= redata.length) {
              break;
            }
            var count = i;
            var result = redata[count].Dices[0] + redata[count].Dices[1] + redata[count].Dices[2];
            if (this.showType == 1) {
              //                //单双
              result = result % 2 + 2;
            } else {
              //                //大11-18 小3-10
              result = result > 10 ? 0 : 1;
            }
            var resultItem = this.arrItem[result];
            var itemL = instantiate(resultItem);
            pathlist1.addChild(itemL);
            var num = redata[count].Dices[0] + redata[count].Dices[1] + redata[count].Dices[2];
            itemL.getChildByName("num").getComponent(Label).string = num + "";
            //     itemL.getPosition().x = self.getPositionByRC(
            //         21 - count,
            //         num,
            //         pathlist1.getComponent(cc.UITransform).width,
            //         pathlist1.getComponent(cc.UITransform).height
            //     ).x;
            //     itemL.getPosition().y = self.getPositionByRC(
            //         21 - count,
            //         num,
            //         pathlist1.getComponent(cc.UITransform).width,
            //         pathlist1.getComponent(cc.UITransform).height
            //     ).y;

            itemL.setPosition(self.getPositionByRC(redata.length - count, num, pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).x, self.getPositionByRC(redata.length - count, num, pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).y);
            if (tempI == null) {
              tempI = itemL;
            } else {
              self.drawLine(tempI, itemL, 0, false);
              tempI = itemL;
            }
            var node1 = new Node("sa1");
            p_layer1.addChild(node1);
            //     node1.getPosition().x = self.getPositionByN(
            //         21 - count,
            //         redata[count][0],
            //         pathlist1.getComponent(cc.UITransform).width,
            //         pathlist1.getComponent(cc.UITransform).height
            //     ).x;
            //     node1.getPosition().y = self.getPositionByN(
            //         21 - count,
            //         redata[count][0],
            //         pathlist1.getComponent(cc.UITransform).width,
            //         pathlist1.getComponent(cc.UITransform).height
            //     ).y;
            node1.setPosition(self.getPositionByN(redata.length - count, redata[count].Dices[0], pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).x, self.getPositionByN(redata.length - count, redata[count].Dices[0], pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).y);
            var sprite1 = new Node();
            sprite1.addComponent(Sprite).spriteFrame = this.sa1;
            node1.addChild(sprite1);
            sprite1.getComponent(UITransform).priority = 2;
            if (tempI1 == null) {
              tempI1 = node1;
            } else {
              self.drawLine(tempI1, node1, 1, false);
              tempI1 = node1;
            }
            var node2 = new Node("sa2");
            p_layer2.addChild(node2);
            //     node2.getPosition().x = self.getPositionByN(
            //         21 - count,
            //         redata[count][1],
            //         pathlist1.getComponent(cc.UITransform).width,
            //         pathlist1.getComponent(cc.UITransform).height
            //     ).x;
            //     node2.getPosition().y = self.getPositionByN(
            //         21 - count,
            //         redata[count][1],
            //         pathlist1.getComponent(cc.UITransform).width,
            //         pathlist1.getComponent(cc.UITransform).height
            //     ).y;
            node2.setPosition(self.getPositionByN(redata.length - count, redata[count].Dices[1], pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).x, self.getPositionByN(redata.length - count, redata[count].Dices[1], pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).y);
            var sprite2 = new Node();
            sprite2.addComponent(Sprite).spriteFrame = this.sa2;
            node2.addChild(sprite2);
            sprite2.getComponent(UITransform).priority = 2;
            if (tempI2 == null) {
              tempI2 = node2;
            } else {
              self.drawLine(tempI2, node2, 2, false);
              tempI2 = node2;
            }
            var node3 = new Node("sa3");
            p_layer3.addChild(node3);
            //     node3.getPosition().x = self.getPositionByN(
            //         21 - count,
            //         redata[count][2],
            //         pathlist1.getComponent(cc.UITransform).width,
            //         pathlist1.getComponent(cc.UITransform).height
            //     ).x;
            //     node3.getPosition().y = self.getPositionByN(
            //         21 - count,
            //         redata[count][2],
            //         pathlist1.getComponent(cc.UITransform).width,
            //         pathlist1.getComponent(cc.UITransform).height
            //     ).y;
            node3.setPosition(self.getPositionByN(redata.length - count, redata[count].Dices[2], pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).x, self.getPositionByN(redata.length - count, redata[count].Dices[2], pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).y);
            var sprite3 = new Node();
            sprite3.addComponent(Sprite).spriteFrame = this.sa3;
            node3.addChild(sprite3);
            sprite3.getComponent(UITransform).priority = 2;
            if (tempI3 == null) {
              tempI3 = node3;
            } else {
              self.drawLine(tempI3, node3, 3, false);
              tempI3 = node3;
            }
          }
          var comp = pathlist1.getComponent(ContentEx);
          if (comp) {
            comp.reload();
            comp.organize();
          }
        };
        _proto.drawPathLayer2 = function drawPathLayer2() {
          if (!this._curData) {
            return;
          }
          // let data = this._curData;
          var layer2 = find("bg/content_bg/layer2", this.node);
          if (!this._curData || this._curData.length == 0) {
            layer2.getChildByName("xiao_bg").getChildByName("pernum").getComponent(Label).string = "-";
            layer2.getChildByName("da_bg").getChildByName("pernum").getComponent(Label).string = "-";
            return;
          }

          //        //统计信息
          var totalCount = [0, 0, 0, 0];
          var startdian = layer2.getChildByName("layer_dian");
          startdian.removeAllChildren();
          var redata_0 = this._curData.slice().reverse();
          redata_0 = redata_0;
          for (var i = 0; i < redata_0.length; i++) {
            //            // for (var i = redata.length - 1; i >= 0; i--) {
            var _result = redata_0[i].Dices[0] + redata_0[i].Dices[1] + redata_0[i].Dices[2];
            if (this.showType == 1) {
              //                //单双
              _result = _result % 2 + 2;
            } else {
              //                //大11-18 小3-10
              _result = _result > 10 ? 0 : 1;
            }
            var resultItem = this.arrItem[_result];
            totalCount[_result]++;
            var itemL = instantiate(resultItem);
            startdian.addChild(itemL);
            itemL.getChildByName("num").active = false;

            //     itemL.getPosition().x = this.getPositionByIndex(i + 1).x;
            //     itemL.getPosition().y = this.getPositionByIndex(i + 1).y;
            itemL.setPosition(this.getPositionByIndex(i).x, this.getPositionByIndex(i).y);
          }
          layer2.getChildByName("chan_bg").active = this.showType == 1;
          layer2.getChildByName("le_bg").active = this.showType == 1;
          layer2.getChildByName("xiao_bg").active = this.showType != 1;
          layer2.getChildByName("da_bg").active = this.showType != 1;
          if (this.showType == 1) {
            //            //单双
            layer2.getChildByName("le_bg").getChildByName("pernum").getComponent(Label).string = "LẺ:" + totalCount[3];
            layer2.getChildByName("chan_bg").getChildByName("pernum").getComponent(Label).string = "CHẴN:" + totalCount[2];
          } else {
            //            //大11-18 小3-10
            layer2.getChildByName("xiao_bg").getChildByName("pernum").getComponent(Label).string = "XỈU:" + totalCount[1];
            layer2.getChildByName("da_bg").getChildByName("pernum").getComponent(Label).string = "TÀI:" + totalCount[0];
          }

          //        ///////////////////////////////////////////////////////
          //        //统计信息
          totalCount = [0, 0, 0, 0];
          var pathlist = this.scroll_his.content;
          pathlist.removeAllChildren();
          // let row = 5;
          // let col = 20;
          // let tempNum = -1;
          // for (let i = 0; i < redata.length; i++) {
          //     let result = redata[i].Dices[0] + redata[i].Dices[1] + redata[i].Dices[2];
          //     if (this.showType == 1) {
          //         //                //单双
          //         result = (result % 2) + 2;
          //     } else {
          //         //                //大11-18 小3-10
          //         result = result > 10 ? 0 : 1;
          //     }
          //     let resultItem = this.arrItem[result];
          //     totalCount[result]++;

          //     if (tempNum != -1) {
          //         if (result == tempNum) {
          //             row = row - 1;
          //             if (row == 0) {
          //                 row = 5;
          //                 col = col - 1;
          //             }
          //         } else {
          //             row = 5;
          //             col = col - 1;
          //         }
          //     }
          //     if (col == 0) {
          //         break;
          //     }

          //     let itemL = cc.instantiate(resultItem);
          //     pathlist.addChild(itemL);
          //     itemL.getChildByName("num").getComponent(cc.Label).string = redata[i].Dices[0] + redata[i].Dices[1] + redata[i].Dices[2] + "";

          //     let pos = this.getPositionByRowCol(row, col, pathlist);
          //     //     itemL.getPosition().x = this.getPositionByRowCol(row, col, pathlist).x;
          //     //     itemL.getPosition().y = this.getPositionByRowCol(row, col, pathlist).y;
          //     itemL.setPosition(pos.x, pos.y);
          //     tempNum = result;
          // }
          var redata = this._curData.slice().reverse();
          var row = 0;
          var col = 0;
          var tempNum = -1;
          var list = [];
          for (var _i = 0; _i < redata.length; _i++) {
            var _result2 = redata[_i].Dices[0] + redata[_i].Dices[1] + redata[_i].Dices[2];
            var item = {
              result: _result2
            };
            if (this.showType == 1) {
              //                //单双
              _result2 = _result2 % 2 + 2;
            } else {
              //                //大11-18 小3-10
              _result2 = _result2 > 10 ? 0 : 1;
            }
            item["index"] = _result2;
            totalCount[_result2]++;
            if (tempNum != -1) {
              if (_result2 == tempNum) {
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
            tempNum = _result2;
          }

          // let start = list.length - MAX_COL;
          // if (start < 0) {
          //     start = 0;
          // }
          var result = list;
          for (var _i2 = 0; _i2 < result.length; _i2++) {
            var _list = result[_i2];
            var node = instantiate(this.node_hisItem);
            node.active = true;
            pathlist.addChild(node);
            for (var j = 0; j < _list.length; j++) {
              var _item = _list[j];
              var _itemL = instantiate(this.arrItem[_item.index]);
              node.addChild(_itemL);
              _itemL.getChildByName("num").getComponent(Label).string = _item.result + "";
              var pos = this.getPositionByRowCol(j, 0, node);
              //     itemL.getPosition().x = this.getPositionByRowCol(row, col, pathlist).x;
              //     itemL.getPosition().y = this.getPositionByRowCol(row, col, pathlist).y;
              _itemL.setPosition(pos.x, pos.y);
            }
          }
          if (result.length < 21) {
            for (var _i3 = result.length; _i3 < 21; _i3++) {
              var _node = instantiate(this.node_hisItem);
              _node.active = true;
              pathlist.addChild(_node);
            }
          } else {
            this.scroll_his.scrollToRight();
          }

          //        //统计信息
          var Node_numRoot = layer2.getChildByName("Node_numRoot");
          Node_numRoot.getChildByName("chan_bg").active = this.showType == 1;
          Node_numRoot.getChildByName("le_bg").active = this.showType == 1;
          Node_numRoot.getChildByName("xiao_bg").active = this.showType != 1;
          Node_numRoot.getChildByName("da_bg").active = this.showType != 1;
          if (this.showType == 1) {
            //            //单双
            Node_numRoot.getChildByName("le_bg").getChildByName("pernum").getComponent(Label).string = "LẺ:" + totalCount[3];
            Node_numRoot.getChildByName("chan_bg").getChildByName("pernum").getComponent(Label).string = "CHẴN:" + totalCount[2];
          } else {
            //            //大11-18 小3-10
            Node_numRoot.getChildByName("xiao_bg").getChildByName("pernum").getComponent(Label).string = "XỈU:" + totalCount[1];
            Node_numRoot.getChildByName("da_bg").getChildByName("pernum").getComponent(Label).string = "TÀI:" + totalCount[0];
          }
          var comp = pathlist.getComponent(ContentEx);
          if (comp) {
            comp.reload();
            comp.organize();
          }
        };
        _proto.getPositionByRowCol = function getPositionByRowCol(row, col, itemBg) {
          var width = itemBg.getComponent(UITransform).width;
          var hight = itemBg.getComponent(UITransform).height;
          var perh = hight / MAX_ROW;
          var x = 0;
          // let y = perh / 2 + (MAX_ROW - row - 1) * perh;
          var y = perh * 2 - row * perh;
          return {
            x: x,
            y: y
          };
        };
        _proto.getPositionByIndex = function getPositionByIndex(index) {
          var width = 1164;
          var hight = 212;
          var row = index % 5;
          var col = Math.floor(index / 5);
          var x = width / 20 * col;
          var y = col % 2 == 0 ? hight / 5 * row : hight / 5 * (4 - row);
          return {
            x: x,
            y: -y
          };
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
        _proto.drawLine = function drawLine(item1, item2, type, isfan) {
          var xianlist = [this.xian1, this.xian2, this.xian3, this.xian4, this.xian5];
          var xianType = xianlist[type];
          var pos1 = v2(item1.position.x, item1.position.y);
          var pos2 = v2(item2.position.x, item2.position.y);
          // let distance = Math.abs(pos1.sub(pos2).mag());
          var distance = GUtil.GetDistance(pos1, pos2);
          var self = this;
          var sprite = new Node();
          sprite.addComponent(Sprite);
          sprite.getComponent(Sprite).spriteFrame = xianType;
          item1.addChild(sprite);
          sprite.getComponent(UITransform).anchorX = 0;
          sprite.getComponent(UITransform).anchorY = 0;
          sprite.getComponent(UITransform).width = distance;
          sprite.getComponent(UITransform).priority = 0;
          if (item1.getChildByName("bg")) {
            item1.getChildByName("bg").getComponent(UITransform).priority = 2;
          }
          if (item1.getChildByName("num")) {
            item1.getChildByName("num").getComponent(UITransform).priority = 3;
          }
          sprite.angle = -self.getAngle(pos1, pos2);
        };
        _proto.getPositionByN = function getPositionByN(rol, num, widthP, heightP) {
          var x = (rol - 1) / 20 * widthP;
          var y = (num - 1) / 5 * heightP;
          return {
            x: x,
            y: y
          };
        };
        _proto.getPositionByRC = function getPositionByRC(rol, num, widthP, heightP) {
          var x = (rol - 1) / 20 * widthP;
          var y = (num - 3) / 15 * heightP;
          return {
            x: x,
            y: y
          };
        };
        _proto.onArrow = function onArrow() {
          this._curpage ^= 1;
          find("bg/content_bg/layer1", this.node).active = !find("bg/content_bg/layer1", this.node).active;
          find("bg/content_bg/layer2", this.node).active = !find("bg/content_bg/layer2", this.node).active;
          this.drawPathList();
        };
        return DxVipGamePath;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sa1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sa2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sa3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "jiantou", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "xian1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "xian2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "xian3", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "xian4", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "xian5", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "scroll_his", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_hisItem", [_dec14], {
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

System.register("chunks:///_virtual/DxVipGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DxVipDef.ts', './DxVipModel.ts', './DxVipCtrl.ts', './DxVipDiceCtrl.ts', './DxVipUtils.ts', './GameDef.ts', './GUtil.ts', './NetManager.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts', './ViewManager.ts', './ChipSmall.ts', './DataManager.ts', './ChipProxy.ts', './ChipItem.ts', './I18n.ts', './GameRecordLayer.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Sprite, ScrollView, Prefab, Button, SpriteFrame, director, Camera, UIOpacity, isValid, v3, Tween, tween, instantiate, UITransform, NodePool, resources, color, TweenSystem, v2, ParticleSystem, sys, Vec3, eProto, eEvent, eRunStatus, cBundle, eSound, DxVipModel, DxVipCtrl, DxVipDiceCtrl, DxVipUtils, GameDef, GUtil, NetManager, ConfigManager, EventManager, Common, ViewManager, ChipSmall, DataManager, UserKey, ChipProxy, ChipEvent, ChipType, ChipItem, i18n, GameRecordLayer;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      director = module.director;
      Camera = module.Camera;
      UIOpacity = module.UIOpacity;
      isValid = module.isValid;
      v3 = module.v3;
      Tween = module.Tween;
      tween = module.tween;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      NodePool = module.NodePool;
      resources = module.resources;
      color = module.color;
      TweenSystem = module.TweenSystem;
      v2 = module.v2;
      ParticleSystem = module.ParticleSystem;
      sys = module.sys;
      Vec3 = module.Vec3;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      cBundle = module.cBundle;
      eSound = module.eSound;
    }, function (module) {
      DxVipModel = module.DxVipModel;
    }, function (module) {
      DxVipCtrl = module.DxVipCtrl;
    }, function (module) {
      DxVipDiceCtrl = module.DxVipDiceCtrl;
    }, function (module) {
      DxVipUtils = module.DxVipUtils;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
      ChipType = module.ChipType;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameRecordLayer = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "8b310a2MXpCopHjaC90JnyQ", "DxVipGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxVipGameView = exports('default', (_dec = ccclass("DxVipGameView"), _dec2 = menu("game/DxVipGame/DxVipGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(ScrollView), _dec10 = property(Prefab), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Label), _dec26 = property(Sprite), _dec27 = property(SpriteFrame), _dec28 = property(Node), _dec29 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(DxVipGameView, _GameDef$BaseView);
        function DxVipGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _this.MainCamera = null;
          _initializerDefineProperty(_this, "sceneRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfHead", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_level", _descriptor6, _assertThisInitialized(_this));
          //#region chipList
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_start", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_last", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_clearBet", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betArea", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betBg", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betLabel", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winBetLabel", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betRoot", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "record", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addScore", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_betTip", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold_boom", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_dice", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "diceSprFrame", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_pathRoot", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pathIcon", _descriptor27, _assertThisInitialized(_this));
          //da xiao dan shuang
          _this.createBetList = [];
          _this._chipPool = null;
          _this.chipPrefab = null;
          _this.chipLoading = false;
          _this.chipsReady = false;
          _this.viewDisposed = false;
          _this.viewGeneration = 0;
          _this.borrowedChips = new Set();
          _this.finishResult = null;
          _this.showingResult = false;
          _this.introStarted = false;
          _this.introFinished = false;
          _this.uiInitialized = false;
          _this.diceCtrl = null;
          _this._chip = void 0;
          _this._selectChip = null;
          /** 注单发出后先行的镜头：0 未先行，1 飞行中，2 已到摇骰机位。 */
          _this.betCamera = 0;
          /** 开奖结果已确认，等先行镜头到位后开始摇骰。 */
          _this.betShakePending = false;
          _this.recordType = 0;
          ////////////////////////////////////////////////////////////////////////////////
          // 圆心
          _this.circleCenter = v2(0, 0.4);
          // 半径
          _this.circleRadius = 250;
          // 速度
          _this.speed = 10;
          // 弧度
          _this.radian = 0;
          _this.isCameraCruise = false;
          _this.cameraCruiseStartTimes = 0;
          return _this;
        }
        var _proto = DxVipGameView.prototype;
        //#endregion chipList
        ////////////////////////////////////////////////////////////////////////
        //#region baseInterface
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, DxVipCtrl.instance);
          this.MainCamera = director.getScene().getChildByName("Main Camera").getComponent(Camera);
          this.diceCtrl = director.getScene().getChildByName("Node_sceneRoot").getComponent(DxVipDiceCtrl);
          this.refreshBetButtons();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          NetManager.instance.sendOnlineData(eProto.HD_info, {});
          NetManager.instance.sendOnlineData(eProto.HD_History, {
            size: 100
          });
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          if (this.viewDisposed) return;
          _GameDef$BaseView.prototype.onEnable.call(this);
          this.refreshBetButtons();
          if (DxVipModel.instance.gameInfo && !this.uiInitialized) this.initUIView();else if (DxVipModel.instance.gameInfo && !this.chipsReady) this.initChipPool();

          //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
          EventManager.instance.on(eEvent.onShakeEnd, this.onShakeEnd, this);
          if (this.introStarted && !this.introFinished) {
            // 入场相机动画可能已被停用取消，重新启用时直接恢复可见 UI。
            this.introFinished = true;
            this.record.getComponent(UIOpacity).opacity = 255;
            this.Node_betRoot.getComponent(UIOpacity).opacity = 255;
            DxVipModel.instance.isReady = true;
          }
          if (DxVipModel.instance.betResult && (DxVipModel.instance.gameStatus === eRunStatus.SHAKE || DxVipModel.instance.gameStatus === eRunStatus.END)) {
            this.scheduleOnce(function () {
              return _this2.resumeResultPresentation();
            });
          }
        };
        _proto.onDisable = function onDisable() {
          this.viewGeneration++;
          if (this.betCamera && isValid(this.MainCamera.node, true)) {
            // 下面会停掉先行镜头的 tween，它的到位回调不会再来；直接落到摇骰机位并记为已到位，
            // 否则重新启用后到达的开奖结果会一直等那次回调。
            this.betCamera = 2;
            this.MainCamera.node.position = v3(0, 1.358, 1.337);
            this.MainCamera.node.eulerAngles = v3(-30, 0, 0);
          }
          this.chipLoading = false;
          this.showingResult = false;
          // 取消只结束本地展示等待；旧流程仍须通过代次校验才能推进状态。
          if (this.finishResult) this.finishResult();
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.MainCamera.node);
          Tween.stopAllByTarget(this.Button_start.node);
          this.stopResultPresentation();
          _GameDef$BaseView.prototype.onDisable.call(this);

          //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          ChipProxy.off(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.off(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
          EventManager.instance.off(eEvent.onShakeEnd, this.onShakeEnd, this);
          DxVipModel.instance.clearGameData();
        };
        _proto.onDestroy = function onDestroy() {
          this.viewDisposed = true;
          this.viewGeneration++;
          this.recycleAllChips();
          if (this._chipPool) this._chipPool.clear();
          _GameDef$BaseView.prototype.onDestroy.call(this);
        }
        //#endregion baseInterface
        ////////////////////////////////////////////////////////////////////////////////
        ;

        _proto.start = function start() {
          var _this3 = this;
          this.introStarted = true;
          //-10 1.522 5.089
          tween(this.MainCamera.node).delay(0.25).to(2.0, {
            position: v3(0, 1.848, 4.311),
            eulerAngles: v3(-15, 0, 0)
          }, {
            easing: "cubicOut"
          }).to(2.0, {
            position: v3(0, 1.466, 1.926),
            eulerAngles: v3(-25, 0, 0)
          }).call(function () {
            _this3.introFinished = true;
            DxVipModel.instance.isReady = true;
            tween(_this3.record.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).start();
            tween(_this3.Node_betRoot.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).start();
            _this3.showStartBetTip();
            _this3.doCameraCruise();
          }).start();
        };
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

            // if (NetManager.instance._connect == true) {
            //     if (DxVipModel.instance.isAuto && DxVipCtrl.instance.isReqBet) {
            //         DxVipCtrl.instance.reqBet();
            //     }
            // }
          }, 0.1);
        }

        //////////////////////////////////////////////////////
        ;

        _proto.initSelfInfo = function initSelfInfo() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.selfHead);
          Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
          var grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          if (grade) {
            Common.setGradeCode(this.Sprite_level, parseInt(grade));
          }
        };
        _proto.initUIView = function initUIView() {
          this.initSelfInfo();
          ChipProxy.initChipList(DxVipModel.instance.gameInfo.Chips);
          this.createChipsList();
          this.uiInitialized = true;
          this.initChipPool();

          // DxVipUtils.instance.loadRes_icon(() => {
          //     DxVipCtrl.instance.reqEnterRoom();
          // });
          // this.Label_bet.string = `${DxVipUtils.instance.numberFormat(DxVipModel.instance.curBet, 2.0)}K`;
          // this.Label_win.string = "0.00";
          // this.updateGold();
        }

        //#region chip listget
        ;

        _proto.canEditBet = function canEditBet() {
          return !this.viewDisposed && this.chipsReady && !DxVipCtrl.instance.isReqBet && DxVipModel.instance.gameStatus === eRunStatus.NONE;
        };
        /**
         * 注单已发出：不等回复，镜头先推向摇骰机位、桌面筹码同步缩小，避免点击后画面静止一次请求往返的时间。
         * 只做与结果无关的动作；摇骰（onShakeStart 读 betResult）仍要等回复，且等镜头到位。
         * 被拒或结果未知时由 abortBetCamera 退回。
         */
        _proto.startBetCamera = function startBetCamera() {
          var _this4 = this;
          this.betCamera = 1;
          this.betShakePending = false;
          // “开始”按钮的提示动画不在这里停：开奖回复到达时原流程会停；被拒后它应当和点击前一样继续提示。
          // 结束巡航时的回位 tween 可能还在跑，不能与这次飞行同时写镜头。
          Tween.stopAllByTarget(this.MainCamera.node);
          tween(this.MainCamera.node).to(1.5, {
            position: v3(0, 1.358, 1.337),
            eulerAngles: v3(-30, 0, 0)
          }, {
            easing: "cubicOut"
          }).call(function () {
            if (_this4.betShakePending) {
              _this4.betShakePending = false;
              EventManager.instance.emit(eEvent.onShakeStart);
            } else if (_this4.betCamera === 1) {
              _this4.betCamera = 2;
            }
          }).start();
          for (var _iterator = _createForOfIteratorHelperLoose(this.Node_betRoot.children), _step; !(_step = _iterator()).done;) {
            var childNode = _step.value;
            tween(childNode).to(1.0, {
              scale: v3(0.75, 0.75, 0.75)
            }).start();
          }
        }

        /** 已发出的注单不会开奖：镜头和筹码退回下注时的样子。下注锁是否解除由 DxVipCtrl 决定，这里不改。 */;
        _proto.abortBetCamera = function abortBetCamera() {
          if (!this.betCamera) return;
          this.betCamera = 0;
          this.betShakePending = false;
          Tween.stopAllByTarget(this.MainCamera.node);
          tween(this.MainCamera.node).to(1.0, {
            position: v3(0, 1.466, 1.926),
            eulerAngles: v3(-25, 0, 0)
          }, {
            easing: "cubicOut"
          }).start();
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.Node_betRoot.children), _step2; !(_step2 = _iterator2()).done;) {
            var childNode = _step2.value;
            // 缩小的 tween 可能还没跑完，先停掉再放大，避免两个 tween 同时写缩放。
            Tween.stopAllByTarget(childNode);
            tween(childNode).to(1.0, {
              scale: v3(1, 1, 1)
            }).start();
          }
        };
        _proto.refreshBetButtons = function refreshBetButtons() {
          var editable = this.canEditBet();
          this.Button_start.interactable = editable;
          this.Button_last.interactable = editable;
          this.Button_clearBet.interactable = editable && DxVipModel.instance.betList.some(function (list) {
            return list && list.length > 0;
          });
        };
        _proto.getChipNode = function getChipNode(chipInfo) {
          if (!this.chipsReady || !this._chipPool || this.viewDisposed) return null;
          if (this._chipPool.size() === 0) {
            for (var i = 0; i < 10; i++) this._chipPool.put(instantiate(this.chipPrefab));
          }
          var item = this._chipPool.get(chipInfo);
          if (item) this.borrowedChips.add(item);
          return item;
        };
        _proto.recycleChip = function recycleChip(node) {
          if (!this.borrowedChips["delete"](node)) return;
          Tween.stopAllByTarget(node);
          if (!isValid(node, true)) return;
          if (this.viewDisposed) {
            node.destroy();
            return;
          }
          node.setScale(1, 1, 1);
          node.getComponent(UITransform).priority = 0;
          this._chipPool.put(node);
        };
        _proto.recycleAllChips = function recycleAllChips() {
          var _this5 = this;
          // 同时覆盖下注区、溢出筹码和已改父节点的收集动画，避免重复归还。
          Array.from(this.borrowedChips).forEach(function (node) {
            return _this5.recycleChip(node);
          });
        };
        _proto.stopResultPresentation = function stopResultPresentation() {
          // UIOpacity 是组件目标，不会随所属 Node 停用自动暂停 Tween。
          Tween.stopAllByTarget(this.Node_result.getComponent(UIOpacity));
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.Node_winTip.children), _step3; !(_step3 = _iterator3()).done;) {
            var node = _step3.value;
            Tween.stopAllByTarget(node.getComponent(UIOpacity));
          }
          Tween.stopAllByTarget(this.addScore);
          this.Node_result.active = false;
          this.gold_boom.active = false;
          this.addScore.active = false;
          this.addScore.position = v3(0, 0, 0);
        };
        _proto.resumeResultPresentation = function resumeResultPresentation() {
          var _this6 = this;
          var generation = this.viewGeneration;
          var resume = function resume() {
            var status = DxVipModel.instance.gameStatus;
            if (_this6.viewDisposed || generation !== _this6.viewGeneration || _this6.showingResult || status !== eRunStatus.SHAKE && status !== eRunStatus.END) {
              _this6.unschedule(resume);
              return;
            }
            // UI 与骰子属于独立分支；只恢复 UI 时仍须等待真实落定，不能直接开奖。
            if (_this6.diceCtrl.resumeConfirmedResult()) {
              _this6.unschedule(resume);
              _this6.onShakeEnd();
            }
          };
          // 补齐错过的完成事件，也覆盖骰子稍后才启用的顺序；停用会清除此排程。
          this.schedule(resume, 0.1);
          resume();
        };
        _proto.initChipPool = function initChipPool() {
          var _this7 = this;
          if (this.chipsReady || this.chipLoading || this.viewDisposed) return;
          if (!this._chipPool) {
            this._chipPool = new NodePool(ChipSmall);
          }
          this.chipLoading = true;
          var generation = this.viewGeneration;
          var current = function current() {
            return !_this7.viewDisposed && generation === _this7.viewGeneration && isValid(_this7.node, true);
          };
          resources.load("prefab/public/chipSmall", Prefab, function (err, prefab) {
            if (!current()) return;
            _this7.chipLoading = false;
            if (err || !prefab) {
              _this7.refreshBetButtons();
              Common.showTipPop(i18n.lang.loadGameErr, function () {
                if (current()) _this7.initChipPool();
              }, null, current);
              return;
            }
            _this7.chipPrefab = prefab;
            for (var i = 0; i < 50; i++) {
              _this7._chipPool.put(instantiate(prefab));
            }
            _this7.chipsReady = true;
            _this7.refreshBetButtons();
          });
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
        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != cBundle) {
            return;
          }
          var children = this.scrollViewCM.content.children;
          for (var _iterator4 = _createForOfIteratorHelperLoose(children), _step4; !(_step4 = _iterator4()).done;) {
            var child = _step4.value;
            var chipitem = child.getComponent(ChipItem);
            if (chipitem) {
              if (chipitem.data == data) {
                this._chip = data;
                this._selectChip = child;
                DxVipUtils.instance.playSound(eSound.Coins);
              } else {
                chipitem.moveUp(false);
              }
            }
          }
        };
        _proto.createChipsList = function createChipsList() {
          var _this8 = this;
          this.scrollViewCM.content.destroyAllChildren();
          var minChip = ChipProxy.chipList[0].count;
          for (var _iterator5 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step5; !(_step5 = _iterator5()).done;) {
            var i = _step5.value;
            if (i.count < minChip) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            //            // chip.scale = 1.3;
            //            // chip.width = 130;
            //            // chip.height = 130;
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, cBundle);
          }
          for (var _iterator6 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step6; !(_step6 = _iterator6()).done;) {
            var _i = _step6.value;
            var has = false;
            for (var _iterator7 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step7; !(_step7 = _iterator7()).done;) {
              var j = _step7.value;
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
            //            // chip.scale = 1.3;
            //            // chip.width = 130;
            //            // chip.height = 130;
            _chip2.getComponent(ChipItem).setData(_i, ChipType.CHIP, cBundle);
          }
          this.scheduleOnce(function () {
            //默认选中
            var index = ChipProxy.diyList.length;
            var child = _this8.scrollViewCM.content.children[index];
            child.getComponent(ChipItem).moveUp();
            _this8.scrollViewCM.scrollToLeft();
          });
        }
        //#endregion chip list;
        //////////////////////////////////////////////////
        //按钮事件回调
        ;

        _proto.onClickExit = function onClickExit() {
          if (this.viewDisposed) return;
          this.viewDisposed = true;
          this.viewGeneration++;
          if (this.finishResult) this.finishResult();
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.MainCamera.node);
          // 正在离开游戏：先行镜头作废，之后的 onDisable 不必再把镜头落到摇骰机位。
          this.betCamera = 0;
          this.betShakePending = false;
          this.stopResultPresentation();
          this.refreshBetButtons();
          DxVipCtrl.instance.reqExit();
          EventManager.instance.emit(eEvent.onLoadHall);
        };
        _proto.onClickRecord = function onClickRecord() {
          Common.loadPopBuddle("prefab/Node_record", DxVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
            viewNode.getComponent(GameRecordLayer).setGameType("dxVip", 6);
          }, true);
        };
        _proto.onClickRand = function onClickRand() {
          GUtil.openRank("slotDxVip");
        };
        _proto.onClickSetting = function onClickSetting() {
          // GUtil.openSetting();
          Common.loadPopBuddle("prefab/Node_setting", DxVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/Node_help", DxVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        }
        //////////////////////////////////////////////////////////

        // //test
        // isAuto = false;
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this9 = this;
          if (["Button_clearBet", "Button_last", "Button_start"].indexOf(event.target.name) >= 0 && !this.canEditBet()) return;
          switch (event.target.name) {
            case "Button_clearBet":
              {
                // //test
                // this.isAuto = !this.isAuto;

                if (DxVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                DxVipUtils.instance.playSound(eSound.Cancel);
                this.clearBet();
                break;
              }
            case "Button_last":
              {
                if (DxVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                if (!DxVipModel.instance.betListBack) {
                  Common.showTip(i18n.lang["disableBet"]);
                  return;
                }
                for (var i = 0; i < 10; i++) {
                  var winNode = this.Node_winTip.children[i];
                  var betBg = this.Node_betBg.children[i];
                  betBg.getComponent(Sprite).color = color(255, 255, 255, 255);
                  if (winNode.active) {
                    Tween.stopAllByTarget(winNode.getComponent(UIOpacity));
                    winNode.active = false;
                  }
                }
                if (this.Node_result.active) {
                  tween(this.Node_result.getComponent(UIOpacity)).to(0.25, {
                    opacity: 0
                  }).call(function () {
                    _this9.Node_result.active = false;
                  }).start();
                }
                var iCount = 0;
                var _loop = function _loop(betPos) {
                  var areaBetList = DxVipModel.instance.betListBack[betPos];
                  if (areaBetList) {
                    _this9.scheduleOnce(function () {
                      for (var _iterator8 = _createForOfIteratorHelperLoose(areaBetList), _step8; !(_step8 = _iterator8()).done;) {
                        var count = _step8.value;
                        _this9.doBetChip(betPos, count);
                      }
                    }, iCount * 0.05);
                    iCount++;
                  }
                };
                for (var betPos = 0; betPos < 10; betPos++) {
                  _loop(betPos);
                }
                break;
              }
            case "Button_start":
              {
                // EventManager.instance.emit(DxVipDef.eEvent.onShakeStart);

                if (DxVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                if (DxVipCtrl.instance.reqBet()) {
                  this.refreshBetButtons();
                  DxVipUtils.instance.playSound(eSound.Begin);
                  // reqBet 返回后仍在等待，才说明注单确已发出：同步到达的回复（含未连接时的空回复）
                  // 已在 reqBet 内收口，镜头不能为它先动。
                  if (DxVipCtrl.instance.isReqBet && !DxVipCtrl.instance.betResultUnknown) this.startBetCamera();
                }
                break;
              }
            case "record":
            case "Button_path":
              {
                Common.loadPopBuddle("prefab/Node_pathList", DxVipUtils.instance.bundle, function () {}, function (prefab) {
                  var viewNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(viewNode, true);
                }, true);
                break;
              }
          }
        }

        /**
         *
         * @param event
         * @param betPos da:0 xiao:1 dan:2 shuang:3 点数：4-9
         */;
        _proto.onBetClick = function onBetClick(event, betPos) {
          //
          // let nodeName = event.target.name;
          if (!this.canEditBet() || !this._chip) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          this.doBetChip(parseInt(betPos), this._chip.count);
        };
        _proto.doBetChip = function doBetChip(betPos, betAmount) {
          var _this10 = this;
          // 续押回调也可能排在提交之后；入口和异步执行点都必须检查等待状态。
          if (!this.canEditBet() || !this._selectChip) return;
          if (DxVipModel.instance.curBalance < betAmount) {
            Common.showTip(i18n.lang["10001"]);
            return;
          }
          if (this.isCameraCruise) {
            this.doCameraCruise(false);
          }

          //this._chip.count
          if (betPos < 4) {
            if (betPos == 0 && DxVipModel.instance.betList[1] || betPos == 1 && DxVipModel.instance.betList[0] || betPos == 3 && DxVipModel.instance.betList[2] || betPos == 2 && DxVipModel.instance.betList[3]) {
              Common.showTip(i18n.lang["10002"]);
              return;
            }
          } else {
            var counts = 0;
            for (var i = 4; i < 10; i++) {
              if (DxVipModel.instance.betList[i]) {
                counts++;
              }
            }
            if (counts == 5 && !DxVipModel.instance.betList[betPos]) {
              Common.showTip(i18n.lang["10062"]);
              return;
            }
          }

          //更新数值
          if (!DxVipModel.instance.betList[betPos]) {
            DxVipModel.instance.betList[betPos] = [];
          }
          var areaBetList = DxVipModel.instance.betList[betPos];
          var totalAmount = betAmount;
          for (var _iterator9 = _createForOfIteratorHelperLoose(areaBetList), _step9; !(_step9 = _iterator9()).done;) {
            var count = _step9.value;
            totalAmount += count;
          }
          if (totalAmount > DxVipModel.instance.gameInfo.PosBetMax) {
            var tip = Common.strFormat(i18n.lang["10064"], Common.ChangeMoneyShow(DxVipModel.instance.gameInfo.PosBetMax, 2));
            Common.showTip(tip);
            return;
          }
          var newChip = this.getChipNode(betAmount);
          if (!newChip) return;
          areaBetList.push(betAmount);
          var areaIndex = [0, 3, 2, 1, 4, 5, 6, 7, 8, 9];
          var parent = this.Node_betArea.children[areaIndex[betPos]];
          var startPos = this._selectChip.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          startPos = parent.getComponent(UITransform).convertToNodeSpaceAR(startPos);
          DxVipModel.instance.curBalance -= betAmount;
          this.updateGold();

          //更新数值显示
          var Node_label = this.Node_betLabel.getChildByName("Node_label_" + betPos);
          var Label_bet = Node_label.getChildByName("Label_bet").getComponent(Label);
          Node_label.active = true;
          DxVipUtils.instance.updateLabelDI(Label_bet, totalAmount / 1000);

          //发筹码到下注区
          newChip.position = startPos;
          parent.addChild(newChip);
          this.Button_clearBet.interactable = true;
          var toPos = v3(0, 0, 0);
          if (betPos > 3) {
            toPos.x -= 20;
          }
          var duration = 0.15;
          if (parent.children.length < 12) {
            toPos.y = (parent.children.length - 1) * 2;
            tween(newChip).to(duration, {
              position: toPos
            }).call(function () {
              DxVipUtils.instance.playSound(eSound.Bet);
            }).start();
          } else {
            toPos.y = 20;
            tween(newChip).to(duration, {
              position: toPos
            }).call(function () {
              DxVipUtils.instance.playSound(eSound.Bet);
            }).call(function () {
              return _this10.recycleChip(newChip);
            }).start();
          }
          if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.Button_start.node) == 0) {
            tween(this.Button_start.node).to(0.25, {
              scale: v3(0.9, 0.9, 0.9)
            }).to(0.25, {
              scale: v3(1, 1, 1)
            }).union().repeatForever().start();
          }
        };
        _proto.doAwait = function doAwait(delay) {
          var _this11 = this;
          return new Promise(function (resolve, reject) {
            _this11.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.clearBet = function clearBet(isEnd) {
          if (isEnd === void 0) {
            isEnd = false;
          }
          if (!isEnd) {
            var totalBet = 0;
            for (var _iterator10 = _createForOfIteratorHelperLoose(DxVipModel.instance.betList), _step10; !(_step10 = _iterator10()).done;) {
              var betList = _step10.value;
              if (betList) {
                for (var _iterator11 = _createForOfIteratorHelperLoose(betList), _step11; !(_step11 = _iterator11()).done;) {
                  var betAmount = _step11.value;
                  totalBet += betAmount;
                }
              }
            }
            DxVipModel.instance.curBalance += totalBet;
            this.updateGold();
          }
          for (var i = 0; i < 10; i++) {
            DxVipModel.instance.betList[i] = null;
            var Node_label = this.Node_betLabel.children[i];
            var Label_bet = Node_label.getChildByName("Label_bet").getComponent(Label);
            Label_bet.string = "";
            Node_label.active = false;
            Node_label = this.Node_winBetLabel.children[i];
            Label_bet = Node_label.getChildByName("Label_bet").getComponent(Label);
            Label_bet.string = "";
            Node_label.active = false;
          }
          this.recycleAllChips();

          // //test
          // this.scheduleOnce(() => {
          //     if (this.isAuto) {
          //         for (let i = 0; i < 10; i++) {
          //             let winNode = this.Node_winTip.children[i];
          //             let betBg = this.Node_betBg.children[i];
          //             betBg.getComponent(Sprite).color = color(255, 255, 255, 255);

          //             if (winNode.active) {
          //                 Tween.stopAllByTarget(winNode.getComponent(UIOpacity));
          //                 winNode.active = false;
          //             }
          //         }

          //         if (this.Node_result.active) {
          //             tween(this.Node_result.getComponent(UIOpacity))
          //                 .to(0.25, { opacity: 0 })
          //                 .call(() => {
          //                     this.Node_result.active = false;
          //                 })
          //                 .start();
          //         }

          //         let iCount = 0;
          //         for (let betPos = 0; betPos < 10; betPos++) {
          //             let areaBetList = DxVipModel.instance.betListBack[betPos];
          //             if (areaBetList) {
          //                 this.scheduleOnce(() => {
          //                     for (const count of areaBetList) {
          //                         this.doBetChip(betPos, count);
          //                     }
          //                 }, iCount * 0.05);

          //                 iCount++;
          //             }
          //         }

          //         this.scheduleOnce(() => {
          //             DxVipCtrl.instance.reqBet();
          //         }, 1.0);
          //     }
          // }, 1.0);

          this.Button_clearBet.interactable = false;
          this.doCameraCruise();
        };
        _proto.collectChip = function collectChip() {
          var _this12 = this;
          var generation = this.viewGeneration;
          var collectCounts = 0;
          var toPos = this.selfHead.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          toPos = this.Node_betArea.getComponent(UITransform).convertToNodeSpaceAR(toPos);
          var endPos = v2(toPos.x, toPos.y);
          var winArea = DxVipModel.instance.winArea;
          for (var i = 0; i < 10; i++) {
            if (winArea[i]) {
              DxVipModel.instance.betList[i] = null;
              var nodeArea = this.Node_betArea.children[i];
              var _loop2 = function _loop2() {
                var chipNode = _step12.value;
                collectCounts++;
                var startPos = chipNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                startPos = _this12.Node_betArea.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                chipNode.parent = _this12.Node_betArea;
                chipNode.position = startPos;
                chipNode.getComponent(UITransform).priority = 1000;
                var bezier = [v2(chipNode.position.x, chipNode.position.y), v2((chipNode.position.x + endPos.x) / 2, 750 + Math.random() * 200 - 100), endPos];
                var duration = 1;
                var bezierTo = GUtil.bezierTo(chipNode, duration, bezier[0], bezier[1], v3(bezier[2].x + Math.random() * 100 - 50, bezier[2].y + Math.random() * 100 - 50, 0));
                tween(chipNode).parallel(bezierTo, tween(chipNode).to(duration, {
                  scale: v3(0.5, 0.5, 0.5)
                }).call(function () {
                  if (generation !== _this12.viewGeneration || !_this12.borrowedChips.has(chipNode)) return;
                  collectCounts--;
                  if (collectCounts == 0) {
                    DxVipUtils.instance.playSound(eSound.Reward);

                    //更新金币--显示得分
                    if (DxVipModel.instance.endBalance > 0) {
                      DxVipModel.instance.curBalance = DxVipModel.instance.endBalance;
                      DxVipModel.instance.endBalance = 0;
                      _this12.updateGold();
                    }
                    if (!_this12.addScore.active) {
                      _this12.addScore.active = true;
                      var text = _this12.addScore.getChildByName("text").getComponent(Label);
                      var inter = Common.numFormatInt(DxVipModel.instance.betResult.Reward / 1000);
                      var digit = DxVipUtils.instance.numberFormatD(DxVipModel.instance.betResult.Reward / 1000, 2.0);
                      text.string = "+" + inter + digit + "K";
                      tween(_this12.addScore).to(0.25, {
                        position: v3(0, 70, 0)
                      }).delay(2.0).call(function () {
                        text.string = "";
                        _this12.addScore.active = false;
                        _this12.addScore.position = v3(0, 0, 0);
                      }).start();
                    }
                  }
                })).call(function () {
                  return _this12.recycleChip(chipNode);
                }).start();
              };
              for (var _iterator12 = _createForOfIteratorHelperLoose(nodeArea.children.slice()), _step12; !(_step12 = _iterator12()).done;) {
                _loop2();
              }
            }
          }
        };
        _proto.showStartBetTip = function showStartBetTip() {
          tween(this.Sprite_betTip.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).delay(2.0).to(0.2, {
            opacity: 0
          }).start();
        };
        _proto.updatePathRecord = function updatePathRecord() {
          if (!DxVipModel.instance.gameRecord || DxVipModel.instance.gameRecord.length == 0) {
            return;
          }
          EventManager.instance.emit(eEvent.onUpdatePath, DxVipModel.instance.gameRecord);

          // let maxCounts = 44;
          // let iStart = DxVipModel.instance.gameRecord.length < maxCounts ? 0 : DxVipModel.instance.gameRecord.length - maxCounts;
          // let itemTemp = this.Node_pathRoot.children[0];
          // for (let i = 0; i < maxCounts; i++) {
          //     let newItem = this.Node_pathRoot.getChildByName(`item_${i}`);
          //     let recordInfo = DxVipModel.instance.gameRecord[iStart + i];
          //     if (recordInfo) {
          //         if (!newItem) {
          //             newItem = instantiate(itemTemp);
          //             newItem.name = `item_${i}`;
          //             this.Node_pathRoot.addChild(newItem);

          //             let row = i % 4;
          //             let col = Math.floor(i / 4);
          //             newItem.position = v3(col * 45, col % 2 == 0 ? -row * 40 : -(3 - row) * 40, 0);
          //         }

          //         let sprIndex = 0;
          //         let sumPoint = recordInfo.Dices[0] + recordInfo.Dices[1] + recordInfo.Dices[2];
          //         if (this.recordType == 0) {
          //             sprIndex = sumPoint < 11 ? 1 : 0;
          //         } else {
          //             sprIndex = sumPoint % 2 == 0 ? 3 : 2;
          //         }
          //         newItem.active = true;
          //         Tween.stopAllByTarget(newItem);
          //         newItem.getComponent(Sprite).spriteFrame = this.pathIcon[sprIndex];
          //         newItem.scale = v3(1, 1, 1);

          //         let isLast = iStart > 0 ? i == maxCounts - 1 : i == DxVipModel.instance.gameRecord.length - 1;
          //         if (isLast) {
          //             tween(newItem)
          //                 .to(0.3, { scale: v3(0.5, 0.5, 0.5) })
          //                 .to(0.3, { scale: v3(1.2, 1.2, 1.2) })
          //                 .union()
          //                 .repeatForever()
          //                 .start();
          //         }
          //     } else if (newItem) {
          //         newItem.active = false;
          //     }
          // }
        };

        _proto.doShowResult = function doShowResult() {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            var generation = _this13.viewGeneration;
            var finish = function finish() {
              if (_this13.finishResult === finish) _this13.finishResult = null;
              resolve();
            };
            _this13.finishResult = finish;
            gts.Debug.Log("==doShowResult==" + JSON.stringify(DxVipModel.instance.betResult));

            //加入记录
            DxVipModel.instance.recordResult(DxVipModel.instance.betResult);
            _this13.updatePathRecord();
            DxVipModel.instance.isReady = false;
            if (DxVipModel.instance.betResult.Reward > 0) {
              _this13.gold_boom.active = true;
              _this13.gold_boom.getChildByName("effect").getComponent(ParticleSystem).play();
              DxVipUtils.instance.playSound(eSound.CoinsBoom);
            }
            _this13.scheduleOnce(function () {
              if (generation !== _this13.viewGeneration || _this13.viewDisposed) {
                finish();
                return;
              }
              //show win Area
              var winArea = DxVipModel.instance.winArea;
              for (var i = 0; i < 10; i++) {
                var winNode = _this13.Node_winTip.children[i];
                winNode.active = winArea[i];
                var betBg = _this13.Node_betBg.children[i];
                var Node_label = _this13.Node_betLabel.children[i];
                var Node_labelWin = _this13.Node_winBetLabel.children[i];
                var Label_bet = Node_label.getChildByName("Label_bet").getComponent(Label);
                var Label_betWin = Node_labelWin.getChildByName("Label_bet").getComponent(Label);
                Node_labelWin.active = Node_label.active;
                Label_betWin.string = Label_bet.string;
                Label_bet.string = "";
                Node_label.active = false;
                if (winNode.active) {
                  betBg.getComponent(Sprite).color = color(255, 255, 255, 255);
                  Label_betWin.color = color(255, 171, 52, 255);
                  tween(winNode.getComponent(UIOpacity)).to(1.0, {
                    opacity: 120
                  }).to(1.0, {
                    opacity: 255
                  }).union().repeatForever().start();
                } else {
                  betBg.getComponent(Sprite).color = color(175, 175, 175, 255);
                  Label_betWin.color = color(0, 255, 0, 255);
                  _this13.Node_betArea.children[i].children.slice().forEach(function (node) {
                    return _this13.recycleChip(node);
                  });
                }
              }

              //showResult
              _this13.Node_result.active = true;
              var Node_win = _this13.Node_result.getChildByName("Node_win");
              Node_win.active = false;
              _this13.Node_result.getComponent(UIOpacity).opacity = 0;
              tween(_this13.Node_result.getComponent(UIOpacity)).to(0.25, {
                opacity: 255
              }).delay(3.0).to(0.25, {
                opacity: 0
              }).call(function () {
                if (generation !== _this13.viewGeneration || _this13.viewDisposed) return;
                _this13.Node_result.active = false;
                _this13.gold_boom.active = false;
              }).start();
              var Dices = DxVipModel.instance.betResult.Dices;
              for (var _i2 = 0; _i2 < 3; _i2++) {
                _this13.Sprite_dice[_i2].spriteFrame = _this13.diceSprFrame[Dices[_i2] - 1];
              }

              //updateGold--showResult
              if (DxVipModel.instance.betResult.Reward > 0) {
                DxVipUtils.instance.playSound(eSound.Win);
                _this13.collectChip();
                Node_win.active = true;
                var inter = Common.numFormatInt(DxVipModel.instance.betResult.Reward / 1000);
                var digit = DxVipUtils.instance.numberFormatD(DxVipModel.instance.betResult.Reward / 1000, 2.0);
                _this13.Label_win.string = "" + inter + digit + "K";
              }
              _this13.scheduleOnce(function () {
                if (generation !== _this13.viewGeneration || _this13.viewDisposed) {
                  finish();
                  return;
                }
                _this13.clearBet(true);
                finish();
              }, 3.0);
            }, 1.0);
          });
        };
        _proto.onShakeEnd = /*#__PURE__*/function () {
          var _onShakeEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this14 = this;
            var generation, i, winNode, betBg, _iterator13, _step13, childNode;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.viewDisposed || this.showingResult || !DxVipModel.instance.betResult)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  generation = this.viewGeneration;
                  this.showingResult = true;
                  DxVipModel.instance.gameStatus = eRunStatus.END;
                  _context.next = 7;
                  return this.doShowResult();
                case 7:
                  if (!(generation !== this.viewGeneration || this.viewDisposed)) {
                    _context.next = 9;
                    break;
                  }
                  return _context.abrupt("return");
                case 9:
                  this.showingResult = false;
                  // 仅补齐赢局收集中断的余额展示；输局不能套用未关联本局的钱包缓存。
                  if (DxVipModel.instance.betResult.Reward > 0 && DxVipModel.instance.endBalance > 0) {
                    DxVipModel.instance.curBalance = DxVipModel.instance.endBalance;
                    DxVipModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                  for (i = 0; i < 10; i++) {
                    winNode = this.Node_winTip.children[i];
                    betBg = this.Node_betBg.children[i];
                    betBg.getComponent(Sprite).color = color(255, 255, 255, 255);
                    if (winNode.active) {
                      Tween.stopAllByTarget(winNode.getComponent(UIOpacity));
                      winNode.active = false;
                    }
                  }
                  if (this.Node_result.active) {
                    tween(this.Node_result.getComponent(UIOpacity)).to(0.25, {
                      opacity: 0
                    }).call(function () {
                      if (generation !== _this14.viewGeneration || _this14.viewDisposed) return;
                      _this14.Node_result.active = false;
                    }).start();
                  }
                  DxVipModel.instance.gameStatus = eRunStatus.NONE;
                  this.refreshBetButtons();
                  tween(this.MainCamera.node).to(1.0, {
                    position: v3(0, 1.466, 1.926),
                    eulerAngles: v3(-25, 0, 0)
                  }, {
                    easing: "cubicOut"
                  }).start();
                  for (_iterator13 = _createForOfIteratorHelperLoose(this.Node_betRoot.children); !(_step13 = _iterator13()).done;) {
                    childNode = _step13.value;
                    tween(childNode).to(1.0, {
                      scale: v3(1, 1, 1)
                    }).start();
                  }

                // await this.doAwait(1.5);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onShakeEnd() {
            return _onShakeEnd.apply(this, arguments);
          }
          return onShakeEnd;
        }();
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(DxVipModel.instance.curBalance);
          if (strGold != this.selfGold.string) {
            DxVipUtils.instance.updateLabel(this.selfGold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eEvent.onBetStateChanged:
              {
                this.refreshBetButtons();
                // 已发出的注单被拒（等待解除且回到 NONE）或结果未知：先行的镜头退回下注机位。
                // 开奖成功时等待同样解除，但状态已是 SHAKE，不在此列。
                var ctrl = DxVipCtrl.instance;
                if (ctrl.betResultUnknown || !ctrl.isReqBet && DxVipModel.instance.gameStatus === eRunStatus.NONE) {
                  this.abortBetCamera();
                }
                break;
              }
            case eProto.HD_info:
              {
                this.initUIView();
                break;
              }
            case eProto.HD_Bet:
              {
                Tween.stopAllByTarget(this.Button_start.node);
                DxVipModel.instance.gameStatus = eRunStatus.START;
                this.Button_start.interactable = false;
                this.Button_last.interactable = false;
                this.Button_clearBet.interactable = false;
                DxVipModel.instance.gameStatus = eRunStatus.SHAKE;
                DxVipModel.instance.isReady = false;
                var early = this.betCamera;
                this.betCamera = 0;
                if (early === 2) {
                  // 镜头已先行到位，直接开始摇骰。
                  EventManager.instance.emit(eEvent.onShakeStart);
                } else if (early === 1) {
                  // 镜头还在途中：不重启飞行（否则总时长变长、速度跳变），到位回调里开始摇骰。
                  this.betShakePending = true;
                } else {
                  tween(this.MainCamera.node).to(1.5, {
                    position: v3(0, 1.358, 1.337),
                    eulerAngles: v3(-30, 0, 0)
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    EventManager.instance.emit(eEvent.onShakeStart);
                  }).start();
                  for (var _iterator14 = _createForOfIteratorHelperLoose(this.Node_betRoot.children), _step14; !(_step14 = _iterator14()).done;) {
                    var childNode = _step14.value;
                    tween(childNode).to(1.0, {
                      scale: v3(0.75, 0.75, 0.75)
                    }).start();
                  }
                }
                this.updateGold();
                break;
              }
            case eProto.Record:
              {
                // this.updateGold();
                break;
              }
            case eProto.HD_History:
              {
                this.updatePathRecord();
                break;
              }
            //////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();
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
          }
        };
        _proto.circleMove = function circleMove(dt) {
          var circleRadius = this.circleRadius * Math.sin(this.radian);
          // 先计算弧度
          if (circleRadius < 2.5) {
            this.speed = -this.speed;
          }
          this.radian += dt * (this.speed / 100);
          var x = circleRadius * Math.cos(this.radian) + this.circleCenter.x;
          var z = circleRadius * Math.sin(this.radian) + this.circleCenter.y;
          this.MainCamera.node.position = v3(x, this.MainCamera.node.position.y, z);
          this.MainCamera.node.lookAt(v3(0, 0.9, 0.4), v3(0, 1, 0));
          if (this.cameraCruiseStartTimes > 0) {
            var now = sys.now();
            if (now - this.cameraCruiseStartTimes > 600000) {
              this.onClickExit();
            }
          }
        };
        _proto.doCameraCruise = function doCameraCruise(isShow, delay) {
          var _this15 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (delay === void 0) {
            delay = 30;
          }
          this.isCameraCruise = isShow;
          if (!isShow) {
            this.cameraCruiseStartTimes = 0;
            this.unschedule(this.circleMove);
            Tween.stopAllByTarget(this.MainCamera.node);
            tween(this.MainCamera.node).to(1.5, {
              position: v3(0, 1.466, 1.926),
              eulerAngles: v3(-25, 0, 0)
            }, {
              easing: "cubicOut"
            }).start();
            return;
          }
          Tween.stopAllByTarget(this.MainCamera.node);
          tween(this.MainCamera.node).delay(delay).to(1.5, {
            position: v3(0, 2.1, 4)
          }, {
            easing: "cubicOut",
            onUpdate: function onUpdate() {
              _this15.MainCamera.node.lookAt(v3(0, 0.9, 0.4), v3(0, 1, 0));
            }
          }).call(function () {
            _this15.circleRadius = Vec3.distance(_this15.MainCamera.node.position, v3(0, _this15.MainCamera.node.position.y, 0.4));
            _this15.radian = Math.acos(-_this15.circleCenter.x / _this15.circleRadius);
            _this15.cameraCruiseStartTimes = sys.now();
            _this15.schedule(_this15.circleMove);
          }).start();
        };
        return DxVipGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiRoot", [_dec4], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_level", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Button_start", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Button_last", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Button_clearBet", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_betArea", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Node_betBg", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_betLabel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_winBetLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_betRoot", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_winTip", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "record", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "addScore", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_betTip", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "gold_boom", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_result", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_dice", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "diceSprFrame", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_pathRoot", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "pathIcon", [_dec29], {
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

System.register("chunks:///_virtual/DxVipHallPath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ContentEx.ts', './DxVipModel.ts', './EventManager.ts', './DxVipDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, isValid, instantiate, Label, UITransform, v2, Component, ContentEx, DxVipModel, EventManager, eEvent;
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
      Prefab = module.Prefab;
      Node = module.Node;
      isValid = module.isValid;
      instantiate = module.instantiate;
      Label = module.Label;
      UITransform = module.UITransform;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      ContentEx = module.default;
    }, function (module) {
      DxVipModel = module.DxVipModel;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "610d1TKl25Bi6UQ4nIQTWkH", "DxVipHallPath", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_COL = 13;
      var MAX_ROW = 5;
      var DxVipHallPath = exports('default', (_dec = ccclass("DxVipHallPath"), _dec2 = menu("game/DxVip/HallPath"), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxVipHallPath, _Component);
        function DxVipHallPath() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "arrItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path", _descriptor2, _assertThisInitialized(_this));
          _this._curData = void 0;
          _this.showType = 0;
          //0:大小 1:单双
          _this.pathItems = [];
          _this.pathInitialized = false;
          return _this;
        }
        var _proto = DxVipHallPath.prototype;
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onUpdatePath, this.updatePath, this);
          // 停用期间可能错过历史事件；重启时使用模型最新记录，缓存只保留显示节点。
          if (this.node_path) this.updatePath();
        };
        _proto.start = function start() {
          if (!this.pathInitialized) this.updatePath();
        };
        _proto.onToggleClick = function onToggleClick(event) {
          switch (event.node.name) {
            case "Toggle_dx":
              {
                if (this.showType == 0) {
                  return;
                }
                this.showType = 0;
                break;
              }
            case "Toggle_ds":
              {
                if (this.showType == 1) {
                  return;
                }
                this.showType = 1;
                break;
              }
          }
          this.updatePath();
        };
        _proto.updatePath = function updatePath() {
          this._curData = DxVipModel.instance.gameRecord && DxVipModel.instance.gameRecord.slice() || [];
          if (this._curData.length > 100) {
            this._curData = this._curData.slice(0, 100);
          }
          this.drawPathLayer2();
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdatePath, this.updatePath, this);
        };
        _proto.onDestroy = function onDestroy() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.pathItems), _step; !(_step = _iterator()).done;) {
            var item = _step.value;
            this.destroyPathItem(item);
          }
          this.pathItems.length = 0;
        };
        _proto.destroyPathItem = function destroyPathItem(item) {
          // num 可能已被 ContentEx 移出 root，必须分别结束其生命周期。
          if (isValid(item.num, true)) item.num.destroy();
          if (isValid(item.root, true)) item.root.destroy();
        };
        _proto.renderPathItems = function renderPathItems(items) {
          var _this2 = this;
          var path = this.node_path;
          if (!this.pathInitialized) {
            // Prefab 自带 item_0 占位，首轮替换；之后保留 ContentEx 的分层容器。
            for (var _iterator2 = _createForOfIteratorHelperLoose(path.children.slice()), _step2; !(_step2 = _iterator2()).done;) {
              var child = _step2.value;
              child.removeFromParent();
              child.destroy();
            }
            this.pathInitialized = true;
          }
          this.pathItems = this.pathItems.filter(function (item) {
            if (isValid(item.root, true) && isValid(item.num, true) && isValid(item.label, true)) return true;
            _this2.destroyPathItem(item);
            return false;
          });
          var used = new Set();
          // 先匹配全部现有同型节点，防止腾位置时淘汰本轮后面仍需要的类型。
          var selected = items.map(function (data) {
            var item = _this2.pathItems.find(function (value) {
              return value.prefab === _this2.arrItem[data.index] && !used.has(value);
            });
            if (item) used.add(item);
            return item;
          });
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.pathItems), _step3; !(_step3 = _iterator3()).done;) {
            var _item = _step3.value;
            if (!used.has(_item)) _item.root.active = false;
            // organize 会把 num 抽到标签层；不能再次从 root 查找，也不能统一归零。
            _item.num.parent = _item.root;
            _item.num.setPosition(_item.numPosition);
            if (!used.has(_item)) _item.root.removeFromParent();
          }
          for (var i = 0; i < items.length; i++) {
            var data = items[i];
            var item = selected[i];
            if (!item) {
              // 活动项和闲置项合计最多 65；类型替换的销毁遵循引擎帧末时序。
              if (this.pathItems.length >= MAX_COL * MAX_ROW) {
                var spare = this.pathItems.findIndex(function (value) {
                  return !used.has(value);
                });
                this.destroyPathItem(this.pathItems.splice(spare, 1)[0]);
              }
              var prefab = this.arrItem[data.index];
              var root = instantiate(prefab);
              var num = root.getChildByName("num");
              item = {
                prefab: prefab,
                root: root,
                num: num,
                label: num.getComponent(Label),
                numPosition: num.position.clone()
              };
              this.pathItems.push(item);
              used.add(item);
            }
            item.root.parent = path;
            item.root.setSiblingIndex(i);
            var pos = this.getPositionByRowCol(data.row, data.col, path);
            item.root.setPosition(pos.x, pos.y);
            var text = data.result + "";
            if (item.label.string !== text) item.label.string = text;
            item.root.active = true;
          }
          var comp = path.getComponent(ContentEx);
          if (comp) {
            comp.reload();
            // 保持原背景先绘制、标签层最后绘制，以及 organize 的倒序标签排列。
            for (var _iterator4 = _createForOfIteratorHelperLoose(comp.mgrType), _step4; !(_step4 = _iterator4()).done;) {
              var type = _step4.value;
              path.getChildByName(String(type)).setSiblingIndex(path.children.length - 1);
            }
            comp.organize();
          }
        };
        _proto.drawPathLayer2 = function drawPathLayer2() {
          if (!this.node_path) return;
          if (!this._curData || this._curData.length == 0) {
            // 空历史也回收显示项，不能让缓存的旧路单继续显示。
            this.renderPathItems([]);
            return;
          }
          var redata = this._curData.slice().reverse();
          //        //统计信息
          var totalCount = [0, 0, 0, 0];
          var row = 0;
          var col = 0;
          var tempNum = -1;
          var list = [];
          for (var i = 0; i < redata.length; i++) {
            var _result = redata[i].Dices[0] + redata[i].Dices[1] + redata[i].Dices[2];
            var item = {
              result: _result
            };
            if (this.showType == 1) {
              //                //单双
              _result = _result % 2 + 2;
            } else {
              //                //大11-18 小3-10
              _result = _result > 10 ? 0 : 1;
            }
            item["index"] = _result;
            totalCount[_result]++;
            if (tempNum != -1) {
              if (_result == tempNum) {
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
            tempNum = _result;

            // let itemL = cc.instantiate(resultItem);
            // pathlist.addChild(itemL);
            // itemL.getChildByName("num").getComponent(cc.Label).string = redata[i].Dices[0] + redata[i].Dices[1] + redata[i].Dices[2] + "";

            // let pos = this.getPositionByRowCol(row, col, pathlist);
            // //     itemL.getPosition().x = this.getPositionByRowCol(row, col, pathlist).x;
            // //     itemL.getPosition().y = this.getPositionByRowCol(row, col, pathlist).y;
            // console.log("pos", i, pos);
            // itemL.setPosition(pos.x, pos.y);
            // tempNum = result;
          }

          var start = list.length - MAX_COL;
          if (start < 0) {
            start = 0;
          }
          var result = list.slice(start, list.length);
          var items = [];
          for (var _i = 0; _i < result.length; _i++) {
            var _list = result[_i];
            for (var j = 0; j < _list.length; j++) {
              var _item2 = _list[j];
              items.push({
                index: _item2.index,
                result: _item2.result,
                row: j,
                col: _i
              });
            }
          }
          this.renderPathItems(items);
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
        return DxVipHallPath;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_path", [_dec4], {
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

System.register("chunks:///_virtual/DxVipModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './DxVipDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4abeay6inVMlqOWXFxbV8N8", "DxVipModel", undefined);
      var DxVipModel = exports('DxVipModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(DxVipModel, _GameDef$BaseSington);
        function DxVipModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.isReady = false;
          _this.gameStatus = eRunStatus.NONE;
          _this.gameInfo = null;
          // curBet: number = 1;
          _this.curTotalBet = 0;
          // curTotalWin: number = 0;
          _this.betList = [];
          _this.betListBack = [];
          _this.gameRecord = [];
          _this.localRecords = [];
          _this.winArea = [false, false, false, false, false, false, false, false, false, false];
          _this._betResult = null;
          return _this;
        }
        var _proto = DxVipModel.prototype;
        _proto.recordResult = function recordResult(result) {
          if (!this.localRecords.some(function (record) {
            return record === result || result.GameNo && record.GameNo === result.GameNo;
          })) {
            this.localRecords.unshift(result);
          }
          this.mergeHistory(this.gameRecord);
        };
        _proto.mergeHistory = function mergeHistory(history) {
          var seen = new Set();
          var seenRecords = new Set();
          // 初始历史可能晚于本局结果；保留已确认的新局，按 GameNo 或同一对象去重。
          // 缺少 GameNo 时不能用相同点数和奖励判断同一局。
          this.gameRecord = this.localRecords.concat(history).filter(function (record) {
            if (seenRecords.has(record)) return false;
            seenRecords.add(record);
            if (!record.GameNo) return true;
            if (seen.has(record.GameNo)) return false;
            seen.add(record.GameNo);
            return true;
          });
        };
        ////////////////////////////////////////////////////////////
        ////////////////////////////////
        /**
         * 退出房间  清理游戏数据
         */
        _proto.clearGameData = function clearGameData() {};
        _createClass(DxVipModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(_betResult) {
            this._betResult = _betResult;

            //
            this.winArea = [false, false, false, false, false, false, false, false, false, false];
            var totalPoint = 0;
            for (var i = 0; i < 3; i++) {
              var index = this._betResult.Dices[i] + 3;
              this.winArea[index] = true;
              totalPoint += this._betResult.Dices[i];
            }
            if (totalPoint >= 11) {
              this.winArea[0] = true;
            } else {
              this.winArea[3] = true;
            }
            if (totalPoint % 2 == 0) {
              this.winArea[1] = true;
            } else {
              this.winArea[2] = true;
            }
          }
        }]);
        return DxVipModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxVipScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './DxVipDef.ts', './DxVipUtils.ts', './Common.ts', './RenderScaleWatcher.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, director, view, isValid, Camera, Canvas, RenderTexture, game, UITransform, Sprite, SpriteFrame, EffectAsset, Material, Vec4, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, DxVipUtils, Common, RenderScaleWatcher;
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
      director = module.director;
      view = module.view;
      isValid = module.isValid;
      Camera = module.Camera;
      Canvas = module.Canvas;
      RenderTexture = module.RenderTexture;
      game = module.game;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      EffectAsset = module.EffectAsset;
      Material = module.Material;
      Vec4 = module.Vec4;
      instantiate = module.instantiate;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
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
      DxVipUtils = module.DxVipUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      RenderScaleWatcher = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "11a0c8qAXpIO7lCQwivXZUE", "DxVipScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      // 低端机分层渲染（见 setSceneRenderScale）里铺满屏幕的那张“低分辨率 3D 场景”贴图所在的渲染层，只给铺背景的相机看。
      // 取引擎留给项目的自定义层里本场景没用到的一个（主相机看 0x900020，界面相机看 0x42000001）。
      var LAYER_SCENE_BLIT = 1 << 7;
      // 分层渲染时 3D 场景纹理相对画布的边长比例。RenderScaleWatcher 的档位是按“整块画布一起降”定的（最低 0.75），
      // 这里界面不跟着降，3D 层可以降得更低；取值与 LhVipScene 相同。
      var SCENE_RENDER_SCALE = 0.67;
      var DxVipScene = exports('default', (_dec = ccclass("DxVipScene"), _dec2 = menu("DxVipGame/DxVipScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxVipScene, _Component);
        function DxVipScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor2, _assertThisInitialized(_this));
          _this._node_Game = null;
          // 分层渲染的状态：比例小于 1 表示已开启；下面几个对象只在开启期间存在。
          _this._sceneScale = 1;
          _this._sceneTexture = null;
          _this._sceneBlit = null;
          _this._sceneSmoothMaterial = null;
          _this._sceneBlitCamera = null;
          _this._sceneCamera = null;
          _this._uiCamera = null;
          _this._uiVisibility = 0;
          // 进场时场景配置的环境光类型；-1 表示还没记录。
          _this._sceneEnvLighting = -1;
          return _this;
        }
        var _proto = DxVipScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          DxVipUtils.instance.bundle = assetManager.getBundle(cBundle);
          DxVipUtils.instance.preLoad();
          DxVipUtils.instance.playBgMusic();
          this.onLoadGame();
        };
        _proto.start = function start() {
          var _this2 = this;
          // 低端机自动降分辨率由 ViewManager 挂载的 RenderScaleWatcher 判断何时降、是否回退；本场景接管具体做法。
          var scene = director.getScene();
          var watcher = scene ? scene.getComponentInChildren(RenderScaleWatcher) : null;
          if (watcher) watcher.scaleHandler = function (scale) {
            return _this2.setSceneRenderScale(scale < 1 ? SCENE_RENDER_SCALE : 1);
          };
        };
        _proto.onEnable = function onEnable() {
          // 先按新画布尺寸重建场景纹理，再重设相机的宽高比。
          view.on("canvas-resize", this.rebuildLayeredRender, this);
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          view.off("canvas-resize", this.rebuildLayeredRender, this);
          view.off("canvas-resize", this.onResize, this);
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onDestroy = function onDestroy() {
          // 本组件先于同节点上后挂的 RenderScaleWatcher 销毁，引擎随后会把对象字段置空，
          // 等 watcher 回调还原时已拿不到场景纹理，所以要在这里先释放。
          this.disableLayeredRender();
        };
        _proto.mainCamera = function mainCamera() {
          var scene = director.getScene();
          var node = scene ? scene.getChildByName("Main Camera") : null;
          return isValid(node) ? node.getComponent(Camera) : null;
        }
        // 主相机固定按 1920x1080 的宽高比投影。给相机设置或清除目标纹理时引擎会把宽高比改成目标的，
        // 所以分层渲染每次开启、关闭、重建之后都要再调用一次（见 setSceneRenderScale）。
        ;

        _proto.onResize = function onResize() {
          var main = this.mainCamera();
          if (main && main.camera) main.camera.resize(1920, 1080);
        };
        /**
         * 低端机降分辨率在本场景的做法（接管 RenderScaleWatcher 的默认做法，见其 scaleHandler），与 LhVipScene、BjlVipScene 相同。
         * 默认做法把整块画布降到 0.75，界面文字和筹码面额一起变糊。这里只让主相机把 3D 场景画到一张缩小的纹理上，
         * 画布保持原分辨率，叠放顺序是：主相机（3D 场景，进纹理）→ 铺背景相机（把纹理铺满屏幕）→ 界面相机。
         * 本场景的筹码和下注区都是界面，没有需要保持原分辨率的 3D 物体，也没有按主相机换算的点击和标签坐标。
         * scale 为 1 时还原。场景销毁过程中也会被调用一次，所以每一步都要判断对象是否还在。
         */
        _proto.setSceneRenderScale = function setSceneRenderScale(scale) {
          this.disableLayeredRender();
          if (scale < 1 && isValid(this.node)) this.enableLayeredRender(scale);
          this.onResize();
          this.syncLowTierLighting();
        };
        /**
         * 已降档（分层渲染开启）说明是低端机：环境光从环境贴图改为半球光，省掉每个像素的环境反射采样，
         * 降档被回退时恢复原配置。做法与 SpeedCarScene、BlackJackScene、LhVipScene 相同，不降档的设备画面不变。
         * 本场景接管了降档做法，档位变化不会派发 canvas-resize，只通知到 setSceneRenderScale，所以挂在那里。
         * 场景销毁过程中也会被调用，取场景和天空盒时要判空。
         */
        _proto.syncLowTierLighting = function syncLowTierLighting() {
          var scene = director.getScene();
          var skybox = scene && scene.globals ? scene.globals.skybox : null;
          if (!skybox) return;
          if (this._sceneEnvLighting < 0) this._sceneEnvLighting = skybox.envLightingType;
          // 0 即 EnvironmentLightingType.HEMISPHERE_DIFFUSE，该枚举没有从 cc 导出。
          var envLighting = this._sceneScale < 1 ? 0 : this._sceneEnvLighting;
          // 值没变就不写：写入会触发全场景材质重编。
          if (skybox.envLightingType != envLighting) skybox.envLightingType = envLighting;
        };
        _proto.enableLayeredRender = function enableLayeredRender(scale) {
          var main = this.mainCamera();
          var canvas = this.node.getComponent(Canvas);
          var ui = canvas && canvas.cameraComponent;
          if (!main || !ui) return;
          var texture = new RenderTexture();
          texture.reset({
            width: Math.round(game.canvas.width * scale),
            height: Math.round(game.canvas.height * scale)
          });

          // 铺背景：一张铺满可见区域的图，放在单独的层里，只有铺背景相机能看到。
          var blit = new Node("SceneBlit");
          blit.layer = LAYER_SCENE_BLIT;
          this.node.insertChild(blit, 0);
          blit.addComponent(UITransform).setContentSize(view.getVisibleSize());
          var sprite = blit.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          var frame = new SpriteFrame();
          frame.texture = texture;
          sprite.spriteFrame = frame;
          this.applySceneSmooth(sprite, texture);

          // 新相机的绘制顺序排在主相机之后、界面相机之前。
          var blitCamera = new Node("SceneBlitCamera");
          ui.node.parent.addChild(blitCamera);
          blitCamera.setPosition(ui.node.position);
          var blitCam = blitCamera.addComponent(Camera);
          blitCam.projection = ui.projection;
          blitCam.orthoHeight = ui.orthoHeight;
          blitCam.near = ui.near;
          blitCam.far = ui.far;
          blitCam.clearFlags = Camera.ClearFlag.SOLID_COLOR;
          blitCam.priority = main.priority + 1;
          blitCam.visibility = LAYER_SCENE_BLIT;
          this._sceneCamera = main;
          this._uiCamera = ui;
          this._uiVisibility = ui.visibility;
          ui.visibility = ui.visibility & ~LAYER_SCENE_BLIT;
          main.targetTexture = texture;
          this._sceneTexture = texture;
          this._sceneBlit = blit;
          this._sceneBlitCamera = blitCamera;
          this._sceneScale = scale;
        }

        /**
         * 铺背景时顺带做边缘平滑（shaders/sceneSmooth.effect，与 LhVipGame 里的同名着色器内容相同，各 bundle 自带一份）。
         * 场景纹理没有抗锯齿，不处理的话桌沿是台阶状的。着色器异步加载，加载完之前和加载失败时用引擎默认材质：
         * 有锯齿但画面正确。期间分层渲染可能已经关掉或重建（转屏），所以回调里要核对还是不是同一张纹理。
         */;
        _proto.applySceneSmooth = function applySceneSmooth(sprite, texture) {
          var _this3 = this;
          // 直接向 assetManager 取 bundle：退出过程中 DxVipUtils 单例已销毁，访问 instance 会重新创建它。
          var bundle = assetManager.getBundle(cBundle);
          if (!bundle) return;
          bundle.load("shaders/sceneSmooth", EffectAsset, function (err, effect) {
            if (err || !effect || !isValid(sprite) || _this3._sceneTexture !== texture) return;
            var material = new Material();
            material.initialize({
              effectAsset: effect
            });
            material.setProperty("texelSize", new Vec4(1 / texture.width, 1 / texture.height, 0, 0));
            sprite.customMaterial = material;
            _this3._sceneSmoothMaterial = material;
          });
        };
        _proto.disableLayeredRender = function disableLayeredRender() {
          if (this._sceneScale >= 1) return;
          this._sceneScale = 1;
          if (isValid(this._sceneCamera)) this._sceneCamera.targetTexture = null;
          if (isValid(this._uiCamera)) this._uiCamera.visibility = this._uiVisibility;
          for (var _i = 0, _arr = [this._sceneBlit, this._sceneBlitCamera]; _i < _arr.length; _i++) {
            var node = _arr[_i];
            if (isValid(node)) node.destroy();
          }
          if (this._sceneTexture) this._sceneTexture.destroy();
          if (this._sceneSmoothMaterial) this._sceneSmoothMaterial.destroy();
          this._sceneSmoothMaterial = null;
          this._sceneCamera = this._uiCamera = null;
          this._sceneBlit = this._sceneBlitCamera = null;
          this._sceneTexture = null;
        }

        // 画布尺寸变化（转屏）后场景纹理要按新尺寸重建。
        ;

        _proto.rebuildLayeredRender = function rebuildLayeredRender() {
          if (this._sceneScale < 1) this.setSceneRenderScale(this._sceneScale);
        };
        _proto.onLoadHall = function onLoadHall() {
          console.time("bundle.onLoadHall");
          Common.showWait();
          if (ViewManager.instance.miniLayer) {
            ViewManager.instance.miniLayer.getChildByName("miniGame").angle = 0;
          }

          //        //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this4 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            DxVipUtils.instance.bundle.load("prefab/DxVipGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this4.prefab_game = prefab;
              _this4.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              //                // this._node_Game.opacity = 0;
              fadeInTimes = 0.15;
            }
            this.onResize();
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              Common.closeWait();
            }).start();
            Common.closeWait();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return DxVipScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "firstNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_game", [_dec4], {
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

System.register("chunks:///_virtual/DxVipUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './DxVipDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, director, isValid, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, GameDef, AudioManager, eSound, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      director = module.director;
      isValid = module.isValid;
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
      cclegacy._RF.push({}, "e927cxjqM9HNapjhFbsOf2x", "DxVipUtils", undefined);
      var DxVipUtils = exports('DxVipUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(DxVipUtils, _GameDef$BaseSington);
        function DxVipUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.arrIconSpriteFrame = {};
          _this.soundIDList = {};
          _this.soundLoads = {};
          _this.soundScene = null;
          _this.soundGeneration = -1;
          _this.soundDisposed = false;
          return _this;
        }
        var _proto = DxVipUtils.prototype;
        //资源预加载
        _proto.preLoad = function preLoad() {
          // this.bundle.preload("prefab/DxVipGameView");
          // this.bundle.preloadDir("prefab");
          // this.bundle.preloadDir("sound");
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
            soundPath = eSound.bgm;
          }
          AudioManager.instance.playBgMusic(soundPath, this.bundle, true);
          // audioEngine.setMusicVolume(0.75);
        };

        DxVipUtils.destroy = function destroy() {
          if (this._instance) {
            this._instance.soundDisposed = true;
            this._instance.stopAllSound();
          }
          _GameDef$BaseSington.destroy.call(this);
        };
        _proto.playSound = function playSound(soundPath, isLoop, cb) {
          var _this5 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (cb === void 0) {
            cb = null;
          }
          var audio = AudioManager.instance;
          var scene = director.getScene();
          var generation = audio.effectGeneration;
          if (this.soundDisposed || !this.bundle || !audio._soundEffect || !isValid(scene, true)) return;
          if (this.soundScene !== scene || this.soundGeneration !== generation) {
            this.stopAllSound();
            this.soundScene = scene;
            this.soundGeneration = generation;
          }
          if (this.soundIDList[soundPath] || this.soundLoads[soundPath]) return;
          var request = {};
          this.soundLoads[soundPath] = request;
          try {
            this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
              if (_this5.soundLoads[soundPath] !== request) return;
              delete _this5.soundLoads[soundPath];
              // 停止、清场或切场景之后，迟到资源不能重新启动旧轮音效。
              if (err || !audioClip || audio.effectGeneration !== generation || !isValid(scene, true) || director.getScene() !== scene) return;
              var soundID = audio.playSound(audioClip, isLoop);
              if (!soundID) return;
              _this5.soundIDList[soundPath] = soundID;
              audio.setFinishCallback(soundID, function () {
                if (_this5.soundIDList[soundPath] !== soundID) return;
                delete _this5.soundIDList[soundPath];
                if (cb) cb();
              });
            });
          } catch (error) {
            if (this.soundLoads[soundPath] === request) delete this.soundLoads[soundPath];
            throw error;
          }
        };
        _proto.stopSound = function stopSound(soundPath) {
          delete this.soundLoads[soundPath];
          var soundID = this.soundIDList[soundPath];
          delete this.soundIDList[soundPath];
          if (soundID) AudioManager.instance.stopSound(soundID);
        };
        _proto.stopAllSound = function stopAllSound() {
          this.soundLoads = {};
          var soundIDs = this.soundIDList;
          this.soundIDList = {};
          for (var _i = 0, _Object$keys = Object.keys(soundIDs); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            AudioManager.instance.stopSound(soundIDs[key]);
          }
        };
        _proto.updateLabelDI = function updateLabelDI(label, num) {
          var _this6 = this;
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            var inter = Common.numFormatInt(num);
            var digit = _this6.numberFormatD(num, 2);
            labelCom.string = "" + inter + digit + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
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
            //            // while (arrRate[1].length < digits) {
            //            //     arrRate[1] = arrRate[1].concat("0");
            //            // }
            rate = arrRate[0] + "." + arrRate[1];
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
            rate = arrRate[0] + "." + arrRate[1];
          }

          //        // gts.Debug.Log("==numberFormat==" + rate);
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

          //        // DxVipUtils.instance.playSound(DxVipDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // DxVipUtils.instance.stopSound(DxVipDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this7.numberFormatFloatD(curWin / 1000, 2.0) : _this7.numberFormatD(curWin / 1000, 2.0);
            label.string = "" + inter + digit + "K";
            //                        // label.string = isFloatFormat ? `${this.numberFormatFloat(curWin / 1000, 2.0)}K` : `${this.numberFormat(curWin / 1000, 2.0)}K`;
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

          //        // DxVipUtils.instance.playSound(DxVipDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // DxVipUtils.instance.stopSound(DxVipDef.eSound.numAdd);
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

          //        // DxVipUtils.instance.playSound(DxVipDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // DxVipUtils.instance.stopSound(DxVipDef.eSound.numAdd);

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
        ////////////////////////////
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
        return DxVipUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/first-person-camera2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Vec3, Quat, KeyCode, input, Input, game, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Quat = module.Quat;
      KeyCode = module.KeyCode;
      input = module.input;
      Input = module.Input;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "41633NQ8UtH5ZBJ6wdJDgkM", "first-person-camera", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var v2_1 = new Vec2();
      var v2_2 = new Vec2();
      var v3_1 = new Vec3();
      var qt_1 = new Quat();
      var KEYCODE = {
        W: "W".charCodeAt(0),
        S: "S".charCodeAt(0),
        A: "A".charCodeAt(0),
        D: "D".charCodeAt(0),
        Q: "Q".charCodeAt(0),
        E: "E".charCodeAt(0),
        SHIFT: KeyCode.SHIFT_LEFT
      };
      var FirstPersonCamera = exports('FirstPersonCamera', (_dec = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FirstPersonCamera, _Component);
        function FirstPersonCamera() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSpeedShiftScale", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "damp", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotateSpeed", _descriptor4, _assertThisInitialized(_this));
          _this._euler = new Vec3();
          _this._velocity = new Vec3();
          _this._position = new Vec3();
          _this._speedScale = 1;
          return _this;
        }
        var _proto = FirstPersonCamera.prototype;
        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          Vec3.copy(this._euler, this.node.eulerAngles);
          Vec3.copy(this._position, this.node.position);
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        };
        _proto.update = function update(dt) {
          var t = Math.min(dt / this.damp, 1);

          // position
          Vec3.transformQuat(v3_1, this._velocity, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this._position, v3_1, this.moveSpeed * this._speedScale);
          Vec3.lerp(v3_1, this.node.position, this._position, t);
          this.node.setPosition(v3_1);
          // rotation
          Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, t);
          this.node.setRotation(qt_1);
        };
        _proto.onMouseWheel = function onMouseWheel(e) {
          var delta = -e.getScrollY() * this.moveSpeed * 0.1; // delta is positive when scroll down
          Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
        };
        _proto.onKeyDown = function onKeyDown(e) {
          var v = this._velocity;
          if (e.keyCode === KEYCODE.SHIFT) {
            this._speedScale = this.moveSpeedShiftScale;
          } else if (e.keyCode === KEYCODE.W) {
            if (v.z === 0) {
              v.z = -1;
            }
          } else if (e.keyCode === KEYCODE.S) {
            if (v.z === 0) {
              v.z = 1;
            }
          } else if (e.keyCode === KEYCODE.A) {
            if (v.x === 0) {
              v.x = -1;
            }
          } else if (e.keyCode === KEYCODE.D) {
            if (v.x === 0) {
              v.x = 1;
            }
          } else if (e.keyCode === KEYCODE.Q) {
            if (v.y === 0) {
              v.y = -1;
            }
          } else if (e.keyCode === KEYCODE.E) {
            if (v.y === 0) {
              v.y = 1;
            }
          }
        };
        _proto.onKeyUp = function onKeyUp(e) {
          var v = this._velocity;
          if (e.keyCode === KEYCODE.SHIFT) {
            this._speedScale = 1;
          } else if (e.keyCode === KEYCODE.W) {
            if (v.z < 0) {
              v.z = 0;
            }
          } else if (e.keyCode === KEYCODE.S) {
            if (v.z > 0) {
              v.z = 0;
            }
          } else if (e.keyCode === KEYCODE.A) {
            if (v.x < 0) {
              v.x = 0;
            }
          } else if (e.keyCode === KEYCODE.D) {
            if (v.x > 0) {
              v.x = 0;
            }
          } else if (e.keyCode === KEYCODE.Q) {
            if (v.y < 0) {
              v.y = 0;
            }
          } else if (e.keyCode === KEYCODE.E) {
            if (v.y > 0) {
              v.y = 0;
            }
          }
        };
        _proto.onTouchStart = function onTouchStart(e) {
          if (game.canvas.requestPointerLock) {
            game.canvas.requestPointerLock();
          }
        };
        _proto.onTouchMove = function onTouchMove(e) {
          e.getStartLocation(v2_1);
          if (v2_1.x > game.canvas.width * 0.4) {
            // rotation
            e.getDelta(v2_2);
            this._euler.y -= v2_2.x * this.rotateSpeed * 0.1;
            this._euler.x += v2_2.y * this.rotateSpeed * 0.1;
          } else {
            // position
            e.getLocation(v2_2);
            Vec2.subtract(v2_2, v2_2, v2_1);
            this._velocity.x = v2_2.x * 0.01;
            this._velocity.z = -v2_2.y * 0.01;
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (document.exitPointerLock) {
            document.exitPointerLock();
          }
          e.getStartLocation(v2_1);
          if (v2_1.x < game.canvas.width * 0.4) {
            // position
            this._velocity.x = 0;
            this._velocity.z = 0;
          }
        };
        return FirstPersonCamera;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeedShiftScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/DxVipGame', 'chunks:///_virtual/DxVipGame'); 
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