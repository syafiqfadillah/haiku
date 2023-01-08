import AnimatedLogin from './AnimatedLogin';
import axios from "axios";
import swal from "sweetalert"
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import HLogo from '../Assets/Image/H-Logo2.png';
import SULogo from '../Assets/Image/SU.png';

const Register = () => {
    // const nav = useNavigate()

    const showPw = () => {
        const pw = document.querySelector("#pwd");
        if (pw.type === "password") {
            pw.type = "text";
        } else {
            pw.type = "password";
        }
    };

    const submit = (e) => {
        e.preventDefault()

        if (e.target[0].value && e.target[1].value && e.target[2].value && e.target[3].value && e.target[5].files[0]) {
            const form = new FormData()
            form.append("name", e.target[0].value)
            form.append("username", e.target[1].value)
            form.append("email", e.target[2].value)
            form.append("password", e.target[3].value)
            form.append("photo", e.target[5].files[0])

            axios.post("http://localhost:3333/post-user", form)
            .then(() => swal("Success!", "Account Was Successfully Created!" ,"success"))
            .catch(() => swal("Error!", "Something Wrong!", "error"))
        } else {
            swal("Error!", "Don't Leave it Blank!", "error")
        }
    }

    return (
        <>
            <AnimatedLogin>
                <div className="registerContainer">
                    <div className="leftRegister">
                        <div className="leftLogo">
                            <img src={HLogo} alt="haiku-register" />
                            <img src={SULogo} alt="Register" />
                        </div>
                        <div className="text">
                            <h1>EXPLORE</h1>
                            <h6>The Entire Country Using Only Poetry</h6>
                        </div>
                        <div className="bgTop"></div>
                        <div className="bgSlide"></div>
                    </div>
                    <div className="rightRegister">
                        <Form className="registerForm" onSubmit={(e) => submit(e)}>
                            <Form.Group className="nameRG">
                                <Form.Label className='label'>Name</Form.Label>
                                <Form.Control className='inpName' type='text' size="sm" />
                            </Form.Group>
                            <Form.Group className="userRG">
                                <Form.Label className='label'>Username</Form.Label>
                                <Form.Control className='inpUsername' type='text' size="sm" />
                            </Form.Group>
                            <Form.Group className="emailRG">
                                <Form.Label className='label'>Email</Form.Label>
                                <Form.Control className="inpEmail" type="email" size="sm" />
                            </Form.Group>
                            <Form.Group className="passRG">
                                <Form.Label className='label'>Password</Form.Label>
                                <div className="formPW">
                                    <Form.Control className="inpPass" type="password" id="pwd" size="sm" />
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
                            <Form.Group className="imgRG">
                                <Form.Label className='label'>Upload Image</Form.Label>
                                <Form.Control type='file' size='sm' />
                            </Form.Group>
                            <div className="btnRG">
                                <Button type='submit'>Sign Up</Button>
                                <div className="bottomBtn">
                                    <p>Already Have an Account ? <Link className='suBtn' to="/login"> Sign In</Link></p>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </AnimatedLogin>
        </>
    )
}

export default Register