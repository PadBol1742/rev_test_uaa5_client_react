import React from 'react'
import NavBar from '../../layout/features/NavBar/NavBar'
import { Link } from 'react-router-dom'

export default function HomePage() {

  document.body.style.cssText += `background-image: url("/src/assets/images/bg-HomePage.jpg"); background-size: cover;`;

  return (
    <>
      <NavBar />
      <h1>Voyage Voyage</h1>
      <p>Osez Rêver !</p>
      <Link to='destination'>Nos Destinations</Link>
    </>
  )
}
