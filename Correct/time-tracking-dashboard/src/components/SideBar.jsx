import Profile from "./Profile.jsx";
import Nav from "./Nav.jsx";
import PropTypes from "prop-types";

export default function SideBar({ setCurrentTimeFrame, currentTimeFrame }) {
    return (
        <div className="sidebar">
            <Profile firstName="John" lastName="Doe" avatar="src/images/image-jeremy.png" />
            <Nav setCurrentTimeFrame={setCurrentTimeFrame} currentTimeFrame={currentTimeFrame} />
        </div>
    );
}

SideBar.propTypes = {
    currentTimeFrame: PropTypes.oneOf(["daily", "weekly", "monthly"]).isRequired,
    setCurrentTimeFrame: PropTypes.func.isRequired
}
