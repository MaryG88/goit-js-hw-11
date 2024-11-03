const API_KEY = "46865368-ded5de9c0791206e82b93b274";
const BASE_URL = 'https://pixabay.com/api/';


    const params = new URLSearchParams({
      key: API_KEY,
      q: '',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 12,
    });
    
    const fetchImages = (query) => {
        params.set('q', query);
      
        return fetch(`https://pixabay.com/api/?${params}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.status);
            }
      
            return response.json();
          })
          .then((response) => {
            if (response.hits.length === 0) {
              throw new Error('Sorry, there are no images matching your search query. Please try again!');
            }
      
            return response.hits.map(hit => ({
              webformatURL: hit.webformatURL,
              largeImageURL: hit.largeImageURL,
              tags: hit.tags,
              likes: hit.likes,
              views: hit.views,
              comments: hit.comments,
              downloads: hit.downloads,
            }));
          })
          .catch((error) => {throw error});
      };
      
      export { fetchImages };


