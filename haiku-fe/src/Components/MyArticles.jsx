import { Link } from 'react-router-dom'

const MyArticles = () => {
    return (
        <>
            <div className="maContainer">
                <h1 className='articleTitle'>LEARN JAWA SCRIPT IN 5 MINUTES FULL COURSE EXPERT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque consequatur, vitae fuga placeat nemo rerum nam. Quidem, ullam doloremque.</p>
                <Link className='articleMore' to='/article'>Read More ...</Link>
                <div className="myArBtn">
                    <Link className='articleEdit' to='/articleedit'>Edit</Link>
                    <button className='articleDelete'>Delete</button>
                </div>
            </div>
        </>
    )
}

export default MyArticles