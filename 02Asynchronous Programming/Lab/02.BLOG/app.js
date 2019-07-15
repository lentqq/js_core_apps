let select = document.getElementById('posts');
let allPosts = [];

function loadPosts() {

    fetch(`https://blog-apps-c12bf.firebaseio.com/posts.json`)
        .then(handler)
        .then((data) => {
             select.innerHTML = '';

            let fragment = document.createDocumentFragment();

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    allPosts.push(element);
                    let option = document.createElement('option');
                    option.value = element.id;
                    option.innerHTML = element.title;
                    fragment.appendChild(option);
                }
            }
            select.appendChild(fragment);
        })

}

loadPosts();

function viewPosts() {
    let postId = select.value;
    let commentsDiv = document.getElementById('post-comments');
    commentsDiv.innerHTML = '';

    for (let i = 0; i < allPosts.length; i++) {
        if (allPosts[i].id === postId) {
         
            document.getElementById('post-title').innerHTML = `<h1>${allPosts[i].title}</h1>`;
            document.getElementById('post-body').innerHTML = `<h2>${allPosts[i].body}</h2>`;

            fetch(`https://blog-apps-c12bf.firebaseio.com/comments.json`)
                .then(handler)
                .then((data) => {
                    let fragment = document.createDocumentFragment(); 
                    for (const key in data) {
                        if (data.hasOwnProperty(key)) {
                            const element = data[key];
                            if(element.postId === postId) {
                                commentsDiv.innerHTML += `<h4>${element.text}</h4>`;
                            }
                        }
                    }
                });
            return;
        }
    };
};


viewPosts();

function handler(response) {
    if (response.status > 400) {
        throw new Error();
    }
    return response.json();
}