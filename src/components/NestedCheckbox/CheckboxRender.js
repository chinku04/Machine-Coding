const CheckboxRender = ({ data, checked, setChecked ,CheckboxData}) => {
    console.log("CheckboxRender", data);
    const handleCheckboxChange = (isChecked, item) => {

        setChecked((prev) => {
            // create copy of prev state
            const newChecked = { ...prev };
            if (isChecked) {
                delete newChecked[item.id];
            } else {
                newChecked[item.id] = true;
            }

            const updateChildren = (children) => {
                return children.map((child) => {
                    const childId = child.id;
                    if (isChecked) {
                        delete prev[childId];
                    } else {
                        prev[childId] = true;
                    }
                    if (child.children) {
                        updateChildren(child.children);
                    }
                    return child;
                });
            }
            if (item.children) {
                updateChildren(item.children);
            }


            // const verifyParent = (node) => {
            //     if (!node.children) return newChecked[node.id] || false;
            //     const allcheck = node.children.every((child) => verifyParent(child));
            //     newChecked[node.id] = allcheck;
            //     return allcheck;
            // }
            // // console.log("CheckboxData", CheckboxData);
            // data.forEach((parent) => verifyParent(parent));


            return newChecked;

        });
    }
    return (
        <div>
            {Array.isArray(data) && data.map((item, index) => {
                const isChecked = !!checked[item.id];
                return (
                    <div key={item.id} className="checkbox-item pl-5">
                        <input
                            type="checkbox"
                            id={item.id}
                            checked={isChecked}
                            onChange={() => handleCheckboxChange(isChecked, item)}

                            className="mr-2"
                        />
                        <label htmlFor={item.id} className="pl-3">{item.name}</label>
                        {item.children && (
                            <div className="nested-checkbox mr-4">
                                <CheckboxRender data={item.children}
                                    checked={checked}
                                    setChecked={setChecked}
                                    onChange={handleCheckboxChange}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    )
}
export default CheckboxRender;