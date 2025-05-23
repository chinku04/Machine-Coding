import React from 'react';
import PropTypes from 'prop-types';
// import './MemeCard.css';

const MemeCard = ({ meme }) => {
    const { title, url, author } = meme;
    return (
        <div className="w-64 h-65  p-5 m-5 border border-gray-300 rounded-lg shadow-lg">
            <img src={url} alt={title} className="meme-card-image" />
            <div className="meme-card-content">
                <h2 className="meme-card-title">{title}</h2>
                <p className="meme-card-description">{author}</p>
            </div>
        </div>
    );
};

MemeCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default MemeCard;