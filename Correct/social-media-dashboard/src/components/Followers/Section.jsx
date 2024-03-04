import { Card } from "./Card.jsx";
import useSocialMediaContext from "../../contexts/SocialMediaContext.jsx";
import formatNumber from "../../services/formatNumber.js"
import DarkMode from "../DarkMode.jsx";

export const Section = () => {
    const { data, activeDarkMode } = useSocialMediaContext();

    return (
        <section className="followers-section">
            <div className="followers-section-header">
                <div className="main-header-left-component">
                    <h1 className="title">Social Media Dashboard</h1>
                    <p className={`subtitle gray-text ${!activeDarkMode && 'gray-text-light'}`}>Total Followers: { formatNumber(data.totalFollowers) }</p>
                </div>
                <div className="main-header-right-component">
                    <DarkMode />
                </div>
            </div>

            <div className="followers-cards-container">
                {data.dashboard.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
            </div>
        </section>
    )
}