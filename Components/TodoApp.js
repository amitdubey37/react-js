import React from 'react'
import TodoForm from './TodoForm'
import TodoBanner from './TodoBanner'
import TodoList from './TodoList'

export default class TodoApp extends React.Component{
    constructor(props){
      super(props)
      this.state={
        items:[]
      };
    }
    componentDidMount(){
      // console.log(this.state.items);
    }
   updateItems(newItem){
     var allItems = this.state.items.concat([newItem]);
      this.setState({items: allItems});
    }
    render(){
       return (
          <div>
          <TodoBanner/>
          <TodoList items={this.state.items}/>
          <TodoForm onFormSubmit={this.updateItems.bind(this)}/>
         </div>
         )
      }
   }
