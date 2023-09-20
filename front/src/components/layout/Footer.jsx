import "../../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer() {

    return (
        <>
            <div className="footer">
                <div className="Footer-title">
                    <h1>NOUS CONNAITRE</h1>
                </div>
                <div>
                    <div className="text-footer">
                        <p>Visitez nos réseaux sociaux ou nous partageons tous les meilleurs bon plans. Vous pouvez également nous laisser une petite review ! </p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="instagram" />
                    </div>
                </div>
            </div>
        </>
    )
}