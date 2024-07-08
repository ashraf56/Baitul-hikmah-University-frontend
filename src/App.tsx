
import './App.css'
import Mainlayout from './components/layout/Mainlayout'
import ProtecttedRoute from './components/layout/ProtecttedRoute'

function App() {

  return (
    <ProtecttedRoute>
  <Mainlayout></Mainlayout>
    </ProtecttedRoute>
  )
}

export default App
