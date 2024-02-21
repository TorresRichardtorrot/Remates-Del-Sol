import Header from "../components/largeComponents/Header/Header";
import Hero from "../components/largeComponents/Hero/Hero";
import About from "../components/largeComponents/About/About";
import NextAuction from "../components/largeComponents/NextAuction/NextAuction";
import History from "../components/largeComponents/History/History";
import Contact from "../components/largeComponents/Contact/Contact";

function LandingPage() {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <NextAuction/>
            <History/>
            <Contact/>
        </>
    );
}

export default LandingPage;