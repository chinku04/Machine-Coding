import React, { useEffect } from 'react';



const OtpComponent = ({ number = 4 }) => {
    const [inputValue, setInputValue] = React.useState(new Array(number).fill());
    const refArr = React.useRef([]);


    useEffect(() => {
        refArr.current[0]?.focus();
    }
    , []);
    return (
        <div>
            <h1>OTP Component</h1>
            {inputValue?.map((n, i) => (<input
                key={i}
                type="text"
                ref={(input) => {
                    refArr.current[i] = input;
                }
                }
                value={n}
                onChange={(e) => {
                    if (e.target.value.length <= 1 && !isNaN(e.target.value)) {   
                        setInputValue   ((prev) => {
                            const newValue = [...prev];
                            newValue[i] = e.target.value;
                            return newValue;
                        }
                        );
                        e.target.value && refArr.current[i+1]?.focus();

                    }
                }
                }
                onKeyDown={(e => {
                    if (e.key === 'Backspace'  && !e.target.value) {
                        refArr.current[i - 1]?.focus();
                    }
                }
                )}
                maxLength="1"
                className="w-12 h-12 text-center border rounded-lg mr-2"
            />
            ))}
        </div>
    );
}
export default OtpComponent;