import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina"
import FormCadProduto from "./Formulario/FormCadProduto";
import{useState} from "react";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { produtos } from "../../dados/mockProdutos.js";

export default function TelaCadProduto(props){
    const [exibirTabela, setExibirTabela]= useState(true);
    const [listaDeProdutos, setListaDeProdutos] = useState(produtos);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado]  = useState(null);    
    return(
        <div>
            <Pagina>  
                <Alert className="mt-02 mb-02 success text-center"> 
                <h2>
                    Casdastro de Produto
                </h2>
                </Alert>
               {
                    exibirTabela ?
                    <TabelaProdutos listaDeprodutos={listaDeProdutos} 
                    setListaDeProdutos={setListaDeProdutos}
                    setExibirTabela={setExibirTabela}
                    setProdutoSelecionado={setProdutoSelecionado}
                    setModoEdicao={setModoEdicao}
                    />:
                    <FormCadProduto listaDeprodutos={produtos} 
                    setListaDeProdutos={setListaDeProdutos}
                    setExibirTabela={setExibirTabela}
                    produtoSelecionado={produtoSelecionado}
                    modoEdicao={modoEdicao}/>
               }
            </Pagina>
        </div>
    )
}