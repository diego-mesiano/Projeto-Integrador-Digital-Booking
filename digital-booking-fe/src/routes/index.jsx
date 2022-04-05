import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home'
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Produto from '../pages/Produto';
import { useLogado } from '../context/Logado'
import FiltroCategoria from '../pages/FiltroCategoria'
import Reserva from '../pages/Reserva'
import FiltroCidades from '../pages/FiltroCidades';


export default function RouteList (){
const {logado} = useLogado();
return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={logado.autenticado ? <Home/> : <Login />} />
        <Route path="/cadastro" element={logado.autenticado ? <Home/> : <Cadastro />} />
        <Route path="/produto/:produtoId" element={<Produto />} />
        <Route path="/categoria/:categoriaId" element={<FiltroCategoria />} />
        <Route path="/cidades/:categoriaId" element={<FiltroCidades />} />
        <Route path="/produto/:produtoId/reserva" element={logado.autenticado ? <Reserva />: <Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 