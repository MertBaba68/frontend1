import "/src/styles/Page.css"

const Page = ({ children }) => {
    return(
        <div className="page-container" >
            {children}
        </div>
    )
}

export default Page