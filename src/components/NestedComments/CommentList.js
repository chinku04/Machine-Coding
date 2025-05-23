const CommentList = ({ comments, onDeleteComment, onEditComment }) => {
    return (
        <div className="ml-4">
            {comments.map((comment) => (
                <div key={comment.id} className="mb-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <strong>{comment.name}</strong>
                            <p>{comment.comment}</p>
                        </div>
                        {/* <div>
                            <button onClick={() => onEditComment(comment.id)} className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                            <button onClick={() => onDeleteComment(comment.id)} className="text-red-500 hover:text-red-700">Delete</button>
                        </div> */}
                    </div>
                    {comment.replies && comment.replies.length > 0 && (
                        <CommentList comments={comment.replies} onDeleteComment={onDeleteComment} onEditComment={onEditComment} />
                    )}
                </div>
            ))}
        </div>
    );
}
export default CommentList;