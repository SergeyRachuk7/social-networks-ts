import React, { ChangeEvent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import state, { changeNewText, PostType } from "./redux/state";
import store, { ActionsTypes, addPostAC, PostType, StoreType } from './redux/state';

type PropsType = {
  store: StoreType
}

const App: React.FC<PropsType> = (props) => {

  const state = props.store.getState();

  // let message = state.profilePage.posts[0].message;
  // let message2 = state.profilePage.posts[1].message;

  return (
    <BrowserRouter>
      <div className='App'>
        APP HELLO
        <Routes>
          <Route path='/hello/' element={<HelloMessage posts={state.profilePage.posts} message={state.profilePage.messageForNewPost} dispatch={props.store.dispatch.bind(store)} addPostCallback={props.store.addPost.bind(props.store)} changeNewTextCallback={props.store.changeNewText.bind(props.store)} />}
          />
          {/* <Route path='/bye' element={<ByeMessage message={message2} addPostCallback={addPost} />} /> */}
        </Routes>
      </div>
    </ BrowserRouter>
  );
}


type MessageType = {
  message: string
  posts: Array<PostType>
  addPostCallback: (postText: string) => void
  changeNewTextCallback: (newText: string) => void
  dispatch: (action: ActionsTypes) => void
}

function HelloMessage(props: MessageType) {
  const addPost = () => {
    // props.addPostCallback(props.message)
    props.dispatch(addPostAC(props.message))
  }

  const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewTextCallback(e.currentTarget.value);
  }

  return <div>
    {props.message}
    <hr />
    {props.posts.map(p => <div key={p.id}><b>{p.message}</b></div>)}
    <hr />
    <textarea value={props.message} onChange={newTextChangeHandler} ></textarea>
    <button onClick={addPost}>add post</button>
  </div>
}

const ByeMessage: React.FC<MessageType> = (props) => {
  return <h1>{props.message}</h1>
}



export default App;