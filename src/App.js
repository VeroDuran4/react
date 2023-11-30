import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import Ejemplo1 from './pages/Ejemplo1';
import Ejemplo2 from './pages/Ejemplo2';
import Mapa from './pages/Mapa';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Aca vamos a declarar todas las rutas */}
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/ejemplo1' element={<Ejemplo1 />}></Route>
          <Route path='/ejemplo2' element={<Ejemplo2 />}></Route>
          <Route path='/ejemplo3' element={<Mapa JS />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
