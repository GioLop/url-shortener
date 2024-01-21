import * as React from 'react';
import { useParams } from "react-router-dom";
import getUrlById from '../utils/getUrlById';
import updateUrlVisits from '../utils/updateUrlVisits';

const Id = () => {
  const { id } = useParams();
  
  React.useEffect(() => {
    getUrlById(id)
      .then((data) => {
        updateUrlVisits(id, parseInt(data.timesVisited) + 1)
          .then(() => {
            window.location.href = data.target;
          })
      });
  }, [id]);

  return ('');
};

export default Id