import Carousel from 'react-bootstrap/Carousel';
import SLIDER from '../Assets/Image/SLDER.png';

const Carousels = () => {
    return (
        <Carousel controls={false} indicators={false} pause={false}>
            <Carousel.Item interval={2000}>
                <img className='d-block w-100' src={SLIDER} alt="Slide1" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className='d-block w-100' src={SLIDER} alt="Slide2" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className='d-block w-100' src={SLIDER} alt="Slide3" />
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels