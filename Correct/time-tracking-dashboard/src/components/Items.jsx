import icon from "/src/images/icon-ellipsis.svg"

export function Item1 () {
    return (
        <div className="track-item" id="workTrack">
            <div className="nav">
                <span id="workTitle">Work</span>
                <span><img src={ icon } alt="" /></span>
            </div>
            <p className="time" id="workTime">32hrs</p>
            <p className="previous" id="workPrevious">Last week - 36hrs</p>
        </div>
    );
}

export function Item2 () {
    return (
        <div className="track-item" id="playTrack">
            <div className="nav">
                <span id="playTitle">Play</span>
                <span><img src={ icon } alt="" /></span>
            </div>
            <p className="time" id="playTime">32hrs</p>
            <p className="previous" id="playPrevious">Last week - 36hrs</p>
        </div>
    );
}

export function Item3 () {
    return (
        <div className="track-item" id="studyTrack">
            <div className="nav">
                <span id="studyTitle">Play</span>
                <span><img src={ icon } alt="" /></span>
            </div>
            <p className="time" id="studyTime">32hrs</p>
            <p className="previous" id="studyPrevious">Last week - 36hrs</p>
        </div>
    );
}

export function Item4 () {
    return (
        <div className="track-item" id="exerciseTrack">
            <div className="nav">
                <span id="exerciseTitle">Play</span>
                <span><img src={ icon } alt="" /></span>
            </div>
            <p className="time" id="exerciseTime">32hrs</p>
            <p className="previous" id="exercisePrevious">Last week - 36hrs</p>
        </div>
    );
}

export function Item5 () {
    return (
        <div className="track-item">
            <div className="nav">
                <span>Social</span>
                <span><img src={ icon } alt="" /></span>
            </div>
            <p className="time">32hrs</p>
            <p className="previous">Last week - 36hrs</p>
        </div>
    );
}

export function Item6 () {
    return (
        <div className="track-item">
            <div className="nav">
                <span>Self Care</span>
                <span><img src={ icon } alt="" /></span>
            </div>
            <p className="time">32hrs</p>
            <p className="previous">Last week - 36hrs</p>
        </div>
    );
}