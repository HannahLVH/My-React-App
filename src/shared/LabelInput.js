import React from "react";

function LabelInput({id, value, type="text", handleInputChange, children}) {
    return (
        <> 
        <label htmlFor={id}> {children} </label>
            <input 
            type={type} 
            id={id} 
            name={id} 
            value={value}
            onChange={handleInputChange}
            />
        </>
    )
}

export default LabelInput;
