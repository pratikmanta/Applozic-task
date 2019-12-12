import React from 'react';

const TaskItem = ({ task }) => {

  return (
    <>
      <div style={styles.icon}>
        <i className="fa fa-circle"></i>
      </div>
      <h3>{task.content}</h3>
    </>
  )
}

const styles = {
  icon: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px 10px 0',
    fontSize: '2.5em',
    cursor: 'pointer',
  }
};

export default TaskItem;


