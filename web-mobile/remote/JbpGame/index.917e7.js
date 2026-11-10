System.register("chunks:///_virtual/Jbp_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './JbpModel.ts', './JbpDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, Label, Toggle, UIOpacity, tween, Component, EventManager, JbpModel, eEvent;
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
      Label = module.Label;
      Toggle = module.Toggle;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      JbpModel = module.JbpModel;
    }, function (module) {
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b2c29Cf0VJIapCIl1WMjIj+", "Jbp_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var arrTimes = [9999, 999, 200, 100, 50];
      var Jbp_setAuto = exports('default', (_dec = ccclass("JbpSetAuto"), _dec2 = menu("game/JbpGame/Jbp_setAuto"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jbp_setAuto, _Component);
        function Jbp_setAuto() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "mask", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ToggleContainer", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Jbp_setAuto.prototype;
        //    // firstSet: boolean = true;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.node.scale = v3(this.node.scale.x, 0, 1);
          for (var i = 0; i < arrTimes.length; i++) {
            var toggleTemp = this.ToggleContainer.getChildByName("" + i);
            toggleTemp.getChildByName("Label_score").getComponent(Label).string = "" + arrTimes[i];
            toggleTemp.getComponent(Toggle).isChecked = false;
          }
          this.mask.on(Node.EventType.TOUCH_END, function () {
            _this2.hide();
          }, this);
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          for (var i = 0; i < arrTimes.length; i++) {
            var toggleTemp = this.ToggleContainer.getChildByName("" + i);
            toggleTemp.getComponent(Toggle).isChecked = false;
          }
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
          var _this3 = this;
          tween(this.node).to(0.05, {
            scale: v3(this.node.scale.x, 1.05, 1)
          }, {
            easing: "quadOut"
          }).to(0.1, {
            scale: v3(this.node.scale.x, 0, 1)
          }, {
            easing: "quadIn"
          }).call(function () {
            _this3.node.active = false;
          }).start();
          tween(this.node.getComponent(UIOpacity)).to(0.1, {
            opacity: 0
          }).start();
        };
        _proto.onToggleClick = function onToggleClick(toggle) {
          var iIndex = parseInt(toggle.node.name);
          JbpModel.instance.autoTimes = arrTimes[iIndex];
          EventManager.instance.emit(eEvent.updateAutoSet);
          this.hide();
        };
        _proto.onBtnCancel = function onBtnCancel() {
          JbpModel.instance.autoTimes = 0;
          for (var i = 0; i < arrTimes.length; i++) {
            var toggleTemp = this.ToggleContainer.getChildByName("" + i);
            toggleTemp.getComponent(Toggle).isChecked = false;
          }
          EventManager.instance.emit(eEvent.updateAutoSet);
          this.hide();
        };
        return Jbp_setAuto;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec3], {
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

System.register("chunks:///_virtual/Jbp_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './EventManager.ts', './JbpModel.ts', './JbpDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, instantiate, Label, Toggle, UIOpacity, tween, sys, Component, DataManager, UserKey, EventManager, JbpModel, eEvent;
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
      JbpModel = module.JbpModel;
    }, function (module) {
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "11254G1aMdKV5V2i31NCtc4", "Jbp_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Jbp_setBase = exports('default', (_dec = ccclass("JbpSetBase"), _dec2 = menu("game/JbpGame/Jbp_setBase"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jbp_setBase, _Component);
        function Jbp_setBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "mask", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleTemp", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ToggleContainer", _descriptor3, _assertThisInitialized(_this));
          _this.firstSet = true;
          return _this;
        }
        var _proto = Jbp_setBase.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.node.scale = v3(this.node.scale.x, 0, 1);
          for (var i = 0; i < 15; i++) {
            var toggleTemp = this.ToggleContainer.getChildByName("" + i);
            if (!toggleTemp) {
              toggleTemp = instantiate(this.toggleTemp);
              toggleTemp.name = "" + i;
              this.ToggleContainer.addChild(toggleTemp);
            }
            var strNum = JbpModel.instance.BetList[i] / 1000 + "K";
            toggleTemp.getChildByName("Label_score").getComponent(Label).string = strNum;
          }
          this.mask.on(Node.EventType.TOUCH_END, function () {
            _this2.hide();
          }, this);
        };
        _proto.start = function start() {
          var curToggle = this.ToggleContainer.getChildByName("" + JbpModel.instance.baseBetIndex);
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
          var _this3 = this;
          tween(this.node).to(0.05, {
            scale: v3(this.node.scale.x, 1.05, 1)
          }, {
            easing: "quadOut"
          }).to(0.1, {
            scale: v3(this.node.scale.x, 0, 1)
          }, {
            easing: "quadIn"
          }).call(function () {
            _this3.node.active = false;
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
          gts.Debug.Log("==onToggleClick==baseScore==" + JbpModel.instance.BetList[iIndex]);
          var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
          sys.localStorage.setItem("baseBetIndex" + uid, iIndex + 1);
          JbpModel.instance.curBet = JbpModel.instance.BetList[iIndex];
          JbpModel.instance.baseBetIndex = iIndex;
          EventManager.instance.emit(eEvent.updateBaseBet);
          this.hide();
        };
        return Jbp_setBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggleTemp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ToggleContainer", [_dec5], {
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

System.register("chunks:///_virtual/Jbp_symbol_0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JbpModel.ts', './JbpDef.ts', './Jbp_symbolItem_0.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, Component, JbpModel, eSymbol, Jbp_symbolItem_0;
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
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      JbpModel = module.JbpModel;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      Jbp_symbolItem_0 = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "706ff4RWPxNy7yHbAJSie+8", "Jbp_symbol_0", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var maxCol = 3;
      var maxRow = 1;
      var Jbp_symbol_0 = exports('default', (_dec = ccclass("JbpSymbol0"), _dec2 = menu("game/JbpGame/Jbp_symbol_0"), _dec3 = property(Prefab), _dec4 = property(), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jbp_symbol_0, _Component);
        function Jbp_symbol_0() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Prefab_symbolItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iRowIndex", _descriptor2, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // mask: cc.Node = null;
          //    // @property(cc.Node)
          //    // Node_colEffect: cc.Node = null;
          //    // @property(cc.Prefab)
          //    // Node_rateEffect: cc.Prefab = null;
          _this.itemList = [];
          return _this;
        }
        var _proto = Jbp_symbol_0.prototype;
        //    ////////////////////////
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {};
        _proto.initSymbol = function initSymbol() {
          for (var col = maxCol - 1; col >= 0; col--) {
            this.itemList[col] = [];
            for (var row = 0; row < maxRow; row++) {
              var Node_symbolItem = instantiate(this.Prefab_symbolItem);
              //                // Node_symbolItem.getChildByName("Node_symbol").scale = 0.35;
              var com_Jbp_symbolItem = Node_symbolItem.getComponent(Jbp_symbolItem_0);
              this.node.addChild(Node_symbolItem);
              this.itemList[col].push(Node_symbolItem);
              com_Jbp_symbolItem.init(row, col, this.iRowIndex);
            }
          }
        };
        _proto.doRunning = function doRunning(col, row) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            _this2.scheduleOnce(function () {
              var itemNode = _this2.itemList[col][row];
              var com_Jbp_symbolItem = itemNode.getComponent(Jbp_symbolItem_0);
              com_Jbp_symbolItem.initRun();
              com_Jbp_symbolItem.doStartRun().then(resolve);
            }, 0.5);
          });
        };
        _proto.doQuickStop = function doQuickStop() {
          //        //do quickStop
          for (var col = 0; col < maxCol; col++) {
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var com_Jbp_symbolItem = itemNode.getComponent(Jbp_symbolItem_0);
              com_Jbp_symbolItem.quickStop();
            }
          }
        };
        _proto.doStartRun = function doStartRun() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var arrPro, col, row, itemNode, com_Jbp_symbolItem;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    arrPro = [];
                    for (col = 0; col < maxCol; col++) {
                      for (row = 0; row < maxRow; row++) {
                        itemNode = _this3.itemList[col][row];
                        com_Jbp_symbolItem = itemNode.getComponent(Jbp_symbolItem_0);
                        if (!com_Jbp_symbolItem.isEnd) {
                          arrPro.push(_this3.doRunning(col, row));
                        }
                      }
                    }
                    _context.next = 4;
                    return Promise.all(arrPro);
                  case 4:
                    resolve();
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          });
        };
        _proto.doEnd = function doEnd() {
          var arrPro = [];
          for (var iCol = 0; iCol < maxCol; iCol++) {
            var iIndex = this.iRowIndex * 3 + iCol;
            var symbolInfo = JbpModel.instance.symbolList[iIndex];
            if (symbolInfo.prizeAmount > 0 || symbolInfo.bonusSymbol == eSymbol.Free) {
              var itemNode = this.itemList[iCol][0];
              arrPro.push(itemNode.getComponent(Jbp_symbolItem_0).doEndEffect());
            }
          }
          return Promise.all(arrPro);
        };
        return Jbp_symbol_0;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Prefab_symbolItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iRowIndex", [_dec4], {
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

System.register("chunks:///_virtual/Jbp_symbol_1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JbpModel.ts', './JbpDef.ts', './EventManager.ts', './JbpUtils.ts', './Jbp_symbolItem_1.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, v3, Component, JbpModel, eSymbol, eSound, eEvent, EventManager, JbpUtils, Jbp_symbolItem_1;
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
      instantiate = module.instantiate;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      JbpModel = module.JbpModel;
    }, function (module) {
      eSymbol = module.eSymbol;
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }, function (module) {
      Jbp_symbolItem_1 = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "fb4e0+ep7JDdpWuQMbK0aPS", "Jbp_symbol_1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var maxCol = 1;
      var maxRow = 2;
      var Jbp_symbol_1 = exports('default', (_dec = ccclass("JbpSymbol1"), _dec2 = menu("game/JbpGame/Jbp_symbol_1"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jbp_symbol_1, _Component);
        function Jbp_symbol_1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Prefab_symbolItem", _descriptor, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // mask: cc.Node = null;
          //    // @property(cc.Node)
          //    // Node_colEffect: cc.Node = null;
          //    // @property(cc.Prefab)
          //    // Node_rateEffect: cc.Prefab = null;
          _this.itemList = [];
          return _this;
        }
        var _proto = Jbp_symbol_1.prototype;
        //    ////////////////////////
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {};
        _proto.initSymbol = function initSymbol() {
          for (var col = maxCol - 1; col >= 0; col--) {
            this.itemList[col] = [];
            for (var row = 0; row < maxRow; row++) {
              var Node_symbolItem = instantiate(this.Prefab_symbolItem);
              Node_symbolItem.getChildByName("Node_symbol").scale = v3(1.0, 1.0, 1);
              var com_Jbp_symbolItem = Node_symbolItem.getComponent(Jbp_symbolItem_1);
              com_Jbp_symbolItem.init(row, col);
              this.node.addChild(Node_symbolItem);
              this.itemList[col].push(Node_symbolItem);
            }
          }
        };
        _proto.initSymbolIcon = function initSymbolIcon() {
          //        // let nullCol = Math.floor(Math.random() * maxCol);
          for (var col = 0; col < maxCol; col++) {
            var isOffSet = true; //nullCol == col ? true : Math.random() > 0.5;
            var symbolIndex = isOffSet ? eSymbol.Blank : JbpUtils.instance.getRandSymbol();
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var com_Jbp_symbolItem = itemNode.getComponent(Jbp_symbolItem_1);
              symbolIndex = row == 1 ? symbolIndex : JbpUtils.instance.getRandSymbol();
              com_Jbp_symbolItem.initSymbolIcon(symbolIndex, isOffSet);
            }
          }
        };
        _proto.doRunning = function doRunning(col, row, isOffSet) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var delayTimes = 0; //JbpModel.instance.isQuickStop ? 0 : 0.1 * col;
            _this2.scheduleOnce(function () {
              var itemNode = _this2.itemList[col][row];
              var com_Jbp_symbolItem = itemNode.getComponent(Jbp_symbolItem_1);
              com_Jbp_symbolItem.initRun(isOffSet);
              com_Jbp_symbolItem.doStartRun().then(resolve);
            }, delayTimes);
          });
        };
        _proto.doQuickStop = function doQuickStop() {
          //        //do quickStop
          for (var col = 0; col < maxCol; col++) {
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var com_Jbp_symbolItem = itemNode.getComponent(Jbp_symbolItem_1);
              com_Jbp_symbolItem.quickStop();
            }
          }
        };
        _proto.doStartRun = /*#__PURE__*/function () {
          var _doStartRun = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, col, symbolInfo, isOffSet, row;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  for (col = 0; col < maxCol; col++) {
                    symbolInfo = JbpModel.instance.symbolList[col];
                    isOffSet = symbolInfo.bonusSymbol == eSymbol.Blank;
                    for (row = 0; row < maxRow; row++) {
                      arrPro.push(this.doRunning(col, row, isOffSet));
                    }
                  }
                  this.scheduleOnce(function () {
                    JbpUtils.instance.playSound(eSound.running, true);
                  }, 0.35);
                  _context.next = 5;
                  return Promise.all(arrPro);
                case 5:
                  JbpUtils.instance.stopSound(eSound.running);
                  EventManager.instance.emit(eEvent.onRunEnd);
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
        _proto.doEnd = function doEnd() {
          var arrPro = [];
          for (var iCol = 0; iCol < maxCol; iCol++) {
            var itemNode = this.itemList[iCol][1];
            arrPro.push(itemNode.getComponent(Jbp_symbolItem_1).doEndEffect());
          }
          return Promise.all(arrPro);
        };
        return Jbp_symbol_1;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Prefab_symbolItem", [_dec3], {
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

System.register("chunks:///_virtual/Jbp_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JbpModel.ts', './JbpDef.ts', './EventManager.ts', './JbpUtils.ts', './Jbp_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, instantiate, Component, JbpModel, eSymbol, eSound, eEvent, EventManager, JbpUtils, Jbp_symbolItem;
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
      JbpModel = module.JbpModel;
    }, function (module) {
      eSymbol = module.eSymbol;
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }, function (module) {
      Jbp_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "7bf75r2//lDSKsFOfkpc5rR", "Jbp_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var maxCol = 3;
      var maxRow = 2;
      var Jbp_symbol = exports('default', (_dec = ccclass("JbpSymbol"), _dec2 = menu("game/JbpGame/Jbp_symbol"), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jbp_symbol, _Component);
        function Jbp_symbol() {
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
        var _proto = Jbp_symbol.prototype;
        //    ////////////////////////
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {};
        _proto.initSymbol = function initSymbol() {
          for (var col = maxCol - 1; col >= 0; col--) {
            this.itemList[col] = [];
            for (var row = 0; row < maxRow; row++) {
              var Node_symbolItem = instantiate(this.Prefab_symbolItem);
              var com_Jbp_symbolItem = Node_symbolItem.getComponent(Jbp_symbolItem);
              com_Jbp_symbolItem.init(row, col);
              this.node.addChild(Node_symbolItem);
              this.itemList[col].push(Node_symbolItem);
            }
          }
        };
        _proto.initSymbolIcon = function initSymbolIcon() {
          var nullCol = Math.floor(Math.random() * maxCol);
          for (var col = 0; col < maxCol; col++) {
            var isOffSet = nullCol == col ? true : Math.random() > 0.5;
            var symbolIndex = isOffSet ? eSymbol.Blank : JbpUtils.instance.getRandSymbol();
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var com_Jbp_symbolItem = itemNode.getComponent(Jbp_symbolItem);
              symbolIndex = row == 1 ? symbolIndex : JbpUtils.instance.getRandSymbol();
              com_Jbp_symbolItem.initSymbolIcon(symbolIndex, isOffSet);
            }
          }
        };
        _proto.doRunning = function doRunning(col, row, isOffSet) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var delayTimes = 0; //JbpModel.instance.isQuickStop ? 0 : 0.1 * col;
            _this2.scheduleOnce(function () {
              var itemNode = _this2.itemList[col][row];
              var com_Jbp_symbolItem = itemNode.getComponent(Jbp_symbolItem);
              com_Jbp_symbolItem.initRun(isOffSet);
              com_Jbp_symbolItem.doStartRun().then(resolve);
            }, delayTimes);
          });
        };
        _proto.doQuickStop = function doQuickStop() {
          //        //do quickStop
          for (var col = 0; col < maxCol; col++) {
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var com_Jbp_symbolItem = itemNode.getComponent(Jbp_symbolItem);
              com_Jbp_symbolItem.quickStop();
            }
          }
        };
        _proto.doStartRun = /*#__PURE__*/function () {
          var _doStartRun = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, col, isOffSet, row;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  for (col = 0; col < maxCol; col++) {
                    isOffSet = JbpModel.instance.symbolList[col] == eSymbol.Blank;
                    for (row = 0; row < maxRow; row++) {
                      arrPro.push(this.doRunning(col, row, isOffSet));
                    }
                  }
                  this.scheduleOnce(function () {
                    JbpUtils.instance.playSound(eSound.running, true);
                  }, 0.1);
                  _context.next = 5;
                  return Promise.all(arrPro);
                case 5:
                  JbpUtils.instance.stopSound(eSound.running);
                  EventManager.instance.emit(eEvent.onRunEnd);
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
        _proto.doEnd = function doEnd() {
          var arrPro = [];
          for (var iCol = 0; iCol < maxCol; iCol++) {
            var itemNode = this.itemList[iCol][1];
            arrPro.push(itemNode.getComponent(Jbp_symbolItem).doEndEffect());
          }
          return Promise.all(arrPro);
        };
        return Jbp_symbol;
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

System.register("chunks:///_virtual/Jbp_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JbpDef.ts', './EventManager.ts', './JbpModel.ts', './JbpUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, sp, Label, UITransform, instantiate, v3, Vec3, tween, Component, eEvent, eSymbol, eSound, EventManager, JbpModel, JbpUtils;
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
      sp = module.sp;
      Label = module.Label;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      v3 = module.v3;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
      eSymbol = module.eSymbol;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      JbpModel = module.JbpModel;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "18cd4SZ6Q5G7buUs1CUEqAN", "Jbp_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Jbp_symbolEffectRoot = exports('default', (_dec = ccclass("JbpSymbolEffectRoot"), _dec2 = menu("game/JbpGame/Jbp_symbolEffectRoot"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(sp.SkeletonData), _dec9 = property(Label), _dec10 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jbp_symbolEffectRoot, _Component);
        function Jbp_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "Node_symbolFrame", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_fireBall", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_iceBall", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winLabelRoot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skeData_frame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalTimes", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWin", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Jbp_symbolEffectRoot.prototype;
        _proto.onLoad = function onLoad() {
          JbpUtils.instance.updateLabel(this.Label_totalTimes, "" + JbpModel.instance.totalFreeTimes);
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onAddEffect, this.onAddEffect, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onAddEffect, this.onAddEffect, this);
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onAddEffect = function onAddEffect(iRow, iCol, wPos) {
          var _this2 = this;
          var nPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(wPos);
          var arrIndex = [2, 0, 0, 1, 1];
          var iIndex = iRow * 3 + iCol;
          var symbolInfo = JbpModel.instance.symbolList[iIndex];
          if (symbolInfo.bonusSymbol == eSymbol.Free) {
            //            // gts.Debug.LogWarr("====onAddEffect==添加冰球==");
            //            //添加冰球
            var _newNode = instantiate(this.Node_iceBall);
            _newNode.position = nPos;
            this.Node_winLabelRoot.addChild(_newNode);
            var ani = _newNode.getComponent(sp.Skeleton);
            ani.setAnimation(0, "intro", false);
            ani.setCompleteListener(function () {
              ani.setCompleteListener(null);
              ani.setAnimation(0, "idle", false);
              var toNPos = v3(105 + Math.random() * 30 - 15, 300);
              var delayTimes = Vec3.distance(_newNode.position, toNPos) / 750;
              tween(_newNode).to(delayTimes, {
                position: toNPos
              }, {
                easing: "cubicIn"
              }).call(function () {
                ani.setAnimation(0, "end", false);
                ani.setCompleteListener(function () {
                  ani.setCompleteListener(null);
                  _newNode.destroyFromParent();
                  JbpUtils.instance.playOneShot(eSound.shouJi);
                });

                //                        // gts.Debug.LogWarr(`iRow=${iRow}=iCol=${iCol}=symbolInfo=${JSON.stringify(symbolInfo)}`);
                JbpModel.instance.totalFreeTimes++;
                //                        // gts.Debug.LogWarr("==onAddEffect==" + JbpModel.instance.totalFreeTimes);
                JbpUtils.instance.updateLabel(_this2.Label_totalTimes, "" + JbpModel.instance.totalFreeTimes);
              }).start();
            });
            return;
          }

          //        // gts.Debug.LogWarr("====onAddEffect==添加中奖框==");
          //        //添加中奖框
          var newNode = instantiate(this.Node_symbolFrame);
          newNode.name = "symbolEffect_" + iRow + "_" + iCol;
          newNode.position = nPos;
          this.node.addChild(newNode);

          //        //框动画
          var frameSkeleton = newNode.getComponent(sp.Skeleton);
          var skeletonData = this.skeData_frame[arrIndex[symbolInfo.bonusSymbol - 1]];
          if (!skeletonData) {
            return;
          }
          JbpUtils.instance.playOneShot(eSound.kuang);
          frameSkeleton.skeletonData = skeletonData;
          frameSkeleton.setAnimation(0, "animation", false);
          frameSkeleton.setCompleteListener(function () {
            frameSkeleton.setCompleteListener(null);

            //            //添加得分
            var Label_win = instantiate(_this2.Label_win);
            Label_win.name = "Label_win_" + iIndex;
            Label_win.position = nPos;
            Label_win.getComponent(Label).string = JbpUtils.instance.numberFormat(symbolInfo.prizeAmount / 1000, 2.0) + "K";
            _this2.Node_winLabelRoot.addChild(Label_win);
          });
        };
        _proto.doCollect = function doCollect(iRow, iCol) {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            var iIndex = iRow * 3 + iCol;
            _this3.scheduleOnce(function () {
              var Label_win = _this3.Node_winLabelRoot.getChildByName("Label_win_" + iIndex);
              if (!Label_win) {
                resolve();
                return;
              }

              //                //添加火球
              var newNode = instantiate(_this3.Node_fireBall);
              newNode.position = Label_win.position;
              _this3.Node_winLabelRoot.addChild(newNode);
              Label_win.destroyFromParent();
              var ani = newNode.getComponent(sp.Skeleton);
              ani.setAnimation(0, "intro", false);
              ani.setCompleteListener(function () {
                ani.setCompleteListener(null);
                ani.setAnimation(0, "idle", false);
                var toNPos = v3(118 + Math.random() * 30 - 15, 300);
                var symbolInfo = JbpModel.instance.symbolList[iIndex];
                var delayTimes = Vec3.distance(newNode.position, toNPos) / 750;
                tween(newNode).to(delayTimes, {
                  position: toNPos
                }, {
                  easing: "cubicIn"
                }).call(function () {
                  ani.setAnimation(0, "end", false);
                  ani.setCompleteListener(function () {
                    ani.setCompleteListener(null);
                    newNode.destroyFromParent();
                    JbpUtils.instance.playOneShot(eSound.shouJi);
                    resolve();
                  });
                  JbpModel.instance.curTotalWin += symbolInfo.prizeAmount;
                  JbpUtils.instance.updateLabel(_this3.Label_totalWin, JbpUtils.instance.numberFormat(JbpModel.instance.curTotalWin / 1000, 2.0) + "K");
                }).start();
              });
            }, 1.0 + iIndex * 0.25);
          });
        };
        return Jbp_symbolEffectRoot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_fireBall", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_iceBall", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_winLabelRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skeData_frame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalTimes", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWin", [_dec10], {
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

System.register("chunks:///_virtual/Jbp_symbolItem_0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JbpModel.ts', './JbpDef.ts', './EventManager.ts', './JbpUtils.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v3, tween, UITransform, sp, Sprite, Component, JbpModel, eSymbol, eSound, eEvent, EventManager, JbpUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      tween = module.tween;
      UITransform = module.UITransform;
      sp = module.sp;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      JbpModel = module.JbpModel;
    }, function (module) {
      eSymbol = module.eSymbol;
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;
      cclegacy._RF.push({}, "3cf3edDZWlLbrtbHcHxhlca", "Jbp_symbolItem_0", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var startY = 0;
      var startX = -213;
      var spaceX = 213;
      var spaceY = 160;
      var quickStopASpeed = 275;
      var aSpeed = 20.0;
      var rSpeed = -10.0;
      var cLastSpeed = 75; //500;
      var maxSpeed = 1200; // 1200;
      var cSpaceH = 320; // 550
      var minPosY = -180;
      var cRounds = 6; // 6
      var Jbp_symbolItem_0 = exports('default', (_dec = ccclass("JbpSymbolItem0"), _dec2 = menu("game/JbpGame/Jbp_symbolItem_0"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jbp_symbolItem_0, _Component);
        function Jbp_symbolItem_0() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isSpine = false;
          _this.curSpeed = 0;
          _this.curAspeed = 0;
          _this.totalY = 0;
          _this.stopPosY = 0;
          _this.Node_symbol = null;
          //    // itemIndex: number = 0;
          _this.iRow = 0;
          _this.iCol = 0;
          _this.iRowIndex = 0;
          _this.spaceH = cSpaceH;
          _this.lastSpeed = cLastSpeed;
          _this.symbolIndex = 0;
          _this.isEnd = false;
          _this._rounds = 0;
          _this.isFirstRun = true;
          return _this;
        }
        var _proto = Jbp_symbolItem_0.prototype;
        //    /////////////////////////////////////////////////
        _proto.init = function init(iRow, iCol, iRowIndex) {
          if (iRowIndex === void 0) {
            iRowIndex = 0;
          }
          this.iRowIndex = iRowIndex;

          //        //起始坐标
          var symbolPosX = startX + spaceX * iCol;
          var symbolPosY = startY + spaceY * iRow;
          this.node.position = v3(symbolPosX, symbolPosY);

          //        //node name
          this.node.name = "Node_symbolItem_" + iCol + "_" + iRow;
          //        // this.Label_tag.string = `item_${iCol}_${iRow}`;

          //        //node zIndex
          this.iRow = iRow;
          this.iCol = iCol;
          this.stopPosY = symbolPosY;
          //        // gts.Debug.Log("==" + this.node.name + "==" + "=init=" + this.node.y + "==this.node.zIndex==" + this.node.zIndex);

          this.Node_symbol = this.node.getChildByName("Node_symbol");
          this.updateSymbol(eSymbol.Ingot);
        };
        _proto.initSymbolIcon = function initSymbolIcon(symbolIndex, isOffSet) {
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
        _proto.initRun = function initRun() {
          this.stopPosY = startY + this.iRow * spaceY;
          if (!this.isFirstRun && this.node.getPosition().y != this.stopPosY) {
            this.node.setPosition(this.node.position.x, this.stopPosY + spaceY);
          } else {
            this.node.setPosition(this.node.position.x, this.stopPosY);
            this.isFirstRun = false;
          }
          Jbp_symbolItem_0._runIndex++;
          this._rounds = cRounds + Jbp_symbolItem_0._runIndex * 3;
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
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            tween(_this2.node)
            //                // .to(0.1, { y: this.node.y + 20 }, { easing: "cubicOut" })
            .call(function () {
              _this2._rounds = _this2._rounds;
              _this2.curAspeed = 0;
              _this2.curSpeed = Math.random() * 300;
              _this2.totalY = cSpaceH * _this2._rounds;
              _this2.totalY += Math.random() > 0.5 ? spaceY / 2 : -spaceY / 2;
              var symbolPosY = startY + spaceY * _this2.iRow;
              if (_this2.node.getPosition().y > symbolPosY) {
                _this2.totalY += _this2.node.getPosition().y - symbolPosY;
              }
              _this2.spaceH = 3 * cSpaceH;
              _this2.lastSpeed = cLastSpeed;
              resolve();
            }).start();
          });
        };
        _proto.doRunning = function doRunning() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            var scheduleUpdate = function scheduleUpdate(dt) {
              if (_this3.curSpeed < maxSpeed) {
                _this3.curAspeed += aSpeed;
                _this3.curSpeed += _this3.curAspeed;
              }
              var curDis = _this3.curSpeed * dt;

              //                //update posY
              _this3.node.setPosition(_this3.node.position.x, _this3.node.position.y - curDis);
              if (_this3.node.getPosition().y <= minPosY) {
                _this3.node.setPosition(_this3.node.position.x, _this3.node.position.y + cSpaceH);

                //                    //随机替换图片
                _this3.updateSymbol();
              }

              //                //this.totalY < this.spaceH
              _this3.totalY -= curDis;
              if (_this3.totalY < _this3.spaceH) {
                _this3.unschedule(scheduleUpdate);
                resolve();
              }
            };
            _this3.schedule(scheduleUpdate);
          });
        };
        _proto.doStopping = function doStopping() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var scheduleUpdate = function scheduleUpdate(dt) {
              _this4.curAspeed = _this4.curAspeed < rSpeed ? _this4.curAspeed : _this4.curAspeed + rSpeed;
              _this4.curSpeed += rSpeed; //this.curAspeed;
              if (_this4.curSpeed < _this4.lastSpeed) {
                _this4.curSpeed = _this4.lastSpeed;
              }
              var curDis = _this4.curSpeed * dt;
              _this4.node.setPosition(_this4.node.position.x, _this4.node.position.y - curDis);
              _this4.totalY -= curDis;
              if (_this4.totalY <= 0) {
                _this4.unschedule(scheduleUpdate);
                resolve();
              } else if (_this4.node.getPosition().y <= minPosY) {
                _this4.node.setPosition(_this4.node.position.x, _this4.node.position.y + cSpaceH);

                //                    // gts.Debug.Log("==" + this.node.y + "==this.node.zIndex==" + this.node.zIndex);
                //                    //将图片替换为正确图片
                var iIndex = _this4.iRowIndex * 3 + _this4.iCol;
                var symbolInfo = JbpModel.instance.symbolList[iIndex];
                var symbolIndex = symbolInfo.bonusSymbol;
                _this4.updateSymbol(symbolIndex, false);
                _this4.isEnd = symbolInfo.prizeAmount > 0 || symbolIndex == eSymbol.Free;
              }
            };
            _this4.schedule(scheduleUpdate);
          });
        };
        _proto.doEnd = function doEnd() {
          var _this5 = this;
          if (Jbp_symbolItem_0._runIndex != 0) {
            Jbp_symbolItem_0._runIndex = 0;
          }
          return new Promise(function (resolve, reject) {
            var toY = _this5.stopPosY;
            if (!_this5.isEnd) {
              toY += _this5.node.getPosition().y > 0 ? 1.5 * spaceY : -1.5 * spaceY;
            }
            tween(_this5.node).delay(0.35).to(0.15, {
              position: v3(_this5.node.position.x, toY)
            }, {
              easing: "cubicIn"
            })
            //                // .to(0.05, { y: this.stopPosY }, { easing: "cubicIn" })
            .call(function () {
              if (_this5.isEnd) {
                JbpUtils.instance.playOneShot(eSound.drop_1);
              } else {
                JbpUtils.instance.playOneShot(eSound.drop_0);
              }
              if (_this5.isEnd && _this5.symbolIndex < eSymbol.Blank) {
                //                        //添加框效果
                var wPos = _this5.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                EventManager.instance.emit(eEvent.onAddEffect, _this5.iRowIndex, _this5.iCol, wPos);
              }
              resolve();
            }).start();
          });
        };
        _proto.doEndEffect = function doEndEffect() {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            if (_this6.isEnd && _this6.symbolIndex == eSymbol.Free) {
              _this6.updateSymbol(eSymbol.Free, true);
              _this6.scheduleOnce(function () {
                var itemSpine = _this6.Node_symbol.getComponent(sp.Skeleton);
                if (itemSpine) {
                  itemSpine.setAnimation(0, "changge", false);
                  JbpUtils.instance.playOneShot(eSound.kuang);
                  itemSpine.setCompleteListener(function () {
                    itemSpine.setCompleteListener(null);
                    itemSpine.setAnimation(0, "p2", false);
                    var wPos = _this6.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                    EventManager.instance.emit(eEvent.onAddEffect, _this6.iRowIndex, _this6.iCol, wPos);
                    _this6.isEnd = false;
                  });
                }
              }, 0.1);
              _this6.scheduleOnce(function () {
                resolve();
              }, 2.0);
              return;
            }
            resolve();
          });
        };
        _proto.getRandSymbol = function getRandSymbol() {
          var symbolIndex = Math.random() > 0.9 ? eSymbol.Free : Math.floor(Math.random() * eSymbol.GOURD + 1);
          return symbolIndex;
        };
        _proto.updateSymbol = function updateSymbol(symbolIndex, isSpine) {
          var _this7 = this;
          if (isSpine === void 0) {
            isSpine = false;
          }
          this.symbolIndex = symbolIndex || this.getRandSymbol();
          if (symbolIndex == eSymbol.Blank) {
            this.symbolIndex = this.getRandSymbol();
          }
          this.Node_symbol.active = true;
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = JbpUtils.instance.getItemSymbolIcon(_this7.symbolIndex);
              var itemSprite = _this7.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this7.Node_symbol.addComponent(Sprite);
                //                    // itemSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
              }

              _this7.Node_symbol.scale = v3(0.35, 0.35, 1);
              itemSprite.spriteFrame = itemSymbol;
            });
          } else {
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = JbpUtils.instance.getItemSymbolSpine(_this7.symbolIndex);
              if (!itemSymbol) {
                return;
              }
              var itemSpine = _this7.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this7.Node_symbol.addComponent(sp.Skeleton);
              }
              _this7.Node_symbol.scale = v3(0.75, 0.75, 1);
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              var ani = JbpUtils.instance.getItemSymbolAni(_this7.symbolIndex);
              itemSpine.setAnimation(0, ani, false);
            });
          }
        };
        return Jbp_symbolItem_0;
      }(Component), _class2._runIndex = 0, _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Jbp_symbolItem_1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JbpModel.ts', './JbpDef.ts', './JbpUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, v3, tween, sp, Sprite, Component, JbpModel, eSound, eSymbol, JbpUtils;
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
      v3 = module.v3;
      tween = module.tween;
      sp = module.sp;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      JbpModel = module.JbpModel;
    }, function (module) {
      eSound = module.eSound;
      eSymbol = module.eSymbol;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "68f38/X89VPKL3Ztqn5Eio3", "Jbp_symbolItem_1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var maxCol = 1;
      var startY = -550;
      var startX = 0;
      var spaceX = 275;
      var spaceY = 550;
      var quickStopASpeed = 275;
      var aSpeed = 20.0;
      var rSpeed = -75.0;
      var cLastSpeed = 1200; //800;
      var maxSpeed = 6000; // 1200;
      var cSpaceH = 1100; // 550
      var minPosY = -570;
      var cRounds = 6;
      var Jbp_symbolItem_1 = exports('default', (_dec = ccclass("JbpSymbolItem1"), _dec2 = menu("game/JbpGame/Jbp_symbolItem_1"), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jbp_symbolItem_1, _Component);
        function Jbp_symbolItem_1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_tag", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigLight", _descriptor2, _assertThisInitialized(_this));
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
        var _proto = Jbp_symbolItem_1.prototype;
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
          Jbp_symbolItem_1.playEndTag[this.iCol] = false;
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
            if (!Jbp_symbolItem_1.playEndTag[_this2.iCol]) {
              JbpUtils.instance.playOneShot(eSound.drop_1);
              Jbp_symbolItem_1.playEndTag[_this2.iCol] = true;
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
          Jbp_symbolItem_1.playEndTag[this.iCol] = false;
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
              _this3._rounds = _this3._rounds;
              _this3.curAspeed = 0;
              _this3.curSpeed = 0;
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
                var symbolInfo = JbpModel.instance.symbolList[_this5.iCol];
                var symbolIndex = symbolInfo.bonusSymbol;
                _this5.updateSymbol(symbolIndex, symbolIndex < eSymbol.Blank && symbolInfo.prizeAmount > 0);
              }
            };
            _this5.schedule(scheduleUpdate);
          });
        };
        _proto.doEnd = function doEnd() {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            if (!Jbp_symbolItem_1.playEndTag[_this6.iCol]) {
              JbpUtils.instance.playOneShot(eSound.drop_1);
              Jbp_symbolItem_1.playEndTag[_this6.iCol] = true;
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

              //                    //添加框效果
              _this6.showFrame();
            }).start();
          });
        };
        _proto.showFrame = function showFrame() {}
        //    // isClear = false;
        ;

        _proto.doEndEffect = function doEndEffect() {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            //            // resolve();

            if (_this7.symbolIndex == eSymbol.RedEnvelope) {
              _this7.Node_bigLight.active = true;
            } else {
              var itemSpine = _this7.Node_symbol.getComponent(sp.Skeleton);
              if (itemSpine) {
                itemSpine.setAnimation(0, "idle", true);
              }
            }
            _this7.scheduleOnce(function () {
              resolve();
            }, 1.0);
          });
        };
        _proto.getRandSymbol = function getRandSymbol() {
          var symbolIndex = Math.random() > 0.9 ? eSymbol.RedEnvelope : Math.floor(Math.random() * eSymbol.GOURD + 1);
          return symbolIndex;
        };
        _proto.updateSymbol = function updateSymbol(symbolIndex, isSpine) {
          var _this8 = this;
          if (isSpine === void 0) {
            isSpine = false;
          }
          this.symbolIndex = symbolIndex || this.getRandSymbol();
          if (symbolIndex == eSymbol.Blank) {
            this.symbolIndex = this.getRandSymbol();
          }
          this.Node_symbol.active = true;
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = JbpUtils.instance.getItemSymbolIcon(_this8.symbolIndex);
              var itemSprite = _this8.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this8.Node_symbol.addComponent(Sprite);
                //                    // itemSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
              }

              itemSprite.spriteFrame = itemSymbol;
              _this8.Node_symbol.scale = v3(1.0, 1.0, 1);
            });
          } else {
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = JbpUtils.instance.getItemSymbolSpine(_this8.symbolIndex);
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
              var ani = JbpUtils.instance.getItemSymbolAni(_this8.symbolIndex);
              itemSpine.setAnimation(0, ani, true);
              _this8.Node_symbol.scale = v3(2.85, 2.85, 1);
            });
          }
        };
        return Jbp_symbolItem_1;
      }(Component), _class3.playEndTag = [false, false, false, false], _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_tag", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigLight", [_dec4], {
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

System.register("chunks:///_virtual/Jbp_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JbpModel.ts', './JbpDef.ts', './JbpUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, v3, tween, sp, Sprite, Component, JbpModel, eSound, eSymbol, JbpUtils;
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
      JbpModel = module.JbpModel;
    }, function (module) {
      eSound = module.eSound;
      eSymbol = module.eSymbol;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "2cdefnx3TBAMLVIX7Gf6hll", "Jbp_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var maxCol = 3;
      var startY = -325;
      var startX = -275;
      var spaceX = 275;
      var spaceY = 325;
      var quickStopASpeed = 275;
      var aSpeed = 20.0;
      var rSpeed = -75.0;
      var cLastSpeed = 1200; //800;
      var maxSpeed = 6000; // 1200;
      var cSpaceH = 650; // 550
      var minPosY = -350;
      var cRounds = 6;
      var Jbp_symbolItem = exports('default', (_dec = ccclass("JbpSymbolItem"), _dec2 = menu("game/JbpGame/Jbp_symbolItem"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jbp_symbolItem, _Component);
        function Jbp_symbolItem() {
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
        var _proto = Jbp_symbolItem.prototype;
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
          Jbp_symbolItem.playEndTag[this.iCol] = false;
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
            if (!Jbp_symbolItem.playEndTag[_this2.iCol]) {
              JbpUtils.instance.playOneShot(eSound.drop_1);
              Jbp_symbolItem.playEndTag[_this2.iCol] = true;
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
          Jbp_symbolItem.playEndTag[this.iCol] = false;
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
              _this3._rounds = JbpModel.instance.isQuickStop ? 1 : _this3._rounds;
              _this3.curAspeed = JbpModel.instance.isQuickStop ? quickStopASpeed : 0;
              _this3.curSpeed = JbpModel.instance.isQuickStop ? maxSpeed : 0;
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
                var symbolIndex = JbpModel.instance.symbolList[_this5.iCol];
                _this5.updateSymbol(symbolIndex, false);
              }
            };
            _this5.schedule(scheduleUpdate);
          });
        };
        _proto.doEnd = function doEnd() {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            if (!Jbp_symbolItem.playEndTag[_this6.iCol]) {
              JbpUtils.instance.playOneShot(eSound.drop_1);
              Jbp_symbolItem.playEndTag[_this6.iCol] = true;
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
            var symbolIndex = JbpModel.instance.symbolList[_this7.iCol];
            _this7.updateSymbol(symbolIndex, true);
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
          this.symbolIndex = symbolIndex || JbpUtils.instance.getRandSymbol();
          if (symbolIndex == eSymbol.Blank) {
            this.symbolIndex = JbpUtils.instance.getRandSymbol();
          }
          this.Node_symbol.active = true;
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = JbpUtils.instance.getItemSymbolIcon(_this8.symbolIndex);
              var itemSprite = _this8.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this8.Node_symbol.addComponent(Sprite);
                //                    // itemSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
              }

              _this8.Node_symbol.scale = v3(0.5, 0.5, 1);
              itemSprite.spriteFrame = itemSymbol;
            });
          } else {
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = JbpUtils.instance.getItemSymbolSpine(_this8.symbolIndex);
              if (!itemSymbol) {
                return;
              }
              var itemSpine = _this8.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this8.Node_symbol.addComponent(sp.Skeleton);
              }
              _this8.Node_symbol.scale = v3(1.4, 1.4, 1);
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              var ani = JbpUtils.instance.getItemSymbolAni(_this8.symbolIndex);
              itemSpine.setAnimation(0, ani, true);
            });
          }
        };
        return Jbp_symbolItem;
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

System.register("chunks:///_virtual/JbpCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './JbpModel.ts', './I18n.ts', './ViewManager.ts', './JbpDef.ts', './JbpUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, JbpModel, i18n, ViewManager, eProto, JbpUtils, Common;
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
      JbpModel = module.JbpModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e70d4TFBdVOsKOf96HYcWDd", "JbpCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var JbpCtrl = exports('JbpCtrl', (_dec = ccclass("JbpCtrl"), _dec(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(JbpCtrl, _GameDef$BaseCtrl);
        function JbpCtrl() {
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
          _this._model = JbpModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = JbpCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete JbpCtrl._instance;
          JbpCtrl._instance = null;
          JbpModel.destroy();
          JbpUtils.destroy();
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
        //    /**请求突出房间 */
        ;

        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }
        //    /**请求进入房间 */
        ;

        _proto.reqHDInfo = function reqHDInfo(betAmount) {
          NetManager.instance.sendOnlineData(eProto.HD_info, {
            betAmount: "" + betAmount
          });
        }
        //    /**请求下注列表 */
        ;

        _proto.reqBetList = function reqBetList() {
          NetManager.instance.sendOnlineData(eProto.HD_BetList, {});
        };
        _proto.reqBet = function reqBet(type) {
          if (type === void 0) {
            type = 0;
          }
          if (!JbpModel.instance.BetList) {
            return;
          }
          this.isReqBet = true;
          var cmd = type == 0 ? eProto.HD_Bet : type == 1 ? eProto.HD_BetMiniGame1 : eProto.HD_BetMiniGame2;
          NetManager.instance.sendOnlineData(cmd, {
            betAmount: "" + JbpModel.instance.curBet
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
            case eProto.HD_BetList:
              {
                JbpModel.instance.BetList = data.Data;
                break;
              }
            case eProto.HD_Bet:
              {
                if (!this.isReqBet) {
                  return;
                }
                JbpModel.instance.freeResult = null;
                JbpModel.instance.betResult = data.Data;
                this.isReqBet = false;
                JbpModel.instance.symbolList = JbpModel.instance.betResult.openNums;
                JbpModel.instance.curBalance -= JbpModel.instance.curBet;
                if (JbpModel.instance.betResult.miniGamePrize) {
                  JbpModel.instance.curFreeTimes = 0;
                  JbpModel.instance.totalFreeTimes = 5;
                }
                break;
              }
            case eProto.HD_BetMiniGame1:
              {
                if (!this.isReqBet) {
                  return;
                }
                this.isReqBet = false;
                if (!JbpModel.instance.freeResult) {
                  JbpModel.instance.freeResult = data.Data;
                }
                break;
              }
            case eProto.HD_BetMiniGame2:
              {
                if (!this.isReqBet) {
                  return;
                }
                JbpModel.instance.freeResult = null;
                JbpModel.instance.betResult = data.Data;
                this.isReqBet = false;
                JbpModel.instance.symbolList = JbpModel.instance.betResult.openNums;
                break;
              }

            //            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==Jbp=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (JbpModel.instance.curBalance > 0) {
                  JbpModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                JbpModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Jbp=pushWallet==" + _HD_Wallet.VndBalance);
                if (JbpModel.instance.curBalance > 0) {
                  JbpModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                JbpModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        return JbpCtrl;
      }(GameDef.BaseCtrl)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JbpDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cb450cDoHJGQI5NqUXgCvaF", "JbpDef", undefined);
      var cBundle = exports('cBundle', "JbpGame");
      var symbol_nomal_icon = exports('symbol_nomal_icon', ["icon_ingot",
      //元宝
      "icon_Fortune_bag",
      //福袋
      "icon_Ring",
      //宝石
      "icon_copper",
      //铜钱
      "icon_calabash",
      //葫芦
      "", "icon_wild",
      //任意
      "icon_spin",
      //免费

      "icon_Red_packet" //红包
      ]);

      var symbol_dataName = exports('symbol_dataName', ["icon_yuanbao",
      //元宝
      "icon_fudai",
      //福袋
      "icon_jiezhi",
      //宝石戒指
      "icon_tongqian",
      //铜钱
      "icon_hulu",
      //葫芦
      "", "animation",
      //任意
      "p1",
      //免费 changge-p1(正常)-p2（变暗）
      "changge",
      //免费 changge-p1(正常)-p2（变暗）
      "p2" //免费 changge-p1(正常)-p2（变暗）
      ]);

      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_Leave"] = "slotBowl/HD_Leave";
        eProto["HD_info"] = "slotBowl/HD_info";
        eProto["HD_Bet"] = "slotBowl/HD_Bet";
        eProto["HD_BetList"] = "slotBowl/HD_BetList";
        eProto["HD_BetMiniGame1"] = "slotBowl/HD_BetMiniGame1";
        eProto["HD_BetMiniGame2"] = "slotBowl/HD_BetMiniGame2";
        return eProto;
      }({}));
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        RUNNING: 1,
        END: 2
      });
      var eRunType = exports('eRunType', {
        NONE: -1,
        NOMAL: 0,
        FREE_0: 1,
        FREE_1: 2
      });
      var eSymbol = exports('eSymbol', {
        Ingot: 1,
        MoneyBag: 2,
        GEMSTONE: 3,
        CopperCoin: 4,
        GOURD: 5,
        Blank: 6,
        ARBITRARY: 7,
        Free: 8,
        RedEnvelope: 9
      }); //红包
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onRunEnd"] = "onRunEnd";
        eEvent["updateBaseBet"] = "updateBaseBet";
        eEvent["updateAutoSet"] = "updateAutoSet";
        eEvent["onAddEffect"] = "onAddEffect";
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
        shouJi: "sound/shouJi",
        wild: "sound/wild",
        kuang: "sound/kuang",
        baoJinbi: "sound/baoJinbi"
      });

      /**钱包信息 */

      var CJbpGame = exports('CJbpGame', /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(CJbpGame, _cc$Component);
        function CJbpGame() {
          return _cc$Component.apply(this, arguments) || this;
        }
        return CJbpGame;
      }(Component));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JbpGame", ['./JbpCtrl.ts', './JbpDef.ts', './JbpModel.ts', './JbpScene.ts', './JbpUtils.ts', './JbpGameFree_0.ts', './JbpGameFree_1.ts', './JbpGameNomal.ts', './JbpGameView.ts', './Jbp_setAuto.ts', './Jbp_setBase.ts', './Jbp_symbol.ts', './Jbp_symbolEffectRoot.ts', './Jbp_symbolItem.ts', './Jbp_symbolItem_0.ts', './Jbp_symbolItem_1.ts', './Jbp_symbol_0.ts', './Jbp_symbol_1.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/JbpGameFree_0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './JbpDef.ts', './JbpModel.ts', './JbpCtrl.ts', './JbpUtils.ts', './Jbp_symbol_0.ts', './Jbp_symbolEffectRoot.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, tween, Tween, EventManager, CJbpGame, eSound, eEvent, JbpModel, JbpCtrl, JbpUtils, Jbp_symbol_0, Jbp_symbolEffectRoot;
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
      Label = module.Label;
      Node = module.Node;
      tween = module.tween;
      Tween = module.Tween;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      CJbpGame = module.CJbpGame;
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      JbpModel = module.JbpModel;
    }, function (module) {
      JbpCtrl = module.JbpCtrl;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }, function (module) {
      Jbp_symbol_0 = module.default;
    }, function (module) {
      Jbp_symbolEffectRoot = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "cfee8xw78dN5oTQuMtBPupO", "JbpGameFree_0", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var JbpGameFree_0 = exports('default', (_dec = ccclass("JbpGameFree0"), _dec2 = menu("game/JbpGame/JbpGameFree_0"), _dec3 = property(Jbp_symbolEffectRoot), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Jbp_symbol_0), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_JbpDef$CJbpGame) {
        _inheritsLoose(JbpGameFree_0, _JbpDef$CJbpGame);
        function JbpGameFree_0() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _JbpDef$CJbpGame.call.apply(_JbpDef$CJbpGame, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curTimes", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalTimes", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_countDown", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_endResult", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWin", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_freeTip", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title_result", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_resultEffect", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ui_symbol", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = JbpGameFree_0.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    ////////////////////////////////////////////////////
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.Node_freeTip.active = true;
          JbpModel.instance.freeResult = null;
          JbpModel.instance.curTotalWin = 0;

          //        //倒数15秒
          tween(this.Label_countDown).repeat(15, tween(this.Label_countDown).delay(1.0).call(function () {
            var nums = parseInt(_this2.Label_countDown.string) - 1;
            _this2.Label_countDown.string = "" + nums;
          })).call(function () {
            _this2.Node_freeTip.active = false;
            _this2.doReqBet();
          }).start();
        };
        _proto.initUIView = function initUIView() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.ui_symbol), _step; !(_step = _iterator()).done;) {
            var ui_symbol = _step.value;
            ui_symbol.initSymbol();
          }
        };
        _proto.doReqBet = function doReqBet() {
          JbpCtrl.instance.reqBet(1);
        };
        _proto.doStartRun = /*#__PURE__*/function () {
          var _doStartRun = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, _iterator2, _step2, ui_symbol;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (JbpModel.instance.freeResult.length > 0) {
                    JbpModel.instance.betResult = JbpModel.instance.freeResult.shift();
                    JbpModel.instance.symbolList = JbpModel.instance.betResult.openNums;
                    JbpModel.instance.curFreeTimes = JbpModel.instance.betResult.totalCount - JbpModel.instance.betResult.surplusCount;
                  }
                  JbpUtils.instance.updateLabel(this.Label_curTimes, "" + (JbpModel.instance.betResult.totalCount - JbpModel.instance.betResult.surplusCount));
                  arrPro = [];
                  for (_iterator2 = _createForOfIteratorHelperLoose(this.ui_symbol); !(_step2 = _iterator2()).done;) {
                    ui_symbol = _step2.value;
                    arrPro.push(ui_symbol.doStartRun());
                  }
                  this.scheduleOnce(function () {
                    JbpUtils.instance.playSound(eSound.running, true);
                  }, 0.5);
                  _context.next = 7;
                  return Promise.all(arrPro);
                case 7:
                  JbpUtils.instance.stopSound(eSound.running);
                  EventManager.instance.emit(eEvent.onRunEnd);
                case 9:
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
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            var arr, _iterator3, _step3, ui_symbol, result, arrPro, iRow, iCol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  arr = [];
                  for (_iterator3 = _createForOfIteratorHelperLoose(this.ui_symbol); !(_step3 = _iterator3()).done;) {
                    ui_symbol = _step3.value;
                    arr.push(ui_symbol.doEnd());
                  }
                  _context2.next = 4;
                  return Promise.all(arr);
                case 4:
                  result = JbpModel.instance.betResult;
                  if (!(result.miniGamePrize || result.surplusCount == 0 || function () {
                    for (var i = 0; i < result.openNums.length; i++) {
                      var symbolInfo = result.openNums[i];
                      if (symbolInfo.prizeAmount == 0) {
                        return false;
                      }
                    }
                    return true;
                  }())) {
                    _context2.next = 13;
                    break;
                  }
                  //            //免费结束
                  this.scheduleOnce(function () {
                    _this3.title_result.active = true;
                    _this3.Node_resultEffect.active = true;
                    JbpUtils.instance.playSound(eSound.freeEnd_0);
                    JbpUtils.instance.playSound(eSound.baoJinbi);
                  }, 0.5);
                  arrPro = [];
                  for (iRow = 0; iRow < 3; iRow++) {
                    for (iCol = 0; iCol < 3; iCol++) {
                      arrPro.push(this.Node_effectRoot.doCollect(iRow, iCol));
                    }
                  }
                  _context2.next = 11;
                  return Promise.all(arrPro);
                case 11:
                  //            //显示总得分
                  this.Node_endResult.active = true;
                  this.Label_totalWin.string = JbpUtils.instance.numberFormat(JbpModel.instance.curTotalWin / 1000, 2.0) + "K";
                case 13:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    resolve();
                  }));
                case 14:
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
        _proto.onBtnClick_start = function onBtnClick_start() {
          Tween.stopAllByTarget(this.Label_countDown);
          this.Node_freeTip.active = false;
          this.doReqBet();
        };
        return JbpGameFree_0;
      }(CJbpGame), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_curTimes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalTimes", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_countDown", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_endResult", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWin", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_freeTip", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "title_result", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_resultEffect", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "ui_symbol", [_dec12], {
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

System.register("chunks:///_virtual/JbpGameFree_1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JbpDef.ts', './JbpModel.ts', './JbpCtrl.ts', './JbpUtils.ts', './Jbp_symbol_1.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Tween, eSound, CJbpGame, JbpModel, JbpCtrl, JbpUtils, Jbp_symbol_1;
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
      tween = module.tween;
      Tween = module.Tween;
    }, function (module) {
      eSound = module.eSound;
      CJbpGame = module.CJbpGame;
    }, function (module) {
      JbpModel = module.JbpModel;
    }, function (module) {
      JbpCtrl = module.JbpCtrl;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }, function (module) {
      Jbp_symbol_1 = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "cb8e8IYidZKuJYkxBAMU7yq", "JbpGameFree_1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var JbpGameFree_1 = exports('default', (_dec = ccclass("JbpGameFree1"), _dec2 = menu("game/JbpGame/JbpGameFree_1"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Jbp_symbol_1), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_JbpDef$CJbpGame) {
        _inheritsLoose(JbpGameFree_1, _JbpDef$CJbpGame);
        function JbpGameFree_1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _JbpDef$CJbpGame.call.apply(_JbpDef$CJbpGame, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curTimes", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ui_symbol", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_freeTip", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title_result", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_resultEffect", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_endResult", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWin", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_countDown", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = JbpGameFree_1.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    ////////////////////////////////////////////////////
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.Node_freeTip.active = true;

          //        //倒数15秒
          tween(this.Label_countDown).repeat(15, tween(this.Label_countDown).delay(1.0).call(function () {
            var nums = parseInt(_this2.Label_countDown.string) - 1;
            _this2.Label_countDown.string = "" + nums;
          })).call(function () {
            _this2.Node_freeTip.active = false;
            _this2.doReqBet();
          }).start();
        };
        _proto.initUIView = function initUIView() {
          this.ui_symbol.initSymbol();
          this.ui_symbol.initSymbolIcon();
        };
        _proto.doReqBet = function doReqBet() {
          JbpCtrl.instance.reqBet(2);
        };
        _proto.doStartRun = function doStartRun() {
          JbpUtils.instance.updateLabel(this.Label_curTimes, "" + 1);
          this.ui_symbol.doStartRun();
        };
        _proto.doRunEnd = function doRunEnd() {
          var _this3 = this;
          var result = JbpModel.instance.symbolList[0];
          if (result.prizeAmount > 0) {
            this.scheduleOnce(function () {
              JbpUtils.instance.updateLabelAdd(_this3.Label_win, result.prizeAmount);
            }, 0.5);
            this.scheduleOnce(function () {
              _this3.Node_resultEffect.active = true;
              _this3.title_result.active = true;
              JbpUtils.instance.playSound(eSound.freeEnd_1);
              JbpUtils.instance.playSound(eSound.baoJinbi);

              //                //显示总得分
              _this3.Node_endResult.active = true;
              _this3.Label_totalWin.string = JbpUtils.instance.numberFormat(result.prizeAmount / 1000, 2.0) + "K";
              JbpModel.instance.curTotalWin += result.prizeAmount;
            }, 1.0);
          }
          return this.ui_symbol.doEnd();
        };
        _proto.onBtnClick_start = function onBtnClick_start() {
          Tween.stopAllByTarget(this.Label_countDown);
          this.Node_freeTip.active = false;
          this.doReqBet();
        };
        return JbpGameFree_1;
      }(CJbpGame), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_curTimes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ui_symbol", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_freeTip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "title_result", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_resultEffect", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_endResult", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_countDown", [_dec11], {
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

System.register("chunks:///_virtual/JbpGameNomal.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JbpDef.ts', './JbpModel.ts', './JbpCtrl.ts', './JbpUtils.ts', './Jbp_symbol.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Node, Prefab, instantiate, tween, UIOpacity, eSymbol, CJbpGame, JbpModel, JbpCtrl, JbpUtils, Jbp_symbol;
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
      Label = module.Label;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      eSymbol = module.eSymbol;
      CJbpGame = module.CJbpGame;
    }, function (module) {
      JbpModel = module.JbpModel;
    }, function (module) {
      JbpCtrl = module.JbpCtrl;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }, function (module) {
      Jbp_symbol = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "a1d370dOihK4pLnMUy5VWOI", "JbpGameNomal", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var JbpGameNomal = exports('default', (_dec = ccclass("JbpGameNomal"), _dec2 = menu("game/JbpGame/JbpGameNomal"), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Jbp_symbol), _dec6 = property(Node), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_JbpDef$CJbpGame) {
        _inheritsLoose(JbpGameNomal, _JbpDef$CJbpGame);
        function JbpGameNomal() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _JbpDef$CJbpGame.call.apply(_JbpDef$CJbpGame, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ui_symbol", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_endResult", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeWin", _descriptor5, _assertThisInitialized(_this));
          _this.Node_setBase = null;
          return _this;
        }
        var _proto = JbpGameNomal.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    ////////////////////////////////////////////////////
        _proto.onLoad = function onLoad() {
          //        // this.initUIView();
        };
        _proto.onEnable = function onEnable() {
          if (JbpModel.instance.curTotalWin > 0) {
            //            // //显示总得分
            //            // this.Node_endResult.active = true;
            //            // JbpUtils.instance.updateLabelAdd(this.Label_freeWin, JbpModel.instance.curTotalWin);
            //            // this.scheduleOnce(() => {
            //            //     this.Node_endResult.active = false;
            //            // }, 2.0);

            this.Label_win.node.active = true;
            JbpUtils.instance.updateLabel(this.Label_win, JbpUtils.instance.numberFormat(JbpModel.instance.curTotalWin / 1000, 2.0) + "K");
          }
        };
        _proto.initUIView = function initUIView() {
          var _this2 = this;
          this.ui_symbol.initSymbol();
          this.ui_symbol.initSymbolIcon();
          JbpUtils.instance.asyncLoad("prefab/Node_icon", Prefab, function (err, prefab) {
            if (!err && prefab) {
              _this2.Node_icon = instantiate(prefab);
              _this2.node.getChildByName("Node_info").addChild(_this2.Node_icon);
              tween(_this2.Node_icon.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
            }
          });
        };
        _proto.doReqBet = function doReqBet() {
          JbpCtrl.instance.reqBet();
        };
        _proto.doStartRun = function doStartRun() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.Node_icon.children), _step; !(_step = _iterator()).done;) {
            var node = _step.value;
            node.active = false;
          }
          JbpModel.instance.curTotalWin = 0;
          this.Label_win.node.active = false;
          this.ui_symbol.doStartRun();
        };
        _proto.doRunEnd = function doRunEnd() {
          var result = JbpModel.instance.betResult;
          if (result.prizeAmount > 0) {
            JbpUtils.instance.updateLabelAdd(this.Label_win, result.prizeAmount);
            var symbolIndex = 0;
            for (var i = 0; i < result.openNums.length; i++) {
              symbolIndex = result.openNums[i];
              if (symbolIndex != eSymbol.ARBITRARY) {
                break;
              }
            }
            var nodeIcon = this.Node_icon.getChildByName("Node_icon_" + (symbolIndex - 1));
            if (nodeIcon) {
              nodeIcon.active = true;
            }
          }
          return this.ui_symbol.doEnd();
        };
        return JbpGameNomal;
      }(CJbpGame), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ui_symbol", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_endResult", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeWin", [_dec7], {
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

System.register("chunks:///_virtual/JbpGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './GameDef.ts', './JbpDef.ts', './JbpModel.ts', './JbpCtrl.ts', './ViewManager.ts', './JbpUtils.ts', './GUtil.ts', './Jbp_setBase.ts', './Jbp_setAuto.ts', './DataManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Button, Label, assetManager, instantiate, tween, v3, UIOpacity, Toggle, sys, ConfigManager, EventManager, NetManager, GameDef, cBundle, eEvent, eRunStatus, eRunType, eSound, eProto, CJbpGame, JbpModel, JbpCtrl, ViewManager, JbpUtils, GUtil, Jbp_setBase, Jbp_setAuto, DataManager, UserKey, Common;
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
      Button = module.Button;
      Label = module.Label;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Toggle = module.Toggle;
      sys = module.sys;
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
      eRunType = module.eRunType;
      eSound = module.eSound;
      eProto = module.eProto;
      CJbpGame = module.CJbpGame;
    }, function (module) {
      JbpModel = module.JbpModel;
    }, function (module) {
      JbpCtrl = module.JbpCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      JbpUtils = module.JbpUtils;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      Jbp_setBase = module.default;
    }, function (module) {
      Jbp_setAuto = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "9828c7WlE5CK44I8x1Mztjx", "JbpGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var JbpGameView = exports('default', (_dec = ccclass("JbpGameView"), _dec2 = menu("game/JbpGame/JbpGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(JbpGameView, _GameDef$BaseView);
        function JbpGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_gameRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_uiRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_uiBtnRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_runTag", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_auto", _descriptor9, _assertThisInitialized(_this));
          _this.Node_setBase = null;
          _this.Node_setAuto = null;
          _this.hJbpGameView = null;
          return _this;
        }
        var _proto = JbpGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, JbpCtrl.instance);
          JbpUtils.instance.bundle = assetManager.getBundle(cBundle);
          JbpUtils.instance.preLoad();
          this.initUIView();
          JbpCtrl.instance.reqBetList();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
          EventManager.instance.on(eEvent.onRunEnd, this.onRunEnd, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.updateAutoSet, this.updateAutoSet, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
          EventManager.instance.off(eEvent.onRunEnd, this.onRunEnd, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.updateAutoSet, this.updateAutoSet, this);
          JbpModel.instance.clearGameData();
          JbpUtils.instance.stopAllSound();
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
              if (JbpModel.instance.isAuto && JbpCtrl.instance.isReqBet) {
                JbpCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          JbpUtils.instance.updateLabel(this.Label_bet, JbpUtils.instance.numberFormat(JbpModel.instance.curBet / 1000, 2.0) + "K");
        };
        _proto.updateAutoSet = function updateAutoSet() {
          if (!JbpModel.instance.isAuto && JbpModel.instance.autoTimes > 0 && JbpModel.instance.gameStatus == eRunStatus.NONE) {
            this.hJbpGameView.doReqBet();
          }
          JbpModel.instance.isAuto = JbpModel.instance.autoTimes > 0;
          this.Label_auto.node.active = JbpModel.instance.isAuto;
          this.Button_run.interactable = !JbpModel.instance.isAuto;
          JbpUtils.instance.updateLabel(this.Label_auto, "" + JbpModel.instance.autoTimes);
        };
        _proto.loadGameView = /*#__PURE__*/function () {
          var _loadGameView = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(runtype) {
            var _this2 = this;
            var isClear, _Node_gameView, Node_gameView, arrView;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (runtype === void 0) {
                    runtype = eRunType.NOMAL;
                  }
                  isClear = runtype != eRunType.FREE_0;
                  if (JbpModel.instance.runType != eRunType.NONE) {
                    _Node_gameView = this.Node_gameRoot.getChildByName("Node_gameView_" + JbpModel.instance.runType);
                    if (_Node_gameView) {
                      isClear ? _Node_gameView.destroyFromParent() : _Node_gameView.active = false;
                    }
                  }
                  JbpModel.instance.runType = runtype;
                  Node_gameView = this.Node_gameRoot.getChildByName("Node_gameView_" + runtype);
                  if (!Node_gameView) {
                    _context.next = 10;
                    break;
                  }
                  Node_gameView.active = true;

                  //@ts-ignore
                  this.hJbpGameView = Node_gameView.getComponent(CJbpGame);
                  _context.next = 15;
                  break;
                case 10:
                  arrView = ["Node_gameNomal", "Node_gameFree_0", "Node_gameFree_1"];
                  _context.next = 13;
                  return JbpUtils.instance.loadPopBuddle("prefab/main/" + arrView[runtype], function () {}, function (prefab) {
                    Node_gameView = instantiate(prefab);
                    Node_gameView.name = "Node_gameView_" + runtype;
                    _this2.Node_gameRoot.addChild(Node_gameView);
                  }, true);
                case 13:
                  //@ts-ignore
                  this.hJbpGameView = Node_gameView.getComponent(CJbpGame);
                  this.hJbpGameView.initUIView();
                case 15:
                  this.Node_uiBtnRoot.active = runtype == eRunType.NOMAL;
                  if (runtype == eRunType.NOMAL) {
                    if (JbpModel.instance.endBalance > 0) {
                      JbpModel.instance.curBalance = JbpModel.instance.endBalance;
                      JbpModel.instance.endBalance = 0;
                      this.updateGold();
                    }
                    if (JbpModel.instance.isAuto) {
                      this.Button_run.interactable = false;
                      this.scheduleOnce(function () {
                        _this2.hJbpGameView.doReqBet();
                      }, 5.0);
                    } else if (!this.Button_run.interactable) {
                      this.Button_run.interactable = true;
                    }
                  } else {
                    if (this.Node_setBase) {
                      this.Node_setBase.active = false;
                    }
                    if (this.Node_setAuto) {
                      this.Node_setAuto.active = false;
                    }
                  }
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadGameView(_x) {
            return _loadGameView.apply(this, arguments);
          }
          return loadGameView;
        }();
        _proto.initUIView = /*#__PURE__*/function () {
          var _initUIView = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return JbpUtils.instance.loadRes_icon();
                case 2:
                  this.loadGameView();
                  this.updateGold();
                  tween(this.Node_runTag).repeatForever(tween(this.Node_runTag).by(3, {
                    angle: -360
                  })).start();
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function initUIView() {
            return _initUIView.apply(this, arguments);
          }
          return initUIView;
        }();
        _proto.onMenuClick = function onMenuClick(event) {
          var _this3 = this;
          switch (event.target.name) {
            case "menuMask":
            case "Button_menu":
              {
                var toOpacity = this.Node_menu.active ? 0 : 255;
                var toScale = this.Node_menu.active ? 0 : 1.0;
                var offsetScale = 1.05;
                var tTimes_0 = this.Node_menu.active ? 0.2 : 0.075;
                var tTimes_1 = this.Node_menu.active ? 0.075 : 0.2;
                this.Node_menu.active = true;
                tween(this.Node_menu).to(tTimes_0, {
                  scale: v3(this.Node_menu.scale.x, offsetScale, 1)
                }).to(tTimes_1, {
                  scale: v3(this.Node_menu.scale.x, toScale, 1)
                }).call(function () {
                  _this3.Node_menu.active = _this3.Node_menu.getComponent(UIOpacity).opacity > 200;
                }).start();
                tween(this.Node_menu.getComponent(UIOpacity)).to(tTimes_0, {
                  opacity: toOpacity
                }).to(tTimes_1, {
                  opacity: toOpacity
                }).call(function () {
                  _this3.Node_menu.active = _this3.Node_menu.getComponent(UIOpacity).opacity > 200;
                }).start();
                break;
              }
            case "Button_return":
              {
                JbpCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_record":
              {
                GUtil.openRecord("slotBowl");
                break;
              }
            case "Button_rank":
              {
                GUtil.openRank("slotBowl");
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", JbpUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                break;
              }
          }
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this4 = this;
          if (JbpModel.instance.runType != eRunType.NOMAL) {
            return;
          }
          if (event instanceof Toggle) {
            switch (event.node.name) {
              case "Button_fast":
                {
                  //                    //快速停止
                  JbpModel.instance.isQuickStop = !JbpModel.instance.isQuickStop;
                  break;
                }
            }
            return;
          }
          switch (event.target.name) {
            case "Button_auto":
              {
                if (!this.Node_setAuto) {
                  Common.loadPopBuddle("prefab/Node_setAuto", JbpUtils.instance.bundle, function () {}, function (Node_setAuto) {
                    _this4.Node_setAuto = instantiate(Node_setAuto);
                    _this4.Node_uiRoot.addChild(_this4.Node_setAuto);
                  }, true);
                } else if (!this.Node_setAuto.active) {
                  this.Node_setAuto.active = true;
                } else {
                  this.Node_setAuto.getComponent(Jbp_setAuto).hide();
                }
                break;
              }
            case "Button_run":
              {
                if (JbpModel.instance.isAuto) {
                  break;
                }
                if (JbpModel.instance.gameStatus == eRunStatus.NONE) {
                  event.target.getComponent(Button).intantiate = false;
                  tween(event.target).delay(5).call(function () {
                    event.target.getComponent(Button).intantiate = true;
                  }).start();
                  this.hJbpGameView.doReqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (JbpModel.instance.isAuto) {
                  return;
                }
                if (!this.Node_setBase) {
                  Common.loadPopBuddle("prefab/Node_setBase", JbpUtils.instance.bundle, function () {}, function (Node_setBase) {
                    _this4.Node_setBase = instantiate(Node_setBase);
                    _this4.Node_uiRoot.addChild(_this4.Node_setBase);
                  }, true);
                } else if (!this.Node_setBase.active) {
                  this.Node_setBase.active = true;
                } else {
                  this.Node_setBase.getComponent(Jbp_setBase).hide();
                }
                break;
              }
          }
        };
        _proto.doStartRun = function doStartRun() {
          if (JbpModel.instance.runType == eRunType.NOMAL && JbpModel.instance.isAuto) {
            JbpModel.instance.autoTimes--;
            JbpUtils.instance.updateLabel(this.Label_auto, "" + JbpModel.instance.autoTimes);
            JbpModel.instance.isAuto = JbpModel.instance.autoTimes > 0;
            this.Label_auto.node.active = JbpModel.instance.isAuto;
          }
          tween(this.Node_runTag).stop().repeatForever(tween(this.Node_runTag).by(0.5, {
            angle: -360
          })).start();
          JbpModel.instance.gameStatus = eRunStatus.RUNNING;
          JbpUtils.instance.playOneShot(eSound.startRun);
          this.hJbpGameView.doStartRun();
        };
        _proto.onRunEnd = /*#__PURE__*/function () {
          var _onRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this5 = this;
            var delayStart, result;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  //        // gts.Debug.LogWarr("==Jbp=doRunEnd==");
                  JbpModel.instance.gameStatus = eRunStatus.END;
                  tween(this.Node_runTag).stop().repeatForever(tween(this.Node_runTag).by(3, {
                    angle: -360
                  })).start();
                  delayStart = 0.25;
                  this.Button_run.interactable = false;
                  result = JbpModel.instance.betResult;
                  _context3.t0 = JbpModel.instance.runType;
                  _context3.next = _context3.t0 === eRunType.NOMAL ? 8 : _context3.t0 === eRunType.FREE_0 ? 24 : _context3.t0 === eRunType.FREE_1 ? 36 : 41;
                  break;
                case 8:
                  if (!result.miniGamePrize) {
                    _context3.next = 15;
                    break;
                  }
                  JbpUtils.instance.playSound(eSound.nice_1);
                  _context3.next = 12;
                  return this.hJbpGameView.doRunEnd();
                case 12:
                  JbpUtils.instance.playSound(eSound.wild);

                  //                    //切换到免费模式0
                  this.scheduleOnce(function () {
                    _this5.loadGameView(eRunType.FREE_0);
                  }, 1.2);
                  return _context3.abrupt("return");
                case 15:
                  if (!(result.prizeAmount > 0)) {
                    _context3.next = 21;
                    break;
                  }
                  JbpUtils.instance.playSound(eSound.nice_0);
                  _context3.next = 19;
                  return this.hJbpGameView.doRunEnd();
                case 19:
                  delayStart = 0.5;
                  if (JbpModel.instance.endBalance > 0) {
                    JbpModel.instance.curBalance = JbpModel.instance.endBalance;
                    JbpModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                case 21:
                  JbpModel.instance.gameStatus = eRunStatus.NONE;
                  if (JbpModel.instance.isAuto) {
                    this.Button_run.interactable = false;
                    //                    // JbpUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), true);
                    this.scheduleOnce(function () {
                      _this5.hJbpGameView.doReqBet();
                    }, delayStart);
                  } else if (!this.Button_run.interactable) {
                    this.Button_run.interactable = true;
                    //                    // JbpUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                  }

                  return _context3.abrupt("break", 41);
                case 24:
                  _context3.next = 26;
                  return this.hJbpGameView.doRunEnd();
                case 26:
                  JbpModel.instance.gameStatus = eRunStatus.NONE;
                  if (!result.miniGamePrize) {
                    _context3.next = 34;
                    break;
                  }
                  JbpModel.instance.curBalance += JbpModel.instance.curTotalWin;
                  this.updateGold();

                  //                    //免费结束-切换到免费模式1
                  this.scheduleOnce(function () {
                    _this5.loadGameView(eRunType.FREE_1);
                  }, 2.25);
                  return _context3.abrupt("return");
                case 34:
                  if (result.surplusCount == 0 || function () {
                    for (var i = 0; i < result.openNums.length; i++) {
                      var symbolInfo = result.openNums[i];
                      if (symbolInfo.prizeAmount == 0) {
                        return false;
                      }
                    }
                    return true;
                  }()) {
                    //                    //免费结束-切换模式NOMAL
                    this.scheduleOnce(function () {
                      _this5.loadGameView(eRunType.NOMAL);
                    }, 1.0);
                  } else {
                    this.scheduleOnce(function () {
                      //                        // gts.Debug.LogWarr("==Jbp=doStartRun==" + JbpModel.instance.freeResult.length);
                      if (JbpModel.instance.freeResult.length > 0) {
                        _this5.doStartRun();
                      }
                    }, delayStart);
                  }
                case 35:
                  return _context3.abrupt("break", 41);
                case 36:
                  _context3.next = 38;
                  return this.hJbpGameView.doRunEnd();
                case 38:
                  JbpModel.instance.gameStatus = eRunStatus.NONE;
                  this.scheduleOnce(function () {
                    _this5.loadGameView(eRunType.NOMAL);
                  }, 2.5);
                  return _context3.abrupt("break", 41);
                case 41:
                  return _context3.abrupt("return");
                case 42:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function onRunEnd() {
            return _onRunEnd.apply(this, arguments);
          }
          return onRunEnd;
        }();
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(JbpModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            JbpUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                break;
              }
            case eProto.HD_BetList:
              {
                var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
                var baseBetIndex = sys.localStorage.getItem("baseBetIndex" + uid);
                JbpModel.instance.baseBetIndex = baseBetIndex == null ? 0 : baseBetIndex - 1;
                if (JbpModel.instance.baseBetIndex < JbpModel.instance.BetList.length) {
                  JbpModel.instance.curBet = JbpModel.instance.BetList[JbpModel.instance.baseBetIndex];
                } else {
                  JbpModel.instance.curBet = 2100;
                }
                this.updateBaseBet();
                break;
              }
            case eProto.HD_Bet:
              {
                if (!JbpModel.instance.isAuto) {
                  this.Button_run.interactable = true;
                  JbpUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                }
                this.doStartRun();
                this.updateGold();
                break;
              }
            case eProto.HD_BetMiniGame1:
            case eProto.HD_BetMiniGame2:
              {
                //                // gts.Debug.LogWarr("==Jbp=doStartRun=HD_BetMiniGame2=");
                this.doStartRun();
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
        return JbpGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_gameRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_uiRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_uiBtnRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_runTag", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec9], {
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_auto", [_dec11], {
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

System.register("chunks:///_virtual/JbpModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './JbpDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameDef, eRunType, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunType = module.eRunType;
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "680337yB9pM/7seRdkGxKzE", "JbpModel", undefined);
      var JbpModel = exports('JbpModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(JbpModel, _GameDef$BaseSington);
        function JbpModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.runType = eRunType.NONE;
          _this.curFreeTimes = 0;
          _this.totalFreeTimes = 0;
          _this.gameStatus = eRunStatus.NONE;
          _this.BetList = null;
          _this.autoTimes = 0;
          _this.isAuto = false;
          _this.isQuickStop = false;
          _this.curBet = 2.0;
          _this.baseBetIndex = 0;
          _this.curTotalWin = 0;
          _this.betResult = null;
          _this.symbolList = [];
          _this.freeResult = null;
          return _this;
        }
        var _proto = JbpModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        return JbpModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JbpScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './JbpDef.ts', './JbpUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, JbpUtils, Common;
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
      JbpUtils = module.JbpUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "60b92tLMZxDZbPw4nuRmPsD", "JbpScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var JbpScene = exports('default', (_dec = ccclass("JbpScene"), _dec2 = menu("game/JbpGame/JbpScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JbpScene, _Component);
        function JbpScene() {
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
        var _proto = JbpScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          JbpUtils.instance.bundle = assetManager.getBundle(cBundle);
          JbpUtils.instance.preLoad();
          JbpUtils.instance.playBgMusic();
          this.onLoadGame();
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onLoadHall = function onLoadHall() {
          console.time("bundle.onLoadHall");
          Common.showWait();
          // if (ViewManager.instance.miniLayer) {
          //     ViewManager.instance.miniLayer.getChildByName("miniGame").rotation = 0;
          // }
          //        //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this2 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            JbpUtils.instance.bundle.load("prefab/main/JbpGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this2.prefab_game = prefab;
              _this2.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this3 = this;
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              //                // this._node_Game.opacity = 0;
              fadeInTimes = 0.15;
            }
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              if (_this3.firstNode) {
                _this3.firstNode.destroyFromParent();
              }
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
        return JbpScene;
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

System.register("chunks:///_virtual/JbpUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './JbpDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, SpriteFrame, sp, GameDef, AudioManager, eSound, eSymbol, symbol_dataName, symbol_nomal_icon, Common;
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
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSound = module.eSound;
      eSymbol = module.eSymbol;
      symbol_dataName = module.symbol_dataName;
      symbol_nomal_icon = module.symbol_nomal_icon;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "59f38I293NOgYzBqSPqTg5O", "JbpUtils", undefined);
      var JbpUtils = exports('JbpUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(JbpUtils, _GameDef$BaseSington);
        function JbpUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          //    //animationName:{icon_wild:{idle,boom},icon_hu:{idle,intro}}
          //    // icon_hu:{icon_fa:["faidle","fa"]}
          _this.arrIconSkeletonData = {};
          //0:icon, 1:icon_wild, 2:add1spin
          _this.arrIconSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = JbpUtils.prototype;
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/JbpGameView");
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
          var _loadRes_icon = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
                  return _context3.abrupt("return", Promise.all(arrHLoad));
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function loadRes_icon() {
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
        _proto.playBgMusic = function playBgMusic() {
          AudioManager.instance.playBgMusic(eSound.bg, this.bundle, true);
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
            if (err) {
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
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat) {
          var _this7 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.1).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this7.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this7.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(2.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        }
        //    //////////////////////////
        ;

        _proto.getRandSymbol = function getRandSymbol() {
          var symbolIndex = Math.random() > 0.9 ? eSymbol.ARBITRARY : Math.floor(Math.random() * eSymbol.GOURD + 1);
          return symbolIndex;
        };
        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex) {
          var index = symbolIndex - 1;
          if (this.arrIconSpriteFrame) {
            var symbol = symbol_nomal_icon[index];
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getItemSymbolSpine = function getItemSymbolSpine(symbolIndex) {
          if (this.arrIconSkeletonData) {
            switch (symbolIndex) {
              case eSymbol.ARBITRARY:
                {
                  return this.arrIconSkeletonData["icon_wild"];
                }
              case eSymbol.Free:
                {
                  return this.arrIconSkeletonData["add1spin"];
                }
              default:
                {
                  return this.arrIconSkeletonData["icon"];
                }
            }
          }
          return null;
        }
        //    // ani==add1spin status=0
        ;

        _proto.getItemSymbolAni = function getItemSymbolAni(symbolIndex, status) {
          if (status === void 0) {
            status = 0;
          }
          var index = symbolIndex - 1;
          if (symbolIndex == eSymbol.Free) {
            index += status;
          }
          return symbol_dataName[index];
        };
        _proto.setBtnBetGray = function setBtnBetGray(btnNode, isGray) {
          Common.changeNodeEffect(btnNode, isGray);
        };
        return JbpUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/JbpGame', 'chunks:///_virtual/JbpGame'); 
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