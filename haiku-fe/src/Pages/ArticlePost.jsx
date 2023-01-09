import Button from "react-bootstrap/esm/Button"
import { Form } from "react-bootstrap"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import AnimatedPage from "./AnimatedPage"
import axios from "axios"
import swal from "sweetalert"
import jwtDecode from "jwt-decode"
import Cookies from "universal-cookie"

const ArticlePost = () => {
    const cookies = new Cookies()
    const userId = jwtDecode(cookies.get("accessToken")).userId

    const post = (e) => {
        e.preventDefault()

        if (e.target[0].value && e.target[1].value) {
            const form = new FormData()
            form.append("title", e.target[0].value)
            form.append("content", e.target[1].value)
            form.append("userId", userId)

            axios.post("http://localhost:3333/post-blog", form)
            .then(() => {
                swal("Success!", "Article Successfully Posted!", "success")
            })
            .catch(() => swal("Error!", "Something Wrong!", "error"))
        } else {
            swal("Error", "Don't Leave it Blank!", "error")
        }
    }

    return (
        <>
            <Header/>
            <AnimatedPage>
                <div className="aeHead">
                    <h1 className="fw-bold">ARTICLE POST</h1>
                </div>
                <div className="aeContainer">
                    <div className="aeFormCont">
                        <Form className="aeForm" onSubmit={(e) => post(e)}>
                            <Form.Group className="titleAE">
                                <Form.Label className="label">TITLE</Form.Label>
                                <Form.Control className="inpTitle" type='text' />
                            </Form.Group>
                            <Form.Group className="contentAE">
                                <Form.Label className="label">Content</Form.Label>
                                <Form.Control className="inpContent" as='textarea'/>
                            </Form.Group>
                            <Button type="submit">SUBMIT</Button>
                        </Form>
                    </div>
                </div>
            </AnimatedPage>
            <Footer/>
        </>
    )
}

export default ArticlePost