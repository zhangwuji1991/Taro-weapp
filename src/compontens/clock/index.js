import Taro, { Component } from '@tarojs/taro'

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {

    // 正确的做法是这样，在 setState 的第二个参数传入一个 callback：
    this.setState({
      date: new Date()
    },()=>{
        // console.log(this.state.date.toLocaleTimeString())
    });

    // 因为 this.state 和 props 一定是异步更新的，所以你不能在 setState 马上拿到 state 的值，
    // console.log(this.state.date.toLocaleTimeString())

    // 这是 Taro 和 React 另一个不同的地方：React 的 setState 不一定总是异步的，他内部有一套事务机制控制，且 React 15/16 的实现也各不相同。
    // 而对于 Taro 而言，setState 之后，你提供的对象会被加入一个数组，然后在执行下一个 eventloop 的时候合并它们。
  }

  render() {
    return (
      <View>
        <Text>现在的时间是 {this.state.date.toLocaleTimeString()}</Text>
      </View>
    )
  }
}

export default Clock
