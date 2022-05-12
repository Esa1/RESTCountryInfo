import React from "react"
//import Place from "./Place"
//import data from "../data"
import ShowCountryInfo from "./ShowCountryInfo"
import RetrieveData from "./RetrieveData"

/*function ShowData() {
    let url = "https://restcountries.com/v3.1/name/finland?fullText=true";
    $.getJSON(url, function(data, status) {
        console.log(data)
    })
}*/

export default function Main(props) {
//    ShowData();
    console.log(Object.keys(props.capital))
    return (
        <div className="main">
            <div className="main--selection">
                <select>
                    <option value="Select">Select</option>
                    <option value="Finland">Finland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Norway">Norway</option>
                </select>
            </div>
            <div className="main--countryinfo">
                <div>Country: {props.name}</div>
                <div>Currency: {Object.keys(props.currency)[0]}</div>
                <div>Capital: {props.capital}</div>
            </div>    
        </div>
    )
}