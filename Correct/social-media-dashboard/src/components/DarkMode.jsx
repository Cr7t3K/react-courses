import useSocialMediaContext from "../contexts/SocialMediaContext.jsx";

const DarkMode = () => {
    const { activeDarkMode, setActiveDarkMode } = useSocialMediaContext();

    return (
        <>
            <p className={`dark-mode gray-text ${!activeDarkMode && 'gray-text-light'}`}>Dark Mode</p>
            <label htmlFor="toggle-switch" className="switch">
                <input type="checkbox" id="toggle-switch" onClick={() => setActiveDarkMode(previous => !previous) }/>
                <span className="slider round"></span>
            </label>
        </>
    )
}

export default DarkMode;