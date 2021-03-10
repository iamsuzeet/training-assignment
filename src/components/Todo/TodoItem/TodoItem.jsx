import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markCompleteTodo, deleteTodo } from 'store/todos/todos-action';

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
    };
  };

  getTextDecoration = (completed) => {
    return {
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { todos } = this.props;

    return todos?.map((todo) => (
      <div style={this.getStyle()} className='row'>
        <div className='col-10'>
          <p>
            <input
              type='checkbox'
              onChange={() => this.props.markCompleteTodo(todo.id)}
              checked={todo.completed ? true : false}
            />{' '}
            <span
              className='ml-3'
              style={this.getTextDecoration(todo.completed)}
            >
              {todo.title}
            </span>
          </p>
        </div>
        <div className='col-2'>
          <button
            style={btnStyle}
            onClick={() => this.props.deleteTodo(todo.id)}
          >
            X
          </button>
        </div>
      </div>
    ));
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = {
  markCompleteTodo,
  deleteTodo,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(TodoItem);

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  outline: 'none',
};
