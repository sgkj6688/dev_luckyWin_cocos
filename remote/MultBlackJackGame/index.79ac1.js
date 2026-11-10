System.register("chunks:///_virtual/MultBlackJack_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "5bcc0vfvmJJpIqKDt5LXSTq", "MultBlackJack_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var MultBlackJack_btnEffect = exports('default', (_dec = ccclass("MultBlackJackBtnEffect"), _dec2 = menu("game/MultBlackJackGame/MultBlackJack_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MultBlackJack_btnEffect, _Component);
        function MultBlackJack_btnEffect() {
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
        var _proto = MultBlackJack_btnEffect.prototype;
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

        _createClass(MultBlackJack_btnEffect, [{
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

        return MultBlackJack_btnEffect;
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

System.register("chunks:///_virtual/MultBlackJack_card.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MultBlackJackUtils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, Component, MultBlackJackUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      MultBlackJackUtils = module.MultBlackJackUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "5a93bljBWVD6Lc6ci1l45Jk", "MultBlackJack_card", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var MultBlackJack_card = exports('MultBlackJack_card', (_dec = ccclass("MultBlackJack_card"), _dec2 = menu("game/MultBlackJackGame/MultBlackJack_card"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MultBlackJack_card, _Component);
        function MultBlackJack_card() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.data = null;
          return _this;
        }
        var _proto = MultBlackJack_card.prototype;
        _proto.init = function init(data) {
          if (data === void 0) {
            data = null;
          }
          this.data = data;
          this.node.getComponent(Sprite).spriteFrame = MultBlackJackUtils.instance.getCardFrame(data);
        };
        _proto.start = function start() {};
        return MultBlackJack_card;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MultBlackJack_help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "7bad72hVQlAspG17rmS7l3R", "MultBlackJack_help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MultBlackJack_help = exports('MultBlackJack_help', (_dec = ccclass("MultBlackJack_help"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MultBlackJack_help, _Component);
        function MultBlackJack_help() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_rate_0", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate_1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate_2", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MultBlackJack_help.prototype;
        _proto.start = function start() {
          // if (MultBlackJackModel.instance.PosOdds) {
          //     this.Label_rate_0.string = `X${MultBlackJackModel.instance.PosOdds[0]}`;
          //     this.Label_rate_1.string = `X${MultBlackJackModel.instance.PosOdds[16]}`;
          //     this.Label_rate_2.string = `X${MultBlackJackModel.instance.PosOdds[3]}`;
          // }
        };
        return MultBlackJack_help;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_rate_0", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate_1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate_2", [_dec4], {
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

System.register("chunks:///_virtual/MultBlackJack_player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MultBlackJackDef.ts', './MultBlackJackModel.ts', './MultBlackJackCtrl.ts', './MultBlackJackUtils.ts', './Common.ts', './ChipSmall.ts', './MultBlackJack_card.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, Sprite, sp, Prefab, v3, instantiate, color, find, tween, UITransform, Component, eSound, MultBlackJackModel, MultBlackJackCtrl, MultBlackJackUtils, Common, ChipSmall, MultBlackJack_card;
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
      Sprite = module.Sprite;
      sp = module.sp;
      Prefab = module.Prefab;
      v3 = module.v3;
      instantiate = module.instantiate;
      color = module.color;
      find = module.find;
      tween = module.tween;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      eSound = module.eSound;
    }, function (module) {
      MultBlackJackModel = module.MultBlackJackModel;
    }, function (module) {
      MultBlackJackCtrl = module.MultBlackJackCtrl;
    }, function (module) {
      MultBlackJackUtils = module.MultBlackJackUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      MultBlackJack_card = module.MultBlackJack_card;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;
      cclegacy._RF.push({}, "b74ee9r7dJP87XKQ4b1oQOD", "MultBlackJack_player", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var MultBlackJack_player = exports('MultBlackJack_player', (_dec = ccclass("MultBlackJack_player"), _dec2 = menu("game/MultBlackJackGame/MultBlackJack_player"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(sp.Skeleton), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Prefab), _dec15 = property(Prefab), _dec16 = property(Prefab), _dec17 = property(Prefab), _dec18 = property(Prefab), _dec19 = property(Prefab), _dec20 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MultBlackJack_player, _Component);
        function MultBlackJack_player() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_headRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labNickName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprAvatar", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "headEffect", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_win", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_timer", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardRoot", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardState", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betInfoRoot", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardStartRoot", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipSmall", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardTemp", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardBust", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardBJ", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardWin", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardHitStand", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardSplit", _descriptor18, _assertThisInitialized(_this));
          //seatInfo
          //////////////////////////////////////////
          _this.isMyself = false;
          _this.isSplited = false;
          _this.seatInfo = null;
          _this.seatID = 0;
          _this.deskIndex = 0;
          _this.betAmount = [];
          _this.cardPoint = [];
          _this.arrCard = [];
          _this.countDown = 0;
          _this.totalTimes = 0;
          _this.leftTimes = 0;
          return _this;
        }
        var _proto = MultBlackJack_player.prototype;
        /////////////////////////////////////////
        _proto.start = function start() {}

        ////////////////////////////////////////
        ;

        _proto.initseatInfo = function initseatInfo(seatInfo, seatID) {
          if (seatInfo === void 0) {
            seatInfo = null;
          }
          if (seatInfo == null || seatInfo.uid == "") {
            if (this.Node_headRoot.active) {
              this.headEffect.node.active = false;
              this.Node_win.active = false;
              this.Node_timer.active = false;
              this.Node_cardRoot.active = false;
              this.Node_betInfoRoot.active = false;
              this.Node_headRoot.active = false;
            }
            this.seatInfo = null;
            return;
          }
          this.seatInfo = seatInfo;
          this.seatID = seatID;
          this.deskIndex = MultBlackJackModel.instance.getDeskIndex(seatID);
          this.isMyself = MultBlackJackModel.instance.isMyself(seatInfo.uid);
          this.doResetUI();
        };
        _proto.init = function init(seatInfo, seatID) {
          if (seatInfo === void 0) {
            seatInfo = null;
          }
          if (seatInfo == null || seatInfo.uid == "") {
            if (this.Node_headRoot.active) {
              this.headEffect.node.active = false;
              this.Node_win.active = false;
              this.Node_timer.active = false;
              this.Node_cardRoot.active = false;
              this.Node_betInfoRoot.active = false;
              this.Node_headRoot.active = false;
            }
            return;
          }
          this.seatInfo = seatInfo;
          this.seatID = seatID;
          this.deskIndex = MultBlackJackModel.instance.getDeskIndex(seatID);
          this.isMyself = MultBlackJackModel.instance.isMyself(seatInfo.uid);
          this.doResetUI();
          if (seatInfo.handCards && seatInfo.handCards.length > 0) {
            for (var cardIndex = 0; cardIndex < 2; cardIndex++) {
              var handCardsInfo = seatInfo.handCards[cardIndex];
              if (handCardsInfo) {
                for (var _iterator = _createForOfIteratorHelperLoose(handCardsInfo.cards), _step; !(_step = _iterator()).done;) {
                  var card = _step.value;
                  this.doSendCard(card, cardIndex);
                }
                if (handCardsInfo.betAmount > 0) {
                  this.doSendChip(handCardsInfo.betAmount, cardIndex);
                }
                this.updateState(cardIndex);
              }
            }
            this.isSplited = seatInfo.handCards.length > 1;
          } else if (seatInfo.totalBet > 0) {
            this.doSendChip(seatInfo.totalBet);
          }
        };
        _proto.doLeave = function doLeave() {
          this.doClear();
          this.headEffect.node.active = false;
          this.Node_win.active = false;
          this.Node_timer.active = false;
          this.Node_cardRoot.active = false;
          this.Node_betInfoRoot.active = false;
          this.Node_headRoot.active = false;
          this.seatInfo = null;
        };
        _proto.doResetUI = function doResetUI() {
          this.Node_headRoot.active = true;
          Common.getHead(this.seatInfo.avatar, this.sprAvatar);
          Common.nickNameFormatL(this.labNickName, this.seatInfo.nickname);
          this.labGold.string = Common.numFormat(this.seatInfo.balance);
          for (var index = 0; index < 2; index++) {
            var Node_card = this.Node_cardRoot.getChildByName("Node_card_" + index);
            Node_card.destroyAllChildren();
            Node_card.active = false;
          }
          this.headEffect.node.active = false;
          this.Node_win.active = false;
          this.Node_timer.active = false;
          this.Node_cardRoot.active = false;
          this.Node_betInfoRoot.active = false;
        };
        _proto.doClear = function doClear() {
          for (var index = 0; index < 2; index++) {
            var Node_betInfo = this.Node_betInfoRoot.getChildByName("Node_betInfo_" + index);
            var Label_bet = Node_betInfo.getChildByName("Label_bet");
            Label_bet.getComponent(Label).string = "";
            var Node_betArea = Node_betInfo.getChildByName("Node_betArea");
            Node_betArea.destroyAllChildren();
            Node_betInfo.active = false;
            var Node_point = this.Node_betInfoRoot.getChildByName("Node_point_" + index);
            var Label_point = Node_point.getChildByName("Label_point");
            Label_point.getComponent(Label).string = "";
            Node_point.active = false;
            var Node_card = this.Node_cardRoot.getChildByName("Node_card_" + index);
            Node_card.destroyAllChildren();
            Node_card.active = false;
          }
          if (this.isMyself) {
            var Node_card_0 = this.Node_cardRoot.getChildByName("Node_card_" + 0);
            Node_card_0.position = v3(0, Node_card_0.position.y, 0);
            var Node_point_0 = this.Node_betInfoRoot.getChildByName("Node_point_" + 0);
            Node_point_0.position = v3(112, 150, 0);
            var Node_betInfo_0 = this.Node_betInfoRoot.getChildByName("Node_betInfo_" + 0);
            Node_betInfo_0.position = v3(0, 150, 0);
          }
          this.isSplited = false;
          this.headEffect.node.active = false;
          this.Node_win.active = false;
          this.Node_timer.active = false;
          this.Node_cardRoot.active = false;
          this.Node_betInfoRoot.active = false;
          this.Node_cardState.destroyAllChildren();
          this.arrCard = [];
          this.betAmount = [];
          this.cardPoint = [];
          this.arrCard = [];
          if (this.seatInfo) {
            this.seatInfo.insureAmount = 0;
            this.seatInfo.totalBet = 0;
            this.seatInfo.totalPrize = 0;
            this.seatInfo.totalRefund = 0;
            this.seatInfo.handCards = [];
          }
        };
        _proto.setCardPoint = function setCardPoint(point, index) {
          if (index === void 0) {
            index = 0;
          }
          this.cardPoint[index] = this.cardPoint[index] || 0;
          this.cardPoint[index] = point;
          this.Node_betInfoRoot.active = true;
          var Node_point = this.Node_betInfoRoot.getChildByName("Node_point_" + index);
          Node_point.active = true;
          var Label_point = Node_point.getChildByName("Label_point");
          MultBlackJackUtils.instance.updateLabel(Label_point, "" + this.cardPoint[index]);
          if (point > 21) {
            this.setCardstate_bust(index);
          }
        };
        _proto.setCardstate_bust = function setCardstate_bust(index) {
          var Node_card = this.Node_cardRoot.getChildByName("Node_card_" + index);
          var Node_cardBust = instantiate(this.Node_cardBust);
          this.Node_cardState.addChild(Node_cardBust);
          var pos = this.isMyself ? v3(index == 0 ? 200 : -200, Node_card.position.y + 100, 0) : v3(0, Node_card.position.y, 0);
          Node_cardBust.position = pos;
          var effect = Node_cardBust.getChildByName("effect").getComponent(sp.Skeleton);
          effect.node.active = true;
          effect.setAnimation(0, "boom", false);
          effect.setCompleteListener(function () {
            effect.setCompleteListener(null);
            effect.node.active = false;
            var tag = Node_cardBust.getChildByName("tag");
            tag.active = false;
            for (var _iterator2 = _createForOfIteratorHelperLoose(Node_card.children), _step2; !(_step2 = _iterator2()).done;) {
              var childNode = _step2.value;
              childNode.getComponent(Sprite).grayscale = true;
              childNode.getComponent(Sprite).color = color(100, 100, 100, 255);
            }
          });
        };
        _proto.setCardstate_bj = function setCardstate_bj(index) {
          if (this.isMyself) {
            MultBlackJackUtils.instance.playSound(eSound.Win);
          }
          var Node_card = this.Node_cardRoot.getChildByName("Node_card_" + index);
          var Node_cardBJ = instantiate(this.Node_cardBJ);
          this.Node_cardState.addChild(Node_cardBJ);
          var pos = this.isMyself ? v3(index == 0 ? 200 : -200, Node_card.position.y + 100, 0) : v3(0, Node_card.position.y + 25, 0);
          Node_cardBJ.position = pos;
          var Node_point = this.Node_betInfoRoot.getChildByName("Node_point_" + index);
          Node_point.active = false;
          var effect = Node_cardBJ.getChildByName("effect").getComponent(sp.Skeleton);
          effect.setAnimation(0, "blackjack", false);
          effect.setCompleteListener(function () {
            effect.setCompleteListener(null);
          });
        };
        _proto.setCardstate_win = function setCardstate_win(index) {
          if (this.isMyself) {
            MultBlackJackUtils.instance.playSound(eSound.Win);
          }
          var Node_card = this.Node_cardRoot.getChildByName("Node_card_" + index);
          var Node_cardWin = instantiate(this.Node_cardWin);
          this.Node_cardState.addChild(Node_cardWin);
          var pos = this.isMyself ? v3(index == 0 ? 200 : -200, Node_card.position.y + 100, 0) : v3(0, Node_card.position.y, 0);
          Node_cardWin.position = pos;
          var effect = Node_cardWin.getChildByName("effect").getComponent(sp.Skeleton);
          effect.node.active = true;
          effect.setAnimation(0, "win", false);
          effect.setCompleteListener(function () {
            effect.setCompleteListener(null);
            Node_cardWin.destroyFromParent();
          });
        };
        _proto.setCardstate_hitStand = function setCardstate_hitStand(index, strOp) {
          if (strOp === void 0) {
            strOp = "hit";
          }
          var Node_card = this.Node_cardRoot.getChildByName("Node_card_" + index);
          var Node_cardHitStand = instantiate(this.Node_cardHitStand);
          this.Node_cardState.addChild(Node_cardHitStand);
          var pos = this.isMyself ? v3(index == 0 ? 200 : -200, Node_card.position.y + 100, 0) : v3(0, Node_card.position.y, 0);
          Node_cardHitStand.position = pos;
          var effect = Node_cardHitStand.getChildByName("effect").getComponent(sp.Skeleton);
          effect.node.active = true;
          effect.setAnimation(0, strOp, false);
          effect.setCompleteListener(function () {
            effect.setCompleteListener(null);
            Node_cardHitStand.destroyFromParent();
          });
        };
        _proto.setCardstate_split = function setCardstate_split() {
          var Node_card = this.Node_cardRoot.getChildByName("Node_card_" + 0);
          var Node_cardSplit = instantiate(this.Node_cardSplit);
          this.Node_cardState.addChild(Node_cardSplit);
          Node_cardSplit.position = Node_card.position;
          var effect = Node_cardSplit.getChildByName("effect").getComponent(sp.Skeleton);
          effect.node.active = true;
          effect.setAnimation(0, "victory", false);
          effect.setCompleteListener(function () {
            effect.setCompleteListener(null);
            Node_cardSplit.destroyFromParent();
          });
        };
        _proto.updateGold = function updateGold(curBalance) {
          if (curBalance === void 0) {
            curBalance = null;
          }
          if (curBalance == null) {
            curBalance = this.seatInfo.balance;
          }
          var strGold = Common.numFormat(curBalance);
          if (this.labGold.string != strGold) {
            MultBlackJackUtils.instance.updateLabel(this.labGold, strGold);
          }
        };
        _proto.showResult = function showResult() {
          for (var index = 0; index < this.seatInfo.handCards.length; index++) {
            var handCardsInfo = this.seatInfo.handCards[index];
            if (handCardsInfo) {
              if (handCardsInfo.prizeAmount == 0 && handCardsInfo.refundAmount == 0) {
                var Node_card = this.Node_cardRoot.getChildByName("Node_card_" + index);
                for (var _iterator3 = _createForOfIteratorHelperLoose(Node_card.children), _step3; !(_step3 = _iterator3()).done;) {
                  var childNode = _step3.value;
                  childNode.getComponent(Sprite).grayscale = true;
                  childNode.getComponent(Sprite).color = color(100, 100, 100, 255);
                }
              } else if (handCardsInfo.prizeAmount > 0) {
                this.setCardstate_win(index);
              }
            }
          }
        };
        _proto.showWin = function showWin() {
          var _this2 = this;
          if (this.seatInfo.totalPrize <= 0 && this.seatInfo.totalRefund <= 0) {
            return;
          }
          MultBlackJackUtils.instance.playSound(eSound.coin);
          this.headEffect.node.active = true;
          this.Node_win.active = true;
          var Label_winAdd = find("Label_winAdd", this.Node_win);
          Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyShow(this.seatInfo.totalPrize + this.seatInfo.totalRefund, 3);
          tween(this.Node_win).delay(2).call(function () {
            _this2.Node_win.active = false;
            _this2.Node_win.active = false;
          }).start();
          this.updateGold();
        };
        _proto.update = function update(dt) {
          if (this.Node_timer.active && this.totalTimes > 0) {
            this.leftTimes -= dt;
            if (this.leftTimes < 0) {
              this.totalTimes = 0;
              this.leftTimes = 0;
              this.Node_timer.active = false;
              if (this.isMyself) {
                MultBlackJackUtils.instance.playOneShot(eSound.warning);
              }
              return;
            }
            var Sprite_progress = this.Node_timer.getChildByName("Sprite_progress");
            var Sprite_pointer = this.Node_timer.getChildByName("Sprite_pointer");
            var Label_countDown = this.Node_timer.getChildByName("Label_countDown");
            var progress = 1 - this.leftTimes / this.totalTimes;
            Sprite_progress.getComponent(Sprite).fillRange = -progress;
            Sprite_pointer.eulerAngles = v3(0, 0, 90 - 360 * progress);
            var countDown = Math.ceil(this.leftTimes);
            Label_countDown.getComponent(Label).string = "" + countDown;
            if (this.isMyself && this.countDown != countDown) {
              this.countDown = countDown;
              this.countDown > 3 ? MultBlackJackUtils.instance.playOneShot(eSound.timeUp) : this.countDown > 0 ? MultBlackJackUtils.instance.playOneShot(eSound.countDown) : MultBlackJackUtils.instance.playOneShot(eSound.warning);
            }
          }
        };
        _proto.showTimer = function showTimer(totalTimes, leftTimes) {
          if (totalTimes === void 0) {
            totalTimes = 0;
          }
          if (leftTimes === void 0) {
            leftTimes = 0;
          }
          this.totalTimes = totalTimes;
          this.leftTimes = leftTimes;
          var Sprite_progress = this.Node_timer.getChildByName("Sprite_progress");
          var Sprite_pointer = this.Node_timer.getChildByName("Sprite_pointer");
          var Label_countDown = this.Node_timer.getChildByName("Label_countDown");
          Sprite_progress.getComponent(Sprite).fillRange = 0;
          Sprite_pointer.eulerAngles = v3(0, 0, 90);
          Label_countDown.getComponent(Label).string = "" + Math.ceil(this.leftTimes);
          this.Node_timer.active = this.totalTimes > 0 && this.leftTimes > 0;
        };
        _proto.setTimer = function setTimer(cardIndex, totalTimes, leftTimes) {
          if (cardIndex === void 0) {
            cardIndex = 0;
          }
          if (totalTimes === void 0) {
            totalTimes = 0;
          }
          if (leftTimes === void 0) {
            leftTimes = 0;
          }
          if (this.isSplited) {
            if (totalTimes != 0 && leftTimes != 0) {
              var Node_card = this.Node_cardRoot.getChildByName("Node_card_" + (cardIndex + 1) % 2);
              for (var _iterator4 = _createForOfIteratorHelperLoose(Node_card.children), _step4; !(_step4 = _iterator4()).done;) {
                var childNode = _step4.value;
                childNode.getComponent(Sprite).color = color(100, 100, 100, 255);
              }
              Node_card = this.Node_cardRoot.getChildByName("Node_card_" + cardIndex);
              for (var _iterator5 = _createForOfIteratorHelperLoose(Node_card.children), _step5; !(_step5 = _iterator5()).done;) {
                var _childNode = _step5.value;
                _childNode.getComponent(Sprite).color = color(255, 255, 255, 255);
              }
            } else {
              if (this.seatInfo.handCards[0].status != 2) {
                var _Node_card = this.Node_cardRoot.getChildByName("Node_card_" + 0);
                for (var _iterator6 = _createForOfIteratorHelperLoose(_Node_card.children), _step6; !(_step6 = _iterator6()).done;) {
                  var _childNode2 = _step6.value;
                  _childNode2.getComponent(Sprite).color = color(255, 255, 255, 255);
                }
              }
              if (this.seatInfo.handCards[1].status != 2) {
                var _Node_card2 = this.Node_cardRoot.getChildByName("Node_card_" + 1);
                for (var _iterator7 = _createForOfIteratorHelperLoose(_Node_card2.children), _step7; !(_step7 = _iterator7()).done;) {
                  var _childNode3 = _step7.value;
                  _childNode3.getComponent(Sprite).color = color(255, 255, 255, 255);
                }
              }
            }
          }
          this.showTimer(totalTimes, leftTimes);
        };
        _proto.doSendCard = function doSendCard(cardData, index) {
          var _this3 = this;
          var Node_card = this.Node_cardRoot.getChildByName("Node_card_" + index);
          this.Node_cardRoot.active = true;
          Node_card.active = true;
          var newCard = instantiate(this.cardTemp);
          var comNewCard = newCard.getComponent(MultBlackJack_card);
          comNewCard.init(cardData);
          Node_card.addChild(newCard);
          this.arrCard[index] = this.arrCard[index] || [];
          this.arrCard[index].push(comNewCard);
          var startPos = this.Node_cardStartRoot.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          startPos = Node_card.getComponent(UITransform).convertToNodeSpaceAR(startPos);
          newCard.getComponent(UITransform).anchorY = 0;
          newCard.position = startPos;
          MultBlackJackUtils.instance.playSound(eSound.Card);
          tween(newCard).to(0.5, {
            position: v3(0, 0, 0)
          }, {
            easing: "cubicOut"
          }).call(function () {
            _this3.updateCardPRInfo(index);
            var arrCard = _this3.arrCard[index];
            if (arrCard.length == 2 && _this3.isBlackJack(arrCard[0].data, arrCard[1].data)) {
              _this3.setCardstate_bj(index);
              return;
            }
            _this3.setCardPoint(_this3.getCardPoint(index), index);
          }).start();
        };
        _proto.updateState = function updateState(index) {};
        _proto.updateCardPRInfo = function updateCardPRInfo(index) {
          var disAngle = 15;
          var disX = 20;
          //1:0 0 2:-10 7.5 3:-20 15 4:-30 22.5

          var arrCard = this.arrCard[index];
          var startX = -(arrCard.length - 1) * disX / 2;
          var startA = (arrCard.length - 1) * disAngle / 2;
          for (var i = 0; i < arrCard.length; i++) {
            var cardNode = arrCard[i].node;
            if (cardNode) {
              cardNode.position = v3(startX + i * disX, 0, 0);
              cardNode.eulerAngles = v3(0, 0, startA - i * disX);
            }
          }
        };
        _proto.isBlackJack = function isBlackJack(card_0, card_1) {
          if (this.isSplited) {
            return false;
          }
          return card_0 % 13 == 0 && card_1 % 13 >= 9 || card_1 % 13 == 0 && card_0 % 13 >= 9;
        };
        _proto.getCardPoint = function getCardPoint(index) {
          var arrCard = this.arrCard[index].slice();
          var arrA = [];
          var vPoint = 0;
          for (var i = 0; i < arrCard.length; i++) {
            var cardData = arrCard[i].data;
            if (cardData % 13 == 0) {
              arrA.push(cardData);
            } else {
              var point = cardData % 13;
              point = point >= 9 ? 10 : point + 1;
              vPoint += point;
            }
          }
          var maxVA = arrA.length > 0 ? arrA.length + 10 : 0;
          var minVA = arrA.length;
          vPoint += vPoint > 21 || vPoint + minVA > 21 || vPoint + maxVA > 21 ? minVA : maxVA;
          return vPoint;
        };
        _proto.isSplit = function isSplit() {
          //两张点数一样，但不是A 可以分牌
          if (this.arrCard[1] && this.arrCard[1].length > 0) {
            return false;
          }
          var arrCard = this.arrCard[0].slice();
          if (arrCard.length != 2 || arrCard[0].data % 13 == 0 || arrCard[1].data % 13 == 0) {
            return false;
          }
          return arrCard[0].data % 13 == arrCard[1].data % 13;
        };
        _proto.doSplit = function doSplit() {
          var _this4 = this;
          this.isSplited = true;
          this.setCardstate_split();
          this.scheduleOnce(function () {
            _this4.arrCard[1] = [];
            _this4.arrCard[1].push(_this4.arrCard[0].pop());
            var Node_card = _this4.Node_cardRoot.getChildByName("Node_card_" + 1);
            Node_card.active = true;
            _this4.arrCard[1][0].node.parent = Node_card;
            if (_this4.isMyself) {
              var Node_card_0 = _this4.Node_cardRoot.getChildByName("Node_card_" + 0);
              Node_card_0.position = v3(200, Node_card_0.position.y, 0);
              var Node_point_0 = _this4.Node_betInfoRoot.getChildByName("Node_point_" + 0);
              Node_point_0.position = v3(335, 0, 0);
              var Node_betInfo_0 = _this4.Node_betInfoRoot.getChildByName("Node_betInfo_" + 0);
              Node_betInfo_0.position = v3(220, 0, 0);
            }

            //再下注
            _this4.doSendChip(_this4.betAmount[0], 1);

            //更新牌组 位置和旋转
            _this4.updateCardPRInfo(0);
            _this4.updateCardPRInfo(1);

            //更新牌组点数
            _this4.setCardPoint(_this4.getCardPoint(0), 0);
            _this4.setCardPoint(_this4.getCardPoint(1), 1);
          }, 0.2);
          this.scheduleOnce(function () {
            _this4.doSendCard(_this4.seatInfo.handCards[0].cards[1], 0);
          }, 0.7);
          this.scheduleOnce(function () {
            _this4.doSendCard(_this4.seatInfo.handCards[1].cards[1], 1);
          }, 1.2);
        };
        _proto.setBetInfo = function setBetInfo(betAmount, index) {
          if (index === void 0) {
            index = 0;
          }
          this.betAmount[index] = this.betAmount[index] || 0;
          this.betAmount[index] += betAmount;
          this.Node_betInfoRoot.active = true;
          var Node_betInfo = this.Node_betInfoRoot.getChildByName("Node_betInfo_" + index);
          Node_betInfo.active = true;
          var Node_betArea = Node_betInfo.getChildByName("Node_betArea");
          var Label_bet = Node_betInfo.getChildByName("Label_bet");
          MultBlackJackUtils.instance.updateLabel(Label_bet, Common.ChangeMoneyShow(this.betAmount[index], 3));
        };
        _proto.doSendChip = function doSendChip(betAmount, index, isDouble) {
          var _this5 = this;
          if (index === void 0) {
            index = 0;
          }
          if (isDouble === void 0) {
            isDouble = false;
          }
          var newChip = instantiate(this.chipSmall);
          newChip.getComponent(ChipSmall).setValue(betAmount);
          newChip.name = "" + betAmount;
          this.Node_betInfoRoot.active = true;
          var Node_betInfo = this.Node_betInfoRoot.getChildByName("Node_betInfo_" + index);
          Node_betInfo.active = true;
          var Node_betArea = Node_betInfo.getChildByName("Node_betArea");
          var areaSize = Node_betArea.getComponent(UITransform).contentSize;
          Node_betArea.addChild(newChip);
          var startPos = this.Node_headRoot.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          startPos = Node_betArea.getComponent(UITransform).convertToNodeSpaceAR(startPos);
          newChip.position = startPos;
          var posX = Math.random() * areaSize.width - areaSize.width / 2;
          var posY = Math.random() * (areaSize.height - 50) - (areaSize.height - 50) / 2;
          var toPos = v3(posX, posY - 10, 0);
          tween(newChip).to(0.3, {
            position: toPos,
            scale: v3(0.75, 0.75, 0.75)
          }, {
            easing: "cubicOut"
          }).call(function () {
            _this5.setBetInfo(betAmount, index);
          }).start();
          if (this.isMyself) {
            MultBlackJackModel.instance.myTotalBet += betAmount;
            MultBlackJackModel.instance.curBalance -= betAmount;
          }
          this.isMyself && isDouble ? MultBlackJackUtils.instance.playSound(eSound.Double) : MultBlackJackUtils.instance.playSound(eSound.bet);
        };
        _proto.doBet = function doBet(betAmount, index) {
          if (index === void 0) {
            index = 0;
          }
          if (this.isMyself) {
            MultBlackJackCtrl.instance.reqBet(betAmount);
          } else {
            this.doSendChip(betAmount, index);
          }
        };
        _proto.doInsurance = function doInsurance() {
          this.doSendChip(this.seatInfo.handCards[0].betAmount / 2.0);
        };
        return MultBlackJack_player;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_headRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labNickName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labGold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sprAvatar", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "headEffect", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_win", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_timer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardRoot", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardState", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_betInfoRoot", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardStartRoot", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "chipSmall", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "cardTemp", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardBust", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardBJ", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardWin", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardHitStand", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardSplit", [_dec20], {
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

System.register("chunks:///_virtual/MultBlackJack_record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './NetManager.ts', './MultBlackJackDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "170f4+DdlpEQb6hgJPpBwJ0", "MultBlackJack_record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var MultBlackJack_record = exports('default', (_dec = ccclass("MultBlackJack_record"), _dec2 = menu("game/MultBlackJackGame/MultBlackJack_record"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MultBlackJack_record, _Component);
        function MultBlackJack_record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MultBlackJack_record.prototype;
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
            RecordType: "multBlackJack"
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
        return MultBlackJack_record;
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

System.register("chunks:///_virtual/MultBlackJack_recordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts', './MultBlackJackUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, instantiate, v3, Sprite, Component, AutoChangeParent, Common, MultBlackJackUtils;
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
      instantiate = module.instantiate;
      v3 = module.v3;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MultBlackJackUtils = module.MultBlackJackUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "7316armulxNb6TBPH6BUBLg", "MultBlackJack_recordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var MultBlackJack_recordItem = exports('default', (_dec = ccclass("MultBlackJack_recordItem"), _dec2 = menu("game/MultBlackJackGame/MultBlackJack_recordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MultBlackJack_recordItem, _Component);
        function MultBlackJack_recordItem() {
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
          _initializerDefineProperty(_this, "Node_result_banker", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result_player_0", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result_player_1", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_cardTemp", _descriptor12, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = MultBlackJack_recordItem.prototype;
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
            str = "+" + Common.ChangeMoneyFormat(tempData.Income, 3);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + Common.ChangeMoneyFormat(tempData.Income, 3);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
          var result = JSON.parse(tempData.GameResult);
          this.Node_result_banker.active = false;
          this.Node_result_player_0.active = false;
          this.Node_result_player_1.active = false;
          var arrCardBank = result[0];
          if (arrCardBank && arrCardBank.length > 0) {
            this.Node_result_banker.active = true;
            this.Node_result_banker.destroyAllChildren();
            for (var i = 0; i < arrCardBank.length; i++) {
              var newCard = instantiate(this.Sprite_cardTemp);
              this.Node_result_banker.addChild(newCard);
              newCard.active = true;
              newCard.position = v3(0, 0, 0);
              newCard.getComponent(Sprite).spriteFrame = MultBlackJackUtils.instance.getCardFrame(arrCardBank[i]);
            }
          }
          arrCardBank = result[1];
          if (arrCardBank && arrCardBank.length > 0) {
            this.Node_result_player_0.active = true;
            this.Node_result_player_0.destroyAllChildren();
            for (var _i = 0; _i < arrCardBank.length; _i++) {
              var _newCard = instantiate(this.Sprite_cardTemp);
              this.Node_result_player_0.addChild(_newCard);
              _newCard.active = true;
              _newCard.position = v3(0, 0, 0);
              _newCard.getComponent(Sprite).spriteFrame = MultBlackJackUtils.instance.getCardFrame(arrCardBank[_i]);
            }
          }
          arrCardBank = result[2];
          if (arrCardBank && arrCardBank.length > 0) {
            this.Node_result_player_1.active = true;
            this.Node_result_player_1.destroyAllChildren();
            for (var _i2 = 0; _i2 < arrCardBank.length; _i2++) {
              var _newCard2 = instantiate(this.Sprite_cardTemp);
              this.Node_result_player_1.addChild(_newCard2);
              _newCard2.active = true;
              _newCard2.position = v3(0, 0, 0);
              _newCard2.getComponent(Sprite).spriteFrame = MultBlackJackUtils.instance.getCardFrame(arrCardBank[_i2]);
            }
          }
        };
        _createClass(MultBlackJack_recordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return MultBlackJack_recordItem;
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_result_banker", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_result_player_0", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_result_player_1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_cardTemp", [_dec14], {
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

System.register("chunks:///_virtual/MultBlackJack_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MultBlackJackUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, MultBlackJackUtils;
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
      MultBlackJackUtils = module.MultBlackJackUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "dfea0o5capKhZ9aYHNEP8bw", "MultBlackJack_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var MultBlackJack_winTip = exports('default', (_dec = ccclass("MultBlackJackWinTip"), _dec2 = menu("game/MultBlackJackGame/MultBlackJack_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MultBlackJack_winTip, _Component);
        function MultBlackJack_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MultBlackJack_winTip.prototype;
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
            _this2.Label_win.string = MultBlackJackUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            MultBlackJackUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${MultBlackJackUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            MultBlackJackUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return MultBlackJack_winTip;
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

System.register("chunks:///_virtual/MultBlackJackCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './MultBlackJackModel.ts', './I18n.ts', './ViewManager.ts', './MultBlackJackDef.ts', './MultBlackJackUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sys, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, MultBlackJackModel, i18n, ViewManager, eProto, MultBlackJackUtils, Common;
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
      MultBlackJackModel = module.MultBlackJackModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      MultBlackJackUtils = module.MultBlackJackUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "76131dVJMRNH4z2slWeV4uL", "MultBlackJackCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MultBlackJackCtrl = exports('MultBlackJackCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(MultBlackJackCtrl, _GameDef$BaseCtrl);
        function MultBlackJackCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._dataManager = void 0;
          _this._model = null;
          /**
           * 请求下注
           * @param data
           */
          _this.isReqBet = false;
          _this._configManager = ConfigManager.instance;
          _this._eventManager = EventManager.instance;
          _this._netManager = NetManager.instance;
          _this._dataManager = DataManager.instance;
          _this._model = MultBlackJackModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = MultBlackJackCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete MultBlackJackCtrl._instance;
          MultBlackJackCtrl._instance = null;
          MultBlackJackModel.destroy();
          MultBlackJackUtils.destroy();
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
        _proto.reqBet = function reqBet(betAmount) {
          if (!MultBlackJackModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: betAmount,
            gameNo: MultBlackJackModel.instance.gameInfo.gameNo
          });
        }

        /**请求操作 */;
        _proto.reqOperate = function reqOperate(operate, cardIdx) {
          if (cardIdx === void 0) {
            cardIdx = 0;
          }
          NetManager.instance.sendOnlineData(eProto.HD_Operate, {
            action: operate,
            cardIdx: cardIdx
          });
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_leave, {
            action: "HD_QuitTable"
          });
        }

        // /**请求排行榜 */
        // reqRank(curPage = 0) {
        //     NetManager.instance.sendOnlineData(MultBlackJackDef.eProto.HD_Rank, { gameType: "matka" });
        // }

        /**请求历史记录 */;
        _proto.reqHistory = function reqHistory(offset, pageSize) {
          if (offset === void 0) {
            offset = 0;
          }
          if (pageSize === void 0) {
            pageSize = 13;
          }
          NetManager.instance.sendOnlineData(eProto.HD_history, {
            Offset: offset,
            PageSize: pageSize,
            RecordType: "matka"
          });
        }

        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(MultBlackJackDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_Enter, {});
        }

        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            }
            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_Enter:
              {
                //roomInfo
                ViewManager.instance.closeWait();
                MultBlackJackModel.instance.gameInfo = data.Data;
                MultBlackJackModel.instance.maxBet = MultBlackJackModel.instance.gameInfo.maxBet || MultBlackJackModel.instance.maxBet;
                break;
              }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                emitData = data.Data;
                break;
              }
            //玩家进入-玩家离开
            case eProto.enter:
            case eProto.leave:
              {
                if (!MultBlackJackModel.instance.gameInfo) {
                  return;
                }
                emitData = data.Data;
                break;
              }
            case eProto.bet:
            case eProto.switchState:
              {
                if (!MultBlackJackModel.instance.gameInfo) {
                  return;
                }
                emitData = data.Data;
                break;
              }
            case eProto.stand:
              {
                //停牌
                if (!MultBlackJackModel.instance.gameInfo) {
                  return;
                }
                emitData = data.Data;
                break;
              }
            case eProto.hit:
              {
                //要牌
                if (!MultBlackJackModel.instance.gameInfo) {
                  return;
                }
                emitData = data.Data;
                break;
              }
            case eProto.split:
              {
                //分牌
                if (!MultBlackJackModel.instance.gameInfo) {
                  return;
                }
                emitData = data.Data;
                break;
              }
            case eProto["double"]:
              {
                //加倍
                if (!MultBlackJackModel.instance.gameInfo) {
                  return;
                }
                emitData = data.Data;
                break;
              }
            case eProto.insurance:
              {
                //保险
                if (!MultBlackJackModel.instance.gameInfo) {
                  return;
                }
                emitData = data.Data;
                break;
              }
            case eProto.redemption:
              {
                //赎回
                if (!MultBlackJackModel.instance.gameInfo) {
                  return;
                }
                emitData = data.Data;
                break;
              }

            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==MultBlackJack=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (MultBlackJackModel.instance.curBalance > 0) {
                  MultBlackJackModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                MultBlackJackModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==MultBlackJack=pushWallet==" + _HD_Wallet.VndBalance);
                if (MultBlackJackModel.instance.curBalance > 0) {
                  MultBlackJackModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                MultBlackJackModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        return MultBlackJackCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MultBlackJackDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4a328rwX9FD9pUb3P5u4EQN", "MultBlackJackDef", undefined);
      //multBlackJack 多人21点
      var cBundle = exports('cBundle', "MultBlackJackGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_Enter"] = "multBlackJack/HD_Enter";
        eProto["HD_leave"] = "multBlackJack/HD_Leave";
        eProto["HD_Bet"] = "multBlackJack/HD_Bet";
        eProto["HD_Operate"] = "multBlackJack/HD_Operate";
        eProto["switchState"] = "multBlackJack/switchState";
        eProto["bet"] = "multBlackJack/bet";
        eProto["deal"] = "multBlackJack/deal";
        eProto["enter"] = "multBlackJack/enter";
        eProto["leave"] = "multBlackJack/leave";
        eProto["stand"] = "multBlackJack/stand";
        eProto["hit"] = "multBlackJack/hit";
        eProto["split"] = "multBlackJack/split";
        eProto["double"] = "multBlackJack/double";
        eProto["insurance"] = "multBlackJack/insurance";
        eProto["redemption"] = "multBlackJack/redemption";
        eProto["HD_history"] = "multBlackJack/HD_history";
        eProto["RECORD"] = "multBlackJack/HD_Record";
        eProto["HD_QueryBetRecord"] = "lobby/HD_QueryBetRecord";
        return eProto;
      }({}));
      var strColor = exports('strColor', ["t", "h", "m", "f"]);
      var strValue = exports('strValue', ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"]);
      var eConstDef = exports('eConstDef', {});
      // export const enum eConstDef {}

      var eStatusGame = exports('eStatusGame', {
        none: "none",
        bet: "bet",
        sendCard: "sendCard",
        insure: "insure",
        operate: "operate",
        checkout: "checkout"
      }); //庄家补牌

      //0:可继续要牌 1：停牌 2：爆牌
      var eStatusPlayer = exports('eStatusPlayer', {
        none: -1,
        playing: 0,
        stop: 1,
        bust: 2
      });
      var eStatusCard = exports('eStatusCard', {
        none: 0,
        hit: 1,
        stand: 2,
        bust: 3,
        bj: 4,
        win: 5
      });

      // HD_Operate
      var mOperate = exports('mOperate', {
        stand: "stand",
        //停牌
        hit: "hit",
        //要牌
        split: "split",
        //分牌
        "double": "double",
        //加倍
        insurance: "insurance",
        //保险
        redemption: "redemption" //赎回
      });

      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onReturnBet"] = "onReturnBet";
        eEvent["onUpdatePath"] = "onUpdatePath";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bgNomal: "sound/BGM_MG",
        bet: "sound/bet",
        coin: "sound/coin",
        warning: "sound/warning",
        timeUp: "sound/timeUp",
        countDown: "sound/countDown",
        Card: "sound/Card",
        Blackjack: "sound/Blackjack",
        Double: "sound/Double",
        Win: "sound/Win"
      });
      //ConfigManager 相关的event 涉及 ButtonInit 后续修改

      //服务端主动推送

      //客户端请求操作

      //TableInfo

      //HandCard

      // const (
      //     processSwitchState = "switchState"
      //     actionBet          = "bet"  //投注
      //     actionDeal         = "deal" //发牌
      //     actionEnter        = "enter"
      //     actionLeave        = "leave"

      // actionStand      = "stand"      //停牌
      // actionHit        = "hit"        //要牌
      // actionSplit      = "split"      //分牌
      // actionDouble     = "double"     //加倍
      // actionInsurance  = "insurance"  //保险
      // actionRedemption = "redemption" //赎回
      // )
      // HD_Bet
      // 参数：betAmount
      // 返回：无

      // HD_Operate
      // 参数：action
      // 值：
      // actionStand      = "HD_Stand"      //停牌
      // 	actionHit        = "HD_Hit"        //要牌
      // 	actionSplit      = "HD_Split"      //分牌
      // 	actionDouble     = "HD_Double"     //加倍
      // 	actionInsurance  = "HD_Insurance"  //保险
      // 	actionRedemption = "HD_Redemption" //赎回

      // 返回：
      // 无data
      /////////////////////////////////////
      //一些待处理 问题

      // ==recvData data==={"Data":{"UserID":"62496f2dc4ac29426adcb17e","XiaZhuPos":"6","XiaZhuV":482},"GameType":"carRoulette","Action":"HD_XiaZhu","ErrMsg":"操作成功","Code":0,"cmd":"carRoulette/HD_XiaZhu"}
      // builtin-2d-sprite (variant) : Failed to set property [texture], property not found.
      //注： 这个问题由 服务端发送的下注金额 引起，金额不在 CMList整数范围内
      /**聊天信息 */
      /**钱包信息 */
      // let onRecvData = {
      //     Action: "HD_Enter",
      //     Code: 0,
      //     Data: {
      //         BankerCards: [24, 50],
      //         Countdown: 0,
      //         GameNo: "251125000002",
      //         OperateCardIdx: 0,
      //         OperateSeat: 0,
      //         Seats: [
      //             {
      //                 Avatar: "",
      //                 Balance: "",
      //                 HandCards: [{ BetAmount: 5000, Cards: [14, 3], PrizeAmount: 0, Status: 0 }],
      //                 InsureAmount: 0,
      //                 Nickname: "",
      //                 OtherId: 0,
      //                 SystemPumping: 0,
      //                 TotalBet: 5000,
      //                 TotalPrize: 0,
      //                 TotalRefund: 0,
      //                 Uid: "637644d82983dcca944a593b",
      //             },
      //             {
      //                 Avatar: "",
      //                 Balance: "",
      //                 HandCards: [],
      //                 InsureAmount: 0,
      //                 Nickname: "",
      //                 OtherId: 0,
      //                 SystemPumping: 0,
      //                 TotalBet: 0,
      //                 TotalPrize: 0,
      //                 TotalRefund: 0,
      //                 Uid: "635a3e35dcd259e1d228d44b",
      //             },
      //             {
      //                 Avatar: "",
      //                 Balance: "",
      //                 HandCards: [],
      //                 InsureAmount: 0,
      //                 Nickname: "",
      //                 OtherId: 0,
      //                 SystemPumping: 0,
      //                 TotalBet: 0,
      //                 TotalPrize: 0,
      //                 TotalRefund: 0,
      //                 Uid: "",
      //             },
      //             {
      //                 Avatar: "",
      //                 Balance: "",
      //                 HandCards: [],
      //                 InsureAmount: 0,
      //                 Nickname: "",
      //                 OtherId: 0,
      //                 SystemPumping: 0,
      //                 TotalBet: 0,
      //                 TotalPrize: 0,
      //                 TotalRefund: 0,
      //                 Uid: "",
      //             },
      //         ],
      //         State: "operate",
      //     },
      //     ErrMsg: "Success",
      //     GameType: "multBlackJack",
      //     cmd: "multBlackJack/HD_Enter",
      // };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MultBlackJackGame", ['./MultBlackJackCtrl.ts', './MultBlackJackDef.ts', './MultBlackJackModel.ts', './MultBlackJackScene.ts', './MultBlackJackUtils.ts', './MultBlackJackGameView.ts', './MultBlackJack_card.ts', './MultBlackJack_player.ts', './MultBlackJack_btnEffect.ts', './MultBlackJack_help.ts', './MultBlackJack_record.ts', './MultBlackJack_recordItem.ts', './MultBlackJack_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MultBlackJackGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './MultBlackJackDef.ts', './MultBlackJackModel.ts', './MultBlackJackCtrl.ts', './ViewManager.ts', './MultBlackJackUtils.ts', './Common.ts', './MultBlackJack_player.ts', './MultBlackJack_card.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Prefab, sp, Button, instantiate, tween, v3, Layout, UITransform, sys, Sprite, Tween, GameDef, ConfigManager, EventManager, NetManager, eProto, eSound, mOperate, eStatusGame, eEvent, MultBlackJackModel, MultBlackJackCtrl, ViewManager, MultBlackJackUtils, Common, MultBlackJack_player, MultBlackJack_card, i18n;
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
      Node = module.Node;
      Label = module.Label;
      Prefab = module.Prefab;
      sp = module.sp;
      Button = module.Button;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      Layout = module.Layout;
      UITransform = module.UITransform;
      sys = module.sys;
      Sprite = module.Sprite;
      Tween = module.Tween;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eSound = module.eSound;
      mOperate = module.mOperate;
      eStatusGame = module.eStatusGame;
      eEvent = module.eEvent;
    }, function (module) {
      MultBlackJackModel = module.MultBlackJackModel;
    }, function (module) {
      MultBlackJackCtrl = module.MultBlackJackCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      MultBlackJackUtils = module.MultBlackJackUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MultBlackJack_player = module.MultBlackJack_player;
    }, function (module) {
      MultBlackJack_card = module.MultBlackJack_card;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23;
      cclegacy._RF.push({}, "0e5faW6Y55Hlr2/2WS1Hlv1", "MultBlackJackGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var MultBlackJackGameView = exports('default', (_dec = ccclass("MultBlackJackGameView"), _dec2 = menu("game/MultBlackJackGame/MultBlackJackGameView"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Prefab), _dec7 = property(sp.Skeleton), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Prefab), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Button), _dec20 = property(Button), _dec21 = property(Prefab), _dec22 = property(Prefab), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(MultBlackJackGameView, _GameDef$BaseView);
        function MultBlackJackGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_menu", _descriptor, _assertThisInitialized(_this));
          // @property(Label)
          // labNickName: Label = null;
          // @property(Label)
          // labGold: Label = null;
          // @property(Sprite)
          // sprAvatar: Sprite = null;
          // @property(Node)
          // Node_head: Node = null;
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_maxBet", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipSmall", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameTip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_star", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_deskPlayer", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_banker", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_chip", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_insurance", _descriptor15, _assertThisInitialized(_this));
          //保险
          _initializerDefineProperty(_this, "Node_operation", _descriptor16, _assertThisInitialized(_this));
          //操作按钮
          _initializerDefineProperty(_this, "Button_double", _descriptor17, _assertThisInitialized(_this));
          //加倍
          _initializerDefineProperty(_this, "Button_split", _descriptor18, _assertThisInitialized(_this));
          //分牌
          _initializerDefineProperty(_this, "cardTemp", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardTemp_banker", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardStartRoot", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_point_banker", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bankerChipTag", _descriptor23, _assertThisInitialized(_this));
          //////////////////////////
          _this.arrCard_banker = [];
          // arrCard_mySelf: MultBlackJack_card[] = [];
          _this.startBet = false;
          _this.curOpSeat = -1;
          _this.operateCardIdx = 0;
          return _this;
        }
        var _proto = MultBlackJackGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, MultBlackJackCtrl.instance);

          // this.initUIView();
          MultBlackJackUtils.instance.loadRes_icon(function () {
            NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
            NetManager.instance.sendOnlineData(eProto.HD_Enter, {});
          });
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          // this.sprAvatar

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          this.bg.on(Node.EventType.TOUCH_END, function () {}, this, true);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          this.doClear();
          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          MultBlackJackModel.instance.clearGameData();
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
          var _this2 = this;
          NetManager.instance.waitServiceSendData();
          Common.showLog("前台");
          if (NetManager.instance._connect == true) {
            this.scheduleOnce(function () {
              _this2.doClear();
              NetManager.instance.sendOnlineData(eProto.HD_Enter, {});
            }, 0.1);
          }
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateGold = function updateGold() {
          if (MultBlackJackModel.instance.endBalance > 0) {
            MultBlackJackModel.instance.curBalance = MultBlackJackModel.instance.endBalance;
            MultBlackJackModel.instance.endBalance = 0;
            var Node_playerMyself = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
            var playerMyself = Node_playerMyself.getComponent(MultBlackJack_player);
            playerMyself.updateGold(MultBlackJackModel.instance.curBalance);
          }

          // let strGold = Common.numFormat(MultBlackJackModel.instance.curBalance);
          // if (strGold != this.labGold.string) {
          //     MultBlackJackUtils.instance.updateLabel(this.labGold, strGold);
          // }
        };

        _proto.initUIView = function initUIView() {
          // let head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          // Common.getHead(head_id, this.sprAvatar);
          // Common.nickNameFormatL(this.labNickName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          // let gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          // this.labGold.string = Common.numFormat(gold);
        }

        //庄家操作////////////////////////////////////////////
        ;

        _proto.doShowBankerSecond = function doShowBankerSecond() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            var Node_card = _this3.Node_banker.getChildByName("Node_card_" + 0);
            var newNode_card = instantiate(Node_card);
            Node_card.parent.addChild(newNode_card);
            Node_card.destroyAllChildren();
            tween(newNode_card).delay(0.5).call(function () {
              MultBlackJackUtils.instance.playSound(eSound.Card);
            }).to(0.3, {
              position: v3(0, 170, 0),
              scale: v3(1.4, 1.4, 1.4)
            }).call(function () {
              var Node_card_1 = _this3.Node_banker.getChildByName("Node_card_" + 1);
              Node_card_1.getComponent(Layout).enabled = true;
              _this3.arrCard_banker[1] = [];
              for (var i = 0; i < 2; i++) {
                var cardData = i == 0 ? MultBlackJackModel.instance.gameInfo.bankerCards[i] : null;
                var newCard = instantiate(_this3.cardTemp_banker);
                var comNewCard = newCard.getComponent(MultBlackJack_card);
                comNewCard.init(cardData);
                Node_card_1.addChild(newCard);
                _this3.arrCard_banker[1].push(comNewCard);
              }
              Node_card_1.getComponent(Layout).spacingX = 1;
              Node_card_1.getComponent(Layout).updateLayout();
              Node_card_1.getComponent(Layout).enabled = false;
            }).destroySelf().start();
            _this3.scheduleOnce(function () {
              MultBlackJackUtils.instance.playSound(eSound.Card);
              var Node_card = _this3.Node_banker.getChildByName("Node_card_" + 1);
              var card = Node_card.children[1];
              tween(card).to(0.3, {
                eulerAngles: v3(0, -90, 0)
              }).call(function () {
                var comCard = card.getComponent(MultBlackJack_card);
                comCard.init(MultBlackJackModel.instance.gameInfo.bankerCards[1]);
                card.eulerAngles = v3(0, 90, 0);
                _this3.Node_point_banker.active = true;
                var Label_point = _this3.Node_point_banker.getChildByName("Label_point");
                MultBlackJackUtils.instance.updateLabel(Label_point, "" + MultBlackJackUtils.instance.getCardPoint(_this3.arrCard_banker[1]));
              }).to(0.3, {
                eulerAngles: v3(0, 0, 0)
              }).call(resolve).start();
            }, 1);
          });
        }
        //庄家补牌
        ;

        _proto.doBankerHitCard = function doBankerHitCard() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            if (MultBlackJackModel.instance.gameInfo.bankerCards.length > 2) {
              var _loop = function _loop() {
                var cardData = MultBlackJackModel.instance.gameInfo.bankerCards[i];
                _this4.scheduleOnce(function () {
                  _this4.doSendCard_banker(cardData, 1);
                }, 0.5 + 0.5 * (i - 2));
              };
              for (var i = 2; i < MultBlackJackModel.instance.gameInfo.bankerCards.length; i++) {
                _loop();
              }
            }
            _this4.scheduleOnce(resolve, 0.75 + 0.75 * (MultBlackJackModel.instance.gameInfo.bankerCards.length - 2));
          });
        };
        _proto.doSendCard_banker = function doSendCard_banker(cardData, cardGroupIndex) {
          var _this5 = this;
          if (cardData === void 0) {
            cardData = null;
          }
          if (cardGroupIndex === void 0) {
            cardGroupIndex = 0;
          }
          this.arrCard_banker[cardGroupIndex] = this.arrCard_banker[cardGroupIndex] || [];
          var Node_card = this.Node_banker.getChildByName("Node_card_" + cardGroupIndex);
          Node_card.active = true;
          Node_card.getComponent(Layout).enabled = false;
          var newCard = instantiate(this.cardTemp_banker);
          var comNewCard = newCard.getComponent(MultBlackJack_card);
          comNewCard.init(cardData);
          Node_card.addChild(newCard);
          this.arrCard_banker[cardGroupIndex].push(comNewCard);
          var startPos = this.Node_cardStartRoot.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          startPos = Node_card.getComponent(UITransform).convertToNodeSpaceAR(startPos);
          newCard.position = startPos;
          newCard.scale = cardGroupIndex == 0 ? v3(1, 1, 1) : v3(5 / 9, 5 / 9, 5 / 9);
          MultBlackJackUtils.instance.playSound(eSound.Card);
          var toPosX = this.arrCard_banker[cardGroupIndex].length < 5 ? (this.arrCard_banker[cardGroupIndex].length - 1) * 65 : 226;
          tween(newCard).to(0.3, {
            position: v3(toPosX, 0, 0),
            scale: v3(1.0, 1.0, 1.0)
          }, {
            easing: "cubicOut"
          }).call(function () {
            var spaceX = 10;
            if (cardGroupIndex == 1) {
              spaceX = _this5.arrCard_banker[cardGroupIndex].length <= 4 ? 1 : (445 - _this5.arrCard_banker[cardGroupIndex].length * 113) / (_this5.arrCard_banker[cardGroupIndex].length - 1);
            }
            Node_card.getComponent(Layout).enabled = true;
            Node_card.getComponent(Layout).spacingX = spaceX;
            Node_card.getComponent(Layout).updateLayout();
            Node_card.getComponent(Layout).enabled = false;
            if (cardGroupIndex == 1) {
              _this5.Node_point_banker.active = true;
              var Label_point = _this5.Node_point_banker.getChildByName("Label_point");
              MultBlackJackUtils.instance.updateLabel(Label_point, "" + MultBlackJackUtils.instance.getCardPoint(_this5.arrCard_banker[cardGroupIndex]));
            }
          }).start();
        };
        _proto.showResult = function showResult() {
          for (var seat = 0; seat < 5; seat++) {
            var seatInfo = MultBlackJackModel.instance.gameInfo.seats[seat];
            if (seatInfo && seatInfo.uid != "" && seatInfo.handCards && seatInfo.handCards.length > 0) {
              var deskIndex = MultBlackJackModel.instance.getDeskIndex(seat);
              var Node_player = this.Node_deskPlayer.getChildByName("Node_player_" + deskIndex);
              var player = Node_player.getComponent(MultBlackJack_player);
              player.seatInfo = seatInfo;
              player.showResult();
            }
          }
        };
        _proto.doCollectChip = function doCollectChip() {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            var arrChip = [];
            var winNum = 0;
            for (var _iterator = _createForOfIteratorHelperLoose(_this6.Node_deskPlayer.children), _step; !(_step = _iterator()).done;) {
              var Node_player = _step.value;
              var comPlayer = Node_player.getComponent(MultBlackJack_player);
              if (comPlayer.Node_headRoot.active && comPlayer.seatInfo.handCards && comPlayer.seatInfo.handCards.length > 0) {
                for (var i = 0; i < 2; i++) {
                  var handCardInfo = comPlayer.seatInfo.handCards[i];
                  if (handCardInfo) {
                    var Node_betInfo = comPlayer.Node_betInfoRoot.getChildByName("Node_betInfo_" + i);
                    var count = 0;
                    var Node_betArea = Node_betInfo.getChildByName("Node_betArea");
                    for (var _iterator4 = _createForOfIteratorHelperLoose(Node_betArea.children), _step4; !(_step4 = _iterator4()).done;) {
                      var _chip2 = _step4.value;
                      arrChip.push(_chip2);
                      var _toPos2 = _this6.Node_bankerChipTag.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                      _toPos2 = Node_betArea.getComponent(UITransform).convertToNodeSpaceAR(_toPos2);
                      var posX = _toPos2.x + Math.random() * 200 - 100;
                      var posY = _toPos2.y + Math.random() * 100 - 50;
                      var durate = count * 0.01;
                      durate = durate > 0.2 ? 0.2 : durate;
                      tween(_chip2).to(0.4 + durate, {
                        position: v3(posX, posY, 0)
                      }, {
                        easing: "cubicOut"
                      }).start();
                      count++;
                    }
                  }
                }
                winNum = comPlayer.seatInfo.totalPrize > 0 ? winNum + 1 : winNum;
              }
            }
            if (arrChip.length > 0) {
              var chipCount = winNum > 0 ? Math.floor(arrChip.length / winNum) : 0;
              var _loop2 = function _loop2() {
                var Node_player = _step2.value;
                var comPlayer = Node_player.getComponent(MultBlackJack_player);
                if (comPlayer.seatInfo && comPlayer.seatInfo.totalPrize > 0) {
                  for (var i = 0; i < chipCount; i++) {
                    var _chip = arrChip.pop();
                    var _toPos = Node_player.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                    _toPos = _chip.parent.getComponent(UITransform).convertToNodeSpaceAR(_toPos);
                    var durate = i * 0.01;
                    durate = durate > 0.2 ? 0.2 : durate;
                    tween(_chip).delay(0.6).to(0.4 + durate, {
                      position: _toPos
                    }, {
                      easing: "cubicOut"
                    }).call(function () {
                      comPlayer.showWin();
                    }).destroySelf().start();
                  }
                }
              };
              for (var _iterator2 = _createForOfIteratorHelperLoose(_this6.Node_deskPlayer.children), _step2; !(_step2 = _iterator2()).done;) {
                _loop2();
              }
              for (var _iterator3 = _createForOfIteratorHelperLoose(arrChip), _step3; !(_step3 = _iterator3()).done;) {
                var chip = _step3.value;
                var toPos = _this6.Node_cardStartRoot.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                toPos = chip.parent.getComponent(UITransform).convertToNodeSpaceAR(toPos);
                tween(chip).delay(0.25 + 0.6).to(0.25, {
                  position: toPos
                }, {
                  easing: "cubicOut"
                }).destroySelf().start();
              }
              _this6.scheduleOnce(resolve, 1.3);
            }
          });
        };
        _proto.doClear = function doClear() {
          this.unschedule(this.doClear);
          MultBlackJackModel.instance.myTotalBet = 0;
          this.operateCardIdx = 0;
          this.arrCard_banker = [];
          var Label_point = this.Node_point_banker.getChildByName("Label_point");
          Label_point.getComponent(Label).string = "";
          this.Node_point_banker.active = false;
          var Node_card_0 = this.Node_banker.getChildByName("Node_card_" + 0);
          Node_card_0.destroyAllChildren();
          var Node_card_1 = this.Node_banker.getChildByName("Node_card_" + 1);
          Node_card_1.destroyAllChildren();
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.Node_deskPlayer.children), _step5; !(_step5 = _iterator5()).done;) {
            var Node_player = _step5.value;
            Node_player.getComponent(MultBlackJack_player).doClear();
          }
        };
        _proto.mergeChip = function mergeChip(node) {
          if (node.children.length > 5) {
            node.children[0].destroy();
            this.scheduleOnce(function () {
              var i = 0;
              for (var _iterator6 = _createForOfIteratorHelperLoose(node.children), _step6; !(_step6 = _iterator6()).done;) {
                var child = _step6.value;
                var posIndex = i < 5 ? i : 4;
                child.position = v3(0, posIndex * 5, 0);
                i++;
              }
            });
          }
        }

        //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            //返回
            case "Node_menu_mask":
            case "Button_menu":
              {
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "Button_return":
              {
                MultBlackJackCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_record":
              {
                Common.loadPopBuddle("prefab/Node_record", MultBlackJackUtils.instance.bundle, function () {}, function (prefab) {
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
            case "Button_path":
              {
                Common.loadPopBuddle("prefab/Node_path", MultBlackJackUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_set", MultBlackJackUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_help", MultBlackJackUtils.instance.bundle, function () {}, function (prefab) {
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
            case "Button_again":
              {
                // for (let pos = 0; pos < 19; pos++) {
                //     let betAmount = MultBlackJackModel.instance.myBetBack[pos];
                //     if (betAmount > 0) {
                //         MultBlackJackCtrl.instance.reqBet(pos, betAmount);
                //     }
                // }
                break;
              }
            case "Button_chip_0":
            case "Button_chip_1":
            case "Button_chip_2":
            case "Button_chip_3":
            case "Button_chip_4":
            case "Button_chip_5":
              {
                if (MultBlackJackModel.instance.gameInfo.state != eStatusGame.bet) {
                  Common.showTip(i18n.lang.disableBet, sys.isMobile);
                  return;
                }
                var index = parseInt(event.target.name.replace("Button_chip_", ""));
                var betAmount = index == 5 ? MultBlackJackModel.instance.maxBet - MultBlackJackModel.instance.myTotalBet : MultBlackJackModel.instance.chipList[index];
                if (MultBlackJackModel.instance.myTotalBet + betAmount > MultBlackJackModel.instance.maxBet) {
                  var tip = Common.strFormat(i18n.lang["10064"], Common.ChangeMoneyShow(MultBlackJackModel.instance.maxBet, 3));
                  Common.showTip(tip, sys.isMobile);
                  return;
                }
                if (betAmount > MultBlackJackModel.instance.curBalance) {
                  Common.showTip(i18n.lang[10001], sys.isMobile);
                  return;
                }
                MultBlackJackModel.instance.curBet = MultBlackJackModel.instance.chipList[index];
                var Node_playerMyself = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                Node_playerMyself.getComponent(MultBlackJack_player).doBet(betAmount, 0);
                break;
              }

            //insurance
            case "Button_insurance_ok":
              {
                var hasBanlace = MultBlackJackModel.instance.curBalance >= MultBlackJackModel.instance.myTotalBet / 2.0;
                if (!hasBanlace) {
                  Common.showTip(i18n.lang[10001], sys.isMobile);
                  return;
                }
                MultBlackJackCtrl.instance.reqOperate(mOperate.insurance);
                var _Node_playerMyself = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                var playerMyself = _Node_playerMyself.getComponent(MultBlackJack_player);
                playerMyself.showTimer(0, 0);
                this.Node_insurance.active = false;
                break;
              }
            case "Button_insurance_not":
              {
                var _Node_playerMyself2 = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                var _playerMyself = _Node_playerMyself2.getComponent(MultBlackJack_player);
                _playerMyself.showTimer(0, 0);
                MultBlackJackCtrl.instance.reqOperate(mOperate.insurance, -1);
                this.Node_insurance.active = false;
                break;
              }
            //operation
            case "Button_double":
              {
                MultBlackJackCtrl.instance.reqOperate(mOperate["double"], this.operateCardIdx);
                this.Node_operation.active = false;
                break;
              }
            case "Button_split":
              {
                MultBlackJackCtrl.instance.reqOperate(mOperate.split);
                this.Node_operation.active = false;
                break;
              }
            case "Button_stand":
              {
                MultBlackJackCtrl.instance.reqOperate(mOperate.stand, this.operateCardIdx);
                this.Node_operation.active = false;
                break;
              }
            case "Button_hit":
              {
                MultBlackJackCtrl.instance.reqOperate(mOperate.hit, this.operateCardIdx);
                this.Node_operation.active = false;
                break;
              }
          }
        };
        _proto.doAwait = function doAwait(delay) {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            _this7.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.initPlayers = function initPlayers() {
          for (var iSeat = 0; iSeat < MultBlackJackModel.instance.gameInfo.seats.length; iSeat++) {
            var seatInfo = MultBlackJackModel.instance.gameInfo.seats[iSeat];
            var deskIndex = MultBlackJackModel.instance.getDeskIndex(iSeat);
            var Node_player = this.Node_deskPlayer.getChildByName("Node_player_" + deskIndex);
            var player = Node_player.getComponent(MultBlackJack_player);
            seatInfo.uid && seatInfo.uid != "" ? player.init(seatInfo, iSeat) : player.doLeave();
          }
        };
        _proto.initChipList = function initChipList() {
          MultBlackJackModel.instance.chipList = MultBlackJackModel.instance.chipList.slice(0, 5);
          for (var i = 0; i < MultBlackJackModel.instance.chipList.length; i++) {
            var Button_chip = this.Node_chip.getChildByName("Button_chip_" + i);
            if (!Button_chip) {
              break;
            }
            var betAmount = MultBlackJackModel.instance.chipList[i];
            var Label_value = Button_chip.getChildByName("Label_value");
            if (Label_value) {
              Label_value.getComponent(Label).string = "" + Common.ChangeMoneyShow(betAmount, 3);
            }
          }
        };
        _proto.showOperate = function showOperate(cardIndex) {
          if (cardIndex === void 0) {
            cardIndex = 0;
          }
          var Node_playerMyself = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
          var playerMyself = Node_playerMyself.getComponent(MultBlackJack_player);
          var arrCard = playerMyself.arrCard[cardIndex];
          this.operateCardIdx = cardIndex;
          var hasBanlace = MultBlackJackModel.instance.curBalance >= MultBlackJackModel.instance.myTotalBet;

          // 分牌两张相同
          this.Button_split.interactable = hasBanlace && !playerMyself.isSplited && arrCard.length == 2 && (arrCard[0].data % 13 == arrCard[1].data % 13 || arrCard[0].data % 13 >= 9 && arrCard[1].data % 13 >= 9);
          this.Button_split.target.getComponent(Sprite).grayscale = !this.Button_split.interactable;

          //双倍
          this.Button_double.interactable = hasBanlace && !playerMyself.isSplited && arrCard.length == 2 && playerMyself.getCardPoint(cardIndex) <= 21;
          this.Button_double.target.getComponent(Sprite).grayscale = !this.Button_double.interactable;
        };
        _proto.doBtnAction = function doBtnAction(nodeBtn, isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          Tween.stopAllByTarget(nodeBtn);
          nodeBtn.active = true;
          nodeBtn.position = isShow ? v3(0, -200, 0) : v3(0, 50, 0);
          tween(nodeBtn).to(0.25, {
            position: isShow ? v3(0, 50, 0) : v3(0, -200, 0)
          }).call(function () {
            nodeBtn.active = isShow;
          }).start();
        };
        _proto.updateState = function updateState(dataInfo) {
          var _this8 = this;
          MultBlackJackModel.instance.gameInfo.state = dataInfo.state;
          switch (MultBlackJackModel.instance.gameInfo.state) {
            case eStatusGame.bet:
              {
                this.Node_operation.active = false;
                this.Node_insurance.active = false;
                this.Node_chip.active = true;
                this.startBet = false;
                this.curOpSeat = -1;
                this.doClear();
                MultBlackJackModel.instance.gameInfo.gameNo = dataInfo.gameNo || MultBlackJackModel.instance.gameInfo.gameNo;
                this.Label_gameNo.string = "gameNo. " + MultBlackJackModel.instance.gameInfo.gameNo;
                break;
              }
            case eStatusGame.sendCard:
              {
                //停止倒计时
                var Node_playerMyself = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                var playerMyself = Node_playerMyself.getComponent(MultBlackJack_player);
                playerMyself.showTimer();
                this.Node_chip.active = false;

                //
                MultBlackJackModel.instance.gameInfo.bankerCards = dataInfo.bankerCards.slice();
                var iNum = 0;
                var _loop3 = function _loop3(index) {
                  var _loop4 = function _loop4(seatIndex) {
                    var seatInfo = dataInfo.seats[seatIndex];
                    if (seatInfo.uid != "" && seatInfo.handCards && seatInfo.handCards[0]) {
                      _this8.scheduleOnce(function () {
                        var card = seatInfo.handCards[0].cards[index];
                        var deskIndex = MultBlackJackModel.instance.getDeskIndex(seatIndex);
                        var Node_player = _this8.Node_deskPlayer.getChildByName("Node_player_" + deskIndex);
                        Node_player.getComponent(MultBlackJack_player).doSendCard(card, 0);
                      }, 0.5 * iNum);
                      iNum++;
                    }
                  };
                  for (var seatIndex = 0; seatIndex < 5; seatIndex++) {
                    _loop4(seatIndex);
                  }
                  var cardBanker = index == 0 ? MultBlackJackModel.instance.gameInfo.bankerCards[index] : null;
                  _this8.scheduleOnce(function () {
                    _this8.doSendCard_banker(cardBanker, 0);
                  }, 0.5 * iNum);
                  iNum++;
                };
                for (var index = 0; index < 2; index++) {
                  _loop3(index);
                }
                break;
              }
            case eStatusGame.insure:
              {
                var _Node_playerMyself3 = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                var _playerMyself2 = _Node_playerMyself3.getComponent(MultBlackJack_player);
                _playerMyself2.showTimer(10, 10);
                this.Node_insurance.active = true;
                break;
              }
            case eStatusGame.operate:
              {
                var _Node_playerMyself4 = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                var _playerMyself3 = _Node_playerMyself4.getComponent(MultBlackJack_player);
                _playerMyself3.setTimer();
                this.Node_insurance.active = false;
                if (this.curOpSeat != -1) {
                  var _deskIndex = MultBlackJackModel.instance.getDeskIndex(this.curOpSeat);
                  var _Node_player = this.Node_deskPlayer.getChildByName("Node_player_" + _deskIndex);
                  var _player = _Node_player.getComponent(MultBlackJack_player);
                  _player.setTimer(0, 0, 0);
                }
                this.curOpSeat = dataInfo.nextOpSeat;
                var deskIndex = MultBlackJackModel.instance.getDeskIndex(this.curOpSeat);
                var Node_player = this.Node_deskPlayer.getChildByName("Node_player_" + deskIndex);
                var player = Node_player.getComponent(MultBlackJack_player);
                player.setTimer(dataInfo.nextOpCardIdx, 10, 10);
                if (deskIndex == 0) {
                  //自己
                  this.Node_operation.active = true;
                  this.showOperate(dataInfo.nextOpCardIdx);
                } else if (this.Node_operation.active) {
                  this.Node_operation.active = false;
                }
                break;
              }
            case eStatusGame.checkout:
              {
                MultBlackJackModel.instance.gameInfo.seats = dataInfo.seats;
                MultBlackJackModel.instance.gameInfo.bankerCards = dataInfo.bankerCards.slice();
                var _Node_playerMyself5 = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                var _playerMyself4 = _Node_playerMyself5.getComponent(MultBlackJack_player);
                _playerMyself4.setTimer();
                this.Node_operation.active = false;
                this.Node_insurance.active = false;
                this.Node_chip.active = false;

                //
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this8.doShowBankerSecond();
                      case 2:
                        _context.next = 4;
                        return _this8.doBankerHitCard();
                      case 4:
                        _context.next = 6;
                        return _this8.showResult();
                      case 6:
                        _context.next = 8;
                        return _this8.doCollectChip();
                      case 8:
                        _this8.updateGold();
                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }))();
                break;
              }
          }
        }

        //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this9 = this;
          switch (event) {
            case eProto.HD_Enter:
              {
                MultBlackJackModel.instance.mySeat = -1;
                this.initChipList();
                this.initPlayers();
                this.Label_gameNo.string = "gameNo. " + MultBlackJackModel.instance.gameInfo.gameNo;
                this.Label_maxBet.string = "" + Common.ChangeMoneyShow(MultBlackJackModel.instance.maxBet, 3);

                //定时器
                var Node_playerMyself = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                var playerMyself = Node_playerMyself.getComponent(MultBlackJack_player);
                playerMyself.setTimer();
                this.Node_operation.active = false;
                this.Node_insurance.active = false;
                this.Node_chip.active = false;
                this.startBet = false;
                // this.curOpSeat = -1;

                switch (MultBlackJackModel.instance.gameInfo.state) {
                  case eStatusGame.bet:
                    {
                      this.Node_chip.active = true;
                      if (MultBlackJackModel.instance.gameInfo.countdown > 0) {
                        this.gameTip.node.active = true;
                        this.gameTip.setAnimation(0, "bet", false);
                        this.gameTip.setCompleteListener(function () {
                          _this9.gameTip.setCompleteListener(null);
                          _this9.gameTip.node.active = false;
                        });
                        var delayTimes = MultBlackJackModel.instance.gameInfo.countdown > 3 ? MultBlackJackModel.instance.gameInfo.countdown - 3 : 0;
                        var leftTimes = MultBlackJackModel.instance.gameInfo.countdown - delayTimes;
                        this.scheduleOnce(function () {
                          ViewManager.instance.showCountDownTip(_this9.node, leftTimes, "idle4", 180);
                        }, delayTimes);
                        var _Node_playerMyself6 = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                        var _playerMyself5 = _Node_playerMyself6.getComponent(MultBlackJack_player);
                        _playerMyself5.setTimer(MultBlackJackModel.instance.gameInfo.operateCardIdx, 10, MultBlackJackModel.instance.gameInfo.countdown);
                      }
                      break;
                    }
                  case eStatusGame.sendCard:
                    {
                      for (var i = 0; i < 2; i++) {
                        var card = i == 0 ? MultBlackJackModel.instance.gameInfo.bankerCards[i] : null;
                        this.doSendCard_banker(card, 0);
                      }
                      break;
                    }
                  case eStatusGame.insure:
                    {
                      for (var _i = 0; _i < 2; _i++) {
                        var _card = _i == 0 ? MultBlackJackModel.instance.gameInfo.bankerCards[_i] : null;
                        this.doSendCard_banker(_card, 0);
                      }
                      var _Node_playerMyself7 = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                      var _playerMyself6 = _Node_playerMyself7.getComponent(MultBlackJack_player);
                      _playerMyself6.setTimer(MultBlackJackModel.instance.gameInfo.operateCardIdx, 0, 0);
                      this.Node_insurance.active = true;
                      break;
                    }
                  case eStatusGame.operate:
                    {
                      for (var _i2 = 0; _i2 < 2; _i2++) {
                        var _card2 = _i2 == 0 ? MultBlackJackModel.instance.gameInfo.bankerCards[_i2] : null;
                        this.doSendCard_banker(_card2, 0);
                      }
                      if (this.curOpSeat != -1) {
                        var _deskIndex2 = MultBlackJackModel.instance.getDeskIndex(this.curOpSeat);
                        var _Node_player2 = this.Node_deskPlayer.getChildByName("Node_player_" + _deskIndex2);
                        var _player2 = _Node_player2.getComponent(MultBlackJack_player);
                        _player2.setTimer(0, 0, 0);
                      }
                      this.curOpSeat = MultBlackJackModel.instance.gameInfo.operateSeat;
                      var deskIndex = MultBlackJackModel.instance.getDeskIndex(this.curOpSeat);
                      var Node_player = this.Node_deskPlayer.getChildByName("Node_player_" + deskIndex);
                      var player = Node_player.getComponent(MultBlackJack_player);
                      player.setTimer(MultBlackJackModel.instance.gameInfo.operateCardIdx, 0, 0);
                      if (deskIndex == 0) {
                        //自己
                        this.Node_operation.active = true;
                        this.showOperate(MultBlackJackModel.instance.gameInfo.operateCardIdx);
                      }
                      break;
                    }
                  case eStatusGame.checkout:
                    {
                      for (var _i3 = 0; _i3 < 2; _i3++) {
                        var _card3 = MultBlackJackModel.instance.gameInfo.bankerCards[_i3];
                        this.doSendCard_banker(_card3, 0);
                      }
                      for (var _iterator7 = _createForOfIteratorHelperLoose(MultBlackJackModel.instance.gameInfo.bankerCards), _step7; !(_step7 = _iterator7()).done;) {
                        var _card4 = _step7.value;
                        this.doSendCard_banker(_card4, 1);
                      }
                      this.Node_operation.active = false;
                      this.Node_insurance.active = false;
                      this.Node_chip.active = false;

                      //庄家 第二张牌 打开
                      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return _this9.showResult();
                            case 2:
                              _context2.next = 4;
                              return _this9.doCollectChip();
                            case 4:
                              _this9.updateGold();
                            case 5:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2);
                      }))();
                      break;
                    }
                }
                break;
              }
            case eProto.enter:
              {
                //玩家进入
                var seatInfo = data.seats[data.seat];
                if (MultBlackJackModel.instance.isMyself(data.uid)) {
                  return;
                }
                MultBlackJackModel.instance.addPlayer(data.seat, seatInfo);
                var _deskIndex3 = MultBlackJackModel.instance.getDeskIndex(data.seat);
                var _Node_player3 = this.Node_deskPlayer.getChildByName("Node_player_" + _deskIndex3);
                _Node_player3.active = true;
                var _player3 = _Node_player3.getComponent(MultBlackJack_player);
                _player3.init(seatInfo, data.seat);
                break;
              }
            case eProto.leave:
              {
                var _deskIndex4 = MultBlackJackModel.instance.getDeskIndex(data.seat);
                if (_deskIndex4 == 0) {
                  EventManager.instance.emit(eEvent.onLoadHall);
                  return;
                }

                //玩家离开
                var _Node_player4 = this.Node_deskPlayer.getChildByName("Node_player_" + _deskIndex4);
                var _player4 = _Node_player4.getComponent(MultBlackJack_player);
                _player4.doLeave();
                MultBlackJackModel.instance.gameInfo.seats = data.seats.slice();
                break;
              }
            //
            case eProto.bet:
              {
                var dataInfo = data;
                var _deskIndex5 = MultBlackJackModel.instance.getDeskIndex(data.seat);
                var _Node_player5 = this.Node_deskPlayer.getChildByName("Node_player_" + _deskIndex5);
                var _player5 = _Node_player5.getComponent(MultBlackJack_player);
                _player5.doSendChip(dataInfo.amount);
                MultBlackJackModel.instance.gameInfo.seats = dataInfo.seats.slice();
                _player5.seatInfo = MultBlackJackModel.instance.gameInfo.seats[data.seat];
                _player5.updateGold();
                if (!this.startBet) {
                  this.startBet = true;
                  var _Node_playerMyself8 = this.Node_deskPlayer.getChildByName("Node_player_" + 0);
                  var _playerMyself7 = _Node_playerMyself8.getComponent(MultBlackJack_player);
                  _playerMyself7.showTimer(10, 10);
                  this.gameTip.node.active = true;
                  this.gameTip.setAnimation(0, "bet", false);
                  this.gameTip.setCompleteListener(function () {
                    _this9.gameTip.setCompleteListener(null);
                    _this9.gameTip.node.active = false;
                  });
                  this.scheduleOnce(function () {
                    ViewManager.instance.showCountDownTip(_this9.node, 3, "idle4", 180);
                  }, 7);
                }
                break;
              }
            /////////
            case eProto.split:
              {
                var _dataInfo = data;
                var _deskIndex6 = MultBlackJackModel.instance.getDeskIndex(_dataInfo.seat);
                var _Node_player6 = this.Node_deskPlayer.getChildByName("Node_player_" + _deskIndex6);
                var _player6 = _Node_player6.getComponent(MultBlackJack_player);
                _player6.seatInfo = _dataInfo.seats[_dataInfo.seat];
                _player6.setTimer(_dataInfo.cardIdx, 0, 0);
                _player6.doSplit();
                _player6.updateGold();
                if (_dataInfo.nextOpSeat != -1) {
                  this.scheduleOnce(function () {
                    var nextDeskIndex = MultBlackJackModel.instance.getDeskIndex(_dataInfo.nextOpSeat);
                    var Node_player_next = _this9.Node_deskPlayer.getChildByName("Node_player_" + nextDeskIndex);
                    var player_next = Node_player_next.getComponent(MultBlackJack_player);
                    player_next.setTimer(_dataInfo.nextOpCardIdx, 10, 10);
                    if (nextDeskIndex == 0) {
                      //自己
                      _this9.Node_operation.active = true;
                      _this9.showOperate(_dataInfo.nextOpCardIdx);
                    } else if (_this9.Node_operation.active) {
                      _this9.Node_operation.active = false;
                    }
                  }, 1.5);
                }
                break;
              }
            case eProto.stand:
              {
                var _dataInfo2 = data;
                var _deskIndex7 = MultBlackJackModel.instance.getDeskIndex(_dataInfo2.seat);
                var _Node_player7 = this.Node_deskPlayer.getChildByName("Node_player_" + _deskIndex7);
                var _player7 = _Node_player7.getComponent(MultBlackJack_player);
                _player7.seatInfo = _dataInfo2.seats[_dataInfo2.seat];
                _player7.setTimer(_dataInfo2.cardIdx, 0, 0);
                _player7.setCardstate_hitStand(_dataInfo2.cardIdx, "stand");
                if (_dataInfo2.nextOpSeat != -1) {
                  var nextDeskIndex = MultBlackJackModel.instance.getDeskIndex(_dataInfo2.nextOpSeat);
                  var Node_player_next = this.Node_deskPlayer.getChildByName("Node_player_" + nextDeskIndex);
                  var player_next = Node_player_next.getComponent(MultBlackJack_player);
                  player_next.setTimer(_dataInfo2.nextOpCardIdx, 10, 10);
                  if (nextDeskIndex == 0) {
                    //自己
                    this.Node_operation.active = true;
                    this.showOperate(_dataInfo2.nextOpCardIdx);
                  } else if (this.Node_operation.active) {
                    this.Node_operation.active = false;
                  }
                }
                break;
              }
            case eProto.hit:
              {
                var _dataInfo3 = data;
                var _deskIndex8 = MultBlackJackModel.instance.getDeskIndex(_dataInfo3.seat);
                var _Node_player8 = this.Node_deskPlayer.getChildByName("Node_player_" + _deskIndex8);
                var _player8 = _Node_player8.getComponent(MultBlackJack_player);
                _player8.seatInfo = _dataInfo3.seats[_dataInfo3.seat];
                _player8.setTimer(_dataInfo3.cardIdx, 0, 0);
                var cards = _player8.seatInfo.handCards[_dataInfo3.cardIdx].cards;
                _player8.doSendCard(cards[cards.length - 1], _dataInfo3.cardIdx);
                _player8.setCardstate_hitStand(_dataInfo3.cardIdx, "hit");
                if (_dataInfo3.nextOpSeat != -1) {
                  var _nextDeskIndex = MultBlackJackModel.instance.getDeskIndex(_dataInfo3.nextOpSeat);
                  var _Node_player_next = this.Node_deskPlayer.getChildByName("Node_player_" + _nextDeskIndex);
                  var _player_next = _Node_player_next.getComponent(MultBlackJack_player);
                  _player_next.setTimer(_dataInfo3.nextOpCardIdx, 10, 10);
                  if (_nextDeskIndex == 0) {
                    //自己
                    this.Node_operation.active = true;
                    this.showOperate(_dataInfo3.nextOpCardIdx);
                  } else if (this.Node_operation.active) {
                    this.Node_operation.active = false;
                  }
                }
                break;
              }
            case eProto["double"]:
              {
                var _dataInfo4 = data;
                var _deskIndex9 = MultBlackJackModel.instance.getDeskIndex(_dataInfo4.seat);
                var _Node_player9 = this.Node_deskPlayer.getChildByName("Node_player_" + _deskIndex9);
                var _player9 = _Node_player9.getComponent(MultBlackJack_player);
                _player9.seatInfo = _dataInfo4.seats[_dataInfo4.seat];
                _player9.setTimer(_dataInfo4.cardIdx, 0, 0);
                var _cards = _player9.seatInfo.handCards[_dataInfo4.cardIdx].cards;
                _player9.doSendCard(_cards[_cards.length - 1], _dataInfo4.cardIdx);
                _player9.doSendChip(_player9.betAmount[_dataInfo4.cardIdx], _dataInfo4.cardIdx, true);
                _player9.updateGold();
                if (_dataInfo4.nextOpSeat != -1) {
                  var _nextDeskIndex2 = MultBlackJackModel.instance.getDeskIndex(_dataInfo4.nextOpSeat);
                  var _Node_player_next2 = this.Node_deskPlayer.getChildByName("Node_player_" + _nextDeskIndex2);
                  var _player_next2 = _Node_player_next2.getComponent(MultBlackJack_player);
                  _player_next2.setTimer(_dataInfo4.nextOpCardIdx, 10, 10);
                  if (_nextDeskIndex2 == 0) {
                    //自己
                    this.Node_operation.active = true;
                    this.showOperate(_dataInfo4.nextOpCardIdx);
                  } else if (this.Node_operation.active) {
                    this.Node_operation.active = false;
                  }
                }
                break;
              }
            case eProto.insurance:
              {
                var _dataInfo5 = data;
                var _deskIndex10 = MultBlackJackModel.instance.getDeskIndex(_dataInfo5.seat);
                var _Node_player10 = this.Node_deskPlayer.getChildByName("Node_player_" + _deskIndex10);
                var _player10 = _Node_player10.getComponent(MultBlackJack_player);
                _player10.seatInfo = _dataInfo5.seats[_dataInfo5.seat];
                _player10.doInsurance();
                _player10.updateGold();
                this.Node_insurance.active = false;
                break;
              }
            case eProto.switchState:
              {
                this.updateState(data);
                break;
              }
            // case MultBlackJackDef.eProto.s: {
            //     let dataInfo: MultBlackJackDef.ISwitchState = data;
            //     MultBlackJackModel.instance.gameInfo.state = dataInfo.state;

            //     this.updateState();
            //     break;
            // }

            //////////////////////////////////////////
            case ConfigManager.instance.protocolHall.login:
              {
                //                //断线重连
                Common.closeNetTips();
                Common.closeWait();
                this.gameShow();
                break;
              }
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();
                break;
              }
          }
        };
        return MultBlackJackGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_maxBet", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chipSmall", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gameTip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "star", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_star", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_deskPlayer", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Node_banker", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_chip", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_insurance", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_operation", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Button_double", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Button_split", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "cardTemp", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "cardTemp_banker", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardStartRoot", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_point_banker", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Node_bankerChipTag", [_dec25], {
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

System.register("chunks:///_virtual/MultBlackJackModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './DataManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameDef, DataManager, UserKey;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0eb03yCLFJB3qJlS4P9MyY3", "MultBlackJackModel", undefined);
      var MultBlackJackModel = exports('MultBlackJackModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(MultBlackJackModel, _GameDef$BaseSington);
        function MultBlackJackModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.nPummping = 0;
          _this.curBet = 0;
          _this.chipList = [1000, 10000, 50000, 100000, 500000];
          _this.gameInfo = null;
          _this.maxBet = 5000000;
          _this.myTotalBet = 0;
          _this.mySeat = -1;
          return _this;
        }
        var _proto = MultBlackJackModel.prototype;
        _proto.getDeskIndex = function getDeskIndex(iSeat) {
          if (this.mySeat == -1) {
            var myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
            for (var seatIndex = 0; seatIndex < 5; seatIndex++) {
              var seatInfo = this.gameInfo.seats[seatIndex];
              if (seatInfo.uid == myUid) {
                this.mySeat = seatIndex;
                break;
              }
            }
          }

          //myDeskIndex = 0
          if (iSeat >= this.mySeat) {
            return iSeat - this.mySeat;
          }
          return 5 - (this.mySeat - iSeat);
        };
        _proto.getSeatByDeskIndex = function getSeatByDeskIndex(deskIndex) {
          if (this.mySeat == -1) {
            var myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
            for (var seatIndex = 0; seatIndex < 5; seatIndex++) {
              var seatInfo = this.gameInfo.seats[seatIndex];
              if (seatInfo.uid == myUid) {
                this.mySeat = seatIndex;
                break;
              }
            }
          }
          return (this.mySeat + deskIndex) % 5;
        };
        _proto.isMyself = function isMyself(uid) {
          var myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
          return uid == myUid;
        };
        _proto.addPlayer = function addPlayer(seatID, player) {
          if (this.gameInfo) {
            this.gameInfo.seats[seatID] = player;
          }
        };
        _proto.delPlayer = function delPlayer(seatID) {
          if (this.gameInfo) {
            this.gameInfo.seats.splice(seatID, 1);
          }
        }

        // gameNo: string = null;
        // BetSecond: number = 0;
        // TotalSecond: number = 0;
        // countDown: number = 0;
        // history: number[] = null;
        // PosOdds: { [index: string]: number }[] = null;
        // PosMaxBet: { [index: string]: number }[] = null;
        // curTotalBet: number = 0;
        // curTotalWin: number = 0;
        // myBetBack: number[] = [];
        // myTotalBet: number[] = [];
        // TotalBet: number[] = [];
        // PlayerInfos: { Avatar: string; Balance: number; Nickname: string; Prize: number; Uid: string }[] = null;

        // // result: MultBlackJackDef.IOpen = null;
        // destAngle: number[] = null;
        // prize: MultBlackJackDef.IPrize = null;
        // PlayerCount: number = 0;
        // record = null;

        // isNoneCheckOut = false;

        // gameStatus: MultBlackJackDef.eStatusGame = MultBlackJackDef.eStatusGame.none;
        ////////////////////////////////////////////////////////////
        /**
         * 退出房间  清理游戏数据
         */;
        _proto.clearGameData = function clearGameData() {};
        _proto.doGetAngle = function doGetAngle(OpenNum) {
          //test
          // OpenNum = 4;

          var vRsult = Math.floor(OpenNum / 4);
          var cRsult = OpenNum % 4;
          var randIndex = Math.floor(Math.random() * 3);
          var vAngle = vRsult * 30 + randIndex * 90;
          randIndex = Math.floor(Math.random() * 2);
          var cAngle = cRsult * 30 + randIndex * 120;

          // gts.Debug.Log(`=doGetAngle=vRsult=${vRsult}==cRsult=${cRsult}====vAngle=${vAngle}==cAngle=${cAngle}`);
          return [vAngle, cAngle];
        };
        return MultBlackJackModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MultBlackJackScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './MultBlackJackDef.ts', './MultBlackJackUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, sys, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, MultBlackJackUtils, Common;
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
      MultBlackJackUtils = module.MultBlackJackUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ed538RURXVP9I+vZ+3R7QPz", "MultBlackJackScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MultBlackJackScene = exports('default', (_dec = ccclass("MultBlackJackScene"), _dec2 = menu("game/MultBlackJackGame/MultBlackJackScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MultBlackJackScene, _Component);
        function MultBlackJackScene() {
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
        var _proto = MultBlackJackScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          MultBlackJackUtils.instance.bundle = assetManager.getBundle(cBundle);
          MultBlackJackUtils.instance.preLoad();
          MultBlackJackUtils.instance.playBgMusic();
          this.onLoadGame();
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
          Common.showWait();
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
            Common.showWait();
            MultBlackJackUtils.instance.bundle.load("prefab/MultBlackJackGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
        return MultBlackJackScene;
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

System.register("chunks:///_virtual/MultBlackJackUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './MultBlackJackDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, SpriteFrame, GameDef, AudioManager, eSound, strColor, strValue, Common;
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
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSound = module.eSound;
      strColor = module.strColor;
      strValue = module.strValue;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bdbfbpCvCNJApo22/38zUty", "MultBlackJackUtils", undefined);
      var MultBlackJackUtils = exports('MultBlackJackUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(MultBlackJackUtils, _GameDef$BaseSington);
        function MultBlackJackUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          //    //animationName:{icon_wild:{idle,boom},icon_hu:{idle,intro}}
          //    // icon_hu:{icon_fa:["faidle","fa"]}
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          // arrIconSpriteFrame: { [index: string]: SpriteFrame } = {};
          _this.arrCardSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = MultBlackJackUtils.prototype;
        // arrIconFrameSpriteFrame: { [index: string]: SpriteFrame } = {};
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/MultBlackJackGameView");
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
                  arrHLoad = [];
                  arrHLoad.push(this.asyncLoadDir("textures/card", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpFrame), _step; !(_step = _iterator()).done;) {
                        var _SpriteFrame = _step.value;
                        _this4.arrCardSpriteFrame[_SpriteFrame.name] = _SpriteFrame;
                      }
                    }
                  }));
                  // arrHLoad.push(
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
            soundPath = eSound.bgNomal;
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

          //        // MultBlackJackUtils.instance.playSound(MultBlackJackDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // MultBlackJackUtils.instance.stopSound(MultBlackJackDef.eSound.numAdd);
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

          //        // MultBlackJackUtils.instance.playSound(MultBlackJackDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // MultBlackJackUtils.instance.stopSound(MultBlackJackDef.eSound.numAdd);
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

          //        // MultBlackJackUtils.instance.playSound(MultBlackJackDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // MultBlackJackUtils.instance.stopSound(MultBlackJackDef.eSound.numAdd);

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

        _proto.getCardFrame = function getCardFrame(cardData) {
          var strFrame = "paibei";
          if (cardData != null) {
            var value = cardData % 13;
            var color = Math.floor(cardData / 13);
            strFrame = "" + strColor[color] + strValue[value];
          }
          if (this.arrCardSpriteFrame) {
            return this.arrCardSpriteFrame[strFrame];
          }
          return null;
        };
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
        }

        //////////////////////////////////////////////////
        ;

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
        _proto.isBlackJack = function isBlackJack(card_0, card_1) {
          return card_0 % 13 == 0 && card_1 % 13 >= 9 || card_1 % 13 == 0 && card_0 % 13 >= 9;
        };
        _proto.getCardPoint = function getCardPoint(arrCard) {
          var arrA = [];
          var vPoint = 0;
          for (var i = 0; i < arrCard.length; i++) {
            var cardData = arrCard[i].data;
            if (cardData % 13 == 0) {
              arrA.push(cardData);
            } else {
              var point = cardData % 13;
              point = point >= 9 ? 10 : point + 1;
              vPoint += point;
            }
          }
          var maxVA = arrA.length > 0 ? arrA.length + 10 : 0;
          var minVA = arrA.length;
          vPoint += vPoint > 21 || vPoint + minVA > 21 || vPoint + maxVA > 21 ? minVA : maxVA;
          return vPoint;
        };
        return MultBlackJackUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/MultBlackJackGame', 'chunks:///_virtual/MultBlackJackGame'); 
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