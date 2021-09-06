import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Searchbar from '../components/Searchbar.js';
import Notification from '../components/Notification.js';
import Category from '../components/Category.js';
import Currentnewsarticle from '../components/Currentnewsarticle.js';
import Trandingnews from '../components/Trandingnews.js';

export default function home() {
    return (
        <div className="bg-white h-100">
            <Container>
                <div className="topnavbar pt-3 pb-3">
                    <Row>
                        <Col xs='10'>
                            <Searchbar />
                        </Col>
                        <Col xs='2'>
                            <Notification />
                        </Col>
                    </Row>
                </div>

                <Category />

                <div className="slidemove">
                    <div className="currentNews">
                     <Currentnewsarticle/>
                    </div>
                    </div>
                    

                    <div className="trendingnews">
                        <div className="d-flex justify-content-between align-items-center pt-2 pb-2 mb-3">
                            <h4 className="mb-0">Trending news</h4>
                            <a href="/" className="viewall" >View all</a>
                        </div>
                        <ul className="trandingnews">
                            <Trandingnews />
                            <Trandingnews />
                            <Trandingnews />
                        </ul>
                    </div>


            </Container>
        </div>
            )
}
