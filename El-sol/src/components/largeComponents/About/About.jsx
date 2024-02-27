/* eslint-disable react/prop-types */
import MainButton from '../../smallComponents/MainButton/MainButton';
import Slider from '../SliderCards/Slider';
import './style.css'
function About({data}) {
    return (
        <section className="about container">
            <article className='about__info'>
              {
                data.info.map((value)=>{
                  return(
                    <>
                      <h2>{value.title}</h2>
                      <p>{value.info}</p>
                    </>
                  )
  
                })
              }
                <MainButton text={data.button}/>
            </article>

            <article className='about__our__auctions'>
                <h2 >{data.title}</h2>
                <Slider/>
            </article>
        </section>
    );
}

export default About;