import AbouUs from '../pages/AbouUs';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Services from './Services';
import ScrollToTops from "../components/ScrollToTops"
function MiddleSection() {
    return (
        <>
            <div id='home' style={{ height: 500 , background: '#4D4C7D'}}>
                <Home />
            </div>
            <div id='about' style={{ height: 500 , background: '#827397'}}>
                <AbouUs />
            </div>
            <div id='services' style={{ height: 500 , background: '#4D4C7D'}}>
                <Services />
            </div>
            <div id='contact_us' style={{ height: 500 , background: '#827397'}}>
                <ContactUs />
            </div>
            <ScrollToTops/>
        </>
    )
}

export default MiddleSection