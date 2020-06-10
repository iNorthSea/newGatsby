import { Link } from "gatsby"
import React from "react"
import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
    }
  }

  // 组件渲染后调用
  // componentDidMount() 与 componentWillUnmount() 方法被称作生命周期钩子。
  // 在组件输出到 DOM 后会执行 componentDidMount() 钩子，我们就可以在这个钩子上设置一个定时器。this.timerID 为定时器的 ID，我们可以在 componentWillUnmount() 钩子中卸载定时器。
  componentDidMount() {
    window.addEventListener('scroll',
    this.hanldScroll)
  }
    // addEventListener() 方法用于向指定元素添加事件句柄。
    // addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。
    // 你可以向一个元素添加多个事件句柄。
    // 你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。
    // 你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。
    // addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。
    // 当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。
    // 你可以使用 removeEventListener() 方法来移除事件的监听。
  
  hanldScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50){
      this.setState({hasScrolled: true})
    }
    else {
      this.setState({hasScrolled: false})
    }
  }

  render(){
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')}width = "30"></img></Link>
          <Link to="/course">Course</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshop">Workshop</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}
//https://react.docschina.org/?
//React 组件使用一个名为 render() 的方法，接收输入的数据并返回需要展示的内容。在示例中这种类似 XML 的写法被称为 JSX。被传入的数据可在组件中通过 this.props 在 render() 访问。


export default Header
