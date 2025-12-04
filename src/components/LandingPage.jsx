import Header from './common/Header'
import MainLayout from './layouts/MainLayout';

function LandingPage() {
    return(
        <MainLayout>
            <center id="land-page" className="text-white vh-100 d-flex flex-column justify-content-center align-items-center">
                <div id="subdiv" className="text-white w-50 h-50 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="bebas-neue fst-italic" id="title">Bienvenido a FITNESS PARK</h1>
                    <h1 className="bebas-neue fs-2 fst-italic">Tu gimnasio. Tu ritmo. Tu espacio.</h1>
                    <div className="d-flex justify-content-evenly w-50 align-items-center row mt-3">
                        <a href="/signup" className="btn btn-warning col-4">REGISTRARME</a>
                        <a href="/login" className="btn btn-light col-4">INICIAR SESIÓN</a>
                    </div>
                </div>
            </center>
        </MainLayout>
        
    );
}

export default LandingPage;