import Item from "./Item.jsx";
import { useTimeTrackingContext} from "../contexts/TimeTrackingContext.jsx";

export default function Content() {
    const { datas, currentTimeFrame } = useTimeTrackingContext();

    return (
        <div className="tracks">
            {datas.map((data) => (
                <Item key={data.id}
                      currentTimeFrame={currentTimeFrame}
                      {...data}
                />
            ))}
        </div>
    );
}