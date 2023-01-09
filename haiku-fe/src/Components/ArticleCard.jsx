
import { Link } from 'react-router-dom'

const ArticleCard = (props) => {
    let content

    if (props.content.length >= 100) {
        content = props.content.slice(0, 150) + "...."
    } else {
        content = props.content
    }

    return (
        <>
            <div className="caContainer">
                <h1 className='articleTitle'>{props.title}</h1>
                <p>{content}</p>
                <Link className='articleMore' to={`/article/?id=${props.id}`}>Read More ...</Link>
            </div>
        </>
    )
}

export default ArticleCard