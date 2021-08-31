import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Searchbar from '../components/Searchbar.js';
import Notification from '../components/Notification.js';
import Category from '../components/Category.js';
import Currentnews from '../components/Currentnews.js';
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
                        <div className="d-flex justify-content-between align-items-center pt-2 pb-2">
                            <h4 className="mb-0">Current news</h4>
                            <a href="/" className="viewall" >View all</a>
                        </div>

                        <ul className="card-news-view">
                            <Currentnews cnewsimage="https://cdn.cnn.com/cnnnext/dam/assets/210827083539-03-afghanistan-0827-super-tease.jpg" cnewsheadline="hello news" cnewscat="buisness"/>
                           
                        </ul>
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
