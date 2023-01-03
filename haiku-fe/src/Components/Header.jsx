import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack'

import IMG from '../Assets/Image/H-Logo.png'

const Header = () => {
    return (
        <>
            <Navbar className='nav' expand="lg">
                <div className='cH'>
                    <Navbar.Brand className='hLogo'><Link to="/"><img src={IMG} alt='Logo'/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Stack direction='horizontal' gap={5} className='navWidth mx-auto col-sm-4'>
                                <NavLink activeclassname='active' className='NL' to="/"><span className='toBtn'>Home</span><span className="toLine"></span></NavLink>
                                <NavLink activeclassname='active' className='NL' to="/explore"><span className='toBtn'>Explore</span><span className="toLine"></span></NavLink>
                                <NavLink activeclassname='active' className='NL' to="/profile"><span className='toBtn'>Profile</span><span className="toLine"></span></NavLink>
                            </Stack>
                        </Nav>
                        <Nav.Link className='GS' href="/login">Get Started</Nav.Link>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    )
}

export default Header