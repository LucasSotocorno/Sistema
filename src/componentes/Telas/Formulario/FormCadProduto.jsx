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
    );
}