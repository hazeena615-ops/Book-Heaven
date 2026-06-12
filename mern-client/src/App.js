
// import './App.css';

// function App() {
//   return (
//     <div>hello world</div>
//   );
// }

// export default App;
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

function App() {
  

  return (
    
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>

  );
}

export default App

