
import React from "react"
// import { Link } from "react-router-dom"

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.style} bg-${props.style}`}>
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="">About</a>
                    </li> */}


                </ul>
                <div className={`container my-3- ${ props.style==='light'? 'dark':'light'}`}>
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" onClick={props.toggle} id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1">enable mode</label>
                </div>
            </div>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2"  type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={search} type="submit">Search</button>
                </form> */}
            </div>
        </nav>
    )
}
