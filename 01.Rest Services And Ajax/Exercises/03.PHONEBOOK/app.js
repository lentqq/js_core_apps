function attachEvents() {
 document.getElementById('btnLoad').addEventListener('click', function() {
    let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let values = Object.values(data);

        for (let value of values) {
            let name = value.person;
            let phoneNumber = value.phone;
            
            let btnDelete = document.createElement('button');
            btnDelete.textContent = 'DELETE';

            let listItem = document.createElement('li');
            listItem.textContent = `${name}: ${phoneNumber}`;
            listItem.appendChild(btnDelete);
            document.getElementById('phonebook').appendChild(listItem);
        }
    });
 });
}

attachEvents();