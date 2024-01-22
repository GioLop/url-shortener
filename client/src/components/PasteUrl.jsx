import * as React from 'react';
import MostVisitedText from './MostVistedText';

const PasteUrl = (props) => {
  console.log(props.hasError);
  return (
    <>
      <p className='body-text center-text'>Paste the URL to be shortened</p>
      { props.hasError && <div className='error'>It should be a valid URL</div> }
      <div>
        <input
          placeholder="Enter the link here"
          onChange={props.onInputChange}
          className='input-box'/>
        <button 
          onClick={props.onButtonClick}
          className='button'>Shorten URL</button>
        <MostVisitedText/>
      </div>
    </>
  )
};

export default PasteUrl;