import "/src/styles/BlankPage.css"

const StatusPage = ({ type = "info", status }) => {

    const formattedMessage = type === "error" ? `Er is iets fout gegaan: ${status}` : status

    return(
        <div className={`statuspage-container`} >
            <p className={`statuspage-text-${type}`} >
                {formattedMessage}
            </p>
        </div>
    )
}

export default StatusPage;