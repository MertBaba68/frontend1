import "/src/styles/ActionBar.css"

const ActionBar = ({ servicesCategoryData }) => {
    return (
        <>
            <div className="actionbar-container">
                <h1 className="actionbar-heading">{servicesCategoryData.name}</h1>
                <p className="actionbar-description">Zoek hier naar uw toekomstige dienst</p>
                <input
                    className="actionbar-input"
                    type="text"
                    placeholder="Zoeken"
                />
                <p className="actionbar-filter">Filter</p>
            </div>
        </>

    )
}
export default ActionBar;