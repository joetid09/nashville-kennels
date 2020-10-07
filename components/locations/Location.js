import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location}</h3>
        <address className="location__address">{location.name}</address>
    </section>
)