import ContactForm from "@/app/view/components/ContactForm";
import {useState} from "react";
import {postContact} from "@/app/service/ContactService";


const ContactFormController = ({ page }) => {
    const [kvkNummer, setkvkNummer] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [context, setContext] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        setIsSubmitting(true);
        setSuccessMessage("")
        setErrorMessage("")

        try {
            const data = await postContact(formattedData)
            setSuccessMessage(data.message)
        } catch (error) {
            setErrorMessage(
                "Er is iets foutgegaan tijdens het versturen van het formulier."
            )
        }
        setIsSubmitting(false);
    }

    const validateContactForm = () => {

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const validations = [
            { condition: kvkNummer === "", message: "kvk number" },
            { condition: email === "" ||
                    emailRegex.test(email)
                , message: "email" },
            { condition: phone === "" || phone.length !== 10, message: "phonenumber" },
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
            isSubmitting={isSubmitting}
        />
    )
}

export default ContactFormController;