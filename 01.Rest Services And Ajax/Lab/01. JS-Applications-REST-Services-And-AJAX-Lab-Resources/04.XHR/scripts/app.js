function loadRepos() {
   // let req = new XMLHttpRequest();
   // req.onreadystatechange = function () {
   //    if (this.readyState === 4 && this.status === 200) {
   //       document.getElementById('res').textContent = this.responseText;

   //    }
   // };
   // req.open('GET', 'https://swapi.co/api/people/1',true);
   // // req.open('GET','https://swapi.co/api/planet/1', true);
   // req.send();

   let url = `https://swapi.co/api/people/1`;

   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         document.body.style.backgroundImage = "url('640759.jpg')";
         document.getElementById('info').innerHTML = '';
         let person = Object.entries(data);

         for (const [key, value] of person) {
            let listItem = document.createElement('li');
            listItem.textContent = `${key}: ${value}`;
            // let pElement = document.createElement('p');
            // listItem.innerHTML = <h1>`${key}: ${value}`</h1>;
            // pElement.appendChild(listItem);
            document.getElementById('info').appendChild(listItem);
            document.getElementById('info').style.color = 'yellow';
         }
      })
};