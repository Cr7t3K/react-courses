import useSocialMediaContext from "../../contexts/SocialMediaContext.jsx";

export const Card = ({ title, channel, statistics }) => {
    const { activeInterval, activeDarkMode } = useSocialMediaContext();
    const direction = statistics[activeInterval].data < 0 ? 'down' : 'up';

    return (
        <div className={`overview card ${!activeDarkMode ? 'card-light' : 'dark'}`}>
            <div className="overview-card-header">
                <p className={`overview-card-stats-name ${!activeDarkMode && 'gray-text-light'}`}>{ title }</p>
                <img className="social-icon" src={`src/assets/images/icon-${channel}.svg`} alt={`${channel} logo`} />
            </div>

            <div className="overview-card-footer">
                <h1 className="overview-card-stats-value">{ statistics[activeInterval].data }</h1>
                <div className="overview-card-footer-status">
                    <img
                        className="overview-card-status-img"
                        src={`src/assets/images/icon-${direction}.svg`} alt={`arrow ${direction}`}
                    />
                    <p className={`overview-card-status-value ${direction}`}>{ Math.abs(statistics[activeInterval].pnl) }%</p>
                </div>
            </div>
        </div>
    )
}