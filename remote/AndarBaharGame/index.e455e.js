System.register("chunks:///_virtual/AndarBahar_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "c8738eAZ1tECbZXOdz+XL6w", "AndarBahar_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var AndarBahar_btnEffect = exports('default', (_dec = ccclass("AndarBaharBtnEffect"), _dec2 = menu("game/AndarBaharGame/AndarBahar_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AndarBahar_btnEffect, _Component);
        function AndarBahar_btnEffect() {
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
        var _proto = AndarBahar_btnEffect.prototype;
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

        _createClass(AndarBahar_btnEffect, [{
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

        return AndarBahar_btnEffect;
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

System.register("chunks:///_virtual/AndarBahar_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "f8c39NhHRxGcJaUZ+sxaqUO", "AndarBahar_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var AndarBahar_rank = exports('default', (_dec = ccclass("AndarBahar_rank"), _dec2 = menu("game/AndarBaharGame/AndarBahar_rank"), _dec3 = property(gts.List), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AndarBahar_rank, _Component);
        function AndarBahar_rank() {
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
        var _proto = AndarBahar_rank.prototype;
        _proto.onLoad = function onLoad() {
          // Common.showWait();
          // this.scheduleOnce(Common.closeWait, 3.0);
        };
        _proto.onEnable = function onEnable() {
          // EventManager.instance.on(AndarBaharDef.eProto.HD_GetWinLoseRank, this.onRecvData, this);
        };
        _proto.onDisable = function onDisable() {
          // EventManager.instance.off(AndarBaharDef.eProto.HD_GetWinLoseRank, this.onRecvData, this);
        };
        _proto.start = function start() {
          // NetManager.instance.sendOnlineData(AndarBaharDef.eProto.HD_GetWinLoseRank, {
          //     tableId: AndarBaharModel.instance.gameInfo.tableInfo.tableId,
          //     index: this.curPage,
          // });
        };
        _proto.onBtnClick_last = function onBtnClick_last() {
          if (this.curPage > 0) {
            this.curPage--;
          }

          // NetManager.instance.sendOnlineData(AndarBaharDef.eProto.HD_GetWinLoseRank, {
          //     tableId: AndarBaharModel.instance.gameInfo.tableInfo.tableId,
          //     index: this.curPage,
          // });

          this.lastPage.active = this.curPage > 0;
          this.nextPage.active = this.curPage < this.maxPage - 1;
        };
        _proto.onBtnClick_next = function onBtnClick_next() {
          if (this.curPage < this.maxPage - 1) {
            this.curPage++;
          }

          // NetManager.instance.sendOnlineData(AndarBaharDef.eProto.HD_GetWinLoseRank, {
          //     tableId: AndarBaharModel.instance.gameInfo.tableInfo.tableId,
          //     index: this.curPage,
          // });

          this.lastPage.active = this.curPage > 0;
          this.nextPage.active = this.curPage < this.maxPage - 1;
        };
        _proto.onRecvData = function onRecvData(data) {
          // switch (data.cmd) {
          //     case AndarBaharDef.eProto.HD_GetWinLoseRank: {
          //         let rankInfo: AndarBaharDef.IRank = data.Data;
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
        return AndarBahar_rank;
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

System.register("chunks:///_virtual/AndarBahar_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts'], function (exports) {
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
      cclegacy._RF.push({}, "7aa827dlAdGu4OhNAgiz0Nf", "AndarBahar_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var AndarBahar_rankItem = exports('default', (_dec = ccclass("AndarBahar_rankItem"), _dec2 = menu("game/AndarBaharGame/AndarBahar_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Sprite), _dec13 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AndarBahar_rankItem, _Component);
        function AndarBahar_rankItem() {
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
        var _proto = AndarBahar_rankItem.prototype;
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
          // let tempData: AndarBaharDef.IRankItem = this.item.data;
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
          // // let result: AndarBaharDef.openResult = JSON.parse(tempData.);
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
        _createClass(AndarBahar_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return AndarBahar_rankItem;
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

System.register("chunks:///_virtual/AndarBahar_record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './NetManager.ts', './AndarBaharDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "6770btgOo9KzpvILpV+HxoE", "AndarBahar_record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var AndarBahar_record = exports('default', (_dec = ccclass("AndarBahar_record"), _dec2 = menu("game/AndarBaharGame/AndarBahar_record"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AndarBahar_record, _Component);
        function AndarBahar_record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AndarBahar_record.prototype;
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
            RecordType: "andarBahar"
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
        return AndarBahar_record;
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

System.register("chunks:///_virtual/AndarBahar_recordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts', './AndarBaharDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Sprite, SpriteFrame, UIOpacity, color, Component, AutoChangeParent, Common, strValue;
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
      strValue = module.strValue;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "90b688ftctLYYpIaOVbVQYc", "AndarBahar_recordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var AndarBahar_recordItem = exports('default', (_dec = ccclass("AndarBahar_recordItem"), _dec2 = menu("game/AndarBaharGame/AndarBahar_recordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Sprite), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AndarBahar_recordItem, _Component);
        function AndarBahar_recordItem() {
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
          _initializerDefineProperty(_this, "Node_resultBg", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_result", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_resultNum", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrItemBg_big", _descriptor12, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = AndarBahar_recordItem.prototype;
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
          this.Node_resultBg.spriteFrame = this.arrItemBg_big[result.SendCount % 2];
          var cardValue = result.ShowCard % 13;
          this.Label_resultNum.string = "" + strValue[cardValue];

          // let strResult = ["Bahar", "Andar"];
          // this.Label_result.string = `${strResult[result.SendCount % 2]}`;
          // this.Label_result.color = result.SendCount % 2 == 0 ? color(255, 27, 27, 255) : color(27, 172, 255, 255);
        };

        _createClass(AndarBahar_recordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return AndarBahar_recordItem;
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_resultBg", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Label_result", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Label_resultNum", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "arrItemBg_big", [_dec14], {
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

System.register("chunks:///_virtual/AndarBahar_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AndarBaharUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, AndarBaharUtils;
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
      AndarBaharUtils = module.AndarBaharUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ce75dKB6mFAPo3/MWRJs+Oq", "AndarBahar_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var AndarBahar_winTip = exports('default', (_dec = ccclass("AndarBaharWinTip"), _dec2 = menu("game/AndarBaharGame/AndarBahar_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AndarBahar_winTip, _Component);
        function AndarBahar_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AndarBahar_winTip.prototype;
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
            _this2.Label_win.string = AndarBaharUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            AndarBaharUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${AndarBaharUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            AndarBaharUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return AndarBahar_winTip;
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

System.register("chunks:///_virtual/AndarBaharCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './DataManager.ts', './NetManager.ts', './AndarBaharDef.ts', './AndarBaharModel.ts', './Common.ts', './ViewManager.ts', './EventManager.ts', './ConfigManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, sys, assetManager, i18n, GameDef, DataManager, UserKey, NetManager, eProto, eEvent, cBundle, AndarBaharModel, Common, ViewManager, EventManager, ConfigManager;
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
      AndarBaharModel = module.AndarBaharModel;
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
      cclegacy._RF.push({}, "0c44dlc8MNEm6P13cOa6Y1V", "AndarBaharCtrl", undefined);
      var AndarBaharCtrl = exports('AndarBaharCtrl', /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(AndarBaharCtrl, _GameDef$BaseCtrl);
        function AndarBaharCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          /**
           * 请求下注
           * @param data
           */
          _this.isReqBet = false;
          return _this;
        }
        var _proto = AndarBaharCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete AndarBaharCtrl._instance;
          AndarBaharCtrl._instance = null;
          AndarBaharModel.destroy();
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
          if (!AndarBaharModel.instance.gameInfo) {
            return;
          }
          if (AndarBaharModel.instance.countDown < 3) {
            Common.showTip(i18n.lang.disableBet, sys.isMobile);
            return false;
          }
          if (AndarBaharModel.instance.myBetList[pos] + betAmount > AndarBaharModel.instance.PosMaxBet["" + pos]) {
            Common.showTip(i18n.lang[10064].replace("{0}", "" + Common.ChangeMoneyFormat(AndarBaharModel.instance.PosMaxBet["" + pos], 2)), sys.isMobile);
            return false;
          }
          this.SendData(eProto.HD_bet, {
            pos: pos,
            amount: betAmount,
            gameNo: AndarBaharModel.instance.gameNo
          });
          return true;
        }

        //    /**请求抽水 */
        ;

        _proto.reqPumping = function reqPumping() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getPumping, {
            gameName: "andarBahar"
          });
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_leave);
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // if (data.cmd != AndarBaharDef.eProto.allBet && data.cmd != AndarBaharDef.eProto.Bet) {
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
                AndarBaharModel.instance.gameInfo = data.Data;
                AndarBaharModel.instance.chipList = data.Data.Chips;
                AndarBaharModel.instance.gameNo = data.Data.GameNo;
                AndarBaharModel.instance.BetSecond = data.Data.BetSecond;
                AndarBaharModel.instance.TotalSecond = data.Data.TotalSecond;
                AndarBaharModel.instance.countDown = data.Data.State == 0 && data.Data.Countdown == 0 ? data.Data.BetSecond : data.Data.Countdown;
                AndarBaharModel.instance.lightPos = data.Data.OpenNum || 0;
                AndarBaharModel.instance.history = data.Data.Results.slice();
                AndarBaharModel.instance.PosMaxBet = data.Data.PosMaxBet;
                AndarBaharModel.instance.PlayerCount = data.Data.PlayerCount;
                AndarBaharModel.instance.myBetList = data.Data.MyTotalBet;
                AndarBaharModel.instance.totalBetList = data.Data.TotalBet;
                AndarBaharModel.instance.PlayerInfos = data.Data.PlayerInfos.slice();
                AndarBaharModel.instance.result = data.Data.OpenInfo;
                AndarBaharModel.instance.prize = data.Data.prize;
                AndarBaharModel.instance.gameStatus = data.Data.State;
                AndarBaharModel.instance.SendCards = data.Data.SendCards;
                AndarBaharModel.instance.ShowCard = data.Data.ShowCard;
                AndarBaharModel.instance.SendCount = data.Data.SendCount;
                var keys = Object.keys(data.Data.PosOdds);
                for (var i = 0; i < keys.length; i++) {
                  var odds = data.Data.PosOdds[keys[i]];
                  AndarBaharModel.instance.Rate[i] = odds;
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
                AndarBaharModel.instance.gameStatus = data.Data;
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
                // AndarBaharModel.instance.myBetList[data.Data.Pos] += data.Data.Amount;
                break;
              }
            case eProto.sendCards:
              {
                AndarBaharModel.instance.SendCards = data.Data;
                break;
              }
            case eProto.open:
              {
                AndarBaharModel.instance.result = data.Data;

                // AndarBaharModel.instance.history.unshift(AndarBaharModel.instance.result.OpenNum);

                break;
              }
            case eProto.prize:
              {
                AndarBaharModel.instance.prize = data.Data;
                break;
              }
            case eProto.getPumping:
              {
                AndarBaharModel.instance.nPummping = data.Data.Pumping;
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
                gts.Debug.LogWarr("==AndarBahar=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (AndarBaharModel.instance.curBalance > 0) {
                  AndarBaharModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                AndarBaharModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==AndarBahar=pushWallet==" + _HD_Wallet.VndBalance);
                if (AndarBaharModel.instance.curBalance > 0) {
                  AndarBaharModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                AndarBaharModel.instance.curBalance = _HD_Wallet.VndBalance;
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
          // this.SendData(AndarBaharDef.eProto.getInfo, {});
        };
        _proto.sendDoingBet = function sendDoingBet(pos, num) {
          if (AndarBaharModel.instance.countDown < 3) {
            Common.showTip(i18n.lang.disableBet, sys.isMobile);
            return false;
          }
          if (AndarBaharModel.instance.myBetList[pos] + num > AndarBaharModel.instance.PosMaxBet["" + pos]) {
            Common.showTip(i18n.lang[10064].replace("{0}", "" + Common.ChangeMoneyFormat(AndarBaharModel.instance.PosMaxBet["" + pos], 2)), sys.isMobile);
            return false;
          }
          this.SendData(eProto.HD_bet, {
            pos: pos,
            amount: num,
            gameNo: AndarBaharModel.instance.gameNo
          });
          return true;
        };
        _proto.Send_ExitRoom = function Send_ExitRoom() {
          this.SendData(eProto.HD_leave);
        };
        _createClass(AndarBaharCtrl, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(cBundle);
          }
        }]);
        return AndarBaharCtrl;
      }(GameDef.BaseCtrl));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AndarBaharDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "604b1opTedASp7E18+77xfD", "AndarBaharDef", undefined);
      //gameDef moudle
      //猜纸牌
      var cBundle = exports('cBundle', "AndarBaharGame");
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
        open: 2,
        result: 3
      });
      var strColor = exports('strColor', ["t", "h", "m", "f"]);
      var strValue = exports('strValue', ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]);
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_enter"] = "andarBahar/HD_enter";
        eProto["HD_leave"] = "andarBahar/HD_leave";
        eProto["HD_history"] = "andarBahar/HD_history";
        eProto["allBet"] = "andarBahar/allBet";
        eProto["HD_bet"] = "andarBahar/HD_bet";
        eProto["Bet"] = "andarBahar/bet";
        eProto["changeState"] = "andarBahar/changeState";
        eProto["sendCards"] = "andarBahar/sendCards";
        eProto["RECORD"] = "andarBahar/HD_Record";
        eProto["HD_QueryBetRecord"] = "lobby/HD_QueryBetRecord";
        eProto["gameStart"] = "andarBahar/gameStart";
        eProto["open"] = "andarBahar/open";
        eProto["prize"] = "andarBahar/prize";
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
        eSound["sendCard"] = "sound/sendCard";
        eSound["tip"] = "sound/tip";
        eSound["coin"] = "sound/coin";
        eSound["timeUp"] = "sound/timeUp";
        return eSound;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改

      /////////////////////////////////////
      /**钱包信息 */
      // ==recvData data==={"Data":{"UserID":"62496f2dc4ac29426adcb17e","XiaZhuPos":"6","XiaZhuV":482},"GameType":"andarBahar","Action":"HD_XiaZhu","ErrMsg":"操作成功","Code":0,"cmd":"andarBahar/HD_XiaZhu"}
      // builtin-2d-sprite (variant) : Failed to set property [texture], property not found.
      //注： 这个问题由 服务端发送的下注金额 引起，金额不在 CMList整数范围内
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AndarBaharGame", ['./AndarBaharCtrl.ts', './AndarBaharDef.ts', './AndarBaharGameView.ts', './AndarBaharModel.ts', './AndarBaharScene.ts', './AndarBaharUtils.ts', './AndarBahar_btnEffect.ts', './AndarBahar_rank.ts', './AndarBahar_rankItem.ts', './AndarBahar_record.ts', './AndarBahar_recordItem.ts', './AndarBahar_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/AndarBaharGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './BtnArea.ts', './DataManager.ts', './I18n.ts', './AndarBaharDef.ts', './AndarBaharModel.ts', './AndarBaharCtrl.ts', './AndarBaharUtils.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Label, Sprite, Prefab, SpriteFrame, sp, tween, v3, sys, find, instantiate, UITransform, Tween, UIOpacity, GameDef, ConfigManager, EventManager, NetManager, ViewManager, Common, BtnArea, DataManager, UserKey, i18n, eProto, eStatus, eSound, eEvent, strValue, AndarBaharModel, AndarBaharCtrl, AndarBaharUtils;
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
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
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
      eStatus = module.eStatus;
      eSound = module.eSound;
      eEvent = module.eEvent;
      strValue = module.strValue;
    }, function (module) {
      AndarBaharModel = module.AndarBaharModel;
    }, function (module) {
      AndarBaharCtrl = module.AndarBaharCtrl;
    }, function (module) {
      AndarBaharUtils = module.AndarBaharUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46;
      cclegacy._RF.push({}, "a5b85YJiOxINIPCd8B60vxp", "AndarBaharGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var AndarBaharGameView = exports('default', (_dec = ccclass("AndarBaharGameView"), _dec2 = menu("game/AndarBaharGame/AndarBaharGameView"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Sprite), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Prefab), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(SpriteFrame), _dec22 = property(SpriteFrame), _dec23 = property(Label), _dec24 = property(Label), _dec25 = property(Node), _dec26 = property(sp.Skeleton), _dec27 = property(Node), _dec28 = property(SpriteFrame), _dec29 = property(SpriteFrame), _dec30 = property(sp.Skeleton), _dec31 = property(Prefab), _dec32 = property(Prefab), _dec33 = property(Prefab), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Prefab), _dec37 = property(Label), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Sprite), _dec47 = property(Label), _dec48 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(AndarBaharGameView, _GameDef$BaseView);
        function AndarBaharGameView() {
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
          _initializerDefineProperty(_this, "Node_public", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_deskPlayer", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betArea", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betChip", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_chip", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pathContent", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pathItem", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrItemBg", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrItemBg_big", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_history_0", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_history_1", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_record", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cm_light", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_btnGroup", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameChip", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameChip_big", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameTip", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coin", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_star", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor35, _assertThisInitialized(_this));
          //
          _initializerDefineProperty(_this, "Node_chipTag", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardLest", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardRight", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_newLeft", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_newRight", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_endLight_blue", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_endLight_red", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardItem", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_openCard", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_sendCounts", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ghostEffect", _descriptor46, _assertThisInitialized(_this));
          //    ////////////////////////////////////////////////////
          _this._area2btn = {};
          return _this;
        }
        var _proto = AndarBaharGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, AndarBaharCtrl.instance);
          this.initUIView();
          AndarBaharUtils.instance.loadRes(function () {
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
          AndarBaharModel.instance.clearGameData();
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

              // if (AndarBaharCtrl.instance.isReqBet) {
              //     AndarBaharCtrl.instance.reqBet();
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
          var strGold = Common.numFormat(AndarBaharModel.instance.curBalance);
          if (strGold != this.labGold.string) {
            AndarBaharUtils.instance.updateLabel(this.labGold, strGold);
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
          if (AndarBaharModel.instance.curBalance < AndarBaharModel.instance.curBet) {
            Common.showTip(i18n.lang[10001], sys.isMobile);
            return;
          }
          if (AndarBaharModel.instance.gameStatus && AndarBaharModel.instance.gameStatus == eStatus.bet && AndarBaharModel.instance.countDown > 3) {
            gts.Debug.Log("==OnClicked==" + btn.node.name);
            var pos = btn.node.name.replace("Node_area_", "");
            AndarBaharCtrl.instance.reqBet(parseInt(pos), AndarBaharModel.instance.curBet);
            // if (AndarBaharCtrl.instance.reqBet(parseInt(pos), AndarBaharModel.instance.curBet)) {
            //     this.doSendChip(pos, AndarBaharModel.instance.curBet);
            // }

            var betArea = this.Node_betArea.getChildByName("Node_area_" + pos);
            var light = betArea.getChildByName("light");
            light.active = true;
            light.getComponent(sp.Skeleton).setAnimation(0, "1win_bet" + (parseInt(pos) + 1), false);
            tween(light).delay(0.25).call(function () {
              light.active = false;
            }).start();
          }
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
          AndarBaharUtils.instance.playOneShot(eSound.coin);
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
            var newChip, lv, i, pBack, isMySelf, betArea, chipContent, Label_bet, totalBetList, startPos, counts, toPos;
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
                  if (!(betAmount >= AndarBaharModel.instance.chipList[AndarBaharModel.instance.chipList.length - 1])) {
                    _context.next = 8;
                    break;
                  }
                  lv = AndarBaharModel.instance.chipList.length - 1;
                  _context.next = 16;
                  break;
                case 8:
                  i = 0;
                case 9:
                  if (!(i < AndarBaharModel.instance.chipList.length - 1)) {
                    _context.next = 16;
                    break;
                  }
                  if (!(betAmount >= AndarBaharModel.instance.chipList[i] && betAmount < AndarBaharModel.instance.chipList[i + 1])) {
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
                    AndarBaharModel.instance.myTotalBet += betAmount;
                  }

                  //更新下注分数
                  Label_bet = isMySelf ? betArea.getChildByName("Label_myBet") : betArea.getChildByName("Label_totalBet");
                  Label_bet.active = true;
                  totalBetList = isMySelf ? AndarBaharModel.instance.myBetList["" + pos] : AndarBaharModel.instance.totalBetList["" + pos];
                  if (totalBetList == 0) {
                    totalBetList = betAmount;
                  }
                  AndarBaharUtils.instance.updateLabel(Label_bet, "" + Common.ChangeMoneyFormat(totalBetList, 3));

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
                case 36:
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
          AndarBaharModel.instance.result = null;
          AndarBaharModel.instance.SendCards = null;
          AndarBaharModel.instance.prize = null;
          AndarBaharModel.instance.ShowCard = null;
          AndarBaharModel.instance.SendCount = 0;
          this.Label_sendCounts.string = "" + 0;
          this.Node_cardLest.destroyAllChildren();
          this.Node_cardRight.destroyAllChildren();
          this.Node_newLeft.active = false;
          this.Node_newRight.active = false;
          Tween.stopAllByTarget(this.Node_endLight_red.getComponent(UIOpacity));
          Tween.stopAllByTarget(this.Node_endLight_blue.getComponent(UIOpacity));
          this.Node_endLight_red.active = false;
          this.Node_endLight_blue.active = false;
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
          if (AndarBaharModel.instance.myTotalBet > 0) {
            AndarBaharModel.instance.myBetListBack = AndarBaharModel.instance.myBetList.slice();
            AndarBaharModel.instance.myTotalBet = 0;
            AndarBaharModel.instance.myBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
          var isAgainEnable = false;
          for (var _iterator2 = _createForOfIteratorHelperLoose(AndarBaharModel.instance.myBetListBack), _step2; !(_step2 = _iterator2()).done;) {
            var amount = _step2.value;
            if (amount > 0) {
              isAgainEnable = true;
              break;
            }
          }
          Common.setButtonEnableWithGray(this.Button_x2, false);
          Common.setButtonEnableWithGray(this.Button_again, isAgainEnable);
          AndarBaharModel.instance.totalBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
                AndarBaharCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_record":
              {
                Common.loadPopBuddle("prefab/Node_record", AndarBaharUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_rank", AndarBaharUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_set", AndarBaharUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_path", AndarBaharUtils.instance.bundle, function () {}, function (prefab) {
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
                Common.loadPopBuddle("prefab/Node_help", AndarBaharUtils.instance.bundle, function () {}, function (prefab) {
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
                AndarBaharModel.instance.curBet = AndarBaharModel.instance.chipList[_index];
                var background = this.Button_chip.getChildByName("background");
                background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[_index];
                background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(AndarBaharModel.instance.curBet, 3);
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
                for (var pos = 0; pos < AndarBaharModel.instance.myBetList.length; pos++) {
                  var betAmount = AndarBaharModel.instance.myBetList[pos];
                  if (betAmount > 0) {
                    AndarBaharCtrl.instance.reqBet(pos, betAmount);
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
                for (var _pos = 0; _pos < AndarBaharModel.instance.myBetListBack.length; _pos++) {
                  var _betAmount = AndarBaharModel.instance.myBetListBack[_pos];
                  if (_betAmount > 0) {
                    AndarBaharCtrl.instance.reqBet(_pos, _betAmount);
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
          if (!AndarBaharModel.instance.PlayerInfos || AndarBaharModel.instance.PlayerInfos.length == 0) {
            return;
          }
          var Label_public = this.Node_public.getChildByName("Label_public");
          Label_public.getComponent(Label).string = "" + AndarBaharModel.instance.PlayerCount;
          AndarBaharModel.instance.firstUserID = AndarBaharModel.instance.PlayerInfos[0].Uid;
          var seatPlayer = AndarBaharModel.instance.PlayerInfos.slice(0, 5);
          for (var i = 0; i < seatPlayer.length; i++) {
            var playerInfo = seatPlayer[i];
            var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", this.Node_deskPlayer);
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
          AndarBaharModel.instance.chipList = AndarBaharModel.instance.chipList.slice(0, 6);
          for (var i = 0; i < AndarBaharModel.instance.chipList.length; i++) {
            var Button_chip = this.Node_btnGroup.getChildByName("Button_chip_" + i);
            if (!Button_chip) {
              break;
            }
            var _background = Button_chip.getChildByName("background");
            _background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[i];
            var betAmount = AndarBaharModel.instance.chipList[i];
            _background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(betAmount, 3);
          }
          AndarBaharModel.instance.curBet = AndarBaharModel.instance.chipList[0];
          var background = this.Button_chip.getChildByName("background");
          background.getComponent(Sprite).spriteFrame = this.spriteFrameChip_big[0];
          background.getChildByName("Label_value").getComponent(Label).string = "" + Common.ChangeMoneyShow(AndarBaharModel.instance.curBet, 3);

          //rates
          var strRate = ["", "", "1-5", "6-10", "11-15", "16-25", "26-30", "31-35", "36-40", "41 or more\n\r"];
          for (var _i = 0; _i < AndarBaharModel.instance.Rate.length; _i++) {
            var odds = AndarBaharModel.instance.Rate[_i];
            var betArea = this.Node_betArea.getChildByName("Node_area_" + _i);
            var Label_rate = betArea.getChildByName("Label_rate");
            Label_rate.getComponent(Label).string = strRate[_i] + " x" + odds;
          }
        };
        _proto.updateRecord = function updateRecord() {
          var history = AndarBaharModel.instance.history.slice(0, 10);
          var openResults = history.reverse();
          var itemTemp = this.Node_record.getChildByName("Node_item_0");
          for (var i = 0; i < openResults.length; i++) {
            var openInfo = openResults[i];
            var newItem = this.Node_record.getChildByName("Node_item_" + i);
            if (!newItem) {
              newItem = instantiate(itemTemp);
              newItem.name = "Node_item_" + i;
              this.Node_record.addChild(newItem);
            }
            newItem.active = true;
            newItem.getComponent(Sprite).spriteFrame = this.arrItemBg_big[openInfo.SendCount % 2];
            var cardValue = openInfo.ShowCard % 13;
            newItem.getChildByName("Label_num").getComponent(Label).string = "" + strValue[cardValue];
          }
        };
        _proto.updateRoad = function updateRoad() {
          var rowNum = 6;
          var colNum = 17;
          var startPosX = 21;
          var startPosY = -21;
          var distanceX = 40;
          var distanceY = 40;
          var isBigBack = false;
          var iCol_real = 0;
          var iCol_add = 0;
          var iRow = 0;
          var itemMap = {};
          var history = AndarBaharModel.instance.history.slice(0, 100);
          var openResults = history.reverse();
          var maxCol = 0;
          var redCounts = 0;
          var blueCounts = 0;
          for (var i = 0; i < openResults.length; i++) {
            //3-10:小  11-18：大
            var openInfo = openResults[i];
            var isBig = openInfo.SendCount % 2 == 0;
            isBig ? redCounts++ : blueCounts++;
            var newItem = this.pathContent.getChildByName("Node_item_" + i);
            if (!newItem) {
              newItem = instantiate(this.pathItem);
              newItem.name = "Node_item_" + i;
              this.pathContent.addChild(newItem);
            }
            newItem.active = true;
            newItem.getComponent(Sprite).spriteFrame = this.arrItemBg[isBig ? 0 : 1];
            if (i != 0) {
              if (isBigBack != isBig) {
                iRow = 0;
                iCol_real++;
                iCol_add = 0;
              } else if (iCol_add == 0 && iRow < rowNum - 1 && !itemMap[(iCol_real + iCol_add) * rowNum + colNum * (iRow + 1)]) {
                iRow++;
              } else {
                iCol_add++;
              }
            }
            Tween.stopAllByTarget(newItem);
            if (i == openResults.length - 1) {
              tween(newItem).to(0.3, {
                scale: v3(1.2, 1.2, 1.2)
              }).to(0.3, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }
            var pos = v3(startPosX + (iCol_real + iCol_add) * distanceX, startPosY - iRow * distanceY, 0);
            newItem.position = pos;
            isBigBack = isBig;
            itemMap[(iCol_real + iCol_add) * rowNum + colNum * iRow] = true;
            if (iCol_real + iCol_add > maxCol) {
              maxCol = iCol_real + iCol_add;
            }
          }
          var blueRate = Math.round(blueCounts * 100 / history.length);
          this.Label_history_0.string = blueRate + "%";
          this.Label_history_1.string = 100 - blueRate + "%";
          var curPos = v3(-340, 120, 0);
          if (maxCol >= colNum) {
            curPos.x -= (maxCol - colNum + 1) * distanceX;
          }
          this.pathContent.position = curPos;
        };
        _proto.onUpdatePath = function onUpdatePath() {
          this.updateRoad();
          this.updateRecord();
        };
        _proto.showCountDown = function showCountDown() {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            var countDown = AndarBaharModel.instance.countDown;
            Tween.stopAllByTarget(_this8.Node_timer);
            _this8.Label_timer.string = "" + countDown;
            _this8.Node_timer.active = true;
            tween(_this8.Node_timer).delay(1).call(function () {
              AndarBaharModel.instance.countDown--;
              _this8.Label_timer.string = "" + AndarBaharModel.instance.countDown;
              AndarBaharModel.instance.countDown > 3 ? AndarBaharUtils.instance.playOneShot(eSound.timeUp) : AndarBaharModel.instance.countDown > 0 ? AndarBaharUtils.instance.playOneShot(eSound.countDown) : AndarBaharUtils.instance.playOneShot(eSound.warning);
              if (AndarBaharModel.instance.countDown == 3 && _this8.gameTip.animation != "stop") {
                _this8.gameTip.node.active = true;
                _this8.gameTip.setAnimation(0, "stopbet", false);
                _this8.gameTip.setCompleteListener(function () {
                  _this8.gameTip.setCompleteListener(null);
                  _this8.gameTip.node.active = false;
                });
                _this8.Label_timer.node.active = false;
                var aniKnock = _this8.Node_timer.getChildByName("knock").getComponent(sp.Skeleton);
                aniKnock.setAnimation(0, "321", false);
                aniKnock.addAnimation(0, "idle", true);
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
            var lastBetAmount = AndarBaharModel.instance.totalBetList[i];
            var BetAmount = data ? data[i] - lastBetAmount : lastBetAmount;
            AndarBaharModel.instance.totalBetList[i] = data ? data[i] : AndarBaharModel.instance.totalBetList[i];
            if (BetAmount > 0) {
              isBet = true;
              this.doSendChip(i, BetAmount, this.Node_public);
            }
          }
          if (isBet) {
            AndarBaharUtils.instance.playOneShot(eSound.bet);
          }
        };
        _proto.showMainCard = function showMainCard() {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            _this9.Node_openCard.node.active = true;
            _this9.Node_openCard.node.getComponent(UIOpacity).opacity = 0;
            AndarBaharUtils.instance.playOneShot(eSound.firstCard);
            _this9.ghostEffect.node.active = true;
            _this9.ghostEffect.setAnimation(0, "1fly", false);
            _this9.ghostEffect.setCompleteListener(function () {
              _this9.ghostEffect.setCompleteListener(null);
              _this9.ghostEffect.setAnimation(0, "2light", false);
              _this9.Node_openCard.spriteFrame = AndarBaharUtils.instance.getCardFrame(AndarBaharModel.instance.ShowCard);
              tween(_this9.Node_openCard.node.getComponent(UIOpacity)).to(0.05, {
                opacity: 255
              }).start();
            });
          });
        };
        _proto.initCards = function initCards() {
          if (AndarBaharModel.instance.SendCount > 0 && AndarBaharModel.instance.SendCards && AndarBaharModel.instance.SendCards.length > 0) {
            for (var i = 0; i < AndarBaharModel.instance.SendCount; i++) {
              var cardData = AndarBaharModel.instance.SendCards[i];
              var newCard = instantiate(this.Node_cardItem);
              newCard.active = true;
              newCard.eulerAngles = v3(0, 0, 0);
              newCard.getComponent(Sprite).spriteFrame = AndarBaharUtils.instance.getCardFrame(cardData);
              i % 2 == 0 ? this.Node_cardLest.addChild(newCard) : this.Node_cardRight.addChild(newCard);
            }
          }
        };
        _proto.openCard = function openCard(dataIndex, delay) {
          var _this10 = this;
          return new Promise(function (resolve, reject) {
            _this10.scheduleOnce(function () {
              var cardData = AndarBaharModel.instance.SendCards[dataIndex];
              var newCard = instantiate(_this10.Node_cardItem);
              newCard.active = true;
              newCard.eulerAngles = v3(0, 90, 0);
              newCard.getComponent(Sprite).spriteFrame = AndarBaharUtils.instance.getCardFrame(cardData);
              dataIndex % 2 == 0 ? _this10.Node_cardLest.addChild(newCard) : _this10.Node_cardRight.addChild(newCard);
              var nodeLight = dataIndex % 2 == 0 ? _this10.Node_newLeft : _this10.Node_newRight;
              nodeLight.active = true;
              nodeLight.getComponent(UIOpacity).opacity = 0;
              tween(nodeLight.getComponent(UIOpacity)).delay(0).call(function () {
                nodeLight.getComponent(UIOpacity).opacity = 255;
                var wPos = newCard.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                wPos = nodeLight.parent.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                nodeLight.position = v3(wPos.x, wPos.y + 4, wPos.z);
              }).start();
              AndarBaharUtils.instance.playOneShot(eSound.sendCard);
              tween(newCard).to(0.35, {
                eulerAngles: v3(0, 0, 0)
              }).call(resolve).start();
              AndarBaharModel.instance.SendCount++;
              AndarBaharUtils.instance.updateLabel(_this10.Label_sendCounts, AndarBaharModel.instance.SendCount);
            }, delay);
          });
        };
        _proto.doSendCards = function doSendCards() {
          this.initCards();
          var arrPromise = [];
          var openDelay = 0.4;
          for (var i = AndarBaharModel.instance.SendCount; i < AndarBaharModel.instance.SendCards.length; i++) {
            arrPromise.push(this.openCard(i, (i - AndarBaharModel.instance.SendCount) * openDelay));
          }
          return Promise.all(arrPromise);
        };
        _proto.showCardLight = function showCardLight() {
          var _this11 = this;
          return new Promise(function (resolve, reject) {
            var nodeLight = AndarBaharModel.instance.SendCards.length % 2 == 0 ? _this11.Node_endLight_red : _this11.Node_endLight_blue;
            nodeLight.active = true;
            nodeLight.getComponent(UIOpacity).opacity = 0;
            tween(nodeLight.getComponent(UIOpacity)).delay(0.1).to(0.5, {
              opacity: 255
            }).to(0.5, {
              opacity: 0
            }).union().repeatForever().start();
          });
        };
        _proto.showWinEffect = function showWinEffect() {
          var _this12 = this;
          return new Promise(function (resolve, reject) {
            AndarBaharUtils.instance.playOneShot(eSound.winEffect);
            for (var _iterator4 = _createForOfIteratorHelperLoose(AndarBaharModel.instance.result.WinPos), _step4; !(_step4 = _iterator4()).done;) {
              var _index2 = _step4.value;
              var _Node_area = _this12.Node_betArea.getChildByName("Node_area_" + _index2);
              var _light = _Node_area.getChildByName("light");
              _light.active = true;
              _light.getComponent(sp.Skeleton).setAnimation(0, "1win_bet" + (_index2 + 1), true);
            }
            for (var i = 0; i < _this12.Node_betArea.children.length; i++) {
              var Node_area = _this12.Node_betArea.getChildByName("Node_area_" + i);
              var light = Node_area.getChildByName("light");
              if (!light.active) {
                light.active = true;
                light.getComponent(sp.Skeleton).setAnimation(0, "2fault_bet" + (i + 1), true);
              }
            }
            _this12.scheduleOnce(resolve, 3.0);
          });
        };
        _proto.showHeadEffect = function showHeadEffect() {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            if (!AndarBaharModel.instance.result || !AndarBaharModel.instance.prize) {
              return resolve;
            }
            AndarBaharUtils.instance.playOneShot(eSound.coin);
            if (AndarBaharModel.instance.prize.myPrize > 0) {
              var headEffect = _this13.Node_head.getChildByName("headEffect");
              headEffect.active = true;
              headEffect.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
              var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", _this13.Node_head);
              Label_winAdd.parent.active = true;
              Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyShow(AndarBaharModel.instance.prize.myPrize, 3);
            }
            for (var i = 0; i < _this13.Node_deskPlayer.children.length; i++) {
              var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", _this13.Node_deskPlayer);
              var playerInfo = AndarBaharModel.instance.PlayerInfos[i];
              if (playerInfo) {
                for (var _iterator5 = _createForOfIteratorHelperLoose(AndarBaharModel.instance.prize.seatPrize), _step5; !(_step5 = _iterator5()).done;) {
                  var prizeInfo = _step5.value;
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
          var _this14 = this;
          return new Promise(function (resolve, reject) {
            if (!AndarBaharModel.instance.result || !AndarBaharModel.instance.prize) {
              return resolve;
            }
            var wChipTagPos = _this14.Node_chipTag.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var wWinPos_0 = _this14.Node_betArea.getChildByName("Node_area_" + AndarBaharModel.instance.result.WinPos[0]).getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var wWinPos_1 = _this14.Node_betArea.getChildByName("Node_area_" + AndarBaharModel.instance.result.WinPos[1]).getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var wToWinPos = [];
            if (AndarBaharModel.instance.prize.myPrize > 0) {
              wToWinPos.push(_this14.Node_head.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
              _this14.scheduleOnce(function () {
                if (AndarBaharModel.instance.endBalance > 0) {
                  AndarBaharModel.instance.curBalance = AndarBaharModel.instance.endBalance;
                  AndarBaharModel.instance.endBalance = 0;
                  _this14.updateGold();
                }
              }, 3.25);
            }
            for (var i = 0; i < _this14.Node_deskPlayer.children.length; i++) {
              var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", _this14.Node_deskPlayer);
              var playerInfo = AndarBaharModel.instance.PlayerInfos[i];
              if (playerInfo) {
                for (var _iterator6 = _createForOfIteratorHelperLoose(AndarBaharModel.instance.prize.seatPrize), _step6; !(_step6 = _iterator6()).done;) {
                  var prizeInfo = _step6.value;
                  if (prizeInfo.Uid == playerInfo.Uid && prizeInfo.Prize > 0) {
                    wToWinPos.push(Node_headInfo.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
                    break;
                  }
                }
              }
            }
            wToWinPos.push(_this14.Node_public.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
            for (var _i2 = 0; _i2 < _this14.Node_betArea.children.length; _i2++) {
              var Node_area = _this14.Node_betArea.getChildByName("Node_area_" + _i2);
              var Node_myChip = Node_area.getChildByName("Node_myChip");
              var Node_totalChip = Node_area.getChildByName("Node_totalChip");
              for (var _iterator7 = _createForOfIteratorHelperLoose(Node_myChip.children), _step7; !(_step7 = _iterator7()).done;) {
                var nodeChip = _step7.value;
                var toPos_0 = Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wChipTagPos);
                var toPos_1 = _i2 % 2 == 0 ? Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_0) : Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_1);
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
              for (var _iterator8 = _createForOfIteratorHelperLoose(Node_totalChip.children), _step8; !(_step8 = _iterator8()).done;) {
                var _nodeChip = _step8.value;
                var _toPos_ = Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wChipTagPos);
                var _toPos_2 = _i2 % 2 == 0 ? Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_0) : Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_1);
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
            AndarBaharUtils.instance.playOneShot(eSound.collectChip);
            _this14.scheduleOnce(function () {
              AndarBaharUtils.instance.playOneShot(eSound.collectChip);
            }, 1.5);
            _this14.scheduleOnce(function () {
              AndarBaharUtils.instance.playOneShot(eSound.collectChip);
            }, 3);
          });
        };
        _proto.doEnd = /*#__PURE__*/function () {
          var _doEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var winPos;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //计算开奖区域
                  winPos = [];
                  AndarBaharModel.instance.SendCards.length % 2 == 0 ? winPos.push(1) : winPos.push(0);
                  if (AndarBaharModel.instance.SendCards.length < 16) {
                    winPos.push(Math.floor((AndarBaharModel.instance.SendCards.length - 1) / 5) + 2);
                  } else if (AndarBaharModel.instance.SendCards.length < 26) {
                    winPos.push(5);
                  } else {
                    winPos.push(Math.floor((AndarBaharModel.instance.SendCards.length - 26) / 5) + 6);
                  }
                  AndarBaharModel.instance.result = {
                    SendCount: AndarBaharModel.instance.SendCount,
                    ShowCard: AndarBaharModel.instance.ShowCard,
                    WinPos: winPos.slice()
                  };
                  _context2.next = 6;
                  return this.doSendCards();
                case 6:
                  this.showCardLight();
                  this.showWinEffect();
                  this.onUpdatePath();
                case 9:
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
                  if (!(!AndarBaharModel.instance.result || !AndarBaharModel.instance.prize)) {
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
          var _this15 = this;
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
                this.Node_openCard.node.active = true;
                this.Node_openCard.spriteFrame = AndarBaharUtils.instance.getCardFrame(AndarBaharModel.instance.ShowCard);
                this.updateBet_other();
                // this.updateStatus();
                switch (AndarBaharModel.instance.gameStatus) {
                  //开始
                  case eStatus.none:
                    {
                      break;
                    }
                  //下注
                  case eStatus.bet:
                    {
                      //更新自己下注
                      for (var i = 0; i < 10; i++) {
                        var BetAmount = AndarBaharModel.instance.myBetList[i];
                        if (BetAmount > 0) {
                          this.doSendChip(i, BetAmount);
                        }
                      }
                      if (AndarBaharModel.instance.myTotalBet > 0) {
                        Common.setButtonEnableWithGray(this.Button_x2, true);
                      }
                      if (AndarBaharModel.instance.countDown > 3) {
                        this.gameTip.node.active = true;
                        this.gameTip.setAnimation(0, "starbet", false);
                        this.gameTip.setCompleteListener(function () {
                          _this15.gameTip.setCompleteListener(null);
                          _this15.gameTip.node.active = false;
                        });
                        var aniKnock = this.Node_timer.getChildByName("knock").getComponent(sp.Skeleton);
                        aniKnock.setAnimation(0, "idle", true);
                        this.Label_timer.node.active = true;
                      } else {
                        this.gameTip.node.active = true;
                        this.gameTip.setAnimation(0, "stopbet", false);
                        this.gameTip.setCompleteListener(function () {
                          _this15.gameTip.setCompleteListener(null);
                          _this15.gameTip.node.active = false;
                        });
                        var strAni = ["1", "21", "321"];
                        var _aniKnock = this.Node_timer.getChildByName("knock").getComponent(sp.Skeleton);
                        _aniKnock.setAnimation(0, strAni[AndarBaharModel.instance.countDown - 1], false);
                        _aniKnock.addAnimation(0, "idle", true);
                        this.Label_timer.node.active = false;
                      }
                      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                            case 0:
                              _context4.next = 2;
                              return _this15.showCountDown();
                            case 2:
                              _this15.Node_timer.active = false;
                              Common.setButtonEnableWithGray(_this15.Button_again, false);
                              Common.setButtonEnableWithGray(_this15.Button_x2, false);
                            case 5:
                            case "end":
                              return _context4.stop();
                          }
                        }, _callee4);
                      }))();
                      break;
                    }
                  case eStatus.open:
                    {
                      this.Node_timer.active = false;
                      this.Label_sendCounts.string = "" + AndarBaharModel.instance.SendCount;
                      this.doEnd();
                      AndarBaharModel.instance.history.unshift({
                        ShowCard: AndarBaharModel.instance.ShowCard,
                        SendCount: AndarBaharModel.instance.SendCards.length
                      });
                      break;
                    }
                  case eStatus.result:
                    {
                      this.Node_timer.active = false;
                      this.Label_sendCounts.string = "" + AndarBaharModel.instance.SendCount;
                      this.showResult();
                      break;
                    }
                }
                this.Label_gameNo.string = "No: " + AndarBaharModel.instance.gameNo;
                break;
              }
            case eProto.gameStart:
              {
                this.doClearChip();
                AndarBaharModel.instance.countDown = AndarBaharModel.instance.gameInfo.Countdown;
                AndarBaharModel.instance.myBetList = data.MyTotalBet;
                AndarBaharModel.instance.totalBetList = data.TotalBet;
                AndarBaharModel.instance.PlayerInfos = data.PlayerInfos.slice();
                AndarBaharModel.instance.ShowCard = data.ShowCard;
                AndarBaharModel.instance.SendCards = data.SendCards;
                AndarBaharModel.instance.SendCount = data.SendCount;
                this.showMainCard();
                this.onUpdateDeskPlayer();
                AndarBaharModel.instance.gameNo = data.GameNo;
                this.Label_gameNo.string = "No: " + AndarBaharModel.instance.gameNo;
                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        // AndarBaharModel.instance.gameStatus = AndarBaharDef.eStatus.bet;

                        // AndarBaharModel.instance.countDown = AndarBaharModel.instance.BetSecond;
                        AndarBaharUtils.instance.playOneShot(eSound.warning);
                        _this15.gameTip.node.active = true;
                        _this15.gameTip.setAnimation(0, "starbet", false);
                        _this15.gameTip.setCompleteListener(function () {
                          _this15.gameTip.setCompleteListener(null);
                          _this15.gameTip.node.active = false;
                        });
                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }))();
                break;
              }
            case eProto.changeState:
              {
                switch (AndarBaharModel.instance.gameStatus) {
                  case eStatus.bet:
                    {
                      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                        var aniKnock;
                        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                          while (1) switch (_context6.prev = _context6.next) {
                            case 0:
                              AndarBaharModel.instance.countDown = AndarBaharModel.instance.BetSecond;
                              _this15.Node_timer.active = true;
                              aniKnock = _this15.Node_timer.getChildByName("knock").getComponent(sp.Skeleton);
                              aniKnock.setAnimation(0, "idle", true);
                              _this15.Label_timer.node.active = true;

                              //10=25-15
                              _context6.next = 7;
                              return _this15.showCountDown();
                            case 7:
                              Common.setButtonEnableWithGray(_this15.Button_again, false);
                              Common.setButtonEnableWithGray(_this15.Button_x2, false);
                              _this15.Node_timer.active = false;
                            case 10:
                            case "end":
                              return _context6.stop();
                          }
                        }, _callee6);
                      }))();
                      break;
                    }
                }
                break;
              }
            case eProto.Bet:
              {
                var betInfo = data;
                if (AndarBaharModel.instance.PlayerInfos[0] && betInfo.Uid == AndarBaharModel.instance.PlayerInfos[0].Uid) {
                  this.doSendStar(betInfo.Pos);
                }
                for (var _i3 = 0; _i3 < AndarBaharModel.instance.PlayerInfos.length; _i3++) {
                  var playerInfo = AndarBaharModel.instance.PlayerInfos[_i3];
                  var Node_root = this.Node_deskPlayer.getChildByName("Node_head_" + _i3);
                  if (playerInfo && betInfo.Uid == playerInfo.Uid && Node_root) {
                    this.doSendChip(betInfo.Pos, betInfo.Amount, Node_root);
                    break;
                  }
                }
                break;
              }
            case eProto.sendCards:
              {
                this.doEnd();
                AndarBaharModel.instance.history.unshift({
                  ShowCard: AndarBaharModel.instance.ShowCard,
                  SendCount: AndarBaharModel.instance.SendCards.length
                });
                break;
              }
            case eProto.open:
              {
                break;
              }
            case eProto.prize:
              {
                this.showResult();
                break;
              }
            case eProto.HD_leave:
              {
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }

            // case AndarBaharDef.eProto.HD_UpdatePlayerNum: {
            //     this.onUpdatePlayerNum();
            //     break;
            // }
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
                AndarBaharModel.instance.myBetList["" + data.Pos] = AndarBaharModel.instance.myBetList["" + data.Pos] || 0;
                AndarBaharModel.instance.myBetList["" + data.Pos] += data.Amount;
                this.doSendChip(data.Pos, data.Amount);
                this.scheduleOnce(function () {
                  AndarBaharUtils.instance.playSound(eSound.bet);
                }, 0.3);
                AndarBaharModel.instance.curBalance -= data.Amount;
                this.updateGold();
                if (AndarBaharModel.instance.gameStatus == eStatus.bet) {
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
        return AndarBaharGameView;
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
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_public", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Node_deskPlayer", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_betArea", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "betChip", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Button_chip", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "pathContent", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "pathItem", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "arrItemBg", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "arrItemBg_big", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Label_history_0", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Label_history_1", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Node_record", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "cm_light", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Node_btnGroup", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameChip", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameChip_big", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "gameTip", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "star", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "Node_star", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Node_chipTag", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardLest", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardRight", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "Node_newLeft", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "Node_newRight", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "Node_endLight_blue", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "Node_endLight_red", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardItem", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "Node_openCard", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "Label_sendCounts", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "ghostEffect", [_dec48], {
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

System.register("chunks:///_virtual/AndarBaharModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AndarBaharDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "de692Ho4bNAvJJr1A9qCDmp", "AndarBaharModel", undefined);
      var AndarBaharModel = exports('AndarBaharModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(AndarBaharModel, _GameDef$BaseSington);
        function AndarBaharModel() {
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
          _this.myBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          _this.totalBetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          _this.myBetListBack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          _this.PosMaxBet = null;
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
          /////////////////////////////////////////
          //    //聊天列表-文本
          _this._chatQueueList = [];
          //    //聊天列表-表情
          _this._expressionQueueList = [];
          return _this;
        }
        var _proto = AndarBaharModel.prototype;
        _proto.clearGameData = function clearGameData() {};
        _createClass(AndarBaharModel, [{
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
        return AndarBaharModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AndarBaharScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './AndarBaharDef.ts', './AndarBaharUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, sys, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, AndarBaharUtils, Common;
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
      AndarBaharUtils = module.AndarBaharUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "f099bT7ublMdLE7D7LZ7bjY", "AndarBaharScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var AndarBaharScene = exports('default', (_dec = ccclass("AndarBaharScene"), _dec2 = menu("game/AndarBaharGame/AndarBaharScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AndarBaharScene, _Component);
        function AndarBaharScene() {
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
        var _proto = AndarBaharScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          AndarBaharUtils.instance.bundle = assetManager.getBundle(cBundle);
          AndarBaharUtils.instance.preLoad();
          AndarBaharUtils.instance.playBgMusic();
          this.onLoadGame();
        };
        _proto.start = function start() {
          Common.showWait();
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
            AndarBaharUtils.instance.bundle.load("prefab/AndarBaharGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
        return AndarBaharScene;
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

System.register("chunks:///_virtual/AndarBaharUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './AndarBaharDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, GameDef, AudioManager, eSound, strColor, strValue, Common;
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
    }],
    execute: function () {
      cclegacy._RF.push({}, "8080crLniBKTJ06fsDgwMcq", "AndarBaharUtils", undefined);
      var AndarBaharUtils = exports('AndarBaharUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(AndarBaharUtils, _GameDef$BaseSington);
        function AndarBaharUtils() {
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
        var _proto = AndarBaharUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/AndarBaharGameView");
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

          //        // AndarBaharUtils.instance.playSound(AndarBaharDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // AndarBaharUtils.instance.stopSound(AndarBaharDef.eSound.numAdd);
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

          //        // AndarBaharUtils.instance.playSound(AndarBaharDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // AndarBaharUtils.instance.stopSound(AndarBaharDef.eSound.numAdd);
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

          //        // AndarBaharUtils.instance.playSound(AndarBaharDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // AndarBaharUtils.instance.stopSound(AndarBaharDef.eSound.numAdd);

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

        _proto.getCardFrame = function getCardFrame(cardData) {
          var value = cardData % 13;
          var color = Math.floor(cardData / 13);
          var strFrame = "" + strColor[color] + strValue[value];
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
        //     //     case AndarBaharDef.eSymbol.NONE: {
        //     //         let index = Math.floor(Math.random() * (symbol_aniName.length - 3) + 3);
        //     //         strAni.push(`${symbol_aniName[index]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     //     case AndarBaharDef.eSymbol.SCATTER: {
        //     //         if (isIdle) {
        //     //             strAni.push(`free_idle`);
        //     //         } else {
        //     //             strAni.push(`free_intro`);
        //     //             strAni.push(`free_intro`);
        //     //         }
        //     //         break;
        //     //     }
        //     //     case AndarBaharDef.eSymbol.SpecialWild: {
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

        return AndarBaharUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/AndarBaharGame', 'chunks:///_virtual/AndarBaharGame'); 
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