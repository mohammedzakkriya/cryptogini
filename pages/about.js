import "../styles/index.scss"
import Header from '../components/header'
import Footer from '../components/footer'

const About = () => (
    <div className="container-fluid d-flex h-100 mx-auto flex-column">
        <Header />
        <main role="main" className="main-content">
            <h1 className="cover-heading">About page</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
            <p className="lead">
                <a href="" className="btn btn-secondary">Learn more</a>
            </p>
        </main>
        <Footer />
    </div>
);

export default About;