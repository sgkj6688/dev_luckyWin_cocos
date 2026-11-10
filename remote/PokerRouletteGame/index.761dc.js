System.register("chunks:///_virtual/PokerRoulette_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "baaa5jgXE5PK5loB62JsXih", "PokerRoulette_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var PokerRoulette_btnEffect = exports('default', (_dec = ccclass("PokerRouletteBtnEffect"), _dec2 = menu("game/PokerRouletteGame/PokerRoulette_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerRoulette_btnEffect, _Component);
        function PokerRoulette_btnEffect() {
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
        var _proto = PokerRoulette_btnEffect.prototype;
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

        _createClass(PokerRoulette_btnEffect, [{
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

        return PokerRoulette_btnEffect;
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

System.register("chunks:///_virtual/PokerRoulette_help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerRouletteModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, PokerRouletteModel;
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
      Component = module.Component;
    }, function (module) {
      PokerRouletteModel = module.PokerRouletteModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "da9faxH6xtPuLU5QMPJpChx", "PokerRoulette_help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PokerRoulette_help = exports('PokerRoulette_help', (_dec = ccclass("PokerRoulette_help"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerRoulette_help, _Component);
        function PokerRoulette_help() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_rate_0", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate_1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rate_2", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PokerRoulette_help.prototype;
        _proto.start = function start() {
          if (PokerRouletteModel.instance.PosOdds) {
            this.Label_rate_0.string = "X" + PokerRouletteModel.instance.PosOdds[0];
            this.Label_rate_1.string = "X" + PokerRouletteModel.instance.PosOdds[16];
            this.Label_rate_2.string = "X" + PokerRouletteModel.instance.PosOdds[3];
          }
        };
        return PokerRoulette_help;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_rate_0", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate_1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_rate_2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerRoulette_path.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerRouletteModel.ts', './PokerRouletteDef.ts', './EventManager.ts', './ViewManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, ScrollView, SpriteFrame, Label, instantiate, Sprite, Component, UITransform, v3, sys, PokerRouletteModel, eEvent, EventManager, ViewManager;
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
      ScrollView = module.ScrollView;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Component = module.Component;
      UITransform = module.UITransform;
      v3 = module.v3;
      sys = module.sys;
    }, function (module) {
      PokerRouletteModel = module.PokerRouletteModel;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "13e6dKy0S9CLoetB5Hyy4ic", "PokerRoulette_path", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var PokerRoulette_path = exports('default', (_dec = ccclass("PokerRoulette_path"), _dec2 = menu("game/PokerRouletteGame/PokerRoulette_path"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ScrollView), _dec6 = property(Node), _dec7 = property(ScrollView), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(ScrollView), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(ScrollView), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(SpriteFrame), _dec17 = property(SpriteFrame), _dec18 = property(SpriteFrame), _dec19 = property(SpriteFrame), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerRoulette_path, _Component);
        function PokerRoulette_path() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Sprite_new", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item_record", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_recordList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordListContent", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_hotIce", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hotIceContent", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item_hotIce", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_roadColor", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roadColorContent", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item_roadColor", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_roadValue", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roadValueContent", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item_roadValue", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "history_dian", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameCard", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameCard_hc", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameCard_hcBG", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_record", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_pecentRoad_color", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_pecentRoad_value", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_hotIce", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_counts", _descriptor22, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PokerRoulette_path.prototype;
        _proto.start = function start() {
          this.updateHistory();
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onUpdatePath, this.updateHistory, this);
        };
        _proto.onDisable = function onDisable() {
          this.unscheduleAllCallbacks();
          EventManager.instance.off(eEvent.onUpdatePath, this.updateHistory, this);
        };
        _proto.reuseItem = function reuseItem(parent, template, index) {
          // 历史最多 100 条，各组按索引复用；重置旧图标和连线，避免旧路单残留。
          var item = parent.children[index];
          if (!item) {
            item = instantiate(template);
            parent.addChild(item);
          }
          for (var _iterator = _createForOfIteratorHelperLoose(item.children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            var original = template.getChildByName(child.name);
            var sprite = child.getComponent(Sprite);
            if (sprite && original != null && original.getComponent(Sprite)) sprite.spriteFrame = original.getComponent(Sprite).spriteFrame;
          }
          var line = item.getChildByName("Sprite_line");
          if (line) line.active = false;
          return item;
        };
        _proto.updateHistory = function updateHistory() {
          var _this2 = this;
          this.unscheduleAllCallbacks();
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.recordListContent.children), _step2; !(_step2 = _iterator2()).done;) {
            var child = _step2.value;
            child.active = false;
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.hotIceContent.children), _step3; !(_step3 = _iterator3()).done;) {
            var _child = _step3.value;
            _child.active = false;
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.roadColorContent.children), _step4; !(_step4 = _iterator4()).done;) {
            var _child2 = _step4.value;
            _child2.active = false;
          }
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.roadValueContent.children), _step5; !(_step5 = _iterator5()).done;) {
            var _child3 = _step5.value;
            _child3.active = false;
          }
          var history = PokerRouletteModel.instance.history.slice(0, 100).reverse();

          //rate
          var color = [0, 0, 0, 0];
          var value = [0, 0, 0];
          var cardNum = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0
          };
          var _loop = function _loop(i) {
            var record = history[i];
            var cc = record % 4;
            var vv = Math.floor(record / 4);
            color[cc]++;
            value[vv]++;
            cardNum["" + record]++;

            //recordList
            var newItem = _this2.reuseItem(_this2.recordListContent, _this2.item_record, i);
            newItem.active = true;
            newItem.getComponent(Sprite).spriteFrame = _this2.spriteFrameCard[record];
            var marker = newItem.getChildByName("latestMarker");
            if (!marker && i == history.length - 1) {
              marker = instantiate(_this2.Sprite_new);
              marker.name = "latestMarker";
              newItem.addChild(marker);
            }
            if (marker) marker.active = i == history.length - 1;

            //Node_record_hotIce
            var item_hotIce = _this2.reuseItem(_this2.hotIceContent, _this2.item_hotIce, i);
            item_hotIce.active = true;
            var itemIcon = item_hotIce.getChildByName("Sprite_icon");
            itemIcon.getComponent(Sprite).spriteFrame = _this2.spriteFrameCard_hc[record];
            item_hotIce.getComponent(Sprite).spriteFrame = i == history.length - 1 ? _this2.spriteFrameCard_hcBG[2] : _this2.spriteFrameCard_hcBG[cc % 2];

            //Node_pecentRoad_color
            var item_roadColor = _this2.reuseItem(_this2.roadColorContent, _this2.item_roadColor, i);
            item_roadColor.name = "item_roadColor_" + i;
            item_roadColor.active = true;
            var curPointColor = item_roadColor.getChildByName("Sprite_icon_" + cc);
            curPointColor.getComponent(Sprite).spriteFrame = _this2.history_dian;
            if (i > 0) {
              _this2.scheduleOnce(function () {
                var lastCC = history[i - 1] % 4;
                var item_roadColorLast = _this2.roadColorContent.getChildByName("item_roadColor_" + (i - 1));
                var lastPoint = item_roadColorLast.getChildByName("Sprite_icon_" + lastCC);
                var wPos_last = lastPoint.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                var wPos_cur = curPointColor.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                var Sprite_line = item_roadColorLast.getChildByName("Sprite_line");
                Sprite_line.active = true;
                Sprite_line.position = lastPoint.position;
                var angle = Math.atan((wPos_cur.y - wPos_last.y) / (wPos_cur.x - wPos_last.x)) * 180 / Math.PI;
                if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                  angle = angle + 90;
                  if (angle > 90) {
                    angle = angle - 180;
                  }
                }
                Sprite_line.eulerAngles = v3(0, 0, angle);
                var disLen = Math.abs(cc - lastCC);
                Sprite_line.getComponent(UITransform).width = disLen == 1 ? 95 : disLen == 2 ? 155 : disLen == 3 ? 230 : 55;
              });
            }

            //Node_pecentRoad_value
            var item_roadValue = _this2.reuseItem(_this2.roadValueContent, _this2.item_roadValue, i);
            item_roadValue.name = "item_roadValue_" + i;
            item_roadValue.active = true;
            var curPointValue = item_roadValue.getChildByName("Sprite_icon_" + vv);
            curPointValue.getComponent(Sprite).spriteFrame = _this2.history_dian;
            if (i > 0) {
              _this2.scheduleOnce(function () {
                var lastVV = Math.floor(history[i - 1] / 4);
                var item_roadValueLast = _this2.roadValueContent.getChildByName("item_roadValue_" + (i - 1));
                var lastPoint = item_roadValueLast.getChildByName("Sprite_icon_" + lastVV);
                var wPos_last = lastPoint.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                var wPos_cur = curPointValue.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                var Sprite_line = item_roadValueLast.getChildByName("Sprite_line");
                Sprite_line.active = true;
                Sprite_line.position = lastPoint.position;
                var angle = Math.atan((wPos_cur.y - wPos_last.y) / (wPos_cur.x - wPos_last.x)) * 180 / Math.PI;
                if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                  angle = angle + 90;
                  if (angle > 90) {
                    angle = angle - 180;
                  }
                }
                Sprite_line.eulerAngles = v3(0, 0, angle);
                var disLen = Math.abs(vv - lastVV);
                Sprite_line.getComponent(UITransform).width = disLen == 1 ? 95 : disLen == 2 ? 155 : 55;
              });
            }
          };
          for (var i = 0; i < history.length; i++) {
            _loop(i);
          }
          this.scheduleOnce(function () {
            _this2.scrollView_recordList.scrollToBottom();
            _this2.ScrollView_hotIce.scrollToBottom();
            _this2.ScrollView_roadColor.scrollToRight();
            _this2.ScrollView_roadValue.scrollToRight();
          });
          var Node_label = this.Node_pecentRoad_color.getChildByName("Node_label");
          for (var _i = 0; _i < 4; _i++) {
            var percent = history.length ? Math.floor(color[_i] / history.length * 10000) / 100 : 0;
            Node_label.children[_i].getComponent(Label).string = percent + "%";
          }
          Node_label = this.Node_pecentRoad_value.getChildByName("Node_label");
          for (var _i2 = 0; _i2 < 3; _i2++) {
            var _percent = history.length ? Math.floor(value[_i2] / history.length * 10000) / 100 : 0;
            Node_label.children[_i2].getComponent(Label).string = _percent + "%";
          }

          //hotInfo
          var keyInfo = Object.keys(cardNum).slice();
          keyInfo.sort(function (a, b) {
            return cardNum[b] - cardNum[a];
          });
          for (var _i3 = 0; _i3 < 2; _i3++) {
            var hot = cardNum[keyInfo[_i3]];
            var Sprite_fire = this.Node_hotIce.getChildByName("Sprite_fire_" + _i3);
            if (hot > 1) {
              Sprite_fire.getComponent(Sprite).spriteFrame = this.spriteFrameCard[parseInt(keyInfo[_i3])];
              Sprite_fire.active = true;
            } else {
              Sprite_fire.active = false;
            }
          }
          for (var _i4 = 0; _i4 < 2; _i4++) {
            var Sprite_ice = this.Node_hotIce.getChildByName("Sprite_ice_" + _i4);
            Sprite_ice.getComponent(Sprite).spriteFrame = this.spriteFrameCard[parseInt(keyInfo[_i4 + 10])];
            Sprite_ice.active = true;
          }

          //
          this.Label_counts.string = "tang: " + history.length;
        };
        return PokerRoulette_path;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite_new", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item_record", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_recordList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "recordListContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_hotIce", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hotIceContent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "item_hotIce", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_roadColor", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "roadColorContent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "item_roadColor", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_roadValue", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "roadValueContent", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "item_roadValue", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "history_dian", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameCard", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameCard_hc", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameCard_hcBG", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Node_record", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Node_pecentRoad_color", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_pecentRoad_value", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_hotIce", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Label_counts", [_dec24], {
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

System.register("chunks:///_virtual/PokerRoulette_pathItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Sprite, Component;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "310e8fkOElG3pBYh6C65a/g", "PokerRoulette_pathItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var PokerRoulette_pathItem = exports('default', (_dec = ccclass("PokerRoulette_pathItem"), _dec2 = menu("game/PokerRouletteGame/PokerRoulette_pathItem"), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerRoulette_pathItem, _Component);
        function PokerRoulette_pathItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          // @property(Node)
          // content_label: Node = null;
          // @property(Node)
          // Node_label: Node = null;
          _initializerDefineProperty(_this, "Sprite_new", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameCard", _descriptor2, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = PokerRoulette_pathItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          // this.Node_label.active = true;
        };

        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {
          var _this2 = this;
          // //        //将label节点绑定到label root 并跟随原来节点
          // AutoChangeParent.Bind(this.Node_label, this.content_label, true).OnUpdateNotify((dt: number) => {
          //     this.Node_label.getComponent(UIOpacity).opacity = this.node.getComponent(UIOpacity).opacity;
          //     this.Node_label.active = this.node.active;
          //     this.Node_label.scale = this.node.scale;
          // }, this);

          //        //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
              // this.Node_label.active = false;
            }, this);
            this.UpdateUI();
          }
        }
        //    //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var tempData = this.item.data;
          this.node.getComponent(Sprite).spriteFrame = this.spriteFrameCard[tempData];

          // let maxIndex = PokerRouletteModel.instance.history.length > 100 ? 99 : PokerRouletteModel.instance.history.length - 1;
          // if (maxIndex == this.item.itemIndex) {
          //     let Sprite_new = this.node.getChildByName("newTag_record");
          //     if (!Sprite_new) {
          //         Sprite_new = instantiate(this.Sprite_new);
          //         this.node.addChild(Sprite_new);
          //     }
          //     Sprite_new.active = true;
          // } else {
          //     let Sprite_new = this.node.getChildByName("newTag_record");
          //     if (Sprite_new) {
          //         Sprite_new.active = false;
          //     }
          // }
        };

        _createClass(PokerRoulette_pathItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return PokerRoulette_pathItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite_new", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameCard", [_dec4], {
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

System.register("chunks:///_virtual/PokerRoulette_record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './NetManager.ts', './PokerRouletteDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "ff952IbYIZJRI24tvviCXCd", "PokerRoulette_record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var PokerRoulette_record = exports('default', (_dec = ccclass("PokerRoulette_record"), _dec2 = menu("game/PokerRouletteGame/PokerRoulette_record"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerRoulette_record, _Component);
        function PokerRoulette_record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PokerRoulette_record.prototype;
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
            RecordType: "matka"
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
        return PokerRoulette_record;
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

System.register("chunks:///_virtual/PokerRoulette_recordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "ba032terYdG2pjlvx3Bl+b0", "PokerRoulette_recordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var PokerRoulette_recordItem = exports('default', (_dec = ccclass("PokerRoulette_recordItem"), _dec2 = menu("game/PokerRouletteGame/PokerRoulette_recordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerRoulette_recordItem, _Component);
        function PokerRoulette_recordItem() {
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
          _initializerDefineProperty(_this, "Node_result", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameValue", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameColor", _descriptor11, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = PokerRoulette_recordItem.prototype;
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
          Sprite_star.active = result.LuckyPos && result.LuckyPos.length > 0;

          //result.openNums[1]
          var valueIndex = Math.floor(result.OpenNum / 4);
          var colorIndex = result.OpenNum % 4;
          var Sprite_value = this.Node_result.getChildByName("Sprite_value");
          var Sprite_color = this.Node_result.getChildByName("Sprite_color");
          Sprite_value.getComponent(Sprite).spriteFrame = this.spriteFrameValue[valueIndex];
          Sprite_color.getComponent(Sprite).spriteFrame = this.spriteFrameColor[colorIndex];
        };
        _createClass(PokerRoulette_recordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return PokerRoulette_recordItem;
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_result", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameValue", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameColor", [_dec13], {
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

System.register("chunks:///_virtual/PokerRoulette_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerRouletteUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, PokerRouletteUtils;
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
      PokerRouletteUtils = module.PokerRouletteUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ca583krPtpIcro1qzYd7frG", "PokerRoulette_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var PokerRoulette_winTip = exports('default', (_dec = ccclass("PokerRouletteWinTip"), _dec2 = menu("game/PokerRouletteGame/PokerRoulette_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerRoulette_winTip, _Component);
        function PokerRoulette_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PokerRoulette_winTip.prototype;
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
            _this2.Label_win.string = PokerRouletteUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            PokerRouletteUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${PokerRouletteUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            PokerRouletteUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return PokerRoulette_winTip;
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

System.register("chunks:///_virtual/PokerRouletteCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './PokerRouletteModel.ts', './I18n.ts', './ViewManager.ts', './PokerRouletteDef.ts', './PokerRouletteUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, sys, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, PokerRouletteModel, i18n, ViewManager, eProto, PokerRouletteUtils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
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
      PokerRouletteModel = module.PokerRouletteModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      PokerRouletteUtils = module.PokerRouletteUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "16f22OmCPNLnbhCE7u0Uyb6", "PokerRouletteCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PokerRouletteCtrl = exports('PokerRouletteCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(PokerRouletteCtrl, _GameDef$BaseCtrl);
        function PokerRouletteCtrl() {
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
          _this._model = PokerRouletteModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = PokerRouletteCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete PokerRouletteCtrl._instance;
          PokerRouletteCtrl._instance = null;
          PokerRouletteModel.destroy();
          PokerRouletteUtils.destroy();
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
          if (!PokerRouletteModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          NetManager.instance.sendOnlineData(eProto.HD_bet, {
            pos: pos,
            amount: betAmount,
            gameNo: PokerRouletteModel.instance.gameNo
          });
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_leave, {
            action: "HD_QuitTable"
          });
        }

        // /**请求排行榜 */
        // reqRank(curPage = 0) {
        //     NetManager.instance.sendOnlineData(PokerRouletteDef.eProto.HD_Rank, { gameType: "matka" });
        // }

        /**请求历史记录 */;
        _proto.reqHistory = function reqHistory(offset, pageSize) {
          if (offset === void 0) {
            offset = 0;
          }
          if (pageSize === void 0) {
            pageSize = 13;
          }
          NetManager.instance.sendOnlineData(eProto.HD_history, {
            Offset: offset,
            PageSize: pageSize,
            RecordType: "matka"
          });
        }

        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(PokerRouletteDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_enter, {});
        }

        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = /*#__PURE__*/
        function () {
          var _onRecvData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
            var strTip, emitData, gameInfo, HD_Wallet, _HD_Wallet;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
                  if (!(data.Code && data.Code != 0)) {
                    _context.next = 7;
                    break;
                  }
                  ViewManager.instance.closeWait();

                  //提示错误
                  strTip = i18n.errTip(data.Code);
                  if (strTip != "") {
                    Common.showTip(i18n.errTip(data.Code), sys.isMobile);
                  }
                  if (data.cmd == eProto.HD_bet) {
                    this.isReqBet = false;
                  }
                  return _context.abrupt("return");
                case 7:
                  emitData = {};
                  _context.t0 = data.cmd;
                  _context.next = _context.t0 === eProto.HD_enter ? 11 : _context.t0 === eProto.gameStart ? 27 : _context.t0 === eProto.allBet ? 34 : _context.t0 === eProto.HD_bet ? 36 : _context.t0 === eProto.Bet ? 39 : _context.t0 === eProto.open ? 41 : _context.t0 === eProto.prize ? 45 : _context.t0 === ConfigManager.instance.protocolHall.getWallet ? 47 : _context.t0 === ConfigManager.instance.protocolHall.pushWallet ? 55 : _context.t0 === ConfigManager.instance.protocolHall.login ? 64 : 66;
                  break;
                case 11:
                  //roomInfo
                  ViewManager.instance.closeWait();
                  PokerRouletteModel.instance.gameInfo = data.Data;
                  PokerRouletteModel.instance.chipList = data.Data.Chips || [50, 100, 500, 1000, 5000, 10000];
                  PokerRouletteModel.instance.BetSecond = data.Data.BetSecond;
                  PokerRouletteModel.instance.TotalSecond = data.Data.TotalSecond;
                  PokerRouletteModel.instance.history = data.Data.Results.slice();
                  PokerRouletteModel.instance.PosMaxBet = data.Data.PosMaxBet;
                  PokerRouletteModel.instance.PosOdds = data.Data.PosOdds;
                  PokerRouletteModel.instance.result = data.Data.OpenInfo;
                  PokerRouletteModel.instance.gameNo = data.Data.GameNo;
                  PokerRouletteModel.instance.countDown = data.Data.Countdown;
                  PokerRouletteModel.instance.myTotalBet = data.Data.MyTotalBet;
                  PokerRouletteModel.instance.TotalBet = data.Data.TotalBet;
                  PokerRouletteModel.instance.PlayerInfos = data.Data.PlayerInfos;
                  PokerRouletteModel.instance.PlayerCount = data.Data.PlayerCount;
                  return _context.abrupt("break", 66);
                case 27:
                  gameInfo = data.Data;
                  PokerRouletteModel.instance.gameNo = gameInfo.GameNo;
                  PokerRouletteModel.instance.countDown = gameInfo.BetSecond;
                  PokerRouletteModel.instance.TotalBet = gameInfo.TotalBet;
                  PokerRouletteModel.instance.PlayerInfos = gameInfo.PlayerInfos;
                  PokerRouletteModel.instance.PlayerCount = gameInfo.PlayerCount;
                  return _context.abrupt("break", 66);
                case 34:
                  emitData = data.Data;
                  return _context.abrupt("break", 66);
                case 36:
                  this.isReqBet = false;
                  emitData = data.Data;
                  return _context.abrupt("break", 66);
                case 39:
                  emitData = data.Data;
                  return _context.abrupt("break", 66);
                case 41:
                  PokerRouletteModel.instance.result = data.Data;
                  PokerRouletteModel.instance.getDestAngle();
                  PokerRouletteModel.instance.history.unshift(PokerRouletteModel.instance.result.OpenNum);
                  return _context.abrupt("break", 66);
                case 45:
                  PokerRouletteModel.instance.prize = data.Data;
                  return _context.abrupt("break", 66);
                case 47:
                  HD_Wallet = data.Data; //获取钱包
                  DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                  gts.Debug.LogWarr("==PokerRoulette=getWallet==" + HD_Wallet.wallet.VndBalance);
                  if (!(PokerRouletteModel.instance.curBalance > 0)) {
                    _context.next = 53;
                    break;
                  }
                  PokerRouletteModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return _context.abrupt("return");
                case 53:
                  PokerRouletteModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                  return _context.abrupt("break", 66);
                case 55:
                  _HD_Wallet = data.Wallet; //推送钱包
                  DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                  gts.Debug.LogWarr("==PokerRoulette=pushWallet==" + _HD_Wallet.VndBalance);
                  if (!(PokerRouletteModel.instance.curBalance > 0)) {
                    _context.next = 61;
                    break;
                  }
                  PokerRouletteModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return _context.abrupt("return");
                case 61:
                  // DataManager.instance.currency
                  // GUtil.

                  PokerRouletteModel.instance.curBalance = _HD_Wallet.VndBalance;
                  emitData = {};
                  return _context.abrupt("break", 66);
                case 64:
                  // 断线重连
                  Common.closeWait();
                  return _context.abrupt("break", 66);
                case 66:
                  this.emitUpdateView(data.cmd, emitData);
                case 67:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onRecvData(_x) {
            return _onRecvData.apply(this, arguments);
          }
          return onRecvData;
        }();
        return PokerRouletteCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerRouletteDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5a7b8q1HbVD7ou4mcY473yi", "PokerRouletteDef", undefined);
      var cBundle = exports('cBundle', "PokerRouletteGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_enter"] = "matka/HD_enter";
        eProto["HD_leave"] = "matka/HD_leave";
        eProto["HD_history"] = "matka/HD_history";
        eProto["allBet"] = "matka/allBet";
        eProto["HD_bet"] = "matka/HD_bet";
        eProto["Bet"] = "matka/bet";
        eProto["RECORD"] = "matka/HD_Record";
        eProto["HD_QueryBetRecord"] = "lobby/HD_QueryBetRecord";
        eProto["gameStart"] = "matka/gameStart";
        eProto["open"] = "matka/open";
        eProto["prize"] = "matka/prize";
        return eProto;
      }({})); //

      // 0:  "黑桃J",
      //     1:  "红桃J",
      //     2:  "梅花J",
      //     3:  "方块J",
      //     4:  "黑桃Q",
      //     5:  "红桃Q",
      //     6:  "梅花Q",
      //     7:  "方块Q",
      //     8:  "黑桃K",
      //     9:  "红桃K",
      //     10: "梅花K",
      //     11: "方块K",
      var eConstDef = exports('eConstDef', {});
      // export const enum eConstDef {}

      var eStatus = exports('eStatus', {
        none: 0,
        Bet: 1,
        running: 2,
        result: 3
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
        warning: "sound/warning",
        last_3: "sound/last_3",
        shine: "sound/shine",
        star: "sound/star",
        zpRunning: "sound/zpRunning",
        timeUp: "sound/timeUp",
        countDown: "sound/countDown"
      });
      //ConfigManager 相关的event 涉及 ButtonInit 后续修改

      /////////////////////////////////////
      //一些待处理 问题

      // ==recvData data==={"Data":{"UserID":"62496f2dc4ac29426adcb17e","XiaZhuPos":"6","XiaZhuV":482},"GameType":"carRoulette","Action":"HD_XiaZhu","ErrMsg":"操作成功","Code":0,"cmd":"carRoulette/HD_XiaZhu"}
      // builtin-2d-sprite (variant) : Failed to set property [texture], property not found.
      //注： 这个问题由 服务端发送的下注金额 引起，金额不在 CMList整数范围内
      /**聊天信息 */
      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerRouletteGame", ['./PokerRouletteCtrl.ts', './PokerRouletteDef.ts', './PokerRouletteModel.ts', './PokerRouletteScene.ts', './PokerRouletteUtils.ts', './PokerRouletteGameView.ts', './PokerRoulette_btnEffect.ts', './PokerRoulette_help.ts', './PokerRoulette_path.ts', './PokerRoulette_pathItem.ts', './PokerRoulette_record.ts', './PokerRoulette_recordItem.ts', './PokerRoulette_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PokerRouletteGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './PokerRouletteDef.ts', './PokerRouletteModel.ts', './PokerRouletteCtrl.ts', './ViewManager.ts', './PokerRouletteUtils.ts', './Common.ts', './BtnArea.ts', './DataManager.ts', './ChipSmall.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, Sprite, sp, Prefab, SpriteFrame, tween, v3, find, instantiate, UITransform, Tween, sys, ParticleUtils, GameDef, ConfigManager, EventManager, NetManager, eProto, eStatus, eSound, eEvent, PokerRouletteModel, PokerRouletteCtrl, ViewManager, PokerRouletteUtils, Common, BtnArea, DataManager, UserKey, ChipSmall;
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
      sp = module.sp;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
      find = module.find;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Tween = module.Tween;
      sys = module.sys;
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
      eStatus = module.eStatus;
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      PokerRouletteModel = module.PokerRouletteModel;
    }, function (module) {
      PokerRouletteCtrl = module.PokerRouletteCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      PokerRouletteUtils = module.PokerRouletteUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      BtnArea = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      ChipSmall = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34;
      cclegacy._RF.push({}, "929banT67pOuqGXcDC1wZfO", "PokerRouletteGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var PokerRouletteGameView = exports('default', (_dec = ccclass("PokerRouletteGameView"), _dec2 = menu("game/PokerRouletteGame/PokerRouletteGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Sprite), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(sp.Skeleton), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Prefab), _dec22 = property(Node), _dec23 = property(sp.Skeleton), _dec24 = property(sp.Skeleton), _dec25 = property(Prefab), _dec26 = property(Prefab), _dec27 = property(Prefab), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Prefab), _dec33 = property(Label), _dec34 = property(Node), _dec35 = property(Label), _dec36 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(PokerRouletteGameView, _GameDef$BaseView);
        function PokerRouletteGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "areaBtnParent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor3, _assertThisInitialized(_this));
          // @property(Button)
          // Button_x2: Button = null;
          _initializerDefineProperty(_this, "Button_again", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labNickName", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labGold", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprAvatar", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_head", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_timer", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betArea", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_chip", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_startChip_other", _descriptor12, _assertThisInitialized(_this));
          // @property(Label)
          // Label_min: Label = null;
          // @property(Label)
          // Label_max: Label = null;
          _initializerDefineProperty(_this, "Label_count", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cm_light", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_btnGroup", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_chip", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_wheelRoot", _descriptor18, _assertThisInitialized(_this));
          // @property(SpriteFrame)
          // spriteFrameChip: SpriteFrame[] = [];
          _initializerDefineProperty(_this, "chipSmall", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_diceRoot", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameTip", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniTimer", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_path_content", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_statistics", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_star", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_round", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_deskPlayer", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "publicPlayerNum", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameCard", _descriptor34, _assertThisInitialized(_this));
          //    ////////////////////////////////////////////////////
          _this._area2btn = {};
          return _this;
        }
        var _proto = PokerRouletteGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, PokerRouletteCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          NetManager.instance.sendOnlineData(eProto.HD_enter, {});
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

          PokerRouletteModel.instance.clearGameData();
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
          Common.showLog("前台");
          if (NetManager.instance._connect == true) {
            this.scheduleOnce(function () {
              _this3.doClearChip();
              NetManager.instance.sendOnlineData(eProto.HD_enter, {});
            }, 0.1);
          }
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
          var strGold = Common.numFormat(PokerRouletteModel.instance.curBalance);
          if (strGold != this.labGold.string) {
            PokerRouletteUtils.instance.updateLabel(this.labGold, strGold);
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
        };

        _proto.onClickCopy = function onClickCopy() {
          // PlatformMgr.p.copyToClipBoard(this.Label_md5Text.string);
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
          if (PokerRouletteModel.instance.gameStatus == eStatus.Bet && PokerRouletteModel.instance.countDown > 3) {
            gts.Debug.Log("==OnClicked==" + btn.node.name);
            var pos = btn.node.name.replace("Node_area_", "");
            PokerRouletteCtrl.instance.reqBet(parseInt(pos), PokerRouletteModel.instance.curBet);

            // this.doSendChip(0, pos, PokerRouletteModel.instance.curBet);

            var light = btn.node.getChildByName("light");
            if (!light.active) {
              light.active = true;
              var lightAni = light.getComponent(sp.Skeleton);
              lightAni.setAnimation(0, parseInt(pos) + 1 + "-1", false);
              this.scheduleOnce(function () {
                lightAni.setCompleteListener(null);
                light.active = false;
              }, 0.25);
            }
          }
        };
        _proto.doSendStar = function doSendStar(pos, index) {
          if (index === void 0) {
            index = 0;
          }
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
          PokerRouletteUtils.instance.playSound(eSound.star);
          tween(newStar).delay(index * 0.01).to(0.4, {
            position: toPos,
            scale: v3(0.5, 0.5, 0.5)
          }, {
            easing: "cubicOut"
          }).call(function () {
            newStar.getChildByName("lizi").active = false;
          }).start();
        };
        _proto.doSendChip_other = /*#__PURE__*/function () {
          var _doSendChip_other = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(index, pos, betAmount, uid) {
            var _this5 = this;
            var startNode, sendIndex, myUid, i, info, newChip, betArea, chipContent, startPos, counts, toPos;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  //
                  startNode = this.Node_startChip_other;
                  sendIndex = -1;
                  myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
                  i = 0;
                case 4:
                  if (!(i < PokerRouletteModel.instance.PlayerInfos.length)) {
                    _context.next = 12;
                    break;
                  }
                  info = PokerRouletteModel.instance.PlayerInfos[i];
                  if (!(info.Uid == uid && info.Uid != myUid)) {
                    _context.next = 9;
                    break;
                  }
                  sendIndex = i;
                  return _context.abrupt("break", 12);
                case 9:
                  i++;
                  _context.next = 4;
                  break;
                case 12:
                  if (!(sendIndex == -1)) {
                    _context.next = 14;
                    break;
                  }
                  return _context.abrupt("return");
                case 14:
                  if (sendIndex == 0) {
                    this.doSendStar(pos);
                  }
                  newChip = instantiate(this.chipSmall);
                  newChip.getComponent(ChipSmall).setValue(betAmount);
                  newChip.name = "" + betAmount;

                  // //设置筹码纹理
                  // let lv = 0;
                  // if (betAmount >= PokerRouletteModel.instance.chipList[PokerRouletteModel.instance.chipList.length - 1]) {
                  //     lv = PokerRouletteModel.instance.chipList.length - 1;
                  // } else {
                  //     for (let i = 0; i < PokerRouletteModel.instance.chipList.length - 1; i++) {
                  //         if (betAmount >= PokerRouletteModel.instance.chipList[i] && betAmount < PokerRouletteModel.instance.chipList[i + 1]) {
                  //             lv = i;
                  //             break;
                  //         }
                  //     }
                  // }

                  // lv = lv < 6 ? lv : 5;
                  // newChip.getComponent(Sprite).spriteFrame = this.spriteFrameChip[lv];
                  betArea = this.Node_betArea.getChildByName("Node_area_" + pos);
                  chipContent = betArea.getChildByName("Node_totalChip");
                  chipContent.addChild(newChip);
                  chipContent.active = true;
                  startNode = this.Node_deskPlayer.getChildByName("Node_head_" + sendIndex);
                  startPos = startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  startPos = chipContent.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                  newChip.position = startPos;
                  counts = chipContent.children.length > 5 ? 4 : chipContent.children.length - 1;
                  toPos = v3(0, counts * 5, 0);
                  tween(newChip).delay(index * 0.01).to(0.3, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this5.mergeChip(chipContent);
                  }).start();
                case 29:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doSendChip_other(_x, _x2, _x3, _x4) {
            return _doSendChip_other.apply(this, arguments);
          }
          return doSendChip_other;
        }();
        _proto.doSendChip = /*#__PURE__*/function () {
          var _doSendChip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(index, pos, betAmount, isMySelf) {
            var _this6 = this;
            var newChip, myUid, info, betArea, chipContent, Label_bet, startNode, startPos, counts, toPos;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (isMySelf === void 0) {
                    isMySelf = true;
                  }
                  newChip = instantiate(this.chipSmall);
                  newChip.getComponent(ChipSmall).setValue(betAmount);
                  newChip.name = "" + betAmount;
                  myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
                  info = PokerRouletteModel.instance.PlayerInfos[0];
                  if (isMySelf && info.Uid == myUid) {
                    this.doSendStar(pos);
                  }
                  betArea = this.Node_betArea.getChildByName("Node_area_" + pos);
                  chipContent = isMySelf ? betArea.getChildByName("Node_myChip") : betArea.getChildByName("Node_totalChip");
                  chipContent.addChild(newChip);
                  chipContent.active = true;
                  if (isMySelf) {
                    PokerRouletteModel.instance.curTotalBet += betAmount;
                  }

                  //更新下注分数
                  Label_bet = isMySelf ? betArea.getChildByName("Label_myBet") : betArea.getChildByName("Label_totalBet");
                  Label_bet.active = true;

                  //
                  startNode = isMySelf ? this.Node_chip : this.Node_startChip_other;
                  startPos = startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  startPos = chipContent.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                  newChip.position = startPos;
                  counts = chipContent.children.length > 5 ? 4 : chipContent.children.length - 1;
                  toPos = v3(0, counts * 5, 0);
                  tween(newChip).delay(index * 0.01).to(0.3, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this6.mergeChip(chipContent);
                  }).start();
                case 21:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doSendChip(_x5, _x6, _x7, _x8) {
            return _doSendChip.apply(this, arguments);
          }
          return doSendChip;
        }();
        _proto.doClearChip = function doClearChip() {
          this.unschedule(this.doClearChip);
          this.aniTimer.timeScale = 1;
          this.aniTimer.setAnimation(0, "idle", true);
          this.aniTimer.setCompleteListener(null);
          var roul_light_1part = this.Node_wheelRoot.getChildByName("roul_light_1part");
          var roul_light_3part = this.Node_wheelRoot.getChildByName("roul_light_3part");
          var roul_light_2part = this.Node_wheelRoot.getChildByName("roul_light_2part");
          roul_light_2part.active = false;
          roul_light_1part.active = false;
          roul_light_3part.active = false;
          var Sprite_value = this.Node_wheelRoot.getChildByName("Sprite_value");
          Sprite_value.eulerAngles = v3(0, 0, Sprite_value.eulerAngles.z % 360);
          var Sprite_color = this.Node_wheelRoot.getChildByName("Sprite_color");
          Sprite_color.eulerAngles = v3(0, 0, Sprite_color.eulerAngles.z % 360 + 360);
          this.Label_count.node.active = true;
          PokerRouletteModel.instance.result = null;
          PokerRouletteModel.instance.destAngle = null;
          this.scheduleOnce(function () {
            PokerRouletteModel.instance.prize = null;
            PokerRouletteModel.instance.isNoneCheckOut = false;
          }, 2);

          // let headEffect = this.Node_head.getChildByName("headEffect");
          // headEffect.active = false;
          // let Label_winAdd = find("Node_winAdd/Label_winAdd", this.Node_head);
          // Label_winAdd.parent.active = false;
          // for (let i = 0; i < 6; i++) {
          //     let NodePlayer = find(`Node_head_${i}/Node_headInfo`, this.Node_deskPlayer);
          //     let headEffect = NodePlayer.getChildByName("headEffect");
          //     headEffect.active = false;
          //     let Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", NodePlayer);
          //     Label_winAdd.parent.active = false;
          // }

          // 飞星不复用，重置时必须销毁，不能只摘除而留下引擎资源。
          for (var _iterator = _createForOfIteratorHelperLoose(this.Node_effectRoot.children.slice()), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.removeFromParent();
            child.destroy();
          }
          var _loop = function _loop() {
            var betArea = _step2.value;
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
            var star = betArea.getChildByName("star");
            if (star) {
              star.destroy();
            }
            var light = betArea.getChildByName("light");
            light.active = false;
            var coinRoot = betArea.getChildByName("coinRoot");
            tween(coinRoot).delay(3.0).call(function () {
              coinRoot.destroyAllChildren();
            }).start();
          };
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.Node_betArea.children), _step2; !(_step2 = _iterator2()).done;) {
            _loop();
          }
          if (PokerRouletteModel.instance.curTotalBet > 0) {
            PokerRouletteModel.instance.myBetBack = PokerRouletteModel.instance.myTotalBet.slice();
            PokerRouletteModel.instance.myTotalBet = [];
            PokerRouletteModel.instance.curTotalBet = 0;
          }
          var lastBet = 0;
          for (var _iterator3 = _createForOfIteratorHelperLoose(PokerRouletteModel.instance.myBetBack), _step3; !(_step3 = _iterator3()).done;) {
            var bet = _step3.value;
            if (bet) {
              lastBet += bet;
            }
          }
          Common.setButtonEnableWithGray(this.Button_again, lastBet > 0 || PokerRouletteModel.instance.curTotalBet > 0);
        };
        _proto.mergeChip = function mergeChip(node) {
          if (node.children.length > 5) {
            node.children[0].destroy();
            this.scheduleOnce(function () {
              var i = 0;
              for (var _iterator4 = _createForOfIteratorHelperLoose(node.children), _step4; !(_step4 = _iterator4()).done;) {
                var child = _step4.value;
                var posIndex = i < 5 ? i : 4;
                child.position = v3(0, posIndex * 5, 0);
                i++;
              }
            });
          }
        }

        //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this7 = this;
          switch (event.target.name) {
            //返回
            case "Node_menu_mask":
            case "Button_menu":
              {
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "Button_return":
              {
                PokerRouletteCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_record":
              {
                Common.loadPopBuddle("prefab/Node_record", PokerRouletteUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_path", PokerRouletteUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_help", PokerRouletteUtils.instance.bundle, function () {}, function (prefab) {
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
            case "Button_again":
              {
                for (var pos = 0; pos < 19; pos++) {
                  var betAmount = PokerRouletteModel.instance.myBetBack[pos];
                  if (betAmount > 0) {
                    PokerRouletteCtrl.instance.reqBet(pos, betAmount);
                  }
                }
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
                    _this7.cm_light.setCompleteListener(null);
                    _this7.cm_light.node.active = false;
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
                PokerRouletteModel.instance.curBet = PokerRouletteModel.instance.chipList[index];
                var background = this.Button_chip.getChildByName("background");
                background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(PokerRouletteModel.instance.curBet, 3);
                Tween.stopAllByTarget(this.Node_btnGroup);
                this.cm_light.setAnimation(0, "intro_end", false);
                this.cm_light.setCompleteListener(function () {
                  _this7.cm_light.setCompleteListener(null);
                  _this7.cm_light.node.active = false;
                });
                tween(this.Node_btnGroup).to(0.3, {
                  scale: v3(0, 0, 0)
                }, {
                  easing: "cubicIn"
                }).start();
                break;
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
        _proto.onUpdatePlayers = function onUpdatePlayers() {
          this.publicPlayerNum.string = "" + PokerRouletteModel.instance.PlayerCount;
          for (var i = 0; i < this.Node_deskPlayer.children.length; i++) {
            var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", this.Node_deskPlayer);
            var playerInfo = PokerRouletteModel.instance.PlayerInfos[i];
            Node_headInfo.active = playerInfo != null;
            if (Node_headInfo.active) {
              var head = find("mask/head", Node_headInfo);
              var Label_gold = Node_headInfo.getChildByName("Label_gold");
              var Label_nickName = Node_headInfo.getChildByName("Label_nickName");
              Common.getHead(playerInfo.Avatar, head);
              Common.nickNameFormatL(Label_nickName, playerInfo.Nickname);
              Label_gold.getComponent(Label).string = Common.numFormat(playerInfo.Prize);
            }
          }
        };
        _proto.updateChipList = function updateChipList() {
          PokerRouletteModel.instance.chipList = PokerRouletteModel.instance.chipList.slice(0, 6);
          for (var i = 0; i < PokerRouletteModel.instance.chipList.length; i++) {
            var Button_chip = this.Node_btnGroup.getChildByName("Button_chip_" + i);
            if (!Button_chip) {
              break;
            }
            var betAmount = PokerRouletteModel.instance.chipList[i];
            Button_chip.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(betAmount, 3);
          }
          PokerRouletteModel.instance.curBet = PokerRouletteModel.instance.chipList[0];
          var background = this.Button_chip.getChildByName("background");
          background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(PokerRouletteModel.instance.curBet, 3);
        };
        _proto.doShowPrizeIntro = function doShowPrizeIntro() {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            var LuckyPos = PokerRouletteModel.instance.result.LuckyPos;
            if (!LuckyPos) {
              resolve(null);
              return;
            }
            for (var _iterator5 = _createForOfIteratorHelperLoose(LuckyPos), _step5; !(_step5 = _iterator5()).done;) {
              var index = _step5.value;
              var newStar = instantiate(_this9.star);
              newStar.name = "star";
              newStar.position = v3(0, 0, 0);
              var betArea = _this9.Node_betArea.getChildByName("Node_area_" + index);
              betArea.addChild(newStar);
              var starAni = newStar.getComponent(sp.Skeleton);
              starAni.setAnimation(0, "intro", false);
              starAni.addAnimation(0, "idle", true);
            }
            _this9.scheduleOnce(function () {
              resolve(null);
            }, LuckyPos.length > 0 ? 0.5 : 0);
          });
        };
        _proto.doShowPrizeEnd = function doShowPrizeEnd() {
          var _this10 = this;
          return new Promise(function (resolve, reject) {
            if (!PokerRouletteModel.instance.result || !PokerRouletteModel.instance.result.LuckyPos || !PokerRouletteModel.instance.result.WinPos) {
              resolve(null);
              return;
            }
            var LuckyPos = PokerRouletteModel.instance.result.LuckyPos;
            var WinPos = PokerRouletteModel.instance.result.WinPos;
            var hasWin = false;
            var _loop2 = function _loop2() {
              var starIndex = _step6.value;
              var isWin = false;
              var betArea = _this10.Node_betArea.getChildByName("Node_area_" + starIndex);
              var newStar = betArea.getChildByName("star");
              for (var _iterator7 = _createForOfIteratorHelperLoose(WinPos), _step7; !(_step7 = _iterator7()).done;) {
                var winIndex = _step7.value;
                if (winIndex == starIndex) {
                  isWin = true;
                  break;
                }
              }
              if (!isWin && newStar) {
                var starAni = newStar.getComponent(sp.Skeleton);
                starAni.setAnimation(0, "end", false);
                tween(newStar).delay(1).removeSelf().start();
                return 1; // continue
              }

              hasWin = true;
              tween(newStar).delay(2).call(function () {
                var starAni = newStar.getComponent(sp.Skeleton);
                starAni.setAnimation(0, "end", false);
              }).delay(1).removeSelf().start();
            };
            for (var _iterator6 = _createForOfIteratorHelperLoose(LuckyPos), _step6; !(_step6 = _iterator6()).done;) {
              if (_loop2()) continue;
            }
            _this10.scheduleOnce(function () {
              resolve(null);
            }, hasWin ? 1 : 0.5);
          });
        };
        _proto.showWinResult = function showWinResult(isEnter) {
          var _this11 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          return new Promise(function (resolve, reject) {
            if (isEnter) {
              var roul_light_2part = _this11.Node_wheelRoot.getChildByName("roul_light_2part");
              roul_light_2part.active = true;
              var lightAni = roul_light_2part.getComponent(sp.Skeleton);
              lightAni.setAnimation(0, "win", false);
              lightAni.addAnimation(0, "idle", true);
              return resolve(null);
            } else {
              var Sprite_value = _this11.Node_wheelRoot.getChildByName("Sprite_value");
              var Sprite_color = _this11.Node_wheelRoot.getChildByName("Sprite_color");
              var vDestAngle = Math.round(Sprite_value.eulerAngles.z / 30) * 30;
              tween(Sprite_value).delay(0.25).to(0.5, {
                eulerAngles: v3(0, 0, vDestAngle)
              }).start();
              PokerRouletteUtils.instance.stopSound(eSound.zpRunning);
              var cDestAngle = Math.round(Sprite_color.eulerAngles.z / 30) * 30;
              tween(Sprite_color).delay(0.5).to(0.5, {
                eulerAngles: v3(0, 0, cDestAngle)
              }).call(function () {
                var roul_light_1part = _this11.Node_wheelRoot.getChildByName("roul_light_1part");
                var roul_light_3part = _this11.Node_wheelRoot.getChildByName("roul_light_3part");
                roul_light_1part.active = false;
                roul_light_3part.active = false;
                var roul_light_2part = _this11.Node_wheelRoot.getChildByName("roul_light_2part");
                roul_light_2part.active = true;
                var lightAni = roul_light_2part.getComponent(sp.Skeleton);
                lightAni.setAnimation(0, "win", false);
                lightAni.addAnimation(0, "idle", true);
                PokerRouletteUtils.instance.playOneShot(eSound.shine);
                return resolve(null);
              }).start();
            }
          });
        };
        _proto.doShowWinEffect = function doShowWinEffect() {
          var _this12 = this;
          return new Promise(function (resolve, reject) {
            if (!PokerRouletteModel.instance.result) {
              resolve(null);
              return;
            }
            for (var _iterator8 = _createForOfIteratorHelperLoose(_this12.Node_betArea.children), _step8; !(_step8 = _iterator8()).done;) {
              var _betArea3 = _step8.value;
              var Node_myChip = _betArea3.getChildByName("Node_myChip");
              var Node_totalChip = _betArea3.getChildByName("Node_totalChip");
              Node_myChip.destroyAllChildren();
              Node_totalChip.destroyAllChildren();
              Node_myChip.active = false;
              Node_totalChip.active = false;

              //更新下注分数
              var Label_bet = _betArea3.getChildByName("Label_myBet");
              Label_bet.getComponent(Label).string = "";
              Label_bet.active = false;
              Label_bet = _betArea3.getChildByName("Label_totalBet");
              Label_bet.getComponent(Label).string = "";
              Label_bet.active = false;
              var star = _betArea3.getChildByName("star");
              if (star) {
                star.destroy();
              }
            }
            var isWin = false;
            var WinPos = PokerRouletteModel.instance.result.WinPos;
            if (WinPos) {
              for (var _iterator9 = _createForOfIteratorHelperLoose(WinPos), _step9; !(_step9 = _iterator9()).done;) {
                var pos = _step9.value;
                var betArea = _this12.Node_betArea.getChildByName("Node_area_" + pos);
                var light = betArea.getChildByName("light");
                light.active = true;
                var lightAni = light.getComponent(sp.Skeleton);
                lightAni.setAnimation(0, pos + 1 + "-1", true);
                if (PokerRouletteModel.instance.myTotalBet && PokerRouletteModel.instance.myTotalBet["" + pos] > 0) {
                  isWin = true;
                  var gold = instantiate(_this12.gold);
                  gold.name = "gold";
                  betArea.addChild(gold);
                  gold.getComponent(sp.Skeleton).setAnimation(0, "win", true);
                  tween(gold).delay(1.4).removeSelf().start();
                }
              }
            }
            for (var i = 0; i < 19; i++) {
              var _betArea = _this12.Node_betArea.getChildByName("Node_area_" + i);
              var _light = _betArea.getChildByName("light");
              if (!_light.active) {
                _light.active = true;
                var _lightAni = _light.getComponent(sp.Skeleton);
                _lightAni.setAnimation(0, i + 1 + "-2", true);
              }
            }
            _this12.scheduleOnce(function () {
              for (var _i = 0; _i < 19; _i++) {
                var _betArea2 = _this12.Node_betArea.getChildByName("Node_area_" + _i);
                var _light2 = _betArea2.getChildByName("light");
                _light2.active = false;
              }
            }, 4);
            _this12.scheduleOnce(function () {
              resolve(null);
            }, isWin ? 1.4 : 0);
          });
        };
        _proto.doShowCoinEffect = function doShowCoinEffect(isEnter) {
          var _this13 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          return new Promise(function (resolve, reject) {
            if (!PokerRouletteModel.instance.result || !PokerRouletteModel.instance.result.WinPos) {
              resolve(null);
            }
            var result = PokerRouletteModel.instance.result.WinPos;
            PokerRouletteUtils.instance.playOneShot(eSound.coin);
            for (var _iterator10 = _createForOfIteratorHelperLoose(result), _step10; !(_step10 = _iterator10()).done;) {
              var index = _step10.value;
              var betArea = _this13.Node_betArea.getChildByName("Node_area_" + index);
              var coinRoot = betArea.getChildByName("coinRoot");
              var coinCounts = Math.floor(Math.random() * 10 + 20);
              for (var i = 0; i < coinCounts; i++) {
                var coin = instantiate(_this13.coin);
                coin.name = "coin";
                coinRoot.addChild(coin);
                coin.position = v3(Math.random() * 120 - 60, Math.random() * 120 - 60, 0);
                ParticleUtils.play(coin);
              }
              if (isEnter) {
                var winCounts = 0;
                if (PokerRouletteModel.instance.myTotalBet && PokerRouletteModel.instance.myTotalBet["" + index] > 0) {
                  winCounts = Math.floor(coinCounts / 3);
                  for (var _i2 = 0; _i2 < winCounts; _i2++) {
                    var _coin = coinRoot.children[_i2];
                    var toPos = _this13.sprAvatar.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                    toPos = coinRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
                    tween(_coin).delay(1 + _i2 * 0.02).to(0.5, {
                      position: toPos
                    }, {
                      easing: "cubicOut"
                    }).call(function () {}).removeSelf().start();
                  }
                }
                for (var _i3 = winCounts; _i3 < coinCounts; _i3++) {
                  var _coin2 = coinRoot.children[_i3];
                  var _toPos = _this13.Node_startChip_other.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  _toPos = coinRoot.getComponent(UITransform).convertToNodeSpaceAR(_toPos);
                  tween(_coin2).delay(1 + _i3 * 0.02).to(0.5, {
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
          var _this14 = this;
          if (!PokerRouletteModel.instance.result || !PokerRouletteModel.instance.prize || !PokerRouletteModel.instance.result.WinPos) {
            return;
          }
          var seatPlay = PokerRouletteModel.instance.PlayerInfos;
          var seatPrize = PokerRouletteModel.instance.prize.seatPrize;
          var myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
          var WinPos = PokerRouletteModel.instance.result.WinPos;
          for (var i = 0; i < WinPos.length; i++) {
            var winIndex = WinPos[i];
            var betArea = this.Node_betArea.getChildByName("Node_area_" + winIndex);
            var coinRoot = betArea.getChildByName("coinRoot");
            var coinCounts = coinRoot.children.length;
            var coinIndex = 0;
            while (coinIndex < coinRoot.children.length) {
              if (coinIndex < coinRoot.children.length && PokerRouletteModel.instance.prize.myPrize > 0) {
                //mySelf
                var coin = coinRoot.children[coinIndex];
                var toPos = this.sprAvatar.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                toPos = coinRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
                tween(coin).delay(1 + i * 0.02).to(0.5, {
                  position: toPos
                }, {
                  easing: "cubicOut"
                }).call(function () {}).removeSelf().start();
                this.scheduleOnce(function () {
                  if (PokerRouletteModel.instance.endBalance > 0) {
                    PokerRouletteModel.instance.curBalance = PokerRouletteModel.instance.endBalance;
                    PokerRouletteModel.instance.endBalance = 0;
                    _this14.updateGold();
                  }
                  if (PokerRouletteModel.instance.prize.myPrize > 0) {
                    PokerRouletteUtils.instance.playSound(eSound.coin);
                    var headEffect = _this14.Node_head.getChildByName("headEffect");
                    headEffect.active = true;
                    var Label_winAdd = find("Node_winAdd/Label_winAdd", _this14.Node_head);
                    Label_winAdd.parent.active = true;
                    Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyShow(PokerRouletteModel.instance.prize.myPrize, 3);
                    tween(headEffect).delay(2).call(function () {
                      headEffect.active = false;
                      Label_winAdd.parent.active = false;
                    }).start();
                  }
                }, 1.0);
                coinIndex++;
              }
              if (coinIndex < coinRoot.children.length) {
                //other
                var _coin3 = coinRoot.children[coinIndex];
                var _toPos2 = this.Node_startChip_other.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                _toPos2 = coinRoot.getComponent(UITransform).convertToNodeSpaceAR(_toPos2);
                tween(_coin3).delay(1 + i * 0.02).to(0.5, {
                  position: _toPos2
                }, {
                  easing: "cubicOut"
                }).call(function () {}).removeSelf().start();
                coinIndex++;
              }
              if (coinIndex < coinRoot.children.length) {
                //deskPlayer
                for (var _i4 = 0; _i4 < 6; _i4++) {
                  var info = seatPrize[_i4];
                  if (info.Prize > 0 && info.Uid != myUid && coinIndex < coinRoot.children.length) {
                    var NodePlayer = find("Node_head_" + _i4 + "/Node_headInfo", this.Node_deskPlayer);
                    var _coin4 = coinRoot.children[coinIndex];
                    var _toPos3 = NodePlayer.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                    _toPos3 = coinRoot.getComponent(UITransform).convertToNodeSpaceAR(_toPos3);
                    tween(_coin4).delay(1 + _i4 * 0.02).to(0.5, {
                      position: _toPos3
                    }, {
                      easing: "cubicOut"
                    }).removeSelf().start();
                    coinIndex++;
                  }
                }
              }
            }
          }

          //deskPlayer
          var _loop3 = function _loop3() {
            var info = seatPrize[_i5];
            if (info.Prize > 0 && info.Uid != myUid) {
              var _NodePlayer = find("Node_head_" + _i5 + "/Node_headInfo", _this14.Node_deskPlayer);
              tween(_NodePlayer).delay(1.25).call(function () {
                PokerRouletteUtils.instance.playOneShot(eSound.coin);
                var headEffect = _NodePlayer.getChildByName("headEffect");
                headEffect.active = true;
                var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", _NodePlayer);
                Label_winAdd.parent.active = true;
                Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyShow(info.Prize, 3);
                tween(headEffect).delay(2).call(function () {
                  headEffect.active = false;
                  Label_winAdd.parent.active = false;
                }).start();
              }).start();
            }
          };
          for (var _i5 = 0; _i5 < 6; _i5++) {
            _loop3();
          }
          this.scheduleOnce(function () {
            PokerRouletteUtils.instance.playOneShot(eSound.coin);
          }, 1.5);
        };
        _proto.updateRecord = function updateRecord() {
          var Node_rate_value = this.Node_statistics.getChildByName("Node_rate_value");
          var Node_fireIce = this.Node_statistics.getChildByName("Node_fireIce");
          var Node_rate_color = this.Node_statistics.getChildByName("Node_rate_color");
          var recordList = PokerRouletteModel.instance.history.slice(0, 100);
          var color = [0, 0, 0, 0];
          var value = [0, 0, 0];
          var cardNum = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0
          };
          for (var _iterator11 = _createForOfIteratorHelperLoose(recordList), _step11; !(_step11 = _iterator11()).done;) {
            var _record = _step11.value;
            color[_record % 4]++;
            value[Math.floor(_record / 4)]++;
            cardNum["" + _record]++;
          }

          //pathInfo
          var item_14 = this.Node_path_content.getChildByName("item_14");
          this.Label_round.string = recordList.length + " round";
          var listLen = recordList.length > 15 ? 15 : recordList.length;
          for (var i = 14; i >= 0; i--) {
            var record = recordList[i];
            var item = this.Node_path_content.getChildByName("item_" + i);
            if (!item) {
              item = instantiate(item_14);
              item.name = "item_" + i;
              this.Node_path_content.addChild(item);
            }
            item.active = i < listLen;
            if (item.active) {
              var Sprite_new = item.getChildByName("Sprite_new");
              Sprite_new.active = i == 0;
              item.getComponent(Sprite).spriteFrame = this.spriteFrameCard[record];
            }
          }

          //hotInfo
          var keyInfo = Object.keys(cardNum).slice();
          keyInfo.sort(function (a, b) {
            return cardNum[b] - cardNum[a];
          });
          for (var _i6 = 0; _i6 < 2; _i6++) {
            var hot = cardNum[keyInfo[_i6]];
            var Sprite_fire = Node_fireIce.getChildByName("Sprite_fire_" + _i6);
            if (hot > 1) {
              Sprite_fire.getComponent(Sprite).spriteFrame = this.spriteFrameCard[parseInt(keyInfo[_i6])];
              Sprite_fire.active = true;
            } else {
              Sprite_fire.active = false;
            }
          }
          for (var _i7 = 0; _i7 < 2; _i7++) {
            var Sprite_ice = Node_fireIce.getChildByName("Sprite_ice_" + _i7);
            Sprite_ice.getComponent(Sprite).spriteFrame = this.spriteFrameCard[parseInt(keyInfo[_i7 + 10])];
            Sprite_ice.active = true;
          }

          //colorInfo
          for (var _i8 = 0; _i8 < 4; _i8++) {
            var cCount = color[_i8];
            var percent = Math.floor(cCount / recordList.length * 10000) / 100;
            var Label_rate = Node_rate_color.getChildByName("Label_rate_" + _i8);
            Label_rate.getComponent(Label).string = percent + "%";
          }
          //valueInfo
          for (var _i9 = 0; _i9 < 3; _i9++) {
            var vCount = value[_i9];
            var _percent = Math.floor(vCount / recordList.length * 10000) / 100;
            var _Label_rate = Node_rate_value.getChildByName("Label_rate_" + _i9);
            _Label_rate.getComponent(Label).string = _percent + "%";
          }
        };
        _proto.updateTimer = function updateTimer() {
          var _this15 = this;
          return new Promise(function (resolve, reject) {
            var countDown = PokerRouletteModel.instance.countDown;
            Tween.stopAllByTarget(_this15.Node_timer);
            _this15.Label_count.string = "" + countDown;
            tween(_this15.Node_timer).delay(1).call(function () {
              PokerRouletteModel.instance.countDown--;
              _this15.Label_count.string = "" + PokerRouletteModel.instance.countDown;
              switch (PokerRouletteModel.instance.gameStatus) {
                case eStatus.Bet:
                  {
                    PokerRouletteModel.instance.countDown <= 3 ? PokerRouletteUtils.instance.playOneShot(eSound.countDown) : PokerRouletteUtils.instance.playOneShot(eSound.timeUp);
                    if (PokerRouletteModel.instance.countDown == 3) {
                      Common.setButtonEnableWithGray(_this15.Button_again, false);
                      _this15.Label_count.node.active = false;
                      if (_this15.aniTimer.animation != "321") {
                        _this15.aniTimer.setAnimation(0, "321", false);
                        _this15.aniTimer.setCompleteListener(function () {
                          _this15.aniTimer.setAnimation(0, "idle", true);
                          _this15.aniTimer.setCompleteListener(null);
                          _this15.Label_count.node.active = true;
                        });
                      }
                      _this15.gameTip.node.active = true;
                      _this15.gameTip.setAnimation(0, "locked", false);
                      _this15.gameTip.setCompleteListener(function () {
                        _this15.gameTip.setCompleteListener(null);
                        _this15.gameTip.node.active = false;
                      });
                      _this15.scheduleOnce(function () {
                        PokerRouletteUtils.instance.playOneShot(eSound.warning);
                      }, 3.25);

                      // Common.setButtonEnableWithGray(this.BtnLast, false);
                      // Common.setButtonEnableWithGray(this.BtnJiabei, false);
                    }

                    break;
                  }
                case eStatus.running:
                  {
                    if (PokerRouletteModel.instance.countDown < 5) {
                      PokerRouletteModel.instance.gameStatus = eStatus.result;
                    }
                    break;
                  }
              }
            }).union().repeat(countDown).call(resolve).start();
          });
        };
        _proto.doStartRunning = function doStartRunning() {
          var _this16 = this;
          return new Promise(function (resolve, reject) {
            var roul_light_1part = _this16.Node_wheelRoot.getChildByName("roul_light_1part");
            var roul_light_3part = _this16.Node_wheelRoot.getChildByName("roul_light_3part");
            roul_light_1part.active = true;
            roul_light_3part.active = true;
            var Sprite_value = _this16.Node_wheelRoot.getChildByName("Sprite_value");
            var Sprite_color = _this16.Node_wheelRoot.getChildByName("Sprite_color");
            var rounds = Math.round(Math.random() * 2) + 3;
            var toEulerAngles_value = PokerRouletteModel.instance.destAngle[0] + rounds * 360;
            var toEulerAngles_color = PokerRouletteModel.instance.destAngle[1] - rounds * 360;
            PokerRouletteUtils.instance.playSound(eSound.zpRunning);
            tween(Sprite_value).to(3, {
              angle: toEulerAngles_value
            }, {
              easing: "sineInOut"
            }).start();
            tween(Sprite_color).to(4, {
              angle: toEulerAngles_color
            }, {
              easing: "sineInOut"
            }).call(function () {
              return resolve(true);
            }).start();
          });

          // return Promise.all([this.doRunningValue(), this.doRunningColor()]);
        };

        _proto.doRunning = /*#__PURE__*/function () {
          var _doRunning = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.doShowPrizeIntro();
                case 2:
                  _context3.next = 4;
                  return this.doStartRunning();
                case 4:
                  _context3.next = 6;
                  return this.showWinResult();
                case 6:
                  _context3.next = 8;
                  return this.doShowPrizeEnd();
                case 8:
                  _context3.next = 10;
                  return this.doShowWinEffect();
                case 10:
                  _context3.next = 12;
                  return this.doShowCoinEffect();
                case 12:
                  this.doCollectCoin();
                  this.updateRecord();
                  EventManager.instance.emit(eEvent.onUpdatePath);
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function doRunning() {
            return _doRunning.apply(this, arguments);
          }
          return doRunning;
        }();
        _proto.updateBet_other = function updateBet_other(data) {
          if (data === void 0) {
            data = null;
          }
          var isBet = false;
          for (var i = 0; i < 19; i++) {
            var lastBetAmount = PokerRouletteModel.instance.TotalBet[i];
            var BetAmount = data ? data[i] - lastBetAmount : lastBetAmount;
            var totalAmount = data ? data[i] : BetAmount;
            if (BetAmount > 0) {
              isBet = true;
              var Node_betArea = this.Node_betArea.getChildByName("Node_area_" + i);
              var Label_totalBet = Node_betArea.getChildByName("Label_totalBet");
              Label_totalBet.active = true;
              Label_totalBet.getComponent(Label).string = Common.ChangeMoneyShow(totalAmount, 3);
              this.doSendChip(i, i, BetAmount, false);
            }
          }
          if (isBet) {
            PokerRouletteUtils.instance.playOneShot(eSound.bet);
          }
        };
        _proto.updateBet_self = function updateBet_self(isDoSendChip) {
          if (isDoSendChip === void 0) {
            isDoSendChip = false;
          }
          gts.Debug.Log("=====updateBet_self====" + JSON.stringify(PokerRouletteModel.instance.myTotalBet));
          //更新下注
          for (var i = 0; i < 19; i++) {
            var BetAmount = PokerRouletteModel.instance.myTotalBet[i];
            if (BetAmount > 0) {
              var Node_betArea = this.Node_betArea.getChildByName("Node_area_" + i);
              var Label_myBet = Node_betArea.getChildByName("Label_myBet");
              Label_myBet.active = true;
              Label_myBet.getComponent(Label).string = Common.ChangeMoneyShow(BetAmount, 3);
              if (isDoSendChip) {
                this.doSendChip(i, i, BetAmount);
              }
            }
          }
        }

        //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this17 = this;
          switch (event) {
            case eProto.HD_enter:
              {
                this.updateChipList();
                Common.setButtonEnableWithGray(this.Button_again, false);
                var Sprite_value = this.Node_wheelRoot.getChildByName("Sprite_value");
                var Sprite_color = this.Node_wheelRoot.getChildByName("Sprite_color");
                Tween.stopAllByTarget(Sprite_value);
                Tween.stopAllByTarget(Sprite_color);
                var arrAngle = PokerRouletteModel.instance.doGetAngle(PokerRouletteModel.instance.history[0]);
                Sprite_value.eulerAngles = v3(0, 0, arrAngle[0]);
                Sprite_color.eulerAngles = v3(0, 0, arrAngle[1]);
                this.Label_gameNo.string = "No. " + PokerRouletteModel.instance.gameNo;
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  var betTime;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _this17.aniTimer.setAnimation(0, "idle", true);

                        //10=25-15
                        betTime = PokerRouletteModel.instance.TotalSecond - PokerRouletteModel.instance.BetSecond;
                        if (!(PokerRouletteModel.instance.countDown <= betTime)) {
                          _context4.next = 16;
                          break;
                        }
                        PokerRouletteModel.instance.gameStatus = eStatus.result;

                        //下注提示
                        _this17.gameTip.node.active = true;
                        _this17.gameTip.setAnimation(0, "extra", false);
                        _this17.gameTip.setCompleteListener(function () {
                          _this17.gameTip.setCompleteListener(null);
                          _this17.gameTip.node.active = false;
                        });
                        _this17.updateTimer();
                        _context4.next = 10;
                        return _this17.showWinResult(true);
                      case 10:
                        _context4.next = 12;
                        return _this17.doShowWinEffect();
                      case 12:
                        _context4.next = 14;
                        return _this17.doShowCoinEffect(true);
                      case 14:
                        _context4.next = 28;
                        break;
                      case 16:
                        PokerRouletteModel.instance.countDown = PokerRouletteModel.instance.gameInfo.Countdown - betTime;
                        PokerRouletteModel.instance.gameStatus = eStatus.Bet;

                        //下注提示
                        _this17.gameTip.node.active = true;
                        if (PokerRouletteModel.instance.countDown <= 3) {
                          _this17.Label_count.node.active = false;
                          _this17.gameTip.node.active = true;
                          _this17.gameTip.setAnimation(0, "locked", false);
                          _this17.gameTip.setCompleteListener(function () {
                            _this17.gameTip.setCompleteListener(null);
                            _this17.gameTip.node.active = false;
                          });
                          _this17.aniTimer.timeScale = 3 / PokerRouletteModel.instance.countDown;
                          _this17.aniTimer.setAnimation(0, "321", false);
                          _this17.aniTimer.setCompleteListener(function () {
                            _this17.aniTimer.setCompleteListener(null);
                            _this17.aniTimer.setAnimation(0, "idle", true);
                            _this17.Label_count.node.active = true;
                          });
                          _this17.scheduleOnce(function () {
                            PokerRouletteUtils.instance.playOneShot(eSound.warning);
                          }, 3);
                        } else {
                          _this17.gameTip.setAnimation(0, "bet", false);
                          _this17.gameTip.setCompleteListener(function () {
                            _this17.gameTip.setCompleteListener(null);
                            _this17.gameTip.node.active = false;
                          });
                        }

                        // PokerRouletteUtils.instance.playOneShot(PokerRouletteDef.eSound.warning);
                        // this.tishi.node.active = true;
                        // this.tishi.setAnimation(0, "start", false);
                        // this.tishi.setCompleteListener(() => {
                        //     this.tishi.setCompleteListener(null);
                        //     this.tishi.node.active = false;
                        // });
                        _context4.next = 22;
                        return _this17.updateTimer();
                      case 22:
                        _this17.gameTip.node.active = true;
                        _this17.gameTip.setAnimation(0, "extra", false);
                        _this17.gameTip.setCompleteListener(function () {
                          _this17.gameTip.setCompleteListener(null);
                          _this17.gameTip.node.active = false;
                        });
                        PokerRouletteModel.instance.gameStatus = eStatus.running;
                        PokerRouletteModel.instance.countDown = betTime;
                        _this17.updateTimer();

                      // this.doRunning();
                      case 28:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }))();
                this.onUpdatePlayers();
                this.updateRecord();
                this.updateBet_other();
                this.updateBet_self(true);

                // // PokerRouletteModel.instance.lightPos = 0;
                // this.Label_num.string = `${PokerRouletteModel.instance.gameNo}`;
                break;
              }
            case eProto.gameStart:
              {
                this.doClearChip();
                this.Label_gameNo.string = "No. " + PokerRouletteModel.instance.gameNo;
                this.onUpdatePlayers();
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  var endTime;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        PokerRouletteModel.instance.gameStatus = eStatus.Bet;
                        PokerRouletteUtils.instance.playOneShot(eSound.warning);

                        //下注提示
                        _this17.gameTip.node.active = true;
                        _this17.gameTip.setAnimation(0, "bet", false);
                        _this17.gameTip.setCompleteListener(function () {
                          _this17.gameTip.setCompleteListener(null);
                          _this17.gameTip.node.active = false;
                        });

                        //10=25-15
                        _context5.next = 7;
                        return _this17.updateTimer();
                      case 7:
                        _this17.gameTip.node.active = true;
                        _this17.gameTip.setAnimation(0, "extra", false);
                        _this17.gameTip.setCompleteListener(function () {
                          _this17.gameTip.setCompleteListener(null);
                          _this17.gameTip.node.active = false;
                        });
                        Common.setButtonEnableWithGray(_this17.Button_again, false);
                        endTime = PokerRouletteModel.instance.TotalSecond - PokerRouletteModel.instance.BetSecond;
                        PokerRouletteModel.instance.gameStatus = eStatus.running;
                        PokerRouletteModel.instance.countDown = endTime;
                        _this17.updateTimer();
                      // this.doRunning();
                      case 15:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }))();
                break;
              }
            case eProto.allBet:
              {
                this.updateBet_other(data);
                PokerRouletteModel.instance.TotalBet = data;
                break;
              }
            case eProto.open:
              {
                this.doRunning();
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
            case eProto.HD_bet:
              {
                PokerRouletteModel.instance.myTotalBet[data.Pos] = PokerRouletteModel.instance.myTotalBet[data.Pos] || 0;
                PokerRouletteModel.instance.myTotalBet[data.Pos] += data.Amount;
                this.doSendChip(0, data.Pos, data.Amount);
                PokerRouletteModel.instance.curBalance -= data.Amount;
                this.updateGold();
                var Node_betArea = this.Node_betArea.getChildByName("Node_area_" + data.Pos);
                var Label_myBet = Node_betArea.getChildByName("Label_myBet");
                Label_myBet.active = true;
                Label_myBet.getComponent(Label).string = Common.ChangeMoneyShow(PokerRouletteModel.instance.myTotalBet[data.Pos], 3);
                this.scheduleOnce(function () {
                  PokerRouletteUtils.instance.playSound(eSound.bet);
                }, 0.3);
                break;
              }
            case eProto.Bet:
              {
                this.doSendChip_other(0, data.Pos, data.Amount, data.Uid);
                break;
              }
          }
        };
        return PokerRouletteGameView;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Button_again", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labNickName", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labGold", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sprAvatar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_head", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_timer", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_betArea", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_chip", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_startChip_other", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_count", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "cm_light", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_btnGroup", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Button_chip", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Node_wheelRoot", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "chipSmall", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_diceRoot", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "gameTip", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "aniTimer", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "star", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Node_path_content", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Node_statistics", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Node_star", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Label_round", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Node_deskPlayer", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "publicPlayerNum", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameCard", [_dec36], {
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

System.register("chunks:///_virtual/PokerRouletteModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './PokerRouletteDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameDef, eStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eStatus = module.eStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "00eadLUWldBBIuxiIUHkWlZ", "PokerRouletteModel", undefined);
      var PokerRouletteModel = exports('PokerRouletteModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(PokerRouletteModel, _GameDef$BaseSington);
        function PokerRouletteModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.nPummping = 0;
          _this.curBet = 0;
          _this.chipList = [];
          _this.gameNo = null;
          _this.BetSecond = 0;
          _this.TotalSecond = 0;
          _this.countDown = 0;
          _this.history = null;
          _this.PosOdds = null;
          _this.PosMaxBet = null;
          _this.curTotalBet = 0;
          _this.curTotalWin = 0;
          _this.myBetBack = [];
          _this.myTotalBet = [];
          _this.TotalBet = [];
          _this.PlayerInfos = null;
          _this.gameInfo = null;
          _this.result = null;
          _this.destAngle = null;
          _this.prize = null;
          _this.PlayerCount = 0;
          _this.record = null;
          _this.isNoneCheckOut = false;
          _this.gameStatus = eStatus.none;
          return _this;
        }
        var _proto = PokerRouletteModel.prototype;
        ////////////////////////////////////////////////////////////
        /**
         * 退出房间  清理游戏数据
         */
        _proto.clearGameData = function clearGameData() {};
        _proto.doGetAngle = function doGetAngle(OpenNum) {
          //test
          // OpenNum = 4;

          var vRsult = Math.floor(OpenNum / 4);
          var cRsult = OpenNum % 4;
          var randIndex = Math.floor(Math.random() * 3);
          var vAngle = vRsult * 30 + randIndex * 90;
          randIndex = Math.floor(Math.random() * 2);
          var cAngle = cRsult * 30 + randIndex * 120;

          // gts.Debug.Log(`=doGetAngle=vRsult=${vRsult}==cRsult=${cRsult}====vAngle=${vAngle}==cAngle=${cAngle}`);
          return [vAngle, cAngle];
        };
        _proto.getDestAngle = function getDestAngle() {
          if (!this.result) {
            return;
          }
          var arrAngle = this.doGetAngle(this.result.OpenNum);
          //-8~352
          this.destAngle = [arrAngle[0] + 8 - Math.floor(Math.random() * 16), arrAngle[1] + 8 - Math.floor(Math.random() * 16)];

          // gts.Debug.Log(`=doGetAngle=this.destAngle=${JSON.stringify(this.destAngle)}`);
        };

        return PokerRouletteModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerRouletteScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './PokerRouletteDef.ts', './PokerRouletteUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, sys, isValid, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, PokerRouletteUtils, Common;
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
      isValid = module.isValid;
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
      PokerRouletteUtils = module.PokerRouletteUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "95f33yTKbZOVZ4poDJdKgUW", "PokerRouletteScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PokerRouletteScene = exports('default', (_dec = ccclass("PokerRouletteScene"), _dec2 = menu("game/PokerRouletteGame/PokerRouletteScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerRouletteScene, _Component);
        function PokerRouletteScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor2, _assertThisInitialized(_this));
          _this._node_Game = null;
          _this.viewVersion = 0;
          return _this;
        }
        var _proto = PokerRouletteScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          PokerRouletteUtils.instance.bundle = assetManager.getBundle(cBundle);
          PokerRouletteUtils.instance.preLoad();
          PokerRouletteUtils.instance.playBgMusic();
          this.onLoadGame();
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          this.viewVersion++;
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
          this.viewVersion++;
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
          var version = ++this.viewVersion;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            PokerRouletteUtils.instance.bundle.load("prefab/PokerRouletteGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              if (!isValid(_this3, true) || version !== _this3.viewVersion) return;
              if (err || !prefab) {
                console.error("MATKA 房间加载失败", err);
                Common.closeWait();
                return;
              }
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
        return PokerRouletteScene;
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

System.register("chunks:///_virtual/PokerRouletteUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './PokerRouletteDef.ts', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "23e65iUNP5CToicMqGqtWQK", "PokerRouletteUtils", undefined);
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

      var PokerRouletteUtils = exports('PokerRouletteUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(PokerRouletteUtils, _GameDef$BaseSington);
        function PokerRouletteUtils() {
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
        var _proto = PokerRouletteUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/PokerRouletteGameView");
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

          //        // PokerRouletteUtils.instance.playSound(PokerRouletteDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // PokerRouletteUtils.instance.stopSound(PokerRouletteDef.eSound.numAdd);
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

          //        // PokerRouletteUtils.instance.playSound(PokerRouletteDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // PokerRouletteUtils.instance.stopSound(PokerRouletteDef.eSound.numAdd);
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

          //        // PokerRouletteUtils.instance.playSound(PokerRouletteDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // PokerRouletteUtils.instance.stopSound(PokerRouletteDef.eSound.numAdd);

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
          //     if (symbolIndex == PokerRouletteDef.eSymbol.WILD) {
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
          //     case PokerRouletteDef.eSymbol.NONE: {
          //         let index = Math.floor(Math.random() * (symbol_aniName.length - 3) + 3);
          //         strAni.push(`${symbol_aniName[index]}_${isIdle ? "idle" : "win"}`);
          //         break;
          //     }
          //     case PokerRouletteDef.eSymbol.SCATTER: {
          //         if (isIdle) {
          //             strAni.push(`free_idle`);
          //         } else {
          //             strAni.push(`free_intro`);
          //             strAni.push(`free_intro`);
          //         }
          //         break;
          //     }
          //     case PokerRouletteDef.eSymbol.SpecialWild: {
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
        return PokerRouletteUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/PokerRouletteGame', 'chunks:///_virtual/PokerRouletteGame'); 
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