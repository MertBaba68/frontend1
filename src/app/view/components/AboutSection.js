import "/src/styles/AboutSection.css"

const AboutSection = ({ header, description, img }) => {
    return (
        <div className="about-section-container">
            <div className="about-section-alinea">
                <b className="about-section-header" >{header}:</b>
                <p className="about-section-description" >
                    Maak briljante werkplekbeslissingen
                    Haal nog meer uit je kantoorruimtes. Nimway van Sony is een complete suite van
                    slimme kantoorsensoren, schermen en applicaties. Kiezen voor Nimway betekent een
                    benadering omarmen die werkplekken aanpast aan een nieuwe realiteit.
                </p>
            </div>


            {img && (
                <img className="img-fluid" src={img} alt={header} />
            )}
        </div>
    );
}

export default AboutSection;