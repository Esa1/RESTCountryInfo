import React from "react"
import ShowCountryInfo from "./ShowCountryInfo"

export default function RetrieveData() {
    console.log("RetrieveData")
    let url = "https://restcountries.com/v3.1/name/finland?fullText=true";
    $.getJSON(url, function(data, status) {
        console.log(data)
/*         return (
            <ShowCountryInfo />
        )*/
    })
    return (
        <div>RetrieveData</div>
    )

}
