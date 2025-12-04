
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
            <a href={link} className='text-white'>{text}</a>
        </div>
    );
}

export default NavDerecho;