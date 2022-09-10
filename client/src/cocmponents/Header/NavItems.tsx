import { Item } from "../../commans/Type";

interface Props {
    item: Item;
}


const Navitems: React.FC<Props> = (props) => {
    const { label, icon, active } = props.item;
    
    return (
        <li className="flex align-center px-6 py-4 border-r border-solid border-color_03 hover:text-color_04" >
            <a href="/" className="flex justify-center items-center">{label} <span className="ml-3">{icon}</span></a>   
        </li>
    );
}

export default Navitems;