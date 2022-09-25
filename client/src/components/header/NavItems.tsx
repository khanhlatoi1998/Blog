import { NavLink } from "react-router-dom";
import { Item } from "../../common/Type/index";

interface Props {
    item: Item;
}


const Navitems: React.FC<Props> = (props) => {
    const { label, icon, active, link } = props.item;

    return (
        <li className="" >
            <NavLink to={link} className="block lg:px-4 px-6 py-4 hover:text-color_04 text-sm cursor-pointer">
                <div className="flex justify-between items-center">
                    <span  className="">{label}</span>
                    <span className="ml-3 mb-[2px] flex items-center">{icon}</span>
                </div>
            </NavLink>

        </li>
    );
}

export default Navitems;