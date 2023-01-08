import AnimatedLogin from "./AnimatedLogin"
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import HLogo from '../Assets/Image/H-Logo2.png'
import SILogo from '../Assets/Image/SI.png'

const Login = () => {

    const showPw = () => {
        const pw = document.querySelector("#pwd");
        if (pw.type === "password") {
            pw.type = "text";
        } else {
            pw.type = "password";
        }
    };

    return (
        <>
            <AnimatedLogin>
            <div className="loginContainer">
                <div className="leftLogin">
                    <div className="leftLogo">
                        <img src={HLogo} alt="haiku-login" />
                        <img src={SILogo} alt="Login" />
                    </div>
                    <div className="text">
                        <h1>DISCOVER</h1>
                        <h6>The Entire World Using Only Word</h6>
                    </div>
                    <div className="bgTop"></div>
                    <div className="bgSlide"></div>
                </div>
                <div className="rightLogin">
                    <Form className="loginForm">
                        <Form.Group className="emailLG">
                            <Form.Label className='label'>Email</Form.Label>
                            <Form.Control className="inpEmail" type="email" />
                        </Form.Group>
                        <Form.Group className="passLG">
                            <Form.Label className='label'>Password</Form.Label>
                            <div className="formPW">
                                <Form.Control className="inpPass" type="password" id="pwd"/>
                                <OverlayTrigger placement="top-end" overlay={<Tooltip>Show Password</Tooltip>}>
                                    <label className="eyePW">
                                        <input type="checkbox" id="" onClick={showPw}/>
                                        <span className="unchecked">
                                            {/* <i class="fa-solid fa-eye-slash"></i> */}
                                            {/* <i class="fa-solid fa-grip-lines"></i> */}
                                            <i class="bi bi-dash-lg"></i>
                                        </span>
                                        <span className="checked">
                                            <i class="fa-solid fa-eye"></i>
                                        </span>
                                    </label>
                                </OverlayTrigger>
                            </div>
                        </Form.Group>
                        <div className="btnLG">
                            <Button type='submit'>Sign In</Button>
                            <div className="bottomBtn">
                                <p>Don't Have Account ? <Link className='suBtn' to="/register"> Sign Up</Link></p>
                                <p>Forgot Password ?</p>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            </AnimatedLogin>
        </>
    )
}

export default Login