import { useState } from "react";
import CheckboxRender from "./CheckboxRender";

export const CheckboxData = [
  {
    id: 1,
    name: 'Parent 1',
    isChecked: false,
    children: [
      {
        id: 2,
        name: 'Child 1.1',
        isChecked: false,
      },
      {
        id: 3,
        name: 'Child 1.2',
        isChecked: false,
      },
    ],
  },
  {
    id: 4,
    name: 'Parent 2',
    isChecked: false,
    children: [
      {
        id: 5,
        name: 'Child 2.1',
        isChecked: false,
        children: [
          {
            id: 7,
            name: 'Child 2.1.1',
            isChecked: false,
          },
          {
            id: 8,
            name: 'Child 2.1.2',
            isChecked: false,
            
          },
        ],
      },
      {
        id: 6,
        name: 'Child 2.2',
        isChecked: false,
      },
    ],
  },
]

const NestedCheckbox = () => {
  const [checked, setChecked] = useState({
    // 1: true,
    // 5: true
  });
  return (
    <div>
      <h2>Nested Checkbox</h2>
      <p>This is a nested checkbox component.</p>
      <CheckboxRender data={CheckboxData} checked={checked} setChecked={setChecked} />
    </div>
  );
}
export default NestedCheckbox;