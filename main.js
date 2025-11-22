const searchInput = document.querySelector('.search_input');
const BASE_URL = 'https://restcountries.com/v3.1/';

let searchInputLength = 0;

const onTyping = event => {
  console.log(event.currentTarget.value);
  let query = event.currentTarget.value;
  // console.log(event.currentTarget.value.length)
  // searchInputLength = event.currentTarget.value.length;
  fetchCountries(query).then(result => {
    if (result.length > 10) {
      alert('stop');
    }
    console.log(result);
  });
};

searchInput.addEventListener('input', onTyping);

const fetchCountries = name => {
  return fetch(`${BASE_URL}name/${name}`).then(response => {
    // console.log(response)
    return response.json();
  });
};
