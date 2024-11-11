import { Alert } from "react-bootstrap";
import FormCadUsuarios from "./Formulario/FormCadUsuario";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaUsuarios from "./Tabelas/TabelaUsuarios";
import { usuarios } from "../../dados/mockUsuarios";

export default function TelaCadastroUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState(usuarios);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo:0,
        cpf:"",
        nome:"",
        telefone:"",
        email:"",
        senha:""
    });

   
    return (
        <div>
            <Pagina>
<<<<<<< HEAD
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Usuario
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaUsuarios listaDeUsuarios={listaDeUsuarios}
                                        setListaDeUsuarios={setListaDeUsuarios} 
                                        setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                        setUsuarioSelecionado={setUsuarioSelecionado} /> :
                        <FormCadUsuarios listaDeUsuarios={listaDeUsuarios}
                                         setListaDeUsuarios={setListaDeUsuarios}
                                         setExibirTabela={setExibirTabela}
                                         usuarioSelecionado={usuarioSelecionado}
                                         setUsuarioSelecionado={setUsuarioSelecionado}
                                         modoEdicao={modoEdicao}
                                         setModoEdicao={setModoEdicao}

                                         />
                }
=======
                <FormCadUsuario/>
>>>>>>> b7ec294b648b620dfc0cdc2f2088930cedbe2ded
            </Pagina>
        </div>
    );

}