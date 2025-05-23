import React, { use, useEffect, useState } from 'react';
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';
// import './Body.css';

const Body = () => {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleScroll = () => {
        // window.scrollY +window.innerHeight == document.body.scrollHeight means page bottom reached
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            fetchData();
        }
    }
    useEffect(() => {
        fetchData()
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const fetchData = () => {
        setLoading(true);
        fetch('https://meme-api.com/gimme/20')
            .then(response => response.json())
            .then(data => {
                setMemes(prevMemes => [...prevMemes, ...data.memes]);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching memes:', error);
                setLoading(false);
            });
    }
    console.log("loading---->", loading);
    return (
        <div className="flex flex-wrap">
            {memes.map((meme, index) => (<MemeCard key={index} meme={meme} />))}
            {loading && <Shimmer />}

        </div>
    );
};

export default Body;