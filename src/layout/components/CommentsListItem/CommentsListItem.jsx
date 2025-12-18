import React from 'react'
import { Suspense, use } from "react";
import { GetDestinationComments } from "/src/Services/comments.service"
import { useParams } from "react-router";

///Ici un petit géranium qui décompose les élements de l'objet commentaire et permet de structurer l'affichage du commentaire et de ses meta données 



///Ici un petit géranium qui décompose les élements de l'objet destination tel qu'obtenus avec le GetAll et permet de structurer l'affichage de ses compopsants. 
export default function CommentsListItem() {

    const { id } = useParams();
    const promise = GetDestinationComments(id);

    return (
        <div>
            <Suspense fallback={"Récupération des commentaires, veuillez patienter..."}>
                <MapAllDest DestCommentsPromise={promise} />
            </Suspense>

        </div>
    )
}

function MapAllDest({ DestCommentsPromise }) {

    const commentsList = use(DestCommentsPromise);


    return (
        <ul>
            {commentsList.map(comm => (
                <li key={comm.id}>
                    <span>{comm.author}</span><span>{comm.message}</span>

                </li>
            ))}
        </ul>
    )
}
