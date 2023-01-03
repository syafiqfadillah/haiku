import { Link } from 'react-router-dom'

const ArticleCard = () => {
    return (
        <>
            <div className="caContainer">
                <h1 className='articleTitle'>LEARN JAWA SCRIPT IN 5 MINUTES FULL COURSE EXPERT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque consequatur, vitae fuga placeat nemo rerum nam. Quidem, ullam doloremque.</p>
                <Link className='articleMore'>Read More ...</Link>
            </div>
        </>
    )
}

export default ArticleCard