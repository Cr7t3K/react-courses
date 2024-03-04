import useSocialMediaContext from "../contexts/SocialMediaContext.jsx";

export const Nav = () => {
    const { activeInterval, setActiveInterval, activeDarkMode } = useSocialMediaContext();

    return (
        <section className="container-nav">
            <button className={`btn ${activeInterval === "today" && "active"} ${!activeDarkMode && 'btn-light'}`}
                    onClick={() => setActiveInterval('today')}
            >Today</button>
            <button className={`btn ${activeInterval === "lastWeek" && "active"} ${!activeDarkMode && 'btn-light'}`}
                    onClick={() => setActiveInterval('lastWeek')}
            >Last week</button>
            <button className={`btn ${activeInterval === "lastMonth" && "active"} ${!activeDarkMode && 'btn-light'}`}
                    onClick={() => setActiveInterval('lastMonth')}
            >Last Month</button>
        </section>
    );
};