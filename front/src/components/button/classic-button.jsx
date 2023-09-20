import "../../styles/button.css"
import "../../styles/Typo.css"
import { Link } from 'react-router-dom';


export default function ClassicButton({ children, to }) {
    return (
        <>
            <Link to={to} className="first-cta button-font">
                {children}
            </Link>
        </>
    );
}