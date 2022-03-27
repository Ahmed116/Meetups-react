import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllMettupsPage from './pages/AllMettupsPage'
import NewMeetups from './pages/NewMeetups'
import Favorites from './pages/Favorites'
import Layout from './components/layout/Layout'

function App() {
  return (
    
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMettupsPage />}></Route>

          <Route path='/new-meetup' element={<NewMeetups />}></Route>

          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
        </Layout>
      </BrowserRouter>
    
  )
}

export default App
