import AbouUs from '../pages/AbouUs';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Team from '../pages/Team';
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
            <div id='team' style={{ height: 500 , background: '#4D4C7D'}}>
                <Team />
            </div>
            <div id='contact_us' style={{ height: 500 , background: '#827397'}}>
                <ContactUs />
            </div>
            <ScrollToTops/>
        </>
    )
}

export default MiddleSection