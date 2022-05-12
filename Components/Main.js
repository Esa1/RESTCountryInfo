import React from "react"
import { useState } from 'react';
import ShowCountryInfo from "./ShowCountryInfo"
//import RetrieveData from "./RetrieveData"

function RetrieveData(country) {
    console.log(country)
    let url = "https://restcountries.com/v3.1/name/" + country + "?fullText=true";
    $.getJSON(url, function(data, status) {
        console.log(data)
    })
}

export default function Main(props) {
//    ShowData();
    const [country, setCountry] = useState('Finland');
    const [info, setInfo] = useState({
        country: 'CInit',
        currency: 'CInit',
        capital: 'CInit'
    });
    
    console.log(Object.keys(props.capital))
    return (
        <div className="main">
            <div className="main--selection">
                <select
                    onChange={e => RetrieveData(e.target.value)}
                >
                    <option value="Select">Select</option>
                    <option value="Finland">Finland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Norway">Norway</option>
                </select>
            </div>
{/*            <div className="main--countryinfo">
                <div>Country: {props.name}</div>
                <div>Currency: {Object.keys(props.currency)[0]}</div>
                <div>Capital: {props.capital}</div>
            </div>*/}
            <div className="main--countryinfo">
                <div>Country: {info.country}</div>
                <div>Currency: {info.currency}</div>
                <div>Capital: {info.capital}</div>
            </div>
        </div>
    )
}