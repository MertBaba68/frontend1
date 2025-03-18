import "/src/styles/ContactForm.css"
import Card from "@/app/view/components/Card";
import {VodafoneButton} from "@/app/view/components/VodafoneButton";

const ContactForm = ({
    kvkNummer, setkvkNummer,
    email, setEmail,
    phone, setPhone,
    name, setName,
    context, setContext,
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
                <p className="contactform-submitting">...Sending...</p>}

            <form onSubmit={handleSubmitForm} >
                <label htmlFor="kvk">KvK-nummer</label>
                <input id="kvk" className="contactform-input-kvk" type="text"
                       onChange={(e) => setkvkNummer(e.target.value)}
                       value={kvkNummer}
                />

                <label htmlFor="email">E-mail</label>
                <input id="email" className="contactform-input-email" type="email"
                       onChange={((e) => setEmail(e.target.value))}
                       value={email}
                />

                <label htmlFor="phone">Telefoonnummer</label>
                <input id="phone" className="contactform-input-phone" type="text"
                       onChange={(e) => {
                           const inputValue = e.target.value;

                           if (inputValue.length > 10) return
                           const numericPart = inputValue.replace(/\D/g, "");
                           setPhone(numericPart);

                       }}
                       value={phone}
                />

                <label htmlFor="name">Naam</label>
                <input id="name" className="contactform-input-name" type="text"
                       onChange={(e) => setName(e.target.value)}
                       value={name}
                />

                <label htmlFor="message">Bericht</label>
                <textarea id="message" className="contactform-textarea-context"
                          onChange={(e) => setContext(e.target.value)}
                          value={context}
                ></textarea>

                <VodafoneButton type="submit">Verzend</VodafoneButton>
            </form>

        </Card>
    );
};

export default ContactForm