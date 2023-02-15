import HomePage from './Components/HomePage';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <HomePage />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
