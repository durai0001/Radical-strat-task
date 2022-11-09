import { useState } from 'react';
import './App.css';
import CustomForm from './CustomForm';
import FetchUrlResponse from './FetchUrlResponse';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="App">
      <h1>Show React Form: 
        <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide': 'Show'}</button>
      </h1>
      <CustomForm show={showForm} />
      <FetchUrlResponse />
    </div>
  );
}

export default App;
