import { Link } from 'react-scroll'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-light justify-content-center">
            <ul className="navbar-nav">
                <li className='nav-item'>
                    <Link className='nav-link' duration={100} activeClass="active"  to="home" spy={true} smooth={true}>Home</Link>
                </li>
                <li>
                    <Link className='nav-link' duration={100} to="about" spy={true} smooth={true}>About</Link>
                </li>
                <li>
                    <Link className='nav-link' duration={100} to="team" spy={true} smooth={true}>Team</Link>
                </li>
                <li>
                    <Link className='nav-link' duration={100} to="contact_us" spy={true} smooth={true}>Contact</Link>
                </li>
            </ul>
        </nav>          
    );
}
export default Navbar;
