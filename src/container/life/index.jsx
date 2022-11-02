import React from 'react'
// import './index.css'
class Life extends React.Component {
  //1.构造器
  constructor(props){
    console.log('1.constructor')
    super(props)
    this.state = {
      name:'tom'
    }
  }
  //2.组件将要挂载
  componentWillMount(){
    console.log('2.componentWillMount')
  }
  //更新：setState触发，组件是否应该更新
  shouldComponentUpdate(){
    //返回ture或false表示是否允许更新
    return true;
  }
  //更新：组件将要更新
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  render(){
    console.log('render')
    return (
      <div onClick={() => {
        this.setState({name:this.state.name+1})
      }}>
        点我更新
      </div>
    )
  }
  //更新：组件已经更新
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  //4.组件挂载完毕
  componentDidMount(){
    console.log('4.componentDidMount')
  }
  //5.组件卸载前
  componentWillUnmount(){
    console.log('5.componentDidMount')
  }
}

export default Life