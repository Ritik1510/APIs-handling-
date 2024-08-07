import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import PostOffDetTab from './components/PostOffDetTab';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <div className=''>
        <PostOffDetTab />
      </div>
    </>
  )
}

export default App
