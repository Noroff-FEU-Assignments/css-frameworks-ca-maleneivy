import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function TabHome(props) {
    return (
        <Container>
            <Heading content="We do Yay Things" />

            <Paragraph text="Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa." />

            <Accordion defaultActiveKey="0" className="d-md-none">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>First</Accordion.Header>
                    <Accordion.Body>
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        <Col>
                            <Image src="images/tab/tab-1.jpg" fluid />
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    SHARE
                                </Col>
                                <Col>
                                    <Image src="images/social/2021 Twitter logo - black.png" height="30px" />
                                </Col>
                                <Col>
                                    <Image src="images/social/f_logo_RGB-Black_58.png" height="30px" />
                                </Col>
                            </Row>
                        </Col>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Second</Accordion.Header>
                    <Accordion.Body>
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        <Col>
                            <Image src="images/tab/tab-2.jpg" fluid />
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    SHARE
                                </Col>
                                <Col>
                                    <Image src="images/social/2021 Twitter logo - black.png" height="30px" />
                                </Col>
                                <Col>
                                    <Image src="images/social/f_logo_RGB-Black_58.png" height="30px" />
                                </Col>
                            </Row>
                        </Col>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Third</Accordion.Header>
                    <Accordion.Body>
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        <Col>
                            <Image src="images/tab/tab-3.jpg" fluid />
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    SHARE
                                </Col>
                                <Col>
                                    <Image src="images/social/2021 Twitter logo - black.png" height="30px" />
                                </Col>
                                <Col>
                                    <Image src="images/social/f_logo_RGB-Black_58.png" height="30px" />
                                </Col>
                            </Row>
                        </Col>                  </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="d-none d-md-block">
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="First" color="primary">
                        <Row>
                            <Col>
                                <Image src="images/tab/tab-1.jpg" fluid />
                            </Col>

                            <Col>
                                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                <Row>
                                    <Col>
                                        SHARE
                                    </Col>
                                    <Col>
                                        <Image src="images/social/2021 Twitter logo - black.png" height="30px" />
                                    </Col>
                                    <Col>
                                        <Image src="images/social/f_logo_RGB-Black_58.png" height="30px" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Tab>
                    <Tab eventKey="second" title="Second">
                        <Row>
                            <Col>
                                <Image src="images/tab/tab-2.jpg" fluid />
                            </Col>
                            <Col>
                                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                <Row>
                                    <Col>
                                        SHARE
                                    </Col>
                                    <Col>
                                        <Image src="images/social/2021 Twitter logo - black.png" height="30px" />
                                    </Col>
                                    <Col>
                                        <Image src="images/social/f_logo_RGB-Black_58.png" height="30px" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="third" title="Third">
                        <Row>
                            <Col>
                                <Image src="images/tab/tab-3.jpg" fluid />
                            </Col>
                            <Col>
                                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                <Row>
                                    <Col>
                                        SHARE
                                    </Col>
                                    <Col>
                                        <Image src="images/social/2021 Twitter logo - black.png" height="30px" />
                                    </Col>
                                    <Col>
                                        <Image src="images/social/f_logo_RGB-Black_58.png" height="30px" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Tab>
                </Tabs>
            </div>
        </Container >
    )
}

export default TabHome;