import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import CarouselHome from '../components/CarouselHome';
import Footer from '../components/Footer';
import TabHome from '../components/TabHome';

function Home() {
    return (
        <>
            <Navigation />
            <Container>
                <CarouselHome />
                <TabHome />
            </Container>
            <Footer />
        </>
    )
}

export default Home;