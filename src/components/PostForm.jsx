import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export const PostForm = ({ create }) => {
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    create({
      ...newPost,
      id: Date.now(),
    });
    setNewPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={newPost.title}
        onInput={(e) =>
          setNewPost({
            ...newPost,
            title: e.target.value,
          })
        }
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={newPost.body}
        onInput={(e) =>
          setNewPost({
            ...newPost,
            body: e.target.value,
          })
        }
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};
