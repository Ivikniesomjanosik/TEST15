import { useState } from 'react';
import './Jokes.css';

export const Jokes = ({userAvatar, userName, text, likes, dislikes}) => {
  const [likeAmount, setLike] = useState(likes);

  const handleClick = () => {
    setLike(likeAmount + 1);
  };

  const [dislikeAmount, setDislike] = useState(dislikes);

  const handleClickDislike = () => {
    setDislike(dislikeAmount + 1);
  };

  return (
    <div className="container">
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar"
            src={userAvatar}
          />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">
          {text}
        </p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleClick}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likeAmount}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleClickDislike}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislikeAmount}
        </span>
      </div>
    </div>
    </div>
  );
};
