import React from 'react';

export default class TodoInput extends React.Component {

  render() {
    const { item,handleChange, handleSave } = this.props;
    return(
      <div className="todoInput">
        <h3>Todo Input Section</h3>
        <form onSubmit={handleSave}>
          <input type="text" value={item} onChange={handleChange} />
          <button type="submit">Save</button>
        </form>
      </div>
    ) 
  }
}