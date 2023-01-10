import axios from 'axios'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const MyArticles = (props) => {
    let content

    if (props.content.length >= 100) {
        content = props.content.slice(0, 150) + "...."
    } else {
        content = props.content
    }

    const deleteBlog = () => {
        axios.delete(`http://localhost:3333/del-blog/${props.id}`)
        .then(() => swal("Success!", "Blog Has Been Deleted!", "success"))
    }

    return (
        <>
            <div className="maContainer">
                <h1 className='articleTitle'>{props.title}</h1>
                <p>{content}</p>
                <Link className='articleMore' to={`/article/?id=${props.id}`}>Read More ...</Link>
                <div className="myArBtn">
                    <Link className='articleEdit' to={`/articleedit/?id=${props.id}`}>Edit</Link>
                    <button className='articleDelete' onClick={() => deleteBlog()}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default MyArticles