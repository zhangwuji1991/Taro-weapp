import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Test extends Component {
  componentWillMount () {
    let {id,type} = this.$router.params
    console.log(id,type)
    console.log(this.$router.params) // 输出 { id: 2, type: 'test' }
  }
  handClick(){
    Taro.redirectTo({
      url: '/pages/index/index'
    })
  }
  config = {
    navigationBarTitleText: 'test'
  }
  render () {
    return (
      <View className='index'>
        <View className='at-article__h1'>
        这是一级标题这是一级标题
        </View>
        <View className='at-article__info'>
        2017-05-07&nbsp;&nbsp;&nbsp;这是作者
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__h2'>这是二级标题</View>
            <View className='at-article__h3'>这是三级标题</View>
            <View className='at-article__p'>
              这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </View>
            <View className='at-article__p' onClick={this.handClick.bind(this)}>
              这是文本段落。这是文本段落。
            </View>
            <Image 
              className='at-article__img' 
              src='https://jdc.jd.com/img/400x400' 
              mode='widthFix' />
          </View>
        </View>
        <View>
      </View>
        
      </View>
    )
  }
}

export default Test
