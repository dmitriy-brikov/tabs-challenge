const API_KEY = 'f4e1d1c7-6b82-4b0f-bb98-27685977ae0e';
const API_URL = 'https://content.guardianapis.com';

const getData = async (pattern) => {
  const response = await fetch(`${API_URL}/search?section=${pattern}&api-key=${API_KEY}`);
  const data = await response.json();

  return data.response;
};

export default getData;