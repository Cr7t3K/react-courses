import Item from "./Item.jsx";

export default function Content() {
    return (
        <div className="tracks">
            <Item title="Titre 1" workTime="30hrs" workPreviousTime="12hrs" />
            <Item title="Titre 2" workTime="30hrs" workPreviousTime="10hrs" />
            <Item title="Titre 3" workTime="36hrs" workPreviousTime="12hrs" />
            <Item title="Titre 4" workTime="98hrs" workPreviousTime="11hrs" />
            <Item title="Titre 5" workTime="12hrs" workPreviousTime="08hrs" />
            <Item title="Titre 6" workTime="08hrs" workPreviousTime="29hrs" />
        </div>
    );
}