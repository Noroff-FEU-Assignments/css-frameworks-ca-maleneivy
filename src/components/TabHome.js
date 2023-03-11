import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap';
import Heading from './Heading';
import Paragraph from './Paragraph';

function TabHome() {
    return (
        <Container>
            <Heading content="We Do Yay Things" />

            <Paragraph text="Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa." />

            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="First" color="primary">

                </Tab>
                <Tab eventKey="second" title="Second">

                </Tab>
                <Tab eventKey="third" title="Third">

                </Tab>
            </Tabs>
        </Container>
    )
}

export default TabHome;