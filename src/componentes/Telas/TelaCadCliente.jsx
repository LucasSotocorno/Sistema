import { Alert } from "react-bootstrap";
import FormCadClientes from "./Formulario/FormCadCliente";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { clientes } from "../../dados/mockClientes";

export default function TelaCadastroCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeClientes, setListaDeClientes] = useState(clientes);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState({
        codigo:0,
        nome:"",
        cpf:"",
        telefone:"",
        email:""
    });

   
    return (
        <div>
            <Pagina>
<<<<<<< HEAD
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Cliente
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaClientes listaDeClientes={listaDeClientes}
                                        setListaDeClientes={setListaDeClientes} 
                                        setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                        setClienteSelecionado={setClienteSelecionado} /> :
                        <FormCadClientes listaDeClientes={listaDeClientes}
                                         setListaDeClientes={setListaDeClientes}
                                         setExibirTabela={setExibirTabela}
                                         clienteSelecionado={clienteSelecionado}
                                         setClienteSelecionado={setClienteSelecionado}
                                         modoEdicao={modoEdicao}
                                         setModoEdicao={setModoEdicao}

                                         />
                }
=======
                <FormCadCliente/>
>>>>>>> b7ec294b648b620dfc0cdc2f2088930cedbe2ded
            </Pagina>
        </div>
    );

}