import React from 'react';
import edit from '../edit.png';
import Delete from '../delete.png';

export default class TodoItem extends React.Component {
  render(){
    const {title,handleDelete,handleEdit} = this.props;
    return(
      <li className="todoItem">
        <div className="title">
          {title}
        </div>
        <div className="links">
          <a href="#" onClick={handleEdit}><img src={edit} /></a>
          <a href="#" onClick={handleDelete}><img src={Delete} /></a>
        </div>
        <div className="clr"></div>
      </li>
    )
  }
}