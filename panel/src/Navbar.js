import React from "react";
import "./index.css";
import logo from "./logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="flex flex-row gap-6 items-center sm:text-sm font-bold md:text-4xl text-white h-32">
                    <a className="flex-shrink-0" href="/"><img className="h-32" src={logo}></img></a>
                    <a className="flex-shrink" href="/servers">Servers</a>
                    <a className="flex-shrink" href="/help">Get Started</a>
                    <a className="flex-shrink" href="/login">Login</a>
                </div>

                <div className="flex flex-row gap-6 items-center sm:text-sm font-bold md:text-4xl text-white h-32">
                    <a className="flex-shrink" href="/servers">Servers</a>
                    <a className="flex-shrink" href="/help">Get Started</a>
                    <a className="flex-shrink" href="/login">Login</a>
                </div>
            </div>
        )
    }
}



export default Navbar;