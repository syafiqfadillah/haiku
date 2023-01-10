import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Cookies from "universal-cookie";

import IMG from '../Assets/Image/H-Logo.png'

const Header = () => {

    const cookies = new Cookies();
    const token = cookies.get("accessToken");

    return (
        <>
            { !token ? (
                <nav className="navbar navbar-expand-lg px-5 nav" aria-label="Thirteenth navbar example">
                    <div className="container-fluid cH">
                        <div className="navbar-brand hLogo"><Link to="/"><img src={IMG} alt='Logo'/></Link></div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-lg-flex me-auto" id="navbarsExample11">
                            <ul className="navbar-nav col-sm justify-content-lg-center navWidth">
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    <NavLink activeclassname='active' className='NL nav-link' to="/"><span className='toBtn'>Home</span><span className="toLine"></span></NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <NavLink activeclassname='active' className='NL nav-link' to="/explore"><span className='toBtn'>Explore</span><span className="toLine"></span></NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link disabled">Disabled</a> */}
                                    <NavLink activeclassname='active' className='NL nav-link' to="/profile"><span className='toBtn'>Profile</span><span className="toLine"></span></NavLink>
                                </li>
                            </ul>
                            <div className="d-lg-flex justify-content-lg-end">
                                <Link className="btn btn-primary GS" to="/login">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            ) : (
                <nav className="navbar navbar-expand-lg px-5 nav" aria-label="Thirteenth navbar example">
                    <div className="container-fluid cH">
                        <div className="navbar-brand hLogo"><Link to="/"><img src={IMG} alt='Logo'/></Link></div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-lg-flex me-auto" id="navbarsExample11">
                            <ul className="navbar-nav col-sm justify-content-lg-center navWidth">
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    <NavLink activeclassname='active' className='NL nav-link' to="/"><span className='toBtn'>Home</span><span className="toLine"></span></NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <NavLink activeclassname='active' className='NL nav-link' to="/explore"><span className='toBtn'>Explore</span><span className="toLine"></span></NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link disabled">Disabled</a> */}
                                    <NavLink activeclassname='active' className='NL nav-link' to="/profile"><span className='toBtn'>Profile</span><span className="toLine"></span></NavLink>
                                </li>
                            </ul>
                            <div class="d-lg-flex justify-content-lg-end">
                                <img className='LGN' src={`http://localhost:3333/${user.photo}`} alt="Profile" />
                            </div>
                        </div>
                    </div>
                </nav>
            ) }
        </>
    )
}

export default Header