import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div>
            <h1>Header</h1>
            <Link to="/contato">Contato</Link><br />
        </div>
    )
}
export default Header;