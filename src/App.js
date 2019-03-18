import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      item:'',
      editMode: false,
      id: uuid()
    }
  }
  
  handleChange = (e) => {
    this.setState({item:e.target.value})
  }

  handleSave = (e) => {
    e.preventDefault();
    const updatedItem = {id:this.state.id,title:this.state.item}
    this.setState({
      items: [...this.state.items,updatedItem],
      item:'',
      editMode:false,
      id:uuid()
    })
  }

  handleDelete = (id) => {
    const shortItem = this.state.items.filter(item => item.id !== id);
    this.setState({items:shortItem});
  }

  handleEdit = (id) => {
    const DeleteItem = this.state.items.filter(item => item.id !== id);
    const findItem = this.state.items.find(item => item.id === id);
    console.log(findItem);
    this.setState({
      items:DeleteItem,
      item:findItem.title,
      id:id,
      editMode:true
    })
  }

  clearAll = () => {
    this.setState({items:[]});
  }
  render() {
    return (
      <div>
        <h1>App section</h1>
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSave={this.handleSave} />
        <TodoList items={this.state.items} clearAll={this.clearAll} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
      </div>
    );
  }
}

export default App;
