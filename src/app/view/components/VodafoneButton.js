import "/src/styles/VodafoneButton.css"

const VodafoneButton = ({ text }) => {
    return (
        <div className="vodafonebutton-container" >
            <button className="vodafonebutton-button">{text}</button>
        </div>
    )
}

export {VodafoneButton}