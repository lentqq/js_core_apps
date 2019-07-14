function loadRepos() {
	let repos = document.getElementById('repos');
	repos.innerHTML = '';
	let username = document.getElementById('username').value;
	let url = `http://api.github.com/users/${username}/repos`;

	fetch(url)
	.then((response) => response.json())
	.then((data) => displayRepos(data))
	.catch((err) => displayError(err))
};

function createRepo(name, url) {

};

function displayRepos(repoItems) {
	repoItems.forEach(repo => {
		let { full_name, html_url } = repo;
		let repoItem = createRepo(full_name, html_url);
		repos.appendChild(repoItem);
	});
};

function displayError(err) {
	let listItem = document.createElement('li');listItem.textContent = err;
	repos.appendChild(listItem)
};