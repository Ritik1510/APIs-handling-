import './App.css'
import Navbar from './components/Navbar'
import PostOffDetTab from './components/PostOffDetTab'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import SearchByPC from './components/SearchByPC';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/components/SearchByPC' element={<SearchByPC/>}/>
        </Routes>
        <PostOffDetTab />
      </Router>
    </>
  )
}

export default App
