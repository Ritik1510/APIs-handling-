import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import PostalDetContextProvider from './context/postalDetContextProvider';
import FooterComp from './components/FooterComp';

function App() {
  return (
    <PostalDetContextProvider>
      <Header />  
      <Outlet />
      <FooterComp />
    </PostalDetContextProvider>
  )
}

export default App
