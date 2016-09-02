import React from 'react'
import ReactDOM from 'react-dom'

export default class TodoForm extends React.Component{
   constructor(props) {
      super(props)
      this.state = {item:''};
     }

     handleSubmit(e){
        e.preventDefault()
         this.props.onFormSubmit(this.state.item);
         this.setState({item: ''});
         ReactDOM.findDOMNode(this.refs.item).focus(); return;
       }
     onChange(e){
        this.setState({ item: e.target.value });
      }
      render(){
         return (
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type='text' ref='item' onChange={this.onChange.bind(this)} value={this.state.item}/>
              <input type='submit' value='Add'/>
            </form>
          );
         }
        }
