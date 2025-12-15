import MainLayout from "./layouts/MainLayout"
import entrenadoresImg from "../assets/img/entrenadores.png";
import {Link} from 'react-router-dom';

function Entrenadores() {
  return (
    <MainLayout>
      <div className="container-fluid px-0 entrenadores-section">
        <div className="row g-0">
         <div className="col-12 col-lg-6 entrenadores-left text-white d-flex flex-column justify-content-center align-items-center py-5 px-4 px-md-5">
            <h2 className="bebas-neue fst-italic text-warning mb-1 text-start">
              Nuestros entrenadores
            </h2>
            <h3 className="bebas-neue fst-italic text-white mb-3 text-start">
              Entrena guiado por los mejores
            </h3>

            <div
              className="mb-4 text-start"
              style={{ width: "80px", height: "3px", backgroundColor: "#ffc107" }}
            ></div>

            <ul className="list-unstyled fs-5">
              <li className="d-flex mb-2">
                <span className="me-2 text-success">✔</span>
                <span>
                  Planes de entrenamiento personalizados según tus objetivos y nivel.
                </span>
              </li>
              <li className="d-flex mb-2">
                <span className="me-2 text-success">✔</span>
                <span>
                  Acompañamiento técnico para mejorar tu técnica y evitar lesiones.
                </span>
              </li>
              <li className="d-flex mb-2">
                <span className="me-2 text-success">✔</span>
                <span>
                  Especialistas en fuerza, rendimiento y recomposición corporal.
                </span>
              </li>
              <li className="d-flex mb-2">
                <span className="me-2 text-success">✔</span>
                <span>
                  Seguimiento constante para que no pierdas la motivación.
                </span>
              </li>
              <li className="d-flex mb-2">
                <span className="me-2 text-success">✔</span>
                <span>
                  Forman parte de la comunidad Fitness Park: exigencia, cercanía y resultados.
                </span>
              </li>
            </ul>
            <div className="row d-flex flex-column flex-md-row justify-content-evenly align-items-center mt-4 gap-3 w-100 mb-4">
              <Link to="/signup" className="btn btn-warning col-10 col-md-4 p-3">REGISTRARME</Link>
              <Link to="/login" className="btn btn-light col-10 col-md-4 p-3">INICIAR SESIÓN</Link>
            </div>
          </div>

          <div className="col-12 col-lg-6 p-0">
            <div
              className="entrenadores-bg"
              style={{ backgroundImage: `url(${entrenadoresImg})` }}
            ></div>
          </div>
        </div>
      </div>

    </MainLayout>
  );
}

export default Entrenadores;
