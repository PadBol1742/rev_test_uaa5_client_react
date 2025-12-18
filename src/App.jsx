import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home.page'
import DestinationPage from './pages/Destination/Destination.page'
import AllDestinationPage from './pages/Destination/AllDestination.page'
import OneDestinationPage from './pages/Destination/OneDestination.page'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='destination' element={<DestinationPage />}>
          <Route index element={<AllDestinationPage />} />
          <Route path=':id' element={<OneDestinationPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
