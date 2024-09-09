import { InputGroup, Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function FormCadProduto(props) {
    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border-3 border-primary border"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold text-uppercase mb-2">ACME</h2>
                                <p className="mb-5">Cadastro de Produtos</p>
                                <Form>
                                    <Form.Group as={Col} className="mb-3" controlId="formFullName">
                                        <Form.Label className="text-center">Descrição</Form.Label>
                                        <Form.Control type="text" placeholder="Digite o seu nome" />
                                    </Form.Group>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="formFullName">
                                            <Form.Label className="text-center">Código</Form.Label>
                                            <Form.Control type="text" placeholder="Código do Produto" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
                                            <Form.Label>Estoque</Form.Label>
                                            <Form.Control type="number" placeholder="Quantidade em Estoque" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="formFullName">
                                            <Form.Label className="text-center">Preço de Custo</Form.Label>
                                            <Form.Control type="number" placeholder="Preço de Custo" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
                                            <Form.Label>Preço de Venda</Form.Label>
                                            <Form.Control type="number" placeholder="Preço de Venda" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="mb-3" controlId="formFullName">
                                            <Form.Label className="text-center">URL da Imagem</Form.Label>
                                            <Form.Control type="text" placeholder="URL da Imagem" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
                                            <Form.Label>Validade</Form.Label>
                                            <Form.Control type="date" placeholder="Validade" />
                                        </Form.Group>
                                    </Row>
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">
                                            Cadastrar
                                        </Button>
                                    </div>
                                </Form>
                                <div className="mt-3">
                                    <p className="mb-0 text-center">
                                        Já possui uma conta?{' '}
                                        <a href="{''}" className="text-primary fw-bold">
                                            Faça Login
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button>Confirmar</Button>
                </Col>
                <Col md={{offset:1}}>
                    <Button onClick={()=>{props.serExibirTabela(true);}}>Voltar</Button>
                </Col>
            </Row>
        </Container>
    );
}