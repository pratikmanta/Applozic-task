import React from 'react';

const TaskItem = ({ task, handleDone }) => {

  return (
    <>
      <div style={styles.iconText} onClick={() => handleDone(task)}>
        <i className={task.checked ? "fa fa-check text-success pr-3":"fa fa-circle pr-3"}></i>
        <h3>{task.content}</h3>
      </div>
    </>
  )
}

const styles = {
  iconText: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2.5em',
    cursor: 'pointer',
  },
};

export default TaskItem;


