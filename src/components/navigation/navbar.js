import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';


const MENU_ITEMS = [
    {
        "name": "Listado Reservas",
        "href": "listado-reservas",
        "key": "/listado"
    },
    {
        "name": "Reservar",
        "href": "reservar",
        "key": "form"
    }
]

const Navbar = () => {
    const menuItems = MENU_ITEMS.map((item) => {
        return {
            label: <Link to={item.href}>{item.name}</Link >
        }
    });
    const onClick = (e) => {
        setCurrent(e.key)
    }
    const [current, setCurrent] = useState('listado');
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            selectedKeys={[current]}
            onClick={onClick}
        />
    );
}
export default Navbar;