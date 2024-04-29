import { Navbar } from './components/Navigation/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Videobody } from './components/Videobody/Videobody'

function App() {
 
  return (
    <div className='font-roboto'>
      <Navbar/>
      
      <div className='flex min-h-screen'>
        <Sidebar/>
        <Videobody/>
        
      </div>
    </div>
  )
}

export default App
