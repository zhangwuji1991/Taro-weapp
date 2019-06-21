import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton,AtAccordion, AtList, AtListItem ,AtMessage } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'
import Header from '../../compontens/header/index'
import Clock from '../../compontens/clock/index'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      open: false,
      value:''
    }
  }

  handlesClick(value) {
    this.setState({
      open: value
    })
  }

  handleClick (type) {
    Taro.redirectTo({
      url: '/pages/test/index?id=2&type=test'
    })
    Taro.atMessage({
      'message': '消息通知',
      'type': type,
    })
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
    
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Header name="Wallace" />
        <Clock></Clock>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <AtButton type='primary'>按钮文案</AtButton>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
          <AtAccordion
            open={this.state.open}
            onClick={this.handlesClick.bind(this)}
            title='标题一'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='标题文字'
                arrow='right'
                thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
                thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
              />
            </AtList>
          </AtAccordion>
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
            <View className='at-article__p'>
              这是文本段落。这是文本段落。
            </View>
            <Image 
              className='at-article__img' 
              src='https://jdc.jd.com/img/400x400' 
              mode='widthFix' />
          </View>
        </View>
        <View>
        <AtMessage />
        <AtButton onClick={this.handleClick.bind(this)}>
          普通消息
        </AtButton>
      </View>
        
      </View>
    )
  }
}

export default Index
