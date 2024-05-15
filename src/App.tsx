import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import state from "./redux/state";

const App = () => {

  let message = state.profilePage.posts[0].message;
  let message2 = state.profilePage.posts[1].message;

  return (
    <BrowserRouter>
      <div className='App'>
        APP HELLO
        <Routes>
          <Route path='/hello/' element={<HelloMessage message={message} />} />
          <Route path='/bye' element={<ByeMessage message={message2} />} />
        </Routes>
      </div>
    </ BrowserRouter>
  );
}


type MessageType = {
  message: string
}

function HelloMessage(props: MessageType) {
  debugger
  return <h1>{props.message}</h1>
}

const ByeMessage: React.FC<MessageType> = (props) => {
  return <h1>{props.message}</h1>
}






export default App;
