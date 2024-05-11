
import { useState } from 'react';
import './App.css'
import Lista from './components/Lista';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [search, setSearch] = useState("");


return (
  <div className="container">
    <h1 className="text-center my-4">Rickcode for Rickgeousness</h1>
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search character..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    <Lista search={search} />
  </div>
);
}

export default App;