import { Container } from "react-bootstrap/lib/Tab";
import {Form,Button, useContext, useRef} from "react";
import {CotextoUsuario} from "../../App"; 

export default function TelaLogin(){
    const nomeUsuario = useRef();
    const senha = useRef();
    const {usuario,setUsuario} = useContext(CotextoUsuario);

    function manipularSumissao(evento){
        const usuarioDigitado = nomeUsuario.current.value;
        const senhaDigitada = senha.current.value;
        if (usuarioDigitado === 'admin' &&
            senhaDigitada === 'adim')
            {
                setUsuario({
                    "usuario":usuarioDigitado,
                    "logado":true
                })
            }
        evento.preventDefault();
        evento.stopPropagation();
    }
    return(
    <Container className="w-25 boder p-2" >
        <Form onSubmit={manipularSumissao}>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control 
                        type="text" 
                        id="usuario"
                        name="usuario"
                        placeholder="Enter email"
                        ref={nomeUsuario} />
                    <Form.Text className="text-muted">
                Nunca compartilhe suas credenciais de acesso.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        id="senha"
                        name="senha"
                        ref={senha}/>
                </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Container>
        )    
    }
    