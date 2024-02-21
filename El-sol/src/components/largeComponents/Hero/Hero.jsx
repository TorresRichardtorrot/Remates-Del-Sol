import './style.css'
function Hero() {
    return (
        <section className="hero" id='home'>
            <img src="/src/assets/hero.png" alt="hero o baner" />
            <div className="hero__title__main">
                <h1>Remates del Sol</h1>
                <h2>Objetos con Historia</h2>
            </div>
        </section>
    );
}

export default Hero;