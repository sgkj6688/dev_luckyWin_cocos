System.register("chunks:///_virtual/Up7Down7_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "8a937DkCUxN64r5K/5m0Wzz", "Up7Down7_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var Up7Down7_btnEffect = exports('default', (_dec = ccclass("Up7Down7BtnEffect"), _dec2 = menu("game/Up7Down7Game/Up7Down7_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Up7Down7_btnEffect, _Component);
        function Up7Down7_btnEffect() {
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
        var _proto = Up7Down7_btnEffect.prototype;
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

        _createClass(Up7Down7_btnEffect, [{
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

        return Up7Down7_btnEffect;
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

System.register("chunks:///_virtual/Up7Down7_HelpLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PlatformMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, PlatformMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      PlatformMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "07495/csJdIH5z1UYGte79v", "Up7Down7_HelpLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Up7Down7_HelpLayer = exports('default', (_dec = ccclass("Up7Down7_HelpLayer"), _dec2 = menu("game/Up7Down7Game/Up7Down7_HelpLayer"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Up7Down7_HelpLayer, _Component);
        function Up7Down7_HelpLayer() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = Up7Down7_HelpLayer.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onClickUrl = function onClickUrl() {
          PlatformMgr.p.openUrl("https://md5.services/");
        };
        return Up7Down7_HelpLayer;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Up7Down7_path.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Up7Down7Model.ts', './Up7Down7Def.ts', './EventManager.ts', './AutoChangeParent.ts', './PlatformMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, SpriteFrame, UITransform, find, Sprite, v3, sys, Component, instantiate, Up7Down7Model, eEvent, EventManager, AutoChangeParent, PlatformMgr;
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
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      find = module.find;
      Sprite = module.Sprite;
      v3 = module.v3;
      sys = module.sys;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      Up7Down7Model = module.Up7Down7Model;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      PlatformMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "27adbHtQ8RC84lw5+uV4M7r", "Up7Down7_path", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Up7Down7_path = exports('default', (_dec = ccclass("Up7Down7_path"), _dec2 = menu("game/Up7Down7Game/Up7Down7_path"), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Up7Down7_path, _Component);
        function Up7Down7_path() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_hands", _descriptor, _assertThisInitialized(_this));
          //
          _initializerDefineProperty(_this, "Node_content_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_content_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_content", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameResult", _descriptor5, _assertThisInitialized(_this));
          //
          _initializerDefineProperty(_this, "Node_percent", _descriptor6, _assertThisInitialized(_this));
          //
          _initializerDefineProperty(_this, "Node_percent_sub", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_percent_sub_label", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_itemInfo", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "new", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item_0", _descriptor11, _assertThisInitialized(_this));
          _this.history = null;
          _this.curIndex = 0;
          return _this;
        }
        var _proto = Up7Down7_path.prototype;
        _proto.start = function start() {
          this.updateHistory();
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          EventManager.instance.on(eEvent.onUpdatePath, function () {
            // if (this.curIndex < this.history.length) {
            //     this.curIndex++;
            // }
            _this2.updateHistory();
          }, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdatePath);
        };
        _proto.updateHistory = function updateHistory() {
          var _this3 = this;
          this.Node_content.removeAllChildren();
          this.Node_content_label.removeAllChildren();
          // let item_0 = this.Node_content.getChildByName("item_0");
          // if (!this.history) {
          //     this.history = Up7Down7Model.instance.history.slice(0, 98);
          // }
          this.history = Up7Down7Model.instance.history.slice(0, 98);

          //0:2-6 1:2....6:7....11:12 12:8-12
          var p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var _loop = function _loop() {
            var info = _this3.history[i];
            var num = info.openNums[0] + info.openNums[1];
            num < 7 ? function () {
              p[0]++;
              p[num - 1]++;
            }() : num > 7 ? function () {
              p[12]++;
              p[num - 1]++;
            }() : p[6]++;
            var itemBg = _this3.Node_content_bg.getChildByName("item_" + i);
            itemBg.active = i == 0;

            // let item = this.Node_content.getChildByName(`item_${i}`);
            // let Label_num: Node = item ? item.getChildByName(`Label_num`) : null;
            // if (!item) {
            //     item = instantiate(this.item_0);
            //     item.name = `item_${i}`;
            //     this.Node_content.addChild(item);
            //     Label_num = item.getChildByName(`Label_num`);
            //     AutoChangeParent.Bind(Label_num, this.Node_content_label, true);
            // }

            var item = instantiate(_this3.item_0);
            item.name = "item_" + i;
            _this3.Node_content.addChild(item);
            var Label_num = item.getChildByName("Label_num");
            AutoChangeParent.Bind(Label_num, _this3.Node_content_label, true);
            item.active = true;
            var Sprite_star = item.getChildByName("Sprite_star");
            var starKeys = Object.keys(info.star);
            Sprite_star.active = starKeys.length > 0;
            item.getComponent(Sprite).spriteFrame = num == 7 ? _this3.spriteFrameResult[1] : num < 7 ? _this3.spriteFrameResult[0] : _this3.spriteFrameResult[2];
            Label_num.getComponent(Label).string = "" + num;
          };
          for (var i = 0; i < this.history.length; i++) {
            _loop();
          }

          ///////0:2-6 1:2....6:7....11:12 12:8-12
          var counts = this.history.length;
          p[0] = Math.floor(p[0] * 100 / counts);
          p[12] = Math.floor(p[12] * 100 / counts);
          p[6] = Math.floor(p[6] * 100 / counts);
          p[6] = p[6] != 0 ? 100 - p[0] - p[12] : 0;
          var pTotal = 0;
          for (var _i = 1; _i < 6; _i++) {
            p[_i] = Math.floor(p[_i] * 100 / counts);
            pTotal += p[_i];
          }
          for (var _i2 = 7; _i2 < 11; _i2++) {
            p[_i2] = Math.floor(p[_i2] * 100 / counts);
            pTotal += p[_i2];
          }
          p[11] = 100 - p[6] - pTotal;

          ////
          var Node_0 = this.Node_percent.getChildByName("Node_0");
          var Label_num_0 = Node_0.getChildByName("Label_num");
          var Node_1 = Node_0.getChildByName("Node_1");
          var Label_num_1 = Node_1.getChildByName("Label_num");
          var Node_2 = Node_1.getChildByName("Node_2");
          var Label_num_2 = Node_2.getChildByName("Label_num");
          Node_0.getComponent(UITransform).width = 796 * p[0] / 100;
          Node_1.getComponent(UITransform).width = 796 * p[6] / 100;
          Node_2.getComponent(UITransform).width = 796 * p[12] / 100;
          Label_num_0.active = p[0] != 0;
          Label_num_1.active = p[6] != 0;
          Label_num_2.active = p[12] != 0;
          Label_num_0.getComponent(Label).string = p[0] + "%";
          Label_num_1.getComponent(Label).string = p[6] + "%";
          Label_num_2.getComponent(Label).string = p[12] + "%";
          for (var _i3 = 1; _i3 < 12; _i3++) {
            var Node_item = this.Node_percent_sub.getChildByName("Node_item_" + (_i3 + 1));
            var bar = find("ProgressBar/Bar", Node_item).getComponent(Sprite);
            var Label_percent = find("Node_item_" + (_i3 + 1) + "/Label_percent", this.Node_percent_sub_label).getComponent(Label);
            bar.fillRange = p[_i3] / 100;
            Label_percent.string = p[_i3] + "%";
          }
          this.Label_hands.string = "Hands: " + counts;
          this.updateItemInfo(this.curIndex);
        };
        _proto.updateItemInfo = function updateItemInfo(index) {
          if (index === void 0) {
            index = 0;
          }
          // let history = Up7Down7Model.instance.history.slice(0, 98);
          var info = this.history[index];
          var item_index = this.Node_content.getChildByName("item_" + index);
          if (item_index && info) {
            this["new"].active = true;
            this["new"].parent = item_index;
            this["new"].position = v3(0);
            var original = info.original;
            var ciphertext = info.ciphertext;
            var gameNo = original.replace("#{", "").split("_")[1];
            var Label_gameNo = this.Node_itemInfo.getChildByName("Label_gameNo").getComponent(Label);
            var Label_md5_org = this.Node_itemInfo.getChildByName("Label_md5_org").getComponent(Label);
            var Label_md5_heTex = this.Node_itemInfo.getChildByName("Label_md5_heTex").getComponent(Label);
            Label_gameNo.string = "" + gameNo;
            Label_md5_org.string = "" + original;
            Label_md5_heTex.string = "" + ciphertext;
          }

          // Node_itemInfo;
        };

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "copy_left":
              {
                if (this.curIndex > 0) {
                  this.curIndex--;
                  this.updateItemInfo(this.curIndex);
                }
                break;
              }
            case "copy_right":
              {
                // let history = Up7Down7Model.instance.history.slice(0, 98);
                if (this.curIndex < this.history.length) {
                  this.curIndex++;
                  this.updateItemInfo(this.curIndex);
                }
                break;
              }
            case "copy_ogr":
              {
                var Label_md5_org = this.Node_itemInfo.getChildByName("Label_md5_org").getComponent(Label);
                PlatformMgr.p.copyToClipBoard(Label_md5_org.string, sys.isMobile);
                break;
              }
            case "copy_heTex":
              {
                var Label_md5_heTex = this.Node_itemInfo.getChildByName("Label_md5_heTex").getComponent(Label);
                PlatformMgr.p.copyToClipBoard(Label_md5_heTex.string, sys.isMobile);
                break;
              }
            default:
              {
                var index = event.target.name.replace("item_", "");
                this.curIndex = parseInt(index);
                this.updateItemInfo(this.curIndex);
                break;
              }
          }
        };
        return Up7Down7_path;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_hands", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_content_label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_content_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_content", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameResult", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_percent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_percent_sub", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_percent_sub_label", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_itemInfo", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "new", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "item_0", [_dec13], {
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

System.register("chunks:///_virtual/Up7Down7_pathItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "c05adfcA01Eha8boVSndfHj", "Up7Down7_pathItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Up7Down7_pathItem = exports('default', (_dec = ccclass("Up7Down7_pathItem"), _dec2 = menu("game/Up7Down7Game/Up7Down7_pathItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(Label), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Up7Down7_pathItem, _Component);
        function Up7Down7_pathItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_new", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_star", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_dice_0", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_dice_1", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_num", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_num", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameDice", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameResult", _descriptor10, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = Up7Down7_pathItem.prototype;
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
          this.Sprite_new.active = this.item.itemIndex == 0;
          var starKeys = Object.keys(tempData.star);
          this.Sprite_star.active = starKeys.length > 0;
          this.Sprite_dice_0.spriteFrame = this.spriteFrameDice[tempData.openNums[0] - 1];
          this.Sprite_dice_1.spriteFrame = this.spriteFrameDice[tempData.openNums[1] - 1];
          var num = tempData.openNums[0] + tempData.openNums[1];
          this.Sprite_num.spriteFrame = num == 7 ? this.spriteFrameResult[1] : num < 7 ? this.spriteFrameResult[0] : this.spriteFrameResult[2];
          this.Label_num.string = "" + num;
        };
        _createClass(Up7Down7_pathItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Up7Down7_pathItem;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_new", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_star", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_dice_0", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_dice_1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_num", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_num", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameDice", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameResult", [_dec12], {
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

System.register("chunks:///_virtual/Up7Down7_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Up7Down7Model.ts', './NetManager.ts', './Up7Down7Def.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, Up7Down7Model, NetManager, eProto, EventManager;
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
      Up7Down7Model = module.Up7Down7Model;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "cce0b7/bi5HapXJxSNtYHbP", "Up7Down7_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Up7Down7_rank = exports('default', (_dec = ccclass("Up7Down7_rank"), _dec2 = menu("game/Up7Down7Game/Up7Down7_rank"), _dec3 = property(gts.List), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Up7Down7_rank, _Component);
        function Up7Down7_rank() {
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
        var _proto = Up7Down7_rank.prototype;
        _proto.onLoad = function onLoad() {
          // Common.showWait();
          // this.scheduleOnce(Common.closeWait, 3.0);
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eProto.HD_GetWinLoseRank, this.onRecvData, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eProto.HD_GetWinLoseRank, this.onRecvData, this);
        };
        _proto.start = function start() {
          NetManager.instance.sendOnlineData(eProto.HD_GetWinLoseRank, {
            tableId: Up7Down7Model.instance.gameInfo.tableInfo.tableId,
            index: this.curPage
          });
        };
        _proto.onBtnClick_last = function onBtnClick_last() {
          if (this.curPage > 0) {
            this.curPage--;
          }
          NetManager.instance.sendOnlineData(eProto.HD_GetWinLoseRank, {
            tableId: Up7Down7Model.instance.gameInfo.tableInfo.tableId,
            index: this.curPage
          });
          this.lastPage.active = this.curPage > 0;
          this.nextPage.active = this.curPage < this.maxPage - 1;
        };
        _proto.onBtnClick_next = function onBtnClick_next() {
          if (this.curPage < this.maxPage - 1) {
            this.curPage++;
          }
          NetManager.instance.sendOnlineData(eProto.HD_GetWinLoseRank, {
            tableId: Up7Down7Model.instance.gameInfo.tableInfo.tableId,
            index: this.curPage
          });
          this.lastPage.active = this.curPage > 0;
          this.nextPage.active = this.curPage < this.maxPage - 1;
        };
        _proto.onRecvData = function onRecvData(data) {
          switch (data.cmd) {
            case eProto.HD_GetWinLoseRank:
              {
                var rankInfo = data.Data;
                this.maxPage = rankInfo.size;
                var rankList = rankInfo.data.slice();
                rankList.sort(function (a, b) {
                  return a.starOdds != b.starOdds ? b.starOdds - a.starOdds : b.prizeAmount - a.prizeAmount;
                });
                if (rankList.length > 0) {
                  this.Label_gameNo.string = "No. " + rankList[0].gameNo;
                } else {
                  this.Label_gameNo.string = "No. ";
                }
                this.scrollView_content.setData(rankList);
                this.scrollView_content.refresh();
                break;
              }
          }
        };
        return Up7Down7_rank;
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

System.register("chunks:///_virtual/Up7Down7_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, color, Component, AutoChangeParent, Common;
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
      color = module.color;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "eabadC0/9pO5ZCFLlQa8cp2", "Up7Down7_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Up7Down7_rankItem = exports('default', (_dec = ccclass("Up7Down7_rankItem"), _dec2 = menu("game/Up7Down7Game/Up7Down7_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Sprite), _dec13 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Up7Down7_rankItem, _Component);
        function Up7Down7_rankItem() {
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
        var _proto = Up7Down7_rankItem.prototype;
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

          // let date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_bet.string = "" + Common.ChangeMoneyFormat(tempData.betAmount, 3);
          this.Sprite_rank.node.active = this.item.itemIndex < 3;
          this.Label_rank.node.active = !this.Sprite_rank.node.active;
          if (this.Label_rank.node.active) {
            this.Label_rank.string = "" + (this.item.itemIndex + 1);
          }
          if (this.Sprite_rank.node.active) {
            this.Sprite_rank.spriteFrame = this.spriteFrameRank[this.item.itemIndex];
          }
          if (tempData.avatar) {
            Common.getHead(tempData.avatar, this.sprAvatar);
          }
          if (tempData.nickName) {
            Common.nickNameFormatL(this.Label_palyer, "" + tempData.nickName);
          }
          var str = "";
          if (tempData.prizeAmount > 0) {
            str = "+" + Common.ChangeMoneyFormat(tempData.prizeAmount, 3);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.prizeAmount <= 0) {
            str = "" + Common.ChangeMoneyFormat(tempData.prizeAmount, 3);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
          this.Label_num.string = "x" + tempData.starOdds;

          // let result: Up7Down7Def.openResult = JSON.parse(tempData.);

          // let Sprite_star = this.Node_result.getChildByName("Sprite_star");
          // let starKeys = Object.keys(result.star);
          // Sprite_star.active = starKeys.length > 0;

          // let Sprite_dice_0 = this.Node_result.getChildByName("Sprite_dice_0");
          // let Sprite_dice_1 = this.Node_result.getChildByName("Sprite_dice_1");
          // Sprite_dice_0.getComponent(Sprite).spriteFrame = this.spriteFrameDice[result.openNums[0] - 1];
          // Sprite_dice_1.getComponent(Sprite).spriteFrame = this.spriteFrameDice[result.openNums[1] - 1];

          // let Sprite_num = this.Node_result.getChildByName("Sprite_num");
          // let num = result.openNums[0] + result.openNums[1];
          // Sprite_num.getComponent(Sprite).spriteFrame = num == 7 ? this.spriteFrameResult[1] : num < 7 ? this.spriteFrameResult[0] : this.spriteFrameResult[2];
          // this.Label_num.string = `${num}`;
        };

        _createClass(Up7Down7_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Up7Down7_rankItem;
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

System.register("chunks:///_virtual/Up7Down7_record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './NetManager.ts', './Up7Down7Def.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "9bc96UhZNtPRogpq6+yFlzN", "Up7Down7_record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Up7Down7_record = exports('default', (_dec = ccclass("Up7Down7_record"), _dec2 = menu("game/Up7Down7Game/Up7Down7_record"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Up7Down7_record, _Component);
        function Up7Down7_record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Up7Down7_record.prototype;
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
            RecordType: "sevenUpDown"
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
        return Up7Down7_record;
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

System.register("chunks:///_virtual/Up7Down7_recordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, SpriteFrame, UIOpacity, color, Sprite, Component, AutoChangeParent, Common;
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
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      color = module.color;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "2b26aRMOWxCzpsucWDYts1l", "Up7Down7_recordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Up7Down7_recordItem = exports('default', (_dec = ccclass("Up7Down7_recordItem"), _dec2 = menu("game/Up7Down7Game/Up7Down7_recordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Up7Down7_recordItem, _Component);
        function Up7Down7_recordItem() {
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
          _initializerDefineProperty(_this, "Label_num", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameDice", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameResult", _descriptor12, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = Up7Down7_recordItem.prototype;
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
          this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
          this.Label_gameNo.string = Common.setGameNo(tempData.GameNo);
          var date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_time.string = date.time;
          this.Label_date.string = date.date;
          this.Label_bet.string = "" + Common.ChangeMoneyFormat(tempData.BetAmount, 3);
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + Common.ChangeMoneyFormat(tempData.Income, 3);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + Common.ChangeMoneyFormat(tempData.Income, 3);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
          var result = JSON.parse(tempData.GameResult);
          var Sprite_star = this.Node_result.getChildByName("Sprite_star");
          var starKeys = Object.keys(result.star);
          Sprite_star.active = starKeys.length > 0;
          var Sprite_dice_0 = this.Node_result.getChildByName("Sprite_dice_0");
          var Sprite_dice_1 = this.Node_result.getChildByName("Sprite_dice_1");
          Sprite_dice_0.getComponent(Sprite).spriteFrame = this.spriteFrameDice[result.openNums[0] - 1];
          Sprite_dice_1.getComponent(Sprite).spriteFrame = this.spriteFrameDice[result.openNums[1] - 1];
          var Sprite_num = this.Node_result.getChildByName("Sprite_num");
          var num = result.openNums[0] + result.openNums[1];
          Sprite_num.getComponent(Sprite).spriteFrame = num == 7 ? this.spriteFrameResult[1] : num < 7 ? this.spriteFrameResult[0] : this.spriteFrameResult[2];
          this.Label_num.string = "" + num;
        };
        _createClass(Up7Down7_recordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Up7Down7_recordItem;
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_num", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_result", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameDice", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameResult", [_dec14], {
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

System.register("chunks:///_virtual/Up7Down7_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Up7Down7Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, Up7Down7Utils;
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
      Up7Down7Utils = module.Up7Down7Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "21129i7huRJUbKBJUd7iJZu", "Up7Down7_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Up7Down7_winTip = exports('default', (_dec = ccclass("Up7Down7WinTip"), _dec2 = menu("game/Up7Down7Game/Up7Down7_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Up7Down7_winTip, _Component);
        function Up7Down7_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Up7Down7_winTip.prototype;
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
            _this2.Label_win.string = Up7Down7Utils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            Up7Down7Utils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${Up7Down7Utils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            Up7Down7Utils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return Up7Down7_winTip;
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

System.register("chunks:///_virtual/Up7Down7Ctrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './Up7Down7Model.ts', './I18n.ts', './ViewManager.ts', './Up7Down7Def.ts', './Up7Down7Utils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, sys, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, Up7Down7Model, i18n, ViewManager, eProto, eEvent, eRunStatus, Up7Down7Utils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
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
      Up7Down7Model = module.Up7Down7Model;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      Up7Down7Utils = module.Up7Down7Utils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "406edKIQGNHNpi6MUbDzVeZ", "Up7Down7Ctrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Up7Down7Ctrl = exports('Up7Down7Ctrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(Up7Down7Ctrl, _GameDef$BaseCtrl);
        function Up7Down7Ctrl() {
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
          _this._model = Up7Down7Model.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = Up7Down7Ctrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete Up7Down7Ctrl._instance;
          Up7Down7Ctrl._instance = null;
          Up7Down7Model.destroy();
          Up7Down7Utils.destroy();
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
        _proto.reqBet = function reqBet(pos, betAmount) {
          if (!Up7Down7Model.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            pos: "" + pos,
            betAmount: "" + betAmount
          });
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.exitRoom, {
            action: "HD_QuitTable"
          });
        }

        // /**请求排行榜 */
        // reqRank(curPage = 0) {
        //     NetManager.instance.sendOnlineData(Up7Down7Def.eProto.HD_Rank, { gameType: "sevenUpDown" });
        // }

        // /**请求历史记录 */
        // reqHistory(offset = 0, pageSize = 13) {
        //     NetManager.instance.sendOnlineData(Up7Down7Def.eProto.HD_History, {
        //         Offset: offset,
        //         PageSize: pageSize,
        //         RecordType: "sevenUpDown",
        //     });
        // }

        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(Up7Down7Def.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.getInfo, {});
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "sevenUpDown"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "sevenUpDown",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "sevenUpDown"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "sevenUpDown",
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
            if (data.cmd == eProto.HD_Enter) {
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
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_Enter:
              {
                //roomInfo
                ViewManager.instance.closeWait();
                Up7Down7Model.instance.gameInfo = data.Data;
                NetManager.instance.sendOnlineData(eProto.HD_History, {
                  tableId: Up7Down7Model.instance.gameInfo.tableInfo.tableId,
                  size: "100"
                });
                Up7Down7Model.instance.roomState = {
                  countDown: Up7Down7Model.instance.gameInfo.tableInfo.countDown,
                  eventID: "",
                  tableState: Up7Down7Model.instance.gameInfo.tableInfo.state
                };
                Up7Down7Model.instance.gameNo = Up7Down7Model.instance.gameInfo.tableInfo.issue;
                if (Up7Down7Model.instance.gameInfo.tableInfo.seatPlay) {
                  Up7Down7Model.instance.playerInfo = {
                    playNum: Up7Down7Model.instance.gameInfo.tableInfo.playNum,
                    seatPlay: Up7Down7Model.instance.gameInfo.tableInfo.seatPlay
                  };
                }
                Up7Down7Model.instance.myBet = Up7Down7Model.instance.gameInfo.userInfo.bets || {};
                Up7Down7Model.instance.totalBet = Up7Down7Model.instance.gameInfo.tableInfo.pos || {};
                Up7Down7Model.instance.baseBet = Up7Down7Model.instance.gameInfo.baseScoreList || [50, 100, 500, 1000, 5000, 10000];
                switch (Up7Down7Model.instance.roomState.tableState) {
                  case eRunStatus.END:
                    {
                      Up7Down7Model.instance.result = {
                        openNums: Up7Down7Model.instance.gameInfo.tableInfo.openNum,
                        prizeResults: Up7Down7Model.instance.gameInfo.tableInfo.prizeResult,
                        original: Up7Down7Model.instance.gameInfo.tableInfo.original,
                        ciphertext: "",
                        star: Up7Down7Model.instance.gameInfo.tableInfo.star
                      };
                      break;
                    }
                }
                break;
              }
            case eProto.HD_UpdatePlayerNum:
              {
                Up7Down7Model.instance.playerInfo = data.Data;
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                Up7Down7Model.instance.roomState = data.Data;
                Up7Down7Model.instance.gameNo = Up7Down7Model.instance.roomState.eventID;
                break;
              }
            case eProto.HD_Md5Ciphertext:
              {
                emitData = data.Data;
                break;
              }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                emitData = data.Data;
                Up7Down7Model.instance.curBalance -= data.Data.betAmount;
                break;
              }
            case eProto.HD_BetList:
              {
                if (data.Data.length == 0) {
                  emitData = null;
                }
                emitData = data.Data;
                Up7Down7Model.instance.totalBet = Up7Down7Model.instance.totalBet || {};
                // let arrStr:string[]=data.Data;
                // for (const str of arrStr) {
                //     let betInfo: Up7Down7Def.betInfo = JSON.parse(str)

                //     Up7Down7Model.instance.betList[`${betInfo.betType}`]=Up7Down7Model.instance.betList[`${betInfo.betType}`]||[]
                //     Up7Down7Model.instance.betList[`${betInfo.betType}`].push(betInfo.betAmount)
                // }

                break;
              }
            case eProto.HD_QueryBetRecord:
              {
                break;
              }
            case eProto.HD_OpenResult:
              {
                Up7Down7Model.instance.result = data.Data;
                if (Up7Down7Model.instance.history) {
                  Up7Down7Model.instance.history.unshift(data.Data);
                }

                // Up7Down7Model.instance.result.star = {
                //     "2": 20,
                //     "3": 15,
                //     "4": 500,
                //     "5": 52,
                //     "6": 20,
                //     "7": 15,
                //     "8": 52,
                //     "9": 20,
                //     "10": 15,
                //     "11": 500,
                //     "12": 52,
                // };

                break;
              }
            case eProto.HD_Checkout:
              {
                Up7Down7Model.instance.checkOut = data.Data;
                break;
              }
            // case Up7Down7Def.eProto.HD_BoYiBo:
            case eProto.HD_History:
              {
                var history = data.Data;
                Up7Down7Model.instance.history = [];
                for (var _iterator = _createForOfIteratorHelperLoose(history), _step; !(_step = _iterator()).done;) {
                  var strInfo = _step.value;
                  Up7Down7Model.instance.history.push(JSON.parse(strInfo));
                }
                break;
              }
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
                gts.Debug.LogWarr("==Up7Down7=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (Up7Down7Model.instance.curBalance > 0) {
                  Up7Down7Model.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                Up7Down7Model.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Up7Down7=pushWallet==" + _HD_Wallet.VndBalance);
                if (Up7Down7Model.instance.curBalance > 0) {
                  Up7Down7Model.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                Up7Down7Model.instance.curBalance = _HD_Wallet.VndBalance;
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
        return Up7Down7Ctrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Up7Down7Def.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "98043A+h+BCzLFAvNxVoWby", "Up7Down7Def", undefined);
      var cBundle = exports('cBundle', "Up7Down7Game");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_Enter"] = "sevenUpDown/HD_Enter";
        eProto["HD_Bet"] = "sevenUpDown/HD_Bet";
        eProto["HD_Md5Ciphertext"] = "sevenUpDown/HD_Md5Ciphertext";
        eProto["HD_BetList"] = "sevenUpDown/HD_BetList";
        eProto["HD_OpenResult"] = "sevenUpDown/HD_OpenResult";
        eProto["HD_Checkout"] = "sevenUpDown/HD_Checkout";
        eProto["HD_SwitchRoomState"] = "sevenUpDown/HD_SwitchRoomState";
        eProto["HD_UpdatePlayerNum"] = "sevenUpDown/HD_UpdatePlayerNum";
        eProto["HD_GetWinLoseRank"] = "sevenUpDown/HD_GetWinLoseRank";
        eProto["exitRoom"] = "sevenUpDown/HD_QuitTable";
        eProto["HD_GetPlayerList"] = "sevenUpDown/HD_GetPlayerList";
        eProto["HD_GetBaseScoreList"] = "sevenUpDown/HD_GetBaseScoreList";
        eProto["RECORD"] = "sevenUpDown/HD_Record";
        eProto["HD_History"] = "sevenUpDown/HD_History";
        eProto["HD_QueryBetRecord"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        eProto["getInfo"] = "sevenUpDown/HD_GetTableList";
        eProto["checkInRoom"] = "sevenUpDown/HD_CheckPlayerInGame";
        eProto["startGame"] = "sevenUpDown/HD_GetEnterData";
        eProto["deskinfo"] = "sevenUpDown/HD_UpdateTableInfo";
        eProto["playerInfo"] = "sevenUpDown/HD_UpdatePlayerList";
        eProto["updatePlayerStatus"] = "sevenUpDown/HD_UpdatePlayerInfo";
        eProto["sendShortCut"] = "sevenUpDown/HD_SendShortCut";
        eProto["createTable"] = "sevenUpDown/HD_CreateTableReq";
        eProto["audoEnter"] = "sevenUpDown/HD_AutoEnter";
        return eProto;
      }({}));
      var eConstDef = exports('eConstDef', {});
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        START: 1,
        BET: 2,
        END: 3
      });
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onReturnBet"] = "onReturnBet";
        eEvent["onUpdatePath"] = "onUpdatePath";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bgNomal: "sound/BGM_MG",
        bet: "sound/bet",
        start: "sound/start",
        coin: "sound/coin",
        warning: "sound/warning"
      });

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Up7Down7Game", ['./Up7Down7Ctrl.ts', './Up7Down7Def.ts', './Up7Down7Model.ts', './Up7Down7Scene.ts', './Up7Down7Utils.ts', './Up7Down7GameView.ts', './Up7Down7_HelpLayer.ts', './Up7Down7_btnEffect.ts', './Up7Down7_path.ts', './Up7Down7_pathItem.ts', './Up7Down7_rank.ts', './Up7Down7_rankItem.ts', './Up7Down7_record.ts', './Up7Down7_recordItem.ts', './Up7Down7_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Up7Down7GameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Up7Down7Def.ts', './Up7Down7Model.ts', './Up7Down7Ctrl.ts', './ViewManager.ts', './Up7Down7Utils.ts', './Common.ts', './BtnArea.ts', './DataManager.ts', './PlatformMgr.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, Sprite, Prefab, sp, SpriteFrame, RichText, tween, v3, sys, find, instantiate, UITransform, UIOpacity, Tween, ParticleUtils, GameDef, ConfigManager, EventManager, NetManager, eProto, eRunStatus, eEvent, eSound, Up7Down7Model, Up7Down7Ctrl, ViewManager, Up7Down7Utils, Common, BtnArea, DataManager, UserKey, PlatformMgr, i18n;
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
      Label = module.Label;
      Sprite = module.Sprite;
      Prefab = module.Prefab;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      RichText = module.RichText;
      tween = module.tween;
      v3 = module.v3;
      sys = module.sys;
      find = module.find;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      ParticleUtils = module.ParticleUtils;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      Up7Down7Model = module.Up7Down7Model;
    }, function (module) {
      Up7Down7Ctrl = module.Up7Down7Ctrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Up7Down7Utils = module.Up7Down7Utils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      BtnArea = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      PlatformMgr = module.default;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34;
      cclegacy._RF.push({}, "733d2nRtjVPiInq/JaNkVkT", "Up7Down7GameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Up7Down7GameView = exports('default', (_dec = ccclass("Up7Down7GameView"), _dec2 = menu("game/Up7Down7Game/Up7Down7GameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Sprite), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Prefab), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(sp.Skeleton), _dec22 = property(Node), _dec23 = property(SpriteFrame), _dec24 = property(SpriteFrame), _dec25 = property(SpriteFrame), _dec26 = property(Node), _dec27 = property(sp.Skeleton), _dec28 = property(Prefab), _dec29 = property(Prefab), _dec30 = property(Prefab), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(RichText), _dec34 = property(gts.List), _dec35 = property(Prefab), _dec36 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Up7Down7GameView, _GameDef$BaseView);
        function Up7Down7GameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "areaBtnParent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_x2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_again", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labNickName", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labGold", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprAvatar", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_head", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_timer", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_topWin", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betArea", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betChip", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_chip", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_startChip_other", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_min", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_max", _descriptor17, _assertThisInitialized(_this));
          // @property(Label)
          // myTotalBet: Label = null;
          _initializerDefineProperty(_this, "Label_md5Text", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cm_light", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_btnGroup", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameChip", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameChip_big", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameDice", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_diceRoot", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameTip", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_info", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pathScrollViewList", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_star", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor34, _assertThisInitialized(_this));
          //    ////////////////////////////////////////////////////
          _this._area2btn = {};
          return _this;
        }
        var _proto = Up7Down7GameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, Up7Down7Ctrl.instance);
          this.initUIView();
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
          Up7Down7Model.instance.clearGameData();
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
              NetManager.instance.sendOnlineData(eProto.HD_Enter, {});

              // if (Up7Down7Ctrl.instance.isReqBet) {
              //     Up7Down7Ctrl.instance.reqBet();
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
          var strGold = Common.numFormat(Up7Down7Model.instance.curBalance);
          if (strGold != this.labGold.string) {
            Up7Down7Utils.instance.updateLabel(this.labGold, strGold);
          }
        };
        _proto.initUIView = function initUIView() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.sprAvatar);
          Common.nickNameFormatL(this.labNickName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.labGold.string = Common.numFormat(gold);
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          NetManager.instance.sendOnlineData(eProto.HD_Enter, {});
        };
        _proto.onClickCopy = function onClickCopy() {
          PlatformMgr.p.copyToClipBoard(this.Label_md5Text.string, sys.isMobile);
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
          if (Up7Down7Model.instance.roomState.tableState == eRunStatus.BET && Up7Down7Model.instance.roomState.countDown > 3) {
            gts.Debug.Log("==OnClicked==" + btn.node.name);
            var pos = btn.node.name.replace("Node_area_", "");
            Up7Down7Ctrl.instance.reqBet(parseInt(pos), Up7Down7Model.instance.curBet);

            // this.doSendChip(0, pos, Up7Down7Model.instance.curBet);
          }
        };

        _proto.doSendStar = function doSendStar(pos, index) {
          var Node_root = this.Node_topWin.getChildByName("Node_head_" + 0);
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
          tween(newStar).delay(index * 0.01)
          // .parallel(
          //     tween(newStar).bezierTo(duration, newStar.position, v3(newStar.position.x, toPos.y, 0), toPos),
          //     tween(newStar).to(duration, { scale: v3(0.5, 0.5, 0.5) }, { easing: "cubicOut" })
          // )
          .to(0.4, {
            position: toPos,
            scale: v3(0.5, 0.5, 0.5)
          }, {
            easing: "cubicOut"
          }).call(function () {
            newStar.getChildByName("lizi").active = false;
          }).start();
        };
        _proto.doSendChip = /*#__PURE__*/function () {
          var _doSendChip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(index, pos, betAmount, isMySelf) {
            var _this5 = this;
            var newChip, lv, i, betArea, chipContent, Label_bet, totalBet, startNode, startPos, counts, toPos;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (isMySelf === void 0) {
                    isMySelf = true;
                  }
                  newChip = instantiate(this.betChip);
                  newChip.name = "" + betAmount;
                  //设置筹码纹理
                  lv = 0;
                  if (!(betAmount >= Up7Down7Model.instance.baseBet[Up7Down7Model.instance.baseBet.length - 1])) {
                    _context.next = 8;
                    break;
                  }
                  lv = Up7Down7Model.instance.baseBet.length - 1;
                  _context.next = 16;
                  break;
                case 8:
                  i = 0;
                case 9:
                  if (!(i < Up7Down7Model.instance.baseBet.length - 1)) {
                    _context.next = 16;
                    break;
                  }
                  if (!(betAmount >= Up7Down7Model.instance.baseBet[i] && betAmount < Up7Down7Model.instance.baseBet[i + 1])) {
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
                  betArea = this.Node_betArea.getChildByName("Node_area_" + pos);
                  chipContent = isMySelf ? betArea.getChildByName("Node_myChip") : betArea.getChildByName("Node_totalChip");
                  chipContent.addChild(newChip);
                  chipContent.active = true;
                  if (isMySelf) {
                    Up7Down7Model.instance.curTotalBet += betAmount;
                    // Up7Down7Utils.instance.updateLabel(this.myTotalBet, `${Common.ChangeMoneyFormat(Up7Down7Model.instance.curTotalBet, 2)}`);
                  }

                  //更新下注分数
                  Label_bet = isMySelf ? betArea.getChildByName("Label_myBet") : betArea.getChildByName("Label_totalBet");
                  Label_bet.active = true;
                  totalBet = isMySelf ? Up7Down7Model.instance.myBet["" + pos] : Up7Down7Model.instance.totalBet["" + pos];
                  Up7Down7Utils.instance.updateLabel(Label_bet, "" + Common.ChangeMoneyFormat(totalBet, 3));

                  //
                  startNode = isMySelf ? this.Button_chip : this.Node_startChip_other;
                  startPos = startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  startPos = chipContent.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                  newChip.position = startPos;
                  counts = chipContent.children.length > 5 ? 5 : chipContent.children.length;
                  toPos = v3(0, (counts - 1) * 5, 0);
                  tween(newChip).delay(index * 0.01).to(0.3, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this5.mergeChip(chipContent);
                  }).start();
                case 33:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doSendChip(_x, _x2, _x3, _x4) {
            return _doSendChip.apply(this, arguments);
          }
          return doSendChip;
        }();
        _proto.doClearChip = function doClearChip() {
          this.scheduleOnce(function () {
            Up7Down7Model.instance.checkOut = null;
            Up7Down7Model.instance.isNoneCheckOut = false;
          }, 5);
          var headEffect = this.Node_head.getChildByName("headEffect");
          headEffect.active = false;
          var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", this.Node_head);
          Label_winAdd.parent.active = false;
          for (var i = 0; i < 3; i++) {
            var NodePlayer = this.Node_topWin.getChildByName("Node_head_" + i);
            var _headEffect = NodePlayer.getChildByName("headEffect");
            _headEffect.active = false;
            var _Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", NodePlayer);
            _Label_winAdd.parent.active = false;
          }
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

            // this.myTotalBet.getComponent(Label).string = "0";

            var star = betArea.getChildByName("star");
            if (star) {
              star.destroy();
            }
            var light = betArea.getChildByName("light");
            var dark = betArea.getChildByName("dark");
            light.active = false;
            dark.active = false;
            var opacity = light.getComponent(UIOpacity) || light.addComponent(UIOpacity);
            Tween.stopAllByTarget(opacity);

            // let coinRoot = betArea.getChildByName("coinRoot");
            // coinRoot.destroyAllChildren();
          }

          this.Button_x2.interactable = false;
          if (Up7Down7Model.instance.curTotalBet > 0) {
            Up7Down7Model.instance.myBetBack = {};
            var keys = Object.keys(Up7Down7Model.instance.myBet);
            for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
              var _key2 = _keys[_i];
              Up7Down7Model.instance.myBetBack["" + _key2] = Up7Down7Model.instance.myBet["" + _key2];
              Up7Down7Model.instance.myBet["" + _key2] = 0;
            }
            Up7Down7Model.instance.myBet = {};
            Up7Down7Model.instance.curTotalBet = 0;
          }
          this.Button_again.interactable = Up7Down7Model.instance.myBetBack != null;
          if (Up7Down7Model.instance.totalBet) {
            var _keys2 = Object.keys(Up7Down7Model.instance.totalBet);
            for (var _i2 = 0, _keys3 = _keys2; _i2 < _keys3.length; _i2++) {
              var _key3 = _keys3[_i2];
              Up7Down7Model.instance.totalBet["" + _key3] = 0;
            }
          }
        };
        _proto.mergeChip = function mergeChip(node) {
          if (node.children.length > 5) {
            node.children[0].destroy();
            var i = 0;
            for (var _iterator2 = _createForOfIteratorHelperLoose(node.children), _step2; !(_step2 = _iterator2()).done;) {
              var child = _step2.value;
              child.position = v3(0, (i - 1) * 5, 0);
              i++;
            }
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
                Up7Down7Ctrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_record":
              {
                Common.loadPopBuddle("prefab/Node_record", Up7Down7Utils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_rank", Up7Down7Utils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_path", Up7Down7Utils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_help", Up7Down7Utils.instance.bundle, function () {}, function (prefab) {
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
                var _index = parseInt(event.target.name.replace("Button_chip_", ""));
                Up7Down7Model.instance.curBet = Up7Down7Model.instance.baseBet[_index];
                var background = this.Button_chip.getChildByName("background");
                background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[_index];
                background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(Up7Down7Model.instance.curBet, 3);
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
                var keys = Object.keys(Up7Down7Model.instance.myBet);
                for (var _i3 = 0, _keys4 = keys; _i3 < _keys4.length; _i3++) {
                  var _key4 = _keys4[_i3];
                  var betAmount = Up7Down7Model.instance.myBet["" + _key4];
                  Up7Down7Ctrl.instance.reqBet(_key4, betAmount);
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
                var _keys5 = Object.keys(Up7Down7Model.instance.myBetBack);
                for (var _i4 = 0, _keys6 = _keys5; _i4 < _keys6.length; _i4++) {
                  var _key5 = _keys6[_i4];
                  var _betAmount = Up7Down7Model.instance.myBetBack["" + _key5];
                  Up7Down7Ctrl.instance.reqBet(_key5, _betAmount);
                }
                break;
              }
          }
        }
        // onClickLastBet() {
        //     let bets = this.chipMgr.lastBets;
        //     for (let i in bets) {
        //         if (bets[i] > 0) {
        //             NetManager.instance.sendOnlineData(ConfigManager.protocolDice.doingBet, {
        //                 pos: i + "",
        //                 betAmount: bets[i] + "",
        //             });
        //         }
        //     }

        //     Common.setButtonEnableWithGray(this.BtnLast, false);

        //     cc.tween(this.BtnLast.node)
        //         .delay(2)
        //         .call(() => {
        //             Common.setButtonEnableWithGray(this.BtnLast, true);
        //         })
        //         .start();
        // }
        // onClickDoubleBet() {
        //     let bets = this.chipMgr.bets;
        //     bets.forEach((rect, key) => {
        //         if (rect.selfBet > 0) {
        //             NetManager.instance.sendOnlineData(ConfigManager.protocolDice.doingBet, {
        //                 pos: rect.rectPos + "",
        //                 betAmount: rect.selfBet + "",
        //             });
        //         }
        //     });

        //     // this.BtnJiabei.interactable = false;
        //     Common.setButtonEnableWithGray(this.BtnJiabei, false);

        //     cc.tween(this.BtnJiabei.node)
        //         .delay(2)
        //         .call(() => {
        //             // this.BtnJiabei.interactable = true;
        //             Common.setButtonEnableWithGray(this.BtnJiabei, true);
        //         })
        //         .start();
        // }
        ;

        _proto.doAwait = function doAwait(delay) {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            _this7.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.onUpdateRoomState = function onUpdateRoomState(isEnter) {
          var _this8 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          switch (Up7Down7Model.instance.roomState.tableState) {
            case eRunStatus.START:
              {
                if (!isEnter) {
                  this.doClearChip();
                }
                this.Label_gameNo.string = "No: " + Up7Down7Model.instance.gameNo;
                var aniKnock = this.Node_timer.getChildByName("knock").getComponent(sp.Skeleton);
                var Label_count = this.Node_timer.getChildByName("Label_count");
                aniKnock.timeScale = 1;
                aniKnock.setAnimation(0, "idle", true);
                Tween.stopAllByTarget(Label_count);
                Label_count.active = true;
                Label_count.getComponent(Label).string = "" + Up7Down7Model.instance.roomState.countDown;

                // this.Label_md5Text.string = "";

                tween(Label_count).delay(1).call(function () {
                  Up7Down7Model.instance.roomState.countDown--;
                  if (Up7Down7Model.instance.roomState.countDown > 0) {
                    Label_count.getComponent(Label).string = "" + Up7Down7Model.instance.roomState.countDown;
                  } else {
                    Tween.stopAllByTarget(Label_count);
                    Label_count.getComponent(Label).string = "0";
                  }
                }).union().repeatForever().start();

                //shake dice
                // this.doDiceShake();

                break;
              }
            case eRunStatus.BET:
              {
                var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", this.Node_head);
                Label_winAdd.parent.active = false;
                for (var i = 0; i < 3; i++) {
                  var NodePlayer = this.Node_topWin.getChildByName("Node_head_" + i);
                  var headEffect = NodePlayer.getChildByName("headEffect");
                  headEffect.active = false;
                  var _Label_winAdd2 = find("Sprite_Label_winAdd/Label_winAdd", NodePlayer);
                  _Label_winAdd2.parent.active = false;
                }

                //下注提示
                this.gameTip.node.active = true;
                this.gameTip.setAnimation(0, "bet", false);
                this.gameTip.setCompleteListener(function () {
                  _this8.gameTip.setCompleteListener(null);
                  _this8.gameTip.node.active = false;
                });

                // original;

                var _aniKnock = this.Node_timer.getChildByName("knock").getComponent(sp.Skeleton);
                var _Label_count = this.Node_timer.getChildByName("Label_count");
                if (Up7Down7Model.instance.roomState.countDown > 3) {
                  _aniKnock.timeScale = 1;
                  _aniKnock.setAnimation(0, "idle", true);
                  Tween.stopAllByTarget(_Label_count);
                  _Label_count.active = true;
                  _Label_count.getComponent(Label).string = "" + Up7Down7Model.instance.roomState.countDown;
                  tween(_Label_count).delay(1).call(function () {
                    Up7Down7Model.instance.roomState.countDown--;
                    if (Up7Down7Model.instance.roomState.countDown > 3) {
                      _Label_count.getComponent(Label).string = "" + Up7Down7Model.instance.roomState.countDown;
                    } else {
                      _this8.gameTip.node.active = true;
                      _this8.gameTip.setAnimation(0, "locked", false);
                      _this8.gameTip.setCompleteListener(function () {
                        _this8.gameTip.setCompleteListener(null);
                        _this8.gameTip.node.active = false;
                      });
                      Tween.stopAllByTarget(_Label_count);
                      _Label_count.active = false;
                      tween(_this8.Node_betArea).delay(1).call(function () {
                        Up7Down7Utils.instance.playSound(eSound.warning);
                      }).union().repeat(3).start();
                      _aniKnock.timeScale = 1;
                      _aniKnock.setCompleteListener(null);
                      _aniKnock.setAnimation(0, "321", false);
                      _aniKnock.setCompleteListener(function () {
                        _aniKnock.setCompleteListener(null);
                        _Label_count.active = true;
                        _Label_count.getComponent(Label).string = "0";
                        _aniKnock.timeScale = 1;
                        _aniKnock.setAnimation(0, "idle", true);
                      });
                    }
                  }).union().repeatForever().start();
                } else {
                  if (_aniKnock.animation == "idle") {
                    _Label_count.active = false;
                    // aniKnock.setAnimation(0, `${Up7Down7Model.instance.roomState.countDown}`, false);

                    //下注提示
                    this.gameTip.node.active = true;
                    this.gameTip.setAnimation(0, "locked", false);
                    this.gameTip.setCompleteListener(function () {
                      _this8.gameTip.setCompleteListener(null);
                      _this8.gameTip.node.active = false;
                    });
                    tween(this.Node_betArea).delay(1).call(function () {
                      Up7Down7Utils.instance.playSound(eSound.warning);
                    }).union().repeat(Up7Down7Model.instance.roomState.countDown).start();
                    _aniKnock.timeScale = 3 / Up7Down7Model.instance.roomState.countDown;
                    _aniKnock.setCompleteListener(null);
                    _aniKnock.setAnimation(0, "321", false);
                    _aniKnock.setCompleteListener(function () {
                      _aniKnock.setCompleteListener(null);
                      _Label_count.active = true;
                      _Label_count.getComponent(Label).string = "0";
                      _aniKnock.timeScale = 1;
                      _aniKnock.setAnimation(0, "idle", true);
                    });
                  }
                }
                break;
              }
            case eRunStatus.END:
              {
                this.Button_again.interactable = false;
                this.Button_x2.interactable = false;
                this.gameTip.node.active = true;
                this.gameTip.setAnimation(0, "extra", false);
                this.gameTip.setCompleteListener(function () {
                  _this8.gameTip.setCompleteListener(null);
                  _this8.gameTip.node.active = false;
                });
                var _aniKnock2 = this.Node_timer.getChildByName("knock").getComponent(sp.Skeleton);
                var _Label_count2 = this.Node_timer.getChildByName("Label_count");
                _aniKnock2.timeScale = 1;
                _aniKnock2.setAnimation(0, "idle", true);
                Tween.stopAllByTarget(_Label_count2);
                _Label_count2.active = true;
                _Label_count2.getComponent(Label).string = "" + Up7Down7Model.instance.roomState.countDown;
                tween(_Label_count2).delay(1).call(function () {
                  Up7Down7Model.instance.roomState.countDown--;
                  if (Up7Down7Model.instance.roomState.countDown > 0) {
                    _Label_count2.getComponent(Label).string = "" + Up7Down7Model.instance.roomState.countDown;
                  } else {
                    Tween.stopAllByTarget(_Label_count2);
                    _Label_count2.getComponent(Label).string = "0";
                  }
                }).union().repeatForever().start();
                break;
              }
          }
        };
        _proto.onUpdatePlayerNum = function onUpdatePlayerNum() {
          if (!Up7Down7Model.instance.playerInfo) {
            return;
          }
          var Label_playerNum = this.Node_topWin.getChildByName("Label_playerNum");
          Label_playerNum.getComponent(Label).string = "" + Up7Down7Model.instance.playerInfo.playNum;
          if (Up7Down7Model.instance.playerInfo.seatPlay) {
            Up7Down7Model.instance.firstUserID = Up7Down7Model.instance.playerInfo.seatPlay[0].userId;
            var seatPlay = Up7Down7Model.instance.playerInfo.seatPlay.slice(0, 3);
            for (var i = 0; i < 3; i++) {
              var playerInfo = seatPlay[i];
              var Node_root = this.Node_topWin.getChildByName("Node_head_" + i);
              var head = find("mask/head", Node_root);
              var Sprite_nickNameBg = find("Sprite_nickNameBg", Node_root);
              var Label_nickName = find("Label_nickName", Node_root);
              var Label_gold = find("Label_gold", Node_root);
              head.active = playerInfo != null;
              Sprite_nickNameBg.active = playerInfo != null;
              Label_nickName.active = playerInfo != null;
              Label_gold.active = playerInfo != null;
              if (playerInfo) {
                Common.getHead(playerInfo.avatar, head);
                Common.nickNameFormatL(Label_nickName, playerInfo.nickName);
                Label_gold.getComponent(Label).string = "+" + Common.numFormat(playerInfo.prizeAmount);
              }
            }
          }
        };
        _proto.updateChipList = function updateChipList() {
          Up7Down7Model.instance.baseBet = Up7Down7Model.instance.baseBet.slice(0, 6);
          for (var i = 0; i < Up7Down7Model.instance.baseBet.length; i++) {
            var Button_chip = this.Node_btnGroup.getChildByName("Button_chip_" + i);
            if (!Button_chip) {
              break;
            }
            var _background = Button_chip.getChildByName("background");
            _background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[i];
            var betAmount = Up7Down7Model.instance.baseBet[i];
            _background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(betAmount, 3);
          }
          Up7Down7Model.instance.curBet = Up7Down7Model.instance.baseBet[0];
          var background = this.Button_chip.getChildByName("background");
          background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[0];
          background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(Up7Down7Model.instance.curBet, 3);
          this.Label_min.getComponent(Label).string = "" + Common.ChangeMoneyFormat(Up7Down7Model.instance.baseBet[0], 3);
          var maxBet = Up7Down7Model.instance.gameInfo.odds["1"].maxIssueBet;
          this.Label_max.getComponent(Label).string = "" + Common.ChangeMoneyFormat(maxBet, 3);

          //rates
          var keys = Object.keys(Up7Down7Model.instance.gameInfo.odds);
          for (var _i5 = 0, _keys7 = keys; _i5 < _keys7.length; _i5++) {
            var _key6 = _keys7[_i5];
            var oddInfo = Up7Down7Model.instance.gameInfo.odds[_key6];
            var betArea = this.Node_betArea.getChildByName("Node_area_" + parseInt(_key6));
            var Label_rate = betArea.getChildByName("Label_rate");
            Label_rate.getComponent(Label).string = "1 : " + oddInfo.odds / 100;
          }
        };
        _proto.doShowPrizeIntro = function doShowPrizeIntro() {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            var star = Up7Down7Model.instance.result.star;
            var keys = Object.keys(star);
            var _loop = function _loop() {
              var index = _keys8[_i6];
              var newStar = instantiate(_this9.star);
              newStar.name = "star";
              newStar.position = v3(0, 260, 0);
              for (var _iterator3 = _createForOfIteratorHelperLoose(newStar.children), _step3; !(_step3 = _iterator3()).done;) {
                var child = _step3.value;
                if (child.name != "rate") {
                  child.active = false;
                }
              }
              var star_fly = newStar.getChildByName("star_fly");
              var star_idle = newStar.getChildByName("star_idle");
              var star_intro = newStar.getChildByName("star_intro");
              star_intro.active = true;
              ParticleUtils.play(star_intro);
              star_idle.active = true;
              ParticleUtils.play(star_idle);
              var rate = star[index];
              var labelRate = newStar.getChildByName("rate");
              labelRate.getComponent(Label).string = rate + "X";
              var betArea = _this9.Node_betArea.getChildByName("Node_area_" + parseInt(index));
              betArea.addChild(newStar);
              tween(newStar).delay(1).call(function () {
                star_intro.active = false;
                star_idle.active = false;
                star_fly.active = true;
                ParticleUtils.play(star_fly);
              }).to(0.4, {
                position: v3(0, 0, 0)
              }, {
                easing: "cubicOut"
              }).call(function () {
                star_fly.active = false;
                star_idle.active = true;
              }).start();
            };
            for (var _i6 = 0, _keys8 = keys; _i6 < _keys8.length; _i6++) {
              _loop();
            }
            _this9.scheduleOnce(function () {
              resolve(null);
            }, keys.length > 0 ? 1.5 : 0);
          });

          // star
        };

        _proto.doShowPrizeEnd = function doShowPrizeEnd() {
          var _this10 = this;
          return new Promise(function (resolve, reject) {
            var result = Up7Down7Model.instance.result.prizeResults;
            var openNum = 0;
            for (var _iterator4 = _createForOfIteratorHelperLoose(result), _step4; !(_step4 = _iterator4()).done;) {
              var _index2 = _step4.value;
              if (_index2 != 1 && _index2 != 13) {
                openNum = _index2;
                break;
              }
            }
            var star = Up7Down7Model.instance.result.star;
            var keys = Object.keys(star);
            var isWin = false;
            var _loop2 = function _loop2() {
                var index = _keys9[_i7];
                var betArea = _this10.Node_betArea.getChildByName("Node_area_" + parseInt(index));
                var newStar = betArea.getChildByName("star");
                if (openNum != parseInt(index) && newStar) {
                  tween(newStar).delay(0.5).removeSelf().start();
                  return 0; // continue
                }

                if (!newStar) {
                  return 0; // continue
                }

                isWin = true;
                // for (const child of newStar.children) {
                //     if (child.name != "rate") {
                //         child.active = false;
                //     }
                // }

                tween(newStar).delay(0.5).call(function () {
                  var star_end = newStar.getChildByName("star_end");
                  star_end.active = true;
                  ParticleUtils.play(star_end);
                }).delay(1).removeSelf().start();
              },
              _ret;
            for (var _i7 = 0, _keys9 = keys; _i7 < _keys9.length; _i7++) {
              _ret = _loop2();
              if (_ret === 0) continue;
            }
            _this10.scheduleOnce(function () {
              resolve(null);
            }, isWin ? 2 : 0.5);
          });
        };
        _proto.doShowWinEffect = function doShowWinEffect() {
          var _this11 = this;
          return new Promise(function (resolve, reject) {
            for (var _iterator5 = _createForOfIteratorHelperLoose(_this11.Node_betArea.children), _step5; !(_step5 = _iterator5()).done;) {
              var _betArea = _step5.value;
              var Node_myChip = _betArea.getChildByName("Node_myChip");
              var Node_totalChip = _betArea.getChildByName("Node_totalChip");
              Node_myChip.destroyAllChildren();
              Node_totalChip.destroyAllChildren();
              Node_myChip.active = false;
              Node_totalChip.active = false;

              //更新下注分数
              var Label_bet = _betArea.getChildByName("Label_myBet");
              Label_bet.getComponent(Label).string = "";
              Label_bet.active = false;
              Label_bet = _betArea.getChildByName("Label_totalBet");
              Label_bet.getComponent(Label).string = "";
              Label_bet.active = false;

              // let star = betArea.getChildByName("star");
              // if (star) {
              //     star.destroy();
              // }
            }

            var result = Up7Down7Model.instance.result.prizeResults;
            for (var i = 1; i < 14; i++) {
              var betArea = _this11.Node_betArea.getChildByName("Node_area_" + i);
              var light = betArea.getChildByName("light");
              var dark = betArea.getChildByName("dark");
              light.active = false;
              dark.active = true;
            }
            var isWin = false;
            for (var _iterator6 = _createForOfIteratorHelperLoose(result), _step6; !(_step6 = _iterator6()).done;) {
              var _index3 = _step6.value;
              var _betArea2 = _this11.Node_betArea.getChildByName("Node_area_" + _index3);
              var _light = _betArea2.getChildByName("light");
              _light.active = true;
              var opacity = _light.getComponent(UIOpacity) || _light.addComponent(UIOpacity);
              tween(opacity).to(0.25, {
                opacity: 100
              }).to(0.25, {
                opacity: 255
              }).union().repeatForever().start();

              //
              if (Up7Down7Model.instance.myBet && Up7Down7Model.instance.myBet["" + _index3] > 0) {
                isWin = true;
                var gold = instantiate(_this11.gold);
                gold.name = "gold";
                _betArea2.addChild(gold);
                ParticleUtils.play(gold.getChildByName("boom"));
                tween(gold).delay(1.4).removeSelf().start();
              }
            }
            _this11.scheduleOnce(function () {
              resolve(null);
            }, isWin ? 1.4 : 0);
          });
        };
        _proto.doShowCoinEffect = function doShowCoinEffect(isEnter) {
          var _this12 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          return new Promise(function (resolve, reject) {
            var result = Up7Down7Model.instance.result.prizeResults;
            for (var _iterator7 = _createForOfIteratorHelperLoose(result), _step7; !(_step7 = _iterator7()).done;) {
              var _index4 = _step7.value;
              var betArea = _this12.Node_betArea.getChildByName("Node_area_" + _index4);
              var coinRoot = betArea.getChildByName("coinRoot");
              var coinCounts = Math.floor(Math.random() * 10 + 20);
              for (var i = 0; i < coinCounts; i++) {
                var coin = instantiate(_this12.coin);
                coin.name = "coin";
                coinRoot.addChild(coin);
                coin.position = v3(Math.random() * 120 - 60, Math.random() * 120 - 60, 0);
                ParticleUtils.play(coin);
              }
              if (isEnter) {
                var winCounts = 0;
                if (Up7Down7Model.instance.myBet && Up7Down7Model.instance.myBet["" + _index4] > 0) {
                  winCounts = Math.floor(coinCounts / 3);
                  for (var _i8 = 0; _i8 < winCounts; _i8++) {
                    var _coin = coinRoot.children[_i8];
                    var toPos = _this12.sprAvatar.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                    toPos = coinRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
                    tween(_coin).delay(1 + _i8 * 0.02).to(0.5, {
                      position: toPos
                    }, {
                      easing: "cubicOut"
                    }).call(function () {}).removeSelf().start();
                  }
                }
                for (var _i9 = winCounts; _i9 < coinCounts; _i9++) {
                  var _coin2 = coinRoot.children[_i9];
                  var _toPos = _this12.Node_startChip_other.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  _toPos = coinRoot.getComponent(UITransform).convertToNodeSpaceAR(_toPos);
                  tween(_coin2).delay(1 + _i9 * 0.02).to(0.5, {
                    position: _toPos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {}).removeSelf().start();
                }
              }
            }
            resolve(null);
          });
        };
        _proto.doCollectCoin = function doCollectCoin() {
          var _this13 = this;
          if (!Up7Down7Model.instance.checkOut) {
            return;
          }
          var mapWinner = {};
          var seatPlay = Up7Down7Model.instance.playerInfo.seatPlay.slice(0, 3);
          var seatPrize = Up7Down7Model.instance.checkOut.seatPrize;
          var myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
          for (var _iterator8 = _createForOfIteratorHelperLoose(seatPrize), _step8; !(_step8 = _iterator8()).done;) {
            var info = _step8.value;
            if (info.userId == myUid) {
              continue;
            }
            for (var seatIndex = 0; seatIndex < seatPlay.length; seatIndex++) {
              var playerInfo = seatPlay[seatIndex];
              if (info.userId == playerInfo.userId && info.prizeAmount > 0) {
                mapWinner["" + seatIndex] = info;
                break;
              }
            }
          }
          var mapCoin = {};
          var result = Up7Down7Model.instance.result.prizeResults;
          for (var _iterator9 = _createForOfIteratorHelperLoose(result), _step9; !(_step9 = _iterator9()).done;) {
            var _index5 = _step9.value;
            var _betArea3 = this.Node_betArea.getChildByName("Node_area_" + _index5);
            var _coinRoot = _betArea3.getChildByName("coinRoot");
            var coinCounts = _coinRoot.children.length;
            var winCounts = 0;
            if (Up7Down7Model.instance.myBet && Up7Down7Model.instance.myBet["" + _index5] > 0) {
              winCounts = 5;
              for (var _i13 = 0; _i13 < winCounts; _i13++) {
                var _coin3 = _coinRoot.children[_i13];
                var _toPos2 = this.sprAvatar.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                _toPos2 = _coinRoot.getComponent(UITransform).convertToNodeSpaceAR(_toPos2);
                tween(_coin3).delay(1 + _i13 * 0.02).to(0.5, {
                  position: _toPos2
                }, {
                  easing: "cubicOut"
                }).call(function () {}).removeSelf().start();
              }
              this.scheduleOnce(function () {
                if (Up7Down7Model.instance.endBalance > 0) {
                  Up7Down7Model.instance.curBalance = Up7Down7Model.instance.endBalance;
                  Up7Down7Model.instance.endBalance = 0;
                  _this13.updateGold();
                }
                if (Up7Down7Model.instance.checkOut.userPrize.prizeAmount > 0) {
                  Up7Down7Utils.instance.playSound(eSound.coin);
                  var headEffect = _this13.Node_head.getChildByName("headEffect");
                  headEffect.active = true;
                  var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", _this13.Node_head);
                  Label_winAdd.parent.active = true;
                  Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyFormat(Up7Down7Model.instance.checkOut.userPrize.prizeAmount, 3);
                }
              }, 1.0);
            }
            mapCoin["" + _index5] = coinCounts - winCounts;
          }

          //user
          var winnerKeys = Object.keys(mapWinner);
          var _loop3 = function _loop3() {
            var key = _winnerKeys[_i10];
            var info = mapWinner[key];
            var NodePlayer = _this13.Node_topWin.getChildByName("Node_head_" + key);
            var prizeKeys = Object.keys(info.prizeInfo);
            for (var _i11 = 0, _prizeKeys = prizeKeys; _i11 < _prizeKeys.length; _i11++) {
              var pKey = _prizeKeys[_i11];
              var betArea = _this13.Node_betArea.getChildByName("Node_area_" + pKey);
              var coinRoot = betArea.getChildByName("coinRoot");
              for (var i = 0; i < 5; i++) {
                var childIndex = coinRoot.children.length - mapCoin[pKey] + i;
                var coin = coinRoot.children[childIndex];
                var toPos = NodePlayer.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                toPos = coinRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
                tween(coin).delay(1 + i * 0.02).to(0.5, {
                  position: toPos
                }, {
                  easing: "cubicOut"
                }).removeSelf().start();
              }
              mapCoin[pKey] -= 5;
            }
            tween(NodePlayer).delay(1.25).call(function () {
              Up7Down7Utils.instance.playSound(eSound.coin);
              var headEffect = NodePlayer.getChildByName("headEffect");
              headEffect.active = true;
              var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", NodePlayer);
              Label_winAdd.parent.active = true;
              Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyFormat(info.prizeAmount, 3);
            }).start();
          };
          for (var _i10 = 0, _winnerKeys = winnerKeys; _i10 < _winnerKeys.length; _i10++) {
            _loop3();
          }

          //all
          var coinKeys = Object.keys(mapCoin);
          for (var _i12 = 0, _coinKeys = coinKeys; _i12 < _coinKeys.length; _i12++) {
            var _key7 = _coinKeys[_i12];
            var betArea = this.Node_betArea.getChildByName("Node_area_" + _key7);
            var coinRoot = betArea.getChildByName("coinRoot");
            var startIndex = coinRoot.children.length - mapCoin[_key7];
            for (var i = startIndex; i < coinRoot.children.length; i++) {
              var coin = coinRoot.children[i];
              var toPos = this.Node_startChip_other.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
              toPos = coinRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
              tween(coin).delay(1 + i * 0.02).to(0.5, {
                position: toPos
              }, {
                easing: "cubicOut"
              }).call(function () {}).removeSelf().start();
            }
          }
          this.scheduleOnce(function () {
            Up7Down7Utils.instance.playSound(eSound.coin);
          }, 1.5);
        };
        _proto.doDiceOpen = function doDiceOpen() {
          var _this14 = this;
          return new Promise(function (resolve, reject) {
            var center_tz = _this14.Node_diceRoot.getChildByName("center_tz").getComponent(sp.Skeleton);
            center_tz.setAnimation(0, "result", false);
            center_tz.addAnimation(0, "idle", true);
            var dice_0 = _this14.Node_diceRoot.getChildByName("dice_0");
            var dice_1 = _this14.Node_diceRoot.getChildByName("dice_1");
            dice_0.active = true;
            dice_1.active = true;
            dice_0.getComponent(Sprite).spriteFrame = _this14.spriteFrameDice[Up7Down7Model.instance.result.openNums[0] - 1];
            dice_1.getComponent(Sprite).spriteFrame = _this14.spriteFrameDice[Up7Down7Model.instance.result.openNums[1] - 1];
            resolve(null);
          });
        };
        _proto.doDiceShake = function doDiceShake(times) {
          var _this15 = this;
          if (times === void 0) {
            times = null;
          }
          return new Promise(function (resolve, reject) {
            var center_tz = _this15.Node_diceRoot.getChildByName("center_tz").getComponent(sp.Skeleton);
            var timeScale = times ? 3 / times : 1;
            center_tz.timeScale = timeScale;
            center_tz.setAnimation(0, "shake", false);
            center_tz.setCompleteListener(function () {
              center_tz.setCompleteListener(null);
              resolve(null);
              center_tz.timeScale = 1;
              center_tz.setAnimation(0, "bet", true);
            });
            var dice_0 = _this15.Node_diceRoot.getChildByName("dice_0");
            var dice_1 = _this15.Node_diceRoot.getChildByName("dice_1");
            dice_0.active = false;
            dice_1.active = false;
          });
        };
        _proto.onUpdatePath = function onUpdatePath() {
          var history = Up7Down7Model.instance.history.slice(0, 100);
          var p26 = 0;
          var p7 = 0;
          var p812 = 0;
          for (var _iterator10 = _createForOfIteratorHelperLoose(history), _step10; !(_step10 = _iterator10()).done;) {
            var info = _step10.value;
            var openNums = info.openNums || info["openNum"];
            var num = openNums[0] + openNums[1];
            num < 7 ? p26++ : num > 7 ? p812++ : p7++;
          }
          var counts = history.length;
          p26 = Math.floor(p26 * 100 / counts);
          p812 = Math.floor(p812 * 100 / counts);
          p7 = 100 - p26 - p812;
          this.Label_info.string = "<color=#2ab4ac>2~6</color> " + p26 + "%   <color=#a5260e>8~12</color> " + p812 + "%   <color=#6bcd92>7</color> " + p7 + "%   <color=#6bcd92>" + i18n.lang.localLabel.Up7Down7Game.pathTip_0 + "</color> " + counts + " <color=#6bcd92>" + i18n.lang.localLabel.Up7Down7Game.pathTip_1 + "</color>";
          this.pathScrollViewList.setData(Up7Down7Model.instance.history);
          this.pathScrollViewList.refresh();
          EventManager.instance.emit(eEvent.onUpdatePath);
        }

        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this16 = this;
          switch (event) {
            case eProto.HD_Enter:
              {
                this.onUpdateRoomState(true);
                this.onUpdatePlayerNum();
                this.updateChipList();
                this.Label_gameNo.string = "No: " + Up7Down7Model.instance.gameNo;
                if (Up7Down7Model.instance.roomState.tableState == eRunStatus.END) {
                  this.Label_md5Text.string = "" + Up7Down7Model.instance.gameInfo.tableInfo.original;
                  if (Up7Down7Model.instance.result) {
                    this.doDiceOpen();
                    this.doShowCoinEffect(true);
                  }
                } else if (Up7Down7Model.instance.roomState.tableState == eRunStatus.BET) {
                  this.Label_md5Text.string = "" + Up7Down7Model.instance.gameInfo.tableInfo.ciphertext;
                  var center_tz = this.Node_diceRoot.getChildByName("center_tz").getComponent(sp.Skeleton);
                  center_tz.setAnimation(0, "bet", true);
                  var dice_0 = this.Node_diceRoot.getChildByName("dice_0");
                  var dice_1 = this.Node_diceRoot.getChildByName("dice_1");
                  dice_0.active = false;
                  dice_1.active = false;
                  if (Up7Down7Model.instance.myBet) {
                    //自己下注
                    var keys = Object.keys(Up7Down7Model.instance.myBet);
                    if (keys.length > 0) {
                      var _index6 = 0;
                      for (var _iterator11 = _createForOfIteratorHelperLoose(keys), _step11; !(_step11 = _iterator11()).done;) {
                        var _key8 = _step11.value;
                        var betNum = Up7Down7Model.instance.myBet[_key8];
                        this.doSendChip(_index6, parseInt(_key8), betNum);
                        _index6++;
                      }
                      this.Button_x2.interactable = true;
                    }
                  }
                  if (Up7Down7Model.instance.totalBet) {
                    //总下注
                    var _keys10 = Object.keys(Up7Down7Model.instance.totalBet);
                    if (_keys10.length > 0) {
                      var _index7 = 0;
                      for (var _iterator12 = _createForOfIteratorHelperLoose(_keys10), _step12; !(_step12 = _iterator12()).done;) {
                        var _key9 = _step12.value;
                        var _betNum = Up7Down7Model.instance.totalBet[_key9];
                        if (_betNum > 0) {
                          this.doSendChip(_index7, parseInt(_key9), _betNum, false);
                        }
                        _index7++;
                      }
                    }
                  }
                } else {
                  this.doDiceShake(Up7Down7Model.instance.roomState.countDown).then(function () {
                    _this16.Label_md5Text.string = "" + Up7Down7Model.instance.gameInfo.tableInfo.ciphertext;
                  });
                }
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                this.onUpdateRoomState();
                break;
              }
            case eProto.HD_Md5Ciphertext:
              {
                this.doDiceShake().then(function () {
                  _this16.Label_md5Text.string = "" + data;
                });
                break;
              }
            case eProto.HD_OpenResult:
              {
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _this16.Label_md5Text.string = "" + Up7Down7Model.instance.result.original;
                        _this16.doDiceOpen();
                        _context2.next = 4;
                        return _this16.doShowPrizeIntro();
                      case 4:
                        _context2.next = 6;
                        return _this16.doShowWinEffect();
                      case 6:
                        _context2.next = 8;
                        return _this16.doShowPrizeEnd();
                      case 8:
                        _context2.next = 10;
                        return _this16.doShowCoinEffect();
                      case 10:
                        if (Up7Down7Model.instance.checkOut) {
                          Up7Down7Model.instance.isNoneCheckOut = false;
                          _this16.doCollectCoin();
                        } else {
                          Up7Down7Model.instance.isNoneCheckOut = true;
                        }
                        _this16.onUpdatePath();
                        _this16.Node_effectRoot.removeAllChildren();
                      case 13:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }))();
                break;
              }
            case eProto.HD_Checkout:
              {
                if (Up7Down7Model.instance.isNoneCheckOut) {
                  this.doCollectCoin();
                }
                break;
              }
            case eProto.exitRoom:
              {
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case eProto.HD_UpdatePlayerNum:
              {
                this.onUpdatePlayerNum();
                break;
              }
            case eProto.HD_QueryBetRecord:
              {
                break;
              }
            case eProto.HD_History:
              {
                this.onUpdatePath();
                // if (Up7Down7Model.instance.result == null && Up7Down7Model.instance.roomState.tableState == Up7Down7Def.eRunStatus.BET) {
                //     Up7Down7Model.instance.result = Up7Down7Model.instance.history[0];

                //     let center_tz = this.Node_diceRoot.getChildByName("center_tz").getComponent(sp.Skeleton);
                //     let dice_0 = this.Node_diceRoot.getChildByName("dice_0");
                //     let dice_1 = this.Node_diceRoot.getChildByName("dice_1");
                //     dice_0.active = true;
                //     dice_1.active = true;
                //     dice_0.getComponent(Sprite).spriteFrame = this.spriteFrameDice[Up7Down7Model.instance.result.openNums[0] - 1];
                //     dice_1.getComponent(Sprite).spriteFrame = this.spriteFrameDice[Up7Down7Model.instance.result.openNums[1] - 1];
                //     // center_tz.setAnimation(0, `idle`, true);
                // }
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
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();
                break;
              }
            case eProto.HD_Bet:
              {
                Up7Down7Model.instance.myBet["" + data.pos] = Up7Down7Model.instance.myBet["" + data.pos] || 0;
                Up7Down7Model.instance.myBet["" + data.pos] += parseInt(data.betAmount);
                this.doSendChip(0, parseInt(data.pos), parseInt(data.betAmount));
                this.scheduleOnce(function () {
                  Up7Down7Utils.instance.playSound(eSound.bet);
                }, 0.3);
                this.updateGold();
                this.Button_x2.interactable = true;
                break;
              }
            case eProto.HD_BetList:
              {
                var myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
                var _index8 = 0;
                gts.Debug.LogWarr("==HD_BetList==" + JSON.stringify(data));
                gts.Debug.LogWarr("==HD_BetList=totalBet=" + JSON.stringify(Up7Down7Model.instance.totalBet));
                for (var _iterator13 = _createForOfIteratorHelperLoose(data), _step13; !(_step13 = _iterator13()).done;) {
                  var strBetInfo = _step13.value;
                  var betInfo = JSON.parse(strBetInfo);
                  if (Up7Down7Model.instance.firstUserID && Up7Down7Model.instance.firstUserID == betInfo.userId) {
                    this.doSendStar(parseInt(betInfo.betType), _index8);
                  }
                  Up7Down7Model.instance.totalBet["" + betInfo.betType] = Up7Down7Model.instance.totalBet["" + betInfo.betType] || 0;
                  Up7Down7Model.instance.totalBet["" + betInfo.betType] += betInfo.betAmount;
                  if (betInfo.userId != myUid) {
                    this.doSendChip(_index8, parseInt(betInfo.betType), betInfo.betAmount, false);
                    _index8++;
                  }
                }
                this.scheduleOnce(function () {
                  Up7Down7Utils.instance.playSound(eSound.bet);
                }, 0.3);
                break;
              }
          }
        };
        return Up7Down7GameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "areaBtnParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Button_x2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Button_again", [_dec7], {
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
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_topWin", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_betArea", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "betChip", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Button_chip", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_startChip_other", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Label_min", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Label_max", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Label_md5Text", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "cm_light", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_btnGroup", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameChip", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameChip_big", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameDice", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Node_diceRoot", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "gameTip", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "star", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Label_info", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "pathScrollViewList", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "Node_star", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec36], {
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

System.register("chunks:///_virtual/Up7Down7Model.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './Up7Down7Def.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameDef, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aa7f6QhlmFCNLpPL018UMPg", "Up7Down7Model", undefined);
      var Up7Down7Model = exports('Up7Down7Model', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(Up7Down7Model, _GameDef$BaseSington);
        function Up7Down7Model() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.gameStatus = eRunStatus.NONE;
          _this.gameInfo = null;
          _this.curBet = 50;
          _this.curTotalBet = 0;
          _this.curTotalWin = 0;
          _this.roomState = null;
          _this.playerInfo = null;
          _this.result = null;
          _this.checkOut = null;
          _this.isNoneCheckOut = false;
          _this.myBetBack = null;
          _this.myBet = null;
          _this.totalBet = null;
          _this.firstUserID = null;
          _this.record = null;
          _this.history = null;
          _this.baseBet = null;
          _this.gameNo = "";
          return _this;
        }
        var _proto = Up7Down7Model.prototype;
        // _betResult: Up7Down7Def.IHD_Bet = null;
        // set betResult(_betResult: Up7Down7Def.IHD_Bet) {
        //     this._betResult = _betResult;
        // }
        // get betResult() {
        //     return this._betResult;
        // }
        ////////////////////////////////////////////////////////////
        /**
         * 退出房间  清理游戏数据
         */
        _proto.clearGameData = function clearGameData() {
          this.curBalance = 0;
          this.endBalance = 0;
          this.gameStatus = eRunStatus.NONE;
          this.gameInfo = null;
          this.curBet = 50;
          this.curTotalBet = 0;
          this.curTotalWin = 0;
          this.roomState = null;
          this.playerInfo = null;
          this.result = null;
          this.checkOut = null;
          this.isNoneCheckOut = false;
          this.myBetBack = null;
          this.myBet = null;
          this.totalBet = null;
          this.firstUserID = null;
          this.record = null;
          this.history = null;
          this.baseBet = null;
        };
        return Up7Down7Model;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Up7Down7Scene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Up7Down7Def.ts', './Up7Down7Utils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, sys, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, Up7Down7Utils, Common;
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
      Up7Down7Utils = module.Up7Down7Utils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "52ccdwzUoRGT7VKLiX5vuFT", "Up7Down7Scene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Up7Down7Scene = exports('default', (_dec = ccclass("Up7Down7Scene"), _dec2 = menu("game/Up7Down7Game/Up7Down7Scene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Up7Down7Scene, _Component);
        function Up7Down7Scene() {
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
        var _proto = Up7Down7Scene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          Up7Down7Utils.instance.bundle = assetManager.getBundle(cBundle);
          Up7Down7Utils.instance.preLoad();
          Up7Down7Utils.instance.playBgMusic();
          this.onLoadGame();
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
          Common.showWait();
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
            Common.showWait();
            Up7Down7Utils.instance.bundle.load("prefab/Up7Down7GameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
        return Up7Down7Scene;
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

System.register("chunks:///_virtual/Up7Down7Utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './Up7Down7Def.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, GameDef, AudioManager, eSound, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
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
      cclegacy._RF.push({}, "a6e948kIvJFSJVQh0BzU/jW", "Up7Down7Utils", undefined);
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

      var Up7Down7Utils = exports('Up7Down7Utils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(Up7Down7Utils, _GameDef$BaseSington);
        function Up7Down7Utils() {
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
        var _proto = Up7Down7Utils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/Up7Down7GameView");
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
            var arrHLoad;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrHLoad = []; // arrHLoad.push(
                  //     this.asyncLoadDir("spine/icon", sp.SkeletonData, (err, arrSpineData: sp.SkeletonData[]) => {
                  //         if (!err) {
                  //             for (const spineData of arrSpineData) {
                  //                 this.arrSkeletonData[spineData.name] = spineData;
                  //             }
                  //         }
                  //     })
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
                  _context3.next = 3;
                  return Promise.all(arrHLoad);
                case 3:
                  if (cb) {
                    cb();
                  }
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function loadRes_icon(_x7) {
            return _loadRes_icon.apply(this, arguments);
          }
          return loadRes_icon;
        }();
        _proto.loadPopBuddle = function loadPopBuddle(path, callback1, callback2, isshowWait) {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            if (isshowWait) {
              Common.showWait();
            }
            _this4.bundle.load(path, Prefab, function (cur, total) {
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
            if (err || _this5.soundIDList[soundPath]) {
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
          var _this6 = this;
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

          //        // Up7Down7Utils.instance.playSound(Up7Down7Def.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // Up7Down7Utils.instance.stopSound(Up7Down7Def.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this6.numberFormatFloatD(curWin / 1000, 2.0) : _this6.numberFormatD(curWin / 1000, 2.0);
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

          //        // Up7Down7Utils.instance.playSound(Up7Down7Def.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // Up7Down7Utils.instance.stopSound(Up7Down7Def.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this7.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this7.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this8 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;

          //        // Up7Down7Utils.instance.playSound(Up7Down7Def.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // Up7Down7Utils.instance.stopSound(Up7Down7Def.eSound.numAdd);

              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this8.numberFormatFloat(curWin, 0) : "" + _this8.numberFormat(curWin, 0);
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
          // if (this.arrIconSpriteFrame) {
          //     let symbol = null;
          //     if (symbolIndex == Up7Down7Def.eSymbol.WILD) {
          //         if (EffectCount > 0) {
          //             symbol = `${symbol_nomal_icon[symbolIndex][EffectCount - 1]}`;
          //         } else {
          //             return null;
          //         }
          //     } else {
          //         symbol = `${symbol_nomal_icon[symbolIndex]}`;
          //     }

          //     return this.arrIconSpriteFrame[symbol];
          // }
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
          //        // if (isIdle) {
          //        //     return null;
          //        // }

          var strAni = [];
          // switch (symbolIndex) {
          //     case Up7Down7Def.eSymbol.NONE: {
          //         let index = Math.floor(Math.random() * (symbol_aniName.length - 3) + 3);
          //         strAni.push(`${symbol_aniName[index]}_${isIdle ? "idle" : "win"}`);
          //         break;
          //     }
          //     case Up7Down7Def.eSymbol.SCATTER: {
          //         if (isIdle) {
          //             strAni.push(`free_idle`);
          //         } else {
          //             strAni.push(`free_intro`);
          //             strAni.push(`free_intro`);
          //         }
          //         break;
          //     }
          //     case Up7Down7Def.eSymbol.SpecialWild: {
          //         strAni.push(`${symbol_aniName[symbolIndex - 1]}_${isIdle ? "idle" : "win"}`);
          //         break;
          //     }
          //     default: {
          //         strAni.push(`${symbol_aniName[symbolIndex - 1]}_${isIdle ? "idle" : "win"}`);
          //         break;
          //     }
          // }
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
        return Up7Down7Utils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Up7Down7Game', 'chunks:///_virtual/Up7Down7Game'); 
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