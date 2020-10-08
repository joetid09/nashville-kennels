import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { useHistory } from 'react-router-dom'
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerForm } from "./customers/CustomerForm"
import { EmployeeForm } from "./employees/EmployeeForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employees/EmployeeDetail"
import { CustomerDetail } from "./customers/CustomerDetail"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>


            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <AnimalProvider>
                <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                </Route>
            </AnimalProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <CustomerProvider>
                <Route exact path="/customers/detail/:customerID(\d+">
                    <CustomerDetail />
                </Route>
            </CustomerProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/customers/create">
                            <CustomerForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>


            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>


            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <EmployeeProvider>
                            <Route exact path="/employees/create">
                                <EmployeeForm />
                            </Route>
                        </EmployeeProvider>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <LocationProvider>
                <EmployeeProvider>
                    <Route exact path="/employees/detail/:employeeId(\d+)">
                        <EmployeeDetail />
                    </Route>
                </EmployeeProvider>
            </LocationProvider>


            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>


        </>
    )
}

