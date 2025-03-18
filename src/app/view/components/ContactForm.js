import "/src/styles/ContactForm.css"
import Card from "@/app/view/components/Card";

const ContactForm = () => {
    return (
        <Card>
            <h1 className="contactform-heading">Enthousiast?</h1>
            <p className="contactform-description">Vul hier uw informatie in</p>

            <label htmlFor="kvk">KvK-nummer</label>
            <input id="kvk" className="contactform-input-kvk" type="text"/>

            <label htmlFor="email">E-mail</label>
            <input id="email" className="contactform-input-email" type="email"/>

            <label htmlFor="phone">Telefoonnummer</label>
            <input id="phone" className="contactform-input-phone" type="number"/>

            <label htmlFor="name">Naam</label>
            <input id="name" className="contactform-input-name" type="text"/>

            <label htmlFor="message">Bericht</label>
            <textarea id="message" className="contactform-textarea-context"></textarea>
        </Card>
    );
};

export default ContactForm