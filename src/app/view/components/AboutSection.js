import "/src/styles/AboutSection.css"

const AboutSection = ({ header, description, img, list }) => {
    return (
        <div className="about-section-container">
            <div className="about-section-alinea">
                {header && (
                    <b className="about-section-header">{header}:</b>
                )}

                {description && (
                    <p className="about-section-description">{description}</p>
                )}

                {list && list.length > 0 && (
                    <ul className="about-section-list">
                        {list.map((item, index) => (
                            <li key={index} className="about-section-list-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div  className="about-section-img-container">
                {img && (
                    <img className="about-section-img" src={img} alt={header || "About section image"}/>
                )}
            </div>

        </div>
    );
}

export default AboutSection;