// IMPORT DE COMPOSANT ET API
import React from 'react';
import { Routes, Route } from "react-router-dom";

// IMPORT POUR PAGE
import Menu from "./components/menu";
import SideMenu from "./components/sideMenu"
import Home from "./pages/home"
import Facturation from './pages/facturation.js'
import Contrat from './pages/contrat'
import Locataire from './pages/locataire'
import Divers from './pages/divers'


// IMPORT CSS
import './App.css';
import './css/menu.css'
import './css/sideMenu.css'
import './css/home.css'
import './css/facturation.css'
import './css/contrat.css'
import './css/locataire.css'
import './css/divers.css'


function App() {
  
    
     return (
      <div className="dashboard">
      <nav className="menu">
          <SideMenu />
      </nav>
      <main className="content">
        <header>
          <Menu />
        </header>
          <Routes>

            <Route path ="/" element = {<Home />} />
            <Route path ="/facture" element = {<Facturation />} />
            <Route path ="/contrat" element = {<Contrat />} />
            <Route path ="/locataire" element = {<Locataire />} />
            <Route path ="/divers" element = {<Divers />} />

          </Routes> 
      </main>
    </div>
    );
}


export default App;
