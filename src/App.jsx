//----- IMPORTS -----//
import { Outlet } from "react-router-dom";

//CSS
import 'normalize.css'

//Files
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//----- EXPORTS -----//
function App() {

  //Return
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
