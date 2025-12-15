import logo from '../../assets/img/logo_oscuro.png';
import instagram from '../../assets/img/footer-logo-instagram.png';
import tiktok from '../../assets/img/footer-logo-tiktok.png';
import youtube from '../../assets/img/footer-logo-youtube.png';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <footer class="bgcolor-gris py-5 text-white">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-md-8 text-center text-md-start">
                        <div class="bebas-neue fs-2 fw-bold mb-4 fst-italic">Enlaces Rápidos</div>
                        <div class="row">
                            <div class="col-6">
                                <Link to="#" class="text-white fs-5 mb-1">Iniciar Sesión</Link>
                                <br/>
                                <Link to="/locales" class="text-white fs-5 mb-1">Nuestros Locales</Link>
                            </div>
                            <div class="col-6">
                                <Link to="/entrenadores" class="text-white fs-5 mb-1">Entrenadores</Link>
                                <br/>
                                <Link to="/clases" class="text-white fs-5 mb-1">Clases Dirigidas</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-1 d-none d-md-flex justify-content-center">
                        <div class="footer-divider"></div>
                    </div>

                    <div class="col-md-2 text-md-start text-center">
                        
                        <div className='d-flex justify-content-center'>
                            <img src={logo} alt="logo" width={150}/>
                        </div>
                        <div class="d-flex justify-content-evenly">
                            <Link to="https://www.instagram.com/fitnessparkspain" class="" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="logo" width={42} height={42}/></Link>
                            <Link to="https://www.tiktok.com/@fitnessparkspain" class="" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt="logo" width={42} height={42}/></Link>
                            <Link to="https://www.youtube.com/c/fitnessparkespa%C3%B1a" class="" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="logo" width={42} height={42} /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;