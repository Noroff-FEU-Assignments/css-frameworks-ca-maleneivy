import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import CarouselHome from '../components/CarouselHome';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navigation />
            <Container>
                <CarouselHome />
            </Container>
            <Footer />
        </>
    )
}

export default Home;