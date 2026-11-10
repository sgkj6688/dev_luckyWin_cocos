System.register("chunks:///_virtual/Jb777_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './EventManager.ts', './Jb777Model.ts', './Jb777Def.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, instantiate, Label, Toggle, UIOpacity, tween, sys, Component, DataManager, UserKey, EventManager, Jb777Model, baseScore, eEvent;
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
      Jb777Model = module.Jb777Model;
    }, function (module) {
      baseScore = module.baseScore;
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "036a5NcUuJC/r3KbhlLeltK", "Jb777_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Jb777_setBase = exports('default', (_dec = ccclass("Jb777SetBase"), _dec2 = menu("game/Jb777Game/Jb777_setBase"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jb777_setBase, _Component);
        function Jb777_setBase() {
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
        var _proto = Jb777_setBase.prototype;
        _proto.onLoad = function onLoad() {
          this.node.scale = v3(this.node.scale.x, 0, 1);
          for (var i = 1; i < 15; i++) {
            var toggleTemp = instantiate(this.toggleTemp);
            toggleTemp.name = "" + i;
            toggleTemp.getChildByName("Label_score").getComponent(Label).string = baseScore[i] + "K";
            this.ToggleContainer.addChild(toggleTemp);
          }
        };
        _proto.start = function start() {
          var baseBetIndex = Jb777Model.instance.getBaseIndex();
          var curToggle = this.ToggleContainer.getChildByName("" + baseBetIndex);
          curToggle.getComponent(Toggle).isChecked = true;
          this.firstSet = false;
        };
        _proto.onEnable = function onEnable() {
          this.node.scale = v3(this.node.scale.x, 0, 1);
          this.node.getComponent(UIOpacity).opacity = 0;
          tween(this.node).to(0.1, {
            scale: v3(this.node.scale.x, 1.05, 1)
          }, {
            easing: "quadOut"
          }).to(0.05, {
            scale: v3(this.node.scale.x, 1, 1)
          }, {
            easing: "quadIn"
          }).start();
          tween(this.node.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
        };
        _proto.hide = function hide() {
          var _this2 = this;
          tween(this.node).to(0.05, {
            scale: v3(this.node.scale.x, 1.05, 1)
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
          gts.Debug.Log("==onToggleClick==baseScore==" + baseScore[iIndex]);
          Jb777Model.instance.curBet = baseScore[iIndex] * 1000;
          var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
          sys.localStorage.setItem("baseBetGold" + uid, Jb777Model.instance.curBet);
          EventManager.instance.emit(eEvent.updateBaseBet);
          this.hide();
        };
        return Jb777_setBase;
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

System.register("chunks:///_virtual/Jb777_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Jb777Model.ts', './Jb777Def.ts', './EventManager.ts', './Jb777Utils.ts', './Jb777_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, instantiate, Component, Jb777Model, maxRow, maxCol, eSymbol, eRunStatus, eSound, eEvent, EventManager, Jb777Utils, Jb777_symbolItem;
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
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      Jb777Model = module.Jb777Model;
    }, function (module) {
      maxRow = module.maxRow;
      maxCol = module.maxCol;
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Jb777Utils = module.Jb777Utils;
    }, function (module) {
      Jb777_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "46c24ugczBN8pmoLoACWYLX", "Jb777_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Jb777_symbol = exports('default', (_dec = ccclass("Jb777Symbol"), _dec2 = menu("game/Jb777Game/Jb777_symbol"), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jb777_symbol, _Component);
        function Jb777_symbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Prefab_symbolItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateEffect", _descriptor4, _assertThisInitialized(_this));
          _this.itemList = [];
          return _this;
        }
        var _proto = Jb777_symbol.prototype;
        //    ////////////////////////
        _proto.initSymbol = function initSymbol() {
          for (var col = maxCol - 1; col >= 0; col--) {
            this.itemList[col] = [];
            for (var row = 0; row < maxRow; row++) {
              var Node_symbolItem = instantiate(this.Prefab_symbolItem);
              var com_Jb777_symbolItem = Node_symbolItem.getComponent(Jb777_symbolItem);
              com_Jb777_symbolItem.init(row, col);
              this.node.addChild(Node_symbolItem);
              this.itemList[col].push(Node_symbolItem);
            }
          }
        };
        _proto.initSymbolIcon = function initSymbolIcon() {
          var nullCol = Math.floor(Math.random() * 3);
          for (var col = 0; col < maxCol; col++) {
            var isBig = col == maxCol - 1;
            var isOffSet = isBig ? Math.random() > 0.5 : nullCol == col ? true : Math.random() > 0.5;
            var symbolIndex = isOffSet ? eSymbol.Blank : Jb777Utils.instance.getRandSymbol(isBig);
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var com_Jb777_symbolItem = itemNode.getComponent(Jb777_symbolItem);
              symbolIndex = row == 1 ? symbolIndex : Jb777Utils.instance.getRandSymbol(isBig);
              com_Jb777_symbolItem.initSymbolIcon(symbolIndex, isOffSet);
            }
          }
        };
        _proto.doRunning = function doRunning(col, row, isOffSet) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var delayTimes = 0; //Jb777Model.instance.isQuickStop ? 0 : 0.1 * col;
            _this2.scheduleOnce(function () {
              var itemNode = _this2.itemList[col][row];
              var com_Jb777_symbolItem = itemNode.getComponent(Jb777_symbolItem);
              com_Jb777_symbolItem.initRun(isOffSet);
              com_Jb777_symbolItem.doStartRun().then(resolve);
            }, delayTimes);
          });
        };
        _proto.doQuickStop = function doQuickStop() {
          //        //do quickStop
          for (var col = 0; col < maxCol; col++) {
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var com_Jb777_symbolItem = itemNode.getComponent(Jb777_symbolItem);
              com_Jb777_symbolItem.quickStop();
            }
          }
        };
        _proto.doStartRun = function doStartRun() {
          var _this3 = this;
          if (Jb777Model.instance.gameStatus == eRunStatus.NONE) {
            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var arrPro, col, isOffSet, row;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    arrPro = [];
                    for (col = 0; col < maxCol; col++) {
                      isOffSet = Jb777Model.instance.symbolList[col] == eSymbol.Blank;
                      for (row = 0; row < maxRow; row++) {
                        arrPro.push(_this3.doRunning(col, row, isOffSet));
                      }
                    }
                    _this3.scheduleOnce(function () {
                      Jb777Utils.instance.playSound(eSound.running, true);
                    }, 0.35);
                    _context.next = 5;
                    return Promise.all(arrPro);
                  case 5:
                    Jb777Utils.instance.stopSound(eSound.running);
                    Jb777Model.instance.gameStatus = eRunStatus.STOPPING;
                    EventManager.instance.emit(eEvent.onRunStop);
                  case 8:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          }
        };
        _proto.doEnd = function doEnd() {
          var arrPro = [];
          for (var iCol = 0; iCol < maxCol; iCol++) {
            var itemNode = this.itemList[iCol][1];
            arrPro.push(itemNode.getComponent(Jb777_symbolItem).doEndEffect());
          }
          return Promise.all(arrPro);
        };
        return Jb777_symbol;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Prefab_symbolItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec4], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateEffect", [_dec6], {
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

System.register("chunks:///_virtual/Jb777_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Jb777Def.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, eEvent, EventManager;
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
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "87025IpD65JaIJekyKI99mi", "Jb777_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ui_symbolEffectRoot = exports('default', (_dec = ccclass("Jb777SymbolEffectRoot"), _dec2 = menu("game/Jb777Game/Jb777_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_symbolEffectRoot, _Component);
        function ui_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ui_symbolEffectRoot.prototype;
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
        };
        _proto.onDelEffect = function onDelEffect(iRow, iCol) {
          var delNode = this.node.getChildByName("symbolEffect_" + iRow + "_" + iCol);
          if (delNode) {
            delNode.destroyFromParent();
          }
        };
        return ui_symbolEffectRoot;
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

System.register("chunks:///_virtual/Jb777_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Jb777Model.ts', './Jb777Def.ts', './EventManager.ts', './Jb777Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, v3, tween, sp, Sprite, Component, Jb777Model, eSound, maxCol, eEvent, eSymbol, EventManager, Jb777Utils;
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
      v3 = module.v3;
      tween = module.tween;
      sp = module.sp;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      Jb777Model = module.Jb777Model;
    }, function (module) {
      eSound = module.eSound;
      maxCol = module.maxCol;
      eEvent = module.eEvent;
      eSymbol = module.eSymbol;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Jb777Utils = module.Jb777Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "f073eXJcZdAo40GZ7uTCk7m", "Jb777_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var startY = -130;
      var startX = -210;
      var spaceX = 138;
      var spaceY = 130;
      var quickStopASpeed = 275;
      var aSpeed = 20.0;
      var rSpeed = -75.0;
      var cLastSpeed = 800;
      var maxSpeed = 1200;
      var cSpaceH = 390; // 130 * 3;
      var minPosY = -200;
      var cRounds = 4;
      var Jb777_symbolItem = exports('default', (_dec = ccclass("Jb777SymbolItem"), _dec2 = menu("game/Jb777Game/Jb777_symbolItem"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jb777_symbolItem, _Component);
        function Jb777_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_tag", _descriptor, _assertThisInitialized(_this));
          _this.isSpine = false;
          _this.curSpeed = 0;
          _this.curAspeed = 0;
          _this.totalY = 0;
          _this.stopPosY = 0;
          _this.Node_symbol = null;
          //    // itemIndex: number = 0;
          _this.iRow = 0;
          _this.iCol = 0;
          _this.spaceH = cSpaceH;
          _this.lastSpeed = cLastSpeed;
          _this.symbolIndex = 0;
          _this._rounds = 0;
          return _this;
        }
        var _proto = Jb777_symbolItem.prototype;
        //    /////////////////////////////////////////////////
        _proto.init = function init(iRow, iCol) {
          //        //起始坐标
          var symbolPosX = startX + spaceX * iCol;
          var symbolPosY = startY + spaceY * iRow;
          this.node.position = v3(symbolPosX, symbolPosY);

          //        //node name
          this.node.name = "Node_symbolItem_" + iCol + "_" + iRow;
          this.Label_tag.string = "item_" + iCol + "_" + iRow;

          //        //node zIndex
          this.iRow = iRow;
          this.iCol = iCol;
          this.stopPosY = symbolPosY;
          //        // gts.Debug.Log("==" + this.node.name + "==" + "=init=" + this.node.y + "==this.node.zIndex==" + this.node.zIndex);

          this.Node_symbol = this.node.getChildByName("Node_symbol");
          Jb777_symbolItem.playEndTag[this.iCol] = false;
        };
        _proto.initSymbolIcon = function initSymbolIcon(symbolIndex, isOffSet) {
          var _this2 = this;
          if (isOffSet === void 0) {
            isOffSet = false;
          }
          this.updateSymbol(symbolIndex);
          var delayTimes = this.iCol * 0.15;
          this.node.setPosition(this.node.position.x, Math.abs(minPosY) + this.iRow * spaceY);
          this.stopPosY = startY + this.iRow * spaceY;
          if (isOffSet) {
            this.stopPosY += spaceY / 2;
          }
          tween(this.node).delay(delayTimes).to(0.25, {
            position: v3(this.node.position.x, this.stopPosY - 20)
          }, {
            easing: "cubicIn"
          }).call(function () {
            if (!Jb777_symbolItem.playEndTag[_this2.iCol]) {
              Jb777Utils.instance.playOneShot(eSound.drop_1);
              Jb777_symbolItem.playEndTag[_this2.iCol] = true;
            }
          }).to(0.05, {
            position: v3(this.node.position.x, this.stopPosY + 20)
          }, {
            easing: "cubicIn"
          }).to(0.03, {
            position: v3(this.node.position.x, this.stopPosY)
          }, {
            easing: "cubicIn"
          }).start();
        };
        _proto.initRun = function initRun(isOffSet) {
          if (isOffSet === void 0) {
            isOffSet = false;
          }
          var disRounds = this.iCol == maxCol - 1 ? this.iCol * 2 + 2 : this.iCol * 2;
          this._rounds = cRounds + disRounds;
          this.stopPosY = startY + this.iRow * spaceY;
          if (isOffSet) {
            this.stopPosY += spaceY / 2;
          }
          Jb777_symbolItem.playEndTag[this.iCol] = false;
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          if (itemSpine) {
            EventManager.instance.emit(eEvent.onDelEffect, this.iRow, this.iCol);
          }
        };
        _proto.doStartRun = /*#__PURE__*/function () {
          var _doStartRun = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.doStartMove();
                case 2:
                  _context.next = 4;
                  return this.doRunning();
                case 4:
                  _context.next = 6;
                  return this.doStopping();
                case 6:
                  return _context.abrupt("return", this.doEnd());
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doStartRun() {
            return _doStartRun.apply(this, arguments);
          }
          return doStartRun;
        }();
        _proto.quickStop = function quickStop() {
          if (this.totalY > cSpaceH + 20) {
            this.curSpeed = maxSpeed;
            this.curAspeed = quickStopASpeed;
            var leftY = (this.totalY - 20) % cSpaceH;
            this.totalY = cSpaceH + 20 + leftY;
            this.spaceH = cSpaceH;
          }
        };
        _proto.doStartMove = function doStartMove() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            tween(_this3.node)
            //                // .to(0.1, { y: this.node.y + 20 }, { easing: "cubicOut" })
            .call(function () {
              _this3._rounds = Jb777Model.instance.isQuickStop ? 1 : _this3._rounds;
              _this3.curAspeed = Jb777Model.instance.isQuickStop ? quickStopASpeed : 0;
              _this3.curSpeed = Jb777Model.instance.isQuickStop ? maxSpeed : 0;
              _this3.totalY = cSpaceH * _this3._rounds + 20;
              var symbolPosY = startY + spaceY * _this3.iRow;
              if (_this3.node.getPosition().y > symbolPosY) {
                _this3.totalY += _this3.node.getPosition().y - symbolPosY;
              }
              _this3.spaceH = cSpaceH;
              _this3.lastSpeed = cLastSpeed;
              resolve();
            }).start();
          });
        };
        _proto.doRunning = function doRunning() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var scheduleUpdate = function scheduleUpdate(dt) {
              if (_this4.curSpeed < maxSpeed) {
                _this4.curAspeed += aSpeed;
                _this4.curSpeed += _this4.curAspeed;
              }
              var curDis = _this4.curSpeed * dt;

              //                //update posY
              _this4.node.setPosition(_this4.node.position.x, _this4.node.position.y - curDis);
              if (_this4.node.getPosition().y <= minPosY) {
                _this4.node.setPosition(_this4.node.position.x, _this4.node.position.y + cSpaceH);

                //                    //随机替换图片
                _this4.updateSymbol();
              }

              //                //this.totalY < this.spaceH
              _this4.totalY -= curDis;
              if (_this4.totalY < _this4.spaceH) {
                _this4.unschedule(scheduleUpdate);
                resolve();
              }
            };
            _this4.schedule(scheduleUpdate);
          });
        };
        _proto.doStopping = function doStopping() {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            var scheduleUpdate = function scheduleUpdate(dt) {
              _this5.curAspeed = _this5.curAspeed < rSpeed ? _this5.curAspeed : _this5.curAspeed + rSpeed;
              _this5.curSpeed += _this5.curAspeed;
              if (_this5.curSpeed < _this5.lastSpeed) {
                _this5.curSpeed = _this5.lastSpeed;
              }
              var curDis = _this5.curSpeed * dt;
              _this5.node.setPosition(_this5.node.position.x, _this5.node.position.y - curDis);
              _this5.totalY -= curDis;
              if (_this5.totalY <= 0) {
                _this5.unschedule(scheduleUpdate);
                resolve();
              } else if (_this5.node.getPosition().y <= minPosY) {
                _this5.node.setPosition(_this5.node.position.x, _this5.node.position.y + cSpaceH);

                //                    // gts.Debug.Log("==" + this.node.y + "==this.node.zIndex==" + this.node.zIndex);
                //                    //将图片替换为正确图片
                var symbolIndex = _this5.iRow == 1 ? Jb777Model.instance.symbolList[_this5.iCol] : eSymbol.Blank;
                var isSpine = symbolIndex != eSymbol.Blank && Jb777Model.instance.betResult.prizeAmount > 0;
                _this5.updateSymbol(symbolIndex, isSpine);
              }
            };
            _this5.schedule(scheduleUpdate);
          });
        };
        _proto.doEnd = function doEnd() {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            if (!Jb777_symbolItem.playEndTag[_this6.iCol]) {
              Jb777Utils.instance.playOneShot(eSound.drop_1);
              Jb777_symbolItem.playEndTag[_this6.iCol] = true;
            }
            tween(_this6.node).to(0.1, {
              position: v3(_this6.node.position.x, _this6.stopPosY + 20)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(_this6.node.position.x, _this6.stopPosY)
            }, {
              easing: "cubicIn"
            }).call(function () {
              resolve();
            }).start();
          });
        }
        //    // isClear = false;
        ;

        _proto.doEndEffect = function doEndEffect() {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            var itemSpine = _this7.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.setAnimation(0, "idle", true);
              EventManager.instance.emit(eEvent.onAddEffect, _this7.iRow, _this7.iCol, v3(_this7.node.position));
            }
            _this7.scheduleOnce(function () {
              resolve();
            }, 1.5);
          });
        };
        _proto.updateSymbol = function updateSymbol(symbolIndex, isSpine) {
          var _this8 = this;
          if (isSpine === void 0) {
            isSpine = false;
          }
          this.symbolIndex = symbolIndex || Jb777Utils.instance.getRandSymbol(this.iCol == maxCol - 1);
          if (symbolIndex == eSymbol.Blank) {
            this.symbolIndex = Jb777Utils.instance.getRandSymbol(this.iCol == maxCol - 1);
          }
          this.Node_symbol.active = true;
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = Jb777Utils.instance.getItemSymbolIcon(_this8.symbolIndex);
              var itemSprite = _this8.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this8.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
            });
          } else {
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = Jb777Utils.instance.getItemSymbolSpine(_this8.symbolIndex);
              if (!itemSymbol) {
                return;
              }
              var itemSpine = _this8.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this8.Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              itemSpine.setAnimation(0, "picture", true);
            });
          }
        };
        return Jb777_symbolItem;
      }(Component), _class3.playEndTag = [false, false, false, false], _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_tag", [_dec3], {
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

System.register("chunks:///_virtual/Jb777Ctrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './Jb777Model.ts', './I18n.ts', './ViewManager.ts', './Jb777Def.ts', './Jb777Utils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, Jb777Model, i18n, ViewManager, eProto, eRunStatus, Jb777Utils, Common;
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
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Jb777Model = module.Jb777Model;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      Jb777Utils = module.Jb777Utils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ceebdHiJ/RD4ISYmvSWmaDO", "Jb777Ctrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Jb777Ctrl = exports('Jb777Ctrl', (_dec = ccclass("Jb777Ctrl"), _dec(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(Jb777Ctrl, _GameDef$BaseCtrl);
        function Jb777Ctrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._dataManager = void 0;
          _this._model = null;
          //    /**
          //     * 请求下注
          //     * @param data
          //     */
          _this.isReqBet = false;
          _this._configManager = ConfigManager.instance;
          _this._eventManager = EventManager.instance;
          _this._netManager = NetManager.instance;
          _this._dataManager = DataManager.instance;
          _this._model = Jb777Model.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = Jb777Ctrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete Jb777Ctrl._instance;
          Jb777Ctrl._instance = null;
          Jb777Model.destroy();
          Jb777Utils.destroy();
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
        //    /**请求进入房间 */
        ;

        _proto.reqHDInfo = function reqHDInfo(betAmount) {
          NetManager.instance.sendOnlineData(eProto.HD_info, {
            betAmount: "" + betAmount
          });
        };
        _proto.reqBet = function reqBet() {
          if (!Jb777Model.instance.BetList) {
            return;
          }
          this.isReqBet = true;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + Jb777Model.instance.curBet
          });
        }
        //    //////////////////////////////////////////
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code));
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                ViewManager.instance.closeWait();
                Jb777Model.instance.clearGameData();
                Jb777Model.instance.BetList = data.Data.betList;
                Jb777Model.instance.totalFreeTimes = data.Data.freeCount;
                Jb777Model.instance.curBet = data.Data.freeBetAmount;
                break;
              }
            case eProto.HD_Bet:
              {
                Jb777Model.instance.betResult = data.Data;
                this.isReqBet = false;
                Jb777Model.instance.symbolList = Jb777Model.instance.betResult.OpenNums.slice(4, 8);
                gts.Debug.Log("==symbolList==" + JSON.stringify(Jb777Model.instance.symbolList));
                if (Jb777Model.instance.freeStatus == eRunStatus.NONE) {
                  Jb777Model.instance.curBalance -= Jb777Model.instance.curBet;
                }
                Jb777Model.instance.totalFreeTimes = Jb777Model.instance.betResult.freeCount;
                break;
              }

            //            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==Jb777=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (Jb777Model.instance.curBalance > 0) {
                  Jb777Model.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                Jb777Model.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Jb777=pushWallet==" + _HD_Wallet.VndBalance);
                if (Jb777Model.instance.curBalance > 0) {
                  Jb777Model.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                Jb777Model.instance.curBalance = _HD_Wallet.VndBalance;
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
        return Jb777Ctrl;
      }(GameDef.BaseCtrl)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Jb777Def.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "832c64xO59Cc6uZ6I3z9mKi", "Jb777Def", undefined);
      var rate = exports('rate', [1000, 200, 100, 40, 20, 40, 10, 4, 10, 100]);
      var baseScore = exports('baseScore', [2.1, 6, 9, 12, 15, 21, 30, 45, 60, 90, 120, 210, 300, 600, 900]);
      var maxRow = exports('maxRow', 3);
      var maxCol = exports('maxCol', 4);
      var cBundle = exports('cBundle', "Jb777Game");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotVigorous/HD_info";
        eProto["HD_Bet"] = "slotVigorous/HD_Bet";
        return eProto;
      }({}));
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        RUNNING: 1,
        STOPPING: 2,
        END: 3,
        CLEAR: 4
      });
      var eRunType = exports('eRunType', {
        NONE: 0,
        SPECIAL: 1
      });
      var eSymbol = exports('eSymbol', {
        Seven: 1,
        IngotBig: 2,
        IngotSmall: 3,
        MoneyBag: 4,
        CopperCoin: 5,
        Blank: 6,
        Free: 7,
        Frog1: 8,
        Frog2: 9,
        Firecracker2: 10,
        Firecracker5: 11,
        Firecracker10: 12
      }); //鞭炮10
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "jb777_onLoadHall";
        eEvent["onLoadGame"] = "jb777_onLoadGame";
        eEvent["onRunStop"] = "jb777_onRunStop";
        eEvent["updateBaseBet"] = "jb777_updateBaseBet";
        eEvent["updateWin"] = "jb777_updateWin";
        eEvent["onAddEffect"] = "jb777_onAddEffect";
        eEvent["onDelEffect"] = "jb777_onDelEffect";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bg: "sound/bg",
        clear_0: "sound/clear_0",
        drop_0: "sound/drop_0",
        drop_1: "sound/drop_1",
        nice_0: "sound/nice_0",
        nice_1: "sound/nice_1",
        startFree: "sound/startFree",
        startRun: "sound/startRun",
        running: "sound/running",
        freeEnd_0: "sound/freeEnd_0",
        freeEnd_1: "sound/freeEnd_1",
        rateChange: "sound/rateChange"
      });

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Jb777Game", ['./Jb777Ctrl.ts', './Jb777Def.ts', './Jb777Model.ts', './Jb777Utils.ts', './Jb777GameView.ts', './Jb777_setBase.ts', './Jb777_symbol.ts', './Jb777_symbolEffectRoot.ts', './Jb777_symbolItem.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Jb777GameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './GameDef.ts', './Jb777Def.ts', './Jb777Model.ts', './Jb777Ctrl.ts', './ViewManager.ts', './Jb777Utils.ts', './GUtil.ts', './Jb777_setBase.ts', './Jb777_symbol.ts', './DataManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Button, sp, Label, Prefab, assetManager, sys, UIOpacity, tween, instantiate, Tween, v3, v2, UITransform, ConfigManager, EventManager, NetManager, GameDef, cBundle, eEvent, eRunStatus, eSound, eProto, rate, Jb777Model, Jb777Ctrl, ViewManager, Jb777Utils, GUtil, Jb777_setBase, Jb777_symbol, DataManager, UserKey, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      sp = module.sp;
      Label = module.Label;
      Prefab = module.Prefab;
      assetManager = module.assetManager;
      sys = module.sys;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      instantiate = module.instantiate;
      Tween = module.Tween;
      v3 = module.v3;
      v2 = module.v2;
      UITransform = module.UITransform;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      cBundle = module.cBundle;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      eProto = module.eProto;
      rate = module.rate;
    }, function (module) {
      Jb777Model = module.Jb777Model;
    }, function (module) {
      Jb777Ctrl = module.Jb777Ctrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Jb777Utils = module.Jb777Utils;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      Jb777_setBase = module.default;
    }, function (module) {
      Jb777_symbol = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
      cclegacy._RF.push({}, "4acc1vAaGFJiJHA4sPlAzpb", "Jb777GameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Jb777GameView = exports('default', (_dec = ccclass("Jb777GameView"), _dec2 = menu("game/Jb777Game/Jb777GameView"), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Prefab), _dec15 = property(Prefab), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Jb777_symbol), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Jb777GameView, _GameDef$BaseView);
        function Jb777GameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_setBase", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_run", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Spine_npc", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Spine_main", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_free", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeTimes", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_info", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_main", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_line", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_coin", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_coinBoom", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ui_symbol", _descriptor17, _assertThisInitialized(_this));
          _this.Node_setBase = null;
          return _this;
        }
        var _proto = Jb777GameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, Jb777Ctrl.instance);
          Jb777Utils.instance.bundle = assetManager.getBundle(cBundle);
          Jb777Utils.instance.preLoad();
          this.initUIView();

          //        // Jb777Ctrl.instance.reqBetList();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
          EventManager.instance.on(eEvent.onRunStop, this.doRunEnd, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
          EventManager.instance.off(eEvent.onRunStop, this.doRunEnd, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          Jb777Model.instance.clearGameData();
          Jb777Utils.instance.stopAllSound();
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
              if (Jb777Model.instance.isAuto && Jb777Ctrl.instance.isReqBet) {
                Jb777Ctrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          Jb777Utils.instance.updateLabel(this.Label_bet, Jb777Utils.instance.numberFormat(Jb777Model.instance.curBet / 1000, 2.0) + "K");

          //        //更新赔率
          this.updateRate();
        };
        _proto.updateRate = function updateRate() {
          var Node_label = this.Node_info.getChildByName("Node_label");
          var _loop = function _loop(i) {
            var Label_rate = Node_label.getChildByName("Label_" + i).getComponent(Label);
            tween(Label_rate.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              var curRate = Jb777Model.instance.curBet * rate[i] / 3000;
              Label_rate.string = (curRate < 1000 ? Jb777Utils.instance.numberFormat(curRate, 2) : Common.numFormat(curRate)) + "K";
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          };
          for (var i = 0; i < 10; i++) {
            _loop(i);
          }
        };
        _proto.initUIView = function initUIView() {
          var _this2 = this;
          this.ui_symbol.initSymbol();
          Jb777Utils.instance.loadRes_icon(function () {
            var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
            var baseBetGold = sys.localStorage.getItem("baseBetGold" + uid) || 2100;
            Jb777Ctrl.instance.reqHDInfo(baseBetGold);
          });

          //        // let Button_auto = cc.find("Node_down/Node_action/Button_auto", this.node);
          //        // Jb777Utils.instance.setBtnBetGray(Button_auto.getChildByName("Background"), true);
          //        // let Button_fast = cc.find("Node_down/Node_action/Button_fast", this.node);
          //        // Jb777Utils.instance.setBtnBetGray(Button_fast.getChildByName("Background"), true);
          //        // this.Label_bet.string = `${Jb777Utils.instance.numberFormat(Jb777Model.instance.curBet, 2.0)}K`;
          //        // this.Label_win.string = "0.00";

          this.updateGold();
          if (!this.Node_info.active) {
            this.Node_info.active = true;
            var Node_infoSpine = this.Node_info.getComponent(sp.Skeleton);
            Node_infoSpine.setAnimation(0, "intro", false);
            Node_infoSpine.setCompleteListener(function () {
              Node_infoSpine.setCompleteListener(null);
              Node_infoSpine.setAnimation(0, "picture", false);
            });
            this.scheduleOnce(function () {
              var Node_icon = _this2.Node_info.getChildByName("Node_icon");
              var Node_label = _this2.Node_info.getChildByName("Node_label");
              Node_icon.active = true;
              Node_label.active = true;
              Node_icon.getComponent(UIOpacity).opacity = 0;
              Node_label.getComponent(UIOpacity).opacity = 0;
              tween(Node_icon.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
              tween(Node_label.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
            }, 0.6);
          }
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this3 = this;
          switch (event.target.name) {
            case "Button_close":
              {
                ViewManager.instance.closePopGame(GameDef.Game.Jb777Game);
                break;
              }
            case "Button_record":
              {
                GUtil.openRecord("slotVigorous");
                break;
              }
            case "Button_rank":
              {
                GUtil.openRank("slotVigorous");
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", Jb777Utils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_auto":
              {
                Jb777Model.instance.isAuto = !Jb777Model.instance.isAuto;
                var spine = event.target.getChildByName("Background").getComponent(sp.Skeleton);
                var aniName = Jb777Model.instance.isAuto ? "auto_idle" : "auto_picture";
                spine.setAnimation(0, aniName, true);
                if (Jb777Model.instance.freeStatus == eRunStatus.NONE) {
                  this.Button_run.interactable = !Jb777Model.instance.isAuto;
                  Jb777Utils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), Jb777Model.instance.isAuto);
                }
                if (Jb777Model.instance.gameStatus != eRunStatus.RUNNING && Jb777Model.instance.isAuto) {
                  Jb777Ctrl.instance.reqBet();
                }
                break;
              }
            case "Button_fast":
              {
                //                //快速停止
                Jb777Model.instance.isQuickStop = !Jb777Model.instance.isQuickStop;
                var _spine = event.target.getChildByName("Background").getComponent(sp.Skeleton);
                var _aniName = Jb777Model.instance.isQuickStop ? "fast_idle" : "fast_picture";
                _spine.setAnimation(0, _aniName, true);
                break;
              }
            case "Button_run":
              {
                if (Jb777Model.instance.isAuto || Jb777Model.instance.freeStatus == eRunStatus.RUNNING) {
                  break;
                }
                if (this.Skeleton_run.animation != "quay_click") {
                  this.Skeleton_run.setAnimation(0, "quay_click", false);
                  this.Skeleton_run.setCompleteListener(function () {
                    _this3.Skeleton_run.setCompleteListener(null);
                    _this3.Skeleton_run.setAnimation(0, "quay_picture", false);
                  });
                }
                if (Jb777Model.instance.gameStatus == eRunStatus.NONE) {
                  event.target.getComponent(Button).interactable = false;
                  tween(event.target).delay(5).call(function () {
                    event.target.getComponent(Button).interactable = true;
                  }).start();
                  gts.Debug.Log("=Jb777Ctrl.instance.reqBet=" + event.target.getComponent(Button).interactable);
                  Jb777Ctrl.instance.reqBet();
                } else if (Jb777Model.instance.gameStatus == eRunStatus.RUNNING && !Jb777Model.instance.isQuickStop) {
                  this.ui_symbol.doQuickStop();
                }
                break;
              }
            case "Button_setBase":
              {
                if (!this.Node_setBase) {
                  Common.loadPopBuddle("prefab/Node_setBase", Jb777Utils.instance.bundle, function () {}, function (Node_setBase) {
                    _this3.Node_setBase = instantiate(Node_setBase);
                    _this3.Node_main.addChild(_this3.Node_setBase);
                  }, true);
                } else if (!this.Node_setBase.active) {
                  this.Node_setBase.active = true;
                } else {
                  this.Node_setBase.getComponent(Jb777_setBase).hide();
                }
                break;
              }
          }
        };
        _proto.doStartRun = function doStartRun() {
          Tween.stopAllByTarget(this.Label_win.node);
          this.Label_win.node.active = false;
          Jb777Model.instance.curTotalWin = 0;
          this.Node_effectRoot.removeAllChildren();
          this.ui_symbol.doStartRun();
          this.Button_setBase.interactable = false;
          Jb777Utils.instance.setBtnBetGray(this.Button_setBase.node.getChildByName("Background"), true);
          if (this.Node_setBase && this.Node_setBase.active) {
            this.Node_setBase.getComponent(Jb777_setBase).hide();
          }
          if (Jb777Model.instance.gameStatus != eRunStatus.RUNNING) {
            Jb777Model.instance.gameStatus = eRunStatus.RUNNING;
            var Node_icon = this.Node_info.getChildByName("Node_icon");
            for (var i = 0; i < 12; i++) {
              var nodeIcon = Node_icon.getChildByName("Node_icon_" + i).getComponent(sp.Skeleton);
              var aniName = Jb777Model.instance.getPrizeAni(i) + "p";
              //                // if (nodeIcon.animation != aniName) {
              //                //     nodeIcon.setAnimation(0, aniName, false);
              //                // }
              nodeIcon.setAnimation(0, aniName, false);
            }
            this.Spine_main.setAnimation(0, "spin", true);
            this.Sprite_line.active = false;
          }
          if (Jb777Model.instance.freeStatus == eRunStatus.RUNNING) {
            Jb777Utils.instance.updateLabel(this.Label_freeTimes, "" + Jb777Model.instance.totalFreeTimes);
          }
          Jb777Utils.instance.playOneShot(eSound.startRun);
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this4 = this;
            var result, Node_icon, prizeInfo, _iterator, _step, prizeIndex, nodeIcon, delayStart;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  Jb777Model.instance.gameStatus = eRunStatus.CLEAR;
                  this.Button_run.interactable = false;
                  this.Spine_main.setAnimation(0, "idle", true);
                  Jb777Model.instance.curTotalWin = 0;
                  result = Jb777Model.instance.betResult;
                  if (!(result.prizeAmount > 0)) {
                    _context.next = 17;
                    break;
                  }
                  //            //gengxin
                  Jb777Model.instance.curTotalWin += result.prizeAmount;
                  Jb777Utils.instance.playOneShot(eSound.clear_0);
                  this.Spine_npc.setAnimation(0, "bigwin", false);
                  this.Spine_npc.setCompleteListener(function () {
                    _this4.Spine_npc.setCompleteListener(null);
                    _this4.Spine_npc.setAnimation(0, "idle", true);
                  });
                  this.scheduleOnce(function () {
                    //                //金币效果
                    _this4.showCoinEffect();
                    //                //
                    _this4.Sprite_line.active = true;
                  }, 0.1);

                  //            //判断是否有特殊奖项
                  Node_icon = this.Node_info.getChildByName("Node_icon");
                  prizeInfo = Jb777Model.instance.getPrizeInfo();
                  for (_iterator = _createForOfIteratorHelperLoose(prizeInfo); !(_step = _iterator()).done;) {
                    prizeIndex = _step.value;
                    if (prizeIndex != -1) {
                      nodeIcon = Node_icon.getChildByName("Node_icon_" + prizeIndex);
                      nodeIcon.getComponent(sp.Skeleton).setAnimation(0, Jb777Model.instance.getPrizeAni(prizeIndex) + "win", true);
                    }
                  }

                  //            //
                  _context.next = 16;
                  return this.ui_symbol.doEnd();
                case 16:
                  Jb777Utils.instance.playOneShot(eSound.nice_0);

                //            // gts.Debug.Log("=doEnd=" + i + "==" + "=result=" + JSON.stringify(result));
                case 17:
                  delayStart = this.checkFreeStatus() ? 1.8 : 0.25;
                  if (Jb777Model.instance.curTotalWin > 0) {
                    delayStart += 0.25;
                    if (Jb777Model.instance.endBalance > 0) {
                      Jb777Model.instance.curBalance = Jb777Model.instance.endBalance;
                      Jb777Model.instance.endBalance = 0;
                      this.updateGold();
                    }
                  }
                  Jb777Model.instance.gameStatus = eRunStatus.NONE;
                  if (Jb777Model.instance.totalFreeTimes > 0 || Jb777Model.instance.isAuto) {
                    this.Button_run.interactable = false;
                    Jb777Utils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), true);
                    this.scheduleOnce(function () {
                      Jb777Ctrl.instance.reqBet();
                    }, delayStart);
                  } else if (!this.Button_run.interactable) {
                    this.Button_run.interactable = true;
                    Jb777Utils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                    this.Button_setBase.interactable = true;
                    Jb777Utils.instance.setBtnBetGray(this.Button_setBase.node.getChildByName("Background"), false);
                  }
                case 21:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doRunEnd() {
            return _doRunEnd.apply(this, arguments);
          }
          return doRunEnd;
        }();
        _proto.checkFreeStatus = function checkFreeStatus() {
          if (Jb777Model.instance.totalFreeTimes == 0) {
            if (Jb777Model.instance.freeStatus != eRunStatus.NONE) {
              Jb777Model.instance.freeStatus = eRunStatus.NONE;
              this.Node_free.active = false;
              this.Label_freeTimes.node.active = false;
            }
            return false;
          }
          if (Jb777Model.instance.freeStatus != eRunStatus.RUNNING) {
            Jb777Model.instance.freeStatus = eRunStatus.RUNNING;
            this.Node_free.active = true;
            this.Label_freeTimes.node.active = true;
            this.Label_freeTimes.string = "" + Jb777Model.instance.totalFreeTimes;
            this.showFreeTip();
          }
          return true;
        };
        _proto.showFreeTip = function showFreeTip() {
          var Node_freeTip = this.node.getChildByName("Node_freeTip");
          Node_freeTip.active = true;
          var Sprite_tip = Node_freeTip.getChildByName("Sprite_tip");
          Sprite_tip.getComponent(UIOpacity).opacity = 0;
          Sprite_tip.scale = v3(0.25, 0.25, 1);
          tween(Sprite_tip).to(0.2, {
            scale: v3(1.0, 1.0, 1.0)
          }).to(0.1, {
            scale: v3(0.85, 0.85, 1.0)
          }).to(1.5, {
            scale: v3(1.0, 1.0, 1.0)
          }).call(function () {
            Node_freeTip.active = false;
          }).start();
          tween(Sprite_tip.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).start();
        };
        _proto.showCoinEffect = function showCoinEffect() {
          var _this5 = this;
          var maxCounts = Math.floor(Math.random() * 10 + 5);
          var _loop2 = function _loop2() {
            var startPos = v2(20 + Math.random() * 80 - 40, 280 + Math.random() * 80 - 40);
            var endPos = v2(-145, 70);
            var coin = instantiate(_this5.prefab_coin);
            coin.getComponent(UITransform).priority = 1000;
            coin.position = v3(startPos.x, startPos.y, 0);
            _this5.Node_main.addChild(coin);
            var randX = Math.random() * 15 - 10;
            tween(coin).delay(i * 0.015).parallel(tween(coin).bezierTo(Math.random() * 0.4 + 0.5, v2(startPos.x * randX, startPos.y + 300), v2(endPos.x * randX, startPos.y), endPos), tween(coin).to(0.2, {
              scale: v3(0.75, 0.75, 1)
            })).call(function () {
              tween(coin.getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).start();
            }).delay(0.2).call(function () {
              if (maxCounts > 0) {
                maxCounts--;

                //                        //tisi
                if (!_this5.Label_win.node.active) {
                  var destWin = Jb777Model.instance.curTotalWin;
                  var curWin = 0;
                  var disWin = Jb777Model.instance.curTotalWin / 10;
                  _this5.Label_win.node.active = true;
                  _this5.Label_win.node.getComponent(UIOpacity).opacity = 255;
                  tween(_this5.Label_win.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.05).call(function () {
                    curWin += disWin;
                    if (curWin > destWin) {
                      curWin = destWin;
                    }
                    _this5.Label_win.string = Jb777Utils.instance.numberFormat(curWin / 1000, 2.0) + "K";
                  })).delay(2.0).to(0.2, {
                    opacity: 0
                  }).call(function () {
                    _this5.Label_win.node.active = false;
                  }).start();
                }

                //                        //金币爆裂
                var prefab_coinBoom = instantiate(_this5.prefab_coinBoom);
                prefab_coinBoom.getComponent(UITransform).priority = 1000;
                prefab_coinBoom.position = v3(endPos.x, endPos.y, 0);
                _this5.Node_main.addChild(prefab_coinBoom);
                tween(prefab_coinBoom).delay(2).removeSelf().start();
              }
            }).removeSelf().start();
          };
          for (var i = 0; i < maxCounts; i++) {
            _loop2();
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(Jb777Model.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            Jb777Utils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                //                //筹码列表
                if (Jb777Model.instance.totalFreeTimes == 0) {
                  var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
                  Jb777Model.instance.curBet = sys.localStorage.getItem("baseBetGold" + uid) || 2100;
                }
                this.updateBaseBet();
                this.ui_symbol.initSymbolIcon();
                if (this.checkFreeStatus()) {
                  this.Button_run.interactable = false;
                  Jb777Utils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), true);

                  //                    //开始免费
                  this.scheduleOnce(function () {
                    Jb777Ctrl.instance.reqBet();
                  }, 1.5);
                }
                break;
              }
            case eProto.HD_Bet:
              {
                if (Jb777Model.instance.freeStatus == eRunStatus.NONE && !Jb777Model.instance.isAuto) {
                  this.Button_run.interactable = true;
                  Tween.stopAllByTarget(this.Button_run.node);
                  Jb777Utils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                }
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
        return Jb777GameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_setBase", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_run", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Spine_npc", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Spine_main", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeTimes", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_main", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_line", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "prefab_coin", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "prefab_coinBoom", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "ui_symbol", [_dec19], {
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

System.register("chunks:///_virtual/Jb777Model.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './Jb777Def.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, GameDef, eSymbol, baseScore, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eSymbol = module.eSymbol;
      baseScore = module.baseScore;
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2ed9d5ID+JFrqiOLjzP8Zgu", "Jb777Model", undefined);
      var Jb777Model = exports('Jb777Model', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(Jb777Model, _GameDef$BaseSington);
        function Jb777Model() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.totalFreeTimes = 0;
          _this.gameStatus = eRunStatus.NONE;
          _this.BetList = null;
          _this.isAuto = false;
          _this.isQuickStop = false;
          _this.curBet = 2100;
          _this.curTotalWin = 0;
          _this.betResult = null;
          _this.symbolList = [];
          return _this;
        }
        var _proto = Jb777Model.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        _proto.getPrizeInfo = function getPrizeInfo() {
          var ret = [-1, -1];
          if (this.symbolList[3] == eSymbol.Free) {
            ret[1] = 11;
          }
          if (this.symbolList[3] == eSymbol.Firecracker2 || this.symbolList[3] == eSymbol.Firecracker5 || this.symbolList[3] == eSymbol.Firecracker10) {
            ret[1] = 8;
          } else if (this.symbolList[3] == eSymbol.Frog1 || this.symbolList[3] == eSymbol.Frog2) {
            ret[1] = this.symbolList[3] + 1;
          }
          if (this.symbolList[0] == this.symbolList[1] && this.symbolList[1] == this.symbolList[2]) {
            //            //3个一致
            ret[0] = this.symbolList[0] - 1;
          } else {
            var arrSymbol = [0, 0, 0, 0, 0];
            for (var _iterator = _createForOfIteratorHelperLoose(this.symbolList), _step; !(_step = _iterator()).done;) {
              var symbol = _step.value;
              arrSymbol[symbol - 1]++;
            }
            if (arrSymbol[0] != 0 && arrSymbol[1] != 0 && arrSymbol[2] != 0) {
              //                //7-大元宝-小元宝
              ret[0] = 5;
            } else if (arrSymbol[3] != 0 && arrSymbol[4] != 0) {
              //                //钱袋-铜钱-any
              ret[0] = 6;
            } else {
              ret[0] = 7;
            }
          }
          return ret;
        };
        _proto.getPrizeAni = function getPrizeAni(index) {
          var ani = ["1_777_", "2_yuanbao2_", "3_yuanbao_", "4_fudai_", "5_gold_", "6_zuhe_", "7_zuhe_", "8_any_", "9_bp_", "11_$+_", "10_$+$_", "12_respin_"];
          return ani[index];
        };
        _proto.getBaseIndex = function getBaseIndex() {
          for (var index = 0; index < baseScore.length; index++) {
            if (baseScore[index] * 1000 == Jb777Model.instance.curBet) {
              return index;
            }
          }
          return 0;
        };
        return Jb777Model;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Jb777Utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './Jb777Def.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, AudioClip, Node, Label, tween, v3, SpriteFrame, sp, GameDef, AudioManager, eSound, eSymbol, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
      Node = module.Node;
      Label = module.Label;
      tween = module.tween;
      v3 = module.v3;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSound = module.eSound;
      eSymbol = module.eSymbol;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4defcEfputGzpH+t5RvPcvA", "Jb777Utils", undefined);
      var symbol_nomal_icon = ["icon_7",
      //77
      "icon_two_ingot",
      //元宝2
      "icon_ingot",
      //元宝
      "icon_Fortune_bag",
      //福袋
      "icon_copper",
      //金币
      "", "icon_RESPIN",
      //财神
      "icon_$+",
      //蛤蟆
      "icon_$+$",
      //蛤蟆2
      "icon_x2",
      //鞭炮2
      "icon_x5",
      //鞭炮5
      "icon_x10" //鞭炮10
      ];

      var symbol_dataName = ["icon_7",
      //77
      "icon_yuanbao2",
      //元宝2
      "icon_yuanbao",
      //元宝
      "icon_fudai",
      //福袋
      "icon_gold",
      //金币
      "", "icon_respin",
      //财神
      "icon_$+",
      //蛤蟆
      "icon_$+$",
      //蛤蟆2
      "icon_bp2x",
      //鞭炮2
      "icon_bp5X",
      //鞭炮5
      "icon_bp10x" //鞭炮10
      ];

      var Jb777Utils = exports('Jb777Utils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(Jb777Utils, _GameDef$BaseSington);
        function Jb777Utils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          //    //animationName:{icon_wild:{idle,boom},icon_hu:{idle,intro}}
          //    // icon_hu:{icon_fa:["faidle","fa"]}
          _this.arrIconSkeletonData = {};
          //0:icon, 1:icon_wild, 2:icon_hu
          _this.arrIconSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = Jb777Utils.prototype;
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/Jb777GameView");
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
                        _this4.arrIconSkeletonData[spineData.name] = spineData;
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
        _proto.playBgMusic = function playBgMusic() {
          AudioManager.instance.playBgMusic(eSound.bg, this.bundle, true);
          // cc.audioEngine.setMusicVolume(0.75);
        };

        _proto.playSound = function playSound(soundPath, isLoop, cb) {
          var _this5 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (cb === void 0) {
            cb = null;
          }
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err) {
              return;
            }
            var soundID = AudioManager.instance.playSound(audioClip, isLoop);
            _this5.soundIDList[soundPath] = soundID;
            AudioManager.instance.setFinishCallback(soundID, function () {
              _this5.soundIDList[soundPath] = null;
              delete _this5.soundIDList[soundPath];
              if (cb) {
                cb();
              }
            });

            // cc.audioEngine.setEffectsVolume(1);
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
        }
        //    //////////////////////////
        ;

        _proto.getRandSymbol = function getRandSymbol(isBig) {
          var symbolIndex = isBig ? Math.floor(Math.random() * eSymbol.Blank + eSymbol.Blank + 1) : Math.floor(Math.random() * eSymbol.CopperCoin + 1);
          return symbolIndex;
        };
        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex) {
          var index = symbolIndex - 1;
          if (this.arrIconSpriteFrame) {
            var symbol = symbol_nomal_icon[index];
            return this.arrIconSpriteFrame[symbol];
          }
        };
        _proto.getItemSymbolSpine = function getItemSymbolSpine(symbolIndex) {
          if (this.arrIconSkeletonData) {
            var _index = symbolIndex - 1;
            return this.arrIconSkeletonData[symbol_dataName[_index]];
          }
          return null;
        };
        _proto.setBtnBetGray = function setBtnBetGray(btnNode, isGray) {
          Common.changeNodeEffect(btnNode, isGray);
        };
        return Jb777Utils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Jb777Game', 'chunks:///_virtual/Jb777Game'); 
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