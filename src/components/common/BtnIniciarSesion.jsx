import { Link } from "react-router-dom";

function BtnIniciarSesion({ extraClass = "" }) {
  return (
    <Link
      to="/login"
      className={`btn btn-light col-10 col-md-4 p-3 ${extraClass}`}
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      INICIAR SESIÓN
    </Link>
  );
}

export default BtnIniciarSesion;
