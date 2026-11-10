System.register("chunks:///_virtual/Albb_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "1aeedgjOmpHSZGS9lcoEZNQ", "Albb_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var Albb_btnEffect = exports('default', (_dec = ccclass("AlbbBtnEffect"), _dec2 = menu("game/AlbbGame/Albb_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Albb_btnEffect, _Component);
        function Albb_btnEffect() {
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
        var _proto = Albb_btnEffect.prototype;
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

        _createClass(Albb_btnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
            // if (CC_EDITOR && this._skeletonData) {
            //     setEnumAttr(this, "animation", this._getAnimEnum(this._skeletonData) || DefaultAnimsEnum);
            //     Editor.Utils.refreshSelectedInspector("node", this.node.uuid);
            // }
          }
        }]);

        return Albb_btnEffect;
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

System.register("chunks:///_virtual/Albb_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AlbbModel.ts', './AlbbDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Tween, UITransform, tween, v3, Component, AlbbModel, eRunStatus;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Tween = module.Tween;
      UITransform = module.UITransform;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      AlbbModel = module.AlbbModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c1305slofpFMaDlZCARUUMG", "Albb_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Albb_helpTip = exports('default', (_dec = ccclass("AlbbHelpTip"), _dec2 = menu("game/AlbbGame/Albb_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Albb_helpTip, _Component);
        function Albb_helpTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Sprite_tip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          //    // update (dt) {}
          _this.curIndex = 0;
          return _this;
        }
        var _proto = Albb_helpTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.doShow();
        };
        _proto.onDisable = function onDisable() {
          this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
          Tween.stopAllByTarget(this.Sprite_tip.node);
        };
        _proto.doShow = function doShow() {
          var _this2 = this;
          var len = this.arrSpriteFrame.length;
          this.curIndex = (this.curIndex + 1) % len;
          if (AlbbModel.instance.freeStatus == eRunStatus.NONE && this.curIndex == 0) {
            this.curIndex = 1;
          }
          this.Sprite_tip.spriteFrame = this.arrSpriteFrame[this.curIndex];
          if (this.Sprite_tip.node.getComponent(UITransform).width > this.node.getComponent(UITransform).width) {
            //            //
            var disX = (this.Sprite_tip.node.getComponent(UITransform).width - this.node.getComponent(UITransform).width) / 2.0 + 30;
            this.Sprite_tip.node.setPosition(disX, this.Sprite_tip.node.position.y);
            var toX = disX - this.Sprite_tip.node.getComponent(UITransform).width - 60;
            tween(this.Sprite_tip.node).delay(0.5).to(this.Sprite_tip.node.getComponent(UITransform).width / 80, {
              position: v3(toX, this.Sprite_tip.node.position.y)
            }).call(function () {
              _this2.doShow();
            }).start();
          } else {
            this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
            tween(this.Sprite_tip.node).delay(1.0).call(function () {
              _this2.doShow();
            }).start();
          }
        };
        return Albb_helpTip;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite_tip", [_dec3], {
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

System.register("chunks:///_virtual/Albb_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './EventManager.ts', './AlbbModel.ts', './AlbbDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, instantiate, Label, Toggle, UIOpacity, tween, sys, Component, DataManager, UserKey, EventManager, AlbbModel, arrBetList, eEvent;
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
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      AlbbModel = module.AlbbModel;
    }, function (module) {
      arrBetList = module.arrBetList;
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "06f96gqPcVF26BZvlPQKYqy", "Albb_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Albb_setBase = exports('default', (_dec = ccclass("AlbbSetBase"), _dec2 = menu("game/AlbbGame/Albb_setBase"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Albb_setBase, _Component);
        function Albb_setBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "toggleTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ToggleContainer", _descriptor2, _assertThisInitialized(_this));
          _this.firstSet = true;
          return _this;
        }
        var _proto = Albb_setBase.prototype;
        _proto.onLoad = function onLoad() {
          this.node.scale = v3(this.node.scale.x, 0, 1);
          for (var i = 0; i < 15; i++) {
            var toggleTemp = this.ToggleContainer.getChildByName("" + i);
            if (!toggleTemp) {
              toggleTemp = instantiate(this.toggleTemp);
              toggleTemp.name = "" + i;
              this.ToggleContainer.addChild(toggleTemp);
            }
            var score = AlbbModel.instance.isExModel ? arrBetList[i] * 1.5 : arrBetList[i];
            toggleTemp.getChildByName("Label_score").getComponent(Label).string = score / 1000 + "K";
          }
          var mask = this.node.getChildByName("mask");
          mask.on(Node.EventType.TOUCH_END, this.hide, this);
        };
        _proto.start = function start() {
          var baseBetIndex = AlbbModel.instance.getBaseIndex();
          var curToggle = this.ToggleContainer.getChildByName("" + baseBetIndex);
          curToggle.getComponent(Toggle).isChecked = true;
          this.firstSet = false;
        };
        _proto.onEnable = function onEnable() {
          this.node.scale = v3(this.node.scale.x, 0, 1);
          this.node.getComponent(UIOpacity).opacity = 0;
          tween(this.node).to(0.1, {
            scale: v3(this.node.scale.x, 1.3, 1)
          }, {
            easing: "quadOut"
          }).to(0.05, {
            scale: v3(this.node.scale.x, 1.25, 1)
          }, {
            easing: "quadIn"
          }).start();
          tween(this.node.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
        };
        _proto.hide = function hide() {
          var _this2 = this;
          EventManager.instance.emit(eEvent.updateBaseBet);
          tween(this.node).to(0.05, {
            scale: v3(this.node.scale.x, 1.3, 1)
          }, {
            easing: "quadOut"
          }).to(0.1, {
            scale: v3(this.node.scale.x, 0, 1)
          }, {
            easing: "quadIn"
          }).call(function () {
            _this2.node.active = false;
          }).start();
          tween(this.node.getComponent(UIOpacity)).to(0.1, {
            opacity: 0
          }).start();
        }
        //    // update (dt) {}
        ;

        _proto.onToggleClick = function onToggleClick(toggle) {
          if (this.firstSet) {
            return;
          }
          var iIndex = parseInt(toggle.node.name);
          gts.Debug.Log("==onToggleClick==baseScore==" + arrBetList[iIndex]);
          AlbbModel.instance.curBet = arrBetList[iIndex] / 1000;
          var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
          sys.localStorage.setItem("Albb_baseBetGold" + uid, arrBetList[iIndex]);
          this.hide();
        };
        return Albb_setBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleTemp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ToggleContainer", [_dec4], {
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

System.register("chunks:///_virtual/Albb_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // // Learn TypeScript:
      cclegacy._RF.push({}, "e1803FccPRHYoRHxJJBTc8+", "Albb_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Albb_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AlbbModel.ts', './AlbbDef.ts', './EventManager.ts', './AlbbUtils.ts', './Albb_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, tween, v3, Component, AlbbModel, eRunStatus, eEvent, eConstDef, eSymbol, eSound, EventManager, AlbbUtils, Albb_symbolItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      AlbbModel = module.AlbbModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      AlbbUtils = module.AlbbUtils;
    }, function (module) {
      Albb_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "f262c5nPMVI+6f8Uk0mri7d", "Albb_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Albb_symbol = exports('default', (_dec = ccclass("AlbbSymbol"), _dec2 = menu("game/AlbbGame/Albb_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Albb_symbol, _Component);
        function Albb_symbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isHorizontal", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxIndex", _descriptor2, _assertThisInitialized(_this));
          _this._speed = 0;
          _initializerDefineProperty(_this, "Node_itemTemp", _descriptor3, _assertThisInitialized(_this));
          _this._symbolList = [];
          _this._curLength = 0;
          _this._iCol = 0;
          _this.isBreak = false;
          _this._resultInfoList = [];
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = Albb_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onSymbolBreak + this._iCol, this.onSymbolBreak, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onSymbolBreak + this._iCol, this.onSymbolBreak, this);
        };
        _proto.onSymbolBreak = function onSymbolBreak(length) {
          this._symbolList = [];
          this.isBreak = true;
          var toLength = 0;
          this._resultInfoList = [];
          for (var i = 0; i < length; i++) {
            var newItem = instantiate(this.Node_itemTemp);
            this.itemTag = (this.itemTag + 1) % 2000;
            newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
            this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
            //POSITON
            if (this.isHorizontal) {
              //横向
              var offsetX = (toLength + 1 / 2) * eConstDef.cSymbolW;
              newItem.setPosition(eConstDef.cSymbolStartX + offsetX, 0);
            }

            //
            var itemInfo = {
              IsReward: true,
              Length: 1,
              Sym: eSymbol.WILD
            };
            this._resultInfoList.push(itemInfo);
            var com = newItem.getComponent(Albb_symbolItem);
            com.initItem(itemInfo, this.isHorizontal, this._iCol);
            this._symbolList.push(com);
            toLength++;
          }
        };
        _proto.getResult = function getResult(openResult) {
          if (!openResult) {
            return null;
          }
          var _resultInfoList = [];
          var _curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            var leftLength = this.maxIndex - _curLength;
            if (leftLength == 0) {
              break;
            }

            //            //获取结果
            var itemInfo = null;
            if (this._iCol == 0) {
              var InitPosMsg = openResult.AllPosMsg[i + 1];
              itemInfo = InitPosMsg[InitPosMsg.length - 1];
            } else {
              itemInfo = openResult.AllPosMsg[this._iCol - 1][i];
            }
            if (itemInfo == null) {
              gts.Debug.Log("===itemInfo==null===");
            }
            _resultInfoList.push(itemInfo);
            _curLength += itemInfo.Length;
          }
          if (this._iCol == 0) {
            var isSpecialWild = true;
            for (var _iterator = _createForOfIteratorHelperLoose(_resultInfoList), _step; !(_step = _iterator()).done;) {
              var _itemInfo = _step.value;
              if (_itemInfo.Sym != eSymbol.WILD) {
                isSpecialWild = false;
                break;
              }
            }
            if (isSpecialWild) {
              _resultInfoList = [{
                Sym: eSymbol.SWILD,
                Length: 4,
                IsReward: false
              }];
            }
          }
          gts.Debug.Log(JSON.stringify(_resultInfoList));
          return _resultInfoList;
        };
        _proto.addNewItem = function addNewItem(itemInfo, toLength) {
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            var symbol = Math.floor(Math.random() * eSymbol.TEN); //AlbbDef.eSymbol.TEN
            var symLen = leftLength >= 4 ? Math.floor(Math.random() * 4) + 1 : Math.floor(Math.random() * leftLength) + 1;
            if (symbol == eSymbol.WILD && this.isHorizontal) {
              symLen = this.isHorizontal && Math.random() > 0.75 ? 4 : 1;
              symbol = symLen == 4 ? eSymbol.SWILD : eSymbol.WILD;
            }
            itemInfo = {
              Sym: symbol,
              Length: symLen,
              IsReward: false
            };
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          if (this.isHorizontal) {
            //            //横向
            var offsetX = (toLength + itemInfo.Length / 2) * eConstDef.cSymbolW;
            newItem.setPosition(eConstDef.cSymbolStartX + offsetX, 0);
          } else {
            var offsetY = (toLength + itemInfo.Length / 2) * eConstDef.cSymbolH;
            newItem.setPosition(this.node.getPosition().x, eConstDef.cSymbolStartY + offsetY);
          }

          //        //
          var com = newItem.getComponent(Albb_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol);
          this._symbolList.push(com);
          this.itemTag = (this.itemTag + 1) % 2000;
          newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
          this._curLength += itemInfo.Length;
          return com;
        };
        _proto.init = function init(itemInfoList) {
          var _this2 = this;
          this._curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            this.addNewItem(itemInfoList[i]);
          }
          for (var _i = 0; _i < this._symbolList.length; _i++) {
            var symbolNode = this._symbolList[_i].node;
            if (this.isHorizontal) {
              var toPos = symbolNode.getPosition().x;
              symbolNode.setPosition(symbolNode.position.x + 500, symbolNode.position.y);
              tween(symbolNode).to(0.2, {
                position: v3(toPos, symbolNode.position.y)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(toPos + 15, symbolNode.position.y)
              }, {
                easing: "cubicIn"
              }).to(0.05, {
                position: v3(toPos, symbolNode.position.y)
              }, {
                easing: "cubicOut"
              }).call(function () {
                for (var _iterator2 = _createForOfIteratorHelperLoose(_this2._symbolList), _step2; !(_step2 = _iterator2()).done;) {
                  var comSymbol = _step2.value;
                  comSymbol.doBindToUp();
                }
              }).start();
            } else {
              var _toPos = symbolNode.getPosition().y;
              symbolNode.setPosition(symbolNode.position.x, symbolNode.position.y + 525);
              tween(symbolNode).delay(0.075 * (this._iCol - 1)).to(0.2, {
                position: v3(symbolNode.position.x, _toPos)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(symbolNode.position.x, _toPos + 15)
              }, {
                easing: "cubicIn"
              }).to(0.05, {
                position: v3(symbolNode.position.x, _toPos)
              }, {
                easing: "cubicOut"
              }).call(function () {
                for (var _iterator3 = _createForOfIteratorHelperLoose(_this2._symbolList), _step3; !(_step3 = _iterator3()).done;) {
                  var comSymbol = _step3.value;
                  comSymbol.doBindToUp();
                }
              }).start();
            }
          }
        };
        //0:none 1:startRun 2:running 3:stopping 4:end
        _proto.doStart = function doStart(startDelay, stopDelay) {
          var _this3 = this;
          if (stopDelay === void 0) {
            stopDelay = 0;
          }
          return new Promise(function (resolve, reject) {
            //            //定时停止
            _this3.scheduleOnce(function () {
              AlbbModel.instance.isQuickStop ? function () {
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = eConstDef.cSpeedMax;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this3._resultInfoList = _this3.getResult(AlbbModel.instance.betResult.Res[0]);

            //            //
            _this3._runStatus = eRunStatus.START;
            _this3._speed = eConstDef.CSpeedStart;
            var scheduleUpdate = function scheduleUpdate(dt) {
              switch (_this3._runStatus) {
                case eRunStatus.NONE:
                  {
                    if (_this3._curLength > _this3.maxIndex) {
                      _this3._curLength = _this3.maxIndex;
                    }
                    return;
                  }
                case eRunStatus.START:
                  {
                    _this3._speed += eConstDef.CSpeedAdd;
                    if (_this3._speed >= eConstDef.cSpeedMax) {
                      _this3._speed = eConstDef.cSpeedMax;
                      _this3._runStatus = eRunStatus.RUNNING;
                    }
                    break;
                  }
                case eRunStatus.STOPPING:
                  {
                    _this3._speed -= eConstDef.CSpeedReduse;
                    if (_this3._speed < eConstDef.cSpeedMin) {
                      _this3._speed = eConstDef.cSpeedMin;
                      _this3._runStatus = eRunStatus.STOP;
                    }
                    break;
                  }
                case eRunStatus.END:
                  {
                    var curLength = 0;
                    for (var i = _this3._symbolList.length - 1; i >= 0; i--) {
                      var symbol = _this3._symbolList[i];
                      curLength += symbol.itemInfo.Length;
                      if (curLength > _this3.maxIndex) {
                        var _symbol = _this3._symbolList.shift();
                        _symbol.node.destroyFromParent();
                      }
                    }
                    _this3._runStatus = eRunStatus.NONE;
                    _this3.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator4, _step4, _symbol2;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            // this.scheduleOnce(() => {
                            //
                            // AlbbUtils.instance.playSound(AlbbDef.eSound.Fiop1);
                            // }, 0.15);
                            arrPro = [];
                            for (_iterator4 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step4 = _iterator4()).done;) {
                              _symbol2 = _step4.value;
                              arrPro.push(_symbol2.doStop());
                            }
                            _context.next = 4;
                            return Promise.all(arrPro);
                          case 4:
                            AlbbUtils.instance.playSound(eSound.Reel_Stop);
                            if (AlbbModel.instance.specialStartCol > 0 && (_this3._iCol == 0 || _this3._iCol >= AlbbModel.instance.specialStartCol)) {
                              EventManager.instance.emit(eEvent.onSetMask, _this3._iCol, _this3.node.getPosition().x);
                            }
                            _this3.unschedule(scheduleUpdate);
                            resolve();
                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    })), 0);
                    return;
                  }
              }
              var offset = _this3._speed * 0.01667;
              var disLength = _this3.isHorizontal ? offset / eConstDef.cSymbolW : offset / eConstDef.cSymbolH;
              _this3._curLength -= disLength;
              var isSide = _this3._curLength <= _this3.maxIndex;
              if (_this3._resultInfoList.length == 0 && isSide) {
                //                    //stop run
                disLength -= _this3.maxIndex - _this3._curLength;
                offset = _this3.isHorizontal ? disLength * eConstDef.cSymbolW : disLength * eConstDef.cSymbolH;
                _this3._curLength = _this3.maxIndex;
                _this3._runStatus = eRunStatus.END;
              }
              for (var _i2 = _this3._symbolList.length - 1; _i2 >= 0; _i2--) {
                var _symbol3 = _this3._symbolList[_i2];
                if (!_symbol3.doRunning(offset)) {
                  _this3._symbolList.splice(_i2, 1);
                  _symbol3.node.destroyFromParent();
                }
              }
              if (isSide) {
                var result = _this3._runStatus == eRunStatus.STOP && _this3._resultInfoList.length > 0 ? _this3._resultInfoList.shift() : null;
                _this3.addNewItem(result);
              }
            };
            _this3.scheduleOnce(function () {
              _this3.schedule(scheduleUpdate);
            }, startDelay);
          });
        }
        // static rewardCount = 0;
        // doEffect() {
        //     let arrPro = [];
        //     for (let i = 0; i < this._symbolList.length; i++) {
        //         let symbol = this._symbolList[i];
        //         arrPro.push(symbol.doEffect(0.5));
        //         if (symbol.itemInfo.IsReward) {
        //             Albb_symbol.rewardCount++;
        //         }
        //     }

        //     return Promise.all(arrPro);
        // }
        ;

        _proto.doNumCollect = function doNumCollect(collectType) {
          if (collectType === void 0) {
            collectType = 0;
          }
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            if (symbol.checkCollect()) {
              arrPro.push(symbol.doNumCollect(Albb_symbol.rateNumCount * 0.25, collectType));
              Albb_symbol.rateNumCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doClear = /*#__PURE__*/function () {
          var _doClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var arrPro, _iterator5, _step5, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  Albb_symbol.rateNumCount = 0;
                  // Albb_symbol.rewardCount = 0;
                  arrPro = [];
                  for (_iterator5 = _createForOfIteratorHelperLoose(this._symbolList); !(_step5 = _iterator5()).done;) {
                    symbol = _step5.value;
                    if (symbol.itemInfo.IsReward) {
                      arrPro.push(symbol.doClear());
                    }
                  }
                  return _context2.abrupt("return", Promise.all(arrPro));
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doClear() {
            return _doClear.apply(this, arguments);
          }
          return doClear;
        }();
        _proto.doScatterBlink = /*#__PURE__*/function () {
          var _doScatterBlink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var arrPro, _iterator6, _step6, symbol;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrPro = [];
                  for (_iterator6 = _createForOfIteratorHelperLoose(this._symbolList); !(_step6 = _iterator6()).done;) {
                    symbol = _step6.value;
                    if (symbol.itemInfo.Sym == eSymbol.SCATTER) {
                      arrPro.push(symbol.doScatterBlink());
                    }
                  }
                  return _context3.abrupt("return", Promise.all(arrPro));
                case 3:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function doScatterBlink() {
            return _doScatterBlink.apply(this, arguments);
          }
          return doScatterBlink;
        }();
        _proto.stopScatterBlink = function stopScatterBlink() {
          for (var _iterator7 = _createForOfIteratorHelperLoose(this._symbolList), _step7; !(_step7 = _iterator7()).done;) {
            var symbol = _step7.value;
            if (symbol.itemInfo.Sym == eSymbol.SCATTER) {
              symbol.stopScatterBlink();
            }
          }
        };
        _proto.doScatterNearWin = function doScatterNearWin() {
          for (var _iterator8 = _createForOfIteratorHelperLoose(this._symbolList), _step8; !(_step8 = _iterator8()).done;) {
            var symbol = _step8.value;
            if (symbol.itemInfo.Sym == eSymbol.SCATTER) {
              symbol.doScatterNearWin();
            }
          }
        };
        _proto.stopScatterNearWin = function stopScatterNearWin() {
          for (var _iterator9 = _createForOfIteratorHelperLoose(this._symbolList), _step9; !(_step9 = _iterator9()).done;) {
            var symbol = _step9.value;
            if (symbol.itemInfo.Sym == eSymbol.SCATTER) {
              symbol.stopScatterNearWin();
            }
          }
        };
        _proto.doExChange = function doExChange() {
          for (var _iterator10 = _createForOfIteratorHelperLoose(this._symbolList), _step10; !(_step10 = _iterator10()).done;) {
            var symbol = _step10.value;
            if (symbol.itemInfo.Sym == eSymbol.BAOXIANG) {
              symbol.doExChange();
            }
          }
        };
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(nextReult) {
            var _nextResultInfoList, arrClear, arrCloud, iRow, symbolItem, i, _iRow, _curLength, arrPro, toLength, newIndex, _iRow2, _symbolItem, nextInfo;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  //        // this.isBreak = false;
                  _nextResultInfoList = this.getResult(nextReult);
                  arrClear = [false, false, false, false, false, false];
                  arrCloud = [false, false, false, false, false, false]; //        //remove
                  for (iRow = this._symbolList.length - 1; iRow >= 0; iRow--) {
                    symbolItem = this._symbolList[iRow];
                    if (symbolItem.isClear) {
                      symbolItem.node.destroyFromParent();
                      this._symbolList.splice(iRow, 1);
                      this._curLength -= symbolItem.itemInfo.Length;
                      arrClear[iRow] = true;
                    }
                  }
                  i = 0;
                  for (_iRow = 0; _iRow < arrClear.length; _iRow++) {
                    arrClear[_iRow] ? arrCloud[i] = true : i++;
                  }

                  //        //add and drop
                  _curLength = 0;
                  arrPro = [];
                  toLength = this.maxIndex; //        // let newFloor = 0;
                  newIndex = 0;
                  _iRow2 = 0;
                case 11:
                  if (!(_iRow2 < _nextResultInfoList.length)) {
                    _context4.next = 29;
                    break;
                  }
                  _symbolItem = null;
                  if (!(_iRow2 < this._symbolList.length)) {
                    _context4.next = 18;
                    break;
                  }
                  _symbolItem = this._symbolList[_iRow2];
                  _symbolItem.itemInfo = _nextResultInfoList[_iRow2];
                  _context4.next = 24;
                  break;
                case 18:
                  nextInfo = _nextResultInfoList[_iRow2];
                  _symbolItem = this.addNewItem(nextInfo, toLength);
                  if (_symbolItem) {
                    _context4.next = 22;
                    break;
                  }
                  return _context4.abrupt("continue", 26);
                case 22:
                  toLength += _symbolItem.itemInfo.Length;
                  newIndex++;
                case 24:
                  arrPro.push(_symbolItem.doDrop(_curLength, arrCloud[_iRow2], newIndex));
                  _curLength += _symbolItem.itemInfo.Length;
                case 26:
                  _iRow2++;
                  _context4.next = 11;
                  break;
                case 29:
                  _context4.next = 31;
                  return Promise.all(arrPro);
                case 31:
                  AlbbUtils.instance.playSound(eSound.Fiop1);
                  return _context4.abrupt("return", new Promise(function (resolve, reject) {
                    resolve();
                  }));
                case 33:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function doDrop(_x) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        return Albb_symbol;
      }(Component), _class3.rateNumCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isHorizontal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_itemTemp", [_dec3], {
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

System.register("chunks:///_virtual/Albb_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AlbbDef.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sp, Component, eEvent, EventManager;
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
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "91986/Ip6lAf7NzRu+avZej", "Albb_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Albb_symbolEffectRoot = exports('default', (_dec = ccclass("AlbbSymbolEffectRoot"), _dec2 = menu("game/AlbbGame/Albb_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Albb_symbolEffectRoot, _Component);
        function Albb_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Albb_symbolEffectRoot.prototype;
        //    // onLoad () {}
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onAddEffect, this.onAddEffect, this);
          EventManager.instance.on(eEvent.onDelEffect, this.onDelEffect, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onAddEffect, this.onAddEffect, this);
          EventManager.instance.off(eEvent.onDelEffect, this.onDelEffect, this);
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onAddEffect = function onAddEffect(iRow, iCol, pos) {
          var newNode = instantiate(this.prefab_symbolEffect);
          newNode.name = "symbolEffect_" + iRow + "_" + iCol;
          newNode.position = pos;
          this.node.addChild(newNode);
          var effect = newNode.getComponent(sp.Skeleton);
          effect.setAnimation(0, "boom", false);
          effect.addAnimation(0, "idle", true);
        };
        _proto.onDelEffect = function onDelEffect(iRow, iCol) {
          var delNode = this.node.getChildByName("symbolEffect_" + iRow + "_" + iCol);
          if (delNode) {
            delNode.destroyFromParent();
          }
        };
        return Albb_symbolEffectRoot;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab_symbolEffect", [_dec3], {
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

System.register("chunks:///_virtual/Albb_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AlbbDef.ts', './Albb_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, SpriteFrame, tween, v3, UIOpacity, UITransform, instantiate, Sprite, Component, eSymbol, Albb_symbolItem;
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
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      Albb_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "5d39adphdNBGLVJjp3Ta1rF", "Albb_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Albb_symbolInfo = exports('default', (_dec = ccclass("AlbbSymbolInfo"), _dec2 = menu("game/AlbbGame/Albb_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Albb_symbolInfo, _Component);
        function Albb_symbolInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_info", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_item", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_hu", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_wild", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Albb_symbolInfo.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.mask.on(Node.EventType.TOUCH_END, function () {
            _this2.mask.active = false;
            tween(_this2.Node_info).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.2, {
              scale: v3(0.5, 0.5, 1)
            }).call(function () {
              _this2.mask.active = false;
              _this2.Node_item.active = false;
              _this2.Node_info.active = false;
            }).start();
            tween(_this2.Node_info.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).start();
          }, this);
        }
        //    ///
        ;

        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {
          this.mask.active = false;
          this.Node_item.active = false;
          this.Node_info.active = false;
          this.mask.off("click", null, this);
        };
        _proto.showSymbolInfo = function showSymbolInfo(symbol, symbolNode, pos) {
          if (this.Node_info.active) {
            for (var _iterator = _createForOfIteratorHelperLoose(this.Node_item.children), _step; !(_step = _iterator()).done;) {
              var childNode = _step.value;
              childNode.name == "Node_symbol" ? childNode.destroyFromParent() : null;
            }
            this.mask.active = false;
            this.Node_item.active = false;
            this.Node_info.active = false;
            return;
          }
          this.mask.active = true;
          this.Node_item.active = true;
          this.Node_icon.active = true;
          this.Node_info.active = true;
          pos = this.Node_info.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos));
          pos.x = pos.x - 150 < -372 ? pos.x + 150 : pos.x + 150 > 372 ? pos.x - 150 : pos.x;
          this.Node_info.position = pos;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.Node_item.children), _step2; !(_step2 = _iterator2()).done;) {
            var _childNode = _step2.value;
            _childNode.name == "Node_symbol" ? _childNode.destroyFromParent() : null;
          }
          var newSymbol = instantiate(symbolNode);
          newSymbol.position = v3(0);
          newSymbol.name = "Node_symbol";
          this.Node_item.addChild(newSymbol);
          this.Node_item.getComponent(Albb_symbolItem).initItem(symbol);
          switch (symbol.Sym) {
            case eSymbol.SCATTER:
              {
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[this.arrBgSpFrame.length - 1];
                this.Node_item.getComponent(Albb_symbolItem).Node_symbol.destroyFromParent();

                //                // this.Node_item.active = false;
                this.Node_icon.active = false;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = false;
                break;
              }
            case eSymbol.WILD:
              {
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
                this.Node_info.getComponent(UITransform).width = 375;
                this.Node_info.getComponent(UITransform).height = 210;
                // this.Node_item.getComponent(cc.UITransform).priority = 1;
                // this.Node_icon.getComponent(cc.UITransform).priority = 0;
                this.Node_item.getComponent(UITransform).priority = 1;
                this.Node_icon.getComponent(UITransform).priority = 0;
                this.Node_icon.active = false;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = true;
                break;
              }
            default:
              {
                gts.Debug.LogWarr("==symbol.Sym==" + symbol.Sym);
                // this.Node_item.getComponent(cc.UITransform).priority = 0;
                // this.Node_icon.getComponent(cc.UITransform).priority = 1;
                this.Node_item.getComponent(UITransform).priority = 0;
                this.Node_icon.getComponent(UITransform).priority = 1;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = false;
                this.Node_icon.active = true;
                this.Node_item.active = true;
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[symbol.Length - 1];

                // let arrRate = eRate[symbol.Sym - AlbbDef.eSymbol.RED];
                // for (let i = 0; i < 4; i++) {
                //     let Label_rate = this.Node_icon.getChildByName("Label_rate_" + i).getComponent(cc.Label);
                //     Label_rate.string = `${arrRate[i]}`;
                // }
                break;
              }
          }
          this.Node_info.getComponent(UIOpacity).opacity = 255;
          this.Node_info.scale = v3(0.5, 0.5, 1);
          tween(this.Node_info).to(0.2, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        return Albb_symbolInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_icon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_hu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_wild", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrBgSpFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec9], {
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

System.register("chunks:///_virtual/Albb_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AlbbModel.ts', './AlbbDef.ts', './EventManager.ts', './AlbbUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, UITransform, Node, sp, v3, Label, tween, instantiate, v2, Vec2, UIOpacity, Component, AlbbModel, eConstDef, eSymbol, eEvent, eSound, eRunStatus, eZindex, EventManager, AlbbUtils;
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
      Prefab = module.Prefab;
      UITransform = module.UITransform;
      Node = module.Node;
      sp = module.sp;
      v3 = module.v3;
      Label = module.Label;
      tween = module.tween;
      instantiate = module.instantiate;
      v2 = module.v2;
      Vec2 = module.Vec2;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      AlbbModel = module.AlbbModel;
    }, function (module) {
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eEvent = module.eEvent;
      eSound = module.eSound;
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      AlbbUtils = module.AlbbUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "875c2RrsGJKeY4HEZHENU98", "Albb_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eItemStatus = exports('eItemStatus', {
        NONE: 0,
        STOP: 1,
        doEffect: 2,
        CLEAR: 3,
        Blink: 4,
        NearWin: 5,
        DROP: 6,
        END: 7
      });
      var Albb_symbolItem = exports('default', (_dec = ccclass("AlbbSymbolItem"), _dec2 = menu("game/AlbbGame/Albb_symbolItem"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Albb_symbolItem, _Component);
        function Albb_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Particle_rateAdd", _descriptor, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _this.itemInfo = null;
          _this._isHorizontal = false;
          _this._iCol = 0;
          _this.tag = 0;
          _this.itemStatus = eItemStatus.NONE;
          _this.Node_symbolAniRoot = null;
          //    // onLoad () {}
          _this.Node_symbol = null;
          _this._spineEffect_kuang = null;
          _this._spineEffect_kuangLight = null;
          _this.isBreak = false;
          _this.isClear = false;
          return _this;
        }
        var _proto = Albb_symbolItem.prototype;
        _proto.start = function start() {}
        // protected onEnable(): void {
        //     this.node.on("click", this.onSymbolClick, this);
        // }
        // protected onDisable(): void {
        //     this.node.off("click", this.onSymbolClick, this);
        // }
        // protected onDestroy(): void {}
        //    // update (dt) {}
        //    ///
        ;

        _proto.initItem = function initItem(info, isHorizontal, iCol) {
          if (isHorizontal === void 0) {
            isHorizontal = false;
          }
          if (iCol === void 0) {
            iCol = 0;
          }
          this.itemStatus = eItemStatus.NONE;
          this._iCol = iCol;
          this._isHorizontal = isHorizontal;
          var Node_center = this.node.parent.parent.parent; //Node_center
          this.Node_symbolAniRoot = Node_center.getChildByName("Node_effectRoot");
          this.Node_symbol = this.node.getChildByName("Node_symbol");
          this.itemInfo = info;
          this.updateSymbol(this.itemInfo.IsReward);
          this.node.getComponent(UITransform).height = this.itemInfo.Length * eConstDef.cSymbolH;
        };
        _proto.addEffectKuang = function addEffectKuang() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = true;
            _this2.scheduleOnce(function () {
              itemSpine.skeletonData = AlbbUtils.instance.getSkeletonData("kuang_effect");
              itemSpine.setAnimation(0, "lV" + _this2.itemInfo.Length, false);
              itemSpine.setCompleteListener(function () {
                itemSpine.setCompleteListener(null);
                newNode.destroyFromParent();
                _this2._spineEffect_kuang = null;
              });
            });
            _this2.scheduleOnce(resolve, 1.0);
            var wPos = _this2.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var nPos = _this2.Node_symbolAniRoot.getComponent(UITransform).convertToNodeSpaceAR(wPos);
            newNode.position = nPos;
            newNode.scale = v3(1.2195122, 1.2195122, 1);
            _this2.Node_symbolAniRoot.addChild(newNode);
            //            // this.node.addChild(newNode);

            _this2._spineEffect_kuang = itemSpine;
          });
        };
        _proto.addEffectKuangLight = function addEffectKuangLight() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = true;
            _this3.scheduleOnce(function () {
              itemSpine.skeletonData = AlbbUtils.instance.getSkeletonData("kuang_light");
              itemSpine.setAnimation(0, "" + _this3.itemInfo.Length, false);
              itemSpine.setCompleteListener(function () {
                itemSpine.setCompleteListener(null);
                newNode.destroyFromParent();
                _this3._spineEffect_kuang = null;
                resolve();
              });
            });
            var wPos = _this3.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var nPos = _this3.Node_symbolAniRoot.getComponent(UITransform).convertToNodeSpaceAR(wPos);
            newNode.position = nPos;
            newNode.scale = v3(1.2195122, 1.2195122, 1);
            _this3.Node_symbolAniRoot.addChild(newNode);

            //            // newNode.zIndex = 5;
            //            // this.node.addChild(newNode);
            //            // this.Node_symbol.zIndex = 10;

            _this3._spineEffect_kuangLight = itemSpine;
          });
        };
        _proto.addCloundEffect = function addCloundEffect() {
          if (this._isHorizontal) {
            return;
          }
          var newNode = new Node();
          newNode.setPosition(newNode.position.x, -this.node.getComponent(UITransform).height / 2.0);
          var itemSpine = newNode.addComponent(sp.Skeleton);
          itemSpine.premultipliedAlpha = false;
          //        // itemSpine.useTint = true;
          //        // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);

          this.scheduleOnce(function () {
            itemSpine.skeletonData = AlbbUtils.instance.getSkeletonData("cloud");
            itemSpine.setAnimation(0, "animation", false);
            itemSpine.setCompleteListener(function () {
              itemSpine.setCompleteListener(null);
              newNode.destroyFromParent();
            });
          });
          this.node.addChild(newNode);
        };
        _proto.updateIcon = function updateIcon(Sym, length, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          {
            // this.scheduleOnce(() => {
            var itemSymbol = AlbbUtils.instance.getSkeletonData(Sym, this.itemInfo.Length);
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            itemSpine.skeletonData = itemSymbol;
            var aniList = AlbbUtils.instance.getSymbolAniName(Sym, length, isIdle);
            itemSpine.setAnimation(0, aniList[0], true);
          }
          this.Node_symbol.removeAllChildren();
          switch (Sym) {
            case eSymbol.BAOXIANG:
              {
                var newNode = new Node();
                newNode.name = "rateNum";
                newNode.scale = v3(1, 1, 1);
                newNode.setPosition(0, -eConstDef.cSymbolH * this.itemInfo.Length * 0.2);
                var numSpr = newNode.addComponent(Label);
                numSpr.font = AlbbUtils.instance.getFontData("FNT_num_Won_FG");
                numSpr.fontSize = numSpr.fontSize + 10;
                numSpr.spacingX = -8;
                numSpr.string = "x" + AlbbModel.instance.baoXiangRate;
                this.Node_symbol.addChild(newNode);
                break;
              }
          }
        };
        _proto.doSWildEffect = function doSWildEffect() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            if (_this4.itemInfo.Sym == eSymbol.SWILD) {
              var Node_symbol = _this4.node.getChildByName("Node_symbol");
              var itemSpine = Node_symbol.getComponent(sp.Skeleton);
              itemSpine.setAnimation(0, "Stop", false);
              itemSpine.setCompleteListener(function () {
                itemSpine.setCompleteListener(null);
                _this4.scheduleOnce(function () {
                  resolve();
                  _this4.node.destroyFromParent();
                }, 1.0);
                _this4.itemInfo.IsReward = false;
                var Node_symbol = _this4.node.getChildByName("Node_symbol");
                // Node_symbol.getComponent(cc.UIOpacity).opacity = 0;
                EventManager.instance.emit(eEvent.onSymbolBreak + _this4._iCol, _this4.itemInfo.Length);
              });
            } else {
              resolve();
            }
          });
        };
        _proto.doAnimation = function doAnimation(length) {
          var _this5 = this;
          if (length === void 0) {
            length = this.itemInfo.Length;
          }
          return new Promise(function (resolve, reject) {
            switch (_this5.itemStatus) {
              case eItemStatus.Blink:
                {
                  var itemSpine = _this5.Node_symbol.getComponent(sp.Skeleton);
                  itemSpine.setAnimation(0, "Scatter_Win_" + length, false);
                  itemSpine.setCompleteListener(function () {
                    resolve();
                  });
                  break;
                }
              case eItemStatus.DROP:
              case eItemStatus.STOP:
                {
                  var _itemSpine = _this5.Node_symbol.getComponent(sp.Skeleton);
                  switch (_this5.itemInfo.Sym) {
                    case eSymbol.WILD:
                      {
                        _itemSpine.setAnimation(0, "Stop_" + length, false);
                        _itemSpine.addAnimation(0, "Setup_" + length, true);
                        break;
                      }
                    case eSymbol.SWILD:
                      {
                        _this5.doSWildEffect().then(resolve);
                        return;
                      }
                    case eSymbol.SCATTER:
                      {
                        if (AlbbModel.instance.gameStatus == eRunStatus.NEARWIN) {
                          _itemSpine.setAnimation(0, "NearWin_" + length, true);
                        } else {
                          _itemSpine.setAnimation(0, "Stop_" + length, false);
                          _itemSpine.addAnimation(0, "Setup_" + length, true);
                        }
                        break;
                      }
                    case eSymbol.BAOXIANG:
                      {
                        var rateNum = _this5.Node_symbol.getChildByName("rateNum");
                        tween(rateNum).to(0.2, {
                          scale: v3(1.2, 1.2, 1.2)
                        }).to(0.2, {
                          scale: v3(1, 1, 1)
                        }).start();
                        AlbbUtils.instance.playOneShot(eSound.Chest_show);
                      }
                    default:
                      {
                        _itemSpine.setAnimation(0, "Setup_" + length, true);
                        break;
                      }
                  }
                  resolve();
                  break;
                }
              case eItemStatus.CLEAR:
                {
                  var _itemSpine2 = _this5.Node_symbol.getComponent(sp.Skeleton);
                  switch (_this5.itemInfo.Sym) {
                    case eSymbol.SCATTER:
                      {
                        // itemSpine.setAnimation(0, `Stop_${length}`, false);
                        resolve();
                        break;
                      }
                    default:
                      {
                        _itemSpine2.setAnimation(0, "Remove_" + length, false);
                        _itemSpine2.setCompleteListener(function () {
                          resolve();
                        });
                        break;
                      }
                  }
                  break;
                }
              default:
                {
                  resolve();
                  break;
                }
            }
          });
        };
        _proto.updateSymbol = function updateSymbol(isSpine, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          this.updateIcon(this.itemInfo.Sym, this.itemInfo.Length, isIdle);
          this.updateZIndex(isIdle ? eRunStatus.RUNNING : eRunStatus.CLEAR);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          var _zIndex = 0;
          switch (this.itemInfo.Sym) {
            case eSymbol.BAOXIANG:
            case eSymbol.SCATTER:
              {
                _zIndex = AlbbModel.instance.specialStartCol > 0 ? eZindex.icon_scatterSPECIAL : eZindex.icon_scatter;

                // this.Node_symbol.getComponent(cc.UITransform).priority = AlbbDef.eZindex.icon_scatter;
                this.Node_symbol.getComponent(UITransform).priority = eZindex.icon_scatter;
                break;
              }
            default:
              {
                _zIndex = eZindex.icon;
                break;
              }
          }
          switch (runStatus) {
            case eRunStatus.RUNNING:
              {
                _zIndex = AlbbModel.instance.specialStartCol > 0 && this._iCol > AlbbModel.instance.specialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
                // this.node.getComponent(cc.UITransform).priority = _zIndex;
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.STOP:
              {
                // this.node.getComponent(cc.UITransform).priority = _zIndex;
                this.node.getComponent(UITransform).priority = _zIndex;
                this.doBindToUp();
                break;
              }
            case eRunStatus.CLEAR:
              {
                // this.node.getComponent(cc.UITransform).priority = AlbbDef.eZindex.iconWin;
                this.node.getComponent(UITransform).priority = eZindex.iconWin;
                break;
              }
          }
        }
        // onSymbolClick() {
        //     if (AlbbModel.instance.gameStatus != AlbbDef.eRunStatus.NONE) {
        //         return;
        //     }

        //     let pos = this.Node_symbol.getComponent(cc.UITransform).convertToWorldSpaceAR(cc.v3(0));

        //     EventManager.instance.emit(AlbbDef.eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);
        // }
        ;

        _proto.doRunning = function doRunning(offset) {
          var _this6 = this;
          var ret = true;
          this._isHorizontal ? function () {
            _this6.node.setPosition(_this6.node.position.x - offset, _this6.node.position.y);
            var posSide = -2 * eConstDef.cSymbolW - _this6.itemInfo.Length / 2 * eConstDef.cSymbolW;
            if (_this6.node.getPosition().x <= posSide) {
              ret = false;
            }
          }() : function () {
            _this6.node.setPosition(_this6.node.position.x, _this6.node.position.y - offset);
            var posSide = -2.5 * eConstDef.cSymbolH - _this6.itemInfo.Length / 2 * eConstDef.cSymbolH;
            if (_this6.node.getPosition().y <= posSide) {
              ret = false;
            }
          }();
          return ret;
        };
        _proto.doCheckSymbol = function doCheckSymbol() {
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
              {
                AlbbModel.instance.scatterCounts++;
                switch (AlbbModel.instance.scatterCounts) {
                  case 1:
                  case 2:
                    {
                      AlbbUtils.instance.playOneShot(eSound.Scatter1);
                      break;
                    }
                  case 3:
                    {
                      AlbbUtils.instance.playOneShot(eSound.Scatter2);
                      break;
                    }
                  default:
                    {
                      AlbbUtils.instance.playOneShot(eSound.Scatter3);
                      break;
                    }
                }
                break;
              }
            case eSymbol.SWILD:
              {
                AlbbUtils.instance.playOneShot(eSound.WILD_H);
                break;
              }
          }
        };
        _proto.doStop = function doStop(offset) {
          var _this7 = this;
          if (offset === void 0) {
            offset = 0;
          }
          this.itemStatus = eItemStatus.STOP;
          return new Promise(function (resolve, reject) {
            _this7._isHorizontal ? function () {
              var pos_0 = _this7.node.getPosition().x + 10 + offset;
              var pos_1 = _this7.node.getPosition().x + offset;
              tween(_this7.node).to(0.15, {
                position: v3(pos_0, _this7.node.position.y)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(pos_1, _this7.node.position.y)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this7.doCheckSymbol();
                _this7.updateZIndex(eRunStatus.STOP);
                _this7.doAnimation(_this7.itemInfo.Length).then(resolve);
              }).start();
            }() : function () {
              var pos_0 = _this7.node.getPosition().y + 10 + offset;
              var pos_1 = _this7.node.getPosition().y + offset;
              tween(_this7.node).to(0.15, {
                position: v3(_this7.node.position.x, pos_0)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(_this7.node.position.x, pos_1)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this7.doCheckSymbol();
                _this7.updateZIndex(eRunStatus.STOP);
                _this7.doAnimation(_this7.itemInfo.Length).then(resolve);
              }).start();
            }();
          });
        };
        // _spineEffect_rateNum: sp.Skeleton = null;
        _proto.doNumMoveTo = function doNumMoveTo() {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            var Node_symbol = _this8.node.getChildByName("Node_symbol");
            var rateNum = Node_symbol.getChildByName("rateNum");
            if (!rateNum) {
              resolve();
              return;
            }
            _this8.itemInfo.IsReward = true;
            _this8.Node_symbol.getComponent(UITransform).priority = eZindex.icon_scatter;
            var root = _this8.node.parent.parent.parent.parent;
            var pos = rateNum.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            pos = root.getComponent(UITransform).convertToNodeSpaceAR(pos);
            var newPartical = instantiate(_this8.Particle_rateAdd);
            newPartical.position = v3(pos);
            root.addChild(newPartical);
            var startPos = v2(rateNum.getPosition().x, rateNum.getPosition().y);
            var endPos = v2(-375, 88);
            AlbbUtils.instance.playOneShot(eSound.Chest_hit);
            var duration = Vec2.distance(startPos, endPos) / 1000;
            duration = duration < 0.2 ? 0.2 : duration;
            tween(newPartical).bezierTo(duration, startPos, v2((startPos.x + endPos.x) * 0.5, (startPos.y + endPos.y) * 0.5), endPos).call(function () {
              EventManager.instance.emit(eEvent.onRateNumAdd);
              resolve();
            }).destroySelf().start();
            rateNum.active = false;
          });
        };
        _proto.checkCollect = function checkCollect() {
          return this.itemInfo.Sym == eSymbol.BAOXIANG;
        };
        _proto.doNumCollect = function doNumCollect(delay, collectType) {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            _this9.scheduleOnce(function () {
              _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _this9.doNumMoveTo();
                    case 2:
                      resolve();
                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }))();
            }, 0.5);
          });
        };
        _proto.doScatterBlink = function doScatterBlink() {
          this.itemStatus = eItemStatus.Blink;
          return this.doAnimation(this.itemInfo.Length);
        };
        _proto.stopScatterBlink = function stopScatterBlink() {
          this.itemStatus = eItemStatus.STOP;
          this.doAnimation(this.itemInfo.Length);
          // this.updateIcon(this.itemInfo.Sym, this.itemInfo.Length);
        };

        _proto.doScatterNearWin = function doScatterNearWin() {
          this.itemStatus = eItemStatus.NearWin;
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          itemSpine.setAnimation(0, "NearWin_" + this.itemInfo.Length, true);
        };
        _proto.stopScatterNearWin = function stopScatterNearWin() {
          this.itemStatus = eItemStatus.STOP;
          this.itemStatus = eItemStatus.NearWin;
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          itemSpine.setAnimation(0, "Stop_" + this.itemInfo.Length, false);
          itemSpine.addAnimation(0, "Setup_" + this.itemInfo.Length, true);
        };
        _proto.doExChange = function doExChange() {
          var _this10 = this;
          var Node_symbol = this.node.getChildByName("Node_symbol");
          var rateNum = Node_symbol.getChildByName("rateNum");
          rateNum.active = false;
          var ani = AlbbModel.instance.isExModel ? "ExtraBet_On_" + this.itemInfo.Length : "ExtraBet_Off_" + this.itemInfo.Length;
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          itemSpine.setAnimation(0, ani, false);
          itemSpine.setCompleteListener(function () {
            itemSpine.setCompleteListener(null);
            itemSpine.setAnimation(0, "Setup_" + _this10.itemInfo.Length, true);
            var numSpr = rateNum.getComponent(Label);
            numSpr.string = "x" + AlbbModel.instance.baoXiangRate;
            rateNum.active = true;
          });
        };
        _proto.doClear = function doClear() {
          var _this11 = this;
          this.itemStatus = eItemStatus.CLEAR;
          return new Promise(function (resolve, reject) {
            if (_this11.itemInfo.IsReward) {
              _this11.updateZIndex(eRunStatus.CLEAR);
              _this11.doAnimation(_this11.itemInfo.Length).then(function () {
                _this11.isClear = true;
                _this11.node.getComponent(UIOpacity).opacity = 0;
                resolve();
              });
            } else {
              resolve();
            }
          });
        };
        _proto.doBindToUp = function doBindToUp() {
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
              {
                Albb_symbolItem.scatterNums = Albb_symbolItem.scatterNums % 3 + 1;
                AlbbUtils.instance.playOneShot("sound/new/Scatter" + Albb_symbolItem.scatterNums);
                break;
              }
          }
        };
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(toLength, isCloud, newIndex) {
            var _this12 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (newIndex === void 0) {
                    newIndex = 0;
                  }
                  this.itemStatus = eItemStatus.DROP;
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    var curPos = _this12._isHorizontal ? _this12.node.getPosition().x : _this12.node.getPosition().y;
                    var toPos = 0;
                    if (_this12._isHorizontal) {
                      //                //横向
                      var offsetX = (toLength + _this12.itemInfo.Length / 2) * eConstDef.cSymbolW;
                      toPos = eConstDef.cSymbolStartX + offsetX;
                    } else {
                      var offsetY = (toLength + _this12.itemInfo.Length / 2) * eConstDef.cSymbolH;
                      toPos = eConstDef.cSymbolStartY + offsetY;
                    }
                    var offset = curPos - toPos;
                    if (offset <= 50) {
                      resolve();
                      return;
                    }
                    var dropSpeed = 1000;
                    var duration = offset / dropSpeed;
                    var delayTimes = newIndex == 0 ? 0 : 0.2 + 0.05 * newIndex;
                    _this12._isHorizontal ? function () {
                      var pos_1 = _this12.node.getPosition().x - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this12.node).delay(delayTimes).to(duration, {
                        position: v3(pos_1, _this12.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_0, _this12.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_1, _this12.node.position.y)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        _this12.doBindToUp();
                        _this12.doAnimation();
                        resolve();
                      }).start();
                    }() : function () {
                      var pos_1 = _this12.node.getPosition().y - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this12.node).delay(delayTimes).to(duration, {
                        position: v3(_this12.node.position.x, pos_1)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(_this12.node.position.x, pos_0)
                      }, {
                        easing: "cubicIn"
                      }).to(0.05, {
                        position: v3(_this12.node.position.x, pos_1)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        _this12.doBindToUp();
                        _this12.doAnimation();
                        resolve();
                      }).start();
                    }();
                  }));
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doDrop(_x, _x2, _x3) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        return Albb_symbolItem;
      }(Component), _class3.scatterNums = 0, _class3.dropIndex = 0, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Particle_rateAdd", [_dec3], {
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

System.register("chunks:///_virtual/Albb_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AlbbUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, AlbbUtils;
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
      AlbbUtils = module.AlbbUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "94943bK/tdGdpRQE+ChEy5M", "Albb_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Albb_winTip = exports('default', (_dec = ccclass("AlbbWinTip"), _dec2 = menu("game/AlbbGame/Albb_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Albb_winTip, _Component);
        function Albb_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Albb_winTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          var Node_title = this.node.getChildByName("Node_title").getComponent(Sprite);
          Node_title.spriteFrame = this.arrSpriteFrame[0];
        };
        _proto.onDisable = function onDisable() {
          this.Label_win.string = "";
          Tween.stopAllByTarget(this.node);
        }
        //    // update (dt) {}
        ;

        _proto.doShowRate = function doShowRate(gold) {
          var _this2 = this;
          var Node_title = this.node.getChildByName("Node_title");
          Node_title.getComponent(Sprite).spriteFrame = this.arrSpriteFrame[0];
          tween(this.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this2.Label_win.string = AlbbUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            AlbbUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              //                    // this.Label_win.string = `${AlbbUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            AlbbUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return Albb_winTip;
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

System.register("chunks:///_virtual/AlbbCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './AlbbModel.ts', './I18n.ts', './ViewManager.ts', './AlbbDef.ts', './AlbbUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, AlbbModel, i18n, ViewManager, eProto, eRunStatus, eEvent, eSymbol, AlbbUtils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      UserKey = module.UserKey;
      DataManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      AlbbModel = module.AlbbModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eSymbol = module.eSymbol;
    }, function (module) {
      AlbbUtils = module.AlbbUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "d83a9y3wTJKcZyz58EkyJ53", "AlbbCtrl", undefined);
      var _cc$_decorator = _decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property;
      var AlbbCtrl = exports('AlbbCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(AlbbCtrl, _GameDef$BaseCtrl);
        function AlbbCtrl() {
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
          _this._model = AlbbModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = AlbbCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete AlbbCtrl._instance;
          AlbbCtrl._instance = null;
          AlbbModel.destroy();
          AlbbUtils.destroy();
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
        _proto.reqBet = function reqBet() {
          if (!AlbbModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          if (AlbbModel.instance.freeStatus != eRunStatus.NONE) {
            AlbbModel.instance.curTotalBet = 0;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: AlbbModel.instance.curBet * 1000
            });
          } else {
            AlbbModel.instance.curTotalBet = AlbbModel.instance.isExModel ? AlbbModel.instance.curBet * 1000 * 1.5 : AlbbModel.instance.curBet * 1000;
            if (AlbbModel.instance.curTotalBet > AlbbModel.instance.curBalance) {
              Common.showTip(i18n.lang[10001], !AlbbUtils.instance.isChangeOrientation());
              return;
            }
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: AlbbModel.instance.curBet * 1000,
              ExMode: AlbbModel.instance.isExModel
            });
          }
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotAlibaba"
          });
        }

        /**请求历史记录 */;
        _proto.reqHistory = function reqHistory(offset, pageSize) {
          if (offset === void 0) {
            offset = 0;
          }
          if (pageSize === void 0) {
            pageSize = 13;
          }
          NetManager.instance.sendOnlineData(eProto.HD_History, {
            Offset: offset,
            PageSize: pageSize,
            RecordType: "slotAlibaba"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(AlbbDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          //betAmount: AlbbModel.instance.curBet * 1000
          NetManager.instance.sendOnlineData(eProto.HD_info, {});
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotAlibaba"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotAlibaba",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotAlibaba"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotAlibaba",
            content: strContent,
            msgId: msgid
          });
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
              Common.showTip(i18n.errTip(data.Code));
            }
            // if (data.cmd == AlbbDef.eProto.HD_Enter || (data.Code == 402 && AlbbModel.instance.gameState.GameNo != AlbbModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(AlbbDef.eEvent.onLoadHall);
            //     return;
            // }

            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
              if (AlbbModel.instance.isAuto) {
                AlbbModel.instance.isAuto = false;
                EventManager.instance.emit(eEvent.onAutoClose);
              }
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                ViewManager.instance.closeWait();
                AlbbModel.instance.clearGameData();
                AlbbModel.instance.gameInfo = data.Data;
                AlbbModel.instance.totalFreeTimes = AlbbModel.instance.gameInfo.FreeInfo.Count;
                AlbbModel.instance.curBet = AlbbModel.instance.gameInfo.BetAmount / 1000;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                AlbbModel.instance.betResult = data.Data;
                this.isReqBet = false;

                //判断是否有2个胡
                AlbbModel.instance.specialStartCol = 0;
                if (!AlbbModel.instance.isQuickStop) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = AlbbModel.instance.betResult.Res[0];
                    var iScatterCounts = 0;
                    for (var iCol = 0; iCol < openResult.AllPosMsg.length - 1; iCol++) {
                      var AllPosMsg = openResult.AllPosMsg[iCol];
                      for (var iRow = 0; iRow < AllPosMsg.length; iRow++) {
                        var symbolInfo = AllPosMsg[iRow];
                        if (symbolInfo && symbolInfo.Sym == eSymbol.SCATTER) {
                          iScatterCounts++;
                          if (iScatterCounts > 2) {
                            AlbbModel.instance.specialStartCol = iCol + 1;
                            return;
                          }
                        }
                      }
                    }
                  };
                  checkSpecialRun();
                  gts.Debug.LogWarr("==AlbbModel.instance.specialStartCol==" + AlbbModel.instance.specialStartCol);
                  // //specialStartCol test
                  // AlbbModel.instance.specialStartCol = Math.floor(Math.random() * 2 + 3);
                }

                var doFreeTest = false;
                if (!doFreeTest) {
                  if (AlbbModel.instance.totalFreeTimes > 0) {
                    AlbbModel.instance.totalFreeTimes--;
                  } else {
                    AlbbModel.instance.totalFreeTimes = AlbbModel.instance.betResult.FreeInfo.Count;
                  }
                } else {
                  // freeTest;
                  if (AlbbModel.instance.totalFreeTimes > 0) {
                    AlbbModel.instance.totalFreeTimes--;
                  } else {
                    AlbbModel.instance.totalFreeTimes = 12; //Math.random() > 0.25 ? Math.floor(Math.random() * 7 + 3) : 0;
                  }
                }

                gts.Debug.LogWarr("==AlbbModel.instance.totalFreeTimes==" + AlbbModel.instance.totalFreeTimes);
                if (AlbbModel.instance.freeStatus == eRunStatus.NONE) {
                  AlbbModel.instance.curBalance -= AlbbModel.instance.curTotalBet;
                }
                break;
              }
            // case AlbbDef.eProto.HD_BoYiBo:
            case eProto.HD_History:
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
                gts.Debug.LogWarr("==Albb=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (AlbbModel.instance.curBalance > 0) {
                  AlbbModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                AlbbModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Albb=pushWallet==" + _HD_Wallet.VndBalance);
                if (AlbbModel.instance.curBalance > 0) {
                  AlbbModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                AlbbModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        return AlbbCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AlbbDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f15f4D7gppKk5pSjgn2dNoO", "AlbbDef", undefined);
      var cBundle = exports('cBundle', "AlbbGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotAlibaba/HD_info";
        eProto["HD_Bet"] = "slotAlibaba/HD_Bet";
        eProto["HD_Leave"] = "slotAlibaba/HD_Leave";
        eProto["HD_History"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({}));
      var eZindex = exports('eZindex', {
        NONE: 0,
        icon: 1,
        icon_cat: 250,
        icon_scatter: 500,
        MASK: 1000,
        icon_scatterSPECIAL: 1001,
        iconWin: 1100,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        cSpecialDuration: 4,
        cStartDelay: 0.2,
        cQuickStopStartDelay: 0.005,
        cQuickStopDelay: 0.5,
        cStopDelay: 1.5,
        cSymbolW: 100,
        cSymbolH: 74,
        cSymbolStartX: -200,
        cSymbolStartY: -185,
        cSpeedMax: 4000,
        cSpeedMin: 2000,
        CSpeedStart: 2500,
        CSpeedAdd: 200,
        CSpeedReduse: 200
      }); // cSpeedMax = 2500,
      // cSpeedMin = 1500,
      // CSpeedStart = 1200,
      // CSpeedAdd = 100,
      // CSpeedReduse = 100,
      // cSpeedMax = 1000,
      // cSpeedMin = 400,
      // CSpeedStart = 100,
      // CSpeedAdd = 20,
      // CSpeedReduse = 20,
      var arrBetList = exports('arrBetList', [1000, 2000, 3000, 5000, 8000, 10000, 20000, 30000, 40000, 50000, 80000, 100000, 200000, 500000, 1000000]);
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        START: 1,
        RUNNING: 2,
        STOPPING: 3,
        STOP: 4,
        NEARWIN: 5,
        CLEAR: 6,
        SHAKE: 7,
        DROP: 8,
        END: 9
      });
      var eRunType = exports('eRunType', {
        NONE: 0,
        SPECIAL: 1
      });
      var eSymbol = exports('eSymbol', {
        SCATTER: 0,
        WILD: 1,
        BAOXIANG: 2,
        GUOWANG: 3,
        GONGZHU: 4,
        JINBI: 5,
        JIEZHI: 6,
        BAODAO: 7,
        TAOGUAN: 8,
        A: 9,
        K: 10,
        Q: 11,
        J: 12,
        TEN: 13,
        SWILD: 14
      });
      var cRate = exports('cRate', {
        "3": {
          3: 1.5,
          4: 2,
          5: 2.5,
          6: 4
        },
        "4": {
          3: 1,
          4: 1.25,
          5: 1.5,
          6: 2.5
        },
        "5": {
          3: 0.5,
          4: 1.25,
          5: 1.5,
          6: 2.5
        },
        "6": {
          3: 0.4,
          4: 0.75,
          5: 1,
          6: 1.5
        },
        "7": {
          3: 0.3,
          4: 0.5,
          5: 0.6,
          6: 0.75
        },
        "8": {
          3: 0.3,
          4: 0.5,
          5: 0.6,
          6: 0.75
        },
        "9": {
          3: 0.2,
          4: 0.3,
          5: 0.4,
          6: 0.5
        },
        "10": {
          3: 0.2,
          4: 0.3,
          5: 0.4,
          6: 0.5
        },
        "11": {
          3: 0.05,
          4: 0.1,
          5: 0.15,
          6: 0.2
        },
        "12": {
          3: 0.05,
          4: 0.1,
          5: 0.15,
          6: 0.2
        },
        "13": {
          3: 0.05,
          4: 0.1,
          5: 0.15,
          6: 0.2
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
        eEvent["onSetMask"] = "onSetMask";
        eEvent["onSetBase"] = "onSetBase";
        eEvent["updateBaseBet"] = "updateBaseBet";
        eEvent["updateWin"] = "updateWin";
        eEvent["onAddEffect"] = "onAddEffect";
        eEvent["onDelEffect"] = "onDelEffect";
        eEvent["onSymbolClick"] = "onSymbolClick";
        eEvent["onRateNumMove"] = "onRateNumMove";
        eEvent["onRateNumAdd"] = "onRateNumAdd";
        eEvent["onSymbolBreak"] = "onSymbolBreak";
        eEvent["onSetAuto"] = "onSetAuto";
        eEvent["onAutoClose"] = "onAutoClose";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        BGM_MG: "sound/BGM_MG",
        BGM_FG: "sound/BGM_FG",
        Big_win: "sound/Big_win",
        Big_win_end: "sound/Big_win_end",
        Chest_hit: "sound/Chest_hit",
        Chest_show: "sound/Chest_show",
        Combo_f_x2: "sound/Combo_f_x2",
        Combo_f_x3: "sound/Combo_f_x3",
        Combo_f_x4: "sound/Combo_f_x4",
        Combo_f_x2_fast: "sound/Combo_f_x2_fast",
        Combo_f_x3_fast: "sound/Combo_f_x3_fast",
        Combo_f_x4_fast: "sound/Combo_f_x4_fast",
        COMMON_BTN: "sound/COMMON_BTN",
        COMMON_CANCEL_BTN: "sound/COMMON_CANCEL_BTN",
        Extra_Bet_On: "sound/Extra_Bet_On",
        FG_Add: "sound/FG_Add",
        FG_cut: "sound/FG_cut",
        FG_End: "sound/FG_End",
        FG_gate_open: "sound/FG_gate_open",
        FG_getX: "sound/FG_getX",
        FG_Go: "sound/FG_Go",
        FG_X: "sound/FG_X",
        Fiop1: "sound/Fiop1",
        Into_Info_L: "sound/Into_Info_L",
        Man_ScatterWin: "sound/Man_ScatterWin",
        Mega_win: "sound/Mega_win",
        MG_NearWin: "sound/MG_NearWin",
        MG_NearWin_v2: "sound/MG_NearWin_v2",
        MG_NearWin_v3: "sound/MG_NearWin_v3",
        Reel_Stop: "sound/Reel_Stop",
        Scatter_bell: "sound/Scatter_bell",
        Scatter1: "sound/Scatter1",
        Scatter2: "sound/Scatter2",
        Scatter3: "sound/Scatter3",
        Small_win_01: "sound/Small_win_01",
        Small_win_02: "sound/Small_win_02",
        Small_win_03: "sound/Small_win_03",
        Spin: "sound/Spin",
        Super_win: "sound/Super_win",
        Wheel_btn_press: "sound/Wheel_btn_press",
        Wheel_chosen: "sound/Wheel_chosen",
        Wheel_clock: "sound/Wheel_clock",
        Wheel_fg_info: "sound/Wheel_fg_info",
        Wheel_pops_up: "sound/Wheel_pops_up",
        Wheel_spinning: "sound/Wheel_spinning",
        WILD_H: "sound/WILD_H"
      }); //////////////////////////

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AlbbGame", ['./AlbbCtrl.ts', './AlbbDef.ts', './AlbbModel.ts', './AlbbScene.ts', './AlbbUtils.ts', './AlbbGameView.ts', './Albb_btnEffect.ts', './Albb_helpTip.ts', './Albb_setBase.ts', './Albb_shake.ts', './Albb_symbol.ts', './Albb_symbolEffectRoot.ts', './Albb_symbolInfo.ts', './Albb_symbolItem.ts', './Albb_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/AlbbGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './AlbbDef.ts', './AlbbModel.ts', './AlbbCtrl.ts', './ViewManager.ts', './AlbbUtils.ts', './GUtil.ts', './Albb_symbol.ts', './Albb_symbolItem.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Label, tween, v3, UITransform, instantiate, Toggle, UIOpacity, Sprite, find, Tween, GameDef, ConfigManager, EventManager, NetManager, eEvent, eZindex, eRunStatus, eSound, eConstDef, eProto, cRate, AlbbModel, AlbbCtrl, ViewManager, AlbbUtils, GUtil, Albb_symbol, Albb_symbolItem, Common, AudioManager;
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
      Button = module.Button;
      sp = module.sp;
      Label = module.Label;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Toggle = module.Toggle;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      find = module.find;
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
      eEvent = module.eEvent;
      eZindex = module.eZindex;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
      eProto = module.eProto;
      cRate = module.cRate;
    }, function (module) {
      AlbbModel = module.AlbbModel;
    }, function (module) {
      AlbbCtrl = module.AlbbCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      AlbbUtils = module.AlbbUtils;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      Albb_symbol = module.default;
    }, function (module) {
      Albb_symbolItem = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36;
      cclegacy._RF.push({}, "ba1aaSjqKpE35B3m1YGtu6U", "AlbbGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var AlbbGameView = exports('default', (_dec = ccclass("AlbbGameView"), _dec2 = menu("game/AlbbGame/AlbbGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Albb_symbol), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(sp.Skeleton), _dec13 = property(sp.Skeleton), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Button), _dec26 = property(sp.Skeleton), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(sp.Skeleton), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(sp.Skeleton), _dec36 = property(sp.Skeleton), _dec37 = property(sp.Skeleton), _dec38 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(AlbbGameView, _GameDef$BaseView);
        function AlbbGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_mask_0", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_mask_1_6", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Albb_symbolList", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_setBase", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_Node_bg", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_symRate", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_winRate", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWinFreeEnd", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeTimesFreeEnd", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWinBig", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_winScoreTip", _descriptor20, _assertThisInitialized(_this));
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor22, _assertThisInitialized(_this));
          // @property(sp.SkeletonData)
          // arrBgSpFrame: sp.SkeletonData[] = [];
          // @property(SpriteFrame)
          // arrRoomSpFrame: SpriteFrame[] = [];
          _initializerDefineProperty(_this, "Button_auto", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_auto", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winRate", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layout_winTip", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exfire", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exup_bg", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_exHelp", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_ex", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exHelp", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zp_light", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lunchEnter", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "door_light", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ExtraBet_Declare", _descriptor36, _assertThisInitialized(_this));
          //按钮事件回调
          _this.Button_exClick = false;
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          _this.isStopFreeEnd = false;
          _this.isStopBigWin = false;
          _this.freeRate = 1;
          return _this;
        }
        var _proto = AlbbGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, AlbbCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.onRateNumAdd, this.onRateNumAdd, this);
          // EventManager.instance.on(AlbbDef.eEvent.onRateNumMove, this.onRateNumMove, this);
          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          // EventManager.instance.on(
          //     AlbbDef.eEvent.onSymbolClick,
          //     (symbol?: AlbbDef.IPosMsg, symbolNode?: Node, pos?: Vec3) => {
          //         if (
          //             AlbbModel.instance.gameStatus == AlbbDef.eRunStatus.NONE &&
          //             !AlbbModel.instance.isAuto &&
          //             AlbbModel.instance.freeStatus == AlbbDef.eRunStatus.NONE &&
          //             !AlbbCtrl.instance.isReqBet &&
          //             AlbbModel.instance.totalFreeTimes == 0
          //         ) {
          //             AlbbCtrl.instance.reqBet();
          //         }
          //     },
          //     this
          // );

          EventManager.instance.on(eEvent.onAutoClose, function (times) {
            AlbbModel.instance.isAuto = false;
            _this2.Button_run.interactable = true;
            _this2.Button_auto.interactable = true;
            _this2.Skeleton_auto.setAnimation(0, "idle", true);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onRateNumAdd, this.onRateNumAdd, this);
          // EventManager.instance.off(AlbbDef.eEvent.onRateNumMove, this.onRateNumMove, this);
          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          // EventManager.instance.off(AlbbDef.eEvent.onSymbolClick);
          EventManager.instance.off(eEvent.onSetAuto);
          EventManager.instance.off(eEvent.onAutoClose);
          AlbbModel.instance.clearGameData();
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
              //                // AlbbCtrl.instance.reEnterRoom();

              if (AlbbModel.instance.isAuto && AlbbCtrl.instance.isReqBet) {
                AlbbCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          this.Skeleton_setBase.setAnimation(0, "intro", false);
          this.Skeleton_setBase.addAnimation(0, "off", true);
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = AlbbUtils.instance.numberFormat(AlbbModel.instance.isExModel ? AlbbModel.instance.curBet * 1.5 : AlbbModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          this.Label_winRate.node.parent.active = true;
          AlbbModel.instance.curBet = 1;
          AlbbUtils.instance.loadRes_icon(function () {
            AlbbCtrl.instance.reqEnterRoom();
            _this4.Node_mask_0.getComponent(UITransform).priority = eZindex.MASK;
            _this4.Node_mask_1_6.getComponent(UITransform).priority = eZindex.MASK;
          });
          this.Label_bet.string = AlbbUtils.instance.numberFormat(AlbbModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
        };
        _proto.onToggleClick = function onToggleClick(event) {
          // switch (event.node.name) {
          //     case "Toggle_ex": {
          //         break;
          //     }
          // }
        };
        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          if (event.target.name != "Button_exHelp" && this.exHelp.active) {
            this.exHelp.active = false;
          }
          switch (event.target.name) {
            case "Node_touch":
              {
                if (AlbbModel.instance.gameStatus == eRunStatus.NONE && !AlbbModel.instance.isAuto && AlbbModel.instance.freeStatus == eRunStatus.NONE && !AlbbCtrl.instance.isReqBet && AlbbModel.instance.totalFreeTimes == 0) {
                  AlbbCtrl.instance.reqBet();
                }
                break;
              }
            case "Toggle_ex":
              {
                if (AlbbModel.instance.isAuto || AlbbModel.instance.betResult && AlbbModel.instance.betResult.FreeInfo.Count > 0 || AlbbModel.instance.gameStatus != eRunStatus.NONE) {
                  var curToggle = event.target.getComponent(Toggle);
                  curToggle.isChecked = !curToggle.isChecked;
                  break;
                }
                AlbbModel.instance.isExModel = !AlbbModel.instance.isExModel;
                this.ExtraBet_Declare.node.active = AlbbModel.instance.isExModel;
                this.exfire.setAnimation(0, "fire", false);
                if (AlbbModel.instance.isExModel) {
                  this.exfire.addAnimation(0, "idle", true);
                  AlbbUtils.instance.playOneShot(eSound.Extra_Bet_On);
                  this.ExtraBet_Declare.setAnimation(0, "ExtraBet_Declare", false);
                } else {
                  this.ExtraBet_Declare.setAnimation(0, "None", false);
                  this.exfire.addAnimation(0, "picture", true);
                }
                this.updateBaseBet();
                this.Skeleton_setBase.setAnimation(0, AlbbModel.instance.isExModel ? "on" : "off", true);
                AlbbModel.instance.baoXiangRate = AlbbModel.instance.isExModel ? 2 : 1;

                //
                for (var i = 0; i < this.Albb_symbolList.length; i++) {
                  this.Albb_symbolList[i].doExChange();
                }
                break;
              }
            case "Button_fast":
              {
                //快速停止
                AlbbModel.instance.isQuickStop = !AlbbModel.instance.isQuickStop;
                break;
              }
            case "Button_quay":
              {
                AlbbUtils.instance.playOneShot(eSound.Wheel_btn_press);
                this.doStartFreeRoll();
                break;
              }
            case "Button_ex":
              {
                this.Button_exClick = !this.Button_exClick;
                tween(this.exup_bg).to(0.25, {
                  scale: v3(this.Button_exClick ? 1 : 0, this.exup_bg.scale.y, this.exup_bg.scale.z)
                }, {
                  easing: "circOut"
                }).start();
                tween(this.Button_exHelp).to(0.25, {
                  position: v3(this.Button_exClick ? 325 : 75, 0, 0)
                }, {
                  easing: "circOut"
                }).start();
                break;
              }
            case "Button_exHelp":
              {
                this.exHelp.active = !this.exHelp.active;
                break;
              }
            case "Node_bigWinEffect":
              {
                this.isStopBigWin = true;
                break;
              }
            case "Node_character":
              {
                //freeEnd
                this.isStopFreeEnd = true;
                AlbbUtils.instance.playOneShot(eSound.FG_cut);
                break;
              }
            //返回
            case "Button_menu":
              {
                //                // this.Node_action.active = !this.Node_action.active;
                this.Node_menu.active = !this.Node_menu.active;
                AlbbUtils.instance.playOneShot(this.Node_menu.active ? eSound.COMMON_BTN : eSound.COMMON_CANCEL_BTN);
                break;
              }
            case "Button_return":
              {
                AlbbCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_history":
              {
                GUtil.openRecord("slotAlibaba");
                break;
              }
            case "Button_rank":
              {
                GUtil.openRank("slotAlibaba");
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", AlbbUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                break;
              }
            case "Button_auto":
              {
                if (AlbbModel.instance.freeStatus != eRunStatus.NONE) {
                  break;
                }
                AlbbModel.instance.isAuto = !AlbbModel.instance.isAuto;
                this.Button_run.interactable = !AlbbModel.instance.isAuto;
                this.Skeleton_auto.setAnimation(0, AlbbModel.instance.isAuto ? "on" : "idle", true);
                if (AlbbModel.instance.gameStatus == eRunStatus.NONE && AlbbModel.instance.isAuto) {
                  AlbbCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_run":
              {
                //                // this.doStartRun();
                if (AlbbCtrl.instance.isReqBet || AlbbModel.instance.gameStatus != eRunStatus.NONE || AlbbModel.instance.freeStatus != eRunStatus.NONE || AlbbModel.instance.totalFreeTimes > 0) {
                  break;
                }
                this.Button_run.interactable = false;
                tween(event.target).delay(2).call(function () {
                  if (!AlbbModel.instance.isAuto && AlbbModel.instance.gameStatus == eRunStatus.NONE) {
                    _this5.Button_run.interactable = true;
                  }
                }).start();
                AlbbUtils.instance.playOneShot(eSound.Spin);
                AlbbCtrl.instance.reqBet();
                break;
              }
            case "Button_setBase":
              {
                if (AlbbModel.instance.gameStatus != eRunStatus.NONE || AlbbModel.instance.isAuto || AlbbModel.instance.freeStatus != eRunStatus.NONE) {
                  return;
                }
                this.Skeleton_setBase.setAnimation(0, "intro", false);
                Common.loadPopBuddle("prefab/Node_setBase", AlbbUtils.instance.bundle, function () {}, function (help) {
                  _this5.Skeleton_setBase.addAnimation(0, AlbbModel.instance.isExModel ? "on" : "off", true);
                  var setBase = instantiate(help);
                  ViewManager.instance.popNodeView(setBase, true);
                }, true);
                break;
              }
          }
        };
        _proto.onSetMask = function onSetMask(iCol, posX) {
          gts.Debug.Log("==onSetMask=posX=" + posX);
          if (iCol == 0) {
            if (!this.Node_mask_0.active) {
              this.Node_mask_0.active = true;
              this.Node_mask_0.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_mask_0.getComponent(UIOpacity)).to(0.2, {
                opacity: 180
              }).start();
            }
          } else {
            if (!this.Node_colEffect.active) {
              this.Node_colEffect.active = true;
              this.Node_colEffect.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
              this.Node_mask_1_6.active = true;
              this.Node_mask_1_6.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_mask_1_6.getComponent(UIOpacity)).to(0.2, {
                opacity: 180
              }).start();
              AlbbModel.instance.gameStatus = eRunStatus.NEARWIN;
              for (var i = 0; i < iCol + 1; i++) {
                this.Albb_symbolList[i].doScatterNearWin();
              }
              if (AlbbModel.instance.scatterCounts < 4) {
                AlbbUtils.instance.playSound(eSound.MG_NearWin, true);
              } else {
                AlbbUtils.instance.playSound(eSound.MG_NearWin_v3, true);
              }
              this.door_light.node.active = true;
            }
            var setCol = iCol + 1;
            if (setCol < this.Albb_symbolList.length) {
              if (AlbbModel.instance.scatterCounts < 4 && setCol == this.Albb_symbolList.length - 1) {
                AlbbUtils.instance.stopSound(eSound.MG_NearWin);
                AlbbUtils.instance.playSound(eSound.MG_NearWin_v2, true);
              }
              this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL + 100;
              this.Node_colEffect.setPosition(this.Albb_symbolList[iCol + 1].node.getPosition().x, this.Node_colEffect.position.y);
            }
          }
        };
        _proto.showMask = function showMask(isShow) {
          var _this6 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            //            //mask hide
            if (this.Node_mask_0.active) {
              tween(this.Node_mask_0.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                _this6.Node_mask_0.active = false;
              }).start();
            }
            if (this.Node_mask_1_6.active) {
              tween(this.Node_mask_1_6.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                _this6.Node_mask_1_6.active = false;
              }).start();
            }
            return;
          }
          //        //mask show
          if (!this.Node_mask_0.active) {
            this.Node_mask_0.active = true;
            this.Node_mask_0.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask_0.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: 180
            }).start();
          }
          if (!this.Node_mask_1_6.active) {
            this.Node_mask_1_6.active = true;
            this.Node_mask_1_6.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask_1_6.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: 180
            }).start();
          }
        };
        _proto.doStartRun = function doStartRun() {
          var _this7 = this;
          if (AlbbModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          this.Label_symRate.string = "...";
          AlbbModel.instance.scatterCounts = 0;
          this.clearWinTip();
          if (AlbbModel.instance.freeStatus != eRunStatus.NONE) {
            this.Skeleton_Node_bg.setAnimation(0, "spin", true);
          } else {
            AlbbModel.instance.curTotalWin = 0;
            this.Label_win.string = "0.00";
            AlbbModel.instance.totalWinRate = 1;
            this.Label_winRate.string = "x" + AlbbModel.instance.totalWinRate;
          }
          this.Label_winScoreTip.node.active = false;
          this.Button_run.interactable = false;

          //        // EventManager.instance.emit(AlbbDef.eEvent.updateWin, 0);

          var children = this.Node_effectRoot.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var nodeChild = _step.value;
            if (nodeChild.name != "Node_symbol") {
              nodeChild.destroyFromParent();
            }
          }
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, i, startDelay, stopDelay;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  for (i = 0; i < _this7.Albb_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = AlbbModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = AlbbModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    stopDelay += AlbbModel.instance.specialStartCol > 0 && i > AlbbModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (i - AlbbModel.instance.specialStartCol) : 0;
                    arrPro.push(_this7.Albb_symbolList[i].doStart(startDelay, stopDelay));
                  }
                  _context.next = 4;
                  return Promise.all(arrPro);
                case 4:
                  _this7.scheduleOnce(_this7.doRunEnd, 0);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          AlbbModel.instance.gameStatus = eRunStatus.RUNNING;
          if (AlbbModel.instance.freeStatus == eRunStatus.RUNNING) {
            var Node_freeStyle = this.Node_free.getChildByName("Node_freeStyle");
            var Label_freeTimes = Node_freeStyle.getChildByName("Label_freeTimes");
            Label_freeTimes.getComponent(Label).string = "" + AlbbModel.instance.totalFreeTimes;
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this8 = this;
            var i, Node_freeStyle, Label_freeTimes, symRate, result, _i, resultList, _loop, _i2, delayStart, totalRate, arrPro, _i3;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  AlbbModel.instance.gameStatus = eRunStatus.CLEAR;
                  //        // this.Button_run.interactable = false;

                  if (this.Node_colEffect.active) {
                    AlbbUtils.instance.stopSound(eSound.MG_NearWin);
                    AlbbUtils.instance.stopSound(eSound.MG_NearWin_v3);
                    AlbbUtils.instance.stopSound(eSound.MG_NearWin_v2);
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this8.Node_colEffect.active = false;
                      if (AlbbModel.instance.scatterCounts >= 4) {
                        AlbbUtils.instance.playSound(eSound.Scatter_bell);
                        _this8.scheduleOnce(function () {
                          AlbbUtils.instance.playSound(eSound.Man_ScatterWin);
                        }, 0.5);
                      } else {
                        _this8.door_light.node.active = false;
                      }
                    }).start();
                    for (i = 0; i < this.Albb_symbolList.length; i++) {
                      this.Albb_symbolList[i].stopScatterNearWin();
                    }
                  }
                  if (AlbbModel.instance.freeStatus != eRunStatus.NONE && AlbbModel.instance.scatterCounts >= 4) {
                    AlbbModel.instance.totalFreeTimes = AlbbModel.instance.betResult.FreeInfo.Count;
                    Node_freeStyle = this.Node_free.getChildByName("Node_freeStyle");
                    Label_freeTimes = Node_freeStyle.getChildByName("Label_freeTimes");
                    Label_freeTimes.getComponent(Label).string = "" + AlbbModel.instance.totalFreeTimes;
                    AlbbUtils.instance.playOneShot(eSound.FG_Add);
                  }
                  symRate = 1;
                  result = AlbbModel.instance.betResult.Res[0];
                  for (_i = 0; _i < result.AllPosMsg.length; _i++) {
                    symRate *= result.AllPosMsg[_i].length;
                  }
                  AlbbUtils.instance.updateLabelNomal(this.Label_symRate, symRate);
                  resultList = AlbbModel.instance.betResult.Res;
                  AlbbModel.instance.specialStartCol = 0;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var result, resultNext, _arrPro, strSound, _i4, Node_winRate, Label_rate, keyList, _i5, _keyList, sym, info, len, lines, base, _i6, _i7, _symRate, _i8, _arrPro2, _i9;
                    return _regeneratorRuntime().wrap(function _loop$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          result = resultList[_i2];
                          if (_i2 > 0) {
                            Albb_symbolItem.scatterNums = 0;
                          }
                          if (!(result.RewardMoney > 0)) {
                            _context2.next = 53;
                            break;
                          }
                          resultNext = resultList[_i2 + 1];
                          _this8.scheduleOnce(function () {
                            _this8.showMask();
                          }, 0.5);
                          _arrPro = []; //
                          strSound = "";
                          _context2.t0 = _i2;
                          _context2.next = _context2.t0 === 0 ? 10 : _context2.t0 === 1 ? 10 : _context2.t0 === 2 ? 12 : 14;
                          break;
                        case 10:
                          strSound = AlbbModel.instance.isQuickStop ? "sound/Combo_f_x2_fast" : "sound/Combo_f_x2";
                          return _context2.abrupt("break", 16);
                        case 12:
                          strSound = AlbbModel.instance.isQuickStop ? "sound/Combo_f_x3_fast" : "sound/Combo_f_x3";
                          return _context2.abrupt("break", 16);
                        case 14:
                          strSound = AlbbModel.instance.isQuickStop ? "sound/Combo_f_x4_fast" : "sound/Combo_f_x4";
                          return _context2.abrupt("break", 16);
                        case 16:
                          AlbbUtils.instance.playOneShot(strSound);
                          _arrPro = [];
                          for (_i4 = 0; _i4 < _this8.Albb_symbolList.length; _i4++) {
                            _arrPro.push(_this8.Albb_symbolList[_i4].doNumCollect());
                          }
                          _context2.next = 21;
                          return Promise.all(_arrPro);
                        case 21:
                          _this8.Layout_winTip.removeAllChildren();
                          Node_winRate = instantiate(_this8.Node_winRate);
                          Node_winRate.active = true;
                          Node_winRate.position = v3(262, 0, 0);
                          _this8.Layout_winTip.addChild(Node_winRate);
                          Label_rate = Node_winRate.getChildByName("Label_rate");
                          Label_rate.getComponent(Label).string = "x" + AlbbModel.instance.totalWinRate;
                          tween(Label_rate).to(0.3, {
                            scale: v3(1.2, 1.2, 1)
                          }).to(0.3, {
                            scale: v3(1.0, 1.0, 1.0)
                          }).start();
                          tween(Node_winRate).delay(1.5).destroySelf().start();
                          _this8.scheduleOnce(function () {
                            AlbbUtils.instance.playOneShot(eSound.FG_X);
                            var xn_light = Node_winRate.getChildByName("xn_light");
                            xn_light.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                            xn_light.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
                          });

                          // let wiNInfo: { sym: number; count: number; base: number; lines: number }[] = AlbbUtils.instance.getWiNInfo(result);
                          keyList = Object.keys(result.RewardMsg);
                          for (_i5 = 0, _keyList = keyList; _i5 < _keyList.length; _i5++) {
                            sym = _keyList[_i5];
                            info = result.RewardMsg[sym];
                            len = info[0];
                            lines = info[1];
                            base = cRate[sym]["" + len];
                            _this8.showWinTip(sym, len, base, lines);
                          }
                          AlbbModel.instance.isExModel ? AlbbModel.instance.curBet * 1.5 : AlbbModel.instance.curBet;
                          if (AlbbModel.instance.freeStatus != eRunStatus.NONE) {
                            _this8.Skeleton_Node_bg.setAnimation(0, "win", false);
                            _this8.Skeleton_Node_bg.addAnimation(0, "idle", true);
                          }

                          //                //gengxin
                          AlbbUtils.instance.updateLabelAddNf(_this8.Label_win, AlbbModel.instance.curTotalWin + result.RewardMoney, false, AlbbModel.instance.curTotalWin);
                          AlbbModel.instance.curTotalWin += result.RewardMoney;
                          //                // EventManager.instance.emit(AlbbDef.eEvent.updateWin, AlbbModel.instance.curTotalWin);

                          if (AlbbModel.instance.isQuickStop) {
                            AlbbUtils.instance.playSound(eSound.Combo_f_x2_fast);
                          } else {
                            AlbbUtils.instance.playSound(eSound.Combo_f_x2);
                          }
                          _arrPro = [];
                          for (_i6 = 0; _i6 < _this8.Albb_symbolList.length; _i6++) {
                            _arrPro.push(_this8.Albb_symbolList[_i6].doClear());
                          }
                          _context2.next = 42;
                          return Promise.all(_arrPro);
                        case 42:
                          _this8.showMask(false);

                          //drop
                          _arrPro = [];
                          for (_i7 = 0; _i7 < _this8.Albb_symbolList.length; _i7++) {
                            _arrPro.push(_this8.Albb_symbolList[_i7].doDrop(resultNext));
                          }
                          _context2.next = 47;
                          return Promise.all(_arrPro);
                        case 47:
                          gts.Debug.Log("==========doDrop========");
                          _symRate = 1;
                          for (_i8 = 0; _i8 < resultNext.AllPosMsg.length; _i8++) {
                            _symRate *= resultNext.AllPosMsg[_i8].length;
                          }
                          if (parseInt(_this8.Label_symRate.string) != _symRate) {
                            AlbbUtils.instance.updateLabelNomal(_this8.Label_symRate, _symRate);
                          }

                          // gts.Debug.Log("=doEnd=" + i + "==" + "=result=" + JSON.stringify(result));
                          _context2.next = 59;
                          break;
                        case 53:
                          if (!(AlbbModel.instance.freeStatus != eRunStatus.NONE)) {
                            _context2.next = 59;
                            break;
                          }
                          _this8.Skeleton_Node_bg.setAnimation(0, "idle", true);
                          _arrPro2 = [];
                          for (_i9 = 0; _i9 < _this8.Albb_symbolList.length; _i9++) {
                            _arrPro2.push(_this8.Albb_symbolList[_i9].doNumCollect());
                          }
                          _context2.next = 59;
                          return Promise.all(_arrPro2);
                        case 59:
                        case "end":
                          return _context2.stop();
                      }
                    }, _loop);
                  });
                  _i2 = 0;
                case 12:
                  if (!(_i2 < resultList.length)) {
                    _context3.next = 17;
                    break;
                  }
                  return _context3.delegateYield(_loop(), "t0", 14);
                case 14:
                  _i2++;
                  _context3.next = 12;
                  break;
                case 17:
                  this.showMask(false);
                  delayStart = 0.25;
                  if (!(AlbbModel.instance.curTotalWin > 0)) {
                    _context3.next = 29;
                    break;
                  }
                  if (!(AlbbModel.instance.freeStatus == eRunStatus.NONE)) {
                    _context3.next = 23;
                    break;
                  }
                  _context3.next = 23;
                  return this.doShowBigWin(AlbbModel.instance.curTotalWin);
                case 23:
                  totalRate = AlbbModel.instance.curTotalWin / (AlbbModel.instance.isExModel ? AlbbModel.instance.curBet * 1500 : AlbbModel.instance.curBet * 1000);
                  if (totalRate < 6 && totalRate >= 1) {
                    this.Label_winScoreTip.node.active = true;
                    this.Label_winScoreTip.string = "";
                    AlbbUtils.instance.updateLabelAddNf(this.Label_winScoreTip, AlbbModel.instance.curTotalWin, false);
                    this.scheduleOnce(function () {
                      _this8.Label_winScoreTip.node.active = false;
                    }, 1.5);
                    if (totalRate < 2) {
                      AlbbUtils.instance.playOneShot(eSound.Small_win_01);
                    } else if (totalRate < 4) {
                      AlbbUtils.instance.playOneShot(eSound.Small_win_02);
                    } else {
                      AlbbUtils.instance.playOneShot(eSound.Small_win_03);
                    }
                  }
                  delayStart = 1.5;
                  if (AlbbModel.instance.endBalance > 0) {
                    AlbbModel.instance.curBalance = AlbbModel.instance.endBalance;
                    AlbbModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                  _context3.next = 30;
                  break;
                case 29:
                  if (AlbbModel.instance.isQuickStop) ;
                case 30:
                  AlbbModel.instance.gameStatus = eRunStatus.NONE;

                  //        //free and auto
                  if (!(AlbbModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context3.next = 46;
                    break;
                  }
                  AlbbModel.instance.totalFreeWin = AlbbModel.instance.curTotalWin;
                  this.Node_bigWin.active = false;
                  if (!(AlbbModel.instance.totalFreeTimes > 0)) {
                    _context3.next = 38;
                    break;
                  }
                  this.scheduleOnce(function () {
                    AlbbCtrl.instance.reqBet();
                  }, delayStart);
                  _context3.next = 44;
                  break;
                case 38:
                  AlbbModel.instance.totalRate = AlbbModel.instance.totalFreeWin / (AlbbModel.instance.curBet * 1000);
                  this.curBigWinLevel = AlbbModel.instance.totalRate < 10 ? 0 : AlbbModel.instance.totalRate < 15 ? 1 : 2;

                  //                //大奖
                  _context3.next = 42;
                  return this.doShowBigWin(AlbbModel.instance.totalFreeWin);
                case 42:
                  AlbbModel.instance.freeStatus = eRunStatus.END;
                  this.doEndFree();
                case 44:
                  _context3.next = 56;
                  break;
                case 46:
                  if (!(AlbbModel.instance.totalFreeTimes > 0)) {
                    _context3.next = 55;
                    break;
                  }
                  this.door_light.node.active = true;
                  arrPro = [];
                  for (_i3 = 0; _i3 < this.Albb_symbolList.length; _i3++) {
                    arrPro.push(this.Albb_symbolList[_i3].doScatterBlink());
                  }
                  _context3.next = 52;
                  return Promise.all(arrPro);
                case 52:
                  this.showFree();
                  _context3.next = 56;
                  break;
                case 55:
                  if (AlbbModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      AlbbCtrl.instance.reqBet();
                    }, delayStart);
                  } else {
                    this.Button_run.interactable = true;
                  }
                case 56:
                case "end":
                  return _context3.stop();
              }
            }, _callee2, this);
          }));
          function doRunEnd() {
            return _doRunEnd.apply(this, arguments);
          }
          return doRunEnd;
        }();
        _proto.doShowBigWin = function doShowBigWin(destWin, schDelay) {
          var _this9 = this;
          if (schDelay === void 0) {
            schDelay = 0.5;
          }
          return new Promise(function (resolve, reject) {
            var rate = destWin / (AlbbModel.instance.isExModel ? AlbbModel.instance.curBet * 1500 : AlbbModel.instance.curBet * 1000);
            if (destWin <= 1 || rate < 6) {
              //                //30
              resolve();
              return;
            }
            _this9.scheduleOnce(function () {
              AlbbUtils.instance.pauseMusic();
              //                //大奖显示
              _this9.Node_bigWin.parent = _this9.node;
              // this.Node_bigWin.getComponent(UITransform).priority = 52;
              _this9.Node_bigWin.getComponent(UITransform).priority = 52;
              _this9.Node_bigWin.active = true;
              _this9.Node_bigWin.scale = v3(0.5, 0.5, 1);
              _this9.isStopBigWin = false;
              var Node_bigWinEffect = _this9.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
              var level = rate < 10 ? 0 : rate < 25 ? 1 : 2;
              var ani = ["bigwin_intro", "megawin_intro", "superwin_intro"];
              var aniIdle = ["bigwin_idle", "megawin_idle", "superwin_idle"];
              var TrackEntry = Node_bigWinEffect.setAnimation(0, ani[level], false);
              Node_bigWinEffect.addAnimation(0, aniIdle[level], true);
              tween(_this9.Node_bigWin).to(0.1, {
                scale: v3(1.2, 1.2, 1)
              }, {
                easing: "quadOut"
              }).to(0.05, {
                scale: v3(1, 1, 1)
              }, {
                easing: "quadIn"
              }).call(function () {
                if (level == 0) {
                  AlbbUtils.instance.playSound(eSound.Big_win, true);
                } else if (level == 1) {
                  AlbbUtils.instance.playSound(eSound.Mega_win, true);
                } else if (level == 2) {
                  AlbbUtils.instance.playSound(eSound.Super_win, true);
                }
                var totalTime = TrackEntry.animation.duration;
                var dt = 0.05;
                var updateTimes = totalTime / dt;
                var disWin = Math.floor(destWin / updateTimes);
                var curTotalWin = 0;
                tween(_this9.Label_totalWinBig.node).repeatForever(tween(_this9.Label_totalWinBig.node).delay(dt).call(function () {
                  var doEnd = function doEnd(delay) {
                    if (delay === void 0) {
                      delay = 1.0;
                    }
                    var ani = ["bigwin_idle", "megawin_idle", "superwin_idle"];
                    if (_this9.isStopBigWin && Node_bigWinEffect.animation != ani[level]) {
                      Node_bigWinEffect.setAnimation(0, ani[level], true);
                      delay = 2.0;
                    }
                    _this9.isStopBigWin = false;
                    if (level == 0) {
                      AlbbUtils.instance.stopSound(eSound.Big_win);
                    } else if (level == 1) {
                      AlbbUtils.instance.stopSound(eSound.Mega_win);
                    } else if (level == 2) {
                      AlbbUtils.instance.stopSound(eSound.Super_win);
                    }
                    AlbbUtils.instance.playSound(eSound.Big_win_end);
                    Tween.stopAllByTarget(_this9.Node_bigWin);
                    Tween.stopAllByTarget(_this9.Label_totalWinBig.node);
                    curTotalWin = destWin;
                    tween(_this9.Node_bigWin).delay(delay).call(function () {
                      _this9.Node_bigWin.active = false;
                      AlbbUtils.instance.resumeMusic();
                      resolve();
                    }).start();
                    var inter = Common.numFormatInt(curTotalWin / 1000);
                    var digit = AlbbUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                    _this9.Label_totalWinBig.string = "" + inter + digit + "K";
                  };
                  if (curTotalWin < destWin) {
                    curTotalWin += disWin;
                    if (curTotalWin >= destWin) {
                      curTotalWin = destWin;
                      doEnd(AlbbModel.instance.isAuto || AlbbModel.instance.freeStatus == eRunStatus.NONE ? 2.0 : 4);
                      var inter = Common.numFormatInt(curTotalWin / 1000);
                      var digit = AlbbUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                      _this9.Label_totalWinBig.string = "" + inter + digit + "K";
                    } else {
                      var _inter = Common.numFormatInt(curTotalWin / 1000);
                      var _digit = AlbbUtils.instance.numberFormatFloatD(curTotalWin / 1000, 2.0);
                      _this9.Label_totalWinBig.string = "" + _inter + _digit + "K";
                    }
                  }
                  if (_this9.isStopBigWin) {
                    //                                            //点击停止
                    doEnd();
                  }
                })).start();
              }).start();
            }, schDelay);
          });
        };
        _proto.clearWinTip = function clearWinTip() {
          this.Layout_winTip.removeAllChildren();
        };
        _proto.showWinTip = function showWinTip(sym, count, base, lines) {
          var Node_winTip = instantiate(this.Node_winTip);
          Node_winTip.active = true;
          var Sprite_icon = Node_winTip.getChildByName("Sprite_icon").getComponent(Sprite);
          Sprite_icon.spriteFrame = AlbbUtils.instance.getSymbolIcon(sym);
          var Label_num = find("Sprite_icon/Label_num", Node_winTip).getComponent(Label);
          Label_num.string = "" + count;
          var Label_base = Node_winTip.getChildByName("Label_base").getComponent(Label);
          Label_base.string = "" + AlbbUtils.instance.numberFormat(base, 2);
          var Label_lines = Node_winTip.getChildByName("Label_lines").getComponent(Label);
          Label_lines.string = "" + lines;
          var Label_total = Node_winTip.getChildByName("Label_total").getComponent(Label);
          var total = Math.floor(base * 1000);
          var curTotal = lines * total / 1000; //AlbbModel.instance.curBet *
          var inter = Common.numFormatInt(curTotal);
          var digit = AlbbUtils.instance.numberFormatD(curTotal, 2.0);
          Label_total.string = "=" + inter + digit + "K";
          var Label_soecialRate = Node_winTip.getChildByName("Label_soecialRate").getComponent(Label);
          Label_soecialRate.node.active = true; //AlbbModel.instance.freeStatus != AlbbDef.eRunStatus.NONE;
          if (Label_soecialRate.node.active) {
            Label_soecialRate.string = "x" + AlbbModel.instance.totalWinRate;
          }
          var Label_soecialRate_0 = Node_winTip.getChildByName("Label_soecialRate_0");
          var Label_soecialRate_1 = Node_winTip.getChildByName("Label_soecialRate_1");
          Label_soecialRate_0.active = Label_soecialRate.node.active;
          Label_soecialRate_1.active = Label_soecialRate.node.active;
          tween(Node_winTip.getComponent(UIOpacity)).delay(1.5).call(function () {
            Node_winTip.destroyFromParent();
          }).start();
          this.Layout_winTip.addChild(Node_winTip);
        };
        _proto.hideFree = function hideFree() {
          var _this10 = this;
          this.unschedule(this.hideFree);

          //背景
          this.Skeleton_Node_bg.setAnimation(0, "idle", true);
          this.Skeleton_Node_bg.node.active = false;
          this.zp_light.setAnimation(0, "normal_idle", true);
          this.Node_ex.active = true;
          this.Label_winRate.node.parent.active = true;
          // this.Node_symbolRoot.spriteFrame = this.arrRoomSpFrame[0];

          //        // if (AlbbModel.instance.freeStatus != AlbbDef.eRunStatus.NONE) {
          AlbbModel.instance.freeStatus = eRunStatus.NONE;
          AlbbModel.instance.totalFreeTimes = 0;
          AlbbModel.instance.totalFreeTimesBack = 0;
          gts.Debug.LogWarr("==totalFreeTimesBack==" + AlbbModel.instance.totalFreeTimesBack);
          this.Button_run.interactable = !AlbbModel.instance.isAuto;
          var Node_freeStyle = this.Node_free.getChildByName("Node_freeStyle");
          Node_freeStyle.active = false;
          AlbbModel.instance.baoXiangRate = AlbbModel.instance.isExModel ? 2 : 1;
          AlbbModel.instance.totalWinRate = 1;
          this.Label_winRate.string = "x" + AlbbModel.instance.totalWinRate;
          AudioManager.instance.resumeMusic();
          AlbbUtils.instance.stopSound(eSound.FG_End);
          tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            var Node_enter = _this10.Node_free.getChildByName("Node_enter");
            Node_enter.active = false;
            var Node_end = _this10.Node_free.getChildByName("Node_end");
            Node_end.active = false;
            _this10.Node_bigWin.active = false;
            AlbbUtils.instance.playBgMusic();
          }).delay(0.5).call(function () {
            _this10.Node_free.active = false;
            if (AlbbModel.instance.isAuto) {
              _this10.scheduleOnce(function () {
                AlbbCtrl.instance.reqBet();
              }, 0.25);
            } else {
              _this10.Button_run.interactable = true;
              _this10.Node_ex.active = true;
            }
          }).start();
        };
        _proto.showFree = function showFree(isEnter) {
          var _this11 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (!this.Node_free.active) {
            this.Node_free.active = true;
            this.Node_free.getComponent(UIOpacity).opacity = 255;
            var delayTime = isEnter ? 0 : 0;
            this.door_light.node.active = false;
            this.Node_menu.active = false;
            this.clearWinTip();
            if (isEnter) {
              AlbbModel.instance.baoXiangRate = AlbbModel.instance.gameInfo.FreeInfo.MultipleAddNum;
              AlbbModel.instance.totalWinRate = AlbbModel.instance.gameInfo.FreeInfo.Multiple;
              AlbbModel.instance.totalFreeTimesBack = AlbbModel.instance.gameInfo.FreeInfo.TotalCount;
              AlbbModel.instance.totalFreeWin = AlbbModel.instance.gameInfo.FreeInfo.TotalPrizeAmount;
              AlbbModel.instance.curTotalWin = AlbbModel.instance.gameInfo.FreeInfo.TotalPrizeAmount;
              var inter = Common.numFormatInt(AlbbModel.instance.curTotalWin / 1000);
              var digit = AlbbUtils.instance.numberFormatD(AlbbModel.instance.curTotalWin / 1000, 2.0);
              this.Label_win.string = "" + inter + digit + "K";
            } else {
              AlbbModel.instance.baoXiangRate = AlbbModel.instance.betResult.FreeInfo.MultipleAddNum;
              AlbbModel.instance.totalWinRate = AlbbModel.instance.betResult.FreeInfo.Multiple;
              AlbbModel.instance.curTotalWin = 0;
              AlbbModel.instance.totalFreeWin = 0;
              AlbbModel.instance.totalFreeTimesBack = AlbbModel.instance.totalFreeTimes;
              this.Label_win.string = "0.00";
            }

            // if (!isEnter) {
            //     for (let i = 0; i < this.Albb_symbolList.length; i++) {
            //         this.Albb_symbolList[i].stopScatterBlink();
            //     }
            // }

            AlbbModel.instance.freeStatus = eRunStatus.START;
            this.scheduleOnce(function () {
              if (isEnter) {
                _this11.doEnterFree();
              } else {
                AlbbUtils.instance.playBgMusic(eSound.FG_Go);
                _this11.setEnterFree();
              }
            }, delayTime);
          }
        };
        _proto.showFreeRollResult = function showFreeRollResult() {
          var _this12 = this;
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          var Node_rollGame = Node_enter.getChildByName("Node_rollGame");
          Node_rollGame.active = true;
          var destRate = AlbbModel.instance.betResult.FreeInfo.MultipleAddNum;
          var lunpan2 = Node_rollGame.getChildByName("lunpan2").getComponent(sp.Skeleton);
          var lunpan1 = Node_rollGame.getChildByName("lunpan1").getComponent(sp.Skeleton);
          lunpan2.setAnimation(0, AlbbModel.instance.isExModel ? "ex_result_x" + destRate : "normal_result_x" + destRate, false);
          lunpan1.setAnimation(0, "result", false);
          lunpan2.setCompleteListener(function () {
            lunpan2.setCompleteListener(null);
            tween(Node_rollGame).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).to(0.15, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            tween(Node_rollGame.getComponent(UIOpacity)).to(0.15, {
              opacity: 180
            }).to(0.15, {
              opacity: 0
            }).call(function () {
              Node_rollGame.active = false;
            }).start();
            var Node_rollResult = Node_enter.getChildByName("Node_rollResult");
            Node_rollResult.active = true;
            Node_rollResult.getComponent(UIOpacity).opacity = 0;
            tween(Node_rollResult.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).start();
            var Label_freeTimes = Node_rollResult.getChildByName("Label_freeTimes");
            var Label_rate = Node_rollResult.getChildByName("Label_rate");
            Label_freeTimes.getComponent(UIOpacity).opacity = 255;
            Label_rate.getComponent(UIOpacity).opacity = 255;
            Label_freeTimes.getComponent(Label).string = "" + AlbbModel.instance.betResult.FreeInfo.TotalCount;
            Label_rate.getComponent(Label).string = "" + AlbbModel.instance.betResult.FreeInfo.MultipleAddNum;
            AlbbModel.instance.baoXiangRate = AlbbModel.instance.betResult.FreeInfo.MultipleAddNum;
            AlbbModel.instance.totalWinRate = AlbbModel.instance.betResult.FreeInfo.Multiple;
            AlbbUtils.instance.playOneShot(eSound.Wheel_fg_info);
            var free_intro_tishi = Node_rollResult.getChildByName("free_intro_tishi").getComponent(sp.Skeleton);
            free_intro_tishi.setAnimation(0, "intro", false);
            free_intro_tishi.addAnimation(0, "idle", true);
            _this12.scheduleOnce(function () {
              tween(Label_freeTimes.getComponent(UIOpacity)).to(0.75, {
                opacity: 0
              }).start();
              tween(Label_rate.getComponent(UIOpacity)).to(0.75, {
                opacity: 0
              }).start();
              free_intro_tishi.setAnimation(0, "end", false);
              free_intro_tishi.setCompleteListener(function () {
                free_intro_tishi.setCompleteListener(null);
                Node_rollResult.active = false;
              });
              AlbbUtils.instance.playOneShot(eSound.FG_gate_open);
              var free_intro_bg = Node_enter.getChildByName("free_intro_bg").getComponent(sp.Skeleton);
              free_intro_bg.setAnimation(0, "end", false);
              free_intro_bg.setCompleteListener(function () {
                free_intro_bg.setCompleteListener(null);
                Node_enter.active = false;
                _this12.doEnterFree();
              });
            }, 3);
          });
        };
        _proto.doStartFreeRoll = function doStartFreeRoll() {
          var _this13 = this;
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          var Node_timer = find("Node_rollGame/Node_timer", Node_enter);
          if (!Node_timer.active) {
            return;
          }
          Tween.stopAllByTarget(Node_timer);
          Node_timer.active = false;
          var Node_rollGame = Node_enter.getChildByName("Node_rollGame");
          var Button_quay = Node_rollGame.getChildByName("Button_quay");
          Button_quay.getComponent(Button).interactable = false;
          var lunpan2 = Node_rollGame.getChildByName("lunpan2").getComponent(sp.Skeleton);
          var lunpan1 = Node_rollGame.getChildByName("lunpan1").getComponent(sp.Skeleton);
          lunpan2.setAnimation(0, AlbbModel.instance.isExModel ? "ex_spin" : "normal_spin", true);
          lunpan1.setAnimation(0, "spin", true);
          AlbbUtils.instance.playSound(eSound.Wheel_spinning, true);
          var arrAngle = AlbbModel.instance.isExModel ? {
            2: [300, 420],
            3: [425, 525],
            4: [530, 655]
          } : {
            1: [170, 251],
            2: [300, 420],
            3: [425, 525],
            4: [615, 655]
          };
          var destRate = AlbbModel.instance.betResult.FreeInfo.MultipleAddNum;
          var angleRang = arrAngle["" + destRate];
          var destAngle = Math.random() * (angleRang[1] - angleRang[0]) + angleRang[0];
          destAngle += 5 * 360;
          tween(lunpan2.node).to(8, {
            eulerAngles: v3(0, 0, destAngle + 360)
          }, {
            easing: "cubicOut"
          }).call(function () {
            AlbbUtils.instance.stopSound(eSound.Wheel_spinning);
            AlbbUtils.instance.playOneShot(eSound.Wheel_chosen);
            _this13.showFreeRollResult();
          }).start();
        };
        _proto.startFreeTimer = function startFreeTimer() {
          var _this14 = this;
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          var Label_tims = find("Node_rollGame/Node_timer/Label_times", Node_enter);
          var countTimes = 5;
          tween(Label_tims.parent).delay(1.0).call(function () {
            countTimes--;
            Label_tims.getComponent(Label).string = "" + countTimes;
            AlbbUtils.instance.playOneShot(eSound.Wheel_clock);
          }).union().repeat(5).call(function () {
            _this14.doStartFreeRoll();
          }).start();
        };
        _proto.setEnterFree = function setEnterFree() {
          var _this15 = this;
          //        //enter
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.active = true;

          // AlbbUtils.instance.playOneShot(AlbbDef.eSound.Scatter_bell);
          this.exup_bg.scale = v3(0, 1, 1);
          this.Button_exHelp.position = v3(75, 0, 0);
          this.Node_ex.active = false;
          var Node_rollGame = Node_enter.getChildByName("Node_rollGame");
          Node_rollGame.active = true;
          Node_rollGame.getComponent(UIOpacity).opacity = 255;
          var Node_timer = find("Node_rollGame/Node_timer", Node_enter);
          Tween.stopAllByTarget(Node_timer);
          Node_timer.active = true;
          var Button_quay = Node_rollGame.getChildByName("Button_quay");
          Button_quay.getComponent(Button).interactable = true;
          var free_intro_bg = Node_enter.getChildByName("free_intro_bg").getComponent(sp.Skeleton);
          free_intro_bg.setAnimation(0, "intro", false);
          free_intro_bg.addAnimation(0, "idle", true);
          var Label_tims = find("Node_rollGame/Node_timer/Label_times", Node_enter);
          Label_tims.getComponent(Label).string = "5";
          var lunpan2 = Node_rollGame.getChildByName("lunpan2").getComponent(sp.Skeleton);
          var lunpan1 = Node_rollGame.getChildByName("lunpan1").getComponent(sp.Skeleton);
          lunpan2.node.eulerAngles = v3(0, 0, 0);
          lunpan2.setAnimation(0, "intro", false);
          lunpan1.setAnimation(0, "intro", false);
          lunpan1.addAnimation(0, "idle", true);
          lunpan2.setCompleteListener(function () {
            lunpan2.setCompleteListener(null);
            lunpan2.addAnimation(0, "normal_idle", true);
            AlbbUtils.instance.playOneShot(eSound.Wheel_pops_up);
            if (AlbbModel.instance.isExModel) {
              var newEx = instantiate(_this15.exfire.node);
              var wPos = _this15.exfire.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
              newEx.position = Node_enter.getComponent(UITransform).convertToNodeSpaceAR(wPos);
              Node_enter.addChild(newEx);
              AlbbUtils.instance.playOneShot(eSound.Extra_Bet_On);
              tween(newEx).delay(0.25).to(0.4, {
                position: v3(-120, 35, 0),
                scale: v3(0.5, 0.5, 0.5)
              }) //, { easing: "circOut" }
              .call(function () {
                lunpan2.setAnimation(0, "ex_changge", false);
                lunpan2.addAnimation(0, "ex_idle", true);
                _this15.startFreeTimer();
              }).destroySelf().start();
            } else {
              _this15.startFreeTimer();
            }
          });
        };
        _proto.doEnterFree = function doEnterFree() {
          if (AlbbModel.instance.freeStatus > eRunStatus.START) {
            return;
          }
          AlbbUtils.instance.playBgMusic(eSound.BGM_FG);
          AlbbModel.instance.freeStatus = eRunStatus.RUNNING;
          this.Button_run.interactable = false;
          this.Label_winRate.node.parent.active = false;
          var Node_freeStyle = this.Node_free.getChildByName("Node_freeStyle");
          Node_freeStyle.active = true;
          gts.Debug.LogWarr("==totalFreeTimesBack==" + AlbbModel.instance.totalFreeTimesBack);
          var Label_freeTimes = Node_freeStyle.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + AlbbModel.instance.totalFreeTimes;
          var Label_rate = Node_freeStyle.getChildByName("Label_rate");
          Label_rate.getComponent(Label).string = "x" + AlbbModel.instance.totalWinRate;
          this.Node_ex.active = false;
          //        //背景
          this.Skeleton_Node_bg.node.active = true;
          this.Skeleton_Node_bg.setAnimation(0, "idle", true);
          this.zp_light.setAnimation(0, "free_idle", true);

          // this.Node_symbolRoot.spriteFrame = this.arrRoomSpFrame[1];

          AudioManager.instance.resumeMusic();
          this.scheduleOnce(function () {
            AlbbCtrl.instance.reqBet();
          }, 2.0);
        };
        _proto.doEndFree = function doEndFree() {
          var _this16 = this;
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.getComponent(UIOpacity).opacity = 0;
          this.clearWinTip();
          AlbbUtils.instance.playSound(eSound.FG_End, true);
          this.Label_totalWinFreeEnd.getComponent(Label).string = "";
          this.Label_freeTimesFreeEnd.getComponent(Label).string = "";
          this.scheduleOnce(function () {
            //            //免费总得分
            _this16.Label_totalWinFreeEnd.node.scale = v3(1.0, 1.0, 1);
            AlbbUtils.instance.updateLabelAddNf(_this16.Label_totalWinFreeEnd, AlbbModel.instance.totalFreeWin);
            _this16.Label_freeTimesFreeEnd.getComponent(Label).string = "" + AlbbModel.instance.totalFreeTimesBack;
            gts.Debug.LogWarr("==totalFreeTimesBack==" + AlbbModel.instance.totalFreeTimesBack);
          }, 0.5);
          tween(Node_end.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          AudioManager.instance.pauseMusic();
          var Node_character = Node_end.getChildByName("Node_character").getComponent(sp.Skeleton);
          Node_character.setAnimation(0, "FG_Compliment", false);
          Node_character.setCompleteListener(function () {
            Node_character.setCompleteListener(null);

            //2.0秒后返回正常
            _this16.hideFree();
          });
          tween(Node_character).delay(0.05).call(function () {
            if (_this16.isStopFreeEnd) {
              _this16.isStopFreeEnd = false;
              Tween.stopAllByTarget(Node_character);
              Tween.stopAllByTarget(_this16.Label_totalWinFreeEnd.node.getComponent(UIOpacity));
              var inter = Common.numFormatInt(AlbbModel.instance.totalFreeWin / 1000);
              var digit = AlbbUtils.instance.numberFormatD(AlbbModel.instance.totalFreeWin / 1000, 2.0);
              _this16.Label_totalWinFreeEnd.string = "" + inter + digit + "K";
              Node_character.setCompleteListener(null);
              Node_character.setAnimation(0, "FG_Compliment2", false);
              Node_character.setCompleteListener(function () {
                Node_character.setCompleteListener(null);
                _this16.hideFree();
              });
            }
          }).union().repeatForever().start();
        };
        _proto.onRateNumAdd = function onRateNumAdd() {
          var _this17 = this;
          AlbbModel.instance.totalWinRate += AlbbModel.instance.baoXiangRate;
          AlbbUtils.instance.playOneShot(eSound.FG_getX);
          if (AlbbModel.instance.freeStatus != eRunStatus.NONE) {
            var Node_freeStyle = this.Node_free.getChildByName("Node_freeStyle");
            var Label_rate = Node_freeStyle.getChildByName("Label_rate");
            var Node_levelUp = Node_freeStyle.getChildByName("Node_levelUp");
            Node_levelUp.active = true;
            Node_levelUp.getComponent(sp.Skeleton).setAnimation(0, "idle", false);
            Node_levelUp.getComponent(sp.Skeleton).setCompleteListener(function () {
              Node_levelUp.getComponent(sp.Skeleton).setCompleteListener(null);
              Node_levelUp.active = false;
            });
            tween(Label_rate).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              Label_rate.getComponent(Label).string = "x" + AlbbModel.instance.totalWinRate;
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
          } else {
            var _Node_levelUp = this.Label_winRate.node.parent.getChildByName("Node_levelUp");
            _Node_levelUp.active = true;
            _Node_levelUp.getComponent(sp.Skeleton).setAnimation(0, "idle", false);
            _Node_levelUp.getComponent(sp.Skeleton).setCompleteListener(function () {
              _Node_levelUp.getComponent(sp.Skeleton).setCompleteListener(null);
              _Node_levelUp.active = false;
            });
            tween(this.Label_winRate.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              _this17.Label_winRate.string = "x" + AlbbModel.instance.totalWinRate;
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(AlbbModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            AlbbUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this18 = this;
          switch (event) {
            case eProto.HD_info:
              {
                var AllPosMsg = AlbbModel.instance.gameInfo.Res[AlbbModel.instance.gameInfo.Res.length - 1].AllPosMsg;
                //                //横向
                var InitExtraPos = [];
                for (var i = 0; i < 4; i++) {
                  var InitPosMsg = AllPosMsg[i + 1];
                  var symbolInfo = InitPosMsg[InitPosMsg.length - 1];
                  InitExtraPos.push(symbolInfo);
                }
                this.Albb_symbolList[0].init(InitExtraPos);

                //                //纵向
                for (var _i10 = 1; _i10 < this.Albb_symbolList.length; _i10++) {
                  var _InitPosMsg = AllPosMsg[_i10 - 1];
                  this.Albb_symbolList[_i10].init(_InitPosMsg);
                }
                this.Label_bet.string = AlbbUtils.instance.numberFormat(AlbbModel.instance.curBet, 2.0) + "K";
                var symRate = 1;
                for (var _i11 = 0; _i11 < AllPosMsg.length; _i11++) {
                  symRate *= AllPosMsg[_i11].length;
                }
                if (parseInt(this.Label_symRate.string) != symRate) {
                  AlbbUtils.instance.updateLabelNomal(this.Label_symRate, symRate);
                }
                AlbbUtils.instance.playOneShot(eSound.FG_gate_open);
                this.lunchEnter.node.active = true;
                this.lunchEnter.setAnimation(0, "end", false);
                this.lunchEnter.setCompleteListener(function () {
                  _this18.lunchEnter.setCompleteListener(null);
                  _this18.lunchEnter.node.active = false;
                  AlbbUtils.instance.playOneShot(eSound.Into_Info_L);
                  _this18.zp_light.node.active = true;
                  _this18.zp_light.setAnimation(0, "normal_intro", false);
                  if (AlbbModel.instance.totalFreeTimes > 0) {
                    _this18.zp_light.setCompleteListener(function () {
                      _this18.zp_light.setAnimation(0, "free_idle", true);
                      _this18.zp_light.setCompleteListener(null);
                      _this18.showFree(true);
                    });
                  } else {
                    _this18.zp_light.addAnimation(0, "normal_idle", true);
                  }
                });
                break;
              }
            case eProto.HD_History:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                //                // this.Button_run.interactable = true;
                Tween.stopAllByTarget(this.Button_run.node);
                //                // AlbbUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                this.doStartRun();
                this.updateGold();
                break;
              }
            //            // case AlbbDef.eProto.HD_BoYiBo: {
            //            //     this.doBoYiBoResult(data.win);
            //            //     break;
            //            // }

            //            //////////////////////////////
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
        return AlbbGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_mask_0", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_mask_1_6", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_colEffect", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Albb_symbolList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_action", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_setBase", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_Node_bg", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_symRate", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Label_winRate", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWinFreeEnd", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeTimesFreeEnd", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWinBig", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Label_winScoreTip", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_auto", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Node_winTip", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_winRate", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Layout_winTip", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "exfire", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "exup_bg", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Button_exHelp", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Node_ex", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "exHelp", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "zp_light", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "lunchEnter", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "door_light", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "ExtraBet_Declare", [_dec38], {
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

System.register("chunks:///_virtual/AlbbModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AlbbDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, _createForOfIteratorHelperLoose, cclegacy, GameDef, arrBetList, eRunStatus, eSymbol;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      arrBetList = module.arrBetList;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9313dkqjrZJPpplZ0VuvFN9", "AlbbModel", undefined);
      var AlbbModel = exports('AlbbModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(AlbbModel, _GameDef$BaseSington);
        function AlbbModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.stopNum = 0;
          _this.gameStatus = eRunStatus.NONE;
          _this.gameInfo = null;
          _this.isAuto = false;
          _this.isQuickStop = false;
          _this.isExModel = false;
          _this.autoTimes = 0;
          _this.selAutoIndex = 0;
          _this.curBet = 1;
          _this.curBetBase = 0;
          _this.curBetRate = 0;
          _this.curTotalBet = 2.0;
          _this.curTotalWin = 0;
          _this.totalRate = 0;
          _this.totalWinRate = 0;
          _this.baoXiangRate = 1;
          _this.scatterCounts = 0;
          _this._betResult = null;
          //    // betResult: AlbbDef.IHD_Bet = null;
          //    //baseSet
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.totalFreeTimes = 0;
          _this.totalFreeTimesBack = 0;
          _this.totalFreeWin = 0;
          _this.specialStartCol = 0;
          return _this;
        }
        var _proto = AlbbModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        _proto.getBaseIndex = function getBaseIndex() {
          for (var index = 0; index < arrBetList.length; index++) {
            if (Math.floor(arrBetList[index] / 1000) == AlbbModel.instance.curBet) {
              return index;
            }
          }
          return 0;
        };
        _createClass(AlbbModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(_betResult) {
            this._betResult = _betResult;
            for (var _iterator = _createForOfIteratorHelperLoose(this._betResult.Res), _step; !(_step = _iterator()).done;) {
              var result = _step.value;
              if (result.RewardMoney > 0) {
                for (var _iterator2 = _createForOfIteratorHelperLoose(result.AllPosMsg), _step2; !(_step2 = _iterator2()).done;) {
                  var posInfo = _step2.value;
                  for (var _iterator3 = _createForOfIteratorHelperLoose(posInfo), _step3; !(_step3 = _iterator3()).done;) {
                    var info = _step3.value;
                    if (info.Sym == eSymbol.BAOXIANG) {
                      info.IsReward = true;
                    }
                  }
                }
              }
            }
          }
        }]);
        return AlbbModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AlbbScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './AlbbDef.ts', './AlbbUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, AlbbUtils, Common;
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
      AlbbUtils = module.AlbbUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "69795LRJlpG+oBrPWQ3o7C2", "AlbbScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var AlbbScene = exports('default', (_dec = ccclass("AlbbScene"), _dec2 = menu("game/AlbbGame/AlbbScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AlbbScene, _Component);
        function AlbbScene() {
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
        var _proto = AlbbScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          AlbbUtils.instance.bundle = assetManager.getBundle(cBundle);
          AlbbUtils.instance.preLoad();
          AlbbUtils.instance.playBgMusic();
          this.onLoadGame();
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          view.off("canvas-resize", this.onResize, this);
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onResize = function onResize() {};
        _proto.onLoadHall = function onLoadHall() {
          console.time("bundle.onLoadHall");
          Common.showWait();
          // if (ViewManager.instance.miniLayer) {
          //     ViewManager.instance.miniLayer.getChildByName("miniGame").angle = 0;
          // }
          //        //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this2 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            AlbbUtils.instance.bundle.load("prefab/AlbbGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this2.prefab_game = prefab;
              _this2.showGame();
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
        return AlbbScene;
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

System.register("chunks:///_virtual/AlbbUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './AlbbDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, sp, Font, GameDef, AudioManager, eSymbol, eSound, Common;
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
      sp = module.sp;
      Font = module.Font;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSymbol = module.eSymbol;
      eSound = module.eSound;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "35fc69F0VRJZZsyeODPFa11", "AlbbUtils", undefined);
      var symbol_nomal_icon = ["Symbol_00", "Symbol_01", "Symbol_02", "Symbol_03", "Symbol_04", "Symbol_05", "Symbol_06", "Symbol_07", "Symbol_08", "Symbol_09", "Symbol_10", "Symbol_11", "Symbol_12", "Symbol_13", "Symbol_14", "Symbol_15", "Symbol_16"];
      var AlbbUtils = exports('AlbbUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(AlbbUtils, _GameDef$BaseSington);
        function AlbbUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.arrIconSpriteFrame = {};
          _this.arrDynamicSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = AlbbUtils.prototype;
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/AlbbGameView");
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
                  arrHLoad.push(this.asyncLoadDir("textures/icon", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpFrame), _step; !(_step = _iterator()).done;) {
                        var _SpriteFrame = _step.value;
                        _this4.arrIconSpriteFrame[_SpriteFrame.name] = _SpriteFrame;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("textures/dynamic", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpFrame), _step2; !(_step2 = _iterator2()).done;) {
                        var _SpriteFrame2 = _step2.value;
                        _this4.arrDynamicSpriteFrame[_SpriteFrame2.name] = _SpriteFrame2;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/icon", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(arrSpineData), _step3; !(_step3 = _iterator3()).done;) {
                        var spineData = _step3.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/dynamic", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator4 = _createForOfIteratorHelperLoose(arrSpineData), _step4; !(_step4 = _iterator4()).done;) {
                        var spineData = _step4.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("font/FNT_num_Won_FG", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
                  // arrHLoad.push(
                  //     this.asyncLoad("font/number5", Font, (err, font: Font) => {
                  //         if (!err) {
                  //             this.arrFontData[font.name] = font;
                  //         }
                  //     })
                  // );
                  _context3.next = 8;
                  return Promise.all(arrHLoad);
                case 8:
                  if (cb) {
                    cb();
                  }
                case 9:
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
        _proto.pauseMusic = function pauseMusic() {
          AudioManager.instance.pauseMusic();
        };
        _proto.resumeMusic = function resumeMusic() {
          AudioManager.instance.resumeMusic();
        };
        _proto.playBgMusic = function playBgMusic(soundPath) {
          if (soundPath === void 0) {
            soundPath = eSound.BGM_MG;
          }
          AudioManager.instance.playBgMusic(soundPath, this.bundle, true);
          // audioEngine.setMusicVolume(0.75);
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
          var _this7 = this;
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err || _this7.soundIDList[soundPath]) {
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
        _proto.updateLabel = function updateLabel(label, num, duration) {
          if (duration === void 0) {
            duration = 0.1;
          }
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(duration, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            labelCom.string = "" + num;
          }).to(duration, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.updateLabelAddNf = function updateLabelAddNf(label, nums, isFloatFormat, curNums) {
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

          //        // AlbbUtils.instance.playSound(AlbbDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // AlbbUtils.instance.stopSound(AlbbDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this8.numberFormatFloatD(curWin / 1000, 2.0) : _this8.numberFormatD(curWin / 1000, 2.0);
            label.string = "" + inter + digit + "K";
            //                        // label.string = isFloatFormat ? `${this.numberFormatFloat(curWin / 1000, 2.0)}K` : `${this.numberFormat(curWin / 1000, 2.0)}K`;
          }))
          // .delay(5.0)
          // .to(0.2, { opacity: 0 })
          // .call(() => {
          //     label.node.active = false;
          // })
          .start();
        };
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat, curNums) {
          var _this9 = this;
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

          //        // AlbbUtils.instance.playSound(AlbbDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // AlbbUtils.instance.stopSound(AlbbDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this9.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this9.numberFormat(curWin / 1000, 2.0) + "K";
          }))
          // .delay(5.0)
          // .to(0.2, { opacity: 0 })
          // .call(() => {
          //     label.node.active = false;
          // })
          .start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this10 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;

          //        // AlbbUtils.instance.playSound(AlbbDef.eSound.numAdd);

          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // AlbbUtils.instance.stopSound(AlbbDef.eSound.numAdd);

              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this10.numberFormatFloat(curWin, 0) : "" + _this10.numberFormat(curWin, 0);
          })).delay(2.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        }
        //    //////////////////////////
        ;

        _proto.getItemSymbolNum = function getItemSymbolNum(num) {
          var symbol = "Symbol_Num_" + num;
          return this.arrIconSpriteFrame[symbol];
        };
        _proto.getSymbolIcon = function getSymbolIcon(symbolIndex) {
          var symbol = symbol_nomal_icon[13 - symbolIndex] + "_1";
          if (this.arrIconSpriteFrame) {
            var ret = this.arrIconSpriteFrame[symbol];
            if (!ret) {
              return null;
            }
            return ret;
          }
          return null;
        };
        _proto.getDynamicSpriteFrame = function getDynamicSpriteFrame(strName) {
          return this.arrDynamicSpriteFrame ? this.arrDynamicSpriteFrame[strName] : null;
        };
        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex, EffectCount) {
          if (EffectCount === void 0) {
            EffectCount = 0;
          }
          if (this.arrIconSpriteFrame) {
            var symbol = null;
            if (symbolIndex == eSymbol.WILD) {
              if (EffectCount > 0) {
                symbol = "" + symbol_nomal_icon[symbolIndex][EffectCount - 1];
              } else {
                return null;
              }
            } else {
              symbol = "" + symbol_nomal_icon[symbolIndex];
            }
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, length, isIdle) {
          if (length === void 0) {
            length = 1;
          }
          if (symbolIndex == eSymbol.SWILD) {
            return "Setup";
          }
          var strAni = ["Setup_" + length];
          if (!strAni) {
            return null;
          }
          gts.Debug.Log("==getSymbolAniName=strAni=" + strAni + "=symbolIndex=" + symbolIndex);
          return strAni;
        };
        _proto.getFontData = function getFontData(name) {
          if (!this.arrFontData) {
            return null;
          }
          return this.arrFontData[name];
        };
        _proto.getSkeletonData = function getSkeletonData(index, lenth) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = "";
          switch (index) {
            case eSymbol.SCATTER:
              {
                strAni = "Symbol_12";
                break;
              }
            case eSymbol.WILD:
              {
                strAni = "Symbol_11";
                break;
              }
            case eSymbol.SWILD:
              {
                strAni = "Symbol_11_X5";
                break;
              }
            case eSymbol.BAOXIANG:
              {
                strAni = "Symbol_13";
                break;
              }
            default:
              {
                var i = eSymbol.TEN - index;
                strAni = i < 10 ? "Symbol_0" + i : "Symbol_" + i;
                break;
              }
          }

          //        // gts.Debug.Log("==getSkeletonData=strAni=" + strAni);
          var ret = this.arrSkeletonData[strAni];
          if (!ret) {
            return null;
          }
          return ret;
        };
        _proto.setBtnBetGray = function setBtnBetGray(btnNode, isGray) {
          Common.changeNodeEffect(btnNode, isGray);
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        }

        // getWiNInfo(result: AlbbDef.IOpenResult) {
        //     let AllPosMsg = result.AllPosMsg;
        //     let winSym = {};
        //     for (const arrPos of result.RewardMsg) {
        //         let len = arrPos.length;
        //         let sym = null;
        //         //            // let lines = 1;
        //         for (let i = 0; i < arrPos.length; i++) {
        //             let pos = arrPos[i];
        //             if (!sym && AllPosMsg[i][pos].Sym != AlbbDef.eSymbol.WILD) {
        //                 sym = AllPosMsg[i][pos].Sym;
        //             }

        //             //                // lines *= AllPosMsg[i][pos].Length;
        //         }

        //         if (sym && sym > AlbbDef.eSymbol.BAOXIANG) {
        //             if (!winSym[`${sym}`]) {
        //                 winSym[`${sym}`] = {
        //                     lines: 1,
        //                     len: len,
        //                 };
        //             } else {
        //                 winSym[`${sym}`].lines++;
        //                 winSym[`${sym}`].len = len > winSym[`${sym}`].len ? len : winSym[`${sym}`].len;
        //             }
        //         }
        //     }

        //     let arrKeysSym = Object.keys(winSym);
        //     let retInfo = [];
        //     for (const key of arrKeysSym) {
        //         let sym = parseInt(key);
        //         let lines = winSym[key].lines;
        //         let len = winSym[key].len;
        //         if (!AlbbDef.cRate[key] || !AlbbDef.cRate[key][`${len}`]) {
        //             gts.Debug.Log("====AlbbDef.cRate==key=======" + key);
        //             gts.Debug.Log("====AlbbDef.cRate==len=======" + len);
        //         }

        //         gts.Debug.Log("====AlbbDef.cRate==len=======" + len);
        //         let rate = AlbbDef.cRate[key][`${len}`];

        //         retInfo.push({
        //             sym: sym,
        //             count: len,
        //             base: rate,
        //             lines: lines,
        //         });
        //     }
        //     return retInfo;
        // }
        ;

        return AlbbUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/AlbbGame', 'chunks:///_virtual/AlbbGame'); 
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