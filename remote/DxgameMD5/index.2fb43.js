System.register("chunks:///_virtual/DxgameMD5", ['./DxMD5DetailLayer.ts', './DxMD5GameButtonAndChat.ts', './DxMD5Hand.ts', './DxMD5HelpLayer.ts', './DxMD5HistoryLayer.ts', './DxMD5Item.ts', './DxMD5Layer.ts', './DxMD5Proxy.ts', './DxMD5RecordLayer.ts', './DxMD5RoomItem.ts', './DxMD5RoomList.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/DxMD5DetailLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ConfigManager.ts', './NetManager.ts', './ViewManager.ts', './PlatformMgr.ts', './DxMD5HelpLayer.ts', './DxMD5Proxy.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, instantiate, find, sp, isValid, Component, SpriteFrame, Sprite, i18n, ConfigManager, NetManager, ViewManager, PlatformMgr, DxMD5HelpLayer, DxMD5Proxy, Common;
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
      instantiate = module.instantiate;
      find = module.find;
      sp = module.sp;
      isValid = module.isValid;
      Component = module.Component;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      PlatformMgr = module.default;
    }, function (module) {
      DxMD5HelpLayer = module.default;
    }, function (module) {
      DxMD5Proxy = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "ab293cEgzBN+LbdYIsjBn+L", "DxMD5DetailLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Limit = 8;
      var eBSTag = {
        small: 0,
        big: 1
      };
      var DxMD5DetailLayer = exports('default', (_dec = ccclass("DxMD5DetailLayer"), _dec2 = menu("game/dxmd5/DxMD5DetailLayer"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxMD5DetailLayer, _Component);
        function DxMD5DetailLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_big", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_small", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5Origin", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalBig", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalSmall", _descriptor6, _assertThisInitialized(_this));
          _this._curRoomid = 0;
          _this._curBigPage = 0;
          _this._curSmallPage = 0;
          _this._detailsData = void 0;
          _this._requestVersion = 0;
          return _this;
        }
        var _proto = DxMD5DetailLayer.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.requestDetails(this._curRoomid);
          ViewManager.instance.adeptPopGameSize(this.node, 1, 0.675);
        };
        _proto.onClickCopyMD5 = function onClickCopyMD5() {
          var str = this._detailsData.BigSmall.Ciphertext;
          if (str && str.length > 0) {
            PlatformMgr.p.copyToClipBoard(str);
          }
        };
        _proto.onClickCopyMD5Origin = function onClickCopyMD5Origin() {
          var str = this._detailsData.BigSmall.Original;
          if (str && str.length > 0) {
            PlatformMgr.p.copyToClipBoard(str);
          }
        };
        _proto.onClickRule = function onClickRule() {
          Common.loadPopBuddle("prefab/DxMD5help", DxMD5Proxy.bundle, function () {}, function (dxPathList) {
            var rule = instantiate(dxPathList);
            ViewManager.instance.popNodeView(rule, true);
            rule.getComponent(DxMD5HelpLayer).changeToRule();
          }, true);
        };
        _proto.onBefore = function onBefore() {
          //        //上一页
          this.requestDetails(this._curRoomid - 1);
        };
        _proto.onNext = function onNext() {
          this.requestDetails(this._curRoomid + 1);
        };
        _proto.changePageBigDetails = function changePageBigDetails(event, data) {
          if (data == "next") {
            this.requestDetails(this._curRoomid, eBSTag.big, this._curBigPage + 1);
          } else {
            if (this._curBigPage <= 1) {
              return;
            }
            this.requestDetails(this._curRoomid, eBSTag.big, this._curBigPage - 1);
          }
        };
        _proto.changePageSmallDetails = function changePageSmallDetails(event, data) {
          if (data == "next") {
            this.requestDetails(this._curRoomid, eBSTag.small, this._curSmallPage + 1);
          } else {
            if (this._curSmallPage <= 1) {
              return;
            }
            this.requestDetails(this._curRoomid, eBSTag.small, this._curSmallPage - 1);
          }
        }
        //    // update (dt) {}
        ;

        _proto.showDetailsView = function showDetailsView() {
          var _this2 = this;
          var redata = this._detailsData;
          if (redata.BigSmall.Dice1 == 0 && redata.BetBigList.length == 0 && redata.BetSmallList.length == 0) {
            Common.showTip(i18n.t("10010"));
            return;
          }
          if (redata.BigSmall.Dice1 != 0) {
            var bigLayer = this.node_big;
            var smallLayer = this.node_small;
            var publicLayer = find("bg/publicLayer", this.node);
            this._curRoomid = redata.BigSmall.ShowId;
            this.txt_md5.string = redata.BigSmall.Ciphertext;
            this.txt_md5Origin.string = redata.BigSmall.Original;
            this.txt_totalBig.string = Common.ChangeMoneyShow(redata.BigSmall.BetBig, 2);
            this.txt_totalSmall.string = Common.ChangeMoneyShow(redata.BigSmall.BetSmall, 2);
            publicLayer.getChildByName("room_id").getComponent(Label).string = Common.setGameNo(redata.BigSmall.ShowId);
            var date = Common.getTimeFormat(redata.BigSmall.CreateAt);
            publicLayer.getChildByName("time").getComponent(Label).string = date.time;
            publicLayer.getChildByName("label_result").getComponent(Label).string = redata.BigSmall.Dice1 + redata.BigSmall.Dice2 + redata.BigSmall.Dice3 + "";
            smallLayer.getChildByName("people_bg").getChildByName("people_num").getComponent(Label).string = redata.BigSmall.BetSmallCount + "";
            bigLayer.getChildByName("people_bg").getChildByName("people_num").getComponent(Label).string = redata.BigSmall.BetBigCount + "";
            smallLayer.getChildByName("small_image").active = redata.BigSmall.Result == 2;
            bigLayer.getChildByName("big_image").active = redata.BigSmall.Result == 1;
            if (redata.BigSmall.Result == 1) {
              smallLayer.getChildByName("small_ani").active = true;
              smallLayer.getChildByName("small_ani").getComponent(sp.Skeleton).setAnimation(0, "xiu_1", true);
              bigLayer.getChildByName("big_ani").active = false;
            } else {
              bigLayer.getChildByName("big_ani").active = true;
              bigLayer.getChildByName("big_ani").getComponent(sp.Skeleton).setAnimation(0, "TAI_1", true);
              smallLayer.getChildByName("small_ani").active = false;
            }
            var _loop = function _loop() {
              var count = i;
              var dire = redata.BigSmall["Dice" + i];
              DxMD5Proxy.bundle.load("texture/" + dire + "/spriteFrame", SpriteFrame, function (err, DiceNum) {
                // 切换期号后，上一期的异步贴图不能覆盖当前骰子。
                if (err || !isValid(_this2) || _this2._detailsData !== redata) {
                  return;
                }
                publicLayer.getChildByName("sa" + count).getComponent(Sprite).spriteFrame = DiceNum;
              });
            };
            for (var i = 1; i < 4; i++) {
              _loop();
            }
            for (var _i = 0; _i < Limit; _i++) {
              bigLayer.getChildByName("item" + (_i + 1)).active = false;
              smallLayer.getChildByName("item" + (_i + 1)).active = false;
            }
          }
        };
        _proto.showBigDetails = function showBigDetails(page, data) {
          var curData = this.getCurDataByPage(page, data);
          if (curData.length == 0) {
            return;
          }
          this._curBigPage = page;
          var bigLayer = this.node_big;
          for (var _i2 = 0; _i2 < Limit; _i2++) {
            bigLayer.getChildByName("item" + (_i2 + 1)).active = false;
          }
          bigLayer.getChildByName("page").getComponent(Label).string = this._curBigPage + "";
          for (var i = 0; i < curData.length; i++) {
            var item = bigLayer.getChildByName("item" + (i + 1));
            item.active = true;
            var datatt = curData[i].CreateAt;
            item.getChildByName("time_scond").getComponent(Label).string = Common.getTimeFormat(datatt).time;
            item.getChildByName("winNum").getComponent(Label).string = curData[i].Name;
            item.getChildByName("touzhu_num").getComponent(Label).string = Common.ChangeMoneyShow(curData[i].BetAmount, 2) + "";
          }
        };
        _proto.showSmallDetails = function showSmallDetails(page, data) {
          var curData = this.getCurDataByPage(page, data);
          if (curData.length == 0) {
            return;
          }
          this._curSmallPage = page;
          var smallLayer = this.node_small;
          for (var i = 0; i < Limit; i++) {
            smallLayer.getChildByName("item" + (i + 1)).active = false;
          }
          smallLayer.getChildByName("page").getComponent(Label).string = this._curSmallPage + "";
          for (var i = 0; i < curData.length; i++) {
            var item = smallLayer.getChildByName("item" + (i + 1));
            item.active = true;
            var datatt = curData[i].CreateAt;
            item.getChildByName("time_scond").getComponent(Label).string = Common.getTimeFormat(datatt).time;
            item.getChildByName("winNum").getComponent(Label).string = curData[i].Name;
            item.getChildByName("touzhu_num").getComponent(Label).string = Common.ChangeMoneyShow(curData[i].BetAmount, 2) + "";
          }
        };
        _proto.getCurDataByPage = function getCurDataByPage(page, data) {
          return data.slice(0, Limit);
        };
        _proto.recvData = function recvData(data, pos, page) {
          if (page === void 0) {
            page = 1;
          }
          if (!data || data.Code != 0 || !data.Data) {
            return;
          }
          var redata = data.Data;
          if (pos === undefined) {
            this._detailsData = data.Data;
            this._curBigPage = 1;
            this._curSmallPage = 1;
            this.showDetailsView();
          }
          // 单侧翻页只更新该侧；空页保留原页码和内容。
          if (pos !== eBSTag.small && redata.BetBigList.length > 0) {
            this.showBigDetails(page, redata.BetBigList);
          }
          if (pos !== eBSTag.big && redata.BetSmallList.length > 0) {
            this.showSmallDetails(page, redata.BetSmallList);
          }
        };
        _proto.requestDetails = function requestDetails(roomID, pos, page, limit) {
          var _this3 = this;
          if (limit === void 0) {
            limit = Limit;
          }
          var version = ++this._requestVersion;
          var requestedPage = page || 1;
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.details, {
            gameId: roomID,
            pos: pos,
            //> 0 ? "big" : "small",
            page: requestedPage - 1,
            limit: limit
          }, function (data) {
            // 回复绑定本次请求的方向和页码；快速翻页、关闭后的旧回复不再更新界面。
            if (version === _this3._requestVersion && isValid(_this3)) {
              _this3.recvData(data, pos, requestedPage);
            }
            return false;
          });
        };
        _proto.onDisable = function onDisable() {
          this._requestVersion++;
        };
        return DxMD5DetailLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_big", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_small", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5Origin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalBig", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalSmall", [_dec8], {
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

System.register("chunks:///_virtual/DxMD5GameButtonAndChat.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './ConfigManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './PlatformMgr.ts', './BlackWordProxy.ts', './ChatProxy.ts', './DxMD5Proxy.ts', './Common.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, Label, sp, ScrollView, find, EditBox, UITransform, Layout, tween, instantiate, RichText, Component, Sprite, director, Button, v3, UIOpacity, assetManager, SpriteFrame, i18n, ProxyMgr, GUtil, ConfigManager, DataManager, UserKey, NetManager, ViewManager, PlatformMgr, BlackWordProxy, ChatProxy, ChatProxyEvent, DxMD5Proxy, DxMD5Event, PreBetType, Common, EventManager;
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
      Label = module.Label;
      sp = module.sp;
      ScrollView = module.ScrollView;
      find = module.find;
      EditBox = module.EditBox;
      UITransform = module.UITransform;
      Layout = module.Layout;
      tween = module.tween;
      instantiate = module.instantiate;
      RichText = module.RichText;
      Component = module.Component;
      Sprite = module.Sprite;
      director = module.director;
      Button = module.Button;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      PlatformMgr = module.default;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      ChatProxy = module.default;
      ChatProxyEvent = module.ChatProxyEvent;
    }, function (module) {
      DxMD5Proxy = module.default;
      DxMD5Event = module.DxMD5Event;
      PreBetType = module.PreBetType;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "fe4ab1Cd71PvYVGS4UjPe2R", "DxMD5GameButtonAndChat", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxMD5GameButtonAndChat = exports('default', (_dec = ccclass("DxMD5GameButtonAndChat"), _dec2 = menu("game/dxmd5/DxMD5GameButtonAndChat"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(sp.Skeleton), _dec13 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxMD5GameButtonAndChat, _Component);
        function DxMD5GameButtonAndChat() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_handsup", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_handsupCancel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chat", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_room", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_chatContent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "NodePop", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_topMsg", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betLayer", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipAni", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "button_room_light", _descriptor11, _assertThisInitialized(_this));
          _this._chatData = [];
          return _this;
        }
        var _proto = DxMD5GameButtonAndChat.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onClickClose = function onClickClose() {
          ViewManager.instance.closePopGame(DxMD5Proxy.BUNDLE);
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.leave, {});
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          ChatProxy.joinChat("bigSmallMD5");
          ChatProxy.getRecord("bigSmallMD5");
          ChatProxy.on(ChatProxyEvent.UPDATE_RECORD, function (data) {
            if (data.msg.GroupId != "bigSmallMD5") {
              return;
            }
            if (data.msgList != null) {
              _this2._chatData = data.msgList;
              if (_this2._chatData.length > 0) {
                _this2.creatChat();
              }
            }
            if (data.topMsg != null) {
              _this2.updateChat(data.topMsg);
            } else {
              _this2.Node_topMsg.active = false;
            }
          }, this);
          ChatProxy.on(ChatProxyEvent.RECV_MSG, function (data) {
            if (data.msg.GroupId != "bigSmallMD5") {
              return;
            }
            _this2.updateChat(data.msg);
          }, this);
          var chatLayer = this.node_chat;
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          scollview_content.content.on(Node.EventType.SIZE_CHANGED, this.onNodeEventSizeChange, this);
          EventManager.instance.on(ConfigManager.instance.eventTransform.onEmojiClick + "bigSmallMD5", function (GradeCode, emoji, isImg, imgData) {
            if (isImg === void 0) {
              isImg = false;
            }
            if (imgData === void 0) {
              imgData = null;
            }
            if (isImg) {
              if (imgData) {
                var updateChat = function updateChat(strImg) {
                  var chatLayer = _this2.node_chat;
                  var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
                  if (scollview_content.content.children.length > 20) {
                    scollview_content.content.children[0].destroyFromParent();
                  }
                  var item = instantiate(_this2.Node_chatContent);
                  item.active = true;
                  var rext = item.getChildByName("richText").getComponent(RichText);
                  rext.node.active = true;
                  var Node_imgRoot = item.getChildByName("Node_imgRoot");
                  Node_imgRoot.active = true;
                  if (Node_imgRoot.active) {
                    var Sprite_img = Node_imgRoot.getChildByName("Sprite_img_0");
                    Sprite_img.active = true;
                    if (Sprite_img.active) {
                      //                                    //添加图片
                      Sprite_img.on("click", function (event) {
                        var spriteFrame = event.node.getComponent(Sprite).spriteFrame;
                        var newPop = instantiate(_this2.NodePop);
                        newPop.active = true;
                        director.getScene().getChildByName("Canvas").addChild(newPop);
                        newPop.getComponent(UITransform).priority = 100000;
                        var onPopClose = function onPopClose(popNode) {
                          tween(popNode).to(0.05, {
                            scale: v3(1.2, 1.2, 1)
                          }).to(0.1, {
                            scale: v3(0.25, 0.25, 1)
                          }).call(function () {
                            popNode.destroyFromParent();
                          }).start();
                        };
                        var btnClose = find("Sprite_icon/Button_close", newPop);
                        btnClose.on("click", function () {
                          onPopClose(newPop);
                        }, _this2);
                        var mask = find("mask", newPop);
                        mask.on(Node.EventType.TOUCH_END, function () {
                          onPopClose(newPop);
                        }, _this2);
                        var Sprite_icon = find("Sprite_icon", newPop);
                        Sprite_icon.removeComponent(Button);
                        Sprite_icon.getComponent(Sprite).spriteFrame = spriteFrame;
                        Sprite_icon.scale = v3(0.25, 0.25, 1);
                        Sprite_icon.getComponent(UIOpacity).opacity = 0;
                        var maxH = 550;
                        if (Sprite_icon.getComponent(UITransform).height > maxH) {
                          Sprite_icon.getComponent(UITransform).width = Sprite_icon.getComponent(UITransform).width * maxH / Sprite_icon.getComponent(UITransform).height;
                          Sprite_icon.getComponent(UITransform).height = maxH;
                        }
                        newPop.active = true;
                        var Label_content = find("Sprite_icon/Label_content", newPop);
                        Label_content.active = rext.node.active;
                        if (Label_content.active) {
                          Label_content.getComponent(RichText).string = rext.string;
                        }
                        tween(Sprite_icon).to(0.3, {
                          scale: v3(1.2, 1.2, 1)
                        }).to(0.1, {
                          scale: v3(1.0, 1.0, 1)
                        }).start();
                        tween(Sprite_icon.getComponent(UIOpacity)).to(0.3, {
                          opacity: 255
                        }).start();
                      }, _this2);

                      // const img = new Image();
                      // img.src = strImg;
                      // img.onload = () => {
                      //     let texture: cc.Texture2D = new cc.Texture2D();
                      //     texture.initWithElement(img);

                      //     if (Sprite_img && cc.isValid(Sprite_img)) {
                      //         Sprite_img.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                      //     }
                      // };

                      assetManager.loadRemote(strImg, {
                        ext: ".png"
                      }, function (err, tex) {
                        if (!err && tex) {
                          var spriteFrame = DataManager.instance.loadRemoteMap[strImg];
                          if (!spriteFrame) {
                            DataManager.instance.loadRemoteMap[strImg] = SpriteFrame.createWithImage(tex);
                            spriteFrame = DataManager.instance.loadRemoteMap[strImg];
                          }

                          // spriteFrame.texture = tex;
                          Sprite_img.getComponent(Sprite).spriteFrame = spriteFrame;
                          // tex.packable = false;
                        }
                      });
                    }
                  }

                  //                            //添加文本
                  item.getComponent(UITransform).width = 380;
                  Node_imgRoot.getComponent(UITransform).width = 340;
                  rext.maxWidth = 380;
                  var imgTag = "<img src=\"icon_V" + GradeCode + "\"/>"; //`<img src="icon_guanliyuan"/>`;
                  //                            // let imgTag = ``;

                  var myNickName = DataManager.instance.getUserDataForKey(UserKey.NICKNAME);
                  if (myNickName.length > 6) {
                    myNickName = myNickName.substring(0, 3) + "***" + myNickName.substring(myNickName.length - 3);
                  }
                  rext.string = imgTag + " <color=\"#8fff44\">" + myNickName + ":</c><color=#ffffff></color>";
                  scollview_content.content.addChild(item);
                  scollview_content.scrollToBottom();
                };
                updateChat(imgData);
              } else if (emoji) {
                var date = new Date();
                var msgid = DataManager.instance.getUserDataForKey(UserKey.OID) + date.getTime() + "";
                ChatProxy.sendChat({
                  groupId: "bigSmallMD5",
                  content: emoji,
                  //url
                  msgId: msgid,
                  msgType: 10
                });
              }
              return;
            }
            var boxchat = find("Node_root/chat_bg/chat_box", _this2.node).getComponent(EditBox);
            boxchat.string = "" + boxchat.string + emoji;
          }, this);
        };
        _proto.onNodeEventSizeChange = function onNodeEventSizeChange() {
          var chatLayer = this.node_chat;
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          if (scollview_content.content.getComponent(UITransform).height > scollview_content.node.getComponent(UITransform).height) {
            scollview_content.scrollToBottom(0.2);
          }
        };
        _proto.onDisable = function onDisable() {
          ChatProxy.exitChat("bigSmallMD5");
          ProxyMgr.close(this);
          var chatLayer = this.node_chat;
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          scollview_content.content.off(Node.EventType.SIZE_CHANGED, this.onNodeEventSizeChange, this);
          EventManager.instance.off(ConfigManager.instance.eventTransform.onEmojiClick + "bigSmallMD5");
        };
        _proto.onClickRank = function onClickRank() {
          GUtil.openRank("bigSmallMD5");
        };
        _proto.onClickChat = function onClickChat() {
          var rootLayout = find("Node_root", this.node).getComponent(Layout);
          rootLayout.enabled = true;
          tween(rootLayout).delay(0.2).call(function () {
            rootLayout.enabled = false;
          }).start();
          this.node_chat.active = !this.node_chat.active;
          if (this.node_chat.active) {
            ChatProxy.getRecord("bigSmallMD5");
          }
        };
        _proto.onClickRoom = function onClickRoom() {
          var rootLayout = find("Node_root", this.node).getComponent(Layout);
          rootLayout.enabled = true;
          tween(rootLayout).delay(0.2).call(function () {
            rootLayout.enabled = false;
          }).start();
          this.Node_room.active = !this.Node_room.active;
          if (!this.Node_room.active) {
            this.button_room_light.setAnimation(0, "intro", false);
            this.button_room_light.addAnimation(0, "idle", true);
          }
        };
        _proto.onClickHandsUp = function onClickHandsUp() {
          this.node_handsup.active = false;
          this.node_handsupCancel.active = true;
          DxMD5Proxy.handsup = true;
          DxMD5Proxy.emit(DxMD5Event.HANDSUP);
        };
        _proto.onClickHandsUpCancel = function onClickHandsUpCancel() {
          this.node_handsup.active = true;
          this.node_handsupCancel.active = false;
          DxMD5Proxy.handsup = false;
          DxMD5Proxy.emit(DxMD5Event.HANDSUP);
        };
        _proto.onClickCopy = function onClickCopy() {
          PlatformMgr.p.copyToClipBoard(this.txt_md5.string);
        }
        //    //历史走势
        ;

        _proto.onClickHistory = function onClickHistory() {
          Common.loadPopBuddle("prefab/DxMD5PathList", DxMD5Proxy.bundle, function () {}, function (dxPathList) {
            var dxPathListLayer = instantiate(dxPathList);
            ViewManager.instance.popNodeView(dxPathListLayer, true);
          }, true);
        };
        _proto.onClickRule = function onClickRule() {
          Common.loadPopBuddle("prefab/DxMD5help", DxMD5Proxy.bundle, function () {}, function (dxPathList) {
            var dxPathListLayer = instantiate(dxPathList);
            ViewManager.instance.popNodeView(dxPathListLayer, true);
          }, true);
        }
        //    //历史详情
        ;

        _proto.onClickDetail = function onClickDetail() {
          Common.loadPopBuddle("prefab/DxMD5Details", DxMD5Proxy.bundle, function () {}, function (dxPathList) {
            var dxPathListLayer = instantiate(dxPathList);
            ViewManager.instance.popNodeView(dxPathListLayer, true);
          }, true);
        }
        //    //下注记录
        ;

        _proto.onClickRecord = function onClickRecord() {
          //        // Common.loadPopBuddle(
          //        //     "prefab/DxMD5RecordLayer",
          //        //     DxMD5Proxy.bundle,
          //        //     () => {},
          //        //     (dxPathList) => {
          //        //         let dxPathListLayer = cc.instantiate(dxPathList);
          //        //         ViewManager.instance.popNodeView(dxPathListLayer, true);
          //        //     },
          //        //     true
          //        // );

          GUtil.openRecord("bigSmallMD5");
        }
        //    //下注金额
        ;

        _proto.onClickBet = function onClickBet(sender, data) {
          DxMD5Proxy.addPreAmount(parseInt(data));
        };
        _proto.onClickPreBetBig = function onClickPreBetBig() {
          this.node_betLayer.active = true;
          DxMD5Proxy.preBig();
        };
        _proto.onClickPreBetSmall = function onClickPreBetSmall() {
          this.node_betLayer.active = true;
          DxMD5Proxy.preSmall();
        };
        _proto.onClickSure = function onClickSure() {
          if (!DxMD5Proxy.serverId) {
            return;
          }
          //        //3秒锁定
          var time = Math.floor(DxMD5Proxy.timeLeft);
          if (time <= 3) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          if (DxMD5Proxy.preBetCount == 0) {
            //            // Common.showTip(i18n.lang.chooseGold);

            this.tipAni.setAnimation(0, "1", false);
            return;
          }
          DataManager.instance.isChangeGold = true;
          var isBig = DxMD5Proxy.preBetBig;
          NetManager.instance.sendOnlineData(DxMD5Proxy.serverId + "/HD_play", {
            action: "Bet",
            big: isBig === PreBetType.BIG ? DxMD5Proxy.preBetCount : 0,
            small: isBig === PreBetType.SMALL ? DxMD5Proxy.preBetCount : 0
          });
          DxMD5Proxy.preBetCount = 0;
        };
        _proto.onClickDouble = function onClickDouble() {
          var bet = 0;
          if (DxMD5Proxy.preBetCount > 0) {
            bet = DxMD5Proxy.preBetCount;
          } else if (DxMD5Proxy.hasBet > 0) {
            bet = DxMD5Proxy.hasBet;
          } else if (DxMD5Proxy.lastBet > 0) {
            bet = DxMD5Proxy.lastBet;
          } else {
            Common.showTip(i18n.lang.chooseGold);
            return;
          }
          DxMD5Proxy.addPreAmount(bet);
        };
        _proto.onClickCancel = function onClickCancel() {
          //        // this.node_betLayer.active = false;
          DxMD5Proxy.resetPreAmount();
        }
        //    // ------------------- 聊天 ---------------------------
        ;

        _proto.onClickCloseChat = function onClickCloseChat() {
          this.node_chat.active = false;
          var rootLayout = find("Node_root", this.node).getComponent(Layout);
          rootLayout.enabled = true;
          tween(rootLayout).delay(0.2).call(function () {
            rootLayout.enabled = false;
          }).start();
        };
        _proto.onClickSendChat = function onClickSendChat() {
          var boxchat = find("Node_root/chat_bg/chat_box", this.node).getComponent(EditBox);
          this.scheduleOnce(function () {
            boxchat.focus();
          }, 0.1);
          var chatContent = Common.formatInputContent(boxchat.string);
          if (chatContent.length == 0) return;
          boxchat.string = "";
          var code = Common.judgeInputContent(chatContent);
          var userMoney = parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          if (code != 0) {
            var str = "";
            if (code == -1 || code == 1) {
              str = i18n.lang.chatErr1;
            } else if (code == 2) {
              str = i18n.lang.chatErr2;
            }
            var chadata = {
              Content: "",
              Err: true
            };
            chadata.Content = str;
            this.updateChat(chadata);
            return;
          }
          var date = new Date();
          var msgid = DataManager.instance.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          ChatProxy.sendChat({
            groupId: "bigSmallMD5",
            content: chatContent,
            msgType: 1,
            msgId: msgid
          });
        };
        _proto.updateChat = function updateChat(data) {
          var _this3 = this;
          var objContent = Common.getChatContent(data.Content, data.MsgType == 10);
          if (data.MsgType == 3) {
            //            //置顶消息
            this.Node_topMsg.active = true;
            EventManager.instance.emit(ConfigManager.instance.eventTransform.onChatTopMsg + "bigSmallMD5", objContent);
            return;
          }
          if (data.isCancelTop && this.Node_topMsg.active) {
            this.Node_topMsg.active = false;
            return;
          }
          var chatLayer = this.node_chat;
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          if (scollview_content.content.children.length > 20) {
            scollview_content.content.children[0].destroyFromParent();
          }
          var item = instantiate(this.Node_chatContent);
          item.active = true;
          item.parent = scollview_content.content;
          var rext = item.getChildByName("richText").getComponent(RichText);
          rext.node.active = true;
          var Node_imgRoot = item.getChildByName("Node_imgRoot");
          Node_imgRoot.active = objContent.img != null;
          if (Node_imgRoot.active) {
            var addImg = function addImg(Sprite_img, imgUrl) {
              Sprite_img.active = imgUrl != null;
              if (Sprite_img.active) {
                //                    //添加图片
                Sprite_img.on("click", function (event) {
                  var spriteFrame = event.node.getComponent(Sprite).spriteFrame;
                  var newPop = instantiate(_this3.NodePop);
                  newPop.active = true;
                  director.getScene().getChildByName("Canvas").addChild(newPop);
                  newPop.getComponent(UITransform).priority = 100000;
                  var onPopClose = function onPopClose(popNode) {
                    tween(popNode).to(0.05, {
                      scale: v3(1.2, 1.2, 1)
                    }).to(0.1, {
                      scale: v3(0.25, 0.25, 1)
                    }).call(function () {
                      popNode.destroyFromParent();
                    }).start();
                  };
                  var btnClose = find("Sprite_icon/Button_close", newPop);
                  btnClose.on("click", function () {
                    onPopClose(newPop);
                  }, _this3);
                  var mask = find("mask", newPop);
                  mask.on(Node.EventType.TOUCH_END, function () {
                    onPopClose(newPop);
                  }, _this3);
                  var Sprite_icon = find("Sprite_icon", newPop);
                  Sprite_icon.removeComponent(Button);
                  Sprite_icon.getComponent(Sprite).spriteFrame = spriteFrame;
                  Sprite_icon.scale = v3(0.25, 0.25, 1);
                  Sprite_icon.getComponent(UIOpacity).opacity = 0;
                  var maxH = 650;
                  if (Sprite_icon.getComponent(UITransform).height > maxH) {
                    Sprite_icon.getComponent(UITransform).width = Sprite_icon.getComponent(UITransform).width * maxH / Sprite_icon.getComponent(UITransform).height;
                    Sprite_icon.getComponent(UITransform).height = maxH;
                  }
                  newPop.active = true;
                  var Label_content = find("Sprite_icon/Label_content", newPop);
                  Label_content.active = rext.node.active;
                  if (Label_content.active) {
                    Label_content.getComponent(RichText).string = rext.string;
                  }
                  tween(Sprite_icon).to(0.3, {
                    scale: v3(1.2, 1.2, 1)
                  }).to(0.1, {
                    scale: v3(1, 1, 1)
                  }).start();
                  tween(Sprite_icon.getComponent(UIOpacity)).to(0.3, {
                    opacity: 255
                  }).start();
                }, _this3);
                // cc.assetManager.loadRemote(imgUrl, { ext: ".png" }, (err, tex: cc.Texture2D) => {
                //     if (!err && tex) {
                //         tex.packable = false;

                //         if (Sprite_img && cc.isValid(Sprite_img)) {
                //             Sprite_img.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
                //         }
                //     }
                // });

                assetManager.loadRemote(imgUrl, {
                  ext: ".png"
                }, function (err, tex) {
                  if (!err && tex) {
                    var spriteFrame = DataManager.instance.loadRemoteMap[imgUrl];
                    if (!spriteFrame) {
                      DataManager.instance.loadRemoteMap[imgUrl] = SpriteFrame.createWithImage(tex);
                      spriteFrame = DataManager.instance.loadRemoteMap[imgUrl];
                    }
                    // spriteFrame.texture = tex;
                    Sprite_img.getComponent(Sprite).spriteFrame = spriteFrame;
                    // tex.packable = false;
                  }
                });
              }
            };

            var Sprite_imgTemp = Node_imgRoot.getChildByName("Sprite_img_0");
            for (var i = 0; i < objContent.img.length; i++) {
              var Sprite_img = Node_imgRoot.getChildByName("Sprite_img_" + i);
              if (!Sprite_img) {
                Sprite_img = instantiate(Sprite_imgTemp);
                Sprite_img.name = "Sprite_img_" + i;
                Node_imgRoot.addChild(Sprite_img);
              }
              Sprite_img.active = true;
              addImg(Sprite_img, objContent.img[i]);
            }
            if (Node_imgRoot.children.length > objContent.img.length) {
              for (var _i = objContent.img.length; _i < Node_imgRoot.children.length; _i++) {
                Node_imgRoot.children[_i].destroyFromParent();
              }
            }
          }

          //        //添加文本
          item.getComponent(UITransform).width = 490;
          Node_imgRoot.getComponent(UITransform).width = 511;
          rext.maxWidth = 490;
          data.Content = objContent.text ? BlackWordProxy.filter(objContent.text.toString()) : "";
          if (typeof data.Err != "undefined" && data.Err == true) {
            var str = data.Content;
            rext.string = "<color=#ff0000>" + str + "</color>";
          } else {
            var _myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
            var name = DataManager.instance.getUserDataForKey(UserKey.NICKNAME);
            var color = data.FromUserId == _myUid ? "#8fff44" : "#ff8644";
            var imgTag = "<img src=\"icon_V" + data.GradeCode + "\"/>";
            //            // let imgTag = ``;
            if (data.MsgType > 1) {
              color = "#00ff00";
              imgTag = "<img src=\"icon_guanliyuan\"/>";
            }
            if (name) rext.string = imgTag + " <color=" + color + ">" + data.FromUser + ":</c><color=#ffffff>" + data.Content + "</color>";
          }
        };
        _proto.creatChat = function creatChat() {
          var chatLayer = this.node_chat;
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          scollview_content.content.removeAllChildren();
          for (var i = this._chatData.length - 1; i >= 0; i--) {
            var data = this._chatData[i];
            if (data.MsgType == 3) {
              continue;
            }
            this.updateChat(data);
          }
          this.scheduleOnce(function () {
            scollview_content.scrollToBottom(0.2);
          });
        };
        return DxMD5GameButtonAndChat;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_handsup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_handsupCancel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_chat", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_room", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_chatContent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "NodePop", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_topMsg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_betLayer", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tipAni", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "button_room_light", [_dec13], {
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

System.register("chunks:///_virtual/DxMD5Hand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DxMD5Proxy.ts', './GUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Vec2, UITransform, BlockInputEvents, tween, v3, Component, DxMD5Proxy, DxMD5Event, GUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec2 = module.Vec2;
      UITransform = module.UITransform;
      BlockInputEvents = module.BlockInputEvents;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      DxMD5Proxy = module.default;
      DxMD5Event = module.DxMD5Event;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "0a174VcZL9HvbH6AT1jxVpN", "DxMD5Hand", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxMD5Hand = exports('default', (_dec = ccclass("DxMD5Hand"), _dec2 = menu("game/dxmd5/DxMD5Hand"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxMD5Hand, _Component);
        function DxMD5Hand() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._OrginX = 0;
          _this._OrginY = 0;
          _this._startx = 0;
          _this._starty = 0;
          return _this;
        }
        var _proto = DxMD5Hand.prototype;
        _proto.onLoad = function onLoad() {
          this._OrginX = this.node.getPosition().x;
          this._OrginY = this.node.getPosition().y;
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        };
        _proto.touchEnd = function touchEnd(event) {
          this._startx = 0;
          this._starty = 0;
        };
        _proto.touchMove = function touchMove(event) {
          if (DxMD5Proxy.lockResult) {
            return;
          }
          var worldPoint = event.getLocation();
          var stepx = worldPoint.x - this._startx;
          var stepy = worldPoint.y - this._starty;

          // this.node.getPosition().x = this._OrginX + stepx;
          // this.node.getPosition().y = this._OrginY + stepy;

          this.node.setPosition(this._OrginX + stepx, this._OrginY + stepy);
          var startPos = new Vec2(this._OrginX, this._OrginY);
          var endPos = new Vec2(this.node.getPosition().x, this.node.getPosition().y);
          var ss = GUtil.Distance(startPos.x, startPos.y, endPos.x, endPos.y);
          if (ss >= this.node.getComponent(UITransform).width * 3 / 4) {
            this.reset();
            DxMD5Proxy.emit(DxMD5Event.HANDSUP);
          }
        };
        _proto.reset = function reset() {
          this.node.active = false;
          // this.node.getPosition().x = this._OrginX;
          // this.node.getPosition().y = this._OrginY;
          this.node.setPosition(this._OrginX, this._OrginY);
          this._startx = 0;
          this._starty = 0;
          var blockInput = this.node.getComponent(BlockInputEvents);
          blockInput.enabled = false;
        };
        _proto.move = function move() {
          var _this2 = this;
          tween(this.node).to(0.5, {
            position: v3(200, 150)
          }).call(function () {
            _this2.reset();
          }).start();
        };
        _proto.touchStart = function touchStart(event) {
          //        // this.node.active=false;
          var worldPoint = event.getLocation();
          this._startx = worldPoint.x;
          this._starty = worldPoint.y;
          if (!DxMD5Proxy.lockResult && !DxMD5Proxy.handsup) {
            var blockInput = this.node.getComponent(BlockInputEvents);
            blockInput.enabled = true;
          }
        };
        _proto.onDisable = function onDisable() {
          this.node.setPosition(this._OrginX, this._OrginY);
          this._startx = 0;
          this._starty = 0;
        };
        _proto.start = function start() {};
        return DxMD5Hand;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxMD5HelpLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PlatformMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, PlatformMgr;
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
      Component = module.Component;
    }, function (module) {
      PlatformMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "81f5a8u4adLI6t/e1gshSs2", "DxMD5HelpLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxMD5HelpLayer = exports('default', (_dec = ccclass("DxMD5HelpLayer"), _dec2 = menu("game/dxmd5/DxMD5HelpLayer"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxMD5HelpLayer, _Component);
        function DxMD5HelpLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_rule", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_help", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DxMD5HelpLayer.prototype;
        _proto.onLoad = function onLoad() {
          this.changeToHelp();
        };
        _proto.onClickUrl = function onClickUrl() {
          PlatformMgr.p.openUrl("https://md5.services/");
        };
        _proto.onClickHelp = function onClickHelp() {
          this.changeToRule();
        };
        _proto.changeToRule = function changeToRule() {
          this.node_help.active = false;
          this.node_rule.active = true;
        };
        _proto.changeToHelp = function changeToHelp() {
          this.node_help.active = true;
          this.node_rule.active = false;
        };
        return DxMD5HelpLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_rule", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_help", [_dec4], {
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

System.register("chunks:///_virtual/DxMD5HistoryLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './ContentEx.ts', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, SpriteFrame, ScrollView, Node, find, UIOpacity, Label, instantiate, UITransform, Sprite, v2, Component, ConfigManager, EventManager, NetManager, ViewManager, Common, ContentEx, GUtil;
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
      SpriteFrame = module.SpriteFrame;
      ScrollView = module.ScrollView;
      Node = module.Node;
      find = module.find;
      UIOpacity = module.UIOpacity;
      Label = module.Label;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      v2 = module.v2;
      Component = module.Component;
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
      ContentEx = module.default;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "643d4KZkbNEvY7BbG/sNyxV", "DxMD5HistoryLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_ROW = 5;
      var DxMd5HistoryLayer = exports('default', (_dec = ccclass("DxMD5HistoryLayer"), _dec2 = menu("game/dxmd5/DxMd5HistoryLayer"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(ScrollView), _dec15 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxMd5HistoryLayer, _Component);
        function DxMd5HistoryLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "dItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xItem", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sa1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sa2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sa3", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jiantou", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian1", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian2", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian3", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian4", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian5", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll_his", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_hisItem", _descriptor13, _assertThisInitialized(_this));
          _this._curpage = 0;
          _this._curData = void 0;
          return _this;
        }
        var _proto = DxMd5HistoryLayer.prototype;
        _proto.onLoad = function onLoad() {
          var btnshow1 = find("bg/content_bg/layer1/btn_1show", this.node);
          var btnunshow1 = find("bg/content_bg/layer1/btn_1unshow", this.node);
          var btnshow2 = find("bg/content_bg/layer1/btn_2show", this.node);
          var btnunshow2 = find("bg/content_bg/layer1/btn_2unshow", this.node);
          var btnshow3 = find("bg/content_bg/layer1/btn_3show", this.node);
          var btnunshow3 = find("bg/content_bg/layer1/btn_3unshow", this.node);
          btnshow1.active = true;
          btnunshow1.active = false;
          btnshow2.active = true;
          btnunshow2.active = false;
          btnshow3.active = true;
          btnunshow3.active = false;
          this.showPathByIndex(null, "show1");
          this.showPathByIndex(null, "show2");
          this.showPathByIndex(null, "show3");
          ViewManager.instance.adeptPopGameSize(this.node, 1.1, 0.75);
          this.onArrow();
        };
        _proto.onEnable = function onEnable() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.history, {
            size: 100
          });
          EventManager.instance.on(ConfigManager.instance.protocolDxMD5.history, this.recvData, this);
        };
        _proto.showPathByIndex = function showPathByIndex(event, data) {
          var pathLayer1 = find("bg/content_bg/layer1/path_bg2/sa1Layer", this.node);
          var pathLayer2 = find("bg/content_bg/layer1/path_bg2/sa2Layer", this.node);
          var pathLayer3 = find("bg/content_bg/layer1/path_bg2/sa3Layer", this.node);
          var btnshow1 = find("bg/content_bg/layer1/btn_1show", this.node);
          var btnunshow1 = find("bg/content_bg/layer1/btn_1unshow", this.node);
          var btnshow2 = find("bg/content_bg/layer1/btn_2show", this.node);
          var btnunshow2 = find("bg/content_bg/layer1/btn_2unshow", this.node);
          var btnshow3 = find("bg/content_bg/layer1/btn_3show", this.node);
          var btnunshow3 = find("bg/content_bg/layer1/btn_3unshow", this.node);
          if (data == "show1") {
            btnshow1.active = true;
            btnunshow1.active = false;
            pathLayer1.getComponent(UIOpacity).opacity = 255;
          }
          if (data == "unshow1") {
            btnshow1.active = false;
            btnunshow1.active = true;
            pathLayer1.getComponent(UIOpacity).opacity = 0;
          }
          if (data == "show2") {
            btnshow2.active = true;
            btnunshow2.active = false;
            pathLayer2.getComponent(UIOpacity).opacity = 255;
          }
          if (data == "unshow2") {
            btnshow2.active = false;
            btnunshow2.active = true;
            pathLayer2.getComponent(UIOpacity).opacity = 0;
          }
          if (data == "show3") {
            btnshow3.active = true;
            btnunshow3.active = false;
            pathLayer3.getComponent(UIOpacity).opacity = 255;
          }
          if (data == "unshow3") {
            btnshow3.active = false;
            btnunshow3.active = true;
            pathLayer3.getComponent(UIOpacity).opacity = 0;
          }
        };
        _proto.drawPathList = function drawPathList() {
          if (this._curpage === 0) {
            this.drawPathLayer1();
          } else {
            this.drawPathLayer2();
          }
        };
        _proto.drawPathLayer1 = function drawPathLayer1() {
          var data = this._curData;
          var label_roomid = find("bg/content_bg/layer1/label_roomid", this.node);
          var label_zuixin = find("bg/content_bg/layer1/labe2", this.node);
          if (typeof data.Data.history == "undefined" || data.Data.history.length == 0) {
            label_roomid.getComponent(Label).string = "-";
            label_zuixin.getComponent(Label).string = "-";
            return;
          }
          var redata = data.Data.history;
          var Result = redata[0].Result == 1 ? "Xỉu" : "Tài";
          label_roomid.getComponent(Label).string = Common.setGameNo(redata[0].GameNo);
          label_zuixin.getComponent(Label).string = Result + " (" + redata[0].Dice1 + "-" + redata[0].Dice2 + "-" + redata[0].Dice3 + ")";
          var self = this;
          var tempI = null;
          var tempI1 = null;
          var tempI2 = null;
          var tempI3 = null;
          var pathlist1 = find("bg/content_bg/layer1/path_bg1", this.node);
          pathlist1.removeAllChildren();
          var p_layer1 = find("bg/content_bg/layer1/path_bg2/sa1Layer", this.node);
          var p_layer2 = find("bg/content_bg/layer1/path_bg2/sa2Layer", this.node);
          var p_layer3 = find("bg/content_bg/layer1/path_bg2/sa3Layer", this.node);
          p_layer1.removeAllChildren();
          p_layer2.removeAllChildren();
          p_layer3.removeAllChildren();
          for (var i = 0; i < 21; i++) {
            if (i >= redata.length) {
              break;
            }
            var count = i;
            var resultItem = redata[i].Result == 1 ? this.xItem : this.dItem;
            var itemL = instantiate(resultItem);
            pathlist1.addChild(itemL);
            var num = redata[count].Dice1 + redata[count].Dice2 + redata[count].Dice3;
            itemL.getChildByName("num").getComponent(Label).string = num + "";
            itemL.setPosition(self.getPositionByRC(21 - count, num, pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).x, self.getPositionByRC(21 - count, num, pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).y);
            if (tempI == null) {
              tempI = itemL;
            } else {
              self.drawLine(tempI, itemL, 0, false);
              tempI = itemL;
            }
            var node1 = new Node("sa1");
            p_layer1.addChild(node1);
            node1.setPosition(self.getPositionByN(21 - count, redata[count].Dice1, pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).x, self.getPositionByN(21 - count, redata[count].Dice1, pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).y);
            var sprite1 = new Node();
            sprite1.addComponent(Sprite);
            sprite1.getComponent(Sprite).spriteFrame = this.sa1;
            node1.addChild(sprite1);
            sprite1.getComponent(UITransform).priority = 2;
            if (tempI1 == null) {
              tempI1 = node1;
            } else {
              self.drawLine(tempI1, node1, 1, false);
              tempI1 = node1;
            }
            var node2 = new Node("sa2");
            p_layer2.addChild(node2);
            node2.setPosition(self.getPositionByN(21 - count, redata[count].Dice2, pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).x, self.getPositionByN(21 - count, redata[count].Dice2, pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).y);
            var sprite2 = new Node();
            sprite2.addComponent(Sprite);
            sprite2.getComponent(Sprite).spriteFrame = this.sa2;
            node2.addChild(sprite2);
            sprite2.getComponent(UITransform).priority = 2;
            if (tempI2 == null) {
              tempI2 = node2;
            } else {
              self.drawLine(tempI2, node2, 2, false);
              tempI2 = node2;
            }
            var node3 = new Node("sa3");
            p_layer3.addChild(node3);
            node3.setPosition(self.getPositionByN(21 - count, redata[count].Dice3, pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).x, self.getPositionByN(21 - count, redata[count].Dice3, pathlist1.getComponent(UITransform).width, pathlist1.getComponent(UITransform).height).y);
            var sprite3 = new Node();
            sprite3.addComponent(Sprite);
            sprite3.getComponent(Sprite).spriteFrame = this.sa3;
            node3.addChild(sprite3);
            sprite3.getComponent(UITransform).priority = 2;
            if (tempI3 == null) {
              tempI3 = node3;
            } else {
              self.drawLine(tempI3, node3, 3, false);
              tempI3 = node3;
            }
          }
          var comp = pathlist1.getComponent(ContentEx);
          if (comp) {
            comp.reload();
            comp.organize();
          }
        };
        _proto.drawPathLayer2 = function drawPathLayer2() {
          if (!this._curData) {
            return;
          }
          var data = this._curData;
          var layer2 = find("bg/content_bg/layer2", this.node);
          if (typeof data.Data.history == "undefined" || data.Data.history.length == 0) {
            layer2.getChildByName("xiao_bg").getChildByName("pernum").getComponent(Label).string = "-";
            layer2.getChildByName("da_bg").getChildByName("pernum").getComponent(Label).string = "-";
            return;
          }
          var redata0 = data.Data.history;
          var da = 0;
          var xiao = 0;
          for (var i = 0; i < redata0.length; i++) {
            if (redata0[i].Result == 2) {
              da = da + 1;
            } else {
              xiao = xiao + 1;
            }
          }
          layer2.getChildByName("xiao_bg").getChildByName("pernum").getComponent(Label).string = "Xỉu:" + xiao;
          layer2.getChildByName("da_bg").getChildByName("pernum").getComponent(Label).string = "Tài:" + da;
          var startdian = layer2.getChildByName("layer_dian");
          startdian.removeAllChildren();
          var temp = null;
          for (var i = redata0.length - 1; i >= 0; i--) {
            var resultItem = redata0[i].Result == 1 ? this.xItem : this.dItem;
            var itemL = instantiate(resultItem);
            startdian.addChild(itemL);
            itemL.getChildByName("num").active = false;
            itemL.setPosition(this.getPositionByIndex(i + 1).x, this.getPositionByIndex(i + 1).y);
            if (temp == null) {
              temp = itemL;
            } else {
              this.drawLine(temp, itemL, 4, false);
              temp = itemL;
            }
          }
          var jiantou = new Node("jiantou");
          jiantou.addComponent(Sprite);
          jiantou.getComponent(Sprite).spriteFrame = this.jiantou;
          startdian.addChild(jiantou);
          jiantou.setPosition(temp.getPosition().x + 930 / 19, temp.getPosition().y);
          this.drawLine(temp, jiantou, 4, false);
          var pathlist = this.scroll_his.content;
          pathlist.removeAllChildren();
          var redata = redata0.slice().reverse();
          var row = 0;
          var col = 0;
          var tempNum = -1;
          var list = [];
          for (var _i = 0; _i < redata.length; _i++) {
            var _result = redata[_i].Dice1 + redata[_i].Dice2 + redata[_i].Dice3;
            var item = {
              result: _result
            };
            item["index"] = redata[_i].Result;
            if (tempNum != -1) {
              if (redata[_i].Result == tempNum) {
                row++;
                if (row >= MAX_ROW) {
                  row = 0;
                  list[++col] = [];
                }
              } else {
                row = 0;
                list[++col] = [];
              }
            } else {
              row = 0;
              list[col] = [];
            }
            list[col].push(item);
            tempNum = redata[_i].Result;
          }
          var result = list;
          for (var _i2 = 0; _i2 < result.length; _i2++) {
            var _list = result[_i2];
            var node = instantiate(this.node_hisItem);
            node.active = true;
            pathlist.addChild(node);
            for (var j = 0; j < _list.length; j++) {
              var _item = _list[j];
              var _resultItem = _item.index == 1 ? this.xItem : this.dItem;
              var _itemL = instantiate(_resultItem);
              node.addChild(_itemL);
              _itemL.getChildByName("num").getComponent(Label).string = _item.result + "";
              var pos = this.getPositionByRowCol(j, 0, node);
              //     itemL.getPosition().x = this.getPositionByRowCol(row, col, pathlist).x;
              //     itemL.getPosition().y = this.getPositionByRowCol(row, col, pathlist).y;
              _itemL.setPosition(pos.x, pos.y);
            }
          }
          if (result.length < 20) {
            for (var _i3 = result.length; _i3 < 20; _i3++) {
              var _node = instantiate(this.node_hisItem);
              _node.active = true;
              pathlist.addChild(_node);
            }
          } else {
            this.scroll_his.scrollToRight();
          }
          var comp = pathlist.getComponent(ContentEx);
          if (comp) {
            comp.reload();
            comp.organize();
          }
        };
        _proto.getPositionByRowCol = function getPositionByRowCol(row, col, itemBg) {
          var width = itemBg.getComponent(UITransform).width;
          var hight = itemBg.getComponent(UITransform).height;
          var perh = hight / MAX_ROW;
          var x = 0;
          var y = perh * 2 - row * perh;
          return {
            x: x,
            y: y
          };
        };
        _proto.getPositionByIndex = function getPositionByIndex(index) {
          var width = 930;
          var hight = 150;
          var row = 5 - (Math.floor((index - 1) / 20) + 1) + 1;
          var col = 0;
          if (row % 2 == 1) {
            col = 21 - ((index - 1) % 20 + 1);
          } else {
            col = (index - 1) % 20 + 1;
          }
          var x = width / 19 * (col - 1);
          var y = hight / 4 * (row - 1);
          return {
            x: x + width / 19 / 2,
            y: y
          };
        };
        _proto.getAngle = function getAngle(start, end) {
          //        //计算出朝向
          var dx = end.x - start.x;
          var dy = end.y - start.y;
          var dir = v2(dx, dy);

          //        //根据朝向计算出夹角弧度
          var angle = dir.signAngle(v2(1, 0));

          //        //将弧度转换为欧拉角
          var degree = angle / Math.PI * 180;
          return degree;
        };
        _proto.drawLine = function drawLine(item1, item2, type, isfan) {
          var xianlist = [this.xian1, this.xian2, this.xian3, this.xian4, this.xian5];
          var xianType = xianlist[type];
          var pos1 = v2(item1.getPosition().x, item1.getPosition().y);
          var pos2 = v2(item2.getPosition().x, item2.getPosition().y);
          var distance = GUtil.GetDistance(pos1, pos2);
          var self = this;
          var sprite = new Node();
          sprite.addComponent(Sprite);
          sprite.getComponent(Sprite).spriteFrame = xianType;
          item1.addChild(sprite);
          sprite.getComponent(UITransform).anchorX = 0;
          sprite.getComponent(UITransform).anchorY = 0;
          sprite.getComponent(UITransform).width = distance;
          sprite.getComponent(UITransform).priority = 0;
          if (item1.getChildByName("bg")) {
            item1.getChildByName("bg").getComponent(UITransform).priority = 2;
          }
          if (item1.getChildByName("num")) {
            item1.getChildByName("num").getComponent(UITransform).priority = 3;
          }
          sprite.angle = -self.getAngle(pos1, pos2);
        };
        _proto.getPositionByN = function getPositionByN(rol, num, widthP, heightP) {
          var x = (rol - 1) / 20 * widthP;
          var y = (num - 1) / 5 * heightP;
          return {
            x: x,
            y: y
          };
        };
        _proto.getPositionByRC = function getPositionByRC(rol, num, widthP, heightP) {
          var x = (rol - 1) / 20 * widthP;
          var y = (num - 3) / 15 * heightP;
          return {
            x: x,
            y: y
          };
        };
        _proto.onArrow = function onArrow() {
          this._curpage ^= 1;
          find("bg/content_bg/layer1", this.node).active = !find("bg/content_bg/layer1", this.node).active;
          find("bg/content_bg/layer2", this.node).active = !find("bg/content_bg/layer2", this.node).active;
          this.drawPathList();
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.instance.protocolDxMD5.history) {
            if (data.Data.history && data.Data.history.length == 15) {
              NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.history, {
                size: 100
              });
              return;
            }
            this._curData = data;
            this.drawPathList();
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.protocolDxMD5.history, this.recvData, this);
        };
        return DxMd5HistoryLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "xItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sa1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sa2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sa3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "jiantou", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "xian1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "xian2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "xian3", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "xian4", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "xian5", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scroll_his", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_hisItem", [_dec15], {
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

System.register("chunks:///_virtual/DxMD5Item.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, color, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "61a07C9zZFNLrxPwX+jXERP", "DxMD5Item", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxMD5xItem = exports('DxMD5xItem', (_dec = ccclass("DxMD5Item"), _dec2 = menu("game/dxmd5/DxMD5Item"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxMD5xItem, _Component);
        function DxMD5xItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_num", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DxMD5xItem.prototype;
        ////////////////////////
        _proto.setString = function setString(openNum) {
          this.Label_num.string = "" + openNum;
          this.Label_num.color = openNum > 10 ? color(255, 200, 13, 255) : color(0, 0, 0, 255);
        };
        return DxMD5xItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_num", [_dec3], {
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

System.register("chunks:///_virtual/DxMD5Layer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './DxMD5Hand.ts', './DxMD5Proxy.ts', './Common.ts', './ViewManager.ts', './DataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Label, Node, SpriteFrame, sp, Prefab, tween, v3, Color, UIOpacity, AudioClip, Sprite, find, UITransform, instantiate, v2, Component, i18n, AudioManager, ConfigManager, EventManager, NetManager, DxMD5Hand, DxMD5Proxy, DxMD5Event, PreBetType, Common, ViewManager, DataManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Label = module.Label;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      Prefab = module.Prefab;
      tween = module.tween;
      v3 = module.v3;
      Color = module.Color;
      UIOpacity = module.UIOpacity;
      AudioClip = module.AudioClip;
      Sprite = module.Sprite;
      find = module.find;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      DxMD5Hand = module.default;
    }, function (module) {
      DxMD5Proxy = module.default;
      DxMD5Event = module.DxMD5Event;
      PreBetType = module.PreBetType;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      DataManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29;
      cclegacy._RF.push({}, "14bcaVp3clJi6eJA+J1j05v", "DxMD5Layer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["NORMAL"] = 0] = "NORMAL";
        GameState[GameState["ANIMATION"] = 1] = "ANIMATION";
        GameState[GameState["BET"] = 2] = "BET";
        GameState[GameState["WAIT"] = 3] = "WAIT";
        GameState[GameState["RESULT"] = 4] = "RESULT";
        GameState[GameState["END"] = 5] = "END";
        return GameState;
      }(GameState || {});
      var DxMD5GameLayer = exports('default', (_dec = ccclass("DxMD5Layer"), _dec2 = menu("game/dxmd5/DxMD5GameLayer"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(SpriteFrame), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Label), _dec24 = property(Node), _dec25 = property(SpriteFrame), _dec26 = property(sp.Skeleton), _dec27 = property(Node), _dec28 = property(Prefab), _dec29 = property(Node), _dec30 = property(sp.Skeleton), _dec31 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxMD5GameLayer, _Component);
        function DxMD5GameLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btn_preBig", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_preSmall", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_preBig", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_preSmall", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betBig", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betSmall", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betBigCount", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betSmallCount", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betTime", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_nextGame", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalBig", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalSmall", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_roomID", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "centerLayer", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xiaoLayer", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "daLayer", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_handsupBg", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sazi", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5Key", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5Result", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ball", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipAni", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_room", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_coin", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waitAni", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragonAni", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "button_room_light", _descriptor29, _assertThisInitialized(_this));
          _this.gameState = GameState.NORMAL;
          _this._doingBetInfo = null;
          _this.timeLeft = 0;
          _this._updateTimeFlag = true;
          _this.numBig = 0;
          _this.numBigStep = 0;
          _this.numSmall = 0;
          _this.numSmallStep = 0;
          _this.hasShow = false;
          _this.originLength = 100;
          _this._hasShowResultAni = false;
          _this.showCountDownTip = false;
          return _this;
        }
        var _proto = DxMD5GameLayer.prototype;
        _proto.onLoad = function onLoad() {
          if (DataManager.instance.roomID) {
            DxMD5Proxy.tableID = parseInt(DataManager.instance.roomID);
          }
          this.onEvent();
          this.init();
        };
        _proto.start = function start() {
          // this.button_room_light.setAnimation(0, "intro", false);
          // this.button_room_light.addAnimation(0, "idle", true);
          this.button_room_light.setAnimation(0, "idle", true);
        };
        _proto.init = function init() {
          DxMD5Proxy.handsup = true;
          this.reset();
          DxMD5Proxy.requestConfig();
          var ball = this.node_path.getChildByName("ball1");
          if (ball) {
            tween(ball).repeatForever(tween().to(0.3, {
              scale: v3(0.6, 0.6, 1)
            }).to(0.3, {
              scale: v3(1.1, 1.1, 1)
            })).start();
          }
          var strAni = ["idle_god", "idle_bird", "idle_dragon", "idle_gui", "idle_qilin", "idle_hu"];
          this.dragonAni.setAnimation(0, strAni[DxMD5Proxy.tableID - 1], true);
        };
        _proto.timeUpdate = function timeUpdate() {
          var time = this.timeLeft;
          if (time <= 0) {
            time = 0;
          }
          if (this.gameState == GameState.BET) {
            if (time <= 3 && time >= 1 && !this.showCountDownTip) {
              ViewManager.instance.showCountDownTip(this.txt_betTime.node.parent, time, "idle4", 10, 0, 1.35);
            }
            this.showCountDownTip = time <= 3;
            this.txt_betTime.node.active = time > 3;
          }
          this.txt_betTime.string = "" + time;
          if (time <= 3) {
            this.txt_betTime.color = new Color(255, 42, 0);
          } else {
            this.txt_betTime.color = Color.WHITE;
          }
          this.txt_nextGame.string = "" + time;
          if (this.gameState == GameState.WAIT && !DxMD5Proxy.handsup && time <= 5 && !this.hasShow) {
            this.tipAni.setAnimation(0, "3", false);
            var winLabel = this.tipAni.node.getChildByName("text").getComponent(Label);
            winLabel.node.active = false;
            this.showResult();
          }
          this.timeLeft--;
        };
        _proto.startTimeUpdate = function startTimeUpdate(timeleft) {
          if (this._updateTimeFlag) {
            this._updateTimeFlag = false;
            this.timeLeft = timeleft;
            this.unschedule(this.timeUpdate);
            this.timeUpdate();
            this.schedule(this.timeUpdate, 1);
          }
        };
        _proto.scrollBetNum = function scrollBetNum() {
          var bigCount = this.numBig - parseInt(this.txt_totalBig.string.replace(/,/g, ""));
          if (bigCount > 0) {
            var num = Math.min(this.numBig, parseInt(this.txt_totalBig.string.replace(/,/g, "")) + this.numBigStep);
            this.txt_totalBig.string = Common.numFormat(num);
          } else if (bigCount < 0) {
            this.txt_totalBig.string = Common.numFormat(this.numBig);
          }
          var smallCount = this.numSmall - parseInt(this.txt_totalSmall.string.replace(/,/g, ""));
          if (smallCount > 0) {
            var _num = Math.min(this.numSmall, parseInt(this.txt_totalSmall.string.replace(/,/g, "")) + this.numSmallStep);
            this.txt_totalSmall.string = Common.numFormat(_num);
          } else if (smallCount < 0) {
            this.txt_totalSmall.string = Common.numFormat(this.numSmall);
          }
        };
        _proto.update = function update(dt) {
          this.scrollBetNum();
          var length = DxMD5Proxy.result ? DxMD5Proxy.result.Original.length : 0;
          if (this.originLength < length) {
            this.originLength++;
            var str = DxMD5Proxy.result.Original.slice(0, this.originLength);
            this.txt_md5.string = str;
          }
        };
        _proto.onEvent = function onEvent() {
          var _this2 = this;
          DxMD5Proxy.on(DxMD5Event.CONFIG, function (info) {
            _this2.timeLeft = DxMD5Proxy.timeLeft;
            _this2.updateDeskInfo(info.bigSmallMD5);
            _this2.txt_betBig.string = Common.numFormat(info.myBet.big);
            _this2.txt_betSmall.string = Common.numFormat(info.myBet.small);
            var hasBet = info.myBet.big + info.myBet.small;
            if (hasBet > 0) {
              DxMD5Proxy.emit(DxMD5Event.updateListBet + (DxMD5Proxy.tableID - 1), hasBet);
            }
            if (info.bigSmallMD5.Result > 0) {
              // 即使只剩等待尾声，也先解锁并恢复开奖结果。
              _this2.changeState(GameState.RESULT);
              if (DxMD5Proxy.timeLeft < 5) {
                _this2.changeState(GameState.WAIT);
              }
            } else {
              _this2.changeState(GameState.BET);
            }
            _this2.startTimeUpdate(DxMD5Proxy.timeLeft);
          }, this);
          DxMD5Proxy.on(DxMD5Event.WAIT, function () {
            if (_this2.gameState == GameState.END || _this2.gameState == GameState.RESULT) {
              _this2.timeLeft = DxMD5Proxy.timeLeft;
              _this2.changeState(GameState.WAIT);
            }
          }, this);
          DxMD5Proxy.on(DxMD5Event.DOING_BET, function (info) {
            if (_this2.gameState == GameState.END || _this2.gameState == GameState.WAIT) {
              _this2.timeLeft = DxMD5Proxy.timeLeft;
              _this2.reset();
              //                    // this.showStep(i18n.lang.newStart);
              NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.getTabelList, {});
              _this2.tipAni.setAnimation(0, "4", false);
              var winLabel = _this2.tipAni.node.getChildByName("text").getComponent(Label);
              winLabel.node.active = false;
              _this2._doingBetInfo = info;
              _this2.changeState(GameState.ANIMATION);
            } else if (_this2.gameState == GameState.BET) {
              //                    //5秒同步
              //                    // if (DxMD5Proxy.timeLeft % 5 == 0) {
              //                    //     this.timeLeft = DxMD5Proxy.timeLeft;
              //                    // }
              _this2.startTimeUpdate(DxMD5Proxy.timeLeft);
              _this2.palyAudio(DxMD5Proxy.audio.BET);
              _this2.updateDeskInfo(info.bigSmallMD5, false);
            }
          }, this);
          DxMD5Proxy.on(DxMD5Event.RESULT, function (info) {
            _this2.updateDeskInfo(info.BigSmallMD5);
            _this2.changeState(GameState.RESULT);
          }, this);
          DxMD5Proxy.on(DxMD5Event.HANDSUP, function () {
            if (_this2.gameState == GameState.RESULT || _this2.gameState == GameState.WAIT) {
              _this2.showResult();
            }
          }, this);
          DxMD5Proxy.on(DxMD5Event.RESET_BET, function () {
            var isBig = DxMD5Proxy.preBetBig;
            _this2.btn_preBig.node.getComponent(UIOpacity).opacity = isBig === PreBetType.BIG ? 0 : 255;
            _this2.btn_preSmall.node.getComponent(UIOpacity).opacity = isBig === PreBetType.SMALL ? 0 : 255;
            _this2.txt_preBig.string = isBig ? Common.numFormat(DxMD5Proxy.preBetCount) : "0";
            _this2.txt_preSmall.string = !isBig ? Common.numFormat(DxMD5Proxy.preBetCount) : "0";
          }, this);
          DxMD5Proxy.on(DxMD5Event.ADD_PRE_BET, function () {
            var isBig = DxMD5Proxy.preBetBig;
            _this2.txt_preBig.string = isBig === PreBetType.BIG ? Common.numFormat(DxMD5Proxy.preBetCount) : "0";
            _this2.txt_preSmall.string = isBig === PreBetType.SMALL ? Common.numFormat(DxMD5Proxy.preBetCount) : "0";
          }, this);
          DxMD5Proxy.on(DxMD5Event.BET, function (info) {
            //                // this.txt_betBig.string = Common.numFormat(info.big);
            //                // this.txt_betSmall.string = Common.numFormat(info.small);

            var betBigNum = parseInt(_this2.txt_betBig.string);
            var betSmallNum = parseInt(_this2.txt_betSmall.string);

            //                //更新显示
            if (info.big > betBigNum) {
              _this2.showCoinEffect(_this2.txt_betBig.node, function () {
                if (info.tableId != "" + DxMD5Proxy.tableID) {
                  return;
                }
                _this2.txt_betBig.string = Common.numFormat(info.big);
                var Node_updateEffect = _this2.txt_betBig.node.parent.getComponent(sp.Skeleton);
                Node_updateEffect.setAnimation(0, "idle_small", false);
                tween(_this2.txt_betBig.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).to(0.15, {
                  scale: v3(1, 1, 1)
                }).start();
              });
            } else {
              _this2.txt_betBig.string = Common.numFormat(info.big);
            }
            if (info.small > betSmallNum) {
              _this2.showCoinEffect(_this2.txt_betSmall.node, function () {
                if (info.tableId != "" + DxMD5Proxy.tableID) {
                  return;
                }
                _this2.txt_betSmall.string = Common.numFormat(info.small);
                var Node_updateEffect = _this2.txt_betSmall.node.parent.getComponent(sp.Skeleton);
                Node_updateEffect.setAnimation(0, "idle_small", false);
                tween(_this2.txt_betSmall.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).to(0.15, {
                  scale: v3(1, 1, 1)
                }).start();
              });
            } else {
              _this2.txt_betSmall.string = Common.numFormat(info.small);
            }
            var isBig = DxMD5Proxy.preBetBig;
            _this2.txt_preBig.string = isBig === PreBetType.BIG ? Common.numFormat(DxMD5Proxy.preBetCount) : "0";
            _this2.txt_preSmall.string = isBig === PreBetType.SMALL ? Common.numFormat(DxMD5Proxy.preBetCount) : "0";
          }, this);
          DxMD5Proxy.on(DxMD5Event.HISTORY, function () {
            _this2.updatePath();
          }, this);
          DxMD5Proxy.on(DxMD5Event.WIN, function () {
            if (!_this2._hasShowResultAni && _this2.hasShow) {
              _this2.showAddScore(DxMD5Proxy.winAmount);
            }
          }, this);
          DxMD5Proxy.on(DxMD5Event.CHANGEROOM, function () {
            _this2.init();
            // NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.getTabelList, {});
            // ViewManager.instance.closePopView();
          }, this);
        };
        _proto.palyAudio = function palyAudio(name) {
          var bundle = DxMD5Proxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playSound(audio);
          });
        };
        _proto.updateDeskInfo = function updateDeskInfo(info, update) {
          if (update === void 0) {
            update = true;
          }
          this.txt_roomID.string = Common.setGameNo(info.ShowId);
          this.txt_betBigCount.string = "" + info.BetBigCount;
          this.txt_betSmallCount.string = "" + info.BetSmallCount;
          this.txt_md5.string = info.Ciphertext;
          // 配置和开奖结果直接刷新时也要同步滚动目标，避免下一帧回写旧值。
          this.numBig = info.BetBig;
          this.numSmall = info.BetSmall;
          if (update) {
            this.numBigStep = 0;
            this.numSmallStep = 0;
            this.txt_totalBig.string = "" + Common.numFormat(info.BetBig);
            this.txt_totalSmall.string = "" + Common.numFormat(info.BetSmall);
          } else {
            var bigCount = this.numBig - parseInt(this.txt_totalBig.string.replace(/,/g, ""));
            var randCount = Math.random() * 15 + 5;
            this.numBigStep = bigCount > 0 ? Math.max(1, Math.floor(bigCount / randCount)) : 0;
            var smallCount = this.numSmall - parseInt(this.txt_totalSmall.string.replace(/,/g, ""));
            this.numSmallStep = smallCount > 0 ? Math.max(1, Math.floor(smallCount / randCount)) : 0;
            if (this.numBigStep != 0) {
              var Node_updateEffect = this.txt_totalBig.node.parent.getChildByName("Node_updateEffect").getComponent(sp.Skeleton);
              Node_updateEffect.setAnimation(0, "idle_big", false);
              tween(this.txt_totalBig.node).to(0.1, {
                scale: v3(1.2, 1.2, 1)
              }).to(0.15, {
                scale: v3(1, 1, 1)
              }).start();
            }
            if (this.numSmallStep != 0) {
              var _Node_updateEffect = this.txt_totalSmall.node.parent.getChildByName("Node_updateEffect").getComponent(sp.Skeleton);
              _Node_updateEffect.setAnimation(0, "idle_big", false);
              tween(this.txt_totalSmall.node).to(0.1, {
                scale: v3(1.2, 1.2, 1)
              }).to(0.15, {
                scale: v3(1, 1, 1)
              }).start();
            }
          }
        };
        _proto.showResultAni = function showResultAni() {
          var _this3 = this;
          this.palyAudio(DxMD5Proxy.audio.RESULTANI);
          var shaizifeng = this.centerLayer.getChildByName("shuaizi1guang").getComponent(sp.Skeleton);
          shaizifeng.node.active = true;
          this.node_handsupBg.active = false;
          shaizifeng.setCompleteListener(null);
          shaizifeng.setCompleteListener(function () {
            _this3.node_handsupBg.active = true;
            shaizifeng.node.active = false;
            _this3.changeState(GameState.BET);
          });
          shaizifeng.setAnimation(0, "intro", false);
          this.scheduleOnce(function () {
            if (_this3._doingBetInfo) {
              _this3.updateDeskInfo(_this3._doingBetInfo.bigSmallMD5, false);
              _this3._doingBetInfo = null;
            }
          }, 2.25);
        };
        _proto.setSaizi = function setSaizi() {
          var data = DxMD5Proxy.result;
          if (!data) {
            return;
          }
          var shaizi1 = this.centerLayer.getChildByName("shaizi_1").getComponent(Sprite);
          var shaizi2 = this.centerLayer.getChildByName("shaizi_2").getComponent(Sprite);
          var shaizi3 = this.centerLayer.getChildByName("shaizi_3").getComponent(Sprite);
          shaizi1.spriteFrame = this.sazi[data.Dice1 - 1];
          shaizi2.spriteFrame = this.sazi[data.Dice2 - 1];
          shaizi3.spriteFrame = this.sazi[data.Dice3 - 1];
          shaizi1.node.active = true;
          shaizi2.node.active = true;
          shaizi3.node.active = true;
        };
        _proto.showResult = function showResult() {
          var _this4 = this;
          if (this.hasShow || this.gameState != GameState.RESULT && this.gameState != GameState.WAIT) {
            return;
          }
          this.waitAni.active = false;
          this.setSaizi();
          this.palyAudio(DxMD5Proxy.audio.RESULT);
          this.node_handsupBg.getComponent(DxMD5Hand).move();
          var data = DxMD5Proxy.result;
          //        // this._audioManager.playSound(this.dxsound[3], false);
          if (data.Result == 1) {
            //            //小
            var image_ani = this.xiaoLayer.getChildByName("image_ani");
            image_ani.active = true;
            image_ani.getComponent(sp.Skeleton).setAnimation(0, "xiu_1_vn", true);
            this.xiaoLayer.getChildByName("image").active = false;
          } else {
            var _image_ani = this.daLayer.getChildByName("image_ani");
            _image_ani.active = true;
            _image_ani.getComponent(sp.Skeleton).setAnimation(0, "TAI_1_vn", true);
            this.daLayer.getChildByName("image").active = false;
          }
          this.txt_md5Key.node.active = true;
          this.txt_md5Result.node.active = false;
          this.txt_md5.string = data.Original;
          this.centerLayer.getChildByName("waitNext_bg").active = true;
          this.showMD5Origin();
          this.changeState(GameState.END);
          this.scheduleOnce(function () {
            if (_this4.Node_room.active) {
              NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.getTabelList);
            }
            NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.history, {
              size: 15
            });
          }, 0.5);
          if (DxMD5Proxy.winAmount > 0) {
            if (!this._hasShowResultAni) this.showAddScore(DxMD5Proxy.winAmount);
          }
        };
        _proto.showMD5Origin = function showMD5Origin() {
          this.txt_md5.string = "";
          //        // this.txt_md5.fontSize = 17;
          this.originLength = 0;
        };
        _proto.changeState = function changeState(state) {
          this.gameState = state;
          switch (state) {
            case GameState.NORMAL:
              break;
            case GameState.ANIMATION:
              this.txt_betTime.node.active = false;
              this.showResultAni();
              break;
            case GameState.BET:
              this.txt_betTime.node.active = true;
              this.waitAni.active = true;
              break;
            case GameState.WAIT:
              this.centerLayer.getChildByName("waitNext_bg").active = true;
              break;
            case GameState.RESULT:
              DxMD5Proxy.lockResult = false;
              this.setSaizi();
              if (DxMD5Proxy.handsup) {
                this.centerLayer.getChildByName("waitNext_bg").active = false;
                this.txt_betTime.node.active = false;
                this.showResult();
              } else {
                this.centerLayer.getChildByName("waitNext_bg").active = true;
                this.txt_betTime.node.active = false;
                this.showStep(i18n.lang.moveHandTip);
              }
              break;
            case GameState.END:
              this.hasShow = true;
              var betBigNum = parseInt(this.txt_betBig.string);
              var betSmallNum = parseInt(this.txt_betSmall.string);
              if (betBigNum > 0 || betSmallNum > 0) {
                var strAni = DxMD5Proxy.winAmount > 0 ? "win_god" : "lose_god";
                this.dragonAni.setAnimation(0, strAni, false);
                var strAnia = ["idle_god", "idle_bird", "idle_dragon", "idle_gui", "idle_qilin", "idle_hu"];
                this.dragonAni.addAnimation(0, strAnia[DxMD5Proxy.tableID - 1], true);
              }
              break;
          }
        };
        _proto.showStep = function showStep(text) {
          var stepInfo = find("Node_root/game_bg/stepInfo", this.node);
          stepInfo.getChildByName("text").getComponent(Label).string = text;
          stepInfo.active = true;
        };
        _proto.showAddScore = function showAddScore(text) {
          var _this5 = this;
          //        // let addScore = cc.find("Node_root/game_bg/addScore", this.node);
          //        // addScore.getChildByName("text").getComponent(cc.Label).string = Common.numFormat(text);
          //        // addScore.active = true;

          this.tipAni.setAnimation(0, "get", false);
          var winLabel = this.tipAni.node.getChildByName("text").getComponent(Label);
          winLabel.node.active = true;
          winLabel.string = "+" + Common.numFormat(text);
          this.tipAni.setCompleteListener(function () {
            _this5.tipAni.setCompleteListener(null);
            winLabel.node.active = false;
          });
          this._hasShowResultAni = true;
        };
        _proto.reset = function reset() {
          this._hasShowResultAni = false;
          this._doingBetInfo = null;
          this.numBig = 0;
          this.numSmall = 0;
          this.numBigStep = 0;
          this.numSmallStep = 0;
          this.palyAudio(DxMD5Proxy.audio.START);
          DxMD5Proxy.reset();
          this.txt_md5Key.node.active = false;
          this.txt_md5Result.node.active = true;
          this.txt_md5.string = "";
          this._updateTimeFlag = true;
          //        // this.txt_md5.fontSize = 20;

          var shaizi1 = this.centerLayer.getChildByName("shaizi_1").getComponent(Sprite);
          var shaizi2 = this.centerLayer.getChildByName("shaizi_2").getComponent(Sprite);
          var shaizi3 = this.centerLayer.getChildByName("shaizi_3").getComponent(Sprite);
          shaizi1.node.active = false;
          shaizi2.node.active = false;
          shaizi3.node.active = false;
          this.xiaoLayer.getChildByName("image_ani").active = false;
          this.xiaoLayer.getChildByName("image").active = true;
          this.daLayer.getChildByName("image_ani").active = false;
          this.daLayer.getChildByName("image").active = true;
          this.centerLayer.getChildByName("waitNext_bg").active = false;
          this.txt_betTime.node.active = false;
          this.node_handsupBg.active = true;
          this.txt_betBig.string = "0";
          this.txt_betSmall.string = "0";
          this.txt_preBig.string = "0";
          this.txt_preSmall.string = "0";
          this.txt_betBigCount.string = "0";
          this.txt_betSmallCount.string = "0";
          this.txt_totalBig.string = "0";
          this.txt_totalSmall.string = "0";
          this.hasShow = false;
        };
        _proto.showCoinEffect = function showCoinEffect(endNode, fCall) {
          var startNode = find("Node_root/game_bg/yzBtn_layer/xiazhu_btn", this.node);
          var pos = this.node.getComponent(UITransform).convertToNodeSpaceAR(startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0)));
          var endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(endNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0)));
          for (var i = 0; i < 5; i++) {
            var coin = instantiate(this.prefab_coin);
            coin.getComponent(UITransform).priority = 1000;
            coin.position = v3(pos);
            this.node.addChild(coin);
            var randX = 1;
            var fixY = 100;
            tween(coin).bezierTo(Math.random() * 0.35 + 0.5, v2(pos.x * randX, pos.y + fixY), v2(endPos.x * randX, pos.y - fixY), endPos).call(i == 0 ? fCall : null).removeSelf().start();
          }
        };
        _proto.updatePath = function updatePath() {
          if (!DxMD5Proxy.history || DxMD5Proxy.history.length == 0) {
            return;
          }
          var path = this.node_path;
          for (var i = 0; i < 15; i++) {
            if (DxMD5Proxy.history[i]) {
              var ball = path.getChildByName("ball" + (i + 1));
              ball.active = true;
              ball.getComponent(Sprite).spriteFrame = this.ball[DxMD5Proxy.history[i].Result - 1];
            }
          }
        };
        _proto.gameShow = function gameShow() {
          this.init();
        };
        _proto.onEnable = function onEnable() {
          DxMD5Proxy.registSocketEvent();
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.gameShow, this); //断线重连
        };

        _proto.onDisable = function onDisable() {
          DxMD5Proxy.removeSocketEvent();
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.off(ConfigManager.instance.protocolHall.login, this.gameShow, this); //断线重连
        };

        _proto.onDestroy = function onDestroy() {
          // 与 onLoad 注册配对，仅解绑本界面，保留同一节点禁用后重新启用的监听。
          DxMD5Proxy.targetOff(this);
        };
        return DxMD5GameLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btn_preBig", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn_preSmall", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_preBig", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_preSmall", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_betBig", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_betSmall", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txt_betBigCount", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txt_betSmallCount", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_betTime", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txt_nextGame", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalBig", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalSmall", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "txt_roomID", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "centerLayer", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "xiaoLayer", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "daLayer", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_handsupBg", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "sazi", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5Key", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5Result", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_path", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "tipAni", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Node_room", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "prefab_coin", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "waitAni", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "dragonAni", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "button_room_light", [_dec31], {
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

System.register("chunks:///_virtual/DxMD5Proxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _extends, _createClass, cclegacy, assetManager, i18n, ProxyBase, ConfigManager, EventManager, NetManager, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyBase = module.ProxyBase;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "209a2+F+BxAFYFRllDvebC3", "DxMD5Proxy", undefined);
      var DxMD5Event = exports('DxMD5Event', /*#__PURE__*/function (DxMD5Event) {
        DxMD5Event["CONFIG"] = "config";
        DxMD5Event["RESET_BET"] = "resetBet";
        DxMD5Event["DOING_BET"] = "doingBet";
        DxMD5Event["RESULT"] = "showResult";
        DxMD5Event["WAIT"] = "waitNext";
        DxMD5Event["HANDSUP"] = "handsup";
        DxMD5Event["ADD_PRE_BET"] = "addPreBet";
        DxMD5Event["BET"] = "bet";
        DxMD5Event["HISTORY"] = "history";
        DxMD5Event["WIN"] = "win";
        DxMD5Event["CHANGEROOM"] = "changeRoom";
        DxMD5Event["updateListBet"] = "updateListBet";
        return DxMD5Event;
      }({}));
      var PreBetType = exports('PreBetType', /*#__PURE__*/function (PreBetType) {
        PreBetType[PreBetType["NORMAL"] = 0] = "NORMAL";
        PreBetType[PreBetType["BIG"] = 1] = "BIG";
        PreBetType[PreBetType["SMALL"] = 2] = "SMALL";
        return PreBetType;
      }({}));
      var DxMD5ProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(DxMD5ProxyMgr, _ProxyBase);
        function DxMD5ProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "DxgameMD5";
          _this.wsEvents = [];
          _this.audio = {
            START: "start",
            BET: "bet",
            RESULTANI: "r1",
            RESULT: "r2"
          };
          _this.preBetBig = PreBetType.NORMAL;
          //预下注金额
          _this.preBetCount = 0;
          _this.hasBet = 0;
          _this.lastBet = 0;
          _this.selectBet = void 0;
          _this.serverId = void 0;
          _this.timeLeft = null;
          _this.handsup = true;
          _this.result = void 0;
          _this.winAmount = void 0;
          _this.history = [];
          _this.lockResult = true;
          _this.maxBet = 0;
          //最大下注值
          _this.tableID = 1;
          _this._configVersion = 0;
          return _this;
        }
        var _proto = DxMD5ProxyMgr.prototype;
        _proto.init = function init() {
          this.initRecv();
        };
        _proto.registSocketEvent = function registSocketEvent() {
          this.wsEvents = [ConfigManager.instance.protocolDxMD5.bet, ConfigManager.instance.protocolDxMD5.history, ConfigManager.instance.protocolDxMD5.details, ConfigManager.instance.protocolDxMD5.roundBet, ConfigManager.instance.protocolDxMD5.curRoundGroup, ConfigManager.instance.protocolDxMD5.doingBet, ConfigManager.instance.protocolDxMD5.result, ConfigManager.instance.protocolDxMD5.waitNext, ConfigManager.instance.protocolDxMD5.checkOut];
          for (var _iterator = _createForOfIteratorHelperLoose(this.wsEvents), _step; !(_step = _iterator()).done;) {
            var event = _step.value;
            EventManager.instance.on(event, this.recvData, this);
          }
        };
        _proto.removeSocketEvent = function removeSocketEvent() {
          // Proxy 会跨界面保留，关闭后不能再接收本次进入的配置回复。
          this._configVersion++;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            EventManager.instance.off(event, this.recvData, this);
          }
        };
        _proto.requestConfig = function requestConfig() {
          var _this2 = this;
          var version = ++this._configVersion;
          var tableID = this.tableID;
          // 配置确认前不能使用上一房间的服务标识下注。
          this.serverId = null;
          this.timeLeft = 0;
          var cmd = ConfigManager.instance.protocolDxMD5.config;
          NetManager.instance.sendOnlineData(cmd, {
            tableId: "" + tableID
          }, function (data) {
            if (data && version === _this2._configVersion && tableID === _this2.tableID) {
              _this2.recvData(_extends({}, data, {
                cmd: cmd
              }));
            }
            // 配置只经对应请求处理，旧回复也不能进入全局事件分发。
            return false;
          });
        };
        _proto.resetPreAmount = function resetPreAmount() {
          this.preBetCount = 0;
          this.selectBet = null;
          // this.preBetBig = PreBetType.NORMAL;
          this.emit(DxMD5Event.RESET_BET);
        };
        _proto.preBig = function preBig() {
          this.resetPreAmount();
          this.preBetBig = PreBetType.BIG;
          this.emit(DxMD5Event.RESET_BET);
        };
        _proto.preSmall = function preSmall() {
          this.resetPreAmount();
          this.preBetBig = PreBetType.SMALL;
          this.emit(DxMD5Event.RESET_BET);
        };
        _proto.addPreAmount = function addPreAmount(count) {
          var max = DxMD5Proxy.maxBet;
          var bet = count;
          var preBet = DxMD5Proxy.preBetCount + this.hasBet;
          if (bet + preBet > max) {
            Common.showTip(i18n.errTip("30044")); //下注上限
            return;
          }
          this.selectBet = count;
          this.preBetCount += count;
          this.emit(DxMD5Event.ADD_PRE_BET);
        };
        _proto.reset = function reset() {
          this.preBetCount = 0;
          this.selectBet = null;
          this.result = null;
          this.winAmount = 0;
          this.lockResult = true;
          this.hasBet = 0;
        };
        _proto.initRecv = function initRecv() {};
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("==recvData==", JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            if (data.Code && data.Code != 0) {
              Common.showTip(i18n.errTip(data.Code));
              return;
            }
          }
          switch (data.cmd) {
            case ConfigManager.instance.protocolDxMD5.config:
              {
                NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.history, {
                  size: 15
                });
                var _info = data.Data;
                this.serverId = _info.serverId;
                this.timeLeft = _info.timeLeft;
                this.result = _info.bigSmallMD5;
                this.maxBet = _info.plays[0].MaxIssueBet;
                // 重进和切房后，上限校验仍需包含本局已经成功的下注。
                this.hasBet = _info.myBet ? _info.myBet.big + _info.myBet.small : 0;
                if (_info.myBet && _info.myBet.amount) {
                  this.winAmount = _info.myBet.amount;
                }
                this.emit(DxMD5Event.CONFIG, data.Data);
              }
              break;
            case ConfigManager.instance.protocolDxMD5.bet:
              {
                var _info2 = data.Data;
                if (_info2.tableId != "" + this.tableID) {
                  return;
                }
                this.preBetCount = 0;
                this.hasBet = _info2.big + _info2.small;
                this.lastBet = this.hasBet;
                this.emit(DxMD5Event.BET, _info2);
                DxMD5Proxy.emit(DxMD5Event.updateListBet + (this.tableID - 1), this.hasBet);
              }
              break;
            case ConfigManager.instance.protocolDxMD5.history:
              {
                var _info3 = data.Data.history;
                this.history = _info3;
                this.emit(DxMD5Event.HISTORY);
              }
              break;
            case ConfigManager.instance.protocolDxMD5.details:
              break;
            case ConfigManager.instance.protocolDxMD5.roundBet:
              break;
            case ConfigManager.instance.protocolDxMD5.curRoundGroup:
              break;
            case ConfigManager.instance.protocolDxMD5.doingBet:
              {
                var _info4 = data;
                this.timeLeft = _info4.TimeLeft;
                this.emit(DxMD5Event.DOING_BET, _info4);
              }
              break;
            case ConfigManager.instance.protocolDxMD5.result:
              {
                var _info5 = data;
                this.result = _info5.BigSmallMD5;
                this.emit(DxMD5Event.RESULT, _info5);
              }
              break;
            case ConfigManager.instance.protocolDxMD5.waitNext:
              {
                var _info6 = data;
                this.timeLeft = _info6.TimeLeft;
                this.emit(DxMD5Event.WAIT);
              }
              break;
            case ConfigManager.instance.protocolDxMD5.checkOut:
              var info = data;
              this.winAmount = info.amount;
              if (this.winAmount > 0) {
                this.emit(DxMD5Event.WIN);
              }
              break;
          }
        };
        _createClass(DxMD5ProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return DxMD5ProxyMgr;
      }(ProxyBase);
      var DxMD5Proxy = exports('default', new DxMD5ProxyMgr("DxMD5Proxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxMD5RecordLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, find, Label, UIRenderer, color, Component, ConfigManager, EventManager, NetManager, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      Label = module.Label;
      UIRenderer = module.UIRenderer;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "eba56vjm8tE5pKe8v6tB41U", "DxMD5RecordLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxMd5RecordLayer = exports('default', (_dec = ccclass("DxMD5RecordLayer"), _dec2 = menu("game/dxmd5/DxMd5RecordLayer"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxMd5RecordLayer, _Component);
        function DxMd5RecordLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._curPage = 1;
          return _this;
        }
        var _proto = DxMd5RecordLayer.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getRecord, {
            Offset: 0,
            PageSize: 6,
            RecordType: "bigSmallMD5"
          });
          EventManager.instance.on(ConfigManager.instance.protocolHall.getRecord, this.recvData, this);
        };
        _proto.onBefore = function onBefore() {
          //        //上一页
          this._curPage = this._curPage - 1;
          if (this._curPage < 1) {
            this._curPage = 1;
          }
          var start = (this._curPage - 1) * 6;
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getRecord, {
            Offset: start,
            PageSize: 6,
            RecordType: "bigSmallMD5"
          });
        };
        _proto.onNext = function onNext() {
          this._curPage = this._curPage + 1;
          var start = (this._curPage - 1) * 6;
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getRecord, {
            Offset: start,
            PageSize: 6,
            RecordType: "bigSmallMD5"
          });
        }
        //    // update (dt) {}
        ;

        _proto.showRecordLayerByPage = function showRecordLayerByPage(data) {
          if (data.BetRecord.length == 0) {
            return;
          }
          find("bg/page", this.node).getComponent(Label).string = "Trang:" + this._curPage;
          if (this._curPage == 1) {
            find("bg/before_btn", this.node).active = false;
          } else {
            find("bg/before_btn", this.node).active = true;
          }
          if (this._curPage * 6 < data.TotalNum) {
            find("bg/next_btn", this.node).active = true;
          } else {
            find("bg/next_btn", this.node).active = false;
          }
          find("bg/content_bg/xian1", this.node).active = false;
          find("bg/content_bg/xian2", this.node).active = false;
          find("bg/content_bg/xian3", this.node).active = false;
          find("bg/content_bg/xian4", this.node).active = false;
          for (var i = 1; i < 7; i++) {
            if (i < 6) {
              find("bg/content_bg/xian" + i, this.node).active = false;
            }
            find("bg/content_bg/item" + i, this.node).active = false;
          }
          for (var i = 0; i < data.BetRecord.length; i++) {
            var sdata = data.BetRecord[i];
            if (i < 5) {
              find("bg/content_bg/xian" + (i + 1), this.node).active = true;
            }
            var item = find("bg/content_bg/item" + (i + 1), this.node);
            item.active = true;
            var date = Common.getTimeFormat(sdata.CreateAt);
            item.getChildByName("time_date").getComponent(Label).string = date.date;
            item.getChildByName("time_scond").getComponent(Label).string = date.time;
            //            // item.getChildByName("gameType").getComponent(cc.Label).string =sdata.GameType;
            item.getChildByName("winNum").getComponent(Label).string = Common.numFormat(sdata.Income);
            item.getChildByName("winNum").getComponent(UIRenderer).color = sdata.Income > 0 ? color(0xff, 0, 0, 255) : color(0x68, 0xf5, 0x01, 255);
            item.getChildByName("touzhu_num").getComponent(Label).string = Common.numFormat(sdata.BetAmount);
            item.getChildByName("yue_num").getComponent(Label).string = Common.numFormat(sdata.CurBalance);
            item.getChildByName("gameId").getComponent(Label).string = Common.setGameNo(sdata.GameNo);
          }
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.instance.protocolHall.getRecord) {
            if (data.Data.RecordType == "bigSmallMD5") {
              this.showRecordLayerByPage(data.Data);
            }
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.protocolHall.getRecord, this.recvData, this);
        };
        return DxMd5RecordLayer;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxMD5RoomItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DxMD5Proxy.ts', './Common.ts', './DxMD5Item.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Sprite, Label, instantiate, tween, v3, Component, DxMD5Proxy, DxMD5Event, Common, DxMD5xItem;
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
      Label = module.Label;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      DxMD5Proxy = module.default;
      DxMD5Event = module.DxMD5Event;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      DxMD5xItem = module.DxMD5xItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
      cclegacy._RF.push({}, "7ec74rWFqFJQpK08Ravtsjt", "DxMD5RoomItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var DxMD5RoomItem = exports('default', (_dec = ccclass("DxMD5RoomItem"), _dec2 = menu("game/dxmd5/DxMD5RoomItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(Sprite), _dec12 = property(Sprite), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Sprite), _dec18 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxMD5RoomItem, _Component);
        function DxMD5RoomItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemLayout", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_item", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrItemBg", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTitle", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTag", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tag", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_betAmount", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layout_longInfo", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_longInfo_count", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_longInfo_type", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTypeFrame", _descriptor16, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = DxMD5RoomItem.prototype;
        // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          this.node.active = true;
          this.Node_label.active = true;
          this.node.on("click", function (event) {
            if (DxMD5Proxy.tableID == _this2.item.itemIndex + 1) {
              return;
            }
            _this2.node.parent.getChildByName("itemTabel_" + DxMD5Proxy.tableID).getChildByName("light").active = false;
            DxMD5Proxy.tableID = _this2.item.itemIndex + 1;
            _this2.light.active = true;
            DxMD5Proxy.emit(DxMD5Event.CHANGEROOM);
            gts.Debug.Log("=on=click=tabelID=", DxMD5Proxy.tableID);
          });
        };
        _proto.onDisable = function onDisable() {
          DxMD5Proxy.off(DxMD5Event.updateListBet + this.item.itemIndex);
          this.node.off("click");
        };
        _proto.start = function start() {
          var _this3 = this;
          //将label节点绑定到label root 并跟随原来节点
          // AutoChangeParent.Bind(this.Node_label, this.content_label, true).OnUpdateNotify((dt: number) => {
          //     this.Node_label.getComponent(UIOpacity).opacity = this.node.getComponent(UIOpacity).opacity;
          //     this.Node_label.active = this.node.active;
          //     this.Node_label.scale = this.node.scale;
          // }, this);

          //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this3.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this3.node.active = false;
              _this3.Node_label.active = false;
            }, this);
            this.UpdateUI();
          }
        }
        //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var _this4 = this;
          var tempData = this.item.data;
          this.Node_label.removeAllChildren();
          this.itemLayout.removeAllChildren();
          if (tempData.openResults.length == 0) {
            return;
          }
          this.node.name = "itemTabel_" + (this.item.itemIndex + 1);
          this.light.active = DxMD5Proxy.tableID == this.item.itemIndex + 1;
          DxMD5Proxy.off(DxMD5Event.updateListBet + this.item.itemIndex);
          DxMD5Proxy.on(DxMD5Event.updateListBet + this.item.itemIndex, function (betAmount) {
            if (betAmount > 0) {
              _this4.Label_betAmount.string = betAmount > 0 ? "\u20AB:" + Common.ChangeMoneyFormat(betAmount, 2) : "";
            }
          }, this);
          var rowNum = 5;
          var colNum = 18;
          var startPosX = 13;
          var startPosY = -14;
          var distanceX = 28.2;
          var distanceY = 27;
          var isBigBack = false;
          var iCol_real = 0;
          var iCol_add = 0;
          var iRow = 0;
          var itemMap = {};
          var openResults = tempData.openResults.slice().reverse();
          var maxCol = 0;
          for (var i = 0; i < openResults.length; i++) {
            //3-10:小  11-18：大
            var openNum = openResults[i];
            var isBig = openNum > 10;
            var newItem = instantiate(this.Node_item);
            this.itemLayout.addChild(newItem);
            newItem.active = true;
            newItem.getComponent(Sprite).spriteFrame = this.arrItemBg[isBig ? 0 : 1];
            newItem.getComponent(DxMD5xItem).setString(openNum);
            if (i == 0) ;else if (isBigBack != isBig) {
              iRow = 0;
              iCol_real++;
              iCol_add = 0;
            } else if (iCol_add == 0 && iRow < rowNum - 1 && !itemMap[(iCol_real + iCol_add) * rowNum + colNum * (iRow + 1)]) {
              iRow++;
            } else {
              iCol_add++;
            }
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
          var curPos = v3(-254.5, 67.5, 0);
          if (maxCol >= colNum) {
            curPos.x -= (maxCol - colNum + 1) * distanceX;
          }
          this.itemLayout.position = curPos;
          this.Node_label.position = curPos;
          var tableId = parseInt(tempData.tableId) - 1;
          this.title.spriteFrame = this.arrTitle[tableId];
          this.tag.spriteFrame = this.arrTag[tableId];
          this.Label_betAmount.string = tempData.betAmount > 0 ? "\u20AB:" + Common.ChangeMoneyFormat(tempData.betAmount, 2) : "";
          this.Label_win.string = tempData.prizeAmount > 0 ? "+" + Common.ChangeMoneyFormat(tempData.prizeAmount, 2) : "";
          this.Label_win.node.active = tempData.prizeAmount > 0;
          if (tempData.longCount > 0 && tempData.longType != "") {
            switch (tempData.longType) {
              case "big":
                {
                  this.Sprite_longInfo_type.spriteFrame = this.arrTypeFrame[0];
                  break;
                }
              case "small":
                {
                  this.Sprite_longInfo_type.spriteFrame = this.arrTypeFrame[1];
                  break;
                }
              case "jump":
                {
                  this.Sprite_longInfo_type.spriteFrame = this.arrTypeFrame[2];
                  break;
                }
            }
            this.Layout_longInfo.active = !this.Label_win.node.active;
            this.Label_longInfo_count.string = "" + tempData.longCount;
          } else {
            this.Layout_longInfo.active = false;
          }
        };
        _createClass(DxMD5RoomItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return DxMD5RoomItem;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemLayout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_item", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrItemBg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "arrTitle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "arrTag", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tag", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Label_betAmount", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Layout_longInfo", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_longInfo_count", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_longInfo_type", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "arrTypeFrame", [_dec18], {
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

System.register("chunks:///_virtual/DxMD5RoomList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, ConfigManager, EventManager, NetManager;
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
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "51d6fQMtCNPDKuHEihrayvk", "DxMD5RoomList", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxMD5RoomList = exports('default', (_dec = ccclass("DxMD5RoomList"), _dec2 = menu("game/dxmd5/DxMD5RoomList"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxMD5RoomList, _Component);
        function DxMD5RoomList() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DxMD5RoomList.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          // Common.showWait();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDxMD5.getTabelList, {});
          EventManager.instance.on(ConfigManager.instance.protocolDxMD5.getTabelList, this.recvData, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.protocolDxMD5.getTabelList, this.recvData, this);
        };
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("==recvData==", JSON.stringify(data));
          switch (data.cmd) {
            case ConfigManager.instance.protocolDxMD5.getTabelList:
              {
                // Common.closeWait();
                if (data.Code == 0) {
                  this.scrollView_content.setData(data.Data);
                }
                break;
              }
          }
        };
        return DxMD5RoomList;
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

(function(r) {
  r('virtual:///prerequisite-imports/DxgameMD5', 'chunks:///_virtual/DxgameMD5'); 
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