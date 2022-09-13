import { useState } from "react"

export const useCounter = ( inicialValue = 10 ) => {

    const [counter, setCounter] = useState( inicialValue )

    const reset = () => {
        setCounter( inicialValue )
    }

    const counterHandler = ( incrementar ) => {

        incrementar ? setCounter( (current) => current + 1 ) : setCounter( (current) => current - 1 )
    }

    return{
        counter,
        reset, 
        counterHandler
    }
}