import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../layout/components/Header/Header";

export default function DestinationPage() {
    return (
        <>
            <Header />
            <h1>Nos Destinations</h1>

            <Outlet />
        </>
    )
}
