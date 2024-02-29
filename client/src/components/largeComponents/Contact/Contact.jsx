/* eslint-disable react/prop-types */
import './style.css'
function Contact({data}) {
    return (
        <section className='contact container' id='contact'>
            <h2>{data.title}</h2>

            <div className='contact__form__map'>
                <section className='container__form'>
                    <form action="" >
                        <div className='container__input'>
                            <div className='box__input'>
                                
                                <input type="text" />
                                <label htmlFor="">{data.label_name}</label>
                            </div>
                            <div className='box__input'>
                                <input type="email" />
                                <label htmlFor="">{data.label_email}</label>
                            </div>
                        </div>
                        <label htmlFor="">{data.label_messages}</label>
                        <textarea name="" id="" cols="30" rows="10">
                        </textarea>
                    </form>
                </section>
                <div className='contact__map'>
                    <iframe className='map__contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13145.604374452627!2d-59.167548829350196!3d-34.543398675936785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc7ded374de833%3A0x8a30ef0f8e510af9!2sDAF%20-%20%22Casa%20de%20Subastas%22!5e0!3m2!1ses-419!2sar!4v1708649534853!5m2!1ses-419!2sar"></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact;