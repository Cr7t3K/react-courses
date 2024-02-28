import Item from "./Item.jsx";
import datas from "../data.json"
import PropTypes from "prop-types";

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

Content.propTypes = {
    currentTimeFrame: PropTypes.oneOf(["daily", "weekly", "monthly"]).isRequired
}