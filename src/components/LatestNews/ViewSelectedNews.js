import React from "react";
import { Nav, Card } from "react-bootstrap";

import PublishedAt from '../../common/PublishedAt';

const ViewSelectedNews = ({ selectedNews, handleBackButton }) => {
    return (
        <>
            <Card className="text-center">
                <Card.Header>
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link onClick={handleBackButton}>Back</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {selectedNews?.title}
                </Card.Header>
                <Card.Body>
                    <Card.Title>{selectedNews?.description}</Card.Title>
                    <Card.Img variant="top" src={selectedNews?.urlToImage} />
                    <Card.Text>{selectedNews?.content}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <PublishedAt dateString={selectedNews?.publishedAt} />                    
                </Card.Footer>
            </Card>
        </>
    );
};

export default ViewSelectedNews;
