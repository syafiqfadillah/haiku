import Header from "../Components/Header"
import Footer from "../Components/Footer"
import AnimatedPage from "./AnimatedPage"

import { Link } from 'react-router-dom'
import MyHistory from "../Components/MyHistory"
import MyArticles from "../Components/MyArticles"

import ScrollTop from "../Components/ScrollTop"
import { useState, useEffect } from "react"
import Cookies from "universal-cookie"
import jwtDecode from "jwt-decode"
import axios from "axios"

const Profile = () => {
    const [user, setUser] = useState([])
    const cookies = new Cookies()
    const userId = jwtDecode(cookies.get("accessToken")).userId

    useEffect(() => {
        axios.get(`http://localhost:3333/get-user/${userId}`, 
        { 
            headers: {
                "Authorization" : `Bearer ${cookies.get("accessToken")}`
            } 
        }).then(result => setUser(result.data.data[0]))   
    }, [setUser, userId, cookies])

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="profContainer">
                    <div className="profBG">
                        <div className="online">
                            <span className="circle"></span><h6>Online</h6>
                        </div>
                        <div className="slideProfBG"></div>
                    </div>
                    <div className="profContent">
                        <div className="profAccount">
                            <div className="profImage">
                                <img src={`http://localhost:3333/${user.photo}`} alt="Profile Images" />
                            </div>
                            <div className="profUsername">
                                <h1>{user.username}</h1>
                                <h3>Member</h3>
                            </div>
                            <div className="profEdit">
                                <Link className="btnEditProf" to='/profileedit'><i class="bi bi-pencil-square"></i> Edit Profile</Link>
                                <Link className="btnEditProf" to='/articlepost'>Post Article</Link>
                            </div>
                        </div>
                        <div className="profArticle">
                            <div className="profArticleList">
                                <h1 className="tMyArticle">My Articles</h1>
                                <span className="lineProf"></span>
                                <div className="pcaContainer">
                                    {
                                        user.blogs? user.blogs.map((article, index) => (
                                            <MyArticles key={index} title={article.title} content={article.content} id={article.id}/>
                                        )) 
                                        :
                                        false
                                    }
                                </div>
                            </div>
                            <div className="profHistoryList">
                                <h1 className="tMyHistory">My History</h1>
                                <span className="lineProf"></span>
                                <div className="pchContainer">
                                    {
                                        user.history? user.history.map((article, index) => (
                                            <MyHistory key={index} title={article.index} content={article.content} id={article.id} />
                                        ))
                                        :
                                        false
                                    }
                                </div>
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

export default Profile