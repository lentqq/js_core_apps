function attachEvents() {
  const elements = {
    inputField: document.getElementById('location'),
    button: document.getElementById('submit'),
    currentConditionDiv: document.getElementById('current'),
    upcoming: document.getElementById('upcoming'),
    // divElement: document.getElementsByClassName('forecast')
  };

  const symbols = {
    sunny: '☀',
    partlysunny: '⛅',
    overcast: '☁',
    rain: '☂',
    degrees: '°'
  };

  elements.button.addEventListener('click', loadWeather);

  function loadWeather() {
    // elements.currentConditionDiv.innerHTML = '';
    
    fetch(`https://judgetests.firebaseio.com/locations.json`)
    .then(handler)
    .then(loadWeatherLocation)
    
    // divElement.innerHTML = '';
  }
  
  function loadWeatherLocation(data) {

    let location = data.filter((e) => e.name === elements.inputField.value)[0];

    fetch(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json `)
      .then(handler)
      .then(showCurrentConditionWeather)

    fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${location.code}.json`)
      .then(handler)
      .then(showUpcomingWeather)
  }

  function showCurrentConditionWeather(data) {
    // let currentConditionForecast = data.forecast;
    let divElement = createElement('div', 'forecast');
    let symbol = symbols[data.forecast.condition.toLowerCase()];
    let spanSymbolElement = createElement('span', ['condition', 'symbol'], symbol);
    let spanHolderElement = createElement('span', 'condition');
    let spanNameElement = createElement('span', 'forecast-data', data.name);
    let degrees = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}${symbols.degrees}`;
    // console.log(degrees);
    let spanDegreesElement = createElement('span', 'forecast-data', degrees);
    let spanConditionElement = createElement('span', 'forecast-data', data.forecast.condition);
    spanHolderElement.appendChild(spanNameElement);
    spanHolderElement.appendChild(spanDegreesElement);
    spanHolderElement.appendChild(spanConditionElement);
    divElement.appendChild(spanHolderElement);
    divElement.appendChild(spanSymbolElement);
    elements.currentConditionDiv.appendChild(divElement);
  }

  function showUpcomingWeather(data) {
    // let upcomingForecast = data.forecast;
    let divElement = createElement('div', 'forecast-info');
    let spanHolderElement = createElement('span', 'upcoming');
    let symbol = symbols[data.forecast[0].condition.toLowerCase()];
    let spanSymbolElement = createElement('span', 'symbol', symbol);
    let degrees = `${data.forecast[0].low}${symbols.degrees}/${data.forecast[0].high}${symbols.degrees}`;
    let spanDegreesElement = createElement('span', 'forecast-data', degrees);
    let spanConditionElement = createElement('span', 'forecast-data', data.forecast[0].condition);
    spanHolderElement.appendChild(spanSymbolElement);
    spanHolderElement.appendChild(spanDegreesElement);
    spanHolderElement.appendChild(spanConditionElement);
    divElement.appendChild(spanHolderElement);
    elements.upcoming.appendChild(divElement);

    divElement = createElement('div', 'forecast-info');
    spanHolderElement = createElement('span', 'upcoming');
   symbol = symbols[data.forecast[1].condition.toLowerCase()];
    spanSymbolElement = createElement('span', 'symbol', symbol);
     degrees = `${data.forecast[1].low}${symbols.degrees}/${data.forecast[1].high}${symbols.degrees}`;
    spanDegreesElement = createElement('span', 'forecast-data', degrees);
     spanConditionElement = createElement('span', 'forecast-data', data.forecast[1].condition);
    spanHolderElement.appendChild(spanSymbolElement);
    spanHolderElement.appendChild(spanDegreesElement);
    spanHolderElement.appendChild(spanConditionElement);
    divElement.appendChild(spanHolderElement);
    elements.upcoming.appendChild(divElement);

    divElement = createElement('div', 'forecast-info');
    spanHolderElement = createElement('span', 'upcoming');
     symbol = symbols[data.forecast[2].condition.toLowerCase()];
    spanSymbolElement = createElement('span', 'symbol', symbol);
     degrees = `${data.forecast[2].low}${symbols.degrees}/${data.forecast[2].high}${symbols.degrees}`;
    spanDegreesElement = createElement('span', 'forecast-data', degrees);
     spanConditionElement = createElement('span', 'forecast-data', data.forecast[2].condition);
    spanHolderElement.appendChild(spanSymbolElement);
    spanHolderElement.appendChild(spanDegreesElement);
    spanHolderElement.appendChild(spanConditionElement);
    divElement.appendChild(spanHolderElement);
    elements.upcoming.appendChild(divElement);
  }

  function createElement(tagName, className, textContent) {
    let currentElement = document.createElement(tagName);

    if (className) {
      if (typeof className === 'string') {
        currentElement.classList.add(className);
      } else if (typeof className === 'object') {
        currentElement.classList.add(...className);

      }
    }
    if (textContent) {
      currentElement.textContent = textContent;
    }

    return currentElement;
  }

  function handler(response) {
    if (response.status > 400) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  }

};

attachEvents();