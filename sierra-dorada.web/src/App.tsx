import './App.scss';
import './global-styles.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Products from './components/products/products';
import OurLegend from './components/our-legend/our-legend';
import OurServices from './components/our-services/our.services';
import Contact from './components/contact/contact';
import Cart from './components/cart/cart';
import Login from './components/Login/sesion';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <BrowserRouter>
      <div className="menu-container">

        {/* Botón solo visible en móvil */}
        <Button
          icon="pi pi-bars"
          onClick={() => setVisible(true)}
          className="block md:hidden p-button-text utils-button"
        />

        {/* Sidebar solo para móviles */}
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <nav className="flex flex-column gap-3 font-dorsa text-menu">
            <Link className='font-dorsa text-menu' to="/">Inicio</Link>
            <Link to="/Productos">Productos</Link>
            <Link to="/Nuestra-leyenda">Nuestra leyenda</Link>
            <Link to="/Servicios">Servicios</Link>
            <Link to="/Contacto">Contacto</Link>
            <Link to="/Carrito">Carrito</Link>
            <Link to="/Login">Iniciar sesión</Link>
            <Link to="/Login">Registrarse</Link>
          </nav>
        </Sidebar>

        {/* Menú normal visible solo en escritorio */}
        <nav className="hidden md:flex gap-3 mb-3 font-dorsa text-menu">
          <Link to="/">Inicio</Link>
          <Link to="/Productos">Productos</Link>
          <Link to="/Nuestra-leyenda">Nuestra leyenda</Link>
          <Link to="/Servicios">Servicios</Link>
          <Link to="/Contacto">Contacto</Link>
          <Link to="/Carrito">Carrito</Link>
          <Link to="/Login">Iniciar sesión</Link>
          <Link to="/Login"><Button className='register-button  p-button-text'>Registrarse</Button></Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Products />} />
          <Route path="/Nuestra-leyenda" element={<OurLegend />} />
          <Route path="/Servicios" element={<OurServices />} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/Carrito" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
