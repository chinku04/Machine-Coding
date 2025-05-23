import React, { useEffect, useState } from 'react';

const cardImages = [
    '🪖', '🧪', '💍', '📜', '🛡️', '⚔️'
];

function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const handleClick = (card) => {
        console.log("card", card);
        if (disabled || card.flipped || card.matched) return;
        const flippedCard = { ...card, flipped: true };
        const updatedCards = cards.map(c => (c.id === card.id ? flippedCard : c));
        setCards(updatedCards);

        if (!firstCard) {
            setFirstCard(flippedCard);
        } else {
            setSecondCard(flippedCard);
            setDisabled(true);

            if (firstCard.symbol === flippedCard.symbol) {
                // Mark both as matched
                setCards(prev =>
                    prev.map(c =>
                        c.symbol === flippedCard.symbol ? { ...c, matched: true } : c
                    )
                );
                resetTurn();
            } else {
                // Flip back after delay
                setTimeout(() => {
                    setCards(prev =>
                        prev.map(c =>
                            c.id === firstCard.id || c.id === flippedCard.id
                                ? { ...c, flipped: false }
                                : c
                        )
                    );
                    resetTurn();
                }, 1000);
            }
        }
    };
    // Shuffle and start new game
    const shuffleCards = () => {
        const shuffled = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((symbol, index) => ({
                id: index,
                symbol,
                matched: false,
                flipped: false
            }));

        setCards(shuffled);
        setFirstCard(null);
        setSecondCard(null);
    };
    useEffect(() => {
        shuffleCards();
    }, []);
    const resetTurn = () => {
        setFirstCard(null);
        setSecondCard(null);
        setDisabled(false);
    };

    return (
        <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h1>🧠 Memory Game</h1>
            <button onClick={shuffleCards} style={{ marginBottom: 20 }}>New Game</button>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 80px)',
                gap: '10px',
                justifyContent: 'center'
            }}>
                {cards.map(card => (
                    <div
                        key={card.id}
                        onClick={() => handleClick(card)}
                        style={{
                            width: 80,
                            height: 80,
                            fontSize: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: card.flipped || card.matched ? '#fff' : '#333',
                            color: card.flipped || card.matched ? '#000' : 'transparent',
                            border: '1px solid #999',
                            borderRadius: 10,
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                    >
                        {card.symbol}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MemoryGame;
