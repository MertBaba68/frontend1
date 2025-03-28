import "/src/styles/CustomFilter.css"
import {CustomFilterOptions} from "@/app/view/components/CustomFilterOptions";

export const CustomFilter = ({ onClick, isOpen, filterData, onSelect, error }) => {
    return(
        <div className="customfilter-container">
            <div onClick={onClick} className="customfilter-header">
                <h2 className="customfilter-title">Filters</h2>
                <span className={`customfilter-arrow ${isOpen ? 'customfilter-arrow-open' : ''}`}>▼</span>
            </div>

            {
                error && (
                    <p>Is ging mis tijdens het ophalen van de filter</p>
                )
            }

            {isOpen && filterData && (
                <div className="customfilter-body">
                    {filterData.map((filter, index) => (
                        <CustomFilterOptions
                            key={index}
                            title={filter.title}
                            data={filter.options}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            )}


        </div>
    )
}