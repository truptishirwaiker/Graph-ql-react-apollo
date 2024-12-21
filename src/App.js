
import CountryList from './components/CountryList'
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CountryDetails from './components/CountryDetails'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    
      <Route exact path="/" element={<CountryList />} />
      <Route path="/countryDetails/:code" element={<CountryDetails />} />
    
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
