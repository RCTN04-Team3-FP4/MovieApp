import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";

function App() {
  const [search, setSearch] = useState("man");
  const onSearch = (value) => setSearch(value);

  return (
    <div>
      <Header onSearch={onSearch} />
      <Movie search={search} />
    </div>
  );
}

export default App;
