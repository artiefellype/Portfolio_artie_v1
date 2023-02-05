import "./styles";
import {
    Navbar,
    Main,
    About,
    Projects,
    Experience,
    Contact,
    Footer,
} from "./components";
import "./styles/GlobalStyles.css";

function App() {
    return (
        <>
            <Navbar />
            <Main />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
