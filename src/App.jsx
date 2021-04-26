import "./App.css";
import { useState } from "react";
import Client from "./components/Client/Client";

const App = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("empty");
  const [clients, setClients] = useState();

  const getSearchResults = async () => {
    setStatus("fetching");
    const res = await fetch(`/api/clients?search=${search}`);
    const data = await res.json();
    setClients(data);
    setStatus("show");

    console.log(data);
  };

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
        onClick={() => getSearchResults()}
      >
        Search
      </button>

      {clients && clients.map((client) => <Client client={client} />)}
    </div>
  );
};

export default App;
