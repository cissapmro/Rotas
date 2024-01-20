import { Link } from "react-router-dom";

export default function Erro() {
    return (
      <div>
        <h1>Hum, Esta página não existe!!</h1>
        <Link to="/">Home</Link><br />
        <Link to="/contato">Contato</Link><br />
        <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
  
  