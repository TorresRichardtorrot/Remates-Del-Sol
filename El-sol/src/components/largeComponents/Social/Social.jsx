/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './style.css'
function Social({active}) {
    return (
        <div className={`social__content ${active?"show":""}`}>
            <ul>
                <li>
                    <Link target="_black" to={'https://www.facebook.com/REMATESDELSOL'}>
                        <img src="/src/assets/facebook.png" alt="ir al facebook" />
                    </Link>
                </li>
                <li>
                    <Link target="_black"  to={'https://api.whatsapp.com/send?phone=%2B541123190856&data=ARCFqk06ShYzQil_U1_t2VrwcaDgIjJjUHX6oIdmGTBroIe-yRCzU3XKzakvdCYEqcT-e87nTdY-t703hX675Ew54c-KE6uLawLb6JnStBwIDGk7oHcW4BuNNRRkHJkh8thPMxUVfXI-9IUYwDz_49D5ZA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2Z4_rhhfYr8jdp5c4onWWqVvEzsjMaJOy-aI-xw7f17XWwHpFhQtRzc4E'}>
                        <img src="/src/assets/whatsapp.png" alt="ir al whatsapp" />
                    </Link>
                </li>
                <li>
                    <Link target="_black" >
                        <img src="/src/assets/instagram.png" alt="ir al instagram" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Social;