import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom';


const items = [
  {text: 'This is a text.',
  author: 'Kari'},

  {text: 'This is another text',
  author: 'Ole'},

  {text: 'random text ',
  author: 'Fiona'},

  {text: 'This one is from',
  author: 'Nordmann'}
  
];

const recentlyUsedList = (props) =>{

  return (
    <div>
      <h4>{props.text}</h4>
      <p>{props.author}</p>
    </div>
  );
};

  const App = (props) => {

    const recentlyUsedListArray = items.map((item) => {
      return (
        <recentlyUsedList text={item.text} author={item.author} />
      );
    });

    return(
      <div>
        <h2> All Items </h2>
        {recentlyUsedListArray}
      </div>
    );
  };
export default App;

