import FavoriteIcon from "./FavoriteIcon.jsx";
import { useState } from "react";

export default function Item ({ title, workTime, workPreviousTime }) {
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="track-item">
            <div className="nav">
                <span id="workTitle">{ title }</span>
                <button onClick={() => (setIsFavorite(!isFavorite))}>
                    <FavoriteIcon isFavorite={isFavorite} />
                </button>
            </div>
            <p className="time" id="workTime">{ workTime }</p>
            <p className="previous" id="workPrevious">Last week - { workPreviousTime }</p>
        </div>
    );
}