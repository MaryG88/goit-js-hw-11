import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.text-input');
const loaderContainer = document.querySelector('.loader-container');

const showMessage = (type, title, message) => {
    iziToast[type]({
      title,
      message,
      timeout: 2500,
      progressBar: false,
      position: 'center'
    });
  };
  
  const errorMessage = (message, title = '') => {
    showMessage('error', title, message);
  };
  
  const successMessage = (message, title = '') => {
    showMessage('success', title, message);
  };

function showLoader() {
    loaderContainer.style.display = 'flex';
  }
  
  function hideLoader() {
    loaderContainer.style.display = 'none';
  }


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = input.value.trim();
    if (query.length === 0) {
        return;
      }
  
    if (!query) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search query!',
        position: 'topRight'
      });
      return;
    }


  showLoader();
    fetchImages(query)
    .then(images => {
        renderImages(gallery, images);
        hideLoader();
      })
      .catch((error) => {
        errorMessage(error.message);
        hideLoader();
        gallery.innerHTML = '';
      });
  });
   


