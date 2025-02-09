import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './Countrycard'




export default function CountriesList({query}) {
  const [countriesData, setCountriesData] = useState([]);
  const [isdataLoaded, setIsDataLoaded] = useState(false);
  const [ error, setError] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(!isdataLoaded){
      fetch('https://restcountries.com/v3.1/all').
      then(res => res.json()).
      then(data => setCountriesData(data)).
      catch(err => setError(err));
      setCount(count+1);
    }
    setIsDataLoaded(true);
  }, [isdataLoaded])

  return (
    <>
      <button onClick={() => setIsDataLoaded(false)}>Fetch Data</button> {'    '}
      <button onClick={() => setCountriesData([])}>Empty</button> {'   '}
      <label>Count: {count}</label>
      {countriesData && (<div className="countries-container">
        {countriesData
        .filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        ).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          )
        })}
      </div>)}
      {!isdataLoaded && <p>Loading...</p>}
      {!countriesData && <p>No data found</p>}
      {error && <p>{error}</p>}

    </>
  )
}