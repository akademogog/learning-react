import React, { useState, useMemo } from "react";
import PostFilter from "./components/PostFilter";
import { PostForm } from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";

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
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visibleModal, setVisibleModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setVisibleModal(true)}>Создать пост</MyButton>
      <hr style={{margin: '10px 0px'}} />
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
