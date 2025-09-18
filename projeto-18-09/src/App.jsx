import header from './components/header'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import Servicos from './pages/Servicos'
import FaleConosco from './pages/FaleConosco'
import footer from './components/footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="App">
          <header/>
            <main className='container'>
              <Routes> 
                <route path='/' element={<Home/>}/>
                <route path='/SobreNos' element={<SobreNos/>}/>
                <route path='/Servicos' element={<Servicos/>}/>
                <route path='/FaleConosco' element={<FaleConosco/>}/>
              </Routes>
            </main> 
            <footer/>
        </div>
    </>
  )
}

export default App
