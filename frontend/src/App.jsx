import { BrowserRouter } from 'react-router-dom'
import Counts from './components/molecules/Counts'
import NavBar from './components/organism/NavBar'
import RequestPage from './components/pages/RequestsPage'

function App() {

  return (
   <BrowserRouter>
      <NavBar/>
      <RequestPage />
    </BrowserRouter>
  )
}

export default App
