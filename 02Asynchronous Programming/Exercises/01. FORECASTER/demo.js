function solve() {
    let ulData = document.getElementById('lists');
    let url = `https://testapp-9be15.firebaseio.com/.json`;
    fetch(url)
        .then(handler)
        .then((data) => {
            // console.log(data);
            let info = Object.entries(data);
            // console.log(info[0]);
            let obj = info[0];
            for (let [key, value] of obj) {

                let listItem = document.createElement('li');
                listItem.textContent = `${key}: ${Object.entries(value)}`;
                ulData.appendChild(listItem);
            };
        });

    function handler(response) {
        if (response.status > 400) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return response.json()
    };
}

solve();