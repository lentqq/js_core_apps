function loadCommits() {
    let userName = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let ulCommits = document.getElementById('commits');
    const url = `https://api.github.com/repos/${userName}/${repo}/commits`;
    ulCommits.innerHTML = 'Loading...'

    fetch(url)
        .then(handler)
        .then((data) => {

            ulCommits.innerHTML = '';

            let messages = data.map((item) => {
                return item.commit.message;
            });

            for (const key in messages) {
                if (messages.hasOwnProperty(key)) {
                    const message = messages[key];
                    let listItem = document.createElement('li');
                    listItem.textContent = `${userName}: ${message}`;
                    ulCommits.appendChild(listItem);
                }
            }
        })
        .catch((error) => console.log(error));

    const handler = function (response) {
        if (response.status >= 400) {
            throw new Error(`Network response is not OK!!! Error: ${response.statusText}`);
        };

        return response.json();
    }
};

