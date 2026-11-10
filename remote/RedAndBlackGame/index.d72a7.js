System.register("chunks:///_virtual/RB_UIBigEyeRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RedAndBlackModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, instantiate, Tween, v3, Sprite, tween, Component, RedAndBlackModel;
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
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Tween = module.Tween;
      v3 = module.v3;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      RedAndBlackModel = module.RedAndBlackModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "d0dd7glj+VEL4ac3fWgtDx3", "RB_UIBigEyeRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RB_UIBigEyeRoad = exports('default', (_dec = ccclass("RB_UIBigEyeRoad"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RB_UIBigEyeRoad, _Component);
        function RB_UIBigEyeRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RB_UIBigEyeRoad.prototype;
        _proto.start = function start() {};
        _proto.UpdateUI = function UpdateUI() {
          var rowNum = 6;
          var colNum = 42;
          var startPosX = 11;
          var startPosY = -10;
          var distanceX = 20;
          var distanceY = 20;
          var startCol = RedAndBlackModel.instance.bigEyeRoadMap.length > colNum ? RedAndBlackModel.instance.bigEyeRoadMap.length - colNum : 0;
          var history = RedAndBlackModel.instance.bigEyeRoadMap.slice(startCol);
          var iCount = 0;
          for (var iCol = 0; iCol < history.length; iCol++) {
            var arrValue = history[iCol];
            for (var iRow = 0; iRow < rowNum; iRow++) {
              var value = arrValue[iRow];
              if (value) {
                var newItem = this.content.getChildByName("Node_item_" + iCount);
                if (!newItem) {
                  newItem = instantiate(this.itemTemp);
                  newItem.name = "Node_item_" + iCount;
                  this.content.addChild(newItem);
                }
                Tween.stopAllByTarget(newItem);
                newItem.active = true;
                var pos = v3(startPosX + iCol * distanceX, startPosY - iRow * distanceY, 0);
                newItem.position = pos;
                newItem.getComponent(Sprite).spriteFrame = this.imgs[value - 1];
                iCount++;
              }
            }
          }
          var lastItem = this.content.children[this.content.children.length - 1];
          tween(lastItem).to(0.3, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
        };
        return RB_UIBigEyeRoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec4], {
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

System.register("chunks:///_virtual/RB_UIBigRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RedAndBlackModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, instantiate, Tween, v3, Sprite, tween, Component, RedAndBlackModel;
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
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Tween = module.Tween;
      v3 = module.v3;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      RedAndBlackModel = module.RedAndBlackModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "3a1a1lu/DtNnqqIUq/HiFoP", "RB_UIBigRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RB_UIBigRoad = exports('default', (_dec = ccclass("RB_UIBigRoad"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RB_UIBigRoad, _Component);
        function RB_UIBigRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RB_UIBigRoad.prototype;
        /////////////////////////////////////////
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.UpdateUI = function UpdateUI() {
          var rowNum = 6;
          var colNum = 21;
          var startPosX = 21;
          var startPosY = -21;
          var distanceX = 40;
          var distanceY = 40;
          var startCol = RedAndBlackModel.instance.bigRoadMap.length > colNum ? RedAndBlackModel.instance.bigRoadMap.length - colNum : 0;
          var history = RedAndBlackModel.instance.bigRoadMap.slice(startCol);
          var iCount = 0;
          for (var iCol = 0; iCol < history.length; iCol++) {
            var arrValue = history[iCol];
            for (var iRow = 0; iRow < rowNum; iRow++) {
              var value = arrValue[iRow];
              if (value) {
                var newItem = this.content.getChildByName("Node_item_" + iCount);
                if (!newItem) {
                  newItem = instantiate(this.itemTemp);
                  newItem.name = "Node_item_" + iCount;
                  this.content.addChild(newItem);
                }
                Tween.stopAllByTarget(newItem);
                newItem.active = true;
                var pos = v3(startPosX + iCol * distanceX, startPosY - iRow * distanceY, 0);
                newItem.position = pos;
                newItem.getComponent(Sprite).spriteFrame = this.imgs[value - 1];
                iCount++;
              }
            }
          }
          var lastItem = this.content.children[this.content.children.length - 1];
          tween(lastItem).to(0.3, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
        }
        // UpdateUI() {
        //     const rowNum = 6;
        //     const colNum = 21;
        //     const startPosX = 21;
        //     const startPosY = -21;
        //     const distanceX = 40;
        //     const distanceY = 40;

        //     let isBigBack = false;
        //     let iCol_real = 0;
        //     let iCol_add = 0;
        //     let iRow = 0;
        //     let itemMap: { [index: string]: boolean } = {};

        //     let history = RedAndBlackModel.instance.history.slice(0, 105);
        //     let openResults = history.reverse();

        //     let maxCol = 0;
        //     for (let i = 0; i < openResults.length; i++) {
        //         //3-10:小  11-18：大
        //         let openInfo = openResults[i];
        //         let isBig = openInfo.winner == 1;

        //         let newItem = this.content.getChildByName(`Node_item_${i}`);
        //         if (!newItem) {
        //             newItem = instantiate(this.itemTemp);
        //             newItem.name = `Node_item_${i}`;
        //             this.content.addChild(newItem);
        //         }

        //         newItem.active = true;
        //         newItem.getComponent(Sprite).spriteFrame = this.imgs[isBig ? 0 : 1];

        //         if (i != 0) {
        //             if (isBigBack != isBig) {
        //                 iRow = 0;
        //                 iCol_real++;
        //                 iCol_add = 0;
        //             } else if (iCol_add == 0 && iRow < rowNum - 1 && !itemMap[(iCol_real + iCol_add) * rowNum + colNum * (iRow + 1)]) {
        //                 iRow++;
        //             } else {
        //                 iCol_add++;
        //             }
        //         }
        //         Tween.stopAllByTarget(newItem);
        //         if (i == openResults.length - 1) {
        //             tween(newItem)
        //                 .to(0.3, { scale: v3(1.2, 1.2, 1.2) })
        //                 .to(0.3, { scale: v3(1, 1, 1) })
        //                 .union()
        //                 .repeatForever()
        //                 .start();
        //         }

        //         let pos = v3(startPosX + (iCol_real + iCol_add) * distanceX, startPosY - iRow * distanceY, 0);
        //         newItem.position = pos;

        //         isBigBack = isBig;
        //         itemMap[(iCol_real + iCol_add) * rowNum + colNum * iRow] = true;
        //         if (iCol_real + iCol_add > maxCol) {
        //             maxCol = iCol_real + iCol_add;
        //         }
        //     }

        //     let curPos = v3(-420, 120, 0);
        //     if (maxCol >= colNum) {
        //         curPos.x -= (maxCol - colNum + 1) * distanceX;
        //     }
        //     this.content.position = curPos;
        // }
        ;

        return RB_UIBigRoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec4], {
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

System.register("chunks:///_virtual/RB_UICockroach.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RedAndBlackModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, instantiate, Tween, v3, Sprite, tween, Component, RedAndBlackModel;
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
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Tween = module.Tween;
      v3 = module.v3;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      RedAndBlackModel = module.RedAndBlackModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a55absWdNVDWK5MHz0aBM93", "RB_UICockroach", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RB_UICockroach = exports('default', (_dec = ccclass("RB_UICockroach"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RB_UICockroach, _Component);
        function RB_UICockroach() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RB_UICockroach.prototype;
        _proto.start = function start() {};
        _proto.UpdateUI = function UpdateUI() {
          var rowNum = 6;
          var colNum = 21;
          var startPosX = 11;
          var startPosY = -10;
          var distanceX = 20;
          var distanceY = 20;
          var startCol = RedAndBlackModel.instance.roachRoadMap.length > colNum ? RedAndBlackModel.instance.roachRoadMap.length - colNum : 0;
          var history = RedAndBlackModel.instance.roachRoadMap.slice(startCol);
          var iCount = 0;
          for (var iCol = 0; iCol < history.length; iCol++) {
            var arrValue = history[iCol];
            for (var iRow = 0; iRow < rowNum; iRow++) {
              var value = arrValue[iRow];
              if (value) {
                var newItem = this.content.getChildByName("Node_item_" + iCount);
                if (!newItem) {
                  newItem = instantiate(this.itemTemp);
                  newItem.name = "Node_item_" + iCount;
                  this.content.addChild(newItem);
                }
                Tween.stopAllByTarget(newItem);
                newItem.active = true;
                var pos = v3(startPosX + iCol * distanceX, startPosY - iRow * distanceY, 0);
                newItem.position = pos;
                newItem.getComponent(Sprite).spriteFrame = this.imgs[value - 1];
                iCount++;
              }
            }
          }
          var lastItem = this.content.children[this.content.children.length - 1];
          tween(lastItem).to(0.3, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
        };
        return RB_UICockroach;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec4], {
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

System.register("chunks:///_virtual/RB_UIDishRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RedAndBlackModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, instantiate, Tween, Sprite, tween, v3, Component, RedAndBlackModel;
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
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Tween = module.Tween;
      Sprite = module.Sprite;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      RedAndBlackModel = module.RedAndBlackModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "4dcbcPwAVhFLpHwJleRhm3o", "RB_UIDishRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // import RB_UIDishRoadItem from "./RB_UIDishRoadItem";
      var RB_UIDishRoad = exports('default', (_dec = ccclass("RB_UIDishRoad"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RB_UIDishRoad, _Component);
        function RB_UIDishRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cloneTarget", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprResults", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RB_UIDishRoad.prototype;
        _proto.UpdateUI = function UpdateUI() {
          var history = RedAndBlackModel.instance.history.slice(0, 105).reverse();
          for (var i = 0; i < history.length; i++) {
            var item = this.node.getChildByName("item_" + i);
            if (!item) {
              item = instantiate(this.cloneTarget);
              item.name = "item_" + i;
              this.node.addChild(item);
            }
            Tween.stopAllByTarget(item);
            item.active = true;
            var result = history[i];
            item.getComponent(Sprite).spriteFrame = this.sprResults[result.winner - 1];
            Tween.stopAllByTarget(item);
            if (i == history.length - 1) {
              tween(item).to(0.3, {
                scale: v3(1.2, 1.2, 1.2)
              }).to(0.3, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }
          }
          if (this.node.children.length > history.length) {
            for (var _i = history.length; _i < this.node.children.length; _i++) {
              var _item = this.node.getChildByName("item_" + _i);
              _item.active = false;
            }
          }
        };
        return RB_UIDishRoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cloneTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprResults", [_dec3], {
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

System.register("chunks:///_virtual/RB_UIRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RedAndBlackModel.ts', './RedAndBlackDef.ts', './RB_UIRecordItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, instantiate, Tween, Sprite, tween, v3, Component, RedAndBlackModel, eCardType, RB_UIRecordItem;
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
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Tween = module.Tween;
      Sprite = module.Sprite;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      RedAndBlackModel = module.RedAndBlackModel;
    }, function (module) {
      eCardType = module.eCardType;
    }, function (module) {
      RB_UIRecordItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ca21akZtVVGdpSKLmN74pj/", "RB_UIRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RB_UIRecord = exports('default', (_dec = ccclass("RB_UIRecord"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RB_UIRecord, _Component);
        function RB_UIRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RB_UIRecord.prototype;
        _proto.start = function start() {};
        _proto.UpdateUI = function UpdateUI() {
          var history = RedAndBlackModel.instance.history.slice(0, 25).reverse();
          for (var i = 0; i < history.length; i++) {
            var result = history[i];
            var newItem = this.content.getChildByName("Node_item_" + i);
            if (!newItem) {
              newItem = instantiate(this.itemTemp);
              newItem.name = "Node_item_" + i;
              this.content.addChild(newItem);
            }
            Tween.stopAllByTarget(newItem);
            newItem.active = true;
            newItem.getComponent(Sprite).spriteFrame = this.imgs[result.winnerType == eCardType.highCard ? 0 : 1];
            var comItem = newItem.getComponent(RB_UIRecordItem);
            comItem.setType(result.winnerType);
          }
          var lastItem = this.content.children[this.content.children.length - 1];
          tween(lastItem).to(0.3, {
            scale: v3(1.1, 1.1, 1.1)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
        };
        return RB_UIRecord;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec4], {
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

System.register("chunks:///_virtual/RB_UIRecordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RedAndBlackDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, color, Component, strCardType, eCardType;
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
      color = module.color;
      Component = module.Component;
    }, function (module) {
      strCardType = module.strCardType;
      eCardType = module.eCardType;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ae81eVoZFpJzrqeLGxsH5dl", "RB_UIRecordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RB_UIRecordItem = exports('default', (_dec = ccclass("RB_UIRecordItem"), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RB_UIRecordItem, _Component);
        function RB_UIRecordItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_type", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RB_UIRecordItem.prototype;
        _proto.setType = function setType(type, isPath) {
          if (isPath === void 0) {
            isPath = true;
          }
          this.Label_type.string = "" + strCardType[type - 1];
          if (isPath) {
            this.Label_type.color = type == eCardType.highCard ? color(0, 112, 148, 255) : color(148, 106, 0, 255);
          } else {
            this.Label_type.color = type == eCardType.highCard ? color(201, 249, 255, 255) : color(253, 254, 139, 255);
          }
        };
        return RB_UIRecordItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_type", [_dec2], {
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

System.register("chunks:///_virtual/RB_UISmallRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RedAndBlackModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, instantiate, Tween, v3, Sprite, tween, Component, RedAndBlackModel;
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
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Tween = module.Tween;
      v3 = module.v3;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      RedAndBlackModel = module.RedAndBlackModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "57f08Nq/YJEXZ5i89LNgxYm", "RB_UISmallRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UISmallRoad = exports('default', (_dec = ccclass("UISmallRoad"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UISmallRoad, _Component);
        function UISmallRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UISmallRoad.prototype;
        _proto.start = function start() {};
        _proto.UpdateUI = function UpdateUI() {
          var rowNum = 6;
          var colNum = 21;
          var startPosX = 11;
          var startPosY = -10;
          var distanceX = 20;
          var distanceY = 20;
          var startCol = RedAndBlackModel.instance.smallRoadMap.length > colNum ? RedAndBlackModel.instance.smallRoadMap.length - colNum : 0;
          var history = RedAndBlackModel.instance.smallRoadMap.slice(startCol);
          var iCount = 0;
          for (var iCol = 0; iCol < history.length; iCol++) {
            var arrValue = history[iCol];
            for (var iRow = 0; iRow < rowNum; iRow++) {
              var value = arrValue[iRow];
              if (value) {
                var newItem = this.content.getChildByName("Node_item_" + iCount);
                if (!newItem) {
                  newItem = instantiate(this.itemTemp);
                  newItem.name = "Node_item_" + iCount;
                  this.content.addChild(newItem);
                }
                Tween.stopAllByTarget(newItem);
                newItem.active = true;
                var pos = v3(startPosX + iCol * distanceX, startPosY - iRow * distanceY, 0);
                newItem.position = pos;
                newItem.getComponent(Sprite).spriteFrame = this.imgs[value - 1];
                iCount++;
              }
            }
          }
          var lastItem = this.content.children[this.content.children.length - 1];
          tween(lastItem).to(0.3, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
        };
        return UISmallRoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec4], {
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

System.register("chunks:///_virtual/RedAndBlack_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "067197ADIRISpwrzjmb5LyB", "RedAndBlack_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var RedAndBlack_btnEffect = exports('default', (_dec = ccclass("RedAndBlackBtnEffect"), _dec2 = menu("game/RedAndBlackGame/RedAndBlack_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RedAndBlack_btnEffect, _Component);
        function RedAndBlack_btnEffect() {
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
        var _proto = RedAndBlack_btnEffect.prototype;
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

        _createClass(RedAndBlack_btnEffect, [{
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

        return RedAndBlack_btnEffect;
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

System.register("chunks:///_virtual/RedAndBlack_path.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RedAndBlackModel.ts', './RB_UIBigRoad.ts', './RB_UISmallRoad.ts', './RB_UIBigEyeRoad.ts', './RB_UICockroach.ts', './RB_UIDishRoad.ts', './RedAndBlackUtils.ts', './RB_UIRecord.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Sprite, Component, RedAndBlackModel, RB_UIBigRoad, UISmallRoad, RB_UIBigEyeRoad, RB_UICockroach, RB_UIDishRoad, RedAndBlackUtils, RB_UIRecord;
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
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      RedAndBlackModel = module.RedAndBlackModel;
    }, function (module) {
      RB_UIBigRoad = module.default;
    }, function (module) {
      UISmallRoad = module.default;
    }, function (module) {
      RB_UIBigEyeRoad = module.default;
    }, function (module) {
      RB_UICockroach = module.default;
    }, function (module) {
      RB_UIDishRoad = module.default;
    }, function (module) {
      RedAndBlackUtils = module.RedAndBlackUtils;
    }, function (module) {
      RB_UIRecord = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "a9956HTOL9DgJGf/yiic3n2", "RedAndBlack_path", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var RedAndBlack_path = exports('default', (_dec = ccclass("RedAndBlack_path"), _dec2 = menu("game/RedAndBlackGame/RedAndBlack_path"), _dec3 = property(Node), _dec4 = property(RB_UIDishRoad), _dec5 = property({
        displayName: "大路",
        type: RB_UIBigRoad
      }), _dec6 = property({
        displayName: "小路",
        type: UISmallRoad
      }), _dec7 = property({
        displayName: "大眼路",
        type: RB_UIBigEyeRoad
      }), _dec8 = property({
        displayName: "蟑螂路",
        type: RB_UICockroach
      }), _dec9 = property(RB_UIRecord), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RedAndBlack_path, _Component);
        function RedAndBlack_path() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_progress", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiDishRoad", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiBigRoad", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiSmallRoad", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiBigEyeRoad", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiCockroach", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiRecord", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RedAndBlack_path.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {
          this.updatePath();
        };
        _proto.updatePath = function updatePath() {
          var history = RedAndBlackModel.instance.history.slice(0, 105).reverse();
          var percentBar = this.Node_progress.getChildByName("percentBar");
          var Label_red = this.Node_progress.getChildByName("Label_red");
          var Label_black = this.Node_progress.getChildByName("Label_black");
          var Label_info = this.Node_progress.getChildByName("Label_info");
          Label_info.getComponent(Label).string = "recent " + history.length + " round trends";
          var percentRed = 0;
          for (var i = 0; i < history.length; i++) {
            var result = history[i];
            percentRed = result.winner == 1 ? percentRed + 1 : percentRed;
          }
          var rate = Math.floor(percentRed * 10000 / history.length) / 100;
          Label_red.getComponent(Label).string = rate + "%";
          Label_black.getComponent(Label).string = 100 - rate + "%";
          percentBar.getComponent(Sprite).fillRange = rate / 100;

          /////////////////////////////////////////////////////////////////////////
          // this.UIBigRoad.UpdateUI();
          if (this.uiDishRoad) {
            this.uiDishRoad.UpdateUI();
          }
          RedAndBlackUtils.instance.parseBigRoad();
          if (this.uiBigRoad) {
            this.uiBigRoad.UpdateUI();
          }
          RedAndBlackUtils.instance.parseBigEyeRoad();
          if (this.uiBigEyeRoad) {
            this.uiBigEyeRoad.UpdateUI();
          }
          RedAndBlackUtils.instance.parseSmallRoad();
          if (this.uiSmallRoad) {
            this.uiSmallRoad.UpdateUI();
          }
          RedAndBlackUtils.instance.parseRoachRoad();
          if (this.uiCockroach) {
            this.uiCockroach.UpdateUI();
          }
          if (this.uiRecord) {
            this.uiRecord.UpdateUI();
          }
        };
        return RedAndBlack_path;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_progress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiDishRoad", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uiBigRoad", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "uiSmallRoad", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiBigEyeRoad", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "uiCockroach", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "uiRecord", [_dec9], {
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

System.register("chunks:///_virtual/RedAndBlack_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "f5589LToYpLyp8qbGFjMVRx", "RedAndBlack_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var RedAndBlack_rank = exports('default', (_dec = ccclass("RedAndBlack_rank"), _dec2 = menu("game/RedAndBlackGame/RedAndBlack_rank"), _dec3 = property(gts.List), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RedAndBlack_rank, _Component);
        function RedAndBlack_rank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lastPage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextPage", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor4, _assertThisInitialized(_this));
          _this.maxPage = 0;
          _this.curPage = 0;
          return _this;
        }
        var _proto = RedAndBlack_rank.prototype;
        _proto.onLoad = function onLoad() {
          // Common.showWait();
          // this.scheduleOnce(Common.closeWait, 3.0);
        };
        _proto.onEnable = function onEnable() {
          // EventManager.instance.on(RedAndBlackDef.eProto.HD_GetWinLoseRank, this.onRecvData, this);
        };
        _proto.onDisable = function onDisable() {
          // EventManager.instance.off(RedAndBlackDef.eProto.HD_GetWinLoseRank, this.onRecvData, this);
        };
        _proto.start = function start() {
          // NetManager.instance.sendOnlineData(RedAndBlackDef.eProto.HD_GetWinLoseRank, {
          //     tableId: RedAndBlackModel.instance.gameInfo.tableInfo.tableId,
          //     index: this.curPage,
          // });
        };
        _proto.onBtnClick_last = function onBtnClick_last() {
          if (this.curPage > 0) {
            this.curPage--;
          }

          // NetManager.instance.sendOnlineData(RedAndBlackDef.eProto.HD_GetWinLoseRank, {
          //     tableId: RedAndBlackModel.instance.gameInfo.tableInfo.tableId,
          //     index: this.curPage,
          // });

          this.lastPage.active = this.curPage > 0;
          this.nextPage.active = this.curPage < this.maxPage - 1;
        };
        _proto.onBtnClick_next = function onBtnClick_next() {
          if (this.curPage < this.maxPage - 1) {
            this.curPage++;
          }

          // NetManager.instance.sendOnlineData(RedAndBlackDef.eProto.HD_GetWinLoseRank, {
          //     tableId: RedAndBlackModel.instance.gameInfo.tableInfo.tableId,
          //     index: this.curPage,
          // });

          this.lastPage.active = this.curPage > 0;
          this.nextPage.active = this.curPage < this.maxPage - 1;
        };
        _proto.onRecvData = function onRecvData(data) {
          // switch (data.cmd) {
          //     case RedAndBlackDef.eProto.HD_GetWinLoseRank: {
          //         let rankInfo: RedAndBlackDef.IRank = data.Data;
          //         this.maxPage = rankInfo.size;
          //         let rankList = rankInfo.data.slice();
          //         rankList.sort((a, b) => {
          //             return a.starOdds != b.starOdds ? b.starOdds - a.starOdds : b.prizeAmount - a.prizeAmount;
          //         });
          //         if (rankList.length > 0) {
          //             this.Label_gameNo.string = `No. ${rankList[0].gameNo}`;
          //         } else {
          //             this.Label_gameNo.string = `No. `;
          //         }
          //         this.scrollView_content.setData(rankList);
          //         this.scrollView_content.refresh();
          //         break;
          //     }
          // }
        };
        return RedAndBlack_rank;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lastPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nextPage", [_dec5], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RedAndBlack_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "d795eDppWZPI6hHYsRTqtkA", "RedAndBlack_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var RedAndBlack_rankItem = exports('default', (_dec = ccclass("RedAndBlack_rankItem"), _dec2 = menu("game/RedAndBlackGame/RedAndBlack_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Sprite), _dec13 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RedAndBlack_rankItem, _Component);
        function RedAndBlack_rankItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_rank", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rank", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_palyer", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_num", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprAvatar", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameRank", _descriptor11, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = RedAndBlack_rankItem.prototype;
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
          // let tempData: RedAndBlackDef.IRankItem = this.item.data;
          // // let date = Common.getTimeFormat(tempData.CreateAt);
          // this.Label_bet.string = `${Common.ChangeMoneyFormat(tempData.betAmount, 2)}`;
          // this.Sprite_rank.node.active = this.item.itemIndex < 3;
          // this.Label_rank.node.active = !this.Sprite_rank.node.active;
          // if (this.Label_rank.node.active) {
          //     this.Label_rank.string = `${this.item.itemIndex + 1}`;
          // }
          // if (this.Sprite_rank.node.active) {
          //     this.Sprite_rank.spriteFrame = this.spriteFrameRank[this.item.itemIndex];
          // }
          // if (tempData.avatar) {
          //     Common.getHead(tempData.avatar, this.sprAvatar);
          // }
          // if (tempData.nickName) {
          //     Common.nickNameFormatL(this.Label_palyer, `${tempData.nickName}`);
          // }
          // let str: string = "";
          // if (tempData.prizeAmount > 0) {
          //     str = `+${Common.ChangeMoneyFormat(tempData.prizeAmount, 2)}`;
          //     this.Label_win.color = color(255, 0, 0, 255);
          // } else if (tempData.prizeAmount <= 0) {
          //     str = `${Common.ChangeMoneyFormat(tempData.prizeAmount, 2)}`;
          //     this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          // }
          // this.Label_win.string = str;
          // this.Label_num.string = `x${tempData.starOdds}`;
          // // let result: RedAndBlackDef.openResult = JSON.parse(tempData.);
          // // let Sprite_star = this.Node_result.getChildByName("Sprite_star");
          // // let starKeys = Object.keys(result.star);
          // // Sprite_star.active = starKeys.length > 0;
          // // let Sprite_dice_0 = this.Node_result.getChildByName("Sprite_dice_0");
          // // let Sprite_dice_1 = this.Node_result.getChildByName("Sprite_dice_1");
          // // Sprite_dice_0.getComponent(Sprite).spriteFrame = this.spriteFrameDice[result.openNums[0] - 1];
          // // Sprite_dice_1.getComponent(Sprite).spriteFrame = this.spriteFrameDice[result.openNums[1] - 1];
          // // let Sprite_num = this.Node_result.getChildByName("Sprite_num");
          // // let num = result.openNums[0] + result.openNums[1];
          // // Sprite_num.getComponent(Sprite).spriteFrame = num == 7 ? this.spriteFrameResult[1] : num < 7 ? this.spriteFrameResult[0] : this.spriteFrameResult[2];
          // // this.Label_num.string = `${num}`;
        };
        _createClass(RedAndBlack_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return RedAndBlack_rankItem;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_rank", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_rank", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_palyer", [_dec8], {
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_num", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sprAvatar", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameRank", [_dec13], {
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

System.register("chunks:///_virtual/RedAndBlack_record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './NetManager.ts', './RedAndBlackDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "defffzp6XBJF5DJrm6LZP1o", "RedAndBlack_record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var RedAndBlack_record = exports('default', (_dec = ccclass("RedAndBlack_record"), _dec2 = menu("game/RedAndBlackGame/RedAndBlack_record"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RedAndBlack_record, _Component);
        function RedAndBlack_record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RedAndBlack_record.prototype;
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
            RecordType: "redAndBlack"
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
        return RedAndBlack_record;
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

System.register("chunks:///_virtual/RedAndBlack_recordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts', './RedAndBlackDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Sprite, SpriteFrame, UIOpacity, color, Component, AutoChangeParent, Common, strCardType;
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
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      strCardType = module.strCardType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "ff2a8JSsqJCOL4sGi815UVk", "RedAndBlack_recordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var RedAndBlack_recordItem = exports('default', (_dec = ccclass("RedAndBlack_recordItem"), _dec2 = menu("game/RedAndBlackGame/RedAndBlack_recordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Sprite), _dec12 = property(SpriteFrame), _dec13 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RedAndBlack_recordItem, _Component);
        function RedAndBlack_recordItem() {
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
          _initializerDefineProperty(_this, "Sprite_result", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSprResult", _descriptor10, _assertThisInitialized(_this));
          // @property(Sprite)
          // Node_resultBg: Sprite = null;
          _initializerDefineProperty(_this, "Label_resultNum", _descriptor11, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = RedAndBlack_recordItem.prototype;
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
          this.Sprite_bg.active = true; //this.item.itemIndex % 2 != 0;

          this.Label_gameNo.string = Common.setGameNo(tempData.GameNo);
          var date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_time.string = date.time;
          this.Label_date.string = date.date;
          this.Label_bet.string = "" + Common.ChangeMoneyFormat(tempData.BetAmount, 2);
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + Common.ChangeMoneyFormat(tempData.Income, 2);
            this.Label_win.color = color(150, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + Common.ChangeMoneyFormat(tempData.Income, 2);
            this.Label_win.color = color(0, 150, 0, 255);
          }
          this.Label_win.string = str;
          var result = JSON.parse(tempData.GameResult);
          this.Label_resultNum.string = "" + strCardType[result.winnerType - 1];
          this.Sprite_result.spriteFrame = this.arrSprResult[result.winner - 1];
        };
        _createClass(RedAndBlack_recordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return RedAndBlack_recordItem;
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_result", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "arrSprResult", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Label_resultNum", [_dec13], {
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

System.register("chunks:///_virtual/RedAndBlack_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RedAndBlackUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, RedAndBlackUtils;
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
      RedAndBlackUtils = module.RedAndBlackUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ec7f4w8mXRNQIMSlOVgTVBm", "RedAndBlack_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var RedAndBlack_winTip = exports('default', (_dec = ccclass("RedAndBlackWinTip"), _dec2 = menu("game/RedAndBlackGame/RedAndBlack_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RedAndBlack_winTip, _Component);
        function RedAndBlack_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RedAndBlack_winTip.prototype;
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
            _this2.Label_win.string = RedAndBlackUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            RedAndBlackUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${RedAndBlackUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            RedAndBlackUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return RedAndBlack_winTip;
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

System.register("chunks:///_virtual/RedAndBlackCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './DataManager.ts', './NetManager.ts', './RedAndBlackDef.ts', './RedAndBlackModel.ts', './Common.ts', './ViewManager.ts', './EventManager.ts', './ConfigManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, sys, assetManager, i18n, GameDef, DataManager, UserKey, NetManager, eProto, eEvent, cBundle, RedAndBlackModel, Common, ViewManager, EventManager, ConfigManager;
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
      GameDef = module.GameDef;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      cBundle = module.cBundle;
    }, function (module) {
      RedAndBlackModel = module.RedAndBlackModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "74419U/dCpGTKTYx8XjFr1F", "RedAndBlackCtrl", undefined);
      var RedAndBlackCtrl = exports('RedAndBlackCtrl', /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(RedAndBlackCtrl, _GameDef$BaseCtrl);
        function RedAndBlackCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          /**
           * 请求下注
           * @param data
           */
          _this.isReqBet = false;
          return _this;
        }
        var _proto = RedAndBlackCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete RedAndBlackCtrl._instance;
          RedAndBlackCtrl._instance = null;
          RedAndBlackModel.destroy();
        }
        //    //baseCtrl/////////////////////////////////////
        //    //#region baseCtrl
        ;

        _proto.initProto = function initProto() {
          //        //注册网络监听--本游戏
          for (var _i = 0, _Object$entries = Object.entries(eProto); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            EventManager.instance.on(value, this.onRecvData, this);
          }

          //        //注册网络监听--大厅
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.on(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.removeProto = function removeProto() {
          //        //注册网络监听--本游戏
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.instance.off(value, this.onRecvData, this);
          }

          //        //注册网络监听--大厅
          EventManager.instance.off(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.off(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.off(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.reqBet = function reqBet(pos, betAmount) {
          if (!RedAndBlackModel.instance.gameInfo) {
            return;
          }
          if (RedAndBlackModel.instance.countDown < 3) {
            Common.showTip(i18n.lang.disableBet, sys.isMobile);
            return false;
          }
          if (RedAndBlackModel.instance.myBetList[pos] + betAmount > RedAndBlackModel.instance.PosMaxBet["" + (pos + 1)]) {
            Common.showTip(i18n.lang[10064].replace("{0}", "" + Common.ChangeMoneyFormat(RedAndBlackModel.instance.PosMaxBet["" + (pos + 1)], 2)), sys.isMobile);
            return false;
          }
          this.SendData(eProto.HD_Bet, {
            pos: "" + (pos + 1),
            betAmount: "" + betAmount
          });
          return true;
        }

        //    /**请求抽水 */
        ;

        _proto.reqPumping = function reqPumping() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getPumping, {
            gameName: "RedAndBlack"
          });
        };
        _proto.reqHistory = function reqHistory() {
          NetManager.instance.sendOnlineData(eProto.HD_history, {
            size: "105"
          });
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_leave);
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // if (data.cmd != RedAndBlackDef.eProto.allBet && data.cmd != RedAndBlackDef.eProto.Bet) {
          gts.Debug.Log("===onRecvData==", JSON.stringify(data));
          // }

          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();
            if (data.cmd == eProto.HD_enter) {
              EventManager.instance.emit(eEvent.onLoadHall);
              Common.showTip(i18n.errTip(data.Code), sys.isMobile);
              return;
            }

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

          //////////////////////////////////////////////////////
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_enter:
              {
                this.reqHistory();
                var enterInfo = data.Data;
                RedAndBlackModel.instance.gameInfo = data.Data;
                RedAndBlackModel.instance.chipList = enterInfo.tableInfo.chips;
                RedAndBlackModel.instance.gameNo = enterInfo.tableInfo.issue;
                RedAndBlackModel.instance.countDown = enterInfo.tableInfo.countDown;
                RedAndBlackModel.instance.PlayerCount = enterInfo.tableInfo.playNum;

                // for (let i = 0; i < 3; i++) {
                //   RedAndBlackModel.instance.myBetList[i] = enterInfo.userInfo.bets[`${i + 1}`] || 0;
                //   RedAndBlackModel.instance.totalBetList[i] = enterInfo.tableInfo.pos[`${i + 1}`] || 0;
                // }

                RedAndBlackModel.instance.PlayerInfos = enterInfo.tableInfo.seatPlay;
                RedAndBlackModel.instance.result = enterInfo.tableInfo.openNum;
                RedAndBlackModel.instance.gameStatus = enterInfo.tableInfo.state;
                // RedAndBlackModel.instance.SendCards = enterInfo.SendCards;
                // RedAndBlackModel.instance.ShowCard = enterInfo.ShowCard;
                // RedAndBlackModel.instance.SendCount = enterInfo.SendCount;

                var keys = Object.keys(enterInfo.odds);
                for (var i = 0; i < keys.length; i++) {
                  var odds = enterInfo.odds[keys[i]];
                  RedAndBlackModel.instance.Rate[i] = odds;
                  RedAndBlackModel.instance.PosMaxBet["" + i] = odds.MaxIssueBet;
                }
                break;
              }
            case eProto.HD_Bet:
              {
                emitData = data.Data;
                break;
              }
            case eProto.HD_BetList:
              {
                emitData = data.Data;
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                RedAndBlackModel.instance.gameStatus = data.Data.tableState;
                RedAndBlackModel.instance.countDown = data.Data.countDown;
                RedAndBlackModel.instance.gameNo = data.Data.eventID;
                break;
              }
            case eProto.HD_history:
              {
                RedAndBlackModel.instance.history = [];
                for (var _iterator = _createForOfIteratorHelperLoose(data.Data), _step; !(_step = _iterator()).done;) {
                  var info = _step.value;
                  RedAndBlackModel.instance.history.push(JSON.parse(info));
                }
                break;
              }
            case eProto.HD_OpenResult:
              {
                RedAndBlackModel.instance.result = data.Data;
                RedAndBlackModel.instance.history.unshift(RedAndBlackModel.instance.result);
                break;
              }
            case eProto.HD_Checkout:
              {
                RedAndBlackModel.instance.prize = data.Data;
                break;
              }
            // case RedAndBlackDef.eProto.allBet: {
            //     emitData = data.Data;
            //     break;
            // }
            // case RedAndBlackDef.eProto.changeState: {
            //     RedAndBlackModel.instance.gameStatus = data.Data;
            //     break;
            // }
            // case RedAndBlackDef.eProto.HD_bet: {
            //     emitData = data.Data;
            //     // RedAndBlackModel.instance.myBetList[data.Data.Pos] += data.Data.Amount;
            //     break;
            // }

            // case RedAndBlackDef.eProto.sendCards: {
            //     RedAndBlackModel.instance.SendCards = data.Data;
            //     break;
            // }
            // case RedAndBlackDef.eProto.open: {
            //     RedAndBlackModel.instance.result = data.Data;

            //     // RedAndBlackModel.instance.history.unshift(RedAndBlackModel.instance.result.OpenNum);

            //     break;
            // }
            // case RedAndBlackDef.eProto.prize: {
            //     RedAndBlackModel.instance.prize = data.Data;
            //     break;
            // }
            case eProto.getPumping:
              {
                RedAndBlackModel.instance.nPummping = data.Data.Pumping;
                break;
              }

            //            //////////////////////////////////////////////////////
            //            //获取钱包-推送钱包-断线重连
            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==RedAndBlack=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (RedAndBlackModel.instance.curBalance > 0) {
                  RedAndBlackModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                RedAndBlackModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==RedAndBlack=pushWallet==" + _HD_Wallet.VndBalance);
                if (RedAndBlackModel.instance.curBalance > 0) {
                  RedAndBlackModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                RedAndBlackModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        }
        //    //#endregion
        //    //////////////////////////////////////////////////////////////////
        ;

        _proto.SendData = function SendData(msgid, data) {
          if (data === void 0) {
            data = {};
          }
          var log = "\u53D1\u9001\u6D88\u606F\uFF0C msgId:" + msgid + ", data:" + JSON.stringify(data);
          if (NetManager.instance._connect) {
            gts.Debug.Log("==SendData== " + log);
            NetManager.instance.sendOnlineData("" + msgid, data);
          } else {
            gts.Debug.Log("(FAILED): " + log);
          }
        };
        _proto.getInfo = function getInfo() {
          // this.SendData(RedAndBlackDef.eProto.getInfo, {});
        };
        _proto.sendDoingBet = function sendDoingBet(pos, num) {
          if (RedAndBlackModel.instance.countDown < 3) {
            Common.showTip(i18n.lang.disableBet, sys.isMobile);
            return false;
          }
          if (RedAndBlackModel.instance.myBetList[pos] + num > RedAndBlackModel.instance.PosMaxBet["" + pos]) {
            Common.showTip(i18n.lang[10064].replace("{0}", "" + Common.ChangeMoneyFormat(RedAndBlackModel.instance.PosMaxBet["" + pos], 2)), sys.isMobile);
            return false;
          }
          this.SendData(eProto.HD_Bet, {
            pos: pos,
            amount: num,
            gameNo: RedAndBlackModel.instance.gameNo
          });
          return true;
        };
        _proto.Send_ExitRoom = function Send_ExitRoom() {
          this.SendData(eProto.HD_leave);
        };
        _createClass(RedAndBlackCtrl, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(cBundle);
          }
        }]);
        return RedAndBlackCtrl;
      }(GameDef.BaseCtrl));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RedAndBlackDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1294a3mC0RJcIZ3NmG0g+Bk", "RedAndBlackDef", undefined);
      //gameDef moudle
      //红黑
      var cBundle = exports('cBundle', "RedAndBlackGame");
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onUpdateRecord"] = "onUpdateRecord";
        return eEvent;
      }({}));
      var cLight = exports('cLight', 28);
      var eStatus = exports('eStatus', {
        none: 0,
        bet: 1,
        result: 2
      }); // result = 3,
      var eCardType = exports('eCardType', {
        triple: 1,
        straightFlush: 2,
        flush: 3,
        straight: 4,
        pair: 5,
        highCard: 6
      }); //高牌
      var strCardType = exports('strCardType', ["Triple", "StraightFlush", "Flush", "Straight", "Pair", "HighCard"]);
      var strColor = exports('strColor', ["f", "m", "h", "t"]);
      var strValue = exports('strValue', ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]);
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_GetEnterData"] = "redAndBlack/HD_GetEnterData";
        eProto["HD_enter"] = "redAndBlack/HD_Enter";
        eProto["HD_Bet"] = "redAndBlack/HD_Bet";
        eProto["HD_leave"] = "redAndBlack/HD_QuitTable";
        eProto["HD_history"] = "redAndBlack/HD_History";
        eProto["HD_BetList"] = "redAndBlack/HD_BetList";
        eProto["HD_OpenResult"] = "redAndBlack/HD_OpenResult";
        eProto["HD_Checkout"] = "redAndBlack/HD_Checkout";
        eProto["HD_UpdatePlayerNum"] = "redAndBlack/HD_UpdatePlayerNum";
        eProto["HD_SwitchRoomState"] = "redAndBlack/HD_SwitchRoomState";
        eProto["HD_QueryBetRecord"] = "lobby/HD_QueryBetRecord";
        eProto["getPumping"] = "lobby/HD_GetPumping";
        return eProto;
      }({})); //抽水

      /**音效 */
      var eSound = exports('eSound', /*#__PURE__*/function (eSound) {
        eSound["bg"] = "sound/bg";
        eSound["bet"] = "sound/bet";
        eSound["countDown"] = "sound/countDown";
        eSound["warning"] = "sound/warning";
        eSound["collectChip"] = "sound/collectChip";
        eSound["winEffect"] = "sound/winEffect";
        eSound["winNomal"] = "sound/winNomal";
        eSound["firstCard"] = "sound/firstCard";
        eSound["tip"] = "sound/tip";
        eSound["coin"] = "sound/coin";
        eSound["timeUp"] = "sound/timeUp";
        eSound["sendCard"] = "sound/sendCard";
        eSound["vs"] = "sound/vs";
        eSound["flipCard"] = "sound/flipCard";
        eSound["fightingTip"] = "sound/fightingTip";
        eSound["blackFaile"] = "sound/blackFaile";
        eSound["redFaile"] = "sound/redFaile";
        return eSound;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改

      // RedAndBlackModel.instance.myBetList = enterInfo.userInfo.bets;

      // type GamePlay struct {
      //     GameCode    string             bson:"GameCode"
      //     PrizeType   int                bson:"PrizeType"
      //     Name        string             bson:"Name"
      //     Odds        int64              bson:"Odds"
      //     MaxIssueBet int64              bson:"MaxIssueBet"
      // }
      /////////////////////////////////////
      /**钱包信息 */
      // ==recvData data==={"Data":{"UserID":"62496f2dc4ac29426adcb17e","XiaZhuPos":"6","XiaZhuV":482},"GameType":"RedAndBlack","Action":"HD_XiaZhu","ErrMsg":"操作成功","Code":0,"cmd":"RedAndBlack/HD_XiaZhu"}
      // builtin-2d-sprite (variant) : Failed to set property [texture], property not found.
      //注： 这个问题由 服务端发送的下注金额 引起，金额不在 CMList整数范围内
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RedAndBlackGame", ['./RedAndBlackCtrl.ts', './RedAndBlackDef.ts', './RedAndBlackGameView.ts', './RedAndBlackModel.ts', './RedAndBlackScene.ts', './RedAndBlackUtils.ts', './RB_UIBigEyeRoad.ts', './RB_UIBigRoad.ts', './RB_UICockroach.ts', './RB_UIDishRoad.ts', './RB_UIRecord.ts', './RB_UIRecordItem.ts', './RB_UISmallRoad.ts', './RedAndBlack_btnEffect.ts', './RedAndBlack_path.ts', './RedAndBlack_rank.ts', './RedAndBlack_rankItem.ts', './RedAndBlack_record.ts', './RedAndBlack_recordItem.ts', './RedAndBlack_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/RedAndBlackGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './BtnArea.ts', './DataManager.ts', './I18n.ts', './RedAndBlackDef.ts', './RedAndBlackModel.ts', './RedAndBlackCtrl.ts', './RedAndBlackUtils.ts', './RB_UIRecordItem.ts', './I18nLocal.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Button, Node, Label, Sprite, sp, Prefab, ScrollView, SpriteFrame, tween, v3, sys, find, instantiate, UITransform, Tween, color, GameDef, ConfigManager, EventManager, NetManager, ViewManager, Common, BtnArea, DataManager, UserKey, i18n, eProto, eStatus, eSound, eEvent, cBundle, eCardType, strCardType, RedAndBlackModel, RedAndBlackCtrl, RedAndBlackUtils, RB_UIRecordItem, I18nLocal;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      sp = module.sp;
      Prefab = module.Prefab;
      ScrollView = module.ScrollView;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
      sys = module.sys;
      find = module.find;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Tween = module.Tween;
      color = module.color;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      BtnArea = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      eProto = module.eProto;
      eStatus = module.eStatus;
      eSound = module.eSound;
      eEvent = module.eEvent;
      cBundle = module.cBundle;
      eCardType = module.eCardType;
      strCardType = module.strCardType;
    }, function (module) {
      RedAndBlackModel = module.RedAndBlackModel;
    }, function (module) {
      RedAndBlackCtrl = module.RedAndBlackCtrl;
    }, function (module) {
      RedAndBlackUtils = module.RedAndBlackUtils;
    }, function (module) {
      RB_UIRecordItem = module.default;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44;
      cclegacy._RF.push({}, "7bec4aR1BlJHaAVun2OnsT4", "RedAndBlackGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var RedAndBlackGameView = exports('default', (_dec = ccclass("RedAndBlackGameView"), _dec2 = menu("game/RedAndBlackGame/RedAndBlackGameView"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Sprite), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Sprite), _dec15 = property(sp.Skeleton), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Prefab), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(sp.Skeleton), _dec24 = property(sp.Skeleton), _dec25 = property(sp.Skeleton), _dec26 = property(sp.Skeleton), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(ScrollView), _dec31 = property(sp.Skeleton), _dec32 = property(Node), _dec33 = property(SpriteFrame), _dec34 = property(SpriteFrame), _dec35 = property(sp.Skeleton), _dec36 = property(Prefab), _dec37 = property(Prefab), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Prefab), _dec41 = property(Label), _dec42 = property(Node), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(RedAndBlackGameView, _GameDef$BaseView);
        function RedAndBlackGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Button_x2", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_again", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "areaBtnParent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labNickName", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labGold", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprAvatar", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_head", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_timer", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_timer", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tittle_prizeng", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "daojishi", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_public", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_deskPlayer", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betArea", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betChip", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_chip", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardRed", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardBlack", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fapai", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "figureEffect_red", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "figureEffect_black", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "vs", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_carType_red", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_carType_black", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_recordTemp", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_record", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cm_light", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_btnGroup", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameChip", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameChip_big", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameTip", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betEffect", _descriptor35, _assertThisInitialized(_this));
          // @property(Prefab)
          // coin: Prefab = null;
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_star", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor39, _assertThisInitialized(_this));
          //
          _initializerDefineProperty(_this, "Node_chipTag", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardLest", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardRight", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardwin_red", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardwin_black", _descriptor44, _assertThisInitialized(_this));
          //    ////////////////////////////////////////////////////
          _this._area2btn = {};
          return _this;
        }
        var _proto = RedAndBlackGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, RedAndBlackCtrl.instance);
          this.initUIView();
          RedAndBlackUtils.instance.loadRes(function () {
            NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
            NetManager.instance.sendOnlineData(eProto.HD_enter, {});
          });
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          this.bg.on(Node.EventType.TOUCH_END, function () {
            if (_this2.cm_light.node.active) {
              _this2.cm_light.setAnimation(0, "intro_end", false);
              _this2.cm_light.setCompleteListener(function () {
                _this2.cm_light.setCompleteListener(null);
                _this2.cm_light.node.active = false;
              });
              tween(_this2.Node_btnGroup).to(0.3, {
                scale: v3(0, 0, 0)
              }, {
                easing: "cubicIn"
              }).start();
            }
          }, this, true);
          this.BindAreaBtns();
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          this.doClearChip();
          RedAndBlackModel.instance.clearGameData();
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
          var _this3 = this;
          NetManager.instance.waitServiceSendData();
          this.scheduleOnce(function () {
            Common.showLog("前台");
            if (NetManager.instance._connect == true) {
              _this3.doClearChip();
              _this3.unscheduleAllCallbacks();
              NetManager.instance.sendOnlineData(eProto.HD_enter, {});
            }
          }, 0.1);
        };
        _proto.BindAreaBtns = function BindAreaBtns() {
          var childs = this.areaBtnParent ? this.areaBtnParent.children : [];
          for (var i = 0; i < childs.length; ++i) {
            var c = childs[i];
            var ba = BtnArea.OnClicked(c, this.onClickBet, this);
            this._area2btn[c.name] = ba;
          }
        }
        //let keys = Object.keys(this._area2btn);
        // this.PlayAreaEff(keys, false);
        ;

        _proto.PlayAreaEff = function PlayAreaEff(keys, play) {
          for (var i = 0; i < keys.length; ++i) {
            var k = keys[i];
            var btn = this._area2btn[k];
            if (btn) {
              btn.PlayEff(play);
            }
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(RedAndBlackModel.instance.curBalance);
          if (strGold != this.labGold.string) {
            RedAndBlackUtils.instance.updateLabel(this.labGold, strGold);
          }
        };
        _proto.initUIView = function initUIView() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.sprAvatar);
          Common.nickNameFormatL(this.labNickName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.labGold.string = Common.numFormat(gold);
        };
        _proto.onClickBet = function onClickBet(btn) {
          var _this4 = this;
          if (this.cm_light.node.active) {
            this.cm_light.setAnimation(0, "intro_end", false);
            this.cm_light.setCompleteListener(function () {
              _this4.cm_light.setCompleteListener(null);
              _this4.cm_light.node.active = false;
            });
            tween(this.Node_btnGroup).to(0.3, {
              scale: v3(0, 0, 0)
            }, {
              easing: "cubicIn"
            }).start();
          }
          if (RedAndBlackModel.instance.curBalance < RedAndBlackModel.instance.curBet) {
            Common.showTip(i18n.lang[10001], sys.isMobile);
            return;
          }
          if (RedAndBlackModel.instance.gameStatus && RedAndBlackModel.instance.gameStatus == eStatus.bet && RedAndBlackModel.instance.countDown > 3) {
            gts.Debug.Log("==OnClicked==" + btn.node.name);
            var pos = btn.node.name.replace("Node_area_", "");
            RedAndBlackCtrl.instance.reqBet(parseInt(pos), RedAndBlackModel.instance.curBet);
            var betArea = this.Node_betArea.getChildByName("Node_area_" + pos);
            var light = betArea.getChildByName("light");
            light.active = true;
            var strAni = ["red_bet", "black_bet", "green_bet"];
            light.getComponent(sp.Skeleton).setAnimation(0, strAni[parseInt(pos)], false);
            tween(light).delay(0.25).call(function () {
              light.active = false;
            }).start();
          }
        };
        _proto.doSendStar = function doSendStar(pos) {
          var Node_root = this.Node_deskPlayer.getChildByName("Node_head_" + 0);
          var Node_star = find("Node_area_" + pos + "/Node_star", this.Node_betArea);
          var newStar = this.Node_effectRoot.getChildByName("newStar" + pos);
          if (newStar) {
            return;
          }
          newStar = instantiate(this.Node_star);
          newStar.name = "newStar" + pos;
          newStar.getChildByName("lizi").active = true;
          this.Node_effectRoot.addChild(newStar);
          var startPos = Node_root.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          newStar.position = this.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(startPos);
          var toPos = Node_star.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          toPos = this.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
          RedAndBlackUtils.instance.playOneShot(eSound.coin);
          tween(newStar).to(0.4, {
            position: toPos,
            scale: v3(0.5, 0.5, 0.5)
          }, {
            easing: "cubicOut"
          }).call(function () {
            newStar.getChildByName("lizi").active = false;
          }).start();
        };
        _proto.doSendChip = /*#__PURE__*/function () {
          var _doSendChip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pos, betAmount, startNode) {
            var _this5 = this;
            var newChip, lv, i, pBack, isMySelf, betArea, chipContent, Label_bet, totalBetList, startPos, posX, posY, toPos;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (startNode === void 0) {
                    startNode = null;
                  }
                  newChip = instantiate(this.betChip);
                  newChip.name = "" + betAmount;
                  //设置筹码纹理
                  lv = 0;
                  if (!(betAmount >= RedAndBlackModel.instance.chipList[RedAndBlackModel.instance.chipList.length - 1])) {
                    _context.next = 8;
                    break;
                  }
                  lv = RedAndBlackModel.instance.chipList.length - 1;
                  _context.next = 16;
                  break;
                case 8:
                  i = 0;
                case 9:
                  if (!(i < RedAndBlackModel.instance.chipList.length - 1)) {
                    _context.next = 16;
                    break;
                  }
                  if (!(betAmount >= RedAndBlackModel.instance.chipList[i] && betAmount < RedAndBlackModel.instance.chipList[i + 1])) {
                    _context.next = 13;
                    break;
                  }
                  lv = i;
                  return _context.abrupt("break", 16);
                case 13:
                  i++;
                  _context.next = 9;
                  break;
                case 16:
                  newChip.getComponent(Sprite).spriteFrame = this.spriteFrameChip[lv];
                  if (startNode) {
                    pBack = startNode.position;
                    tween(startNode).shake(0.25, 3, 3).call(function () {
                      startNode.position = pBack;
                    }).start();
                  }
                  isMySelf = startNode == null;
                  betArea = this.Node_betArea.getChildByName("Node_area_" + pos);
                  chipContent = isMySelf ? betArea.getChildByName("Node_myChip") : betArea.getChildByName("Node_totalChip");
                  chipContent.addChild(newChip);
                  chipContent.active = true;
                  if (isMySelf) {
                    RedAndBlackModel.instance.myTotalBet += betAmount;
                    RedAndBlackUtils.instance.playOneShot(eSound.bet);
                  }

                  //更新下注分数
                  Label_bet = isMySelf ? betArea.getChildByName("Label_myBet") : betArea.getChildByName("Label_totalBet");
                  Label_bet.active = true;
                  isMySelf ? RedAndBlackModel.instance.myBetList[pos] = RedAndBlackModel.instance.myBetList[pos] + betAmount : RedAndBlackModel.instance.totalBetList[pos] = RedAndBlackModel.instance.totalBetList[pos] + betAmount;
                  totalBetList = isMySelf ? RedAndBlackModel.instance.myBetList[pos] : RedAndBlackModel.instance.totalBetList[pos];
                  RedAndBlackUtils.instance.updateLabel(Label_bet, "" + Common.ChangeMoneyFormat(totalBetList, 2));

                  //
                  startNode = startNode ? startNode : this.Button_chip;
                  startPos = startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  startPos = chipContent.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                  newChip.position = startPos;
                  posX = Math.random() * 100 - 50;
                  posY = Math.random() * 100 - 50;
                  toPos = v3(posX, posY, 0);
                  tween(newChip).to(0.3, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    if (isMySelf) {
                      var betEffect = instantiate(_this5.betEffect);
                      betEffect.position = toPos;
                      chipContent.addChild(betEffect);
                      var betEffectAni = betEffect.getComponent(sp.Skeleton);
                      betEffectAni.setAnimation(0, "idle", false);
                      betEffectAni.setCompleteListener(function () {
                        betEffectAni.setCompleteListener(null);
                        betEffect.destroyFromParent();
                      });
                    }
                  }).start();
                case 38:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doSendChip(_x, _x2, _x3) {
            return _doSendChip.apply(this, arguments);
          }
          return doSendChip;
        }();
        _proto.doClearChip = function doClearChip() {
          this.figureEffect_red.setAnimation(0, "1bet", true);
          this.figureEffect_black.setAnimation(0, "1bet", true);
          this.Node_carType_red.active = false;
          this.Node_carType_black.active = false;
          this.cardwin_black.active = false;
          this.cardwin_red.active = false;
          var headEffect = this.Node_head.getChildByName("headEffect");
          headEffect.active = false;
          var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", this.Node_head);
          Label_winAdd.parent.active = false;
          for (var i = 0; i < this.Node_deskPlayer.children.length; i++) {
            var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", this.Node_deskPlayer);
            var _headEffect = Node_headInfo.getChildByName("headEffect");
            _headEffect.active = false;
            var _Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", Node_headInfo);
            _Label_winAdd.parent.active = false;
          }
          //del node star
          this.Node_effectRoot.removeAllChildren();
          for (var _iterator = _createForOfIteratorHelperLoose(this.Node_betArea.children), _step; !(_step = _iterator()).done;) {
            var betArea = _step.value;
            var Node_myChip = betArea.getChildByName("Node_myChip");
            var Node_totalChip = betArea.getChildByName("Node_totalChip");
            Node_myChip.destroyAllChildren();
            Node_totalChip.destroyAllChildren();
            Node_myChip.active = false;
            Node_totalChip.active = false;

            //更新下注分数
            var Label_bet = betArea.getChildByName("Label_myBet");
            Label_bet.getComponent(Label).string = "";
            Label_bet.active = false;
            Label_bet = betArea.getChildByName("Label_totalBet");
            Label_bet.getComponent(Label).string = "";
            Label_bet.active = false;
            var light = betArea.getChildByName("light");
            light.active = false;
          }
          if (RedAndBlackModel.instance.myTotalBet > 0) {
            RedAndBlackModel.instance.myBetListBack = RedAndBlackModel.instance.myBetList.slice();
            RedAndBlackModel.instance.myTotalBet = 0;
            RedAndBlackModel.instance.myBetList = [0, 0, 0];
          }
          var isAgainEnable = false;
          for (var _iterator2 = _createForOfIteratorHelperLoose(RedAndBlackModel.instance.myBetListBack), _step2; !(_step2 = _iterator2()).done;) {
            var amount = _step2.value;
            if (amount > 0) {
              isAgainEnable = true;
              break;
            }
          }
          Common.setButtonEnableWithGray(this.Button_x2, false);
          Common.setButtonEnableWithGray(this.Button_again, isAgainEnable);
          RedAndBlackModel.instance.totalBetList = [0, 0, 0];
        };
        _proto.mergeChip = function mergeChip(node) {
          while (node.children.length > 5) {
            var childNode = node.children.shift();
            childNode.destroy();
          }
          var i = 0;
          for (var _iterator3 = _createForOfIteratorHelperLoose(node.children), _step3; !(_step3 = _iterator3()).done;) {
            var child = _step3.value;
            child.position = v3(0, (i - 1) * 5, 0);
            i++;
          }
        }

        //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this6 = this;
          switch (event.target.name) {
            //返回
            case "node_bg":
            case "Button_menu":
              {
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "Button_return":
              {
                RedAndBlackCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_record":
              {
                Common.loadPopBuddle("prefab/Node_record", RedAndBlackUtils.instance.bundle, function () {}, function (prefab) {
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
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", RedAndBlackUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_set", RedAndBlackUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_path", RedAndBlackUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_help", RedAndBlackUtils.instance.bundle, function () {}, function (prefab) {
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
            case "Button_chip":
              {
                Tween.stopAllByTarget(this.Node_btnGroup);
                if (!this.cm_light.node.active) {
                  this.cm_light.node.active = true;
                  this.cm_light.setAnimation(0, "intro", false);
                  this.cm_light.addAnimation(0, "intro_idle", true);
                  tween(this.Node_btnGroup).to(0.3, {
                    scale: v3(1.0, 1, 1)
                  }, {
                    easing: "cubicOut"
                  }).start();
                } else {
                  this.cm_light.setAnimation(0, "intro_end", false);
                  this.cm_light.setCompleteListener(function () {
                    _this6.cm_light.setCompleteListener(null);
                    _this6.cm_light.node.active = false;
                  });
                  tween(this.Node_btnGroup).to(0.3, {
                    scale: v3(0, 0, 0)
                  }, {
                    easing: "cubicIn"
                  }).start();
                }
                break;
              }
            case "Button_chip_0":
            case "Button_chip_1":
            case "Button_chip_2":
            case "Button_chip_3":
            case "Button_chip_4":
            case "Button_chip_5":
              {
                var index = parseInt(event.target.name.replace("Button_chip_", ""));
                RedAndBlackModel.instance.curBet = RedAndBlackModel.instance.chipList[index];
                var background = this.Button_chip.getChildByName("background");
                background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[index];
                background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(RedAndBlackModel.instance.curBet, 2);
                Tween.stopAllByTarget(this.Node_btnGroup);
                this.cm_light.setAnimation(0, "intro_end", false);
                this.cm_light.setCompleteListener(function () {
                  _this6.cm_light.setCompleteListener(null);
                  _this6.cm_light.node.active = false;
                });
                tween(this.Node_btnGroup).to(0.3, {
                  scale: v3(0, 0, 0)
                }, {
                  easing: "cubicIn"
                }).start();
                break;
              }
            case "Button_x2":
              {
                for (var pos = 0; pos < RedAndBlackModel.instance.myBetList.length; pos++) {
                  var betAmount = RedAndBlackModel.instance.myBetList[pos];
                  if (betAmount > 0) {
                    RedAndBlackCtrl.instance.reqBet(pos, betAmount);
                  }
                }
                if (this.cm_light.node.active) {
                  this.cm_light.setAnimation(0, "intro_end", false);
                  this.cm_light.setCompleteListener(function () {
                    _this6.cm_light.setCompleteListener(null);
                    _this6.cm_light.node.active = false;
                  });
                  tween(this.Node_btnGroup).to(0.3, {
                    scale: v3(0, 0, 0)
                  }, {
                    easing: "cubicIn"
                  }).start();
                }
                break;
              }
            case "Button_again":
              {
                if (this.cm_light.node.active) {
                  this.cm_light.setAnimation(0, "intro_end", false);
                  this.cm_light.setCompleteListener(function () {
                    _this6.cm_light.setCompleteListener(null);
                    _this6.cm_light.node.active = false;
                  });
                  tween(this.Node_btnGroup).to(0.3, {
                    scale: v3(0, 0, 0)
                  }, {
                    easing: "cubicIn"
                  }).start();
                }
                for (var _pos = 0; _pos < RedAndBlackModel.instance.myBetListBack.length; _pos++) {
                  var _betAmount = RedAndBlackModel.instance.myBetListBack[_pos];
                  if (_betAmount > 0) {
                    RedAndBlackCtrl.instance.reqBet(_pos, _betAmount);
                  }
                }
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
        _proto.onUpdateDeskPlayer = function onUpdateDeskPlayer() {
          if (!RedAndBlackModel.instance.PlayerInfos || RedAndBlackModel.instance.PlayerInfos.length == 0) {
            return;
          }
          var Label_public = this.Node_public.getChildByName("Label_public");
          Label_public.getComponent(Label).string = "" + RedAndBlackModel.instance.PlayerCount;
          RedAndBlackModel.instance.firstUserID = RedAndBlackModel.instance.PlayerInfos[0].userId;
          var seatPlayer = RedAndBlackModel.instance.PlayerInfos.slice(0, 5);
          for (var i = 0; i < seatPlayer.length; i++) {
            var playerInfo = seatPlayer[i];
            var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", this.Node_deskPlayer);
            Node_headInfo.active = playerInfo != null;
            var head = find("mask/head", Node_headInfo);
            var Label_nickName = find("Label_nickName", Node_headInfo);
            var Label_gold = find("Label_gold", Node_headInfo);
            if (playerInfo) {
              Common.getHead(playerInfo.avatar, head);
              Common.nickNameFormatL(Label_nickName, playerInfo.nickName);
              Label_gold.getComponent(Label).string = "+" + Common.numFormat(playerInfo.prizeAmount);
            }
          }
        };
        _proto.updateChipList = function updateChipList() {
          RedAndBlackModel.instance.chipList = RedAndBlackModel.instance.chipList.slice(0, 6);
          for (var i = 0; i < RedAndBlackModel.instance.chipList.length; i++) {
            var Button_chip = this.Node_btnGroup.getChildByName("Button_chip_" + i);
            if (!Button_chip) {
              break;
            }
            var _background = Button_chip.getChildByName("background");
            _background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[i];
            var betAmount = RedAndBlackModel.instance.chipList[i];
            _background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(betAmount, 2);
          }
          RedAndBlackModel.instance.curBet = RedAndBlackModel.instance.chipList[0];
          var background = this.Button_chip.getChildByName("background");
          background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[0];
          background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(RedAndBlackModel.instance.curBet, 2);

          //rates
          // let strRate = ["", "", "1-5", "6-10", "11-15", "16-25", "26-30", "31-35", "36-40", "41 or more\n\r"];
          for (var _i = 0; _i < RedAndBlackModel.instance.Rate.length; _i++) {
            var rateInfo = RedAndBlackModel.instance.Rate[_i];
            var type = rateInfo.PrizeType;
            if (type < 3) {
              var betArea = this.Node_betArea.getChildByName("Node_area_" + (type - 1));
              var Label_rate = betArea.getChildByName("Label_rate");
              Label_rate.getComponent(Label).string = "1:" + rateInfo.Odds / 100;
            } else {
              var _betArea = this.Node_betArea.getChildByName("Node_area_2");
              var _Label_rate = _betArea.getChildByName("Label_rate_" + (type - 3));
              _Label_rate.getComponent(Label).string = "1:" + rateInfo.Odds / 100;
            }
          }
        };
        _proto.updateRecord = function updateRecord() {
          var openResults = RedAndBlackModel.instance.history.slice(0, 10);
          for (var i = 0; i < openResults.length; i++) {
            var openInfo = openResults[i];
            var newItem = this.ScrollView_record.content.getChildByName("Node_item_" + i);
            if (!newItem) {
              newItem = instantiate(this.Node_recordTemp);
              newItem.name = "Node_item_" + i;
              newItem.active = true;
              this.ScrollView_record.content.addChild(newItem);
            }
            Tween.stopAllByTarget(newItem);
            newItem.active = true;
            var Node_winType = newItem.getChildByName("Node_winType");
            var sprName = openInfo.winner == 1 ? "red_diam" : "black_diam";
            Node_winType.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getSprFrame("" + sprName);
            var comItem = newItem.getComponent(RB_UIRecordItem);
            comItem.setType(openInfo.winnerType, false);
          }
          var lastItem = this.ScrollView_record.content.children[0];
          tween(lastItem).to(0.3, {
            scale: v3(1.1, 1.1, 1.1)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
        };
        _proto.showCountDown = function showCountDown(isEnter) {
          var _this8 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          return new Promise(function (resolve, reject) {
            _this8.Label_timer.color = color(255, 255, 255, 255);
            if (RedAndBlackModel.instance.gameStatus == eStatus.bet) {
              I18nLocal.getLocalRes(cBundle, "tittle_betting").then(function (spriteFrame) {
                _this8.tittle_prizeng.spriteFrame = spriteFrame;
              });
              _this8.scheduleOnce(function () {
                _this8.gameTip.node.active = true;
                RedAndBlackUtils.instance.playOneShot(eSound.fightingTip);
                _this8.gameTip.setAnimation(0, "startbet", false);
                _this8.gameTip.setCompleteListener(function () {
                  _this8.gameTip.setCompleteListener(null);
                  _this8.gameTip.node.active = false;
                });
              }, isEnter ? 0 : 1.5);
            } else {
              I18nLocal.getLocalRes(cBundle, "tittle_prizeng").then(function (spriteFrame) {
                _this8.tittle_prizeng.spriteFrame = spriteFrame;
              });
            }
            var countDown = RedAndBlackModel.instance.countDown;
            Tween.stopAllByTarget(_this8.Node_timer);
            _this8.Label_timer.string = "" + countDown;
            tween(_this8.Node_timer).delay(1).call(function () {
              RedAndBlackModel.instance.countDown--;
              if (RedAndBlackModel.instance.gameStatus == eStatus.bet) {
                RedAndBlackModel.instance.countDown > 3 ? RedAndBlackUtils.instance.playOneShot(eSound.timeUp) : RedAndBlackModel.instance.countDown > 0 ? RedAndBlackUtils.instance.playOneShot(eSound.countDown) : RedAndBlackUtils.instance.playOneShot(eSound.warning);
                if (RedAndBlackModel.instance.countDown == 1) {
                  _this8.figureEffect_red.setAnimation(0, "3waitresult", true);
                  _this8.figureEffect_black.setAnimation(0, "3waitresult", true);
                  if (_this8.gameTip.animation != "stopbet") {
                    _this8.gameTip.node.active = true;
                    _this8.gameTip.setAnimation(0, "stopbet", false);
                    _this8.gameTip.setCompleteListener(function () {
                      _this8.gameTip.setCompleteListener(null);
                      _this8.gameTip.node.active = false;
                    });
                    Common.setButtonEnableWithGray(_this8.Button_again, false);
                    Common.setButtonEnableWithGray(_this8.Button_x2, false);
                  }
                }
                if (RedAndBlackModel.instance.countDown <= 3) {
                  _this8.Label_timer.node.active = false;
                  if (!_this8.daojishi.node.active) {
                    _this8.daojishi.node.active = true;
                    var strAni = RedAndBlackModel.instance.countDown == 3 ? "321" : RedAndBlackModel.instance.countDown == 2 ? "21" : "1";
                    _this8.daojishi.setAnimation(0, strAni, false);
                    _this8.daojishi.setCompleteListener(function () {
                      _this8.daojishi.setCompleteListener(null);
                      _this8.daojishi.node.active = false;
                      _this8.Label_timer.node.active = true;
                    });
                  }
                } else {
                  _this8.Label_timer.node.active = true;
                }
              } else {
                _this8.daojishi.node.active = false;
                _this8.Label_timer.node.active = true;
              }
              _this8.Label_timer.string = "" + RedAndBlackModel.instance.countDown;
            }).union().repeat(countDown).call(resolve).start();
          });
        };
        _proto.doSendCards = function doSendCards() {
          var _this9 = this;
          this.Node_cardRed.active = true;
          this.Node_cardBlack.active = true;
          for (var i = 0; i < 3; i++) {
            var cardNode = this.Node_cardRed.getChildByName("Node_card_" + (i + 1));
            cardNode.active = false;
            cardNode = this.Node_cardBlack.getChildByName("Node_card_" + (i + 1));
            cardNode.active = false;
          }
          RedAndBlackUtils.instance.playOneShot(eSound.vs);
          this.vs.node.active = true;
          this.vs.setAnimation(0, "intro", false);
          this.vs.setCompleteListener(function () {
            _this9.vs.node.active = false;
            _this9.vs.setCompleteListener(null);
            _this9.figureEffect_red.setAnimation(0, "2fapai", false);
            _this9.figureEffect_red.addAnimation(0, "1bet", true);
            _this9.scheduleOnce(function () {
              RedAndBlackUtils.instance.playSound(eSound.sendCard);
            }, 0.3);
            var _loop = function _loop(_i2) {
              _this9.scheduleOnce(function () {
                var fapaiNode_red = instantiate(_this9.fapai.node);
                fapaiNode_red.active = true;
                _this9.Node_cardRed.parent.addChild(fapaiNode_red);
                var fapai_red = fapaiNode_red.getComponent(sp.Skeleton);
                fapai_red.setAnimation(0, "red" + (_i2 + 1), false);
                fapai_red.setCompleteListener(function () {
                  fapai_red.setCompleteListener(null);
                  var cardNode = _this9.Node_cardRed.getChildByName("Node_card_" + (_i2 + 1));
                  cardNode.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getSprFrame("back");
                  cardNode.active = true;
                  fapaiNode_red.destroyFromParent();
                });
              }, 0.3 + 0.2 * _i2);
            };
            for (var _i2 = 0; _i2 < 3; _i2++) {
              _loop(_i2);
            }
            _this9.figureEffect_black.setAnimation(0, "2fapai", false);
            _this9.figureEffect_black.addAnimation(0, "1bet", true);
            var _loop2 = function _loop2(_i3) {
              _this9.scheduleOnce(function () {
                var fapaiNode_black = instantiate(_this9.fapai.node);
                fapaiNode_black.active = true;
                _this9.Node_cardBlack.parent.addChild(fapaiNode_black);
                var fapai_black = fapaiNode_black.getComponent(sp.Skeleton);
                fapai_black.setAnimation(0, "black" + (_i3 + 1), false);
                fapai_black.setCompleteListener(function () {
                  var cardNode = _this9.Node_cardBlack.getChildByName("Node_card_" + (_i3 + 1));
                  cardNode.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getSprFrame("back");
                  cardNode.active = true;
                  fapaiNode_black.destroyFromParent();
                });
              }, 0.3 + 0.2 * _i3);
            };
            for (var _i3 = 0; _i3 < 3; _i3++) {
              _loop2(_i3);
            }
          });
        };
        _proto.initCards = function initCards(cards) {
          if (cards === void 0) {
            cards = null;
          }
          this.Node_cardRed.active = true;
          this.Node_cardBlack.active = true;
          if (!cards || cards.length == 0) {
            for (var i = 0; i < 3; i++) {
              var cardNode = this.Node_cardRed.getChildByName("Node_card_" + (i + 1));
              cardNode.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getSprFrame("back");
              cardNode.active = true;
            }
            for (var _i4 = 0; _i4 < 3; _i4++) {
              var _cardNode = this.Node_cardBlack.getChildByName("Node_card_" + (_i4 + 1));
              _cardNode.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getSprFrame("back");
              _cardNode.active = true;
            }
          } else {
            for (var _i5 = 0; _i5 < 3; _i5++) {
              var _cardNode2 = this.Node_cardRed.getChildByName("Node_card_" + (_i5 + 1));
              _cardNode2.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getCardFrame(cards[_i5]);
              _cardNode2.active = true;
            }
            //显示牌型
            if (!this.Node_carType_red.active) {
              this.Node_carType_red.active = true;
              var strName = RedAndBlackModel.instance.result.redType == eCardType.highCard ? "tittle_win2" : "tittle_win";
              this.Node_carType_red.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getSprFrame(strName);
              var Label_type = this.Node_carType_red.getChildByName("Label_type");
              Label_type.getComponent(Label).string = "" + strCardType[RedAndBlackModel.instance.result.redType - 1];
              Label_type.getComponent(Label).color = RedAndBlackModel.instance.result.redType == eCardType.highCard ? color(201, 249, 255, 255) : color(253, 254, 139, 255);
            }
            for (var _i6 = 0; _i6 < 3; _i6++) {
              var _cardNode3 = this.Node_cardBlack.getChildByName("Node_card_" + (_i6 + 1));
              _cardNode3.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getCardFrame(cards[_i6 + 3]);
              _cardNode3.active = true;
            }
            //显示牌型
            if (!this.Node_carType_black.active) {
              this.Node_carType_black.active = true;
              var _strName = RedAndBlackModel.instance.result.blackType == eCardType.highCard ? "tittle_win2" : "tittle_win";
              this.Node_carType_black.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getSprFrame(_strName);
              var _Label_type = this.Node_carType_black.getChildByName("Label_type");
              _Label_type.getComponent(Label).string = "" + strCardType[RedAndBlackModel.instance.result.blackType - 1];
              _Label_type.getComponent(Label).color = RedAndBlackModel.instance.result.blackType == eCardType.highCard ? color(201, 249, 255, 255) : color(253, 254, 139, 255);
            }
          }
        };
        _proto.doOpenCard = function doOpenCard() {
          var _this10 = this;
          var cards = [];
          cards = cards.concat(RedAndBlackModel.instance.result.red);
          cards = cards.concat(RedAndBlackModel.instance.result.black);
          return new Promise(function (resolve, reject) {
            RedAndBlackUtils.instance.playSound(eSound.flipCard);
            var _loop3 = function _loop3(i) {
              var cardNode = _this10.Node_cardRed.getChildByName("Node_card_" + (i + 1));
              tween(cardNode).to(0.3, {
                eulerAngles: v3(0, -90, 0)
              }).call(function () {
                cardNode.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getCardFrame(cards[i]);
              }).to(0.3, {
                eulerAngles: v3(0, 0, 0)
              }).call(function () {
                //显示牌型
                if (!_this10.Node_carType_red.active) {
                  _this10.Node_carType_red.active = true;
                  var strName = RedAndBlackModel.instance.result.redType == eCardType.highCard ? "tittle_win2" : "tittle_win";
                  _this10.Node_carType_red.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getSprFrame(strName);
                  var Label_type = _this10.Node_carType_red.getChildByName("Label_type");
                  Label_type.getComponent(Label).string = "" + strCardType[RedAndBlackModel.instance.result.redType - 1];
                  Label_type.getComponent(Label).color = RedAndBlackModel.instance.result.redType == eCardType.highCard ? color(201, 249, 255, 255) : color(253, 254, 139, 255);
                }
              }).start();
            };
            for (var i = 0; i < 3; i++) {
              _loop3(i);
            }
            _this10.scheduleOnce(function () {
              RedAndBlackUtils.instance.playSound(eSound.flipCard);
              var _loop4 = function _loop4(_i7) {
                var cardNode = _this10.Node_cardBlack.getChildByName("Node_card_" + (_i7 + 1));
                tween(cardNode).to(0.3, {
                  eulerAngles: v3(0, -90, 0)
                }).call(function () {
                  cardNode.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getCardFrame(cards[_i7 + 3]);
                }).to(0.3, {
                  eulerAngles: v3(0, 0, 0)
                }).call(function () {
                  //显示牌型
                  if (!_this10.Node_carType_black.active) {
                    _this10.Node_carType_black.active = true;
                    var strName = RedAndBlackModel.instance.result.blackType == eCardType.highCard ? "tittle_win2" : "tittle_win";
                    _this10.Node_carType_black.getComponent(Sprite).spriteFrame = RedAndBlackUtils.instance.getSprFrame(strName);
                    var Label_type = _this10.Node_carType_black.getChildByName("Label_type");
                    Label_type.getComponent(Label).string = "" + strCardType[RedAndBlackModel.instance.result.blackType - 1];
                    Label_type.getComponent(Label).color = RedAndBlackModel.instance.result.blackType == eCardType.highCard ? color(201, 249, 255, 255) : color(253, 254, 139, 255);
                  }
                }).call(resolve).start();
              };
              for (var _i7 = 0; _i7 < 3; _i7++) {
                _loop4(_i7);
              }
            }, 0.5);
          });
        };
        _proto.showCardLight = function showCardLight() {
          var _this11 = this;
          return new Promise(function (resolve, reject) {
            _this11.cardwin_red.active = RedAndBlackModel.instance.result.winner == 1;
            _this11.cardwin_black.active = RedAndBlackModel.instance.result.winner == 2;
          });
        };
        _proto.showWinEffect = function showWinEffect() {
          var _this12 = this;
          return new Promise(function (resolve, reject) {
            RedAndBlackUtils.instance.playOneShot(eSound.winEffect);
            if (RedAndBlackModel.instance.result.winner == 1) {
              _this12.figureEffect_red.setAnimation(0, "5result_win", false);
              _this12.figureEffect_red.addAnimation(0, "6winidle", true);
              _this12.figureEffect_black.setAnimation(0, "4result_fail", false);
              RedAndBlackUtils.instance.playOneShot(eSound.blackFaile);
            } else {
              _this12.figureEffect_black.setAnimation(0, "5result_win", false);
              _this12.figureEffect_black.addAnimation(0, "6winidle", true);
              _this12.figureEffect_red.setAnimation(0, "4result_fail", false);
              RedAndBlackUtils.instance.playOneShot(eSound.redFaile);
            }
            var Node_area = _this12.Node_betArea.getChildByName("Node_area_" + (RedAndBlackModel.instance.result.winner - 1));
            var light = Node_area.getChildByName("light");
            light.active = true;
            var strAni = RedAndBlackModel.instance.result.winner == 1 ? "red_win_idle" : "black_win_idle";
            light.getComponent(sp.Skeleton).setAnimation(0, strAni, true);
            if (RedAndBlackModel.instance.result.lucky) {
              var _Node_area = _this12.Node_betArea.getChildByName("Node_area_2");
              var _light = _Node_area.getChildByName("light");
              _light.active = true;
              _light.getComponent(sp.Skeleton).setAnimation(0, "green_win_idle", true);
            }
            _this12.scheduleOnce(resolve, 3.0);
          });
        };
        _proto.showHeadEffect = function showHeadEffect() {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            if (!RedAndBlackModel.instance.result || !RedAndBlackModel.instance.prize) {
              return resolve;
            }
            RedAndBlackUtils.instance.playOneShot(eSound.coin);
            if (RedAndBlackModel.instance.prize.userPrize.prizeAmount > 0) {
              var headEffect = _this13.Node_head.getChildByName("headEffect");
              headEffect.active = true;
              headEffect.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
              var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", _this13.Node_head);
              Label_winAdd.parent.active = true;
              Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyShow(RedAndBlackModel.instance.prize.userPrize.prizeAmount, 2);
            }
            for (var i = 0; i < _this13.Node_deskPlayer.children.length; i++) {
              var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", _this13.Node_deskPlayer);
              var playerInfo = RedAndBlackModel.instance.PlayerInfos[i];
              if (playerInfo) {
                for (var _iterator4 = _createForOfIteratorHelperLoose(RedAndBlackModel.instance.prize.seatPrize), _step4; !(_step4 = _iterator4()).done;) {
                  var prizeInfo = _step4.value;
                  if (prizeInfo.userId == playerInfo.userId) {
                    var _headEffect2 = Node_headInfo.getChildByName("headEffect");
                    if (prizeInfo.yxb > 0) {
                      _headEffect2.active = true;
                      _headEffect2.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                      var _Label_winAdd2 = find("Sprite_Label_winAdd/Label_winAdd", Node_headInfo);
                      _Label_winAdd2.parent.active = true;
                      _Label_winAdd2.getComponent(Label).string = "+" + Common.ChangeMoneyShow(prizeInfo.prizeAmount, 2);
                    }
                    break;
                  }
                }
              }
            }
          });
        };
        _proto.doCollectChip = function doCollectChip() {
          var _this14 = this;
          return new Promise(function (resolve, reject) {
            if (!RedAndBlackModel.instance.result || !RedAndBlackModel.instance.prize) {
              return resolve;
            }
            var collectArea = [];
            RedAndBlackModel.instance.result.winner == 1 ? collectArea.push(1) : collectArea.push(0);
            if (RedAndBlackModel.instance.result.lucky) {
              collectArea.push(2);
            }
            var wChipTagPos = _this14.Node_chipTag.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var wWinPos_0 = _this14.Node_betArea.getChildByName("Node_area_" + (RedAndBlackModel.instance.result.winner == 1 ? 0 : 1)).getChildByName("Node_totalChip").getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var wWinPos_1 = RedAndBlackModel.instance.result.lucky ? _this14.Node_betArea.getChildByName("Node_area_2").getComponent(UITransform).convertToWorldSpaceAR(v3(0)) : wWinPos_0;
            var wToWinPos = [];
            if (RedAndBlackModel.instance.prize.userPrize.prizeAmount > 0) {
              wToWinPos.push(_this14.Node_head.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
              _this14.scheduleOnce(function () {
                if (RedAndBlackModel.instance.endBalance != 0) {
                  RedAndBlackModel.instance.curBalance = RedAndBlackModel.instance.endBalance;
                  RedAndBlackModel.instance.endBalance = 0;
                  _this14.updateGold();
                }
              }, 3.25);
            }
            for (var i = 0; i < _this14.Node_deskPlayer.children.length; i++) {
              var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", _this14.Node_deskPlayer);
              var playerInfo = RedAndBlackModel.instance.PlayerInfos[i];
              if (playerInfo) {
                for (var _iterator5 = _createForOfIteratorHelperLoose(RedAndBlackModel.instance.prize.seatPrize), _step5; !(_step5 = _iterator5()).done;) {
                  var prizeInfo = _step5.value;
                  if (prizeInfo.userId == playerInfo.userId && prizeInfo.prizeAmount > 0) {
                    wToWinPos.push(Node_headInfo.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
                    break;
                  }
                }
              }
            }
            wToWinPos.push(_this14.Node_public.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
            for (var _i8 = 0; _i8 < _this14.Node_betArea.children.length; _i8++) {
              var Node_area = _this14.Node_betArea.getChildByName("Node_area_" + _i8);
              var Node_myChip = Node_area.getChildByName("Node_myChip");
              var Node_totalChip = Node_area.getChildByName("Node_totalChip");
              for (var _iterator6 = _createForOfIteratorHelperLoose(Node_myChip.children), _step6; !(_step6 = _iterator6()).done;) {
                var nodeChip = _step6.value;
                var toPos_0 = Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wChipTagPos);
                var toPos_1 = _i8 % 2 == 0 ? Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_0) : Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_1);
                var toPos_2 = Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wToWinPos[_i8 % wToWinPos.length]);
                tween(nodeChip).to(0.5, {
                  position: toPos_0
                }, {
                  easing: "cubicOut"
                }).delay(1.0).to(0.5, {
                  position: v3(toPos_1.x + 50 - Math.random() * 100, toPos_1.y + 25 - Math.random() * 50, toPos_1.z)
                }, {
                  easing: "cubicOut"
                }).delay(1.0).to(0.5, {
                  position: toPos_2
                }, {
                  easing: "cubicOut"
                }).destroySelf().start();
              }
              for (var _iterator7 = _createForOfIteratorHelperLoose(Node_totalChip.children), _step7; !(_step7 = _iterator7()).done;) {
                var _nodeChip = _step7.value;
                var _toPos_ = Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wChipTagPos);
                var _toPos_2 = _i8 % 2 == 0 ? Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_0) : Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_1);
                var _toPos_3 = Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wToWinPos[_i8 % wToWinPos.length]);
                tween(_nodeChip).to(0.5, {
                  position: _toPos_
                }, {
                  easing: "cubicOut"
                }).delay(1.0).to(0.5, {
                  position: v3(_toPos_2.x + 50 - Math.random() * 100, _toPos_2.y + 25 - Math.random() * 50, _toPos_2.z)
                }, {
                  easing: "cubicOut"
                }).delay(1.0).to(0.5, {
                  position: _toPos_3
                }, {
                  easing: "cubicOut"
                }).destroySelf().start();
              }
            }
            RedAndBlackUtils.instance.playOneShot(eSound.collectChip);
            _this14.scheduleOnce(function () {
              RedAndBlackUtils.instance.playOneShot(eSound.collectChip);
            }, 1.5);
            _this14.scheduleOnce(function () {
              RedAndBlackUtils.instance.playOneShot(eSound.collectChip);
            }, 3);
          });
        };
        _proto.doEnd = /*#__PURE__*/function () {
          var _doEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.doOpenCard();
                case 2:
                  this.showCardLight();
                  this.showWinEffect();
                  this.updateRecord();
                  if (RedAndBlackModel.instance.prize) {
                    this.showResult();
                  }
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doEnd() {
            return _doEnd.apply(this, arguments);
          }
          return doEnd;
        }();
        _proto.showResult = /*#__PURE__*/function () {
          var _showResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(!RedAndBlackModel.instance.result || !RedAndBlackModel.instance.prize)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  this.doCollectChip();
                  this.scheduleOnce(this.showHeadEffect, 3.5);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function showResult() {
            return _showResult.apply(this, arguments);
          }
          return showResult;
        }() //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
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
            case eProto.HD_enter:
              {
                Common.closeWait();
                this.onUpdateDeskPlayer();
                this.updateChipList();
                this.showCountDown(true);
                switch (RedAndBlackModel.instance.gameStatus) {
                  //下注
                  case eStatus.bet:
                    {
                      //更新下注
                      for (var i = 0; i < 3; i++) {
                        var BetAmount = RedAndBlackModel.instance.gameInfo.userInfo.bets["" + (i + 1)];
                        if (BetAmount > 0) {
                          this.doSendChip(i, BetAmount);
                        }
                        BetAmount = RedAndBlackModel.instance.gameInfo.tableInfo.pos["" + (i + 1)];
                        if (BetAmount > 0) {
                          this.doSendChip(i, BetAmount, this.Node_public);
                        }
                      }
                      if (RedAndBlackModel.instance.myTotalBet > 0) {
                        Common.setButtonEnableWithGray(this.Button_x2, true);
                      }
                      this.Label_timer.node.active = RedAndBlackModel.instance.countDown > 3;
                      this.initCards();
                      break;
                    }
                  case eStatus.result:
                    {
                      var cards = [];
                      cards = cards.concat(RedAndBlackModel.instance.result.red);
                      cards = cards.concat(RedAndBlackModel.instance.result.black);
                      this.initCards(cards);
                      this.showCardLight();
                      this.showWinEffect();
                      break;
                    }
                }
                this.Label_gameNo.string = "No: " + RedAndBlackModel.instance.gameNo;
                break;
              }
            case eProto.HD_Bet:
              {
                // RedAndBlackModel.instance.myBetList[parseInt(data.pos) - 1] = RedAndBlackModel.instance.myBetList[parseInt(data.pos) - 1] || 0;
                // RedAndBlackModel.instance.myBetList[parseInt(data.pos) - 1] += parseInt(data.betAmount);
                RedAndBlackModel.instance.curBalance -= parseFloat(data.betAmount);
                this.updateGold();
                this.doSendChip(parseInt(data.pos) - 1, parseInt(data.betAmount));
                if (RedAndBlackModel.instance.gameStatus == eStatus.bet) {
                  Common.setButtonEnableWithGray(this.Button_x2, true);
                }
                break;
              }
            case eProto.HD_BetList:
              {
                var arrBetInfo = data;
                for (var _iterator8 = _createForOfIteratorHelperLoose(arrBetInfo), _step8; !(_step8 = _iterator8()).done;) {
                  var strInfo = _step8.value;
                  var betInfo = JSON.parse(strInfo);
                  if (RedAndBlackModel.instance.PlayerInfos[0] && betInfo.userId == RedAndBlackModel.instance.PlayerInfos[0].userId) {
                    this.doSendStar(betInfo.betType - 1);
                  }

                  //   RedAndBlackModel.instance.totalBetList[betInfo.betType - 1] = RedAndBlackModel.instance.totalBetList[betInfo.betType - 1] || 0;
                  //   RedAndBlackModel.instance.totalBetList[betInfo.betType - 1] += betInfo.betAmount;
                  for (var _i9 = 0; _i9 < RedAndBlackModel.instance.PlayerInfos.length; _i9++) {
                    var playerInfo = RedAndBlackModel.instance.PlayerInfos[_i9];
                    if (betInfo.userId == playerInfo.userId) {
                      var Node_root = this.Node_deskPlayer.getChildByName("Node_head_" + _i9);
                      this.doSendChip(betInfo.betType - 1, betInfo.betAmount, Node_root);
                      break;
                    } else {
                      this.doSendChip(betInfo.betType - 1, betInfo.betAmount, this.Node_public);
                    }
                  }
                }
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                if (RedAndBlackModel.instance.gameStatus == eStatus.bet) {
                  this.doClearChip();
                  if (RedAndBlackModel.instance.endBalance != 0) {
                    RedAndBlackModel.instance.curBalance = RedAndBlackModel.instance.endBalance;
                    RedAndBlackModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                  if (RedAndBlackModel.instance.prize) {
                    RedAndBlackModel.instance.PlayerInfos = RedAndBlackModel.instance.prize.seatPrize;
                    this.onUpdateDeskPlayer();
                  }
                  this.Label_gameNo.string = "No: " + RedAndBlackModel.instance.gameNo;
                  //
                  this.doSendCards();
                } else {
                  Common.setButtonEnableWithGray(this.Button_again, false);
                  Common.setButtonEnableWithGray(this.Button_x2, false);
                }
                this.showCountDown();
                break;
              }
            case eProto.HD_OpenResult:
              {
                this.doEnd();
                break;
              }
            case eProto.HD_history:
              {
                this.updateRecord();
                break;
              }
            case eProto.HD_leave:
              {
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case eProto.HD_QueryBetRecord:
              {
                break;
              }
          }
        };
        return RedAndBlackGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Button_x2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_again", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "areaBtnParent", [_dec5], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labNickName", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labGold", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sprAvatar", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_head", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_timer", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Label_timer", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "tittle_prizeng", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "daojishi", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_public", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_deskPlayer", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_betArea", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "betChip", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Button_chip", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardRed", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardBlack", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "fapai", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "figureEffect_red", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "figureEffect_black", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "vs", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Node_carType_red", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_carType_black", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_recordTemp", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_record", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "cm_light", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Node_btnGroup", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameChip", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameChip_big", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "gameTip", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "star", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "betEffect", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "Node_star", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "Node_chipTag", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardLest", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardRight", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "cardwin_red", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "cardwin_black", [_dec46], {
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

System.register("chunks:///_virtual/RedAndBlackModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './RedAndBlackDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef, eStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eStatus = module.eStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "024f6JYHE1BDqr63bZ85uo1", "RedAndBlackModel", undefined);
      var RedAndBlackModel = exports('RedAndBlackModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(RedAndBlackModel, _GameDef$BaseSington);
        function RedAndBlackModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          //    //抽水
          _this.nPummping = 0;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.curBet = 0;
          _this.countDown = 0;
          _this.chipList = [];
          _this.gameNo = null;
          _this.BetSecond = 0;
          _this.TotalSecond = 0;
          _this.gameStatus = eStatus.none;
          _this.gameInfo = null;
          _this.myBetList = [0, 0, 0];
          _this.totalBetList = [0, 0, 0];
          _this.myBetListBack = [0, 0, 0];
          _this.PosMaxBet = {};
          _this.history = [];
          _this.SendCards = [];
          _this.ShowCard = null;
          _this.SendCount = null;
          _this.Rate = [];
          _this.myTotalBet = 0;
          _this.result = null;
          _this.prize = null;
          _this.PlayerCount = 0;
          _this.PlayerInfos = null;
          _this.lightPos = 0;
          _this.firstUserID = "";
          ////////////////////////////
          _this.bigRoadMap = [];
          _this.bigEyeRoadMap = [];
          _this.smallRoadMap = [];
          _this.roachRoadMap = [];
          /////////////////////////////////////////
          //    //聊天列表-文本
          _this._chatQueueList = [];
          //    //聊天列表-表情
          _this._expressionQueueList = [];
          return _this;
        }
        var _proto = RedAndBlackModel.prototype;
        _proto.clearGameData = function clearGameData() {};
        _createClass(RedAndBlackModel, [{
          key: "chatQueueList",
          get: function get() {
            return this._chatQueueList;
          },
          set: function set(chatQueueList) {
            this._chatQueueList = chatQueueList;
          }
        }, {
          key: "expressionQueueList",
          get: function get() {
            return this._expressionQueueList;
          },
          set: function set(expressionQueueList) {
            this._expressionQueueList = expressionQueueList;
          }
        }]);
        return RedAndBlackModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RedAndBlackScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './RedAndBlackDef.ts', './RedAndBlackUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, sys, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, RedAndBlackUtils, Common;
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
      RedAndBlackUtils = module.RedAndBlackUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "addc808L0BNa5xTDrjU9ddq", "RedAndBlackScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RedAndBlackScene = exports('default', (_dec = ccclass("RedAndBlackScene"), _dec2 = menu("game/RedAndBlackGame/RedAndBlackScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RedAndBlackScene, _Component);
        function RedAndBlackScene() {
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
        var _proto = RedAndBlackScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          RedAndBlackUtils.instance.bundle = assetManager.getBundle(cBundle);
          RedAndBlackUtils.instance.preLoad();
          RedAndBlackUtils.instance.playBgMusic();
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
            RedAndBlackUtils.instance.bundle.load("prefab/RedAndBlackGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
        return RedAndBlackScene;
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

System.register("chunks:///_virtual/RedAndBlackUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './RedAndBlackDef.ts', './Common.ts', './RedAndBlackModel.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, GameDef, AudioManager, eSound, strColor, strValue, Common, RedAndBlackModel;
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
    }, function (module) {
      RedAndBlackModel = module.RedAndBlackModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1632bm62pxBy5BxeHdE6VFY", "RedAndBlackUtils", undefined);
      var RedAndBlackUtils = exports('RedAndBlackUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(RedAndBlackUtils, _GameDef$BaseSington);
        function RedAndBlackUtils() {
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
        var _proto = RedAndBlackUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/RedAndBlackGameView");
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
                  arrHLoad.push(this.asyncLoadDir("textures/chip", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpFrame), _step2; !(_step2 = _iterator2()).done;) {
                        var _SpriteFrame2 = _step2.value;
                        _this4.arrSpriteFrame[_SpriteFrame2.name] = _SpriteFrame2;
                      }
                    }
                  }));
                  // arrHLoad.push(
                  //   this.asyncLoadDir(`I18n/${i18n.LangKey}/dynamic`, cc.SpriteFrame, (err, arrSpFrame: cc.SpriteFrame[]) => {
                  //     if (!err) {
                  //       for (const SpriteFrame of arrSpFrame) {
                  //         this.arrSpriteFrame[SpriteFrame.name] = SpriteFrame;
                  //       }
                  //     }
                  //   }),
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
          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
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
          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
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
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
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

        _proto.getCardFrame = function getCardFrame(vCard) {
          var color = vCard >> 4;
          var value = vCard & 0xf;
          var strFrame = "" + strColor[color - 1] + strValue[value - 2];
          if (this.arrSpriteFrame) {
            return this.arrSpriteFrame[strFrame];
          }
          return null;
        };
        _proto.getSprFrame = function getSprFrame(strName) {
          if (this.arrSpriteFrame) {
            return this.arrSpriteFrame[strName];
          }
          return null;
        }
        // getSymbolAniName(symbolIndex, isIdle: boolean = true) {
        //     //        // if (isIdle) {
        //     //        //     return null;
        //     //        // }

        //     let strAni = [];
        //     // switch (symbolIndex) {
        //     //     case RedAndBlackDef.eSymbol.NONE: {
        //     //         let index = Math.floor(Math.random() * (symbol_aniName.length - 3) + 3);
        //     //         strAni.push(`${symbol_aniName[index]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     //     case RedAndBlackDef.eSymbol.SCATTER: {
        //     //         if (isIdle) {
        //     //             strAni.push(`free_idle`);
        //     //         } else {
        //     //             strAni.push(`free_intro`);
        //     //             strAni.push(`free_intro`);
        //     //         }
        //     //         break;
        //     //     }
        //     //     case RedAndBlackDef.eSymbol.SpecialWild: {
        //     //         strAni.push(`${symbol_aniName[symbolIndex - 1]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     //     default: {
        //     //         strAni.push(`${symbol_aniName[symbolIndex - 1]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     // }
        //     if (!strAni) {
        //         return null;
        //     }

        //     //        // gts.Debug.Log(`==getSymbolAniName=strAni=${strAni}=symbolIndex=${symbolIndex}`);
        //     return strAni;
        // }
        // getFontData(name) {
        //     if (!this.arrFontData) {
        //         return null;
        //     }

        //     return this.arrFontData[name];
        // }
        // getSkeletonData(index, isHorizontal = false) {
        //     if (!this.arrSkeletonData) {
        //         return null;
        //     }

        //     if (typeof index == "string") {
        //         return this.arrSkeletonData[index];
        //     }

        //     let strAni = "icon";
        //     let ret = this.arrSkeletonData[strAni];
        //     if (!ret) {
        //         return null;
        //     }
        //     return ret;
        // }
        ;

        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        }

        ///////////////////////////////////////////////////////////
        //path road
        ;

        _proto.parseBigRoad = function parseBigRoad() {
          var rowNum = 6;
          var isBigBack = false;
          var iCol_real = 0;
          var iCol_add = 0;
          var iRow = 0;
          RedAndBlackModel.instance.bigRoadMap = [];
          var history = RedAndBlackModel.instance.history.slice(0, 105);
          var openResults = history.reverse();
          for (var i = 0; i < openResults.length; i++) {
            //big:red small:black
            var openInfo = openResults[i];
            var isBig = openInfo.winner == 1;
            if (i != 0) {
              if (isBigBack != isBig) {
                iRow = 0;
                iCol_real++;
                iCol_add = 0;
              } else if (iCol_add == 0 && iRow < rowNum - 1 && (!RedAndBlackModel.instance.bigRoadMap[iCol_real + iCol_add] || !RedAndBlackModel.instance.bigRoadMap[iCol_real + iCol_add][iRow + 1])) {
                iRow++;
              } else {
                iCol_add++;
              }
            }
            RedAndBlackModel.instance.bigRoadMap[iCol_real + iCol_add] = RedAndBlackModel.instance.bigRoadMap[iCol_real + iCol_add] || [];
            RedAndBlackModel.instance.bigRoadMap[iCol_real + iCol_add][iRow] = openInfo.winner;
            isBigBack = isBig;
          }

          // gts.Debug.Log(JSON.stringify(RedAndBlackModel.instance.bigRoadMap));
        };

        _proto.parseBigEyeRoad = function parseBigEyeRoad() {
          var rowNum = 6;
          var bigEyeRecord = [];
          var bigRoadMap = RedAndBlackModel.instance.bigRoadMap.slice();
          for (var iCol = 1; iCol < bigRoadMap.length; iCol++) {
            var startRow = iCol == 1 ? 1 : 0;
            var arrValue = bigRoadMap[iCol];
            var num = 0;
            for (var _iRow = startRow; _iRow < arrValue.length; _iRow++) {
              if (_iRow == 0) {
                var len_0 = bigRoadMap[iCol - 1].length;
                var len_1 = bigRoadMap[iCol - 2].length;
                num = 0;
                bigEyeRecord.push(len_0 == len_1 ? 1 : 2);

                // if (len_0 == len_1) {
                //     bigEyeRecord.push(1);
                //     num = 0;
                // } else {
                //     bigEyeRecord.push(num > 0 ? 1 : 2);
                //     num++;
                // }
              } else {
                var arrValue_1 = bigRoadMap[iCol - 1];
                if (arrValue_1[_iRow]) {
                  bigEyeRecord.push(1);
                  num = 0;
                } else {
                  bigEyeRecord.push(num > 0 ? 1 : 2);
                  num++;
                }
              }
            }
          }
          var isBigBack = false;
          var iCol_real = 0;
          var iCol_add = 0;
          var iRow = 0;
          RedAndBlackModel.instance.bigEyeRoadMap = [];
          for (var i = 0; i < bigEyeRecord.length; i++) {
            //big:red small:black
            var value = bigEyeRecord[i];
            var isBig = value == 1;
            if (i != 0) {
              if (isBigBack != isBig) {
                iRow = 0;
                iCol_real++;
                iCol_add = 0;
              } else if (iCol_add == 0 && iRow < rowNum - 1 && (!RedAndBlackModel.instance.bigEyeRoadMap[iCol_real + iCol_add] || !RedAndBlackModel.instance.bigEyeRoadMap[iCol_real + iCol_add][iRow + 1])) {
                iRow++;
              } else {
                iCol_add++;
              }
            }
            RedAndBlackModel.instance.bigEyeRoadMap[iCol_real + iCol_add] = RedAndBlackModel.instance.bigEyeRoadMap[iCol_real + iCol_add] || [];
            RedAndBlackModel.instance.bigEyeRoadMap[iCol_real + iCol_add][iRow] = value;
            isBigBack = isBig;
          }
        };
        _proto.parseSmallRoad = function parseSmallRoad() {
          var rowNum = 6;
          var smallRecord = [];
          var bigRoadMap = RedAndBlackModel.instance.bigRoadMap.slice();
          for (var iCol = 2; iCol < bigRoadMap.length; iCol++) {
            var startRow = iCol == 2 ? 1 : 0;
            var arrValue = bigRoadMap[iCol];
            var num = 0;
            for (var _iRow2 = startRow; _iRow2 < arrValue.length; _iRow2++) {
              if (_iRow2 == 0) {
                var len_0 = bigRoadMap[iCol - 1].length;
                var len_1 = bigRoadMap[iCol - 3].length;
                num = 0;
                smallRecord.push(len_0 == len_1 ? 1 : 2);
              } else {
                var arrValue_1 = bigRoadMap[iCol - 2];
                if (arrValue_1[_iRow2]) {
                  smallRecord.push(1);
                  num = 0;
                } else {
                  smallRecord.push(num > 0 ? 1 : 2);
                  num++;
                }
              }
            }
          }
          var isBigBack = false;
          var iCol_real = 0;
          var iCol_add = 0;
          var iRow = 0;
          RedAndBlackModel.instance.smallRoadMap = [];
          for (var i = 0; i < smallRecord.length; i++) {
            //big:red small:black
            var value = smallRecord[i];
            var isBig = value == 1;
            if (i != 0) {
              if (isBigBack != isBig) {
                iRow = 0;
                iCol_real++;
                iCol_add = 0;
              } else if (iCol_add == 0 && iRow < rowNum - 1 && (!RedAndBlackModel.instance.smallRoadMap[iCol_real + iCol_add] || !RedAndBlackModel.instance.smallRoadMap[iCol_real + iCol_add][iRow + 1])) {
                iRow++;
              } else {
                iCol_add++;
              }
            }
            RedAndBlackModel.instance.smallRoadMap[iCol_real + iCol_add] = RedAndBlackModel.instance.smallRoadMap[iCol_real + iCol_add] || [];
            RedAndBlackModel.instance.smallRoadMap[iCol_real + iCol_add][iRow] = value;
            isBigBack = isBig;
          }
        }

        //小强路
        ;

        _proto.parseRoachRoad = function parseRoachRoad() {
          var rowNum = 6;
          var roachRecord = [];
          var bigRoadMap = RedAndBlackModel.instance.bigRoadMap.slice();
          for (var iCol = 3; iCol < bigRoadMap.length; iCol++) {
            var startRow = iCol == 3 ? 1 : 0;
            var arrValue = bigRoadMap[iCol];
            var num = 0;
            for (var _iRow3 = startRow; _iRow3 < arrValue.length; _iRow3++) {
              if (_iRow3 == 0) {
                var len_0 = bigRoadMap[iCol - 1].length;
                var len_1 = bigRoadMap[iCol - 4].length;
                num = 0;
                roachRecord.push(len_0 == len_1 ? 1 : 2);
              } else {
                var arrValue_1 = bigRoadMap[iCol - 3];
                if (arrValue_1[_iRow3]) {
                  roachRecord.push(1);
                  num = 0;
                } else {
                  roachRecord.push(num > 0 ? 1 : 2);
                  num++;
                }
              }
            }
          }
          var isBigBack = false;
          var iCol_real = 0;
          var iCol_add = 0;
          var iRow = 0;
          RedAndBlackModel.instance.roachRoadMap = [];
          for (var i = 0; i < roachRecord.length; i++) {
            //big:red small:black
            var value = roachRecord[i];
            var isBig = value == 1;
            if (i != 0) {
              if (isBigBack != isBig) {
                iRow = 0;
                iCol_real++;
                iCol_add = 0;
              } else if (iCol_add == 0 && iRow < rowNum - 1 && (!RedAndBlackModel.instance.roachRoadMap[iCol_real + iCol_add] || !RedAndBlackModel.instance.roachRoadMap[iCol_real + iCol_add][iRow + 1])) {
                iRow++;
              } else {
                iCol_add++;
              }
            }
            RedAndBlackModel.instance.roachRoadMap[iCol_real + iCol_add] = RedAndBlackModel.instance.roachRoadMap[iCol_real + iCol_add] || [];
            RedAndBlackModel.instance.roachRoadMap[iCol_real + iCol_add][iRow] = value;
            isBigBack = isBig;
          }
        };
        return RedAndBlackUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/RedAndBlackGame', 'chunks:///_virtual/RedAndBlackGame'); 
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