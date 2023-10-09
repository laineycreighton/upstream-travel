//----- IMPORTS -----//
import { Outlet } from "react-router-dom";

//CSS
import 'normalize.css';

//Pages
import NavBar from './components/NavBar';

//----- EXPORTS -----//
function App() {

  //Return
  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
