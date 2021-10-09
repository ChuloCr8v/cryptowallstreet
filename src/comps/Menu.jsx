import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        < div className = "menu-items-container" >
        <ol>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </li>
            <li >
                <Link to="/exchanges">Exchanges</Link>
            </li>
            <li>
                <Link to="/news">News</Link>
            </li>
        </ol>
    </div >
    )
}

export default Menu

