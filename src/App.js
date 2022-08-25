import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import NavBarExample from './layouts/navbar';


const Dibujos = (exposicion, lugar, mes) => {
  return(
    <>
    
      <h1>{exposicion}</h1>
      <div>
      <p>en {lugar}</p>
      <p>en el mes de {mes}</p>
      </div>
      </>
  )
}
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<NavBarExample/>}>
        <Route index element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route/>
      </Route>
     </Routes>
     </BrowserRouter>
<hr/>
     {Dibujos("Arte Urbano","Palermo","septiembre" )}
     <hr/>
     {Dibujos("Resistencia","San miguel","Noviembre" )}

</div>


  );
}

export default App;
