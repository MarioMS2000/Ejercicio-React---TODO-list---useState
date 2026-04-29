import Footer from "../components/Footer"
import Header from "../components/Header"
function LayoutDefault({ children }) {
    return (
        <div>
            <header>
                < Header />
            </header>

            <main>
                {children}
            </main>

            <footer>
                < Footer />
            </footer>
        </div>
    );
}

export default LayoutDefault