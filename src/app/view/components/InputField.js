import "/src/styles/InputField.css"

export const InputField = ({ type, id, label, name, value, onChange, typeOfInput, onEnter }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>

            {typeOfInput === "input" && (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onKeyDown={e => {
                        if (e.key === "Enter") {onEnter()}
                        }
                    }
                />
            )}

            {typeOfInput === "textarea" && (
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onKeyDown={e => {
                        if (e.key === "Enter") {onEnter()}
                    }
                    }
                ></textarea>
            )}
        </div>
    )
} 