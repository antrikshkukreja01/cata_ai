import "./App.css";
import "../src/assets/css/Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer";
import Preloder from "./components/Preloder";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Preloder />
      <Nav />
      <Header />
      <Footer />
    </>
  );
}

export default App;
