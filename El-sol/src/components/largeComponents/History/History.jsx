/* eslint-disable react/prop-types */
import './style.css'
function History({data}) {
    return (
        <section className="history container" id='about'>
            <h2>{data.title}</h2>
            <div className="history__img__info">
                <div className="history__img">
                    <img src="/src/assets/logo-2.png" alt="logo" />
                </div>
                <article className="history__info">
                    {
                        data.info.map((value)=>{
                            return(
                                <>
                                    <h3>{value.title}</h3>
                                    <p>{value.text}</p>
                                </>
                            )
                        })
                    }
                    
                </article>
            </div>
            
        </section>
    );
}

export default History;