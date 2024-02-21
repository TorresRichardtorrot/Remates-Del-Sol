import MainButton from '../../smallComponents/MainButton/MainButton';
import Slider from '../SliderCards/Slider';
import './style.css'
function About() {
    return (
        <section className="about container">
            <article className='about__info'>
                <h2>Como son nuestros remates:</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et error beatae ullam.
                  Saepe blanditiis repudiandae minima non 
                  minus itaque, quidem quibusdam consequuntur, doloremque odio optio hic laborum dignissimos!
                  Voluptate?
                </p>
                <h2>Forma de retirar:</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et error beatae ullam.
                  Saepe blanditiis repudiandae minima non 
                  minus itaque, quidem quibusdam consequuntur, doloremque odio optio hic laborum dignissimos!
                  Voluptate?
                </p>
                <h2>Estamos ubicados:</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et error beatae ullam.
                  Saepe blanditiis repudiandae minima non 
                  minus itaque, quidem quibusdam consequuntur, doloremque odio optio hic laborum dignissimos!
                  Voluptate?
                </p>

                <MainButton text={'Saber Más'}/>
            </article>

            <article className='about__our__auctions'>
                <h2 >Algunos de nuestros remates</h2>
                <Slider/>
            </article>
        </section>
    );
}

export default About;