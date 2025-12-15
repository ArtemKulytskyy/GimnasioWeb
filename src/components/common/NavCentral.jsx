import {Link} from 'react-router-dom';

function NavCentral({tipo}) {
    let text1, text2, text3;
    if (tipo == "admin") {
        text1 = "usuarios";
        text2 = "salas";
        text3 = "inventario";
    } else if (tipo == "entrenador") {
        text1 = "reservas";
        text2 = "inventario";
        text3 = "reseñas";
    } else if (tipo == "socio") {
        text1 = "reseñas";
        text2 = "clases";
    }
    return(
        <nav className="navbar navbar-expand-md col-md-6">
            <div className="container-fluid d-flex justify-content-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav d-flex justify-content-around w-100 text-center">
                        <li className="nav-item">
                            <Link to={text1} className='text-white nav-link'>{text1}</Link >
                        </li>
                        <li className="nav-item">
                            <Link to={text2} className='text-white nav-link'>{text2}</Link >
                        </li>
                        <li className="nav-item">
                            <Link to={text3} className='text-white nav-link'>{text3}</Link >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavCentral;