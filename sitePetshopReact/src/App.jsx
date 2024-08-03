import { useState } from 'react'
import './App.css'
import Section from './components/Section/Section'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Menu from './components/Menu/Menu'
import Titulo from './components/Titulo/Titulo'
import Card from './components/Card/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Cabecalho/>
        <Menu/>
        <Section>
          <img src="./assets/dog.jfif" alt="cachorro" />
        </Section>
        <Section>
          <Titulo texto="Serviços"/>
        </Section>
        <Card
        descricao="um texto descritivo"
        imagem="#"
        titulo="Um logo bem grande"/>
      </div>
  )
}

export default App
