import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
export default function FormCadProduto(props) {

    const [produto, setProduto] = useState({
        codigo:0,
        descricao:"",
        precoCusto:0,
        precoVenda:0,
        qtdEstoque:0,
        urlImagem:"",
        dataValidade:""
    })
    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if(form.checkValidity()){
            //cadastrar o produto
            props.setListaDeProdutos([...props.listaDeProdutos,produto]);
            //exibir a tabela com produto incluido
            props.setExibirTabela(true);
        }
        else{
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento){
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setProduto({...produto, [elemento]:valor});
    }

    return (
        <Container noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-5">Cadastro de Produtos</p>
                                <Form >
                                    <Form.Group as={Col} className="mb-3" >
                                        <Form.Label className="text-center">Descrição</Form.Label>
                                        <Form.Control 
                                            required 
                                            id="descricao" 
                                            name="descricao"
                                            type="text" 
                                            placeholder="Digite o seu nome"
                                            value={produto.descricao}
                                            onChange={manipularMudanca} />
                                    </Form.Group>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" >
                                            <Form.Label className="text-center">Código</Form.Label>
                                            <Form.Control 
                                                required 
                                                id="codigo"
                                                name="codigo" 
                                                type="text" 
                                                placeholder="Código do Produto"
                                                value={produto.codigo}
                                                onChange={manipularMudanca}   />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" >
                                            <Form.Label>Estoque</Form.Label>
                                            <Form.Control 
                                                required 
                                                id="qtdEstoque" 
                                                name="qtdEstoque"
                                                type="number" 
                                                placeholder="Quantidade em Estoque" 
                                                value={produto.qtdEstoque}
                                                onChange={manipularMudanca}/>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" >
                                            <Form.Label className="text-center">Preço de Custo</Form.Label>
                                            <Form.Control 
                                                required 
                                                id="precoCusto" 
                                                name="precoCusto"
                                                type="number" 
                                                placeholder="Preço de Custo" 
                                                value={produto.precoCusto}
                                                onChange={manipularMudanca}/>
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" >
                                            <Form.Label>Preço de Venda</Form.Label>
                                            <Form.Control 
                                                required 
                                                id="precoVenda" 
                                                name="precoVenda"
                                                type="number" 
                                                placeholder="Preço de Venda"
                                                value={produto.precoVenda}
                                                onChange={manipularMudanca} />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" >
                                            <Form.Label className="text-center">URL da Imagem</Form.Label>
                                            <Form.Control 
                                                required 
                                                id="urlImagem" 
                                                name="urlImagem"
                                                type="text" 
                                                placeholder="URL da Imagem"
                                                value={produto.urlImagem}
                                                onChange={manipularMudanca} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" >
                                            <Form.Label>Validade</Form.Label>
                                            <Form.Control 
                                                required 
                                                id="dataValidade" 
                                                name="dataValidade"
                                                type="date" 
                                                placeholder="Validade" 
                                                value={produto.dataValidade}
                                                onChange={manipularMudanca}/>
                                        </Form.Group>
                                    </Row>
                                    {//alterações feitas abaixo
                                    }
                                    <Row className='mt-2 mb-2'>
                                        <Col md={1}>
                                            <Button>Confirmar</Button>
                                        </Col>
                                        <Col md={{offset:1}}>
                                            <Button onClick={()=>{
                                                props.setExibirTabela(true);
                                            }}>Voltar</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            
        </Container>
    );
}