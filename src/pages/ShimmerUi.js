import React from 'react';
// import './ShimmerUi.css';
import Body from './Shimmer/Body';

const ShimmerUi = () => {
    return (
        <div className="shimmer-wrapper">
            <Body />
            <div className="shimmer"></div>
        </div>
    );
};

export default ShimmerUi;