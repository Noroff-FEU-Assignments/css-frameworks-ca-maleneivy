import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <>
            <footer class="fixed-bottom">
                <Container className="d-none d-md-block">
                    <Row>
                        <Col>
                            <Image src="images/social/vimeo_icon_dark.png" height="30px" />
                            <Image src="images/social/yt_icon_mono_light.png" height="30px" />
                        </Col>
                        <Col>hello@yay.no</Col>
                        <Col>Copyright 2023</Col>
                    </Row>
                </Container>

                <Container className="d-md-none">
                    <Row>
                        <Col>
                            <Image src="images/social/vimeo_icon_dark.png" height="30px" />
                            <Image src="images/social/yt_icon_mono_light.png" height="30px" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>hello@yay.no</Col>
                        <Col>Copyright 2023</Col>
                    </Row>
                </Container>
            </footer>
        </>
    );


}

export default Footer;