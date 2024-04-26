import { Navbar } from './components/Navigation/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
 
  return (
    <div>
    <Navbar/>
    <div className='flex min-h-screen bg-blue-600'>
    <Sidebar/>
    <h1 className="text-3xl font-bold underline m-3">
      Hello World!
    </h1>
    </div>
    </div>
  )
}

export default App
