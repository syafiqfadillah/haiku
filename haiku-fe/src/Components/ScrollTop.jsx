import { useState } from "react"
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger"
import Tooltip from 'react-bootstrap/Tooltip';

const ScrollTop = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000){
            setVisible(true)
        } 
        else if (scrolled <= 1000){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <OverlayTrigger placement="left" overlay={<Tooltip>Scroll Back</Tooltip>}>
                <button className="ttBtn" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}><i className="bi bi-arrow-up-circle-fill"></i></button>
            </OverlayTrigger>
        </>
    )
}

export default ScrollTop