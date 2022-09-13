import React from "react";

function PostItem({ post, number, remove }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <button onClick={() => remove(post)}>Удалить</button>
      </div>
    </div>
  );
}

export default PostItem;
