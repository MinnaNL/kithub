export const fetchData = async (endpoint,options = {}) => {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error('baseUrl saknas');
  }
  const url = `${process.env.BASE_URL}${endpoint}`;

    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        console.error(
         ` Error in fetchData: §{endpoint} - ${response.status} - ${response.statusText}`
        );
        throw new Error(
          `Det gick fel i fetchData för URL ${url} - ${response.status} - ${response.statusText}`
        );
      }
      if (response.status === 204) {
        const result = await response.json();
        return result;
      } 
      return null;
    }
    catch (error) {
      console.error('Ett fel inträffade i fetchData:', error.message);

        throw new Error(
          `Det gick fel i fetchData: ${endpoint} - ${error.message}`
        );
      }
  };