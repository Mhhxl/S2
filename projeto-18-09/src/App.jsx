import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import Servicos from './pages/Servicos'
import FaleConosco from './pages/FaleConosco'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
        <div className="app">
          <Header/>
            <main className='container'>
              <Routes> 
                <Route path='/' element={<Home/>}/>
                <Route path='/sobre-nos' element={<SobreNos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                <Route path='/fale-conosco' element={<FaleConosco/>}/>
              </Routes>
            </main> 
            <Footer/>
        </div>
    </>
  )
}

export default App
