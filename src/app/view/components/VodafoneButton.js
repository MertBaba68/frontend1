import "/src/styles/VodafoneButton.css"

const VodafoneButton = ({ children }) => {
    return (
        <div className="vodafonebutton-container" >
            <button className="vodafonebutton-button">{children}</button>
        </div>
    )
}

export {VodafoneButton}