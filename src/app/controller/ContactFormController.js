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
        const error = validateContactForm()
        if (error !== "") {
            setErrorMessage(error);
            setSuccessMessage("")
        }

        else {
            submitContactForm()
        }
    }

    const submitContactForm = async () => {
        const formattedData = { kvkNummer, email, phone, name, context }

        try {
            const data = await postContact(formattedData)
            setSuccessMessage(data.message)
            setErrorMessage("")
        } catch (error) {
            setSuccessMessage("")
            setErrorMessage(
                "Er is iets foutgegaan tijdens het versturen van het formulier."
            )
        }

    }

    const validateContactForm = () => {

        const validations = [
            { condition: kvkNummer === "", message: "kvk number" },
            { condition: email === "" || !email.includes("@"), message: "email" },
            { condition: phone === "", message: "phonenumber" },
            { condition: name === "", message: "name" },
            { condition: context === "", message: "context" },
        ]

        const invalidation = validations.find((validation) => validation.condition);
        return invalidation ? `Please enter a valid ${invalidation.message}` : ""
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