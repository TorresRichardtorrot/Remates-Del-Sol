/* eslint-disable react/prop-types */
import './style.css'
function Hero({data}) {
    return (
        <section className="hero" id='home'>
            <div className="hero__title__main">
                <h1>{data.title}</h1>
                <h2>{data.subTitle}</h2>
            </div>
            
            <img className='vector-1' src="src/assets/Vector2.svg" alt="" />
        </section>
    );
}

export default Hero;