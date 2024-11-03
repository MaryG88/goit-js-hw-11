import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const getGalleryItem = ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
      <div class="gallery-img-info">
         <p class="info-item-title"><b>Likes</b>${likes}</p>
          <p class="info-item-title"><b>Views</b>${views}</p>
          <p class="info-item-title"><b>Comments</b>${comments}</p>
          <p class="info-item-title"><b>Downloads</b>${downloads}</p>
         
        </div>
    </a>
  </li>`;
  };
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 300,
    overlay: true,
    overlayOpacity: 0.5,
  });
  
  lightbox.on('show.simplelightbox', function () {
  });
  
  lightbox.on('closed.simplelightbox', function () {
  });
  
  const renderImages = (gallery, images) => {
    gallery.innerHTML = images.map(image => getGalleryItem(image)).join('');
    lightbox.refresh();
  };
  
  export {renderImages};