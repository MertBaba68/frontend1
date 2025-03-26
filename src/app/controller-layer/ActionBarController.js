import {useState} from "react";
import ActionBar from "@/app/view/components/ActionBar";
import {error} from "next/dist/build/output/log";

export const ActionBarController = ({ title, search }) => {
    const[searchTerm, setSearchTerm] = useState("");
    const[errorMessage, setErrorMessage] = useState("");

    // const handleSubmitForm = () => {
    //     if (!searchTerm || !searchTerm.length || searchTerm === "") {
    //         setErrorMessage("Please enter a valid search term");
    //     } else {
    //         submitSearchTerm()
    //     }
    // }

    return (
        <ActionBar
            title={title}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            submitForm={submitForm}
        />
    )
}