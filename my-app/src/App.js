
import './App.css';
import NavbarNumerMethod from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Bisection from "./Page/Bisection";
import Falseposition from "./Page/Falseposition";
import Onepointiteration from "./Page/Onepointiteration";
import NewtonRaphson from "./Page/NewtonRaphson";
import LinearRegression from "./Page/LinearRegression";
import PolynomialRegression from "./Page/PolynomialRegression";
import SecantMethod from "./Page/SecantMethod";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < NavbarNumerMethod/>
        <Routes>
          <Route path ="/Page/Home" element={<Home/>} />
          <Route path ="/Page/Bisection" element={<Bisection/>} />
          <Route path ="/Page/Falseposition" element={<Falseposition/>} />
          <Route path ="/Page/Onepointiteration" element={<Onepointiteration/>} />
          <Route path ="/Page/NewtonRaphson" element={<NewtonRaphson/>} />
          <Route path ="/Page/LinearRegression" element={<LinearRegression/>} />
          <Route path ="/Page/PolynomialRegression" element={<PolynomialRegression/>} />
          <Route path ="/Page/SecantMethod" element={<SecantMethod/>} />
        </Routes>
        
      </BrowserRouter>

      

    </div>
  );
}

export default App;
