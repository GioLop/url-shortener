const updateUrlVisits = async (id, timesVisited) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ timesVisited: timesVisited })
  };

  const response = await fetch(`http://localhost:3001/api/${id}`, requestOptions);
  const shortUrlObj = await response.json();

  return shortUrlObj;
};

export default updateUrlVisits;