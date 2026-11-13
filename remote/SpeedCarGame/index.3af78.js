System.register("chunks:///_virtual/CarCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpeedCarDef.ts', './SpeedCarModel.ts', './SpeedCarUtils.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, v3, instantiate, MeshRenderer, ParticleSystem, find, tween, Tween, Component, eRunStatus, arrCarIndex, startPosZ, eSound, SpeedCarModel, SpeedCarUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      instantiate = module.instantiate;
      MeshRenderer = module.MeshRenderer;
      ParticleSystem = module.ParticleSystem;
      find = module.find;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      arrCarIndex = module.arrCarIndex;
      startPosZ = module.startPosZ;
      eSound = module.eSound;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;
      cclegacy._RF.push({}, "333c1hC2eJKk7KEOmLci2HW", "CarCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var arrNitrouEffectPos = {
        lanbojini: [v3(-0.25, 2.8, -0.5), v3(0.25, 2.8, -0.5)],
        falali: [v3(-0.85, 2.8, -0.45), v3(0.85, 2.8, -0.45)],
        pajiani: [v3(0, 2.88, 0.159)],
        bujiadi: [v3(-0.528, 2.8, -0.45), v3(0.528, 2.8, -0.45)],
        maikailun: [v3(0, 2.8, 0)]
      };
      var CarCtrl = exports('CarCtrl', (_dec = ccclass("CarCtrl"), _dec2 = menu("game/SpeedCarGame/CarCtrl"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CarCtrl, _Component);
        function CarCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.runCfg = null;
          _this.nitrouTimeList = [];
          //氮气加速时间点列表
          _this.curRunTimes = 0;
          //当前已跑时间
          _this.endRunTimes = 0;
          //
          _this.rankIndex = 0;
          //排名
          _this.totalDistance = 0;
          _this.runStatus = eRunStatus.NONE;
          _this.isPlayNitrogen = false;
          _this.endSpeed = 0;
          return _this;
        }
        var _proto = CarCtrl.prototype;
        // @property()
        // carID = 0;
        _proto.onLoad = function onLoad() {
          var strCarName = arrCarIndex[SpeedCarModel.instance.curTableInfo.carType - 1];
          var nitrouEffectPos = arrNitrouEffectPos[strCarName];
          var Node_partical = this.node.getChildByName("Node_partical");
          var prefabNitrouEffect = SpeedCarUtils.instance.arrPrefab["Node_nitrouEffect"];
          for (var i = 0; i < nitrouEffectPos.length; i++) {
            var newNitrouEffect = instantiate(prefabNitrouEffect);
            newNitrouEffect.position = nitrouEffectPos[i];
            Node_partical.addChild(newNitrouEffect);
          }
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          gts.Debug.Log("===CarCtrl=onEnable==reset=");
        };
        _proto.onDisable = function onDisable() {
          gts.Debug.Log("===CarCtrl=onDisable==reset=");
          CarCtrl.endRun = false;
          this.runStatus = eRunStatus.NONE;
          this.unschedule(this.doRunning);
        };
        _proto.initCarNum = function initCarNum(index) {
          var Node_partical = this.node.getChildByName("Node_partical");
          var Quad_num = SpeedCarUtils.instance.arrPrefab["Quad_num"];
          var Node_num = instantiate(Quad_num);
          Node_partical.addChild(Node_num);
          var mainTexture = SpeedCarUtils.instance.arrCarNumSpriteFrame["" + (index + 1)];
          Node_num.getComponent(MeshRenderer).material.setProperty("mainTexture", mainTexture.texture);
          var cloud = SpeedCarUtils.instance.arrPrefab["cloud"];
          var Node_cloud = instantiate(cloud);
          this.node.addChild(Node_cloud);
        };
        _proto.doRunning = function doRunning(dt) {
          switch (this.runStatus) {
            case eRunStatus.RUNNING:
              {
                this.curRunTimes += dt;
                var nomalLen = 0.5 * this.runCfg.speed * this.curRunTimes * this.curRunTimes;
                var nitrouLen = 0;
                var isNitrou = false;
                for (var _iterator = _createForOfIteratorHelperLoose(this.nitrouTimeList), _step; !(_step = _iterator()).done;) {
                  var nitrouTime = _step.value;
                  if (nitrouTime + this.runCfg.nitrogenTime <= this.curRunTimes) {
                    //已经加速过
                    nitrouLen += this.runCfg.nitrogenTime * this.runCfg.nitrogenSpeed;
                  } else if (this.curRunTimes > nitrouTime) {
                    //正在加速
                    nitrouLen += (this.curRunTimes - nitrouTime) * this.runCfg.nitrogenSpeed;
                    isNitrou = true;
                  } else {
                    break;
                  }
                }
                this.playNitrogen(isNitrou);
                if (isNitrou) {
                  SpeedCarUtils.instance.playSound(eSound.nos);
                }
                var totalLen = nomalLen + nitrouLen;
                if (totalLen > this.totalDistance) {
                  totalLen = this.totalDistance;
                  this.runStatus = eRunStatus.END;
                  this.endRunTimes = 0;
                  this.getEndSpeed();
                }
                this.node.setPosition(this.node.position.x, this.node.position.y, startPosZ + totalLen);
                break;
              }
            case eRunStatus.END:
              {
                if (CarCtrl.endRun) {
                  this.doRunEnd();
                } else {
                  this.endRunTimes += dt;
                  var endDisLen = this.endRunTimes * this.endSpeed;
                  this.node.setPosition(this.node.position.x, this.node.position.y, startPosZ + this.totalDistance + endDisLen);
                  if (this.runCfg.ranking == 10) {
                    CarCtrl.endRun = this.node.position.z > startPosZ + 1003;
                  }
                }
                break;
              }
          }

          // gts.Debug.Log(`==doRunning=ranking=${this.runCfg.ranking}=position=`, this.node.position.z);
        };

        _proto.checkNitrou = function checkNitrou(curTime) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.nitrouTimeList), _step2; !(_step2 = _iterator2()).done;) {
            var nitrouTime = _step2.value;
            if (curTime > nitrouTime && curTime < nitrouTime + this.runCfg.nitrogenTime) {
              return true;
            }
          }
          return false;
        };
        _proto.playNitrogen = function playNitrogen(isPlay) {
          if (isPlay === void 0) {
            isPlay = true;
          }
          if (this.isPlayNitrogen == isPlay) {
            // gts.Debug.Log(`=playNitrogen=isPlay=return=${isPlay}==ranking=${this.runCfg.ranking}`);
            return;
          }

          // gts.Debug.Log(`=playNitrogen=isPlay=${isPlay}==ranking=${this.runCfg.ranking}==`);

          this.isPlayNitrogen = isPlay;
          var Node_partical = this.node.getChildByName("Node_partical");
          for (var _iterator3 = _createForOfIteratorHelperLoose(Node_partical.children), _step3; !(_step3 = _iterator3()).done;) {
            var pNode = _step3.value;
            if (pNode.name != "Quad" && pNode.name != "Quad_num") {
              if (isPlay) {
                for (var _iterator4 = _createForOfIteratorHelperLoose(pNode.children), _step4; !(_step4 = _iterator4()).done;) {
                  var childNode = _step4.value;
                  childNode.getComponent(ParticleSystem).play();
                }
              } else {
                for (var _iterator5 = _createForOfIteratorHelperLoose(pNode.children), _step5; !(_step5 = _iterator5()).done;) {
                  var _childNode = _step5.value;
                  _childNode.getComponent(ParticleSystem).stop();
                }
              }
              // isPlay ? pNode.getComponent(ParticleSystem).play() : pNode.getComponent(ParticleSystem).stop();
            }
          }
        };

        _proto.playCloud = function playCloud(isPlay) {
          if (isPlay === void 0) {
            isPlay = true;
          }
          var cloud_effect = find("cloud/effect", this.node);
          for (var _iterator6 = _createForOfIteratorHelperLoose(cloud_effect.children), _step6; !(_step6 = _iterator6()).done;) {
            var childNode = _step6.value;
            isPlay ? childNode.getComponent(ParticleSystem).play() : childNode.getComponent(ParticleSystem).stop();
          }
        };
        _proto.getEndSpeed = function getEndSpeed() {
          this.endSpeed = this.totalDistance / this.curRunTimes;

          // gts.Debug.Log(`=getEndSpeed=ranking=${this.runCfg.ranking}=endSpeed=${this.endSpeed}=`);
        };

        _proto.doStartRun = function doStartRun(rankIndex, runTimes) {
          var _this2 = this;
          if (runTimes === void 0) {
            runTimes = 0;
          }
          var info = SpeedCarModel.instance.gameResult.info[rankIndex];
          this.rankIndex = rankIndex + 1;
          this.nitrouTimeList = info.nitrogenTime;
          this.runCfg = SpeedCarModel.instance.runCfg[info.index];
          this.runStatus = eRunStatus.RUNNING;
          this.totalDistance = this.runCfg.distance;
          CarCtrl.endRun = false;
          this.curRunTimes = runTimes;
          if (runTimes == 0) {
            this.playCloud();
          }
          this.playNitrogen();
          this.scheduleOnce(function () {
            _this2.playNitrogen(false);
          }, 1);
          var X_houlun = this.node.getChildByName("houlun");
          if (X_houlun) {
            X_houlun.eulerAngles = v3(0, 0, 0);
            tween(X_houlun).by(0.25, {
              eulerAngles: v3(360, 0, 0)
            }).repeatForever().start();
          }
          var X_qianlun = this.node.getChildByName("qianlun");
          if (X_qianlun) {
            X_qianlun.eulerAngles = v3(0, 0, 0);
            tween(X_qianlun).by(0.25, {
              eulerAngles: v3(360, 0, 0)
            }).repeatForever().start();
          }
          this.schedule(this.doRunning);
        }

        /**
         * 复用赛车前恢复到刚实例化时的静止状态。
         * 不重建号码牌、云雾和氮气节点；调用后需由 doStartRun 重新起跑。
         */;
        _proto.resetRun = function resetRun() {
          // 除 doRunning 外，还要取消 doStartRun 里“起跑 1 秒后关闭氮气”的延时，否则会关掉新一次起跑的特效。
          this.unscheduleAllCallbacks();
          this.doRunEnd();
          this.runStatus = eRunStatus.NONE;
          this.curRunTimes = 0;
          this.endRunTimes = 0;
          this.playNitrogen(false);
          this.playCloud(false);
          this.node.setPosition(this.node.position.x, this.node.position.y, startPosZ);
        };
        _proto.doRunEnd = function doRunEnd() {
          this.unschedule(this.doRunning);
          var X_houlun = this.node.getChildByName("houlun");
          if (X_houlun) {
            Tween.stopAllByTarget(X_houlun);
          }
          var X_qianlun = this.node.getChildByName("qianlun");
          if (X_qianlun) {
            Tween.stopAllByTarget(X_qianlun);
          }
        };
        return CarCtrl;
      }(Component), _class2.endRun = false, _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedCarBet_gyh.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpeedCarDef.ts', './EventManager.ts', './SpeedCarModel.ts', './Common.ts', './I18n.ts', './SpeedCarCtrl.ts', './SpeedCarUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, eEvent, eRunStatus, EventManager, SpeedCarModel, Common, i18n, SpeedCarCtrl, SpeedCarUtils;
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
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      SpeedCarCtrl = module.SpeedCarCtrl;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "fd372LCQ5xJ8aaC7wjYWIVT", "SpeedCarBet_gyh", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCarBet_gyh = exports('SpeedCarBet_gyh', (_dec = ccclass("SpeedCarBet_gyh"), _dec2 = menu("game/SpeedCarGame/SpeedCarBet_gyh"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarBet_gyh, _Component);
        function SpeedCarBet_gyh() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_itemBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_itemLabel", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpeedCarBet_gyh.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onUpdateBetInfo, this.onUpdateBetInfo, this);
          this.onUpdateBetInfo();
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdateBetInfo, this.onUpdateBetInfo, this);
          // gts.Debug.Log(`==onDisable==SpeedCarBet_rank=`);
        };

        _proto.onBtnClick = function onBtnClick(event) {
          if (SpeedCarModel.instance.gameStatus != eRunStatus.BET) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          var strName = event.target.name.replace("Node_item_", "");
          var index = parseInt(strName);
          var betIndex = 150 + index + 1;
          if (SpeedCarCtrl.instance.reqBet(SpeedCarModel.instance.curBet, betIndex)) {
            SpeedCarUtils.instance.playBetPress(event.target);
            EventManager.instance.emit(eEvent.onBetFly, event.target);
          }
        };
        _proto.onUpdateBetInfo = function onUpdateBetInfo() {
          for (var i = 0; i < this.Node_itemLabel.children.length; i++) {
            var dataIndex = 150 + i + 1;
            var myBet = SpeedCarModel.instance.myBetInfo ? SpeedCarModel.instance.myBetInfo["" + dataIndex] : 0;
            var totalBet = SpeedCarModel.instance.allBetInfo ? SpeedCarModel.instance.allBetInfo["" + dataIndex] : 0;
            var Node_item = this.Node_itemLabel.children[i];
            if (Node_item) {
              var Label_totalBet = Node_item.getChildByName("Label_totalBet");
              var Label_myBet = Node_item.getChildByName("Label_myBet");
              var Label_rate = this.Node_itemBg.children[i].getChildByName("Label_rate");
              Label_rate.getComponent(Label).string = SpeedCarModel.instance.betAreaRateCfg ? "" + SpeedCarModel.instance.betAreaRateCfg["" + dataIndex] : "0:0";
              Label_totalBet.getComponent(Label).string = totalBet > 0 ? "\u20AB" + Common.ChangeMoneyShow(totalBet, 2) : "";
              SpeedCarUtils.instance.showMyBet(Label_myBet.getComponent(Label), myBet, dataIndex, this.Node_itemBg.children[i]);
            }
          }
        };
        return SpeedCarBet_gyh;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_itemBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_itemLabel", [_dec4], {
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

System.register("chunks:///_virtual/SpeedCarBet_item_lm.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './SpeedCarModel.ts', './Common.ts', './I18n.ts', './SpeedCarCtrl.ts', './EventManager.ts', './SpeedCarDef.ts', './SpeedCarUtils.ts', './I18nLocal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, UIOpacity, find, Label, Component, AutoChangeParent, SpeedCarModel, Common, i18n, SpeedCarCtrl, EventManager, eRunStatus, eEvent, cBundle, SpeedCarUtils, I18nLocal;
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
      UIOpacity = module.UIOpacity;
      find = module.find;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      SpeedCarCtrl = module.SpeedCarCtrl;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      cBundle = module.cBundle;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1f8eaq4+LJCgLKuFijhsUeb", "SpeedCarBet_item_lm", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      // 全场总额在格子里的纵坐标。预制体里是 -40，紧贴下方“我的投注”胶囊（-75，高 36）；上移一点给胶囊留出间距。
      var TOTAL_BET_Y = -28;
      var SpeedCarBet_item_lm = exports('SpeedCarBet_item_lm', (_dec = ccclass("SpeedCarBet_item_lm"), _dec2 = menu("game/SpeedCarGame/SpeedCarBet_item_lm"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarBet_item_lm, _Component);
        function SpeedCarBet_item_lm() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_title", _descriptor3, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = SpeedCarBet_item_lm.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
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

          //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
            }, this);
            this.UpdateUI();
          }
        };
        _proto.onBtnClick = function onBtnClick(event) {
          if (SpeedCarModel.instance.gameStatus != eRunStatus.BET) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          var strName = event.target.name.replace("Node_item_", "");
          var startIndex = 100 + this.item.itemIndex;
          var index = parseInt(strName);
          var betIndex = startIndex + (index < 5 ? index * 10 : index * 10 - 5) + 1;
          if (SpeedCarCtrl.instance.reqBet(SpeedCarModel.instance.curBet, betIndex)) {
            SpeedCarUtils.instance.playBetPress(event.target);
            EventManager.instance.emit(eEvent.onBetFly, event.target);
          }
        }

        //    //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var _this3 = this;
          var strTitle = this.item.itemIndex < 9 ? "titleword_0" + (this.item.itemIndex + 1) : "titleword_" + (this.item.itemIndex + 1);
          // 本地化资源按名字加载，名字就是 strTitle；不经 arrTitleSpriteFrame 取名，
          // 因为进房时列表项的 start 早于 loadRes_icon 完成，那时图集表还是空的。
          I18nLocal.getLocalRes(cBundle, strTitle).then(function (sprFrame) {
            _this3.Sprite_title.spriteFrame = sprFrame;
          });
          var Node_itemBg = find("Node_itemList/Node_itemBg", this.node);
          var startIndex = 100 + this.item.itemIndex;
          for (var i = 0; i < 6; i++) {
            var isHide = this.item.itemIndex >= 5 && i >= 4;
            Node_itemBg.children[i].active = !isHide;
            this.Node_label.children[i].active = !isHide;
            if (!isHide) {
              var dataIndex = startIndex + (i < 5 ? i * 10 : i * 10 - 5) + 1;
              var myBet = SpeedCarModel.instance.myBetInfo ? SpeedCarModel.instance.myBetInfo["" + dataIndex] : 0;
              var totalBet = SpeedCarModel.instance.allBetInfo ? SpeedCarModel.instance.allBetInfo["" + dataIndex] : 0;
              var Node_item = this.Node_label.children[i];
              var Label_totalBet = Node_item.getChildByName("Label_totalBet");
              var Label_myBet = Node_item.getChildByName("Label_myBet");
              var Label_rate = Node_itemBg.children[i].getChildByName("Label_rate");
              if (Label_totalBet.position.y != TOTAL_BET_Y) {
                Label_totalBet.setPosition(Label_totalBet.position.x, TOTAL_BET_Y, 0);
              }
              Label_rate.getComponent(Label).string = SpeedCarModel.instance.betAreaRateCfg ? "" + SpeedCarModel.instance.betAreaRateCfg["" + dataIndex] : "0:0";
              Label_totalBet.getComponent(Label).string = totalBet > 0 ? "\u20AB" + Common.ChangeMoneyShow(totalBet, 2) : "";
              SpeedCarUtils.instance.showMyBet(Label_myBet.getComponent(Label), myBet, dataIndex, Node_itemBg.children[i]);
            }
          }
        };
        _createClass(SpeedCarBet_item_lm, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return SpeedCarBet_item_lm;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_title", [_dec5], {
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

System.register("chunks:///_virtual/SpeedCarBet_item_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './SpeedCarModel.ts', './Common.ts', './EventManager.ts', './SpeedCarDef.ts', './SpeedCarCtrl.ts', './I18n.ts', './SpeedCarUtils.ts', './I18nLocal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, UIOpacity, find, Label, Component, AutoChangeParent, SpeedCarModel, Common, EventManager, eRunStatus, eEvent, cBundle, SpeedCarCtrl, i18n, SpeedCarUtils, I18nLocal;
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
      UIOpacity = module.UIOpacity;
      find = module.find;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      cBundle = module.cBundle;
    }, function (module) {
      SpeedCarCtrl = module.SpeedCarCtrl;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4cc753uPG1D85OUORIc6SIf", "SpeedCarBet_item_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCarBet_item_rank = exports('SpeedCarBet_item_rank', (_dec = ccclass("SpeedCarBet_item_rank"), _dec2 = menu("game/SpeedCarGame/SpeedCarBet_item_rank"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarBet_item_rank, _Component);
        function SpeedCarBet_item_rank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_itemLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_title", _descriptor3, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = SpeedCarBet_item_rank.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
        };
        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {
          var _this2 = this;
          //        //将label节点绑定到label root 并跟随原来节点
          AutoChangeParent.Bind(this.Node_itemLabel, this.content_label, true).OnUpdateNotify(function (dt) {
            _this2.Node_itemLabel.getComponent(UIOpacity).opacity = _this2.node.getComponent(UIOpacity).opacity;
            _this2.Node_itemLabel.active = _this2.node.active;
            _this2.Node_itemLabel.scale = _this2.node.scale;
          }, this);

          //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
            }, this);
            this.UpdateUI();
          }
        };
        _proto.onBtnClick = function onBtnClick(event) {
          if (SpeedCarModel.instance.gameStatus != eRunStatus.BET) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          var strName = event.target.name.replace("Node_item_", "");
          var startIndex = this.item.itemIndex * 10;
          var betIndex = startIndex + 1 + parseInt(strName);
          if (SpeedCarCtrl.instance.reqBet(SpeedCarModel.instance.curBet, betIndex)) {
            SpeedCarUtils.instance.playBetPress(event.target);
            EventManager.instance.emit(eEvent.onBetFly, event.target);
          }
        }

        //    //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var _this3 = this;
          var strTitle = this.item.itemIndex < 9 ? "titleword_0" + (this.item.itemIndex + 1) : "titleword_" + (this.item.itemIndex + 1);
          // 本地化资源按名字加载，名字就是 strTitle；不经 arrTitleSpriteFrame 取名，
          // 因为进房时列表项的 start 早于 loadRes_icon 完成，那时图集表还是空的。
          I18nLocal.getLocalRes(cBundle, strTitle).then(function (sprFrame) {
            _this3.Sprite_title.spriteFrame = sprFrame;
          });
          var Node_itemBg = find("Node_itemList/Node_itemBg", this.node);
          var startIndex = this.item.itemIndex * 10;
          for (var i = 0; i < 10; i++) {
            var dataIndex = startIndex + i + 1;
            var myBet = SpeedCarModel.instance.myBetInfo ? SpeedCarModel.instance.myBetInfo["" + dataIndex] : 0;
            var totalBet = SpeedCarModel.instance.allBetInfo ? SpeedCarModel.instance.allBetInfo["" + dataIndex] : 0;
            var Node_item = this.Node_itemLabel.children[i];
            var Label_totalBet = Node_item.getChildByName("Label_totalBet");
            var Label_myBet = Node_item.getChildByName("Label_myBet");
            var Label_rate = Node_itemBg.children[i].getChildByName("Label_rate");
            Label_rate.getComponent(Label).string = SpeedCarModel.instance.betAreaRateCfg ? "" + SpeedCarModel.instance.betAreaRateCfg["" + dataIndex] : "0:0";
            Label_totalBet.getComponent(Label).string = totalBet > 0 ? "\u20AB" + Common.ChangeMoneyShow(totalBet, 2) : "";
            SpeedCarUtils.instance.showMyBet(Label_myBet.getComponent(Label), myBet, dataIndex, Node_itemBg.children[i]);
          }
          // let tempData: GameDef.IGameResult = this.item.data;
          // this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
        };

        _createClass(SpeedCarBet_item_rank, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return SpeedCarBet_item_rank;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content_label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_itemLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_title", [_dec5], {
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

System.register("chunks:///_virtual/SpeedCarBet_lm.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpeedCarDef.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, eEvent, EventManager;
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
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "21a2dxMuOZGRqtKz0ALjCWZ", "SpeedCarBet_lm", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCarBet_lm = exports('SpeedCarBet_lm', (_dec = ccclass("SpeedCarBet_lm"), _dec2 = menu("game/SpeedCarGame/SpeedCarBet_lm"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarBet_lm, _Component);
        function SpeedCarBet_lm() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpeedCarBet_lm.prototype;
        _proto.start = function start() {
          // this.schedule(() => {
          // this.scrollView_content.setData([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
          // });
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onUpdateBetInfo, this.onUpdateBetInfo, this);
          this.onUpdateBetInfo();
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdateBetInfo, this.onUpdateBetInfo, this);
          // gts.Debug.Log(`==onDisable==SpeedCarBet_rank=`);
        };

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {}
        };
        _proto.onUpdateBetInfo = function onUpdateBetInfo() {
          this.scrollView_content.setData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          this.scrollView_content.refresh();
        };
        return SpeedCarBet_lm;
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

System.register("chunks:///_virtual/SpeedCarBet_lnk.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './SpeedCarDef.ts', './SpeedCarModel.ts', './Common.ts', './I18n.ts', './SpeedCarCtrl.ts', './SpeedCarUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, EventManager, eEvent, eRunStatus, SpeedCarModel, Common, i18n, SpeedCarCtrl, SpeedCarUtils;
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
      EventManager = module.default;
    }, function (module) {
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      SpeedCarCtrl = module.SpeedCarCtrl;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "d91a5s+6vdDuJEXqnVUvOuk", "SpeedCarBet_lnk", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCarBet_lnk = exports('SpeedCarBet_lnk', (_dec = ccclass("SpeedCarBet_lnk"), _dec2 = menu("game/SpeedCarGame/SpeedCarBet_lnk"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarBet_lnk, _Component);
        function SpeedCarBet_lnk() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_itemLabel", _descriptor, _assertThisInitialized(_this));
          _this.curRank = 0;
          return _this;
        }
        var _proto = SpeedCarBet_lnk.prototype;
        /////////////////////////////
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onUpdateBetInfo, this.onUpdateBetInfo, this);
          this.onUpdateBetInfo();
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdateBetInfo, this.onUpdateBetInfo, this);
          // gts.Debug.Log(`==onDisable==SpeedCarBet_rank=`);
        };

        _proto.onToggleClick = function onToggleClick(event) {
          var strName = event.node.name.replace("Toggle_rank_", "");
          this.curRank = parseInt(strName);
          this.onUpdateBetInfo();
        };
        _proto.onBtnClick = function onBtnClick(event) {
          if (SpeedCarModel.instance.gameStatus != eRunStatus.BET) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          var strName = event.target.name.replace("Node_item_", "");
          var betIndex = parseInt(strName);
          if (betIndex < 4) {
            betIndex = 100 + this.curRank + 1 + betIndex * 10;
          } else {
            betIndex += this.curRank * 10 + 1 - 4;
          }
          if (SpeedCarCtrl.instance.reqBet(SpeedCarModel.instance.curBet, betIndex)) {
            SpeedCarUtils.instance.playBetPress(event.target);
            EventManager.instance.emit(eEvent.onBetFly, event.target);
          }
        };
        _proto.setInfo = function setInfo(Node_item_label, dataIndex) {
          if (!Node_item_label) {
            return;
          }
          var myBet = SpeedCarModel.instance.myBetInfo ? SpeedCarModel.instance.myBetInfo["" + dataIndex] : 0;
          var totalBet = SpeedCarModel.instance.allBetInfo ? SpeedCarModel.instance.allBetInfo["" + dataIndex] : 0;
          var Label_totalBet = Node_item_label.getChildByName("Label_totalBet");
          var Label_myBet = Node_item_label.getChildByName("Label_myBet");
          var Label_rate = Node_item_label.getChildByName("Label_rate");
          Label_totalBet.getComponent(Label).string = totalBet > 0 ? "\u20AB" + Common.ChangeMoneyShow(totalBet, 2) : "";
          // 底图格子在相邻的 Node_itemBg 下，与标签格同名。
          var Node_itemBg = Node_item_label.parent.parent.getChildByName("Node_itemBg");
          var cell = Node_itemBg ? Node_itemBg.getChildByName(Node_item_label.name) : null;
          SpeedCarUtils.instance.showMyBet(Label_myBet.getComponent(Label), myBet, dataIndex, cell);
          Label_rate.getComponent(Label).string = SpeedCarModel.instance.betAreaRateCfg ? "" + SpeedCarModel.instance.betAreaRateCfg["" + dataIndex] : "0:0";
        };
        _proto.onUpdateBetInfo = function onUpdateBetInfo() {
          var dataIndex = this.curRank * 10 + 1;
          for (var i = 0; i < 10; i++) {
            var Node_item = this.Node_itemLabel.getChildByName("Node_item_" + (i + 4));
            this.setInfo(Node_item, dataIndex + i);
          }
          dataIndex = 100 + this.curRank + 1;
          for (var _i = 0; _i < 4; _i++) {
            var _Node_item = this.Node_itemLabel.getChildByName("Node_item_" + _i);
            this.setInfo(_Node_item, dataIndex + _i * 10);
          }
        };
        return SpeedCarBet_lnk;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_itemLabel", [_dec3], {
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

System.register("chunks:///_virtual/SpeedCarBet_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './SpeedCarDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, EventManager, eEvent;
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
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f9a57OBrXhKjKDigO8hM+2q", "SpeedCarBet_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCarBet_rank = exports('SpeedCarBet_rank', (_dec = ccclass("SpeedCarBet_rank"), _dec2 = menu("game/SpeedCarGame/SpeedCarBet_rank"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarBet_rank, _Component);
        function SpeedCarBet_rank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpeedCarBet_rank.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onUpdateBetInfo, this.onUpdateBetInfo, this);
          this.onUpdateBetInfo();
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdateBetInfo, this.onUpdateBetInfo, this);
          // gts.Debug.Log(`==onDisable==SpeedCarBet_rank=`);
        };

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {}
        };
        _proto.onUpdateBetInfo = function onUpdateBetInfo() {
          this.scrollView_content.setData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        };
        return SpeedCarBet_rank;
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

System.register("chunks:///_virtual/SpeedCarBet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1e79dDLdR1LBrXyvLG9Ch/3", "SpeedCarBet", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpeedCarBet = exports('SpeedCarBet', (_dec = ccclass('SpeedCarBet'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarBet, _Component);
        function SpeedCarBet() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SpeedCarBet.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return SpeedCarBet;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedCarBtnCheck.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './SpeedCarDef.ts', './SpeedCarModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Canvas, Color, Node, geometry, PhysicsSystem, MeshRenderer, color, sys, UIRenderer, Component, EventManager, eRunStatus, eEvent, SpeedCarModel;
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
      SpeedCarModel = module.SpeedCarModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8f247DtKdRLBZsHQkl26goL", "SpeedCarBtnCheck", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpeedCarBtnCheck = exports('SpeedCarBtnCheck', (_dec = ccclass("SpeedCarBtnCheck"), _dec2 = property(Camera), _dec3 = property(Canvas), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarBtnCheck, _Component);
        function SpeedCarBtnCheck() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canvas", _descriptor2, _assertThisInitialized(_this));
          _this._cur_button = null;
          _this._color1 = Color.BLACK;
          _this._color2 = new Color(5, 29, 127);
          //on
          _this._color3 = new Color(50, 50, 127);
          return _this;
        }
        var _proto = SpeedCarBtnCheck.prototype;
        //press
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          // this.canvas.node.on(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.canvas.node.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          if (SpeedCarModel.instance.isTest) {
            this.canvas.node.on(Node.EventType.MOUSE_UP, this.onMouseUp, this);
          } else {
            this.canvas.node.on(Node.EventType.TOUCH_END, this.onMouseUp, this);
            this.canvas.node.on(Node.EventType.TOUCH_START, this.onMouseDown, this);
          }
        };
        _proto.onDisable = function onDisable() {
          // this.canvas.node.off(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.canvas.node.off(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          if (SpeedCarModel.instance.isTest) {
            this.canvas.node.off(Node.EventType.MOUSE_UP, this.onMouseUp, this);
          } else {
            this.canvas.node.off(Node.EventType.TOUCH_END, this.onMouseUp, this);
            this.canvas.node.off(Node.EventType.TOUCH_START, this.onMouseDown, this);
          }
        };
        _proto.onMouseMove = function onMouseMove(event) {
          var outRay = new geometry.Ray();
          this.camera.screenPointToRay(event.getLocationX(), event.getLocationY(), outRay);
          if (PhysicsSystem.instance.raycastClosest(outRay)) {
            // const raycastResult = PhysicsSystem.instance.raycastResults.find((v) => {
            //     // return v.collider.getComponent(MoveCameraOnButtonClick);
            //     return v;
            // });
            var raycastResult = PhysicsSystem.instance.raycastClosestResult;
            var castCollider = raycastResult.collider;
            if (castCollider) {
              gts.Debug.Log("==onMouseMove=00000000000=castCollider=");
              if (castCollider.node.name.match("X_jinshu") || castCollider.node.name == "X_lunpan" || castCollider.node.name == "X_lunpan2" || castCollider.node == this._cur_button) {
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

          if (SpeedCarModel.instance.gameStatus == eRunStatus.NONE) {
            EventManager.instance.emit(eEvent.onStopCameraCruise, true);
          }
        };
        _proto.onMouseDown = function onMouseDown(event) {
          var outRay = new geometry.Ray();
          this.camera.screenPointToRay(event.getLocationX(), event.getLocationY(), outRay);
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

          if (node.parent.name.match("Node_touchArea")) ;else if (node.name.match("Quad_")) {
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

          if (node.parent.name.match("Node_touchArea")) ;else if (node.name.match("Quad_")) {
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
          if (node.parent.name.match("Node_touchArea")) ;else if (node.name.match("Quad_")) {
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
        return SpeedCarBtnCheck;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
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

System.register("chunks:///_virtual/SpeedCarCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "c3ca47gVkpCkpQQCBLfeHe/", "SpeedCarCamera", undefined);
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
      var SpeedCarCamera = exports('SpeedCarCamera', (_dec = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarCamera, _Component);
        function SpeedCarCamera() {
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
        var _proto = SpeedCarCamera.prototype;
        _proto.onLoad = function onLoad() {
          Vec3.copy(this._euler, this.node.eulerAngles);
          Vec3.copy(this._position, this.node.position);
        }

        // 场景里该调试相机以禁用状态挂在相机节点上，而 onLoad 不受 enabled 影响；
        // 全局输入只能随 onEnable 注册，否则每次按下都会触发 requestPointerLock。
        ;

        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        };
        _proto.onDisable = function onDisable() {
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
        return SpeedCarCamera;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec], {
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

System.register("chunks:///_virtual/SpeedCarChangeRoom_item.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './SpeedCarModel.ts', './SpeedCarCtrl.ts', './SpeedCarDef.ts', './I18nLocal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, instantiate, v3, Component, AutoChangeParent, SpeedCarModel, SpeedCarCtrl, cBundle, I18nLocal;
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
      instantiate = module.instantiate;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      SpeedCarCtrl = module.SpeedCarCtrl;
    }, function (module) {
      cBundle = module.cBundle;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "ffd44frDVBEKZzPuTsz7HBb", "SpeedCarChangeRoom_item", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCarChangeRoom_item = exports('SpeedCarChangeRoom_item', (_dec = ccclass("SpeedCarChangeRoom_item"), _dec2 = menu("game/SpeedCarGame/SpeedCarChangeRoom_item"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarChangeRoom_item, _Component);
        function SpeedCarChangeRoom_item() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_carLogo", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_cityName", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_players", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_time", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_dxFrame", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_dsFrame", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemResult", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrDXDSpriteFrame", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrCarLogoSpriteFrame", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrCityNameSpriteFrame", _descriptor12, _assertThisInitialized(_this));
          // 胡志明市，布加迪：45秒
          // 河内，兰博基尼：75秒
          // 顺化，法拉利：3分钟
          // 岘港，帕加尼：2分钟
          // 广南，迈凯伦：5分钟
          _this._gtItem = null;
          return _this;
        }
        var _proto = SpeedCarChangeRoom_item.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
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

          //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
            }, this);
            this.UpdateUI();
          }
        };
        _proto.onBtnClick = function onBtnClick(event) {
          SpeedCarModel.instance.changeTableInfo = this.item.data;
          if (SpeedCarModel.instance.changeTableInfo.tableId == SpeedCarModel.instance.curTableInfo.tableId) {
            return;
          }
          SpeedCarCtrl.instance.reqExit();
        }

        //    //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var _this3 = this;
          var roomInfo = this.item.data;
          var history = SpeedCarModel.instance.historyList[roomInfo.tableId];
          if (roomInfo.duration % 60 == 0) {
            var min = Math.floor(roomInfo.duration / 60);
            this.Label_time.getComponent(Label).string = min + "ph\xFAt";
          } else {
            this.Label_time.getComponent(Label).string = roomInfo.duration + "gi\xE2y";
          }
          this.Label_players.getComponent(Label).string = "" + roomInfo.playerNum;
          var roomIndex = this.item.itemIndex;
          this.Sprite_carLogo.spriteFrame = this.arrCarLogoSpriteFrame[roomIndex];
          // this.Sprite_cityName.spriteFrame = this.arrCityNameSpriteFrame[roomIndex];
          I18nLocal.getLocalRes(cBundle, this.arrCityNameSpriteFrame[roomIndex].name).then(function (sprFrame) {
            _this3.Sprite_cityName.spriteFrame = sprFrame;
          });
          var dxList = [];
          var dsList = [];
          var arrDx = [];
          var arrDs = [];
          if (history) {
            for (var i = 0; i < history.length; i++) {
              var hInfo = history[i];
              var gyh = hInfo.result[0] + hInfo.result[1];
              var isDa = gyh > 11;
              var isDan = gyh % 2 != 0;
              if (i == 0) {
                arrDx.push(isDa);
                arrDs.push(isDan);
              } else {
                if (arrDx[0] == isDa) {
                  arrDx.push(isDa);
                } else {
                  dxList.push(arrDx.slice());
                  arrDx = [];
                  arrDx.push(isDa);
                }
                if (arrDs[0] == isDan) {
                  arrDs.push(isDan);
                } else {
                  dsList.push(arrDs.slice());
                  arrDs = [];
                  arrDs.push(isDan);
                }
              }
            }
          }

          //dx
          dxList = dxList.slice(0, 10);
          var itemIndex = 0;
          for (var _i = 0; _i < dxList.length; _i++) {
            var _arrDx = dxList[_i];
            for (var j = 0; j < _arrDx.length; j++) {
              var _isDa = _arrDx[j];
              var itemResult = this.Node_dxFrame.getChildByName("itemResult_" + itemIndex);
              if (!itemResult) {
                itemResult = instantiate(this.itemResult);
                itemResult.name = "itemResult_" + itemIndex;
                this.Node_dxFrame.addChild(itemResult);
              }
              itemResult.getComponent(Sprite).spriteFrame = _isDa ? this.arrDXDSpriteFrame[0] : this.arrDXDSpriteFrame[1];
              var posX = -153 + _i * 34;
              var posY = 85 - j * 34;
              if (j > 5) {
                posX += (j - 5) * 34;
                posY = 85 - 5 * 34;
              }
              itemResult.active = posX < 5 * 34;
              itemResult.position = v3(posX, posY, 0);
              itemIndex++;
            }
          }
          for (var _i2 = itemIndex; _i2 < this.Node_dxFrame.children.length; _i2++) {
            this.Node_dxFrame.children[_i2].active = false;
          }

          //ds
          dsList = dsList.slice(0, 10);
          itemIndex = 0;
          for (var _i3 = 0; _i3 < dsList.length; _i3++) {
            var _arrDs = dsList[_i3];
            for (var _j = 0; _j < _arrDs.length; _j++) {
              var _isDan = _arrDs[_j];
              var _itemResult = this.Node_dsFrame.getChildByName("itemResult_" + itemIndex);
              if (!_itemResult) {
                _itemResult = instantiate(this.itemResult);
                _itemResult.name = "itemResult_" + itemIndex;
                this.Node_dsFrame.addChild(_itemResult);
              }
              _itemResult.active = true;
              _itemResult.getComponent(Sprite).spriteFrame = _isDan ? this.arrDXDSpriteFrame[2] : this.arrDXDSpriteFrame[3];
              var _posX = -153 + _i3 * 34;
              var _posY = 85 - _j * 34;
              if (_j > 5) {
                _posX += (_j - 5) * 34;
                _posY = 85 - 5 * 34;
              }
              _itemResult.position = v3(_posX, _posY, 0);
              itemIndex++;
            }
          }
          for (var _i4 = itemIndex; _i4 < this.Node_dsFrame.children.length; _i4++) {
            this.Node_dsFrame.children[_i4].active = false;
          }
        };
        _createClass(SpeedCarChangeRoom_item, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return SpeedCarChangeRoom_item;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_carLogo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_cityName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_players", [_dec7], {
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_dxFrame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_dsFrame", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itemResult", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "arrDXDSpriteFrame", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "arrCarLogoSpriteFrame", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "arrCityNameSpriteFrame", [_dec14], {
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

System.register("chunks:///_virtual/SpeedCarCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './SpeedCarModel.ts', './I18n.ts', './ViewManager.ts', './SpeedCarDef.ts', './SpeedCarUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, SpeedCarModel, i18n, ViewManager, eProto, eEvent, SpeedCarUtils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
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
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "4714bWMa4NBuKEdh58BLzaq", "SpeedCarCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpeedCarCtrl = exports('SpeedCarCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(SpeedCarCtrl, _GameDef$BaseCtrl);
        function SpeedCarCtrl() {
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
          _this.betAmountBack = 0;
          _this._configManager = ConfigManager.instance;
          _this._eventManager = EventManager.instance;
          _this._netManager = NetManager.instance;
          _this._dataManager = DataManager.instance;
          _this._model = SpeedCarModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = SpeedCarCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete SpeedCarCtrl._instance;
          SpeedCarCtrl._instance = null;
          SpeedCarModel.destroy();
          SpeedCarUtils.destroy();
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
        _proto.reqBet = function reqBet(betAmount, pos) {
          if (betAmount === void 0) {
            betAmount = 1000;
          }
          if (!SpeedCarModel.instance.runCfg) {
            return false;
          }
          if (betAmount > SpeedCarModel.instance.curBalance) {
            Common.showTip(i18n.lang["10001"]);
            return false;
          }

          // if (SpeedCarModel.instance.curBet < SpeedCarModel.instance.gameInfo.minBet) {
          //     let tip = Common.strFormat(i18n.lang["10063"], Common.ChangeMoneyShow(SpeedCarModel.instance.gameInfo.minBet, 2));
          //     Common.showTip(tip);
          //     return false;
          // }

          SpeedCarModel.instance.curBalance -= betAmount;
          this.betAmountBack = betAmount;
          this.isReqBet = true;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + betAmount,
            pos: "" + pos
          });
          return true;
        }
        /**请求突出房间 */;
        _proto.reqTableList = function reqTableList() {
          NetManager.instance.sendOnlineData(eProto.HD_GetTableList, {});
        }

        /**请求突出房间 */;
        _proto.reqEnter = function reqEnter(tableId) {
          NetManager.instance.sendOnlineData(eProto.HD_Enter, {
            tableId: tableId
          });
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_QuitTable, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "racing"
          });
        }

        /**请求历史记录 */;
        _proto.reqHistory = function reqHistory(tableId) {
          NetManager.instance.sendOnlineData(eProto.HD_History, {
            tableId: tableId,
            size: "50"
          });
        }

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
            RecordType: "racing"
          });
        }

        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // 每个包都会经过这里（HD_BetList 每秒一次），只记录 cmd，不序列化整包。
          gts.Debug.LogWarr("==onRecvData==" + data.cmd);
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
                  if (this.betAmountBack > 0) {
                    SpeedCarModel.instance.curBalance += this.betAmountBack;
                  }
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
                SpeedCarModel.instance.roomInfoList = data.Data;
                SpeedCarModel.instance.roomInfoList.sort(function (a, b) {
                  return a.carType - b.carType;
                });
                break;
              }
            case eProto.HD_Enter:
              {
                var hdInfo = data.Data;
                SpeedCarModel.instance.runCfg = hdInfo.conf;
                SpeedCarModel.instance.gameStatus = hdInfo.state;
                SpeedCarModel.instance.countDown = hdInfo.countDown;
                SpeedCarModel.instance.gemeIssue = hdInfo.issue;
                SpeedCarModel.instance.myBetInfo = hdInfo.bet || {};
                SpeedCarModel.instance.allBetInfo = hdInfo.posSumAmount || {};
                SpeedCarModel.instance.gameResult = hdInfo.lastResult;
                SpeedCarModel.instance.gameResult.issue = SpeedCarModel.instance.gemeIssue;
                SpeedCarModel.instance.playerNum = hdInfo.playerNum;
                SpeedCarModel.instance.betAreaRateCfg = hdInfo.odds;
                // SpeedCarModel.instance.gameInfo.records = SpeedCarModel.instance.gameInfo.records || [];

                Common.closeWait();
                break;
              }
            case eProto.HD_History:
              {
                var tableID = data.Data.tableId;
                var historyList = [];
                for (var i = 0; i < data.Data.history.length; i++) {
                  historyList[i] = JSON.parse(data.Data.history[i]);
                }
                SpeedCarModel.instance.historyList[tableID] = historyList;
                break;
              }
            case eProto.HD_QuitTable:
              {
                if (SpeedCarModel.instance.changeTableInfo) {
                  SpeedCarModel.instance.curTableInfo = SpeedCarModel.instance.changeTableInfo;
                  SpeedCarModel.instance.changeTableInfo = null;
                  SpeedCarModel.instance.clearGameData();
                  this.reqEnter(SpeedCarModel.instance.curTableInfo.tableId);
                  Common.showWait();
                } else {
                  EventManager.instance.emit(eEvent.onLoadHall);
                }
                break;
              }
            case eProto.HD_Checkout:
              {
                SpeedCarModel.instance.checkout = data.Data;
                break;
              }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                emitData = data.Data;
                break;
              }
            case eProto.HD_BetList:
              {
                var allBetInfo = data.Data;
                SpeedCarModel.instance.allBetInfo = allBetInfo.posSumAmount;
                SpeedCarModel.instance.playerNum = allBetInfo.playerNum;
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                SpeedCarModel.instance.gameStatus = data.Data.tableState;
                SpeedCarModel.instance.countDown = data.Data.countDown;
                SpeedCarModel.instance.gemeIssue = data.Data.issue;
                break;
              }
            case eProto.HD_OpenResult:
              {
                SpeedCarModel.instance.gameResult = data.Data;
                SpeedCarModel.instance.gameResult.issue = SpeedCarModel.instance.gemeIssue;
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
                gts.Debug.LogWarr("==SpeedCar=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (SpeedCarModel.instance.curBalance > 0) {
                  SpeedCarModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                SpeedCarModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==SpeedCar=pushWallet==" + _HD_Wallet.VndBalance);
                if (SpeedCarModel.instance.curBalance > 0) {
                  SpeedCarModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                SpeedCarModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        return SpeedCarCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedCardChangeRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpeedCarModel.ts', './SpeedCarCtrl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Component, SpeedCarModel, SpeedCarCtrl;
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
      Component = module.Component;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      SpeedCarCtrl = module.SpeedCarCtrl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "697425O+I5Hs4c6poqF18nm", "SpeedCardChangeRoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCardChangeRoom = exports('SpeedCardChangeRoom', (_dec = ccclass("SpeedCardChangeRoom"), _dec2 = menu("game/SpeedCarGame/SpeedCardChangeRoom"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCardChangeRoom, _Component);
        function SpeedCardChangeRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_list", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpeedCardChangeRoom.prototype;
        _proto.onLoad = function onLoad() {}

        ///////////////////////////
        ;

        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          for (var _iterator = _createForOfIteratorHelperLoose(SpeedCarModel.instance.roomInfoList), _step; !(_step = _iterator()).done;) {
            var roomInfo = _step.value;
            SpeedCarCtrl.instance.reqHistory(roomInfo.tableId);
          }
        };
        _proto.onDisable = function onDisable() {
          // gts.Debug.Log(`==onDisable==SpeedCarBet_rank=`);
        }
        // onToggleClick(event) {
        //     switch (event.node.name) {
        //         case "Toggle_rank": {
        //             SpeedCarModel.instance.curPathType = SpeedCarDef.ePathType.RANK;
        //             break;
        //         }
        //         case "Toggle_dx": {
        //             SpeedCarModel.instance.curPathType = SpeedCarDef.ePathType.DX;
        //             break;
        //         }
        //         case "Toggle_ds": {
        //             SpeedCarModel.instance.curPathType = SpeedCarDef.ePathType.DS;
        //             break;
        //         }
        //         case "Toggle_gyh": {
        //             SpeedCarModel.instance.curPathType = SpeedCarDef.ePathType.GYH;
        //             break;
        //         }
        //     }

        //     this.onUpdatePath();
        // }
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "mask":
            case "Button_close":
              {
                this.node.active = false;
                break;
              }
          }
        };
        _proto.onUpdatePath = function onUpdatePath() {
          this.scrollView_list.setData(SpeedCarModel.instance.roomInfoList);

          // let historyList = SpeedCarModel.instance.historyList[SpeedCarModel.instance.curTableInfo.tableId];
          // //@ts-ignore
          // this.ScrollView_list_gyh.node.active = SpeedCarModel.instance.curPathType == SpeedCarDef.ePathType.GYH;
          // //@ts-ignore
          // this.scrollView_list.node.active = SpeedCarModel.instance.curPathType != SpeedCarDef.ePathType.GYH;
          // if (historyList) {
          //     if (SpeedCarModel.instance.curPathType == SpeedCarDef.ePathType.GYH) {
          //         this.ScrollView_list_gyh.setData(historyList);
          //     } else {
          //         this.scrollView_list.setData(historyList);
          //     }
          // }
        };

        return SpeedCardChangeRoom;
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

System.register("chunks:///_virtual/SpeedCarDef.ts", ['cc'], function (exports) {
  var cclegacy, v3, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c100cWAPFBNnLv8MiIOKod7", "SpeedCarDef", undefined);
      var cBundle = exports('cBundle', "SpeedCarGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_GetTableList"] = "racing/HD_GetTableList";
        eProto["HD_Enter"] = "racing/HD_Enter";
        eProto["HD_SwitchRoomState"] = "racing/HD_SwitchRoomState";
        eProto["HD_OpenResult"] = "racing/HD_OpenResult";
        eProto["HD_Checkout"] = "racing/HD_Checkout";
        eProto["HD_Bet"] = "racing/HD_Bet";
        eProto["HD_BetList"] = "racing/HD_BetList";
        eProto["HD_History"] = "racing/HD_History";
        eProto["HD_QuitTable"] = "racing/HD_QuitTable";
        eProto["Record"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({}));

      // 1-100:名次 101-110:名次大 111-120:名次小 121-130:名次单 131-140:名次双 141-145:龙 146-150:虎 151:冠亚大 152:冠亚小 153:冠亚单 154:冠亚双 155-171:冠亚之和

      var eBetType = exports('eBetType', {
        LM: 1,
        RANK: 2,
        GYH: 3,
        LNK: 4
      }); //快捷
      var ePathType = exports('ePathType', {
        RANK: 1,
        DX: 2,
        DS: 3,
        GYH: 4
      }); //冠亚和
      var DISW = 0.38;
      var eConstDef = exports('eConstDef', {
        stepStartPos: v3(0, 1.4, 0),
        disW: DISW,
        disH: Math.sqrt(DISW * DISW * 0.75) //0.75  0.45
      });

      var arrBetList = exports('arrBetList', [10000, 50000, 100000, 500000, 1000000, 5000000, 10000000]);
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        BET: 2,
        RUNNING: 3,
        END: 4,
        RESULT: 5
      });
      var startPosZ = exports('startPosZ', -531.187439);
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
        eEvent["onStatusBet"] = "onStatusBet";
        eEvent["onRunStart"] = "onRunStart";
        eEvent["onRunEnd"] = "onRunEnd";
        eEvent["onGameEnd"] = "onGameEnd";
        eEvent["onLoadCar"] = "onLoadCar";
        eEvent["onCarReady"] = "onCarReady";
        eEvent["onUpdateBetInfo"] = "onUpdateBetInfo";
        eEvent["onBetFly"] = "onBetFly";
        eEvent["onUpdateRank"] = "onUpdateRank";
        eEvent["onUpdatePath"] = "onUpdatePath";
        eEvent["onUpdateGold"] = "onUpdateGold";
        eEvent["onUpdateRecord"] = "onUpdateRecord";
        eEvent["onBigWin"] = "onBigWin";
        eEvent["onUpdateStep"] = "onUpdateStep";
        eEvent["onGmaeViewStart"] = "onGmaeViewStart";
        eEvent["onDoSpeedCarFly"] = "onDoSpeedCarFly";
        eEvent["onTestClick"] = "onTestClick";
        eEvent["onWaitCameraCruise"] = "onWaitCameraCruise";
        eEvent["onStopCameraCruise"] = "onStopCameraCruise";
        eEvent["onMouseMoveIn"] = "onMouseMoveIn";
        eEvent["onMouseMoveOut"] = "onMouseMoveOut";
        eEvent["onMouseDown"] = "onMouseDown";
        eEvent["onMouseClick"] = "onMouseClick";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        start: "sound/start",
        countdown: "sound/countdown",
        engine1: "sound/engine1",
        engine2: "sound/engine2",
        nos: "sound/nos",
        end: "sound/end"
      });
      // 胡志明市，布加迪：45秒
      // 河内，兰博基尼：75秒
      // 岘港，帕加尼：2分钟
      // 顺化，法拉利：3分钟
      // 广南，迈凯伦：5分钟

      var arrCarIndex = exports('arrCarIndex', ["bujiadi", "lanbojini", "pajiani", "falali", "maikailun"]);
      // export const arrCarIndex = ["bujiadi", "lanbojini", "pajiani", "falali", "maikailun"];
      var eCarMap = exports('eCarMap', {
        bujiadi: "huZhiMing",
        lanbojini: "heNei",
        pajiani: "jianGang",
        falali: "shunHua",
        maikailun: "guangnan"
      }); //广南

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedCardPath_item_gyh.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, SpriteFrame, UIOpacity, find, Sprite, Component, AutoChangeParent;
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
      find = module.find;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "22007BTowZBDbjhPNJtrmfY", "SpeedCardPath_item_gyh", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCardPath_item_gyh = exports('SpeedCardPath_item_gyh', (_dec = ccclass("SpeedCardPath_item_gyh"), _dec2 = menu("game/SpeedCarGame/SpeedCardPath_item_gyh"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCardPath_item_gyh, _Component);
        function SpeedCardPath_item_gyh() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "issue", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "time_scond", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_list", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor6, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = SpeedCardPath_item_gyh.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
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

          //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
            }, this);
            this.UpdateUI();
          }
        }

        //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var dataInfo = this.item.data;
          this.issue.string = "" + dataInfo.issue;
          // let min = Math.floor(SpeedCarModel.instance.curTableInfo.betTime / 60);
          // let strMin = min < 10 ? `0${min}` : `${min}`;
          // let sec = SpeedCarModel.instance.curTableInfo.betTime % 60;
          // let strSec = sec < 10 ? `0${sec}` : `${sec}`;
          // this.time_scond.string = `${strMin}:${strSec}`;

          var gyh = dataInfo.result[0] + dataInfo.result[1];
          var isDa = gyh > 11;
          var isDan = gyh % 2 != 0;
          var Label_gyh = find("item_gyh/Label_gyh", this.Node_list);
          Label_gyh.getComponent(Label).string = "" + gyh;
          var item_dx = this.Node_list.getChildByName("item_dx");
          var item_ds = this.Node_list.getChildByName("item_ds");
          item_dx.getComponent(Sprite).spriteFrame = isDa ? this.arrSpriteFrame[0] : this.arrSpriteFrame[1];
          item_ds.getComponent(Sprite).spriteFrame = isDan ? this.arrSpriteFrame[2] : this.arrSpriteFrame[3];
          for (var i = 0; i < 5; i++) {
            var rankItem = this.Node_list.getChildByName("item_lh_" + i);
            var isLong = dataInfo.result[i] > dataInfo.result[9 - i];
            rankItem.getComponent(Sprite).spriteFrame = isLong ? this.arrSpriteFrame[4] : this.arrSpriteFrame[5];
          }
        };
        _createClass(SpeedCardPath_item_gyh, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return SpeedCardPath_item_gyh;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "issue", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "time_scond", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_list", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrSpriteFrame", [_dec8], {
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

System.register("chunks:///_virtual/SpeedCardPath_item_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './SpeedCarModel.ts', './SpeedCarDef.ts', './SpeedCarUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, SpriteFrame, UIOpacity, Sprite, Component, AutoChangeParent, SpeedCarModel, ePathType, SpeedCarUtils;
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
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      ePathType = module.ePathType;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "4f6daP2Hj1EHqUYcYiwfuOP", "SpeedCardPath_item_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCardPath_item_rank = exports('SpeedCardPath_item_rank', (_dec = ccclass("SpeedCardPath_item_rank"), _dec2 = menu("game/SpeedCarGame/SpeedCardPath_item_rank"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCardPath_item_rank, _Component);
        function SpeedCardPath_item_rank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "issue", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "time_scond", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_list", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor6, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = SpeedCardPath_item_rank.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
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

          //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
            }, this);
            this.UpdateUI();
          }
        }

        //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var dataInfo = this.item.data;
          this.issue.string = "" + dataInfo.issue;
          // let min = Math.floor(SpeedCarModel.instance.curTableInfo.betTime / 60);
          // let strMin = min < 10 ? `0${min}` : `${min}`;
          // let sec = SpeedCarModel.instance.curTableInfo.betTime % 60;
          // let strSec = sec < 10 ? `0${sec}` : `${sec}`;
          // this.time_scond.string = `${strMin}:${strSec}`;

          switch (SpeedCarModel.instance.curPathType) {
            case ePathType.RANK:
              {
                this.UpdateUI_rank();
                break;
              }
            case ePathType.DX:
              {
                this.UpdateUI_dx();
                break;
              }
            case ePathType.DS:
              {
                this.UpdateUI_ds();
                break;
              }
          }
        };
        _proto.UpdateUI_rank = function UpdateUI_rank() {
          var dataInfo = this.item.data;
          for (var i = 0; i < dataInfo.result.length; i++) {
            var carIndex = dataInfo.result[i];
            var rankItem = this.Node_list.getChildByName("item_" + i);
            var strFrame = carIndex < 10 ? "icon_haoma_0" + carIndex : "icon_haoma_" + carIndex;
            rankItem.getComponent(Sprite).spriteFrame = SpeedCarUtils.instance.arrCarTagSpriteFrame[strFrame];
          }
        };
        _proto.UpdateUI_dx = function UpdateUI_dx() {
          var dataInfo = this.item.data;
          for (var i = 0; i < dataInfo.result.length; i++) {
            var carIndex = dataInfo.result[i];
            var rankItem = this.Node_list.getChildByName("item_" + i);
            rankItem.getComponent(Sprite).spriteFrame = carIndex > 5 ? this.arrSpriteFrame[0] : this.arrSpriteFrame[1];
          }
        };
        _proto.UpdateUI_ds = function UpdateUI_ds() {
          var dataInfo = this.item.data;
          for (var i = 0; i < dataInfo.result.length; i++) {
            var carIndex = dataInfo.result[i];
            var rankItem = this.Node_list.getChildByName("item_" + i);
            rankItem.getComponent(Sprite).spriteFrame = carIndex % 2 != 0 ? this.arrSpriteFrame[2] : this.arrSpriteFrame[3];
          }
        };
        _createClass(SpeedCardPath_item_rank, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return SpeedCardPath_item_rank;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "issue", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "time_scond", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_list", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrSpriteFrame", [_dec8], {
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

System.register("chunks:///_virtual/SpeedCardPath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpeedCarModel.ts', './SpeedCarDef.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Layout, Component, SpeedCarModel, eEvent, ePathType, EventManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Layout = module.Layout;
      Component = module.Component;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      eEvent = module.eEvent;
      ePathType = module.ePathType;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "e2f267vZc1PnrZkGh9fILQG", "SpeedCardPath", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCardPath = exports('SpeedCardPath', (_dec = ccclass("SpeedCardPath"), _dec2 = menu("game/SpeedCarGame/SpeedCardPath"), _dec3 = property(gts.List), _dec4 = property(gts.List), _dec5 = property(Layout), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCardPath, _Component);
        function SpeedCardPath() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_list", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_list_gyh", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ToggleGroup_type", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpeedCardPath.prototype;
        ///////////////////////////
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onUpdatePath, this.onUpdatePath, this);
          //
          SpeedCarModel.instance.curPathType = ePathType.RANK;
          this.onUpdatePath();
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdatePath, this.onUpdatePath, this);
          // gts.Debug.Log(`==onDisable==SpeedCarBet_rank=`);
        };

        _proto.onToggleClick = function onToggleClick(event) {
          switch (event.node.name) {
            case "Toggle_rank":
              {
                SpeedCarModel.instance.curPathType = ePathType.RANK;
                break;
              }
            case "Toggle_dx":
              {
                SpeedCarModel.instance.curPathType = ePathType.DX;
                break;
              }
            case "Toggle_ds":
              {
                SpeedCarModel.instance.curPathType = ePathType.DS;
                break;
              }
            case "Toggle_gyh":
              {
                SpeedCarModel.instance.curPathType = ePathType.GYH;
                break;
              }
          }
          this.onUpdatePath();
        };
        _proto.onUpdatePath = function onUpdatePath() {
          var historyList = SpeedCarModel.instance.historyList[SpeedCarModel.instance.curTableInfo.tableId];

          //@ts-ignore
          this.ScrollView_list_gyh.node.active = SpeedCarModel.instance.curPathType == ePathType.GYH;
          //@ts-ignore
          this.scrollView_list.node.active = SpeedCarModel.instance.curPathType != ePathType.GYH;
          if (historyList) {
            if (SpeedCarModel.instance.curPathType == ePathType.GYH) {
              this.ScrollView_list_gyh.setData(historyList);
            } else {
              this.scrollView_list.setData(historyList);
            }
          }
        };
        return SpeedCardPath;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_list", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_list_gyh", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ToggleGroup_type", [_dec5], {
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

System.register("chunks:///_virtual/SpeedCardRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './Common.ts', './ConfigManager.ts', './NetManager.ts', './DataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, find, view, v3, Label, instantiate, color, Component, EventManager, Common, ConfigManager, NetManager, DataManager, UserKey;
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
      find = module.find;
      view = module.view;
      v3 = module.v3;
      Label = module.Label;
      instantiate = module.instantiate;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "0fbf7uQs6pDjZzJwkuQbscr", "SpeedCardRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCardRecord = exports('default', (_dec = ccclass("SpeedCardRecord"), _dec2 = menu("game/SpeedCarGame/SpeedCardRecord"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCardRecord, _Component);
        function SpeedCardRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_item", _descriptor2, _assertThisInitialized(_this));
          _this._gameType = void 0;
          _this._curPage = 1;
          _this._pageSize = 6;
          _this._lastPage = 1;
          _this.next_btn = null;
          _this.before_btn = null;
          return _this;
        }
        var _proto = SpeedCardRecord.prototype;
        _proto.onLoad = function onLoad() {
          this.next_btn = find("bg/next_btn", this.node);
          this.before_btn = find("bg/before_btn", this.node);
        };
        _proto.start = function start() {
          var size = view.getVisibleSize();
          if (!Common.checkStandard()) {
            this.node.scale = v3(750 / 1080, 750 / 1080, 1);
          }
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
        };
        _proto.setGameType = function setGameType(gameType, pageSize) {
          if (pageSize === void 0) {
            pageSize = 8;
          }
          this._gameType = gameType;
          this._pageSize = pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: 0,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onBefore = function onBefore() {
          this._lastPage = this._curPage;

          //        //上一页
          this._curPage = this._curPage - 1;
          if (this._curPage < 1) {
            this._curPage = 1;
          }
          var start = (this._curPage - 1) * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage = this._curPage + 1;
          var start = (this._curPage - 1) * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.showRecordLayerByPage = function showRecordLayerByPage(data) {
          if (!data || !data.BetRecord || data.BetRecord.length == 0) {
            this._curPage = this._lastPage;
            this.next_btn.active = false;
            return;
          }
          find("bg/content_bg/page", this.node).getComponent(Label).string = "Page:" + this._curPage;
          this.before_btn.active = this._curPage != 1;
          this.next_btn.active = data.NextPage;
          gts.Debug.Log("=Record dataList=" + JSON.stringify(data));
          this.content.removeAllChildren();
          var dataList = data.BetRecord;
          for (var i = 0; i < dataList.length; ++i) {
            var item = instantiate(this.node_item);
            item.active = true;
            item.parent = this.content;
            var sdata = dataList[i];
            var bg = find("bg", item);
            bg.active = i % 2 == 1;
            var date = Common.getTimeFormat(sdata.CreateAt);
            item.getChildByName("bg").active = i % 2 == 1;
            item.getChildByName("time_date").getComponent(Label).string = date.date;
            item.getChildByName("time_scond").getComponent(Label).string = date.time;
            item.getChildByName("winNum").getComponent(Label).string = Common.numFormat(sdata.Income);
            if (sdata.Income > 0) {
              item.getChildByName("winNum").getComponent(Label).string = "+" + item.getChildByName("winNum").getComponent(Label).string;
            }
            item.getChildByName("winNum").getComponent(Label).color = sdata.Income > 0 ? color(0xff, 0, 0, 255) : color(0x68, 0xf5, 0x01, 255);
            item.getChildByName("touzhu_num").getComponent(Label).string = Common.numFormat(sdata.BetAmount);

            //            //改为开奖结果
            var strResult = Common.getRecordResult(sdata);
            item.getChildByName("yue_num").getComponent(Label).string = sdata.GameType == "cardLieng" ? "-" : strResult;
            item.getChildByName("platform").getComponent(Label).string = DataManager.instance.getUserDataForKey(UserKey.PLATFORM) || "";
            item.getChildByName("gameId").getComponent(Label).string = sdata.GameNo;
          }
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.getInstance().protocolHall.getRecord) {
            if (data.Data.RecordType == this._gameType) {
              this.showRecordLayerByPage(data.Data);
            }
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
        };
        return SpeedCardRecord;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_item", [_dec4], {
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

System.register("chunks:///_virtual/SpeedCarGame", ['./SpeedCarCtrl.ts', './SpeedCarDef.ts', './SpeedCarModel.ts', './SpeedCarScene.ts', './SpeedCarUtils.ts', './SpeedCarBtnCheck.ts', './SpeedCarCamera.ts', './SpeedCarGameView.ts', './SpeedCarViewCtrl.ts', './SpeedCarHallView.ts', './SpeedCarRoomItemInfo.ts', './CarCtrl.ts', './SpeedCarBet.ts', './SpeedCarPlaneLight.ts', './SpeedCarResult.ts', './SpeedCarBet_gyh.ts', './SpeedCarBet_item_lm.ts', './SpeedCarBet_item_rank.ts', './SpeedCarBet_lm.ts', './SpeedCarBet_lnk.ts', './SpeedCarBet_rank.ts', './SpeedCarChangeRoom_item.ts', './SpeedCardChangeRoom.ts', './SpeedCardPath.ts', './SpeedCardPath_item_gyh.ts', './SpeedCardPath_item_rank.ts', './SpeedCardRecord.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SpeedCarGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpeedCarDef.ts', './SpeedCarModel.ts', './SpeedCarCtrl.ts', './SpeedCarUtils.ts', './GameDef.ts', './GUtil.ts', './NetManager.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts', './ViewManager.ts', './DataManager.ts', './I18n.ts', './ChipProxy.ts', './ChipSmall.ts', './ChipItem.ts', './SpeedCardChangeRoom.ts', './AudioManager.ts', './SpeedCardRecord.ts', './I18nLocal.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, Node, Label, Sprite, Button, SpriteFrame, ScrollView, Prefab, director, Camera, tween, v3, UITransform, Tween, instantiate, resources, isValid, UIOpacity, game, RenderTexture, Director, view, find, Layout, ParticleSystem, eEvent, eBetType, cBundle, eRunStatus, eSound, eProto, SpeedCarModel, SpeedCarCtrl, SpeedCarUtils, GameDef, GUtil, NetManager, ConfigManager, EventManager, Common, ViewManager, DataManager, UserKey, i18n, ChipProxy, ChipEvent, ChipType, ChipSmall, ChipItem, SpeedCardChangeRoom, AudioManager, SpeedCardRecord, I18nLocal;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      director = module.director;
      Camera = module.Camera;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      Tween = module.Tween;
      instantiate = module.instantiate;
      resources = module.resources;
      isValid = module.isValid;
      UIOpacity = module.UIOpacity;
      game = module.game;
      RenderTexture = module.RenderTexture;
      Director = module.Director;
      view = module.view;
      find = module.find;
      Layout = module.Layout;
      ParticleSystem = module.ParticleSystem;
    }, function (module) {
      eEvent = module.eEvent;
      eBetType = module.eBetType;
      cBundle = module.cBundle;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      eProto = module.eProto;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      SpeedCarCtrl = module.SpeedCarCtrl;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
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
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
      ChipType = module.ChipType;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      SpeedCardChangeRoom = module.SpeedCardChangeRoom;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      SpeedCardRecord = module.default;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28;
      cclegacy._RF.push({}, "81467q/jNJKSLE1uk3qznxw", "SpeedCarGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      // 筹码飞入：同时最多这么多枚在飞，超过时复用最早的一枚。
      var BET_FLY_MAX = 8;
      var BET_FLY_TIME = 0.28;
      var BET_FLY_FADE_TIME = 0.1;

      // 赛车就绪后，SpeedCarViewCtrl 会用 1 秒把镜头从高处拉回起跑线；等它结束再定格下注背景。
      var CAR_READY_FREEZE_DELAY = 1.1;
      var SpeedCarGameView = exports('default', (_dec = ccclass("SpeedCarGameView"), _dec2 = menu("game/SpeedCarGame/SpeedCarGameView"), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(SpeedCardChangeRoom), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Label), _dec25 = property(Button), _dec26 = property(Button), _dec27 = property(SpriteFrame), _dec28 = property(SpriteFrame), _dec29 = property(ScrollView), _dec30 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(SpeedCarGameView, _GameDef$BaseView);
        function SpeedCarGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _this.MainCamera = null;
          _initializerDefineProperty(_this, "bgMusic_bet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgMusic_result", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfHead", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_level", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_cityTag", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_palyers", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gemeIssue", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addScore", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_changeRoom", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_betTip", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result", _descriptor13, _assertThisInitialized(_this));
          // @property(Label)
          // Label_win: Label = null;
          _initializerDefineProperty(_this, "Node_menu", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu_open", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor16, _assertThisInitialized(_this));
          /////////////////
          _initializerDefineProperty(_this, "Node_rank", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_pathAndChange", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bet", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_showBet", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betArea", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_times", _descriptor22, _assertThisInitialized(_this));
          //////////////////////////////////
          _initializerDefineProperty(_this, "Button_x2", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_last", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrGYHSpriteFrame", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrCityTagSpriteFrame", _descriptor26, _assertThisInitialized(_this));
          ////////////////////////////////////////
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor28, _assertThisInitialized(_this));
          // 筹码列表只在首次进房时创建，换房、切前台重进不重建。
          _this._chipInited = false;
          _this._chip = void 0;
          _this._selectChip = null;
          // 结算面板第一次激活要做一次性初始化（渲染纹理相机、展示车材质等），
          // 低端机实测约 0.4 秒，会卡在结算弹出的那一刻。进房赛车就绪时等待层还在，
          // 先把面板以全透明状态激活一帧，把这笔开销挪到这里。
          _this.resultWarmed = false;
          // 下注面板展开时，背后的 3D 场景仍在整屏渲染，是下注阶段最大的开销
          // （MT6765/GE8320 实测：定格后 37 帧 -> 56 帧）。面板是深色半透明底，
          // 所以展开期间把 3D 画面定格成一张图并停掉主相机，收起面板或开跑前恢复实时渲染。
          _this.frozenTexture = null;
          _this.frozenNode = null;
          _this.freezeToken = 0;
          // 主相机是否是被定格逻辑停掉的；只恢复自己停掉的相机。
          _this.cameraPaused = false;
          // 点击投注格后，从底部选中的筹码飞一枚小筹码到被点的格子再消失。
          // 节点按需创建并循环复用，连点也不会超过 BET_FLY_MAX 个。
          _this.flyChipPrefab = null;
          _this.flyLayer = null;
          _this.flyChips = [];
          _this.flyNext = 0;
          // 进房后赛车是否还在加载。
          _this.carsLoading = false;
          // 下注面板是否已完全展开。
          _this.betPanelShown = false;
          return _this;
        }
        var _proto = SpeedCarGameView.prototype;
        ////////////////////////////////////////////////////////////////////////
        //#region baseInterface
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, SpeedCarCtrl.instance);
          this.MainCamera = director.getScene().getChildByName("Main Camera").getComponent(Camera);
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          _GameDef$BaseView.prototype.onEnable.call(this);

          //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.onUpdateGold, this.updateGold, this);
          EventManager.instance.on(eEvent.onRunEnd, this.onRunEnd, this);

          // EventManager.instance.on(SpeedCarDef.eEvent.onBigWin, this.onBigWin, this);

          EventManager.instance.on(eEvent.onUpdateRank, this.onUpdateRank, this);
          EventManager.instance.on(eEvent.onCarReady, this.onCarReady, this);
          EventManager.instance.on(eEvent.onBetFly, this.onBetFly, this);
          SpeedCarModel.instance.curBetType = eBetType.LM;
          var Node_menu_mask = this.Node_menu.getChildByName("mask");
          Node_menu_mask.on(Node.EventType.TOUCH_END, function () {
            tween(_this2.Node_menu).to(0.1, {
              scale: v3(0, 1, 1)
            }).call(function () {
              _this2.Node_menu.active = false;
              _this2.Button_menu_open.active = true;
            }).start();
          }, this);

          // let Node_bet_mask = this.Node_bet.getChildByName("mask");
          // Node_bet_mask.on(
          //     Node.EventType.TOUCH_END,
          //     () => {
          //         this.onShowBetView(false);
          //     },
          //     this
          // );

          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          ViewManager.instance.closePopView();
          AudioManager.instance.stopAllEffect();

          //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onUpdateGold, this.updateGold, this);
          EventManager.instance.off(eEvent.onRunEnd, this.onRunEnd, this);

          // EventManager.instance.off(SpeedCarDef.eEvent.onBigWin, this.onBigWin, this);

          EventManager.instance.off(eEvent.onUpdateRank, this.onUpdateRank, this);
          EventManager.instance.off(eEvent.onCarReady, this.onCarReady, this);
          EventManager.instance.off(eEvent.onBetFly, this.onBetFly, this);
          this.stopBetFly();
          this.unfreezeScene();
          ChipProxy.off(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.off(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
          SpeedCarModel.instance.clearGameData();
          var Node_menu_mask = this.Node_menu.getChildByName("mask");
          Node_menu_mask.off(Node.EventType.TOUCH_END);
          var Node_bet_mask = this.Node_bet.getChildByName("mask");
          Node_bet_mask.off(Node.EventType.TOUCH_END);
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
          if (this.frozenTexture) {
            this.frozenTexture.destroy();
            this.frozenTexture = null;
          }
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
            if (NetManager.instance._connect == true && SpeedCarModel.instance.curTableInfo) {
              SpeedCarModel.instance.isReEnter = true;
              SpeedCarCtrl.instance.reqEnter(SpeedCarModel.instance.curTableInfo.tableId);
            }
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
          var grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          if (grade) {
            Common.setGradeCode(this.Sprite_level, parseInt(grade));
          }
        };
        _proto.initUIView = function initUIView() {
          this.initSelfInfo();
          SpeedCarUtils.instance.loadRes_icon(function () {
            SpeedCarCtrl.instance.reqEnter(SpeedCarModel.instance.curTableInfo.tableId);
            // SpeedCarCtrl.instance.reqLayers();
          });
        };

        _proto.onClickLeft = function onClickLeft() {
          var node = this.scrollViewCM.content;
          var count = node.children.length;
          if (count <= 0) return;
          var width = node.getComponent(UITransform).width;
          var posX = this.scrollViewCM.content.getPosition().x;
          var move = width / count;
          var pos = posX + move;
          if (pos > 0) {
            pos = 0;
          }
          Tween.stopAllByTarget(node);
          tween(node).to(0.2, {
            position: v3(pos, node.position.y)
          }).start();
        };
        _proto.onClickRight = function onClickRight() {
          var node = this.scrollViewCM.content;
          var count = node.children.length;
          if (count <= 0) return;
          var width = node.getComponent(UITransform).width;
          var posX = this.scrollViewCM.content.getPosition().x;
          var move = width / count;
          var pos = posX - move;
          var max = this.scrollViewCM.node.getComponent(UITransform).width - width;
          if (pos < max) {
            pos = max;
          }
          Tween.stopAllByTarget(node);
          tween(node).to(0.2, {
            position: v3(pos, node.position.y)
          }).start();
        };
        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != cBundle) {
            return;
          }
          var children = this.scrollViewCM.content.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            var chipitem = child.getComponent(ChipItem);
            if (chipitem) {
              if (chipitem.data == data) {
                this._chip = data;
                this._selectChip = child;
                SpeedCarModel.instance.curBet = this._chip.count;
                // SpeedCarUtils.instance.playSound(SpeedCarDef.eSound.Coins);
              } else {
                chipitem.moveUp(false);
              }
            }
          }
        };
        _proto.createChipsList = function createChipsList() {
          var _this3 = this;
          this.scrollViewCM.content.destroyAllChildren();
          var minChip = ChipProxy.chipList[0].count;
          for (var _iterator2 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            if (i.count < minChip) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            //            // chip.scale = 1.3;
            //            // chip.width = 130;
            //            // chip.height = 130;
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, cBundle);
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step3; !(_step3 = _iterator3()).done;) {
            var _i = _step3.value;
            var has = false;
            for (var _iterator4 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step4; !(_step4 = _iterator4()).done;) {
              var j = _step4.value;
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
            //            // chip.scale = 1.3;
            //            // chip.width = 130;
            //            // chip.height = 130;
            _chip2.getComponent(ChipItem).setData(_i, ChipType.CHIP, cBundle);
          }
          this.scheduleOnce(function () {
            //默认选中
            var index = ChipProxy.diyList.length;
            var child = _this3.scrollViewCM.content.children[index];
            child.getComponent(ChipItem).moveUp();
            _this3.scrollViewCM.scrollToLeft();
          });
        };
        _proto.onGameEnter = function onGameEnter() {
          var _this4 = this;
          if (!this._chipInited) {
            this._chipInited = true;
            ChipProxy.initChipList(SpeedCarModel.instance.Chips);
            this.createChipsList();

            // 筹码飞入用的小筹码，与其他游戏共用同一个公共预制体。
            resources.load("prefab/public/chipSmall", Prefab, function (err, prefab) {
              if (!err && isValid(_this4.node)) {
                _this4.flyChipPrefab = prefab;
              }
            });
          }
          this.Label_palyers.string = "" + SpeedCarModel.instance.playerNum;
          // this.Sprite_cityTag.spriteFrame = this.arrCityTagSpriteFrame[SpeedCarModel.instance.curTableInfo.carType - 1];
          I18nLocal.getLocalRes(cBundle, this.arrCityTagSpriteFrame[SpeedCarModel.instance.curTableInfo.carType - 1].name).then(function (sprFrame) {
            _this4.Sprite_cityTag.spriteFrame = sprFrame;
          });

          // 赛车（换房时是另一种车型）要异步加载，这期间不能定格下注背景，否则拍到的是没有车的赛道。
          // 必须在派发 onLoadCar 之前设置：同车型复用时 onCarReady 会在派发过程中同步回来。
          this.carsLoading = true;
          this.unfreezeScene();
          EventManager.instance.emit(eEvent.onLoadCar);
        }

        //#endregion chip list;
        //////////////////////////////////////////////////
        ;

        _proto.onToggleClick = function onToggleClick(event) {
          // let toggle: Toggle = event;

          switch (event.node.name) {
            case "Toggle_betType_1":
              {
                gts.Debug.Log("==onToggleClick==event.node.name=" + event.node.name);
                this.Node_betArea.children[SpeedCarModel.instance.curBetType - 1].active = false;
                SpeedCarModel.instance.curBetType = eBetType.LM;
                this.Node_betArea.children[SpeedCarModel.instance.curBetType - 1].active = true;
                break;
              }
            case "Toggle_betType_2":
              {
                gts.Debug.Log("==onToggleClick==event.node.name=" + event.node.name);
                this.Node_betArea.children[SpeedCarModel.instance.curBetType - 1].active = false;
                SpeedCarModel.instance.curBetType = eBetType.RANK;
                this.Node_betArea.children[SpeedCarModel.instance.curBetType - 1].active = true;
                break;
              }
            case "Toggle_betType_3":
              {
                gts.Debug.Log("==onToggleClick==event.node.name=" + event.node.name);
                this.Node_betArea.children[SpeedCarModel.instance.curBetType - 1].active = false;
                SpeedCarModel.instance.curBetType = eBetType.GYH;
                this.Node_betArea.children[SpeedCarModel.instance.curBetType - 1].active = true;
                break;
              }
            case "Toggle_betType_4":
              {
                gts.Debug.Log("==onToggleClick==event.node.name=" + event.node.name);
                this.Node_betArea.children[SpeedCarModel.instance.curBetType - 1].active = false;
                SpeedCarModel.instance.curBetType = eBetType.LNK;
                this.Node_betArea.children[SpeedCarModel.instance.curBetType - 1].active = true;
                break;
              }
          }
        }

        //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
            case "Node_path":
              {
                Common.loadPopBuddle("prefab/Node_path", SpeedCarUtils.instance.bundle, function () {}, function (prefab) {
                  var viewNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(viewNode, true);
                }, true);
                break;
              }
            case "Button_changeRoom":
              {
                this.Node_changeRoom.node.active = true;
                break;
              }
            case "Button_showBet":
              {
                this.onShowBetView();
                break;
              }
            case "Button_hideBet":
              {
                this.onShowBetView(false);
                break;
              }
            case "Button_last":
              {
                if (SpeedCarModel.instance.gameStatus != eRunStatus.BET) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                var keys = Object.keys(SpeedCarModel.instance.myBetInfoLast);
                for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
                  var key = _keys[_i2];
                  var betAmount = SpeedCarModel.instance.myBetInfoLast[key];
                  if (!SpeedCarCtrl.instance.reqBet(betAmount, parseInt(key))) {
                    break;
                  }
                }
                break;
              }
            case "Button_x2":
              {
                // EventManager.instance.emit(SpeedCarDef.eEvent.onShakeStart);

                if (SpeedCarModel.instance.gameStatus != eRunStatus.BET) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                var _keys2 = Object.keys(SpeedCarModel.instance.myBetInfo);
                for (var _i3 = 0, _keys3 = _keys2; _i3 < _keys3.length; _i3++) {
                  var _key2 = _keys3[_i3];
                  var _betAmount = SpeedCarModel.instance.myBetInfo[_key2];
                  if (!SpeedCarCtrl.instance.reqBet(_betAmount, parseInt(_key2))) {
                    break;
                  }
                }
                break;
              }
            case "Button_menu_open":
              {
                this.Node_menu.active = true;
                this.Node_menu.scale = v3(0, 1, 1);
                this.Button_menu_open.active = false;
                tween(this.Node_menu).to(0.1, {
                  scale: v3(1, 1, 1)
                }).start();
                break;
              }
            case "Button_menu_close":
              {
                tween(this.Node_menu).to(0.1, {
                  scale: v3(0, 1, 1)
                }).call(function () {
                  _this5.Node_menu.active = false;
                  _this5.Button_menu_open.active = true;
                }).start();
                break;
              }
            case "Button_return":
              {
                SpeedCarCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_record", SpeedCarUtils.instance.bundle, function () {}, function (prefab) {
                  var viewNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(viewNode, true);
                  viewNode.getComponent(SpeedCardRecord).setGameType("racing", 12);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", SpeedCarUtils.instance.bundle, function () {}, function (prefab) {
                  var viewNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(viewNode, true);
                }, true);
                break;
              }
            case "Button_set":
              {
                Common.loadPopBuddle("prefab/Node_setting", SpeedCarUtils.instance.bundle, function () {}, function (prefab) {
                  var viewNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(viewNode, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                GUtil.openRank("racing");
                break;
              }
          }
        };
        _proto.onCarReady = function onCarReady() {
          this.warmResultPanel();
          this.carsLoading = false;
          this.unschedule(this.tryFreezeScene);
          this.scheduleOnce(this.tryFreezeScene, CAR_READY_FREEZE_DELAY);
        };
        _proto.warmResultPanel = function warmResultPanel() {
          var _this6 = this;
          if (this.resultWarmed || this.Node_result.active) {
            return;
          }
          this.resultWarmed = true;
          var opacity = this.Node_result.getComponent(UIOpacity);
          var oldOpacity = opacity.opacity;
          opacity.opacity = 0;
          this.Node_result.active = true;
          this.scheduleOnce(function () {
            opacity.opacity = oldOpacity;
            // 这一帧里如果真正的结算已经开始，面板要留给它显示。
            if (SpeedCarModel.instance.gameStatus != eRunStatus.END) {
              _this6.Node_result.active = false;
            }
          }, 0);
        };
        _proto.onBetFly = function onBetFly(cell) {
          var from = this._selectChip;
          if (!this.flyChipPrefab || !from || !isValid(from) || !cell || !isValid(cell)) {
            return;
          }
          if (!this.flyLayer) {
            // 放在视图最上层，不受下注列表遮罩的裁剪。
            var layer = new Node("Node_betFly");
            layer.layer = this.node.layer;
            layer.addComponent(UITransform);
            this.node.addChild(layer);
            this.flyLayer = layer;
          }
          var chip;
          if (this.flyChips.length < BET_FLY_MAX) {
            chip = instantiate(this.flyChipPrefab);
            this.flyLayer.addChild(chip);
            this.flyChips.push(chip);
          } else {
            chip = this.flyChips[this.flyNext];
            this.flyNext = (this.flyNext + 1) % BET_FLY_MAX;
          }
          var opacity = chip.getComponent(UIOpacity) || chip.addComponent(UIOpacity);
          Tween.stopAllByTarget(chip);
          Tween.stopAllByTarget(opacity);

          // setValue 会同时把节点设为可见。
          chip.getComponent(ChipSmall).setValue(SpeedCarModel.instance.curBet);
          chip.setScale(1, 1, 1);
          chip.setWorldPosition(from.worldPosition);
          opacity.opacity = 255;
          var target = this.flyLayer.getComponent(UITransform).convertToNodeSpaceAR(cell.worldPosition);
          tween(chip).to(BET_FLY_TIME, {
            position: target
          }, {
            easing: "quadOut"
          }).to(BET_FLY_FADE_TIME, {
            scale: v3(0.5, 0.5, 1)
          }).call(function () {
            chip.active = false;
          }).start();
          tween(opacity).delay(BET_FLY_TIME).to(BET_FLY_FADE_TIME, {
            opacity: 0
          }).start();
        };
        _proto.stopBetFly = function stopBetFly() {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.flyChips), _step5; !(_step5 = _iterator5()).done;) {
            var _chip3 = _step5.value;
            if (!isValid(_chip3)) {
              continue;
            }
            Tween.stopAllByTarget(_chip3);
            var opacity = _chip3.getComponent(UIOpacity);
            if (opacity) {
              Tween.stopAllByTarget(opacity);
            }
            _chip3.active = false;
          }
        };
        // 定格的前提：赛车已就绪、面板完全展开、处于下注阶段。其他阶段背后的画面需要实时显示。
        _proto.tryFreezeScene = function tryFreezeScene() {
          if (this.carsLoading || !this.betPanelShown) {
            return;
          }
          if (SpeedCarModel.instance.gameStatus != eRunStatus.BET) {
            return;
          }
          this.freezeScene();
        };
        _proto.freezeScene = function freezeScene() {
          var _this7 = this;
          var camera = this.MainCamera;
          var canvas = game.canvas;
          if (!camera || !canvas.width || !canvas.height) {
            return;
          }

          // 画布尺寸变了（降分辨率档位变化、旋转）就换一张新纹理，不能对旧纹理 reset：
          // reset 会重建底层贴图，而已经显示过它的 Sprite 仍引用旧的，画出来是黑的或别的贴图。
          if (this.frozenTexture && (this.frozenTexture.width != canvas.width || this.frozenTexture.height != canvas.height)) {
            if (this.frozenNode && isValid(this.frozenNode)) {
              this.frozenNode.active = false;
            }
            this.frozenTexture.destroy();
            this.frozenTexture = null;
          }
          if (!this.frozenTexture) {
            this.frozenTexture = new RenderTexture();
            this.frozenTexture.reset({
              width: canvas.width,
              height: canvas.height
            });
          }
          var renderTexture = this.frozenTexture;

          // 让主相机往纹理上画一帧。已经定格时旧画面继续显示，直到新的一帧画完。
          var token = ++this.freezeToken;
          camera.enabled = true;
          camera.targetTexture = renderTexture;
          director.once(Director.EVENT_AFTER_DRAW, function () {
            // 画这一帧期间面板被收起、视图被销毁，都由 unfreezeScene 负责还原相机。
            if (token != _this7.freezeToken || !isValid(_this7.node)) {
              return;
            }
            camera.targetTexture = null;
            camera.enabled = false;
            _this7.cameraPaused = true;
            _this7.showFrozenScene(renderTexture);
          }, this);
        };
        _proto.showFrozenScene = function showFrozenScene(renderTexture) {
          if (!this.frozenNode) {
            // 放在视图最底层，所有界面都画在它上面。
            var node = new Node("Node_frozenScene");
            node.layer = this.node.layer;
            this.node.insertChild(node, 0);
            node.addComponent(UITransform);
            var _sprite = node.addComponent(Sprite);
            _sprite.sizeMode = Sprite.SizeMode.CUSTOM;
            this.frozenNode = node;
          }

          // 纹理对象换了就给 Sprite 换一个新的 SpriteFrame：必须先设好纹理再赋给 Sprite，
          // 事后改已赋值的 SpriteFrame，Sprite 不会更新它实际使用的贴图。
          var sprite = this.frozenNode.getComponent(Sprite);
          if (!sprite.spriteFrame || sprite.spriteFrame.texture !== renderTexture) {
            var spriteFrame = new SpriteFrame();
            spriteFrame.texture = renderTexture;
            sprite.spriteFrame = spriteFrame;
          }
          var visibleSize = view.getVisibleSize();
          this.frozenNode.getComponent(UITransform).setContentSize(visibleSize.width, visibleSize.height);
          this.frozenNode.active = true;
        };
        _proto.unfreezeScene = function unfreezeScene() {
          this.freezeToken++;
          var camera = this.MainCamera;
          if (camera && isValid(camera)) {
            if (this.frozenTexture && camera.targetTexture == this.frozenTexture) {
              camera.targetTexture = null;
            }
            if (this.cameraPaused) {
              camera.enabled = true;
            }
          }
          this.cameraPaused = false;
          if (this.frozenNode && isValid(this.frozenNode)) {
            this.frozenNode.active = false;
          }
        };
        _proto.onShowBetView = function onShowBetView(isShow) {
          var _this8 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          // 展开和收起的动画会被连续触发（新一期、重进房、手动点按钮），不先停掉旧动画，
          // 两个方向的动画会同时改位置和透明度，最后面板可能停在收起或透明的状态。
          Tween.stopAllByTarget(this.Node_bet);
          Tween.stopAllByTarget(this.Node_bet.getComponent(UIOpacity));
          if (isShow) {
            this.Button_showBet.active = false;
            this.Node_bet.active = true;
            tween(this.Node_bet).to(0.25, {
              position: v3(0, 0, 0)
            }).call(function () {
              // 面板完全展开后再定格。
              _this8.betPanelShown = true;
              _this8.tryFreezeScene();
            }).start();
            tween(this.Node_bet.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).start();
          } else {
            this.betPanelShown = false;
            this.unfreezeScene();
            this.stopBetFly();
            tween(this.Node_bet).to(0.25, {
              position: v3(0, -817, 0)
            }).call(function () {
              // this.Node_bet.active = false;
              _this8.Button_showBet.active = true;
            }).start();
            tween(this.Node_bet.getComponent(UIOpacity)).to(0.25, {
              opacity: 0
            }).start();
          }
        };
        _proto.doAwait = function doAwait(delay) {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            _this9.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.showStartBetTip = function showStartBetTip() {
          this.Sprite_betTip.position = v3(0, 800, 0);
          tween(this.Sprite_betTip).to(0.2, {
            position: v3(0, 360, 0)
          }).start();
          tween(this.Sprite_betTip.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).delay(2.0).to(0.2, {
            opacity: 0
          }).start();
        };
        _proto.onRunEnd = function onRunEnd() {
          var _this10 = this;
          // 换房时结果已随 clearGameData 清空，而上一桌的收尾回调可能在新一次进房返回前才触发。
          if (!SpeedCarModel.instance.gameResult || !SpeedCarModel.instance.curTableInfo) {
            return;
          }
          AudioManager.instance.playGameMusic(this.bgMusic_result, true);
          this.scheduleOnce(function () {
            if (SpeedCarModel.instance.gameStatus == eRunStatus.END) {
              _this10.Node_result.active = true;
            }
          }, 1);
          if (SpeedCarModel.instance.endBalance > 0) {
            SpeedCarModel.instance.curBalance = SpeedCarModel.instance.endBalance;
            SpeedCarModel.instance.endBalance = 0;
            this.updateGold();
          }
          SpeedCarModel.instance.historyList[SpeedCarModel.instance.curTableInfo.tableId] = SpeedCarModel.instance.historyList[SpeedCarModel.instance.curTableInfo.tableId] || [];
          var firstInfo = SpeedCarModel.instance.historyList[SpeedCarModel.instance.curTableInfo.tableId][0];
          if (!firstInfo || firstInfo.issue != SpeedCarModel.instance.gameResult.issue) {
            SpeedCarModel.instance.historyList[SpeedCarModel.instance.curTableInfo.tableId].unshift({
              issue: SpeedCarModel.instance.gameResult.issue,
              result: SpeedCarModel.instance.gameResult.result
            });
          }
          EventManager.instance.emit(eEvent.onUpdatePath);
        }
        // onBigWin(bigScore) {
        //     this.Node_bigWin.active = true;
        //     let Skeleton_win = this.Node_bigWin.getChildByName("Skeleton_win").getComponent(sp.Skeleton);

        //     let Label_win = this.Node_bigWin.getChildByName("Label_win");
        //     Label_win.getComponent(Label).string = "";
        //     SpeedCarUtils.instance.updateLabelAdd(Label_win.getComponent(Label), bigScore);

        //     SpeedCarUtils.instance.playSound(SpeedCarDef.eSound.Bigwin);

        //     Skeleton_win.setAnimation(0, "intro", false);
        //     Skeleton_win.addAnimation(0, "idle", false);
        //     Skeleton_win.setCompleteListener(() => {
        //         Skeleton_win.setCompleteListener(null);
        //         this.Node_bigWin.active = false;
        //     });
        // }
        ;

        _proto.setTimer = function setTimer() {
          if (SpeedCarModel.instance.countDown < 0) {
            return;
          }
          var min = Math.floor(SpeedCarModel.instance.countDown / 60);
          var strMin = min < 10 ? "0" + min : "" + min;
          var sec = SpeedCarModel.instance.countDown % 60;
          var strSec = sec < 10 ? "0" + sec : "" + sec;
          this.Label_times.string = strMin + ":" + strSec;
          SpeedCarModel.instance.countDown--;
        };
        _proto.setCountDwon = function setCountDwon() {
          var _this11 = this;
          this.setTimer();
          Tween.stopAllByTarget(this.Label_times);
          tween(this.Label_times).delay(1).call(function () {
            _this11.setTimer();
          }).union().repeat(SpeedCarModel.instance.countDown).start();
        };
        _proto.onUpdatePath = function onUpdatePath() {
          var _this12 = this;
          if (!this.Node_pathAndChange.active) {
            return;
          }
          var historyList = SpeedCarModel.instance.historyList[SpeedCarModel.instance.curTableInfo.tableId];
          if (!historyList) {
            this.scheduleOnce(function () {
              _this12.onUpdatePath();
            }, 0.1);
            return;
          }
          var history = historyList[0];
          if (!history) {
            // 该桌还没有开奖记录
            return;
          }
          var Node_rank = find("Node_path/Node_rank", this.Node_pathAndChange);
          var Node_gyh = find("Node_path/Node_gyh", this.Node_pathAndChange);
          var Label_gemeIssue = find("Node_path/Label_gemeIssue", this.Node_pathAndChange);
          Label_gemeIssue.getComponent(Label).string = "" + history.issue;
          for (var i = 0; i < history.result.length; i++) {
            var carIndex = history.result[i];
            var rankItem = Node_rank.children[i];
            var strFrame = carIndex < 10 ? "icon_haoma_0" + carIndex : "icon_haoma_" + carIndex;
            rankItem.getComponent(Sprite).spriteFrame = SpeedCarUtils.instance.arrCarTagSpriteFrame[strFrame];
          }
          var gyh = history.result[0] + history.result[1];
          var isDa = gyh > 11;
          var isDan = gyh % 2 != 0;
          var Label_gyh = find("item_gyh/Label_gyh", Node_gyh);
          Label_gyh.getComponent(Label).string = "" + gyh;
          var item_dx = Node_gyh.getChildByName("item_dx");
          var item_ds = Node_gyh.getChildByName("item_ds");
          item_dx.getComponent(Sprite).spriteFrame = isDa ? this.arrGYHSpriteFrame[0] : this.arrGYHSpriteFrame[1];
          item_ds.getComponent(Sprite).spriteFrame = isDan ? this.arrGYHSpriteFrame[2] : this.arrGYHSpriteFrame[3];
          for (var _i4 = 0; _i4 < 5; _i4++) {
            var _rankItem = Node_gyh.getChildByName("item_lh_" + _i4);
            var isLong = history.result[_i4] > history.result[9 - _i4];
            _rankItem.getComponent(Sprite).spriteFrame = isLong ? this.arrGYHSpriteFrame[4] : this.arrGYHSpriteFrame[5];
          }
        };
        _proto.onUpdateRank = function onUpdateRank() {
          if (!this.Node_rank.active) {
            return;
          }
          if (SpeedCarModel.instance.rankInfo.length == 0) {
            for (var i = 0; i < 10; i++) {
              var car = this.Node_rank.getChildByName("car_" + (i + 1));
              car.setSiblingIndex(i);
            }
          } else {
            for (var _i5 = 0; _i5 < 10; _i5++) {
              var rankInfo = SpeedCarModel.instance.rankInfo[_i5];
              var _car = this.Node_rank.getChildByName("car_" + (rankInfo.index + 1));
              _car.setSiblingIndex(_i5);
            }
            this.Node_rank.getComponent(Layout).updateLayout(true);
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(SpeedCarModel.instance.curBalance);
          if (strGold != this.selfGold.string) {
            SpeedCarUtils.instance.updateLabel(this.selfGold, strGold);
          }

          // if (ballInfo && ballInfo.prizeAmount > 0) {
          // let floorTemp = find(`Node_floorInfo_${ballInfo.ball - 1}\/Node_temp_${ballInfo.prizeIdx}`, this.Node_floorInfo);
          // let Node_prizeAmount = instantiate(this.Node_prizeAmount);
          // this.Node_floorInfo.addChild(Node_prizeAmount);
          // let wPos = floorTemp.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          // wPos = this.Node_floorInfo.getComponent(UITransform).convertToNodeSpaceAR(wPos);
          // Node_prizeAmount.position = v3(wPos.x, Node_prizeAmount.position.y, Node_prizeAmount.position.z);
          // Node_prizeAmount.active = true;
          // let Label_prizeAmount = Node_prizeAmount.getChildByName("Label_prizeAmount").getComponent(Label);
          // Label_prizeAmount.string = `${SpeedCarUtils.instance.numberFormat(ballInfo.prizeAmount / 1000, 2)}K`;
          // let arrColor = [color(7, 208, 47, 255), color(38, 159, 233, 255), color(252, 11, 9, 255)];
          // Label_prizeAmount.color = arrColor[ballInfo.ball - 1];
          // tween(Node_prizeAmount)
          //     .delay(0.5)
          //     .parallel(
          //         tween(Node_prizeAmount).to(0.5, {
          //             position: v3(Node_prizeAmount.position.x, Node_prizeAmount.position.y + 200, Node_prizeAmount.position.z),
          //         }),
          //         tween(Node_prizeAmount.getComponent(UIOpacity)).to(0.5, {
          //             opacity: 0,
          //         })
          //     )
          //     .destroySelf()
          //     .start();
          // }
        };

        _proto.updateStaus = function updateStaus(isEnter) {
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (SpeedCarModel.instance.gameStatus == eRunStatus.BET) {
            AudioManager.instance.playGameMusic(this.bgMusic_bet, true);
            SpeedCarUtils.instance.playSound(eSound.engine1, true);
            SpeedCarModel.instance.rankInfo = [];
            this.onUpdateRank();
            this.Node_rank.active = false;
            this.Node_result.active = false;
            var winner = find("winner/all", this.Node_result);
            for (var _iterator6 = _createForOfIteratorHelperLoose(winner.children), _step6; !(_step6 = _iterator6()).done;) {
              var childNode = _step6.value;
              childNode.getComponent(ParticleSystem).stop();
            }

            // this.scheduleOnce(() => {
            //     winner.active = false;
            // }, 0.1);

            this.Node_pathAndChange.active = true;
            this.onUpdatePath();
            this.onShowBetView();
            EventManager.instance.emit(eEvent.onStatusBet);
            if (!isEnter) {
              SpeedCarModel.instance.myBetInfoLast = SpeedCarModel.instance.myBetInfo;
              var keys = Object.keys(SpeedCarModel.instance.myBetInfoLast);
              this.Button_last.interactable = keys.length > 0;
              SpeedCarModel.instance.checkout = null;
              SpeedCarModel.instance.myBetInfo = {};
              SpeedCarModel.instance.allBetInfo = {};
            } else {
              // 进房数据即本期服务端快照，按它恢复按钮状态。
              this.Button_last.interactable = Object.keys(SpeedCarModel.instance.myBetInfoLast || {}).length > 0;
              this.Button_x2.interactable = Object.keys(SpeedCarModel.instance.myBetInfo || {}).length > 0;
            }
            this.gemeIssue.string = "" + SpeedCarModel.instance.gemeIssue;
          } else if (SpeedCarModel.instance.gameStatus == eRunStatus.RUNNING) {
            AudioManager.instance.pauseMusic();
            SpeedCarUtils.instance.stopSound(eSound.engine1);
            this.gemeIssue.string = "" + SpeedCarModel.instance.gemeIssue;
            this.onShowBetView(false);
            this.Node_rank.active = true;
            this.Node_pathAndChange.active = false;
            this.Button_last.interactable = false;
            this.Button_x2.interactable = false;
          }
          this.setCountDwon();
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this13 = this;
          switch (event) {
            case eProto.HD_Enter:
              {
                SpeedCarCtrl.instance.reqHistory(SpeedCarModel.instance.curTableInfo.tableId);
                this.Node_changeRoom.node.active = false;
                this.onGameEnter();

                // HD_Enter 已带回本期自己的下注和各区总额（含切前台、重连重进），不能按“新一期开始”清空，
                // 否则本期已下注额消失，并被挪进“重复上局”导致重复下注。
                this.updateStaus(true);
                SpeedCarModel.instance.isReEnter = false;
                break;
              }
            case eProto.HD_Bet:
              {
                var betInfo = data;
                var myBet = SpeedCarModel.instance.myBetInfo[betInfo.pos] || 0;
                SpeedCarModel.instance.myBetInfo[betInfo.pos] = myBet + parseInt(betInfo.betAmount);
                if (!this.Button_x2.interactable) {
                  this.Button_x2.interactable = true;
                }
                this.updateGold();
                SpeedCarModel.instance.markBetPop(parseInt(betInfo.pos));
                EventManager.instance.emit(eEvent.onUpdateBetInfo);
                break;
              }
            case eProto.HD_BetList:
              {
                this.Label_palyers.string = "" + SpeedCarModel.instance.playerNum;
                EventManager.instance.emit(eEvent.onUpdateBetInfo);
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                this.updateStaus();
                break;
              }
            case eProto.HD_OpenResult:
              {
                SpeedCarModel.instance.gameStatus = eRunStatus.RUNNING;

                //
                EventManager.instance.emit(eEvent.onRunStart);
                this.scheduleOnce(function () {
                  _this13.showStartBetTip();
                }, 3.0);
                break;
              }
            case eProto.HD_History:
              {
                if (this.Node_changeRoom.node.active) {
                  this.Node_changeRoom.onUpdatePath();
                }
                break;
              }
            // case SpeedCarDef.eProto.HD_Checkout: {
            //     SpeedCarModel.instance.checkout = data.Data;
            //     break;
            // }
            case eProto.Record:
              {
                // this.updateGold();
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
        return SpeedCarGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgMusic_bet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic_result", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selfName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selfGold", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_level", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_cityTag", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_palyers", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gemeIssue", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "addScore", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_changeRoom", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_betTip", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Node_result", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu_open", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_rank", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Node_pathAndChange", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Node_bet", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Button_showBet", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_betArea", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Label_times", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Button_x2", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Button_last", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "arrGYHSpriteFrame", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "arrCityTagSpriteFrame", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec30], {
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

System.register("chunks:///_virtual/SpeedCarHallView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './SpeedCarModel.ts', './SpeedCarCtrl.ts', './SpeedCarDef.ts', './AudioManager.ts', './SpeedCarUtils.ts', './I18nLocal.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, Node, Sprite, ScrollView, SpriteFrame, Button, MeshRenderer, UITransform, Color, Vec3, view, v3, instantiate, Label, i18n, GameDef, ConfigManager, DataManager, EventManager, NetManager, ViewManager, Common, SpeedCarModel, SpeedCarCtrl, cBundle, eEvent, eProto, AudioManager, SpeedCarUtils, I18nLocal;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      Node = module.Node;
      Sprite = module.Sprite;
      ScrollView = module.ScrollView;
      SpriteFrame = module.SpriteFrame;
      Button = module.Button;
      MeshRenderer = module.MeshRenderer;
      UITransform = module.UITransform;
      Color = module.Color;
      Vec3 = module.Vec3;
      view = module.view;
      v3 = module.v3;
      instantiate = module.instantiate;
      Label = module.Label;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      SpeedCarCtrl = module.SpeedCarCtrl;
    }, function (module) {
      cBundle = module.cBundle;
      eEvent = module.eEvent;
      eProto = module.eProto;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "d328dnNZt5EPZF2GFrtZ/YK", "SpeedCarHallView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SpeedCarHallView = exports('default', (_dec = ccclass("SpeedCarHallView"), _dec2 = menu("game/SpeedCarGame/SpeedCarHallView"), _dec3 = property(AudioClip), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(ScrollView), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(Button), _dec12 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(SpeedCarHallView, _GameDef$BaseView);
        function SpeedCarHallView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          // //    //player info
          _initializerDefineProperty(_this, "bgMusic", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_carRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_planeBg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_title", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_carInfo", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrPlaneBgSpriteFrame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTitleSpriteFrame", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrCheShenSpriteFrame", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_next", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_last", _descriptor10, _assertThisInitialized(_this));
          // setItem 挂在 scrolling 事件上，滚动期间每帧触发。条目、赛车和背景都是预制体里的固定节点，
          // 组件只查找一次；carColors/lastColors 按车保存，颜色（0~255 取整后）未变化时不再写材质。
          _this.itemCache = null;
          _this.tempWorldPos = new Vec3();
          _this.tempLocalPos = new Vec3();
          _this.tempMaskColor = new Color();
          return _this;
        }
        var _proto = SpeedCarHallView.prototype;
        _proto.onLoad = function onLoad() {
          // SpeedCarModel.instance.isInGame = false;
          _GameDef$BaseView.prototype.onLoad.call(this, SpeedCarCtrl.instance);
          SpeedCarModel.instance.isReEnter = false;
          SpeedCarModel.instance.historyList = {};
          AudioManager.instance.playGameMusic(this.bgMusic, true);
          if (DataManager.instance.serverID) {
            SpeedCarModel.instance._serverId = DataManager.instance.serverID;
            DataManager.instance.serverID = "";
            this.scheduleOnce(function () {
              if (NetManager.instance._connect == true) {
                SpeedCarCtrl.instance.reqEnter("");
              }
            }, 0.1);
          }
          for (var i = 0; i < this.Node_carRoot.children.length; i++) {
            var cheshen = this.Node_carRoot.children[i].getChildByName("cheshen");
            cheshen.getComponent(MeshRenderer).material.setProperty("mainTexture", this.arrCheShenSpriteFrame[i].texture);
          }
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          SpeedCarCtrl.instance.reqTableList();
          this.onResize();
        };
        _proto.setItem = function setItem() {
          var items = this.ScrollView_carInfo.content.children;
          if (!this.itemCache) {
            var _cache = {
              viewTrans: null,
              itemTrans: [],
              masks: [],
              carRenderers: [],
              carColors: [],
              lastColors: []
            };
            _cache.viewTrans = this.ScrollView_carInfo.node.getComponent(UITransform);
            for (var index = 0; index < items.length; index++) {
              _cache.itemTrans.push(items[index].getComponent(UITransform));
              _cache.masks.push(items[index].getChildByName("mask").getComponent(Sprite));
              var renderers = [];
              for (var _iterator = _createForOfIteratorHelperLoose(this.Node_carRoot.children[index].children), _step; !(_step = _iterator()).done;) {
                var childNode = _step.value;
                renderers.push(childNode.getComponent(MeshRenderer));
              }
              _cache.carRenderers.push(renderers);
              _cache.carColors.push(new Color());
              _cache.lastColors.push(-1);
            }
            this.itemCache = _cache;
          }
          var cache = this.itemCache;

          //- left +right
          var carIndex = Math.abs(this.ScrollView_carInfo.getScrollOffset().x) / 417;
          // 回弹越过最后一项时停在最后一项，赛车和背景不跟着滑出。
          carIndex = carIndex > this.maxIndex ? this.maxIndex : carIndex;
          var hW = cache.viewTrans.width / 2.0;
          for (var _index = 0; _index < items.length; _index++) {
            var carNode = this.Node_carRoot.children[_index];
            var planeBg = this.Node_planeBg.children[_index];

            // 滚动事件本身逐帧连续，位置和缩放直接跟随偏移量，不再为每次事件新建 tween。
            planeBg.setPosition(_index * 1920 - carIndex * 1920, planeBg.position.y, planeBg.position.z);
            carNode.setPosition(_index * 5 - carIndex * 5, carNode.position.y, carNode.position.z);
            var itemNode = items[_index];
            cache.itemTrans[_index].convertToWorldSpaceAR(Vec3.ZERO, this.tempWorldPos);
            cache.viewTrans.convertToNodeSpaceAR(this.tempWorldPos, this.tempLocalPos);
            var disX = Math.abs(this.tempLocalPos.x);
            var maskAlpha = 180;
            var vColor = 255;
            var itemScale = 1;
            var carScale = 1;
            if (disX < hW) {
              maskAlpha = 180 * disX / hW;
              vColor = 255 - 105 * disX / hW;
              var itemWidth = cache.itemTrans[_index].width;
              if (disX < itemWidth) {
                var disScale = 1 - disX / itemWidth;
                itemScale = 1 + 0.25 * disScale;
                carScale = 1 + 0.3 * disScale;
              }
            }
            this.tempMaskColor.set(0, 0, 0, maskAlpha);
            cache.masks[_index].color = this.tempMaskColor;
            itemNode.setScale(itemScale, itemScale, 1);
            carNode.setScale(carScale, carScale, carScale);
            vColor = Math.floor(vColor);
            if (vColor != cache.lastColors[_index]) {
              cache.lastColors[_index] = vColor;
              var carColor = cache.carColors[_index].set(vColor, vColor, vColor, 255);
              for (var _iterator2 = _createForOfIteratorHelperLoose(cache.carRenderers[_index]), _step2; !(_step2 = _iterator2()).done;) {
                var renderer = _step2.value;
                renderer.material.setProperty("mainColor", carColor);
              }
            }
          }
        }
        //    //滚动触摸离开--停止滚动触摸
        ;

        _proto.onScrollTouchUp = function onScrollTouchUp(delay) {
          var _this2 = this;
          if (delay === void 0) {
            delay = 0.1;
          }
          this.scheduleOnce(function () {
            var getScrollOffset = _this2.ScrollView_carInfo.getScrollOffset();
            SpeedCarModel.instance._curIndex = Math.round(Math.abs(getScrollOffset.x) / 417);
            _this2.ScrollView_carInfo.stopAutoScroll();
            SpeedCarModel.instance._curIndex = SpeedCarModel.instance._curIndex < 0 ? 0 : SpeedCarModel.instance._curIndex > _this2.maxIndex ? _this2.maxIndex : SpeedCarModel.instance._curIndex;
            _this2.ScrollView_carInfo.scrollToPercentHorizontal(SpeedCarModel.instance._curIndex / _this2.maxIndex, 0.1, true);
            I18nLocal.getLocalRes(cBundle, _this2.arrTitleSpriteFrame[SpeedCarModel.instance._curIndex].name).then(function (sprFrame) {
              if (_this2.Sprite_title) {
                _this2.Sprite_title.spriteFrame = sprFrame;
              }
            });
            _this2.Button_last.interactable = SpeedCarModel.instance._curIndex > 0;
            _this2.Button_next.interactable = SpeedCarModel.instance._curIndex < _this2.maxIndex;
          }, delay);
        };
        _proto.onEnable = function onEnable() {
          var _this3 = this;
          _GameDef$BaseView.prototype.onEnable.call(this);
          view.on("canvas-resize", this.onResize, this);
          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          I18nLocal.getLocalRes(cBundle, this.arrTitleSpriteFrame[SpeedCarModel.instance._curIndex].name).then(function (sprFrame) {
            if (_this3.Sprite_title) {
              _this3.Sprite_title.spriteFrame = sprFrame;
            }
          });

          //        //注册ScrollView_carInfo滚动效果
          this.ScrollView_carInfo.node.on("touch-up", function () {
            _this3.onScrollTouchUp();
          }, this);
          this.ScrollView_carInfo.node.on("touchcancel", function () {
            _this3.onScrollTouchUp();
          }, this);
          this.ScrollView_carInfo.node.on("scroll-ended", this.setItem, this);
          this.ScrollView_carInfo.node.on("scrolling", this.setItem, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          view.off("canvas-resize", this.onResize, this);
          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          this.ScrollView_carInfo.node.off("touch-up");
          this.ScrollView_carInfo.node.off("touchcancel");
          this.ScrollView_carInfo.node.off("scroll-ended");
          this.ScrollView_carInfo.node.off("scrolling");
        };
        _proto.onResize = function onResize() {
          var viewSize = view.getVisibleSize();
          this.Node_carRoot.position = v3(-viewSize.width / 2, -viewSize.height / 2, -554.8);
          var scaleX = viewSize.width / 1920;
          var scaleY = viewSize.height / 1080;
          this.Node_planeBg.scale = v3(scaleX, scaleY, 1);
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
          this.unscheduleAllCallbacks();
        };
        _proto.start = function start() {
          if (this.ScrollView_carInfo) {
            this.ScrollView_carInfo.scrollToPercentHorizontal(SpeedCarModel.instance._curIndex / this.maxIndex, 0.01, true);
            this.Button_last.interactable = SpeedCarModel.instance._curIndex > 0;
            this.Button_next.interactable = SpeedCarModel.instance._curIndex < this.maxIndex;
          }
        }
        //    // update (dt) {}
        ;

        _proto.onBtnClick = function onBtnClick(event, eventData) {
          //        // gts.Debug.Log("=onBtnClick=eventData=" + eventData);
          switch (eventData) {
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", SpeedCarUtils.instance.bundle, function () {}, function (prefab) {
                  var viewNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(viewNode, true);
                }, true);
                break;
              }
            case "Button_next":
              {
                if (this.ScrollView_carInfo) {
                  SpeedCarModel.instance._curIndex++;
                  if (SpeedCarModel.instance._curIndex >= this.maxIndex) {
                    SpeedCarModel.instance._curIndex = this.maxIndex;
                  }
                  this.ScrollView_carInfo.scrollToPercentHorizontal(SpeedCarModel.instance._curIndex / this.maxIndex, 0.01, true);
                  this.Button_last.interactable = SpeedCarModel.instance._curIndex > 0;
                  this.Button_next.interactable = SpeedCarModel.instance._curIndex < this.maxIndex;
                }
                break;
              }
            case "Button_last":
              {
                SpeedCarModel.instance._curIndex--;
                if (SpeedCarModel.instance._curIndex < 0) {
                  SpeedCarModel.instance._curIndex = 0;
                }
                this.ScrollView_carInfo.scrollToPercentHorizontal(SpeedCarModel.instance._curIndex / this.maxIndex, 0.01, true);
                this.Button_last.interactable = SpeedCarModel.instance._curIndex > 0;
                this.Button_next.interactable = SpeedCarModel.instance._curIndex < this.maxIndex;
                break;
              }
            case "Node_car_0":
            case "Node_car_1":
            case "Node_car_2":
            case "Node_car_3":
            case "Node_car_4":
              {
                var roomIndex = parseInt(eventData.replace("Node_car_", ""));
                if (roomIndex != SpeedCarModel.instance._curIndex) {
                  SpeedCarModel.instance._curIndex = roomIndex;
                  this.ScrollView_carInfo.scrollToPercentHorizontal(SpeedCarModel.instance._curIndex / this.maxIndex, 0.15, true);
                  this.Button_last.interactable = SpeedCarModel.instance._curIndex > 0;
                  this.Button_next.interactable = SpeedCarModel.instance._curIndex < this.maxIndex;
                  return;
                }
                SpeedCarModel.instance.curTableInfo = SpeedCarModel.instance.roomInfoList[roomIndex];
                if (!SpeedCarModel.instance.curTableInfo) {
                  return;
                }
                EventManager.instance.emit(eEvent.onLoadGame);
                break;
              }
            case "BackHall":
              {
                Common.returnToHall(this, cBundle);
                break;
              }
          }
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
        //    ///////////////////////////////
        // onBuyIn(roomInfo: SpeedCarDef.IRoomInfo, isPlaying: boolean) {
        //     let _currentScene = director.getScene().getChildByName("Canvas");
        //     this.nodeBuyIn = _currentScene.getChildByName("uiJoinRoom");
        //     if (!this.nodeBuyIn) {
        //         this.nodeBuyIn = instantiate(this.uiJoinRoom);
        //         ViewManager.instance.popNodeView(this.nodeBuyIn, true);
        //         game.once("onPopViewClose" + this.nodeBuyIn.name, () => {
        //             this.nodeBuyIn = null;
        //         });
        //         this.nodeBuyIn.emit(SpeedCarDef.eEvent.uiInit, roomInfo, isPlaying);
        //     }
        // }
        ;

        _proto.updateView = function updateView(event, data) {
          var _this4 = this;
          switch (event) {
            case eProto.HD_GetTableList:
              {
                var _loop = function _loop() {
                  var planeBg = _this4.Node_planeBg.children[i];
                  I18nLocal.getLocalRes(cBundle, _this4.arrPlaneBgSpriteFrame[i].name).then(function (sprFrame) {
                    planeBg.getComponent(MeshRenderer).material.setProperty("mainTexture", sprFrame.texture);
                  });
                  var curTableInfo = SpeedCarModel.instance.roomInfoList[i];
                  var itemNode = _this4.ScrollView_carInfo.content.children[i];
                  var Label_time = itemNode.getChildByName("Label_time");
                  var Label_players = itemNode.getChildByName("Label_players");
                  if (curTableInfo.duration % 60 == 0) {
                    var min = Math.floor(curTableInfo.duration / 60);
                    Label_time.getComponent(Label).string = "" + min + i18n.lang.localLabel["public"].minute;
                  } else {
                    Label_time.getComponent(Label).string = "" + curTableInfo.duration + i18n.lang.localLabel["public"].second;
                  }
                  Label_players.getComponent(Label).string = "" + curTableInfo.playerNum;
                };
                for (var i = 0; i < SpeedCarModel.instance.roomInfoList.length; i++) {
                  _loop();
                }
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
                // //                //获取钱包//推送钱包
                // this.Label_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
                break;
              }
          }
        };
        _createClass(SpeedCarHallView, [{
          key: "maxIndex",
          get: function get() {
            return this.ScrollView_carInfo.content.children.length - 1;
          }
        }]);
        return SpeedCarHallView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_carRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_planeBg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_title", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_carInfo", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrPlaneBgSpriteFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "arrTitleSpriteFrame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "arrCheShenSpriteFrame", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Button_next", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Button_last", [_dec12], {
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

System.register("chunks:///_virtual/SpeedCarModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './SpeedCarDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameDef, eRunStatus, ePathType, eBetType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      ePathType = module.ePathType;
      eBetType = module.eBetType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3148eDbt1dMCoeCwYoveg4w", "SpeedCarModel", undefined);
      // 下注回包后多久内刷新到该位置才算“刚下注”，单位毫秒。
      var BET_POP_WINDOW = 300;
      var SpeedCarModel = exports('SpeedCarModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(SpeedCarModel, _GameDef$BaseSington);
        function SpeedCarModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this._curIndex = 2;
          _this._serverId = null;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.roomInfoList = null;
          _this.curTableInfo = null;
          _this.changeTableInfo = null;
          _this.isTest = false;
          _this.isAuto = false;
          _this.isReady = false;
          _this.totalRunTimes = 12;
          _this.betChipInfo = {};
          _this.betInfo = [];
          _this.gameRecord = null;
          _this.winArea = [false, false, false, false, false, false, false, false, false, false];
          _this.autoBallList = [];
          _this._betRound = 0;
          _this.maxFloors = 16;
          _this.minFloors = 8;
          _this.curFloors = 8;
          _this.baseBetList = [1000, 5000, 10000, 50000, 100000, 500000];
          _this.curBaseIndex = 0;
          _this.curBet = 1000;
          _this.comSpeedCarBetRecord = null;
          ////////////////////////////////////////
          // gameInfo: SpeedCarDef.IHD_info = null;
          _this.gemeIssue = null;
          _this.gameStatus = eRunStatus.NONE;
          _this.countDown = 0;
          _this.rankInfo = [];
          _this.runCfg = null;
          _this.gameResult = null;
          _this.checkout = null;
          _this.curPathType = ePathType.RANK;
          _this.curBetType = eBetType.LM;
          _this.carType = 0;
          _this.historyList = {};
          //betInfo
          _this.myBetInfoLast = null;
          //上局自己的下注信息
          _this.myBetInfo = null;
          //自己的下注信息
          _this.allBetInfo = null;
          //所有人的下注信息
          _this.playerNum = 0;
          //每个下注区域的赔率
          _this.betAreaRateCfg = null;
          _this.Chips = [1000, 5000, 10000, 50000, 100000, 500000];
          _this.isReEnter = false;
          // 最近一次被服务端确认的自己下注的位置和时间，用于让那一格的金额跳一下。
          _this.lastBetPos = -1;
          _this.lastBetTime = 0;
          return _this;
        }
        var _proto = SpeedCarModel.prototype;
        _proto.markBetPop = function markBetPop(pos) {
          this.lastBetPos = pos;
          this.lastBetTime = Date.now();
        }
        /**
         * 该位置是否是刚确认的那笔下注；同一笔只返回一次 true。
         * 列表项会随滚动复用，全场下注又每秒广播一次，所以不能靠“文字变了”来判断。
         */;
        _proto.takeBetPop = function takeBetPop(dataIndex) {
          if (dataIndex != this.lastBetPos || Date.now() - this.lastBetTime > BET_POP_WINDOW) {
            return false;
          }
          this.lastBetPos = -1;
          return true;
        }

        ////////////////////////////////////////////////////////////
        ////////////////////////////////
        /**
         * 退出房间  清理游戏数据
         */;
        _proto.clearGameData = function clearGameData() {
          SpeedCarModel.instance.gameStatus = eRunStatus.NONE;
          SpeedCarModel.instance.countDown = 0;
          SpeedCarModel.instance.myBetInfo = null;
          SpeedCarModel.instance.allBetInfo = null;
          SpeedCarModel.instance.gameResult = null;
          SpeedCarModel.instance.playerNum = 0;
          SpeedCarModel.instance.lastBetPos = -1;
        };
        return SpeedCarModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedCarPlaneLight.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, Component;
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
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "5180dIE4UNObqbDKj6fTWrS", "SpeedCarPlaneLight", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpeedCarPlaneLight = exports('SpeedCarPlaneLight', (_dec = ccclass("SpeedCarPlaneLight"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarPlaneLight, _Component);
        function SpeedCarPlaneLight() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cameraNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_feidieww", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpeedCarPlaneLight.prototype;
        _proto.start = function start() {};
        _proto.update = function update(dt) {
          this.node.position = v3(this.X_feidieww.position.x, this.X_feidieww.position.y - 5, this.X_feidieww.position.z);
        };
        return SpeedCarPlaneLight;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "X_feidieww", [_dec3], {
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

System.register("chunks:///_virtual/SpeedCarResult.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpeedCarDef.ts', './SpeedCarUtils.ts', './SpeedCarModel.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Node, v3, tween, Tween, find, ParticleSystem, Camera, game, Sprite, Rect, instantiate, Layers, MeshRenderer, Component, arrCarIndex, SpeedCarUtils, SpeedCarModel, Common;
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
      v3 = module.v3;
      tween = module.tween;
      Tween = module.Tween;
      find = module.find;
      ParticleSystem = module.ParticleSystem;
      Camera = module.Camera;
      game = module.game;
      Sprite = module.Sprite;
      Rect = module.Rect;
      instantiate = module.instantiate;
      Layers = module.Layers;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }, function (module) {
      arrCarIndex = module.arrCarIndex;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "42757bMaztETpHdoeFjuPhT", "SpeedCarResult", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      // 结算赛车渲染纹理的设计尺寸，与显示它的全屏 Sprite 一致。
      var RESULT_RT_WIDTH = 1920;
      var RESULT_RT_HEIGHT = 1080;
      var SpeedCarResult = exports('SpeedCarResult', (_dec = ccclass("SpeedCarResult"), _dec2 = menu("game/SpeedCarGame/SpeedCarResult"), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarResult, _Component);
        function SpeedCarResult() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_carRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrCar", _descriptor3, _assertThisInitialized(_this));
          _this.resultCamera = null;
          _this.rtFrame = 0;
          // 当前展示车是从哪辆赛车克隆的；源车不变时只换贴图，不重新克隆。
          _this.builtFromCar = null;
          return _this;
        }
        var _proto = SpeedCarResult.prototype;
        /////////////////////
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.fitRenderTexture();
          this.rtFrame = 0;
          var camera = this.getResultCamera();
          if (camera) {
            camera.enabled = true;
          }
          this.showResult();
          this.Node_carRoot.eulerAngles = v3(5, -20, 0);
          tween(this.Node_carRoot).to(3, {
            eulerAngles: v3(5, 20, 0)
          }).to(1, {
            eulerAngles: v3(5, 0, 0)
          }).union().repeatForever().start();
        };
        _proto.onDisable = function onDisable() {
          Tween.stopAllByTarget(this.Node_carRoot);
          var camera = this.getResultCamera();
          if (camera) {
            camera.enabled = true;
          }
          var winner = find("winner/all", this.node);
          for (var _iterator = _createForOfIteratorHelperLoose(winner.children), _step; !(_step = _iterator()).done;) {
            var childNode = _step.value;
            childNode.getComponent(ParticleSystem).stop();
          }
          winner.active = false;
        };
        _proto.getResultCamera = function getResultCamera() {
          if (!this.resultCamera) {
            var cameraNode = this.Node_carRoot.parent.getChildByName("Camera_fbx");
            this.resultCamera = cameraNode ? cameraNode.getComponent(Camera) : null;
          }
          return this.resultCamera;
        }

        // 这台相机把前三名赛车单独画到一张渲染纹理上，是结算阶段最重的一项
        // （MT6765/GE8320 实测：关掉它 24 帧 -> 35 帧）。纹理按画布短边等比缩小，不超过设计尺寸：
        // 低端机降分辨率后画布只有 540 高，再大的纹理屏幕也显示不出来（实测 24 帧 -> 29 帧）。
        ;

        _proto.fitRenderTexture = function fitRenderTexture() {
          var camera = this.getResultCamera();
          var renderTexture = camera ? camera.targetTexture : null;
          if (!renderTexture) {
            return;
          }
          var canvas = game.canvas;
          var scale = Math.min(1, Math.min(canvas.width, canvas.height) / RESULT_RT_HEIGHT);
          var width = Math.max(1, Math.round(RESULT_RT_WIDTH * scale));
          var height = Math.max(1, Math.round(RESULT_RT_HEIGHT * scale));
          if (renderTexture.width == width && renderTexture.height == height) {
            return;
          }
          renderTexture.resize(width, height);
          // 采样区域要跟着纹理尺寸走，否则之后重算 UV 会超出纹理。
          var spriteFrame = this.node.getChildByName("Sprite").getComponent(Sprite).spriteFrame;
          if (spriteFrame) {
            spriteFrame.rect = new Rect(0, 0, width, height);
          }
        }

        // 展示车只是缓慢左右转动，隔一帧画一次渲染纹理就够，另一帧沿用上次的内容（实测 29 帧 -> 32 帧）。
        ;

        _proto.update = function update() {
          var camera = this.getResultCamera();
          if (camera) {
            camera.enabled = this.rtFrame++ % 2 == 0;
          }
        };
        _proto.showResult = function showResult() {
          if (!SpeedCarModel.instance.gameResult) {
            return;
          }
          for (var i = 0; i < 3; i++) {
            var Sprite_car = this.node.getChildByName("Sprite_car_" + i).getComponent(Sprite);
            var carIndex = SpeedCarModel.instance.gameResult.result[i];
            var strFrame = carIndex < 10 ? "icon_haoma_0" + carIndex : "icon_haoma_" + carIndex;
            Sprite_car.spriteFrame = SpeedCarUtils.instance.arrCarTagSpriteFrame[strFrame];
          }
          var Node_win = this.node.getChildByName("Node_win");
          if (SpeedCarModel.instance.checkout) {
            Node_win.active = true;
            var inter = Common.numFormatInt(SpeedCarModel.instance.checkout.prizeAmount / 1000);
            var digit = SpeedCarUtils.instance.numberFormatD(SpeedCarModel.instance.checkout.prizeAmount / 1000, 2.0);
            this.Label_win.string = "" + inter + digit + "K";
            var winner = find("winner/all", this.node);
            winner.active = true;
            for (var _iterator2 = _createForOfIteratorHelperLoose(winner.children), _step2; !(_step2 = _iterator2()).done;) {
              var childNode = _step2.value;
              if (childNode.active) {
                childNode.getComponent(ParticleSystem).play();
              }
            }
          } else {
            Node_win.active = false;
            this.Label_win.string = "";
            var _winner = find("winner/all", this.node);
            for (var _iterator3 = _createForOfIteratorHelperLoose(_winner.children), _step3; !(_step3 = _iterator3()).done;) {
              var _childNode = _step3.value;
              _childNode.getComponent(ParticleSystem).stop();
            }
            _winner.active = false;
          }
          if (SpeedCarUtils.instance.Node_car) {
            // 每局都重新克隆三辆车会在结算弹出时卡一下（低端机实测约 0.5 秒）；
            // 同一车型的源车不变，只需要按名次换贴图。
            var sourceCar = SpeedCarUtils.instance.Node_car;
            var rebuild = this.builtFromCar !== sourceCar;
            this.builtFromCar = sourceCar;
            for (var _i = 0; _i < this.arrCar.length; _i++) {
              var _carIndex = SpeedCarModel.instance.gameResult.result[_i];
              var car = this.arrCar[_i];
              if (rebuild) {
                car.destroyAllChildren();
                for (var _iterator4 = _createForOfIteratorHelperLoose(sourceCar.children), _step4; !(_step4 = _iterator4()).done;) {
                  var nodeChild = _step4.value;
                  if (nodeChild && nodeChild.name != "Node_partical" && nodeChild.name != "shadow" && nodeChild.name != "cloud") {
                    var newNode = instantiate(nodeChild);
                    car.addChild(newNode);
                  }
                }
              }
              var mainTexture = SpeedCarUtils.instance.mCarSpriteFrame["T_" + arrCarIndex[SpeedCarModel.instance.curTableInfo.carType - 1] + "_" + _carIndex + "_Base"]; //SpeedCarModel.instance.curTableInfo.carType - 1
              // 开服后首次结算前进桌，服务端带回的上期名次是全 0，没有对应贴图；
              // 进场预热（SpeedCarGameView.warmResultPanel）会走到这里，跳过换贴图即可。
              if (!mainTexture) continue;
              for (var _iterator5 = _createForOfIteratorHelperLoose(car.children), _step5; !(_step5 = _iterator5()).done;) {
                var _nodeChild = _step5.value;
                _nodeChild.layer = Layers.nameToLayer("ui_3D");
                if (_nodeChild) {
                  _nodeChild.getComponent(MeshRenderer).material.setProperty("mainTexture", mainTexture.texture);
                }
              }
            }
          }
        };
        return SpeedCarResult;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_carRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrCar", [_dec5], {
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

System.register("chunks:///_virtual/SpeedCarRoomItemInfo.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // // Learn TypeScript:
      cclegacy._RF.push({}, "958fdXbQ3tFoYZ1Fnr6w8FM", "SpeedCarRoomItemInfo", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedCarScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './SpeedCarDef.ts', './SpeedCarUtils.ts', './Common.ts', './RenderScaleWatcher.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, DirectionalLight, Node, Prefab, assetManager, view, v3, isValid, director, Tween, instantiate, UIOpacity, tween, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, SpeedCarUtils, Common, RenderScaleWatcher;
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
      DirectionalLight = module.DirectionalLight;
      Node = module.Node;
      Prefab = module.Prefab;
      assetManager = module.assetManager;
      view = module.view;
      v3 = module.v3;
      isValid = module.isValid;
      director = module.director;
      Tween = module.Tween;
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
      SpeedCarUtils = module.SpeedCarUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      RenderScaleWatcher = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "6ce1e8TV8VOgqZFEPNbx+yT", "SpeedCarScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpeedCarScene = exports('default', (_dec = ccclass("SpeedCarScene"), _dec2 = menu("game/SpeedCarGame/SpeedCarScene"), _dec3 = property(Camera), _dec4 = property(Camera), _dec5 = property(DirectionalLight), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarScene, _Component);
        function SpeedCarScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "MainCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Camera_uiButtom", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "MainLight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfHead", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgTemp", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_sceneRoot", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor7, _assertThisInitialized(_this));
          _this._node_Game = null;
          _initializerDefineProperty(_this, "prefab_hall", _descriptor8, _assertThisInitialized(_this));
          _this._node_hall = null;
          // 进场时场景配置的环境光类型；-1 表示还没记录。
          _this.sceneEnvLighting = -1;
          return _this;
        }
        var _proto = SpeedCarScene.prototype;
        // @property(Camera)
        // mainCamera: Camera = null;
        // @property(Node)
        // Sprite_scene: Node = null;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          SpeedCarUtils.instance.bundle = assetManager.getBundle(cBundle);
          SpeedCarUtils.instance.preLoad();
          this.onLoadHall();
          this.onResize();
        };
        _proto.start = function start() {};
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
          var viewSize = view.getVisibleSize();
          this.Camera_uiButtom.node.position = v3(viewSize.width / 2, viewSize.height / 2, 1000);

          // 进场时垫在大厅出现之前的临时背景按 1920x1080 制作，没有适配组件；
          // 可见宽度超过 1920 的宽屏（如 20:9）下要等比放大才能盖住左右两边。大厅显示后它会被移出场景。
          if (this.bgTemp && isValid(this.bgTemp) && this.bgTemp.parent) {
            var scale = Math.max(viewSize.width / 1920, viewSize.height / 1080, 1);
            this.bgTemp.setScale(scale, scale, 1);
          }
          this.syncLowTierLighting();
        };
        // 渲染分辨率已被 RenderScaleWatcher 降档说明是低端机：环境光从 HDR 环境贴图改为半球光，
        // 省掉每个像素的环境反射采样（MT6765/GE8320 实测 37 帧 -> 41 帧），代价是车漆反光变平。
        // 降档无效被回退时恢复原配置。档位变化会派发 canvas-resize，所以挂在 onResize 里。
        _proto.syncLowTierLighting = function syncLowTierLighting() {
          var scene = director.getScene();
          var skybox = scene ? scene.globals.skybox : null;
          if (!skybox) {
            return;
          }
          if (this.sceneEnvLighting < 0) {
            this.sceneEnvLighting = skybox.envLightingType;
          }
          var watcher = scene.getComponentInChildren(RenderScaleWatcher);
          // 0 即 EnvironmentLightingType.HEMISPHERE_DIFFUSE，该枚举没有从 cc 导出。
          var envLighting = watcher && watcher.lowered ? 0 : this.sceneEnvLighting;
          if (skybox.envLightingType != envLighting) {
            skybox.envLightingType = envLighting;
          }
        }
        // onLoadHall() {
        //     console.time("bundle.onLoadHall");
        //     Common.showWait();

        //     //        //退到大厅
        //     Common.returnToHall(this, SpeedCarDef.cBundle);
        // }
        ;

        _proto.onLoadHall = function onLoadHall() {
          var _this2 = this;
          console.time("bundle.onLoadHall");
          Common.showWait();
          if (!this.prefab_hall) {
            SpeedCarUtils.instance.bundle.load("prefab/SpeedCarHall", Prefab, function (cur, total) {}, function (err, prefab) {
              _this2.prefab_hall = prefab;
              _this2.showHall();
            });
          } else {
            this.showHall();
          }
        };
        _proto.showHall = function showHall() {
          var _this3 = this;
          Tween.stopAllByTarget(this.MainCamera.node);
          this.MainCamera.node.position = v3(0, 4, -532);
          this.MainCamera.node.eulerAngles = v3(0, 0, 0);
          this.MainCamera.clearFlags = Camera.ClearFlag.DEPTH_ONLY;
          this.MainLight.node.eulerAngles = v3(-60, 0, 0);
          this.MainLight.illuminance = 75000;
          this.Node_sceneRoot.active = false;
          this.scheduleOnce(function () {
            _this3.bgTemp.removeFromParent();
          }, 0.2);
          if (this.prefab_hall) {
            if (!this._node_hall) {
              this._node_hall = instantiate(this.prefab_hall);
              this.node.addChild(this._node_hall);
            }
            this._node_hall.getComponent(UIOpacity).opacity = 255;
            if (this._node_Game) {
              this._node_Game.removeFromParent();
              this._node_Game.destroy();
              this._node_Game = null;
            }

            // this._node_hall.getComponent(UIOpacity).opacity = 0;

            // tween(this._node_hall.getComponent(UIOpacity))
            //     .to(0.5, { opacity: 255 })
            //     .call(() => {
            //         if (this._node_Game) {
            //             this._node_Game.removeFromParent();
            //             this._node_Game.destroy();
            //             this._node_Game = null;
            //         }
            //     })
            //     .start();

            Common.closeWait();
            console.timeEnd("bundle.onLoadHall");
          }
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this4 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            SpeedCarUtils.instance.bundle.load("prefab/SpeedCarGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this4.prefab_game = prefab;
              _this4.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this5 = this;
          this.MainCamera.clearFlags = Camera.ClearFlag.SKYBOX;
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              fadeInTimes = 0.15;
            }
            this.Node_sceneRoot.active = true;
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              Common.closeWait();
              if (_this5._node_hall) {
                _this5._node_hall.removeFromParent();
                _this5._node_hall.destroy();
                _this5._node_hall = null;
              }
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
        return SpeedCarScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MainCamera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Camera_uiButtom", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "MainLight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bgTemp", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_sceneRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "prefab_game", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prefab_hall", [_dec10], {
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

System.register("chunks:///_virtual/SpeedCarUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './SpeedCarDef.ts', './SpeedCarModel.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Color, Prefab, AudioClip, director, isValid, Tween, tween, v3, Sprite, Label, Node, UITransform, Graphics, UIOpacity, UIRenderer, Button, sys, assetManager, SpriteFrame, GameDef, AudioManager, cBundle, SpeedCarModel, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      director = module.director;
      isValid = module.isValid;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Sprite = module.Sprite;
      Label = module.Label;
      Node = module.Node;
      UITransform = module.UITransform;
      Graphics = module.Graphics;
      UIOpacity = module.UIOpacity;
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
      cBundle = module.cBundle;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c627drpgTdAbLrrW/AnJUre", "SpeedCarUtils", undefined);

      // 投注格的点击反馈：缩到 BET_PRESS_SCALE 再弹回，同时底图从亮色褪回原色。
      var BET_PRESS_SCALE = 0.94;
      var BET_PRESS_TIME = 0.15;
      var BET_FLASH_COLOR = new Color(255, 226, 120, 255);
      var BET_FLASH_TIME = 0.25;
      // “我的投注”画成实心绿色胶囊加深色粗体字，下过注的格子再加一圈描边，与黄色的全场总额区分。
      var MY_BET_PILL_COLOR = new Color(64, 255, 128, 255);
      var MY_BET_TEXT_COLOR = new Color(4, 52, 44, 255);
      var MY_BET_FONT_SIZE = 26;
      var MY_BET_PILL_HEIGHT = 36;
      var MY_BET_PILL_PAD_X = 14;
      var MY_BET_FRAME_WIDTH = 4;
      var MY_BET_FRAME_RADIUS = 6;
      var MY_BET_PILL_NAME = "Node_myBetPill";
      var MY_BET_FRAME_NAME = "Node_myBetFrame";
      var MY_BET_POP_SCALE = 1.35;
      var MY_BET_POP_TIME = 0.2;
      var SpeedCarUtils = exports('SpeedCarUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(SpeedCarUtils, _GameDef$BaseSington);
        function SpeedCarUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.arrTitleSpriteFrame = {};
          _this.arrCarTagSpriteFrame = {};
          _this.arrCarNumSpriteFrame = {};
          _this.Node_car = null;
          _this.mCarSpriteFrame = {};
          _this.arrPrefab = {};
          _this.soundIDList = {};
          _this.soundLoads = {};
          _this.soundScene = null;
          _this.soundGeneration = -1;
          return _this;
        }
        var _proto = SpeedCarUtils.prototype;
        //资源预加载
        _proto.preLoad = function preLoad() {
          // this.bundle.preload("prefab/SpeedCarGameView");
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
                    //@ts-ignore
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
                    //@ts-ignore
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
                  arrHLoad.push(
                  //@ts-ignore
                  this.asyncLoadDir("textures/betTitle", SpriteFrame, function (err, arrSpriteFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpriteFrame), _step; !(_step = _iterator()).done;) {
                        var spriteFrame = _step.value;
                        _this4.arrTitleSpriteFrame[spriteFrame.name] = spriteFrame;
                      }
                    }
                  }));
                  arrHLoad.push(
                  //@ts-ignore
                  this.asyncLoadDir("textures/carTag", SpriteFrame, function (err, arrSpriteFrame) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpriteFrame), _step2; !(_step2 = _iterator2()).done;) {
                        var spriteFrame = _step2.value;
                        _this4.arrCarTagSpriteFrame[spriteFrame.name] = spriteFrame;
                      }
                    }
                  }));
                  arrHLoad.push(
                  //@ts-ignore
                  this.asyncLoad("prefab/Node_nitrouEffect", Prefab, function (err, prefab) {
                    if (!err) {
                      _this4.arrPrefab[prefab.name] = prefab;
                    }
                  }));
                  arrHLoad.push(
                  //@ts-ignore
                  this.asyncLoad("prefab/Quad_num", Prefab, function (err, prefab) {
                    if (!err) {
                      _this4.arrPrefab[prefab.name] = prefab;
                    }
                  }));
                  arrHLoad.push(
                  //@ts-ignore
                  this.asyncLoad("model/cloud/preb/cloud", Prefab, function (err, prefab) {
                    if (!err) {
                      _this4.arrPrefab[prefab.name] = prefab;
                    }
                  }));
                  arrHLoad.push(
                  //@ts-ignore
                  this.asyncLoadDir("model/num", SpriteFrame, function (err, arrSpriteFrame) {
                    if (!err) {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(arrSpriteFrame), _step3; !(_step3 = _iterator3()).done;) {
                        var spriteFrame = _step3.value;
                        _this4.arrCarNumSpriteFrame[spriteFrame.name] = spriteFrame;
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
                  _context3.next = 9;
                  return Promise.all(arrHLoad);
                case 9:
                  if (cb) {
                    cb();
                  }
                case 10:
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
        _proto.playOneShot = function playOneShot(soundPath, isLoop, cb) {
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            AudioManager.instance.playOneShot(audioClip);
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
          var audioManager = AudioManager.instance;
          var scene = director.getScene();
          var generation = audioManager.effectGeneration;
          if (!this.bundle || !audioManager._soundEffect || !isValid(scene, true)) return;
          if (this.soundScene !== scene || this.soundGeneration !== generation) {
            this.stopAllSound();
            this.soundScene = scene;
            this.soundGeneration = generation;
          }
          // 加速状态会逐帧调用；加载前同时拦截已播放和仍在加载的同一音效。
          if (this.soundIDList[soundPath] || this.soundLoads[soundPath]) return;
          var request = {};
          this.soundLoads[soundPath] = request;
          try {
            this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
              if (_this6.soundLoads[soundPath] !== request) return;
              delete _this6.soundLoads[soundPath];
              // 停止/清场及场景切换只能失效等待，迟到资源不能重新启动旧音效。
              if (err || !audioClip || audioManager.effectGeneration !== generation || !isValid(scene, true) || director.getScene() !== scene) return;
              var soundID = audioManager.playSound(audioClip, isLoop);
              if (!soundID) return;
              _this6.soundIDList[soundPath] = soundID;
              audioManager.setFinishCallback(soundID, function () {
                if (_this6.soundIDList[soundPath] !== soundID) return;
                delete _this6.soundIDList[soundPath];
                if (cb) cb();
              });
            });
          } catch (error) {
            if (this.soundLoads[soundPath] === request) delete this.soundLoads[soundPath];
            throw error;
          }
        };
        _proto.stopSound = function stopSound(soundPath) {
          delete this.soundLoads[soundPath];
          var soundID = this.soundIDList[soundPath];
          delete this.soundIDList[soundPath];
          if (soundID) AudioManager.instance.stopSound(soundID);
        };
        _proto.stopAllSound = function stopAllSound() {
          this.soundLoads = {};
          var soundIDs = this.soundIDList;
          this.soundIDList = {};
          for (var _i = 0, _Object$keys = Object.keys(soundIDs); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            AudioManager.instance.stopSound(soundIDs[key]);
          }
        }
        /** 点中投注格的即时反馈：按压回弹，底图闪一下。连点时先复位，不会越缩越小。 */;
        _proto.playBetPress = function playBetPress(cell) {
          if (!cell || !isValid(cell)) {
            return;
          }
          Tween.stopAllByTarget(cell);
          cell.setScale(1, 1, 1);
          tween(cell).to(BET_PRESS_TIME / 2, {
            scale: v3(BET_PRESS_SCALE, BET_PRESS_SCALE, 1)
          }).to(BET_PRESS_TIME / 2, {
            scale: v3(1, 1, 1)
          }).start();
          var sprite = cell.getComponent(Sprite);
          if (sprite) {
            Tween.stopAllByTarget(sprite);
            sprite.color = BET_FLASH_COLOR;
            tween(sprite).to(BET_FLASH_TIME, {
              color: Color.WHITE
            }).start();
          }
        }

        /**
         * 刷新某一格的“我的投注”：金额胶囊、格子描边，以及刚被服务端确认的那一格的跳动。
         * dataIndex 是下注位置编号；cell 是该格的底图节点（描边画在它上面），可以不传。
         * 胶囊留在各页签原本给“我的投注”预留的位置：格子右上角是玩法标题，金额一长就会盖住它。
         */;
        _proto.showMyBet = function showMyBet(label, myBet, dataIndex, cell) {
          if (cell === void 0) {
            cell = null;
          }
          var hasBet = myBet > 0;
          var text = hasBet ? "\u20AB" + Common.ChangeMoneyShow(myBet, 2) : "";
          var labelNode = label.node;
          var pill = labelNode.parent.getChildByName(MY_BET_PILL_NAME);

          // 全场下注每秒广播一次都会走到这里，只有金额文字变了才重排、重画。
          if (label.string !== text || hasBet && !pill) {
            if (!label.color.equals(MY_BET_TEXT_COLOR)) {
              // 预制体里是固定宽度加自动缩小；改成按文字实际宽度，胶囊才能贴合。
              label.overflow = Label.Overflow.NONE;
              label.fontSize = MY_BET_FONT_SIZE;
              label.lineHeight = MY_BET_FONT_SIZE;
              label.isBold = true;
              label.enableOutline = false;
              label.color = MY_BET_TEXT_COLOR;
            }
            label.string = text;
            if (hasBet) {
              if (!pill) {
                // 插在文字节点前面，文字才画在胶囊上面。
                pill = new Node(MY_BET_PILL_NAME);
                pill.layer = labelNode.layer;
                pill.addComponent(UITransform);
                pill.addComponent(Graphics);
                labelNode.parent.insertChild(pill, labelNode.getSiblingIndex());
              }
              // 纵向放在“全场总额的下沿”和“格子底边描边的内沿”正中间，上下留白相等。
              // 各页签格子高度和总额位置不同，所以按实际节点计算，不用预制体里写死的坐标。
              var total = labelNode.parent.getChildByName("Label_totalBet");
              var cellSize = labelNode.parent.getComponent(UITransform);
              if (total && cellSize) {
                var top = total.position.y - total.getComponent(UITransform).height / 2;
                var bottom = -cellSize.height / 2 + MY_BET_FRAME_WIDTH;
                labelNode.setPosition(labelNode.position.x, (top + bottom) / 2, 0);
              }
              label.updateRenderData(true);
              var width = labelNode.getComponent(UITransform).width + MY_BET_PILL_PAD_X * 2;
              var graphics = pill.getComponent(Graphics);
              graphics.clear();
              graphics.fillColor = MY_BET_PILL_COLOR;
              graphics.roundRect(-width / 2, -MY_BET_PILL_HEIGHT / 2, width, MY_BET_PILL_HEIGHT, MY_BET_PILL_HEIGHT / 2);
              graphics.fill();
              pill.setPosition(labelNode.position);
            }
          }
          if (pill) {
            pill.active = hasBet;
          }
          this.showMyBetFrame(cell, hasBet);
          if (hasBet && SpeedCarModel.instance.takeBetPop(dataIndex)) {
            for (var _i2 = 0, _arr = [pill, labelNode]; _i2 < _arr.length; _i2++) {
              var node = _arr[_i2];
              Tween.stopAllByTarget(node);
              node.setScale(1, 1, 1);
              tween(node).to(MY_BET_POP_TIME / 2, {
                scale: v3(MY_BET_POP_SCALE, MY_BET_POP_SCALE, 1)
              }).to(MY_BET_POP_TIME / 2, {
                scale: v3(1, 1, 1)
              }).start();
            }
          }
        }

        /** 给下过注的格子画一圈描边；列表项复用到没下注的位置时隐藏。描边节点只创建、绘制一次。 */;
        _proto.showMyBetFrame = function showMyBetFrame(cell, show) {
          if (!cell || !isValid(cell)) {
            return;
          }
          var frame = cell.getChildByName(MY_BET_FRAME_NAME);
          if (!frame) {
            if (!show) {
              return;
            }
            frame = new Node(MY_BET_FRAME_NAME);
            frame.layer = cell.layer;
            frame.addComponent(UITransform);
            var graphics = frame.addComponent(Graphics);
            var size = cell.getComponent(UITransform);
            var inset = MY_BET_FRAME_WIDTH / 2;
            graphics.lineWidth = MY_BET_FRAME_WIDTH;
            graphics.strokeColor = MY_BET_PILL_COLOR;
            graphics.roundRect(-size.width / 2 + inset, -size.height / 2 + inset, size.width - inset * 2, size.height - inset * 2, MY_BET_FRAME_RADIUS);
            graphics.stroke();
            cell.addChild(frame);
          }
          frame.active = show;
        };
        _proto.updateLabelDI = function updateLabelDI(label, num) {
          var _this7 = this;
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            var inter = Common.numFormatInt(num);
            var digit = _this7.numberFormatD(num, 2);
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
          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this8.numberFormatFloatD(curWin / 1000, 2.0) : _this8.numberFormatD(curWin / 1000, 2.0);
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
          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this9.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this9.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
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
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this10.numberFormatFloat(curWin, 0) : "" + _this10.numberFormat(curWin, 0);
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
        }

        // checkColor(result) {
        //     if (result == 0) {
        //         return 1;
        //     }

        //     for (const num of cRed) {
        //         if (result == num) {
        //             return 2;
        //         }
        //     }

        //     return 3;
        // }
        // getLNNum(mid) {
        //     let midIndex = 0;
        //     for (let i = 0; i < arrIRound.length; i++) {
        //         if (arrIRound[i] == mid) {
        //             midIndex = i;
        //             break;
        //         }
        //     }

        //     let lastIndex = (midIndex + 36) % 37;
        //     let nextIndex = (midIndex + 1) % 37;

        //     return [arrIRound[lastIndex], arrIRound[nextIndex]];
        // }
        ;

        return SpeedCarUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpeedCarViewCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './SpeedCarDef.ts', './SpeedCarModel.ts', './SpeedCarUtils.ts', './CarCtrl.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v3, Camera, DirectionalLight, Node, Tween, isValid, sys, tween, MeshRenderer, color, Component, instantiate, Prefab, SpriteFrame, EventManager, eEvent, eSound, eRunStatus, startPosZ, arrCarIndex, SpeedCarModel, SpeedCarUtils, CarCtrl, Common;
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
      v3 = module.v3;
      Camera = module.Camera;
      DirectionalLight = module.DirectionalLight;
      Node = module.Node;
      Tween = module.Tween;
      isValid = module.isValid;
      sys = module.sys;
      tween = module.tween;
      MeshRenderer = module.MeshRenderer;
      color = module.color;
      Component = module.Component;
      instantiate = module.instantiate;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eEvent = module.eEvent;
      eSound = module.eSound;
      eRunStatus = module.eRunStatus;
      startPosZ = module.startPosZ;
      arrCarIndex = module.arrCarIndex;
    }, function (module) {
      SpeedCarModel = module.SpeedCarModel;
    }, function (module) {
      SpeedCarUtils = module.SpeedCarUtils;
    }, function (module) {
      CarCtrl = module.CarCtrl;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "d4c64DSQyZLSr/UIOZduiI9", "SpeedCarViewCtrl", undefined);
      // import { SpeedCarBall } from "../ui/SpeedCarBall";
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // const arrCarPos = [v3(1.5, 0.84, -190), v3(1.5, 0.84, 168.7)];/

      var arrCameraPos = [v3(0, 4, -532), v3(4, 50, -620), v3(4, 7, -571), v3(-60, 30, -532)];
      var arrCameraRotation = [v3(0, 0, 0), v3(-3, -180, 0), v3(-3, -180, 0), v3(-25, -90, 0)];

      // const arrLightPos = [v3(-55, 31.203, -530)];
      // const arrLightRotation = [v3(-158.8, 23.1, 0)];

      var cameraCruise = [{
        position: v3(4, 3, -542),
        rotation: v3(-10, -180, 0)
      }, {
        position: v3(-16, 3, -542),
        rotation: v3(-10, -180, 0)
      }, {
        position: v3(-16, 3, -520),
        rotation: v3(-10, 0, 0)
      }, {
        position: v3(25, 3, -520),
        rotation: v3(-10, 0, 0)
      }, {
        position: v3(25, 3, -542),
        rotation: v3(-10, 180, 0)
      }, {
        position: v3(4, 3, -542),
        rotation: v3(-10, 180, 0)
      }, {
        position: v3(4, 3, -571),
        rotation: v3(-10, 180, 0)
      }];
      var SpeedCarViewCtrl = exports('SpeedCarViewCtrl', (_dec = ccclass("game/SpeedCarGame/SpeedCarViewCtrl"), _dec2 = property(Camera), _dec3 = property(DirectionalLight), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpeedCarViewCtrl, _Component);
        function SpeedCarViewCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "MainLight", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_carRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_shuzi", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_honglvdeng", _descriptor5, _assertThisInitialized(_this));
          _this.arrCar = [];
          // 每次进房（含切前台、断线重连各发一次 HD_Enter）都会重载赛车；只有最新一次加载可以落地。
          _this.loadCarToken = 0;
          // 当前 arrCar 对应的车型，0 表示没有可用赛车。
          _this.loadedCarType = 0;
          _this.runTimes = 0;
          // 上次已通知的名次顺序。面板每次通知都会重排 10 个节点并强制刷新 Layout，
          // 而本方法每 0.1s 执行一次，所以只在顺序变化时通知；reset 清空后会重新通知一次。
          _this.lastRankKey = "";
          _this.isCameraCruise = false;
          return _this;
        }
        var _proto = SpeedCarViewCtrl.prototype;
        // mCarSpriteFrame: { [index: string]: SpriteFrame } = {};
        ////////////////////////////////////////////
        _proto.onLoad = function onLoad() {
          this.resetHongLvDeng();
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onStatusBet, this.onStatusBet, this);
          EventManager.instance.on(eEvent.onRunStart, this.onRunStart, this);
          EventManager.instance.on(eEvent.onLoadCar, this.onLoadCar, this);
          EventManager.instance.on(eEvent.onWaitCameraCruise, this.onWaitCameraCruise, this);
          EventManager.instance.on(eEvent.onStopCameraCruise, this.onStopCameraCruise, this);
          this.mainCamera.node.position = arrCameraPos[1];
          this.mainCamera.node.eulerAngles = arrCameraRotation[1];
          this.MainLight.node.eulerAngles = v3(v3(-158.8, 23.1, 0));
          this.MainLight.illuminance = 130000;
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onStatusBet, this.onStatusBet, this);
          EventManager.instance.off(eEvent.onRunStart, this.onRunStart, this);
          EventManager.instance.off(eEvent.onLoadCar, this.onLoadCar, this);
          EventManager.instance.off(eEvent.onWaitCameraCruise, this.onWaitCameraCruise, this);
          EventManager.instance.off(eEvent.onStopCameraCruise, this.onStopCameraCruise, this);

          // this.unschedule(this.onUpdateCameraPos);
          this.unschedule(this.onUpdateRank);
          Tween.stopAllByTarget(this.mainCamera.node);
        };
        _proto.reset = function reset() {
          this.resetHongLvDeng();
          this.unschedule(this.doRunStart);
          // this.unschedule(this.onUpdateCameraPos);
          this.unschedule(this.onUpdateRank);
          Tween.stopAllByTarget(this.mainCamera.node);
          SpeedCarUtils.instance.stopSound(eSound.engine2);
          this.lastRankKey = "";
        };
        // 同一车型且赛车节点都还有效时可以直接复用：贴图、号码牌、云雾和氮气节点都与车型绑定，不需要重建。
        _proto.canReuseCar = function canReuseCar(carType) {
          if (this.loadedCarType != carType || this.arrCar.length != 10) {
            return false;
          }
          for (var _iterator = _createForOfIteratorHelperLoose(this.arrCar), _step; !(_step = _iterator()).done;) {
            var car = _step.value;
            if (!isValid(car)) {
              return false;
            }
          }
          return true;
        };
        _proto.onLoadCar = /*#__PURE__*/function () {
          var _onLoadCar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var token, startTimes, carType, _iterator2, _step2, car, carPrefab, arrPro, loaded, newCar, i, _i, mainTexture, _iterator4, _step4, carNode;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  token = ++this.loadCarToken;
                  this.reset();
                  startTimes = sys.now();
                  carType = SpeedCarModel.instance.curTableInfo.carType;
                  if (!this.canReuseCar(carType)) {
                    _context.next = 8;
                    break;
                  }
                  // 切前台、重连、同车型换房都会走到这里；只把赛车恢复到起跑前的状态，避免销毁重建造成卡顿。
                  for (_iterator2 = _createForOfIteratorHelperLoose(this.arrCar); !(_step2 = _iterator2()).done;) {
                    car = _step2.value;
                    car.getComponent(CarCtrl).resetRun();
                  }
                  this.onCarReady(startTimes);
                  return _context.abrupt("return");
                case 8:
                  Common.showWait();

                  // 旧车已销毁，加载完成前不能再被起跑、排名等逻辑访问。
                  this.Node_carRoot.destroyAllChildren();
                  this.arrCar = [];
                  this.loadedCarType = 0;
                  SpeedCarUtils.instance.Node_car = null;
                  carPrefab = null;
                  arrPro = [];
                  arrPro.push(SpeedCarUtils.instance.asyncLoad("prefab/car/X_" + arrCarIndex[SpeedCarModel.instance.curTableInfo.carType - 1],
                  //SpeedCarModel.instance.curTableInfo.carType - 1
                  //@ts-ignore
                  Prefab, function (err, prefab) {
                    if (!err) {
                      carPrefab = prefab;
                    }
                  }));
                  arrPro.push(SpeedCarUtils.instance.asyncLoadDir("model/car/car_" + arrCarIndex[SpeedCarModel.instance.curTableInfo.carType - 1] + "/texture",
                  //@ts-ignore
                  SpriteFrame, function (err, arrSpriteFrame) {
                    if (!err) {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(arrSpriteFrame), _step3; !(_step3 = _iterator3()).done;) {
                        var spriteFrame = _step3.value;
                        SpeedCarUtils.instance.mCarSpriteFrame[spriteFrame.name] = spriteFrame;
                      }
                    }
                  }));
                  loaded = true;
                  _context.prev = 18;
                  _context.next = 21;
                  return Promise.all(arrPro);
                case 21:
                  _context.next = 26;
                  break;
                case 23:
                  _context.prev = 23;
                  _context.t0 = _context["catch"](18);
                  loaded = false;
                case 26:
                  if (!(token != this.loadCarToken || !isValid(this.node))) {
                    _context.next = 28;
                    break;
                  }
                  return _context.abrupt("return");
                case 28:
                  if (!(!loaded || !carPrefab)) {
                    _context.next = 31;
                    break;
                  }
                  Common.closeWait();
                  return _context.abrupt("return");
                case 31:
                  newCar = instantiate(carPrefab);
                  this.Node_carRoot.addChild(newCar);
                  for (i = 0; i < 10; i++) {
                    this.arrCar[i] = newCar.children[i];
                  }
                  SpeedCarUtils.instance.Node_car = this.arrCar[0];

                  //
                  for (_i = 0; _i < this.arrCar.length; _i++) {
                    mainTexture = SpeedCarUtils.instance.mCarSpriteFrame["T_" + arrCarIndex[SpeedCarModel.instance.curTableInfo.carType - 1] + "_" + (_i + 1) + "_Base"]; //SpeedCarModel.instance.curTableInfo.carType - 1
                    for (_iterator4 = _createForOfIteratorHelperLoose(this.arrCar[_i].children); !(_step4 = _iterator4()).done;) {
                      carNode = _step4.value;
                      if (carNode && carNode.name != "Node_partical" && carNode.name != "shadow" && carNode.name != "cloud") {
                        carNode.getComponent(MeshRenderer).material.setProperty("mainTexture", mainTexture.texture);
                        carNode.getComponent(MeshRenderer).material.setProperty("metallic", 1.0);
                        carNode.getComponent(MeshRenderer).material.setProperty("roughness", 0.9);
                      }
                    }
                    this.arrCar[_i].getComponent(CarCtrl).initCarNum(_i);
                  }
                  this.loadedCarType = carType;
                  this.onCarReady(startTimes);
                  Common.closeWait();
                case 39:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[18, 23]]);
          }));
          function onLoadCar() {
            return _onLoadCar.apply(this, arguments);
          }
          return onLoadCar;
        }() // 赛车就绪后按当前房间状态接续：比赛中从已进行的时间点起跑，下注阶段把相机拉回起跑线。
        ;

        _proto.onCarReady = function onCarReady(startTimes) {
          EventManager.instance.emit(eEvent.onCarReady);
          if (SpeedCarModel.instance.gameStatus == eRunStatus.RUNNING) {
            //
            startTimes = (sys.now() - startTimes) / 1000;
            var runTimes = 20 - (SpeedCarModel.instance.countDown - startTimes);

            //车跑
            this.onRunStart(runTimes);
          } else if (SpeedCarModel.instance.gameStatus == eRunStatus.BET) {
            this.mainCamera.node.position = arrCameraPos[1];
            this.mainCamera.node.eulerAngles = arrCameraRotation[1];
            tween(this.mainCamera.node).to(1, {
              position: arrCameraPos[2],
              eulerAngles: arrCameraRotation[2]
            }).start();
          }
        }

        // onUpdateCameraPos(dt) {
        //     let midPos = 0;
        //     for (let i = 0; i < 10; i++) {
        //         midPos += this.arrCar[i].position.z;
        //     }
        //     midPos = midPos / 10;

        //     this.runTimes += dt;
        //     /////////////////////////////////////////

        //     let runTimes = this.runTimes - 3;
        //     let sTimes = 1;
        //     if (runTimes < sTimes) {
        //         let disPos = midPos - SpeedCarDef.startPosZ - 20;
        //         let newPos = arrCameraPos[2].z + (disPos * runTimes) / sTimes;
        //         this.mainCamera.node.position = v3(arrCameraPos[2].x, arrCameraPos[2].y, newPos);
        //         return;
        //     }

        //     let curRunTimes = runTimes - sTimes;
        //     let ratio = curRunTimes / 3; //(12 - sTimes)
        //     ratio = ratio < 1 ? ratio : 1;

        //     let ratio_rotation = curRunTimes / 3;
        //     ratio_rotation = ratio_rotation < 1 ? ratio_rotation : 1;

        //     let ratio_addPos = curRunTimes / (12 - sTimes);
        //     ratio_addPos = ratio_addPos < 1 ? ratio_addPos : 1;

        //     let disPos = midPos - SpeedCarDef.startPosZ - 20 * (1 - ratio_addPos) + 60 * ratio_addPos;

        //     let positionX = arrCameraPos[2].x + (arrCameraPos[3].x - arrCameraPos[2].x) * ratio;
        //     let positionY = arrCameraPos[2].y + (arrCameraPos[3].y - arrCameraPos[2].y) * ratio;

        //     let eulerAnglesX = arrCameraRotation[2].x + (arrCameraRotation[3].x - arrCameraRotation[2].x) * ratio_rotation;
        //     let eulerAnglesY = arrCameraRotation[2].y + (arrCameraRotation[3].y - arrCameraRotation[2].y) * ratio_rotation;

        //     let newPos = arrCameraPos[2].z + disPos;
        //     if (newPos < this.mainCamera.node.position.z) {
        //         newPos = this.mainCamera.node.position.z;
        //     }

        //     this.mainCamera.node.position = v3(positionX, positionY, newPos);
        //     this.mainCamera.node.eulerAngles = v3(eulerAnglesX, eulerAnglesY, 0);
        // }
        ;

        _proto.resetHongLvDeng = function resetHongLvDeng() {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.X_honglvdeng), _step5; !(_step5 = _iterator5()).done;) {
            var deng = _step5.value;
            Tween.stopAllByTarget(deng);
            deng.getComponent(MeshRenderer).material.setProperty("mainColor", color(70, 70, 70, 255));
          }
        };
        _proto.doReadyStart = function doReadyStart() {
          var _this2 = this;
          if (this.runTimes > 3) {
            return;
          }
          var _loop = function _loop(i) {
            var X_honglvdeng = _this2.X_honglvdeng[i];

            //变红
            if (i <= _this2.runTimes) {
              SpeedCarUtils.instance.playOneShot(eSound.countdown);
              X_honglvdeng.getComponent(MeshRenderer).material.setProperty("mainColor", color(255, 0, 0, 255));
            } else {
              tween(X_honglvdeng).delay(i - _this2.runTimes).call(function () {
                SpeedCarUtils.instance.playOneShot(eSound.countdown);
                X_honglvdeng.getComponent(MeshRenderer).material.setProperty("mainColor", color(255, 0, 0, 255));
              }).start();
            }

            //变绿
            tween(X_honglvdeng).delay(3 - _this2.runTimes).call(function () {
              // 三盏灯同帧变绿，起跑音效只播一次，避免三路叠加。
              if (i == 0) {
                SpeedCarUtils.instance.playOneShot(eSound.start);
              }
              X_honglvdeng.getComponent(MeshRenderer).material.setProperty("mainColor", color(0, 255, 0, 255));
            }).start();
          };
          for (var i = 0; i < 3; i++) {
            _loop(i);
          }
        };
        _proto.onRunStart = /*#__PURE__*/function () {
          var _onRunStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(runTimes) {
            var delayRun, delay;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (runTimes === void 0) {
                    runTimes = 0;
                  }
                  if (!(this.arrCar.length == 0)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return");
                case 3:
                  this.onStopCameraCruise(false);
                  // 16 - runTimes
                  this.runTimes = runTimes;
                  ///////////////////////////////////////////////////////////
                  // this.winNum = Math.floor(Math.random() * 10);

                  this.mainCamera.node.position = arrCameraPos[2];
                  this.mainCamera.node.eulerAngles = arrCameraRotation[2];
                  SpeedCarUtils.instance.playSound(eSound.engine2);
                  this.doReadyStart();
                  delayRun = 3;
                  delay = this.runTimes > delayRun ? 0 : delayRun - this.runTimes;
                  this.scheduleOnce(this.doRunStart, delay);
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onRunStart(_x) {
            return _onRunStart.apply(this, arguments);
          }
          return onRunStart;
        }();
        _proto.onRunEnd = /*#__PURE__*/function () {
          var _onRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  SpeedCarModel.instance.gameStatus = eRunStatus.END;
                  SpeedCarUtils.instance.stopSound(eSound.engine2);
                  // this.unschedule(this.onUpdateCameraPos);
                  this.unschedule(this.onUpdateRank);
                  EventManager.instance.emit(eEvent.onRunEnd);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function onRunEnd() {
            return _onRunEnd.apply(this, arguments);
          }
          return onRunEnd;
        }();
        _proto.doRunStart = function doRunStart() {
          var _this3 = this;
          var delayRun = 3;
          var delay = this.runTimes > delayRun ? 0 : delayRun - this.runTimes;
          var result = SpeedCarModel.instance.gameResult.result;
          this.runTimes += delay;
          var startTimes = this.runTimes - delayRun;
          for (var iRank = 0; iRank < 10; iRank++) {
            var carIndex = result[iRank];
            var carCtrl = this.arrCar[carIndex - 1].getComponent(CarCtrl);
            carCtrl.doStartRun(iRank, startTimes);
          }
          if (startTimes >= SpeedCarModel.instance.totalRunTimes) {
            this.mainCamera.node.position = arrCameraPos[3];
            this.mainCamera.node.eulerAngles = arrCameraRotation[3];
            this.onRunEnd();
            this.schedule(this.onUpdateRank, 0.1);
            return;
          } else {
            this.mainCamera.node.position = arrCameraPos[2];
            this.mainCamera.node.eulerAngles = arrCameraRotation[2];
          }
          var destPos = v3(arrCameraPos[3].x, arrCameraPos[3].y, arrCameraPos[3].z + 1003);
          Tween.stopAllByTarget(this.mainCamera.node);

          // this.X_shuzi.position = v3(this.X_shuzi.position.x, this.X_shuzi.position.y, -518.139);
          // tween(this.X_shuzi)
          //     .to(
          //         SpeedCarModel.instance.totalRunTimes,
          //         { position: v3(this.X_shuzi.position.x, this.X_shuzi.position.y, 470) },
          //         {
          //             easing: "quadIn",
          //         }
          //     )
          //     .start(startTimes);

          // v3(4, 7, -571), v3(-60, 30, -532)
          var rotationTimes = 10;
          var posTimes = 5;
          tween(this.mainCamera.node).to(SpeedCarModel.instance.totalRunTimes, {
            position: destPos,
            eulerAngles: arrCameraRotation[3]
          }, {
            easing: "quadIn",
            onUpdate: function onUpdate(target, ratio) {
              var curRatio = ratio * SpeedCarModel.instance.totalRunTimes;
              var r_rotae = curRatio / rotationTimes;
              r_rotae = r_rotae > 1 ? 1 : r_rotae;
              var r_pos = curRatio / posTimes;
              r_pos = r_pos > 1 ? 1 : r_pos;
              var positionX = arrCameraPos[2].x + (arrCameraPos[3].x - arrCameraPos[2].x) * r_pos;
              var positionY = arrCameraPos[2].y + (arrCameraPos[3].y - arrCameraPos[2].y) * r_pos;
              var eulerAnglesX = arrCameraRotation[2].x + (arrCameraRotation[3].x - arrCameraRotation[2].x) * r_rotae;
              var eulerAnglesY = arrCameraRotation[2].y + (arrCameraRotation[3].y - arrCameraRotation[2].y) * r_rotae;
              target.position = v3(positionX, positionY, target.position.z);
              target.eulerAngles = v3(eulerAnglesX, eulerAnglesY, 0);
            }
          }).call(function () {
            _this3.onRunEnd();
          }).start(startTimes);

          // this.schedule(this.onUpdateCameraPos);
          this.schedule(this.onUpdateRank, 0.1);
        };
        _proto.onUpdateRank = function onUpdateRank() {
          var rankInfo = [];
          for (var i = 0; i < 10; i++) {
            rankInfo.push({
              index: i,
              pos: this.arrCar[i].position.z
            });
          }
          rankInfo.sort(function (a, b) {
            return b.pos - a.pos;
          });
          var rankKey = "";
          for (var _i2 = 0, _rankInfo = rankInfo; _i2 < _rankInfo.length; _i2++) {
            var info = _rankInfo[_i2];
            rankKey += info.index;
          }
          if (rankKey == this.lastRankKey) {
            return;
          }
          this.lastRankKey = rankKey;
          SpeedCarModel.instance.rankInfo = rankInfo;
          EventManager.instance.emit(eEvent.onUpdateRank);
        };
        _proto.onStatusBet = function onStatusBet() {
          // this.unschedule(this.onUpdateCameraPos);
          this.unschedule(this.onUpdateRank);
          // 下注阶段面板已被视图恢复为默认顺序，下一局的首次排名必须重新通知。
          this.lastRankKey = "";
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.X_honglvdeng), _step6; !(_step6 = _iterator6()).done;) {
            var deng = _step6.value;
            deng.getComponent(MeshRenderer).material.setProperty("mainColor", color(30, 30, 30, 255));
          }
          this.X_shuzi.position = v3(this.X_shuzi.position.x, this.X_shuzi.position.y, -518.139);
          this.mainCamera.node.position = arrCameraPos[2];
          this.mainCamera.node.eulerAngles = arrCameraRotation[2];
          if (this.arrCar.length > 0) {
            for (var i = 0; i < 10; i++) {
              this.arrCar[i].position = v3(this.arrCar[i].position.x, this.arrCar[i].position.y, startPosZ);
            }
          }
          this.onWaitCameraCruise();
        };
        _proto.onWaitCameraCruise = function onWaitCameraCruise() {
          this.doCameraCruise(true);
        };
        _proto.onStopCameraCruise = function onStopCameraCruise(reWait) {
          if (this.isCameraCruise) {
            this.doCameraCruise(false, reWait);
          }
        };
        _proto.doCameraCruise = function doCameraCruise(isShow, reWait) {
          var _this4 = this,
            _tween$delay;
          if (isShow === void 0) {
            isShow = true;
          }
          if (reWait === void 0) {
            reWait = false;
          }
          var delay = reWait ? 1 : 1;
          Tween.stopAllByTarget(this.mainCamera.node);
          if (!isShow) {
            this.isCameraCruise = false;
            tween(this.mainCamera.node).to(1.5, {
              position: arrCameraPos[2],
              eulerAngles: arrCameraRotation[2]
            }, {
              easing: "cubicOut"
            }).start();
            if (!reWait) {
              return;
            }
          }
          this.isCameraCruise = true;
          var arrTween = [];
          for (var i = 0; i < cameraCruise.length; i++) {
            var info = cameraCruise[i];
            arrTween.push(tween(this.mainCamera.node).to(20, {
              position: info.position,
              eulerAngles: info.rotation
            }, {
              easing: "quadInOut"
            }).delay(1));
          }
          arrTween.push(tween(this.mainCamera.node).call(function () {
            _this4.mainCamera.node.position = v3(4, 3, -571);
            _this4.mainCamera.node.eulerAngles = v3(-10, -180, 0);
          }));
          (_tween$delay = tween(this.mainCamera.node).delay(delay)).sequence.apply(_tween$delay, arrTween).repeatForever().start();
        };
        return SpeedCarViewCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "MainLight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_carRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "X_shuzi", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "X_honglvdeng", [_dec6], {
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

(function(r) {
  r('virtual:///prerequisite-imports/SpeedCarGame', 'chunks:///_virtual/SpeedCarGame'); 
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