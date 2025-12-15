import MainLayout from './layouts/MainLayout';
import {Link} from 'react-router-dom';

function LandingPage() {
  return (
    <MainLayout>
      <div id="land-page" className="text-white d-flex justify-content-center align-items-center text-center flex-column min-vh-100">
        <div className="subdiv text-white col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="bebas-neue fst-italic" id="title">Bienvenido a FITNESS PARK</h1>
          <h1 className="bebas-neue fs-2 fst-italic">Tu gimnasio. Tu ritmo. Tu espacio.</h1>

          <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center mt-4 gap-3 w-100">
            <Link to="/signup" className="btn btn-warning col-10 col-md-4 p-3">REGISTRARME</Link>
            <Link to="/login" className="btn btn-light col-10 col-md-4 p-3">INICIAR SESIÓN</Link>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default LandingPage;
