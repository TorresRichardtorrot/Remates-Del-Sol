import './style.css'
function Contact() {
    return (
        <section className='contact' id='contact'>
            <h2>Contacto</h2>

            <div className='contact__form__map'>
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <textarea name="" id="" cols="30" rows="10">

                    </textarea>
                </form>
                <div className='contact__map'>
                    <img src="/src/assets/mapa.png" alt="mapa" />
                </div>
            </div>
        </section>
    );
}

export default Contact;