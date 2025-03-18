import ContactForm from "@/app/view/components/ContactForm";
import {useState} from "react";
import contactForm from "@/app/view/components/ContactForm";


const ContactFormController = ({ page }) => {
    const [kvkNummer, setkvkNummer] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [context, setContext] = useState("");
    const [warning, setWarning] = useState("");

    const handleSubmitForm = () => {
        const validated = validateContactForm()
        if (validated !== "") {
            setWarning(validated);
        }

        else {

        }
    }

    const postContactForm = () => {

    }

    const validateContactForm = () => {
        const startOfErrorMessage = "Please enter a valid: "
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