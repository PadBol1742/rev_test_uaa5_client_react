// import DestinationListItem from '../../layout/components/DestinationListItem/DestinationListItem'

import { Suspense, use } from "react";
import { GetAllDestinations } from "../../Services/destination.service"
import { Link } from "react-router-dom";


export default function AllDestinationPage() {

    const promise = GetAllDestinations();

    return (
        <div>
            <p>Quel sera votre choix ?</p>
            <Suspense fallback={"Vérification de catalogue, veuillez patienter..."}>
                <MapAllDest AllDestPromise={promise} />
            </Suspense>

            {/* <DestinationListItem /> */}
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