import Header from "../Components/Header"
import Carousels from "../Components/Carousels"
import Footer from "../Components/Footer"
import AnimatedPage from "./AnimatedPage"

const Home = () => {
    return (
        <>
            <Header />
            <AnimatedPage>
                <Carousels />
            </AnimatedPage>
            <Footer />
        </>
    )
}

export default Home