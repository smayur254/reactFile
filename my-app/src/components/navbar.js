import React from "react"
import logo from '../logo.svg';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark px-4 justify-content-between">
            <div className="d-flex justify-content-start align-items-center logo">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="fs-2 fw-bolder m-0">ReactFacts</h1>
            </div>
            <div className="d-flex justify-content-end align-items-center">
                <h1 className="fs-2 fw-bolder m-0">React Course - Project 1</h1>
            </div>

        </nav>
    )
}