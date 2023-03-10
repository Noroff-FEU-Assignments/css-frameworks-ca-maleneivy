import React from 'react';
import Navigation from '../components/Navigation';
import NewsCard from '../components/NewsCard';
import { Container, Row, Col } from 'react-bootstrap';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import PaginationNews from '../components/PaginationNews';

function News() {
    return (
        <>
            <Navigation />

            <div className="wrapper">
                <Container>
                    <Heading content="News" />
                    <PaginationNews />
                    <Row>
                        <Col xl={3} l={4} md={5} sm={12}>
                            <NewsCard title="Nunc porttitor vel" description="Nunc malesuada eget est fringilla dapibus." imageUrl="images/news/news-1.jpg" />
                        </Col>
                        <Col xl={3} l={4} md={5} sm={12}>
                            <NewsCard title="Nunc porttitor vel" description="Nunc malesuada eget est fringilla dapibus." imageUrl="images/news/news-2.jpg" />
                        </Col>
                        <Col xl={3} l={4} md={5} sm={12}>
                            <NewsCard title="Nunc porttitor vel" description="Nunc malesuada eget est fringilla dapibus." imageUrl="images/news/news-3.jpg" />
                        </Col>
                        <Col xl={3} l={4} md={5} sm={12}>
                            <NewsCard title="Nunc porttitor vel" description="Nunc malesuada eget est fringilla dapibus." imageUrl="images/news/news-4.jpg" />
                        </Col>
                        <Col xl={3} l={4} md={5} sm={12}>
                            <NewsCard title="Nunc porttitor vel" description="Nunc malesuada eget est fringilla dapibus." imageUrl="images/news/news-5.jpg" />
                        </Col>
                        <Col xl={3} l={4} md={5} sm={12}>
                            <NewsCard title="Nunc porttitor vel" description="Nunc malesuada eget est fringilla dapibus." imageUrl="images/news/news-6.jpg" />
                        </Col>
                        <Col xl={3} l={4} md={5} sm={12}>
                            <NewsCard title="Nunc porttitor vel" description="Nunc malesuada eget est fringilla dapibus." imageUrl="images/news/news-7.jpg" />
                        </Col>
                        <Col xl={3} l={4} md={5} sm={12}>
                            <NewsCard title="Nunc porttitor vel" description="Nunc malesuada eget est fringilla dapibus." imageUrl="images/news/news-8.jpg" />
                        </Col>
                    </Row>
                    <PaginationNews />
                </Container>
            </div>

            <Footer />
        </>
    )
}

export default News;