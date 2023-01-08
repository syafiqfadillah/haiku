import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AnimatedPage from './AnimatedPage';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ProfileEdit = () => {

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
            <Header/>
            <AnimatedPage>
            <div className="peContainer">
                <div className="peHeadBG">
                    <h1>EDIT YOUR PROFILE</h1>
                </div>
                <div className="peForm">
                    <Form className='feProfile'>
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
                                            <i class="bi bi-dash-lg"></i>
                                        </span>
                                        <span className="checked">
                                            <i class="fa-solid fa-eye"></i>
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