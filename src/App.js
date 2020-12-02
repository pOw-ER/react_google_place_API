import React from "react"
import './App.css';
import LocationSearchInput from "./search"
import SearchInput from "./search_antd"
import Search from "./search_input"

function App() {
  return (
    <div className="App">
      <LocationSearchInput/>
      <SearchInput/>
      <Search/>
    </div>
  );
}

export default App;
