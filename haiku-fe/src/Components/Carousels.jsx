import Carousel from 'react-bootstrap/Carousel';
import SLIDER from '../Assets/Image/SLDER.png';

const Carousels = () => {
    return (
        <Carousel controls={false} indicators={false} pause={false}>
            <Carousel.Item interval={2000} className='citem'>
                <div className='crsl w-100'>
                    <h1 className='fw-bold'>"I am always ready to learn although I do not always like being taught."</h1>
                    <p>~ Winston Churchill</p>
                    <span className="logoci">
                        <i className="fa-solid fa-book-open"></i>
                    </span>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000} className='citem'>
                <div className='crsl w-100'>
                    <h1 className='fw-bold'>"Theory is knowledge that doesn't work. Practice is when everything works and you don't know why."</h1>
                    <p>~ Herman Hesse</p>
                    <span className="logoci">
                        <i className="fa-solid fa-book-open"></i>
                    </span>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000} className='citem'>
                <div className='crsl w-100'>
                    <h1 className='fw-bold'>"You don't learn to walk by following rules. You learn by doing, and by falling over."</h1>
                    <p>~ Richard Branson</p>
                    <span className="logoci">
                        <i className="fa-solid fa-book-open"></i>
                    </span>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels