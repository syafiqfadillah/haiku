import { NavLink, Link } from 'react-router-dom';

import IMG from '../Assets/Image/H-Logo.png'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg px-5 nav" aria-label="Thirteenth navbar example">
                <div class="container-fluid cH">
                    <div class="navbar-brand hLogo"><Link to="/"><img src={IMG} alt='Logo'/></Link></div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-lg-flex me-auto" id="navbarsExample11">
                        <ul class="navbar-nav col-sm justify-content-lg-center navWidth">
                            <li class="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                                <NavLink activeclassname='active' className='NL nav-link' to="/"><span className='toBtn'>Home</span><span className="toLine"></span></NavLink>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Link</a> */}
                                <NavLink activeclassname='active' className='NL nav-link' to="/explore"><span className='toBtn'>Explore</span><span className="toLine"></span></NavLink>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link disabled">Disabled</a> */}
                                <NavLink activeclassname='active' className='NL nav-link' to="/profile"><span className='toBtn'>Profile</span><span className="toLine"></span></NavLink>
                            </li>
                        </ul>
                        <div class="d-lg-flex justify-content-lg-end">
                            <Link class="btn btn-primary GS" to="/login">Get Started</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header