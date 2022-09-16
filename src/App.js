import axios from "axios";
import React, { useState, useEffect } from "react";
import PostFilter from "./components/PostFilter";
import { PostForm } from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePost";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visibleModal, setVisibleModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };

  async function fetchPosts() {
    const respons = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(respons.data);
  }

  useEffect(() => {
    fetchPosts();
  }, [])
  
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: "20px" }}
        onClick={() => setVisibleModal(true)}
      >
        Создать пост
      </MyButton>
      <hr style={{ margin: "10px 0px 5px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        remove={removePost}
        title="Посты про JS"
      />
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm posts={posts} create={createPost} />
      </MyModal>
    </div>
  );
}

export default App;
