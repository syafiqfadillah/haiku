import Header from "../Components/Header"
import Carousels from "../Components/Carousels"
import Footer from "../Components/Footer"
import AnimatedPage from "./AnimatedPage"
import ScrollTop from "../Components/ScrollTop"
import ArticleCard from "../Components/ArticleCard"
import MyArticles from "../Components/MyArticles"
import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3333/get-blogs").then(result => setData(result.data))
    }, [setData])

    return (
        <>
            <Header />
            <AnimatedPage>
                <Carousels />
                <div className="container-fluid row">
                    <div className="homeL col-md-7">
                        {
                            data.map((result, index) => (
                                <ArticleCard key={index} title={result.title} content={result.content} id={result.id}/>
                            ))
                        }
                    </div>
                    <div className="homeR col-md-4">
                        <div className="position-sticky" style={{top: "50px"}}>
                            <h5>DISCOVER MORE OF WHAT MATTERS TO YOU</h5>
                            <span className="lineHome"></span>
                            <div className="btnDs">
                                <button>Programming</button>
                                <button>Animals</button>
                                <button>Football</button>
                                <button>Flora</button>
                                <button>Fauna</button>
                                <button>Technology</button>
                                <button>Data Science</button>
                                <button>Foods</button>
                                <button>Survival</button>
                                <button>Healthy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollTop />
            </AnimatedPage>
            <Footer />
        </>
    )
}

export default Home