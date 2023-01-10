import { useState, useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookies from "universal-cookie";
import jwtDecode from 'jwt-decode';
import axios from "axios"

import IMG from '../Assets/Image/H-Logo.png'

const Header = () => {

    const cookies = new Cookies();
    const token = cookies.get("accessToken");
    const userId = jwtDecode(token).userId
    const nav = useNavigate()
    const [photo, setPhoto] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:3333/get-photo/${userId}`)
        .then(result => setPhoto(result.data.data[0].photo))  
    }, [setPhoto])

    const Logout = () => {
        Swal.fire({
            toast: true,
            position: "top-right",
            customClass: {
                popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            icon: "success",
            title: "Logout successfully"
        }).then(() => {
            cookies.remove('accessToken')
            nav('/login')
        })
    }

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
                                    <NavLink activeclassname='active' className='NL nav-link' to={`/profile/?id=${userId}`}><span className='toBtn'>Profile</span><span className="toLine"></span></NavLink>
                                </li>
                            </ul>
                            <div class="d-lg-flex justify-content-lg-end">
                                <div className="profHead">
                                    <img className='LGN' src={`http://localhost:3333/${photo}`} alt="Profile" />
                                    <div className="dropdownLogout">
                                        <OverlayTrigger placement='bottom' overlay={<Tooltip>Logout</Tooltip>}>
                                            <button className='btnLgot' onClick={Logout}><i className="bi bi-power"></i></button>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            ) }
        </>
    )
}

export default Header