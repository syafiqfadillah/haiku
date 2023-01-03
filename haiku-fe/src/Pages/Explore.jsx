import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ExploreCard from "../Components/ExploreCard"
import ArticleCard from "../Components/ArticleCard"
import AnimatedPage from "./AnimatedPage"

const Explore = () => {
    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="exploreContainer">
                    <div className="eSearchSec">
                        <form className="eSearch">
                            <input className="inSearch" type="text" placeholder="Search In Titles"/>
                            <button className="btnSearch"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <ExploreCard />
                    <div className="exList">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </div>
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}

export default Explore