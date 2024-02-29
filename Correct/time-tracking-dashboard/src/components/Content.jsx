import Item from "./Item.jsx";
import datas from "../data.json"

export default function Content({ currentTimeFrame }) {
    return (
        <div className="tracks">
            {datas.map((data) => (
                <Item key={data.id}
                      currenTimeFrame={currentTimeFrame}
                      {...data}
                />
            ))}
        </div>
    );
}