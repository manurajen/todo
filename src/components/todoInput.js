import React from 'react';

export default class TodoInput extends React.Component {

  render() {
    const { item,handleChange, handleSave, editMode } = this.props;
    return(
      <div className="todoInput">
        <h3>Todo Input Section</h3>
        <form onSubmit={handleSave}>
          <input type="text" value={item} onChange={handleChange} />
          <button disabled={item ? false : true} type="submit">{editMode ? 'Save Edit Item' : 'Add Item'}</button>
        </form>
      </div>
    ) 
  }
}