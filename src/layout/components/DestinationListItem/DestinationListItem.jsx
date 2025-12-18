import React from 'react'
import { Suspense, use } from "react";
import { GetAllDestinations } from "/src/Services/destination.service"
import { Link } from "react-router-dom";

///Ici un petit géranium qui décompose les élements de l'objet destination tel qu'obtenus avec le GetAll et permet de structurer l'affichage de ses compopsants. 
export default function DestinationListItem() {

    document.body.style.cssText += `background-image: url("/src/assets/images/bg-AllDest.jpg"); background-size: cover;`;

    const promise = GetAllDestinations();

    return (
        <div>
            <p>Quel sera votre choix ?</p>
            <Suspense fallback={"Vérification de catalogue, veuillez patienter..."}>
                <MapAllDest AllDestPromise={promise} />
            </Suspense>

        </div>
    )
}

function MapAllDest({ AllDestPromise }) {

    const DestList = use(AllDestPromise);


    return (
        <ul>
            {DestList.map(dest => (
                <li key={dest.id}>
                    <span>{dest.id}</span><span>{dest.name}</span><span>{dest.shortDescription}</span>
                    <Link to={`${dest.id}`}>Click here</Link>
                </li>
            ))}
        </ul>
    )
}
