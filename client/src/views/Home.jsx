import * as React from 'react';
import getShortUrl from '../utils/getShortUrl';
import PasteUrl from '../components/PasteUrl';
import Shortener from '../components/Shortener';

const Home = () => {
  const [url, setUrl] = React.useState('');
  const [settingShortUrl, setSettingShortUrl] = React.useState(false);
  const [shortUrlObj, setShortUrlObj] = React.useState('');
  const [hasShortUrl, setHasShortUrl] = React.useState(false);
  
  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();
    setSettingShortUrl(true);
  };

  React.useEffect(() => {
    if (settingShortUrl) {
      getShortUrl(url).then((data) => {
        setShortUrlObj(data);
        setSettingShortUrl(false);
        setHasShortUrl(true);
      });
    }
  }, [settingShortUrl, url]);

  return (
    <>
      {
        hasShortUrl 
        ? <Shortener shortUrl={shortUrlObj.id} longUrl={shortUrlObj.target}/>
        : <PasteUrl
          onInputChange={handleInputChange}
          onButtonClick={handleButtonClick}/> 
      }
    </>
  )
};

export default Home