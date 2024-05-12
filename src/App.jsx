
import { useState } from 'react';
import './App.css'
import Lista from './components/Lista';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [search, setSearch] = useState("");


return (
  <div className="container">
      <h1 className="titulo-liquido-3d">Rickcode for Rickgeousness</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="What's your squanch?..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Lista search={search} />
    </div>
);
}

export default App;