import AboutUs from '../pages/About';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Services from './Services';
import ScrollToTops from "../components/ScrollToTops"
import '../css/middlesection.css';
function MiddleSection() {
    return (
        <>
            <body>
                <div id='home'>
                    <Home />
                </div>
                <div id='about'>
                    <AboutUs />
                </div>
                <div id='services'>
                    <Services />
                </div>
                <div id='contact_us'>
                    <ContactUs />
                </div>
                <ScrollToTops />
            </body>
        </>
    )
}

export default MiddleSection