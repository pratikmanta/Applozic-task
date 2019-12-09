import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="m-4 p-4">
        <nav class="navbar navbar-light text-warning border-bottom ">          
            <h1 className="text-center">To Do</h1>
            <span style={styles.buttonStyle}>
              <i class="fa fa-plus-square"></i>
            </span>
        </nav>  
      </div>
    );
  }
}

const styles = {
  buttonStyle : {
    fontSize: '4em',
    cursor:'pointer'
  }
}

export default App;
