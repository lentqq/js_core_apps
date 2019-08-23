const loadCommits = async() => {

    let userName = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let container  = document.getElementById('commits');
    let urlCommits = `https://api.github.com/repos/${userName}/${repository}/commits`;
    container.innerHTML = 'Loading...';

    await fetch(urlCommits)
    .then(handler)
    .then((data) => {
        container.innerHTML = '';
        let messages = data.map((item) => {
            return item.commit.message;
        });
        
        for (const key in messages) {
            if (messages.hasOwnProperty(key)) {
                const message = messages[key];
                let itemList = document.createElement('li');
                itemList.textContent = `${userName}: ${message}`;
                container.appendChild(itemList);
            }
        }

    })
    .catch((error) => console.error(error));
}

const handler  = function (response) {

    if (response.status >= 400) {
        throw new Error(`Network response is not OK!!! Error: ${response.statusText}`);
    }
    return response.json();
};

// loadCommits();