<<<<<<< HEAD
import { Button, Col, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { consultarCategoria } from "../../../servicos/servicoCategoria.js"
import { gravarProduto, alterarProduto } from "../../../servicos/servicoProduto.js";

export default function FormCadProdutos(props) {
    const [produto, setProduto] = useState(props.produtoSelecionado);
    const [formValidado, setFormValidado] = useState(false);
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        consultarCategoria().then((resultPromise) => {
            if (Array.isArray(resultPromise)) {
                setCategorias(resultPromise);
                console.log("Categorias Carregadas com Sucesso!");
            }
            else
                console.log("Não foi possível carregar as categorias!");
        }).catch((erro) => {
            console.log("Não foi possível carregar as categorias!");
        });
    }, []); // Para que o useEffect tenha o efeito de um didMount o segundo parâmetro deve ser um vetor VAZIO!

    function selecionarCategoria(evento) {
        setProduto({ ...produto, categoria: { codigo: evento.currentTarget.value } });
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                gravarProduto(produto).then((resultPromise) => {//retorna uma promessa com resultado
                    if (resultPromise.status) {//se for true gravou
                        props.setExibirTabela(true);
                        console.log("Produto Cadastrado!");
                    }
                    else
                        console.log(resultPromise.mensagem);
                });
                //cadastrar o produto
                //props.setListaDeProdutos([...props.listaDeProdutos, produto]);
                //exibir tabela com o produto incluído
            }
            else {
                //editar o produto
                /*altera a ordem dos registros
                props.setListaDeProdutos([...props.listaDeProdutos.filter(
                    (item) => {
                        return item.codigo !== produto.codigo;
                    }
                ), produto]);*/

                //não altera a ordem dos registros
                alterarProduto(produto).then((resultPromise) => {
                    if (resultPromise.status) {
                        props.setModoEdicao(false);
                        console.log("Produto Alterado!");
                    }
                    else
                        console.log(resultPromise.mensagem);
                })
                /*props.setListaDeProdutos(props.listaDeProdutos.map((item) => {
                    if (item.codigo !== produto.codigo)
                        return item
                    else
                        return produto
                }));*/
            }
            //voltar para o modo de inclusão
            props.setExibirTabela(true);
            props.setProdutoSelecionado({
                codigo: 0,
                descricao: "",
                precoCusto: 0,
                precoVenda: 0,
                qtdEstoque: 0,
                urlImagem: "",
                dataValidade: "",
                categoria: {}
            });
            setFormValidado(false);
        }
        else {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();

    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setProduto({ ...produto, [elemento]: valor });
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="codigo"
                        name="codigo"
                        value={produto.codigo}
                        disabled={props.modoEdicao}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o código do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="descricao"
                        name="descricao"
                        value={produto.descricao}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a descrição do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Preço de Custo:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="precoCusto">R$</InputGroup.Text>
                        <Form.Control
                            type="text"
                            id="precoCusto"
                            name="precoCusto"
                            aria-describedby="precoCusto"
                            value={produto.precoCusto}
                            onChange={manipularMudanca}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o preço de custo!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Preço de Venda:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="precoVenda">R$</InputGroup.Text>
                        <Form.Control
                            type="text"
                            id="precoVenda"
                            name="precoVenda"
                            aria-describedby="precoVenda"
                            value={produto.precoVenda}
                            onChange={manipularMudanca}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o preço de venda!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Qtd em estoque:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="qtdEstoque">+</InputGroup.Text>
                        <Form.Control
                            type="text"
                            id="qtdEstoque"
                            name="qtdEstoque"
                            aria-describedby="qtdEstoque"
                            value={produto.qtdEstoque}
                            onChange={manipularMudanca}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a quantidade em estoque!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Url da imagem:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="urlImagem"
                        name="urlImagem"
                        value={produto.urlImagem}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a url da imagem do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Válido até:</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        id="dataValidade"
                        name="dataValidade"
                        value={produto.dataValidade}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a data de validade do produto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md={7} className="mb-3">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select id="categoria" name="categoria" onChange={selecionarCategoria}>
                        <option value="" selected disabled>Selecione uma categoria</option>
                        {
                            // Criar em tempo de execução as categorias existentes no banco de dados
                            categorias.map((categoria) => {
                                return <option value={categoria.codigo}>
                                    {categoria.descricao}
                                </option>;
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md={1} className="mt-4">
                    <Form.Label>     </Form.Label>
                    {
                            <Spinner className="mt-2" animation="border" role="status" variant="primary">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                    }
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button type="submit">
                        {
                            props.modoEdicao ?
                                "Alterar" :
                                "Confirmar"
                        }
                    </Button>
                </Col>
                <Col md={{ offset: 1 }}>
                    <Button onClick={() => {
                        props.setExibirTabela(true);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>

=======
import { InputGroup, Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useState } from "react";

export default function FormCadProduto(props) {
    const produtoVazio = {
        codigo: 0,
        descricao: "",
        precoCusto: "",
        precoVenda: "",
        qtdEstoque: "",
        urlImagem: "",
        dataValidade: ""
    };

    const [formValidado, setFormValidado] = useState(false);
    const estadoProduto = props.produtoSelecionado;
    const [produto, setProduto] = useState(estadoProduto);


    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                // Cadastrar produto
                props.setListaDeProdutos([...props.listaDeProdutos, produto]); // Array vazio está recebendo o conteúdo da lista espalhada mais o produto
                // Exibir tabela com o produto incluído
                //props.setExibirTabela(true);
            } else {
                props.setListaDeProdutos([...props.listaDeProdutos.map((item) => {
                    return item.codigo === produto.codigo ? produto : item;
                })]);
                // O algoritmo abaixo excluia os elementos da lista e recriava uma nova lista de maneira não ordenada
                //props.setListaDeProdutos([...props.listaDeProdutos.filter((item) => item.codigo !== produto.codigo), produto]);
                props.setModoEdicao(false);
                props.setProdutoSelecionado(produtoVazio);
            }
            props.setExibirTabela(true)
            setProduto(produtoVazio);
            setFormValidado(false);
        } else {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setProduto({ ...produto, [elemento]: valor });
        console.log(`componente: ${elemento} : ${valor}`);
    }

    return (
        <Container className="mt-02 mb-02">
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-5">
                                    {
                                        props.modoEdicao ?
                                            "Alteração de Produto" :
                                            "Cadastro de Produtos"
                                    }
                                </p>
                                <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                                    <Form.Group as={Col} className="mb-3">
                                        <Form.Label className="text-center">Descrição</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="descricao"
                                            name="descricao"
                                            placeholder="Descrição do Produto"
                                            value={produto.descricao}
                                            onChange={manipularMudanca}
                                            required
                                        />
                                    </Form.Group>
                                    <Row className="mb-3">
                                        {
                                            props.modoEdicao ?
                                                <fieldset disabled>
                                                    <Form.Group as={Col} className="mb-3">
                                                        <Form.Label className="text-center">Código</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            id="codigo"
                                                            name="codigo"
                                                            placeholder="Código do Produto"
                                                            value={produto.codigo}
                                                            onChange={manipularMudanca}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </fieldset> :

                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-center">Código</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="codigo"
                                                        name="codigo"
                                                        placeholder="Código do Produto"
                                                        value={produto.codigo}
                                                        onChange={manipularMudanca}
                                                        required
                                                    />
                                                </Form.Group>
                                        }
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label>Estoque</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="qtdEstoque">+</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    id="qtdEstoque"
                                                    name="qtdEstoque"
                                                    aria-describedby="qtdEstoque"
                                                    placeholder="Quantidade em Estoque"
                                                    value={produto.qtdEstoque}
                                                    onChange={manipularMudanca}
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">Preço de Custo</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="precoCusto">R$</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    id="precoCusto"
                                                    name="precoCusto"
                                                    aria-describedby="precoCusto"
                                                    placeholder="Preço de Custo"
                                                    value={produto.precoCusto}
                                                    onChange={manipularMudanca}
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label>Preço de Venda</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="precoVenda">+</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    id="precoVenda"
                                                    name="precoVenda"
                                                    aria-describedby="precoVenda"
                                                    placeholder="Preço de Venda"
                                                    value={produto.precoVenda}
                                                    onChange={manipularMudanca}
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label className="text-center">URL da Imagem</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="urlImagem"
                                                name="urlImagem"
                                                placeholder="URL da Imagem"
                                                value={produto.urlImagem}
                                                onChange={manipularMudanca}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label>Validade</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="dataValidade"
                                                name="dataValidade"
                                                placeholder="Data de Validade"
                                                value={produto.dataValidade}
                                                onChange={manipularMudanca}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col md={1}>
                                            <div className="mb-2 mt-2">
                                                <Button type="submit">
                                                    {
                                                        props.modoEdicao ?
                                                            "Alterar" :
                                                            "Cadastrar"
                                                    }
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col md={{ offset: 1 }}>
                                            <div className="mb-2 mt-2">
                                                <Button onClick={() => {
                                                    props.setExibirTabela(true);
                                                    props.setModoEdicao(false);
                                                    props.setProdutoSelecionado(produtoVazio);
                                                }}>
                                                    Voltar
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
>>>>>>> b7ec294b648b620dfc0cdc2f2088930cedbe2ded
    );
}