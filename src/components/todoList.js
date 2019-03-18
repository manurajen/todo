import React from 'react';
import TodoItem from './todoItem';

export default class TodoList extends React.Component {
  render(){
    const {items, clearAll, handleDelete, handleEdit} = this.props
    
    return(
      <div className="todoList">
        <h1>From Todo List</h1>
        <ul>
          {items.map((item) => (<TodoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)}  handleEdit={()=> handleEdit(item.id)}/>))}
        </ul>  
        {items.length > 0 ? (<button type="button" onClick={clearAll}>Clear All</button>) : ''}     
         
      </div>
    )
  }
}