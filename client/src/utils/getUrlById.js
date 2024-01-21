const getUrlById = async (id) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  
  const response = await fetch(`http://localhost:3001/api/${id}`, requestOptions);
  const shortUrlObj = await response.json();

  return shortUrlObj;
};

export default getUrlById;