import { Link } from 'react-scroll'
import { useState } from 'react';
import * as MD from "react-icons/md";
import * as RI from "react-icons/ri";
import SigninWithModal from './SigninWithModal';
import revulus from '../assets/revulus_brand_logo.png';

function Navbar() {

    const [show, setShow] = useState(true);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ fontSize: 35, letterSpacing: "7px" }} onClick={scrollUp}>
                        <img src={revulus} alt="" />
                    </a>
                    <button className="navbar-toggler"
                        onClick={() => setShow(!show)} >
                        {show ? <MD.MdMenu style={{ fontSize: 25 }} /> : <MD.MdClose style={{ fontSize: 25 }} />}
                    </button>
                    <div className={show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'} >
                        <ul className="navbar-nav">
                            <li className='nav-item'>
                                <Link className='nav-link' duration={100} to="home" spy={true} smooth={true}>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' duration={100} to="about" spy={true} smooth={true}>About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' duration={100} to="services" spy={true} smooth={true}>Services</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' duration={100} to="contact_us" spy={true} smooth={true}>Contact</Link>
                            </li>
                            <SigninWithModal />
                            <li className='nav-item'>
                                <Link className='nav-link' style={{ fontSize: 20 }} duration={100} to="book-demo" spy={true} smooth={true}><RI.RiBookMarkFill /></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;

