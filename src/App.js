import React, { Component } from 'react';
import Modal from 'react-responsive-modal';


class App extends Component {
  state = {
    isOpen: false,
    task: ''
  };

  toggleModal = () => {
    this.setState(prevState => ({isOpen: !prevState.isOpen}));
  };

  handleInput = (e) => {
    console.log(e.target.value)
  }

  renderModal = () => {
    return (
      <Modal 
        open={this.state.isOpen} 
        showCloseIcon={false} center
        onClose={this.toggleModal}
        styles={{
          modal: styles.modalStyle
        }}
      >
        <div style={styles.inputBox}>
          <h3 className="text-center">To Do</h3>
          <div className="form-group">
            <textarea className="form-control" rows="3" onChange={this.handleInput}/>
          </div>
          <button className="btn btn-block btn-warning">Add to list</button>
        </div>
      </Modal>
    )
  }
   

  render() {
    return (
      <div className="m-4 p-4">
        <nav className="navbar navbar-light text-warning border-bottom ">          
            <h1>To Do</h1>
            <span style={styles.buttonStyle} onClick={this.toggleModal}>
              <i className="fa fa-plus-square"></i>
            </span>
        </nav> 
        {this.renderModal()}
      </div>
    );
  }
}

const styles = {

  inputBox : {
    width: '400px',
  },
  buttonStyle : {
    fontSize: '4em',
    cursor:'pointer',
  },
  modalStyle : {
    display: 'flex',
    justifyContent: 'center',
  }
}

export default App;
