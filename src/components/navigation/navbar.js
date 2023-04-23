import { Link } from 'react-router-dom';

const MENU_ITEMS = [

]

const Navbar = () => {
    return (
        <div>
            <Link to={'/reservar'}>Reservar</Link>
            <Link to={'/listado-reservas'}>Listado</Link>
        </div>
    );
}
export default Navbar;