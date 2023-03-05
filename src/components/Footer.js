import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        Vimeo
                        Youtube
                    </Col>
                    <Col>hello@yay.no</Col>
                    <Col>Copyright 2023</Col>
                </Row>
            </Container>
        </>
    );


}

export default Footer;