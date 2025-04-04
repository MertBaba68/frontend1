import "/src/styles/ActionBar.css"
import Card from "@/app/view/components/static/Card";
import {InputField} from "@/app/view/components/InputField";

const ActionBar = ({
    title,
    searchTerm, setSearchTerm,
    submitForm,
                   }) => {

    return (
        <>
            <Card center={true} >
                <h1 className="actionbar-heading">{title}</h1>
                <p className="actionbar-description">Zoek hier naar uw toekomstige dienst</p>
                <form>
                    <InputField
                        label="Zoeken"
                        id="searchTerm"
                        type="text"
                        typeOfInput="input"
                        value={searchTerm}
                        onChange={(e) => {setSearchTerm(e.target.value)}}
                        onEnter={submitForm}
                    />
                </form>

            </Card>
        </>
    )
}
export default ActionBar;