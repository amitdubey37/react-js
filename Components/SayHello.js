import React from 'react'

export default class SayHello extends React.Component {
    render(){
        return(
            <div><h1>{this.props.text}</h1></div>
        )
    }
}

SayHello.propTypes={
  text: React.PropTypes.string.isRequired
}
