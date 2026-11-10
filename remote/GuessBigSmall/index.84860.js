System.register("chunks:///_virtual/GuessBigSmall", ['./GuessBigSmallCardAni.ts', './GuessBigSmallCtrl.ts', './GuessBigSmallDef.ts', './GuessBigSmallHelp.ts', './GuessBigSmallMainView.ts', './GuessBigSmallModel.ts', './GuessBigSmallPrize.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/GuessBigSmallCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteAtlas, find, Sprite, Component;
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
      SpriteAtlas = module.SpriteAtlas;
      find = module.find;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1d4c8I9QJ1IOrh5oqPT22E1", "GuessBigSmallCardAni", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CARDCOUNT = 4;
      var GuessBigSmallCardAni = exports('default', (_dec = ccclass("GuessBigSmallCardAni"), _dec2 = menu("game/GuessBigSmall/GuessBigSmallCardAni"), _dec3 = property([Node]), _dec4 = property(SpriteAtlas), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GuessBigSmallCardAni, _Component);
        function GuessBigSmallCardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_cards", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlasItem", _descriptor2, _assertThisInitialized(_this));
          _this.stepHeight = 240;
          //数字高度
          _this.moveOut = 60;
          _this._startMove = false;
          _this.standNum = null;
          //展示结果
          _this.delayTime = 0;
          //动画延迟
          _this.moveStep = 60;
          //每帧移动步长
          _this.cardIndex = 0;
          _this.finishCallBack = null;
          return _this;
        }
        var _proto = GuessBigSmallCardAni.prototype;
        _proto.onLoad = function onLoad() {
          //        /** 初始化数据管理器 */
          this.initEvent();
          this.scrollInit(this.node);
        };
        _proto.scrollInit = function scrollInit(node) {
          //        // //随机4张不重复的牌

          var array = new Array(52).fill(0).map(function (v, i) {
            return i + 1;
          }).sort(function () {
            return 0.5 - Math.random();
          }).filter(function (v, i) {
            return i < CARDCOUNT;
          });
          for (var i = 0; i < array.length; ++i) {
            var card = this.node_cards[i];
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
            spr_type3.spriteFrame = this.atlasItem.getSpriteFrame("kid_" + cardData.cardValue);
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
        };
        _proto.start = function start() {};
        _proto.initEvent = function initEvent() {};
        _proto.removeEvent = function removeEvent() {};
        _proto.onDestroy = function onDestroy() {
          this.removeEvent();
        };
        _proto.showResult = function showResult(cardValue, reConnect) {
          if (reConnect === void 0) {
            reConnect = false;
          }
          if (reConnect) {
            for (var i = 0, len = this.node_cards.length; i < len; i++) {
              var y = this.node_cards[i].getPosition().y;
              if (Math.abs(y) >= 0 && Math.abs(y) <= this.moveOut) {
                this.standNum = i;
                this.initCardAttri(this.node_cards[i], cardValue);
                break;
              }
            }
            return;
          }
          for (var _i = 0, _len2 = this.node_cards.length; _i < _len2; _i++) {
            var _y = this.node_cards[_i].getPosition().y;
            if (Math.abs(_y) > this.stepHeight + this.moveOut) {
              this.standNum = _i;
              this.initCardAttri(this.node_cards[_i], cardValue);
              break;
            }
          }
        };
        _proto.run = function run(delayTime) {
          if (delayTime === void 0) {
            delayTime = 0;
          }
          this._startMove = true;
          this.delayTime = delayTime;
          this.standNum = null;
          this.moveStep = 50; //每帧移动步长
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
          var length = this.node_cards.length;
          var stop = false;
          var fixStep = 0; //步长调整
          if (this.standNum != null) {
            this.moveStep -= 2;
            if (this.moveStep < 10) {
              this.moveStep = 10;
            }
          }
          for (var i = 0; i < length; i++) {
            var node = this.node_cards[i];
            // node.getPosition().y -= this.moveStep;
            node.setPosition(node.position.x, node.position.y - this.moveStep);
            if (node.getPosition().y < -(this.stepHeight + this.moveOut)) {
              node.setPosition(node.position.x, node.position.y + this.stepHeight * CARDCOUNT);
              var randomNum = Math.floor(Math.random() * 52) + 1;
              this.initCardAttri(node, randomNum);
            }

            //            //目标临近
            if (i == this.standNum && node.getPosition().y < 0 && node.getPosition().y > -2 * this.moveStep) {
              stop = true;
              fixStep = node.getPosition().y;
            }
          }
          if (stop) {
            this._startMove = false;
            for (var _i2 = 0; _i2 < length; _i2++) {
              var _node = this.node_cards[_i2];
              _node.setPosition(_node.position.x, _node.position.y - fixStep);
            }
            if (this.finishCallBack) {
              this.finishCallBack();
            }
          }
        };
        return GuessBigSmallCardAni;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_cards", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "atlasItem", [_dec4], {
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

System.register("chunks:///_virtual/GuessBigSmallCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts', './GuessBigSmallDef.ts', './GuessBigSmallModel.ts'], function (exports) {
  var _createClass, cclegacy, i18n, ConfigManager, EventManager, Common, eProto, eEvent, GuessBigSmallModel;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      GuessBigSmallModel = module.GuessBigSmallModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b0766JW12lANrt/Up0DQuO7", "GuessBigSmallCtrl", undefined);
      var GuessBigSmallCtrl = exports('GuessBigSmallCtrl', /*#__PURE__*/function () {
        function GuessBigSmallCtrl() {}
        var _proto = GuessBigSmallCtrl.prototype;
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

          //        // //注册分发事件
          //        // EventManager.instance.on(GuessBigSmallDef.eEvent.resetData, this.onEvent, this);
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
          EventManager.instance.off(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.off(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);

          //        // //注册分发事件
          //        // EventManager.instance.off(GuessBigSmallDef.eEvent.resetData, this.onEvent, this);
        };

        _proto.onEvent = function onEvent(event, data) {
          //        // switch (event) {
          //        //     case GuessBigSmallDef.eEvent.resetData: {
          //        //         // GuessBigSmallModel.Instance.resultData = null;
          //        //         break;
          //        //     }
          //        // }
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code != 0 || data.Data == undefined) {
            Common.showTip(i18n.errTip(data.Code));
            EventManager.instance.dispatch(eEvent.errorResult);
            return;
          }
          var emitData = null;
          switch (data.cmd) {
            //            //获取配置信息
            case eProto.GET_INFO:
              {
                //                //获取配置
                GuessBigSmallModel.Instance.configInfo = data.Data.gameConf;
                GuessBigSmallModel.Instance.openInfo = data.Data.gameState;
                emitData = {};
                break;
              }
            case eProto.GET_OPEN:
            case eProto.GUESS_BS:
              {
                //                //获取开牌结果
                GuessBigSmallModel.Instance.openInfo = data.Data;
                emitData = {};
                break;
              }
            //            //结算
            case eProto.GUESS_STOP:
              {
                emitData = data.Data.score;
                break;
              }
            //            //自己的下注记录
            case eProto.GET_RECORD:
              {
                if (data.Data.length > 0) {
                  if (!GuessBigSmallModel.Instance.recordList_self) GuessBigSmallModel.Instance.recordList_self = [];
                  var recordList_self = GuessBigSmallModel.Instance.recordList_self;
                  for (var i = 0; i < data.Data.length; ++i) {
                    recordList_self.push(data.Data[i]);
                  }
                }
                emitData = data;
                break;
              }
            //            //大奖
            case eProto.GET_PRIZE:
              {
                if (data.Data.length > 0) {
                  if (!GuessBigSmallModel.Instance.recordList_prize) GuessBigSmallModel.Instance.recordList_prize = [];
                  var recordList_prize = GuessBigSmallModel.Instance.recordList_prize;
                  for (var _i3 = 0; _i3 < data.Data.length; ++_i3) {
                    recordList_prize.push(data.Data[_i3]);
                  }
                }
                emitData = data;
                break;
              }
            //            //实时奖池数据
            case eProto.S2C_GET_JACKPOT:
              {
                GuessBigSmallModel.Instance.configInfo = data.Data;
                emitData = {};
                break;
              }
            //            //更新服务端时间戳
            case eProto.TIMESTAMP:
              {
                emitData = data.Data.serverTime;
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                //                // 断线重连
                emitData = {};
                break;
              }
            case eProto.JACKPORT_REWARD:
              {
                emitData = {
                  award: data.Data
                };
                break;
              }
          }
          if (emitData != null) {
            EventManager.instance.emit(eEvent.updateView, data.cmd, emitData);
          }
        };
        _createClass(GuessBigSmallCtrl, null, [{
          key: "Instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new GuessBigSmallCtrl();
              GuessBigSmallModel.Instance.init();
            }
            return this._instance;
          }
        }]);
        return GuessBigSmallCtrl;
      }());
      GuessBigSmallCtrl._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GuessBigSmallDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        HD_getPoolRewardRecord: void 0,
        HD_getRecord: void 0,
        HD_selectBigOrSmall: void 0,
        HD_start: void 0,
        HD_updatePoolVal: void 0
      });
      cclegacy._RF.push({}, "06884wUfvBIPYhQ88SmH/J5", "GuessBigSmallDef", undefined); // /** 猜上下 */
      // //ConfigManager 相关的event 涉及 ButtonInit 后续修改
      //     //数据更新
      //     //数据重置
      // //网络消息 C2S_:表示send S2C_:recv  没有标识:send&&recv
      //     /** 获取配置信息 */
      //     /** 开牌*/
      //     /** 猜大小*/
      //     /** 停止*/
      //     //实时奖池数据
      //     /** 自己记录*/
      //     /** 退出游戏*/
      //     /** 大奖*/
      //     //当前时间戳
      //     //获得大奖
      // //#region
      var cBundle = exports('cBundle', "GuessBigSmall");
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["updateView"] = "mini_updateView";
        eEvent["resetData"] = "mini_resetData";
        eEvent["errorResult"] = "guess_errorResult";
        return eEvent;
      }({}));
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["GET_INFO"] = "guessBigSmall/HD_enter";
        eProto["GET_OPEN"] = "guessBigSmall/HD_start";
        eProto["GUESS_BS"] = "guessBigSmall/HD_selectBigOrSmall";
        eProto["GUESS_STOP"] = "guessBigSmall/HD_stop";
        eProto["S2C_GET_JACKPOT"] = "guessBigSmall/HD_updatePoolVal";
        eProto["GET_RECORD"] = "guessBigSmall/HD_getRecord";
        eProto["C2S_SEND_EXIT"] = "guessBigSmall/HD_close";
        eProto["GET_PRIZE"] = "guessBigSmall/HD_getPoolRewardRecord";
        eProto["TIMESTAMP"] = "guessBigSmall/HD_getServerTime";
        eProto["JACKPORT_REWARD"] = "guessBigSmall/HD_poolAward";
        return eProto;
      }({}));

      // export class Util {
      ////     // public static get bundle(): cc.AssetManager.Bundle {
      ////     //     let mMgr = MainManager.getInstance();
      ////     //     let vMgr = mMgr ? mMgr.getViewManager() : null;
      ////     //     return vMgr ? vMgr.getBuddle(GameDef.Game.CpGame) : null;
      ////     // }
      ////     // public static LoadResInBundle(path: string, type: typeof cc.Asset, cb: (error: Error, asset: cc.Asset) => void) {
      ////     //     let bundle = this.bundle;
      ////     //     if (!bundle) {
      ////     //         if (cb) {
      ////     //             cb(new Error(`没有找到bundle`), null);
      ////     //         }
      ////     //     } else {
      ////     //         bundle.load(path, type, cb);
      ////     //     }
      ////     // }
      //// }
      ////#endregion
      ////////////////////////////////////////////////
      ///** S2C 网络包结构
      // * S2C = {"Data":{},"GameType":"yxx","Action":"HD_UpdatePlayerNum","ErrMsg":"操作成功","Code":0,"cmd":"yxx/HD_UpdatePlayerNum"}
      // */
      ///**配置信息 */
      ///**大奖记录 HD_getPoolRewardRecord*/
      var HD_getPoolRewardRecord;
      ///**当前服务器时间戳 */

      ///**实时奖池数据 */

      var HD_updatePoolVal;
      ///**猜大小 */
      var HD_selectBigOrSmall;
      ///**钱包信息 */

      ///**停止 */

      ///**开牌 */
      var HD_start;
      ///**自己的下注记录 */

      var HD_getRecord;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GuessBigSmallHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "536b0CNZLFPNLaswe0P8Yk4", "GuessBigSmallHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GuessBigSmallHelp = exports('default', (_dec = ccclass("GuessBigSmallHelp"), _dec2 = menu("game/GuessBigSmall/GuessBigSmallHelp"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GuessBigSmallHelp, _Component);
        function GuessBigSmallHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sub_main", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GuessBigSmallHelp.prototype;
        _proto.onLoad = function onLoad() {
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
        _proto.initEvent = function initEvent() {};
        _proto.removeEvent = function removeEvent() {};
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
        return GuessBigSmallHelp;
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

System.register("chunks:///_virtual/GuessBigSmallMainView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './GUtil.ts', './GuessBigSmallCardAni.ts', './GuessBigSmallCtrl.ts', './GuessBigSmallDef.ts', './GuessBigSmallModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteAtlas, Label, ScrollView, SpriteFrame, AudioClip, sp, assetManager, Tween, find, isValid, Button, tween, instantiate, Sprite, color, UITransform, UIOpacity, v3, Toggle, Component, i18n, GameDef, AudioManager, ConfigManager, DataManager, UserKey, EventManager, NetManager, ViewManager, Common, GUtil, GuessBigSmallCardAni, GuessBigSmallCtrl, cBundle, eProto, eEvent, GuessBigSmallModel;
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
      Label = module.Label;
      ScrollView = module.ScrollView;
      SpriteFrame = module.SpriteFrame;
      AudioClip = module.AudioClip;
      sp = module.sp;
      assetManager = module.assetManager;
      Tween = module.Tween;
      find = module.find;
      isValid = module.isValid;
      Button = module.Button;
      tween = module.tween;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      color = module.color;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      Toggle = module.Toggle;
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
      GUtil = module.default;
    }, function (module) {
      GuessBigSmallCardAni = module.default;
    }, function (module) {
      GuessBigSmallCtrl = module.GuessBigSmallCtrl;
    }, function (module) {
      cBundle = module.cBundle;
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      GuessBigSmallModel = module.GuessBigSmallModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
      cclegacy._RF.push({}, "ea6a4HFiIhMiIbA1h/9GdN6", "GuessBigSmallMainView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GuessBigSmallMainView = exports('default', (_dec = ccclass("GuessBigSmallMainView"), _dec2 = menu("game/GuessBigSmall/GuessBigSmallMainView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteAtlas), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(ScrollView), _dec9 = property(Node), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(Label), _dec14 = property(AudioClip), _dec15 = property(sp.Skeleton), _dec16 = property(sp.Skeleton), _dec17 = property(Node), _dec18 = property(sp.Skeleton), _dec19 = property(Label), _dec20 = property(GuessBigSmallCardAni), _dec21 = property(Label), _dec22 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GuessBigSmallMainView, _Component);
        function GuessBigSmallMainView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sub_main", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_start", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlasItem", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl_jackpot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl_ModdleMoney", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trend_scrollView", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trend_prefab", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_big", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_small", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_abg", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl_countdown", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sound", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_bg", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_gold", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_jackpot", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_jackpot", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_jackpot", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardAni", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl_upRate", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl_downRate", _descriptor20, _assertThisInitialized(_this));
          _this.showJackpotReward = false;
          _this._bundle = void 0;
          _this._selectBetIndex = 0;
          //默认的筹码选择
          _this._isGameStart = false;
          //游戏是否开始
          _this._isRollAni = false;
          //滚动动画
          _this._time = 0;
          _this._endTime = 0;
          //结束时间戳
          _this.shakeOffset = 4;
          _this._lastCardValue = null;
          _this.arrOpenCard = [];
          return _this;
        }
        var _proto = GuessBigSmallMainView.prototype;
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
          this.spine_gold.node.active = false;
          this.node_jackpot.active = false;
          this.cardAni.finishCallBack = function () {
            _this2.runFinish();
          };
        };
        _proto.onLoadBundleCompleted = function onLoadBundleCompleted() {
          NetManager.instance.waitServiceSendData(); //监听服务端推送
          NetManager.instance.sendOnlineData(eProto.GET_INFO, {});

          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.onEnable = function onEnable() {
          //        // this.scrollInit(this.scrolls[0]);
          //        // this.scrollInit(this.scrolls[1]);
        };
        _proto.onDestroy = function onDestroy() {
          this.closePop();
        };
        _proto.initEvent = function initEvent() {
          GuessBigSmallCtrl.Instance.regist();
          EventManager.instance.on(eEvent.updateView, this.updateView, this);
          this.trend_scrollView.content.on(Node.EventType.SIZE_CHANGED, this.onNodeEventSizeChange, this);
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
          EventManager.instance.on(eEvent.errorResult, this.errorResult, this);
        };
        _proto.errorResult = function errorResult() {
          Tween.stopAllByTarget(this.node);
          if (this._lastCardValue) {
            this.cardAni.showResult(this._lastCardValue, false);
          } else {
            this.cardAni.showResult(1, false);
          }
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.gameShow = function gameShow() {
          this.scheduleOnce(function () {
            if (NetManager.instance._connect == true) {
              Common.showLog("前台");
              NetManager.instance.sendOnlineData(eProto.GET_INFO, {});
              NetManager.instance.waitServiceSendData();
            }
          }, 0.1);
        };
        _proto.initView = function initView() {
          if (GuessBigSmallModel.Instance.configInfo == undefined) return;
          if (GuessBigSmallModel.Instance.configInfo[0] && GuessBigSmallModel.Instance.configInfo[0].poolVal) {
            this.lbl_jackpot.string = "" + Common.numFormat(GuessBigSmallModel.Instance.configInfo[this._selectBetIndex].poolVal);
            if (this.lbl_ModdleMoney.string.length == 0) {
              this.lbl_ModdleMoney.string = "" + Common.numFormat(GuessBigSmallModel.Instance.configInfo[this._selectBetIndex].chip);
            }
          }
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
                if (GuessBigSmallModel.Instance.openInfo && GuessBigSmallModel.Instance.openInfo.bWin) {
                  this.runScrollAnimation(true);
                  this.refreshBetInfo(GuessBigSmallModel.Instance.openInfo.selectChip);
                } else {
                  this.refreshBetInfo(GuessBigSmallModel.Instance.configInfo[0].chip);
                  this.onServerStopResult(0);
                }
                this.initView();
                break;
              }
            case eProto.GUESS_STOP:
              {
                //                //结算
                this.onServerStopResult(data);
                break;
              }
            case eProto.S2C_GET_JACKPOT:
              {
                //                //奖池数据
                this.refreshPoolInfo();
                break;
              }
            case eProto.TIMESTAMP:
              {
                //                //更新服务端时间戳

                var serverTime = data;
                this._time = this._endTime - serverTime;
                this.refreshTime();
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                //                // 断线重连
                Common.closeWait();
                this.gameShow();
                NetManager.instance.waitServiceSendData();
                break;
              }
            case eProto.JACKPORT_REWARD:
              {
                this.showJackpotReward = true;
                this.txt_jackpot.string = Common.numFormat("" + data.award);
                break;
              }
            case eProto.GET_OPEN:
            case eProto.GUESS_BS:
              {
                this.runScrollAnimation(false);
                break;
              }
          }
        }
        //    // private scrollInit(node) {
        //    //     // //随机4张不重复的牌
        //    //     let array = new Array(52)
        //    //         .fill(0)
        //    //         .map((v, i) => i + 1)
        //    //         .sort(() => 0.5 - Math.random())
        //    //         .filter((v, i) => i < 4);
        //    //     for (let i = 0; i < array.length; ++i) {
        //    //         let card = cc.instantiate(this.cardPrefab);
        //    //         card.active = true;
        //    //         card.parent = node;
        //    //         let randomNum = array[i];
        //    //         if (randomNum < 1) randomNum = 1;
        //    //         this.initCardAttri(card, randomNum);
        //    //     }
        //    // }
        //    // private initCardAttri(cardNode: cc.Node, cardValue) {
        //    //     let cardData: any = this.getCardValue(cardValue);
        //    //     let cardNum = cc.find("num", cardNode).getComponent(cc.Sprite);
        //    //     let spr_type1 = cc.find("spr_type1", cardNode).getComponent(cc.Sprite);
        //    //     let spr_type2 = cc.find("spr_type2", cardNode).getComponent(cc.Sprite);
        //    //     let spr_type3 = cc.find("spr_type3", cardNode).getComponent(cc.Sprite);
        //    //     spr_type1.node.active = true;
        //    //     spr_type2.node.active = false;
        //    //     spr_type3.node.active = true;
        //    //     let cardColor: string = cardData.cardType == 1 || cardData.cardType == 3 ? "red" : "black";
        //    //     if (cardData.cardValue < 11) {
        //    //         spr_type1.spriteFrame = this.atlasItem.getSpriteFrame(`cardtype` + cardData.cardType);
        //    //         spr_type2.spriteFrame = this.atlasItem.getSpriteFrame(`cardtype` + cardData.cardType);
        //    //         spr_type2.node.active = true;
        //    //         spr_type3.node.active = false;
        //    //     } else if (cardData.cardValue > 10 && cardData.cardValue < 14) {
        //    //         spr_type1.spriteFrame = this.atlasItem.getSpriteFrame(`cardtype` + cardData.cardType);
        //    //         spr_type3.spriteFrame = this.atlasItem.getSpriteFrame(`kid_` + cardData.cardType + "_" + cardData.cardValue);
        //    //     } else if (cardData.cardValue > 13 && cardData.cardValue < 16) {
        //    //         cardColor = "";
        //    //         spr_type3.spriteFrame = this.atlasItem.getSpriteFrame(`kid_` + cardData.cardType);
        //    //         spr_type1.node.active = false;
        //    //     }
        //    //     cardNum.spriteFrame = this.atlasItem.getSpriteFrame(`num_` + cardColor + cardData.cardValue);
        //    // }
        ;

        _proto.runScrollAnimation = function runScrollAnimation(isReconnect) {
          var _this3 = this;
          this.btn_start.active = false;
          this.spine_gold.node.active = false;
          var card_bg = find("node_roll/card_bg", this.sub_main);
          if (isValid(card_bg)) {
            card_bg.active = false;
          }
          var btn_up = find("btn_up", this.sub_main);
          if (isValid(btn_up)) {
            btn_up.getComponent(Button).interactable = false;
          }
          var btn_down = find("btn_down", this.sub_main);
          if (isValid(btn_down)) {
            btn_down.getComponent(Button).interactable = false;
          }
          var spr_stop = find("spr_stop", this.sub_main);
          this.setNodeIsActive(spr_stop, true);
          var btn_stop = find("btn_stop", this.sub_main);
          this.setNodeIsActive(btn_stop, false);
          this._time = 0;
          this.lbl_countdown.string = "02:00";
          this._isGameStart = true;
          if (isReconnect) {
            this.onServerOpenResult(GuessBigSmallModel.Instance.openInfo, true);
          } else {
            //            // if (cc.isValid(this.scrolls[0]) && cc.isValid(this.scrolls[1])) {
            //            //     this._isRollAni = true;
            //            //     this.scrolls[0].active = true;
            //            //     this.scrolls[0].x = -64;
            //            //     this.scrolls[1].active = true;
            //            //     this.scrolls[1].x = this.scrolls[0].getContentSize().width - Math.abs(this.scrolls[0].x) + 20; //20是间距
            //            // }
            this._isRollAni = true;
            this.cardAni.run();
            this.shakeOffset = 4;
            //            // GuessBigSmallModel.Instance.openInfo = undefined;
            Tween.stopAllByTarget(this.node);
            tween(this.node).delay(0.5).call(function () {
              if (GuessBigSmallModel.Instance.openInfo) {
                Tween.stopAllByTarget(_this3.node);
                _this3.cardAni.showResult(GuessBigSmallModel.Instance.openInfo.curCard, isReconnect);
                _this3.shakeOffset = 2;
              }
            }).union().repeatForever().start();
            this.spine_bg.setAnimation(0, "spin", true);
          }
        };
        _proto.setNodeIsActive = function setNodeIsActive(node, isActive) {
          if (isValid(node)) {
            node.active = isActive;
          }
        };
        _proto.addTendItem = function addTendItem(index) {
          if (!isValid(this.trend_prefab)) return;
          var item = instantiate(this.trend_prefab);
          item.active = true;
          item.parent = this.trend_scrollView.content;
          var cardData = this.getCardValue(index);
          var spr_design = find("spr_design", item).getComponent(Sprite);
          var frame = cardData.cardValue > 1 && cardData.cardValue < 10 ? this.spriteFrames_small[cardData.cardType - 1] : this.spriteFrames_big[cardData.cardType - 1];
          spr_design.spriteFrame = frame;
          this.arrOpenCard.push(cardData.cardValue);
          var lbl_num = find("lbl_num", item).getComponent(Label);
          var strNum = "";
          if (cardData.cardValue == 1) {
            strNum = "A";
          } else if (cardData.cardValue == 11) {
            strNum = "J";
          } else if (cardData.cardValue == 12) {
            strNum = "Q";
          } else if (cardData.cardValue == 13) {
            strNum = "K";
          } else {
            strNum = "" + cardData.cardValue;
          }
          lbl_num.string = strNum;
          lbl_num.color = cardData.cardValue > 1 && cardData.cardValue < 10 ? color(198, 194, 202, 255) : color(203, 159, 74, 255);
          this._lastCardValue = index;
        };
        _proto.onNodeEventSizeChange = function onNodeEventSizeChange() {
          if (this.trend_scrollView.content.getComponent(UITransform).width > this.trend_scrollView.node.getComponent(UITransform).width) {
            this.trend_scrollView.scrollToRight(0.1);
            if (this.trend_scrollView.content.children.length > 20) {
              //                //超过20个自动删除
              this.trend_scrollView.content.children[0].destroyFromParent();
            }
          }
        }
        //    //点击开始
        ;

        _proto.onClickStart = function onClickStart() {
          if (!GuessBigSmallModel.Instance.configInfo) {
            return;
          }
          if (GuessBigSmallModel.Instance.configInfo[this._selectBetIndex]) {
            var userMoney = parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD));
            if (userMoney < GuessBigSmallModel.Instance.configInfo[this._selectBetIndex].chip) {
              Common.showTip(i18n.lang["10001"]);
              return;
            }
            this.arrOpenCard = [];
            DataManager.instance.isChangeGold = true;
            this.btn_start.getComponent(Button).interactable = false;
            // cc.tween(this.btn_start)
            //     .delay(2.0)
            //     .call(() => {
            //         this.btn_start.getComponent(cc.Button).interactable = true;
            //     })
            //     .start();

            AudioManager.instance.playSound(this.sound[0], false);
            NetManager.instance.sendOnlineData(eProto.GET_OPEN, {
              action: "Start",
              chip: GuessBigSmallModel.Instance.configInfo[this._selectBetIndex].chip
            });
          }
        }
        //    //猜大
        ;

        _proto.onClickGuessBig = function onClickGuessBig() {
          AudioManager.instance.playSound(this.sound[0], false);
          NetManager.instance.sendOnlineData(eProto.GUESS_BS, {
            action: "SelectBigOrSmall",
            select: "big"
          });
        }
        //    //猜小
        ;

        _proto.onClickGuessSmall = function onClickGuessSmall() {
          AudioManager.instance.playSound(this.sound[0], false);
          NetManager.instance.sendOnlineData(eProto.GUESS_BS, {
            action: "SelectBigOrSmall",
            select: "small"
          });
        }
        //    //停止
        ;

        _proto.onClickStop = function onClickStop() {
          //        // AudioManager.instance.playbuttonEffect();
          NetManager.instance.sendOnlineData(eProto.GUESS_BS, {
            action: "Stop"
          });
        };
        _proto.onServerStopResult = function onServerStopResult(money) {
          var _this4 = this;
          var node_upMoney = find("node_upMoney", this.sub_main);
          var lbl_money = find("lbl_money", node_upMoney).getComponent(Label);
          lbl_money.string = "0";
          var node_downMoney = find("node_downMoney", this.sub_main);
          lbl_money = find("lbl_money", node_downMoney).getComponent(Label);
          lbl_money.string = "0";
          var lbl_tip = find("lbl_tip", this.sub_main);
          this.setNodeIsActive(lbl_tip, false);
          var btn_up = find("btn_up", this.sub_main);
          if (isValid(btn_up)) {
            btn_up.getComponent(Button).interactable = false;
          }
          var btn_down = find("btn_down", this.sub_main);
          if (isValid(btn_down)) {
            btn_down.getComponent(Button).interactable = false;
          }
          var spr_stop = find("spr_stop", this.sub_main);
          this.setNodeIsActive(spr_stop, true);
          var btn_stop = find("btn_stop", this.sub_main);
          if (isValid(btn_stop) && isValid(spr_stop)) {
            btn_stop.active = !spr_stop.active;
          }
          var lbl_resultMoney = find("lbl_resultMoney", this.sub_main);
          if (isValid(lbl_resultMoney) && money > 0) {
            lbl_resultMoney.setPosition(lbl_resultMoney.position.x, 0);
            lbl_resultMoney.getComponent(UIOpacity).opacity = 255;
            lbl_resultMoney.getComponent(Label).string = Common.numFormat("" + money);
            Tween.stopAllByTarget(lbl_resultMoney);
            // lbl_resultMoney.runAction(cc.sequence(cc.moveBy(0.5, 0, 50), cc.spawn(cc.moveBy(0.3, 0, 20), cc.fadeOut(0.6))));
            tween(lbl_resultMoney).by(0.5, {
              position: v3(0, 50)
            }).parallel(tween().by(0.3, {
              position: v3(0, 20)
            }), tween().call(function () {
              tween(lbl_resultMoney.getComponent(UIOpacity)).to(0.6, {
                opacity: 0
              }).start();
            })).start();
            this.spine_gold.node.active = true;
            this.spine_gold.setAnimation(0, "get", false);
            this.spine_gold.setCompleteListener(function () {
              _this4.spine_gold.node.active = false;
            });
          }
          this.spine_bg.setAnimation(0, "get", false);
          this.spine_bg.setCompleteListener(function () {
            _this4.spine_bg.setAnimation(0, "idle", true);
          });
          this.resetEndView();
        };
        _proto.runFinish = function runFinish() {
          if (GuessBigSmallModel.Instance.openInfo) {
            Tween.stopAllByTarget(this.node);
            this.onServerOpenResult(GuessBigSmallModel.Instance.openInfo, false);
          }
        };
        _proto.onServerOpenResult = function onServerOpenResult(data, isReconnect) {
          var _this5 = this;
          AudioManager.instance.stopSound();
          this.spine_bg.setAnimation(0, "idle", true);
          this._isRollAni = false;
          //        // this.sub_main.y = 0;
          if (data.curCard && isReconnect) {
            //            // this.card.active = !this._isRollAni;
            //            // this.initCardAttri(this.card, data.curCard);
            this.cardAni.showResult(data.curCard, isReconnect);
          }

          //        // this.setNodeIsActive(this.scrolls[0], false);
          //        // this.setNodeIsActive(this.scrolls[1], false);
          var node_upMoney = find("node_upMoney", this.sub_main);
          if (isValid(node_upMoney) && data.biggerReward) {
            node_upMoney.active = true;
            var lbl_money = find("lbl_money", node_upMoney).getComponent(Label);
            lbl_money.string = Common.numFormat(data.biggerReward);
          }
          var node_downMoney = find("node_downMoney", this.sub_main);
          if (isValid(node_downMoney) && data.smallerReward) {
            node_downMoney.active = true;
            var _lbl_money = find("lbl_money", node_downMoney).getComponent(Label);
            _lbl_money.string = Common.numFormat(data.smallerReward);
          }
          if (data.curGolds && isValid(this.lbl_ModdleMoney)) {
            this.lbl_ModdleMoney.string = Common.numFormat(data.curGolds);
          }
          var lbl_tip = find("lbl_tip", this.sub_main);
          if (isValid(lbl_tip)) {
            lbl_tip.active = !data.bWin;
            if (data.bWin == false) {
              lbl_tip.getComponent(Label).string = "Bạn đã thua !";
              this.trend_scrollView.content.removeAllChildren();
            }
          }
          var cardData = this.getCardValue(data.curCard);
          var btn_up = find("btn_up", this.sub_main);
          if (isValid(btn_up)) {
            btn_up.getComponent(Button).interactable = data.bWin && cardData.cardValue != 1; //A最大
          }

          var btn_down = find("btn_down", this.sub_main);
          if (isValid(btn_down)) {
            btn_down.getComponent(Button).interactable = data.bWin && cardData.cardValue != 2; //2最小
          }

          var spr_stop = find("spr_stop", this.sub_main);
          if (isValid(spr_stop)) {
            spr_stop.active = data.curGolds > data.selectChip && data.bWin ? false : true;
          }
          var btn_stop = find("btn_stop", this.sub_main);
          if (isValid(btn_stop) && isValid(spr_stop)) {
            btn_stop.active = !spr_stop.active;
          }
          if (cardData.cardValue == 1 && data.aList.length > 0) {
            var layout_a = find("layout_a", this.sub_main);
            if (isReconnect) {
              for (var i = 0; i < data.aList.length; ++i) {
                var a_spr = layout_a.children[i];
                if (isValid(a_spr)) {
                  a_spr.getComponent(Sprite).spriteFrame = this.spriteFrames_abg[1];
                }
              }
            } else {
              var _a_spr = layout_a.children[data.aList.length - 1];
              if (isValid(_a_spr)) {
                _a_spr.getComponent(Sprite).spriteFrame = this.spriteFrames_abg[1];
              }
            }
          }
          if (data.bWin) {
            if (isReconnect) {
              this.trend_scrollView.content.removeAllChildren();
              if (data.showCards && data.showCards.length > 0) {
                for (var _i = 0; _i < data.showCards.length; ++_i) {
                  this.addTendItem(data.showCards[_i]);
                }
              }
              this._time = data.endTime - data.curTime;
            } else {
              AudioManager.instance.playSound(this.sound[1], false);
              this.addTendItem(data.curCard);
              this._time = data.endTime - data.startTime;
            }
            this._endTime = data.endTime;
            Tween.stopAllByTarget(this.lbl_countdown.node);
            // this.lbl_countdown.node.runAction(
            //     cc.repeatForever(
            //         cc.sequence(
            //             cc.delayTime(10),
            //             cc.callFunc(() => {
            //                 NetManager.instance.sendOnlineData(GuessBigSmallDef.eProto.TIMESTAMP, {});
            //             })
            //         )
            //     )
            // );
            tween(this.lbl_countdown.node).delay(10).call(function () {
              NetManager.instance.sendOnlineData(eProto.TIMESTAMP, {});
            }).union().repeatForever().start();

            //小
            var _cardData = this.getCardValue(data.curCard);
            var cardValue = _cardData.cardValue;
            var sCounts = cardValue == 1 ? (14 - 2) * 4 : (cardValue - 2) * 4;
            //大
            var bCounts = cardValue == 1 ? 0 : (14 - cardValue) * 4;
            var totalCounts = 52 - this.arrOpenCard.length;
            var vCardValue = cardValue == 1 ? 14 : cardValue;
            for (var _iterator = _createForOfIteratorHelperLoose(this.arrOpenCard), _step; !(_step = _iterator()).done;) {
              var card = _step.value;
              var vCard = card == 1 ? 14 : card;
              if (vCard < vCardValue) {
                sCounts--;
              } else if (vCard > vCardValue) {
                bCounts--;
              }
            }
            var bRate = Math.floor(bCounts * 10000 / totalCounts) / 100;
            var sRate = Math.floor(sCounts * 10000 / totalCounts) / 100;
            // if (cardValue == 2) {
            //     bRate = 100;
            //     sRate = 0;
            // } else if (cardValue == 1) {
            //     bRate = 0;
            //     sRate = 100;
            // }

            this.lbl_upRate.node.active = true;
            this.lbl_downRate.node.active = true;
            this.lbl_upRate.string = bRate + "%";
            this.lbl_downRate.string = sRate + "%";
          } else if (data.bWin == false) {
            Tween.stopAllByTarget(this.node);
            // this.node.runAction(
            //     cc.sequence(
            //         cc.delayTime(1),
            //         cc.callFunc(() => {
            //             this.resetEndView();
            //         })
            //     )
            // );
            tween(this.node).delay(1).call(function () {
              _this5.resetEndView();
            }).start();
          }
          if (this.showJackpotReward) {
            this.node_jackpot.active = true;
            var spine = this.spine_jackpot;
            if (spine) {
              spine.setAnimation(0, "win", false);
              this.txt_jackpot.node.active = false;
              spine.setCompleteListener(function () {
                spine.setAnimation(0, "idle", true);
                _this5.txt_jackpot.node.active = true;
              });
            }
          }
        }
        //    //重置界面--输了
        ;

        _proto.resetEndView = function resetEndView() {
          AudioManager.instance.playSound(this.sound[2], false);
          this.btn_start.active = true;
          this.btn_start.getComponent(Button).interactable = true;
          this._isGameStart = false;
          this.lbl_upRate.node.active = false;
          this.lbl_downRate.node.active = false;
          var node_upMoney = find("node_upMoney", this.sub_main);
          var lbl_money = find("lbl_money", node_upMoney).getComponent(Label);
          lbl_money.string = "0";
          var node_downMoney = find("node_downMoney", this.sub_main);
          lbl_money = find("lbl_money", node_downMoney).getComponent(Label);
          lbl_money.string = "0";
          var card_bg = find("node_roll/card_bg", this.sub_main);
          this.setNodeIsActive(card_bg, true);
          var lbl_tip = find("lbl_tip", this.sub_main);
          if (isValid(lbl_tip)) {
            lbl_tip.active = true;
            lbl_tip.getComponent(Label).string = "Nhấn BẮT ĐẦU để chơi .";
          }
          //        // this.card.active = false;
          if (GuessBigSmallModel.Instance.configInfo[this._selectBetIndex]) {
            this.lbl_ModdleMoney.string = "" + Common.numFormat(GuessBigSmallModel.Instance.configInfo[this._selectBetIndex].chip);
          }
          var layout_a = find("layout_a", this.sub_main);
          for (var i = 0; i < layout_a.children.length; ++i) {
            var a_spr = layout_a.children[i].getComponent(Sprite);
            a_spr.spriteFrame = this.spriteFrames_abg[0];
          }
          this._time = 0;
          Tween.stopAllByTarget(this.lbl_countdown.node);
          this.lbl_countdown.string = "02:00";
          this.trend_scrollView.content.removeAllChildren();
        }
        //    //刷新倒计时
        ;

        _proto.refreshTime = function refreshTime() {
          if (this._time <= 0) this._time = 0;
          this.lbl_countdown.string = this.formatTime(this._time);
        }
        //    /**
        //     * 时间戳转时间
        //     */
        ;

        _proto.add0 = function add0(m) {
          return m < 10 ? "0" + m : m;
        };
        _proto.formatTime = function formatTime(time) {
          var m = Math.floor(time % 3600 / 60);
          var s = Math.floor(time % 60);
          return this.add0(m) + ":" + this.add0(s);
        };
        _proto.formatTimeMs = function formatTimeMs(time) {
          var s = Math.floor(time % 60);
          var msX10 = Math.floor(time * 100 % 100);
          return this.add0(s) + ":" + this.add0(msX10);
        };
        _proto.update = function update(dt) {
          //        // if (this._isRollAni) {
          //        //     let y = this.shakeOffset;
          //        //     let s = this.sub_main.y > 0 ? -1 : 1;
          //        //     this.sub_main.y += s * y;
          //        // }

          //        // 每帧刷新界面
          if (this._time > 0) {
            this._time -= dt;
            this.refreshTime();
          }
        };
        _proto.onToggled = function onToggled(event, customData) {
          //        // AudioManager.instance.playbuttonEffect();
          var index = parseInt(customData);
          if (this._isGameStart) {
            var parent = event.node.parent;
            var name = "toggle_" + this._selectBetIndex;
            for (var i = 0; i < parent.childrenCount; i++) {
              var chlid = parent.children[i];
              if (chlid.name == name) {
                chlid.getComponent(Toggle).isChecked = true;
                Common.showTip(i18n.lang["10012"]);
                return;
              }
            }
          }
          if (this._selectBetIndex == index) return;
          this._selectBetIndex = index;
          if (GuessBigSmallModel.Instance.configInfo == undefined) return;
          if (GuessBigSmallModel.Instance.configInfo[index]) {
            this.lbl_jackpot.string = "" + Common.numFormat(GuessBigSmallModel.Instance.configInfo[index].poolVal);
            this.lbl_ModdleMoney.string = "" + Common.numFormat(GuessBigSmallModel.Instance.configInfo[index].chip);
          }
        };
        _proto.onClickJackpot = function onClickJackpot() {
          this.node_jackpot.active = false;
          this.showJackpotReward = false;
        }
        //    //打开自己的记录
        ;

        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("guessBigSmall");
        }
        //    //打开大奖界面
        ;

        _proto.onClickPrize = function onClickPrize() {
          this.loadPopView("GuessBigSmallPrize");
        }
        //    //打开帮助界面
        ;

        _proto.onClickHelp = function onClickHelp() {
          this.loadPopView("GuessBigSmallHelp");
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
        _proto.refreshPoolInfo = function refreshPoolInfo() {
          if (GuessBigSmallModel.Instance.configInfo[this._selectBetIndex]) {
            if (!this._isGameStart) {
              this.lbl_ModdleMoney.string = "" + Common.numFormat(GuessBigSmallModel.Instance.configInfo[this._selectBetIndex].chip);
            }
            this.lbl_jackpot.string = "" + Common.numFormat(GuessBigSmallModel.Instance.configInfo[this._selectBetIndex].poolVal);
            this.refreshBetInfo(GuessBigSmallModel.Instance.configInfo[this._selectBetIndex].chip);
          }
        };
        _proto.refreshBetInfo = function refreshBetInfo(selectChip) {
          var container = find("toggleContainer", this.sub_main);
          for (var i = 0; i < container.children.length; ++i) {
            var toggle = container.children[i];
            if (GuessBigSmallModel.Instance.configInfo[i]) {
              if (GuessBigSmallModel.Instance.openInfo) {
                toggle.getComponent(Toggle).isChecked = GuessBigSmallModel.Instance.configInfo[i].chip == selectChip ? true : false;
                if (GuessBigSmallModel.Instance.configInfo[i].chip == selectChip) this._selectBetIndex = i;
              }
              var lbl_title = toggle.getChildByName("Background").getChildByName("lbl_title").getComponent(Label);
              lbl_title.string = GuessBigSmallModel.Instance.configInfo[i].chip / 1000 + "K";
              lbl_title = toggle.getChildByName("checkmark").getChildByName("lbl_title").getComponent(Label);
              lbl_title.string = GuessBigSmallModel.Instance.configInfo[i].chip / 1000 + "K";
            }
          }
        };
        _proto.removeEvent = function removeEvent() {
          GuessBigSmallCtrl.Instance.unRegist();
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
          EventManager.instance.off(eEvent.errorResult, this.errorResult, this);
        };
        _proto.onDisable = function onDisable() {
          this.removeEvent();
        }
        //    //关闭
        ;

        _proto.closePop = function closePop() {
          //        // AudioManager.instance.playbuttonEffect();
          NetManager.instance.sendOnlineData(eProto.C2S_SEND_EXIT, {});
          //        // AudioManager.instance.stopAll();
          ViewManager.instance.closePopGame(GameDef.Game.GuessBigSmall);
        };
        return GuessBigSmallMainView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sub_main", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn_start", [_dec4], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_jackpot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_ModdleMoney", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "trend_scrollView", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "trend_prefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_big", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_small", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_abg", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbl_countdown", [_dec13], {
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
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "spine_bg", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "spine_gold", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_jackpot", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "spine_jackpot", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "txt_jackpot", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "cardAni", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "lbl_upRate", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "lbl_downRate", [_dec22], {
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

System.register("chunks:///_virtual/GuessBigSmallModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ae7f8wCzqREAIhNYJzwPDP/", "GuessBigSmallModel", undefined);
      var GuessBigSmallModel = exports('GuessBigSmallModel', /*#__PURE__*/function () {
        function GuessBigSmallModel() {
          //    //大奖
          this._recordList_prize = [];
          //    //自己的下注记录
          this._recordList_self = [];
          //    //房间配置信息
          this._configInfo = null;
          //    //房间状态信息
          this._openInfo = void 0;
        }
        var _proto = GuessBigSmallModel.prototype;
        _proto.init = function init() {};
        _createClass(GuessBigSmallModel, [{
          key: "recordList_prize",
          get: function get() {
            return this._recordList_prize;
          },
          set: function set(info) {
            this._recordList_prize = info;
          }
        }, {
          key: "recordList_self",
          get: function get() {
            return this._recordList_self;
          },
          set: function set(info) {
            this._recordList_self = info;
          }
        }, {
          key: "configInfo",
          get: function get() {
            return this._configInfo;
          },
          set: function set(info) {
            this._configInfo = info;
            this._configInfo.sort(function (a, b) {
              return a.chip - b.chip;
            });
          }
        }, {
          key: "openInfo",
          get: function get() {
            return this._openInfo;
          },
          set: function set(info) {
            this._openInfo = info;
          }
        }], [{
          key: "Instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new GuessBigSmallModel();
            }
            return this._instance;
          }
        }]);
        return GuessBigSmallModel;
      }());
      GuessBigSmallModel._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GuessBigSmallPrize.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './NetManager.ts', './Common.ts', './GuessBigSmallDef.ts', './GuessBigSmallModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, isValid, UIOpacity, v3, tween, instantiate, find, color, Component, EventManager, NetManager, Common, eProto, eEvent, GuessBigSmallModel;
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
      GuessBigSmallModel = module.GuessBigSmallModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "6c9c8nywwNPNp++OSVBjROL", "GuessBigSmallPrize", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GuessBigSmallPrize = exports('default', (_dec = ccclass("GuessBigSmallPrize"), _dec2 = menu("game/GuessBigSmall/GuessBigSmallPrize"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GuessBigSmallPrize, _Component);
        function GuessBigSmallPrize() {
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
        var _proto = GuessBigSmallPrize.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.sendOnlineData(eProto.GET_PRIZE, {
            limit: 6,
            offset: 0
          });

          //        /** 初始化数据管理器 */
          GuessBigSmallModel.Instance.recordList_prize = [];
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
                if (!data.Data) {
                  this._lastPage = this._currPage;
                  this._currIndex = this._lastPage;
                  this.lbl_page.string = "Trang:" + this._currIndex;
                  this.btn_next.active = false;
                  return;
                }
                this._currPage++;
                if (data.Data.length < 6) {
                  this._lastPage = this._currPage;
                }
                if (data.Data.length > 0) {
                  this.updateContent(data.Data);
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
          this.content.removeAllChildren();
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
            var date = Common.getTimeFormat(tempData.createTime * 1000);
            lbl_time.string = date.time;
            lbl_date.string = date.date;
            var lbl_name = find("lbl_name", item).getComponent(Label); //名字
            lbl_name.string = tempData.nickname;
            var lbl_bet = find("lbl_bet", item).getComponent(Label); //底注
            lbl_bet.string = "" + Common.numFormat(tempData.selectChip);

            //            // let lbl_bonus = cc.find("lbl_bonus", item).getComponent(cc.Label); //底注
            //            // lbl_bonus.string = "" + Common.numFormat(tempData.Bonus);

            //            // let lbl_result = cc.find("lbl_result", item).getComponent(cc.Label); //状态
            //            // lbl_result.string = "Nổ hũ";

            var lbl_result = find("lbl_result", item).getComponent(Label); //盈利
            var str = "";
            if (tempData.reward > 0) {
              str = "+" + Common.numFormat(tempData.reward);
              lbl_result.color = color(255, 0, 0, 255);
            } else if (tempData.reward <= 0) {
              str = "" + Common.numFormat(tempData.reward);
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
          if (GuessBigSmallModel.Instance.recordList_prize.length == 0) return;
          this.btn_next.active = true;
          this._currIndex--;
          if (this._currIndex < 1) {
            this._currIndex = 1;
          }
          var list = GuessBigSmallModel.Instance.recordList_prize.slice((this._currIndex - 1) * 6, this._currIndex * 6);
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
          if (GuessBigSmallModel.Instance.recordList_prize.length == 0) return;
          this.btn_pre.active = true;
          this._currIndex++;
          var list = GuessBigSmallModel.Instance.recordList_prize.slice((this._currIndex - 1) * 6, this._currIndex * 6);
          if (list.length > 0) {
            this.updateContent(list);
          } else {
            NetManager.instance.sendOnlineData(eProto.GET_PRIZE, {
              limit: 6,
              offset: (this._currIndex - 1) * 6
            });
          }
          this.lbl_page.string = "Trang:" + this._currIndex;
          if (this._currIndex == this._lastPage) {
            this.btn_next.active = false;
          }
        };
        _proto.add0 = function add0(m) {
          return m < 10 ? "0" + m : m;
        };
        _proto.format = function format(shijianchuo) {
          var time = new Date(shijianchuo);
          var y = time.getFullYear();
          var m = time.getMonth() + 1;
          var d = time.getDate();
          var h = time.getHours();
          var mm = time.getMinutes();
          var s = time.getSeconds();
          return y + "-" + this.add0(m) + "-" + this.add0(d) + " " + this.add0(h) + ":" + this.add0(mm) + ":" + this.add0(s);
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
        return GuessBigSmallPrize;
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

(function(r) {
  r('virtual:///prerequisite-imports/GuessBigSmall', 'chunks:///_virtual/GuessBigSmall'); 
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