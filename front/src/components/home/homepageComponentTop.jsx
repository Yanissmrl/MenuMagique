import '../../styles/Home.css'
import kitchen from "../../media/kitchen.png";

function HomeSectionTop(){
    return (
        <>
            <div>
                <p>Découvrez <span className='font'>MenuMagique</span></p>
            </div>
            <div className='section-top'>
                <div className='flex'>
                    <div>
                        <h1>
                            Pas de repas prévu ? <br /> <span className="blue">Pas de soucis !</span>
                        </h1>
                    </div>
                    <div>
                        <img src={kitchen} alt='' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSectionTop;