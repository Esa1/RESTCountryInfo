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
        <div className="main">capital
            <div>Country: {props.name}</div>
            <div>Currency: {Object.keys(props.currency)[0]}</div>
            <div>Capital: {props.capital}</div>
        </div>
    )
/*    
            <div>currency: {props.currency}</div>

return (
        <RetrieveData />
    )*/
/*    return (
        <div>
            Main
            <ShowCountryInfo />
        </div>
        <div className="Main">
            {data.map(place =>
                <Place
                    key={place.title}
                    p={place}
                />
            )}
        </div>

    )*/
}