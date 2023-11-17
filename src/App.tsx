import "./styles";
import {
    Navbar,
    Main,
    About,
    Projects,
    Experience,
    Contact,
    Footer,
    Maintance,
} from "./components";
import "./styles/GlobalStyles.css";

function App() {
    return (
        <>
            <Navbar />
            <Main />
            <Maintance />
            {/* <About />
            <Projects />
            <Experience />
            <Contact /> */}
            <Footer />
        </>
    );
}

export default App;
