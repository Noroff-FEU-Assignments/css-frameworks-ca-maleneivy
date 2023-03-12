import React from 'react'
import Navigation from '../components/Navigation';
import { Container, Row } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import ContactList from '../components/ContactList';

function Contact() {
    return (
        <>
            <Navigation />

            <div className="wrapper">
                <Container>
                    <Heading content="Submit your details" />

                    <Row>
                        <ContactForm />
                        <ContactList />
                    </Row>

                </Container>
            </div>
            <Footer />
        </>

    )
}

export default Contact;