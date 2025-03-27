import "/src/styles/CustomFilter.css"

export const CustomFilter = ({ onClick, isOpen }) => {
    return(
        <div className="customfilter-container" >
            <div onClick={onClick} className="customfilter-container-content">
                <h2 className="customfilter-title">Filter</h2>
                <span className="customfilter-arrow">▼</span>
            </div>
            <hr className="customfilter-line"/>

            {isOpen && (
                <div className="customfilter-content">
                    <p>Filter opties verschijnen hier!</p>
                </div>
                )}
        </div>
    )
}