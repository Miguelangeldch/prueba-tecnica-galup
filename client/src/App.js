import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Success from './pages/Success';

function App() {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    location: { lat: '', lng: '' },
    service: '',
    comment: ''
  });
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={'/'}
            element={<Home setValues={setValues} values={values} />}
          />
          <Route path={'/success'} element={<Success setValues={setValues} values={values} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
