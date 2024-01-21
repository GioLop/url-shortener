import * as React from 'react';

const Shortener = (props) => {
  const baseUrl = window.location.origin;
  const shortUrl = `${baseUrl}/${props.shortUrl}`

  const handleButtonClick = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <>
      <h2>Your shortened URL</h2>
      <p>Copy the short link and share it in messages, texts, posts, websites and other locations.</p>
      <div>
        <input defaultValue={shortUrl} />
        <button variant="contained" onClick={handleButtonClick}>Copy URL</button>
        <div>Long URL: 
          <a href={props.longUrl} target={'_blank'} rel="noreferrer">
            {props.longUrl}
          </a>
        </div>
      </div>
    </>
  )
};

export default Shortener