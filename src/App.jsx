import { Navbar } from './components/Navigation/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
 
  return (
    <div className='font-roboto'>
      <Navbar/>
      <div className='flex min-h-screen bg-blue-400'>
        <Sidebar/>
        <h1 className="text-[100pt] underline m-3 font-roboto font-thin">
          Hello World!
        </h1>
      </div>
    </div>
  )
}

export default App
