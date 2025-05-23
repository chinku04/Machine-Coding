import React from 'react';
// import './Shimmer.css';

const Shimmer = () => {
    return Array(25).fill(0).map((n, i) => <div className="w-64 h-75  p-5 m-5 border border-gray-300 rounded-lg shadow-lg bg-gray-100">
        {/* <img src={url} alt={title} className="meme-card-image" /> */}
        <div className="meme-card-content w-64 h-75">
            {/* <h2 className="meme-card-title">{title}</h2>
        <p className="meme-card-description">{author}</p> */}
        </div>
    </div>

    );
};

export default Shimmer;