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
    if (list === null || list === undefined) {
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
      content: this.state.value,
      checked: false
    });

    this.setState({
      tasklist: listArray,
    }, () => {
      this.toggleInputBox()
      localStorage.setItem('tasklist', JSON.stringify(this.state.tasklist));
    });
  }

  handleDone = (data) => {
    this.setState((prevState) => {
      return {
        tasklist: prevState.tasklist.map(task => {
          if (task.id === data.id) {
            return { ...task, checked: !data.checked };
          } else {
            return task;
          }
        }),
      };
    }, () => {
      localStorage.setItem('tasklist', JSON.stringify(this.state.tasklist));
    });
  }

  removeTask = (data) => {
    var selected_task = this.state.tasklist.filter(el => el.id !== data.id)
    this.setState({ tasklist: selected_task }, () => {
      localStorage.setItem('tasklist', JSON.stringify(this.state.tasklist));
    })

  }

  toggleInputBox = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addTask();
      this.toggleInputBox()
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
                  <li key={index} className="d-flex justify-content-between align-items-center text-warning m-2 p-3 border-bottom">
                    <TaskItem task={task} handleEnter={this.handleKeyPress} handleDone={this.handleDone} color={this.state.color} />
                    <span style={styles.icon} onClick={() => this.removeTask(task)}>
                      <i className="text-danger fa fa-close"></i>
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </section>
        {this.state.isOpen ?
          <div className="m-2 p-3">
            <div className="form-group ml-4">
              <input className="form-control" onChange={this.handleInputChange} onBlur={this.toggleInputBox} onKeyPress={this.handleKeyPress} autoFocus />
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
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px 0 0',
    fontSize: '2.5em',
    cursor: 'pointer',
  },
}

export default App;
