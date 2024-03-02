/* eslint-disable react/prop-types */
import './style.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import { IoIosArrowDown } from "react-icons/io";
import { useLanguage } from '../../../hooks/useLanguage';

function Header({data}) {
    const [scrolling, setScrolling] = useState(false);
    const {setLanguage}= useLanguage()

    
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
                <img src="/sol.png" alt="Logo de Remates El Sol" />
            </Link>
            <nav className='main__header--nav'>
                <ul className='header__nav--ul'>
                    {
                        data.links.map((value,index)=>{
                            return(
                                <li key={index}>
                                <a href={value.to}>
                                {value.a}
                                </a>
                            </li>
                            )
                        })
                    }

                    {
                        <li className='header__lenguaje'>
                            {data.language}
                            <IoIosArrowDown />
                            <ul>
                                <li>
                                    <button onClick={()=>{
                                        setLanguage("Spanish")
                                    }}>
                                        <img src="/Spain.svg" alt="" />
                                    </button>   
                                </li>
                                <li>
                                    <button onClick={()=>{
                                        setLanguage("English")
                                    }}>
                                        <img src="/ingles.svg" alt="" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={()=>{
                                        setLanguage("Portuguese")
                                    }}>
                                        <img src="/Brazil.svg" alt="" />
                                    </button>
                                </li>
                            </ul>
                        </li>
                    }
                </ul>
            </nav>
            <Social active={scrolling} />
        </header>
    );
}

export default Header;