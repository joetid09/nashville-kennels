import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import { useHistory } from "react-router-dom"
import "./Customer.css"

export const CustomerList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("CustomerList: useEffect - getCustomers")
        getCustomers()
    }, [])

    const history = useHistory()

    return (
        <>
            <h2>Customers</h2>
            <button onClick={() => { history.push("/customers/create") }}>
                Add Customer
        </button>
            <div className="customers">
                {
                    customers.map(customer => {
                        return <CustomerCard key={customer.id} customer={customer} />
                    })
                }
            </div>
        </>
    )
}