import { TechProvider } from "./providers/TechContext"
import { RoutesMain } from "./routes/RoutesMain"
import "./styles/index.scss"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <TechProvider>
        <RoutesMain />
        <ToastContainer autoClose={2000} theme="dark" />
      </TechProvider>
    </div>
  )
}

export default App