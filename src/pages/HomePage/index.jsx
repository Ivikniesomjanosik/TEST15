import { Jokes } from '../../components/Jokes/Jokes';
import './style.css';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const jsonData = await response.json();
      setJokes(jsonData.data);
    };
    getData();
  }, []);

  return (
    <>
      {jokes.map(joke => <Jokes key={joke.id} userAvatar={joke.avatar} userName={joke.name} text={joke.text} likes={joke.likes} dislikes ={joke.dislikes}  />
        
      )}
      
    </>
  );
};
