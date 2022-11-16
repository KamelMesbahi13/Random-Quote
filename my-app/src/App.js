import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

const url = 'https://api.adviceslip.com/advice';


const App = () => {

  const [advice, setAdvice] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response);
      setAdvice(response.data.slip.advice);
      console.log(advice);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  },[])
  

  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={fetchData}>
          <span>GIVE ME ADVICE!!</span>
        </button>
      </div>
    </div>
  )
}

export default App