import {Link} from 'react-router-dom';

function NavDerecho({tipo}) {
    let text, link;
    if (tipo == null || tipo == "") {
        text = "Iniciar sesion";
        link = "/login";
    } else {
        text = "Cerrar sesion";
        link = "/";
    }
    return(
        <div className='col-md-3 d-flex justify-content-center align-items-center mt-4 mt-md-0'>
            <Link to={link} className='text-white' data-bs-toggle="modal" data-bs-target="#staticBackdrop">{text}</Link>
        </div>
    );
}

export default NavDerecho;