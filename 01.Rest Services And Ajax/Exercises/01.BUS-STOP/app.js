function getInfo() {
  let inputValue = document.getElementById('stopId').value;
  let url = `https://judgetests.firebaseio.com/businfo/${inputValue}.json `;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('stopName').textContent = data.name;
      document.getElementById('buses').innerHTML = '';
      let buses = Object.entries(data.buses);

      for (let [busNumber, arriveTime] of buses) {
        let liElement = document.createElement('li');
        liElement.textContent = `Bus ${busNumber} arrives in ${arriveTime} minutes.`
        document.getElementById('buses').appendChild(liElement);
      };
    })
    .catch((error) => {
      document.getElementById('stopName').textContent = 'Error!'
    });

  document.getElementById('stopId').value = '';
}