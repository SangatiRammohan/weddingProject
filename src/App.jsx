
import Page from './Page'
// import { useState } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css"; 
// import Header from "./Components/Header/Header";
// import Pricing from "./Components/Pricing/Pricing";
// import Footer from "./Components/Footer/Footer";
// import Outfit from "./Components/Outfit/Outfit";
// import FAQ from "./Components/FAQ/FAQ";

// function App() {
//   const [showPage, setShowPage] = useState(false); 

//   return (
//     <>
//     {showPage ? (
//       <Page /> 
//     ) : (
//       <>
     
//         <Header onNavigate={() => setShowPage(true)} />
//         <Outfit />
//         <Pricing />
//         <FAQ />
//         <Footer />
//       </>
//     )}
//   </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";
import Outfit from "./Components/Outfit/Outfit";
import FAQ from "./Components/FAQ/FAQ";
import PictureGeneration from './Components/PictureGeneration/PictureGeneration'
import Register from './Components/register/Register'
import Login from './Components/Login/LoginForm';
import History from './Components/History/History'
function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Outfit />
          <Pricing />
          <FAQ />
          <Footer />
        </>
      } />
      <Route path="/page" element={<Page />} /> 
      <Route path="/picture" element={<PictureGeneration/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path='/history' element={<History/>}></Route>
    </Routes>

    
  );
}

export default App;
