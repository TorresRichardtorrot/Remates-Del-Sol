import SliderNext from '../SliderNext/SliderNext';
import './style.css'
function NextAuction() {
    return (
        <>
        <section className="next_auction">
            <h2>Proximos Remates</h2>

            <div>
                <SliderNext/>
            </div>
        </section>
        <section className="next_auction">
        <h2>Remates expeciales</h2>

        <div>
            <SliderNext/>
        </div>
    </section>
    </>
    );
}

export default NextAuction;