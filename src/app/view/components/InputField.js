import "/src/styles/InputField.css"

export const InputField = ({ type, id, label, name, value, onChange, typeOfInput }) => {
    return (
        <div className="custom-inputfield-container">
            <label htmlFor={id}>{label}</label>

            {typeOfInput === "input" && (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            )}

            {typeOfInput === "textarea" && (
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                ></textarea>
            )}


        </div>
    )
}