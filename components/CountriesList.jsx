import React from 'react'
import countriesData from '../countriesData'
import CountryCard from './Countrycard'

export default function CountriesList({query}) {
  console.log(query);
  return (
    <div className="countries-container">
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
    </div>
  )
}