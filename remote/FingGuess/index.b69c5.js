System.register("chunks:///_virtual/FingGuess", ['./FingGuessCtrl.ts', './FingGuessDef.ts', './FingGuessHelp.ts', './FingGuessMainView.ts', './FingGuessModel.ts'], function () {
  return {
    setters: [null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/FingGuessCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './ConfigManager.ts', './Common.ts', './FingGuessDef.ts', './FingGuessModel.ts', './I18n.ts'], function (exports) {
  var _createClass, cclegacy, EventManager, ConfigManager, Common, eProto, eEvent, FingGuessModel, i18n;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      FingGuessModel = module.FingGuessModel;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "75891KoYBVLRpAyjJxmUcTz", "FingGuessCtrl", undefined);
      var FingGuessCtrl = exports('FingGuessCtrl', /*#__PURE__*/function () {
        function FingGuessCtrl() {}
        var _proto = FingGuessCtrl.prototype;
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
          var emitData = null;
          switch (data.cmd) {
            case eProto.GET_OPENRES:
              {
                //                //获取走势图
                if (data.Code != 0 || data.Data == undefined) return;
                emitData = data.Data;
                break;
              }
            case eProto.GET_OPEN:
              {
                //                //获取开牌结果
                if (!data) return;
                if (data.Code != 0 || data.Data == undefined) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                FingGuessModel.instance.resultArry = data.Data;
                emitData = {};
                break;
              }
            case eProto.GET_RECORD:
              {
                //                //自己的下注记录
                if (data.Code != 0) return;
                emitData = data;
                break;
              }
            //            //////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.login:
              {
                //                // 断线重连
                emitData = {};
                break;
              }
          }
          if (emitData != null) {
            EventManager.instance.emit(eEvent.updateView, data.cmd, emitData);
          }
        };
        _createClass(FingGuessCtrl, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new FingGuessCtrl();
              FingGuessModel.instance.init();
            }
            return this._instance;
          }
        }]);
        return FingGuessCtrl;
      }());
      FingGuessCtrl._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FingGuessDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        HD_getOpenRes: void 0,
        HD_getRecord: void 0
      });
      cclegacy._RF.push({}, "e93ababVjxPCrSNFZC/0DWJ", "FingGuessDef", undefined);
      /** 石头剪刀布 */
      var cBundle = exports('cBundle', "FingGuess");

      //网络消息enum
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["GET_OPENRES"] = "roshambo/HD_getOpenRes";
        eProto["GET_RECORD"] = "roshambo/HD_getRecord";
        eProto["GET_OPEN"] = "roshambo/HD_betAndOpen";
        return eProto;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["updateView"] = "FingGuess_updateView";
        eEvent["resetData"] = "FingGuess_resetData";
        return eEvent;
      }({})); //

      //获取走势图

      var HD_getOpenRes;

      //获取记录信息

      var HD_getRecord;

      //开牌

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FingGuessHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, isValid, UIOpacity, v3, tween, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "d4039IjJO9FL4KL5hTITRV2", "FingGuessHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FingGuessHelp = exports('default', (_dec = ccclass("FingGuessHelp"), _dec2 = menu("game/FingGuess/FingGuessHelp"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FingGuessHelp, _Component);
        function FingGuessHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sub_main", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FingGuessHelp.prototype;
        //    // onLoad() {}
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
        return FingGuessHelp;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "sub_main", [_dec3], {
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

System.register("chunks:///_virtual/FingGuessMainView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './BtnArea.ts', './GUtil.ts', './FingGuessCtrl.ts', './FingGuessDef.ts', './FingGuessModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Button, sp, Node, SpriteFrame, Label, ScrollView, AudioClip, assetManager, UITransform, Tween, Sprite, find, UIOpacity, tween, isValid, Toggle, instantiate, Component, i18n, GameDef, AudioManager, ConfigManager, DataManager, UserProxyEvent, UserKey, EventManager, NetManager, ViewManager, Common, BtnArea, GUtil, FingGuessCtrl, eEvent, cBundle, eProto, FingGuessModel;
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
      Button = module.Button;
      sp = module.sp;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      ScrollView = module.ScrollView;
      AudioClip = module.AudioClip;
      assetManager = module.assetManager;
      UITransform = module.UITransform;
      Tween = module.Tween;
      Sprite = module.Sprite;
      find = module.find;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      isValid = module.isValid;
      Toggle = module.Toggle;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameDef = module.GameDef;
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
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      BtnArea = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      FingGuessCtrl = module.FingGuessCtrl;
    }, function (module) {
      eEvent = module.eEvent;
      cBundle = module.cBundle;
      eProto = module.eProto;
    }, function (module) {
      FingGuessModel = module.FingGuessModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "36b081WYEVP/Zs2KDn1esuz", "FingGuessMainView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FingGuessMainView = exports('default', (_dec = ccclass("FingGuessMainView"), _dec2 = menu("game/FingGuess/FingGuessMainView"), _dec3 = property(Button), _dec4 = property(sp.Skeleton), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(ScrollView), _dec13 = property(Node), _dec14 = property(AudioClip), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FingGuessMainView, _Component);
        function FingGuessMainView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btn_shake", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_bg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skeleton_result", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_left", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_right", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_finger", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl_jackpot", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_result", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_trend", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trend_scrollView", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trend_prefab", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sound", _descriptor12, _assertThisInitialized(_this));
          _this._bundle = void 0;
          _this._betNum = 0;
          _this._selectBetIndex = 0;
          //默认的筹码选择
          _this._isStart = false;
          _this._shakeIndex = 1;
          _this._isShake = false;
          _this._shakeWeight = 5;
          _this._shakeTime = 0;
          _this._shakeT = 1;
          return _this;
        }
        var _proto = FingGuessMainView.prototype;
        //    // private _resultArry: any[] = undefined; //结果
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          FingGuessCtrl.instance.regist();
          EventManager.instance.on(eEvent.updateView, this.updateView, this);
          this._bundle = assetManager.getBundle(cBundle);
          if (!this._bundle) {
            assetManager.loadBundle(GameDef.Game.FingGuess, function (err, bundle) {
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
          BtnArea.OnClicked(this.btn_shake.node, function (btn) {
            _this2.onClickShake();
          }, this);
          this._betNum = 1000;
          this.lbl_jackpot.string = Common.numFormat(this._betNum) + "";
          DataManager.instance.isChangeGold = false;
        };
        _proto.onLoadBundleCompleted = function onLoadBundleCompleted() {
          NetManager.instance.waitServiceSendData(); //监听服务端推送
          NetManager.instance.sendOnlineData(eProto.GET_OPENRES, {});

          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.initEvent = function initEvent() {
          this.trend_scrollView.content.on(Node.EventType.SIZE_CHANGED, this.onNodeEventSizeChange, this);
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.gameShow = function gameShow() {
          Common.showLog("前台");
          NetManager.instance.waitServiceSendData();
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.GET_OPENRES:
              {
                //                //获取走势图
                this.clearHistoryNodes(this.trend_scrollView.content);

                //                //data: FingGuessDef.IOpenRes[]
                if (data.length > 0) {
                  for (var i = data.length - 1; i >= 0; --i) {
                    this.addTendItem(data[i].winPos);
                  }
                }
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              Common.closeWait();
              break;
            case eProto.GET_OPEN:
              {
                this.startShake();
                break;
              }
          }
        }
        //    //
        ;

        _proto.onNodeEventSizeChange = function onNodeEventSizeChange() {
          if (this.trend_scrollView.content.getComponent(UITransform).width > this.trend_scrollView.node.getComponent(UITransform).width) {
            this.trend_scrollView.scrollToRight(0.2);
          }
        };
        _proto.vsAni = function vsAni(data) {
          //        // let spr_red = cc.find("spr_red", this.skeleton_result);
          //        // let spr_blue = cc.find("spr_blue", this.skeleton_result);
          //        // spr_red.getComponent(cc.Sprite).spriteFrame = this.spriteFrames_finger[data.redRes];
          //        // spr_blue.getComponent(cc.Sprite).spriteFrame = this.spriteFrames_finger[data.blueRes];
          //        // spr_red.opacity = 0;
          //        // spr_red.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeIn(0.3).easing(cc.easeIn(2))));
          //        // spr_blue.opacity = 0;
          //        // spr_blue.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeIn(0.3).easing(cc.easeIn(2))));
          //        // this.skeleton_result.active = true;
          //        // AudioManager.instance.playSound(this.sound[0], false);
          //        // this.skeleton_result.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          //        // this.skeleton_result.getComponent(sp.Skeleton).addAnimation(0, "quite", true);

          //        // //延时0.5秒隐藏
          //        // this.skeleton_result.runAction(
          //        //     cc.sequence(
          //        //         cc.delayTime(2),
          //        //         cc.callFunc(() => {
          //        //             this.skeleton_result.active = false;
          //        //             this.onShowResult(data.winPos, data.score);
          //        //         })
          //        //     )
          //        // );
          this.onShowResult(data.winPos, data.score);
          this.spine_bg.setAnimation(0, "idle", true);

          //        // this.skeleton_result.getComponent(sp.Skeleton).setCompleteListener(() => {
          //        //     //延时0.5秒隐藏
          //        //     this.skeleton_result.runAction(
          //        //         cc.sequence(
          //        //             cc.delayTime(1.2),
          //        //             cc.callFunc(() => {
          //        //                 this.skeleton_result.active = false;
          //        //                 this.onShowResult(data.winPos, data.score);
          //        //             })
          //        //         )
          //        //     );
          //        // });
        };

        _proto.setHandSpriteFrames = function setHandSpriteFrames(node, frameIndex) {
          Tween.stopAllByTarget(node);
          node.angle = 0;
          var comp = node.getChildByName("spr_hand").getComponent(Sprite);
          comp.spriteFrame = this.spriteFrames_finger[frameIndex];
        };
        _proto.onShowResult = function onShowResult(winPis, money) {
          var _this3 = this;
          AudioManager.instance.playSound(this.sound[1], false);
          var node_result = find("reborn_guess/node_result", this.node);
          node_result.active = true;
          node_result.getComponent(UIOpacity).opacity = 0;
          var spr_result = find("spr_result", node_result).getComponent(Sprite);
          var index = 0;
          if (money == 0) {
            index = 2;
          } else if (money < 0) {
            index = 1;
          }
          spr_result.spriteFrame = this.spriteFrames_result[index];
          spr_result.node.active = money <= 0;
          var lbl_money = find("lbl_money", node_result).getComponent(Label);
          if (money > 0) {
            lbl_money.string = "+" + Common.numFormat(money);
          }
          lbl_money.node.active = money > 0 ? true : false;
          var winAni = find("winAni", node_result);
          winAni.active = money > 0 ? true : false;
          if (money > 0) {
            var aniList = ["red", "blue", "green"];
            winAni.getComponent(sp.Skeleton).setAnimation(0, aniList[0], false);
          }
          Tween.stopAllByTarget(node_result);
          tween(node_result).delay(0.2).call(function () {
            node_result.getComponent(UIOpacity).opacity = 255;
            if (money > 0) {
              AudioManager.instance.playSound(_this3.sound[3], false);
            }

            //                    //中奖-更新
            DataManager.instance.isChangeGold = true;
            DataManager.instance.emit(UserProxyEvent.CHANGE_GOLD);
            DataManager.instance.isChangeGold = false;
          }).delay(3).call(function () {
            node_result.active = false;
          }).start();
          this.btn_shake.interactable = true;
          this._isStart = false;
          for (var i = 1; i < 6; ++i) {
            var btn_bet = find("reborn_guess/btn_bet" + i, this.node);
            var spr_ban = find("reborn_guess/spr_ban" + i, this.node);
            if (isValid(btn_bet)) btn_bet.active = true;
            if (isValid(spr_ban)) spr_ban.active = false;
          }
          this.addTendItem(winPis);
        };
        _proto.guessAni = function guessAni(node, isLeft) {
          var _this4 = this;
          //        // 回退 石头
          //        // 回退 剪刀
          //        // 回退 出
          var comp = node.getChildByName("spr_hand").getComponent(Sprite);
          Tween.stopAllByTarget(node);
          tween(node).delay(1.5).call(function () {
            if (FingGuessModel.instance.resultArry) {
              _this4._isShake = false;
              var result = FingGuessModel.instance.resultArry;
              var id = isLeft ? result.redRes : result.blueRes;
              comp.spriteFrame = _this4.spriteFrames_finger[id];
              Tween.stopAllByTarget(node);
              if (isLeft) {
                _this4.vsAni(FingGuessModel.instance.resultArry);
              }
            }
            AudioManager.instance.playSound(_this4.sound[2], false);
          }).union().repeatForever().start();
        }
        //    //点击开始
        ;

        _proto.onClickShake = function onClickShake() {
          if (!this.btn_shake.interactable) {
            return;
          }
          FingGuessModel.instance.resultArry = undefined;
          var userMoney = parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          if (userMoney < this._betNum) {
            Common.showTip(i18n.t("10001"));
            return;
          }
          if (this._betNum <= 0) {
            Common.showTip(i18n.t("10011"));
            return;
          }
          NetManager.instance.sendOnlineData(eProto.GET_OPEN, {
            pos: this._selectBetIndex,
            coin: this._betNum
          });
          var node_result = find("reborn_guess/node_result", this.node);
          Tween.stopAllByTarget(node_result);
          node_result.active = false;
        };
        _proto.startShake = function startShake() {
          AudioManager.instance.playSound(this.sound[2], false);
          for (var i = 1; i < 6; ++i) {
            var btn_bet = find("reborn_guess/btn_bet" + i, this.node);
            var spr_ban = find("reborn_guess/spr_ban" + i, this.node);
            if (isValid(btn_bet)) btn_bet.active = false;
            if (isValid(spr_ban)) spr_ban.active = true;
          }
          this._isStart = true;
          this._shakeIndex = 0;
          this._shakeTime = 0;
          this._shakeWeight = 5;
          this.btn_shake.interactable = false;
          this.guessAni(this.node_left, true);
          this.guessAni(this.node_right, false);
          this._isShake = true;
          this.spine_bg.setAnimation(0, "spin", true);

          //        //下注-更新
          var userMoney = parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          userMoney -= this._betNum;
          DataManager.instance.setUserDataForKey(UserKey.GOLD, userMoney);
          DataManager.instance.isChangeGold = true;
          DataManager.instance.emit(UserProxyEvent.CHANGE_GOLD);
          DataManager.instance.isChangeGold = false;
        };
        _proto.onClickSelectBet = function onClickSelectBet(event, customEventData) {
          //        // AudioManager.instance.playbuttonEffect();
          var bet_num = parseInt(customEventData);
          var userMoney = parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          if (userMoney < this._betNum + bet_num) {
            Common.showTip(i18n.t("10001"));
            return;
          }
          this._betNum += bet_num;
          this.lbl_jackpot.string = Common.numFormat(this._betNum) + "";
        };
        _proto.onToggled = function onToggled(event) {
          if (this._isStart) {
            var parent = event.node.parent;
            var name = "toggle_" + this._selectBetIndex;
            for (var i = 0; i < parent.childrenCount; i++) {
              var chlid = parent.children[i];
              if (chlid.name == name) {
                chlid.getComponent(Toggle).isChecked = true;
                return;
              }
            }
          }
          //        // AudioManager.instance.playbuttonEffect();
          var toggle_name = event.node.name;
          var inedex = 0;
          if (toggle_name == "toggle_0") {
            inedex = 0;
          } else if (toggle_name == "toggle_1") {
            inedex = 1;
          } else if (toggle_name == "toggle_2") {
            inedex = 2;
          }
          if (this._selectBetIndex == inedex) return;
          this._selectBetIndex = inedex;
        };
        _proto.onClickDel = function onClickDel() {
          this._betNum = 0;
          this.lbl_jackpot.string = "0.0";
        }
        //    //打开自己的记录
        ;

        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("roshambo");
        }
        //    //打开帮助界面
        ;

        _proto.onClickHelp = function onClickHelp() {
          var _this5 = this;
          //        // AudioManager.instance.playbuttonEffect();
          Common.loadPopBuddle("prefab/FIngGuessHelp", this._bundle, function () {}, function (FIngGuessHelp) {
            var FIngGuessHelpLayer = instantiate(FIngGuessHelp);
            FIngGuessHelpLayer.active = true;
            FIngGuessHelpLayer.parent = _this5.node;
          }, true);
        };
        _proto.onToggledSound = function onToggledSound(event) {
          //        //let toggle_name = event.node.name;
          AudioManager.instance.setSoundStatus(!AudioManager.instance._soundEffect);
        };
        _proto.addTendItem = function addTendItem(index) {
          if (!isValid(this.trend_prefab)) return;
          //        //超过30个自动删除
          if (this.trend_scrollView.content.children.length > 30) {
            this.trend_scrollView.content.children[0].destroyFromParent();
          }
          var item = instantiate(this.trend_prefab);
          item.active = true;
          item.parent = this.trend_scrollView.content;
          var spr_trend = item.getComponent(Sprite);
          spr_trend.spriteFrame = this.spriteFrames_trend[index];
        };
        _proto.removeEvent = function removeEvent() {
          FingGuessCtrl.instance.unRegist();
          EventManager.instance.off(eEvent.updateView, this.updateView, this);
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.update = function update(dt) {
          if (this._isShake) this.shakeHand();
        };
        _proto.handFilter = function handFilter() {
          if (this._shakeTime % this._shakeWeight == 0) {
            this._shakeTime = 0;
            this._shakeWeight += 1 * this._shakeT;
            if (this._shakeWeight >= 8) {
              this._shakeT = -1;
            } else if (this._shakeWeight <= 3) {
              this._shakeT = 1;
            }
            return true;
          }
          return false;
        };
        _proto.shakeHand = function shakeHand() {
          this._shakeTime++;
          if (!this.handFilter()) return;
          this._shakeIndex++;
          var index = this._shakeIndex % 3;
          var spLeft = this.node_left.getChildByName("spr_hand").getComponent(Sprite);
          spLeft.spriteFrame = this.spriteFrames_finger[index];
          var spRight = this.node_right.getChildByName("spr_hand").getComponent(Sprite);
          spRight.spriteFrame = this.spriteFrames_finger[index];
        };
        _proto.onDisable = function onDisable() {
          this.removeEvent();
        };
        _proto.onDestroy = function onDestroy() {
          this.closePop();
          DataManager.instance.isChangeGold = true;
        }
        //    //关闭
        ;

        _proto.closePop = function closePop() {
          //        // AudioManager.instance.playbuttonEffect();
          //        // AudioManager.instance.stopAll();
          //        // this.node.removeFromParent();
          //        // this.node.destroy();
          ViewManager.instance.closePopGame(GameDef.Game.FingGuess);
        };
        _proto.clearHistoryNodes = function clearHistoryNodes(parent) {
          // 列表条目不复用，先摘除再销毁，避免同帧统计包含待销毁节点。
          for (var _iterator = _createForOfIteratorHelperLoose(parent.children.slice()), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.removeFromParent();
            child.destroy();
          }
        };
        return FingGuessMainView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btn_shake", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spine_bg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skeleton_result", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_left", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_right", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_finger", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_jackpot", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_result", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_trend", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "trend_scrollView", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "trend_prefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sound", [_dec14], {
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

System.register("chunks:///_virtual/FingGuessModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "db72fcI5HZPErNKdGn/mRl+", "FingGuessModel", undefined);
      var FingGuessModel = exports('FingGuessModel', /*#__PURE__*/function () {
        function FingGuessModel() {
          this._resultArry = null;
          this._recordList = null;
        }
        var _proto = FingGuessModel.prototype;
        _proto.init = function init() {};
        _createClass(FingGuessModel, [{
          key: "resultArry",
          get: function get() {
            return this._resultArry;
          },
          set: function set(result) {
            this._resultArry = result;
          }
        }, {
          key: "recordList",
          get: function get() {
            return this._recordList;
          },
          set: function set(result) {
            this._recordList = result;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new FingGuessModel();
            }
            return this._instance;
          }
        }]);
        return FingGuessModel;
      }());
      FingGuessModel._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/FingGuess', 'chunks:///_virtual/FingGuess'); 
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