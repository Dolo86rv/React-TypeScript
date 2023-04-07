import { ChangeEvent, useState } from "react"

//export function useForm<T>(initialSate: T){

export const useForm = <T extends Object>( initialSate: T) => {

    const [formulario, setFormulario] = useState( initialSate)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target

        setFormulario({
            ...formulario, 
            [ name ]: value
        })
    }
    return {
        formulario, 
        handleChange
    }
}
