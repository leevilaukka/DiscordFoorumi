import React, {useState} from 'react';
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";

const ScrollTopArrow = () => {
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if(!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        }  else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <div>
            <Icon icon={faArrowAltCircleUp} size={"4x"} className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}} title="Takaisin ylös"/>
        </div>
    );
};

export default ScrollTopArrow;