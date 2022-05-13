import React from "react"
import Main from "./Components/Main"
import Header from "./Components/Header"

export default function App() {
//    console.log(props.data[0].capital)
    return (
        <div className="app">
            <Header />
            <hr/>
            <Main />
        </div>
    )
}
