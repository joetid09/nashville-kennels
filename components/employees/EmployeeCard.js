import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee}</h3>
        <address className="location_address">Next time</address>
    </section>
)

