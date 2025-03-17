import "/src/styles/ContactForm.css"
import Card from "@/app/view/components/Card";

const ContactForm = () => {
    return (
        <Card>
            <h1 className="contactform-heading">Enthousiast?</h1>
            <p className="contactform-description">Vul hier uw informatie in</p>
            <input type="text"/>
            <input type="email"/>
            <input type="number"/>
            <input type="text"/>
            <textarea className="contactform-description"></textarea>
        </Card>
    );
};

export default ContactForm