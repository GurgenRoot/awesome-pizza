import {FC} from 'react';
import MenuItem from '../menu-item/menu-item.component'
import {Pizza} from "@app/modules/menu/types/pizza";

interface MenuItemProps {
    items: Pizza[]
}

const MenuList: FC<MenuItemProps> = ({items}) => {
    return (
        <div className='flex flex-wrap justify-center gap-10'>
            {
                items.map(pizza => (
                    <MenuItem key={pizza.id} {...pizza} imagePath={`assets/pizza/${pizza.image}`}/>
                ))
            }
        </div>
    );
};

export default MenuList;
