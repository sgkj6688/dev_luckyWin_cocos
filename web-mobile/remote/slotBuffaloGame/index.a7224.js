System.register("chunks:///_virtual/Buffalo_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "7908cVnSEVFh7VnQu9wiLyO", "Buffalo_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var Buffalo_btnEffect = exports('default', (_dec = ccclass("BuffaloBtnEffect"), _dec2 = menu("BuffaloGame/Buffalo_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Buffalo_btnEffect, _Component);
        function Buffalo_btnEffect() {
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
        var _proto = Buffalo_btnEffect.prototype;
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

        _createClass(Buffalo_btnEffect, [{
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

        return Buffalo_btnEffect;
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

System.register("chunks:///_virtual/Buffalo_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuffaloModel.ts', './BuffaloDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Tween, tween, v3, Component, BuffaloModel, eRunStatus;
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
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      BuffaloModel = module.BuffaloModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "f58a6XIDw1AcrY0ywZZpGZ6", "Buffalo_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Buffalo_helpTip = exports('default', (_dec = ccclass("BuffaloHelpTip"), _dec2 = menu("game/BuffaloGame/Buffalo_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Buffalo_helpTip, _Component);
        function Buffalo_helpTip() {
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
        var _proto = Buffalo_helpTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.doShow();
        };
        _proto.onDisable = function onDisable() {
          this.Sprite_tip.node.setPosition(0, 0);
          Tween.stopAllByTarget(this.Sprite_tip.node);
        };
        _proto.doShow = function doShow() {
          var _this2 = this;
          var len = this.arrSpriteFrame.length;
          this.curIndex = (this.curIndex + 1) % len;
          if (BuffaloModel.instance.freeStatus != eRunStatus.NONE) {
            Tween.stopAllByTarget(this.Sprite_tip.node);
            this.curIndex = len - 1;
          }
          this.Sprite_tip.spriteFrame = this.arrSpriteFrame[this.curIndex];
          this.Sprite_tip.node.setPosition(0, 50);
          tween(this.Sprite_tip.node).to(0.25, {
            position: v3(0, 0)
          }).delay(3).to(0.25, {
            position: v3(0, -50)
          }).call(function () {
            _this2.doShow();
          }).start();
        };
        return Buffalo_helpTip;
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

System.register("chunks:///_virtual/Buffalo_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './EventManager.ts', './BuffaloModel.ts', './BuffaloDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, instantiate, Label, Toggle, UIOpacity, tween, sys, Component, DataManager, UserKey, EventManager, BuffaloModel, eEvent, arrBetList;
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
      BuffaloModel = module.BuffaloModel;
    }, function (module) {
      eEvent = module.eEvent;
      arrBetList = module.arrBetList;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b8b8cdjniNLGKYNI/dkzNNX", "Buffalo_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Buffalo_setBase = exports('default', (_dec = ccclass("BuffaloSetBase"), _dec2 = menu("BuffaloGame/Buffalo_setBase"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Buffalo_setBase, _Component);
        function Buffalo_setBase() {
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
        var _proto = Buffalo_setBase.prototype;
        _proto.onLoad = function onLoad() {
          this.node.scale = v3(this.node.scale.x, 0, this.node.scale.z);
          for (var i = 0; i < 15; i++) {
            var toggleTemp = this.ToggleContainer.getChildByName("" + i);
            if (!toggleTemp) {
              toggleTemp = instantiate(this.toggleTemp);
              toggleTemp.name = "" + i;
              this.ToggleContainer.addChild(toggleTemp);
            }
            var base = arrBetList[i] / 1000;
            toggleTemp.getChildByName("Label_score").getComponent(Label).string = base + "K";
          }
          var mask = this.node.getChildByName("mask");
          mask.on(Node.EventType.TOUCH_END, this.hide, this);
        };
        _proto.start = function start() {
          var baseBetIndex = BuffaloModel.instance.getBaseIndex();
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
          EventManager.instance.emit(eEvent.updateBaseBet);
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
        }
        //    // update (dt) {}
        ;

        _proto.onToggleClick = function onToggleClick(toggle) {
          if (this.firstSet) {
            return;
          }
          var iIndex = parseInt(toggle.node.name);
          gts.Debug.Log("==onToggleClick==baseScore==" + arrBetList[iIndex]);
          BuffaloModel.instance.curBet = arrBetList[iIndex] / 1000;
          var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
          sys.localStorage.setItem("Buffalo_baseBetGold" + uid, arrBetList[iIndex]);
          this.hide();
        };
        return Buffalo_setBase;
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

System.register("chunks:///_virtual/Buffalo_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuffaloModel.ts', './BuffaloDef.ts', './BuffaloUtils.ts', './Buffalo_symbolItem.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, v3, tween, UIOpacity, Component, BuffaloModel, eRunStatus, eConstDef, eSymbol, eEvent, eSound, BuffaloUtils, Buffalo_symbolItem, EventManager;
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
      v3 = module.v3;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      BuffaloModel = module.BuffaloModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      BuffaloUtils = module.BuffaloUtils;
    }, function (module) {
      Buffalo_symbolItem = module.default;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "b326atZHAtP65phXseseK6u", "Buffalo_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Buffalo_symbol = exports('default', (_dec = ccclass("BuffaloSymbol"), _dec2 = menu("BuffaloGame/Buffalo_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Buffalo_symbol, _Component);
        function Buffalo_symbol() {
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
          _this._resultInfoList = [];
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = Buffalo_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.addNewItem = function addNewItem(itemInfo, isEnter) {
          if (isEnter === void 0) {
            isEnter = false;
          }
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            var symbol = Math.floor(Math.random() * eSymbol.Nine) + 1; //this._iCol < 3 ? Math.floor(Math.random() * BuffaloDef.eSymbol.J) : Math.floor(Math.random() * BuffaloDef.eSymbol.Bottle) + 4;
            itemInfo = {
              Sym: symbol,
              IsReward: false
            };
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);

          //        //POSITON
          var offsetY = (this._curLength + 1 / 2) * eConstDef.cSymbolH;
          newItem.position = v3(this.node.position.x, eConstDef.cSymbolStartY + offsetY, 0);

          //        //
          var com = newItem.getComponent(Buffalo_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol, isEnter);
          this._symbolList.push(com);
          this.itemTag = (this.itemTag + 1) % 2000;
          newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
          this._curLength += 1;
          return com;
        };
        _proto.init = function init(itemInfoList) {
          this._curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            this.addNewItem(itemInfoList[i], true);
          }
          for (var _i = 0; _i < this._symbolList.length; _i++) {
            var symbolNode = this._symbolList[_i].node;
            var toPos = v3(symbolNode.position.x, symbolNode.position.y, symbolNode.position.z);
            symbolNode.setPosition(v3(toPos.x, toPos.y + 525, toPos.z));
            tween(symbolNode).to(0.2, {
              position: toPos
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(toPos.x, toPos.y + 15, toPos.z)
            }, {
              easing: "cubicIn"
            }).to(0.05, {
              position: toPos
            }, {
              easing: "cubicOut"
            }).start();
          }
        };
        _proto.setSymOpacity = function setSymOpacity(opacity) {
          if (opacity === void 0) {
            opacity = 255;
          }
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            if (symbol.itemInfo.Sym != eSymbol.Scatter) {
              symbol.node.getComponent(UIOpacity).opacity = opacity;
            }
          }
        };
        //0:none 1:startRun 2:running 3:stopping 4:end
        _proto.doStart = function doStart(startDelay, stopDelay) {
          var _this2 = this;
          if (stopDelay === void 0) {
            stopDelay = 0;
          }
          return new Promise(function (resolve, reject) {
            //            //定时停止
            _this2.scheduleOnce(function () {
              BuffaloModel.instance.isQuickStop ? function () {
                _this2.maxIndex = _this2.maxIndex - 1;
                _this2._runStatus = eRunStatus.STOP;
                _this2._speed = 2500;
              }() : function () {
                _this2._runStatus = eRunStatus.STOPPING;
                _this2.maxIndex = _this2.maxIndex - 1;
              }();
            }, stopDelay);

            //            //test
            _this2._resultInfoList = BuffaloUtils.instance.getResult(BuffaloModel.instance.betResult.OpenNum)[_this2._iCol];

            //            //
            _this2._runStatus = eRunStatus.START;
            _this2._speed = eConstDef.CSpeedStart;
            _this2.maxIndex = _this2.maxIndex + 1;
            var scheduleUpdate = function scheduleUpdate(dt) {
              switch (_this2._runStatus) {
                case eRunStatus.NONE:
                  {
                    if (_this2._curLength > _this2.maxIndex) {
                      _this2._curLength = _this2.maxIndex;
                    }
                    return;
                  }
                case eRunStatus.START:
                  {
                    _this2._speed += eConstDef.CSpeedAdd;
                    if (_this2._speed >= eConstDef.cSpeedMax) {
                      _this2._speed = eConstDef.cSpeedMax;
                      _this2._runStatus = eRunStatus.RUNNING;
                    }
                    break;
                  }
                case eRunStatus.STOPPING:
                  {
                    _this2._speed -= eConstDef.CSpeedReduse;
                    if (_this2._speed < eConstDef.cSpeedMin) {
                      _this2._speed = eConstDef.cSpeedMin;
                      _this2._runStatus = eRunStatus.STOP;
                      // if (!BuffaloModel.instance.isQuickStop) {
                      //     this.maxIndex = this.maxIndex - 1;
                      // }
                    }

                    break;
                  }
                case eRunStatus.END:
                  {
                    var curLength = 0;
                    for (var i = _this2._symbolList.length - 1; i >= 0; i--) {
                      curLength += 1;
                      if (curLength > _this2.maxIndex) {
                        var symbol = _this2._symbolList.shift();
                        symbol.node.removeFromParent();
                        symbol.node.destroy();
                      }
                    }
                    _this2._runStatus = eRunStatus.NONE;
                    _this2.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator, _step, _symbol;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            BuffaloUtils.instance.playOneShot(eSound.Reel_Stop);
                            arrPro = [];
                            for (_iterator = _createForOfIteratorHelperLoose(_this2._symbolList); !(_step = _iterator()).done;) {
                              _symbol = _step.value;
                              arrPro.push(_symbol.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            _this2.unschedule(scheduleUpdate);
                            if (BuffaloModel.instance.specialStartCol > 0 && _this2._iCol + 1 >= BuffaloModel.instance.specialStartCol) {
                              EventManager.instance.emit(eEvent.onSetMask, _this2._iCol + 1, _this2.node.getPosition().x);
                            }
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
              var offset = _this2._speed * 0.01667;
              var disLength = _this2.isHorizontal ? offset / eConstDef.cSymbolW : offset / eConstDef.cSymbolH;
              _this2._curLength -= disLength;
              var isSide = _this2._curLength <= _this2.maxIndex;
              // if (this._runStatus < BuffaloDef.eRunStatus.END) {
              //     isSide = this._curLength <= this.maxIndex + 1;
              // }

              if (_this2._resultInfoList.length == 0 && isSide) {
                //                    //stop run
                disLength -= _this2.maxIndex - _this2._curLength;
                offset = _this2.isHorizontal ? disLength * eConstDef.cSymbolW : disLength * eConstDef.cSymbolH;
                _this2._curLength = _this2.maxIndex;
                _this2._runStatus = eRunStatus.END;
              }
              for (var _i2 = _this2._symbolList.length - 1; _i2 >= 0; _i2--) {
                var _symbol2 = _this2._symbolList[_i2];
                if (!_symbol2.doRunning(offset)) {
                  _this2._symbolList.splice(_i2, 1);
                  _symbol2.node.removeFromParent();
                  _symbol2.node.destroy();
                }
              }
              if (isSide) {
                var result = _this2._runStatus == eRunStatus.STOP && _this2._resultInfoList.length > 0 ? _this2._resultInfoList.shift() : null;
                _this2.addNewItem(result);
              }
            };
            _this2.scheduleOnce(function () {
              _this2.schedule(scheduleUpdate);
            }, startDelay);
          });
        };
        _proto.doEffect = function doEffect() {
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            arrPro.push(symbol.doEffect(0.5));
            //            // arrPro.push(symbol.doEffect(Buffalo_symbol.rewardCount * 0.075));
            if (symbol.itemInfo.IsReward) {
              Buffalo_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doScatterBlink = /*#__PURE__*/function () {
          var _doScatterBlink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var arrPro, _iterator2, _step2, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  arrPro = [];
                  for (_iterator2 = _createForOfIteratorHelperLoose(this._symbolList); !(_step2 = _iterator2()).done;) {
                    symbol = _step2.value;
                    if (symbol.itemInfo.Sym == eSymbol.Scatter) {
                      arrPro.push(symbol.doScatterBlink());
                    } else {
                      symbol.updateZIndex(eRunStatus.RUNNING);
                    }
                  }
                  return _context2.abrupt("return", Promise.all(arrPro));
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doScatterBlink() {
            return _doScatterBlink.apply(this, arguments);
          }
          return doScatterBlink;
        }();
        _proto.stopScatterBlink = function stopScatterBlink() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._symbolList), _step3; !(_step3 = _iterator3()).done;) {
            var symbol = _step3.value;
            if (symbol.itemInfo.Sym == eSymbol.Scatter) {
              symbol.stopScatterBlink();
            }
          }
        };
        _proto.doWildChange = function doWildChange() {
          var arrPro = [];
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._symbolList), _step4; !(_step4 = _iterator4()).done;) {
            var symbol = _step4.value;
            if (symbol.itemInfo.IsReward && symbol.itemInfo.Sym > eSymbol.Wild) {
              arrPro.push(symbol.doWildChange());
            }
          }
          return Promise.all(arrPro);
        };
        return Buffalo_symbol;
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

System.register("chunks:///_virtual/Buffalo_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuffaloDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "1e375xi/q5BlKi9FS8O0nco", "Buffalo_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Buffalo_symbolEffectRoot = exports('default', (_dec = ccclass("BuffaloSymbolEffectRoot"), _dec2 = menu("BuffaloGame/Buffalo_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Buffalo_symbolEffectRoot, _Component);
        function Buffalo_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Buffalo_symbolEffectRoot.prototype;
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
        return Buffalo_symbolEffectRoot;
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

System.register("chunks:///_virtual/Buffalo_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuffaloDef.ts', './Buffalo_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, SpriteFrame, tween, UIOpacity, v3, UITransform, instantiate, Sprite, Component, eSymbol, Buffalo_symbolItem;
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
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      Buffalo_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "8baddC+zeVG6rpeNnyrBUwg", "Buffalo_symbolInfo", undefined);
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
      var Buffalo_symbolInfo = exports('default', (_dec = ccclass("BuffaloSymbolInfo"), _dec2 = menu("BuffaloGame/Buffalo_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Buffalo_symbolInfo, _Component);
        function Buffalo_symbolInfo() {
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
        var _proto = Buffalo_symbolInfo.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.mask.on(Node.EventType.TOUCH_END, function () {
            _this2.mask.active = false;
            tween(_this2.Node_info.getComponent(UIOpacity)).delay(0.1).to(0.2, {
              opacity: 0
            }).start();
            tween(_this2.Node_info).to(0.1, {
              scale: v3(1.2, 1.2, 1.2)
            }).to(0.2, {
              scale: v3(0.5, 0.5, 0.5)
            }).call(function () {
              _this2.mask.active = false;
              _this2.Node_item.active = false;
              _this2.Node_info.active = false;
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
          pos = this.Node_info.parent.getComponent(UITransform).convertToNodeSpaceAR(pos);
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
          this.Node_item.getComponent(Buffalo_symbolItem).initItem(symbol);
          switch (symbol.Sym) {
            case eSymbol.Scatter:
              {
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[this.arrBgSpFrame.length - 1];
                this.Node_item.getComponent(Buffalo_symbolItem).Node_symbol.destroyFromParent();

                //                // this.Node_item.active = false;
                this.Node_icon.active = false;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = false;
                break;
              }
            case eSymbol.Wild:
              {
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
                this.Node_info.getComponent(UITransform).width = 375;
                this.Node_info.getComponent(UITransform).height = 210;
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
                this.Node_icon.getComponent(UITransform).priority = 1;
                this.Node_item.getComponent(UITransform).priority = 0;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = false;
                this.Node_icon.active = true;
                this.Node_item.active = true;
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
                var arrRate = eRate[symbol.Sym - eSymbol.A];
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
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        return Buffalo_symbolInfo;
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

System.register("chunks:///_virtual/Buffalo_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuffaloModel.ts', './BuffaloDef.ts', './EventManager.ts', './BuffaloUtils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sp, Sprite, Node, Label, v3, tween, UITransform, Component, BuffaloModel, eSymbol, eSound, eRunStatus, eConstDef, eZindex, eEvent, EventManager, BuffaloUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Sprite = module.Sprite;
      Node = module.Node;
      Label = module.Label;
      v3 = module.v3;
      tween = module.tween;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      BuffaloModel = module.BuffaloModel;
    }, function (module) {
      eSymbol = module.eSymbol;
      eSound = module.eSound;
      eRunStatus = module.eRunStatus;
      eConstDef = module.eConstDef;
      eZindex = module.eZindex;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      BuffaloUtils = module.BuffaloUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "1e42a77CJ1G2LUSw2k0akW3", "Buffalo_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eItemStatus = exports('eItemStatus', {
        NONE: 0,
        STOP: 1,
        doChange: 2,
        doEffect: 3,
        CLEAR: 4,
        Blink: 5,
        DROP: 6,
        END: 7
      });
      var Buffalo_symbolItem = exports('default', (_dec = ccclass("BuffaloSymbolItem"), _dec2 = menu("BuffaloGame/Buffalo_symbolItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Buffalo_symbolItem, _Component);
        function Buffalo_symbolItem() {
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
          _this.isBreak = false;
          return _this;
        }
        var _proto = Buffalo_symbolItem.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onSymbolClick, this);
        };
        _proto.onDestroy = function onDestroy() {}
        //    ///
        ;

        _proto.initItem = function initItem(info, isHorizontal, iCol, isEnter) {
          if (isHorizontal === void 0) {
            isHorizontal = false;
          }
          if (iCol === void 0) {
            iCol = 0;
          }
          if (isEnter === void 0) {
            isEnter = false;
          }
          this.itemStatus = eItemStatus.NONE;
          this._iCol = iCol;
          this._isHorizontal = isHorizontal;
          var Node_center = this.node.parent.parent.parent; //Node_center
          this.Node_symbolAniRoot = Node_center.getChildByName("Node_effectRoot");
          this.Node_symbol = this.node.getChildByName("Node_symbol");
          this.itemInfo = info;
          this.updateSymbol(!(this.itemInfo.IsReward && isEnter));
        };
        _proto.updateIcon = function updateIcon(Sym, isIdle) {
          var _this2 = this;
          if (isIdle === void 0) {
            isIdle = true;
          }
          var isSpine = !isIdle || this.itemInfo.IsReward && Sym > eSymbol.Wild || BuffaloModel.instance.specialStartCol > 0 && Sym == eSymbol.Scatter || Sym > eSymbol.Nine;
          // Sym < BuffaloDef.eSymbol.A ||
          // Sym > BuffaloDef.eSymbol.Nine;

          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = BuffaloUtils.instance.getItemSymbolIcon(Sym);
              var itemSprite = _this2.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this2.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
            });

            // this.Node_symbol.scale = v3(1.0, 1.0, 1);
          } else {
            // this.Node_symbol.scale = v3(0.9, 0.9, 0.9);

            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.enabled = false;
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSpine = _this2.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this2.Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.skeletonData = BuffaloUtils.instance.getSkeletonData(Sym, isIdle);
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              var aniList = BuffaloUtils.instance.getSymbolAniName(Sym, isIdle);
              switch (Sym) {
                case eSymbol.Scatter:
                  {
                    if (_this2._iCol < BuffaloModel.instance.curSpecialStartCol) {
                      itemSpine.setAnimation(0, "scatter_wait", true);
                    } else {
                      if (isIdle) {
                        itemSpine.setAnimation(0, aniList[0], true);
                      } else {
                        itemSpine.setAnimation(0, aniList[0], true);
                      }
                    }
                    break;
                  }
                case eSymbol.Wild:
                  {
                    if (_this2.itemInfo.IsReward && !isIdle) {
                      itemSpine.setAnimation(0, "wild_win", true);
                    } else {
                      itemSpine.setAnimation(0, "wild_idle", true);
                    }
                    break;
                  }
                case eSymbol.Wild2:
                case eSymbol.Wild3:
                case eSymbol.Wild5:
                  {
                    if (_this2.itemInfo.IsReward && !isIdle) {
                      if (!_this2.Node_symbol.getChildByName("rate")) {
                        var newNode = new Node("rate");
                        _this2.Node_symbol.addChild(newNode);
                        itemSpine.setAnimation(0, aniList[0], false);
                        itemSpine.setCompleteListener(function () {
                          itemSpine.setCompleteListener(null);
                          itemSpine.setAnimation(0, "wild_xn", false);
                          itemSpine.addAnimation(0, "wild_xn_idle", true);
                          // let newNode = new Node("rate");

                          var labelRate = newNode.addComponent(Label);
                          labelRate.font = BuffaloUtils.instance.arrFontData["Add_Fg"];
                          labelRate.fontSize = 70;
                          var rate = [2, 3, 5];
                          labelRate.string = rate[_this2.itemInfo.Sym - eSymbol.Wild2] + "x";
                          newNode.scale = v3(0.25, 0.25, 0.25);
                          // this.Node_symbol.addChild(newNode);

                          BuffaloUtils.instance.playOneShot(eSound["double"]);
                          tween(newNode).to(0.25, {
                            scale: v3(1.25, 1.25, 1.25)
                          }, {
                            easing: "cubicOut"
                          }).delay(0.25).to(0.25, {
                            scale: v3(1, 1, 1)
                          }, {
                            easing: "cubicOut"
                          }).start();
                        });
                      }
                    } else {
                      itemSpine.setAnimation(0, "wild_idle", true);
                    }
                    break;
                  }
                default:
                  {
                    itemSpine.setAnimation(0, aniList[0], true);
                    break;
                  }
              }
            });
          }
        };
        _proto.updateSymbol = function updateSymbol(isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          this.updateIcon(this.itemInfo.Sym, isIdle);
          this.updateZIndex(isIdle ? eRunStatus.RUNNING : eRunStatus.CLEAR);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          var addIndex = Math.floor((-this.node.position.y + eConstDef.cSymbolH * 6) / eConstDef.cSymbolH);
          var _zIndex = 0;
          switch (this.itemInfo.Sym) {
            case eSymbol.Scatter:
              {
                _zIndex = BuffaloModel.instance.specialStartCol > 0 ? 2 * eZindex.SPECIAL : eZindex.icon_scatter + addIndex;
                break;
              }
            default:
              {
                _zIndex = eZindex.icon + addIndex;
                break;
              }
          }
          switch (runStatus) {
            case eRunStatus.RUNNING:
              {
                _zIndex = BuffaloModel.instance.specialStartCol > 0 && this._iCol == BuffaloModel.instance.curSpecialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.STOP:
              {
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.CLEAR:
              {
                this.node.getComponent(UITransform).priority = eZindex.iconWin + addIndex;
                if (this.itemInfo.Sym == eSymbol.Scatter && this._iCol < BuffaloModel.instance.curSpecialStartCol) {
                  this.node.getComponent(UITransform).priority = _zIndex;
                }
                break;
              }
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (BuffaloModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var pos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);
        };
        _proto.doRunning = function doRunning(offset) {
          var ret = true;
          this.node.position = v3(this.node.position.x, this.node.position.y - offset, 0);
          var posSide = -208 - 52 - 1 / 2 * 104;
          if (this.node.position.y <= posSide) {
            ret = false;
          }
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this3 = this;
          if (offset === void 0) {
            offset = 0;
          }
          this.itemStatus = eItemStatus.STOP;
          return new Promise(function (resolve, reject) {
            var pos_0 = _this3.node.position.y + 10 + offset;
            var pos_1 = _this3.node.position.y + offset;
            tween(_this3.node).to(0.15, {
              position: v3(_this3.node.position.x, pos_0, 0)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(_this3.node.position.x, pos_1, 0)
            }, {
              easing: "cubicIn"
            }).call(function () {
              _this3.updateIcon(_this3.itemInfo.Sym);
              _this3.updateZIndex(eRunStatus.STOP);
              switch (_this3.itemInfo.Sym) {
                case eSymbol.Scatter:
                  {
                    BuffaloModel.instance.scatterCounts++;
                    BuffaloUtils.instance.playOneShot("sound/Scatter" + BuffaloModel.instance.scatterCounts);
                    break;
                  }
              }
              resolve();
            }).start();
          });
        };
        _proto.doEffect = function doEffect(delay) {
          var _this4 = this;
          this.itemStatus = eItemStatus.doEffect;
          return new Promise(function (resolve, reject) {
            //|| (BuffaloModel.instance.freeStatus != BuffaloDef.eRunStatus.NONE && this.itemInfo.Sym > BuffaloDef.eSymbol.Wild)
            if (_this4.itemInfo.IsReward) {
              _this4.scheduleOnce(function () {
                //中奖图标音效
                switch (_this4.itemInfo.Sym) {
                  case eSymbol.Deer:
                  case eSymbol.Wolf:
                  case eSymbol.Bear:
                  case eSymbol.Eagle:
                  case eSymbol.Cattle:
                    {
                      BuffaloUtils.instance.playOneShot("sound/Symbol" + (6 + eSymbol.Deer - _this4.itemInfo.Sym));
                      break;
                    }
                  default:
                    {
                      BuffaloUtils.instance.playOneShot("sound/Symbol12");
                      break;
                    }
                }
                _this4.updateSymbol(false);
                resolve();
              }, delay);
            } else {
              resolve();
            }
          });
        };
        _proto.doScatterBlink = function doScatterBlink() {
          this.itemStatus = eItemStatus.Blink;
          this.updateIcon(this.itemInfo.Sym, false);
          this.updateZIndex(eRunStatus.CLEAR);
        };
        _proto.stopScatterBlink = function stopScatterBlink() {
          this.itemStatus = eItemStatus.STOP;
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          if (itemSpine) {
            itemSpine.setAnimation(0, "scatter_idle", true);
          }
          var addIndex = Math.floor((-this.node.position.y + eConstDef.cSymbolH * 6) / eConstDef.cSymbolH);
          this.node.getComponent(UITransform).priority = eZindex.icon + addIndex;
        };
        _proto.playWin = function playWin(isPlay) {
          if (isPlay === void 0) {
            isPlay = true;
          }
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          if (itemSpine && this.itemInfo.Sym <= eSymbol.Wild) {
            var aniList = BuffaloUtils.instance.getSymbolAniName(this.itemInfo.Sym, !isPlay);
            if (this.itemInfo.Sym == eSymbol.Wild) {
              aniList[0] = "wild_win";
            }
            if (itemSpine.animation != aniList[0]) {
              itemSpine.setAnimation(0, aniList[0], true);
            }
          }
        };
        _proto.doWildChange = function doWildChange() {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            if (!_this5.Node_symbol.getChildByName("rate")) {
              // let itemSpine = this.Node_symbol.getComponent(sp.Skeleton);

              // itemSpine.setCompleteListener(null);

              // itemSpine.setAnimation(0, "wild_xn", false);
              // itemSpine.addAnimation(0, "wild_xn_idle", true);
              // let newNode = new Node("rate");

              // let labelRate = newNode.addComponent(cc.Label);
              // labelRate.font = BuffaloUtils.instance.arrFontData["Add_Fg"];
              // labelRate.fontSize = 70;

              // let rate = [2, 3, 5];
              // labelRate.string = `${rate[this.itemInfo.Sym - BuffaloDef.eSymbol.Wild2]}x`;

              // newNode.scale = v3(0.25, 0.25, 0.25);
              // this.Node_symbol.addChild(newNode);

              // BuffaloUtils.instance.playOneShot(BuffaloDef.eSound.double);

              // tween(newNode)
              //     .to(0.25, { scale: v3(1.25, 1.25, 1.25) }, { easing: "cubicOut" })
              //     .delay(0.25)
              //     .to(0.25, { scale: v3(1, 1, 1) }, { easing: "cubicOut" })
              //     .start();

              _this5.scheduleOnce(function () {
                resolve();
              }, 2);
            } else {
              resolve();
            }
          });
        };
        return Buffalo_symbolItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Buffalo_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuffaloUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, BuffaloUtils;
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
      BuffaloUtils = module.BuffaloUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "cd49fG2WR9NLYY8TH8DfZsT", "Buffalo_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Buffalo_winTip = exports('default', (_dec = ccclass("BuffaloWinTip"), _dec2 = menu("BuffaloGame/Buffalo_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Buffalo_winTip, _Component);
        function Buffalo_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Buffalo_winTip.prototype;
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
            _this2.Label_win.string = BuffaloUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            BuffaloUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${BuffaloUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            BuffaloUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return Buffalo_winTip;
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

System.register("chunks:///_virtual/BuffaloCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './BuffaloModel.ts', './I18n.ts', './ViewManager.ts', './BuffaloDef.ts', './BuffaloUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sys, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, BuffaloModel, i18n, ViewManager, eProto, eRunStatus, eEvent, eSymbol, eConstDef, BuffaloUtils, Common;
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
      UserKey = module.UserKey;
      DataManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      BuffaloModel = module.BuffaloModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
    }, function (module) {
      BuffaloUtils = module.BuffaloUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "61181BS9GlJe7SVybusrhqZ", "BuffaloCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BuffaloCtrl = exports('BuffaloCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(BuffaloCtrl, _GameDef$BaseCtrl);
        function BuffaloCtrl() {
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
          _this._model = BuffaloModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = BuffaloCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete BuffaloCtrl._instance;
          BuffaloCtrl._instance = null;
          BuffaloModel.destroy();
          BuffaloUtils.destroy();
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
          if (!BuffaloModel.instance.gameInfo) {
            return false;
          }
          if (BuffaloModel.instance.freeStatus == eRunStatus.NONE && BuffaloModel.instance.curBalance < BuffaloModel.instance.curBet * 1000) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            return false;
          }
          this.isReqBet = true;
          BuffaloModel.instance.curTotalBet = BuffaloModel.instance.curBet * 1000;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + BuffaloModel.instance.curBet * 1000
          });
          return true;
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          // NetManager.instance.sendOnlineData(BuffaloDef.eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotChargeBuffalo"
          });
        }

        // /**
        //  *搏一搏
        //  * @param type string "count" && "times"
        //  */
        // reqBoYiBo(type: string) {
        //     BuffaloModel.instance.boType = type;
        //     NetManager.instance.sendOnlineData(BuffaloDef.eProto.HD_BoYiBo, { betAmount: BuffaloModel.instance.curBet * 1000, boType: type });
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
            RecordType: "slotChargeBuffalo"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(BuffaloDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {});
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotChargeBuffalo"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotChargeBuffalo",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotChargeBuffalo"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotChargeBuffalo",
            content: strContent,
            msgId: msgid
          });
        }
        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // if (data.cmd == BuffaloDef.eProto.HD_Bet) {
          //     data.Data = BuffaloUtils.instance.getTestResult();
          // }

          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code));
            }
            // if (data.cmd == BuffaloDef.eProto.HD_Enter || (data.Code == 402 && BuffaloModel.instance.gameState.GameNo != BuffaloModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(BuffaloDef.eEvent.onLoadHall);
            //     return;
            // }

            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
              if (BuffaloModel.instance.isAuto) {
                BuffaloModel.instance.isAuto = false;
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

                // if (BuffaloModel.instance.gameStatus != BuffaloDef.eRunStatus.NONE) {
                //     return;
                // }
                BuffaloModel.instance.clearGameData();
                BuffaloModel.instance.gameInfo = data.Data;

                // for (const InitPosMsg of BuffaloModel.instance.gameInfo.InitPosMsg) {
                //     for (const info of InitPosMsg) {
                //         info.IsReward = false;
                //     }
                // }
                BuffaloModel.instance.totalFreeTimes = BuffaloModel.instance.gameInfo.freeInfo.surplusFreeCount;
                if (BuffaloModel.instance.totalFreeTimes > 0) {
                  BuffaloModel.instance.totalFreeWin = BuffaloModel.instance.gameInfo.freeInfo.totalPrizeAmount;
                  BuffaloModel.instance.totalFreeTimesBack = BuffaloModel.instance.gameInfo.freeInfo.totalFreeCount;
                }
                break;
              }
            // case BuffaloDef.eProto.HD_Leave: {
            //     break;
            // }
            case eProto.HD_Bet:
              {
                BuffaloModel.instance.betResult = data.Data;

                // BuffaloModel.instance.betResult = BuffaloModel.instance.onRecvData.Data;

                this.isReqBet = false;

                //判断是否有2个胡
                BuffaloModel.instance.specialStartCol = 0;
                BuffaloModel.instance.curSpecialStartCol = -1;
                if (!BuffaloModel.instance.isQuickStop) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = BuffaloModel.instance.betResult.OpenNum;
                    var iHuCounts = 0;
                    for (var iCol = 0; iCol < 5; iCol++) {
                      for (var iRow = 0; iRow < 4; iRow++) {
                        var index = iRow * eConstDef.CMaxCol + iCol;
                        var sym = openResult[index];
                        if (sym == eSymbol.Scatter) {
                          iHuCounts++;
                          if (iHuCounts > 1) {
                            BuffaloModel.instance.specialStartCol = iCol + 1;
                            BuffaloModel.instance.curSpecialStartCol = iCol + 1;
                            return;
                          }
                        }
                      }
                    }
                  };
                  checkSpecialRun();

                  // //specialStartCol test
                  // BuffaloModel.instance.specialStartCol = 2; //Math.floor(Math.random() * 4 + 1);

                  gts.Debug.LogWarr("==BuffaloModel.instance.specialStartCol==" + BuffaloModel.instance.specialStartCol);
                }
                BuffaloModel.instance.totalFreeWin = BuffaloModel.instance.betResult.freeInfo.totalPrizeAmount;
                BuffaloModel.instance.totalFreeTimesBack = BuffaloModel.instance.betResult.freeInfo.totalFreeCount;
                if (BuffaloModel.instance.totalFreeTimes > 0) {
                  BuffaloModel.instance.totalFreeTimes--;
                } else {
                  BuffaloModel.instance.totalFreeTimes = BuffaloModel.instance.betResult.freeInfo.surplusFreeCount;
                }
                gts.Debug.LogWarr("==BuffaloModel.instance.totalFreeTimes==" + BuffaloModel.instance.totalFreeTimes);
                if (BuffaloModel.instance.freeStatus == eRunStatus.NONE) {
                  BuffaloModel.instance.curBalance -= BuffaloModel.instance.curTotalBet;
                }
                break;
              }
            // case BuffaloDef.eProto.HD_BoYiBo:
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
                gts.Debug.LogWarr("==Buffalo=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (BuffaloModel.instance.curBalance > 0) {
                  BuffaloModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                BuffaloModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Buffalo=pushWallet==" + _HD_Wallet.VndBalance);
                if (BuffaloModel.instance.curBalance > 0) {
                  BuffaloModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                BuffaloModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        return BuffaloCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuffaloDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ed08cd4SfVNNprNkjgC5D70", "BuffaloDef", undefined);
      var cBundle = exports('cBundle', "slotBuffaloGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotChargeBuffalo/HD_info";
        eProto["HD_Bet"] = "slotChargeBuffalo/HD_Bet";
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
        cSpecialDuration: 2,
        cStartDelay: 0.25,
        cQuickStopStartDelay: 0.005,
        cQuickStopDelay: 0.1,
        cStopDelay: 1,
        cSymbolW: 148,
        cSymbolH: 115,
        cSymbolStartX: -148,
        cSymbolStartY: -230,
        cSpeedMax: 4000,
        cSpeedMin: 2000,
        CSpeedStart: 2500,
        CSpeedAdd: 200,
        CSpeedReduse: 200,
        CMaxCol: 6,
        CMaxRow: 4
      }); // cSpeedMax = 1000,
      // cSpeedMin = 800,
      // CSpeedStart = 500,
      // CSpeedAdd = 50,
      // CSpeedReduse = 50,
      var arrBetList = exports('arrBetList', [500, 1000, 2000, 3000, 5000, 10000, 20000, 30000, 40000, 50000, 80000, 100000, 200000, 500000, 1000000]);
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
        NONE: -1,
        Cattle: 1,
        Eagle: 2,
        Bear: 3,
        Wolf: 4,
        Deer: 5,
        A: 6,
        K: 7,
        Q: 8,
        J: 9,
        Ten: 10,
        Nine: 11,
        Scatter: 12,
        Wild: 13,
        Wild2: 14,
        Wild3: 15,
        Wild5: 16
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
        bgNomal: "sound/MG_bgm",
        bgFree: "sound/FG_bgm",
        BigWin: "sound/BigWin",
        bigwin_end: "sound/bigwin_end",
        ChangeWin: "sound/ChangeWin",
        Symbol6: "sound/Symbol6",
        Symbol7: "sound/Symbol7",
        Symbol8: "sound/Symbol8",
        Symbol9: "sound/Symbol9",
        Symbol10: "sound/Symbol10",
        Symbol12: "sound/Symbol12",
        Reel_Start1: "sound/Reel_Start1",
        Reel_Stop: "sound/Reel_Stop",
        NearWin: "sound/NearWin",
        Fg_symbol_bell: "sound/Fg_symbol_bell",
        MGtoFG2: "sound/MGtoFG2",
        MGtoFG1: "sound/MGtoFG1",
        FG_End: "sound/FG_End",
        "double": "sound/double",
        smallWin: "sound/SmallWin",
        GetFreeSpin: "sound/GetFreeSpin"
      }); //免费中再中免费，次数增加时播放

      // export interface IPrizeInfo {
      //     prizeAmount: number;
      //     prizeIdx: number[][];
      //     prizeNum: number;
      // }
      /**排行榜 */
      /**聊天信息 */
      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuffaloGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './BuffaloDef.ts', './BuffaloModel.ts', './BuffaloCtrl.ts', './ViewManager.ts', './BuffaloUtils.ts', './GUtil.ts', './Buffalo_symbol.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Sprite, SpriteFrame, Label, tween, v3, UITransform, instantiate, UIOpacity, Tween, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, eZindex, eSound, eConstDef, eProto, BuffaloModel, BuffaloCtrl, ViewManager, BuffaloUtils, GUtil, Buffalo_symbol, Common, AudioManager;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
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
      BuffaloModel = module.BuffaloModel;
    }, function (module) {
      BuffaloCtrl = module.BuffaloCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      BuffaloUtils = module.BuffaloUtils;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      Buffalo_symbol = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29;
      cclegacy._RF.push({}, "5aabbU8J/dLpZGeQzhh4oXY", "BuffaloGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var BuffaloGameView = exports('default', (_dec = ccclass("BuffaloGameView"), _dec2 = menu("BuffaloGame/BuffaloGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Buffalo_symbol), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(sp.Skeleton), _dec14 = property(Sprite), _dec15 = property(SpriteFrame), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Button), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Label), _dec24 = property(Label), _dec25 = property(Label), _dec26 = property(Label), _dec27 = property(Label), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Button), _dec31 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(BuffaloGameView, _GameDef$BaseView);
        function BuffaloGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_symbol_1_6", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_mask_1_6", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "SlotPanel_Main", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Buffalo_symbolList", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor10, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // Skeleton_run: sp.Skeleton = null;
          // @property(sp.Skeleton)
          // Skeleton_frameLight: sp.Skeleton = null;
          _initializerDefineProperty(_this, "Skeleton_setBase", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bg", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_free_time", _descriptor14, _assertThisInitialized(_this));
          // @property(Node)
          // Node_fire: Node = null;
          // @property(Node)
          // Node_free_light: Node = null;
          _initializerDefineProperty(_this, "Node_logo", _descriptor15, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // Node_tipEffect: sp.Skeleton = null;
          _initializerDefineProperty(_this, "Button_setBase", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_winTip", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWinFreeEnd", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeTimesFreeEnd", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeTimesFreeEnter", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeSpine", _descriptor24, _assertThisInitialized(_this));
          // @property(Label)
          // Label_freeRate: Label = null;
          _initializerDefineProperty(_this, "Label_totalWinBig", _descriptor25, _assertThisInitialized(_this));
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_auto", _descriptor29, _assertThisInitialized(_this));
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          _this.curPlayIndex = -1;
          _this.isStopBigWin = false;
          return _this;
        }
        var _proto = BuffaloGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, BuffaloCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            if (BuffaloModel.instance.gameStatus == eRunStatus.NONE && !BuffaloModel.instance.isAuto && BuffaloModel.instance.freeStatus == eRunStatus.NONE && !BuffaloCtrl.instance.isReqBet && BuffaloModel.instance.totalFreeTimes == 0) {
              BuffaloCtrl.instance.reqBet();
            }
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSymbolClick);
          EventManager.instance.off(eEvent.onSetAuto);
          EventManager.instance.off(eEvent.onAutoClose);
          BuffaloModel.instance.clearGameData();
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
              //                // BuffaloCtrl.instance.reEnterRoom();

              if (BuffaloModel.instance.isAuto && BuffaloCtrl.instance.isReqBet) {
                BuffaloCtrl.instance.reqBet();
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
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            var inter = Common.numFormatInt(BuffaloModel.instance.curBet);
            var digit = BuffaloUtils.instance.numberFormatD(BuffaloModel.instance.curBet, 2.0);
            _this2.Label_bet.string = "" + inter + digit + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this3 = this;
          //        // let _curIndex_baseScore = sys.localStorage.getItem(`${BuffaloDef.eAutoRateType.baseScore}_curIndex`);
          //        // _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          //        // let _curIndex_baseRate = sys.localStorage.getItem(`${BuffaloDef.eAutoRateType.baseRate}_curIndex`);
          //        // _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          //        // let _curIndex_baseBet = sys.localStorage.getItem(`${BuffaloDef.eAutoRateType.baseBet}_curIndex`);
          //        // _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;

          BuffaloModel.instance.curBet = 0.5; //(_curIndex_baseScore == 0 ? 0.1 : _curIndex_baseScore * 0.5) * (_curIndex_baseRate + 1) * 20;

          //        // BuffaloModel.instance._curIndex_baseScore = _curIndex_baseScore;
          //        // BuffaloModel.instance._curIndex_baseRate = _curIndex_baseRate;
          //        // BuffaloModel.instance._curIndex_baseBet = _curIndex_baseBet;

          BuffaloUtils.instance.loadRes_icon(function () {
            //            //test
            //            // for (let i = 0; i < this.Buffalo_symbolList.length; i++) {
            //            //     this.Buffalo_symbolList[i].init();
            //            // }

            BuffaloCtrl.instance.reqEnterRoom();

            //            // this.Node_mask_0.zIndex = BuffaloDef.eZindex.MASK;
            _this3.SlotPanel_Main.getComponent(UITransform).priority = eZindex.MASK - 100;
            _this3.Node_mask_1_6.getComponent(UITransform).priority = eZindex.MASK;
          });
          var inter = Common.numFormatInt(BuffaloModel.instance.curBet);
          var digit = BuffaloUtils.instance.numberFormatD(BuffaloModel.instance.curBet, 2.0);
          this.Label_bet.string = "" + inter + digit + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
        }
        //    // onToggleClick(event) {
        //    //     switch (event.node.name) {
        //    //         case "Button_fast": {
        //    //             //快速停止
        //    //             BuffaloModel.instance.isQuickStop = !BuffaloModel.instance.isQuickStop;
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
                BuffaloModel.instance.isQuickStop = !BuffaloModel.instance.isQuickStop;
                break;
              }
            case "Node_bigWinEffect":
              {
                this.isStopBigWin = true;
                break;
              }
            //            //返回
            case "Node_menu_mask":
            case "Button_menu":
              {
                //                // this.Node_action.active = !this.Node_action.active;
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "Button_return":
              {
                BuffaloCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                GUtil.openRecord("slotChargeBuffalo");
                break;
              }
            case "Button_rank":
              {
                GUtil.openRank("slotChargeBuffalo");
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", BuffaloUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_auto":
              {
                if (BuffaloModel.instance.freeStatus != eRunStatus.NONE) {
                  break;
                }
                BuffaloModel.instance.isAuto = !BuffaloModel.instance.isAuto;
                this.Button_run.interactable = !BuffaloModel.instance.isAuto;
                this.Skeleton_auto.setAnimation(0, BuffaloModel.instance.isAuto ? "on" : "idle", true);
                if (BuffaloModel.instance.gameStatus == eRunStatus.NONE && BuffaloModel.instance.isAuto) {
                  if (!BuffaloCtrl.instance.reqBet()) {
                    BuffaloModel.instance.isAuto = !BuffaloModel.instance.isAuto;
                    this.Button_run.interactable = !BuffaloModel.instance.isAuto;
                    this.Skeleton_auto.setAnimation(0, BuffaloModel.instance.isAuto ? "on" : "idle", true);
                  }
                }
                break;
              }
            case "Button_run":
              {
                //                // this.doStartRun();
                if (BuffaloCtrl.instance.isReqBet || BuffaloModel.instance.freeStatus != eRunStatus.NONE) {
                  break;
                }
                this.Button_run.interactable = false;
                if (BuffaloModel.instance.gameStatus == eRunStatus.NONE) {
                  //                    // event.target.getComponent(Button).interactable = false;
                  //                    // BuffaloUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), true);

                  tween(event.target).delay(2).call(function () {
                    if (!BuffaloModel.instance.isAuto && BuffaloModel.instance.gameStatus == eRunStatus.NONE) {
                      _this4.Button_run.interactable = true;
                    }
                  }).start();
                  BuffaloCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (BuffaloModel.instance.gameStatus != eRunStatus.NONE || BuffaloModel.instance.isAuto || BuffaloModel.instance.freeStatus != eRunStatus.NONE) {
                  return;
                }
                this.Skeleton_setBase.setAnimation(0, "intro", false);
                Common.loadPopBuddle("prefab/Node_setBase", BuffaloUtils.instance.bundle, function () {}, function (help) {
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
          if (iCol > 0) {
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
              BuffaloUtils.instance.playSound(eSound.NearWin);
              this.Node_symbol_1_6.getComponent(UITransform).height = 470;
            }
            BuffaloModel.instance.curSpecialStartCol = iCol;
            if (BuffaloModel.instance.curSpecialStartCol < this.Buffalo_symbolList.length) {
              this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL + 10 * BuffaloModel.instance.curSpecialStartCol;
              this.Node_colEffect.setPosition(this.Buffalo_symbolList[BuffaloModel.instance.curSpecialStartCol].node.getPosition().x, this.Node_colEffect.position.y);
              this.Node_mask_1_6.getComponent(UITransform).width = 8.75 + iCol * 150.5;
            }
          }
        };
        _proto.showMask = function showMask(isShow) {
          var _this5 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            if (this.Node_mask_1_6.active) {
              tween(this.Node_mask_1_6.getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).call(function () {
                _this5.Node_mask_1_6.active = false;
              }).start();
            }
            return;
          }

          //        //mask show
          if (!this.Node_mask_1_6.active) {
            this.Node_mask_1_6.active = true;
            this.Node_mask_1_6.getComponent(UITransform).width = 916;
            this.Node_mask_1_6.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask_1_6.getComponent(UIOpacity)).to(0.2, {
              opacity: 150
            }).start();
          }
        };
        _proto.doStartRun = function doStartRun() {
          var _this6 = this;
          if (BuffaloModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          gts.Debug.Log("======doStartRun=======");
          BuffaloUtils.instance.getResult();
          this.showMask(false);

          //停止动画
          this.curPlayIndex = -1;
          this.unschedule(this.playWin);
          BuffaloModel.instance.scatterCounts = 0;
          this.Node_symbol_1_6.getComponent(UITransform).height = 480;
          if (BuffaloModel.instance.freeStatus != eRunStatus.NONE) ;else {
            // this.Skeleton_Node_bg.setAnimation(0, "normal_bg_idle", true);

            // this.Skeleton_frameLight.setAnimation(0, "spin", true);

            BuffaloModel.instance.curTotalWin = 0;
            Tween.stopAllByTarget(this.Label_win.node);
            this.Label_win.string = "0.00";
          }
          Tween.stopAllByTarget(this.Label_winTip.node);
          this.Label_winTip.node.active = false;
          this.Label_winTip.string = "0";

          // this.Node_fire.active = false;

          this.Button_run.interactable = false;
          this.Button_setBase.interactable = false;
          // BuffaloUtils.instance.setBtnBetGray(this.Button_setBase.node.getChildByName("Background"), true);
          this.Skeleton_setBase.setAnimation(0, "disable", true);

          //        // EventManager.instance.emit(BuffaloDef.eEvent.updateWin, 0);

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
                  for (i = 0; i < _this6.Buffalo_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = BuffaloModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay / 5;
                    stopDelay = BuffaloModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    stopDelay += BuffaloModel.instance.specialStartCol > 0 && i >= BuffaloModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (i - BuffaloModel.instance.specialStartCol + 1) : 0;
                    arrPro.push(_this6.Buffalo_symbolList[i].doStart(startDelay, stopDelay));
                  }
                  _context.next = 4;
                  return Promise.all(arrPro);
                case 4:
                  if (BuffaloModel.instance.specialStartCol > 0) {
                    BuffaloUtils.instance.stopSound(eSound.NearWin);
                  }
                  _this6.scheduleOnce(_this6.doRunEnd, 0);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          BuffaloModel.instance.gameStatus = eRunStatus.RUNNING;
          if (BuffaloModel.instance.freeStatus == eRunStatus.RUNNING) {
            this.Label_freeSpine.string = "" + BuffaloModel.instance.totalFreeTimes;
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this7 = this;
            var result, i, _i, totalWin, delayStart, rate, arrPro, _i2, _i3, _arrPro, _i4;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  BuffaloModel.instance.gameStatus = eRunStatus.CLEAR;
                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this7.Node_colEffect.active = false;
                    }).start();
                  }
                  if (this.Node_mask_1_6.active) {
                    tween(this.Node_mask_1_6.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this7.Node_mask_1_6.active = false;
                    }).start();
                  }
                  result = BuffaloModel.instance.betResult;
                  if (BuffaloModel.instance.freeStatus == eRunStatus.NONE && BuffaloModel.instance.specialStartCol > 0) {
                    if (BuffaloModel.instance.totalFreeTimes > 0) {
                      BuffaloModel.instance.curSpecialStartCol = -1;
                      BuffaloUtils.instance.playSound(eSound.Fg_symbol_bell);
                      for (i = 0; i < this.Buffalo_symbolList.length; i++) {
                        this.Buffalo_symbolList[i].doScatterBlink();
                      }
                    } else {
                      for (_i = 0; _i < this.Buffalo_symbolList.length; _i++) {
                        this.Buffalo_symbolList[_i].stopScatterBlink();
                      }
                    }
                  }
                  totalWin = 0;
                  delayStart = 0.25;
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 30;
                    break;
                  }
                  this.Node_symbol_1_6.getComponent(UITransform).height = 545;
                  rate = result.prizeAmount / (BuffaloModel.instance.curBet * 1000);
                  if (rate < 6) {
                    BuffaloUtils.instance.playOneShot(eSound.smallWin);
                  }
                  this.scheduleOnce(this.showMask, 0.25);
                  //            //doEffect
                  arrPro = [];
                  for (_i2 = 0; _i2 < this.Buffalo_symbolList.length; _i2++) {
                    arrPro.push(this.Buffalo_symbolList[_i2].doEffect());
                  }
                  for (_i3 = 0; _i3 < this.Buffalo_symbolList.length; _i3++) {
                    arrPro.push(this.Buffalo_symbolList[_i3].doWildChange());
                  }
                  _context2.next = 19;
                  return Promise.all(arrPro);
                case 19:
                  if (BuffaloModel.instance.freeStatus != eRunStatus.NONE) {
                    // BuffaloModel.instance.totalFreeWin += result.prizeAmount;
                    totalWin = BuffaloModel.instance.totalFreeWin;
                  } else {
                    totalWin = result.prizeAmount;
                  }
                  delayStart = 1.5;
                  _context2.next = 23;
                  return this.doAwait(0.5);
                case 23:
                  _context2.next = 25;
                  return this.doShowBigWin(result.prizeAmount);
                case 25:
                  //gengxin
                  BuffaloUtils.instance.updateLabelAddNf(this.Label_win, totalWin, false, totalWin - result.prizeAmount);
                  BuffaloUtils.instance.updateLabelAddNf(this.Label_winTip, result.prizeAmount, false, 0, true);
                  this.scheduleOnce(function () {
                    tween(_this7.Label_winTip.node).to(0.5, {
                      scale: v3(0.25, 0.25, 0.25)
                    }).call(function () {
                      _this7.Label_winTip.node.active = false;
                    }).start();
                  }, 3);
                  if (BuffaloModel.instance.endBalance > 0) {
                    BuffaloModel.instance.curBalance = BuffaloModel.instance.endBalance;
                    BuffaloModel.instance.endBalance = 0;
                    this.updateGold();
                  }

                  //轮播中奖图标动画
                  if (BuffaloModel.instance.betResult.prizeIdx.length > 1) {
                    this.schedule(this.playWin, 2);
                  }
                case 30:
                  if (!(BuffaloModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context2.next = 45;
                    break;
                  }
                  BuffaloModel.instance.gameStatus = eRunStatus.NONE;
                  if (BuffaloModel.instance.totalFreeTimes < BuffaloModel.instance.betResult.freeInfo.surplusFreeCount) {
                    BuffaloModel.instance.totalFreeTimes = BuffaloModel.instance.betResult.freeInfo.surplusFreeCount;
                    BuffaloUtils.instance.playOneShot(eSound.GetFreeSpin);
                    this.Label_freeSpine.string = "" + BuffaloModel.instance.totalFreeTimes;
                  }

                  // await this.doAwait(doWildChangeDelay);

                  // let arrPro = [];
                  // for (let i = 0; i < this.Buffalo_symbolList.length; i++) {
                  //     arrPro.push(this.Buffalo_symbolList[i].doWildChange());
                  // }
                  // await Promise.all(arrPro);

                  this.Node_bigWin.active = false;
                  if (!(BuffaloModel.instance.totalFreeTimes > 0)) {
                    _context2.next = 38;
                    break;
                  }
                  this.scheduleOnce(function () {
                    BuffaloCtrl.instance.reqBet();
                  }, delayStart);
                  _context2.next = 43;
                  break;
                case 38:
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 41;
                    break;
                  }
                  _context2.next = 41;
                  return this.doAwait(2.5);
                case 41:
                  BuffaloModel.instance.freeStatus = eRunStatus.END;
                  this.doEndFree();
                case 43:
                  _context2.next = 66;
                  break;
                case 45:
                  if (!(BuffaloModel.instance.totalFreeTimes > 0)) {
                    _context2.next = 65;
                    break;
                  }
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 49;
                    break;
                  }
                  _context2.next = 49;
                  return this.doAwait(2.0);
                case 49:
                  this.showMask(true);
                  this.playWin(false);
                  this.unschedule(this.playWin);

                  // this.setSymOpcity(25);

                  // this.Node_free_light.active = true;
                  BuffaloModel.instance.specialStartCol = 0;
                  BuffaloModel.instance.curSpecialStartCol = -1;
                  _arrPro = [];
                  for (_i4 = 0; _i4 < this.Buffalo_symbolList.length; _i4++) {
                    _arrPro.push(this.Buffalo_symbolList[_i4].doScatterBlink());
                  }
                  _context2.next = 58;
                  return Promise.all(_arrPro);
                case 58:
                  _context2.next = 60;
                  return this.doAwait(3.0);
                case 60:
                  this.showMask(false);
                  BuffaloModel.instance.gameStatus = eRunStatus.NONE;
                  this.scheduleOnce(function () {
                    _this7.showFree();
                  }, 0.0);
                  _context2.next = 66;
                  break;
                case 65:
                  if (BuffaloModel.instance.isAuto) {
                    BuffaloModel.instance.gameStatus = eRunStatus.NONE;
                    this.Button_setBase.interactable = true;
                    // BuffaloUtils.instance.setBtnBetGray(this.Button_setBase.node.getChildByName("Background"), false);
                    this.Skeleton_setBase.setAnimation(0, "off", true);
                    this.scheduleOnce(function () {
                      if (!BuffaloCtrl.instance.reqBet()) {
                        BuffaloModel.instance.isAuto = !BuffaloModel.instance.isAuto;
                        _this7.Button_run.interactable = !BuffaloModel.instance.isAuto;
                        _this7.Skeleton_auto.setAnimation(0, BuffaloModel.instance.isAuto ? "on" : "idle", true);
                      }
                    }, delayStart);
                  } else {
                    BuffaloModel.instance.gameStatus = eRunStatus.NONE;
                    this.Button_run.interactable = true;
                    this.Button_setBase.interactable = true;
                    // BuffaloUtils.instance.setBtnBetGray(this.Button_setBase.node.getChildByName("Background"), false);
                    this.Skeleton_setBase.setAnimation(0, "off", true);
                  }
                case 66:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doRunEnd() {
            return _doRunEnd.apply(this, arguments);
          }
          return doRunEnd;
        }();
        _proto.playWin = function playWin(isPlay) {
          if (isPlay === void 0) {
            isPlay = true;
          }
          var result = BuffaloModel.instance.betResult;
          this.curPlayIndex = (this.curPlayIndex + 1) % result.prizeIdx.length;
          for (var playIndex = 0; playIndex < result.prizeIdx.length; playIndex++) {
            var prizeIdxList = result.prizeIdx[playIndex];
            if (prizeIdxList && this.curPlayIndex != playIndex) {
              for (var _iterator2 = _createForOfIteratorHelperLoose(result.prizeIdx[playIndex]), _step2; !(_step2 = _iterator2()).done;) {
                var prizeIdx = _step2.value;
                var row = Math.floor(prizeIdx / eConstDef.CMaxCol);
                var col = prizeIdx % eConstDef.CMaxCol;
                this.Buffalo_symbolList[col]._symbolList[3 - row].playWin(false);
              }
            }
          }
          if (isPlay) {
            var _prizeIdxList = result.prizeIdx[this.curPlayIndex];
            if (_prizeIdxList) {
              for (var _iterator3 = _createForOfIteratorHelperLoose(result.prizeIdx[this.curPlayIndex]), _step3; !(_step3 = _iterator3()).done;) {
                var _prizeIdx = _step3.value;
                var _row = Math.floor(_prizeIdx / eConstDef.CMaxCol);
                var _col = _prizeIdx % eConstDef.CMaxCol;
                this.Buffalo_symbolList[_col]._symbolList[3 - _row].playWin(true);
              }
            }
          }
        };
        _proto.doAwait = function doAwait(delay) {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            _this8.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.doShowBigWin = function doShowBigWin(destWin, delay) {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            var rate = destWin / (BuffaloModel.instance.curBet * 1000);
            if (rate < 6) {
              resolve();
              return;
            }
            _this9.Node_bigWin.getComponent(UITransform).priority = 52;
            _this9.Node_bigWin.active = true;
            _this9.Node_bigWin.scale = v3(0.5, 0.5, 0.5);
            var Node_bigWinEffect = _this9.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
            var lv = 0; //rate < 35 ? 1 : rate < 50 ? 2 : 3;

            var destLv = rate < 10 ? 1 : rate < 25 ? 2 : 3;
            var curLv = 1;
            var aniName = ["bigwin", "megawin", "superwin"];
            Node_bigWinEffect.setAnimation(0, aniName[curLv - 1] + "_intro", false);
            Node_bigWinEffect.addAnimation(0, aniName[curLv - 1] + "_idle", true);
            var Label_totalWin = _this9.Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
            Label_totalWin.string = "";
            tween(_this9.Node_bigWin).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }, {
              easing: "quadOut"
            }).to(0.05, {
              scale: v3(1.0, 1.0, 1)
            }, {
              easing: "quadIn"
            }).call(function () {
              BuffaloUtils.instance.playSound(eSound.BigWin);
              var totalTime = destLv * 5;
              var dt = 0.05;
              var updateTimes = totalTime / dt;
              var disWin = Math.floor(destWin / updateTimes);
              var curTotalWin = 0;
              tween(Label_totalWin.node).repeatForever(
              //                                // updateTimes + 1,
              tween(Label_totalWin.node).delay(dt).call(function () {
                var doEnd = function doEnd() {
                  BuffaloUtils.instance.stopSound(eSound.BigWin);
                  BuffaloUtils.instance.playSound(eSound.bigwin_end);
                  Tween.stopAllByTarget(Label_totalWin.node);
                  curTotalWin = destWin;
                  if (Node_bigWinEffect.animation != aniName[destLv - 1] + "_idle") {
                    Node_bigWinEffect.setAnimation(0, aniName[destLv - 1] + "_idle", true);
                  }
                  var inter = Common.numFormatInt(curTotalWin / 1000);
                  var digit = BuffaloUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                  Label_totalWin.string = "" + inter + digit + "K";
                  tween(_this9.Node_bigWin).delay(1.0).call(function () {
                    _this9.Node_bigWin.active = false;
                    _this9.isStopBigWin = false;
                    resolve();
                  }).start();
                };
                curTotalWin += disWin;
                rate = curTotalWin / (BuffaloModel.instance.curBet * 1000);
                lv = rate < 35 ? 1 : rate < 50 ? 2 : 3;
                if (curLv < lv) {
                  curLv = lv;
                  BuffaloUtils.instance.playOneShot(eSound.ChangeWin);
                  Node_bigWinEffect.setAnimation(0, aniName[curLv - 1] + "_intro", false);
                  Node_bigWinEffect.addAnimation(0, aniName[curLv - 1] + "_idle", true);
                }
                if (curTotalWin > destWin) {
                  doEnd();
                } else {
                  var inter = Common.numFormatInt(curTotalWin / 1000);
                  var digit = BuffaloUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                  Label_totalWin.string = "" + inter + digit + "K";
                }
                if (_this9.isStopBigWin) {
                  //点击停止
                  doEnd();
                }
              })).start();
            }).start();
          });
        };
        _proto.hideFree = function hideFree() {
          var _this10 = this;
          this.unschedule(this.hideFree);

          //背景
          this.Node_bg.spriteFrame = this.arrBgSpFrame[0];
          this.Node_logo.active = true;
          BuffaloModel.instance.freeStatus = eRunStatus.NONE;
          BuffaloModel.instance.totalFreeTimes = 0;
          BuffaloModel.instance.totalFreeTimesBack = 0;
          gts.Debug.LogWarr("==totalFreeTimesBack==" + BuffaloModel.instance.totalFreeTimesBack);
          this.Button_run.interactable = !BuffaloModel.instance.isAuto;
          AudioManager.instance.resumeMusic();
          var Node_end = this.Node_free.getChildByName("Node_end");
          tween(this.Node_free).delay(0.3).call(function () {
            var enterMask = _this10.Node_free.getChildByName("enterMask");
            enterMask.active = false;
            Node_end.active = false;
            _this10.Node_bigWin.active = false;
            BuffaloUtils.instance.playBgMusic();
          }).delay(0.5).call(function () {
            _this10.Node_free.active = false;
            _this10.Button_setBase.interactable = true;
            _this10.Skeleton_setBase.setAnimation(0, "off", true);
            if (BuffaloModel.instance.isAuto) {
              _this10.scheduleOnce(function () {
                BuffaloCtrl.instance.reqBet();
              }, 0.25);
            } else {
              _this10.Button_run.interactable = true;
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
            this.Node_menu.active = false;

            //背景
            this.Node_bg.spriteFrame = this.arrBgSpFrame[1];
            if (isEnter) {
              var inter = Common.numFormatInt(BuffaloModel.instance.totalFreeWin / 1000);
              var digit = BuffaloUtils.instance.numberFormatD(BuffaloModel.instance.totalFreeWin / 1000, 2.0);
              this.Label_win.string = "" + inter + digit + "K";

              //                //免费次数
              this.Label_freeSpine.string = "" + BuffaloModel.instance.totalFreeTimes;
            } else {
              BuffaloModel.instance.curTotalWin = 0;
              BuffaloModel.instance.totalFreeWin = 0;
              BuffaloModel.instance.totalFreeTimesBack = BuffaloModel.instance.totalFreeTimes;

              //免费次数
              this.Label_freeSpine.string = "" + BuffaloModel.instance.totalFreeTimes;
              for (var i = 0; i < this.Buffalo_symbolList.length; i++) {
                this.Buffalo_symbolList[i].stopScatterBlink();
              }
            }
            this.scheduleOnce(function () {
              BuffaloUtils.instance.playBgMusic(eSound.bgFree);
              if (isEnter) {
                _this11.doEnterFree();
              } else {
                _this11.setEnterFree();
              }
            }, delayTime);
          }
        };
        _proto.setEnterFree = function setEnterFree() {
          var _this12 = this;
          //        //enter
          var enterMask = this.Node_free.getChildByName("enterMask");
          enterMask.active = true;
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.scale = v3(1.0, 1.0, 1);
          Node_enter.getComponent(UIOpacity).opacity = 255;
          Node_enter.active = true;
          BuffaloUtils.instance.playSound(eSound.MGtoFG1);
          var spEnter = Node_enter.getComponent(sp.Skeleton);
          spEnter.setAnimation(0, "intro", false);
          spEnter.addAnimation(0, "idle", true);
          this.scheduleOnce(function () {
            _this12.Label_freeTimesFreeEnter.node.active = true;
            _this12.Label_freeTimesFreeEnter.string = "" + BuffaloModel.instance.totalFreeTimesBack;
            BuffaloUtils.instance.playSound(eSound.MGtoFG2);
          }, 0.5);
          this.scheduleOnce(function () {
            _this12.Label_win.string = "0.00";
            enterMask.active = false;
            _this12.Node_logo.active = false;
            _this12.Label_freeTimesFreeEnter.node.active = false;
            spEnter.setAnimation(0, "end", false);
            spEnter.setCompleteListener(function () {
              spEnter.setCompleteListener(null);
              Node_enter.active = false;
              _this12.doEnterFree();
            });
          }, 3);
        }

        // freeRate = 1;
        ;

        _proto.doEnterFree = function doEnterFree() {
          if (BuffaloModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }
          BuffaloModel.instance.freeStatus = eRunStatus.RUNNING;
          this.Button_run.interactable = false;
          this.Node_free_time.active = true;
          AudioManager.instance.resumeMusic();
          this.scheduleOnce(function () {
            BuffaloCtrl.instance.reqBet();
          }, 0);
        };
        _proto.doEndFree = function doEndFree() {
          var _this13 = this;
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.scale = v3(1, 1, 1);
          Node_end.getComponent(UIOpacity).opacity = 255;
          this.Node_free_time.active = false;
          var spEnd = Node_end.getChildByName("Node_character").getComponent(sp.Skeleton);
          spEnd.setAnimation(0, "intro", false);
          spEnd.addAnimation(0, "idle", true);
          BuffaloUtils.instance.playSound(eSound.FG_End);
          this.Label_freeTimesFreeEnd.node.active = true;
          this.Label_totalWinFreeEnd.node.active = true;
          this.Label_freeTimesFreeEnd.string = "" + BuffaloModel.instance.totalFreeTimesBack;
          BuffaloUtils.instance.updateLabelAddNf(this.Label_totalWinFreeEnd, BuffaloModel.instance.totalFreeWin);
          AudioManager.instance.pauseMusic();
          this.scheduleOnce(function () {
            BuffaloModel.instance.totalFreeWin = 0;
            _this13.Label_freeTimesFreeEnd.node.active = false;
            _this13.Label_totalWinFreeEnd.node.active = false;
          }, 3.25);
          this.scheduleOnce(function () {
            //2.0秒后返回正常
            spEnd.setAnimation(0, "end", false);
            spEnd.setCompleteListener(function () {
              spEnd.setCompleteListener(null);
              _this13.hideFree();
            });
          }, 3.0);
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(BuffaloModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            BuffaloUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                if (!BuffaloModel.instance.gameInfo.OpenNum || BuffaloModel.instance.gameInfo.OpenNum[0] == 0) {
                  BuffaloModel.instance.gameInfo.OpenNum = BuffaloUtils.instance.getInitOpenNums();
                }
                var symList = BuffaloUtils.instance.getResult(BuffaloModel.instance.gameInfo.OpenNum, BuffaloModel.instance.gameInfo.prizeIdx);
                for (var i = 0; i < this.Buffalo_symbolList.length; i++) {
                  this.Buffalo_symbolList[i].init(symList[i]);
                }

                //轮播中奖图标动画
                BuffaloModel.instance.betResult = BuffaloModel.instance.gameInfo;
                if (BuffaloModel.instance.betResult.prizeIdx && BuffaloModel.instance.betResult.prizeIdx.length > 1) {
                  this.schedule(this.playWin, 2);
                }

                //                //gengxin
                var inter = Common.numFormatInt(BuffaloModel.instance.gameInfo.prizeAmount / 1000);
                var digit = BuffaloUtils.instance.numberFormatFloatD(BuffaloModel.instance.gameInfo.prizeAmount / 1000, 2.0);
                this.Label_win.string = "" + inter + digit + "K";
                if (BuffaloModel.instance.gameInfo.betAmount > 0) {
                  BuffaloModel.instance.curBet = BuffaloModel.instance.gameInfo.betAmount / 1000;
                } else {
                  BuffaloModel.instance.curBet = 0.5;
                }
                inter = Common.numFormatInt(BuffaloModel.instance.curBet);
                digit = BuffaloUtils.instance.numberFormatD(BuffaloModel.instance.curBet, 2.0);
                this.Label_bet.string = "" + inter + digit + "K";
                if (BuffaloModel.instance.totalFreeTimes > 0) {
                  this.showFree(true);
                }
                break;
              }
            case eProto.HD_History:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                Tween.stopAllByTarget(this.Button_run.node);
                this.doStartRun();
                this.updateGold();
                break;
              }

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
        return BuffaloGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_symbol_1_6", [_dec3], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "SlotPanel_Main", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_colEffect", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Buffalo_symbolList", [_dec8], {
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
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_bg", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "arrBgSpFrame", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_free_time", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_logo", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Button_setBase", [_dec18], {
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
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Label_winTip", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWinFreeEnd", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeTimesFreeEnd", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeTimesFreeEnter", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeSpine", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWinBig", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_auto", [_dec31], {
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

System.register("chunks:///_virtual/BuffaloModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './BuffaloDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "c1446wYXNxKyI+wToqFU7ZG", "BuffaloModel", undefined);
      var BuffaloModel = exports('BuffaloModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(BuffaloModel, _GameDef$BaseSington);
        function BuffaloModel() {
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
          //    //baseSet
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.totalFreeTimes = 0;
          _this.totalFreeTimesBack = 0;
          _this.totalFreeWin = 0;
          _this.boType = "count";
          _this.specialStartCol = 0;
          _this.curSpecialStartCol = 0;
          _this.scatterCounts = 0;
          _this.onRecvData = {
            Action: "HD_Bet",
            Code: 0,
            Data: {
              OpenNum: [4, 4, 11, 9, 9, 8, 1, 8, 12, 12, 1, 8, 6, 5, 8, 1, 1, 7, 11, 12, 6, 12, 11, 5],
              betAmount: 10000,
              freeInfo: {
                surplusFreeCount: 15,
                totalFreeCount: 15,
                totalPrizeAmount: 0
              },
              freePrize: true,
              prizeAmount: 2500,
              prizeIdx: [[1, 0]]
            },
            ErrMsg: "THAO TÁC THÀNH CÔNG",
            GameType: "slotChargeBuffalo",
            cmd: "slotChargeBuffalo/HD_Bet"
          };
          return _this;
        }
        var _proto = BuffaloModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        _proto.getBaseIndex = function getBaseIndex() {
          for (var index = 0; index < arrBetList.length; index++) {
            if (Math.floor(arrBetList[index] / 1000) == BuffaloModel.instance.curBet) {
              return index;
            }
          }
          return 0;
        };
        _createClass(BuffaloModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(_betResult) {
            this._betResult = _betResult;
          }
        }]);
        return BuffaloModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuffaloScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './BuffaloDef.ts', './BuffaloUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, BuffaloUtils, Common;
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
      BuffaloUtils = module.BuffaloUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3cfeeSKWfhNQ7iKIyzUytmw", "BuffaloScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BuffaloScene = exports('default', (_dec = ccclass("BuffaloScene"), _dec2 = menu("BuffaloGame/BuffaloScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BuffaloScene, _Component);
        function BuffaloScene() {
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
        var _proto = BuffaloScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          BuffaloUtils.instance.bundle = assetManager.getBundle(cBundle);
          BuffaloUtils.instance.preLoad();
          BuffaloUtils.instance.playBgMusic();
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
          if (ViewManager.instance.miniLayer) {
            ViewManager.instance.miniLayer.getChildByName("miniGame").angle = 0;
          }
          //        //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this2 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            BuffaloUtils.instance.bundle.load("prefab/BuffaloGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
        return BuffaloScene;
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

System.register("chunks:///_virtual/BuffaloUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './BuffaloDef.ts', './BuffaloModel.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, SpriteFrame, sp, Font, GameDef, AudioManager, eConstDef, eSound, eSymbol, BuffaloModel, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
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
      UIRenderer = module.UIRenderer;
      Button = module.Button;
      sys = module.sys;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      Font = module.Font;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eConstDef = module.eConstDef;
      eSound = module.eSound;
      eSymbol = module.eSymbol;
    }, function (module) {
      BuffaloModel = module.BuffaloModel;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2d5e6YFWXRHd7Wd38DzbZCy", "BuffaloUtils", undefined);
      var symbol_nomal_icon = ["",
      //SCATTER-0
      "Symbol10",
      //牛
      "Symbol09",
      //鹰
      "Symbol08",
      //熊
      "Symbol07",
      //狼
      "Symbol06",
      //鹿
      "Symbol05",
      //A-
      "Symbol04",
      //K-
      "Symbol03",
      //Q-
      "Symbol02",
      //J-
      "Symbol01",
      //TEN-
      "Symbol00",
      //Nine-
      "Symbol11",
      //Scatter-
      "Symbol13" //Wild-
      ];

      // NONE = -1,
      //     Cattle = 1, //牛
      //     Eagle = 2, //鹰
      //     Bear = 3, //熊
      //     Wolf = 4, //狼
      //     Deer = 5, //鹿
      //     A = 6,
      //     K = 7,
      //     Q = 8,
      //     J = 9,
      //     Ten = 10,
      //     Nine = 11,
      //     Scatter = 12, //免费
      //     Wild = 13, //万能
      //     Wild2 = 14,
      //     Wild3 = 15,
      //     Wild5 = 16,

      var symbol_aniName = ["cow", "eagle", "xiong", "wolf", "sheep", "A", "K", "Q", "J", "10", "9", "scatter", "wild", "wild", "wild", "wild"];
      // const symbol_box = [
      //     "symbol_12", //SCATTER-0
      //     "symbol_10", //WILD-1
      //     "symbol_09", //RED-2
      //     "symbol_08", //PURPLE-3
      //     "symbol_07", //GREEN-4
      //     "symbol_06", //BLUE-5
      //     "symbol_05", //GREY-6
      //     "symbol_04", //A-8
      //     "symbol_03", //K-9
      //     "symbol_02", //Q-10
      //     "symbol_01", //J-11
      //     "symbol_00", //TEN-12
      // ];

      var BuffaloUtils = exports('BuffaloUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(BuffaloUtils, _GameDef$BaseSington);
        function BuffaloUtils() {
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
          _this._retList = null;
          return _this;
        }
        var _proto = BuffaloUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/BuffaloGameView");
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
                  arrHLoad.push(this.asyncLoadDir("spine/icon", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpineData), _step2; !(_step2 = _iterator2()).done;) {
                        var spineData = _step2.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/effect/dynamic", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(arrSpineData), _step3; !(_step3 = _iterator3()).done;) {
                        var spineData = _step3.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("font/Add_Fg", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
                  _context3.next = 7;
                  return Promise.all(arrHLoad);
                case 7:
                  if (cb) {
                    cb();
                  }
                case 8:
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
        _proto.updateLabelAddNf = function updateLabelAddNf(label, nums, isFloatFormat, curNums, isShowIn) {
          var _this7 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          if (curNums === void 0) {
            curNums = 0;
          }
          if (isShowIn === void 0) {
            isShowIn = false;
          }
          var destWin = nums;
          var curWin = curNums;
          var disWin = (nums - curWin) / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          label.node.scale = isShowIn ? v3(0.25, 0.25, 0.25) : v3(1, 1, 1);

          //        // BuffaloUtils.instance.playSound(BuffaloDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          if (isShowIn) {
            tween(label.node).to(0.075 * 10, {
              scale: v3(1.0, 1.0, 1)
            }).start();
          }
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // BuffaloUtils.instance.stopSound(BuffaloDef.eSound.numAdd);
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

          //        // BuffaloUtils.instance.playSound(BuffaloDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // BuffaloUtils.instance.stopSound(BuffaloDef.eSound.numAdd);
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

          //        // BuffaloUtils.instance.playSound(BuffaloDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // BuffaloUtils.instance.stopSound(BuffaloDef.eSound.numAdd);

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

        _proto.getItemSymbolNum = function getItemSymbolNum(num) {
          var symbol = "Symbol_Num_" + num;
          return this.arrIconSpriteFrame[symbol];
        };
        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex) {
          if (this.arrIconSpriteFrame) {
            var symbol = null;
            symbol = "" + symbol_nomal_icon[symbolIndex];

            // gts.Debug.LogWarr(`==getItemSymbolIcon=symbol=${JSON.stringify(symbol)}==symbolIndex=${symbolIndex}`);
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        }
        // getItemSymbolIconBox(symbolIndex, length = 0, rim = 0) {
        //     let symbol = `${symbol_box[symbolIndex]}_${5 - length}`;

        //     if (this.arrIconBoxSpriteFrame) {
        //         let ret = this.arrIconBoxSpriteFrame[symbol];
        //         if (!ret) {
        //             return null;
        //         }
        //         return ret;
        //     }

        //     return null;
        // }
        // getItemSymbolIconFrame(rim = 0, length = 0) {
        //     if (rim == 0 || length < 2) {
        //         return null;
        //     }

        //     let symbol = rim == 1 ? `symbol_f_slive` : `symbol_f_gold`;
        //     if (this.arrIconFrameSpriteFrame) {
        //         return this.arrIconFrameSpriteFrame[symbol];
        //     }
        //     return null;
        // }
        ;

        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          //        // if (isIdle) {
          //        //     return null;
          //        // }

          var strAni = [];
          switch (symbolIndex) {
            case eSymbol.NONE:
              {
                var _index = Math.floor(Math.random() * (symbol_aniName.length - 3) + 3);
                strAni.push(symbol_aniName[_index] + "_" + (isIdle ? "idle" : "win"));
                break;
              }

            // case BuffaloDef.eSymbol.Wild: {
            //     if (isIdle) {
            //         strAni.push(`wild_idle`);
            //     } else {
            //         strAni.push(`wild_win`);
            //     }
            //     break;
            // }
            // case BuffaloDef.eSymbol.SpecialWild: {
            //     strAni.push(`${symbol_aniName[symbolIndex - 1]}_${isIdle ? "idle" : "win"}`);
            //     break;
            // }
            default:
              {
                strAni.push(symbol_aniName[symbolIndex - 1] + "_" + (isIdle ? "idle" : "win"));
                break;
              }
          }
          if (!strAni) {
            return null;
          }

          //        // gts.Debug.Log(`==getSymbolAniName=strAni=${strAni}=symbolIndex=${symbolIndex}`);
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
        _proto.getInitOpenNums = function getInitOpenNums() {
          var arrNUms = [[11, 8, 9, 1, 6, 5, 9, 8, 4, 8, 7, 1, 10, 10, 8, 5, 4, 8, 9, 10, 5, 4, 8, 9], [9, 8, 6, 5, 4, 10, 1, 2, 11, 2, 4, 6, 11, 6, 4, 7, 5, 10, 9, 5, 3, 6, 9, 1], [5, 8, 10, 4, 7, 8, 8, 7, 7, 6, 6, 5, 4, 11, 4, 5, 9, 8, 4, 8, 7, 1, 10, 5], [4, 10, 5, 5, 9, 4, 11, 7, 10, 7, 4, 8, 7, 4, 11, 4, 7, 5, 10, 9, 5, 3, 6, 9], [10, 8, 9, 2, 9, 10, 6, 5, 10, 8, 6, 6, 8, 2, 9, 8, 5, 4, 8, 9, 10, 5, 4, 8]];
          return arrNUms[Math.floor(Math.random() * arrNUms.length)];
        };
        _proto.getResult = function getResult(openNums, prizeIdx) {
          if (openNums === void 0) {
            openNums = null;
          }
          if (prizeIdx === void 0) {
            prizeIdx = null;
          }
          if (!openNums) {
            this._retList = null;
            return null;
          }
          if (this._retList) {
            return this._retList;
          }
          this._retList = [];
          for (var iCol = 0; iCol < eConstDef.CMaxCol; iCol++) {
            var symList = [];
            for (var iRow = 0; iRow < eConstDef.CMaxRow; iRow++) {
              var _index2 = iRow * eConstDef.CMaxCol + iCol;
              var sym = openNums[_index2];
              symList.push({
                Sym: sym != 0 ? sym : -1,
                IsReward: false,
                iRow: iRow
              });
            }
            this._retList.push(symList);
          }
          prizeIdx = prizeIdx || (BuffaloModel.instance.betResult ? BuffaloModel.instance.betResult.prizeIdx : null);
          if (prizeIdx) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(prizeIdx), _step4; !(_step4 = _iterator4()).done;) {
              var indexList = _step4.value;
              if (indexList) {
                for (var _iterator5 = _createForOfIteratorHelperLoose(indexList), _step5; !(_step5 = _iterator5()).done;) {
                  var _index3 = _step5.value;
                  var _iRow = Math.floor(_index3 / eConstDef.CMaxCol);
                  var _iCol = _index3 % eConstDef.CMaxCol;
                  this._retList[_iCol][_iRow].IsReward = true;
                }
              }
            }
          }
          for (var _iterator6 = _createForOfIteratorHelperLoose(this._retList), _step6; !(_step6 = _iterator6()).done;) {
            var _retList = _step6.value;
            _retList.reverse();
          }
          gts.Debug.Log("==getResult=retList=" + JSON.stringify(this._retList));
          return this._retList;
        };
        _createClass(BuffaloUtils, [{
          key: "resultList",
          get: function get() {
            return this._retList;
          }
        }]);
        return BuffaloUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotBuffaloGame", ['./BuffaloCtrl.ts', './BuffaloDef.ts', './BuffaloModel.ts', './BuffaloScene.ts', './BuffaloUtils.ts', './BuffaloGameView.ts', './Buffalo_btnEffect.ts', './Buffalo_helpTip.ts', './Buffalo_setBase.ts', './Buffalo_symbol.ts', './Buffalo_symbolEffectRoot.ts', './Buffalo_symbolInfo.ts', './Buffalo_symbolItem.ts', './Buffalo_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/slotBuffaloGame', 'chunks:///_virtual/slotBuffaloGame'); 
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