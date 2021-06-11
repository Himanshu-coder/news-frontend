import React from "react";
import { CardColumns, Card, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import PublishedAt from '../../common/PublishedAt';
import "./LatestNews.css";

const LatestNewsView = ({ newsData, loadMoreData, handleViewNews }) => (
    <>
        <CardColumns>
            <InfiniteScroll
                dataLength={newsData?.articles?.length}
                next={loadMoreData}
                hasMore={newsData?.nextPage}
                loader={<div><Spinner animation="border" variant="success" /></div>}
            >
                {newsData?.articles?.map((e, i) => (
                    <Card key={i} onClick={() => handleViewNews(e)} className="card-pointer">
                        <Card.Img variant="top" src={e?.urlToImage} />
                        <Card.Body>
                            <Card.Title>{e?.title}</Card.Title>
                            <Card.Text>{e?.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                <PublishedAt dateString={e?.publishedAt} />                    
                            </small>
                        </Card.Footer>
                    </Card>
                ))}
            </InfiniteScroll>
        </CardColumns>
    </>
);
export default LatestNewsView;
