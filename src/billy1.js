// src/billy1.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatFacts = () => {
  const [facts, setFacts] = useState([]);
  const [count, setCount] = useState(1);

  const fetchFacts = async (count) => {
    try {
      const response = await axios.get(`https://meowfacts.herokuapp.com/?count=${count}`);
      setFacts(response.data.data);
    } catch (error) {
      console.error('Error fetching the cat facts:', error);
    }
  };

  useEffect(() => {
    fetchFacts(count);
  }, [count]);

  const handleCountChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <div>
      <h1>Ask Billy - The Random Cat Facts</h1>
      <label>
        Number of facts:
        <input
          type="number"
          value={count}
          onChange={handleCountChange}
          min="1"
          max="100"
        />
      </label>
      <button onClick={() => fetchFacts(count)}>Get Cat Facts</button>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatFacts;
