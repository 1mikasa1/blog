import React from 'react'
import './index.css'
class Home extends React.Component {
  state = {
    name:'tom'
  }
  render(){
    return (
      <div>
        <div>{this.state.name}</div>
        <div id='home' onClick={(e) => {
          console.log(e)
          this.setState({name:this.state.name == 'tom'?'jerry':'tom'})
        }}>home</div>
        <button onClick={() => {
          console.log('接收到了',this.props)
          // const pathname = this.props.match.path
          this.props.history.push('/school')
        }}>点我</button>
        <button
          onClick={() => {
            fetch('http://localhost:5000')
          }}
        >fetch请求</button>

        <video 
          loop
          src="https://activity.hdslb.com/blackboard/static/20220315/00979505aec5edd6e5c2f8c096fa0f62/kPbkWcX74M.mp4"
          playsInline
          autoCorrect
          autoCapitalize
          style={{
            position:'absolute',
            top:'40%',
            transform:'translateY(-50%)',
            left:0,
            width:'100%',
            objectFit:'cover',
            objectPosition:'center center',
            imageRendering:'pixelated',
            transition:'top 1s ease 0s'
          }}
          ></video>

      </div>
    )
  }
}

export default Home