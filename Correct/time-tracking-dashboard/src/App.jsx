import './App.css'
import SideBar from "./components/SideBar.jsx";
import Content from "./components/Content.jsx";
import { useState } from "react";
import { TimeTrackingContext } from "./contexts/TimeTrackingContext.jsx";
import datas from "./data.json"
import PropTypes from "prop-types";


export default function App() {
    const [currentTimeFrame, setCurrentTimeFrame] = useState("daily")
    const user = {
        firstName: "John",
        lastName: "Doe",
        avatar: "src/images/image-jeremy.png"
    }

    return (
      <TimeTrackingContext.Provider value={{ currentTimeFrame, setCurrentTimeFrame, datas, user}}>
          <SideBar />
          <Content />
      </TimeTrackingContext.Provider>
    );
}

TimeTrackingContext.Provider.propTypes = {
    value: PropTypes.shape({
        currentTimeFrame: PropTypes.oneOf(["daily", "weekly", "monthly"]).isRequired,
        setCurrentTimeFrame: PropTypes.func.isRequired,
        datas: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
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
            })
        ).isRequired,
        user: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        }).isRequired
    })
}

