import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div>
       <h1>Bem vindo a página Home!!</h1>
       <Link to="/contato">Contato</Link><br />
        <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
  
  