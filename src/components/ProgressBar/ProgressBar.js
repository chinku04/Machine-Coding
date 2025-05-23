import { use, useEffect, useState } from "react";

const Progressbar = ({progress}) => {
    // take progress value as props
    // use a sytate variable to update the progress value
    // useEffect to update the progress value with timeout
    // make outer div overflow hidden
    // use trnasform transLateX for width
    // transition as ease in out
    const [animated, setAnimated] = useState(0);
    useEffect(() => {

        setTimeout(() => {
            setAnimated(progress);
        }, 100); // Delay for animation effect
    }, [progress]); 
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Progress Bar</h1>
            <div className="w-full max-w-md bg-gray-200 rounded-full h-6 overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ 
                    
                    // width: `${animated-100}%`, 
                    transform: `translateX(${animated-100}%)`,
                    transition: '0.5s ease-in-out',
                    
                    }}></div>
            </div>
            <p className="mt-2">{progress}%</p>
        </div>
    );
}
export default Progressbar;