import { Link } from 'react-scroll'
function Navbar() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <nav className="navbar navbar-expand-sm justify-content-center">
                <a className='navbar-brand justify-self-start' onClick={scrollUp}>Revulus VA</a>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <Link className='nav-link' duration={100} activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
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
        </>
    );
}
export default Navbar;
