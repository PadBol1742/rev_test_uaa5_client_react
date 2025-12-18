import Header from '../../layout/components/Header/Header'
import { Link } from 'react-router-dom'
import './Home.css'

export default function HomePage() {

  document.body.style.cssText += `background-image: url("/src/assets/images/bg-HomePage.jpg"); background-size: cover;`;

  return (
    <>
      <Header page="home"/>
      <div className='main home'>
        <h2 id='gd-titre'>Voyage Voyage</h2>
        <p id='catch-phrase'>Osez Rêver !</p>
        <Link to='destination'><button id='btn-home'>Nos Destinations</button></Link>
      </div>
    </>
  )
}
