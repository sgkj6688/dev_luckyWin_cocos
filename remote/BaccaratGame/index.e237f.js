System.register("chunks:///_virtual/AvatarMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './ContentEx.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './BPlayerInfo.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, find, instantiate, UITransform, view, Vec3, AutoEventNode, GUtil, ContentEx, BaccaratDataMgr, BaccaratDef, BPlayerInfo;
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
      find = module.find;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      view = module.view;
      Vec3 = module.Vec3;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ContentEx = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      BPlayerInfo = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "52c38gs4zVATZDXbZQ7YxcW", "AvatarMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AvatarMgr = exports('default', (_dec = ccclass("AvatarMgr"), _dec2 = property({
        type: Node,
        visible: true
      }), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(AvatarMgr, _AutoEventNode);
        function AvatarMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_avatarElmt", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labOtherCount", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultHead", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ndOtherInfo", _descriptor4, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _this._idx2avatar = {};
          _this._idx2pos = {};
          return _this;
        }
        var _proto = AvatarMgr.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          if (this._avatarElmt) {
            var idx = 0;
            var target = find("" + idx, this.node);
            while (target) {
              var clone = instantiate(this._avatarElmt);
              clone.parent = this.node;
              clone.setPosition(target.position);
              this._idx2avatar["" + idx] = clone;
              this._idx2pos["" + idx] = target.position;
              if (idx == 2) {
                var node_chat = find("node_chat", clone);
                node_chat.setPosition(node_chat.position.x, -60);
              }
              if (target.getPosition().x > 0) {
                var _node_chat = find("node_chat", clone);
                _node_chat.setPosition(-60, _node_chat.position.y);
                _node_chat.setScale(-1, _node_chat.scale.y, 1);
                var lbl_chat = find("lbl_chat", _node_chat);
                lbl_chat.setScale(-1, _node_chat.scale.y, 1);
                lbl_chat.getComponent(UITransform).anchorX = 0.5;
                lbl_chat.getComponent(UITransform).anchorY = 0;
              }
              idx += 1;
              target = find("" + idx, this.node);
            }
            this._avatarElmt.active = false;
            var comp = this.node.getComponent(ContentEx);
            if (comp) {
              comp.reload();
              comp.organize();
            }
          }
          this.OnEvent(BaccaratDef.Event.PLAYER_LIST_UPDATED, function () {
            _this2.UpdateUI("onEvent");
          });
          this.UpdateUI("onload");
          view.on("canvas-resize", this.CachePos, this);
        };
        _proto.CachePos = function CachePos() {
          var idx2pos = {};
          var keys = Object.keys(this._idx2avatar);
          for (var i = 0; i < keys.length; ++i) {
            var _key2 = keys[i];
            var tmp = this._idx2avatar[_key2];
            idx2pos[_key2] = GUtil.Pos_L2W(tmp);
          }
          BaccaratDataMgr.ins.idx2sendPos = idx2pos;
          BaccaratDataMgr.ins.wposOtherSender = this.ndOtherInfo ? GUtil.Pos_L2W(this.ndOtherInfo) : Vec3.ZERO;
        };
        _proto.start = function start() {
          var _this3 = this;
          _AutoEventNode.prototype.start.call(this);
          this.CachePos();
          this.OnEvent(BaccaratDef.Event.UPDATE_AVATAR, function (uid) {
            var idx = BaccaratDataMgr.ins.IdxWithUid(uid);
            var player = BaccaratDataMgr.ins.PlayerWithUID(uid);
            var node = _this3._idx2avatar[idx];
            _this3.UpdateAvatar(node, player);
          });
          this.OnEvent(BaccaratDef.Event.UPDATE_SORT_PLAYERS, function () {
            _this3.UpdateUI("update_sort_players");
          });
        };
        _proto.UpdateUI = function UpdateUI(flag) {
          if (!BaccaratDataMgr.ins.myInfo) {
            return;
          }
          gts.UI.SetLab(this.labOtherCount, BaccaratDataMgr.ins.otherCount);
          var arr = BaccaratDataMgr.ins.players;
          var keys = Object.keys(this._idx2avatar);
          //        // gts.Debug.Log(`# AvatarMgr UpdateUI(${flag}): ${JSON.stringify(keys)}`);

          var isSelf = 0;
          var myInfo = BaccaratDataMgr.ins.myInfo;
          for (var i = 0; i < keys.length; ++i) {
            var num = Number(keys[i]) + isSelf;
            var node = this._idx2avatar[keys[i]];
            if (num >= 0 && num < arr.length) {
              var info = arr[num];
              if (info.uid === myInfo.uid) {
                isSelf = 1;
                num += 1;
                info = arr[num];
              }
              this.SetAvatar(node, info, i);
            } else {
              this.SetAvatar(node, null, i);
            }
          }
        };
        _proto.SetAvatar = function SetAvatar(node, info, order) {
          if (!node) {
            return;
          }
          var pi = node.getComponent(BPlayerInfo);
          pi.SetInfo(info, order, this.defaultHead);
        };
        _proto.UpdateAvatar = function UpdateAvatar(node, info) {
          if (!node) {
            return;
          }
          var pi = node.getComponent(BPlayerInfo);
          pi.UpdateInfo(info);
        };
        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
          view.off("canvas-resize", this.CachePos, this);
        }

        //    // update (dt) {}
        ;

        return AvatarMgr;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_avatarElmt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labOtherCount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "defaultHead", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ndOtherInfo", [_dec5], {
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

System.register("chunks:///_virtual/BaccaratDataMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './MainManager.ts', './BaccaratDef.ts', './Common.ts'], function (exports) {
  var _createClass, _extends, cclegacy, _decorator, Vec3, UserKey, DataManager, MainManager, BaccaratDef, Common;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
    }, function (module) {
      UserKey = module.UserKey;
      DataManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6722bEikHRKDLfSCeuhe3ZN", "BaccaratDataMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratDataMgr = exports('default', /*#__PURE__*/function () {
        function BaccaratDataMgr() {
          this._isTest = false;
          //    //! 当前选中的下注金额
          this._curSelBetVal = BaccaratDef.Chips[0];
          this.IsMd5Table = false;
          this.curTableID = null;
          //    //! 自己uid
          this._myUid = BaccaratDataMgr.dataMgr.getUserDataForKey(UserKey.OID);
          //    //赔率列表
          this._oddList = void 0;
          //    //! 当前房间内的玩家
          this._players = [];
          this._uid2idx = {};
          this._myInfo = void 0;
          //    //! 当前桌子状态
          this._curTabStatus = "";
          this._playerCount = 0;
          //    //! 自己发射筹码的世界坐标
          this._wposSelfSender = Vec3.ZERO;
          this._idx2sendPos = {};
          this._wposOtherSender = Vec3.ZERO;
          //    //! 当前局号
          this._curGameNum = "";
          //    //! 自己下注的金额
          this._area2money = {};
          //    //! 旧的下注信息
          this._oldBetInfo = {
            gameNum: "",
            bet: {}
          };
          this._history = [];
        }
        BaccaratDataMgr.OnDestroy = function OnDestroy() {
          if (this._ins) {
            this._ins.Clear();
          }
          this._ins = null;
        };
        var _proto = BaccaratDataMgr.prototype;
        _proto.SetCurSelBetVal = function SetCurSelBetVal(value) {
          this._curSelBetVal = value;
          gts.Debug.Log("# \u9009\u62E9\u4E0B\u6CE8\u7B79\u7801\uFF1A" + value);
        };
        _proto.Init = function Init() {};
        _proto.Clear = function Clear() {};
        _proto.IdxWithUid = function IdxWithUid(uid) {
          var idx = -1;
          for (var i = 0; i < this.players.length && i < BaccaratDef.TOP_PLAYER_CNT && idx < 0; ++i) {
            if (this.players[i].uid === uid) {
              idx = i;
            }
          }
          return idx;
        };
        _proto.SetPlayers = function SetPlayers(arr, orderPlayer) {
          // 玩家快照不含自己时，不能沿用上一桌或上一局的个人下注。
          this._myInfo = null;
          for (var i = 0; i < arr.length; i++) {
            if (arr[i].uid == this._myUid) {
              this._myInfo = Common.clone(arr[i]);
              arr.splice(i, 1);
            }
          }
          this._players = arr;
          // this.UpdateIdxMap();
          this.SortPlayers();
        };
        _proto.UpdateIdxMap = function UpdateIdxMap() {
          if (!this._players) {
            return;
          }
          this._uid2idx = {};
          for (var i = 0; i < this._players.length; ++i) {
            var p = this._players[i];
            this._uid2idx[p.uid] = i;
          }
        };
        _proto.AddPlayers = function AddPlayers(p) {
          var finded = false;
          for (var i = 0; i < this._players.length && !finded; ++i) {
            var tmp = this._players[i];
            if (tmp.uid === p.uid) {
              finded = true;
            }
          }
          if (finded) {
            return false;
          }
          this._players.push(p);
          this.UpdateIdxMap();
          return true;
        };
        _proto.DelPlayer = function DelPlayer(p) {
          // 离开回包是新对象，必须按 UID 匹配本地玩家。
          var idx = this._players.findIndex(function (player) {
            return player.uid === p.uid;
          });
          if (idx >= 0) {
            this._players.splice(idx, 1);
            this.UpdateIdxMap();
            return true;
          }
          return false;
        };
        _proto.SetPlayerGold = function SetPlayerGold(uid, gold) {
          var p = this.PlayerWithUID(uid);
          if (uid == this.myInfo.uid) {
            p = this.myInfo;
          }
          if (p && p.golds !== gold) {
            p.golds = gold;
            return true;
          }
          return false;
        };
        _proto.SortPlayers = function SortPlayers() {
          //        //! 列表排序
          this._players.sort(function (p1, p2) {
            return p2.golds - p1.golds;
          });
          this.UpdateIdxMap();
          //        // console.trace(`#玩家排序......`);
        };

        _proto.PlayerWithUID = function PlayerWithUID(uid) {
          var idx = this._uid2idx[uid];
          if (undefined !== idx && null !== idx) {
            return this._players[idx];
          }
          return null;
        };
        _proto.wPosWithIdx = function wPosWithIdx(idx) {
          return this._idx2sendPos[idx];
        }
        //    //! 未上版玩家发射位置
        ;

        _proto.SetCurGameNum = function SetCurGameNum(value) {
          this._curGameNum = value;
        };
        _proto.SelfBetByArea = function SelfBetByArea(area) {
          var val = this._area2money[area];
          return val ? val : 0;
        };
        _proto.AddSelfBet = function AddSelfBet(area, money) {
          var val = this.SelfBetByArea(area);
          this._area2money[area] = val + money;
        };
        _proto.AllowBet = function AllowBet(area) {
          if (area === BaccaratDef.AREA.BANKER && this._area2money[BaccaratDef.AREA.PLAYER] > 0) {
            return false;
          }
          if (area === BaccaratDef.AREA.PLAYER && this._area2money[BaccaratDef.AREA.BANKER] > 0) {
            return false;
          }
          return true;
        };
        _proto.SaveBetInfo = function SaveBetInfo() {
          var allowSave = false;
          var keys = Object.keys(this._area2money);
          for (var i = 0; i < keys.length && !allowSave; ++i) {
            var val = this._area2money[keys[i]];
            if (val > 0) {
              allowSave = true;
            }
          }
          if (allowSave) {
            this._oldBetInfo.gameNum = this.curGameNum;
            this._oldBetInfo.bet = {};
            var _keys = Object.keys(this._area2money);
            for (var _i = 0; _i < _keys.length; ++_i) {
              var tmpk = _keys[_i];
              this._oldBetInfo.bet[tmpk] = this._area2money[tmpk];
            }
          }
        };
        //    //! 清理下注信息
        _proto.ClearSelfBet = function ClearSelfBet() {
          this._area2money = {};
        };
        _proto.SetHistory = function SetHistory(elmts) {
          this._history = elmts;
        };
        _proto.GetHistory = function GetHistory(max) {
          if (this.history.length <= max) {
            return this.history;
          }
          var arr = [];
          var idx = this.history.length - max;
          for (var i = 0; i < max; ++i) {
            arr.push(this.history[i + idx]);
          }
          return arr;
        };
        _createClass(BaccaratDataMgr, [{
          key: "isTest",
          get: function get() {
            return this._isTest;
          },
          set: function set(value) {
            //        // this._myUid = 'buid_test';
            this._isTest = value;
          }
        }, {
          key: "curSelBetVal",
          get: function get() {
            return this._curSelBetVal;
          }
        }, {
          key: "oddList",
          get: function get() {
            return this._oddList;
          },
          set: function set(list) {
            this._oddList = list;
          }
        }, {
          key: "players",
          get: function get() {
            return this._players;
          }
        }, {
          key: "myInfo",
          get: function get() {
            // 基础资料仍取用户数据，保留房间快照中的 betInfos、score 等对局字段。
            this._myInfo = _extends({}, this._myInfo, {
              uid: DataManager.instance.getUserDataForKey(UserKey.OID),
              head: DataManager.instance.getUserDataForKey(UserKey.AVATAR),
              nickName: DataManager.instance.getUserDataForKey(UserKey.NICKNAME),
              golds: DataManager.instance.getUserDataForKey(UserKey.GOLD)
            });
            return this._myInfo;
          }
        }, {
          key: "curTabStatus",
          get: function get() {
            return this._curTabStatus;
          },
          set: function set(value) {
            this._curTabStatus = value;
          }
        }, {
          key: "playerCount",
          get: function get() {
            return this._playerCount;
          },
          set: function set(count) {
            this._playerCount = count;
          }
        }, {
          key: "otherCount",
          get: function get() {
            var val = this._playerCount - BaccaratDef.TOP_PLAYER_CNT;
            return val < 0 ? 0 : val;
          }
        }, {
          key: "wposSelfSender",
          get: function get() {
            return this._wposSelfSender;
          },
          set: function set(value) {
            //        // gts.Debug.Log(`#[POS_SET] wposSelfSender: ${JSON.stringify(value)}`);
            this._wposSelfSender = value;
          }
        }, {
          key: "idx2sendPos",
          get: function get() {
            return this._idx2sendPos;
          },
          set: function set(value) {
            //        // gts.Debug.Log(`#[POS_SET] idx2sendPos: ${JSON.stringify(value)}`);
            this._idx2sendPos = value;
          }
        }, {
          key: "wposOtherSender",
          get: function get() {
            return this._wposOtherSender;
          },
          set: function set(value) {
            //        // gts.Debug.Log(`#[POS_SET] wposOtherSender: ${JSON.stringify(value)}`);
            this._wposOtherSender = value;
          }
        }, {
          key: "curGameNum",
          get: function get() {
            return this._curGameNum;
          }
        }, {
          key: "selfBetInfo",
          get: function get() {
            return this._area2money;
          }
        }, {
          key: "oldBetInfo",
          get: function get() {
            return this._oldBetInfo && this._oldBetInfo.bet ? this._oldBetInfo.bet : {};
          }
        }, {
          key: "selfTotalBet",
          get: function get() {
            var val = 0;
            var keys = Object.keys(this._area2money);
            for (var i = 0; i < keys.length; ++i) {
              var k = keys[i];
              val += this.SelfBetByArea(Number(k));
            }
            return val;
          }
        }, {
          key: "allowUseOldBet",
          get: function get() {
            var allow = false;
            var keys = Object.keys(this._oldBetInfo.bet);
            for (var i = 0; i < keys.length && !allow; ++i) {
              var val = this._oldBetInfo.bet[keys[i]];
              if (val > 0) {
                allow = true;
              }
            }
            return allow;
          }
        }, {
          key: "history",
          get: function get() {
            return this._history ? this._history : [];
          }
        }], [{
          key: "ins",
          get: function get() {
            if (!this._ins) {
              this._ins = new BaccaratDataMgr();
              this._ins.Init();
            }
            return this._ins;
          }
        }, {
          key: "dataMgr",
          get: function get() {
            var mMgr = MainManager.getInstance();
            var dMgr = mMgr ? mMgr.getDataManager() : null;
            return dMgr;
          }
        }, {
          key: "myUid",
          get: function get() {
            return this.ins ? this.ins._myUid : "";
          }
        }]);
        return BaccaratDataMgr;
      }());
      BaccaratDataMgr._ins = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('BaccaratDef', void 0);
      cclegacy._RF.push({}, "3aced4VSflO7qD5ax7Loj3N", "BaccaratDef", undefined);
      var BaccaratDef;
      (function (_BaccaratDef) {
        var UID_OTHER_PLAYER = _BaccaratDef.UID_OTHER_PLAYER = "baccarat_other_player";
        var Flag = /*#__PURE__*/function (Flag) {
          Flag["TO_BANKER"] = "2banker";
          return Flag;
        }({});
        _BaccaratDef.Flag = Flag;
        var TOP_PLAYER_CNT = _BaccaratDef.TOP_PLAYER_CNT = 6;
        var Status = /*#__PURE__*/function (Status) {
          Status["ON_BET"] = "onBet";
          Status["ON_SEND_CARD"] = "onSendCard";
          Status["ON_CHECK_OUT"] = "onCheckout";
          return Status;
        }({});
        _BaccaratDef.Status = Status;
        var AREA = /*#__PURE__*/function (AREA) {
          AREA[AREA["PLAYER"] = 0] = "PLAYER";
          AREA[AREA["BANKER"] = 1] = "BANKER";
          AREA[AREA["TIE"] = 2] = "TIE";
          AREA[AREA["PLAYER_PAIR"] = 3] = "PLAYER_PAIR";
          AREA[AREA["BANKER_PAIR"] = 4] = "BANKER_PAIR";
          AREA[AREA["TOTAL_COUNT"] = 5] = "TOTAL_COUNT";
          AREA[AREA["CLOSE"] = 1000] = "CLOSE";
          return AREA;
        }({});
        _BaccaratDef.AREA = AREA;
        var AREA_NAME = /*#__PURE__*/function (AREA_NAME) {
          AREA_NAME["A0"] = "PLAYER";
          AREA_NAME["A1"] = "BANKER";
          AREA_NAME["A2"] = "TIE";
          AREA_NAME["A3"] = "PLAYER_PAIR";
          AREA_NAME["A4"] = "BANKER_PAIR";
          AREA_NAME["A1000"] = "CLOSE";
          AREA_NAME["DIS0"] = "PLAYER";
          AREA_NAME["DIS1"] = "BANKER";
          AREA_NAME["DIS2"] = "TIE";
          AREA_NAME["DIS3"] = "P.PAIR";
          AREA_NAME["DIS4"] = "B.PAIR";
          AREA_NAME[AREA_NAME["player"] = 0] = "player";
          AREA_NAME[AREA_NAME["banker"] = 1] = "banker";
          AREA_NAME[AREA_NAME["tie"] = 2] = "tie";
          AREA_NAME[AREA_NAME["player_pair"] = 3] = "player_pair";
          AREA_NAME[AREA_NAME["banker_pair"] = 4] = "banker_pair";
          AREA_NAME[AREA_NAME["close"] = 1000] = "close";
          return AREA_NAME;
        }({});
        _BaccaratDef.AREA_NAME = AREA_NAME;
        var SpAniName = /*#__PURE__*/function (SpAniName) {
          SpAniName["WIN"] = "win";
          SpAniName["TIE"] = "tie";
          SpAniName["SEND_CARD"] = "fapai";
          SpAniName["IDLE"] = "idle";
          SpAniName["BET_START"] = "Bat";
          SpAniName["BET_STOP"] = "Dung";
          SpAniName["NEW_GAME"] = "BatDau";
          SpAniName["GAME_TIE"] = "tangshou";
          SpAniName["PLYAER_WIN"] = "left1";
          SpAniName["BANKER_WIN"] = "right1";
          SpAniName["GET_CARDS"] = "xipai";
          SpAniName["LEFT"] = "left2";
          SpAniName["RIGHT"] = "right2";
          return SpAniName;
        }({});
        _BaccaratDef.SpAniName = SpAniName;
        var SpAniEvent = /*#__PURE__*/function (SpAniEvent) {
          SpAniEvent["SEND_CARD"] = "fapai1";
          return SpAniEvent;
        }({});
        _BaccaratDef.SpAniEvent = SpAniEvent;
        var Event = /*#__PURE__*/function (Event) {
          Event["BUNDLE_LOAD_COMPLETED"] = "baccarat_boundle_loaded";
          Event["TIP_WIN_AREA"] = "baccarat_win_tip";
          Event["ONSEL_BET_VALUE"] = "baccarat_onsel_bet";
          Event["SEND_CARDS"] = "baccarat_send_cards";
          Event["MENU_EXIT_VISIBLE"] = "baccarat_menu_exit_visible";
          Event["PLAYER_LIST_UPDATED"] = "baccarat_player_list_updated";
          Event["UPDATE_SELF_INFOS"] = "baccarat_update_selfinfo";
          Event["SET_CHIP_STACK"] = "baccarat_set_chips_stack";
          Event["SEND_CHIP"] = "baccarat_send_chip";
          Event["CHIPS_2_BANKER"] = "baccarat_chips_2_banker";
          Event["CHIPS_2_WIN_AREAS"] = "baccarat_chips_2_win_areas";
          Event["STACK_CHIPS_2_WINNER"] = "baccarat_stack_chips_2_winner";
          Event["FLY_TIP"] = "baccarat_fly_tip";
          Event["UPDATE_AREAS_MONEY"] = "baccarat_update_areas_money";
          Event["ALL_CARDS_2_GIRL"] = "baccarat_all_cards_2_girl";
          Event["UPDATE_AVATAR"] = "baccarat_update_avatar";
          Event["UPDATE_UI_HISTORY"] = "baccarat_update_ui_history";
          Event["UPDATE_ROAD_LIST"] = "baccarat_update_ui_roadlist";
          Event["OPEN_RECORDS"] = "baccarat_open_records";
          Event["TEST_REFRESH_ROADLIST"] = "baccarat_test_refresh_roadlist";
          Event["OPEN_USER_INFO"] = "baccarat_open_user_info";
          Event["SHOW_PROFIT"] = "baccarat_show_profit";
          Event["UPDATE_SORT_PLAYERS"] = "baccarat_update_sort_players";
          Event["OPEN_USERS_PAGE"] = "baccarat_open_users_page";
          Event["OPEN_UI_HEPLER"] = "baccarat_ui_hepler";
          Event["SHOW_CHAT"] = "baccarat_show_chat";
          Event["ON_GAME_SHOW"] = "baccarat_on_game_show";
          Event["CHIPS_MGR_RESET"] = "baccarat_chips_mgr_reset";
          Event["MUTE_CHANGED"] = "baccarat_mute_changed";
          Event["onLoadHall"] = "baccarat_onLoadHall";
          Event["onLoadGame"] = "baccarat_onLoadGame";
          return Event;
        }({});
        _BaccaratDef.Event = Event;
        var Chips = _BaccaratDef.Chips = [1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];
        function RandomChip(chips) {
          var idx = Math.floor(Math.random() * 1000) % chips.length;
          return chips[idx];
        }
        _BaccaratDef.RandomChip = RandomChip;
        function getHuguanIndex(roomId) {
          var id = parseInt(roomId);
          return id + 11;
        }
        _BaccaratDef.getHuguanIndex = getHuguanIndex;
        function RandomChipArr(total) {
          var arr = [];
          arr.push.apply(arr, BaccaratDef.Chips);
          var cpyMoney = total;
          var outarr = [];
          while (cpyMoney > 0 && arr.length > 0) {
            var idx = Math.floor(Math.random() * 1000) % arr.length;
            var val = arr[idx];
            if (val > cpyMoney) {
              arr.splice(idx, 1);
            } else {
              cpyMoney -= val;
              outarr.push(val);
            }
          }
          return outarr;
        }
        _BaccaratDef.RandomChipArr = RandomChipArr;
        var CardColor = /*#__PURE__*/function (CardColor) {
          CardColor[CardColor["HT"] = 4] = "HT";
          CardColor[CardColor["HX"] = 3] = "HX";
          CardColor[CardColor["MH"] = 2] = "MH";
          CardColor[CardColor["FK"] = 1] = "FK";
          CardColor[CardColor["NONE"] = 0] = "NONE";
          return CardColor;
        }({});
        _BaccaratDef.CardColor = CardColor;
      })(BaccaratDef || (BaccaratDef = exports('BaccaratDef', {})));
      var BaccaratUtil = exports('BaccaratUtil', /*#__PURE__*/function () {
        function BaccaratUtil() {}
        BaccaratUtil.CardWithIdx = function CardWithIdx(idx) {
          var col = Math.floor(idx / 13) + 1;
          var val = idx % 13;
          if (0 === val) {
            val = 13;
          }
          return {
            color: col,
            point: val
          };
        };
        BaccaratUtil.CardValue = function CardValue(cardval) {
          if (cardval >= 10) {
            return 0;
          }
          return cardval;
        };
        BaccaratUtil.CVwithIdx = function CVwithIdx(idx) {
          return this.CardValue(this.CardWithIdx(idx).point);
        };
        return BaccaratUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratGame", ['./AvatarMgr.ts', './BChip.ts', './BChipsMgr.ts', './BExitMenu.ts', './BHistory.ts', './BMsgSender.ts', './BOtherInfo.ts', './BPlayerInfo.ts', './BPoker.ts', './BPokerMgr.ts', './BSound.ts', './BUIDishRoad.ts', './BUIHepler.ts', './BUIRecordLine.ts', './BUIRecords.ts', './BUIRoadList.ts', './BUIUserInfo.ts', './BUIUsersPage.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './BaccaratGameView.ts', './BaccaratMsg.ts', './BaccaratScene.ts', './BaccaratTableOpt.ts', './ChipStack.ts', './DlgBaccaratTest.ts', './TipProfit.ts', './UIChipSel.ts', './UIRoot.ts', './UITestOpt.ts', './RoadListDef.ts', './UIBigEyeRoad.ts', './UIBigRoad.ts', './UIBigRoadItem.ts', './UICockroach.ts', './UIDishRoad.ts', './UIDishRoadItem.ts', './UIScoreRoad.ts', './UIScoreRoadItem.ts', './UISmallRoad.ts', './BaccaratHall.ts', './BaccaratRoomItemInfo.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BaccaratGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GameDef.ts', './ActFlyTip.ts', './AutoEventNode.ts', './GUtil.ts', './DataManager.ts', './EventManager.ts', './MainManager.ts', './ChipProxy.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './BaccaratMsg.ts', './BChipsMgr.ts', './BHistory.ts', './BMsgSender.ts', './UIChipSel.ts', './Common.ts', './ConfigManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Node, Label, Sprite, assetManager, Prefab, director, instantiate, find, view, isValid, SpriteFrame, Vec3, i18n, ProxyMgr, GameDef, ActFlyTip, AutoEventNode, GUtil, DataManager, UserProxyEvent, UserKey, EventManager, MainManager, ChipProxy, ChipEvent, BaccaratDataMgr, BaccaratDef, BaccaratMsg, BChipsMgr, BHistory, BMsgSender, UIChipSel, Common, ConfigManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
      director = module.director;
      instantiate = module.instantiate;
      find = module.find;
      view = module.view;
      isValid = module.isValid;
      SpriteFrame = module.SpriteFrame;
      Vec3 = module.Vec3;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ActFlyTip = module.default;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      DataManager = module.default;
      UserProxyEvent = module.UserProxyEvent;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      BaccaratMsg = module.BaccaratMsg;
    }, function (module) {
      BChipsMgr = module.default;
    }, function (module) {
      BHistory = module.default;
    }, function (module) {
      BMsgSender = module.default;
    }, function (module) {
      UIChipSel = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ConfigManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "cbb6cad8k5JbLNqckgdismy", "BaccaratGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BaccaratGameView = exports('default', (_dec = ccclass("BaccaratGameView"), _dec2 = menu("game/Baccarat/BaccaratGameView"), _dec3 = property(BChipsMgr), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Sprite), _dec8 = property(Label), _dec9 = property(UIChipSel), _dec10 = property({
        type: Node,
        displayName: "自己发射筹码的位置"
      }), _dec11 = property(Node), _dec12 = property(BHistory), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(BaccaratGameView, _AutoEventNode);
        function BaccaratGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "chipsMgr", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tableOpt", _descriptor2, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "labNickName", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labGold", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprAvatar", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labOrder", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipSel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flagSelfSender", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyTipTarget", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiHistory", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnOpenRoadList", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnChat", _descriptor12, _assertThisInitialized(_this));
          _this._isTest = false;
          return _this;
        }
        var _proto = BaccaratGameView.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          BaccaratDataMgr.ins.SetCurSelBetVal(BaccaratDef.Chips[0]);
          this._isTest = assetManager.bundles.get(GameDef.Game.Baccarat) ? false : true;
          if (this._isTest) {
            assetManager.loadBundle(GameDef.Game.Baccarat, function (err, bundle) {
              _this2.LoadRes(bundle, "bundle-loaded");
            });
          }
          BaccaratDataMgr.ins.isTest = this._isTest;
        };
        _proto.start = function start() {
          var _this3 = this;
          _AutoEventNode.prototype.start.call(this);
          gts.UI.OnClick(this.btnOpenRoadList, function () {
            bundle.load("prefab/ui_road_list", Prefab, function (err, prefab) {
              if (err) {
                console.log(err);
                return;
              }
              var Canvas = director.getScene().getChildByName("Canvas");
              var node = instantiate(prefab);
              Canvas.addChild(node);
            });
          }, this);
          gts.UI.OnClick(this.btnChat, function () {
            var spr_progress = find("spr_progress", _this3.btnChat);
            if (!spr_progress.active) {
              _this3.showChat();
            }
          }, this);

          //        //! //button事件
          //        //!this._eventManager.on(this._configManager.ButtonEvent.closePop,this.closePop,this);
          this.OnEvent(MainManager._instance._configManager.ButtonEvent.closePop, function () {
            //            // this._viewManager.closePopView();
            MainManager._instance._viewManager.closePopView();
          });

          //        // this._eventManager.on(this._configManager.ButtonEvent.sound,this.setMusic,this);
          //        // this.OnEvent(MainManager._instance._configManager.ButtonEvent.sound, (data) => {
          //        //     let mMgr = MainManager.getInstance();
          //        //     if (data == "yinyue") {
          //        //         //音乐
          //        //         //! TODO: 播放音乐
          //        //         // mMgr._AudioManager.setMusicStatus(!this._audioManager._soundMusic);
          //        //         // mMgr._AudioManager.playGameMusic(this.bgMusic,true);
          //        //         let btn = cc.find("Canvas/settingLayer/tip_bg/yue_sound/open");
          //        //         btn.active = !btn.active;
          //        //         BSound.bgmMute = !BSound.bgmMute;
          //        //     } else if (data == "yinxiao") {
          //        //         //音效
          //        //         //! TODO: 播放音效
          //        //         // this._audioManager.setSoundStatus(!this._audioManager._soundEffect);
          //        //         let btn = cc.find("Canvas/settingLayer/tip_bg/xiao_sound/open");
          //        //         btn.active = !btn.active;
          //        //         BSound.soundMute = !BSound.soundMute;
          //        //     } else {
          //        //         // let btn =cc.find("Canvas/settingLayer/tip_bg/xiao_sound/open");
          //        //         // btn.active =!btn.active
          //        //     }
          //        // });

          this.OnEvent(BaccaratMsg.MsgID.S2C_ENTER_ROOM, function (data) {
            _this3.OnRecvEnterRoom(data.Data, true);
          });
          this.OnEvent(BaccaratMsg.MsgID.S2c_CHANGE_STATUS, function (data) {
            _this3.OnRecvEnterRoom(data.Data, false);
          });
          this.OnEvent(BaccaratDef.Event.UPDATE_SELF_INFOS, function () {
            _this3.UpdateSelfInfos();
          });
          this.OnEvent(BaccaratMsg.MsgID.S2C_PLAYER_ENTER, function (data) {
            if (data.Code !== 0) {
              _this3.EmitEvent(BaccaratDef.Event.FLY_TIP, i18n.errTip(data.Code));
            } else {
              var p = data.Data;
              if (BaccaratDataMgr.ins.AddPlayers(p)) {
                var idx = BaccaratDataMgr.ins.IdxWithUid(p.uid);
                if (idx < BaccaratDef.TOP_PLAYER_CNT) {
                  _this3.EmitEvent(BaccaratDef.Event.PLAYER_LIST_UPDATED);
                }
              }
            }
          });
          this.OnEvent(BaccaratMsg.MsgID.S2C_PLAYER_LEAVE, function (data) {
            if (data.Code !== 0) {
              _this3.EmitEvent(BaccaratDef.Event.FLY_TIP, i18n.errTip(data.Code));
            } else {
              if (BaccaratDataMgr.ins.DelPlayer(data.Data)) {
                _this3.EmitEvent(BaccaratDef.Event.PLAYER_LIST_UPDATED);
              }
            }
          });
          this.OnEvent(BaccaratDef.Event.FLY_TIP, function (tip) {
            if (_this3.flyTipTarget) {
              var clone = instantiate(_this3.flyTipTarget);
              clone.parent = _this3.flyTipTarget.parent;
              var actTip = clone.getComponent(ActFlyTip);
              actTip.SetTip(tip).RunAct();
            }
          });
          var funcUpdateMyGold = function funcUpdateMyGold() {
            var info = BaccaratDataMgr.ins.myInfo;
            gts.Debug.Log("===BaccaratDataMgr.ins.funcUpdateMyGold.golds===" + info.golds);
            gts.UI.SetLab(_this3.labGold, Common.numFormat(info.golds));
          };
          this.OnEvent(BaccaratDef.Event.UPDATE_AVATAR, function (uid) {
            if (uid === BaccaratDataMgr.myUid) {
              funcUpdateMyGold();
            }
          });
          this.OnEvent(BaccaratDef.Event.SHOW_PROFIT, function (uid) {
            funcUpdateMyGold();
          });
          this.OnEvent(BaccaratDef.Event.OPEN_USERS_PAGE, function () {
            // this.showPublicInfoByPage();
            _this3.getAllPlayer();
          });
          this.OnEvent(BaccaratDef.Event.OPEN_UI_HEPLER, function () {
            bundle.load("prefab/ui_helper", Prefab, function (err, prefab) {
              var Canvas = director.getScene().getChildByName("Canvas");
              var node = instantiate(prefab);
              Canvas.addChild(node);
            });
          });
          this.OnEvent(BaccaratMsg.MsgID.S2C_HISTORY, function (data) {
            var datas = data.Data ? data.Data : [];
            BaccaratDataMgr.ins.SetHistory(datas);
            if (_this3.uiHistory) {
              _this3.uiHistory.SetData(datas);
            }
            _this3.EmitEvent(BaccaratDef.Event.UPDATE_ROAD_LIST);
          });
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, function () {
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            gts.UI.SetLab(_this3.labGold, Common.numFormat(gold));
          }, this);
          this.OnEvent(BaccaratDef.Event.OPEN_RECORDS, function () {
            bundle.load("prefab/ui_records", Prefab, function (err, prefab) {
              var Canvas = director.getScene().getChildByName("Canvas");
              var node = instantiate(prefab);
              Canvas.addChild(node);
            });
          });
          this.OnEvent(BaccaratMsg.MsgID.HD_getAllPlayer, function (data) {
            BaccaratDataMgr.ins.SetPlayers(data.Data);
            _this3.showPublicInfoByPage();
          });
          this.OnDisConnected(function () {
            Common.showWait();
          });
          this.OnRConnected(function () {
            Common.closeWait();
            // NetManager.instance.waitServiceSendData();

            // BMsgSender.Send_EnterRoom();
            // //            //! 获取即使记录
            // BMsgSender.Send_History();
          });

          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.OnEventGameShow, this); //断线重连

          ChipProxy.on(ChipEvent.SELECT_CHIP, function (data, from) {
            BaccaratDataMgr.ins.SetCurSelBetVal(data.count);
            _this3.chipSel.selectCM(data, from);
          }, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, function () {
            _this3.chipSel.LoadUI();
          }, this);
          this.OnEvent(BaccaratMsg.MsgID.S2C_EXIT, function () {
            EventManager.instance.emit(BaccaratDef.Event.onLoadHall);
          });
          this.CacheSendPos();
          var bundle = assetManager.bundles.get(GameDef.Game.Baccarat);
          this.LoadRes(bundle, "start");
          if (this._isTest) {
            bundle.load("prefab/ui_test", Prefab, function (err, prefab) {
              var Canvas = director.getScene().getChildByName("Canvas");
              var node = instantiate(prefab);
              Canvas.addChild(node);
            });
          }
          view.on("canvas-resize", this.CacheSendPos, this);
        };
        _proto.OnEventGameShow = function OnEventGameShow() {
          var _this4 = this;
          this.scheduleOnce(function () {
            if (MainManager._instance._netManager._connect == true) {
              _this4.EmitEvent(BaccaratDef.Event.ON_GAME_SHOW);
              BMsgSender.Send_EnterRoom();
              //                //! 获取即使记录
              BMsgSender.Send_History();
            }
          }, 0.1);
        };
        _proto.getAllPlayer = function getAllPlayer() {
          BMsgSender.Send_AllPlayer();
        };
        _proto.showPublicInfoByPage = function showPublicInfoByPage() {
          var data = BaccaratDataMgr.ins.players;
          var list = [];
          for (var _iterator = _createForOfIteratorHelperLoose(data), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            var item = {
              head: i.head,
              gold: i.golds,
              name: i.nickName
            };
            list.push(item);
          }
          GUtil.openUserList(list);
        };
        _proto.onClickUser = function onClickUser() {
          var myinfo = BaccaratDataMgr.ins.myInfo;
          var item = {
            head: myinfo.head,
            gold: myinfo.golds,
            name: myinfo.nickName
          };
          GUtil.openPlayer(item);
        };
        _proto.update = function update(dt) {};
        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
          BaccaratDataMgr.OnDestroy();
          ProxyMgr.close(this);
          EventManager.instance.off(ConfigManager.instance.protocolHall.login, this.OnEventGameShow, this); //断线重连
          view.off("canvas-resize", this.CacheSendPos, this);
        }
        //    //! 加载筹码
        ;

        _proto.LoadRes = function LoadRes(bundle, flag) {
          var _this5 = this;
          if (!isValid(this.node, true)) {
            return;
          }
          //        // let bundle = cc.assetManager.bundles.get(GameDef.Game.Baccarat);
          if (bundle) {
            gts.Debug.Log("# " + flag + ": load chips");
            if (this.chipSel) {
              this.chipSel.LoadUI();
            }
            var tableID = BaccaratDataMgr.ins.curTableID;
            bundle.loadDir("textures/chips", SpriteFrame, function (err, sprframes) {
              // 加载期间可能已退出或切桌，旧页面不得再发起进房。
              if (!isValid(_this5.node, true) || BaccaratDataMgr.ins.curTableID !== tableID) {
                return;
              }
              if (_this5.chipsMgr && sprframes) {
                _this5.chipsMgr.SetChipImages(sprframes);
              }
              BMsgSender.Send_EnterRoom();
              //                //! 获取即使记录
              BMsgSender.Send_History();
            });
          } else {
            gts.Debug.Log("# " + flag + ": bundle is nil");
          }
        };
        _proto.CacheSendPos = function CacheSendPos() {
          BaccaratDataMgr.ins.wposSelfSender = this.flagSelfSender ? GUtil.Pos_L2W(this.flagSelfSender) : Vec3.ZERO;
        }
        //    //! 收到进入房间消息
        ;

        _proto.OnRecvEnterRoom = function OnRecvEnterRoom(msg, enterRoom) {
          //        // if (enterRoom) {
          //        //     BaccaratDataMgr.ins.SetPlayers(msg.playerInfos);
          //        //     this.EmitEvent(BaccaratDef.Event.PLAYER_LIST_UPDATED);
          //        // }
          //        // BaccaratDataMgr.ins.curTabStatus = msg.state;
          //        // this.UpdateSelfInfos();
          if (msg) {
            gts.UI.SetLab(this.labOrder, "" + msg.gameNo);
            BaccaratDataMgr.ins.IsMd5Table = msg.isMd5Table;
          }
        };
        _proto.UpdateSelfInfos = function UpdateSelfInfos() {
          var info = BaccaratDataMgr.ins.myInfo;
          if (!info) {
            gts.UI.SetLab(this.labGold, -1);
            gts.UI.SetLab(this.labNickName, "NoData");
            return;
          }
          Common.nickNameFormatL(this.labNickName, info.nickName);
          gts.UI.SetLab(this.labGold, Common.numFormat(info.golds));
          if (this.sprAvatar) {
            //            // cc.loader.loadRes(`head/${info.head}`, cc.SpriteFrame, (err: Error, sprframe: cc.SpriteFrame) => {
            //            //     this.sprAvatar.spriteFrame = sprframe;
            //            //     if (err) {
            //            //         gts.Debug.LogErr(`${err}`);
            //            //     }
            //            // });
            Common.getHead(info.head, this.sprAvatar).then(function () {});
          }
        };
        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.showChat = function showChat() {
          var userMoney = parseInt(MainManager._instance._dataManager.getUserDataForKey(UserKey.GOLD));
          if (userMoney < 20000) {
            var str = i18n.lang.chatErr3;
            Common.showTip(str);
            return;
          }
          // let chatLayer = cc.find("Canvas/chatLayer");
          // if (!cc.isValid(chatLayer)) return;
          // chatLayer.active = true;
          // let script = chatLayer.getComponent("chatView");
          // if (script) {
          //     script.initGameType("baccarat", () => {
          //         let spr_progress = cc.find("spr_progress", this.btnChat);
          //         spr_progress.getComponent(cc.Sprite).fillRange = 1;
          //         spr_progress.active = true;
          //         cc.Tween.stopAllByTarget(spr_progress);
          //         spr_progress.runAction(
          //             cc.repeatForever(
          //                 cc.sequence(
          //                     cc.delayTime(0.1),
          //                     cc.callFunc(() => {
          //                         spr_progress.getComponent(cc.Sprite).fillRange -= 0.02;
          //                         if (spr_progress.getComponent(cc.Sprite).fillRange <= 0) {
          //                             cc.Tween.stopAllByTarget(spr_progress);
          //                             spr_progress.active = false;
          //                         }
          //                     })
          //                 )
          //             )
          //         );
          //     });
          // }
        };

        _createClass(BaccaratGameView, [{
          key: "autoReListenMsg",
          get: function get() {
            return true;
          }
        }]);
        return BaccaratGameView;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "chipsMgr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tableOpt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labNickName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labGold", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sprAvatar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labOrder", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "chipSel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "flagSelfSender", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "flyTipTarget", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "uiHistory", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnOpenRoadList", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnChat", [_dec14], {
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

System.register("chunks:///_virtual/BaccaratHall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './GameDef.ts', './AutoEventNode.ts', './GUtil.ts', './HallDef.ts', './BMsgSender.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './BaccaratMsg.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Sprite, Node, view, UITransform, assetManager, Prefab, director, instantiate, ScrollView, i18n, AudioManager, ConfigManager, DataManager, UserKey, EventManager, NetManager, ViewManager, GameDef, AutoEventNode, GUtil, HallInfoType, BMsgSender, BaccaratDataMgr, BaccaratDef, BaccaratMsg, Common;
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
      Sprite = module.Sprite;
      Node = module.Node;
      view = module.view;
      UITransform = module.UITransform;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
      director = module.director;
      instantiate = module.instantiate;
      ScrollView = module.ScrollView;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      AudioManager = module.default;
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
      ViewManager = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      HallInfoType = module.HallInfoType;
    }, function (module) {
      BMsgSender = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      BaccaratMsg = module.BaccaratMsg;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "f0b7fdckDZLvbXRH0kIdhDb", "BaccaratHall", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BaccaratHall = exports('default', (_dec = ccclass("BaccaratHall"), _dec2 = menu("game/Baccarat/BaccaratHall"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property({
        type: gts.List
      }), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(BaccaratHall, _AutoEventNode);
        function BaccaratHall() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "userName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userGold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "room_ScrollView", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roomItem", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odd", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label_Mask", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_chongZhi", _descriptor8, _assertThisInitialized(_this));
          _this.freshTime = 0;
          _this._index = 0;
          return _this;
        }
        var _proto = BaccaratHall.prototype;
        _proto.onLoad = function onLoad() {
          BaccaratDataMgr.ins.curTableID = null;
          NetManager.instance.waitServiceSendData();
          this.initEvent();
          this.initHall();
          AudioManager.instance.startBgMusic();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.hallInfo, {
            key: [HallInfoType.BJL_INFO]
          });
          var vSize = view.getVisibleSize();
          var layoutW = (vSize.width - 630) / 2;
          this.label_Mask.getComponent(UITransform).width = layoutW - 110 - 58;
          var curl = DataManager.instance.getUserDataForKey(UserKey.CURL);
          this.btn_chongZhi.active = curl && curl.length > 0;
        };
        _proto.preload = function preload() {
          var bundle = assetManager.bundles.get(GameDef.Game.Baccarat);
          if (bundle) {
            bundle.preloadDir("prefab");
          }
        };
        _proto.start = function start() {
          var _this2 = this;
          _AutoEventNode.prototype.start.call(this);
          this.OnEvent(BaccaratMsg.MsgID.HD_getRoomInfo2, function (data) {
            if (data.Code != 0) {
              Common.showTip(i18n.errTip(data.Code));
              return;
            }
            var msg = data.Data;

            //            // msg.TableInfos = msg.TableInfos.slice(0, 1);

            //            // gts.Debug.Log("===HD_getRoomInfo==" + JSON.stringify(msg));
            //            // console.log("msg", msg);

            // let tableInfos = msg.TableInfos;
            if (_this2.room_ScrollView) {
              _this2.room_ScrollView.setData(msg.TableInfos);
              _this2.room_ScrollView.refresh();
            }
          });
          this.getRoomInfo();
          this.schedule(this.getRoomInfo, 5.0);
        };
        _proto.OnEventGameShow = function OnEventGameShow() {
          //        // this.scheduleOnce(() => {
          //        //     if (NetManager.instance._connect == true) {
          //        //         this.EmitEvent(BaccaratDef.Event.ON_GAME_SHOW);
          //        //         BMsgSender.Send_EnterRoom();
          //        //         //! 获取即使记录
          //        //         BMsgSender.Send_History();
          //        //     }
          //        // }, 0.1);
        };
        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {
          //        //监听按钮事件 如：关闭弹窗
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          //        //按钮事件
          EventManager.instance.off(ConfigManager.instance.protocolSd.createRoom, this.showcreate, this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(ConfigManager.instance.protocolHall.hallInfo, this.recv, this);
          this.unschedule(this.getRoomInfo);
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        }
        //    //! 收到进入房间消息
        ;

        _proto.OnRecvEnterRoom = function OnRecvEnterRoom(msg, enterRoom) {
          gts.Debug.Log("===OnRecvEnterRoom==" + JSON.stringify(msg));
        };
        _proto.initHall = function initHall() {
          this.userGold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
          Common.nickNameFormatL(this.userName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var headiconName = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          //        //头像
          Common.getHead(headiconName, this.head.node);
          var grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          if (grade) {
            var Sprite_level = this.userName.node.parent.getChildByName("headLevel");
            Common.setGradeCode(Sprite_level, parseInt(grade));
          }
        };
        _proto.initEvent = function initEvent() {
          //        //监听按钮事件 如：关闭弹窗
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          //        //按钮事件
          EventManager.instance.on(ConfigManager.instance.protocolSd.createRoom, this.showcreate, this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(ConfigManager.instance.protocolHall.hallInfo, this.recv, this);
        };
        _proto.recv = function recv(data) {
          if (typeof data.Data.bjlRebateConf != "undefined") {
            this.txt_odd.node.parent.active = data.Data.bjlRebateConf > 0;
            this.txt_odd.string = data.Data.bjlRebateConf / 10 + "%";
          }
        };
        _proto.backHall = function backHall() {
          BMsgSender.Send_ExitRoom();
          console.time("bundle.onLoadHall");
          Common.showWait();
          //        //退到大厅
          Common.returnToHall(this, "BaccaratGame");
        };
        _proto.showcreate = function showcreate() {
          Common.showTip(i18n.lang["10009"]);
        };
        _proto.onClickRank = function onClickRank() {
          //        // Common.showTip(i18n.lang["10009"]);
          GUtil.openRank("bjl");
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickHelp = function onClickHelp() {
          var bundle = assetManager.bundles.get(GameDef.Game.Baccarat);
          bundle.load("prefab/ui_helper", Prefab, function (err, prefab) {
            var Canvas = director.getScene().getChildByName("Canvas");
            var node = instantiate(prefab);
            Canvas.addChild(node);
          });
        };
        _proto.onClickRecord = function onClickRecord() {
          var bundle = assetManager.bundles.get(GameDef.Game.Baccarat);
          bundle.load("prefab/ui_records", Prefab, function (err, prefab) {
            var Canvas = director.getScene().getChildByName("Canvas");
            var node = instantiate(prefab);
            Canvas.addChild(node);
          });
        };
        _proto.onClickAutoEnter = function onClickAutoEnter() {
          //        // NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.audoEnter, {});

          //@ts-ignore
          var room_ScrollView = this.room_ScrollView.node.getComponent(ScrollView);
          if (!room_ScrollView.content.children.length) {
            this.getRoomInfo();
            return;
          }
          Common.showWait();
          var randRoom = room_ScrollView.content.children[Math.floor(Math.random() * 1000) % room_ScrollView.content.children.length];
          var roomItemInfo = randRoom.getComponent("BaccaratRoomItemInfo");
          BaccaratDataMgr.ins.curTableID = roomItemInfo.Label_roomID.string;
          EventManager.instance.emit(BaccaratDef.Event.onLoadGame);
        };
        _proto.onClickCreateRoom = function onClickCreateRoom() {
          Common.showTip(i18n.lang.devTip);
        };
        _proto.disconnect = function disconnect() {
          //        //断线
          Common.showNetTips();
        };
        _proto.gameShow = function gameShow() {
          this.scheduleOnce(function () {
            if (NetManager.instance._connect == true) {
              NetManager.instance.waitServiceSendData(); // 监听推送
              NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
            }
          }, 0.1);
        }
        //    /**
        //     * 获取房间信息
        //     */
        ;

        _proto.getRoomInfo = function getRoomInfo() {
          NetManager.instance.sendOnlineData(BaccaratMsg.MsgID.HD_getRoomInfo2, {});
        };
        _createClass(BaccaratHall, [{
          key: "autoReListenMsg",
          get: function get() {
            return true;
          }
        }]);
        return BaccaratHall;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userGold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "room_ScrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "roomItem", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_odd", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "label_Mask", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btn_chongZhi", [_dec10], {
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

System.register("chunks:///_virtual/BaccaratMsg.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('BaccaratMsg', void 0);
      cclegacy._RF.push({}, "89180sT4SBCg7aSPgzLYZWa", "BaccaratMsg", undefined);
      var BaccaratMsg;
      (function (_BaccaratMsg) {
        var MsgID = /*#__PURE__*/function (MsgID) {
          MsgID["NONE"] = "";
          MsgID["S2C_ENTER_ROOM"] = "bjl/HD_enterRoom";
          MsgID["C2S_ENTER_ROOM"] = "bjl/HD_enterRoom";
          MsgID["S2C_BET"] = "bjl/HD_bet";
          MsgID["C2S_BET"] = "bjl/HD_bet";
          MsgID["S2C_BAORDCAST_BET"] = "bjl/HD_XiaZhu";
          MsgID["S2C_HISTORY"] = "bjl/HD_getHistory";
          MsgID["C2S_HISTORY"] = "bjl/HD_getHistory";
          MsgID["S2C_PLAYER_ENTER"] = "bjl/HD_Enter";
          MsgID["S2C_PLAYER_LEAVE"] = "bjl/HD_playerLeave";
          MsgID["C2S_PLAYER_LEAVE"] = "bjl/HD_playerLeave";
          MsgID["S2c_CHANGE_STATUS"] = "bjl/HD_changeState";
          MsgID["S2C_REFRESH_STATE"] = "bjl/HD_getState";
          MsgID["C2S_GET_RECORDS"] = "bjl/HD_getRecord";
          MsgID["S2C_GET_RECORDS"] = "bjl/HD_getRecord";
          MsgID["C2S_GET_CHAT"] = "bjl/HD_SendShortCut";
          MsgID["S2C_GET_CHAT"] = "bjl/HD_SendShortCut";
          MsgID["HD_getRoomInfo"] = "bjl/HD_getRoomInfo";
          MsgID["HD_getRoomInfo2"] = "bjl/HD_getRoomInfo2";
          MsgID["HD_OpenResult"] = "bjl/HD_OpenResult";
          MsgID["S2C_EXIT"] = "bjl/HD_QuitTable";
          MsgID["HD_getAllPlayer"] = "bjl/HD_getAllPlayer";
          return MsgID;
        }({});
        _BaccaratMsg.MsgID = MsgID; // //路单记录
        // export interface IPathRecord {
        //     Result: number; //开牌结果，闲赢：0，庄赢：1，和：2
        //     BankerPair: boolean;
        //     PlayerPair: boolean;
        //     BankerDian: number;
        //     PlayerDian: number;
        // }
        //桌子信息
        //房间信息
        // export interface IBetInfo{
        //     pos:number
        //     betCount: number
        // }
        //! 进入房间
        //! 发送消息定义
        //! 请求获得记录
        //! 请求下注
        //! 服务器返回下注信息
        // export enum Result {
        //     PLAYER = 0,
        //     BANKER,
        //     TIE,
        // }
        //! 服务器返回历史数据
        //! 服务器返回玩家下注记录
      })(BaccaratMsg || (BaccaratMsg = exports('BaccaratMsg', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratRoomItemInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AutoChangeParent.ts', './EventManager.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './RoadListDef.ts', './UIBigEyeRoad.ts', './UIBigRoad.ts', './UICockroach.ts', './UISmallRoad.ts', './BUIDishRoad.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Node, sp, Label, Sprite, SpriteFrame, CCInteger, UIOpacity, assetManager, Component, GameDef, AutoChangeParent, EventManager, BaccaratDataMgr, BaccaratDef, RoadListDef, UIBigEyeRoad, UIBigRoad, UICockroach, UISmallRoad, BUIDishRoad, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      sp = module.sp;
      Label = module.Label;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      CCInteger = module.CCInteger;
      UIOpacity = module.UIOpacity;
      assetManager = module.assetManager;
      Component = module.Component;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      RoadListDef = module.RoadListDef;
    }, function (module) {
      UIBigEyeRoad = module.default;
    }, function (module) {
      UIBigRoad = module.default;
    }, function (module) {
      UICockroach = module.default;
    }, function (module) {
      UISmallRoad = module.default;
    }, function (module) {
      BUIDishRoad = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "0f4efwMtP1MaJD8VDNytH5s", "BaccaratRoomItemInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var BaccaratRoomItemInfo = exports('default', (_dec = ccclass("BaccaratRoomItemInfo"), _dec2 = menu("game/Baccarat/BaccaratRoomItemInfo"), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(BUIDishRoad), _dec14 = property({
        displayName: "大路",
        type: UIBigRoad
      }), _dec15 = property({
        displayName: "小路",
        type: UISmallRoad
      }), _dec16 = property({
        displayName: "大眼路",
        type: UIBigEyeRoad
      }), _dec17 = property({
        displayName: "蟑螂路",
        type: UICockroach
      }), _dec18 = property(Node), _dec19 = property(Sprite), _dec20 = property(SpriteFrame), _dec21 = property({
        displayName: "统计局数",
        type: CCInteger
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaccaratRoomItemInfo, _Component);
        function BaccaratRoomItemInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Button_switch_dishRoad", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spineBanker", _descriptor2, _assertThisInitialized(_this));
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_labels", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_roomID", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalBets", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_players", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bankerNum", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_playerNum", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_tieNum", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiDishRoad", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiBigLoad", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiSmallRoad", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiBigEyeRoad", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiCockroach", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_md5", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_tag", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrameTag", _descriptor18, _assertThisInitialized(_this));
          _this._gtItem = null;
          _initializerDefineProperty(_this, "totalCount", _descriptor19, _assertThisInitialized(_this));
          _this._type = 0;
          return _this;
        }
        var _proto = BaccaratRoomItemInfo.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          this.Button_switch_dishRoad.on("click", function (event) {
            _this2._type = (_this2._type + 1) % 2;
            if (_this2.uiDishRoad) {
              _this2.uiDishRoad.setType(_this2._type);
            }
          });
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click");
        };
        _proto.start = function start() {
          var _this3 = this;
          //        //将label节点绑定到label root 并跟随原来节点
          AutoChangeParent.Bind(this.Node_labels, this.content_label, true).OnUpdateNotify(function (dt) {
            _this3.Node_labels.getComponent(UIOpacity).opacity = _this3.node.getComponent(UIOpacity).opacity;
            _this3.Node_labels.active = _this3.node.active;
            _this3.Node_labels.scale = _this3.node.scale;
          }, this);

          //        //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            //            //加载荷官
            var bundle = assetManager.bundles.get(GameDef.Game.Baccarat);
            gts.Debug.Log("=== this.item.itemIndex==" + this.item.itemIndex);
            var index = this.item.itemIndex % 3;
            if (index != 0) {
              bundle.load("spine-ani/heguan/heguan" + (12 + index), sp.SkeletonData, function (err, skeletonData) {
                if (!err && skeletonData) {
                  _this3.spineBanker.skeletonData = skeletonData;
                  _this3.spineBanker.setAnimation(0, "emoji", true);
                }
              });
            }
            this.item.OnDataChangedNotify(function () {
              _this3.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this3.node.active = false;
              _this3.Node_labels.active = false;
            }, this);
            this.UpdateUI();
          }
        }
        //    //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var tmpdata = this.item.data;
          if (!tmpdata || tmpdata === undefined) {
            this.node.active = false;
            this.Node_labels.active = false;
            return;
          }
          this.Label_roomID.string = "" + tmpdata.TableID;
          this.Label_totalBets.string = Common.ChangeMoneyShow(tmpdata.CurBetAmount, 2);
          this.Label_players.string = "" + tmpdata.PlayerNum;
          var bankNum = 0;
          var playerNum = 0;
          var tieNum = 0;
          var iStart = tmpdata.Records.length > this.totalCount ? tmpdata.Records.length - this.totalCount : 0;
          tmpdata.Records = tmpdata.Records.slice(iStart);
          for (var _iterator = _createForOfIteratorHelperLoose(tmpdata.Records), _step; !(_step = _iterator()).done;) {
            var recordInfo = _step.value;
            recordInfo.result == 2 ? tieNum++ : recordInfo.result == 1 ? bankNum++ : playerNum++;
          }
          this.Label_bankerNum.string = "" + bankNum;
          this.Label_playerNum.string = "" + playerNum;
          this.Label_tieNum.string = "" + tieNum;
          this.node_md5.active = tmpdata.IsMd5Table;
          this.node_tag.spriteFrame = this.arrSpriteFrameTag[this.item.itemIndex % 3];
          this.UpdateRecord(tmpdata.Records);
        };
        _proto.UpdateRecord = function UpdateRecord(logs) {
          if (logs === void 0) {
            logs = null;
          }
          if (!logs) {
            logs = BaccaratDataMgr.ins.GetHistory(this.totalCount);
          }
          var values = {};
          var GetVal = function GetVal(val) {
            var elmt = values[val];
            if (!elmt) {
              elmt = {
                count: 0,
                percent: 0
              };
              values[val] = elmt;
            }
            return elmt;
          };
          for (var i = 0; i < logs.length; ++i) {
            var tmp = logs[i];
            var elmtA = GetVal(tmp.result);
            elmtA.count += 1;
            if (tmp.bankerPair) {
              var elmtBP = GetVal(BaccaratDef.AREA.BANKER_PAIR);
              elmtBP.count += 1;
            }
            if (tmp.playerPair) {
              var elmPP = GetVal(BaccaratDef.AREA.PLAYER_PAIR);
              elmPP.count += 1;
            }
          }
          var keys = Object.keys(values);
          for (var _i = 0; _i < keys.length; ++_i) {
            var _tmp = values[keys[_i]];
            _tmp.percent = _tmp.count / logs.length * 100;
          }
          if (this.uiDishRoad) {
            this.uiDishRoad.SetData(logs, true);
          }
          var gameResultData = [];
          for (var _i2 = 0; _i2 < logs.length; ++_i2) {
            var resultData = new RoadListDef.Result();
            var _tmp2 = logs[_i2];
            resultData.Banker = _tmp2.bankerDian > _tmp2.playerDian;
            resultData.BankerPair = _tmp2.bankerPair;
            resultData.Dragon = false;
            resultData.Player = _tmp2.bankerDian < _tmp2.playerDian;
            resultData.PlayerPair = _tmp2.playerPair;
            resultData.Tie = _tmp2.bankerDian === _tmp2.playerDian;
            resultData.Tiger = false;
            gameResultData.push(resultData);
          }
          var bigRoadDic = [];
          var isFirstTie = [];
          var roadCellData = RoadListDef.Util.parseBigRoadDatas(gameResultData, bigRoadDic, isFirstTie);
          if (this.uiBigLoad) {
            this.uiBigLoad.UpdateUI(roadCellData, true);
          }
          if (this.uiSmallRoad) {
            this.uiSmallRoad.UpdateUI(roadCellData, bigRoadDic, true);
          }
          if (this.uiBigEyeRoad) {
            this.uiBigEyeRoad.UpdateUI(roadCellData, bigRoadDic, true);
          }
          if (this.uiCockroach) {
            this.uiCockroach.UpdateUI(roadCellData, bigRoadDic, true);
          }
        };
        _proto.onClickRoom = function onClickRoom(event) {
          BaccaratDataMgr.ins.curTableID = this.Label_roomID.string;
          EventManager.instance.emit(BaccaratDef.Event.onLoadGame);
        };
        _createClass(BaccaratRoomItemInfo, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return BaccaratRoomItemInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Button_switch_dishRoad", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spineBanker", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content_label", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_labels", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_roomID", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalBets", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_players", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_bankerNum", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_playerNum", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Label_tieNum", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "uiDishRoad", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "uiBigLoad", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "uiSmallRoad", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "uiBigEyeRoad", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "uiCockroach", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_md5", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_tag", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "arrSpriteFrameTag", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "totalCount", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 72;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, instantiate, UIOpacity, tween, Component, GameDef, ConfigManager, EventManager, NetManager, ViewManager, BaccaratDataMgr, BaccaratDef, Common;
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
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
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
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "27148g/maZGxruFt2LqTwgH", "BaccaratScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BaccaratScene = exports('default', (_dec = ccclass("BaccaratScene"), _dec2 = menu("game/Baccarat/BaccaratScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaccaratScene, _Component);
        function BaccaratScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_hall", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor3, _assertThisInitialized(_this));
          _this._node_hall = null;
          _this._node_Game = null;
          _this._bundle = null;
          return _this;
        }
        var _proto = BaccaratScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          this.preload();
          this.onLoadHall();
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.longInfo, this.onCheckIn, this);
        };
        _proto.preload = function preload() {
          this._bundle = assetManager.bundles.get(GameDef.Game.Baccarat);
          if (this._bundle) {
            this._bundle.preloadDir("prefab");
          }
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(BaccaratDef.Event.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(BaccaratDef.Event.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(BaccaratDef.Event.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(BaccaratDef.Event.onLoadGame, this.onLoadGame, this);
        }
        //    //长龙直接进入游戏
        ;

        _proto.onCheckIn = function onCheckIn(longInfo) {
          BaccaratDataMgr.ins.curTableID = longInfo.TableID;
          this.onLoadGame();
        };
        _proto.onDestroy = function onDestroy() {
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.longInfo, this.onCheckIn, this);
        };
        _proto.onLoadHall = function onLoadHall() {
          var _this2 = this;
          console.time("bundle.onLoadHall");
          Common.showWait();
          if (!this.prefab_hall) {
            this._bundle.load("prefab/ui_hall", Prefab, function (cur, total) {}, function (err, prefab) {
              _this2.prefab_hall = prefab;
              _this2.showHall();
            });
          } else {
            this.showHall();
          }
        };
        _proto.showHall = function showHall() {
          var _this3 = this;
          if (this.prefab_hall) {
            if (!this._node_hall) {
              this._node_hall = instantiate(this.prefab_hall);
              this.node.addChild(this._node_hall);
            }
            this._node_hall.getComponent(UIOpacity).opacity = 0;
            tween(this._node_hall.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).call(function () {
              if (_this3.firstNode) {
                _this3.firstNode.removeFromParent();
                _this3.firstNode.destroy();
                _this3.firstNode = null;
              }
              if (_this3._node_Game) {
                _this3._node_Game.removeFromParent();
                _this3._node_Game.destroy();
                _this3._node_Game = null;
              }
            }).start();
            Common.closeWait();
            console.timeEnd("bundle.onLoadHall");
          }
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this4 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            this._bundle.load("prefab/ui_game", Prefab, function (cur, total) {}, function (err, prefab) {
              _this4.prefab_game = prefab;
              _this4.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this5 = this;
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              this._node_Game.getComponent(UIOpacity).opacity = 0;
              fadeInTimes = 0.15;
            }
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              if (_this5._node_hall) {
                _this5._node_hall.removeFromParent();
                _this5._node_hall.destroy();
                _this5._node_hall = null;
              }
              Common.closeWait();
            }).start();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return BaccaratScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "firstNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_hall", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefab_game", [_dec5], {
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

System.register("chunks:///_virtual/BaccaratTableOpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './ProxyMgr.ts', './AutoEventNode.ts', './BtnArea.ts', './GUtil.ts', './UIClock.ts', './ViewManager.ts', './PlatformMgr.ts', './ChatProxy.ts', './BMsgSender.ts', './BPokerMgr.ts', './BSound.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './BaccaratMsg.ts', './Common.ts', './DataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, sp, Label, director, Sprite, assetManager, Tween, tween, v3, Vec3, i18n, GameDef, ProxyMgr, AutoEventNode, BtnArea, GUtil, UIClock, ViewManager, PlatformMgr, ChatProxy, ChatProxyEvent, BMsgSender, BPokerMgr, BSound, BaccaratDataMgr, BaccaratDef, BaccaratUtil, BaccaratMsg, Common, DataManager, UserKey;
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
      sp = module.sp;
      Label = module.Label;
      director = module.director;
      Sprite = module.Sprite;
      assetManager = module.assetManager;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Vec3 = module.Vec3;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      BtnArea = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      UIClock = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      PlatformMgr = module.default;
    }, function (module) {
      ChatProxy = module.default;
      ChatProxyEvent = module.ChatProxyEvent;
    }, function (module) {
      BMsgSender = module.default;
    }, function (module) {
      BPokerMgr = module.default;
    }, function (module) {
      BSound = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
      BaccaratUtil = module.BaccaratUtil;
    }, function (module) {
      BaccaratMsg = module.BaccaratMsg;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24;
      cclegacy._RF.push({}, "067fbC1yVROVb3U8b6orXCQ", "BaccaratTableOpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratTableOpt = exports('default', (_dec = ccclass("BaccaratTableOpt"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(UIClock), _dec10 = property(BPokerMgr), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property([Label]), _dec15 = property([Label]), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property([Label]), _dec22 = property(Label), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(BaccaratTableOpt, _AutoEventNode);
        function BaccaratTableOpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "areaBtnParent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flagPlayerWin", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flagBankerWin", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flagTie", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spAniWin", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spAniGirl", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spAniStatusTip", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clock", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pokerMgr", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labPtPlayer", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labPtBanker", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "areaMaskNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labsTotalMoney", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labsSelfMoney", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labSelfTotalBet", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labTabMax", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labTabMin", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnDouble", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnCopyBet", _descriptor19, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "oddList", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_md5Key", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_md5Result", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_md5Bg", _descriptor24, _assertThisInitialized(_this));
          _this.doubleLock = false;
          _this.copyLock = false;
          _this.original = "";
          _this.ciphertext = "";
          //    //! 当前桌上牌信息
          _this._cardInfo = null;
          //    //! 当前赢钱的区域
          _this._winAreas = [];
          _this._useTags = ["p_0", "b_0", "p_1", "b_1", "p_2", "b_2"];
          _this._aniTags = ["fapai2", "fapai4", "fapai3", "fapai5", "fapai1", "fapai6"];
          _this._cardidx = 0;
          _this._onSendCardStatus = false;
          _this._openedGameNo = null;
          _this._cardAnimationVersion = 0;
          _this._ready2next = {
            card: false,
            ani: false
          };
          _this._updateProfits = {};
          _this._delayRunner = null;
          _this._betCountdown = null;
          _this._animationTimeScale = 1;
          _this._curSetStatusMsg = BaccaratMsg.MsgID.NONE;
          //    //! 赢钱玩家
          _this._winnerMap = {};
          _this._winnerIdxs = [];
          _this._area2btn = {};
          return _this;
        }
        var _proto = BaccaratTableOpt.prototype;
        //    // onLoad () {}
        _proto.PlaySpAni = function PlaySpAni(sp, ani, loop, trackIdx) {
          if (loop === void 0) {
            loop = false;
          }
          if (trackIdx === void 0) {
            trackIdx = 0;
          }
          if (!sp) {
            return;
          }
          sp.node.active = true;
          sp.setAnimation(trackIdx, ani, loop);
        };
        _proto.AddProfit = function AddProfit(uid, money) {
          var order = BaccaratDataMgr.ins.IdxWithUid(uid);
          if (uid == BaccaratDataMgr.myUid) {
            this._updateProfits[uid] = money;
          } else if (order < BaccaratDef.TOP_PLAYER_CNT) {
            this._updateProfits[uid] = money;
            //            // gts.Debug.Log(`#输赢信息: uid:${uid}, money:${money}`);
          } else {
            var tmp = this._updateProfits[BaccaratDef.UID_OTHER_PLAYER];
            if (!tmp) {
              this._updateProfits[BaccaratDef.UID_OTHER_PLAYER] = money;
            } else {
              this._updateProfits[BaccaratDef.UID_OTHER_PLAYER] += money;
            }
          }
        }
        //    //! 0,2,4
        //    //! 1,3,5
        ;

        _proto.GetCardValue = function GetCardValue() {
          var val = 0;
          if (this._cardidx % 2 === 0) {
            var idx = this._cardidx / 2;
            val = this._cardInfo.playerCards[idx];
          } else {
            var _idx = (this._cardidx - 1) / 2;
            val = this._cardInfo.bankerCards[_idx];
          }
          return val;
        };
        _proto.ClearBetCountdown = function ClearBetCountdown() {
          if (this._betCountdown) {
            this.unschedule(this._betCountdown);
            this._betCountdown = null;
          }
        };
        _proto.SetTimeScale = function SetTimeScale(scale) {
          this._animationTimeScale = scale;
          if (this.pokerMgr) {
            this.pokerMgr.timeScale = scale;
          }
          director.getScheduler().setTimeScale(scale);
          if (this.spAniGirl) {
            this.spAniGirl.timeScale = scale;
          }
        };
        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
          this.SetTimeScale(1);
          ProxyMgr.close(this);
        };
        _proto.BtnGray = function BtnGray(btn, gray) {
          // gts.UI.Gray(btn, gray);
          // Common.changeNodeEffect(btn, gray);
          btn.getComponent(Sprite).grayscale = gray;
          btn["__allow_opt"] = !gray;
        };
        _proto.start = function start() {
          var _this2 = this;
          // let vSize = cc.view.getDesignResolutionSize();
          // this.node.scale = cc.v3(vSize.width / 1334, vSize.height / 750);

          var bundle = assetManager.bundles.get(GameDef.Game.Baccarat);
          var index = BaccaratDef.getHuguanIndex(BaccaratDataMgr.ins.curTableID);
          if (index != 12) {
            bundle.load("spine-ani/heguan/heguan" + index, sp.SkeletonData, function (err, skeletonData) {
              if (!err && skeletonData) {
                _this2.spAniGirl.skeletonData = skeletonData;
                _this2.spAniGirl.setAnimation(0, "idle", true);
              }
            });
          }
          this._delayRunner = new Node("delay_runner");
          this._delayRunner.parent = this.node;
          gts.UI.OnClick(this.areaMaskNode, function () {
            //                // gts.Debug.Log(`#当前状态: ${BaccaratDataMgr.ins.curTabStatus}`);
          }, this);
          GUtil.NodeVisible(this.areaMaskNode, BaccaratDataMgr.ins.isTest ? false : true);
          _AutoEventNode.prototype.start.call(this);
          GUtil.NodeVisible(this.spAniWin ? this.spAniWin.node : null, false);
          GUtil.NodeVisible(this.spAniStatusTip ? this.spAniStatusTip.node : null, false);
          this.BindAreaBtns();
          this.UpdateSelfTotalBet();
          this.OnEvent(BaccaratDef.Event.TIP_WIN_AREA, this.ShowWinFlag, this);
          this.BtnGray(this.btnCopyBet, true);
          this.BtnGray(this.btnDouble, true);
          gts.UI.SetLab(this.labPtBanker, "");
          gts.UI.SetLab(this.labPtPlayer, "");
          gts.UI.OnClick(this.btnCopyBet, function () {
            if (!_this2.btnCopyBet["__allow_opt"]) {
              return;
            }
            if (_this2.clock.leftTime() <= 3) {
              //                    //下注锁定-当前不能下注
              Common.showTip(i18n.lang.disableBet);
              return;
            }
            var betInfo = BaccaratDataMgr.ins.oldBetInfo;
            var keys = Object.keys(betInfo);
            BSound.SE_ChipIn();
            for (var i = 0; i < keys.length; ++i) {
              var pos = Number(keys[i]);
              var val = betInfo[pos];
              if (val > 0) {
                BMsgSender.Send_BetIn({
                  pos: pos,
                  coin: val
                });
              }
            }
            _this2.BtnGray(_this2.btnCopyBet, true);
            _this2.BtnGray(_this2.btnDouble, true);
            _this2.copyLock = true;
            _this2.doubleLock = true;
            _this2.scheduleOnce(function () {
              _this2.BtnGray(_this2.btnDouble, false);
              _this2.doubleLock = false;
              if (_this2.copyLock) {
                _this2.BtnGray(_this2.btnCopyBet, false);
                _this2.copyLock = false;
              }
            }, 2);
          }, this);
          gts.UI.OnClick(this.btnDouble, function () {
            if (!_this2.btnDouble["__allow_opt"]) {
              return;
            }
            if (_this2.clock.leftTime() <= 3) {
              //                    //下注锁定-当前不能下注
              Common.showTip(i18n.lang.disableBet);
              return;
            }
            var allow = true;
            var info = BaccaratDataMgr.ins.selfBetInfo;
            var keysInfo = Object.keys(info);
            var bets = {};
            for (var i = 0; i < keysInfo.length; ++i) {
              allow = false;
              var pos = Number(keysInfo[i]);
              if (!bets[pos]) {
                bets[pos] = 0;
              }
              bets[pos] += info[keysInfo[i]];
              //                    // BMsgSender.Send_BetIn({ pos: pos, coin: info[keysInfo[i]] });
            }

            BSound.SE_ChipIn();
            if (allow) {
              var betInfo = BaccaratDataMgr.ins.oldBetInfo;
              var keys = Object.keys(betInfo);
              for (var _i = 0; _i < keys.length; ++_i) {
                var _pos = Number(keys[_i]);
                var val = betInfo[_pos];
                if (!bets[_pos]) {
                  bets[_pos] = 0;
                }
                bets[_pos] += val * 2;
                //                        // BMsgSender.Send_BetIn({ pos: pos, coin: val * 2 });
              }
            }

            for (var _key2 in bets) {
              var _pos2 = Number(_key2);
              if (bets[_key2] > 0) BMsgSender.Send_BetIn({
                pos: _pos2,
                coin: bets[_key2]
              });
            }
            if (_this2.btnCopyBet["__allow_opt"]) {
              _this2.BtnGray(_this2.btnCopyBet, true);
              _this2.copyLock = true;
            }
            //                // this.BtnGray(this.btnCopyBet, true);
            _this2.BtnGray(_this2.btnDouble, true);
            _this2.doubleLock = true;
            _this2.scheduleOnce(function () {
              _this2.BtnGray(_this2.btnDouble, false);
              _this2.doubleLock = false;
              if (_this2.copyLock) {
                _this2.BtnGray(_this2.btnCopyBet, false);
                _this2.copyLock = false;
              }
            }, 2);
          }, this);
          if (this.spAniStatusTip) {
            this.spAniStatusTip.setCompleteListener(function () {
              _this2.spAniStatusTip.node.active = false;
              _this2.OnTipFinished();
            });
          }

          //        //! spine动画完成监听
          if (this.spAniGirl) {
            this.spAniGirl.setCompleteListener(function (trackEntry) {
              var name = trackEntry.animation ? trackEntry.animation.name : "";
              //                // gts.Debug.Log(`# on finished : ${name}`);
              if (name.startsWith(BaccaratDef.SpAniName.SEND_CARD)) {
                _this2._ready2next.ani = true;
                if (_this2._cardidx <= 3) {
                  if (!_this2.Try2SendNextCard()) {
                    _this2.PlaySpAni(_this2.spAniGirl, BaccaratDef.SpAniName.IDLE, true);
                  }
                } else if (_this2._cardidx >= 4) {
                  //                        // gts.Debug.Log(`# 玩家开补牌`);
                  _this2.pokerMgr.OpenCard(_this2._cardidx, 0.1, function () {
                    //                                // gts.Debug.Log(`# 玩家补牌完成, ${this._cardidx}`);
                    if (_this2._cardidx === 4) {
                      //                                    //! TODO: 更新玩家点数
                      gts.UI.SetLab(_this2.labPtPlayer, _this2._cardInfo.playerDian);
                    } else if (_this2._cardidx === 5) {
                      gts.UI.SetLab(_this2.labPtBanker, _this2._cardInfo.bankerDian);
                    }
                    _this2.DoAddCard();
                  }, _this2);
                }
              } else if (name === BaccaratDef.SpAniName.RIGHT || name === BaccaratDef.SpAniName.LEFT || name === BaccaratDef.SpAniName.PLYAER_WIN || name === BaccaratDef.SpAniName.BANKER_WIN || name === BaccaratDef.SpAniName.TIE || name === BaccaratDef.SpAniName.GET_CARDS) {
                _this2.PlaySpAni(_this2.spAniGirl, BaccaratDef.SpAniName.IDLE, true);
              }
            });

            //            // this.spAniGirl.tra
            this.spAniGirl.setEventListener(function (trackEntry, event) {
              if (event.data.name === "fapai1" && _this2._onSendCardStatus) {
                //                    // gts.Debug.Log(`# on event: ${event.data.name}`);
                var tmp = _this2._useTags[_this2._cardidx];
                var val = _this2.GetCardValue();
                //                    // gts.Debug.Log(`# 发牌:  ${val} to: ${tmp}`);
                _this2.pokerMgr.DoSendCard("s" + tmp, tmp, 0.1, _this2._cardidx, val, function () {
                  _this2._ready2next.card = true;
                  _this2.Try2SendNextCard();
                }, _this2);
              }
            });
          }
          this.OnEvent(BaccaratDef.Event.SEND_CARDS, function (data) {
            var msg = data.Data;
            _this2.StartSendCards(msg);
            //            // this._cardVals.splice(0, this._cardVals.length, ...cards);
          });

          this.OnEvent(BaccaratMsg.MsgID.S2C_ENTER_ROOM, function (data) {
            var msg = data.Data;
            _this2.SetStatus(msg, BaccaratMsg.MsgID.S2C_ENTER_ROOM);
            _this2.EmitEvent(BaccaratDef.Event.UPDATE_SELF_INFOS);
            _this2.node_md5Bg.active = msg.isMd5Table;
          });
          this.OnEvent(BaccaratMsg.MsgID.S2c_CHANGE_STATUS, function (data) {
            var msg = data.Data;
            _this2.SetStatus(msg, BaccaratMsg.MsgID.S2c_CHANGE_STATUS);
          });
          this.OnEvent(BaccaratMsg.MsgID.HD_OpenResult, function (data) {
            var msg = data.Data;
            for (var i = 0; msg.playerInfos && i < msg.playerInfos.length; ++i) {
              var p = msg.playerInfos[i];
              _this2.AddProfit(p.uid, p.score);
            }
          });
          this.OnEvent(BaccaratMsg.MsgID.S2C_REFRESH_STATE, function (data) {
            var msg = data.Data;
            _this2.SetStatus(msg, BaccaratMsg.MsgID.S2C_REFRESH_STATE);
          });
          this.OnEvent(BaccaratMsg.MsgID.S2C_BET, function (data) {
            var msg = data.Data;
            //            // gts.Debug.Log(`# 百家乐: 玩家下注 , ${JSON.stringify(msg)}`);
            if (data.Code !== 0) {
              _this2.EmitEvent(BaccaratDef.Event.FLY_TIP, i18n.errTip(data.Code));
              return;
            }
            BSound.SE_ChipIn();
            for (var i = 0; i < msg.bets.length; ++i) {
              var tmp = msg.bets[i];
              if (_this2.OnBetInfo(tmp)) {
                BaccaratDataMgr.ins.AddSelfBet(tmp.pos, tmp.coin);
                _this2.UpdateSelfBetLabs();
              }
              gts.Debug.Log("===BaccaratDataMgr.ins.myInfo.golds===" + BaccaratDataMgr.ins.myInfo.golds + "==tmp.playerGolds===" + tmp.playerGolds);

              // BaccaratDataMgr.ins.SetPlayerGold(tmp.uid, tmp.playerGolds);

              BaccaratDataMgr.ins.myInfo.golds = tmp.playerGolds;
              DataManager.instance.setUserDataForKey(UserKey.GOLD, tmp.playerGolds);
            }
            _this2.EmitEvent(BaccaratDef.Event.UPDATE_AVATAR, BaccaratDataMgr.ins.myInfo.uid);
            for (var _i2 = 0; _i2 < msg.betInfos.length; ++_i2) {
              var money = msg.betInfos[_i2];
              _this2.SetLabTotalMoney(_this2.labsTotalMoney[_i2], money);
            }
            _this2.UpdateSelfTotalBet();
          });
          this.OnEvent(BaccaratDef.Event.ALL_CARDS_2_GIRL, function () {
            _this2.AllCards2Gril();
          });
          this.OnEvent(BaccaratMsg.MsgID.S2C_BAORDCAST_BET, function (data) {
            var msg = data.Data;
            //            // gts.Debug.Log(`## 百家乐: 广播玩家下注 , ${JSON.stringify(msg)}`);
            if (data.Code !== 0) {
              _this2.EmitEvent(BaccaratDef.Event.FLY_TIP, i18n.errTip(data.Code));
              return;
            }
            BSound.SE_ChipIn();
            for (var i = 0; msg.bets && i < msg.bets.length; ++i) {
              var tmp = msg.bets[i];
              _this2.OnBetInfo(tmp);

              // if (tmp.uid === BaccaratDataMgr.myUid) {
              //     gts.Debug.Log(
              //         `===BaccaratDataMgr.ins.myInfo.golds=S2C_BAORDCAST_BET==${BaccaratDataMgr.ins.myInfo.golds}==tmp.playerGolds===${tmp.playerGolds}`
              //     );
              // }

              if (BaccaratDataMgr.ins.SetPlayerGold(tmp.uid, tmp.playerGolds)) {
                _this2.EmitEvent(BaccaratDef.Event.UPDATE_AVATAR, tmp.uid);
              }
            }
            for (var _i3 = 0; _i3 < msg.betInfos.length; ++_i3) {
              var money = msg.betInfos[_i3];
              _this2.SetLabTotalMoney(_this2.labsTotalMoney[_i3], money);
            }
          });
          ChatProxy.on(ChatProxyEvent.RECV_MSG, function (data) {
            var info = data.msg;
            if (info.GroupId != "bjl" + BaccaratDataMgr.ins.curTableID) {
              return;
            }
            var idx = 100;
            if (info.FromUserId === BaccaratDataMgr.myUid) {
              idx = -1;
            } else {
              var players = BaccaratDataMgr.ins.players;
              for (var i = 0; i < players.length && i < BaccaratDef.TOP_PLAYER_CNT; ++i) {
                if (players[i].uid === info.FromUserId) {
                  idx = i;
                }
              }
            }
            var isOtherPlayer = idx < BaccaratDef.TOP_PLAYER_CNT ? false : true;
            _this2.EmitEvent(BaccaratDef.Event.SHOW_CHAT, {
              datainfo: info,
              otherPlayer: isOtherPlayer
            });
          }, this);

          //        // "bjl", this, BaccaratDataMgr.ins.curTableID

          //        //! 后台返回后清理桌面
          this.OnEvent(BaccaratDef.Event.ON_GAME_SHOW, this.ResetTable);
        };
        _proto.ResetTable = function ResetTable() {
          this._cardAnimationVersion++;
          this.ClearBetCountdown();
          // 取消旧动画会一并取消其倍速恢复回调，必须在这里恢复全局计时。
          this.SetTimeScale(1);
          this._onSendCardStatus = false;
          this.pokerMgr.ResetAllCards();
          this.clock.Close();
          Tween.stopAllByTarget(this._delayRunner);
          this.PlaySpAni(this.spAniGirl, BaccaratDef.SpAniName.IDLE, true);
          this.ShowWinFlag(BaccaratDef.AREA.CLOSE);
          BaccaratDataMgr.ins.ClearSelfBet();
          this.doubleLock = false;
          this.copyLock = false;
        };
        _proto.UpdateSelfBetLabs = function UpdateSelfBetLabs() {
          var betInfo = BaccaratDataMgr.ins.selfBetInfo;
          var totalBet = 0;
          for (var i = 0; i < BaccaratDef.AREA.TOTAL_COUNT; ++i) {
            var v = betInfo[i];
            totalBet += v ? v : 0;
            this.SetLabTotalMoney(this.labsSelfMoney[i], v ? v : 0);
          }
          if (totalBet > 0 && !this.doubleLock) {
            this.BtnGray(this.btnDouble, false);
          }
        }
        //    //! 荷官收牌
        ;

        _proto.AllCards2Gril = function AllCards2Gril() {
          var _this3 = this;
          this.PlaySpAni(this.spAniGirl, BaccaratDef.SpAniName.GET_CARDS, false);
          var delay = 0.7;
          var cnt = 3;
          for (var i = 0; i < cnt; ++i) {
            this.pokerMgr.HideCard(delay, "p_" + (cnt - i - 1));
            this.pokerMgr.HideCard(delay, "b_" + (cnt - i - 1));
            delay += 0.15;
          }
          this.ShowWinFlag(BaccaratDef.AREA.CLOSE);
          //        //! 关闭区域特效
          var keys = Object.keys(this._area2btn);
          this.PlayAreaEff(keys, false);
          gts.UI.SetLab(this.labPtBanker, "");
          gts.UI.SetLab(this.labPtPlayer, "");
          {
            var uids = Object.keys(this._updateProfits);
            for (var _i4 = 0; _i4 < uids.length; ++_i4) {
              var money = this._updateProfits[uids[_i4]];
              this.EmitEvent(BaccaratDef.Event.SHOW_PROFIT, {
                uid: uids[_i4],
                money: money
              });
            }
            this._updateProfits = {};
          }
          // this._delayRunner.runAction(
          //     cc.sequence(
          //         cc.delayTime(4),
          //         cc.callFunc(() => {
          //             //                    // BaccaratDataMgr.ins.SortPlayers();
          //             //                    // gts.Debug.Log(`#完成收牌输赢....`);
          //             this.EmitEvent(BaccaratDef.Event.UPDATE_SORT_PLAYERS);
          //         }, this)
          //     )
          // );
          tween(this._delayRunner).delay(4 / this._animationTimeScale).call(function () {
            _this3.EmitEvent(BaccaratDef.Event.UPDATE_SORT_PLAYERS);
          }).start();
        };
        _proto.UpdateSelfTotalBet = function UpdateSelfTotalBet() {
          this.SetLabTotalMoney(this.labSelfTotalBet, BaccaratDataMgr.ins.selfTotalBet);
        };
        _proto.SetLabTotalMoney = function SetLabTotalMoney(lab, money, aniDt) {
          if (aniDt === void 0) {
            aniDt = 1;
          }
          if (!lab) {
            return;
          }
          var ms = Common.ChangeMoneyShow(money, 2);
          if (aniDt > 0 && ms !== lab.string) {
            lab.node.scale = v3(1.5, 1.5, 1);
            Tween.stopAllByTarget(lab.node);
            //     lab.node.runAction(cc.scaleTo(1, 1).easing(cc.easeOut(3)));
            tween(lab.node).to(1, {
              scale: v3(1, 1, 1)
            }).start();
          }
          lab.string = ms;
        };
        _proto.OnBetInfo = function OnBetInfo(info) {
          var idx = 100;
          if (info.uid === BaccaratDataMgr.myUid) {
            idx = -1;
          } else {
            var players = BaccaratDataMgr.ins.players;
            for (var i = 0; i < players.length && i < BaccaratDef.TOP_PLAYER_CNT && idx === 100; ++i) {
              if (players[i].uid === info.uid) {
                idx = i;
              }
            }
          }
          var data = {
            pos: info.pos,
            from: idx,
            value: info.coin
          };
          this.EmitEvent(BaccaratDef.Event.SEND_CHIP, data);
          return idx < 0 ? true : false;
        };
        _proto.PlayAreaEff = function PlayAreaEff(keys, play) {
          for (var i = 0; i < keys.length; ++i) {
            var k = keys[i];
            var btn = this._area2btn[k];
            if (btn) {
              btn.PlayEff(play);
            }
          }
        }
        //    //! 当前阶段是否来自进入房间
        ;

        _proto.ResetWinner = function ResetWinner() {
          this._winnerMap = {};
          this._winnerIdxs = [];
          //        // let tmpkeys = Object.keys(this.winnerKeys);
          //        // for (let i = 0; i < tmpkeys.length; ++i) {
          //        //     this._winnerMap[tmpkeys[i]] = 0;
          //        // }
        };

        _proto.SaveWinner = function SaveWinner(players) {
          var tmpUID2Idx = {};
          var arr = BaccaratDataMgr.ins.players;
          for (var i = 0; i < arr.length; ++i) {
            var tmp = arr[i];
            tmpUID2Idx[tmp.uid] = i;
          }
          this.ResetWinner();
          for (var _i5 = 0; _i5 < players.length; ++_i5) {
            var _tmp = players[_i5];
            if (_tmp.uid === BaccaratDataMgr.myUid) {
              this._winnerMap[-1] = _tmp.score;
            } else {
              var idx = tmpUID2Idx[_tmp.uid];
              if (idx >= 0 && idx < 6) {
                if (!this._winnerMap[idx]) {
                  this._winnerMap[idx] = _tmp.score;
                } else {
                  this._winnerMap[idx] += _tmp.score;
                }
              } else {
                if (!this._winnerMap[100]) {
                  this._winnerMap[100] = _tmp.score;
                } else {
                  this._winnerMap[100] += _tmp.score;
                }
              }
            }
          }
          var keys = Object.keys(this._winnerMap);
          for (var _i6 = 0; _i6 < keys.length; ++_i6) {
            if (this._winnerMap[keys[_i6]]) {
              this._winnerIdxs.push(Number(keys[_i6]));
            }
          }

          //        // gts.Debug.Log(`#百家乐输赢: ${JSON.stringify(this._winnerMap)}\n${JSON.stringify(this._winnerIdxs)}`);
        };

        _proto.SetStatus = function SetStatus(msg, fromMsgId) {
          var _this4 = this;
          // 新快照接管牌面，旧延迟发牌和结算回调不得继续执行。
          this._cardAnimationVersion++;
          if (msg.state === BaccaratDef.Status.ON_BET || msg.state === BaccaratDef.Status.ON_SEND_CARD) {
            Tween.stopAllByTarget(this._delayRunner);
            this._onSendCardStatus = false;
            this.pokerMgr.ResetAllCards();
          }
          this.ClearBetCountdown();
          this.SetTimeScale(1);
          this._curSetStatusMsg = fromMsgId;
          BaccaratDataMgr.ins.curTabStatus = msg.state;
          BaccaratDataMgr.ins.SetPlayers(msg.playerInfos);
          BaccaratDataMgr.ins.playerCount = msg.playerCount;
          //        // BaccaratDataMgr.ins.SortPlayers();
          this.EmitEvent(BaccaratDef.Event.PLAYER_LIST_UPDATED);
          gts.Debug.Log("# BJL/\u8BBE\u7F6E\u5F53\u524D\u72B6\u6001, " + msg.state);
          BaccaratDataMgr.ins.SaveBetInfo();
          BaccaratDataMgr.ins.SetCurGameNum(msg.gameNo);
          if (BaccaratMsg.MsgID.S2c_CHANGE_STATUS === fromMsgId && msg.state === BaccaratDef.Status.ON_BET) {
            BMsgSender.Send_History();
          }
          this.updateOddList(msg.plays);
          if (this.clock) {
            this.clock.Open(msg.remainTime);
          }
          if (msg.cards) this._cardInfo = msg.cards;
          this._winAreas = msg.posRes;
          this.original = msg.original;
          this.ciphertext = msg.ciphertext;
          GUtil.NodeVisible(this.areaMaskNode, BaccaratDef.Status.ON_BET === msg.state ? false : true);
          gts.UI.SetLab(this.labTabMax, "" + (msg.maxBet ? Common.ChangeMoneyShow(msg.maxBet, 2) : ""));
          gts.UI.SetLab(this.labTabMin, "" + (msg.minBet ? Common.ChangeMoneyShow(msg.minBet, 2) : ""));

          //        //! 状态转变，复制当前下注不可用
          this.BtnGray(this.btnDouble, true);
          this.BtnGray(this.btnCopyBet, true);

          //        //! 如果是开牌阶段直接开牌
          if (BaccaratDef.Status.ON_CHECK_OUT === msg.state) ;else {
            this.ShowWinFlag(BaccaratDef.AREA.CLOSE);
            var keys = Object.keys(this._area2btn);
            this.PlayAreaEff(keys, false);
            this.resetMD5(msg.ciphertext);
          }
          var resumeBetInfos = function resumeBetInfos() {
            for (var i = 0; msg.betInfos && i < msg.betInfos.length; ++i) {
              var data = {
                pos: i,
                money: msg.betInfos[i]
              };
              _this4.EmitEvent(BaccaratDef.Event.SET_CHIP_STACK, data);
              _this4.SetLabTotalMoney(_this4.labsTotalMoney[i], msg.betInfos[i]);
            }
            var info = BaccaratDataMgr.ins.myInfo;
            var betinfos = info.betInfos || [];
            // 状态快照是本局累计下注，恢复前清空，避免重进或重复刷新时叠加。
            BaccaratDataMgr.ins.ClearSelfBet();
            for (var bi = 0; betinfos && bi < betinfos.length; ++bi) {
              BaccaratDataMgr.ins.AddSelfBet(bi, betinfos[bi]);
            }
            _this4.UpdateSelfBetLabs();
            _this4.UpdateSelfTotalBet();
          };
          // 进房和后台返回都需要按服务端快照恢复下注。
          var shouldResumeBets = this._curStatusIsEnter || fromMsgId === BaccaratMsg.MsgID.S2C_REFRESH_STATE;

          //        //! 下注阶段
          if (BaccaratDef.Status.ON_BET === msg.state) {
            this._onSendCardStatus = false;
            this.EmitEvent(BaccaratDef.Event.CHIPS_MGR_RESET);
            this.clock.hideTime = false;
            this.clock.changeColor = true;
            BSound.SE_PleaseYourBet();
            this.BtnGray(this.btnCopyBet, !BaccaratDataMgr.ins.allowUseOldBet);
            this.BtnGray(this.btnDouble, !BaccaratDataMgr.ins.allowUseOldBet);
            BaccaratDataMgr.ins.ClearSelfBet();
            this.UpdateSelfTotalBet();
            this.UpdateSelfBetLabs();
            this.pokerMgr.ResetAllCards();
            var _keys = Object.keys(this._area2btn);
            this.PlayAreaEff(_keys, false);
            gts.UI.SetLab(this.labPtBanker, "");
            gts.UI.SetLab(this.labPtPlayer, "");
            this.PlaySpAni(this.spAniStatusTip, BaccaratDef.SpAniName.BET_START);
            this.PlaySpAni(this.spAniGirl, BaccaratDef.SpAniName.RIGHT);
            if (shouldResumeBets) {
              resumeBetInfos();
            }
            if (msg.remainTime <= 4000) {
              ViewManager.instance.showCountDownTip(this.node, Math.floor(msg.remainTime / 1000), "idle3", 25);
            } else {
              var gameNo = msg.gameNo;
              this._betCountdown = function () {
                _this4._betCountdown = null;
                if (BaccaratDataMgr.ins.curGameNum === gameNo && BaccaratDataMgr.ins.curTabStatus === BaccaratDef.Status.ON_BET) {
                  ViewManager.instance.showCountDownTip(_this4.node, 3, "idle3", 25);
                }
              };
              this.scheduleOnce(this._betCountdown, (msg.remainTime - 4000) / 1000);
            }
          }

          //        //! 发牌阶段
          if (BaccaratDef.Status.ON_SEND_CARD === msg.state) {
            if (!this._curStatusIsEnter) {
              BSound.SE_NoMoreBet();
            }
            this.clock.changeColor = false;
            this.clock.hideTime = true;
            var delay = 0;
            if (fromMsgId === BaccaratMsg.MsgID.S2c_CHANGE_STATUS) {
              this.PlaySpAni(this.spAniStatusTip, BaccaratDef.SpAniName.BET_STOP);
              this.PlaySpAni(this.spAniGirl, BaccaratDef.SpAniName.LEFT);
              delay = 1;
            }
            if (shouldResumeBets) {
              resumeBetInfos();
            }
            for (var i = 0; msg.playerInfos && i < msg.playerInfos.length; ++i) {
              var p = msg.playerInfos[i];
              this.AddProfit(p.uid, p.score);
            }

            //            //! 统计牌数
            var tmpcards = [];
            tmpcards.push.apply(tmpcards, msg.cards.playerCards);
            tmpcards.push.apply(tmpcards, msg.cards.bankerCards);
            var tmpcount = 0;
            for (var _i7 = 0; _i7 < tmpcards.length; ++_i7) {
              if (tmpcards[_i7] > 0) {
                tmpcount += 1;
              }
            }
            var remainTime = msg.remainTime / 1000;
            //            //! 时间不足，直接开牌
            // 本局已开完时直接恢复明牌，不因重连剩余时间较长而重新发牌。
            if (remainTime <= 10 || this._openedGameNo === msg.gameNo) {
              this.pokerMgr.SetResult(msg.cards.playerCards, msg.cards.bankerCards);
              this.OnSendCardCompleted();
            } else {
              var needTime = 19;
              if (tmpcount === 4 || tmpcount === 5) {
                needTime = 4 === tmpcount ? 15 : 18;
              }
              needTime += 7;
              var timescale = 1;
              if (remainTime < needTime) {
                timescale = needTime / remainTime;
              }
              if (timescale > 1) {
                this.SetTimeScale(timescale);
              }
              //                // gts.Debug.Log(`# NEED TIME: ${needTime}, REMAIN TIME:${remainTime}, TIME SACLE:${timescale}`);
              // this._delayRunner.runAction(
              //     cc.sequence(
              //         cc.delayTime(delay),
              //         cc.callFunc(() => {
              //             if (BaccaratDataMgr.ins.curTabStatus === BaccaratDef.Status.ON_SEND_CARD) {
              //                 //                                //! TODO: 判断是否enter进入，设定动画倍速
              //                 this.StartSendCards();
              //             }
              //         })
              //     )
              // );
              tween(this._delayRunner).delay(delay / this._animationTimeScale).call(function () {
                if (BaccaratDataMgr.ins.curTabStatus === BaccaratDef.Status.ON_SEND_CARD) {
                  //                                //! TODO: 判断是否enter进入，设定动画倍速
                  _this4.StartSendCards();
                }
              }).start();
            }
            this.cardInfo = msg.cards;
            this.SaveWinner(msg.playerInfos);
            //            // BaccaratDataMgr.ins.SetPlayers(msg.playerInfos);
            //            // this.EmitEvent(BaccaratDef.Event.PLAYER_LIST_UPDATED);

            if (msg.myScore) {
              this.AddProfit(BaccaratDataMgr.myUid, msg.myScore);
              this._winnerIdxs.push(-1);
            }
          }
        };
        _proto.updateOddList = function updateOddList(list) {
          if (!list) {
            return;
          }
          BaccaratDataMgr.ins.oddList = list;
          for (var i = 0; i < 5; i++) {
            this.oddList[i].string = "" + list[i].Odds / 100;
          }
        };
        _proto.OnTipFinished = function OnTipFinished() {
          //        // gts.Debug.Log(`# 提示结束: ${BaccaratDataMgr.ins.curTabStatus}`);
        }
        //    //! 开始发牌
        ;

        _proto.StartSendCards = function StartSendCards(info) {
          if (info) {
            this.cardInfo = info;
          }
          this._cardidx = 0;
          //        // gts.Debug.Log(`发牌：${JSON.stringify(info)}`);
          this.pokerMgr.ResetAllCards();
          this._onSendCardStatus = true;
          this.DoSendCards();
        };
        _proto.DoSendCards = function DoSendCards() {
          if (!this._onSendCardStatus) {
            return;
          }
          gts.UI.SetLab(this.labPtBanker, "");
          gts.UI.SetLab(this.labPtPlayer, "");
          this._ready2next = {
            card: false,
            ani: false
          };
          //        // this.PlaySpAni(this.spAniGirl, `fapai${this._cardidx + 1}`);
          this.PlaySpAni(this.spAniGirl, this._aniTags[this._cardidx]);
        };
        _proto.Try2SendNextCard = function Try2SendNextCard() {
          var _this5 = this;
          if (!this._ready2next.ani || !this._ready2next.card) {
            return false;
          }
          if (this._cardidx <= 3) {
            if (this._cardidx === 3) {
              //                // gts.Debug.Log(`# 执行翻拍动画`);
              var opened = {
                "0": false,
                "1": false,
                "2": false,
                "3": false
              };
              //                //! 开启前四张牌
              var delay = 0;
              var _loop = function _loop(i) {
                _this5.pokerMgr.OpenCard(i, delay, function () {
                  opened["" + i] = true;
                  _this5.Try2AddCard(opened);
                }, _this5);
                delay += 2;
              };
              for (var i = 0; i < 4; ++i) {
                _loop(i);
              }
              return false;
            }
            this._cardidx += 1;
            this.DoSendCards();
          }
          return true;
        };
        _proto.Try2AddCard = function Try2AddCard(opened) {
          if (opened["0"] && opened["2"]) {
            var c1 = this._cardInfo.playerCards[0];
            var c2 = this._cardInfo.playerCards[1];
            var pt1 = BaccaratUtil.CVwithIdx(c1);
            var pt2 = BaccaratUtil.CVwithIdx(c2);
            //            // gts.Debug.Log(`#Try2AddCard,plaher pt1 = ${c1}|${pt1}, pt2 = ${c2}|${pt2}`);
            gts.UI.SetLab(this.labPtPlayer, "" + (pt1 + pt2) % 10);
          }
          if (opened["1"] && opened["3"]) {
            var _c = this._cardInfo.bankerCards[0];
            var _c2 = this._cardInfo.bankerCards[1];
            var _pt = BaccaratUtil.CVwithIdx(_c);
            var _pt2 = BaccaratUtil.CVwithIdx(_c2);
            //            // gts.Debug.Log(`#Try2AddCard,banker pt1 = ${c1}|${pt1}, pt2 = ${c2}|${pt2}`);
            gts.UI.SetLab(this.labPtBanker, "" + (_pt + _pt2) % 10);
          }
          var keys = Object.keys(opened);
          for (var i = 0; i < keys.length; ++i) {
            if (!opened[keys[i]]) {
              return false;
            }
          }

          //        // gts.Debug.Log(`# 判断玩家是否有补牌`);
          this.DoAddCard();
          return true;
        };
        _proto.onClickCopy = function onClickCopy() {
          PlatformMgr.p.copyToClipBoard(this.txt_md5.string);
        };
        _proto.DoAddCard = function DoAddCard() {
          var finished = true;
          if (this._cardidx === 3) {
            if (this._cardInfo.playerCards.length >= 3) {
              //                //! 玩家有补牌
              this._cardidx += 1;
              //                // this.PlaySpAni(this.spAniGirl, `fapai${this._cardidx + 1}`);
              this.PlaySpAni(this.spAniGirl, this._aniTags[this._cardidx]);
              finished = false;
            } else if (this._cardInfo.bankerCards.length >= 3) {
              //                // gts.Debug.Log(`# 庄家有补牌 -1`);
              this._cardidx += 2;
              //                // this.PlaySpAni(this.spAniGirl, `fapai${this._cardidx + 1}`);
              this.PlaySpAni(this.spAniGirl, this._aniTags[this._cardidx]);
              finished = false;
            }
          } else if (this._cardidx === 4) {
            if (this._cardInfo.bankerCards.length >= 3) {
              //                // gts.Debug.Log(`# 庄家有补牌 -2`);
              this._cardidx += 1;
              //                // this.PlaySpAni(this.spAniGirl, `fapai${this._cardidx + 1}`);
              this.PlaySpAni(this.spAniGirl, this._aniTags[this._cardidx]);
              finished = false;
            }
          }
          if (finished) {
            //            // gts.Debug.Log(`# 发牌完成，发牌结束!!!`);
            this.OnSendCardCompleted();
          }
        };
        _proto.OnSendCardCompleted = function OnSendCardCompleted() {
          var _this6 = this;
          this._onSendCardStatus = false;
          this._openedGameNo = BaccaratDataMgr.ins.curGameNum;
          var version = this._cardAnimationVersion;
          this.clock.hideTime = false;
          this.clock.changeColor = false;
          gts.UI.SetLab(this.labPtPlayer, this._cardInfo.playerDian);
          gts.UI.SetLab(this.labPtBanker, this._cardInfo.bankerDian);
          this.scheduleOnce(function () {
            if (version === _this6._cardAnimationVersion && BaccaratDataMgr.ins.curTabStatus === BaccaratDef.Status.ON_SEND_CARD) {
              _this6.ShowResult();
            }
          }, 0.1);
        };
        _proto.resetMD5 = function resetMD5(text) {
          this.txt_md5.string = text;
          this.node_md5Key.active = false;
          this.node_md5Result.active = true;
        };
        _proto.showMd5 = function showMd5() {
          if (BaccaratDataMgr.ins.curTableID == "2" || BaccaratDataMgr.ins.curTableID == "3") {
            var original = this.original;
            this.txt_md5.string = original;
            this.node_md5Result.active = false;
            this.node_md5Key.active = true;
          }
        };
        _proto.ShowResult = function ShowResult() {
          var _this7 = this;
          var aniName = "";
          //        //! 播放win动画
          if (this._winAreas[BaccaratDef.AREA.PLAYER]) {
            this.ShowWinFlag(BaccaratDef.AREA.PLAYER);
            aniName = BaccaratDef.SpAniName.PLYAER_WIN;
          } else if (this._winAreas[BaccaratDef.AREA.BANKER]) {
            aniName = BaccaratDef.SpAniName.BANKER_WIN;
            this.ShowWinFlag(BaccaratDef.AREA.BANKER);
          } else {
            this.ShowWinFlag(BaccaratDef.AREA.TIE);
            aniName = BaccaratDef.SpAniName.TIE;
          }

          //        //! 播放赢钱区域
          var keys = [];
          for (var i = 0; i < this._winAreas.length; ++i) {
            if (this._winAreas[i]) {
              var tmp = BaccaratDef.AREA_NAME["A" + i];
              tmp = tmp.toLowerCase();
              keys.push(tmp);
            }
          }
          this.PlayAreaEff(keys, true);
          gts.UI.SetLab(this.labPtBanker, this._cardInfo.bankerDian);
          gts.UI.SetLab(this.labPtPlayer, this._cardInfo.playerDian);
          if (BaccaratDef.Status.ON_SEND_CARD !== BaccaratDataMgr.ins.curTabStatus) {
            return;
          }
          this.showMd5();

          //        //! 当前是发牌阶段。播放动画
          this.PlaySpAni(this.spAniGirl, aniName, false);
          var lose_areas = [];
          var win_areas = [];
          //        //! 收取筹码 - 输的区域
          for (var _i8 = 0; _i8 < this._winAreas.length; ++_i8) {
            if (!this._winAreas[_i8]) {
              lose_areas.push(_i8);
            } else {
              win_areas.push(_i8);
            }
          }
          var delayDoAct = 1.2;
          this.EmitEvent(BaccaratDef.Event.CHIPS_2_BANKER, lose_areas);
          BSound.SE_ChipsSound();
          // this._delayRunner.runAction(
          //     cc.sequence(
          //         cc.delayTime(delayDoAct),
          //         cc.callFunc(() => {
          //             BSound.SE_ChipsSound();
          //             //                    //! 收取的筹码到赢钱的区域
          //             this.EmitEvent(BaccaratDef.Event.CHIPS_2_WIN_AREAS, win_areas);
          //         })
          //     )
          // );
          tween(this._delayRunner).delay(delayDoAct / this._animationTimeScale).call(function () {
            BSound.SE_ChipsSound();
            //                    //! 收取的筹码到赢钱的区域
            _this7.EmitEvent(BaccaratDef.Event.CHIPS_2_WIN_AREAS, win_areas);
          }).start();
          delayDoAct += 1.5;
          // this._delayRunner.runAction(
          //     cc.sequence(
          //         cc.delayTime(delayDoAct),
          //         cc.callFunc(() => {
          //             //                    //! 收取的筹码到赢钱的区域
          //             //                    // gts.Debug.LogInfo(`#百家乐输赢: ${JSON.stringify(this._winnerIdxs)}`);
          //             BSound.SE_ChipsSound();
          //             this.EmitEvent(BaccaratDef.Event.STACK_CHIPS_2_WINNER, this._winnerIdxs);
          //         })
          //     )
          // );
          tween(this._delayRunner).delay(delayDoAct / this._animationTimeScale).call(function () {
            BSound.SE_ChipsSound();
            //                    //! 收取的筹码到赢钱的区域
            _this7.EmitEvent(BaccaratDef.Event.STACK_CHIPS_2_WINNER, _this7._winnerIdxs);
          }).start();
          delayDoAct += 2;
          //        //! 洗牌
          // this._delayRunner.runAction(
          //     cc.sequence(
          //         cc.delayTime(delayDoAct),
          //         cc.callFunc(() => {
          //             this.AllCards2Gril();

          //             //                    //清空下注信息
          //             for (let i = 0; i < BaccaratDef.AREA.TOTAL_COUNT; ++i) {
          //                 this.SetLabTotalMoney(this.labsSelfMoney[i], 0);
          //                 this.SetLabTotalMoney(this.labsTotalMoney[i], 0);
          //             }
          //         })
          //     )
          // );
          tween(this._delayRunner).delay(delayDoAct / this._animationTimeScale).call(function () {
            _this7.AllCards2Gril();

            //                    //清空下注信息
            for (var _i9 = 0; _i9 < BaccaratDef.AREA.TOTAL_COUNT; ++_i9) {
              _this7.SetLabTotalMoney(_this7.labsSelfMoney[_i9], 0);
              _this7.SetLabTotalMoney(_this7.labsTotalMoney[_i9], 0);
            }
          }).start();
          delayDoAct += 2;
          // this._delayRunner.runAction(
          //     cc.sequence(
          //         cc.delayTime(delayDoAct),
          //         cc.callFunc(() => {
          //             this.SetTimeScale(1);
          //         })
          //     )
          // );

          tween(this._delayRunner).delay(delayDoAct / this._animationTimeScale).call(function () {
            _this7.SetTimeScale(1);
          }).start();
        };
        _proto.BindAreaBtns = function BindAreaBtns() {
          var _this8 = this;
          var childs = this.areaBtnParent ? this.areaBtnParent.children : [];
          var _loop2 = function _loop2() {
            var c = childs[i];
            var btnName = c.name;
            var areaId = BaccaratDef.AREA_NAME[btnName];
            if (undefined !== areaId && null !== areaId) {
              var ba = BtnArea.OnClicked(c, function (btn) {
                var bet = BaccaratDataMgr.ins.curSelBetVal;
                //                        // gts.Debug.Log(`#区域: ${btnName}, areaId:${areaId}, bet:${bet}`);
                if (BaccaratDataMgr.ins.isTest) {
                  var tmp = {
                    uid: "buid_test",
                    pos: areaId,
                    coin: bet,
                    playerGolds: 0
                  };
                  _this8.OnBetInfo(tmp);
                } else {
                  if (BaccaratDataMgr.ins.AllowBet(areaId)) {
                    //                                // BSound.SE_ChipIn();
                    if (_this8.clock.leftTime() <= 3) {
                      //                                    //下注锁定-当前不能下注
                      Common.showTip(i18n.lang.disableBet);
                      return;
                    }
                    BMsgSender.Send_BetIn({
                      pos: areaId,
                      coin: bet
                    });
                  } else {
                    //                                //gts.Debug.Log(`#不能同时下注庄闲`);
                    Common.showTip(i18n.lang["10002"]);
                  }
                }
              }, _this8);
              _this8._area2btn[c.name] = ba;
            }
          };
          for (var i = 0; i < childs.length; ++i) {
            _loop2();
          }
        }
        //    // update (dt) {}
        ;

        _proto.GetNodePos = function GetNodePos(node) {
          return node ? node.position : Vec3.ZERO;
        };
        _proto.ShowWinFlag = function ShowWinFlag(area) {
          var spNode = this.spAniWin ? this.spAniWin.node : null;
          if (!spNode) {
            return;
          }
          if (BaccaratDef.AREA.CLOSE === area) {
            GUtil.NodeVisible(spNode, false);
            return;
          }
          GUtil.NodeVisible(this.spAniWin ? this.spAniWin.node : null, true);
          var aniName = BaccaratDef.AREA.TIE === area ? BaccaratDef.SpAniName.TIE : BaccaratDef.SpAniName.WIN;
          var pos = this.GetNodePos(this.flagTie);
          if (BaccaratDef.AREA.PLAYER === area || BaccaratDef.AREA.PLAYER_PAIR === area) {
            pos = this.GetNodePos(this.flagPlayerWin);
            BSound.SE_PlayerWin();
          } else if (BaccaratDef.AREA.BANKER === area || BaccaratDef.AREA.BANKER_PAIR === area) {
            pos = this.GetNodePos(this.flagBankerWin);
            BSound.SE_BankerWin();
          }
          this.PlaySpAni(this.spAniWin, aniName, true);
          spNode.setPosition(pos);
        };
        _proto.SetResult = function SetResult() {};
        _createClass(BaccaratTableOpt, [{
          key: "cardInfo",
          set: function set(value) {
            this._cardInfo = value;
          }
        }, {
          key: "_curStatusIsEnter",
          get: function get() {
            return this._curSetStatusMsg === BaccaratMsg.MsgID.S2C_ENTER_ROOM;
          }
        }, {
          key: "winnerKeys",
          get: function get() {
            return [-1, 0, 1, 2, 3, 4, 5, 100];
          }
        }]);
        return BaccaratTableOpt;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "areaBtnParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "flagPlayerWin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "flagBankerWin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "flagTie", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spAniWin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spAniGirl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spAniStatusTip", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "clock", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "pokerMgr", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "labPtPlayer", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "labPtBanker", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "areaMaskNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "labsTotalMoney", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "labsSelfMoney", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "labSelfTotalBet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "labTabMax", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "labTabMin", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "btnDouble", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "btnCopyBet", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "oddList", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_md5Key", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_md5Result", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "node_md5Bg", [_dec25], {
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

System.register("chunks:///_virtual/BChip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './ChipSmall.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Vec3, instantiate, v3, Component, GUtil, ChipSmall;
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
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ChipSmall = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1c8b7t9gl1Egre0ZF0Mw9eG", "BChip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BChip = exports('default', (_dec = ccclass("BChip"), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BChip, _Component);
        function BChip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab_chip", _descriptor, _assertThisInitialized(_this));
          _this._money = 0;
          _this.chip = void 0;
          _this._flag = "";
          _this._hnd = null;
          _this._dstPos = Vec3.ZERO;
          return _this;
        }
        var _proto = BChip.prototype;
        _proto.onLoad = function onLoad() {
          var node = instantiate(this.prefab_chip);
          node.scale = v3(0.8, 0.8, 1);
          this.node.addChild(node);
          this.chip = node.getComponent(ChipSmall);
          if (this._money > 0) {
            this.chip.reuse([this._money]);
          }
        };
        _proto.reuse = function reuse(value) {
          //        // gts.Debug.Log(`# Chip Reuse`);
          this.node.active = true;
          if (this.chip) {
            this.chip.reuse([value]);
          } else {
            console.log("reuse err", value);
          }
        };
        _proto.unuse = function unuse() {
          this._money = 0;
          this.node.active = false;
          this._dstPos = Vec3.ZERO;
          this._flag = "";
          this._hnd = function () {};
          if (this.chip) ;
        }
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        ;

        _proto.start = function start() {};
        _proto.SetFinished = function SetFinished(dstPos, cb, caller) {
          this._dstPos = v3(dstPos);
          this._hnd = GUtil.MakeHnd(cb, caller);
        };
        _proto.CallFinish = function CallFinish() {
          this._hnd();
        }
        //    // update (dt) {}
        ;

        _createClass(BChip, [{
          key: "money",
          get: function get() {
            return this._money;
          },
          set: function set(val) {
            this._money = val;
            if (this.chip) {
              this.chip.reuse([val]);
            }
          }
        }, {
          key: "flag",
          get: function get() {
            return this._flag;
          },
          set: function set(value) {
            this._flag = value;
          }
        }, {
          key: "dstPos",
          get: function get() {
            return this._dstPos;
          }
        }]);
        return BChip;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab_chip", [_dec2], {
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

System.register("chunks:///_virtual/BChipsMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './BChip.ts', './ChipStack.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Tween, Vec3, v3, tween, v2, AutoEventNode, GUtil, BaccaratDataMgr, BaccaratDef, BChip, ChipStack, Common;
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
      Tween = module.Tween;
      Vec3 = module.Vec3;
      v3 = module.v3;
      tween = module.tween;
      v2 = module.v2;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      BChip = module.default;
    }, function (module) {
      ChipStack = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "6cffb1aAnZKUYMa9z5seGkM", "BChipsMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BChipsMgr = exports('default', (_dec = ccclass("BChipsMgr"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(), _dec6 = property(), _dec7 = property(), _dec8 = property(), _dec9 = property(), _dec10 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(BChipsMgr, _AutoEventNode);
        function BChipsMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "recoveryTag", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "copyTarget", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tags", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniDuration", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dtRecoveryChip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "starScale", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dstScale", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stackCacheCnt", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stackChipImg", _descriptor9, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          //    // onLoad () {}
          _this._name2frame = null;
          _this._objPool = null;
          _this._name2cs = {};
          _this._alives = [];
          // 下注飞行筹码只参与重置，不参与 _alives 的结算转移动画。
          _this._betChips = [];
          return _this;
        }
        var _proto = BChipsMgr.prototype;
        _proto.SetChipImages = function SetChipImages(sprframes) {
          if (this._name2frame) {
            return;
          }
          this._name2frame = {};
          for (var i = 0; i < sprframes.length; ++i) {
            var sf = sprframes[i];
            this._name2frame[sf.name] = sf;
            //            // gts.Debug.Log(`# CACHE: ${sf.name}`);
          }

          var keys = Object.keys(this._name2cs);
          for (var _i = 0; _i < keys.length; ++_i) {
            var cs = this._name2cs[keys[_i]];
            if (cs) {
              cs.SetSprframeMap(this._name2frame);
            }
          }
        };
        _proto.start = function start() {
          var _this2 = this;
          _AutoEventNode.prototype.start.call(this);
          this.copyTarget.active = false;
          this._objPool = GUtil.AllocObjPool(this.copyTarget.name, BChip, this.copyTarget);
          var childs = this.tags.children;
          for (var i = 0; i < childs.length; ++i) {
            var c = childs[i];
            this._name2cs[c.name] = c.getComponent(ChipStack);
            //            // gts.Debug.Log(`# cache pos: ${c.name}`);
            var cs = c.getComponent(ChipStack);
            cs.SetMgr(this);
            cs.SetSprframeMap(this._name2frame);
            cs.DoCache(this.stackCacheCnt, this.stackChipImg);
          }

          //        /**
          //         * data.from 小于0是自己，0~6是前几名玩家。找不到的则为其他玩家
          //         */
          this.OnEvent(BaccaratDef.Event.SEND_CHIP, function (data) {
            _this2.SendChip(data.from, data.pos, data.value);
          });
          this.OnEvent(BaccaratDef.Event.CHIPS_2_BANKER, function (areas) {
            _this2.Chips2Banker(areas);
          });
          this.OnEvent(BaccaratDef.Event.CHIPS_2_WIN_AREAS, function (areas) {
            _this2.Chips2Areas(areas);
          });
          this.OnEvent(BaccaratDef.Event.STACK_CHIPS_2_WINNER, function (posIdxs) {
            var keys = Object.keys(_this2._name2cs);
            var css = [];
            var totalCount = 0;
            for (var _i2 = 0; _i2 < keys.length; ++_i2) {
              var tmp = keys[_i2];
              var _cs = _this2._name2cs[tmp];
              //                // cs.SendClips2Winner(posIdxs);
              if (_cs.chipsCount > 0) {
                css.push(_cs);
                totalCount += _cs.chipsCount;
              }
            }
            var totalTime = 0.45;
            var sptime = totalTime / totalCount;
            var delay = 0;
            var curCsIdx = 0;
            var curPosIdx = 0;
            for (var _i3 = 0; _i3 < totalCount; ++_i3) {
              var _cs2 = css[curCsIdx];
              var toIdx = posIdxs[curPosIdx];
              while (!_cs2.AddChip2WinnerElmt(delay, toIdx)) {
                curCsIdx = (curCsIdx + 1) % css.length;
                _cs2 = css[curCsIdx];
              }
              curCsIdx = (curCsIdx + 1) % css.length;
              curPosIdx = (curPosIdx + 1) % posIdxs.length;
              delay += sptime;
            }
            for (var _i4 = 0; _i4 < css.length; ++_i4) {
              var _tmp = css[_i4];
              _tmp.CheckCount();
            }
          });
          this.OnEvent(BaccaratDef.Event.SET_CHIP_STACK, function (data) {
            _this2.SetChipStack(data.pos, data.money);
          });
          this.OnEvent(BaccaratDef.Event.ON_GAME_SHOW, this.Reset);
          this.OnEvent(BaccaratDef.Event.CHIPS_MGR_RESET, this.Reset);
        };
        _proto.Reset = function Reset() {
          var activeChips = this._alives.concat(this._betChips);
          for (var i = 0; i < activeChips.length; ++i) {
            var tmp = activeChips[i];
            Tween.stopAllByTarget(tmp);
            this._objPool.put(tmp);
          }
          this._alives.length = 0;
          this._betChips.length = 0;
          var keys = Object.keys(this._name2cs);
          for (var _i5 = 0; _i5 < keys.length; ++_i5) {
            var cs = this._name2cs[keys[_i5]];
            if (cs) {
              cs.Reset();
              cs.ClearElmts();
            }
          }
        };
        _proto.Chips2Areas = function Chips2Areas(areas) {
          var _this3 = this;
          var _loop = function _loop() {
            var tmpidx = Math.floor(Math.random() * 1000) % areas.length;
            var tmpa = areas[tmpidx];
            var clone = _this3._alives[i];
            var sArea = BaccaratDef.AREA_NAME["A" + tmpa];
            var areaIdx = Math.floor(Math.random() * 1000) % 4;
            var area_name = sArea.toLowerCase() + "_" + areaIdx;
            //            // gts.Debug.Log(`## AREA_NAME:${area_name}`);
            var cs = _this3._name2cs[area_name];
            var ePos = cs ? cs.offsetPos : null;
            var func = function func() {
              var idx = _this3._alives.indexOf(clone);
              if (idx >= 0) {
                _this3._alives.splice(idx, 1);
              }
              var chip = clone.getComponent(BChip);
              if (cs) {
                cs.Add(chip.money);
              }
              _this3._objPool.put(clone);
            };
            var comm = clone.getComponent(BChip);
            comm.SetFinished(ePos, func, _this3);
            var delay = Math.floor(Math.random() * 1000) % 100 / 1000;
            // clone.runAction(
            //     cc.sequence(
            //         cc.delayTime(delay),
            //         cc.moveTo(this.aniDuration, cc.v2(ePos)),
            //         cc.callFunc(() => {
            //             comm.CallFinish();
            //         }, this)
            //     )
            // );
            tween(clone).delay(delay).to(_this3.aniDuration, {
              position: v3(ePos.x, ePos.y)
            }).call(function () {
              comm.CallFinish();
            }).start();
          };
          for (var i = 0; i < this._alives.length; ++i) {
            _loop();
          }
        };
        _proto.SetChipStack = function SetChipStack(area, money) {
          var arr = BaccaratDef.RandomChipArr(money);
          var sArea = BaccaratDef.AREA_NAME["A" + area];
          for (var i = 0; i < arr.length; ++i) {
            var tmp = arr[i];
            var areaIdx = Math.floor(Math.random() * 1000) % 4;
            var area_name = sArea.toLowerCase() + "_" + areaIdx;
            //            // gts.Debug.Log(`AREA_NAME:${area_name}`);
            var cs = this._name2cs[area_name];
            if (cs) {
              cs.AddHoldMoney(tmp);
            }
          }
        };
        _proto.SendChip = function SendChip(fromIdx, area, money) {
          var fromPos = Vec3.ZERO;
          if (fromIdx < 0) {
            fromPos = BaccaratDataMgr.ins.wposSelfSender;
          } else {
            var tmp = BaccaratDataMgr.ins.wPosWithIdx(fromIdx);
            fromPos = tmp ? tmp : BaccaratDataMgr.ins.wposOtherSender;
          }
          var sArea = BaccaratDef.AREA_NAME["A" + area];
          var areaIdx = Math.floor(Math.random() * 1000) % 4;
          var area_name = sArea.toLowerCase() + "_" + areaIdx;
          //        // gts.Debug.Log(`AREA_NAME:${area_name}`);

          var sPos = GUtil.Pos_W2L(fromPos, this.node);
          var cs = this._name2cs[area_name];
          var ePos = cs ? cs.offsetPos : null;
          if (!ePos) {
            gts.Debug.LogErr("# \u627E\u4E0D\u5230\u7EC8\u70B9: " + area_name);
            return;
          }
          this.DoSendChip(cs, sPos, ePos, money);

          //        // let idx = BaccaratDef.Chips.indexOf(money);
          //        // if (idx >= 0) {
          //        //     let useval = BaccaratDef.Chips[idx];
          //        //     this.DoSendChip(cs, sPos, ePos, useval);
          //        // } else {
          //        // }
        };

        _proto.DoSendChip = function DoSendChip(cs, sPos, ePos, money) {
          var _this4 = this;
          var clone = GUtil.GetObjFromPool(this._objPool, BChip, this.copyTarget, money);
          clone.scale = v3(this.starScale, this.starScale, 1);
          clone.active = true;
          clone.parent = this.node;
          clone.setPosition(sPos);
          // 重置桌面时也要取消尚未落桌的下注筹码，防止旧动画写回新局。
          this._betChips.push(clone);
          Tween.stopAllByTarget(clone);
          var name = Common.ChangeMoneyShow(money, 2);
          var sprframe = this._name2frame[name + "_x"];
          if (!sprframe) sprframe = this._name2frame["100_x"];
          var comm = clone.getComponent(BChip);
          //        // comm.spr.spriteFrame = sprframe;
          comm.money = money;

          // let func = () => {
          //     let idx = this._alives.indexOf(clone);
          //     if (idx >= 0) {
          //         this._alives.splice(idx, 1);
          //     }

          //     this._objPool.put(clone);
          //     if (cs) {
          //         cs.Add(money);
          //     }
          // };
          // comm.SetFinished(ePos, func, this);

          tween(clone).to(this.aniDuration, {
            position: v3(ePos.x, ePos.y)
          })
          // .call(() => {
          //     comm.CallFinish();
          // })
          .call(function () {
            var idx = _this4._betChips.indexOf(clone);
            if (idx >= 0) {
              _this4._betChips.splice(idx, 1);
            }
            _this4._objPool.put(clone);
            if (cs) {
              cs.Add(money);
            }
          }).start();
        };
        _proto.OnSendFinished = function OnSendFinished() {};
        _proto.Chips2Banker = function Chips2Banker(areas) {
          for (var i = 0; i < areas.length; ++i) {
            this.SingleAreaChips2Banker(areas[i]);
          }
        };
        _proto.SingleAreaChips2Banker = function SingleAreaChips2Banker(a) {
          var name = BaccaratDef.AREA_NAME["A" + a];
          name = name.toLowerCase();
          for (var i = 0; i < 4; ++i) {
            var tmp = name + "_" + i;
            var cs = this._name2cs[tmp];
            if (cs) {
              cs.SendChip2Banker(0.15);
            }
          }
        };
        _proto.Clip2DstPos = function Clip2DstPos(sPos, money, ePos, cb, flag, duration, del, bezierTo) {
          var _this5 = this;
          if (del === void 0) {
            del = false;
          }
          if (bezierTo === void 0) {
            bezierTo = false;
          }
          var clone = GUtil.GetObjFromPool(this._objPool, BChip, this.copyTarget, money);
          //        // clone.scale = 0.45;
          clone.parent = this.node;
          clone.setPosition(sPos);
          var func = del ? function () {
            var idx = _this5._alives.indexOf(clone);
            if (idx >= 0) {
              _this5._alives.splice(idx, 1);
            }
            _this5._objPool.put(clone);
            cb();
          } : cb;
          var comm = clone.getComponent(BChip);
          comm.SetFinished(ePos, func, this);
          comm.money = money;
          //        // let name = Common.ChangeMoneyShow(money, 2);
          //        // let sprframe = this._name2frame[`${name}_x`];
          //        // comm.spr.spriteFrame = sprframe;
          comm.reuse(money);
          comm.flag = flag;
          this._alives.push(clone);
          if (!bezierTo) {
            tween(clone).to(duration, {
              position: v3(ePos.x, ePos.y)
            }).call(function () {
              comm.CallFinish();
            }).start();
          } else {
            var max = 0;
            var min = 30;
            var err = max - min;
            var random_r = Math.floor(Math.random() * 100000) % err + min;
            var random_a = Math.floor(Math.random() * 10000) % 360;
            var ptTmp = GUtil.PointInCricle(random_r, random_a);
            var ptC = v2(ePos.x + ptTmp.x, ePos.y + ptTmp.y);
            //            // let actb = cc.bezierTo(duration, [cc.v2(sPos), ptC, cc.v2(ePos)]);
            // let actb = cc.moveTo(duration, cc.v2(ptC)).easing(cc.easeBackInOut());
            // clone.runAction(
            //     cc.sequence(
            //         actb,
            //         cc.callFunc(() => {
            //             comm.CallFinish();
            //         }, this)
            //     )
            // );

            tween(clone).to(duration, {
              position: v3(ptC.x, ptC.y)
            }).call(function () {
              comm.CallFinish();
            }).start();
          }
        };
        _proto.Chip2Winner = function Chip2Winner(sPos, money, dstIdx) {
          //        // gts.Debug.Log(`## Chip2Winner: dstIdx:${dstIdx}`, GUtil.Pos_W2L(BaccaratDataMgr.ins.wposOtherSender, this.node));
          var ePos = Vec3.ZERO;
          if (dstIdx < 0) {
            ePos = BaccaratDataMgr.ins.wposSelfSender;
          } else {
            var tmp = BaccaratDataMgr.ins.wPosWithIdx(dstIdx);
            ePos = tmp ? tmp : BaccaratDataMgr.ins.wposOtherSender;
          }
          this.Clip2DstPos(sPos, money, GUtil.Pos_W2L(ePos, this.node), function () {}, "", 1, true, true);
        };
        _proto.RecoveryChip = function RecoveryChip(sPos, money, flag) {
          var tmpmax = 20;
          var tmpoffset = 10;
          var ePos = this.recoveryTag ? v3(this.recoveryTag.position) : v3(Vec3.ZERO);
          var offsetx = Math.floor(Math.random() * 10000) % tmpmax - tmpoffset;
          var offsety = Math.floor(Math.random() * 10000) % tmpmax - tmpoffset;
          ePos.x += offsetx;
          ePos.y += offsety;
          var func = function func() {};
          this.Clip2DstPos(sPos, money, ePos, func, flag, this.dtRecoveryChip);
        }
        //    // update (dt) {}
        ;

        return BChipsMgr;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "recoveryTag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "copyTarget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tags", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "aniDuration", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dtRecoveryChip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "starScale", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "dstScale", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stackCacheCnt", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "stackChipImg", [_dec10], {
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

System.register("chunks:///_virtual/BExitMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './EventManager.ts', './BaccaratDef.ts', './BMsgSender.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, AutoEventNode, GUtil, EventManager, BaccaratDef, BMsgSender;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      BMsgSender = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "847caIUHKdCOpGI3tYAL8vg", "BExitMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BExitMenu = exports('default', (_dec = ccclass("BExitMenu"), _dec(_class = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(BExitMenu, _AutoEventNode);
        function BExitMenu() {
          return _AutoEventNode.apply(this, arguments) || this;
        }
        var _proto = BExitMenu.prototype;
        //    // @property(cc.Node)
        //    // btnExit: cc.Node = null;
        //    // @property(cc.Node)
        //    // btnSettings: cc.Node = null;
        //    // @property(cc.Node)
        //    // btnHelper: cc.Node = null;
        //    // @property(cc.Node)
        //    // btnClose: cc.Node = null;
        //    // @property(cc.Node)
        //    // btnMenu: cc.Node = null;
        //    // @property(cc.Node)
        //    // btnRecords: cc.Node = null;
        //    // @property(cc.Node)
        //    // ndMenu: cc.Node = null;
        //    // @property({ displayName: "動畫時間", visible: true })
        //    // _aniDt: number = 0.5;
        //    // @property({ displayName: "菜單顯示x坐標" })
        //    // menuPosX: number = 0;
        //    // // LIFE-CYCLE CALLBACKS:
        //    // // onLoad () {}
        //    // private _srcMennX: number = 0;
        //    // private _srcBtnX: number = 0;
        //    // private _allocOpt: boolean = true;
        //    // start() {
        //    //     this._srcMennX = this.ndMenu.x;
        //    //     this._srcBtnX = this.btnMenu.x;
        //    //     this.btnClose.active = false;
        //    //     super.start();
        //    //     gts.UI.OnClick(
        //    //         this.btnExit,
        //    //         () => {
        //    //             // if (BaccaratDataMgr.ins.selfTotalBet > 0) {
        //    //             //     showTip(i18n.lang.betedExitTip);
        //    //             //     return;
        //    //             // }
        //    //             BMsgSender.Send_ExitRoom();
        //    //             let vMgr = MainManager.getInstance()._viewManager;
        //    //             if (vMgr) {
        //    //                 vMgr.changeScene(
        //    //                     "HallScene",
        //    //                     function () {},
        //    //                     function () {},
        //    //                     true
        //    //                 );
        //    //             }
        //    //         },
        //    //         this
        //    //     );
        //    //     gts.UI.OnClick(
        //    //         this.btnRecords,
        //    //         () => {
        //    //             this.CloseMenu();
        //    //             this.EmitEvent(BaccaratDef.Event.OPEN_RECORDS);
        //    //         },
        //    //         this
        //    //     );
        //    //     gts.UI.OnClick(
        //    //         this.btnSettings,
        //    //         () => {
        //    //             this.CloseMenu();
        //    //             GUtil.openSetting();
        //    //         },
        //    //         this
        //    //     );
        //    //     gts.UI.OnClick(
        //    //         this.btnHelper,
        //    //         () => {
        //    //             this.CloseMenu();
        //    //             this.EmitEvent(BaccaratDef.Event.OPEN_UI_HEPLER);
        //    //         },
        //    //         this
        //    //     );
        //    //     gts.UI.OnClick(
        //    //         this.btnClose,
        //    //         () => {
        //    //             this.CloseMenu();
        //    //         },
        //    //         this
        //    //     );
        //    //     gts.UI.OnClick(
        //    //         this.btnMenu,
        //    //         () => {
        //    //             if (!this._allocOpt) {
        //    //                 return;
        //    //             }
        //    //             this._allocOpt = false;
        //    //             this.btnClose.active = true;
        //    //             cc.tween(this.btnMenu)
        //    //                 .stop()
        //    //                 .to(this._aniDt, { x: this._srcMennX }, { easing: "backOut" })
        //    //                 .call(() => {
        //    //                     this._allocOpt = true;
        //    //                 })
        //    //                 .start();
        //    //             cc.tween(this.ndMenu).stop().to(this._aniDt, { x: this.menuPosX }, { easing: "backOut" }).start();
        //    //         },
        //    //         this
        //    //     );
        //    //     this.OnEvent(BaccaratDef.Event.MENU_EXIT_VISIBLE, () => {});
        //    // }
        //    // protected CloseMenu() {
        //    //     if (!this._allocOpt) {
        //    //         return;
        //    //     }
        //    //     this._allocOpt = false;
        //    //     cc.tween(this.btnMenu)
        //    //         .stop()
        //    //         .to(this._aniDt, { x: this._srcBtnX }, { easing: "backOut" })
        //    //         .call(() => {
        //    //             this._allocOpt = true;
        //    //             this.btnClose.active = false;
        //    //         })
        //    //         .start();
        //    //     cc.tween(this.ndMenu).stop().to(this._aniDt, { x: this._srcMennX }, { easing: "backOut" }).start();
        //    // }
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickHelp = function onClickHelp() {
          this.EmitEvent(BaccaratDef.Event.OPEN_UI_HEPLER);
        };
        _proto.onClickRecord = function onClickRecord() {
          this.EmitEvent(BaccaratDef.Event.OPEN_RECORDS);
        };
        _proto.onClickExit = function onClickExit() {
          BMsgSender.Send_ExitRoom();
          EventManager.instance.emit(BaccaratDef.Event.onLoadHall);
          //        // let vMgr = MainManager.getInstance()._viewManager;
          //        // if (vMgr) {
          //        //     vMgr.changeScene(
          //        //         "HallScene",
          //        //         function () {},
          //        //         function () {},
          //        //         true
          //        //     );
          //        // }
        }
        //    // update (dt) {}
        ;

        return BExitMenu;
      }(AutoEventNode)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Tween, UIOpacity, v3, tween, instantiate, find, Sprite, AutoEventNode, GUtil;
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
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      find = module.find;
      Sprite = module.Sprite;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "dba66LqjplKLIw7jzGxyDAn", "BHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BHistory = exports('default', (_dec = ccclass("BHistory"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(BHistory, _AutoEventNode);
        function BHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ndIconParent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cloneTarget", _descriptor2, _assertThisInitialized(_this));
          //    // @property(cc.SpriteFrame)
          //    // sprPlayer: cc.SpriteFrame = null;
          //    // @property(cc.SpriteFrame)
          //    // sprBanker: cc.SpriteFrame = null;
          //    // @property(cc.SpriteFrame)
          //    // sprTie: cc.SpriteFrame = null;
          _initializerDefineProperty(_this, "resultIcons", _descriptor3, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          //    // onLoad () {}
          _this._icons = null;
          return _this;
        }
        var _proto = BHistory.prototype;
        _proto.SetData = function SetData(data) {
          for (var i = 0; i < this.max_count; ++i) {
            var dataidx = data.length - (i + 1);
            if (dataidx >= 0) {
              var elmt = data[dataidx];
              this.icons[i].node.active = true;
              this.icons[i].spr.spriteFrame = this.resultIcons[elmt.result];
            } else {
              this.icons[i].node.active = false;
            }
          }
          var icoInfo = this.icons[0];
          if (icoInfo.node.active) {
            var aninode = icoInfo.spr.node;
            Tween.stopAllByTarget(aninode);
            aninode.getComponent(UIOpacity).opacity = 125;
            aninode.scale = v3(2.5, 2.5, 1);
            var dtScale = 0.5;
            // let actmix = cc.spawn(cc.fadeTo(dtScale, 255), cc.scaleTo(dtScale, 1).easing(cc.easeOut(3)));
            // aninode.runAction(
            //     cc.sequence(
            //         actmix,
            //         cc.callFunc(() => {
            //             let actloop = cc.sequence(cc.scaleTo(dtScale, 1.3), cc.scaleTo(dtScale, 1));
            //             aninode.runAction(cc.repeatForever(actloop));
            //         })
            //     )
            // );

            tween(aninode.getComponent(UIOpacity)).to(dtScale, {
              opacity: 255
            }).start();
            tween(aninode).to(dtScale, {
              scale: v3(1, 1, 1)
            }).call(function () {
              tween(aninode).to(dtScale, {
                scale: v3(1.3, 1.3, 1)
              }).to(dtScale, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }).start();
          }
        };
        _proto.start = function start() {
          _AutoEventNode.prototype.start.call(this);
          GUtil.NodeVisible(this.cloneTarget, false);
        }
        //    // update (dt) {}
        ;

        _createClass(BHistory, [{
          key: "max_count",
          get: function get() {
            return 10;
          }
        }, {
          key: "icons",
          get: function get() {
            if (!this._icons) {
              this._icons = [];
              for (var i = 0; i < this.max_count; ++i) {
                var clone = instantiate(this.cloneTarget);
                clone.parent = this.ndIconParent;
                clone.active = true;
                var ndspr = find("icon", clone);
                var spr = ndspr ? ndspr.getComponent(Sprite) : null;
                this._icons.push({
                  node: clone,
                  spr: spr
                });
              }
            }
            return this._icons;
          }
        }]);
        return BHistory;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndIconParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cloneTarget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resultIcons", [_dec4], {
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

System.register("chunks:///_virtual/BMsgSender.ts", ['cc', './MainManager.ts', './BaccaratDataMgr.ts', './BaccaratMsg.ts'], function (exports) {
  var cclegacy, _decorator, MainManager, BaccaratDataMgr, BaccaratMsg;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratMsg = module.BaccaratMsg;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "aefeeTWJO9LCJCGgmf4Nbxu", "BMsgSender", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BMsgSender = exports('default', (_dec = ccclass("BMsgSender"), _dec(_class = /*#__PURE__*/function () {
        function BMsgSender() {}
        BMsgSender.SendData = function SendData(msgid, data) {
          if (BaccaratDataMgr.ins.curTableID) {
            data["tableID"] = BaccaratDataMgr.ins.curTableID;
          }
          var log = "\u53D1\u9001\u6D88\u606F\uFF0C msgId:" + msgid + ", data:" + JSON.stringify(data);
          var mMgr = MainManager.getInstance();
          var netMgr = mMgr ? mMgr.getNetManager() : null;
          if (netMgr && netMgr._connect) {
            netMgr.sendOnlineData("" + msgid, data);
            //            // gts.Debug.LogInfo(`(SUCCEED): ${log}`);
          } else {
            gts.Debug.LogInfo("(FAILED): " + log);
          }
        }
        //    //! 請求進入房間
        ;

        BMsgSender.Send_EnterRoom = function Send_EnterRoom() {
          this.SendData(BaccaratMsg.MsgID.C2S_ENTER_ROOM, {});
        }
        //    //! 请求离开房间
        ;

        BMsgSender.Send_ExitRoom = function Send_ExitRoom() {
          this.SendData(BaccaratMsg.MsgID.C2S_PLAYER_LEAVE, {
            action: "PlayerLeave"
          });
        }
        //    //! 请求下注
        ;

        BMsgSender.Send_BetIn = function Send_BetIn(msg) {
          msg["action"] = "Bet";
          this.SendData(BaccaratMsg.MsgID.C2S_BET, msg);
        }
        //    //! 获取历史记录
        ;

        BMsgSender.Send_History = function Send_History() {
          this.SendData(BaccaratMsg.MsgID.C2S_HISTORY, {});
        }
        //    //! 请求下注记录
        ;

        BMsgSender.Send_ReqRecords = function Send_ReqRecords(msg) {
          msg["action"] = "GetRecord";
          this.SendData(BaccaratMsg.MsgID.S2C_GET_RECORDS, msg);
        };
        BMsgSender.Send_AllPlayer = function Send_AllPlayer() {
          this.SendData(BaccaratMsg.MsgID.HD_getAllPlayer, {});
        };
        return BMsgSender;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BOtherInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlackWordProxy.ts', './BaccaratDef.ts', './TipProfit.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, isValid, v3, tween, find, Label, BlackWordProxy, BaccaratDef, TipProfit;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
      v3 = module.v3;
      tween = module.tween;
      find = module.find;
      Label = module.Label;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      TipProfit = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f568096BuVKxZFjs5C1M84E", "BOtherInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BOtherInfo = exports('default', (_dec = ccclass("BOtherInfo"), _dec(_class = /*#__PURE__*/function (_TipProfit) {
        _inheritsLoose(BOtherInfo, _TipProfit);
        function BOtherInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _TipProfit.call.apply(_TipProfit, [this].concat(args)) || this;
          _this._chatQueueList = [];
          _this._expressionQueueList = [];
          return _this;
        }
        var _proto = BOtherInfo.prototype;
        _proto.start = function start() {
          var _this2 = this;
          _TipProfit.prototype.start.call(this);
          if (this.allowOpenUsers) {
            gts.UI.OnClick(this.node, function () {
              _this2.EmitEvent(BaccaratDef.Event.OPEN_USERS_PAGE);
            }, this);
          }
        };
        _proto.showPlayerChat = function showPlayerChat(data) {
          var msg = data.datainfo;
          var info = msg;
          if (data.otherPlayer) {
            if (info.MsgType == 1) {
              this._chatQueueList.push(info);
              this.showPublicChat(1);
            } else if (info.MsgType == 2) {
              this._expressionQueueList.push(info);
              this.showPublicChat(2);
            }
          }
        };
        _proto.showPublicChat = function showPublicChat(nType) {
          var _this3 = this;
          if (nType == 1) {
            //            //文本
            if (!this._chatQueueList || this._chatQueueList.length < 1) return;
            var _loop = function _loop() {
              var node_chat = _this3.node_chat[i];
              if (!isValid(node_chat)) return 1; // continue
              if (!node_chat.active && _this3._chatQueueList.length > 0) {
                node_chat.active = true;
                var data = _this3._chatQueueList.shift();
                var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
                data.Content = BlackWordProxy.filter(data.Content);
                lbl_chat.string = data.Content;
                node_chat.scale = v3(0, 0, 1);
                var scale_y = i == 2 ? -1 : 1;
                tween(node_chat).stop().delay(0.1 + 0.15 * i).to(0.2, {
                  scale: v3(-1, scale_y, 1)
                }).delay(2.0).call(function () {
                  node_chat.active = false;
                  _this3.showPublicChat(1);
                }).start();
              }
            };
            for (var i = 0; i < 3; ++i) {
              if (_loop()) continue;
            }
          } else if (nType == 2) {
            if (!this._expressionQueueList || this._expressionQueueList.length < 1) return;
            var node_expression = this.node_expression;
            if (!isValid(node_expression)) return;
            if (!node_expression.active) {
              node_expression.active = true;
              node_expression.scale = v3(0, 0, 1);
              var data = this._expressionQueueList.shift();
              tween(node_expression).stop().call(function () {
                _this3.loadLocalFrameAnim(data.Content, node_expression, function () {
                  node_expression.active = false;
                  _this3.showPublicChat(2);
                });
              }).to(0.5, {
                scale: v3(1, 1, 1)
              }).start();
            }
          }
        }
        //    // update (dt) {}
        ;

        _createClass(BOtherInfo, [{
          key: "lnkUid",
          get: function get() {
            return BaccaratDef.UID_OTHER_PLAYER;
          }
        }, {
          key: "allowOpenUsers",
          get: function get() {
            return true;
          }
        }]);
        return BOtherInfo;
      }(TipProfit)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BPlayerInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './BlackWordProxy.ts', './BOtherInfo.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Sprite, CCInteger, Tween, tween, v3, UIOpacity, isValid, find, GUtil, BlackWordProxy, BOtherInfo, BaccaratDataMgr, BaccaratDef, Common;
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
      CCInteger = module.CCInteger;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      isValid = module.isValid;
      find = module.find;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      BOtherInfo = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "a408dASh3pFCpzYTUhUjbuk", "BPlayerInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BPlayerInfo = exports('default', (_dec = ccclass("BPlayerInfo"), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(CCInteger), _dec(_class = (_class2 = /*#__PURE__*/function (_BOtherInfo) {
        _inheritsLoose(BPlayerInfo, _BOtherInfo);
        function BPlayerInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BOtherInfo.call.apply(_BOtherInfo, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "noUser", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labNickname", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labOrder", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprAvatar", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labGold", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ndRoot", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnOpenInfo", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ndAni", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "headSize", _descriptor9, _assertThisInitialized(_this));
          _this._holdOrder = -1;
          //    // update (dt) {}
          _this._lnkUid = "";
          _this._holdHead = "";
          _this._holdName = "";
          return _this;
        }
        var _proto = BPlayerInfo.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {
          var _this2 = this;
          _BOtherInfo.prototype.start.call(this);
          gts.UI.OnClick(this.btnOpenInfo, function () {
            var player = BaccaratDataMgr.ins.PlayerWithUID(_this2.lnkUid);
            //                // this.EmitEvent(BaccaratDef.Event.OPEN_USER_INFO, { avatar: this._holdHead, name: this._holdName, gold: player.golds });
            if (player) {
              var item = {
                head: _this2._holdHead,
                gold: player.golds,
                name: _this2._holdName
              };
              GUtil.openPlayer(item);
            }
          }, this);
          this.OnEvent(BaccaratDef.Event.UPDATE_AVATAR, function (uid) {
            //            // let idx = BaccaratDataMgr.ins.IdxWithUid(uid);
            //            // let player = BaccaratDataMgr.ins.PlayerWithUID(uid);
            //            // let node = this._idx2avatar[idx];
            //            // this.UpdateAvatar(node, player);
            if (uid === _this2.lnkUid) {
              var player = BaccaratDataMgr.ins.PlayerWithUID(uid);
              gts.UI.SetLab(_this2.labGold, Common.ChangeMoneyShow(player.golds, 2));
            }
          });
        };
        _proto.UpdateInfo = function UpdateInfo(info) {
          this._lnkUid = info ? info.uid : "";
          if (!info) {
            return;
          }
          Common.nickNameFormatL(this.labNickname, info.nickName);
          gts.UI.SetLab(this.labGold, Common.ChangeMoneyShow(info.golds, 2));
        };
        _proto.OnShowProfitEvent = function OnShowProfitEvent() {
          _BOtherInfo.prototype.OnShowProfitEvent.call(this);
          var info = BaccaratDataMgr.ins.PlayerWithUID(this.lnkUid);
          if (info) {
            gts.UI.SetLab(this.labGold, Common.ChangeMoneyShow(info.golds, 2));
          }
        };
        _proto.SetAvatar = function SetAvatar(avatar, defaultHead) {
          //        // gts.Debug.Log(`#玩家 头像更新`);
          if (this.sprAvatar) {
            //            // let tmpurl = `head/${avatar}`;
            //            // cc.loader.loadRes(tmpurl, cc.SpriteFrame, (err: Error, sprframe: cc.SpriteFrame) => {
            //            //     if (!sprframe) {
            //            //         gts.Debug.Log(`#SetInfo: ${avatar}`);
            //            //         gts.Debug.LogErr(`# LoadAvatarErr: ${err.toString()}`);
            //            //     }
            //            //     this.sprAvatar.spriteFrame = sprframe ? sprframe : defaultHead;
            //            //     let as = this.sprAvatar.getComponent(gts.AutoScale);
            //            //     as.DoAutoScale();
            //            // });
            Common.getHead(avatar, this.sprAvatar).then(function () {
              //                // let as = this.sprAvatar.getComponent(gts.AutoScale);
              //                // as.DoAutoScale();
              //                // let scale = this.headSize / this.sprAvatar.node.getContentSize().width;
              //                // this.sprAvatar.node.scale = scale;
            });
          }
        };
        _proto.SetInfo = function SetInfo(info, order, defaultHead) {
          var _this3 = this;
          //        // info = null;
          //        // gts.Debug.Log(`#玩家 数据更新, holdOrder:${this.holdOrder}, order:${order}`);
          this._holdHead = "";
          this._holdName = "";
          this._lnkUid = info ? info.uid : "";
          if (!info) {
            this.visible = false;
            return;
          }
          this._holdHead = info.head;
          this._holdName = info.nickName;
          this.visible = true;
          var funcUpdateUI = function funcUpdateUI() {
            gts.UI.SetLab(_this3.labOrder, order + 1);
            Common.nickNameFormatL(_this3.labNickname, info.nickName);
            gts.UI.SetLab(_this3.labGold, Common.ChangeMoneyShow(info.golds, 2));
            _this3.SetAvatar(info.head, defaultHead);
            //            // gts.Debug.Log(`# BPI: ${JSON.stringify(info)}, order:${order}`);
          };

          this.scheduleOnce(function () {
            var oldOrder = _this3.holdOrder;
            _this3.holdOrder = order;
            if (oldOrder < 0 || oldOrder === order) {
              //                // gts.Debug.Log(`#头像更新-1`);
              funcUpdateUI();
            } else {
              //                // gts.Debug.Log(`#头像更新-2`);
              var dtAni = 0.3;
              Tween.stopAllByTarget(_this3.ndAni);
              // this.ndAni.runAction(
              //     cc.sequence(
              //         cc.spawn(cc.moveTo(dtAni, cc.v2(0, 45)).easing(cc.easeIn(3)), cc.fadeTo(dtAni, 0)),
              //         cc.callFunc(() => {
              //             funcUpdateUI();
              //         }, this),
              //         cc.spawn(cc.moveTo(dtAni * 3, cc.v2(0, 0)).easing(cc.easeOut(3)), cc.fadeTo(dtAni * 3, 255))
              //     )
              // );
              tween(_this3.ndAni).to(dtAni, {
                position: v3(0, 45)
              }).call(function () {
                funcUpdateUI();
              }).to(dtAni * 3, {
                position: v3(0, 0)
              }).start();
              tween(_this3.ndAni.getComponent(UIOpacity)).to(dtAni, {
                opacity: 0
              }).to(dtAni * 3, {
                opacity: 255
              }).start();
            }
          }, 0);
        };
        _proto.showPlayerChat = function showPlayerChat(data) {
          var msg = data.datainfo;
          var info = msg;
          if (this.lnkUid === info.FromUserId) {
            if (info.MsgType == 1) {
              var node_chat = this.node_chat[0];
              if (!isValid(node_chat)) return;
              var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
              info.Content = BlackWordProxy.filter(info.Content);
              lbl_chat.string = info.Content;
              node_chat.scale = v3(0, 0, 1);
              node_chat.active = true;
              var scale_x = this.node.getPosition().x > 0 ? -1 : 1;
              tween(node_chat).stop().to(0.2, {
                scale: v3(scale_x, 1, 1)
              }).delay(2.0).call(function () {
                node_chat.active = false;
              }).start();
            } else {
              this.node_expression.active = true;
              this.loadLocalFrameAnim(info.Content, this.node_expression);
            }
          }
        };
        _createClass(BPlayerInfo, [{
          key: "allowOpenUsers",
          get: function get() {
            return false;
          }
        }, {
          key: "holdOrder",
          get: function get() {
            return this._holdOrder;
          },
          set: function set(value) {
            this._holdOrder = value;
          }
        }, {
          key: "allowShow",
          get: function get() {
            return this._lnkUid !== BaccaratDataMgr.myUid ? true : false;
          }
        }, {
          key: "lnkUid",
          get: function get() {
            return this._lnkUid;
          }
        }, {
          key: "visible",
          set: function set(value) {
            this.node.active = true;
            GUtil.NodeVisible(this.labOrder.node, value);
            GUtil.NodeVisible(this.labNickname.node, value);
            GUtil.NodeVisible(this.labGold.node, value);
            GUtil.NodeVisible(this.ndAni, value);
            GUtil.NodeVisible(this.sprAvatar.node, value);
            GUtil.NodeVisible(this.noUser, !value);
          }
        }]);
        return BPlayerInfo;
      }(BOtherInfo), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "noUser", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labNickname", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labOrder", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sprAvatar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labGold", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ndRoot", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnOpenInfo", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ndAni", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "headSize", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BPoker.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './BSound.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Tween, tween, v3, Component, GUtil, BSound;
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
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      BSound = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "482ednwHxtL2qs2IbugguSX", "BPoker", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var BPoker = exports('default', (_dec = ccclass("BPoker"), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property({
        range: [0, 20]
      }), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BPoker, _Component);
        function BPoker() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spFace", _descriptor2, _assertThisInitialized(_this));
          _this._flag = "";
          //    // LIFE-CYCLE CALLBACKS:
          _this._minx = -50;
          _this._offsetx = 0;
          _this._cardval = 0;
          return _this;
        }
        var _proto = BPoker.prototype;
        // onLoad () {}
        _proto.start = function start() {};
        _proto.reset = function reset() {
          // 必须按目标停止已有动画；新建 tween().stop() 无法取消旧翻牌及其回调。
          Tween.stopAllByTarget(this.node);
          Tween.stopAllByTarget(this.spFace.node);
          Tween.stopAllByTarget(this.bg);
          this.bg.setPosition(0, this.bg.position.y);
          this.spFace.node.setPosition(this._minx, this.spFace.node.position.y);
        };
        _proto.DoOpenCard = function DoOpenCard(delay, cb, caller, ani, timeScale) {
          var _this2 = this;
          if (delay === void 0) {
            delay = 0;
          }
          if (ani === void 0) {
            ani = true;
          }
          if (timeScale === void 0) {
            timeScale = 1;
          }
          this.reset();
          // Tween 的时长独立于 Scheduler 倍速，眯牌、翻牌和间隔必须一起追帧。
          delay /= timeScale;
          var hnd = GUtil.MakeHnd(cb, caller);
          if (!ani) {
            tween(this.node).stop().delay(delay).call(function () {
              _this2.bg.setPosition(_this2._minx, _this2.bg.position.y);
              _this2.spFace.node.setPosition(0, _this2.spFace.node.position.y);
            }).start();
          } else {
            var s1_dt = 0.8 / timeScale;
            var s2_dt = 0.15 / timeScale;
            var s3_dt = 0.15 / timeScale;
            tween(this.node).stop().delay(delay).call(function () {
              tween(_this2.spFace.node).stop().to(s1_dt, {
                position: v3(_this2._minx + BPoker.maxOffsetX, _this2.spFace.node.position.y)
              } /*, { easing: 'line' }*/).to(s2_dt, {
                position: v3(_this2._minx, _this2.spFace.node.position.y)
              } /*, { easing: 'line' }*/).call(function () {
                tween(_this2.node).stop().delay(0.3 / timeScale).to(s3_dt, {
                  scale: v3(0, _this2.node.scale.y, 1)
                } /*{ easing: "line" }*/).call(function () {
                  _this2.bg.setPosition(_this2._minx, _this2.bg.position.y);
                  _this2.spFace.node.setPosition(0, _this2.spFace.node.position.y);
                  BSound.SE_OpenCard();
                }).to(s3_dt, {
                  scale: v3(1, _this2.node.scale.y, 1)
                }).call(function () {
                  gts.Debug.Log("# OPEN CARD FINISHED");
                  hnd();
                }).start();
              }).start();
              tween(_this2.bg).stop().to(s1_dt, {
                position: v3(BPoker.maxOffsetX * -1, _this2.bg.position.y)
              } /*, { easing: 'line' }*/).to(s2_dt, {
                position: v3(0, _this2.bg.position.y)
              } /*, { easing: 'line' }*/).start();
            }).start();
          }
        }
        // update (dt) {}
        ;

        _createClass(BPoker, [{
          key: "flag",
          get: function get() {
            return this._flag;
          }
          //    // @property({ displayName: '眯牌动画最大偏移' })
          ,

          set: function set(value) {
            this._flag = value;
          }
        }, {
          key: "offsetx",
          get: function get() {
            return this._offsetx;
          },
          set: function set(value) {
            if (value < 0) {
              value = 0;
            } else if (value > BPoker.maxOffsetX) {
              value = BPoker.maxOffsetX;
            }
            this._offsetx = value;
            this.bg.setPosition(value * -1, this.bg.position.y);
            this.spFace.node.setPosition(this._minx + value, this.spFace.node.position.y);
          }
        }, {
          key: "cardval",
          set: function set(value) {
            this._cardval = value;
          }
        }, {
          key: "face",
          set: function set(img) {
            this.spFace.spriteFrame = img;
          }
        }], [{
          key: "maxOffsetX",
          get: function get() {
            return 20;
          }
        }]);
        return BPoker;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spFace", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "offsetx", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "offsetx"), _class2.prototype)), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BPokerMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './BPoker.ts', './BSound.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteAtlas, instantiate, tween, AutoEventNode, GUtil, BPoker, BSound;
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
      SpriteAtlas = module.SpriteAtlas;
      instantiate = module.instantiate;
      tween = module.tween;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      BPoker = module.default;
    }, function (module) {
      BSound = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "79ec7tusC5A0JvxvdxAUBtf", "BPokerMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BPokerMgr = exports('default', (_dec = ccclass("BPokerMgr"), _dec2 = property(Node), _dec3 = property(SpriteAtlas), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(BPokerMgr, _AutoEventNode);
        function BPokerMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "masterCard", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useAtlas", _descriptor2, _assertThisInitialized(_this));
          _this._useTags = ["p_0", "b_0", "p_1", "b_1", "p_2", "b_2"];
          _this._cards = [];
          _this.timeScale = 1;
          //    // LIFE-CYCLE CALLBACKS:
          //    // onLoad () {}
          _this._name2flag = {};
          return _this;
        }
        var _proto = BPokerMgr.prototype;
        _proto.start = function start() {
          _AutoEventNode.prototype.start.call(this);
          var childs = this.node.children;
          for (var i = 0; i < childs.length; ++i) {
            var tmp = childs[i];
            if (tmp.name.startsWith("p_") || tmp.name.startsWith("b_") || tmp.name.startsWith("sb_") || tmp.name.startsWith("sp_")) {
              this._name2flag[tmp.name] = tmp;
            }
          }
          this._cards.push(this.masterCard.getComponent(BPoker));
          while (this._cards.length < this.max_count) {
            var clone = instantiate(this.masterCard);
            clone.name = "card_" + this._cards.length;
            clone.parent = this.node;
            this._cards.push(clone.getComponent(BPoker));
            //            // gts.Debug.Log(`# clone.name = ${clone.name}`);
          }

          //        // for (let i = 0; i < this._cards.length; ++i) {
          //        //     this.SetCardTo(this._cards[i].node, this._useTags[i], null);
          //        // }
          this.ResetAllCards();
        };
        _proto.HideCard = function HideCard(delay, flag) {
          var c = null;
          for (var i = 0; i < this._cards.length && !c; ++i) {
            if (this._cards[i].flag === flag) {
              c = this._cards[i];
            }
          }
          if (c) {
            // c.node.runAction(
            //     cc.sequence(
            //         cc.delayTime(delay),
            //         cc.callFunc(() => {
            //             c.flag = "";
            //             c.reset();
            //             c.node.active = false;
            //         })
            //     )
            // );
            tween(c.node).delay(delay / this.timeScale).call(function () {
              c.flag = "";
              c.reset();
              c.node.active = false;
            }).start();
          } else {
            gts.Debug.Log("# \u627E\u4E0D\u5230 card:" + flag);
          }
        };
        _proto.SetCardTo = function SetCardTo(card, flag, params) {
          var hnd = GUtil.MakeHnd(params ? params.cb : null, params ? params.caller : null);
          //        // let comm = card ? card.getComponent(BPoker) : null;
          //        // if (comm) {
          //        //     comm.flag = flag;
          //        // }
          if (params && params.dt > 0) {
            var ndFlag = this._name2flag[flag];
            if (ndFlag) {
              tween(card).stop().to(params.dt / this.timeScale, {
                scale: ndFlag.scale,
                angle: ndFlag.angle,
                position: ndFlag.position
              }).call(hnd).start();
            } else {
              hnd();
            }
          } else {
            var _ndFlag = this._name2flag[flag];
            if (_ndFlag) {
              card.scale = _ndFlag.scale;
              card.setPosition(_ndFlag.position);
              card.angle = _ndFlag.angle;
            }
            hnd();
          }
        };
        _proto.DoSendCard = function DoSendCard(sname, ename, dt, idx, cardval, cb, caller) {
          if (idx >= 0 && idx < this._cards.length) {
            var card = this._cards[idx];
            card.node.active = true;
            this.SetCardTo(card.node, sname, null);
            this.SetCardTo(card.node, ename, {
              dt: dt,
              cb: cb,
              caller: caller
            });
            card.flag = ename;
            var url = "poker_" + cardval;
            //            // gts.Debug.Log(`# 加载牌面(${cardval}): ${url}`)
            var sprfarme = this.useAtlas.getSpriteFrame(url);
            card.cardval = cardval;
            card.face = sprfarme;
            BSound.SE_SendCard();
          }
        };
        _proto.ResetAllCards = function ResetAllCards() {
          for (var i = 0; i < this._cards.length; ++i) {
            this._cards[i].reset();
            this._cards[i].node.active = false;
          }
        };
        _proto.OpenCard = function OpenCard(idx, delay, cb, caller) {
          if (delay === void 0) {
            delay = 0;
          }
          if (idx >= 0 && idx < this._cards.length) {
            this._cards[idx].DoOpenCard(delay, cb, caller, true, this.timeScale);
          }
        };
        _proto.SetResult = function SetResult(pCards, bCards) {
          var _this2 = this;
          var func = function func(tags, cards, offset) {
            for (var i = 0; i < tags.length; ++i) {
              if (i < cards.length) {
                var val = cards[i];
                var c = _this2._cards[i + offset];
                var url = "poker_" + val;
                //                    // gts.Debug.Log(`# 加载牌面(${val}): ${url}`)
                var sprfarme = _this2.useAtlas.getSpriteFrame(url);
                c.face = sprfarme;
                c.cardval = val;
                c.flag = tags[i];
                c.reset();
                c.DoOpenCard(0, null, null, false);
                _this2.SetCardTo(c.node, tags[i], null);
                c.node.active = true;
              }
            }
          };
          func(["p_0", "p_1", "p_2"], pCards, 0);
          func(["b_0", "b_1", "b_2"], bCards, 3);
        };
        _createClass(BPokerMgr, [{
          key: "max_count",
          get: function get() {
            return 6;
          }
        }, {
          key: "reset_flags",
          get: function get() {
            return ["sp0", "sp1", "sp2", "sb0", "sb1", "sb2"];
          }
        }]);
        return BPokerMgr;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "masterCard", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "useAtlas", [_dec3], {
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

System.register("chunks:///_virtual/BSound.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AutoEventNode.ts', './SoundMgr.ts', './MainManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, GameDef, AutoEventNode, SoundMgr, MainManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      SoundMgr = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "93531saugFBLJrjTW/bA5gq", "BSound", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BSound = exports('default', (_dec = ccclass("BSound"), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(BSound, _AutoEventNode);
        function BSound() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _this._sMgr = null;
          return _this;
        }
        var _proto = BSound.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          if (!BSound._ins) {
            BSound._ins = this;
            this._sMgr = SoundMgr.Alloc(GameDef.Game.Baccarat);
            this._sMgr.PlaySound(BSound.bgm, {
              bgm: true,
              volume: 0.5
            });
          }
        };
        BSound.SE_OpenCard = function SE_OpenCard() {
          if (!BSound._ins) {
            return;
          }
          BSound._ins._sMgr.PlaySound("sound/open-card");
        };
        BSound.SE_SendCard = function SE_SendCard() {
          if (!BSound._ins) {
            return;
          }
          BSound._ins._sMgr.PlaySound("sound/send-card");
        };
        BSound.SE_ChipIn = function SE_ChipIn() {
          if (!BSound._ins) {
            return;
          }
          BSound._ins._sMgr.PlaySound("sound/chip-in");
        };
        BSound.SE_ChipsSound = function SE_ChipsSound() {
          if (!BSound._ins) {
            return;
          }
          BSound._ins._sMgr.PlaySound("sound/chips-sound");
        };
        BSound.SE_PlayerWin = function SE_PlayerWin() {
          if (!BSound._ins) {
            return;
          }
          BSound._ins._sMgr.PlaySound("sound/tip/player-win");
        };
        BSound.SE_BankerWin = function SE_BankerWin() {
          if (!BSound._ins) {
            return;
          }
          BSound._ins._sMgr.PlaySound("sound/tip/bank-win");
        };
        BSound.SE_PleaseYourBet = function SE_PleaseYourBet() {
          if (!BSound._ins) {
            return;
          }
          BSound._ins._sMgr.PlaySound("sound/tip/please-your-bet");
        };
        BSound.SE_NoMoreBet = function SE_NoMoreBet() {
          if (!BSound._ins) {
            return;
          }
          BSound._ins._sMgr.PlaySound("sound/tip/no-more-bet");
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
          if (BSound._ins === this) {
            this._sMgr.StopSound(BSound.bgm);
            BSound._ins = null;
          }
        };
        _createClass(BSound, null, [{
          key: "bgm",
          get: function get() {
            return "sound/bgm";
          }
        }, {
          key: "soundMgr",
          get: function get() {
            var mMgr = MainManager.getInstance();
            var sMgr = mMgr ? mMgr.getAudioManager() : null;
            return sMgr;
          }
        }, {
          key: "soundMute",
          get: function get() {
            return this.soundMgr ? !this.soundMgr._soundEffect : true;
          }
          //    /** 当前是否处于静音状态 */
          ,

          set: function set(value) {
            if (this.soundMgr) {
              this.soundMgr._soundEffect = !value;
            }
          }
        }, {
          key: "bgmMute",
          get: function get() {
            return this.soundMgr ? !this.soundMgr._soundMusic : true;
          },
          set: function set(value) {
            if (this.soundMgr) {
              this.soundMgr._soundMusic = !value;
            }
            if (!BSound._ins) {
              return;
            }
            if (value) {
              BSound._ins._sMgr.StopSound(BSound.bgm);
            } else {
              BSound._ins._sMgr.PlaySound(BSound.bgm, {
                bgm: true,
                volume: 0.5
              });
            }
          }
        }]);
        return BSound;
      }(AutoEventNode), _class2._ins = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BUIDishRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDishRoad.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UIDishRoad;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      UIDishRoad = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f8efa2LJstKJ5nzGLAPQm3N", "BUIDishRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BUIDishRoad = exports('default', (_dec = ccclass('BUIDishRoad'), _dec(_class = /*#__PURE__*/function (_UIDishRoad) {
        _inheritsLoose(BUIDishRoad, _UIDishRoad);
        function BUIDishRoad() {
          return _UIDishRoad.apply(this, arguments) || this;
        }
        var _proto = BUIDishRoad.prototype;
        _proto.Data2Display = function Data2Display(data) {
          //        // return { resultIdx: 0, bankerPair: false, playPair: false };
          return {
            resultIdx: data.result,
            bankerPair: data.bankerPair,
            playerPair: data.playerPair
          };
        }
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        ;

        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return BUIDishRoad;
      }(UIDishRoad)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BUIHepler.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDialog.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './PlatformMgr.ts', './HallDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Node, UIDialog, ConfigManager, EventManager, NetManager, PlatformMgr, HallInfoType;
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
    }, function (module) {
      UIDialog = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      PlatformMgr = module.default;
    }, function (module) {
      HallInfoType = module.HallInfoType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "7cad9FCHahERqH5IS6TNzP7", "BUIHepler", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BUIHelper = exports('default', (_dec = ccclass("BUIHepler"), _dec2 = property([Label]), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_UIDialog) {
        _inheritsLoose(BUIHelper, _UIDialog);
        function BUIHelper() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIDialog.call.apply(_UIDialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "oddList", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_content1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_content2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_next", _descriptor4, _assertThisInitialized(_this));
          _this.index = 0;
          return _this;
        }
        var _proto = BUIHelper.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _UIDialog.prototype.onLoad.call(this);
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.hallInfo, {
            key: [HallInfoType.BJL_INFO]
          });
        };
        _proto.start = function start() {
          //        // this.scrollview.scrollToTop();
          //        // let list = BaccaratDataMgr.ins.oddList;
          //        // if (list) {
          //        //     for (let i = 0; i < 4; i++) {
          //        //         this.oddList[i].string = "" + list[i].Odds / 100;
          //        //     }
          //        // }

          this.showContent();
        };
        _proto.recv = function recv(data) {
          if (typeof data.Data.bjlRebateConf != "undefined") {
            for (var _iterator = _createForOfIteratorHelperLoose(this.oddList), _step; !(_step = _iterator()).done;) {
              var i = _step.value;
              i.string = data.Data.bjlRebateConf / 10 + "";
            }
          }
        };
        _proto.onEnable = function onEnable() {
          //        //点击此游戏按钮
          EventManager.instance.on(ConfigManager.instance.protocolHall.hallInfo, this.recv, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.protocolHall.hallInfo, this.recv, this);
        };
        _proto.onClickUrl = function onClickUrl() {
          PlatformMgr.p.openUrl("https://md5.services/");
        };
        _proto.onClickNext = function onClickNext() {
          this.index += 1;
          if (this.index > 1) {
            this.index = 0;
          }
          this.showContent();
        };
        _proto.showType = function showType(index) {
          if (index === void 0) {
            index = 0;
          }
          this.index = index;
          this.showContent();
          if (index == 0) this.node_next.active = false;
        };
        _proto.showContent = function showContent() {
          this.node_content1.active = this.index == 0;
          this.node_content2.active = this.index != 0;
        }
        //    // update (dt) {}
        ;

        return BUIHelper;
      }(UIDialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "oddList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_content2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_next", [_dec5], {
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

System.register("chunks:///_virtual/BUIRecordLine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "a7fd3d7yFlFLa3ss6zpmQ/u", "BUIRecordLine", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BUIRecordLine = exports('default', (_dec = ccclass("BUIRecordLine"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BUIRecordLine, _Component);
        function BUIRecordLine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "labNo", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labArea", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labMoney", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labProfit", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labBankerPt", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labPlayerPt", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labDate", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labTime", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "line", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BUIRecordLine.prototype;
        _proto.Reset = function Reset() {
          var childs = this.node.children;
          for (var i = 0; i < childs.length; ++i) {
            var c = childs[i];
            gts.UI.SetLab(c, "");
          }
          this.line.active = false;
        }
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        ;

        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return BUIRecordLine;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labNo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labArea", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labMoney", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labProfit", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labBankerPt", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labPlayerPt", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labDate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "labTime", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "line", [_dec10], {
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

System.register("chunks:///_virtual/BUIRecords.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './UIDialog.ts', './BaccaratDef.ts', './BaccaratMsg.ts', './BMsgSender.ts', './BUIRecordLine.ts', './I18n.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, CCInteger, Label, color, instantiate, GUtil, UIDialog, BaccaratDef, BaccaratMsg, BMsgSender, BUIRecordLine, i18n, Common;
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
      CCInteger = module.CCInteger;
      Label = module.Label;
      color = module.color;
      instantiate = module.instantiate;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      UIDialog = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      BaccaratMsg = module.BaccaratMsg;
    }, function (module) {
      BMsgSender = module.default;
    }, function (module) {
      BUIRecordLine = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "5a06c+7PSlHeZGzbp4Tbk6W", "BUIRecords", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BUIRecords = exports('default', (_dec = ccclass("BUIRecords"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property({
        type: CCInteger
      }), _dec8 = property(Label), _dec9 = property({}), _dec10 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_UIDialog) {
        _inheritsLoose(BUIRecords, _UIDialog);
        function BUIRecords() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIDialog.call.apply(_UIDialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ndLoading", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnLeft", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineTarget", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineParent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineCount", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labPage", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pageFmt", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noDataFlag", _descriptor9, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._loading = false;
          _this._reqPage = 0;
          //    // LIFE-CYCLE CALLBACKS:
          //    // onLoad () {}
          _this._lines = null;
          return _this;
        }
        var _proto = BUIRecords.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.Open();
          GUtil.NodeRotate(this.ndLoading);
          GUtil.NodeVisible(this.noDataFlag, false);
          this.OnEvent(BaccaratMsg.MsgID.S2C_GET_RECORDS, function (data) {
            _this2.loading = false;
            if (data.Code != 0) {
              Common.showTip(i18n.errTip(data.Code));
              return;
            }
            if (data.Data) {
              _this2._curPage = _this2._reqPage;
              _this2.UpdatePageLab();
              for (var i = 0; i < _this2.lines.length; ++i) {
                _this2.lines[i].Reset();
              }
              var arr = data.Data;
              for (var _i = 0; _i < arr.length && _i < _this2.lines.length; ++_i) {
                var d = arr[_i];
                var l = _this2.lines[_i];
                gts.UI.SetLab(l.labNo, d.gameNo);
                gts.UI.SetLab(l.labArea, "" + BaccaratDef.AREA_NAME["DIS" + d.pos]);
                gts.UI.SetLab(l.labMoney, Common.numFormat(d.betCount));
                gts.UI.SetLab(l.labProfit, Common.numFormat(d.score));
                gts.UI.SetLab(l.labBankerPt, d.bankerDian);
                gts.UI.SetLab(l.labPlayerPt, d.playerDian);
                //                    // let time = "" + this.format(d.createTime * 1000);
                var date = Common.getTimeFormat(d.CreateAt);
                gts.UI.SetLab(l.labDate, date.date);
                gts.UI.SetLab(l.labTime, date.time);
                l.labProfit.color = d.score > 0 ? color(0xff, 0, 0, 255) : color(0x68, 0xf5, 0x01, 255);
                var last = _i == arr.length - 1 || _i == _this2.lines.length - 1;
                l.line.active = !last;
              }
            } else {
              if (_this2._curPage === 0) ;
            }
          });
          gts.UI.OnClick(this.btnLeft, function () {
            if (!_this2._loading) {
              var dstPage = _this2._curPage - 1;
              if (dstPage <= 0) {
                dstPage = 0;
              }
              if (dstPage === _this2._curPage) {
                return;
              }
              _this2.loading = true;
              _this2._reqPage = dstPage;
              var offset = dstPage * _this2.lineCount;
              BMsgSender.Send_ReqRecords({
                limit: _this2.lineCount,
                offset: offset
              });
            }
          }, this);
          gts.UI.OnClick(this.btnRight, function () {
            if (!_this2._loading) {
              var dstPage = _this2._curPage + 1;
              _this2._reqPage = dstPage;
              _this2.loading = true;
              var offset = dstPage * _this2.lineCount;
              BMsgSender.Send_ReqRecords({
                limit: _this2.lineCount,
                offset: offset
              });
            }
          }, this);
        };
        _proto.add0 = function add0(m) {
          return m < 10 ? "0" + m : m;
        };
        _proto.format = function format(shijianchuo) {
          var time = new Date(shijianchuo);
          var y = time.getFullYear();
          var m = time.getMonth() + 1;
          var d = time.getDate();
          var h = time.getHours();
          var mm = time.getMinutes();
          var s = time.getSeconds();
          return y + "-" + this.add0(m) + "-" + this.add0(d) + "\n" + this.add0(h) + ":" + this.add0(mm) + ":" + this.add0(s);
        }
        //    // update (dt) {}
        ;

        _proto.Open = function Open() {
          _UIDialog.prototype.Open.call(this);
          this._curPage = 0;
          this._reqPage = 0;
          this.loading = true;
          for (var i = 0; i < this.lines.length; ++i) {
            this.lines[i].Reset();
          }
          this.UpdatePageLab();
          GUtil.HideNode(this.ndLoading);
          BMsgSender.Send_ReqRecords({
            limit: this.lineCount,
            offset: this._curPage
          });
        };
        _proto.UpdatePageLab = function UpdatePageLab() {
          gts.UI.SetLab(this.labPage, gts.Str.FmtStr(this.pageFmt, this._curPage + 1));
        };
        _createClass(BUIRecords, [{
          key: "loading",
          set: function set(value) {
            this._loading = value;
            GUtil.NodeVisible(this.ndLoading, value);
          }
        }, {
          key: "lines",
          get: function get() {
            if (!this._lines) {
              this._lines = [];
              this._lines.push(this.lineTarget.getComponent(BUIRecordLine));
              for (var i = 1; i < this.lineCount; ++i) {
                var clone = instantiate(this.lineTarget);
                clone.parent = this.lineParent;
                this._lines.push(clone.getComponent(BUIRecordLine));
              }
            }
            return this._lines;
          }
        }]);
        return BUIRecords;
      }(UIDialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndLoading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnLeft", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnRight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lineTarget", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lineParent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lineCount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labPage", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pageFmt", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "noDataFlag", [_dec10], {
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

System.register("chunks:///_virtual/BUIRoadList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDialog.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './RoadListDef.ts', './UIBigEyeRoad.ts', './UIBigRoad.ts', './UICockroach.ts', './UIScoreRoad.ts', './UISmallRoad.ts', './BUIDishRoad.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCInteger, Label, Node, PageView, find, UIDialog, BaccaratDataMgr, BaccaratDef, RoadListDef, UIBigEyeRoad, UIBigRoad, UICockroach, UIScoreRoad, UISmallRoad, BUIDishRoad;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      Label = module.Label;
      Node = module.Node;
      PageView = module.PageView;
      find = module.find;
    }, function (module) {
      UIDialog = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      RoadListDef = module.RoadListDef;
    }, function (module) {
      UIBigEyeRoad = module.default;
    }, function (module) {
      UIBigRoad = module.default;
    }, function (module) {
      UICockroach = module.default;
    }, function (module) {
      UIScoreRoad = module.default;
    }, function (module) {
      UISmallRoad = module.default;
    }, function (module) {
      BUIDishRoad = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "76c56yW7RRCdpjPhL9vtv4+", "BUIRoadList", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BUIRoadList = exports('default', (_dec = ccclass("BUIRoadList"), _dec2 = property(BUIDishRoad), _dec3 = property({
        displayName: "大路",
        type: UIBigRoad
      }), _dec4 = property({
        displayName: "小路",
        type: UISmallRoad
      }), _dec5 = property({
        displayName: "大眼路",
        type: UIBigEyeRoad
      }), _dec6 = property({
        displayName: "蟑螂路",
        type: UICockroach
      }), _dec7 = property({
        displayName: "分数板",
        type: UIScoreRoad
      }), _dec8 = property({
        displayName: "统计局数",
        type: CCInteger
      }), _dec9 = property(Label), _dec10 = property({
        type: [Node],
        tooltip: '按照"闲,庄,和,闲对,庄对"顺序'
      }), _dec11 = property(PageView), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_UIDialog) {
        _inheritsLoose(BUIRoadList, _UIDialog);
        function BUIRoadList() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIDialog.call.apply(_UIDialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "uiDishRoad", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiBigLoad", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiSmallRoad", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiBigEyeRoad", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiCockroach", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiScoreRoad", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalCount", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labTotalCnt", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "groups", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pageView", _descriptor10, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "btnRefresh", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnLeft", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRight", _descriptor13, _assertThisInitialized(_this));
          //    // onLoad () {}
          //    // private _debuglogs_str = `[{"bankerDian":6,"bankerPair":true,"playerDian":2,"playerPair":false,"result":1},{"bankerDian":9,"bankerPair":false,"playerDian":7,"playerPair":false,"result":1},{"bankerDian":6,"bankerPair":false,"playerDian":7,"playerPair":false,"result":0},{"bankerDian":8,"bankerPair":false,"playerDian":9,"playerPair":false,"result":0},{"bankerDian":4,"bankerPair":false,"playerDian":4,"playerPair":false,"result":2},{"bankerDian":6,"bankerPair":false,"playerDian":3,"playerPair":false,"result":1},{"bankerDian":6,"bankerPair":false,"playerDian":7,"playerPair":false,"result":0},{"bankerDian":2,"bankerPair":false,"playerDian":1,"playerPair":false,"result":1},{"bankerDian":7,"bankerPair":false,"playerDian":4,"playerPair":true,"result":1},{"bankerDian":5,"bankerPair":false,"playerDian":5,"playerPair":false,"result":2},{"bankerDian":7,"bankerPair":false,"playerDian":9,"playerPair":false,"result":0},{"bankerDian":0,"bankerPair":false,"playerDian":2,"playerPair":false,"result":0},{"bankerDian":8,"bankerPair":false,"playerDian":1,"playerPair":false,"result":1},{"bankerDian":5,"bankerPair":false,"playerDian":6,"playerPair":false,"result":0},{"bankerDian":4,"bankerPair":false,"playerDian":6,"playerPair":false,"result":0},{"bankerDian":1,"bankerPair":false,"playerDian":7,"playerPair":false,"result":0},{"bankerDian":9,"bankerPair":false,"playerDian":7,"playerPair":false,"result":1},{"bankerDian":7,"bankerPair":false,"playerDian":5,"playerPair":false,"result":1},{"bankerDian":5,"bankerPair":false,"playerDian":1,"playerPair":false,"result":1},{"bankerDian":5,"bankerPair":false,"playerDian":6,"playerPair":false,"result":0},{"bankerDian":9,"bankerPair":false,"playerDian":4,"playerPair":false,"result":1},{"bankerDian":6,"bankerPair":true,"playerDian":0,"playerPair":false,"result":1},{"bankerDian":1,"bankerPair":false,"playerDian":7,"playerPair":false,"result":0},{"bankerDian":3,"bankerPair":false,"playerDian":8,"playerPair":false,"result":0},{"bankerDian":4,"bankerPair":false,"playerDian":1,"playerPair":false,"result":1},{"bankerDian":7,"bankerPair":false,"playerDian":3,"playerPair":false,"result":1},{"bankerDian":2,"bankerPair":false,"playerDian":2,"playerPair":false,"result":2},{"bankerDian":7,"bankerPair":false,"playerDian":6,"playerPair":false,"result":1},{"bankerDian":8,"bankerPair":false,"playerDian":9,"playerPair":false,"result":0},{"bankerDian":8,"bankerPair":true,"playerDian":7,"playerPair":false,"result":1},{"bankerDian":2,"bankerPair":false,"playerDian":8,"playerPair":false,"result":0},{"bankerDian":8,"bankerPair":false,"playerDian":9,"playerPair":false,"result":0},{"bankerDian":7,"bankerPair":false,"playerDian":6,"playerPair":false,"result":1},{"bankerDian":2,"bankerPair":false,"playerDian":8,"playerPair":false,"result":0},{"bankerDian":9,"bankerPair":false,"playerDian":2,"playerPair":false,"result":1},{"bankerDian":4,"bankerPair":false,"playerDian":5,"playerPair":false,"result":0},{"bankerDian":7,"bankerPair":false,"playerDian":8,"playerPair":false,"result":0},{"bankerDian":6,"bankerPair":false,"playerDian":6,"playerPair":false,"result":2},{"bankerDian":9,"bankerPair":false,"playerDian":5,"playerPair":false,"result":1},{"bankerDian":6,"bankerPair":false,"playerDian":5,"playerPair":false,"result":1},{"bankerDian":7,"bankerPair":false,"playerDian":6,"playerPair":false,"result":1},{"bankerDian":5,"bankerPair":true,"playerDian":6,"playerPair":true,"result":0},{"bankerDian":3,"bankerPair":false,"playerDian":9,"playerPair":false,"result":0},{"bankerDian":2,"bankerPair":false,"playerDian":1,"playerPair":false,"result":1},{"bankerDian":7,"bankerPair":false,"playerDian":1,"playerPair":false,"result":1},{"bankerDian":6,"bankerPair":false,"playerDian":0,"playerPair":false,"result":1},{"bankerDian":2,"bankerPair":false,"playerDian":7,"playerPair":false,"result":0},{"bankerDian":5,"bankerPair":false,"playerDian":3,"playerPair":false,"result":1},{"bankerDian":9,"bankerPair":false,"playerDian":7,"playerPair":false,"result":1},{"bankerDian":7,"bankerPair":false,"playerDian":3,"playerPair":false,"result":1},{"bankerDian":8,"bankerPair":false,"playerDian":6,"playerPair":false,"result":1},{"bankerDian":4,"bankerPair":true,"playerDian":4,"playerPair":true,"result":2},{"bankerDian":6,"bankerPair":true,"playerDian":6,"playerPair":false,"result":2},{"bankerDian":5,"bankerPair":false,"playerDian":5,"playerPair":false,"result":2},{"bankerDian":4,"bankerPair":false,"playerDian":1,"playerPair":false,"result":1},{"bankerDian":6,"bankerPair":false,"playerDian":1,"playerPair":false,"result":1},{"bankerDian":7,"bankerPair":false,"playerDian":5,"playerPair":false,"result":1},{"bankerDian":0,"bankerPair":false,"playerDian":7,"playerPair":false,"result":0},{"bankerDian":5,"bankerPair":false,"playerDian":9,"playerPair":false,"result":0},{"bankerDian":0,"bankerPair":false,"playerDian":8,"playerPair":false,"result":0},{"bankerDian":6,"bankerPair":false,"playerDian":4,"playerPair":false,"result":1},{"bankerDian":4,"bankerPair":false,"playerDian":9,"playerPair":false,"result":0},{"bankerDian":9,"bankerPair":false,"playerDian":7,"playerPair":false,"result":1},{"bankerDian":7,"bankerPair":false,"playerDian":6,"playerPair":false,"result":1},{"bankerDian":8,"bankerPair":false,"playerDian":0,"playerPair":false,"result":1},{"bankerDian":5,"bankerPair":false,"playerDian":2,"playerPair":false,"result":1},{"bankerDian":6,"bankerPair":false,"playerDian":7,"playerPair":false,"result":0},{"bankerDian":4,"bankerPair":false,"playerDian":6,"playerPair":false,"result":0},{"bankerDian":2,"bankerPair":false,"playerDian":7,"playerPair":false,"result":0},{"bankerDian":7,"bankerPair":false,"playerDian":8,"playerPair":false,"result":0},{"bankerDian":1,"bankerPair":false,"playerDian":2,"playerPair":false,"result":0},{"bankerDian":4,"bankerPair":true,"playerDian":2,"playerPair":false,"result":1}]`;
          _this._debuglogs_str = "[{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":4,\"playerPair\":false,\"result\":1},{\"bankerDian\":5,\"bankerPair\":false,\"playerDian\":8,\"playerPair\":false,\"result\":0},{\"bankerDian\":9,\"bankerPair\":false,\"playerDian\":5,\"playerPair\":false,\"result\":1},{\"bankerDian\":0,\"bankerPair\":true,\"playerDian\":7,\"playerPair\":false,\"result\":0},{\"bankerDian\":4,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":false,\"result\":0},{\"bankerDian\":3,\"bankerPair\":false,\"playerDian\":8,\"playerPair\":true,\"result\":0},{\"bankerDian\":7,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":false,\"result\":0},{\"bankerDian\":8,\"bankerPair\":false,\"playerDian\":3,\"playerPair\":false,\"result\":1},{\"bankerDian\":4,\"bankerPair\":false,\"playerDian\":7,\"playerPair\":false,\"result\":0},{\"bankerDian\":4,\"bankerPair\":false,\"playerDian\":7,\"playerPair\":false,\"result\":0},{\"bankerDian\":8,\"bankerPair\":true,\"playerDian\":5,\"playerPair\":false,\"result\":1},{\"bankerDian\":4,\"bankerPair\":false,\"playerDian\":1,\"playerPair\":false,\"result\":1},{\"bankerDian\":2,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":0},{\"bankerDian\":7,\"bankerPair\":false,\"playerDian\":8,\"playerPair\":false,\"result\":0},{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":7,\"playerPair\":false,\"result\":0},{\"bankerDian\":2,\"bankerPair\":true,\"playerDian\":2,\"playerPair\":false,\"result\":2},{\"bankerDian\":8,\"bankerPair\":false,\"playerDian\":0,\"playerPair\":false,\"result\":1},{\"bankerDian\":3,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":0},{\"bankerDian\":5,\"bankerPair\":false,\"playerDian\":3,\"playerPair\":false,\"result\":1},{\"bankerDian\":9,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":1},{\"bankerDian\":5,\"bankerPair\":false,\"playerDian\":0,\"playerPair\":true,\"result\":1},{\"bankerDian\":0,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":0},{\"bankerDian\":3,\"bankerPair\":false,\"playerDian\":7,\"playerPair\":false,\"result\":0},{\"bankerDian\":9,\"bankerPair\":false,\"playerDian\":4,\"playerPair\":false,\"result\":1},{\"bankerDian\":8,\"bankerPair\":false,\"playerDian\":0,\"playerPair\":false,\"result\":1},{\"bankerDian\":0,\"bankerPair\":false,\"playerDian\":4,\"playerPair\":true,\"result\":0},{\"bankerDian\":2,\"bankerPair\":false,\"playerDian\":4,\"playerPair\":false,\"result\":0},{\"bankerDian\":4,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":false,\"result\":0},{\"bankerDian\":9,\"bankerPair\":false,\"playerDian\":1,\"playerPair\":false,\"result\":1},{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":2},{\"bankerDian\":7,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":false,\"result\":0},{\"bankerDian\":7,\"bankerPair\":false,\"playerDian\":8,\"playerPair\":true,\"result\":0},{\"bankerDian\":2,\"bankerPair\":false,\"playerDian\":7,\"playerPair\":false,\"result\":0},{\"bankerDian\":1,\"bankerPair\":false,\"playerDian\":4,\"playerPair\":false,\"result\":0},{\"bankerDian\":3,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":0},{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":5,\"playerPair\":false,\"result\":1},{\"bankerDian\":4,\"bankerPair\":true,\"playerDian\":6,\"playerPair\":false,\"result\":0},{\"bankerDian\":3,\"bankerPair\":false,\"playerDian\":0,\"playerPair\":false,\"result\":1},{\"bankerDian\":7,\"bankerPair\":false,\"playerDian\":8,\"playerPair\":false,\"result\":0},{\"bankerDian\":5,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":0},{\"bankerDian\":4,\"bankerPair\":false,\"playerDian\":0,\"playerPair\":false,\"result\":1},{\"bankerDian\":7,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":1},{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":7,\"playerPair\":false,\"result\":0},{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":2},{\"bankerDian\":9,\"bankerPair\":false,\"playerDian\":1,\"playerPair\":false,\"result\":1},{\"bankerDian\":2,\"bankerPair\":true,\"playerDian\":0,\"playerPair\":false,\"result\":1},{\"bankerDian\":7,\"bankerPair\":false,\"playerDian\":3,\"playerPair\":false,\"result\":1},{\"bankerDian\":8,\"bankerPair\":false,\"playerDian\":8,\"playerPair\":false,\"result\":2},{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":7,\"playerPair\":false,\"result\":0},{\"bankerDian\":3,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":false,\"result\":0},{\"bankerDian\":2,\"bankerPair\":true,\"playerDian\":7,\"playerPair\":false,\"result\":0},{\"bankerDian\":3,\"bankerPair\":false,\"playerDian\":7,\"playerPair\":false,\"result\":0},{\"bankerDian\":8,\"bankerPair\":false,\"playerDian\":2,\"playerPair\":false,\"result\":1},{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":3,\"playerPair\":true,\"result\":1},{\"bankerDian\":4,\"bankerPair\":false,\"playerDian\":5,\"playerPair\":false,\"result\":0},{\"bankerDian\":7,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":false,\"result\":0},{\"bankerDian\":2,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":false,\"result\":0},{\"bankerDian\":5,\"bankerPair\":false,\"playerDian\":0,\"playerPair\":false,\"result\":1},{\"bankerDian\":1,\"bankerPair\":false,\"playerDian\":4,\"playerPair\":false,\"result\":0},{\"bankerDian\":1,\"bankerPair\":false,\"playerDian\":8,\"playerPair\":false,\"result\":0},{\"bankerDian\":8,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":false,\"result\":0},{\"bankerDian\":1,\"bankerPair\":true,\"playerDian\":3,\"playerPair\":false,\"result\":0},{\"bankerDian\":7,\"bankerPair\":false,\"playerDian\":7,\"playerPair\":false,\"result\":2},{\"bankerDian\":5,\"bankerPair\":false,\"playerDian\":5,\"playerPair\":true,\"result\":2},{\"bankerDian\":2,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":true,\"result\":0},{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":false,\"result\":0},{\"bankerDian\":4,\"bankerPair\":false,\"playerDian\":5,\"playerPair\":false,\"result\":0},{\"bankerDian\":5,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":0},{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":6,\"playerPair\":false,\"result\":2},{\"bankerDian\":6,\"bankerPair\":false,\"playerDian\":9,\"playerPair\":false,\"result\":0},{\"bankerDian\":8,\"bankerPair\":false,\"playerDian\":1,\"playerPair\":false,\"result\":1},{\"bankerDian\":8,\"bankerPair\":true,\"playerDian\":6,\"playerPair\":false,\"result\":1}]";
          return _this;
        }
        var _proto = BUIRoadList.prototype;
        _proto.start = function start() {
          var _this2 = this;
          gts.UI.SetLab(this.labTotalCnt, 0);
          this.UpdateUI();
          this.OnEvent(BaccaratDef.Event.UPDATE_ROAD_LIST, function () {
            _this2.UpdateUI();
          });
          if (this.pageView) {
            this.scheduleOnce(function () {
              _this2.pageView.scrollToLeft();
            }, 0);
          }
          //        // gts.UI.OnClick(this.btnRefresh, () => {

          //        // }, this);
          this.OnEvent(BaccaratDef.Event.TEST_REFRESH_ROADLIST, function () {
            var logs = null;
            logs = JSON.parse(_this2._debuglogs_str);
            _this2.UpdateUI(logs);
          });
          gts.UI.OnClick(this.btnLeft, function () {
            var curpage = _this2.pageView.getCurrentPageIndex();
            if (curpage > 0) {
              _this2.pageView.scrollToPage(curpage - 1, 0.2);
            }
          }, this);
          gts.UI.OnClick(this.btnRight, function () {
            var curPage = _this2.pageView.getCurrentPageIndex();
            if (curPage < _this2.pageView.getPages().length - 1) {
              _this2.pageView.scrollToPage(curPage + 1, 0.2);
            }
          }, this);
        }
        //    // update (dt) {}
        ;

        _proto.UpdateUI = function UpdateUI(logs) {
          if (logs === void 0) {
            logs = null;
          }
          if (!logs) {
            logs = BaccaratDataMgr.ins.GetHistory(this.totalCount);
          }
          gts.UI.SetLab(this.labTotalCnt, logs.length);
          var values = {};
          var GetVal = function GetVal(val) {
            var elmt = values[val];
            if (!elmt) {
              elmt = {
                count: 0,
                percent: 0
              };
              values[val] = elmt;
            }
            return elmt;
          };
          for (var i = 0; i < logs.length; ++i) {
            var tmp = logs[i];
            var elmtA = GetVal(tmp.result);
            elmtA.count += 1;
            if (tmp.bankerPair) {
              var elmtBP = GetVal(BaccaratDef.AREA.BANKER_PAIR);
              elmtBP.count += 1;
            }
            if (tmp.playerPair) {
              var elmPP = GetVal(BaccaratDef.AREA.PLAYER_PAIR);
              elmPP.count += 1;
            }
          }
          var keys = Object.keys(values);
          for (var _i = 0; _i < keys.length; ++_i) {
            var _tmp = values[keys[_i]];
            _tmp.percent = _tmp.count / logs.length * 100;
          }
          for (var _i2 = 0; _i2 < this.groups.length; ++_i2) {
            var labCnt = find("lab_count", this.groups[_i2]);
            var labPrecent = find("lab_precent", this.groups[_i2]);
            var _tmp2 = GetVal(_i2);
            gts.UI.SetLab(labCnt, _tmp2.count);
            gts.UI.SetLab(labPrecent, _tmp2.percent.toFixed(2) + "%");
          }
          if (this.uiDishRoad) {
            this.uiDishRoad.SetData(logs);
          }
          var gameResultData = [];
          for (var _i3 = 0; _i3 < logs.length; ++_i3) {
            var resultData = new RoadListDef.Result();
            var _tmp3 = logs[_i3];
            resultData.Banker = _tmp3.bankerDian > _tmp3.playerDian;
            resultData.BankerPair = _tmp3.bankerPair;
            resultData.Dragon = false;
            resultData.Player = _tmp3.bankerDian < _tmp3.playerDian;
            resultData.PlayerPair = _tmp3.playerPair;
            resultData.Tie = _tmp3.bankerDian === _tmp3.playerDian;
            resultData.Tiger = false;
            gameResultData.push(resultData);
          }
          var bigRoadDic = [];
          var isFirstTie = [];
          var roadCellData = RoadListDef.Util.parseBigRoadDatas(gameResultData, bigRoadDic, isFirstTie);
          if (this.uiBigLoad) {
            this.uiBigLoad.UpdateUI(roadCellData, true);
          }
          if (this.uiSmallRoad) {
            this.uiSmallRoad.UpdateUI(roadCellData, bigRoadDic, true);
          }
          if (this.uiBigEyeRoad) {
            this.uiBigEyeRoad.UpdateUI(roadCellData, bigRoadDic, true);
          }
          if (this.uiCockroach) {
            this.uiCockroach.UpdateUI(roadCellData, bigRoadDic, true);
          }
          if (this.uiScoreRoad) {
            this.uiScoreRoad.UpdateUI(logs, true);
          }
        };
        return BUIRoadList;
      }(UIDialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiDishRoad", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiBigLoad", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uiSmallRoad", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "uiBigEyeRoad", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiCockroach", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "uiScoreRoad", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "totalCount", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 72;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "labTotalCnt", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "groups", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "pageView", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnRefresh", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnLeft", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "btnRight", [_dec14], {
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

System.register("chunks:///_virtual/BUIUserInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './UIDialog.ts', './BaccaratDef.ts', './BPlayerInfo.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, GUtil, UIDialog, BaccaratDef, BPlayerInfo, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      UIDialog = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      BPlayerInfo = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3a416bVWzFAb59i8+nGUy7B", "BUIUserInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BUIUserInfo = exports('default', (_dec = ccclass("BUIUserInfo"), _dec2 = property(BPlayerInfo), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_UIDialog) {
        _inheritsLoose(BUIUserInfo, _UIDialog);
        function BUIUserInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIDialog.call.apply(_UIDialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "playerInfo", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultHead", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BUIUserInfo.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {
          var _this2 = this;
          GUtil.HideNode(this.node);
          this.OnEvent(BaccaratDef.Event.OPEN_USER_INFO, function (data) {
            if (_this2.playerInfo) {
              _this2.playerInfo.SetAvatar(data.avatar, _this2.defaultHead);
              gts.UI.SetLab(_this2.playerInfo.labNickname, data.name);
              gts.UI.SetLab(_this2.playerInfo.labGold, Common.numFormat(data.gold));
            }
            _this2.Open();
          });
        }
        //    // update (dt) {}
        ;

        return BUIUserInfo;
      }(UIDialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerInfo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "defaultHead", [_dec3], {
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

System.register("chunks:///_virtual/BUIUsersPage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDialog.ts', './BaccaratDataMgr.ts', './BPlayerInfo.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, instantiate, UIDialog, BaccaratDataMgr, BPlayerInfo;
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
      instantiate = module.instantiate;
    }, function (module) {
      UIDialog = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BPlayerInfo = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "d5ffdZqj55JXquvF7Ql6B0U", "BUIUsersPage", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BUIUsersPage = exports('default', (_dec = ccclass("BUIUsersPage"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_UIDialog) {
        _inheritsLoose(BUIUsersPage, _UIDialog);
        function BUIUsersPage() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIDialog.call.apply(_UIDialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cloneTarget", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatarParent", _descriptor2, _assertThisInitialized(_this));
          //    // @property()
          _this.cloneCount = 12;
          _initializerDefineProperty(_this, "btnLeft", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRight", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labPage", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultAvatar", _descriptor6, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _this._avatars = null;
          _this._curPage = 0;
          _this._totalPage = 0;
          return _this;
        }
        var _proto = BUIUsersPage.prototype;
        _proto.Init = function Init() {
          this._avatars = [];
          this._avatars.push(this.cloneTarget.getComponent(BPlayerInfo));
          for (var i = this._avatars.length; i < this.cloneCount; ++i) {
            var c = instantiate(this.cloneTarget);
            this._avatars.push(c.getComponent(BPlayerInfo));
            c.parent = this.avatarParent;
          }
          this.UpdatePage();
        };
        _proto.start = function start() {
          var _this2 = this;
          this.Init();
          gts.UI.OnClick(this.btnLeft, function () {
            var tmp = _this2._curPage - 1;
            if (tmp < 0) {
              tmp = 0;
            }
            if (tmp != _this2._curPage) {
              _this2._curPage = tmp;
              _this2.UpdatePage();
            }
          }, this);
          gts.UI.OnClick(this.btnRight, function () {
            var tmp = _this2._curPage + 1;
            if (tmp > _this2._totalPage - 1) {
              tmp = _this2._totalPage - 1;
            }
            if (tmp != _this2._curPage) {
              _this2._curPage = tmp;
              _this2.UpdatePage();
            }
          }, this);
        };
        _proto.Open = function Open() {
          _UIDialog.prototype.Open.call(this);
          this._curPage = 0;
        };
        _proto.UpdatePage = function UpdatePage() {
          var arr = BaccaratDataMgr.ins.players;
          var page = Math.floor(arr.length / this.cloneCount);
          if (arr.length % this.cloneCount !== 0) {
            page += 1;
          }
          this._totalPage = page;
          for (var i = 0; i < this.cloneCount; ++i) {
            var avatar = this.avatars[i];
            var idx = this._curPage * this.cloneCount + i;
            if (idx < arr.length) {
              avatar.SetInfo(arr[idx], i, this.defaultAvatar);
              //                // subarr.push(arr[idx]);
            } else {
              avatar.SetInfo(null, i, this.defaultAvatar);
              //                // loop = false;
            }
          }

          gts.UI.SetLab(this.labPage, "Trang:" + (this._curPage + 1) + "/" + this._totalPage);
        }
        //    // update (dt) {}
        //    // onDestroy() {
        //    // }
        ;

        _createClass(BUIUsersPage, [{
          key: "avatars",
          get: function get() {
            if (!this._avatars) {
              this.Init();
            }
            return this._avatars;
          }
        }]);
        return BUIUsersPage;
      }(UIDialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cloneTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "avatarParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnLeft", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnRight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labPage", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "defaultAvatar", [_dec7], {
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

System.register("chunks:///_virtual/ChipStack.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ChipSmall.ts', './BaccaratDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, instantiate, v3, Component, ChipSmall, BaccaratDef;
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
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "18322nbQHxBrb2QTVV5pDSf", "ChipStack", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ChipStack = exports('default', (_dec = ccclass("ChipStack"), _dec2 = property({}), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChipStack, _Component);
        function ChipStack() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "debugFlag", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_chip", _descriptor2, _assertThisInitialized(_this));
          _this._mgr = null;
          _this.chipCount = 0;
          _this.chipIndex = 0;
          //    // @property({})
          _this.queueOffset = 10;
          //    // @property({})
          _this.chipOffset = 4;
          _this._chips = [];
          _this._holdMoney = 0;
          _this._name2sprfame = null;
          //    // public AddMoney(money: number) {
          //    // }
          _this._chipValues = [];
          _this.dirty = false;
          _this._elms2banker = [];
          _this._elms2winner = [];
          return _this;
        }
        var _proto = ChipStack.prototype;
        _proto.SetMgr = function SetMgr(mgr) {
          this._mgr = mgr;
        };
        _proto.SetSprframeMap = function SetSprframeMap(map) {
          if (!map) {
            return;
          }
          this._name2sprfame = map;
        };
        _proto.DoCache = function DoCache(count, sprframe) {
          this.chipCount = count;
          this.chipIndex = 0;
          //        // for (let i = 0; i < count; ++i) {
          //        //     let tmp = new cc.Node(`${i}`);
          //        //     let spr = tmp.addComponent(cc.Sprite);
          //        //     spr.spriteFrame = sprframe;
          //        //     tmp.parent = this.node;
          //        //     tmp.y = i * this.chipOffset;
          //        //     tmp.active = false;
          //        //     tmp.scale = 0.45;
          //        //     this._chips.push(spr);
          //        // }
        };

        _proto.Add = function Add(money) {
          this._holdMoney += money;
          this._chipValues.push(money);
          this.dirty = true;
        };
        _proto.MergeChipValues = function MergeChipValues(max) {
          if (max === void 0) {
            max = 10;
          }
          max = Math.floor(Math.random() * 5 + 5);
          if (this._chipValues.length < max) {
            return false;
          }
          var dis = this._chipValues.length - max;
          this._chipValues.splice(0, dis);

          // let totalCnt = this._chipValues.length;
          // let idx2cnt: { [key: number]: number } = {};
          // for (let i = 0; i < this._chipValues.length; ++i) {
          //     let tmpval = this._chipValues[i];
          //     let tmpidx = BaccaratDef.Chips.indexOf(tmpval);
          //     if (tmpidx != -1) {
          //         let elmt = idx2cnt[tmpidx];
          //         if (null === elmt || undefined === elmt) {
          //             elmt = 0;
          //         }
          //         elmt += 1;
          //         idx2cnt[tmpidx] = elmt;
          //     }
          // }

          // let GetMergeData: () => { idx: number; time: number; count: number }[] = () => {
          //     let data_arr: { idx: number; time: number; count: number }[] = [];
          //     //            //! 检查合并
          //     let keys = Object.keys(idx2cnt);
          //     for (let i = 0; i < keys.length; ++i) {
          //         let cfgIdx = Number(keys[i]);
          //         if (cfgIdx < BaccaratDef.Chips.length - 1) {
          //             let tmpcnt = idx2cnt[keys[i]];
          //             let needcnt = i % 2 === 0 ? 5 : 2;
          //             if (tmpcnt >= needcnt) {
          //                 let mtime = Math.floor(tmpcnt / needcnt);
          //                 let data = { idx: Number(keys[i]), time: mtime, count: needcnt };
          //                 data_arr.push(data);
          //             }
          //         }
          //     }

          //     return data_arr;
          // };

          // let data = GetMergeData();
          // //        //! 执行合并
          // if (data && data.length > 0) {
          //     let tmpdata = data[0];
          //     let useval = BaccaratDef.Chips[tmpdata.idx];
          //     let addval = BaccaratDef.Chips[tmpdata.idx + 1];
          //     for (let i = 0; i < tmpdata.count; ++i) {
          //         let delIdx = this._chipValues.indexOf(useval);
          //         if (delIdx >= 0) {
          //             this._chipValues.splice(delIdx, 1);
          //         }
          //     }
          //     this._chipValues.push(addval);

          //     if (this._chipValues.length >= max) {
          //         this.MergeChipValues(max);
          //     }
          // }

          // return false;
        };

        _proto.RefreshChips = function RefreshChips() {
          var values = this._chipValues;
          this.Reset();
          this._chipValues = values;
          for (var i = 0; i < this._chipValues.length; ++i) {
            var elmt = this._chipValues[i];
            if (elmt && this._chips[i]) {
              var val = this._chipValues[i];
              //                // let name = `${Common.ChangeMoneyShow(val, 2)}_x`;
              //                // let sf = this._name2sprfame ? this._name2sprfame[name] : null;
              //                // if (!sf) sf = this._name2sprfame["100_x"];
              //                // this._chips[i].spriteFrame = sf;
              //                // this._chips[i].node.active = true;
              this._chips[i].reuse([val]);
            }
          }
        };
        _proto.Reset = function Reset() {
          this._chipValues = [];
          for (var i = 0; i < this._chips.length; ++i) {
            this._chips[i].node.active = false;
          }
        };
        _proto.ClearElmts = function ClearElmts() {
          this._elms2winner = [];
          this._elms2banker = [];
        };
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.update = function update(dt) {
          this.Update2Banker(dt);
          this.Update2Winner(dt);
          if (this.chipIndex < this.chipCount) {
            var i = this.chipIndex;
            //            // let tmp = new cc.Node(`${i}`);
            //            // let spr = tmp.addComponent(cc.Sprite);
            var tmp = instantiate(this.prefab_chip);
            var spr = tmp.getComponent(ChipSmall);
            tmp.parent = this.node;
            // tmp.getPosition().y = i * this.chipOffset;
            tmp.setPosition(tmp.position.x, i * this.chipOffset);
            tmp.active = false;
            tmp.scale = v3(0.8, 0.8, 1);
            this._chips.push(spr);
            this.chipIndex++;
          }
          if (this.dirty) {
            this.dirty = false;
            this.MergeChipValues();
            this.RefreshChips();
          }
        };
        _proto.AddHoldMoney = function AddHoldMoney(money) {
          this._chipValues.push(money);
          this.dirty = true;
        };
        _proto.Update2Banker = function Update2Banker(dt) {
          var elmts = [];
          for (var i = 0; i < this._elms2banker.length; ++i) {
            var e = this._elms2banker[i];
            e.dt -= dt;
            if (e.dt <= 0) {
              e.dirty = true;
              elmts.push(e);
            }
          }
          while (elmts && elmts.length > 0 && this._chipValues.length > 0 && this._chips.length > 0) {
            var _e = elmts[0];
            elmts.splice(0, 1);
            var e_idx = this._elms2banker.indexOf(_e);
            this._elms2banker.splice(e_idx, 1);
            var idx = this._chipValues.length - 1;
            if (idx >= 0) {
              if (this._chips[idx]) {
                this._chips[idx].node.active = false;
              }
              var m = this._chipValues[idx];
              this._chipValues.splice(idx, 1);
              var offset = idx * this.chipOffset + this.queueOffset;
              var pos = v3(this.node.position);
              pos.y += offset;
              this._mgr.RecoveryChip(v3(pos), m, BaccaratDef.Flag.TO_BANKER);
              this._holdMoney -= m;
              if (this._chipValues.length === 0) {
                elmts = null;
              }
            }
          }
        };
        _proto.SendChip2Banker = function SendChip2Banker(duration) {
          if (duration === void 0) {
            duration = 0.2;
          }
          if (duration <= 0) {
            for (var i = this._chipValues.length - 1; i >= 0; ++i) {
              var m = this._chipValues[i];
              var offset = i * this.chipOffset + this.queueOffset;
              var pos = v3(this.node.position);
              pos.y += offset;
              this._mgr.RecoveryChip(v3(pos), m, BaccaratDef.Flag.TO_BANKER);
            }
            this._chipValues = [];
            return 0;
          } else {
            this._elms2banker = [];
            var delay = 0;
            var sptime = duration / this._chipValues.length;
            for (var _i = 0; _i < this._chipValues.length; ++_i) {
              var ud = delay + Math.floor(Math.random() * 200) / 1000;
              this._elms2banker.push({
                dt: ud,
                dirty: false
              });
              delay += sptime;
            }
          } //! end of else
          return this._chipValues.length;
        };
        _proto.Update2Winner = function Update2Winner(dt) {
          if (this._elms2winner.length === 0) {
            return;
          }

          //        // if (this.debugFlag) {
          //        //     let a = 0;
          //        //     a = 0;
          //        //     dt = 16 / 1000;
          //        // }

          var elmts = [];
          for (var i = 0; i < this._elms2winner.length; ++i) {
            var e = this._elms2winner[i];
            e.dt -= dt;
            if (e.dt <= 0) {
              e.dirty = true;
              elmts.push(e);
              //                // if (this.debugFlag) {
              //                //     let date = new Date();
              //                //     gts.Debug.Log(`# Chip2Winner-${this.node.name}-DIRTY[${date.valueOf()}]: ${JSON.stringify(e)}`)
              //                // }
            }
          }

          while (elmts && elmts.length > 0 && this._chipValues.length > 0) {
            var _e2 = elmts[0];
            elmts.splice(0, 1);
            var e_idx = this._elms2winner.indexOf(_e2);
            this._elms2winner.splice(e_idx, 1);
            var idx = this._chipValues.length - 1;
            if (idx >= 0) {
              if (!this._chips[idx]) {
                gts.Debug.Log("# ERR");
              }
              this._chips[idx].node.active = false;
              var m = this._chipValues[idx];
              this._chipValues.splice(idx, 1);
              var offset = idx * this.chipOffset + this.queueOffset;
              var pos = v3(this.node.position);
              pos.y += offset;
              //                // if (this.debugFlag) {
              //                //     let date = new Date();
              //                //     gts.Debug.Log(`# Chip2Winner-${this.node.name}[${date.valueOf()}]: ${JSON.stringify(e)}`)
              //                // }

              this._mgr.Chip2Winner(v3(pos), m, _e2.toIdx);
              this._holdMoney -= m;
              if (this._chipValues.length === 0) {
                elmts = null;
              }
            }
          }
        };
        _proto.SendClips2Winner = function SendClips2Winner(winnerIdxs, duration) {
          if (duration === void 0) {
            duration = 0.2;
          }
          if (duration <= 0) {
            for (var i = this._chipValues.length - 1; i >= 0; ++i) {
              var m = this._chipValues[i];
              var offset = i * this.chipOffset + this.queueOffset;
              var pos = v3(this.node.position);
              pos.y += offset;
              var aidx = Math.floor(Math.random() * 100) & winnerIdxs.length;
              this._mgr.Chip2Winner(v3(pos), m, winnerIdxs[aidx]);
            }
            this._chipValues = [];
            return 0;
          } else {
            this._elms2winner = [];
            var delay = 0;
            var sptime = duration / this._chipValues.length;
            var widx = 0;
            for (var _i2 = 0; _i2 < this._chipValues.length; ++_i2) {
              var ud = delay + Math.floor(Math.random() * 200) / 1000;
              var dstIdx = winnerIdxs[widx];
              widx = (widx + 1) % winnerIdxs.length;
              this._elms2winner.push({
                dt: ud,
                dirty: false,
                toIdx: dstIdx,
                id: this.node.name + "-" + this._elms2winner.length
              });
              delay += sptime;
            }
          } //! end of else
          return this._chipValues.length;
        };
        _proto.ResetChip2WinnerElmts = function ResetChip2WinnerElmts() {
          this._elms2winner = [];
        };
        _proto.AddChip2WinnerElmt = function AddChip2WinnerElmt(delay, to) {
          if (this._elms2winner.length >= this._chipValues.length) {
            return false;
          }

          //        // gts.Debug.Log(`#AddChip2WinnerElmt, name:${this.node.name}, delay:${delay.toFixed(2)}, to:${to}`);

          this._elms2winner.push({
            dt: delay,
            dirty: false,
            toIdx: to,
            id: this.node.name + "-" + this._elms2winner.length
          });
          return true;
        };
        _proto.CheckCount = function CheckCount() {
          //        // if (this._elms2winner.length !== this._chipValues.length) {
          //        //     gts.Debug.Log(`#CheckCount Error,  ${this._elms2winner.length} != ${this._chipValues.length}`);
          //        // } else {
          //        //     gts.Debug.Log(`#CheckCount OK,  ${this._elms2winner.length} === ${this._chipValues.length}`);
          //        // }
        };
        _proto.onDestroy = function onDestroy() {
          this._chips.length = 0;
        };
        _createClass(ChipStack, [{
          key: "offsetPos",
          get: function get() {
            var offset = this._chipValues.length * this.chipOffset + this.queueOffset;
            var pos = v3(this.node.position);
            pos.y += offset;
            return pos;
          }
        }, {
          key: "chipsCount",
          get: function get() {
            return this._chipValues.length;
          }
        }]);
        return ChipStack;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "debugFlag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_chip", [_dec3], {
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

System.register("chunks:///_virtual/DlgBaccaratTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDialog.ts', './BaccaratDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, EditBox, UIDialog, BaccaratDef;
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
      EditBox = module.EditBox;
    }, function (module) {
      UIDialog = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "fd8cfjUlKJAOpxiFna88QGS", "DlgBaccaratTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      //  */
      var DlgBaccaratTest = exports('default', (_dec = ccclass("DlgBaccaratTest"), _dec2 = property({
        displayName: "输赢提示按钮",
        type: [Node],
        visible: true
      }), _dec3 = property({
        displayName: "发牌测试",
        type: Node,
        visible: true
      }), _dec4 = property({
        displayName: "收牌测试",
        type: Node,
        visible: true
      }), _dec5 = property(EditBox), _dec6 = property(EditBox), _dec7 = property(EditBox), _dec8 = property(Node), _dec9 = property(EditBox), _dec10 = property(Node), _dec11 = property(EditBox), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_UIDialog) {
        _inheritsLoose(DlgBaccaratTest, _UIDialog);
        function DlgBaccaratTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIDialog.call.apply(_UIDialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_winTipBtns", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_btnSendCards", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_btnGetAllCards", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editPos", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editFrom", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editMoney", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSendChip", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chips2BankerAreas", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnChips2Banker", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chhips2Areas", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnChips2Areas", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnChips2Winner", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRefresh", _descriptor13, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DlgBaccaratTest.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {
          var _this2 = this;
          var _loop = function _loop() {
            var btn = _this2._winTipBtns[i];
            gts.UI.OnClick(btn, function () {
              var elmts = btn.name.split(".");
              var area = BaccaratDef.AREA_NAME["" + elmts[1]];
              _this2.EmitEvent(BaccaratDef.Event.TIP_WIN_AREA, area);
            }, _this2);
          };
          for (var i = 0; i < this._winTipBtns.length; ++i) {
            _loop();
          }
          gts.UI.OnClick(this._btnSendCards, function () {
            var msg = {
              playerCards: [52, 28, 34],
              bankerCards: [41, 40, 18],
              playerDian: 0,
              bankerDian: 3
            };
            var data = {
              Data: msg
            };
            _this2.EmitEvent(BaccaratDef.Event.SEND_CARDS, data);
          }, this);
          gts.UI.OnClick(this.btnSendChip, function () {
            var data = {
              pos: Number(_this2.editPos.string),
              from: Number(_this2.editFrom.string),
              value: Number(_this2.editMoney.string)
            };
            _this2.EmitEvent(BaccaratDef.Event.SEND_CHIP, data);
          }, this);
          gts.UI.OnClick(this.btnChips2Banker, function () {
            var areas = _this2.chips2BankerAreas.string;
            var elmts = areas.split(";");
            var areas_num = [];
            for (var _i2 = 0; _i2 < elmts.length; ++_i2) {
              areas_num.push(Number(elmts[_i2]));
            }
            _this2.EmitEvent(BaccaratDef.Event.CHIPS_2_BANKER, areas_num);
          }, this);
          gts.UI.OnClick(this.btnChips2Areas, function () {
            var areas = _this2.chhips2Areas.string;
            var elmts = areas.split(";");
            var areas_num = [];
            for (var _i3 = 0; _i3 < elmts.length; ++_i3) {
              areas_num.push(Number(elmts[_i3]));
            }
            _this2.EmitEvent(BaccaratDef.Event.CHIPS_2_WIN_AREAS, areas_num);
          }, this);
          gts.UI.OnClick(this.btnChips2Winner, function () {
            _this2.EmitEvent(BaccaratDef.Event.STACK_CHIPS_2_WINNER, [-1, 1, 2, 3, 4, 5, 0, 100]);
          }, this);
          gts.UI.OnClick(this._btnGetAllCards, function () {
            _this2.EmitEvent(BaccaratDef.Event.ALL_CARDS_2_GIRL);
          }, this);
          gts.UI.OnClick(this.btnRefresh, function () {
            _this2.EmitEvent(BaccaratDef.Event.TEST_REFRESH_ROADLIST);
          }, this);
        }
        //    // update (dt) {}
        ;

        return DlgBaccaratTest;
      }(UIDialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_winTipBtns", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_btnSendCards", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_btnGetAllCards", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "editPos", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "editFrom", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "editMoney", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnSendChip", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "chips2BankerAreas", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnChips2Banker", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "chhips2Areas", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnChips2Areas", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnChips2Winner", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "btnRefresh", [_dec14], {
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

System.register("chunks:///_virtual/RoadListDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('RoadListDef', void 0);
      cclegacy._RF.push({}, "dc6b7/HYfJD07x3o+LVTx6N", "RoadListDef", undefined);
      var RoadListDef;
      (function (_RoadListDef) {
        var Type = /*#__PURE__*/function (Type) {
          Type["P"] = "Player";
          Type["B"] = "Banker";
          Type["T"] = "Tie";
          return Type;
        }({});
        _RoadListDef.Type = Type;
        var CellData = function CellData() {
          this.img = void 0;
          this.x = 0;
          this.y = 0;
          this.realX = 0;
          this.realY = 0;
          this.bigTieCount = 0;
          // 大路单中和的次数
          this.bigType = "";
        } // "Player", "Banker"
        ;

        _RoadListDef.CellData = CellData;
        var Result = function Result() {
          this.Player = void 0;
          this.Tiger = void 0;
          this.Dragon = void 0;
          this.Banker = void 0;
          this.Tie = void 0;
          this.PlayerPair = void 0;
          this.BankerPair = void 0;
        };
        _RoadListDef.Result = Result;
        var ScoreData = function ScoreData() {
          this.big = void 0;
          this.small = void 0;
          /** Player Banker Tie */
          this.type = void 0;
          this.last = void 0;
        };
        _RoadListDef.ScoreData = ScoreData;
        var BP_ROW = _RoadListDef.BP_ROW = 6;
        var Util = /*#__PURE__*/function () {
          function Util() {}
          Util.getMaxColLen = function getMaxColLen(sources) {
            if (sources.length == 0) {
              return 0;
            }
            var tempx = 0;
            for (var i = 0; i < sources.length; i++) {
              if (sources[i].x > tempx) {
                tempx = sources[i].x;
              }
            }
            return tempx + 1;
          };
          Util.getColLength = function getColLength(col, sources) {
            var len = 0;
            var allkey = sources;
            while (allkey[col + "_" + len]) {
              len++;
            }
            return len;
          }

          /** 蟑螂路 */;
          Util.parseRoachRoadDatas = function parseRoachRoadDatas(sources, bigroadDic) {
            var result = [];
            var keyArr = [];
            for (var i = 0; i < sources.length; i++) {
              var curBigData = sources[i];
              var bigx = curBigData.realX;
              var bigy = curBigData.realY;
              var rkey = "";
              // NSArray *allkey = [bigroadDic allKeys];
              if (bigx == 3) {
                if (bigy == 1) {
                  //第二行以上
                  if (bigroadDic["0_1"]) {
                    rkey = "Banker"; //红
                  } else {
                    rkey = "Player"; //蓝
                  }
                } else if (bigy > 1) {
                  //第二行以上
                  //                if (bigxydic.ContainsKey("1_" + bigy.ToString()))
                  if (bigroadDic["0_" + bigy]) {
                    rkey = "Banker"; //红
                  } else {
                    //                    if (bigxydic.ContainsKey("1_" + (bigy - 1).ToString()))
                    if (bigroadDic["0_" + (bigy - 1)]) {
                      rkey = "Player"; //蓝
                    } else {
                      rkey = "Banker"; //红
                    }
                  }
                }
              } else if (bigx > 3) {
                if (bigy == 0) {
                  //                if (GetColLength(bigx - 1) == GetColLength(bigx - 2))
                  if (this.getColLength(bigx - 1, bigroadDic) == this.getColLength(bigx - 4, bigroadDic)) {
                    rkey = "Banker"; //红
                  } else {
                    rkey = "Player"; //蓝
                  }
                } else if (bigy > 0) {
                  //                if (bigxydic.ContainsKey((bigx - 1).ToString() + "_" + bigy.ToString()))
                  if (bigroadDic[bigx - 3 + "_" + bigy]) {
                    rkey = "Banker"; //红
                  } else {
                    if (bigroadDic[bigx - 3 + "_" + (bigy - 1)]) {
                      rkey = "Player"; //蓝
                    } else {
                      rkey = "Banker"; //红
                    }
                  }
                }
              }

              if (rkey != "") {
                keyArr.push(rkey);
              }
            }
            result = this.parseBigRoadStr(keyArr);
            for (var _i = 0; _i < result.length; _i++) {
              var cell = result[_i];
              if (cell.bigType == "Banker") {
                cell.img = "road_roach_banker";
              } else if (cell.bigType == "Player") {
                cell.img = "road_roach_player";
              }
            }
            return result;
          }

          /**
           * 解析大眼仔路单
           **/;
          Util.parseBigEyeRoadDatas = function parseBigEyeRoadDatas(sources, bigroadDic) {
            var result = [];
            var keyArr = [];
            for (var i = 0; i < sources.length; i++) {
              var curBigData = sources[i];
              var bigx = curBigData.realX;
              var bigy = curBigData.realY;
              var rkey = "";
              // NSArray *allkey = [bigroadDic allKeys];
              if (bigx == 1) {
                if (bigy == 1) {
                  //第二行以上
                  if (bigroadDic["0_1"]) {
                    rkey = "Banker"; //红
                  } else {
                    rkey = "Player"; //蓝
                  }
                } else if (bigy > 1) {
                  //第二行以上
                  if (bigroadDic["0_" + bigy]) {
                    rkey = "Banker"; //红
                  } else {
                    if (bigroadDic["0_" + (bigy - 1)]) {
                      rkey = "Player"; //蓝
                    } else {
                      rkey = "Banker"; //红
                    }
                  }
                }
              } else if (bigx > 1) {
                if (bigy == 0) {
                  if (this.getColLength(bigx - 1, bigroadDic) == this.getColLength(bigx - 2, bigroadDic)) {
                    rkey = "Banker"; //红
                  } else {
                    rkey = "Player"; //蓝
                  }
                } else if (bigy > 0) {
                  if (bigroadDic[bigx - 1 + "_" + bigy]) {
                    rkey = "Banker"; //红
                  } else {
                    if (bigroadDic[bigx - 1 + "_" + (bigy - 1)]) {
                      rkey = "Player"; //蓝
                    } else {
                      rkey = "Banker"; //红
                    }
                  }
                }
              }

              if (rkey != "") {
                keyArr.push(rkey);
              }
            }
            result = this.parseBigRoadStr(keyArr);
            for (var _i2 = 0; _i2 < result.length; _i2++) {
              var cell = result[_i2];
              if (cell.bigType == "Banker") {
                cell.img = "road_eye_banker";
              } else if (cell.bigType == "Player") {
                cell.img = "road_eye_player";
              }
            }
            return result;
          };
          Util.parseSmallRoadDatas = function parseSmallRoadDatas(sources, bigroadDic) {
            var result = [];
            var keyArr = [];
            for (var i = 0; i < sources.length; i++) {
              var curBigData = sources[i];
              var bigx = curBigData.realX;
              var bigy = curBigData.realY;
              var rkey = "";
              if (bigx == 2) {
                if (bigy == 1) {
                  //第二行以上
                  if (bigroadDic["0_1"]) {
                    rkey = "Banker"; //红
                  } else {
                    rkey = "Player"; //蓝
                  }
                } else if (bigy > 1) {
                  //第二行以上
                  //                if (bigxydic.ContainsKey("1_" + bigy.ToString()))
                  if (bigroadDic["0_" + bigy]) {
                    rkey = "Banker"; //红
                  } else {
                    //                    if (bigxydic.ContainsKey("1_" + (bigy - 1).ToString()))
                    if (bigroadDic["0_" + (bigy - 1)]) {
                      rkey = "Player"; //蓝
                    } else {
                      rkey = "Banker"; //红
                    }
                  }
                }
              } else if (bigx > 2) {
                if (bigy == 0) {
                  if (this.getColLength(bigx - 1, bigroadDic) == this.getColLength(bigx - 3, bigroadDic)) {
                    rkey = "Banker"; //红
                  } else {
                    rkey = "Player"; //蓝
                  }
                } else if (bigy > 0) {
                  if (bigroadDic[bigx - 2 + "_" + bigy]) {
                    rkey = "Banker"; //红
                  } else {
                    if (bigroadDic[bigx - 2 + "_" + (bigy - 1)]) {
                      rkey = "Player"; //蓝
                    } else {
                      rkey = "Banker"; //红
                    }
                  }
                }
              }

              if (rkey != "") {
                keyArr.push(rkey);
              }
            }
            result = this.parseBigRoadStr(keyArr);
            for (var _i3 = 0; _i3 < result.length; _i3++) {
              var cell = result[_i3];
              if (cell.bigType == "Banker") {
                cell.img = "road_small_banker";
              } else if (cell.bigType == "Player") {
                cell.img = "road_small_player";
              }
            }
            return result;
          }

          /**
           * 解析大路单
           **/;
          Util.parseBigRoadStr = function parseBigRoadStr(sources) {
            // NSMutableArray *result = [[NSMutableArray alloc] init];
            var result = [];
            // NSInteger len = sources.count;
            var len = sources.length;
            // CellData *cellData = null;
            var cellData = null;
            var realCol = 0; // 真实列数， 超过6个之后不另起一列，在最后一行往右累加， 该变量表示累加前的列数
            var first_is_tie = false;
            var curMaxRow = RoadListDef.BP_ROW;
            var row = 0;
            var col = 0;
            for (var i = 0; i < len; i++) {
              // NSString *str = [sources objectAtIndex:i];
              var str = sources[i];
              if (i == 0) {
                if (str == "Player") {
                  cellData = new CellData();
                  cellData.x = col = 0;
                  cellData.y = row = 0;
                  cellData.bigType = str;
                  cellData.img = "road_big_player_0";
                  result.push(cellData);
                } else if (str == "Banker") {
                  cellData = new CellData();
                  cellData.x = col = 0;
                  cellData.y = row = 0;
                  cellData.bigType = str;
                  cellData.img = "road_big_banker_0";
                  result.push(cellData);
                } else {
                  first_is_tie = true;
                }
              } else {
                if (str == "Tie") {
                  if (cellData != null) {
                    cellData.bigTieCount++;
                    var bigTieCount = cellData.bigTieCount;
                    if (bigTieCount > 9) {
                      bigTieCount = 9;
                    }
                    if (cellData.bigType == "Player") {
                      cellData.img = "road_big_player_" + bigTieCount;
                    } else if (cellData.bigType == "Banker") {
                      cellData.img = "road_big_banker_" + bigTieCount;
                    }
                  }
                } else {
                  var newCellData = new CellData();
                  newCellData.bigType = str;
                  if (cellData && str == cellData.bigType) {
                    row++;
                    newCellData.realX = realCol;
                    newCellData.realY = row + (col - realCol);
                    if (row >= curMaxRow) {
                      row = curMaxRow - 1;
                      col++;
                    } else {
                      realCol = col;
                    }
                  } else {
                    if (col != realCol) {
                      curMaxRow = row;
                    } else {
                      curMaxRow = RoadListDef.BP_ROW;
                    }
                    row = 0;
                    col = realCol + 1;
                    realCol = realCol + 1;
                    newCellData.realX = col;
                    newCellData.realY = row;
                  }
                  if (str == "Player") {
                    newCellData.img = "road_big_player_0";
                  } else if (str == "Banker") {
                    newCellData.img = "road_big_banker_0";
                  }
                  newCellData.x = col;
                  newCellData.y = row;
                  if (first_is_tie) {
                    newCellData.x = col - 1;
                    newCellData.realX = realCol - 1;
                  }
                  for (var m = 0; m < result.length; m++) {
                    var tmpData = result[m];
                    if (tmpData.x == col && tmpData.y == row) {
                      newCellData.y = row - 1;
                      newCellData.x = col + 1;
                      if (first_is_tie) {
                        newCellData.x = col;
                      }
                      if (curMaxRow > tmpData.y) {
                        curMaxRow = tmpData.y;
                        if (row >= curMaxRow) {
                          row = curMaxRow - 1;
                          col++;
                        }
                      }
                      break;
                    }
                  }
                  cellData = newCellData;
                  result.push(cellData);
                }
              }
            }
            return result;
          }
          /**
           * 解析大路单
           **/;
          Util.parseBigRoadDatas = function parseBigRoadDatas(sources, bigroadDic, isFirstTie) {
            var result = [];
            var len = sources.length;
            var cellData = null;
            var realCol = 0; // 真实列数， 超过6个之后不另起一列，在最后一行往右累加， 该变量表示累加前的列数
            var first_is_tie = false;
            var row = 0;
            var col = 0;
            for (var i = 0; i < len; i++) {
              var resultData = sources[i];
              var str = void 0;
              if (resultData.Player || resultData.Tiger) str = "Player";else if (resultData.Banker || resultData.Dragon) str = "Banker";else if (resultData.Tie) str = "Tie";
              var curMaxRow = RoadListDef.BP_ROW;
              if (i == 0) {
                if (str == "Player") {
                  cellData = new CellData();
                  cellData.x = col = 0;
                  cellData.y = row = 0;
                  cellData.bigType = str;
                  cellData.img = "road_big_player_0";
                  if (bigroadDic != null) {
                    bigroadDic["0_0"] = str;
                  }
                  result.push(cellData);
                } else if (str == "Banker") {
                  cellData = new CellData();
                  cellData.x = col = 0;
                  cellData.y = row = 0;
                  cellData.bigType = str;
                  cellData.img = "road_big_banker_0";
                  if (bigroadDic != null) {
                    bigroadDic["0_0"] = str;
                  }
                  result.push(cellData);
                } else {
                  first_is_tie = true;
                }
              } else {
                if (str == "Tie") {
                  if (cellData != null) {
                    cellData.bigTieCount++;
                    var bigTieCount = cellData.bigTieCount;
                    if (bigTieCount > 9) {
                      bigTieCount = 9;
                    }
                    if (cellData.bigType == "Player") {
                      cellData.img = "road_big_player_" + bigTieCount;
                    } else if (cellData.bigType == "Banker") {
                      cellData.img = "road_big_banker_" + bigTieCount;
                    }
                  }
                } else {
                  var newCellData = new CellData();
                  newCellData.bigType = str;
                  if (cellData && str == cellData.bigType) {
                    row++;
                    newCellData.realX = realCol;
                    newCellData.realY = row + (col - realCol);
                    if (row >= curMaxRow) {
                      row = curMaxRow - 1;
                      col++;
                    } else {
                      realCol = col;
                    }
                  } else {
                    if (col != realCol) {
                      curMaxRow = row;
                    } else {
                      curMaxRow = RoadListDef.BP_ROW;
                    }
                    row = 0;
                    col = realCol + 1;
                    realCol = realCol + 1;
                    newCellData.realX = col;
                    newCellData.realY = row;
                  }
                  if (str == "Player") {
                    newCellData.img = "road_big_player_0";
                  } else if (str == "Banker") {
                    newCellData.img = "road_big_banker_0";
                  }
                  newCellData.x = col;
                  newCellData.y = row;
                  if (first_is_tie) {
                    newCellData.x = col - 1;
                    newCellData.realX = realCol - 1;
                  }
                  for (var m = 0; m < result.length; m++) {
                    var tmpData = result[m];
                    if (tmpData.x == col && tmpData.y == row) {
                      newCellData.y = row - 1;
                      newCellData.x = col + 1;
                      if (first_is_tie) {
                        newCellData.x = col;
                      }
                      if (curMaxRow > tmpData.y) {
                        curMaxRow = tmpData.y;
                        if (row >= curMaxRow) {
                          row = curMaxRow - 1;
                          col++;
                        }
                      }
                      break;
                    }
                  }
                  cellData = newCellData;
                  if (bigroadDic != null) {
                    bigroadDic[cellData.realX + "_" + cellData.realY] = cellData.bigType;
                  }
                  result.push(cellData);
                }
              }
            }
            if (isFirstTie) {
              isFirstTie["isFirstTie"] = first_is_tie ? "true" : "false";
            }
            return result;
          };
          return Util;
        }();
        _RoadListDef.Util = Util;
      })(RoadListDef || (RoadListDef = exports('RoadListDef', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TipProfit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './BlackWordProxy.ts', './BaccaratDataMgr.ts', './BaccaratDef.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, Tween, v3, tween, isValid, find, AnimationClip, Sprite, Animation, resources, SpriteAtlas, AutoEventNode, GUtil, BlackWordProxy, BaccaratDataMgr, BaccaratDef, Common;
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
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      v3 = module.v3;
      tween = module.tween;
      isValid = module.isValid;
      find = module.find;
      AnimationClip = module.AnimationClip;
      Sprite = module.Sprite;
      Animation = module.Animation;
      resources = module.resources;
      SpriteAtlas = module.SpriteAtlas;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "b3e0639FLRMyqxq2IKQpJP1", "TipProfit", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TipProfit = exports('default', (_dec = ccclass("TipProfit"), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(TipProfit, _AutoEventNode);
        function TipProfit() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ndProfit", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labProfit", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chat", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_expression", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TipProfit.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {
          var _this2 = this;
          GUtil.HideNode(this.ndProfit);
          this.OnEvent(BaccaratDef.Event.SHOW_PROFIT, function (data) {
            _this2.OnShowProfit(data);
          });
          GUtil.HideNode(this.node_expression);
          this.OnEvent(BaccaratDef.Event.SHOW_CHAT, function (data) {
            _this2.showPlayerChat(data);
          });
          this.node_chat.forEach(function (element) {
            GUtil.HideNode(element);
          });
        };
        _proto.OnShowProfit = function OnShowProfit(data) {
          if (this.lnkUid === data.uid && data.money !== 0 && this.allowShow) {
            this.OpenProfit(data.money);
            this.OnShowProfitEvent();
          }
        };
        _proto.OnShowProfitEvent = function OnShowProfitEvent() {};
        _proto.OpenProfit = function OpenProfit(money, showTime, duration) {
          var _this3 = this;
          if (showTime === void 0) {
            showTime = 3;
          }
          if (duration === void 0) {
            duration = 1;
          }
          var smoney = Common.ChangeMoneyShow(Math.abs(money), 2);
          var str = money > 0 ? "+" + smoney : "-" + money;
          gts.UI.SetLab(this.labProfit, str);
          //        // this.ndProfit.active = true;
          GUtil.NodeVisible(this.ndProfit, true);
          if (this.ndProfit) {
            this.ndProfit.getComponent(UIOpacity).opacity = 255;
            Tween.stopAllByTarget(this.ndProfit);
            var oldPos = v3(this.ndProfit.position);
            // this.ndProfit.runAction(
            //     cc.sequence(
            //         cc.delayTime(showTime),
            //         cc.spawn(cc.moveTo(duration, cc.v2(oldPos.getPosition().x, oldPos.getPosition().y + 90)), cc.fadeTo(duration, 0)),
            //         cc.callFunc(() => {
            //             this.ndProfit.active = false;
            //             this.ndProfit.setPosition(oldPos);
            //         })
            //     )
            // );
            tween(this.ndProfit).delay(showTime).to(duration, {
              position: v3(oldPos.x, oldPos.y + 90)
            }).call(function () {
              _this3.ndProfit.active = false;
              _this3.ndProfit.setPosition(oldPos);
            }).start();
            tween(this.ndProfit.getComponent(UIOpacity)).delay(showTime).to(duration, {
              opacity: 0
            }).start();
          }
        };
        _proto.showPlayerChat = function showPlayerChat(data) {
          var msg = data.datainfo;
          var info = msg;
          if (this.lnkUid === info.FromUserId && !data.otherPlayer) {
            if (info.MsgType == 1) {
              var node_chat = this.node_chat[0];
              if (!isValid(node_chat)) return;
              var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
              info.Content = BlackWordProxy.filter(info.Content);
              lbl_chat.string = info.Content;
              node_chat.scale = v3(0, 0, 1);
              node_chat.active = true;
              tween(node_chat).stop().to(0.2, {
                scale: v3(1, 1, 1)
              }).delay(2.0).call(function () {
                node_chat.active = false;
              }).start();
            } else {
              this.node_expression.active = true;
              this.loadLocalFrameAnim(info.Content, this.node_expression);
            }
          }
        };
        _proto.createAnim = function createAnim(frames, aniName, item, callBack) {
          var clip = AnimationClip.createWithSpriteFrames(frames, frames.length);
          clip.name = "" + aniName;
          clip.speed = 0.8;
          clip.sample = 24;
          clip.wrapMode = AnimationClip.WrapMode.Normal;
          var sprite = item.getComponent(Sprite);
          if (frames[0]) {
            sprite.spriteFrame = frames[0];
          }
          var ani = item.addComponent(Animation);
          ani.addClip(clip);
          ani.play("" + aniName);
          var state = ani.getState("" + aniName);
          state.repeatCount = 2;
          ani.on(Animation.EventType.FINISHED, function () {
            item.active = false;
            if (callBack) {
              sprite.spriteFrame = null;
              callBack();
            }
          }, this);
        };
        _proto.loadLocalFrameAnim = function loadLocalFrameAnim(aniName, item, callBack) {
          var _this4 = this;
          resources.load("chat/" + aniName, SpriteAtlas, function (err, sprAtlas) {
            var sprFrmAry = sprAtlas.getSpriteFrames();
            _this4.createAnim(sprFrmAry, aniName, item, callBack);
          });
        }
        //    // update (dt) {}
        ;

        _createClass(TipProfit, [{
          key: "lnkUid",
          get:
          //    // LIFE-CYCLE CALLBACKS:
          //    // onLoad () {}
          function get() {
            return BaccaratDataMgr.myUid;
          }
        }, {
          key: "allowShow",
          get: function get() {
            return true;
          }
        }]);
        return TipProfit;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndProfit", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labProfit", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_chat", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_expression", [_dec5], {
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

System.register("chunks:///_virtual/UIBigEyeRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './RoadListDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, UITransform, instantiate, Sprite, tween, UIOpacity, Component, GUtil, RoadListDef;
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
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      RoadListDef = module.RoadListDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "bafa2cGtcJBYJyMu1+W8+aj", "UIBigEyeRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIBigEyeRoad = exports('default', (_dec = ccclass("UIBigEyeRoad"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIBigEyeRoad, _Component);
        function UIBigEyeRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cloneTarget", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor2, _assertThisInitialized(_this));
          _this._items = [];
          return _this;
        }
        var _proto = UIBigEyeRoad.prototype;
        _proto.DelAllItems = function DelAllItems() {
          for (var i = 0; i < this._items.length; ++i) {
            this._items[i].removeFromParent();
            this._items[i].destroy();
          }
          this._items = [];
        }
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        ;

        _proto.start = function start() {
          GUtil.NodeVisible(this.cloneTarget, false);
        }
        //    // update (dt) {}
        //    /**
        //     * 大眼仔
        //     * @param logs
        //     */
        ;

        _proto.UpdateUI = function UpdateUI(sources, bigroadDic, isUpdate) {
          if (isUpdate === void 0) {
            isUpdate = false;
          }
          this.DelAllItems();
          var COSS = 12;
          var startx = this.cloneTarget.getPosition().x;
          var starty = this.cloneTarget.getPosition().y;
          var cellWid = this.cloneTarget.getComponent(UITransform).width;
          var cellHei = this.cloneTarget.getComponent(UITransform).height;
          var bigEyeData = RoadListDef.Util.parseBigEyeRoadDatas(sources, bigroadDic);
          var maxCos = RoadListDef.Util.getMaxColLen(bigEyeData);
          var startIdx = maxCos > COSS ? maxCos - COSS : 0;
          for (var i = 0; i < bigEyeData.length; i++) {
            if (bigEyeData[i].x < startIdx) {
              continue;
            }
            var item = instantiate(this.cloneTarget);
            item.active = true;
            if (bigEyeData[i].bigType == "Banker") {
              item.getChildByName("bg").getComponent(Sprite).spriteFrame = this.imgs[0];
            } else {
              item.getChildByName("bg").getComponent(Sprite).spriteFrame = this.imgs[1];
            }
            var ssx = startx + (bigEyeData[i].x - startIdx) * cellWid + Math.floor((bigEyeData[i].x - startIdx) / 2);
            var ssy = starty - bigEyeData[i].y * cellHei - Math.floor(bigEyeData[i].y / 2);
            item.setPosition(ssx, ssy);
            this.node.addChild(item);
            this._items.push(item);
            if (isUpdate && i == bigEyeData.length - 1) {
              // item.runAction(cc.repeat(cc.sequence(cc.fadeOut(0.5), cc.fadeIn(0.5)), 3));
              tween(item.getComponent(UIOpacity)).to(0.5, {
                opacity: 0
              }).to(0.5, {
                opacity: 255
              }).union().repeat(3).start();
            }
          }
          GUtil.NodeVisible(this.cloneTarget, false);
        };
        return UIBigEyeRoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cloneTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec3], {
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

System.register("chunks:///_virtual/UIBigRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './RoadListDef.ts', './UIBigRoadItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, UITransform, instantiate, tween, UIOpacity, Component, GUtil, RoadListDef, UIBigRoadItem;
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
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      RoadListDef = module.RoadListDef;
    }, function (module) {
      UIBigRoadItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d6f4cfGCTtLCI2Ly7YY/voU", "UIBigRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIBigRoad = exports('default', (_dec = ccclass("UIBigRoad"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIBigRoad, _Component);
        function UIBigRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cloneTarget", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor2, _assertThisInitialized(_this));
          //    // update (dt) {}
          _this._items = [];
          return _this;
        }
        var _proto = UIBigRoad.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {
          GUtil.NodeVisible(this.cloneTarget, false);
        };
        _proto.DelAllItems = function DelAllItems() {
          for (var i = 0; i < this._items.length; ++i) {
            this._items[i].removeFromParent();
            this._items[i].destroy();
          }
          this._items = [];
        };
        _proto.UpdateUI = function UpdateUI(roadCellData, isUpdate) {
          if (isUpdate === void 0) {
            isUpdate = false;
          }
          var COSS = 29;
          this.DelAllItems();
          var maxCos = RoadListDef.Util.getMaxColLen(roadCellData);
          var startx = this.cloneTarget.getPosition().x;
          var starty = this.cloneTarget.getPosition().y;
          var cellWid = this.cloneTarget.getComponent(UITransform).width;
          var cellHei = this.cloneTarget.getComponent(UITransform).height;
          var starxIdx = maxCos > COSS ? maxCos - COSS : 0;
          for (var i = 0; i < roadCellData.length; i++) {
            if (roadCellData[i].x < starxIdx) {
              continue;
            }
            var item = instantiate(this.cloneTarget);
            item.active = true;
            var ix = startx + (roadCellData[i].x - starxIdx) * cellWid;
            var iy = starty - roadCellData[i].y * cellHei;
            item.setPosition(ix, iy);
            var comm = item.getComponent(UIBigRoadItem);
            if (roadCellData[i].bigType == "Banker") {
              //                // item.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.dlFrames[0];
              comm.icon.spriteFrame = this.imgs[0];
            } else {
              //                // item.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.dlFrames[2];
              comm.icon.spriteFrame = this.imgs[1];
            }
            comm.bigTieCount = roadCellData[i].bigTieCount;
            this._items.push(item);
            //            // let num = item.getChildByName("num").getComponent(cc.Label);
            //            // if (roadCellData[i].bigTieCount == 0) {
            //            //     // num.string = "";
            //            //     num.node.active = false;
            //            // } else {
            //            //     num.node.active = true;
            //            //     num.string = "" + roadCellData[i].bigTieCount;
            //            // }
            this.node.addChild(item);
            if (isUpdate && i == roadCellData.length - 1) {
              // item.runAction(cc.repeat(cc.sequence(cc.fadeOut(0.5), cc.fadeIn(0.5)), 3));
              tween(item.getComponent(UIOpacity)).to(0.5, {
                opacity: 0
              }).to(0.5, {
                opacity: 255
              }).union().repeat(3).start();
            }
          }
          GUtil.NodeVisible(this.cloneTarget, false);
        };
        return UIBigRoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cloneTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec3], {
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

System.register("chunks:///_virtual/UIBigRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, Node, Component, GUtil;
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
      Sprite = module.Sprite;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1c434Tz+z1Ep4hoDogt78bK", "UIBigRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIBigRoadItem = exports('default', (_dec = ccclass("UIBigRoadItem"), _dec2 = property(Sprite), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIBigRoadItem, _Component);
        function UIBigRoadItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "icon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ndTie", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labTie", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UIBigRoadItem.prototype;
        //    // onLoad () {}
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _createClass(UIBigRoadItem, [{
          key: "bigTieCount",
          set:
          //    // LIFE-CYCLE CALLBACKS:
          function set(value) {
            //        // this.ndTie.active = value >= 1;
            GUtil.NodeVisible(this.ndTie, value >= 1);
            GUtil.NodeVisible(this.labTie, value >= 2);
            gts.UI.SetLab(this.labTie, value);
          }
        }]);
        return UIBigRoadItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndTie", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labTie", [_dec4], {
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

System.register("chunks:///_virtual/UIChipSel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AutoEventNode.ts', './ChipProxy.ts', './ChipItem.ts', './BaccaratDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, ScrollView, Prefab, instantiate, v3, UITransform, GameDef, AutoEventNode, ChipProxy, ChipType, ChipItem, BaccaratDef;
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
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      v3 = module.v3;
      UITransform = module.UITransform;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      ChipProxy = module.default;
      ChipType = module.ChipType;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "84dc5wf+O9EmK31SRTnBkg6", "UIChipSel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIChipSel = exports('default', (_dec = ccclass("UIChipSel"), _dec2 = property(ScrollView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(UIChipSel, _AutoEventNode);
        function UIChipSel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollview", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_item", _descriptor2, _assertThisInitialized(_this));
          _this._chipBtns = [];
          return _this;
        }
        var _proto = UIChipSel.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {
          _AutoEventNode.prototype.start.call(this);
        };
        _proto.LoadUI = function LoadUI() {
          var _this2 = this;
          ChipProxy.initChipList(BaccaratDef.Chips);
          this.scrollview.content.destroyAllChildren();
          var minChip = ChipProxy.chipList[0].count;
          for (var _iterator = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            if (i.count < minChip) {
              continue;
            }
            var chip = instantiate(this.pre_item);
            this.scrollview.content.addChild(chip);
            chip.scale = v3(0.8, 0.8, 1);
            chip.getComponent(UITransform).width = 105;
            chip.getComponent(UITransform).height = 105;
            chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, GameDef.Game.Baccarat);
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step2; !(_step2 = _iterator2()).done;) {
            var _i = _step2.value;
            var has = false;
            for (var _iterator3 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step3; !(_step3 = _iterator3()).done;) {
              var j = _step3.value;
              if (j.count == _i.count) {
                has = true;
                break;
              }
            }
            if (has) {
              continue;
            }
            var _chip = instantiate(this.pre_item);
            this.scrollview.content.addChild(_chip);
            _chip.scale = v3(0.8, 0.8, 1);
            _chip.getComponent(UITransform).width = 105;
            _chip.getComponent(UITransform).height = 105;
            _chip.getComponent(ChipItem).setData(_i, ChipType.CHIP, GameDef.Game.Baccarat);
          }
          this.scheduleOnce(function () {
            var child = _this2.scrollview.content.children[0];
            child.getComponent(ChipItem).moveUp();
            _this2.scrollview.scrollToLeft();
          });
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != GameDef.Game.Baccarat) {
            return;
          }
          var children = this.scrollview.content.children;
          for (var _iterator4 = _createForOfIteratorHelperLoose(children), _step4; !(_step4 = _iterator4()).done;) {
            var child = _step4.value;
            var chipitem = child.getComponent(ChipItem);
            if (chipitem) {
              if (chipitem.data == data) ;else {
                chipitem.moveUp(false);
              }
            }
          }
        }
        //    // update (dt) {}
        ;

        return UIChipSel;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollview", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pre_item", [_dec3], {
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

System.register("chunks:///_virtual/UICockroach.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './RoadListDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, UITransform, instantiate, Sprite, tween, UIOpacity, Component, GUtil, RoadListDef;
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
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      RoadListDef = module.RoadListDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7e8adib3/1N6Z/HdLbPRCkT", "UICockroach", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UICockroach = exports('default', (_dec = ccclass("UICockroach"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UICockroach, _Component);
        function UICockroach() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cloneTarget", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor2, _assertThisInitialized(_this));
          _this._items = [];
          return _this;
        }
        var _proto = UICockroach.prototype;
        _proto.DelAllItems = function DelAllItems() {
          for (var i = 0; i < this._items.length; ++i) {
            this._items[i].removeFromParent();
            this._items[i].destroy();
          }
          this._items = [];
        }
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        ;

        _proto.start = function start() {
          GUtil.NodeVisible(this.cloneTarget, false);
        }
        //    // update (dt) {}
        //    /**
        //     * 小强路
        //     * @param logs
        //     */
        ;

        _proto.UpdateUI = function UpdateUI(sources, bigroadDic, isUpdate) {
          if (isUpdate === void 0) {
            isUpdate = false;
          }
          this.DelAllItems();
          var COSS = 12;
          var startx = this.cloneTarget.getPosition().x;
          var starty = this.cloneTarget.getPosition().y;
          var cellWid = this.cloneTarget.getComponent(UITransform).width;
          var cellHei = this.cloneTarget.getComponent(UITransform).height;
          var bigEyeData = RoadListDef.Util.parseRoachRoadDatas(sources, bigroadDic);
          var maxCos = RoadListDef.Util.getMaxColLen(bigEyeData);
          var startIdx = maxCos > COSS ? maxCos - COSS : 0;
          for (var i = 0; i < bigEyeData.length; i++) {
            if (bigEyeData[i].x < startIdx) {
              continue;
            }
            var item = instantiate(this.cloneTarget);
            item.active = true;
            if (bigEyeData[i].bigType == "Banker") {
              item.getChildByName("bg").getComponent(Sprite).spriteFrame = this.imgs[0];
            } else {
              item.getChildByName("bg").getComponent(Sprite).spriteFrame = this.imgs[1];
            }
            var ssx = startx + (bigEyeData[i].x - startIdx) * cellWid + Math.floor((bigEyeData[i].x - startIdx) / 2);
            var ssy = starty - bigEyeData[i].y * cellHei - Math.floor(bigEyeData[i].y / 2);
            item.setPosition(ssx, ssy);
            this._items.push(item);
            this.node.addChild(item);
            if (isUpdate && i == bigEyeData.length - 1) {
              tween(item.getComponent(UIOpacity)).to(0.5, {
                opacity: 0
              }).to(0.5, {
                opacity: 255
              }).union().repeat(3).start();
            }
          }
        };
        return UICockroach;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cloneTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec3], {
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

System.register("chunks:///_virtual/UIDishRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDishRoadItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, instantiate, Component, UIDishRoadItem;
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
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      UIDishRoadItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "55ae6VT55lJQbye64fcQBX/", "UIDishRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIDishRoad = exports('default', (_dec = ccclass("UIDishRoad"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec4 = property(), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIDishRoad, _Component);
        function UIDishRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cloneTarget", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprResults", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxItemCount", _descriptor3, _assertThisInitialized(_this));
          _this._datas = null;
          _this._items = null;
          _this._type = 0;
          return _this;
        }
        var _proto = UIDishRoad.prototype;
        _proto.setType = function setType(type) {
          this._type = type;
          var items = this.items;
          for (var i = 0; i < items.length; ++i) {
            var tmp = items[i];
            tmp.Label_text.node.active = this._type == 0;
            tmp.Label_text_num.node.active = this._type == 1;
          }
        };
        _proto.SetData = function SetData(arr, isRoomPath) {
          this.maxItemCount = isRoomPath ? this.maxItemCount - 1 : this.maxItemCount;
          this._datas = arr;
          var items = this.items;
          var iStart = 0;
          if (arr.length > items.length) {
            iStart = arr.length - items.length;
          }
          for (var i = 0; i < items.length; ++i) {
            if (i < arr.length) {
              var iIndex = iStart + i;
              var display = this.Data2Display(arr[iIndex]);
              if (display) {
                var tmp = items[i];
                tmp.sprIcon.spriteFrame = this.sprResults[display.resultIdx];
                tmp.ndRing.active = display.bankerPair || display.playerPair;
                tmp.ndPlayerPair.active = display.playerPair;
                tmp.ndBankerPair.active = display.bankerPair;
                if (tmp.Label_text) {
                  tmp.Label_text.string = display.resultIdx == 0 ? "P" : display.resultIdx == 1 ? "B" : "T";
                  tmp.Label_text_num.string = "" + (display.resultIdx == 0 ? arr[iIndex].playerDian : arr[iIndex].playerDian);
                  tmp.Label_text.node.active = this._type == 0;
                  tmp.Label_text_num.node.active = this._type == 1;
                }
                tmp.active = true;
              }
            } else {
              items[i].active = false;
            }
          }
        };
        _proto.Data2Display = function Data2Display(data) {
          //        // return { resultIdx: 0, bankerPair: false, playPair: false };
          return null;
        };
        _proto.SetItemDisplay = function SetItemDisplay(data) {};
        _proto.InitItems = function InitItems() {
          if (!this._items) {
            this.cloneTarget.active = false;
            this._items = [this.cloneTarget.getComponent(UIDishRoadItem)];
            for (var i = 0; i < this.maxItemCount - 1; ++i) {
              var clone = instantiate(this.cloneTarget);
              clone.parent = this.node;
              this._items.push(clone.getComponent(UIDishRoadItem));
            }
          }
        };
        _proto.DataAtIdx = function DataAtIdx(idx) {
          return this._datas[idx];
        }
        //    // LIFE-CYCLE CALLBACKS:
        ;

        _proto.onLoad = function onLoad() {
          this.InitItems();
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _createClass(UIDishRoad, [{
          key: "items",
          get: function get() {
            this.InitItems();
            return this._items;
          }
        }]);
        return UIDishRoad;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxItemCount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6 * 12;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIDishRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, Node, Label, Component;
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
      Sprite = module.Sprite;
      Node = module.Node;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "916381qypBJ672ENsj8eixJ", "UIDishRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIDishRoadItem = exports('default', (_dec = ccclass("UIDishRoadItem"), _dec2 = property(Sprite), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIDishRoadItem, _Component);
        function UIDishRoadItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprIcon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ndRing", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ndBankerPair", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ndPlayerPair", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_text", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_text_num", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UIDishRoadItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _createClass(UIDishRoadItem, [{
          key: "active",
          set: function set(value) {
            this.node.active = value;
          }
        }]);
        return UIDishRoadItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndRing", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndBankerPair", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ndPlayerPair", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_text", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_text_num", [_dec7], {
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

System.register("chunks:///_virtual/UIRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './ViewManager.ts', './BaccaratDataMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, AutoEventNode, ViewManager, BaccaratDataMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      BaccaratDataMgr = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bc424K7KP1GQINX+eKDtQCg", "UIRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NewClass = exports('default', (_dec = ccclass("UIRoot"), _dec(_class = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(NewClass, _AutoEventNode);
        function NewClass() {
          return _AutoEventNode.apply(this, arguments) || this;
        }
        var _proto = NewClass.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {
          var _this = this;
          this.node.on(Node.EventType.SIZE_CHANGED, function () {
            gts.Debug.Log("# UIRoot size-changed");
          }, this);
          this.scheduleOnce(function () {
            ViewManager.instance.addChatView("bjl", _this, BaccaratDataMgr.ins.curTableID);
          });
        }
        //    // update (dt) {}
        ;

        return NewClass;
      }(AutoEventNode)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIScoreRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './BaccaratDef.ts', './RoadListDef.ts', './UIScoreRoadItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, UITransform, instantiate, tween, UIOpacity, Component, Color, GUtil, BaccaratDef, RoadListDef, UIScoreRoadItem;
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
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
      Color = module.Color;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      BaccaratDef = module.BaccaratDef;
    }, function (module) {
      RoadListDef = module.RoadListDef;
    }, function (module) {
      UIScoreRoadItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "5599fRZYFhFka+FIWMcYxcI", "UIScoreRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIScoreRoad = exports('default', (_dec = ccclass("UIScoreRoad"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec4 = property({}), _dec5 = property({}), _dec6 = property({}), _dec7 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIScoreRoad, _Component);
        function UIScoreRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cloneTarget", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorBanker", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorPlayer", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorTie", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRefresh", _descriptor6, _assertThisInitialized(_this));
          _this._items = [];
          _this._maxCol = 0;
          _this._cellMap = {};
          return _this;
        }
        var _proto = UIScoreRoad.prototype;
        _proto.DelAllItems = function DelAllItems() {
          for (var i = 0; i < this._items.length; ++i) {
            this._items[i].removeFromParent();
            this._items[i].destroy();
          }
          this._items = [];
        }
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        //    // private _debuglogs: BaccaratMsg.IHistoryElmt[] = null;
        ;

        _proto.start = function start() {
          GUtil.NodeVisible(this.cloneTarget, false);

          //        // gts.UI.OnClick(this.btnRefresh, () => {
          //        //     this.UpdateUI(this._debuglogs);
          //        // }, this);
        }
        //    // update (dt) {}
        //    /**
        //     * 分数路
        //     * @param logs
        //     */
        ;

        _proto.UpdateUI = function UpdateUI(logs, isUpdate) {
          if (isUpdate === void 0) {
            isUpdate = false;
          }
          this.DelAllItems();
          var COSS = 13;
          var startx = this.cloneTarget.getPosition().x;
          var starty = this.cloneTarget.getPosition().y;
          var cellWid = this.cloneTarget.getComponent(UITransform).width;
          var cellHei = this.cloneTarget.getComponent(UITransform).height;

          //        // this._debuglogs = logs;
          //        // gts.Debug.Log(`${JSON.stringify(logs)}`);
          this.CreateMap(logs);
          var tmpmaxCol = 0;
          var allkeys = Object.keys(this._cellMap);
          for (var i = 0; i < allkeys.length; ++i) {
            var elmts = allkeys[i].split("-");
            var tmpcol = Number(elmts[0]);
            if (tmpcol > tmpmaxCol) {
              tmpmaxCol = tmpcol;
            }
          }
          for (var xidx = COSS; xidx > 0; --xidx) {
            var fixedX = tmpmaxCol >= COSS ? tmpmaxCol - (COSS - xidx) : xidx;
            //            // gts.Debug.Log(`fixedX:${fixedX}`);
            for (var yidx = 0; yidx < RoadListDef.BP_ROW; ++yidx) {
              var _key2 = fixedX + "-" + yidx;
              var _data = this._cellMap[_key2];
              if (_data) {
                var item = instantiate(this.cloneTarget);
                item.active = true;
                item.parent = this.node;
                this._items.push(item);
                var xpos = startx + (xidx - 1) * cellWid;
                var ypos = starty - yidx * cellHei;

                //                    // gts.Debug.Log(`${key}:cc.v2( ${xpos.toFixed(2)},${ypos.toFixed(2)} ) ${JSON.stringify(data)}`);
                item.setPosition(xpos, ypos);
                var comm = item.getComponent(UIScoreRoadItem);
                gts.UI.SetLab(comm.labSmall, _data.small);
                if (_data.type === RoadListDef.Type.B) {
                  comm.imgFlag.spriteFrame = this.imgs[0];
                  gts.UI.SetLab(comm.labBig, _data.big, {
                    color: this.colorBanker,
                    font: null
                  });
                } else if (_data.type === RoadListDef.Type.P) {
                  comm.imgFlag.spriteFrame = this.imgs[1];
                  gts.UI.SetLab(comm.labBig, _data.big, {
                    color: this.colorPlayer,
                    font: null
                  });
                } else {
                  comm.imgFlag.spriteFrame = this.imgs[2];
                  gts.UI.SetLab(comm.labBig, _data.big, {
                    color: this.colorTie,
                    font: null
                  });
                }
                if (_data.last && isUpdate) {
                  tween(item.getComponent(UIOpacity)).to(0.5, {
                    opacity: 0
                  }).to(0.5, {
                    opacity: 255
                  }).union().repeat(3).start();
                }
              }
            }
          }
          GUtil.NodeVisible(this.cloneTarget, false);
        };
        _proto.Elmt2Data = function Elmt2Data(elmt) {
          var data = new RoadListDef.ScoreData();
          data.big = elmt.bankerDian > elmt.playerDian ? elmt.bankerDian : elmt.playerDian;
          data.small = elmt.bankerDian < elmt.playerDian ? elmt.bankerDian : elmt.playerDian;
          if (BaccaratDef.AREA.BANKER === elmt.result) {
            data.type = RoadListDef.Type.B;
          } else if (BaccaratDef.AREA.PLAYER === elmt.result) {
            data.type = RoadListDef.Type.P;
          } else {
            data.type = RoadListDef.Type.T;
          }
          return data;
        };
        _proto.CreateMap = function CreateMap(logs, maxRow) {
          var _this2 = this;
          if (maxRow === void 0) {
            maxRow = 6;
          }
          this._maxCol = 0;
          this._cellMap = {};
          if (!logs || logs.length === 0) {
            return;
          }

          //        //! 当前类型
          var curType = logs[0].result;
          var useCol = 0;
          var curCol = 0;
          var curRow = 0;
          var lastData = null;
          var GetKey = function GetKey() {
            return curCol + "-" + curRow;
          };
          var AddData = function AddData(data) {
            lastData = data;
            var key = GetKey();
            _this2._cellMap[key] = data;
            if (curRow + 1 < maxRow && !_this2._cellMap[curCol + "-" + (curRow + 1)]) {
              curRow += 1;
            } else {
              curCol += 1;
            }
            if (curCol > _this2._maxCol) {
              _this2._maxCol = curCol;
            }
          };
          for (var i = 0; i < logs.length; ++i) {
            var tmp = logs[i];
            var _data2 = this.Elmt2Data(tmp);
            if (tmp.result === curType || tmp.result === BaccaratDef.AREA.TIE) {
              AddData(_data2);
            } else {
              curType = tmp.result;
              useCol += 1;
              curCol = useCol;
              curRow = 0;
              AddData(_data2);
            }
          }
          lastData.last = true;
        };
        return UIScoreRoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cloneTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colorBanker", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.RED.clone();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "colorPlayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.BLUE.clone();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "colorTie", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.GREEN.clone();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnRefresh", [_dec7], {
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

System.register("chunks:///_virtual/UIScoreRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Component;
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
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "d815aHElf1Pb6dFuavrPlfV", "UIScoreRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIScoreRoadItem = exports('default', (_dec = ccclass("UIScoreRoadItem"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIScoreRoadItem, _Component);
        function UIScoreRoadItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "labBig", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labSmall", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgFlag", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UIScoreRoadItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return UIScoreRoadItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labBig", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labSmall", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgFlag", [_dec4], {
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

System.register("chunks:///_virtual/UISmallRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './RoadListDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, UITransform, instantiate, Sprite, tween, UIOpacity, Component, GUtil, RoadListDef;
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
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      RoadListDef = module.RoadListDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e37d9KbzFZAObM9vfOmDVok", "UISmallRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UISmallRoad = exports('default', (_dec = ccclass("UISmallRoad"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UISmallRoad, _Component);
        function UISmallRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cloneTarget", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor2, _assertThisInitialized(_this));
          _this._items = [];
          return _this;
        }
        var _proto = UISmallRoad.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {
          GUtil.NodeVisible(this.cloneTarget, false);
        };
        _proto.DelAllItems = function DelAllItems() {
          for (var i = 0; i < this._items.length; ++i) {
            this._items[i].removeFromParent();
            this._items[i].destroy();
          }
          this._items = [];
        }
        //    /**
        //     * 小路
        //     * @param logs
        //     */
        ;

        _proto.UpdateUI = function UpdateUI(sources, bigroadDic, isUpdate) {
          if (isUpdate === void 0) {
            isUpdate = false;
          }
          this.DelAllItems();
          var COSS = 13;
          var startx = this.cloneTarget.getPosition().x;
          var starty = this.cloneTarget.getPosition().y;
          var cellWid = this.cloneTarget.getComponent(UITransform).width;
          var cellHei = this.cloneTarget.getComponent(UITransform).height;
          var bigEyeData = RoadListDef.Util.parseSmallRoadDatas(sources, bigroadDic);
          var maxCos = RoadListDef.Util.getMaxColLen(bigEyeData);
          var startIdx = maxCos > COSS ? maxCos - COSS : 0;
          for (var i = 0; i < bigEyeData.length; i++) {
            if (bigEyeData[i].x < startIdx) {
              continue;
            }
            var item = instantiate(this.cloneTarget);
            item.active = true;
            if (bigEyeData[i].bigType == "Banker") {
              item.getChildByName("bg").getComponent(Sprite).spriteFrame = this.imgs[0];
            } else {
              item.getChildByName("bg").getComponent(Sprite).spriteFrame = this.imgs[1];
            }
            var ssx = startx + (bigEyeData[i].x - startIdx) * cellWid + Math.floor((bigEyeData[i].x - startIdx) / 2);
            var ssy = starty - bigEyeData[i].y * cellHei - Math.floor(bigEyeData[i].y / 2);
            item.setPosition(ssx, ssy);
            this.node.addChild(item);
            this._items.push(item);
            if (isUpdate && i == bigEyeData.length - 1) {
              tween(item.getComponent(UIOpacity)).to(0.5, {
                opacity: 0
              }).to(0.5, {
                opacity: 255
              }).union().repeat(3).start();
            }
          }
        }
        //    // update (dt) {}
        ;

        return UISmallRoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cloneTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec3], {
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

System.register("chunks:///_virtual/UITestOpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './DlgBaccaratTest.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, AutoEventNode, GUtil, DlgBaccaratTest;
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
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      DlgBaccaratTest = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "4e31dL4vFlCY5Fm2wouXvRI", "UITestOpt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UITestOpt = exports('default', (_dec = ccclass("UITestOpt"), _dec2 = property(Node), _dec3 = property(DlgBaccaratTest), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(UITestOpt, _AutoEventNode);
        function UITestOpt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnOpen", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dlgTest", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UITestOpt.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          GUtil.NodeVisible(this.dlgTest ? this.dlgTest.node : null, false);
        };
        _proto.start = function start() {
          var _this2 = this;
          _AutoEventNode.prototype.start.call(this);
          gts.UI.OnClick(this.btnOpen, function () {
            if (_this2.dlgTest) {
              _this2.dlgTest.Open();
            }
          }, this);
        }
        //    // update (dt) {}
        ;

        return UITestOpt;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnOpen", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dlgTest", [_dec3], {
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

(function(r) {
  r('virtual:///prerequisite-imports/BaccaratGame', 'chunks:///_virtual/BaccaratGame'); 
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