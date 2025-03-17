import "/src/styles/BlankPage.css"

const BlankPage = ({ errormessage, information }) => {
    return(
        <div className="blankpage-container" >
            {errormessage ? (
                <p className="blankpage-errormessage" >Er is een fout opgetreden: {errormessage}</p>
            ) : (
                <p className="blankpage-information" >{information}</p>
            )}
        </div>
    )
}

export default BlankPage;