import { useEffect } from "react";

export const ListReactApp = () =>{

    useEffect(() => {
        return(() => {
            alert("Se va a desmontar la lista de usuarios :)")
        })
    })
    
    // Convierto la lista en arreglo
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
    ];

    // .map es para tomar cada uno de los elementos de un arreglo
    const listItems = people.map(function(person) {
        if (person.includes("Creola")) {
            return (
                <li>Yo soy:{person}</li>
            )
        } 
        return (<>
            <li>{person}</li>
            
        </>)
        
    });

    return(
        <>
            {/* El componente va a mostrar la lista people */}
            {listItems}
            {/* El componente va a mostrar la persona en la posición indicada */}
            <h1>La persona ubicada en la posición 3 es: {people[3]}</h1>
        </>
    )
}