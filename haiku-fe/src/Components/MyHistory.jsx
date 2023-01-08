import { Link } from 'react-router-dom'

const MyHistory = () => {
    return (
        <>
            <div className="hisContainer">
                <h1 className='articleTitle'>LEARN JAWA SCRIPT IN 5 MINUTES FULL COURSE EXPERT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque consequatur, vitae fuga placeat nemo rerum nam. Quidem, ullam doloremque.</p>
                <Link className='articleMore' to='/article'>Read More ...</Link>
            </div>
        </>
    )
}

export default MyHistory