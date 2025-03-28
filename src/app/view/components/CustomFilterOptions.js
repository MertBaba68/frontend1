import "/src/styles/CustomFilterOptions.css"

export const CustomFilterOptions = ({ data, title }) => {
    return (
        <div className="filteroption-container">
            <h3 className="filteroption-title">{title}</h3>

            {
                data.map(item => (
                    <label key={item} htmlFor={item.title} className="filteroption-label">
                        <input className="filteroption-checkbox" id={item} type="checkbox" name={item}
                               value={item} hidden=''>
                            {item.name}
                        </input>
                        <span className="filteroption-button">{item}</span>
                    </label>
                ))
            }
        </div>
    )
}