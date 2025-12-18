import { Suspense, use } from 'react'
import CommentsListItem from '/src/layout/components/CommentsListItem/CommentsListItem'
import CommentsForm from '/src/layout/components/CommentsForm/CommentsForm'
import { PostDestinationComment } from '/src/Services/comments.service';
import { useParams } from 'react-router';


/// Ici un petit géranium qui gère le GetAll et le Post pour les commentaires et coordonne les composants de récolte de donné et l'affichage de la liste avec le mapping adoncque nécessaire
export default function CommentsApp() {

    const { id } = useParams();

    const PushComment = (commentObj) => {
        console.log(commentObj);

        const promise = PostDestinationComment(id, commentObj);
        <Suspense fallback={"Envoi vers la Db..."}>
            <PrintResult postDestPromise={promise} />
        </Suspense>

    }

    return (
        <>
            <CommentsListItem />
            <CommentsForm AddComment={PushComment} />
        </>
    )
}

function PrintResult({ postDestPromise }) {

    const result = use(postDestPromise)

    return (
        <div>
            <h2>Une réponse ici ?</h2>
            <span>{result.id}</span>
            <span>{result.destinationId}</span>
            <span>{result.author}</span>
            <span>{result.message}</span>
        </div>


    )
}