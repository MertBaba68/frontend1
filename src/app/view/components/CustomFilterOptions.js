import "/src/styles/CustomFilterOptions.css"

export const CustomFilterOptions = ({ data, title }) => {
    return (
        <div className="filteroption-container">
            <h3 className="filteroption-title">{title}</h3>
            <div className="filteroption-options">
                {data.map(item => (
                    <label key={item} className="filteroption-label">
                        <input
                            className="filteroption-checkbox"
                            id={item}
                            type="checkbox"
                            name={item}
                            value={item}
                            hidden
                        />
                        <span className="filteroption-button">{item}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}