import React from 'react';
import CommentList from './CommentList';


const NestedData=[
    {
        id: 1,
        name: 'John Doe',
        comment: 'This is a comment',
        replies: [
            {
                id: 2,
                name: 'Jane Doe',
                comment: 'This is a reply',
                replies: []
            }
        ]
    },
    {
        id: 3,
        name: 'Sam Smith',
        comment: 'This is another comment',
        replies: []
    }
]
const NestedComments = () => {
    return (
        <div>
            <h1>Nested Comments</h1>
            {/* <CommentForm /> */}
            <CommentList comments={NestedData} />
        </div>
    );
}
export default NestedComments;