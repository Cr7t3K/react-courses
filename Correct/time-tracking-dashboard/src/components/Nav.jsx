export default function Nav() {
    return (
        <div className="time-selection border-bot-radius height">
            <button id="dailyLink">Daily</button>
            <button id="weeklyLink" className="active">Weekly</button>
            <button id="monthlyLink">Monthly</button>
        </div>
    );
}