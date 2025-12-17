import MainLayout from "./layouts/MainLayout";
import local1 from '../assets/img/gym1.png';
import local2 from '../assets/img/gym2.png';
import local3 from '../assets/img/gym3.png';
import {Link} from 'react-router-dom';
import BtnIniciarSesion from "./common/BtnIniciarSesion";
import BtnRegistrarme from "./common/BtnRegistrarme";

function Locales() {
    return (
        <MainLayout>
            <div className="container mt-5">
                 <div class="text-center mb-4">
                    <h1 class="bebas-neue color-amarillo fst-italic">Nuestros locales</h1>
                    <h2 class="mb-0 bebas-neue color-gris fst-italic">Entrena dónde mejor te venga!</h2>
                </div>
                <div className="row border border-dark mt-5 rounded p-3 shadow-dark vh-md-50">
                    <div className="col-md-6">
                        <img src={local1} width="95%" height="100%" className="rounded"/>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center p-3 ">
                        <h2 className="bebas-neue color-gris">Gimnaso Irun</h2>
                        <p className="py-3">
                        Un espacio moderno y completo pensado para que entrenes a tu ritmo. Zonas de fuerza, cardio y peso libre perfectamente equipadas, además de clases dirigidas para todos los niveles. Ideal tanto si estás empezando como si quieres llevar tu rendimiento un paso más allá.                        
                        </p>
                    </div>
                </div>
                <div className="row border border-dark mt-5 rounded d-flex flex-column-reverse flex-md-row p-3 shadow-dark vh-md-50">
                    <div className="col-md-6 d-flex flex-column justify-content-center p-3">
                        <h2 className="bebas-neue color-gris">Gimnasio Donostia</h2>
                        <p className="py-3">
                            Un gimnasio amplio y luminoso con ambiente motivador y máquinas de última generación. Podrás disfrutar de entrenamientos funcionales, área de estiramientos y sesiones en grupo que harán que cada visita sea diferente. El lugar perfecto para desconectar y cuidarte.                        
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={local2} width="95%" height="100%" className="rounded"/>
                    </div>
                </div>
                <div className="row border border-dark mt-5 rounded p-3 shadow-dark vh-md-50">
                    <div className="col-md-6">
                        <img src={local3} width="95%" height="100%" className="rounded"/>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center p-3">
                        <h2 className="bebas-neue color-gris">Gimnasio Hernani</h2>
                        <p className="py-3">
                            Un centro cercano y dinámico, diseñado para que te sientas parte de la comunidad Fitness Park desde el primer día. Combina una sala de musculación completa, zona de cardio y actividades dirigidas, para que encuentres siempre la rutina que mejor encaja contig                        
                        </p>
                    </div>
                </div>
                <div className="row d-flex flex-column flex-md-row justify-content-evenly align-items-center mt-4 gap-3 w-100 mb-4">
                    <BtnRegistrarme extraClass="border-dark" />
                    <BtnIniciarSesion extraClass="border-dark"/>
                </div>
            </div>
        </MainLayout>
    );
    
}

export default Locales;