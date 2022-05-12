import React from "react"
import Main from "./Components/Main"
import Header from "./Components/Header"

export default function App(props) {
//    console.log(props.data[0].capital)
    return (
        <div className="App">
            <Header />
            <hr/>
            <Main 
                name={props.data[0].name.common}
                currency={props.data[0].currencies}
                capital={props.data[0].capital}
            />
        </div>
        
    )
}