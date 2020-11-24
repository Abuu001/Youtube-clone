import React from 'react'
import "./SideBarRow.css"

function SideBarRow({title,Icon,selected}) {
    return (
        <div className={`sideBarRow  ${selected && "selected"}`}>
            <Icon className="sideBarRow__Icon"  />
            <h2  className="sideBarRow__TItle">{title}</h2>
        </div>
    )
}

export default SideBarRow
