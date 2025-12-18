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
            <h3>Quel sera votre choix ?</h3>
            <Suspense fallback={"Vérification de catalogue, veuillez patienter..."}>
                <MapAllDest AllDestPromise={promise} />
            </Suspense>

        </div>
    )
}

function MapAllDest({ AllDestPromise }) {

    const DestList = use(AllDestPromise);


    return (
        <ul className='dest-list'>
            {DestList.map(dest => (
                <li className='dest-item' key={dest.id}>
                    <span className='dest-id'>{dest.id}</span><span className='dest-name'>{dest.name}</span><span className='dest-sh-desc'>{dest.shortDescription}</span>
                    <Link className='clk-dest' to={`${dest.id}`}> ⇒ Click here ⇐ </Link>
                </li>
            ))}
        </ul>
    )
}
