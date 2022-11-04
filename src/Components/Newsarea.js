import React, { useEffect, useState } from 'react';
import Newstemplets from './Newstemplets';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const Newsarea = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [foramttedArticles, setForamttedArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    const formateArticle = () => {
        foramttedArticles.forEach((element) => {
            if (element.title !== null) {
                element.title = element.title.length > 75 ? element.title.slice(0, 75) + "..." : element.title;
            }
            if (element.description !== null) {
                element.description = element.description.length > 150 ? element.description.slice(0, 150) + "..." : element.description;
            }
        });
    }

    const fetchData = async () => {
        //props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        //props.setProgress(40);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        // setForamttedArticles(parsedData.articles);
        //props.setProgress(80);
        // formateArticle();
        //props.setProgress(100);
    }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setTotalResults(parsedData.totalResults);
        // setForamttedArticles(parsedData.articles);
        // formateArticle();
        setArticles(articles.concat(parsedData.articles));
    }

    const capitalizeAllChar = (string) => {
        return string.toUpperCase();
    }

    return (
        <div key={props.key} className="container my-2" style={{ display: "flex", flexDirection: "column", justifyContent: "center" , marginBottom: "4vw"}}>
            <div className="heading" style={{ display: "flex", justifyContent: "center"}}><h1><span className="badge bg-secondary">{capitalizeAllChar(props.category)} HEADLINES</span></h1></div>
            {/* {console.log(articles)} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== ((totalResults< 100) ? totalResults : 100)}
                loader={<div style={{ width: "100%", display: "flex", justifyContent: "space-around", margin: "3vh 0", padding: "10vh" }}><Spinner /></div>}
            scrollableTarget="scrollableArea"
            >
                <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap",justifyContent:"center", paddingBottom:"6vh"}}>
                {articles.map((element, index) => {
                    return (
                        <span key={props.category + index} id="scrollableArea">
                            <Newstemplets key={"newsof" + props.category + index} title={element.title} description={element.description} imageUrl={element.urlToImage} siteUrl={element.url} source={element.source.name} />
                        </span>
                    )
                })}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Newsarea

Newsarea.defaultProps = {
    pageSize: 8,
    gridSyl: "auto auto auto auto",
    category: "general"
}

Newsarea.propTypes = {
    pageSize: PropTypes.number,
    gridSyl: PropTypes.string,
    category: PropTypes.string
}