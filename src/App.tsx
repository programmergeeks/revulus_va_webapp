import Navbar from './components/Navbar';
import ScrollToTops from './components/ScrollToTops';
import './css/navbar.css';
import About from './pages/About';
import BookDemo from './pages/BookDemo';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <BookDemo/>
      <ContactUs/>
      <ScrollToTops/>
    </>  
  );
}

export default App;
