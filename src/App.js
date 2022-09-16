import React, { useState, useEffect } from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import { PostForm } from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePost";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visibleModal, setVisibleModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostLoading, setIsPostLoading] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };

  async function fetchPosts() {
    setIsPostLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

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
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm posts={posts} create={createPost} />
      </MyModal>
      <hr style={{ margin: "10px 0px 5px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostLoading ? (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}><Loader/></div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          title="Посты про JS"
        />
      )}
    </div>
  );
}

export default App;
