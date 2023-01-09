import Button from "react-bootstrap/esm/Button"
import { Form } from "react-bootstrap"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import AnimatedPage from "./AnimatedPage"
import axios from "axios"
import swal from "sweetalert"

const ArticleEdit = () => {
    const id = window.location.search

    const editBlog = (e) => {
        e.preventDefault()

        if (e.target[0].value && e.target[1].value) {
            const form = new FormData()
            form.append("title", e.target[0].value)
            form.append("content", e.target[1].value)

            axios.put(`http://localhost:3333/update-blog/${id.slice(4, id.length)}`, form)
            .then(() => {
                swal("Success!", "The Article Has Been Successfully Updated!", "success")
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
                    <h1 className="fw-bold">ARTICLE EDIT</h1>
                </div>
                <div className="aeContainer">
                    <div className="aeFormCont">
                        <Form className="aeForm" onSubmit={(e) => editBlog(e)}>
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

export default ArticleEdit