import ContactForm from "@/app/view/components/ContactForm";
import {useState} from "react";


const ContactFormController = () => {
    const [kvkNummer, setkvkNummer] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [context, setContext] = useState("");
    const [warning, setWarning] = useState("");

    const hello = () => {
        if (kvkNummer === "") {
            setWarning("Pleas")
        }

        if (email === "" || !email.includes("@")) {
            setWarning("Please enter a valid email");
        }

        if (phone === "") {

        }

        if (name === "") {

        }

        if (context === "") {

        }
    }

    return(
        <ContactForm
            kvkNummer={kvkNummer} setkvkNummer={setkvkNummer}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
            name={name} setName={setName}
            context={context} setContext={setContext}
        />
    )
}

export default ContactFormController;