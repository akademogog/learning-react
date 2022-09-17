import React, { useState, useEffect } from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import { PostForm } from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import Pagination from "./components/UI/pagination/Pagination";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePost";
import { getPageCount } from "./utils/page";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const changePage = (page) => {
    setPage(page);
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };

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
      {postError && <h1>Ошибка загрузки ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          title="Посты про JS"
        />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
    </div>
  );
}

export default App;
