import React, { useEffect } from "react";
import gsap from "gsap";
import Part from "../part/Part";
import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.svg";
import calendar from "../../assets/images/calendar.svg";
import chart from "../../assets/images/chart.svg";
import atp from "../../assets/images/atp.svg";
import users from "../../assets/images/users.svg";
import dumbbell from "../../assets/images/dumbbell.svg";
import route from "../../assets/images/route.svg";
import setting from "../../assets/images/setting.svg";
import notification from "../../assets/images/notification.svg"
import "./Menu.css";


const Menu = () => {

    useEffect(() => {
        const handleTransition = () => {
            gsap.to(".menu-wrapper", {
                duration: 0.5,
                ease: "power1.out",
                transform: "none"
            });
        };
        handleTransition();
    }, []);

    return (
        <aside className="menu-wrapper">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Part icon={home} title="خانه" />
                <Part icon={calendar} title="تقویم" />
                <Part icon={chart} title="آنالیز" />
                <Part icon={atp} title="ATP" />
                <Part icon={users} title="مدیریت ورزشکاران" />
            </nav>
            <nav>
                <Part icon={dumbbell} title="مخزن تمرین‌ها" />
                <Part icon={route} title="استراتژی" />
                <Part icon={setting} title="تنظیمات" />
                <Part icon={notification} title="آخرین فعالیت‌ها" />
            </nav>
        </aside>
    );
};


export default Menu;