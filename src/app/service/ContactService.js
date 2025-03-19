import config from "../../../config/config";

const API_BASE_URL = config.API_BASE_URL;

const formatContact = (formData, url) => {
    let location = "homepage"; // Default value

    if (url.startsWith("/categories/")) {
        location = url.split("/categories/")[1];
    } else if (url.startsWith("/services/")) {
        location = url.split("/services/")[1];
    }

    return {
        chamberOfCommerce: formData.bedrijfsNaam,
        email: formData.email,
        phone: formData.phone,
        contactPersonName: formData.name,
        location: location,
        context: formData.context,
        role: formData.role,
    };
};

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
