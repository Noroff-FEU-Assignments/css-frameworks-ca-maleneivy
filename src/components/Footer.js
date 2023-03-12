import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <>
            <footer class="fixed-bottom">
                <Row>
                    <Col>
                        Vimeo
                        Youtube
                    </Col>
                    <Col>hello@yay.no</Col>
                    <Col>Copyright 2023</Col>
                </Row>
            </footer>
        </>
    );


}

export default Footer;