System.register("chunks:///_virtual/CricketRoulette_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "8cc54AnGh5GoYiawGVkVHSY", "CricketRoulette_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var CricketRoulette_btnEffect = exports('default', (_dec = ccclass("CricketRouletteBtnEffect"), _dec2 = menu("game/CricketRouletteGame/CricketRoulette_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CricketRoulette_btnEffect, _Component);
        function CricketRoulette_btnEffect() {
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
        var _proto = CricketRoulette_btnEffect.prototype;
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

        _createClass(CricketRoulette_btnEffect, [{
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

        return CricketRoulette_btnEffect;
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

System.register("chunks:///_virtual/CricketRoulette_Help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CricketRouletteModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, CricketRouletteModel;
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
    }, function (module) {
      CricketRouletteModel = module.CricketRouletteModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0c460v+zlpJ5JUFd/CU6ddd", "CricketRoulette_Help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CricketRoulette_Help = exports('CricketRoulette_Help', (_dec = ccclass("CricketRoulette_Help"), _dec2 = menu("game/CricketRouletteGame/CricketRoulette_Help"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CricketRoulette_Help, _Component);
        function CricketRoulette_Help() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "helpRate", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CricketRoulette_Help.prototype;
        /////////////////////////////
        _proto.start = function start() {
          for (var i = 0; i < this.helpRate.children.length; i++) {
            var Label_rate = this.helpRate.children[i];
            Label_rate.getComponent(Label).string = "X" + CricketRouletteModel.instance.Rate[i];
          }
        };
        return CricketRoulette_Help;
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

System.register("chunks:///_virtual/CricketRoulette_path.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './EventManager.ts', './CricketRouletteDef.ts', './CricketRouletteModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, view, v3, Component, Common, EventManager, areaMap, eEvent, CricketRouletteModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      areaMap = module.areaMap;
      eEvent = module.eEvent;
    }, function (module) {
      CricketRouletteModel = module.CricketRouletteModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "746afu/TwRDF5WNNFishpS/", "CricketRoulette_path", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CricketRoulette_path = exports('default', (_dec = ccclass("CricketRoulette_path"), _dec2 = menu("game/CricketRouletteGame/CricketRoulette_path"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CricketRoulette_path, _Component);
        function CricketRoulette_path() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_list", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CricketRoulette_path.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          var size = view.getVisibleSize();
          if (!Common.checkStandard()) {
            this.node.scale = v3(750 / 1080, 750 / 1080, 1);
          }
          this.updatePath();
        };
        _proto.updatePath = function updatePath() {
          var _this2 = this;
          var history = CricketRouletteModel.instance.history.slice();
          history = history.slice(0, 60).reverse();
          var hList = [];
          var loseCounts = [];
          for (var i = 0; i < 8; i++) {
            loseCounts[i] = 0;
          }
          for (var _i = 0; _i < history.length; _i++) {
            var openNum = history[_i];
            var nextOpenIndex = _i < history.length - 1 ? areaMap["" + history[_i + 1]] : null;
            var index = areaMap["" + openNum];
            for (var _i2 = 0; _i2 < 8; _i2++) {
              loseCounts[_i2] = index == _i2 ? 0 : loseCounts[_i2] + 1;
            }
            hList.push({
              openNum: openNum,
              loseCounts: loseCounts.slice(),
              nextOpenIndex: nextOpenIndex
            });
          }
          this.scrollView_list.scrollView.content.destroyAllChildren();
          this.scrollView_list.setData(hList, function () {
            _this2.scrollView_list.scrollView.scrollToRight(1.0);
          });
          this.scrollView_list.refresh();
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(eEvent.onUpdateRecord, this.updatePath, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(eEvent.onUpdateRecord, this.updatePath, this);
        };
        return CricketRoulette_path;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_list", [_dec3], {
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

System.register("chunks:///_virtual/CricketRoulette_pathItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './CricketRouletteDef.ts', './GUtil.ts', './CricketRouletteUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, UIOpacity, v3, UITransform, v2, Component, AutoChangeParent, areaMap, GUtil, CricketRouletteUtils;
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
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      UITransform = module.UITransform;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      areaMap = module.areaMap;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      CricketRouletteUtils = module.CricketRouletteUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "b9c17lKBwRBnJ12W+2ae0EJ", "CricketRoulette_pathItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var CricketRoulette_pathItem = exports('default', (_dec = ccclass("CricketRoulettePathItem"), _dec2 = menu("game/CricketRouletteGame/CricketRoulette_pathItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CricketRoulette_pathItem, _Component);
        function CricketRoulette_pathItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_line", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_icon", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_icon", _descriptor6, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = CricketRoulette_pathItem.prototype;
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
          this.Sprite_icon.node.active = true;
          this.Sprite_icon.spriteFrame = CricketRouletteUtils.instance.getSpriteFrame("icon_" + (areaMap["" + tempData.openNum] + 1) + "_2");
          this.Sprite_line.active = tempData.nextOpenIndex != null;

          // let posY = [320, 68.3, 137.1, -69.3, -206.9, -275.7, -344.5, -138.1, 205.9, 274.7];
          this.Label_gameNo.string = "" + (this.item.itemIndex + 1);
          for (var i = 0; i < 8; i++) {
            var counts = tempData.loseCounts[i];
            if (counts == 0) {
              var curPos = this.Label_icon[i].node.position;
              this.Label_icon[i].node.active = false;
              this.Sprite_icon.node.position = curPos;
              this.Sprite_line.position = curPos;
              if (this.Sprite_line.active) {
                var nextPos = v3(100, this.Label_icon[tempData.nextOpenIndex].node.position.y, 0);
                this.Sprite_line.angle = this.getAngle(curPos, nextPos);
                this.Sprite_line.getComponent(UITransform).width = GUtil.GetDistance(curPos, nextPos);
              }
            } else {
              this.Label_icon[i].node.active = true;
              this.Label_icon[i].string = "" + counts;
            }
          }
        };
        _proto.getAngle = function getAngle(start, end) {
          //        //计算出朝向
          var Keno = end.x - start.x;
          var dy = end.y - start.y;
          var dir = v2(Keno, dy);

          //        //根据朝向计算出夹角弧度
          var angle = dir.signAngle(v2(1, 0));

          //        //将弧度转换为欧拉角
          var degree = angle / Math.PI * 180;
          return -degree;
        };
        _createClass(CricketRoulette_pathItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return CricketRoulette_pathItem;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_line", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_icon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_icon", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      // this.line.getComponent(UITransform).width = distance;
      // this.line.angle = -this.getAngle(curPos, nextPos);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CricketRoulette_record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './NetManager.ts', './CricketRouletteDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "20f1diAbB1CQI4PXaHm8ClT", "CricketRoulette_record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var CricketRoulette_record = exports('default', (_dec = ccclass("CricketRoulette_record"), _dec2 = menu("game/CricketRouletteGame/CricketRoulette_record"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CricketRoulette_record, _Component);
        function CricketRoulette_record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CricketRoulette_record.prototype;
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
            RecordType: "cricketRoulette"
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
        return CricketRoulette_record;
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

System.register("chunks:///_virtual/CricketRoulette_recordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts', './CricketRouletteDef.ts', './CricketRouletteUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Sprite, UIOpacity, color, Component, AutoChangeParent, Common, areaMap, CricketRouletteUtils;
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
    }, function (module) {
      areaMap = module.areaMap;
    }, function (module) {
      CricketRouletteUtils = module.CricketRouletteUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "9f7bcwiEHlDVaUPTIf/kWCb", "CricketRoulette_recordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var CricketRoulette_recordItem = exports('default', (_dec = ccclass("CricketRoulette_recordItem"), _dec2 = menu("game/CricketRouletteGame/CricketRoulette_recordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CricketRoulette_recordItem, _Component);
        function CricketRoulette_recordItem() {
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
          _initializerDefineProperty(_this, "Node_resultIcon", _descriptor9, _assertThisInitialized(_this));
          _this.Label_resultNum = null;
          _this._gtItem = null;
          return _this;
        }
        var _proto = CricketRoulette_recordItem.prototype;
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
          this.Sprite_bg.getComponent(Sprite).color = tempData.Income > 0 ? color(255, 0, 0, 255) : color(0, 255, 0, 255);
          this.Label_gameNo.string = Common.setGameNo(tempData.GameNo);
          var date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_time.string = date.time;
          this.Label_date.string = date.date;
          this.Label_bet.string = "" + Common.ChangeMoneyFormat(tempData.BetAmount, 3);
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + Common.ChangeMoneyFormat(tempData.Income, 3);
            this.Label_win.color = color(255, 0, 0, 255);
            this.Sprite_bg.getComponent(Sprite).color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + Common.ChangeMoneyFormat(tempData.Income, 3);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
            this.Sprite_bg.getComponent(Sprite).color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
          var result = JSON.parse(tempData.GameResult);
          var spFrame = CricketRouletteUtils.instance.getSpriteFrame("icon_" + (areaMap["" + result.OpenNum] + 1) + "_2");
          this.Node_resultIcon.spriteFrame = spFrame;
        };
        _createClass(CricketRoulette_recordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return CricketRoulette_recordItem;
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_resultIcon", [_dec11], {
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

System.register("chunks:///_virtual/CricketRoulette_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CricketRouletteUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, CricketRouletteUtils;
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
      CricketRouletteUtils = module.CricketRouletteUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e8f0bSiFNlA+qHxDRcRXUAm", "CricketRoulette_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var CricketRoulette_winTip = exports('default', (_dec = ccclass("CricketRouletteWinTip"), _dec2 = menu("game/CricketRouletteGame/CricketRoulette_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CricketRoulette_winTip, _Component);
        function CricketRoulette_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CricketRoulette_winTip.prototype;
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
            _this2.Label_win.string = CricketRouletteUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            CricketRouletteUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${CricketRouletteUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            CricketRouletteUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return CricketRoulette_winTip;
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

System.register("chunks:///_virtual/CricketRouletteCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './DataManager.ts', './NetManager.ts', './CricketRouletteDef.ts', './CricketRouletteModel.ts', './Common.ts', './ViewManager.ts', './EventManager.ts', './ConfigManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, sys, assetManager, i18n, GameDef, DataManager, UserKey, NetManager, eProto, eEvent, cBundle, CricketRouletteModel, Common, ViewManager, EventManager, ConfigManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
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
      CricketRouletteModel = module.CricketRouletteModel;
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
      cclegacy._RF.push({}, "67cf53oG+5BqJB6vAkclpSw", "CricketRouletteCtrl", undefined);
      var CricketRouletteCtrl = exports('CricketRouletteCtrl', /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(CricketRouletteCtrl, _GameDef$BaseCtrl);
        function CricketRouletteCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          /**
           * 请求下注
           * @param data
           */
          _this.isReqBet = false;
          return _this;
        }
        var _proto = CricketRouletteCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete CricketRouletteCtrl._instance;
          CricketRouletteCtrl._instance = null;
          CricketRouletteModel.destroy();
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
          if (!CricketRouletteModel.instance.gameInfo) {
            return;
          }
          if (CricketRouletteModel.instance.countDown < 3) {
            Common.showTip(i18n.lang.disableBet, sys.isMobile);
            return false;
          }
          if (CricketRouletteModel.instance.myBetList[pos] + betAmount > CricketRouletteModel.instance.PosMaxBet["" + pos]) {
            Common.showTip(i18n.lang[10064].replace("{0}", "" + Common.ChangeMoneyFormat(CricketRouletteModel.instance.PosMaxBet["" + pos], 3)), sys.isMobile);
            return false;
          }
          this.SendData(eProto.HD_bet, {
            pos: pos,
            amount: betAmount,
            gameNo: CricketRouletteModel.instance.gameNo
          });
          return true;
        }

        //    /**请求抽水 */
        ;

        _proto.reqPumping = function reqPumping() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getPumping, {
            gameName: "cricketroulette"
          });
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_leave);
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // if (data.cmd != CricketRouletteDef.eProto.allBet && data.cmd != CricketRouletteDef.eProto.Bet) {
          gts.Debug.Log("===onRecvData==", JSON.stringify(data));
          // }

          if (data.Code && data.Code != 0) {
            if (data.Code != 30009) {
              Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            }
            return;
          }
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
            if (data.cmd == eProto.HD_bet) {
              this.isReqBet = false;
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_enter:
              {
                CricketRouletteModel.instance.gameInfo = data.Data;
                CricketRouletteModel.instance.chipList = data.Data.Chips;
                CricketRouletteModel.instance.gameNo = data.Data.GameNo;
                CricketRouletteModel.instance.BetSecond = data.Data.BetSecond;
                CricketRouletteModel.instance.TotalSecond = data.Data.TotalSecond;
                CricketRouletteModel.instance.countDown = data.Data.Countdown;
                CricketRouletteModel.instance.lightPos = data.Data.OpenNum || 0;
                CricketRouletteModel.instance.history = data.Data.Results.slice();
                CricketRouletteModel.instance.PosMaxBet = data.Data.PosMaxBet;
                CricketRouletteModel.instance.PlayerCount = data.Data.PlayerCount;
                CricketRouletteModel.instance.myBetList = data.Data.MyTotalBet;
                CricketRouletteModel.instance.totalBetList = data.Data.TotalBet;
                CricketRouletteModel.instance.PlayerInfos = data.Data.PlayerInfos.slice();
                CricketRouletteModel.instance.result = data.Data.OpenInfo;
                CricketRouletteModel.instance.prize = data.Data.prize;
                CricketRouletteModel.instance.gameStatus = data.Data.State;
                CricketRouletteModel.instance.SendCards = data.Data.SendCards;
                CricketRouletteModel.instance.ShowCard = data.Data.ShowCard;
                CricketRouletteModel.instance.SendCount = data.Data.SendCount;

                //临时
                for (var i = 0; i < CricketRouletteModel.instance.history.length; i++) {
                  if (CricketRouletteModel.instance.history[i] > 23) {
                    CricketRouletteModel.instance.history[i] = 0;
                  }
                }
                var keys = Object.keys(data.Data.PosOdds);
                for (var _i3 = 0; _i3 < keys.length; _i3++) {
                  var odds = data.Data.PosOdds[keys[_i3]];
                  CricketRouletteModel.instance.Rate[_i3] = odds;
                }
                break;
              }
            case eProto.gameStart:
              {
                emitData = data.Data;
                break;
              }
            case eProto.allBet:
              {
                emitData = data.Data;
                break;
              }
            case eProto.changeState:
              {
                CricketRouletteModel.instance.gameStatus = data.Data;
                break;
              }
            case eProto.Bet:
              {
                emitData = data.Data;
                break;
              }
            case eProto.HD_bet:
              {
                emitData = data.Data;
                // CricketRouletteModel.instance.myBetList[data.Data.Pos] += data.Data.Amount;
                break;
              }
            case eProto.sendCards:
              {
                CricketRouletteModel.instance.SendCards = data.Data;
                break;
              }
            case eProto.open:
              {
                CricketRouletteModel.instance.result = data.Data;

                //临时
                if (CricketRouletteModel.instance.result.OpenNum > 23) {
                  CricketRouletteModel.instance.result.OpenNum = 0;
                }
                //临时
                if (!CricketRouletteModel.instance.result.WinPos) {
                  CricketRouletteModel.instance.result.WinPos = [0];
                }
                CricketRouletteModel.instance.history.unshift(CricketRouletteModel.instance.result.OpenNum);
                break;
              }
            case eProto.prize:
              {
                CricketRouletteModel.instance.prize = data.Data;
                break;
              }
            case eProto.getPumping:
              {
                CricketRouletteModel.instance.nPummping = data.Data.Pumping;
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
                gts.Debug.LogWarr("==CricketRoulette=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (CricketRouletteModel.instance.curBalance > 0) {
                  CricketRouletteModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                CricketRouletteModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==CricketRoulette=pushWallet==" + _HD_Wallet.VndBalance);
                if (CricketRouletteModel.instance.curBalance > 0) {
                  CricketRouletteModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                CricketRouletteModel.instance.curBalance = _HD_Wallet.VndBalance;
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
          // this.SendData(CricketRouletteDef.eProto.getInfo, {});
        };
        _proto.sendDoingBet = function sendDoingBet(pos, num) {
          if (CricketRouletteModel.instance.countDown < 3) {
            Common.showTip(i18n.lang.disableBet, sys.isMobile);
            return false;
          }
          if (CricketRouletteModel.instance.myBetList[pos] + num > CricketRouletteModel.instance.PosMaxBet["" + pos]) {
            Common.showTip(i18n.lang[10064].replace("{0}", "" + Common.ChangeMoneyFormat(CricketRouletteModel.instance.PosMaxBet["" + pos], 3)), sys.isMobile);
            return false;
          }
          this.SendData(eProto.HD_bet, {
            pos: pos,
            amount: num,
            gameNo: CricketRouletteModel.instance.gameNo
          });
          return true;
        };
        _proto.Send_ExitRoom = function Send_ExitRoom() {
          this.SendData(eProto.HD_leave);
        };
        _createClass(CricketRouletteCtrl, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(cBundle);
          }
        }]);
        return CricketRouletteCtrl;
      }(GameDef.BaseCtrl));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CricketRouletteDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eeb16+WblNA8oGx3vdYtE6F", "CricketRouletteDef", undefined);
      //gameDef moudle
      //
      var cBundle = exports('cBundle', "CricketRouletteGame");
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
        running: 2,
        result: 3
      });
      var areaMap = exports('areaMap', {
        "0": 0,
        "1": 6,
        "2": 7,
        "3": 6,
        "4": 5,
        "5": 4,
        "6": 2,
        "7": 3,
        "8": 5,
        "9": 7,
        "10": 6,
        "11": 7,
        "12": 1,
        "13": 6,
        "14": 7,
        "15": 6,
        "16": 5,
        "17": 4,
        "18": 2,
        "19": 3,
        "20": 5,
        "21": 7,
        "22": 6,
        "23": 7
      });
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_enter"] = "cricketRoulette/HD_enter";
        eProto["HD_leave"] = "cricketRoulette/HD_leave";
        eProto["HD_history"] = "cricketRoulette/HD_history";
        eProto["allBet"] = "cricketRoulette/allBet";
        eProto["HD_bet"] = "cricketRoulette/HD_bet";
        eProto["Bet"] = "cricketRoulette/bet";
        eProto["changeState"] = "cricketRoulette/changeState";
        eProto["sendCards"] = "cricketRoulette/sendCards";
        eProto["RECORD"] = "cricketRoulette/HD_Record";
        eProto["HD_QueryBetRecord"] = "lobby/HD_QueryBetRecord";
        eProto["gameStart"] = "cricketRoulette/gameStart";
        eProto["open"] = "cricketRoulette/open";
        eProto["prize"] = "cricketRoulette/prize";
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
        eSound["tip"] = "sound/tip";
        eSound["coin"] = "sound/coin";
        eSound["timeUp"] = "sound/timeUp";
        eSound["start"] = "sound/start";
        eSound["running"] = "sound/running";
        return eSound;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改

      /////////////////////////////////////
      /**钱包信息 */
      // ==recvData data==={"Data":{"UserID":"62496f2dc4ac29426adcb17e","XiaZhuPos":"6","XiaZhuV":482},"GameType":"CricketRoulette","Action":"HD_XiaZhu","ErrMsg":"操作成功","Code":0,"cmd":"CricketRoulette/HD_XiaZhu"}
      // builtin-2d-sprite (variant) : Failed to set property [texture], property not found.
      //注： 这个问题由 服务端发送的下注金额 引起，金额不在 CMList整数范围内
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CricketRouletteGame", ['./CricketRouletteCtrl.ts', './CricketRouletteDef.ts', './CricketRouletteGameView.ts', './CricketRouletteModel.ts', './CricketRouletteScene.ts', './CricketRouletteUtils.ts', './CricketRoulette_Help.ts', './CricketRoulette_btnEffect.ts', './CricketRoulette_path.ts', './CricketRoulette_pathItem.ts', './CricketRoulette_record.ts', './CricketRoulette_recordItem.ts', './CricketRoulette_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/CricketRouletteGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './BtnArea.ts', './DataManager.ts', './I18n.ts', './CricketRouletteDef.ts', './CricketRouletteModel.ts', './CricketRouletteCtrl.ts', './CricketRouletteUtils.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Label, Sprite, sp, Prefab, SpriteFrame, tween, v3, sys, find, instantiate, UITransform, Tween, UIOpacity, GameDef, ConfigManager, EventManager, NetManager, ViewManager, Common, BtnArea, DataManager, UserKey, i18n, eProto, eSound, eEvent, areaMap, eStatus, CricketRouletteModel, CricketRouletteCtrl, CricketRouletteUtils;
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
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      sp = module.sp;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
      sys = module.sys;
      find = module.find;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
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
      eSound = module.eSound;
      eEvent = module.eEvent;
      areaMap = module.areaMap;
      eStatus = module.eStatus;
    }, function (module) {
      CricketRouletteModel = module.CricketRouletteModel;
    }, function (module) {
      CricketRouletteCtrl = module.CricketRouletteCtrl;
    }, function (module) {
      CricketRouletteUtils = module.CricketRouletteUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38;
      cclegacy._RF.push({}, "aaed6Ep9fxHo4AcQgq/weaa", "CricketRouletteGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var CricketRouletteGameView = exports('default', (_dec = ccclass("CricketRouletteGameView"), _dec2 = menu("game/CricketRouletteGame/CricketRouletteGameView"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Sprite), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(sp.Skeleton), _dec15 = property(sp.Skeleton), _dec16 = property(sp.Skeleton), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Prefab), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(sp.Skeleton), _dec24 = property(Node), _dec25 = property(SpriteFrame), _dec26 = property(SpriteFrame), _dec27 = property(sp.Skeleton), _dec28 = property(sp.Skeleton), _dec29 = property(Prefab), _dec30 = property(Prefab), _dec31 = property(Prefab), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Prefab), _dec35 = property(Label), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(sp.Skeleton), _dec39 = property(Node), _dec40 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(CricketRouletteGameView, _GameDef$BaseView);
        function CricketRouletteGameView() {
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
          _initializerDefineProperty(_this, "daojishi", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "TV", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin_effect", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_public", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_deskPlayer", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betArea", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betChip", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_chip", _descriptor19, _assertThisInitialized(_this));
          // @property(Node)
          // pathContent: Node = null;
          // @property(Node)
          // pathItem: Node = null;
          // @property(SpriteFrame)
          // arrItemBg: SpriteFrame[] = [];
          // @property(Label)
          // Label_history_0: Label = null;
          // @property(Label)
          // Label_history_1: Label = null;
          _initializerDefineProperty(_this, "Node_record", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cm_light", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_btnGroup", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameChip", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameChip_big", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameTip", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winner", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_star", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor33, _assertThisInitialized(_this));
          //
          _initializerDefineProperty(_this, "Node_chipTag", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_light", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lightEffect", _descriptor36, _assertThisInitialized(_this));
          // @property(Node)
          // Node_cardLest: Node = null;
          // @property(Node)
          // Node_cardRight: Node = null;
          // @property(Node)
          // Node_newLeft: Node = null;
          // @property(Node)
          // Node_newRight: Node = null;
          // @property(Node)
          // Node_endLight_blue: Node = null;
          // @property(Node)
          // Node_endLight_red: Node = null;
          // @property(Node)
          // Node_cardItem: Node = null;
          // @property(Sprite)
          // Node_openCard: Sprite = null;
          // @property(Label)
          // Label_sendCounts: Label = null;
          _initializerDefineProperty(_this, "Node_icon", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lightRoot", _descriptor38, _assertThisInitialized(_this));
          //    ////////////////////////////////////////////////////
          _this._area2btn = {};
          _this.startPos = 0;
          _this.totalRunTimes = 5;
          _this.totalPos = 0;
          return _this;
        }
        var _proto = CricketRouletteGameView.prototype;
        // @property(sp.Skeleton)
        // ghostEffect: sp.Skeleton = null;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, CricketRouletteCtrl.instance);
          this.initUIView();
          CricketRouletteUtils.instance.loadRes(function () {
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
          CricketRouletteModel.instance.clearGameData();
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

              // if (CricketRouletteCtrl.instance.isReqBet) {
              //     CricketRouletteCtrl.instance.reqBet();
              // }
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
          var strGold = Common.numFormat(CricketRouletteModel.instance.curBalance);
          if (strGold != this.labGold.string) {
            CricketRouletteUtils.instance.updateLabel(this.labGold, strGold);
          }
        };
        _proto.initUIView = function initUIView() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.sprAvatar);
          Common.nickNameFormatL(this.labNickName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.labGold.string = Common.numFormat(gold);
          // let grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          // if (grade) {
          //     Common.setGradeCode(this.Sprite_level, parseInt(grade));
          // }
        }

        // onClickCopy() {
        //     PlatformMgr.p.copyToClipBoard(this.Label_md5Text.string, sys.isMobile);
        // }
        ;

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
          if (CricketRouletteModel.instance.curBalance < CricketRouletteModel.instance.curBet) {
            Common.showTip(i18n.lang[10001], sys.isMobile);
            return;
          }

          // if (
          //     CricketRouletteModel.instance.gameStatus &&
          //     CricketRouletteModel.instance.gameStatus == CricketRouletteDef.eStatus.bet &&
          //     CricketRouletteModel.instance.countDown > 3
          // ) {
          gts.Debug.Log("==OnClicked==" + btn.node.name);
          var pos = btn.node.name.replace("Node_area_", "");
          CricketRouletteCtrl.instance.reqBet(parseInt(pos), CricketRouletteModel.instance.curBet);
          // if (CricketRouletteCtrl.instance.reqBet(parseInt(pos), CricketRouletteModel.instance.curBet)) {
          //     this.doSendChip(pos, CricketRouletteModel.instance.curBet);
          // }

          var betArea = this.Node_betArea.getChildByName("Node_area_" + pos);
          var light = betArea.getChildByName("light");
          if (!light.active) {
            light.active = true;
            light.getComponent(sp.Skeleton).setAnimation(0, "bet_" + (parseInt(pos) + 1), false);
            tween(light).delay(0.25).call(function () {
              light.active = false;
            }).start();
          }
          // }
        };

        _proto.doSendStar = function doSendStar(pos) {
          var Node_root = this.Node_deskPlayer.getChildByName("Node_head_" + 0);
          var Node_star = find("Node_area_" + pos + "/Node_star", this.Node_betArea); //this.Node_betArea.getChildByName(`Node_area_${areaIndex}`);
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
          CricketRouletteUtils.instance.playOneShot(eSound.coin);
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
            var newChip, lv, i, pBack, isMySelf, betArea, chipContent, newEffectNode, newEffect, Label_bet, totalBetList, Label_betScale, startPos, counts, toPos;
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
                  if (!(betAmount >= CricketRouletteModel.instance.chipList[CricketRouletteModel.instance.chipList.length - 1])) {
                    _context.next = 8;
                    break;
                  }
                  lv = CricketRouletteModel.instance.chipList.length - 1;
                  _context.next = 16;
                  break;
                case 8:
                  i = 0;
                case 9:
                  if (!(i < CricketRouletteModel.instance.chipList.length - 1)) {
                    _context.next = 16;
                    break;
                  }
                  if (!(betAmount >= CricketRouletteModel.instance.chipList[i] && betAmount < CricketRouletteModel.instance.chipList[i + 1])) {
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
                    CricketRouletteModel.instance.myTotalBet += betAmount;
                    newEffectNode = instantiate(this.coin_effect.node);
                    newEffectNode.active = true;
                    this.coin_effect.node.parent.addChild(newEffectNode);
                    newEffect = newEffectNode.getComponent(sp.Skeleton);
                    newEffect.setAnimation(0, "ara" + (pos + 1), false);
                    newEffect.setCompleteListener(function () {
                      newEffect.setCompleteListener(null);
                      newEffect.node.destroyFromParent();
                    });
                  }

                  //更新下注分数
                  Label_bet = isMySelf ? betArea.getChildByName("Label_myBet") : betArea.getChildByName("Label_totalBet");
                  Label_bet.active = true;
                  totalBetList = isMySelf ? CricketRouletteModel.instance.myBetList["" + pos] : CricketRouletteModel.instance.totalBetList["" + pos];
                  if (totalBetList == 0) {
                    totalBetList = betAmount;
                  }
                  Label_betScale = pos < 3 ? 1.0 : pos < 6 ? 1.25 : 1.5;
                  CricketRouletteUtils.instance.updateLabel(Label_bet, "" + Common.ChangeMoneyFormat(totalBetList, 3), Label_betScale);

                  //
                  startNode = startNode ? startNode : this.Button_chip;
                  startPos = startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  startPos = chipContent.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                  newChip.position = startPos;
                  counts = chipContent.children.length > 5 ? 5 : chipContent.children.length;
                  toPos = v3(0, (counts - 1) * 5, 0);
                  tween(newChip).to(0.3, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this5.mergeChip(chipContent);
                  }).start();
                case 37:
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
          this.Node_lightEffect.node.active = false;
          CricketRouletteModel.instance.result = null;
          CricketRouletteModel.instance.SendCards = null;
          CricketRouletteModel.instance.prize = null;
          CricketRouletteModel.instance.ShowCard = null;
          CricketRouletteModel.instance.SendCount = 0;
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
            var coinRoot = betArea.getChildByName("coinRoot");
            coinRoot.destroyAllChildren();
          }
          if (CricketRouletteModel.instance.myTotalBet > 0) {
            CricketRouletteModel.instance.myBetListBack = CricketRouletteModel.instance.myBetList.slice();
            CricketRouletteModel.instance.myTotalBet = 0;
            CricketRouletteModel.instance.myBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
          var isAgainEnable = false;
          for (var _iterator2 = _createForOfIteratorHelperLoose(CricketRouletteModel.instance.myBetListBack), _step2; !(_step2 = _iterator2()).done;) {
            var amount = _step2.value;
            if (amount > 0) {
              isAgainEnable = true;
              break;
            }
          }
          Common.setButtonEnableWithGray(this.Button_x2, false);
          Common.setButtonEnableWithGray(this.Button_again, isAgainEnable);
          CricketRouletteModel.instance.totalBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
                //                // this.Node_action.active = !this.Node_action.active;
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "Button_return":
              {
                CricketRouletteCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_record":
              {
                Common.loadPopBuddle("prefab/Node_record", CricketRouletteUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_rank", CricketRouletteUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_set", CricketRouletteUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_path", CricketRouletteUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_help", CricketRouletteUtils.instance.bundle, function () {}, function (prefab) {
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
                CricketRouletteModel.instance.curBet = CricketRouletteModel.instance.chipList[index];
                var background = this.Button_chip.getChildByName("background");
                background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[index];
                background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(CricketRouletteModel.instance.curBet, 3);
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
                for (var pos = 0; pos < CricketRouletteModel.instance.myBetList.length; pos++) {
                  var betAmount = CricketRouletteModel.instance.myBetList[pos];
                  if (betAmount > 0) {
                    CricketRouletteCtrl.instance.reqBet(pos, betAmount);
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
                for (var _pos = 0; _pos < CricketRouletteModel.instance.myBetListBack.length; _pos++) {
                  var _betAmount = CricketRouletteModel.instance.myBetListBack[_pos];
                  if (_betAmount > 0) {
                    CricketRouletteCtrl.instance.reqBet(_pos, _betAmount);
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
          if (!CricketRouletteModel.instance.PlayerInfos || CricketRouletteModel.instance.PlayerInfos.length == 0) {
            return;
          }
          var Label_public = this.Node_public.getChildByName("Label_public");
          Label_public.getComponent(Label).string = "" + CricketRouletteModel.instance.PlayerCount;
          CricketRouletteModel.instance.firstUserID = CricketRouletteModel.instance.PlayerInfos[0].Uid;
          var seatPlayer = CricketRouletteModel.instance.PlayerInfos.slice(0, 5);
          for (var i = 0; i < seatPlayer.length; i++) {
            var playerInfo = seatPlayer[i];
            var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", this.Node_deskPlayer);
            if (!Node_headInfo) {
              continue;
            }
            Node_headInfo.active = playerInfo != null;
            var head = find("mask/head", Node_headInfo);
            var Label_nickName = find("Label_nickName", Node_headInfo);
            var Label_gold = find("Label_gold", Node_headInfo);
            if (playerInfo) {
              Common.getHead(playerInfo.Avatar, head);
              Common.nickNameFormatL(Label_nickName, playerInfo.Nickname);
              Label_gold.getComponent(Label).string = "+" + Common.numFormat(playerInfo.Prize);
            }
          }
        };
        _proto.updateChipList = function updateChipList() {
          CricketRouletteModel.instance.chipList = CricketRouletteModel.instance.chipList.slice(0, 6);
          for (var i = 0; i < CricketRouletteModel.instance.chipList.length; i++) {
            var Button_chip = this.Node_btnGroup.getChildByName("Button_chip_" + i);
            if (!Button_chip) {
              break;
            }
            var _background = Button_chip.getChildByName("background");
            _background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[i];
            var betAmount = CricketRouletteModel.instance.chipList[i];
            _background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(betAmount, 3);
          }
          CricketRouletteModel.instance.curBet = CricketRouletteModel.instance.chipList[0];
          var background = this.Button_chip.getChildByName("background");
          background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[0];
          background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(CricketRouletteModel.instance.curBet, 3);

          //rates
          for (var _i = 0; _i < CricketRouletteModel.instance.Rate.length; _i++) {
            var odds = CricketRouletteModel.instance.Rate[_i];
            var betArea = this.Node_betArea.getChildByName("Node_area_" + _i);
            var Label_rate = betArea.getChildByName("Label_rate");
            Label_rate.getComponent(Label).string = "$" + odds + "x";
          }
        };
        _proto.updateRecord = function updateRecord() {
          var history = CricketRouletteModel.instance.history.slice(0, 10);
          var itemTemp = this.Node_record.getChildByName("Node_item_0");
          for (var i = 0; i < history.length; i++) {
            var result = history[i];
            var newItem = this.Node_record.getChildByName("Node_item_" + i);
            if (!newItem) {
              newItem = instantiate(itemTemp);
              newItem.name = "Node_item_" + i;
              this.Node_record.addChild(newItem);
            }
            newItem.active = true;
            var trend_light = newItem.getChildByName("trend_light");
            trend_light.active = false;
            result = result < 24 ? result : 0;
            var spFrame = CricketRouletteUtils.instance.getSpriteFrame("icon_" + (areaMap["" + result] + 1) + "_2");
            newItem.getComponent(Sprite).spriteFrame = spFrame;
          }
          if (history.length > 0) {
            var _trend_light = this.Node_record.children[0].getChildByName("trend_light");
            _trend_light.active = true;
          }
        };
        _proto.updateRoad = function updateRoad() {
          // const rowNum = 6;
          // const colNum = 17;
          // const startPosX = 21;
          // const startPosY = -21;
          // const distanceX = 40;
          // const distanceY = 40;
          // let isBigBack = false;
          // let iCol_real = 0;
          // let iCol_add = 0;
          // let iRow = 0;
          // let itemMap: { [index: string]: boolean } = {};
          // let history = CricketRouletteModel.instance.history.slice(0, 100);
          // let openResults = history.reverse();
          // let maxCol = 0;
          // let redCounts = 0;
          // let blueCounts = 0;
          // for (let i = 0; i < openResults.length; i++) {
          //     //3-10:小  11-18：大
          //     let openInfo = openResults[i];
          //     let isBig = openInfo.SendCount % 2 == 0;
          //     isBig ? redCounts++ : blueCounts++;
          //     let newItem = this.pathContent.getChildByName(`Node_item_${i}`);
          //     if (!newItem) {
          //         newItem = instantiate(this.pathItem);
          //         newItem.name = `Node_item_${i}`;
          //         this.pathContent.addChild(newItem);
          //     }
          //     newItem.active = true;
          //     newItem.getComponent(Sprite).spriteFrame = this.arrItemBg[isBig ? 0 : 1];
          //     if (i != 0) {
          //         if (isBigBack != isBig) {
          //             iRow = 0;
          //             iCol_real++;
          //             iCol_add = 0;
          //         } else if (iCol_add == 0 && iRow < rowNum - 1 && !itemMap[(iCol_real + iCol_add) * rowNum + colNum * (iRow + 1)]) {
          //             iRow++;
          //         } else {
          //             iCol_add++;
          //         }
          //     }
          //     Tween.stopAllByTarget(newItem);
          //     if (i == openResults.length - 1) {
          //         tween(newItem)
          //             .to(0.3, { scale: v3(1.2, 1.2, 1.2) })
          //             .to(0.3, { scale: v3(1, 1, 1) })
          //             .union()
          //             .repeatForever()
          //             .start();
          //     }
          //     let pos = v3(startPosX + (iCol_real + iCol_add) * distanceX, startPosY - iRow * distanceY, 0);
          //     newItem.position = pos;
          //     isBigBack = isBig;
          //     itemMap[(iCol_real + iCol_add) * rowNum + colNum * iRow] = true;
          //     if (iCol_real + iCol_add > maxCol) {
          //         maxCol = iCol_real + iCol_add;
          //     }
          // }
          // let blueRate = Math.round((blueCounts * 100) / history.length);
          // this.Label_history_0.string = `${blueRate}%`;
          // this.Label_history_1.string = `${100 - blueRate}%`;
          // let curPos = v3(-340, 120, 0);
          // if (maxCol >= colNum) {
          //     curPos.x -= (maxCol - colNum + 1) * distanceX;
          // }
          // this.pathContent.position = curPos;
        };
        _proto.onUpdatePath = function onUpdatePath() {
          // this.updateRoad();
          this.updateRecord();
        };
        _proto.showCountDown = function showCountDown() {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            var countDown = CricketRouletteModel.instance.countDown;
            Tween.stopAllByTarget(_this8.Node_timer);
            _this8.Label_timer.string = "" + countDown;
            _this8.Node_timer.active = true;
            tween(_this8.Node_timer).delay(1).call(function () {
              CricketRouletteModel.instance.countDown--;
              _this8.Label_timer.string = "" + CricketRouletteModel.instance.countDown;
              CricketRouletteModel.instance.countDown > 3 ? CricketRouletteUtils.instance.playOneShot(eSound.timeUp) : CricketRouletteModel.instance.countDown > 0 ? CricketRouletteUtils.instance.playOneShot(eSound.countDown) : CricketRouletteUtils.instance.playOneShot(eSound.warning);
              if (CricketRouletteModel.instance.countDown == 3 && _this8.gameTip.animation != "stop") {
                _this8.gameTip.node.active = true;
                _this8.gameTip.setAnimation(0, "stop", false);
                _this8.gameTip.setCompleteListener(function () {
                  _this8.gameTip.setCompleteListener(null);
                  _this8.gameTip.node.active = false;
                });
                _this8.daojishi.node.active = true;
                _this8.daojishi.setAnimation(0, "321", false);
                _this8.daojishi.setCompleteListener(function () {
                  _this8.daojishi.setCompleteListener(null);
                  _this8.daojishi.node.active = false;
                });
                Common.setButtonEnableWithGray(_this8.Button_again, false);
                Common.setButtonEnableWithGray(_this8.Button_x2, false);
              }
            }).union().repeat(countDown).call(resolve).start();
          });
        };
        _proto.updateBet_other = function updateBet_other(data) {
          if (data === void 0) {
            data = null;
          }
          //更新总下注
          var isBet = false;
          for (var i = 0; i < 10; i++) {
            var lastBetAmount = CricketRouletteModel.instance.totalBetList[i];
            var BetAmount = data ? data[i] - lastBetAmount : lastBetAmount;
            CricketRouletteModel.instance.totalBetList[i] = data ? data[i] : CricketRouletteModel.instance.totalBetList[i];
            if (BetAmount > 0) {
              isBet = true;
              this.doSendChip(i, BetAmount, this.Node_public);
            }
          }
          if (isBet) {
            CricketRouletteUtils.instance.playOneShot(eSound.bet);
          }
        };
        _proto.doRunning = function doRunning(endPos) {
          var _this9 = this;
          if (endPos === void 0) {
            endPos = 100;
          }
          this.Node_timer.active = false;
          var startPos = CricketRouletteModel.instance.lightPos;
          var randRound = Math.floor(Math.random() * 3 + 3);
          this.totalPos = randRound * 24 + (endPos > startPos ? endPos - startPos : 24 + endPos - startPos);
          this.startPos = startPos;
          this.TV.setAnimation(0, "2start", false);
          this.TV.addAnimation(0, "3wait", true);
          CricketRouletteUtils.instance.playSound(eSound.start);
          var curPos = -1;
          var lights = 0;
          this.Node_icon.position = v3(this.Node_icon.position.x, this.Node_icon.position.y, 0);
          tween(this.Node_icon).delay(0.5).to(this.totalRunTimes, {
            position: v3(this.Node_icon.position.x, this.Node_icon.position.y, this.totalPos)
          }, {
            easing: "quintInOut",
            onUpdate: function onUpdate(target, ratio) {
              // gts.Debug.Log(`==onUpdate==${target.position.z}===ratio==${ratio}`);

              var isRedus = false;
              var pos = _this9.totalPos * ratio;
              isRedus = _this9.totalPos - pos < 10;
              pos = (_this9.startPos + Math.floor(pos)) % 24;
              if (curPos != pos) {
                CricketRouletteUtils.instance.playOneShot(eSound.running);
                curPos = pos;
                if (!isRedus) {
                  lights = lights < 5 ? lights + 1 : lights;
                } else {
                  lights = lights > 1 ? lights - 1 : lights;
                }
              }
              for (var i = 0; i < 5; i++) {
                var light = _this9.Node_lightRoot.children[i];
                light.active = i < lights;
                if (light.active) {
                  light.getComponent(UIOpacity).opacity = 255 - 40 * i;
                  var lightPos = curPos - i;
                  lightPos = lightPos < 0 ? lightPos + 24 : lightPos;
                  light.position = _this9.Node_icon.children[lightPos].position;
                }
              }
            }
          }).delay(0.5).call(function () {
            //显示中奖区域
            var light_0 = _this9.Node_lightRoot.children[0];
            light_0.active = false;
            var pos = light_0.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            pos = _this9.Node_lightEffect.node.parent.getComponent(UITransform).convertToNodeSpaceAR(pos);
            _this9.Node_lightEffect.node.active = true;
            _this9.Node_lightEffect.node.position = pos;
            CricketRouletteModel.instance.lightPos = endPos;
            _this9.showResult();
          }).start();
        };
        _proto.showHeadEffect = function showHeadEffect() {
          var _this10 = this;
          return new Promise(function (resolve, reject) {
            if (!CricketRouletteModel.instance.prize) {
              return resolve;
            }
            CricketRouletteUtils.instance.playOneShot(eSound.coin);
            if (CricketRouletteModel.instance.prize.myPrize > 0) {
              var headEffect = _this10.Node_head.getChildByName("headEffect");
              headEffect.active = true;
              headEffect.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
              var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", _this10.Node_head);
              Label_winAdd.parent.active = true;
              Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyShow(CricketRouletteModel.instance.prize.myPrize, 3);
            }
            for (var i = 0; i < _this10.Node_deskPlayer.children.length; i++) {
              var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", _this10.Node_deskPlayer);
              var playerInfo = CricketRouletteModel.instance.PlayerInfos[i];
              if (playerInfo) {
                for (var _iterator4 = _createForOfIteratorHelperLoose(CricketRouletteModel.instance.prize.seatPrize), _step4; !(_step4 = _iterator4()).done;) {
                  var prizeInfo = _step4.value;
                  if (prizeInfo.Uid == playerInfo.Uid) {
                    var _headEffect2 = Node_headInfo.getChildByName("headEffect");
                    if (prizeInfo.Prize > 0) {
                      _headEffect2.active = true;
                      _headEffect2.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                      var _Label_winAdd2 = find("Sprite_Label_winAdd/Label_winAdd", Node_headInfo);
                      _Label_winAdd2.parent.active = true;
                      _Label_winAdd2.getComponent(Label).string = "+" + Common.ChangeMoneyShow(prizeInfo.Prize, 3);
                    }
                    break;
                  }
                }
              }
            }
          });
        };
        _proto.doCollectChip = function doCollectChip() {
          var _this11 = this;
          return new Promise(function (resolve, reject) {
            //////////
            if (!CricketRouletteModel.instance.result || !CricketRouletteModel.instance.prize) {
              return resolve;
            }
            var wChipTagPos = _this11.Node_chipTag.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var wWinPos_0 = _this11.Node_betArea.getChildByName("Node_area_" + CricketRouletteModel.instance.result.WinPos[0]).getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var wToWinPos = [];
            if (CricketRouletteModel.instance.prize.myPrize > 0) {
              _this11.TV.setAnimation(0, "4win", false);
              wToWinPos.push(_this11.Node_head.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
              _this11.scheduleOnce(function () {
                if (CricketRouletteModel.instance.endBalance > 0) {
                  CricketRouletteModel.instance.curBalance = CricketRouletteModel.instance.endBalance;
                  CricketRouletteModel.instance.endBalance = 0;
                  _this11.updateGold();
                }
              }, 3.25);
            } else {
              _this11.TV.setAnimation(0, "5fail", false);
            }
            for (var i = 0; i < _this11.Node_deskPlayer.children.length; i++) {
              var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", _this11.Node_deskPlayer);
              var playerInfo = CricketRouletteModel.instance.PlayerInfos[i];
              if (playerInfo) {
                for (var _iterator5 = _createForOfIteratorHelperLoose(CricketRouletteModel.instance.prize.seatPrize), _step5; !(_step5 = _iterator5()).done;) {
                  var prizeInfo = _step5.value;
                  if (prizeInfo.Uid == playerInfo.Uid && prizeInfo.Prize > 0) {
                    wToWinPos.push(Node_headInfo.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
                    break;
                  }
                }
              }
            }
            wToWinPos.push(_this11.Node_public.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
            for (var _i2 = 0; _i2 < _this11.Node_betArea.children.length; _i2++) {
              var Node_area = _this11.Node_betArea.getChildByName("Node_area_" + _i2);
              var Node_myChip = Node_area.getChildByName("Node_myChip");
              var Node_totalChip = Node_area.getChildByName("Node_totalChip");
              for (var _iterator6 = _createForOfIteratorHelperLoose(Node_myChip.children), _step6; !(_step6 = _iterator6()).done;) {
                var nodeChip = _step6.value;
                var toPos_0 = Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wChipTagPos);
                var toPos_1 = Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_0);
                var toPos_2 = Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wToWinPos[_i2 % wToWinPos.length]);
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
                var _toPos_2 = Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_0);
                var _toPos_3 = Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wToWinPos[_i2 % wToWinPos.length]);
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
            CricketRouletteUtils.instance.playOneShot(eSound.collectChip);
            _this11.scheduleOnce(function () {
              CricketRouletteUtils.instance.playOneShot(eSound.collectChip);
            }, 1.5);
            _this11.scheduleOnce(function () {
              CricketRouletteUtils.instance.playOneShot(eSound.collectChip);
            }, 3);
            _this11.scheduleOnce(function () {}, 3);
          });
        };
        _proto.showWinArea = function showWinArea() {
          if (!CricketRouletteModel.instance.result || !CricketRouletteModel.instance.result.WinPos) {
            return;
          }
          CricketRouletteUtils.instance.playOneShot(eSound.winEffect);
          for (var _iterator8 = _createForOfIteratorHelperLoose(CricketRouletteModel.instance.result.WinPos), _step8; !(_step8 = _iterator8()).done;) {
            var posIndex = _step8.value;
            var _betArea = this.Node_betArea.getChildByName("Node_area_" + posIndex);
            var _light = _betArea.getChildByName("light");
            _light.active = true;
            _light.getComponent(sp.Skeleton).setAnimation(0, "win_" + (posIndex + 1), true);
          }
          for (var pos = 0; pos < this.Node_betArea.children.length; pos++) {
            var betArea = this.Node_betArea.children[pos];
            var light = betArea.getChildByName("light");
            if (!light.active) {
              light.active = true;
              light.getComponent(sp.Skeleton).setAnimation(0, "durk_" + (pos + 1), true);
            }
          }
        };
        _proto.showResult = function showResult() {
          var _this12 = this;
          if (!CricketRouletteModel.instance.result) {
            return;
          }
          this.showWinArea();
          CricketRouletteUtils.instance.stopSound(eSound.start);
          this.winner.node.active = true;
          var winIndex = areaMap["" + CricketRouletteModel.instance.result.OpenNum];
          this.winner.setAnimation(0, "" + (winIndex + 1), false);
          this.winner.setCompleteListener(function () {
            _this12.winner.setCompleteListener(null);
            _this12.updateRecord();
            _this12.doCollectChip();
            _this12.scheduleOnce(_this12.showHeadEffect, 3.5);
          });
        }
        //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this13 = this;
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
                this.onUpdatePath();
                this.updateBet_other();
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  var betTime, pos, i, BetAmount, _pos2, strAni;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        //10=25-15
                        betTime = CricketRouletteModel.instance.TotalSecond - CricketRouletteModel.instance.BetSecond;
                        if (!(CricketRouletteModel.instance.countDown < betTime)) {
                          _context2.next = 15;
                          break;
                        }
                        CricketRouletteModel.instance.gameStatus = eStatus.result;
                        CricketRouletteModel.instance.lightPos = CricketRouletteModel.instance.result.OpenNum;
                        pos = _this13.Node_icon.children[CricketRouletteModel.instance.lightPos].getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                        pos = _this13.Node_lightEffect.node.parent.getComponent(UITransform).convertToNodeSpaceAR(pos);
                        _this13.Node_lightEffect.node.active = true;
                        _this13.Node_lightEffect.node.position = pos;
                        _this13.gameTip.node.active = false;
                        _this13.daojishi.node.active = false;
                        _this13.Node_timer.active = false;
                        if (CricketRouletteModel.instance.prize) {
                          if (CricketRouletteModel.instance.prize.myPrize > 0) {
                            _this13.TV.setAnimation(0, "4win", false);
                          } else {
                            _this13.TV.setAnimation(0, "5fail", false);
                          }
                        }
                        if (CricketRouletteModel.instance.countDown < 5) {
                          _this13.showWinArea();
                          _this13.showHeadEffect();
                        } else {
                          _this13.showResult();
                        }
                        _context2.next = 32;
                        break;
                      case 15:
                        CricketRouletteModel.instance.lightPos = CricketRouletteModel.instance.history[0];
                        CricketRouletteModel.instance.countDown = CricketRouletteModel.instance.gameInfo.Countdown - betTime;
                        CricketRouletteModel.instance.gameStatus = eStatus.bet;

                        //更新自己下注
                        for (i = 0; i < 8; i++) {
                          BetAmount = CricketRouletteModel.instance.myBetList[i];
                          if (BetAmount > 0) {
                            _this13.doSendChip(i, BetAmount);
                          }
                        }
                        CricketRouletteUtils.instance.playOneShot(eSound.warning);
                        _this13.TV.setAnimation(0, "1betting", true);
                        _pos2 = _this13.Node_icon.children[CricketRouletteModel.instance.lightPos].getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                        _pos2 = _this13.Node_lightRoot.getComponent(UITransform).convertToNodeSpaceAR(_pos2);
                        _this13.Sprite_light.active = true;
                        _this13.Sprite_light.getComponent(UIOpacity).opacity = 255;
                        _this13.Sprite_light.position = _pos2;
                        if (CricketRouletteModel.instance.countDown > 3) {
                          _this13.gameTip.node.active = true;
                          _this13.gameTip.setAnimation(0, "betting", false);
                          _this13.gameTip.setCompleteListener(function () {
                            _this13.gameTip.setCompleteListener(null);
                            _this13.gameTip.node.active = false;
                          });
                          _this13.daojishi.node.active = false;
                        } else {
                          _this13.gameTip.node.active = true;
                          _this13.gameTip.setAnimation(0, "stopbet", false);
                          _this13.gameTip.setCompleteListener(function () {
                            _this13.gameTip.setCompleteListener(null);
                            _this13.gameTip.node.active = false;
                          });
                          strAni = ["1", "21", "321"];
                          _this13.daojishi.node.active = true;
                          _this13.daojishi.setAnimation(0, strAni[CricketRouletteModel.instance.countDown - 1], false);
                          _this13.daojishi.setCompleteListener(function () {
                            _this13.daojishi.setCompleteListener(null);
                            _this13.daojishi.node.active = false;
                          });
                        }
                        _context2.next = 29;
                        return _this13.showCountDown();
                      case 29:
                        CricketRouletteModel.instance.gameStatus = eStatus.running;
                        CricketRouletteModel.instance.countDown = betTime;
                        _this13.doRunning(CricketRouletteModel.instance.result.OpenNum);
                      case 32:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }))();
                this.Label_gameNo.string = "No: " + CricketRouletteModel.instance.gameNo;
                break;
              }
            case eProto.gameStart:
              {
                this.doClearChip();
                CricketRouletteModel.instance.countDown = data.Countdown;
                CricketRouletteModel.instance.myBetList = data.MyTotalBet;
                CricketRouletteModel.instance.totalBetList = data.TotalBet;
                CricketRouletteModel.instance.PlayerInfos = data.PlayerInfos.slice();
                CricketRouletteModel.instance.ShowCard = data.ShowCard;
                CricketRouletteModel.instance.SendCards = data.SendCards;
                CricketRouletteModel.instance.SendCount = data.SendCount;
                CricketRouletteModel.instance.PlayerCount = data.PlayerCount;
                this.onUpdateDeskPlayer();
                CricketRouletteModel.instance.gameNo = data.GameNo;
                this.Label_gameNo.string = "No: " + CricketRouletteModel.instance.gameNo;
                this.TV.setAnimation(0, "1betting", true);
                this.gameTip.node.active = true;
                this.gameTip.setAnimation(0, "betting", false);
                this.gameTip.setCompleteListener(function () {
                  _this13.gameTip.setCompleteListener(null);
                  _this13.gameTip.node.active = false;
                });
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        CricketRouletteModel.instance.gameStatus = eStatus.bet;
                        CricketRouletteUtils.instance.playOneShot(eSound.warning);
                        CricketRouletteModel.instance.countDown = CricketRouletteModel.instance.BetSecond;
                        _this13.Node_timer.active = true;
                        _this13.Sprite_light.active = true;

                        //10=25-15
                        _context3.next = 7;
                        return _this13.showCountDown();
                      case 7:
                        Common.setButtonEnableWithGray(_this13.Button_again, false);
                        Common.setButtonEnableWithGray(_this13.Button_x2, false);
                        _this13.Node_timer.active = false;
                      case 10:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }))();
                break;
              }
            case eProto.Bet:
              {
                var betInfo = data;
                if (CricketRouletteModel.instance.PlayerInfos[0] && betInfo.Uid == CricketRouletteModel.instance.PlayerInfos[0].Uid) {
                  this.doSendStar(betInfo.Pos);
                }
                for (var i = 0; i < CricketRouletteModel.instance.PlayerInfos.length; i++) {
                  var playerInfo = CricketRouletteModel.instance.PlayerInfos[i];
                  var Node_root = this.Node_deskPlayer.getChildByName("Node_head_" + i);
                  if (playerInfo && betInfo.Uid == playerInfo.Uid && Node_root) {
                    this.doSendChip(betInfo.Pos, betInfo.Amount, Node_root);
                    break;
                  }
                }
                break;
              }
            case eProto.open:
              {
                this.doRunning(CricketRouletteModel.instance.result.OpenNum);
                break;
              }
            case eProto.prize:
              {
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
            case eProto.HD_history:
              {
                this.onUpdatePath();
                break;
              }
            case eProto.HD_bet:
              {
                CricketRouletteModel.instance.myBetList["" + data.Pos] = CricketRouletteModel.instance.myBetList["" + data.Pos] || 0;
                CricketRouletteModel.instance.myBetList["" + data.Pos] += data.Amount;
                var myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
                if (CricketRouletteModel.instance.PlayerInfos[0] && myUid == CricketRouletteModel.instance.PlayerInfos[0].Uid) {
                  this.doSendStar(data.Pos);
                }
                this.doSendChip(data.Pos, data.Amount);
                this.scheduleOnce(function () {
                  CricketRouletteUtils.instance.playSound(eSound.bet);
                }, 0.3);
                CricketRouletteModel.instance.curBalance -= data.Amount;
                this.updateGold();
                if (CricketRouletteModel.instance.gameStatus == eStatus.bet) {
                  Common.setButtonEnableWithGray(this.Button_x2, true);
                }
                break;
              }
            case eProto.allBet:
              {
                this.updateBet_other(data);
                break;
              }
          }
        };
        return CricketRouletteGameView;
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
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "daojishi", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "TV", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "coin_effect", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_public", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_deskPlayer", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_betArea", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "betChip", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Button_chip", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_record", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "cm_light", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_btnGroup", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameChip", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameChip_big", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "gameTip", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "winner", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "star", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Node_star", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "Node_chipTag", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_light", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Node_lightEffect", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "Node_icon", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "Node_lightRoot", [_dec40], {
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

System.register("chunks:///_virtual/CricketRouletteModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './CricketRouletteDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "64fb9IMNotMu4BFEZzFH50F", "CricketRouletteModel", undefined);
      var CricketRouletteModel = exports('CricketRouletteModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(CricketRouletteModel, _GameDef$BaseSington);
        function CricketRouletteModel() {
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
          _this.chipList = [50, 100, 500, 1000, 5000, 10000];
          _this.gameNo = null;
          _this.BetSecond = 0;
          _this.TotalSecond = 0;
          _this.gameStatus = eStatus.none;
          _this.gameInfo = null;
          _this.myBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          _this.totalBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          _this.myBetListBack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          _this.PosMaxBet = null;
          _this.history = [];
          _this.SendCards = [];
          _this.ShowCard = null;
          _this.SendCount = null;
          _this.Rate = [40, 30, 25, 20, 15, 10, 5, 2];
          _this.myTotalBet = 0;
          _this.result = null;
          _this.prize = null;
          _this.PlayerCount = 0;
          _this.PlayerInfos = null;
          _this.lightPos = 0;
          _this.firstUserID = "";
          /////////////////////////////////////////
          //    //聊天列表-文本
          _this._chatQueueList = [];
          //    //聊天列表-表情
          _this._expressionQueueList = [];
          return _this;
        }
        var _proto = CricketRouletteModel.prototype;
        _proto.clearGameData = function clearGameData() {};
        _createClass(CricketRouletteModel, [{
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
        return CricketRouletteModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CricketRouletteScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './CricketRouletteDef.ts', './CricketRouletteUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, sys, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, CricketRouletteUtils, Common;
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
      CricketRouletteUtils = module.CricketRouletteUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "03099tOaW1IvaVnniZooqZ/", "CricketRouletteScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CricketRouletteScene = exports('default', (_dec = ccclass("CricketRouletteScene"), _dec2 = menu("game/CricketRouletteGame/CricketRouletteScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CricketRouletteScene, _Component);
        function CricketRouletteScene() {
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
        var _proto = CricketRouletteScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          CricketRouletteUtils.instance.bundle = assetManager.getBundle(cBundle);
          CricketRouletteUtils.instance.preLoad();
          CricketRouletteUtils.instance.playBgMusic();
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
            CricketRouletteUtils.instance.bundle.load("prefab/CricketRouletteGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
        return CricketRouletteScene;
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

System.register("chunks:///_virtual/CricketRouletteUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './CricketRouletteDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, GameDef, AudioManager, eSound, Common;
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
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d578zDOkdFzKnPZpYKcmZI", "CricketRouletteUtils", undefined);
      var CricketRouletteUtils = exports('CricketRouletteUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(CricketRouletteUtils, _GameDef$BaseSington);
        function CricketRouletteUtils() {
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
        var _proto = CricketRouletteUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/CricketRouletteGameView");
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
                  arrHLoad.push(this.asyncLoadDir("textures/icon", SpriteFrame, function (err, arrSpFrame) {
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

          //        // CricketRouletteUtils.instance.playSound(CricketRouletteDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // CricketRouletteUtils.instance.stopSound(CricketRouletteDef.eSound.numAdd);
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

          //        // CricketRouletteUtils.instance.playSound(CricketRouletteDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // CricketRouletteUtils.instance.stopSound(CricketRouletteDef.eSound.numAdd);
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

          //        // CricketRouletteUtils.instance.playSound(CricketRouletteDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // CricketRouletteUtils.instance.stopSound(CricketRouletteDef.eSound.numAdd);

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
        }
        // getSymbolAniName(symbolIndex, isIdle: boolean = true) {
        //     //        // if (isIdle) {
        //     //        //     return null;
        //     //        // }

        //     let strAni = [];
        //     // switch (symbolIndex) {
        //     //     case CricketRouletteDef.eSymbol.NONE: {
        //     //         let index = Math.floor(Math.random() * (symbol_aniName.length - 3) + 3);
        //     //         strAni.push(`${symbol_aniName[index]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     //     case CricketRouletteDef.eSymbol.SCATTER: {
        //     //         if (isIdle) {
        //     //             strAni.push(`free_idle`);
        //     //         } else {
        //     //             strAni.push(`free_intro`);
        //     //             strAni.push(`free_intro`);
        //     //         }
        //     //         break;
        //     //     }
        //     //     case CricketRouletteDef.eSymbol.SpecialWild: {
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
        // getInitOpenNums() {
        //     let arrNUms = [
        //         [11, 8, 9, 1, 6, 5, 9, 8, 4, 8, 7, 1, 10, 10, 8],
        //         [9, 8, 6, 5, 4, 10, 1, 2, 11, 2, 4, 6, 11, 6, 4],
        //         [5, 8, 10, 4, 7, 8, 8, 7, 7, 6, 6, 5, 4, 11, 4],
        //         [4, 10, 5, 5, 9, 4, 11, 7, 10, 7, 4, 8, 7, 4, 11],
        //         [10, 8, 9, 2, 9, 10, 6, 5, 10, 8, 6, 6, 8, 2, 9],
        //     ];
        //     return arrNUms[Math.floor(Math.random() * arrNUms.length)];
        // }
        ;

        return CricketRouletteUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/CricketRouletteGame', 'chunks:///_virtual/CricketRouletteGame'); 
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