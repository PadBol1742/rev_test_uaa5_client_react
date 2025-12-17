// import OneDestIntel from '../../layout/components/OneDestIntel/OneDestIntel'
// import CommentsApp from '../../layout/features/CommentsApp/CommentsApp'

// export default function OneDestinationPage() {
//     return (
//         <>


//             <h1>OneDestinationPage</h1>
//             <OneDestIntel />
//             <CommentsApp />
//         </>
//     )
// }

import { Suspense, use } from "react";
import { GetOneDestination } from "../../Services/destination.service"
import { useParams } from "react-router";


export default function OneDestinationPage() {

    const { id } = useParams();
    const promise = GetOneDestination(id);

    return (
        <div>
            <p>Un choix de rêve ! {id}</p>
            <Suspense fallback={"Vérification de catalogue, veuillez patienter..."}>
                <MapOneDest OneDestPromise={promise} />
            </Suspense>

        </div>
    )
}

function MapOneDest({ OneDestPromise }) {

    const dest = use(OneDestPromise);
    document.body.style.cssText += `background-image: url(${dest.config.baseURL + dest.data.imageUrl}); background-size: cover;`;

    return (


        <div>
            <span>{dest.data.id}</span>
            <span>{dest.data.name}</span>
            <span>{dest.data.shortDescription}</span>
            <span>{dest.data.fullDescription}</span>
            <span>{dest.data.country}</span>
            {/* <span>{dest.config.baseURL + dest.data.imageUrl}</span> */}
            {/* <img src={dest.config.baseURL + dest.data.imageUrl} alt="Une photo de la destination" /> */}
        </div>


    )
}