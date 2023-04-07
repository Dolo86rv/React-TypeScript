import { useForm } from "../hooks/useForm"

interface FormData {
    postal: string
    ciudad: string
}

export const Formulario2 = () => {
    
    const { formulario, handleChange } = useForm<FormData>({
        postal:'41007',
        ciudad: 'Sevilla'
    })

    const { postal, ciudad } = formulario
    
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Codigo Postal:</label>
                <input type="text"
                className="form-control" 
                name="postal"
                value={ postal}
                onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input type="text"
                className="form-control" 
                name="ciudad"
                value={ciudad}
                onChange={handleChange}
                />
            </div>

            <pre>{ JSON.stringify(formulario)}</pre>

        </form>
    )
}