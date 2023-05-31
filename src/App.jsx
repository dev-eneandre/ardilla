import './App.css'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'

export const u = 12
console.log('exporting u really screws up HMR :(', u)


function App() {
 
  return (
     <div className="h-screen "> 
     <Nav />
      <HomePage />
    </div>
  )
}

export default App
