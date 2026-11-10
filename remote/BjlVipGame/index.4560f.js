System.register("chunks:///_virtual/BjlVip_deskArea.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BjlVipUtils.ts', './EventManager.ts', './BjlVipDef.ts', './BjlVipModel.ts', './Common.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, MeshRenderer, v3, instantiate, MeshCollider, color, tween, v4, ParticleUtils, Animation, Component, Vec3, Tween, BjlVipUtils, EventManager, arrTexture, eEvent, eRunStatus, eSound, chipListDef, arrSendCardInfo, cardTillingOffset, betAreaMap, arrBetAreaMap, BjlVipModel, Common, i18n;
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
      Label = module.Label;
      MeshRenderer = module.MeshRenderer;
      v3 = module.v3;
      instantiate = module.instantiate;
      MeshCollider = module.MeshCollider;
      color = module.color;
      tween = module.tween;
      v4 = module.v4;
      ParticleUtils = module.ParticleUtils;
      Animation = module.Animation;
      Component = module.Component;
      Vec3 = module.Vec3;
      Tween = module.Tween;
    }, function (module) {
      BjlVipUtils = module.BjlVipUtils;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      arrTexture = module.arrTexture;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      chipListDef = module.chipListDef;
      arrSendCardInfo = module.arrSendCardInfo;
      cardTillingOffset = module.cardTillingOffset;
      betAreaMap = module.betAreaMap;
      arrBetAreaMap = module.arrBetAreaMap;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ccdb3NZfsBNL5btJKj0Xi98", "BjlVip_deskArea", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // const arrTier = [16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 33, 27];
      // const arrOrphelins = [1, 20, 14, 31, 9, 6, 34, 17];
      // const arrVoisins = [22, 18, 29, 7, 28, 19, 4, 21, 2, 25, 12, 35, 3, 26, 0, 32, 15];
      // const arrZero = [12, 35, 3, 26, 0, 32, 15];

      // const arrRed = [1, 14, 9, 18, 7, 12, 3, 32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16];
      // const arrBlack = [20, 31, 22, 29, 28, 35, 26, 15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33];

      // const arrIRound = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

      var BjlVip_deskArea = exports('BjlVip_deskArea', (_dec = ccclass("BjlVip_deskArea"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVip_deskArea, _Component);
        function BjlVip_deskArea() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.selChip = null;
          // @property(Node)
          // X_lunpanchangjing: Node = null;
          // @property(Node)
          // X_yaozhong: Node = null;
          _initializerDefineProperty(_this, "Node_win_quad_0", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_win_quad_other", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalBet", _descriptor3, _assertThisInitialized(_this));
          // @property(Node)
          // Node_betDetail: Node = null;
          // @property(Node)
          // detailItem: Node = null;
          // @property(Node)
          // detailContent: Node = null;
          // @property(Sprite)
          // betDetailTag: Sprite = null;
          // @property(SpriteFrame)
          // btnDetailSpr: SpriteFrame[] = [];
          _this.Node_betArea = null;
          _this.Node_chipRoot = null;
          _this.Node_betChipRoot = null;
          _this.X_suliao1 = null;
          _this.X_puke = null;
          _this.X_fapaiqi = null;
          _this.chipTag = null;
          _this.Node_cardRoot = null;
          _this.cardTemp = null;
          _this.Node_aniRoot = null;
          _this.Node_vsEffect = null;
          return _this;
        }
        var _proto = BjlVip_deskArea.prototype;
        _proto.init = function init() {
          // Chip
          var keys = Object.keys(arrTexture);
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var key = _keys[_i];
            var chipNode = this.Node_chipRoot.getChildByName(key);
            if (chipNode) {
              var spriteFrame = BjlVipUtils.instance.arrChipSpriteFrame[arrTexture[key]];
              var meshRender = chipNode.getComponent(MeshRenderer);
              meshRender.material.setProperty("mainTexture", spriteFrame.texture);
            }
          }
          this.Node_aniRoot = this.node.getChildByName("Node_aniRoot");
          this.Node_vsEffect = this.node.getChildByName("vs");
          this.selChip = this.Node_chipRoot.getChildByName(keys[0]);
          this.chipTag.active = true;
          this.chipTag.position = this.selChip.position;

          //betArea
          var arrPos = ["account_bg_04", "account_bg_04", "account_bg_05", "account_bg_03", "account_bg_03", "account_bg_01", "account_bg_02", "account_bg_02", "account_bg_01"];
          for (var i = 0; i < arrPos.length; i++) {
            var _meshRender = this.Node_betArea.children[i].getComponent(MeshRenderer);
            var _spriteFrame = BjlVipUtils.instance.arrBetAreaSpriteFrame[arrPos[i]];
            _meshRender.material.setProperty("mainTexture", _spriteFrame.texture);
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.Node_betArea = this.node.getChildByName("Node_betArea");
          this.Node_betChipRoot = this.Node_betArea.getChildByName("Node_betChipRoot");
          this.Node_chipRoot = this.node.getChildByName("Node_chipRoot");
          this.Node_cardRoot = this.node.getChildByName("Node_cardRoot");
          this.cardTemp = this.Node_cardRoot.getChildByName("X_pukepai");
          this.X_suliao1 = this.node.getChildByName("X_suliao1");
          this.X_puke = this.node.getChildByName("X_puke");
          this.X_fapaiqi = this.node.getChildByName("X_fapaiqi");
          this.chipTag = this.Node_chipRoot.getChildByName("cm_light");
          EventManager.instance.on(eEvent.onMouseMoveIn, this.onMouseMoveIn, this);
          EventManager.instance.on(eEvent.onMouseMoveOut, this.onMouseMoveOut, this);
          EventManager.instance.on(eEvent.onMouseDown, this.onMouseDown, this);
          EventManager.instance.on(eEvent.onMouseClick, this.onMouseClick, this);
          EventManager.instance.on(eEvent.onBtnClick, this.onBtnClick, this);
          EventManager.instance.on(eEvent.onGameStart, this.onGameStart, this);
          EventManager.instance.on(eEvent.onGameEnd, this.onGameEnd, this);
          this.doClearBet();
          this.Node_betArea.active = true;
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onMouseMoveIn, this.onMouseMoveIn, this);
          EventManager.instance.off(eEvent.onMouseMoveOut, this.onMouseMoveOut, this);
          EventManager.instance.off(eEvent.onMouseDown, this.onMouseDown, this);
          EventManager.instance.off(eEvent.onMouseClick, this.onMouseClick, this);
          EventManager.instance.off(eEvent.onBtnClick, this.onBtnClick, this);
          EventManager.instance.off(eEvent.onGameStart, this.onGameStart, this);
          EventManager.instance.off(eEvent.onGameEnd, this.onGameEnd, this);
          this.doClearBet();
          this.unscheduleAllCallbacks();
          this.chipTag.active = false;
          this.Node_betArea.active = false;
        };
        _proto.onMouseMoveIn = function onMouseMoveIn(target) {
          // if (target.parent.name.match("Node_betArea")) {
          //     this.showLight(target);
          // }
        };
        _proto.onMouseMoveOut = function onMouseMoveOut(target) {
          // if (target.parent.name.match("Node_betArea")) {
          //     this.showLight(target, false);
          // }
        };
        _proto.onMouseDown = function onMouseDown(target) {
          // switch (target.name) {
          //     case "X_quanzi": {
          //         if (BjlVipModel.instance.gameStatus != BjlVipDef.eRunStatus.NONE) {
          //             return;
          //         }
          //         BjlVipUtils.instance.playSound(BjlVipDef.eSound.Cancel);
          //         this.scheduleOnce(this.doClearBet, 3);
          //         break;
          //     }
          // }
        };
        _proto.onMouseClick = function onMouseClick(target) {
          switch (target.name) {
            case "X_100":
            case "X_1K":
            case "X_10K":
            case "X_50K":
            case "X_100K":
            case "X_500K":
            case "X_1M":
            case "X_5M":
              {
                BjlVipUtils.instance.playSound(eSound.Coins);
                this.selChip = target;
                this.chipTag.position = this.selChip.position;
                break;
              }
            default:
              {
                if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                if (target.parent.name.match("Node_betArea")) {
                  var toPos = target.name == "Quad_play" || target.name == "Quad_bank" || target.name == "Quad_draw" ? v3(target.position.x, target.position.y, target.position.z - 0.03) : target.position;
                  BjlVipModel.instance.betPosList[target.parent.name + "#" + target.name] = target.position;
                  this.doBetChip(target.parent.name + "#" + target.name, this.selChip.name, target.position);
                }
                break;
              }
          }
        }
        //tag==0:clear 1:last 2:double
        // case "btn_revocation":
        //     case "btn_betAgain":
        //     case "btn_double":
        ;

        _proto.onBtnClick = function onBtnClick(btnName) {
          switch (btnName) {
            case "btn_revocation":
              {
                //clear bet
                // this.unschedule(this.doClearBet);

                if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                this.doClearBet();
                if (this.Node_betChipRoot.children.length > 0) {
                  this.Node_betChipRoot.destroyAllChildren();
                  BjlVipModel.instance.betOrderList = {};
                  BjlVipModel.instance.betAreaList = {};
                  BjlVipModel.instance.curTotalBet = 0;

                  // this.detailContent.destroyAllChildren();
                }

                EventManager.instance.emit(eEvent.onBtnStatusUpdate, "btn_revocation");
                break;
              }
            case "btn_betAgain":
              {
                //last X
                if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                if (Object.keys(BjlVipModel.instance.betOrderBack).length == 0) {
                  Common.showTip(i18n.lang["disableBet"]);
                  return;
                }
                gts.Debug.Log("===betOrderList====btn_betAgain=" + JSON.stringify(BjlVipModel.instance.betOrderList));
                gts.Debug.Log("===betOrderBack===btn_betAgain==" + JSON.stringify(BjlVipModel.instance.betOrderBack));
                var betOrderBackKeys = Object.keys(BjlVipModel.instance.betOrderBack);
                for (var _i2 = 0, _betOrderBackKeys = betOrderBackKeys; _i2 < _betOrderBackKeys.length; _i2++) {
                  var key = _betOrderBackKeys[_i2];
                  var arrBetInfo = BjlVipModel.instance.betOrderBack[key].slice();
                  for (var i = 0; i < arrBetInfo.length; i++) {
                    var betInfo = arrBetInfo[i];
                    this.doBetChip(key, betInfo.chip, betInfo.pos, i * 0.005);
                  }
                }
                break;
              }
            case "btn_double":
              {
                //2X
                if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                var betOrderListKeys = Object.keys(BjlVipModel.instance.betOrderList);
                if (betOrderListKeys.length == 0) {
                  Common.showTip(i18n.lang["disableBet"]);
                  return;
                }
                BjlVipUtils.instance.playSound(eSound.Double);
                for (var _i3 = 0, _betOrderListKeys = betOrderListKeys; _i3 < _betOrderListKeys.length; _i3++) {
                  var _key2 = _betOrderListKeys[_i3];
                  var _arrBetInfo = BjlVipModel.instance.betOrderList[_key2].slice();
                  for (var _i4 = 0; _i4 < _arrBetInfo.length; _i4++) {
                    var _betInfo = _arrBetInfo[_i4];
                    this.doBetChip(_key2, _betInfo.chip, _betInfo.pos, _i4 * 0.005);
                  }
                }
                break;
              }
          }
        };
        _proto.doBetChip = /*#__PURE__*/function () {
          var _doBetChip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(area, chip, pos, delay) {
            var _this2 = this;
            var betAmount, curTableInfo, arrAreaInfo, nodeArea, MaxIssueBet, tip, _tip, getSmall, keys, i, key, _mRender, _mRender2, addChipTemp, betAreaList, _keys2, newChip, mRender, sprFrame, duration;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (delay === void 0) {
                    delay = 0;
                  }
                  betAmount = chipListDef[chip]; //下注上限
                  curTableInfo = BjlVipModel.instance.tableList[BjlVipModel.instance.selectRoomIndex];
                  arrAreaInfo = area.split("#");
                  nodeArea = arrAreaInfo[1];
                  MaxIssueBet = curTableInfo.MaxIssueBet[betAreaMap[nodeArea] - 1];
                  if (!(nodeArea == "Quad_play" && BjlVipModel.instance.areaTotalBet["Quad_bank"] || nodeArea == "Quad_bank" && BjlVipModel.instance.areaTotalBet["Quad_play"])) {
                    _context.next = 10;
                    break;
                  }
                  tip = Common.strFormat(i18n.lang["10002"], MaxIssueBet, 2);
                  Common.showTip(tip);
                  return _context.abrupt("return");
                case 10:
                  if (!(BjlVipModel.instance.areaTotalBet[nodeArea] + betAmount > MaxIssueBet)) {
                    _context.next = 14;
                    break;
                  }
                  _tip = Common.strFormat(i18n.lang["10064"], MaxIssueBet, 2);
                  Common.showTip(_tip);
                  return _context.abrupt("return");
                case 14:
                  if (!BjlVipModel.instance.areaTotalBet[nodeArea]) {
                    BjlVipModel.instance.areaTotalBet[nodeArea] = 0;
                  }
                  if (BjlVipModel.instance.gameStatus == eRunStatus.NONE) {
                    EventManager.instance.emit(eEvent.onStopCameraCruise);
                  }
                  if (!(BjlVipModel.instance.curBalance < betAmount)) {
                    _context.next = 37;
                    break;
                  }
                  getSmall = false;
                  keys = Object.keys(chipListDef);
                  i = keys.length - 1;
                case 20:
                  if (!(i >= 0)) {
                    _context.next = 34;
                    break;
                  }
                  key = keys[i];
                  betAmount = chipListDef[key];
                  if (!(BjlVipModel.instance.curBalance >= betAmount)) {
                    _context.next = 31;
                    break;
                  }
                  chip = key;
                  if (this.selChip) {
                    _mRender = this.chipTag.getComponent(MeshRenderer);
                    if (_mRender) {
                      _mRender.material.setProperty("emissive", color(255, 255, 255));
                    }
                  }
                  this.selChip = this.selChip.parent.getChildByName(key);
                  this.chipTag.position = this.selChip.position;
                  if (this.selChip) {
                    _mRender2 = this.chipTag.getComponent(MeshRenderer);
                    if (_mRender2) {
                      _mRender2.material.setProperty("emissive", color(5, 29, 127));
                    }
                  }
                  getSmall = true;
                  return _context.abrupt("break", 34);
                case 31:
                  i--;
                  _context.next = 20;
                  break;
                case 34:
                  if (getSmall) {
                    _context.next = 37;
                    break;
                  }
                  Common.showTip(i18n.lang["10001"]);
                  return _context.abrupt("return");
                case 37:
                  BjlVipModel.instance.areaTotalBet[nodeArea] += betAmount;
                  BjlVipModel.instance.curTotalBet += betAmount;
                  // this.Label_totalBet.string = `$${Common.ChangeMoneyShow(BjlVipModel.instance.curTotalBet, 2)}`;

                  BjlVipModel.instance.curBalance -= betAmount;
                  EventManager.instance.emit(eEvent.onUpdateGold);
                  addChipTemp = this.Node_chipRoot.getChildByName(chip);
                  betAreaList = BjlVipModel.instance.betAreaList[area];
                  if (betAreaList) {
                    _keys2 = Object.keys(betAreaList);
                    pos = v3(pos.x, 0.212 + _keys2.length * 0.0025, pos.z);
                  }
                  newChip = instantiate(addChipTemp);
                  mRender = newChip.getComponent(MeshRenderer);
                  sprFrame = BjlVipUtils.instance.arrChipSpriteFrame[arrTexture[newChip.name]];
                  mRender.material.setProperty("mainTexture", sprFrame.texture);
                  newChip.getComponent(MeshCollider).destroy();
                  newChip.scale = v3(0.75, 0.75, 0.75);
                  // newChip.position = pos;
                  this.Node_betChipRoot.addChild(newChip);
                  BjlVipModel.instance.betAreaList[area] = BjlVipModel.instance.betAreaList[area] || [];
                  BjlVipModel.instance.betAreaList[area].push(newChip);
                  duration = Vec3.distance(addChipTemp.position, pos) / 1;
                  tween(newChip).delay(delay).call(function () {
                    BjlVipUtils.instance.playSound(eSound.Bet);
                    EventManager.instance.emit(eEvent.onBtnStatusUpdate);
                  }).to(duration, {
                    position: pos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    newChip.position = pos;

                    //检测合并
                    _this2.checkMerge(area, pos);
                  }).start();
                case 55:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doBetChip(_x, _x2, _x3, _x4) {
            return _doBetChip.apply(this, arguments);
          }
          return doBetChip;
        }() //检测合并
        ;

        _proto.checkMerge = function checkMerge(area, toPos) {
          var betAreaList = BjlVipModel.instance.betAreaList[area];
          var areaList = {};
          var keys = Object.keys(betAreaList);
          for (var _i5 = 0, _keys3 = keys; _i5 < _keys3.length; _i5++) {
            var key = _keys3[_i5];
            var chip = betAreaList[key];
            areaList[chip.name] = areaList[chip.name] || [];
            areaList[chip.name].push(chip);
          }
          var chipKeys = Object.keys(chipListDef);
          for (var i = 0; i < chipKeys.length - 1; i++) {
            var _key3 = chipKeys[i];
            var nextKey = chipKeys[i + 1];
            if (!areaList[_key3]) {
              continue;
            }
            var max = Math.floor(chipListDef[nextKey] / chipListDef[_key3]);
            while (areaList[_key3].length >= max) {
              //去除max个小筹码
              var chipList = areaList[_key3];
              var chipPos = chipList[0].position;
              areaList[_key3].splice(0, max);
              for (var j = betAreaList.length - 1, delCounts = max; j >= 0 && delCounts > 0; j--) {
                var chipNode = betAreaList[j];
                if (chipNode.name == _key3) {
                  delCounts--;
                  chipNode.destroyFromParent();
                  betAreaList.splice(j, 1);
                }
              }

              //添加一个大筹码
              var addChipTemp = this.Node_chipRoot.getChildByName(nextKey);
              var newChip = instantiate(addChipTemp);
              var mRender = newChip.getComponent(MeshRenderer);
              var sprFrame = BjlVipUtils.instance.arrChipSpriteFrame[arrTexture[newChip.name]];
              mRender.material.setProperty("mainTexture", sprFrame.texture);
              newChip.getComponent(MeshCollider).destroy();
              newChip.scale = v3(0.75, 0.75, 0.75);
              newChip.position = chipPos;
              this.Node_betChipRoot.addChild(newChip);
              areaList[nextKey] = areaList[nextKey] || [];
              areaList[nextKey].push(newChip);
              betAreaList.push(newChip);
            }
          }

          // BjlVipModel.instance.betOrderList[area] = [];
          //reset pos
          for (var _i6 = 0; _i6 < betAreaList.length; _i6++) {
            var _chip = betAreaList[_i6];
            _chip.position = v3(toPos.x, 0.212 + _i6 * 0.0025, toPos.z);

            // BjlVipModel.instance.betOrderList[area].push({
            //     chip: chip.name,
            //     pos: v3(chip.position.x, chip.position.y, chip.position.z),
            // });
          }

          gts.Debug.Log("===betOrderList==checkMerge===" + JSON.stringify(BjlVipModel.instance.betOrderList));
        };
        _proto.clearBet = function clearBet() {
          if (BjlVipModel.instance.selectRoomIndex != -1) {
            EventManager.instance.emit(eEvent.onWaitCameraCruise);
          }
          for (var i = this.Node_betChipRoot.children.length - 1; i >= 0; i--) {
            this.Node_betChipRoot.children[i].destroyFromParent();
          }
          for (var _i7 = this.Node_cardRoot.children.length - 1; _i7 > 0; _i7--) {
            this.Node_cardRoot.children[_i7].destroyFromParent();
          }
          BjlVipModel.instance.betOrderList = {};
          BjlVipModel.instance.betAreaList = {};
          BjlVipModel.instance.curTotalBet = 0;
          BjlVipModel.instance.areaTotalBet = {};
        };
        _proto.doClearBet = function doClearBet() {
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          BjlVipUtils.instance.playSound(eSound.Cancel);
          BjlVipModel.instance.curBalance += BjlVipModel.instance.curTotalBet;
          EventManager.instance.emit(eEvent.onUpdateGold);
          this.clearBet();
        }

        //返回上一次下注
        ;

        _proto.returnBet = function returnBet(betInfo) {
          var _this3 = this;
          var betAreaList = BjlVipModel.instance.betAreaList[betInfo.area];
          if (betAreaList.length == 0) {
            EventManager.instance.emit(eEvent.onWaitCameraCruise);
            return;
          }
          var betAmount = chipListDef[betInfo.chip];
          BjlVipModel.instance.curTotalBet -= betAmount;
          BjlVipModel.instance.curBalance += betAmount;
          EventManager.instance.emit(eEvent.onUpdateGold);

          // this.Label_totalBet.string = BjlVipModel.instance.curTotalBet > 0 ? `$${Common.ChangeMoneyShow(BjlVipModel.instance.curTotalBet, 2)}` : "0";

          var delChip = function delChip(chipName) {
            for (var j = betAreaList.length - 1; j >= 0; j--) {
              var chipNode = betAreaList[j];
              if (chipNode.name == chipName) {
                chipNode.destroyFromParent();
                betAreaList.splice(j, 1);
                return true;
              }
            }
            return false;
          };
          var breakChip = function breakChip(smallChip, bigChip) {
            //删除大筹码
            betAreaList = BjlVipModel.instance.betAreaList[betInfo.area];
            var chipPos = betAreaList[0].position;
            for (var j = betAreaList.length - 1; j >= 0; j--) {
              var chipNode = betAreaList[j];
              if (chipNode.name == bigChip) {
                chipPos = chipNode.position;
                chipNode.destroyFromParent();
                betAreaList.splice(j, 1);

                //拆解大筹码为max-1个小一阶筹码
                var max = Math.floor(chipListDef[bigChip] / chipListDef[smallChip]);
                for (var _j = 0; _j < max; _j++) {
                  //添加筹码
                  var addChipTemp = _this3.Node_chipRoot.getChildByName(smallChip);
                  var newChip = instantiate(addChipTemp);
                  var mRender = newChip.getComponent(MeshRenderer);
                  var sprFrame = BjlVipUtils.instance.arrChipSpriteFrame[arrTexture[newChip.name]];
                  mRender.material.setProperty("mainTexture", sprFrame.texture);
                  newChip.getComponent(MeshCollider).destroy();
                  newChip.scale = v3(0.75, 0.75, 0.75);
                  newChip.position = chipPos;
                  _this3.Node_betChipRoot.addChild(newChip);
                  betAreaList.push(newChip);
                }
                return true;
              }
            }
            return false;
          };

          ///////////////////////////////////////////////////////
          while (!delChip(betInfo.chip)) {
            var chipKeys = Object.keys(chipListDef);
            for (var i = 0; i < chipKeys.length; i++) {
              var key = chipKeys[i];
              if (key == betInfo.chip) {
                var nextIndex = i + 1;
                var nextKey = chipKeys[nextIndex];
                while (nextIndex < chipKeys.length && !breakChip(key, nextKey)) {
                  key = chipKeys[nextIndex];
                  nextKey = chipKeys[++nextIndex];
                }
                break;
              }
            }
          }

          ///////////////////////////////////////////////////
          //reset pos
          var keys = Object.keys(betAreaList);
          for (var _i8 = 0; _i8 < keys.length; _i8++) {
            var _key4 = keys[_i8];
            var chip = betAreaList[_key4];
            chip.position = v3(chip.position.x, _i8 * 0.005, chip.position.z);
          }
        };
        _proto.showLight = function showLight(node, isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var mRender = node.getComponent(MeshRenderer);
          if (mRender) {
            mRender.material.setProperty("mainColor", color(255, 255, 255, isShow ? 255 : 0));
          }
        };
        _proto.sendCard = function sendCard(cardIndex) {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var cardInfo = arrSendCardInfo;
            BjlVipUtils.instance.playOneShot(eSound.Card);
            var newCard = instantiate(_this4.cardTemp);
            newCard.active = true;
            newCard.name = "newCard_" + cardIndex;
            newCard.position = cardInfo[0].pos;
            newCard.eulerAngles = cardInfo[0].eulerAngles;
            newCard.scale = cardInfo[0].scale;
            _this4.Node_cardRoot.addChild(newCard);
            var toPos_0 = cardInfo[1].pos;
            var toEulerAngles_0 = cardInfo[1].eulerAngles;
            var toPos_1 = cardInfo[cardIndex + 2].pos;
            var toEulerAngles_1 = cardInfo[cardIndex + 2].eulerAngles;
            var scale_1 = cardInfo[cardIndex + 2].scale;
            var duration = 0.25; //Vec3.distance(toPos_0, toPos_1);

            tween(newCard).to(0.1, {
              position: toPos_0,
              eulerAngles: toEulerAngles_0
            }).parallel(tween(newCard).bezierTo3(duration, toPos_0, v3(toPos_0.x, (toPos_0.y + toPos_1.y) * 0.75, toPos_0.z), v3(toPos_1.x, (toPos_0.y + toPos_1.y) * 0.75, toPos_1.z), toPos_1), tween(newCard).to(duration, {
              eulerAngles: toEulerAngles_1,
              scale: scale_1
            })).call(function () {
              //onCard toPos End

              BjlVipUtils.instance.playOneShot(eSound.Card);
              resolve();
            }).start();
          });
        };
        _proto.flipCard = function flipCard(cardIndex) {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            //1-52
            var newCard = _this5.Node_cardRoot.getChildByName("newCard_" + cardIndex);
            //
            var arrData = cardIndex % 2 == 0 ? BjlVipModel.instance.betResult.playerCard : BjlVipModel.instance.betResult.bankerCard;
            var index = cardIndex % 2 == 0 ? cardIndex / 2 : (cardIndex - 1) / 2;
            var cardData = arrData[index];
            var cardType_num = (cardData - 1) % 13;
            var cardType_index = Math.floor((cardData - 1) / 13);

            //texture
            var spriteFrame = BjlVipUtils.instance.arrCardSpriteFrame["T_puke" + (cardType_index + 1) + "_Base"];
            var mNewCard = newCard.getComponent(MeshRenderer).material;
            mNewCard.setProperty("mainTexture", spriteFrame.texture);
            var cardOffset = cardTillingOffset[cardType_num];
            mNewCard.setProperty("tilingOffset", v4(1.0, 1.0, cardOffset.x, cardOffset.y));
            var pos = newCard.position;
            var eulerAngles = newCard.eulerAngles;
            BjlVipUtils.instance.playOneShot(eSound.Card);
            var duration = 0.2;
            tween(newCard).parallel(tween(newCard).to(duration, {
              position: v3(pos.x, pos.y * 1.25, pos.z)
            }, {
              easing: "cubicOut"
            }).to(duration, {
              position: v3(pos.x, pos.y, pos.z)
            }, {
              easing: "cubicIn"
            }), tween(newCard).to(duration * 2, {
              eulerAngles: v3(eulerAngles.x + 180, eulerAngles.y, eulerAngles.z)
            })).call(function () {
              //onCard toPos End

              BjlVipUtils.instance.playOneShot(eSound.Card);
              EventManager.instance.emit(eEvent.onFlipCard, cardIndex, cardType_num + 1);
              resolve();
            }).start();
          });
        };
        _proto.doAwait = function doAwait(delay) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            _this6.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.onGameStart = /*#__PURE__*/function () {
          var _onGameStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var i, showNode, mRender, cardData, _i9, _i10;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  for (i = 0; i < 9; i++) {
                    showNode = this.Node_betArea.children[i];
                    Tween.stopAllByTarget(showNode);
                    mRender = showNode.getComponent(MeshRenderer);
                    if (mRender) {
                      mRender.material.setProperty("mainColor", color(255, 255, 255, 0));
                    }
                  }
                  _context2.next = 3;
                  return this.doAwait(2);
                case 3:
                  //发牌0-3
                  cardData = [];
                  cardData[0] = BjlVipModel.instance.betResult.playerCard[0];
                  cardData[1] = BjlVipModel.instance.betResult.bankerCard[0];
                  cardData[2] = BjlVipModel.instance.betResult.playerCard[1];
                  cardData[3] = BjlVipModel.instance.betResult.bankerCard[1];
                  _i9 = 0;
                case 9:
                  if (!(_i9 < cardData.length)) {
                    _context2.next = 15;
                    break;
                  }
                  _context2.next = 12;
                  return this.sendCard(_i9);
                case 12:
                  _i9++;
                  _context2.next = 9;
                  break;
                case 15:
                  _i10 = 0;
                case 16:
                  if (!(_i10 < cardData.length)) {
                    _context2.next = 22;
                    break;
                  }
                  _context2.next = 19;
                  return this.flipCard(_i10);
                case 19:
                  _i10++;
                  _context2.next = 16;
                  break;
                case 22:
                  cardData = [];
                  //补牌4
                  if (!BjlVipModel.instance.betResult.playerCard[2]) {
                    _context2.next = 26;
                    break;
                  }
                  _context2.next = 26;
                  return this.sendCard(4);
                case 26:
                  if (!BjlVipModel.instance.betResult.playerCard[2]) {
                    _context2.next = 29;
                    break;
                  }
                  _context2.next = 29;
                  return this.flipCard(4);
                case 29:
                  if (!BjlVipModel.instance.betResult.bankerCard[2]) {
                    _context2.next = 32;
                    break;
                  }
                  _context2.next = 32;
                  return this.sendCard(5);
                case 32:
                  if (!BjlVipModel.instance.betResult.bankerCard[2]) {
                    _context2.next = 35;
                    break;
                  }
                  _context2.next = 35;
                  return this.flipCard(5);
                case 35:
                  this.Node_vsEffect.active = true;
                  ParticleUtils.play(this.Node_vsEffect.getChildByName("effect"));
                  BjlVipUtils.instance.playSound(eSound.VS);
                  _context2.next = 40;
                  return this.doAwait(0.5);
                case 40:
                  EventManager.instance.emit(eEvent.onShowResult);
                  this.showWinArea();

                  // await this.doAwait(0.5);

                  this.doCollectChip();
                  this.doCollectCard();
                case 44:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onGameStart() {
            return _onGameStart.apply(this, arguments);
          }
          return onGameStart;
        }();
        _proto.onGameEnd = function onGameEnd() {
          this.clearBet();
          this.clearWinEffect();
          ParticleUtils.stop(this.Node_vsEffect.getChildByName("effect"));
          this.Node_vsEffect.active = false;
        };
        _proto.doJump = function doJump(target, duration, toPos, hight) {
          if (hight === void 0) {
            hight = 0.4;
          }
          var startPos = target.worldPosition;
          var cpY = (startPos.y + toPos.y) / 2 + hight;
          return tween(target).bezierTo3W(duration, startPos, v3(startPos, cpY, (startPos.z + toPos.z) / 2.0), v3(toPos.x, cpY, (startPos.z + toPos.z) / 2.0), toPos, {
            easing: "cubicOutIn"
          });
        };
        _proto.doCollectCard = function doCollectCard() {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            for (var i = _this7.Node_cardRoot.children.length - 1; i > 0; i--) {
              var nodeCard = _this7.Node_cardRoot.children[i];
              var pos = nodeCard.position;
              // let eulerAngles = nodeCard.eulerAngles;
              var startPos = v3(0, pos.y + 0.001 * i, pos.z);
              var toPos = v3(-0.46, 0.353 + 0.001 * i, -0.308);
              var cpY = (startPos.y + toPos.y) / 2 + 0.3;
              var duration = 0.75;
              tween(nodeCard).to(0.25, {
                position: startPos,
                eulerAngles: v3(90, 0, 0)
              }, {
                easing: "quadOut"
              }).bezierTo3(duration, startPos, v3(startPos.x, cpY, (startPos.z + toPos.z) / 2.0), v3(toPos.x, cpY, (startPos.z + toPos.z) / 2.0), toPos, {
                easing: "cubicOutIn"
              }).to(0.25, {
                position: v3(-0.46, 0.212, -0.308)
              }).destroySelf().start();
              tween(nodeCard).delay(0.25).to(duration, {
                scale: v3(1, 1, 1)
              }).start();
            }
          });
        };
        _proto.doCollectChip = function doCollectChip() {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            var _loop = function _loop() {
              var prizeType = _step.value;
              var strArea = arrBetAreaMap[prizeType - 1];
              var areaKey = "Node_betArea#" + strArea;
              var betAreaList = BjlVipModel.instance.betAreaList[areaKey];
              if (betAreaList) {
                gts.Debug.Log("===doCollectChip====betAreaList==prizeType===" + (prizeType - 1));
                if (betAreaList.length > 0) {
                  var cm_result = _this8.Node_aniRoot.children[prizeType - 1];
                  cm_result.active = true;
                  var effect = cm_result.getChildByName("effect");
                  ParticleUtils.play(effect);
                }
                var icounts = 0;
                var _loop2 = function _loop2() {
                  var chipNode = _step2.value;
                  var destNode = _this8.Node_chipRoot.getChildByName(chipNode.name);
                  if (destNode) {
                    var delay = icounts * 0.05;
                    tween(chipNode).sequence(tween(chipNode).delay(delay), _this8.doJump(chipNode, 0.5, destNode.worldPosition)).call(function () {
                      BjlVipUtils.instance.playSound(eSound.Reward);
                      chipNode.destroyFromParent();
                      icounts--;
                      if (icounts == 0) {
                        //更新金币--显示得分
                        if (BjlVipModel.instance.endBalance > 0) {
                          BjlVipModel.instance.curBalance = BjlVipModel.instance.endBalance;
                          BjlVipModel.instance.endBalance = 0;
                          EventManager.instance.emit(eEvent.onUpdateGold);
                        }
                      }
                    }).start();
                    icounts++;
                  }
                };
                for (var _iterator2 = _createForOfIteratorHelperLoose(betAreaList), _step2; !(_step2 = _iterator2()).done;) {
                  _loop2();
                }
              }
            };
            for (var _iterator = _createForOfIteratorHelperLoose(BjlVipModel.instance.betResult.prizeType), _step; !(_step = _iterator()).done;) {
              _loop();
            }
          });
        };
        _proto.clearWinEffect = function clearWinEffect() {
          for (var i = 0; i < 9; i++) {
            var showNode = this.Node_betArea.children[i];
            var ani = showNode.getComponent(Animation);
            ani.stop();
            var mRender = showNode.getComponent(MeshRenderer);
            if (mRender) {
              mRender.material.setProperty("mainColor", color(255, 255, 255, 0));
            }
            var cm_result = this.Node_aniRoot.children[i];
            var effect = cm_result.getChildByName("effect");
            ParticleUtils.stop(effect);
            cm_result.active = false;
          }
        }
        // setWinEffect(node: Node) {
        //     let startScale = v3(node.scale.x, node.scale.y, 1);
        //     tween(node)
        //         .to(0.5, { scale: v3(startScale.x * 0.8, startScale.y * 0.8, startScale.z * 0.8) })
        //         .to(0.5, { scale: startScale })
        //         .union()
        //         .repeatForever()
        //         .start();
        // }
        ;

        _proto.showWinArea = function showWinArea() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(BjlVipModel.instance.betResult.prizeType), _step3; !(_step3 = _iterator3()).done;) {
            var prizeType = _step3.value;
            var showNode = this.Node_betArea.children[prizeType - 1];
            showNode.getComponent(Animation).play();
          }
        };
        return BjlVip_deskArea;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_win_quad_0", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_win_quad_other", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalBet", [_dec4], {
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

System.register("chunks:///_virtual/BjlVipBtnCheck.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './BjlVipDef.ts', './BjlVipModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Canvas, Color, Node, geometry, PhysicsSystem, MeshRenderer, color, sys, UIRenderer, Component, EventManager, eRunStatus, eEvent, BjlVipModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Canvas = module.Canvas;
      Color = module.Color;
      Node = module.Node;
      geometry = module.geometry;
      PhysicsSystem = module.PhysicsSystem;
      MeshRenderer = module.MeshRenderer;
      color = module.color;
      sys = module.sys;
      UIRenderer = module.UIRenderer;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "60a08m1yPJAJZANI4aKjdip", "BjlVipBtnCheck", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BjlVipBtnCheck = exports('BjlVipBtnCheck', (_dec = ccclass("BjlVipBtnCheck"), _dec2 = property(Camera), _dec3 = property(Canvas), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipBtnCheck, _Component);
        function BjlVipBtnCheck() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "MainCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canvas", _descriptor2, _assertThisInitialized(_this));
          _this._cur_button = null;
          _this._color1 = Color.BLACK;
          _this._color2 = new Color(5, 29, 127);
          //on
          _this._color3 = new Color(50, 50, 127);
          return _this;
        }
        var _proto = BjlVipBtnCheck.prototype;
        //press
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          // this.canvas.node.on(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.canvas.node.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          this.canvas.node.on(Node.EventType.TOUCH_END, this.onMouseUp, this);
          this.canvas.node.on(Node.EventType.TOUCH_START, this.onMouseDown, this);
        };
        _proto.onDisable = function onDisable() {
          // this.canvas.node.off(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.canvas.node.off(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          this.canvas.node.off(Node.EventType.TOUCH_END, this.onMouseUp, this);
          this.canvas.node.off(Node.EventType.TOUCH_START, this.onMouseDown, this);
        };
        _proto.onMouseMove = function onMouseMove(event) {
          var outRay = new geometry.Ray();
          this.MainCamera.screenPointToRay(event.getLocationX(), event.getLocationY(), outRay);
          if (PhysicsSystem.instance.raycastClosest(outRay)) {
            // const raycastResult = PhysicsSystem.instance.raycastResults.find((v) => {
            //     // return v.collider.getComponent(MoveCameraOnButtonClick);
            //     return v;
            // });
            var raycastResult = PhysicsSystem.instance.raycastClosestResult;
            var castCollider = raycastResult.collider;
            if (castCollider) {
              gts.Debug.Log("==onMouseMove=00000000000=castCollider=");
              if (
              // castCollider.node.name.match("X_jinshu") ||
              // castCollider.node.name == "X_lunpan2" ||
              castCollider.node == this._cur_button) {
                return;
              }
              if (this._cur_button) {
                //moveOut
                this.onMouseMoveOut(this._cur_button);
              }
              this._cur_button = castCollider.node;

              //moveIn
              this.onMouseMoveIn(this._cur_button);
            } else if (this._cur_button) {
              gts.Debug.Log("==onMouseMove=111111111111111=castCollider=");

              //moveOut
              this.onMouseMoveOut(this._cur_button);
              this._cur_button = null;
            }
          } else if (this._cur_button) {
            //moveOut
            gts.Debug.Log("==onMouseMove=2222222222=castCollider=");
            this.onMouseMoveOut(this._cur_button);
            this._cur_button = null;
          }
        };
        _proto.onMouseUp = function onMouseUp(event) {
          if (this._cur_button) {
            gts.Debug.Log("==onMouseUp==" + this._cur_button.name);

            //touchEnd
            this.onMouseClick(this._cur_button);

            // this._cur_button = null;
          }

          if (BjlVipModel.instance.gameStatus == eRunStatus.NONE) {
            EventManager.instance.emit(eEvent.onStopCameraCruise, true);
          }
        };
        _proto.onMouseDown = function onMouseDown(event) {
          var outRay = new geometry.Ray();
          this.MainCamera.screenPointToRay(event.getLocationX(), event.getLocationY(), outRay);
          if (PhysicsSystem.instance.raycastClosest(outRay)) {
            var raycastResult = PhysicsSystem.instance.raycastClosestResult;
            // const raycastResult = PhysicsSystem.instance.raycastResults.find((v) => {
            //     return v;
            // });

            var castCollider = raycastResult.collider;
            if (castCollider) {
              //|| castCollider.node == this._cur_button
              if (castCollider.node.name.match("X_jinshu") || castCollider.node.name == "X_lunpan" || castCollider.node.name == "X_lunpan2") return;
              this._cur_button = castCollider.node;

              // gts.Debug.Log(`==onMouseDown==${this._cur_button.name}`);

              if (this._cur_button.parent.name.match("Node_touchArea")) ;else if (this._cur_button.name.match("Quad_")) {
                var mRender = this._cur_button.getComponent(MeshRenderer);
                if (mRender) {
                  mRender.material.setProperty("mainColor", color(255, 255, 255, 255));
                }
              } else {
                this.setButtonColor(this._cur_button, this._color3);
              }
              EventManager.instance.emit(eEvent.onMouseDown, this._cur_button);
            }
          }
        };
        _proto.onMouseMoveIn = function onMouseMoveIn(node) {
          gts.Debug.Log("=" + sys.now() + "=onMouseMoveIn==" + node.name);
          // node.position = v3(node.position.x, 0.0001, node.position.z);

          if (node.name.match("X_zhuozi")) {
            if (BjlVipModel.instance.selectRoomIndex != -1) {
              return;
            }
            var Node_light = node.parent.getChildByName("Node_light");
            Node_light.active = true;
          } else if (node.name.match("Quad_")) {
            if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
              return;
            }
            var mRender = node.getComponent(MeshRenderer);
            if (mRender) {
              mRender.material.setProperty("mainColor", color(255, 255, 255, 255));
            }
          } else {
            this.setButtonColor(node, this._color3);
          }
          EventManager.instance.emit(eEvent.onMouseMoveIn, node);
        };
        _proto.onMouseMoveOut = function onMouseMoveOut(node) {
          gts.Debug.Log(sys.now() + "==onMouseMoveOut==" + node.name);
          // node.position = v3(node.position.x, 0, node.position.z);

          if (node.name.match("X_zhuozi")) {
            if (BjlVipModel.instance.selectRoomIndex != -1) {
              return;
            }
            var Node_light = node.parent.getChildByName("Node_light");
            Node_light.active = false;
          } else if (node.name.match("Quad_")) {
            if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
              return;
            }
            var mRender = node.getComponent(MeshRenderer);
            if (mRender) {
              mRender.material.setProperty("mainColor", color(255, 255, 255, 0));
            }
          } else {
            this.setButtonColor(node, this._color1);
          }
          EventManager.instance.emit(eEvent.onMouseMoveOut, node);
        };
        _proto.onMouseClick = function onMouseClick(node) {
          if (node.name.match("X_zhuozi")) {
            if (BjlVipModel.instance.selectRoomIndex != -1) {
              return;
            }
            var Node_light = node.parent.getChildByName("Node_light");
            Node_light.active = false;
            var selectRoomIndex = parseInt(node.parent.name.replace("Node_desk_", ""));
            EventManager.instance.emit(eEvent.onSelectRoom, selectRoomIndex);
            return;
          } else if (node.name.match("Quad_")) {
            var mRender = node.getComponent(MeshRenderer);
            if (mRender) {
              mRender.material.setProperty("mainColor", color(255, 255, 255, 0));
            }
          } else {
            this.setButtonColor(node, this._color1);
          }
          EventManager.instance.emit(eEvent.onMouseClick, node);
          gts.Debug.Log("==onMouseClick==" + node.name);
        };
        _proto.setButtonColor = function setButtonColor(node, color) {
          var renderCom = node.getComponent(UIRenderer);
          var mRender = node.getComponent(MeshRenderer);
          if (mRender) {
            mRender.material.setProperty("emissive", color);
            // gts.Debug.Log(`setButtonColor---${node.name}---`);
          } else if (renderCom) {
            renderCom.color = color;
          }
        };
        return BjlVipBtnCheck;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec3], {
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

System.register("chunks:///_virtual/BjlVipCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Vec3, Quat, KeyCode, input, Input, game, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Quat = module.Quat;
      KeyCode = module.KeyCode;
      input = module.input;
      Input = module.Input;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "ba30eJ9QDFNjZLblIcC9Hlb", "BjlVipCamera", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var v2_1 = new Vec2();
      var v2_2 = new Vec2();
      var v3_1 = new Vec3();
      var qt_1 = new Quat();
      var KEYCODE = {
        W: "W".charCodeAt(0),
        S: "S".charCodeAt(0),
        A: "A".charCodeAt(0),
        D: "D".charCodeAt(0),
        Q: "Q".charCodeAt(0),
        E: "E".charCodeAt(0),
        SHIFT: KeyCode.SHIFT_LEFT
      };
      var BjlVipCamera = exports('BjlVipCamera', (_dec = ccclass("BjlVipCamera"), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipCamera, _Component);
        function BjlVipCamera() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSpeedShiftScale", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "damp", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotateSpeed", _descriptor4, _assertThisInitialized(_this));
          _this._euler = new Vec3();
          _this._velocity = new Vec3();
          _this._position = new Vec3();
          _this._speedScale = 1;
          return _this;
        }
        var _proto = BjlVipCamera.prototype;
        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          Vec3.copy(this._euler, this.node.eulerAngles);
          Vec3.copy(this._position, this.node.position);
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        };
        _proto.update = function update(dt) {
          var t = Math.min(dt / this.damp, 1);

          // position
          Vec3.transformQuat(v3_1, this._velocity, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this._position, v3_1, this.moveSpeed * this._speedScale);
          Vec3.lerp(v3_1, this.node.position, this._position, t);
          this.node.setPosition(v3_1);
          // rotation
          Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, t);
          this.node.setRotation(qt_1);
        };
        _proto.onMouseWheel = function onMouseWheel(e) {
          var delta = -e.getScrollY() * this.moveSpeed * 0.1; // delta is positive when scroll down
          Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
        };
        _proto.onKeyDown = function onKeyDown(e) {
          var v = this._velocity;
          if (e.keyCode === KEYCODE.SHIFT) {
            this._speedScale = this.moveSpeedShiftScale;
          } else if (e.keyCode === KEYCODE.W) {
            if (v.z === 0) {
              v.z = -1;
            }
          } else if (e.keyCode === KEYCODE.S) {
            if (v.z === 0) {
              v.z = 1;
            }
          } else if (e.keyCode === KEYCODE.A) {
            if (v.x === 0) {
              v.x = -1;
            }
          } else if (e.keyCode === KEYCODE.D) {
            if (v.x === 0) {
              v.x = 1;
            }
          } else if (e.keyCode === KEYCODE.Q) {
            if (v.y === 0) {
              v.y = -1;
            }
          } else if (e.keyCode === KEYCODE.E) {
            if (v.y === 0) {
              v.y = 1;
            }
          }
        };
        _proto.onKeyUp = function onKeyUp(e) {
          var v = this._velocity;
          if (e.keyCode === KEYCODE.SHIFT) {
            this._speedScale = 1;
          } else if (e.keyCode === KEYCODE.W) {
            if (v.z < 0) {
              v.z = 0;
            }
          } else if (e.keyCode === KEYCODE.S) {
            if (v.z > 0) {
              v.z = 0;
            }
          } else if (e.keyCode === KEYCODE.A) {
            if (v.x < 0) {
              v.x = 0;
            }
          } else if (e.keyCode === KEYCODE.D) {
            if (v.x > 0) {
              v.x = 0;
            }
          } else if (e.keyCode === KEYCODE.Q) {
            if (v.y < 0) {
              v.y = 0;
            }
          } else if (e.keyCode === KEYCODE.E) {
            if (v.y > 0) {
              v.y = 0;
            }
          }
        };
        _proto.onTouchStart = function onTouchStart(e) {
          if (game.canvas.requestPointerLock) {
            game.canvas.requestPointerLock();
          }
        };
        _proto.onTouchMove = function onTouchMove(e) {
          e.getStartLocation(v2_1);
          if (v2_1.x > game.canvas.width * 0.4) {
            // rotation
            e.getDelta(v2_2);
            this._euler.y -= v2_2.x * this.rotateSpeed * 0.1;
            this._euler.x += v2_2.y * this.rotateSpeed * 0.1;
          } else {
            // position
            e.getLocation(v2_2);
            Vec2.subtract(v2_2, v2_2, v2_1);
            this._velocity.x = v2_2.x * 0.01;
            this._velocity.z = -v2_2.y * 0.01;
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (document.exitPointerLock) {
            document.exitPointerLock();
          }
          e.getStartLocation(v2_1);
          if (v2_1.x < game.canvas.width * 0.4) {
            // position
            this._velocity.x = 0;
            this._velocity.z = 0;
          }
        };
        return BjlVipCamera;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeedShiftScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './BjlVipModel.ts', './I18n.ts', './ViewManager.ts', './BjlVipDef.ts', './BjlVipUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, BjlVipModel, i18n, ViewManager, eProto, eRunStatus, BjlVipUtils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
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
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      BjlVipUtils = module.BjlVipUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "67d399yoZpNfI/tZazxGuux", "BjlVipCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BjlVipCtrl = exports('BjlVipCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(BjlVipCtrl, _GameDef$BaseCtrl);
        function BjlVipCtrl() {
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
          _this._model = BjlVipModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = BjlVipCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete BjlVipCtrl._instance;
          BjlVipCtrl._instance = null;
          BjlVipModel.destroy();
          BjlVipUtils.destroy();
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
        _proto.reqHistory = function reqHistory() {
          NetManager.instance.sendOnlineData(eProto.HD_History, {});
        };
        _proto.reqRoomList = function reqRoomList() {
          NetManager.instance.sendOnlineData(eProto.HD_GetTableList, {});
        };
        _proto.reqBet = function reqBet(betArr) {
          if (betArr === void 0) {
            betArr = null;
          }
          this.isReqBet = true;
          gts.Debug.LogWarr("==reqBet==" + JSON.stringify(betArr));
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            table: "" + BjlVipModel.instance.selectRoomIndex,
            bet: betArr
          });
          return true;
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "bjl3d"
          });
        }

        // /**请求历史记录 */
        // reqHistory(offset = 0, pageSize = 13) {
        //     NetManager.instance.sendOnlineData(BjlVipDef.eProto.HD_History, {
        //         Offset: offset,
        //         PageSize: pageSize,
        //         RecordType: "bjl3d",
        //     });
        // }

        /**请求记录 */;
        _proto.reqRecord = function reqRecord(offset, pageSize) {
          if (offset === void 0) {
            offset = 0;
          }
          if (pageSize === void 0) {
            pageSize = 13;
          }
          NetManager.instance.sendOnlineData(eProto.Record, {
            Offset: offset,
            PageSize: pageSize,
            RecordType: "bjl3d"
          });
        }

        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code));
            }
            switch (data.cmd) {
              case eProto.HD_Bet:
                {
                  this.isReqBet = false;
                  break;
                }
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_GetTableList:
              {
                var gameInfo = data.Data;
                BjlVipModel.instance.tableList = [];
                for (var _iterator = _createForOfIteratorHelperLoose(gameInfo.tableInfo), _step; !(_step = _iterator()).done;) {
                  var deskInfo = _step.value;
                  var newInfo = {
                    cardNum: 0,
                    MaxIssueBet: [],
                    history: [],
                    table: "0"
                  };
                  newInfo.cardNum = deskInfo.cardNum;
                  newInfo.history = deskInfo.history.reverse();
                  newInfo.table = deskInfo.table;
                  var arrInde = [0, 1, 2, 3, 4, 20, 6, 12, 19];
                  for (var _i5 = 0, _arrInde = arrInde; _i5 < _arrInde.length; _i5++) {
                    var index = _arrInde[_i5];
                    newInfo.MaxIssueBet.push(gameInfo.gamePlay[index].MaxIssueBet);
                  }
                  BjlVipModel.instance.tableList.push(newInfo);
                }
                BjlVipModel.instance.winRate = [];
                //1-闲 2-庄 3-和 4-闲对子 5-庄对子
                for (var i = 0; i < 5; i++) {
                  BjlVipModel.instance.winRate[i] = gameInfo.gamePlay[i].Odds - 100;
                }

                //闲奖励
                var minRate = 0;
                var maxRate = 0;
                for (var _i3 = 5; _i3 < 12; _i3++) {
                  var odds = gameInfo.gamePlay[_i3].Odds - 100;
                  if (minRate == 0 || odds < minRate) {
                    minRate = odds;
                  }
                  if (maxRate == 0 || maxRate < odds) {
                    maxRate = odds;
                  }
                }
                BjlVipModel.instance.winRate[6] = [minRate, maxRate];

                //庄奖励
                minRate = 0;
                maxRate = 0;
                for (var _i4 = 12; _i4 < 19; _i4++) {
                  var _odds = gameInfo.gamePlay[_i4].Odds - 100;
                  if (minRate == 0 || _odds < minRate) {
                    minRate = _odds;
                  }
                  if (maxRate == 0 || maxRate < _odds) {
                    maxRate = _odds;
                  }
                }
                BjlVipModel.instance.winRate[7] = [minRate, maxRate];

                //完美对子
                BjlVipModel.instance.winRate[5] = [gameInfo.gamePlay[19].Odds - 100, gameInfo.gamePlay[20].Odds - 100];
                //任一对子
                BjlVipModel.instance.winRate[8] = gameInfo.gamePlay[21].Odds - 100;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                if (BjlVipModel.instance.gameStatus = eRunStatus.NONE) {
                  return;
                }
                BjlVipModel.instance.gameStatus = eRunStatus.START;
                BjlVipModel.instance.betResult = data.Data;
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
                gts.Debug.LogWarr("==BjlVip=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (BjlVipModel.instance.selectRoomIndex != -1 && BjlVipModel.instance.curBalance > -1) {
                  BjlVipModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                BjlVipModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==BjlVip=pushWallet==" + _HD_Wallet.VndBalance);
                if (BjlVipModel.instance.selectRoomIndex != -1 && BjlVipModel.instance.curBalance > -1) {
                  BjlVipModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                BjlVipModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        return BjlVipCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipDef.ts", ['cc'], function (exports) {
  var cclegacy, v3, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "495e3pwmC9BX70Af+0+fa0a", "BjlVipDef", undefined);
      var cBundle = exports('cBundle', "BjlVipGame");
      //1-闲 2-庄 3-和 4-闲对子 5-庄对子 6-完美对子 7-闲奖励 8-庄奖励 9-任一对子
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "bjl3d/HD_info";
        eProto["HD_Bet"] = "bjl3d/HD_Bet";
        eProto["HD_History"] = "bjl3d/HD_History";
        eProto["HD_Leave"] = "bjl3d/HD_Leave";
        eProto["HD_betRecord"] = "bjl3d/HD_betRecord";
        eProto["HD_GetTableList"] = "bjl3d/HD_GetTableList";
        eProto["Record"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({}));
      var eZindex = exports('eZindex', {
        NONE: 0,
        MASK: 1000,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        cSymbolW: 192,
        cSymbolH: 180
      });
      var chipListDef = exports('chipListDef', {
        X_100: 100,
        X_1K: 1000,
        X_10K: 10000,
        X_50K: 50000,
        X_100K: 100000,
        X_500K: 500000,
        X_1M: 1000000,
        X_5M: 5000000
      });
      var arrTexture = exports('arrTexture', {
        X_100: "T_chouma_100_Base",
        X_1K: "T_chouma_1K_Base",
        X_10K: "T_chouma_10K_Base",
        X_50K: "T_chouma_50K_Base",
        X_100K: "T_chouma_100K_Base",
        X_500K: "T_chouma_500K_Base",
        X_1M: "T_chouma_1M_Base",
        X_5M: "T_chouma_5M_Base"
      });
      var arrBetList = exports('arrBetList', [10000, 50000, 100000, 500000, 1000000, 5000000, 10000000]);
      var betAreaMap = exports('betAreaMap', {
        Quad_play: 1,
        Quad_bank: 2,
        Quad_draw: 3,
        Quad_playPair: 4,
        Quad_bankPair: 5,
        Quad_perfectPair: 6,
        Quad_playReward: 7,
        Quad_bankReward: 8,
        Quad_anyPair: 9
      });
      var arrBetAreaMap = exports('arrBetAreaMap', ["Quad_play", "Quad_bank", "Quad_draw", "Quad_playPair", "Quad_bankPair", "Quad_perfectPair", "Quad_playReward", "Quad_bankReward", "Quad_anyPair"]);
      var cardTillingOffset = exports('cardTillingOffset', [{
        x: 0.0,
        y: 0.0
      },
      //A
      {
        x: 0.19,
        y: 0.0
      },
      //2
      {
        x: 0.385,
        y: 0.0
      },
      //3
      {
        x: 0.59,
        y: 0.0
      },
      //4

      {
        x: 0.0,
        y: 0.27
      },
      //5
      {
        x: 0.19,
        y: 0.27
      },
      //6
      {
        x: 0.385,
        y: 0.27
      },
      //7
      {
        x: 0.59,
        y: 0.27
      },
      //8
      {
        x: 0.79,
        y: 0.27
      },
      //9

      {
        x: 0.0,
        y: 0.555
      },
      //10
      {
        x: 0.19,
        y: 0.555
      },
      //J
      {
        x: 0.385,
        y: 0.555
      },
      //Q
      {
        x: 0.59,
        y: 0.555
      },
      //K

      {
        x: 0.79,
        y: 0.0
      } //back0.555
      ]);

      var arrCameraInfo = exports('arrCameraInfo', [
      //default
      {
        pos: v3(-7.62, 2.33, 2),
        eulerAngles: v3(-20, -55, 0)
      },
      //desk_0
      {
        pos: v3(-5.07, 1.05, -1.08),
        eulerAngles: v3(-44, 80, 0)
      },
      //desk_1
      {
        pos: v3(-3.81, 1.05, -3.71),
        eulerAngles: v3(-44, 50, 0)
      },
      //desk_2
      {
        pos: v3(-1.44, 1.05, -5.38),
        eulerAngles: v3(-44, 20, 0)
      },
      //desk_3
      {
        pos: v3(1.6, 1.05, -5.38),
        eulerAngles: v3(-44, -13, 0)
      },
      //desk_4
      {
        pos: v3(3.92, 1.05, -3.9),
        eulerAngles: v3(-44, -45, 0)
      },
      //desk_5
      {
        pos: v3(5.37, 1.05, -1.36),
        eulerAngles: v3(-44, -75, 0)
      }]);
      var arrCameraInfo_bet = exports('arrCameraInfo_bet', [
      //default
      {
        pos: v3(-7.62, 2.33, 2),
        eulerAngles: v3(-20, -55, 0)
      },
      //desk_0
      {
        pos: v3(-5.318, 1.377, -1.123),
        eulerAngles: v3(-60, 80, 0)
      },
      //desk_1
      {
        pos: v3(-4.005523, 1.377, -3.875254),
        eulerAngles: v3(-60, 50, 0)
      },
      //desk_2
      {
        pos: v3(-1.523746, 1.377, -5.611523),
        //pos: v3(-1.44, 1.05, -5.38),
        eulerAngles: v3(-60, 20, 0)
      },
      //desk_3
      {
        pos: v3(1.654738, 1.377, -5.625087),
        //pos: v3(1.6, 1.05, -5.38),
        eulerAngles: v3(-60, -13, 0)
      },
      //desk_4
      {
        pos: v3(4.099109, 1.377, -4.080328),
        //v3(3.92, 1.05, -3.9),
        eulerAngles: v3(-60, -45, 0)
      },
      //desk_5
      {
        pos: v3(5.609721, 1.377, -1.42413),
        //pos: v3(5.37, 1.05, -1.36),
        eulerAngles: v3(-60, -75, 0)
      }]);
      var arrDeskInfo = exports('arrDeskInfo', [{
        pos: v3(-5.88, 0.23, -1.58),
        eulerAngles: v3(-90, 0, 0)
      }, {
        pos: v3(-4.3, 0.23, -4.3),
        eulerAngles: v3(-90, -30, 0)
      }, {
        pos: v3(-1.58, 0.23, -5.88),
        eulerAngles: v3(-90, -60, 0)
      }, {
        pos: v3(1.58, 0.23, -5.88),
        eulerAngles: v3(-90, -90, 0)
      }, {
        pos: v3(4.3, 0.23, -4.3),
        eulerAngles: v3(-90, -120, 0)
      }, {
        pos: v3(5.88, 0.23, -1.58),
        eulerAngles: v3(-90, -150, 0)
      }]);
      var arrChipInfo = exports('arrChipInfo', [{
        pos: v3(0.35, -0.26, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }, {
        pos: v3(0.35, -0.2, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }, {
        pos: v3(0.35, -0.151958, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }, {
        pos: v3(0.394225, -0.098057, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }, {
        pos: v3(0.40812, -0.044157, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }, {
        pos: v3(0.35, 0.23, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }]);

      var arrSendCardInfo = exports('arrSendCardInfo', [
      // pos: v3(0.688, 0.25, -0.253),
      // pos: v3(0.696, 0.25, -0.255),
      {
        //pos_0
        pos: v3(0.6, 0.237, -0.23),
        eulerAngles: v3(-90, 15, 75),
        scale: v3(0.85, 0.85, 0.85)
      }, {
        //pos_1
        pos: v3(0.542, 0.212, -0.214),
        eulerAngles: v3(-90, 15, 0),
        scale: v3(0.85, 0.85, 0.85)
      }, {
        //player_0
        pos: v3(-0.325, 0.212, -0.095),
        eulerAngles: v3(-90, 0, 0),
        scale: v3(1.5, 1.5, 1.5)
      }, {
        //banker_0
        pos: v3(0.34, 0.212, -0.095),
        eulerAngles: v3(-90, 0, 0),
        scale: v3(1.5, 1.5, 1.5)
      }, {
        //player_1
        pos: v3(-0.218, 0.212, -0.095),
        eulerAngles: v3(-90, 0, 0),
        scale: v3(1.5, 1.5, 1.5)
      }, {
        //banker_1
        pos: v3(0.233, 0.212, -0.095),
        eulerAngles: v3(-90, 0, 0),
        scale: v3(1.5, 1.5, 1.5)
      }, {
        //player_2
        pos: v3(-0.453, 0.212, -0.075),
        eulerAngles: v3(-90, 90, 0),
        scale: v3(1.5, 1.5, 1.5)
      }, {
        //banker_2
        pos: v3(0.468, 0.212, -0.075),
        eulerAngles: v3(-90, -90, 0),
        scale: v3(1.5, 1.5, 1.5)
      }]);
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        START: 1,
        SEACH: 2,
        SEACHEND: 3,
        END: 4
      });
      var eRunType = exports('eRunType', {
        NONE: 0,
        SPECIAL: 1
      });
      var cRate = exports('cRate', {
        "2": {
          3: 50,
          4: 100,
          5: 150,
          6: 200
        }
      });
      var eAutoRateType = exports('eAutoRateType', Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      }));
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onUpdateRecordList"] = "onUpdateRecordList";
        eEvent["onGameStart"] = "onGameStart";
        eEvent["onFlipCard"] = "onFlipCard";
        eEvent["onShowResult"] = "onShowResult";
        eEvent["onGameEnd"] = "onGameEnd";
        eEvent["onUpdateGold"] = "onUpdateGold";
        eEvent["onBetClick"] = "onBetClick";
        eEvent["onTestClick"] = "onTestClick";
        eEvent["onWaitCameraCruise"] = "onWaitCameraCruise";
        eEvent["onStopCameraCruise"] = "onStopCameraCruise";
        eEvent["onMouseMoveIn"] = "onMouseMoveIn";
        eEvent["onMouseMoveOut"] = "onMouseMoveOut";
        eEvent["onMouseDown"] = "onMouseDown";
        eEvent["onMouseClick"] = "onMouseClick";
        eEvent["onSelectRoom"] = "onSelectRoom";
        eEvent["onExitRoom"] = "onExitRoom";
        eEvent["onReturnBet"] = "onReturnBet";
        eEvent["onBtnClick"] = "onBtnClick";
        eEvent["onBtnStatusUpdate"] = "onBtnStatusUpdate";
        eEvent["RESULT"] = "onRESULT";
        eEvent["HISTORY"] = "onHISTORY";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bgm: "sound/BGM",
        Begin: "sound/Begin",
        Bet: "sound/Bet",
        Cancel: "sound/Cancel",
        Coins: "sound/Coins",
        Double: "sound/Double",
        Reward: "sound/Reward",
        Win: "sound/Win",
        betTip: "sound/betTip",
        VS: "sound/VS",
        CoinsBoom: "sound/CoinsBoom",
        Result: "sound/Result",
        Card: "sound/Card"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipGame", ['./label3D.ts', './BjlVipCtrl.ts', './BjlVipDef.ts', './BjlVipModel.ts', './BjlVipScene.ts', './BjlVipUtils.ts', './BjlVipBtnCheck.ts', './BjlVipCamera.ts', './BjlVipGameView.ts', './BjlVipHallView.ts', './BjlVipViewCtrl.ts', './BjlVip_deskArea.ts', './BjlVipHallPath.ts', './BjlVipRoadItem.ts', './BjlVipSwitch.ts', './BjlVipSwitchItem.ts', './BjlVipUIPlane.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BjlVipGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BjlVipDef.ts', './BjlVipModel.ts', './BjlVipCtrl.ts', './BjlVipUtils.ts', './GameDef.ts', './GUtil.ts', './NetManager.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts', './ViewManager.ts', './DataManager.ts', './I18n.ts', './GameRecordLayer.ts', './BjlVipHallPath.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v3, Node, Label, Button, SpriteFrame, director, Camera, Tween, instantiate, tween, UIOpacity, find, Sprite, ParticleUtils, Vec3, eEvent, eSound, chipListDef, eRunStatus, arrCameraInfo_bet, eProto, arrCameraInfo, betAreaMap, BjlVipModel, BjlVipCtrl, BjlVipUtils, GameDef, GUtil, NetManager, ConfigManager, EventManager, Common, ViewManager, DataManager, UserKey, i18n, GameRecordLayer, BjlVipHallPath;
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
      v3 = module.v3;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      director = module.director;
      Camera = module.Camera;
      Tween = module.Tween;
      instantiate = module.instantiate;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      find = module.find;
      Sprite = module.Sprite;
      ParticleUtils = module.ParticleUtils;
      Vec3 = module.Vec3;
    }, function (module) {
      eEvent = module.eEvent;
      eSound = module.eSound;
      chipListDef = module.chipListDef;
      eRunStatus = module.eRunStatus;
      arrCameraInfo_bet = module.arrCameraInfo_bet;
      eProto = module.eProto;
      arrCameraInfo = module.arrCameraInfo;
      betAreaMap = module.betAreaMap;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      BjlVipCtrl = module.BjlVipCtrl;
    }, function (module) {
      BjlVipUtils = module.BjlVipUtils;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameRecordLayer = module.default;
    }, function (module) {
      BjlVipHallPath = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
      cclegacy._RF.push({}, "73b7fbEhWNHS759bUQo0H1s", "BjlVipGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      //
      var cameraInfo = {
        enter_0: {
          position: v3(1, 3.452, 3.301),
          rotation: v3(-30, 15, 0)
        },
        enter_1: {
          position: v3(0, 2, 1.459),
          rotation: v3(-30, 0, 0)
        },
        bet: {
          position: v3(0.256, 2.252, -0.208),
          rotation: v3(-80, 0, 0)
        },
        run: {
          position: v3(-0.351, 2.431, 0.941),
          rotation: v3(-48.4, -7)
        },
        runStart: {
          position: v3(-0.898, 1.431, 0.61),
          rotation: v3(-30, 0)
        }
      };
      var cameraCruise = [{
        position: v3(-4.7, 1.75, 1.7),
        rotation: v3(-20, 20, 0)
      }, {
        position: v3(0, 1.75, -2),
        rotation: v3(-20, 0, 0)
      }, {
        position: v3(4.7, 1.75, 1.7),
        rotation: v3(0, -20, 0)
      }];
      var BjlVipGameView = exports('default', (_dec = ccclass("BjlVipGameView"), _dec2 = menu("game/BjlVipGame/BjlVipGameView"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(BjlVipHallPath), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(SpriteFrame), _dec17 = property(Node), _dec18 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(BjlVipGameView, _GameDef$BaseView);
        function BjlVipGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _this.mainCamera = null;
          _initializerDefineProperty(_this, "selfHead", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addScore", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_betTip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "comBjlVipHallPath", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btns", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_resultPoint", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_revocation", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_start", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_betAgain", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_double", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrResultSpr", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betInfo", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betRate", _descriptor16, _assertThisInitialized(_this));
          _this.playerPoint = 0;
          _this.bankerPoint = 0;
          ////////////////////////////////////////////////////////////////////////////////
          // // 圆心
          // circleCenter: Vec2 = v2(0, 0.4);
          // // 半径
          // circleRadius: number = 250;
          // // 速度
          // speed: number = 10;
          // // 弧度
          // radian: number = 0;
          // circleMove(dt) {
          //     let circleRadius = this.circleRadius * Math.sin(this.radian);
          //     // 先计算弧度
          //     if (circleRadius < 2.5) {
          //         this.speed = -this.speed;
          //     }
          //     this.radian += dt * (this.speed / 100);
          //     let x = circleRadius * Math.cos(this.radian) + this.circleCenter.x;
          //     let z = circleRadius * Math.sin(this.radian) + this.circleCenter.y;
          //     this.mainCamera.node.position = v3(x, this.mainCamera.node.position.y, z);
          //     this.mainCamera.node.lookAt(v3(0, 0.9, 0.4), v3(0, 1, 0));
          // }
          _this.isCameraCruise = false;
          return _this;
        }
        var _proto = BjlVipGameView.prototype;
        // createBetList = [];
        // _chipPool: NodePool;
        // _chip: chip;
        // _selectChip: Node = null;
        //#endregion chipList
        ////////////////////////////////////////////////////////////////////////
        //#region baseInterface
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, BjlVipCtrl.instance);
          this.mainCamera = director.getScene().getChildByName("Main Camera").getComponent(Camera);
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.onUpdateGold, this.updateGold, this);
          EventManager.instance.on(eEvent.onFlipCard, this.onFlipCard, this);
          EventManager.instance.on(eEvent.onShowResult, this.onShowResult, this);
          EventManager.instance.on(eEvent.onBtnStatusUpdate, this.onBtnStatusUpdate, this);
          EventManager.instance.on(eEvent.onWaitCameraCruise, this.onWaitCameraCruise, this);
          EventManager.instance.on(eEvent.onStopCameraCruise, this.onStopCameraCruise, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onUpdateGold, this.updateGold, this);
          EventManager.instance.off(eEvent.onFlipCard, this.onFlipCard, this);
          EventManager.instance.off(eEvent.onShowResult, this.onShowResult, this);
          EventManager.instance.off(eEvent.onBtnStatusUpdate, this.onBtnStatusUpdate, this);
          EventManager.instance.off(eEvent.onWaitCameraCruise, this.onWaitCameraCruise, this);
          EventManager.instance.off(eEvent.onStopCameraCruise, this.onStopCameraCruise, this);
          BjlVipModel.instance.clearGameData();
          Tween.stopAllByTarget(this.mainCamera.node);
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
        }
        //#endregion baseInterface
        ////////////////////////////////////////////////////////////////////////////////
        ;

        _proto.start = function start() {
          this.initUIView();
        };
        _proto.disconnect = function disconnect() {
          Common.showNetTips();
        };
        _proto.gameHide = function gameHide() {
          NetManager.instance.removeWaitServicePush();
        };
        _proto.gameShow = function gameShow() {
          NetManager.instance.waitServiceSendData();
          this.scheduleOnce(function () {
            Common.showLog("前台");

            // if (NetManager.instance._connect == true) {
            //     if (BjlVipModel.instance.isAuto && BjlVipCtrl.instance.isReqBet) {
            //         BjlVipCtrl.instance.reqBet();
            //     }
            // }
          }, 0.1);
        }

        //////////////////////////////////////////////////////
        ;

        _proto.initSelfInfo = function initSelfInfo() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.selfHead);
          Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.initUIView = function initUIView() {
          this.initSelfInfo();

          // NetManager.instance.sendOnlineData(BjlVipDef.eProto.HD_info, {});
          // NetManager.instance.sendOnlineData(BjlVipDef.eProto.HD_History, {
          //     size: 100,
          // });

          this.comBjlVipHallPath.updatePath();
          this.doCameraCruise();
          this.showStartBetTip();
          for (var i = 0; i < this.Node_betRate.children.length; i++) {
            var Label_rate = this.Node_betRate.children[i];
            switch (i) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 8:
                {
                  var winRate = BjlVipUtils.instance.numberFormat(BjlVipModel.instance.winRate[i] / 100, 2);
                  Label_rate.getComponent(Label).string = winRate + ":1";
                  break;
                }
              case 5:
              case 6:
              case 7:
                {
                  var arrRate = BjlVipModel.instance.winRate[i];
                  var minRate = BjlVipUtils.instance.numberFormat(arrRate[0] / 100, 2);
                  var maxRate = BjlVipUtils.instance.numberFormat(arrRate[1] / 100, 2);
                  Label_rate.getComponent(Label).string = minRate + "-" + maxRate + ":1";
                  break;
                }
            }
          }
        };
        _proto.onWaitCameraCruise = function onWaitCameraCruise() {
          this.doCameraCruise(true);
        };
        _proto.onStopCameraCruise = function onStopCameraCruise(reWait) {
          if (this.isCameraCruise) {
            this.doCameraCruise(false, reWait);
          }
        }

        //#endregion chip list;
        //////////////////////////////////////////////////
        //按钮事件回调
        ;

        _proto.onClickExit = function onClickExit() {
          BjlVipCtrl.instance.reqExit();
          EventManager.instance.emit(eEvent.onExitRoom);
        };
        _proto.onClickRand = function onClickRand() {
          GUtil.openRank("bjl3d");
        };
        _proto.onClickRecord = function onClickRecord() {
          Common.loadPopBuddle("prefab/Node_record", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
            viewNode.getComponent(GameRecordLayer).setGameType("bjl3d", 6);
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          // GUtil.openSetting();
          Common.loadPopBuddle("prefab/Node_setting", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/Node_help", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        }
        //////////////////////////////////////////////////////////
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this2 = this;
          switch (event.target.name) {
            case "btn_betAgain":
            case "btn_revocation":
            case "btn_double":
              {
                event.target.getComponent(Button).interactable = false;
                BjlVipModel.instance.getOrderList();

                //撤销//上次下注//双倍
                EventManager.instance.emit(eEvent.onBtnClick, event.target.name);
                break;
              }
            case "head":
              {
                BjlVipModel.instance.isAuto = !BjlVipModel.instance.isAuto;
                break;
              }
            case "btn_start":
              {
                this.btn_start.interactable = false;
                //start run
                tween(event.target).delay(1).call(function () {
                  _this2.btn_start.interactable = true;
                }).start();
                BjlVipModel.instance.getOrderList();
                if (BjlVipCtrl.instance.reqBet(this.getBetInfo())) {
                  BjlVipUtils.instance.playSound(eSound.Begin);
                }
                break;
              }
          }
        };
        _proto.getBetInfo = function getBetInfo() {
          /////////
          BjlVipModel.instance.betChipInfo = {};
          /////
          BjlVipModel.instance.betInfo = {};
          var areaKeys = Object.keys(BjlVipModel.instance.betAreaList);
          for (var _i = 0, _areaKeys = areaKeys; _i < _areaKeys.length; _i++) {
            var areaKey = _areaKeys[_i];
            var totalAmount = 0;
            var betAreaList = BjlVipModel.instance.betAreaList[areaKey];
            for (var _iterator = _createForOfIteratorHelperLoose(betAreaList), _step; !(_step = _iterator()).done;) {
              var chipNode = _step.value;
              totalAmount += chipListDef[chipNode.name];
            }
            if (totalAmount == 0) {
              continue;
            }
            var arrAreaInfo = areaKey.split("#");
            var nodeArea = arrAreaInfo[1];
            var betAreaIndex = betAreaMap[nodeArea];
            BjlVipModel.instance.betInfo["" + betAreaIndex] = "" + totalAmount;
            this.addBetChipInfo(betAreaIndex, betAreaList);
          }
          return BjlVipModel.instance.betInfo;
        };
        _proto.addBetChipInfo = function addBetChipInfo(num, arrNode) {
          BjlVipModel.instance.betChipInfo["" + num] = BjlVipModel.instance.betChipInfo["" + num] || [];
          BjlVipModel.instance.betChipInfo["" + num] = BjlVipModel.instance.betChipInfo["" + num].concat(arrNode);
        }

        /**
         *
         * @param event
         * @param betPos da:0 xiao:1 dan:2 shuang:3 点数：4-9
         */;
        _proto.onBetClick = function onBetClick() {
          //

          this.updateGold();
        };
        _proto.doAwait = function doAwait(delay) {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            _this3.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.showStartBetTip = function showStartBetTip(delay) {
          if (delay === void 0) {
            delay = 2;
          }
          BjlVipUtils.instance.playSound(eSound.betTip);
          tween(this.Sprite_betTip.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).delay(delay).to(0.2, {
            opacity: 0
          }).start();
        };
        _proto.doShowResult = function doShowResult() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var betResult = BjlVipModel.instance.betResult;
            gts.Debug.Log("==doShowResult==" + JSON.stringify(betResult));
            BjlVipModel.instance.gameStatus = eRunStatus.END;

            //showResult
            _this4.Node_result.active = true;
            var result = betResult.playerPoints > betResult.bankerPoints ? 1 : betResult.playerPoints < betResult.bankerPoints ? 2 : 3;

            //加入记录
            BjlVipModel.instance.tableList[BjlVipModel.instance.selectRoomIndex].history.push("" + result);
            _this4.comBjlVipHallPath.updatePath();
            BjlVipUtils.instance.playSound(eSound.Result);
            var MainForm = find("ing_heidi/MainForm", _this4.Node_result).getComponent(Sprite);
            MainForm.spriteFrame = _this4.arrResultSpr[result - 1];
            var Label_result = find("ing_heidi/MainForm/Label_result", _this4.Node_result).getComponent(Label);
            Label_result.string = result == 1 ? i18n.lang.gameResult.Player : result == 2 ? i18n.lang.gameResult.Banker : i18n.lang.gameResult.Tie;
            var resultTitle = find("ing_heidi/resultTitle", _this4.Node_result);
            var Label_win = find("ing_heidi/Label_win", _this4.Node_result).getComponent(Label);
            resultTitle.active = betResult.prizeAmount > 0;
            Label_win.node.active = betResult.prizeAmount > 0;
            if (betResult.prizeAmount > 0) {
              // let inter = Common.numFormatInt(betResult.prizeAmount / 1000);
              // let digit = BjlVipUtils.instance.numberFormatD(betResult.prizeAmount / 1000, 2.0);

              Label_win.string = Common.ChangeMoneyShow(betResult.prizeAmount, 2);

              // BjlVipUtils.instance.playSound(BjlVipDef.eSound.Win);

              _this4.scheduleOnce(function () {
                var gold_boom = _this4.Node_result.getChildByName("gold_boom");
                gold_boom.active = true;
                ParticleUtils.play(gold_boom.getChildByName("effect"));
                BjlVipUtils.instance.playSound(eSound.CoinsBoom);
              }, 1.0);
            }
            EventManager.instance.emit(eEvent.onUpdateRecordList);
            tween(_this4.comBjlVipHallPath.node).to(0.25, {
              position: v3(0, 0, 0)
            }).start();
            _this4.scheduleOnce(function () {
              var gold_boom = _this4.Node_result.getChildByName("gold_boom");
              ParticleUtils.stop(gold_boom.getChildByName("effect"));
              gold_boom.active = false;
              resolve();
            }, 3);
          });
        };
        _proto.onFlipCard = function onFlipCard(cardIndex, cardNum) {
          cardNum = cardNum >= 10 ? 10 : cardNum;
          this.Node_resultPoint.active = true;
          if (cardIndex % 2 == 0) {
            //闲家
            this.playerPoint = (this.playerPoint + cardNum) % 10;
            var Label_num = find("Sprite_palyer/Label_num", this.Node_resultPoint).getComponent(Label);
            Label_num.string = "" + this.playerPoint;
          } else {
            this.bankerPoint = (this.bankerPoint + cardNum) % 10;
            var _Label_num = find("Sprite_banker/Label_num", this.Node_resultPoint).getComponent(Label);
            _Label_num.string = "" + this.bankerPoint;
          }
        };
        _proto.onBtnStatusUpdate = function onBtnStatusUpdate(btnName) {
          if (btnName === void 0) {
            btnName = "default";
          }
          this.updateBetInfo();
          switch (btnName) {
            case "btn_revocation":
              {
                this.btn_double.interactable = false;
                this.btn_revocation.interactable = false;
                var isLastBet = Object.keys(BjlVipModel.instance.betOrderBack).length > 0;
                this.btn_betAgain.node.active = isLastBet;
                this.btn_betAgain.interactable = isLastBet;
                this.btn_start.node.active = !isLastBet;
                this.btn_start.interactable = false;
                break;
              }
            case "btn_betAgain":
              {
                break;
              }
            case "btn_double":
              {
                break;
              }
            case "btn_start":
              {
                break;
              }
            default:
              {
                var betAreaList = Object.keys(BjlVipModel.instance.betAreaList);
                var isBetDid = betAreaList.length > 0;
                this.btn_double.interactable = isBetDid;
                this.btn_revocation.interactable = isBetDid;
                this.btn_start.node.active = isBetDid;
                this.btn_start.interactable = isBetDid;
                this.btn_betAgain.node.active = false;
                break;
              }
          }
        };
        _proto.doStartGame = function doStartGame() {
          if (BjlVipModel.instance.betResult.cutCard != 0) {
            //洗牌
            BjlVipModel.instance.tableList[BjlVipModel.instance.selectRoomIndex].history = [];
            this.comBjlVipHallPath.updatePath();
            EventManager.instance.emit(eEvent.onUpdateRecordList);
          }
          EventManager.instance.emit(eEvent.onGameStart);
          BjlVipModel.instance.betOrderBack = {};
          var betOrderListKeys = Object.keys(BjlVipModel.instance.betOrderList);
          for (var _i2 = 0, _betOrderListKeys = betOrderListKeys; _i2 < _betOrderListKeys.length; _i2++) {
            var key = _betOrderListKeys[_i2];
            BjlVipModel.instance.betOrderBack[key] = BjlVipModel.instance.betOrderList[key].slice();
          }
          gts.Debug.Log("===betOrderList=====" + JSON.stringify(BjlVipModel.instance.betOrderList));
          gts.Debug.Log("===betOrderBack=====" + JSON.stringify(BjlVipModel.instance.betOrderBack));
          var cameraInfoBet = arrCameraInfo_bet[BjlVipModel.instance.selectRoomIndex + 1];
          tween(this.mainCamera.node).to(1.5, {
            position: cameraInfoBet.pos,
            eulerAngles: cameraInfoBet.eulerAngles
          }, {
            easing: "cubicOut"
          })
          // .call(() => {
          //     EventManager.instance.emit(BjlVipDef.eEvent.onGameStart);
          // })
          .start();
          tween(this.comBjlVipHallPath.node).to(0.25, {
            position: v3(0, 200, 0)
          }).start();
          tween(this.btns).to(0.25, {
            position: v3(0, -200, 0)
          }).start();
          this.updateGold();
          this.btn_double.interactable = false;
          this.btn_revocation.interactable = false;
          this.btn_betAgain.interactable = false;
          this.btn_start.interactable = false;
          this.playerPoint = 0;
          this.bankerPoint = 0;
          var Label_num = find("Sprite_palyer/Label_num", this.Node_resultPoint).getComponent(Label);
          Label_num.string = "" + this.playerPoint;
          Label_num = find("Sprite_banker/Label_num", this.Node_resultPoint).getComponent(Label);
          Label_num.string = "" + this.bankerPoint;
          this.updateBetInfo(false);
        };
        _proto.onShowResult = /*#__PURE__*/function () {
          var _onShowResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this5 = this;
            var cameraInfo, isLastBet;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  cameraInfo = arrCameraInfo[BjlVipModel.instance.selectRoomIndex + 1];
                  tween(this.mainCamera.node).to(1.5, {
                    position: cameraInfo.pos,
                    eulerAngles: cameraInfo.eulerAngles
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this5.Node_resultPoint.active = false;
                  }).start();
                  _context.next = 4;
                  return this.doShowResult();
                case 4:
                  _context.next = 6;
                  return this.doAwait(0.5);
                case 6:
                  this.Node_result.active = false;
                  BjlVipModel.instance.gameStatus = eRunStatus.NONE;
                  EventManager.instance.emit(eEvent.onGameEnd);
                  isLastBet = Object.keys(BjlVipModel.instance.betOrderBack).length > 0;
                  this.btn_start.node.active = !isLastBet;
                  this.btn_betAgain.node.active = isLastBet;
                  this.btn_betAgain.interactable = isLastBet;
                  this.btn_start.interactable = false;
                  tween(this.btns).to(0.25, {
                    position: v3(0, 0, 0)
                  }).start();
                  if (BjlVipModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      //上次下注
                      EventManager.instance.emit(eEvent.onBtnClick, "btn_betAgain");
                    }, 1);
                    this.scheduleOnce(function () {
                      //start run
                      if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                        Common.showTip(i18n.lang["10005"]);
                        return;
                      }
                      BjlVipUtils.instance.playSound(eSound.Begin);
                      BjlVipCtrl.instance.reqBet(_this5.getBetInfo());
                    }, 1.5);
                  } else {
                    this.showStartBetTip();
                  }
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onShowResult() {
            return _onShowResult.apply(this, arguments);
          }
          return onShowResult;
        }();
        _proto.updateBetInfo = function updateBetInfo(isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          this.Node_betInfo.active = isShow;
          if (!isShow) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(this.Node_betInfo.children), _step2; !(_step2 = _iterator2()).done;) {
              var childNode = _step2.value;
              childNode.getChildByName("Label_bet").getComponent(Label).string = "";
              childNode.active = false;
            }
            return;
          }
          var keys = Object.keys(betAreaMap);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var betAmount = BjlVipModel.instance.areaTotalBet[key] || 0;
            var betNode = this.Node_betInfo.getChildByName("bet_" + i);
            betNode.active = betAmount > 0;
            if (betNode.active) {
              var Label_bet = betNode.getChildByName("Label_bet");

              // let inter = Common.numFormatInt(betAmount / 1000);
              // let digit = BjlVipUtils.instance.numberFormatD(betAmount / 1000, 2);

              Label_bet.getComponent(Label).string = Common.ChangeMoneyShow(betAmount, 2);
            }
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(BjlVipModel.instance.curBalance);
          if (strGold != this.selfGold.string) {
            BjlVipUtils.instance.updateLabel(this.selfGold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                this.initUIView();
                break;
              }
            case eProto.HD_Bet:
              {
                this.doStartGame();
                break;
              }
            case eProto.Record:
              {
                // this.updateGold();
                break;
              }
            case eProto.HD_History:
              {
                // this.comBjlVipRecord.updateRecord();
                break;
              }
            //////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();
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
          }
        };
        _proto.doCameraCruise = function doCameraCruise(isShow, reWait) {
          var _this6 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (reWait === void 0) {
            reWait = false;
          }
          var delay = reWait ? 32 : 30;
          Tween.stopAllByTarget(this.mainCamera.node);
          if (!isShow) {
            //返回桌面
            this.isCameraCruise = false;
            var cameraDestInfo = arrCameraInfo[BjlVipModel.instance.selectRoomIndex + 1];
            var startPos = this.mainCamera.node.position;
            var destPos = cameraDestInfo.pos;
            var duration = Vec3.distance(startPos, destPos) / 1.25;
            tween(this.mainCamera.node).to(0.25, {
              position: destPos,
              eulerAngles: cameraDestInfo.eulerAngles
            }, {
              easing: "cubicOut"
            }).call(function () {
              _this6.Node_betInfo.active = BjlVipModel.instance.curTotalBet > 0;
            }).start();
            if (!reWait) {
              return;
            }
          }
          this.isCameraCruise = true;

          //拉到中间
          var destPos_0 = v3(0, 1.0, 0);
          tween(this.mainCamera.node).delay(delay).call(function () {
            _this6.Node_betInfo.active = false;
          }).to(15, {
            position: destPos_0,
            eulerAngles: v3(0, this.mainCamera.node.eulerAngles.y, 0)
          }, {
            easing: "cubicIn"
          }).call(function () {
            var _tween;
            var arrTween = [];
            for (var _i3 = 0, _cameraCruise = cameraCruise; _i3 < _cameraCruise.length; _i3++) {
              var info = _cameraCruise[_i3];
              arrTween.push(tween(_this6.mainCamera.node).to(20, {
                position: info.position,
                eulerAngles: info.rotation
              }, {
                easing: "quadInOut"
              }).delay(1));
            }
            (_tween = tween(_this6.mainCamera.node)).sequence.apply(_tween, arrTween).repeatForever().start();
          }).start();
        };
        return BjlVipGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selfName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selfGold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "addScore", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_betTip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "comBjlVipHallPath", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btns", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_resultPoint", [_dec10], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btn_revocation", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btn_start", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btn_betAgain", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "btn_double", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "arrResultSpr", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_betInfo", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_betRate", [_dec18], {
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

System.register("chunks:///_virtual/BjlVipHallPath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BjlVipRoadItem.ts', './EventManager.ts', './BjlVipModel.ts', './BjlVipDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteFrame, Label, Prefab, instantiate, Sprite, tween, v3, v2, Component, BjlVipRoadItem, EventManager, BjlVipModel, eEvent;
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
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      tween = module.tween;
      v3 = module.v3;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      BjlVipRoadItem = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "c07d0I5KFBMIL7OD86+4I7I", "BjlVipHallPath", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BjlVipHallPath = exports('default', (_dec = ccclass("BjlVipHallPath"), _dec2 = menu("game/BjlVipGame/BjlVipHallPath"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Prefab), _dec11 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipHallPath, _Component);
        function BjlVipHallPath() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_path1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balls", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_strTag", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title1", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title2", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title3", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_item", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemNum", _descriptor9, _assertThisInitialized(_this));
          _this._curPath1 = void 0;
          _this._curPath2 = void 0;
          return _this;
        }
        var _proto = BjlVipHallPath.prototype;
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.RESULT, this.addPath, this);
          EventManager.instance.on(eEvent.HISTORY, this.updatePath, this);
        };
        _proto.start = function start() {
          this.updatePath();
        };
        _proto.addPath = function addPath() {
          var history = BjlVipModel.instance.tableList[BjlVipModel.instance.selectRoomIndex].history;
          if (this._curPath1.length == 36) {
            this._curPath1 = this._curPath1.slice(0, 30);
          }
          this._curPath1.unshift(history[0]);
          this.drawPathLayer1();
          this.drawPathLayer2();
        };
        _proto.updatePath = function updatePath() {
          // this._curData = (DxVipModel.instance.gameRecord && DxVipModel.instance.gameRecord.slice()) || [];
          // if (this._curData.length > 100) {
          //     this._curData = this._curData.slice(0, 100);
          // }
          var history = BjlVipModel.instance.tableList[BjlVipModel.instance.selectRoomIndex].history;
          this._curPath1 = history.slice();
          this._curPath2 = history.slice();
          if (this._curPath1 && this._curPath1.length > 36) {
            this._curPath1 = this._curPath1.slice(this._curPath1.length - 36);
          }
          // if (this._curPath2 && this._curPath2.length > 36) {
          //     this._curPath2 = this._curPath2.slice(this._curPath2.length - 36);
          // }

          this._curPath1 = this._curPath1.reverse();
          this.drawPathLayer1();
          this.drawPathLayer2();
        };
        _proto.drawPathLayer1 = function drawPathLayer1() {
          if (!this._curPath1) return;
          this.node_path1.destroyAllChildren();
          for (var i = this._curPath1.length - 1; i >= 0; i--) {
            var num = parseInt(this._curPath1[i]) - 1;
            var itemNum = instantiate(this.itemNum);
            this.node_path1.addChild(itemNum);
            itemNum.active = true;
            var sprite = itemNum.getComponent(Sprite);
            sprite.spriteFrame = this.balls[num];
            if (i == 0) {
              tween(itemNum).to(0.5, {
                scale: v3(0.8, 0.8, 0.8)
              }).to(0.5, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }
          }
          var countMap = {};
          for (var j = this._curPath2.length - 1; j >= 0; j--) {
            var _num = parseInt(this._curPath2[j]) - 1;
            if (!countMap[_num]) {
              countMap[_num] = 0;
            }
            countMap[_num]++;
          }
          var arrTag = ["A", "B", "C", "D", "E", "F"];
          this.Label_strTag.string = "" + arrTag[BjlVipModel.instance.selectRoomIndex];
          this.txt_title1.string = countMap[1] || 0 + "";
          this.txt_title2.string = countMap[0] || 0 + "";
          var count1 = countMap[2] || 0;
          var count2 = countMap[3] || 0;
          this.txt_title3.string = count1 + count2 + "";
        };
        _proto.parseBigRoadDatas = function parseBigRoadDatas(sources, bigroadDic, isFirstTie) {
          var BP_ROW = 6;
          var result = [];
          var len = sources.length;
          var cellData = null;
          var realCol = 0; // 真实列数， 超过6个之后不另起一列，在最后一行往右累加， 该变量表示累加前的列数
          var first_is_tie = false;
          var row = 0;
          var col = 0;
          for (var i = 0; i < len; i++) {
            var str = sources[i];
            var curMaxRow = BP_ROW;
            if (i == 0) {
              if (str == "2") {
                cellData = {
                  bigTieCount: 0
                };
                cellData.x = col = 0;
                cellData.y = row = 0;
                cellData.bigType = str;
                if (bigroadDic != null) {
                  bigroadDic["0_0"] = str;
                }
                result.push(cellData);
              } else if (str == "1") {
                cellData = {
                  bigTieCount: 0
                };
                cellData.x = col = 0;
                cellData.y = row = 0;
                cellData.bigType = str;
                if (bigroadDic != null) {
                  bigroadDic["0_0"] = str;
                }
                result.push(cellData);
              } else {
                first_is_tie = true;
              }
            } else {
              if (str == "3" || str == "4") {
                if (cellData != null) {
                  cellData.bigTieCount++;
                  var bigTieCount = cellData.bigTieCount;
                  if (bigTieCount > 9) {
                    bigTieCount = 9;
                  }
                }
              } else {
                var newCellData = {
                  bigType: "",
                  realX: 0,
                  realY: 0,
                  x: 0,
                  y: 0,
                  bigTieCount: 0
                };
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
                    curMaxRow = BP_ROW;
                  }
                  row = 0;
                  col = realCol + 1;
                  realCol = realCol + 1;
                  newCellData.realX = col;
                  newCellData.realY = row;
                }

                // console.log("index", i, col, row, realCol, curMaxRow);

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

                        // console.log("调整", col, row);
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
        _proto.drawPathLayer2 = function drawPathLayer2() {
          if (!this._curPath2 || this._curPath2.length == 0) return;
          var spaceX = 26.06;
          var spaceY = 26.9;
          var startX = 10.5;
          var startY = -10.5;
          var max_len = 18;
          var bigRoadDic = [];
          var isFirstTie = [];
          var info = this.parseBigRoadDatas(this._curPath2, bigRoadDic, isFirstTie);
          var startIndex = 0;
          if (info) {
            var x = 0;
            for (var _iterator = _createForOfIteratorHelperLoose(info), _step; !(_step = _iterator()).done;) {
              var i = _step.value;
              if (i.x > x) {
                x = i.x;
              }
            }
            startIndex = x - max_len + 1;
            if (startIndex < 0) {
              startIndex = 0;
            }
          }
          this.node_path2.destroyAllChildren();
          for (var _i = 0; _i < info.length; _i++) {
            if (info[_i].x < startIndex) continue;
            var node = instantiate(this.prefab_item);
            this.node_path2.addChild(node);
            node.setPosition(startX + (info[_i].x - startIndex) * spaceX, startY - info[_i].y * spaceY);
            node.getComponent(BjlVipRoadItem).setData(info[_i]);
            info[_i].bigType;
            if (_i == info.length - 1) {
              tween(node).to(0.5, {
                scale: v3(0.8, 0.8, 0.8)
              }).to(0.5, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }
          }
        };
        _proto.onDisable = function onDisable() {
          // EventManager.instance.off(DxVipDef.eEvent.onUpdatePath, this.updatePath, this);
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
        return BjlVipHallPath;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_path1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_path2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "balls", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_strTag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_title1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_title2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txt_title3", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prefab_item", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itemNum", [_dec11], {
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

System.register("chunks:///_virtual/BjlVipHallView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './GUtil.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './BjlVipCtrl.ts', './BjlVipDef.ts', './Common.ts', './BjlVipUtils.ts', './GameRecordLayer.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, instantiate, GameDef, GUtil, ConfigManager, EventManager, NetManager, ViewManager, BjlVipCtrl, cBundle, eProto, eEvent, Common, BjlVipUtils, GameRecordLayer;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      BjlVipCtrl = module.BjlVipCtrl;
    }, function (module) {
      cBundle = module.cBundle;
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      BjlVipUtils = module.BjlVipUtils;
    }, function (module) {
      GameRecordLayer = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "f60672BTZZOCICb7UDXKaRq", "BjlVipHallView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var BjlVipHallView = exports('default', (_dec = ccclass("BjlVipHallView"), _dec2 = menu("game/BjlVipGame/BjlVipHallView"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(BjlVipHallView, _GameDef$BaseView);
        function BjlVipHallView() {
          return _GameDef$BaseView.apply(this, arguments) || this;
        }
        var _proto = BjlVipHallView.prototype;
        //    // @property(cc.Node)
        //    // Node_gameLogo: cc.Node = null;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, BjlVipCtrl.instance);
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          BjlVipCtrl.instance.reqRoomList();
          BjlVipCtrl.instance.reqHistory();
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
        };

        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
        };

        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
          this.unscheduleAllCallbacks();
        };
        _proto.start = function start() {
          // //        //玩家信息
          // this.Label_gold.string = "$" + Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)));
          // Common.nickNameFormatL(this.Label_name, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          // let headiconName = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          // //        //头像
          // Common.getHead(headiconName, this.head.node);
          // let grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          // if (grade) {
          //     let Sprite_level = this.Label_gold.node.parent.getChildByName("Sprite_level");
          //     Common.setGradeCode(Sprite_level, parseInt(grade));
          // }
        }
        //    // update (dt) {}
        ;

        _proto.onBtnClick = function onBtnClick(event, eventData) {
          // // gts.Debug.Log("=onBtnClick=eventData=" + eventData);
          // switch (eventData) {
          //     case "BackHall": {
          //         Common.returnToHall(this, BjlVipDef.cBundle);
          //         break;
          //     }
          // }
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
              NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.hallInfo, {
                key: ["bannerArray", "lobbyNotice"]
              });
            }
          }, 0.1);
        }
        //////////////////////////////////////
        //按钮事件回调
        ;

        _proto.onClickExit = function onClickExit() {
          console.time("bundle.onLoadHall");
          Common.showWait();
          if (ViewManager.instance.miniLayer) {
            ViewManager.instance.miniLayer.getChildByName("miniGame").angle = 0;
          }

          //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.onClickRand = function onClickRand() {
          GUtil.openRank("bjl3d");
        };
        _proto.onClickRecord = function onClickRecord() {
          Common.loadPopBuddle("prefab/Node_record", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
            viewNode.getComponent(GameRecordLayer).setGameType("bjl3d", 6);
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          // GUtil.openSetting();
          Common.loadPopBuddle("prefab/Node_setting", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/Node_help", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        }
        //    ///////////////////////////////
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_GetTableList:
              {
                EventManager.instance.emit(eEvent.onUpdateRecordList);
                break;
              }
            //            //////////////////////////////////
            case ConfigManager.instance.protocolHall.login:
              {
                //                //断线重连
                Common.closeNetTips();
                this.gameShow();
                break;
              }
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                //                //获取钱包//推送钱包
                // this.Label_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
                break;
              }
          }
        };
        return BjlVipHallView;
      }(GameDef.BaseView)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './BjlVipDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, v3, GameDef, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "75aa17OAXhOdrCYjiq/Fz7E", "BjlVipModel", undefined);
      var BjlVipModel = exports('BjlVipModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(BjlVipModel, _GameDef$BaseSington);
        function BjlVipModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = -1;
          _this.endBalance = 0;
          _this.isAuto = false;
          _this.isReady = false;
          _this.gameStatus = eRunStatus.NONE;
          _this.tableList = [];
          /**
           * 0-5
           */
          _this.selectRoomIndex = -1;
          _this.selectRoomStatus = 0;
          _this.areaTotalBet = {};
          _this.curTotalBet = 0;
          _this.betAreaList = {};
          // betOrderList: { area: string; chip: string; pos: Vec3 }[] = [];
          // betOrderBack: { area: string; chip: string; pos: Vec3 }[] = [];
          _this.betOrderList = {};
          _this.betOrderBack = {};
          _this.betPosList = {};
          _this.betChipInfo = {};
          _this.winRate = [];
          _this.betInfo = {};
          _this._betResult = null;
          return _this;
        }
        var _proto = BjlVipModel.prototype;
        ////////////////////////////////////////////////////////////
        ////////////////////////////////
        /**
         * 退出房间  清理游戏数据
         */
        _proto.clearGameData = function clearGameData() {
          this.selectRoomIndex = -1;
          this.curTotalBet = 0;
          this.betAreaList = {};
          this.betOrderList = {};
          this.betOrderBack = {};
          this.betChipInfo = {};
          this.betInfo = {};
          this.areaTotalBet = {};
          this.gameStatus = eRunStatus.NONE;
        };
        _proto.getOrderList = function getOrderList() {
          this.betOrderList = {};
          var betAreaListKeys = Object.keys(this.betAreaList);
          for (var _i = 0, _betAreaListKeys = betAreaListKeys; _i < _betAreaListKeys.length; _i++) {
            var area = _betAreaListKeys[_i];
            var arrBetInfo = this.betAreaList[area];
            var areaPos = BjlVipModel.instance.betPosList[area];
            this.betOrderList[area] = [];
            for (var i = 0; i < arrBetInfo.length; i++) {
              var chip = arrBetInfo[i];
              this.betOrderList[area].push({
                chip: chip.name,
                pos: v3(areaPos.x, 0.212 + i * 0.0025, areaPos.z)
              });
            }
          }
        };
        _createClass(BjlVipModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(_betResult) {
            this._betResult = _betResult;
          }
        }]);
        return BjlVipModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Label, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "6539c7DpGdPJrAx2peEzxHR", "BjlVipRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BjlVipRoadItem = exports('default', (_dec = ccclass("BjlVipRoadItem"), _dec2 = menu("game/BjlVipGame/BjlVipRoadItem"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(Label), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipRoadItem, _Component);
        function BjlVipRoadItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprite_bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_bgs", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_count", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_tie", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BjlVipRoadItem.prototype;
        _proto.setData = function setData(data) {
          this.txt_count.string = data.bigTieCount + "";
          this.node_tie.active = data.bigTieCount > 0;
          this.sprite_bg.spriteFrame = this.frame_bgs[parseInt(data.bigType) - 1];
        };
        _proto.onDestroy = function onDestroy() {};
        return BjlVipRoadItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frame_bgs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_count", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_tie", [_dec6], {
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

System.register("chunks:///_virtual/BjlVipScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './BjlVipDef.ts', './BjlVipUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, UIOpacity, tween, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, BjlVipUtils, Common;
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
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
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
      BjlVipUtils = module.BjlVipUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4f26ev+yl9Ek55aIhfVmnZb", "BjlVipScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BjlVipScene = exports('default', (_dec = ccclass("BjlVipScene"), _dec2 = menu("game/BjlVipGame/BjlVipScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipScene, _Component);
        function BjlVipScene() {
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
          return _this;
        }
        var _proto = BjlVipScene.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          NetManager.instance.waitServiceSendData();
          BjlVipUtils.instance.bundle = assetManager.getBundle(cBundle);
          BjlVipUtils.instance.preLoad();
          BjlVipUtils.instance.loadRes_icon(function () {
            _this2.onLoadHall();
          });
          BjlVipUtils.instance.playBgMusic();
          Common.showWait();
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          view.off("canvas-resize", this.onResize, this);
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onResize = function onResize() {
          // let MainCamera = director.getScene().getChildByName("Main Camera").getComponent(Camera);
          // MainCamera.camera.resize(1920, 1080);
        };
        _proto.onLoadHall = function onLoadHall() {
          var _this3 = this;
          console.time("bundle.onLoadHall");
          if (!this.prefab_hall) {
            BjlVipUtils.instance.bundle.load("prefab/BjlVipHall", Prefab, function (cur, total) {}, function (err, prefab) {
              _this3.prefab_hall = prefab;
              _this3.showHall();
            });
          } else {
            this.showHall();
          }
        };
        _proto.showHall = function showHall() {
          var _this4 = this;
          if (this.prefab_hall) {
            if (!this._node_hall) {
              this._node_hall = instantiate(this.prefab_hall);
              // this._node_hall.scale = v3(0.7, 0.7, 1);
              this.node.addChild(this._node_hall);
            }
            this._node_hall.getComponent(UIOpacity).opacity = 0;
            if (this._node_Game) {
              this._node_Game.removeFromParent();
              this._node_Game.destroy();
              this._node_Game = null;
            }
            tween(this._node_hall.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).call(function () {
              if (_this4.firstNode) {
                _this4.firstNode.removeFromParent();
                _this4.firstNode.destroy();
                _this4.firstNode = null;
              }
            }).start();
            Common.closeWait();
            console.timeEnd("bundle.onLoadHall");
          }
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this5 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            BjlVipUtils.instance.bundle.load("prefab/BjlVipGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this5.prefab_game = prefab;
              _this5.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this6 = this;
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              //                // this._node_Game.opacity = 0;
              fadeInTimes = 0.15;
            }

            // this.onResize();
            if (this._node_hall) {
              this._node_hall.removeFromParent();
              this._node_hall.destroy();
              this._node_hall = null;
            }
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              if (_this6._node_hall) {
                _this6._node_hall.removeFromParent();
                _this6._node_hall.destroy();
                _this6._node_hall = null;
              }
            }).start();
            console.timeEnd("bundle.onLoadGame");
          }
        }

        //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return BjlVipScene;
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

System.register("chunks:///_virtual/BjlVipSwitch.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BjlVipDef.ts', './BjlVipModel.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, NodeEventType, view, UITransform, tween, v3, Component, eEvent, BjlVipModel, EventManager;
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
      NodeEventType = module.NodeEventType;
      view = module.view;
      UITransform = module.UITransform;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ed17akQRjFBJoc7OJOrVgfb", "BjlVipSwitch", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BjlVipSwitch = exports('BjlVipSwitch', (_dec = ccclass("BjlVipSwitch"), _dec2 = menu("game/BjlVipGame/BjlVipSwitch"), _dec3 = property(gts.List), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipSwitch, _Component);
        function BjlVipSwitch() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor2, _assertThisInitialized(_this));
          // @property(Node)
          // Node_chip: Node = null;
          // @property(Node)
          // Node_label: Node = null;
          // @property(Node)
          // chipItem: Node = null;
          // @property(Label)
          // page: Label = null;
          // @property(Label)
          // platform: Label = null;
          // @property(Label)
          // gameId: Label = null;
          // @property(Label)
          // totalBet: Label = null;
          // @property(Label)
          // win: Label = null;
          // @property(Label)
          // reuslt: Label = null;
          // @property(Node)
          // Node_winTip: Node = null;
          _this.firstStart = true;
          return _this;
        }
        var _proto = BjlVipSwitch.prototype;
        // onLoad() {}
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onUpdateRecordList, this.onUpdateRecordList, this);

          // this.mask.on(
          //     NodeEventType.TOUCH_END,
          //     () => {
          //         //收起
          //         this.doListAction(false);
          //     },
          //     this
          // );
        };

        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdateRecordList, this.onUpdateRecordList, this);
          this.mask.off(NodeEventType.TOUCH_END);
        };
        _proto.start = function start() {};
        _proto.onDestroy = function onDestroy() {};
        _proto.doListAction = function doListAction(isSHow) {
          if (isSHow === void 0) {
            isSHow = true;
          }
          var ScrollView_pathList = this.node.getChildByName("ScrollView_pathList");
          if (isSHow && !ScrollView_pathList.active) {
            //展开

            ScrollView_pathList.active = true;
            this.onUpdateRecordList();
            var viewSize = view.getVisibleSize();
            var listWidth = ScrollView_pathList.getComponent(UITransform).width;
            tween(this.node).to(0.25, {
              position: v3(viewSize.width / 2 - listWidth, 0, 0)
            }, {
              easing: "cubicOut"
            }).start();
          } else if (!isSHow && ScrollView_pathList.active) {
            var _ScrollView_pathList = this.node.getChildByName("ScrollView_pathList");
            //收起
            var _viewSize = view.getVisibleSize();
            var _listWidth = _ScrollView_pathList.getComponent(UITransform).width;
            tween(this.node).to(0.25, {
              position: v3(_viewSize.width / 2, 0, 0)
            }, {
              easing: "cubicOut"
            }).call(function () {
              _ScrollView_pathList.active = false;
            }).start();
          }
        };
        _proto.onBtnClick = function onBtnClick(event) {
          var strName = event.target.name;
          switch (strName) {
            case "Button_Sceneswitch":
              {
                var ScrollView_pathList = this.node.getChildByName("ScrollView_pathList");
                if (!ScrollView_pathList.active) {
                  this.doListAction();
                } else {
                  this.doListAction(false);
                }
                break;
              }
          }
        };
        _proto.onUpdateRecordList = function onUpdateRecordList() {
          this.scrollView_content.setData(BjlVipModel.instance.tableList);
          this.scrollView_content.refresh();
          if (this.firstStart) {
            this.doListAction();
            this.firstStart = false;
          }
        };
        return BjlVipSwitch;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec4], {
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

System.register("chunks:///_virtual/BjlVipSwitchItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts', './BjlVipDef.ts', './BjlVipRoadItem.ts', './BjlVipModel.ts', './EventManager.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Node, Label, Prefab, UIOpacity, Button, instantiate, tween, v3, Component, AutoChangeParent, Common, eRunStatus, eEvent, BjlVipRoadItem, BjlVipModel, EventManager, i18n;
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
      Prefab = module.Prefab;
      UIOpacity = module.UIOpacity;
      Button = module.Button;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
    }, function (module) {
      BjlVipRoadItem = module.default;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "884aakpyDVNHpCeMwQH3x5X", "BjlVipSwitchItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var BjlVipSwitchItem = exports('default', (_dec = ccclass("BjlVipSwitchItem"), _dec2 = menu("game/BjlVipGame/BjlVipSwitchItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipSwitchItem, _Component);
        function BjlVipSwitchItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_strTag", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_total", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_play", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bank", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_draw", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_path", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_item", _descriptor9, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = BjlVipSwitchItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          this.Node_label.active = true;
          this.node.on("click", this.onItemClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onItemClick, this);
        };
        _proto.onItemClick = function onItemClick(event) {
          var tempData = this.item.data;
          var tableIndex = parseInt(tempData.table);
          if (BjlVipModel.instance.gameStatus == eRunStatus.NONE) {
            EventManager.instance.emit(eEvent.onStopCameraCruise, true);
          }
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          if (BjlVipModel.instance.selectRoomIndex == tableIndex) {
            return;
          }
          if (BjlVipModel.instance.selectRoomStatus != 0) {
            return;
          }
          BjlVipModel.instance.selectRoomStatus = 1;
          this.scheduleOnce(function () {
            EventManager.instance.emit(eEvent.onSelectRoom, tableIndex);
          }, 0.3);
        };
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
          var arrTag = ["A", "B", "C", "D", "E", "F"];
          var tableIndex = parseInt(tempData.table);
          var curHistory = BjlVipModel.instance.tableList[tableIndex].history.slice();
          // if (curHistory && curHistory.length > 36) {
          //     curHistory = curHistory.slice(curHistory.length - 36);
          // }

          this.Label_strTag.string = "" + arrTag[tableIndex];
          this.Label_total.string = "" + curHistory.length;
          var play = 0;
          var bank = 0;
          var draw = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(curHistory), _step; !(_step = _iterator()).done;) {
            var history = _step.value;
            history == 1 ? play++ : history == 2 ? bank++ : draw++;
          }
          this.Label_play.string = "" + play;
          this.Label_bank.string = "" + bank;
          this.Label_draw.string = "" + draw;
          this.drawPathLayer2(curHistory);
          if (BjlVipModel.instance.selectRoomIndex != -1 && tableIndex == BjlVipModel.instance.selectRoomIndex) {
            this.node.getComponent(Button).interactable = false;
          } else {
            this.node.getComponent(Button).interactable = true;
          }
        };
        _proto.drawPathLayer2 = function drawPathLayer2(history) {
          var curHistory = history.slice();
          if (!curHistory || curHistory.length == 0) return;
          var spaceX = 26.06;
          var spaceY = 26.9;
          var startX = 10.5;
          var startY = -10.5;
          var max_len = 18;
          var bigRoadDic = [];
          var isFirstTie = [];
          var info = this.parseBigRoadDatas(curHistory, bigRoadDic, isFirstTie);
          var startIndex = 0;
          if (info) {
            var x = 0;
            for (var _iterator2 = _createForOfIteratorHelperLoose(info), _step2; !(_step2 = _iterator2()).done;) {
              var i = _step2.value;
              if (i.x > x) {
                x = i.x;
              }
            }
            startIndex = x - max_len + 1;
            if (startIndex < 0) {
              startIndex = 0;
            }
          }
          this.Node_path.destroyAllChildren();
          for (var _i = 0; _i < info.length; _i++) {
            if (info[_i].x < startIndex) continue;
            var node = instantiate(this.prefab_item);
            this.Node_path.addChild(node);
            node.setPosition(startX + (info[_i].x - startIndex) * spaceX, startY - info[_i].y * spaceY);
            node.getComponent(BjlVipRoadItem).setData(info[_i]);
            if (!this.node.getComponent(Button).interactable && _i == info.length - 1) {
              tween(node).to(0.5, {
                scale: v3(0.8, 0.8, 0.8)
              }).to(0.5, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }
          }
        };
        _proto.parseBigRoadDatas = function parseBigRoadDatas(sources, bigroadDic, isFirstTie) {
          var BP_ROW = 6;
          var result = [];
          var len = sources.length;
          var cellData = null;
          var realCol = 0; // 真实列数， 超过6个之后不另起一列，在最后一行往右累加， 该变量表示累加前的列数
          var first_is_tie = false;
          var row = 0;
          var col = 0;
          for (var i = 0; i < len; i++) {
            var str = sources[i];
            var curMaxRow = BP_ROW;
            if (i == 0) {
              if (str == "2") {
                cellData = {
                  bigTieCount: 0
                };
                cellData.x = col = 0;
                cellData.y = row = 0;
                cellData.bigType = str;
                if (bigroadDic != null) {
                  bigroadDic["0_0"] = str;
                }
                result.push(cellData);
              } else if (str == "1") {
                cellData = {
                  bigTieCount: 0
                };
                cellData.x = col = 0;
                cellData.y = row = 0;
                cellData.bigType = str;
                if (bigroadDic != null) {
                  bigroadDic["0_0"] = str;
                }
                result.push(cellData);
              } else {
                first_is_tie = true;
              }
            } else {
              if (str == "3" || str == "4") {
                if (cellData != null) {
                  cellData.bigTieCount++;
                  var bigTieCount = cellData.bigTieCount;
                  if (bigTieCount > 9) {
                    bigTieCount = 9;
                  }
                }
              } else {
                var newCellData = {
                  bigType: "",
                  realX: 0,
                  realY: 0,
                  x: 0,
                  y: 0,
                  bigTieCount: 0
                };
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
                    curMaxRow = BP_ROW;
                  }
                  row = 0;
                  col = realCol + 1;
                  realCol = realCol + 1;
                  newCellData.realX = col;
                  newCellData.realY = row;
                }

                // console.log("index", i, col, row, realCol, curMaxRow);

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

                        // console.log("调整", col, row);
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
        _createClass(BjlVipSwitchItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return BjlVipSwitchItem;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_strTag", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_total", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_play", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_bank", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_draw", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_path", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "prefab_item", [_dec11], {
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

System.register("chunks:///_virtual/BjlVipUIPlane.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Node, MeshRenderer, Camera, RenderTexture, UITransform, primitives, utils, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      MeshRenderer = module.MeshRenderer;
      Camera = module.Camera;
      RenderTexture = module.RenderTexture;
      UITransform = module.UITransform;
      primitives = module.primitives;
      utils = module.utils;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _class4, _class5, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "ecd5cRigilDy6gRBLESyKAR", "BjlVipUIPlane", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var BjlVipUIPlaneProfile = exports('default', (_dec4 = ccclass("BjlVipUIPlaneProfile"), _dec5 = property(Node), _dec6 = property(MeshRenderer), _dec4(_class4 = (_class5 = function BjlVipUIPlaneProfile() {
        _initializerDefineProperty(this, "targetNode", _descriptor3, this);
        _initializerDefineProperty(this, "plane", _descriptor4, this);
      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "targetNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "plane", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));
      var BjlVipUIPlane = exports('BjlVipUIPlane', (_dec = ccclass("BjlVipUIPlane"), _dec2 = property(Camera), _dec3 = property([BjlVipUIPlaneProfile]), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipUIPlane, _Component);
        function BjlVipUIPlane() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "copyCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "UIPlaneProfiles", _descriptor2, _assertThisInitialized(_this));
          _this.rt = void 0;
          return _this;
        }
        var _proto = BjlVipUIPlane.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          if (!this.copyCamera) return;
          this.copyCamera.node.active = true;
          this.rt = new RenderTexture();
          this.rt.reset({
            width: 1920,
            height: 1080
          });
          this.copyCamera.targetTexture = this.rt;
          this.UIPlaneProfiles[0].plane.material.setProperty("mainTexture", this.rt);

          // this.copyRenderTex();
          console.log("=========");
        };
        _proto.onDisable = function onDisable() {
          var _this$rt;
          if (!this.copyCamera) return;
          this.copyCamera.node.active = false;
          this.copyCamera.targetTexture = null;
          (_this$rt = this.rt) == null || _this$rt.destroy();
        };
        _proto.copyRenderTex = function copyRenderTex() {
          var _this2 = this;
          this.UIPlaneProfiles.forEach(function (v, i) {
            var targetNode = v.targetNode;
            var plane = v.plane;
            if (!targetNode || !plane) return;
            plane.material.setProperty("mainTexture", _this2.rt);
            var width = targetNode.getComponent(UITransform).width;
            var height = targetNode.getComponent(UITransform).height;
            var anchorPoint = targetNode.getComponent(UITransform).anchorPoint;
            var rtwidth = _this2.rt.width;
            var rtheight = _this2.rt.height;
            var worldPos = targetNode.getWorldPosition();
            worldPos.x -= width * anchorPoint.x;
            worldPos.y -= height * anchorPoint.y;
            var geometryPlane = primitives.plane();
            var uv_l = worldPos.x / rtwidth;
            var uv_b = worldPos.y / rtheight;
            var uv_r = (worldPos.x + width) / rtwidth;
            var uv_t = (worldPos.y + height) / rtheight;
            geometryPlane.uvs = [uv_l, uv_b, uv_l, uv_t, uv_r, uv_t, uv_r, uv_b];
            geometryPlane.uvs = [0, 0, 0, 1, uv_r, uv_t, uv_r, uv_b];
            plane.mesh = utils.MeshUtils.createMesh(geometryPlane, plane.mesh);
          });
        };
        return BjlVipUIPlane;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "copyCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "UIPlaneProfiles", [_dec3], {
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

System.register("chunks:///_virtual/BjlVipUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './BjlVipDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, assetManager, SpriteFrame, GameDef, AudioManager, eSound, cBundle, Common;
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
      UIRenderer = module.UIRenderer;
      Button = module.Button;
      sys = module.sys;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSound = module.eSound;
      cBundle = module.cBundle;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6b931KILqBA2KPRWHfgq4ah", "BjlVipUtils", undefined);
      var cRed = [1, 3, 5, 7, 9, 12, 16, 14, 18, 32, 19, 21, 25, 34, 27, 36, 30, 23];
      var arrIRound = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
      var BjlVipUtils = exports('BjlVipUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(BjlVipUtils, _GameDef$BaseSington);
        function BjlVipUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.arrIconSpriteFrame = {};
          _this.arrChipSpriteFrame = {};
          _this.arrBetAreaSpriteFrame = {};
          _this.arrCardSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = BjlVipUtils.prototype;
        //资源预加载
        _proto.preLoad = function preLoad() {
          // this.bundle.preload("prefab/BjlVipGameView");
          this.bundle.preloadDir("prefab");
          this.bundle.preloadDir("sound");
        };
        _proto.asyncLoad = /*#__PURE__*/function () {
          var _asyncLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(parth, type, onComplete) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.bundle) {
                    this.bundle = assetManager.getBundle(cBundle);
                  }
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this2.bundle.load(parth, type, function (error, assets) {
                      onComplete(error, assets);
                      error ? reject(false) : resolve(true);
                    });
                  }));
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
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
                  if (!this.bundle) {
                    this.bundle = assetManager.getBundle(cBundle);
                  }
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    _this3.bundle.loadDir(parth, type, function (error, assets) {
                      onComplete(error, assets);
                      error ? reject(false) : resolve(true);
                    });
                  }));
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function asyncLoadDir(_x4, _x5, _x6) {
            return _asyncLoadDir.apply(this, arguments);
          }
          return asyncLoadDir;
        }();
        _proto.loadRes_icon = /*#__PURE__*/function () {
          var _loadRes_icon = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cb) {
            var _this4 = this;
            var arrHLoad;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrHLoad = [];
                  arrHLoad.push(this.asyncLoadDir("model/chipTexture", SpriteFrame, function (err, arrSpriteFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpriteFrame), _step; !(_step = _iterator()).done;) {
                        var spriteFrame = _step.value;
                        _this4.arrChipSpriteFrame[spriteFrame.name] = spriteFrame;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("model/betArea", SpriteFrame, function (err, arrSpriteFrame) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpriteFrame), _step2; !(_step2 = _iterator2()).done;) {
                        var spriteFrame = _step2.value;
                        _this4.arrBetAreaSpriteFrame[spriteFrame.name] = spriteFrame;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("model/cardTexture", SpriteFrame, function (err, arrSpriteFrame) {
                    if (!err) {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(arrSpriteFrame), _step3; !(_step3 = _iterator3()).done;) {
                        var spriteFrame = _step3.value;
                        _this4.arrCardSpriteFrame[spriteFrame.name] = spriteFrame;
                      }
                    }
                  }));

                  // arrHLoad.push(
                  //     this.asyncLoadDir("model/betArea", Texture2D, (err, arrTexture: Texture2D[]) => {
                  //         if (!err) {
                  //             for (const texture of arrTexture) {
                  //                 this.arrBetAreaTexture[texture.name] = texture;
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
                  _context3.next = 6;
                  return Promise.all(arrHLoad);
                case 6:
                  if (cb) {
                    cb();
                  }
                case 7:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function loadRes_icon(_x7) {
            return _loadRes_icon.apply(this, arguments);
          }
          return loadRes_icon;
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
            soundPath = eSound.bgm;
          }
          AudioManager.instance.playBgMusic(soundPath, this.bundle, true);
          // audioEngine.setMusicVolume(0.75);
        };

        _proto.playOneShot = function playOneShot(soundPath, isLoop, cb) {
          var _this6 = this;
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err || _this6.soundIDList[soundPath]) {
              return;
            }
            AudioManager.instance.playOneShot(audioClip);
          });
        };
        _proto.playSound = function playSound(soundPath, isLoop, cb) {
          var _this7 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (cb === void 0) {
            cb = null;
          }
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err || _this7.soundIDList[soundPath]) {
              return;
            }
            var soundID = AudioManager.instance.playSound(audioClip, isLoop);
            _this7.soundIDList[soundPath] = soundID;
            AudioManager.instance.setFinishCallback(soundID, function () {
              _this7.soundIDList[soundPath] = null;
              delete _this7.soundIDList[soundPath];
              if (cb) {
                cb();
              }
            });

            // audioEngine.setEffectsVolume(1);
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
        _proto.updateLabelDI = function updateLabelDI(label, num) {
          var _this8 = this;
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            var inter = Common.numFormatInt(num);
            var digit = _this8.numberFormatD(num, 2);
            labelCom.string = "" + inter + digit + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
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

          //        // BjlVipUtils.instance.playSound(BjlVipDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // BjlVipUtils.instance.stopSound(BjlVipDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this9.numberFormatFloatD(curWin / 1000, 2.0) : _this9.numberFormatD(curWin / 1000, 2.0);
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
          var _this10 = this;
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

          //        // BjlVipUtils.instance.playSound(BjlVipDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // BjlVipUtils.instance.stopSound(BjlVipDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this10.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this10.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this11 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;

          //        // BjlVipUtils.instance.playSound(BjlVipDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // BjlVipUtils.instance.stopSound(BjlVipDef.eSound.numAdd);

              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this11.numberFormatFloat(curWin, 0) : "" + _this11.numberFormat(curWin, 0);
          })).delay(2.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        }
        ////////////////////////////
        // getBetAreaTexture(num) {
        //     return this.arrBetAreaTexture[`${num}`];
        // }
        ;

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
        _proto.checkColor = function checkColor(result) {
          if (result == 0) {
            return 1;
          }
          for (var _i2 = 0, _cRed = cRed; _i2 < _cRed.length; _i2++) {
            var num = _cRed[_i2];
            if (result == num) {
              return 2;
            }
          }
          return 3;
        };
        _proto.getLNNum = function getLNNum(mid) {
          var midIndex = 0;
          for (var i = 0; i < arrIRound.length; i++) {
            if (arrIRound[i] == mid) {
              midIndex = i;
              break;
            }
          }
          var lastIndex = (midIndex + 36) % 37;
          var nextIndex = (midIndex + 1) % 37;
          return [arrIRound[lastIndex], arrIRound[nextIndex]];
        };
        return BjlVipUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipViewCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './BjlVipDef.ts', './BjlVipModel.ts', './BjlVip_deskArea.ts', './BjlVipSwitch.ts', './BjlVipCtrl.ts', './Common.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Camera, Node, v2, tween, v3, Vec3, Tween, Component, EventManager, eEvent, eRunStatus, arrCameraInfo, BjlVipModel, BjlVip_deskArea, BjlVipSwitch, BjlVipCtrl, Common, i18n;
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
      Camera = module.Camera;
      Node = module.Node;
      v2 = module.v2;
      tween = module.tween;
      v3 = module.v3;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      arrCameraInfo = module.arrCameraInfo;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      BjlVip_deskArea = module.BjlVip_deskArea;
    }, function (module) {
      BjlVipSwitch = module.BjlVipSwitch;
    }, function (module) {
      BjlVipCtrl = module.BjlVipCtrl;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "6f6830MSuhOw6ZbC788S7L8", "BjlVipViewCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BjlVipViewCtrl = exports('BjlVipViewCtrl', (_dec = ccclass("BjlVipViewCtrl"), _dec2 = property(Camera), _dec3 = property(BjlVipSwitch), _dec4 = property(BjlVip_deskArea), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipViewCtrl, _Component);
        function BjlVipViewCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_switch", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrDeskArea", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tag", _descriptor4, _assertThisInitialized(_this));
          _this.curDeskArea = null;
          ////////////////////////////////////////////////////////////////////////////////
          // 圆心
          _this.circleCenter = v2(-0.897136, -0.161146);
          // 半径
          _this.circleRadius = 0;
          // 速度
          _this.speed = 500;
          // 弧度
          _this.radian = 0;
          _this.axisSpeed = 0.74997;
          return _this;
        }
        var _proto = BjlVipViewCtrl.prototype;
        ////////////////////////////////////////////
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          tween(this.Node_tag).to(2, {
            position: v3(0, 0.5, 0)
          }).to(2, {
            position: v3(0, 0.25, 0)
          }).union().repeatForever().start();
        };
        _proto.update = function update(dt) {};
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onExitRoom, this.onExitRoom, this);
          EventManager.instance.on(eEvent.onSelectRoom, this.onSelectRoom, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onExitRoom, this.onExitRoom, this);
          EventManager.instance.off(eEvent.onSelectRoom, this.onSelectRoom, this);
        };
        _proto.doJump = function doJump(target, duration, toPos, hight, eType) {
          if (hight === void 0) {
            hight = 0.25;
          }
          var startPos = target.worldPosition;
          var len = Vec3.distance(toPos, startPos);
          var cpY = (startPos.y + toPos.y) / 2 + hight; //len * 0.5;
          return tween(target).bezierTo3W(duration, startPos, v3(startPos, cpY, (startPos.z + toPos.z) / 2.0), v3(toPos.x, cpY, (startPos.z + toPos.z) / 2.0), toPos, {
            easing: "cubicOutIn"
          });
        };
        _proto.onExitRoom = function onExitRoom() {
          var _this2 = this;
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          if (BjlVipModel.instance.selectRoomIndex != -1) {
            for (var _iterator = _createForOfIteratorHelperLoose(this.arrDeskArea), _step; !(_step = _iterator()).done;) {
              var deskArea = _step.value;
              deskArea.enabled = false;
            }
            BjlVipModel.instance.selectRoomIndex = -1;
          }
          var cameraDestInfo = arrCameraInfo[0];
          var startPos = this.mainCamera.node.position;
          var destPos_0 = v3(0, 1.0, 0);
          var duration_0 = 3; //Vec3.distance(startPos, destPos_0) / 1.25;

          var destPos_1 = cameraDestInfo.pos;
          var duration_1 = 1.75; //Vec3.distance(destPos_0, destPos_1) / 1.25;

          EventManager.instance.emit(eEvent.onLoadHall);
          tween(this.mainCamera.node).to(duration_0, {
            position: destPos_0,
            eulerAngles: v3(0, this.mainCamera.node.eulerAngles.y, 0)
          }, {
            easing: "quadOut"
          }).parallel(tween(this.mainCamera.node).bezierTo3(duration_1, destPos_0, v3(destPos_0.x, destPos_0.y + 0.5, 3), v3(destPos_1.x, destPos_1.y + 0.5, 3), destPos_1), tween(this.mainCamera.node).to(duration_1, {
            eulerAngles: cameraDestInfo.eulerAngles
          })).call(function () {
            BjlVipModel.instance.selectRoomStatus = 0;
            _this2.Node_tag.active = true;
          }).start();
        };
        _proto.onSelectRoom = function onSelectRoom(selectRoomIndex) {
          var _this3 = this;
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          if (BjlVipModel.instance.selectRoomIndex == selectRoomIndex) {
            return;
          }
          Tween.stopAllByTarget(this.mainCamera.node);
          if (BjlVipModel.instance.selectRoomIndex == -1) {
            BjlVipModel.instance.selectRoomIndex = selectRoomIndex;
            var _BjlVip_deskArea = this.arrDeskArea[BjlVipModel.instance.selectRoomIndex];
            _BjlVip_deskArea.enabled = true;
            _BjlVip_deskArea.init();
            var cameraDestInfo = arrCameraInfo[BjlVipModel.instance.selectRoomIndex + 1];
            var startPos = this.mainCamera.node.position;
            var destPos = cameraDestInfo.pos;
            var duration = 3; //Vec3.distance(startPos, destPos) / 1.25;

            tween(this.mainCamera.node).parallel(tween(this.mainCamera.node).bezierTo3(duration, startPos, v3(startPos.x, startPos.y + 0.5, 3), v3(destPos.x, destPos.y + 0.5, 3), destPos), tween(this.mainCamera.node).to(duration, {
              eulerAngles: cameraDestInfo.eulerAngles
            }, {
              easing: "cubicIn"
            })).call(function () {
              BjlVipModel.instance.selectRoomStatus = 0;
              _this3.Node_tag.active = false;
              EventManager.instance.emit(eEvent.onLoadGame);
            }).start();
          } else {
            if (BjlVipModel.instance.selectRoomIndex != -1) {
              for (var _iterator2 = _createForOfIteratorHelperLoose(this.arrDeskArea), _step2; !(_step2 = _iterator2()).done;) {
                var deskArea = _step2.value;
                deskArea.enabled = false;
              }
              BjlVipCtrl.instance.reqExit();
              EventManager.instance.emit(eEvent.onLoadHall);
            }
            BjlVipModel.instance.selectRoomIndex = selectRoomIndex;
            var _BjlVip_deskArea2 = this.arrDeskArea[BjlVipModel.instance.selectRoomIndex];
            _BjlVip_deskArea2.enabled = true;
            _BjlVip_deskArea2.init();
            var _cameraDestInfo = arrCameraInfo[BjlVipModel.instance.selectRoomIndex + 1];
            var _startPos = v3(0, 1.0, 0);
            var duration_0 = 3; //Vec3.distance(this.mainCamera.node.position, startPos);
            var duration_1 = 2; //Vec3.distance(startPos, cameraDestInfo.pos) / 1.25;

            tween(this.mainCamera.node).to(duration_0, {
              position: _startPos,
              eulerAngles: v3(0, this.mainCamera.node.eulerAngles.y, 0)
            }, {
              easing: "cubicOut"
            }).to(duration_1, {
              position: _cameraDestInfo.pos,
              eulerAngles: _cameraDestInfo.eulerAngles
            }, {
              easing: "cubicIn"
            }).call(function () {
              BjlVipModel.instance.selectRoomStatus = 0;
              _this3.Node_tag.active = false;
              EventManager.instance.emit(eEvent.onLoadGame);
            }).start();
          }
          this.Node_switch.doListAction(false);
        };
        return BjlVipViewCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_switch", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrDeskArea", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_tag", [_dec5], {
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

System.register("chunks:///_virtual/label3D.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, MeshRenderer, Component, Common;
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
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "27635ynjl9IWIvNlK1n2L9x", "label3D", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var mChipName = {
        X_100: 100,
        X_1K: 1000,
        X_10K: 10000,
        X_50K: 50000,
        X_100K: 100000,
        X_500K: 500000,
        X_1M: 1000000,
        X_5M: 5000000
      };
      var label3D = exports('label3D', (_dec = ccclass("label3D"), _dec2 = property({
        type: Label
      }), _dec3 = property(), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(label3D, _Component);
        function label3D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "vLabel", _descriptor2, _assertThisInitialized(_this));
          _this.meshRender = null;
          return _this;
        }
        var _proto = label3D.prototype;
        _proto.start = function start() {
          this.vLabel = mChipName[this.node.parent.name];
          this.label.string = Common.ChangeMoneyShow(this.vLabel, 2);
          if (this.label.string.length == 1) {
            this.label.string = " " + this.label.string + " ";
          }
        };
        _proto.update = function update(deltaTime) {
          var _this$meshRender$mate;
          if (!this.node.parent.active) {
            return;
          }
          var spriteFrame = this.label.spriteFrame;
          var texture = spriteFrame.texture;
          this.meshRender = this.node.getComponent(MeshRenderer);
          (_this$meshRender$mate = this.meshRender.material) == null || _this$meshRender$mate.setProperty("mainTexture", texture);
        };
        return label3D;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "vLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/BjlVipGame', 'chunks:///_virtual/BjlVipGame'); 
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