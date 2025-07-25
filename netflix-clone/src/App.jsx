import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooterContent from "./components/FooterContent";
import Home from "./components/home";
import NavbarHeader from "./components/NavbarHeader";

function App() {
  return (
    <>
      <header>
        <NavbarHeader />
      </header>
      <main>
        <div className=" mt-2 mb-5 p-3">
          <Home />
        </div>
      </main>
      <footer className="d-flex flex-column align-content-center p-5 mt-5 text-secondary w-75 m-auto">
        <FooterContent />
      </footer>
    </>
  );
}

export default App;
