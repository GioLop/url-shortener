const getShortUrl = async (url) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url })
  };
  
  const response = await fetch('http://localhost:3001/api/', requestOptions);
  const shortUrlObj = await response.json();

  return shortUrlObj;
};

module.exports = getShortUrl;