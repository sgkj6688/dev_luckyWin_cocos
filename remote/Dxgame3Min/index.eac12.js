System.register("chunks:///_virtual/Dx3MinButtonLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './MainManager.ts', './NetManager.ts', './BlackWordProxy.ts', './ChatProxy.ts', './Dx3MinGameCtrl.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, assetManager, find, EditBox, instantiate, ScrollView, UITransform, ToggleContainer, Layout, RichText, Label, SpriteFrame, Sprite, isValid, Tween, tween, v3, Component, director, Button, UIOpacity, Widget, i18n, ProxyMgr, ConfigManager, UserKey, DataManager, EventManager, MainManager, NetManager, BlackWordProxy, ChatProxy, ChatProxyEvent, Dx3MinGameCtrl, Common;
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
      ToggleContainer = module.ToggleContainer;
      Layout = module.Layout;
      RichText = module.RichText;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      isValid = module.isValid;
      Tween = module.Tween;
      tween = module.tween;
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
      NetManager = module.default;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      ChatProxy = module.default;
      ChatProxyEvent = module.ChatProxyEvent;
    }, function (module) {
      Dx3MinGameCtrl = module.Dx3MinGameCtrl;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "c83f9EEDypHhJKh1bpSW05s", "Dx3MinButtonLogic", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Dx3MinButtonLogic = exports('default', (_dec = ccclass("Dx3MinButtonLogic"), _dec2 = menu("game/Dx3Mingame/Dx3MinButtonLogic"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Dx3MinButtonLogic, _Component);
        function Dx3MinButtonLogic() {
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
        var _proto = Dx3MinButtonLogic.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._netManager = this._mainManager.getNetManager();
          this._viewManager = this._mainManager.getViewManager();
          this._conFigManager = this._mainManager.getConfigManager();
          this._dataManager = this._mainManager.getDataManager();
          this._audioManager = this._mainManager.getAudioManager();
          this._bundle = assetManager.getBundle("Dxgame3Min");
        };
        _proto.onEnable = function onEnable() {
          this.initEvent();
          this.scheduleOnce(this.showChatPanel, 0.25);
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          //        //大小二级界面按钮事件
          this._eventManager.on(this._conFigManager.protocolDx3Min.closeDx3MinGame, this.closeGame, this);
          this._eventManager.on(this._conFigManager.protocolDx3Min.dxJackpotHistory, this.showPool, this);
          this._eventManager.on(this._conFigManager.protocolDx3Min.dxChat, this.showChatPanel, this);
          this._eventManager.on(this._conFigManager.protocolDx3Min.dxCloseChat, this.closeChatAndRecord, this);
          this._eventManager.on(this._conFigManager.protocolDx3Min.dxSendChat, this.sendCaht, this);
          this._eventManager.on(this._conFigManager.protocolDx3Min.DxPool, this.showPool, this);
          this._eventManager.on(this._conFigManager.protocolDx3Min.dxchatRecordSwitch, this.chatRecordSwitch, this);
          this._eventManager.on(ConfigManager.instance.eventTransform.onEmojiClick + "dx3Min", function (GradeCode, emoji, isImg, imgData) {
            if (isImg === void 0) {
              isImg = false;
            }
            if (imgData === void 0) {
              imgData = null;
            }
            if (isImg) {
              if (imgData) {
                var updateChat = function updateChat(strImg) {
                  var chatLayer = find("chat_bg", _this2.node);
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
                  groupId: "dx3Min",
                  content: emoji,
                  //url
                  msgId: msgid,
                  msgType: 10
                });
              }
              return;
            }
            var boxchat = find("chat_bg/chat_box", _this2.node).getComponent(EditBox);
            boxchat.string = "" + boxchat.string + emoji;
          }, this);

          //        //网络协议事件
          //        // this._eventManager.on(this._conFigManager.protocolDx3Min.history, this.recvData, this);
          //        // this._eventManager.on(this._conFigManager.protocolDx3Min.getDetails, this.recvData, this);
          this._eventManager.on(this._conFigManager.protocolDx3Min.getPoolData, this.recvData, this);
          this._eventManager.on(this._conFigManager.protocolDx3Min.curRoundBet, this.recvData, this);
          ChatProxy.joinChat("dx3Min");
          ChatProxy.getRecord("dx3Min");
          ChatProxy.on(ChatProxyEvent.UPDATE_RECORD, function (data) {
            if (-1 == data.msg.GroupId.search("dx3Min")) {
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
            if (-1 == data.msg.GroupId.search("dx3Min")) {
              return;
            }
            _this2.updateChat(data.msg);
          }, this);

          //        // //控件事件
          //        // let chatLayer = cc.find("chat_bg");
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
            Dx3MinGameCtrl.instance.requestGetPoolData(start, 2);
            return;
          }
          if (data == "next") {
            //            //下一页
            this._curPoolPage = this._curPoolPage + 1;
            var _start = (this._curPoolPage - 1) * 2;
            Dx3MinGameCtrl.instance.requestGetPoolData(_start, 2);
            return;
          }
          var self = this;
          Common.loadPopBuddle("prefab/dxBigRecord", this._bundle, function () {}, function (dxBigRecord) {
            var bigRecord = instantiate(dxBigRecord);
            self._viewManager.popNodeView(bigRecord, true);
            self._curPoolPage = 1;
            Dx3MinGameCtrl.instance.requestGetPoolData(0, 2);
          }, true);
        };
        _proto.onNodeEventSizeChange = function onNodeEventSizeChange() {
          var chatLayer = find("chat_bg", this.node);
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          if (scollview_content.content.getComponent(UITransform).height > scollview_content.node.getComponent(UITransform).height) {
            scollview_content.scrollToBottom(0.2);
          }
        };
        _proto.sendCaht = function sendCaht() {
          var boxchat = find("chat_bg/chat_box", this.node).getComponent(EditBox);
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
            msgId: msgid,
            groupId: "dx3Min",
            content: chatContent,
            msgType: 1
          });
        };
        _proto.showChatPanel = function showChatPanel() {
          var chat_bg = find("chat_bg", this.node);
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
          this._isChat = false;
          ChatProxy.exitChat("dx3Min");
        };
        _proto.chatPanel = function chatPanel() {
          this._isChat = !this._isChat;
          if (this._isChat) {
            ChatProxy.joinChat("dx3Min");
            Dx3MinGameCtrl.instance.requestGetChatRecord();
          } else {
            ChatProxy.exitChat("dx3Min");
          }
        };
        _proto.closeScrollRecord = function closeScrollRecord() {
          this._isScrollRecord = false;
          ChatProxy.exitChat("dx3MinCurBet");
        };
        _proto.scrollRecordPanel = function scrollRecordPanel() {
          this._isScrollRecord = !this._isScrollRecord;
          if (this._isScrollRecord) {
            ChatProxy.joinChat("dx3MinCurBet");
            Dx3MinGameCtrl.instance.requestCurRoundBet();
          } else {
            ChatProxy.exitChat("dx3MinCurBet");
          }
          var scollview_content = find("chat_bg/content_record/content_scrollView", this.node).getComponent(ScrollView);
          this.clearChildren(scollview_content.content);
        };
        _proto.closeChatAndRecord = function closeChatAndRecord() {
          find("chat_bg", this.node).active = false;
          this.closeChat();
          this.closeScrollRecord();
        };
        _proto.updateChat = function updateChat(data) {
          var _this3 = this;
          var objContent = Common.getChatContent(data.Content, data.MsgType == 10);
          if (data.MsgType == 3) {
            //            //置顶消息
            this.Node_topMsg.active = true;
            EventManager.instance.emit(ConfigManager.instance.eventTransform.onChatTopMsg + "dx3Min", objContent);
            this.Node_topMsg.parent.getComponent(Layout).updateLayout(true);
            return;
          }
          if (data.isCancelTop && this.Node_topMsg.active) {
            this.Node_topMsg.active = false;
            return;
          }
          var chatLayer = find("chat_bg", this.node);
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
          item.getComponent(UITransform).width = 340;
          Node_imgRoot.getComponent(UITransform).width = 340;
          rext.maxWidth = 340;
          data.Content = objContent.text ? BlackWordProxy.filter(objContent.text.toString()) : "";
          if (typeof data.Err != "undefined" && data.Err == true) {
            rext.string = "<color=#ff0000>" + data.Content + "</color>";
          } else {
            var _myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
            var strColor = data.FromUserId == _myUid ? "#8fff44" : "#ff6500";
            var imgTag = "<img src=\"icon_V" + data.GradeCode + "\"/>";
            //            // let imgTag = ``;
            if (data.MsgType > 1) {
              strColor = "#00ff00";
              imgTag = "<img src=\"icon_guanliyuan\"/>";
            }
            rext.string = imgTag + " <color=" + strColor + ">" + data.FromUser + ":</c><color=#ffffff>" + data.Content + "</color>";
          }
          scollview_content.content.addChild(item);
          scollview_content.scrollToBottom();
        };
        _proto.creatChat = function creatChat() {
          var chatLayer = find("chat_bg", this.node);
          var scollview_content = chatLayer.getChildByName("content_chat").getChildByName("content_scrollView").getComponent(ScrollView);
          this.clearChildren(scollview_content.content);
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
            if (this._curPoolPage > 1) {
              this._curPoolPage -= 1;
              find("Canvas/dxBigRecord/bg/next_btn").active = false;
            }
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
            _this4.clearChildren(node_prize);
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
              _this4.clearChildren(node_prize);
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
          this._viewManager.closePopGame("Dxgame3Min");
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDx3Min.leave, {});
        };
        _proto.recvData = function recvData(data) {
          Common.showLog("比大小游戏按钮网络");
          //        // gts.Debug.Log("=btn=onRecvData==" + JSON.stringify(data));

          switch (data.cmd) {
            case this._conFigManager.protocolDx3Min.getPoolData:
              {
                //                //大奖记录
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                if (data.GameType == "dx3Min" && data.Data) {
                  this.showJackpotHistory(data.Data);
                }
                break;
              }
            case this._conFigManager.protocolDx3Min.curRoundBet:
              {
                //                //当前下注记录
                if (data.Code != 0) {
                  Common.showTip(i18n.errTip(data.Code));
                  return;
                }
                if (data.GameType == "dx3Min" && data.Data) {
                  this.showCurrRecord(data.Data);
                }
                break;
              }
          }
        };
        _proto.chatRecordSwitch = function chatRecordSwitch(data) {
          var _this5 = this;
          if (!data) return;
          if (this._isChat && data == "toggle_chat") return;
          if (this._isScrollRecord && data == "toggle_record") return;
          find("chat_bg/content_chat", this.node).active = data === "toggle_chat" ? true : false;
          find("chat_bg/chat_box", this.node).active = data === "toggle_chat" ? true : false;
          find("chat_bg/send_chat", this.node).active = data === "toggle_chat" ? true : false;
          find("chat_bg/content_record", this.node).active = data === "toggle_record" ? true : false;
          this.Node_emoji.active = data === "toggle_record" ? false : true;
          var str = data == "toggle_chat" ? 1 : 2;
          this._bundle.load("textures/game/chatdi" + str + "/spriteFrame", SpriteFrame, function (err, sp) {
            find("chat_bg", _this5.node).getComponent(Sprite).spriteFrame = sp;
          });
          this.chatPanel();
          this.scrollRecordPanel();
        };
        _proto.createCurrRecordItem = function createCurrRecordItem(index, info) {
          var content_scrollView = find("chat_bg/content_record/content_scrollView", this.node);
          if (!isValid(content_scrollView)) return;
          var scollview_content = content_scrollView.getComponent(ScrollView);
          var prefab = find("chat_bg/item", this.node);
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

          // item.getPosition().y = -25 * item.getComponent(cc.UITransform).height;
          item.setPosition(item.position.x, -25 * item.getComponent(UITransform).height);
          var offset_y = -index * item.getComponent(UITransform).height;
          Tween.stopAllByTarget(item);
          // item.runAction(cc.moveTo(0.5, cc.v2(item.getPosition().x, offset_y)));

          tween(item).to(0.5, {
            position: v3(item.getPosition().x, offset_y)
          }).start();
        };
        _proto.updateListView = function updateListView(infoList) {
          var _this6 = this;
          if (infoList.length == 0) {
            return;
          }
          var scollview_content = find("chat_bg/content_record/content_scrollView", this.node).getComponent(ScrollView);
          var prefab = find("chat_bg/item", this.node);
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
              _this6.createCurrRecordItem(index, info);
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
              // item.runAction(cc.moveTo(0.5, cc.v2(item.getPosition().x, offset_y)));
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
        _proto.clearChildren = function clearChildren(parent) {
          for (var _iterator = _createForOfIteratorHelperLoose(parent.children.slice()), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.removeFromParent();
            child.destroy();
          }
        };
        _proto.onDisable = function onDisable() {
          //        //大小二级界面按钮事件
          this._eventManager.off(this._conFigManager.protocolDx3Min.closeDx3MinGame, this.closeGame, this);
          this._eventManager.off(this._conFigManager.protocolDx3Min.dxJackpotHistory, this.showPool, this);
          this._eventManager.off(this._conFigManager.protocolDx3Min.dxChat, this.showChatPanel, this);
          this._eventManager.off(this._conFigManager.protocolDx3Min.dxCloseChat, this.closeChatAndRecord, this);
          this._eventManager.off(this._conFigManager.protocolDx3Min.dxSendChat, this.sendCaht, this);
          this._eventManager.off(this._conFigManager.protocolDx3Min.DxPool, this.showPool, this);
          this._eventManager.off(this._conFigManager.protocolDx3Min.dxchatRecordSwitch, this.chatRecordSwitch, this);
          this._eventManager.off(ConfigManager.instance.eventTransform.onEmojiClick + "dx3Min");

          //        //网络协议事件
          this._eventManager.off(this._conFigManager.protocolDx3Min.history, this.recvData, this);
          this._eventManager.off(this._conFigManager.protocolDx3Min.getPoolData, this.recvData, this);
          this._eventManager.off(this._conFigManager.protocolDx3Min.curRoundBet, this.recvData, this);
          ChatProxy.exitChat("dx3Min");
          ProxyMgr.close(this);
        };
        return Dx3MinButtonLogic;
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

System.register("chunks:///_virtual/Dx3MinChipItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ChipProxy.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, Component, ChipType, ChipProxy, ChipEvent, Common;
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
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ChipType = module.ChipType;
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "2bf1apAXzBGkIjwLddn8pEh", "Dx3MinChipItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Dx3MinChipItem = exports('default', (_dec = ccclass("Dx3MinChipItem"), _dec2 = menu("game/Dx3Mingame/Dx3MinChipItem"), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Dx3MinChipItem, _Component);
        function Dx3MinChipItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_chip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_diy", _descriptor2, _assertThisInitialized(_this));
          _this.type = ChipType.NORMAL;
          _this.isUp = false;
          _this._data = void 0;
          _this._from = null;
          return _this;
        }
        var _proto = Dx3MinChipItem.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.setType = function setType(type) {
          if (type === void 0) {
            type = ChipType.NORMAL;
          }
          this.type = type;
          switch (type) {
            case ChipType.NORMAL:
              break;
            case ChipType.CHIP:
              this.node_diy.active = false;
              break;
            case ChipType.CHIP_DIY:
              this.node_diy.active = true;
              break;
            case ChipType.EDIT:
              this.txt_chip.node.active = true;
              break;
            case ChipType.DIY:
              this.txt_chip.node.active = true;
              this.node_diy.active = true;
              break;
          }
        }
        //    /**
        //     *
        //     * @param data
        //     * @param type
        //     * @param from 创建筹码来源
        //     */
        ;

        _proto.setData = function setData(data, type, from) {
          if (type === void 0) {
            type = null;
          }
          if (from === void 0) {
            from = null;
          }
          this._data = data;
          this.txt_chip.string = Common.ChangeMoneyShow(data.count, 4);
          if (type) {
            this.setType(type);
          }
          this._from = from;
        };
        _proto.setChip = function setChip(name) {
          if (!this._data) {
            this._data = {};
          }
          this._data.name = name;
        };
        _proto.setCount = function setCount(num) {
          this.txt_chip.string = Common.ChangeMoneyShow(num, 4);
          if (!this._data) {
            this._data = {};
          }
          this._data.count = num;
        };
        _proto.onClickCancel = function onClickCancel() {
          ChipProxy.emit(ChipEvent.DELECT_DIY, this._data);
        };
        _proto.onClickChip = function onClickChip() {
          if (this.type == ChipType.CHIP || this.type == ChipType.CHIP_DIY) {
            this.moveUp();
          }
        };
        _proto.moveUp = function moveUp(b) {
          ChipProxy.emit(ChipEvent.SELECT_CHIP, this._data, this._from);
        };
        _createClass(Dx3MinChipItem, [{
          key: "data",
          get: function get() {
            return this._data;
          }
        }]);
        return Dx3MinChipItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_chip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_diy", [_dec4], {
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

System.register("chunks:///_virtual/Dx3MinGameCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Dx3MinGameDef.ts', './Dx3MinModel.ts', './Common.ts'], function (exports) {
  var _createClass, cclegacy, i18n, ConfigManager, EventManager, NetManager, ViewManager, eProto, eEvent, Dx3MinModel, Common;
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
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      Dx3MinModel = module.Dx3MinModel;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b5ef0lPfaZHLZ+I8d0C9n22", "Dx3MinGameCtrl", undefined);
      var Dx3MinGameCtrl = exports('Dx3MinGameCtrl', /*#__PURE__*/function () {
        function Dx3MinGameCtrl() {
          this._configManager = null;
          this._eventManager = null;
          this._model = null;
          this._pageBackup = 0;
          this._configManager = ConfigManager.instance;
          this._eventManager = EventManager.instance;
          this._model = Dx3MinModel.instance;
        }
        var _proto = Dx3MinGameCtrl.prototype;
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
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          //        // gts.Debug.Log("==onRecvData==" + JSON.stringify(data));
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
                    ViewManager.instance.closePopGame("Dxgame3Min");
                  }, null);
                  return;
                }

                //                // this._eventManager.off(Dx3MinGameDef.eProto.getConfig, this.onRecvData, this);
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
        }
        //    /**获取聊天记录 */
        ;

        _proto.requestGetChatRecord = function requestGetChatRecord() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "dx3Min",
            size: 20
          });
        }
        //    /**获取当局下注 */
        ;

        _proto.requestCurRoundBet = function requestCurRoundBet() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDx3Min.curRoundBet, {});
        }
        //    /** getConfig*/
        ;

        _proto.requestGetConfig = function requestGetConfig() {
          NetManager.instance.sendOnlineData(eProto.getConfig, {});
        };
        _proto.requestGetVnd = function requestGetVnd() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getVnd, {});
        }
        //    /**请求下注 */
        ;

        _proto.requestBet = function requestBet(serviceID, big, small) {
          NetManager.instance.sendOnlineData(serviceID + "/HD_play", {
            action: "Bet",
            big: big,
            small: small
          });
        }
        //    /** getPoolData*/
        ;

        _proto.requestGetPoolData = function requestGetPoolData(offset, limit) {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDx3Min.getPoolData, {
            offset: offset,
            limit: limit
          });
        }
        //    /**请求路单记录 */
        ;

        _proto.requestHistory = function requestHistory(size) {
          if (size === void 0) {
            size = 17;
          }
          NetManager.instance.sendOnlineData(eProto.history, {
            size: size
          });
        };
        //    /**请求下注详情 */
        _proto.requestDetails = function requestDetails(gameId, pos, page, limit) {
          if (limit === void 0) {
            limit = 7;
          }
          this._pageBackup = page ? page - 1 : 0;
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDx3Min.getDetails, {
            gameId: gameId,
            pos: pos,
            //> 0 ? "big" : "small",
            page: page ? page - 1 : 0,
            limit: limit
          });
        };
        _createClass(Dx3MinGameCtrl, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new Dx3MinGameCtrl();
            }
            return this._instance;
          }
        }]);
        return Dx3MinGameCtrl;
      }());
      Dx3MinGameCtrl._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Dx3MinGameDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3f0dd0XBChN9pICUU07opCn", "Dx3MinGameDef", undefined);
      //gameDef moudle
      /** 大小 */
      var cBundle = exports('cBundle', "Dxgame3Min");
      var eRoomStatus = exports('eRoomStatus', {
        none: 0,
        startGame: 2,
        yxxBet: 3,
        result: 6
      });

      //网络消息 C2S_:表示send S2C_:recv  没有标识:send&&recv
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["getConfig"] = "dx3Min/HD_info";
        eProto["dxXiazhu"] = "dx3Min/doingBet";
        eProto["dxResult"] = "dx3Min/result";
        eProto["dxShowResult"] = "dx3Min/checkout";
        eProto["dxNextWait"] = "dx3Min/waiteNext";
        eProto["dxBet"] = "dx3Min/Bet";
        eProto["history"] = "dx3Min/HD_history";
        eProto["backBet"] = "dx3Min/refund";
        eProto["jackpotAmount"] = "dx3Min/jackpotAmount";
        return eProto;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["updateView"] = "dx3Min_updateView";
        eEvent["resetData"] = "dx3Min_resetData";
        return eEvent;
      }({})); //

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

System.register("chunks:///_virtual/Dx3MinGameDetailsLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, assetManager, find, Label, sp, SpriteFrame, isValid, Sprite, Component, i18n, ConfigManager, EventManager, NetManager, Common;
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
      isValid = module.isValid;
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
      cclegacy._RF.push({}, "2021ai3/PpABbtjRBGdn6K9", "Dx3MinGameDetailsLayer", undefined);
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
      var Dx3MinGameDetailsLayer = exports('default', (_dec = ccclass("Dx3MinGameDetailsLayer"), _dec2 = menu("game/dx3Min/Dx3MinGameDetailsLayer"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Dx3MinGameDetailsLayer, _Component);
        function Dx3MinGameDetailsLayer() {
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
          _this.imageVersion = 0;
          return _this;
        }
        var _proto = Dx3MinGameDetailsLayer.prototype;
        _proto.onLoad = function onLoad() {
          this._bundle = assetManager.getBundle("Dxgame3Min");
          var bigLayer = find("bg/bigLayer", this.node);
          for (var i = 0; i < Limit; i++) {
            bigLayer.getChildByName("item" + (i + 1)).active = false;
          }
          var smallLayer = find("bg/smallLayer", this.node);
          for (var i = 0; i < Limit; i++) {
            smallLayer.getChildByName("item" + (i + 1)).active = false;
          }
        };
        _proto.onEnable = function onEnable() {
          this.requestDetails(this._curRoomid);
          EventManager.instance.on(ConfigManager.instance.protocolDx3Min.getDetails, this.recvData, this);
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
          var version = ++this.imageVersion;
          var bigLayer = find("bg/bigLayer", this.node);
          var smallLayer = find("bg/smallLayer", this.node);
          var publicLayer = find("bg/publicLayer", this.node);
          var redata = this._detailsData.Data;
          if (redata.Dx.Dice1 == 0 && redata.BetBigList.length == 0 && redata.BetSmallList.length == 0) {
            Common.showTip(i18n.t("10010"));
            return;
          }
          if (redata.Dx.Dice1 != 0) {
            this.node.active = true;
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
              smallLayer.getChildByName("small_ani").getComponent(sp.Skeleton).setAnimation(0, "xiu_1_vn", true);
              bigLayer.getChildByName("big_ani").active = false;
            } else {
              bigLayer.getChildByName("big_ani").active = true;
              bigLayer.getChildByName("big_ani").getComponent(sp.Skeleton).setAnimation(0, "TAI_1_vn", true);
              smallLayer.getChildByName("small_ani").active = false;
            }
            var _loop = function _loop() {
              var count = i;
              var dire = redata.Dx["Dice" + i];
              _this2._bundle.load("textures/game/s" + dire + "/spriteFrame", SpriteFrame, function (err, DiceNum) {
                // 翻页及关闭弹窗后，旧图片不能覆盖当前详情或访问已销毁节点。
                if (err || !DiceNum || !isValid(_this2, true) || !isValid(publicLayer, true) || version !== _this2.imageVersion) return;
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
          var bigLayer = find("bg/bigLayer", this.node);
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
          var smallLayer = find("bg/smallLayer", this.node);
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
          if (data.cmd == ConfigManager.instance.protocolDx3Min.getDetails) {
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
          this.imageVersion++;
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolDx3Min.getDetails, {
            gameId: roomID,
            pos: pos,
            //> 0 ? "big" : "small",
            page: page ? page - 1 : 0,
            limit: limit
          });
        };
        _proto.onDisable = function onDisable() {
          this.imageVersion++;
          EventManager.instance.off(ConfigManager.instance.protocolDx3Min.getDetails, this.recvData, this);
        };
        return Dx3MinGameDetailsLayer;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Dx3MinGameHistoryLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './Common.ts', './Dx3MinGameCtrl.ts', './ContentEx.ts', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, SpriteFrame, ScrollView, Node, find, UIOpacity, Label, instantiate, UITransform, Sprite, v2, Component, ConfigManager, EventManager, Common, Dx3MinGameCtrl, ContentEx, GUtil;
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
      Common = module.Common;
    }, function (module) {
      Dx3MinGameCtrl = module.Dx3MinGameCtrl;
    }, function (module) {
      ContentEx = module.default;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "92071y7Gp5Py6GW6w8nb/Lw", "Dx3MinGameHistoryLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_ROW = 5;
      var Dx3MinHistoryLayer = exports('default', (_dec = ccclass("Dx3MinGameHistoryLayer"), _dec2 = menu("game/dx3Min/Dx3MinHistoryLayer"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(ScrollView), _dec15 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Dx3MinHistoryLayer, _Component);
        function Dx3MinHistoryLayer() {
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
        var _proto = Dx3MinHistoryLayer.prototype;
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
          Dx3MinGameCtrl.instance.requestHistory(100);
          EventManager.instance.on(ConfigManager.instance.protocolDx3Min.history, this.recvData, this);
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
          // 历史条目不复用，刷新必须销毁旧节点，不能只摘除父节点。
          this.clearChildren(pathlist1);
          var p_layer1 = find("bg/content_bg/layer1/path_bg2/sa1Layer", this.node);
          var p_layer2 = find("bg/content_bg/layer1/path_bg2/sa2Layer", this.node);
          var p_layer3 = find("bg/content_bg/layer1/path_bg2/sa3Layer", this.node);
          this.clearChildren(p_layer1);
          this.clearChildren(p_layer2);
          this.clearChildren(p_layer3);
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
          this.clearChildren(startdian);
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
          this.clearChildren(pathlist);
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

          // let start = list.length - MAX_COL;
          // if (start < 0) {
          //     start = 0;
          // }
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
              var pos = this.getPositionByRowCol(j, _i2, node);
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
          if (data.cmd == ConfigManager.instance.protocolDx3Min.history) {
            if (data.Data.history && data.Data.history.length == 17) {
              Dx3MinGameCtrl.instance.requestHistory(100);
              return;
            }
            this._curData = data;
            this.drawPathList();
          }
        };
        _proto.clearChildren = function clearChildren(parent) {
          for (var _iterator = _createForOfIteratorHelperLoose(parent.children.slice()), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.removeFromParent();
            child.destroy();
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.protocolDx3Min.history, this.recvData, this);
        };
        return Dx3MinHistoryLayer;
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

System.register("chunks:///_virtual/Dx3MinGameLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts', './GameDef.ts', './ProxyMgr.ts', './GUtil.ts', './ViewManager.ts', './ChipProxy.ts', './Dx3MinChipItem.ts', './Dx3MinGameCtrl.ts', './Dx3MinGameDef.ts', './Dx3MinModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, AudioClip, SpriteFrame, ScrollView, Prefab, assetManager, find, tween, v3, Label, instantiate, Sprite, sp, isValid, Tween, color, Color, Component, i18n, AudioManager, ConfigManager, DataManager, UserKey, UserProxyEvent, EventManager, NetManager, Common, GameDef, ProxyMgr, GUtil, ViewManager, ChipProxy, ChipType, DIYFromType, ChipEvent, Dx3MinChipItem, Dx3MinGameCtrl, eEvent, cBundle, eProto, Dx3MinModel;
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
      AudioClip = module.AudioClip;
      SpriteFrame = module.SpriteFrame;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      assetManager = module.assetManager;
      find = module.find;
      tween = module.tween;
      v3 = module.v3;
      Label = module.Label;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      sp = module.sp;
      isValid = module.isValid;
      Tween = module.Tween;
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
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      ChipProxy = module.default;
      ChipType = module.ChipType;
      DIYFromType = module.DIYFromType;
      ChipEvent = module.ChipEvent;
    }, function (module) {
      Dx3MinChipItem = module.default;
    }, function (module) {
      Dx3MinGameCtrl = module.Dx3MinGameCtrl;
    }, function (module) {
      eEvent = module.eEvent;
      cBundle = module.cBundle;
      eProto = module.eProto;
    }, function (module) {
      Dx3MinModel = module.Dx3MinModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "afdbdM1aaJOOIn+aZCnqI9X", "Dx3MinGameLogic", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CCountDown = 5;
      var Dx3MinGameLogic = exports('default', (_dec = ccclass("Dx3MinGameLogic"), _dec2 = menu("game/Dx3Mingame/Dx3MinGameLogic"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(AudioClip), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(ScrollView), _dec12 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Dx3MinGameLogic, _Component);
        function Dx3MinGameLogic() {
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
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor10, _assertThisInitialized(_this));
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
          //    //==this._model.hdInfo.myBet.amount
          _this._winNum = 0;
          //    //獎池相關
          _this._stepNum = 0;
          _this._poolNum = 0;
          _this._updateTimeFlag = true;
          _this._updateTime = 0;
          _this._bundle = void 0;
          _this.showCountDownTip = false;
          return _this;
        }
        var _proto = Dx3MinGameLogic.prototype;
        _proto.onLoad = function onLoad() {
          Dx3MinGameCtrl.instance.regist();
          this._configManager = ConfigManager.instance;
          this._eventManager = EventManager.instance;
          this._netManager = NetManager.instance;
          this._dataManager = DataManager.instance;
          this._viewManager = ViewManager.instance;
          this._audioManager = AudioManager.instance;
          this._model = Dx3MinModel.instance;
          this._eventManager.on(eEvent.updateView, this.updateView, this);
          Common.showLog("onLoda");
          Common.showLog(this.node);
          this._bundle = assetManager.getBundle(cBundle);
          this.initGame();
          Dx3MinGameCtrl.instance.requestGetConfig();
          Dx3MinGameCtrl.instance.requestHistory();
          var path = find("game_bg/path_bg", this.node);
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
        _proto.onDestroy = function onDestroy() {
          this.closePop();
          ProxyMgr.close(this);
        };
        _proto.start = function start() {
          ChipProxy.initChipList([1000, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000]);
          this.createChipsList();
        }
        //    //关闭
        ;

        _proto.closePop = function closePop() {
          //        // this._audioManager.playbuttonEffect();
          //        // this._audioManager.stopAll();
          this._viewManager.closePopGame(GameDef.Game.Dxgame3Min);
        }
        //    // 得到大小数据之前 先隐藏label，获取label
        ;

        _proto.initGame = function initGame() {
          Common.showLog("initGame DX");
          this._totalPool = this.topLayer.getChildByName("pool_bg").getChildByName("label_pool").getComponent(Label);
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
          gts.Debug.Log("==this._nextCountDown.string==" + this._nextCountDown.string);
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
          gts.Debug.Log("==this._nextCountDown.string==" + this._nextCountDown.string);
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
        };
        _proto.createChipsList = function createChipsList() {
          this.clearChildren(this.scrollViewCM.content);
          var minChip = 1000;
          for (var _iterator = _createForOfIteratorHelperLoose(ChipProxy.dxDiyList), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            if (i.count < minChip) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            _chip.getComponent(Dx3MinChipItem).setData(i, ChipType.CHIP_DIY, cBundle);
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step2; !(_step2 = _iterator2()).done;) {
            var _i = _step2.value;
            var has = false;
            for (var _iterator3 = _createForOfIteratorHelperLoose(ChipProxy.dxDiyList), _step3; !(_step3 = _iterator3()).done;) {
              var j = _step3.value;
              if (j.count == _i.count) {
                has = true;
                break;
              }
            }
            if (has) {
              continue;
            }
            var _chip2 = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip2);
            _chip2.getComponent(Dx3MinChipItem).setData(_i, ChipType.CHIP, cBundle);
          }
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != cBundle) {
            return;
          }
          this.onClickXiaZhu(data.count);
        };
        _proto.onClickRight = function onClickRight() {
          this.scrollViewCM.scrollToRight();
        };
        _proto.onClickLeft = function onClickLeft() {
          this.scrollViewCM.scrollToLeft();
        }
        //    //押注
        ;

        _proto.onClickXiaZhu = function onClickXiaZhu(data) {
          var num = data;
          if (parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD)) == 0) {
            this.showStep(i18n.lang[10001]);
            return;
          }
          if (this.daLayer.getChildByName("showPre").active == true) {
            if (parseInt(this._preBetSmallNum.string.replace(/,/g, "")) + num > parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD))) {
              this.showStep(i18n.t("10001"));
              this.onClickAllIn();
            } else {
              this._preBetSmallNum.string = Common.numFormat(parseInt(this._preBetSmallNum.string.replace(/,/g, "")) + num);
            }
          } else {
            if (parseInt(this._preBetBigNum.string.replace(/,/g, "")) + num > parseInt(this._dataManager.getUserDataForKey(UserKey.GOLD))) {
              this.showStep(i18n.t("10001"));
              this.onClickAllIn();
            } else {
              this._preBetBigNum.string = Common.numFormat(parseInt(this._preBetBigNum.string.replace(/,/g, "")) + num);
            }
          }
        };
        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip(DIYFromType.DX3MIN);
        }
        //    //all in
        ;

        _proto.onClickAllIn = function onClickAllIn() {
          Dx3MinGameCtrl.instance.requestGetVnd();
        }
        //    //确认下注
        ;

        _proto.onClickXzSure = function onClickXzSure() {
          //        //3秒锁定
          if (this._CountDownTime <= CCountDown) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          Common.showLog("确认下注");
          var big = parseInt(this._preBetBigNum.string.replace(/,/g, ""));
          var small = parseInt(this._preBetSmallNum.string.replace(/,/g, ""));
          if (big == 0 && small == 0) {
            //            //  Common.showLog("vui lòng chọn số tiền cược");
            this.showStep(i18n.lang.chooseGold);
            return;
          }
          this._preBetBigNum.string = "0";
          this._preBetSmallNum.string = "0";
          Dx3MinGameCtrl.instance.requestBet(this._serviceID, big, small);
        }
        //    //取消下注
        ;

        _proto.onClickXzCancel = function onClickXzCancel() {
          this.daLayer.getChildByName("pre_bg").active = false;
          this.daLayer.getChildByName("showPre").active = true;
          this.xiaoLayer.getChildByName("pre_bg").active = false;
          this.xiaoLayer.getChildByName("showPre").active = true;
          this._preBetBigNum.string = "0";
          this._preBetSmallNum.string = "0";
          this.gameLayer.getChildByName("yzBtn_layer").active = false;
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
          GUtil.openRecord("dx3Min");
        };
        _proto.onDetails = function onDetails() {
          var _this2 = this;
          Common.loadPopBuddle("prefab/dxGameDetails", this._bundle, function () {}, function (dxGameDetails) {
            var dxGameDetailsLayer = instantiate(dxGameDetails);
            _this2._viewManager.popNodeView(dxGameDetailsLayer, true);
          }, true);
        };
        _proto.onRank = function onRank() {
          GUtil.openRank("dx3Min");
        }
        //    //显示游戏规则
        ;

        _proto.onRule = function onRule() {
          var _this3 = this;
          Common.showLog("显示游戏规则");
          Common.loadPopBuddle("prefab/Dxhelp", this._bundle, function () {}, function (Dxhelp) {
            var DxhelpLayer = instantiate(Dxhelp);
            _this3._viewManager.popNodeView(DxhelpLayer, true);
          }, true);
        };
        _proto.onHistory = function onHistory() {
          var _this4 = this;
          Common.loadPopBuddle("prefab/dxPathList", this._bundle, function () {}, function (dxPathList) {
            var dxPathListLayer = instantiate(dxPathList);
            _this4._viewManager.popNodeView(dxPathListLayer, true);
          }, true);
        };
        _proto.initEvent = function initEvent() {
          //        //监听按钮
          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.on(this._configManager.eventTransform.gameHide, this.gameHide, this); //切到后台
          this._eventManager.on("handrelust", this.removePanzi, this); //断线重连

          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
        };
        _proto.removePanzi = function removePanzi() {
          if (this._isshowRe == false && this._model.resultData != null) {
            this._isshowRe = true;
            this.showHandStatus(false);
            this.showResult(this._model.resultData, false);
          }
        };
        _proto.gameHide = function gameHide() {};
        _proto.gameShow = function gameShow() {
          var _this5 = this;
          Common.showLog("前台");
          var self = this;
          this.scheduleOnce(function () {
            if (_this5._netManager._connect == true) {
              //                // self.removeEvent();
              Common.closeWait();
              self.updateGameStatus();
              _this5._audioManager.stopAll();
              _this5._audioManager.NextBgMusic();
              Dx3MinGameCtrl.instance.requestGetConfig();
              Dx3MinGameCtrl.instance.requestHistory();
            }
          }, 0.1);
        }
        //    // "dx3Min": {
        //    //     "BetBig": 1550000,
        //    //     "BetBigCount": 2,
        //    //     "BetSmall": 1029164,
        //    //     "BetSmallCount": 2,
        //    //     "CreateTime": "2020-12-03T16:24:08.868+07:00",
        //    //     "Dice1": 0,
        //    //     "Dice2": 0,
        //    //     "Dice3": 0,
        //    //     "Jackpot": 0,
        //    //     "RefundBig": 0,
        //    //     "RefundSmall": 0,
        //    //     "Result": 0,
        //    //     "ResultJackpot": 0,
        //    //     "ShowId": 13276
        //    // },
        //    // "myBet":{
        //    //     "big":111,
        //    //     "small":0
        //    // }
        ;

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
          var shaizi1 = this.centerLayer.getChildByName("shaizi_1").getComponent(Sprite);
          var shaizi2 = this.centerLayer.getChildByName("shaizi_2").getComponent(Sprite);
          var shaizi3 = this.centerLayer.getChildByName("shaizi_3").getComponent(Sprite);
          shaizi1.node.active = false;
          shaizi2.node.active = false;
          shaizi3.node.active = false;
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
          this.initEvent();
        };
        _proto.showResultAni = function showResultAni() {
          var _this6 = this;
          //        // let shaizi1 = this.centerLayer.getChildByName("sdhaizi1").getComponent(sp.Skeleton);
          //        // let shaizi2 = this.centerLayer.getChildByName("sdhaizi2").getComponent(sp.Skeleton);
          //        // let shaizi3 = this.centerLayer.getChildByName("sdhaizi3").getComponent(sp.Skeleton);
          var shaizifeng = this.centerLayer.getChildByName("shuaizi1guang").getComponent(sp.Skeleton);
          //        // shaizi1.node.active = true;
          //        // shaizi2.node.active = true;
          //        // shaizi3.node.active = true;
          shaizifeng.node.active = true;
          //        // shaizi1.setAnimation(0, "shangsheng", false);
          //        // shaizi1.addAnimation(0, "xuanzhuan", true);
          //        //   shaizi1.addAnimation(0,"xuanzhuan",false);
          //        //  shaizi1.addAnimation(0,"xuanzhuan",false);
          //        // shaizi1.addAnimation(0,"xiajiang",false);

          //        // shaizi2.setAnimation(0, "shangsheng", false);
          //        // shaizi2.addAnimation(0, "xuanzhuan", true);

          //        // shaizi3.setAnimation(0, "shangsheng", false);
          //        // shaizi3.addAnimation(0, "xuanzhuan", true);

          shaizifeng.setAnimation(0, "1", false);
          this._audioManager.playSound(this.dxsound[2], false);
          var self = this;
          shaizifeng.setCompleteListener(function () {
            shaizifeng.setCompleteListener(null);
            self._flag = true;
            //            // shaizi1.node.active = false;
            //            // shaizi2.node.active = false;
            //            // shaizi3.node.active = false;
            shaizifeng.node.active = false;
            if (self._haveHand == false) {
              self.showResult(_this6._model.resultData, false);
            } else {
              _this6.showHandStatus(true);
              _this6.showsaizi(_this6._model.resultData);
            }
          });

          //        // this.scheduleOnce(() => {
          //        //     self._flag = true;
          //        //     // shaizi1.node.active = false;
          //        //     // shaizi2.node.active = false;
          //        //     // shaizi3.node.active = false;
          //        //     shaizifeng.node.active = false;
          //        //     if (self._haveHand == false) {
          //        //         self.showResult(this._model.resultData, false);
          //        //     } else {
          //        //         this.showHandStatus(true);
          //        //         this.showsaizi(this._model.resultData);
          //        //     }
          //        // }, 3);
        };

        _proto.showHandStatus = function showHandStatus(isHand) {
          var panzi = find("game_bg/centerLayer/hand_bg", this.node);
          panzi.active = isHand;
        };
        _proto.showPoolNum = function showPoolNum(data) {
          if (this._totalPool.string == "") {
            this._totalPool.string = Common.numFormat(data);
            return;
          }
          var curNum = parseInt(this._totalPool.string.replace(/,/g, ""));
          if (data && data <= curNum) {
            this._totalPool.string = Common.numFormat(data);
            return;
          }
          this._poolNum = data;
          this._stepNum = Math.floor((data - curNum) / 20);
          this.schedule(this.addNum, 0.1);
        };
        _proto.addNum = function addNum() {
          var cur = parseInt(this._totalPool.string.replace(/,/g, ""));
          cur = cur + this._stepNum;
          if (cur > this._poolNum) {
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
          var _this7 = this;
          if (!data) {
            return;
          }

          // this.node.getComponent("Dx3MinButtonLogic")._istablePath = true;
          Dx3MinGameCtrl.instance.requestHistory();
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
            image_ani.getComponent(sp.Skeleton).setAnimation(0, "xiu_1_vn", true);
            this.xiaoLayer.getChildByName("image").active = false;
          } else {
            var _image_ani = this.daLayer.getChildByName("image_ani");
            _image_ani.active = true;
            _image_ani.getComponent(sp.Skeleton).setAnimation(0, "TAI_1_vn", true);
            this.daLayer.getChildByName("image").active = false;
          }
          //        // if (typeof data.curJackpot != "undefined") {
          //        //     this.showPoolNum(data.curJackpot);
          //        // }
          if (!reEnter && data.dx.ResultJackpot == 1) {
            gts.Debug.Log("==中大奖==");
            Common.showLog("中大奖");
            //            // this._bundle.load("textures/spine/particle_baodajianglizi1", cc.Prefab, (err, gamePreFab: cc.Prefab) => {
            //            //     if (!self.topLayer.getChildByName("big_ani").getChildByName("lizi_0")) {
            //            //         let lizi = cc.instantiate(gamePreFab);
            //            //         lizi.name = "lizi_0";
            //            //         self.topLayer.getChildByName("big_ani").addChild(lizi);
            //            //     }
            //            // });
            //            // this._bundle.load("textures/spine/particle_baodajianglizi2", cc.Prefab, (err, gamePreFab: cc.Prefab) => {
            //            //     if (!self.topLayer.getChildByName("big_ani").getChildByName("lizi_1")) {
            //            //         let lizi = cc.instantiate(gamePreFab);
            //            //         lizi.name = "lizi_1";
            //            //         self.topLayer.getChildByName("big_ani").addChild(lizi);
            //            //     }
            //            // });
            //            // this._bundle.load("textures/spine/particle_shanguang", cc.Prefab, (err, gamePreFab: cc.Prefab) => {
            //            //     if (!self.topLayer.getChildByName("big_ani").getChildByName("lizi_2")) {
            //            //         let lizi = cc.instantiate(gamePreFab);
            //            //         lizi.name = "lizi_2";
            //            //         self.topLayer.getChildByName("big_ani").addChild(lizi);
            //            //     }
            //            // });

            this.scheduleOnce(function () {
              var bigAni = find("game_bg/nohu", _this7.node);
              bigAni.active = true;
              bigAni.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              bigAni.getComponent(sp.Skeleton).setCompleteListener(function () {
                bigAni.active = false;
              });
            }, 1);
            this.scheduleOnce(function () {
              var bigAni = find("game_bg/nohuCoin", _this7.node);
              bigAni.active = true;
              bigAni.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }, 2);
            this.scheduleOnce(function () {
              var bigAni = find("game_bg/nohuCoin", _this7.node);
              bigAni.active = false;
            }, 5);
          }
          if (this._winNum > 0) {
            this.showAddScore(this._winNum);
            this._winNum = 0;
          }

          //        //结算-更新
          DataManager.instance.isChangeGold = true;
          DataManager.instance.emit(UserProxyEvent.CHANGE_GOLD);
        };
        _proto.showStep = function showStep(text) {
          var stepInfo = find("game_bg/stepInfo", this.node);
          stepInfo.getChildByName("text").getComponent(Label).string = text;
          stepInfo.active = true;
        };
        _proto.showAddScore = function showAddScore(text) {
          var addScore = find("game_bg/addScore", this.node);
          addScore.getChildByName("text").getComponent(Label).string = "+" + Common.numFormat(text);
          addScore.active = true;
        };
        _proto.updateView = function updateView(event, data) {
          var _this8 = this;
          switch (event) {
            case eProto.getConfig:
              {
                //                //获取游戏配置
                //                // this._eventManager.off(Dx3MinGameDef.eProto.getConfig, this.recvData, this);

                this.showStartGame();
                break;
              }
            case eProto.dxBet:
              {
                //                //下注各种场景  下注叠加
                if (!(typeof data.Code == "undefined") && data.Code == 0) {
                  Common.showLog("自己下注成功");
                  var bet = data.Data;

                  //                    // let bigBet = parseInt(this._betBigNum.string);
                  //                    // let smallBet = parseInt(this._betSmallNum.string);
                  //                    // let curBet = bet.big > bet.small ? bet.big - bigBet : bet.small - smallBet;
                  //                    // //下注-更新
                  //                    // let userMoney = parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD));
                  //                    // DataManager.instance.setUserDataForKey(UserKey.GOLD, userMoney - curBet);
                  //                    // DataManager.instance.isChangeGold = true;
                  //                    // DataManager.instance.emit(UserProxyEvent.CHANGE_GOLD);
                  //                    // DataManager.instance.isChangeGold = false;

                  //                    //更新显示
                  this._betBigNum.string = Common.numFormat(bet.big);
                  this._betSmallNum.string = Common.numFormat(bet.small);
                  this._audioManager.playSound(this.dxsound[1], false);
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
                    _this8._gameCountDown.string = "";
                    _this8.showResultAni();
                  }, 0.5 + time);
                }
                break;
              }
            case eProto.dxShowResult:
              {
                //                //checkout
                var checkout = data;
                this._winNum = checkout.amount;
                break;
              }
            case eProto.dxNextWait:
              {
                var waiteNext = data;
                this._updateTimeFlag = true;

                //                //等待下一局
                this.showNextCountDown(waiteNext.TimeLeft);
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
                  this.showStep(i18n.lang[10001]);
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
        _proto.updatePath = function updatePath() {
          var path = find("game_bg/path_bg", this.node);
          if (this._model.pathData == null || this._model.pathData.length <= 0) {
            return;
          }
          for (var i = 0; i < path.children.length; i++) {
            var ball = path.getChildByName("ball" + (i + 1));
            if (this._model.pathData[i]) {
              ball.active = true;
              ball.getComponent(Sprite).spriteFrame = this.ball[this._model.pathData[i].Result - 1];
            } else {
              ball.active = false;
            }
          }
        };
        _proto.StartGame = function StartGame(ShowId) {
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
          this.clearChildren(this.topLayer.getChildByName("big_ani"));
          this.centerLayer.getChildByName("waitNext_bg").active = false;
          gts.Debug.Log("==this._nextCountDown.string==" + this._nextCountDown.string);
          var bigAni = find("game_bg/nohu", this.node);
          bigAni.active = false;
          var nohuCoin = find("game_bg/nohuCoin", this.node);
          nohuCoin.active = false;
          this._audioManager.playSound(this.dxsound[0], false);
          this.showStep(i18n.lang.newStart);
          this._roomId.string = Common.setGameNo(ShowId);
          var scollview_content = find("chat_bg/content_record/content_scrollView", this.node).getComponent(ScrollView);
          if (isValid(scollview_content)) {
            this.clearChildren(scollview_content.content);
          }
        };
        _proto.updateGameStatus = function updateGameStatus() {
          //        // this._gameCountDown.string="";
          this._CountDownTime = 0;
          this._NextDownTime = 0;
          this._flag = true;
          this._isResult = false;
          this._model.resultData = null;
          this._isshowRe = false;
          this._winNum = 0;
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

          //        // let shaizi11 = this.centerLayer.getChildByName("sdhaizi1").getComponent(sp.Skeleton);
          //        // let shaizi22 = this.centerLayer.getChildByName("sdhaizi2").getComponent(sp.Skeleton);
          //        // let shaizi33 = this.centerLayer.getChildByName("sdhaizi3").getComponent(sp.Skeleton);
          var shaizifeng = this.centerLayer.getChildByName("shuaizi1guang").getComponent(sp.Skeleton);
          //        // shaizi11.node.active = false;
          //        // shaizi22.node.active = false;
          //        // shaizi33.node.active = false;
          shaizifeng.node.active = false;
          this.xiaoLayer.getChildByName("image_ani").active = false;
          this.xiaoLayer.getChildByName("image").active = true;
          this.daLayer.getChildByName("image_ani").active = false;
          this.daLayer.getChildByName("image").active = true;
          this.clearChildren(this.topLayer.getChildByName("big_ani"));
          this.centerLayer.getChildByName("waitNext_bg").active = false;
          gts.Debug.Log("==this._nextCountDown.string==" + this._nextCountDown.string);
          var bigAni = find("game_bg/nohu", this.node);
          bigAni.active = false;
          var nohuCoin = find("game_bg/nohuCoin", this.node);
          nohuCoin.active = false;
        };
        _proto.showNextCountDown = function showNextCountDown(timeLeft) {
          this._NextDownTime = timeLeft;
          if (this._NextDownTime <= 2 && this._isshowRe == false && this._model.resultData != null) {
            this._isshowRe = true;
            this.showHandStatus(false);
            this.showResult(this._model.resultData, false);
          }
          if (this._NextDownTime <= 0.000001) {
            this._NextDownTime = 0;
            this._nextCountDown.string = "0";
            this.centerLayer.getChildByName("waitNext_bg").active = false;
          } else {
            this._nextCountDown.string = "" + this._NextDownTime;
            this.centerLayer.getChildByName("waitNext_bg").active = true;
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
          this._gameCountDown.color = this._CountDownTime <= CCountDown ? color(255, 42, 0) : Color.WHITE;
          if (this._CountDownTime <= 0.000001) {
            this._CountDownTime = 0;
            this._gameCountDown.string = "0";
          } else {
            this._gameCountDown.string = "" + this._CountDownTime;
          }
          if (this._CountDownTime == 1) {
            DataManager.instance.isChangeGold = false;
            this.showStep(i18n.lang.dxgameTimeTip);
          }
          if (timeleft <= CCountDown && timeleft >= 1 && !this.showCountDownTip) {
            ViewManager.instance.showCountDownTip(this._gameCountDown.node.parent, timeleft, "idle2", -35.824);
          }
          this.showCountDownTip = timeleft <= CCountDown;
          this._gameCountDown.node.active = timeleft > CCountDown;
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
          if (dtotalNum != parseInt(this._totalBig.string.replace(/,/g, "")) || xtotalNum != parseInt(this._totalSmall.string.replace(/,/g, ""))) {
            tween(this._totalBig.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.15, {
              scale: v3(1, 1, 1)
            }).start();
            tween(this._totalSmall.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.15, {
              scale: v3(1, 1, 1)
            }).start();
          }
        };
        _proto.removeEvent = function removeEvent() {
          Dx3MinGameCtrl.instance.unRegist();
          this._eventManager.off(eEvent.updateView, this.updateView, this);
          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          this._eventManager.off(this._configManager.eventTransform.gameHide, this.gameHide, this); //切到后台

          this._eventManager.off("handrelust", this.removePanzi, this); //断线重连
        };

        _proto.clearChildren = function clearChildren(parent) {
          for (var _iterator4 = _createForOfIteratorHelperLoose(parent.children.slice()), _step4; !(_step4 = _iterator4()).done;) {
            var child = _step4.value;
            child.removeFromParent();
            child.destroy();
          }
        };
        _proto.onDisable = function onDisable() {
          this.removeEvent();
        };
        return Dx3MinGameLogic;
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec12], {
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

System.register("chunks:///_virtual/Dx3MinHand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './Common.ts', './GUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Vec2, UITransform, Component, EventManager, Common, GUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec2 = module.Vec2;
      UITransform = module.UITransform;
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
      cclegacy._RF.push({}, "7f32e5TVnlAZqxqtP/FF5Aj", "Dx3MinHand", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Dx3MinHand = exports('default', (_dec = ccclass("Dx3MinHand"), _dec2 = menu("game/Dx3Mingame/Dx3MinHand"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Dx3MinHand, _Component);
        function Dx3MinHand() {
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
        var _proto = Dx3MinHand.prototype;
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
          if (ss >= this.node.getComponent(UITransform).width * 0.75) {
            this.node.active = false;
            // this.node.getPosition().x = this._OrginX;
            // this.node.getPosition().y = this._OrginY;
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
          // this.node.getPosition().x = this._OrginX;
          // this.node.getPosition().y = this._OrginY;
          this.node.setPosition(this._OrginX, this._OrginY);
          this._startx = 0;
          this._starty = 0;
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return Dx3MinHand;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Dx3MinModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "dee98tMQdNOi6J6JqfaCRb0", "Dx3MinModel", undefined);
      var Dx3MinModel = exports('Dx3MinModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(Dx3MinModel, _GameDef$BaseSington);
        function Dx3MinModel() {
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
          return _this;
        }
        _createClass(Dx3MinModel, [{
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
        return Dx3MinModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Dxgame3Min", ['./Dx3MinButtonLogic.ts', './Dx3MinChipItem.ts', './Dx3MinGameCtrl.ts', './Dx3MinGameDef.ts', './Dx3MinGameDetailsLayer.ts', './Dx3MinGameHistoryLayer.ts', './Dx3MinGameLogic.ts', './Dx3MinHand.ts', './Dx3MinModel.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Dxgame3Min', 'chunks:///_virtual/Dxgame3Min'); 
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