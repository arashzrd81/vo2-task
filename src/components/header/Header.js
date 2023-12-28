import React from "react";
import gsap from "gsap";
import bars from "../../assets/images/bars.svg";
import "./Header.css";


const Header = ({showMenu, setShowMenu}) => {

    const handleMenu = async () => {
        if (showMenu) {
            gsap.to(".menu-wrapper", {
                duration: 0.5,
                ease: "power1.in",
                transform: "translateX(100vw)"
            });
            gsap.to(".dashboard-container", {
                duration: 0.5,
                ease: "power1.in",
                filter: "blur(0px)"
            });
            await new Promise(r => setTimeout(r, 500));
            setShowMenu(false);
        } else {
            gsap.to(".dashboard-container", {
                duration: 0.5,
                ease: "power1.out",
                filter: "blur(5px)"
            });
            setShowMenu(true);
        }
    };

    return (
        <header>
            <h2>ورزشکاران من</h2>
            <img src={bars} alt="" onClick={handleMenu} />
        </header>
    );
};


export default Header;