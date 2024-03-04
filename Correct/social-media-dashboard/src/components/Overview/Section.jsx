import useSocialMediaContext from "../../contexts/SocialMediaContext.jsx";
import { Card } from "../Overview/Card.jsx";

export const Section = () => {
    const { data } = useSocialMediaContext();

    return (
        <section className="overview-section">
            <h1 className="overview-header">Overview - Today</h1>

            <div className="overview-cards-container">
                {data.overview.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
            </div>
        </section>
    )
}