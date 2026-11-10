System.register("chunks:///_virtual/Empire_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "46a6aShjZ1LoY4YKENis4uB", "Empire_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var Empire_btnEffect = exports('default', (_dec = ccclass("EmpireBtnEffect"), _dec2 = menu("game/EmpireGame/Empire_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Empire_btnEffect, _Component);
        function Empire_btnEffect() {
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
        var _proto = Empire_btnEffect.prototype;
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

        _createClass(Empire_btnEffect, [{
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

        return Empire_btnEffect;
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

System.register("chunks:///_virtual/Empire_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './EventManager.ts', './EmpireModel.ts', './EmpireDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, instantiate, Label, Toggle, UIOpacity, tween, sys, Component, DataManager, UserKey, EventManager, EmpireModel, arrBetList, eEvent;
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
      EmpireModel = module.EmpireModel;
    }, function (module) {
      arrBetList = module.arrBetList;
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "5d97bT116FDbptjVwJxLp8+", "Empire_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Empire_setBase = exports('default', (_dec = ccclass("EmpireSetBase"), _dec2 = menu("game/EmpireGame/Empire_setBase"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Empire_setBase, _Component);
        function Empire_setBase() {
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
        var _proto = Empire_setBase.prototype;
        _proto.onLoad = function onLoad() {
          this.node.scale = v3(this.node.scale.x, 0, 1);
          for (var i = 1; i < 15; i++) {
            var toggleTemp = instantiate(this.toggleTemp);
            toggleTemp.name = "" + i;
            toggleTemp.getChildByName("Label_score").getComponent(Label).string = arrBetList[i] / 1000 + "K";
            this.ToggleContainer.addChild(toggleTemp);
          }
          var mask = this.node.getChildByName("mask");
          mask.on(Node.EventType.TOUCH_END, this.hide, this);
        };
        _proto.start = function start() {
          var baseBetIndex = EmpireModel.instance.getBaseIndex();
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
          EmpireModel.instance.curBet = arrBetList[iIndex] / 1000;
          var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
          sys.localStorage.setItem("Empire_baseBetGold" + uid, arrBetList[iIndex]);
          this.hide();
        };
        return Empire_setBase;
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

System.register("chunks:///_virtual/Empire_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // // Learn TypeScript:
      cclegacy._RF.push({}, "34716/qa7xIW7EkYtvf8J1I", "Empire_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Empire_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EmpireModel.ts', './EmpireDef.ts', './EventManager.ts', './EmpireUtils.ts', './Empire_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, tween, v3, Component, EmpireModel, eRunStatus, eSymbol, eConstDef, eEvent, eSound, EventManager, EmpireUtils, Empire_symbolItem;
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
      EmpireModel = module.EmpireModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      EmpireUtils = module.EmpireUtils;
    }, function (module) {
      Empire_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "024f0M8mQRCpYFWWW0rncI+", "Empire_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Empire_symbol = exports('default', (_dec = ccclass("EmpireSymbol"), _dec2 = menu("game/EmpireGame/Empire_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Empire_symbol, _Component);
        function Empire_symbol() {
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
          //    // isBreak = false;
          //    // onSymbolBreak(nodeName, pos, length) {
          //    //     let startIndex = -1;
          //    //     for (let i = 0; i < this._symbolList.length; i++) {
          //    //         if (this._symbolList[i].node.name == nodeName) {
          //    //             startIndex = i;
          //    //             this._symbolList.splice(i, 1);
          //    //             break;
          //    //         }
          //    //     }
          //    //     if (startIndex == -1) {
          //    //         return;
          //    //     }
          //    //     this.isBreak = true;
          //    //     let toLength = 0;
          //    //     if (this.isHorizontal) {
          //    //         //横向
          //    //         toLength = (pos - EmpireDef.eConstDef.cSymbolStartX) / EmpireDef.eConstDef.cSymbolW - length / 2;
          //    //     } else {
          //    //         toLength = (pos - EmpireDef.eConstDef.cSymbolStartY) / EmpireDef.eConstDef.cSymbolH - length / 2;
          //    //     }
          //    //     for (let i = 0; i < length; i++) {
          //    //         let newItem = cc.instantiate(this.Node_itemTemp);
          //    //         this.itemTag = (this.itemTag + 1) % 2000;
          //    //         newItem.name = `symbol_col_${this._iCol}_tag_${this.itemTag}`;
          //    //         this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
          //    //         //POSITON
          //    //         if (this.isHorizontal) {
          //    //             //横向
          //    //             newItem.y = 0;
          //    //             let offsetX = (toLength + 1 / 2) * EmpireDef.eConstDef.cSymbolW;
          //    //             newItem.x = EmpireDef.eConstDef.cSymbolStartX + offsetX;
          //    //         } else {
          //    //             newItem.x = this.node.x;
          //    //             let offsetY = (toLength + 1 / 2) * EmpireDef.eConstDef.cSymbolH;
          //    //             newItem.y = EmpireDef.eConstDef.cSymbolStartY + offsetY;
          //    //         }
          //    //         //
          //    //         let itemInfo = {
          //    //             IsReward: this.isHorizontal ? true : false,
          //    //             Length: 1,
          //    //             Rim: 0,
          //    //             Sym: EmpireDef.eSymbol.WILD,
          //    //         } as EmpireDef.IPosMsg;
          //    //         let com = newItem.getComponent(Empire_symbolItem);
          //    //         com.initItem(itemInfo, this.isHorizontal, this._iCol);
          //    //         if (startIndex == 0) {
          //    //             this._symbolList.unshift(com);
          //    //         } else {
          //    //             this._symbolList.splice(startIndex, 0, com);
          //    //         }
          //    //         startIndex++;
          //    //         toLength++;
          //    //     }
          //    // }
          _this._resultInfoList = [];
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = Empire_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {
          //        // EventManager.instance.on(EmpireDef.eEvent.onSymbolBreak + this._iCol, this.onSymbolBreak, this);
        };
        _proto.onDisable = function onDisable() {
          //        // EventManager.instance.off(EmpireDef.eEvent.onSymbolBreak + this._iCol, this.onSymbolBreak, this);
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
          gts.Debug.Log(JSON.stringify(_resultInfoList));
          return _resultInfoList;
        };
        _proto.addNewItem = function addNewItem(itemInfo, toLength) {
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            var symLen = this.isHorizontal ? 1 : leftLength >= 4 ? Math.floor(Math.random() * 4) + 1 : Math.floor(Math.random() * leftLength) + 1;
            var symbol = this.isHorizontal ? Math.floor(Math.random() * eSymbol.TEN) + 1 : Math.floor(Math.random() * eSymbol.TEN) + 1;
            itemInfo = {
              Sym: symbol,
              //EmpireDef.eSymbol.A,
              Length: symLen,
              Rim: symLen > 1 ? Math.floor(Math.random() * 3) : 0,
              IsReward: false,
              EffectCount: symbol == eSymbol.WILD && symLen > 1 ? Math.floor(Math.random() * symLen - 1) : 0
            };
            itemInfo.Length = this.isHorizontal ? 1 : Math.floor(Math.random() * 4) + 1;
            if (!this.isHorizontal && itemInfo.Sym == eSymbol.WILD) {
              itemInfo.Length = 1;
            }
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          if (this.isHorizontal) {
            //            //横向
            // newItem.getPosition().y = 0;
            var offsetX = (toLength + itemInfo.Length / 2) * eConstDef.cSymbolW;
            // newItem.getPosition().x = EmpireDef.eConstDef.cSymbolStartX + offsetX;
            newItem.setPosition(eConstDef.cSymbolStartX + offsetX, 0);
          } else {
            // newItem.getPosition().x = this.node.getPosition().x;
            var offsetY = (toLength + itemInfo.Length / 2) * eConstDef.cSymbolH;
            // newItem.getPosition().y = EmpireDef.eConstDef.cSymbolStartY + offsetY;

            newItem.setPosition(this.node.getPosition().x, eConstDef.cSymbolStartY + offsetY);
          }

          //        //
          var com = newItem.getComponent(Empire_symbolItem);
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
                for (var _iterator = _createForOfIteratorHelperLoose(_this2._symbolList), _step; !(_step = _iterator()).done;) {
                  var comSymbol = _step.value;
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
                for (var _iterator2 = _createForOfIteratorHelperLoose(_this2._symbolList), _step2; !(_step2 = _iterator2()).done;) {
                  var comSymbol = _step2.value;
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
              EmpireModel.instance.isQuickStop ? function () {
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = 2500;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this3._resultInfoList = _this3.getResult(EmpireModel.instance.betResult.Res[0]);

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
                      var arrPro, _iterator3, _step3, _symbol2;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _this3.scheduleOnce(function () {
                              EmpireUtils.instance.playOneShot(eSound.drop_1);
                            }, 0.15);
                            arrPro = [];
                            for (_iterator3 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step3 = _iterator3()).done;) {
                              _symbol2 = _step3.value;
                              arrPro.push(_symbol2.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            if (EmpireModel.instance.specialStartCol > 0 && (_this3._iCol == 0 || _this3._iCol >= EmpireModel.instance.specialStartCol)) {
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
        };
        _proto.doEffect = function doEffect() {
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            arrPro.push(symbol.doEffect(0.5));
            //            // arrPro.push(symbol.doEffect(Empire_symbol.rewardCount * 0.075));
            if (symbol.itemInfo.IsReward) {
              Empire_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        }
        //    // // static catCount = 0;
        //    // doCatNumCollect(collectType = 0) {
        //    //     let arrPro = [];
        //    //     for (let i = 0; i < this._symbolList.length; i++) {
        //    //         let symbol = this._symbolList[i];
        //    //         if (symbol.checkCollect()) {
        //    //             arrPro.push(symbol.doCatNumCollect(Empire_symbol.catCount * 0.35, collectType));
        //    //             Empire_symbol.catCount++;
        //    //         }
        //    //     }
        //    //     return Promise.all(arrPro);
        //    // }
        ;

        _proto.doClear = /*#__PURE__*/
        function () {
          var _doClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var arrPro, _iterator4, _step4, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //        // Empire_symbol.catCount = 0;
                  Empire_symbol.rewardCount = 0;
                  arrPro = [];
                  for (_iterator4 = _createForOfIteratorHelperLoose(this._symbolList); !(_step4 = _iterator4()).done;) {
                    symbol = _step4.value;
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
            var arrPro, _iterator5, _step5, symbol;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrPro = [];
                  for (_iterator5 = _createForOfIteratorHelperLoose(this._symbolList); !(_step5 = _iterator5()).done;) {
                    symbol = _step5.value;
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
          for (var _iterator6 = _createForOfIteratorHelperLoose(this._symbolList), _step6; !(_step6 = _iterator6()).done;) {
            var symbol = _step6.value;
            if (symbol.itemInfo.Sym == eSymbol.SCATTER) {
              symbol.stopScatterBlink();
            }
          }
        }
        //    // async doWildChange() {
        //    //     Empire_symbol.catCount = 0;
        //    //     Empire_symbol.rewardCount = 0;
        //    //     let arrPro = [];
        //    //     for (const symbol of this._symbolList) {
        //    //         if (symbol.itemInfo.IsReward) {
        //    //             arrPro.push(symbol.doClear());
        //    //         }
        //    //     }
        //    //     return Promise.all(arrPro);
        //    // }
        ;

        _proto.doDrop = /*#__PURE__*/
        function () {
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
                    _context4.next = 30;
                    break;
                  }
                  _symbolItem = null;
                  if (!(_iRow2 < this._symbolList.length)) {
                    _context4.next = 19;
                    break;
                  }
                  _symbolItem = this._symbolList[_iRow2];
                  _symbolItem.itemInfo = _nextResultInfoList[_iRow2];
                  //                // newFloor += symbolItem.itemInfo.Length;

                  if (_symbolItem.isChange) {
                    _symbolItem.doEndChange(_symbolItem.itemInfo);
                  }
                  _context4.next = 25;
                  break;
                case 19:
                  nextInfo = _nextResultInfoList[_iRow2];
                  _symbolItem = this.addNewItem(nextInfo, toLength);
                  if (_symbolItem) {
                    _context4.next = 23;
                    break;
                  }
                  return _context4.abrupt("continue", 27);
                case 23:
                  toLength += _symbolItem.itemInfo.Length;
                  newIndex++;
                case 25:
                  arrPro.push(_symbolItem.doDrop(_curLength, arrCloud[_iRow2], newIndex));
                  _curLength += _symbolItem.itemInfo.Length;
                case 27:
                  _iRow2++;
                  _context4.next = 11;
                  break;
                case 30:
                  return _context4.abrupt("return", Promise.all(arrPro));
                case 31:
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
        return Empire_symbol;
      }(Component), _class3.rewardCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isHorizontal", [property], {
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

System.register("chunks:///_virtual/Empire_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EmpireDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "d7a3dNE+V1M6ab3dh81gHdp", "Empire_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Empire_symbolEffectRoot = exports('default', (_dec = ccclass("EmpireSymbolEffectRoot"), _dec2 = menu("game/EmpireGame/Empire_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Empire_symbolEffectRoot, _Component);
        function Empire_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Empire_symbolEffectRoot.prototype;
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
        return Empire_symbolEffectRoot;
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

System.register("chunks:///_virtual/Empire_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EmpireDef.ts', './Empire_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, SpriteFrame, tween, v3, UIOpacity, UITransform, instantiate, Sprite, Component, eSymbol, Empire_symbolItem;
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
      Empire_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "d66aewXLyJFDoC1A9hua/1A", "Empire_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eRate = [[30, 40, 60, 80],
      //SHITOU
      [20, 25, 50, 70],
      //CHANCHU
      [10, 25, 40, 60],
      //JINLI
      [8, 15, 20, 30],
      //HONGBAO
      [6, 10, 12, 15],
      //LUO = 6,
      [6, 10, 12, 15],
      //BIANPAO
      [4, 6, 8, 10],
      //A
      [4, 6, 8, 10],
      //K
      [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
      var Empire_symbolInfo = exports('default', (_dec = ccclass("EmpireSymbolInfo"), _dec2 = menu("game/EmpireGame/Empire_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Empire_symbolInfo, _Component);
        function Empire_symbolInfo() {
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
        var _proto = Empire_symbolInfo.prototype;
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
          this.Node_item.getComponent(Empire_symbolItem).initItem(symbol);
          switch (symbol.Sym) {
            case eSymbol.SCATTER:
              {
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[this.arrBgSpFrame.length - 1];
                this.Node_item.getComponent(Empire_symbolItem).Node_symbol.destroyFromParent();

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
                var arrRate = eRate[symbol.Sym - eSymbol.RED];
                for (var i = 0; i < 4; i++) {
                  var Label_rate = this.Node_icon.getChildByName("Label_rate_" + i).getComponent(Label);
                  Label_rate.string = "" + arrRate[i];
                }
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
        return Empire_symbolInfo;
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

System.register("chunks:///_virtual/Empire_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EmpireModel.ts', './EmpireDef.ts', './EventManager.ts', './EmpireUtils.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, sp, UITransform, v3, Sprite, isValid, tween, UIOpacity, Tween, Component, EmpireModel, eSymbol, eRunStatus, eZindex, eEvent, eSound, eConstDef, EventManager, EmpireUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      sp = module.sp;
      UITransform = module.UITransform;
      v3 = module.v3;
      Sprite = module.Sprite;
      isValid = module.isValid;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      EmpireModel = module.EmpireModel;
    }, function (module) {
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
      eEvent = module.eEvent;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      EmpireUtils = module.EmpireUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;
      cclegacy._RF.push({}, "28b76ZR5clBQaeVNqFeQkmu", "Empire_symbolItem", undefined);
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
        DROP: 5,
        END: 6
      });
      var Empire_symbolItem = exports('default', (_dec = ccclass("EmpireSymbolItem"), _dec2 = menu("game/EmpireGame/Empire_symbolItem"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Empire_symbolItem, _Component);
        function Empire_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
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
          _this.isChange = false;
          _this.isClear = false;
          return _this;
        }
        var _proto = Empire_symbolItem.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onSymbolClick, this);
        }
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
        };
        _proto.addEffectKuang = function addEffectKuang() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = true;
            _this2.scheduleOnce(function () {
              itemSpine.skeletonData = EmpireUtils.instance.getSkeletonData("kuang_effect");
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
              itemSpine.skeletonData = EmpireUtils.instance.getSkeletonData("kuang_light");
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
            itemSpine.skeletonData = EmpireUtils.instance.getSkeletonData("cloud");
            itemSpine.setAnimation(0, "animation", false);
            itemSpine.setCompleteListener(function () {
              itemSpine.setCompleteListener(null);
              newNode.destroyFromParent();
            });
          });
          this.node.addChild(newNode);
        };
        _proto.updateIcon = function updateIcon(Sym, length, isIdle) {
          var _this4 = this;
          if (isIdle === void 0) {
            isIdle = true;
          }
          var isSpine = false;
          switch (this.itemStatus) {
            case eItemStatus.Blink:
            case eItemStatus.STOP:
              {
                isSpine = Sym == eSymbol.SCATTER;
                break;
              }
            case eItemStatus.doEffect:
              {
                isSpine = Sym != eSymbol.WILD;
                break;
              }
            case eItemStatus.CLEAR:
              {
                isSpine = Sym == eSymbol.WILD && this.itemInfo.EffectCount > 1;
                break;
              }
          }
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }

            // if (Sym == EmpireDef.eSymbol.WILD) {
            //     gts.Debug.LogWarr(`==this.itemStatus=11=${this.itemStatus}=this.itemInfo.EffectCount=${this.itemInfo.EffectCount}`);
            // }
            this.scheduleOnce(function () {
              var itemSymbol = EmpireUtils.instance.getItemSymbolIcon(Sym, _this4.itemInfo.EffectCount);
              var itemSprite = _this4.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this4.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
            });
          } else {
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.enabled = false;
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = EmpireUtils.instance.getSkeletonData(Sym, _this4._isHorizontal);
              var itemSpine = _this4.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this4.Node_symbol.addComponent(sp.Skeleton);
              }
              // if (Sym == EmpireDef.eSymbol.WILD) {
              //     gts.Debug.LogWarr(`==this.itemStatus=00=${this.itemStatus}=this.itemInfo.EffectCount=${this.itemInfo.EffectCount}`);
              // }
              itemSpine.premultipliedAlpha = true;
              itemSpine.skeletonData = itemSymbol;
              _this4.scheduleOnce(function () {
                var aniList = EmpireUtils.instance.getSymbolAniName(Sym, length, isIdle, _this4.itemInfo.EffectCount);
                if (eSymbol.SCATTER && _this4.itemStatus == eItemStatus.Blink) {
                  itemSpine.setAnimation(0, aniList[1], false);
                } else {
                  itemSpine.setAnimation(0, aniList[0], false);
                }
              });
            });
          }
        };
        _proto.updateBox = function updateBox(Sym, length, rim) {
          //        //box
          var fBg = this.node.getComponent(Sprite);
          fBg.spriteFrame = EmpireUtils.instance.getItemSymbolIconBox(Sym, length, rim);
        };
        _proto.updateFrame = function updateFrame(rim, length) {
          //        //frame
          if (rim == 0) {
            var Sprite_frame = this.node.getChildByName("Sprite_frame");
            if (!isValid(Sprite_frame, true)) {
              return;
            }
            tween(Sprite_frame.getComponent(UIOpacity)).to(0.1, {
              opacity: 0
            }).call(function () {
              Sprite_frame.destroyFromParent();
            }).start();
          } else {
            var _Sprite_frame = this.node.getChildByName("Sprite_frame");
            if (!_Sprite_frame) {
              _Sprite_frame = new Node("Sprite_frame");
              _Sprite_frame.addComponent(UITransform);
              _Sprite_frame.addComponent(UIOpacity);
              this.node.addChild(_Sprite_frame);
              var spr = _Sprite_frame.addComponent(Sprite);
              spr.type = Sprite.Type.SLICED;
              spr.sizeMode = Sprite.SizeMode.CUSTOM;
            }
            _Sprite_frame.getComponent(UITransform).width = this.node.getComponent(UITransform).width;
            _Sprite_frame.getComponent(UITransform).height = this.node.getComponent(UITransform).height;
            _Sprite_frame.getComponent(UIOpacity).opacity = 0;
            tween(_Sprite_frame.getComponent(UIOpacity)).to(0.15, {
              opacity: 255
            }).start();
            _Sprite_frame.getComponent(Sprite).spriteFrame = EmpireUtils.instance.getItemSymbolIconFrame(rim, length);
          }
        };
        _proto.updateSymbol = function updateSymbol(isSpine, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          this.updateBox(this.itemInfo.Sym, this.itemInfo.Length, this.itemInfo.Rim);
          this.updateFrame(this.itemInfo.Rim, this.itemInfo.Length);
          this.updateIcon(this.itemInfo.Sym, this.itemInfo.Length, isIdle);
          this.updateZIndex(isIdle ? eRunStatus.RUNNING : eRunStatus.CLEAR);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          var _zIndex = 0;
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
              {
                _zIndex = EmpireModel.instance.specialStartCol > 0 ? eZindex.icon_scatterSPECIAL : eZindex.icon_scatter;

                // this.Node_symbol.getComponent(cc.UITransform).priority = EmpireDef.eZindex.icon_scatter;
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
                _zIndex = EmpireModel.instance.specialStartCol > 0 && this._iCol > EmpireModel.instance.specialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
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
                // this.node.getComponent(cc.UITransform).priority = EmpireDef.eZindex.iconWin;
                this.node.getComponent(UITransform).priority = eZindex.iconWin;
                break;
              }
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (EmpireModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var pos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);
        };
        _proto.doRunning = function doRunning(offset) {
          var _this5 = this;
          var ret = true;
          this._isHorizontal ? function () {
            _this5.node.setPosition(_this5.node.position.x - offset, _this5.node.position.y);
            var posSide = -186 - 62.5 - _this5.itemInfo.Length / 2 * 125;
            if (_this5.node.getPosition().x <= posSide) {
              ret = false;
            }
          }() : function () {
            _this5.node.setPosition(_this5.node.position.x, _this5.node.position.y - offset);
            var posSide = -208 - 52 - _this5.itemInfo.Length / 2 * 104;
            if (_this5.node.getPosition().y <= posSide) {
              ret = false;
            }
          }();
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this6 = this;
          if (offset === void 0) {
            offset = 0;
          }
          this.itemStatus = eItemStatus.STOP;
          return new Promise(function (resolve, reject) {
            _this6._isHorizontal ? function () {
              var pos_0 = _this6.node.getPosition().x + 10 + offset;
              var pos_1 = _this6.node.getPosition().x + offset;
              tween(_this6.node).to(0.15, {
                position: v3(pos_0, _this6.node.position.y)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(pos_1, _this6.node.position.y)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this6.updateIcon(_this6.itemInfo.Sym, _this6.itemInfo.Length);
                _this6.updateZIndex(eRunStatus.STOP);
                resolve();
              }).start();
            }() : function () {
              var pos_0 = _this6.node.getPosition().y + 10 + offset;
              var pos_1 = _this6.node.getPosition().y + offset;
              tween(_this6.node).to(0.15, {
                position: v3(_this6.node.position.x, pos_0)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(_this6.node.position.x, pos_1)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this6.updateIcon(_this6.itemInfo.Sym, _this6.itemInfo.Length);
                _this6.updateZIndex(eRunStatus.STOP);
                if (_this6.node.getPosition().y < -120) {
                  _this6.addCloundEffect();
                }
                resolve();
              }).start();
            }();
          });
        };
        _proto.doEffect = function doEffect(delay) {
          var _this7 = this;
          this.itemStatus = eItemStatus.doEffect;
          return new Promise(function (resolve, reject) {
            if (_this7.itemInfo.IsReward) {
              _this7.scheduleOnce(function () {
                _this7.updateSymbol(true, false);
                _this7.addEffectKuang().then(resolve);
              }, delay);
            } else {
              resolve();
            }
          });
        };
        _proto.doStartChange = function doStartChange() {
          var _this8 = this;
          this.itemInfo.Rim = this.itemInfo.Rim == 2 ? 0 : 2;
          this.isChange = true;
          if (this.itemInfo.Rim != 0) {
            EmpireUtils.instance.playOneShot(eSound.symSprChange);
            tween(this.Node_symbol).repeatForever(tween(this.Node_symbol).delay(0.05).call(function () {
              var sym = Math.floor(Math.random() * eSymbol.Q) + 3;
              _this8.updateBox(sym, _this8.itemInfo.Length, _this8.itemInfo.Rim);
              _this8.updateIcon(sym, _this8.itemInfo.Length);
            })).start();
          }
        };
        _proto.doEndChange = function doEndChange(newItemInfo) {
          var _this9 = this;
          if (this.isChange) {
            this.isChange = false;
            if (this.itemInfo.Sym == eSymbol.WILD) {
              this.updateSymbol();
            } else {
              this.scheduleOnce(function () {
                Tween.stopAllByTarget(_this9.Node_symbol);
                _this9.scheduleOnce(function () {
                  _this9.updateBox(newItemInfo.Sym, _this9.itemInfo.Length, _this9.itemInfo.Rim);
                  _this9.updateIcon(newItemInfo.Sym, newItemInfo.Length);
                });
                // this.node.getComponent(cc.UITransform).priority = EmpireDef.eZindex.icon;

                _this9.node.getComponent(UITransform).priority = eZindex.icon;
                if (_this9._spineEffect_kuangLight) {
                  // this._spineEffect_kuangLight.node.getComponent(cc.UITransform).priority = 20;
                  _this9._spineEffect_kuangLight.node.getComponent(UITransform).priority = 20;
                  _this9._spineEffect_kuangLight.setAnimation(0, "lv" + _this9.itemInfo.Length, false);
                  _this9._spineEffect_kuangLight.setCompleteListener(function () {
                    _this9._spineEffect_kuangLight.setCompleteListener(null);
                    _this9._spineEffect_kuangLight.node.destroyFromParent();
                    _this9._spineEffect_kuangLight = null;
                  });
                }
              }, 0.25);
            }
          }
        };
        _proto.doScatterBlink = function doScatterBlink() {
          this.itemStatus = eItemStatus.Blink;
          this.updateIcon(this.itemInfo.Sym, this.itemInfo.Length);
        };
        _proto.stopScatterBlink = function stopScatterBlink() {
          this.itemStatus = eItemStatus.STOP;
          this.updateIcon(this.itemInfo.Sym, this.itemInfo.Length);
        };
        _proto.doClear = function doClear() {
          var _this10 = this;
          this.itemStatus = eItemStatus.CLEAR;
          return new Promise(function (resolve, reject) {
            if (_this10.itemInfo.IsReward) {
              if (_this10.itemInfo.Sym == eSymbol.WILD && _this10.itemInfo.EffectCount > 1) {
                _this10.itemInfo.EffectCount--;
                _this10.itemInfo.IsReward = false;
                _this10.scheduleOnce(function () {
                  _this10.updateIcon(_this10.itemInfo.Sym, _this10.itemInfo.Length);
                }, 0.1);
                resolve();
              } else if (_this10.itemInfo.Rim != 0) {
                //                    //变换
                _this10.doStartChange();

                //                    //开始转动
                _this10.addEffectKuangLight().then(resolve);
              } else {
                tween(_this10.node.getComponent(UIOpacity)).delay(0.1).to(0.1, {
                  opacity: 0
                }).start();
                tween(_this10.node)
                //                        // .blink(3, 3)
                .to(0.05, {
                  scale: v3(1.2, 1.2, 1)
                }).to(0.05, {
                  scale: v3(1, 1, 1)
                })
                // .to(0.1, { opacity: 0 })
                .delay(0.5).call(function () {
                  _this10.isClear = true;
                  resolve();
                }).start();
              }
            } else {
              resolve();
            }
          });
        };
        _proto.doBindToUp = function doBindToUp() {
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
              {
                Empire_symbolItem.scatterNums = Empire_symbolItem.scatterNums % 3 + 1;
                EmpireUtils.instance.playOneShot("sound/new/Scatter" + Empire_symbolItem.scatterNums);
                break;
              }
          }
          if (this.itemInfo.Rim == 2) {
            this.addEffectKuangLight();
          }
        }
        //    // _doShake() {
        //    //     this.itemStatus = eItemStatus.SHAKE;
        //    //     return new Promise<void>((resolve, reject) => {
        //    //         this.scheduleOnce(() => {
        //    //             if (!this.isClear) {
        //    //                 this.node.runAction(cc.sequence(Empire_shake.create(0.5, 1.25, 1.25), cc.callFunc(resolve, this)));
        //    //             } else {
        //    //                 resolve();
        //    //             }
        //    //         }, 0.25);
        //    //     });
        //    // }
        ;

        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(toLength, isCloud, newIndex) {
            var _this11 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (isCloud === void 0) {
                    isCloud = false;
                  }
                  if (newIndex === void 0) {
                    newIndex = 0;
                  }
                  //        // await this._doShake();
                  isCloud = isCloud || newIndex > 0;
                  this.itemStatus = eItemStatus.DROP;
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    var curPos = _this11._isHorizontal ? _this11.node.getPosition().x : _this11.node.getPosition().y;
                    var toPos = 0;
                    if (_this11._isHorizontal) {
                      //                //横向
                      var offsetX = (toLength + _this11.itemInfo.Length / 2) * eConstDef.cSymbolW;
                      toPos = eConstDef.cSymbolStartX + offsetX;
                    } else {
                      var offsetY = (toLength + _this11.itemInfo.Length / 2) * eConstDef.cSymbolH;
                      toPos = eConstDef.cSymbolStartY + offsetY;
                    }
                    var offset = curPos - toPos;
                    if (offset <= 50) {
                      resolve();
                      return;
                    }
                    var dropSpeed = 1000;
                    //            // let offset = this._isHorizontal ? dropLength * EmpireDef.eConstDef.cSymbolW : dropLength * EmpireDef.eConstDef.cSymbolH;

                    var duration = offset / dropSpeed;
                    _this11.scheduleOnce(function () {
                      EmpireUtils.instance.playOneShot(eSound.drop_1);
                    }, duration);
                    var delayTimes = newIndex == 0 ? 0 : 0.2 + 0.05 * newIndex;
                    _this11._isHorizontal ? function () {
                      var pos_1 = _this11.node.getPosition().x - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this11.node).delay(delayTimes).to(duration, {
                        position: v3(pos_1, _this11.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_0, _this11.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_1, _this11.node.position.y)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        _this11.doBindToUp();
                        if (isCloud) {
                          _this11.addCloundEffect();
                        }
                        resolve();
                      }).start();
                    }() : function () {
                      var pos_1 = _this11.node.getPosition().y - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this11.node).delay(delayTimes).to(duration, {
                        position: v3(_this11.node.position.x, pos_1)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(_this11.node.position.x, pos_0)
                      }, {
                        easing: "cubicIn"
                      }).to(0.05, {
                        position: v3(_this11.node.position.x, pos_1)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        _this11.doBindToUp();
                        if (isCloud) {
                          _this11.addCloundEffect();
                        }
                        resolve();
                      }).start();
                    }();
                  }));
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doDrop(_x, _x2, _x3) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        return Empire_symbolItem;
      }(Component), _class2.scatterNums = 0, _class2.dropIndex = 0, _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Empire_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EmpireUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, EmpireUtils;
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
      EmpireUtils = module.EmpireUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "79732g6k5pAr46o4pQ4k32e", "Empire_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Empire_winTip = exports('default', (_dec = ccclass("EmpireWinTip"), _dec2 = menu("game/EmpireGame/Empire_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Empire_winTip, _Component);
        function Empire_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Empire_winTip.prototype;
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
            _this2.Label_win.string = EmpireUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            EmpireUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              //                    // this.Label_win.string = `${EmpireUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            EmpireUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return Empire_winTip;
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

System.register("chunks:///_virtual/EmpireCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './EmpireModel.ts', './I18n.ts', './ViewManager.ts', './EmpireDef.ts', './EmpireUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, EmpireModel, i18n, ViewManager, eProto, eEvent, eRunStatus, eSymbol, EmpireUtils, Common;
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
      EmpireModel = module.EmpireModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }, function (module) {
      EmpireUtils = module.EmpireUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "be62exmn/FN/olvj1D+YiYQ", "EmpireCtrl", undefined);
      var _cc$_decorator = _decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property;
      var EmpireCtrl = exports('EmpireCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(EmpireCtrl, _GameDef$BaseCtrl);
        function EmpireCtrl() {
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
          _this._model = EmpireModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = EmpireCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete EmpireCtrl._instance;
          EmpireCtrl._instance = null;
          EmpireModel.destroy();
          EmpireUtils.destroy();
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
        _proto.reqBet = function reqBet(buyFree) {
          if (buyFree === void 0) {
            buyFree = null;
          }
          if (!EmpireModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          if (buyFree) {
            EmpireModel.instance.curTotalBet = EmpireModel.instance.curBet * 1000 * 50;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: EmpireModel.instance.curBet * 1000,
              buyFree: true
            });
          } else {
            EmpireModel.instance.curTotalBet = EmpireModel.instance.curBet * 1000;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: EmpireModel.instance.curBet * 1000
            });
          }

          // this.onRecvData(this.getResult());
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotGoldenEmpire"
          });
        }

        // /**
        //  *搏一搏
        //  * @param type string "count" && "times"
        //  */
        // reqBoYiBo(type: string) {
        //     EmpireModel.instance.boType = type;
        //     NetManager.instance.sendOnlineData(EmpireDef.eProto.HD_BoYiBo, { betAmount: EmpireModel.instance.curBet * 1000, boType: type });
        // }

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
            RecordType: "slotGoldenEmpire"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(EmpireDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {
            betAmount: EmpireModel.instance.curBet * 1000
          });
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotGoldenEmpire"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotGoldenEmpire",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotGoldenEmpire"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotGoldenEmpire",
            content: strContent,
            msgId: msgid
          });
        }
        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // if (data.cmd == EmpireDef.eProto.HD_Bet) {
          //     data.Data = EmpireUtils.instance.getTestResult();
          // }

          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code));
            }
            // if (data.cmd == EmpireDef.eProto.HD_Enter || (data.Code == 402 && EmpireModel.instance.gameState.GameNo != EmpireModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(EmpireDef.eEvent.onLoadHall);
            //     return;
            // }

            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
              if (EmpireModel.instance.isAuto) {
                EmpireModel.instance.isAuto = false;
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
                EmpireModel.instance.clearGameData();
                EmpireModel.instance.gameInfo = data.Data;
                EmpireModel.instance.totalFreeTimes = EmpireModel.instance.gameInfo.FreeInfo.Count;
                EmpireModel.instance.curBet = EmpireModel.instance.gameInfo.BetAmount / 1000;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                EmpireModel.instance.betResult = data.Data;

                //test
                // EmpireModel.instance.betResult = this.getResult().Data;

                this.isReqBet = false;

                //判断是否有2个胡
                EmpireModel.instance.specialStartCol = 0;
                if (!EmpireModel.instance.isQuickStop) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = EmpireModel.instance.betResult.Res[0];
                    var iHuCounts = 0;
                    for (var iCol = 0; iCol < openResult.AllPosMsg.length - 1; iCol++) {
                      var AllPosMsg = openResult.AllPosMsg[iCol];
                      for (var iRow = 0; iRow < AllPosMsg.length; iRow++) {
                        var symbolInfo = AllPosMsg[iRow];
                        if (symbolInfo && symbolInfo.Sym == eSymbol.SCATTER) {
                          iHuCounts++;
                          if (iHuCounts > 2) {
                            EmpireModel.instance.specialStartCol = iCol + 1;
                            return;
                          }
                        }
                      }
                    }
                  };
                  checkSpecialRun();
                  gts.Debug.LogWarr("==EmpireModel.instance.specialStartCol==" + EmpireModel.instance.specialStartCol);
                  // //specialStartCol test
                  // EmpireModel.instance.specialStartCol = Math.floor(Math.random() * 2 + 3);
                }

                var doFreeTest = false;
                if (!doFreeTest) {
                  EmpireModel.instance.totalFreeTimes = EmpireModel.instance.betResult.FreeInfo.Count;
                } else {
                  // freeTest;
                  if (EmpireModel.instance.totalFreeTimes > 0) {
                    EmpireModel.instance.totalFreeTimes--;
                  } else {
                    EmpireModel.instance.totalFreeTimes = 12; //Math.random() > 0.25 ? Math.floor(Math.random() * 7 + 3) : 0;
                  }
                }

                gts.Debug.LogWarr("==EmpireModel.instance.totalFreeTimes==" + EmpireModel.instance.totalFreeTimes);
                if (EmpireModel.instance.freeStatus == eRunStatus.NONE) {
                  EmpireModel.instance.curBalance -= EmpireModel.instance.curTotalBet;
                }
                break;
              }
            // case EmpireDef.eProto.HD_BoYiBo:
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
                gts.Debug.LogWarr("==Empire=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (EmpireModel.instance.curBalance > 0) {
                  EmpireModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                EmpireModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Empire=pushWallet==" + _HD_Wallet.VndBalance);
                if (EmpireModel.instance.curBalance > 0) {
                  EmpireModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                EmpireModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        _proto.getResult = function getResult() {
          var data = {
            Action: "HD_Bet",
            Code: 0,
            Data: {
              FreeCount: 0,
              Res: []
            },
            ErrMsg: "Success",
            GameType: "slotGoldenEmpire",
            cmd: "slotGoldenEmpire/HD_Bet"
          };
          var Res = data.Data.Res;
          var newResult = this.getRandReuslt();
          Res.push(newResult);
          while (newResult.RewardMoney > 0) {
            newResult = this.getRandReuslt(newResult);
            Res.push(newResult);
          }

          // gts.Debug.LogWarr("==onRecvData=getResult=" + JSON.stringify(data));

          return data;
        };
        _proto.getRandReuslt = function getRandReuslt(oldResult) {
          if (oldResult === void 0) {
            oldResult = null;
          }
          var openResult = {
            AllPosMsg: [],
            ExtraOdd: 0,
            // ExtraPos: [],
            RewardMoney: 0,
            RewardPos: []
          };
          if (oldResult == null) {
            var ExtraPos = this.getRandSymbol(4);
            for (var i = 0; i < 6; i++) {
              var AllPosMsg = this.getRandSymbol(5, i == 0);
              if (i > 0 && i < 5) {
                AllPosMsg.push(ExtraPos[i - 1]);
              }
              openResult.AllPosMsg.push(AllPosMsg);
            }
          }
          var mapAllPosMsg = openResult.AllPosMsg;
          var RewardPos = [];
          var firstCol = mapAllPosMsg[0];
          var getRewardPos = function getRewardPos(symbol, col, arrPos) {
            var allPosMsg = mapAllPosMsg[col];
            for (var iRow = 0; iRow < allPosMsg.length; iRow++) {
              var symbolInfo = allPosMsg[iRow];
              if (symbolInfo.Sym == eSymbol.WILD || symbolInfo.Sym == symbol) {
                symbolInfo.IsReward = true;
                var arrTemp = arrPos.slice();
                arrTemp.push(iRow);
                if (col + 1 < mapAllPosMsg.length) {
                  getRewardPos(symbol, col + 1, arrTemp);
                } else if (arrTemp.length > 2) {
                  RewardPos.push(arrTemp);
                }
              }
            }
            if (arrPos.length > 2) {
              RewardPos.push(arrPos);
            }
          };
          for (var iRow = 0; iRow < firstCol.length; iRow++) {
            getRewardPos(firstCol[iRow].Sym, 1, [iRow]);
          }
          gts.Debug.Log("===RewardPos===" + JSON.stringify(RewardPos));
          if (RewardPos.length > 0) {
            // openResult.RewardPos = RewardPos;
            openResult.RewardMoney = 1000;
          }
          return openResult;
        };
        _proto.getRandSymbol = function getRandSymbol(maxIndex, isFirst) {
          if (isFirst === void 0) {
            isFirst = false;
          }
          var _resultInfoList = [];
          var _curLength = 0;
          for (var i = 0; i < maxIndex; i++) {
            var leftLength = maxIndex - _curLength;
            if (leftLength == 0) {
              break;
            }

            //
            var itemInfo = {
              Sym: isFirst ? Math.floor(Math.random() * (eSymbol.TEN - 2)) + 2 : Math.floor(Math.random() * eSymbol.TEN) + 1,
              Length: maxIndex == 4 ? 1 : leftLength >= 4 ? Math.floor(Math.random() * 4) + 1 : Math.floor(Math.random() * leftLength) + 1,
              Rim: Math.floor(Math.random() * 3),
              IsReward: false
            };
            if (itemInfo.Sym == eSymbol.WILD) {
              itemInfo.Rim = 0;
            }
            _resultInfoList.push(itemInfo);
            _curLength += itemInfo.Length;
          }
          return _resultInfoList;
        };
        return EmpireCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EmpireDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4dc5cLXOsRMcJkScOdsEt44", "EmpireDef", undefined);
      var cBundle = exports('cBundle', "EmpireGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotGoldenEmpire/HD_info";
        eProto["HD_Bet"] = "slotGoldenEmpire/HD_Bet";
        eProto["HD_Leave"] = "slotGoldenEmpire/HD_Leave";
        eProto["HD_History"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({})); //betAmount 金额
      // boType 博类型 string
      // if boType != "count" && boType != "times" {
      // return errCode.ErrParams.GetI18nMap(), nil
      // }
      // info := struct {
      //     Win bool json:"win"
      //     }{
      //     Win: win,
      //     }
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
        cStartDelay: 0.1,
        cQuickStopStartDelay: 0.005,
        cQuickStopDelay: 0.1,
        cStopDelay: 1.25,
        cSymbolW: 101,
        cSymbolH: 74,
        cSymbolStartX: -202,
        cSymbolStartY: -185,
        cSpeedMax: 4000,
        cSpeedMin: 2000,
        CSpeedStart: 2500,
        CSpeedAdd: 200,
        CSpeedReduse: 200
      }); // cSpeedMax = 1000,
      // cSpeedMin = 800,
      // CSpeedStart = 500,
      // CSpeedAdd = 50,
      // CSpeedReduse = 50,
      var arrBetList = exports('arrBetList', [1000, 2000, 3000, 5000, 8000, 10000, 20000, 30000, 40000, 50000, 80000, 100000, 200000, 500000, 1000000]);
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        START: 1,
        RUNNING: 2,
        STOPPING: 3,
        STOP: 4,
        CLEAR: 5,
        SHAKE: 6,
        DROP: 7,
        END: 8
      });
      var eRunType = exports('eRunType', {
        NONE: 0,
        SPECIAL: 1
      });
      var eSymbol = exports('eSymbol', {
        SCATTER: 0,
        WILD: 1,
        RED: 2,
        PURPLE: 3,
        GREEN: 4,
        BLUE: 5,
        GREY: 6,
        A: 7,
        K: 8,
        Q: 9,
        J: 10,
        TEN: 11
      });
      var cRate = exports('cRate', {
        "2": {
          3: 50,
          4: 100,
          5: 150,
          6: 200
        },
        "3": {
          3: 40,
          4: 80,
          5: 120,
          6: 160
        },
        "4": {
          3: 30,
          4: 60,
          5: 90,
          6: 120
        },
        "5": {
          3: 25,
          4: 50,
          5: 75,
          6: 100
        },
        "6": {
          3: 20,
          4: 40,
          5: 60,
          6: 80
        },
        "7": {
          3: 15,
          4: 30,
          5: 15,
          6: 60
        },
        "8": {
          3: 10,
          4: 20,
          5: 30,
          6: 40
        },
        "9": {
          3: 10,
          4: 20,
          5: 30,
          6: 40
        },
        "10": {
          3: 5,
          4: 10,
          5: 15,
          6: 20
        },
        "11": {
          3: 5,
          4: 10,
          5: 15,
          6: 20
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
        eEvent["onCatNumMove"] = "onCatNumMove";
        eEvent["onCatNumAdd"] = "onCatNumAdd";
        eEvent["onSymbolBreak"] = "onSymbolBreak";
        eEvent["onSetAuto"] = "onSetAuto";
        eEvent["onAutoClose"] = "onAutoClose";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bgNomal: "sound/new/BGM_MG",
        bgFree: "sound/new/BGM_FG",
        bigWin: "sound/new/Big_win",
        bigWinEnd: "sound/new/Big_win_end",
        coin: "sound/new/coin",
        coin_End: "sound/new/coin_End",
        startRun: "sound/new/Reel_run",
        Scatter1: "sound/new/Scatter1",
        Scatter2: "sound/new/Scatter2",
        Scatter3: "sound/new/Scatter3",
        Combo_f_x2: "sound/new/Combo_f_x2",
        Combo_f_x2_fast: "sound/new/Combo_f_x2_fast",
        Small_win_01: "sound/new/Small_win_01",
        Small_win_02: "sound/new/Small_win_02",
        Small_win_03: "sound/new/Small_win_03",
        Scatter_bell: "sound/new/Scatter_bell",
        FG_Add: "sound/new/FG_Add",
        FG_getX: "sound/new/FG_getX",
        FG_End: "sound/new/FG_End",
        free_winEffect: "sound/free_winEffect",
        drop_1: "sound/drop_1",
        freeEnd_0: "sound/freeEnd_0",
        freeEnd_1: "sound/freeEnd_1",
        scarret: "sound/scatter_running",
        symSprChange: "sound/symSprChange",
        quickStop: "sound/quick",
        rateChange: "sound/rateChange"
      }); //////////////////////////

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EmpireGame", ['./EmpireCtrl.ts', './EmpireDef.ts', './EmpireModel.ts', './EmpireScene.ts', './EmpireUtils.ts', './EmpireGameView.ts', './Empire_btnEffect.ts', './Empire_setBase.ts', './Empire_shake.ts', './Empire_symbol.ts', './Empire_symbolEffectRoot.ts', './Empire_symbolInfo.ts', './Empire_symbolItem.ts', './Empire_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/EmpireGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './EmpireDef.ts', './EmpireModel.ts', './EmpireCtrl.ts', './ViewManager.ts', './EmpireUtils.ts', './GUtil.ts', './Empire_symbol.ts', './Empire_symbolItem.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, Button, sp, Label, SpriteFrame, tween, v3, UITransform, instantiate, UIOpacity, find, Tween, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, eZindex, eSound, eConstDef, eProto, EmpireModel, EmpireCtrl, ViewManager, EmpireUtils, GUtil, Empire_symbol, Empire_symbolItem, Common, AudioManager;
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
      Sprite = module.Sprite;
      Button = module.Button;
      sp = module.sp;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
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
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
      eProto = module.eProto;
    }, function (module) {
      EmpireModel = module.EmpireModel;
    }, function (module) {
      EmpireCtrl = module.EmpireCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EmpireUtils = module.EmpireUtils;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      Empire_symbol = module.default;
    }, function (module) {
      Empire_symbolItem = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "d1718NH0GhEur6aTCcf8MpH", "EmpireGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var EmpireGameView = exports('default', (_dec = ccclass("EmpireGameView"), _dec2 = menu("game/EmpireGame/EmpireGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(Empire_symbol), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(sp.Skeleton), _dec14 = property(sp.Skeleton), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(sp.SkeletonData), _dec25 = property(SpriteFrame), _dec26 = property(Button), _dec27 = property(sp.Skeleton), _dec28 = property(Node), _dec29 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(EmpireGameView, _GameDef$BaseView);
        function EmpireGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_mask_0", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_mask_1_6", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolRoot", _descriptor5, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // Node_helpTip: cc.Node = null;
          //    // @property(cc.Node)
          //    // Node_winTip: cc.Node = null;
          _initializerDefineProperty(_this, "Empire_symbolList", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor10, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // Skeleton_run: sp.Skeleton = null;
          _initializerDefineProperty(_this, "Skeleton_setBase", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_Node_bg", _descriptor12, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // Node_tipEffect: sp.Skeleton = null;
          //    // @property(cc.Button)
          //    // Button_buy: cc.Button = null;
          _initializerDefineProperty(_this, "Label_gold", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_symRate", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWinFreeEnd", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeTimesFreeEnd", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWinBig", _descriptor19, _assertThisInitialized(_this));
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrRoomSpFrame", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_auto", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layout_winTip", _descriptor27, _assertThisInitialized(_this));
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          _this.isStopBigWin = false;
          _this.freeRate = 1;
          return _this;
        }
        var _proto = EmpireGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, EmpireCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          //        // EventManager.instance.on(EmpireDef.eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            //                // this.Node_info.node.active = true;
            //                // this.Node_info.showSymbolInfo(symbol, symbolNode, pos);
            if (EmpireModel.instance.gameStatus == eRunStatus.NONE && !EmpireModel.instance.isAuto && EmpireModel.instance.freeStatus == eRunStatus.NONE && !EmpireCtrl.instance.isReqBet && EmpireModel.instance.totalFreeTimes == 0) {
              EmpireCtrl.instance.reqBet();
            }
          }, this);

          //        // EventManager.instance.on(
          //        //     EmpireDef.eEvent.onSetAuto,
          //        //     (times) => {
          //        //         if (times && times > 0) {
          //        //             EmpireModel.instance.autoTimes = times;

          //        //             EmpireModel.instance.isAuto = true;

          //        //             this.Button_run.interactable = true;
          //        //             // this.Button_run.node.emit("pauseEffect");
          //        //             // let btnRunEffect = this.Button_run.node.getComponent(Empire_btnEffect);
          //        //             // btnRunEffect.switchAni("push2");

          //        //             // this.Skeleton_run.setAnimation(0, "auto", true);

          //        //             if (EmpireModel.instance.gameStatus == EmpireDef.eRunStatus.NONE) {
          //        //                 this.scheduleOnce(() => {
          //        //                     EmpireCtrl.instance.reqBet();
          //        //                 }, 0.5);
          //        //             }
          //        //         }

          //        //         this.Button_auto.interactable = !EmpireModel.instance.isAuto;
          //        //         // this.Label_autoTimes.node.active = EmpireModel.instance.isAuto;
          //        //         // EmpireUtils.instance.updateLabel(this.Label_autoTimes, EmpireModel.instance.autoTimes);
          //        //     },
          //        //     this
          //        // );
          //        // EventManager.instance.on(
          //        //     EmpireDef.eEvent.onAutoClose,
          //        //     (times) => {
          //        //         EmpireModel.instance.autoTimes = 0;
          //        //         EmpireModel.instance.isAuto = false;
          //        //         // this.Button_buy.interactable = true;

          //        //         // this.Skeleton_run.setCompleteListener(null);
          //        //         // this.Skeleton_run.setAnimation(0, "idle", true);
          //        //         // this.Button_run.interactable = true;
          //        //         // this.Button_run.node.emit("resumeEffect");

          //        //         // let btnRunEffect = this.Button_run.node.getComponent(Empire_btnEffect);
          //        //         // btnRunEffect.switchAni();

          //        //         // EmpireUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

          //        //         this.Button_auto.interactable = true;
          //        //         // this.Label_autoTimes.node.active = false;
          //        //         // EmpireUtils.instance.updateLabel(this.Label_autoTimes, EmpireModel.instance.autoTimes);
          //        //     },
          //        //     this
          //        // );
        };

        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          //        // EventManager.instance.off(EmpireDef.eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSymbolClick);
          EventManager.instance.off(eEvent.onSetAuto);
          EventManager.instance.off(eEvent.onAutoClose);
          EmpireModel.instance.clearGameData();
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
              //                // EmpireCtrl.instance.reEnterRoom();

              if (EmpireModel.instance.isAuto && EmpireCtrl.instance.isReqBet) {
                EmpireCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this2 = this;
          this.Skeleton_setBase.setAnimation(0, "intro", false);
          this.Skeleton_setBase.addAnimation(0, "off", true);
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this2.Label_bet.string = EmpireUtils.instance.numberFormat(EmpireModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this3 = this;
          //        // let _curIndex_baseScore = cc.sys.localStorage.getItem(`${EmpireDef.eAutoRateType.baseScore}_curIndex`);
          //        // _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          //        // let _curIndex_baseRate = cc.sys.localStorage.getItem(`${EmpireDef.eAutoRateType.baseRate}_curIndex`);
          //        // _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          //        // let _curIndex_baseBet = cc.sys.localStorage.getItem(`${EmpireDef.eAutoRateType.baseBet}_curIndex`);
          //        // _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;

          EmpireModel.instance.curBet = 1; //(_curIndex_baseScore == 0 ? 0.1 : _curIndex_baseScore * 0.5) * (_curIndex_baseRate + 1) * 20;

          //        // EmpireModel.instance._curIndex_baseScore = _curIndex_baseScore;
          //        // EmpireModel.instance._curIndex_baseRate = _curIndex_baseRate;
          //        // EmpireModel.instance._curIndex_baseBet = _curIndex_baseBet;

          EmpireUtils.instance.loadRes_icon(function () {
            //            //test
            //            // for (let i = 0; i < this.Empire_symbolList.length; i++) {
            //            //     this.Empire_symbolList[i].init();
            //            // }

            EmpireCtrl.instance.reqEnterRoom();

            // this.Node_mask_0.getComponent(cc.UITransform).priority = EmpireDef.eZindex.MASK;
            // this.Node_mask_1_6.getComponent(cc.UITransform).priority = EmpireDef.eZindex.MASK;
            _this3.Node_mask_0.getComponent(UITransform).priority = eZindex.MASK;
            _this3.Node_mask_1_6.getComponent(UITransform).priority = eZindex.MASK;
          });
          this.Label_bet.string = EmpireUtils.instance.numberFormat(EmpireModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
        }
        //    // onToggleClick(event) {
        //    //     switch (event.node.name) {
        //    //         case "Button_fast": {
        //    //             //快速停止
        //    //             EmpireModel.instance.isQuickStop = !EmpireModel.instance.isQuickStop;
        //    //             break;
        //    //         }
        //    //     }
        //    // }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this4 = this;
          switch (event.target.name) {
            case "Button_fast":
              {
                //                //快速停止
                EmpireModel.instance.isQuickStop = !EmpireModel.instance.isQuickStop;
                break;
              }
            case "Node_bigWinEffect":
              {
                this.isStopBigWin = true;
                break;
              }
            //            //返回
            case "Button_menu":
              {
                //                // this.Node_action.active = !this.Node_action.active;
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "Button_return":
              {
                EmpireCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                //                // Common.loadPopBuddle(
                //                //     "prefab/Node_history",
                //                //     EmpireUtils.instance.bundle,
                //                //     () => {},
                //                //     (help) => {
                //                //         let Node_history = cc.instantiate(help);

                //                //         ViewManager.instance.popNodeView(Node_history, true);
                //                //     },
                //                //     true
                //                // );

                GUtil.openRecord("slotGoldenEmpire");
                break;
              }
            case "Button_rank":
              {
                //                // Common.loadPopBuddle(
                //                //     "prefab/Node_rank",
                //                //     EmpireUtils.instance.bundle,
                //                //     () => {},
                //                //     (help) => {
                //                //         let Node_rank = cc.instantiate(help);

                //                //         ViewManager.instance.popNodeView(Node_rank, true);
                //                //     },
                //                //     true
                //                // );
                GUtil.openRank("slotGoldenEmpire");
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", EmpireUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_auto":
              {
                if (EmpireModel.instance.freeStatus != eRunStatus.NONE) {
                  break;
                }
                EmpireModel.instance.isAuto = !EmpireModel.instance.isAuto;
                this.Button_run.interactable = !EmpireModel.instance.isAuto;
                this.Skeleton_auto.setAnimation(0, EmpireModel.instance.isAuto ? "on" : "idle", true);
                if (EmpireModel.instance.gameStatus == eRunStatus.NONE && EmpireModel.instance.isAuto) {
                  EmpireCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_run":
              {
                //                // this.doStartRun();
                if (EmpireCtrl.instance.isReqBet || EmpireModel.instance.gameStatus != eRunStatus.NONE || EmpireModel.instance.freeStatus != eRunStatus.NONE || EmpireModel.instance.totalFreeTimes > 0) {
                  break;
                }
                this.Button_run.interactable = false;
                tween(event.target).delay(2).call(function () {
                  if (!EmpireModel.instance.isAuto && EmpireModel.instance.gameStatus == eRunStatus.NONE) {
                    _this4.Button_run.interactable = true;
                  }
                }).start();
                EmpireCtrl.instance.reqBet();
                break;
              }
            case "Button_setBase":
              {
                if (EmpireModel.instance.gameStatus != eRunStatus.NONE || EmpireModel.instance.isAuto || EmpireModel.instance.freeStatus != eRunStatus.NONE) {
                  return;
                }
                this.Skeleton_setBase.setAnimation(0, "intro", false);
                Common.loadPopBuddle("prefab/Node_setBase", EmpireUtils.instance.bundle, function () {}, function (help) {
                  _this4.Skeleton_setBase.addAnimation(0, "off", true);
                  var setBase = instantiate(help);
                  ViewManager.instance.popNodeView(setBase, true);
                }, true);
                break;
              }
            case "Button_exit":
              {
                this.hideFree();
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
            }
            EmpireUtils.instance.stopSound(eSound.scarret);
            var setCol = iCol + 1;
            if (setCol < this.Empire_symbolList.length) {
              EmpireUtils.instance.playOneShot(eSound.scarret);

              //                // this.Node_colEffect.zIndex = EmpireDef.eZindex.SPECIAL - 2 * (iCol + 1) - 1;

              // this.Node_colEffect.getComponent(cc.UITransform).priority = EmpireDef.eZindex.SPECIAL + 100;
              this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL + 100;
              this.Node_colEffect.setPosition(this.Empire_symbolList[iCol + 1].node.getPosition().x, this.Node_colEffect.position.y);
            }
          }
        };
        _proto.showMask = function showMask(isShow) {
          var _this5 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            //            //mask hide
            if (this.Node_mask_0.active) {
              tween(this.Node_mask_0.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                _this5.Node_mask_0.active = false;
              }).start();
            }
            if (this.Node_mask_1_6.active) {
              tween(this.Node_mask_1_6.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                _this5.Node_mask_1_6.active = false;
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
          var _this6 = this;
          if (EmpireModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          this.Label_symRate.string = "...";
          this.clearWinTip();
          if (EmpireModel.instance.freeStatus != eRunStatus.NONE) {
            this.Skeleton_Node_bg.setAnimation(0, "spin", true);
          } else {
            EmpireModel.instance.curTotalWin = 0;
            this.Label_win.string = "0.00";
          }
          this.Button_run.interactable = false;

          //        // EventManager.instance.emit(EmpireDef.eEvent.updateWin, 0);

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
                  for (i = 0; i < _this6.Empire_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = EmpireModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = EmpireModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    stopDelay += EmpireModel.instance.specialStartCol > 0 && i > EmpireModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (i - EmpireModel.instance.specialStartCol) : 0;
                    arrPro.push(_this6.Empire_symbolList[i].doStart(startDelay, stopDelay));
                  }
                  _context.next = 4;
                  return Promise.all(arrPro);
                case 4:
                  _this6.scheduleOnce(_this6.doRunEnd, 0);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          EmpireModel.instance.gameStatus = eRunStatus.RUNNING;

          //        // this.Skeleton_run.setAnimation(0, "quay", false);
          //        // this.Skeleton_run.addAnimation(0, "idle", true);

          EmpireUtils.instance.playOneShot(eSound.startRun);
          if (EmpireModel.instance.freeStatus == eRunStatus.RUNNING) {
            var Node_freeStyle = this.Node_free.getChildByName("Node_freeStyle");
            var Label_freeTimes = Node_freeStyle.getChildByName("Label_freeTimes");
            Label_freeTimes.getComponent(Label).string = "" + EmpireModel.instance.totalFreeTimes;
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this7 = this;
            var symRate, result, i, resultList, _loop, _i, delayStart, arrPro, _i2;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  EmpireModel.instance.gameStatus = eRunStatus.CLEAR;
                  //        // this.Button_run.interactable = false;

                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this7.Node_colEffect.active = false;
                    }).start();
                  }
                  symRate = 1;
                  result = EmpireModel.instance.betResult.Res[0];
                  for (i = 0; i < result.AllPosMsg.length; i++) {
                    symRate *= result.AllPosMsg[i].length;
                  }
                  EmpireUtils.instance.updateLabelNomal(this.Label_symRate, symRate);
                  resultList = EmpireModel.instance.betResult.Res;
                  EmpireModel.instance.specialStartCol = 0;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var result, resultNext, _arrPro, _i3, wiNInfo, _iterator2, _step2, info, _i4, _i5, _symRate, _i6, Node_freeStyle, Label_rate, Node_levelUp;
                    return _regeneratorRuntime().wrap(function _loop$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          result = resultList[_i];
                          if (_i > 0) {
                            Empire_symbolItem.scatterNums = 0;
                          }
                          if (!(result.RewardMoney > 0)) {
                            _context2.next = 33;
                            break;
                          }
                          resultNext = resultList[_i + 1];
                          _this7.scheduleOnce(function () {
                            _this7.showMask();
                          }, 0.5);

                          //                //doEffect
                          _arrPro = [];
                          for (_i3 = 0; _i3 < _this7.Empire_symbolList.length; _i3++) {
                            _arrPro.push(_this7.Empire_symbolList[_i3].doEffect());
                          }
                          _context2.next = 9;
                          return Promise.all(_arrPro);
                        case 9:
                          _this7.Layout_winTip.removeAllChildren();
                          wiNInfo = EmpireUtils.instance.getWiNInfo(result);
                          for (_iterator2 = _createForOfIteratorHelperLoose(wiNInfo); !(_step2 = _iterator2()).done;) {
                            info = _step2.value;
                            _this7.showWinTip(info.sym, info.count, info.base, info.lines);
                          }
                          if (wiNInfo.length <= 2) {
                            EmpireUtils.instance.playOneShot(eSound.Small_win_01);
                          } else if (wiNInfo.length <= 4) {
                            EmpireUtils.instance.playOneShot(eSound.Small_win_02);
                          } else {
                            EmpireUtils.instance.playOneShot(eSound.Small_win_03);
                          }
                          if (EmpireModel.instance.freeStatus != eRunStatus.NONE) {
                            _this7.freeRate++;
                            _this7.Skeleton_Node_bg.setAnimation(0, "win", false);
                            _this7.Skeleton_Node_bg.addAnimation(0, "idle", true);
                          }

                          //                //gengxin
                          EmpireUtils.instance.updateLabelAddNf(_this7.Label_win, EmpireModel.instance.curTotalWin + result.RewardMoney, false, EmpireModel.instance.curTotalWin);
                          EmpireModel.instance.curTotalWin += result.RewardMoney;
                          //                // EventManager.instance.emit(EmpireDef.eEvent.updateWin, EmpireModel.instance.curTotalWin);

                          if (EmpireModel.instance.isQuickStop) {
                            EmpireUtils.instance.playSound(eSound.Combo_f_x2_fast);
                          } else {
                            EmpireUtils.instance.playSound(eSound.Combo_f_x2);
                          }
                          _this7.showMask(false);
                          _arrPro = [];
                          for (_i4 = 0; _i4 < _this7.Empire_symbolList.length; _i4++) {
                            _arrPro.push(_this7.Empire_symbolList[_i4].doClear());
                          }
                          _context2.next = 22;
                          return Promise.all(_arrPro);
                        case 22:
                          //                //play sound
                          //                // if (i == 2) {
                          //                //     EmpireUtils.instance.playSound(EmpireDef.eSound.nice_0);
                          //                // } else if (i > 2) {
                          //                //     EmpireUtils.instance.playSound(EmpireDef.eSound.nice_1);
                          //                // }

                          //                //drop
                          _arrPro = [];
                          for (_i5 = 0; _i5 < _this7.Empire_symbolList.length; _i5++) {
                            _arrPro.push(_this7.Empire_symbolList[_i5].doDrop(resultNext));
                          }
                          _context2.next = 26;
                          return Promise.all(_arrPro);
                        case 26:
                          gts.Debug.Log("==========doDrop========");
                          _symRate = 1;
                          for (_i6 = 0; _i6 < resultNext.AllPosMsg.length; _i6++) {
                            _symRate *= resultNext.AllPosMsg[_i6].length;
                          }
                          if (parseInt(_this7.Label_symRate.string) != _symRate) {
                            EmpireUtils.instance.updateLabelNomal(_this7.Label_symRate, _symRate);
                          }
                          if (EmpireModel.instance.freeStatus != eRunStatus.NONE) {
                            Node_freeStyle = _this7.Node_free.getChildByName("Node_freeStyle");
                            Label_rate = Node_freeStyle.getChildByName("Label_rate");
                            Node_levelUp = Node_freeStyle.getChildByName("Node_levelUp");
                            Node_levelUp.active = true;
                            Node_levelUp.getComponent(sp.Skeleton).setAnimation(0, "idle", false);
                            Node_levelUp.getComponent(sp.Skeleton).setCompleteListener(function () {
                              Node_levelUp.getComponent(sp.Skeleton).setCompleteListener(null);
                              Node_levelUp.active = false;
                            });
                            EmpireUtils.instance.playOneShot(eSound.FG_getX);
                            tween(Label_rate).to(0.1, {
                              scale: v3(1.2, 1.2, 1)
                            }).call(function () {
                              Label_rate.getComponent(Label).string = "*" + _this7.freeRate;
                            }).to(0.1, {
                              scale: v3(1.0, 1.0, 1)
                            }).start();
                          }

                          //                // gts.Debug.Log("=doEnd=" + i + "==" + "=result=" + JSON.stringify(result));
                          _context2.next = 34;
                          break;
                        case 33:
                          if (EmpireModel.instance.freeStatus != eRunStatus.NONE) {
                            _this7.Skeleton_Node_bg.setAnimation(0, "idle", true);
                          }
                        case 34:
                        case "end":
                          return _context2.stop();
                      }
                    }, _loop);
                  });
                  _i = 0;
                case 11:
                  if (!(_i < resultList.length)) {
                    _context3.next = 16;
                    break;
                  }
                  return _context3.delegateYield(_loop(), "t0", 13);
                case 13:
                  _i++;
                  _context3.next = 11;
                  break;
                case 16:
                  this.showMask(false);
                  delayStart = 0.25;
                  if (!(EmpireModel.instance.curTotalWin > 0)) {
                    _context3.next = 26;
                    break;
                  }
                  if (!(EmpireModel.instance.freeStatus == eRunStatus.NONE)) {
                    _context3.next = 22;
                    break;
                  }
                  _context3.next = 22;
                  return this.doShowBigWin(EmpireModel.instance.curTotalWin);
                case 22:
                  delayStart = 1.5;
                  if (EmpireModel.instance.endBalance > 0) {
                    EmpireModel.instance.curBalance = EmpireModel.instance.endBalance;
                    EmpireModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                  _context3.next = 27;
                  break;
                case 26:
                  if (EmpireModel.instance.isQuickStop) {
                    EmpireUtils.instance.playOneShot(eSound.quickStop);
                  }
                case 27:
                  //        // EmpireModel.instance.isAuto = EmpireModel.instance.autoTimes > 0;
                  //        // if (!EmpireModel.instance.isAuto) {
                  //        // this.Button_buy.interactable = true;

                  //        // this.Skeleton_run.setCompleteListener(null);
                  //        // this.Skeleton_run.setAnimation(0, "idle", true);
                  //        // this.Button_run.interactable = true;
                  //        // this.Button_run.node.emit("resumeEffect");

                  //        // let btnRunEffect = this.Button_run.node.getComponent(Empire_btnEffect);
                  //        // btnRunEffect.switchAni();

                  //        // EmpireUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                  //        // this.Button_auto.interactable = true;
                  //        // this.Label_autoTimes.node.active = false;
                  //        // EmpireUtils.instance.updateLabel(this.Label_autoTimes, EmpireModel.instance.autoTimes);
                  //        // }

                  //        // this.Skeleton_run.setAnimation(0, "normal", true);

                  EmpireModel.instance.gameStatus = eRunStatus.NONE;
                  //        // if (!this.Button_buy.node.active && EmpireModel.instance.freeStatus == EmpireDef.eRunStatus.NONE) {
                  //        //     let pos = this.Button_buy.node.y;
                  //        //     this.Button_buy.node.y -= 30;
                  //        //     this.Button_buy.node.opacity = 0;
                  //        //     this.Button_buy.node.active = true;
                  //        //     cc.tween(this.Button_buy.node).to(0.2, { opacity: 255, y: pos }).start();
                  //        //     // this.scaleCatNum();
                  //        // }

                  //        //free and auto
                  if (!(EmpireModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context3.next = 43;
                    break;
                  }
                  EmpireModel.instance.totalFreeWin = EmpireModel.instance.curTotalWin;
                  this.Node_bigWin.active = false;
                  if (!(EmpireModel.instance.totalFreeTimes > 0)) {
                    _context3.next = 35;
                    break;
                  }
                  this.scheduleOnce(function () {
                    EmpireCtrl.instance.reqBet();
                  }, delayStart);
                  _context3.next = 41;
                  break;
                case 35:
                  EmpireModel.instance.totalRate = EmpireModel.instance.totalFreeWin / (EmpireModel.instance.curBet * 1000);
                  this.curBigWinLevel = EmpireModel.instance.totalRate < 10 ? 0 : EmpireModel.instance.totalRate < 15 ? 1 : 2;

                  //                //大奖
                  _context3.next = 39;
                  return this.doShowBigWin(EmpireModel.instance.totalFreeWin);
                case 39:
                  EmpireModel.instance.freeStatus = eRunStatus.END;
                  this.doEndFree();
                case 41:
                  _context3.next = 52;
                  break;
                case 43:
                  if (!(EmpireModel.instance.totalFreeTimes > 0)) {
                    _context3.next = 51;
                    break;
                  }
                  arrPro = [];
                  for (_i2 = 0; _i2 < this.Empire_symbolList.length; _i2++) {
                    arrPro.push(this.Empire_symbolList[_i2].doScatterBlink());
                  }
                  _context3.next = 48;
                  return Promise.all(arrPro);
                case 48:
                  this.scheduleOnce(function () {
                    _this7.showFree();
                  }, 0.5);
                  _context3.next = 52;
                  break;
                case 51:
                  if (EmpireModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      EmpireCtrl.instance.reqBet();
                    }, delayStart);
                  } else {
                    this.Button_run.interactable = true;
                  }
                case 52:
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
        _proto.doShowBigWin = function doShowBigWin(destWin, delay) {
          var _this8 = this;
          if (delay === void 0) {
            delay = 0.5;
          }
          return new Promise(function (resolve, reject) {
            var rate = destWin / (EmpireModel.instance.curBet * 1000);
            if (destWin <= 1 || rate < 10) {
              //                //30
              resolve();
              return;
            }
            _this8.scheduleOnce(function () {
              //                //大奖显示
              _this8.Node_bigWin.parent = _this8.node;
              // this.Node_bigWin.getComponent(cc.UITransform).priority = 52;
              _this8.Node_bigWin.getComponent(UITransform).priority = 52;
              _this8.Node_bigWin.active = true;
              _this8.Node_bigWin.scale = v3(0.5, 0.5, 1);
              var Node_bigWinEffect = _this8.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
              var level = rate < 15 ? 0 : rate < 20 ? 1 : 2;
              var ani = ["bigwin", "megawin", "superwin"];
              var aniIdle = ["bigwin_idle", "megawin_idle", "superwin_idle"];
              var TrackEntry = Node_bigWinEffect.setAnimation(0, ani[level] + "_intro", false);
              Node_bigWinEffect.addAnimation(0, aniIdle[level], true);
              tween(_this8.Node_bigWin).to(0.1, {
                scale: v3(1.2, 1.2, 1)
              }, {
                easing: "quadOut"
              }).to(0.05, {
                scale: v3(1, 1, 1)
              }, {
                easing: "quadIn"
              }).call(function () {
                EmpireUtils.instance.playSound(eSound.bigWin);
                EmpireUtils.instance.playSound(eSound.coin);
                var totalTime = TrackEntry.animation.duration;
                var dt = 0.05;
                var updateTimes = totalTime / dt;
                var disWin = Math.floor(destWin / updateTimes);
                var curTotalWin = 0;
                tween(_this8.Label_totalWinBig.node).repeatForever(tween(_this8.Label_totalWinBig.node).delay(dt).call(function () {
                  var doEnd = function doEnd(delay) {
                    if (delay === void 0) {
                      delay = 1.0;
                    }
                    var ani = ["bigwin_idle", "megawin_idle", "superwin_idle"];
                    if (_this8.isStopBigWin && Node_bigWinEffect.animation != ani[level]) {
                      Node_bigWinEffect.setAnimation(0, ani[level], true);
                      delay = 2.0;
                    }
                    _this8.isStopBigWin = false;
                    EmpireUtils.instance.stopSound(eSound.bigWin);
                    EmpireUtils.instance.playSound(eSound.bigWinEnd);
                    EmpireUtils.instance.stopSound(eSound.coin);
                    EmpireUtils.instance.playSound(eSound.coin_End);
                    Tween.stopAllByTarget(_this8.Node_bigWin);
                    Tween.stopAllByTarget(_this8.Label_totalWinBig.node);
                    curTotalWin = destWin;
                    tween(_this8.Node_bigWin).delay(delay).call(function () {
                      _this8.Node_bigWin.active = false;
                      resolve();
                    }).start();
                    var inter = Common.numFormatInt(curTotalWin / 1000);
                    var digit = EmpireUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                    _this8.Label_totalWinBig.string = "" + inter + digit + "K";
                  };
                  if (curTotalWin < destWin) {
                    curTotalWin += disWin;
                    if (curTotalWin >= destWin) {
                      curTotalWin = destWin;
                      doEnd(EmpireModel.instance.isAuto || EmpireModel.instance.freeStatus == eRunStatus.NONE ? 2.0 : 4);
                      var inter = Common.numFormatInt(curTotalWin / 1000);
                      var digit = EmpireUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                      _this8.Label_totalWinBig.string = "" + inter + digit + "K";
                    } else {
                      var _inter = Common.numFormatInt(curTotalWin / 1000);
                      var _digit = EmpireUtils.instance.numberFormatFloatD(curTotalWin / 1000, 2.0);
                      _this8.Label_totalWinBig.string = "" + _inter + _digit + "K";
                    }
                  }
                  if (_this8.isStopBigWin) {
                    //                                            //点击停止
                    doEnd();
                  }
                })).start();
              }).start();
            }, delay);
          });
        };
        _proto.clearWinTip = function clearWinTip() {
          this.Layout_winTip.removeAllChildren();
        };
        _proto.showWinTip = function showWinTip(sym, count, base, lines) {
          var Node_winTip = instantiate(this.Node_winTip);
          Node_winTip.active = true;
          var Sprite_icon = Node_winTip.getChildByName("Sprite_icon").getComponent(Sprite);
          Sprite_icon.spriteFrame = EmpireUtils.instance.getItemSymbolIconBox(sym, 1);
          var Label_num = find("Sprite_icon/Label_num", Node_winTip).getComponent(Label);
          Label_num.string = "" + count;
          var Label_base = Node_winTip.getChildByName("Label_base").getComponent(Label);
          Label_base.string = "" + EmpireUtils.instance.numberFormat(base, 2);
          var Label_lines = Node_winTip.getChildByName("Label_lines").getComponent(Label);
          Label_lines.string = "" + lines;
          var Label_total = Node_winTip.getChildByName("Label_total").getComponent(Label);
          var total = Math.floor(base * 1000);
          var curTotal = EmpireModel.instance.curBet * lines * total / 1000;
          var inter = Common.numFormatInt(curTotal);
          var digit = EmpireUtils.instance.numberFormatD(curTotal, 2.0);
          Label_total.string = "=" + inter + digit + "K";
          var Label_soecialRate = Node_winTip.getChildByName("Label_soecialRate").getComponent(Label);
          Label_soecialRate.node.active = EmpireModel.instance.freeStatus != eRunStatus.NONE;
          if (Label_soecialRate.node.active) {
            Label_soecialRate.string = "(*" + this.freeRate + ")";
          }
          tween(Node_winTip.getComponent(UIOpacity)).delay(1.5).call(function () {
            Node_winTip.destroyFromParent();
          }).start();
          this.Layout_winTip.addChild(Node_winTip);
        };
        _proto.hideFree = function hideFree() {
          var _this9 = this;
          this.unschedule(this.hideFree);

          //        //背景
          this.Skeleton_Node_bg.skeletonData = this.arrBgSpFrame[0];
          this.Skeleton_Node_bg.setAnimation(0, "idle", true);
          this.Node_symbolRoot.spriteFrame = this.arrRoomSpFrame[0];

          //        // if (EmpireModel.instance.freeStatus != EmpireDef.eRunStatus.NONE) {
          EmpireModel.instance.freeStatus = eRunStatus.NONE;
          EmpireModel.instance.totalFreeTimes = 0;
          EmpireModel.instance.totalFreeTimesBack = 0;
          gts.Debug.LogWarr("==totalFreeTimesBack==" + EmpireModel.instance.totalFreeTimesBack);
          this.Button_run.interactable = !EmpireModel.instance.isAuto;
          var Node_freeStyle = this.Node_free.getChildByName("Node_freeStyle");
          Node_freeStyle.active = false;

          //        // EmpireModel.instance.totalRate = 1;
          //        // this.Label_curRate.string = `x${EmpireModel.instance.totalRate}`;

          AudioManager.instance.resumeMusic();
          EmpireUtils.instance.stopSound(eSound.FG_End);
          tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            var Node_enter = _this9.Node_free.getChildByName("Node_enter");
            Node_enter.active = false;
            var Node_end = _this9.Node_free.getChildByName("Node_end");
            Node_end.active = false;
            _this9.Node_bigWin.active = false;
            EmpireUtils.instance.playBgMusic();
          }).delay(0.5).call(function () {
            _this9.Node_free.active = false;
            if (EmpireModel.instance.isAuto) {
              _this9.scheduleOnce(function () {
                EmpireCtrl.instance.reqBet();
              }, 0.25);
            } else {
              _this9.Button_run.interactable = true;
            }
          }).start();
        };
        _proto.showFree = function showFree(isEnter) {
          var _this10 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (!this.Node_free.active) {
            this.Node_free.active = true;
            this.Node_free.getComponent(UIOpacity).opacity = 255;
            var delayTime = isEnter ? 0 : 2.0;
            this.Node_menu.active = false;
            this.clearWinTip();
            if (isEnter) {
              this.freeRate = EmpireModel.instance.gameInfo.FreeInfo.Multiple;
              EmpireModel.instance.totalFreeTimesBack = EmpireModel.instance.gameInfo.FreeInfo.TotalCount;
              EmpireModel.instance.totalFreeWin = EmpireModel.instance.gameInfo.FreeInfo.TotalPrizeAmount;
              EmpireModel.instance.curTotalWin = EmpireModel.instance.gameInfo.FreeInfo.TotalPrizeAmount;
              var inter = Common.numFormatInt(EmpireModel.instance.curTotalWin / 1000);
              var digit = EmpireUtils.instance.numberFormatD(EmpireModel.instance.curTotalWin / 1000, 2.0);
              this.Label_win.string = "" + inter + digit + "K";
            } else {
              this.freeRate = 1;
              EmpireModel.instance.curTotalWin = 0;
              EmpireModel.instance.totalFreeWin = 0;
              EmpireModel.instance.totalFreeTimesBack = EmpireModel.instance.totalFreeTimes;
              this.Label_win.string = "0.00";
            }
            for (var i = 0; i < this.Empire_symbolList.length; i++) {
              this.Empire_symbolList[i].stopScatterBlink();
            }
            this.scheduleOnce(function () {
              EmpireUtils.instance.playBgMusic(eSound.bgFree);
              if (isEnter) {
                _this10.doEnterFree();
              } else {
                _this10.setEnterFree();
              }
            }, delayTime);
          }
        };
        _proto.setEnterFree = function setEnterFree() {
          var _this11 = this;
          //        //enter
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.active = true;
          EmpireUtils.instance.playOneShot(eSound.Scatter_bell);

          //        //免费次数
          var Label_freeTimes = Node_enter.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "";
          Label_freeTimes.active = true;
          Label_freeTimes.getComponent(UIOpacity).opacity = 0;
          tween(Label_freeTimes.getComponent(UIOpacity)).to(1.0, {
            opacity: 255
          }).call(function () {
            Label_freeTimes.getComponent(Label).string = "" + EmpireModel.instance.totalFreeTimes;
          }).start();
          var spEnter = Node_enter.getComponent(sp.Skeleton);
          spEnter.setAnimation(0, "intro", false);
          spEnter.setCompleteListener(function () {
            spEnter.setCompleteListener(null);
            var Label_freeTimes = Node_enter.getChildByName("Label_freeTimes");
            Label_freeTimes.getComponent(Label).string = "";
            Label_freeTimes.active = false;
            Node_enter.active = false;
          });
          this.scheduleOnce(function () {
            _this11.doEnterFree();
          }, 3.0);
        };
        _proto.doEnterFree = function doEnterFree() {
          if (EmpireModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }
          EmpireModel.instance.freeStatus = eRunStatus.RUNNING;
          this.Button_run.interactable = false;
          var Node_freeStyle = this.Node_free.getChildByName("Node_freeStyle");
          Node_freeStyle.active = true;
          gts.Debug.LogWarr("==totalFreeTimesBack==" + EmpireModel.instance.totalFreeTimesBack);
          var Label_freeTimes = Node_freeStyle.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + EmpireModel.instance.totalFreeTimes;
          var Label_rate = Node_freeStyle.getChildByName("Label_rate");
          Label_rate.getComponent(Label).string = "*" + this.freeRate;
          EmpireUtils.instance.playSound(eSound.FG_Add);

          //        //背景
          this.Skeleton_Node_bg.skeletonData = this.arrBgSpFrame[1];
          this.Skeleton_Node_bg.setAnimation(0, "idle", true);
          this.Node_symbolRoot.spriteFrame = this.arrRoomSpFrame[1];
          AudioManager.instance.resumeMusic();
          this.scheduleOnce(function () {
            EmpireCtrl.instance.reqBet();
          }, 2.0);
        };
        _proto.doEndFree = function doEndFree() {
          var _this12 = this;
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.getComponent(UIOpacity).opacity = 0;
          this.clearWinTip();
          EmpireUtils.instance.playSound(eSound.FG_End, true);
          this.Label_totalWinFreeEnd.getComponent(Label).string = "";
          this.Label_freeTimesFreeEnd.getComponent(Label).string = "";
          this.scheduleOnce(function () {
            //            //免费总得分
            _this12.Label_totalWinFreeEnd.node.scale = v3(1.0, 1.0, 1);
            EmpireUtils.instance.updateLabelAddNf(_this12.Label_totalWinFreeEnd, EmpireModel.instance.totalFreeWin);
            _this12.Label_freeTimesFreeEnd.getComponent(Label).string = "" + EmpireModel.instance.totalFreeTimesBack;
            gts.Debug.LogWarr("==totalFreeTimesBack==" + EmpireModel.instance.totalFreeTimesBack);
          }, 0.5);
          tween(Node_end.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          AudioManager.instance.pauseMusic();
          var Node_character = Node_end.getChildByName("Node_character").getComponent(sp.Skeleton);
          Node_character.setAnimation(0, "FG_Compiment", false);
          Node_character.setCompleteListener(function () {
            Node_character.setCompleteListener(null);

            //            //2.0秒后返回正常
            _this12.hideFree();
          });
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(EmpireModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            EmpireUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                var AllPosMsg = EmpireModel.instance.gameInfo.Res[EmpireModel.instance.gameInfo.Res.length - 1].AllPosMsg;
                //                //横向
                var InitExtraPos = [];
                for (var i = 0; i < 4; i++) {
                  var InitPosMsg = AllPosMsg[i + 1];
                  var symbolInfo = InitPosMsg[InitPosMsg.length - 1];
                  InitExtraPos.push(symbolInfo);
                }
                this.Empire_symbolList[0].init(InitExtraPos);

                //                //纵向
                for (var _i7 = 1; _i7 < this.Empire_symbolList.length; _i7++) {
                  var _InitPosMsg = AllPosMsg[_i7 - 1];
                  this.Empire_symbolList[_i7].init(_InitPosMsg);
                }
                this.Label_bet.string = EmpireUtils.instance.numberFormat(EmpireModel.instance.curBet, 2.0) + "K";
                if (EmpireModel.instance.totalFreeTimes > 0) {
                  this.showFree(true);
                }
                var symRate = 1;
                for (var _i8 = 0; _i8 < AllPosMsg.length; _i8++) {
                  symRate *= AllPosMsg[_i8].length;
                }
                if (parseInt(this.Label_symRate.string) != symRate) {
                  EmpireUtils.instance.updateLabelNomal(this.Label_symRate, symRate);
                }
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
                //                // EmpireUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                this.doStartRun();
                this.updateGold();
                break;
              }
            //            // case EmpireDef.eProto.HD_BoYiBo: {
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
        return EmpireGameView;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolRoot", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Empire_symbolList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_action", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_setBase", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_Node_bg", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Label_symRate", [_dec18], {
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
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "arrBgSpFrame", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "arrRoomSpFrame", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_auto", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_winTip", [_dec28], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EmpireModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './EmpireDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef, arrBetList, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      arrBetList = module.arrBetList;
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff35aX96DFDIoKK7ZG3L3yK", "EmpireModel", undefined);
      var EmpireModel = exports('EmpireModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(EmpireModel, _GameDef$BaseSington);
        function EmpireModel() {
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
          _this.autoTimes = 0;
          _this.selAutoIndex = 0;
          _this.curBet = 1;
          _this.curBetBase = 0;
          _this.curBetRate = 0;
          _this.curTotalBet = 2.0;
          _this.curTotalWin = 0;
          _this.totalRate = 0;
          _this._betResult = null;
          //    // betResult: EmpireDef.IHD_Bet = null;
          //    //baseSet
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.totalFreeTimes = 0;
          _this.totalFreeTimesBack = 0;
          _this.totalFreeWin = 0;
          _this.specialStartCol = 0;
          _this.boType = "count";
          return _this;
        }
        var _proto = EmpireModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        _proto.getBaseIndex = function getBaseIndex() {
          for (var index = 0; index < arrBetList.length; index++) {
            if (Math.floor(arrBetList[index] / 1000) == EmpireModel.instance.curBet) {
              return index;
            }
          }
          return 0;
        }
        //    // checkScatter() {
        //    //     //判断是否有2个胡
        //    //     let iCount = 0;
        //    //     let openResult = this.betResult.Res[0];
        //    //     for (let iCol = 0; iCol < openResult.AllPosMsg.length - 1; iCol++) {
        //    //         let AllPosMsg = openResult.AllPosMsg[iCol];
        //    //         for (let iRow = 0; iRow < AllPosMsg.length; iRow++) {
        //    //             let symbolInfo = AllPosMsg[iRow];
        //    //             if (symbolInfo && symbolInfo.Sym == EmpireDef.eSymbol.SCATTER) {
        //    //                 iCount++;
        //    //             }
        //    //         }
        //    //     }
        //    //     gts.Debug.LogWarr("==checkScatter=iCount=" + iCount);
        //    //     return iCount;
        //    // }
        ;

        _createClass(EmpireModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(_betResult) {
            this._betResult = _betResult;
            //        // for (const result of this._betResult.Res) {
            //        //     result.RewardMoney = 1000;
            //        //     for (const PosMsg of result.AllPosMsg) {
            //        //         for (const arrPos of PosMsg) {
            //        //             if (arrPos.Sym == EmpireDef.eSymbol.WILD) {
            //        //                 arrPos.EffectCount = Math.floor(Math.random() * arrPos.Length - 1);
            //        //             }
            //        //         }
            //        //     }
            //        // }
          }
        }]);

        return EmpireModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EmpireScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './EmpireDef.ts', './EmpireUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, EmpireUtils, Common;
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
      EmpireUtils = module.EmpireUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "2a4f0x2FqtEG6PH0YBO/KZI", "EmpireScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var EmpireScene = exports('default', (_dec = ccclass("EmpireScene"), _dec2 = menu("game/EmpireGame/EmpireScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EmpireScene, _Component);
        function EmpireScene() {
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
        var _proto = EmpireScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          EmpireUtils.instance.bundle = assetManager.getBundle(cBundle);
          EmpireUtils.instance.preLoad();
          EmpireUtils.instance.playBgMusic();
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
            EmpireUtils.instance.bundle.load("prefab/EmpireGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
        return EmpireScene;
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

System.register("chunks:///_virtual/EmpireUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './EmpireDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, sp, Font, GameDef, AudioManager, eSymbol, cRate, eSound, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
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
      cRate = module.cRate;
      eSound = module.eSound;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f7086P7pZhKjokCfrg9kR9G", "EmpireUtils", undefined);
      var symbol_nomal_icon = ["",
      //SCATTER-0
      ["Symbol_Num_1", "Symbol_Num_2", "Symbol_Num_3", "Symbol_Num_4"],
      //WILD-1
      "symbol_09",
      //RED-2
      "symbol_08",
      //PURPLE-3
      "symbol_07",
      //GREEN-4
      "symbol_06",
      //BLUE-5
      "symbol_05",
      //GREY-6
      "symbol_04",
      //A-8
      "symbol_03",
      //K-9
      "symbol_02",
      //Q-10
      "symbol_01",
      //J-11
      "symbol_00" //TEN-12
      ];

      var symbol_aniName = ["scatter", "wild", "red", "purple", "green", "blue", "grey", "a", "k", "q", "j", "10"];
      var symbol_box = ["symbol_12",
      //SCATTER-0
      "symbol_10",
      //WILD-1
      "symbol_09",
      //RED-2
      "symbol_08",
      //PURPLE-3
      "symbol_07",
      //GREEN-4
      "symbol_06",
      //BLUE-5
      "symbol_05",
      //GREY-6
      "symbol_04",
      //A-8
      "symbol_03",
      //K-9
      "symbol_02",
      //Q-10
      "symbol_01",
      //J-11
      "symbol_00" //TEN-12
      ];

      var EmpireUtils = exports('EmpireUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(EmpireUtils, _GameDef$BaseSington);
        function EmpireUtils() {
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
          _this.arrIconSpriteFrame = {};
          _this.arrIconBoxSpriteFrame = {};
          _this.arrIconFrameSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = EmpireUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/EmpireGameView");
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
                  arrHLoad.push(this.asyncLoadDir("textures/iconBox", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpFrame), _step2; !(_step2 = _iterator2()).done;) {
                        var _SpriteFrame2 = _step2.value;
                        _this4.arrIconBoxSpriteFrame[_SpriteFrame2.name] = _SpriteFrame2;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("textures/iconFrame", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(arrSpFrame), _step3; !(_step3 = _iterator3()).done;) {
                        var _SpriteFrame3 = _step3.value;
                        _this4.arrIconFrameSpriteFrame[_SpriteFrame3.name] = _SpriteFrame3;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/icon", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator4 = _createForOfIteratorHelperLoose(arrSpineData), _step4; !(_step4 = _iterator4()).done;) {
                        var spineData = _step4.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/effect/dynamic", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator5 = _createForOfIteratorHelperLoose(arrSpineData), _step5; !(_step5 = _iterator5()).done;) {
                        var spineData = _step5.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("font/number4", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("font/number5", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
                  //        // arrHLoad.push(
                  //        //     this.asyncLoad("font/red_01", cc.Font, (err, font: cc.Font) => {
                  //        //         if (!err) {
                  //        //             this.arrFontData[font.name] = font;
                  //        //         }
                  //        //     })
                  //        // );
                  _context3.next = 10;
                  return Promise.all(arrHLoad);
                case 10:
                  if (cb) {
                    cb();
                  }
                case 11:
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
          AudioManager.instance.playBgMusic(soundPath, this.bundle, true);
          // cc.audioEngine.setMusicVolume(0.75);
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

            // cc.audioEngine.setEffectsVolume(1);
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
        _proto.updateLabel = function updateLabel(label, num) {
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            labelCom.string = "" + num;
          }).to(0.1, {
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

          //        // EmpireUtils.instance.playSound(EmpireDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // EmpireUtils.instance.stopSound(EmpireDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this8.numberFormatFloatD(curWin / 1000, 2.0) : _this8.numberFormatD(curWin / 1000, 2.0);
            label.string = "" + inter + digit + "K";
            //                        // label.string = isFloatFormat ? `${this.numberFormatFloat(curWin / 1000, 2.0)}K` : `${this.numberFormat(curWin / 1000, 2.0)}K`;
          })).delay(5.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
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

          //        // EmpireUtils.instance.playSound(EmpireDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // EmpireUtils.instance.stopSound(EmpireDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this9.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this9.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
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

          //        // EmpireUtils.instance.playSound(EmpireDef.eSound.numAdd);

          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // EmpireUtils.instance.stopSound(EmpireDef.eSound.numAdd);

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
        _proto.getItemSymbolIconBox = function getItemSymbolIconBox(symbolIndex, length, rim) {
          if (length === void 0) {
            length = 0;
          }
          var symbol = symbol_box[symbolIndex] + "_" + (5 - length);
          if (this.arrIconBoxSpriteFrame) {
            var ret = this.arrIconBoxSpriteFrame[symbol];
            if (!ret) {
              return null;
            }
            return ret;
          }
          return null;
        };
        _proto.getItemSymbolIconFrame = function getItemSymbolIconFrame(rim, length) {
          if (rim === void 0) {
            rim = 0;
          }
          if (length === void 0) {
            length = 0;
          }
          if (rim == 0 || length < 2) {
            return null;
          }
          var symbol = rim == 1 ? "symbol_f_slive" : "symbol_f_gold";
          if (this.arrIconFrameSpriteFrame) {
            return this.arrIconFrameSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, length, isIdle, EffectCount) {
          if (length === void 0) {
            length = 1;
          }
          if (EffectCount === void 0) {
            EffectCount = 0;
          }
          //        // if (isIdle) {
          //        //     return null;
          //        // }

          var strAni = [];
          switch (symbolIndex) {
            case eSymbol.SCATTER:
              {
                strAni.push(symbol_aniName[symbolIndex] + "_" + length + "_intro");
                strAni.push(symbol_aniName[symbolIndex] + "_" + length + "_win");
                break;
              }
            case eSymbol.WILD:
              {
                //                // length > 1 ? strAni.push(`${symbol_aniName[symbolIndex]}_${length}_win`) : null;
                if (EffectCount > 1) {
                  strAni.push(symbol_aniName[symbolIndex] + "_" + EffectCount + "_intro");
                }
                //                // strAni.push(`${symbol_aniName[symbolIndex]}_${length}_win`);
                break;
              }
            default:
              {
                strAni.push(symbol_aniName[symbolIndex] + "_win");
                break;
              }
          }
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
        _proto.getSkeletonData = function getSkeletonData(index, isHorizontal) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = "icon";
          //        // switch (index) {
          //        //     case EmpireDef.eSymbol.SCATTER: {
          //        //         strAni = "icon_scatter";
          //        //         break;
          //        //     }
          //        //     case EmpireDef.eSymbol.WILD: {
          //        //         strAni = "icon_wild";
          //        //         break;
          //        //     }
          //        //     default: {
          //        //         strAni = "icon";
          //        //         break;
          //        //     }
          //        // }

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
        };
        _proto.getTestResult = function getTestResult() {
          return {
            FreeCount: 0,
            Res: [{
              AllPosMsg: [[{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 2,
                Rim: 0,
                Sym: 0
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 2,
                Rim: 2,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 6
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 2
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 1
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 7
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }], [{
                EffectCount: 0,
                IsReward: true,
                Length: 2,
                Rim: 0,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 6
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }]],
              ExtraOdd: 1,
              RewardMoney: 400,
              RewardPos: [[2, 2, 4, 1, 0, 1]]
            }, {
              AllPosMsg: [[{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 2,
                Rim: 0,
                Sym: 0
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 2,
                IsReward: true,
                Length: 2,
                Rim: 0,
                Sym: 1
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 6
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 2
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 4
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 7
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 6
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }]],
              ExtraOdd: 1,
              RewardMoney: 1200,
              RewardPos: [[2, 2, 3], [2, 2, 5]]
            }, {
              AllPosMsg: [[{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 3
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 3
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 9
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 2,
                Rim: 0,
                Sym: 0
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 1,
                IsReward: true,
                Length: 2,
                Rim: 0,
                Sym: 1
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }], [{
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 9
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 6
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 2
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 3
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: true,
                Length: 1,
                Rim: 0,
                Sym: 9
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 7
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 6
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }]],
              ExtraOdd: 1,
              RewardMoney: 2000,
              RewardPos: [[1, 2, 5], [2, 2, 5], [4, 2, 0, 2]]
            }, {
              AllPosMsg: [[{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 7
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 2,
                Rim: 0,
                Sym: 0
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 6
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 2
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 2
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 6
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 7
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 11
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 8
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 3
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 5
              }], [{
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 10
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 4
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }, {
                EffectCount: 0,
                IsReward: false,
                Length: 1,
                Rim: 0,
                Sym: 9
              }]],
              ExtraOdd: 0,
              RewardMoney: 0,
              RewardPos: null
            }]
          };
        };
        _proto.getWiNInfo = function getWiNInfo(result) {
          var AllPosMsg = result.AllPosMsg;
          var winSym = {};
          for (var _iterator6 = _createForOfIteratorHelperLoose(result.RewardPos), _step6; !(_step6 = _iterator6()).done;) {
            var arrPos = _step6.value;
            var _len2 = arrPos.length;
            var _sym = null;
            //            // let lines = 1;
            for (var i = 0; i < arrPos.length; i++) {
              var pos = arrPos[i];
              if (!_sym && _sym != eSymbol.WILD) {
                _sym = AllPosMsg[i][pos].Sym;
              }

              //                // lines *= AllPosMsg[i][pos].Length;
            }

            if (_sym) {
              if (!winSym["" + _sym]) {
                winSym["" + _sym] = {
                  lines: 1,
                  len: _len2
                };
              } else {
                winSym["" + _sym].lines++;
              }
            }
          }
          var arrKeysSym = Object.keys(winSym);
          var retInfo = [];
          for (var _i2 = 0, _arrKeysSym = arrKeysSym; _i2 < _arrKeysSym.length; _i2++) {
            var key = _arrKeysSym[_i2];
            var sym = parseInt(key);
            var lines = winSym[key].lines;
            var len = winSym[key].len;
            var rate = cRate[key]["" + len] / 100.0;
            retInfo.push({
              sym: sym,
              count: len,
              base: rate,
              lines: lines
            });
          }
          return retInfo;
        };
        return EmpireUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/EmpireGame', 'chunks:///_virtual/EmpireGame'); 
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