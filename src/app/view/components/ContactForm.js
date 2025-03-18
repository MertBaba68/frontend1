import "/src/styles/ContactForm.css"
import Card from "@/app/view/components/Card";
import {useState} from "react";

const ContactForm = ({
    kvkNummer, setkvkNummer,
    email, setEmail,
    phone, setPhone,
    name, setName,
    context, setContext
                     }) => {

    return (
        <Card>
            <h1 className="contactform-heading">Enthousiast?</h1>
            <p className="contactform-description">Vul hier uw informatie in</p>

            <label htmlFor="kvk">KvK-nummer</label>
            <input id="kvk" className="contactform-input-kvk" type="text"
                   onChange={(e) => {setkvkNummer(e.target.value)}}
                   value={kvkNummer}
            />

            <label htmlFor="email">E-mail</label>
            <input id="email" className="contactform-input-email" type="email"
                   onChange={((e) => setEmail(e.target.value))}
                   value={email}
            />

            <label htmlFor="phone">Telefoonnummer</label>
            <input id="phone" className="contactform-input-phone" type="text"
                   onChange={(e) => {setPhone(e.target.value)}}
                   value={phone}
            />

            <label htmlFor="name">Naam</label>
            <input id="name" className="contactform-input-name" type="text"
                   onChange={(e) => {setName(e.target.value)}}
                   value={name}
            />

            <label htmlFor="message">Bericht</label>
            <textarea id="message" className="contactform-textarea-context"
                      onChange={(e) => {setContext(e.target.value)}}
                      value={context}
            ></textarea>
        </Card>
    );
};

export default ContactForm