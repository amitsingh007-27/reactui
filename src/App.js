import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Menu from "./Components/Pages/Menu";
import Services from "./Components/Pages/Services";

function App() {
  return (
       <Router>
         <Navbar/>
         <Routes>

           <Route path="/About"element={<About/>}></Route>
           <Route path="/Home "element={<Home/>}></Route>
           <Route path="/Menu"element={<Menu/>}></Route>
           <Route path="/Services"element={<Services/>}></Route>
           <Route path="/Contact"element={<Contact/>}></Route>

         </Routes>
       </Router>
  );
};

export default App;
