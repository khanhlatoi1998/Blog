import { Item } from "../../common/Type/index";

interface Props {
    item: Item;
}


const Navitems: React.FC<Props> = (props) => {
    const { label, icon, active } = props.item;
    
    return (
        <li className="flex lg:justify-start justify-between items-censter lg:px-4 px-6 py-4 hover:text-color_04 text-sm cursor-pointer" >
            <a href="/" className="flex justify-center items-center">{label}</a>
            <span className="ml-3 mb-[2px] flex items-center">{icon}</span>   
        </li>
    );
}

export default Navitems;