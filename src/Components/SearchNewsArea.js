import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Newstemplets from './Newstemplets';
import { useNavigate } from 'react-router-dom';


export default function SearchNewsArea(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if (props.searchVal === "") {
            navigate('/');
        } else {
            setLoading(true);
            fetchFirstData();
        }
    }, [])

    const fetchFirstData = async () => {
        let url = `https://newsapi.org/v2/everything?q=${props.searchVal}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(80);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/everything?q=${props.searchVal}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setTotalResults(parsedData.totalResults);
        setArticles(articles.concat(parsedData.articles));
    }

    const capitalizeAllChar = (string) => {
        return string.toUpperCase();
    }

    return (
        <div key={props.key} className="container my-2" style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="heading" style={{ display: "flex", justifyContent: "center" }}><h1><span className="badge bg-secondary">{capitalizeAllChar(props.searchVal)}-HEADLINES</span></h1></div>
            {/* {console.log(articles)} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== ((totalResults< 100) ? totalResults : 100)}
                loader={<div style={{ width: "100%", display: "flex", justifyContent: "space-around", margin: "3vh 0", padding: "10vh" }}><Spinner /></div>}
                scrollableTarget="scrollableArea"
            >
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginBottom: "4vw" }}>
                    {articles.map((element, index) => {
                        return (
                            <span key={props.searchVal + index} id="scrollableArea">
                                <Newstemplets title={element.title} description={element.description} imageUrl={element.urlToImage} siteUrl={element.url} source={element.source.name} />
                            </span>
                        )
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}


SearchNewsArea.defaultProps = {
    pageSize: 8,
    page: 1
}

SearchNewsArea.propTypes = {
    pageSize: PropTypes.number,
    page: PropTypes.number
}