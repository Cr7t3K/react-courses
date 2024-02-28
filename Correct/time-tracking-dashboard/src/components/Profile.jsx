import avatar from "/src/images/image-jeremy.png";

export default function Profile() {
    return (
        <div className="profile">
            <img src={ avatar } alt="" className="" />
                <div>
                    <p className="stats-text">Report for</p>
                    <p className="name">Jeremy Jhonson</p>
                </div>
        </div>
    );
}