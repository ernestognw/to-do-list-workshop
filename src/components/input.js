import React from "react";

function Input(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        value={props.value}
        placeholder="Ingresa una nueva tarea..."
        onChange={props.handleTaskChange}
        type="text"
        className="new-task"
      />
    </form>
  );
}

export default Input
