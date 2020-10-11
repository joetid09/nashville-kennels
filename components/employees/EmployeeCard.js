import React from "react"
import { Link } from "react-router-dom"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="customer">
        <h3 className="customer_name">
            <Link to={`/employees/detail/${employee.id}`}>
                {employee.name}
            </Link>
        </h3>
        <address className="customer_address">Location: {employee.location.name}</address>
    </section>
)
