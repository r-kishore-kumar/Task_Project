import React from "react";
import { Link } from "react-router-dom";
import './Home.css'


export default function Home(){
    return(
        <div>
            <h1>Welcome to Home Page</h1>
            <nav>
        <Link to={'/profile'}>UserProfile</Link>
        <Link to={'/xml'}>XMLHttpRequest</Link>
        <Link to={'/chart'}>Chart</Link>
        <Link to={'/table'}>Table</Link>
        <Link to={'/authenticationfilter'}>Authentication Filter</Link>
        </nav>
        </div>
    )
}