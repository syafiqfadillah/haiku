import Header from "../Components/Header"
import Carousels from "../Components/Carousels"
import Footer from "../Components/Footer"
import AnimatedPage from "./AnimatedPage"
import ScrollTop from "../Components/ScrollTop"
import ArticleCard from "../Components/ArticleCard"
import MyArticles from "../Components/MyArticles"

const Home = () => {
    return (
        <>
            <Header />
            <AnimatedPage>
                <Carousels />
                <div className="container-fluid row">
                    <div className="homeL col-md-7">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
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