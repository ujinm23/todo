import { useState } from "react";
import "./App.css";
import Task from "./task";

function Tab(props) {
  return (
    <div className="tabContainer">
      <div className="tabItem">
        <h3 className="title">{props.title}</h3>
        <div className="color">{props.color}</div>
        <div className="width"></div>
      </div>
    </div>
  );
}

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  function handleAdd() {
    if (text.trim() === "") return;
    setTodos([...todos, { text: text, done: false }]);
    setText("");
  }

  function handleToggle(text) {
    const newTodos = todos.map((todo) =>
      todo.text === text ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }

  const filteredTodos = todos.filter((todo) => {
    if (status === "active") return !todo.done;
    if (status === "completed") return todo.done;
    return true;
  });

  return (
    <div
      style={{
        backgroundColor: "#F3F4F6",
        height: "100vh",
        paddingTop: "140px",
        boxSizing: "border-box",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div className="container">
        <div className="innerContainer">
          <div className="boardContainer">
            <h2 className="boardTitle inter">To-Do List</h2>

            <div className="inputContainer">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task..."
              />
              <button onClick={handleAdd}>Add</button>
            </div>

            <div className="tabContainer">
              <button onClick={() => setStatus("all")}>All</button>
              <button onClick={() => setStatus("active")}>Active</button>
              <button onClick={() => setStatus("completed")}>Completed</button>
            </div>

            <div className="taskContainer">
              {filteredTodos.map((item, index) => (
                <Task
                  key={index}
                  item={item}
                  onToggle={() => handleToggle(item.text)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
