/* eslint-disable react/prop-types */
import SliderNext from '../SliderNext/SliderNext';
import './style.css'
function NextAuction({data}) {
    return (
        <>
        <section className="next_auction">
            <h2 className='title__section__main'>{data.title_1}</h2>
            <div>
                <SliderNext/>
            </div>
        </section>

        <div className='separador'></div>

        <section className="next_auction">
        <h2 className='title__section__main'>{data.title_2}</h2>
        <div>
            <SliderNext/>
        </div>
    </section>
    </>
    );
}

export default NextAuction;