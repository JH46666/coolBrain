import Taro, { Component } from "@tarojs/taro";
import { View, Button, Image, Text } from "@tarojs/components";
import topSign from "@/assets/topSign.png";
import bottomSign from "@/assets/bottomSign.png";
import share from "@/assets/fx.png";
import Group6 from "@/assets/Group6.png";
import Group3 from "@/assets/Group3.png";

import "./index.less";

class Modal extends Component {
  constructor() {
    super(...arguments);
  }

  confirmClick = () => {
    this.props.onConfirmCallback();
  };

  isClose = () => {
    console.log("2222");
    this.props.onCancelCallback();
  };

  onInfo = () => {
    this.props.onCancelCallback();
  };
  authConfirmClick = e => {
    this.props.onConfirmCallback(e.detail);
    Taro.setStorageSync("isHomeLongHideAuthModal", true);
  };

  preventTouchMove = e => {
    console.log("e", e);
    e.stopPropagation();
  };

  render() {
    const { showBadgeDialog, badge } = this.props;
    console.log("title", showBadgeDialog, badge);
    return (
      <View>
        {showBadgeDialog && (
          <View class="toplife_modal" onTouchMove={this.preventTouchMove}>
            <View
              class="toplife_modal_content"
              style="background-size: 100% 100%;"
            >
              <View className="head">
                <View className="close" onClick={this.isClose}></View>
              </View>
              <View className="body">
                <View className="text">打卡成功</View>
                <Image className="iconImg" src={badge.picture} />
              </View>
              <View className="foot">
                <Image
                  className="Group7"
                  src={Group3}
                  onClick={this.onInfo}
                ></Image>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

Modal.defaultProps = {
  title: "", //标题
  text: "", //提示的描述
  cancelText: "取消", //取消
  confirmText: "确定", //确定
  showBadgeDialog: false, //不显示
  isAuth: false, //是否为授权按钮
  cancelCallback: () => {},
  confirmCallback: () => {}
};

export default Modal;