import React from 'react'
import PropTypes from 'prop-types'

const Newstemplets = (props) => {

    return (
        <div className='card' id="scrollableArea" style={{ width: "300px", margin: "1vh" }}>
            <img src={props.imageUrl} className="card-img-top" alt="News-Image" />
            <div className="card-body" style={{ height: "auto" }}>
                <div className="translate-start badge rounded-pill bg-danger">
                    {props.source}
                    <span className="visually-hidden">unread messages</span>
                </div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div><a href={props.siteUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More..</a></div>
            </div>
        </div>
    )
}

export default Newstemplets

Newstemplets.defaultProps = {
    key: 1,
    imageUrl: "https://drive.google.com/file/d/14NVRi1EU-pIeQKYwFIgPboZzaMcqRCTp/view?usp=share_link",
    source: "RealTimeNews",
    title: "No NEWS title",
    description: "No News description",
    siteUrl: "/"
}

Newstemplets.propTypes = {
    key: PropTypes.number,
    imageUrl: PropTypes.string,
    source: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    siteUrl: PropTypes.string
}