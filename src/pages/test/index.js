import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({test}) => ({
  ...test,
}))
export default class Test extends Component {
  config = {
    navigationBarTitleText: 'test',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="test-page">
        test
      </View>
    )
  }
}
