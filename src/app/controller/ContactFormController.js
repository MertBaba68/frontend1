import ContactForm from "@/app/view/components/ContactForm";
import {useState} from "react";


const ContactFormController = () => {
    const [kvkNummer, setkvkNummer] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [context, setContext] = useState("");
    const [warning, setWarning] = useState("");

    const handleSubmitForm = () => {
        setWarning(validateContactForm())
    }

    const validateContactForm = () => {
        const startOfErrorMessage = "Please enter a valid (not empty): "
        if (kvkNummer === "") {
            return startOfErrorMessage +  "kvk number"
        }

        if (email === "" || !email.includes("@")) {
            return startOfErrorMessage +  "email"
        }

        if (phone === "") {
            return startOfErrorMessage +  "phonenumber";
        }

        if (name === "") {
            return startOfErrorMessage +  "name";
        }

        if (context === "") {
            return startOfErrorMessage +  "context";
        }

        return ""
    }

    return(
        <ContactForm
            kvkNummer={kvkNummer} setkvkNummer={setkvkNummer}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
            name={name} setName={setName}
            context={context} setContext={setContext}
            warning={warning}
            submitForm={handleSubmitForm}
        />
    )
}

export default ContactFormController;