import "/src/styles/VodafoneButton.css"

const VodafoneButton = ({ children, type = "button" }) => {
    return (
        <div className="vodafonebutton-container" >
            <button type={type} className="vodafonebutton-button">{children}</button>
        </div>
    )
}

export {VodafoneButton}