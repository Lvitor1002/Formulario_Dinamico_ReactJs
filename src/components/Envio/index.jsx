import './Envio.css'



const dadosEmoji = {
    Insatisfeito: <i class="bi bi-emoji-frown"></i>,
    menosTriste: <i class="bi bi-emoji-neutral"></i>,
    satisfeito: <i class="bi bi-emoji-smile-upside-down"></i>,
    muitoSatisfeito: <i class="bi bi-emoji-sunglasses"></i>,
}

export default function Envio({dado}){
    return(
        <div className='controleEnvio'>
            
            <h2>Falta pouco..</h2>
            
            <p>A sua opinião é muito importante. Em breve você receberá um cupom de 10% de desconto para a sua próxima compra.</p>
            
            <p>Para concluir sua avaliação clique no botão de *Enviar abaixo.</p>
            
            <h3>Resumo da sua avaliação: {dado.nome}</h3>
            
            
            <div className="resumo">
                <p>Satisfação com o produto: " {dadosEmoji[dado.avaliado]} "</p>
                
                <div className="comentario-texto">
                    <p>Comentário:</p>
                    {dado.comentario}
                </div>
            </div>


        </div>

    )
}