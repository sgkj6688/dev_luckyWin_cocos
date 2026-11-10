System.register("chunks:///_virtual/Guess_autoSet.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff94bwNtwFJUpYeJAdPgRKz", "Guess_autoSet", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Guess_betRecordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent;
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
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "b7500UFpENDIrXRdOEz7YQT", "Guess_betRecordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Guess_betRecordItem = exports('default', (_dec = ccclass("Guess_betRecordItem"), _dec2 = menu("game/GuessGame/Guess_betRecordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Guess_betRecordItem, _Component);
        function Guess_betRecordItem() {
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
        var _proto = Guess_betRecordItem.prototype;
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
          // let tempData: GuessDef.IBetRecord = this.item.data;
          // if (!tempData || tempData === undefined) {
          //     this.node.active = false;
          //     this.Node_label.active = false;
          //     return;
          // }
          // this.Label_date.string = tempData.Date;
          // this.Label_bet.string = `${Common.ChangeMoneyFormat(tempData.Bet, 2)}`;
          // this.Label_rate.string = tempData.Odd > 0 ? `${tempData.Odd}x` : "-";
          // let level = GuessUtils.instance.getRateLevel(tempData.Odd);
          // this.rateBg.node.active = tempData.Odd > 0;
          // this.rateBg.spriteFrame = this.sprFrameRateBg[level];
          // let str: string = "";
          // let Prize = tempData.Odd * tempData.Bet;
          // if (Prize > 0) {
          //     str = `+${Common.ChangeMoneyFormat(Prize, 2)}`;
          //     this.Label_win.color = color(255, 0, 0, 255);
          // } else {
          //     str = `-${Common.ChangeMoneyFormat(tempData.Bet, 2)}`;
          //     this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          // }
          // this.Label_win.string = str;
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
        _createClass(Guess_betRecordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Guess_betRecordItem;
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

System.register("chunks:///_virtual/Guess_betView.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import { Label, Toggle, _decorator, sp, Node, v3, tween, Button, find, instantiate, color, Layout, sys, UIOpacity, Tween } from "cc";
      cclegacy._RF.push({}, "28ce6o7OR5Md4yHj9nmvxdK", "Guess_betView", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Guess_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "a1f67gr6M9JlakbxgkEIJnX", "Guess_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var Guess_btnEffect = exports('default', (_dec = ccclass("GuessBtnEffect"), _dec2 = menu("game/GuessGame/Guess_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Guess_btnEffect, _Component);
        function Guess_btnEffect() {
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
        var _proto = Guess_btnEffect.prototype;
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

        _createClass(Guess_btnEffect, [{
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

        return Guess_btnEffect;
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

System.register("chunks:///_virtual/Guess_Help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "6d6908aNUtNv5GTq3sjKLED", "Guess_Help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Guess_Help = exports('Guess_Help', (_dec = ccclass("Guess_Help"), _dec2 = menu("game/GuessGame/Guess_Help"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Guess_Help, _Component);
        function Guess_Help() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "helpRate", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Guess_Help.prototype;
        /////////////////////////////
        _proto.start = function start() {
          // for (let i = 0; i < this.helpRate.children.length; i++) {
          //     let Label_rate = this.helpRate.children[i];
          //     Label_rate.getComponent(Label).string = `X${GuessModel.instance.Rate[i]}`;
          // }
        };
        return Guess_Help;
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

System.register("chunks:///_virtual/Guess_playerItem.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import { _decorator, Component, Label, Sprite, SpriteFrame, Node, UIOpacity, color } from "cc";
      cclegacy._RF.push({}, "55a69G3wvZJXZ5nuzyUvJPU", "Guess_playerItem", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Guess_record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './NetManager.ts', './GuessDef.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, Common, NetManager, eProto, EventManager;
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
      Common = module.Common;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "7e0f3S0uWtAPrmktk7p4qwA", "Guess_record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Guess_record = exports('default', (_dec = ccclass("Guess_record"), _dec2 = menu("game/GuessGame/Guess_record"), _dec3 = property(gts.List), _dec4 = property(gts.List), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Guess_record, _Component);
        function Guess_record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content_records", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_content_results", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_records", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_results", _descriptor4, _assertThisInitialized(_this));
          _this.recordInfo = null;
          return _this;
        }
        var _proto = Guess_record.prototype;
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
        _proto.onBtnClick = function onBtnClick(event, data) {
          switch (event.target.name) {
            case "BettingRecords":
              {
                this.Node_records.active = true;
                this.Node_results.active = false;
                this.scrollView_content_records.setData(this.recordInfo);
                this.scrollView_content_records.refresh();
                break;
              }
            case "HistoricalResults":
              {
                this.Node_records.active = false;
                this.Node_results.active = true;
                this.scrollView_content_results.setData(this.recordInfo);
                this.scrollView_content_results.refresh();
                break;
              }
            ///////////////////////
          }
        };

        _proto.onRecvData = function onRecvData(data) {
          switch (data.cmd) {
            case eProto.HD_QueryBetRecord:
              {
                if (data.Data.BetRecord) {
                  this.recordInfo = data.Data.BetRecord.slice();
                  if (this.Node_records.active) {
                    this.scrollView_content_records.setData(data.Data.BetRecord);
                    this.scrollView_content_records.refresh();
                  } else {
                    this.scrollView_content_results.setData(data.Data.BetRecord);
                    this.scrollView_content_results.refresh();
                  }
                }
                break;
              }
          }
        };
        return Guess_record;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content_records", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content_results", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_records", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_results", [_dec6], {
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

System.register("chunks:///_virtual/Guess_recordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Sprite, UIOpacity, color, Component, AutoChangeParent, Common;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "7d88fL8yyRPVaJlnMbi28Pm", "Guess_recordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Guess_recordItem = exports('default', (_dec = ccclass("Guess_recordItem"), _dec2 = menu("game/GuessGame/Guess_recordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Guess_recordItem, _Component);
        function Guess_recordItem() {
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
          _this.Label_resultNum = null;
          _this._gtItem = null;
          return _this;
        }
        var _proto = Guess_recordItem.prototype;
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

          // this.Sprite_bg.getComponent(Sprite).color = tempData.Income > 0 ? color(255, 0, 0, 255) : color(0, 255, 0, 255);

          this.Label_gameNo.string = Common.setGameNo(tempData.GameNo);
          var date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_time.string = date.time;
          this.Label_date.string = date.date;
          if (this.Label_win) {
            this.Label_bet.string = "" + Common.ChangeMoneyFormat(tempData.BetAmount, 2);
            var str = "";
            if (tempData.Income > 0) {
              str = "+" + Common.ChangeMoneyFormat(tempData.Income, 2);
              this.Label_win.color = color(255, 0, 0, 255);

              // this.Sprite_bg.getComponent(Sprite).color = color(255, 0, 0, 255);
            } else if (tempData.Income <= 0) {
              str = "" + Common.ChangeMoneyFormat(tempData.Income, 2);
              this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
              // this.Sprite_bg.getComponent(Sprite).color = color(0x68, 0xf5, 0x01, 255);
            }

            this.Label_win.string = str;
          }
          var result = parseFloat(tempData.GameResult);
          this.Label_result.color = result > 2.0 ? color(0, 255, 0, 255) : color(0, 0, 255, 255);
          this.Label_result.string = result + "x";
        };
        _createClass(Guess_recordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Guess_recordItem;
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

System.register("chunks:///_virtual/Guess_resultItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GuessUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteFrame, Label, Sprite, Tween, tween, v3, Component, GuessUtils;
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
      Label = module.Label;
      Sprite = module.Sprite;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      GuessUtils = module.GuessUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "4f2d3nUHtRGHbDQFvBoa+vt", "Guess_resultItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Guess_resultItem = exports('default', (_dec = ccclass("Guess_resultItem"), _dec2 = menu("game/GuessGame/Guess_resultItem"), _dec3 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Guess_resultItem, _Component);
        function Guess_resultItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "arrSprFrame", _descriptor, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = Guess_resultItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
        };
        _proto.onDisable = function onDisable() {};
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
          var rate = this.item.data;
          var vRate = Math.floor(rate * 100) / 100;
          var level = GuessUtils.instance.getRateLevel(vRate);
          var Label_rate = this.node.getChildByName("Label_rate").getComponent(Label);
          // Label_rate.color = color(hexColor[level]);
          Label_rate.string = vRate + "x";
          var itemBg = this.node.getComponent(Sprite);
          itemBg.spriteFrame = this.arrSprFrame[rate > 2.0 ? 1 : 0];
          Tween.stopAllByTarget(this.node);
          if (this.item.itemIndex == 0) {
            tween(this.node).to(0.33, {
              scale: v3(1.1, 1.1, 1.1)
            }).to(0.33, {
              scale: v3(1.0, 1.0, 1.0)
            }).union().repeatForever().start();
          }
        };
        _createClass(Guess_resultItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Guess_resultItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrSprFrame", [_dec3], {
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

System.register("chunks:///_virtual/Guess_scrollNum.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Label, Node, v3, Component;
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
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ea62egu8jVDZKfzChYaKGN+", "Guess_scrollNum", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Guess_scrollNum = exports('Guess_scrollNum', (_dec = ccclass("Guess_scrollNum"), _dec2 = menu("game/GuessGame/Guess_scrollNum"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Guess_scrollNum, _Component);
        function Guess_scrollNum() {
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
          return _this;
        }
        var _proto = Guess_scrollNum.prototype;
        ///////////////////
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          this.clear();
          this.node.on(Node.EventType.TOUCH_START, function (event) {
            _this2.touchPosY = event.getLocationY();
            _this2.isTouchStart = true;
          });
          this.node.on(Node.EventType.TOUCH_MOVE, function (event) {
            var locationY = event.getLocationY();
            var disY = locationY - _this2.touchPosY;
            _this2.touchPosY = locationY;
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
        _createClass(Guess_scrollNum, [{
          key: "curNum",
          get: function get() {
            return "" + this._curNum;
          }
        }]);
        return Guess_scrollNum;
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

System.register("chunks:///_virtual/Guess_sky.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, v3, UITransform, Component;
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
      v3 = module.v3;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e003eMmSXJGBLN4UcxvuQsB", "Guess_sky", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Guess_sky = exports('Guess_sky', (_dec = ccclass("Guess_sky"), _dec2 = menu("game/GuessGame/Guess_sky"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Guess_sky, _Component);
        function Guess_sky() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          ////////////////////////////
          _initializerDefineProperty(_this, "arrBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrFBg", _descriptor2, _assertThisInitialized(_this));
          _this.isRunning = false;
          return _this;
        }
        var _proto = Guess_sky.prototype;
        ////////////////////////////
        _proto.start = function start() {};
        _proto.update = function update(dt) {
          if (this.isRunning) {
            var disY = dt * 50;
            for (var _iterator = _createForOfIteratorHelperLoose(this.arrBg), _step; !(_step = _iterator()).done;) {
              var bg = _step.value;
              bg.position = v3(bg.position.x, bg.position.y - disY, bg.position.z);
              if (bg.position.y < -bg.getComponent(UITransform).height / 2.0 && bg.name != "BG_0") {
                bg.position = v3(bg.position.x, bg.position.y + 6667, bg.position.z);
              }
            }
            var disFY = dt * 35;
            for (var _iterator2 = _createForOfIteratorHelperLoose(this.arrFBg), _step2; !(_step2 = _iterator2()).done;) {
              var _bg = _step2.value;
              _bg.position = v3(_bg.position.x, _bg.position.y - disFY, _bg.position.z);
              if (_bg.position.y < -_bg.getComponent(UITransform).height / 2.0) {
                _bg.position = v3(_bg.position.x, _bg.position.y + 6667, _bg.position.z);
              }
            }
          }
        }
        ///////////////////////////////

        //////////////////////////////
        ;

        _proto.doStart = function doStart(isRunning) {
          this.isRunning = true;
        };
        _proto.doPause = function doPause() {
          this.isRunning = false;
        };
        _proto.doReset = function doReset() {
          this.isRunning = false;
          this.arrBg[0].position = v3(0, 1666.5, 0);
          this.arrBg[1].position = v3(0, 5000, 0);
          this.arrBg[2].position = v3(0, 8333.5, 0);
        };
        return Guess_sky;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrFBg", [_dec4], {
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

System.register("chunks:///_virtual/Guess_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GuessUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, GuessUtils;
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
      GuessUtils = module.GuessUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ae7f8N1RmBJjKjIKlPKrDAu", "Guess_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Guess_winTip = exports('default', (_dec = ccclass("GuessWinTip"), _dec2 = menu("game/GuessGame/Guess_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Guess_winTip, _Component);
        function Guess_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Guess_winTip.prototype;
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
            _this2.Label_win.string = GuessUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            GuessUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${GuessUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            GuessUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return Guess_winTip;
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

System.register("chunks:///_virtual/GuessCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './GuessModel.ts', './I18n.ts', './ViewManager.ts', './GuessDef.ts', './GuessUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sys, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, GuessModel, i18n, ViewManager, eProto, eGuess, eEvent, GuessUtils, Common;
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
      GuessModel = module.GuessModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eGuess = module.eGuess;
      eEvent = module.eEvent;
    }, function (module) {
      GuessUtils = module.GuessUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d09b9JSilVJHKUZZwbWMWVe", "GuessCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GuessCtrl = exports('GuessCtrl', (_dec = ccclass("GuessCtrl"), _dec(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(GuessCtrl, _GameDef$BaseCtrl);
        function GuessCtrl() {
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
          _this._model = GuessModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = GuessCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete GuessCtrl._instance;
          GuessCtrl._instance = null;
          GuessModel.destroy();
          GuessUtils.destroy();
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

        _proto.reqBet = function reqBet(BetAmount) {
          NetManager.instance.sendOnlineData(eProto.GET_OPEN, {
            action: "Start",
            chip: BetAmount
          });
        }

        //0:same 1:big 2:small
        ;

        _proto.reqGuess = function reqGuess(guesTag) {
          if (guesTag === void 0) {
            guesTag = eGuess.big;
          }
          NetManager.instance.sendOnlineData(eProto.GUESS_BS, {
            action: "SelectBigOrSmall",
            select: guesTag == eGuess.same ? "same" : guesTag == eGuess.big ? "big" : "small"
          });
        }
        //    /**请求下车 */
        ;

        _proto.reqStop = function reqStop(index) {
          NetManager.instance.sendOnlineData(eProto.GUESS_BS, {
            action: "Stop"
          });
        }
        //    /**请求突出房间 */
        ;

        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.C2S_SEND_EXIT, {});
        }
        // //    /**请求历史记录 */
        // reqHistory() {
        //     NetManager.instance.sendOnlineData(GuessDef.eProto.HD_History, {});
        // }
        // //    /**请求大奖记录 */
        // reqJackpotRecord(Page: number = 1, Limit: number = 9) {
        //     NetManager.instance.sendOnlineData(GuessDef.eProto.HD_GetJackpotRecord, { Limit: Limit, Page: Page });
        // }
        //    /**重新进入 */
        ;

        _proto.reEnterRoom = function reEnterRoom() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          // NetManager.instance.sendOnlineData(GuessDef.eProto.HD_Enter, { tableId: GuessModel.instance.curTableID });
        }
        //    /**请求进入房间 */
        ;

        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.GET_INFO, {});
        }
        //    //////////////////////////////////////////
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.Log("==onRecvData==" + sys.now() + JSON.stringify(data));
          // if (data.cmd != GuessDef.eProto.HD_UpdateOddNum) {
          //     gts.Debug.Log("==onRecvData==" + cc.sys.now() + JSON.stringify(data));
          // }

          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            }
            // if (data.cmd == GuessDef.eProto.HD_Enter || (data.Code == 402 && GuessModel.instance.gameState.GameNo != GuessModel.instance._myBetGameNO)) {
            //     //                //退出到大厅
            //     EventManager.instance.emit(GuessDef.eEvent.onLoadHall);
            //     return;
            // }

            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.GET_INFO:
              {
                //                //获取配置
                GuessModel.instance.configInfo = data.Data.gameConf;
                GuessModel.instance.openInfo = data.Data.gameState;
                break;
              }
            case eProto.GET_OPEN:
            case eProto.GUESS_BS:
              {
                //                //获取开牌结果
                GuessModel.instance.openInfo = data.Data;
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
                  if (!GuessModel.instance.recordList_self) GuessModel.instance.recordList_self = [];
                  var recordList_self = GuessModel.instance.recordList_self;
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
                  if (!GuessModel.instance.recordList_prize) GuessModel.instance.recordList_prize = [];
                  var recordList_prize = GuessModel.instance.recordList_prize;
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
                GuessModel.instance.configInfo = data.Data;
                break;
              }
            //            //更新服务端时间戳
            case eProto.TIMESTAMP:
              {
                emitData = data.Data.serverTime;
                break;
              }
            case eProto.JACKPORT_REWARD:
              {
                emitData = {
                  award: data.Data
                };
                break;
              }
            /////////////////////////////////////////////////
            case eProto.checkInRoom:
              {
                if (data.Data.InGame) {
                  return;
                }
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            //            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==Guess=getWallet==" + HD_Wallet.wallet.VndBalance);
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Guess=pushWallet==" + _HD_Wallet.VndBalance);
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
        return GuessCtrl;
      }(GameDef.BaseCtrl)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GuessDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        HD_getPoolRewardRecord: void 0,
        HD_selectBigOrSmall: void 0,
        HD_start: void 0,
        HD_updatePoolVal: void 0
      });
      cclegacy._RF.push({}, "d2e1bu2cdFNJojgNUMZNoS/", "GuessDef", undefined);
      var cBundle = exports('cBundle', "GuessGame");
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
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
        eProto["checkInRoom"] = "guessBigSmall/checkInRoom";
        eProto["HD_QueryBetRecord"] = "lobby/HD_QueryBetRecord";
        return eProto;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bg: "sound/bgm",
        boom: "sound/boom",
        dainji: "sound/dainji",
        loading: "sound/loading",
        jieguo: "sound/jieguo",
        touzhu: "sound/touzhu",
        fly: "sound/fly",
        closeDoor: "sound/guanmenn",
        countDown: "sound/countDown",
        warning: "sound/warning"
      });
      var eGuess = exports('eGuess', {
        same: 0,
        big: 1,
        small: 2
      });
      var strColor = exports('strColor', ["f", "m", "h", "t"]);
      var strValue = exports('strValue', ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]);
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
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GuessGame", ['./GuessCtrl.ts', './GuessDef.ts', './GuessGameView.ts', './GuessModel.ts', './GuessScene.ts', './GuessUtils.ts', './Guess_Help.ts', './Guess_autoSet.ts', './Guess_betRecordItem.ts', './Guess_betView.ts', './Guess_btnEffect.ts', './Guess_playerItem.ts', './Guess_record.ts', './Guess_recordItem.ts', './Guess_resultItem.ts', './Guess_scrollNum.ts', './Guess_sky.ts', './Guess_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/GuessGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './GuessDef.ts', './GuessModel.ts', './GuessCtrl.ts', './ViewManager.ts', './GuessUtils.ts', './Common.ts', './AudioManager.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Prefab, Label, Button, Sprite, ScrollView, SpriteFrame, instantiate, sys, v3, UITransform, tween, v2, UIOpacity, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, eGuess, eEvent, eProto, eSound, GuessModel, GuessCtrl, ViewManager, GuessUtils, Common, AudioManager, i18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Label = module.Label;
      Button = module.Button;
      Sprite = module.Sprite;
      ScrollView = module.ScrollView;
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      sys = module.sys;
      v3 = module.v3;
      UITransform = module.UITransform;
      tween = module.tween;
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
      eGuess = module.eGuess;
      eEvent = module.eEvent;
      eProto = module.eProto;
      eSound = module.eSound;
    }, function (module) {
      GuessModel = module.GuessModel;
    }, function (module) {
      GuessCtrl = module.GuessCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      GuessUtils = module.GuessUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29;
      cclegacy._RF.push({}, "00828sNKEVBpbCRL9uMXnth", "GuessGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;

      // // @inspector("packages://autoproperty/inspector.js")
      var GuessGameView = exports('default', (_dec = ccclass("GuessGameView"), _dec2 = menu("game/GuessGame/GuessGameView"), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Node), _dec18 = property(Button), _dec19 = property(Button), _dec20 = property(Button), _dec21 = property(Button), _dec22 = property(Button), _dec23 = property(Node), _dec24 = property(Sprite), _dec25 = property(Sprite), _dec26 = property(ScrollView), _dec27 = property(Node), _dec28 = property(Label), _dec29 = property(SpriteFrame), _dec30 = property(Label), _dec31 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(GuessGameView, _GameDef$BaseView);
        function GuessGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_more", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_coin", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor4, _assertThisInitialized(_this));
          /////////////////////
          _initializerDefineProperty(_this, "Label_bet", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate_low", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate_high", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_bet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_cashout", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_refresh", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_max", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_min", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_add", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_reduce", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_play", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_high", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_highOrSame", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_low", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_lowOrSame", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_same", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_card", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_curCard", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openCard", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_recordList", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardItem", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_cardCount", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrCardTag", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate", _descriptor29, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GuessGameView.prototype;
        /////////////////////
        // _curStatus: any = GuessDef.eGameStatus.NONE;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, GuessCtrl.instance);
          this.initUIView();
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
        };

        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          // this.unschedule(this.updateReadyTimer);

          GuessModel.instance.clearGameData();
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
              GuessCtrl.instance.reEnterRoom();
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.initUIView = function initUIView() {
          GuessUtils.instance.loadRes(function () {
            GuessCtrl.instance.reqEnterRoom();
          });
        };
        _proto.initGame = function initGame() {
          if (GuessModel.instance.configInfo == undefined) return;
          if (GuessModel.instance.baseBet != GuessModel.instance.openInfo.selectChip) {
            for (var index = 0; index < GuessModel.instance.chipList.length; index++) {
              var chipNum = GuessModel.instance.chipList[index];
              if (GuessModel.instance.baseBet <= chipNum) {
                GuessModel.instance.baseBetIndex = index;
                break;
              }
            }
          }
          GuessModel.instance.baseBet = GuessModel.instance.chipList[GuessModel.instance.baseBetIndex];
          GuessUtils.instance.updateLabel(this.Label_bet, "" + Common.ChangeMoneyShow(GuessModel.instance.baseBet, 2));
          this.showOpen();

          // this.updateHistory();
          // this.updateInfo();
          this.updateGold();
        }

        //    ///////////////////////////////////////////////////////////////////////////
        ;

        _proto.updateInfo = function updateInfo() {
          // this.Label_gameNo.string = `#${GuessModel.instance.gameState.GameNo}`;
          // this.Label_totalBet.string = Common.numFormat(GuessModel.instance.gameState.TotalBetAmount);
        };
        _proto.updateGold = function updateGold() {
          var gold = Common.numFormat(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          this.Label_gold.string = gold;
        }

        //    ///////////////////////////////////////////////////////////////////////////
        //    ///////////////////////////////////////////////////////////////////////////
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event, data) {
          switch (event.target.name) {
            //返回
            case "Button_menu":
            case "Node_menu_mask":
            case "Button_closeMenu":
              {
                this.Node_more.active = !this.Node_more.active;
                break;
              }
            case "Toggle_music":
              {
                AudioManager.instance.setMusicStatus(!AudioManager.instance._soundMusic);
                break;
              }
            case "Toggle_sound":
              {
                AudioManager.instance.setSoundStatus(!AudioManager.instance._soundEffect);
                break;
              }
            case "Button_return":
              {
                GuessCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_record", GuessUtils.instance.bundle, function () {}, function (prefab) {
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
            // case "Button_set": {
            //     Common.loadPopBuddle(
            //         "prefab/Node_set",
            //         GuessUtils.instance.bundle,
            //         () => {},
            //         (prefab) => {
            //             let newNode = instantiate(prefab);
            //             ViewManager.instance.popNodeView(newNode, true);
            //             if (ViewManager.instance.isVerticalScene && sys.isMobile) {
            //                 newNode.angle = 90;
            //             } else {
            //                 newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
            //             }
            //         },
            //         true
            //     );
            //     break;
            // }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", GuessUtils.instance.bundle, function () {}, function (prefab) {
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
            ///////////////////////
            case "Button_max":
              {
                GuessModel.instance.baseBetIndex = GuessModel.instance.chipList.length - 1;
                GuessModel.instance.baseBet = GuessModel.instance.chipList[GuessModel.instance.baseBetIndex];
                GuessUtils.instance.updateLabel(this.Label_bet, "" + Common.ChangeMoneyShow(GuessModel.instance.baseBet, 2));
                break;
              }
            case "Button_min":
              {
                GuessModel.instance.baseBetIndex = 0;
                GuessModel.instance.baseBet = GuessModel.instance.chipList[GuessModel.instance.baseBetIndex];
                GuessUtils.instance.updateLabel(this.Label_bet, "" + Common.ChangeMoneyShow(GuessModel.instance.baseBet, 2));
                break;
              }
            case "Button_reduce":
              {
                if (GuessModel.instance.baseBet != GuessModel.instance.chipList[GuessModel.instance.baseBetIndex]) {
                  for (var index = 0; index < GuessModel.instance.chipList.length; index++) {
                    var chipNum = GuessModel.instance.chipList[index];
                    if (GuessModel.instance.baseBet <= chipNum) {
                      GuessModel.instance.baseBetIndex = index;
                      break;
                    }
                  }
                }
                if (GuessModel.instance.baseBetIndex > 0) {
                  GuessModel.instance.baseBetIndex -= 1;
                }
                GuessModel.instance.baseBet = GuessModel.instance.chipList[GuessModel.instance.baseBetIndex];
                GuessUtils.instance.updateLabel(this.Label_bet, "" + Common.ChangeMoneyShow(GuessModel.instance.baseBet, 2));
                break;
              }
            case "Button_add":
              {
                if (GuessModel.instance.baseBet != GuessModel.instance.chipList[GuessModel.instance.baseBetIndex]) {
                  for (var _index = 0; _index < GuessModel.instance.chipList.length; _index++) {
                    var _chipNum = GuessModel.instance.chipList[_index];
                    if (GuessModel.instance.baseBet <= _chipNum) {
                      GuessModel.instance.baseBetIndex = _index;
                      break;
                    }
                  }
                }
                if (GuessModel.instance.baseBetIndex < GuessModel.instance.chipList.length - 1) {
                  GuessModel.instance.baseBetIndex += 1;
                }
                GuessModel.instance.baseBet = GuessModel.instance.chipList[GuessModel.instance.baseBetIndex];
                GuessUtils.instance.updateLabel(this.Label_bet, "" + Common.ChangeMoneyShow(GuessModel.instance.baseBet, 2));
                break;
              }
            //////////
            case "Button_low":
              {
                GuessCtrl.instance.reqGuess(eGuess.small);
                break;
              }
            case "Button_lowOrSame":
              {
                GuessCtrl.instance.reqGuess(eGuess.small);
                break;
              }
            case "Button_same":
              {
                GuessCtrl.instance.reqGuess(eGuess.same);
                break;
              }
            case "Button_high":
              {
                GuessCtrl.instance.reqGuess(eGuess.big);
                break;
              }
            case "Button_highOrSame":
              {
                GuessCtrl.instance.reqGuess(eGuess.big);
                break;
              }
            //////////////////
            case "Button_cashout":
              {
                GuessCtrl.instance.reqStop();
                break;
              }
            case "Button_bet":
              {
                if (!GuessModel.instance.configInfo) {
                  return;
                }
                var userMoney = parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD));
                if (userMoney < GuessModel.instance.baseBet) {
                  Common.showTip(i18n.lang["10001"]);
                  return;
                }
                GuessCtrl.instance.reqBet(GuessModel.instance.baseBet);
                break;
              }
          }
        };
        _proto.updateHistory = function updateHistory() {
          // this.scrollView_resultList.setData(GuessModel.instance.history);
          // this.scrollView_resultList.refresh();
        };
        _proto.showCoinEffect = function showCoinEffect(Prize) {
          var _this2 = this;
          if (Prize === void 0) {
            Prize = 0;
          }
          var nPos = this.Button_cashout.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          nPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(nPos);
          var endPos = this.Label_gold.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(endPos);
          var maxCounts = 20;
          var _loop = function _loop() {
            var startPos = v2(nPos.x + Math.random() * 80 - 40, nPos.y + Math.random() * 80 - 40);
            var coin = instantiate(_this2.prefab_coin);
            coin.getComponent(UIOpacity).opacity = 255;
            coin.getComponent(UITransform).priority = 1000;
            coin.position = v3(startPos.x, startPos.y);
            _this2.node.addChild(coin);
            tween(coin).delay(i * 0.01).parallel(tween(coin).bezierTo(Math.random() * 0.4 + 0.5, v2(startPos.x, (startPos.y + endPos.y) / 2), v2(endPos.x + 100, -(startPos.y + endPos.y) / 2), endPos).start(), tween(coin).to(0.2, {
              scale: v3(0.75, 0.75, 1)
            }).start()).call(function () {
              tween(coin.getComponent(UIOpacity)).to(0.1, {
                opacity: 0
              }).start();
            }).delay(0.1).call(function () {
              if (maxCounts > 0) {
                maxCounts = 0;
                GuessUtils.instance.playOneShot(eSound.touzhu);

                //tisi
                Common.showTip("WIN:" + Common.numFormat(Prize), sys.isMobile, v2(0, 350));
                var CurBalance = DataManager.instance.getUserDataForKey(UserKey.GOLD);
                GuessUtils.instance.updateLabel(_this2.Label_gold, Common.numFormat(CurBalance + Prize));
              }
            }).destroySelf().start();
          };
          for (var i = 0; i < maxCounts; i++) {
            _loop();
          }
        };
        _proto.showPlayBtn = function showPlayBtn() {
          this.Node_play.active = GuessModel.instance.openInfo.bWin;
          if (!GuessModel.instance.openInfo.bWin) {
            return;
          }
          var vCard = GuessModel.instance.openInfo.curCard;
          var value = (vCard - 1) % 13;
          this.Button_high.node.active = value == 1;
          this.Button_low.node.active = value == 0;
          this.Button_same.node.active = value == 0 || value == 1;
          this.Button_highOrSame.node.active = value > 1;
          this.Button_lowOrSame.node.active = value > 1;
          this.Label_rate_low.string = Common.ChangeMoneyShow(GuessModel.instance.openInfo.smallerReward, 2);
          this.Label_rate_high.string = Common.ChangeMoneyShow(GuessModel.instance.openInfo.biggerReward, 2);
        };
        _proto.doOpenCard = function doOpenCard() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            //开牌动作-更新展示牌
            var newCard = instantiate(_this3.openCard.node);
            newCard.active = true;
            _this3.Node_card.addChild(newCard);
            tween(newCard).to(0.25, {
              eulerAngles: v3(0, 90, 0)
            }).call(function () {
              newCard.getComponent(Sprite).spriteFrame = GuessUtils.instance.getCardFrame(GuessModel.instance.openInfo.curCard);
            }).to(0.25, {
              eulerAngles: v3(0, 0, 0)
            }).parallel(tween(newCard).to(0.25, {
              position: _this3.Node_curCard.node.position
            }), tween(newCard).to(0.25, {
              scale: _this3.Node_curCard.node.scale
            })).call(resolve).destroySelf().start();
          });
        };
        _proto.updateCardRecord = function updateCardRecord() {
          if (!GuessModel.instance.openInfo.showCards || GuessModel.instance.openInfo.showCards.length <= 1) {
            this.Node_recordList.content.destroyAllChildren();
            return;
          }
          var iStart = this.Node_recordList.content.children.length;
          for (var i = iStart; i < GuessModel.instance.openInfo.showCards.length - 1; i++) {
            var cardData = GuessModel.instance.openInfo.showCards[i];
            var newItem = instantiate(this.cardItem);
            newItem.active = true;
            var value = (cardData - 1) % 13;
            value = value == 0 ? 13 : value;
            var valueNext = (GuessModel.instance.openInfo.showCards[i + 1] - 1) % 13;
            valueNext = valueNext == 0 ? 13 : valueNext;
            var tag = newItem.getChildByName("tag").getComponent(Sprite);
            var sprIndex = value <= valueNext ? 1 : 0;
            if (i == GuessModel.instance.openInfo.showCards.length - 2 && !GuessModel.instance.openInfo.bWin) {
              sprIndex = (sprIndex + 1) % 2;
            }
            tag.spriteFrame = this.arrCardTag[sprIndex];
            newItem.getComponent(Sprite).spriteFrame = GuessUtils.instance.getCardFrame(cardData);
            this.Node_recordList.content.addChild(newItem);
          }
          this.Label_cardCount.string = "" + GuessModel.instance.openInfo.showCards.length;
          var rate = Math.floor(GuessModel.instance.openInfo.curGolds * 100 / GuessModel.instance.openInfo.selectChip) / 100;
          this.Label_rate.string = rate + "x";
          if (this.Node_recordList.content.children.length > 5) {
            this.Node_recordList.scrollToRight();
          }
        };
        _proto.showOpen = /*#__PURE__*/function () {
          var _showOpen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  //更新开牌数-赢的赔率,赢的分数
                  this.Button_bet.node.active = !GuessModel.instance.openInfo.bWin;
                  this.Button_cashout.node.active = GuessModel.instance.openInfo.bWin;
                  Common.setButtonEnableWithGray(this.Button_cashout, GuessModel.instance.openInfo.showCards && GuessModel.instance.openInfo.showCards.length > 1);
                  Common.setButtonEnableWithGray(this.Button_refresh, !GuessModel.instance.openInfo.bWin);
                  Common.setButtonEnableWithGray(this.Button_max, !GuessModel.instance.openInfo.bWin);
                  Common.setButtonEnableWithGray(this.Button_min, !GuessModel.instance.openInfo.bWin);
                  Common.setButtonEnableWithGray(this.Button_add, !GuessModel.instance.openInfo.bWin);
                  Common.setButtonEnableWithGray(this.Button_reduce, !GuessModel.instance.openInfo.bWin);
                  _context.next = 10;
                  return this.doOpenCard();
                case 10:
                  //更新展示牌
                  if (GuessModel.instance.openInfo.curCard > 0) {
                    this.Node_curCard.spriteFrame = GuessUtils.instance.getCardFrame(GuessModel.instance.openInfo.curCard);
                  }

                  //更新开牌记录
                  this.updateCardRecord();
                  this.Label_win.string = Common.ChangeMoneyShow(GuessModel.instance.openInfo.curGolds, 2);

                  //更新guess按钮
                  this.showPlayBtn();
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function showOpen() {
            return _showOpen.apply(this, arguments);
          }
          return showOpen;
        }() //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.GET_INFO:
              {
                this.initGame();
                break;
              }
            case eProto.GUESS_STOP:
              {
                //结算
                if (data > 0) {
                  this.showCoinEffect(data);
                }
                this.Button_bet.node.active = true;
                this.Button_cashout.node.active = false;
                Common.setButtonEnableWithGray(this.Button_cashout, false);
                Common.setButtonEnableWithGray(this.Button_refresh, true);
                Common.setButtonEnableWithGray(this.Button_max, true);
                Common.setButtonEnableWithGray(this.Button_min, true);
                Common.setButtonEnableWithGray(this.Button_add, true);
                Common.setButtonEnableWithGray(this.Button_reduce, true);
                break;
              }
            case eProto.S2C_GET_JACKPOT:
              {
                //奖池数据

                break;
              }
            case eProto.TIMESTAMP:
              {
                // this._time = this._endTime - serverTime;
                // this.refreshTime();

                break;
              }
            case eProto.JACKPORT_REWARD:
              {
                // this.showJackpotReward = true;
                // this.txt_jackpot.string = Common.numFormat("" + data.award);
                break;
              }
            case eProto.GET_OPEN:
            case eProto.GUESS_BS:
              {
                this.showOpen();
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
                  GuessCtrl.instance.reEnterRoom();
                } else {
                  //                    //退出到大厅
                  EventManager.instance.emit(eEvent.onLoadHall);
                }
                break;
              }
          }
        };
        return GuessGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_more", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_coin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec6], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate_low", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate_high", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Button_bet", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Button_cashout", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Button_refresh", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Button_max", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Button_min", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Button_add", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Button_reduce", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_play", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Button_high", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Button_highOrSame", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Button_low", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Button_lowOrSame", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Button_same", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_card", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_curCard", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "openCard", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Node_recordList", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "cardItem", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Label_cardCount", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "arrCardTag", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate", [_dec31], {
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

System.register("chunks:///_virtual/GuessModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './DataManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef, DataManager, UserKey;
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
    }],
    execute: function () {
      cclegacy._RF.push({}, "62ed00XGq1ALZppb0MRWHWK", "GuessModel", undefined);
      var GuessModel = exports('GuessModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(GuessModel, _GameDef$BaseSington);
        function GuessModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          ////////////////////////0-3-6-8
          _this.chipList = [1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000, 50000000];
          _this.history = null;
          _this.baseBetIndex = 0;
          _this.baseBet = 0;
          // autoRate: number = 2.0;
          _this._myBetGameNO = "";
          //    //大奖
          _this._recordList_prize = [];
          //    //自己的下注记录
          _this._recordList_self = [];
          //    //房间配置信息
          _this._configInfo = null;
          //    //房间状态信息
          _this._openInfo = void 0;
          return _this;
        }
        GuessModel.destory = function destory() {
          delete this._instance;
          this._instance = null;
        };
        var _proto = GuessModel.prototype;
        _proto.isMySelf = function isMySelf(uid) {
          return uid == DataManager.instance.getUserDataForKey(UserKey.OID);
        };
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {
          this.history = null;
          this._myBetGameNO = "";
        };
        _createClass(GuessModel, [{
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
        }]);
        return GuessModel;
      }(GameDef.BaseSington));
      // {
      //     Data: {
      //         gameConf: [
      //             { chip: 1000, poolVal: 20180, mingPercent: 20, anPercent: 50, InitJackpotAmount: 20, JackpotPerThousand: 3, platformCode: "happy99" },
      //             { chip: 10000, poolVal: 200000, mingPercent: 20, anPercent: 50, InitJackpotAmount: 20, JackpotPerThousand: 3, platformCode: "happy99" },
      //             { chip: 50000, poolVal: 1008400, mingPercent: 20, anPercent: 50, InitJackpotAmount: 20, JackpotPerThousand: 3, platformCode: "happy99" },
      //             { chip: 100000, poolVal: 2002400, mingPercent: 20, anPercent: 50, InitJackpotAmount: 20, JackpotPerThousand: 3, platformCode: "happy99" },
      //             { chip: 500000, poolVal: 10175500, mingPercent: 20, anPercent: 50, InitJackpotAmount: 20, JackpotPerThousand: 3, platformCode: "happy99" },
      //         ],
      //         gameState: {
      //             round: 0,
      //             curGolds: 0,
      //             curCard: 0,
      //             chipList: [1000, 10000, 50000, 100000, 500000],
      //             remainTime: 0,
      //             biggerReward: 0,
      //             smallerReward: 0,
      //             aList: null,
      //             bWin: false,
      //             selectChip: 0,
      //             showCards: null,
      //             startTime: 0,
      //             endTime: 0,
      //             curTime: 0,
      //         },
      //     },
      //     GameType: "guessBigSmall",
      //     Action: "HD_enter",
      //     ErrMsg: "操作成功",
      //     Code: 0,
      //     cmd: "guessBigSmall/HD_enter",
      // };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GuessScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './GuessDef.ts', './GuessUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, sys, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, GuessUtils, Common;
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
      GuessUtils = module.GuessUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ae393p+LvJH9Yu7FqlvTO8q", "GuessScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GuessScene = exports('default', (_dec = ccclass("GuessScene"), _dec2 = menu("game/GuessGame/GuessScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GuessScene, _Component);
        function GuessScene() {
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
        var _proto = GuessScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          GuessUtils.instance.bundle = assetManager.getBundle(cBundle);
          GuessUtils.instance.preLoad();
          GuessUtils.instance.playBgMusic();
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
            GuessUtils.instance.bundle.load("prefab/GuessGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
        return GuessScene;
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

System.register("chunks:///_virtual/GuessUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './GuessDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, GameDef, AudioManager, eSound, strColor, strValue, Common;
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
      strColor = module.strColor;
      strValue = module.strValue;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "736d5Y7fYFGqrLHS5+pYlbl", "GuessUtils", undefined);
      var GuessUtils = exports('GuessUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(GuessUtils, _GameDef$BaseSington);
        function GuessUtils() {
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
        var _proto = GuessUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/GuessGameView");
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
                  arrHLoad.push(this.asyncLoadDir("textures/card", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpFrame), _step; !(_step = _iterator()).done;) {
                        var _SpriteFrame = _step.value;
                        _this4.arrSpriteFrame[_SpriteFrame.name] = _SpriteFrame;
                      }
                    }
                  }));
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
          var inter = Common.numFormat(num);
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

          //        // GuessUtils.instance.playSound(GuessDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // GuessUtils.instance.stopSound(GuessDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormat(curWin / 1000);
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

          //        // GuessUtils.instance.playSound(GuessDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // GuessUtils.instance.stopSound(GuessDef.eSound.numAdd);
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

          //        // GuessUtils.instance.playSound(GuessDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // GuessUtils.instance.stopSound(GuessDef.eSound.numAdd);

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
        _proto.getCardFrame = function getCardFrame(vCard) {
          var color = Math.floor((vCard - 1) / 13);
          var value = (vCard - 1) % 13;
          var strFrame = "" + strColor[color] + strValue[value];
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
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        };
        return GuessUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/GuessGame', 'chunks:///_virtual/GuessGame'); 
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