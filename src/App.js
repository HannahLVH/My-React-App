import React, {useState} from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { greeting, user, tasks } from "./data";

function App() {
  const [myTasks, setMyTasks] = useState(tasks);
  const handleFormSubmit = (e) => {
    e.preventDefault(); //prevents the default behavior of a form submission
    const newItem = {
      id: myTasks.length + 1, //Makes the value of the id, the value of the length of myTasks array incremented by 1 
      title: e.target.taskName.value, //Make the value of the title, the value that will be submitted from the form. ALSO, taskName is the name and the id of the <input> element we used in the TaskForm component
      status: "In progress",
    };
    setMyTasks((prevState) => [...prevState, newItem]); //use the setter function from the state hook to update the myTasks list
  }; //useState() returns an array with two elements.
  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>

      <TaskForm handleFormSubmit={handleFormSubmit}/> {/*Sending handler function as a prop to TaskFrom component*/}
      <TaskList myTasks={myTasks} />
    </div>
  );
}

export default App;
