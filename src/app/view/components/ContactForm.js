import "/src/styles/ContactForm.css"
import Card from "@/app/view/components/static/Card";
import {VodafoneButton} from "@/app/view/components/VodafoneButton";
import {InputField} from "@/app/view/components/InputField";

const ContactForm = ({
    companyName, setCompanyName,
    email, setEmail,
    phone, setPhone,
    name, setName,
    context, setContext,
    role, setRole,
    submitForm,
    errorMessage, successMessage, isSubmitting
                     }) => {
    const handleSubmitForm = (e) => {
        e.preventDefault();
        submitForm()
    }

    return (
        <Card>
            <h2 className="contactform-heading">Enthousiast?</h2>
            <p className="contactform-description">Vul hier uw informatie in</p>

            {successMessage &&
                <p className="contactform-success">{successMessage}</p>}
            {errorMessage &&
                <p className="contactform-error">{errorMessage}</p>}
            {isSubmitting &&
                <p className="contactform-submitting">...Bezig met versturen...</p>}

            <form onSubmit={handleSubmitForm}>
                <label htmlFor="companyName">Bedrijfsnaam</label>
                <input id="companyName" className="contactform-input-companyName" type="text"
                       onChange={(e) => setCompanyName(e.target.value)}
                       value={companyName}
                />

                <InputField
                    label="Naam"
                    id="name"
                    type="text"
                    typeOfInput="input"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <InputField
                    label="Rol binnen bedrijf"
                    id="role"
                    type="text"
                    typeOfInput="input"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />

                <InputField
                    label="Email"
                    id="role"
                    type="email"
                    typeOfInput="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                    label="Telefoonnummer"
                    id="phone"
                    type="text"
                    typeOfInput="input"
                    value={phone}
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        if (inputValue.length > 10) return
                        const numericPart = inputValue.replace(/\D/g, "");
                        setPhone(numericPart);
                    }}
                />

                <InputField
                    label="Bericht"
                    id="message"
                    typeOfInput="textarea"
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                />

                <VodafoneButton type="submit">Verzend</VodafoneButton>
            </form>

        </Card>
    );
};

export default ContactForm