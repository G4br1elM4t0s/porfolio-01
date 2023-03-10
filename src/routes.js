import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Main from './pages/Main';
import Repositorio from "./pages/Repositorio";


export default function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/repositorio/:repositorio" element={<Repositorio/>}/> 
      </Routes>
    </Router>
  )
}


// a linha 13 tem o /:repositorio pois a rota `Repositorio espera um parmetro`