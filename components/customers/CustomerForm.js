import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"
import { useHistory } from 'react-router-dom';

export const CustomerForm = (props) => {
    const { addCustomer } = useContext(CustomerContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const address = useRef(null)
    const customer = useRef(null)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
        getCustomers()
    }, [])

    const constructNewCustomer = () => {
        /*
            The `location` and `customer` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */

        const customerId = parseInt(name.current.value)

        addCustomer({
            name: name.current.value,
            address: address.current.value,
            customerId
        })
            .then(() => history.push("/customers"))

    }

    const history = useHistory();

    return (
        <form className="customerForm">
            <h2 className="customerForm__title">New Customer</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerName">Customer name: </label>
                    <input type="text" id="customerName" ref={name} required autoFocus className="form-control" placeholder="Customer name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Input your address: </label>
                    <input type="text" id="customerAddress" ref={address} required autoFocus className="form-control" placeholder="Customer address" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewCustomer()
                }}
                className="btn btn-primary">
                Save Customer
            </button>
        </form>
    )
}