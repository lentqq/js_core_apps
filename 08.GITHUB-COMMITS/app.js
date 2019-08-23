function loadCommits() {
    let userName = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let ulCommits = document.getElementById('commits');
    ulCommits.innerHTML = 'Loading...'

    fetch(`https://api.github.com/repos/${userName}/${repo}/commits`)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(response.error);
            };

            return response.json()
        })
        .then((data) => {

            ulCommits.innerHTML = '';

            let messages = data.map((item) => {
                return item.commit.message;
            });

            for (const key in messages) {
                if (messages.hasOwnProperty(key)) {
                    const message = messages[key];
                    let listItem = document.createElement('li');
                    listItem.textContent = `Svetlin Nakov: ${message}`;
                    ulCommits.appendChild(listItem);
                }
            }
        })
        .catch((error) => {
            ulCommits.innerHTML = '';
            let listItem = document.createElement('li');
            listItem.textContent = `Error: ${JSON.stringify(error)}`;
            ulCommits.appendChild(listItem);
        });
}

