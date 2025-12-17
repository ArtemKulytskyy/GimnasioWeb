import MainLayout from './layouts/MainLayout';
import clase1 from '../assets/img/claseHit.png';
import clase2 from '../assets/img/claseSpinning.png';
import clase3 from '../assets/img/claseYoga.png';
import {Link} from 'react-router-dom';
import BtnIniciarSesion from './common/BtnIniciarSesion';
import BtnRegistrarme from './common/BtnRegistrarme';

function Clases() {
    return(
        <MainLayout>
            <div className="container mt-5">
                 <div className="text-center mb-4">
                    <h1 className="bebas-neue color-amarillo fst-italic">Clases dirigidas</h1>
                    <h2 className="mb-0 bebas-neue color-gris fst-italic">Sé parte de nuestras clases de grupo para todos los niveles.</h2>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide border border-dark rounded shadow-dark" data-bs-ride="carousel">
                    <div className="carousel-indicators d-none d-md-flex">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                <div className="carousel-inner">

                    {/* img 1 */}
                    <div className="carousel-item active">
                        <img src={clase1} className="d-block w-100 vh-50 rounded" alt="Clase Hit" />

                        {/* Texto encima de la imagen(md+)*/}
                        <div className="carousel-caption d-none d-md-block clases-desc">
                        <h3 className="bebas-neue">Clase Hit</h3>
                        <p className="fs-5">
                            Sesiones de alta intensidad en intervalos cortos para quemar grasa,
                            mejorar tu resistencia y ganar fuerza en tiempo récord. Ideales si
                            quieres resultados rápidos y entrenamientos dinámicos.
                        </p>
                        </div>

                        {/* Texto debajo de la imagen para pantallas pequeñas*/}
                        <div className="d-block d-md-none text-center bg-dark bg-opacity-75 text-white p-3">
                        <h3 className="bebas-neue mb-2">Clase Hit</h3>
                        <p className="mb-0">
                            Sesiones de alta intensidad en intervalos cortos para quemar grasa,
                            mejorar tu resistencia y ganar fuerza en tiempo récord.
                        </p>
                        </div>
                    </div>

                    {/* img 2 */}
                    <div className="carousel-item">
                        <img src={clase2} className="d-block w-100 vh-50 rounded" alt="Clase Spinning" />

                        <div className="carousel-caption d-none d-md-block clases-desc">
                        <h3 className="bebas-neue">Clases Spinning</h3>
                        <p className="fs-5">
                            Entrenamientos sobre bicicleta indoor al ritmo de la música, perfectos 
                            para mejorar tu capacidad cardiovascular, quemar calorías y fortalecer 
                            piernas y glúteos en un ambiente motivador.
                        </p>
                        </div>

                        <div className="d-block d-md-none text-center bg-dark bg-opacity-75 text-white p-3">
                        <h3 className="bebas-neue mb-2">Clases Spinning</h3>
                        <p className="mb-0">
                            Mejora tu resistencia y quema calorías al ritmo de la música en un ambiente motivador.
                        </p>
                        </div>
                    </div>

                    {/* img 3 */}
                    <div className="carousel-item">
                        <img src={clase3} className="d-block w-100 vh-50 rounded" alt="Clase Yoga" />

                        <div className="carousel-caption d-none d-md-block clases-desc">
                        <h3 className="bebas-neue">Clases Yoga</h3>
                        <p className="fs-5">
                            Clases centradas en la respiración, la movilidad y la relajación, donde 
                            trabajarás fuerza, flexibilidad y equilibrio mientras reduces el estrés 
                            y desconectas de la rutina diaria.
                        </p>
                        </div>

                        <div className="d-block d-md-none text-center bg-dark bg-opacity-75 text-white p-3">
                        <h3 className="bebas-neue mb-2">Clases Yoga</h3>
                        <p className="mb-0">
                            Mejora tu flexibilidad y relájate mientras desconectas de la rutina diaria.
                        </p>
                        </div>
                    </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="row d-flex flex-column flex-md-row justify-content-evenly align-items-center mt-4 gap-3 w-100 mb-4">
                    <BtnRegistrarme extraClass="border-dark" />
                    <BtnIniciarSesion extraClass='border-dark'/>
                </div>
            </div>
        </MainLayout>
    );
}
export default Clases;