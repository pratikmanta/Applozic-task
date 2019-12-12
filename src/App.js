import React, { Component } from 'react';
import TaskItem from './taskItem/TaskItem';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      value: '',
      tasklist: []
    }
  }

  componentDidMount() {
    const list = localStorage.getItem('tasklist');
    const parsedList = JSON.parse(list);
    if(list == null || list == undefined){
      return false
    }
    else {
      this.setState({tasklist: parsedList})
    }
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  }

  addTask = () => {
    var listArray = this.state.tasklist;
    
    listArray.push({
      id: listArray.length,
      content:this.state.value
    });

    this.setState({
      tasklist: listArray,
      value: this.state.value
    }, () => {
        localStorage.setItem('tasklist', JSON.stringify(this.state.tasklist));
    });
    this.toggleInputBox();
  }

  toggleInputBox = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  render() {
    const { tasklist } = this.state;
    
    return (
      <div className="m-4 p-4">
        <nav className="navbar navbar-light text-warning border-bottom ">
          <h1>To Do</h1>
          <span style={styles.buttonStyle} onClick={this.toggleInputBox}>
            <i className="fa fa-plus-square"></i>
          </span>
        </nav>
        <section>
          <ul>
            {
              tasklist.map((task, index) => {
                return (
                  <li key={index} className="row text-warning m-2 p-3 border-bottom">
                    <TaskItem task={task} handleEnter={this.handleKeyPress} />
                  </li>
                )
              })
            }
          </ul>
        </section>
        {this.state.isOpen ?
          <div className="m-2 p-3">
            <div className="form-group ml-4">
              <input className="form-control" onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} autoFocus />
            </div>
          </div>
          : null
        }
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    fontSize: '4em',
    cursor: 'pointer',
  }
}

export default App;
