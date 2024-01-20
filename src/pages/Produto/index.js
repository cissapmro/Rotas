import { useParams } from "react-router-dom";

export default function Produto() {
const {id} = useParams(); 

    return (
      <div>
       O meu produto é: {id}
      </div>
    );
  }
  
  