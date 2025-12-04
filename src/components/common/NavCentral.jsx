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
        <nav class="navbar navbar-expand-md col-md-6">
            <div class="container-fluid d-flex justify-content-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav d-flex justify-content-around w-100 text-center">
                        <li class="nav-item">
                            <Link to={text1} className='text-white nav-link'>{text1}</Link >
                        </li>
                        <li class="nav-item">
                            <Link to={text2} className='text-white nav-link'>{text2}</Link >
                        </li>
                        <li class="nav-item">
                            <Link to={text3} className='text-white nav-link'>{text3}</Link >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavCentral;