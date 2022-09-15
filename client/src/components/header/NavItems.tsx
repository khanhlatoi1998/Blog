import { Item } from "../../common/Type/index";

interface Props {
    item: Item;
}


const Navitems: React.FC<Props> = (props) => {
    const { label, icon, active } = props.item;
    
    return (
        <li className="flex align-center px-4 py-4 hover:text-color_04 text-sm cursor-pointer" >
            <a href="/" className="flex justify-center items-center">{label} <span className="ml-3">{icon}</span></a>   
        </li>
    );
}

export default Navitems;