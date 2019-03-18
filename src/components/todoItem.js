import React from 'react';

export default class TodoItem extends React.Component {
  render(){
    const {title,handleDelete,handleEdit} = this.props;
    return(
      <li className="todoItem">
        <div className="title">
          {title}
        </div>
        <div className="links">
          <a href="#" onClick={handleEdit}>Edit</a>
          <a href="#" onClick={handleDelete}>Delete</a>
        </div>
        <div className="clr"></div>
      </li>
    )
  }
}