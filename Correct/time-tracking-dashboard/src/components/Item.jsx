import icon from "/src/images/icon-ellipsis.svg"

export default function Item ({ title, workTime, workPreviousTime }) {
    return (
        <div className="track-item">
            <div className="nav">
                <span id="workTitle">{ title }</span>
                <span><img src={ icon } alt="" /></span>
            </div>
            <p className="time" id="workTime">{ workTime }</p>
            <p className="previous" id="workPrevious">Last week - { workPreviousTime }</p>
        </div>
    );
}