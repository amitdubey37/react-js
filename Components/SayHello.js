import React from 'react'

export default class SayHello extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:'amit'
    }
  }
  /**nvoked once, both on the client and server, immediately before the initial rendering occurs.
  If you call setState within this method, render() will see the updated state and will be executed
  only once despite the state change.**/
  componentWillMount(){
    console.log('componentWillMount');
  }

  /**Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
   At this point in the lifecycle, you can access any refs to your children (e.g., to access the underlying DOM representation).
   The componentDidMount() method of child components is invoked before that of parent components.If you want to integrate with
    other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations
    in this method**/
  componentDidMount(){
    console.log(this.state.user)
  }
/**Invoked when a component is receiving new props. This method is not called for the initial render.
  Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState().
  The old props can be accessed via this.props. Calling this.setState() within this function will not trigger an additional render.**/
  componentWillReceiveProps(nextProps){
    this.setState({
    likes: nextProps.likeCount > this.props.likeCount
  });
  }
/**Invoked before rendering when new props or state are being received. This method is not called for the initial render or when
forceUpdate is used. Use this as an opportunity to return false when you're certain that the transition to the new props and
state will not require a component update.**/
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.id !== this.props.id;
  }

  /**nvoked immediately before rendering when new props or state are being received. This method is not called for the initial render.
Use this as an opportunity to perform preparation before an update occurs.**/

/**You cannot use this.setState() in this method. If you need to update state in response
  to a prop change, use componentWillReceiveProps instead.**/
  componentWillUpdate(nextProps,nextState){

  }
/**nvoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.
Use this as an opportunity to operate on the DOM when the component has been updated.**/
  componentDidUpdate(){

  }
/**nvoked immediately before a component is unmounted from the DOM.
Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements
that were created in componentDidMount**/
  componentWillUnmount(){

  }
    render(){
        return(
            <div><h1>{this.props.text}</h1></div>
        )
    }
}

SayHello.propTypes={
  text: React.PropTypes.string.isRequired
}
