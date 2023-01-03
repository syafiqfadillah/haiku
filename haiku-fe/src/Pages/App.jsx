import '../Assets/Style/CSS/App.css';

import React from "react";
import { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Loading from '../Components/Loading'

const Article = React.lazy(() => import('./Article'))
const ArticleEdit = React.lazy(() => import('./ArticleEdit'))
const ArticlePost = React.lazy(() => import('./ArticlePost'))
const Explore = React.lazy(() => import('./Explore'))
const Home = React.lazy(() => import('./Home'))
const Login = React.lazy(() => import('./Login'))
const Profile = React.lazy(() => import('./Profile'))
const ProfileEdit = React.lazy(() => import('./ProfileEdit'))
const Register = React.lazy(() => import('./Register'))
// const Loading = React.lazy(() => import('../Components/Loading'))

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/article' element={<Suspense fallback={<Loading/>}><Article /></Suspense>}/>
                <Route path='/articleedit' element={<Suspense fallback={<Loading/>}><ArticleEdit /></Suspense>}/>
                <Route path='/articlepost' element={<Suspense fallback={<Loading/>}><ArticlePost /></Suspense>}/>
                <Route path='/explore' element={<Suspense fallback={<Loading/>}><Explore /></Suspense>}/>
                <Route path='/' element={<Suspense fallback={<Loading/>}><Home /></Suspense>}/>
                <Route path='/login' element={<Suspense fallback={<Loading/>}><Login /></Suspense>}/>
                <Route path='/profile' element={<Suspense fallback={<Loading/>}><Profile /></Suspense>}/>
                <Route path='/profileedit' element={<Suspense fallback={<Loading/>}><ProfileEdit /></Suspense>}/>
                <Route path='/register' element={<Suspense fallback={<Loading/>}><Register /></Suspense>}/>
                <Route path='/loading' element={<Suspense fallback={<Loading/>}><Loading /></Suspense>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App