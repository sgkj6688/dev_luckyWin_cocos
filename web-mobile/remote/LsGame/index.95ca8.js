System.register("chunks:///_virtual/LsAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Component, MainManager, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "44c78iaJcdLL4/EId9CK1cO", "LsAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LsAuto = exports('default', (_dec = ccclass("LsAuto"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsAuto, _Component);
        function LsAuto() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._eventManager = void 0;
          return _this;
        }
        var _proto = LsAuto.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        };
        _proto.showAuto = function showAuto() {
          Common.showLog("auto");
          this._eventManager.dispatch("auto", null);
        };
        _proto.touchStart = function touchStart() {
          Common.showLog("start1");
          //        //长按2秒后自动
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
        };
        return LsAuto;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LsBag.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, tween, UIOpacity, Tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d6b75XO/t9MHofzMv7R694m", "LsBag", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LsBag = exports('default', (_dec = ccclass("LsBag"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsBag, _Component);
        function LsBag() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = LsBag.prototype;
        _proto.onEnable = function onEnable() {
          this.runLink();
        };
        _proto.runLink = function runLink() {
          var self = this;
          tween(this.node.getComponent(UIOpacity)).to(0.5, {
            opacity: 0
          }).to(0.5, {
            opacity: 255
          }).call(function () {
            self.runLink();
          }).start();
        };
        _proto.onDisable = function onDisable() {
          Tween.stopAllByTarget(this.node);
        };
        return LsBag;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LsBigRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './EventManager.ts', './NetManager.ts', './LsGameDef.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, instantiate, find, Component, i18n, EventManager, NetManager, LsGameDef, Common;
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
      instantiate = module.instantiate;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      LsGameDef = module.LsGameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "80a174UtGVKwbsn6Opj0JuF", "LsBigRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LsBigRecord = exports('default', (_dec = ccclass("LsBigRecord"), _dec2 = menu("game/lsGame/LsBigRecord"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsBigRecord, _Component);
        function LsBigRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl_page", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_pre", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_next", _descriptor5, _assertThisInitialized(_this));
          _this._curPage = 1;
          _this._total = void 0;
          return _this;
        }
        var _proto = LsBigRecord.prototype;
        _proto.onLoad = function onLoad() {
          this.initEvent();
          NetManager.instance.sendOnlineData(LsGameDef.eProto.getBigPoolList, {
            Offset: 0,
            PageSize: 5
          });
        };
        _proto.start = function start() {
          this.lbl_page.string = "Trang:" + this._curPage;
        };
        _proto.initEvent = function initEvent() {
          EventManager.instance.on(LsGameDef.eProto.getBigPoolList, this.updateView, this);
        }
        //    /**
        //     * 界面更新
        //     * @param event
        //     * @param data
        //     * @returns
        //     */
        ;

        _proto.updateView = function updateView(data) {
          if (data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          var emitData = data.Data;
          this._total = emitData.TotalNum;
          if (emitData.JackpotRecord.length > 0) {
            this.updateContent(emitData.JackpotRecord);
          }
        }
        //    /**
        //     * 初始化房间信息
        //     * @param dataList
        //     */
        ;

        _proto.updateContent = function updateContent(dataList) {
          if (!dataList) return;
          this.content.destroyAllChildren();
          this.lbl_page.string = "Trang:" + this._curPage;
          for (var i = 0; i < dataList.length; ++i) {
            var item = instantiate(this.recordPrefab);
            item.active = true;
            item.parent = this.content;
            var tempData = dataList[i];
            var spr_line = find("spr_line", item);
            if (spr_line) {
              if (i == dataList.length - 1) {
                spr_line.active = false;
              }
            }
            var lbl_time = find("time_scond", item).getComponent(Label); //下注时间
            var lbl_date = find("time_date", item).getComponent(Label); //下注时间
            var date = Common.getTimeFormat(tempData.CreateAt);
            lbl_time.string = date.time;
            lbl_date.string = date.date;
            var lbl_name = find("lbl_name", item).getComponent(Label); //名字
            lbl_name.string = tempData.NickName;
            var lbl_bet = find("lbl_bet", item).getComponent(Label); //底注
            lbl_bet.string = "" + Common.numFormat(tempData.BetV);

            //            // let lbl_bonus = cc.find("lbl_bonus", item).getComponent(cc.Label); //底注
            //            // lbl_bonus.string = "" + Common.numFormat(tempData.Bonus);

            //            // let lbl_result = cc.find("lbl_result", item).getComponent(cc.Label); //状态
            //            // lbl_result.string = "Nổ hũ";

            var lbl_result = find("lbl_bigmoney", item).getComponent(Label); //盈利
            lbl_result.string = Common.numFormat(tempData.GetJackpot);
            if (tempData.JackpotType === "silverJackpot") {
              item.getChildByName("spr_silver").active = true;
              item.getChildByName("spr_gold").active = false;
            } else {
              item.getChildByName("spr_silver").active = false;
              item.getChildByName("spr_gold").active = true;
            }
          }
        }
        //    /**
        //     * 点击上一页
        //     */
        ;

        _proto.onClickPre = function onClickPre() {
          this._curPage = this._curPage - 1;
          if (this._curPage < 1) {
            this._curPage = 1;
          }
          var start = (this._curPage - 1) * 5;
          NetManager.instance.sendOnlineData(LsGameDef.eProto.getBigPoolList, {
            Offset: start,
            PageSize: 5
          });
        }
        //    /**
        //     * 点击下一页
        //     */
        ;

        _proto.onClickNext = function onClickNext() {
          this._curPage = this._curPage + 1;
          var start = (this._curPage - 1) * 5;
          if (start > this._total) {
            this._curPage -= 1;
            return;
          }
          NetManager.instance.sendOnlineData(LsGameDef.eProto.getBigPoolList, {
            Offset: start,
            PageSize: 5
          });
        };
        _proto.removeEvent = function removeEvent() {
          EventManager.instance.off(LsGameDef.eProto.getBigPoolList, this.updateView, this);
        };
        _proto.onDestroy = function onDestroy() {
          this.removeEvent();
        };
        return LsBigRecord;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn_pre", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn_next", [_dec7], {
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

System.register("chunks:///_virtual/LsFbGameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './DataManager.ts', './MainManager.ts', './LsGameDef.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, SpriteFrame, sp, Prefab, AudioClip, assetManager, director, v3, Tween, Button, find, tween, Sprite, instantiate, RichText, sys, Component, i18n, UserKey, MainManager, LsGameDef, Common;
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
      sp = module.sp;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      assetManager = module.assetManager;
      director = module.director;
      v3 = module.v3;
      Tween = module.Tween;
      Button = module.Button;
      find = module.find;
      tween = module.tween;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      RichText = module.RichText;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      UserKey = module.UserKey;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      LsGameDef = module.LsGameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40;
      cclegacy._RF.push({}, "8935ba5V4RP9pcNLT8eyqco", "LsFbGameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LsFbGameScene = exports('default', (_dec = ccclass("LsFbGameScene"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(SpriteFrame), _dec18 = property(sp.SkeletonData), _dec19 = property(Prefab), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(AudioClip), _dec25 = property(AudioClip), _dec26 = property(AudioClip), _dec27 = property(AudioClip), _dec28 = property(AudioClip), _dec29 = property(AudioClip), _dec30 = property(AudioClip), _dec31 = property(AudioClip), _dec32 = property(AudioClip), _dec33 = property(AudioClip), _dec34 = property(AudioClip), _dec35 = property(AudioClip), _dec36 = property(AudioClip), _dec37 = property(Node), _dec38 = property(Prefab), _dec39 = property(SpriteFrame), _dec40 = property(Node), _dec41 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsFbGameScene, _Component);
        function LsFbGameScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._viewManager = void 0;
          _this._dataManager = void 0;
          _this._audioManager = void 0;
          _this._buddle = void 0;
          _initializerDefineProperty(_this, "coinNum", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseNum", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tottalNum", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dpoolGold", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xPoolGold", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runTypeButton", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BaseLayer", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "beishu", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addBtn", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jianBtn", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseBtn", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startBtnBg1", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startBtnBg2", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "items", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemspFrame", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skeletonData", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemAction", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLayer", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLayerBg", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showTig", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djLayer", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildSounds", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildFb", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yingbiList", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yingbi", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zjSoundList", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djStart", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djEnd", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djFbStart", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djFbEnd", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gunlun", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speed", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freebg", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totaljs", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalLayer", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djLz", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jsSps", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_quick", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemsBgFrame", _descriptor40, _assertThisInitialized(_this));
          _this.spName = {
            "9": 0,
            "10": 1,
            J: 2,
            Q: 3,
            K: 4,
            A: 5,
            PACKET: 6,
            TORTOISE: 8,
            FISH: 7,
            LION: 9,
            PHOENIX: 10,
            WILD: 12,
            SCATTER: 11
          };
          _this.musicType = {
            win1: 0,
            win2: 1,
            win3: 2,
            win4: 3,
            win5: 4,
            bet: 5,
            bet3: 6,
            bet4: 7,
            bet5: 8,
            bet6: 9,
            bet10: 10
          };
          _this.musicTime = {
            win1: 0.8,
            win2: 0.9,
            win3: 1,
            win4: 2,
            win5: 2.2,
            bet: 2.8,
            bet3: 5,
            bet4: 7.2,
            bet5: 8.6,
            bet6: 10,
            bet10: 16
          };
          _this.fubenId = void 0;
          _this.spData = {
            "9": {
              id: 0,
              ani1: "9_kong",
              ani2: "9",
              ani3: "9",
              timescale: 1
            },
            "10": {
              id: 0,
              ani1: "10_kong",
              ani2: "10",
              ani3: "10",
              timescale: 1
            },
            J: {
              id: 0,
              ani1: "J_kong",
              ani2: "J",
              ani3: "J",
              timescale: 1
            },
            Q: {
              id: 0,
              ani1: "Q_kong",
              ani2: "Q",
              ani3: "Q",
              timescale: 1
            },
            K: {
              id: 0,
              ani1: "K_kong",
              ani2: "K",
              ani3: "K",
              timescale: 1
            },
            A: {
              id: 0,
              ani1: "A_kong",
              ani2: "A",
              ani3: "A",
              timescale: 1
            },
            PACKET: {
              id: 6,
              ani1: "hb_kong",
              ani2: "hb",
              ani3: "hb",
              timescale: 1
            },
            TORTOISE: {
              id: 7,
              ani1: "quite",
              ani2: "idle",
              ani3: "idle",
              timescale: 1
            },
            FISH: {
              id: 8,
              ani1: "quite",
              ani2: "idle",
              ani3: "idle",
              timescale: 1
            },
            LION: {
              id: 9,
              ani1: "quite",
              ani2: "idle",
              ani3: "idle",
              timescale: 1
            },
            PHOENIX: {
              id: 10,
              ani1: "quite",
              ani2: "idle",
              ani3: "idle",
              timescale: 1
            },
            WILD: {
              id: 12,
              ani1: "kong",
              ani2: "ani",
              ani3: "ani",
              timescale: 1
            },
            SCATTER: {
              id: 11,
              ani1: "kong",
              ani2: "tubiao1",
              ani3: "tubiao1",
              timescale: 1
            }
          };
          _this.fuben = {
            Nomal: 17,
            WHITE: 12,
            RED: 14,
            BLACK: 13,
            PURPLE: 15,
            BLUE: 16,
            GOLD: 17,
            GREEN: 18
          };
          _this.fubenBg = {
            WHITE: 0,
            RED: 1,
            BLACK: 2,
            PURPLE: 3,
            BLUE: 4,
            GOLD: 5,
            GREEN: 6
          };
          _this.fubenAniName = {
            WHITE: "white",
            RED: "red",
            BLACK: "black",
            PURPLE: "pink",
            BLUE: "blue",
            GOLD: "yellow",
            GREEN: "green"
          };
          _this.itemBg = {
            PACKET: 0,
            TORTOISE: 3,
            FISH: 4,
            LION: 2,
            PHOENIX: 1
          };
          //    // LIFE-CYCLE CALLBACKS:
          _this._serverId = void 0;
          _this._coinList = void 0;
          //当前银币选项
          _this._baseList = void 0;
          // 当前基础分选项
          _this._zzlist = void 0;
          //当前转轴表
          _this._posList = null;
          // 当前画面位置
          _this._curPageData = [];
          // 根据当前画面位置得出当前每个画面得值
          _this._resultData = null;
          // 结算数据
          _this.runtype = 1;
          //转动方式(两种：一种一列一列出结果，一种所有列同时出)
          _this.curtype = 1;
          //转动方式(两种：一种一列一列出结果，一种所有列同时出)
          _this.curCoin = 50;
          _this.curCoinIndex = 0;
          _this.curBase = 10;
          _this._isStart = false;
          _this._startPosList = [];
          _this.runtime = 0;
          _this._gameType = "Nomal";
          _this._actionList = [];
          //一组一组的中将播放 {ani:[],aniName="",timescale:1} aniName 特效名字
          _this._actionList5 = [];
          //五连效果的
          _this._actionWild = [];
          //wild动画
          _this._acIndex = 0;
          _this._curShowItem = [];
          _this._rowIndex = 0;
          _this._step = 50;
          _this.speedShowRe = false;
          _this._stepTime = 18;
          _this._stepNum = 0;
          _this.isMusic = true;
          _this.curTotalNum = 0;
          _this.lianxuIndex = 0;
          _this._isAuto = false;
          _this._changeAuto = false;
          _this._enterData = null;
          _this._FreeTimes = 0;
          _this._curScore = 0;
          _this.curFreeBag = 0;
          _this.djackPotNum = 0;
          _this.xJackPotNum = 0;
          _this.stepDJackNum = 0;
          _this.stepXJackNum = 0;
          _this._tryDpools = [];
          //试玩 大奖池
          _this._tryXpools = [];
          //试玩 小奖池
          _this.reOpen = false;
          _this.reOpenTime = 0;
          _this.reOpenTryTimes = 0;
          _this.audioId = 0;
          return _this;
        }
        var _proto = LsFbGameScene.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._configManager = this._mainManager.getConfigManager();
          this._eventManager = this._mainManager.getEventManager();
          this._netManager = this._mainManager.getNetManager();
          this._viewManager = this._mainManager.getViewManager();
          this._dataManager = this._mainManager.getDataManager();
          this._audioManager = this._mainManager.getAudioManager();
          this._buddle = assetManager.getBundle("LsGame");
          this._audioManager.playGameMusic(this.freebg, true);
          this._viewManager._currentScene = director.getScene().getChildByName("Canvas");
          this._dataManager.setfree(true);
          this._enterData = this._viewManager.getGameData();
          this._netManager.waitServiceSendData();
          if (LsGameDef.constante.tryGame == false) {
            this.getInfoData();
          } else {
            this.getTryInfoData();
          }
          this.initEvent();
          this.initGame();
          if (LsGameDef.constante.tryGame == true) {
            this.initTryGame();
          }
          this.scheduleOnce(this.runFree, 1);
        };
        _proto.initTryGame = function initTryGame() {
          this._tryDpools = this._enterData.JieSuanDataTrialFree.TrialData.GoldJackpot;
          this._tryXpools = this._enterData.JieSuanDataTrialFree.TrialData.SilverJackpot;
          this.curCoin = this._enterData.JieSuanDataTrialFree.CoinNum;
          this.curBase = this._enterData.JieSuanDataTrialFree.CoinValue;
          this._coinList = this._enterData.CoinNum;
          this.curCoinIndex = this.getCurCoinIndex(this.curCoin);
          this.coinNum.string = this.curCoin + "";
          this.baseNum.string = this.curBase + "";
          this.tottalNum.string = Common.ChangeMoneyShow(this.curCoin * this.curBase, 1);
          this.dpoolGold.string = Common.numFormat(this._tryDpools[this.curCoinIndex]);
          this.xPoolGold.string = Common.numFormat(this._tryXpools[this.curCoinIndex]);
        };
        _proto.getCurCoinIndex = function getCurCoinIndex(data) {
          var index = 0;
          for (var i = 0; i < this._coinList.length; i++) {
            if (this._coinList[i] == data) {
              index = i;
            }
          }
          return index;
        };
        _proto.initEvent = function initEvent() {
          //        // 监听网络协议
          this._eventManager.on(LsGameDef.eProto.getInfo, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.getRoomData, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.exitGame, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.checkInRoom, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.showResultFree, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.runFreeGame, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.runTryFree, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.getJackpot, this.recvData, this);
          this._eventManager.on(this._configManager.protocolHall.getWallet, this.recvData, this);
          this._eventManager.on(this._configManager.protocolHall.pushWallet, this.recvData, this);
          this._eventManager.on(this._configManager.protocolHall.login, this.recvData, this); //断线重连

          //        // 监听按钮
          this._eventManager.on(this._configManager.protocolLs.runButton, this.runButton, this); //开始游戏
          this._eventManager.on(this._configManager.protocolLs.changeBase, this.changeBase, this); //改变底分
          this._eventManager.on(this._configManager.protocolLs.changeCoin, this.changeCoin, this); //改变硬币数
          this._eventManager.on(this._configManager.protocolLs.showBase, this.showBaseLayer, this); //改变硬币数
          this._eventManager.on(this._configManager.protocolLs.changetype, this.changeType, this); //切换运行type

          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.on(this._configManager.eventTransform.disConnect, this.disconnect, this); //断线

          //        //传输事件
          this._eventManager.on("auto", this.changeAutoType, this); //切换自动
        };

        _proto.disconnect = function disconnect() {
          Common.showNetTips();
        };
        _proto.changeAutoType = function changeAutoType() {
          if (this._isAuto == false && this._isStart == false) {
            this._isAuto = true;
            this._changeAuto = true;
            this.startBtnBg1.getComponent(sp.Skeleton).setAnimation(0, "kaishi", true);
            this.runButton("auto");
          }
        };
        _proto.clearStatus = function clearStatus() {
          this.aniLayerBg.active = false;
          this._curScore = this._resultData == null ? this._curScore : this._resultData.TotalBackScore;
          this.scoreNum.string = Common.numFormat(this._curScore);
          this.scoreNum.node.scale = v3(1, 1, 1);
          Tween.stopAllByTarget(this.scoreNum.node);
          this._isStart = true;
          this.beishu.active = false;
          this.addBtn.getComponent(Button).interactable = false;
          this.jianBtn.getComponent(Button).interactable = false;
          this.baseBtn.getComponent(Button).interactable = false;
          this.runtime = 0;
          this._resultData = null;
          this.djLayer.active = false;
          this.showTig.active = false;
          this._rowIndex = 0;
          this.curtype = this.runtype;
          this._step = 50;
          this.speedShowRe = false;
          this.isMusic = true;
          this.curTotalNum = 0;
          this.lianxuIndex = 0;
          this._audioManager.stopAllEffect();
          this.unscheduleAllCallbacks(); //清理所有定时器

          this.showPotNum(false);
          this.clearSpine();
          this.resumeItems();
        };
        _proto.clearSpine = function clearSpine() {
          for (var i = this._actionList.length - 1; i >= 0; i--) {
            var data = this._actionList[i];
            for (var j = data.ani.length - 1; j >= 0; j--) {
              data.ani[j].removeFromParent();
              data.ani[j].destroy();
              delete data.ani[j];
            }
            delete this._actionList[i];
          }
          for (var _i = this._actionWild.length - 1; _i >= 0; _i--) {
            this._actionWild[_i].removeFromParent();
            this._actionWild[_i].destroy();
            delete this._actionWild[_i];
          }
          this._actionList = [];
          this._actionList5 = [];
          this._actionWild = [];
        };
        _proto.resumeItems = function resumeItems() {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = true;
            this.items[i].getChildByName("jackPot").active = false;
            this._curShowItem[i] = this.items[i];
          }
        };
        _proto.getTryInfoData = function getTryInfoData() {
          this._curScore = this._enterData.JieSuanDataTrialFree.TotalBackScore;
          this._FreeTimes = this._enterData.JieSuanDataTrialFree.FreeRemainTimes;
          this._gameType = this._enterData.FreeType;
          this._serverId = this._enterData.ServerId;
          this._zzlist = this._enterData.ReelsListTrialFree;
          this._posList = this._enterData.InitSymbolFree;
          this.curFreeBag = this._enterData.JieSuanDataTrialFree.FreeGameTimes;
          if (this.curFreeBag > 0) {
            this.showFreeTimes();
          }
        };
        _proto.getInfoData = function getInfoData() {
          this._curScore = this._enterData.JieSuanDataFree.TotalBackScore;
          this._FreeTimes = this._enterData.JieSuanDataFree.FreeRemainTimes;
          this._zzlist = this._enterData.ReelsListFree;
          this._gameType = this._enterData.FreeType;
          this._serverId = this._enterData.ServerId;
          this._posList = this._enterData.InitSymbolFree;
          this.curFreeBag = this._enterData.JieSuanDataFree.FreeGameTimes;
          if (this.curFreeBag > 0) {
            this.showFreeTimes();
          }
        };
        _proto.runFree = function runFree() {
          if (this._FreeTimes > 0) {
            this._FreeTimes = this._FreeTimes - 1;
            find("Canvas/fbim1/FreeTimes").getComponent(Label).string = this._FreeTimes + "";
            this.runButton("free");
          } else {
            this.showTotalResult();
          }
        };
        _proto.showTotalResult = function showTotalResult() {
          if (!this._resultData) {
            this._viewManager.changeScene("LsGameScene", function () {}, function () {}, false);
            return;
          }
          this.totalLayer.active = true;
          this.totalLayer.getChildByName("bg").getChildByName("totalScore").getComponent(Label).string = this._resultData.TotalBackScore;
          this._audioManager.playOneShot(this.totaljs);
          var self = this;
          this.scheduleOnce(function () {
            if (self._resultData.FreeGameTimes > 0) {
              self.enterFbScene();
            } else {
              self._viewManager.changeScene("LsGameScene", function () {}, function () {}, false);
            }
          }, 3);
        };
        _proto.runButton = function runButton(data) {
          if (data != "free" && this._isStart == false) {
            this.runFree();
            return;
          }
          if (this._isStart == false) {
            //            //没有开始滚动时
            this.clearStatus();
            this.startBtnBg2.active = true;
            this.startBtnBg2.getComponent(sp.Skeleton).setAnimation(0, "BAMDEDUNG_shanguang", false);
            var self = this;
            this.startBtnBg2.getComponent(sp.Skeleton).setCompleteListener(function () {
              self.startBtnBg2.active = false;
            });
            this.startAni();
            this.doingBet();
          } //已经开始滚动
          else {
            Common.showLog("已经开始滚动");
            if (this._resultData != null) {
              this.isMusic = false;
              if (this.curtype == 1) {
                this.runtime = 1;
                this.speedShowRe = true;
              } else {
                this.runtime = 1;
              }
            }
          }
        };
        _proto.startAni = function startAni() {
          this.reOpen = true;
          if (this.runtype == 2) {
            //            //快速滚动
            this.schedule(this.runItems, 0.01);
          } else {
            this.schedule(this.runItems2, 0.01);
          }
        };
        _proto.runItems2 = function runItems2(dt) {
          this.runtime = this.runtime + 0.01;
          for (var i = 0; i < this.items.length; i++) {
            var col = i % 5;
            if (col > this._rowIndex - 1) {
              this.items[i].setPosition(this.items[i].getPosition().x, this.items[i].getPosition().y - this._step);
              if (i == 4) {
                if (this.items[i].getPosition().y <= this._startPosList[5].y) {
                  this.reSetItem();
                }
              }
            }
          }
          if (this.runtime >= 0.6 && this.curtype == 1) {
            if (this._resultData != null) {
              this.runtime = 0.3;
              this._step = 50;
              this._rowIndex = this._rowIndex + 1;
              this._audioManager.playSound(this.gunlun, false);
              this.drawSPByRowData(null); //绘制一列
              this.node_quick.active = false;
              if (this.lianxuIndex == 2 && this.speedShowRe == false) {
                this.runtime = -1;
                this._step = 80;
                this.node_quick.active = true;
              }
              if (this._rowIndex >= 5 || this.speedShowRe == true) {
                if (this._rowIndex + 1 <= 5) {
                  for (var i = this._rowIndex + 1; i <= 5; i++) {
                    this.drawSPByRowData(i);
                  }
                }
                this._posList = this._resultData.ResultPositions;
                var that = this;
                this.scheduleOnce(function () {
                  that.showResult(that.isMusic);
                }, 0.2);
                this.unschedule(this.runItems2);
              }
            }
          }
        };
        _proto.runItems = function runItems(dt) {
          this.runtime = this.runtime + 0.01;
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].setPosition(this.items[i].position.x, this.items[i].getPosition().y - 50);
            if (i == 0) {
              if (this.items[i].getPosition().y <= this._startPosList[5].y) {
                this.reSetItem();
              }
            }
          }
          if (this.runtime >= 0.5) {
            if (this._resultData != null) {
              this._posList = this._resultData.ResultPositions;
              this.drawSPByData2(); //绘制最终结果图片
              var that = this;
              this._audioManager.playSound(this.gunlun, false);
              this.scheduleOnce(function () {
                that.showResult(that.isMusic);
              }, 0.2);
              this.unschedule(this.runItems);
            }
          }
        };
        _proto.update = function update(dt) {
          if (this.reOpen) {
            this.checkReOpen(dt);
          }
        };
        _proto.doingBet = function doingBet() {
          if (LsGameDef.constante.tryGame == false) {
            var procol = this._serverId + "/" + LsGameDef.eProto.runFreeGame.split("/")[1];
            this._netManager.sendOnlineData(procol, {
              action: "HD_SpinFree"
            });
          } else {
            var _procol = this._serverId + "/" + LsGameDef.eProto.runTryFree.split("/")[1];
            this._netManager.sendOnlineData(_procol, {
              action: "HD_SpinTrialFree"
            });
          }
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
          for (var i = 0; i < this._posList.length; i++) {
            if (this.curtype == 2 || this.curtype == 1 && i > this._rowIndex - 1) {
              if (this._posList[i] == 0) {
                this._posList[i] = this._zzlist[i].length - 1;
              } else {
                this._posList[i] = this._posList[i] - 1;
              }
            }
          }
        };
        _proto.getColData = function getColData(data, curindex //根据卷轴位置 获取当前每个点的图案id
        ) {
          var curdata = [];
          var value1 = data;
          var value0 = value1 == 0 ? this._zzlist[curindex - 1].length - 1 : value1 - 1;
          var value2 = value1 + 1 == this._zzlist[curindex - 1].length ? 0 : value1 + 1;
          var value3 = value2 + 1 == this._zzlist[curindex - 1].length ? 0 : value2 + 1;
          curdata.push(this._zzlist[curindex - 1][value0]);
          curdata.push(this._zzlist[curindex - 1][value1]);
          curdata.push(this._zzlist[curindex - 1][value2]);
          curdata.push(this._zzlist[curindex - 1][value3]);
          return curdata;
        };
        _proto.drawSPByData1 = function drawSPByData1() {
          //        //滚动时  根据卷轴位置绘制 当前显示图案 可能只显示4 3 2 1列
          this._curPageData = this.getPicturesData();
          for (var i = 0; i < this._curPageData.length; i++) {
            if (i % 5 > this._rowIndex - 1) {
              this.items[i].active = true;
              this.setItemSprite(this.items[i], this._curPageData[i]);
              this.items[i].setPosition(this._startPosList[i].x, this._startPosList[i].y);
            }
          }
        };
        _proto.drawSPByData2 = function drawSPByData2() {
          //        //快速模式时 结束滚动重新绘制
          this._curPageData = this.getPicturesData();
          for (var i = 0; i < this._curPageData.length; i++) {
            this.items[i].active = true;
            this.setItemSprite(this.items[i], this._curPageData[i]);
            this.items[i].setPosition(this._startPosList[i].x, this._startPosList[i].y);
            tween(this.items[i]).to(0.1, {
              position: v3(this._startPosList[i].x, this._startPosList[i].y - 50)
            }).to(0.1, {
              position: v3(this._startPosList[i].x, this._startPosList[i].y)
            }).start();
          }
        };
        _proto.drawSPByRowData = function drawSPByRowData(curindex //根据卷轴位置绘制 一列的图案 //一列一列
        ) {
          var curIdx = curindex == null ? this._rowIndex : curindex;
          var data = this.getColData(this._resultData.ResultPositions[curIdx - 1], curIdx);
          var haveYb = false;
          var self = this;
          for (var i = 0; i < data.length; i++) {
            if (i > 0 && data[i] == "SCATTER") {
              haveYb = true;
            }
            var index = 5 * i + curIdx - 1;
            this.setItemSprite(this.items[index], data[i]);
            this.items[index].setPosition(this._startPosList[index].x, this._startPosList[index].y);
            tween(this.items[index]).to(0.1, {
              position: v3(this._startPosList[index].x, this._startPosList[index].y - 50)
            }).to(0.1, {
              position: v3(this._startPosList[index].x, this._startPosList[index].y)
            }).start();
          }
          if (haveYb == true && this.lianxuIndex != -1 && this.speedShowRe == false) {
            this.lianxuIndex = this.lianxuIndex + 1;
            this._audioManager.playSound(this.yingbiList[this.lianxuIndex - 1], false);
            if (this.lianxuIndex == 2) {
              this.scheduleOnce(function () {
                self._audioManager.playSound(self.speed, false);
              }, 0.5);
            }
          }
          if (this.lianxuIndex != -1 && this.speedShowRe == false && haveYb == false) {
            this.lianxuIndex = -1;
          }
        };
        _proto.setItemSprite = function setItemSprite(item, data) {
          var spritef;
          var childDragon = item.getChildByName("dragon");
          if (data == "WILD") {
            if (childDragon) {
              childDragon.active = true;
              var ske = childDragon.getComponent(sp.Skeleton);
              ske.setAnimation(0, this.spData.WILD.ani1, true);
            } else {
              var node = new Node();
              node.name = "dragon";
              var _ske = node.addComponent(sp.Skeleton);
              _ske.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.PRIVATE_CACHE);
              item.addChild(node);
              _ske.skeletonData = this.skeletonData[this.spData.WILD.id];
              _ske.setAnimation(0, this.spData.WILD.ani1, true);
            }
            spritef = this.itemspFrame[this.fuben[this._gameType]];
          } else {
            spritef = this.itemspFrame[this.spName[data]];
            if (childDragon) {
              childDragon.active = false;
            }
          }
          item.getComponent(Sprite).spriteFrame = spritef;
        };
        _proto.showJackPot = function showJackPot() {
          if (this._resultData.JackpotPositions == null) {
            return;
          }
          for (var i = 0; i < this._resultData.JackpotPositions.length; i++) {
            var keys = Object.keys(this._resultData.JackpotPositions[i]);
            for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
              var key = _keys[_i2];
              var index = (parseInt(key) + 1) * 5 + this._resultData.JackpotPositions[i][key];
              this._curShowItem[index].getChildByName("jackPot").active = true;
            }
          }
        };
        _proto.playEffect = function playEffect() {
          if (this._resultData.Result == null) {
            return;
          }
          this.aniLayerBg.active = true;
          for (var i = 0; i < this._resultData.Result.length; i++ //图片替换成动画
          ) {
            var data = this._resultData.Result[i];
            var redata = {
              ani: [],
              aniName: "",
              timescale: 1,
              picName: data.Symbol,
              value: data.CoinValue,
              aniType: 1,
              lineType: data.LineType,
              SymbolScore: data.SymbolScore
            };
            var aniindex = data.LineType == 5 ? "ani3" : "ani2";
            redata.aniName = this.spData[data.Symbol][aniindex];
            redata.timescale = this.spData[data.Symbol].timescale;
            for (var j = 0; j < data.SymbolPositions.length; j++) {
              var index = 0;
              var keys = Object.keys(data.SymbolPositions[j]);
              for (var _i3 = 0, _keys2 = keys; _i3 < _keys2.length; _i3++) {
                var key = _keys2[_i3];
                index = (parseInt(key) + 1) * 5 + data.SymbolPositions[j][key];
              }
              var item = instantiate(this.itemAction);
              this.aniLayer.addChild(item);
              item.setPosition(this.items[index].getPosition().x, this.items[index].getPosition().y);
              this.items[index].active = false;
              item.getChildByName("item").getComponent(sp.Skeleton).skeletonData = this.skeletonData[this.spData[data.Symbol].id];
              var bg = item.getChildByName("bg");
              if (this.itemBg[data.Symbol] != undefined) {
                bg.getComponent(Sprite).spriteFrame = this.itemsBgFrame[this.itemBg[data.Symbol]];
                bg.active = true;
              }
              item.getChildByName("item").getComponent(sp.Skeleton).setAnimation(0, redata.aniName, true);
              redata.ani.push(item);
              this._curShowItem[index] = item;
            }
            if (data.LineType == 5 && (data.Symbol == "PACKET" || data.Symbol == "TORTOISE" || data.Symbol == "FISH" || data.Symbol == "LION" || data.Symbol == "PHOENIX")) {
              redata.aniType = 2; //5连 带特效的
              this._actionList5.push(redata);
            }
            if (data.Symbol == "SCATTER") {
              redata.aniType = 2; //硬币一直转
              this._actionList5.push(redata);
            }
            this._actionList.push(redata);
          }
          if (this._resultData.WildPositions != null) {
            for (var i = 0; i < this._resultData.WildPositions.length; i++ //wild 动画
            ) {
              var _index = 0;
              var _data = this._resultData.WildPositions[i];
              var _keys3 = Object.keys(_data);
              for (var _i4 = 0, _keys4 = _keys3; _i4 < _keys4.length; _i4++) {
                var _key2 = _keys4[_i4];
                _index = (parseInt(_key2) + 1) * 5 + _data[_key2];
              }
              var _item = instantiate(this.itemAction);
              this.aniLayer.addChild(_item);
              _item.setPosition(this.items[_index].getPosition().x, this.items[_index].getPosition().y);
              this.items[_index].active = false;
              _item.getChildByName("item").getComponent(sp.Skeleton).timeScale = 1;
              _item.getChildByName("item").getComponent(sp.Skeleton).skeletonData = this.skeletonData[this.spData.WILD.id];
              _item.getChildByName("item").getComponent(sp.Skeleton).setAnimation(0, this.spData.WILD.ani2, true);
              var itembg = _item.getChildByName("bg");
              itembg.getComponent(Sprite).spriteFrame = this.itemspFrame[this.fuben[this._gameType]];
              itembg.active = true;
              this._actionWild.push(_item);
              this._curShowItem[_index] = _item;
            }
          }
          for (var i = 0; i < this._actionList5.length; i++ //5连动画
          ) {
            var _data2 = this._actionList5[i];
            var _keys5 = Object.keys(_data2.ani);
            for (var _i5 = 0, _keys6 = _keys5; _i5 < _keys6.length; _i5++) {
              var _key3 = _keys6[_i5];
              _data2.ani[_key3].getChildByName("item").getComponent(sp.Skeleton).setAnimation(0, _data2.aniName, true);
            }
          }
          this.runItemAction();
          this.showJackPot();
        };
        _proto.runItemAction = function runItemAction() {
          this._acIndex = 0;
          this.startRun();
          this.schedule(this.startRun, 2);
        };
        _proto.startRun = function startRun() {
          //        //  {ani:[],aniName:"",timescale:1,picName:data.Symbol,value:data.CoinValue,aniType:1,lineType:data.LineType,SymbolScore:data.SymbolScore};

          var data = this._actionList[this._acIndex];
          if (this.showTig.active == false || this._actionList.length > 1) {
            this.showTig.active = true;
            var beishu = this._resultData.WildTimes > 1 ? this._resultData.WildTimes : 1;
            var totalNum = beishu * data.value * data.SymbolScore;
            var baseNum = beishu * data.SymbolScore;
            var richtext = this.showTig.getChildByName("zhongText").getComponent(RichText);
            richtext.string = "";
            if (data.picName == "SCATTER") {
              richtext.string = richtext.string + "<color=#6f4209>" + data.lineType + " " + "</c>" + "<img src=" + "'" + data.picName + "'" + " width=30 height=26/>" + "<color=#6f4209>" + " trúng " + Common.numFormat(data.SymbolScore) + "</color>";
            } else {
              if (this._resultData.WildTimes > 1) {
                //                    //data.picName + "width=50 height=46   <img src='K'
                richtext.string = richtext.string + "<color=#6f4209>" + data.lineType + " " + "</c>" + "<img src=" + "'" + data.picName + "'" + " width=30 height=26/>" + "<color=#6f4209>" + " trúng " + Common.numFormat(data.SymbolScore) + " " + "x" + " " + beishu + " " + "=" + " " + Common.numFormat(baseNum) + " " + "x" + " " + Common.numFormat(data.value) + " " + "=" + " " + Common.numFormat(totalNum) + "</color>";
              } else {
                richtext.string = richtext.string + "<color=#6f4209>" + data.lineType + " " + "</c>" + "<img src=" + "'" + data.picName + "'" + " width=30 height=26/>" + "<color=#6f4209>" + " trúng " + Common.numFormat(data.SymbolScore) + " " + "=" + " " + Common.numFormat(baseNum) + " " + "x" + " " + Common.numFormat(data.value) + " " + "=" + " " + Common.numFormat(totalNum) + "</color>";
              }
            }
          }
          if (data.aniType == 1) {
            var _loop = function _loop() {
              var ske = data.ani[i].getChildByName("item").getComponent(sp.Skeleton);
              ske.timeScale = 1.5;
              ske.setAnimation(0, data.aniName, false);
              var light = data.ani[i].getChildByName("light");
              light.active = true;
              ske.setCompleteListener(function () {
                light.active = false;
              });
            };
            for (var i = 0; i < data.ani.length; i++) {
              _loop();
            }
          }
          this._acIndex = this._acIndex + 1;
          if (this._acIndex >= this._actionList.length) {
            this._acIndex = 0;
          }
        };
        _proto.resumeButtonStatus = function resumeButtonStatus() {
          this._isStart = false;
          this.addBtn.getComponent(Button).interactable = false;
          this.jianBtn.getComponent(Button).interactable = false;
          this.baseBtn.getComponent(Button).interactable = false;
          //        // if(this._isAuto==false)
          //        // {
          //        //     this.startBtnBg1.getComponent(sp.Skeleton).setAnimation(0,"weikaishi",true);
          //        // }
        };

        _proto.showResult = function showResult(data) {
          this.resumeButtonStatus();
          if (this._resultData.WildTimes > 1) {
            this.updateBeishu(this._resultData.WildTimes);
          }
          this.playEffect();
          if (this._resultData.Result != null && data == false) {
            //            //中途强制点击 并且中将
            this.scoreNum.string = Common.numFormat(this._resultData.TotalBackScore);
            this.actScore();
            this.autoRunFree();
          }
          if (this._resultData.Result != null) {
            this.playSound(data);
          } else {
            this.autoRunFree();
          }
          if (this._resultData.FreeGameTimes > 0) {
            this.curFreeBag = this._resultData.FreeGameTimes;
            this.showFreeTimes();
          }
          if (LsGameDef.constante.tryGame == true) {
            this.updateJackPot();
          }
        };
        _proto.updateJackPot = function updateJackPot() {
          this._tryDpools = this._resultData.TrialData.GoldJackpot;
          this._tryXpools = this._resultData.TrialData.SilverJackpot;
          this.dpoolGold.string = Common.numFormat(this._tryDpools[this.curCoinIndex]);
          this.xPoolGold.string = Common.numFormat(this._tryXpools[this.curCoinIndex]);
        };
        _proto.showFreeTimes = function showFreeTimes() {
          var bag = find("Canvas/bagFree");
          bag.getChildByName("times").getComponent(Label).string = "x" + this.curFreeBag;
          bag.active = true;
        };
        _proto.autoRunFree = function autoRunFree() {
          this.scheduleOnce(this.runFree, 0.5);
        };
        _proto.autoRun = function autoRun() {
          if (this._isAuto == true) {
            var self = this;
            this.scheduleOnce(function () {
              self.runButton("auto");
            }, 0.3);
          }
        };
        _proto.addScore = function addScore() {
          //        // if (this._resultData.MusicType == "bet40") {
          //        //     this._stepTime = 15;
          //        //     let step = Math.floor(this._resultData.TotalBackScore / (this._stepTime * 33));
          //        //     this._stepNum = Math.floor((this.curCoin * this.curBase * 40) / (this._stepTime * 33));
          //        //     if (step / this._stepNum >= 2) {
          //        //         this._stepTime = 30;
          //        //         this._stepNum = Math.floor(this._resultData.TotalBackScore / (this._stepTime * 33));
          //        //     }
          //        // } else {
          //        //     this._stepNum = Math.floor((this._resultData.TotalBackScore - this._curScore) / (this._stepTime * 33));
          //        // }

          Tween.stopAllByTarget(this.scoreNum.node);
          this.scoreNum.node.scale = v3(1, 1, 1);
          this._stepNum = Math.floor((this._resultData.TotalBackScore - this._curScore) / 66);
          this.curTotalNum = this._curScore;
          this.schedule(this.addscoreNum, 0.03);
        };
        _proto.actScore = function actScore() {
          tween(this.scoreNum.node).repeatForever(tween(this.scoreNum.node).to(0.3, {
            scale: v3(0.9, 0.9, 1)
          }).to(0.3, {
            scale: v3(1.1, 1.1, 1)
          }).start()).start();
        };
        _proto.addscoreNum = function addscoreNum() {
          var self = this;
          this.curTotalNum = this.curTotalNum + this._stepNum;
          if (this.curTotalNum >= this._resultData.TotalBackScore) {
            this.curTotalNum = this._resultData.TotalBackScore;
            this.scoreNum.string = Common.numFormat(this.curTotalNum);
            this.unschedule(this.addscoreNum);
            this.actScore();
            if (this._resultData.MusicType == "bet40") {
              //                //大奖音效
              if (this.audioId != 0) {
                this.audioId = 0;
                this._audioManager.stopSound();
              }
              if (this._gameType == "Nomal") {
                //                    //正常
                this._audioManager.playOneShot(this.djEnd);
                self.scheduleOnce(function () {
                  self.djLayer.active = false;
                  this.autoRunFree();
                }, 2);
              } //副本
              else {
                this._audioManager.playOneShot(this.djFbEnd);
                self.scheduleOnce(function () {
                  self._audioManager.playGameMusic(self.freebg, true);
                  self.djLayer.active = false;
                  this.autoRunFree();
                }, 2);
              }
            }
          } else {
            this.scoreNum.string = Common.numFormat(this.curTotalNum);
          }
        };
        _proto.enterFbScene = function enterFbScene() {
          this._viewManager.changeScene("LsFbStartScene", function () {}, function () {}, false);
        };
        _proto.playZhongSound = function playZhongSound() {
          var self = this;
          if (this._resultData.MusicType == "bet40") {
            if (this._gameType == "Nomal") {
              //                //
              this.audioId = this._audioManager.playSound(this.djStart, true);
            } //副本大奖
            else {
              // cc.audioEngine.stopMusic();
              this.audioId = this._audioManager.playSound(this.djFbStart, true);
            }
            this.djLayer.active = true;
            this.djLayer.getComponent(sp.Skeleton).setAnimation(0, "eff_baobi_loop3", true);
          } else {
            var stime = this.musicTime[this._resultData.MusicType];
            this._audioManager.playOneShot(this.zjSoundList[this.musicType[this._resultData.MusicType]]);
            self._stepTime = stime;
            self.scheduleOnce(function () {
              self.scoreNum.string = Common.numFormat(self._resultData.TotalBackScore);
              self.unschedule(self.addscoreNum);
              self.autoRunFree();
            }, stime);
          }
          this.addScore();
        };
        _proto.isZhongYb = function isZhongYb() {
          var iszhong = false;
          for (var i = 0; i < this._resultData.Result.length; i++) {
            if (this._resultData.Result[i].Symbol == "SCATTER") {
              iszhong = true;
            }
          }
          return iszhong;
        };
        _proto.playSound = function playSound(data) {
          var self = this;
          if (this._resultData.WildTimes >= 2 && this._resultData.WildTimes < 5) {
            this._audioManager.playOneShot(this.wildFb);
            self.scheduleOnce(function () {
              if (self.isZhongYb()) {
                self._audioManager.playOneShot(self.yingbi);
                self.scheduleOnce(function () {
                  if (data == true) {
                    self.playZhongSound();
                  }
                }, 3);
              } else {
                if (data == true) {
                  self.playZhongSound();
                }
              }
            }, 2);
          } else if (this._resultData.WildTimes >= 5) {
            this._audioManager.playOneShot(this.wildFb);
            self.scheduleOnce(function () {
              if (self.isZhongYb()) {
                self._audioManager.playOneShot(self.yingbi);
                self.scheduleOnce(function () {
                  if (data == true) {
                    self.playZhongSound();
                  }
                }, 3);
              } else {
                if (data == true) {
                  self.playZhongSound();
                }
              }
            }, 2);
          } else {
            if (self.isZhongYb()) {
              self._audioManager.playOneShot(self.yingbi);
              self.scheduleOnce(function () {
                if (data == true) {
                  self.playZhongSound();
                }
              }, 3);
            } else {
              if (data == true) {
                self.playZhongSound();
              }
            }
          }
        };
        _proto.updateBeishu = function updateBeishu(bs) {
          var self = this;
          this._buddle.load("textures/wtimes/w" + this.fubenBg[this._gameType] + bs, SpriteFrame, function (err, beishu) {
            self.beishu.active = true;
            self.beishu.getComponent(Sprite).spriteFrame = beishu;
          });
        };
        _proto.changeType = function changeType() {
          if (this.runtype == 1) {
            this.runtype = 2;
          } else {
            this.runtype = 1;
          }
          this.runTypeButton.getChildByName("tag").active = this.runtype == 2;
        };
        _proto.showBaseLayer = function showBaseLayer() {
          this.BaseLayer.active = true;
        };
        _proto.changeCoin = function changeCoin(data) {
          if (data == "add") {
            this.curCoinIndex = this.curCoinIndex + 1;
            if (this.curCoinIndex >= this._coinList.length) {
              this.curCoinIndex = 0;
            }
          } else {
            if (this.curCoinIndex == 0) {
              this.curCoinIndex = this._coinList.length - 1;
            } else {
              this.curCoinIndex = this.curCoinIndex - 1;
            }
          }
          this.curCoin = this._coinList[this.curCoinIndex];
          this.coinNum.string = this.curCoin + "";
          this.tottalNum.string = Common.ChangeMoneyShow(this.curCoin * this.curBase, 1);
          sys.localStorage.setItem("LsCoin", this.curCoin);
          sys.localStorage.setItem("coinIndex", this.curCoinIndex);
        };
        _proto.changeBase = function changeBase(data) {
          this.BaseLayer.active = false;
          this.curBase = this._baseList[parseInt(data) - 1];
          this.baseNum.string = this.curBase + "";
          this.tottalNum.string = Common.ChangeMoneyShow(this.curCoin * this.curBase, 1);
          sys.localStorage.setItem("LsBase", this.curBase);
        };
        _proto.gameShow = function gameShow() {
          this._netManager.waitServiceSendData();
        };
        _proto.recvData = function recvData(data) {
          switch (data.cmd) {
            case LsGameDef.eProto.getInfo:
              {
                //                //获取serid配置  加入房间
                this._serverId = data.Data.slotLsServerId;
                var procol = this._serverId + "/" + LsGameDef.eProto.enterRoom.split("/")[1];
                this._netManager.sendOnlineData(procol, {
                  action: "HD_Enter"
                });
                break;
              }
            case LsGameDef.eProto.getRoomData:
              {
                //                //加入房间后，获取房间信息
                this._zzlist = data.Data.ReelsList;
                break;
              }
            case LsGameDef.eProto.showResultFree:
              {
                //                // 运行完老虎机后的结果
                this.clearReOpen();
                this._resultData = data.Data;
                break;
              }
            case LsGameDef.eProto.runFreeGame:
            case LsGameDef.eProto.runTryFree:
              {
                //                // 摇的反馈
                Common.showTip(data.ErrMsg);
                this.clearReOpen();
                break;
              }
            case LsGameDef.eProto.getJackpot:
              {
                //                //获取奖池
                this.djackPotNum = data.Data.GoldJackpot;
                this.xJackPotNum = data.Data.SilverJackpot;
                this.showPotNum(false);
                break;
              }
            case LsGameDef.eProto.checkInRoom:
              {
                //                // 检查是否再房间
                Common.closeWait();
                if (data.Data.InGame) {
                  if (this._isStart == true && this._resultData == null) {
                    var _procol2 = this._serverId + "/" + LsGameDef.eProto.runFreeGame.split("/")[1];
                    this._netManager.sendOnlineData(_procol2, {
                      action: "HD_SpinFree"
                    });
                  }
                } else {
                  this.backHall();
                }
                break;
              }
            case LsGameDef.eProto.exitGame:
              {
                if (data.Code == 0) {
                  this.backHall();
                } else {
                  Common.showTip(i18n.errTip(data.Code));
                }
                break;
              }
            //            /////////////////////////////////////////////////////
            case this._configManager.protocolHall.pushWallet:
            case this._configManager.protocolHall.getWallet:
              {
                var wallet = data.Wallet || data.Data.wallet;

                //                //获取钱包-推送钱包
                this._dataManager.setUserDataForKey(UserKey.GOLD, wallet.VndBalance);
                break;
              }
            case this._configManager.protocolHall.login:
              {
                //                //断线重连
                Common.closeNetTips();
                //                // Common.showWait();
                var _procol3 = this._serverId + "/" + LsGameDef.eProto.checkInRoom.split("/")[1];
                this._netManager.sendOnlineData(_procol3, {});
                break;
              }
          }
        };
        _proto.backHall = function backHall() {
          this.unscheduleAllCallbacks();
          this._audioManager.stopAllEffect();
          this._viewManager.setGameData(null);
          LsGameDef.constante.clear();
          console.time("bundle.onLoadHall");
          Common.showWait();
          //        //退到大厅
          Common.returnToHall(this, "LsGame");
        };
        _proto.showPotNum = function showPotNum(isFirst) {
          if (LsGameDef.constante.tryGame == true) {
            return;
          }
          var curNum1 = parseInt(this.dpoolGold.string.replace(/,/g, ""));
          var curNum2 = parseInt(this.xPoolGold.string.replace(/,/g, ""));
          this.stepDJackNum = Math.floor((this.djackPotNum - curNum1) / 167);
          this.stepXJackNum = Math.floor((this.xJackPotNum - curNum2) / 167);
          if (this.stepDJackNum > 0 && this.stepXJackNum > 0) {
            this.schedule(this.addPotNum, 0.03);
          } else {
            var self = this;
            var times = Math.random() * 3;
            times = isFirst == true ? 0 : times;
            this.scheduleOnce(function () {
              self.unschedule(self.addPotNum);
              var procol = self._serverId + "/" + LsGameDef.eProto.getJackpot.split("/")[1];
              self._netManager.sendOnlineData(procol, {
                CoinNum: self.curCoin
              });
            }, times);
          }
        };
        _proto.addPotNum = function addPotNum() {
          var curNum1 = parseInt(this.dpoolGold.string.replace(/,/g, ""));
          var curNum2 = parseInt(this.xPoolGold.string.replace(/,/g, ""));
          curNum1 = curNum1 + this.stepDJackNum;
          curNum2 = curNum2 + this.stepXJackNum;
          if (curNum1 >= this.djackPotNum || curNum2 >= this.xJackPotNum) {
            curNum1 = this.djackPotNum;
            curNum2 = this.xJackPotNum;
            this.unschedule(this.addPotNum);
            this.showPotNum(false);
          }
          this.dpoolGold.string = Common.numFormat(curNum1);
          this.xPoolGold.string = Common.numFormat(curNum2);
        };
        _proto.initGame = function initGame() {
          var id = this.fuben[this._gameType];
          this.fubenId = id - 11;
          this.spData.WILD.ani1 = "w" + this.fubenId + "icon_idle";
          this.spData.WILD.ani2 = "w" + this.fubenId + "icon_fire";
          this.spData.WILD.ani3 = "w" + this.fubenId + "icon_fire";
          var coin = sys.localStorage.getItem("LsCoin");
          var base = sys.localStorage.getItem("LsBase");
          var type = LsGameDef.constante.runType;
          var CoinIndex = sys.localStorage.getItem("coinIndex");
          this.curCoinIndex = parseInt(CoinIndex) ? parseInt(CoinIndex) : this.curCoinIndex;
          this.runtype = type ? type : this.runtype;
          this.curCoin = parseInt(coin) ? parseInt(coin) : this.curCoin;
          this.curBase = parseInt(base) ? parseInt(base) : this.curBase;
          this.runTypeButton.getChildByName("tag").active = this.runtype == 2;
          this.coinNum.string = this.curCoin + "";
          this.baseNum.string = this.curBase + "";
          this.tottalNum.string = Common.ChangeMoneyShow(this.curBase * this.curCoin, 1);
          this.scoreNum.string = Common.numFormat(this._curScore);
          this.dpoolGold.string = "0";
          this.xPoolGold.string = "0";
          this.addBtn.getComponent(Button).interactable = false;
          this.jianBtn.getComponent(Button).interactable = false;
          this.baseBtn.getComponent(Button).interactable = false;
          find("Canvas/fbim1/FreeTimes").getComponent(Label).string = this._FreeTimes + "";
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
            this._startPosList[i] = {
              x: this.items[i].getPosition().x,
              y: this.items[i].getPosition().y
            };
            this._curShowItem.push(this.items[i]);
          }
          this.startBtnBg1.getComponent(sp.Skeleton).setAnimation(0, "kaishi", true);
          find("Canvas/aniBg").getComponent(sp.Skeleton).setAnimation(0, this.fubenAniName[this._gameType], true);
          find("Canvas/bg").getComponent(Sprite).spriteFrame = this.jsSps[this.fubenBg[this._gameType]];
          if (LsGameDef.constante.tryGame == false) {
            this.showPotNum(true);
          }
          //        // for (var i = 0; i < 3; i++) {
          //        //     let djzi = cc.instantiate(this.djLz);
          //        //     this.djLayer.addChild(djzi);
          //        // }
          this.drawSPByData();
          this.node_quick.active = false;
        };
        _proto.initGameByData = function initGameByData() {
          //        //  this.initBaseLayer();
          this.drawSPByData();
        };
        _proto.initBaseLayer = function initBaseLayer() {
          //        //根据低分表绘制 低分选项板
          for (var i = 0; i < this._baseList.length; i++) {
            var text = this.BaseLayer.getChildByName("baseBg").getChildByName("btn" + (i + 1)).getChildByName("text");
            text.getComponent(Label).string = this._baseList[i] + "";
          }
        };
        _proto.drawSPByData = function drawSPByData() {
          //        //根据卷轴位置绘制 当前显示图案
          this._curPageData = this.getPicturesData();
          for (var i = 0; i < this._curPageData.length; i++) {
            this.items[i].active = true;
            this.setItemSprite(this.items[i], this._curPageData[i]);
            this.items[i].setPosition(this._startPosList[i].x, this._startPosList[i].y);
          }
        };
        _proto.getPicturesData = function getPicturesData() {
          //        //根据卷轴位置 获取当前每个点的图案id
          var curdata = [];
          for (var i = 0; i < this._posList.length; i++) {
            var value1 = this._posList[i];
            var value0 = value1 == 0 ? this._zzlist[i].length - 1 : value1 - 1;
            var value2 = value1 + 1 == this._zzlist[i].length ? 0 : value1 + 1;
            var value3 = value2 + 1 == this._zzlist[i].length ? 0 : value2 + 1;
            curdata[i] = this._zzlist[i][value0];
            curdata[5 * 1 + i] = this._zzlist[i][value1];
            curdata[5 * 2 + i] = this._zzlist[i][value2];
            curdata[5 * 3 + i] = this._zzlist[i][value3];
          }
          return curdata;
        };
        _proto.start = function start() {};
        _proto.onDisable = function onDisable() {
          //        // 监听网络协议
          this._eventManager.off(LsGameDef.eProto.getInfo, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.getRoomData, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.runTryFree, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.showResultFree, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.runFreeGame, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.getJackpot, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.exitGame, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.checkInRoom, this.recvData, this);
          this._eventManager.off(this._configManager.protocolHall.getWallet, this.recvData, this);
          this._eventManager.off(this._configManager.protocolHall.pushWallet, this.recvData, this);
          this._eventManager.off(this._configManager.protocolHall.login, this.recvData, this); //断线重连

          //        // 监听按钮
          this._eventManager.off(this._configManager.protocolLs.runButton, this.runButton, this); //开始游戏
          this._eventManager.off(this._configManager.protocolLs.changeBase, this.changeBase, this); //改变底分
          this._eventManager.off(this._configManager.protocolLs.changeCoin, this.changeCoin, this); //改变硬币数
          this._eventManager.off(this._configManager.protocolLs.showBase, this.showBaseLayer, this); //改变硬币数
          this._eventManager.off(this._configManager.protocolLs.changetype, this.changeType, this); //切换运行type

          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.off(this._configManager.eventTransform.disConnect, this.disconnect, this); //断线

          //        //传输事件
          this._eventManager.off("auto", this.changeAutoType, this); //切换自动
        }
        //    // update (dt) {}
        ;

        return LsFbGameScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "baseNum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tottalNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dpoolGold", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "xPoolGold", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "runTypeButton", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "BaseLayer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "beishu", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "addBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "jianBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "baseBtn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "startBtnBg1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "startBtnBg2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "itemspFrame", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "skeletonData", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "itemAction", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "aniLayer", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "aniLayerBg", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "showTig", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "djLayer", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "wildSounds", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "wildFb", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "yingbiList", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "yingbi", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "zjSoundList", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "djStart", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "djEnd", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "djFbStart", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "djFbEnd", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "gunlun", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "freebg", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "totaljs", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "totalLayer", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "djLz", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "jsSps", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "node_quick", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "itemsBgFrame", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LsFbStartScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts', './LsGameDef.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, Node, assetManager, sp, v2, Color, Tween, Label, tween, v3, UIOpacity, Scene, find, director, Component, MainManager, LsGameDef, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      Node = module.Node;
      assetManager = module.assetManager;
      sp = module.sp;
      v2 = module.v2;
      Color = module.Color;
      Tween = module.Tween;
      Label = module.Label;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Scene = module.Scene;
      find = module.find;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      LsGameDef = module.LsGameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
      cclegacy._RF.push({}, "67cc00g9TBPUaKDYOab0WAb", "LsFbStartScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LsFbStartScene = exports('default', (_dec = ccclass("LsFbStartScene"), _dec2 = property(AudioClip), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsFbStartScene, _Component);
        function LsFbStartScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._viewManager = void 0;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._audioManager = void 0;
          _this._dataManager = void 0;
          _this._buddle = void 0;
          _initializerDefineProperty(_this, "bgMusic", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "randMusic", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rand1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rand2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enterfb", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "men", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "img_shadow", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startImg", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildImg", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Mask1", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Mask2", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTop", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemBottom", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragonList", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragonFire", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragon_head", _descriptor16, _assertThisInitialized(_this));
          _this.startPos1 = [{
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }];
          _this.startPos2 = [{
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }];
          _this.countList = [6, 10, 13, 15, 20, 25];
          _this.beishuList = [[2, 3, 5], [3, 5, 8], [5, 8, 10], [8, 10, 15], [10, 15, 30], [15, 30, 40]];
          _this.runtime = 0;
          _this._enterData = null;
          _this._istouch = false;
          _this._serverId = null;
          _this.gameType = "";
          _this.gameList = ["WHITE", "RED", "BLACK", "PURPLE", "BLUE", "GOLD", "GREEN"];
          _this.dragonMap = {
            WHITE: {},
            RED: {},
            BLACK: {},
            PURPLE: {},
            BLUE: {},
            GOLD: {},
            GREEN: {}
          };
          return _this;
        }
        var _proto = LsFbStartScene.prototype;
        _proto.onLoad = function onLoad() {
          this.initDragonList();
          this._mainManager = MainManager.getInstance();
          this._viewManager = this._mainManager.getViewManager();
          this._configManager = this._mainManager.getConfigManager();
          this._eventManager = this._mainManager.getEventManager();
          this._netManager = this._mainManager.getNetManager();
          this._audioManager = this._mainManager.getAudioManager();
          this._dataManager = this._mainManager.getDataManager();
          this._buddle = assetManager.getBundle("LsGame");
          this._netManager.waitServiceSendData();
          this._audioManager.playGameMusic(this.bgMusic, true);
          this._netManager.sendOnlineData(LsGameDef.eProto.getInfo, {});
          this.initEvent();
          this.img_shadow.active = true;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.men.getComponent(sp.Skeleton).setCompleteListener(function () {
            _this2.men.active = false;
            _this2.img_shadow.active = false;
            _this2.scheduleOnce(function () {
              var num = Math.floor(Math.random() * 7);
              this.selectFb(this.gameList[num]);
            }, 6);
          });
        };
        _proto.initDragonList = function initDragonList() {
          this.dragonMap.WHITE = {
            startPos: v2(-560, -200),
            time: 1,
            aniNode: this.dragonList[0],
            aniName: "white_fire",
            aniHead: "w1choose_idle",
            aniFire: "white",
            color: Color.WHITE
          };
          this.dragonMap.RED = {
            startPos: v2(-370, -100),
            time: 1,
            aniNode: this.dragonList[1],
            aniName: "red_fire",
            aniHead: "w3choose_idle",
            aniFire: "red",
            color: Color.RED
          };
          this.dragonMap.BLACK = {
            startPos: v2(-176, -60),
            time: 1,
            aniNode: this.dragonList[2],
            aniName: "black_fire",
            aniHead: "w2choose_idle",
            aniFire: "black",
            color: new Color(100, 100, 100)
          };
          this.dragonMap.PURPLE = {
            startPos: v2(-20, -55),
            time: 1,
            aniNode: this.dragonList[3],
            aniName: "pink_fire",
            aniHead: "w4choose_idle",
            aniFire: "pink",
            color: Color.MAGENTA
          };
          this.dragonMap.BLUE = {
            startPos: v2(167, -55),
            time: 1,
            aniNode: this.dragonList[4],
            aniName: "blue_fire",
            aniHead: "w5choose_idle",
            aniFire: "blue",
            color: Color.BLUE
          };
          this.dragonMap.GOLD = {
            startPos: v2(370, -100),
            time: 1,
            aniNode: this.dragonList[5],
            aniName: "yellow_fire",
            aniHead: "w6choose_idle",
            aniFire: "yellow",
            color: Color.YELLOW
          };
          this.dragonMap.GREEN = {
            startPos: v2(560, -200),
            time: 1,
            aniNode: this.dragonList[6],
            aniName: "green_fire",
            aniHead: "w7choose_idle",
            aniFire: "green",
            color: Color.GREEN
          };
        };
        _proto.initEvent = function initEvent() {
          //        //按钮协议
          this._eventManager.on(this._configManager.protocolLs.selectFb, this.selectFb, this);
          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          //        //网络协议
          this._eventManager.on(LsGameDef.eProto.enterFree, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.enterTrialFree, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.getInfo, this.recvData, this);
          this._eventManager.on(this._configManager.protocolHall.login, this.recvData, this); //断线重连
          this._eventManager.on(this._configManager.eventTransform.disConnect, this.disconnect, this); //断线

          this._eventManager.on(LsGameDef.eProto.checkInRoom, this.recvData, this);
        };
        _proto.onDisable = function onDisable() {
          //        //网络协议
          this._eventManager.off(LsGameDef.eProto.enterFree, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.getInfo, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.enterTrialFree, this.recvData, this);
          this._eventManager.off(this._configManager.protocolHall.login, this.recvData, this); //断线重连
          this._eventManager.off(LsGameDef.eProto.checkInRoom, this.recvData, this);

          //        //按钮协议
          this._eventManager.off(this._configManager.protocolLs.selectFb, this.selectFb, this);
          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.off(this._configManager.eventTransform.disConnect, this.disconnect, this); //断线
        };

        _proto.disconnect = function disconnect() {
          Common.showNetTips();
        };
        _proto.gameShow = function gameShow() {
          this._netManager.waitServiceSendData();
        };
        _proto.selectFb = function selectFb(data) {
          Tween.stopAllByTarget(this.node);
          if (this._istouch == true) {
            return;
          }
          this.unscheduleAllCallbacks();
          this._istouch = true;
          this.gameType = data;
          if (data == "PURPLE") {
            this.startAni();
          }
          Common.showLog("send进入副本协议");
          if (LsGameDef.constante.tryGame == false) {
            var procol = this._serverId + "/" + LsGameDef.eProto.enterFree.split("/")[1];
            this._netManager.sendOnlineData(procol, {
              FreeType: data
            });
          } else {
            var _procol = this._serverId + "/" + LsGameDef.eProto.enterTrialFree.split("/")[1];
            this._netManager.sendOnlineData(_procol, {
              FreeType: data
            });
          }

          //        // this.loadingGame();
        };

        _proto.startAni = function startAni() {
          this.startImg.active = false;
          this.runtime = 0;
          for (var i = 0; i < 2; i++) {
            this.startPos1[i].x = this.Mask1.getChildByName("item" + (i + 1)).getPosition().x;
            this.startPos1[i].y = this.Mask1.getChildByName("item" + (i + 1)).getPosition().y;
            this.startPos2[i].x = this.Mask2.getChildByName("item" + (i + 1)).getPosition().x;
            this.startPos2[i].y = this.Mask2.getChildByName("item" + (i + 1)).getPosition().y;
          }
          this.Mask1.active = true;
          this.Mask2.active = true;
          this.resumItem1();
          this.resumItem2();
          this._audioManager.playSound(this.randMusic, true);
          this.schedule(this.rollAni, 0.02);
        };
        _proto.rollAni = function rollAni() {
          this.runtime = this.runtime + 0.02;
          for (var i = 0; i < 2; i++) {
            this.itemTop[i].setPosition(this.itemTop[i].position.x, this.itemTop[i].position.y - 50);
            this.itemBottom[i].setPosition(this.itemBottom[i].position.x, this.itemBottom[i].position.y - 50);
            if (i == 1) {
              if (this.itemTop[i].getPosition().y <= this.startPos1[0].y) {
                this.resumItem1();
              }
              if (this.itemBottom[i].getPosition().y <= this.startPos2[0].y) {
                this.resumItem2();
              }
            }
          }
          if (this.runtime >= 1 && this._enterData != null) {
            //            //
            Common.showLog("进入副本");
            this.unschedule(this.rollAni);
            this.stopAni1();
          }
        };
        _proto.stopAni1 = function stopAni1() {
          this._audioManager.stopSound();
          this.itemTop[0].getChildByName("countNum").getComponent(Label).string = this._enterData.Data.NumOfTimes + "";
          this.itemTop[1].getChildByName("countNum").getComponent(Label).string = this._enterData.Data.NumOfTimes + "";
          for (var i = 0; i < 2; i++) {
            this.itemTop[i].setPosition(this.startPos1[0].x, this.startPos1[0].y);
          }
          var self = this;
          this._audioManager.playSound(this.rand1, false);
          tween(this.itemTop[1]).to(0.4, {
            scale: v3(1.5, 1.5, 1)
          }).delay(0.4).call(function () {
            self.itemTop[1].active = false;
          }).start();
          tween(this.itemTop[1].getComponent(UIOpacity)).to(0.4, {
            opacity: 150
          }).to(0.4, {
            opacity: 0
          }).start();
          this.scheduleOnce(this.stopAni2, 0.5);
        };
        _proto.stopAni2 = function stopAni2() {
          this._audioManager.playSound(this.rand2, false);
          this.itemBottom[0].getChildByName("beishu").getComponent(Label).string = this._enterData.Data.Times[0] + "," + this._enterData.Data.Times[1] + "," + this._enterData.Data.Times[2];
          this.itemBottom[1].getChildByName("beishu").getComponent(Label).string = this._enterData.Data.Times[0] + "," + this._enterData.Data.Times[1] + "," + this._enterData.Data.Times[2];
          for (var i = 0; i < 2; i++) {
            this.itemBottom[i].setPosition(this.startPos2[0].x, this.startPos2[0].y);
          }
          var self = this;
          this.wildImg.active = true;
          tween(this.itemBottom[1]).to(0.4, {
            scale: v3(1.5, 1.5, 1)
          }).delay(0.4).call(function () {
            self.itemBottom[1].active = false;
            self.scheduleOnce(function () {
              self.loadingGame();
            }, 1);
          }).start();
          tween(this.itemBottom[1].getComponent(UIOpacity)).to(0.4, {
            opacity: 150
          }).to(0.4, {
            opacity: 0
          }).start();
          tween(this.wildImg).to(0.4, {
            scale: v3(1.5, 1.5, 1)
          }).to(0.4, {
            scale: v3(1, 1, 1)
          }).start();
          tween(this.wildImg.getComponent(UIOpacity)).to(0.4, {
            opacity: 150
          }).to(0.4, {
            opacity: 255
          }).start();
        };
        _proto.loadingGame = function loadingGame() {
          Common.showWait();
          var that = this;
          var layerPath = "scene/LsFbGameScene";
          this._buddle.loadScene(layerPath, Scene, function (cur, total) {}, function (err, GameLayer) {
            that.enterGameFb(GameLayer);
          });
        };
        _proto.enterGameFb = function enterGameFb(GameLayer) {
          var _this3 = this;
          Common.closeWait();
          for (var i = 0; i < 7; i++) {
            find("Canvas/Btn_fb" + (i + 1)).active = false;
          }
          //        // let longImg = cc.find("Canvas/bg/im1");
          //        // cc.tween(longImg).to(0.8, { opacity: 0 }).start();
          //        // this.men.getComponent(sp.Skeleton).timeScale = 0.5;
          //        // this.men.getComponent(sp.Skeleton).setAnimation(0, "men", false);
          //        // let self = this;
          //        // this._audioManager.playSound(this.enterfb, false);
          //        // this.men.getComponent(sp.Skeleton).setCompleteListener(function () {
          //        //     Common.showLog("切换scene");
          //        //     longImg.stopAllActions();
          //        //     self.unscheduleAllCallbacks();
          //        //     cc.director.runScene(GameLayer);
          //        // });

          var dragonInfo = this.dragonMap[this.gameType];
          var ske = dragonInfo.aniNode.getComponent(sp.Skeleton);
          ske.setAnimation(0, dragonInfo.aniName, false);
          ske.setCompleteListener(function () {
            ske.setCompleteListener(null);
            _this3.dragonFire.active = true;
            var fire = _this3.dragonFire.getComponent(sp.Skeleton);
            _this3.dragonFire.getComponent(sp.Skeleton).color = dragonInfo.color;
            fire.setAnimation(0, "white", false);
            _this3.dragonFire.setPosition(v3(dragonInfo.startPos.x, dragonInfo.startPos.y));
            fire.setCompleteListener(function () {
              _this3.unscheduleAllCallbacks();
              director.runScene(GameLayer);
            });
            tween(_this3.dragonFire).to(dragonInfo.time, {
              position: v3(0, 0)
            }).start();
          });
          this.dragon_head.active = true;
          this.dragon_head.getComponent(UIOpacity).opacity = 0;
          this.dragon_head.getComponent(sp.Skeleton).setAnimation(0, dragonInfo.aniHead, true);
          tween(this.dragon_head.getComponent(UIOpacity)).to(2.5, {
            opacity: 255
          }).start();
        };
        _proto.resumItem1 = function resumItem1() {
          var countNum1 = Math.floor(Math.random() * 6);
          var countNum2 = Math.floor(Math.random() * 6);
          this.itemTop[0].getChildByName("countNum").getComponent(Label).string = this.countList[countNum1] + "";
          this.itemTop[1].getChildByName("countNum").getComponent(Label).string = this.countList[countNum2] + "";
          for (var i = 0; i < 2; i++) {
            this.itemTop[i].setPosition(this.startPos1[i].x, this.startPos1[i].y);
          }
        };
        _proto.resumItem2 = function resumItem2() {
          var countNum1 = Math.floor(Math.random() * 6);
          var countNum2 = Math.floor(Math.random() * 6);
          this.itemBottom[0].getChildByName("beishu").getComponent(Label).string = this.beishuList[countNum1][0] + "," + this.beishuList[countNum1][1] + "," + this.beishuList[countNum1][2];
          this.itemBottom[1].getChildByName("beishu").getComponent(Label).string = this.beishuList[countNum2][0] + "," + this.beishuList[countNum2][1] + "," + this.beishuList[countNum2][2];
          for (var i = 0; i < 2; i++) {
            this.itemBottom[i].setPosition(this.startPos2[i].x, this.startPos2[i].y);
          }
        }
        //    //接受所有的网络协议
        ;

        _proto.recvData = function recvData(data) {
          switch (data.cmd) {
            case LsGameDef.eProto.getInfo:
              {
                //                //获取serid配置  加入房间
                this._serverId = data.Data.slotLsServerId;
                break;
              }
            case LsGameDef.eProto.enterFree:
            case LsGameDef.eProto.enterTrialFree:
              {
                //                //加入房间后，获取房间信息
                data.Data["FreeType"] = this.gameType;
                this._enterData = data;
                this._viewManager.setGameData(data.Data.TableInfo);
                if (this.gameType != "PURPLE") {
                  this.loadingGame();
                }
                break;
              }
            case LsGameDef.eProto.checkInRoom:
              {
                //                // 检查是否再房间
                if (data.Data.InGame) {
                  Common.closeWait();
                } else {
                  this.unscheduleAllCallbacks();
                  this._audioManager.stopAllEffect();
                  this._viewManager.setGameData(null);
                  LsGameDef.constante.clear();
                  console.time("bundle.onLoadHall");
                  Common.showWait();
                  //        //退到大厅
                  Common.returnToHall(this, "LsGame");
                }
                break;
              }
          }
        }
        //    // update (dt) {}
        ;

        return LsFbStartScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "randMusic", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rand1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rand2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "enterfb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "men", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "img_shadow", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "startImg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "wildImg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Mask1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Mask2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "itemTop", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "itemBottom", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "dragonList", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "dragonFire", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "dragon_head", [_dec17], {
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

System.register("chunks:///_virtual/LsGame", ['./LsAuto.ts', './LsBag.ts', './LsBigRecord.ts', './LsFbGameScene.ts', './LsFbStartScene.ts', './LsGameDef.ts', './LsGameHelp.ts', './LsGameMenu.ts', './LsGameScene.ts', './LsGame_bg.ts', './LsJackPot.ts', './LsLodingScene.ts', './LsShowWild.ts', './viewMenu.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/LsGame_bg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, AudioClip, SpriteFrame, sp, Component;
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
      AudioClip = module.AudioClip;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;
      cclegacy._RF.push({}, "1c0daKTvChPkKB4uflI1k7H", "LsGame_bg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LsGame_bg = exports('default', (_dec = ccclass("LsGameBg"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec8 = property(AudioClip), _dec9 = property(AudioClip), _dec10 = property(AudioClip), _dec11 = property(AudioClip), _dec12 = property(AudioClip), _dec13 = property(AudioClip), _dec14 = property(AudioClip), _dec15 = property(AudioClip), _dec16 = property(AudioClip), _dec17 = property(Node), _dec18 = property(SpriteFrame), _dec19 = property(sp.SkeletonData), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsGame_bg, _Component);
        function LsGame_bg() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gold", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dpoolGold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xPoolGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "items", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildSounds", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildFb", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yingbiList", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yingbi", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zjSoundList", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djStart", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djEnd", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djFbStart", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djFbEnd", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gunlun", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speed", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "beishu", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemspFrame", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skeletonData", _descriptor18, _assertThisInitialized(_this));
          return _this;
        }
        return LsGame_bg;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dpoolGold", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "xPoolGold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wildSounds", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "wildFb", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "yingbiList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "yingbi", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "zjSoundList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "djStart", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "djEnd", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "djFbStart", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "djFbEnd", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "gunlun", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "beishu", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "itemspFrame", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "skeletonData", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LsGameDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('LsGameDef', void 0);
      cclegacy._RF.push({}, "c373376xbdBFZjoWVBkraCK", "LsGameDef", undefined);
      var LsGameDef;
      (function (_LsGameDef) {
        var eProto = /*#__PURE__*/function (eProto) {
          eProto["getInfo"] = "slotLs/HD_info";
          eProto["getRoomData"] = "slotLs/HD_UpdateTableInfo";
          eProto["enterRoom"] = "slotLs/HD_Enter";
          eProto["exitGame"] = "slotLs/HD_QuitTable";
          eProto["runGame"] = "slotLs/HD_Spin";
          eProto["runFreeGame"] = "slotLs/HD_SpinFree";
          eProto["runTry"] = "slotLs/HD_SpinTrial";
          eProto["runTryFree"] = "slotLs/HD_SpinTrialFree";
          eProto["showResultFree"] = "slotLs/HD_JieSuan";
          eProto["showResult"] = "slotLs/HD_JieSuan";
          eProto["enterFree"] = "slotLs/HD_SelectFreeGame";
          eProto["enterTrialFree"] = "slotLs/HD_SelectTrialFreeGame";
          eProto["getJackpot"] = "slotLs/HD_GetJackpot";
          eProto["changeTry"] = "slotLs/HD_SwitchMode";
          eProto["checkInRoom"] = "slotLs/HD_CheckPlayerInGame";
          eProto["getBigPoolList"] = "slotLs/HD_GetJackpotRecord";
          return eProto;
        }({}); //获取大奖数据
        _LsGameDef.eProto = eProto;
        var constante = /*#__PURE__*/function () {
          function constante() {}
          //滚动方式
          constante.clear = function clear() {
            this.auto = false;
            this.tryGame = false;
            this.runType = 1;
          };
          return constante;
        }();
        constante.rateList = null;
        constante.auto = false;
        constante.tryGame = false;
        //试玩模式记录
        constante.runType = 1;
        _LsGameDef.constante = constante;
      })(LsGameDef || (LsGameDef = exports('LsGameDef', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LsGameHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, find, Button, Label, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      Button = module.Button;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "ac8f19LuAVNhLOoR5xSQ1ve", "LsGameHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LsGameHelp = exports('default', (_dec = ccclass("LsGameHelp"), _dec2 = menu("game/lsGame/LsGameHelp"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsGameHelp, _Component);
        function LsGameHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._rateList = void 0;
          _this.helpIndex = 1;
          return _this;
        }
        var _proto = LsGameHelp.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          for (var i = 0; i < 6; i++) {
            find("/bg/content_bg/help" + (i + 1), this.node).active = i + 1 == this.helpIndex;
          }
          find("/bg/beforeBtn", this.node).getComponent(Button).interactable = false;
          find("/bg/nextBtn", this.node).getComponent(Button).interactable = true;
          if (this._rateList) {
            //            ////help1
            var help1 = find("/bg/content_bg/help1", this.node);
            var curValue = this._rateList["PACKET"];
            var Label_rate = find("Node_PACKET/Label_0", help1).getComponent(Label).string = "*" + Math.floor(curValue["3"] / 100);
            Label_rate = find("Node_PACKET/Label_1", help1).getComponent(Label).string = "*" + Math.floor(curValue["4"] / 100);
            Label_rate = find("Node_PACKET/Label_2", help1).getComponent(Label).string = "*" + Math.floor(curValue["5"] / 100);

            //            ////help4
            var help4 = find("/bg/content_bg/help4", this.node);
            curValue = this._rateList["SCATTER"];
            Label_rate = find("Node_JACKPOT/Label_0", help4).getComponent(Label).string = "*" + Math.floor(curValue["3"] / 100);
            Label_rate = find("Node_JACKPOT/Label_1", help4).getComponent(Label).string = "*" + Math.floor(curValue["4"] / 100);
            Label_rate = find("Node_JACKPOT/Label_2", help4).getComponent(Label).string = "*" + Math.floor(curValue["5"] / 100);

            //            //help2
            var help2 = find("/bg/content_bg/help2", this.node);
            for (var _iterator = _createForOfIteratorHelperLoose(help2.children), _step; !(_step = _iterator()).done;) {
              var node = _step.value;
              var key = node.name.replace("Node_", "");
              var value = this._rateList[key];
              var rate = find("Label_0", node).getComponent(Label).string = "*" + Math.floor(value["3"] / 100);
              rate = find("Label_1", node).getComponent(Label).string = "*" + Math.floor(value["4"] / 100);
              rate = find("Label_2", node).getComponent(Label).string = "*" + Math.floor(value["5"] / 100);
            }
          }
        };
        _proto.onClickNext = function onClickNext() {
          this.helpIndex = this.helpIndex + 1;
          for (var i = 0; i < 6; i++) {
            find("/bg/content_bg/help" + (i + 1), this.node).active = i + 1 == this.helpIndex;
          }
          find("/bg/beforeBtn", this.node).getComponent(Button).interactable = this.helpIndex > 1;
          find("/bg/nextBtn", this.node).getComponent(Button).interactable = this.helpIndex < 6;
        };
        _proto.onClickBefore = function onClickBefore() {
          this.helpIndex = this.helpIndex - 1;
          for (var i = 0; i < 6; i++) {
            find("/bg/content_bg/help" + (i + 1), this.node).active = i + 1 == this.helpIndex;
          }
          find("/bg/beforeBtn", this.node).getComponent(Button).interactable = this.helpIndex > 1;
          find("/bg/nextBtn", this.node).getComponent(Button).interactable = this.helpIndex < 6;
        };
        return LsGameHelp;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LsGameMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './ConfigManager.ts', './EventManager.ts', './ViewManager.ts', './LsGameDef.ts', './LsGameHelp.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, find, assetManager, instantiate, Component, GUtil, ConfigManager, EventManager, ViewManager, LsGameDef, LsGameHelp, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      LsGameDef = module.LsGameDef;
    }, function (module) {
      LsGameHelp = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "5d2480PYiVNzrrguwmJVJGj", "LsGameMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LsGameMenu = exports('default', (_dec = ccclass("LsGameMenu"), _dec2 = menu("game/lsGame/LsGameMenu"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsGameMenu, _Component);
        function LsGameMenu() {
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
        var _proto = LsGameMenu.prototype;
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
          EventManager.instance.dispatch(ConfigManager.instance.protocolLs.backHall);
        };
        _proto.onClickSetting = function onClickSetting(sender) {
          GUtil.openSetting();
        };
        _proto.onClickRule = function onClickRule(sender) {
          Common.loadPopBuddle("prefab/helpLayer", assetManager.getBundle("LsGame"), function () {}, function (helpLayer) {
            var helpLayerNode = instantiate(helpLayer);
            ViewManager.instance.popNodeView(helpLayerNode, true);
            helpLayerNode.getComponent(LsGameHelp)._rateList = LsGameDef.constante.rateList;
          }, true);
        };
        _proto.onClickRecord = function onClickRecord(sender) {
          GUtil.openRecord("slotLs");
        };
        _proto.onClickMenu = function onClickMenu() {
          this.node_action.active = !this.node_action.active;
        };
        _proto.onClickBg = function onClickBg() {};
        _proto.onDestroy = function onDestroy() {};
        return LsGameMenu;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LsGameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './DataManager.ts', './MainManager.ts', './LsGameDef.ts', './LsGame_bg.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Prefab, SpriteFrame, assetManager, director, sp, v3, Tween, tween, UIOpacity, Button, Sprite, instantiate, RichText, sys, Component, UITransform, i18n, UserKey, MainManager, LsGameDef, LsGame_bg, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      assetManager = module.assetManager;
      director = module.director;
      sp = module.sp;
      v3 = module.v3;
      Tween = module.Tween;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Button = module.Button;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      RichText = module.RichText;
      sys = module.sys;
      Component = module.Component;
      UITransform = module.UITransform;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      UserKey = module.UserKey;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      LsGameDef = module.LsGameDef;
    }, function (module) {
      LsGame_bg = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25;
      cclegacy._RF.push({}, "f3a32rlNQtPlZyvoHxeSUKH", "LsGameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LsGameScene = exports('default', (_dec = ccclass("LsGameScene"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Prefab), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Prefab), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(SpriteFrame), _dec25 = property(Node), _dec26 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsGameScene, _Component);
        function LsGameScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._viewManager = void 0;
          _this._dataManager = void 0;
          _this._audioManager = void 0;
          _this._buddle = void 0;
          _initializerDefineProperty(_this, "coinNum", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseNum", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tottalNum", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chouShui", _descriptor5, _assertThisInitialized(_this));
          //    // @property(cc.Label)
          _this.gold = null;
          //    // @property(cc.Label)
          _this.dpoolGold = null;
          //    // @property(cc.Label)
          _this.xPoolGold = null;
          _initializerDefineProperty(_this, "runTypeButton", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runAutoTip", _descriptor7, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          _this.BaseLayer = null;
          //    // @property(cc.Node)
          _this.beishu = null;
          _initializerDefineProperty(_this, "addBtn", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jianBtn", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseBtn", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startBtnBg1", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startBtnBg2", _descriptor12, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          _this.items = [];
          //    // @property(cc.SpriteFrame)
          _this.itemspFrame = [];
          //    // @property(sp.SkeletonData)
          _this.skeletonData = [];
          _initializerDefineProperty(_this, "itemAction", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLayer", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLayerBg", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showTig", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djLayer", _descriptor17, _assertThisInitialized(_this));
          //    // @property(cc.AudioClip)
          _this.wildSounds = [];
          //    // @property(cc.AudioClip)
          _this.wildFb = null;
          //    // @property(cc.AudioClip)
          _this.yingbiList = [];
          //    // @property(cc.AudioClip)
          _this.yingbi = null;
          //    // @property(cc.AudioClip)
          _this.zjSoundList = [];
          //    // @property(cc.AudioClip)
          _this.djStart = null;
          //    // @property(cc.AudioClip)
          _this.djEnd = null;
          //    // @property(cc.AudioClip)
          _this.djFbStart = null;
          //    // @property(cc.AudioClip)
          _this.djFbEnd = null;
          //    // @property(cc.AudioClip)
          _this.gunlun = null;
          //    // @property(cc.AudioClip)
          _this.speed = null;
          _initializerDefineProperty(_this, "trygame", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trygameImg", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "djLz", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_free", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_quick", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemsBgFrame", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zIndexNode", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "firstNode", _descriptor25, _assertThisInitialized(_this));
          _this.spName = {
            "9": 0,
            "10": 1,
            J: 2,
            Q: 3,
            K: 4,
            A: 5,
            PACKET: 6,
            TORTOISE: 8,
            FISH: 7,
            LION: 9,
            PHOENIX: 10,
            WILD: 12,
            SCATTER: 11
          };
          _this.itemBg = {
            PACKET: 0,
            TORTOISE: 3,
            FISH: 4,
            LION: 2,
            PHOENIX: 1
          };
          _this.musicType = {
            win1: 0,
            win2: 1,
            win3: 2,
            win4: 3,
            win5: 4,
            bet: 5,
            bet3: 6,
            bet4: 7,
            bet5: 8,
            bet6: 9,
            bet10: 10
          };
          _this.musicTime = {
            win1: 0.8,
            win2: 0.9,
            win3: 1,
            win4: 2,
            win5: 2.2,
            bet: 2.8,
            bet3: 5,
            bet4: 7.2,
            bet5: 8.6,
            bet6: 10,
            bet10: 16
          };
          _this.fubenId = 5;
          _this.spData = {
            "9": {
              id: 0,
              ani1: "9_kong",
              ani2: "9",
              ani3: "9",
              timescale: 1
            },
            "10": {
              id: 0,
              ani1: "10_kong",
              ani2: "10",
              ani3: "10",
              timescale: 1
            },
            J: {
              id: 0,
              ani1: "J_kong",
              ani2: "J",
              ani3: "J",
              timescale: 1
            },
            Q: {
              id: 0,
              ani1: "Q_kong",
              ani2: "Q",
              ani3: "Q",
              timescale: 1
            },
            K: {
              id: 0,
              ani1: "K_kong",
              ani2: "K",
              ani3: "K",
              timescale: 1
            },
            A: {
              id: 0,
              ani1: "A_kong",
              ani2: "A",
              ani3: "A",
              timescale: 1
            },
            PACKET: {
              id: 6,
              ani1: "hb_kong",
              ani2: "hb",
              ani3: "hb",
              timescale: 1
            },
            TORTOISE: {
              id: 7,
              ani1: "quite",
              ani2: "idle",
              ani3: "idle",
              timescale: 1
            },
            FISH: {
              id: 8,
              ani1: "quite",
              ani2: "idle",
              ani3: "idle",
              timescale: 1
            },
            LION: {
              id: 9,
              ani1: "quite",
              ani2: "idle",
              ani3: "idle",
              timescale: 1
            },
            PHOENIX: {
              id: 10,
              ani1: "quite",
              ani2: "idle",
              ani3: "idle",
              timescale: 1
            },
            WILD: {
              id: 12,
              ani1: "w" + _this.fubenId + "icon_idle",
              ani2: "w" + _this.fubenId + "icon_fire",
              ani3: "w" + _this.fubenId + "icon_fire",
              timescale: 1
            },
            SCATTER: {
              id: 11,
              ani1: "kong",
              ani2: "tubiao1",
              ani3: "tubiao1",
              timescale: 1
            }
          };
          _this.fuben = {
            Nomal: 17,
            WHITE: 12,
            RED: 14,
            BLACK: 13,
            PURPLE: 15,
            BLUE: 16,
            GOLD: 17,
            GREEN: 18
          };
          //    // LIFE-CYCLE CALLBACKS:
          _this._curPageData = [];
          // 根据当前画面位置得出当前每个画面得值
          _this.runtype = 1;
          //转动方式(两种：一种一列一列出结果，一种所有列同时出)
          _this.curtype = 1;
          //转动方式(两种：一种一列一列出结果，一种所有列同时出)
          _this.curCoin = 50;
          _this.curCoinIndex = 0;
          _this.curBase = 10;
          _this._isStart = false;
          _this._startPosList = [];
          _this.runtime = 0;
          _this._gameType = "Nomal";
          _this._actionList = [];
          //一组一组的中将播放 {ani:[],aniName="",timescale:1} aniName 特效名字
          _this._actionList5 = [];
          //五连效果的
          _this._actionWild = [];
          //wild动画
          _this._acIndex = 0;
          _this._curShowItem = [];
          _this._rowIndex = 0;
          _this._step = 50;
          _this.speedShowRe = false;
          _this._stepTime = 18;
          _this._stepNum = 0;
          _this.isMusic = true;
          _this.curTotalNum = 0;
          _this.lianxuIndex = 0;
          _this._isAuto = false;
          _this._changeAuto = false;
          _this._curGold = 0;
          _this._stepGold = 0;
          _this.helpIndex = 1;
          _this.stepDJackNum = 0;
          _this.stepXJackNum = 0;
          _this._tryGame = false;
          _this._curTryCoin = 50;
          _this._curTryBase = 1000;
          _this._curTryCoinIndex = 0;
          _this._zzlistTry = null;
          // 试玩转轴表
          _this._curZzList = null;
          _this._tryDpools = [];
          //试玩 大奖池
          _this._tryXpools = [];
          //试玩 小奖池
          _this._tryGold = 0;
          //试玩金币
          _this._freeClick = 0;
          _this._curPoolPage = 0;
          //    //mData//////////////////////
          _this._serverId = void 0;
          _this._coinList = void 0;
          //当前银币选项
          _this._baseList = void 0;
          // 当前基础分选项
          _this._zzlist = void 0;
          //当前转轴表
          _this._posList = null;
          // 当前画面位置
          _this._resultData = null;
          // 结算数据
          //    //奖池数据
          _this.djackPotNum = 0;
          _this.xJackPotNum = 0;
          _this.reOpen = false;
          _this.reOpenTime = 0;
          _this.reOpenTryTimes = 0;
          //    //////////////////////////////////
          _this.audioId = 0;
          return _this;
        }
        var _proto = LsGameScene.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._configManager = this._mainManager.getConfigManager();
          this._eventManager = this._mainManager.getEventManager();
          this._netManager = this._mainManager.getNetManager();
          this._viewManager = this._mainManager.getViewManager();
          this._dataManager = this._mainManager.getDataManager();
          this._audioManager = this._mainManager.getAudioManager();
          this._buddle = assetManager.getBundle("LsGame");
          this.initEvent();

          //        // this._netManager.sendOnlineData(LsGameDef.eProto.getInfo, {});

          director.preloadScene("LsFbGameScene");
          director.preloadScene("LsFbStartScene");
          this.initView();
          gts.Debug.Log("==initView==initView=");
        };
        _proto.onEnable = function onEnable() {
          // cc.audioEngine.stopMusic();
        };
        _proto.initView = /*#__PURE__*/function () {
          var _initView = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            var asyncLoad, arrHLoad, index;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  asyncLoad = /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(parth, onComplete) {
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", new Promise(function (resolve, reject) {
                              _this2._buddle.load(parth, function (error, assets) {
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
                    return function asyncLoad(_x, _x2) {
                      return _ref.apply(this, arguments);
                    };
                  }();
                  arrHLoad = [];
                  arrHLoad.push(asyncLoad("prefab/game_bg", function (err, game_bg) {
                    if (!err && game_bg) {
                      var node_game_bg = instantiate(game_bg);
                      _this2.node.addChild(node_game_bg);
                      _this2.zIndexNode.unshift(node_game_bg);
                      var com_gameBg = node_game_bg.getComponent(LsGame_bg);
                      _this2.gold = com_gameBg.gold;
                      _this2.dpoolGold = com_gameBg.dpoolGold;
                      _this2.xPoolGold = com_gameBg.xPoolGold;
                      _this2.items = com_gameBg.items;
                      _this2.wildSounds = com_gameBg.wildSounds;
                      _this2.wildFb = com_gameBg.wildFb;
                      _this2.yingbiList = com_gameBg.yingbiList;
                      _this2.yingbi = com_gameBg.yingbi;
                      _this2.zjSoundList = com_gameBg.zjSoundList;
                      _this2.djStart = com_gameBg.djStart;
                      _this2.djEnd = com_gameBg.djEnd;
                      _this2.djFbStart = com_gameBg.djFbStart;
                      _this2.djFbEnd = com_gameBg.djFbEnd;
                      _this2.gunlun = com_gameBg.gunlun;
                      _this2.speed = com_gameBg.speed;
                      _this2.beishu = com_gameBg.beishu;
                      _this2.itemspFrame = com_gameBg.itemspFrame;
                      _this2.skeletonData = com_gameBg.skeletonData;
                      if (_this2.firstNode) {
                        _this2.firstNode.destroyFromParent();
                      }
                      gts.Debug.Log("==game_bg==onComplete=");
                    }
                  }));
                  arrHLoad.push(asyncLoad("prefab/BaseLayer", function (err, BaseLayer) {
                    if (!err && BaseLayer) {
                      _this2.BaseLayer = instantiate(BaseLayer);
                      _this2.node.addChild(_this2.BaseLayer);
                      _this2.zIndexNode.splice(4, 0, _this2.BaseLayer);
                      gts.Debug.Log("==BaseLayer==onComplete=");
                    }
                  }));
                  arrHLoad.push(asyncLoad("prefab/gameMenu", function (err, gameMenu) {
                    if (!err && gameMenu) {
                      var node_gameMenu = instantiate(gameMenu);
                      _this2.node.addChild(node_gameMenu);
                      _this2.zIndexNode.push(node_gameMenu);
                      gts.Debug.Log("==gameMenu==onComplete=");
                    }
                  }));
                  Common.showWait();
                  _context2.next = 8;
                  return Promise.all(arrHLoad);
                case 8:
                  gts.Debug.Log("==await Promise.all(arrHLoad)==onComplete=");
                  for (index = 0; index < this.zIndexNode.length; index++) {
                    this.zIndexNode[index].getComponent(UITransform).priority = index + 2;
                  }
                  this._netManager.waitServiceSendData();
                  this._netManager.sendOnlineData(LsGameDef.eProto.getInfo, {});
                  this.initGame();
                  Common.closeWait();
                case 14:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function initView() {
            return _initView.apply(this, arguments);
          }
          return initView;
        }();
        _proto.initEvent = function initEvent() {
          //        // 监听网络协议
          this._eventManager.on(LsGameDef.eProto.getInfo, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.getRoomData, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.showResult, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.runGame, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.runTry, this.recvData, this);
          this._eventManager.on(this._configManager.protocolHall.getWallet, this.recvData, this);
          this._eventManager.on(this._configManager.protocolHall.pushWallet, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.getJackpot, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.changeTry, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.exitGame, this.recvData, this);
          this._eventManager.on(LsGameDef.eProto.checkInRoom, this.recvData, this);
          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.on(this._configManager.eventTransform.gameHide, this.gameHide, this); //切到后台
          this._eventManager.on(this._configManager.protocolHall.login, this.recvData, this); //断线重连
          this._eventManager.on(this._configManager.eventTransform.disConnect, this.disconnect, this); //断线
          //        // 监听按钮
          this._eventManager.on(this._configManager.protocolLs.runButton, this.runButton, this); //开始游戏
          this._eventManager.on(this._configManager.protocolLs.changeBase, this.changeBase, this); //改变底分
          this._eventManager.on(this._configManager.protocolLs.changeCoin, this.changeCoin, this); //改变硬币数
          this._eventManager.on(this._configManager.protocolLs.showBase, this.showBaseLayer, this); //改变硬币数
          this._eventManager.on(this._configManager.protocolLs.changetype, this.changeType, this); //切换运行type

          this._eventManager.on(this._configManager.protocolLs.autoRun, this.onClick_autoRun, this); //切换自动玩

          this._eventManager.on(this._configManager.protocolLs.backHall, this.backHall, this); //返回大厅

          this._eventManager.on(this._configManager.ButtonEvent.closePop, this.closePop, this); //显示规则

          this._eventManager.on(this._configManager.protocolLs.bigrecord, this.showPool, this);
          this._eventManager.on(this._configManager.protocolLs.jackpotHistory, this.showPool, this);
          this._eventManager.on(this._configManager.protocolLs["try"], this.tryGame, this); //试玩

          //        //传输事件
          //        // this._eventManager.on("auto", this.changeAutoType, this); //切换自动
        };

        _proto.getCurCoinIndex = function getCurCoinIndex(data) {
          var index = 0;
          for (var i = 0; i < this._coinList.length; i++) {
            if (this._coinList[i] == data) {
              index = i;
            }
          }
          return index;
        };
        _proto.tryGame = function tryGame(data //试玩
        ) {
          if (this._isAuto == true || this._isStart == true) {
            return;
          }
          this._tryGame = !this._tryGame;
          if (this._tryGame == true) {
            LsGameDef.constante.tryGame = true;
            this.trygame.active = true;
            this.trygameImg.active = false;
            this.trygame.getComponent(sp.Skeleton).setAnimation(0, "bianse", false);
            this.trygame.getComponent(sp.Skeleton).addAnimation(0, "CHOI THAT", true);
            this._curTryCoin = 50;
            this._curTryBase = 1000;
            this._curTryCoinIndex = 0;
            this.coinNum.string = this._curTryCoin + "";
            this.baseNum.string = this._curTryBase + "";
            this.tottalNum.string = Common.ChangeMoneyShow(this._curTryCoin * this._curTryBase, 1);
            this._resultData = null;
            this.unscheduleAllCallbacks();
            this.scoreNum.string = "";
            this.chouShui.string = "";
            this.showTig.active = false;
            var procol = this._serverId + "/" + LsGameDef.eProto.changeTry.split("/")[1];
            this._netManager.sendOnlineData(procol, {
              modeType: "trial"
            });
          } else {
            this.unscheduleAllCallbacks();
            this.scoreNum.string = "";
            this.chouShui.string = "";
            this.showTig.active = false;
            this.trygame.active = false;
            this.trygameImg.active = true;
            this.coinNum.string = this.curCoin + "";
            this.baseNum.string = this.curBase + "";
            this.tottalNum.string = Common.ChangeMoneyShow(this.curCoin * this.curBase, 1);
            this._curZzList = this._zzlist;
            this._curGold = parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD));
            this.gold.string = Common.numFormat(this._curGold);
            this.dpoolGold.string = "0";
            this.xPoolGold.string = "0";
            this._resultData = null;
            this.initJackPot();
            var _procol = this._serverId + "/" + LsGameDef.eProto.changeTry.split("/")[1];
            this._netManager.sendOnlineData(_procol, {
              modeType: "nomal"
            });
            LsGameDef.constante.tryGame = false;
          }
        };
        _proto.closePop = function closePop() {
          this._viewManager.closePopView();
        };
        _proto.backHall = function backHall(data) {
          //        // if (this._isStart == true && this._resultData != null) {
          //        //     return;
          //        // }
          this.runHall();
        };
        _proto.runHall = function runHall() {
          this.unscheduleAllCallbacks();
          this._audioManager.stopAllEffect();
          this._viewManager.setGameData(null);
          LsGameDef.constante.clear();
          console.time("bundle.onLoadHall");
          Common.showWait();
          //        //退到大厅
          Common.returnToHall(this, "LsGame");
        };
        _proto.disconnect = function disconnect() {
          Common.showNetTips();
        };
        _proto.onClick_autoRun = function onClick_autoRun() {
          var _this3 = this;
          if (this._tryGame == false && this.curCoin * this.curBase > parseInt(UserKey.GOLD)) {
            Common.showTip(i18n.t("10001"));
            return;
          }
          if (this._tryGame == true && this.curCoin * this.curBase > this._curGold) {
            Common.showTip(i18n.t("10001"));
            return;
          }
          this._isAuto = !this._isAuto;
          this.runAutoTip.active = this._isAuto;
          LsGameDef.constante.auto = this._isAuto;
          if (this._isStart == false) {
            this.startBtnBg1.getComponent(sp.Skeleton).setAnimation(0, "kaishi", true);
            this.scheduleOnce(function () {
              _this3.runButton("auto");
            }, 1);
          }
        };
        _proto.changeAutoType = function changeAutoType(data) {
          var _this4 = this;
          if (this._tryGame == false && this.curCoin * this.curBase > parseInt(UserKey.GOLD)) {
            Common.showTip(i18n.t("10001"));
            return;
          }
          if (this._tryGame == true && this.curCoin * this.curBase > this._curGold) {
            Common.showTip(i18n.t("10001"));
            return;
          }
          if (this._isAuto == false && this._isStart == false) {
            this._isAuto = true;
            this._changeAuto = true;
            LsGameDef.constante.auto = this._isAuto;
            this.runAutoTip.active = this._isAuto;
            this.startBtnBg1.getComponent(sp.Skeleton).setAnimation(0, "kaishi", true);
            if (data == "fb") {
              this.scheduleOnce(function () {
                _this4.runButton("auto");
              }, 1);
            } else {
              this.runButton("auto");
            }
          }
        };
        _proto.clearStatus = function clearStatus() {
          this._freeClick = 0;
          this.aniLayerBg.active = false;
          this.scoreNum.node.scale = v3(1, 1, 1);
          Tween.stopAllByTarget(this.scoreNum.node);
          if (this._resultData != null && this._resultData.TotalBackScore > 0) {
            this.scoreNum.string = Common.numFormat(this._resultData.TotalBackScore);
            var self = this;
            tween(this.scoreNum.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              self.scoreNum.node.getComponent(UIOpacity).opacity = 255;
              self.scoreNum.string = "";
              self.chouShui.string = "";
            }).start();
          }
          if (this._resultData != null && this._tryGame == true) {
            this._curGold = this._resultData.TrialData.VndBalance;
            this.gold.string = Common.numFormat(this._curGold);
          }
          this._isStart = true;
          this.beishu.active = false;
          this.addBtn.getComponent(Button).interactable = false;
          this.jianBtn.getComponent(Button).interactable = false;
          this.baseBtn.getComponent(Button).interactable = false;
          this.runtime = 0;
          this._resultData = null;
          this.showTig.active = false;
          this._rowIndex = 0;
          this.curtype = this.runtype;
          this._step = 50;
          this.speedShowRe = false;
          this.isMusic = true;
          this.curTotalNum = 0;
          this.lianxuIndex = 0;
          this.djLayer.active = false;
          if (this.audioId != 0) {
            this.audioId = 0;
            this._audioManager.stopSound();
          }
          this.unscheduleAllCallbacks(); //清理所有定时器
          if (this._tryGame == false) {
            this._curGold = parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD));
            this.gold.string = Common.numFormat(this._dataManager.getUserDataForKey(UserKey.GOLD));
            this.showPotNum();
          }
          this.clearSpine();
          this.resumeItems();
        };
        _proto.clearSpine = function clearSpine() {
          for (var i = 0; i < this._actionList.length; i++) {
            var data = this._actionList[i];
            for (var j = 0; j < data.ani.length; j++) {
              data.ani[j].removeFromParent();
              data.ani[j].destroy();
            }
          }
          for (var _i = 0; _i < this._actionWild.length; _i++) {
            this._actionWild[_i].removeFromParent();
            this._actionWild[_i].destroy();
          }

          //        // gts.Debug.Log("====clearSpine======");

          this._actionList = [];
          this._actionList5 = [];
          this._actionWild = [];
        };
        _proto.resumeItems = function resumeItems() {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = true;
            this.items[i].getChildByName("jackPot").active = false;
            this._curShowItem[i] = this.items[i];
          }
        };
        _proto.addGold = function addGold(data) {
          this._stepGold = Math.floor(data / 33);
          this.schedule(this.goldshow, 0.03);
        };
        _proto.goldshow = function goldshow() {
          var cur = parseInt(this.gold.string.replace(/,/g, ""));
          var cur1 = cur + this._stepGold;
          if (this._stepGold > 0) {
            if (cur1 >= this._curGold) {
              cur1 = this._curGold;
              this.unschedule(this.goldshow);
            }
          } else if (this._stepGold < 0) {
            if (cur1 <= this._curGold) {
              cur1 = this._curGold;
              this.unschedule(this.goldshow);
            }
          }
          this.gold.string = Common.numFormat(cur1);
        };
        _proto.runButton = function runButton(data) {
          if (this._resultData != null && this._resultData.FreeGameTimes > 0 && this._freeClick == 1) {
            this._freeClick = 2;
            if (this._resultData != null && this._resultData.TotalBackScore > 0) {
              this.scoreNum.string = Common.numFormat(this._resultData.TotalBackScore);
              this.actScore();
              if (this._resultData != null && this._resultData.Commission > 0) {
                this.chouShui.string = i18n.lang.lsGame.Commission + Common.numFormat(this._resultData.Commission);
              }
            }
            this.djLayer.active = false;
            if (this.audioId != 0) {
              this.audioId = 0;
              this._audioManager.stopSound();
            }
            this.unscheduleAllCallbacks(); //清理所有定时器
            this.enterFbScene();
            return;
          }
          if (this._resultData != null && this._resultData.FreeGameTimes > 0 && this._freeClick > 1) {
            return;
          }
          if (data == "run" && this._changeAuto == true) {
            this._changeAuto = false;
            return;
          }
          if (data == "run" && this._isAuto == true) {
            this._isAuto = false;
            LsGameDef.constante.auto = this._isAuto;
            this.runAutoTip.active = this._isAuto;
          }
          if (this._isStart == false) {
            if (this._tryGame == false && this.curCoin * this.curBase > parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD))) {
              if (this._isAuto == true) {
                this._isAuto = false;
                LsGameDef.constante.auto = this._isAuto;
                this._curGold = parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD));
                this.gold.string = Common.numFormat(this._curGold);
                this.resumeButtonStatus();
              }
              Common.showTip(i18n.t("10001"));
              return;
            }
            if (this._tryGame == true && this.curCoin * this.curBase > this._curGold) {
              if (this._isAuto == true) {
                this._isAuto = false;
                LsGameDef.constante.auto = this._isAuto;
                this.resumeButtonStatus();
              }
              Common.showTip(i18n.t("10001"));
              return;
            }
            this.clearStatus();
            if (this._tryGame == false) {
              this._curGold = this._curGold - this.curCoin * this.curBase;
              this.addGold(-this.curCoin * this.curBase);
            } else {
              this._curGold = this._curGold - this._curTryCoin * this._curTryBase;
              this.addGold(-this._curTryCoin * this._curTryBase);
            }
            if (this._isAuto == true) {
              this.startBtnBg2.active = true;
              this.startBtnBg2.getComponent(sp.Skeleton).setAnimation(0, "BAMDEDUNG_shanguang", false);
              var self = this;
              this.startBtnBg2.getComponent(sp.Skeleton).setCompleteListener(function () {
                self.startBtnBg2.active = false;
              });
            } else {
              this.startBtnBg1.getComponent(sp.Skeleton).setAnimation(0, "kaishi", true);
            }
            this.doingBet();
          } //已经开始滚动
          else {
            Common.showLog("已经开始滚动");
            if (this._resultData != null) {
              this.isMusic = false;
              if (this.curtype == 1) {
                this.runtime = 1;
                this.speedShowRe = true;
              } else {
                this.runtime = 1;
              }
            }
          }
        };
        _proto.startAni = function startAni() {
          //        // this.reOpen = true;
          if (this.runtype == 2) {
            //            //快速滚动
            this.schedule(this.runItems, 0.01);
          } else {
            this.schedule(this.runItems2, 0.01);
          }
        };
        _proto.runItems2 = function runItems2(dt) {
          this.runtime = this.runtime + 0.01;
          for (var i = 0; i < this.items.length; i++) {
            var col = i % 5;
            if (col > this._rowIndex - 1) {
              this.items[i].setPosition(this.items[i].getPosition().x, this.items[i].getPosition().y - this._step);
              if (i == 4) {
                if (this.items[i].getPosition().y <= this._startPosList[5].y) {
                  this.reSetItem();
                }
              }
            }
          }
          //        // if (this.runtime >= 0.6 && this._resultData != null && this.curtype == 1) {
          if (this.runtime >= 0.6 && this.curtype == 1) {
            if (this._resultData != null) {
              this.runtime = 0.3;
              this._step = 50;
              this._rowIndex = this._rowIndex + 1;
              this._audioManager.playOneShot(this.gunlun);
              this.drawSPByRowData(null); //绘制一列
              this.node_quick.active = false;
              if (this.lianxuIndex == 2 && this.speedShowRe == false) {
                this.runtime = -1;
                this._step = 80;
                this.node_quick.active = true;
              }
              if (this._rowIndex >= 5 || this.speedShowRe == true) {
                if (this._rowIndex + 1 <= 5) {
                  for (var i = this._rowIndex + 1; i <= 5; i++) {
                    this.drawSPByRowData(i);
                  }
                }
                this._posList = this._resultData.ResultPositions;
                var that = this;
                this.scheduleOnce(function () {
                  that.showResult(that.isMusic);
                }, 0.2);
                this.unschedule(this.runItems2);
              }
            }
            //            // else if (this.runtime >= 2.0) {
            //            //     gts.Debug.Log("预防-没有结果空转runItems22222");
            //            //     this.runtime = 0.6;

            //            //     //预防-没有结果空转
            //            //     if (this._tryGame == true) {
            //            //         let procol = this._serverId + "/" + LsGameDef.eProto.runTry.split("/")[1];
            //            //         this._netManager.sendOnlineData(procol, {
            //            //             action: "HD_SpinTrial",
            //            //             CoinValue: parseInt(this.baseNum.string),
            //            //             CoinNum: parseInt(this.coinNum.string),
            //            //         });
            //            //     } else {
            //            //         let procol = this._serverId + "/" + LsGameDef.eProto.runGame.split("/")[1];
            //            //         this._netManager.sendOnlineData(procol, {
            //            //             action: "HD_Spin",
            //            //             CoinValue: parseInt(this.baseNum.string),
            //            //             CoinNum: parseInt(this.coinNum.string),
            //            //         });
            //            //     }
            //            // }
          }
        };

        _proto.runItems = function runItems(dt) {
          this.runtime = this.runtime + 0.01;
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].setPosition(this.items[i].position.x, this.items[i].getPosition().y - 50);
            if (i == 0) {
              if (this.items[i].getPosition().y <= this._startPosList[5].y) {
                this.reSetItem();
              }
            }
          }
          if (this.runtime >= 0.5) {
            if (this._resultData != null) {
              this._posList = this._resultData.ResultPositions;
              this.drawSPByData2(); //绘制最终结果图片
              var that = this;
              this._audioManager.playSound(this.gunlun, false);
              this.scheduleOnce(function () {
                that.showResult(that.isMusic);
              }, 0.2);
              this.unschedule(this.runItems);
            }
            //            //  if (this.runtime >= 3.0) {
            //            //     this.runtime = 0.5;

            //            //     gts.Debug.Log("预防-没有结果空转runItems0000");
            //            //     //预防-没有结果空转
            //            //     if (this._tryGame == true) {
            //            //         let procol = this._serverId + "/" + LsGameDef.eProto.runTry.split("/")[1];
            //            //         this._netManager.sendOnlineData(procol, {
            //            //             action: "HD_SpinTrial",
            //            //             CoinValue: parseInt(this.baseNum.string),
            //            //             CoinNum: parseInt(this.coinNum.string),
            //            //         });
            //            //     } else {
            //            //         let procol = this._serverId + "/" + LsGameDef.eProto.runGame.split("/")[1];
            //            //         this._netManager.sendOnlineData(procol, {
            //            //             action: "HD_Spin",
            //            //             CoinValue: parseInt(this.baseNum.string),
            //            //             CoinNum: parseInt(this.coinNum.string),
            //            //         });
            //            //     }
            //            // }
          }
        };

        _proto.update = function update(dt) {
          if (this.reOpen) {
            this.checkReOpen(dt);
          }
        };
        _proto.doingBet = function doingBet() {
          //        // console.log("doingBet");
          this.reOpen = true;
          if (this._tryGame == true) {
            var procol = this._serverId + "/" + LsGameDef.eProto.runTry.split("/")[1];
            this._netManager.sendOnlineData(procol, {
              action: "HD_SpinTrial",
              CoinValue: parseInt(this.baseNum.string),
              CoinNum: parseInt(this.coinNum.string)
            });
          } else {
            var _procol2 = this._serverId + "/" + LsGameDef.eProto.runGame.split("/")[1];
            this._netManager.sendOnlineData(_procol2, {
              action: "HD_Spin",
              CoinValue: parseInt(this.baseNum.string),
              CoinNum: parseInt(this.coinNum.string)
            });
          }
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
          if (!this._posList) {
            return;
          }
          for (var i = 0; i < this._posList.length; i++) {
            if (this.curtype == 2 || this.curtype == 1 && i > this._rowIndex - 1) {
              if (this._posList[i] == 0) {
                this._posList[i] = this._curZzList[i].length - 1;
              } else {
                this._posList[i] = this._posList[i] - 1;
              }
            }
          }
        };
        _proto.getColData = function getColData(data, curindex //根据卷轴位置 获取当前每个点的图案id
        ) {
          var curdata = [];
          var value1 = data;
          var value0 = value1 == 0 ? this._curZzList[curindex - 1].length - 1 : value1 - 1;
          var value2 = value1 + 1 == this._curZzList[curindex - 1].length ? 0 : value1 + 1;
          var value3 = value2 + 1 == this._curZzList[curindex - 1].length ? 0 : value2 + 1;
          curdata.push(this._curZzList[curindex - 1][value0]);
          curdata.push(this._curZzList[curindex - 1][value1]);
          curdata.push(this._curZzList[curindex - 1][value2]);
          curdata.push(this._curZzList[curindex - 1][value3]);
          return curdata;
        };
        _proto.drawSPByData1 = function drawSPByData1() {
          //        //滚动时  根据卷轴位置绘制 当前显示图案 可能只显示4 3 2 1列
          this._curPageData = this.getPicturesData();
          for (var i = 0; i < this._curPageData.length; i++) {
            if (i % 5 > this._rowIndex - 1) {
              this.items[i].active = true;
              this.setItemSprite(this.items[i], this._curPageData[i]);
              this.items[i].setPosition(this._startPosList[i].x, this._startPosList[i].y);
            }
          }
        };
        _proto.drawSPByData2 = function drawSPByData2() {
          //        //快速模式时 结束滚动重新绘制
          this._curPageData = this.getPicturesData();
          for (var i = 0; i < this._curPageData.length; i++) {
            this.items[i].active = true;
            this.setItemSprite(this.items[i], this._curPageData[i]);
            this.items[i].setPosition(this._startPosList[i].x, this._startPosList[i].y);
            tween(this.items[i]).to(0.1, {
              position: v3(this._startPosList[i].x, this._startPosList[i].y - 50)
            }).to(0.1, {
              position: v3(this._startPosList[i].x, this._startPosList[i].y)
            }).start();
          }
        };
        _proto.drawSPByRowData = function drawSPByRowData(curindex //根据卷轴位置绘制 一列的图案 //一列一列
        ) {
          var curIdx = curindex == null ? this._rowIndex : curindex;
          var data = this.getColData(this._resultData.ResultPositions[curIdx - 1], curIdx);
          var haveYb = false;
          var self = this;
          for (var i = 0; i < data.length; i++) {
            if (i > 0 && data[i] == "SCATTER") {
              haveYb = true;
            }
            var index = 5 * i + curIdx - 1;
            this.setItemSprite(this.items[index], data[i]);
            this.items[index].setPosition(this._startPosList[index].x, this._startPosList[index].y);
            tween(this.items[index]).to(0.1, {
              position: v3(this._startPosList[index].x, this._startPosList[index].y - 50)
            }).to(0.1, {
              position: v3(this._startPosList[index].x, this._startPosList[index].y)
            }).start();
          }
          if (haveYb == true && this.lianxuIndex != -1 && this.speedShowRe == false) {
            this.lianxuIndex = this.lianxuIndex + 1;
            this._audioManager.playOneShot(this.yingbiList[this.lianxuIndex - 1]);
            if (this.lianxuIndex == 2) {
              this.scheduleOnce(function () {
                self._audioManager.playOneShot(self.speed);
              }, 0.5);
            }
          }
          if (this.lianxuIndex != -1 && this.speedShowRe == false && haveYb == false) {
            this.lianxuIndex = -1;
          }
        };
        _proto.setItemSprite = function setItemSprite(item, data) {
          var spritef;
          var childDragon = item.getChildByName("dragon");
          if (data == "WILD") {
            if (childDragon) {
              childDragon.active = true;
              var ske = childDragon.getComponent(sp.Skeleton);
              ske.setAnimation(0, this.spData.WILD.ani1, true);
            } else {
              var node = new Node();
              node.name = "dragon";
              var _ske = node.addComponent(sp.Skeleton);
              _ske.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.PRIVATE_CACHE);
              item.addChild(node);
              _ske.skeletonData = this.skeletonData[this.spData.WILD.id];
              _ske.setAnimation(0, this.spData.WILD.ani1, true);
            }
            spritef = this.itemspFrame[this.fuben[this._gameType]];
          } else {
            spritef = this.itemspFrame[this.spName[data]];
            if (childDragon) {
              childDragon.active = false;
            }
          }
          item.getComponent(Sprite).spriteFrame = spritef;
        };
        _proto.showJackPot = function showJackPot() {
          if (this._resultData.JackpotPositions == null) {
            return;
          }
          for (var i = 0; i < this._resultData.JackpotPositions.length; i++) {
            for (var _i2 = 0, _Object$entries = Object.entries(this._resultData.JackpotPositions[i]); _i2 < _Object$entries.length; _i2++) {
              var _Object$entries$_i = _Object$entries[_i2],
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              var index = (parseInt(key) + 1) * 5 + value;
              this._curShowItem[index].getChildByName("jackPot").active = true;
            }
          }
        };
        _proto.playEffect = function playEffect() {
          if (this._resultData.Result == null) {
            return;
          }
          this.aniLayerBg.active = true;
          for (var i = 0; i < this._resultData.Result.length; i++) {
            var data = this._resultData.Result[i];
            var redata = {
              ani: [],
              aniName: "",
              timescale: 1,
              picName: data.Symbol,
              value: data.CoinValue,
              aniType: 1,
              lineType: data.LineType,
              SymbolScore: data.SymbolScore
            };
            var aniindex = data.LineType == 5 ? "ani3" : "ani2";
            redata.aniName = this.spData[data.Symbol][aniindex];
            redata.timescale = this.spData[data.Symbol].timescale;
            for (var j = 0; j < data.SymbolPositions.length; j++) {
              var index = 0;
              for (var _i3 = 0, _Object$entries2 = Object.entries(data.SymbolPositions[j]); _i3 < _Object$entries2.length; _i3++) {
                var _Object$entries2$_i = _Object$entries2[_i3],
                  key = _Object$entries2$_i[0],
                  value = _Object$entries2$_i[1];
                index = (parseInt(key) + 1) * 5 + value;
              }
              var item = instantiate(this.itemAction);
              this.aniLayer.addChild(item);
              item.setPosition(this.items[index].getPosition().x, this.items[index].getPosition().y);
              this.items[index].active = false;
              item.getChildByName("item").getComponent(sp.Skeleton).skeletonData = this.skeletonData[this.spData[data.Symbol].id];
              var bg = item.getChildByName("bg");
              if (this.itemBg[data.Symbol] != undefined) {
                bg.getComponent(Sprite).spriteFrame = this.itemsBgFrame[this.itemBg[data.Symbol]];
                bg.active = true;
              }
              item.getChildByName("item").getComponent(sp.Skeleton).setAnimation(0, redata.aniName, true);
              redata.ani.push(item);
              this._curShowItem[index] = item;
            }
            if (data.LineType == 5 && (data.Symbol == "PACKET" || data.Symbol == "TORTOISE" || data.Symbol == "FISH" || data.Symbol == "LION" || data.Symbol == "PHOENIX")) {
              redata.aniType = 2; //5连 带特效的
              this._actionList5.push(redata);
            }
            if (data.Symbol == "SCATTER") {
              redata.aniType = 2; //硬币一直转
              this._actionList5.push(redata);
            }
            this._actionList.push(redata);
          }
          if (this._resultData.WildPositions != null) {
            for (var i = 0; i < this._resultData.WildPositions.length; i++ //wild 动画
            ) {
              var _index = 0;
              var _data = this._resultData.WildPositions[i];
              for (var _i4 = 0, _Object$entries3 = Object.entries(_data); _i4 < _Object$entries3.length; _i4++) {
                var _Object$entries3$_i = _Object$entries3[_i4],
                  _key2 = _Object$entries3$_i[0],
                  val = _Object$entries3$_i[1];
                _index = (parseInt(_key2) + 1) * 5 + val;
              }
              this.items[_index].active = false;
              var _item = this._curShowItem[_index];
              _item.setPosition(this.items[_index].getPosition().x, this.items[_index].getPosition().y);
              _item.active = true;
            }
          }
          for (var i = 0; i < this._actionList5.length; i++) {
            var _data2 = this._actionList5[i];
            for (var _i5 = 0, _Object$entries4 = Object.entries(_data2.ani); _i5 < _Object$entries4.length; _i5++) {
              var _Object$entries4$_i = _Object$entries4[_i5],
                _key3 = _Object$entries4$_i[0],
                _val = _Object$entries4$_i[1];
              var _item2 = _val.getChildByName("item");
              if (_item2) {
                _item2.getComponent(sp.Skeleton).setAnimation(0, _data2.aniName, true);
              }
            }
          }
          this.runItemAction();
          this.showJackPot();
        };
        _proto.initEffect = function initEffect() {
          if (this._resultData.Result == null) {
            return;
          }
          for (var i = 0; i < this._resultData.Result.length; i++ //图片替换成动画
          ) {
            var data = this._resultData.Result[i];
            for (var j = 0; j < data.SymbolPositions.length; j++) {
              var index = 0;
              for (var _i6 = 0, _Object$entries5 = Object.entries(data.SymbolPositions[j]); _i6 < _Object$entries5.length; _i6++) {
                var _Object$entries5$_i = _Object$entries5[_i6],
                  key = _Object$entries5$_i[0],
                  value = _Object$entries5$_i[1];
                index = (parseInt(key) + 1) * 5 + value;
              }
              var item = instantiate(this.itemAction);
              this.aniLayer.addChild(item);
              item.setPosition(this.items[index].getPosition().x, this.items[index].getPosition().y);
              item.getChildByName("item").getComponent(sp.Skeleton).skeletonData = this.skeletonData[this.spData[data.Symbol].id];
              this._curShowItem[index] = item;
              item.active = false;
            }
          }
          if (this._resultData.WildPositions != null) {
            for (var i = 0; i < this._resultData.WildPositions.length; i++ //wild 动画
            ) {
              var _index2 = 0;
              var _data3 = this._resultData.WildPositions[i];
              for (var _i7 = 0, _Object$entries6 = Object.entries(_data3); _i7 < _Object$entries6.length; _i7++) {
                var _Object$entries6$_i = _Object$entries6[_i7],
                  _key4 = _Object$entries6$_i[0],
                  val = _Object$entries6$_i[1];
                _index2 = (parseInt(_key4) + 1) * 5 + val;
              }
              var _item3 = instantiate(this.itemAction);
              this.aniLayer.addChild(_item3);
              _item3.setPosition(this.items[_index2].getPosition().x, this.items[_index2].getPosition().y);
              _item3.getChildByName("item").getComponent(sp.Skeleton).timeScale = 1;
              _item3.getChildByName("item").getComponent(sp.Skeleton).skeletonData = this.skeletonData[this.spData.WILD.id];
              _item3.getChildByName("item").getComponent(sp.Skeleton).setAnimation(0, this.spData.WILD.ani2, true);
              var itembg = _item3.getChildByName("bg");
              itembg.getComponent(Sprite).spriteFrame = this.itemspFrame[this.fuben[this._gameType]];
              itembg.active = true;
              this._actionWild.push(_item3);
              this._curShowItem[_index2] = _item3;
              _item3.active = false;
              //                // this.items[index].active = false;
            }
          }

          for (var i = 0; i < this._actionList5.length; i++ //5连动画
          ) {
            var _data4 = this._actionList5[i];
            for (var _i8 = 0, _Object$entries7 = Object.entries(_data4.ani); _i8 < _Object$entries7.length; _i8++) {
              var _Object$entries7$_i = _Object$entries7[_i8],
                _key5 = _Object$entries7$_i[0],
                _val2 = _Object$entries7$_i[1];
              var _item4 = _val2.getChildByName("item");
              if (_item4) {
                _item4.getComponent(sp.Skeleton).setAnimation(0, _data4.aniName, true);
              }
            }
          }
        };
        _proto.runItemAction = function runItemAction() {
          this._acIndex = 0;
          this.startRun();
          this.schedule(this.startRun, 2);
        };
        _proto.startRun = function startRun() {
          //        //  {ani:[],aniName:"",timescale:1,picName:data.Symbol,value:data.CoinValue,aniType:1,lineType:data.LineType,SymbolScore:data.SymbolScore};

          var data = this._actionList[this._acIndex];
          if (this.showTig.active == false || this._actionList.length > 1) {
            this.showTig.active = true;
            var beishu = this._resultData.WildTimes > 1 ? this._resultData.WildTimes : 1;
            var totalNum = beishu * data.value * data.SymbolScore;
            var baseNum = beishu * data.SymbolScore;
            var richtext = this.showTig.getChildByName("zhongText").getComponent(RichText);
            richtext.string = "";
            if (data.picName == "SCATTER") {
              richtext.string = richtext.string + "<color=#6f4209>" + data.lineType + " " + "</c>" + "<img src=" + "'" + data.picName + "'" + " width=30 height=26/>" + "<color=#6f4209>" + " trúng " + Common.numFormat(data.SymbolScore) + "</color>";
            } else {
              if (this._resultData.WildTimes > 1) {
                //                    //data.picName + "width=50 height=46   <img src='K'
                richtext.string = richtext.string + "<color=#6f4209>" + data.lineType + " " + "</c>" + "<img src=" + "'" + data.picName + "'" + " width=30 height=26/>" + "<color=#6f4209>" + " trúng " + Common.numFormat(data.SymbolScore) + " " + "x" + " " + beishu + " " + "=" + " " + Common.numFormat(baseNum) + " " + "x" + " " + Common.numFormat(data.value) + " " + "=" + " " + Common.numFormat(totalNum) + "</color>";
              } else {
                richtext.string = richtext.string + "<color=#6f4209>" + data.lineType + " " + "</c>" + "<img src=" + "'" + data.picName + "'" + " width=30 height=26/>" + "<color=#6f4209>" + " trúng " + Common.numFormat(data.SymbolScore) + " " + "=" + " " + Common.numFormat(baseNum) + " " + "x" + " " + Common.numFormat(data.value) + " " + "=" + " " + Common.numFormat(totalNum) + "</color>";
              }
            }
          }
          if (data.aniType == 1) {
            var _loop = function _loop() {
              var ske = data.ani[i].getChildByName("item").getComponent(sp.Skeleton);
              ske.timeScale = 1.5;
              ske.setAnimation(0, data.aniName, false);
              var light = data.ani[i].getChildByName("light");
              light.active = true;
              ske.setCompleteListener(function () {
                light.active = false;
              });
            };
            for (var i = 0; i < data.ani.length; i++) {
              _loop();
            }
          }
          this._acIndex = this._acIndex + 1;
          if (this._acIndex >= this._actionList.length) {
            this._acIndex = 0;
          }
        };
        _proto.resumeButtonStatus = function resumeButtonStatus() {
          this._isStart = false;
          this.addBtn.getComponent(Button).interactable = true;
          this.jianBtn.getComponent(Button).interactable = true;
          this.baseBtn.getComponent(Button).interactable = true;
          if (this._isAuto == false) {
            this.runAutoTip.active = false;
            this.startBtnBg1.getComponent(sp.Skeleton).setAnimation(0, "weikaishi", true);
          }
        };
        _proto.showResult1 = function showResult1() {
          this.resumeButtonStatus();
          if (this._resultData.WildTimes > 1) {
            this.updateBeishu(this._resultData.WildTimes);
          }
          this.playEffect();
          this.scoreNum.string = Common.numFormat(this._resultData.TotalBackScore);
          if (this._resultData != null && this._resultData.Commission > 0) {
            this.chouShui.string = i18n.lang.lsGame.Commission + Common.numFormat(this._resultData.Commission);
          }
          if (LsGameDef.constante.auto) {
            this.changeAutoType("fb");
          }
        };
        _proto.showResult = function showResult(data) {
          this._freeClick = 1;
          this.resumeButtonStatus();
          if (this._resultData.WildTimes > 1) {
            this.updateBeishu(this._resultData.WildTimes);
          }
          this.playEffect();
          if (this._resultData.TotalBackScore > 0 && data == false) {
            //            //中途强制点击 并且中将
            this.scoreNum.string = Common.numFormat(this._resultData.TotalBackScore);
            this.actScore();
            if (this._resultData != null && this._resultData.Commission > 0) {
              this.chouShui.string = i18n.lang.lsGame.Commission + Common.numFormat(this._resultData.Commission);
            }
            this._curGold = this._tryGame == false ? parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD)) : this._resultData.TrialData.VndBalance;
            var step = parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD)) - parseInt(this.gold.string.replace(/,/g, ""));
            step = this._tryGame == false ? step : this._resultData.TotalBackScore;
            this.addGold(step);
            if (this._resultData != null && this._resultData.FreeGameTimes > 0) {
              if (this._resultData != null && this._resultData.TotalBackScore > 0) {
                this.scoreNum.string = Common.numFormat(this._resultData.TotalBackScore);
              }
              if (this._resultData != null && this._resultData.Commission > 0) {
                this.chouShui.string = i18n.lang.lsGame.Commission + Common.numFormat(this._resultData.Commission);
              }
              this.djLayer.active = false;
              this._audioManager.stopAllEffect();
              this.unscheduleAllCallbacks(); //清理所有定时器
              this.enterFbScene();
              return;
            }
          }
          if (this._resultData.TotalBackScore > 0) {
            this.playSound(data);
          } else {
            this._curGold = this._tryGame == false ? parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD)) : this._resultData.TrialData.VndBalance;
            var _step = parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD)) - parseInt(this.gold.string.replace(/,/g, ""));
            _step = this._tryGame == false ? _step : this._resultData.TotalBackScore;
            this.addGold(_step);
            this.autoRun();
          }
          if (this._tryGame == true) {
            this._tryDpools = this._resultData.TrialData.GoldJackpot;
            this._tryXpools = this._resultData.TrialData.SilverJackpot;
            if (this._tryDpools) {
              this.dpoolGold.string = Common.numFormat(this._tryDpools[this._curTryCoinIndex]);
            }
            if (this._tryXpools) {
              this.xPoolGold.string = Common.numFormat(this._tryXpools[this._curTryCoinIndex]);
            }
          }
        };
        _proto.autoRun = function autoRun() {
          if (this._isAuto == true && this._resultData.FreeGameTimes == 0) {
            var self = this;
            this.scheduleOnce(function () {
              self.runButton("auto");
            }, 0.3);
          }
        };
        _proto.addScore = function addScore() {
          //        // if (this._resultData.MusicType == "bet40") {
          //        //     this._stepTime = 15;
          //        //     let step = Math.floor(this._resultData.TotalBackScore / (this._stepTime * 33));
          //        //     this._stepNum = Math.floor((this.curCoin * this.curBase * 40) / (this._stepTime * 33));
          //        //     if (step / this._stepNum >= 2) {
          //        //         this._stepTime = 30;
          //        //         this._stepNum = Math.floor(this._resultData.TotalBackScore / (this._stepTime * 33));
          //        //     }
          //        // } else {
          //        //     this._stepNum = Math.floor(this._resultData.TotalBackScore / (this._stepTime * 33));
          //        // }
          Tween.stopAllByTarget(this.scoreNum.node);
          this.scoreNum.node.scale = v3(1, 1, 1);
          this._stepNum = Math.floor(this._resultData.TotalBackScore / 66);
          this.schedule(this.addscoreNum, 0.03);
        };
        _proto.actScore = function actScore() {
          tween(this.scoreNum.node).repeatForever(tween(this.scoreNum.node).to(0.3, {
            scale: v3(0.9, 0.9, 1)
          }).to(0.3, {
            scale: v3(1.1, 1.1, 1)
          }).start()).start();
        };
        _proto.addscoreNum = function addscoreNum() {
          var self = this;
          this.curTotalNum = this.curTotalNum + this._stepNum;
          if (this.curTotalNum >= this._resultData.TotalBackScore) {
            this.curTotalNum = this._resultData.TotalBackScore;
            this.scoreNum.string = Common.numFormat(this.curTotalNum);
            this.unschedule(this.addscoreNum);
            //            // cc.tween(this.scoreNum.node).to(0.3, { scaleX: 0.8 }).to(0.3, { scaleX: 1.2 }).union().repeatForever().start();
            this.actScore();
            if (this._resultData.MusicType == "bet40") {
              //                //大奖音效
              if (this.audioId != 0) {
                this.audioId = 0;
                this._audioManager.stopSound();
              }
              if (this._gameType == "Nomal") {
                //                    //正常
                this._audioManager.playOneShot(this.djEnd);
                self.scheduleOnce(function () {
                  self.djLayer.active = false;
                  self.autoRun();
                  if (this._resultData.FreeGameTimes > 0) {
                    self.enterFbScene();
                  } else {
                    self._curGold = self._tryGame == false ? parseInt(self._dataManager.getUserDataForKey(UserKey.GOLD)) : this._resultData.TrialData.VndBalance;
                    var step = parseInt(self._dataManager.getUserDataForKey(UserKey.GOLD)) - parseInt(self.gold.string.replace(/,/g, ""));
                    step = self._tryGame == false ? step : this._resultData.TotalBackScore;
                    self.addGold(step);
                  }
                }, 2);
              } //副本
              else {
                this._audioManager.playOneShot(this.djFbEnd);
                self.scheduleOnce(function () {
                  self.djLayer.active = false;
                  self.autoRun();
                }, 2);
              }
            }
          } else {
            this.scoreNum.string = Common.numFormat(this.curTotalNum);
            if (this._resultData != null && this._resultData.Commission > 0) {
              this.chouShui.string = i18n.lang.lsGame.Commission + Common.numFormat(this._resultData.Commission);
            }
          }
        };
        _proto.enterFbScene = function enterFbScene() {
          var self = this;
          this.scheduleOnce(function () {
            this.node_free.active = true;
            var ske = this.node_free.getComponent(sp.Skeleton);
            ske.setAnimation(0, "FS", false);
            ske.setCompleteListener(function () {
              self._viewManager.changeScene("LsFbStartScene", function () {}, function () {}, true);
            });
          }, 0.8);
        };
        _proto.playZhongSound = function playZhongSound() {
          var self = this;
          if (this._resultData.MusicType == "bet40") {
            if (this._gameType == "Nomal") {
              //                //
              this.audioId = this._audioManager.playSound(this.djStart, true);
            } //副本大奖
            else {
              this.audioId = this._audioManager.playSound(this.djFbStart, true);
            }
            this.djLayer.active = true;
            this.djLayer.getComponent(sp.Skeleton).setAnimation(0, "eff_baobi_loop3", true);
          } else {
            var stime = this.musicTime[this._resultData.MusicType];
            var zjSound = isNaN(this.musicType[this._resultData.MusicType]) ? null : this.zjSoundList[this.musicType[this._resultData.MusicType] % this.zjSoundList.length];
            if (zjSound != null) {
              this._audioManager.playSound(zjSound);
            }
            self._stepTime = stime;
            self.scheduleOnce(function () {
              self.scoreNum.string = Common.numFormat(this._resultData.TotalBackScore);
              self.unschedule(self.addscoreNum);
              self.autoRun();
              if (this._resultData.FreeGameTimes > 0) {
                self.enterFbScene();
              } else {
                self._curGold = self._tryGame == false ? parseInt(self._dataManager.getUserDataForKey(UserKey.GOLD)) : this._resultData.TrialData.VndBalance;
                var step = parseInt(self._dataManager.getUserDataForKey(UserKey.GOLD)) - parseInt(self.gold.string.replace(/,/g, ""));
                step = self._tryGame == false ? step : this._resultData.TotalBackScore;
                self.addGold(step);
              }
            }, stime);
          }
          this.addScore();
        };
        _proto.playSound = function playSound(data) {
          var self = this;
          if (this._resultData.WildTimes >= 2 && this._resultData.WildTimes < 5) {
            this._audioManager.playOneShot(this.wildSounds[0]);
            self.scheduleOnce(function () {
              if (this._resultData.FreeGameTimes > 0) {
                self._audioManager.playOneShot(self.yingbi);
                self.scheduleOnce(function () {
                  if (data == true) {
                    self.playZhongSound();
                  } else {
                    self.enterFbScene();
                  }
                }, 3);
              } else {
                if (data == true) {
                  self.playZhongSound();
                }
              }
            }, 2);
          } else if (this._resultData.WildTimes >= 5) {
            this._audioManager.playOneShot(this.wildSounds[1]);
            self.scheduleOnce(function () {
              if (this._resultData.FreeGameTimes > 0) {
                self._audioManager.playOneShot(self.yingbi);
                self.scheduleOnce(function () {
                  if (data == true) {
                    self.playZhongSound();
                  } else {
                    self.enterFbScene();
                  }
                }, 3);
              } else {
                if (data == true) {
                  self.playZhongSound();
                }
              }
            }, 2.5);
          } else {
            if (this._resultData.FreeGameTimes > 0) {
              self._audioManager.playOneShot(self.yingbi);
              self.scheduleOnce(function () {
                if (data == true) {
                  self.playZhongSound();
                } else {
                  self.enterFbScene();
                }
              }, 3);
            } else {
              if (data == true) {
                self.playZhongSound();
              }
            }
          }
        };
        _proto.updateBeishu = function updateBeishu(bs) {
          var self = this;
          this._buddle.load("textures/wtimes/w5" + bs, SpriteFrame, function (err, beishu) {
            self.beishu.active = true;
            self.beishu.getComponent(Sprite).spriteFrame = beishu;
          });
        };
        _proto.changeType = function changeType() {
          if (this.runtype == 1) {
            this.runtype = 2;
          } else {
            this.runtype = 1;
          }
          LsGameDef.constante.runType = this.runtype;
          this.runTypeButton.getChildByName("tag").active = this.runtype == 2;
        };
        _proto.showBaseLayer = function showBaseLayer() {
          this.BaseLayer.active = true;
        };
        _proto.changeTryCoin = function changeTryCoin(data) {
          if (data == "add") {
            this._curTryCoinIndex = this._curTryCoinIndex + 1;
            if (this._curTryCoinIndex >= this._coinList.length) {
              this._curTryCoinIndex = 0;
            }
          } else {
            if (this._curTryCoinIndex == 0) {
              this._curTryCoinIndex = this._coinList.length - 1;
            } else {
              this._curTryCoinIndex = this._curTryCoinIndex - 1;
            }
          }
          this._curTryCoin = this._coinList[this._curTryCoinIndex];
          this.coinNum.string = this._curTryCoin + "";
          this.tottalNum.string = Common.ChangeMoneyShow(this._curTryCoin * this._curTryBase, 1);
          if (this._tryDpools) {
            this.dpoolGold.string = Common.numFormat(this._tryDpools[this._curTryCoinIndex]);
          }
          if (this._tryXpools) {
            this.xPoolGold.string = Common.numFormat(this._tryXpools[this._curTryCoinIndex]);
          }
        };
        _proto.changeCoin = function changeCoin(data) {
          if (this._tryGame == true) {
            this.changeTryCoin(data);
            return;
          }
          if (data == "add") {
            this.curCoinIndex = this.curCoinIndex + 1;
            if (this.curCoinIndex >= this._coinList.length) {
              this.curCoinIndex = 0;
            }
          } else {
            if (this.curCoinIndex == 0) {
              this.curCoinIndex = this._coinList.length - 1;
            } else {
              this.curCoinIndex = this.curCoinIndex - 1;
            }
          }
          this.curCoin = this._coinList[this.curCoinIndex];
          this.coinNum.string = this.curCoin + "";
          this.tottalNum.string = Common.ChangeMoneyShow(this.curCoin * this.curBase, 1);
          sys.localStorage.setItem("LsCoin", this.curCoin);
          sys.localStorage.setItem("coinIndex", this.curCoinIndex);
          this.dpoolGold.string = "0";
          this.xPoolGold.string = "0";
          this.initJackPot();
        };
        _proto.changeTryBase = function changeTryBase(data) {
          this.BaseLayer.active = false;
          this._curTryBase = this._baseList[parseInt(data) - 1];
          this.baseNum.string = this._curTryBase + "";
          this.tottalNum.string = Common.ChangeMoneyShow(this._curTryCoin * this._curTryBase, 1);
        };
        _proto.changeBase = function changeBase(data) {
          if (this._tryGame == true) {
            this.changeTryBase(data);
            return;
          }
          this.BaseLayer.active = false;
          this.curBase = this._baseList[parseInt(data) - 1];
          this.baseNum.string = this.curBase + "";
          this.tottalNum.string = Common.ChangeMoneyShow(this.curCoin * this.curBase, 1);
          sys.localStorage.setItem("LsBase", this.curBase);
        };
        _proto.gameHide = function gameHide() {
          this._netManager.waitServiceSendData();
        };
        _proto.gameShow = function gameShow() {
          this._netManager.waitServiceSendData();
        };
        _proto.updateTryData = function updateTryData() {
          this.unscheduleAllCallbacks();
          this.dpoolGold.string = Common.numFormat(this._tryDpools[this._curTryCoinIndex]);
          this.xPoolGold.string = Common.numFormat(this._tryXpools[this._curTryCoinIndex]);
          this.gold.string = Common.numFormat(this._tryGold);
        };
        _proto.showPotNum = function showPotNum() {
          var curNum1 = parseInt(this.dpoolGold.string.replace(/,/g, ""));
          var curNum2 = parseInt(this.xPoolGold.string.replace(/,/g, ""));
          this.stepDJackNum = Math.floor((this.djackPotNum - curNum1) / 167);
          this.stepXJackNum = Math.floor((this.xJackPotNum - curNum2) / 167);
          this.unschedule(this.addPotNum);
          if (this.stepDJackNum > 0 && this.stepXJackNum > 0) {
            this.schedule(this.addPotNum, 0.03);
          } else {
            var self = this;
            var times = Math.random() * 3;
            this.scheduleOnce(function () {
              self.unschedule(self.addPotNum);
              var procol = self._serverId + "/" + LsGameDef.eProto.getJackpot.split("/")[1];
              self._netManager.sendOnlineData(procol, {
                CoinNum: self.curCoin
              });
            }, times);
          }
        };
        _proto.addPotNum = function addPotNum() {
          var curNum1 = parseInt(this.dpoolGold.string.replace(/,/g, ""));
          var curNum2 = parseInt(this.xPoolGold.string.replace(/,/g, ""));
          curNum1 = curNum1 + this.stepDJackNum;
          curNum2 = curNum2 + this.stepXJackNum;
          if (curNum1 >= this.djackPotNum || curNum2 >= this.xJackPotNum) {
            curNum1 = this.djackPotNum;
            curNum2 = this.xJackPotNum;
            this.unschedule(this.addPotNum);
            this.showPotNum();
          }
          this.dpoolGold.string = Common.numFormat(curNum1);
          this.xPoolGold.string = Common.numFormat(curNum2);
        };
        _proto.initGame = function initGame() {
          var id = this.fuben[this._gameType];
          this.fubenId = id - 11;
          this.spData.WILD.ani1 = "w" + this.fubenId + "icon_idle";
          this.spData.WILD.ani2 = "w" + this.fubenId + "icon_fire";
          this.spData.WILD.ani3 = "w" + this.fubenId + "icon_fire";
          var coin = sys.localStorage.getItem("LsCoin");
          var base = sys.localStorage.getItem("LsBase");
          var type = LsGameDef.constante.runType;
          var CoinIndex = sys.localStorage.getItem("coinIndex");
          this.curCoinIndex = parseInt(CoinIndex) ? parseInt(CoinIndex) : this.curCoinIndex;
          this.runtype = type ? type : this.runtype;
          this.curCoin = parseInt(coin) ? parseInt(coin) : this.curCoin;
          this.curBase = parseInt(base) ? parseInt(base) : this.curBase;
          this.runTypeButton.getChildByName("tag").active = this.runtype == 2;
          this.runAutoTip.active = this._isAuto;
          this.coinNum.string = this.curCoin + "";
          this.baseNum.string = this.curBase + "";
          this.tottalNum.string = Common.ChangeMoneyShow(this.curBase * this.curCoin, 1);
          this.scoreNum.string = "";
          this.dpoolGold.string = "0";
          this.xPoolGold.string = "0";
          this._curGold = parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD));
          this.gold.string = Common.numFormat(this._curGold);
          this.trygame.active = false;
          this.trygameImg.active = true;
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
            this._startPosList[i] = {
              x: this.items[i].getPosition().x,
              y: this.items[i].getPosition().y
            };
            this._curShowItem[this._curShowItem.length] = this.items[i];
          }
          //        // for (var i = 0; i < 3; i++) {
          //        //     let djzi = cc.instantiate(this.djLz);
          //        //     this.djLayer.addChild(djzi);
          //        // }

          this.node_quick.active = false;
        };
        _proto.initJackPot = function initJackPot() {
          //        //同步大奖池
          var procol1 = this._serverId + "/" + LsGameDef.eProto.getJackpot.split("/")[1];
          this._netManager.sendOnlineData(procol1, {
            CoinNum: this.curCoin
          });
        };
        _proto.initTryGame = function initTryGame() {
          this.trygame.active = true;
          this.trygameImg.active = false;
          this.trygame.getComponent(sp.Skeleton).setAnimation(0, "bianse", false);
          this.trygame.getComponent(sp.Skeleton).addAnimation(0, "CHOI THAT", true);
          this.coinNum.string = this._curTryCoin + "";
          this.baseNum.string = this._curTryBase + "";
          this.tottalNum.string = Common.ChangeMoneyShow(this._curTryCoin * this._curTryBase, 1);
        };
        _proto.initGameByData = function initGameByData() {
          this._tryGame = LsGameDef.constante.tryGame;
          if (this._tryGame == false) {
            this.initJackPot();
          }
          this.initBaseLayer();
          this.drawSPByData();
        };
        _proto.initBaseLayer = function initBaseLayer() {
          //        //根据低分表绘制 低分选项板
          for (var i = 0; i < this._baseList.length; i++) {
            var text = this.BaseLayer.getChildByName("baseBg").getChildByName("btn" + (i + 1)).getChildByName("text");
            text.getComponent(Label).string = this._baseList[i] + "";
          }
        };
        _proto.drawSPByData = function drawSPByData() {
          //        //根据卷轴位置绘制 当前显示图案
          this._curPageData = this.getPicturesData();
          for (var i = 0; i < this._curPageData.length; i++) {
            this.items[i].active = true;
            this.setItemSprite(this.items[i], this._curPageData[i]);
            this.items[i].setPosition(this._startPosList[i].x, this._startPosList[i].y);
          }
        };
        _proto.getPicturesData = function getPicturesData() {
          if (!this._posList) {
            return;
          }

          //        //根据卷轴位置 获取当前每个点的图案id
          var curdata = [];
          for (var i = 0; i < this._posList.length; i++) {
            var value1 = this._posList[i];
            var value0 = value1 == 0 ? this._curZzList[i].length - 1 : value1 - 1;
            var value2 = value1 + 1 == this._curZzList[i].length ? 0 : value1 + 1;
            var value3 = value2 + 1 == this._curZzList[i].length ? 0 : value2 + 1;
            curdata[i] = this._curZzList[i][value0];
            curdata[5 * 1 + i] = this._curZzList[i][value1];
            curdata[5 * 2 + i] = this._curZzList[i][value2];
            curdata[5 * 3 + i] = this._curZzList[i][value3];
          }
          return curdata;
        };
        _proto.start = function start() {};
        _proto.onDisable = function onDisable() {
          //        // 监听网络协议
          this._eventManager.off(LsGameDef.eProto.getInfo, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.getRoomData, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.showResult, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.runGame, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.runTry, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.getJackpot, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.changeTry, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.exitGame, this.recvData, this);
          this._eventManager.off(LsGameDef.eProto.checkInRoom, this.recvData, this);
          this._eventManager.off(this._configManager.protocolHall.login, this.recvData, this); //断线重连

          this._eventManager.off(this._configManager.protocolHall.getWallet, this.recvData, this);
          this._eventManager.off(this._configManager.protocolHall.pushWallet, this.recvData, this);

          //        // 监听按钮
          this._eventManager.off(this._configManager.protocolLs.runButton, this.runButton, this); //开始游戏
          this._eventManager.off(this._configManager.protocolLs.changeBase, this.changeBase, this); //改变底分
          this._eventManager.off(this._configManager.protocolLs.changeCoin, this.changeCoin, this); //改变硬币数
          this._eventManager.off(this._configManager.protocolLs.showBase, this.showBaseLayer, this); //改变硬币数
          this._eventManager.off(this._configManager.protocolLs.changetype, this.changeType, this); //切换运行type

          this._eventManager.off(this._configManager.protocolLs.backHall, this.backHall, this); //返回大厅

          this._eventManager.off(this._configManager.ButtonEvent.closePop, this.closePop, this); //显示规则

          this._eventManager.off(this._configManager.protocolLs.bigrecord, this.showPool, this);
          this._eventManager.off(this._configManager.protocolLs.jackpotHistory, this.showPool, this);
          this._eventManager.off(this._configManager.protocolLs["try"], this.tryGame, this); //试玩

          this._eventManager.off(this._configManager.protocolLs.autoRun, this.onClick_autoRun, this); //切换自动玩

          //        //传输事件
          //        // this._eventManager.off("auto", this.changeAutoType, this); //切换自动

          this._eventManager.off(this._configManager.eventTransform.disConnect, this.disconnect, this); //断线
          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
        };

        _proto.showPool = function showPool(data) {
          var self = this;
          Common.loadPopBuddle("prefab/LsBigRecord", this._buddle, function () {}, function (dxBigRecord) {
            var bigRecord = instantiate(dxBigRecord);
            self._viewManager.popNodeView(bigRecord, true);
            self._curPoolPage = 1;
          }, true);

          //        // this.enterFbScene();
        }
        //    // update (dt) {}
        //    //////////////////////////////////////////////////////
        //    ////////////////////////////////////////
        //    ///////////////////////////
        ;

        _proto.recvData = function recvData(data) {
          //        // console.log("data", data);
          switch (data.cmd) {
            case LsGameDef.eProto.getInfo:
              {
                //                //获取serid配置  加入房间.
                var HD_info = data.Data;
                this._serverId = HD_info.slotLsServerId;
                var procol = this._serverId + "/" + LsGameDef.eProto.enterRoom.split("/")[1];
                var free = this._dataManager.getfree();
                var istry = LsGameDef.constante.tryGame;
                var modeType = "trial";
                if (istry == true && free == true) {
                  modeType = "trialFree";
                } else if (istry == false && free == true) {
                  modeType = "free";
                } else {
                  modeType = "normal";
                }
                this._dataManager.setfree(false);
                this._netManager.sendOnlineData(procol, {
                  action: "HD_Enter",
                  modeType: modeType
                });
                break;
              }
            case LsGameDef.eProto.getRoomData:
              {
                //                // gts.Debug.Log("getRoomData===" + JSON.stringify(data.Data));

                //                //加入房间后，获取房间信息
                var tableInfo = data.Data;
                LsGameDef.constante.rateList = data.Data.OddsList;
                this._zzlist = tableInfo.ReelsList;
                this._coinList = tableInfo.CoinNum;
                this._baseList = tableInfo.CoinValue;
                this._curZzList = this._zzlist;
                if (this._posList == null) {
                  this._posList = tableInfo.InitSymbol;
                  this.initGameByData();
                }
                //                //判断是否进入副本
                if (LsGameDef.constante.tryGame == false) {
                  if (tableInfo.JieSuanDataFree.FreeGameTimes > 0 && tableInfo.JieSuanDataFree.FreeRemainTimes == 0) {
                    //                        //选择龙头界面
                    this.enterFbScene();
                  } else if (tableInfo.JieSuanDataFree.FreeRemainTimes > 0) {
                    //                        //进入副本界面
                    this._viewManager.setGameData(data.Data);
                    this._viewManager.changeScene("LsFbGameScene", function () {}, function () {}, true);
                  } else {
                    if (tableInfo.JieSuanData.Result != null) {
                      //                            //重新绘制上一次界面
                      this._posList = tableInfo.JieSuanData.ResultPositions;
                      this.drawSPByData();
                      this._resultData = tableInfo.JieSuanData;
                      this.showResult1();
                    } else {
                      if (LsGameDef.constante.auto) {
                        this.changeAutoType("fb");
                      }
                    }
                  }
                } else {
                  this._zzlistTry = tableInfo.ReelsListTrial;
                  this._curZzList = this._zzlistTry;
                  this._tryDpools = tableInfo.JieSuanDataTrial.TrialData.GoldJackpot;
                  this._tryXpools = tableInfo.JieSuanDataTrial.TrialData.SilverJackpot;
                  this._tryGold = tableInfo.JieSuanDataTrial.TrialData.VndBalance;
                  this._curGold = this._tryGold;
                  this._curTryCoin = tableInfo.JieSuanDataTrial.CoinNum;
                  this._curTryBase = tableInfo.JieSuanDataTrial.CoinValue;
                  this._curTryCoinIndex = this.getCurCoinIndex(this._curTryCoin);
                  this.initTryGame();
                  this.updateTryData();
                  if (tableInfo.JieSuanDataTrial.Result != null) {
                    //                        //重新绘制上一次界面
                    this._posList = tableInfo.JieSuanDataTrial.ResultPositions;
                    this.drawSPByData();
                    this._resultData = tableInfo.JieSuanDataTrial;
                    this.showResult1();
                  } else {
                    if (LsGameDef.constante.auto) {
                      this.changeAutoType("fb");
                    }
                  }
                }
                break;
              }
            case LsGameDef.eProto.showResult:
              {
                //                // 运行完老虎机后的结果
                //                // gts.Debug.Log("_resultData===" + JSON.stringify(data.Data));
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                this.clearReOpen();
                this._resultData = data.Data;
                this.startAni();
                this.initEffect();
                break;
              }
            case LsGameDef.eProto.changeTry:
              {
                //                // 切换成试玩
                if (this._tryGame == true) {
                  this._zzlistTry = data.Data.ReelsListTrial;
                  this._curZzList = this._zzlistTry;
                  this._tryDpools = data.Data.TrialConf.GoldJackpot;
                  this._tryXpools = data.Data.TrialConf.SilverJackpot;
                  this._tryGold = data.Data.TrialConf.VndBalance;
                  this._curGold = this._tryGold;
                  this.updateTryData();
                }
                break;
              }
            case LsGameDef.eProto.getJackpot:
              {
                //                //获取奖池
                this.djackPotNum = data.Data.GoldJackpot;
                this.xJackPotNum = data.Data.SilverJackpot;
                this.showPotNum();
                break;
              }
            case LsGameDef.eProto.runGame:
              {
                //                //摇的反馈
                //                // if (this._isAuto == true) {
                //                //     this._isAuto = false;
                //                //     LsGameDef.constante.auto = this._isAuto;
                //                //     this._curGold = parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD));
                //                //     this.gold.string = Common.numFormat(this._curGold);
                //                //     this.resumeButtonStatus();
                //                // }
                this.clearReOpen();
                Common.showTip(i18n.errTip(data.Code));
                break;
              }
            case LsGameDef.eProto.runTry:
              {
                //                //摇的反馈
                Common.showTip(i18n.errTip(data.Code));
                break;
              }
            case LsGameDef.eProto.checkInRoom:
              {
                //                // 检查是否再房间
                Common.closeWait();
                if (data.Data.InGame) {
                  if (this._isStart == true && this._resultData == null) {
                    var _procol3 = this._serverId + "/" + LsGameDef.eProto.runFreeGame.split("/")[1];
                    this._netManager.sendOnlineData(_procol3, {
                      action: "HD_SpinFree"
                    });
                  }
                } else {
                  this.runHall();
                }
                break;
              }
            case LsGameDef.eProto.exitGame:
              {
                if (data.Code == 0) {
                  this.runHall();
                } else {
                  Common.showTip(i18n.errTip(data.Code));
                }
                break;
              }

            //            /////////////////////////////////////////////////////
            case this._configManager.protocolHall.pushWallet:
            case this._configManager.protocolHall.getWallet:
              {
                var wallet = data.Wallet || data.Data.wallet;

                //                //获取钱包-推送钱包
                this._dataManager.setUserDataForKey(UserKey.GOLD, wallet.VndBalance);
                if (this._isStart == false) {
                  this.gold.string = Common.numFormat(wallet.VndBalance);
                }
                break;
              }
            case this._configManager.protocolHall.login:
              {
                //                //断线重连
                Common.closeNetTips();
                //                // Common.showWait();
                var _procol4 = this._serverId + "/" + LsGameDef.eProto.checkInRoom.split("/")[1];
                this._netManager.sendOnlineData(_procol4, {});
                break;
              }
          }
        };
        return LsGameScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "baseNum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tottalNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "chouShui", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "runTypeButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "runAutoTip", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "addBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "jianBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "baseBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "startBtnBg1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "startBtnBg2", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "itemAction", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "aniLayer", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "aniLayerBg", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "showTig", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "djLayer", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "trygame", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "trygameImg", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "djLz", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "node_free", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_quick", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "itemsBgFrame", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "zIndexNode", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "firstNode", [_dec26], {
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

System.register("chunks:///_virtual/LsJackPot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, v3, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a6a82MVTY1Nlqzb5wMu2Q9M", "LsJackPot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LsJackPot = exports('default', (_dec = ccclass("LsJackPot"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsJackPot, _Component);
        function LsJackPot() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = LsJackPot.prototype;
        _proto.onLoad = function onLoad() {
          this.node.scale = v3(1, 1, 1);
        };
        _proto.onEnable = function onEnable() {
          tween(this.node).to(0.5, {
            scale: v3(0.4, 0.4, 1)
          }).start();
        };
        return LsJackPot;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LsLodingScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, assetManager, isValid, UITransform, Component, MainManager, NetManager, ViewManager, Common, i18n;
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
      assetManager = module.assetManager;
      isValid = module.isValid;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "aa3145WdfdCY65Xd1qQOzJa", "LsLodingScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LsLodingScene = exports('default', (_dec = ccclass("LsLodingScene"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsLodingScene, _Component);
        function LsLodingScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._viewManager = void 0;
          _this._audioManager = void 0;
          _this._eventManager = void 0;
          _this._configManager = void 0;
          _this._netManager = void 0;
          _this._buddle = void 0;
          _initializerDefineProperty(_this, "maskLoding", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lodingBg", _descriptor2, _assertThisInitialized(_this));
          // loading 阻止重复启动，loadAttempt 区分资源重试；不在正常 Scene 销毁时误伤成功收尾。
          _this.loading = false;
          _this.loadAttempt = 0;
          return _this;
        }
        var _proto = LsLodingScene.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._viewManager = this._mainManager.getViewManager();
          this._audioManager = this._mainManager.getAudioManager();
          this._eventManager = this._mainManager.getEventManager();
          this._configManager = this._mainManager.getConfigManager();
          this._netManager = this._mainManager.getNetManager();
          this._buddle = assetManager.getBundle("LsGame");
          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
        };

        _proto.start = function start() {
          this.loadingGame();
        };
        _proto.gameShow = function gameShow() {
          this._netManager.waitServiceSendData();
        };
        // 只负责从 loading Scene 进入真实游戏 Scene；错误提示确认仅重试本段资源，不重发游戏检查。
        _proto.loadingGame = function loadingGame() {
          var _this2 = this;
          if (this.loading || !isValid(this.node, true) || !this.node.activeInHierarchy || !this.enabled) return;
          this.loading = true;
          var attempt = ++this.loadAttempt;
          var owner = NetManager.instance.hallSession();
          // 成功激活会销毁 loading Scene，成功回调仅校验请求归属，其他阶段必须仍在现场。
          var current = function current(launched) {
            if (launched === void 0) {
              launched = false;
            }
            return attempt === _this2.loadAttempt && owner === NetManager.instance.hallSession() && (launched || isValid(_this2.node, true) && _this2.node.activeInHierarchy && _this2.enabled);
          };
          this.maskLoding.getComponent(UITransform).height = 0;
          ViewManager.instance.changeScene("LsGameScene", function (cur, total) {
            if (!current() || !(total > 0) || !isFinite(cur / total)) return;
            var percent = Math.min(0.99, Math.max(0, cur / total));
            _this2.maskLoding.getComponent(UITransform).height = _this2.lodingBg.getComponent(UITransform).height * percent;
          }, function (error) {
            if (!current(!error)) return;
            _this2.loading = false;
            if (!error) {
              _this2._eventManager.dispatch(_this2._configManager.eventTransform.enterUpdate, "slotLs", 1);
              return;
            }
            _this2.maskLoding.getComponent(UITransform).height = 0;
            _this2._eventManager.dispatch(_this2._configManager.eventTransform.enterUpdateCancel);
            // 只由用户重试这一段资源加载，不重发进入游戏或资金请求。
            Common.showTipPop(i18n.lang.loadGameErr, function () {
              if (current()) _this2.loadingGame();
            }, null, current);
          }, false, current);
        };
        _proto.onDisable = function onDisable() {
          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
        }
        //    // update (dt) {}
        ;

        return LsLodingScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maskLoding", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lodingBg", [_dec3], {
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

System.register("chunks:///_virtual/LsShowWild.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, v3, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "93fd7LZ9PRNsL+c46rFFrOA", "LsShowWild", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LsShowWild = exports('default', (_dec = ccclass("LsShowWild"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LsShowWild, _Component);
        function LsShowWild() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = LsShowWild.prototype;
        _proto.onEnable = function onEnable() {
          this.node.scale = v3(0, 0, 1);
          this.node.angle = 1;
          tween(this.node).to(0.5, {
            scale: v3(1, 1, 1),
            angle: 360
          }).start();
        };
        return LsShowWild;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/viewMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "f78366dOvVNk51ZGQ3bStwo", "viewMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var viewMenu = exports('default', (_dec = ccclass("ViewMenu"), _dec2 = menu("game/tools/viewMenu"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(viewMenu, _Component);
        function viewMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgEvent", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = viewMenu.prototype;
        _proto.onLoad = function onLoad() {
          this.bgEvent.on(Node.EventType.TOUCH_END, this.removeSelf, this);
        };
        _proto.removeSelf = function removeSelf() {
          this.node.active = false;
        };
        _proto.onDisable = function onDisable() {
          this.bgEvent.off(Node.EventType.TOUCH_END, this.removeSelf);
        }
        //    // update (dt) {}
        ;

        return viewMenu;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgEvent", [_dec3], {
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
  r('virtual:///prerequisite-imports/LsGame', 'chunks:///_virtual/LsGame'); 
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