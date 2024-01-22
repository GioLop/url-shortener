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
      <h2 className='heading2'>Your shortened URL</h2>
      <p className='body-text center-text'>Copy the short link and share it in messages, texts, posts, websites and other locations.</p>
      <div>
        <input 
          defaultValue={shortUrl}
          className='input-box'/>
        <button 
          variant="contained"
          onClick={handleButtonClick}
          className='button'>Copy URL</button>
        <div className='center-text'>
          <p className='body-text'>
            Long URL:
          </p> 
          <a href={props.longUrl}
             target={'_blank'}
             rel="noreferrer"
             className='link'>
            {props.longUrl}
          </a>
        </div>
      </div>
    </>
  )
};

export default Shortener