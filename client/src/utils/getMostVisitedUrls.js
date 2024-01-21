const getMostVisitedUrls = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  
  const response = await fetch('http://localhost:3001/api/', requestOptions);
  const urlsList = await response.json();

  return urlsList;
};

export default getMostVisitedUrls;