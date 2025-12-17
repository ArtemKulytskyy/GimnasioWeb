import IniciarSesionModal from '../IniciarSesionModal';
import Header from "../common/Header";
import Footer from '../common/Footer';

const MainLayout = ({children}) => {
    return(
        <>
            <IniciarSesionModal/>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;