import Form from 'react-bootstrap/Form';

function LoginClient() {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control type="email" placeholder="exemple@gmail.com " />
                <Form.Text className="text-muted">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de Passe</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="J'accepte les termes d'utilisation" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    );
}

export default LoginClient;