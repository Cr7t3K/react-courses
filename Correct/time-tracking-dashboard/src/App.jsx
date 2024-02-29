import './App.css'
import SideBar from "./components/SideBar.jsx";
import Content from "./components/Content.jsx";
import {useState} from "react";

export default function App() {
    const [currentTimeFrame, setCurrentTimeFrame] = useState("daily")

    return (
      <>
          <SideBar setCurrentTimeFrame={setCurrentTimeFrame} currentTimeFrame={currentTimeFrame} />
          <Content currentTimeFrame={currentTimeFrame} />
      </>
    );
}