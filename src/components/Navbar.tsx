import { Link } from 'react-scroll'
import {useState} from 'react';
import * as MD from "react-icons/md";

function Navbar() {

    const [show,setShow] = useState(true);

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
                    <a className="navbar-brand" onClick={scrollUp}>Revulus VA</a>
                    <button className="navbar-toggler"
                     onClick={ ()=> setShow(!show)  } >
                        {show ? <MD.MdMenu style={{fontSize:25}}/> : <MD.MdClose style={{fontSize:25}}/>}
                    </button>
                    <div className={show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'} >
                        <ul className="navbar-nav mx-auto">
                            <li className='nav-item'>
                                <Link className='nav-link' duration={100} to="home" spy={true} smooth={true}>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' duration={100} to="about" spy={true} smooth={true}>About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' duration={100} to="team" spy={true} smooth={true}>Team</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' duration={100} to="contact_us" spy={true} smooth={true}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;

