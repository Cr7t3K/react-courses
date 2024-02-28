import FavoriteIcon from "./FavoriteIcon.jsx";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Item ({ title, timeframes, currenTimeFrame }) {
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="track-item">
            <div className="nav">
                <span id="workTitle">{ title }</span>
                <button onClick={() => (setIsFavorite(!isFavorite))}>
                    <FavoriteIcon isFavorite={isFavorite} />
                </button>
            </div>
            <p className="time" id="workTime">{ timeframes[currenTimeFrame].current }</p>
            <p className="previous" id="workPrevious">Last week - { timeframes[currenTimeFrame].previous }</p>
        </div>
    );
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    currentTimeFrame: PropTypes.oneOf(["daily", "weekly", "monthly"]).isRequired,
    timeframes: PropTypes.shape({
        daily: PropTypes.shape({
            current: PropTypes.number.isRequired,
            previous: PropTypes.number.isRequired,
        }).isRequired,
        weekly: PropTypes.shape({
            current: PropTypes.number.isRequired,
            previous: PropTypes.number.isRequired,
        }).isRequired,
        monthly: PropTypes.shape({
            current: PropTypes.number.isRequired,
            previous: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired
}