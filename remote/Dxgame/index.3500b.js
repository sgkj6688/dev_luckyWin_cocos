System.register("chunks:///_virtual/DxButtonLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './MainManager.ts', './BlackWordProxy.ts', './ChatProxy.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, sp, assetManager, find, EditBox, instantiate, ScrollView, UITransform, Layout, tween, ToggleContainer, RichText, Sprite, Label, isValid, Tween, v3, Component, director, Button, UIOpacity, Widget, i18n, ProxyMgr, ConfigManager, UserKey, DataManager, EventManager, MainManager, BlackWordProxy, ChatProxy, ChatProxyEvent, Common;
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
      sp = module.sp;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "0013aIuYqxNXoSBrQh3Dot4", "DxButtonLogic", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxButtonLogic = exports('default', (_dec = ccclass("DxButtonLogic"), _dec2 = menu("game/Dxgame/DxButtonLogic"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxButtonLogic, _Component);
        function DxButtonLogic() {
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
          _initializerDefineProperty(_this, "Node_room", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "button_room_light", _descriptor6, _assertThisInitialized(_this));
          _this._bundle = void 0;
          _this._isChat = true;
          _this._isScrollRecord = false;
          _this._chatData = null;
          return _this;
        }
        var _proto = DxButtonLogic.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._netManager = this._mainManager.getNetManager();
          this._viewManager = this._mainManager.getViewManager();
          this._conFigManager = this._mainManager.getConfigManager();
          this._dataManager = this._mainManager.getDataManager();
          this._audioManager = this._mainManager.getAudioManager();
          this._bundle = assetManager.getBundle("Dxgame");
        };
        _proto.onEnable = function onEnable() {
          this.initEvent();
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          //        //大小二级界面按钮事件
          this._eventManager.on(this._conFigManager.protocolDx.closeDxGame, this.closeGame, this);
          this._eventManager.on(this._conFigManager.protocolDx.dxJackpotHistory, this.showPool, this);
          this._eventManager.on(this._conFigManager.protocolDx.dxChat, this.showChatPanel, this);
          this._eventManager.on(this._conFigManager.protocolDx.dxCloseChat, this.closeChatAndRecord, this);
          this._eventManager.on(this._conFigManager.protocolDx.dxSendChat, this.sendCaht, this);
          this._eventManager.on(this._conFigManager.protocolDx.DxPool, this.showPool, this);
          this._eventManager.on(this._conFigManager.protocolDx.dxchatRecordSwitch, this.chatRecordSwitch, this);
          this._eventManager.on(ConfigManager.instance.eventTransform.onEmojiClick + "dx", function (GradeCode, emoji, isImg, imgData) {
            if (isImg === void 0) {
              isImg = false;
            }
            if (imgData === void 0) {
              imgData = null;
            }
            if (isImg) {
              if (imgData) {
                var updateChat = function updateChat(strImg) {
                  var chatLayer = find("Canvas/DxgameLayer/Node_root/chat_bg");
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
                  groupId: "dx",
                  content: emoji,
                  //url
                  msgId: msgid,
                  msgType: 10
                });
              }
              return;
            }
            var boxchat = find("Canvas/DxgameLayer/Node_root/chat_bg/chat_box").getComponent(EditBox);
            boxchat.string = "" + boxchat.string + emoji;
          }, this);

          //        //网络协议事件
          //        // this._eventManager.on(this._conFigManager.protocolDx.history, this.recvData, this);
          //        // this._eventManager.on(this._conFigManager.protocolDx.getDetails, this.recvData, this);
          this._eventManager.on(this._conFigManager.protocolDx.getPoolData, this.recvData, this);
          this._eventManager.on(this._conFigManager.protocolDx.curRoundBet, this.recvData, this);
          ChatProxy.joinChat("dx");
          ChatProxy.getRecord("dx");
          ChatProxy.on(ChatProxyEvent.UPDATE_RECORD, function (data) {
            if (data.msg.GroupId != "dx") {
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
            if (data.msg.GroupId != "dx") {
              return;
            }
            _this2.updateChat(data.msg);
          }, this);

          //        // //控件事件
          //        // let chatLayer = cc.find("Canvas/DxgameLayer/Node_root/chat_bg");
          //        // let scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(cc.ScrollView);
          //        // scollview_content.content.on(cc.Node.EventType.SIZE_CHANGED, this.onNodeEventSizeChange, this);
        };

        _proto.showDxActive = function showDxActive(data) {
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
            this._netManager.sendOnlineData(this._conFigManager.protocolDx.getPoolData, {
              offset: start,
              limit: 2
            });
            return;
          }
          if (data == "next") {
            //            //下一页
            this._curPoolPage = this._curPoolPage + 1;
            var _start = (this._curPoolPage - 1) * 2;
            this._netManager.sendOnlineData(this._conFigManager.protocolDx.getPoolData, {
              offset: _start,
              limit: 2
            });
            return;
          }
          var self = this;
          Common.loadPopBuddle("prefab/dxBigRecord", this._bundle, function () {}, function (dxBigRecord) {
            var bigRecord = instantiate(dxBigRecord);
            self._viewManager.popNodeView(bigRecord, true);
            self._viewManager.adeptPopGameSize(bigRecord);
            self._curPoolPage = 1;
            self._netManager.sendOnlineData(self._conFigManager.protocolDx.getPoolData, {
              offset: 0,
              limit: 2
            });
          }, true);
        };
        _proto.onNodeEventSizeChange = function onNodeEventSizeChange() {
          var chatLayer = find("Canvas/DxgameLayer/Node_root/chat_bg");
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          if (scollview_content.content.getComponent(UITransform).height > scollview_content.node.getComponent(UITransform).height) {
            scollview_content.scrollToBottom(0.2);
          }
        };
        _proto.sendCaht = function sendCaht() {
          var boxchat = find("Canvas/DxgameLayer/Node_root/chat_bg/chat_box").getComponent(EditBox);
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
            groupId: "dx",
            content: chatContent,
            msgId: msgid,
            msgType: 1
          });
        };
        _proto.showChatPanel = function showChatPanel() {
          var chat_bg = find("Canvas/DxgameLayer/Node_root/chat_bg");
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
          var chat_bg = find("Canvas/DxgameLayer/Node_root/chat_bg");
          var rootLayout = chat_bg.parent.getComponent(Layout);
          rootLayout.enabled = true;
          tween(rootLayout).delay(0.2).call(function () {
            rootLayout.enabled = false;
          }).start();
          this._isChat = false;
          this._netManager.sendOnlineData(this._conFigManager.protocolChat.exitChat, {
            groupId: "dx"
          }); //推出聊天室
        };

        _proto.chatPanel = function chatPanel() {
          this._isChat = !this._isChat;
          if (this._isChat) {
            this._netManager.sendOnlineData(this._conFigManager.protocolChat.joinChat, {
              groupId: "dx"
            }); //加入聊天
            this._netManager.sendOnlineData(this._conFigManager.protocolChat.getChatRecord, {
              groupId: "dx",
              size: 20
            });
          } else {
            this._netManager.sendOnlineData(this._conFigManager.protocolChat.exitChat, {
              groupId: "dx"
            }); //推出聊天室
          }
        };

        _proto.closeScrollRecord = function closeScrollRecord() {
          this._isScrollRecord = false;
          this._netManager.sendOnlineData(this._conFigManager.protocolChat.exitChat, {
            groupId: "dxCurBet"
          }); //推出聊天室
        };

        _proto.scrollRecordPanel = function scrollRecordPanel() {
          this._isScrollRecord = !this._isScrollRecord;
          if (this._isScrollRecord) {
            this._netManager.sendOnlineData(this._conFigManager.protocolChat.joinChat, {
              groupId: "dxCurBet"
            }); //加入聊天
            this._netManager.sendOnlineData(this._conFigManager.protocolDx.curRoundBet, {});
          } else {
            this._netManager.sendOnlineData(this._conFigManager.protocolChat.exitChat, {
              groupId: "dxCurBet"
            }); //退出聊天室
          }

          var scollview_content = find("Canvas/DxgameLayer/Node_root/chat_bg/content_record/content_scrollView").getComponent(ScrollView);
          scollview_content.content.removeAllChildren();
        };
        _proto.closeChatAndRecord = function closeChatAndRecord() {
          var chat_bg = find("Canvas/DxgameLayer/Node_root/chat_bg");
          chat_bg.active = false;
          this.closeChat();
          this.closeScrollRecord();
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
        _proto.updateChat = function updateChat(data, isLocal) {
          var _this3 = this;
          var objContent = Common.getChatContent(data.Content, data.MsgType == 10);

          //        // if (data.MsgType == 10) {
          //        //     cc.log("data.MsgType == 10=========" + data.Content);
          //        // }

          if (data.MsgType == 3) {
            //            //置顶消息
            this.Node_topMsg.active = true;
            EventManager.instance.emit(ConfigManager.instance.eventTransform.onChatTopMsg + "dx", objContent);
            return;
          }
          if (data.isCancelTop && this.Node_topMsg.active) {
            this.Node_topMsg.active = false;
            return;
          }
          var chatLayer = find("Canvas/DxgameLayer/Node_root/chat_bg");
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
          var chatLayer = find("Canvas/DxgameLayer/Node_root/chat_bg");
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
          find("Canvas/dxBigRecord/bg/content_bg/page").getComponent(Label).string = "Trang:" + this._curPoolPage;
          if (this._curPoolPage == 1) {
            find("Canvas/dxBigRecord/bg/before_btn").active = false;
          } else {
            find("Canvas/dxBigRecord/bg/before_btn").active = true;
          }
          if (this._curPoolPage * 2 < data.TotalNum) {
            find("Canvas/dxBigRecord/bg/next_btn").active = true;
          } else {
            find("Canvas/dxBigRecord/bg/next_btn").active = false;
          }
          if (data.bigCount && data.smallCount) {
            var label_pre1 = find("Canvas/dxBigRecord/bg/label_pre1");
            label_pre1.getComponent(Label).string = this.getPercent(data.bigCount, data.bigCount + data.smallCount);
            var label_pre2 = find("Canvas/dxBigRecord/bg/label_pre2");
            label_pre2.getComponent(Label).string = this.getPercent(data.smallCount, data.bigCount + data.smallCount);
          }
          for (var i = 1; i < 2; i++) {
            find("Canvas/dxBigRecord/bg/content_bg/scrollview/content/item" + i).active = false;
          }
          var _loop = function _loop() {
            var sdata = data.list[_i2];
            var item = find("Canvas/dxBigRecord/bg/content_bg/scrollview/content/item" + (_i2 + 1));
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
              var sub_prize = find("Canvas/dxBigRecord/bg/content_bg/sub_prize");
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
                var _sub_prize = find("Canvas/dxBigRecord/bg/content_bg/sub_prize");
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
          this._viewManager.closePopGame("Dxgame");
        };
        _proto.start = function start() {};
        _proto.recvData = function recvData(data) {
          Common.showLog("比大小游戏按钮网络");
          if (data.cmd == this._conFigManager.protocolDx.getPoolData) {
            //            //大奖记录
            if (data.Code != 0) {
              Common.showTip(i18n.errTip(data.Code));
              return;
            }
            if (data.GameType == "dx" && data.Data) {
              this.showJackpotHistory(data.Data);
            }
          } else if (data.cmd == this._conFigManager.protocolDx.curRoundBet) {
            //            //当前下注记录
            if (data.Code != 0) {
              Common.showTip(i18n.errTip(data.Code));
              return;
            }
            if (data.GameType == "dx" && data.Data) {
              this.showCurrRecord(data.Data);
            }
          }
        };
        _proto.chatRecordSwitch = function chatRecordSwitch(data) {
          if (!data) return;
          if (this._isChat && data == "toggle_chat") return;
          if (this._isScrollRecord && data == "toggle_record") return;
          find("Canvas/DxgameLayer/Node_root/chat_bg/content_chat").active = data === "toggle_chat" ? true : false;
          find("Canvas/DxgameLayer/Node_root/chat_bg/chat_box").active = data === "toggle_chat" ? true : false;
          find("Canvas/DxgameLayer/Node_root/chat_bg/send_chat").active = data === "toggle_chat" ? true : false;
          find("Canvas/DxgameLayer/Node_root/chat_bg/content_record").active = data === "toggle_record" ? true : false;
          this.Node_emoji.active = data === "toggle_record" ? false : true;

          //        // let str = data == "toggle_chat" ? 1 : 2;
          //        // this._bundle.load(`textures/game/chatdi${str}`, cc.SpriteFrame, (err, sp: cc.SpriteFrame) => {
          //        //     cc.find("Canvas/DxgameLayer/Node_root/chat_bg").getComponent(cc.Sprite).spriteFrame = sp;
          //        // });

          this.chatPanel();
          this.scrollRecordPanel();
        };
        _proto.createCurrRecordItem = function createCurrRecordItem(index, info) {
          var content_scrollView = find("Canvas/DxgameLayer/Node_root/chat_bg/content_record/content_scrollView");
          if (!isValid(content_scrollView)) return;
          var scollview_content = content_scrollView.getComponent(ScrollView);
          var prefab = find("Canvas/DxgameLayer/Node_root/chat_bg/item");
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
          var scollview_content = find("Canvas/DxgameLayer/Node_root/chat_bg/content_record/content_scrollView").getComponent(ScrollView);
          var prefab = find("Canvas/DxgameLayer/Node_root/chat_bg/item");
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
          this._eventManager.off(this._conFigManager.protocolDx.closeDxGame, this.closeGame, this);
          this._eventManager.off(this._conFigManager.protocolDx.dxJackpotHistory, this.showPool, this);
          this._eventManager.off(this._conFigManager.protocolDx.dxChat, this.showChatPanel, this);
          this._eventManager.off(this._conFigManager.protocolDx.dxCloseChat, this.closeChatAndRecord, this);
          this._eventManager.off(this._conFigManager.protocolDx.dxSendChat, this.sendCaht, this);
          this._eventManager.off(this._conFigManager.protocolDx.DxPool, this.showPool, this);
          this._eventManager.off(this._conFigManager.protocolDx.dxchatRecordSwitch, this.chatRecordSwitch, this);
          this._eventManager.off(ConfigManager.instance.eventTransform.onEmojiClick + "dx");

          //        //网络协议事件
          this._eventManager.off(this._conFigManager.protocolDx.history, this.recvData, this);
          this._eventManager.off(this._conFigManager.protocolDx.getPoolData, this.recvData, this);
          this._eventManager.off(this._conFigManager.protocolDx.curRoundBet, this.recvData, this);
          ChatProxy.exitChat("dx");
          ProxyMgr.close(this);
        };
        return DxButtonLogic;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_room", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "button_room_light", [_dec8], {
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

System.register("chunks:///_virtual/Dxgame", ['./DxButtonLogic.ts', './DxGameCtrl.ts', './DxGameDef.ts', './DxGameDetailsLayer.ts', './DxGameHistoryLayer.ts', './DxGameLogic.ts', './DxHand.ts', './DxItem.ts', './DxModel.ts', './DxRoomItem.ts', './DxRoomList.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/DxGameCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ConfigManager.ts', './EventManager.ts', './ViewManager.ts', './DxGameDef.ts', './DxModel.ts', './Common.ts', './NetManager.ts'], function (exports) {
  var _createClass, cclegacy, i18n, ConfigManager, EventManager, ViewManager, eProto, eEvent, DxModel, Common, NetManager;
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
      DxModel = module.DxModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      NetManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "81882jVOZ5Ja7nsp4wABQZt", "DxGameCtrl", undefined);
      var DxGameCtrl = exports('DxGameCtrl', /*#__PURE__*/function () {
        function DxGameCtrl() {
          this._configManager = null;
          this._eventManager = null;
          this._model = null;
          this._configManager = ConfigManager.instance;
          this._eventManager = EventManager.instance;
          this._model = DxModel.instance;
        }
        var _proto = DxGameCtrl.prototype;
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
        };

        _proto.reqEnter = function reqEnter() {
          gts.Debug.Log("=dxGame=reqEnter==" + ("" + DxModel.instance.tableID));
          NetManager.instance.sendOnlineData(eProto.getConfig, {
            tableId: "" + DxModel.instance.tableID
          });
        }

        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.Log("=dxGame=onRecvData==" + JSON.stringify(data));
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
                    ViewManager.instance.closePopGame("Dxgame");
                  }, null);
                  return;
                }
                NetManager.instance.sendOnlineData(eProto.history, {
                  size: 15
                });
                this._model.hdInfo = data.Data;
                emitData = {};
                break;
              }
            case eProto.dxBet:
              {
                //                //下注各种场景  下注叠加
                emitData = data;
                break;
              }
            case eProto.dxXiazhu:
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
            case eProto.dxResult:
              {
                //                //结果通知
                emitData = data;
                break;
              }
            case eProto.dxShowResult:
              {
                //                //checkout
                emitData = data;
                break;
              }
            case eProto.dxNextWait:
              {
                //                //等待下一局
                emitData = data;
                break;
              }
            case eProto.history:
              {
                //                //桌面走势
                var HD_history = data.Data;
                this._model.pathData = HD_history.history;
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
            case eProto.jackpotAmount:
              {
                emitData = data.jackpot;
              }
              break;
          }
          if (emitData != null) {
            this._eventManager.emit(eEvent.updateView, data.cmd, emitData);
          }
        };
        _createClass(DxGameCtrl, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new DxGameCtrl();
            }
            return this._instance;
          }
        }]);
        return DxGameCtrl;
      }());
      DxGameCtrl._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxGameDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a59f4kzwYtNJJ1hhRXonl0I", "DxGameDef", undefined);
      //gameDef moudle
      /** 大小 */
      var cBundle = exports('cBundle', "Dxgame");
      var eRoomStatus = exports('eRoomStatus', {
        none: 0,
        startGame: 2,
        yxxBet: 3,
        result: 6
      });

      //网络消息 C2S_:表示send S2C_:recv  没有标识:send&&recv
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["getConfig"] = "dx/HD_info";
        eProto["dxXiazhu"] = "dx/doingBet";
        eProto["dxResult"] = "dx/result";
        eProto["dxShowResult"] = "dx/checkout";
        eProto["dxNextWait"] = "dx/waiteNext";
        eProto["dxBet"] = "dx/Bet";
        eProto["history"] = "dx/HD_history";
        eProto["backBet"] = "dx/refund";
        eProto["jackpotAmount"] = "dx/jackpotAmount";
        eProto["leave"] = "dx/HD_Leave";
        eProto["betInfo"] = "dx/HD_getBetInfo";
        eProto["getTabelList"] = "dx/HD_getTableListInfo";
        return eProto;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["updateView"] = "dx_updateView";
        eEvent["resetData"] = "dx_resetData";
        eEvent["WIN"] = "dx_win";
        eEvent["CHANGEROOM"] = "dx_changeRoom";
        eEvent["updateListBet"] = "dx_updateListBet";
        return eEvent;
      }({}));

      //////////////////////////////////////////////
      /** S2C 网络包结构
       * S2C = {"Data":{},"GameType":"yxx","Action":"HD_UpdatePlayerNum","ErrMsg":"操作成功","Code":0,"cmd":"yxx/HD_UpdatePlayerNum"}
       */
      /**配置信息 */
      //歷史記錄
      //等待 {"Action":"waiteNext","GameType":"dx","TimeLeft":9,"cmd":"dx/waiteNext"}
      //玩家下注 {"Action":"doingBet","GameType":"dx","TimeLeft":30,dx: IDX,"cmd":"dx/doingBet"}
      //結果 {"Action":"result","GameType":"dx","TimeLeft":0,"WaiteTime":15,"curJackpot":625121,dx: IDX,"cmd":"dx/doingBet"}
      //下注返回{"Action":"result","GameType":"dx","amount":0,"WaiteTime":15,"curJackpot":625121,dx: IDX,"cmd":"dx/doingBet"}
      //自己下注
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxGameDetailsLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ConfigManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, assetManager, find, Label, sp, isValid, SpriteFrame, Sprite, Component, i18n, ConfigManager, NetManager, Common;
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
      isValid = module.isValid;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "07e592v23xCW6id7jdB1YZG", "DxGameDetailsLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Limit = 7;
      var eBSTag = {
        small: 0,
        big: 1
      };
      var DxGameDetailsLayer = exports('default', (_dec = ccclass("DxGameDetailsLayer"), _dec2 = menu("game/Dxgame/DxGameDetailsLayer"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxGameDetailsLayer, _Component);
        function DxGameDetailsLayer() {
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
          _this._requestVersion = 0;
          return _this;
        }
        var _proto = DxGameDetailsLayer.prototype;
        _proto.onLoad = function onLoad() {
          this._bundle = assetManager.getBundle("Dxgame");
          var bigLayer = find("Canvas/dxGameDetails/bg/bigLayer");
          for (var i = 0; i < Limit; i++) {
            bigLayer.getChildByName("item" + (i + 1)).active = false;
          }
          var smallLayer = find("Canvas/dxGameDetails/bg/smallLayer");
          for (var i = 0; i < Limit; i++) {
            smallLayer.getChildByName("item" + (i + 1)).active = false;
          }
        };
        _proto.onEnable = function onEnable() {
          this.requestDetails(this._curRoomid);
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
          var bigLayer = find("Canvas/dxGameDetails/bg/bigLayer");
          var smallLayer = find("Canvas/dxGameDetails/bg/smallLayer");
          var publicLayer = find("Canvas/dxGameDetails/bg/publicLayer");
          var redata = this._detailsData.Data;
          if (redata.Dx.Dice1 == 0 && redata.BetBigList.length == 0 && redata.BetSmallList.length == 0) {
            Common.showTip(i18n.t("10010"));
            return;
          }
          if (redata.Dx.Dice1 != 0) {
            find("Canvas/dxGameDetails").active = true;
            this._curRoomid = redata.Dx.ShowId;

            //            // publicLayer.getChildByName("room_id").getComponent(cc.Label).string = "#" + redata.Dx.ShowId;
            publicLayer.getChildByName("room_id").getComponent(Label).string = Common.setGameNo(redata.Dx.ShowId);
            var date = Common.getTimeFormat(redata.Dx.CreateAt);
            publicLayer.getChildByName("time").getComponent(Label).string = date.time;
            publicLayer.getChildByName("label_result").getComponent(Label).string = redata.Dx.Dice1 + redata.Dx.Dice2 + redata.Dx.Dice3 + "";
            publicLayer.getChildByName("label_big").getComponent(Label).string = Common.ChangeMoneyShow(redata.Dx.BetBig + redata.Dx.RefundBig, 2) + "/" + Common.ChangeMoneyShow(redata.Dx.RefundBig, 2);
            publicLayer.getChildByName("label_small").getComponent(Label).string = Common.ChangeMoneyShow(redata.Dx.BetSmall + redata.Dx.RefundSmall, 2) + "/" + Common.ChangeMoneyShow(redata.Dx.RefundSmall, 2);
            smallLayer.getChildByName("people_bg").getChildByName("people_num").getComponent(Label).string = redata.Dx.BetSmallCount + "";
            bigLayer.getChildByName("people_bg").getChildByName("people_num").getComponent(Label).string = redata.Dx.BetBigCount + "";
            smallLayer.getChildByName("small_image").active = redata.Dx.Result == 2;
            bigLayer.getChildByName("big_image").active = redata.Dx.Result == 1;
            if (redata.Dx.Result == 1) {
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
              var dire = redata.Dx["Dice" + i];
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
          var bigLayer = find("Canvas/dxGameDetails/bg/bigLayer");
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
          var smallLayer = find("Canvas/dxGameDetails/bg/smallLayer");
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
        _proto.recvData = function recvData(data, pos, page) {
          if (page === void 0) {
            page = 1;
          }
          if (!data || data.Code != 0 || !data.Data) {
            return;
          }
          var redata = data.Data;
          if (pos === undefined) {
            this._detailsData = data;
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
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDx.getDetails, {
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
        return DxGameDetailsLayer;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxGameHistoryLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts', './ContentEx.ts', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, SpriteFrame, ScrollView, Node, find, UIOpacity, Label, instantiate, UITransform, Sprite, v2, Component, ConfigManager, EventManager, NetManager, Common, ContentEx, GUtil;
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
      Common = module.Common;
    }, function (module) {
      ContentEx = module.default;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "00e54bxHQBKPKCb2Xtch9Aj", "DxGameHistoryLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_ROW = 5;
      var DxMd5HistoryLayer = exports('default', (_dec = ccclass("DxGameHistoryLayer"), _dec2 = menu("game/dxmd5/DxMd5HistoryLayer"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(ScrollView), _dec15 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
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
          this.onArrow();
        };
        _proto.onEnable = function onEnable() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDx.history, {
            size: 100
          });
          EventManager.instance.on(ConfigManager.instance.protocolDx.history, this.recvData, this);
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
          if (!this._curData) {
            return;
          }
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
          // let x = perw / 2 + col * perw;
          // let y = perh / 2 + (MAX_ROW - row - 1) * perh;
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
          if (data.cmd == ConfigManager.instance.protocolDx.history) {
            if (data.Data.history && data.Data.history.length == 15) {
              NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDx.history, {
                size: 100
              });
              return;
            }
            this._curData = data;
            this.drawPathList();
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.protocolDx.history, this.recvData, this);
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

System.register("chunks:///_virtual/DxGameLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts', './GameDef.ts', './GUtil.ts', './ViewManager.ts', './DxGameCtrl.ts', './DxGameDef.ts', './DxModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, AudioClip, SpriteFrame, Prefab, sp, assetManager, find, tween, v3, Label, instantiate, Sprite, UITransform, Tween, ScrollView, isValid, color, Color, Component, v2, i18n, AudioManager, ConfigManager, DataManager, UserKey, UserProxyEvent, EventManager, NetManager, Common, GameDef, GUtil, ViewManager, DxGameCtrl, eEvent, cBundle, eProto, DxModel;
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
      AudioClip = module.AudioClip;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      sp = module.sp;
      assetManager = module.assetManager;
      find = module.find;
      tween = module.tween;
      v3 = module.v3;
      Label = module.Label;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      Tween = module.Tween;
      ScrollView = module.ScrollView;
      isValid = module.isValid;
      color = module.color;
      Color = module.Color;
      Component = module.Component;
      v2 = module.v2;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
      UserProxyEvent = module.UserProxyEvent;
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
      DxGameCtrl = module.DxGameCtrl;
    }, function (module) {
      eEvent = module.eEvent;
      cBundle = module.cBundle;
      eProto = module.eProto;
    }, function (module) {
      DxModel = module.DxModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "70da0E0L/9C7afKSFY8uXz7", "DxGameLogic", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxGameLogic = exports('default', (_dec = ccclass("DxGameLogic"), _dec2 = menu("game/Dxgame/DxGameLogic"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(AudioClip), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(Prefab), _dec12 = property(sp.Skeleton), _dec13 = property(sp.Skeleton), _dec14 = property(Node), _dec15 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxGameLogic, _Component);
        function DxGameLogic() {
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
          _initializerDefineProperty(_this, "dxsound", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ball", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sazi", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_coin", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipAni", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pool_bg", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_room", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "button_room_light", _descriptor13, _assertThisInitialized(_this));
          //    //游戏Label管理
          _this._totalPool = void 0;
          //总奖池
          _this._bigPeopleNum = void 0;
          //押大人数
          _this._smallPeopleNum = void 0;
          //押小人数
          _this._totalBig = void 0;
          //押大总金额
          _this._totalSmall = void 0;
          //押小总金额
          _this._gameCountDown = void 0;
          //游戏倒计时
          _this._nextCountDown = void 0;
          //下一局倒计时
          _this._preBetBigNum = void 0;
          //预押注大的数量
          _this._preBetSmallNum = void 0;
          //预押注小的数量
          _this._betBigNum = void 0;
          //已经押注大的数量
          _this._betSmallNum = void 0;
          //已经押小的数量
          _this._roomId = void 0;
          //期号
          _this._serviceID = void 0;
          _this._haveHand = false;
          _this._CountDownTime = 0;
          _this._NextDownTime = 0;
          _this._flag = true;
          _this._isResult = false;
          _this._isshowRe = false;
          _this.isCheckOuted = false;
          _this._winNum = 0;
          //    //獎池相關
          _this._stepNum = 0;
          _this._poolNum = 0;
          _this._updateTimeFlag = true;
          _this._updateTime = 0;
          _this._bundle = void 0;
          _this._betCoins = new Set();
          _this.showCountDownTip = false;
          return _this;
        }
        var _proto = DxGameLogic.prototype;
        _proto.onLoad = function onLoad() {
          DxGameCtrl.instance.regist();
          this._configManager = ConfigManager.instance;
          this._eventManager = EventManager.instance;
          this._netManager = NetManager.instance;
          this._dataManager = DataManager.instance;
          this._viewManager = ViewManager.instance;
          this._audioManager = AudioManager.instance;
          this._model = DxModel.instance;
          this._eventManager.on(eEvent.updateView, this.updateView, this);
          if (DataManager.instance.roomID) {
            DxModel.instance.tableID = parseInt(DataManager.instance.roomID);
            DataManager.instance.roomID = null;
          }
          Common.showLog("onLoda");
          Common.showLog(this.node);
          this._bundle = assetManager.getBundle(cBundle);
          this.initGame();
          gts.Debug.Log("=dxGame=reqEnter=onLoad=" + ("" + DxModel.instance.tableID));
          DxGameCtrl.instance.reqEnter();
          var path = find("Canvas/DxgameLayer/Node_root/game_bg/path_bg");
          var ball = path.getChildByName("ball1");
          if (ball) {
            tween(ball).repeatForever(tween().to(0.3, {
              scale: v3(0.6, 0.6, 1)
            }).to(0.3, {
              scale: v3(1.1, 1.1, 1)
            })).start();
          }
          DataManager.instance.isChangeGold = true;
        };
        _proto.start = function start() {
          this.button_room_light.setAnimation(0, "idle", true);
        };
        _proto.onEnable = function onEnable() {
          this.initEvent();
        };
        _proto.onDestroy = function onDestroy() {
          this.closePop();
        }
        //    //关闭
        ;

        _proto.closePop = function closePop() {
          //        // this._audioManager.playbuttonEffect();
          //        // this._audioManager.stopAll();
          this._viewManager.closePopGame(GameDef.Game.Dxgame);
        };
        _proto.init = function init() {
          this.onClickXzCancel();
          this.pool_bg.setAnimation(0, "idle" + DxModel.instance.tableID, true);
          // this.initGame();
          this.updateGameStatus();
          gts.Debug.Log("=dxGame=reqEnter=init=" + ("" + DxModel.instance.tableID));
          DxGameCtrl.instance.reqEnter();
        }
        //    // 得到大小数据之前 先隐藏label，获取label
        ;

        _proto.initGame = function initGame() {
          this.pool_bg.setAnimation(0, "idle" + DxModel.instance.tableID, true);
          Common.showLog("initGame DX");
          this._totalPool = this.topLayer.getChildByName("label_pool").getComponent(Label);
          this._totalPool.string = "";
          this._bigPeopleNum = this.topLayer.getChildByName("big_bg").getChildByName("betPeople").getComponent(Label);
          this._bigPeopleNum.string = "";
          this._smallPeopleNum = this.topLayer.getChildByName("small_bg").getChildByName("betPeople").getComponent(Label);
          this._smallPeopleNum.string = "";
          this._totalBig = this.daLayer.getChildByName("total_bg").getChildByName("total_num").getComponent(Label);
          this._totalBig.string = "";
          this._totalSmall = this.xiaoLayer.getChildByName("total_bg").getChildByName("total_num").getComponent(Label);
          this._totalSmall.string = "";
          this._gameCountDown = this.centerLayer.getChildByName("time_daojishi").getComponent(Label);
          this._gameCountDown.string = "";
          this._nextCountDown = this.centerLayer.getChildByName("waitNext_bg").getChildByName("time_next").getComponent(Label);
          this._nextCountDown.string = "";
          this._preBetBigNum = this.daLayer.getChildByName("pre_bg").getChildByName("pre_yz_num").getComponent(Label);
          this._preBetBigNum.string = "";
          this._preBetSmallNum = this.xiaoLayer.getChildByName("pre_bg").getChildByName("pre_yz_num").getComponent(Label);
          this._preBetSmallNum.string = "";
          this._betBigNum = this.daLayer.getChildByName("have_num").getComponent(Label);
          this._betBigNum.string = "";
          this._betSmallNum = this.xiaoLayer.getChildByName("have_num").getComponent(Label);
          this._betSmallNum.string = "";
          this._roomId = this.topLayer.getChildByName("label_roomId").getComponent(Label);
          this._roomId.string = "";
          this.daLayer.getChildByName("pre_bg").active = false;
          this.daLayer.getChildByName("showPre").active = true;
          this.xiaoLayer.getChildByName("pre_bg").active = false;
          this.xiaoLayer.getChildByName("showPre").active = true;
          this.daLayer.getChildByName("image_ani").active = false;
          this.daLayer.getChildByName("image").active = true;
          this.xiaoLayer.getChildByName("image_ani").active = false;
          this.xiaoLayer.getChildByName("image").active = true;
          this.centerLayer.getChildByName("waitNext_bg").active = false;
          this.gameLayer.getChildByName("yzBtn_layer").active = false;
          this.gameLayer.getChildByName("NothandBtn").active = true;
          this.gameLayer.getChildByName("handBtn").active = true;
        }
        //    // getConfig:"dx/HD_info",                     //得到游戏配置
        //    // dxXiazhu:"dx/doingBet",                     //下注通知
        //    // dxResult:"dx/result",                       //大小结果通知
        //    // dxShowResult:"dx/checkout",                 //结算
        //    // dxNextWait:"dx/waiteNext",                  //等待下一局
        //    // dxPlay:"dx/HD_play",                        //下注操作
        //    //准备压大
        ;

        _proto.onPrepareDa = function onPrepareDa() {
          this.daLayer.getChildByName("pre_bg").active = true;
          this.daLayer.getChildByName("showPre").active = false;
          this.xiaoLayer.getChildByName("pre_bg").active = false;
          this.xiaoLayer.getChildByName("showPre").active = true;
          this._preBetBigNum.string = "0";
          this._preBetSmallNum.string = "0";
          this.gameLayer.getChildByName("yzBtn_layer").active = true;
        }
        //    //准备压小
        ;

        _proto.onPrepareXiao = function onPrepareXiao() {
          this.daLayer.getChildByName("pre_bg").active = false;
          this.daLayer.getChildByName("showPre").active = true;
          this.xiaoLayer.getChildByName("pre_bg").active = true;
          this.xiaoLayer.getChildByName("showPre").active = false;
          this._preBetBigNum.string = "0";
          this._preBetSmallNum.string = "0";
          this.gameLayer.getChildByName("yzBtn_layer").active = true;
        }
        //    //押注
        ;

        _proto.onClickXiaZhu = function onClickXiaZhu(event, data) {
          var num = data;
          if (parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD)) == 0) {
            //            // this.showStep(i18n.lang[10001]);

            this.tipAni.setAnimation(0, "5", false);
            return;
          }
          if (this.daLayer.getChildByName("showPre").active == true) {
            if (parseInt(this._preBetSmallNum.string.replace(/,/g, "")) + parseInt(num) > parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD))) {
              //                // this.showStep(i18n.t("10001"));

              this.tipAni.setAnimation(0, "5", false);
              this.onClickAllIn();
            } else {
              this._preBetSmallNum.string = Common.numFormat(parseInt(this._preBetSmallNum.string.replace(/,/g, "")) + parseInt(num));
            }
          } else {
            if (parseInt(this._preBetBigNum.string.replace(/,/g, "")) + parseInt(num) > parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD))) {
              //                // this.showStep(i18n.t("10001"));

              this.tipAni.setAnimation(0, "5", false);
              this.onClickAllIn();
            } else {
              this._preBetBigNum.string = Common.numFormat(parseInt(this._preBetBigNum.string.replace(/,/g, "")) + parseInt(num));
            }
          }
        }
        //    //all in
        ;

        _proto.onClickAllIn = function onClickAllIn() {
          this._netManager.sendOnlineData(this._configManager.protocolHall.getVnd, {});
        }
        //    //确认下注
        ;

        _proto.onClickXzSure = function onClickXzSure() {
          //        //3秒锁定
          if (this._CountDownTime <= 3) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          Common.showLog("确认下注");
          var big = parseInt(this._preBetBigNum.string.replace(/,/g, ""));
          var small = parseInt(this._preBetSmallNum.string.replace(/,/g, ""));
          if (big == 0 && small == 0) {
            this.tipAni.setAnimation(0, "1", false);
            return;
          }
          this._preBetBigNum.string = "0";
          this._preBetSmallNum.string = "0";
          this._netManager.sendOnlineData(this._serviceID + "/HD_play", {
            action: "Bet",
            big: big,
            small: small
          });
        }
        //    //取消下注
        ;

        _proto.onClickXzCancel = function onClickXzCancel() {
          this._preBetBigNum.string = "0";
          this._preBetSmallNum.string = "0";
        };
        _proto.onHand = function onHand() {
          if (this._haveHand) {
            this._haveHand = false;
            this.gameLayer.getChildByName("NothandBtn").active = true;
            this.gameLayer.getChildByName("handBtn").active = false;
          } else {
            this._haveHand = true;
            this.gameLayer.getChildByName("NothandBtn").active = false;
            this.gameLayer.getChildByName("handBtn").active = true;
          }
        };
        _proto.onRecord = function onRecord() {
          GUtil.openRecord("dx");
        };
        _proto.onDetails = function onDetails() {
          var _this2 = this;
          Common.loadPopBuddle("prefab/dxGameDetails", this._bundle, function () {}, function (dxGameDetails) {
            var dxGameDetailsLayer = instantiate(dxGameDetails);
            _this2._viewManager.popNodeView(dxGameDetailsLayer, true);
            _this2._viewManager.adeptPopGameSize(dxGameDetailsLayer);
          }, true);
        };
        _proto.onRank = function onRank() {
          GUtil.openRank("dx");
        }
        //    //显示游戏规则
        ;

        _proto.onRule = function onRule() {
          var _this3 = this;
          Common.showLog("显示游戏规则");
          Common.loadPopBuddle("prefab/Dxhelp", this._bundle, function () {}, function (Dxhelp) {
            var DxhelpLayer = instantiate(Dxhelp);
            _this3._viewManager.popNodeView(DxhelpLayer, true);
            _this3._viewManager.adeptPopGameSize(DxhelpLayer);
          }, true);
        };
        _proto.onHistory = function onHistory() {
          var _this4 = this;
          Common.loadPopBuddle("prefab/dxPathList", this._bundle, function () {}, function (dxPathList) {
            var dxPathListLayer = instantiate(dxPathList);
            _this4._viewManager.popNodeView(dxPathListLayer, true);
            _this4._viewManager.adeptPopGameSize(dxPathListLayer);
          }, true);
        };
        _proto.initEvent = function initEvent() {
          var _this5 = this;
          EventManager.instance.on(eEvent.CHANGEROOM, function () {
            gts.Debug.Log("=on=click=tabelID=DxGameDef.eEvent.CHANGEROOM=", DxModel.instance.tableID);
            _this5.init();
          }, this);

          //        //监听按钮
          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.on(this._configManager.eventTransform.gameHide, this.gameHide, this); //切到后台
          this._eventManager.on("handrelust", this.removePanzi, this); //断线重连
        };

        _proto.removePanzi = function removePanzi() {
          if (this._isshowRe == false && this._model.resultData != null) {
            this._isshowRe = true;
            this.showHandStatus(false);
            this.showResult(this._model.resultData, false);
            this.showAddScore();
          }
        };
        _proto.gameHide = function gameHide() {};
        _proto.gameShow = function gameShow() {
          var _this6 = this;
          Common.showLog("前台");
          var self = this;
          this.scheduleOnce(function () {
            if (_this6._netManager._connect == true) {
              Common.closeWait();
              self.updateGameStatus();
              _this6._audioManager.stopAll();
              _this6._audioManager.NextBgMusic();
              gts.Debug.Log("=dxGame=reqEnter=gameShow=" + ("" + DxModel.instance.tableID));
              DxGameCtrl.instance.reqEnter();
              NetManager.instance.sendOnlineData(eProto.getTabelList, {});
            }
          }, 0.1);
        };
        _proto.showStartGame = function showStartGame() {
          var hdInfo = this._model.hdInfo;
          this._serviceID = hdInfo.dxServerId;
          var platform = DataManager.instance.getUserDataForKey(UserKey.PLATFORM) || "";
          this._roomId.string = "#" + platform + "-" + hdInfo.dx.ShowId; //Common.numFormat(hdInfo.dx.ShowId);
          if (typeof hdInfo.curJackpot != "undefined") {
            this._totalPool.string = Common.numFormat(hdInfo.curJackpot);
          }
          var isBigBet = hdInfo.myBet.big > 0;
          var isSmallBet = hdInfo.myBet.small > 0;
          if (isBigBet) {
            this.onPrepareDa();
          } else if (isSmallBet) {
            this.onPrepareXiao();
          }
          this._totalBig.string = Common.numFormat(hdInfo.dx.BetBig);
          this._totalSmall.string = Common.numFormat(hdInfo.dx.BetSmall);
          this._bigPeopleNum.string = Common.numFormat(hdInfo.dx.BetBigCount);
          this._smallPeopleNum.string = Common.numFormat(hdInfo.dx.BetSmallCount);
          this._betBigNum.string = Common.numFormat(hdInfo.myBet.big);
          this._betSmallNum.string = Common.numFormat(hdInfo.myBet.small);
          if (hdInfo.dx.Result == 0) {
            //            //下注阶段
            if (hdInfo.timeLeft > 0 && this._CountDownTime == 0 && this._flag == true) {
              this._flag = false;
              this.showCountDown(hdInfo.timeLeft);
              this.createCountDown(hdInfo.timeLeft);
            }
          } else {
            //            //结算阶段
            this._winNum = hdInfo.myBet.amount + hdInfo.myBet.big + hdInfo.myBet.small;
            if (!this._isResult) {
              this._isResult = true;
              this._gameCountDown.string = "";
              this.showResult(hdInfo, true);
            }
          }
        };
        _proto.showResultAniBefore = function showResultAniBefore(delay) {
          var _this7 = this;
          this.scheduleOnce(function () {
            var shaizifeng = _this7.centerLayer.getChildByName("shuaizi1guang").getComponent(sp.Skeleton);
            shaizifeng.node.active = true;
            shaizifeng.setAnimation(0, "inrto", false);
            _this7._audioManager.playSound(_this7.dxsound[2], false);
            var self = _this7;
            shaizifeng.setCompleteListener(function () {
              shaizifeng.setCompleteListener(null);
              self._flag = true;
              if (self._haveHand == false) {
                shaizifeng.setAnimation(0, "idle", true);
              } else {
                shaizifeng.node.active = false;
                gts.Debug.Log("=dxResult=showResultAni=_haveHand == true=");
                _this7.showHandStatus(true);
              }
            });
          }, delay);
        };
        _proto.showResultAni = function showResultAni() {
          var _this8 = this;
          var shaizifeng = this.centerLayer.getChildByName("shuaizi1guang").getComponent(sp.Skeleton);
          if (!this._haveHand) {
            this.showResult(this._model.resultData, false);
            tween(shaizifeng.node).to(0.5, {
              position: v3(shaizifeng.node.getPosition().x + 200, shaizifeng.node.getPosition().y + 200)
            }).call(function () {
              shaizifeng.node.position = v3(0, 0);
              shaizifeng.node.active = false;
              _this8.showAddScore();
            }).start();
            gts.Debug.Log("=dxResult=showResultAni=_haveHand == false=");
          } else {
            this.showsaizi(this._model.resultData);
          }
        };
        _proto.showHandStatus = function showHandStatus(isHand) {
          var panzi = find("Canvas/DxgameLayer/Node_root/game_bg/centerLayer/hand_bg");
          panzi.active = isHand;
        };
        _proto.showPoolNum = function showPoolNum(data) {
          // 新值（包括奖池归零）覆盖旧目标，先停止上一段滚动。
          this.unschedule(this.addNum);
          if (this._totalPool.string == "") {
            this._totalPool.string = Common.numFormat(data);
            return;
          }
          var curNum = parseInt(this._totalPool.string.replace(/,/g, ""));
          if (data <= curNum) {
            this._totalPool.string = Common.numFormat(data);
            return;
          }
          this._poolNum = data;
          this._stepNum = Math.max(1, Math.floor((data - curNum) / 20));
          this.schedule(this.addNum, 0.1);
        };
        _proto.addNum = function addNum() {
          var cur = parseInt(this._totalPool.string.replace(/,/g, ""));
          cur = cur + this._stepNum;
          if (cur >= this._poolNum) {
            cur = this._poolNum;
            this.unschedule(this.addNum);
          }
          this._totalPool.string = Common.numFormat(cur);
        };
        _proto.showsaizi = function showsaizi(data) {
          var shaizi1 = this.centerLayer.getChildByName("shaizi_1").getComponent(Sprite);
          var shaizi2 = this.centerLayer.getChildByName("shaizi_2").getComponent(Sprite);
          var shaizi3 = this.centerLayer.getChildByName("shaizi_3").getComponent(Sprite);
          shaizi1.spriteFrame = this.sazi[data.dx.Dice1 - 1];
          shaizi2.spriteFrame = this.sazi[data.dx.Dice2 - 1];
          shaizi3.spriteFrame = this.sazi[data.dx.Dice3 - 1];
          shaizi1.node.active = true;
          shaizi2.node.active = true;
          shaizi3.node.active = true;
        };
        _proto.showResult = function showResult(data, reEnter) {
          if (!data) {
            return;
          }
          this._netManager.sendOnlineData(eProto.history, {
            size: 15
          });
          this._isshowRe = true;
          var shaizi1 = this.centerLayer.getChildByName("shaizi_1").getComponent(Sprite);
          var shaizi2 = this.centerLayer.getChildByName("shaizi_2").getComponent(Sprite);
          var shaizi3 = this.centerLayer.getChildByName("shaizi_3").getComponent(Sprite);
          shaizi1.spriteFrame = this.sazi[data.dx.Dice1 - 1];
          shaizi2.spriteFrame = this.sazi[data.dx.Dice2 - 1];
          shaizi3.spriteFrame = this.sazi[data.dx.Dice3 - 1];
          shaizi1.node.active = true;
          shaizi2.node.active = true;
          shaizi3.node.active = true;
          this._audioManager.playSound(this.dxsound[3], false);
          if (data.dx.Result == 1) {
            //            //小
            var image_ani = this.xiaoLayer.getChildByName("image_ani");
            image_ani.active = true;
            image_ani.getComponent(sp.Skeleton).setAnimation(0, "xiu_2", true);
            this.xiaoLayer.getChildByName("image").active = false;
          } else {
            var _image_ani = this.daLayer.getChildByName("image_ani");
            _image_ani.active = true;
            _image_ani.getComponent(sp.Skeleton).setAnimation(0, "TAI_1", true);
            this.daLayer.getChildByName("image").active = false;
          }
          if (!reEnter && data.dx.ResultJackpot == 1) {
            gts.Debug.Log("==中大奖==");
            this.scheduleOnce(function () {
              var bigAni = find("Canvas/DxgameLayer/Node_root/game_bg/nohu");
              bigAni.active = true;
              bigAni.getComponent(sp.Skeleton).setAnimation(0, "idle", false);
              bigAni.getComponent(sp.Skeleton).setCompleteListener(function () {
                bigAni.active = false;
              });
            }, 1);
          }
        };
        _proto.showStep = function showStep(text) {
          var stepInfo = find("Canvas/DxgameLayer/Node_root/game_bg/stepInfo");
          stepInfo.getChildByName("text").getComponent(Label).string = text;
          stepInfo.active = true;
        };
        _proto.showAddScore = function showAddScore() {
          var _this9 = this;
          if (this._isshowRe && this._winNum > 0 && !this.isCheckOuted) {
            this.tipAni.setAnimation(0, "get", false);
            var winLabel = this.tipAni.node.getChildByName("text").getComponent(Label);
            winLabel.node.active = true;
            winLabel.string = "+" + Common.numFormat(this._winNum);
            this.tipAni.setCompleteListener(function () {
              _this9.tipAni.setCompleteListener(null);
              winLabel.node.active = false;
            });
            this._winNum = 0;
            this.isCheckOuted = true;

            //        //结算-更新
            DataManager.instance.isChangeGold = true;
            DataManager.instance.emit(UserProxyEvent.CHANGE_GOLD);
          }
        };
        _proto.updateView = function updateView(event, data) {
          var _this10 = this;
          switch (event) {
            case eProto.getConfig:
              {
                this.showStartGame();
                break;
              }
            case eProto.dxBet:
              {
                //                //下注各种场景  下注叠加
                if (!(typeof data.Code == "undefined") && data.Code == 0) {
                  Common.showLog("自己下注成功");
                  var bet = data.Data;
                  var betBigNum = parseInt(this._betBigNum.string);
                  var betSmallNum = parseInt(this._betSmallNum.string);

                  //                    //更新显示
                  if (bet.big > betBigNum) {
                    this.showCoinEffect(this._betBigNum.node, function () {
                      _this10._betBigNum.string = Common.numFormat(bet.big);
                      var Node_updateEffect = _this10._betBigNum.node.parent.getChildByName("Node_updateEffect").getComponent(sp.Skeleton);
                      Node_updateEffect.setAnimation(0, "idle_small", false);
                    });
                  } else {
                    this._betBigNum.string = Common.numFormat(bet.big);
                  }
                  if (bet.small > betSmallNum) {
                    this.showCoinEffect(this._betSmallNum.node, function () {
                      _this10._betSmallNum.string = Common.numFormat(bet.small);
                      var Node_updateEffect = _this10._betSmallNum.node.parent.getChildByName("Node_updateEffect").getComponent(sp.Skeleton);
                      Node_updateEffect.setAnimation(0, "idle_small", false);
                    });
                  } else {
                    this._betSmallNum.string = Common.numFormat(bet.small);
                  }
                  this._audioManager.playSound(this.dxsound[1], false);
                  EventManager.instance.emit(eEvent.updateListBet + (DxModel.instance.tableID - 1), bet.big || bet.small);
                  return;
                } else {
                  Common.showLog("下注失败场景");
                  Common.showLog(data.ErrMsg);
                  this.showStep(i18n.errTip(data.Code));
                  return;
                }
              }
            case eProto.dxXiazhu:
              {
                var doingBet = data;

                //                //总盘下注变化
                if (this._isResult) {
                  Common.showLog("新一轮开始");
                  this.StartGame(doingBet.dx.ShowId);
                }
                this.showChangeForTotal(doingBet.dx);

                // this.showCountDown(data.TimeLeft);
                this.createCountDown(data.TimeLeft);
                if (this.topLayer.getChildByName("big_ani").children.length > 0) {
                  this.topLayer.getChildByName("big_ani").removeAllChildren();
                }
                if (data.TimeLeft == 1) {
                  this.showResultAniBefore(0.5);
                }
                break;
              }
            case eProto.backBet:
              {
                //                //返回
                var refund = data;
                if (refund && refund.amount > 0) {
                  Common.showTip(i18n.lang.dxgameTip + Common.numFormat(refund.amount));
                }
                break;
              }
            case eProto.dxResult:
              {
                var _result = data;
                this.showCountDown(0);
                this.unschedule(this.localTimeUpdate);
                //                //结果通知
                if (!this._isResult) {
                  this._isResult = true;
                  var time = this._CountDownTime;
                  this._totalBig.string = "" + Common.numFormat(_result.dx.BetBig);
                  this._totalSmall.string = "" + Common.numFormat(_result.dx.BetSmall);
                  this._model.resultData = _result;
                  this.scheduleOnce(function () {
                    _this10._gameCountDown.string = "";
                    _this10.showResultAni();
                    gts.Debug.Log("=dxResult=showResultAni==");
                  }, time + 1.5);
                }
                break;
              }
            case eProto.dxShowResult:
              {
                //                //checkout
                var checkout = data;
                this._winNum = checkout.amount;
                this.showAddScore();
                break;
              }
            case eProto.dxNextWait:
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
            case eProto.history:
              {
                //                //桌面走势
                this.updatePath();
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
                //                //下注各种场景  下注叠加

                var WindowVnd = data;
                var money = WindowVnd.Vnd;
                if (money <= 0) {
                  //                    // this.showStep(i18n.lang[10001]);
                  this.tipAni.setAnimation(0, "5", false);
                } else {
                  if (this.daLayer.getChildByName("showPre").active == true) {
                    this._preBetSmallNum.string = "" + Common.numFormat(money);
                  } else {
                    this._preBetBigNum.string = "" + Common.numFormat(money);
                  }
                }
                break;
              }
            case eProto.jackpotAmount:
              {
                this.showPoolNum(data);
                break;
              }
          }
        };
        _proto.showCoinEffect = function showCoinEffect(endNode, fCall) {
          var _this11 = this;
          var startNode = find("Node_root/game_bg/yzBtn_layer/xiazhu_btn", this.node);
          var pos = this.node.getComponent(UITransform).convertToNodeSpaceAR(startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0)));
          var endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(endNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0)));
          var _loop = function _loop() {
            var coin = instantiate(_this11.prefab_coin);
            coin.getComponent(UITransform).priority = 1000;
            coin.position = v3(pos);
            _this11.node.addChild(coin);
            _this11._betCoins.add(coin);
            var randX = 1;
            var fixY = 100;
            tween(coin).bezierTo(Math.random() * 0.35 + 0.5, v2(pos.x * randX, pos.y + fixY), v2(endPos.x * randX, pos.y - fixY), endPos).call(i == 0 ? fCall : null).call(function () {
              return _this11._betCoins["delete"](coin);
            }).removeSelf().start();
          };
          for (var i = 0; i < 5; i++) {
            _loop();
          }
        };
        _proto.clearBetCoins = function clearBetCoins() {
          // 金币 Tween 的目标是子节点；切房或换局时必须取消其旧金额回调。
          this._betCoins.forEach(function (coin) {
            Tween.stopAllByTarget(coin);
            coin.destroy();
          });
          this._betCoins.clear();
        };
        _proto.updatePath = function updatePath() {
          var path = find("Canvas/DxgameLayer/Node_root/game_bg/path_bg");
          if (this._model.pathData == null || this._model.pathData.length <= 0) {
            return;
          }
          for (var i = 0; i < 15; i++) {
            if (this._model.pathData[i]) {
              var ball = path.getChildByName("ball" + (i + 1));
              ball.active = true;
              ball.getComponent(Sprite).spriteFrame = this.ball[this._model.pathData[i].Result - 1];
            }
          }
        };
        _proto.StartGame = function StartGame(ShowId) {
          this.clearBetCoins();
          //        //初始化数据
          this._isResult = false;
          this._flag = true;
          this._CountDownTime = 0;
          this._NextDownTime = 0;
          this._model.resultData = null;
          this._isshowRe = false;
          this._betBigNum.string = "0";
          this._betSmallNum.string = "0";
          this._winNum = 0;
          this.isCheckOuted = false;
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
          this.topLayer.getChildByName("big_ani").removeAllChildren();
          this.centerLayer.getChildByName("waitNext_bg").active = false;
          var bigAni = find("Canvas/DxgameLayer/Node_root/game_bg/nohu");
          bigAni.active = false;
          this._audioManager.playSound(this.dxsound[0], false);
          //        // this.showStep(i18n.lang.newStart);
          this.tipAni.setAnimation(0, "4", false);
          var winLabel = this.tipAni.node.getChildByName("text").getComponent(Label);
          winLabel.node.active = false;
          this._roomId.string = Common.setGameNo(ShowId);
          var scollview_content = find("Canvas/DxgameLayer/Node_root/chat_bg/content_record/content_scrollView").getComponent(ScrollView);
          if (isValid(scollview_content)) {
            scollview_content.content.removeAllChildren();
          }
        };
        _proto.updateGameStatus = function updateGameStatus() {
          this.clearBetCoins();
          //        // this._gameCountDown.string="";
          this._CountDownTime = 0;
          this._NextDownTime = 0;
          this._flag = true;
          this._isResult = false;
          this._model.resultData = null;
          this._isshowRe = false;
          this._winNum = 0;
          this.isCheckOuted = false;
          this._stepNum = 0;
          this._poolNum = 0;
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.node);
          this._updateTimeFlag = true;
          var shaizi1 = this.centerLayer.getChildByName("shaizi_1").getComponent(Sprite);
          var shaizi2 = this.centerLayer.getChildByName("shaizi_2").getComponent(Sprite);
          var shaizi3 = this.centerLayer.getChildByName("shaizi_3").getComponent(Sprite);
          shaizi1.node.active = false;
          shaizi2.node.active = false;
          shaizi3.node.active = false;
          var shaizifeng = this.centerLayer.getChildByName("shuaizi1guang").getComponent(sp.Skeleton);
          shaizifeng.node.active = false;
          this.xiaoLayer.getChildByName("image_ani").active = false;
          this.xiaoLayer.getChildByName("image").active = true;
          this.daLayer.getChildByName("image_ani").active = false;
          this.daLayer.getChildByName("image").active = true;
          this.topLayer.getChildByName("big_ani").removeAllChildren();
          this.centerLayer.getChildByName("waitNext_bg").active = false;
          var bigAni = find("Canvas/DxgameLayer/Node_root/game_bg/nohu");
          bigAni.active = false;
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
          if (this._NextDownTime <= 2 && this._isshowRe == false && this._model.resultData != null) {
            this._isshowRe = true;
            this.showHandStatus(false);
            this.showResult(this._model.resultData, false);
            this.showAddScore();
          }
        };
        _proto.localTimeUpdate = function localTimeUpdate() {
          this._updateTime--;
          this.showCountDown(this._updateTime);
        };
        _proto.createCountDown = function createCountDown(timeleft) {
          if (this._updateTimeFlag) {
            this._updateTimeFlag = false;
            this._updateTime = timeleft;
            this.unschedule(this.localTimeUpdate);
            this.schedule(this.localTimeUpdate, 1);
          }
        };
        _proto.showCountDown = function showCountDown(timeleft) {
          this._CountDownTime = timeleft;
          this._gameCountDown.color = this._CountDownTime <= 3 ? color(255, 42, 0) : Color.WHITE;
          if (this._CountDownTime <= 0.000001) {
            this._CountDownTime = 0;
            this._gameCountDown.string = "0";
          } else {
            this._gameCountDown.string = "" + this._CountDownTime;
          }
          if (this._CountDownTime == 1) {
            DataManager.instance.isChangeGold = false;
            //            // this.showStep(i18n.lang.dxgameTimeTip);

            this.tipAni.setAnimation(0, "3", false);
          }
          if (timeleft <= 3 && timeleft >= 1 && !this.showCountDownTip) {
            ViewManager.instance.showCountDownTip(this._gameCountDown.node.parent, timeleft, "idle4", -5, 0, 1.35);
          }
          this.showCountDownTip = timeleft <= 3;
          this._gameCountDown.node.active = timeleft > 3;
        };
        _proto.showChangeForTotal = function showChangeForTotal(dx) {
          this._bigPeopleNum.string = Common.numFormat(dx.BetBigCount);
          this._smallPeopleNum.string = Common.numFormat(dx.BetSmallCount);
          this._totalBig.node.scale = v3(1, 1, 1);
          this._totalSmall.node.scale = v3(1, 1, 1);
          var dtotalNum = parseInt(this._totalBig.string.replace(/,/g, ""));
          var xtotalNum = parseInt(this._totalSmall.string.replace(/,/g, ""));
          this._totalBig.string = "" + Common.numFormat(dx.BetBig);
          this._totalSmall.string = "" + Common.numFormat(dx.BetSmall);
          if (dtotalNum != parseInt(this._totalBig.string.replace(/,/g, ""))) {
            var Node_updateEffect = this._totalBig.node.parent.getChildByName("Node_updateEffect").getComponent(sp.Skeleton);
            Node_updateEffect.setAnimation(0, "idle_big", false);
            tween(this._totalBig.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.15, {
              scale: v3(1, 1, 1)
            }).start();
          }
          if (xtotalNum != parseInt(this._totalSmall.string.replace(/,/g, ""))) {
            var _Node_updateEffect = this._totalSmall.node.parent.getChildByName("Node_updateEffect").getComponent(sp.Skeleton);
            _Node_updateEffect.setAnimation(0, "idle_big", false);
            tween(this._totalSmall.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.15, {
              scale: v3(1, 1, 1)
            }).start();
          }
        };
        _proto.removeEvent = function removeEvent() {
          DxGameCtrl.instance.unRegist();
          EventManager.instance.off(eEvent.CHANGEROOM);
          this._eventManager.off(eEvent.updateView, this.updateView, this);
          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.off(this._configManager.eventTransform.gameHide, this.gameHide, this); //切到后台

          this._eventManager.off("handrelust", this.removePanzi, this); //断线重连
        };

        _proto.onDisable = function onDisable() {
          this.clearBetCoins();
          this.removeEvent();
        };
        return DxGameLogic;
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dxsound", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sazi", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "prefab_coin", [_dec11], {
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
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pool_bg", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_room", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "button_room_light", [_dec15], {
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

System.register("chunks:///_virtual/DxHand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './Common.ts', './GUtil.ts'], function (exports) {
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
      cclegacy._RF.push({}, "d63feaC9JtCP4TdWjZcvanb", "DxHand", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxHand = exports('default', (_dec = ccclass("DxHand"), _dec2 = menu("game/Dxgame/DxHand"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxHand, _Component);
        function DxHand() {
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
        var _proto = DxHand.prototype;
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

        return DxHand;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "bb37eYwu95OPK8LjLE2J/dN", "DxItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxItem = exports('DxItem', (_dec = ccclass("DxItem"), _dec2 = menu("game/Dxgame/DxItem"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxItem, _Component);
        function DxItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_num", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DxItem.prototype;
        ////////////////////////
        _proto.setString = function setString(openNum) {
          this.Label_num.string = "" + openNum;
          // this.Label_num.color = openNum > 10 ? color(255, 255, 255, 255) : color(255, 245, 0, 255);
        };

        return DxItem;
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

System.register("chunks:///_virtual/DxModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "328f79gCmNBvK0R0hGcEytV", "DxModel", undefined);
      var DxModel = exports('DxModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(DxModel, _GameDef$BaseSington);
        function DxModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          //    //結果信息
          _this._resultData = null;
          //    //歷史走勢
          _this._pathData = null;
          //    //配置信息
          _this._hdInfo = null;
          _this.tableID = 1;
          return _this;
        }
        _createClass(DxModel, [{
          key: "resultData",
          get: function get() {
            return this._resultData;
          },
          set: function set(result) {
            this._resultData = result;
          }
        }, {
          key: "pathData",
          get: function get() {
            return this._pathData;
          },
          set: function set(pathData) {
            this._pathData = pathData;
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
        return DxModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DxRoomItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './EventManager.ts', './DxModel.ts', './DxGameDef.ts', './DxItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Sprite, Label, instantiate, tween, v3, Tween, color, Component, Common, EventManager, DxModel, eEvent, DxItem;
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
      Tween = module.Tween;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      DxModel = module.DxModel;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      DxItem = module.DxItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "edeecjjlQtDtL+3Gk42Gexn", "DxRoomItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var DxRoomItem = exports('default', (_dec = ccclass("DxRoomItem"), _dec2 = menu("game/Dxgame/DxRoomItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(Sprite), _dec12 = property(Sprite), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Sprite), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Label), _dec20 = property(Sprite), _dec21 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxRoomItem, _Component);
        function DxRoomItem() {
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
          _initializerDefineProperty(_this, "Label_times", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_countDown", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_countDown", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layout_longInfo", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_longInfo_count", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_longInfo_type", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTypeFrame", _descriptor19, _assertThisInitialized(_this));
          _this.gameTimeLeft = 0;
          _this.gameTime = 0;
          _this._gtItem = null;
          return _this;
        }
        var _proto = DxRoomItem.prototype;
        // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          this.Node_label.active = true;
          this.node.on("click", this.onItemClick, this);
        };
        _proto.onItemClick = function onItemClick(event) {
          if (DxModel.instance.tableID == this.item.itemIndex + 1) {
            return;
          }
          this.node.parent.getChildByName("itemTabel_" + DxModel.instance.tableID).getChildByName("light").active = false;
          DxModel.instance.tableID = this.item.itemIndex + 1;
          this.light.active = true;
          EventManager.instance.emit(eEvent.CHANGEROOM);
          gts.Debug.Log("=on=click=tabelID=", DxModel.instance.tableID);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.updateListBet + this.item.itemIndex);
          this.node.off("click", this.onItemClick, this);
        };
        _proto.start = function start() {
          var _this2 = this;
          //将label节点绑定到label root 并跟随原来节点
          // AutoChangeParent.Bind(this.Node_label, this.content_label, true).OnUpdateNotify((dt: number) => {
          //     this.Node_label.getComponent(UIOpacity).opacity = this.node.getComponent(UIOpacity).opacity;
          //     this.Node_label.active = this.node.active;
          //     this.Node_label.scale = this.node.scale;
          // }, this);

          //注册item OnDataChangedNotify OnHideNotify 回调
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
        //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var _this3 = this;
          var tempData = this.item.data;
          this.Node_label.removeAllChildren();
          this.itemLayout.removeAllChildren();
          if (tempData.openResults.length == 0) {
            return;
          }
          this.node.name = "itemTabel_" + (this.item.itemIndex + 1);
          this.light.active = DxModel.instance.tableID == this.item.itemIndex + 1;
          EventManager.instance.off(eEvent.updateListBet + this.item.itemIndex);
          EventManager.instance.on(eEvent.updateListBet + this.item.itemIndex, function (betAmount) {
            if (betAmount > 0) {
              _this3.Label_betAmount.string = betAmount > 0 ? "\u20AB:" + Common.ChangeMoneyFormat(betAmount, 2) : "";
            }
          }, this);
          var rowNum = 5;
          var colNum = 18;
          var startPosX = 13;
          var startPosY = -14;
          var distanceX = 28.3;
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
            var newItem = this.itemLayout.getChildByName("Node_item_" + i);
            if (!newItem) {
              newItem = instantiate(this.Node_item);
              newItem.name = "Node_item_" + i;
              this.itemLayout.addChild(newItem);
            }
            newItem.active = true;
            newItem.getComponent(Sprite).spriteFrame = this.arrItemBg[isBig ? 0 : 1];
            newItem.getComponent(DxItem).setString(openNum);
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
          // if (openResults.length < this.itemLayout.children.length) {
          //     for (let i = openResults.length - 1; i < this.itemLayout.children.length; i++) {
          //         let newItem = this.itemLayout.getChildByName(`Node_item_${i}`);
          //         if (newItem) {
          //             newItem.active = false;
          //         }
          //     }
          // }

          var curPos = v3(-254.5, 67.5, 0);
          if (maxCol >= colNum) {
            curPos.x -= (maxCol - colNum + 1) * distanceX;
          }
          this.itemLayout.position = curPos;
          this.Node_label.position = curPos;
          var tableId = parseInt(tempData.tableId) - 1;
          this.title.spriteFrame = this.arrTitle[tableId];
          this.tag.spriteFrame = this.arrTag[tableId];
          this.Label_betAmount.string = tempData.betAmount > 0 ? "\u20AB:" + Common.ChangeMoneyShow(tempData.betAmount, 2) : "";
          this.Label_win.string = tempData.prizeAmount > 0 ? "+" + Common.ChangeMoneyFormat(tempData.prizeAmount, 2) : "";
          this.Label_win.node.active = tempData.prizeAmount > 0;
          this.Label_times.string = "(" + tempData.gameTime + "s)";
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
          this.gameTime = tempData.gameTime;
          this.gameTimeLeft = tempData.gameTimeLeft;
          this.setCountDown(this.gameTimeLeft);
          this.setTimer();
        };
        _proto.setTimer = function setTimer() {
          var _this4 = this;
          Tween.stopAllByTarget(this.Label_countDown);
          tween(this.Label_countDown).delay(1.0).call(function () {
            _this4.gameTimeLeft--;
            _this4.setCountDown(_this4.gameTimeLeft);

            // 接口可能恰好返回 0，递减后也要进入下一轮，避免一直显示 0。
            if (_this4.gameTimeLeft <= 0) {
              _this4.gameTimeLeft = _this4.gameTime;
              _this4.Label_betAmount.string = "";
              _this4.Label_win.node.active = false;
              var tempData = _this4.item.data;
              if (tempData.longCount > 0 && tempData.longType != "") {
                _this4.Layout_longInfo.active = true;
              }
            }
          }).union().repeatForever().start();
        };
        _proto.setCountDown = function setCountDown(gameTimeLeft) {
          this.Node_countDown.color = gameTimeLeft > 10 ? color(131, 213, 4, 255) : color(255, 69, 62, 255);
          this.Label_countDown.color = gameTimeLeft > 10 ? color(131, 213, 4, 255) : color(255, 69, 62, 255);
          gameTimeLeft = gameTimeLeft > 10 ? gameTimeLeft - 10 : gameTimeLeft;
          this.Label_countDown.string = gameTimeLeft > 0 ? "" + gameTimeLeft : "0";

          // gts.Debug.Log(`tableID===${this.node.name}==Label_countDown==${gameTimeLeft}==`);
        };

        _createClass(DxRoomItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return DxRoomItem;
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
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_times", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_countDown", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_countDown", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Layout_longInfo", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Label_longInfo_count", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_longInfo_type", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "arrTypeFrame", [_dec21], {
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

System.register("chunks:///_virtual/DxRoomList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './NetManager.ts', './DxGameDef.ts', './DxModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, EventManager, NetManager, eProto, DxModel;
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
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      DxModel = module.DxModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "7eda1uo3vZOHpchi8+hpKJ5", "DxRoomList", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DxRoomList = exports('default', (_dec = ccclass("DxRoomList"), _dec2 = menu("game/Dxgame/DxRoomList"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DxRoomList, _Component);
        function DxRoomList() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _this.isFirst = true;
          return _this;
        }
        var _proto = DxRoomList.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          // Common.showWait();
          NetManager.instance.sendOnlineData(eProto.getTabelList, {});
          EventManager.instance.on(eProto.getTabelList, this.recvData, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eProto.getTabelList, this.recvData, this);
          this.unschedule(this.getTableInfo);
        };
        _proto.recvData = function recvData(data) {
          var _this2 = this;
          gts.Debug.Log("==recvData==", JSON.stringify(data));
          if (data.Code != 0 || !data.Data) {
            return;
          }
          switch (data.cmd) {
            case eProto.getTabelList:
              {
                // Common.closeWait();
                if (data.Code == 0) {
                  this.scrollView_content.setData(data.Data);
                  this.setRefreshTimer(data.Data);
                  if (this.isFirst) {
                    this.isFirst = false;
                    if (DxModel.instance.tableID > 2) {
                      this.scheduleOnce(function () {
                        _this2.scrollView_content.scrollView.scrollToBottom();
                      }, 0.25);
                    }
                  }
                }
                break;
              }
          }
        };
        _proto.setRefreshTimer = function setRefreshTimer(data) {
          //计算刷新时间
          this.unschedule(this.getTableInfo);
          var delay = 1000;
          for (var i = 0; i < 3; i++) {
            var info = data[2 * i];
            var d = info.gameTimeLeft - 7;
            d = d > 0 ? d : d + info.gameTime;
            if (d < delay) {
              delay = d;
            }
          }
          this.scheduleOnce(this.getTableInfo, delay);
        };
        _proto.getTableInfo = function getTableInfo() {
          NetManager.instance.sendOnlineData(eProto.getTabelList, {});
          gts.Debug.Log("==getTableInfo=");
        };
        return DxRoomList;
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
  r('virtual:///prerequisite-imports/Dxgame', 'chunks:///_virtual/Dxgame'); 
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