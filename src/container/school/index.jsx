import React from 'react'

class School extends React.Component {
  render(){
    return (
      <>
        <div>school</div>
        <button onClick={() => {
          console.log('学校到了',this.props)
          const pathname = this.props.match.path
          this.props.history.push('/')
        }}>点我</button>
      </>
    )
  }
}

export default School