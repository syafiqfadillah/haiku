import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ExploreCard from "../Components/ExploreCard"
import ArticleCard from "../Components/ArticleCard"
import AnimatedPage from "./AnimatedPage"
import { useEffect, useState } from "react"
import axios from "axios"

const Explore = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3333/get-blogs").then(result => setData(result.data))
    }, [setData])

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
                        {
                            data.map((result, index) => (
                                <ArticleCard key={index} title={result.title} content={result.content} id={result.id}/>
                            ))
                        }
                    </div>
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}

export default Explore