import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./index.scss";
import { AtButton, AtCheckbox } from "taro-ui";

@connect(({ cart }) => ({
  ...cart
}))
export default class Cart extends Component {
  config = {
    navigationBarTitleText: "cart"
  };
  state = {
    checkedList: ["list1"],
    checkboxOption: [
      {
        value: "list1",
        label: "iPhone X",
        desc:
          "部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"
      },
      {
        value: "list2",
        label: "HUAWEI P20"
      },
      {
        value: "list3",
        label: "OPPO Find X",
        desc:
          "部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。",
        disabled: true
      },
      {
        value: "list4",
        label: "vivo NEX",
        desc:
          "部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。",
        disabled: true
      }
    ]
  };

  componentDidMount = () => {};

  render() {
    return (
      <View className="cart-page">
        cart
        <AtButton type="primary">主要按钮</AtButton>
        <AtButton type="secondary">次要按钮</AtButton>
        <AtCheckbox
          options={this.state.checkboxOption}
          selectedList={this.state.checkedList}
        />
      </View>
    );
  }
}
