import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">RealTimeNEWS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Catagory
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">General</Link></li>
                                <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" id='searchArea' onChange={e => {
                            if (e.target.value === "") {
                                navigate('/');
                            } else {
                                props.setSearchVal(e.target.value);
                            }
                        }} placeholder="Search" aria-label="Search"/>
                        <Link disabled={props.searchVal === "" ? true : false} className="btn btn-outline-success" id='searchBtn' type="submit" to="/search">Search</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
