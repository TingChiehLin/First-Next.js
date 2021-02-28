import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Layout = ({ children }) => {
    return (
        <div className="content">
            <NavBar/>
            { children }
            <Footer/>
        </div>
    );
}

export default Layout