import "/src/styles/Page.css"

const Page = ({ children }) => {
    return(
        <div className="page" >
            <div className="page-container">
                {children}
            </div>
        </div>
    )
}

export default Page
