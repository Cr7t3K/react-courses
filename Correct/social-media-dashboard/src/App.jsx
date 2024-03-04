import './App.css';
import { SocialMediaContext } from "./contexts/SocialMediaContext.jsx";
import data from "./data.json";
import { useState, useEffect } from "react";
import { Nav } from "./components/Nav.jsx";
import { Section as FollowersSection } from "./components/Followers/Section.jsx";
import { Section as OverviewSection } from "./components/Overview/Section.jsx";

function App() {
    const [activeInterval, setActiveInterval] = useState("today");
    const [activeDarkMode, setActiveDarkMode] = useState(true);

    useEffect(() => {
        let body = document.querySelector('.body');

        if (activeDarkMode) {
            body.classList.remove('body-light');
        } else {
            body.classList.add('body-light');
        }
    }, [activeDarkMode]);


    return (
        <SocialMediaContext.Provider value={{ data, activeInterval, setActiveInterval, activeDarkMode, setActiveDarkMode }}>
            <Nav />
            <FollowersSection />
            <OverviewSection />
        </SocialMediaContext.Provider>
    )
}

export default App
