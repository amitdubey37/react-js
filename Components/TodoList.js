import React from 'react'
import TodoListItem from './TodoListItem'

export default class TodoList extends React.Component{
  render() {
     var createItem = function(itemText) {
  
        return (
              <TodoListItem>{itemText}</TodoListItem>
            )
         }
         return(
         <ul >
            {this.props.items.map(createItem)}
         </ul>
       )
    }
 }
