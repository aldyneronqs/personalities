import { useState } from 'react';
import { heat_legendsList } from './data.js';
import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < heat_legendsList.length - 1;
  const hasPrev = index > 0; 

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : heat_legendsList.length - 1));
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = heat_legendsList[index];

  return (
    <>
      <div><h1>Aldyne Ronquillo</h1></div>
      <button onClick={handleBackClick} disabled={!hasPrev}>
        Back
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        Player Name: {sculpture.player_name}
      </h2>
      <h3>
        ({index + 1} of {heat_legendsList.length})
      </h3>
      <button className='details' onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img className='photo'
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
