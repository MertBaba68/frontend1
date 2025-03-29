import "/src/styles/CustomFilterOptions.css"

export const CustomFilterOptions = ({
        data,
        title,
        onSelect,
    }) => {

    return (
        <div className="filteroption-container">
            <h3 className="filteroption-title">{title}</h3>
            <div className="filteroption-options">
                {data.map(option => (
                    <label
                        className="filteroption-label"
                        key={option}
                    >
                        <input
                            className="filteroption-checkbox"
                            id={option}
                            type="checkbox"
                            name={option}
                            value={option}
                            hidden
                            onClick={() => onSelect({ title, option })}
                        />
                        <span className="filteroption-button">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}
