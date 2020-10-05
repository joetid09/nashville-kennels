import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        console.log("AnimalList: useEffect - getAnimals")
        getAnimals()
    }, [])

    return (
        <div className="animals">
            {console.log("AnimalList: Render")}
            {
                animals.map(animal => {
                    return <AnimalCard key={animal.id} location={animal.location.name} animal={animal} />
                })
            }
        </div>

    )
}