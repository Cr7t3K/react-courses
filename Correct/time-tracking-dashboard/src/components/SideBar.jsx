import Profile from "./Profile.jsx";
import Nav from "./Nav.jsx";

export default function SideBar({ setCurrentTimeFrame, currentTimeFrame }) {
    return (
        <div className="sidebar">
            <Profile firstName="John" lastName="Doe" avatar="src/images/image-jeremy.png" />
            <Nav setCurrentTimeFrame={setCurrentTimeFrame} currentTimeFrame={currentTimeFrame} />
        </div>
    );
}