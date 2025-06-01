import { useState } from "react";

export function useForm(etapa){

    const [etapaAtual, mudarEtapaAtual] = useState(0)

    function mudarEtapa(posicao, evento){

        if(evento){
            evento.preventDefault()
        }

        if(posicao < 0 || posicao >= etapa.length){
            return
        }

        mudarEtapaAtual(posicao)

    }

    return{
        etapaAtual, 
        componenteAtual: etapa[etapaAtual], 
        mudarEtapa,
        isUltimaEtapa: etapaAtual +1 === etapa.length ? true : false,
        isPrimeiraEtapa: etapaAtual === 0 ? true : false
    }
}