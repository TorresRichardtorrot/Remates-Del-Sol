import Header from "../components/largeComponents/Header/Header";
import Hero from "../components/largeComponents/Hero/Hero";
import About from "../components/largeComponents/About/About";
import NextAuction from "../components/largeComponents/NextAuction/NextAuction";
import History from "../components/largeComponents/History/History";
import Contact from "../components/largeComponents/Contact/Contact";
import Footer from "../components/largeComponents/Footer/Footer";
import { landingData } from "./landingData";
import { useLanguage } from "../hooks/useLanguage";

function LandingPage() {
    const {language} =  useLanguage()

    return (
        <>
            <Header data={landingData[`${language}`].header}/>
            <Hero data={landingData[`${language}`].hero}/>
            <About data={landingData[`${language}`].about}/>
            <NextAuction data={landingData[`${language}`].auctions}/>
            <History data={landingData[`${language}`].history}/>
            <Contact data={landingData[`${language}`].contact}/>
            <Footer/>
        </>
    );
}

export default LandingPage;