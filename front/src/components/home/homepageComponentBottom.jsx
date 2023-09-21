import ClassicButton from "../button/classic-button";
import RectangleSVGWithAscii from "../Icons/Rectangle";

function HomeSectionBottom() {
    return (
        <section className="flex justify-center mb-48">
            <div className="container grid md:grid-cols-2 md:grid-rows-1 gap-16 items-center">
                <div>
                    <div className="flex items-center">
                        <RectangleSVGWithAscii fillColor="var(--main-grey)" ascii="🥫" />
                    </div>
                    <div className="flex items-center h-full">
                        <div>
                            <h1>Devenez magicien des</h1>
                            <h1 className="color-main-blue">fonds de tiroir ! </h1>
                            <p className="my-14">
                                Notre algorithme basé sur une technologie militaire vous trouvera les meilleurs <br />
                                repas parmi nos 3 Millions de recettes conçues pour coûter le moins possible. <br />
                                Économisez grâce à nous !
                            </p>
                            <ClassicButton to="/register">Découvrir</ClassicButton>
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <video autoPlay loop muted>
                        <source src="/soup.mp4" type="video/mp4" />
                    </video>

                    {/* <video src="../media/soup.mp4" controls className="w-full"></video> */}
                </div>
            </div>
        </section>
    );
}

export default HomeSectionBottom;