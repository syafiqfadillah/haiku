import AnimatedLogin from "./AnimatedLogin"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import Swal from "sweetalert2";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Cookies from "universal-cookie"

import HLogo from '../Assets/Image/H-Logo2.png'
import SILogo from '../Assets/Image/SI.png'

const Login = () => {
    const nav = useNavigate()
    const cookies = new Cookies()

    const showPw = () => {
        const pw = document.querySelector("#pwd");
        if (pw.type === "password") {
            pw.type = "text";
        } else {
            pw.type = "password";
        }
    };

    const login = (e) => {
        e.preventDefault()

        if (e.target[0].value && e.target[1].value) {
            const form = new FormData()
            form.append("email", e.target[0].value)
            form.append("password", e.target[1].value)

            axios.post("http://localhost:3333/login", form)
            .then(result => {
                cookies.set("accessToken", result.data.accessToken)
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
                    title: "Login successfully"
                }).then(() => {
                    nav("/");
                });
            })
            .catch(() => Swal.fire({
                toast: true,
                position: "top-right",
                customClass: {
                  popup: "colored-toast",
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                icon: "error",
                title: "Something went wrong"
            }))
        } else {
            Swal.fire({
                toast: true,
                position: "top-right",
                customClass: {
                  popup: "colored-toast",
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                icon: "error",
                title: "Don't leave it Blank"
            })
        }
    }

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
                    <Form className="loginForm" onSubmit={(e) => login(e)}>
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
                                            {/* <i className="fa-solid fa-eye-slash"></i> */}
                                            {/* <i className="fa-solid fa-grip-lines"></i> */}
                                            <i className="bi bi-dash-lg"></i>
                                        </span>
                                        <span className="checked">
                                            <i className="fa-solid fa-eye"></i>
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