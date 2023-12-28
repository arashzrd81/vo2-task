import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Dashborad from "./page/dashboard/Dashboard";
import "./App.css";


const App = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <Routes>
                <Route path="/" element={<Dashborad showMenu={showMenu} setShowMenu={setShowMenu} />} />
            </Routes>
            {
                window.innerWidth < 992 ?
                showMenu && <Menu /> :
                <Menu />
            }
        </>
    );
};


export default App;