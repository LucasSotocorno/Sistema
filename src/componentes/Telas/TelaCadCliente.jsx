import Pagina from "../layouts/Pagina"
import FormCadCliente from "./Formulario/FormCadCliente";
export default function TelaCadCliente(props){
    return(
        <div>
            <Pagina>
                <FormCadCliente/>
            </Pagina>
        </div>
    )
}