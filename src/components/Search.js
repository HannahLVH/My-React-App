import React, {useState} from "react";

function Search({ searchTermCallbackHandler}) {
    const [searchTerm, setSearchTerm] = useState(""); //moved from App.js function
    const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
    searchTermCallbackHandler(e);
    };
    return (
        <div className="Search">
            <label htmlFor="searchTerm">Search Term</label>
            <input 
            type="text" 
            id="searchTerm" 
            name="searchTerm" 
            value={searchTerm}
            onChange={handleSearchTermChange}
            />
      </div>
    )
}

export default Search;