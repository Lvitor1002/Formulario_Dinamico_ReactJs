import './Identificacao.css'

export default function Identificacao({dado,atualizarCampo}){
    return(
        <div className="controleInputs">
            
            
            <input 
                type="text"
                name='nome'
                id='idNome'
                placeholder='Digite o seu nome'
                required
                maxLength='50'
                value={dado.nome || ""}
                onChange={(e) => atualizarCampo("nome", e.target.value)}
            />
            
            <input 
                type="email"
                name='email'
                id='idEmail'
                placeholder='Digite o seu e-mail'
                required
                maxLength='50'
                value={dado.email || ""}
                onChange={(e) => atualizarCampo("email", e.target.value)}
            />

        </div>
    )
}