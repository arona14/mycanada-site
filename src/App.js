import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{backgroundImage: `url(https://canadaimmigrate.ca/wp-content/uploads/2015/08/slider-1.jpg)`}}>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
