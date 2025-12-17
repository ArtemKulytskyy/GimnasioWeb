import { Link } from "react-router-dom";

function BtnRegistrarme({ extraClass = "" }) {
  return (
    <Link 
        to="/signup" 
        className={`btn btn-warning col-10 col-md-4 p-3 ${extraClass}`}>
        REGISTRARME
    </Link>
  );
}

export default BtnRegistrarme;
