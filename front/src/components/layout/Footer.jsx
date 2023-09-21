import "../../styles/Footer.css";
import FacebookIcon from "../../media/icons/facebook.svg";
// import RoundIconComponent from "../Icons/round";

export default function Footer() {

    return (
        <>
        <footer className="mt-56 mb-52 flex justify-center ">
            <div className="container">
                <div className="flex items-center">
                    <div>
                        <div>
                            <h1 className="color-main-orange">NOUS CONNAITRE</h1>
                        </div>
                        <div>
                            <div className="max-w-2xl">
                                <p>Visitez nos réseaux sociaux ou nous partageons tous les meilleurs bon plans. Vous pouvez également nous laisser une petite review ! </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        {/* <RoundIconComponent fillColor="var(--main-blue)" icon={<FacebookIcon />} /> */}
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}