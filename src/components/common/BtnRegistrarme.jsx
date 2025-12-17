import { Link } from "react-router-dom";


function BtnRegistrarme({ extraClass = "" }) {
  const handleClick = () => {
    // Buscar cualquier modal de Bootstrap que esté abierta
    const openModalEl = document.querySelector(".modal.show");
    if (openModalEl) {
      const modalInstance =
        Modal.getInstance(openModalEl) || new Modal(openModalEl);
      modalInstance.hide();
    }
    // No hace falta hacer navigate aquí: el <Link> ya navega solo a /signup
  };

  return (
    <Link
      to="/signup"
      className={`btn btn-warning col-10 col-md-4 p-3 ${extraClass}`}
      onClick={handleClick}
    >
      REGISTRARME
    </Link>
  );
}

export default BtnRegistrarme;
