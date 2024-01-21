import * as React from 'react';
import getMostVisitedUrls from '../utils/getMostVisitedUrls';

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
      <div>The 10 most visited short links:</div>
      <ul>
        {
          urlsList.map((url) => {
            return (
              <li>
                <h4>{`Short Link: ${baseUrl}/${url.id}`}</h4>
                <p>{`Long Link: ${url.target}`}</p>
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