import * as React from 'react';
import getMostVisitedUrls from '../utils/networking/getMostVisitedUrls';

const MostVisited = (props) => {
  const [urlsList, setUrlsList] = React.useState([]);
  const baseUrl = window.location.origin;
  
  React.useEffect(() => {
    getMostVisitedUrls()
      .then((data) => {
        setUrlsList(data);
      })
  }, []);

  return (
    <>
      <h2 className='heading2'>The 10 most visited short links:</h2>
      <ul>
        {
          urlsList.map((url) => {
            return (
              <li>
                <h4>{`${baseUrl}/${url.id}`}</h4>
                <p>{`${url.target}`}</p>
                <p>{`Times Visited: ${url.timesVisited}`}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  )
};

export default MostVisited;