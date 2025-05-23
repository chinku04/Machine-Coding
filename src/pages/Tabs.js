import TabInterest from "../components/tabInterest";
import TabProfile from "../components/tabProfile";
import TabSetting from "../components/tabSetting";
import './pageStyles.css';
import React from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const [error, SetErrors] = React.useState({});
    const [data, setData] = React.useState({
        name: 'John',
        age: 25,
        email: 'kkkkk'
    });
    const myTabs = [
        {
            id: 0, title: 'profile', components: TabProfile, validate: () => {
                const err = {};
                debugger
                if (data.name.length < 3) {
                    err.name = "name should be greater than 3"
                }
                if (data.age < 18) {
                    err.age = "age should be greater than 18"
                }
                if (data.email.length < 3) {
                    err.email = "email should be greater than 3"
                }
                SetErrors(err)
                return err.name || err.age || err.email ? false : true
            }
        },
        { id: 1, title: 'setting', components: TabSetting, validate: () => { return true } },
        { id: 2, title: 'intrest', components: TabInterest, validate: () => {return true } },
    ]
    console.log("activeTab", activeTab);
    const MyRenderedComponent = myTabs[activeTab].components
    console.log("activeTab < myTabs.length ", data);
    return (
        <div className="p-4">
            <div className="flex space-x-4 border-b-2 pb-2">
                {myTabs.map((tab, index) => {
                    return (
                        <div
                            key={index}
                            className={`cursor-pointer px-4 py-2 ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </div>
                    );
                })}
            </div>
            <div className="mt-4">
                <MyRenderedComponent data={data} setData={setData} error={error} />
            </div>
            <div className="mt-4 flex space-x-4">
                {activeTab < myTabs.length - 1 && (
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => myTabs[activeTab].validate() && setActiveTab((prev) => prev + 1)}
                    >
                        Next
                    </button>
                )}
                {activeTab >= 1 && (
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        onClick={() => setActiveTab((prev) => prev - 1)}
                    >
                        Prev
                    </button>
                )}
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => console.log(data)}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
export default Tabs;