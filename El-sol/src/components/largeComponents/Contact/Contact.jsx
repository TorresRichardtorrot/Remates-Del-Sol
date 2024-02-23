import './style.css'
function Contact() {
    return (
        <section className='contact container' id='contact'>
            <h2>Contacto</h2>

            <div className='contact__form__map'>
                <section className='container__form'>
                    <form action="" >
                        <div className='container__input'>
                            <div className='box__input'>
                                
                                <input type="text" />
                                <label htmlFor="">Nombre</label>
                            </div>
                            <div className='box__input'>
                                <input type="email" />
                                <label htmlFor="">Correo</label>
                            </div>
                        </div>
                        <label htmlFor="">Mensage</label>
                        <textarea name="" id="" cols="30" rows="10">
                        </textarea>
                    </form>
                </section>
                <div className='contact__map'>
                    <img src="/src/assets/mapa.png" alt="mapa" />
                </div>
            </div>
        </section>
    );
}

export default Contact;