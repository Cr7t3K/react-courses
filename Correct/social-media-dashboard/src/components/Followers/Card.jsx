import useSocialMediaContext from "../../contexts/SocialMediaContext.jsx";
import convertInterval from "../../services/convertInterval.js";

export const Card = ({ user, followers, channel, follows }) => {
    const { activeInterval, activeDarkMode } = useSocialMediaContext();
    const direction = follows[activeInterval] < 0 ? 'down' : 'up';

    return (
        <div className={`followers card ${!activeDarkMode ? 'card-light' : 'dark'}`}>
            <hr className={ channel }/>
            <div className="followers-card-header">
                <img
                    className="social-icon"
                    src={`src/assets/images/icon-${channel}.svg`}
                    alt={`${channel}-icon`}
                />
                <p className="username gray-text">{ user }</p>
            </div>
            <div className="followers-card-body">
                <h1 className="followers-card-body-numbers">{ followers }</h1>
                <h2 className="followers-card-body-text">FOLLOWERS</h2>
            </div>
            <div className="followers-card-footer">
                <img
                    className="followers-card-footer-img"
                    src={`src/assets/images/icon-${direction}.svg`}
                    alt={`arrow ${direction}`}
                />
                <p className={`followers-card-footer-text ${direction}`}>
                    {`${Math.abs(follows[activeInterval])} ${convertInterval(activeInterval)}`}
                </p>
            </div>
        </div>
    )
}