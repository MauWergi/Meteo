let searchFormElement = document.querySelector("#search-form");
console.log(searchFormElement);

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
}

searchFormElement.addEventListener("submit", handleSearchSubmit);
