import Button from "react-bootstrap/esm/Button"
import { Form } from "react-bootstrap"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import AnimatedPage from "./AnimatedPage"

const ArticleEdit = () => {
    return (
        <>
            <Header/>
            <AnimatedPage>
                <div className="aeHead">
                    <h1 className="fw-bold">ARTICLE EDIT</h1>
                </div>
                <div className="aeContainer">
                    <div className="aeFormCont">
                        <Form className="aeForm">
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