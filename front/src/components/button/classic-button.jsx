import "../../styles/button.css"
import "../../styles/Typo.css"

export default function ClassicButton({ children }) {

    return (
        <>
            <button className="first-cta button-font">{children}</button>
        </>
    )
}