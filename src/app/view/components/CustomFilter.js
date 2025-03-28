import "/src/styles/CustomFilter.css"
import {CustomFilterOptions} from "@/app/view/components/CustomFilterOptions";

export const CustomFilter = ({ onClick, isOpen,  }) => {

    const ROLES = ['IT manager', 'CEO', 'CFO']

    return(
        <div className="customfilter-container" >
            <div onClick={onClick} className="customfilter-container-content">
                <h2 className="customfilter-title">Filters</h2>
                <span className="customfilter-arrow">▼</span>
            </div>
            {!isOpen && (
                <hr className="customfilter-line"/>
            )}
            {isOpen && (
                <div className="customfilter-content">
                    <CustomFilterOptions title="Rol" data={ROLES}/>
                </div>
                )}
        </div>
    )
}