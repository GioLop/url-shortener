import * as React from 'react';
import getShortUrl from '../utils/networking/getShortUrl';
import PasteUrl from '../components/PasteUrl';
import Shortener from '../components/Shortener';
import validateUrl from '../utils/validateUrl';

const Home = () => {
  const [url, setUrl] = React.useState('');
  const [settingShortUrl, setSettingShortUrl] = React.useState(false);
  const [shortUrlObj, setShortUrlObj] = React.useState('');
  const [hasShortUrl, setHasShortUrl] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();
    const isValidUrl = validateUrl(url);

    if (isValidUrl) {
      setSettingShortUrl(true);
      setHasError(false);
    } else {
      setSettingShortUrl(false);
      setHasError(true);
    };
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
          hasError={hasError}
          onInputChange={handleInputChange}
          onButtonClick={handleButtonClick}/> 
      }
    </>
  )
};

export default Home