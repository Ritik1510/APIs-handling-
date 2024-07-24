import './App.css'
import Header from './components/Header'
import PostalDetContextProvider from './context/postalDetContextProvider'

function App() {
  return (
    <>
      <PostalDetContextProvider>
        <Header />
        <div className='grid place-content-center'></div>
      </PostalDetContextProvider>
    </>

  )
}

export default App
