import React from 'react'
import './CountriesListShrimmer.css'
export default function CountriesListShrimmer() {
    //new Array(10).fill('')

 
  return (
    <div className='countries-container'>
    {
        Array.from({length: 10}).map((el,i)=> {
        return <div key={i} className="country-card shimmer-card"></div>
    })
    }
    </div>
  )
}
