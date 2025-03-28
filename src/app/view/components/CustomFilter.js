"use client"

import "/src/styles/CustomFilter.css"
import {CustomFilterOptions} from "@/app/view/components/CustomFilterOptions";

export const CustomFilter = ({ onClick, isOpen, filterData  }) => {

    console.log(filterData)

    return(
        <div className="customfilter-container" >
            <div onClick={onClick} className="customfilter-container-content">
                <h2 className="customfilter-title">Filters</h2>
                <span className="customfilter-arrow">▼</span>
            </div>
            {!isOpen && (
                <hr className="customfilter-line"/>
            )}
            {isOpen && filterData && (
                <div className="customfilter-content">
                    {filterData.map((filter, index) => (
                        <CustomFilterOptions key={index} title={filter.title} data={filter.options}/>
                    ))}
                </div>
                )}
        </div>
    )
}