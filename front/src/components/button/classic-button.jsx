import "../../styles/button.css"

export default function ClassicButton({ children }) {

    return (
        <>
            <button className="classic">{children}</button>
        </>
    )
}