import './Avaliacao.css'
export default function Avaliacao({dado,atualizarCampo}  ){
    return(
        <>
            <div className="controle">

                <div className="controleVizualizarForm">

                    <div className="controleEmogis">

                        <label htmlFor="idTriste">Insatisfeito <i class="bi bi-emoji-frown"></i></label>
                        <input 
                            type="radio"
                            id="idTriste" 
                            name="radio"
                            className="radioEmogi"
                            value="Insatisfeito"
                            required
                            checked={dado.avaliado === "Insatisfeito"}
                            onChange={(e) => atualizarCampo("avaliado", e.target.value)}
                        />

                    </div>
                    <div className="controleEmogis">

                        <label htmlFor="idMenosTriste">Poderia ser melhor <i class="bi bi-emoji-neutral"></i></label>
                        <input 
                            type="radio"
                            id="idMenosTriste" 
                            name="radio"
                            className="radioEmogi"
                            value="menosTriste"
                            required
                            checked={dado.avaliado === "menosTriste"}
                            onChange={(e) => atualizarCampo("avaliado", e.target.value)}
                        />

                    </div>
                    <div className="controleEmogis">

                        <label htmlFor="idSatisfeito">Satisfeito <i class="bi bi-emoji-smile-upside-down"></i></label>
                        <input 
                            type="radio"
                            id="idSatisfeito" 
                            name="radio"
                            className="radioEmogi"
                            value="satisfeito"
                            required
                            checked={dado.avaliado === "satisfeito"}
                            onChange={(e) => atualizarCampo("avaliado", e.target.value)}
                        />

                    </div>
                    
                    <div className="controleEmogis">

                        <label htmlFor="idMuitoSatisfeito">Muito Satisfeito<i class="bi bi-emoji-sunglasses"></i></label>
                        <input 
                            type="radio"
                            id="idMuitoSatisfeito" 
                            name="radio"
                            className="radioEmogi"
                            value="muitoSatisfeito"
                            required
                            checked={dado.avaliado === "muitoSatisfeito"}
                            onChange={(e) => atualizarCampo("avaliado", e.target.value)}
                        />

                    </div>

                </div>
                <div className="controleComentario">

                    <label htmlFor="idComentario">Comentário: </label>

                    <textarea 
                        name="comentario" 
                        id="idComentario" 
                        placeholder="Conte-nos a sua experiência.." 
                        maxLength="500"
                        required
                        value={dado.comentario}  
                        onChange={(e) => atualizarCampo("comentario", e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}