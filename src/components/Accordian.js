import React, { useState } from 'react';

const Accordian = () => {
    const [activeIndices, setActiveIndices] = useState([]);

    const mockData = [
        { heading: 'Header 1', body: 'Content 1' },
        { heading: 'Header 2', body: 'Content 2' },
        { heading: 'Header 3', body: 'Content 3' },
    ];

    const toggleItem = (index) => {
        if (activeIndices.includes(index)) {
            setActiveIndices(activeIndices.filter((i) => i !== index));
        } else {
            setActiveIndices([...activeIndices, index]);
        }
    };

    return (
        <div className="accordian w-full max-w-md mx-auto bg-white shadow-md rounded-md">
            {mockData.map((item, index) => (
                <div
                    className="accordian-item border-b last:border-none"
                    key={index}
                >
                    <div
                        className="accordian-header flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                        onClick={() => toggleItem(index)}
                    >
                        <span className="font-medium text-gray-800">
                            {item.heading}
                        </span>
                        <span className="arrow text-gray-500">
                            {activeIndices.includes(index) ? '▼' : '▶'}
                        </span>
                    </div>
                    {activeIndices.includes(index) && (
                        <div className="accordian-content p-4 bg-gray-50 text-gray-700">
                            {item.body}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordian;