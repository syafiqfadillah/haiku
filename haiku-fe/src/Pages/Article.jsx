import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AnimatedPage from './AnimatedPage'
import { useState } from 'react'

import haiku from '../Assets/Image/WorldMap.png'
import profile from '../Assets/Image/pp.jpeg'
import { useEffect } from 'react'
import axios from 'axios'

const Article = () => {
    const [article, setArticle] = useState([])
    const [user, setUser] = useState([])
    const id = window.location.search

    useEffect(() => {
        axios.get(`http://localhost:3333/get-blog/${id.slice(4, id.length)}`).then(result => {
            setArticle(result.data.data[0])
            setUser(result.data.data[0].user)
        })
    }, [setArticle, setUser, id])

    return (
        <>
            <Header/>
            <AnimatedPage>
                <main className="container arContainer text-light my-5">
                    <div className="m-auto">
                        <div className="col-md-12">
                            <div className="arProfSec d-flex w-100">
                                <img src={`http://localhost:3333/${user.photo}`} alt="Article Image Profile" className='rounded-circle' />
                                <div className="contArProf">
                                    <div className="arNameProf">
                                        <div className="arName">
                                            <h4 className='fw-bold'>{user.username}</h4>
                                            <p className='fw-lighter'>Member</p>
                                        </div>
                                        <div className="arProfMedsos">
                                            <i className="bi bi-twitter"></i>
                                            <i className="bi bi-instagram"></i>
                                            <i className="bi bi-pinterest"></i>
                                            <i className="bi bi-facebook"></i>
                                        </div>
                                    </div>
                                    <div className="arBtnProf">
                                        <button className='arBtn'>Follow</button>
                                        <button className='arBtn'>Message</button>
                                    </div>
                                </div>
                            </div>
                            <img src={haiku} alt="" className='arPoster rounded my-5'/>
                            <h2 className="pb-4 mb-4 fw-bold border-bottom">
                                {article.title}
                            </h2>
                            <h5 className="lh-lg">
                                {article.content}
                            </h5>
                        </div>
                    </div>
                </main>
            </AnimatedPage>
            <Footer/>
        </>
    )
}

export default Article