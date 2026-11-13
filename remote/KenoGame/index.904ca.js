System.register("chunks:///_virtual/KenoButtonLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './MainManager.ts', './BlackWordProxy.ts', './ChatProxy.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, assetManager, find, EditBox, instantiate, ScrollView, UITransform, Layout, tween, ToggleContainer, RichText, Sprite, Label, isValid, Tween, v3, Component, director, Button, UIOpacity, Widget, i18n, ProxyMgr, ConfigManager, UserKey, DataManager, EventManager, MainManager, BlackWordProxy, ChatProxy, ChatProxyEvent, Common;
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
      Prefab = module.Prefab;
      Node = module.Node;
      assetManager = module.assetManager;
      find = module.find;
      EditBox = module.EditBox;
      instantiate = module.instantiate;
      ScrollView = module.ScrollView;
      UITransform = module.UITransform;
      Layout = module.Layout;
      tween = module.tween;
      ToggleContainer = module.ToggleContainer;
      RichText = module.RichText;
      Sprite = module.Sprite;
      Label = module.Label;
      isValid = module.isValid;
      Tween = module.Tween;
      v3 = module.v3;
      Component = module.Component;
      director = module.director;
      Button = module.Button;
      UIOpacity = module.UIOpacity;
      Widget = module.Widget;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      UserKey = module.UserKey;
      DataManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      ChatProxy = module.default;
      ChatProxyEvent = module.ChatProxyEvent;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "ecb04lQ2kZHPY8CIFTiF4Ku", "KenoButtonLogic", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var KenoButtonLogic = exports('default', (_dec = ccclass("KenoButtonLogic"), _dec2 = menu("game/Kenogame/KenoButtonLogic"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KenoButtonLogic, _Component);
        function KenoButtonLogic() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._viewManager = void 0;
          _this._conFigManager = void 0;
          _this._dataManager = void 0;
          _this._audioManager = void 0;
          _this._curPoolPage = 0;
          _initializerDefineProperty(_this, "Node_chatContent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "NodePop", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_topMsg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_emoji", _descriptor4, _assertThisInitialized(_this));
          _this._bundle = void 0;
          _this._isChat = true;
          _this._isScrollRecord = false;
          _this._chatData = null;
          return _this;
        }
        var _proto = KenoButtonLogic.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._netManager = this._mainManager.getNetManager();
          this._viewManager = this._mainManager.getViewManager();
          this._conFigManager = this._mainManager.getConfigManager();
          this._dataManager = this._mainManager.getDataManager();
          this._audioManager = this._mainManager.getAudioManager();
          this._bundle = assetManager.getBundle("KenoGame");
        };
        _proto.onEnable = function onEnable() {
          this.initEvent();
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          //        //大小二级界面按钮事件
          this._eventManager.on(this._conFigManager.protocolKeno.closeKenoGame, this.closeGame, this);
          this._eventManager.on(this._conFigManager.protocolKeno.KenoJackpotHistory, this.showPool, this);
          this._eventManager.on(this._conFigManager.protocolKeno.KenoChat, this.showChatPanel, this);
          this._eventManager.on(this._conFigManager.protocolKeno.KenoCloseChat, this.closeChatAndRecord, this);
          this._eventManager.on(this._conFigManager.protocolKeno.KenoSendChat, this.sendCaht, this);
          this._eventManager.on(this._conFigManager.protocolKeno.KenoPool, this.showPool, this);
          this._eventManager.on(this._conFigManager.protocolKeno.KenochatRecordSwitch, this.chatRecordSwitch, this);
          this._eventManager.on(ConfigManager.instance.eventTransform.onEmojiClick + "keno", function (GradeCode, emoji, isImg, imgData) {
            if (isImg === void 0) {
              isImg = false;
            }
            if (imgData === void 0) {
              imgData = null;
            }
            if (isImg) {
              if (imgData) {
                var updateChat = function updateChat(strImg) {
                  var chatLayer = find("Canvas/KenoGameLayer/root/chat_bg");
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
                          }).destroySelf().start();
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
                        DataManager.instance.bindRemoteFrame(spriteFrame, Sprite_icon);
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
                      DataManager.instance.loadRemoteImage(strImg, {
                        ext: ".png"
                      }, function (err, tex) {
                        if (!err && tex) {
                          DataManager.instance.bindRemoteImage(strImg, tex, Sprite_img);
                        }
                      }, Sprite_img);
                    }
                  }

                  //                            //添加文本
                  item.getComponent(UITransform).width = 340;
                  Node_imgRoot.getComponent(UITransform).width = 340;
                  rext.maxWidth = 340;
                  var imgTag = "<img src=\"icon_V" + GradeCode + "\"/>"; //`<img src="icon_guanliyuan"/>`;
                  //                            // let imgTag = ``;

                  var myNickName = _this2._dataManager.getUserDataForKey(UserKey.NICKNAME);
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
                var msgid = _this2._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
                ChatProxy.sendChat({
                  groupId: "keno",
                  content: emoji,
                  //url
                  msgId: msgid,
                  msgType: 10
                });
              }
              return;
            }
            var boxchat = find("Canvas/KenoGameLayer/root/chat_bg/chat_box").getComponent(EditBox);
            boxchat.string = "" + boxchat.string + emoji;
          }, this);
          this._eventManager.on(this._conFigManager.protocolKeno.getPoolData, this.recvData, this);
          this._eventManager.on(this._conFigManager.protocolKeno.curRoundBet, this.recvData, this);
          ChatProxy.joinChat("keno");
          ChatProxy.getRecord("keno");
          ChatProxy.on(ChatProxyEvent.UPDATE_RECORD, function (data) {
            if (data.msg.GroupId != "keno") {
              return;
            }
            gts.Debug.Log("UPDATE_RECORD=====" + JSON.stringify(data));
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
            if (data.msg.GroupId != "keno") {
              return;
            }
            _this2.updateChat(data.msg);
          }, this);

          //        // //控件事件
          //        // let chatLayer = cc.find("Canvas/KenoGameLayer/root/chat_bg");
          //        // let scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(cc.ScrollView);
          //        // scollview_content.content.on(cc.Node.EventType.SIZE_CHANGED, this.onNodeEventSizeChange, this);
        };

        _proto.showKenoActive = function showKenoActive(data) {
          //        // Common.showTip(i18n.lang["10009"]);
        };
        _proto.showPool = function showPool(data) {
          if (data == "before") {
            //            //上一页
            this._curPoolPage = this._curPoolPage - 1;
            if (this._curPoolPage < 1) {
              this._curPoolPage = 1;
            }
            var start = (this._curPoolPage - 1) * 2;
            this._netManager.sendOnlineData(this._conFigManager.protocolKeno.getPoolData, {
              offset: start,
              limit: 2
            });
            return;
          }
          if (data == "next") {
            //            //下一页
            this._curPoolPage = this._curPoolPage + 1;
            var _start = (this._curPoolPage - 1) * 2;
            this._netManager.sendOnlineData(this._conFigManager.protocolKeno.getPoolData, {
              offset: _start,
              limit: 2
            });
            return;
          }
          var self = this;
          Common.loadPopBuddle("prefab/KenoBigRecord", this._bundle, function () {}, function (KenoBigRecord) {
            var bigRecord = instantiate(KenoBigRecord);
            self._viewManager.popNodeView(bigRecord, true);
            self._viewManager.adeptPopGameSize(bigRecord);
            self._curPoolPage = 1;
            self._netManager.sendOnlineData(self._conFigManager.protocolKeno.getPoolData, {
              offset: 0,
              limit: 2
            });
          }, true);
        };
        _proto.onNodeEventSizeChange = function onNodeEventSizeChange() {
          var chatLayer = find("Canvas/KenoGameLayer/root/chat_bg");
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          if (scollview_content.content.getComponent(UITransform).height > scollview_content.node.getComponent(UITransform).height) {
            scollview_content.scrollToBottom(0.2);
          }
        };
        _proto.sendCaht = function sendCaht() {
          var boxchat = find("Canvas/KenoGameLayer/root/chat_bg/chat_box").getComponent(EditBox);
          this.scheduleOnce(function () {
            boxchat.focus();
          }, 0.1);
          var chatContent = Common.formatInputContent(boxchat.string);
          if (chatContent.length == 0) return;
          boxchat.string = "";
          var code = Common.judgeInputContent(chatContent);
          var userMoney = parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD));
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
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          ChatProxy.sendChat({
            groupId: "keno",
            content: chatContent,
            msgId: msgid,
            msgType: 1
          });
        };
        _proto.showChatPanel = function showChatPanel() {
          var chat_bg = find("Canvas/KenoGameLayer/root/chat_bg");
          var rootLayout = chat_bg.parent.getComponent(Layout);
          rootLayout.enabled = true;
          tween(rootLayout).delay(0.2).call(function () {
            rootLayout.enabled = false;
          }).start();
          if (chat_bg.active) {
            chat_bg.active = false;
            return;
          }
          chat_bg.active = true;
          this._isScrollRecord = true;
          this._isChat = false;
          this.chatRecordSwitch("toggle_chat");
          var toggle = find("toggleContainer", chat_bg).getComponent(ToggleContainer);
          toggle.toggleItems[0].isChecked = true;
          toggle.toggleItems[1].isChecked = false;
        };
        _proto.closeChat = function closeChat() {
          var chat_bg = find("Canvas/KenoGameLayer/root/chat_bg");
          var rootLayout = chat_bg.parent.getComponent(Layout);
          rootLayout.enabled = true;
          tween(rootLayout).delay(0.2).call(function () {
            rootLayout.enabled = false;
          }).start();
          this._isChat = false;
          this._netManager.sendOnlineData(this._conFigManager.protocolChat.exitChat, {
            groupId: "keno"
          }); //推出聊天室
        };

        _proto.chatPanel = function chatPanel() {
          this._isChat = !this._isChat;
          if (this._isChat) {
            this._netManager.sendOnlineData(this._conFigManager.protocolChat.joinChat, {
              groupId: "keno"
            }); //加入聊天
            this._netManager.sendOnlineData(this._conFigManager.protocolChat.getChatRecord, {
              groupId: "keno",
              size: 20
            });
          } else {
            this._netManager.sendOnlineData(this._conFigManager.protocolChat.exitChat, {
              groupId: "keno"
            }); //推出聊天室
          }
        };

        _proto.closeScrollRecord = function closeScrollRecord() {
          this._isScrollRecord = false;
          this._netManager.sendOnlineData(this._conFigManager.protocolChat.exitChat, {
            groupId: "kenoCurBet"
          }); //推出聊天室
        };

        _proto.scrollRecordPanel = function scrollRecordPanel() {
          this._isScrollRecord = !this._isScrollRecord;
          if (this._isScrollRecord) {
            this._netManager.sendOnlineData(this._conFigManager.protocolChat.joinChat, {
              groupId: "kenoCurBet"
            }); //加入聊天
            this._netManager.sendOnlineData(this._conFigManager.protocolKeno.curRoundBet, {});
          } else {
            this._netManager.sendOnlineData(this._conFigManager.protocolChat.exitChat, {
              groupId: "kenoCurBet"
            }); //退出聊天室
          }

          var scollview_content = find("Canvas/KenoGameLayer/root/chat_bg/content_record/content_scrollView").getComponent(ScrollView);
          scollview_content.content.removeAllChildren();
        };
        _proto.closeChatAndRecord = function closeChatAndRecord() {
          var chat_bg = find("Canvas/KenoGameLayer/root/chat_bg");
          chat_bg.active = false;
          this.closeChat();
          this.closeScrollRecord();
        };
        _proto.updateChat = function updateChat(data, isLocal) {
          var _this3 = this;
          var objContent = Common.getChatContent(data.Content, data.MsgType == 10);

          //        // if (data.MsgType == 10) {
          //        //     cc.log("data.MsgType == 10=========" + data.Content);
          //        // }

          if (data.MsgType == 3) {
            //            //置顶消息
            this.Node_topMsg.active = true;
            EventManager.instance.emit(ConfigManager.instance.eventTransform.onChatTopMsg + "keno", objContent);
            return;
          }
          if (data.isCancelTop && this.Node_topMsg.active) {
            this.Node_topMsg.active = false;
            return;
          }
          var chatLayer = find("Canvas/KenoGameLayer/root/chat_bg");
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          if (scollview_content.content.children.length > 20) {
            scollview_content.content.children[0].destroyFromParent();
          }
          var item = instantiate(this.Node_chatContent);
          item.active = true;
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
                    }).destroySelf().start();
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
                  DataManager.instance.bindRemoteFrame(spriteFrame, Sprite_icon);
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
                DataManager.instance.loadRemoteImage(imgUrl, {
                  ext: ".png"
                }, function (err, tex) {
                  if (!err && tex) {
                    DataManager.instance.bindRemoteImage(imgUrl, tex, Sprite_img);
                  }
                }, Sprite_img);
              }
            };
            var Sprite_imgTemp = Node_imgRoot.getChildByName("Sprite_img_0");
            for (var i = 0; i < objContent.img.length; i++) {
              var Sprite_img = Node_imgRoot.getChildByName("Sprite_img_" + i);
              if (!Sprite_img) {
                Sprite_img = instantiate(Sprite_imgTemp);
                // 克隆节点单独持有旧图，模板换图时仍可安全等待新图。
                DataManager.instance.bindRemoteFrame(Sprite_img.getComponent(Sprite).spriteFrame, Sprite_img);
                Sprite_img.name = "Sprite_img_" + i;
                Node_imgRoot.addChild(Sprite_img);
              }
              Sprite_img.active = true;
              addImg(Sprite_img, objContent.img[i]);
            }
            // 保留首图模板；倒序销毁其余旧图片，避免脱树节点继续持有缓存租约。
            for (var _i = Node_imgRoot.children.length - 1; _i >= Math.max(1, objContent.img.length); _i--) {
              Node_imgRoot.children[_i].destroyFromParent();
            }
            if (objContent.img.length === 0 && Sprite_imgTemp) {
              Sprite_imgTemp.active = false;
              DataManager.instance.bindRemoteFrame(null, Sprite_imgTemp);
            }
          }

          //        //添加文本
          item.getComponent(UITransform).width = 490;
          Node_imgRoot.getComponent(UITransform).width = 511;
          rext.maxWidth = 490;
          data.Content = objContent.text ? BlackWordProxy.filter(objContent.text.toString()) : "";
          if (typeof data.Err != "undefined" && data.Err == true) {
            rext.string = "<color=#ff0000>" + data.Content + "</color>";
          } else {
            var _myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
            var strColor = data.FromUserId == _myUid ? "#8fff44" : "#ff6500";
            var imgTag = "<img src=\"icon_V" + data.GradeCode + "\"/>";
            //            // let imgTag = ``;
            if (data.MsgType > 1 && data.MsgType < 10) {
              strColor = "#00ff00";
              imgTag = "<img src=\"icon_guanliyuan\"/>";
            }
            rext.string = imgTag + "<color=" + strColor + ">" + data.FromUser + ":</c><color=#ffffff>" + data.Content + "</color>";
          }
          scollview_content.content.addChild(item);
          this.scheduleOnce(function () {
            scollview_content.scrollToBottom();
          });
        };
        _proto.creatChat = function creatChat() {
          var chatLayer = find("Canvas/KenoGameLayer/root/chat_bg");
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          for (var _iterator = _createForOfIteratorHelperLoose(scollview_content.content.children.slice()), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.removeFromParent();
            child.destroy();
          }
          for (var i = this._chatData.length - 1; i >= 0; i--) {
            var data = this._chatData[i];
            if (data.MsgType == 3) {
              continue;
            }
            this.updateChat(data);
          }
        };
        _proto.getCurDataByPage = function getCurDataByPage(page, data) {
          var allPage = Math.ceil(data.length);
          if (page > allPage) {
            return [];
          }
          if (page <= 0) {
            return [];
          }
          var end = page * 7 > data.length ? data.length : page * 7;
          return data.slice((page - 1) * 7, end);
        }
        //    //显示大奖记录
        ;

        _proto.showJackpotHistory = function showJackpotHistory(data) {
          var _this4 = this;
          if (data.list.length == 0) {
            return;
          }
          find("Canvas/KenoBigRecord/bg/content_bg/page").getComponent(Label).string = "Trang:" + this._curPoolPage;
          if (this._curPoolPage == 1) {
            find("Canvas/KenoBigRecord/bg/before_btn").active = false;
          } else {
            find("Canvas/KenoBigRecord/bg/before_btn").active = true;
          }
          if (this._curPoolPage * 2 < data.TotalNum) {
            find("Canvas/KenoBigRecord/bg/next_btn").active = true;
          } else {
            find("Canvas/KenoBigRecord/bg/next_btn").active = false;
          }
          if (data.bigCount && data.smallCount) {
            var label_pre1 = find("Canvas/KenoBigRecord/bg/label_pre1");
            label_pre1.getComponent(Label).string = this.getPercent(data.bigCount, data.bigCount + data.smallCount);
            var label_pre2 = find("Canvas/KenoBigRecord/bg/label_pre2");
            label_pre2.getComponent(Label).string = this.getPercent(data.smallCount, data.bigCount + data.smallCount);
          }
          for (var i = 1; i < 2; i++) {
            find("Canvas/KenoBigRecord/bg/content_bg/scrollview/content/item" + i).active = false;
          }
          var _loop = function _loop() {
            var sdata = data.list[_i2];
            var item = find("Canvas/KenoBigRecord/bg/content_bg/scrollview/content/item" + (_i2 + 1));
            if (!isValid(item)) return 1; // continue
            item.active = true;
            item.getChildByName("gameId").getComponent(Label).string = sdata.GameNo;
            var date = Common.getTimeFormat(sdata.CreateAt);
            item.getChildByName("time_date").getComponent(Label).string = date.date;
            item.getChildByName("time_scond").getComponent(Label).string = date.time;
            item.getChildByName("lbl_result").getComponent(Label).string = sdata.Result == 1 ? "Xỉu" : "Tài";
            item.getChildByName("lbl_bigmoney").getComponent(Label).string = Common.numFormat(sdata.Jackpot);
            item.getChildByName("lbl_num").getComponent(Label).string = sdata.LogCount;
            var node_prize = find("node_prize", item);
            node_prize.removeAllChildren();
            for (var j = 0; j < 4; j++) {
              var sub_prize = find("Canvas/KenoBigRecord/bg/content_bg/sub_prize");
              var sub_item = instantiate(sub_prize);
              sub_item.active = true;
              sub_item.parent = node_prize;
              var lbl_name = find("lbl_name", sub_item);
              lbl_name.getComponent(Label).string = "...";
              var lbl_money = find("lbl_money", sub_item);
              lbl_money.getComponent(Label).string = "";
              if (j < 3 && sdata.JackpotLog && sdata.JackpotLog[j]) {
                lbl_name.getComponent(Label).string = sdata.JackpotLog[j].NickName;
                lbl_money.getComponent(Label).string = Common.ChangeMoneyShow(sdata.JackpotLog[j].Amount, 2);
              }
            }
            var layout = node_prize.getComponent(Layout);
            layout.updateLayout();
            item.getComponent(UITransform).height = node_prize.getComponent(UITransform).height;
            var xian = find("xian", item);
            if (isValid(xian)) {
              xian.getComponent(Widget).updateAlignment();
            }
            var btn_details = find("btn_details", item);
            btn_details.active = true;
            btn_details.targetOff(_this4);
            btn_details.on(Node.EventType.TOUCH_END, function (event) {
              btn_details.active = false;
              node_prize.removeAllChildren();
              for (var _j = 0; _j < sdata.JackpotLog.length; _j++) {
                var _sub_prize = find("Canvas/KenoBigRecord/bg/content_bg/sub_prize");
                var _sub_item = instantiate(_sub_prize);
                _sub_item.active = true;
                _sub_item.parent = node_prize;
                var _lbl_name = find("lbl_name", _sub_item);
                //                        // lbl_name.getComponent(cc.Label).string = "...";
                var _lbl_money = find("lbl_money", _sub_item);
                //                        // lbl_money.getComponent(cc.Label).string = "";
                if (sdata.JackpotLog && _j < sdata.JackpotLog.length && sdata.JackpotLog[_j]) {
                  _lbl_name.getComponent(Label).string = sdata.JackpotLog[_j].NickName;
                  _lbl_money.getComponent(Label).string = Common.ChangeMoneyShow(sdata.JackpotLog[_j].Amount, 2);
                }
              }
              var layout = node_prize.getComponent(Layout);
              layout.updateLayout();
              if (node_prize.getComponent(UITransform).height > item.getComponent(UITransform).height) {
                item.getComponent(UITransform).height = node_prize.getComponent(UITransform).height;
              }
              var xian = find("xian", item);
              if (isValid(xian)) {
                xian.getComponent(Widget).updateAlignment();
              }
            }, _this4);
          };
          for (var _i2 = 0; _i2 < data.list.length; _i2++) {
            if (_loop()) continue;
          }
        };
        _proto.getPercent = function getPercent(num, total) {
          num = parseFloat(num);
          total = parseFloat(total);
          if (isNaN(num) || isNaN(total)) {
            return "-";
          }
          return total <= 0 ? "0%" : Math.round(num / total * 10000) / 100.0 + "%";
        };
        _proto.closeGame = function closeGame() {
          this._viewManager.closePopGame("KenoGame");
        };
        _proto.recvData = function recvData(data) {
          Common.showLog("比大小游戏按钮网络");
          if (data.cmd == this._conFigManager.protocolKeno.getPoolData) {
            //            //大奖记录
            if (data.Code != 0) {
              Common.showTip(i18n.errTip(data.Code));
              return;
            }
            if (data.GameType == "keno" && data.Data) {
              this.showJackpotHistory(data.Data);
            }
          } else if (data.cmd == this._conFigManager.protocolKeno.curRoundBet) {
            //            //当前下注记录
            if (data.Code != 0) {
              Common.showTip(i18n.errTip(data.Code));
              return;
            }
            if (data.GameType == "keno" && data.Data) {
              this.showCurrRecord(data.Data);
            }
          }
        };
        _proto.chatRecordSwitch = function chatRecordSwitch(data) {
          if (!data) return;
          if (this._isChat && data == "toggle_chat") return;
          if (this._isScrollRecord && data == "toggle_record") return;
          find("Canvas/KenoGameLayer/root/chat_bg/content_chat").active = data === "toggle_chat" ? true : false;
          find("Canvas/KenoGameLayer/root/chat_bg/chat_box").active = data === "toggle_chat" ? true : false;
          find("Canvas/KenoGameLayer/root/chat_bg/send_chat").active = data === "toggle_chat" ? true : false;
          find("Canvas/KenoGameLayer/root/chat_bg/content_record").active = data === "toggle_record" ? true : false;
          this.Node_emoji.active = data === "toggle_record" ? false : true;

          //        // let str = data == "toggle_chat" ? 1 : 2;
          //        // this._bundle.load(`textures/game/chatdi${str}`, cc.SpriteFrame, (err, sp: cc.SpriteFrame) => {
          //        //     cc.find("Canvas/KenoGameLayer/root/chat_bg").getComponent(cc.Sprite).spriteFrame = sp;
          //        // });

          this.chatPanel();
          this.scrollRecordPanel();
        };
        _proto.createCurrRecordItem = function createCurrRecordItem(index, info) {
          var content_scrollView = find("Canvas/KenoGameLayer/root/chat_bg/content_record/content_scrollView");
          if (!isValid(content_scrollView)) return;
          var scollview_content = content_scrollView.getComponent(ScrollView);
          var prefab = find("Canvas/KenoGameLayer/root/chat_bg/item");
          var item = instantiate(prefab);
          if (!isValid(item)) return;
          item.active = true;
          item.getComponent(UITransform).priority = index;
          item.name = info.NickName;
          item.parent = scollview_content.content;
          item.getChildByName("spr_bg").active = index % 2 == 0 ? false : true;
          var strName = info.NickName;
          if (strName && strName.length > 5) {
            strName = strName.substring(0, 5) + "...";
          }
          find("sub_item/lbl_name", item).getComponent(Label).string = index + 1 + ". " + strName;
          find("sub_item/lbl_money", item).getComponent(Label).string = Common.ChangeMoneyShow(info.Bets, 2);
          find("sub_item/lbl_prize1", item).active = info.Position == "big" ? true : false;
          find("sub_item/lbl_prize2", item).active = info.Position == "small" ? true : false;
          item.setPosition(item.position.x, -25 * item.getComponent(UITransform).height);
          var offset_y = -index * item.getComponent(UITransform).height;
          Tween.stopAllByTarget(item);
          tween(item).to(0.5, {
            position: v3(item.getPosition().x, offset_y)
          }).start();
        };
        _proto.updateListView = function updateListView(infoList) {
          var _this5 = this;
          if (infoList.length == 0) {
            return;
          }
          var scollview_content = find("Canvas/KenoGameLayer/root/chat_bg/content_record/content_scrollView").getComponent(ScrollView);
          var prefab = find("Canvas/KenoGameLayer/root/chat_bg/item");
          scollview_content.content.getComponent(UITransform).height = prefab.getComponent(UITransform).height * infoList.length;

          //        //获取新的的排序信息
          var newListInfo = [];
          infoList.forEach(function (info, index) {
            newListInfo[info.NickName] = "" + info.NickName;
          });
          var children = scollview_content.content.children;
          for (var i = children.length - 1; i >= 0; --i) {
            var node = children[i];
            if (!newListInfo[node.name]) {
              node.destroyFromParent();
            }
          }

          //        //获取旧的排序信息
          var oldListInfo = [];
          children.forEach(function (node, index) {
            oldListInfo[node.name] = {
              lastIndex: node.getComponent(UITransform).priority,
              newIndex: node.getComponent(UITransform).priority
            };
          });

          //        //获取新的排序信息
          infoList.sort(function (a, b) {
            return b.Bets - a.Bets;
          });
          infoList.forEach(function (info, index) {
            var oldInfo = oldListInfo[info.NickName];
            if (!oldInfo) {
              _this5.createCurrRecordItem(index, info);
            } else if (oldInfo.newIndex != index) {
              oldInfo.newIndex = index;
              var item = find(info.NickName, scollview_content.content);
              item.getChildByName("spr_bg").active = index % 2 == 0 ? false : true;
              var strName = info.NickName;
              if (strName && strName.length > 5) {
                strName = strName.substring(0, 5) + "...";
              }
              find("sub_item/lbl_name", item).getComponent(Label).string = index + 1 + ". " + strName;
              find("sub_item/lbl_money", item).getComponent(Label).string = Common.ChangeMoneyShow(info.Bets, 2);
              find("sub_item/lbl_prize1", item).active = info.Position == "big" ? true : false;
              find("sub_item/lbl_prize2", item).active = info.Position == "small" ? true : false;
              item.getComponent(UITransform).priority = index;
              var offset_y = -index * item.getComponent(UITransform).height;
              Tween.stopAllByTarget(item);
              tween(item).to(0.5, {
                position: v3(item.getPosition().x, offset_y)
              }).start();
            }
          });
        };
        _proto.showCurrRecord = function showCurrRecord(data) {
          if (data.length == 0) {
            return;
          }
          this.updateListView(data);
        };
        _proto.onDisable = function onDisable() {
          //        //大小二级界面按钮事件
          this._eventManager.off(this._conFigManager.protocolKeno.closeKenoGame, this.closeGame, this);
          this._eventManager.off(this._conFigManager.protocolKeno.KenoJackpotHistory, this.showPool, this);
          this._eventManager.off(this._conFigManager.protocolKeno.KenoChat, this.showChatPanel, this);
          this._eventManager.off(this._conFigManager.protocolKeno.KenoCloseChat, this.closeChatAndRecord, this);
          this._eventManager.off(this._conFigManager.protocolKeno.KenoSendChat, this.sendCaht, this);
          this._eventManager.off(this._conFigManager.protocolKeno.KenoPool, this.showPool, this);
          this._eventManager.off(this._conFigManager.protocolKeno.KenochatRecordSwitch, this.chatRecordSwitch, this);
          this._eventManager.off(ConfigManager.instance.eventTransform.onEmojiClick + "keno");

          //        //网络协议事件
          this._eventManager.off(this._conFigManager.protocolKeno.getPoolData, this.recvData, this);
          this._eventManager.off(this._conFigManager.protocolKeno.curRoundBet, this.recvData, this);
          ChatProxy.exitChat("keno");
          ProxyMgr.close(this);
        };
        return KenoButtonLogic;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_chatContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "NodePop", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_topMsg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_emoji", [_dec6], {
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

System.register("chunks:///_virtual/KenoGame", ['./KenoButtonLogic.ts', './KenoGameCtrl.ts', './KenoGameDef.ts', './KenoGameDetailsLayer.ts', './KenoGameHistoryLayer.ts', './KenoGameLogic.ts', './KenoHand.ts', './KenoHelpPumping.ts', './KenoModel.ts', './KenoPathItem.ts', './KenoUtils.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/KenoGameCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ConfigManager.ts', './EventManager.ts', './ViewManager.ts', './KenoGameDef.ts', './Common.ts', './NetManager.ts', './KenoModel.ts'], function (exports) {
  var _createClass, cclegacy, i18n, ConfigManager, EventManager, ViewManager, eProto, eEvent, Common, NetManager, KenoModel;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      KenoModel = module.KenoModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b356e+RBSVIV4Niz4TiNifw", "KenoGameCtrl", undefined);
      var KenoGameCtrl = exports('KenoGameCtrl', /*#__PURE__*/function () {
        function KenoGameCtrl() {
          this._configManager = null;
          this._eventManager = null;
          this._model = null;
          this._configManager = ConfigManager.instance;
          this._eventManager = EventManager.instance;
          this._model = KenoModel.instance;
        }
        var _proto = KenoGameCtrl.prototype;
        _proto.regist = function regist() {
          //        //注册网络监听--本游戏
          for (var _i = 0, _Object$entries = Object.entries(eProto); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            this._eventManager.on(value, this.onRecvData, this);
          }
          //        // //注册网络监听--大厅
          this._eventManager.on(this._configManager.protocolHall.login, this.onRecvData, this); //断线重连

          this._eventManager.on(this._configManager.protocolHall.getVnd, this.onRecvData, this); //断线重连
        };

        _proto.reqBet = function reqBet(pos, amount) {
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            pos: pos,
            amount: amount
          });
        };
        _proto.unRegist = function unRegist() {
          //        //注册网络监听--本游戏
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            this._eventManager.off(value, this.onRecvData, this);
          }
          //        // //注册网络监听--大厅
          this._eventManager.off(this._configManager.protocolHall.login, this.onRecvData, this); //断线重连

          this._eventManager.off(this._configManager.protocolHall.getVnd, this.onRecvData, this); //断线重连
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.Log("=KenoGame=onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          var emitData = null;
          switch (data.cmd) {
            case eProto.getConfig:
              {
                //                //获取游戏配置
                if (!(!data.Code || data.Code == 0)) {
                  Common.showTipPop(i18n.errTip(data.Code), function () {
                    ViewManager.instance.closePopGame("Kenogame");
                  }, null);
                  return;
                }
                this._model.hdInfo = data.Data;
                this._model.pathData = this._model.hdInfo.History.reverse();
                emitData = {};
                break;
              }
            case eProto.HD_Bet:
              {
                //                //下注各种场景  下注叠加
                emitData = data;
                break;
              }
            case eProto.kenoXiazhu:
              {
                //                //总盘下注变化
                emitData = data;
                break;
              }
            case eProto.backBet:
              {
                //                //返回
                emitData = data;
                break;
              }
            case eProto.kenoResult:
              {
                //                //结果通知
                emitData = data;
                var keys = Object.keys(KenoModel.instance.betList);
                if (keys.length > 0) {
                  KenoModel.instance.betListBack = KenoModel.instance.betList;
                  KenoModel.instance.betList = {};
                }
                break;
              }
            case eProto.kenoShowResult:
              {
                //                //checkout
                emitData = data;
                break;
              }
            case eProto.kenoNextWait:
              {
                //                //等待下一局
                emitData = data;
                break;
              }
            case this._configManager.protocolHall.login:
              {
                //                //断线重连
                emitData = {};
                break;
              }
            case this._configManager.protocolHall.getVnd:
              {
                //                //下注各种场景  下注叠加
                emitData = data.Data;
                break;
              }
            case eProto.HD_GetGamePlay:
              {
                //获取赔率
                emitData = data;
                KenoModel.instance.arrRateInfo = data.Data;
                break;
              }
          }
          if (emitData != null) {
            this._eventManager.emit(eEvent.updateView, data.cmd, emitData);
          }
        };
        _createClass(KenoGameCtrl, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new KenoGameCtrl();
            }
            return this._instance;
          }
        }]);
        return KenoGameCtrl;
      }());
      KenoGameCtrl._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KenoGameDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6e9a9r12yJMaaWoBTAfVo8P", "KenoGameDef", undefined); //gameDef moudle
      /** 大小 */
      var cBundle = exports('cBundle', "KenoGame");
      var eRoomStatus = exports('eRoomStatus', {
        NONE: 0,
        START: 1,
        BET: 2,
        STOP: 3,
        END: 4
      });
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        BET: 1,
        END: 2
      });
      var Chips = exports('Chips', [1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000]);

      //网络消息 C2S_:表示send S2C_:recv  没有标识:send&&recv
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["getConfig"] = "keno/HD_Enter";
        eProto["history"] = "keno/HD_History";
        eProto["HD_Bet"] = "keno/HD_Bet";
        eProto["kenoXiazhu"] = "keno/doingBet";
        eProto["kenoResult"] = "keno/result";
        eProto["kenoShowResult"] = "keno/checkout";
        eProto["kenoNextWait"] = "keno/waiteNext";
        eProto["backBet"] = "keno/refund";
        eProto["HD_GetGamePlay"] = "lobby/HD_GetGamePlay";
        return eProto;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["updateView"] = "Keno_updateView";
        eEvent["resetData"] = "Keno_resetData";
        eEvent["updatePath"] = "updatePath";
        return eEvent;
      }({})); //

      //////////////////////////////////////////////
      /** S2C 网络包结构
       * S2C = {"Data":{},"GameType":"yxx","Action":"HD_UpdatePlayerNum","ErrMsg":"操作成功","Code":0,"cmd":"yxx/HD_UpdatePlayerNum"}
       */
      /**配置信息 */
      //歷史記錄
      //等待 {"Action":"waiteNext","GameType":"Keno","TimeLeft":9,"cmd":"Keno/waiteNext"}
      // //自己下注
      // export interface Bet {
      //     big: number;
      //     small: number;
      // }
      var posMap = exports('posMap', {
        daLayer: 0,
        xiaoLayer: 1,
        Node_jin: 2,
        Node_shui: 4,
        Node_mu: 3,
        Node_huo: 5,
        Node_tu: 6
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KenoGameDetailsLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, assetManager, find, Label, sp, SpriteFrame, Sprite, Component, i18n, ConfigManager, EventManager, NetManager, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      find = module.find;
      Label = module.Label;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
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
      cclegacy._RF.push({}, "dcaadh7bOdJJJni2I5DGiBH", "KenoGameDetailsLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Limit = 7;
      var eBSTag = {
        small: 0,
        big: 1
      };
      var RequestType = {
        PAGE: 0,
        DETAILS_BIG: 1,
        DETAILS_SMALL: 2
      };
      var KenoGameDetailsLayer = exports('default', (_dec = ccclass("KenoGameDetailsLayer"), _dec2 = menu("game/Kenogame/KenoGameDetailsLayer"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KenoGameDetailsLayer, _Component);
        function KenoGameDetailsLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._curRoomid = 0;
          _this._curBigPage = 0;
          _this._curSmallPage = 0;
          _this._bundle = void 0;
          _this._detailsData = null;
          _this._reqType = RequestType.PAGE;
          _this._detailsIndex = 0;
          return _this;
        }
        var _proto = KenoGameDetailsLayer.prototype;
        _proto.onLoad = function onLoad() {
          this._bundle = assetManager.getBundle("Kenogame");
          var bigLayer = find("Canvas/KenoGameDetails/bg/bigLayer");
          for (var i = 0; i < Limit; i++) {
            bigLayer.getChildByName("item" + (i + 1)).active = false;
          }
          var smallLayer = find("Canvas/KenoGameDetails/bg/smallLayer");
          for (var i = 0; i < Limit; i++) {
            smallLayer.getChildByName("item" + (i + 1)).active = false;
          }
        };
        _proto.onEnable = function onEnable() {
          this.requestDetails(this._curRoomid);
          EventManager.instance.on(ConfigManager.instance.protocolKeno.getDetails, this.recvData, this);
        };
        _proto.onBefore = function onBefore() {
          //        //上一页
          this._reqType = RequestType.PAGE;
          this.requestDetails(this._curRoomid - 1);
        };
        _proto.onNext = function onNext() {
          this._reqType = RequestType.PAGE;
          this.requestDetails(this._curRoomid + 1);
        };
        _proto.changePageBigDetails = function changePageBigDetails(event, data) {
          this._reqType = RequestType.DETAILS_BIG;
          if (data == "next") {
            this._detailsIndex = 1;
            this.requestDetails(this._curRoomid, eBSTag.big, this._curBigPage + 1);
          } else {
            if (this._curBigPage <= 1) {
              return;
            }
            this._detailsIndex = -1;
            this.requestDetails(this._curRoomid, eBSTag.big, this._curBigPage - 1);
          }
        };
        _proto.changePageSmallDetails = function changePageSmallDetails(event, data) {
          this._reqType = RequestType.DETAILS_SMALL;
          if (data == "next") {
            this._detailsIndex = 1;
            this.requestDetails(this._curRoomid, eBSTag.small, this._curSmallPage + 1);
          } else {
            if (this._curSmallPage <= 1) {
              return;
            }
            this._detailsIndex = -1;
            this.requestDetails(this._curRoomid, eBSTag.small, this._curSmallPage - 1);
          }
        }
        //    // update (dt) {}
        ;

        _proto.showDetailsView = function showDetailsView() {
          var _this2 = this;
          var bigLayer = find("Canvas/KenoGameDetails/bg/bigLayer");
          var smallLayer = find("Canvas/KenoGameDetails/bg/smallLayer");
          var publicLayer = find("Canvas/KenoGameDetails/bg/publicLayer");
          var redata = this._detailsData.Data;
          if (redata.Keno.Dice1 == 0 && redata.BetBigList.length == 0 && redata.BetSmallList.length == 0) {
            Common.showTip(i18n.t("10010"));
            return;
          }
          if (redata.Keno.Dice1 != 0) {
            find("Canvas/KenoGameDetails").active = true;
            this._curRoomid = redata.Keno.ShowId;

            //            // publicLayer.getChildByName("room_id").getComponent(cc.Label).string = "#" + redata.Keno.ShowId;
            publicLayer.getChildByName("room_id").getComponent(Label).string = Common.setGameNo(redata.Keno.ShowId);
            var date = Common.getTimeFormat(redata.Keno.CreateAt);
            publicLayer.getChildByName("time").getComponent(Label).string = date.time;
            publicLayer.getChildByName("label_result").getComponent(Label).string = redata.Keno.Dice1 + redata.Keno.Dice2 + redata.Keno.Dice3 + "";
            publicLayer.getChildByName("label_big").getComponent(Label).string = Common.ChangeMoneyShow(redata.Keno.BetBig + redata.Keno.RefundBig, 2) + "/" + Common.ChangeMoneyShow(redata.Keno.RefundBig, 2);
            publicLayer.getChildByName("label_small").getComponent(Label).string = Common.ChangeMoneyShow(redata.Keno.BetSmall + redata.Keno.RefundSmall, 2) + "/" + Common.ChangeMoneyShow(redata.Keno.RefundSmall, 2);
            smallLayer.getChildByName("people_bg").getChildByName("people_num").getComponent(Label).string = redata.Keno.BetSmallCount + "";
            bigLayer.getChildByName("people_bg").getChildByName("people_num").getComponent(Label).string = redata.Keno.BetBigCount + "";
            smallLayer.getChildByName("small_image").active = redata.Keno.Result == 2;
            bigLayer.getChildByName("big_image").active = redata.Keno.Result == 1;
            if (redata.Keno.Result == 1) {
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
              var dire = redata.Keno["Dice" + i];
              _this2._bundle.load("textures/game/s" + dire + "/spriteFrame", SpriteFrame, function (err, DiceNum) {
                publicLayer.getChildByName("sa" + count).getComponent(Sprite).spriteFrame = DiceNum;
              });
            };
            for (var i = 1; i < 4; i++) {
              _loop();
            }
            for (var i = 0; i < Limit; i++) {
              bigLayer.getChildByName("item" + (i + 1)).active = false;
              smallLayer.getChildByName("item" + (i + 1)).active = false;
            }
          }
        };
        _proto.showBigDetails = function showBigDetails(page, data) {
          var curData = this.getCurDataByPage(data);
          if (curData.length == 0) {
            return;
          }
          this._curBigPage = page;
          var bigLayer = find("Canvas/KenoGameDetails/bg/bigLayer");
          for (var i = 0; i < Limit; i++) {
            bigLayer.getChildByName("item" + (i + 1)).active = false;
          }
          bigLayer.getChildByName("page").getComponent(Label).string = this._curBigPage + "";
          for (var i = 0; i < curData.length; i++) {
            var item = bigLayer.getChildByName("item" + (i + 1));
            item.active = true;
            var datatt = curData[i].CreateAt;
            item.getChildByName("time_scond").getComponent(Label).string = Common.getTimeFormat(datatt).time;
            item.getChildByName("winNum").getComponent(Label).string = curData[i].Name;
            item.getChildByName("touzhu_num").getComponent(Label).string = Common.ChangeMoneyShow(curData[i].BetAmount, 2) + "";
            item.getChildByName("yue_num").getComponent(Label).string = Common.ChangeMoneyShow(curData[i].Refund, 2) + "";
          }
        };
        _proto.showSmallDetails = function showSmallDetails(page, data) {
          var curData = this.getCurDataByPage(data);
          if (curData.length == 0) {
            return;
          }
          this._curSmallPage = page;
          var smallLayer = find("Canvas/KenoGameDetails/bg/smallLayer");
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
            item.getChildByName("yue_num").getComponent(Label).string = Common.ChangeMoneyShow(curData[i].Refund, 2) + "";
          }
        };
        _proto.getCurDataByPage = function getCurDataByPage(data) {
          return data.slice(0, Limit);
        };
        _proto.recvData = function recvData(data) {
          if (data.Code != 0) {
            return;
          }
          if (data.cmd == ConfigManager.instance.protocolKeno.getDetails) {
            this._detailsData = data;
            var redata = data.Data;
            switch (this._reqType) {
              case RequestType.PAGE:
                this._curBigPage = 1;
                this._curSmallPage = 1;
                break;
              case RequestType.DETAILS_BIG:
                this._curBigPage += this._detailsIndex;
                break;
              case RequestType.DETAILS_SMALL:
                this._curSmallPage += this._detailsIndex;
                break;
            }
            this.showDetailsView();
            if (redata.BetBigList.length > 0) {
              this.showBigDetails(this._curBigPage, redata.BetBigList);
            }
            if (redata.BetSmallList.length > 0) {
              this.showSmallDetails(this._curSmallPage, redata.BetSmallList);
            }
          }
        };
        _proto.requestDetails = function requestDetails(roomID, pos, page, limit) {
          if (limit === void 0) {
            limit = Limit;
          }
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolKeno.getDetails, {
            gameId: roomID,
            pos: pos,
            //> 0 ? "big" : "small",
            page: page ? page - 1 : 0,
            limit: limit
          });
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.protocolKeno.getDetails, this.recvData, this);
        };
        return KenoGameDetailsLayer;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KenoGameHistoryLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './GUtil.ts', './KenoGameDef.ts', './KenoModel.ts', './KenoUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, SpriteFrame, Node, ScrollView, find, Label, instantiate, Sprite, tween, v3, UITransform, v2, Component, EventManager, GUtil, eEvent, KenoModel, KenoUtils;
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
      Node = module.Node;
      ScrollView = module.ScrollView;
      find = module.find;
      Label = module.Label;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      KenoModel = module.KenoModel;
    }, function (module) {
      KenoUtils = module.KenoUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "452cbHzD1tOU7RmAXJMT9+w", "KenoGameHistoryLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_ROW = 3;
      var KenoMd5HistoryLayer = exports('default', (_dec = ccclass("KenoGameHistoryLayer"), _dec2 = menu("game/Kenomd5/KenoMd5HistoryLayer"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(SpriteFrame), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(gts.List), _dec9 = property(ScrollView), _dec10 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KenoMd5HistoryLayer, _Component);
        function KenoMd5HistoryLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "dItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xItem", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wuXinIcon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wuXingItem", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xian1", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layerList", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll_his", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_hisItem", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = KenoMd5HistoryLayer.prototype;
        _proto.onLoad = function onLoad() {
          this.updatePath();
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.updatePath, this.updatePath, this);
        };
        _proto.drawPathLayer1 = function drawPathLayer1() {
          var _this2 = this;
          var redata = KenoModel.instance.pathData;
          var history = redata.slice();
          var daCounts = 0;
          for (var i = 0; i < history.length; i++) {
            var num = history[i];
            var isDa = num >= 811;
            daCounts += isDa ? 1 : 0;
          }
          history.push(-1);
          this.layerList.setData(history);
          this.layerList.refresh();
          var da_Num = find("bg/content_bg/layer1/da_bg/pernum", this.node);
          var xiao_Num = find("bg/content_bg/layer1/xiao_bg/pernum", this.node);
          var percentDa = 100 * daCounts / history.length;
          da_Num.getComponent(Label).string = ":" + KenoUtils.instance.numberFormat(percentDa, 2) + "%";
          xiao_Num.getComponent(Label).string = ":" + KenoUtils.instance.numberFormat(100 - percentDa, 2) + "%";
          this.scheduleOnce(function () {
            _this2.layerList.scrollView.scrollToRight(0.25);
          }, 0.25);
        };
        _proto.drawPathLayer2 = function drawPathLayer2() {
          var pathlist = this.scroll_his.content;
          pathlist.removeAllChildren();
          var redata = KenoModel.instance.pathData;
          var row = 0;
          var col = 0;
          var tempNum = -1;
          var list = [];
          var wuXingCounts = [0, 0, 0, 0, 0];
          for (var i = 0; i < redata.length; i++) {
            var num = redata[i];

            //金：210-695,木：764-855,水：696-763,火：856-923,土：924-1410,
            var wuXingIndex = num < 696 ? 0 : num < 764 ? 2 : num < 856 ? 1 : num < 924 ? 3 : 4;
            wuXingCounts[wuXingIndex]++;
            var item = {
              result: wuXingIndex
            };
            item["index"] = wuXingIndex;
            if (tempNum != -1) {
              if (wuXingIndex == tempNum) {
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
            tempNum = wuXingIndex;
          }

          //设置百分比
          var Node_percentInfo = find("bg/content_bg/layer2/Node_percentInfo", this.node);
          var children = Node_percentInfo.children;
          for (var _i = 0; _i < children.length; _i++) {
            var pernum = children[_i].getChildByName("pernum").getComponent(Label);
            var percent = 100 * wuXingCounts[_i] / redata.length;
            pernum.string = KenoUtils.instance.numberFormat(percent, 2) + "%";
          }
          var result = list;
          for (var _i2 = 0; _i2 < result.length; _i2++) {
            var _list = result[_i2];
            var node = instantiate(this.node_hisItem);
            node.active = true;
            pathlist.addChild(node);
            for (var j = 0; j < _list.length; j++) {
              var _item = _list[j];
              var itemL = instantiate(this.wuXingItem);
              itemL.getComponent(Sprite).spriteFrame = this.wuXinIcon[_item.result];
              node.addChild(itemL);
              itemL.active = true;
              var pos = this.getPositionByRowCol(j, node);
              itemL.setPosition(pos.x, pos.y);
            }
            if (_i2 == result.length - 1) {
              var lastItem = node.children[node.children.length - 1];
              tween(lastItem).to(0.5, {
                scale: v3(0.75, 0.75, 0.75)
              }).to(0.5, {
                scale: v3(0.85, 0.85, 0.85)
              }).union().repeatForever().start();
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
        };
        _proto.getPositionByRowCol = function getPositionByRowCol(row, itemBg) {
          var width = itemBg.getComponent(UITransform).width;
          var hight = itemBg.getComponent(UITransform).height;
          var perh = hight / MAX_ROW;
          var y = perh - row * perh;
          return {
            x: 0,
            y: y
          };
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
          return degree;
        };
        _proto.drawLine = function drawLine(item1, item2, type, isfan) {
          var xianType = this.xian1;
          var pos1 = v2(item1.parent.getPosition().x, item1.getPosition().y);
          var pos2 = v2(item2.parent.getPosition().x, item2.getPosition().y);
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
          var x = rol / 20 * widthP;
          var y = (num - 200) / 1200 * heightP;
          return {
            x: x,
            y: y
          };
        };
        _proto.updatePath = function updatePath() {
          this.drawPathLayer1();
          this.drawPathLayer2();
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.updatePath, this.updatePath, this);
        };
        return KenoMd5HistoryLayer;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wuXinIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "wuXingItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "xian1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "layerList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scroll_his", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_hisItem", [_dec10], {
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

System.register("chunks:///_virtual/KenoGameLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts', './GameDef.ts', './GUtil.ts', './ViewManager.ts', './KenoGameDef.ts', './KenoModel.ts', './ChipProxy.ts', './ChipSmall.ts', './ChipItem.ts', './KenoGameCtrl.ts', './KenoUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, AudioClip, Prefab, sp, ScrollView, Button, Label, assetManager, instantiate, NodePool, resources, UITransform, v3, Vec3, tween, UIOpacity, find, Tween, Sprite, isValid, color, Color, Component, i18n, AudioManager, ConfigManager, DataManager, UserProxyEvent, UserKey, EventManager, NetManager, Common, GameDef, GUtil, ViewManager, eEvent, cBundle, eProto, Chips, eRunStatus, posMap, KenoModel, ChipProxy, ChipEvent, ChipType, ChipSmall, ChipItem, KenoGameCtrl, KenoUtils;
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
      Node = module.Node;
      AudioClip = module.AudioClip;
      Prefab = module.Prefab;
      sp = module.sp;
      ScrollView = module.ScrollView;
      Button = module.Button;
      Label = module.Label;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      resources = module.resources;
      UITransform = module.UITransform;
      v3 = module.v3;
      Vec3 = module.Vec3;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      find = module.find;
      Tween = module.Tween;
      Sprite = module.Sprite;
      isValid = module.isValid;
      color = module.color;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserProxyEvent = module.UserProxyEvent;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eEvent = module.eEvent;
      cBundle = module.cBundle;
      eProto = module.eProto;
      Chips = module.Chips;
      eRunStatus = module.eRunStatus;
      posMap = module.posMap;
    }, function (module) {
      KenoModel = module.KenoModel;
    }, function (module) {
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
      ChipType = module.ChipType;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      KenoGameCtrl = module.KenoGameCtrl;
    }, function (module) {
      KenoUtils = module.KenoUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;
      cclegacy._RF.push({}, "a4051RC+lFFJZ6bIaAEXgR7", "KenoGameLogic", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var KenoGameLogic = exports('default', (_dec = ccclass("KenoGameLogic"), _dec2 = menu("game/Kenogame/KenoGameLogic"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(AudioClip), _dec9 = property(AudioClip), _dec10 = property(Prefab), _dec11 = property(sp.Skeleton), _dec12 = property(ScrollView), _dec13 = property(Prefab), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Button), _dec18 = property(Button), _dec19 = property(Label), _dec20 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KenoGameLogic, _Component);
        function KenoGameLogic() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._configManager = null;
          _this._eventManager = null;
          _this._netManager = null;
          _this._dataManager = null;
          _this._viewManager = null;
          _this._audioManager = null;
          _this._model = null;
          _initializerDefineProperty(_this, "topLayer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "centerLayer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "daLayer", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xiaoLayer", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameLayer", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Kenosound", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Audio_ballDrop", _descriptor7, _assertThisInitialized(_this));
          // @property(SpriteFrame)
          // ball: SpriteFrame[] = [];
          // @property(SpriteFrame)
          // sazi: SpriteFrame[] = [];
          _initializerDefineProperty(_this, "prefab_coin", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipAni", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultRoot", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betLayer", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_baGua", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_last", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_double", _descriptor16, _assertThisInitialized(_this));
          //    //游戏Label管理
          // _totalPool: Label; //总奖池
          _initializerDefineProperty(_this, "bigPeopleNum", _descriptor17, _assertThisInitialized(_this));
          //押大人数
          _initializerDefineProperty(_this, "smallPeopleNum", _descriptor18, _assertThisInitialized(_this));
          //押小人数
          _this._gameCountDown = void 0;
          //游戏倒计时
          _this._nextCountDown = void 0;
          //下一局倒计时
          _this._preBetBigNum = void 0;
          //预押注大的数量
          _this._preBetSmallNum = void 0;
          //预押注小的数量
          // _totalBig: Label; //押大总金额
          // _totalSmall: Label; //押小总金额
          // _betBigNum: Label; //已经押注大的数量
          // _betSmallNum: Label; //已经押小的数量
          // _roomId: Label; //期号
          // _serviceID: string;
          _this._haveHand = false;
          _this._CountDownTime = 0;
          _this._NextDownTime = 0;
          _this._flag = true;
          _this._isResult = false;
          _this._isshowRe = false;
          //    //==this._model.hdInfo.myBet.amount
          _this._winNum = 0;
          //    //獎池相關
          _this._stepNum = 0;
          _this._poolNum = 0;
          _this._updateTimeFlag = true;
          _this._updateTime = 0;
          _this._chipPool = null;
          _this._selChip = null;
          _this._bundle = void 0;
          _this.curBallList = [];
          _this.showCountDownTip = false;
          return _this;
        }
        var _proto = KenoGameLogic.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          KenoGameCtrl.instance.regist();
          this._configManager = ConfigManager.instance;
          this._eventManager = EventManager.instance;
          this._netManager = NetManager.instance;
          this._dataManager = DataManager.instance;
          this._viewManager = ViewManager.instance;
          this._audioManager = AudioManager.instance;
          this._model = KenoModel.instance;
          this.tipAni.node.active = false;
          this._eventManager.on(eEvent.updateView, this.updateView, this);
          Common.showLog("onLoda");
          Common.showLog(this.node);
          this._bundle = assetManager.getBundle(cBundle);
          this.initChipPool();
          this.initGame();
          this.initEvent();
          Common.showWait();
          KenoUtils.instance.preLoad();
          KenoUtils.instance.loadRes(function () {
            _this2._netManager.sendOnlineData(eProto.getConfig, {});
            NetManager.instance.sendOnlineData(eProto.HD_GetGamePlay, {
              gameType: "keno"
            });
          });
          DataManager.instance.isChangeGold = true;
        };
        _proto.start = function start() {
          var baseScoreList = KenoModel.instance.hdInfo && KenoModel.instance.hdInfo.baseScoreList || Chips;
          ChipProxy.initChipList(baseScoreList);
          this.createChipsList();
        };
        _proto.onDisable = function onDisable() {
          this.removeEvent();
        };
        _proto.onDestroy = function onDestroy() {
          this.closePop();
        };
        _proto.initEvent = function initEvent() {
          //        //监听按钮
          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.on(this._configManager.eventTransform.gameHide, this.gameHide, this); //切到后台

          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
        };
        _proto.removeEvent = function removeEvent() {
          KenoGameCtrl.instance.unRegist();
          this._eventManager.off(eEvent.updateView, this.updateView, this);
          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.off(this._configManager.eventTransform.gameHide, this.gameHide, this); //切到后台

          ChipProxy.off(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.off(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
        }
        //    //关闭
        ;

        _proto.closePop = function closePop() {
          //        // this._audioManager.playbuttonEffect();
          //        // this._audioManager.stopAll();
          this._viewManager.closePopGame(GameDef.Game.KenoGame);
        };
        _proto.getChipNode = function getChipNode(chipInfo) {
          if (this._chipPool.size() > 1) {
            return this._chipPool.get(chipInfo);
          }
          var item = this._chipPool.get(chipInfo);
          if (!item) {
            return null;
          }
          for (var i = 0; i < 10; i++) {
            var newNode = instantiate(item);
            this._chipPool.put(newNode);
          }
          return item;
        };
        _proto.initChipPool = function initChipPool() {
          var _this3 = this;
          if (!this._chipPool) {
            this._chipPool = new NodePool(ChipSmall);
          }
          resources.load("prefab/public/chipSmall", Prefab, function (err, prefab) {
            for (var i = 0; i < 50; i++) {
              var newNode = instantiate(prefab);
              _this3._chipPool.put(newNode);
            }
          });
        };
        _proto.initGame = function initGame() {
          Common.showLog("initGame Keno");
          // this._totalPool = this.topLayer.getChildByName("label_pool").getComponent(Label);
          // this._totalPool.string = "";
          // this.bigPeopleNum = this.topLayer.getChildByName("bigPeople").getComponent(Label);
          this.bigPeopleNum.string = "0";
          // this.smallPeopleNum = this.topLayer.getChildByName("smallPeople").getComponent(Label);
          this.smallPeopleNum.string = "0";
          this._gameCountDown = this.centerLayer.getChildByName("time_daojishi").getComponent(Label);
          this._gameCountDown.string = "0";
          this._nextCountDown = this.centerLayer.getChildByName("waitNext_bg").getChildByName("time_next").getComponent(Label);
          this._nextCountDown.string = "0";

          // this._totalBig = this.daLayer.getChildByName("total_num").getComponent(Label);
          // this._totalBig.string = "0";
          // this._totalSmall = this.xiaoLayer.getChildByName("total_num").getComponent(Label);
          // this._totalSmall.string = "0";

          // this._betBigNum = this.daLayer.getChildByName("have_num").getComponent(Label);
          // this._betBigNum.string = "0";
          // this._betSmallNum = this.xiaoLayer.getChildByName("have_num").getComponent(Label);
          // this._betSmallNum.string = "0";

          for (var _iterator = _createForOfIteratorHelperLoose(this.betLayer.children), _step; !(_step = _iterator()).done;) {
            var childNode = _step.value;
            var total_num = childNode.getChildByName("total_num").getComponent(Label);
            total_num.string = "0";
            var have_num = childNode.getChildByName("have_num").getComponent(Label);
            have_num.string = "0";
            if (childNode.name != "daLayer" && childNode.name != "xiaoLayer") {
              var have_rate = childNode.getChildByName("have_rate");
              var Sprite_rate = childNode.getChildByName("Sprite_rate");
              have_rate.active = true;
              Sprite_rate.active = false;
              have_num.node.active = false;
            }
          }
          this.daLayer.getChildByName("image").active = true;
          this.xiaoLayer.getChildByName("image").active = true;
          this.centerLayer.getChildByName("waitNext_bg").active = false;
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != cBundle) {
            return;
          }
          var children = this.scrollViewCM.content.children;
          for (var _iterator2 = _createForOfIteratorHelperLoose(children), _step2; !(_step2 = _iterator2()).done;) {
            var child = _step2.value;
            var chipitem = child.getComponent(ChipItem);
            if (chipitem) {
              if (chipitem.data == data) {
                this._selChip = chipitem;
              } else {
                chipitem.moveUp(false);
              }
            }
          }
        };
        _proto.createChipsList = function createChipsList() {
          var _this4 = this;
          this.scrollViewCM.content.destroyAllChildren();
          var minChip = ChipProxy.chipList[0].count;
          for (var _iterator3 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            if (i.count < minChip) {
              continue;
            }
            var chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(chip);
            chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, cBundle);
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step4; !(_step4 = _iterator4()).done;) {
            var _i = _step4.value;
            var has = false;
            for (var _iterator5 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step5; !(_step5 = _iterator5()).done;) {
              var j = _step5.value;
              if (j.count == _i.count) {
                has = true;
                break;
              }
            }
            if (has) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            _chip.getComponent(ChipItem).setData(_i, ChipType.CHIP, cBundle);
          }
          this.scheduleOnce(function () {
            var index = 0;
            if (ChipProxy.diyList.length == 0) {
              index = 0;
            }
            var child = _this4.scrollViewCM.content.children[index];
            child.getComponent(ChipItem).moveUp();
            _this4.scrollViewCM.scrollToLeft();
          });
        };
        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
            case "jlBtn":
              {
                //记录
                GUtil.openRecord("keno");
                // Common.loadPopBuddle(
                //     "prefab/KenoGameDetails",
                //     this._bundle,
                //     () => {},
                //     (KenoGameDetails) => {
                //         let KenoGameDetailsLayer = instantiate(KenoGameDetails);
                //         this._viewManager.popNodeView(KenoGameDetailsLayer, true);

                //         this._viewManager.adeptPopGameSize(KenoGameDetailsLayer);
                //     },
                //     true
                // );
                break;
              }
            case "whBtn":
              {
                //规则
                Common.showLog("显示游戏规则");
                Common.loadPopBuddle("prefab/Kenohelp", this._bundle, function () {}, function (Kenohelp) {
                  var KenohelpLayer = instantiate(Kenohelp);
                  _this5._viewManager.popNodeView(KenohelpLayer, true);
                  _this5._viewManager.adeptPopGameSize(KenohelpLayer);
                }, true);
                break;
              }
            case "zsBtn":
              {
                //走势
                Common.loadPopBuddle("prefab/KenoPathList", this._bundle, function () {}, function (KenoPathList) {
                  var KenoPathListLayer = instantiate(KenoPathList);
                  _this5._viewManager.popNodeView(KenoPathListLayer, true);
                  _this5._viewManager.adeptPopGameSize(KenoPathListLayer, 1, 0.75);
                }, true);
                break;
              }
            case "btn_last":
              {
                //上局下注
                if (KenoModel.instance.gameStatus != eRunStatus.BET) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                if (!KenoModel.instance.betListBack) {
                  Common.showTip(i18n.lang["disableBet"]);
                  return;
                }
                var keys = Object.keys(KenoModel.instance.betListBack);
                for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
                  var key = _keys[_i2];
                  var chipList = KenoModel.instance.betListBack[key];
                  var totalChip = 0;
                  for (var _iterator6 = _createForOfIteratorHelperLoose(chipList), _step6; !(_step6 = _iterator6()).done;) {
                    var chip = _step6.value;
                    totalChip += chip;
                  }
                  this.doBetChip(key, totalChip);
                }
                break;
              }
            case "btn_double":
              {
                //当局双倍
                if (KenoModel.instance.gameStatus != eRunStatus.BET) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                var _keys2 = Object.keys(KenoModel.instance.betList);
                for (var _i3 = 0, _keys3 = _keys2; _i3 < _keys3.length; _i3++) {
                  var _key2 = _keys3[_i3];
                  var _chipList = KenoModel.instance.betList[_key2].slice();
                  var _totalChip = 0;
                  for (var _iterator7 = _createForOfIteratorHelperLoose(_chipList), _step7; !(_step7 = _iterator7()).done;) {
                    var _chip2 = _step7.value;
                    _totalChip += _chip2;
                  }
                  this.doBetChip(_key2, _totalChip);
                }
                break;
              }
            case "daLayer": //大下注
            case "xiaoLayer": //大下注
            case "Node_jin":
            case "Node_mu":
            case "Node_shui":
            case "Node_huo":
            case "Node_tu":
              {
                if (KenoModel.instance.gameStatus != eRunStatus.BET) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }

                //五行下注
                this.doBetChip(event.target.name, this._selChip.data.count);
                break;
              }
          }
        };
        _proto.doBetChip = /*#__PURE__*/function () {
          var _doBetChip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(area, chipNum, isDouble) {
            var userGold;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (isDouble === void 0) {
                    isDouble = false;
                  }
                  if (!(area == "daLayer" && KenoModel.instance.betList["xiaoLayer"] || area == "xiaoLayer" && KenoModel.instance.betList["daLayer"])) {
                    _context.next = 4;
                    break;
                  }
                  Common.showTip(i18n.errTip(30002));
                  return _context.abrupt("return");
                case 4:
                  userGold = parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD));
                  if (!(userGold == 0 || chipNum > userGold)) {
                    _context.next = 8;
                    break;
                  }
                  this.tipAni.setAnimation(0, "5", false);
                  return _context.abrupt("return");
                case 8:
                  if (chipNum) this.doSendChip(area);
                  KenoGameCtrl.instance.reqBet(posMap[area], isDouble ? 2 * chipNum : chipNum);
                  KenoModel.instance.betList[area] = KenoModel.instance.betList[area] || [];
                  KenoModel.instance.betList[area].push(chipNum);
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doBetChip(_x, _x2, _x3) {
            return _doBetChip.apply(this, arguments);
          }
          return doBetChip;
        }();
        _proto.doSendChip = function doSendChip(area) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            var newChip = _this6.getChipNode(_this6._selChip.data.count);
            var chipPos = _this6._selChip.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            chipPos = _this6.node.getComponent(UITransform).convertToNodeSpaceAR(chipPos);
            newChip.position = chipPos;
            _this6.node.addChild(newChip);
            var betNode = _this6.betLayer.getChildByName(area);
            var toPos = betNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            toPos = _this6.node.getComponent(UITransform).convertToNodeSpaceAR(toPos);
            var duration = Vec3.distance(toPos, chipPos) / 1000;
            tween(newChip).to(duration, {
              position: toPos
            }, {
              easing: "cubicOut"
            }).call(resolve).destroySelf().start();
          });
        };
        _proto.onRecord = function onRecord() {
          GUtil.openRecord("Keno");
        };
        _proto.onRank = function onRank() {
          GUtil.openRank("Keno");
        };
        _proto.gameHide = function gameHide() {};
        _proto.gameShow = function gameShow() {
          var _this7 = this;
          Common.showLog("前台");
          var self = this;
          this.scheduleOnce(function () {
            if (_this7._netManager._connect == true) {
              //                // self.removeEvent();
              Common.closeWait();
              self.updateGameStatus();
              _this7._audioManager.stopAll();
              _this7._audioManager.NextBgMusic();
              _this7._netManager.sendOnlineData(eProto.getConfig, {});
            }
          }, 0.1);
        };
        _proto.onStartGame = function onStartGame() {
          var hdInfo = this._model.hdInfo;
          if (!hdInfo.TableInfo) {
            gts.Debug.Log("=recvErr==TableInfo==null==");
            return;
          }
          this.initEvent();

          // this._serviceID = hdInfo.KenoServerId;
          // let platform = DataManager.instance.getUserDataForKey(UserKey.PLATFORM) || "";
          // this._roomId.string = `#${platform}-${hdInfo.Keno.ShowId}`; //Common.numFormat(hdInfo.Keno.ShowId);

          this.tipAni.node.active = true;
          this.bigPeopleNum.string = Common.numFormat(hdInfo.TableInfo.BetBigCount);
          this.smallPeopleNum.string = Common.numFormat(hdInfo.TableInfo.BetSmallCount);
          var time_daojishi = this.centerLayer.getChildByName("time_daojishi");
          var Label_resultNums = this.centerLayer.getChildByName("Label_resultNums");
          var Node_path = this.resultRoot.getChildByName("Node_path");
          var Node_ball = this.resultRoot.getChildByName("Node_ball");

          // this._winNum = 0;
          // let keys = Object.keys(KenoModel.instance.betListBack);
          // let isLastBetEnable = keys.length > 0;
          // this.btn_last.interactable = isLastBetEnable;
          // this.btn_double.interactable = isLastBetEnable;

          for (var _iterator8 = _createForOfIteratorHelperLoose(this.betLayer.children), _step8; !(_step8 = _iterator8()).done;) {
            var childNode = _step8.value;
            var index = posMap[childNode.name];
            var total_num = childNode.getChildByName("total_num").getComponent(Label);
            var have_num = childNode.getChildByName("have_num").getComponent(Label);
            if (childNode.name == "daLayer" || childNode.name == "xiaoLayer") {
              total_num.string = Common.numFormat(hdInfo.TableInfo.TotalBetAmount[index]);
              have_num.string = Common.numFormat(hdInfo.BetInfo.BetAmounts[index]);
              childNode.getComponent(UIOpacity).opacity = 255;
              var boEffect = find("image/boEffect", childNode);
              boEffect.active = false;
            } else {
              total_num.string = Common.ChangeMoneyFormat(hdInfo.TableInfo.TotalBetAmount[index], 2);
              have_num.string = Common.ChangeMoneyFormat(hdInfo.BetInfo.BetAmounts[index], 2);
              var have_rate = childNode.getChildByName("have_rate");
              have_num.node.active = hdInfo.BetInfo.BetAmounts[index] > 0;
              have_rate.active = !have_num.node.active;
              var Sprite_rate = childNode.getChildByName("Sprite_rate");
              Sprite_rate.active = have_num.node.active;
              var loseMask = find("loseMask", childNode);
              loseMask.active = false;
              var light = find("light", childNode);
              Tween.stopAllByTarget(light);
              light.active = false;
            }
          }
          KenoModel.instance.betInfo_self = hdInfo.BetInfo.BetAmounts;
          KenoModel.instance.betInfo_total = hdInfo.TableInfo.TotalBetAmount;
          KenoModel.instance.gameStatus = hdInfo.TableInfo.State;
          if (hdInfo.TableInfo.State == eRunStatus.END) {
            //结算阶段
            time_daojishi.active = false;
            Label_resultNums.active = true;
            Node_ball.active = true;
            Node_path.active = false;
            if (!this._isResult) {
              this._isResult = true;
              this._gameCountDown.string = "";
              this._winNum = hdInfo.BetInfo.Prize;
              this.showResult(hdInfo.TableInfo, true);
            }
          } else {
            //下注阶段
            time_daojishi.active = true;
            Label_resultNums.active = false;
            Node_ball.active = false;
            Node_path.active = true;
            Tween.stopAllByTarget(this.Sprite_baGua);
            tween(this.Sprite_baGua).by(5, {
              angle: -360
            }).repeatForever().start();
            var baGua_boEffect = this.Sprite_baGua.getChildByName("baGua_boEffect");
            baGua_boEffect.active = false;
          }
        };
        _proto.showResultAniBefore = function showResultAniBefore(delay) {
          var _this8 = this;
          this.scheduleOnce(function () {
            // this._audioManager.playSound(this.Kenosound[2], false);

            Tween.stopAllByTarget(_this8.Sprite_baGua);
            tween(_this8.Sprite_baGua).by(1, {
              angle: -360
            }).repeatForever().start();
            var baGua_boEffect = _this8.Sprite_baGua.getChildByName("baGua_boEffect");
            baGua_boEffect.active = true;
          }, delay);
        };
        _proto.showResultAni = function showResultAni(TableInfo) {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            var Node_path = _this9.resultRoot.getChildByName("Node_path");
            Node_path.active = false;
            var Node_ball = _this9.resultRoot.getChildByName("Node_ball");
            Node_ball.active = true;
            Node_ball.removeAllChildren();
            var item_qiu = _this9.resultRoot.getChildByName("item_qiu");
            var Label_resultNums = _this9.centerLayer.getChildByName("Label_resultNums");
            Label_resultNums.active = true;
            Label_resultNums.getComponent(Label).string = "" + 0;

            //设置开出的球号
            var ballWidth = item_qiu.getComponent(UITransform).width;
            var Dices = TableInfo.Dices;
            _this9.curBallList = [];
            var iCounts = Dices.length;
            var _loop = function _loop(i) {
              var newItem = instantiate(item_qiu);
              newItem.active = true;
              newItem.getComponent(UIOpacity).opacity = 0;
              newItem.getComponent(Sprite).spriteFrame = KenoUtils.instance.getSpriteFrame_Ball(Dices[i]);
              Node_ball.addChild(newItem);
              var index = 9 - Math.floor(i / 2);
              var toPosX = index * ballWidth + 0.5 * ballWidth;
              var isLeft = i % 2 == 0;
              newItem.position = v3(0, 155, 0);
              tween(newItem).delay(i * 0.2).call(function () {
                _this9._audioManager.playSound(_this9.Audio_ballDrop, false);
                newItem.getComponent(UIOpacity).opacity = 255;
              }).to(0.1, {
                position: v3(0, -5, 0)
              }).to(0.2 + 0.05 * index, {
                position: v3(isLeft ? -toPosX : toPosX, -5, 0),
                angle: isLeft ? index * 360 : -index * 360
              }).call(function () {
                // this._audioManager.playSound(this.Audio_ballDrop, false);
                _this9.curBallList.push(Dices[i]);
                _this9.updateResult();
                iCounts--;
                if (iCounts == 0) {
                  resolve();
                }
              }).start();
            };
            for (var i = 0; i < Dices.length; i++) {
              _loop(i);
            }
          });
        };
        _proto.updateResult = function updateResult() {
          var curTotalNum = 0;
          for (var _iterator9 = _createForOfIteratorHelperLoose(this.curBallList), _step9; !(_step9 = _iterator9()).done;) {
            var num = _step9.value;
            curTotalNum += num;
          }
          var Label_resultNums = this.centerLayer.getChildByName("Label_resultNums");
          Label_resultNums.getComponent(Label).string = "" + curTotalNum;
          var result = [0, 0, 0, 0, 0, 0, 0];
          curTotalNum >= 811 ? result[0] = 1 : result[1] = 1;
          //金：210-695,木：764-855,水：696-763,火：856-923,土：924-1410,
          var wuXingIndex = curTotalNum < 210 ? 0 : curTotalNum < 696 ? 2 : curTotalNum < 764 ? 4 : curTotalNum < 856 ? 3 : curTotalNum < 924 ? 5 : 6;
          if (wuXingIndex > 0) {
            result[wuXingIndex] = 1;
          }

          //设置中奖区域
          for (var _iterator10 = _createForOfIteratorHelperLoose(this.betLayer.children), _step10; !(_step10 = _iterator10()).done;) {
            var childNode = _step10.value;
            var index = posMap[childNode.name];
            if (result[index] > 0) {
              //中奖
              if (childNode.name == "daLayer" || childNode.name == "xiaoLayer") {
                var boEffect = find("image/boEffect", childNode);
                boEffect.active = true;
                childNode.getComponent(UIOpacity).opacity = 255;
              } else {
                var loseMask = find("loseMask", childNode);
                loseMask.active = false;
                var light = find("light", childNode);
                if (!light.active) {
                  light.active = true;
                  light.getComponent(UIOpacity).opacity = 255;
                  tween(light.getComponent(UIOpacity)).to(0.25, {
                    opacity: 0
                  }).to(0.25, {
                    opacity: 255
                  }).union().repeat(40).start();
                }
              }
            } else {
              //未中
              if (childNode.name == "daLayer" || childNode.name == "xiaoLayer") {
                childNode.getComponent(UIOpacity).opacity = 150;
                var _boEffect = find("image/boEffect", childNode);
                _boEffect.active = false;
              } else {
                var _light = find("light", childNode);
                _light.active = false;
                Tween.stopAllByTarget(_light.getComponent(UIOpacity));
                var _loseMask = find("loseMask", childNode);
                _loseMask.active = true;
              }
            }
          }
        };
        _proto.showResult = function showResult(TableInfo, reEnter) {
          if (reEnter === void 0) {
            reEnter = false;
          }
          if (!TableInfo) {
            return;
          }
          this._isshowRe = true;
          this._audioManager.playSound(this.Kenosound[3], false);

          // let disAngle = -360 + (this.Sprite_baGua.angle % 360);
          Tween.stopAllByTarget(this.Sprite_baGua);
          // tween(this.Sprite_baGua)
          //     .to(disAngle / 360, { angle: this.Sprite_baGua.angle + disAngle })
          //     .start();

          var baGua_boEffect = this.Sprite_baGua.getChildByName("baGua_boEffect");
          baGua_boEffect.active = false;
          var result = TableInfo.Result;
          //设置中奖区域
          for (var _iterator11 = _createForOfIteratorHelperLoose(this.betLayer.children), _step11; !(_step11 = _iterator11()).done;) {
            var childNode = _step11.value;
            var _index = posMap[childNode.name];
            if (result[_index] > 0) {
              //中奖
              if (childNode.name == "daLayer" || childNode.name == "xiaoLayer") {
                var boEffect = find("image/boEffect", childNode);
                boEffect.active = true;
                childNode.getComponent(UIOpacity).opacity = 255;
              } else {
                var loseMask = find("loseMask", childNode);
                loseMask.active = false;
                var light = find("light", childNode);
                if (!light.active) {
                  light.active = true;
                  light.getComponent(UIOpacity).opacity = 255;
                  tween(light.getComponent(UIOpacity)).to(0.25, {
                    opacity: 0
                  }).to(0.25, {
                    opacity: 255
                  }).union().repeat(40).start();
                }
              }
            } else {
              //未中
              if (childNode.name == "daLayer" || childNode.name == "xiaoLayer") {
                childNode.getComponent(UIOpacity).opacity = 150;
                var _boEffect2 = find("image/boEffect", childNode);
                _boEffect2.active = false;
              } else {
                var _light2 = find("light", childNode);
                _light2.active = false;
                Tween.stopAllByTarget(_light2.getComponent(UIOpacity));
                var _loseMask2 = find("loseMask", childNode);
                _loseMask2.active = true;
              }
            }
          }
          if (reEnter) {
            var Node_path = this.resultRoot.getChildByName("Node_path");
            Node_path.active = false;
            var Node_ball = this.resultRoot.getChildByName("Node_ball");
            Node_ball.active = true;
            Node_ball.removeAllChildren();
            var item_qiu = this.resultRoot.getChildByName("item_qiu");

            //设置开出的球号
            var ballWidth = item_qiu.getComponent(UITransform).width;
            var Dices = TableInfo.Dices;
            for (var i = 0; i < Dices.length; i++) {
              var newItem = instantiate(item_qiu);
              newItem.active = true;
              newItem.getComponent(Sprite).spriteFrame = KenoUtils.instance.getSpriteFrame_Ball(Dices[i]);
              Node_ball.addChild(newItem);
              var index = 9 - Math.floor(i / 2);
              var toPosX = index * ballWidth + 0.5 * ballWidth;
              var isLeft = i % 2 == 0;
              newItem.position = v3(isLeft ? -toPosX : toPosX, -5, 0);
            }
          }

          //添加历史记录
          var curTotalNum = 0;
          for (var _iterator12 = _createForOfIteratorHelperLoose(TableInfo.Dices), _step12; !(_step12 = _iterator12()).done;) {
            var num = _step12.value;
            curTotalNum += num;
          }
          this._model.pathData.push(curTotalNum);
          this.updatePath();
          if (!reEnter && this._winNum > 0) {
            this.showAddScore(this._winNum);
            this._winNum = 0;
          }

          //结算-更新
          DataManager.instance.isChangeGold = true;
          DataManager.instance.emit(UserProxyEvent.CHANGE_GOLD);
        };
        _proto.showStep = function showStep(text) {
          var stepInfo = find("Canvas/KenoGameLayer/root/game_bg/stepInfo");
          stepInfo.getChildByName("text").getComponent(Label).string = text;
          stepInfo.active = true;
        };
        _proto.showAddScore = function showAddScore(text) {
          var _this10 = this;
          //        // let addScore = find("Canvas/KenoGameLayer/root/game_bg/addScore");
          //        // addScore.getChildByName("text").getComponent(Label).string = `+${Common.numFormat(text)}`;
          //        // addScore.active = true;

          this.tipAni.setAnimation(0, "get", false);
          var winLabel = this.tipAni.node.getChildByName("text").getComponent(Label);
          winLabel.node.active = true;
          winLabel.string = "+" + Common.numFormat(text);
          this.tipAni.setCompleteListener(function () {
            _this10.tipAni.setCompleteListener(null);
            winLabel.node.active = false;
          });
        };
        _proto.onHDBet = function onHDBet(data) {};
        _proto.updateView = function updateView(event, data) {
          var _this11 = this;
          switch (event) {
            case eProto.getConfig:
              {
                //获取游戏配置
                Common.closeWait();
                this.onStartGame();
                this.updatePath();
                break;
              }
            case eProto.kenoXiazhu:
              {
                var doingBet = data.keno;

                //总盘下注变化
                if (this._isResult) {
                  Common.showLog("新一轮开始");
                  this.doStartGame();
                }
                this.showChangeForTotal(doingBet);
                this.createCountDown(doingBet.CountDown);
                if (doingBet.CountDown == 1) {
                  this.showResultAniBefore(1);
                }
                break;
              }
            case eProto.HD_Bet:
              {
                //                //下注各种场景  下注叠加
                if (!(typeof data.Code == "undefined") && data.Code == 0) {
                  Common.showLog("自己下注成功");
                  var bet = data.Data;
                  var _loop2 = function _loop2() {
                    var childNode = _step13.value;
                    var index = posMap[childNode.name];
                    var have_num = childNode.getChildByName("have_num").getComponent(Label);

                    //更新显示
                    if (bet.BetAmounts[index] > KenoModel.instance.betInfo_self[index]) {
                      tween(have_num.node).to(0.1, {
                        scale: v3(1.2, 1.2, 1)
                      }).call(function () {
                        if (childNode.name == "daLayer" || childNode.name == "xiaoLayer") {
                          have_num.string = Common.numFormat(bet.BetAmounts[index]);
                        } else {
                          have_num.string = Common.ChangeMoneyFormat(bet.BetAmounts[index], 2);
                          var have_rate = childNode.getChildByName("have_rate");
                          have_num.node.active = bet.BetAmounts[index] > 0;
                          have_rate.active = !have_num.node.active;
                          var Sprite_rate = childNode.getChildByName("Sprite_rate");
                          Sprite_rate.active = have_num.node.active;
                        }
                      }).to(0.15, {
                        scale: v3(1, 1, 1)
                      }).start();
                    } else {
                      if (childNode.name == "daLayer" || childNode.name == "xiaoLayer") {
                        have_num.string = Common.numFormat(bet.BetAmounts[index]);
                      } else {
                        have_num.string = Common.ChangeMoneyFormat(bet.BetAmounts[index], 2);
                        var have_rate = childNode.getChildByName("have_rate");
                        have_num.node.active = bet.BetAmounts[index] > 0;
                        have_rate.active = !have_num.node.active;
                        var Sprite_rate = childNode.getChildByName("Sprite_rate");
                        Sprite_rate.active = have_num.node.active;
                      }
                    }
                  };
                  for (var _iterator13 = _createForOfIteratorHelperLoose(this.betLayer.children), _step13; !(_step13 = _iterator13()).done;) {
                    _loop2();
                  }
                  this._audioManager.playSound(this.Kenosound[1], false);
                  KenoModel.instance.betInfo_self = bet.BetAmounts;
                  this.btn_double.interactable = true;
                  return;
                } else {
                  Common.showLog("下注失败场景");
                  Common.showLog(data.ErrMsg);
                  this.showStep(i18n.errTip(data.Code));
                  return;
                }
              }
            case eProto.backBet:
              {
                //                //返回
                var refund = data;
                if (refund && refund.amount > 0) {
                  Common.showTip(i18n.lang.KenoGameTip + Common.numFormat(refund.amount));
                }
                break;
              }
            case eProto.kenoResult:
              {
                var result = data;
                KenoModel.instance.gameStatus = eRunStatus.END;
                this.btn_last.interactable = false;
                this.btn_double.interactable = false;
                this.showCountDown(0);
                this.unschedule(this.localTimeUpdate);
                //                //结果通知
                if (!this._isResult) {
                  this._isResult = true;
                  var time = this._CountDownTime;
                  for (var _iterator14 = _createForOfIteratorHelperLoose(this.betLayer.children), _step14; !(_step14 = _iterator14()).done;) {
                    var childNode = _step14.value;
                    var index = posMap[childNode.name];
                    var total_num = childNode.getChildByName("total_num").getComponent(Label);
                    if (childNode.name == "daLayer" || childNode.name == "xiaoLayer") {
                      total_num.string = "" + Common.numFormat(result.keno.TotalBetAmount[index]);
                    } else {
                      total_num.string = "" + Common.ChangeMoneyFormat(result.keno.TotalBetAmount[index], 2);
                    }
                  }
                  this._model.resultData = result;
                  this.scheduleOnce(function () {
                    _this11._gameCountDown.string = "";
                    _this11.showResultAni(result.keno).then(function () {
                      _this11.showResult(result.keno);
                      EventManager.instance.emit(eEvent.updatePath);
                    });
                    gts.Debug.Log("=KenoResult=showResultAni==");
                  }, time);
                }
                break;
              }
            case eProto.kenoShowResult:
              {
                //                //checkout
                var checkout = data;
                this._winNum = checkout.prize;
                break;
              }
            case eProto.kenoNextWait:
              {
                var waiteNext = data;
                this._updateTimeFlag = true;
                //                //等待下一局
                if (waiteNext.TimeLeft > 0 && this._flag == true) {
                  Common.showLog("创建wait倒计时");
                  this._flag = false;
                  this._NextDownTime = waiteNext.TimeLeft;
                  this.centerLayer.getChildByName("waitNext_bg").active = true;
                  this._nextCountDown.string = this._NextDownTime + "";
                  this.ceateNextCountDown();
                }
                break;
              }
            case this._configManager.protocolHall.login:
              {
                //                //断线重连
                this.gameShow();
                break;
              }
            case this._configManager.protocolHall.getVnd:
              {
                //下注各种场景  下注叠加

                var WindowVnd = data;
                var money = WindowVnd.Vnd;
                if (money <= 0) {
                  this.tipAni.setAnimation(0, "5", false);
                }
                break;
              }
            case eProto.HD_GetGamePlay:
              {
                //获取赔率
                var strArea = ["Node_jin", "Node_mu", "Node_shui", "Node_huo", "Node_tu"];
                for (var i = 0; i < strArea.length; i++) {
                  var info = KenoModel.instance.arrRateInfo[i + 2];
                  var nodeBetArea = this.betLayer.getChildByName(strArea[i]);
                  if (nodeBetArea) {
                    var have_rate = nodeBetArea.getChildByName("have_rate");
                    have_rate.getComponent(Label).string = "1:" + info.Odds / 100;
                    var Label_rate = find("Sprite_rate/Label_rate", nodeBetArea);
                    Label_rate.getComponent(Label).string = "x" + info.Odds / 100;
                  }
                }
                break;
              }
          }
        };
        _proto.showCoinEffect = function showCoinEffect(endNode, fCall) {
          // let startNode = find("root/game_bg/yzBtn_layer/xiazhu_btn", this.node);
          // let pos: Vec3 = this.node
          //     .getComponent(UITransform)
          //     .convertToNodeSpaceAR(startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0)));
          // let endPos: Vec3 = this.node
          //     .getComponent(UITransform)
          //     .convertToNodeSpaceAR(endNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0)));
          // for (let i = 0; i < 5; i++) {
          //     let coin = instantiate(this.prefab_coin);
          //     coin.getComponent(UITransform).priority = 1000;
          //     coin.position = v3(pos);
          //     this.node.addChild(coin);
          //     let ranKeno = 1;
          //     let fixY = 100;
          //     tween(coin)
          //         .bezierTo(Math.random() * 0.35 + 0.5, v2(pos.x * ranKeno, pos.y + fixY), v2(endPos.x * ranKeno, pos.y - fixY), endPos)
          //         .call(i == 0 ? fCall : null)
          //         .removeSelf()
          //         .start();
          // }
        };
        _proto.updatePath = function updatePath() {
          if (this._model.pathData == null || this._model.pathData.length <= 0) {
            return;
          }
          var Node_path = this.resultRoot.getChildByName("Node_path");
          var item_history = this.resultRoot.getChildByName("item_history");
          var arrItemFrame = ["img_jin", "img_mu", "img_shui", "img_huo", "img_tu"];
          var history = this._model.pathData.length > 10 ? this._model.pathData.slice(this._model.pathData.length - 10) : this._model.pathData.slice();
          for (var i = 0; i < history.length; i++) {
            var num = history[i];
            var newItem = Node_path.getChildByName("item_history_" + i);
            if (!newItem) {
              newItem = instantiate(item_history);
              newItem.name = "item_history_" + i;
              newItem.active = true;
              Node_path.addChild(newItem);
            }
            newItem.getComponent(UIOpacity).opacity = 255;

            //金：210-695,木：764-855,水：696-763,火：856-923,土：924-1410,
            var wuXingIndex = num < 696 ? 0 : num < 764 ? 2 : num < 856 ? 1 : num < 924 ? 3 : 4;
            var isDa = num >= 811;
            var Sprite_tag = newItem.getChildByName("Sprite_tag");
            var Label_num = newItem.getChildByName("Label_num");
            var Sprite_icon = newItem.getChildByName("Sprite_icon");
            var _Sprite_light = newItem.getChildByName("Sprite_light");
            _Sprite_light.active = false;
            Sprite_icon.getComponent(Sprite).spriteFrame = KenoUtils.instance.getSpriteFrame_Record(arrItemFrame[wuXingIndex]);
            Sprite_tag.getComponent(Sprite).spriteFrame = KenoUtils.instance.getSpriteFrame_Record(isDa ? "img_tai" : "img_xiu");
            Label_num.getComponent(Label).string = "" + num;
          }
          var lastItem = Node_path.children[Node_path.children.length - 1];
          var Sprite_light = lastItem.getChildByName("Sprite_light");
          Sprite_light.active = true;
        };
        _proto.doStartGame = function doStartGame() {
          KenoModel.instance.gameStatus = eRunStatus.BET;
          KenoModel.instance.betInfo_self = [0, 0, 0, 0, 0, 0, 0];
          KenoModel.instance.betInfo_total = [0, 0, 0, 0, 0, 0, 0];
          for (var _iterator15 = _createForOfIteratorHelperLoose(this.betLayer.children), _step15; !(_step15 = _iterator15()).done;) {
            var childNode = _step15.value;
            var total_num = childNode.getChildByName("total_num").getComponent(Label);
            total_num.string = "0";
            var have_num = childNode.getChildByName("have_num").getComponent(Label);
            have_num.string = "0";
            if (childNode.name != "daLayer" && childNode.name != "xiaoLayer") {
              var have_rate = childNode.getChildByName("have_rate");
              var Sprite_rate = childNode.getChildByName("Sprite_rate");
              have_rate.active = true;
              Sprite_rate.active = false;
              have_num.node.active = false;
              var loseMask = find("loseMask", childNode);
              loseMask.active = false;
              var light = find("light", childNode);
              Tween.stopAllByTarget(light);
              light.active = false;
            } else {
              childNode.getComponent(UIOpacity).opacity = 255;
              var boEffect = find("image/boEffect", childNode);
              boEffect.active = false;
            }
          }
          var Node_path = this.resultRoot.getChildByName("Node_path");
          Node_path.active = true;
          var Node_ball = this.resultRoot.getChildByName("Node_ball");
          Node_ball.active = false;
          var Label_resultNums = this.centerLayer.getChildByName("Label_resultNums");
          Label_resultNums.active = false;

          //        //初始化数据
          this._isResult = false;
          this._flag = true;
          this._CountDownTime = 0;
          this._NextDownTime = 0;
          this._model.resultData = null;
          this._isshowRe = false;
          this._winNum = 0;
          var keys = Object.keys(KenoModel.instance.betListBack);
          var isLastBetEnable = keys.length > 0;
          this.btn_last.interactable = isLastBetEnable;
          this.btn_double.interactable = false;
          Tween.stopAllByTarget(this.Sprite_baGua);
          tween(this.Sprite_baGua).by(5, {
            angle: -360
          }).repeatForever().start();
          var baGua_boEffect = this.Sprite_baGua.getChildByName("baGua_boEffect");
          baGua_boEffect.active = false;
          this.centerLayer.getChildByName("waitNext_bg").active = false;
          this._audioManager.playSound(this.Kenosound[0], false);
          this.tipAni.setAnimation(0, "4", false);
          var winLabel = this.tipAni.node.getChildByName("text").getComponent(Label);
          winLabel.node.active = false;

          // this._roomId.string = Common.setGameNo(ShowId);

          var scollview_content = find("Canvas/KenoGameLayer/root/chat_bg/content_record/content_scrollView").getComponent(ScrollView);
          if (isValid(scollview_content)) {
            scollview_content.content.removeAllChildren();
          }
        };
        _proto.updateGameStatus = function updateGameStatus() {
          //        // this._gameCountDown.string="";
          this._CountDownTime = 0;
          this._NextDownTime = 0;
          this._flag = true;
          this._isResult = false;
          // this._model.resultData = null;
          this._isshowRe = false;
          this._winNum = 0;
          this._stepNum = 0;
          this._poolNum = 0;
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.node);
          this._updateTimeFlag = true;
          // let shaizi1 = this.centerLayer.getChildByName("shaizi_1").getComponent(Sprite);
          // let shaizi2 = this.centerLayer.getChildByName("shaizi_2").getComponent(Sprite);
          // let shaizi3 = this.centerLayer.getChildByName("shaizi_3").getComponent(Sprite);
          // shaizi1.node.active = false;
          // shaizi2.node.active = false;
          // shaizi3.node.active = false;

          //        // let shaizi11 = this.centerLayer.getChildByName("sdhaizi1").getComponent(sp.Skeleton);
          //        // let shaizi22 = this.centerLayer.getChildByName("sdhaizi2").getComponent(sp.Skeleton);
          //        // let shaizi33 = this.centerLayer.getChildByName("sdhaizi3").getComponent(sp.Skeleton);
          // let shaizifeng = this.centerLayer.getChildByName("shuaizi1guang").getComponent(sp.Skeleton);
          //        // shaizi11.node.active = false;
          //        // shaizi22.node.active = false;
          //        // shaizi33.node.active = false;
          // shaizifeng.node.active = false;

          // this.xiaoLayer.getChildByName("image_ani").active = false;
          this.xiaoLayer.getChildByName("image").active = true;

          // this.daLayer.getChildByName("image_ani").active = false;
          this.daLayer.getChildByName("image").active = true;
          // this.topLayer.getChildByName("big_ani").removeAllChildren();
          this.centerLayer.getChildByName("waitNext_bg").active = false;

          // let bigAni = find("Canvas/KenoGameLayer/root/game_bg/nohu");
          // bigAni.active = false;
        };

        _proto.ceateNextCountDown = function ceateNextCountDown() {
          this.unschedule(this.showNextCountDown);
          this.schedule(this.showNextCountDown, 1);
        };
        _proto.showNextCountDown = function showNextCountDown() {
          this._NextDownTime = this._NextDownTime - 1;
          if (this._NextDownTime > 0) {
            this._nextCountDown.string = this._NextDownTime + "";
          } else {
            this._nextCountDown.string = "0";
            this.unschedule(this.showNextCountDown);
          }

          // if (this._NextDownTime <= 2 && this._isshowRe == false && this._model.resultData != null) {
          //     this._isshowRe = true;
          //     this.showHandStatus(false);
          //     this.showResult(this._model.resultData, false);
          // }
        }
        //    // createCountDown(timeleft) {
        //    //     Common.showLog("倒计时");
        //    //     this.unschedule(this.showCountDown);
        //    //     this.schedule(this.showCountDown, 1);
        //    // }
        ;

        _proto.localTimeUpdate = function localTimeUpdate() {
          this._updateTime--;
          this.showCountDown(this._updateTime);
        };
        _proto.createCountDown = function createCountDown(timeleft) {
          if (this._updateTimeFlag) {
            this._updateTimeFlag = false;
            this._updateTime = timeleft;
            this.unschedule(this.localTimeUpdate);
            this.showCountDown(this._updateTime);
            this.schedule(this.localTimeUpdate, 1);
          }
        };
        _proto.showCountDown = function showCountDown(timeleft) {
          this._CountDownTime = timeleft;
          this._gameCountDown.color = timeleft <= 3 ? color(255, 42, 0) : Color.WHITE;
          if (timeleft <= 0.000001) {
            timeleft = 0;
            this._gameCountDown.string = "0";
          } else {
            this._gameCountDown.string = "" + timeleft;
          }
          if (timeleft == 1) {
            DataManager.instance.isChangeGold = false;
            //            // this.showStep(i18n.lang.KenogameTimeTip);

            this.tipAni.setAnimation(0, "3", false);
          }
          if (timeleft <= 3 && KenoModel.instance.gameStatus == eRunStatus.BET) {
            KenoModel.instance.gameStatus = eRunStatus.END;
          }
          if (timeleft <= 3 && timeleft >= 1 && !this.showCountDownTip) {
            ViewManager.instance.showCountDownTip(this._gameCountDown.node.parent, timeleft, "idle4", -5, 0, 1.35);
          }
          this.showCountDownTip = timeleft <= 3;
          this._gameCountDown.node.active = timeleft > 3;
        };
        _proto.showChangeForTotal = function showChangeForTotal(Keno) {
          this.bigPeopleNum.string = Common.numFormat(Keno.BetBigCount);
          this.smallPeopleNum.string = Common.numFormat(Keno.BetSmallCount);
          for (var _iterator16 = _createForOfIteratorHelperLoose(this.betLayer.children), _step16; !(_step16 = _iterator16()).done;) {
            var childNode = _step16.value;
            var index = posMap[childNode.name];
            var total_num = childNode.getChildByName("total_num").getComponent(Label);
            total_num.node.scale = v3(1, 1, 1);
            if (childNode.name == "daLayer" || childNode.name == "xiaoLayer") {
              total_num.string = "" + Common.numFormat(Keno.TotalBetAmount[index]);
            } else {
              total_num.string = "" + Common.ChangeMoneyFormat(Keno.TotalBetAmount[index], 2);
            }
            if (Keno.TotalBetAmount[index] != KenoModel.instance.betInfo_total[index]) {
              // let Node_updateEffect = this._totalBig.node.parent.getChildByName("Node_updateEffect_total").getComponent(sp.Skeleton);
              // Node_updateEffect.setAnimation(0, "idle_big", false);
              tween(total_num.node).to(0.1, {
                scale: v3(1.2, 1.2, 1)
              }).to(0.15, {
                scale: v3(1, 1, 1)
              }).start();
            }
          }
          KenoModel.instance.betInfo_total = Keno.TotalBetAmount;
        };
        return KenoGameLogic;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "topLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "centerLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "daLayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "xiaoLayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gameLayer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Kenosound", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Audio_ballDrop", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prefab_coin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tipAni", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "resultRoot", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "betLayer", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_baGua", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btn_last", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "btn_double", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bigPeopleNum", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "smallPeopleNum", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KenoHand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './Common.ts', './GUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Vec2, Component, EventManager, Common, GUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "ccb90J0fXdLc4u8ARdhVkY+", "KenoHand", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var KenoHand = exports('default', (_dec = ccclass("KenoHand"), _dec2 = menu("game/Kenogame/KenoHand"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KenoHand, _Component);
        function KenoHand() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _this._OrginX = 0;
          _this._OrginY = 0;
          _this._startx = 0;
          _this._starty = 0;
          return _this;
        }
        var _proto = KenoHand.prototype;
        _proto.onLoad = function onLoad() {
          this._OrginX = this.node.getPosition().x;
          this._OrginY = this.node.getPosition().y;
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        };
        _proto.touchEnd = function touchEnd(event) {
          Common.showLog("end");
          this._startx = 0;
          this._starty = 0;
        };
        _proto.touchMove = function touchMove(event) {
          Common.showLog("move");
          var worldPoint = event.getLocation();
          var stepx = worldPoint.x - this._startx;
          var stepy = worldPoint.y - this._starty;
          this.node.setPosition(this._OrginX + stepx, this._OrginY + stepy);
          var startPos = new Vec2(this._OrginX, this._OrginY);
          var endPos = new Vec2(this.node.getPosition().x, this.node.getPosition().y);
          var ss = GUtil.Distance(startPos.x, startPos.y, endPos.x, endPos.y);
          if (ss >= 225) {
            this.node.active = false;
            this.node.setPosition(this._OrginX, this._OrginY);
            this._startx = 0;
            this._starty = 0;
            EventManager.instance.dispatch("handrelust", null);
          }
        };
        _proto.touchStart = function touchStart(event) {
          Common.showLog("start");
          //        // this.node.active=false;
          var worldPoint = event.getLocation();
          this._startx = worldPoint.x;
          this._starty = worldPoint.y;
        };
        _proto.onDisable = function onDisable() {
          this.node.setPosition(this._OrginX, this._OrginY);
          this._startx = 0;
          this._starty = 0;
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return KenoHand;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KenoHelpPumping.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './NetManager.ts', './EventManager.ts', './I18n.ts', './KenoModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, gfx, Component, ConfigManager, NetManager, EventManager, i18n, KenoModel;
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
      gfx = module.gfx;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      KenoModel = module.KenoModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "98dee5YU39EmqQeKUH5YhWA", "KenoHelpPumping", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var KenoHelpPumping = exports('default', (_dec = ccclass("KenoHelpPumping"), _dec2 = menu("game/Kenogame/KenoHelpPumping"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KenoHelpPumping, _Component);
        function KenoHelpPumping() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_rate", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_rtp", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameType", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = KenoHelpPumping.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getPumping, {
            gameName: this.gameType
          });
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getPumping, this.recvData, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getPumping, this.recvData, this);
        };
        _proto.recvData = function recvData(data) {
          gfx.RenderType.CANVAS;
          switch (data.cmd) {
            case ConfigManager.getInstance().protocolHall.getPumping:
              {
                var title = i18n.getGameName(this.gameType);
                var num = data.Data.Pumping;
                var str = i18n.t("helpPumping", title, num);
                this.txt_content.string = str;
                if (!data.Data.Pumping) {
                  this.txt_content.node.active = false;
                }
                for (var _iterator = _createForOfIteratorHelperLoose(KenoModel.instance.arrRateInfo), _step; !(_step = _iterator()).done;) {
                  var info = _step.value;
                  this.txt_rate[info.PrizeType].string = "" + info.Odds / 100;
                }
                var rtp_0 = data.Data.rtp_common;
                var rtp_1 = data.Data.rtp_special;
                this.txt_rtp[0].string = "RTP = " + rtp_0;
                this.txt_rtp[1].string = "RTP cho C\u01B0\u1EE3c PHU\u0323 = " + rtp_1;
                this.txt_rtp[0].node.active = rtp_0 > 0;
                this.txt_rtp[1].node.active = rtp_1 > 0;
                break;
              }
          }
        };
        return KenoHelpPumping;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_rate", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_rtp", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KenoModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './KenoGameDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff496waTLJBca6Gt0nEai/M", "KenoModel", undefined);
      var KenoModel = exports('KenoModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(KenoModel, _GameDef$BaseSington);
        function KenoModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.gameStatus = eRunStatus.NONE;
          _this.betList = {};
          _this._betListBack = {};
          _this.betInfo_self = null;
          _this.betInfo_total = null;
          _this.arrRateInfo = null;
          //    //結果信息
          _this._resultData = null;
          //歷史走勢
          _this.pathData = null;
          //    //配置信息
          _this._hdInfo = null;
          return _this;
        }
        _createClass(KenoModel, [{
          key: "betListBack",
          get: function get() {
            return this._betListBack;
          },
          set: function set(betList) {
            var strJson = JSON.stringify(betList);
            this._betListBack = betList ? JSON.parse(strJson) : null;
          }
        }, {
          key: "resultData",
          get: function get() {
            return this._resultData;
          },
          set: function set(result) {
            this._resultData = result;
          }
        }, {
          key: "hdInfo",
          get: function get() {
            return this._hdInfo;
          },
          set: function set(hdInfo) {
            this._hdInfo = hdInfo;
          }
        }]);
        return KenoModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KenoPathItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './GUtil.ts', './KenoModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Sprite, SpriteFrame, UIOpacity, Tween, color, v3, UITransform, tween, v2, Component, AutoChangeParent, GUtil, KenoModel;
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
      Tween = module.Tween;
      color = module.color;
      v3 = module.v3;
      UITransform = module.UITransform;
      tween = module.tween;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      KenoModel = module.KenoModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "164f0L80GRBwYn2j1jo7j7F", "KenoPathItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var KenoPathItem = exports('default', (_dec = ccclass("KenoPathItem"), _dec2 = menu("game/KenoGame/KenoPathItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KenoPathItem, _Component);
        function KenoPathItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_num", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "line", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemSpriteFrame", _descriptor6, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = KenoPathItem.prototype;
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
          Tween.stopAllByTarget(this.node);
          var num = this.item.data;
          var itemIndex = this.item.itemIndex;
          if (num < 0) {
            this.bg.node.active = false;
            this.Label_num.node.active = false;
            return;
          }
          var isDa = num >= 811;
          this.bg.node.active = true;
          this.Label_num.node.active = true;

          // this.bg.node.getComponent(UITransform).priority = 2;

          this.bg.spriteFrame = this.itemSpriteFrame[isDa ? 0 : 1];
          this.Label_num.string = "" + num;
          this.Label_num.color = isDa ? color(255, 255, 255, 255) : color(0, 0, 0, 255);
          var index = (num - 210) / 200;
          var curPos = v3(30.5, (index - 3) * (235 / 6), 0);
          this.bg.node.setPosition(curPos);
          var redata = KenoModel.instance.pathData;
          // line.setSiblingIndex(-1);

          if (itemIndex < redata.length - 1) {
            this.line.active = true;

            // line.setPosition(curPos);

            var nextNum = redata[itemIndex + 1];
            var indexNext = (nextNum - 210) / 200;
            var nextPos = v3(30.5 + 61, (indexNext - 3) * (235 / 6), 0);
            var distance = GUtil.GetDistance(curPos, nextPos);
            this.line.getComponent(UITransform).width = distance;
            this.line.angle = -this.getAngle(curPos, nextPos);
          } else {
            this.line.active = false;
            tween(this.node).to(0.5, {
              scale: v3(1, 1, 1)
            }).to(0.5, {
              scale: v3(1.1, 1.1, 1.1)
            }).union().repeatForever().start();
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
          return degree;
        };
        _createClass(KenoPathItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return KenoPathItem;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_num", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "line", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemSpriteFrame", [_dec8], {
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

System.register("chunks:///_virtual/KenoUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './KenoGameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, assetManager, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, GameDef, AudioManager, cBundle, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
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
      cBundle = module.cBundle;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3a89207EZtPOYfYad3WX3fS", "KenoUtils", undefined);
      var KenoUtils = exports('KenoUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(KenoUtils, _GameDef$BaseSington);
        function KenoUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.arrBallSpriteFrame = {};
          _this.arrRecordSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = KenoUtils.prototype;
        //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle = assetManager.getBundle(cBundle);
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
                  arrHLoad.push(this.asyncLoadDir("textures/new/qiuqiu", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpFrame), _step; !(_step = _iterator()).done;) {
                        var _SpriteFrame = _step.value;
                        _this4.arrBallSpriteFrame[_SpriteFrame.name] = _SpriteFrame;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("textures/new/record", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpFrame), _step2; !(_step2 = _iterator2()).done;) {
                        var _SpriteFrame2 = _step2.value;
                        _this4.arrRecordSpriteFrame[_SpriteFrame2.name] = _SpriteFrame2;
                      }
                    }
                  }));

                  // arrHLoad.push(
                  //     this.asyncLoadDir("spine/dynamic", sp.SkeletonData, (err, arrSpineData: sp.SkeletonData[]) => {
                  //         if (!err) {
                  //             for (const spineData of arrSpineData) {
                  //                 this.arrSkeletonData[spineData.name] = spineData;
                  //             }
                  //         }
                  //     })
                  // );

                  // arrHLoad.push(
                  //     this.asyncLoad("font/FNT_num_Won_FG", cc.Font, (err, font: cc.Font) => {
                  //         if (!err) {
                  //             this.arrFontData[font.name] = font;
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

            // cc.audioEngine.setEffectsVolume(1);
          });
        };

        _proto.playOneShot = function playOneShot(soundPath, isLoop, cb) {
          var _this7 = this;
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err || _this7.soundIDList[soundPath]) {
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
        _proto.updateLabel = function updateLabel(label, num, duration) {
          if (duration === void 0) {
            duration = 0.1;
          }
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(duration, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            labelCom.string = "" + num;
          }).to(duration, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.updateLabelAddNf = function updateLabelAddNf(label, nums, isFloatFormat, curNums) {
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

          //        // KenoUtils.instance.playSound(KenoDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // KenoUtils.instance.stopSound(KenoDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this8.numberFormatFloatD(curWin / 1000, 2.0) : _this8.numberFormatD(curWin / 1000, 2.0);
            label.string = "" + inter + digit + "K";
            //                        // label.string = isFloatFormat ? `${this.numberFormatFloat(curWin / 1000, 2.0)}K` : `${this.numberFormat(curWin / 1000, 2.0)}K`;
          }))
          // .delay(5.0)
          // .to(0.2, { opacity: 0 })
          // .call(() => {
          //     label.node.active = false;
          // })
          .start();
        };
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat, curNums) {
          var _this9 = this;
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

          //        // KenoUtils.instance.playSound(KenoDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // KenoUtils.instance.stopSound(KenoDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this9.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this9.numberFormat(curWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this10 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this10.numberFormatFloat(curWin, 0) : "" + _this10.numberFormat(curWin, 0);
          })).delay(2.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        }
        //    //////////////////////////
        ;

        _proto.getSpriteFrame_Ball = function getSpriteFrame_Ball(num) {
          return this.arrBallSpriteFrame["" + num];
        };
        _proto.getSpriteFrame_Record = function getSpriteFrame_Record(strName) {
          return this.arrRecordSpriteFrame[strName];
        };
        _proto.getFontData = function getFontData(strName) {
          if (!this.arrFontData) {
            return null;
          }
          return this.arrFontData[strName];
        };
        _proto.getSkeletonData = function getSkeletonData(strName) {
          if (!this.arrSkeletonData) {
            return null;
          }
          return this.arrSkeletonData[strName];
        };
        _proto.setBtnBetGray = function setBtnBetGray(btnNode, isGray) {
          Common.changeNodeEffect(btnNode, isGray);
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        };
        return KenoUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/KenoGame', 'chunks:///_virtual/KenoGame'); 
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