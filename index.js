import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

/*
FULL NAME
Search by country full name
https://restcountries.com/v3.1/name/{name}?fullText=true
https://restcountries.com/v3.1/name/aruba?fullText=true
*/
function ShowData() {
    let url = "https://restcountries.com/v3.1/name/finland?fullText=true";
    $.getJSON(url, function(data, status) {
//        console.log(data)
        ReactDOM.render(<App data={data}/>, document.getElementById("root"))
   })
}
//ShowData()
ReactDOM.render(<App />, document.getElementById("root"))