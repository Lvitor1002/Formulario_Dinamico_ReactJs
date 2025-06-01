
import './App.css'
import Identificacao from './components/Identificacao/index'
import Avaliacao from './components/Avaliacao/index'
import Envio from './components/Envio/index'
import { useForm } from './hooks/useForm'
import Etapas from './components/Etapas/index'
import { useState } from 'react'


function App() {

  const [dado, mudarDado] = useState({
    nome: "",
    email:"",
    avaliado:"",
    comentario: ""
  })

  const atualizarCampo = (key, value) =>{
    
    mudarDado((prev) => {
      return { ...prev, [key]: value }
    })

  }

  const componentsFormulario = [
    <Identificacao dado={dado} atualizarCampo={atualizarCampo}/>,
    <Avaliacao dado={dado} atualizarCampo={atualizarCampo}/>,
    <Envio dado={dado}/>
  ]

  const {etapaAtual, componenteAtual, mudarEtapa, isUltimaEtapa, isPrimeiraEtapa} = useForm(componentsFormulario)

  return (
      <div className='controleApp'>
          
          <div className='topo'>
            <h2>Deixe sua avaliação</h2>
            <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
          </div>

          <div className='controleFormulario'>


            <form onSubmit={(evento) => mudarEtapa(etapaAtual + 1, evento)}>
              
              <Etapas etapaAtual={etapaAtual}/>
              

              <div>
                {componenteAtual}
              </div>
              
              <div className='controleOpcao'>
                
                
                {!isPrimeiraEtapa && (
                  
                  <button type='button' onClick={()=> mudarEtapa(etapaAtual-1)}>
                    <i className='bi bi-arrow-left-short'></i>
                    Voltar
                  </button>

                )}
                
                {!isUltimaEtapa ? (
                    
                  <button type='submit'>
                      <i className='bi bi-arrow-right-short'></i>
                      Avançar
                  </button>

                  ) : (

                  <button type='button' >
                    Enviar
                    <i className='bi bi-send-check seta'></i>
                  </button>

                )}

              </div>

            </form>
          </div>

      </div>
  )
}

export default App


