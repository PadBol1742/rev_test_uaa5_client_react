import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../layout/components/Header/Header";

export default function DestinationPage() {
    return (
        <>
            <Header />
            <h1>DestinationPage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maxime aut ipsam molestias, eligendi vero maiores in delectus doloremque atque vitae tempore dolore quasi eum consectetur libero consequuntur deleniti adipisci?</p>
            <Outlet />
        </>
    )
}
