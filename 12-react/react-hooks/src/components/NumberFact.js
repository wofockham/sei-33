import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberFact = () => {
  const [fact, setFact] = useState('Number fact coming soon');

  useEffect(() => {
    axios.get('http://numbersapi.com/random/trivia?json').then((result) => {
      setFact(result.data.text);
    });
  }, []); // [] means only run this function once.

  return (
    <div>
      <h2>Number Trivia Coming Soon</h2>
      <p>
        { fact }
      </p>
    </div>
  );
};

export default NumberFact;
