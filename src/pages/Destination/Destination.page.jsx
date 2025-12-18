import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../../layout/components/Header/Header";
import './Destination.css';

export default function DestinationPage() {
    return (
        <>
            <Header />
            <div className='main'>
                <h2>Nos Destinations</h2>
                <Outlet />
            </div>
        </>
    )
}
