import { useTimeTrackingContext } from "../contexts/TimeTrackingContext.jsx";

export default function Profile() {
    const { user } = useTimeTrackingContext()

    return (
        <div className="profile">
            <img src={ user.avatar } alt="" className="" />
                <div>
                    <p className="stats-text">Report for</p>
                    <p className="name">{user.firstName} {user.lastName}</p>
                </div>
        </div>
    );
}