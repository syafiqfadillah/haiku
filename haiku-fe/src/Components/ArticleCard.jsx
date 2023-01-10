import jwtDecode from 'jwt-decode'
import Cookies from "universal-cookie"
import { Link } from 'react-router-dom'
import axios from 'axios'

const ArticleCard = (props) => {
    let content
    const cookies = new Cookies()

    if (props.content.length >= 100) {
        content = props.content.slice(0, 150) + "...."
    } else {
        content = props.content
    }

    const addHistory = () => {
        const form = new FormData()
        form.append("userId", jwtDecode(cookies.get("accessToken")).userId)
        form.append("blogId", props.id)

        axios.post("http://localhost:3333/post-history", form)
    }

    return (
        <>
            <div className="caContainer">
                <h1 className='articleTitle'>{props.title}</h1>
                <p>{content}</p>
                <Link className='articleMore' to={`/article/?id=${props.id}`} onClick={() => addHistory()}>Read More ...</Link>
            </div>
        </>
    )
}

export default ArticleCard