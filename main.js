const searchInput = document.querySelector('.search_input');
const countryList = document.querySelector('.country_list');
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
    }else if(result.length === 1){

    } else {
      countryList.textContent = '';
      result.map(country => {
        // console.log(country)
        // console.log(country.name)
        console.log(country.name.common)
        console.log(countryList.textContent);
        console.log(countryList.textContent.includes(country.name.common));

                if(countryList.textContent.includes(country.name.common)){
                  console.log('Well well well')
                  return ;
                } else{
        countryList.insertAdjacentHTML('beforeend', `<li>${country.name.common}</li>`)
                }

        console.log(countryList);
      });
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
