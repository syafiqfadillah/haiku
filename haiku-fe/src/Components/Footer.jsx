import Navbar from 'react-bootstrap/Navbar';

import IMG from '../Assets/Image/H-Logo.png';

const Footer = () => {
    return (
        <>
            <Navbar className='navF' expand="lg">
                <div className='cF'>
                    <div className="fLeft">
                        <div className="fLogo">
                            <Navbar.Brand className='fLogo' href="#home"><img src={IMG} alt='Logo'/></Navbar.Brand>
                        </div>
                        <div className="fAbout">
                            <h3>About Me</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, et minus ex aliquid voluptatem quam aspernatur accusamus corrupti nobis officiis.</p>
                        </div>
                        <div className="fSosmed">
                            <i class="fa-brands fa-square-instagram"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-square-twitter"></i>
                            <i class="fa-brands fa-square-pinterest"></i>
                        </div>
                    </div>
                    <div className="fMid">
                        <div className="fPhone">
                            <i class="fa-solid fa-phone"></i>
                            <p>+62 858 - 1388 - 6287</p>
                        </div>
                        <div className="fMaps">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>
                                <p>Jalan Kebagusan 2 No. 92 16273</p>
                                <p>Ragunan, Jakarta Selatan</p>
                            </span>
                        </div>
                    </div>
                    <div className="fRight">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <form className='fEmailJs'>
                                <h1>CONTACT US</h1>
                                <input type="text" placeholder='Name' />
                                <input type="text" placeholder='Email' />
                                <textarea className='tarea' type="text" placeholder='Message' />
                                <button className='btnEmail'>SUBMIT</button>
                            </form>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Footer