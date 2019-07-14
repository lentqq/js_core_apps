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
      let person = Object.entries(data);

      for (const [key, value] of person) {
         let listItem = document.createElement('li');
         listItem.textContent = `${key}: ${value}`;
         document.getElementById('info').appendChild(listItem);
         document.getElementById('info').style.color = 'yellow';
      }
   })
};
