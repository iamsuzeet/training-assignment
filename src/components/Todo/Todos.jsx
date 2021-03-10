import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem/TodoItem';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../store/todos/todos-action';

class Todos extends React.Component {
  state = {
    title: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: this.state.title,
      completed: false,
    };
    this.props.addTodo(newTodo);
    this.setState({ title: '' });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className='py-5 text-center'>
          <h2>To-Do List</h2>
        </div>
        <div className='row'>
          <div className='col-12'>
            <form onSubmit={this.onSubmit}>
              <div className='row'>
                <div className='col-10 form-group mb-2'>
                  <input
                    type='text'
                    name='title'
                    placeholder='Add Todo...'
                    value={this.state.title}
                    onChange={this.onChange}
                    className='form-control'
                  />
                </div>

                <div className='col-2'>
                  <button type='submit' className='btn btn-primary mb-2'>
                    Add Todo
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-12'>
            <TodoItem />
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
};

const connector = connect(null, mapDispatchToProps);

export default connector(Todos);
