import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import PostalDetContextProvider from './context/postalDetContextProvider';
import PostOfficeTable from './components/PostOfficeTable';

function App() {
  return (
    <PostalDetContextProvider>
      <Header />
      <Outlet />
    </PostalDetContextProvider>
  )
}

export default App
