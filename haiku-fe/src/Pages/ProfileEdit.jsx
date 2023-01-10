import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AnimatedPage from './AnimatedPage';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import swal from 'sweetalert';

const ProfileEdit = () => {
    const search = window.location.search
    const userId = search.slice(4, search.length)

    const showPw = () => {
        const pw = document.querySelector("#pwd");
        if (pw.type === "password") {
            pw.type = "text";
        } else {
            pw.type = "password";
        }
    };

    const updateUser = (e) => {
        e.preventDefault()

        if (e.target[0].value && e.target[1].value && e.target[3].files[0]) {
            const form = new FormData()
            form.append("name", e.target[0].value)
            form.append("password", e.target[1].value)
            form.append("photo", e.target[3].files[0])

            axios.put(`http://localhost:3333/update-user/${userId}`, form)
            .then(() => swal("Success!", "User has been successfully updated!", "success"))
        }
    }

    return (
        <>
            <Header/>
            <AnimatedPage>
            <div className="peContainer">
                <div className="peHeadBG">
                    <h1>EDIT YOUR PROFILE</h1>
                </div>
                <div className="peForm">
                    <Form className='feProfile' onSubmit={(e) => updateUser(e)}>
                        <Form.Group className='nameEP'>
                            <Form.Label className='label'>Name</Form.Label>
                            <Form.Control className='inpName' type='text' />
                        </Form.Group>
                        <Form.Group className='passEP'>
                            <Form.Label className='label'>Password</Form.Label>
                            <div className="pwProf">
                                <Form.Control className='inpPass' type='password' id="pwd" />
                                <OverlayTrigger placement="left" overlay={<Tooltip>Show Password</Tooltip>}>
                                    <label className='eyePW'>
                                        <input type="checkbox" onClick={showPw}/>
                                        <span className='unchecked'>
                                            <i className="bi bi-dash-lg"></i>
                                        </span>
                                        <span className="checked">
                                            <i className="fa-solid fa-eye"></i>
                                        </span>
                                    </label>
                                </OverlayTrigger>
                            </div>
                        </Form.Group> 
                        <Form.Group className="imageEP">
                            <Form.Label className='label'>Upload Image</Form.Label>
                            <Form.Control type='file'/>
                        </Form.Group>
                        <Button type="submit">SUBMIT</Button>
                    </Form>
                </div>
            </div>
            </AnimatedPage>
            <Footer/>
        </>
    )
}

export default ProfileEdit