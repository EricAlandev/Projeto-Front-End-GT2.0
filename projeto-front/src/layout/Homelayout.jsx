import Footer from "../components/compo-footer/Footer";
import Header from "../components/compo-header/Header";
import {Outlet} from 'react-router-dom';


const HomeL = () => {

    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default HomeL;