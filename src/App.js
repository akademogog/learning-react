import React, { useState } from 'react'
// import useRef from 'react';
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Javascript - язык программирования'},
    {id: 2, title: 'Javascript 2', body: 'Javascript - язык программирования'},
    {id: 3, title: 'Javascript 3', body: 'Javascript - язык программирования'}
  ])

  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  // const bodyInputRef = useRef() // Для неуправляемого компонента (хук useRef)

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: posts.length + 1}])
    setPost({
      title: '',
      body: ''
    })
    // console.log(bodyInputRef.current.value); // Для неуправляемого компонента (хук useRef)
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onInput={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder='Название поста'
        />
        <MyInput
          // ref={bodyInputRef} // Для неуправляемого компонента (хук useRef)
          value={post.body}
          onInput={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты про JS'/>
    </div>
  );
}

export default App;
