import "/src/styles/ActionBar.css"
import Card from "@/app/view/components/dumb/Card";

const ActionBar = ({ servicesCategoryData }) => {
    return (
        <>
            <Card center={true} >
                <h1 className="actionbar-heading">{servicesCategoryData.name}</h1>
                <p className="actionbar-description">Zoek hier naar uw toekomstige dienst</p>
                <input
                    className="actionbar-input"
                    type="text"
                    placeholder="Zoeken"
                />
                <p className="actionbar-filter">Filter</p>
            </Card>
        </>
    )
}
export default ActionBar;