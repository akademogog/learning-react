import React, { useState } from "react";
import { PostForm } from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "аа",
      body: "бб",
    },
    {
      id: 2,
      title: "гг 2",
      body: "аа",
    },
    {
      id: 3,
      title: "вв 3",
      body: "яя",
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm posts={posts} create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          dafaultValue="Сортировка"
          value={selectedSort}
          onChange={sortPosts}
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList posts={posts} remove={removePost} title="Посты про JS" />
      ) : (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Посты не были найдены :(
        </h1>
      )}
    </div>
  );
}

export default App;
