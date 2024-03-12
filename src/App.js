import "./App.css";
import Main from "./Components/Main";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import OverView from "./Components/OverView";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="obsolute w-screen">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <div className="obsolute">
          <Main />
        </div>
        <div className="relative">
          <About />
        </div>
      </div>
      <div className="flex flex-col relative bg-white">
        <OverView />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
