import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useCustomEventListener } from "react-custom-events";

import { displayNotifications } from '../../lib/helper';
import { notificationCodes, latestNews } from '../../lib/constants';

import LatestNewsView from "./LatestNewsView";
import ViewSelectedNews from "./ViewSelectedNews";

const LatestNews = () => {
    const [newsData, setNewsData] = useState({ articles: [] });
    const [selectedNews, setSelectedNews] = useState(null);

    const requestNewsData = useCallback(
        (search) => {
            const params = {
                page: search === undefined ? (newsData?.page || 0) + 1 : 1,
                pageSize: 12,
                search: search === undefined ? newsData?.search : search,
            };
            axios
                .get(latestNews?.getNewsListUrl, { params })
                .then(function (response) {
                    let responseData = {
                        nextPage: response?.data?.result?.nextPage,
                        totalResults: response?.data?.result?.totalResults,
                            articles:
                                search === undefined
                                    ? [
                                        ...newsData?.articles,
                                        ...response?.data?.result?.articles,
                                    ]
                                    : [...response?.data?.result?.articles],
                        page: search === undefined ? params?.page : 1,
                        search: search === undefined ? params.search : search,
                    };
                    setNewsData(responseData);
                })
                .catch(function (error) {
                    displayNotifications(latestNews?.errorMessage, notificationCodes.error);
                });
        },
        [newsData?.articles, newsData?.page, newsData?.search]
    );
    useCustomEventListener("search", (data) => {
        requestNewsData(data);
        setNewsData({ articles: [] });
    });

    useEffect(() => {
        requestNewsData();
    }, []);
    const handleViewNews = useCallback((e) => {
        console.log("e.target.id", e);
        setSelectedNews(e);
    }, []);
    const handleBackButton = useCallback((e) => {
        setSelectedNews(null);
    }, []);
    return (
        <Container>
            {selectedNews ? (
                <ViewSelectedNews
                    selectedNews={selectedNews}
                    handleBackButton={handleBackButton}
                />
            ) : (
                <LatestNewsView
                    newsData={newsData}
                    loadMoreData={requestNewsData}
                    handleViewNews={handleViewNews}
                />
            )}
        </Container>
    );
};

export default LatestNews;
