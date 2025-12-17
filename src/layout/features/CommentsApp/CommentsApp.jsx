import React from 'react'
import CommentsListItem from '../../components/CommentsListItem/CommentsListItem'
import CommentsForm from '../../components/CommentsForm/CommentsForm'

/// Ici un petit géranium qui gère le GetAll et le Post pour les commentaires et coordonne les composants de récolte de donné et l'affichage de la liste avec le mapping adoncque nécessaire
export default function CommentsApp() {
    return (
        <>
            <CommentsListItem />
            <CommentsForm />
        </>
    )
}
