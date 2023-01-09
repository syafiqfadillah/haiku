import { Link } from 'react-router-dom'

const MyArticles = (props) => {
    let content

    if (props.content.length >= 100) {
        content = props.content.slice(0, 150) + "...."
    } else {
        content = props.content
    }

    return (
        <>
            <div className="maContainer">
                <h1 className='articleTitle'>{props.title}</h1>
                <p>{content}</p>
                <Link className='articleMore' to={`/article/?id=${props.id}`}>Read More ...</Link>
                <div className="myArBtn">
                    <Link className='articleEdit' to={`/articleedit/?id=${props.id}`}>Edit</Link>
                    <button className='articleDelete'>Delete</button>
                </div>
            </div>
        </>
    )
}

export default MyArticles