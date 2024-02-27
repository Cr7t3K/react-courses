export default function Nav({ setCurrentTimeFrame, currentTimeFrame }) {

    return (
        <div className="time-selection border-bot-radius height">
            <button id="dailyLink" className={ currentTimeFrame === "daily" && "active"}
                    onClick={() => (setCurrentTimeFrame("daily"))}>
                Daily
            </button>
            <button id="weeklyLink" className={ currentTimeFrame === "weekly" && "active"}
                    onClick={() => (setCurrentTimeFrame("weekly"))}>
                Weekly
            </button>
            <button id="monthlyLink" className={ currentTimeFrame === "monthly" && "active"}
                    onClick={() => (setCurrentTimeFrame("monthly"))}>
                Monthly
            </button>
        </div>
    );
}