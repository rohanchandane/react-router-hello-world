import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <>
            <div>
                <Link to="/"> Home </Link> | 
                <Link to="/contact"> Contact Us </Link> |
                <Link to="/about"> About </Link>
            </div>
        </>
    )
}

export default Navigation