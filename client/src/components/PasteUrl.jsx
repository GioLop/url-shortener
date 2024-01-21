import * as React from 'react';

const PasteUrl = (props) => {
  return (
    <>
      <p>Paste the URL to be shortened</p>
      <div>
        <input
          placeholder="Enter the link here"
          onChange={props.onInputChange}/>
        <button onClick={props.onButtonClick}>Shorten URL</button>
      </div>
    </>
  )
};

export default PasteUrl;