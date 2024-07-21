import './App.css'
import Navbar from './components/Navbar'
import PostOffDetTab from './components/PostOffDetTab'

function App() {
  return (
    <>
      <header className='h-20 w-screen bg-[#0098D3] grid px-4'>
        <div>
          <p className='text-[#fff] inline-block no-underline text-lg'>Find post offices of any area by just typing code of city!</p>
        </div>
        <Navbar />
      </header>



      <div className='grid place-content-center'>
        <PostOffDetTab />
      </div>
    </>

  )
}

export default App
