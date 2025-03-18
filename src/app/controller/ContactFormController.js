import ContactForm from "@/app/view/components/ContactForm";
import {useState} from "react";
import contactForm from "@/app/view/components/ContactForm";
import {postContact} from "@/app/service/ContactService";


const ContactFormController = ({ page }) => {
    const [kvkNummer, setkvkNummer] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [context, setContext] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmitForm = () => {
        const validated = validateContactForm()
        if (validated !== "") {
            setErrorMessage(validated);
        }

        else {
            submitContactForm()
        }
    }

    const submitContactForm = async () => {
        const formattedData = {
            kvkNummer,
            email,
            phone,
            name,
            context,
        }

        try {
            const data = await postContact(formattedData)
            console.log(data)
            setSuccessMessage(data.message)
            setErrorMessage("")
        } catch (error) {
            console.log("Error posting contact", error)
            setSuccessMessage("")
            setErrorMessage(
                "Er is iets foutgegaan tijdens het versturen van het formulier."
            )
        }

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
            submitForm={handleSubmitForm}
            errorMessage={errorMessage}
            successMessage={successMessage}
        />
    )
}

export default ContactFormController;