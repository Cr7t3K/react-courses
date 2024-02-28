import { useTimeTrackingContext } from "../contexts/TimeTrackingContext.jsx";

export default function Nav() {
    const { setCurrentTimeFrame, currentTimeFrame } = useTimeTrackingContext();


    return (
        <div className="time-selection border-bot-radius height">
            <button id="dailyLink" className={ currentTimeFrame === "daily" ? "active" : null}
                    onClick={() => (setCurrentTimeFrame("daily"))}>
                Daily
            </button>
            <button id="weeklyLink" className={ currentTimeFrame === "weekly" ? "active" : null}
                    onClick={() => (setCurrentTimeFrame("weekly"))}>
                Weekly
            </button>
            <button id="monthlyLink" className={ currentTimeFrame === "monthly" ? "active" : null}
                    onClick={() => (setCurrentTimeFrame("monthly"))}>
                Monthly
            </button>
        </div>
    );
}