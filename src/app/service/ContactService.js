import config from "../../../config/config";

const API_BASE_URL = config.API_BASE_URL;

const formatContact = (data) => {
    return {
        chamberOfCommerce: data.kvkNummer,
        email: data.email,
        phone: data.phone,
        contactPersonName: data.name,
        location: "homepage", //TODO: integrate location
        context: data.context
    }
}

export const postContact = async (formData) => {
    try {
        const formattedData = formatContact(formData)
        const response = await fetch(`${API_BASE_URL}/contact/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formattedData),
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${await response.text() || "Unknown error"}`);
        }

        return { message: "Uw contactformulier is succesvol verzonden." }


    } catch (error) {
        throw new Error(error.message || "An unknown error occurred.");
    }
}
