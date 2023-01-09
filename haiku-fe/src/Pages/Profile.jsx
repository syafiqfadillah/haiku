import Header from "../Components/Header"
import Footer from "../Components/Footer"
import AnimatedPage from "./AnimatedPage"

import { Link } from 'react-router-dom'
import MyHistory from "../Components/MyHistory"
import MyArticles from "../Components/MyArticles"

import apip from '../Assets/Image/pp.jpeg'
import ScrollTop from "../Components/ScrollTop"

const Profile = () => {
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
                                <img src={apip} alt="Profile Images" />
                            </div>
                            <div className="profUsername">
                                <h1>Jason Stomach Hurting</h1>
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
                                    <MyArticles />
                                    <MyArticles />
                                    <MyArticles />
                                </div>
                            </div>
                            <div className="profHistoryList">
                                <h1 className="tMyHistory">My History</h1>
                                <span className="lineProf"></span>
                                <div className="pchContainer">
                                    <MyHistory />
                                    <MyHistory />
                                    <MyHistory />
                                    <MyHistory />
                                    <MyHistory />
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