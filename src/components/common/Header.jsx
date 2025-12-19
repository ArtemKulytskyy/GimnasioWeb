import logo from '../../assets/img/logo_oscuro.png';
import NavCentral from './NavCentral';
import NavDerecho from './NavDerecho';
import { Link } from "react-router-dom";

function Header() {
    let user = "";
    return(
        <header className='bgcolor-gris fs-4 row bebas-neue'>
            <div className='col-md-3 d-flex justify-content-center'>
                <Link to="/"><img src={logo} alt="logo" width={150}/></Link>
            </div>

            <NavCentral tipo={user}/>
            <NavDerecho tipo={user}/>
        </header>
    );
}
export default Header;