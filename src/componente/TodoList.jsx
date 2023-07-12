import React, { Fragment } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  return (
    <Fragment>
      <h1 style={{ marginLeft: "50%" }}>MI ALBUM</h1>
      <div className="input-group mt-4 mb-4">
        <input placeholder="Ingrese una tarea" className="form-control" type="text" />
        <button className="btn btn-success ms-2">+</button>
      </div>
      <div className="d-flex justify-content-start">
        <div className="mr-2">
          <TodoItem />
        </div>
        <div className="mr-2">
          <TodoItem />
        </div>
        <div className="mr-2">
          <TodoItem />
        </div>
      </div>
    </Fragment>
  );
}
