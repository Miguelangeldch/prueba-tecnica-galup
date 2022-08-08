import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Success from './pages/Success';

function App() {
  const [values, setValues] = useState({ location: { lat: '', lng: '' } });
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={'/'}
            element={<Home setValues={setValues} values={values} />}
          />
          <Route path={'/success'} element={<Success values={values} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
