import './App.css'
import Footer from './components/footer/FooterComp';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import FooterComp from './components/footer/FooterComp';

function App() {
  return (
    <>
      <Header />
      <Outlet /> 
      <FooterComp /> 
    </>
  )
}

export default App
