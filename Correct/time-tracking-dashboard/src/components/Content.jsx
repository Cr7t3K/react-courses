import Item from "./Item.jsx";
import datas from "../data.json"

export default function Content() {
    return (
        <div className="tracks">
            {datas.map((data) => (
                <Item key={data.id} title={data.title} workTime={data.timeframes.monthly.current} workPreviousTime={data.timeframes.monthly.previous} />
            ))}
        </div>
    );
}