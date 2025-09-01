
import './App.css'
import InfoAluno from './components/InfoAluno'
import InfoCurso from './components/InfoCurso'
import Mensagem from './components/Mensagem/Index'

function App() {

  return (
    // fragment
    <>
      <h1>Aula react JS </h1>
      <Mensagem />
      <hr />
      <InfoAluno />
      <InfoCurso />
    </>
  )
}

export default App
