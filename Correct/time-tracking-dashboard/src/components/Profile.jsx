import PropTypes from "prop-types";

export default function Profile({ firstName, lastName, avatar  }) {
    return (
        <div className="profile">
            <img src={ avatar } alt="" className="" />
                <div>
                    <p className="stats-text">Report for</p>
                    <p className="name">{firstName} {lastName}</p>
                </div>
        </div>
    );
}

Profile.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}