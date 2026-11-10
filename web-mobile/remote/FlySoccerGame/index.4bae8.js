System.register("chunks:///_virtual/FlySoccer_autoSet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FlySoccerModel.ts', './FlySoccer_routtle.ts', './FlySoccerDef.ts', './EventManager.ts', './FlySoccerUtils.ts', './ViewManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Toggle, Label, Component, FlySoccerModel, FlySoccer_routtle, eEvent, EventManager, FlySoccerUtils, ViewManager, Common;
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
      Toggle = module.Toggle;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      FlySoccerModel = module.FlySoccerModel;
    }, function (module) {
      FlySoccer_routtle = module.FlySoccer_routtle;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      FlySoccerUtils = module.FlySoccerUtils;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "2165eaWp5xBtIUznqDiJ/AD", "FlySoccer_autoSet", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FlySoccer_autoSet = exports('FlySoccer_autoSet', (_dec = ccclass("FlySoccer_autoSet"), _dec2 = menu("game/FlySoccerGame/FlySoccer_autoSet"), _dec3 = property(Node), _dec4 = property(Toggle), _dec5 = property(Toggle), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_autoSet, _Component);
        function FlySoccer_autoSet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_rottle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Toggle_lose", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Toggle_win", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rounds", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_lose", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor6, _assertThisInitialized(_this));
          /////////////////////////
          _this.index = 0;
          _this.arrRounds = [10, 20, 50, 100, 500];
          _this.roundsIndex = -1;
          _this.win = 0;
          _this.lose = 0;
          return _this;
        }
        var _proto = FlySoccer_autoSet.prototype;
        /////////////////////////
        _proto.start = function start() {}

        // update(deltaTime: number) {}
        ;

        _proto.onBtnClick = function onBtnClick(event, data) {
          switch (event.target.name) {
            case "clear":
              {
                FlySoccerModel.instance.autoInfo[this.index].round = 10;
                FlySoccerModel.instance.autoInfo[this.index].lose = FlySoccerModel.instance.baseBet[this.index];
                FlySoccerModel.instance.autoInfo[this.index].win = FlySoccerModel.instance.baseBet[this.index];
                this.init();
                break;
              }
            case "start":
              {
                FlySoccerModel.instance.isAutoPlay[this.index] = true;

                //rate
                FlySoccerModel.instance.autoInfo[this.index].rate = this.Node_rottle.getComponent(FlySoccer_routtle).curNum;
                FlySoccerModel.instance.autoInfo[this.index].round = parseInt(this.Label_rounds.string);
                FlySoccerModel.instance.autoInfo[this.index].lose = this.lose;
                FlySoccerModel.instance.autoInfo[this.index].win = this.win;
                FlySoccerModel.instance.autoInfo[this.index].isLose = this.Toggle_lose.isChecked;
                FlySoccerModel.instance.autoInfo[this.index].isWin = this.Toggle_win.isChecked;
                EventManager.instance.emit(eEvent.startAuto + "_" + this.index);
                ViewManager.instance.closePopView();
                break;
              }
            case "redus":
              {
                var labelNum = null;
                var curNum = 0;
                switch (data) {
                  case "rounds":
                    {
                      labelNum = this.Label_rounds;
                      curNum = parseInt(labelNum.string);
                      curNum = curNum - (this.roundsIndex != -1 ? this.arrRounds[this.roundsIndex] : 1);
                      if (curNum < 1) {
                        curNum = 1;
                      }
                      FlySoccerUtils.instance.updateLabel(labelNum, "" + curNum);
                      return;
                    }
                  case "lose":
                    {
                      labelNum = this.Label_lose;
                      curNum = this.lose;
                      curNum = curNum - FlySoccerModel.instance.baseBet[this.index];
                      if (curNum < FlySoccerModel.instance.baseBet[this.index]) {
                        curNum = FlySoccerModel.instance.baseBet[this.index];
                      }
                      this.lose = curNum;
                      break;
                    }
                  case "win":
                    {
                      labelNum = this.Label_win;
                      curNum = this.win;
                      curNum = curNum - FlySoccerModel.instance.baseBet[this.index];
                      if (curNum < FlySoccerModel.instance.baseBet[this.index]) {
                        curNum = FlySoccerModel.instance.baseBet[this.index];
                      }
                      this.win = curNum;
                      break;
                    }
                }
                FlySoccerUtils.instance.updateLabel(labelNum, "" + Common.numFormat(curNum));
                break;
              }
            case "add":
              {
                var _labelNum = null;
                var _curNum = 0;
                switch (data) {
                  case "rounds":
                    {
                      _labelNum = this.Label_rounds;
                      _curNum = parseInt(_labelNum.string);
                      _curNum = _curNum + (this.roundsIndex != -1 ? this.arrRounds[this.roundsIndex] : 1);
                      FlySoccerUtils.instance.updateLabel(_labelNum, "" + _curNum);
                      return;
                    }
                  case "lose":
                    {
                      _labelNum = this.Label_lose;
                      _curNum = this.lose;
                      _curNum = _curNum + FlySoccerModel.instance.baseBet[this.index];
                      this.lose = _curNum;
                      break;
                    }
                  case "win":
                    {
                      _labelNum = this.Label_win;
                      _curNum = this.win;
                      _curNum = _curNum + FlySoccerModel.instance.baseBet[this.index];
                      this.win = _curNum;
                      break;
                    }
                }
                FlySoccerUtils.instance.updateLabel(_labelNum, "" + Common.numFormat(_curNum));
                break;
              }

            //
            case "item_0":
            case "item_1":
            case "item_2":
            case "item_3":
            case "item_4":
              {
                this.roundsIndex = parseInt(event.target.name.replace("item_", ""));
                FlySoccerUtils.instance.updateLabel(this.Label_rounds, "" + this.arrRounds[this.roundsIndex]);
                break;
              }
          }
        };
        _proto.init = function init(index) {
          if (index === void 0) {
            index = null;
          }
          this.index = index || this.index;
          FlySoccerModel.instance.totalWin[this.index] = 0;
          this.Node_rottle.getComponent(FlySoccer_routtle).curNum = FlySoccerModel.instance.autoInfo[this.index].rate;
          this.Label_rounds.string = "" + FlySoccerModel.instance.autoInfo[this.index].round;
          this.Toggle_lose.isChecked = FlySoccerModel.instance.autoInfo[this.index].isLose;
          this.Toggle_win.isChecked = FlySoccerModel.instance.autoInfo[this.index].isWin;
          this.win = FlySoccerModel.instance.autoInfo[this.index].win;
          this.lose = FlySoccerModel.instance.autoInfo[this.index].lose;
          this.Label_lose.string = "" + Common.numFormat(this.lose);
          this.Label_win.string = "" + Common.numFormat(this.win);
        };
        return FlySoccer_autoSet;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_rottle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Toggle_lose", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Toggle_win", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_rounds", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_lose", [_dec7], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlySoccer_betRecordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './FlySoccerUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, color, Component, AutoChangeParent, FlySoccerUtils, Common;
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
      color = module.color;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      FlySoccerUtils = module.FlySoccerUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "d3baapeRk5BdpOZkZjZHlvk", "FlySoccer_betRecordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FlySoccer_betRecordItem = exports('default', (_dec = ccclass("FlySoccer_betRecordItem"), _dec2 = menu("game/FlySoccerGame/FlySoccer_betRecordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_betRecordItem, _Component);
        function FlySoccer_betRecordItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rateBg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_date", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameRateBg", _descriptor8, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = FlySoccer_betRecordItem.prototype;
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
          var tempData = this.item.data;
          if (!tempData || tempData === undefined) {
            this.node.active = false;
            this.Node_label.active = false;
            return;
          }
          this.Label_date.string = tempData.Date;
          this.Label_bet.string = "" + Common.ChangeMoneyFormat(tempData.Bet, 2);
          this.Label_rate.string = tempData.Odd > 0 ? tempData.Odd + "x" : "-";
          var level = FlySoccerUtils.instance.getRateLevel(tempData.Odd);
          this.rateBg.node.active = tempData.Odd > 0;
          this.rateBg.spriteFrame = this.sprFrameRateBg[level];
          var str = "";
          var Prize = tempData.Odd * tempData.Bet;
          if (Prize > 0) {
            str = "+" + Common.ChangeMoneyFormat(Prize, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else {
            str = "-" + Common.ChangeMoneyFormat(tempData.Bet, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
        }

        //color(152,246,164,255)
        //150,150,255,255
        //255,100,100,255
        ;

        _proto.setColor = function setColor(color) {
          // this.Label_date.color = color;
          this.Label_bet.color = color;
          this.Label_rate.color = color;
          this.Label_win.color = color;
        };
        _createClass(FlySoccer_betRecordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return FlySoccer_betRecordItem;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rateBg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_date", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec7], {
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameRateBg", [_dec10], {
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

System.register("chunks:///_virtual/FlySoccer_betView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './DataManager.ts', './FlySoccerCtrl.ts', './FlySoccerModel.ts', './FlySoccerDef.ts', './GameDef.ts', './FlySoccerUtils.ts', './ViewManager.ts', './EventManager.ts', './Common.ts', './FlySoccer_routtle.ts', './FlySoccer_autoSet.ts'], function (exports) {
  var _inheritsLoose, _createClass, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Toggle, Label, instantiate, color, Layout, UIOpacity, tween, sys, v3, i18n, DataManager, UserKey, FlySoccerCtrl, FlySoccerModel, eBetStatus, eEvent, eGameStatus, eSound, eProto, GameDef, FlySoccerUtils, ViewManager, EventManager, Common, FlySoccer_routtle, FlySoccer_autoSet;
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
      Button = module.Button;
      Toggle = module.Toggle;
      Label = module.Label;
      instantiate = module.instantiate;
      color = module.color;
      Layout = module.Layout;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      sys = module.sys;
      v3 = module.v3;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      FlySoccerCtrl = module.FlySoccerCtrl;
    }, function (module) {
      FlySoccerModel = module.FlySoccerModel;
    }, function (module) {
      eBetStatus = module.eBetStatus;
      eEvent = module.eEvent;
      eGameStatus = module.eGameStatus;
      eSound = module.eSound;
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      FlySoccerUtils = module.FlySoccerUtils;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FlySoccer_routtle = module.FlySoccer_routtle;
    }, function (module) {
      FlySoccer_autoSet = module.FlySoccer_autoSet;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
      cclegacy._RF.push({}, "71e2ez94NxLabv8Q4IHwKHO", "FlySoccer_betView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      // // const maxBet = 50000000;
      // // const cBaseScore = [
      // //     [1000,2000,5000,1]
      // // ]
      var FlySoccer_betView = exports('default', (_dec = ccclass("FlySoccer_betView"), _dec2 = menu("game/FlySoccerGame/FlySoccer_betView"), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(FlySoccer_routtle), _dec7 = property(Button), _dec8 = property(Node), _dec9 = property(Toggle), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Label), _dec13 = property(Toggle), _dec14 = property(Button), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(FlySoccer_betView, _GameDef$BaseView);
        function FlySoccer_betView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          //操作界面
          _initializerDefineProperty(_this, "Node_nomal", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_autoCashSet", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_autoCashSet", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "comRouttle", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_baseBet", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_baseBet", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Toggle_AutoCash", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_autoPlay", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_autoPlayCancel", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rounds", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Toggle_bet", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_cashOut", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWin", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalBet", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoCash", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "index", _descriptor17, _assertThisInitialized(_this));
          // //    // onLoad () {}
          // //    ///////////
          _this._curDisScore = 0;
          _this._curBet = 0;
          _this._reBet = 0;
          // _curGameNo: string = "";
          _this.autoPlayRound = 0;
          _this._betStatus = eBetStatus.NONE;
          return _this;
        }
        var _proto = FlySoccer_betView.prototype;
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
          if (this._curBet > FlySoccerModel.instance.MaxBet) {
            this._curBet = FlySoccerModel.instance.MaxBet;
          }
          if (this._curBet == 0) {
            //            //禁用下注和自动下注
            if (this._betStatus == eBetStatus.NONE || this._betStatus == eBetStatus.STOP) {
              this._betStatus = eBetStatus.NONE;
              Common.setButtonEnableWithGray(this.Button_autoCashSet, false);
              Common.setButtonEnableWithGray(this.Toggle_AutoCash, false);
              Common.setButtonEnableWithGray(this.Button_baseBet, false);
              Common.setButtonEnableWithGray(this.Toggle_bet, false);
              Common.setButtonEnableWithGray(this.Button_cashOut, false);
              this.Node_baseBet.active = false;
            }
            FlySoccerModel.instance.isAutoPlay[this.index] = false;
            FlySoccerModel.instance.isAutoCash[this.index] = false;
            Common.showTip(i18n.errTip(30003));
          }
          this.Label_totalBet.string = Common.ChangeMoneyShow(this._curBet, 2);
          return this._curBet != 0;
        };
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, FlySoccerCtrl.instance);
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);
          EventManager.instance.on(eEvent.startAuto + "_" + this.index, this.startAuto, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          // EventManager.instance.off(FlySoccerDef.eEvent.autoSetUpdateRate, this);
          EventManager.instance.off(eEvent.startAuto + "_" + this.index, this.startAuto, this);
        };
        _proto.start = function start() {}
        /////////////
        ;

        _proto.startAuto = function startAuto(rounds) {
          if (rounds === void 0) {
            rounds = 0;
          }
          this.autoPlayRound = rounds > 0 ? rounds : FlySoccerModel.instance.autoInfo[this.index].round;
          FlySoccerUtils.instance.updateLabel(this.Label_autoCash, FlySoccerUtils.instance.numberFormat(FlySoccerModel.instance.autoInfo[this.index].rate, 2.0) + "x");
          this.Button_autoPlay.node.active = false;
          this.Button_autoPlayCancel.node.active = true;
          this.Label_rounds.string = "" + this.autoPlayRound;
          this.Toggle_bet.interactable = false;
          Common.setButtonEnableWithGray(this.Button_autoCashSet, false);
          Common.setButtonEnableWithGray(this.Toggle_AutoCash, false);
          Common.setButtonEnableWithGray(this.Button_baseBet, false);
          this.Node_baseBet.active = false;
          if (this._betStatus == eBetStatus.NONE && this.checkGold()) {
            Common.setButtonEnableWithGray(this.Button_cashOut, false);
            this.Toggle_bet.isChecked = true;
            this.doPreBet(true);
          }
        };
        _proto.updateTotalWin = function updateTotalWin() {
          if (this._betStatus == eBetStatus.BETED) {
            var _rate = FlySoccerModel.instance.curRate;

            //更新 当前的win
            this.Label_totalWin.string = Common.ChangeMoneyShow(FlySoccerUtils.instance.FxF(this._curBet, _rate), 2);
          } else if (this.Label_totalWin.node.active) {
            this.Label_totalWin.node.active = false;
          }
        };
        _proto.initBaseBet = function initBaseBet() {
          this.Node_baseBet.active = true;
          var Layout_list = this.Node_baseBet.getChildByName("Layout_list");
          var itemTemp = Layout_list.children[0];
          for (var i = 0; i < 15; i++) {
            var item = Layout_list.getChildByName("item_" + i);
            if (!item) {
              item = instantiate(itemTemp);
              item.name = "item_" + i;
              Layout_list.addChild(item);
            }
            item.getComponent(Label).string = Common.ChangeMoneyShow(FlySoccerModel.instance.chipList[i], 2);
            item.getComponent(Label).color = FlySoccerModel.instance.baseBetIndex[this.index] == i ? color(255, 255, 255, 255) : color(100, 100, 100, 255);
          }
          var baseBet = FlySoccerModel.instance.chipList[FlySoccerModel.instance.baseBetIndex[this.index]];
          FlySoccerModel.instance.baseBet[this.index] = baseBet;
          this.curBet = baseBet;
          this._curDisScore = FlySoccerModel.instance.chipList[0];
          this.Label_totalBet.string = Common.ChangeMoneyShow(baseBet, 2);
          Layout_list.getComponent(Layout).updateLayout();
          this.Node_baseBet.active = false;
        };
        _proto.initView = function initView() {
          this.initBaseBet();
          this.Toggle_AutoCash.isChecked = FlySoccerModel.instance.isAutoCash[this.index];
          this.Label_autoCash.string = FlySoccerUtils.instance.numberFormat(FlySoccerModel.instance.autoInfo[this.index].rate, 2.0) + "x";
          if (FlySoccerModel.instance.gameNo && FlySoccerModel.instance.gameNo != FlySoccerModel.instance.gameState.GameNo) {
            this.doShowResult();
            if (this._betStatus != eBetStatus.REBET) {
              this._betStatus = eBetStatus.NONE;
              this.Toggle_bet.node.active = true;
              this.Toggle_bet.isChecked = false;
              this.Label_totalWin.node.active = false;
              this.Button_cashOut.node.active = false;
              Common.setButtonEnableWithGray(this.Button_baseBet, true);
            }
            return;
          }
          switch (FlySoccerModel.instance.gameState.State) {
            case eGameStatus.Ready:
              {
                if (this._betStatus != eBetStatus.REBET) {
                  this._betStatus = eBetStatus.NONE;
                  this.Toggle_bet.node.active = true;
                  this.Toggle_bet.isChecked = false;
                  this.Label_totalWin.node.active = false;
                  this.Button_cashOut.node.active = false;
                  Common.setButtonEnableWithGray(this.Button_baseBet, true);
                }
                break;
              }
            case eGameStatus.Start:
              {
                var myInfo = FlySoccerModel.instance.getMyInfo(this.index);
                if (myInfo && myInfo.BetAmount > 0) {
                  if (!myInfo.Stop) {
                    this._betStatus = eBetStatus.BETED;
                    this.Toggle_bet.node.active = false;
                    this.Button_cashOut.node.active = true;
                    Common.setButtonEnableWithGray(this.Button_baseBet, false);
                    this.Node_baseBet.active = false;

                    //更新 当前的win
                    this.Label_totalWin.node.active = true;
                    this.Label_totalWin.string = Common.numFormat(FlySoccerUtils.instance.FxF(myInfo.BetAmount, FlySoccerModel.instance.curRate));
                  } else if (this._betStatus != eBetStatus.REBET) {
                    this._betStatus = eBetStatus.NONE;
                    this.Toggle_bet.node.active = true;
                    this.Toggle_bet.isChecked = false;
                    this.Label_totalWin.node.active = false;
                    this.Button_cashOut.node.active = false;
                    Common.setButtonEnableWithGray(this.Button_baseBet, true);
                  }
                }
                break;
              }
            case eGameStatus.Checkout:
              {
                if (this._betStatus != eBetStatus.REBET) {
                  this._betStatus = eBetStatus.NONE;
                  this.Toggle_bet.node.active = true;
                  this.Toggle_bet.isChecked = false;
                  this.Label_totalWin.node.active = false;
                  this.Button_cashOut.node.active = false;
                  Common.setButtonEnableWithGray(this.Button_baseBet, true);
                }
                break;
              }
          }
          this.checkGold();
        };
        _proto.doShowResult = function doShowResult(stopInfo) {
          if (stopInfo === void 0) {
            stopInfo = null;
          }
          this.Node_result.active = stopInfo != null;
          if (stopInfo == null) {
            return;
          }
          FlySoccerUtils.instance.playSound(eSound.winEffect);
          this.Node_result.getComponent(UIOpacity).opacity = 0;
          tween(this.Node_result.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).start();
          var Label_disTance = this.Node_result.getChildByName("rate").getComponent(Label);
          Label_disTance.string = FlySoccerUtils.instance.numberFormat(stopInfo.StopVal, 2) + "x";
          var Label_win = this.Node_result.getChildByName("cashOutBg").getChildByName("win").getComponent(Label);
          Label_win.string = Common.ChangeMoneyShow(FlySoccerUtils.instance.FxF(stopInfo.BetAmount, stopInfo.StopVal), 2);
        };
        _proto.doReqBet = function doReqBet() {
          if (this._betStatus == eBetStatus.BETING && this._reBet > 0) {
            FlySoccerCtrl.instance.reqBet(this._reBet, this.index, FlySoccerModel.instance.isAutoPlay[this.index] || FlySoccerModel.instance.isAutoCash[this.index] ? FlySoccerModel.instance.autoInfo[this.index].rate : 0);
            gts.Debug.Log("====FlySoccerCtrl.instance.reqBet====");
          }
        };
        _proto.doBet = function doBet() {
          if (this._betStatus == eBetStatus.REBET) {
            this._betStatus = eBetStatus.BETING;
            this.doReqBet();
          } else if (FlySoccerModel.instance.isAutoPlay[this.index]) {
            Common.setButtonEnableWithGray(this.Button_autoCashSet, false);
            Common.setButtonEnableWithGray(this.Toggle_AutoCash, false);
            Common.setButtonEnableWithGray(this.Button_baseBet, false);
            this.Node_baseBet.active = false;
            //   Common.setButtonEnableWithGray(this.Button_cashOut, false);
            this.Button_autoPlay.node.active = false;
            this.Button_autoPlayCancel.node.active = true;
            if (this.checkGold()) {
              this.Toggle_bet.isChecked = true;
            }
          }
        };
        _proto.doPreBet = function doPreBet(isPreBet) {
          if (isPreBet === void 0) {
            isPreBet = true;
          }
          if (!FlySoccerModel.instance.gameState) {
            return;
          }
          if (isPreBet) {
            this._reBet = this.curBet;
            if (this._reBet == 0) {
              return;
            }
            Common.setButtonEnableWithGray(this.Button_baseBet, false);
            this.Node_baseBet.active = false;
            this._betStatus = eBetStatus.REBET;
          } else {
            this._reBet = 0;
            this._betStatus = eBetStatus.NONE;
            Common.setButtonEnableWithGray(this.Button_baseBet, true);
            this.checkGold();
          }
        }
        // //    //////////{}
        ;

        _proto.onBtnClick = function onBtnClick(event, data) {
          var _this2 = this;
          switch (event.target.name) {
            case "Node_baseBet_bg":
              {
                this.Node_baseBet.active = false;
                break;
              }
            case "Button_autoPlay":
              {
                this.Node_baseBet.active = false;
                Common.loadPopBuddle("prefab/Node_autoSet", FlySoccerUtils.instance.bundle, function () {}, function (prefab) {
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                  _this2.scheduleOnce(function () {
                    newNode.getComponent(FlySoccer_autoSet).init(_this2.index);
                  });
                }, true);
                break;
              }
            case "Button_autoPlayCancel":
              {
                this.cancelAutoPlay();
                break;
              }
            case "Toggle_AutoCash":
              {
                FlySoccerModel.instance.isAutoCash[this.index] = !FlySoccerModel.instance.isAutoCash[this.index];
                if (!FlySoccerModel.instance.isAutoCash[this.index]) {
                  FlySoccerCtrl.instance.reqCancelAutoStop(this.index);
                }
                break;
              }
            case "Toggle_bet":
              {
                var node = event.target;
                if (FlySoccerModel.instance.gameState.State == eGameStatus.ReadyEnd || this._betStatus == eBetStatus.BETING) {
                  this.Toggle_bet.isChecked = !this.Toggle_bet.isChecked;
                  return;
                }
                switch (this._betStatus) {
                  case eBetStatus.NONE:
                    {
                      //预下注
                      if (this.curBet > 0) {
                        this.doPreBet(true);
                      }
                      break;
                    }
                  case eBetStatus.REBET:
                    {
                      //取消预下注
                      this.doPreBet(false);
                      break;
                    }
                  case eBetStatus.BETED:
                    {
                      //下车
                      FlySoccerCtrl.instance.reqStop();
                      break;
                    }
                  default:
                    {
                      this.doPreBet(false);
                      break;
                    }
                }
                gts.Debug.Log("====onBtnClick====" + node.name);
                break;
              }
            case "Button_baseBet":
              {
                this.Node_baseBet.active = !this.Node_baseBet.active;
                break;
              }
            ///////////////////////////////////
            case "Button_cashOut":
              {
                if (FlySoccerModel.instance.gameState.State != eGameStatus.Start) {
                  return;
                }
                switch (this._betStatus) {
                  case eBetStatus.BETED:
                    {
                      //下车
                      FlySoccerCtrl.instance.reqStop(this.index);
                      break;
                    }
                }
                break;
              }
            case "Button_autoCashSet":
              {
                this.Node_autoCashSet.active = true;
                this.Node_nomal.active = false;
                this.scheduleOnce(function () {
                  _this2.comRouttle.curNum = FlySoccerModel.instance.autoInfo[_this2.index].rate;
                });
                break;
              }
            case "Button_autoCashSetOk":
              {
                this.Node_autoCashSet.active = false;
                this.Node_nomal.active = true;
                FlySoccerModel.instance.autoInfo[this.index].rate = this.comRouttle.curNum;
                FlySoccerUtils.instance.updateLabel(this.Label_autoCash, FlySoccerUtils.instance.numberFormat(FlySoccerModel.instance.autoInfo[this.index].rate, 2.0) + "x");
                break;
              }
            case "Button_autoCashSetCancel":
              {
                this.Node_autoCashSet.active = false;
                this.Node_nomal.active = true;
                break;
              }
          }
        };
        _proto.onBtnClick_baseBet = function onBtnClick_baseBet(event, data) {
          var item_index = parseInt(event.target.name.replace("item_", ""));
          var Layout_list = this.Node_baseBet.getChildByName("Layout_list");
          var item = Layout_list.getChildByName("item_" + FlySoccerModel.instance.baseBetIndex[this.index]);
          item.getComponent(Label).color = color(100, 100, 100, 255);
          var baseBet = FlySoccerModel.instance.chipList[item_index];
          FlySoccerModel.instance.baseBetIndex[this.index] = item_index;
          FlySoccerModel.instance.baseBet[this.index] = baseBet;
          item = Layout_list.getChildByName("item_" + FlySoccerModel.instance.baseBetIndex[this.index]);
          item.getComponent(Label).color = color(255, 255, 255, 255);
          this.Label_totalBet.string = Common.ChangeMoneyShow(baseBet, 2);
          this.Node_baseBet.active = false;
        };
        _proto.resetView = function resetView() {
          this.Toggle_bet.isChecked = false;
          this.Toggle_bet.interactable = true;
          Common.setButtonEnableWithGray(this.Button_baseBet, true);
          Common.setButtonEnableWithGray(this.Button_cashOut, false);
        };
        _proto.cancelAutoPlay = function cancelAutoPlay() {
          FlySoccerModel.instance.isAutoPlay[this.index] = false;
          this.Button_autoPlay.node.active = true;
          this.Button_autoPlayCancel.node.active = false;
          this.Toggle_bet.isChecked = false;
          this.Toggle_bet.interactable = true;
          Common.setButtonEnableWithGray(this.Button_autoCashSet, true);
          Common.setButtonEnableWithGray(this.Toggle_AutoCash, true);
          Common.setButtonEnableWithGray(this.Button_cashOut, true);
          if (this._betStatus == eBetStatus.REBET) {
            this.doPreBet(false);
          } else if (this._betStatus != eBetStatus.BETED) {
            Common.setButtonEnableWithGray(this.Button_baseBet, true);
          }
        }
        //////////////
        ;

        _proto.updateView = function updateView(event, data) {
          var _this3 = this;
          // return;
          switch (event) {
            // case FlySoccerDef.eProto.HD_Enter: {
            //   this.initView();

            //   break;
            // }
            case eProto.HD_AutoStop:
              {
                FlySoccerModel.instance.isAutoCash[this.index] = true;
                break;
              }
            case eProto.HD_CancelAutoStop:
              {
                FlySoccerModel.instance.isAutoCash[this.index] = false;
                break;
              }
            case eProto.HD_UpdateOddNum:
              {
                this.updateTotalWin();
                break;
              }
            case eProto.HD_Bet:
              {
                if (this._betStatus == eBetStatus.BETING) {
                  FlySoccerUtils.instance.playSound(eSound.bet);
                  this._betStatus = eBetStatus.BETED;
                  this._reBet = 0;
                  this.Toggle_bet.node.active = false;
                  this.Button_cashOut.node.active = true;
                  this.Label_totalWin.node.active = true;
                  this.Label_totalWin.string = Common.ChangeMoneyShow(FlySoccerUtils.instance.FxF(this._curBet, 1.0), 2);
                  Common.setButtonEnableWithGray(this.Button_cashOut, false);
                  if (FlySoccerModel.instance.isAutoPlay[this.index]) {
                    this.autoPlayRound--;
                    this.Label_rounds.string = "" + this.autoPlayRound;
                    if (this.autoPlayRound == 0) {
                      this.cancelAutoPlay();
                    }
                  }
                }
                break;
              }
            case eProto.HD_Stop:
              {
                var stopInfo = data;

                //切换下注按钮的状态  下车
                if (FlySoccerModel.instance.isMySelf(data.Uid) && stopInfo.Pos == this.index) {
                  FlySoccerUtils.instance.playSound(eSound.jieguo);
                  this._betStatus = eBetStatus.STOP;
                  this.Button_cashOut.node.active = false;
                  this.Toggle_bet.node.active = true;
                  this.Toggle_bet.isChecked = false;
                  FlySoccerModel.instance.totalWin[this.index] += stopInfo.BetAmount * (stopInfo.StopVal - 1);
                  if (FlySoccerModel.instance.isAutoPlay[this.index] && FlySoccerModel.instance.autoInfo[this.index].isWin && FlySoccerModel.instance.totalWin[this.index] >= FlySoccerModel.instance.autoInfo[this.index].win) {
                    this.cancelAutoPlay();
                  }

                  // FlySoccerModel.instance.myBetRecord.unshift({
                  //   Date: FlySoccerUtils.instance.getDate(),
                  //   Bet: stopInfo.BetAmount,
                  //   Odd: stopInfo.StopVal,
                  // });

                  this.doShowResult(stopInfo);
                  this.scheduleOnce(function () {
                    if (_this3.checkGold()) {
                      _this3.Label_totalWin.node.active = false;
                      _this3.Toggle_bet.isChecked = FlySoccerModel.instance.isAutoPlay[_this3.index];
                      _this3.doPreBet(FlySoccerModel.instance.isAutoPlay[_this3.index]);
                    }
                  }, 0.25);
                }
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                switch (FlySoccerModel.instance.gameState.State) {
                  case eGameStatus.Ready:
                    {
                      this.doShowResult();
                      break;
                    }
                  case eGameStatus.Start:
                    {
                      gts.Debug.Log("====updateView==HD_SwitchRoomState=eGameStatus.Start=");
                      var Label_disTance = this.Node_result.getChildByName("rate").getComponent(Label);
                      Label_disTance.string = "";
                      var Label_win = this.Node_result.getChildByName("cashOutBg").getChildByName("win").getComponent(Label);
                      Label_win.string = "";
                      if (this._betStatus == eBetStatus.BETED) {
                        this.Label_totalWin.node.active = true;
                        this.Label_totalWin.string = Common.ChangeMoneyShow(FlySoccerUtils.instance.FxF(this._curBet, 1.0), 2);
                        Common.setButtonEnableWithGray(this.Button_cashOut, true);
                      }
                      break;
                    }
                  case eGameStatus.Checkout:
                    {
                      if (this._betStatus == eBetStatus.BETED) {
                        this.Button_cashOut.node.active = false;
                        this.Toggle_bet.node.active = true;
                        this.Toggle_bet.isChecked = FlySoccerModel.instance.isAutoPlay[this.index];
                        FlySoccerModel.instance.totalWin[this.index] -= FlySoccerModel.instance.baseBet[this.index];
                        if (FlySoccerModel.instance.isAutoPlay[this.index] && FlySoccerModel.instance.autoInfo[this.index].isLose && FlySoccerModel.instance.totalWin[this.index] < 0 && Math.abs(FlySoccerModel.instance.totalWin[this.index]) >= FlySoccerModel.instance.autoInfo[this.index].lose) {
                          this.cancelAutoPlay();
                        }
                        FlySoccerModel.instance.myBetRecord.unshift({
                          Date: FlySoccerUtils.instance.getDate(),
                          Bet: FlySoccerModel.instance.baseBet[this.index],
                          Odd: 0
                        });
                        this.scheduleOnce(function () {
                          if (_this3.checkGold()) {
                            _this3.Label_totalWin.node.active = false;
                            _this3.doPreBet(FlySoccerModel.instance.isAutoPlay[_this3.index]);
                          }
                        }, 0.5);
                      }
                      break;
                    }
                }
                break;
              }
          }
        };
        _createClass(FlySoccer_betView, [{
          key: "curBet",
          get: function get() {
            this._curBet = FlySoccerModel.instance.baseBet[this.index];
            this.checkGold();
            return this._curBet;
          },
          set: function set(bet) {
            this._curBet = bet;
            this.checkGold();
            this.Label_totalBet.string = Common.ChangeMoneyShow(this._curBet, 2);
          }
        }]);
        return FlySoccer_betView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_nomal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_autoCashSet", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_autoCashSet", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "comRouttle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Button_baseBet", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_baseBet", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Toggle_AutoCash", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Button_autoPlay", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Button_autoPlayCancel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Label_rounds", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Toggle_bet", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Button_cashOut", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWin", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalBet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoCash", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_result", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "index", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlySoccer_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, sp, Node, Component, EventManager;
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
      Enum = module.Enum;
      sp = module.sp;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a99b2kn4OdHzpk59vT/s9KN", "FlySoccer_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var FlySoccer_btnEffect = exports('default', (_dec = ccclass("FlySoccerBtnEffect"), _dec2 = menu("game/FlySoccerGame/FlySoccer_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_btnEffect, _Component);
        function FlySoccer_btnEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_skeletonData", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animation", _descriptor2, _assertThisInitialized(_this));
          _this.Node_effect = null;
          _this.switchAnimation = null;
          return _this;
        }
        var _proto = FlySoccer_btnEffect.prototype;
        _proto.onLoad = function onLoad() {
          // if (CC_EDITOR && this._skeletonData) {
          //     setEnumAttr(this, "animation", this._getAnimEnum(this._skeletonData) || DefaultAnimsEnum);
          //     Editor.Utils.refreshSelectedInspector("node", this.node.uuid);
          // }
        };
        _proto._getAnimEnum = function _getAnimEnum(skeletonData) {
          var animEnum;
          var sd = skeletonData.getRuntimeData(true);
          if (sd) {
            var enumDef = {
              "<None>": 0
            };
            var anims = sd.animations;
            for (var i = 0; i < anims.length; i++) {
              var name = anims[i].name;

              //                //@ts-ignore
              enumDef[name] = i + 1;
            }
            animEnum = Enum(enumDef);
            return animEnum;
          }
          return null;
        };
        _proto._updateAnimEnum = function _updateAnimEnum() {
          var animEnum = this._getAnimEnum(this.skeletonData);
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          if (this.Node_effect) {
            this.Node_effect.destroyFromParent();
            this.Node_effect = null;
          }
          EventManager.instance.on("onMouseMoveIn" + this.node.name, function (event) {
            if (_this2.animation > 0 && _this2.skeletonData) {
              if (!_this2.Node_effect) {
                _this2.Node_effect = new Node();
                _this2.node.addChild(_this2.Node_effect);
                var Skeleton = _this2.Node_effect.addComponent(sp.Skeleton);
                Skeleton.loop = true;
                Skeleton.premultipliedAlpha = false;
              }
              _this2.scheduleOnce(function () {
                if (_this2.Node_effect) {
                  var _Skeleton = _this2.Node_effect.getComponent(sp.Skeleton);
                  _Skeleton.skeletonData = _this2.skeletonData;
                  if (_this2.switchAnimation) {
                    _Skeleton.setAnimation(0, _this2.switchAnimation, true);
                  } else {
                    var sd = _this2.skeletonData.getRuntimeData(true);
                    var ani = sd.animations[_this2.animation - 1];
                    _Skeleton.setAnimation(0, ani.name, true);
                  }
                }
              });
            }
          }, this);
          EventManager.instance.on("onMouseMoveOut" + this.node.name, function (event) {
            if (_this2.Node_effect && event.type == Node.EventType.MOUSE_LEAVE) {
              _this2.Node_effect.destroyFromParent();
              _this2.Node_effect = null;
            }
          }, this);
          this.node.on("pauseEffect", function () {
            if (_this2.Node_effect) {
              _this2.Node_effect.active = false;
            }
          }, this);
          this.node.on("resumeEffect", function () {
            if (_this2.Node_effect) {
              _this2.Node_effect.active = true;
              var Skeleton = _this2.Node_effect.getComponent(sp.Skeleton);
              if (_this2.switchAnimation) {
                Skeleton.setAnimation(0, _this2.switchAnimation, true);
              } else {
                var sd = _this2.skeletonData.getRuntimeData(true);
                var ani = sd.animations[_this2.animation - 1];
                Skeleton.setAnimation(0, ani.name, true);
              }
            }
          }, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off("onMouseMoveIn" + this.node.name);
          EventManager.instance.off("onMouseMoveOut" + this.node.name);
          this.node.off("pauseEffect");
          this.node.off("resumeEffect");
        };
        _proto.switchAni = function switchAni(animation) {
          if (animation === void 0) {
            animation = null;
          }
          if (this.switchAnimation && !animation) {
            if (this.Node_effect) {
              this.Node_effect.active = true;
              var Skeleton = this.Node_effect.getComponent(sp.Skeleton);
              var sd = this.skeletonData.getRuntimeData(true);
              var ani = sd.animations[this.animation - 1];
              Skeleton.setAnimation(0, ani.name, true);
            }
          }
          this.switchAnimation = animation;
        }
        //    // update (dt) {}
        ;

        _createClass(FlySoccer_btnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
            // if (EDITOR && this._skeletonData) {
            //     setEnumAttr(this, "animation", this._getAnimEnum(this._skeletonData) || DefaultAnimsEnum);
            //     EDITOR.Utils.refreshSelectedInspector("node", this.node.uuid);
            // }
          }
        }]);

        return FlySoccer_btnEffect;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_skeletonData", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "skeletonData", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "skeletonData"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return DefaultAnimsEnum["<None>"];
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlySoccer_Help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a7943xcclREzaNljgqUKeAW", "FlySoccer_Help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FlySoccer_Help = exports('FlySoccer_Help', (_dec = ccclass("FlySoccer_Help"), _dec2 = menu("game/FlySoccerGame/FlySoccer_Help"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_Help, _Component);
        function FlySoccer_Help() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "helpRate", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FlySoccer_Help.prototype;
        /////////////////////////////
        _proto.start = function start() {
          // for (let i = 0; i < this.helpRate.children.length; i++) {
          //     let Label_rate = this.helpRate.children[i];
          //     Label_rate.getComponent(Label).string = `X${FlySoccerModel.instance.Rate[i]}`;
          // }
        };
        return FlySoccer_Help;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "helpRate", [_dec3], {
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

System.register("chunks:///_virtual/FlySoccer_path.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, view, v3, Component, Common;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1c5c0F8ViVKsqaTEc9YXzZ/", "FlySoccer_path", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FlySoccer_path = exports('default', (_dec = ccclass("FlySoccer_path"), _dec2 = menu("game/FlySoccerGame/FlySoccer_path"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_path, _Component);
        function FlySoccer_path() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_list", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FlySoccer_path.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          var size = view.getVisibleSize();
          if (!Common.checkStandard()) {
            this.node.scale = v3(750 / 1080, 750 / 1080, 1);
          }

          // this.updatePath();
        }

        // updatePath() {
        //     let history = FlySoccerModel.instance.history.slice();

        //     history = history.slice(0, 60).reverse();
        //     let hList: { openNum: number; loseCounts: number[]; nextOpenIndex?: number }[] = [];
        //     let loseCounts = [];
        //     for (let i = 0; i < 8; i++) {
        //         loseCounts[i] = 0;
        //     }
        //     for (let i = 0; i < history.length; i++) {
        //         let openNum = history[i];
        //         let nextOpenIndex = i < history.length - 1 ? FlySoccerDef.areaMap[`${history[i + 1]}`] : null;
        //         let index = FlySoccerDef.areaMap[`${openNum}`];
        //         for (let i = 0; i < 8; i++) {
        //             loseCounts[i] = index == i ? 0 : loseCounts[i] + 1;
        //         }

        //         hList.push({ openNum: openNum, loseCounts: loseCounts.slice(), nextOpenIndex: nextOpenIndex });
        //     }

        //     this.scrollView_list.scrollView.content.destroyAllChildren();
        //     this.scrollView_list.setData(hList, () => {
        //         this.scrollView_list.scrollView.scrollToRight(1.0);
        //     });
        //     this.scrollView_list.refresh();
        // }
        // protected onEnable(): void {
        //     EventManager.getInstance().on(FlySoccerDef.eEvent.onUpdateRecord, this.updatePath, this);
        // }
        // onDisable() {
        //     EventManager.getInstance().off(FlySoccerDef.eEvent.onUpdateRecord, this.updatePath, this);
        // }
        ;

        return FlySoccer_path;
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

System.register("chunks:///_virtual/FlySoccer_pathItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, UIOpacity, v3, UITransform, v2, Component, AutoChangeParent, GUtil;
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
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      UITransform = module.UITransform;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "d2a44QuWZ1DmYiwlf3cNqUE", "FlySoccer_pathItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FlySoccer_pathItem = exports('default', (_dec = ccclass("FlySoccerPathItem"), _dec2 = menu("game/FlySoccerGame/FlySoccer_pathItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_pathItem, _Component);
        function FlySoccer_pathItem() {
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
          _initializerDefineProperty(_this, "Label_icon", _descriptor6, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = FlySoccer_pathItem.prototype;
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
          // this.Sprite_icon.spriteFrame = FlySoccerUtils.instance.getSpriteFrame(`icon_${FlySoccerDef.areaMap[`${tempData.openNum}`] + 1}_2`);

          this.Sprite_line.active = tempData.nextOpenIndex != null;

          // let posY = [320, 68.3, 137.1, -69.3, -206.9, -275.7, -344.5, -138.1, 205.9, 274.7];
          this.Label_gameNo.string = "" + (this.item.itemIndex + 1);
          for (var i = 0; i < 8; i++) {
            var counts = tempData.loseCounts[i];
            if (counts == 0) {
              var curPos = this.Label_icon[i].node.position;
              this.Label_icon[i].node.active = false;
              this.Sprite_icon.node.position = curPos;
              this.Sprite_line.position = curPos;
              if (this.Sprite_line.active) {
                var nextPos = v3(100, this.Label_icon[tempData.nextOpenIndex].node.position.y, 0);
                this.Sprite_line.angle = this.getAngle(curPos, nextPos);
                this.Sprite_line.getComponent(UITransform).width = GUtil.GetDistance(curPos, nextPos);
              }
            } else {
              this.Label_icon[i].node.active = true;
              this.Label_icon[i].string = "" + counts;
            }
          }
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
        _createClass(FlySoccer_pathItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return FlySoccer_pathItem;
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_icon", [_dec8], {
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

System.register("chunks:///_virtual/FlySoccer_playerItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './FlySoccerModel.ts', './FlySoccerUtils.ts', './FlySoccerDef.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, FlySoccerModel, FlySoccerUtils, eGameStatus, Common;
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
      color = module.color;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      FlySoccerModel = module.FlySoccerModel;
    }, function (module) {
      FlySoccerUtils = module.FlySoccerUtils;
    }, function (module) {
      eGameStatus = module.eGameStatus;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "faea3aNbndLyJKgoW/ilSnn", "FlySoccer_playerItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FlySoccer_playerItem = exports('default', (_dec = ccclass("FlySoccer_playerItem"), _dec2 = menu("game/FlySoccerGame/FlySoccer_playerItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_playerItem, _Component);
        function FlySoccer_playerItem() {
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
          _this._gtItem = null;
          return _this;
        }
        var _proto = FlySoccer_playerItem.prototype;
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
          var winNum = FlySoccerUtils.instance.FxF(tmpdata.BetAmount, tmpdata.StopVal);
          this.Label_win.string = tmpdata.Stop ? "" + Common.ChangeMoneyShow(winNum, 2) : "-";
          if (tmpdata.Stop) {
            this.setColor(color(150, 255, 150, 255));
          } else {
            switch (FlySoccerModel.instance.gameState.State) {
              case eGameStatus.Checkout:
                {
                  this.setColor(color(255, 150, 150, 255));
                  break;
                }
              default:
                {
                  this.setColor(color(255, 255, 255, 255));
                  break;
                }
            }
          }
        }

        //color(152,246,164,255)
        //150,150,255,255
        //255,100,100,255
        ;

        _proto.setColor = function setColor(color) {
          this.Label_nickName.color = color;
          this.Label_bet.color = color;
          this.Label_rate.color = color;
          this.Label_win.color = color;
        };
        _createClass(FlySoccer_playerItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return FlySoccer_playerItem;
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlySoccer_record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './NetManager.ts', './FlySoccerDef.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, Common, NetManager, eProto, EventManager;
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
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "82280IhfKJE7ZTxMwcf2vVx", "FlySoccer_record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FlySoccer_record = exports('default', (_dec = ccclass("FlySoccer_record"), _dec2 = menu("game/FlySoccerGame/FlySoccer_record"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_record, _Component);
        function FlySoccer_record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FlySoccer_record.prototype;
        _proto.onLoad = function onLoad() {
          // Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eProto.HD_QueryBetRecord, this.onRecvData, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eProto.HD_QueryBetRecord, this.onRecvData, this);
        };
        _proto.start = function start() {
          NetManager.instance.sendOnlineData(eProto.HD_QueryBetRecord, {
            Offset: 0,
            PageSize: 100,
            RecordType: "flySoccer"
          });
        };
        _proto.onRecvData = function onRecvData(data) {
          switch (data.cmd) {
            case eProto.HD_QueryBetRecord:
              {
                if (data.Data.BetRecord) {
                  this.scrollView_content.setData(data.Data.BetRecord);
                  this.scrollView_content.refresh();
                }
                break;
              }
          }
        };
        return FlySoccer_record;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
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

System.register("chunks:///_virtual/FlySoccer_recordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts', './FlySoccerUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Sprite, UIOpacity, color, Component, AutoChangeParent, Common, FlySoccerUtils;
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
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FlySoccerUtils = module.FlySoccerUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "08b2dFn9QFH/bT7R2UEY54p", "FlySoccer_recordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FlySoccer_recordItem = exports('default', (_dec = ccclass("FlySoccer_recordItem"), _dec2 = menu("game/FlySoccerGame/FlySoccer_recordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_recordItem, _Component);
        function FlySoccer_recordItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_date", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_time", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_result", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_resultIcon", _descriptor10, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = FlySoccer_recordItem.prototype;
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
          this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
          this.Label_gameNo.string = Common.setGameNo(tempData.GameNo);
          var date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_time.string = date.time;
          this.Label_date.string = date.date;
          this.Label_bet.string = "" + Common.ChangeMoneyFormat(tempData.BetAmount, 2);
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + Common.ChangeMoneyFormat(tempData.Income, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + Common.ChangeMoneyFormat(tempData.Income, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
          this.Label_result.string = tempData.GameResult + "x";
          var level = FlySoccerUtils.instance.getRateLevel(parseFloat(tempData.GameResult));
          var arrColor = [color("7E98FF"), color(0, 255, 0, 255), color(255, 0, 255, 255), color(255, 163, 0, 255), color(255, 255, 0, 255), color(255, 0, 0, 255)];
          this.Label_result.color = arrColor[level];
          // let result = JSON.parse(tempData.GameResult);
          // let spFrame = FlySoccerUtils.instance.getSpriteFrame(`icon_${FlySoccerDef.areaMap[`${result.OpenNum}`] + 1}_2`);
          // this.Node_resultIcon.spriteFrame = spFrame;
        };

        _createClass(FlySoccer_recordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return FlySoccer_recordItem;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_date", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_time", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_result", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_resultIcon", [_dec12], {
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

System.register("chunks:///_virtual/FlySoccer_routtle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FlySoccerDef.ts', './FlySoccer_scrollNum.ts', './EventManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Component, eEvent, FlySoccer_scrollNum, EventManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      FlySoccer_scrollNum = module.FlySoccer_scrollNum;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "7d529rk9zJPQIIleyM+9UHc", "FlySoccer_routtle", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FlySoccer_routtle = exports('FlySoccer_routtle', (_dec = ccclass("FlySoccer_routtle"), _dec2 = menu("game/FlySoccerGame/FlySoccer_routtle"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_routtle, _Component);
        function FlySoccer_routtle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._curNum = 0;
          return _this;
        }
        var _proto = FlySoccer_routtle.prototype;
        _proto.start = function start() {
          this.curNum = 0.0;
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          EventManager.instance.on(eEvent.onUpdateRouttle, function (idx, num) {
            var arrStr = ["0", "0", "0", "0", ".", "0", "0"];
            var Node_numList = _this2.node.getChildByName("Node_numList");
            for (var i = 0; i < 4; i++) {
              arrStr[i] = Node_numList.children[i].getComponent(FlySoccer_scrollNum).curNum;
            }
            for (var _i = 0; _i < 2; _i++) {
              var index = 4 + _i;
              arrStr[index + 1] = Node_numList.children[index].getComponent(FlySoccer_scrollNum).curNum;
            }
            var strNum = arrStr.toString().replace(/\,/g, "");
            var _curNum = Math.floor(parseFloat(strNum) * 100) / 100;
            if (_curNum < 1.01) {
              _this2.curNum = _this2._curNum;
            } else {
              _this2._curNum = _curNum;
            }
          });
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdateRouttle);
        };
        _createClass(FlySoccer_routtle, [{
          key: "curNum",
          get: function get() {
            var arrStr = ["0", "0", "0", "0", ".", "0", "0"];
            var Node_numList = this.node.getChildByName("Node_numList");
            for (var i = 0; i < 4; i++) {
              arrStr[i] = Node_numList.children[i].getComponent(FlySoccer_scrollNum).curNum;
            }
            for (var _i2 = 0; _i2 < 2; _i2++) {
              var index = 4 + _i2;
              arrStr[index + 1] = Node_numList.children[index].getComponent(FlySoccer_scrollNum).curNum;
            }
            var strNum = arrStr.toString().replace(/\,/g, "");
            this._curNum = Math.floor(parseFloat(strNum) * 100) / 100;
            return this._curNum;
          },
          set: function set(_curNum) {
            this._curNum = _curNum;
            var arrStrNum = ("" + _curNum).split(".");
            var arrInter = arrStrNum[0];
            var arrDigit = arrStrNum[1];
            var Node_numList = this.node.getChildByName("Node_numList");
            for (var i = 0; i < 4; i++) {
              Node_numList.children[i].getComponent(FlySoccer_scrollNum).clear();
            }
            for (var _i3 = 0; _i3 < 2; _i3++) {
              var iInidex = 4 + _i3;
              Node_numList.children[iInidex].getComponent(FlySoccer_scrollNum).clear();
            }
            if (arrInter) {
              for (var _i4 = 0; _i4 < arrInter.length; _i4++) {
                var _iInidex = 4 - arrInter.length + _i4;
                Node_numList.children[_iInidex].getComponent(FlySoccer_scrollNum).init(parseInt(arrInter[_i4]));
              }
            }
            if (arrDigit) {
              for (var _i5 = 0; _i5 < arrDigit.length; _i5++) {
                var _iInidex2 = 4 + _i5;
                Node_numList.children[_iInidex2].getComponent(FlySoccer_scrollNum).init(parseInt(arrDigit[_i5]));
              }
            }
          }
        }]);
        return FlySoccer_routtle;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlySoccer_scrollNum.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FlySoccerDef.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Label, Node, sys, v3, Component, eEvent, EventManager;
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
      Label = module.Label;
      Node = module.Node;
      sys = module.sys;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b2032Qj7vNEIbnitl3ecSVy", "FlySoccer_scrollNum", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FlySoccer_scrollNum = exports('FlySoccer_scrollNum', (_dec = ccclass("FlySoccer_scrollNum"), _dec2 = menu("game/FlySoccerGame/FlySoccer_scrollNum"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_scrollNum, _Component);
        function FlySoccer_scrollNum() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_num", _descriptor, _assertThisInitialized(_this));
          _this.isTouchStart = false;
          _this.touchPosY = 0;
          _this.centerNode = null;
          _this._curNum = 1;
          _this._index = 0;
          return _this;
        }
        var _proto = FlySoccer_scrollNum.prototype;
        ///////////////////
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          this.clear();
          this._index = parseInt(this.node.name.replace("Node_scrollNum_", ""));
          this.node.on(Node.EventType.TOUCH_START, function (event) {
            _this2.touchPosY = event.getLocationY();
            if (sys.isMobile) {
              _this2.touchPosY = event.getLocationX();
            }
            _this2.isTouchStart = true;
          });
          this.node.on(Node.EventType.TOUCH_MOVE, function (event) {
            var locationY = event.getLocationY();
            var disY = locationY - _this2.touchPosY;
            if (sys.isMobile) {
              locationY = event.getLocationX();
              disY = -(locationY - _this2.touchPosY);
            }
            _this2.touchPosY = locationY;
            gts.Debug.Log("=TOUCH_MOVE=disY= " + disY + " ===");
            for (var _iterator = _createForOfIteratorHelperLoose(_this2.Label_num), _step; !(_step = _iterator()).done;) {
              var Label_num = _step.value;
              Label_num.node.position = v3(0, Label_num.node.position.y + disY, 0);
              if (Label_num.node.position.y < 33 && Label_num.node.position.y > -33) {
                _this2._curNum = parseInt(Label_num.string);
                _this2.centerNode = Label_num.node;
              } else if (disY < 0 && Label_num.node.position.y < -66) {
                Label_num.node.position = v3(0, Label_num.node.position.y + 3 * 66, 0);
              } else if (disY > 0 && Label_num.node.position.y > 66) {
                Label_num.node.position = v3(0, Label_num.node.position.y - 3 * 66, 0);
              }
            }
            for (var _iterator2 = _createForOfIteratorHelperLoose(_this2.Label_num), _step2; !(_step2 = _iterator2()).done;) {
              var _Label_num = _step2.value;
              var dis_0 = Math.floor((_Label_num.node.position.y - _this2.centerNode.position.y) / 66);
              var dis_1 = Math.abs(_Label_num.node.position.y / 66);
              var num = _this2._curNum - dis_0;
              num = num < 0 ? 10 + num : num > 9 ? num - 10 : num;
              _Label_num.string = "" + num;
              var scale = 0.25 + 0.75 * (1 - dis_1);
              _Label_num.node.scale = v3(scale, scale, scale);
            }
          });
          this.node.on(Node.EventType.TOUCH_END, function () {
            _this2.isTouchStart = false;
            for (var _iterator3 = _createForOfIteratorHelperLoose(_this2.Label_num), _step3; !(_step3 = _iterator3()).done;) {
              var Label_num = _step3.value;
              gts.Debug.Log("==TOUCH_END==0====" + JSON.stringify(Label_num.node.position));
              Label_num.node.position = v3(0, Math.floor((Label_num.node.position.y + 33) / 66) * 66, 0);
              if (Label_num.node.position.y < 33 && Label_num.node.position.y > -33) {
                _this2._curNum = parseInt(Label_num.string);
              }
            }
            for (var _iterator4 = _createForOfIteratorHelperLoose(_this2.Label_num), _step4; !(_step4 = _iterator4()).done;) {
              var _Label_num2 = _step4.value;
              var dis_0 = Math.floor((_Label_num2.node.position.y - _this2.centerNode.position.y) / 66);
              var dis_1 = Math.abs(_Label_num2.node.position.y / 66);
              var num = _this2._curNum - dis_0;
              num = num < 0 ? 10 + num : num > 9 ? num - 10 : num;
              _Label_num2.string = "" + num;
              var scale = 0.25 + 0.75 * (1 - dis_1);
              _Label_num2.node.scale = v3(scale, scale, scale);
            }
            EventManager.instance.emit(eEvent.onUpdateRouttle, _this2._index, _this2._curNum);
          });
          this.node.on(Node.EventType.TOUCH_CANCEL, function () {
            _this2.isTouchStart = false;
            for (var _iterator5 = _createForOfIteratorHelperLoose(_this2.Label_num), _step5; !(_step5 = _iterator5()).done;) {
              var Label_num = _step5.value;
              gts.Debug.Log("==TOUCH_END==0====" + JSON.stringify(Label_num.node.position));
              Label_num.node.position = v3(0, Math.floor((Label_num.node.position.y + 33) / 66) * 66, 0);
              if (Label_num.node.position.y < 33 && Label_num.node.position.y > -33) {
                _this2._curNum = parseInt(Label_num.string);
              }
            }
            for (var _iterator6 = _createForOfIteratorHelperLoose(_this2.Label_num), _step6; !(_step6 = _iterator6()).done;) {
              var _Label_num3 = _step6.value;
              var dis_0 = Math.floor((_Label_num3.node.position.y - _this2.centerNode.position.y) / 66);
              var dis_1 = Math.abs(_Label_num3.node.position.y / 66);
              var num = _this2._curNum - dis_0;
              num = num < 0 ? 10 + num : num > 9 ? num - 10 : num;
              _Label_num3.string = "" + num;
              var scale = 0.25 + 0.75 * (1 - dis_1);
              _Label_num3.node.scale = v3(scale, scale, scale);
            }
            EventManager.instance.emit(eEvent.onUpdateRouttle, _this2._index, _this2._curNum);
          });
        };
        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_START);
          this.node.off(Node.EventType.TOUCH_END);
          this.node.off(Node.EventType.TOUCH_CANCEL);
        };
        _proto.clear = function clear() {
          this.Label_num[0].node.position = v3(0, 66, 0);
          this.Label_num[1].node.position = v3(0, 0, 0);
          this.Label_num[2].node.position = v3(0, -66, 0);
          this.Label_num[0].node.scale = v3(1.0, 1.0, 1.0);
          this.Label_num[1].node.scale = v3(1.0, 1.0, 1.0);
          this.Label_num[2].node.scale = v3(1.0, 1.0, 1.0);
          this.Label_num[0].string = "0";
          this.Label_num[1].string = "0";
          this.Label_num[2].string = "0";
          this._curNum = 0;
          this.centerNode = this.Label_num[1];
        };
        _proto.init = function init(num) {
          this.clear();
          var num_0 = num - 1;
          num_0 = num_0 < 0 ? 9 : num_0;
          this.Label_num[0].string = "" + num_0;
          this.Label_num[1].string = "" + num;
          var num_2 = num + 1;
          num_2 = num_2 > 9 ? 0 : num_2;
          this.Label_num[2].string = "" + num_2;
          this._curNum = num;
        };
        _createClass(FlySoccer_scrollNum, [{
          key: "curNum",
          get: function get() {
            return "" + this._curNum;
          }
        }]);
        return FlySoccer_scrollNum;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_num", [_dec3], {
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

System.register("chunks:///_virtual/FlySoccer_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FlySoccerUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, FlySoccerUtils;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      FlySoccerUtils = module.FlySoccerUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "adf246KV4dEFrdLxnnZYskD", "FlySoccer_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FlySoccer_winTip = exports('default', (_dec = ccclass("FlySoccerWinTip"), _dec2 = menu("game/FlySoccerGame/FlySoccer_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccer_winTip, _Component);
        function FlySoccer_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FlySoccer_winTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          var Node_title = this.node.getChildByName("Node_title").getComponent(Sprite);
          Node_title.spriteFrame = this.arrSpriteFrame[0];
        };
        _proto.onDisable = function onDisable() {
          Tween.stopAllByTarget(this.node);
        }
        //    // update (dt) {}
        ;

        _proto.doShowRate = function doShowRate(gold) {
          var _this2 = this;
          var Node_title = this.node.getChildByName("Node_title");
          Node_title.getComponent(Sprite).spriteFrame = this.arrSpriteFrame[0];
          tween(this.node).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            _this2.Label_win.string = FlySoccerUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.doShow = function doShow(gold, isLast) {
          var _this3 = this;
          if (isLast === void 0) {
            isLast = false;
          }
          var Node_title = this.node.getChildByName("Node_title");
          Node_title.active = true;
          if (!isLast) {
            Node_title.getComponent(Sprite).spriteFrame = this.arrSpriteFrame[0];
            FlySoccerUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${FlySoccerUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            FlySoccerUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return FlySoccer_winTip;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrSpriteFrame", [_dec4], {
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

System.register("chunks:///_virtual/FlySoccerCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './FlySoccerModel.ts', './I18n.ts', './ViewManager.ts', './FlySoccerDef.ts', './FlySoccerUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sys, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, FlySoccerModel, i18n, ViewManager, eProto, eEvent, eGameStatus, FlySoccerUtils, Common;
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
      FlySoccerModel = module.FlySoccerModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eGameStatus = module.eGameStatus;
    }, function (module) {
      FlySoccerUtils = module.FlySoccerUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b1deaOnJTJEQrS60cHJhwGZ", "FlySoccerCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FlySoccerCtrl = exports('FlySoccerCtrl', (_dec = ccclass("FlySoccerCtrl"), _dec(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(FlySoccerCtrl, _GameDef$BaseCtrl);
        function FlySoccerCtrl() {
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
          _this._model = FlySoccerModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = FlySoccerCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete FlySoccerCtrl._instance;
          FlySoccerCtrl._instance = null;
          FlySoccerModel.destroy();
          FlySoccerUtils.destroy();
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

        _proto.reqBet = function reqBet(BetAmount, index, AutoStopVal) {
          if (index === void 0) {
            index = 0;
          }
          if (AutoStopVal === void 0) {
            AutoStopVal = 0;
          }
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            BetAmount: BetAmount,
            Pos: index,
            AutoStopVal: AutoStopVal
          });
        }
        //    /**请求下车 */
        ;

        _proto.reqStop = function reqStop(index) {
          if (index === void 0) {
            index = 0;
          }
          NetManager.instance.sendOnlineData(eProto.HD_Stop, {
            Pos: index
          });
        };
        _proto.reqAutoStop = function reqAutoStop(autoRate) {
          NetManager.instance.sendOnlineData(eProto.HD_AutoStop, {
            AutoStopVal: autoRate
          });
        };
        _proto.reqCancelAutoStop = function reqCancelAutoStop(index) {
          if (index === void 0) {
            index = 0;
          }
          NetManager.instance.sendOnlineData(eProto.HD_CancelAutoStop, {
            Pos: index
          });
        }
        //    /**请求突出房间 */
        ;

        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {
            tableId: FlySoccerModel.instance.curTableID
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
            tableId: FlySoccerModel.instance.curTableID
          });
        }
        //    /**请求进入房间 */
        ;

        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_Enter, {
            tableId: FlySoccerModel.instance.curTableID
          });
        }
        //    //////////////////////////////////////////
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.Log("==onRecvData==" + sys.now() + JSON.stringify(data));
          // if (data.cmd != FlySoccerDef.eProto.HD_UpdateOddNum) {
          //     gts.Debug.Log("==onRecvData==" + cc.sys.now() + JSON.stringify(data));
          // }

          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            }
            if (data.cmd == eProto.HD_Enter || data.Code == 402) {
              //                //退出到大厅
              EventManager.instance.emit(eEvent.onLoadHall);
              return;
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_Enter:
              {
                ViewManager.instance.closeWait();
                // FlySoccerModel.instance.clearGameData();

                var enterData = data.Data;
                FlySoccerModel.instance.gameState = enterData.GameState;
                FlySoccerModel.instance.updatePlayerInfoByGameState();
                FlySoccerModel.instance.myBetRecord = enterData.UserBetInfos || [];
                FlySoccerModel.instance.history = enterData.History ? enterData.History.reverse() : [];
                FlySoccerModel.instance.history = enterData.History != null ? enterData.History.reverse() : [];
                FlySoccerModel.instance.curRate = enterData.GameState.OddNum;
                FlySoccerModel.instance.chipList = enterData.Chips || FlySoccerModel.instance.chipList;
                FlySoccerModel.instance.MaxBet = enterData.MaxBet || 2 * FlySoccerModel.instance.chipList[FlySoccerModel.instance.chipList.length];
                for (var i = 0; i < 2; i++) {
                  FlySoccerModel.instance.isAutoCash[i] = FlySoccerModel.instance.isAutoCash[i] ? FlySoccerModel.instance.isAutoCash[i] : enterData.AutoStop[i] > 0;
                  FlySoccerModel.instance.autoInfo[i].rate = FlySoccerModel.instance.autoInfo[i].rate != 1.01 ? FlySoccerModel.instance.autoInfo[i].rate : enterData.AutoStop[i] > 1.0 ? enterData.AutoStop[i] : 1.01;
                }
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                FlySoccerModel.instance.gameState = data.Data;
                FlySoccerModel.instance.updatePlayerInfoByGameState();
                FlySoccerModel.instance.curRate = FlySoccerModel.instance.gameState.OddNum;
                switch (FlySoccerModel.instance.gameState.State) {
                  case eGameStatus.Ready:
                    {
                      FlySoccerModel.instance.gameNo = FlySoccerModel.instance.gameState.GameNo;
                      break;
                    }
                  case eGameStatus.Checkout:
                    {
                      FlySoccerModel.instance.history = FlySoccerModel.instance.history || [];
                      FlySoccerModel.instance.history.unshift(FlySoccerModel.instance.curRate);
                      break;
                    }
                }
                break;
              }
            case eProto.HD_UpdateOddNum:
              {
                //                // gts.Debug.Log("==onRecvData==" + JSON.stringify(data));

                FlySoccerModel.instance.curRate = data.Data;
                break;
              }
            case eProto.HD_History:
              {
                FlySoccerModel.instance.history = data.Data || [];
                FlySoccerModel.instance.history = FlySoccerModel.instance.history.reverse();
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_BroadcastBet:
              {
                var betInfo = data.Data;
                emitData = betInfo.Uid;
                FlySoccerModel.instance.gameState.TotalBetAmount += betInfo.BetAmount;
                FlySoccerModel.instance.updatePlayerInfo({
                  Uid: betInfo.Uid,
                  Nickname: betInfo.Nickname,
                  BetAmount: betInfo.BetAmount,
                  Pos: betInfo.Pos
                });
                break;
              }
            // case FlySoccerDef.eProto.HD_Bet: {
            //   break;
            // }
            case eProto.HD_Stop:
              {
                var stopInfo = data.Data;
                emitData = stopInfo;
                FlySoccerModel.instance.updatePlayerInfo({
                  Uid: stopInfo.Uid,
                  BetAmount: stopInfo.BetAmount,
                  Stop: true,
                  StopVal: stopInfo.StopVal,
                  Prize: stopInfo.Prize,
                  Pos: stopInfo.Pos
                });
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
            // case FlySoccerDef.eProto.HD_GetJackpotRecord: {
            //   FlySoccerModel.instance.JackpotRecord = data.Data;
            //   break;
            // }

            //            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==FlySoccer=getWallet==" + HD_Wallet.wallet.VndBalance);
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==FlySoccer=pushWallet==" + _HD_Wallet.VndBalance);

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
        return FlySoccerCtrl;
      }(GameDef.BaseCtrl)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlySoccerDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2f957yZATtIpLc2D20GFSy9", "FlySoccerDef", undefined);
      var cBundle = exports('cBundle', "FlySoccerGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_Enter"] = "flySoccer/HD_Enter";
        eProto["HD_Bet"] = "flySoccer/HD_Bet";
        eProto["HD_BroadcastBet"] = "flySoccer/HD_BroadcastBet";
        eProto["HD_Stop"] = "flySoccer/HD_Stop";
        eProto["HD_Leave"] = "flySoccer/HD_Leave";
        eProto["HD_History"] = "flySoccer/HD_History";
        eProto["checkInRoom"] = "flySoccer/checkInRoom";
        eProto["HD_GetJackpotRecord"] = "flySoccer/HD_GetJackpotRecord";
        eProto["HD_SwitchRoomState"] = "flySoccer/HD_SwitchRoomState";
        eProto["HD_UpdateOddNum"] = "flySoccer/HD_UpdateOddNum";
        eProto["HD_AutoStop"] = "flySoccer/HD_AutoStop";
        eProto["HD_CancelAutoStop"] = "flySoccer/HD_CancelAutoStop";
        eProto["HD_QueryBetRecord"] = "lobby/HD_QueryBetRecord";
        return eProto;
      }({}));

      // export const CMaxBetBase = [100000, 100000000, 500000000];
      var CBetBase = exports('CBetBase', [[1000, 2000, 5000, 10000, 20000, 50000], [50000, 100000, 150000, 200000, 500000, 1000000], [1000000, 5000000, 10000000, 15000000, 20000000, 25000000]]);
      var eAutoRateType = exports('eAutoRateType', Enum({
        integer: 0,
        decimal: 1
      }));
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["startAuto"] = "startAuto";
        eEvent["openBonusDetail"] = "openBonusDetail";
        eEvent["autoSetUpdateRate"] = "autoSetUpdateRate";
        eEvent["onUpdateRouttle"] = "onUpdateRouttle";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bg: "sound/bgm",
        boom: "sound/boom",
        loading: "sound/loading",
        bet: "sound/bet",
        jieguo: "sound/jieguo",
        qifei: "sound/qifei",
        fly: "sound/fly",
        countDown: "sound/countDown",
        warning: "sound/warning",
        winEffect: "sound/winEffect"
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

      /////////////////

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlySoccerGame", ['./FlySoccerCtrl.ts', './FlySoccerDef.ts', './FlySoccerGameView.ts', './FlySoccerModel.ts', './FlySoccerScene.ts', './FlySoccerUtils.ts', './FlySoccer_Help.ts', './FlySoccer_autoSet.ts', './FlySoccer_betRecordItem.ts', './FlySoccer_betView.ts', './FlySoccer_btnEffect.ts', './FlySoccer_path.ts', './FlySoccer_pathItem.ts', './FlySoccer_playerItem.ts', './FlySoccer_record.ts', './FlySoccer_recordItem.ts', './FlySoccer_routtle.ts', './FlySoccer_scrollNum.ts', './FlySoccer_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/FlySoccerGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './FlySoccerDef.ts', './FlySoccerModel.ts', './FlySoccerCtrl.ts', './ViewManager.ts', './FlySoccerUtils.ts', './Common.ts', './FlySoccer_betView.ts'], function (exports) {
  var _inheritsLoose, _createClass, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, sp, Prefab, Label, SpriteFrame, UITransform, Tween, tween, v3, instantiate, sys, Sprite, find, v2, UIOpacity, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, eGameStatus, eSound, eEvent, eProto, FlySoccerModel, FlySoccerCtrl, ViewManager, FlySoccerUtils, Common, FlySoccer_betView;
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
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      instantiate = module.instantiate;
      sys = module.sys;
      Sprite = module.Sprite;
      find = module.find;
      v2 = module.v2;
      UIOpacity = module.UIOpacity;
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
      FlySoccerModel = module.FlySoccerModel;
    }, function (module) {
      FlySoccerCtrl = module.FlySoccerCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      FlySoccerUtils = module.FlySoccerUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FlySoccer_betView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "65d0aM6KStM4bGTsk3HCBLe", "FlySoccerGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var FlySoccerGameView = exports('default', (_dec = ccclass("FlySoccerGameView"), _dec2 = menu("game/FlySoccerGame/FlySoccerGameView"), _dec3 = property(Node), _dec4 = property(gts.List), _dec5 = property(gts.List), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(sp.Skeleton), _dec9 = property(Node), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(SpriteFrame), _dec22 = property(sp.Skeleton), _dec23 = property(sp.Skeleton), _dec24 = property(FlySoccer_betView), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(FlySoccerGameView, _GameDef$BaseView);
        function FlySoccerGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_more", _descriptor, _assertThisInitialized(_this));
          //
          _initializerDefineProperty(_this, "ScrollView_playerList", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_betRecordList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_countDown", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_progressMask", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tiimerEffect", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cashBallRoot", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cashBall", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_coin", _descriptor9, _assertThisInitialized(_this));
          ///////////////////
          _initializerDefineProperty(_this, "Layout_history", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_history", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_history_close", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_history_open", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_playerNum", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalBet", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameRate", _descriptor18, _assertThisInitialized(_this));
          ///////
          _initializerDefineProperty(_this, "sprFrameRateBg", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ball", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sky", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "comBetView", _descriptor22, _assertThisInitialized(_this));
          /////////////////////
          _this._curStatus = eGameStatus.NONE;
          return _this;
        }
        var _proto = FlySoccerGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, FlySoccerCtrl.instance);
          this.initUIView();
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameHide, this.gameHide, this); //
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //
        };

        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameHide, this.gameHide, this); //
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //

          this.Node_countDown.active = false;
          this.Node_tiimerEffect.node.active = false;
          this.unschedule(this.updateReadyTimer);
          FlySoccerModel.instance.clearGameData();
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
              FlySoccerCtrl.instance.reEnterRoom();
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.initUIView = function initUIView() {
          FlySoccerCtrl.instance.reqEnterRoom();
        };
        _proto.initGame = function initGame() {
          //        //Node_main
          switch (FlySoccerModel.instance.gameState.State) {
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
          this.updateHistory();
          this.updateInfo();
          this.updatePlayerList();
          this.updateBetRecord();
          this.updateGold();
          this.comBetView[0].initView();
          this.comBetView[1].initView();
          FlySoccerModel.instance.gameNo = FlySoccerModel.instance.gameState.GameNo;
        }
        //    ///////////////////////////////////////////////////////////////////////////
        ;

        _proto.updateGold = function updateGold() {
          var gold = Common.numFormat(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          this.Label_gold.string = gold;
        };
        _proto.updateReadyTimer = function updateReadyTimer(dt) {
          FlySoccerModel.instance.gameState.StateTime -= dt;
          this.Node_progressMask.getComponent(UITransform).width = 550 * (1 - FlySoccerModel.instance.gameState.StateTime / 5.0);
          if (FlySoccerModel.instance.gameState.StateTime < 0.25 && !this.Node_tiimerEffect.node.active) {
            this.Node_countDown.active = true;
            this.Node_tiimerEffect.node.active = true;
            this.Node_tiimerEffect.setAnimation(0, "animation", false);
            FlySoccerModel.instance.gameState.State = eGameStatus.ReadyEnd;
            FlySoccerUtils.instance.stopSound(eSound.loading);
            FlySoccerUtils.instance.playOneShot(eSound.countDown);
            Tween.stopAllByTarget(this.Node_countDown);
            tween(this.Node_countDown).repeat(2, tween(this.Node_countDown).delay(1.0).call(function () {
              FlySoccerUtils.instance.playOneShot(eSound.countDown);
            })).start();
            tween(this.Node_countDown).delay(3.0).call(function () {
              FlySoccerUtils.instance.playOneShot(eSound.warning);
            }).start();
          } else if (FlySoccerModel.instance.gameState.StateTime < 3 && FlySoccerModel.instance.gameState.StateTime >= 0) {
            //如果有预下注 则发送下注信息
            for (var i = 0; i < 2; i++) {
              var _this$comBetView$i;
              (_this$comBetView$i = this.comBetView[i]) == null || _this$comBetView$i.doBet();
            }
          }
        };
        _proto.doStart = function doStart() {
          var _this2 = this;
          Tween.stopAllByTarget(this.Node_countDown);
          this.Node_tiimerEffect.node.active = false;
          this.Node_countDown.active = false;
          this.Node_progressMask.active = false;
          this.unschedule(this.updateReadyTimer);
          this.ball.node.active = true;
          this.ball.setCompleteListener(null);
          Tween.stopAllByTarget(this.ball.node);
          if (FlySoccerModel.instance.curRate > 1.5) {
            tween(this.ball.node).to(0.25, {
              position: this.Node_cashBallRoot.position,
              eulerAngles: v3(0, 0, 60)
            }).start();
            this.ball.setAnimation(0, "fly", true);
            this.sky.node.active = true;
            this.sky.setAnimation(0, "idle", true);
            FlySoccerUtils.instance.playSound(eSound.fly, true);
          } else {
            FlySoccerUtils.instance.playSound(eSound.qifei);
            this.ball.setAnimation(0, "start", false);
            this.ball.setCompleteListener(function () {
              _this2.ball.setCompleteListener(null);
              Tween.stopAllByTarget(_this2.ball.node);
              tween(_this2.ball.node).to(0.25, {
                position: _this2.Node_cashBallRoot.position,
                eulerAngles: v3(0, 0, 60)
              }).start();
              _this2.ball.setAnimation(0, "fly", true);
              _this2.sky.node.active = true;
              _this2.sky.setAnimation(0, "start", false);
              _this2.sky.addAnimation(0, "idle", true);
              FlySoccerUtils.instance.playSound(eSound.fly, true);
            });
          }
          this.curRate = 0;

          //rateInfo
          this.Label_gameRate.node.active = true;
          this.Label_gameRate.getComponent(Label).string = "0.0X";

          //更新玩家列表
          this.updateInfo();
          this.updatePlayerList();
        };
        _proto.doEnd = function doEnd() {
          var _this3 = this;
          //ball
          this.ball.node.active = true;
          this.ball.setCompleteListener(null);
          this.ball.setAnimation(0, "end", false);
          this.ball.setCompleteListener(function () {
            _this3.ball.setCompleteListener(null);
            _this3.ball.clearAnimation(1);
            _this3.ball.node.active = false;
            _this3.scheduleOnce(function () {
              _this3.sky.node.active = true;
              _this3.sky.paused = true;
            }, 1);
          });
          FlySoccerUtils.instance.stopSound(eSound.fly);
          FlySoccerUtils.instance.playOneShot(eSound.boom);
          this.updateBetRecord();
          this.updateHistory();
        };
        _proto.doReady = function doReady() {
          this.sky.node.active = true;
          this.sky.paused = false;
          this.sky.setAnimation(0, "quite", true);
          this.ball.node.position = v3(0, 0, 0);
          this.ball.node.eulerAngles = v3(0, 0, 0);
          this.ball.node.active = true;
          this.ball.setAnimation(0, "wait", true);
          this.Node_cashBallRoot.destroyAllChildren();

          //倒计时550
          this.Node_countDown.active = true;
          this.Node_progressMask.active = true;
          this.Node_progressMask.getComponent(UITransform).width = 550 * (1 - FlySoccerModel.instance.gameState.StateTime / 5.0);
          this.schedule(this.updateReadyTimer);
          FlySoccerUtils.instance.playSound(eSound.loading, true);

          //更新玩家列表
          this.updateInfo();
          this.updatePlayerList();
          this.curRate = 0;
          this.Label_gameRate.node.active = false;
        };
        _proto.doRuning = function doRuning() {
          this.Label_gameRate.node.active = true;
          this.Node_countDown.active = false;
          this.Node_tiimerEffect.node.active = false;
          this.Node_progressMask.getComponent(UITransform).width = 550 * (1 - FlySoccerModel.instance.gameState.StateTime / 5.0);
          this.unschedule(this.updateReadyTimer);
          FlySoccerUtils.instance.stopSound(eSound.loading);
          Tween.stopAllByTarget(this.Node_countDown);
          FlySoccerUtils.instance.playSound(eSound.fly);
          this.ball.node.active = true;
          this.ball.node.position = v3(150, 170, 0);
          this.ball.node.eulerAngles = v3(0, 0, 60);
          this.ball.setAnimation(0, "fly", true);
          this.sky.node.active = true;
          if (FlySoccerModel.instance.curRate > 1.1) {
            this.sky.setAnimation(0, "idle", true);
          } else {
            this.sky.setAnimation(0, "start", false);
            this.sky.addAnimation(0, "idle", true);
          }
          this.curRate = FlySoccerModel.instance.curRate;
        };
        _proto.doResult = function doResult() {
          //ball
          this.sky.node.active = true;
          this.sky.addAnimation(0, "quite", true);
          FlySoccerUtils.instance.stopSound(eSound.fly);
          this.ball.node.active = false;
        }
        //    ///////////////////////////////////////////////////////////////////////////
        //    ///////////////////////////////////////////////////////////////////////////
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event, data) {
          var _this4 = this;
          switch (event.target.name) {
            case "node_bg":
            case "Button_more":
              {
                this.Node_more.active = !this.Node_more.active;
                break;
              }
            case "Button_return":
              {
                FlySoccerCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_record":
              {
                Common.loadPopBuddle("prefab/Node_record", FlySoccerUtils.instance.bundle, function () {}, function (prefab) {
                  _this4.Node_more.active = false;
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);
                break;
              }
            case "Button_set":
              {
                Common.loadPopBuddle("prefab/Node_set", FlySoccerUtils.instance.bundle, function () {}, function (prefab) {
                  _this4.Node_more.active = false;
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", FlySoccerUtils.instance.bundle, function () {}, function (prefab) {
                  _this4.Node_more.active = false;
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);
                // this.doMenuShow(false);
                break;
              }
            /////////////////
            case "Button_history_close":
              {
                this.Node_history.active = false;
                this.Button_history_close.active = false;
                this.Layout_history.active = true;
                this.Button_history_open.active = true;
                break;
              }
            case "Button_history_open":
              {
                this.Layout_history.active = false;
                this.Button_history_open.active = false;
                this.Node_history.active = true;
                this.Button_history_close.active = true;
                this.showHistory();
                break;
              }
            ///////////////////////
          }
        };

        _proto.updateHistory = function updateHistory() {
          var historyList = FlySoccerModel.instance.history.slice(0, 6);
          for (var i = 0; i < 6; i++) {
            var item = this.Layout_history.getChildByName("item_" + i);
            item.active = i < historyList.length;
            if (item.active) {
              var vRate = historyList[i];
              vRate = Math.floor(vRate * 100) / 100;
              var Label_rate = item.getChildByName("Label_rate");
              Label_rate.getComponent(Label).string = vRate + "x";
              var level = FlySoccerUtils.instance.getRateLevel(vRate);
              item.getComponent(Sprite).spriteFrame = this.sprFrameRateBg[level];
            }
          }
          var newTag = this.Layout_history.getChildByName("new");
          newTag.active = historyList.length > 0;
        }
        //显示开奖结果记录
        ;

        _proto.showHistory = function showHistory() {
          var historyList = FlySoccerModel.instance.history.slice(0, 28);
          var Layout_history = this.Node_history.getChildByName("Layout_history");
          var itemTemp = Layout_history.children[0];
          for (var i = 0; i < historyList.length; i++) {
            var item = Layout_history.getChildByName("item_" + i);
            if (!item) {
              item = instantiate(itemTemp);
              item.name = "item_" + i;
              Layout_history.addChild(item);
            }
            item.active = true;
            var vRate = historyList[i];
            vRate = Math.floor(vRate * 100) / 100;
            var Label_rate = item.getChildByName("Label_rate");
            Label_rate.getComponent(Label).string = vRate + "x";
            var level = FlySoccerUtils.instance.getRateLevel(vRate);
            item.getComponent(Sprite).spriteFrame = this.sprFrameRateBg[level];
          }
          var newTag = this.Node_history.getChildByName("new");
          newTag.active = historyList.length > 0;
        };
        _proto.showCoinEffect = function showCoinEffect(index, Prize) {
          var _this5 = this;
          if (index === void 0) {
            index = 0;
          }
          if (Prize === void 0) {
            Prize = 0;
          }
          var startNode = find("Node_buttom/Node_bet/Node_bet_" + index + "/Node_nomal/Button_cashOut", this.node);
          var nPos = startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          nPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(nPos);
          var endPos = this.Label_gold.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(endPos);

          // let wPos = this.exfire.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          // newEx.position = Node_enter.getComponent(UITransform).convertToNodeSpaceAR(wPos);

          var maxCounts = 20;
          var _loop = function _loop() {
            var startPos = v2(nPos.x + Math.random() * 80 - 40, nPos.y + Math.random() * 80 - 40);
            var coin = instantiate(_this5.prefab_coin);
            coin.getComponent(UIOpacity).opacity = 255;
            coin.getComponent(UITransform).priority = 1000;
            coin.position = v3(startPos.x, startPos.y);
            _this5.node.addChild(coin);
            tween(coin).delay(i * 0.01).parallel(tween(coin).bezierTo(Math.random() * 0.4 + 0.5, v2(startPos.x, (startPos.y + endPos.y) / 2), v2(endPos.x + 100, -(startPos.y + endPos.y) / 2), endPos).start(), tween(coin).to(0.2, {
              scale: v3(0.75, 0.75, 1)
            }).start()).call(function () {
              tween(coin.getComponent(UIOpacity)).to(0.1, {
                opacity: 0
              }).start();
            }).delay(0.1).call(function () {
              if (maxCounts > 0) {
                maxCounts = 0;
                // FlySoccerUtils.instance.playOneShot(FlySoccerDef.eSound.touzhu);
                //tisi
                // Common.showTip(`WIN:${Common.numFormat(Prize)}`, sys.isMobile, v2(0, 350));

                var CurBalance = DataManager.instance.getUserDataForKey(UserKey.GOLD);
                FlySoccerUtils.instance.updateLabel(_this5.Label_gold, Common.numFormat(CurBalance + Prize));
              }
            }).destroySelf().start();
          };
          for (var i = 0; i < maxCounts; i++) {
            _loop();
          }
        };
        _proto.doDrop = function doDrop(nickName) {
          // nickName = "nickName";

          var Node_cashBall = instantiate(this.Node_cashBall);
          this.Node_cashBallRoot.addChild(Node_cashBall);
          Node_cashBall.active = true;
          Node_cashBall.position = v3(0);
          var Label_nickName = Node_cashBall.getChildByName("Label_nickName").getComponent(Label);
          Label_nickName.string = nickName + "x";
          var toX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 150 + 200);
          var toY = Math.random() * 100 - 350;
          tween(Node_cashBall).bezierTo(2.0, v2(toX, 0), v2(toX * 0.75, 100), v2(toX, toY)).destroySelf().start();
        };
        _proto.updateBetRecord = function updateBetRecord() {
          var betRecord = FlySoccerModel.instance.myBetRecord.slice() || [];
          this.ScrollView_betRecordList.setData(betRecord);
          this.ScrollView_betRecordList.refresh();
        };
        _proto.updateInfo = function updateInfo() {
          this.Label_gameNo.string = "#" + FlySoccerModel.instance.gameState.GameNo;
          this.Label_totalBet.string = Common.numFormat(FlySoccerModel.instance.gameState.TotalBetAmount);
        };
        _proto.updatePlayerList = function updatePlayerList() {
          var PlayerInfos = FlySoccerModel.instance.PlayerInfos || [];
          // let stopNum = 0;
          // for (const info of PlayerInfos) {
          //     stopNum = info.Stop ? stopNum + 1 : stopNum;
          // }
          // this.Label_curNum.string = `${stopNum}`;
          this.Label_playerNum.string = "" + PlayerInfos.length;
          PlayerInfos = PlayerInfos.sort(function (a, b) {
            return b.BetAmount - a.BetAmount;
          });
          this.ScrollView_playerList.setData(PlayerInfos);
          this.ScrollView_playerList.refresh();
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this6 = this;
          switch (event) {
            case eProto.HD_Enter:
              {
                this.unschedule(this.updateReadyTimer);
                this.initGame();
                break;
              }
            case eProto.HD_BroadcastBet:
              {
                //更新玩家列表
                this.updateInfo();
                this.updatePlayerList();
                break;
              }
            case eProto.HD_Stop:
              {
                this.updateInfo();
                this.updatePlayerList();
                var stopInfo = data;
                var Uid = stopInfo.Uid;
                if (FlySoccerModel.instance.isMySelf(Uid)) {
                  var prize = Math.floor(data.BetAmount * data.StopVal * 100) / 100;
                  this.showCoinEffect(data.Pos, prize);
                  FlySoccerModel.instance.myBetRecord.unshift({
                    Date: FlySoccerUtils.instance.getDate(),
                    Bet: stopInfo.BetAmount,
                    Odd: stopInfo.StopVal
                  });
                  this.updateBetRecord();
                }
                this.doDrop(data.StopVal);
                break;
              }
            case eProto.HD_UpdateOddNum:
              {
                this.Label_gameRate.getComponent(Label).string = FlySoccerUtils.instance.numberFormat(FlySoccerModel.instance.curRate, 2) + "x";
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                switch (FlySoccerModel.instance.gameState.State) {
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
                      this.curRate = FlySoccerModel.instance.curRate;

                      // let Node_manRoot = this.Node_main.getChildByName("Node_manRoot");
                      // Node_manRoot.removeAllChildren();

                      this.scheduleOnce(function () {
                        // this.Label_gameRate.node.active = false;

                        _this6.updateInfo();
                        _this6.updatePlayerList();
                        _this6.doEnd();
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
            //            //////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();

                // let comuiBetView = this.node.getChildByName("Node_betView").getComponent(uiBetView);
                // comuiBetView.checkGold();
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
                  FlySoccerCtrl.instance.reEnterRoom();
                } else {
                  //                    //退出到大厅
                  EventManager.instance.emit(eEvent.onLoadHall);
                }
                break;
              }
          }
        };
        _createClass(FlySoccerGameView, [{
          key: "curRate",
          get: function get() {
            return FlySoccerModel.instance.curRate;
          },
          set: function set(rate) {
            this.Label_gameRate.getComponent(Label).string = FlySoccerUtils.instance.numberFormat(FlySoccerModel.instance.curRate, 2) + "x";
          }
        }]);
        return FlySoccerGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_more", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_playerList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_betRecordList", [_dec5], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_progressMask", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_tiimerEffect", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_cashBallRoot", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_cashBall", [_dec10], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Layout_history", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_history", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Button_history_close", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Button_history_open", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_playerNum", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalBet", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameRate", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameRateBg", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "sky", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "comBetView", [_dec24], {
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

System.register("chunks:///_virtual/FlySoccerModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './DataManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, GameDef, DataManager, UserKey;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ee1925wpZ5HxpBP4eQR4qsQ", "FlySoccerModel", undefined);
      var FlySoccerModel = exports('FlySoccerModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(FlySoccerModel, _GameDef$BaseSington);
        function FlySoccerModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          ////////////////////////
          _this.chipList = [1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000, 50000000];
          _this.history = null;
          _this.myBetRecord = [];
          _this.baseBetIndex = [0, 0];
          _this.baseBet = [1000, 1000];
          _this.MaxBet = 0;
          _this.playerNums = 0;
          _this.allTotalBet = 0;
          _this.totalWin = [0, 0];
          _this.isAutoCash = [false, false];
          _this.isAutoPlay = [false, false];
          _this.playState = [0, 0];
          //0:none 1:bet 2:running 3:end
          _this.autoInfo = [{
            rate: 1.01,
            round: 10,
            lose: 1000,
            win: 1000,
            isLose: false,
            isWin: false
          }, {
            rate: 1.01,
            round: 10,
            lose: 1000,
            win: 1000,
            isLose: false,
            isWin: false
          }];
          _this.curTableID = "1";
          _this.curRate = 0;
          ////////////////////////////
          _this.gameState = null;
          _this.jackpotReward = 0;
          _this.JackpotRecord = null;
          // isAutoDown: boolean = false;
          _this.isBetted = false;
          _this.autoRate = 2.0;
          _this.gameNo = null;
          _this.PlayerInfos = [];
          return _this;
        }
        FlySoccerModel.destory = function destory() {
          delete this._instance;
          this._instance = null;
        };
        var _proto = FlySoccerModel.prototype;
        _proto.updateTotalBet = function updateTotalBet() {
          var totalBet = 0;
          var playerList = this.PlayerInfos;
          if (playerList) {
            for (var _iterator = _createForOfIteratorHelperLoose(playerList), _step; !(_step = _iterator()).done;) {
              var player = _step.value;
              totalBet += player.BetAmount;
            }
            this.gameState.TotalBetAmount = totalBet;
          }
        }
        // export interface IPlayInfo_0 {
        //     BetAmount: number;
        //     Stop: boolean;
        //     StopVal: number;
        //     Prize?: number;
        // }
        // export interface IPlayInfo {
        //     Uid: string;
        //     Nickname: string;
        //     BetInfos: IPlayInfo_0[];
        // }
        ;

        _proto.updatePlayerInfoByGameState = function updatePlayerInfoByGameState() {
          this.PlayerInfos = this.PlayerInfos || [];
          if (this.gameState.PlayerInfos) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(this.gameState.PlayerInfos), _step2; !(_step2 = _iterator2()).done;) {
              var PlayerInfo = _step2.value;
              for (var i = 0; i < 2; i++) {
                var betInfo = PlayerInfo.BetInfos[i];
                if (betInfo.BetAmount > 0) {
                  var info = {
                    Uid: PlayerInfo.Uid,
                    Nickname: PlayerInfo.Nickname,
                    BetAmount: betInfo.BetAmount,
                    Stop: betInfo.Stop,
                    StopVal: betInfo.StopVal,
                    Prize: betInfo.Prize,
                    Pos: i
                  };
                  this.updatePlayerInfo(info);
                }
              }
            }
          } else {
            this.gameState.PlayerInfos = [];
            this.PlayerInfos = [];
          }
        };
        _proto.updatePlayerInfo = function updatePlayerInfo(data) {
          var isPlayerExist = false;
          var playerList = this.PlayerInfos;
          if (playerList) {
            for (var _iterator3 = _createForOfIteratorHelperLoose(playerList), _step3; !(_step3 = _iterator3()).done;) {
              var player = _step3.value;
              if (player.Uid == data.Uid && player.Pos == data.Pos) {
                player.Stop = data == null ? void 0 : data.Stop;
                player.StopVal = data == null ? void 0 : data.StopVal;
                player.BetAmount = data == null ? void 0 : data.BetAmount;
                player.Prize = data == null ? void 0 : data.Prize;
                isPlayerExist = true;
                break;
              }
            }
          }
          if (!isPlayerExist) {
            this.PlayerInfos = this.PlayerInfos || [];
            this.PlayerInfos.push(data);
          }
        };
        _proto.getMyInfo = function getMyInfo(Pos) {
          if (Pos === void 0) {
            Pos = 0;
          }
          var myUID = DataManager.instance.getUserDataForKey(UserKey.OID);
          if (!this.gameState || !this.PlayerInfos) {
            return null;
          }
          var playerList = this.PlayerInfos;
          for (var _iterator4 = _createForOfIteratorHelperLoose(playerList), _step4; !(_step4 = _iterator4()).done;) {
            var player = _step4.value;
            if (player.Uid == myUID && player.Pos == Pos) {
              return player;
            }
          }
          return null;
        };
        _proto.isMySelf = function isMySelf(uid) {
          return uid == DataManager.instance.getUserDataForKey(UserKey.OID);
        }
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        ;

        _proto.clearGameData = function clearGameData() {
          this.curRate = 0;
          this.gameState = null;
          this.history = null;
          this.jackpotReward = 0;
          this.JackpotRecord = null;
          this.isAutoPlay = [false, false];
          this.isAutoCash = [false, false];
          this.gameNo = null;
          this.autoInfo = [{
            rate: 1.01,
            round: 10,
            lose: 1000,
            win: 1000,
            isLose: false,
            isWin: false
          }, {
            rate: 1.01,
            round: 10,
            lose: 1000,
            win: 1000,
            isLose: false,
            isWin: false
          }];
        };
        return FlySoccerModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlySoccerScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './FlySoccerDef.ts', './FlySoccerUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, sys, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, FlySoccerUtils, Common;
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
      view = module.view;
      sys = module.sys;
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
      FlySoccerUtils = module.FlySoccerUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e2460UUoQpA3KVUbpgh9mCb", "FlySoccerScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FlySoccerScene = exports('default', (_dec = ccclass("FlySoccerScene"), _dec2 = menu("game/FlySoccerGame/FlySoccerScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlySoccerScene, _Component);
        function FlySoccerScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor2, _assertThisInitialized(_this));
          _this._node_Game = null;
          return _this;
        }
        var _proto = FlySoccerScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          FlySoccerUtils.instance.bundle = assetManager.getBundle(cBundle);
          FlySoccerUtils.instance.preLoad();
          FlySoccerUtils.instance.playBgMusic();
          this.onLoadGame();
        };
        _proto.start = function start() {
          // Common.showWait();
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          if (sys.isMobile || sys.isNative) {
            ViewManager.instance.changeOrientationH(true);
          }
          view.off("canvas-resize", this.onResize, this);
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onResize = function onResize() {
          var _this2 = this;
          this.scheduleOnce(function () {
            Common.transformSize(_this2._node_Game);
          }, 0.05);
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
        _proto.onLoadGame = function onLoadGame() {
          var _this3 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            // Common.showWait();
            FlySoccerUtils.instance.bundle.load("prefab/FlySoccerGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this3.prefab_game = prefab;
              _this3.showGame();
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
            })
            // .call(() => {
            //     Common.closeWait();
            // })
            .start();

            // Common.closeWait();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return FlySoccerScene;
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

System.register("chunks:///_virtual/FlySoccerUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './FlySoccerDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, GameDef, AudioManager, eSound, Common;
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
      sys = module.sys;
      SpriteFrame = module.SpriteFrame;
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
      cclegacy._RF.push({}, "4b301NBEqZNGYWnViCG/Oj/", "FlySoccerUtils", undefined);
      var FlySoccerUtils = exports('FlySoccerUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(FlySoccerUtils, _GameDef$BaseSington);
        function FlySoccerUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          //    //animationName:{icon_wild:{idle,boom},icon_hu:{idle,intro}}
          //    // icon_hu:{icon_fa:["faidle","fa"]}
          // arrSkeletonData: { [index: string]: sp.SkeletonData } = {};
          // arrFontData: { [index: string]: Font } = {};
          _this.arrSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = FlySoccerUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/FlySoccerGameView");
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
        _proto.loadRes = /*#__PURE__*/function () {
          var _loadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cb) {
            var _this4 = this;
            var arrHLoad;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrHLoad = [];
                  arrHLoad.push(this.asyncLoadDir("textures/icon", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpFrame), _step; !(_step = _iterator()).done;) {
                        var _SpriteFrame = _step.value;
                        _this4.arrSpriteFrame[_SpriteFrame.name] = _SpriteFrame;
                      }
                    }
                  }));
                  _context3.next = 4;
                  return Promise.all(arrHLoad);
                case 4:
                  if (cb) {
                    cb();
                  }
                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function loadRes(_x7) {
            return _loadRes.apply(this, arguments);
          }
          return loadRes;
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
          AudioManager.instance.playGameMusicByPath(soundPath, this.bundle, true);
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

            // audioEngine.setEffectsVolume(1);
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
        _proto.updateLabel = function updateLabel(label, num, scale) {
          if (scale === void 0) {
            scale = 1.0;
          }
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2 * scale, 1.2 * scale, 1.2 * scale)
          }).call(function () {
            labelCom.string = "" + num;
          }).to(0.1, {
            scale: v3(1.0 * scale, 1.0 * scale, 1.0 * scale)
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
        //    //////////////////////////
        ;

        _proto.getSpriteFrame = function getSpriteFrame(strFrame) {
          if (this.arrSpriteFrame) {
            return this.arrSpriteFrame[strFrame];
          }
          return null;
        };
        _proto.add0 = function add0(m) {
          return m < 10 ? "0" + m : m;
        };
        _proto.getDate = function getDate() {
          var time = new Date();
          var y = time.getFullYear();
          var m = time.getMonth() + 1;
          var d = time.getDate();
          var h = time.getHours();
          var mm = time.getMinutes();
          var s = time.getSeconds();
          return y + "-" + this.add0(m) + "-" + this.add0(d) + "\r\n" + this.add0(h) + ":" + this.add0(mm) + ":" + this.add0(s);
        };
        _proto.getRateLevel = function getRateLevel(vRate) {
          return vRate < 3 ? 0 : vRate < 10 ? 1 : vRate < 20 ? 2 : vRate < 40 ? 3 : vRate < 80 ? 4 : 5;
        }
        // getSymbolAniName(symbolIndex, isIdle: boolean = true) {
        //     //        // if (isIdle) {
        //     //        //     return null;
        //     //        // }

        //     let strAni = [];
        //     // switch (symbolIndex) {
        //     //     case FlySoccerDef.eSymbol.NONE: {
        //     //         let index = Math.floor(Math.random() * (symbol_aniName.length - 3) + 3);
        //     //         strAni.push(`${symbol_aniName[index]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     //     case FlySoccerDef.eSymbol.SCATTER: {
        //     //         if (isIdle) {
        //     //             strAni.push(`free_idle`);
        //     //         } else {
        //     //             strAni.push(`free_intro`);
        //     //             strAni.push(`free_intro`);
        //     //         }
        //     //         break;
        //     //     }
        //     //     case FlySoccerDef.eSymbol.SpecialWild: {
        //     //         strAni.push(`${symbol_aniName[symbolIndex - 1]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     //     default: {
        //     //         strAni.push(`${symbol_aniName[symbolIndex - 1]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     // }
        //     if (!strAni) {
        //         return null;
        //     }

        //     //        // gts.Debug.Log(`==getSymbolAniName=strAni=${strAni}=symbolIndex=${symbolIndex}`);
        //     return strAni;
        // }
        // getFontData(name) {
        //     if (!this.arrFontData) {
        //         return null;
        //     }

        //     return this.arrFontData[name];
        // }
        // getSkeletonData(index, isHorizontal = false) {
        //     if (!this.arrSkeletonData) {
        //         return null;
        //     }

        //     if (typeof index == "string") {
        //         return this.arrSkeletonData[index];
        //     }

        //     let strAni = "icon";
        //     let ret = this.arrSkeletonData[strAni];
        //     if (!ret) {
        //         return null;
        //     }
        //     return ret;
        // }
        ;

        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        }
        // getInitOpenNums() {
        //     let arrNUms = [
        //         [11, 8, 9, 1, 6, 5, 9, 8, 4, 8, 7, 1, 10, 10, 8],
        //         [9, 8, 6, 5, 4, 10, 1, 2, 11, 2, 4, 6, 11, 6, 4],
        //         [5, 8, 10, 4, 7, 8, 8, 7, 7, 6, 6, 5, 4, 11, 4],
        //         [4, 10, 5, 5, 9, 4, 11, 7, 10, 7, 4, 8, 7, 4, 11],
        //         [10, 8, 9, 2, 9, 10, 6, 5, 10, 8, 6, 6, 8, 2, 9],
        //     ];
        //     return arrNUms[Math.floor(Math.random() * arrNUms.length)];
        // }
        ;

        return FlySoccerUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/FlySoccerGame', 'chunks:///_virtual/FlySoccerGame'); 
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