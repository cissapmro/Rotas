import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Header from './componentes/Header';
import Produto from './pages/Produto';

// Defina suas rotas neste arquivo
const AppRoutes = () => (
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/produto/:id" element={<Produto />} />
      <Route path="*" element={<Erro />} /> {/*Deixar por ultimo - Se digitar na url endereço que não existe}*/}
    </Routes>
  </BrowserRouter>
);
export default AppRoutes;