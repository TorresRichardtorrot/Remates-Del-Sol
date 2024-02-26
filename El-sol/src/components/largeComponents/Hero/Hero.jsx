import './style.css'
function Hero() {
    return (
        <section className="hero" id='home'>
            <div className="hero__title__main">
                <h1>Remates del Sol</h1>
                <h2>Objetos con Historia</h2>
            </div>
            
            <img className='vector-1' src="src/assets/Vector2.svg" alt="" />
        </section>
    );
}

export default Hero;