import "./App.css";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="button"
        disabled={search.trim().length > 2 ? false : true}
        onClick={() => {
          console.log(search);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default App;
