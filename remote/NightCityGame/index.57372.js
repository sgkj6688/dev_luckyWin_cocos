System.register("chunks:///_virtual/NightCity_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "d9ffdNaR41GoJhMGDlXdOOO", "NightCity_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var NightCity_btnEffect = exports('default', (_dec = ccclass("NightCityBtnEffect"), _dec2 = menu("NightCityGame/NightCity_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NightCity_btnEffect, _Component);
        function NightCity_btnEffect() {
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
        var _proto = NightCity_btnEffect.prototype;
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

        _createClass(NightCity_btnEffect, [{
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

        return NightCity_btnEffect;
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

System.register("chunks:///_virtual/NightCity_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './EventManager.ts', './NightCityModel.ts', './NightCityDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, instantiate, Label, Toggle, UIOpacity, tween, sys, Component, DataManager, UserKey, EventManager, NightCityModel, eEvent, arrBetList;
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
      NightCityModel = module.NightCityModel;
    }, function (module) {
      eEvent = module.eEvent;
      arrBetList = module.arrBetList;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1323cRAIOtCJajGusXhfc2e", "NightCity_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var NightCity_setBase = exports('default', (_dec = ccclass("NightCitySetBase"), _dec2 = menu("NightCityGame/NightCity_setBase"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NightCity_setBase, _Component);
        function NightCity_setBase() {
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
        var _proto = NightCity_setBase.prototype;
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
          var baseBetIndex = NightCityModel.instance.getBaseIndex();
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
          NightCityModel.instance.curBet = arrBetList[iIndex] / 1000;
          var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
          sys.localStorage.setItem("NightCity_baseBetGold" + uid, arrBetList[iIndex]);
          this.hide();
        };
        return NightCity_setBase;
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

System.register("chunks:///_virtual/NightCity_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NightCityModel.ts', './NightCityDef.ts', './NightCityUtils.ts', './NightCity_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, v3, tween, UIOpacity, Component, NightCityModel, eRunStatus, eSymbol, eConstDef, eSound, NightCityUtils, NightCity_symbolItem;
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
      NightCityModel = module.NightCityModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      eSound = module.eSound;
    }, function (module) {
      NightCityUtils = module.NightCityUtils;
    }, function (module) {
      NightCity_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "8c206LWtmJB7akjc7GhUw5m", "NightCity_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var NightCity_symbol = exports('default', (_dec = ccclass("NightCitySymbol"), _dec2 = menu("NightCityGame/NightCity_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NightCity_symbol, _Component);
        function NightCity_symbol() {
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
        var _proto = NightCity_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.addNewItem = function addNewItem(itemInfo, toLength) {
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            var symbol = this._iCol < 3 ? Math.floor(Math.random() * eSymbol.J) : Math.floor(Math.random() * eSymbol.Bottle) + 4;
            itemInfo = {
              Sym: symbol,
              IsReward: false
            };
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          var offsetY = (toLength + 1 / 2) * eConstDef.cSymbolH;
          newItem.position = v3(this.node.position.x, eConstDef.cSymbolStartY + offsetY, 0);

          //        //
          var com = newItem.getComponent(NightCity_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol);
          this._symbolList.push(com);
          this.itemTag = (this.itemTag + 1) % 2000;
          newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
          this._curLength += 1;
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
            }).call(function () {
              for (var _iterator = _createForOfIteratorHelperLoose(_this2._symbolList), _step; !(_step = _iterator()).done;) {
                var comSymbol = _step.value;
                comSymbol.doBindToUp();
              }
            }).start();
          }
        };
        _proto.setSymOpacity = function setSymOpacity(opacity) {
          if (opacity === void 0) {
            opacity = 255;
          }
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            if (symbol.itemInfo.Sym != eSymbol.SCATTER) {
              symbol.node.getComponent(UIOpacity).opacity = opacity;
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
              NightCityModel.instance.isQuickStop ? function () {
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = 2500;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this3._resultInfoList = NightCityUtils.instance.getResult(NightCityModel.instance.betResult.openNums)[_this3._iCol];

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
                      curLength += 1;
                      if (curLength > _this3.maxIndex) {
                        var symbol = _this3._symbolList.shift();
                        symbol.node.removeFromParent();
                        symbol.node.destroy();
                      }
                    }
                    _this3._runStatus = eRunStatus.NONE;
                    _this3.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator2, _step2, _symbol;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _this3.scheduleOnce(function () {
                              NightCityUtils.instance.playOneShot(eSound.drop_1);
                            }, 0.15);
                            arrPro = [];
                            for (_iterator2 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step2 = _iterator2()).done;) {
                              _symbol = _step2.value;
                              arrPro.push(_symbol.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            _this3.unschedule(scheduleUpdate);
                            resolve();
                          case 7:
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
                var _symbol2 = _this3._symbolList[_i2];
                if (!_symbol2.doRunning(offset)) {
                  _this3._symbolList.splice(_i2, 1);
                  _symbol2.node.removeFromParent();
                  _symbol2.node.destroy();
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
            //            // arrPro.push(symbol.doEffect(NightCity_symbol.rewardCount * 0.075));
            if (symbol.itemInfo.IsReward) {
              NightCity_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doScatterBlink = /*#__PURE__*/function () {
          var _doScatterBlink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var arrPro, _iterator3, _step3, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  arrPro = [];
                  for (_iterator3 = _createForOfIteratorHelperLoose(this._symbolList); !(_step3 = _iterator3()).done;) {
                    symbol = _step3.value;
                    if (symbol.itemInfo.Sym == eSymbol.SCATTER) {
                      arrPro.push(symbol.doScatterBlink());
                    } else if (symbol.itemInfo.IsReward) {
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
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._symbolList), _step4; !(_step4 = _iterator4()).done;) {
            var symbol = _step4.value;
            if (symbol.itemInfo.Sym == eSymbol.SCATTER) {
              symbol.stopScatterBlink();
            }
          }
        };
        _proto.doWildChange = /*#__PURE__*/function () {
          var _doWildChange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var arrPro, iRow, symbol;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrPro = [];
                  for (iRow = 0; iRow < this._symbolList.length; iRow++) {
                    symbol = this._symbolList[iRow];
                    if (symbol.itemInfo.Sym == eSymbol.NONE || symbol.itemInfo.Sym == eSymbol.SpecialWild) {
                      arrPro.push(symbol.doWildChange());
                    }
                  }
                  return _context3.abrupt("return", Promise.all(arrPro));
                case 3:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function doWildChange() {
            return _doWildChange.apply(this, arguments);
          }
          return doWildChange;
        }();
        return NightCity_symbol;
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

System.register("chunks:///_virtual/NightCity_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NightCityDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "f0a45fxq3FMmo1m9fMhHaoD", "NightCity_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var NightCity_symbolEffectRoot = exports('default', (_dec = ccclass("NightCitySymbolEffectRoot"), _dec2 = menu("NightCityGame/NightCity_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NightCity_symbolEffectRoot, _Component);
        function NightCity_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = NightCity_symbolEffectRoot.prototype;
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
        return NightCity_symbolEffectRoot;
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

System.register("chunks:///_virtual/NightCity_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NightCityDef.ts', './NightCity_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, SpriteFrame, tween, UIOpacity, v3, UITransform, instantiate, Sprite, Component, eSymbol, NightCity_symbolItem;
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
      NightCity_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "e80aaparutF8oLR/o5xc2aK", "NightCity_symbolInfo", undefined);
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
      var NightCity_symbolInfo = exports('default', (_dec = ccclass("NightCitySymbolInfo"), _dec2 = menu("NightCityGame/NightCity_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NightCity_symbolInfo, _Component);
        function NightCity_symbolInfo() {
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
        var _proto = NightCity_symbolInfo.prototype;
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
          this.Node_item.getComponent(NightCity_symbolItem).initItem(symbol);
          switch (symbol.Sym) {
            case eSymbol.SCATTER:
              {
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[this.arrBgSpFrame.length - 1];
                this.Node_item.getComponent(NightCity_symbolItem).Node_symbol.destroyFromParent();

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
                this.Node_item.setSiblingIndex(1);
                this.Node_icon.setSiblingIndex(0);
                this.Node_icon.active = false;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = true;
                break;
              }
            default:
              {
                gts.Debug.LogWarr("==symbol.Sym==" + symbol.Sym);
                this.Node_icon.setSiblingIndex(1);
                this.Node_item.setSiblingIndex(0);
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
        return NightCity_symbolInfo;
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

System.register("chunks:///_virtual/NightCity_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NightCityModel.ts', './NightCityDef.ts', './EventManager.ts', './NightCityUtils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, v3, sp, Sprite, isValid, tween, UIOpacity, Node, UITransform, Component, instantiate, NightCityModel, eSymbol, eRunStatus, eZindex, eSound, eEvent, eConstDef, EventManager, NightCityUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      sp = module.sp;
      Sprite = module.Sprite;
      isValid = module.isValid;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Node = module.Node;
      UITransform = module.UITransform;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      NightCityModel = module.NightCityModel;
    }, function (module) {
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
      eSound = module.eSound;
      eEvent = module.eEvent;
      eConstDef = module.eConstDef;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NightCityUtils = module.NightCityUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;
      cclegacy._RF.push({}, "3854bW3GBpEoYX8AQLnmb0e", "NightCity_symbolItem", undefined);
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
      var NightCity_symbolItem = exports('default', (_dec = ccclass("NightCitySymbolItem"), _dec2 = menu("NightCityGame/NightCity_symbolItem"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NightCity_symbolItem, _Component);
        function NightCity_symbolItem() {
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
        var _proto = NightCity_symbolItem.prototype;
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
          this.Node_symbol.scale = v3(1.2, 1.2, 1);
          this.itemInfo = info;
          this.updateSymbol(this.itemInfo.IsReward);
        };
        _proto.updateIcon = function updateIcon(Sym, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          var aniList = NightCityUtils.instance.getSymbolAniName(Sym, isIdle);
          switch (Sym) {
            case eSymbol.NONE:
              {
                if (isIdle) {
                  itemSpine.setAnimation(0, aniList[0], true);
                } else {
                  itemSpine.addAnimation(0, "scatter_add_special", false);
                  itemSpine.addAnimation(0, this.itemInfo.IsReward ? "scatter_win" : "scatter_idle", true);
                  this.itemInfo.Sym = eSymbol.SpecialWild;
                }
                break;
              }
            case eSymbol.SCATTER:
              {
                if (isIdle) {
                  itemSpine.setAnimation(0, aniList[0], false);
                } else {
                  itemSpine.setAnimation(0, aniList[0], false);
                  itemSpine.addAnimation(0, aniList[1], true);
                }
                break;
              }
            case eSymbol.SpecialWild:
              {
                if (isIdle) {
                  itemSpine.addAnimation(0, "scatter_idle", true);
                } else {
                  itemSpine.addAnimation(0, "scatter_add_normal", true);
                }
                break;
              }
            default:
              {
                itemSpine.setAnimation(0, aniList[0], true);
                break;
              }
          }
        };
        _proto.updateBox = function updateBox(Sym, length, rim) {
          if (length === void 0) {
            length = 1;
          }
          if (rim === void 0) {
            rim = 0;
          }
          //        //box
          var fBg = this.node.getComponent(Sprite);
          fBg.spriteFrame = NightCityUtils.instance.getItemSymbolIconBox(Sym, length, rim);
        };
        _proto.updateFrame = function updateFrame(rim, length) {
          if (rim === void 0) {
            rim = 0;
          }
          if (length === void 0) {
            length = 1;
          }
          //        //frame
          if (rim == 0) {
            var Sprite_frame = this.node.getChildByName("Sprite_frame");
            if (!isValid(Sprite_frame, true)) {
              return;
            }
            tween(Sprite_frame.getComponent(UIOpacity)).to(0.1, {
              opacity: 0
            }).call(function () {
              Sprite_frame.removeFromParent();
              Sprite_frame.destroy();
            }).start();
          } else {
            var _Sprite_frame = this.node.getChildByName("Sprite_frame");
            if (!_Sprite_frame) {
              _Sprite_frame = new Node("Sprite_frame");
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
            _Sprite_frame.getComponent(Sprite).spriteFrame = NightCityUtils.instance.getItemSymbolIconFrame(rim, length);
          }
        };
        _proto.updateSymbol = function updateSymbol(isSpine, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          //        // this.updateBox(this.itemInfo.Sym);

          //        // this.updateFrame();

          this.updateIcon(this.itemInfo.Sym, isIdle);
          this.updateZIndex(isIdle ? eRunStatus.RUNNING : eRunStatus.CLEAR);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          var _zIndex = 0;
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
              {
                _zIndex = eZindex.icon_scatter;
                this.Node_symbol.setSiblingIndex(eZindex.icon_scatter);
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
                this.node.setSiblingIndex(_zIndex);
                break;
              }
            case eRunStatus.STOP:
              {
                this.node.setSiblingIndex(eZindex.icon);
                //                // this.doBindToUp();

                switch (this.itemInfo.Sym) {
                  case eSymbol.SCATTER:
                    {
                      NightCityUtils.instance.playOneShot("sound/ScatterShow_" + this._iCol);
                      break;
                    }
                  case eSymbol.WILD:
                    {
                      NightCityUtils.instance.playOneShot(eSound.wild_show);
                      break;
                    }
                }
                break;
              }
            case eRunStatus.CLEAR:
              {
                this.node.setSiblingIndex(eZindex.iconWin);
                break;
              }
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (NightCityModel.instance.gameStatus != eRunStatus.NONE) {
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
          var _this2 = this;
          if (offset === void 0) {
            offset = 0;
          }
          this.itemStatus = eItemStatus.STOP;
          return new Promise(function (resolve, reject) {
            var pos_0 = _this2.node.position.y + 10 + offset;
            var pos_1 = _this2.node.position.y + offset;
            tween(_this2.node).to(0.15, {
              position: v3(_this2.node.position.x, pos_0, 0)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(_this2.node.position.x, pos_1, 0)
            }, {
              easing: "cubicIn"
            }).call(function () {
              if (_this2.itemInfo.Sym != eSymbol.NONE) {
                _this2.updateIcon(_this2.itemInfo.Sym);
              }
              _this2.updateZIndex(eRunStatus.STOP);
              resolve();
            }).start();
          });
        };
        _proto.doWildChange = function doWildChange() {
          var _this3 = this;
          this.itemStatus = eItemStatus.doChange;
          return new Promise(function (resolve, reject) {
            switch (_this3.itemInfo.Sym) {
              case eSymbol.NONE:
                {
                  tween(_this3.Node_symbol.getComponent(UIOpacity)).to(0.25, {
                    opacity: 0
                  }).start();
                  tween(_this3.Node_symbol).to(0.25, {
                    scale: v3(0.25, 0.25, 0.25)
                  }).call(function () {
                    _this3.itemInfo.Sym = eSymbol.SpecialWild;
                    var itemSpine = _this3.Node_symbol.getComponent(sp.Skeleton);
                    itemSpine.setAnimation(0, "scatter_add_normal", true);
                  }).delay(0.25).call(function () {
                    _this3.Node_symbol.scale = v3(1.2, 1.2, 1);
                    _this3.Node_symbol.getComponent(UIOpacity).opacity = 255;
                    resolve();
                  }).start();
                  break;
                }
              case eSymbol.SpecialWild:
                {
                  var addSWild = function addSWild(toPos) {
                    if (toPos.y > 200 || toPos.y < -200 || toPos.x > 400 || toPos.x < -400) {
                      return;
                    }
                    var newSymbol = instantiate(_this3.Node_symbol);
                    newSymbol.position = _this3.node.position;
                    _this3.node.parent.addChild(newSymbol);
                    var itemSpineNew = newSymbol.getComponent(sp.Skeleton);
                    itemSpineNew.timeScale = 1;
                    itemSpineNew.setAnimation(0, "scatter_add_normal", false);
                    itemSpineNew.setCompleteListener(function () {
                      itemSpineNew.setCompleteListener(null);
                      newSymbol.removeFromParent();
                      newSymbol.destroy();
                    });
                    tween(newSymbol).to(0.25, {
                      position: v3(toPos.x, toPos.y, 0)
                    }).start();
                  };
                  _this3.scheduleOnce(function () {
                    var checkAdd = function checkAdd(iCol, iRow) {
                      if (iCol < 0 || iCol > 5 || iRow < 0 || iRow > 2) {
                        return false;
                      }
                      var posMsg = NightCityUtils.instance.resultList[iCol][iRow];
                      return posMsg && posMsg.Sym != eSymbol.SCATTER && posMsg.Sym != eSymbol.WILD && posMsg.Sym != eSymbol.SpecialWild;
                    };
                    checkAdd(_this3._iCol - 1, _this3.itemInfo.iRow) ? addSWild(v3(_this3.node.position.x - eConstDef.cSymbolW, _this3.node.position.y, 0)) : null;
                    checkAdd(_this3._iCol + 1, _this3.itemInfo.iRow) ? addSWild(v3(_this3.node.position.x + eConstDef.cSymbolW, _this3.node.position.y, 0)) : null;
                    checkAdd(_this3._iCol, _this3.itemInfo.iRow + 1) ? addSWild(v3(_this3.node.position.x, _this3.node.position.y + eConstDef.cSymbolH, 0)) : null;
                    checkAdd(_this3._iCol, _this3.itemInfo.iRow - 1) ? addSWild(v3(_this3.node.position.x, _this3.node.position.y - eConstDef.cSymbolH, 0)) : null;
                  }, 0.25);
                  var itemSpine = _this3.Node_symbol.getComponent(sp.Skeleton);
                  itemSpine.setAnimation(0, "scatter_add_special", false);
                  itemSpine.timeScale = 0.8;
                  itemSpine.setCompleteListener(function () {
                    itemSpine.setCompleteListener(null);
                    itemSpine.timeScale = 1;
                    itemSpine.setAnimation(0, "scatter_win", true);
                  });
                  _this3.scheduleOnce(resolve, 1.25);
                  break;
                }
            }
          });
        };
        _proto.doEffect = function doEffect(delay) {
          var _this4 = this;
          this.itemStatus = eItemStatus.doEffect;
          return new Promise(function (resolve, reject) {
            if (_this4.itemInfo.IsReward) {
              _this4.scheduleOnce(function () {
                _this4.updateSymbol(true, false);
                //                    // this.addEffectKuang().then(resolve);

                resolve();
              }, delay);
            } else {
              resolve();
            }
          });
        };
        _proto.doScatterBlink = function doScatterBlink() {
          this.itemStatus = eItemStatus.Blink;
          if (this.itemInfo.Sym == eSymbol.NONE) {
            this.updateIcon(this.itemInfo.Sym, false);
          }
          this.updateZIndex(eRunStatus.CLEAR);
        };
        _proto.stopScatterBlink = function stopScatterBlink() {
          this.itemStatus = eItemStatus.STOP;
          this.updateIcon(this.itemInfo.Sym);
        };
        _proto.doBindToUp = function doBindToUp() {};
        return NightCity_symbolItem;
      }(Component), _class2.scatterNums = 0, _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NightCity_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NightCityUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, NightCityUtils;
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
      NightCityUtils = module.NightCityUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "13d24R/fWpND7bxnvo4SPbT", "NightCity_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var NightCity_winTip = exports('default', (_dec = ccclass("NightCityWinTip"), _dec2 = menu("NightCityGame/NightCity_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NightCity_winTip, _Component);
        function NightCity_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = NightCity_winTip.prototype;
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
            _this2.Label_win.string = NightCityUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            NightCityUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${NightCityUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            NightCityUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return NightCity_winTip;
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

System.register("chunks:///_virtual/NightCityCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './NightCityModel.ts', './I18n.ts', './ViewManager.ts', './NightCityDef.ts', './NightCityUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, NightCityModel, i18n, ViewManager, eProto, eEvent, eRunStatus, NightCityUtils, Common;
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
      NightCityModel = module.NightCityModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      NightCityUtils = module.NightCityUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "aafa1BlnndBqqAl1ZS4G1Xz", "NightCityCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NightCityCtrl = exports('NightCityCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(NightCityCtrl, _GameDef$BaseCtrl);
        function NightCityCtrl() {
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
          _this._model = NightCityModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = NightCityCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete NightCityCtrl._instance;
          NightCityCtrl._instance = null;
          NightCityModel.destroy();
          NightCityUtils.destroy();
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
          if (!NightCityModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          NightCityModel.instance.curTotalBet = NightCityModel.instance.curBet * 1000;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + NightCityModel.instance.curBet * 1000
          });
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotNightCity"
          });
        }

        // /**
        //  *搏一搏
        //  * @param type string "count" && "times"
        //  */
        // reqBoYiBo(type: string) {
        //     NightCityModel.instance.boType = type;
        //     NetManager.instance.sendOnlineData(NightCityDef.eProto.HD_BoYiBo, { betAmount: NightCityModel.instance.curBet * 1000, boType: type });
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
            RecordType: "slotNightCity"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(NightCityDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {});
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotNightCity"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotNightCity",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotNightCity"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotNightCity",
            content: strContent,
            msgId: msgid
          });
        }
        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // if (data.cmd == NightCityDef.eProto.HD_Bet) {
          //     data.Data = NightCityUtils.instance.getTestResult();
          // }

          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code));
            }
            // if (data.cmd == NightCityDef.eProto.HD_Enter || (data.Code == 402 && NightCityModel.instance.gameState.GameNo != NightCityModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(NightCityDef.eEvent.onLoadHall);
            //     return;
            // }

            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
              if (NightCityModel.instance.isAuto) {
                NightCityModel.instance.isAuto = false;
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

                // if (NightCityModel.instance.gameStatus != NightCityDef.eRunStatus.NONE) {
                //     return;
                // }
                NightCityModel.instance.clearGameData();
                NightCityModel.instance.gameInfo = data.Data;

                // for (const InitPosMsg of NightCityModel.instance.gameInfo.InitPosMsg) {
                //     for (const info of InitPosMsg) {
                //         info.IsReward = false;
                //     }
                // }
                NightCityModel.instance.totalFreeTimes = NightCityModel.instance.gameInfo.surplusFreeCount;
                if (NightCityModel.instance.totalFreeTimes > 0) {
                  NightCityModel.instance.totalFreeWin = NightCityModel.instance.gameInfo.totalFreePrizeAmount;
                  NightCityModel.instance.totalFreeTimesBack = NightCityModel.instance.gameInfo.totalFreePrizeCount;
                }
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                NightCityModel.instance.betResult = data.Data;
                this.isReqBet = false;
                var doFreeTest = false;
                if (!doFreeTest) {
                  NightCityModel.instance.totalFreeTimes = NightCityModel.instance.betResult.surplusFreeCount;
                } else {
                  // freeTest;
                  if (NightCityModel.instance.totalFreeTimes > 0) {
                    NightCityModel.instance.totalFreeTimes--;
                  } else {
                    NightCityModel.instance.totalFreeTimes = 10; //Math.random() > 0.25 ? Math.floor(Math.random() * 7 + 3) : 0;
                  }
                }

                gts.Debug.LogWarr("==NightCityModel.instance.totalFreeTimes==" + NightCityModel.instance.totalFreeTimes);
                if (NightCityModel.instance.freeStatus == eRunStatus.NONE) {
                  NightCityModel.instance.curBalance -= NightCityModel.instance.curTotalBet;
                }
                break;
              }
            // case NightCityDef.eProto.HD_BoYiBo:
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
                gts.Debug.LogWarr("==NightCity=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (NightCityModel.instance.curBalance > 0) {
                  NightCityModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                NightCityModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==NightCity=pushWallet==" + _HD_Wallet.VndBalance);
                if (NightCityModel.instance.curBalance > 0) {
                  NightCityModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                NightCityModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        return NightCityCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NightCityDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b3ddd/b6x5JzoaZf3CVZjju", "NightCityDef", undefined);
      var cBundle = exports('cBundle', "NightCityGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotNightCity/HD_info";
        eProto["HD_Bet"] = "slotNightCity/HD_Bet";
        eProto["HD_Leave"] = "slotNightCity/HD_Leave";
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
        cSymbolW: 192,
        cSymbolH: 180,
        cSymbolStartX: -192,
        cSymbolStartY: -270,
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
        SCATTER: 1,
        WILD: 2,
        SpecialWild: 3,
        Baby: 4,
        Saxophone: 5,
        Microphone: 6,
        Bottle: 7,
        A: 8,
        K: 9,
        Q: 10,
        J: 11
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
        bgNomal: "sound/BGM_MG",
        bgFree: "sound/BGM_FG",
        startRun: "sound/Reel_run",
        drop_1: "sound/drop_1",
        wild_show: "sound/wild_show",
        win: "sound/win",
        smallWin: "sound/smallWin",
        ScatterBlink: "sound/ScatterBlink",
        wildChange: "sound/wildChange",
        freeEnter: "sound/freeEnter",
        free_End: "sound/free_End",
        Rate_Add: "sound/Rate_Add",
        rateChange: "sound/rateChange"
      }); //////////////////////////

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NightCityGame", ['./NightCityCtrl.ts', './NightCityDef.ts', './NightCityModel.ts', './NightCityScene.ts', './NightCityUtils.ts', './NightCityGameView.ts', './NightCity_btnEffect.ts', './NightCity_setBase.ts', './NightCity_symbol.ts', './NightCity_symbolEffectRoot.ts', './NightCity_symbolInfo.ts', './NightCity_symbolItem.ts', './NightCity_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/NightCityGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './NightCityDef.ts', './NightCityModel.ts', './NightCityCtrl.ts', './ViewManager.ts', './NightCityUtils.ts', './GUtil.ts', './NightCity_symbol.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Label, tween, v3, instantiate, UIOpacity, Tween, gfx, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, eZindex, eConstDef, eSound, eProto, eSymbol, NightCityModel, NightCityCtrl, ViewManager, NightCityUtils, GUtil, NightCity_symbol, Common, AudioManager;
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
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      gfx = module.gfx;
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
      eConstDef = module.eConstDef;
      eSound = module.eSound;
      eProto = module.eProto;
      eSymbol = module.eSymbol;
    }, function (module) {
      NightCityModel = module.NightCityModel;
    }, function (module) {
      NightCityCtrl = module.NightCityCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      NightCityUtils = module.NightCityUtils;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      NightCity_symbol = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29;
      cclegacy._RF.push({}, "98d45a7C3ZAlo6CaFot3NVG", "NightCityGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var NightCityGameView = exports('default', (_dec = ccclass("NightCityGameView"), _dec2 = menu("NightCityGame/NightCityGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(NightCity_symbol), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(sp.Skeleton), _dec12 = property(sp.Skeleton), _dec13 = property(sp.Skeleton), _dec14 = property(sp.Skeleton), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Button), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Label), _dec24 = property(Label), _dec25 = property(Label), _dec26 = property(Label), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Button), _dec31 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(NightCityGameView, _GameDef$BaseView);
        function NightCityGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_mask_1_6", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "NightCity_symbolList", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor8, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // Skeleton_run: sp.Skeleton = null;
          _initializerDefineProperty(_this, "Skeleton_frameLight", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_setBase", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_Node_bg", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_free_time", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_fire", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_free_light", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_logo", _descriptor15, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // Node_tipEffect: sp.Skeleton = null;
          _initializerDefineProperty(_this, "Button_setBase", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWinFreeEnd", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeBaseOdds", _descriptor21, _assertThisInitialized(_this));
          //    // @property(Label)
          //    // Label_freeTimesFreeEnd: Label = null;
          _initializerDefineProperty(_this, "Label_freeSpine", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeRate", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWinBig", _descriptor24, _assertThisInitialized(_this));
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_smallWin", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_auto", _descriptor29, _assertThisInitialized(_this));
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          _this.isStopBigWin = false;
          _this.freeRate = 1;
          return _this;
        }
        var _proto = NightCityGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, NightCityCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            if (NightCityModel.instance.gameStatus == eRunStatus.NONE && !NightCityModel.instance.isAuto && NightCityModel.instance.freeStatus == eRunStatus.NONE && !NightCityCtrl.instance.isReqBet && NightCityModel.instance.totalFreeTimes == 0) {
              NightCityCtrl.instance.reqBet();
            }
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSymbolClick);
          EventManager.instance.off(eEvent.onSetAuto);
          EventManager.instance.off(eEvent.onAutoClose);
          NightCityModel.instance.clearGameData();
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
              //                // NightCityCtrl.instance.reEnterRoom();

              if (NightCityModel.instance.isAuto && NightCityCtrl.instance.isReqBet) {
                NightCityCtrl.instance.reqBet();
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
            _this2.Label_bet.string = NightCityUtils.instance.numberFormat(NightCityModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this3 = this;
          //        // let _curIndex_baseScore = sys.localStorage.getItem(`${NightCityDef.eAutoRateType.baseScore}_curIndex`);
          //        // _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          //        // let _curIndex_baseRate = sys.localStorage.getItem(`${NightCityDef.eAutoRateType.baseRate}_curIndex`);
          //        // _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          //        // let _curIndex_baseBet = sys.localStorage.getItem(`${NightCityDef.eAutoRateType.baseBet}_curIndex`);
          //        // _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;

          NightCityModel.instance.curBet = 0.5; //(_curIndex_baseScore == 0 ? 0.1 : _curIndex_baseScore * 0.5) * (_curIndex_baseRate + 1) * 20;

          //        // NightCityModel.instance._curIndex_baseScore = _curIndex_baseScore;
          //        // NightCityModel.instance._curIndex_baseRate = _curIndex_baseRate;
          //        // NightCityModel.instance._curIndex_baseBet = _curIndex_baseBet;

          NightCityUtils.instance.loadRes_icon(function () {
            //            //test
            //            // for (let i = 0; i < this.NightCity_symbolList.length; i++) {
            //            //     this.NightCity_symbolList[i].init();
            //            // }

            NightCityCtrl.instance.reqEnterRoom();

            //            // this.Node_mask_0.zIndex = NightCityDef.eZindex.MASK;
            _this3.Node_mask_1_6.setSiblingIndex(eZindex.MASK);
          });
          this.Label_bet.string = NightCityUtils.instance.numberFormat(NightCityModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
        }
        //    // onToggleClick(event) {
        //    //     switch (event.node.name) {
        //    //         case "Button_fast": {
        //    //             //快速停止
        //    //             NightCityModel.instance.isQuickStop = !NightCityModel.instance.isQuickStop;
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
                NightCityModel.instance.isQuickStop = !NightCityModel.instance.isQuickStop;
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
                NightCityCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                //                // Common.loadPopBuddle(
                //                //     "prefab/Node_history",
                //                //     NightCityUtils.instance.bundle,
                //                //     () => {},
                //                //     (help) => {
                //                //         let Node_history = instantiate(help);

                //                //         ViewManager.instance.popNodeView(Node_history, true);
                //                //     },
                //                //     true
                //                // );

                GUtil.openRecord("slotNightCity");
                break;
              }
            case "Button_rank":
              {
                //                // Common.loadPopBuddle(
                //                //     "prefab/Node_rank",
                //                //     NightCityUtils.instance.bundle,
                //                //     () => {},
                //                //     (help) => {
                //                //         let Node_rank = instantiate(help);

                //                //         ViewManager.instance.popNodeView(Node_rank, true);
                //                //     },
                //                //     true
                //                // );
                GUtil.openRank("slotNightCity");
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", NightCityUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_auto":
              {
                if (NightCityModel.instance.freeStatus != eRunStatus.NONE) {
                  break;
                }
                NightCityModel.instance.isAuto = !NightCityModel.instance.isAuto;
                this.Button_run.interactable = !NightCityModel.instance.isAuto;
                this.Skeleton_auto.setAnimation(0, NightCityModel.instance.isAuto ? "on" : "idle", true);
                if (NightCityModel.instance.gameStatus == eRunStatus.NONE && NightCityModel.instance.isAuto) {
                  NightCityCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_run":
              {
                //                // this.doStartRun();
                if (NightCityCtrl.instance.isReqBet || NightCityModel.instance.freeStatus != eRunStatus.NONE) {
                  break;
                }
                this.Button_run.interactable = false;
                if (NightCityModel.instance.gameStatus == eRunStatus.NONE) {
                  //                    // event.target.getComponent(Button).interactable = false;
                  //                    // NightCityUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), true);

                  tween(event.target).delay(2).call(function () {
                    if (!NightCityModel.instance.isAuto && NightCityModel.instance.gameStatus == eRunStatus.NONE) {
                      _this4.Button_run.interactable = true;
                    }
                  }).start();
                  NightCityCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (NightCityModel.instance.gameStatus != eRunStatus.NONE || NightCityModel.instance.isAuto || NightCityModel.instance.freeStatus != eRunStatus.NONE) {
                  return;
                }
                this.Skeleton_setBase.setAnimation(0, "intro", false);
                Common.loadPopBuddle("prefab/Node_setBase", NightCityUtils.instance.bundle, function () {}, function (help) {
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
            this.Node_mask_1_6.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask_1_6.getComponent(UIOpacity)).to(0.4, {
              opacity: 240
            }).start();
          }
        };
        _proto.doStartRun = function doStartRun() {
          var _this6 = this;
          if (NightCityModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          gts.Debug.Log("======doStartRun=======");
          NightCityUtils.instance.getResult();
          this.showMask(false);
          if (NightCityModel.instance.freeStatus != eRunStatus.NONE) {
            this.Node_free_time.setAnimation(0, "spin", true);
            this.Skeleton_Node_bg.setAnimation(0, "free_bg_idle", true);
            this.Skeleton_frameLight.setAnimation(0, "freespin", true);
          } else {
            this.Skeleton_Node_bg.setAnimation(0, "normal_bg_idle", true);
            this.Skeleton_frameLight.setAnimation(0, "spin", true);
            NightCityModel.instance.curTotalWin = 0;
            Tween.stopAllByTarget(this.Label_win.node);
            this.Node_smallWin.active = false;
            this.Label_win.string = "0.00";
          }
          this.Node_fire.active = false;
          this.Button_run.interactable = false;
          this.Button_setBase.interactable = false;
          // NightCityUtils.instance.setBtnBetGray(this.Button_setBase.node.getChildByName("Background"), true);
          this.Skeleton_setBase.setAnimation(0, "disable", true);

          //        // EventManager.instance.emit(NightCityDef.eEvent.updateWin, 0);

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
                  for (i = 0; i < _this6.NightCity_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = NightCityModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = NightCityModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    arrPro.push(_this6.NightCity_symbolList[i].doStart(startDelay, stopDelay));
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
          NightCityModel.instance.gameStatus = eRunStatus.RUNNING;

          //        // this.Skeleton_run.setAnimation(0, "quay", false);
          //        // this.Skeleton_run.addAnimation(0, "idle", true);

          //        // NightCityUtils.instance.playSound(NightCityDef.eSound.startRun);

          if (NightCityModel.instance.freeStatus == eRunStatus.RUNNING) {
            this.Label_freeSpine.string = "" + NightCityModel.instance.totalFreeTimes;

            //            // this.Label_freeRate["srcBlendFactor"] = macro.BlendFactor.SRC_ALPHA;

            if (parseInt(this.Label_freeRate.string.replace("x", "")) != this.freeRate) {
              NightCityUtils.instance.playOneShot(eSound.Rate_Add);
              tween(this.Label_freeRate.node).call(function () {
                _this6.Label_freeRate["dstBlendFactor"] = gfx.BlendFactor.ONE;
              }).to(0.25, {
                scale: v3(1.5, 1.5, 1.5)
              }).to(0.2, {
                scale: v3(1.0, 1.0, 1.0)
              }).call(function () {
                _this6.Label_freeRate.getComponent(Label).string = "x" + _this6.freeRate;
                _this6.Label_freeRate["dstBlendFactor"] = gfx.BlendFactor.ONE_MINUS_SRC_ALPHA;
              }).start();
            }
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this7 = this;
            var result, isChange, _iterator2, _step2, openNums, arrPro, i, totalWin, _arrPro, _i, delayStart, _arrPro2, _i2;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  NightCityModel.instance.gameStatus = eRunStatus.CLEAR;
                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this7.Node_colEffect.active = false;
                    }).start();
                  }
                  result = NightCityModel.instance.betResult;
                case 4:
                  isChange = false;
                  _iterator2 = _createForOfIteratorHelperLoose(result.openNums);
                case 6:
                  if ((_step2 = _iterator2()).done) {
                    _context2.next = 13;
                    break;
                  }
                  openNums = _step2.value;
                  if (!(openNums == eSymbol.SpecialWild)) {
                    _context2.next = 11;
                    break;
                  }
                  isChange = true;
                  return _context2.abrupt("break", 13);
                case 11:
                  _context2.next = 6;
                  break;
                case 13:
                  if (!isChange) {
                    _context2.next = 19;
                    break;
                  }
                  NightCityUtils.instance.playOneShot(eSound.wildChange);
                  arrPro = [];
                  for (i = 0; i < this.NightCity_symbolList.length; i++) {
                    arrPro.push(this.NightCity_symbolList[i].doWildChange());
                  }
                  _context2.next = 19;
                  return Promise.all(arrPro);
                case 19:
                case 20:
                  totalWin = 0;
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 33;
                    break;
                  }
                  this.Skeleton_frameLight.setAnimation(0, "win", true);
                  NightCityUtils.instance.playOneShot(eSound.win);
                  this.scheduleOnce(this.showMask, 0.25);
                  //            //doEffect
                  _arrPro = [];
                  for (_i = 0; _i < this.NightCity_symbolList.length; _i++) {
                    _arrPro.push(this.NightCity_symbolList[_i].doEffect());
                  }
                  _context2.next = 29;
                  return Promise.all(_arrPro);
                case 29:
                  if (NightCityModel.instance.freeStatus != eRunStatus.NONE) {
                    this.Skeleton_Node_bg.setAnimation(0, "free_bg_win", false);
                    this.Skeleton_Node_bg.addAnimation(0, "free_bg_idle", true);
                    this.Node_free_time.setAnimation(0, "levelup", false);
                    this.Node_free_time.addAnimation(0, "win", true);

                    //                // this.Label_freeRate["srcBlendFactor"] = macro.BlendFactor.SRC_ALPHA;
                    //                // this.Label_freeRate["dstBlendFactor"] = macro.BlendFactor.ONE;

                    NightCityModel.instance.totalFreeWin += result.prizeAmount;
                    totalWin = NightCityModel.instance.totalFreeWin;
                  } else {
                    //                // NightCityModel.instance.curTotalWin += result.prizeAmount;
                    totalWin = result.prizeAmount;
                  }
                  this.Node_fire.active = true;
                  _context2.next = 35;
                  break;
                case 33:
                  if (this.Node_free_time.node.active) {
                    this.Node_free_time.setAnimation(0, "idle", true);
                  }
                  this.Skeleton_frameLight.setAnimation(0, "idle", true);
                case 35:
                  delayStart = 0.25;
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 42;
                    break;
                  }
                  delayStart = 1.5;

                  //            //大奖
                  _context2.next = 40;
                  return this.doShowBigWin(result.prizeAmount);
                case 40:
                  //            //gengxin
                  NightCityUtils.instance.updateLabelAddNf(this.Label_win, totalWin, false, totalWin - result.prizeAmount);
                  if (NightCityModel.instance.endBalance > 0) {
                    NightCityModel.instance.curBalance = NightCityModel.instance.endBalance;
                    NightCityModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                case 42:
                  if (!(NightCityModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context2.next = 49;
                    break;
                  }
                  //            ////freeRate++
                  this.freeRate = NightCityModel.instance.betResult.freeOdds;
                  NightCityModel.instance.gameStatus = eRunStatus.NONE;
                  this.Node_bigWin.active = false;
                  if (NightCityModel.instance.totalFreeTimes > 0) {
                    this.scheduleOnce(function () {
                      NightCityCtrl.instance.reqBet();
                    }, delayStart);
                  } else {
                    NightCityModel.instance.freeStatus = eRunStatus.END;
                    this.doEndFree();
                  }
                  _context2.next = 67;
                  break;
                case 49:
                  if (!(NightCityModel.instance.totalFreeTimes > 0)) {
                    _context2.next = 66;
                    break;
                  }
                  if (!result.prizeAmount) {
                    _context2.next = 53;
                    break;
                  }
                  _context2.next = 53;
                  return this.doAwait(2.0);
                case 53:
                  this.setSymOpcity(25);
                  this.Node_free_light.active = true;
                  NightCityUtils.instance.playSound(eSound.ScatterBlink);
                  _arrPro2 = [];
                  for (_i2 = 0; _i2 < this.NightCity_symbolList.length; _i2++) {
                    _arrPro2.push(this.NightCity_symbolList[_i2].doScatterBlink());
                  }
                  _context2.next = 60;
                  return Promise.all(_arrPro2);
                case 60:
                  _context2.next = 62;
                  return this.doAwait(3.0);
                case 62:
                  NightCityModel.instance.gameStatus = eRunStatus.NONE;
                  this.scheduleOnce(function () {
                    _this7.showFree();
                  }, 0.0);
                  _context2.next = 67;
                  break;
                case 66:
                  if (NightCityModel.instance.isAuto) {
                    NightCityModel.instance.gameStatus = eRunStatus.NONE;
                    this.Button_setBase.interactable = true;
                    // NightCityUtils.instance.setBtnBetGray(this.Button_setBase.node.getChildByName("Background"), false);
                    this.Skeleton_setBase.setAnimation(0, "off", true);
                    this.scheduleOnce(function () {
                      NightCityCtrl.instance.reqBet();
                    }, delayStart);
                  } else {
                    NightCityModel.instance.gameStatus = eRunStatus.NONE;
                    this.Button_run.interactable = true;
                    this.Button_setBase.interactable = true;
                    // NightCityUtils.instance.setBtnBetGray(this.Button_setBase.node.getChildByName("Background"), false);
                    this.Skeleton_setBase.setAnimation(0, "off", true);
                  }
                case 67:
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
        _proto.setSymOpcity = function setSymOpcity(opacity) {
          if (opacity === void 0) {
            opacity = 255;
          }
          for (var i = 0; i < this.NightCity_symbolList.length; i++) {
            this.NightCity_symbolList[i].setSymOpacity(opacity);
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
          if (delay === void 0) {
            delay = 0.25;
          }
          return new Promise(function (resolve, reject) {
            var rate = destWin / (NightCityModel.instance.curBet * 1000);
            if (rate <= 2) {
              resolve();
              return;
            }
            if (rate < 20) {
              NightCityUtils.instance.playOneShot(eSound.smallWin);
              _this9.Node_smallWin.active = true;
              _this9.Node_smallWin.getComponent(sp.Skeleton).setAnimation(0, "win", false);
              _this9.Node_smallWin.getComponent(sp.Skeleton).setCompleteListener(function () {
                _this9.Node_smallWin.getComponent(sp.Skeleton).setCompleteListener(null);
                _this9.Node_smallWin.active = false;
              });
              resolve();
              return;
            }
            _this9.scheduleOnce(function () {
              //                //大奖显示
              _this9.Node_bigWin.active = true;
              var Node_bigWinEffect = _this9.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
              var level = rate < 30 ? 0 : rate < 50 ? 1 : 2;
              var ani = ["bigwin", "megawin", "superwin"];
              var aniTrack = Node_bigWinEffect.setAnimation(0, ani[level], false);
              var bigWinSound = ["sound/bigWin", "sound/megaWin", "sound/superWin"];
              NightCityUtils.instance.playSound(bigWinSound[level]);
              var totalTime = aniTrack.animation.duration - 2;
              var dt = 0.05;
              var updateTimes = totalTime / dt;

              //                // if (NightCityModel.instance.freeStatus != NightCityDef.eRunStatus.NONE) {
              //                //     this.scheduleOnce(() => {
              //                //         resolve();
              //                //     }, totalTime);
              //                // }

              Tween.stopAllByTarget(_this9.Node_bigWin);
              tween(_this9.Node_bigWin).to(0.1, {
                scale: v3(1.2, 1.2, 1.2)
              }, {
                easing: "quadOut"
              }).to(0.05, {
                scale: v3(1.0, 1.0, 1.0)
              }, {
                easing: "quadIn"
              }).call(function () {
                //                        // NightCityUtils.instance.playSound(NightCityDef.eSound.bigWin);

                _this9.Label_totalWinBig.string = "";
                _this9.Label_totalWinBig.node.active = true;
                var disWin = Math.floor(destWin / updateTimes);
                var curTotalWin = 0;
                tween(_this9.Label_totalWinBig.node).repeatForever(tween(_this9.Label_totalWinBig.node).delay(dt).call(function () {
                  var doEnd = function doEnd() {
                    //                                            // NightCityUtils.instance.stopSound(NightCityDef.eSound.bigWin);
                    //                                            // NightCityUtils.instance.playSound(NightCityDef.eSound.bigWinEnd);

                    Tween.stopAllByTarget(_this9.Node_bigWin);
                    Tween.stopAllByTarget(_this9.Label_totalWinBig.node);
                    curTotalWin = destWin;
                    _this9.Label_totalWinBig.string = NightCityUtils.instance.numberFormatDI(curTotalWin / 1000, 2.0, false);
                    _this9.scheduleOnce(function () {
                      _this9.Node_bigWin.active = false;
                      resolve();
                    }, 1.5);
                  };
                  if (curTotalWin < destWin) {
                    curTotalWin += disWin;
                    if (curTotalWin >= destWin) {
                      curTotalWin = destWin;
                      doEnd();
                    } else {
                      _this9.Label_totalWinBig.string = NightCityUtils.instance.numberFormatDI(curTotalWin / 1000, 2.0);
                    }
                  }

                  //                                        // if (this.isStopBigWin) {
                  //                                        //     //点击停止
                  //                                        //     doEnd();
                  //                                        // }
                })).start();
              }).start();
            }, delay);
          });
        };
        _proto.hideFree = function hideFree() {
          var _this10 = this;
          this.unschedule(this.hideFree);

          //        //背景
          //        // this.Skeleton_Node_bg.skeletonData = this.arrBgSpFrame[0];
          this.Skeleton_Node_bg.setAnimation(0, "normal_bg_idle", true);
          this.Node_logo.active = true;
          //        // this.Node_symbolRoot.spriteFrame = this.arrRoomSpFrame[0];

          //        // if (NightCityModel.instance.freeStatus != NightCityDef.eRunStatus.NONE) {
          NightCityModel.instance.freeStatus = eRunStatus.NONE;
          NightCityModel.instance.totalFreeTimes = 0;
          NightCityModel.instance.totalFreeTimesBack = 0;
          gts.Debug.LogWarr("==totalFreeTimesBack==" + NightCityModel.instance.totalFreeTimesBack);
          this.Button_run.interactable = !NightCityModel.instance.isAuto;
          AudioManager.instance.resumeMusic();
          //        // NightCityUtils.instance.stopSound(NightCityDef.eSound.FG_End);

          var Node_end = this.Node_free.getChildByName("Node_end");
          //        // tween(Node_end)
          //        //     .to(0.1, { scale: 1.2 })
          //        //     .to(0.2, { scale: 0.5, opacity: 0 })
          //        //     .call(() => {
          //        //         Node_end.active = false;
          //        //     })
          //        //     .start();

          tween(this.Node_free).delay(0.3).call(function () {
            var enterMask = _this10.Node_free.getChildByName("enterMask");
            enterMask.active = false;
            Node_end.active = false;
            _this10.Node_bigWin.active = false;
            NightCityUtils.instance.playBgMusic();
          }).delay(0.5).call(function () {
            _this10.Node_free.active = false;
            _this10.Button_setBase.interactable = true;
            // NightCityUtils.instance.setBtnBetGray(this.Button_setBase.node.getChildByName("Background"), false);
            _this10.Skeleton_setBase.setAnimation(0, "off", true);
            if (NightCityModel.instance.isAuto) {
              _this10.scheduleOnce(function () {
                NightCityCtrl.instance.reqBet();
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
            if (isEnter) {
              this.freeRate = NightCityModel.instance.gameInfo.freeOdds;
              var inter = Common.numFormatInt(NightCityModel.instance.totalFreeWin / 1000);
              var digit = NightCityUtils.instance.numberFormatD(NightCityModel.instance.totalFreeWin / 1000, 2.0);
              this.Label_win.string = "" + inter + digit + "K";

              //                //免费次数
              this.Label_freeSpine.string = "" + NightCityModel.instance.totalFreeTimes;
              this.Node_free_time.node.active = true;
              this.Node_free_time.setAnimation(0, "idle", true);
              this.Node_logo.active = false;
            } else {
              NightCityModel.instance.curTotalWin = 0;
              NightCityModel.instance.totalFreeWin = 0;
              NightCityModel.instance.totalFreeTimesBack = NightCityModel.instance.totalFreeTimes;
              this.freeRate = NightCityModel.instance.betResult.freeBaseOdds;
              //                //免费次数
              this.Label_freeSpine.string = "" + NightCityModel.instance.totalFreeTimes;
              for (var i = 0; i < this.NightCity_symbolList.length; i++) {
                this.NightCity_symbolList[i].stopScatterBlink();
              }
            }
            this.Label_freeRate.getComponent(Label).string = "x" + this.freeRate;
            this.scheduleOnce(function () {
              NightCityUtils.instance.playBgMusic(eSound.bgFree);
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
          NightCityUtils.instance.playSound(eSound.freeEnter);
          this.Label_freeBaseOdds.string = "+" + NightCityModel.instance.betResult.freeBaseOdds;
          var spEnter = Node_enter.getComponent(sp.Skeleton);
          spEnter.setAnimation(0, "intro_free", false);
          tween(Node_enter.getComponent(UIOpacity)).delay(2.8).to(0.2, {
            opacity: 0
          }).start();
          tween(Node_enter).delay(2.7).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.2, {
            scale: v3(0.5, 0.5, 0.5)
          }).call(function () {
            Node_enter.active = false;
            _this12.Label_win.string = "0.00";
            enterMask.active = false;
            _this12.Node_free_time.node.active = true;
            _this12.Node_free_time.setAnimation(0, "intro", false);
            _this12.Node_free_time.addAnimation(0, "idle", true);
            _this12.Node_logo.active = false;
            _this12.Node_free_light.active = false;
            _this12.setSymOpcity();
            _this12.doEnterFree();
          }).start();
        };
        _proto.doEnterFree = function doEnterFree() {
          if (NightCityModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }
          NightCityModel.instance.freeStatus = eRunStatus.RUNNING;
          this.Button_run.interactable = false;

          //        // NightCityUtils.instance.playSound(NightCityDef.eSound.Rate_Add);

          //        //背景
          this.Skeleton_Node_bg.setAnimation(0, "free_bg_idle", true);
          AudioManager.instance.resumeMusic();
          this.scheduleOnce(function () {
            NightCityCtrl.instance.reqBet();
          }, 2.0);
        };
        _proto.doEndFree = function doEndFree() {
          var _this13 = this;
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.scale = v3(1, 1, 1);
          Node_end.getComponent(UIOpacity).opacity = 255;
          var spEnd = Node_end.getChildByName("Node_character").getComponent(sp.Skeleton);
          spEnd.setAnimation(0, "congratulation", false);
          spEnd.setCompleteListener(function () {
            spEnd.setCompleteListener(null);
          });
          NightCityUtils.instance.playSound(eSound.free_End);
          NightCityUtils.instance.updateLabelAddNf(this.Label_totalWinFreeEnd, NightCityModel.instance.totalFreeWin);
          AudioManager.instance.pauseMusic();
          this.Node_free_time.setAnimation(0, "finish", false);
          this.Node_free_time.setCompleteListener(function () {
            _this13.Node_free_time.setCompleteListener(null);
            _this13.Node_free_time.node.active = false;
          });
          this.scheduleOnce(function () {
            //            //2.0秒后返回正常
            _this13.hideFree();
          }, 3.0);
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(NightCityModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            NightCityUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                if (!NightCityModel.instance.gameInfo.openNums) {
                  NightCityModel.instance.gameInfo.openNums = NightCityUtils.instance.getInitOpenNums();
                }
                var symList = NightCityUtils.instance.getResult(NightCityModel.instance.gameInfo.openNums, NightCityModel.instance.gameInfo.prizeInfo);
                for (var i = 0; i < this.NightCity_symbolList.length; i++) {
                  this.NightCity_symbolList[i].init(symList[i]);
                }

                //                //gengxin
                var inter = Common.numFormatInt(NightCityModel.instance.gameInfo.prizeAmount / 1000);
                var digit = NightCityUtils.instance.numberFormatFloatD(NightCityModel.instance.gameInfo.prizeAmount / 1000, 2.0);
                this.Label_win.string = "" + inter + digit + "K";
                if (NightCityModel.instance.gameInfo.betAmount > 0) {
                  NightCityModel.instance.curBet = NightCityModel.instance.gameInfo.betAmount / 1000;
                } else {
                  NightCityModel.instance.curBet = 0.5;
                }
                this.Label_bet.string = NightCityUtils.instance.numberFormat(NightCityModel.instance.curBet, 2.0) + "K";
                if (NightCityModel.instance.totalFreeTimes > 0) {
                  this.freeRate = NightCityModel.instance.gameInfo.freeOdds;
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
                //                // this.Button_run.interactable = true;
                Tween.stopAllByTarget(this.Button_run.node);
                //                // NightCityUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                this.doStartRun();
                this.updateGold();
                break;
              }
            //            // case NightCityDef.eProto.HD_BoYiBo: {
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
        return NightCityGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_mask_1_6", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_colEffect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "NightCity_symbolList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_action", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_frameLight", [_dec11], {
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
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_free_time", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Node_fire", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_free_light", [_dec16], {
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
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWinFreeEnd", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeBaseOdds", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeSpine", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeRate", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWinBig", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_smallWin", [_dec29], {
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

System.register("chunks:///_virtual/NightCityModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './NightCityDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "f5817so/kJNXrMvSxHrhfAf", "NightCityModel", undefined);
      var NightCityModel = exports('NightCityModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(NightCityModel, _GameDef$BaseSington);
        function NightCityModel() {
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
          return _this;
        }
        var _proto = NightCityModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        _proto.getBaseIndex = function getBaseIndex() {
          for (var index = 0; index < arrBetList.length; index++) {
            if (Math.floor(arrBetList[index] / 1000) == NightCityModel.instance.curBet) {
              return index;
            }
          }
          return 0;
        };
        _createClass(NightCityModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(_betResult) {
            this._betResult = _betResult;
          }
        }]);
        return NightCityModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NightCityScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './NightCityDef.ts', './NightCityUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, NightCityUtils, Common;
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
      NightCityUtils = module.NightCityUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "2d50cVwfzdB04hd1rZ03C5c", "NightCityScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var NightCityScene = exports('default', (_dec = ccclass("NightCityScene"), _dec2 = menu("NightCityGame/NightCityScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NightCityScene, _Component);
        function NightCityScene() {
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
        var _proto = NightCityScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          NightCityUtils.instance.bundle = assetManager.getBundle(cBundle);
          NightCityUtils.instance.preLoad();
          NightCityUtils.instance.playBgMusic();
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
            NightCityUtils.instance.bundle.load("prefab/NightCityGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
        return NightCityScene;
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

System.register("chunks:///_virtual/NightCityUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './NightCityDef.ts', './NightCityModel.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, sp, GameDef, AudioManager, eSymbol, eSound, NightCityModel, Common;
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
      sp = module.sp;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSymbol = module.eSymbol;
      eSound = module.eSound;
    }, function (module) {
      NightCityModel = module.NightCityModel;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "df566N4X8BGiId6bh+iYT6Y", "NightCityUtils", undefined);
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

      var symbol_aniName = ["free", "wild", "scatter", "red", "yellow", "blue", "green", "a", "k", "q", "j"];
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

      var NightCityUtils = exports('NightCityUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(NightCityUtils, _GameDef$BaseSington);
        function NightCityUtils() {
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
        var _proto = NightCityUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/NightCityGameView");
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
                  arrHLoad.push(this.asyncLoadDir("spine/icon", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpineData), _step; !(_step = _iterator()).done;) {
                        var spineData = _step.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/effect/dynamic", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpineData), _step2; !(_step2 = _iterator2()).done;) {
                        var spineData = _step2.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  _context3.next = 5;
                  return Promise.all(arrHLoad);
                case 5:
                  if (cb) {
                    cb();
                  }
                case 6:
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

          //        // NightCityUtils.instance.playSound(NightCityDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // NightCityUtils.instance.stopSound(NightCityDef.eSound.numAdd);
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

          //        // NightCityUtils.instance.playSound(NightCityDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // NightCityUtils.instance.stopSound(NightCityDef.eSound.numAdd);
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

          //        // NightCityUtils.instance.playSound(NightCityDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // NightCityUtils.instance.stopSound(NightCityDef.eSound.numAdd);

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
            case eSymbol.SCATTER:
              {
                if (isIdle) {
                  strAni.push("free_idle");
                } else {
                  strAni.push("free_intro");
                  strAni.push("free_intro");
                }
                break;
              }
            case eSymbol.SpecialWild:
              {
                strAni.push(symbol_aniName[symbolIndex - 1] + "_" + (isIdle ? "idle" : "win"));
                break;
              }
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
          var arrNUms = [[11, 8, 9, 1, 6, 5, 9, 8, 4, 8, 7, 1, 10, 10, 8], [9, 8, 6, 5, 4, 10, 1, 2, 11, 2, 4, 6, 11, 6, 4], [5, 8, 10, 4, 7, 8, 8, 7, 7, 6, 6, 5, 4, 11, 4], [4, 10, 5, 5, 9, 4, 11, 7, 10, 7, 4, 8, 7, 4, 11], [10, 8, 9, 2, 9, 10, 6, 5, 10, 8, 6, 6, 8, 2, 9]];
          return arrNUms[Math.floor(Math.random() * arrNUms.length)];
        };
        _proto.getResult = function getResult(openNums, result) {
          if (openNums === void 0) {
            openNums = null;
          }
          if (result === void 0) {
            result = null;
          }
          if (!openNums) {
            this._retList = null;
            return null;
          }
          if (this._retList) {
            return this._retList;
          }
          this._retList = [];

          //        // openNums = [1, 3, 1, 1, 7, 8, 0, 1, 3, 0, 1, 5, 5, 0, 9];

          for (var iCol = 0; iCol < 5; iCol++) {
            var symList = [];
            for (var iRow = 0; iRow < 3; iRow++) {
              var _index2 = iRow * 5 + iCol;
              var sym = openNums[_index2];
              symList.push({
                Sym: sym != 0 ? sym : -1,
                IsReward: false,
                iRow: iRow
              });
            }
            this._retList.push(symList);
          }
          result = result || NightCityModel.instance.betResult;
          if (result && result.prizeInfo) {
            for (var _iterator3 = _createForOfIteratorHelperLoose(result.prizeInfo), _step3; !(_step3 = _iterator3()).done;) {
              var prizeInfo = _step3.value;
              for (var _iterator4 = _createForOfIteratorHelperLoose(prizeInfo.prizeIdx), _step4; !(_step4 = _iterator4()).done;) {
                var _index3 = _step4.value;
                var _iRow = Math.floor(_index3 / 5);
                var _iCol = _index3 % 5;
                this._retList[_iCol][_iRow].IsReward = true;
              }
            }
          }
          for (var _iterator5 = _createForOfIteratorHelperLoose(this._retList), _step5; !(_step5 = _iterator5()).done;) {
            var _retList = _step5.value;
            _retList.reverse();
          }
          gts.Debug.Log("==getResult=retList=" + JSON.stringify(this._retList));
          return this._retList;
        };
        _createClass(NightCityUtils, [{
          key: "resultList",
          get: function get() {
            return this._retList;
          }
        }]);
        return NightCityUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/NightCityGame', 'chunks:///_virtual/NightCityGame'); 
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