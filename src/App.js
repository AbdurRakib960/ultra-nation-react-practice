import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([])
  const [cart , setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  },[])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart)
  }

  return (
    <div className="App">
      <h1>Loaded Country : {countries.length}</h1>
      <h2>Country Added : {cart.length}</h2>
      <ul>
        {
          countries.map(country => <Country country = {country} key = {country.alpha3Code} handleAddCountry = {handleAddCountry}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
