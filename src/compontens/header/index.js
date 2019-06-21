import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Header extends Component {
  
  render () {
    return (
      <View className='index'>
        <View className='at-article__h1'>
            {this.props.name}
        </View>
      </View>
    )
  }
}

export default Header
