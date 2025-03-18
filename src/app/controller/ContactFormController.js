import ContactForm from "@/app/view/components/ContactForm";
import {useState} from "react";


const ContactFormController = () => {
    const [kvkNummer, setkvkNummer] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [context, setContext] = useState("");
    const [warning, setWarning] = useState("");

    const validateContactForm = () => {
        if (kvkNummer === "") {
            setWarning("Pleas enter a valid kvk number");
        }

        if (email === "" || !email.includes("@")) {
            setWarning("Please enter a valid email");
        }

        if (phone === "") {
            setWarning("Please enter a valid phonenumber");
        }

        if (name === "") {
            setWarning("Please enter a valid (not empty) name");
        }

        if (context === "") {
            setWarning("Please enter a valid (not empty) context");
        }
    }

    return(
        <ContactForm
            kvkNummer={kvkNummer} setkvkNummer={setkvkNummer}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
            name={name} setName={setName}
            context={context} setContext={setContext}
            warning={warning}
        />
    )
}

export default ContactFormController;