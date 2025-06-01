import './Etapas.css'

const Etapas = ({etapaAtual})=>{
    return(
        <div className="controleEtapas">

            <div className={`etapas ${etapaAtual == 0 ? "ativoEtapa" : ""}`}>
                <i class="bi bi-file-earmark-person"></i>
                <p>Identificação</p>
            </div>
            <div className={`linha ${etapaAtual >= 1 ? "ativoLinha" : ""}`}>
                <i class="bi bi-dash-lg"></i>
            </div>


            <div className={`etapas ${etapaAtual == 1 ? "ativoEtapa" : ""}`}>
                <i class="bi bi-star"></i>
                <p>Avaliação</p>
            </div>
            <div className={`linha ${etapaAtual >= 2 ? "ativoLinha" : ""}`}>
                <i class="bi bi-dash-lg"></i>
            </div>

            
            <div className={`etapas ${etapaAtual == 2 ? "ativoEtapa" : ""}`}>
                <i class="bi bi-send"></i>
                <p>Envio</p>
            </div>
        </div>
    )
}
export default Etapas