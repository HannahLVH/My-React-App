import React, {useState} from "react";

import { greeting, user } from "./data";

import LabelInput from "./shared/LabelInput";

function App() {
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFormFields) => ({ ...prevFormFields, [name]: value }));
  };

  console.log(formFields)
  
  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>
      <form>
      <LabelInput id="firstName" value={formFields.firstName} handleInputChange={handleFormFieldChange}>First Name</LabelInput>
      <LabelInput id="lastName" value={formFields.lastName} handleInputChange={handleFormFieldChange}>Last Name</LabelInput>
      <LabelInput id="email" value={formFields.email} handleInputChange={handleFormFieldChange}>Email</LabelInput>
      <LabelInput id="password" value={formFields.password} handleInputChange={handleFormFieldChange}>Password</LabelInput>
      {/*
        <label htmlFor="firstName"> First Name </label>
        <input type="text" id="firstName" name="firstName" onChange={handleFormFieldChange}/>
        <br/>
        <label htmlFor="lastName"> Last Name </label>
        <input type="text" id="lastName" name="lastName" onChange={handleFormFieldChange}/>
        <br/>
        <label htmlFor="email"> Email </label>
        <input type="text" id="email" name="email" onChange={handleFormFieldChange}/>
        <br/>
        <label htmlFor="password"> Password </label>
        <input type="text" id="password" name="password" onChange={handleFormFieldChange}/>
      */}
        <br/>
      </form>
    </div>
  );
}

export default App;
