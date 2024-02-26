import './style.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';

function Header() {
    const [scrolling, setScrolling] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <header className={`main__header ${scrolling? 'header--active':""}`}>
            <Link className='main__header--logo' to={'/'}>
                <img src="/src/assets/sol.png" alt="Logo de Remates El Sol" />
            </Link>
            <nav className='main__header--nav'>
                <ul className='header__nav--ul'>
                    <li>
                        <a href="#home">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#contact'>
                            Contacto
                        </a>
                    </li>
                   
                    {
                        <li>

                        </li>
                    }
                </ul>
            </nav>
            <Social active={scrolling} />
        </header>
    );
}

export default Header;