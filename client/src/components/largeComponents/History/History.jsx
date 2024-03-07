/* eslint-disable react/prop-types */
import './style.css'
function History({data}) {
    return (
        <section className="history container" id='about'>
            <h2>{data.title}</h2>
            <div className="history__img__info">
                <div className="history__img">
                    <img src="/logo-2.png" alt="logo"  loading='lazy' />
                </div>
                <article className="history__info">
                    {
                        data.info.map((value,index)=>{
                            return(
                                <div key={index}>
                                    <h3>{value.title}</h3>
                                    <p>{value.text}</p>
                                </div>
                            )
                        })
                    }
                    
                </article>
            </div>
            
        </section>
    );
}

export default History;