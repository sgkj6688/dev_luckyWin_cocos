System.register("chunks:///_virtual/slotJLcsDef.ts", ['cc', './slotJLcsProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, AudioClip, slotJLcsProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      slotJLcsProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8eaedNUrxlC0qJB2huO2m6S", "slotJLcsDef", undefined);
      var slotJLcsDef = exports('slotJLcsDef', /*#__PURE__*/function () {
        function slotJLcsDef() {}
        slotJLcsDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = slotJLcsProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            if (err) {
              console.log(err);
            }
            if (call) {
              var soundId = AudioManager.instance.playSound(audio);
              call(soundId);
            } else {
              AudioManager.instance.playOneShot(audio);
            }
          });
        };
        slotJLcsDef.palyMusic = function palyMusic(name) {
          var bundle = slotJLcsProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return slotJLcsDef;
      }());
      slotJLcsDef.audio = {
        MG_BGM: 'MG_BGM',
        //普通模式时播放的背景音乐 1
        MG_BGM_Extra: 'MG_BGM_Extra',
        //EX模式时播放的背景音乐  1
        Extra_UI_On: 'Extra_UI_On',
        //打开或关闭EX模式按钮时播放  1
        Extra_Touch: 'Extra_Touch',
        //EX模式选择具体类型时播放  1
        Extra_Bet_On: 'Extra_Bet_On',
        //EX模式点击ok按钮时播放  1
        Spin: 'Spin',
        //点击旋转按钮时播放  1
        Caishen_01: 'Caishen_01',
        //转出财神图标时播放 1
        Caishen_02: 'Caishen_02',
        //播放财神元宝聚气动画时播放 1
        Caishen_03: 'Caishen_03',
        //播放财神丢元宝动画时播放 1
        WILD_Stop: 'WILD_Stop',
        //WILD开始要放大时播放 1
        Wild_Extend: 'Wild_Extend',
        //WILD变成一整轴的财神完成后播放 1
        Wild_Multiple: 'Wild_Multiple',
        //财神出现倍数时播放 1
        Wild_Multiple_Add1: 'Wild_Multiple_Add1',
        //财神倍数相加，总倍数小于3倍时播放 1
        Wild_Multiple_Add2: 'Wild_Multiple_Add2',
        //财神倍数相加，总倍数大于等于3倍，小于10倍时播放 1
        Wild_Multiple_Add3: 'Wild_Multiple_Add3',
        //财神倍数相加，总倍数大于等于10倍时播放 1
        NearWin: 'NearWin',
        //非EX2模式，且界面上已有两个财神，其他轴开始转的时候播放 1
        Change_Win: 'Change_Win',
        //bigwin或megawin界面出现时开始播放 1
        Change_Win2: 'Change_Win2',
        //superwin界面出现时开始播放 1
        Small_Win01: 'Small_Win01',
        //本局第一次旋转，旋转结果出现时，中奖金额小于下注金额5倍时播放 1
        Small_Win02: 'Small_Win02',
        //本局第一次旋转，旋转结果出现时，中奖金额大于等于5倍，且小于下注金额10倍时播放 1
        Small_Win03: 'Small_Win03',
        //本局第一次旋转，旋转结果出现时，中奖金额大于等于10倍时播放；本局非第一次旋转完播放 1
        Big_Win: 'Big_Win',
        //bigwin，megawin，superwin界面出现时开始播放 1
        Big_Win_End: 'Big_Win_End',
        //bigwin，megawin，superwin界面金币停止跳动时播放 1
        Reel_Stop: 'Reel_Stop',
        //旋转停止时增加停止音效，每轴都要播放，如果快速模式同时停止只需要播放一次 
        COMMON_BTN: 'COMMON_BTN' //点击菜单按钮（包含里面各按钮）、切换金币按钮（包含里面各金额）、加速、自动旋转时播放
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotJLCSGame", ['./slotJLCSScene.ts', './slotJLcsDef.ts', './slotJLcsItem.ts', './slotJLcsNo.ts', './slotJLcsProxy.ts', './slotJLcsRun.ts', './slotJLcsSetBase.ts', './slotJLcsUtils.ts', './slotJLcsView.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/slotJLcsItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotJLcsDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, sp, Sprite, UITransform, Component, slotJLcsDef;
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
      sp = module.sp;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      slotJLcsDef = module.slotJLcsDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "d54a3zoDxxKU6GQzCwxru+0", "slotJLcsItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var slotJLcsItem = exports('slotJLcsItem', (_dec = ccclass("slotJLcsItem"), _dec2 = property(SpriteFrame), _dec3 = property(sp.SkeletonData), _dec4 = property(Sprite), _dec5 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotJLcsItem, _Component);
        function slotJLcsItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /*
            BOWL BonusSymbol = 1 碗
            TOAD BonusSymbol = 2 蟾蜍
            PACKET BonusSymbol = 3 小包裹
            BAG BonusSymbol = 4 袋子
            A BonusSymbol = 5
            K BonusSymbol = 6
            Q BonusSymbol = 7
            WILD1 BonusSymbol = 8
            WILD2 BonusSymbol = 9
            WILD3 BonusSymbol = 10
            WILD5 BonusSymbol = 11
            WILD10 BonusSymbol = 12
            */
          _initializerDefineProperty(_this, "itemList", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemSpineList", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemSpine", _descriptor4, _assertThisInitialized(_this));
          _this._itemIndex = 0;
          return _this;
        }
        var _proto = slotJLcsItem.prototype;
        _proto.initItemCard = function initItemCard(num) {
          this.itemSpine.node.active = false;
          if (num <= 7) {
            this.item.spriteFrame = this.itemList[num - 1];
          } else {
            this.item.spriteFrame = this.itemList[7];
          }
          this.node.getComponent(UITransform).priority = 1;
          this._itemIndex = num;
          this.item.node.active = true;
        };
        _proto.showWin = function showWin() {
          this.item.node.active = false;
          this.itemSpine.node.active = true;
          if (this._itemIndex <= 7) {
            this.itemSpine.skeletonData = this.itemSpineList[this._itemIndex - 1];
            this.itemSpine.setAnimation(0, "Win", true);
          } else {
            this.itemSpine.skeletonData = this.itemSpineList[7];
            this.itemSpine.setAnimation(0, "Symbol_Stop", true);
          }
          this.node.getComponent(UITransform).priority = 24;
        };
        _proto.hideWin = function hideWin() {
          this.item.node.active = true;
          this.itemSpine.node.active = false;
        };
        _proto.showWild = function showWild(position, index) {
          var _this2 = this;
          this.itemSpine.node.active = true;
          if (index == 0) {
            slotJLcsDef.palyAudio(slotJLcsDef.audio.WILD_Stop);
          }
          if (position == 0) {
            this.itemSpine.setAnimation(0, "Symbol_Expend3", false);
            this.itemSpine.setCompleteListener(function () {
              _this2.itemSpine.setCompleteListener(null);
              _this2.itemSpine.setAnimation(0, "Symbol_Expend3_Hit", false);
              _this2.itemSpine.setCompleteListener(function () {
                _this2.itemSpine.setCompleteListener(null);
                if (index == 0) {
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Extend);
                }
                _this2.itemSpine.setAnimation(0, "Symbol_Expend3_Idle", true);
              });
            });
          } else if (position == 1) {
            this.itemSpine.setAnimation(0, "Symbol_Expend1", false);
            this.itemSpine.setCompleteListener(function () {
              _this2.itemSpine.setCompleteListener(null);
              _this2.itemSpine.setAnimation(0, "Symbol_Expend1_Hit", false);
              _this2.itemSpine.setCompleteListener(function () {
                _this2.itemSpine.setCompleteListener(null);
                if (index == 0) {
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Extend);
                }
                _this2.itemSpine.setAnimation(0, "Symbol_Expend1_Idle", true);
              });
            });
          } else {
            this.itemSpine.setAnimation(0, "Symbol_Expend2", false);
            this.itemSpine.setCompleteListener(function () {
              _this2.itemSpine.setCompleteListener(null);
              _this2.itemSpine.setAnimation(0, "Symbol_Expend2_Hit", false);
              _this2.itemSpine.setCompleteListener(function () {
                _this2.itemSpine.setCompleteListener(null);
                if (index == 0) {
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Extend);
                }
                _this2.itemSpine.setAnimation(0, "Symbol_Expend2_Idle", true);
              });
            });
          }
        };
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return slotJLcsItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemSpineList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemSpine", [_dec5], {
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

System.register("chunks:///_virtual/slotJLcsNo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, Sprite, tween, UIOpacity, Component;
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
      Sprite = module.Sprite;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "68dafcXUSNFVYtqLKT/E0JF", "slotJLcsNo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var slotJLcsNo = exports('slotJLcsNo', (_dec = ccclass('slotJLcsNo'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotJLcsNo, _Component);
        function slotJLcsNo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "noBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noInterBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "no", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inter", _descriptor6, _assertThisInitialized(_this));
          _this._positionX = 32;
          _this._positionY = [0, 155, -155, 245, -245, 200, -200, -104, 104];
          return _this;
        }
        var _proto = slotJLcsNo.prototype;
        // 1,6,7 黄 2,5,8 红 3,4,9 绿
        _proto.start = function start() {};
        _proto.rendeNo = function rendeNo(no) {
          if (no == 1 || no == 6 || no == 7) {
            this.bg.getComponent(Sprite).spriteFrame = this.noBg[2];
            this.inter.getComponent(Sprite).spriteFrame = this.noInterBg[2];
            this.no.getComponent(Sprite).spriteFrame = this.noList[no - 1];
          } else if (no == 2 || no == 5 || no == 8) {
            this.bg.getComponent(Sprite).spriteFrame = this.noBg[1];
            this.inter.getComponent(Sprite).spriteFrame = this.noInterBg[1];
            this.no.getComponent(Sprite).spriteFrame = this.noList[no - 1];
          } else {
            this.bg.getComponent(Sprite).spriteFrame = this.noBg[0];
            this.inter.getComponent(Sprite).spriteFrame = this.noInterBg[0];
            this.no.getComponent(Sprite).spriteFrame = this.noList[no - 1];
          }
          this.node.setPosition(this._positionX, this._positionY[no - 1]);
          var embedTween1 = tween(this.no.getComponent(UIOpacity)).to(0.3, {
            opacity: 50
          }).to(0.3, {
            opacity: 255
          });
          tween(this.no.getComponent(UIOpacity)).repeatForever(embedTween1).start();
          var embedTween2 = tween(this.inter.getComponent(UIOpacity)).to(0.3, {
            opacity: 50
          }).to(0.3, {
            opacity: 255
          });
          tween(this.inter.getComponent(UIOpacity)).repeatForever(embedTween2).start();
        };
        return slotJLcsNo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "noBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "noInterBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "noList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "no", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "inter", [_dec7], {
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

System.register("chunks:///_virtual/slotJLcsProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, sys, assetManager, i18n, ProxyBase, Common, MainManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      assetManager = module.assetManager;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyBase = module.ProxyBase;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d9b8eLGY1MCrYyTTYSLmQr", "slotJLcsProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotJLcsGameEvent = exports('slotJLcsGameEvent', /*#__PURE__*/function (slotJLcsGameEvent) {
        slotJLcsGameEvent["ENTER_ROOM"] = "enterRoom";
        slotJLcsGameEvent["LEAVE_ROOM"] = "leaveRoom";
        slotJLcsGameEvent["UPDATE_CONFIG"] = "updateConfig";
        slotJLcsGameEvent["UPDATE_BETLIST"] = "updateBetList";
        slotJLcsGameEvent["CLOSE_BONUS"] = "closeBonus";
        slotJLcsGameEvent["SELECT_BET"] = "selectBet";
        slotJLcsGameEvent["START"] = "start";
        slotJLcsGameEvent["CLICK_ITEM"] = "clickItem";
        slotJLcsGameEvent["ERROR"] = "errorReturn";
        slotJLcsGameEvent["END"] = "END";
        slotJLcsGameEvent["SHOWNEXT"] = "showNext";
        slotJLcsGameEvent["PARTICLE2D"] = "particle2d";
        slotJLcsGameEvent["UPDATEBASEBET"] = "updateBaseBet";
        return slotJLcsGameEvent;
      }({}));
      var slotJLcsProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(slotJLcsProxyMgr, _ProxyBase);
        function slotJLcsProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "slotJLCSGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolSlotJLCS.bet, MainManager.instance.getConfigManager().ProtocolSlotJLCS.info];
          _this.result = null;
          _this.curBet = 1;
          _this.freeTotalWin = 0;
          _this.orgainArrBetList = [1000, 2000, 3000, 5000, 8000, 10000, 20000, 50000, 100000, 200000, 300000, 400000, 500000, 700000, 1000000];
          _this.arrBetList = [1000, 2000, 3000, 5000, 8000, 10000, 20000, 50000, 100000, 200000, 300000, 400000, 500000, 700000, 1000000];
          return _this;
        }
        var _proto = slotJLcsProxyMgr.prototype;
        _proto.registSocketEvent = function registSocketEvent() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.wsEvents), _step; !(_step = _iterator()).done;) {
            var event = _step.value;
            MainManager.instance.getEventManager().on(event, this.recvData, this);
          }
        };
        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            MainManager.instance.getEventManager().off(event, this.recvData, this);
          }
        };
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            if (data.cmd == ConfigManager.ProtocolSlotJLCS.bet) {
              this.emit(slotJLcsGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotJLCS.info:
              {
                this.emit(slotJLcsGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotJLCS.bet:
              {
                this.result = data.Data;

                // this.result.prizeAmount = 0;
                // for (let i = 0; i < this.result.OpenNums.length; i++) {
                //     this.result.prizeAmount += this.result.OpenNums[i].prizeAmount;
                // }
                // console.log(JSON.stringify(this.result))

                this.emit(slotJLcsGameEvent.START);
                break;
              }
          }
        };
        _createClass(slotJLcsProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return slotJLcsProxyMgr;
      }(ProxyBase);
      var slotJLcsProxy = exports('default', new slotJLcsProxyMgr("slotJLcsProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotJLcsRun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotJLcsItem.ts', './slotJLcsProxy.ts', './slotJLcsDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, sp, instantiate, v3, tween, Component, slotJLcsItem, slotJLcsProxy, slotJLcsGameEvent, slotJLcsDef;
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
      sp = module.sp;
      instantiate = module.instantiate;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      slotJLcsItem = module.slotJLcsItem;
    }, function (module) {
      slotJLcsProxy = module.default;
      slotJLcsGameEvent = module.slotJLcsGameEvent;
    }, function (module) {
      slotJLcsDef = module.slotJLcsDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "31738tTQYxM4ZEv1oSexDdS", "slotJLcsRun", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CardState = {
        NORMAL: 0,
        RUNFAST: 1,
        RUNNORMAL: 2,
        RESULTFAST: 3,
        RESULTNORMAL: 4,
        END: 5,
        SHOWWIN: 6,
        SHOWNEXTWIN: 7
      };
      var slotJLcsRun = exports('slotJLcsRun', (_dec = ccclass("slotJLcsRun"), _dec2 = property(Prefab), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotJLcsRun, _Component);
        function slotJLcsRun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cardItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light3", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light4", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light5", _descriptor6, _assertThisInitialized(_this));
          _this._positionX = [-395, -195, 5, 205, 405];
          _this._positionY = [350, 175, 0, -175];
          _this._runCards = [[], [], [], [], []];
          _this._runType = "";
          _this._state = CardState.NORMAL;
          _this._moveSteps = 100;
          _this._isGetResult = false;
          _this._result = [[], [], [], [], [], []];
          _this._normalGetResult = [false, false, false, false, false];
          _this._time1 = 0.1;
          _this._time2 = 0.2;
          _this._time3 = 0.3;
          _this._time4 = 0.4;
          //_resultTime = [0.1, 0.6, 1.1, 1.6, 2.1]
          _this._resultTime = [0.3, 0.7, 1.2, 1.6, 2];
          _this._isInit = false;
          _this._isShowLight = false;
          _this._caishenList = [];
          _this._getResultNum = 0;
          return _this;
        }
        var _proto = slotJLcsRun.prototype;
        _proto.start = function start() {};
        _proto.initCard = function initCard(numArr) {
          var _this2 = this;
          numArr.map(function (item, index) {
            item.map(function (item1, index1) {
              var node = instantiate(_this2.cardItem);
              var com = node.getComponent(slotJLcsItem);
              com["cardData"] = item1;
              node.parent = _this2.node;
              node.setPosition(v3(_this2._positionX[index], _this2._positionY[index1 + 1]));
              com.initItemCard(item1);
              _this2._runCards[index].push(com);
            });
          });
        };
        _proto.run = function run(type, isShowLight, caishenList) {
          var _this3 = this;
          if (isShowLight === void 0) {
            isShowLight = false;
          }
          if (caishenList === void 0) {
            caishenList = null;
          }
          this._runType = type;
          this._isShowLight = isShowLight;
          this._caishenList = caishenList;
          this._runCards.map(function (item, index) {
            var random = Math.floor(Math.random() * 7) + 1;
            var node = instantiate(_this3.cardItem);
            var com = node.getComponent(slotJLcsItem);
            node.parent = _this3.node;
            node.setPosition(v3(_this3._positionX[index], _this3._positionY[0]));
            com.initItemCard(random);
            item.unshift(com);
            item.map(function (item1) {
              item1.getComponent(slotJLcsItem).hideWin();
            });
          });
          this.scheduleOnce(function () {
            //展示期待光效
            if (_this3._isShowLight) {
              _this3.light1.node.active = true;
              !_this3._caishenList[0] ? _this3.light2.node.active = true : "";
              !_this3._caishenList[1] ? _this3.light3.node.active = true : "";
              !_this3._caishenList[2] ? _this3.light4.node.active = true : "";
              _this3.light5.node.active = true;
              slotJLcsDef.palyAudio(slotJLcsDef.audio.NearWin);
            }
            _this3._runType == "fast" ? _this3.setState(CardState.RUNFAST) : _this3.setState(CardState.RUNNORMAL);
          }, 0.1);
        };
        _proto.runOne = function runOne(currentIndex) {
          var _this4 = this;
          this._runCards[currentIndex].map(function (item, index) {
            item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y - _this4._moveSteps, 0));
            // if (item.node.getPosition().y <= -(165 + 82)) {
            //     if (this._isGetResult && currentIndex == 4) {
            //         this.setState(CardState.RESULTNORMAL)
            //     } else {
            //         //随机重新生成卡片以及设置位置
            //         let random = Math.floor(Math.random() * 7) + 1
            //         item.node.setPosition(cc.v3(item.node.getPosition().x, item.node.getPosition().y + 165 * 4.2))
            //         item['cardData'] = random
            //         item.initItemCard(random)
            //     }
            // }
            if (item.node.getPosition().y <= -260) {
              if (_this4._isGetResult) {
                _this4.setState(CardState.RESULTNORMAL);
              } else {
                //随机重新生成卡片以及设置位置
                var cardData = Math.floor(Math.random() * 7) + 1;
                item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y + 165 * 4));
                item["cardData"] = cardData;
                item.initItemCard(cardData);
              }
            }
          });
        };
        _proto.resultOne = function resultOne(currentIndex) {
          var _this5 = this;
          if (!this._normalGetResult[currentIndex]) {
            this._moveSteps -= 10;
            if (this._moveSteps <= 50) {
              this._moveSteps = 50;
            }
            if (this._runCards[currentIndex]) {
              this._runCards[currentIndex].map(function (item, index) {
                // item.node.setPosition(cc.v3(item.node.getPosition().x, item.node.getPosition().y - this._moveSteps, 0))
                // if (item.node.getPosition().y <= -(165 + 82)) {
                //     item.node.setPosition(cc.v3(item.node.getPosition().x, item.node.getPosition().y + 165 * 4.2))
                //     if (index != 0) {
                //         item['cardData'] = this._result[currentIndex][index - 1]
                //         item['cardIndex'] = currentIndex * 3 + index - 1
                //         item.initItemCard(item['cardData'])
                //     } else {
                //         item['cardData'] = Math.floor(Math.random() * 7) + 1
                //         item.initItemCard(item['cardData'])
                //     }
                // }
                // //注：this._runCards[i]内有4个，this._result[i]内只有最终结果的3个
                // if (index == this._result[currentIndex].length - 1 && this._resultTime[currentIndex] <= 0 && this._runCards[currentIndex][3].node.getPosition().y <= -165) {
                //     this._normalGetResult[currentIndex] = true
                //     slotJLcsDef.palyAudio(slotJLcsDef.audio.Reel_Stop)
                //     this._runCards[currentIndex].map((item, index) => {
                //         cc.tween(item.node)
                //             .to(0.1, { position: cc.v3(item.node.getPosition().x, this._positionY[index] - 20) })
                //             .by(0.1, { position: cc.v3(0, 20) })
                //             .start()

                //     })

                //     if (currentIndex == 4) {
                //         this.setState(CardState.END)

                //     }
                // }

                item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y - _this5._moveSteps, 0));
                if (item.node.getPosition().y <= -260) {
                  item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y + 165 * 4));
                  if (index != 0) {
                    item["cardData"] = _this5._result[currentIndex][index - 1];
                    item["cardIndex"] = currentIndex * 3 + index - 1;
                    item.initItemCard(item["cardData"]);
                  } else {
                    item["cardData"] = Math.floor(Math.random() * 7) + 1;
                    item.initItemCard(item["cardData"]);
                  }
                }
                //注：this._runCards[i]内有4个，this._result[i]内只有最终结果的3个
                if (index == _this5._result[currentIndex].length - 1 && _this5._resultTime[currentIndex] <= 0 && _this5._runCards[currentIndex][3].node.getPosition().y <= -165) {
                  _this5._normalGetResult[currentIndex] = true;
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Reel_Stop);
                  _this5._runCards[currentIndex].map(function (item, index) {
                    tween(item.node).to(0.1, {
                      position: v3(item.node.getPosition().x, _this5._positionY[index] - 20)
                    }).by(0.1, {
                      position: v3(0, 20)
                    }).start();
                  });
                  if (currentIndex == 4) {
                    _this5.setState(CardState.END);
                  }
                }
              });
            }
          }
        };
        _proto.getResult = function getResult(result, isInit) {
          if (isInit === void 0) {
            isInit = false;
          }
          this._result = result;
          this._isGetResult = true;
          this._isInit = isInit;
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.showWin = function showWin(arr) {
          var _this6 = this;
          arr.map(function (item) {
            _this6._runCards[Math.floor(item % 5)][Math.floor(item / 5)].getComponent(slotJLcsItem).showWin();
          });
        };
        _proto.showNormal = function showNormal() {
          this._runCards.map(function (item) {
            item.map(function (item1) {
              item1.initItemCard(item1["cardData"]);
            });
          });
        };
        _proto.update = function update(dt) {
          var _this7 = this;
          switch (this._state) {
            case CardState.RUNNORMAL:
              {
                this.runOne(0);
                this.runOne(1);
                this.runOne(2);
                this.runOne(3);
                this.runOne(4);
                break;
              }
            case CardState.RESULTNORMAL:
              {
                this.resultOne(0);
                this.resultOne(1);
                this.resultOne(2);
                this.resultOne(3);
                this.resultOne(4);
                this._resultTime[0] > 0 ? this._resultTime[0] -= dt : "";
                this._resultTime[1] > 0 ? this._resultTime[1] -= dt : "";
                this._resultTime[2] > 0 ? this._resultTime[2] -= dt : "";
                this._resultTime[3] > 0 ? this._resultTime[3] -= dt : "";
                this._resultTime[4] > 0 ? this._resultTime[4] -= dt : "";
                break;
              }
            case CardState.RUNFAST:
              {
                this._runCards.map(function (item, index) {
                  item.map(function (item1, index1) {
                    item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this7._moveSteps, 0));
                    if (item1.node.getPosition().y <= -260) {
                      if (_this7._isGetResult) {
                        _this7.setState(CardState.RESULTFAST);
                      } else {
                        //随机重新生成卡片以及设置位置
                        var cardData = Math.floor(Math.random() * 7) + 1;
                        item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y + 165 * 4));
                        item1["cardData"] = cardData;
                        item1.initItemCard(cardData);
                      }
                    }
                  });
                });
                break;
              }
            case CardState.RESULTFAST:
              {
                this._runCards.map(function (item, index) {
                  item.map(function (item1, index1) {
                    if (item1.node.getPosition().y <= -260) {
                      item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y + 165 * 4));
                      if (index1 != 0) {
                        _this7._getResultNum += 1;
                        item1["cardData"] = _this7._result[index][index1 - 1];
                        item1["cardIndex"] = index * 3 + index1 - 1;
                        item1.initItemCard(_this7._result[index][index1 - 1]);
                      } else {
                        var random = Math.floor(Math.random() * 7) + 1;
                        item1["cardData"] = random;
                        item1.initItemCard(random);
                      }
                    } else {
                      item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this7._moveSteps, 0));
                    }
                    if (index == 4 && index1 == 3 && item1.node.getPosition().y < -165 && _this7._getResultNum > 10) {
                      _this7.setState(CardState.END);
                    }
                  });
                });
                break;
              }
            case CardState.END:
              {
                this._moveSteps = 100;
                this._normalGetResult = [false, false, false, false, false];
                this._isGetResult = false;
                this._time1 = 0.1;
                this._time2 = 0.2;
                this._time3 = 0.3;
                this._time4 = 0.4;
                this._resultTime = [0.3, 0.7, 1.2, 1.6, 2];
                this._getResultNum = 0;
                this.setState(CardState.NORMAL);
                if (this._runType == "fast") {
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Reel_Stop);
                  this._runCards.map(function (item) {
                    //删除每一竖第一个
                    //this.node.removeChild(item[0].node);
                    item[0].node.removeFromParent();
                    item.splice(0, 1);
                  });
                  this._runCards.map(function (item, index) {
                    item.map(function (item1, index1) {
                      tween(item1.node).to(0.05, {
                        position: v3(item1.node.getPosition().x, _this7._positionY[index1 + 1], 0)
                      }).start();
                    });
                  });
                  //展示期待光效
                  if (this._isShowLight) {
                    this.light1.node.active = false;
                    this.light2.node.active = false;
                    this.light3.node.active = false;
                    this.light4.node.active = false;
                    this.light5.node.active = false;
                  }
                } else {
                  //删除每一竖第一个
                  this._runCards.map(function (item, index) {
                    //this.node.removeChild(item[0].node);
                    item[0].node.removeFromParent();
                    item.splice(0, 1);
                  });
                }
                slotJLcsProxy.emit(slotJLcsGameEvent.END, this._isInit);
                break;
              }
          }
        };
        return slotJLcsRun;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "light1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "light2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "light3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "light4", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "light5", [_dec7], {
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

System.register("chunks:///_virtual/slotJLCSScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './ViewManager.ts', './MainManager.ts', './NetManager.ts', './slotJLcsProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, Common, ViewManager, MainManager, NetManager, slotJLcsProxy;
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
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      slotJLcsProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "afea1H9A0pF9Kzg7dNaXBBf", "slotJLCSScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      //import slotApotheosisProxy from "./slotApotheosisProxy";
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotJLCSScene = exports('slotJLCSScene', (_dec = ccclass("slotJLCSScene"), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotJLCSScene, _Component);
        function slotJLCSScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_room", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = slotJLCSScene.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.start = function start() {
          var node = instantiate(this.pre_room);
          this.node.addChild(node);
          // if (!sys.isMobile) {
          //     node.setScale(v3(750 / 1334, 750 / 1334, 1));
          // } else {
          //     node.angle = 90;
          // }
        };

        _proto.init = function init() {
          // FortuneElephantDef.palyMusic(FortuneElephantDef.audio.BG);
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
          slotJLcsProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          slotJLcsProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        return slotJLCSScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_room", [_dec2], {
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

System.register("chunks:///_virtual/slotJLcsSetBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotJLcsProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, instantiate, Label, Toggle, UIOpacity, tween, Component, slotJLcsProxy, slotJLcsGameEvent;
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
      v3 = module.v3;
      instantiate = module.instantiate;
      Label = module.Label;
      Toggle = module.Toggle;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      slotJLcsProxy = module.default;
      slotJLcsGameEvent = module.slotJLcsGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "08097anjRNJdq3wM1Udx+8G", "slotJLcsSetBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var slotJLcsSetBase = exports('default', (_dec = ccclass("slotJLcsSetBase"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotJLcsSetBase, _Component);
        function slotJLcsSetBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "toggleTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ToggleContainer", _descriptor2, _assertThisInitialized(_this));
          _this.firstSet = true;
          return _this;
        }
        var _proto = slotJLcsSetBase.prototype;
        _proto.onLoad = function onLoad() {
          this.node.scale = v3(this.node.scale.x, 0, this.node.scale.z);
          for (var i = 0; i < 15; i++) {
            var toggleTemp = this.ToggleContainer.getChildByName("" + i);
            if (!toggleTemp) {
              toggleTemp = instantiate(this.toggleTemp);
              toggleTemp.name = "" + i;
              this.ToggleContainer.addChild(toggleTemp);
            }
            var base = slotJLcsProxy.arrBetList[i] / 1000;
            toggleTemp.getChildByName("Label_score").getComponent(Label).string = base + "K";
          }
          var mask = this.node.getChildByName("mask");
          mask.on(Node.EventType.TOUCH_END, this.hide, this);
        };
        _proto.start = function start() {
          var baseBetIndex = this.getBaseIndex();
          var curToggle = this.ToggleContainer.getChildByName("" + baseBetIndex);
          curToggle.getComponent(Toggle).isChecked = true;
          this.firstSet = false;
        };
        _proto.onEnable = function onEnable() {
          this.node.scale = v3(this.node.scale.x, 0, this.node.scale.z);
          this.node.getComponent(UIOpacity).opacity = 0;
          tween(this.node.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          tween(this.node).to(0.1, {
            scale: v3(this.node.scale.x, 1.3, this.node.scale.z)
          }, {
            easing: "quadOut"
          }).to(0.05, {
            scale: v3(this.node.scale.x, 1.25, this.node.scale.z)
          }, {
            easing: "quadIn"
          }).start();
        };
        _proto.hide = function hide() {
          var _this2 = this;
          slotJLcsProxy.emit(slotJLcsGameEvent.UPDATEBASEBET);
          tween(this.node.getComponent(UIOpacity)).to(0.05, {
            opacity: 0
          }).start();
          tween(this.node).to(0.05, {
            scale: v3(this.node.scale.x, 1.3, this.node.scale.z)
          }, {
            easing: "quadOut"
          }).to(0.1, {
            scale: v3(this.node.scale.x, 0, this.node.scale.z)
          }, {
            easing: "quadIn"
          }).call(function () {
            _this2.node.active = false;
          }).start();
        };
        _proto.getBaseIndex = function getBaseIndex() {
          for (var index = 0; index < slotJLcsProxy.arrBetList.length; index++) {
            if (Math.floor(slotJLcsProxy.arrBetList[index] / 1000) == slotJLcsProxy.curBet) {
              return index;
            }
          }
          return 0;
        };
        _proto.onToggleClick = function onToggleClick(toggle) {
          if (this.firstSet) {
            return;
          }
          var iIndex = parseInt(toggle.node.name);
          gts.Debug.Log("==baseScore==" + slotJLcsProxy.arrBetList[iIndex]);
          slotJLcsProxy.curBet = slotJLcsProxy.arrBetList[iIndex] / 1000;
          this.hide();
        };
        return slotJLcsSetBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleTemp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ToggleContainer", [_dec3], {
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

System.register("chunks:///_virtual/slotJLcsUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c9847wyu/dGdZseL16yz4aY", "slotJLcsUtils", undefined);
      var numberFormat = exports('numberFormat', function numberFormat(num, digits) {
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
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotJLcsView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './ViewManager.ts', './GUtil.ts', './DataManager.ts', './slotJLcsProxy.ts', './slotJLcsUtils.ts', './ScrollNumLabel.ts', './NetManager.ts', './MainManager.ts', './I18n.ts', './slotJLcsRun.ts', './slotJLcsNo.ts', './slotJLcsItem.ts', './slotJLcsDef.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _extends, cclegacy, _decorator, Prefab, sp, SpriteFrame, Node, Label, ParticleSystem2D, tween, Vec3, UITransform, v3, sys, UIOpacity, instantiate, Sprite, Component, Common, ViewManager, GUtil, DataManager, UserKey, slotJLcsProxy, slotJLcsGameEvent, numberFormat, ScrollNumLabel, NetManager, MainManager, i18n, slotJLcsRun, slotJLcsNo, slotJLcsItem, slotJLcsDef, AudioManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Label = module.Label;
      ParticleSystem2D = module.ParticleSystem2D;
      tween = module.tween;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      v3 = module.v3;
      sys = module.sys;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      slotJLcsProxy = module.default;
      slotJLcsGameEvent = module.slotJLcsGameEvent;
    }, function (module) {
      numberFormat = module.numberFormat;
    }, function (module) {
      ScrollNumLabel = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      slotJLcsRun = module.slotJLcsRun;
    }, function (module) {
      slotJLcsNo = module.slotJLcsNo;
    }, function (module) {
      slotJLcsItem = module.slotJLcsItem;
    }, function (module) {
      slotJLcsDef = module.slotJLcsDef;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52;
      cclegacy._RF.push({}, "f6438wpe75Du6NcVB4grPBH", "slotJLcsView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var RunState = {
        NORMAL: 0,
        START: 1,
        RUNNING: 2,
        STOP: 3,
        SHOWWIN: 4,
        BIGWIN: 5,
        FREEWIN: 6,
        SHOWNEXT: 7,
        FREEADD: 8,
        WAIT: 9
      };
      var GETDATA_TIME = 0.5;
      var BIGWIN1 = 4;
      var BIGWIN2 = 8;
      var BIGWIN3 = 12;
      var slotJLcsView = exports('slotJLcsView', (_dec = ccclass("slotJLcsView"), _dec2 = property(Prefab), _dec3 = property(sp.Skeleton), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(sp.Skeleton), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(sp.Skeleton), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(sp.Skeleton), _dec22 = property(sp.Skeleton), _dec23 = property(Node), _dec24 = property(sp.Skeleton), _dec25 = property(Node), _dec26 = property(sp.Skeleton), _dec27 = property(sp.Skeleton), _dec28 = property(Label), _dec29 = property(Label), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(sp.Skeleton), _dec36 = property(Node), _dec37 = property(Label), _dec38 = property(ScrollNumLabel), _dec39 = property(Label), _dec40 = property(Node), _dec41 = property(ScrollNumLabel), _dec42 = property(sp.Skeleton), _dec43 = property(Prefab), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(sp.Skeleton), _dec48 = property(ScrollNumLabel), _dec49 = property(Node), _dec50 = property(Node), _dec51 = property(ParticleSystem2D), _dec52 = property(sp.Skeleton), _dec53 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotJLcsView, _Component);
        function slotJLcsView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cardItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "caishen", _descriptor2, _assertThisInitialized(_this));
          //右侧财神
          _initializerDefineProperty(_this, "notice_frames", _descriptor3, _assertThisInitialized(_this));
          //随机公告
          _initializerDefineProperty(_this, "bet_icon", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_content", _descriptor5, _assertThisInitialized(_this));
          //公告位置父节点
          _initializerDefineProperty(_this, "notice_title", _descriptor6, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "menu_more", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "menu_setBet", _descriptor8, _assertThisInitialized(_this));
          //修改金额按钮
          _initializerDefineProperty(_this, "menu_setAuto_Skeleton", _descriptor9, _assertThisInitialized(_this));
          //修改自动模式按钮
          _initializerDefineProperty(_this, "trun_start", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trun_start_mask", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_rule", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_rule_btn", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_btn", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_btn_on", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_btn_off", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_btn_sprite", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_select", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_box", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_box_left", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_box_right", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_box_numBox", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_box_Btn", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_box_Cancel", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_box_leftBtn", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_box_rightBtn", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_box_leftNum", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ex_box_rightNum", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "caishen_box", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "caishen_odd_box", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "caishen_odd", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "caishen_top_odd_box", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "caishen_top_odd_spine", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "caishen_title", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor38, _assertThisInitialized(_this));
          //中奖金额
          _initializerDefineProperty(_this, "win_box", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win_number", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win_spine", _descriptor41, _assertThisInitialized(_this));
          //中奖线相关
          _initializerDefineProperty(_this, "noItem", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noItemParent", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noLineParent", _descriptor44, _assertThisInitialized(_this));
          //大奖
          _initializerDefineProperty(_this, "big_win", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win_spine", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win_cash", _descriptor47, _assertThisInitialized(_this));
          //元宝
          _initializerDefineProperty(_this, "yuanbao_box", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yuanbao", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yuanbao_autm", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_light", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yuanbao_caishen", _descriptor52, _assertThisInitialized(_this));
          _this._bet = 1000;
          _this._lock = false;
          _this._isAuto = false;
          _this._state = RunState.NORMAL;
          _this._runTime = 0;
          _this._runDelay = 0.1;
          _this._current_result = null;
          _this._current_index = 0;
          _this._errCount = 0;
          _this._noticeDelay = 1;
          _this._noticeIndex = 0;
          _this._exSelectShow = false;
          //左侧ex选择是否打开
          _this._isEx = false;
          //左侧按钮是否打开ex的on状态
          _this._exBoxSelect = "";
          //ex弹出框选择
          _this._exBoxInputNumIndex = 0;
          //ex弹出框输入的数字索引
          _this._showLineList = [];
          _this._caishenList = [{
            position: null,
            odd: null
          }, {
            position: null,
            odd: null
          }, {
            position: null,
            odd: null
          }];
          //只会出现在2，3，4轴
          _this._caishenShow = [false, false, false];
          //2，3，4轴是否已经展示财神
          _this._positionX = [-195, 5, 205];
          _this._positionY = [175, 0, -175];
          _this._totalCash = 0;
          _this._isAutoNotBet = false;
          _this._isEndBigWin = false;
          _this._endBigTime = 0;
          _this._audioId = null;
          _this._caishenTitleTime = 10;
          _this._showOneLineBtn = false;
          _this._showOneLineIndex = 0;
          _this._showOneLineTimer = null;
          _this.isGetResult = false;
          return _this;
        }
        var _proto = slotJLcsView.prototype;
        //5 10 40倍 大奖
        _proto.start = function start() {
          var _this2 = this;
          slotJLcsProxy.curBet = 1;
          slotJLcsDef.palyMusic(slotJLcsDef.audio.MG_BGM);
          this.menu_more.getChildByName("mask").on(Node.EventType.TOUCH_END, function () {
            _this2.menu_more.active = !_this2.menu_more.active;
          });
          this.trun_start.on(Node.EventType.TOUCH_END, function () {
            slotJLcsDef.palyAudio(slotJLcsDef.audio.Spin);
            _this2.trun_start_mask.active = true;
            tween(_this2.trun_start).to(0.15, {
              scale: new Vec3(1.1, 1.1, 1)
            }).to(0.15, {
              scale: new Vec3(1, 1, 1)
            }).call(function () {
              _this2.trun_start_mask.active = false;
              _this2.preStart();
            }).start();
          });

          //ex弹出框确定按钮
          this.ex_box_Btn.node.on(Node.EventType.TOUCH_END, function () {
            if (_this2._exBoxSelect) {
              slotJLcsDef.palyAudio(slotJLcsDef.audio.Extra_Bet_On);
              tween(_this2.ex_box_Btn.node).to(0.15, {
                scale: new Vec3(1.1, 1.1, 1)
              }).to(0.15, {
                scale: new Vec3(1, 1, 1)
              }).call(function () {
                _this2.hideExBox(true);
              }).start();
            }
          });

          //ex弹出框取消按钮
          this.ex_box_Cancel.on(Node.EventType.TOUCH_END, function () {
            tween(_this2.ex_box_Cancel).to(0.15, {
              scale: new Vec3(1.1, 1.1, 1)
            }).to(0.15, {
              scale: new Vec3(1, 1, 1)
            }).call(function () {
              _this2.hideExBox(false);
            }).start();
          });

          //ex选择框显示隐藏
          this.ex_btn.node.on(Node.EventType.TOUCH_END, function () {
            if (_this2._exSelectShow) {
              _this2.showOrHideExSelect("hide");
            } else {
              _this2.showOrHideExSelect("show");
            }
          });
          this.ex_btn_sprite.on(Node.EventType.TOUCH_END, function () {
            if (_this2._exSelectShow) {
              _this2.showOrHideExSelect("hide");
            } else {
              _this2.showOrHideExSelect("show");
            }
          });

          //ex弹出框选择左边
          this.ex_box_leftBtn.node.on(Node.EventType.TOUCH_END, function () {
            _this2.clickEx("left");
          });

          //ex弹出框选择右边
          this.ex_box_rightBtn.node.on(Node.EventType.TOUCH_END, function () {
            _this2.clickEx("right");
          });

          //ex选择框选择off
          this.ex_btn_on.on(Node.EventType.TOUCH_END, function () {
            slotJLcsDef.palyAudio(slotJLcsDef.audio.Extra_UI_On);
            _this2.exOnOrOff();
          });

          //ex选择框选择on
          this.ex_btn_off.on(Node.EventType.TOUCH_END, function () {
            slotJLcsDef.palyAudio(slotJLcsDef.audio.Extra_UI_On);
            _this2.exOnOrOff();
          });
          this.ex_btn_sprite.active = true;
          this.ex_btn.node.active = false;

          //this.hideExBox()

          this.initEvent();
          this.updateGoldData();

          //接口
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotJLCS.info, {});

          // this._showLineList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
          // if (this._showLineList && this._showLineList.length > 0) {
          //     this._showLineList.map(item => {
          //         let node = cc.instantiate(this.noItem)
          //         let com = node.getComponent(slotJLcsNo)
          //         node.parent = this.noItemParent
          //         com.rendeNo(item)
          //         this.noLineParent.children[item - 1].active = true
          //     })
          // }
        };

        _proto.update = function update(dt) {
          this.updateNotice(dt);
          this.changeBigWin();

          //点击大奖后触发
          if (this._endBigTime > 0) {
            this._endBigTime -= dt;
            this._isEndBigWin = true;
            if (this._audioId) {
              AudioManager.instance.stopSound(this._audioId);
              this._audioId = null;
              slotJLcsDef.palyAudio(slotJLcsDef.audio.Big_Win_End);
            }
            if (this._endBigTime <= 0 && this.big_win.active) {
              this._endBigTime = 0;
              this.hideBigWin();
            }
          }
          switch (this._state) {
            case RunState.START:
              {
                this.changeState(RunState.RUNNING);
                // this._runTime -= dt;
                // if (this._runTime <= 0) {
                //     this.changeState(RunState.RUNNING);
                //     if (slotJLcsProxy.result) {
                //         this.calResult()
                //         this.changeState(RunState.RUNNING);
                //     } else {
                //         this._runTime = GETDATA_TIME;
                //         this._errCount++;
                //         if (this._errCount > 20) {
                //             //this.sendBet();
                //             if (this._lock) {
                //                 this._errCount = 0
                //                 this.changeState(RunState.NORMAL);
                //                 NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
                //                 this.scheduleOnce(() => {
                //                     this.updateGoldData()
                //                 }, 1)

                //                 this._lock = false
                //             }
                //         }
                //     }
                // }
                break;
              }
            case RunState.RUNNING:
              {
                if (slotJLcsProxy.result && !this.isGetResult) {
                  this.clickRunning();
                }
                break;
              }
            case RunState.STOP:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this._runTime = GETDATA_TIME;
                  this.changeState(RunState.NORMAL);
                }
                break;
              }
            case RunState.NORMAL:
              {
                if (this._isAuto && !this._isAutoNotBet) {
                  this.preStart();
                }
                break;
              }
          }
        };
        _proto.changeState = function changeState(state) {
          this._state = state;
          switch (state) {
            case RunState.NORMAL:
              {
                break;
              }
            case RunState.START:
              {
                this.preStart();
                break;
              }
            case RunState.RUNNING:
              {
                this.clickRun();
                break;
              }
            case RunState.STOP:
              {
                this.clickStop();
                break;
              }
          }
        };
        _proto.preStart = function preStart() {
          var _this3 = this;
          console.log("_lock", this._lock, "开始");
          if (this._lock) return;
          if (this._exSelectShow) {
            this._exSelectShow = false;
            this.ex_select.getChildByName("title").active = false;
            this.ex_select.getChildByName("on").active = false;
            this.ex_select.getChildByName("off").active = false;
            tween(this.ex_select.getComponent(UITransform)).to(0.05, {
              width: 60
            }).call(function () {
              _this3.ex_select.active = false;
            }).start();
            tween(this.ex_select).to(0.05, {
              position: v3(-60, -4)
            }).start();
            tween(this.ex_rule_btn).to(0.05, {
              position: v3(75, -4, 0)
            }).start();
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._bet && !this._isAuto) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            return;
          }
          if (gold < this._bet && this._isAuto && !this._isAutoNotBet) {
            this.clickChangeAuto();
            this._isAutoNotBet = true;
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            return;
          }
          if (!this._isAutoNotBet) {
            this._lock = true;
            slotJLcsProxy.result = null;
            this._state = RunState.START;
            this._runTime = GETDATA_TIME;
            this.updateGoldData(-this._bet);
            this.sendBet();
          }
        };
        _proto.clickRun = function clickRun() {
          this.isGetResult = false;
          this.txt_win.reset();
          this.hideLine();
          this.run.getComponent(slotJLcsRun).showNormal();
          this.run.getChildByName("mask").getComponent(UITransform).priority = 1;
          this.run.getChildByName("mask").active = false;
          if (this.caishen_top_odd_box.active) {
            this.caishen_top_odd_box.active = false;
            this.caishen_top_odd_box.getChildByName("font").getComponent(Label).string = "";
          }
          this.caishen_box.removeAllChildren();
          this.caishen_odd_box.removeAllChildren();
          this.run.getComponent(slotJLcsRun).run(this._runDelay == 0 ? "fast" : "normal");
        };
        _proto.clickRunning = function clickRunning() {
          var _this4 = this;
          this.isGetResult = true;
          this.calResult();
          if (this._runDelay == 0) {
            this.scheduleOnce(function () {
              _this4.run.getComponent(slotJLcsRun).getResult(_this4._current_result._result, true);
            }, 0.1);
          } else {
            this.scheduleOnce(function () {
              _this4.run.getComponent(slotJLcsRun).getResult(_this4._current_result._result, true);
            }, 0.5);
          }
        };
        _proto.clickStop = function clickStop() {
          var _this5 = this;
          if (slotJLcsProxy.result[this._current_index]) {
            //是否有中奖的财神
            this.showCaishen(function () {
              _this5._showLineList = [];
              //是否有中奖线
              if (slotJLcsProxy.result[_this5._current_index].RewardLines) {
                for (var i in slotJLcsProxy.result[_this5._current_index].RewardLines) {
                  _this5._showLineList.push(parseInt(i) + 1);
                }
                if (_this5._showLineList.length > 0) {
                  _this5.showLine();
                }
              }
              //是否有中奖金额
              if (slotJLcsProxy.result[_this5._current_index].RewardMoney > 0) {
                _this5.run.getChildByName("mask").getComponent(UITransform).priority = 20;
                _this5.run.getChildByName("mask").active = true;
                _this5.run.getComponent(slotJLcsRun).showWin(slotJLcsProxy.result[_this5._current_index].RewardPos);
                _this5.win_box.getComponent(UIOpacity).opacity = 100;
                _this5.win_box.active = true;
                _this5.win_spine.node.active = true;
                _this5.win_spine.setAnimation(0, "intro", false);
                _this5.win_spine.addAnimation(0, "idle", true);
                tween(_this5.win_box.getComponent(UIOpacity)).to(0.2, {
                  opacity: 255
                }).start();
                tween(_this5.win_box).to(0.5, {
                  scale: v3(1.2, 1.2, 1)
                }).start();
                _this5._totalCash = slotJLcsProxy.result[_this5._current_index].RewardMoney;
                var odd = _this5._totalCash / _this5._bet;
                if (odd < 5) {
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Small_Win01);
                } else if (odd >= 5 && odd < 10) {
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Small_Win02);
                } else {
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Small_Win03);
                }
                _this5.win_number.string = Common.numFormat(slotJLcsProxy.result[_this5._current_index].RewardMoney + "");
                _this5.scheduleOnce(function () {
                  _this5.win_box.active = false;
                  _this5.win_box.setScale(v3(1, 1, 1));
                  _this5.win_number.reset();
                  tween(_this5.txt_win.node).to(0.3, {
                    scale: v3(1.2, 1.2, 1)
                  }).delay(0.4).to(0.3, {
                    scale: v3(1, 1, 1)
                  }).start();
                  _this5.txt_win.string = Common.numFormat(_this5._totalCash + "");
                  _this5.showNext();
                }, 2);
              } else {
                _this5.showNext();
              }
            });
          } else {
            this.allEnd();
          }
        };
        _proto.showNext = function showNext() {
          var _this6 = this;
          if (slotJLcsProxy.result[this._current_index + 1]) {
            this._current_index += 1;
            this._current_result = slotJLcsProxy.result[this._current_index];
            this.hideLine();
            this.run.getComponent(slotJLcsRun).showNormal();
            this.run.getChildByName("mask").getComponent(UITransform).priority = 1;
            this.run.getChildByName("mask").active = false;
            this.calResult();
            //多次转动一定是快速转动
            var caishenNum = 0;
            this._caishenShow.map(function (item) {
              item && caishenNum++;
            });
            this.run.getComponent(slotJLcsRun).run("fast", caishenNum >= 2 ? true : false, this._caishenShow);
            this.scheduleOnce(function () {
              _this6.run.getComponent(slotJLcsRun).getResult(_this6._current_result._result);
            }, caishenNum >= 2 ? 1 : 0.3);
            this.scheduleOnce(function () {
              slotJLcsDef.palyAudio(slotJLcsDef.audio.Small_Win03);
              //是否有中奖财神
              _this6.showCaishen(function () {
                //是否有中奖线
                _this6._showLineList = [];
                if (slotJLcsProxy.result[_this6._current_index].RewardLines) {
                  for (var i in slotJLcsProxy.result[_this6._current_index].RewardLines) {
                    _this6._showLineList.push(parseInt(i) + 1);
                  }
                  if (_this6._showLineList.length > 0) {
                    _this6.showLine();
                  }
                }
                //是否有中奖金额
                if (slotJLcsProxy.result[_this6._current_index].RewardMoney > 0) {
                  _this6.run.getChildByName("mask").getComponent(UITransform).priority = 20;
                  _this6.run.getChildByName("mask").active = true;
                  _this6.run.getComponent(slotJLcsRun).showWin(slotJLcsProxy.result[_this6._current_index].RewardPos);
                  _this6.win_box.getComponent(UIOpacity).opacity = 100;
                  _this6.win_box.active = true;
                  _this6.win_spine.node.active = true;
                  _this6.win_spine.setAnimation(0, "intro", false);
                  _this6.win_spine.addAnimation(0, "idle", true);
                  tween(_this6.win_box.getComponent(UIOpacity)).to(0.2, {
                    opacity: 255
                  }).start();
                  tween(_this6.win_box).to(0.5, {
                    scale: v3(1.2, 1.2, 1)
                  }).start();
                  _this6.win_number.string = Common.numFormat(slotJLcsProxy.result[_this6._current_index].RewardMoney + "");
                  _this6.scheduleOnce(function () {
                    _this6.win_box.active = false;
                    _this6.win_box.setScale(v3(1, 1, 1));
                    _this6.win_number.reset();
                    tween(_this6.txt_win.node).to(0.3, {
                      scale: v3(1.2, 1.2, 1)
                    }).delay(0.4).to(0.3, {
                      scale: v3(1, 1, 1)
                    }).start();
                    _this6._totalCash += slotJLcsProxy.result[_this6._current_index].RewardMoney;
                    _this6.txt_win.string = Common.numFormat(_this6._totalCash + "");
                    _this6.showNext();
                  }, 2);
                } else {
                  _this6.scheduleOnce(function () {
                    _this6.showNext();
                  }, 0.5);
                }
              });
            }, this._runDelay == 0 ? 1.5 : 2.5);
          } else {
            this.allEnd();
          }
        };
        _proto.showCaishen = function showCaishen(call) {
          var _this7 = this;
          var showIndex = [];
          this._caishenList.map(function (item, index) {
            if (item.odd && item.odd != 0 && !_this7._caishenShow[index]) {
              showIndex.push(_extends({}, item, {
                index: index
              }));
              _this7._caishenShow[index] = true;
            }
          });
          if (showIndex.length > 0) {
            slotJLcsDef.palyAudio(slotJLcsDef.audio.Caishen_01);
            //提前计算倍数，播放音乐用
            var totalOdd = 0;
            if (this.caishen_top_odd_box.active) {
              totalOdd = parseInt(this.caishen_top_odd_box.getChildByName("font").getComponent(Label).string.replace("x", ""));
            }
            showIndex.map(function (item, index) {
              var node = instantiate(_this7.cardItem);
              var com = node.getComponent(slotJLcsItem);
              node.parent = _this7.caishen_box;
              node.setPosition(v3(_this7._positionX[item.index], _this7._positionY[item.position]));
              com.showWild(item.position, index);
              totalOdd += item.odd;
            });
            this.scheduleOnce(function () {
              _this7.scheduleOnce(function () {
                //倍数效果动画一共1.5s 下面showIndex计算
                if (totalOdd < 3) {
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple_Add1);
                } else if (totalOdd >= 3 && totalOdd < 10) {
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple_Add2);
                } else {
                  slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple_Add3);
                }
              }, 1.4);
              //出现倍数
              slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple);
              showIndex.map(function (item) {
                var node = instantiate(_this7.caishen_odd);
                node.getComponent(Label).string = "x" + item.odd;
                node.parent = _this7.caishen_odd_box;
                node.active = true;
                node.setPosition(v3(_this7._positionX[item.index], 0));
                tween(node).to(0.2, {
                  scale: v3(2, 2, 1)
                }).to(0.2, {
                  scale: v3(1.2, 1.2, 1)
                }).to(0.7, {
                  position: v3(0, 300)
                }).call(function () {
                  node.destroy();
                  if (!_this7.caishen_top_odd_box.active) {
                    _this7.caishen_top_odd_box.getChildByName("font").getComponent(Label).string = "x" + item.odd;
                    _this7.caishen_top_odd_box.active = true;
                    _this7.caishen_top_odd_spine.node.active = true;
                    tween(_this7.caishen_top_odd_box.getChildByName("font")).to(0.1, {
                      scale: v3(2, 2, 1)
                    }).to(0.2, {
                      scale: v3(1, 1, 1)
                    }).call(function () {
                      //this.caishen_top_odd_box.getChildByName('font').getComponent(cc.Label).string = 'x' + item.odd
                      _this7.caishen_top_odd_spine.node.active = false;
                      //node.destroy()
                    }).start();
                  } else {
                    _this7.caishen_top_odd_spine.node.active = true;
                    _this7.caishen_top_odd_box.getChildByName("font").getComponent(Label).string = "x" + (parseInt(_this7.caishen_top_odd_box.getChildByName("font").getComponent(Label).string.replace("x", "")) + item.odd);
                    tween(_this7.caishen_top_odd_box.getChildByName("font")).to(0.1, {
                      scale: v3(2, 2, 1)
                    }).to(0.3, {
                      scale: v3(1, 1, 1)
                    }).call(function () {
                      //this.caishen_top_odd_box.getChildByName('font').getComponent(cc.Label).string = 'x' + (parseInt(this.caishen_top_odd_box.getChildByName('font').getComponent(cc.Label).string.replace('x', '')) + item.odd)
                      _this7.caishen_top_odd_spine.node.active = false;
                      //node.destroy()
                    }).start();
                  }
                }).start();
              });
            }, 1.2);
            this.scheduleOnce(function () {
              //判断是否有扔元宝
              if (slotJLcsProxy.result[_this7._current_index].ThrowWildSym != 0) {
                var caishenNum = 0,
                  odd = 0;
                _this7._caishenShow.map(function (item) {
                  if (item) {
                    caishenNum += 1;
                  }
                });
                if (slotJLcsProxy.result[_this7._current_index].ThrowWildSym == 8) {
                  odd = 1;
                } else if (slotJLcsProxy.result[_this7._current_index].ThrowWildSym == 9) {
                  odd = 2;
                } else if (slotJLcsProxy.result[_this7._current_index].ThrowWildSym == 10) {
                  odd = 3;
                } else if (slotJLcsProxy.result[_this7._current_index].ThrowWildSym == 11) {
                  odd = 5;
                } else if (slotJLcsProxy.result[_this7._current_index].ThrowWildSym == 12) {
                  odd = 10;
                }
                _this7.moveYuanbao(caishenNum == 2 ? true : false, slotJLcsProxy.result[_this7._current_index].ThrowLine, odd, call);
              } else {
                call && call();
              }
            }, 3.2);
          } else {
            //判断是否有扔元宝
            if (slotJLcsProxy.result[this._current_index].ThrowWildSym != 0) {
              var caishenNum = 0,
                odd = 0;
              this._caishenShow.map(function (item) {
                if (item) {
                  caishenNum += 1;
                }
              });
              if (slotJLcsProxy.result[this._current_index].ThrowWildSym == 8) {
                odd = 1;
              } else if (slotJLcsProxy.result[this._current_index].ThrowWildSym == 9) {
                odd = 2;
              } else if (slotJLcsProxy.result[this._current_index].ThrowWildSym == 10) {
                odd = 3;
              } else if (slotJLcsProxy.result[this._current_index].ThrowWildSym == 11) {
                odd = 5;
              } else if (slotJLcsProxy.result[this._current_index].ThrowWildSym == 12) {
                odd = 10;
              }
              this.moveYuanbao(caishenNum == 2 ? true : false, slotJLcsProxy.result[this._current_index].ThrowLine, odd, call);
            } else {
              call && call();
            }
          }
        }
        //元宝移动效果
        ;

        _proto.moveYuanbao = function moveYuanbao(isMove, postion, odd, call) {
          var _this8 = this;
          if (isMove === void 0) {
            isMove = false;
          }
          if (postion === void 0) {
            postion = null;
          }
          if (odd === void 0) {
            odd = 0;
          }
          //元宝移动位置 -310 -105 105
          //财神位置 -290 -90 90
          this.big_light.node.active = true;
          this.big_light.setAnimation(0, "MG_WildHit_Ready", false);
          slotJLcsDef.palyAudio(slotJLcsDef.audio.Caishen_02);
          this.big_light.setCompleteListener(function () {
            _this8.big_light.setCompleteListener(null);
            _this8.big_light.node.active = false;
          });
          this.scheduleOnce(function () {
            if (isMove) {
              _this8.caishen.setAnimation(0, "MG_WildHit", false);
              _this8.caishen.addAnimation(0, "MG_Idle", true);
              _this8.scheduleOnce(function () {
                var postionX = postion == 1 ? -310 : postion == 2 ? -105 : 105;
                _this8.yuanbao.active = true;
                _this8.yuanbao_autm.node.active = true;
                slotJLcsDef.palyAudio(slotJLcsDef.audio.Caishen_03);
                tween(_this8.yuanbao).to(0.5, {
                  position: v3(postionX, 0, 0)
                }).start();
                tween(_this8.yuanbao).to(0.25, {
                  scale: v3(1.5, 1.5, 0)
                }).to(0.25, {
                  scale: v3(1, 1, 0)
                }).start();
                tween(_this8.yuanbao).to(0.5, {
                  angle: 360
                }).start();
                _this8.scheduleOnce(function () {
                  tween(_this8.yuanbao_autm.node).to(0.4, {
                    position: v3(postionX, 0)
                  }).call(function () {
                    _this8.yuanbao_autm.node.active = false;
                    _this8.yuanbao.active = false;
                    _this8.yuanbao.setPosition(v3(560, 220, 0));
                    _this8.yuanbao_autm.node.setPosition(v3(560, 220, 0));
                    var node = instantiate(_this8.cardItem);
                    var com = node.getComponent(slotJLcsItem);
                    node.parent = _this8.caishen_box;
                    node.setPosition(v3(_this8._positionX[postion - 1], 0));
                    _this8._caishenShow[postion - 1] = true;
                    com.showWild(1, null);
                    slotJLcsDef.palyAudio(slotJLcsDef.audio.Caishen_01);
                    var totalOdd = 0;
                    if (_this8.caishen_top_odd_box.active) {
                      totalOdd = parseInt(_this8.caishen_top_odd_box.getChildByName("font").getComponent(Label).string.replace("x", ""));
                    }
                    totalOdd += odd;
                    _this8.scheduleOnce(function () {
                      _this8.scheduleOnce(function () {
                        //倍数效果动画一共1.2s
                        if (totalOdd < 3) {
                          slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple_Add1);
                        } else if (totalOdd >= 3 && totalOdd < 10) {
                          slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple_Add2);
                        } else {
                          slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple_Add3);
                        }
                      }, 1.4);
                      //出现倍数
                      slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple);
                      var node = instantiate(_this8.caishen_odd);
                      node.getComponent(Label).string = "x" + odd;
                      node.parent = _this8.caishen_odd_box;
                      node.active = true;
                      node.setPosition(v3(_this8._positionX[postion - 1], 0));
                      tween(node).to(0.2, {
                        scale: v3(2, 2, 1)
                      }).to(0.2, {
                        scale: v3(1.2, 1.2, 1)
                      }).to(0.7, {
                        position: v3(0, 300)
                      }).call(function () {
                        node.destroy();
                        if (!_this8.caishen_top_odd_box.active) {
                          _this8.caishen_top_odd_box.getChildByName("font").getComponent(Label).string = "x" + odd;
                          _this8.caishen_top_odd_box.active = true;
                          _this8.caishen_top_odd_spine.node.active = true;
                          tween(_this8.caishen_top_odd_box.getChildByName("font")).to(0.1, {
                            scale: v3(2, 2, 1)
                          }).to(0.2, {
                            scale: v3(1, 1, 1)
                          }).call(function () {
                            //this.caishen_top_odd_box.getChildByName('font').getComponent(cc.Label).string = 'x' + odd
                            _this8.caishen_top_odd_spine.node.active = false;
                            //node.destroy()
                          }).start();
                        } else {
                          _this8.caishen_top_odd_spine.node.active = true;
                          _this8.caishen_top_odd_box.getChildByName("font").getComponent(Label).string = "x" + (parseInt(_this8.caishen_top_odd_box.getChildByName("font").getComponent(Label).string.replace("x", "")) + odd);
                          tween(_this8.caishen_top_odd_box.getChildByName("font")).to(0.1, {
                            scale: v3(2, 2, 1)
                          }).to(0.3, {
                            scale: v3(1, 1, 1)
                          }).call(function () {
                            //this.caishen_top_odd_box.getChildByName('font').getComponent(cc.Label).string = 'x' + (parseInt(this.caishen_top_odd_box.getChildByName('font').getComponent(cc.Label).string.replace('x', '')) + odd)
                            _this8.caishen_top_odd_spine.node.active = false;
                            //node.destroy()
                          }).start();
                        }
                      }).start();
                    }, 1.2);
                    _this8.scheduleOnce(function () {
                      call && call();
                    }, 3);
                  }).start();
                }, 0.1);
              }, 0.5);
            } else {
              var node = instantiate(_this8.cardItem);
              var com = node.getComponent(slotJLcsItem);
              node.parent = _this8.caishen_box;
              node.setPosition(v3(_this8._positionX[postion - 1], 0));
              _this8._caishenShow[postion - 1] = true;
              com.showWild(1, null);
              slotJLcsDef.palyAudio(slotJLcsDef.audio.Caishen_01);
              var totalOdd = 0;
              if (_this8.caishen_top_odd_box.active) {
                totalOdd = parseInt(_this8.caishen_top_odd_box.getChildByName("font").getComponent(Label).string.replace("x", ""));
              }
              totalOdd += odd;
              _this8.scheduleOnce(function () {
                _this8.scheduleOnce(function () {
                  //倍数效果动画一共1.2s
                  if (totalOdd < 3) {
                    slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple_Add1);
                  } else if (totalOdd >= 3 && totalOdd < 10) {
                    slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple_Add2);
                  } else {
                    slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple_Add3);
                  }
                }, 1.4);
                //出现倍数
                slotJLcsDef.palyAudio(slotJLcsDef.audio.Wild_Multiple);
                var node = instantiate(_this8.caishen_odd);
                node.getComponent(Label).string = "x" + odd;
                node.parent = _this8.caishen_odd_box;
                node.active = true;
                node.setPosition(v3(_this8._positionX[postion - 1], 0));
                tween(node).to(0.2, {
                  scale: v3(2, 2, 1)
                }).to(0.2, {
                  scale: v3(1.2, 1.2, 1)
                }).to(0.7, {
                  position: v3(0, 300)
                }).call(function () {
                  node.destroy();
                  if (!_this8.caishen_top_odd_box.active) {
                    _this8.caishen_top_odd_box.getChildByName("font").getComponent(Label).string = "x" + odd;
                    _this8.caishen_top_odd_box.active = true;
                    _this8.caishen_top_odd_spine.node.active = true;
                    tween(_this8.caishen_top_odd_box.getChildByName("font")).to(0.1, {
                      scale: v3(2, 2, 1)
                    }).to(0.2, {
                      scale: v3(1, 1, 1)
                    }).call(function () {
                      //this.caishen_top_odd_box.getChildByName('font').getComponent(cc.Label).string = 'x' + odd
                      _this8.caishen_top_odd_spine.node.active = false;
                      //node.destroy()
                    }).start();
                  } else {
                    _this8.caishen_top_odd_spine.node.active = true;
                    _this8.caishen_top_odd_box.getChildByName("font").getComponent(Label).string = "x" + (parseInt(_this8.caishen_top_odd_box.getChildByName("font").getComponent(Label).string.replace("x", "")) + odd);
                    tween(_this8.caishen_top_odd_box.getChildByName("font")).to(0.1, {
                      scale: v3(2, 2, 1)
                    }).to(0.3, {
                      scale: v3(1, 1, 1)
                    }).call(function () {
                      //this.caishen_top_odd_box.getChildByName('font').getComponent(cc.Label).string = 'x' + (parseInt(this.caishen_top_odd_box.getChildByName('font').getComponent(cc.Label).string.replace('x', '')) + odd)
                      _this8.caishen_top_odd_spine.node.active = false;
                      //node.destroy()
                    }).start();
                  }
                }).start();
              }, 1.2);
              _this8.scheduleOnce(function () {
                call && call();
              }, 3);
            }
          }, 1.5);
        };
        _proto.allEnd = function allEnd() {
          console.log("结束");
          this.updateGoldData();
          var odd = this._totalCash / this._bet;
          if (!this._isAuto && this._showLineList.length > 0) {
            this._showOneLineIndex = 0;
            this.showOneLine();
          }
          if (odd >= 5) {
            this.showBigWin();
          } else {
            this._lock = false;
            this._current_index = 0;
            this._current_result = null;
            this._caishenList = [{
              position: null,
              odd: null
            }, {
              position: null,
              odd: null
            }, {
              position: null,
              odd: null
            }];
            this._caishenShow = [false, false, false];
            this._isEndBigWin = false;
            this._totalCash = 0;
            this.changeState(RunState.NORMAL);
          }
        };
        _proto.showBigWin = function showBigWin() {
          var _this9 = this;
          //财神效果
          this.caishen.setAnimation(0, "MG_BigWin", false);
          this.caishen.addAnimation(0, "MG_Idle", true);
          this.big_win_cash.reset();
          this.big_win_cash.node.active = false;
          this.big_win.active = true;
          this.big_win_spine.node.active = true;
          this.big_win_spine.setAnimation(0, "BigWin_Start", false);
          tween(this.big_win).to(3, {
            scale: v3(1.1, 1.1, 1)
          }).start();
          var odd = this._totalCash / this._bet;
          odd < 10 ? this.big_win_cash.stepCount = BIGWIN1 * 60 : odd < 40 ? this.big_win_cash.stepCount = BIGWIN2 * 60 : this.big_win_cash.stepCount = BIGWIN3 * 60;
          slotJLcsDef.palyAudio(slotJLcsDef.audio.Big_Win, function (id) {
            _this9._audioId = id;
          });
          if (odd < 10) {
            slotJLcsDef.palyAudio(slotJLcsDef.audio.Change_Win);
            tween(this.big_win_cash.node).to(4, {
              scale: v3(1.1, 1.1)
            }).start();
          } else if (odd >= 10 && odd < 40) {
            slotJLcsDef.palyAudio(slotJLcsDef.audio.Change_Win);
            tween(this.big_win_cash.node).to(4, {
              scale: v3(1.1, 1.1)
            }).start();
            this.scheduleOnce(function () {
              _this9.big_win_cash.node.setScale(v3(1, 1));
              if (!_this9._isEndBigWin) {
                tween(_this9.big_win_cash.node).to(4, {
                  scale: v3(1.1, 1.1)
                }).start();
                _this9.big_win.setScale(v3(1, 1, 1));
                _this9.big_win_spine.setAnimation(0, "MegaWin_Start", false);
              }
            }, 4);
          } else if (odd >= 40) {
            slotJLcsDef.palyAudio(slotJLcsDef.audio.Change_Win2);
            tween(this.big_win_cash.node).to(4, {
              scale: v3(1.1, 1.1)
            }).start();
            this.scheduleOnce(function () {
              if (!_this9._isEndBigWin) {
                _this9.big_win_cash.node.setScale(v3(1, 1));
                tween(_this9.big_win_cash.node).to(4, {
                  scale: v3(1.1, 1.1)
                }).start();
                _this9.big_win.setScale(v3(1, 1, 1));
                _this9.big_win_spine.setAnimation(0, "MegaWin_Start", false);
                tween(_this9.big_win).to(3, {
                  scale: v3(1.1, 1.1, 1)
                }).start();
                _this9.scheduleOnce(function () {
                  if (!_this9._isEndBigWin) {
                    _this9.big_win_cash.node.setScale(v3(1, 1));
                    tween(_this9.big_win_cash.node).to(4, {
                      scale: v3(1.1, 1.1)
                    }).start();
                    _this9.big_win.setScale(v3(1, 1, 1));
                    _this9.big_win_spine.setAnimation(0, "SuperWin_Start", false);
                    tween(_this9.big_win).to(3, {
                      scale: v3(1.1, 1.1, 1)
                    }).start();
                  }
                }, 4);
              }
            }, 4);
          }
          this.scheduleOnce(function () {
            _this9.big_win_cash.node.active = true;
            _this9.big_win_cash.string = Common.numFormat(_this9._totalCash + "");
          }, 0.4);
        };
        _proto.changeBigWin = function changeBigWin() {
          var cash = parseInt(this.big_win_cash.string.replace(/,/g, ""));
          if (this.big_win.active && !this._isEndBigWin && this._totalCash - 200 <= cash && cash <= this._totalCash + 200) {
            this._endBigTime = 1.5;
            var odd = this._totalCash / this._bet;
            this.big_win.setScale(v3(1, 1, 1));
            if (odd < 10) {
              this.big_win_spine.setAnimation(0, "BigWin_End", false);
            } else if (odd >= 10 && odd < 40) {
              this.big_win_spine.setAnimation(0, "MegaWin_End", false);
            } else {
              this.big_win_spine.setAnimation(0, "SuperWin_End", false);
            }
          }
        };
        _proto.hideBigWin = function hideBigWin() {
          this.big_win.active = false;
          this._lock = false;
          this._current_index = 0;
          this._current_result = null;
          this._caishenList = [{
            position: null,
            odd: null
          }, {
            position: null,
            odd: null
          }, {
            position: null,
            odd: null
          }];
          this._caishenShow = [false, false, false];
          this._isEndBigWin = false;
          this._totalCash = 0;
          this.changeState(RunState.NORMAL);
        };
        _proto.clickBigWin = function clickBigWin() {
          if (!this._isEndBigWin) {
            this._isEndBigWin = true;
            this._endBigTime = 1.5;
            var odd = this._totalCash / this._bet;
            this.big_win_cash.reset(this._totalCash);
            this.big_win.setScale(v3(1, 1, 1));
            if (odd < 10) {
              this.big_win_spine.setAnimation(0, "BigWin_End", false);
            } else if (odd >= 10 && odd < 40) {
              this.big_win_spine.setAnimation(0, "MegaWin_End", false);
            } else {
              this.big_win_spine.setAnimation(0, "SuperWin_End", false);
            }
          }
        };
        _proto.showLine = function showLine() {
          var _this10 = this;
          if (this._showLineList && this._showLineList.length > 0) {
            this._showLineList.map(function (item) {
              var node = instantiate(_this10.noItem);
              var com = node.getComponent(slotJLcsNo);
              node.parent = _this10.noItemParent;
              com.rendeNo(item);
              _this10.noLineParent.children[item - 1].active = true;
            });
          }
        };
        _proto.hideLine = function hideLine() {
          this.noLineParent.children.map(function (item) {
            item.active = false;
          });
          this.noItemParent.removeAllChildren();
          this._showLineList = [];
          if (this._showOneLineTimer) {
            this.unschedule(this._showOneLineTimer);
            this._showOneLineIndex = 0;
            this._showOneLineTimer = null;
          }
        };
        _proto.showOneLine = function showOneLine() {
          var _this11 = this;
          this._showOneLineTimer = function () {
            _this11.noLineParent.children.map(function (item) {
              item.active = false;
            });
            _this11.noItemParent.removeAllChildren();
            if (_this11._showLineList[_this11._showOneLineIndex]) {
              var node = instantiate(_this11.noItem);
              var com = node.getComponent(slotJLcsNo);
              node.parent = _this11.noItemParent;
              com.rendeNo(_this11._showLineList[_this11._showOneLineIndex]);
              _this11.noLineParent.children[_this11._showLineList[_this11._showOneLineIndex] - 1].active = true;
            } else {
              _this11._showLineList.map(function (item) {
                var node = instantiate(_this11.noItem);
                var com = node.getComponent(slotJLcsNo);
                node.parent = _this11.noItemParent;
                com.rendeNo(item);
                _this11.noLineParent.children[item - 1].active = true;
              });
            }
            if (_this11._showLineList[_this11._showOneLineIndex]) {
              _this11._showOneLineIndex += 1;
            } else {
              _this11._showOneLineIndex = 0;
            }
          };
          this.schedule(this._showOneLineTimer, 2);
        };
        _proto.initPage = function initPage(data) {
          if (data && data.length > 0) {
            slotJLcsProxy.result = data;
            this.calResult(true);
            this.run.getComponent(slotJLcsRun).initCard(this._current_result._result);
          }
        };
        _proto.calResult = function calResult(isInit) {
          var _this12 = this;
          if (isInit === void 0) {
            isInit = false;
          }
          this._current_result = {
            _result: [[], [], [], [], []]
          };
          if (isInit) {
            slotJLcsProxy.result[slotJLcsProxy.result.length - 1].PosMsg.map(function (item, index) {
              if (index % 5 == 0) {
                _this12._current_result._result[0].push(item);
              } else if (index % 5 == 1) {
                _this12._current_result._result[1].push(item);
              } else if (index % 5 == 2) {
                _this12._current_result._result[2].push(item);
              } else if (index % 5 == 3) {
                _this12._current_result._result[3].push(item);
              } else if (index % 5 == 4) {
                _this12._current_result._result[4].push(item);
              }
            });
          } else {
            slotJLcsProxy.result[this._current_index].PosMsg.map(function (item, index) {
              if (index % 5 == 0) {
                _this12._current_result._result[0].push(item);
              } else if (index % 5 == 1) {
                _this12._current_result._result[1].push(item);
              } else if (index % 5 == 2) {
                _this12._current_result._result[2].push(item);
              } else if (index % 5 == 3) {
                _this12._current_result._result[3].push(item);
              } else if (index % 5 == 4) {
                _this12._current_result._result[4].push(item);
              }
            });
            //计算是否有财神以及财神倍数
            if (!this._caishenList[0]["odd"]) {
              this._current_result._result[1].map(function (item, index) {
                if (item == 8) {
                  _this12._caishenList[0] = {
                    position: index,
                    odd: 1
                  };
                } else if (item == 9) {
                  _this12._caishenList[0] = {
                    position: index,
                    odd: 2
                  };
                } else if (item == 10) {
                  _this12._caishenList[0] = {
                    position: index,
                    odd: 3
                  };
                } else if (item == 11) {
                  _this12._caishenList[0] = {
                    position: index,
                    odd: 5
                  };
                } else if (item == 12) {
                  _this12._caishenList[0] = {
                    position: index,
                    odd: 10
                  };
                }
              });
            }
            if (!this._caishenList[1]["odd"]) {
              this._current_result._result[2].map(function (item, index) {
                if (item == 8) {
                  _this12._caishenList[1] = {
                    position: index,
                    odd: 1
                  };
                } else if (item == 9) {
                  _this12._caishenList[1] = {
                    position: index,
                    odd: 2
                  };
                } else if (item == 10) {
                  _this12._caishenList[1] = {
                    position: index,
                    odd: 3
                  };
                } else if (item == 11) {
                  _this12._caishenList[1] = {
                    position: index,
                    odd: 5
                  };
                } else if (item == 12) {
                  _this12._caishenList[1] = {
                    position: index,
                    odd: 10
                  };
                }
              });
            }
            if (!this._caishenList[2]["odd"]) {
              this._current_result._result[3].map(function (item, index) {
                if (item == 8) {
                  _this12._caishenList[2] = {
                    position: index,
                    odd: 1
                  };
                } else if (item == 9) {
                  _this12._caishenList[2] = {
                    position: index,
                    odd: 2
                  };
                } else if (item == 10) {
                  _this12._caishenList[2] = {
                    position: index,
                    odd: 3
                  };
                } else if (item == 11) {
                  _this12._caishenList[2] = {
                    position: index,
                    odd: 5
                  };
                } else if (item == 12) {
                  _this12._caishenList[2] = {
                    position: index,
                    odd: 10
                  };
                }
              });
            }
          }
          //console.log(slotJLcsProxy.result, this._current_result, this._current_index)
        };

        _proto.sendBet = function sendBet() {
          //ExMode: 0不开启，1 模式1， 2 模式2
          // console.log(this._exBoxSelect, 'this._exBoxSelect')
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotJLCS.bet, {
            betAmount: Math.floor(this._bet),
            ExMode: this._exBoxSelect == "left" ? 1 : this._exBoxSelect == "right" ? 2 : 0
          });

          //都没中
          //slotJLcsProxy.result = [{ "BetAmount": 1000, "ExtraOdd": 1, "PosMsg": [4, 1, 2, 3, 4, 5, 7, 7, 7, 5, 3, 3, 1, 4, 3], "RewardLines": null, "RewardMoney": 0, "RewardPos": null, "ThrowLine": 0, "ThrowWildSym": 0 }]
          //中一次（没中钱）
          // slotJLcsProxy.result = [
          //     { "BetAmount": 1000, "ExPosMsg": null, "ExtraOdd": 1, "PosMsg": [1, 3, 1, 1, 4, 2, 2, 5, 10, 1, 4, 1, 3, 7, 4], "RewardLines": null, "RewardMoney": 0, "RewardPos": null },
          //     { "BetAmount": 1000, "ExPosMsg": null, "ExtraOdd": 3, "PosMsg": [3, 3, 6, 10, 4, 3, 7, 7, 10, 4, 4, 1, 3, 10, 4], "RewardLines": null, "RewardMoney": 0, "RewardPos": null }
          // ]
          //中一次奖
          // slotJLcsProxy.result = [
          //     { "BetAmount": 1000, "ExPosMsg": null, "ExtraOdd": 1, "PosMsg": [4, 1, 1, 7, 3, 1, 2, 6, 5, 4, 7, 2, 7, 3, 3], "RewardLines": { "0": 4, "1": 4, "2": 3, "3": 3, "4": 3, "5": 3 }, "RewardMoney": 2000, "RewardPos": [5, 1, 2] }]

          //中多次
          // slotJLcsProxy.result = [
          //     { "BetAmount": 1000, "ExPosMsg": null, "ExtraOdd": 1, "PosMsg": [1, 6, 3, 5, 1, 6, 6, 10, 1, 1, 5, 3, 3, 6, 2], "RewardLines": { "0": 3 }, "RewardMoney": 2500, "RewardPos": [7, 5, 6] },
          //     { "BetAmount": 1000, "ExPosMsg": null, "ExtraOdd": 3, "PosMsg": [5, 2, 10, 7, 3, 2, 1, 10, 10, 4, 6, 3, 10, 7, 4], "RewardLines": { "8": 3 }, "RewardMoney": 22500, "RewardPos": [5, 1, 2] },
          //     { "BetAmount": 1000, "ExPosMsg": null, "ExtraOdd": 6, "PosMsg": [5, 2, 10, 10, 5, 4, 4, 10, 10, 4, 2, 1, 10, 10, 5], "RewardLines": { "0": 5 }, "RewardMoney": 150000, "RewardPos": [6, 7, 8, 9, 5] }]

          //财神+中多次
          // slotJLcsProxy.result = [
          //     { "BetAmount": 1000, "ExPosMsg": null, "ExtraOdd": 3, "PosMsg": [7, 2, 10, 2, 1, 7, 1, 2, 5, 3, 5, 7, 6, 5, 2], "RewardLines": { "7": 3 }, "RewardMoney": 7500, "RewardPos": [5, 11, 12] },
          //     { "BetAmount": 1000, "ExPosMsg": null, "ExtraOdd": 6, "PosMsg": [6, 2, 10, 6, 3, 7, 4, 2, 7, 5, 5, 10, 6, 4, 3], "RewardLines": { "0": 4, "1": 4, "2": 3, "3": 3, "4": 3, "5": 3, "6": 3, "7": 3, "8": 3 }, "RewardMoney": 183000, "RewardPos": [11, 5, 7, 8, 0, 1, 3, 10, 6, 2, 12] },
          //     { "BetAmount": 1000, "ExPosMsg": null, "ExtraOdd": 6, "PosMsg": [4, 2, 10, 6, 6, 6, 4, 2, 1, 3, 7, 10, 6, 4, 4], "RewardLines": { "0": 3, "1": 3, "2": 3, "3": 3, "4": 3, "5": 5, "6": 3, "7": 3, "8": 4 }, "RewardMoney": 303000, "RewardPos": [6, 7, 2, 11, 12, 13, 14, 5, 1, 10, 3, 0] }
          // ]

          //扔元宝
          //slotJLcsProxy.result = [{ "BetAmount": 1000, "ExtraOdd": 1, "PosMsg": [2, 1, 5, 6, 7, 5, 3, 1, 7, 4, 3, 5, 3, 2, 3], "RewardLines": null, "RewardMoney": 0, "RewardPos": null, "ThrowLine": 1, "ThrowWildSym": 10 }]

          // slotJLcsProxy.result = [
          //     { "BetAmount": 5000, "ExtraOdd": 6, "PosMsg": [3, 4, 3, 7, 7, 5, 10, 2, 5, 4, 6, 2, 10, 6, 6], "RewardLines": { "0": 4, "1": 3, "2": 5, "3": 3, "4": 3, "5": 3, "6": 3, "7": 3, "8": 3 }, "RewardMoney": 29700, "RewardPos": [5, 6, 7, 2, 10, 12, 14, 8, 0, 1, 11, 13], "ThrowLine": 0, "ThrowWildSym": 0 },
          //     { "BetAmount": 5000, "ExtraOdd": 6, "PosMsg": [5, 4, 3, 3, 1, 5, 10, 2, 5, 1, 5, 2, 10, 5, 2], "RewardLines": { "0": 4, "1": 3, "2": 4, "3": 4, "4": 4, "5": 4, "6": 3, "7": 3, "8": 4 }, "RewardMoney": 33300, "RewardPos": [10, 11, 12, 5, 6, 7, 1, 8, 0, 2, 13], "ThrowLine": 0, "ThrowWildSym": 0 }
          // ]

          //背景出现财神
          //slotJLcsProxy.result = [{ "BetAmount": 5000, "ExtraOdd": 8, "PosMsg": [5, 4, 1, 4, 4, 6, 1, 10, 11, 1, 2, 3, 6, 3, 5], "RewardLines": null, "RewardMoney": 0, "RewardPos": null, "ThrowLine": 0, "ThrowWildSym": 0 }, { "BetAmount": 5000, "ExtraOdd": 8, "PosMsg": [5, 4, 1, 4, 6, 1, 1, 10, 11, 2, 7, 3, 6, 3, 2], "RewardLines": { "0": 4 }, "RewardMoney": 4000, "RewardPos": [8, 5, 6, 7], "ThrowLine": 0, "ThrowWildSym": 0 }]
        };

        _proto.initEvent = function initEvent() {
          var _this13 = this;
          //进入页面获取上次数据
          slotJLcsProxy.on(slotJLcsGameEvent.UPDATE_BETLIST, this.initPage, this);

          //更新基础倍数
          slotJLcsProxy.on(slotJLcsGameEvent.UPDATEBASEBET, this.updateBaseBet, this);

          //第一轮结束
          slotJLcsProxy.on(slotJLcsGameEvent.END, function (data) {
            //防止多轮转动触发
            if (data) {
              _this13.changeState(RunState.STOP);
            }
          }, this);
          slotJLcsProxy.on(slotJLcsGameEvent.ERROR, function () {
            _this13.changeState(RunState.NORMAL);
          }, this);
        }

        //左侧ex打开或关闭on/off
        ;

        _proto.exOnOrOff = function exOnOrOff() {
          if (this._isEx) {
            this.ex_select.getChildByName("off").active = true;
            this.ex_select.getChildByName("on").active = false;
            this._isEx = false;
            this.hideExBox();
            slotJLcsProxy.arrBetList = [];
            slotJLcsProxy.orgainArrBetList.map(function (item) {
              slotJLcsProxy.arrBetList.push(item);
            });
            slotJLcsProxy.curBet = slotJLcsProxy.arrBetList[this._exBoxInputNumIndex] / 1000;
            this._bet = slotJLcsProxy.curBet * 1000;
            this.txt_bet.string = numberFormat(slotJLcsProxy.curBet, 2.0) + "K";
            this.showOrHideExSelect("hide");
          } else {
            this.ex_select.getChildByName("off").active = false;
            this.ex_select.getChildByName("on").active = true;
            this._isEx = true;
            this.showExBox();
            //this.showOrHideExSelect('hide')
          }
        }
        //点击ex弹出框倍数选择
        ;

        _proto.clickEx = function clickEx(type) {
          slotJLcsDef.palyAudio(slotJLcsDef.audio.Extra_Touch);
          if (type == "left") {
            this.ex_box_left.setAnimation(0, "left_push", false);
            this.ex_box_left.addAnimation(0, "left_push_idle", true);
            // this.ex_box_left.setCompleteListener(() => {
            //     this.ex_box_left.setCompleteListener(null)
            //     this.ex_box_left.setAnimation(0, 'left_push_idle', true)
            // })
            this.ex_box_right.setAnimation(0, "right_idle", false);
          } else {
            this.ex_box_right.setAnimation(0, "right_push", false);
            this.ex_box_right.addAnimation(0, "right_push_idle", true);
            // this.ex_box_right.setCompleteListener(() => {
            //     this.ex_box_right.setCompleteListener(null)
            //     this.ex_box_right.setAnimation(0, 'right_push_idle', true)
            // })
            this.ex_box_left.setAnimation(0, "left_idle", false);
          }
          this._exBoxSelect = type;
          this.ex_box_Btn.setAnimation(0, "green_idle", false);
        }
        //展示ex弹出框
        ;

        _proto.showExBox = function showExBox() {
          var _this14 = this;
          this.ex_box.active = true;
          this.ex_box_left.node.active = true;
          this.ex_box_right.node.active = true;
          this.ex_box_left.setAnimation(0, "left_intro", false);
          this.ex_box_right.setAnimation(0, "right_intro", false);
          this.ex_box_left.setCompleteListener(function () {
            _this14.ex_box_left.setCompleteListener(null);
            _this14.ex_box_left.addAnimation(0, "left_idle", true);
            _this14.ex_box_right.addAnimation(0, "right_idle", true);
            _this14.ex_box_leftBtn.node.active = true;
            _this14.ex_box_leftBtn.setAnimation(0, "blue_idle", true);
            _this14.ex_box_rightBtn.node.active = true;
            _this14.ex_box_rightBtn.setAnimation(0, "blue_idle", true);
            _this14.ex_box_numBox.active = true;
            _this14.ex_box_Btn.node.active = true;
            _this14.ex_box_Btn.setAnimation(0, "green_grey", false);
            _this14._exBoxInputNumIndex = slotJLcsProxy.arrBetList.indexOf(_this14._bet) || 0;
            _this14.ex_box_numBox.getChildByName("number").getComponent(Label).string = slotJLcsProxy.arrBetList[_this14._exBoxInputNumIndex] / 1000 / 10 + "k";
            _this14.ex_box_leftNum.getComponent(Label).string = slotJLcsProxy.arrBetList[_this14._exBoxInputNumIndex] / 1000 / 10 * 5 + "k";
            _this14.ex_box_rightNum.getComponent(Label).string = slotJLcsProxy.arrBetList[_this14._exBoxInputNumIndex] / 1000 / 10 * 50 + "k";
            _this14.ex_box_leftNum.node.active = false;
            _this14.ex_box_rightNum.node.active = false;
          });
          this.ex_box_right.setCompleteListener(function () {
            _this14.ex_box_right.setCompleteListener(null);
            _this14.ex_box_right.addAnimation(0, "right_idle", true);
            _this14.ex_box_leftNum.node.active = true;
            _this14.ex_box_rightNum.node.active = true;
          });
        }
        //取消或确定ex弹出框
        ;

        _proto.hideExBox = function hideExBox(isSubmit) {
          var _this15 = this;
          if (isSubmit === void 0) {
            isSubmit = false;
          }
          this.ex_box.active = false;
          this.ex_box_left.node.active = false;
          this.ex_box_right.node.active = false;
          this.ex_box_leftNum.node.active = false;
          this.ex_box_rightNum.node.active = false;
          this.ex_box_leftBtn.node.active = false;
          this.ex_box_rightBtn.node.active = false;
          this.ex_box_numBox.active = false;
          this.ex_box_Btn.node.active = false;
          // console.log(isSubmit, 'a')
          if (isSubmit) {
            slotJLcsDef.palyMusic(slotJLcsDef.audio.MG_BGM_Extra);
            this.ex_select.getChildByName("off").active = false;
            this.ex_select.getChildByName("on").active = true;
            this.menu_setBet.getComponent(Sprite).spriteFrame = this.bet_icon[1];
            this._isEx = true;
            this.ex_btn_sprite.active = false;
            this.ex_btn.node.active = true;
            tween(this.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              slotJLcsProxy.arrBetList = [];
              if (_this15._exBoxSelect == "left") {
                slotJLcsProxy.orgainArrBetList.map(function (item) {
                  slotJLcsProxy.arrBetList.push(item * 0.5);
                });
              } else {
                slotJLcsProxy.orgainArrBetList.map(function (item) {
                  slotJLcsProxy.arrBetList.push(item * 5);
                });
              }
              slotJLcsProxy.curBet = slotJLcsProxy.arrBetList[_this15._exBoxInputNumIndex] / 1000;
              _this15._bet = slotJLcsProxy.curBet * 1000;
              _this15.txt_bet.string = numberFormat(slotJLcsProxy.curBet, 2.0) + "K";
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
          } else {
            slotJLcsDef.palyMusic(slotJLcsDef.audio.MG_BGM);
            this.ex_select.getChildByName("off").active = true;
            this.ex_select.getChildByName("on").active = false;
            this.menu_setBet.getComponent(Sprite).spriteFrame = this.bet_icon[0];
            this._isEx = false;
            this._exBoxInputNumIndex = slotJLcsProxy.arrBetList.indexOf(this._bet) || 0;
            this.ex_box_numBox.getChildByName("number").getComponent(Label).string = slotJLcsProxy.arrBetList[this._exBoxInputNumIndex] / 1000 / 10 + "k";
            this.ex_box_leftNum.getComponent(Label).string = slotJLcsProxy.arrBetList[this._exBoxInputNumIndex] / 1000 / 10 * 5 + "k";
            this.ex_box_rightNum.getComponent(Label).string = slotJLcsProxy.arrBetList[this._exBoxInputNumIndex] / 1000 / 10 * 50 + "k";
            this._exBoxSelect = "";
            this.ex_btn_sprite.active = true;
            this.ex_btn.node.active = false;
          }
        }

        //展示或隐藏左侧ex选择框
        ;

        _proto.showOrHideExSelect = function showOrHideExSelect(type) {
          var _this16 = this;
          if (this._lock) return;
          if (type == "show") {
            this._exSelectShow = true;
            this.ex_select.active = true;
            tween(this.ex_select.getComponent(UITransform)).to(0.05, {
              width: 300
            }).call(function () {
              _this16.ex_select.getChildByName("title").active = true;
              _this16._isEx ? _this16.ex_select.getChildByName("on").active = true : _this16.ex_select.getChildByName("off").active = true;
            }).start();
            tween(this.ex_select).to(0.05, {
              position: v3(-270, -4)
            }).start();
            tween(this.ex_rule_btn).to(0.05, {
              position: v3(310, -4, 0)
            }).start();
          } else {
            this._exSelectShow = false;
            this.ex_select.getChildByName("title").active = false;
            this.ex_select.getChildByName("on").active = false;
            this.ex_select.getChildByName("off").active = false;
            tween(this.ex_select.getComponent(UITransform)).to(0.05, {
              width: 60
            }).call(function () {
              _this16.ex_select.active = false;
            }).start();
            tween(this.ex_select).to(0.05, {
              position: v3(-60, -4)
            }).start();
            tween(this.ex_rule_btn).to(0.05, {
              position: v3(75, -4, 0)
            }).start();
          }
        };
        _proto.addEx = function addEx() {
          if (slotJLcsProxy.arrBetList[this._exBoxInputNumIndex + 1]) {
            this._exBoxInputNumIndex += 1;
            this.ex_box_numBox.getChildByName("number").getComponent(Label).string = slotJLcsProxy.arrBetList[this._exBoxInputNumIndex] / 1000 / 10 + "k";
            this.ex_box_leftNum.getComponent(Label).string = slotJLcsProxy.arrBetList[this._exBoxInputNumIndex] / 1000 / 10 * 5 + "k";
            this.ex_box_rightNum.getComponent(Label).string = slotJLcsProxy.arrBetList[this._exBoxInputNumIndex] / 1000 / 10 * 50 + "k";
          }
        };
        _proto.increaseEx = function increaseEx() {
          if (this._exBoxInputNumIndex >= 1) {
            this._exBoxInputNumIndex -= 1;
            this.ex_box_numBox.getChildByName("number").getComponent(Label).string = slotJLcsProxy.arrBetList[this._exBoxInputNumIndex] / 1000 / 10 + "k";
            this.ex_box_leftNum.getComponent(Label).string = slotJLcsProxy.arrBetList[this._exBoxInputNumIndex] / 1000 / 10 * 5 + "k";
            this.ex_box_rightNum.getComponent(Label).string = slotJLcsProxy.arrBetList[this._exBoxInputNumIndex] / 1000 / 10 * 50 + "k";
          }
        };
        _proto.showExRule = function showExRule() {
          this.ex_rule.active = true;
        };
        _proto.hideExRule = function hideExRule() {
          this.ex_rule.active = false;
        }
        //自动模式切换
        ;

        _proto.clickChangeAuto = function clickChangeAuto() {
          if (this._isAutoNotBet) return;
          if (!this._isAuto) {
            if (DataManager.instance.getUserDataForKey(UserKey.GOLD) < this._bet) {
              Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
              return;
            }
            this._isAuto = true;
            this.menu_setAuto_Skeleton.setAnimation(0, "on", true);
          } else {
            this._isAuto = false;
            this.menu_setAuto_Skeleton.setAnimation(0, "idle", true);
          }
        }

        //获取总金额
        ;

        _proto.updateGoldData = function updateGoldData(used) {
          if (used === void 0) {
            used = 0;
          }
          this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
        }

        //是否启动加速
        ;

        _proto.clickChangeQuick = function clickChangeQuick() {
          if (this._runDelay == 0) {
            this._runDelay = 0.1;
          } else {
            this._runDelay = 0;
          }
        }

        //更新下单数
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this17 = this;
          this._bet = slotJLcsProxy.curBet * 1000;
          tween(this.txt_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            _this17.txt_bet.string = numberFormat(slotJLcsProxy.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.onClickShowBet = function onClickShowBet() {
          if (this._lock) return;
          Common.loadPopBuddle("prefab/slotJLcsSetBase", slotJLcsProxy.bundle, function () {}, function (prefab) {
            var setBase = instantiate(prefab);
            ViewManager.instance.popNodeView(setBase, true);
          }, true);
        };
        _proto.onClickMenu = function onClickMenu() {
          //if (this._lock) return
          this.menu_more.active = !this.menu_more.active;
        };
        _proto.onClickReturn = function onClickReturn() {
          Common.returnToHall(this, slotJLcsProxy.BUNDLE);
        };
        _proto.onClickHelp = function onClickHelp() {
          this.menu_more.active = !this.menu_more.active;
          Common.loadPopBuddle("prefab/slotJLcsHelp", slotJLcsProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          this.menu_more.active = !this.menu_more.active;
          GUtil.openRecord("slotJLCS");
        };
        _proto.onClickRank = function onClickRank() {
          this.menu_more.active = !this.menu_more.active;
          GUtil.openRank("slotJLCS");
        }

        //公告滚动
        ;

        _proto.updateNotice = function updateNotice(dt) {
          if (this._caishenTitleTime > 0) {
            this._caishenTitleTime -= dt;
            if (!this.caishen_title.active && !this.caishen_top_odd_box.active) {
              this.caishen_title.active = true;
            }
            if (this.caishen_top_odd_box.active && this.caishen_title.active) {
              this.caishen_title.active = false;
            }
            if (this.notice_title.active) {
              this.notice_title.active = false;
            }
          } else {
            if (this.caishen_title.active) {
              this.caishen_title.active = false;
            }
            if (!this.notice_title.active) {
              this.notice_title.active = true;
            }
            this._noticeDelay -= dt;
            if (this._noticeDelay < 0) this.notice_title.setPosition(this.notice_title.position.x - 1.5, this.notice_title.position.y);
            if (this.notice_title.getPosition().x < -this.notice_title.getComponent(UITransform).width / 2 - 233) {
              this.changeNotice();
            }
          }
        }
        //公告
        ;

        _proto.changeNotice = function changeNotice() {
          this._noticeDelay = 2;
          this._noticeIndex++;
          if (this._noticeIndex >= this.notice_frames.length) {
            this._noticeIndex = 0;
            this._caishenTitleTime = 10;
          }
          this.notice_title.getComponent(Sprite).spriteFrame = this.notice_frames[this._noticeIndex];
          var x = this.notice_title.getComponent(UITransform).width / 2 > 233 ? this.notice_title.getComponent(UITransform).width / 2 - 233 : 0;
          this.notice_title.setPosition(x, this.notice_title.position.y);
        };
        return slotJLcsView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "caishen", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bet_icon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "notice_content", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "menu_more", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "menu_setBet", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "menu_setAuto_Skeleton", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "trun_start", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "trun_start_mask", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "ex_rule", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "ex_rule_btn", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "ex_btn", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "ex_btn_on", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "ex_btn_off", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "ex_btn_sprite", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "ex_select", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "ex_box", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "ex_box_left", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "ex_box_right", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "ex_box_numBox", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "ex_box_Btn", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "ex_box_Cancel", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "ex_box_leftBtn", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "ex_box_rightBtn", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "ex_box_leftNum", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "ex_box_rightNum", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "run", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "caishen_box", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "caishen_odd_box", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "caishen_odd", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "caishen_top_odd_box", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "caishen_top_odd_spine", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "caishen_title", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "win_box", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "win_number", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "win_spine", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "noItem", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "noItemParent", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "noLineParent", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "big_win", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "big_win_spine", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "big_win_cash", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "yuanbao_box", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "yuanbao", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "yuanbao_autm", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "big_light", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "yuanbao_caishen", [_dec53], {
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

(function(r) {
  r('virtual:///prerequisite-imports/slotJLCSGame', 'chunks:///_virtual/slotJLCSGame'); 
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