import React, {useState} from "react";

import { greeting, user, albums } from "./data";


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
    console.log(searchTerm)
  }
  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>
      <div className="Search">
        <label htmlFor="albumName">Album Name</label>
        <input type="text" id="albumName" name="albumName"
        onChange={handleSearchTermChange}/>
      </div>
        
        {albums.map((album,index)=> (
          <div key={index}>
          <h2>{album.name}</h2>
          <p>{album.artist.name}</p>
          {album.tracks.map((track, trackIndex) => (
          <ul key={trackIndex}>
              <li>Track name: {track.name}</li>
              <li>Track length: {track.length}</li>
          </ul>
          ))}
          </div>
        ))}
    </div>
  );
}

// function App() {
// //useState is a React hook that declares a state variable (searchTerm) and a function to update it (setSearchTerm).
// const [searchTerm, setSearchTerm] = useState("") //searchTerm holds the name of the album you're looking for by typing it on the search bar.


// //This is a function named handleSearchTermChange that takes an event (e) as an argument.
// const handleSearchTermChange = (e) => {

// //setSearchTerm(e.target.value) updates the searchTerm state with the value from the event target (typically the input field).
//   setSearchTerm(e.target.value)
//   //console.log(searchTerm) logs the current value of searchTerm to the console. (Note: This may not immediately show the updated value due to the asynchronous nature of state updates in React.)
//   console.log(searchTerm)
// } //When typing something on the searchbar, find matches to what is typed and show it on the screen.

// //The return statement outputs the JSX (JavaScript XML) which defines the UI structure of the component.
// return (
//   //<div className="App"> creates a div element with a CSS class of App.
//   <div className="App">
//     <h1>
//       {greeting} {user}
//     </h1>
//     <div className="Search">
//       <label htmlFor="albumName">Album Name</label>
//       {/*input = search box
//       onChange={handleSearchTermChange} attaches the handleSearchTermChange function to the input's onChange event.*/}
//       <input type="text" id="albumName" name="albumName"
//       onChange={handleSearchTermChange} 
//       />
//     </div>
//       {/* {albums.map((album, index) => ( ... ))} maps over the albums array and returns a new array of JSX elements. */}
//       {albums.map((album,index)=> (
//         <div key={index}> 
//         {/* a unique key based on the index (this helps React keep track of list items). */}
//         <h2>{album.name}</h2>
//         <p>{album.artist.name}</p>
//         {/* {album.tracks.map((track, trackIndex) => ( ... ))} maps over the tracks array inside each album and returns a new array of JSX elements for each track. */}
//         {album.tracks.map((track, trackIndex) => (
//         <ul key={trackIndex}>
//             <li>Track name: {track.name}</li>
//             <li>Track length: {track.length}</li>
//         </ul>
//         ))}
//         </div>
//       ))}
//   </div>
// );
// }


export default App;
