import { useActionState } from 'react';
import "./CommentsForm.css";
import { data } from 'react-router-dom';

///Ici un petit géranium qui permet de collecter les informations nécessaire à poster un nouveau commentaire. Devra reçevoir le CallBack de renvoi

const INITIAL_COMMENT_STATE = {
    data: { author: '', message: '' },
    error: null,
}

export default function CommentsForm({ AddComment }) {


    const PostCommentAction = async (state, formData) => {

        //récupération des données du formulaire
        const data = Object.fromEntries(formData.entries());

        //Utilisation du CallBack
        AddComment(data);

        return { ...INITIAL_COMMENT_STATE };
    };

    const [state, handleSubmit] = useActionState(PostCommentAction, INITIAL_COMMENT_STATE);

    return (
        <form className='comment-form' action={handleSubmit}>
            <h3>Poster un nouveau commentaire</h3>
            <div>
                <label htmlFor="author">Votre nom : </label>
                <input type="text" id='author' name='author' placeholder='ex: Della Duck' maxLength={500} required />
            </div>
            <div>
                <label id="lbl-msg" htmlFor="message">Votre message : </label>
                <textarea type="text" id='message' name='message' rows="5" required></textarea>
            </div>
            <button type='submit'>Poster</button>
        </form>
    )
}
