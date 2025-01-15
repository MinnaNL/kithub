const baseUrl = 'http://localhost:3001'; // Use the json-server base URL

export const fetchData = async (endpoint, options = {}) => {
  const url = `${baseUrl}/${endpoint}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      console.error(
        `Error in fetchData: ${endpoint} - ${response.status} - ${response.statusText}`
      );
      throw new Error(
        `Failed to fetch data from URL ${url} - ${response.status} - ${response.statusText}`
      );
    }

    if (response.status === 204) {
      return null;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Ett fel inträffade i fetchData:', error.message);
    throw new Error(
      `Det gick fel i fetchData: ${endpoint} - ${error.message}`
    );
  }
};