import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
       onSearch(id);
       setId("")
    }
 }


  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className="bar">
      <input
        placeholder="Id entre 1 y 826"
        className="searchInput"
        onKeyUp={handleEnter}
        type="search"
        onChange={handleChange}
        value={id}
      
      />
      <button
        className="searchButton"
        onClick={() => {
          onSearch(id);
          setId(" ");
        }}
      >
        Agregar
      </button>
    </div>
  );
}
