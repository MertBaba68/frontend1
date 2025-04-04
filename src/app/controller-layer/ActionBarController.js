import {useState} from "react";
import ActionBar from "@/app/view/components/ActionBar";

export const ActionBarController = ({ title, onSearch }) => {
    const[searchTerm, setSearchTerm] = useState("");
    const[errorMessage, setErrorMessage] = useState("");

    const handleSubmitForm = () => {
        setErrorMessage("")
        onSearch(searchTerm);
    }

    return (
        <ActionBar
            title={title}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            submitForm={handleSubmitForm}
            errorMessage={errorMessage}
        />
    )
}