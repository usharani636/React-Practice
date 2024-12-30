import React, { useState } from 'react';
import MyIncrement from './practice/Increment';
import MyTasks from './practice/mapexamples/Tasks';
import MyMap from './practice/mapexamples/Actions';
import MyList from './practice/mapexamples/list';
import Items from './practice/mapexamples/GridItems';
import Task from './practice/mapexamples/Task';
import Form from './practice/Form';
import Toggle from './practice/Toggling';
import FetchData from './practice/Fetch/FetchData';
import WindowWidth from './practice/EventListner';
import Timer from './practice/Timer';
import PostData from './practice/Fetch/fetchPost';
import AsyncFetchExample from './practice/Fetch/fetchAsync';
import DeleteData from './practice/Fetch/fetchDelete';
import FetchCommentsForPost from './featchMultipile';
import CopyArray from './practice/spreadOperator/copyingArray';
import SpreadDefaults from './practice/spreadOperator/Overrides';

function App() {
  return (
    <div>
       <MyList/>
      <MyIncrement/>
      <MyTasks/>
      <MyMap/>
      <Items/>
      <Task/>
      <Form/>
      <Toggle/>
      <FetchData/>
      <WindowWidth/> 
      <Timer/>
      <PostData/>
      <AsyncFetchExample/>
      <DeleteData/>
      <FetchCommentsForPost/>
      <CopyArray/>
      <SpreadDefaults/>
    </div>
  );
}

export default App;

