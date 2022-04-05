import { useEffect,useState } from 'react';
import * as IO from "react-icons/io";
import '../css/scroll.css';
function ScrollToTops() {

    const [backtoTopButton,setBacktoTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 40){
                setBacktoTopButton(true);
            }
            else{
                setBacktoTopButton(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
        {backtoTopButton && (
            <button onClick={scrollUp} id="myBtn"><IO.IoIosArrowUp className='arrow-up'/></button>
        )}
        </>
    );
}

export default ScrollToTops