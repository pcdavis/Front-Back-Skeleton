import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';
import axios from 'axios';
import { setTodos } from './redux/reducer';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', name:'', pw:'', todos: []};
  }

  componentWillMount() {
    axios.get('/api/todos').then(response => {
      console.log(response.data)
      this.props.setTodos(response.data);
    })
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    console.log('submitted')
    axios.post('/api/todo', {title: this.state.title, description: this.state.description}).then(resp => {
      console.log(resp);
      this.setState({ todos: resp.data });
    });
  }

  login(){
    let {name, pw} = this.state
    axios.post('/api/login',{name: name, pw:pw}).then(resp=>{
      console.log(resp)
    }).catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <Todo />
        <br/>
        <div className="main">
          
            <div className="input-group">
              <label htmlFor="">Name</label>
              <input name="name" type='text' onChange={(e) => this.handleChange(e)} />
            </div>
            <div className="input-group">
              <label htmlFor="">Password</label>
              <input name="pw" type='text' onChange={(e) => this.handleChange(e)} />
            </div>
            <button onClick={() => this.login()}>Login</button>
          
          <div className="input-group">
            <label htmlFor="">Title</label>
            <input name="title" type='text' onChange={(e) => this.handleChange(e)} />
          </div>

          <div className="input-group">
            <label htmlFor="">Description</label>
            <input name="description" type='text' onChange={(e) => this.handleChange(e)} />
          </div>
          <button onClick={() => this.handleSubmit()}>Submit</button>
        </div>

        {this.state.todos.map(todo => (
          <div key={todo.id}>
            <div>{todo.title}: {todo.description}</div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { setTodos: setTodos })(App);