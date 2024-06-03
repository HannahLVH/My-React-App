import React, {useEffect, useState} from "react";

//Import all userssss array from the data.js
import { greeting, user, users } from "./data";

function App() {
  //Create a state named userId:
  const [userId, setUserId] = useState(1); //Remember its setter functions and the initial value is going to be number 1.

  //Implement a useEffect hook:
  useEffect(() => {
    //Using the find method on users array, find the user with the user id and assign it to a new variable:
    const currentUser = users.find((user) => user.id === userId);
    //Save this object into the local storage
    localStorage.setItem("currentUser", JSON.stringify(currentUser)); //Name the field "currentUser" and stringfy the user object found in previous step.

    console.log(currentUser) //console log the current user
  }, [userId]); //In the dependency array, include userId so the useEffect runs every time the user id changes.
  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>
      {/* In the return field, create two buttons */}
      {/* For the first button, add an on click event and call the user id setter function with argument number 1. */}
      <button onClick={() => setUserId(1)}>User 1</button>
      {/* For the second button, add an on click event and call the user id setter function with argument number 2. */}
      <button onClick={() => setUserId(2)}>User 2</button>
      {/* Observe, clicking each button and see the local storage value for currentUser change */}
    </div>
  );
}

export default App;
