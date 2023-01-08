import Header from "../Components/Header"
import Carousels from "../Components/Carousels"
import Footer from "../Components/Footer"
import AnimatedPage from "./AnimatedPage"
import ScrollTop from "../Components/ScrollTop"

const Home = () => {
    return (
        <>
            <Header />
            <AnimatedPage>
                <Carousels />
                <main className="container">
                    
                </main>
                <ScrollTop />
            </AnimatedPage>
            <Footer />
        </>
    )
}

export default Home