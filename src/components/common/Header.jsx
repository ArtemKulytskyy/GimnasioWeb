import logo from '../../assets/img/logo_oscuro.png';
import NavCentral from './NavCentral';
import NavDerecho from './NavDerecho';

function Header() {
    let user = "";
    return(
        <header className='bgcolor-gris fs-4 row bebas-neue'>
            <div className='col-md-3 d-flex justify-content-center'>
                <img src={logo} alt="logo" width={150}/>
            </div>

            <NavCentral tipo={user}/>
            <NavDerecho tipo={user}/>
        </header>
    );
}
export default Header;