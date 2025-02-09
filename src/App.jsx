// import { useState } from 'react'
// import './App.css'
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Header from './Components/Header/Header'
// import Pricing from './Components/Pricing/Pricing'
// import Footer from './Components/Footer/Footer'
// import Outfit from './Components/Outfit/Outfit'
// import FAQ from './Components/FAQ/FAQ.JSX'
import Page from './Page'
// import { Route, Router, Routes } from 'react-router-dom'
// // import WeddingPhoto from './Components/weddingPhoto'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header/>
//       <Outfit/>
//       <Pricing/>
//       <FAQ/>
//       <Footer/>
//       <Routes>
//     <Route path="/Page" element={<Page/>}></Route>
//   </Routes>
     
//       </>
  
   
//   )
// }

// export default App




import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap Import
import Header from "./Components/Header/Header";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";
import Outfit from "./Components/Outfit/Outfit";
import FAQ from "./Components/FAQ/FAQ";

function App() {
  const [showPage, setShowPage] = useState(false); // ✅ State to control content

  return (
    <>
    {showPage ? (
      <Page /> // ✅ Show Page component when button is clicked
    ) : (
      <>
        {/* ✅ Pass the state setter function to Header */}
        <Header onNavigate={() => setShowPage(true)} />
        <Outfit />
        <Pricing />
        <FAQ />
        <Footer />
      </>
    )}
  </>
  );
}

export default App;
