import React from "react"
import { useState } from 'react';
import ShowCountryInfo from "./ShowCountryInfo"

export default function Main() {
    const [country, setCountry] = useState('Select');
    const [info, setInfo] = useState({
        country: '',
        currency: '',
        capital: ''
    });
    
    function RetrieveData(country) {
        console.log(country)
        setCountry(country)
        let url = "https://restcountries.com/v3.1/name/" + country + "?fullText=true";
        $.getJSON(url, function(data, status) {
            console.log(data[0])
            console.log(Object.keys(data[0].currencies)[0])
            setInfo({
                country: data[0].name.common,
                currency: Object.keys(data[0].currencies)[0],
                capital: data[0].capital
            })
        })
    }

    return (
        <div className="main">
            <div className="main--selection">
                <select
                    value={country}
                    onChange={e => RetrieveData(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="Finland">Finland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Norway">Norway</option>
                </select>
            </div>

            <div className="main--countryinfo">
                <div className="main--infoitem">
                    <div className="main--infodescr">Country:</div> 
                    <div>{info.country}</div>
                </div>
                <div className="main--infoitem">
                    <div className="main--infodescr">Currency:</div> 
                    <div>{info.currency}</div>
                </div>
                <div className="main--infoitem">
                     <div className="main--infodescr">Capital:</div> 
                    <div>{info.capital}</div>
                </div>
            </div>
        </div>
    )

}