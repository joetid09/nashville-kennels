import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer_name">{customer.name}</h3>
        <address className="customer_address">{customer.address}</address>
    </section>
)